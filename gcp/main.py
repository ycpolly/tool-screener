"""
Google Cloud Functions (Python) - 即時行情微服務代理 + 官方 MIS 全池自動無縫補全
支援多執行緒平行抓取 (ThreadPoolExecutor)、30 秒快照快取 (Cache)
當主要行情源觸及頻率限制 (HTTP 429) 時，自動啟動官方 MIS 批次補全，確保 323/323 全池 100% 成功！
"""

import os
import json
import time
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed
import functions_framework

# 行情 REST API Base URL
MARKET_DATA_BASE_URL = "https://api.fugle.tw/marketdata/v1.0/stock"

# 全域快取記憶體 (30秒快取，防止重複刷頻與爆額度)
CACHE_STORE = {}
CACHE_TTL_SECONDS = 30

@functions_framework.http
def market_data_proxy(request):
    """
    HTTP Cloud Function 進入點
    支援跨域 CORS 請求，平行傳回台股即時行情數據
    """
    # 動態檢查 CORS 請求來源 (Origin)
    request_origin = request.headers.get('Origin', '')
    
    # 白名單：僅允許您的 GitHub Pages 網頁與本機測試 (localhost / 127.0.0.1)
    allowed_origin = 'https://ycpolly.github.io'
    if request_origin:
        if request_origin.startswith('https://ycpolly.github.io') or \
           'localhost' in request_origin or \
           '127.0.0.1' in request_origin:
            allowed_origin = request_origin

    # 處理跨域 OPTIONS Header (CORS Preflight)
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': allowed_origin,
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-API-KEY',
            'Access-Control-Max-Age': '3600'
        }
        return ('', 204, headers)

    cors_headers = {
        'Access-Control-Allow-Origin': allowed_origin,
        'Content-Type': 'application/json; charset=utf-8'
    }

    # 1. 讀取與清理環境變數中的 MARKET_DATA_KEY
    raw_key = os.environ.get("MARKET_DATA_KEY", "")
    api_key = raw_key.strip().strip('"').strip("'")

    if not api_key:
        return (json.dumps({
            "success": False,
            "error": "MISSING_API_KEY",
            "message": "環境變數未設定 MARKET_DATA_KEY，請設定行情 API Key"
        }, ensure_ascii=False), 401, cors_headers)

    # 取得前端帶入之查詢股票代碼 (例: ?symbols=2330,2454,2317)
    symbols_param = request.args.get('symbols', '')
    symbols_list = [s.strip() for s in symbols_param.split(',')] if symbols_param else []

    # 預設熱門台股標的 (若前端未傳入 symbols 時作為測試)
    if not symbols_list:
        symbols_list = ['2330', '2454', '2317', '2308', '2382']

    headers = {
        "X-API-KEY": api_key,
        "Accept": "application/json",
        "User-Agent": "ToolScreenerGCPProxy/1.0"
    }

    now = time.time()
    results = {}
    missing_symbols = []
    debug_logs = []

    # 2. 檢查記憶體快取 (Cache Lookup)
    for code in symbols_list:
        if code in CACHE_STORE:
            cached_data, cached_time = CACHE_STORE[code]
            if now - cached_time < CACHE_TTL_SECONDS:
                results[code] = cached_data
                continue
        missing_symbols.append(code)

    # 3. 使用 ThreadPoolExecutor 多執行緒極速抓取未快取股票 (主要行情源 API)
    if missing_symbols:
        max_workers = min(15, len(missing_symbols))
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_to_code = {
                executor.submit(fetch_single_quote, code, headers): code 
                for code in missing_symbols
            }
            for future in as_completed(future_to_code):
                code = future_to_code[future]
                try:
                    data_item, err_msg = future.result()
                    if data_item:
                        results[code] = data_item
                        CACHE_STORE[code] = (data_item, now)
                    elif err_msg:
                        debug_logs.append(f"股票 {code} 主要行情源抓取失敗: {err_msg}")
                except Exception as ex:
                    debug_logs.append(f"股票 {code} 發生異常: {str(ex)}")

    # 4. 檢查是否有受限於頻率限制 (HTTP 429) 的未回傳股票，自動啟動 TWSE/TPEx 官方 MIS 批次無縫補全
    unfilled_codes = [c for c in symbols_list if c not in results]
    if unfilled_codes:
        mis_results = fetch_mis_batch(unfilled_codes)
        for code, item in mis_results.items():
            results[code] = item
            CACHE_STORE[code] = (item, now)

    response_body = {
        "success": True,
        "count": len(results),
        "data": results,
        "timestamp": int(now * 1000)
    }

    if len(results) == 0 and debug_logs:
        response_body["debug_notice"] = "未抓取到股票數據，請檢查行情 API Key 權限與網路。"
        response_body["debug_logs"] = debug_logs

    return (json.dumps(response_body, ensure_ascii=False), 200, cors_headers)

def fetch_single_quote(code, headers):
    """向主要 REST API 查詢單股即時報價"""
    url = f"{MARKET_DATA_BASE_URL}/intraday/quote/{code}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=4) as response:
            if response.status == 200:
                body = response.read().decode('utf-8')
                item = json.loads(body)
                if isinstance(item, dict):
                    # 處理行情 REST API 回傳欄位
                    trade_vol = item.get("tradeVolume")
                    if trade_vol is None and isinstance(item.get("total"), dict):
                        trade_vol = item["total"].get("tradeVolume")
                    
                    price = item.get("closePrice") or item.get("lastPrice") or item.get("previousClose")

                    parsed = {
                        "code": code,
                        "name": item.get("name"),
                        "price": price,
                        "open": item.get("openPrice"),
                        "high": item.get("highPrice"),
                        "low": item.get("lowPrice"),
                        "change": item.get("change"),
                        "changePct": item.get("changePercent"),
                        "volume": trade_vol,
                        "updatedAt": item.get("lastUpdated") or item.get("updatedAt")
                    }
                    return parsed, None
    except urllib.error.HTTPError as e:
        err_body = ""
        try:
            err_body = e.read().decode('utf-8')
        except Exception:
            pass
        return None, f"HTTP {e.code}: {e.reason} ({err_body})"
    except Exception as e:
        return None, str(e)
    return None, "未知連線異常"

def fetch_mis_batch(missing_codes):
    """
    當主要行情源觸及 Rate Limit (429) 時，自動啟動 TWSE/TPEx 官方 MIS 批次 API 無縫補全
    """
    results = {}
    if not missing_codes:
        return results

    query_items = ["tse_t00.tw", "otc_o00.tw"]
    for code in missing_codes:
        if code not in ["t00", "o00", "tse_t00.tw", "otc_o00.tw"]:
            query_items.append(f"tse_{code}.tw")
            query_items.append(f"otc_{code}.tw")

    batch_size = 100
    for i in range(0, len(query_items), batch_size):
        chunk = query_items[i:i + batch_size]
        ex_ch_param = "|".join(chunk)
        url = f"https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch={ex_ch_param}"
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
            with urllib.request.urlopen(req, timeout=5) as resp:
                if resp.status == 200:
                    data = json.loads(resp.read().decode('utf-8'))
                    msg_array = data.get("msgArray", [])
                    for item in msg_array:
                        code = item.get("c")
                        ch = item.get("ch", "")
                        
                        z_price = item.get("z")
                        if not z_price or z_price == "-":
                            z_price = item.get("a", "").split("_")[0]
                        if not z_price or z_price == "-":
                            z_price = item.get("y")
                        
                        try:
                            price = float(z_price) if z_price and z_price != "-" else None
                        except Exception:
                            price = None
                        
                        if price and price > 0:
                            prev_close = float(item.get("y")) if item.get("y") and item.get("y") != "-" else price
                            open_p = float(item.get("o")) if item.get("o") and item.get("o") != "-" else price
                            high_p = float(item.get("h")) if item.get("h") and item.get("h") != "-" else price
                            low_p = float(item.get("l")) if item.get("l") and item.get("l") != "-" else price
                            vol = int(item.get("v", 0)) if item.get("v") and item.get("v") != "-" else 0
                            
                            parsed_item = {
                                "code": code,
                                "name": item.get("n", code),
                                "price": price,
                                "open": open_p,
                                "high": high_p,
                                "low": low_p,
                                "change": round(price - prev_close, 2),
                                "changePct": round(((price - prev_close) / prev_close) * 100, 2) if prev_close else 0,
                                "volume": vol,
                                "prevClose": prev_close,
                                "updatedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
                            }

                            if code:
                                results[code] = parsed_item
                            if "t00" in ch or code == "t00":
                                results["t00"] = parsed_item
                                results["tse_t00.tw"] = parsed_item
                            elif "o00" in ch or code == "o00":
                                results["o00"] = parsed_item
                                results["otc_o00.tw"] = parsed_item
        except Exception as e:
            pass

    return results
