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

def fetch_yahoo_stock(code):
    symbol = f"{code}.TW"
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

            if not closes or len(closes) < 20:
                return None

            price = round(closes[-1], 2)
            prevClose = round(closes[-2], 2)
            open_p = round(opens[-1], 2)
            high_p = round(highs[-1], 2)
            low_p = round(lows[-1], 2)
            volume_張 = round(int(volumes[-1]) / 1000)

            ma5 = round(sum(closes[-5:]) / 5, 2)
            ma10 = round(sum(closes[-10:]) / 10, 2)
            ma20 = round(sum(closes[-20:]) / 20, 2)
            ma60 = round(sum(closes[-60:]) / min(len(closes), 60), 2) if len(closes) >= 60 else round(sum(closes) / len(closes), 2)

            vMa5 = round(sum(volumes[-5:]) / 5000)
            vMa10 = round(sum(volumes[-10:]) / 10000)
            high20d = round(max(highs[-20:]), 2)

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
                "high20d": high20d,
                "sparkline": sparkline
            }
    except Exception as e:
        print(f"Error fetching Yahoo data for {code}: {e}")
        return None

def main():
    # 1. Fetch MoneyDJ 0050
    moneydj_date, moneydj_0050 = fetch_moneydj_0050()

    # 2. Read stock-pool.js
    with open('js/data/stock-pool.js', 'r', encoding='utf-8') as f:
        pool_content = f.read()

    db_match = re.search(r'const\s+STOCK_DATABASE\s*=\s*(\[\s*\{.*\}\s*\]);', pool_content, re.DOTALL)
    db_stocks = json.loads(db_match.group(1))
    db_map = {s['code']: s for s in db_stocks}

    # If MoneyDJ returned 50 stocks, update HOLDINGS_0050
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

        # Ensure all 0050 stocks are in db_stocks and tagged '0050'
        for s in moneydj_0050:
            c = s['code']
            if c in db_map:
                if "0050" not in db_map[c].get("categories", []):
                    db_map[c]["categories"].append("0050")
            else:
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
    start_db = pool_content.find("const STOCK_DATABASE =")
    if start_db != -1:
        pool_content = pool_content[:start_db].rstrip() + f"\n\nconst STOCK_DATABASE = {db_json_str};\n"

    with open('js/data/stock-pool.js', 'w', encoding='utf-8') as f:
        f.write(pool_content)

    print("Successfully finished stock pool update process!")

if __name__ == '__main__':
    main()
