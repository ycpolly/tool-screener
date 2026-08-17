import urllib.request, json, re, ssl, time
from datetime import datetime
from concurrent.futures import ThreadPoolExecutor, as_completed

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def decode_fubon_html(raw_bytes):
    for enc in ['cp950', 'big5-hkscs', 'big5', 'utf-8']:
        try:
            return raw_bytes.decode(enc)
        except Exception:
            continue
    return raw_bytes.decode('big5', errors='ignore')

def fetch_moneydj_0050():
    print("Connecting to MoneyDJ to fetch 0050 constituent holdings and weights...")
    url = "https://www.moneydj.com/ETF/X/Basic/Basic0007B.xdjhtm?etfid=0050.TW"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, context=ctx) as resp:
            html = resp.read().decode('utf-8', errors='ignore')

        date_m = re.search(r'ctl00_ctl00_MainContent_MainContent_sdate3[^>]*>([^<]+)', html)
        data_date = date_m.group(1).replace("資料日期：", "").strip() if date_m else datetime.now().strftime("%Y/%m/%d")

        table_m = re.search(r'<table[^>]*id="[^"]*stable3"[^>]*>(.*?)</table>', html, re.DOTALL)
        table_html = table_m.group(1) if table_m else ""

        rows = re.findall(r'<tr[^>]*>(.*?)</tr>', table_html, re.DOTALL)
        stocks_0050 = []
        for r in rows:
            raw_cells = re.findall(r'<td[^>]*>(.*?)</td>', r, re.DOTALL)
            cells = [re.sub(r'<[^>]+>', '', c).strip() for c in raw_cells]
            if len(cells) >= 2:
                name_code_str = cells[0]
                match = re.search(r'([^(]+)\((\d{4})\.TW\)', name_code_str)
                if match:
                    name = match.group(1).strip()
                    code = match.group(2).strip()
                    weight_val = cells[1].replace("%", "").strip()
                    stocks_0050.append({
                        "code": code,
                        "name": name,
                        "weight": f"{weight_val}%" if weight_val else ""
                    })

        print(f"MoneyDJ 0050 holdings count: {len(stocks_0050)}, Date: {data_date}")
        return data_date, stocks_0050
    except Exception as e:
        print("Error fetching MoneyDJ 0050:", e)
        return datetime.now().strftime("%Y/%m/%d"), []

def fetch_fubon_top50(url, market_name):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, context=ctx) as resp:
            html = decode_fubon_html(resp.read())

        date_m = re.search(r'(\d{2}/\d{2})', html)
        if not date_m:
            date_m = re.search(r'(\d{4}[/-]\d{1,2}[/-]\d{1,2})', html)
        data_date = date_m.group(1).replace('-', '/') if date_m else datetime.now().strftime("%m/%d")

        rows = re.findall(r'<tr[^>]*>(.*?)</tr>', html, re.DOTALL)
        stocks = []
        for r in rows:
            stk_m = re.search(r"Link2Stk\('([^']+)'\)[^>]*>(.*?)</a>", r)
            if stk_m:
                code = stk_m.group(1).strip()
                raw_name = stk_m.group(2).strip()
                clean_name = re.sub(r'<[^>]+>', '', raw_name).replace('&nbsp;', '').strip()
                name = re.sub(rf'^{code}\s*', '', clean_name).strip()

                cells = [re.sub(r'<[^>]+>', '', c).replace('&nbsp;', '').strip() for c in re.findall(r'<td[^>]*>(.*?)</td>', r, re.DOTALL)]
                if len(cells) >= 6:
                    vol_str = cells[5].replace(',', '').strip()
                    if vol_str.isdigit():
                        vol = int(vol_str)
                        stocks.append({
                            "code": code,
                            "name": name if name else code,
                            "volume": vol,
                            "market": market_name
                        })
        print(f"Fubon DJ {market_name} volume count: {len(stocks)}, Date: {data_date}")
        return data_date, stocks
    except Exception as e:
        print(f"Error fetching Fubon DJ {market_name} volume:", e)
        return datetime.now().strftime("%Y/%m/%d"), []

def fetch_fubon_buy_rank(url, market_name):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, context=ctx) as resp:
            html = decode_fubon_html(resp.read())

        date_m = re.search(r'(\d{2}/\d{2})', html)
        if not date_m:
            date_m = re.search(r'(\d{4}[/-]\d{1,2}[/-]\d{1,2})', html)
        data_date = date_m.group(1).replace('-', '/') if date_m else datetime.now().strftime("%m/%d")

        rows = re.findall(r'<tr[^>]*>(.*?)</tr>', html, re.DOTALL)
        stocks = []
        for r in rows:
            stk_m = re.search(r"Link2Stk\('([^']+)'\)[^>]*>(.*?)</a>", r)
            if stk_m:
                code = stk_m.group(1).strip()
                raw_name = stk_m.group(2).strip()
                clean_name = re.sub(r'<[^>]+>', '', raw_name).replace('&nbsp;', '').strip()
                name = re.sub(rf'^{code}\s*', '', clean_name).strip()

                cells = [re.sub(r'<[^>]+>', '', c).replace('&nbsp;', '').replace(',', '').strip() for c in re.findall(r'<td[^>]*>(.*?)</td>', r, re.DOTALL)]
                buy_vol = 0
                for c in reversed(cells):
                    if c.lstrip('-').isdigit():
                        buy_vol = int(c)
                        break

                stocks.append({
                    "code": code,
                    "name": name if name else code,
                    "buyVol": buy_vol,
                    "market": market_name
                })
        print(f"Fubon DJ {market_name} buy rank count: {len(stocks)}, Date: {data_date}")
        return data_date, stocks
    except Exception as e:
        print(f"Error fetching Fubon DJ {market_name} buy rank:", e)
        return datetime.now().strftime("%m/%d"), []

def fetch_fubon_value_rank(url, market_name):
    print(f"Fetching Fubon DJ Value Rank for {market_name}...")
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, context=ctx) as resp:
            html = decode_fubon_html(resp.read())

        date_m = re.search(r'(\d{2}/\d{2})', html)
        if not date_m:
            date_m = re.search(r'(\d{4}[/-]\d{1,2}[/-]\d{1,2})', html)
        data_date = date_m.group(1).replace('-', '/') if date_m else datetime.now().strftime("%m/%d")

        rows = re.findall(r'<tr[^>]*>(.*?)</tr>', html, re.DOTALL)
        stocks = []
        for r in rows:
            cols = re.findall(r'<td[^>]*>(.*?)</td>', r, re.DOTALL)
            if len(cols) >= 6:
                stk_m = re.search(r"Link2Stk\('([^']+)'\)", cols[1])
                if stk_m:
                    code = stk_m.group(1).strip()
                    clean_name = re.sub(r'<[^>]+>', '', cols[1]).replace('&nbsp;', '').strip()
                    name = re.sub(rf'^{code}\s*', '', clean_name).strip()

                    val_str = re.sub(r'<[^>]+>', '', cols[5]).replace('&nbsp;', '').replace(',', '').strip()
                    try:
                        val_num = int(val_str)
                    except Exception:
                        val_num = 0

                    stocks.append({
                        "code": code,
                        "name": name if name else code,
                        "amount": val_num,
                        "market": market_name
                    })
        print(f"Fubon DJ {market_name} value rank count: {len(stocks)}, Date: {data_date}")
        return data_date, stocks
    except Exception as e:
        print(f"Error fetching Fubon DJ {market_name} value rank:", e)
        return datetime.now().strftime("%m/%d"), []

def fetch_fubon_turnover_rank(url, market_name):
    print(f"Fetching Fubon DJ Turnover Rank for {market_name}...")
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, context=ctx) as resp:
            html = decode_fubon_html(resp.read())

        date_m = re.search(r'(\d{2}/\d{2})', html)
        if not date_m:
            date_m = re.search(r'(\d{4}[/-]\d{1,2}[/-]\d{1,2})', html)
        data_date = date_m.group(1).replace('-', '/') if date_m else datetime.now().strftime("%m/%d")

        rows = re.findall(r'<tr[^>]*>(.*?)</tr>', html, re.DOTALL)
        stocks = []
        for r in rows:
            cols = re.findall(r'<td[^>]*>(.*?)</td>', r, re.DOTALL)
            if len(cols) >= 7:
                stk_m = re.search(r"Link2Stk\('([^']+)'\)", cols[1])
                if stk_m:
                    code = stk_m.group(1).strip()
                    clean_name = re.sub(r'<[^>]+>', '', cols[1]).replace('&nbsp;', '').strip()
                    name = re.sub(rf'^{code}\s*', '', clean_name).strip()

                    turnover_str = re.sub(r'<[^>]+>', '', cols[6]).replace('&nbsp;', '').replace('%', '').strip()
                    try:
                        turnover_val = float(turnover_str)
                    except Exception:
                        turnover_val = 0.0

                    stocks.append({
                        "code": code,
                        "name": name if name else code,
                        "turnoverRate": turnover_val,
                        "market": market_name
                    })
        print(f"Fubon DJ {market_name} turnover rank count: {len(stocks)}, Date: {data_date}")
        return data_date, stocks
    except Exception as e:
        print(f"Error fetching Fubon DJ {market_name} turnover rank:", e)
        return datetime.now().strftime("%m/%d"), []

def fetch_yahoo_stock(code):
    for suffix in [".TW", ".TWO"]:
        symbol = f"{code}{suffix}"
        url = f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}?range=3mo&interval=1d"
        req = urllib.request.Request(url, headers=HEADERS)
        try:
            with urllib.request.urlopen(req, context=ctx) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                result = data['chart']['result'][0]
                quote = result['indicators']['quote'][0]
                closes = [c for c in quote['close'] if c is not None]
                highs = [h for h in quote['high'] if h is not None]
                lows = [l for l in quote['low'] if l is not None]
                volumes = [v for v in quote['volume'] if v is not None]
                opens = [o for o in quote['open'] if o is not None]

                if not closes or len(closes) < 10:
                    continue

                price = round(closes[-1], 2)
                prevClose = round(closes[-2], 2) if len(closes) >= 2 else price
                open_p = round(opens[-1], 2) if opens else price
                high_p = round(highs[-1], 2) if highs else price
                low_p = round(lows[-1], 2) if lows else price
                volume_張 = round(int(volumes[-1]) / 1000) if volumes else 0

                ma5 = round(sum(closes[-5:]) / min(len(closes), 5), 2)
                ma10 = round(sum(closes[-10:]) / min(len(closes), 10), 2)
                ma20 = round(sum(closes[-20:]) / min(len(closes), 20), 2)
                ma60 = round(sum(closes[-60:]) / min(len(closes), 60), 2) if len(closes) >= 60 else round(sum(closes) / len(closes), 2)

                vMa5 = round(sum(volumes[-5:]) / (min(len(volumes), 5) * 1000)) if volumes else 0
                vMa10 = round(sum(volumes[-10:]) / (min(len(volumes), 10) * 1000)) if volumes else 0
                high5d = round(max(highs[-5:]), 2) if len(highs) >= 5 else price
                high10d = round(max(highs[-10:]), 2) if len(highs) >= 10 else price
                high20d = round(max(highs[-20:]), 2) if len(highs) >= 20 else price

                sparkline = [round(c, 2) for c in closes[-10:]]

                k5d = []
                raw_c = quote.get('close', [])
                raw_o = quote.get('open', [])
                raw_h = quote.get('high', [])
                raw_l = quote.get('low', [])
                raw_v = quote.get('volume', [])

                valid_days = []
                for i in range(len(raw_c)):
                    if raw_c[i] is not None and i < len(raw_v) and raw_v[i] is not None:
                        valid_days.append({
                            'c': raw_c[i],
                            'o': raw_o[i] if i < len(raw_o) and raw_o[i] is not None else raw_c[i],
                            'h': raw_h[i] if i < len(raw_h) and raw_h[i] is not None else raw_c[i],
                            'l': raw_l[i] if i < len(raw_l) and raw_l[i] is not None else raw_c[i],
                            'v': raw_v[i]
                        })

                has_volume_burst = False
                max_vol_10d_shares = 0

                if len(valid_days) >= 5:
                    closes_clean = [d['c'] for d in valid_days]
                    for idx in range(len(valid_days) - 5, len(valid_days)):
                        d = valid_days[idx]
                        sub_closes = closes_clean[:idx+1]
                        m5 = round(sum(sub_closes[-5:]) / min(len(sub_closes), 5), 2)
                        m10 = round(sum(sub_closes[-10:]) / min(len(sub_closes), 10), 2)
                        k5d.append({
                            "open": round(d['o'], 2),
                            "high": round(d['h'], 2),
                            "low": round(d['l'], 2),
                            "close": round(d['c'], 2),
                            "volume": round(d['v'] / 1000) if d.get('v') else 0,
                            "ma5": m5,
                            "ma10": m10
                        })

                    # Calculate hasVolumeBurst & maxVol10d over last 10 trading days (Day -1 ~ Day -10)
                    start_idx = max(0, len(valid_days) - 10)
                    for idx in range(start_idx, len(valid_days)):
                        day_vol = valid_days[idx]['v']
                        if day_vol > max_vol_10d_shares:
                            max_vol_10d_shares = day_vol

                        sub_vols = [d['v'] for d in valid_days[max(0, idx - 4): idx + 1]]
                        day_vma5 = sum(sub_vols) / float(len(sub_vols))
                        if day_vma5 > 0 and day_vol >= day_vma5 * 1.5:
                            has_volume_burst = True

                maxVol10d = round(max_vol_10d_shares / 1000) if max_vol_10d_shares > 0 else volume_張

                # Calculate KD(9,3) across valid_days
                k_val, d_val = 50.0, 50.0
                kd_history = []
                for idx in range(len(valid_days)):
                    if idx < 8:
                        kd_history.append({'k': round(k_val, 1), 'd': round(d_val, 1)})
                        continue
                    slice_9 = valid_days[idx-8 : idx+1]
                    c_curr = slice_9[-1]['c']
                    h_9 = max(d['h'] for d in slice_9)
                    l_9 = min(d['l'] for d in slice_9)
                    rsv = ((c_curr - l_9) / (h_9 - l_9) * 100.0) if h_9 > l_9 else 50.0
                    k_val = (2.0/3.0) * k_val + (1.0/3.0) * rsv
                    d_val = (2.0/3.0) * d_val + (1.0/3.0) * k_val
                    kd_history.append({'k': round(k_val, 1), 'd': round(d_val, 1)})

                curr_kd = kd_history[-1] if kd_history else {'k': 50.0, 'd': 50.0}
                prev_kd = kd_history[-2] if len(kd_history) >= 2 else curr_kd

                prior_8_slice = valid_days[-9:-1] if len(valid_days) >= 9 else valid_days[:-1]
                h8_prior = round(max(d['h'] for d in prior_8_slice), 2) if prior_8_slice else high_p
                l8_prior = round(min(d['l'] for d in prior_8_slice), 2) if prior_8_slice else low_p

                kd_obj = {
                    "k": curr_kd['k'],
                    "d": curr_kd['d'],
                    "prevK": prev_kd['k'],
                    "prevD": prev_kd['d'],
                    "h8": h8_prior,
                    "l8": l8_prior
                }

                return {
                    "price": price,
                    "prevClose": prevClose,
                    "open": open_p,
                    "high": high_p,
                    "low": low_p,
                    "volume": volume_張,
                    "ma5": ma5,
                    "ma10": ma10,
                    "ma20": ma20,
                    "ma60": ma60,
                    "vMa5": vMa5,
                    "vMa10": vMa10,
                    "maxVol10d": maxVol10d,
                    "hasVolumeBurst": has_volume_burst,
                    "high5d": high5d,
                    "high10d": high10d,
                    "high20d": high20d,
                    "sparkline": sparkline,
                    "kd": kd_obj,
                    "k5d": k5d,
                    "symbol": symbol
                }
        except Exception:
            continue
    return None

def calibrate_with_twse_mis(db_stocks):
    print("Calibrating closing prices with TWSE/TPEx official MIS API...")
    db_map = {s['code']: s for s in db_stocks}
    chunk_size = 50
    calibrated_count = 0

    for i in range(0, len(db_stocks), chunk_size):
        chunk = db_stocks[i:i+chunk_size]
        ex_chs = []
        for s in chunk:
            m = 'otc' if s.get('market') == '上櫃' else 'tse'
            ex_chs.append(f"{m}_{s['code']}.tw")

        url = f"https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch={'|'.join(ex_chs)}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0', 'Referer': 'https://mis.twse.com.tw/stock/fibest.jsp'})
        try:
            with urllib.request.urlopen(req, context=ctx, timeout=6) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                msgArray = data.get('msgArray', [])
                for item in msgArray:
                    code = item.get('c')
                    if not code or code not in db_map:
                        continue
                    stock = db_map[code]

                    z_val = item.get('z', '-')
                    pz_val = item.get('pz', '-')
                    a_val = item.get('a', '')
                    b_val = item.get('b', '')

                    official_price = None
                    for candidate in [z_val, pz_val]:
                        try:
                            v = float(candidate)
                            if v > 0:
                                official_price = v
                                break
                        except Exception:
                            continue

                    if official_price is None and a_val:
                        try:
                            v = float(a_val.split('_')[0])
                            if v > 0: official_price = v
                        except Exception: pass

                    if official_price is None and b_val:
                        try:
                            v = float(b_val.split('_')[0])
                            if v > 0: official_price = v
                        except Exception: pass

                    if official_price is not None and official_price > 0:
                        official_price = round(official_price, 2)
                        if stock.get('price') != official_price:
                            print(f"Calibrated {code} ({stock.get('name')}): Initial {stock.get('price')} -> TWSE Official {official_price}")
                            stock['price'] = official_price
                            if stock.get('sparkline') and len(stock['sparkline']) > 0:
                                stock['sparkline'][-1] = official_price
                            calibrated_count += 1

                    try:
                        y_val = float(item.get('y', 0))
                        if y_val > 0:
                            stock['prevClose'] = round(y_val, 2)
                    except Exception:
                        pass
        except Exception as e:
            print(f"Error calibrating batch #{i//chunk_size + 1}:", e)

    print(f"Successfully calibrated {calibrated_count} stock prices with TWSE MIS Official API!")

def main():
    # 1. Fetch MoneyDJ 0050
    moneydj_date, moneydj_0050 = fetch_moneydj_0050()

    # 2. Fetch Fubon DJ Top 100 Volume (Listed 50 + OTC 50)
    print("Fetching Fubon DJ Listed Top 50 and OTC Top 50 Volume Ranks...")
    date_listed, listed_50 = fetch_fubon_top50("https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_BE_0_1.djhtm", "上市")
    date_otc, otc_50 = fetch_fubon_top50("https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_BE_1_1.djhtm", "上櫃")
    combined_top100 = listed_50 + otc_50

    # 2.5 Fetch Fubon DJ Value Top (Listed 50 + OTC 50)
    print("Fetching Fubon DJ Value Ranks (Listed 50 + OTC 50)...")
    date_val_l, value_listed = fetch_fubon_value_rank("https://fubon-ebrokerdj.fbs.com.tw/Z/ZG/ZG_CD.djhtm", "上市")
    date_val_o, value_otc = fetch_fubon_value_rank("https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_CD_1.djhtm", "上櫃")
    combined_value = value_listed + value_otc
    value_date = date_val_l if date_val_l else date_val_o

    # 3. Fetch Fubon DJ SITCA Buy 3D & 5D (Listed + OTC)
    print("Fetching Fubon DJ SITCA Buy 3D & 5D (Listed + OTC)...")
    sitca_d1, sitca_listed_3d = fetch_fubon_buy_rank("https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_DD_0_3.djhtm", "上市")
    sitca_d2, sitca_otc_3d = fetch_fubon_buy_rank("https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_DD_1_3.djhtm", "上櫃")
    _, sitca_listed_5d = fetch_fubon_buy_rank("https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_DD_0_5.djhtm", "上市")
    _, sitca_otc_5d = fetch_fubon_buy_rank("https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_DD_1_5.djhtm", "上櫃")
    combined_sitca = sitca_listed_3d + sitca_otc_3d + sitca_listed_5d + sitca_otc_5d
    sitca_date = sitca_d1 if sitca_d1 else sitca_d2

    # 4. Fetch Fubon DJ Major Buy 1D & 3D (Listed + OTC)
    print("Fetching Fubon DJ Major Buy 1D & 3D (Listed + OTC)...")
    major_d1, major_listed_1d = fetch_fubon_buy_rank("https://fubon-ebrokerdj.fbs.com.tw/Z/ZG/ZG_F.djhtm", "上市")
    major_d2, major_otc_1d = fetch_fubon_buy_rank("https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_F_1_1.djhtm", "上櫃")
    _, major_listed_3d = fetch_fubon_buy_rank("https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_F_0_3.djhtm", "上市")
    _, major_otc_3d = fetch_fubon_buy_rank("https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_F_1_3.djhtm", "上櫃")
    combined_major = major_listed_1d + major_otc_1d + major_listed_3d + major_otc_3d
    major_date = major_d1 if major_d1 else major_d2

    # 5. Fetch Fubon DJ Turnover Rate (Listed 50 + OTC 50)
    print("Fetching Fubon DJ Turnover Rate (Listed 50 + OTC 50)...")
    turnover_d1, turnover_listed = fetch_fubon_turnover_rank("https://fubon-ebrokerdj.fbs.com.tw/Z/ZG/ZG_BD.djhtm", "上市")
    turnover_d2, turnover_otc = fetch_fubon_turnover_rank("https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_BD_1_0.djhtm", "上櫃")
    combined_turnover = turnover_listed + turnover_otc
    turnover_date = turnover_d1 if turnover_d1 else turnover_d2

    # 5. Read stock-pool.js
    with open('js/data/stock-pool.js', 'r', encoding='utf-8') as f:
        pool_content = f.read()

    db_match = re.search(r'const\s+STOCK_DATABASE\s*=\s*(\[\s*\{.*\}\s*\]);', pool_content, re.DOTALL)
    db_stocks = json.loads(db_match.group(1))
    db_map = {s['code']: s for s in db_stocks}

    # Update HOLDINGS_0050
    if moneydj_0050 and len(moneydj_0050) >= 40:
        holdings_obj = {
            "date": moneydj_date,
            "sourceName": "0050 官方成分股",
            "sourceUrl": "https://www.moneydj.com/ETF/X/Basic/Basic0007B.xdjhtm?etfid=0050.TW",
            "stocks": moneydj_0050
        }
        h_json_str = json.dumps(holdings_obj, ensure_ascii=False, indent=2)
        new_h_block = f"const HOLDINGS_0050 = {h_json_str};\n"

        start_h = pool_content.find("const HOLDINGS_0050 =")
        end_h = pool_content.find("const TOP100_VOLUME =")
        pool_content = pool_content[:start_h] + new_h_block + "\n" + pool_content[end_h:]

    # Update TOP100_VOLUME
    if combined_top100 and len(combined_top100) >= 80:
        top100_obj = {
            "date": date_listed,
            "sourceName": "成交量排行",
            "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_BE_0_1.djhtm",
            "stocks": combined_top100
        }
        t_json_str = json.dumps(top100_obj, ensure_ascii=False, indent=2)
        new_t_block = f"const TOP100_VOLUME = {t_json_str};\n\n"

        start_t = pool_content.find("const TOP100_VOLUME =")
        end_t = pool_content.find("const SITCA_BUY_3D =") if "const SITCA_BUY_3D =" in pool_content else pool_content.find("const SEMI_SUPPLY_CHAIN =")
        pool_content = pool_content[:start_t] + new_t_block + pool_content[end_t:]

    if combined_value:
        val_obj = {
            "date": value_date,
            "sourceName": "成交值排行",
            "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/Z/ZG/ZG_CD.djhtm",
            "stocks": combined_value
        }
        val_str = json.dumps(val_obj, ensure_ascii=False, indent=2)
        val_block = f"const VALUE_TOP = {val_str};\n\n"

        if "const VALUE_TOP =" in pool_content:
            start_v = pool_content.find("const VALUE_TOP =")
            end_v = pool_content.find("const SITCA_BUY_3D =") if "const SITCA_BUY_3D =" in pool_content else pool_content.find("const SEMI_SUPPLY_CHAIN =")
            pool_content = pool_content[:start_v] + val_block + pool_content[end_v:]
        else:
            idx_sitca = pool_content.find("const SITCA_BUY_3D =")
            if idx_sitca != -1:
                pool_content = pool_content[:idx_sitca] + val_block + pool_content[idx_sitca:]
            else:
                idx_semi = pool_content.find("const SEMI_SUPPLY_CHAIN =")
                pool_content = pool_content[:idx_semi] + val_block + pool_content[idx_semi:]

    # Insert SITCA_BUY_3D & MAJOR_BUY_1D before SEMI_SUPPLY_CHAIN if missing or update
    if combined_sitca:
        sitca_obj = {
            "date": sitca_date,
            "sourceName": "投信買超排行",
            "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_DD_0_3.djhtm",
            "stocks": combined_sitca
        }
        sitca_str = json.dumps(sitca_obj, ensure_ascii=False, indent=2)
        sitca_block = f"const SITCA_BUY_3D = {sitca_str};\n\n"

        if "const SITCA_BUY_3D =" in pool_content:
            start_s = pool_content.find("const SITCA_BUY_3D =")
            end_s = pool_content.find("const MAJOR_BUY_1D =" ) if "const MAJOR_BUY_1D =" in pool_content else pool_content.find("const SEMI_SUPPLY_CHAIN =")
            pool_content = pool_content[:start_s] + sitca_block + pool_content[end_s:]
        else:
            idx_semi = pool_content.find("const SEMI_SUPPLY_CHAIN =")
            pool_content = pool_content[:idx_semi] + sitca_block + pool_content[idx_semi:]

    if combined_major:
        major_obj = {
            "date": major_date,
            "sourceName": "主力買超近 1 日 (上市 Top 50 + 上櫃 Top 50)",
            "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/Z/ZG/ZG_F.djhtm",
            "stocks": combined_major
        }
        major_str = json.dumps(major_obj, ensure_ascii=False, indent=2)
        major_block = f"const MAJOR_BUY_1D = {major_str};\n\n"

        if "const MAJOR_BUY_1D =" in pool_content:
            start_m = pool_content.find("const MAJOR_BUY_1D =")
            end_m = pool_content.find("const TURNOVER_RATE =") if "const TURNOVER_RATE =" in pool_content else pool_content.find("const SEMI_SUPPLY_CHAIN =")
            pool_content = pool_content[:start_m] + major_block + pool_content[end_m:]
        else:
            idx_semi = pool_content.find("const SEMI_SUPPLY_CHAIN =")
            pool_content = pool_content[:idx_semi] + major_block + pool_content[idx_semi:]

    if combined_turnover:
        turnover_obj = {
            "date": turnover_date,
            "sourceName": "週轉率排行",
            "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/Z/ZG/ZG_BD.djhtm",
            "stocks": combined_turnover
        }
        turnover_str = json.dumps(turnover_obj, ensure_ascii=False, indent=2)
        turnover_block = f"const TURNOVER_RATE = {turnover_str};\n\n"

        if "const TURNOVER_RATE =" in pool_content:
            start_t = pool_content.find("const TURNOVER_RATE =")
            end_t = pool_content.find("const SEMI_SUPPLY_CHAIN =")
            pool_content = pool_content[:start_t] + turnover_block + pool_content[end_t:]
        else:
            idx_semi = pool_content.find("const SEMI_SUPPLY_CHAIN =")
            pool_content = pool_content[:idx_semi] + turnover_block + pool_content[idx_semi:]

    # Helper function to sync categories and fetch missing stocks
    def sync_pool_category(pool_stocks, cat_tag):
        codes_set = set(s['code'] for s in pool_stocks)
        for s in pool_stocks:
            c = s['code']
            if c not in db_map:
                fetched = fetch_yahoo_stock(c)
                if fetched:
                    new_item = {
                        "code": c,
                        "name": s['name'],
                        "categories": [cat_tag],
                        **fetched
                    }
                    db_map[c] = new_item
                    db_stocks.append(new_item)
            else:
                if s.get('name'):
                    db_map[c]['name'] = s['name']

        for s in db_stocks:
            if 'categories' not in s: s['categories'] = []
            if s['code'] in codes_set:
                if cat_tag not in s['categories']: s['categories'].append(cat_tag)
            else:
                if cat_tag in s['categories']: s['categories'].remove(cat_tag)

    sitca_3d = sitca_listed_3d + sitca_otc_3d
    sitca_5d = sitca_listed_5d + sitca_otc_5d
    major_1d = major_listed_1d + major_otc_1d
    major_3d = major_listed_3d + major_otc_3d

    if moneydj_0050: sync_pool_category(moneydj_0050, '0050')
    if combined_top100: sync_pool_category(combined_top100, 'Top100')
    if combined_value: sync_pool_category(combined_value, 'ValueTop')
    if sitca_3d: sync_pool_category(sitca_3d, 'SitcaBuy3D')
    if sitca_5d: sync_pool_category(sitca_5d, 'SitcaBuy5D')
    if major_1d: sync_pool_category(major_1d, 'MajorBuy1D')
    if major_3d: sync_pool_category(major_3d, 'MajorBuy3D')
    if combined_turnover: sync_pool_category(combined_turnover, 'TurnoverRate')

    # Ensure umbrella categories for SitcaBuy and MajorBuy
    for s in db_stocks:
        cats = s.setdefault('categories', [])
        if any(c in cats for c in ['SitcaBuy3D', 'SitcaBuy5D']):
            if 'SitcaBuy' not in cats: cats.append('SitcaBuy')
        else:
            if 'SitcaBuy' in cats: cats.remove('SitcaBuy')

        if any(c in cats for c in ['MajorBuy1D', 'MajorBuy3D']):
            if 'MajorBuy' not in cats: cats.append('MajorBuy')
        else:
            if 'MajorBuy' in cats: cats.remove('MajorBuy')

    # Ensure exact '半導體' category tags
    semi_codes = {"2330", "2303", "6770", "3711", "2449", "6239", "3037", "8046", "3189", "3707", "6488", "5483", "2327", "2492", "3026", "2408", "2344", "3260", "8299", "2454", "3034", "2379"}
    for s in db_stocks:
        if 'categories' not in s: s['categories'] = []
        if s['code'] in semi_codes:
            if not any(c.startswith('半導體') for c in s['categories']):
                s['categories'].append('半導體')
        else:
            s['categories'] = [c for c in s['categories'] if not c.startswith('半導體')]

    # Purge orphan stocks that no longer belong to any active category
    db_stocks = [s for s in db_stocks if s.get('categories') and len(s['categories']) > 0]

    print("Updating 3-month historical K-line baselines (60MA/20MA/5MA)...")
    updated_count = 0
    with ThreadPoolExecutor(max_workers=15) as executor:
        future_to_stock = {executor.submit(fetch_yahoo_stock, s['code']): s for s in db_stocks}
        for future in as_completed(future_to_stock):
            stock = future_to_stock[future]
            try:
                fetched = future.result()
                if fetched:
                    stock.update(fetched)
                    updated_count += 1
            except Exception:
                pass

    print(f"Successfully calculated 3-month historical baselines for {updated_count}/{len(db_stocks)} stocks!")

    # Calibrate prices with TWSE MIS Official API
    calibrate_with_twse_mis(db_stocks)

    # Write back to stock-pool.js
    db_json_str = json.dumps(db_stocks, ensure_ascii=False, indent=2)
    pool_content = re.sub(r'const\s+STOCK_DATABASE\s*=\s*\[.*\];', f'const STOCK_DATABASE = {db_json_str};', pool_content, flags=re.DOTALL)

    with open('js/data/stock-pool.js', 'w', encoding='utf-8') as f:
        f.write(pool_content)

    print("Successfully finished stock pool update process!")

if __name__ == '__main__':
    main()
