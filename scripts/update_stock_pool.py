import urllib.request, json, re, ssl, time
from datetime import datetime

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

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
            raw = resp.read()
            try:
                html = raw.decode('big5')
            except Exception:
                html = raw.decode('utf-8', errors='ignore')

        date_m = re.search(r'(\d{4}[/-]\d{1,2}[/-]\d{1,2})', html)
        data_date = date_m.group(1).replace('-', '/') if date_m else datetime.now().strftime("%Y/%m/%d")

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
                high20d = round(max(highs[-20:]), 2) if highs else price

                sparkline = [round(c, 2) for c in closes[-10:]]

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
                    "high5d": high5d,
                    "high10d": high10d,
                    "high20d": high20d,
                    "sparkline": sparkline
                }
        except Exception:
            continue
    return None

def main():
    # 1. Fetch MoneyDJ 0050
    moneydj_date, moneydj_0050 = fetch_moneydj_0050()

    # 2. Fetch Fubon DJ Top 100 Volume (Listed 50 + OTC 50)
    print("Fetching Fubon DJ Listed Top 50 and OTC Top 50 Volume Ranks...")
    date_listed, listed_50 = fetch_fubon_top50("https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_BE_0_1.djhtm", "上市")
    date_otc, otc_50 = fetch_fubon_top50("https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_BE_1_1.djhtm", "上櫃")
    combined_top100 = listed_50 + otc_50

    # 3. Read stock-pool.js
    with open('js/data/stock-pool.js', 'r', encoding='utf-8') as f:
        pool_content = f.read()

    db_match = re.search(r'const\s+STOCK_DATABASE\s*=\s*(\[\s*\{.*\}\s*\]);', pool_content, re.DOTALL)
    db_stocks = json.loads(db_match.group(1))
    db_map = {s['code']: s for s in db_stocks}

    # Update HOLDINGS_0050
    if moneydj_0050 and len(moneydj_0050) >= 40:
        holdings_obj = {
            "date": moneydj_date,
            "sourceName": "MoneyDJ 理財網 (轉載元大 0050 官方持股)",
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
            "sourceName": "富邦證券 / 每日成交量排行 (上市 Top 50 + 上櫃 Top 50)",
            "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_BE_0_1.djhtm",
            "stocks": combined_top100
        }
        t_json_str = json.dumps(top100_obj, ensure_ascii=False, indent=2)
        new_t_block = f"const TOP100_VOLUME = {t_json_str};\n\n"

        start_t = pool_content.find("const TOP100_VOLUME =")
        end_t = pool_content.find("const SEMI_SUPPLY_CHAIN =")
        pool_content = pool_content[:start_t] + new_t_block + pool_content[end_t:]

        # Ensure exact '0050' category tags
        codes_0050 = set(s['code'] for s in moneydj_0050)
        for s in moneydj_0050:
            c = s['code']
            if c not in db_map:
                fetched = fetch_yahoo_stock(c)
                if fetched:
                    new_item = {
                        "code": c,
                        "name": s['name'],
                        "categories": ["0050"],
                        **fetched
                    }
                    db_map[c] = new_item
                    db_stocks.append(new_item)

        for s in db_stocks:
            if 'categories' not in s: s['categories'] = []
            if s['code'] in codes_0050:
                if '0050' not in s['categories']: s['categories'].append('0050')
            else:
                if '0050' in s['categories']: s['categories'].remove('0050')

        # Ensure exact 'Top100' category tags
        codes_top100 = set(s['code'] for s in combined_top100)
        for s in combined_top100:
            c = s['code']
            if c not in db_map:
                fetched = fetch_yahoo_stock(c)
                if fetched:
                    new_item = {
                        "code": c,
                        "name": s['name'],
                        "categories": ["Top100"],
                        **fetched
                    }
                    db_map[c] = new_item
                    db_stocks.append(new_item)

        for s in db_stocks:
            if 'categories' not in s: s['categories'] = []
            if s['code'] in codes_top100:
                if 'Top100' not in s['categories']: s['categories'].append('Top100')
            else:
                if 'Top100' in s['categories']: s['categories'].remove('Top100')

        # Ensure exact '半導體' category tags
        semi_codes = {"2330", "2303", "6770", "3711", "2449", "6239", "3037", "8046", "3189", "3707", "6488", "5483", "2327", "2492", "3026", "2408", "2344", "3260", "8299", "2454", "3034", "2379"}
        for s in db_stocks:
            if 'categories' not in s: s['categories'] = []
            if s['code'] in semi_codes:
                if not any(c.startswith('半導體') for c in s['categories']):
                    s['categories'].append('半導體')
            else:
                s['categories'] = [c for c in s['categories'] if not c.startswith('半導體')]

    print("Updating Yahoo Finance live prices for DB stocks...")
    updated_count = 0
    for stock in db_stocks:
        fetched = fetch_yahoo_stock(stock['code'])
        if fetched:
            stock.update(fetched)
            updated_count += 1
        time.sleep(0.05)

    print(f"Successfully updated {updated_count}/{len(db_stocks)} stocks from Yahoo Finance!")

    # Write back to stock-pool.js
    db_json_str = json.dumps(db_stocks, ensure_ascii=False, indent=2)
    pool_content = re.sub(r'const\s+STOCK_DATABASE\s*=\s*\[.*\];', f'const STOCK_DATABASE = {db_json_str};', pool_content, flags=re.DOTALL)

    with open('js/data/stock-pool.js', 'w', encoding='utf-8') as f:
        f.write(pool_content)

    print("Successfully finished stock pool update process!")

if __name__ == '__main__':
    main()
