"""
台股盤中自動同步腳本 (Intra-day Auto Fetcher)
適用時間：盤中交易時間 (09:00 - 13:30) 或 盤後結算 (14:30)

執行方式：
  python auto_fetch_live.py

說明：
  執行後腳本會每 30 秒自動向 Yahoo 股市 API 抓取選股池內全數個股最新價格、開高低、MA均線與成交量，
  並自動寫入 js/data/stock-pool.js。網頁點擊「手動同步」或開啟自動刷新即可 100% 呈現當下盤中真實數據！
"""
import urllib.request
import json
import time
import os
import re

def fetch_stock(symbol):
    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}?interval=1d&range=2mo"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            result = data['chart']['result'][0]
            meta = result['meta']
            quote = result['indicators']['quote'][0]
            
            closes = quote.get('close', [])
            opens = quote.get('open', [])
            highs = quote.get('high', [])
            lows = quote.get('low', [])
            vols = quote.get('volume', [])
            
            valid_bars = []
            for i in range(len(closes)):
                if closes[i] is not None and opens[i] is not None and highs[i] is not None and lows[i] is not None:
                    v = vols[i] if (i < len(vols) and vols[i] is not None) else 0
                    valid_bars.append({
                        'open': round(float(opens[i]), 2),
                        'high': round(float(highs[i]), 2),
                        'low': round(float(lows[i]), 2),
                        'close': round(float(closes[i]), 2),
                        'volume': int(v // 1000) # 張
                    })
            
            if not valid_bars:
                return None
            
            latest = valid_bars[-1]
            prev = valid_bars[-2] if len(valid_bars) > 1 else latest
            
            c_list = [b['close'] for b in valid_bars]
            v_list = [b['volume'] for b in valid_bars]
            
            ma5 = round(sum(c_list[-5:]) / min(len(c_list), 5), 2)
            ma10 = round(sum(c_list[-10:]) / min(len(c_list), 10), 2)
            ma20 = round(sum(c_list[-20:]) / min(len(c_list), 20), 2)
            
            vMa5 = int(sum(v_list[-5:]) / min(len(v_list), 5))
            vMa10 = int(sum(v_list[-10:]) / min(len(v_list), 10))
            
            prev_close = prev['close']
            limit_up = round(prev_close * 1.10, 2)
            
            return {
                'price': latest['close'],
                'open': latest['open'],
                'high': latest['high'],
                'low': latest['low'],
                'prevClose': prev_close,
                'volume': latest['volume'],
                'ma5': ma5,
                'ma10': ma10,
                'ma20': ma20,
                'vMa5': vMa5,
                'vMa10': vMa10,
                'limitUpPrice': limit_up
            }
    except Exception as e:
        return None

def sync_pool():
    pool_file = os.path.join(os.path.dirname(__file__), 'js', 'data', 'stock-pool.js')
    if not os.path.exists(pool_file):
        return
    
    with open(pool_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pool_json_match = re.search(r'const\s+STOCK_DATABASE\s*=\s*(\[\s*\{.*\}\s*\]);', content, re.DOTALL)
    if not pool_json_match:
        return
    
    stocks = json.loads(pool_json_match.group(1))
    
    updated_count = 0
    for s in stocks:
        code = s['code']
        is_two = code in ['3707', '6488', '5483', '3260', '8299', '8069', '3293', '6182']
        symbol = f"{code}.TWO" if is_two else f"{code}.TW"
        data = fetch_stock(symbol)
        if data:
            s.update(data)
            updated_count += 1

    new_json_str = json.dumps(stocks, ensure_ascii=False, indent=2)
    prefix = content[:pool_json_match.start(1)]
    suffix = content[pool_json_match.end(1):]
    
    now_str = time.strftime("%Y-%m-%d %H:%M:%S")
    new_content = prefix + new_json_str + suffix
    
    with open(pool_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"[{now_str}] 成功更新全數 {updated_count}/{len(stocks)} 檔個股盤中最新行情！")

if __name__ == '__main__':
    print("==================================================")
    print("  台股盤中波段選股工具 - 自動即時數據同步服務 (09:00-13:30)")
    print("==================================================")
    print("正在即時輪詢 Yahoo 股市 API，每 30 秒自動更新...")
    try:
        while True:
            sync_pool()
            time.sleep(30)
    except KeyboardInterrupt:
        print("\n自動同步服務已停止。")
