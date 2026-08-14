/**
 * 台股盤中波段選股工具 - 數據庫
 * 資料日期：2026-08-11 Yahoo Finance API 即時收盤與均線數據 (精確昨收與漲跌點數)
 */

// 1. 0050 最新 50 持股名單 (數據日期: 2026/08/11, 資料來源: 元大投信 / TWSE 證交所 API)
const HOLDINGS_0050 = {
  "date": "2026/08/13",
  "sourceName": "MoneyDJ 理財網 (轉載元大 0050 官方持股)",
  "sourceUrl": "https://www.moneydj.com/ETF/X/Basic/Basic0007B.xdjhtm?etfid=0050.TW",
  "stocks": [
    {
      "code": "2330",
      "name": "台積電",
      "weight": "57.85%"
    },
    {
      "code": "2454",
      "name": "聯發科",
      "weight": "6.05%"
    },
    {
      "code": "2308",
      "name": "台達電",
      "weight": "3.54%"
    },
    {
      "code": "2317",
      "name": "鴻海",
      "weight": "3.11%"
    },
    {
      "code": "3711",
      "name": "日月光投控",
      "weight": "2.02%"
    },
    {
      "code": "2383",
      "name": "台光電",
      "weight": "1.61%"
    },
    {
      "code": "2303",
      "name": "聯電",
      "weight": "1.41%"
    },
    {
      "code": "3037",
      "name": "欣興",
      "weight": "1.28%"
    },
    {
      "code": "2891",
      "name": "中信金",
      "weight": "1.15%"
    },
    {
      "code": "2345",
      "name": "智邦",
      "weight": "1.09%"
    },
    {
      "code": "2881",
      "name": "富邦金",
      "weight": "1.04%"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "weight": "1.01%"
    },
    {
      "code": "3017",
      "name": "奇鋐",
      "weight": "1.00%"
    },
    {
      "code": "2882",
      "name": "國泰金",
      "weight": "0.92%"
    },
    {
      "code": "1303",
      "name": "南亞",
      "weight": "0.91%"
    },
    {
      "code": "2382",
      "name": "廣達",
      "weight": "0.84%"
    },
    {
      "code": "2887",
      "name": "台新新光金",
      "weight": "0.83%"
    },
    {
      "code": "2360",
      "name": "致茂",
      "weight": "0.82%"
    },
    {
      "code": "2885",
      "name": "元大金",
      "weight": "0.75%"
    },
    {
      "code": "2059",
      "name": "川湖",
      "weight": "0.66%"
    },
    {
      "code": "2357",
      "name": "華碩",
      "weight": "0.62%"
    },
    {
      "code": "6669",
      "name": "緯穎",
      "weight": "0.61%"
    },
    {
      "code": "3231",
      "name": "緯創",
      "weight": "0.58%"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "weight": "0.57%"
    },
    {
      "code": "2884",
      "name": "玉山金",
      "weight": "0.55%"
    },
    {
      "code": "2886",
      "name": "兆豐金",
      "weight": "0.53%"
    },
    {
      "code": "2344",
      "name": "華邦電",
      "weight": "0.53%"
    },
    {
      "code": "2301",
      "name": "光寶科",
      "weight": "0.51%"
    },
    {
      "code": "2412",
      "name": "中華電",
      "weight": "0.51%"
    },
    {
      "code": "2890",
      "name": "永豐金",
      "weight": "0.51%"
    },
    {
      "code": "2883",
      "name": "凱基金",
      "weight": "0.48%"
    },
    {
      "code": "3008",
      "name": "大立光",
      "weight": "0.43%"
    },
    {
      "code": "3443",
      "name": "創意",
      "weight": "0.43%"
    },
    {
      "code": "3653",
      "name": "健策",
      "weight": "0.39%"
    },
    {
      "code": "3665",
      "name": "貿聯-KY",
      "weight": "0.38%"
    },
    {
      "code": "7769",
      "name": "鴻勁",
      "weight": "0.38%"
    },
    {
      "code": "1216",
      "name": "統一",
      "weight": "0.37%"
    },
    {
      "code": "2892",
      "name": "第一金",
      "weight": "0.36%"
    },
    {
      "code": "2880",
      "name": "華南金",
      "weight": "0.35%"
    },
    {
      "code": "4958",
      "name": "臻鼎-KY",
      "weight": "0.35%"
    },
    {
      "code": "2368",
      "name": "金像電",
      "weight": "0.34%"
    },
    {
      "code": "3661",
      "name": "世芯-KY",
      "weight": "0.32%"
    },
    {
      "code": "2395",
      "name": "研華",
      "weight": "0.31%"
    },
    {
      "code": "2449",
      "name": "京元電子",
      "weight": "0.28%"
    },
    {
      "code": "5880",
      "name": "合庫金",
      "weight": "0.25%"
    },
    {
      "code": "8046",
      "name": "南電",
      "weight": "0.25%"
    },
    {
      "code": "2603",
      "name": "長榮",
      "weight": "0.23%"
    },
    {
      "code": "4904",
      "name": "遠傳",
      "weight": "0.17%"
    },
    {
      "code": "3045",
      "name": "台灣大",
      "weight": "0.15%"
    },
    {
      "code": "6505",
      "name": "台塑化",
      "weight": "0.08%"
    }
  ]
};

const TOP100_VOLUME = {
  "date": "08/13",
  "sourceName": "富邦證券 / 每日成交量排行 (上市 Top 50 + 上櫃 Top 50)",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_BE_0_1.djhtm",
  "stocks": [
    {
      "code": "6770",
      "name": "力積電",
      "volume": 471309,
      "market": "上市"
    },
    {
      "code": "00403A",
      "name": "主動統一升級50",
      "volume": 372511,
      "market": "上市"
    },
    {
      "code": "00685L",
      "name": "群益臺灣加權正2",
      "volume": 231539,
      "market": "上市"
    },
    {
      "code": "2344",
      "name": "華邦電",
      "volume": 227421,
      "market": "上市"
    },
    {
      "code": "2324",
      "name": "仁寶",
      "volume": 211415,
      "market": "上市"
    },
    {
      "code": "00981A",
      "name": "主動統一台股增長",
      "volume": 207674,
      "market": "上市"
    },
    {
      "code": "2303",
      "name": "聯電",
      "volume": 201443,
      "market": "上市"
    },
    {
      "code": "3481",
      "name": "群創",
      "volume": 196134,
      "market": "上市"
    },
    {
      "code": "00631L",
      "name": "元大台灣50正2",
      "volume": 193958,
      "market": "上市"
    },
    {
      "code": "00632R",
      "name": "元大台灣50反1",
      "volume": 157101,
      "market": "上市"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "volume": 128574,
      "market": "上市"
    },
    {
      "code": "2409",
      "name": "友達",
      "volume": 128429,
      "market": "上市"
    },
    {
      "code": "00407A",
      "name": "主動凱基台灣",
      "volume": 126087,
      "market": "上市"
    },
    {
      "code": "009816",
      "name": "凱基台灣TOP50",
      "volume": 125305,
      "market": "上市"
    },
    {
      "code": "00991A",
      "name": "主動復華未來50",
      "volume": 98185,
      "market": "上市"
    },
    {
      "code": "2317",
      "name": "鴻海",
      "volume": 96829,
      "market": "上市"
    },
    {
      "code": "1303",
      "name": "南亞",
      "volume": 96257,
      "market": "上市"
    },
    {
      "code": "0050",
      "name": "元大台灣50",
      "volume": 89418,
      "market": "上市"
    },
    {
      "code": "2337",
      "name": "旺宏",
      "volume": 88614,
      "market": "上市"
    },
    {
      "code": "00405A",
      "name": "主動富邦台灣龍耀",
      "volume": 83455,
      "market": "上市"
    },
    {
      "code": "1718",
      "name": "中纖",
      "volume": 75514,
      "market": "上市"
    },
    {
      "code": "8150",
      "name": "南茂",
      "volume": 72593,
      "market": "上市"
    },
    {
      "code": "2356",
      "name": "英業達",
      "volume": 72503,
      "market": "上市"
    },
    {
      "code": "2880",
      "name": "華南金",
      "volume": 72458,
      "market": "上市"
    },
    {
      "code": "3231",
      "name": "緯創",
      "volume": 72282,
      "market": "上市"
    },
    {
      "code": "2886",
      "name": "兆豐金",
      "volume": 71796,
      "market": "上市"
    },
    {
      "code": "4938",
      "name": "和碩",
      "volume": 66786,
      "market": "上市"
    },
    {
      "code": "00988A",
      "name": "主動統一全球創新",
      "volume": 61347,
      "market": "上市"
    },
    {
      "code": "2027",
      "name": "大成鋼",
      "volume": 58730,
      "market": "上市"
    },
    {
      "code": "1605",
      "name": "華新",
      "volume": 57957,
      "market": "上市"
    },
    {
      "code": "2887",
      "name": "台新新光金",
      "volume": 57440,
      "market": "上市"
    },
    {
      "code": "00881",
      "name": "國泰台灣科技龍頭",
      "volume": 52838,
      "market": "上市"
    },
    {
      "code": "2002",
      "name": "中鋼",
      "volume": 52093,
      "market": "上市"
    },
    {
      "code": "2377",
      "name": "微星",
      "volume": 51222,
      "market": "上市"
    },
    {
      "code": "00919",
      "name": "群益台灣精選高息",
      "volume": 49590,
      "market": "上市"
    },
    {
      "code": "00406A",
      "name": "主動中信台灣收益",
      "volume": 48281,
      "market": "上市"
    },
    {
      "code": "00878",
      "name": "國泰永續高股息",
      "volume": 46956,
      "market": "上市"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "volume": 46850,
      "market": "上市"
    },
    {
      "code": "00961",
      "name": "FT臺灣永續高息",
      "volume": 46687,
      "market": "上市"
    },
    {
      "code": "00400A",
      "name": "主動國泰動能高息",
      "volume": 45976,
      "market": "上市"
    },
    {
      "code": "00992A",
      "name": "主動群益科技創新",
      "volume": 45942,
      "market": "上市"
    },
    {
      "code": "0056",
      "name": "元大高股息",
      "volume": 44643,
      "market": "上市"
    },
    {
      "code": "2834",
      "name": "臺企銀",
      "volume": 43024,
      "market": "上市"
    },
    {
      "code": "4958",
      "name": "臻鼎-KY",
      "volume": 42130,
      "market": "上市"
    },
    {
      "code": "2884",
      "name": "玉山金",
      "volume": 41220,
      "market": "上市"
    },
    {
      "code": "2301",
      "name": "光寶科",
      "volume": 38024,
      "market": "上市"
    },
    {
      "code": "1101",
      "name": "台泥",
      "volume": 37511,
      "market": "上市"
    },
    {
      "code": "2481",
      "name": "強茂",
      "volume": 36136,
      "market": "上市"
    },
    {
      "code": "2332",
      "name": "友訊",
      "volume": 36091,
      "market": "上市"
    },
    {
      "code": "2610",
      "name": "華航",
      "volume": 36009,
      "market": "上市"
    },
    {
      "code": "5483",
      "name": "中美晶",
      "volume": 76102,
      "market": "上櫃"
    },
    {
      "code": "8358",
      "name": "金居",
      "volume": 48701,
      "market": "上櫃"
    },
    {
      "code": "00937B",
      "name": "群益ESG投等債20+",
      "volume": 41155,
      "market": "上櫃"
    },
    {
      "code": "3105",
      "name": "穩懋",
      "volume": 39599,
      "market": "上櫃"
    },
    {
      "code": "5328",
      "name": "華容",
      "volume": 37173,
      "market": "上櫃"
    },
    {
      "code": "6173",
      "name": "信昌電",
      "volume": 36722,
      "market": "上櫃"
    },
    {
      "code": "6182",
      "name": "合晶",
      "volume": 32174,
      "market": "上櫃"
    },
    {
      "code": "6147",
      "name": "頎邦",
      "volume": 31764,
      "market": "上櫃"
    },
    {
      "code": "5904",
      "name": "寶雅*",
      "volume": 28693,
      "market": "上櫃"
    },
    {
      "code": "4979",
      "name": "華星光",
      "volume": 26515,
      "market": "上櫃"
    },
    {
      "code": "5475",
      "name": "德宏",
      "volume": 24391,
      "market": "上櫃"
    },
    {
      "code": "5347",
      "name": "世界",
      "volume": 19408,
      "market": "上櫃"
    },
    {
      "code": "3264",
      "name": "欣銓",
      "volume": 16836,
      "market": "上櫃"
    },
    {
      "code": "5425",
      "name": "台半",
      "volume": 14817,
      "market": "上櫃"
    },
    {
      "code": "4939",
      "name": "亞電",
      "volume": 14501,
      "market": "上櫃"
    },
    {
      "code": "8043",
      "name": "蜜望實",
      "volume": 13986,
      "market": "上櫃"
    },
    {
      "code": "3374",
      "name": "精材",
      "volume": 13720,
      "market": "上櫃"
    },
    {
      "code": "00679B",
      "name": "元大美債20年",
      "volume": 13640,
      "market": "上櫃"
    },
    {
      "code": "8069",
      "name": "元太",
      "volume": 12853,
      "market": "上櫃"
    },
    {
      "code": "00888",
      "name": "永豐台灣ESG",
      "volume": 12643,
      "market": "上櫃"
    },
    {
      "code": "3441",
      "name": "聯一光",
      "volume": 11571,
      "market": "上櫃"
    },
    {
      "code": "1785",
      "name": "光洋科",
      "volume": 11097,
      "market": "上櫃"
    },
    {
      "code": "4123",
      "name": "晟德",
      "volume": 10477,
      "market": "上櫃"
    },
    {
      "code": "6488",
      "name": "環球晶",
      "volume": 9989,
      "market": "上櫃"
    },
    {
      "code": "3211",
      "name": "順達",
      "volume": 9419,
      "market": "上櫃"
    },
    {
      "code": "4707",
      "name": "磐亞",
      "volume": 9369,
      "market": "上櫃"
    },
    {
      "code": "6265",
      "name": "方土昶",
      "volume": 9156,
      "market": "上櫃"
    },
    {
      "code": "5351",
      "name": "鈺創",
      "volume": 8786,
      "market": "上櫃"
    },
    {
      "code": "00933B",
      "name": "國泰10Y+金融債",
      "volume": 8704,
      "market": "上櫃"
    },
    {
      "code": "4991",
      "name": "環宇-KY",
      "volume": 8673,
      "market": "上櫃"
    },
    {
      "code": "00687B",
      "name": "國泰20年美債",
      "volume": 8629,
      "market": "上櫃"
    },
    {
      "code": "3707",
      "name": "漢磊",
      "volume": 8480,
      "market": "上櫃"
    },
    {
      "code": "00981B",
      "name": "第一金優選非投債",
      "volume": 8356,
      "market": "上櫃"
    },
    {
      "code": "8042",
      "name": "金山電",
      "volume": 8201,
      "market": "上櫃"
    },
    {
      "code": "00764B",
      "name": "群益25年美債",
      "volume": 8189,
      "market": "上櫃"
    },
    {
      "code": "3234",
      "name": "光環",
      "volume": 8173,
      "market": "上櫃"
    },
    {
      "code": "3260",
      "name": "威剛",
      "volume": 8090,
      "market": "上櫃"
    },
    {
      "code": "3624",
      "name": "光頡",
      "volume": 7677,
      "market": "上櫃"
    },
    {
      "code": "3236",
      "name": "千如",
      "volume": 7435,
      "market": "上櫃"
    },
    {
      "code": "8299",
      "name": "群聯",
      "volume": 7344,
      "market": "上櫃"
    },
    {
      "code": "6187",
      "name": "萬潤",
      "volume": 6275,
      "market": "上櫃"
    },
    {
      "code": "00989B",
      "name": "台新美國非投等債",
      "volume": 6257,
      "market": "上櫃"
    },
    {
      "code": "5371",
      "name": "中光電",
      "volume": 6123,
      "market": "上櫃"
    },
    {
      "code": "6127",
      "name": "九豪",
      "volume": 6109,
      "market": "上櫃"
    },
    {
      "code": "6244",
      "name": "茂迪",
      "volume": 5889,
      "market": "上櫃"
    },
    {
      "code": "8096",
      "name": "擎亞",
      "volume": 5817,
      "market": "上櫃"
    },
    {
      "code": "3363",
      "name": "上詮",
      "volume": 5671,
      "market": "上櫃"
    },
    {
      "code": "00887",
      "name": "永豐中國科技50大",
      "volume": 5542,
      "market": "上櫃"
    },
    {
      "code": "009825",
      "name": "聯邦美國金融創新",
      "volume": 5427,
      "market": "上櫃"
    },
    {
      "code": "4541",
      "name": "晟田",
      "volume": 5158,
      "market": "上櫃"
    }
  ]
};

const SITCA_BUY_3D = {
  "date": "08/13",
  "sourceName": "富邦證券 / 投信買超近 3 日 (上市 Top 50 + 上櫃 Top 50)",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_DD_0_3.djhtm",
  "stocks": [
    {
      "code": "2887",
      "name": "台新新光金",
      "buyVol": 24297,
      "market": "上市"
    },
    {
      "code": "2883",
      "name": "凱基金",
      "buyVol": 15576,
      "market": "上市"
    },
    {
      "code": "2880",
      "name": "華南金",
      "buyVol": 12005,
      "market": "上市"
    },
    {
      "code": "2886",
      "name": "兆豐金",
      "buyVol": 7646,
      "market": "上市"
    },
    {
      "code": "2368",
      "name": "金像電",
      "buyVol": 5868,
      "market": "上市"
    },
    {
      "code": "5880",
      "name": "合庫金",
      "buyVol": 5439,
      "market": "上市"
    },
    {
      "code": "3231",
      "name": "緯創",
      "buyVol": 4696,
      "market": "上市"
    },
    {
      "code": "1303",
      "name": "南亞",
      "buyVol": 4353,
      "market": "上市"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "buyVol": 3859,
      "market": "上市"
    },
    {
      "code": "4938",
      "name": "和碩",
      "buyVol": 3512,
      "market": "上市"
    },
    {
      "code": "3026",
      "name": "禾伸堂",
      "buyVol": 3004,
      "market": "上市"
    },
    {
      "code": "4904",
      "name": "遠傳",
      "buyVol": 2703,
      "market": "上市"
    },
    {
      "code": "2633",
      "name": "台灣高鐵",
      "buyVol": 2564,
      "market": "上市"
    },
    {
      "code": "2885",
      "name": "元大金",
      "buyVol": 2539,
      "market": "上市"
    },
    {
      "code": "00900",
      "name": "富邦特選高股息30",
      "buyVol": 2500,
      "market": "上市"
    },
    {
      "code": "2542",
      "name": "興富發",
      "buyVol": 2239,
      "market": "上市"
    },
    {
      "code": "2882",
      "name": "國泰金",
      "buyVol": 2193,
      "market": "上市"
    },
    {
      "code": "2855",
      "name": "統一證",
      "buyVol": 2169,
      "market": "上市"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "buyVol": 2140,
      "market": "上市"
    },
    {
      "code": "2603",
      "name": "長榮",
      "buyVol": 2085,
      "market": "上市"
    },
    {
      "code": "2382",
      "name": "廣達",
      "buyVol": 1963,
      "market": "上市"
    },
    {
      "code": "2881",
      "name": "富邦金",
      "buyVol": 1811,
      "market": "上市"
    },
    {
      "code": "6805",
      "name": "富世達",
      "buyVol": 1802,
      "market": "上市"
    },
    {
      "code": "2330",
      "name": "台積電",
      "buyVol": 1704,
      "market": "上市"
    },
    {
      "code": "2884",
      "name": "玉山金",
      "buyVol": 1698,
      "market": "上市"
    },
    {
      "code": "2890",
      "name": "永豐金",
      "buyVol": 1686,
      "market": "上市"
    },
    {
      "code": "2301",
      "name": "光寶科",
      "buyVol": 1589,
      "market": "上市"
    },
    {
      "code": "8046",
      "name": "南電",
      "buyVol": 1562,
      "market": "上市"
    },
    {
      "code": "4915",
      "name": "致伸",
      "buyVol": 1531,
      "market": "上市"
    },
    {
      "code": "1402",
      "name": "遠東新",
      "buyVol": 1492,
      "market": "上市"
    },
    {
      "code": "00980A",
      "name": "主動野村臺灣優選",
      "buyVol": 1489,
      "market": "上市"
    },
    {
      "code": "2903",
      "name": "遠百",
      "buyVol": 1438,
      "market": "上市"
    },
    {
      "code": "2308",
      "name": "台達電",
      "buyVol": 1254,
      "market": "上市"
    },
    {
      "code": "2618",
      "name": "長榮航",
      "buyVol": 1199,
      "market": "上市"
    },
    {
      "code": "2356",
      "name": "英業達",
      "buyVol": 1175,
      "market": "上市"
    },
    {
      "code": "2892",
      "name": "第一金",
      "buyVol": 1136,
      "market": "上市"
    },
    {
      "code": "2492",
      "name": "華新科",
      "buyVol": 1107,
      "market": "上市"
    },
    {
      "code": "3044",
      "name": "健鼎",
      "buyVol": 1045,
      "market": "上市"
    },
    {
      "code": "3450",
      "name": "聯鈞",
      "buyVol": 898,
      "market": "上市"
    },
    {
      "code": "6239",
      "name": "力成",
      "buyVol": 886,
      "market": "上市"
    },
    {
      "code": "2610",
      "name": "華航",
      "buyVol": 881,
      "market": "上市"
    },
    {
      "code": "8996",
      "name": "高力",
      "buyVol": 812,
      "market": "上市"
    },
    {
      "code": "5871",
      "name": "中租-KY",
      "buyVol": 810,
      "market": "上市"
    },
    {
      "code": "4551",
      "name": "智伸科",
      "buyVol": 770,
      "market": "上市"
    },
    {
      "code": "00992A",
      "name": "主動群益科技創新",
      "buyVol": 700,
      "market": "上市"
    },
    {
      "code": "3017",
      "name": "奇鋐",
      "buyVol": 647,
      "market": "上市"
    },
    {
      "code": "5876",
      "name": "上海商銀",
      "buyVol": 617,
      "market": "上市"
    },
    {
      "code": "1717",
      "name": "長興",
      "buyVol": 613,
      "market": "上市"
    },
    {
      "code": "3702",
      "name": "大聯大",
      "buyVol": 588,
      "market": "上市"
    },
    {
      "code": "2347",
      "name": "聯強",
      "buyVol": 586,
      "market": "上市"
    }
  ]
};

const MAJOR_BUY_1D = {
  "date": "08/13",
  "sourceName": "富邦證券 / 主力買超近 1 日 (上市 Top 50 + 上櫃 Top 50)",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/Z/ZG/ZG_F.djhtm",
  "stocks": [
    {
      "code": "00403A",
      "name": "主動統一升級50",
      "buyVol": 243361,
      "market": "上市"
    },
    {
      "code": "00981A",
      "name": "主動統一台股增長",
      "buyVol": 82835,
      "market": "上市"
    },
    {
      "code": "00685L",
      "name": "群益臺灣加權正2",
      "buyVol": 76447,
      "market": "上市"
    },
    {
      "code": "00631L",
      "name": "元大台灣50正2",
      "buyVol": 71313,
      "market": "上市"
    },
    {
      "code": "00407A",
      "name": "主動凱基台灣",
      "buyVol": 64608,
      "market": "上市"
    },
    {
      "code": "009816",
      "name": "凱基台灣TOP50",
      "buyVol": 43355,
      "market": "上市"
    },
    {
      "code": "0050",
      "name": "元大台灣50",
      "buyVol": 42674,
      "market": "上市"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "buyVol": 39667,
      "market": "上市"
    },
    {
      "code": "00991A",
      "name": "主動復華未來50",
      "buyVol": 30522,
      "market": "上市"
    },
    {
      "code": "00405A",
      "name": "主動富邦台灣龍耀",
      "buyVol": 27910,
      "market": "上市"
    },
    {
      "code": "00400A",
      "name": "主動國泰動能高息",
      "buyVol": 22231,
      "market": "上市"
    },
    {
      "code": "2027",
      "name": "大成鋼",
      "buyVol": 21236,
      "market": "上市"
    },
    {
      "code": "0056",
      "name": "元大高股息",
      "buyVol": 21167,
      "market": "上市"
    },
    {
      "code": "4938",
      "name": "和碩",
      "buyVol": 18651,
      "market": "上市"
    },
    {
      "code": "00992A",
      "name": "主動群益科技創新",
      "buyVol": 18048,
      "market": "上市"
    },
    {
      "code": "00919",
      "name": "群益台灣精選高息",
      "buyVol": 18012,
      "market": "上市"
    },
    {
      "code": "3231",
      "name": "緯創",
      "buyVol": 17820,
      "market": "上市"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "buyVol": 15488,
      "market": "上市"
    },
    {
      "code": "2887",
      "name": "台新新光金",
      "buyVol": 13136,
      "market": "上市"
    },
    {
      "code": "00999A",
      "name": "主動野村臺灣高息",
      "buyVol": 12948,
      "market": "上市"
    },
    {
      "code": "1605",
      "name": "華新",
      "buyVol": 12485,
      "market": "上市"
    },
    {
      "code": "00940",
      "name": "元大台灣價值高息",
      "buyVol": 12350,
      "market": "上市"
    },
    {
      "code": "2634",
      "name": "漢翔",
      "buyVol": 11378,
      "market": "上市"
    },
    {
      "code": "2883",
      "name": "凱基金",
      "buyVol": 11108,
      "market": "上市"
    },
    {
      "code": "0052",
      "name": "富邦科技",
      "buyVol": 11096,
      "market": "上市"
    },
    {
      "code": "009820",
      "name": "元大納斯達克精選",
      "buyVol": 10721,
      "market": "上市"
    },
    {
      "code": "1504",
      "name": "東元",
      "buyVol": 9440,
      "market": "上市"
    },
    {
      "code": "2492",
      "name": "華新科",
      "buyVol": 9304,
      "market": "上市"
    },
    {
      "code": "00988A",
      "name": "主動統一全球創新",
      "buyVol": 8926,
      "market": "上市"
    },
    {
      "code": "009819",
      "name": "中信數據及電力",
      "buyVol": 8257,
      "market": "上市"
    },
    {
      "code": "2542",
      "name": "興富發",
      "buyVol": 8194,
      "market": "上市"
    },
    {
      "code": "009821",
      "name": "野村稀土關鍵資源",
      "buyVol": 7981,
      "market": "上市"
    },
    {
      "code": "1513",
      "name": "中興電",
      "buyVol": 7946,
      "market": "上市"
    },
    {
      "code": "2301",
      "name": "光寶科",
      "buyVol": 7698,
      "market": "上市"
    },
    {
      "code": "00990A",
      "name": "主動元大AI新經濟",
      "buyVol": 6208,
      "market": "上市"
    },
    {
      "code": "3576",
      "name": "聯合再生",
      "buyVol": 6165,
      "market": "上市"
    },
    {
      "code": "00982A",
      "name": "主動群益台灣強棒",
      "buyVol": 6119,
      "market": "上市"
    },
    {
      "code": "2359",
      "name": "所羅門",
      "buyVol": 5956,
      "market": "上市"
    },
    {
      "code": "8039",
      "name": "台虹",
      "buyVol": 5720,
      "market": "上市"
    },
    {
      "code": "00402A",
      "name": "主動安聯美國科技",
      "buyVol": 5572,
      "market": "上市"
    },
    {
      "code": "00637L",
      "name": "元大滬深300正2",
      "buyVol": 4898,
      "market": "上市"
    },
    {
      "code": "2376",
      "name": "技嘉",
      "buyVol": 4763,
      "market": "上市"
    },
    {
      "code": "2330",
      "name": "台積電",
      "buyVol": 4737,
      "market": "上市"
    },
    {
      "code": "6282",
      "name": "康舒",
      "buyVol": 4634,
      "market": "上市"
    },
    {
      "code": "2332",
      "name": "友訊",
      "buyVol": 4598,
      "market": "上市"
    },
    {
      "code": "00997A",
      "name": "主動群益美國增長",
      "buyVol": 4422,
      "market": "上市"
    },
    {
      "code": "1709",
      "name": "和益",
      "buyVol": 4277,
      "market": "上市"
    },
    {
      "code": "2867",
      "name": "三商壽",
      "buyVol": 4127,
      "market": "上市"
    },
    {
      "code": "2885",
      "name": "元大金",
      "buyVol": 4062,
      "market": "上市"
    },
    {
      "code": "8112",
      "name": "至上",
      "buyVol": 4056,
      "market": "上市"
    }
  ]
};

const SEMI_SUPPLY_CHAIN = {
  date: "2026-08-11",
  sourceName: "台灣半導體產業鏈關鍵廠商名冊 / 工研院 IEK",
  sourceUrl: "https://www.iektnet.org.tw/",
  sectors: [
    {
      name: "晶圓代工 (Foundry)",
      description: "先進製程與成熟製程之晶圓製造龍頭",
      topStocks: [
        { code: "2330", name: "台積電", rank: "Top 1", note: "先進製程與 CoWoS 龍頭" },
        { code: "2303", name: "聯電", rank: "Top 2", note: "成熟與特殊製程領導者" },
        { code: "6770", name: "力積電", rank: "Top 3", note: "記憶體與邏輯代工" }
      ]
    },
    {
      name: "封裝測試 (Packaging & Testing)",
      description: "後段封測、先進封裝與測試服務",
      topStocks: [
        { code: "3711", name: "日月光投控", rank: "Top 1", note: "全球半導體封測龍頭" },
        { code: "2449", name: "京元電子", rank: "Top 2", note: "AI 晶片測試大廠" },
        { code: "6239", name: "力成", rank: "Top 3", note: "記憶體與邏輯先進封測" }
      ]
    },
    {
      name: "載板 (IC Substrates)",
      description: "ABF 載板與 BT 載板三雄",
      topStocks: [
        { code: "3037", name: "欣興", rank: "Top 1", note: "全球 ABF 高階載板龍頭" },
        { code: "8046", name: "南電", rank: "Top 2", note: "高階通訊與網通載板" },
        { code: "3189", name: "景碩", rank: "Top 3", note: "消費性與網通載板" }
      ]
    },
    {
      name: "功率半導體 (Power Semi)",
      description: "第三類半導體 (GaN / SiC) 與功率元件",
      topStocks: [
        { code: "3707", name: "漢磊", rank: "Top 1", note: "化合物半導體代工核心" },
        { code: "6488", name: "環球晶", rank: "Top 2", note: "全球前三大矽晶圓廠" },
        { code: "5483", name: "茂矽", rank: "Top 3", note: "二極體與 MOS 代工" }
      ]
    },
    {
      name: "被動元件 (Passive Components)",
      description: "MLCC、電阻、電感關鍵組件",
      topStocks: [
        { code: "2327", name: "國巨", rank: "Top 1", note: "全球被動元件龍頭" },
        { code: "2492", name: "華新科", rank: "Top 2", note: "電阻與 MLCC 大廠" },
        { code: "3026", name: "禾伸堂", rank: "Top 3", note: "高壓專用 MLCC 廠" }
      ]
    },
    {
      name: "記憶體 (Memory)",
      description: "DRAM / NOR Flash / NAND 控制 IC",
      topStocks: [
        { code: "2408", name: "南亞科", rank: "Top 1", note: "台灣 DRAM 標竿製造廠" },
        { code: "2344", name: "華邦電", rank: "Top 2", note: "NOR Flash 領導廠" },
        { code: "3260", name: "威剛", rank: "Top 3", note: "記憶體模組與 SSD" },
        { code: "8299", name: "群聯", rank: "Top 4", note: "NAND 控制晶片與 SSD" }
      ]
    },
    {
      name: "IC 設計 (IC Design)",
      description: "晶片架構與系統單晶片 (SoC) 開發",
      topStocks: [
        { code: "2454", name: "聯發科", rank: "Top 1", note: "全球手機與網通 SoC 龍頭" },
        { code: "3034", name: "聯詠", rank: "Top 2", note: "顯示驅動 IC (DDIC)" },
        { code: "2379", name: "瑞昱", rank: "Top 3", note: "乙太網與音訊晶片" }
      ]
    }
  ]
};

// 4. Yahoo Finance 最新個股資料庫

const STOCK_DATABASE = [
  {
    "code": "2330",
    "name": "台積電",
    "price": 2425.0,
    "open": 2435.0,
    "high": 2440.0,
    "low": 2420.0,
    "prevClose": 2435.0,
    "volume": 9614,
    "ma5": 2411.0,
    "ma10": 2388.5,
    "ma20": 2361.5,
    "vMa5": 16662,
    "vMa10": 22607,
    "limitUpPrice": 2618.0,
    "categories": [
      "0050",
      "半導體-晶圓",
      "SitcaBuy",
      "MajorBuy"
    ],
    "sparkline": [
      2370.0,
      2320.0,
      2405.0,
      2365.0,
      2370.0,
      2380.0,
      2395.0,
      2415.0,
      2435.0,
      2425.0
    ],
    "ma60": 2374.67,
    "high20d": 2470.0,
    "high5d": 2445.0,
    "high10d": 2445.0,
    "k3d": [
      {
        "open": 2390.0,
        "high": 2405.0,
        "low": 2375.0,
        "close": 2395.0,
        "ma5": 2383.0,
        "ma10": 2343.5
      },
      {
        "open": 2405.0,
        "high": 2415.0,
        "low": 2390.0,
        "close": 2415.0,
        "ma5": 2385.0,
        "ma10": 2365.0
      },
      {
        "open": 2440.0,
        "high": 2445.0,
        "low": 2425.0,
        "close": 2435.0,
        "ma5": 2399.0,
        "ma10": 2388.0
      }
    ],
    "k5d": [
      {
        "open": 2390.0,
        "high": 2410.0,
        "low": 2380.0,
        "close": 2380.0,
        "ma5": 2368.0,
        "ma10": 2332.0
      },
      {
        "open": 2390.0,
        "high": 2405.0,
        "low": 2375.0,
        "close": 2395.0,
        "ma5": 2383.0,
        "ma10": 2343.5
      },
      {
        "open": 2405.0,
        "high": 2415.0,
        "low": 2390.0,
        "close": 2415.0,
        "ma5": 2385.0,
        "ma10": 2365.0
      },
      {
        "open": 2440.0,
        "high": 2445.0,
        "low": 2425.0,
        "close": 2435.0,
        "ma5": 2399.0,
        "ma10": 2388.0
      },
      {
        "open": 2435.0,
        "high": 2440.0,
        "low": 2420.0,
        "close": 2430.0,
        "ma5": 2411.0,
        "ma10": 2388.5
      }
    ],
    "symbol": "2330.TW",
    "maxVol10d": 35945,
    "hasVolumeBurst": false
  },
  {
    "code": "2454",
    "name": "聯發科",
    "price": 4255.0,
    "open": 4400.0,
    "high": 4400.0,
    "low": 4240.0,
    "prevClose": 4225.0,
    "volume": 7487,
    "ma5": 4098.0,
    "ma10": 4008.5,
    "ma20": 3775.25,
    "vMa5": 7223,
    "vMa10": 8273,
    "limitUpPrice": 4356.0,
    "categories": [
      "0050",
      "半導體-IC設計"
    ],
    "sparkline": [
      3910.0,
      3865.0,
      4000.0,
      3920.0,
      3900.0,
      3960.0,
      4020.0,
      4015.0,
      4225.0,
      4255.0
    ],
    "ma60": 4053.92,
    "high20d": 4400.0,
    "high5d": 4400.0,
    "high10d": 4400.0,
    "k3d": [
      {
        "open": 3900.0,
        "high": 4050.0,
        "low": 3810.0,
        "close": 4020.0,
        "ma5": 3960.0,
        "ma10": 3751.5
      },
      {
        "open": 3950.0,
        "high": 4030.0,
        "low": 3950.0,
        "close": 4015.0,
        "ma5": 3963.0,
        "ma10": 3838.0
      },
      {
        "open": 4130.0,
        "high": 4295.0,
        "low": 4115.0,
        "close": 4225.0,
        "ma5": 4024.0,
        "ma10": 3937.0
      }
    ],
    "k5d": [
      {
        "open": 3920.0,
        "high": 3995.0,
        "low": 3915.0,
        "close": 3960.0,
        "ma5": 3929.0,
        "ma10": 3681.0
      },
      {
        "open": 3900.0,
        "high": 4050.0,
        "low": 3810.0,
        "close": 4020.0,
        "ma5": 3960.0,
        "ma10": 3751.5
      },
      {
        "open": 3950.0,
        "high": 4030.0,
        "low": 3950.0,
        "close": 4015.0,
        "ma5": 3963.0,
        "ma10": 3838.0
      },
      {
        "open": 4130.0,
        "high": 4295.0,
        "low": 4115.0,
        "close": 4225.0,
        "ma5": 4024.0,
        "ma10": 3937.0
      },
      {
        "open": 4400.0,
        "high": 4400.0,
        "low": 4240.0,
        "close": 4270.0,
        "ma5": 4098.0,
        "ma10": 4008.5
      }
    ],
    "symbol": "2454.TW",
    "maxVol10d": 15986,
    "hasVolumeBurst": true
  },
  {
    "code": "2317",
    "name": "鴻海",
    "price": 259.5,
    "open": 262.0,
    "high": 264.5,
    "low": 258.5,
    "prevClose": 262.0,
    "volume": 31125,
    "ma5": 263.9,
    "ma10": 260.55,
    "ma20": 252.78,
    "vMa5": 47924,
    "vMa10": 51979,
    "limitUpPrice": 290.95,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      253.0,
      250.0,
      258.5,
      264.5,
      260.0,
      264.5,
      263.0,
      270.0,
      262.0,
      259.5
    ],
    "ma60": 257.05,
    "high20d": 274.5,
    "high5d": 274.5,
    "high10d": 274.5,
    "k3d": [
      {
        "open": 266.0,
        "high": 266.0,
        "low": 260.5,
        "close": 263.0,
        "ma5": 262.1,
        "ma10": 253.05
      },
      {
        "open": 264.5,
        "high": 270.5,
        "low": 264.0,
        "close": 270.0,
        "ma5": 264.4,
        "ma10": 256.35
      },
      {
        "open": 274.5,
        "high": 274.5,
        "low": 261.0,
        "close": 262.0,
        "ma5": 263.9,
        "ma10": 259.6
      }
    ],
    "k5d": [
      {
        "open": 262.5,
        "high": 266.5,
        "low": 262.0,
        "close": 264.5,
        "ma5": 259.5,
        "ma10": 250.55
      },
      {
        "open": 266.0,
        "high": 266.0,
        "low": 260.5,
        "close": 263.0,
        "ma5": 262.1,
        "ma10": 253.05
      },
      {
        "open": 264.5,
        "high": 270.5,
        "low": 264.0,
        "close": 270.0,
        "ma5": 264.4,
        "ma10": 256.35
      },
      {
        "open": 274.5,
        "high": 274.5,
        "low": 261.0,
        "close": 262.0,
        "ma5": 263.9,
        "ma10": 259.6
      },
      {
        "open": 262.0,
        "high": 264.5,
        "low": 258.5,
        "close": 260.0,
        "ma5": 263.9,
        "ma10": 260.55
      }
    ],
    "symbol": "2317.TW",
    "maxVol10d": 92698,
    "hasVolumeBurst": true
  },
  {
    "code": "2308",
    "name": "台達電",
    "price": 1885.0,
    "open": 1945.0,
    "high": 1975.0,
    "low": 1885.0,
    "prevClose": 1885.0,
    "volume": 9887,
    "ma5": 1837.0,
    "ma10": 1736.5,
    "ma20": 1722.5,
    "vMa5": 11793,
    "vMa10": 12779,
    "limitUpPrice": 1996.5,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      1580.0,
      1620.0,
      1650.0,
      1680.0,
      1650.0,
      1815.0,
      1805.0,
      1790.0,
      1885.0,
      1885.0
    ],
    "ma60": 1986.83,
    "high20d": 1975.0,
    "high5d": 1975.0,
    "high10d": 1975.0,
    "k3d": [
      {
        "open": 1835.0,
        "high": 1865.0,
        "low": 1785.0,
        "close": 1805.0,
        "ma5": 1720.0,
        "ma10": 1646.5
      },
      {
        "open": 1810.0,
        "high": 1830.0,
        "low": 1785.0,
        "close": 1790.0,
        "ma5": 1748.0,
        "ma10": 1676.0
      },
      {
        "open": 1845.0,
        "high": 1915.0,
        "low": 1845.0,
        "close": 1885.0,
        "ma5": 1789.0,
        "ma10": 1711.5
      }
    ],
    "k5d": [
      {
        "open": 1695.0,
        "high": 1815.0,
        "low": 1690.0,
        "close": 1815.0,
        "ma5": 1683.0,
        "ma10": 1624.0
      },
      {
        "open": 1835.0,
        "high": 1865.0,
        "low": 1785.0,
        "close": 1805.0,
        "ma5": 1720.0,
        "ma10": 1646.5
      },
      {
        "open": 1810.0,
        "high": 1830.0,
        "low": 1785.0,
        "close": 1790.0,
        "ma5": 1748.0,
        "ma10": 1676.0
      },
      {
        "open": 1845.0,
        "high": 1915.0,
        "low": 1845.0,
        "close": 1885.0,
        "ma5": 1789.0,
        "ma10": 1711.5
      },
      {
        "open": 1945.0,
        "high": 1975.0,
        "low": 1885.0,
        "close": 1890.0,
        "ma5": 1837.0,
        "ma10": 1736.5
      }
    ],
    "symbol": "2308.TW",
    "maxVol10d": 20203,
    "hasVolumeBurst": false
  },
  {
    "code": "2303",
    "name": "聯電",
    "price": 121.0,
    "open": 125.0,
    "high": 125.5,
    "low": 120.0,
    "prevClose": 124.5,
    "volume": 85976,
    "ma5": 123.0,
    "ma10": 121.1,
    "ma20": 122.7,
    "vMa5": 126022,
    "vMa10": 176494,
    "limitUpPrice": 135.3,
    "categories": [
      "0050",
      "Top100",
      "半導體-晶圓"
    ],
    "sparkline": [
      118.0,
      118.5,
      122.0,
      121.5,
      116.0,
      123.0,
      123.0,
      123.0,
      124.5,
      121.0
    ],
    "ma60": 139.6,
    "high20d": 168.0,
    "high5d": 130.5,
    "high10d": 130.5,
    "k3d": [
      {
        "open": 121.5,
        "high": 124.5,
        "low": 120.0,
        "close": 123.0,
        "ma5": 121.1,
        "ma10": 117.55
      },
      {
        "open": 123.0,
        "high": 125.5,
        "low": 121.0,
        "close": 123.0,
        "ma5": 121.3,
        "ma10": 119.6
      },
      {
        "open": 125.5,
        "high": 130.5,
        "low": 123.0,
        "close": 124.5,
        "ma5": 121.9,
        "ma10": 121.05
      }
    ],
    "k5d": [
      {
        "open": 117.0,
        "high": 123.5,
        "low": 117.0,
        "close": 123.0,
        "ma5": 120.2,
        "ma10": 116.6
      },
      {
        "open": 121.5,
        "high": 124.5,
        "low": 120.0,
        "close": 123.0,
        "ma5": 121.1,
        "ma10": 117.55
      },
      {
        "open": 123.0,
        "high": 125.5,
        "low": 121.0,
        "close": 123.0,
        "ma5": 121.3,
        "ma10": 119.6
      },
      {
        "open": 125.5,
        "high": 130.5,
        "low": 123.0,
        "close": 124.5,
        "ma5": 121.9,
        "ma10": 121.05
      },
      {
        "open": 125.0,
        "high": 125.5,
        "low": 120.0,
        "close": 121.5,
        "ma5": 123.0,
        "ma10": 121.1
      }
    ],
    "symbol": "2303.TW",
    "maxVol10d": 368410,
    "hasVolumeBurst": true
  },
  {
    "code": "3711",
    "name": "日月光投控",
    "price": 619.0,
    "open": 635.0,
    "high": 635.0,
    "low": 608.0,
    "prevClose": 626.0,
    "volume": 10943,
    "ma5": 625.0,
    "ma10": 609.3,
    "ma20": 598.1,
    "vMa5": 18549,
    "vMa10": 22088,
    "limitUpPrice": 693.0,
    "categories": [
      "0050",
      "半導體-封測"
    ],
    "sparkline": [
      610.0,
      585.0,
      593.0,
      595.0,
      585.0,
      630.0,
      629.0,
      621.0,
      626.0,
      619.0
    ],
    "ma60": 617.7,
    "high20d": 694.0,
    "high5d": 641.0,
    "high10d": 641.0,
    "k3d": [
      {
        "open": 629.0,
        "high": 632.0,
        "low": 610.0,
        "close": 629.0,
        "ma5": 606.4,
        "ma10": 578.6
      },
      {
        "open": 633.0,
        "high": 634.0,
        "low": 619.0,
        "close": 621.0,
        "ma5": 612.0,
        "ma10": 590.8
      },
      {
        "open": 627.0,
        "high": 638.0,
        "low": 623.0,
        "close": 626.0,
        "ma5": 618.2,
        "ma10": 602.9
      }
    ],
    "k5d": [
      {
        "open": 602.0,
        "high": 641.0,
        "low": 601.0,
        "close": 630.0,
        "ma5": 597.6,
        "ma10": 571.1
      },
      {
        "open": 629.0,
        "high": 632.0,
        "low": 610.0,
        "close": 629.0,
        "ma5": 606.4,
        "ma10": 578.6
      },
      {
        "open": 633.0,
        "high": 634.0,
        "low": 619.0,
        "close": 621.0,
        "ma5": 612.0,
        "ma10": 590.8
      },
      {
        "open": 627.0,
        "high": 638.0,
        "low": 623.0,
        "close": 626.0,
        "ma5": 618.2,
        "ma10": 602.9
      },
      {
        "open": 635.0,
        "high": 635.0,
        "low": 608.0,
        "close": 619.0,
        "ma5": 625.0,
        "ma10": 609.3
      }
    ],
    "symbol": "3711.TW",
    "maxVol10d": 50347,
    "hasVolumeBurst": true
  },
  {
    "code": "2449",
    "name": "京元電子",
    "price": 248.5,
    "open": 256.0,
    "high": 256.5,
    "low": 247.0,
    "prevClose": 253.5,
    "volume": 10887,
    "ma5": 251.2,
    "ma10": 247.3,
    "ma20": 247.31,
    "vMa5": 21988,
    "vMa10": 22019,
    "limitUpPrice": 273.35,
    "categories": [
      "0050",
      "半導體-封測"
    ],
    "sparkline": [
      233.5,
      245.5,
      247.0,
      249.0,
      242.0,
      248.5,
      246.0,
      259.0,
      253.5,
      248.5
    ],
    "ma60": 280.09,
    "high20d": 308.57,
    "high5d": 262.0,
    "high10d": 262.0,
    "k3d": [
      {
        "open": 243.0,
        "high": 250.5,
        "low": 238.5,
        "close": 246.0,
        "ma5": 246.5,
        "ma10": 235.1
      },
      {
        "open": 246.0,
        "high": 260.0,
        "low": 243.5,
        "close": 259.0,
        "ma5": 248.9,
        "ma10": 239.75
      },
      {
        "open": 261.0,
        "high": 262.0,
        "low": 253.0,
        "close": 253.5,
        "ma5": 249.8,
        "ma10": 244.75
      }
    ],
    "k5d": [
      {
        "open": 242.0,
        "high": 253.5,
        "low": 237.0,
        "close": 248.5,
        "ma5": 246.4,
        "ma10": 234.1
      },
      {
        "open": 243.0,
        "high": 250.5,
        "low": 238.5,
        "close": 246.0,
        "ma5": 246.5,
        "ma10": 235.1
      },
      {
        "open": 246.0,
        "high": 260.0,
        "low": 243.5,
        "close": 259.0,
        "ma5": 248.9,
        "ma10": 239.75
      },
      {
        "open": 261.0,
        "high": 262.0,
        "low": 253.0,
        "close": 253.5,
        "ma5": 249.8,
        "ma10": 244.75
      },
      {
        "open": 256.0,
        "high": 256.5,
        "low": 247.0,
        "close": 249.0,
        "ma5": 251.2,
        "ma10": 247.3
      }
    ],
    "symbol": "2449.TW",
    "maxVol10d": 34302,
    "hasVolumeBurst": true
  },
  {
    "code": "3037",
    "name": "欣興",
    "price": 1020.0,
    "open": 1020.0,
    "high": 1025.0,
    "low": 995.0,
    "prevClose": 1000.0,
    "volume": 6099,
    "ma5": 1000.8,
    "ma10": 969.0,
    "ma20": 885.5,
    "vMa5": 6623,
    "vMa10": 19402,
    "limitUpPrice": 1091.2,
    "categories": [
      "0050",
      "半導體-載板"
    ],
    "sparkline": [
      865.0,
      924.0,
      969.0,
      973.0,
      955.0,
      992.0,
      992.0,
      1000.0,
      1000.0,
      1020.0
    ],
    "ma60": 932.65,
    "high20d": 1045.0,
    "high5d": 1045.0,
    "high10d": 1045.0,
    "k3d": [
      {
        "open": 988.0,
        "high": 995.0,
        "low": 972.0,
        "close": 992.0,
        "ma5": 976.2,
        "ma10": 886.1
      },
      {
        "open": 999.0,
        "high": 1010.0,
        "low": 990.0,
        "close": 1000.0,
        "ma5": 982.4,
        "ma10": 917.3
      },
      {
        "open": 1045.0,
        "high": 1045.0,
        "low": 976.0,
        "close": 1000.0,
        "ma5": 987.8,
        "ma10": 945.7
      }
    ],
    "k5d": [
      {
        "open": 979.0,
        "high": 995.0,
        "low": 976.0,
        "close": 992.0,
        "ma5": 962.6,
        "ma10": 863.3
      },
      {
        "open": 988.0,
        "high": 995.0,
        "low": 972.0,
        "close": 992.0,
        "ma5": 976.2,
        "ma10": 886.1
      },
      {
        "open": 999.0,
        "high": 1010.0,
        "low": 990.0,
        "close": 1000.0,
        "ma5": 982.4,
        "ma10": 917.3
      },
      {
        "open": 1045.0,
        "high": 1045.0,
        "low": 976.0,
        "close": 1000.0,
        "ma5": 987.8,
        "ma10": 945.7
      },
      {
        "open": 1020.0,
        "high": 1025.0,
        "low": 995.0,
        "close": 1020.0,
        "ma5": 1000.8,
        "ma10": 969.0
      }
    ],
    "symbol": "3037.TW",
    "maxVol10d": 52139,
    "hasVolumeBurst": true
  },
  {
    "code": "8046",
    "name": "南電",
    "price": 1320.0,
    "open": 1235.0,
    "high": 1335.0,
    "low": 1205.0,
    "prevClose": 1215.0,
    "volume": 20373,
    "ma5": 1216.0,
    "ma10": 1132.3,
    "ma20": 1097.5,
    "vMa5": 11412,
    "vMa10": 8103,
    "limitUpPrice": 1243.0,
    "categories": [
      "0050",
      "半導體-載板",
      "SitcaBuy"
    ],
    "sparkline": [
      953.0,
      1045.0,
      1060.0,
      1105.0,
      1080.0,
      1130.0,
      1150.0,
      1265.0,
      1215.0,
      1320.0
    ],
    "ma60": 1035.57,
    "high20d": 1415.0,
    "high5d": 1335.0,
    "high10d": 1335.0,
    "k3d": [
      {
        "open": 1115.0,
        "high": 1160.0,
        "low": 1100.0,
        "close": 1150.0,
        "ma5": 1105.0,
        "ma10": 1015.9
      },
      {
        "open": 1170.0,
        "high": 1265.0,
        "low": 1130.0,
        "close": 1265.0,
        "ma5": 1146.0,
        "ma10": 1054.5
      },
      {
        "open": 1295.0,
        "high": 1300.0,
        "low": 1215.0,
        "close": 1215.0,
        "ma5": 1168.0,
        "ma10": 1092.3
      }
    ],
    "k5d": [
      {
        "open": 1100.0,
        "high": 1180.0,
        "low": 1080.0,
        "close": 1130.0,
        "ma5": 1084.0,
        "ma10": 998.5
      },
      {
        "open": 1115.0,
        "high": 1160.0,
        "low": 1100.0,
        "close": 1150.0,
        "ma5": 1105.0,
        "ma10": 1015.9
      },
      {
        "open": 1170.0,
        "high": 1265.0,
        "low": 1130.0,
        "close": 1265.0,
        "ma5": 1146.0,
        "ma10": 1054.5
      },
      {
        "open": 1295.0,
        "high": 1300.0,
        "low": 1215.0,
        "close": 1215.0,
        "ma5": 1168.0,
        "ma10": 1092.3
      },
      {
        "open": 1235.0,
        "high": 1335.0,
        "low": 1205.0,
        "close": 1320.0,
        "ma5": 1216.0,
        "ma10": 1132.3
      }
    ],
    "symbol": "8046.TW",
    "maxVol10d": 20373,
    "hasVolumeBurst": true
  },
  {
    "code": "3189",
    "name": "景碩",
    "price": 852.0,
    "open": 841.0,
    "high": 862.0,
    "low": 840.0,
    "prevClose": 851.0,
    "volume": 2799,
    "ma5": 847.8,
    "ma10": 820.8,
    "ma20": 753.15,
    "vMa5": 3341,
    "vMa10": 9658,
    "limitUpPrice": 919.6,
    "categories": [
      "半導體-載板"
    ],
    "sparkline": [
      698.0,
      767.0,
      828.0,
      853.0,
      823.0,
      836.0,
      842.0,
      858.0,
      851.0,
      852.0
    ],
    "ma60": 744.87,
    "high20d": 872.0,
    "high5d": 872.0,
    "high10d": 872.0,
    "k3d": [
      {
        "open": 820.0,
        "high": 844.0,
        "low": 807.0,
        "close": 842.0,
        "ma5": 836.4,
        "ma10": 743.6
      },
      {
        "open": 847.0,
        "high": 864.0,
        "low": 827.0,
        "close": 858.0,
        "ma5": 842.4,
        "ma10": 771.8
      },
      {
        "open": 866.0,
        "high": 872.0,
        "low": 813.0,
        "close": 851.0,
        "ma5": 842.0,
        "ma10": 799.1
      }
    ],
    "k5d": [
      {
        "open": 823.0,
        "high": 849.0,
        "low": 811.0,
        "close": 836.0,
        "ma5": 821.4,
        "ma10": 723.3
      },
      {
        "open": 820.0,
        "high": 844.0,
        "low": 807.0,
        "close": 842.0,
        "ma5": 836.4,
        "ma10": 743.6
      },
      {
        "open": 847.0,
        "high": 864.0,
        "low": 827.0,
        "close": 858.0,
        "ma5": 842.4,
        "ma10": 771.8
      },
      {
        "open": 866.0,
        "high": 872.0,
        "low": 813.0,
        "close": 851.0,
        "ma5": 842.0,
        "ma10": 799.1
      },
      {
        "open": 841.0,
        "high": 862.0,
        "low": 840.0,
        "close": 852.0,
        "ma5": 847.8,
        "ma10": 820.8
      }
    ],
    "symbol": "3189.TW",
    "maxVol10d": 31600,
    "hasVolumeBurst": true
  },
  {
    "code": "6239",
    "name": "力成",
    "price": 279.5,
    "open": 287.0,
    "high": 288.5,
    "low": 277.5,
    "prevClose": 283.0,
    "volume": 10296,
    "ma5": 283.2,
    "ma10": 269.95,
    "ma20": 265.95,
    "vMa5": 17746,
    "vMa10": 20468,
    "limitUpPrice": 317.35,
    "categories": [
      "半導體-封測",
      "SitcaBuy"
    ],
    "sparkline": [
      238.5,
      256.5,
      256.5,
      269.5,
      262.5,
      288.5,
      282.5,
      281.5,
      283.0,
      279.5
    ],
    "ma60": 309.67,
    "high20d": 325.0,
    "high5d": 296.0,
    "high10d": 296.0,
    "k3d": [
      {
        "open": 291.0,
        "high": 296.0,
        "low": 271.0,
        "close": 282.5,
        "ma5": 271.9,
        "ma10": 253.75
      },
      {
        "open": 284.0,
        "high": 287.0,
        "low": 280.5,
        "close": 281.5,
        "ma5": 276.9,
        "ma10": 258.6
      },
      {
        "open": 287.0,
        "high": 294.0,
        "low": 282.0,
        "close": 283.0,
        "ma5": 279.6,
        "ma10": 265.45
      }
    ],
    "k5d": [
      {
        "open": 283.0,
        "high": 288.5,
        "low": 283.0,
        "close": 288.5,
        "ma5": 266.7,
        "ma10": 250.65
      },
      {
        "open": 291.0,
        "high": 296.0,
        "low": 271.0,
        "close": 282.5,
        "ma5": 271.9,
        "ma10": 253.75
      },
      {
        "open": 284.0,
        "high": 287.0,
        "low": 280.5,
        "close": 281.5,
        "ma5": 276.9,
        "ma10": 258.6
      },
      {
        "open": 287.0,
        "high": 294.0,
        "low": 282.0,
        "close": 283.0,
        "ma5": 279.6,
        "ma10": 265.45
      },
      {
        "open": 287.0,
        "high": 288.5,
        "low": 277.5,
        "close": 280.5,
        "ma5": 283.2,
        "ma10": 269.95
      }
    ],
    "symbol": "6239.TW",
    "maxVol10d": 39058,
    "hasVolumeBurst": true
  },
  {
    "code": "6770",
    "name": "力積電",
    "price": 79.2,
    "open": 76.6,
    "high": 81.8,
    "low": 76.3,
    "prevClose": 74.9,
    "volume": 441977,
    "ma5": 72.72,
    "ma10": 67.66,
    "ma20": 63.62,
    "vMa5": 335565,
    "vMa10": 296961,
    "limitUpPrice": 74.36,
    "categories": [
      "Top100",
      "半導體-晶圓"
    ],
    "sparkline": [
      54.7,
      60.1,
      66.1,
      66.6,
      65.5,
      67.6,
      67.0,
      73.7,
      74.9,
      79.2
    ],
    "ma60": 71.0,
    "high20d": 81.8,
    "high5d": 81.8,
    "high10d": 81.8,
    "k3d": [
      {
        "open": 66.4,
        "high": 67.5,
        "low": 65.3,
        "close": 67.0,
        "ma5": 66.56,
        "ma10": 60.2
      },
      {
        "open": 68.0,
        "high": 73.7,
        "low": 67.9,
        "close": 73.7,
        "ma5": 68.08,
        "ma10": 62.53
      },
      {
        "open": 75.0,
        "high": 77.4,
        "low": 72.7,
        "close": 74.9,
        "ma5": 69.74,
        "ma10": 65.07
      }
    ],
    "k5d": [
      {
        "open": 66.6,
        "high": 69.4,
        "low": 66.6,
        "close": 67.6,
        "ma5": 65.18,
        "ma10": 59.08
      },
      {
        "open": 66.4,
        "high": 67.5,
        "low": 65.3,
        "close": 67.0,
        "ma5": 66.56,
        "ma10": 60.2
      },
      {
        "open": 68.0,
        "high": 73.7,
        "low": 67.9,
        "close": 73.7,
        "ma5": 68.08,
        "ma10": 62.53
      },
      {
        "open": 75.0,
        "high": 77.4,
        "low": 72.7,
        "close": 74.9,
        "ma5": 69.74,
        "ma10": 65.07
      },
      {
        "open": 76.6,
        "high": 81.8,
        "low": 76.3,
        "close": 80.4,
        "ma5": 72.72,
        "ma10": 67.66
      }
    ],
    "symbol": "6770.TW",
    "maxVol10d": 469207,
    "hasVolumeBurst": true
  },
  {
    "code": "3707",
    "name": "漢磊",
    "price": 63.8,
    "open": 66.4,
    "high": 66.4,
    "low": 63.7,
    "prevClose": 65.6,
    "volume": 2792,
    "ma5": 63.42,
    "ma10": 61.78,
    "ma20": 60.53,
    "vMa5": 4379,
    "vMa10": 4523,
    "limitUpPrice": 68.53,
    "categories": [
      "半導體-功率",
      "Top100"
    ],
    "sparkline": [
      56.3,
      59.8,
      62.4,
      62.1,
      60.1,
      62.3,
      61.9,
      63.5,
      65.6,
      63.8
    ],
    "ma60": 74.99,
    "high20d": 80.1,
    "high5d": 68.9,
    "high10d": 68.9,
    "k3d": [
      {
        "open": 61.5,
        "high": 63.6,
        "low": 61.1,
        "close": 61.9,
        "ma5": 61.76,
        "ma10": 57.89
      },
      {
        "open": 62.0,
        "high": 65.0,
        "low": 62.0,
        "close": 63.5,
        "ma5": 61.98,
        "ma10": 58.96
      },
      {
        "open": 64.1,
        "high": 68.9,
        "low": 64.1,
        "close": 65.6,
        "ma5": 62.68,
        "ma10": 60.65
      }
    ],
    "k5d": [
      {
        "open": 61.6,
        "high": 63.4,
        "low": 60.9,
        "close": 62.3,
        "ma5": 61.34,
        "ma10": 57.19
      },
      {
        "open": 61.5,
        "high": 63.6,
        "low": 61.1,
        "close": 61.9,
        "ma5": 61.76,
        "ma10": 57.89
      },
      {
        "open": 62.0,
        "high": 65.0,
        "low": 62.0,
        "close": 63.5,
        "ma5": 61.98,
        "ma10": 58.96
      },
      {
        "open": 64.1,
        "high": 68.9,
        "low": 64.1,
        "close": 65.6,
        "ma5": 62.68,
        "ma10": 60.65
      },
      {
        "open": 66.4,
        "high": 66.4,
        "low": 63.7,
        "close": 63.8,
        "ma5": 63.42,
        "ma10": 61.78
      }
    ],
    "symbol": "3707.TWO",
    "maxVol10d": 8394,
    "hasVolumeBurst": true
  },
  {
    "code": "6488",
    "name": "環球晶",
    "price": 1020.0,
    "open": 1025.0,
    "high": 1045.0,
    "low": 1000.0,
    "prevClose": 1025.0,
    "volume": 12221,
    "ma5": 936.2,
    "ma10": 911.5,
    "ma20": 974.8,
    "vMa5": 9531,
    "vMa10": 11582,
    "limitUpPrice": 939.4,
    "categories": [
      "Top100",
      "半導體-功率"
    ],
    "sparkline": [
      866.0,
      952.0,
      872.0,
      872.0,
      872.0,
      854.0,
      849.0,
      933.0,
      1025.0,
      1020.0
    ],
    "ma60": 1026.2,
    "high20d": 1460.0,
    "high5d": 1045.0,
    "high10d": 1045.0,
    "k3d": [
      {
        "open": 847.0,
        "high": 883.0,
        "low": 823.0,
        "close": 849.0,
        "ma5": 863.8,
        "ma10": 863.4
      },
      {
        "open": 844.0,
        "high": 933.0,
        "low": 844.0,
        "close": 933.0,
        "ma5": 876.0,
        "ma10": 870.3
      },
      {
        "open": 970.0,
        "high": 1025.0,
        "low": 950.0,
        "close": 1025.0,
        "ma5": 906.6,
        "ma10": 895.0
      }
    ],
    "k5d": [
      {
        "open": 880.0,
        "high": 888.0,
        "low": 852.0,
        "close": 854.0,
        "ma5": 884.4,
        "ma10": 874.4
      },
      {
        "open": 847.0,
        "high": 883.0,
        "low": 823.0,
        "close": 849.0,
        "ma5": 863.8,
        "ma10": 863.4
      },
      {
        "open": 844.0,
        "high": 933.0,
        "low": 844.0,
        "close": 933.0,
        "ma5": 876.0,
        "ma10": 870.3
      },
      {
        "open": 970.0,
        "high": 1025.0,
        "low": 950.0,
        "close": 1025.0,
        "ma5": 906.6,
        "ma10": 895.0
      },
      {
        "open": 1025.0,
        "high": 1045.0,
        "low": 1000.0,
        "close": 1020.0,
        "ma5": 936.2,
        "ma10": 911.5
      }
    ],
    "symbol": "6488.TWO",
    "maxVol10d": 25167,
    "hasVolumeBurst": true
  },
  {
    "code": "5483",
    "name": "中美晶",
    "price": 187.0,
    "open": 189.5,
    "high": 191.5,
    "low": 185.0,
    "prevClose": 187.5,
    "volume": 18395,
    "ma5": 179.5,
    "ma10": 177.5,
    "ma20": 186.9,
    "vMa5": 31216,
    "vMa10": 31622,
    "limitUpPrice": 186.45,
    "categories": [
      "Top100",
      "半導體-功率"
    ],
    "sparkline": [
      172.5,
      181.0,
      178.0,
      177.5,
      168.5,
      169.5,
      168.5,
      185.0,
      187.5,
      187.0
    ],
    "ma60": 184.59,
    "high20d": 279.5,
    "high5d": 203.0,
    "high10d": 203.0,
    "k3d": [
      {
        "open": 168.5,
        "high": 173.0,
        "low": 165.0,
        "close": 168.5,
        "ma5": 172.4,
        "ma10": 169.15
      },
      {
        "open": 169.5,
        "high": 185.0,
        "low": 169.5,
        "close": 185.0,
        "ma5": 173.8,
        "ma10": 171.0
      },
      {
        "open": 188.0,
        "high": 203.0,
        "low": 186.0,
        "close": 187.5,
        "ma5": 175.8,
        "ma10": 174.5
      }
    ],
    "k5d": [
      {
        "open": 174.0,
        "high": 174.0,
        "low": 167.5,
        "close": 169.5,
        "ma5": 174.9,
        "ma10": 170.8
      },
      {
        "open": 168.5,
        "high": 173.0,
        "low": 165.0,
        "close": 168.5,
        "ma5": 172.4,
        "ma10": 169.15
      },
      {
        "open": 169.5,
        "high": 185.0,
        "low": 169.5,
        "close": 185.0,
        "ma5": 173.8,
        "ma10": 171.0
      },
      {
        "open": 188.0,
        "high": 203.0,
        "low": 186.0,
        "close": 187.5,
        "ma5": 175.8,
        "ma10": 174.5
      },
      {
        "open": 189.5,
        "high": 191.5,
        "low": 185.0,
        "close": 187.0,
        "ma5": 179.5,
        "ma10": 177.5
      }
    ],
    "symbol": "5483.TWO",
    "maxVol10d": 75101,
    "hasVolumeBurst": true
  },
  {
    "code": "2327",
    "name": "國巨*",
    "price": 624.0,
    "open": 668.0,
    "high": 668.0,
    "low": 617.0,
    "prevClose": 662.0,
    "volume": 59183,
    "ma5": 616.4,
    "ma10": 588.8,
    "ma20": 594.12,
    "vMa5": 54535,
    "vMa10": 53357,
    "limitUpPrice": 630.3,
    "categories": [
      "0050",
      "Top100",
      "半導體-被動元件",
      "SitcaBuy",
      "MajorBuy"
    ],
    "sparkline": [
      552.0,
      566.0,
      578.0,
      570.0,
      540.0,
      573.0,
      617.0,
      602.0,
      662.0,
      624.0
    ],
    "ma60": 787.04,
    "high20d": 807.0,
    "high5d": 668.0,
    "high10d": 668.0,
    "k3d": [
      {
        "open": 568.0,
        "high": 623.0,
        "low": 567.0,
        "close": 617.0,
        "ma5": 575.6,
        "ma10": 546.15
      },
      {
        "open": 607.0,
        "high": 625.0,
        "low": 600.0,
        "close": 602.0,
        "ma5": 580.4,
        "ma10": 555.65
      },
      {
        "open": 631.0,
        "high": 662.0,
        "low": 626.0,
        "close": 662.0,
        "ma5": 598.8,
        "ma10": 576.2
      }
    ],
    "k5d": [
      {
        "open": 558.0,
        "high": 578.0,
        "low": 557.0,
        "close": 573.0,
        "ma5": 565.4,
        "ma10": 540.75
      },
      {
        "open": 568.0,
        "high": 623.0,
        "low": 567.0,
        "close": 617.0,
        "ma5": 575.6,
        "ma10": 546.15
      },
      {
        "open": 607.0,
        "high": 625.0,
        "low": 600.0,
        "close": 602.0,
        "ma5": 580.4,
        "ma10": 555.65
      },
      {
        "open": 631.0,
        "high": 662.0,
        "low": 626.0,
        "close": 662.0,
        "ma5": 598.8,
        "ma10": 576.2
      },
      {
        "open": 668.0,
        "high": 668.0,
        "low": 617.0,
        "close": 628.0,
        "ma5": 616.4,
        "ma10": 588.8
      }
    ],
    "symbol": "2327.TW",
    "maxVol10d": 83824,
    "hasVolumeBurst": true
  },
  {
    "code": "2492",
    "name": "華新科",
    "price": 306.5,
    "open": 321.0,
    "high": 322.0,
    "low": 301.0,
    "prevClose": 316.5,
    "volume": 40846,
    "ma5": 297.7,
    "ma10": 275.45,
    "ma20": 266.62,
    "vMa5": 42742,
    "vMa10": 32803,
    "limitUpPrice": 300.85,
    "categories": [
      "半導體-被動元件",
      "SitcaBuy",
      "MajorBuy"
    ],
    "sparkline": [
      239.5,
      259.5,
      259.5,
      256.5,
      251.0,
      273.5,
      300.5,
      288.0,
      316.5,
      306.5
    ],
    "ma60": 394.56,
    "high20d": 375.0,
    "high5d": 322.0,
    "high10d": 322.0,
    "k3d": [
      {
        "open": 271.0,
        "high": 300.5,
        "low": 270.0,
        "close": 300.5,
        "ma5": 268.2,
        "ma10": 247.7
      },
      {
        "open": 298.0,
        "high": 312.0,
        "low": 288.0,
        "close": 288.0,
        "ma5": 273.9,
        "ma10": 254.45
      },
      {
        "open": 299.0,
        "high": 316.5,
        "low": 298.0,
        "close": 316.5,
        "ma5": 285.9,
        "ma10": 266.25
      }
    ],
    "k5d": [
      {
        "open": 255.0,
        "high": 273.5,
        "low": 255.0,
        "close": 273.5,
        "ma5": 260.0,
        "ma10": 242.15
      },
      {
        "open": 271.0,
        "high": 300.5,
        "low": 270.0,
        "close": 300.5,
        "ma5": 268.2,
        "ma10": 247.7
      },
      {
        "open": 298.0,
        "high": 312.0,
        "low": 288.0,
        "close": 288.0,
        "ma5": 273.9,
        "ma10": 254.45
      },
      {
        "open": 299.0,
        "high": 316.5,
        "low": 298.0,
        "close": 316.5,
        "ma5": 285.9,
        "ma10": 266.25
      },
      {
        "open": 321.0,
        "high": 322.0,
        "low": 301.0,
        "close": 310.0,
        "ma5": 297.7,
        "ma10": 275.45
      }
    ],
    "symbol": "2492.TW",
    "maxVol10d": 65843,
    "hasVolumeBurst": true
  },
  {
    "code": "3026",
    "name": "禾伸堂",
    "price": 650.0,
    "open": 695.0,
    "high": 695.0,
    "low": 646.0,
    "prevClose": 691.0,
    "volume": 1721,
    "ma5": 652.8,
    "ma10": 589.65,
    "ma20": 583.17,
    "vMa5": 14716,
    "vMa10": 8517,
    "limitUpPrice": 646.8,
    "categories": [
      "半導體-被動元件",
      "SitcaBuy"
    ],
    "sparkline": [
      459.5,
      498.0,
      547.0,
      593.0,
      535.0,
      588.0,
      646.0,
      685.0,
      691.0,
      650.0
    ],
    "ma60": 705.25,
    "high20d": 854.0,
    "high5d": 752.0,
    "high10d": 752.0,
    "k3d": [
      {
        "open": 617.0,
        "high": 646.0,
        "low": 594.0,
        "close": 646.0,
        "ma5": 581.8,
        "ma10": 521.85
      },
      {
        "open": 646.0,
        "high": 710.0,
        "low": 631.0,
        "close": 685.0,
        "ma5": 609.4,
        "ma10": 542.9
      },
      {
        "open": 706.0,
        "high": 752.0,
        "low": 690.0,
        "close": 691.0,
        "ma5": 629.0,
        "ma10": 569.25
      }
    ],
    "k5d": [
      {
        "open": 555.0,
        "high": 588.0,
        "low": 551.0,
        "close": 588.0,
        "ma5": 552.2,
        "ma10": 509.95
      },
      {
        "open": 617.0,
        "high": 646.0,
        "low": 594.0,
        "close": 646.0,
        "ma5": 581.8,
        "ma10": 521.85
      },
      {
        "open": 646.0,
        "high": 710.0,
        "low": 631.0,
        "close": 685.0,
        "ma5": 609.4,
        "ma10": 542.9
      },
      {
        "open": 706.0,
        "high": 752.0,
        "low": 690.0,
        "close": 691.0,
        "ma5": 629.0,
        "ma10": 569.25
      },
      {
        "open": 695.0,
        "high": 695.0,
        "low": 646.0,
        "close": 654.0,
        "ma5": 652.8,
        "ma10": 589.65
      }
    ],
    "symbol": "3026.TW",
    "maxVol10d": 24454,
    "hasVolumeBurst": true
  },
  {
    "code": "2408",
    "name": "南亞科",
    "price": 505.0,
    "open": 532.0,
    "high": 542.0,
    "low": 505.0,
    "prevClose": 514.0,
    "volume": 77737,
    "ma5": 498.9,
    "ma10": 468.8,
    "ma20": 430.85,
    "vMa5": 100960,
    "vMa10": 99544,
    "limitUpPrice": 552.2,
    "categories": [
      "0050",
      "Top100",
      "半導體-記憶體",
      "SitcaBuy",
      "MajorBuy"
    ],
    "sparkline": [
      396.5,
      436.0,
      445.0,
      459.0,
      457.0,
      502.0,
      489.0,
      482.5,
      514.0,
      505.0
    ],
    "ma60": 411.38,
    "high20d": 542.0,
    "high5d": 542.0,
    "high10d": 542.0,
    "k3d": [
      {
        "open": 491.5,
        "high": 500.0,
        "low": 474.0,
        "close": 489.0,
        "ma5": 470.4,
        "ma10": 422.65
      },
      {
        "open": 497.0,
        "high": 511.0,
        "low": 480.5,
        "close": 482.5,
        "ma5": 477.9,
        "ma10": 435.55
      },
      {
        "open": 497.0,
        "high": 530.0,
        "low": 490.0,
        "close": 514.0,
        "ma5": 488.9,
        "ma10": 454.15
      }
    ],
    "k5d": [
      {
        "open": 473.0,
        "high": 502.0,
        "low": 473.0,
        "close": 502.0,
        "ma5": 459.8,
        "ma10": 413.0
      },
      {
        "open": 491.5,
        "high": 500.0,
        "low": 474.0,
        "close": 489.0,
        "ma5": 470.4,
        "ma10": 422.65
      },
      {
        "open": 497.0,
        "high": 511.0,
        "low": 480.5,
        "close": 482.5,
        "ma5": 477.9,
        "ma10": 435.55
      },
      {
        "open": 497.0,
        "high": 530.0,
        "low": 490.0,
        "close": 514.0,
        "ma5": 488.9,
        "ma10": 454.15
      },
      {
        "open": 532.0,
        "high": 542.0,
        "low": 505.0,
        "close": 507.0,
        "ma5": 498.9,
        "ma10": 468.8
      }
    ],
    "symbol": "2408.TW",
    "maxVol10d": 142126,
    "hasVolumeBurst": true
  },
  {
    "code": "2344",
    "name": "華邦電",
    "price": 181.5,
    "open": 183.0,
    "high": 191.0,
    "low": 181.5,
    "prevClose": 177.0,
    "volume": 192051,
    "ma5": 178.7,
    "ma10": 169.7,
    "ma20": 158.62,
    "vMa5": 193670,
    "vMa10": 175061,
    "limitUpPrice": 197.45,
    "categories": [
      "Top100",
      "半導體-記憶體",
      "0050"
    ],
    "sparkline": [
      143.0,
      157.0,
      169.0,
      171.0,
      163.5,
      179.5,
      178.0,
      177.0,
      177.0,
      181.5
    ],
    "ma60": 170.62,
    "high20d": 193.0,
    "high5d": 193.0,
    "high10d": 193.0,
    "k3d": [
      {
        "open": 178.0,
        "high": 181.0,
        "low": 172.5,
        "close": 178.0,
        "ma5": 172.2,
        "ma10": 153.95
      },
      {
        "open": 186.5,
        "high": 193.0,
        "low": 174.5,
        "close": 177.0,
        "ma5": 173.8,
        "ma10": 158.65
      },
      {
        "open": 183.0,
        "high": 185.0,
        "low": 177.0,
        "close": 177.0,
        "ma5": 175.0,
        "ma10": 164.5
      }
    ],
    "k5d": [
      {
        "open": 169.0,
        "high": 179.5,
        "low": 168.5,
        "close": 179.5,
        "ma5": 168.0,
        "ma10": 150.55
      },
      {
        "open": 178.0,
        "high": 181.0,
        "low": 172.5,
        "close": 178.0,
        "ma5": 172.2,
        "ma10": 153.95
      },
      {
        "open": 186.5,
        "high": 193.0,
        "low": 174.5,
        "close": 177.0,
        "ma5": 173.8,
        "ma10": 158.65
      },
      {
        "open": 183.0,
        "high": 185.0,
        "low": 177.0,
        "close": 177.0,
        "ma5": 175.0,
        "ma10": 164.5
      },
      {
        "open": 183.0,
        "high": 191.0,
        "low": 181.5,
        "close": 182.0,
        "ma5": 178.7,
        "ma10": 169.7
      }
    ],
    "symbol": "2344.TW",
    "maxVol10d": 226251,
    "hasVolumeBurst": true
  },
  {
    "code": "3260",
    "name": "威剛",
    "price": 407.0,
    "open": 415.5,
    "high": 419.0,
    "low": 407.0,
    "prevClose": 409.0,
    "volume": 7086,
    "ma5": 408.4,
    "ma10": 406.5,
    "ma20": 393.25,
    "vMa5": 9135,
    "vMa10": 12418,
    "limitUpPrice": 452.1,
    "categories": [
      "Top100",
      "半導體-記憶體"
    ],
    "sparkline": [
      391.5,
      398.5,
      396.0,
      421.0,
      416.0,
      411.0,
      405.5,
      409.5,
      409.0,
      407.0
    ],
    "ma60": 406.28,
    "high20d": 437.0,
    "high5d": 424.0,
    "high10d": 437.0,
    "k3d": [
      {
        "open": 409.5,
        "high": 409.5,
        "low": 400.5,
        "close": 405.5,
        "ma5": 409.9,
        "ma10": 401.05
      },
      {
        "open": 408.5,
        "high": 422.0,
        "low": 408.5,
        "close": 409.5,
        "ma5": 412.6,
        "ma10": 402.6
      },
      {
        "open": 416.0,
        "high": 419.0,
        "low": 409.0,
        "close": 409.0,
        "ma5": 410.2,
        "ma10": 405.65
      }
    ],
    "k5d": [
      {
        "open": 421.0,
        "high": 424.0,
        "low": 411.0,
        "close": 411.0,
        "ma5": 408.5,
        "ma10": 397.4
      },
      {
        "open": 409.5,
        "high": 409.5,
        "low": 400.5,
        "close": 405.5,
        "ma5": 409.9,
        "ma10": 401.05
      },
      {
        "open": 408.5,
        "high": 422.0,
        "low": 408.5,
        "close": 409.5,
        "ma5": 412.6,
        "ma10": 402.6
      },
      {
        "open": 416.0,
        "high": 419.0,
        "low": 409.0,
        "close": 409.0,
        "ma5": 410.2,
        "ma10": 405.65
      },
      {
        "open": 415.5,
        "high": 419.0,
        "low": 407.0,
        "close": 407.0,
        "ma5": 408.4,
        "ma10": 406.5
      }
    ],
    "symbol": "3260.TWO",
    "maxVol10d": 21069,
    "hasVolumeBurst": false
  },
  {
    "code": "8299",
    "name": "群聯",
    "price": 2090.0,
    "open": 2325.0,
    "high": 2325.0,
    "low": 2085.0,
    "prevClose": 2280.0,
    "volume": 13236,
    "ma5": 2142.0,
    "ma10": 2018.0,
    "ma20": 1877.5,
    "vMa5": 6581,
    "vMa10": 5850,
    "limitUpPrice": 2244.0,
    "categories": [
      "Top100",
      "半導體-記憶體"
    ],
    "sparkline": [
      1760.0,
      1820.0,
      1845.0,
      2025.0,
      2020.0,
      2040.0,
      2090.0,
      2210.0,
      2280.0,
      2090.0
    ],
    "ma60": 2192.25,
    "high20d": 2325.0,
    "high5d": 2325.0,
    "high10d": 2325.0,
    "k3d": [
      {
        "open": 2035.0,
        "high": 2100.0,
        "low": 2015.0,
        "close": 2090.0,
        "ma5": 2004.0,
        "ma10": 1825.0
      },
      {
        "open": 2110.0,
        "high": 2245.0,
        "low": 2110.0,
        "close": 2210.0,
        "ma5": 2077.0,
        "ma10": 1894.5
      },
      {
        "open": 2260.0,
        "high": 2280.0,
        "low": 2175.0,
        "close": 2280.0,
        "ma5": 2128.0,
        "ma10": 1973.0
      }
    ],
    "k5d": [
      {
        "open": 2060.0,
        "high": 2080.0,
        "low": 2030.0,
        "close": 2040.0,
        "ma5": 1950.0,
        "ma10": 1781.0
      },
      {
        "open": 2035.0,
        "high": 2100.0,
        "low": 2015.0,
        "close": 2090.0,
        "ma5": 2004.0,
        "ma10": 1825.0
      },
      {
        "open": 2110.0,
        "high": 2245.0,
        "low": 2110.0,
        "close": 2210.0,
        "ma5": 2077.0,
        "ma10": 1894.5
      },
      {
        "open": 2260.0,
        "high": 2280.0,
        "low": 2175.0,
        "close": 2280.0,
        "ma5": 2128.0,
        "ma10": 1973.0
      },
      {
        "open": 2325.0,
        "high": 2325.0,
        "low": 2085.0,
        "close": 2090.0,
        "ma5": 2142.0,
        "ma10": 2018.0
      }
    ],
    "symbol": "8299.TWO",
    "maxVol10d": 13236,
    "hasVolumeBurst": true
  },
  {
    "code": "3034",
    "name": "聯詠",
    "price": 514.0,
    "open": 538.0,
    "high": 538.0,
    "low": 516.0,
    "prevClose": 538.0,
    "volume": 1987,
    "ma5": 534.8,
    "ma10": 535.2,
    "ma20": 516.12,
    "vMa5": 2774,
    "vMa10": 3527,
    "limitUpPrice": 598.4,
    "categories": [
      "半導體-IC設計"
    ],
    "sparkline": [
      519.0,
      524.0,
      550.0,
      543.0,
      542.0,
      544.0,
      538.0,
      537.0,
      538.0,
      514.0
    ],
    "ma60": 509.77,
    "high20d": 572.0,
    "high5d": 557.0,
    "high10d": 572.0,
    "k3d": [
      {
        "open": 543.0,
        "high": 546.0,
        "low": 533.0,
        "close": 538.0,
        "ma5": 543.4,
        "ma10": 527.5
      },
      {
        "open": 538.0,
        "high": 544.0,
        "low": 532.0,
        "close": 537.0,
        "ma5": 540.8,
        "ma10": 530.7
      },
      {
        "open": 542.0,
        "high": 545.0,
        "low": 531.0,
        "close": 538.0,
        "ma5": 539.8,
        "ma10": 535.4
      }
    ],
    "k5d": [
      {
        "open": 546.0,
        "high": 557.0,
        "low": 541.0,
        "close": 544.0,
        "ma5": 540.6,
        "ma10": 522.95
      },
      {
        "open": 543.0,
        "high": 546.0,
        "low": 533.0,
        "close": 538.0,
        "ma5": 543.4,
        "ma10": 527.5
      },
      {
        "open": 538.0,
        "high": 544.0,
        "low": 532.0,
        "close": 537.0,
        "ma5": 540.8,
        "ma10": 530.7
      },
      {
        "open": 542.0,
        "high": 545.0,
        "low": 531.0,
        "close": 538.0,
        "ma5": 539.8,
        "ma10": 535.4
      },
      {
        "open": 538.0,
        "high": 538.0,
        "low": 516.0,
        "close": 517.0,
        "ma5": 534.8,
        "ma10": 535.2
      }
    ],
    "symbol": "3034.TW",
    "maxVol10d": 7520,
    "hasVolumeBurst": false
  },
  {
    "code": "2379",
    "name": "瑞昱",
    "price": 732.0,
    "open": 752.0,
    "high": 759.0,
    "low": 735.0,
    "prevClose": 758.0,
    "volume": 1337,
    "ma5": 758.0,
    "ma10": 746.2,
    "ma20": 738.35,
    "vMa5": 1916,
    "vMa10": 2815,
    "limitUpPrice": 833.8,
    "categories": [
      "半導體-IC設計"
    ],
    "sparkline": [
      704.0,
      723.0,
      751.0,
      744.0,
      750.0,
      758.0,
      772.0,
      766.0,
      758.0,
      732.0
    ],
    "ma60": 723.0,
    "high20d": 783.0,
    "high5d": 780.0,
    "high10d": 780.0,
    "k3d": [
      {
        "open": 758.0,
        "high": 780.0,
        "low": 758.0,
        "close": 772.0,
        "ma5": 755.0,
        "ma10": 732.0
      },
      {
        "open": 772.0,
        "high": 776.0,
        "low": 760.0,
        "close": 766.0,
        "ma5": 758.0,
        "ma10": 734.8
      },
      {
        "open": 775.0,
        "high": 775.0,
        "low": 750.0,
        "close": 758.0,
        "ma5": 760.8,
        "ma10": 740.9
      }
    ],
    "k5d": [
      {
        "open": 752.0,
        "high": 764.0,
        "low": 746.0,
        "close": 758.0,
        "ma5": 745.2,
        "ma10": 727.9
      },
      {
        "open": 758.0,
        "high": 780.0,
        "low": 758.0,
        "close": 772.0,
        "ma5": 755.0,
        "ma10": 732.0
      },
      {
        "open": 772.0,
        "high": 776.0,
        "low": 760.0,
        "close": 766.0,
        "ma5": 758.0,
        "ma10": 734.8
      },
      {
        "open": 775.0,
        "high": 775.0,
        "low": 750.0,
        "close": 758.0,
        "ma5": 760.8,
        "ma10": 740.9
      },
      {
        "open": 752.0,
        "high": 759.0,
        "low": 735.0,
        "close": 736.0,
        "ma5": 758.0,
        "ma10": 746.2
      }
    ],
    "symbol": "2379.TW",
    "maxVol10d": 5573,
    "hasVolumeBurst": false
  },
  {
    "code": "2382",
    "name": "廣達",
    "price": 328.5,
    "open": 325.0,
    "high": 336.5,
    "low": 318.0,
    "prevClose": 325.0,
    "volume": 31634,
    "ma5": 322.0,
    "ma10": 311.1,
    "ma20": 312.98,
    "vMa5": 22314,
    "vMa10": 21397,
    "limitUpPrice": 344.85,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      296.5,
      300.5,
      304.0,
      302.0,
      298.0,
      313.5,
      315.5,
      325.5,
      325.0,
      328.5
    ],
    "ma60": 348.44,
    "high20d": 360.5,
    "high5d": 336.5,
    "high10d": 336.5,
    "k3d": [
      {
        "open": 312.5,
        "high": 316.5,
        "low": 309.5,
        "close": 315.5,
        "ma5": 306.6,
        "ma10": 301.0
      },
      {
        "open": 317.0,
        "high": 330.0,
        "low": 316.5,
        "close": 325.5,
        "ma5": 310.9,
        "ma10": 302.6
      },
      {
        "open": 328.0,
        "high": 328.5,
        "low": 320.5,
        "close": 325.0,
        "ma5": 315.5,
        "ma10": 307.2
      }
    ],
    "k5d": [
      {
        "open": 301.0,
        "high": 313.5,
        "low": 300.0,
        "close": 313.5,
        "ma5": 303.6,
        "ma10": 300.8
      },
      {
        "open": 312.5,
        "high": 316.5,
        "low": 309.5,
        "close": 315.5,
        "ma5": 306.6,
        "ma10": 301.0
      },
      {
        "open": 317.0,
        "high": 330.0,
        "low": 316.5,
        "close": 325.5,
        "ma5": 310.9,
        "ma10": 302.6
      },
      {
        "open": 328.0,
        "high": 328.5,
        "low": 320.5,
        "close": 325.0,
        "ma5": 315.5,
        "ma10": 307.2
      },
      {
        "open": 325.0,
        "high": 336.5,
        "low": 318.0,
        "close": 330.5,
        "ma5": 322.0,
        "ma10": 311.1
      }
    ],
    "symbol": "2382.TW",
    "maxVol10d": 31634,
    "hasVolumeBurst": false
  },
  {
    "code": "3231",
    "name": "緯創",
    "price": 195.0,
    "open": 198.0,
    "high": 206.0,
    "low": 194.0,
    "prevClose": 197.0,
    "volume": 74853,
    "ma5": 194.1,
    "ma10": 191.75,
    "ma20": 178.97,
    "vMa5": 58334,
    "vMa10": 95010,
    "limitUpPrice": 212.3,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "sparkline": [
      186.0,
      195.0,
      193.0,
      189.5,
      183.5,
      193.0,
      191.0,
      193.5,
      197.0,
      195.0
    ],
    "ma60": 164.32,
    "high20d": 206.0,
    "high5d": 206.0,
    "high10d": 206.0,
    "k3d": [
      {
        "open": 190.0,
        "high": 193.5,
        "low": 188.0,
        "close": 191.0,
        "ma5": 190.0,
        "ma10": 183.65
      },
      {
        "open": 189.5,
        "high": 195.0,
        "low": 189.0,
        "close": 193.5,
        "ma5": 190.1,
        "ma10": 186.05
      },
      {
        "open": 196.0,
        "high": 199.5,
        "low": 193.5,
        "close": 197.0,
        "ma5": 191.6,
        "ma10": 189.75
      }
    ],
    "k5d": [
      {
        "open": 185.5,
        "high": 193.5,
        "low": 184.5,
        "close": 193.0,
        "ma5": 190.8,
        "ma10": 181.55
      },
      {
        "open": 190.0,
        "high": 193.5,
        "low": 188.0,
        "close": 191.0,
        "ma5": 190.0,
        "ma10": 183.65
      },
      {
        "open": 189.5,
        "high": 195.0,
        "low": 189.0,
        "close": 193.5,
        "ma5": 190.1,
        "ma10": 186.05
      },
      {
        "open": 196.0,
        "high": 199.5,
        "low": 193.5,
        "close": 197.0,
        "ma5": 191.6,
        "ma10": 189.75
      },
      {
        "open": 198.0,
        "high": 206.0,
        "low": 194.0,
        "close": 196.0,
        "ma5": 194.1,
        "ma10": 191.75
      }
    ],
    "symbol": "3231.TW",
    "maxVol10d": 204777,
    "hasVolumeBurst": false
  },
  {
    "code": "2356",
    "name": "英業達",
    "price": 70.3,
    "open": 71.0,
    "high": 73.5,
    "low": 70.0,
    "prevClose": 68.8,
    "volume": 48447,
    "ma5": 67.96,
    "ma10": 66.49,
    "ma20": 63.68,
    "vMa5": 46287,
    "vMa10": 37609,
    "limitUpPrice": 72.6,
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "sparkline": [
      63.9,
      66.0,
      65.7,
      65.5,
      64.0,
      66.0,
      65.1,
      69.0,
      68.8,
      70.3
    ],
    "ma60": 66.19,
    "high20d": 73.5,
    "high5d": 73.5,
    "high10d": 73.5,
    "k3d": [
      {
        "open": 65.9,
        "high": 66.0,
        "low": 64.2,
        "close": 65.1,
        "ma5": 65.26,
        "ma10": 63.58
      },
      {
        "open": 66.0,
        "high": 71.1,
        "low": 65.9,
        "close": 69.0,
        "ma5": 65.92,
        "ma10": 64.45
      },
      {
        "open": 69.5,
        "high": 72.6,
        "low": 68.2,
        "close": 68.8,
        "ma5": 66.58,
        "ma10": 65.58
      }
    ],
    "k5d": [
      {
        "open": 64.5,
        "high": 66.0,
        "low": 64.4,
        "close": 66.0,
        "ma5": 65.44,
        "ma10": 62.95
      },
      {
        "open": 65.9,
        "high": 66.0,
        "low": 64.2,
        "close": 65.1,
        "ma5": 65.26,
        "ma10": 63.58
      },
      {
        "open": 66.0,
        "high": 71.1,
        "low": 65.9,
        "close": 69.0,
        "ma5": 65.92,
        "ma10": 64.45
      },
      {
        "open": 69.5,
        "high": 72.6,
        "low": 68.2,
        "close": 68.8,
        "ma5": 66.58,
        "ma10": 65.58
      },
      {
        "open": 71.0,
        "high": 73.5,
        "low": 70.0,
        "close": 70.9,
        "ma5": 67.96,
        "ma10": 66.49
      }
    ],
    "symbol": "2356.TW",
    "maxVol10d": 79065,
    "hasVolumeBurst": true
  },
  {
    "code": "2376",
    "name": "技嘉",
    "price": 390.5,
    "open": 390.0,
    "high": 402.0,
    "low": 386.5,
    "prevClose": 393.5,
    "volume": 10069,
    "ma5": 372.3,
    "ma10": 354.8,
    "ma20": 346.5,
    "vMa5": 11153,
    "vMa10": 9942,
    "limitUpPrice": 384.45,
    "categories": [
      "MajorBuy"
    ],
    "sparkline": [
      324.5,
      332.0,
      342.0,
      344.0,
      344.0,
      349.5,
      350.5,
      375.5,
      393.5,
      390.5
    ],
    "ma60": 344.95,
    "high20d": 402.0,
    "high5d": 402.0,
    "high10d": 402.0,
    "k3d": [
      {
        "open": 349.5,
        "high": 353.0,
        "low": 346.5,
        "close": 350.5,
        "ma5": 346.0,
        "ma10": 336.3
      },
      {
        "open": 352.0,
        "high": 381.0,
        "low": 352.0,
        "close": 375.5,
        "ma5": 352.7,
        "ma10": 341.7
      },
      {
        "open": 385.5,
        "high": 395.0,
        "low": 379.5,
        "close": 393.5,
        "ma5": 362.6,
        "ma10": 349.2
      }
    ],
    "k5d": [
      {
        "open": 345.5,
        "high": 352.0,
        "low": 343.0,
        "close": 349.5,
        "ma5": 342.3,
        "ma10": 333.95
      },
      {
        "open": 349.5,
        "high": 353.0,
        "low": 346.5,
        "close": 350.5,
        "ma5": 346.0,
        "ma10": 336.3
      },
      {
        "open": 352.0,
        "high": 381.0,
        "low": 352.0,
        "close": 375.5,
        "ma5": 352.7,
        "ma10": 341.7
      },
      {
        "open": 385.5,
        "high": 395.0,
        "low": 379.5,
        "close": 393.5,
        "ma5": 362.6,
        "ma10": 349.2
      },
      {
        "open": 390.0,
        "high": 402.0,
        "low": 386.5,
        "close": 392.5,
        "ma5": 372.3,
        "ma10": 354.8
      }
    ],
    "symbol": "2376.TW",
    "maxVol10d": 17911,
    "hasVolumeBurst": true
  },
  {
    "code": "2603",
    "name": "長榮",
    "price": 218.0,
    "open": 215.5,
    "high": 219.0,
    "low": 211.0,
    "prevClose": 215.5,
    "volume": 9098,
    "ma5": 216.1,
    "ma10": 211.05,
    "ma20": 206.75,
    "vMa5": 10113,
    "vMa10": 7892,
    "limitUpPrice": 235.4,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      207.5,
      206.0,
      205.0,
      204.0,
      207.5,
      214.0,
      218.0,
      214.5,
      215.5,
      218.0
    ],
    "ma60": 205.91,
    "high20d": 220.0,
    "high5d": 220.0,
    "high10d": 220.0,
    "k3d": [
      {
        "open": 215.0,
        "high": 220.0,
        "low": 213.5,
        "close": 218.0,
        "ma5": 209.7,
        "ma10": 206.85
      },
      {
        "open": 217.0,
        "high": 217.0,
        "low": 213.0,
        "close": 214.5,
        "ma5": 211.6,
        "ma10": 208.15
      },
      {
        "open": 215.0,
        "high": 217.0,
        "low": 214.0,
        "close": 215.5,
        "ma5": 213.9,
        "ma10": 209.6
      }
    ],
    "k5d": [
      {
        "open": 208.5,
        "high": 215.0,
        "low": 208.0,
        "close": 214.0,
        "ma5": 207.3,
        "ma10": 205.05
      },
      {
        "open": 215.0,
        "high": 220.0,
        "low": 213.5,
        "close": 218.0,
        "ma5": 209.7,
        "ma10": 206.85
      },
      {
        "open": 217.0,
        "high": 217.0,
        "low": 213.0,
        "close": 214.5,
        "ma5": 211.6,
        "ma10": 208.15
      },
      {
        "open": 215.0,
        "high": 217.0,
        "low": 214.0,
        "close": 215.5,
        "ma5": 213.9,
        "ma10": 209.6
      },
      {
        "open": 215.5,
        "high": 219.0,
        "low": 211.0,
        "close": 218.5,
        "ma5": 216.1,
        "ma10": 211.05
      }
    ],
    "symbol": "2603.TW",
    "maxVol10d": 14096,
    "hasVolumeBurst": true
  },
  {
    "code": "2609",
    "name": "陽明",
    "price": 51.7,
    "open": 51.5,
    "high": 51.9,
    "low": 50.7,
    "prevClose": 51.4,
    "volume": 15054,
    "ma5": 51.68,
    "ma10": 51.17,
    "ma20": 50.89,
    "vMa5": 17737,
    "vMa10": 14500,
    "limitUpPrice": 56.76,
    "categories": [],
    "sparkline": [
      50.8,
      51.0,
      50.6,
      50.4,
      50.5,
      51.6,
      52.0,
      51.7,
      51.4,
      51.7
    ],
    "ma60": 51.43,
    "high20d": 52.2,
    "high5d": 52.2,
    "high10d": 52.2,
    "k3d": [
      {
        "open": 51.8,
        "high": 52.2,
        "low": 51.3,
        "close": 52.0,
        "ma5": 51.02,
        "ma10": 50.78
      },
      {
        "open": 52.0,
        "high": 52.1,
        "low": 51.3,
        "close": 51.7,
        "ma5": 51.24,
        "ma10": 50.94
      },
      {
        "open": 51.9,
        "high": 52.0,
        "low": 50.9,
        "close": 51.4,
        "ma5": 51.44,
        "ma10": 51.08
      }
    ],
    "k5d": [
      {
        "open": 50.8,
        "high": 51.8,
        "low": 50.5,
        "close": 51.6,
        "ma5": 50.82,
        "ma10": 50.65
      },
      {
        "open": 51.8,
        "high": 52.2,
        "low": 51.3,
        "close": 52.0,
        "ma5": 51.02,
        "ma10": 50.78
      },
      {
        "open": 52.0,
        "high": 52.1,
        "low": 51.3,
        "close": 51.7,
        "ma5": 51.24,
        "ma10": 50.94
      },
      {
        "open": 51.9,
        "high": 52.0,
        "low": 50.9,
        "close": 51.4,
        "ma5": 51.44,
        "ma10": 51.08
      },
      {
        "open": 51.5,
        "high": 51.9,
        "low": 50.7,
        "close": 51.7,
        "ma5": 51.68,
        "ma10": 51.17
      }
    ],
    "symbol": "2609.TW",
    "maxVol10d": 23501,
    "hasVolumeBurst": true
  },
  {
    "code": "2615",
    "name": "萬海",
    "price": 90.5,
    "open": 88.2,
    "high": 91.4,
    "low": 87.0,
    "prevClose": 87.5,
    "volume": 21728,
    "ma5": 87.96,
    "ma10": 86.66,
    "ma20": 85.53,
    "vMa5": 14495,
    "vMa10": 9942,
    "limitUpPrice": 96.25,
    "categories": [],
    "sparkline": [
      86.1,
      86.1,
      85.4,
      84.3,
      84.9,
      87.5,
      87.1,
      87.1,
      87.5,
      90.5
    ],
    "ma60": 82.69,
    "high20d": 91.4,
    "high5d": 91.4,
    "high10d": 91.4,
    "k3d": [
      {
        "open": 87.7,
        "high": 88.8,
        "low": 86.4,
        "close": 87.1,
        "ma5": 85.84,
        "ma10": 85.55
      },
      {
        "open": 87.7,
        "high": 87.7,
        "low": 86.0,
        "close": 87.1,
        "ma5": 86.18,
        "ma10": 85.76
      },
      {
        "open": 88.1,
        "high": 88.8,
        "low": 86.5,
        "close": 87.5,
        "ma5": 86.82,
        "ma10": 86.07
      }
    ],
    "k5d": [
      {
        "open": 86.2,
        "high": 88.4,
        "low": 86.1,
        "close": 87.5,
        "ma5": 85.64,
        "ma10": 85.2
      },
      {
        "open": 87.7,
        "high": 88.8,
        "low": 86.4,
        "close": 87.1,
        "ma5": 85.84,
        "ma10": 85.55
      },
      {
        "open": 87.7,
        "high": 87.7,
        "low": 86.0,
        "close": 87.1,
        "ma5": 86.18,
        "ma10": 85.76
      },
      {
        "open": 88.1,
        "high": 88.8,
        "low": 86.5,
        "close": 87.5,
        "ma5": 86.82,
        "ma10": 86.07
      },
      {
        "open": 88.2,
        "high": 91.4,
        "low": 87.0,
        "close": 90.6,
        "ma5": 87.96,
        "ma10": 86.66
      }
    ],
    "symbol": "2615.TW",
    "maxVol10d": 21728,
    "hasVolumeBurst": true
  },
  {
    "code": "3481",
    "name": "群創",
    "price": 50.2,
    "open": 50.2,
    "high": 51.5,
    "low": 50.0,
    "prevClose": 49.4,
    "volume": 177149,
    "ma5": 50.52,
    "ma10": 49.15,
    "ma20": 48.38,
    "vMa5": 227204,
    "vMa10": 284719,
    "limitUpPrice": 57.53,
    "categories": [
      "Top100"
    ],
    "sparkline": [
      45.8,
      47.8,
      47.8,
      50.0,
      47.55,
      52.3,
      50.1,
      50.4,
      49.4,
      50.2
    ],
    "ma60": 54.84,
    "high20d": 58.9,
    "high5d": 52.3,
    "high10d": 52.3,
    "k3d": [
      {
        "open": 51.4,
        "high": 52.3,
        "low": 49.65,
        "close": 50.1,
        "ma5": 49.55,
        "ma10": 47.0
      },
      {
        "open": 51.0,
        "high": 52.1,
        "low": 50.3,
        "close": 50.4,
        "ma5": 50.07,
        "ma10": 47.86
      },
      {
        "open": 51.5,
        "high": 51.9,
        "low": 49.4,
        "close": 49.4,
        "ma5": 49.95,
        "ma10": 48.66
      }
    ],
    "k5d": [
      {
        "open": 48.6,
        "high": 52.3,
        "low": 48.55,
        "close": 52.3,
        "ma5": 49.09,
        "ma10": 46.49
      },
      {
        "open": 51.4,
        "high": 52.3,
        "low": 49.65,
        "close": 50.1,
        "ma5": 49.55,
        "ma10": 47.0
      },
      {
        "open": 51.0,
        "high": 52.1,
        "low": 50.3,
        "close": 50.4,
        "ma5": 50.07,
        "ma10": 47.86
      },
      {
        "open": 51.5,
        "high": 51.9,
        "low": 49.4,
        "close": 49.4,
        "ma5": 49.95,
        "ma10": 48.66
      },
      {
        "open": 50.2,
        "high": 51.5,
        "low": 50.0,
        "close": 50.4,
        "ma5": 50.52,
        "ma10": 49.15
      }
    ],
    "symbol": "3481.TW",
    "maxVol10d": 419589,
    "hasVolumeBurst": false
  },
  {
    "code": "2409",
    "name": "友達",
    "price": 25.9,
    "open": 26.05,
    "high": 26.4,
    "low": 25.8,
    "prevClose": 25.75,
    "volume": 94605,
    "ma5": 26.22,
    "ma10": 25.3,
    "ma20": 24.97,
    "vMa5": 213319,
    "vMa10": 182312,
    "limitUpPrice": 29.7,
    "categories": [
      "Top100"
    ],
    "sparkline": [
      23.9,
      24.45,
      24.45,
      24.55,
      24.55,
      27.0,
      26.1,
      26.25,
      25.75,
      25.9
    ],
    "ma60": 26.41,
    "high20d": 28.2,
    "high5d": 27.9,
    "high10d": 27.9,
    "k3d": [
      {
        "open": 27.85,
        "high": 27.9,
        "low": 25.9,
        "close": 26.1,
        "ma5": 25.33,
        "ma10": 24.51
      },
      {
        "open": 26.4,
        "high": 26.9,
        "low": 26.15,
        "close": 26.25,
        "ma5": 25.69,
        "ma10": 24.77
      },
      {
        "open": 26.55,
        "high": 26.9,
        "low": 25.75,
        "close": 25.75,
        "ma5": 25.93,
        "ma10": 25.12
      }
    ],
    "k5d": [
      {
        "open": 25.6,
        "high": 27.0,
        "low": 25.35,
        "close": 27.0,
        "ma5": 25.0,
        "ma10": 24.29
      },
      {
        "open": 27.85,
        "high": 27.9,
        "low": 25.9,
        "close": 26.1,
        "ma5": 25.33,
        "ma10": 24.51
      },
      {
        "open": 26.4,
        "high": 26.9,
        "low": 26.15,
        "close": 26.25,
        "ma5": 25.69,
        "ma10": 24.77
      },
      {
        "open": 26.55,
        "high": 26.9,
        "low": 25.75,
        "close": 25.75,
        "ma5": 25.93,
        "ma10": 25.12
      },
      {
        "open": 26.05,
        "high": 26.4,
        "low": 25.8,
        "close": 26.0,
        "ma5": 26.22,
        "ma10": 25.3
      }
    ],
    "symbol": "2409.TW",
    "maxVol10d": 458806,
    "hasVolumeBurst": true
  },
  {
    "code": "2881",
    "name": "富邦金",
    "price": 129.5,
    "open": 128.5,
    "high": 130.0,
    "low": 128.0,
    "prevClose": 128.5,
    "volume": 4430,
    "ma5": 128.2,
    "ma10": 128.15,
    "ma20": 127.2,
    "vMa5": 8678,
    "vMa10": 14009,
    "limitUpPrice": 141.35,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      129.5,
      128.5,
      129.5,
      126.0,
      127.0,
      128.5,
      128.0,
      127.0,
      128.5,
      129.5
    ],
    "ma60": 123.9,
    "high20d": 132.5,
    "high5d": 130.0,
    "high10d": 132.5,
    "k3d": [
      {
        "open": 129.5,
        "high": 129.5,
        "low": 127.5,
        "close": 128.0,
        "ma5": 127.8,
        "ma10": 127.4
      },
      {
        "open": 127.5,
        "high": 129.5,
        "low": 126.5,
        "close": 127.0,
        "ma5": 127.3,
        "ma10": 127.8
      },
      {
        "open": 128.0,
        "high": 129.0,
        "low": 127.0,
        "close": 128.5,
        "ma5": 127.8,
        "ma10": 128.25
      }
    ],
    "k5d": [
      {
        "open": 128.0,
        "high": 129.0,
        "low": 125.5,
        "close": 128.5,
        "ma5": 127.9,
        "ma10": 127.15
      },
      {
        "open": 129.5,
        "high": 129.5,
        "low": 127.5,
        "close": 128.0,
        "ma5": 127.8,
        "ma10": 127.4
      },
      {
        "open": 127.5,
        "high": 129.5,
        "low": 126.5,
        "close": 127.0,
        "ma5": 127.3,
        "ma10": 127.8
      },
      {
        "open": 128.0,
        "high": 129.0,
        "low": 127.0,
        "close": 128.5,
        "ma5": 127.8,
        "ma10": 128.25
      },
      {
        "open": 128.5,
        "high": 130.0,
        "low": 128.0,
        "close": 129.0,
        "ma5": 128.2,
        "ma10": 128.15
      }
    ],
    "symbol": "2881.TW",
    "maxVol10d": 29051,
    "hasVolumeBurst": false
  },
  {
    "code": "2882",
    "name": "國泰金",
    "price": 101.0,
    "open": 100.0,
    "high": 102.5,
    "low": 100.0,
    "prevClose": 99.5,
    "volume": 13382,
    "ma5": 100.16,
    "ma10": 99.79,
    "ma20": 98.17,
    "vMa5": 14902,
    "vMa10": 16904,
    "limitUpPrice": 111.1,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      100.5,
      99.2,
      100.5,
      97.5,
      99.4,
      101.0,
      99.6,
      99.7,
      99.5,
      101.0
    ],
    "ma60": 97.79,
    "high20d": 102.5,
    "high5d": 102.5,
    "high10d": 102.5,
    "k3d": [
      {
        "open": 101.5,
        "high": 101.5,
        "low": 99.1,
        "close": 99.6,
        "ma5": 99.6,
        "ma10": 98.85
      },
      {
        "open": 100.0,
        "high": 101.0,
        "low": 98.5,
        "close": 99.7,
        "ma5": 99.44,
        "ma10": 99.41
      },
      {
        "open": 100.0,
        "high": 100.5,
        "low": 98.9,
        "close": 99.5,
        "ma5": 99.84,
        "ma10": 99.84
      }
    ],
    "k5d": [
      {
        "open": 100.0,
        "high": 101.0,
        "low": 98.0,
        "close": 101.0,
        "ma5": 99.52,
        "ma10": 98.43
      },
      {
        "open": 101.5,
        "high": 101.5,
        "low": 99.1,
        "close": 99.6,
        "ma5": 99.6,
        "ma10": 98.85
      },
      {
        "open": 100.0,
        "high": 101.0,
        "low": 98.5,
        "close": 99.7,
        "ma5": 99.44,
        "ma10": 99.41
      },
      {
        "open": 100.0,
        "high": 100.5,
        "low": 98.9,
        "close": 99.5,
        "ma5": 99.84,
        "ma10": 99.84
      },
      {
        "open": 100.0,
        "high": 102.5,
        "low": 100.0,
        "close": 101.0,
        "ma5": 100.16,
        "ma10": 99.79
      }
    ],
    "symbol": "2882.TW",
    "maxVol10d": 25674,
    "hasVolumeBurst": false
  },
  {
    "code": "2891",
    "name": "中信金",
    "price": 65.8,
    "open": 66.9,
    "high": 67.2,
    "low": 65.2,
    "prevClose": 66.5,
    "volume": 15965,
    "ma5": 66.38,
    "ma10": 65.77,
    "ma20": 64.42,
    "vMa5": 26280,
    "vMa10": 29136,
    "limitUpPrice": 73.15,
    "categories": [
      "0050"
    ],
    "sparkline": [
      64.8,
      64.8,
      66.0,
      64.6,
      65.6,
      66.5,
      66.8,
      66.6,
      66.5,
      65.8
    ],
    "ma60": 66.2,
    "high20d": 67.3,
    "high5d": 67.3,
    "high10d": 67.3,
    "k3d": [
      {
        "open": 67.0,
        "high": 67.3,
        "low": 66.3,
        "close": 66.8,
        "ma5": 65.9,
        "ma10": 64.91
      },
      {
        "open": 66.3,
        "high": 67.0,
        "low": 65.5,
        "close": 66.6,
        "ma5": 66.02,
        "ma10": 65.37
      },
      {
        "open": 66.3,
        "high": 66.5,
        "low": 65.2,
        "close": 66.5,
        "ma5": 66.4,
        "ma10": 65.71
      }
    ],
    "k5d": [
      {
        "open": 65.8,
        "high": 66.5,
        "low": 64.9,
        "close": 66.5,
        "ma5": 65.5,
        "ma10": 64.47
      },
      {
        "open": 67.0,
        "high": 67.3,
        "low": 66.3,
        "close": 66.8,
        "ma5": 65.9,
        "ma10": 64.91
      },
      {
        "open": 66.3,
        "high": 67.0,
        "low": 65.5,
        "close": 66.6,
        "ma5": 66.02,
        "ma10": 65.37
      },
      {
        "open": 66.3,
        "high": 66.5,
        "low": 65.2,
        "close": 66.5,
        "ma5": 66.4,
        "ma10": 65.71
      },
      {
        "open": 66.9,
        "high": 67.2,
        "low": 65.2,
        "close": 65.5,
        "ma5": 66.38,
        "ma10": 65.77
      }
    ],
    "symbol": "2891.TW",
    "maxVol10d": 43608,
    "hasVolumeBurst": false
  },
  {
    "code": "2886",
    "name": "兆豐金",
    "price": 46.9,
    "open": 45.85,
    "high": 46.25,
    "low": 45.7,
    "prevClose": 45.85,
    "volume": 18702,
    "ma5": 48.16,
    "ma10": 49.55,
    "ma20": 49.52,
    "vMa5": 35228,
    "vMa10": 33343,
    "limitUpPrice": 56.1,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "sparkline": [
      51.6,
      50.7,
      51.2,
      50.3,
      50.9,
      51.0,
      49.4,
      48.7,
      45.85,
      46.9
    ],
    "ma60": 45.94,
    "high20d": 53.7,
    "high5d": 51.9,
    "high10d": 52.9,
    "k3d": [
      {
        "open": 50.7,
        "high": 50.9,
        "low": 49.35,
        "close": 49.4,
        "ma5": 50.56,
        "ma10": 50.96
      },
      {
        "open": 49.4,
        "high": 49.45,
        "low": 48.55,
        "close": 48.7,
        "ma5": 50.06,
        "ma10": 50.84
      },
      {
        "open": 46.9,
        "high": 46.9,
        "low": 44.95,
        "close": 45.85,
        "ma5": 49.17,
        "ma10": 50.27
      }
    ],
    "k5d": [
      {
        "open": 51.9,
        "high": 51.9,
        "low": 50.2,
        "close": 51.0,
        "ma5": 50.82,
        "ma10": 50.97
      },
      {
        "open": 50.7,
        "high": 50.9,
        "low": 49.35,
        "close": 49.4,
        "ma5": 50.56,
        "ma10": 50.96
      },
      {
        "open": 49.4,
        "high": 49.45,
        "low": 48.55,
        "close": 48.7,
        "ma5": 50.06,
        "ma10": 50.84
      },
      {
        "open": 46.9,
        "high": 46.9,
        "low": 44.95,
        "close": 45.85,
        "ma5": 49.17,
        "ma10": 50.27
      },
      {
        "open": 45.85,
        "high": 46.25,
        "low": 45.7,
        "close": 45.85,
        "ma5": 48.16,
        "ma10": 49.55
      }
    ],
    "symbol": "2886.TW",
    "maxVol10d": 71142,
    "hasVolumeBurst": true
  },
  {
    "code": "2884",
    "name": "玉山金",
    "price": 38.0,
    "open": 37.45,
    "high": 37.75,
    "low": 36.95,
    "prevClose": 37.3,
    "volume": 16673,
    "ma5": 37.22,
    "ma10": 37.67,
    "ma20": 37.14,
    "vMa5": 29654,
    "vMa10": 30490,
    "limitUpPrice": 41.58,
    "categories": [
      "0050",
      "SitcaBuy",
      "Top100"
    ],
    "sparkline": [
      38.45,
      38.0,
      38.1,
      37.95,
      38.15,
      37.8,
      36.9,
      36.75,
      37.3,
      38.0
    ],
    "ma60": 34.91,
    "high20d": 39.1,
    "high5d": 38.2,
    "high10d": 38.9,
    "k3d": [
      {
        "open": 37.2,
        "high": 37.5,
        "low": 36.65,
        "close": 36.9,
        "ma5": 37.78,
        "ma10": 37.82
      },
      {
        "open": 37.2,
        "high": 37.25,
        "low": 36.3,
        "close": 36.75,
        "ma5": 37.51,
        "ma10": 37.85
      },
      {
        "open": 37.0,
        "high": 37.3,
        "low": 36.35,
        "close": 37.3,
        "ma5": 37.38,
        "ma10": 37.81
      }
    ],
    "k5d": [
      {
        "open": 38.15,
        "high": 38.2,
        "low": 37.25,
        "close": 37.8,
        "ma5": 38.0,
        "ma10": 37.76
      },
      {
        "open": 37.2,
        "high": 37.5,
        "low": 36.65,
        "close": 36.9,
        "ma5": 37.78,
        "ma10": 37.82
      },
      {
        "open": 37.2,
        "high": 37.25,
        "low": 36.3,
        "close": 36.75,
        "ma5": 37.51,
        "ma10": 37.85
      },
      {
        "open": 37.0,
        "high": 37.3,
        "low": 36.35,
        "close": 37.3,
        "ma5": 37.38,
        "ma10": 37.81
      },
      {
        "open": 37.45,
        "high": 37.75,
        "low": 36.95,
        "close": 37.35,
        "ma5": 37.22,
        "ma10": 37.67
      }
    ],
    "symbol": "2884.TW",
    "maxVol10d": 41631,
    "hasVolumeBurst": false
  },
  {
    "code": "2892",
    "name": "第一金",
    "price": 33.4,
    "open": 33.15,
    "high": 33.25,
    "low": 32.75,
    "prevClose": 33.15,
    "volume": 8924,
    "ma5": 33.37,
    "ma10": 34.51,
    "ma20": 34.65,
    "vMa5": 43053,
    "vMa10": 44929,
    "limitUpPrice": 38.45,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      35.95,
      35.3,
      35.9,
      35.5,
      35.55,
      34.95,
      32.7,
      33.15,
      33.15,
      33.4
    ],
    "ma60": 32.39,
    "high20d": 36.9,
    "high5d": 35.7,
    "high10d": 36.45,
    "k3d": [
      {
        "open": 33.55,
        "high": 33.7,
        "low": 32.6,
        "close": 32.7,
        "ma5": 34.92,
        "ma10": 35.29
      },
      {
        "open": 32.7,
        "high": 33.15,
        "low": 32.45,
        "close": 33.15,
        "ma5": 34.37,
        "ma10": 35.13
      },
      {
        "open": 33.35,
        "high": 33.35,
        "low": 32.65,
        "close": 33.15,
        "ma5": 33.9,
        "ma10": 34.89
      }
    ],
    "k5d": [
      {
        "open": 35.7,
        "high": 35.7,
        "low": 34.9,
        "close": 34.95,
        "ma5": 35.44,
        "ma10": 35.5
      },
      {
        "open": 33.55,
        "high": 33.7,
        "low": 32.6,
        "close": 32.7,
        "ma5": 34.92,
        "ma10": 35.29
      },
      {
        "open": 32.7,
        "high": 33.15,
        "low": 32.45,
        "close": 33.15,
        "ma5": 34.37,
        "ma10": 35.13
      },
      {
        "open": 33.35,
        "high": 33.35,
        "low": 32.65,
        "close": 33.15,
        "ma5": 33.9,
        "ma10": 34.89
      },
      {
        "open": 33.15,
        "high": 33.25,
        "low": 32.75,
        "close": 32.9,
        "ma5": 33.37,
        "ma10": 34.51
      }
    ],
    "symbol": "2892.TW",
    "maxVol10d": 84500,
    "hasVolumeBurst": true
  },
  {
    "code": "2885",
    "name": "元大金",
    "price": 70.0,
    "open": 70.5,
    "high": 70.5,
    "low": 69.1,
    "prevClose": 69.7,
    "volume": 10474,
    "ma5": 68.9,
    "ma10": 68.57,
    "ma20": 66.05,
    "vMa5": 14679,
    "vMa10": 19696,
    "limitUpPrice": 75.02,
    "categories": [
      "0050",
      "SitcaBuy",
      "MajorBuy"
    ],
    "sparkline": [
      68.0,
      69.0,
      69.4,
      67.1,
      67.7,
      68.2,
      68.4,
      68.6,
      69.7,
      70.0
    ],
    "ma60": 65.09,
    "high20d": 70.8,
    "high5d": 70.5,
    "high10d": 70.8,
    "k3d": [
      {
        "open": 67.6,
        "high": 69.0,
        "low": 67.5,
        "close": 68.4,
        "ma5": 68.16,
        "ma10": 67.12
      },
      {
        "open": 68.9,
        "high": 69.4,
        "low": 67.9,
        "close": 68.6,
        "ma5": 68.0,
        "ma10": 67.76
      },
      {
        "open": 69.2,
        "high": 70.0,
        "low": 68.4,
        "close": 69.7,
        "ma5": 68.52,
        "ma10": 68.42
      }
    ],
    "k5d": [
      {
        "open": 68.6,
        "high": 69.0,
        "low": 67.8,
        "close": 68.2,
        "ma5": 68.28,
        "ma10": 66.63
      },
      {
        "open": 67.6,
        "high": 69.0,
        "low": 67.5,
        "close": 68.4,
        "ma5": 68.16,
        "ma10": 67.12
      },
      {
        "open": 68.9,
        "high": 69.4,
        "low": 67.9,
        "close": 68.6,
        "ma5": 68.0,
        "ma10": 67.76
      },
      {
        "open": 69.2,
        "high": 70.0,
        "low": 68.4,
        "close": 69.7,
        "ma5": 68.52,
        "ma10": 68.42
      },
      {
        "open": 70.5,
        "high": 70.5,
        "low": 69.1,
        "close": 69.6,
        "ma5": 68.9,
        "ma10": 68.57
      }
    ],
    "symbol": "2885.TW",
    "maxVol10d": 36318,
    "hasVolumeBurst": false
  },
  {
    "code": "5880",
    "name": "合庫金",
    "price": 24.2,
    "open": 24.1,
    "high": 24.25,
    "low": 24.0,
    "prevClose": 24.2,
    "volume": 6561,
    "ma5": 24.36,
    "ma10": 25.09,
    "ma20": 25.26,
    "vMa5": 25441,
    "vMa10": 25341,
    "limitUpPrice": 28.01,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      26.24,
      25.9,
      25.95,
      25.46,
      25.56,
      25.46,
      24.0,
      24.1,
      24.2,
      24.2
    ],
    "ma60": 24.17,
    "high20d": 26.98,
    "high5d": 25.8,
    "high10d": 26.73,
    "k3d": [
      {
        "open": 24.75,
        "high": 24.8,
        "low": 23.95,
        "close": 24.0,
        "ma5": 25.29,
        "ma10": 25.73
      },
      {
        "open": 24.0,
        "high": 24.1,
        "low": 23.85,
        "close": 24.1,
        "ma5": 24.92,
        "ma10": 25.6
      },
      {
        "open": 24.15,
        "high": 24.25,
        "low": 23.9,
        "close": 24.2,
        "ma5": 24.66,
        "ma10": 25.38
      }
    ],
    "k5d": [
      {
        "open": 25.8,
        "high": 25.8,
        "low": 25.37,
        "close": 25.46,
        "ma5": 25.67,
        "ma10": 25.86
      },
      {
        "open": 24.75,
        "high": 24.8,
        "low": 23.95,
        "close": 24.0,
        "ma5": 25.29,
        "ma10": 25.73
      },
      {
        "open": 24.0,
        "high": 24.1,
        "low": 23.85,
        "close": 24.1,
        "ma5": 24.92,
        "ma10": 25.6
      },
      {
        "open": 24.15,
        "high": 24.25,
        "low": 23.9,
        "close": 24.2,
        "ma5": 24.66,
        "ma10": 25.38
      },
      {
        "open": 24.1,
        "high": 24.25,
        "low": 24.0,
        "close": 24.05,
        "ma5": 24.36,
        "ma10": 25.09
      }
    ],
    "symbol": "5880.TW",
    "maxVol10d": 50665,
    "hasVolumeBurst": true
  },
  {
    "code": "2890",
    "name": "永豐金",
    "price": 40.6,
    "open": 40.1,
    "high": 40.3,
    "low": 39.6,
    "prevClose": 39.95,
    "volume": 6978,
    "ma5": 39.54,
    "ma10": 39.45,
    "ma20": 39.28,
    "vMa5": 15600,
    "vMa10": 18152,
    "limitUpPrice": 42.79,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      40.05,
      39.6,
      39.55,
      38.7,
      38.95,
      38.9,
      39.05,
      39.85,
      39.95,
      40.6
    ],
    "ma60": 36.81,
    "high20d": 41.05,
    "high5d": 40.3,
    "high10d": 40.6,
    "k3d": [
      {
        "open": 39.0,
        "high": 39.25,
        "low": 38.4,
        "close": 39.05,
        "ma5": 39.03,
        "ma10": 39.28
      },
      {
        "open": 39.15,
        "high": 39.9,
        "low": 39.0,
        "close": 39.85,
        "ma5": 39.09,
        "ma10": 39.41
      },
      {
        "open": 40.2,
        "high": 40.2,
        "low": 39.3,
        "close": 39.95,
        "ma5": 39.34,
        "ma10": 39.52
      }
    ],
    "k5d": [
      {
        "open": 38.9,
        "high": 39.0,
        "low": 38.45,
        "close": 38.9,
        "ma5": 39.14,
        "ma10": 39.24
      },
      {
        "open": 39.0,
        "high": 39.25,
        "low": 38.4,
        "close": 39.05,
        "ma5": 39.03,
        "ma10": 39.28
      },
      {
        "open": 39.15,
        "high": 39.9,
        "low": 39.0,
        "close": 39.85,
        "ma5": 39.09,
        "ma10": 39.41
      },
      {
        "open": 40.2,
        "high": 40.2,
        "low": 39.3,
        "close": 39.95,
        "ma5": 39.34,
        "ma10": 39.52
      },
      {
        "open": 40.1,
        "high": 40.3,
        "low": 39.6,
        "close": 39.95,
        "ma5": 39.54,
        "ma10": 39.45
      }
    ],
    "symbol": "2890.TW",
    "maxVol10d": 31580,
    "hasVolumeBurst": false
  },
  {
    "code": "2880",
    "name": "華南金",
    "price": 38.9,
    "open": 39.0,
    "high": 39.0,
    "low": 38.05,
    "prevClose": 39.1,
    "volume": 23258,
    "ma5": 41.34,
    "ma10": 42.31,
    "ma20": 41.69,
    "vMa5": 35164,
    "vMa10": 30545,
    "limitUpPrice": 48.4,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "sparkline": [
      42.62,
      42.82,
      43.37,
      43.61,
      43.96,
      43.56,
      43.22,
      42.77,
      39.1,
      38.9
    ],
    "ma60": 37.82,
    "high20d": 44.7,
    "high5d": 44.41,
    "high10d": 44.41,
    "k3d": [
      {
        "open": 43.17,
        "high": 43.76,
        "low": 42.97,
        "close": 43.22,
        "ma5": 43.54,
        "ma10": 43.0
      },
      {
        "open": 43.47,
        "high": 43.51,
        "low": 42.43,
        "close": 42.77,
        "ma5": 43.43,
        "ma10": 43.14
      },
      {
        "open": 41.5,
        "high": 41.55,
        "low": 38.3,
        "close": 39.1,
        "ma5": 42.52,
        "ma10": 42.83
      }
    ],
    "k5d": [
      {
        "open": 44.26,
        "high": 44.41,
        "low": 42.92,
        "close": 43.56,
        "ma5": 43.47,
        "ma10": 42.78
      },
      {
        "open": 43.17,
        "high": 43.76,
        "low": 42.97,
        "close": 43.22,
        "ma5": 43.54,
        "ma10": 43.0
      },
      {
        "open": 43.47,
        "high": 43.51,
        "low": 42.43,
        "close": 42.77,
        "ma5": 43.43,
        "ma10": 43.14
      },
      {
        "open": 41.5,
        "high": 41.55,
        "low": 38.3,
        "close": 39.1,
        "ma5": 42.52,
        "ma10": 42.83
      },
      {
        "open": 39.0,
        "high": 39.0,
        "low": 38.05,
        "close": 38.05,
        "ma5": 41.34,
        "ma10": 42.31
      }
    ],
    "symbol": "2880.TW",
    "maxVol10d": 71533,
    "hasVolumeBurst": true
  },
  {
    "code": "2883",
    "name": "凱基金",
    "price": 31.7,
    "open": 31.25,
    "high": 31.45,
    "low": 30.95,
    "prevClose": 31.5,
    "volume": 18342,
    "ma5": 31.21,
    "ma10": 31.0,
    "ma20": 30.53,
    "vMa5": 26650,
    "vMa10": 36625,
    "limitUpPrice": 34.16,
    "categories": [
      "0050",
      "SitcaBuy",
      "MajorBuy"
    ],
    "sparkline": [
      30.4,
      30.55,
      31.6,
      30.6,
      30.85,
      31.05,
      31.05,
      31.2,
      31.5,
      31.7
    ],
    "ma60": 28.69,
    "high20d": 31.75,
    "high5d": 31.5,
    "high10d": 31.75,
    "k3d": [
      {
        "open": 30.8,
        "high": 31.2,
        "low": 30.65,
        "close": 31.05,
        "ma5": 31.03,
        "ma10": 30.5
      },
      {
        "open": 31.0,
        "high": 31.4,
        "low": 30.55,
        "close": 31.2,
        "ma5": 30.95,
        "ma10": 30.71
      },
      {
        "open": 31.4,
        "high": 31.5,
        "low": 30.85,
        "close": 31.5,
        "ma5": 31.13,
        "ma10": 30.96
      }
    ],
    "k5d": [
      {
        "open": 31.0,
        "high": 31.05,
        "low": 30.35,
        "close": 31.05,
        "ma5": 30.93,
        "ma10": 30.36
      },
      {
        "open": 30.8,
        "high": 31.2,
        "low": 30.65,
        "close": 31.05,
        "ma5": 31.03,
        "ma10": 30.5
      },
      {
        "open": 31.0,
        "high": 31.4,
        "low": 30.55,
        "close": 31.2,
        "ma5": 30.95,
        "ma10": 30.71
      },
      {
        "open": 31.4,
        "high": 31.5,
        "low": 30.85,
        "close": 31.5,
        "ma5": 31.13,
        "ma10": 30.96
      },
      {
        "open": 31.25,
        "high": 31.45,
        "low": 30.95,
        "close": 31.25,
        "ma5": 31.21,
        "ma10": 31.0
      }
    ],
    "symbol": "2883.TW",
    "maxVol10d": 65139,
    "hasVolumeBurst": false
  },
  {
    "code": "2887",
    "name": "台新新光金",
    "price": 37.55,
    "open": 36.8,
    "high": 37.7,
    "low": 36.55,
    "prevClose": 36.2,
    "volume": 44330,
    "ma5": 36.06,
    "ma10": 35.65,
    "ma20": 34.99,
    "vMa5": 43633,
    "vMa10": 43682,
    "limitUpPrice": 39.49,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "sparkline": [
      35.3,
      35.55,
      35.7,
      34.5,
      35.15,
      35.9,
      35.55,
      35.65,
      36.2,
      37.55
    ],
    "ma60": 32.04,
    "high20d": 37.7,
    "high5d": 37.7,
    "high10d": 37.7,
    "k3d": [
      {
        "open": 35.6,
        "high": 36.0,
        "low": 35.2,
        "close": 35.55,
        "ma5": 35.36,
        "ma10": 34.94
      },
      {
        "open": 35.65,
        "high": 36.0,
        "low": 35.1,
        "close": 35.65,
        "ma5": 35.35,
        "ma10": 35.24
      },
      {
        "open": 35.7,
        "high": 36.3,
        "low": 35.25,
        "close": 36.2,
        "ma5": 35.69,
        "ma10": 35.55
      }
    ],
    "k5d": [
      {
        "open": 35.4,
        "high": 35.9,
        "low": 34.65,
        "close": 35.9,
        "ma5": 35.36,
        "ma10": 34.78
      },
      {
        "open": 35.6,
        "high": 36.0,
        "low": 35.2,
        "close": 35.55,
        "ma5": 35.36,
        "ma10": 34.94
      },
      {
        "open": 35.65,
        "high": 36.0,
        "low": 35.1,
        "close": 35.65,
        "ma5": 35.35,
        "ma10": 35.24
      },
      {
        "open": 35.7,
        "high": 36.3,
        "low": 35.25,
        "close": 36.2,
        "ma5": 35.69,
        "ma10": 35.55
      },
      {
        "open": 36.8,
        "high": 37.7,
        "low": 36.55,
        "close": 37.0,
        "ma5": 36.06,
        "ma10": 35.65
      }
    ],
    "symbol": "2887.TW",
    "maxVol10d": 57479,
    "hasVolumeBurst": false
  },
  {
    "code": "2002",
    "name": "中鋼",
    "price": 19.05,
    "open": 19.25,
    "high": 19.25,
    "low": 18.95,
    "prevClose": 19.2,
    "volume": 28824,
    "ma5": 19.47,
    "ma10": 19.2,
    "ma20": 19.08,
    "vMa5": 64681,
    "vMa10": 46336,
    "limitUpPrice": 21.61,
    "categories": [
      "Top100"
    ],
    "sparkline": [
      18.85,
      18.85,
      18.9,
      19.0,
      19.05,
      19.65,
      19.75,
      19.75,
      19.2,
      19.05
    ],
    "ma60": 18.96,
    "high20d": 19.9,
    "high5d": 19.9,
    "high10d": 19.9,
    "k3d": [
      {
        "open": 19.8,
        "high": 19.9,
        "low": 19.55,
        "close": 19.75,
        "ma5": 19.27,
        "ma10": 19.09
      },
      {
        "open": 19.85,
        "high": 19.85,
        "low": 19.65,
        "close": 19.75,
        "ma5": 19.44,
        "ma10": 19.17
      },
      {
        "open": 19.8,
        "high": 19.8,
        "low": 19.15,
        "close": 19.2,
        "ma5": 19.48,
        "ma10": 19.2
      }
    ],
    "k5d": [
      {
        "open": 19.25,
        "high": 19.65,
        "low": 19.15,
        "close": 19.65,
        "ma5": 19.09,
        "ma10": 19.02
      },
      {
        "open": 19.8,
        "high": 19.9,
        "low": 19.55,
        "close": 19.75,
        "ma5": 19.27,
        "ma10": 19.09
      },
      {
        "open": 19.85,
        "high": 19.85,
        "low": 19.65,
        "close": 19.75,
        "ma5": 19.44,
        "ma10": 19.17
      },
      {
        "open": 19.8,
        "high": 19.8,
        "low": 19.15,
        "close": 19.2,
        "ma5": 19.48,
        "ma10": 19.2
      },
      {
        "open": 19.25,
        "high": 19.25,
        "low": 18.95,
        "close": 19.0,
        "ma5": 19.47,
        "ma10": 19.2
      }
    ],
    "symbol": "2002.TW",
    "maxVol10d": 115382,
    "hasVolumeBurst": true
  },
  {
    "code": "1101",
    "name": "台泥",
    "price": 24.15,
    "open": 24.0,
    "high": 24.3,
    "low": 24.0,
    "prevClose": 24.05,
    "volume": 12597,
    "ma5": 24.38,
    "ma10": 24.2,
    "ma20": 24.17,
    "vMa5": 19621,
    "vMa10": 23093,
    "limitUpPrice": 27.01,
    "categories": [
      "Top100"
    ],
    "sparkline": [
      23.8,
      23.55,
      24.05,
      24.35,
      24.35,
      24.55,
      24.65,
      24.45,
      24.05,
      24.15
    ],
    "ma60": 24.02,
    "high20d": 25.05,
    "high5d": 24.8,
    "high10d": 24.8,
    "k3d": [
      {
        "open": 24.55,
        "high": 24.8,
        "low": 24.3,
        "close": 24.65,
        "ma5": 24.39,
        "ma10": 24.2
      },
      {
        "open": 24.65,
        "high": 24.75,
        "low": 24.45,
        "close": 24.45,
        "ma5": 24.47,
        "ma10": 24.21
      },
      {
        "open": 24.55,
        "high": 24.7,
        "low": 24.0,
        "close": 24.05,
        "ma5": 24.41,
        "ma10": 24.21
      }
    ],
    "k5d": [
      {
        "open": 24.5,
        "high": 24.65,
        "low": 24.25,
        "close": 24.55,
        "ma5": 24.17,
        "ma10": 24.21
      },
      {
        "open": 24.55,
        "high": 24.8,
        "low": 24.3,
        "close": 24.65,
        "ma5": 24.39,
        "ma10": 24.2
      },
      {
        "open": 24.65,
        "high": 24.75,
        "low": 24.45,
        "close": 24.45,
        "ma5": 24.47,
        "ma10": 24.21
      },
      {
        "open": 24.55,
        "high": 24.7,
        "low": 24.0,
        "close": 24.05,
        "ma5": 24.41,
        "ma10": 24.21
      },
      {
        "open": 24.0,
        "high": 24.3,
        "low": 24.0,
        "close": 24.2,
        "ma5": 24.38,
        "ma10": 24.2
      }
    ],
    "symbol": "1101.TW",
    "maxVol10d": 40842,
    "hasVolumeBurst": true
  },
  {
    "code": "1301",
    "name": "台塑",
    "price": 59.9,
    "open": 58.0,
    "high": 60.3,
    "low": 57.6,
    "prevClose": 57.5,
    "volume": 37805,
    "ma5": 56.98,
    "ma10": 56.09,
    "ma20": 58.06,
    "vMa5": 23316,
    "vMa10": 22373,
    "limitUpPrice": 61.16,
    "categories": [],
    "sparkline": [
      53.8,
      55.3,
      56.0,
      55.1,
      55.8,
      55.6,
      55.6,
      56.2,
      57.5,
      59.9
    ],
    "ma60": 54.31,
    "high20d": 69.8,
    "high5d": 60.3,
    "high10d": 60.3,
    "k3d": [
      {
        "open": 55.6,
        "high": 55.9,
        "low": 54.3,
        "close": 55.6,
        "ma5": 55.62,
        "ma10": 55.24
      },
      {
        "open": 55.7,
        "high": 56.5,
        "low": 55.6,
        "close": 56.2,
        "ma5": 55.66,
        "ma10": 55.24
      },
      {
        "open": 57.9,
        "high": 59.8,
        "low": 57.5,
        "close": 57.5,
        "ma5": 56.14,
        "ma10": 55.59
      }
    ],
    "k5d": [
      {
        "open": 56.2,
        "high": 56.6,
        "low": 55.0,
        "close": 55.6,
        "ma5": 55.56,
        "ma10": 55.43
      },
      {
        "open": 55.6,
        "high": 55.9,
        "low": 54.3,
        "close": 55.6,
        "ma5": 55.62,
        "ma10": 55.24
      },
      {
        "open": 55.7,
        "high": 56.5,
        "low": 55.6,
        "close": 56.2,
        "ma5": 55.66,
        "ma10": 55.24
      },
      {
        "open": 57.9,
        "high": 59.8,
        "low": 57.5,
        "close": 57.5,
        "ma5": 56.14,
        "ma10": 55.59
      },
      {
        "open": 58.0,
        "high": 60.3,
        "low": 57.6,
        "close": 60.0,
        "ma5": 56.98,
        "ma10": 56.09
      }
    ],
    "symbol": "1301.TW",
    "maxVol10d": 37805,
    "hasVolumeBurst": true
  },
  {
    "code": "5876",
    "name": "上海商銀",
    "categories": [
      "SitcaBuy"
    ],
    "price": 42.2,
    "prevClose": 42.25,
    "open": 42.4,
    "high": 42.4,
    "low": 41.65,
    "volume": 3703,
    "ma5": 42.7,
    "ma10": 43.34,
    "ma20": 44.16,
    "ma60": 42.4,
    "vMa5": 5524,
    "vMa10": 6284,
    "high20d": 46.63,
    "sparkline": [
      44.65,
      44.15,
      44.15,
      43.45,
      43.45,
      43.35,
      43.1,
      42.85,
      42.25,
      42.2
    ],
    "high5d": 43.75,
    "high10d": 45.35,
    "k3d": [
      {
        "open": 43.15,
        "high": 43.55,
        "low": 42.7,
        "close": 43.1,
        "ma5": 43.5,
        "ma10": 44.09
      },
      {
        "open": 43.1,
        "high": 43.1,
        "low": 42.6,
        "close": 42.85,
        "ma5": 43.24,
        "ma10": 43.94
      },
      {
        "open": 43.1,
        "high": 43.1,
        "low": 42.05,
        "close": 42.25,
        "ma5": 43.0,
        "ma10": 43.69
      }
    ],
    "k5d": [
      {
        "open": 43.75,
        "high": 43.75,
        "low": 42.9,
        "close": 43.35,
        "ma5": 43.71,
        "ma10": 44.17
      },
      {
        "open": 43.15,
        "high": 43.55,
        "low": 42.7,
        "close": 43.1,
        "ma5": 43.5,
        "ma10": 44.09
      },
      {
        "open": 43.1,
        "high": 43.1,
        "low": 42.6,
        "close": 42.85,
        "ma5": 43.24,
        "ma10": 43.94
      },
      {
        "open": 43.1,
        "high": 43.1,
        "low": 42.05,
        "close": 42.25,
        "ma5": 43.0,
        "ma10": 43.69
      },
      {
        "open": 42.4,
        "high": 42.4,
        "low": 41.65,
        "close": 41.95,
        "ma5": 42.7,
        "ma10": 43.34
      }
    ],
    "symbol": "5876.TW",
    "maxVol10d": 8583,
    "hasVolumeBurst": false
  },
  {
    "code": "5871",
    "name": "中租-KY",
    "categories": [
      "SitcaBuy"
    ],
    "price": 111.5,
    "prevClose": 114.0,
    "open": 114.5,
    "high": 114.5,
    "low": 111.0,
    "volume": 4753,
    "ma5": 112.7,
    "ma10": 111.8,
    "ma20": 114.27,
    "ma60": 113.43,
    "vMa5": 6124,
    "vMa10": 5654,
    "high20d": 122.06,
    "sparkline": [
      113.0,
      111.5,
      112.0,
      109.0,
      109.0,
      109.0,
      115.5,
      113.5,
      114.0,
      111.5
    ],
    "high5d": 116.0,
    "high10d": 116.0,
    "k3d": [
      {
        "open": 110.0,
        "high": 116.0,
        "low": 110.0,
        "close": 115.5,
        "ma5": 110.9,
        "ma10": 111.35
      },
      {
        "open": 115.0,
        "high": 115.5,
        "low": 113.0,
        "close": 113.5,
        "ma5": 111.2,
        "ma10": 111.45
      },
      {
        "open": 114.0,
        "high": 114.5,
        "low": 112.5,
        "close": 114.0,
        "ma5": 112.2,
        "ma10": 111.8
      }
    ],
    "k5d": [
      {
        "open": 110.0,
        "high": 110.0,
        "low": 108.0,
        "close": 109.0,
        "ma5": 110.1,
        "ma10": 111.56
      },
      {
        "open": 110.0,
        "high": 116.0,
        "low": 110.0,
        "close": 115.5,
        "ma5": 110.9,
        "ma10": 111.35
      },
      {
        "open": 115.0,
        "high": 115.5,
        "low": 113.0,
        "close": 113.5,
        "ma5": 111.2,
        "ma10": 111.45
      },
      {
        "open": 114.0,
        "high": 114.5,
        "low": 112.5,
        "close": 114.0,
        "ma5": 112.2,
        "ma10": 111.8
      },
      {
        "open": 114.5,
        "high": 114.5,
        "low": 111.0,
        "close": 111.5,
        "ma5": 112.7,
        "ma10": 111.8
      }
    ],
    "symbol": "5871.TW",
    "maxVol10d": 12125,
    "hasVolumeBurst": true
  },
  {
    "code": "3008",
    "name": "大立光",
    "categories": [
      "0050"
    ],
    "price": 4700.0,
    "prevClose": 4660.0,
    "open": 4700.0,
    "high": 4920.0,
    "low": 4700.0,
    "volume": 1302,
    "ma5": 4548.0,
    "ma10": 4464.0,
    "ma20": 4207.5,
    "ma60": 4191.08,
    "vMa5": 1692,
    "vMa10": 1985,
    "high20d": 4920.0,
    "sparkline": [
      3960.0,
      4355.0,
      4575.0,
      4625.0,
      4385.0,
      4400.0,
      4355.0,
      4585.0,
      4660.0,
      4700.0
    ],
    "high5d": 4920.0,
    "high10d": 4920.0,
    "k3d": [
      {
        "open": 4355.0,
        "high": 4420.0,
        "low": 4230.0,
        "close": 4355.0,
        "ma5": 4468.0,
        "ma10": 4225.5
      },
      {
        "open": 4390.0,
        "high": 4685.0,
        "low": 4355.0,
        "close": 4585.0,
        "ma5": 4470.0,
        "ma10": 4299.0
      },
      {
        "open": 4655.0,
        "high": 4825.0,
        "low": 4545.0,
        "close": 4660.0,
        "ma5": 4477.0,
        "ma10": 4393.5
      }
    ],
    "k5d": [
      {
        "open": 4480.0,
        "high": 4565.0,
        "low": 4345.0,
        "close": 4400.0,
        "ma5": 4468.0,
        "ma10": 4180.0
      },
      {
        "open": 4355.0,
        "high": 4420.0,
        "low": 4230.0,
        "close": 4355.0,
        "ma5": 4468.0,
        "ma10": 4225.5
      },
      {
        "open": 4390.0,
        "high": 4685.0,
        "low": 4355.0,
        "close": 4585.0,
        "ma5": 4470.0,
        "ma10": 4299.0
      },
      {
        "open": 4655.0,
        "high": 4825.0,
        "low": 4545.0,
        "close": 4660.0,
        "ma5": 4477.0,
        "ma10": 4393.5
      },
      {
        "open": 4700.0,
        "high": 4920.0,
        "low": 4700.0,
        "close": 4740.0,
        "ma5": 4548.0,
        "ma10": 4464.0
      }
    ],
    "symbol": "3008.TW",
    "maxVol10d": 4411,
    "hasVolumeBurst": true
  },
  {
    "code": "2357",
    "name": "華碩",
    "categories": [
      "0050"
    ],
    "price": 1005.0,
    "prevClose": 937.0,
    "open": 968.0,
    "high": 1025.0,
    "low": 966.0,
    "volume": 13277,
    "ma5": 890.2,
    "ma10": 852.9,
    "ma20": 802.65,
    "ma60": 768.97,
    "vMa5": 5003,
    "vMa10": 4612,
    "high20d": 1025.0,
    "sparkline": [
      799.0,
      806.0,
      838.0,
      818.0,
      817.0,
      818.0,
      839.0,
      852.0,
      937.0,
      1005.0
    ],
    "high5d": 1025.0,
    "high10d": 1025.0,
    "k3d": [
      {
        "open": 818.0,
        "high": 839.0,
        "low": 812.0,
        "close": 839.0,
        "ma5": 826.0,
        "ma10": 804.3
      },
      {
        "open": 831.0,
        "high": 860.0,
        "low": 831.0,
        "close": 852.0,
        "ma5": 828.8,
        "ma10": 813.4
      },
      {
        "open": 937.0,
        "high": 937.0,
        "low": 937.0,
        "close": 937.0,
        "ma5": 852.6,
        "ma10": 833.4
      }
    ],
    "k5d": [
      {
        "open": 820.0,
        "high": 822.0,
        "low": 808.0,
        "close": 818.0,
        "ma5": 819.4,
        "ma10": 793.9
      },
      {
        "open": 818.0,
        "high": 839.0,
        "low": 812.0,
        "close": 839.0,
        "ma5": 826.0,
        "ma10": 804.3
      },
      {
        "open": 831.0,
        "high": 860.0,
        "low": 831.0,
        "close": 852.0,
        "ma5": 828.8,
        "ma10": 813.4
      },
      {
        "open": 937.0,
        "high": 937.0,
        "low": 937.0,
        "close": 937.0,
        "ma5": 852.6,
        "ma10": 833.4
      },
      {
        "open": 968.0,
        "high": 1025.0,
        "low": 966.0,
        "close": 1005.0,
        "ma5": 890.2,
        "ma10": 852.9
      }
    ],
    "symbol": "2357.TW",
    "maxVol10d": 13277,
    "hasVolumeBurst": true
  },
  {
    "code": "2395",
    "name": "研華",
    "categories": [
      "0050"
    ],
    "price": 681.0,
    "prevClose": 698.0,
    "open": 690.0,
    "high": 699.0,
    "low": 679.0,
    "volume": 2002,
    "ma5": 679.4,
    "ma10": 643.8,
    "ma20": 604.55,
    "ma60": 535.16,
    "vMa5": 4645,
    "vMa10": 5219,
    "high20d": 709.0,
    "sparkline": [
      576.0,
      576.0,
      633.0,
      622.0,
      634.0,
      667.0,
      661.0,
      686.0,
      698.0,
      681.0
    ],
    "high5d": 709.0,
    "high10d": 709.0,
    "k3d": [
      {
        "open": 660.0,
        "high": 672.0,
        "low": 644.0,
        "close": 661.0,
        "ma5": 643.4,
        "ma10": 602.9
      },
      {
        "open": 672.0,
        "high": 699.0,
        "low": 667.0,
        "close": 686.0,
        "ma5": 654.0,
        "ma10": 616.5
      },
      {
        "open": 695.0,
        "high": 709.0,
        "low": 690.0,
        "close": 698.0,
        "ma5": 669.2,
        "ma10": 631.6
      }
    ],
    "k5d": [
      {
        "open": 648.0,
        "high": 695.0,
        "low": 648.0,
        "close": 667.0,
        "ma5": 626.4,
        "ma10": 592.4
      },
      {
        "open": 660.0,
        "high": 672.0,
        "low": 644.0,
        "close": 661.0,
        "ma5": 643.4,
        "ma10": 602.9
      },
      {
        "open": 672.0,
        "high": 699.0,
        "low": 667.0,
        "close": 686.0,
        "ma5": 654.0,
        "ma10": 616.5
      },
      {
        "open": 695.0,
        "high": 709.0,
        "low": 690.0,
        "close": 698.0,
        "ma5": 669.2,
        "ma10": 631.6
      },
      {
        "open": 690.0,
        "high": 699.0,
        "low": 679.0,
        "close": 685.0,
        "ma5": 679.4,
        "ma10": 643.8
      }
    ],
    "symbol": "2395.TW",
    "maxVol10d": 10650,
    "hasVolumeBurst": true
  },
  {
    "code": "2301",
    "name": "光寶科",
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 263.0,
    "prevClose": 269.5,
    "open": 274.5,
    "high": 278.0,
    "low": 263.0,
    "volume": 14763,
    "ma5": 266.6,
    "ma10": 256.3,
    "ma20": 230.2,
    "ma60": 223.68,
    "vMa5": 32350,
    "vMa10": 41073,
    "high20d": 281.0,
    "sparkline": [
      229.5,
      252.0,
      249.0,
      252.5,
      247.0,
      271.5,
      268.5,
      259.5,
      269.5,
      263.0
    ],
    "high5d": 281.0,
    "high10d": 281.0,
    "k3d": [
      {
        "open": 274.0,
        "high": 277.5,
        "low": 258.5,
        "close": 268.5,
        "ma5": 257.7,
        "ma10": 235.4
      },
      {
        "open": 267.0,
        "high": 267.0,
        "low": 254.0,
        "close": 259.5,
        "ma5": 259.8,
        "ma10": 242.85
      },
      {
        "open": 268.0,
        "high": 281.0,
        "low": 266.5,
        "close": 269.5,
        "ma5": 263.2,
        "ma10": 250.8
      }
    ],
    "k5d": [
      {
        "open": 256.5,
        "high": 271.5,
        "low": 255.0,
        "close": 271.5,
        "ma5": 254.4,
        "ma10": 227.95
      },
      {
        "open": 274.0,
        "high": 277.5,
        "low": 258.5,
        "close": 268.5,
        "ma5": 257.7,
        "ma10": 235.4
      },
      {
        "open": 267.0,
        "high": 267.0,
        "low": 254.0,
        "close": 259.5,
        "ma5": 259.8,
        "ma10": 242.85
      },
      {
        "open": 268.0,
        "high": 281.0,
        "low": 266.5,
        "close": 269.5,
        "ma5": 263.2,
        "ma10": 250.8
      },
      {
        "open": 274.5,
        "high": 278.0,
        "low": 263.0,
        "close": 264.0,
        "ma5": 266.6,
        "ma10": 256.3
      }
    ],
    "symbol": "2301.TW",
    "maxVol10d": 89058,
    "hasVolumeBurst": true
  },
  {
    "code": "6669",
    "name": "緯穎",
    "categories": [
      "0050"
    ],
    "price": 6460.0,
    "prevClose": 6070.0,
    "open": 6145.0,
    "high": 6650.0,
    "low": 6140.0,
    "volume": 2157,
    "ma5": 6106.0,
    "ma10": 6120.0,
    "ma20": 5703.5,
    "ma60": 5278.42,
    "vMa5": 1517,
    "vMa10": 1799,
    "high20d": 6650.0,
    "sparkline": [
      5925.0,
      6205.0,
      6175.0,
      6265.0,
      6100.0,
      6010.0,
      5930.0,
      6025.0,
      6070.0,
      6460.0
    ],
    "high5d": 6650.0,
    "high10d": 6650.0,
    "k3d": [
      {
        "open": 6040.0,
        "high": 6050.0,
        "low": 5855.0,
        "close": 5930.0,
        "ma5": 6096.0,
        "ma10": 5803.5
      },
      {
        "open": 5905.0,
        "high": 6140.0,
        "low": 5900.0,
        "close": 6025.0,
        "ma5": 6066.0,
        "ma10": 5892.5
      },
      {
        "open": 6095.0,
        "high": 6195.0,
        "low": 6020.0,
        "close": 6070.0,
        "ma5": 6027.0,
        "ma10": 6009.5
      }
    ],
    "k5d": [
      {
        "open": 6215.0,
        "high": 6225.0,
        "low": 5990.0,
        "close": 6010.0,
        "ma5": 6151.0,
        "ma10": 5742.0
      },
      {
        "open": 6040.0,
        "high": 6050.0,
        "low": 5855.0,
        "close": 5930.0,
        "ma5": 6096.0,
        "ma10": 5803.5
      },
      {
        "open": 5905.0,
        "high": 6140.0,
        "low": 5900.0,
        "close": 6025.0,
        "ma5": 6066.0,
        "ma10": 5892.5
      },
      {
        "open": 6095.0,
        "high": 6195.0,
        "low": 6020.0,
        "close": 6070.0,
        "ma5": 6027.0,
        "ma10": 6009.5
      },
      {
        "open": 6145.0,
        "high": 6650.0,
        "low": 6140.0,
        "close": 6495.0,
        "ma5": 6106.0,
        "ma10": 6120.0
      }
    ],
    "symbol": "6669.TW",
    "maxVol10d": 2968,
    "hasVolumeBurst": false
  },
  {
    "code": "3661",
    "name": "世芯-KY",
    "categories": [
      "0050"
    ],
    "price": 4255.0,
    "prevClose": 4190.0,
    "open": 4225.0,
    "high": 4530.0,
    "low": 4185.0,
    "volume": 2849,
    "ma5": 4053.0,
    "ma10": 3789.0,
    "ma20": 3523.75,
    "ma60": 4025.58,
    "vMa5": 2960,
    "vMa10": 2386,
    "high20d": 4530.0,
    "sparkline": [
      3250.0,
      3390.0,
      3610.0,
      3660.0,
      3715.0,
      3800.0,
      3955.0,
      4055.0,
      4190.0,
      4255.0
    ],
    "high5d": 4530.0,
    "high10d": 4530.0,
    "k3d": [
      {
        "open": 4000.0,
        "high": 4150.0,
        "low": 3925.0,
        "close": 3955.0,
        "ma5": 3748.0,
        "ma10": 3403.0
      },
      {
        "open": 3960.0,
        "high": 4100.0,
        "low": 3950.0,
        "close": 4055.0,
        "ma5": 3837.0,
        "ma10": 3528.0
      },
      {
        "open": 4100.0,
        "high": 4225.0,
        "low": 4090.0,
        "close": 4190.0,
        "ma5": 3943.0,
        "ma10": 3668.5
      }
    ],
    "k5d": [
      {
        "open": 3850.0,
        "high": 3955.0,
        "low": 3665.0,
        "close": 3800.0,
        "ma5": 3635.0,
        "ma10": 3319.0
      },
      {
        "open": 4000.0,
        "high": 4150.0,
        "low": 3925.0,
        "close": 3955.0,
        "ma5": 3748.0,
        "ma10": 3403.0
      },
      {
        "open": 3960.0,
        "high": 4100.0,
        "low": 3950.0,
        "close": 4055.0,
        "ma5": 3837.0,
        "ma10": 3528.0
      },
      {
        "open": 4100.0,
        "high": 4225.0,
        "low": 4090.0,
        "close": 4190.0,
        "ma5": 3943.0,
        "ma10": 3668.5
      },
      {
        "open": 4225.0,
        "high": 4530.0,
        "low": 4185.0,
        "close": 4265.0,
        "ma5": 4053.0,
        "ma10": 3789.0
      }
    ],
    "symbol": "3661.TW",
    "maxVol10d": 4325,
    "hasVolumeBurst": true
  },
  {
    "code": "3443",
    "name": "創意",
    "categories": [
      "0050"
    ],
    "price": 5515.0,
    "prevClose": 5540.0,
    "open": 5640.0,
    "high": 5830.0,
    "low": 5565.0,
    "volume": 1756,
    "ma5": 5151.0,
    "ma10": 4750.0,
    "ma20": 4322.5,
    "ma60": 4513.33,
    "vMa5": 2425,
    "vMa10": 2189,
    "high20d": 5830.0,
    "sparkline": [
      4185.0,
      4145.0,
      4390.0,
      4480.0,
      4545.0,
      4530.0,
      4955.0,
      5130.0,
      5540.0,
      5515.0
    ],
    "high5d": 5830.0,
    "high10d": 5830.0,
    "k3d": [
      {
        "open": 4630.0,
        "high": 4980.0,
        "low": 4615.0,
        "close": 4955.0,
        "ma5": 4580.0,
        "ma10": 4179.0
      },
      {
        "open": 5025.0,
        "high": 5180.0,
        "low": 4945.0,
        "close": 5130.0,
        "ma5": 4728.0,
        "ma10": 4362.5
      },
      {
        "open": 5260.0,
        "high": 5580.0,
        "low": 5230.0,
        "close": 5540.0,
        "ma5": 4940.0,
        "ma10": 4570.5
      }
    ],
    "k5d": [
      {
        "open": 4640.0,
        "high": 4815.0,
        "low": 4510.0,
        "close": 4530.0,
        "ma5": 4418.0,
        "ma10": 4049.5
      },
      {
        "open": 4630.0,
        "high": 4980.0,
        "low": 4615.0,
        "close": 4955.0,
        "ma5": 4580.0,
        "ma10": 4179.0
      },
      {
        "open": 5025.0,
        "high": 5180.0,
        "low": 4945.0,
        "close": 5130.0,
        "ma5": 4728.0,
        "ma10": 4362.5
      },
      {
        "open": 5260.0,
        "high": 5580.0,
        "low": 5230.0,
        "close": 5540.0,
        "ma5": 4940.0,
        "ma10": 4570.5
      },
      {
        "open": 5640.0,
        "high": 5830.0,
        "low": 5565.0,
        "close": 5600.0,
        "ma5": 5151.0,
        "ma10": 4750.0
      }
    ],
    "symbol": "3443.TW",
    "maxVol10d": 3175,
    "hasVolumeBurst": false
  },
  {
    "code": "1216",
    "name": "統一",
    "categories": [
      "0050"
    ],
    "price": 75.8,
    "prevClose": 76.3,
    "open": 76.2,
    "high": 76.3,
    "low": 75.4,
    "volume": 2846,
    "ma5": 75.92,
    "ma10": 74.84,
    "ma20": 76.08,
    "ma60": 75.48,
    "vMa5": 9888,
    "vMa10": 15894,
    "high20d": 80.7,
    "sparkline": [
      73.0,
      73.9,
      73.2,
      73.0,
      75.7,
      75.5,
      75.9,
      76.3,
      76.3,
      75.8
    ],
    "high5d": 76.5,
    "high10d": 76.5,
    "k3d": [
      {
        "open": 75.1,
        "high": 75.9,
        "low": 74.9,
        "close": 75.9,
        "ma5": 74.66,
        "ma10": 74.78
      },
      {
        "open": 75.8,
        "high": 76.3,
        "low": 75.4,
        "close": 76.3,
        "ma5": 75.28,
        "ma10": 74.59
      },
      {
        "open": 76.5,
        "high": 76.5,
        "low": 75.1,
        "close": 76.3,
        "ma5": 75.94,
        "ma10": 74.66
      }
    ],
    "k5d": [
      {
        "open": 75.7,
        "high": 75.7,
        "low": 74.6,
        "close": 75.5,
        "ma5": 74.26,
        "ma10": 74.93
      },
      {
        "open": 75.1,
        "high": 75.9,
        "low": 74.9,
        "close": 75.9,
        "ma5": 74.66,
        "ma10": 74.78
      },
      {
        "open": 75.8,
        "high": 76.3,
        "low": 75.4,
        "close": 76.3,
        "ma5": 75.28,
        "ma10": 74.59
      },
      {
        "open": 76.5,
        "high": 76.5,
        "low": 75.1,
        "close": 76.3,
        "ma5": 75.94,
        "ma10": 74.66
      },
      {
        "open": 76.2,
        "high": 76.3,
        "low": 75.4,
        "close": 75.6,
        "ma5": 75.92,
        "ma10": 74.84
      }
    ],
    "symbol": "1216.TW",
    "maxVol10d": 27617,
    "hasVolumeBurst": false
  },
  {
    "code": "1303",
    "name": "南亞",
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "price": 207.5,
    "prevClose": 189.0,
    "open": 194.0,
    "high": 207.5,
    "low": 189.5,
    "volume": 151877,
    "ma5": 192.1,
    "ma10": 183.95,
    "ma20": 179.05,
    "ma60": 154.75,
    "vMa5": 106312,
    "vMa10": 103597,
    "high20d": 229.0,
    "sparkline": [
      165.0,
      170.5,
      177.0,
      178.5,
      188.0,
      185.0,
      190.0,
      189.0,
      189.0,
      207.5
    ],
    "high5d": 207.5,
    "high10d": 207.5,
    "k3d": [
      {
        "open": 183.0,
        "high": 191.0,
        "low": 172.5,
        "close": 190.0,
        "ma5": 183.7,
        "ma10": 170.0
      },
      {
        "open": 195.0,
        "high": 197.5,
        "low": 187.0,
        "close": 189.0,
        "ma5": 186.1,
        "ma10": 174.75
      },
      {
        "open": 191.0,
        "high": 195.0,
        "low": 184.0,
        "close": 189.0,
        "ma5": 188.2,
        "ma10": 179.15
      }
    ],
    "k5d": [
      {
        "open": 188.5,
        "high": 192.0,
        "low": 182.5,
        "close": 185.0,
        "ma5": 179.8,
        "ma10": 166.7
      },
      {
        "open": 183.0,
        "high": 191.0,
        "low": 172.5,
        "close": 190.0,
        "ma5": 183.7,
        "ma10": 170.0
      },
      {
        "open": 195.0,
        "high": 197.5,
        "low": 187.0,
        "close": 189.0,
        "ma5": 186.1,
        "ma10": 174.75
      },
      {
        "open": 191.0,
        "high": 195.0,
        "low": 184.0,
        "close": 189.0,
        "ma5": 188.2,
        "ma10": 179.15
      },
      {
        "open": 194.0,
        "high": 207.5,
        "low": 189.5,
        "close": 207.5,
        "ma5": 192.1,
        "ma10": 183.95
      }
    ],
    "symbol": "1303.TW",
    "maxVol10d": 151877,
    "hasVolumeBurst": true
  },
  {
    "code": "1326",
    "name": "台化",
    "categories": [],
    "price": 60.4,
    "prevClose": 59.5,
    "open": 60.1,
    "high": 61.5,
    "low": 59.0,
    "volume": 20046,
    "ma5": 59.34,
    "ma10": 58.68,
    "ma20": 61.38,
    "ma60": 57.59,
    "vMa5": 19993,
    "vMa10": 22127,
    "high20d": 77.6,
    "sparkline": [
      56.3,
      58.2,
      58.6,
      58.1,
      58.9,
      58.8,
      58.2,
      59.6,
      59.5,
      60.4
    ],
    "high5d": 61.5,
    "high10d": 61.5,
    "k3d": [
      {
        "open": 58.6,
        "high": 58.9,
        "low": 56.8,
        "close": 58.2,
        "ma5": 58.52,
        "ma10": 57.94
      },
      {
        "open": 58.7,
        "high": 60.0,
        "low": 58.7,
        "close": 59.6,
        "ma5": 58.72,
        "ma10": 58.05
      },
      {
        "open": 60.3,
        "high": 61.1,
        "low": 59.0,
        "close": 59.5,
        "ma5": 59.0,
        "ma10": 58.36
      }
    ],
    "k5d": [
      {
        "open": 59.7,
        "high": 59.7,
        "low": 57.6,
        "close": 58.8,
        "ma5": 58.52,
        "ma10": 58.21
      },
      {
        "open": 58.6,
        "high": 58.9,
        "low": 56.8,
        "close": 58.2,
        "ma5": 58.52,
        "ma10": 57.94
      },
      {
        "open": 58.7,
        "high": 60.0,
        "low": 58.7,
        "close": 59.6,
        "ma5": 58.72,
        "ma10": 58.05
      },
      {
        "open": 60.3,
        "high": 61.1,
        "low": 59.0,
        "close": 59.5,
        "ma5": 59.0,
        "ma10": 58.36
      },
      {
        "open": 60.1,
        "high": 61.5,
        "low": 59.0,
        "close": 60.6,
        "ma5": 59.34,
        "ma10": 58.68
      }
    ],
    "symbol": "1326.TW",
    "maxVol10d": 28710,
    "hasVolumeBurst": false
  },
  {
    "code": "6505",
    "name": "台塑化",
    "categories": [
      "0050"
    ],
    "price": 71.1,
    "prevClose": 69.8,
    "open": 70.0,
    "high": 71.6,
    "low": 69.8,
    "volume": 9184,
    "ma5": 70.24,
    "ma10": 69.28,
    "ma20": 74.48,
    "ma60": 62.48,
    "vMa5": 17272,
    "vMa10": 21210,
    "high20d": 97.9,
    "sparkline": [
      67.7,
      68.2,
      67.6,
      67.1,
      71.0,
      69.0,
      71.1,
      70.2,
      69.8,
      71.1
    ],
    "high5d": 72.9,
    "high10d": 73.0,
    "k3d": [
      {
        "open": 70.4,
        "high": 71.6,
        "low": 68.0,
        "close": 71.1,
        "ma5": 69.16,
        "ma10": 69.89
      },
      {
        "open": 71.8,
        "high": 72.9,
        "low": 70.2,
        "close": 70.2,
        "ma5": 69.68,
        "ma10": 69.43
      },
      {
        "open": 70.6,
        "high": 71.1,
        "low": 69.6,
        "close": 69.8,
        "ma5": 70.22,
        "ma10": 69.25
      }
    ],
    "k5d": [
      {
        "open": 70.0,
        "high": 70.7,
        "low": 67.2,
        "close": 69.0,
        "ma5": 68.58,
        "ma10": 70.24
      },
      {
        "open": 70.4,
        "high": 71.6,
        "low": 68.0,
        "close": 71.1,
        "ma5": 69.16,
        "ma10": 69.89
      },
      {
        "open": 71.8,
        "high": 72.9,
        "low": 70.2,
        "close": 70.2,
        "ma5": 69.68,
        "ma10": 69.43
      },
      {
        "open": 70.6,
        "high": 71.1,
        "low": 69.6,
        "close": 69.8,
        "ma5": 70.22,
        "ma10": 69.25
      },
      {
        "open": 70.0,
        "high": 71.6,
        "low": 69.8,
        "close": 71.1,
        "ma5": 70.24,
        "ma10": 69.28
      }
    ],
    "symbol": "6505.TW",
    "maxVol10d": 41386,
    "hasVolumeBurst": true
  },
  {
    "code": "2618",
    "name": "長榮航",
    "categories": [
      "SitcaBuy"
    ],
    "price": 39.3,
    "prevClose": 41.0,
    "open": 40.65,
    "high": 40.65,
    "low": 39.2,
    "volume": 41132,
    "ma5": 41.37,
    "ma10": 42.58,
    "ma20": 42.21,
    "ma60": 40.76,
    "vMa5": 34407,
    "vMa10": 36379,
    "high20d": 44.6,
    "sparkline": [
      43.7,
      43.8,
      43.8,
      43.25,
      44.4,
      42.65,
      41.75,
      42.15,
      41.0,
      39.3
    ],
    "high5d": 43.0,
    "high10d": 44.6,
    "k3d": [
      {
        "open": 42.0,
        "high": 42.15,
        "low": 41.2,
        "close": 41.75,
        "ma5": 43.17,
        "ma10": 42.99
      },
      {
        "open": 41.9,
        "high": 42.6,
        "low": 41.45,
        "close": 42.15,
        "ma5": 42.84,
        "ma10": 43.06
      },
      {
        "open": 41.9,
        "high": 41.95,
        "low": 40.8,
        "close": 41.0,
        "ma5": 42.39,
        "ma10": 42.98
      }
    ],
    "k5d": [
      {
        "open": 43.0,
        "high": 43.0,
        "low": 41.5,
        "close": 42.65,
        "ma5": 43.58,
        "ma10": 43.09
      },
      {
        "open": 42.0,
        "high": 42.15,
        "low": 41.2,
        "close": 41.75,
        "ma5": 43.17,
        "ma10": 42.99
      },
      {
        "open": 41.9,
        "high": 42.6,
        "low": 41.45,
        "close": 42.15,
        "ma5": 42.84,
        "ma10": 43.06
      },
      {
        "open": 41.9,
        "high": 41.95,
        "low": 40.8,
        "close": 41.0,
        "ma5": 42.39,
        "ma10": 42.98
      },
      {
        "open": 40.65,
        "high": 40.65,
        "low": 39.2,
        "close": 39.3,
        "ma5": 41.37,
        "ma10": 42.58
      }
    ],
    "symbol": "2618.TW",
    "maxVol10d": 49492,
    "hasVolumeBurst": false
  },
  {
    "code": "2610",
    "name": "華航",
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "price": 19.95,
    "prevClose": 20.1,
    "open": 20.15,
    "high": 20.15,
    "low": 19.85,
    "volume": 27702,
    "ma5": 20.19,
    "ma10": 21.31,
    "ma20": 21.34,
    "ma60": 21.09,
    "vMa5": 54322,
    "vMa10": 43073,
    "high20d": 22.85,
    "sparkline": [
      22.45,
      22.45,
      22.6,
      22.15,
      22.5,
      20.45,
      20.25,
      20.25,
      20.1,
      19.95
    ],
    "high5d": 21.4,
    "high10d": 22.85,
    "k3d": [
      {
        "open": 20.35,
        "high": 20.4,
        "low": 20.0,
        "close": 20.25,
        "ma5": 21.59,
        "ma10": 21.87
      },
      {
        "open": 20.25,
        "high": 20.4,
        "low": 20.1,
        "close": 20.25,
        "ma5": 21.12,
        "ma10": 21.72
      },
      {
        "open": 20.35,
        "high": 20.35,
        "low": 20.0,
        "close": 20.1,
        "ma5": 20.71,
        "ma10": 21.56
      }
    ],
    "k5d": [
      {
        "open": 21.4,
        "high": 21.4,
        "low": 20.3,
        "close": 20.45,
        "ma5": 22.03,
        "ma10": 22.02
      },
      {
        "open": 20.35,
        "high": 20.4,
        "low": 20.0,
        "close": 20.25,
        "ma5": 21.59,
        "ma10": 21.87
      },
      {
        "open": 20.25,
        "high": 20.4,
        "low": 20.1,
        "close": 20.25,
        "ma5": 21.12,
        "ma10": 21.72
      },
      {
        "open": 20.35,
        "high": 20.35,
        "low": 20.0,
        "close": 20.1,
        "ma5": 20.71,
        "ma10": 21.56
      },
      {
        "open": 20.15,
        "high": 20.15,
        "low": 19.85,
        "close": 19.9,
        "ma5": 20.19,
        "ma10": 21.31
      }
    ],
    "symbol": "2610.TW",
    "maxVol10d": 125826,
    "hasVolumeBurst": true
  },
  {
    "code": "9910",
    "name": "豐泰",
    "categories": [],
    "price": 68.8,
    "prevClose": 70.3,
    "open": 70.3,
    "high": 70.3,
    "low": 68.5,
    "volume": 749,
    "ma5": 70.32,
    "ma10": 69.28,
    "ma20": 69.13,
    "ma60": 71.79,
    "vMa5": 1286,
    "vMa10": 1236,
    "high20d": 73.2,
    "sparkline": [
      67.2,
      67.4,
      67.4,
      69.7,
      69.5,
      70.2,
      71.3,
      71.0,
      70.3,
      68.8
    ],
    "high5d": 73.2,
    "high10d": 73.2,
    "k3d": [
      {
        "open": 69.6,
        "high": 71.3,
        "low": 69.6,
        "close": 71.3,
        "ma5": 69.62,
        "ma10": 69.23
      },
      {
        "open": 71.9,
        "high": 73.2,
        "low": 70.5,
        "close": 71.0,
        "ma5": 70.34,
        "ma10": 69.25
      },
      {
        "open": 71.4,
        "high": 71.4,
        "low": 69.2,
        "close": 70.3,
        "ma5": 70.46,
        "ma10": 69.24
      }
    ],
    "k5d": [
      {
        "open": 70.3,
        "high": 70.3,
        "low": 69.2,
        "close": 70.2,
        "ma5": 68.84,
        "ma10": 69.01
      },
      {
        "open": 69.6,
        "high": 71.3,
        "low": 69.6,
        "close": 71.3,
        "ma5": 69.62,
        "ma10": 69.23
      },
      {
        "open": 71.9,
        "high": 73.2,
        "low": 70.5,
        "close": 71.0,
        "ma5": 70.34,
        "ma10": 69.25
      },
      {
        "open": 71.4,
        "high": 71.4,
        "low": 69.2,
        "close": 70.3,
        "ma5": 70.46,
        "ma10": 69.24
      },
      {
        "open": 70.3,
        "high": 70.3,
        "low": 68.5,
        "close": 68.8,
        "ma5": 70.32,
        "ma10": 69.28
      }
    ],
    "symbol": "9910.TW",
    "maxVol10d": 1799,
    "hasVolumeBurst": true
  },
  {
    "code": "2912",
    "name": "統一超",
    "categories": [],
    "price": 215.0,
    "prevClose": 217.0,
    "open": 217.0,
    "high": 217.0,
    "low": 214.5,
    "volume": 1638,
    "ma5": 217.9,
    "ma10": 219.4,
    "ma20": 228.5,
    "ma60": 228.79,
    "vMa5": 2219,
    "vMa10": 2524,
    "high20d": 249.0,
    "sparkline": [
      220.5,
      221.5,
      221.5,
      220.0,
      221.0,
      219.5,
      219.0,
      219.5,
      217.0,
      215.0
    ],
    "high5d": 222.0,
    "high10d": 225.0,
    "k3d": [
      {
        "open": 219.0,
        "high": 220.0,
        "low": 217.0,
        "close": 219.0,
        "ma5": 220.2,
        "ma10": 223.8
      },
      {
        "open": 219.5,
        "high": 221.0,
        "low": 219.0,
        "close": 219.5,
        "ma5": 219.8,
        "ma10": 221.65
      },
      {
        "open": 220.0,
        "high": 220.0,
        "low": 216.0,
        "close": 217.0,
        "ma5": 219.2,
        "ma10": 220.35
      }
    ],
    "k5d": [
      {
        "open": 222.0,
        "high": 222.0,
        "low": 219.0,
        "close": 219.5,
        "ma5": 220.7,
        "ma10": 225.65
      },
      {
        "open": 219.0,
        "high": 220.0,
        "low": 217.0,
        "close": 219.0,
        "ma5": 220.2,
        "ma10": 223.8
      },
      {
        "open": 219.5,
        "high": 221.0,
        "low": 219.0,
        "close": 219.5,
        "ma5": 219.8,
        "ma10": 221.65
      },
      {
        "open": 220.0,
        "high": 220.0,
        "low": 216.0,
        "close": 217.0,
        "ma5": 219.2,
        "ma10": 220.35
      },
      {
        "open": 217.0,
        "high": 217.0,
        "low": 214.5,
        "close": 214.5,
        "ma5": 217.9,
        "ma10": 219.4
      }
    ],
    "symbol": "2912.TW",
    "maxVol10d": 3807,
    "hasVolumeBurst": true
  },
  {
    "code": "1590",
    "name": "亞德客-KY",
    "categories": [],
    "price": 1450.0,
    "prevClose": 1470.0,
    "open": 1495.0,
    "high": 1510.0,
    "low": 1440.0,
    "volume": 397,
    "ma5": 1531.0,
    "ma10": 1511.0,
    "ma20": 1443.0,
    "ma60": 1380.5,
    "vMa5": 871,
    "vMa10": 924,
    "high20d": 1615.0,
    "sparkline": [
      1415.0,
      1425.0,
      1510.0,
      1560.0,
      1545.0,
      1570.0,
      1560.0,
      1595.0,
      1470.0,
      1450.0
    ],
    "high5d": 1615.0,
    "high10d": 1615.0,
    "k3d": [
      {
        "open": 1565.0,
        "high": 1575.0,
        "low": 1510.0,
        "close": 1560.0,
        "ma5": 1549.0,
        "ma10": 1457.5
      },
      {
        "open": 1530.0,
        "high": 1615.0,
        "low": 1530.0,
        "close": 1595.0,
        "ma5": 1566.0,
        "ma10": 1484.5
      },
      {
        "open": 1590.0,
        "high": 1595.0,
        "low": 1455.0,
        "close": 1470.0,
        "ma5": 1548.0,
        "ma10": 1497.5
      }
    ],
    "k5d": [
      {
        "open": 1510.0,
        "high": 1590.0,
        "low": 1465.0,
        "close": 1570.0,
        "ma5": 1522.0,
        "ma10": 1438.0
      },
      {
        "open": 1565.0,
        "high": 1575.0,
        "low": 1510.0,
        "close": 1560.0,
        "ma5": 1549.0,
        "ma10": 1457.5
      },
      {
        "open": 1530.0,
        "high": 1615.0,
        "low": 1530.0,
        "close": 1595.0,
        "ma5": 1566.0,
        "ma10": 1484.5
      },
      {
        "open": 1590.0,
        "high": 1595.0,
        "low": 1455.0,
        "close": 1470.0,
        "ma5": 1548.0,
        "ma10": 1497.5
      },
      {
        "open": 1495.0,
        "high": 1510.0,
        "low": 1440.0,
        "close": 1460.0,
        "ma5": 1531.0,
        "ma10": 1511.0
      }
    ],
    "symbol": "1590.TW",
    "maxVol10d": 1324,
    "hasVolumeBurst": false
  },
  {
    "code": "2207",
    "name": "和泰車",
    "categories": [],
    "price": 514.0,
    "prevClose": 524.0,
    "open": 522.0,
    "high": 524.0,
    "low": 512.0,
    "volume": 119,
    "ma5": 513.4,
    "ma10": 514.7,
    "ma20": 511.62,
    "ma60": 487.47,
    "vMa5": 261,
    "vMa10": 344,
    "high20d": 573.0,
    "sparkline": [
      522.0,
      517.0,
      509.0,
      516.0,
      516.0,
      514.0,
      511.0,
      504.0,
      524.0,
      514.0
    ],
    "high5d": 529.0,
    "high10d": 559.0,
    "k3d": [
      {
        "open": 514.0,
        "high": 519.0,
        "low": 508.0,
        "close": 511.0,
        "ma5": 513.2,
        "ma10": 523.3
      },
      {
        "open": 513.0,
        "high": 516.0,
        "low": 504.0,
        "close": 504.0,
        "ma5": 512.2,
        "ma10": 521.8
      },
      {
        "open": 516.0,
        "high": 529.0,
        "low": 515.0,
        "close": 524.0,
        "ma5": 513.8,
        "ma10": 519.1
      }
    ],
    "k5d": [
      {
        "open": 524.0,
        "high": 524.0,
        "low": 514.0,
        "close": 514.0,
        "ma5": 514.4,
        "ma10": 522.2
      },
      {
        "open": 514.0,
        "high": 519.0,
        "low": 508.0,
        "close": 511.0,
        "ma5": 513.2,
        "ma10": 523.3
      },
      {
        "open": 513.0,
        "high": 516.0,
        "low": 504.0,
        "close": 504.0,
        "ma5": 512.2,
        "ma10": 521.8
      },
      {
        "open": 516.0,
        "high": 529.0,
        "low": 515.0,
        "close": 524.0,
        "ma5": 513.8,
        "ma10": 519.1
      },
      {
        "open": 522.0,
        "high": 524.0,
        "low": 512.0,
        "close": 514.0,
        "ma5": 513.4,
        "ma10": 514.7
      }
    ],
    "symbol": "2207.TW",
    "maxVol10d": 616,
    "hasVolumeBurst": false
  },
  {
    "code": "6415",
    "name": "矽力*-KY",
    "categories": [],
    "price": 484.5,
    "prevClose": 465.0,
    "open": 482.5,
    "high": 511.0,
    "low": 480.0,
    "volume": 6502,
    "ma5": 466.6,
    "ma10": 451.3,
    "ma20": 442.25,
    "ma60": 527.35,
    "vMa5": 4218,
    "vMa10": 4663,
    "high20d": 511.0,
    "sparkline": [
      424.5,
      424.0,
      445.0,
      445.0,
      441.5,
      465.0,
      466.5,
      449.0,
      465.0,
      484.5
    ],
    "high5d": 511.0,
    "high10d": 511.0,
    "k3d": [
      {
        "open": 469.5,
        "high": 488.0,
        "low": 461.5,
        "close": 466.5,
        "ma5": 452.6,
        "ma10": 427.55
      },
      {
        "open": 466.0,
        "high": 472.0,
        "low": 447.0,
        "close": 449.0,
        "ma5": 453.4,
        "ma10": 434.9
      },
      {
        "open": 460.5,
        "high": 487.0,
        "low": 460.5,
        "close": 465.0,
        "ma5": 457.4,
        "ma10": 443.85
      }
    ],
    "k5d": [
      {
        "open": 443.5,
        "high": 475.0,
        "low": 442.0,
        "close": 465.0,
        "ma5": 444.1,
        "ma10": 421.35
      },
      {
        "open": 469.5,
        "high": 488.0,
        "low": 461.5,
        "close": 466.5,
        "ma5": 452.6,
        "ma10": 427.55
      },
      {
        "open": 466.0,
        "high": 472.0,
        "low": 447.0,
        "close": 449.0,
        "ma5": 453.4,
        "ma10": 434.9
      },
      {
        "open": 460.5,
        "high": 487.0,
        "low": 460.5,
        "close": 465.0,
        "ma5": 457.4,
        "ma10": 443.85
      },
      {
        "open": 482.5,
        "high": 511.0,
        "low": 480.0,
        "close": 487.5,
        "ma5": 466.6,
        "ma10": 451.3
      }
    ],
    "symbol": "6415.TW",
    "maxVol10d": 6906,
    "hasVolumeBurst": true
  },
  {
    "code": "2383",
    "name": "台光電",
    "categories": [
      "0050"
    ],
    "price": 6150.0,
    "prevClose": 5690.0,
    "open": 5790.0,
    "high": 6200.0,
    "low": 5770.0,
    "volume": 2239,
    "ma5": 5673.0,
    "ma10": 5427.5,
    "ma20": 5043.0,
    "ma60": 5160.25,
    "vMa5": 1931,
    "vMa10": 2187,
    "high20d": 6200.0,
    "sparkline": [
      4980.0,
      5140.0,
      5245.0,
      5305.0,
      5240.0,
      5290.0,
      5535.0,
      5730.0,
      5690.0,
      6150.0
    ],
    "high5d": 6200.0,
    "high10d": 6200.0,
    "k3d": [
      {
        "open": 5300.0,
        "high": 5535.0,
        "low": 5240.0,
        "close": 5535.0,
        "ma5": 5323.0,
        "ma10": 4989.5
      },
      {
        "open": 5500.0,
        "high": 5730.0,
        "low": 5480.0,
        "close": 5730.0,
        "ma5": 5420.0,
        "ma10": 5152.5
      },
      {
        "open": 5875.0,
        "high": 5875.0,
        "low": 5655.0,
        "close": 5690.0,
        "ma5": 5497.0,
        "ma10": 5290.0
      }
    ],
    "k5d": [
      {
        "open": 5330.0,
        "high": 5510.0,
        "low": 5230.0,
        "close": 5290.0,
        "ma5": 5244.0,
        "ma10": 4877.0
      },
      {
        "open": 5300.0,
        "high": 5535.0,
        "low": 5240.0,
        "close": 5535.0,
        "ma5": 5323.0,
        "ma10": 4989.5
      },
      {
        "open": 5500.0,
        "high": 5730.0,
        "low": 5480.0,
        "close": 5730.0,
        "ma5": 5420.0,
        "ma10": 5152.5
      },
      {
        "open": 5875.0,
        "high": 5875.0,
        "low": 5655.0,
        "close": 5690.0,
        "ma5": 5497.0,
        "ma10": 5290.0
      },
      {
        "open": 5790.0,
        "high": 6200.0,
        "low": 5770.0,
        "close": 6120.0,
        "ma5": 5673.0,
        "ma10": 5427.5
      }
    ],
    "symbol": "2383.TW",
    "maxVol10d": 3993,
    "hasVolumeBurst": false
  },
  {
    "code": "2345",
    "name": "智邦",
    "categories": [
      "0050"
    ],
    "price": 2320.0,
    "prevClose": 2270.0,
    "open": 2305.0,
    "high": 2385.0,
    "low": 2275.0,
    "volume": 2387,
    "ma5": 2224.0,
    "ma10": 2278.5,
    "ma20": 2208.75,
    "ma60": 2376.58,
    "vMa5": 2779,
    "vMa10": 3250,
    "high20d": 2595.0,
    "sparkline": [
      2335.0,
      2320.0,
      2385.0,
      2410.0,
      2215.0,
      2165.0,
      2135.0,
      2215.0,
      2270.0,
      2320.0
    ],
    "high5d": 2385.0,
    "high10d": 2595.0,
    "k3d": [
      {
        "open": 2140.0,
        "high": 2150.0,
        "low": 2075.0,
        "close": 2135.0,
        "ma5": 2262.0,
        "ma10": 2193.5
      },
      {
        "open": 2140.0,
        "high": 2255.0,
        "low": 2125.0,
        "close": 2215.0,
        "ma5": 2228.0,
        "ma10": 2224.0
      },
      {
        "open": 2275.0,
        "high": 2310.0,
        "low": 2235.0,
        "close": 2270.0,
        "ma5": 2200.0,
        "ma10": 2257.5
      }
    ],
    "k5d": [
      {
        "open": 2255.0,
        "high": 2280.0,
        "low": 2135.0,
        "close": 2165.0,
        "ma5": 2299.0,
        "ma10": 2184.0
      },
      {
        "open": 2140.0,
        "high": 2150.0,
        "low": 2075.0,
        "close": 2135.0,
        "ma5": 2262.0,
        "ma10": 2193.5
      },
      {
        "open": 2140.0,
        "high": 2255.0,
        "low": 2125.0,
        "close": 2215.0,
        "ma5": 2228.0,
        "ma10": 2224.0
      },
      {
        "open": 2275.0,
        "high": 2310.0,
        "low": 2235.0,
        "close": 2270.0,
        "ma5": 2200.0,
        "ma10": 2257.5
      },
      {
        "open": 2305.0,
        "high": 2385.0,
        "low": 2275.0,
        "close": 2335.0,
        "ma5": 2224.0,
        "ma10": 2278.5
      }
    ],
    "symbol": "2345.TW",
    "maxVol10d": 4364,
    "hasVolumeBurst": false
  },
  {
    "code": "3017",
    "name": "奇鋐",
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "price": 3240.0,
    "prevClose": 3200.0,
    "open": 3250.0,
    "high": 3320.0,
    "low": 3170.0,
    "volume": 5651,
    "ma5": 2979.0,
    "ma10": 2850.0,
    "ma20": 2560.25,
    "ma60": 2509.42,
    "vMa5": 5038,
    "vMa10": 5179,
    "high20d": 3320.0,
    "sparkline": [
      2550.0,
      2600.0,
      2730.0,
      2940.0,
      2785.0,
      2765.0,
      2760.0,
      2910.0,
      3200.0,
      3240.0
    ],
    "high5d": 3320.0,
    "high10d": 3320.0,
    "k3d": [
      {
        "open": 2705.0,
        "high": 2800.0,
        "low": 2625.0,
        "close": 2760.0,
        "ma5": 2796.0,
        "ma10": 2565.5
      },
      {
        "open": 2765.0,
        "high": 2915.0,
        "low": 2755.0,
        "close": 2910.0,
        "ma5": 2832.0,
        "ma10": 2647.0
      },
      {
        "open": 3030.0,
        "high": 3200.0,
        "low": 2925.0,
        "close": 3200.0,
        "ma5": 2884.0,
        "ma10": 2756.0
      }
    ],
    "k5d": [
      {
        "open": 2865.0,
        "high": 2890.0,
        "low": 2755.0,
        "close": 2765.0,
        "ma5": 2764.0,
        "ma10": 2513.5
      },
      {
        "open": 2705.0,
        "high": 2800.0,
        "low": 2625.0,
        "close": 2760.0,
        "ma5": 2796.0,
        "ma10": 2565.5
      },
      {
        "open": 2765.0,
        "high": 2915.0,
        "low": 2755.0,
        "close": 2910.0,
        "ma5": 2832.0,
        "ma10": 2647.0
      },
      {
        "open": 3030.0,
        "high": 3200.0,
        "low": 2925.0,
        "close": 3200.0,
        "ma5": 2884.0,
        "ma10": 2756.0
      },
      {
        "open": 3250.0,
        "high": 3320.0,
        "low": 3170.0,
        "close": 3260.0,
        "ma5": 2979.0,
        "ma10": 2850.0
      }
    ],
    "symbol": "3017.TW",
    "maxVol10d": 9481,
    "hasVolumeBurst": true
  },
  {
    "code": "2360",
    "name": "致茂",
    "categories": [
      "0050"
    ],
    "price": 2335.0,
    "prevClose": 2300.0,
    "open": 2335.0,
    "high": 2365.0,
    "low": 2280.0,
    "volume": 1096,
    "ma5": 2188.0,
    "ma10": 2071.5,
    "ma20": 2040.5,
    "ma60": 2169.08,
    "vMa5": 2037,
    "vMa10": 3035,
    "high20d": 2395.0,
    "sparkline": [
      1960.0,
      1925.0,
      1885.0,
      1975.0,
      2030.0,
      2030.0,
      2080.0,
      2195.0,
      2300.0,
      2335.0
    ],
    "high5d": 2395.0,
    "high10d": 2395.0,
    "k3d": [
      {
        "open": 2025.0,
        "high": 2130.0,
        "low": 1965.0,
        "close": 2080.0,
        "ma5": 2000.0,
        "ma10": 1973.0
      },
      {
        "open": 2110.0,
        "high": 2230.0,
        "low": 2095.0,
        "close": 2195.0,
        "ma5": 2062.0,
        "ma10": 2009.0
      },
      {
        "open": 2335.0,
        "high": 2395.0,
        "low": 2255.0,
        "close": 2300.0,
        "ma5": 2127.0,
        "ma10": 2048.0
      }
    ],
    "k5d": [
      {
        "open": 1980.0,
        "high": 2115.0,
        "low": 1980.0,
        "close": 2030.0,
        "ma5": 1969.0,
        "ma10": 1959.0
      },
      {
        "open": 2025.0,
        "high": 2130.0,
        "low": 1965.0,
        "close": 2080.0,
        "ma5": 2000.0,
        "ma10": 1973.0
      },
      {
        "open": 2110.0,
        "high": 2230.0,
        "low": 2095.0,
        "close": 2195.0,
        "ma5": 2062.0,
        "ma10": 2009.0
      },
      {
        "open": 2335.0,
        "high": 2395.0,
        "low": 2255.0,
        "close": 2300.0,
        "ma5": 2127.0,
        "ma10": 2048.0
      },
      {
        "open": 2335.0,
        "high": 2365.0,
        "low": 2280.0,
        "close": 2335.0,
        "ma5": 2188.0,
        "ma10": 2071.5
      }
    ],
    "symbol": "2360.TW",
    "maxVol10d": 5944,
    "hasVolumeBurst": false
  },
  {
    "code": "2059",
    "name": "川湖",
    "categories": [
      "0050"
    ],
    "price": 12445.0,
    "prevClose": 12235.0,
    "open": 12010.0,
    "high": 12670.0,
    "low": 12010.0,
    "volume": 158,
    "ma5": 12234.0,
    "ma10": 10998.0,
    "ma20": 9381.25,
    "ma60": 7672.92,
    "vMa5": 426,
    "vMa10": 515,
    "high20d": 12670.0,
    "sparkline": [
      8635.0,
      9495.0,
      9470.0,
      10100.0,
      11110.0,
      11905.0,
      12315.0,
      12045.0,
      12235.0,
      12445.0
    ],
    "high5d": 12670.0,
    "high10d": 12670.0,
    "k3d": [
      {
        "open": 11700.0,
        "high": 12540.0,
        "low": 11615.0,
        "close": 12315.0,
        "ma5": 10980.0,
        "ma10": 9516.5
      },
      {
        "open": 12250.0,
        "high": 12295.0,
        "low": 11790.0,
        "close": 12045.0,
        "ma5": 11495.0,
        "ma10": 10006.5
      },
      {
        "open": 12235.0,
        "high": 12500.0,
        "low": 11840.0,
        "close": 12235.0,
        "ma5": 11922.0,
        "ma10": 10516.0
      }
    ],
    "k5d": [
      {
        "open": 12220.0,
        "high": 12220.0,
        "low": 11590.0,
        "close": 11905.0,
        "ma5": 10416.0,
        "ma10": 9030.0
      },
      {
        "open": 11700.0,
        "high": 12540.0,
        "low": 11615.0,
        "close": 12315.0,
        "ma5": 10980.0,
        "ma10": 9516.5
      },
      {
        "open": 12250.0,
        "high": 12295.0,
        "low": 11790.0,
        "close": 12045.0,
        "ma5": 11495.0,
        "ma10": 10006.5
      },
      {
        "open": 12235.0,
        "high": 12500.0,
        "low": 11840.0,
        "close": 12235.0,
        "ma5": 11922.0,
        "ma10": 10516.0
      },
      {
        "open": 12010.0,
        "high": 12670.0,
        "low": 12010.0,
        "close": 12670.0,
        "ma5": 12234.0,
        "ma10": 10998.0
      }
    ],
    "symbol": "2059.TW",
    "maxVol10d": 978,
    "hasVolumeBurst": false
  },
  {
    "code": "2412",
    "name": "中華電",
    "categories": [
      "0050"
    ],
    "price": 135.0,
    "prevClose": 136.0,
    "open": 136.0,
    "high": 136.5,
    "low": 135.0,
    "volume": 4865,
    "ma5": 135.9,
    "ma10": 136.65,
    "ma20": 138.1,
    "ma60": 139.54,
    "vMa5": 7964,
    "vMa10": 9200,
    "high20d": 142.5,
    "sparkline": [
      139.0,
      136.5,
      137.0,
      137.0,
      137.5,
      136.5,
      136.0,
      136.0,
      136.0,
      135.0
    ],
    "high5d": 137.5,
    "high10d": 140.0,
    "k3d": [
      {
        "open": 136.5,
        "high": 137.0,
        "low": 136.0,
        "close": 136.0,
        "ma5": 136.8,
        "ma10": 138.0
      },
      {
        "open": 137.0,
        "high": 137.0,
        "low": 135.5,
        "close": 136.0,
        "ma5": 136.6,
        "ma10": 137.55
      },
      {
        "open": 135.5,
        "high": 136.0,
        "low": 135.0,
        "close": 136.0,
        "ma5": 136.4,
        "ma10": 137.1
      }
    ],
    "k5d": [
      {
        "open": 137.5,
        "high": 137.5,
        "low": 136.0,
        "close": 136.5,
        "ma5": 136.9,
        "ma10": 138.5
      },
      {
        "open": 136.5,
        "high": 137.0,
        "low": 136.0,
        "close": 136.0,
        "ma5": 136.8,
        "ma10": 138.0
      },
      {
        "open": 137.0,
        "high": 137.0,
        "low": 135.5,
        "close": 136.0,
        "ma5": 136.6,
        "ma10": 137.55
      },
      {
        "open": 135.5,
        "high": 136.0,
        "low": 135.0,
        "close": 136.0,
        "ma5": 136.4,
        "ma10": 137.1
      },
      {
        "open": 136.0,
        "high": 136.5,
        "low": 135.0,
        "close": 135.0,
        "ma5": 135.9,
        "ma10": 136.65
      }
    ],
    "symbol": "2412.TW",
    "maxVol10d": 15332,
    "hasVolumeBurst": false
  },
  {
    "code": "3665",
    "name": "貿聯-KY",
    "categories": [
      "0050"
    ],
    "price": 2235.0,
    "prevClose": 2205.0,
    "open": 2235.0,
    "high": 2245.0,
    "low": 2180.0,
    "volume": 1100,
    "ma5": 2196.0,
    "ma10": 2230.0,
    "ma20": 2159.5,
    "ma60": 2087.33,
    "vMa5": 2821,
    "vMa10": 3620,
    "high20d": 2555.0,
    "sparkline": [
      2095.0,
      2300.0,
      2355.0,
      2370.0,
      2200.0,
      2190.0,
      2200.0,
      2155.0,
      2205.0,
      2235.0
    ],
    "high5d": 2300.0,
    "high10d": 2555.0,
    "k3d": [
      {
        "open": 2145.0,
        "high": 2205.0,
        "low": 2070.0,
        "close": 2200.0,
        "ma5": 2263.0,
        "ma10": 2181.0
      },
      {
        "open": 2195.0,
        "high": 2195.0,
        "low": 2130.0,
        "close": 2155.0,
        "ma5": 2223.0,
        "ma10": 2187.5
      },
      {
        "open": 2180.0,
        "high": 2275.0,
        "low": 2165.0,
        "close": 2205.0,
        "ma5": 2190.0,
        "ma10": 2217.0
      }
    ],
    "k5d": [
      {
        "open": 2190.0,
        "high": 2300.0,
        "low": 2115.0,
        "close": 2190.0,
        "ma5": 2283.0,
        "ma10": 2182.5
      },
      {
        "open": 2145.0,
        "high": 2205.0,
        "low": 2070.0,
        "close": 2200.0,
        "ma5": 2263.0,
        "ma10": 2181.0
      },
      {
        "open": 2195.0,
        "high": 2195.0,
        "low": 2130.0,
        "close": 2155.0,
        "ma5": 2223.0,
        "ma10": 2187.5
      },
      {
        "open": 2180.0,
        "high": 2275.0,
        "low": 2165.0,
        "close": 2205.0,
        "ma5": 2190.0,
        "ma10": 2217.0
      },
      {
        "open": 2235.0,
        "high": 2245.0,
        "low": 2180.0,
        "close": 2230.0,
        "ma5": 2196.0,
        "ma10": 2230.0
      }
    ],
    "symbol": "3665.TW",
    "maxVol10d": 5306,
    "hasVolumeBurst": false
  },
  {
    "code": "4958",
    "name": "臻鼎-KY",
    "categories": [
      "0050",
      "Top100"
    ],
    "price": 495.5,
    "prevClose": 477.5,
    "open": 481.5,
    "high": 522.0,
    "low": 473.0,
    "volume": 52448,
    "ma5": 482.1,
    "ma10": 471.9,
    "ma20": 467.27,
    "ma60": 533.8,
    "vMa5": 42269,
    "vMa10": 40695,
    "high20d": 612.0,
    "sparkline": [
      421.5,
      444.0,
      488.0,
      482.0,
      473.0,
      470.5,
      490.0,
      471.5,
      477.5,
      495.5
    ],
    "high5d": 522.0,
    "high10d": 522.0,
    "k3d": [
      {
        "open": 470.0,
        "high": 493.0,
        "low": 468.0,
        "close": 490.0,
        "ma5": 480.7,
        "ma10": 446.3
      },
      {
        "open": 485.0,
        "high": 486.0,
        "low": 468.5,
        "close": 471.5,
        "ma5": 477.4,
        "ma10": 453.0
      },
      {
        "open": 483.0,
        "high": 506.0,
        "low": 472.0,
        "close": 477.5,
        "ma5": 476.5,
        "ma10": 463.15
      }
    ],
    "k5d": [
      {
        "open": 486.0,
        "high": 488.5,
        "low": 470.0,
        "close": 470.5,
        "ma5": 471.5,
        "ma10": 440.05
      },
      {
        "open": 470.0,
        "high": 493.0,
        "low": 468.0,
        "close": 490.0,
        "ma5": 480.7,
        "ma10": 446.3
      },
      {
        "open": 485.0,
        "high": 486.0,
        "low": 468.5,
        "close": 471.5,
        "ma5": 477.4,
        "ma10": 453.0
      },
      {
        "open": 483.0,
        "high": 506.0,
        "low": 472.0,
        "close": 477.5,
        "ma5": 476.5,
        "ma10": 463.15
      },
      {
        "open": 481.5,
        "high": 522.0,
        "low": 473.0,
        "close": 501.0,
        "ma5": 482.1,
        "ma10": 471.9
      }
    ],
    "symbol": "4958.TW",
    "maxVol10d": 53990,
    "hasVolumeBurst": false
  },
  {
    "code": "7769",
    "name": "鴻勁",
    "categories": [
      "0050"
    ],
    "price": 6715.0,
    "prevClose": 6770.0,
    "open": 6950.0,
    "high": 6960.0,
    "low": 6710.0,
    "volume": 430,
    "ma5": 6522.0,
    "ma10": 6455.0,
    "ma20": 6240.75,
    "ma60": 6754.0,
    "vMa5": 553,
    "vMa10": 697,
    "high20d": 6960.0,
    "sparkline": [
      6425.0,
      6190.0,
      6530.0,
      6475.0,
      6320.0,
      6280.0,
      6350.0,
      6480.0,
      6770.0,
      6715.0
    ],
    "high5d": 6960.0,
    "high10d": 6960.0,
    "k3d": [
      {
        "open": 6160.0,
        "high": 6375.0,
        "low": 6160.0,
        "close": 6350.0,
        "ma5": 6391.0,
        "ma10": 6154.5
      },
      {
        "open": 6380.0,
        "high": 6600.0,
        "low": 6380.0,
        "close": 6480.0,
        "ma5": 6381.0,
        "ma10": 6285.0
      },
      {
        "open": 6645.0,
        "high": 6845.0,
        "low": 6505.0,
        "close": 6770.0,
        "ma5": 6440.0,
        "ma10": 6400.0
      }
    ],
    "k5d": [
      {
        "open": 6320.0,
        "high": 6450.0,
        "low": 6225.0,
        "close": 6280.0,
        "ma5": 6359.0,
        "ma10": 6094.5
      },
      {
        "open": 6160.0,
        "high": 6375.0,
        "low": 6160.0,
        "close": 6350.0,
        "ma5": 6391.0,
        "ma10": 6154.5
      },
      {
        "open": 6380.0,
        "high": 6600.0,
        "low": 6380.0,
        "close": 6480.0,
        "ma5": 6381.0,
        "ma10": 6285.0
      },
      {
        "open": 6645.0,
        "high": 6845.0,
        "low": 6505.0,
        "close": 6770.0,
        "ma5": 6440.0,
        "ma10": 6400.0
      },
      {
        "open": 6950.0,
        "high": 6960.0,
        "low": 6710.0,
        "close": 6730.0,
        "ma5": 6522.0,
        "ma10": 6455.0
      }
    ],
    "symbol": "7769.TW",
    "maxVol10d": 1931,
    "hasVolumeBurst": true
  },
  {
    "code": "3653",
    "name": "健策",
    "categories": [
      "0050"
    ],
    "price": 4790.0,
    "prevClose": 4635.0,
    "open": 4695.0,
    "high": 4760.0,
    "low": 4530.0,
    "volume": 700,
    "ma5": 4409.0,
    "ma10": 4313.0,
    "ma20": 3863.75,
    "ma60": 3667.5,
    "vMa5": 928,
    "vMa10": 1511,
    "high20d": 4760.0,
    "sparkline": [
      3770.0,
      4145.0,
      4340.0,
      4450.0,
      4380.0,
      4135.0,
      4065.0,
      4470.0,
      4635.0,
      4790.0
    ],
    "high5d": 4760.0,
    "high10d": 4760.0,
    "k3d": [
      {
        "open": 4165.0,
        "high": 4170.0,
        "low": 3895.0,
        "close": 4065.0,
        "ma5": 4274.0,
        "ma10": 3917.5
      },
      {
        "open": 4125.0,
        "high": 4470.0,
        "low": 4125.0,
        "close": 4470.0,
        "ma5": 4300.0,
        "ma10": 4033.5
      },
      {
        "open": 4500.0,
        "high": 4670.0,
        "low": 4415.0,
        "close": 4635.0,
        "ma5": 4337.0,
        "ma10": 4183.5
      }
    ],
    "k5d": [
      {
        "open": 4470.0,
        "high": 4470.0,
        "low": 4050.0,
        "close": 4135.0,
        "ma5": 4290.0,
        "ma10": 3848.0
      },
      {
        "open": 4165.0,
        "high": 4170.0,
        "low": 3895.0,
        "close": 4065.0,
        "ma5": 4274.0,
        "ma10": 3917.5
      },
      {
        "open": 4125.0,
        "high": 4470.0,
        "low": 4125.0,
        "close": 4470.0,
        "ma5": 4300.0,
        "ma10": 4033.5
      },
      {
        "open": 4500.0,
        "high": 4670.0,
        "low": 4415.0,
        "close": 4635.0,
        "ma5": 4337.0,
        "ma10": 4183.5
      },
      {
        "open": 4695.0,
        "high": 4760.0,
        "low": 4530.0,
        "close": 4740.0,
        "ma5": 4409.0,
        "ma10": 4313.0
      }
    ],
    "symbol": "3653.TW",
    "maxVol10d": 2818,
    "hasVolumeBurst": true
  },
  {
    "code": "2368",
    "name": "金像電",
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "price": 1020.0,
    "prevClose": 1010.0,
    "open": 1015.0,
    "high": 1065.0,
    "low": 995.0,
    "volume": 7294,
    "ma5": 985.0,
    "ma10": 960.1,
    "ma20": 911.85,
    "ma60": 1142.57,
    "vMa5": 14121,
    "vMa10": 12624,
    "high20d": 1065.0,
    "sparkline": [
      872.0,
      897.0,
      940.0,
      985.0,
      982.0,
      926.0,
      964.0,
      1000.0,
      1010.0,
      1020.0
    ],
    "high5d": 1065.0,
    "high10d": 1065.0,
    "k3d": [
      {
        "open": 917.0,
        "high": 984.0,
        "low": 915.0,
        "close": 964.0,
        "ma5": 959.4,
        "ma10": 880.9
      },
      {
        "open": 1015.0,
        "high": 1045.0,
        "low": 964.0,
        "close": 1000.0,
        "ma5": 971.4,
        "ma10": 908.0
      },
      {
        "open": 1030.0,
        "high": 1045.0,
        "low": 994.0,
        "close": 1010.0,
        "ma5": 976.4,
        "ma10": 936.9
      }
    ],
    "k5d": [
      {
        "open": 985.0,
        "high": 1000.0,
        "low": 910.0,
        "close": 926.0,
        "ma5": 946.0,
        "ma10": 865.4
      },
      {
        "open": 917.0,
        "high": 984.0,
        "low": 915.0,
        "close": 964.0,
        "ma5": 959.4,
        "ma10": 880.9
      },
      {
        "open": 1015.0,
        "high": 1045.0,
        "low": 964.0,
        "close": 1000.0,
        "ma5": 971.4,
        "ma10": 908.0
      },
      {
        "open": 1030.0,
        "high": 1045.0,
        "low": 994.0,
        "close": 1010.0,
        "ma5": 976.4,
        "ma10": 936.9
      },
      {
        "open": 1015.0,
        "high": 1065.0,
        "low": 995.0,
        "close": 1025.0,
        "ma5": 985.0,
        "ma10": 960.1
      }
    ],
    "symbol": "2368.TW",
    "maxVol10d": 19420,
    "hasVolumeBurst": true
  },
  {
    "code": "4904",
    "name": "遠傳",
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "price": 98.8,
    "prevClose": 99.5,
    "open": 98.3,
    "high": 99.1,
    "low": 98.1,
    "volume": 3701,
    "ma5": 100.32,
    "ma10": 101.21,
    "ma20": 103.0,
    "ma60": 102.29,
    "vMa5": 4778,
    "vMa10": 6369,
    "high20d": 108.5,
    "sparkline": [
      103.5,
      101.0,
      101.0,
      102.0,
      103.0,
      101.5,
      101.0,
      101.0,
      99.5,
      98.8
    ],
    "high5d": 104.0,
    "high10d": 105.0,
    "k3d": [
      {
        "open": 102.0,
        "high": 102.0,
        "low": 100.0,
        "close": 101.0,
        "ma5": 101.7,
        "ma10": 103.0
      },
      {
        "open": 100.5,
        "high": 102.0,
        "low": 100.5,
        "close": 101.0,
        "ma5": 101.7,
        "ma10": 102.45
      },
      {
        "open": 102.0,
        "high": 102.0,
        "low": 99.1,
        "close": 99.5,
        "ma5": 101.2,
        "ma10": 101.85
      }
    ],
    "k5d": [
      {
        "open": 104.0,
        "high": 104.0,
        "low": 101.0,
        "close": 101.5,
        "ma5": 101.7,
        "ma10": 103.5
      },
      {
        "open": 102.0,
        "high": 102.0,
        "low": 100.0,
        "close": 101.0,
        "ma5": 101.7,
        "ma10": 103.0
      },
      {
        "open": 100.5,
        "high": 102.0,
        "low": 100.5,
        "close": 101.0,
        "ma5": 101.7,
        "ma10": 102.45
      },
      {
        "open": 102.0,
        "high": 102.0,
        "low": 99.1,
        "close": 99.5,
        "ma5": 101.2,
        "ma10": 101.85
      },
      {
        "open": 98.3,
        "high": 99.1,
        "low": 98.1,
        "close": 98.6,
        "ma5": 100.32,
        "ma10": 101.21
      }
    ],
    "symbol": "4904.TW",
    "maxVol10d": 10553,
    "hasVolumeBurst": false
  },
  {
    "code": "3045",
    "name": "台灣大",
    "categories": [
      "0050"
    ],
    "price": 108.0,
    "prevClose": 108.5,
    "open": 108.5,
    "high": 108.5,
    "low": 107.5,
    "volume": 7437,
    "ma5": 109.1,
    "ma10": 110.1,
    "ma20": 111.53,
    "ma60": 113.95,
    "vMa5": 10722,
    "vMa10": 9323,
    "high20d": 115.0,
    "sparkline": [
      112.0,
      111.0,
      110.5,
      110.5,
      111.5,
      110.5,
      109.5,
      109.5,
      108.5,
      108.0
    ],
    "high5d": 111.5,
    "high10d": 114.0,
    "k3d": [
      {
        "open": 110.5,
        "high": 110.5,
        "low": 109.0,
        "close": 109.5,
        "ma5": 110.5,
        "ma10": 111.55
      },
      {
        "open": 109.5,
        "high": 110.0,
        "low": 109.0,
        "close": 109.5,
        "ma5": 110.3,
        "ma10": 111.15
      },
      {
        "open": 109.0,
        "high": 109.5,
        "low": 108.0,
        "close": 108.5,
        "ma5": 109.9,
        "ma10": 110.6
      }
    ],
    "k5d": [
      {
        "open": 111.5,
        "high": 111.5,
        "low": 109.5,
        "close": 110.5,
        "ma5": 110.8,
        "ma10": 112.0
      },
      {
        "open": 110.5,
        "high": 110.5,
        "low": 109.0,
        "close": 109.5,
        "ma5": 110.5,
        "ma10": 111.55
      },
      {
        "open": 109.5,
        "high": 110.0,
        "low": 109.0,
        "close": 109.5,
        "ma5": 110.3,
        "ma10": 111.15
      },
      {
        "open": 109.0,
        "high": 109.5,
        "low": 108.0,
        "close": 108.5,
        "ma5": 109.9,
        "ma10": 110.6
      },
      {
        "open": 108.5,
        "high": 108.5,
        "low": 107.5,
        "close": 107.5,
        "ma5": 109.1,
        "ma10": 110.1
      }
    ],
    "symbol": "3045.TW",
    "maxVol10d": 15538,
    "hasVolumeBurst": true
  },
  {
    "code": "00403A",
    "name": "主動統一升級50",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 10.35,
    "prevClose": 10.3,
    "open": 10.4,
    "high": 10.42,
    "low": 10.33,
    "volume": 274703,
    "ma5": 10.01,
    "ma10": 9.79,
    "ma20": 9.58,
    "ma60": 10.27,
    "vMa5": 205122,
    "vMa10": 264965,
    "high20d": 10.44,
    "sparkline": [
      9.25,
      9.39,
      9.54,
      9.81,
      9.91,
      9.72,
      9.9,
      9.94,
      10.1,
      10.35
    ],
    "high5d": 10.42,
    "high10d": 10.42,
    "k3d": [
      {
        "open": 9.87,
        "high": 9.99,
        "low": 9.85,
        "close": 9.9,
        "ma5": 9.78,
        "ma10": 9.35
      },
      {
        "open": 9.87,
        "high": 9.96,
        "low": 9.8,
        "close": 9.94,
        "ma5": 9.86,
        "ma10": 9.44
      },
      {
        "open": 10.26,
        "high": 10.38,
        "low": 10.22,
        "close": 10.3,
        "ma5": 9.95,
        "ma10": 9.62
      }
    ],
    "k5d": [
      {
        "open": 9.92,
        "high": 9.93,
        "low": 9.66,
        "close": 9.72,
        "ma5": 9.67,
        "ma10": 9.32
      },
      {
        "open": 9.87,
        "high": 9.99,
        "low": 9.85,
        "close": 9.9,
        "ma5": 9.78,
        "ma10": 9.35
      },
      {
        "open": 9.87,
        "high": 9.96,
        "low": 9.8,
        "close": 9.94,
        "ma5": 9.86,
        "ma10": 9.44
      },
      {
        "open": 9.96,
        "high": 10.12,
        "low": 9.96,
        "close": 10.1,
        "ma5": 9.91,
        "ma10": 9.6
      },
      {
        "open": 10.4,
        "high": 10.42,
        "low": 10.33,
        "close": 10.38,
        "ma5": 10.01,
        "ma10": 9.79
      }
    ],
    "symbol": "00403A.TW",
    "maxVol10d": 546366,
    "hasVolumeBurst": true
  },
  {
    "code": "00685L",
    "name": "群益臺灣加權正2",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 11.86,
    "prevClose": 11.91,
    "open": 12.04,
    "high": 12.05,
    "low": 11.85,
    "volume": 135090,
    "ma5": 11.46,
    "ma10": 11.14,
    "ma20": 10.83,
    "ma60": 11.71,
    "vMa5": 199336,
    "vMa10": 280630,
    "high20d": 12.24,
    "sparkline": [
      10.83,
      10.56,
      10.49,
      11.12,
      11.05,
      11.01,
      11.37,
      11.42,
      11.6,
      11.86
    ],
    "high5d": 12.05,
    "high10d": 12.05,
    "k3d": [
      {
        "open": 11.27,
        "high": 11.48,
        "low": 11.23,
        "close": 11.37,
        "ma5": 11.01,
        "ma10": 10.47
      },
      {
        "open": 11.24,
        "high": 11.47,
        "low": 11.16,
        "close": 11.42,
        "ma5": 11.19,
        "ma10": 10.62
      },
      {
        "open": 11.97,
        "high": 11.99,
        "low": 11.8,
        "close": 11.91,
        "ma5": 11.35,
        "ma10": 10.89
      }
    ],
    "k5d": [
      {
        "open": 11.22,
        "high": 11.23,
        "low": 10.86,
        "close": 11.01,
        "ma5": 10.85,
        "ma10": 10.43
      },
      {
        "open": 11.27,
        "high": 11.48,
        "low": 11.23,
        "close": 11.37,
        "ma5": 11.01,
        "ma10": 10.47
      },
      {
        "open": 11.24,
        "high": 11.47,
        "low": 11.16,
        "close": 11.42,
        "ma5": 11.19,
        "ma10": 10.62
      },
      {
        "open": 11.58,
        "high": 11.65,
        "low": 11.46,
        "close": 11.6,
        "ma5": 11.29,
        "ma10": 10.86
      },
      {
        "open": 12.04,
        "high": 12.05,
        "low": 11.85,
        "close": 11.9,
        "ma5": 11.46,
        "ma10": 11.14
      }
    ],
    "symbol": "00685L.TW",
    "maxVol10d": 601003,
    "hasVolumeBurst": false
  },
  {
    "code": "00631L",
    "name": "元大台灣50正2",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 36.09,
    "prevClose": 36.29,
    "open": 36.59,
    "high": 36.6,
    "low": 36.07,
    "volume": 128119,
    "ma5": 34.98,
    "ma10": 34.14,
    "ma20": 33.22,
    "ma60": 35.57,
    "vMa5": 166461,
    "vMa10": 251038,
    "high20d": 37.32,
    "sparkline": [
      33.7,
      32.62,
      32.15,
      34.15,
      33.85,
      33.68,
      34.7,
      34.87,
      35.45,
      36.09
    ],
    "high5d": 36.6,
    "high10d": 36.6,
    "k3d": [
      {
        "open": 34.45,
        "high": 35.01,
        "low": 34.33,
        "close": 34.7,
        "ma5": 33.71,
        "ma10": 32.24
      },
      {
        "open": 34.51,
        "high": 34.98,
        "low": 34.18,
        "close": 34.87,
        "ma5": 34.25,
        "ma10": 32.66
      },
      {
        "open": 36.47,
        "high": 36.5,
        "low": 35.99,
        "close": 36.29,
        "ma5": 34.68,
        "ma10": 33.44
      }
    ],
    "k5d": [
      {
        "open": 34.34,
        "high": 34.38,
        "low": 33.3,
        "close": 33.68,
        "ma5": 33.29,
        "ma10": 32.12
      },
      {
        "open": 34.45,
        "high": 35.01,
        "low": 34.33,
        "close": 34.7,
        "ma5": 33.71,
        "ma10": 32.24
      },
      {
        "open": 34.51,
        "high": 34.98,
        "low": 34.18,
        "close": 34.87,
        "ma5": 34.25,
        "ma10": 32.66
      },
      {
        "open": 35.08,
        "high": 35.49,
        "low": 34.94,
        "close": 35.45,
        "ma5": 34.51,
        "ma10": 33.36
      },
      {
        "open": 36.59,
        "high": 36.6,
        "low": 36.07,
        "close": 36.21,
        "ma5": 34.98,
        "ma10": 34.14
      }
    ],
    "symbol": "00631L.TW",
    "maxVol10d": 565228,
    "hasVolumeBurst": false
  },
  {
    "code": "2324",
    "name": "仁寶",
    "categories": [
      "Top100"
    ],
    "price": 43.2,
    "prevClose": 39.3,
    "open": 40.3,
    "high": 43.2,
    "low": 40.3,
    "volume": 359446,
    "ma5": 39.0,
    "ma10": 37.91,
    "ma20": 36.81,
    "ma60": 36.82,
    "vMa5": 158931,
    "vMa10": 98974,
    "high20d": 43.2,
    "sparkline": [
      36.35,
      37.0,
      36.95,
      37.3,
      36.55,
      36.3,
      36.3,
      39.9,
      39.3,
      43.2
    ],
    "high5d": 43.2,
    "high10d": 43.2,
    "k3d": [
      {
        "open": 36.3,
        "high": 36.5,
        "low": 35.65,
        "close": 36.3,
        "ma5": 36.68,
        "ma10": 36.13
      },
      {
        "open": 36.75,
        "high": 39.9,
        "low": 36.6,
        "close": 39.9,
        "ma5": 37.27,
        "ma10": 36.64
      },
      {
        "open": 40.1,
        "high": 41.7,
        "low": 39.1,
        "close": 39.3,
        "ma5": 37.67,
        "ma10": 37.19
      }
    ],
    "k5d": [
      {
        "open": 36.75,
        "high": 36.85,
        "low": 35.85,
        "close": 36.3,
        "ma5": 36.82,
        "ma10": 35.97
      },
      {
        "open": 36.3,
        "high": 36.5,
        "low": 35.65,
        "close": 36.3,
        "ma5": 36.68,
        "ma10": 36.13
      },
      {
        "open": 36.75,
        "high": 39.9,
        "low": 36.6,
        "close": 39.9,
        "ma5": 37.27,
        "ma10": 36.64
      },
      {
        "open": 40.1,
        "high": 41.7,
        "low": 39.1,
        "close": 39.3,
        "ma5": 37.67,
        "ma10": 37.19
      },
      {
        "open": 40.3,
        "high": 43.2,
        "low": 40.3,
        "close": 43.2,
        "ma5": 39.0,
        "ma10": 37.91
      }
    ],
    "symbol": "2324.TW",
    "maxVol10d": 359446,
    "hasVolumeBurst": true
  },
  {
    "code": "00981A",
    "name": "主動統一台股增長",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 30.3,
    "prevClose": 29.95,
    "open": 30.29,
    "high": 30.53,
    "low": 30.09,
    "volume": 216292,
    "ma5": 29.0,
    "ma10": 28.31,
    "ma20": 27.42,
    "ma60": 29.64,
    "vMa5": 167526,
    "vMa10": 282783,
    "high20d": 30.53,
    "sparkline": [
      26.13,
      27.11,
      27.58,
      28.46,
      28.84,
      28.03,
      28.53,
      28.73,
      29.34,
      30.3
    ],
    "high5d": 30.53,
    "high10d": 30.53,
    "k3d": [
      {
        "open": 28.44,
        "high": 28.88,
        "low": 28.35,
        "close": 28.53,
        "ma5": 28.29,
        "ma10": 26.77
      },
      {
        "open": 28.46,
        "high": 28.75,
        "low": 28.21,
        "close": 28.73,
        "ma5": 28.52,
        "ma10": 27.1
      },
      {
        "open": 29.96,
        "high": 30.18,
        "low": 29.68,
        "close": 29.95,
        "ma5": 28.82,
        "ma10": 27.71
      }
    ],
    "k5d": [
      {
        "open": 28.92,
        "high": 28.92,
        "low": 27.86,
        "close": 28.03,
        "ma5": 28.0,
        "ma10": 26.67
      },
      {
        "open": 28.44,
        "high": 28.88,
        "low": 28.35,
        "close": 28.53,
        "ma5": 28.29,
        "ma10": 26.77
      },
      {
        "open": 28.46,
        "high": 28.75,
        "low": 28.21,
        "close": 28.73,
        "ma5": 28.52,
        "ma10": 27.1
      },
      {
        "open": 28.89,
        "high": 29.36,
        "low": 28.89,
        "close": 29.34,
        "ma5": 28.69,
        "ma10": 27.65
      },
      {
        "open": 30.29,
        "high": 30.53,
        "low": 30.09,
        "close": 30.37,
        "ma5": 29.0,
        "ma10": 28.31
      }
    ],
    "symbol": "00981A.TW",
    "maxVol10d": 871839,
    "hasVolumeBurst": true
  },
  {
    "code": "00632R",
    "name": "元大台灣50反1",
    "categories": [
      "Top100"
    ],
    "price": 9.97,
    "prevClose": 9.95,
    "open": 9.9,
    "high": 9.98,
    "low": 9.89,
    "volume": 97759,
    "ma5": 10.14,
    "ma10": 10.3,
    "ma20": 10.55,
    "ma60": 10.38,
    "vMa5": 123443,
    "vMa10": 209634,
    "high20d": 11.67,
    "sparkline": [
      10.44,
      10.6,
      10.63,
      10.3,
      10.33,
      10.35,
      10.17,
      10.16,
      10.06,
      9.97
    ],
    "high5d": 10.41,
    "high10d": 10.78,
    "k3d": [
      {
        "open": 10.22,
        "high": 10.26,
        "low": 10.13,
        "close": 10.17,
        "ma5": 10.36,
        "ma10": 10.68
      },
      {
        "open": 10.24,
        "high": 10.27,
        "low": 10.14,
        "close": 10.16,
        "ma5": 10.26,
        "ma10": 10.59
      },
      {
        "open": 9.92,
        "high": 10.0,
        "low": 9.91,
        "close": 9.95,
        "ma5": 10.19,
        "ma10": 10.44
      }
    ],
    "k5d": [
      {
        "open": 10.26,
        "high": 10.41,
        "low": 10.24,
        "close": 10.35,
        "ma5": 10.44,
        "ma10": 10.72
      },
      {
        "open": 10.22,
        "high": 10.26,
        "low": 10.13,
        "close": 10.17,
        "ma5": 10.36,
        "ma10": 10.68
      },
      {
        "open": 10.24,
        "high": 10.27,
        "low": 10.14,
        "close": 10.16,
        "ma5": 10.26,
        "ma10": 10.59
      },
      {
        "open": 10.12,
        "high": 10.15,
        "low": 10.05,
        "close": 10.06,
        "ma5": 10.21,
        "ma10": 10.45
      },
      {
        "open": 9.9,
        "high": 9.98,
        "low": 9.89,
        "close": 9.95,
        "ma5": 10.14,
        "ma10": 10.3
      }
    ],
    "symbol": "00632R.TW",
    "maxVol10d": 399798,
    "hasVolumeBurst": false
  },
  {
    "code": "2337",
    "name": "旺宏",
    "categories": [
      "Top100"
    ],
    "price": 135.5,
    "prevClose": 136.5,
    "open": 140.5,
    "high": 144.5,
    "low": 136.5,
    "volume": 71808,
    "ma5": 135.1,
    "ma10": 127.4,
    "ma20": 121.79,
    "ma60": 142.56,
    "vMa5": 108313,
    "vMa10": 111309,
    "high20d": 144.5,
    "sparkline": [
      110.5,
      120.0,
      117.5,
      129.0,
      121.5,
      133.5,
      132.5,
      136.5,
      136.5,
      135.5
    ],
    "high5d": 144.5,
    "high10d": 144.5,
    "k3d": [
      {
        "open": 134.0,
        "high": 139.0,
        "low": 129.0,
        "close": 132.5,
        "ma5": 126.8,
        "ma10": 115.88
      },
      {
        "open": 135.0,
        "high": 140.0,
        "low": 134.5,
        "close": 136.5,
        "ma5": 130.6,
        "ma10": 119.33
      },
      {
        "open": 140.0,
        "high": 141.5,
        "low": 136.0,
        "close": 136.5,
        "ma5": 132.1,
        "ma10": 123.8
      }
    ],
    "k5d": [
      {
        "open": 124.0,
        "high": 133.5,
        "low": 123.0,
        "close": 133.5,
        "ma5": 124.3,
        "ma10": 113.93
      },
      {
        "open": 134.0,
        "high": 139.0,
        "low": 129.0,
        "close": 132.5,
        "ma5": 126.8,
        "ma10": 115.88
      },
      {
        "open": 135.0,
        "high": 140.0,
        "low": 134.5,
        "close": 136.5,
        "ma5": 130.6,
        "ma10": 119.33
      },
      {
        "open": 140.0,
        "high": 141.5,
        "low": 136.0,
        "close": 136.5,
        "ma5": 132.1,
        "ma10": 123.8
      },
      {
        "open": 140.5,
        "high": 144.5,
        "low": 136.5,
        "close": 136.5,
        "ma5": 135.1,
        "ma10": 127.4
      }
    ],
    "symbol": "2337.TW",
    "maxVol10d": 172045,
    "hasVolumeBurst": true
  },
  {
    "code": "1605",
    "name": "華新",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 38.75,
    "prevClose": 39.3,
    "open": 40.0,
    "high": 40.5,
    "low": 38.75,
    "volume": 27100,
    "ma5": 38.91,
    "ma10": 36.47,
    "ma20": 34.11,
    "ma60": 36.01,
    "vMa5": 60454,
    "vMa10": 41712,
    "high20d": 41.0,
    "sparkline": [
      32.8,
      33.75,
      34.85,
      34.25,
      34.55,
      38.0,
      38.3,
      40.0,
      39.3,
      38.75
    ],
    "high5d": 41.0,
    "high10d": 41.0,
    "k3d": [
      {
        "open": 37.9,
        "high": 38.85,
        "low": 37.05,
        "close": 38.3,
        "ma5": 35.99,
        "ma10": 33.59
      },
      {
        "open": 38.5,
        "high": 41.0,
        "low": 38.3,
        "close": 40.0,
        "ma5": 37.02,
        "ma10": 34.65
      },
      {
        "open": 40.3,
        "high": 41.0,
        "low": 39.15,
        "close": 39.3,
        "ma5": 38.03,
        "ma10": 35.72
      }
    ],
    "k5d": [
      {
        "open": 35.95,
        "high": 38.0,
        "low": 35.95,
        "close": 38.0,
        "ma5": 35.08,
        "ma10": 32.82
      },
      {
        "open": 37.9,
        "high": 38.85,
        "low": 37.05,
        "close": 38.3,
        "ma5": 35.99,
        "ma10": 33.59
      },
      {
        "open": 38.5,
        "high": 41.0,
        "low": 38.3,
        "close": 40.0,
        "ma5": 37.02,
        "ma10": 34.65
      },
      {
        "open": 40.3,
        "high": 41.0,
        "low": 39.15,
        "close": 39.3,
        "ma5": 38.03,
        "ma10": 35.72
      },
      {
        "open": 40.0,
        "high": 40.5,
        "low": 38.75,
        "close": 38.95,
        "ma5": 38.91,
        "ma10": 36.47
      }
    ],
    "symbol": "1605.TW",
    "maxVol10d": 93858,
    "hasVolumeBurst": true
  },
  {
    "code": "8150",
    "name": "南茂",
    "categories": [
      "Top100"
    ],
    "price": 91.2,
    "prevClose": 92.9,
    "open": 94.5,
    "high": 95.5,
    "low": 91.5,
    "volume": 27058,
    "ma5": 93.76,
    "ma10": 88.86,
    "ma20": 88.35,
    "ma60": 97.31,
    "vMa5": 64691,
    "vMa10": 51419,
    "high20d": 125.0,
    "sparkline": [
      77.6,
      82.5,
      86.5,
      86.9,
      86.3,
      92.9,
      99.0,
      92.2,
      92.9,
      91.2
    ],
    "high5d": 99.4,
    "high10d": 99.4,
    "k3d": [
      {
        "open": 93.1,
        "high": 99.4,
        "low": 91.0,
        "close": 99.0,
        "ma5": 90.32,
        "ma10": 82.32
      },
      {
        "open": 96.6,
        "high": 97.4,
        "low": 92.0,
        "close": 92.2,
        "ma5": 91.46,
        "ma10": 84.25
      },
      {
        "open": 93.5,
        "high": 98.5,
        "low": 92.8,
        "close": 92.9,
        "ma5": 92.66,
        "ma10": 86.94
      }
    ],
    "k5d": [
      {
        "open": 89.4,
        "high": 94.2,
        "low": 89.4,
        "close": 92.9,
        "ma5": 87.02,
        "ma10": 80.52
      },
      {
        "open": 93.1,
        "high": 99.4,
        "low": 91.0,
        "close": 99.0,
        "ma5": 90.32,
        "ma10": 82.32
      },
      {
        "open": 96.6,
        "high": 97.4,
        "low": 92.0,
        "close": 92.2,
        "ma5": 91.46,
        "ma10": 84.25
      },
      {
        "open": 93.5,
        "high": 98.5,
        "low": 92.8,
        "close": 92.9,
        "ma5": 92.66,
        "ma10": 86.94
      },
      {
        "open": 94.5,
        "high": 95.5,
        "low": 91.5,
        "close": 91.8,
        "ma5": 93.76,
        "ma10": 88.86
      }
    ],
    "symbol": "8150.TW",
    "maxVol10d": 100047,
    "hasVolumeBurst": true
  },
  {
    "code": "009816",
    "name": "凱基台灣TOP50",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 15.55,
    "prevClose": 15.52,
    "open": 15.61,
    "high": 15.65,
    "low": 15.53,
    "volume": 73281,
    "ma5": 15.2,
    "ma10": 14.98,
    "ma20": 14.66,
    "ma60": 15.05,
    "vMa5": 79412,
    "vMa10": 130737,
    "high20d": 15.65,
    "sparkline": [
      14.65,
      14.61,
      14.56,
      15.0,
      14.96,
      14.88,
      15.12,
      15.16,
      15.26,
      15.55
    ],
    "high5d": 15.65,
    "high10d": 15.65,
    "k3d": [
      {
        "open": 15.05,
        "high": 15.2,
        "low": 15.04,
        "close": 15.12,
        "ma5": 14.9,
        "ma10": 14.45
      },
      {
        "open": 15.05,
        "high": 15.18,
        "low": 14.96,
        "close": 15.16,
        "ma5": 15.02,
        "ma10": 14.57
      },
      {
        "open": 15.49,
        "high": 15.56,
        "low": 15.42,
        "close": 15.52,
        "ma5": 15.13,
        "ma10": 14.79
      }
    ],
    "k5d": [
      {
        "open": 15.05,
        "high": 15.06,
        "low": 14.78,
        "close": 14.88,
        "ma5": 14.8,
        "ma10": 14.4
      },
      {
        "open": 15.05,
        "high": 15.2,
        "low": 15.04,
        "close": 15.12,
        "ma5": 14.9,
        "ma10": 14.45
      },
      {
        "open": 15.05,
        "high": 15.18,
        "low": 14.96,
        "close": 15.16,
        "ma5": 15.02,
        "ma10": 14.57
      },
      {
        "open": 15.21,
        "high": 15.28,
        "low": 15.17,
        "close": 15.26,
        "ma5": 15.08,
        "ma10": 14.76
      },
      {
        "open": 15.61,
        "high": 15.65,
        "low": 15.53,
        "close": 15.57,
        "ma5": 15.2,
        "ma10": 14.98
      }
    ],
    "symbol": "009816.TW",
    "maxVol10d": 282825,
    "hasVolumeBurst": false
  },
  {
    "code": "00405A",
    "name": "主動富邦台灣龍耀",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 8.71,
    "prevClose": 8.62,
    "open": 8.7,
    "high": 8.76,
    "low": 8.67,
    "volume": 71305,
    "ma5": 8.29,
    "ma10": 8.06,
    "ma20": 7.85,
    "ma60": 8.78,
    "vMa5": 64304,
    "vMa10": 101626,
    "high20d": 8.76,
    "sparkline": [
      7.3,
      7.66,
      7.9,
      8.05,
      8.25,
      8.02,
      8.13,
      8.15,
      8.42,
      8.71
    ],
    "high5d": 8.76,
    "high10d": 8.76,
    "k3d": [
      {
        "open": 8.11,
        "high": 8.25,
        "low": 8.07,
        "close": 8.13,
        "ma5": 8.07,
        "ma10": 7.6
      },
      {
        "open": 8.05,
        "high": 8.17,
        "low": 7.99,
        "close": 8.15,
        "ma5": 8.12,
        "ma10": 7.68
      },
      {
        "open": 8.6,
        "high": 8.67,
        "low": 8.52,
        "close": 8.62,
        "ma5": 8.23,
        "ma10": 7.88
      }
    ],
    "k5d": [
      {
        "open": 8.26,
        "high": 8.27,
        "low": 7.99,
        "close": 8.02,
        "ma5": 7.98,
        "ma10": 7.58
      },
      {
        "open": 8.11,
        "high": 8.25,
        "low": 8.07,
        "close": 8.13,
        "ma5": 8.07,
        "ma10": 7.6
      },
      {
        "open": 8.05,
        "high": 8.17,
        "low": 7.99,
        "close": 8.15,
        "ma5": 8.12,
        "ma10": 7.68
      },
      {
        "open": 8.24,
        "high": 8.42,
        "low": 8.22,
        "close": 8.42,
        "ma5": 8.19,
        "ma10": 7.86
      },
      {
        "open": 8.7,
        "high": 8.76,
        "low": 8.67,
        "close": 8.73,
        "ma5": 8.29,
        "ma10": 8.06
      }
    ],
    "symbol": "00405A.TW",
    "maxVol10d": 184404,
    "hasVolumeBurst": false
  },
  {
    "code": "00991A",
    "name": "主動復華未來50",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 18.3,
    "prevClose": 18.19,
    "open": 18.37,
    "high": 18.47,
    "low": 18.23,
    "volume": 82780,
    "ma5": 17.57,
    "ma10": 16.96,
    "ma20": 16.51,
    "ma60": 18.58,
    "vMa5": 91147,
    "vMa10": 199579,
    "high20d": 19.2,
    "sparkline": [
      15.41,
      15.98,
      16.33,
      16.89,
      17.16,
      16.86,
      17.33,
      17.52,
      17.79,
      18.3
    ],
    "high5d": 18.47,
    "high10d": 18.47,
    "k3d": [
      {
        "open": 17.26,
        "high": 17.56,
        "low": 17.22,
        "close": 17.33,
        "ma5": 16.91,
        "ma10": 15.91
      },
      {
        "open": 17.22,
        "high": 17.55,
        "low": 17.11,
        "close": 17.52,
        "ma5": 17.15,
        "ma10": 16.16
      },
      {
        "open": 18.16,
        "high": 18.34,
        "low": 18.03,
        "close": 18.19,
        "ma5": 17.41,
        "ma10": 16.57
      }
    ],
    "k5d": [
      {
        "open": 17.25,
        "high": 17.25,
        "low": 16.74,
        "close": 16.86,
        "ma5": 16.64,
        "ma10": 15.83
      },
      {
        "open": 17.26,
        "high": 17.56,
        "low": 17.22,
        "close": 17.33,
        "ma5": 16.91,
        "ma10": 15.91
      },
      {
        "open": 17.22,
        "high": 17.55,
        "low": 17.11,
        "close": 17.52,
        "ma5": 17.15,
        "ma10": 16.16
      },
      {
        "open": 17.67,
        "high": 17.85,
        "low": 17.59,
        "close": 17.79,
        "ma5": 17.33,
        "ma10": 16.53
      },
      {
        "open": 18.37,
        "high": 18.47,
        "low": 18.23,
        "close": 18.36,
        "ma5": 17.57,
        "ma10": 16.96
      }
    ],
    "symbol": "00991A.TW",
    "maxVol10d": 789052,
    "hasVolumeBurst": true
  },
  {
    "code": "00407A",
    "name": "主動凱基台灣",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 9.94,
    "prevClose": 9.83,
    "open": 9.93,
    "high": 10.01,
    "low": 9.89,
    "volume": 100490,
    "ma5": 9.59,
    "ma10": 9.29,
    "ma20": 8.95,
    "ma60": 9.35,
    "vMa5": 63924,
    "vMa10": 60701,
    "high20d": 10.01,
    "sparkline": [
      8.48,
      8.74,
      8.99,
      9.28,
      9.45,
      9.28,
      9.49,
      9.55,
      9.66,
      9.94
    ],
    "high5d": 10.01,
    "high10d": 10.01,
    "k3d": [
      {
        "open": 9.44,
        "high": 9.59,
        "low": 9.42,
        "close": 9.49,
        "ma5": 9.3,
        "ma10": 8.76
      },
      {
        "open": 9.42,
        "high": 9.55,
        "low": 9.35,
        "close": 9.55,
        "ma5": 9.41,
        "ma10": 8.89
      },
      {
        "open": 9.85,
        "high": 9.92,
        "low": 9.76,
        "close": 9.83,
        "ma5": 9.52,
        "ma10": 9.09
      }
    ],
    "k5d": [
      {
        "open": 9.47,
        "high": 9.48,
        "low": 9.22,
        "close": 9.28,
        "ma5": 9.15,
        "ma10": 8.7
      },
      {
        "open": 9.44,
        "high": 9.59,
        "low": 9.42,
        "close": 9.49,
        "ma5": 9.3,
        "ma10": 8.76
      },
      {
        "open": 9.42,
        "high": 9.55,
        "low": 9.35,
        "close": 9.55,
        "ma5": 9.41,
        "ma10": 8.89
      },
      {
        "open": 9.56,
        "high": 9.68,
        "low": 9.56,
        "close": 9.66,
        "ma5": 9.49,
        "ma10": 9.07
      },
      {
        "open": 9.93,
        "high": 10.01,
        "low": 9.89,
        "close": 9.96,
        "ma5": 9.59,
        "ma10": 9.29
      }
    ],
    "symbol": "00407A.TW",
    "maxVol10d": 100490,
    "hasVolumeBurst": true
  },
  {
    "code": "0050",
    "name": "元大台灣50",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 106.8,
    "prevClose": 106.7,
    "open": 107.1,
    "high": 107.5,
    "low": 106.75,
    "volume": 58564,
    "ma5": 104.78,
    "ma10": 103.65,
    "ma20": 101.68,
    "ma60": 103.81,
    "vMa5": 64829,
    "vMa10": 117337,
    "high20d": 107.5,
    "sparkline": [
      102.85,
      102.0,
      100.65,
      103.8,
      103.3,
      102.85,
      104.25,
      104.6,
      105.2,
      106.8
    ],
    "high5d": 107.5,
    "high10d": 107.5,
    "k3d": [
      {
        "open": 103.9,
        "high": 104.75,
        "low": 103.5,
        "close": 104.25,
        "ma5": 102.97,
        "ma10": 100.41
      },
      {
        "open": 104.05,
        "high": 104.85,
        "low": 103.4,
        "close": 104.6,
        "ma5": 103.76,
        "ma10": 101.15
      },
      {
        "open": 106.55,
        "high": 107.0,
        "low": 106.15,
        "close": 106.7,
        "ma5": 104.34,
        "ma10": 102.45
      }
    ],
    "k5d": [
      {
        "open": 103.8,
        "high": 104.0,
        "low": 102.05,
        "close": 102.85,
        "ma5": 102.52,
        "ma10": 100.12
      },
      {
        "open": 103.9,
        "high": 104.75,
        "low": 103.5,
        "close": 104.25,
        "ma5": 102.97,
        "ma10": 100.41
      },
      {
        "open": 104.05,
        "high": 104.85,
        "low": 103.4,
        "close": 104.6,
        "ma5": 103.76,
        "ma10": 101.15
      },
      {
        "open": 105.0,
        "high": 105.25,
        "low": 104.45,
        "close": 105.2,
        "ma5": 104.04,
        "ma10": 102.3
      },
      {
        "open": 107.1,
        "high": 107.5,
        "low": 106.75,
        "close": 107.0,
        "ma5": 104.78,
        "ma10": 103.65
      }
    ],
    "symbol": "0050.TW",
    "maxVol10d": 335230,
    "hasVolumeBurst": false
  },
  {
    "code": "2377",
    "name": "微星",
    "categories": [
      "Top100"
    ],
    "price": 161.5,
    "prevClose": 168.0,
    "open": 170.5,
    "high": 171.0,
    "low": 161.0,
    "volume": 15894,
    "ma5": 161.6,
    "ma10": 155.85,
    "ma20": 150.03,
    "ma60": 142.18,
    "vMa5": 25852,
    "vMa10": 20492,
    "high20d": 173.5,
    "sparkline": [
      143.0,
      149.5,
      151.0,
      154.0,
      153.0,
      155.0,
      154.0,
      169.0,
      168.0,
      161.5
    ],
    "high5d": 173.5,
    "high10d": 173.5,
    "k3d": [
      {
        "open": 155.0,
        "high": 155.5,
        "low": 152.5,
        "close": 154.0,
        "ma5": 153.4,
        "ma10": 147.5
      },
      {
        "open": 157.0,
        "high": 169.0,
        "low": 152.0,
        "close": 169.0,
        "ma5": 157.0,
        "ma10": 150.65
      },
      {
        "open": 171.0,
        "high": 173.5,
        "low": 162.5,
        "close": 168.0,
        "ma5": 159.8,
        "ma10": 153.85
      }
    ],
    "k5d": [
      {
        "open": 154.5,
        "high": 156.5,
        "low": 154.0,
        "close": 155.0,
        "ma5": 152.5,
        "ma10": 146.0
      },
      {
        "open": 155.0,
        "high": 155.5,
        "low": 152.5,
        "close": 154.0,
        "ma5": 153.4,
        "ma10": 147.5
      },
      {
        "open": 157.0,
        "high": 169.0,
        "low": 152.0,
        "close": 169.0,
        "ma5": 157.0,
        "ma10": 150.65
      },
      {
        "open": 171.0,
        "high": 173.5,
        "low": 162.5,
        "close": 168.0,
        "ma5": 159.8,
        "ma10": 153.85
      },
      {
        "open": 170.5,
        "high": 171.0,
        "low": 161.0,
        "close": 162.0,
        "ma5": 161.6,
        "ma10": 155.85
      }
    ],
    "symbol": "2377.TW",
    "maxVol10d": 50805,
    "hasVolumeBurst": true
  },
  {
    "code": "00878",
    "name": "國泰永續高股息",
    "categories": [
      "Top100"
    ],
    "price": 33.9,
    "prevClose": 33.78,
    "open": 34.09,
    "high": 34.19,
    "low": 33.8,
    "volume": 56860,
    "ma5": 33.42,
    "ma10": 33.07,
    "ma20": 32.48,
    "ma60": 32.38,
    "vMa5": 43721,
    "vMa10": 50309,
    "high20d": 34.19,
    "sparkline": [
      32.43,
      32.57,
      32.57,
      33.15,
      32.84,
      32.81,
      33.4,
      33.47,
      33.52,
      33.9
    ],
    "high5d": 34.19,
    "high10d": 34.19,
    "k3d": [
      {
        "open": 33.04,
        "high": 33.4,
        "low": 32.88,
        "close": 33.4,
        "ma5": 32.95,
        "ma10": 32.29
      },
      {
        "open": 33.33,
        "high": 33.49,
        "low": 33.22,
        "close": 33.47,
        "ma5": 33.13,
        "ma10": 32.49
      },
      {
        "open": 33.9,
        "high": 33.95,
        "low": 33.69,
        "close": 33.78,
        "ma5": 33.26,
        "ma10": 32.78
      }
    ],
    "k5d": [
      {
        "open": 32.92,
        "high": 33.05,
        "low": 32.65,
        "close": 32.81,
        "ma5": 32.79,
        "ma10": 32.21
      },
      {
        "open": 33.04,
        "high": 33.4,
        "low": 32.88,
        "close": 33.4,
        "ma5": 32.95,
        "ma10": 32.29
      },
      {
        "open": 33.33,
        "high": 33.49,
        "low": 33.22,
        "close": 33.47,
        "ma5": 33.13,
        "ma10": 32.49
      },
      {
        "open": 33.58,
        "high": 33.79,
        "low": 33.41,
        "close": 33.52,
        "ma5": 33.21,
        "ma10": 32.75
      },
      {
        "open": 34.09,
        "high": 34.19,
        "low": 33.8,
        "close": 33.91,
        "ma5": 33.42,
        "ma10": 33.07
      }
    ],
    "symbol": "00878.TW",
    "maxVol10d": 66957,
    "hasVolumeBurst": false
  },
  {
    "code": "1717",
    "name": "長興",
    "categories": [
      "SitcaBuy"
    ],
    "price": 72.3,
    "prevClose": 78.2,
    "open": 79.1,
    "high": 79.2,
    "low": 72.6,
    "volume": 23428,
    "ma5": 74.28,
    "ma10": 69.56,
    "ma20": 64.76,
    "ma60": 71.56,
    "vMa5": 25393,
    "vMa10": 16500,
    "high20d": 79.8,
    "sparkline": [
      61.7,
      63.6,
      66.5,
      66.2,
      66.2,
      70.0,
      71.9,
      78.6,
      78.2,
      72.3
    ],
    "high5d": 79.8,
    "high10d": 79.8,
    "k3d": [
      {
        "open": 69.5,
        "high": 73.5,
        "low": 68.9,
        "close": 71.9,
        "ma5": 68.16,
        "ma10": 63.65
      },
      {
        "open": 72.5,
        "high": 79.0,
        "low": 72.3,
        "close": 78.6,
        "ma5": 70.58,
        "ma10": 66.03
      },
      {
        "open": 78.7,
        "high": 79.8,
        "low": 77.4,
        "close": 78.2,
        "ma5": 72.98,
        "ma10": 68.28
      }
    ],
    "k5d": [
      {
        "open": 67.7,
        "high": 70.5,
        "low": 67.1,
        "close": 70.0,
        "ma5": 66.5,
        "ma10": 62.24
      },
      {
        "open": 69.5,
        "high": 73.5,
        "low": 68.9,
        "close": 71.9,
        "ma5": 68.16,
        "ma10": 63.65
      },
      {
        "open": 72.5,
        "high": 79.0,
        "low": 72.3,
        "close": 78.6,
        "ma5": 70.58,
        "ma10": 66.03
      },
      {
        "open": 78.7,
        "high": 79.8,
        "low": 77.4,
        "close": 78.2,
        "ma5": 72.98,
        "ma10": 68.28
      },
      {
        "open": 79.1,
        "high": 79.2,
        "low": 72.6,
        "close": 72.7,
        "ma5": 74.28,
        "ma10": 69.56
      }
    ],
    "symbol": "1717.TW",
    "maxVol10d": 44183,
    "hasVolumeBurst": true
  },
  {
    "code": "00400A",
    "name": "主動國泰動能高息",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 14.84,
    "prevClose": 14.73,
    "open": 14.87,
    "high": 14.94,
    "low": 14.8,
    "volume": 36877,
    "ma5": 14.19,
    "ma10": 13.83,
    "ma20": 13.41,
    "ma60": 14.18,
    "vMa5": 31674,
    "vMa10": 44888,
    "high20d": 14.94,
    "sparkline": [
      12.94,
      13.25,
      13.57,
      13.69,
      13.89,
      13.74,
      13.94,
      14.0,
      14.36,
      14.84
    ],
    "high5d": 14.94,
    "high10d": 14.94,
    "k3d": [
      {
        "open": 13.98,
        "high": 14.12,
        "low": 13.88,
        "close": 13.94,
        "ma5": 13.77,
        "ma10": 13.12
      },
      {
        "open": 13.88,
        "high": 14.04,
        "low": 13.8,
        "close": 14.0,
        "ma5": 13.85,
        "ma10": 13.27
      },
      {
        "open": 14.68,
        "high": 14.8,
        "low": 14.59,
        "close": 14.73,
        "ma5": 14.06,
        "ma10": 13.56
      }
    ],
    "k5d": [
      {
        "open": 14.05,
        "high": 14.05,
        "low": 13.65,
        "close": 13.74,
        "ma5": 13.63,
        "ma10": 13.07
      },
      {
        "open": 13.98,
        "high": 14.12,
        "low": 13.88,
        "close": 13.94,
        "ma5": 13.77,
        "ma10": 13.12
      },
      {
        "open": 13.88,
        "high": 14.04,
        "low": 13.8,
        "close": 14.0,
        "ma5": 13.85,
        "ma10": 13.27
      },
      {
        "open": 14.1,
        "high": 14.37,
        "low": 14.1,
        "close": 14.36,
        "ma5": 13.99,
        "ma10": 13.52
      },
      {
        "open": 14.87,
        "high": 14.94,
        "low": 14.8,
        "close": 14.89,
        "ma5": 14.19,
        "ma10": 13.83
      }
    ],
    "symbol": "00400A.TW",
    "maxVol10d": 102713,
    "hasVolumeBurst": false
  },
  {
    "code": "1718",
    "name": "中纖",
    "categories": [
      "Top100"
    ],
    "price": 10.95,
    "prevClose": 11.0,
    "open": 10.9,
    "high": 11.05,
    "low": 10.65,
    "volume": 17142,
    "ma5": 10.72,
    "ma10": 10.33,
    "ma20": 10.54,
    "ma60": 10.63,
    "vMa5": 37370,
    "vMa10": 41569,
    "high20d": 14.95,
    "sparkline": [
      9.6,
      9.99,
      9.99,
      10.2,
      9.91,
      10.25,
      10.2,
      11.2,
      11.0,
      10.95
    ],
    "high5d": 11.45,
    "high10d": 11.45,
    "k3d": [
      {
        "open": 10.2,
        "high": 10.35,
        "low": 10.15,
        "close": 10.2,
        "ma5": 10.11,
        "ma10": 9.67
      },
      {
        "open": 10.3,
        "high": 11.2,
        "low": 10.3,
        "close": 11.2,
        "ma5": 10.35,
        "ma10": 9.87
      },
      {
        "open": 11.35,
        "high": 11.45,
        "low": 10.75,
        "close": 11.0,
        "ma5": 10.51,
        "ma10": 10.11
      }
    ],
    "k5d": [
      {
        "open": 10.0,
        "high": 10.4,
        "low": 9.94,
        "close": 10.25,
        "ma5": 10.07,
        "ma10": 9.62
      },
      {
        "open": 10.2,
        "high": 10.35,
        "low": 10.15,
        "close": 10.2,
        "ma5": 10.11,
        "ma10": 9.67
      },
      {
        "open": 10.3,
        "high": 11.2,
        "low": 10.3,
        "close": 11.2,
        "ma5": 10.35,
        "ma10": 9.87
      },
      {
        "open": 11.35,
        "high": 11.45,
        "low": 10.75,
        "close": 11.0,
        "ma5": 10.51,
        "ma10": 10.11
      },
      {
        "open": 10.9,
        "high": 11.05,
        "low": 10.65,
        "close": 10.95,
        "ma5": 10.72,
        "ma10": 10.33
      }
    ],
    "symbol": "1718.TW",
    "maxVol10d": 74792,
    "hasVolumeBurst": true
  },
  {
    "code": "00406A",
    "name": "主動中信台灣收益",
    "categories": [
      "Top100"
    ],
    "price": 9.8,
    "prevClose": 9.69,
    "open": 9.74,
    "high": 9.85,
    "low": 9.73,
    "volume": 34166,
    "ma5": 9.47,
    "ma10": 9.23,
    "ma20": 9.05,
    "ma60": 9.64,
    "vMa5": 38747,
    "vMa10": 53118,
    "high20d": 9.85,
    "sparkline": [
      8.59,
      8.81,
      8.97,
      9.27,
      9.35,
      9.23,
      9.37,
      9.4,
      9.53,
      9.8
    ],
    "high5d": 9.85,
    "high10d": 9.85,
    "k3d": [
      {
        "open": 9.39,
        "high": 9.45,
        "low": 9.33,
        "close": 9.37,
        "ma5": 9.24,
        "ma10": 8.82
      },
      {
        "open": 9.37,
        "high": 9.41,
        "low": 9.27,
        "close": 9.4,
        "ma5": 9.32,
        "ma10": 8.91
      },
      {
        "open": 9.69,
        "high": 9.75,
        "low": 9.62,
        "close": 9.69,
        "ma5": 9.41,
        "ma10": 9.07
      }
    ],
    "k5d": [
      {
        "open": 9.38,
        "high": 9.4,
        "low": 9.2,
        "close": 9.23,
        "ma5": 9.13,
        "ma10": 8.8
      },
      {
        "open": 9.39,
        "high": 9.45,
        "low": 9.33,
        "close": 9.37,
        "ma5": 9.24,
        "ma10": 8.82
      },
      {
        "open": 9.37,
        "high": 9.41,
        "low": 9.27,
        "close": 9.4,
        "ma5": 9.32,
        "ma10": 8.91
      },
      {
        "open": 9.43,
        "high": 9.53,
        "low": 9.43,
        "close": 9.53,
        "ma5": 9.38,
        "ma10": 9.06
      },
      {
        "open": 9.74,
        "high": 9.85,
        "low": 9.73,
        "close": 9.82,
        "ma5": 9.47,
        "ma10": 9.23
      }
    ],
    "symbol": "00406A.TW",
    "maxVol10d": 80910,
    "hasVolumeBurst": false
  },
  {
    "code": "00919",
    "name": "群益台灣精選高息",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 30.59,
    "prevClose": 30.41,
    "open": 30.7,
    "high": 30.8,
    "low": 30.51,
    "volume": 51809,
    "ma5": 30.14,
    "ma10": 29.88,
    "ma20": 29.45,
    "ma60": 29.58,
    "vMa5": 44913,
    "vMa10": 51979,
    "high20d": 30.8,
    "sparkline": [
      29.57,
      29.45,
      29.51,
      29.94,
      29.6,
      29.74,
      30.03,
      30.12,
      30.19,
      30.59
    ],
    "high5d": 30.8,
    "high10d": 30.8,
    "k3d": [
      {
        "open": 29.86,
        "high": 30.04,
        "low": 29.68,
        "close": 30.03,
        "ma5": 29.76,
        "ma10": 29.35
      },
      {
        "open": 30.02,
        "high": 30.19,
        "low": 30.01,
        "close": 30.12,
        "ma5": 29.89,
        "ma10": 29.47
      },
      {
        "open": 30.46,
        "high": 30.52,
        "low": 30.32,
        "close": 30.41,
        "ma5": 29.98,
        "ma10": 29.66
      }
    ],
    "k5d": [
      {
        "open": 29.76,
        "high": 29.79,
        "low": 29.57,
        "close": 29.74,
        "ma5": 29.65,
        "ma10": 29.3
      },
      {
        "open": 29.86,
        "high": 30.04,
        "low": 29.68,
        "close": 30.03,
        "ma5": 29.76,
        "ma10": 29.35
      },
      {
        "open": 30.02,
        "high": 30.19,
        "low": 30.01,
        "close": 30.12,
        "ma5": 29.89,
        "ma10": 29.47
      },
      {
        "open": 30.33,
        "high": 30.5,
        "low": 30.12,
        "close": 30.19,
        "ma5": 29.94,
        "ma10": 29.64
      },
      {
        "open": 30.7,
        "high": 30.8,
        "low": 30.51,
        "close": 30.6,
        "ma5": 30.14,
        "ma10": 29.88
      }
    ],
    "symbol": "00919.TW",
    "maxVol10d": 82874,
    "hasVolumeBurst": false
  },
  {
    "code": "1802",
    "name": "台玻",
    "categories": [],
    "price": 57.5,
    "prevClose": 56.9,
    "open": 58.2,
    "high": 58.7,
    "low": 56.4,
    "volume": 19014,
    "ma5": 56.58,
    "ma10": 54.43,
    "ma20": 52.28,
    "ma60": 62.62,
    "vMa5": 25711,
    "vMa10": 29586,
    "high20d": 63.9,
    "sparkline": [
      47.55,
      52.3,
      53.9,
      54.6,
      53.1,
      54.7,
      55.9,
      57.6,
      56.9,
      57.5
    ],
    "high5d": 59.8,
    "high10d": 59.8,
    "k3d": [
      {
        "open": 54.7,
        "high": 56.2,
        "low": 54.5,
        "close": 55.9,
        "ma5": 54.44,
        "ma10": 50.44
      },
      {
        "open": 56.8,
        "high": 59.8,
        "low": 56.7,
        "close": 57.6,
        "ma5": 55.18,
        "ma10": 51.79
      },
      {
        "open": 58.6,
        "high": 59.0,
        "low": 56.9,
        "close": 56.9,
        "ma5": 55.64,
        "ma10": 53.23
      }
    ],
    "k5d": [
      {
        "open": 54.3,
        "high": 56.5,
        "low": 54.0,
        "close": 54.7,
        "ma5": 53.72,
        "ma10": 49.66
      },
      {
        "open": 54.7,
        "high": 56.2,
        "low": 54.5,
        "close": 55.9,
        "ma5": 54.44,
        "ma10": 50.44
      },
      {
        "open": 56.8,
        "high": 59.8,
        "low": 56.7,
        "close": 57.6,
        "ma5": 55.18,
        "ma10": 51.79
      },
      {
        "open": 58.6,
        "high": 59.0,
        "low": 56.9,
        "close": 56.9,
        "ma5": 55.64,
        "ma10": 53.23
      },
      {
        "open": 58.2,
        "high": 58.7,
        "low": 56.4,
        "close": 57.8,
        "ma5": 56.58,
        "ma10": 54.43
      }
    ],
    "symbol": "1802.TW",
    "maxVol10d": 41089,
    "hasVolumeBurst": false
  },
  {
    "code": "8112",
    "name": "至上",
    "categories": [
      "MajorBuy"
    ],
    "price": 95.6,
    "prevClose": 97.8,
    "open": 99.3,
    "high": 99.8,
    "low": 96.3,
    "volume": 12518,
    "ma5": 96.74,
    "ma10": 91.67,
    "ma20": 87.16,
    "ma60": 89.57,
    "vMa5": 32201,
    "vMa10": 24468,
    "high20d": 101.5,
    "sparkline": [
      81.4,
      85.2,
      86.2,
      89.0,
      91.2,
      92.4,
      100.0,
      96.9,
      97.8,
      95.6
    ],
    "high5d": 101.5,
    "high10d": 101.5,
    "k3d": [
      {
        "open": 95.0,
        "high": 100.5,
        "low": 94.7,
        "close": 100.0,
        "ma5": 91.76,
        "ma10": 85.8
      },
      {
        "open": 100.0,
        "high": 101.5,
        "low": 96.6,
        "close": 96.9,
        "ma5": 93.9,
        "ma10": 87.82
      },
      {
        "open": 98.5,
        "high": 100.5,
        "low": 97.6,
        "close": 97.8,
        "ma5": 95.66,
        "ma10": 90.04
      }
    ],
    "k5d": [
      {
        "open": 92.9,
        "high": 93.0,
        "low": 91.2,
        "close": 92.4,
        "ma5": 88.8,
        "ma10": 83.62
      },
      {
        "open": 95.0,
        "high": 100.5,
        "low": 94.7,
        "close": 100.0,
        "ma5": 91.76,
        "ma10": 85.8
      },
      {
        "open": 100.0,
        "high": 101.5,
        "low": 96.6,
        "close": 96.9,
        "ma5": 93.9,
        "ma10": 87.82
      },
      {
        "open": 98.5,
        "high": 100.5,
        "low": 97.6,
        "close": 97.8,
        "ma5": 95.66,
        "ma10": 90.04
      },
      {
        "open": 99.3,
        "high": 99.8,
        "low": 96.3,
        "close": 96.6,
        "ma5": 96.74,
        "ma10": 91.67
      }
    ],
    "symbol": "8112.TW",
    "maxVol10d": 71918,
    "hasVolumeBurst": true
  },
  {
    "code": "0056",
    "name": "元大高股息",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 53.45,
    "prevClose": 53.0,
    "open": 53.35,
    "high": 54.0,
    "low": 53.3,
    "volume": 35514,
    "ma5": 52.38,
    "ma10": 51.45,
    "ma20": 50.39,
    "ma60": 51.13,
    "vMa5": 34881,
    "vMa10": 41829,
    "high20d": 54.0,
    "sparkline": [
      49.48,
      49.82,
      50.6,
      51.45,
      51.3,
      51.05,
      52.45,
      52.3,
      52.7,
      53.45
    ],
    "high5d": 54.0,
    "high10d": 54.0,
    "k3d": [
      {
        "open": 51.9,
        "high": 52.45,
        "low": 51.65,
        "close": 52.45,
        "ma5": 51.37,
        "ma10": 49.74
      },
      {
        "open": 52.4,
        "high": 52.4,
        "low": 51.8,
        "close": 52.3,
        "ma5": 51.71,
        "ma10": 50.15
      },
      {
        "open": 53.4,
        "high": 53.5,
        "low": 52.9,
        "close": 53.0,
        "ma5": 52.02,
        "ma10": 50.77
      }
    ],
    "k5d": [
      {
        "open": 51.4,
        "high": 51.5,
        "low": 51.0,
        "close": 51.05,
        "ma5": 50.84,
        "ma10": 49.49
      },
      {
        "open": 51.9,
        "high": 52.45,
        "low": 51.65,
        "close": 52.45,
        "ma5": 51.37,
        "ma10": 49.74
      },
      {
        "open": 52.4,
        "high": 52.4,
        "low": 51.8,
        "close": 52.3,
        "ma5": 51.71,
        "ma10": 50.15
      },
      {
        "open": 52.5,
        "high": 53.05,
        "low": 52.5,
        "close": 52.7,
        "ma5": 51.96,
        "ma10": 50.74
      },
      {
        "open": 53.35,
        "high": 54.0,
        "low": 53.3,
        "close": 53.4,
        "ma5": 52.38,
        "ma10": 51.45
      }
    ],
    "symbol": "0056.TW",
    "maxVol10d": 90890,
    "hasVolumeBurst": true
  },
  {
    "code": "00988A",
    "name": "主動統一全球創新",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 17.45,
    "prevClose": 17.66,
    "open": 17.68,
    "high": 17.68,
    "low": 17.38,
    "volume": 30960,
    "ma5": 16.77,
    "ma10": 16.63,
    "ma20": 16.49,
    "ma60": 19.62,
    "vMa5": 34064,
    "vMa10": 47641,
    "high20d": 19.25,
    "sparkline": [
      16.26,
      16.14,
      16.23,
      17.19,
      16.6,
      16.39,
      16.67,
      16.55,
      16.76,
      17.45
    ],
    "high5d": 17.68,
    "high10d": 17.68,
    "k3d": [
      {
        "open": 16.59,
        "high": 16.74,
        "low": 16.59,
        "close": 16.67,
        "ma5": 16.62,
        "ma10": 15.94
      },
      {
        "open": 16.4,
        "high": 16.58,
        "low": 16.35,
        "close": 16.55,
        "ma5": 16.68,
        "ma10": 16.05
      },
      {
        "open": 17.47,
        "high": 17.68,
        "low": 17.38,
        "close": 17.66,
        "ma5": 16.77,
        "ma10": 16.38
      }
    ],
    "k5d": [
      {
        "open": 16.61,
        "high": 16.62,
        "low": 16.27,
        "close": 16.39,
        "ma5": 16.51,
        "ma10": 15.96
      },
      {
        "open": 16.59,
        "high": 16.74,
        "low": 16.59,
        "close": 16.67,
        "ma5": 16.62,
        "ma10": 15.94
      },
      {
        "open": 16.4,
        "high": 16.58,
        "low": 16.35,
        "close": 16.55,
        "ma5": 16.68,
        "ma10": 16.05
      },
      {
        "open": 16.69,
        "high": 16.79,
        "low": 16.6,
        "close": 16.76,
        "ma5": 16.59,
        "ma10": 16.29
      },
      {
        "open": 17.68,
        "high": 17.68,
        "low": 17.38,
        "close": 17.47,
        "ma5": 16.77,
        "ma10": 16.63
      }
    ],
    "symbol": "00988A.TW",
    "maxVol10d": 96053,
    "hasVolumeBurst": false
  },
  {
    "code": "00881",
    "name": "國泰台灣科技龍頭",
    "categories": [
      "Top100"
    ],
    "price": 55.15,
    "prevClose": 55.0,
    "open": 55.5,
    "high": 55.55,
    "low": 55.05,
    "volume": 42720,
    "ma5": 53.68,
    "ma10": 52.62,
    "ma20": 51.13,
    "ma60": 53.11,
    "vMa5": 38772,
    "vMa10": 35305,
    "high20d": 55.55,
    "sparkline": [
      50.6,
      50.85,
      50.9,
      52.65,
      52.75,
      52.25,
      53.2,
      53.5,
      54.15,
      55.15
    ],
    "high5d": 55.55,
    "high10d": 55.55,
    "k3d": [
      {
        "open": 53.15,
        "high": 53.65,
        "low": 53.05,
        "close": 53.2,
        "ma5": 52.35,
        "ma10": 50.35
      },
      {
        "open": 53.0,
        "high": 53.65,
        "low": 52.7,
        "close": 53.5,
        "ma5": 52.87,
        "ma10": 50.88
      },
      {
        "open": 55.3,
        "high": 55.4,
        "low": 54.7,
        "close": 55.0,
        "ma5": 53.34,
        "ma10": 51.77
      }
    ],
    "k5d": [
      {
        "open": 53.1,
        "high": 53.2,
        "low": 51.9,
        "close": 52.25,
        "ma5": 51.88,
        "ma10": 50.13
      },
      {
        "open": 53.15,
        "high": 53.65,
        "low": 53.05,
        "close": 53.2,
        "ma5": 52.35,
        "ma10": 50.35
      },
      {
        "open": 53.0,
        "high": 53.65,
        "low": 52.7,
        "close": 53.5,
        "ma5": 52.87,
        "ma10": 50.88
      },
      {
        "open": 53.85,
        "high": 54.15,
        "low": 53.6,
        "close": 54.15,
        "ma5": 53.17,
        "ma10": 51.69
      },
      {
        "open": 55.5,
        "high": 55.55,
        "low": 55.05,
        "close": 55.3,
        "ma5": 53.68,
        "ma10": 52.62
      }
    ],
    "symbol": "00881.TW",
    "maxVol10d": 44856,
    "hasVolumeBurst": true
  },
  {
    "code": "00992A",
    "name": "主動群益科技創新",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 17.99,
    "prevClose": 17.78,
    "open": 17.97,
    "high": 18.11,
    "low": 17.85,
    "volume": 40883,
    "ma5": 17.17,
    "ma10": 16.59,
    "ma20": 15.87,
    "ma60": 17.44,
    "vMa5": 33936,
    "vMa10": 51892,
    "high20d": 18.11,
    "sparkline": [
      14.82,
      15.59,
      16.18,
      16.55,
      16.93,
      16.63,
      16.9,
      16.96,
      17.29,
      17.99
    ],
    "high5d": 18.11,
    "high10d": 18.11,
    "k3d": [
      {
        "open": 17.05,
        "high": 17.19,
        "low": 16.84,
        "close": 16.9,
        "ma5": 16.64,
        "ma10": 15.52
      },
      {
        "open": 16.76,
        "high": 17.02,
        "low": 16.63,
        "close": 16.96,
        "ma5": 16.79,
        "ma10": 15.76
      },
      {
        "open": 17.7,
        "high": 17.86,
        "low": 17.6,
        "close": 17.78,
        "ma5": 17.04,
        "ma10": 16.18
      }
    ],
    "k5d": [
      {
        "open": 17.16,
        "high": 17.16,
        "low": 16.53,
        "close": 16.63,
        "ma5": 16.38,
        "ma10": 15.41
      },
      {
        "open": 17.05,
        "high": 17.19,
        "low": 16.84,
        "close": 16.9,
        "ma5": 16.64,
        "ma10": 15.52
      },
      {
        "open": 16.76,
        "high": 17.02,
        "low": 16.63,
        "close": 16.96,
        "ma5": 16.79,
        "ma10": 15.76
      },
      {
        "open": 17.02,
        "high": 17.3,
        "low": 17.02,
        "close": 17.29,
        "ma5": 16.94,
        "ma10": 16.13
      },
      {
        "open": 17.97,
        "high": 18.11,
        "low": 17.85,
        "close": 18.07,
        "ma5": 17.17,
        "ma10": 16.59
      }
    ],
    "symbol": "00992A.TW",
    "maxVol10d": 138252,
    "hasVolumeBurst": true
  },
  {
    "code": "8039",
    "name": "台虹",
    "categories": [
      "MajorBuy"
    ],
    "price": 273.5,
    "prevClose": 249.5,
    "open": 259.5,
    "high": 274.0,
    "low": 246.5,
    "volume": 48623,
    "ma5": 238.5,
    "ma10": 225.65,
    "ma20": 215.4,
    "ma60": 172.58,
    "vMa5": 31745,
    "vMa10": 25160,
    "high20d": 274.0,
    "sparkline": [
      190.5,
      200.0,
      220.0,
      216.0,
      237.5,
      226.0,
      216.0,
      227.0,
      249.5,
      273.5
    ],
    "high5d": 274.0,
    "high10d": 274.0,
    "k3d": [
      {
        "open": 226.0,
        "high": 229.0,
        "low": 215.0,
        "close": 216.0,
        "ma5": 223.1,
        "ma10": 201.3
      },
      {
        "open": 215.0,
        "high": 231.0,
        "low": 210.5,
        "close": 227.0,
        "ma5": 224.5,
        "ma10": 206.45
      },
      {
        "open": 228.0,
        "high": 249.5,
        "low": 227.5,
        "close": 249.5,
        "ma5": 231.2,
        "ma10": 215.6
      }
    ],
    "k5d": [
      {
        "open": 250.0,
        "high": 254.0,
        "low": 224.5,
        "close": 226.0,
        "ma5": 219.9,
        "ma10": 199.15
      },
      {
        "open": 226.0,
        "high": 229.0,
        "low": 215.0,
        "close": 216.0,
        "ma5": 223.1,
        "ma10": 201.3
      },
      {
        "open": 215.0,
        "high": 231.0,
        "low": 210.5,
        "close": 227.0,
        "ma5": 224.5,
        "ma10": 206.45
      },
      {
        "open": 228.0,
        "high": 249.5,
        "low": 227.5,
        "close": 249.5,
        "ma5": 231.2,
        "ma10": 215.6
      },
      {
        "open": 259.5,
        "high": 274.0,
        "low": 246.5,
        "close": 274.0,
        "ma5": 238.5,
        "ma10": 225.65
      }
    ],
    "symbol": "8039.TW",
    "maxVol10d": 48623,
    "hasVolumeBurst": true
  },
  {
    "code": "2464",
    "name": "盟立",
    "categories": [],
    "price": 192.5,
    "prevClose": 196.0,
    "open": 197.0,
    "high": 198.0,
    "low": 189.5,
    "volume": 7130,
    "ma5": 190.5,
    "ma10": 178.35,
    "ma20": 157.88,
    "ma60": 163.24,
    "vMa5": 19116,
    "vMa10": 18311,
    "high20d": 205.0,
    "sparkline": [
      147.5,
      162.0,
      170.0,
      178.0,
      173.5,
      180.0,
      187.5,
      196.5,
      196.0,
      192.5
    ],
    "high5d": 205.0,
    "high10d": 205.0,
    "k3d": [
      {
        "open": 180.0,
        "high": 196.0,
        "low": 176.0,
        "close": 187.5,
        "ma5": 177.8,
        "ma10": 157.85
      },
      {
        "open": 185.5,
        "high": 205.0,
        "low": 185.5,
        "close": 196.5,
        "ma5": 183.1,
        "ma10": 165.2
      },
      {
        "open": 198.0,
        "high": 200.5,
        "low": 192.0,
        "close": 196.0,
        "ma5": 186.7,
        "ma10": 172.55
      }
    ],
    "k5d": [
      {
        "open": 175.0,
        "high": 186.0,
        "low": 173.5,
        "close": 180.0,
        "ma5": 172.7,
        "ma10": 152.2
      },
      {
        "open": 180.0,
        "high": 196.0,
        "low": 176.0,
        "close": 187.5,
        "ma5": 177.8,
        "ma10": 157.85
      },
      {
        "open": 185.5,
        "high": 205.0,
        "low": 185.5,
        "close": 196.5,
        "ma5": 183.1,
        "ma10": 165.2
      },
      {
        "open": 198.0,
        "high": 200.5,
        "low": 192.0,
        "close": 196.0,
        "ma5": 186.7,
        "ma10": 172.55
      },
      {
        "open": 197.0,
        "high": 198.0,
        "low": 189.5,
        "close": 192.5,
        "ma5": 190.5,
        "ma10": 178.35
      }
    ],
    "symbol": "2464.TW",
    "maxVol10d": 28585,
    "hasVolumeBurst": true
  },
  {
    "code": "5904",
    "name": "寶雅*",
    "categories": [
      "Top100"
    ],
    "price": 79.8,
    "prevClose": 81.8,
    "open": 81.7,
    "high": 81.7,
    "low": 79.3,
    "volume": 9821,
    "ma5": 82.08,
    "ma10": 77.04,
    "ma20": 71.86,
    "ma60": 66.18,
    "vMa5": 29480,
    "vMa10": 14740,
    "high20d": 92.3,
    "sparkline": [
      72.0,
      72.0,
      72.0,
      72.0,
      72.0,
      79.2,
      87.1,
      82.5,
      81.8,
      79.8
    ],
    "high5d": 92.3,
    "high10d": 92.3,
    "k3d": [
      {
        "open": 87.1,
        "high": 87.1,
        "low": 84.1,
        "close": 87.1,
        "ma5": 76.46,
        "ma10": 74.23
      },
      {
        "open": 90.6,
        "high": 92.3,
        "low": 82.5,
        "close": 82.5,
        "ma5": 78.56,
        "ma10": 75.28
      },
      {
        "open": 81.5,
        "high": 84.0,
        "low": 77.6,
        "close": 81.8,
        "ma5": 80.52,
        "ma10": 76.26
      }
    ],
    "k5d": [
      {
        "open": 79.2,
        "high": 79.2,
        "low": 79.2,
        "close": 79.2,
        "ma5": 73.44,
        "ma10": 72.31
      },
      {
        "open": 87.1,
        "high": 87.1,
        "low": 84.1,
        "close": 87.1,
        "ma5": 76.46,
        "ma10": 74.23
      },
      {
        "open": 90.6,
        "high": 92.3,
        "low": 82.5,
        "close": 82.5,
        "ma5": 78.56,
        "ma10": 75.28
      },
      {
        "open": 81.5,
        "high": 84.0,
        "low": 77.6,
        "close": 81.8,
        "ma5": 80.52,
        "ma10": 76.26
      },
      {
        "open": 81.7,
        "high": 81.7,
        "low": 79.3,
        "close": 79.8,
        "ma5": 82.08,
        "ma10": 77.04
      }
    ],
    "symbol": "5904.TWO",
    "maxVol10d": 84486,
    "hasVolumeBurst": true
  },
  {
    "code": "6182",
    "name": "合晶",
    "categories": [
      "Top100"
    ],
    "price": 114.0,
    "prevClose": 113.0,
    "open": 116.5,
    "high": 119.5,
    "low": 113.0,
    "volume": 93875,
    "ma5": 103.4,
    "ma10": 101.5,
    "ma20": 106.89,
    "ma60": 115.24,
    "vMa5": 56145,
    "vMa10": 31154,
    "high20d": 184.0,
    "sparkline": [
      88.1,
      96.9,
      104.0,
      108.0,
      101.0,
      93.0,
      94.0,
      103.0,
      113.0,
      114.0
    ],
    "high5d": 119.5,
    "high10d": 119.5,
    "k3d": [
      {
        "open": 93.5,
        "high": 98.0,
        "low": 89.8,
        "close": 94.0,
        "ma5": 100.0,
        "ma10": 95.28
      },
      {
        "open": 94.3,
        "high": 103.0,
        "low": 94.1,
        "close": 103.0,
        "ma5": 99.8,
        "ma10": 96.17
      },
      {
        "open": 107.5,
        "high": 113.0,
        "low": 105.5,
        "close": 113.0,
        "ma5": 100.8,
        "ma10": 99.0
      }
    ],
    "k5d": [
      {
        "open": 101.5,
        "high": 102.5,
        "low": 91.2,
        "close": 93.0,
        "ma5": 100.58,
        "ma10": 96.33
      },
      {
        "open": 93.5,
        "high": 98.0,
        "low": 89.8,
        "close": 94.0,
        "ma5": 100.0,
        "ma10": 95.28
      },
      {
        "open": 94.3,
        "high": 103.0,
        "low": 94.1,
        "close": 103.0,
        "ma5": 99.8,
        "ma10": 96.17
      },
      {
        "open": 107.5,
        "high": 113.0,
        "low": 105.5,
        "close": 113.0,
        "ma5": 100.8,
        "ma10": 99.0
      },
      {
        "open": 116.5,
        "high": 119.5,
        "low": 113.0,
        "close": 114.0,
        "ma5": 103.4,
        "ma10": 101.5
      }
    ],
    "symbol": "6182.TWO",
    "maxVol10d": 93875,
    "hasVolumeBurst": true
  },
  {
    "code": "00937B",
    "name": "群益ESG投等債20+",
    "categories": [
      "Top100"
    ],
    "price": 14.54,
    "prevClose": 14.56,
    "open": 14.58,
    "high": 14.6,
    "low": 14.53,
    "volume": 32939,
    "ma5": 14.57,
    "ma10": 14.61,
    "ma20": 14.64,
    "ma60": 14.82,
    "vMa5": 43404,
    "vMa10": 37280,
    "high20d": 14.84,
    "sparkline": [
      14.57,
      14.62,
      14.73,
      14.73,
      14.61,
      14.65,
      14.55,
      14.56,
      14.56,
      14.54
    ],
    "high5d": 14.65,
    "high10d": 14.76,
    "k3d": [
      {
        "open": 14.55,
        "high": 14.56,
        "low": 14.53,
        "close": 14.55,
        "ma5": 14.65,
        "ma10": 14.63
      },
      {
        "open": 14.56,
        "high": 14.57,
        "low": 14.54,
        "close": 14.56,
        "ma5": 14.62,
        "ma10": 14.61
      },
      {
        "open": 14.56,
        "high": 14.56,
        "low": 14.54,
        "close": 14.56,
        "ma5": 14.59,
        "ma10": 14.62
      }
    ],
    "k5d": [
      {
        "open": 14.61,
        "high": 14.65,
        "low": 14.61,
        "close": 14.65,
        "ma5": 14.67,
        "ma10": 14.64
      },
      {
        "open": 14.55,
        "high": 14.56,
        "low": 14.53,
        "close": 14.55,
        "ma5": 14.65,
        "ma10": 14.63
      },
      {
        "open": 14.56,
        "high": 14.57,
        "low": 14.54,
        "close": 14.56,
        "ma5": 14.62,
        "ma10": 14.61
      },
      {
        "open": 14.56,
        "high": 14.56,
        "low": 14.54,
        "close": 14.56,
        "ma5": 14.59,
        "ma10": 14.62
      },
      {
        "open": 14.58,
        "high": 14.6,
        "low": 14.53,
        "close": 14.54,
        "ma5": 14.57,
        "ma10": 14.61
      }
    ],
    "symbol": "00937B.TWO",
    "maxVol10d": 78473,
    "hasVolumeBurst": true
  },
  {
    "code": "3105",
    "name": "穩懋",
    "categories": [
      "Top100"
    ],
    "price": 381.5,
    "prevClose": 387.0,
    "open": 389.0,
    "high": 389.5,
    "low": 377.5,
    "volume": 10253,
    "ma5": 385.0,
    "ma10": 370.2,
    "ma20": 347.57,
    "ma60": 427.19,
    "vMa5": 24184,
    "vMa10": 22488,
    "high20d": 417.5,
    "sparkline": [
      311.0,
      342.0,
      376.0,
      382.0,
      366.0,
      385.5,
      371.0,
      400.0,
      387.0,
      381.5
    ],
    "high5d": 417.5,
    "high10d": 417.5,
    "k3d": [
      {
        "open": 377.5,
        "high": 382.5,
        "low": 361.5,
        "close": 371.0,
        "ma5": 376.1,
        "ma10": 338.7
      },
      {
        "open": 372.0,
        "high": 408.0,
        "low": 370.5,
        "close": 400.0,
        "ma5": 380.9,
        "ma10": 349.6
      },
      {
        "open": 406.5,
        "high": 417.5,
        "low": 383.0,
        "close": 387.0,
        "ma5": 381.9,
        "ma10": 361.5
      }
    ],
    "k5d": [
      {
        "open": 379.0,
        "high": 401.0,
        "low": 374.0,
        "close": 385.5,
        "ma5": 370.3,
        "ma10": 333.9
      },
      {
        "open": 377.5,
        "high": 382.5,
        "low": 361.5,
        "close": 371.0,
        "ma5": 376.1,
        "ma10": 338.7
      },
      {
        "open": 372.0,
        "high": 408.0,
        "low": 370.5,
        "close": 400.0,
        "ma5": 380.9,
        "ma10": 349.6
      },
      {
        "open": 406.5,
        "high": 417.5,
        "low": 383.0,
        "close": 387.0,
        "ma5": 381.9,
        "ma10": 361.5
      },
      {
        "open": 389.0,
        "high": 389.5,
        "low": 377.5,
        "close": 381.5,
        "ma5": 385.0,
        "ma10": 370.2
      }
    ],
    "symbol": "3105.TWO",
    "maxVol10d": 40586,
    "hasVolumeBurst": true
  },
  {
    "code": "6147",
    "name": "頎邦",
    "categories": [
      "Top100"
    ],
    "price": 162.0,
    "prevClose": 164.5,
    "open": 165.0,
    "high": 166.0,
    "low": 158.5,
    "volume": 16553,
    "ma5": 159.7,
    "ma10": 153.45,
    "ma20": 153.2,
    "ma60": 207.38,
    "vMa5": 25999,
    "vMa10": 26498,
    "high20d": 204.5,
    "sparkline": [
      135.5,
      144.5,
      158.5,
      151.0,
      146.5,
      154.0,
      161.5,
      156.5,
      164.5,
      162.0
    ],
    "high5d": 171.0,
    "high10d": 171.0,
    "k3d": [
      {
        "open": 151.0,
        "high": 166.0,
        "low": 146.5,
        "close": 161.5,
        "ma5": 154.3,
        "ma10": 142.6
      },
      {
        "open": 160.5,
        "high": 163.0,
        "low": 156.0,
        "close": 156.5,
        "ma5": 153.9,
        "ma10": 145.65
      },
      {
        "open": 159.0,
        "high": 171.0,
        "low": 159.0,
        "close": 164.5,
        "ma5": 156.6,
        "ma10": 150.25
      }
    ],
    "k5d": [
      {
        "open": 151.0,
        "high": 158.0,
        "low": 147.0,
        "close": 154.0,
        "ma5": 150.9,
        "ma10": 140.4
      },
      {
        "open": 151.0,
        "high": 166.0,
        "low": 146.5,
        "close": 161.5,
        "ma5": 154.3,
        "ma10": 142.6
      },
      {
        "open": 160.5,
        "high": 163.0,
        "low": 156.0,
        "close": 156.5,
        "ma5": 153.9,
        "ma10": 145.65
      },
      {
        "open": 159.0,
        "high": 171.0,
        "low": 159.0,
        "close": 164.5,
        "ma5": 156.6,
        "ma10": 150.25
      },
      {
        "open": 165.0,
        "high": 166.0,
        "low": 158.5,
        "close": 162.0,
        "ma5": 159.7,
        "ma10": 153.45
      }
    ],
    "symbol": "6147.TWO",
    "maxVol10d": 40897,
    "hasVolumeBurst": false
  },
  {
    "code": "6173",
    "name": "信昌電",
    "categories": [
      "Top100"
    ],
    "price": 212.0,
    "prevClose": 223.5,
    "open": 224.0,
    "high": 224.0,
    "low": 210.0,
    "volume": 14060,
    "ma5": 198.5,
    "ma10": 181.1,
    "ma20": 172.8,
    "ma60": 232.34,
    "vMa5": 19983,
    "vMa10": 12815,
    "high20d": 233.5,
    "sparkline": [
      160.0,
      164.5,
      165.0,
      171.0,
      158.0,
      168.5,
      185.0,
      203.5,
      223.5,
      212.0
    ],
    "high5d": 224.0,
    "high10d": 224.0,
    "k3d": [
      {
        "open": 168.0,
        "high": 185.0,
        "low": 168.0,
        "close": 185.0,
        "ma5": 169.5,
        "ma10": 159.7
      },
      {
        "open": 186.5,
        "high": 203.5,
        "low": 182.5,
        "close": 203.5,
        "ma5": 177.2,
        "ma10": 165.35
      },
      {
        "open": 207.5,
        "high": 223.5,
        "low": 203.5,
        "close": 223.5,
        "ma5": 187.7,
        "ma10": 174.45
      }
    ],
    "k5d": [
      {
        "open": 162.0,
        "high": 172.0,
        "low": 161.5,
        "close": 168.5,
        "ma5": 165.4,
        "ma10": 157.5
      },
      {
        "open": 168.0,
        "high": 185.0,
        "low": 168.0,
        "close": 185.0,
        "ma5": 169.5,
        "ma10": 159.7
      },
      {
        "open": 186.5,
        "high": 203.5,
        "low": 182.5,
        "close": 203.5,
        "ma5": 177.2,
        "ma10": 165.35
      },
      {
        "open": 207.5,
        "high": 223.5,
        "low": 203.5,
        "close": 223.5,
        "ma5": 187.7,
        "ma10": 174.45
      },
      {
        "open": 224.0,
        "high": 224.0,
        "low": 210.0,
        "close": 212.0,
        "ma5": 198.5,
        "ma10": 181.1
      }
    ],
    "symbol": "6173.TWO",
    "maxVol10d": 36396,
    "hasVolumeBurst": true
  },
  {
    "code": "8043",
    "name": "蜜望實",
    "categories": [
      "Top100"
    ],
    "price": 150.0,
    "prevClose": 154.0,
    "open": 156.0,
    "high": 157.0,
    "low": 149.5,
    "volume": 2670,
    "ma5": 146.7,
    "ma10": 140.65,
    "ma20": 137.7,
    "ma60": 162.57,
    "vMa5": 10395,
    "vMa10": 7747,
    "high20d": 162.0,
    "sparkline": [
      139.0,
      137.5,
      135.5,
      135.0,
      126.0,
      134.5,
      147.5,
      147.5,
      154.0,
      150.0
    ],
    "high5d": 162.0,
    "high10d": 162.0,
    "k3d": [
      {
        "open": 134.5,
        "high": 147.5,
        "low": 132.0,
        "close": 147.5,
        "ma5": 135.7,
        "ma10": 131.6
      },
      {
        "open": 147.5,
        "high": 152.0,
        "low": 142.5,
        "close": 147.5,
        "ma5": 138.1,
        "ma10": 134.4
      },
      {
        "open": 151.0,
        "high": 162.0,
        "low": 151.0,
        "close": 154.0,
        "ma5": 141.9,
        "ma10": 138.3
      }
    ],
    "k5d": [
      {
        "open": 128.5,
        "high": 137.5,
        "low": 128.5,
        "close": 134.5,
        "ma5": 133.7,
        "ma10": 130.1
      },
      {
        "open": 134.5,
        "high": 147.5,
        "low": 132.0,
        "close": 147.5,
        "ma5": 135.7,
        "ma10": 131.6
      },
      {
        "open": 147.5,
        "high": 152.0,
        "low": 142.5,
        "close": 147.5,
        "ma5": 138.1,
        "ma10": 134.4
      },
      {
        "open": 151.0,
        "high": 162.0,
        "low": 151.0,
        "close": 154.0,
        "ma5": 141.9,
        "ma10": 138.3
      },
      {
        "open": 156.0,
        "high": 157.0,
        "low": 149.5,
        "close": 150.0,
        "ma5": 146.7,
        "ma10": 140.65
      }
    ],
    "symbol": "8043.TWO",
    "maxVol10d": 19965,
    "hasVolumeBurst": true
  },
  {
    "code": "5328",
    "name": "華容",
    "categories": [
      "Top100"
    ],
    "price": 65.7,
    "prevClose": 68.8,
    "open": 69.0,
    "high": 69.3,
    "low": 65.6,
    "volume": 10112,
    "ma5": 66.04,
    "ma10": 65.36,
    "ma20": 63.91,
    "ma60": 58.06,
    "vMa5": 21140,
    "vMa10": 22199,
    "high20d": 73.0,
    "sparkline": [
      67.4,
      66.4,
      65.9,
      62.9,
      60.8,
      62.5,
      66.0,
      67.2,
      68.8,
      65.7
    ],
    "high5d": 73.0,
    "high10d": 73.0,
    "k3d": [
      {
        "open": 61.8,
        "high": 67.2,
        "low": 61.6,
        "close": 66.0,
        "ma5": 63.62,
        "ma10": 63.85
      },
      {
        "open": 66.7,
        "high": 67.2,
        "low": 65.0,
        "close": 67.2,
        "ma5": 63.88,
        "ma10": 64.12
      },
      {
        "open": 67.2,
        "high": 73.0,
        "low": 67.2,
        "close": 68.8,
        "ma5": 65.06,
        "ma10": 65.17
      }
    ],
    "k5d": [
      {
        "open": 61.0,
        "high": 64.2,
        "low": 61.0,
        "close": 62.5,
        "ma5": 63.7,
        "ma10": 63.38
      },
      {
        "open": 61.8,
        "high": 67.2,
        "low": 61.6,
        "close": 66.0,
        "ma5": 63.62,
        "ma10": 63.85
      },
      {
        "open": 66.7,
        "high": 67.2,
        "low": 65.0,
        "close": 67.2,
        "ma5": 63.88,
        "ma10": 64.12
      },
      {
        "open": 67.2,
        "high": 73.0,
        "low": 67.2,
        "close": 68.8,
        "ma5": 65.06,
        "ma10": 65.17
      },
      {
        "open": 69.0,
        "high": 69.3,
        "low": 65.6,
        "close": 65.7,
        "ma5": 66.04,
        "ma10": 65.36
      }
    ],
    "symbol": "5328.TWO",
    "maxVol10d": 39839,
    "hasVolumeBurst": true
  },
  {
    "code": "1785",
    "name": "光洋科",
    "categories": [
      "Top100"
    ],
    "price": 104.5,
    "prevClose": 109.0,
    "open": 109.5,
    "high": 109.5,
    "low": 104.0,
    "volume": 6263,
    "ma5": 109.1,
    "ma10": 110.4,
    "ma20": 106.84,
    "ma60": 129.7,
    "vMa5": 9624,
    "vMa10": 8490,
    "high20d": 119.5,
    "sparkline": [
      106.5,
      111.0,
      111.5,
      115.0,
      114.5,
      118.5,
      107.0,
      106.5,
      109.0,
      104.5
    ],
    "high5d": 119.5,
    "high10d": 119.5,
    "k3d": [
      {
        "open": 107.0,
        "high": 107.0,
        "low": 107.0,
        "close": 107.0,
        "ma5": 113.3,
        "ma10": 106.92
      },
      {
        "open": 107.0,
        "high": 110.0,
        "low": 103.0,
        "close": 106.5,
        "ma5": 112.3,
        "ma10": 108.03
      },
      {
        "open": 107.5,
        "high": 112.0,
        "low": 107.0,
        "close": 109.0,
        "ma5": 111.1,
        "ma10": 109.89
      }
    ],
    "k5d": [
      {
        "open": 116.0,
        "high": 119.5,
        "low": 116.0,
        "close": 118.5,
        "ma5": 114.1,
        "ma10": 106.32
      },
      {
        "open": 107.0,
        "high": 107.0,
        "low": 107.0,
        "close": 107.0,
        "ma5": 113.3,
        "ma10": 106.92
      },
      {
        "open": 107.0,
        "high": 110.0,
        "low": 103.0,
        "close": 106.5,
        "ma5": 112.3,
        "ma10": 108.03
      },
      {
        "open": 107.5,
        "high": 112.0,
        "low": 107.0,
        "close": 109.0,
        "ma5": 111.1,
        "ma10": 109.89
      },
      {
        "open": 109.5,
        "high": 109.5,
        "low": 104.0,
        "close": 104.5,
        "ma5": 109.1,
        "ma10": 110.4
      }
    ],
    "symbol": "1785.TWO",
    "maxVol10d": 17911,
    "hasVolumeBurst": true
  },
  {
    "code": "4979",
    "name": "華星光",
    "categories": [
      "Top100"
    ],
    "price": 522.0,
    "prevClose": 564.0,
    "open": 550.0,
    "high": 565.0,
    "low": 518.0,
    "volume": 2292,
    "ma5": 538.6,
    "ma10": 501.55,
    "ma20": 445.1,
    "ma60": 493.38,
    "vMa5": 14907,
    "vMa10": 9247,
    "high20d": 615.0,
    "sparkline": [
      407.0,
      447.5,
      492.0,
      488.0,
      488.0,
      536.0,
      510.0,
      561.0,
      564.0,
      522.0
    ],
    "high5d": 615.0,
    "high10d": 615.0,
    "k3d": [
      {
        "open": 520.0,
        "high": 558.0,
        "low": 506.0,
        "close": 510.0,
        "ma5": 502.8,
        "ma10": 446.95
      },
      {
        "open": 529.0,
        "high": 561.0,
        "low": 529.0,
        "close": 561.0,
        "ma5": 516.6,
        "ma10": 464.6
      },
      {
        "open": 579.0,
        "high": 615.0,
        "low": 560.0,
        "close": 564.0,
        "ma5": 531.8,
        "ma10": 486.35
      }
    ],
    "k5d": [
      {
        "open": 517.0,
        "high": 536.0,
        "low": 508.0,
        "close": 536.0,
        "ma5": 490.3,
        "ma10": 438.65
      },
      {
        "open": 520.0,
        "high": 558.0,
        "low": 506.0,
        "close": 510.0,
        "ma5": 502.8,
        "ma10": 446.95
      },
      {
        "open": 529.0,
        "high": 561.0,
        "low": 529.0,
        "close": 561.0,
        "ma5": 516.6,
        "ma10": 464.6
      },
      {
        "open": 579.0,
        "high": 615.0,
        "low": 560.0,
        "close": 564.0,
        "ma5": 531.8,
        "ma10": 486.35
      },
      {
        "open": 550.0,
        "high": 565.0,
        "low": 518.0,
        "close": 522.0,
        "ma5": 538.6,
        "ma10": 501.55
      }
    ],
    "symbol": "4979.TWO",
    "maxVol10d": 25944,
    "hasVolumeBurst": true
  },
  {
    "code": "5347",
    "name": "世界",
    "categories": [
      "Top100"
    ],
    "price": 162.0,
    "prevClose": 163.0,
    "open": 166.0,
    "high": 168.0,
    "low": 162.0,
    "volume": 18034,
    "ma5": 160.0,
    "ma10": 155.75,
    "ma20": 154.45,
    "ma60": 170.16,
    "vMa5": 20652,
    "vMa10": 25782,
    "high20d": 192.0,
    "sparkline": [
      151.0,
      154.5,
      157.0,
      151.5,
      143.5,
      157.5,
      158.0,
      159.5,
      163.0,
      162.0
    ],
    "high5d": 168.0,
    "high10d": 168.0,
    "k3d": [
      {
        "open": 159.0,
        "high": 159.5,
        "low": 153.0,
        "close": 158.0,
        "ma5": 153.5,
        "ma10": 149.55
      },
      {
        "open": 160.5,
        "high": 160.5,
        "low": 156.5,
        "close": 159.5,
        "ma5": 154.0,
        "ma10": 152.2
      },
      {
        "open": 163.0,
        "high": 166.0,
        "low": 162.0,
        "close": 163.0,
        "ma5": 156.3,
        "ma10": 154.7
      }
    ],
    "k5d": [
      {
        "open": 146.5,
        "high": 157.5,
        "low": 146.0,
        "close": 157.5,
        "ma5": 152.8,
        "ma10": 148.5
      },
      {
        "open": 159.0,
        "high": 159.5,
        "low": 153.0,
        "close": 158.0,
        "ma5": 153.5,
        "ma10": 149.55
      },
      {
        "open": 160.5,
        "high": 160.5,
        "low": 156.5,
        "close": 159.5,
        "ma5": 154.0,
        "ma10": 152.2
      },
      {
        "open": 163.0,
        "high": 166.0,
        "low": 162.0,
        "close": 163.0,
        "ma5": 156.3,
        "ma10": 154.7
      },
      {
        "open": 166.0,
        "high": 168.0,
        "low": 162.0,
        "close": 162.0,
        "ma5": 160.0,
        "ma10": 155.75
      }
    ],
    "symbol": "5347.TWO",
    "maxVol10d": 36909,
    "hasVolumeBurst": false
  },
  {
    "code": "4931",
    "name": "新盛力",
    "categories": [],
    "price": 261.5,
    "prevClose": 261.0,
    "open": 265.0,
    "high": 265.0,
    "low": 256.5,
    "volume": 1088,
    "ma5": 256.5,
    "ma10": 230.35,
    "ma20": 212.07,
    "ma60": 231.61,
    "vMa5": 8648,
    "vMa10": 7717,
    "high20d": 271.5,
    "sparkline": [
      191.0,
      196.0,
      199.0,
      218.5,
      216.5,
      238.0,
      255.0,
      267.0,
      261.0,
      261.5
    ],
    "high5d": 271.5,
    "high10d": 271.5,
    "k3d": [
      {
        "open": 239.5,
        "high": 261.0,
        "low": 239.0,
        "close": 255.0,
        "ma5": 225.4,
        "ma10": 202.7
      },
      {
        "open": 255.0,
        "high": 268.0,
        "low": 250.5,
        "close": 267.0,
        "ma5": 239.0,
        "ma10": 212.0
      },
      {
        "open": 271.0,
        "high": 271.5,
        "low": 261.0,
        "close": 261.0,
        "ma5": 247.5,
        "ma10": 221.95
      }
    ],
    "k5d": [
      {
        "open": 231.5,
        "high": 238.0,
        "low": 230.5,
        "close": 238.0,
        "ma5": 213.6,
        "ma10": 195.7
      },
      {
        "open": 239.5,
        "high": 261.0,
        "low": 239.0,
        "close": 255.0,
        "ma5": 225.4,
        "ma10": 202.7
      },
      {
        "open": 255.0,
        "high": 268.0,
        "low": 250.5,
        "close": 267.0,
        "ma5": 239.0,
        "ma10": 212.0
      },
      {
        "open": 271.0,
        "high": 271.5,
        "low": 261.0,
        "close": 261.0,
        "ma5": 247.5,
        "ma10": 221.95
      },
      {
        "open": 265.0,
        "high": 265.0,
        "low": 256.5,
        "close": 261.5,
        "ma5": 256.5,
        "ma10": 230.35
      }
    ],
    "symbol": "4931.TWO",
    "maxVol10d": 21294,
    "hasVolumeBurst": true
  },
  {
    "code": "5475",
    "name": "德宏",
    "categories": [
      "Top100"
    ],
    "price": 172.0,
    "prevClose": 163.0,
    "open": 167.0,
    "high": 179.0,
    "low": 166.0,
    "volume": 23161,
    "ma5": 148.7,
    "ma10": 137.05,
    "ma20": 133.7,
    "ma60": 208.28,
    "vMa5": 16318,
    "vMa10": 10872,
    "high20d": 179.0,
    "sparkline": [
      122.0,
      134.0,
      124.5,
      123.0,
      123.5,
      125.0,
      135.0,
      148.5,
      163.0,
      172.0
    ],
    "high5d": 179.0,
    "high10d": 179.0,
    "k3d": [
      {
        "open": 131.5,
        "high": 137.5,
        "low": 131.0,
        "close": 135.0,
        "ma5": 126.2,
        "ma10": 120.8
      },
      {
        "open": 136.0,
        "high": 148.5,
        "low": 136.0,
        "close": 148.5,
        "ma5": 131.0,
        "ma10": 124.75
      },
      {
        "open": 157.5,
        "high": 163.0,
        "low": 148.5,
        "close": 163.0,
        "ma5": 139.0,
        "ma10": 130.95
      }
    ],
    "k5d": [
      {
        "open": 122.0,
        "high": 130.5,
        "low": 122.0,
        "close": 125.0,
        "ma5": 126.0,
        "ma10": 119.25
      },
      {
        "open": 131.5,
        "high": 137.5,
        "low": 131.0,
        "close": 135.0,
        "ma5": 126.2,
        "ma10": 120.8
      },
      {
        "open": 136.0,
        "high": 148.5,
        "low": 136.0,
        "close": 148.5,
        "ma5": 131.0,
        "ma10": 124.75
      },
      {
        "open": 157.5,
        "high": 163.0,
        "low": 148.5,
        "close": 163.0,
        "ma5": 139.0,
        "ma10": 130.95
      },
      {
        "open": 167.0,
        "high": 179.0,
        "low": 166.0,
        "close": 172.0,
        "ma5": 148.7,
        "ma10": 137.05
      }
    ],
    "symbol": "5475.TWO",
    "maxVol10d": 24112,
    "hasVolumeBurst": true
  },
  {
    "code": "3211",
    "name": "順達",
    "categories": [
      "Top100"
    ],
    "price": 393.5,
    "prevClose": 406.5,
    "open": 408.5,
    "high": 411.0,
    "low": 390.0,
    "volume": 5188,
    "ma5": 396.4,
    "ma10": 363.55,
    "ma20": 356.68,
    "ma60": 402.11,
    "vMa5": 12279,
    "vMa10": 10315,
    "high20d": 439.0,
    "sparkline": [
      309.0,
      325.0,
      324.5,
      356.5,
      338.5,
      370.0,
      400.0,
      412.0,
      406.5,
      393.5
    ],
    "high5d": 419.0,
    "high10d": 419.0,
    "k3d": [
      {
        "open": 368.0,
        "high": 407.0,
        "low": 362.0,
        "close": 400.0,
        "ma5": 357.9,
        "ma10": 330.9
      },
      {
        "open": 400.5,
        "high": 418.0,
        "low": 393.0,
        "close": 412.0,
        "ma5": 375.4,
        "ma10": 341.3
      },
      {
        "open": 417.0,
        "high": 419.0,
        "low": 405.0,
        "close": 406.5,
        "ma5": 385.4,
        "ma10": 353.4
      }
    ],
    "k5d": [
      {
        "open": 340.0,
        "high": 372.0,
        "low": 339.0,
        "close": 370.0,
        "ma5": 342.9,
        "ma10": 324.6
      },
      {
        "open": 368.0,
        "high": 407.0,
        "low": 362.0,
        "close": 400.0,
        "ma5": 357.9,
        "ma10": 330.9
      },
      {
        "open": 400.5,
        "high": 418.0,
        "low": 393.0,
        "close": 412.0,
        "ma5": 375.4,
        "ma10": 341.3
      },
      {
        "open": 417.0,
        "high": 419.0,
        "low": 405.0,
        "close": 406.5,
        "ma5": 385.4,
        "ma10": 353.4
      },
      {
        "open": 408.5,
        "high": 411.0,
        "low": 390.0,
        "close": 393.5,
        "ma5": 396.4,
        "ma10": 363.55
      }
    ],
    "symbol": "3211.TWO",
    "maxVol10d": 20458,
    "hasVolumeBurst": true
  },
  {
    "code": "00981B",
    "name": "第一金優選非投債",
    "categories": [
      "Top100"
    ],
    "price": 9.32,
    "prevClose": 9.33,
    "open": 9.34,
    "high": 9.34,
    "low": 9.32,
    "volume": 11518,
    "ma5": 9.33,
    "ma10": 9.33,
    "ma20": 9.31,
    "ma60": 9.24,
    "vMa5": 10266,
    "vMa10": 10741,
    "high20d": 9.38,
    "sparkline": [
      9.28,
      9.34,
      9.34,
      9.33,
      9.32,
      9.34,
      9.34,
      9.33,
      9.33,
      9.32
    ],
    "high5d": 9.35,
    "high10d": 9.36,
    "k3d": [
      {
        "open": 9.34,
        "high": 9.34,
        "low": 9.32,
        "close": 9.34,
        "ma5": 9.33,
        "ma10": 9.31
      },
      {
        "open": 9.35,
        "high": 9.35,
        "low": 9.32,
        "close": 9.33,
        "ma5": 9.33,
        "ma10": 9.32
      },
      {
        "open": 9.34,
        "high": 9.34,
        "low": 9.32,
        "close": 9.33,
        "ma5": 9.33,
        "ma10": 9.32
      }
    ],
    "k5d": [
      {
        "open": 9.32,
        "high": 9.34,
        "low": 9.32,
        "close": 9.34,
        "ma5": 9.33,
        "ma10": 9.3
      },
      {
        "open": 9.34,
        "high": 9.34,
        "low": 9.32,
        "close": 9.34,
        "ma5": 9.33,
        "ma10": 9.31
      },
      {
        "open": 9.35,
        "high": 9.35,
        "low": 9.32,
        "close": 9.33,
        "ma5": 9.33,
        "ma10": 9.32
      },
      {
        "open": 9.34,
        "high": 9.34,
        "low": 9.32,
        "close": 9.33,
        "ma5": 9.33,
        "ma10": 9.32
      },
      {
        "open": 9.34,
        "high": 9.34,
        "low": 9.32,
        "close": 9.32,
        "ma5": 9.33,
        "ma10": 9.33
      }
    ],
    "symbol": "00981B.TWO",
    "maxVol10d": 13258,
    "hasVolumeBurst": false
  },
  {
    "code": "4991",
    "name": "環宇-KY",
    "categories": [
      "Top100"
    ],
    "price": 468.0,
    "prevClose": 478.0,
    "open": 465.0,
    "high": 482.0,
    "low": 460.0,
    "volume": 570,
    "ma5": 484.5,
    "ma10": 461.3,
    "ma20": 423.85,
    "ma60": 527.55,
    "vMa5": 6616,
    "vMa10": 3901,
    "high20d": 522.0,
    "sparkline": [
      388.0,
      426.5,
      469.0,
      442.0,
      465.0,
      511.0,
      481.0,
      484.5,
      478.0,
      468.0
    ],
    "high5d": 522.0,
    "high10d": 522.0,
    "k3d": [
      {
        "open": 491.0,
        "high": 522.0,
        "low": 461.0,
        "close": 481.0,
        "ma5": 473.6,
        "ma10": 421.3
      },
      {
        "open": 486.0,
        "high": 500.0,
        "low": 460.0,
        "close": 484.5,
        "ma5": 476.7,
        "ma10": 434.1
      },
      {
        "open": 503.0,
        "high": 512.0,
        "low": 478.0,
        "close": 478.0,
        "ma5": 483.9,
        "ma10": 449.8
      }
    ],
    "k5d": [
      {
        "open": 490.0,
        "high": 511.0,
        "low": 489.0,
        "close": 511.0,
        "ma5": 462.7,
        "ma10": 412.8
      },
      {
        "open": 491.0,
        "high": 522.0,
        "low": 461.0,
        "close": 481.0,
        "ma5": 473.6,
        "ma10": 421.3
      },
      {
        "open": 486.0,
        "high": 500.0,
        "low": 460.0,
        "close": 484.5,
        "ma5": 476.7,
        "ma10": 434.1
      },
      {
        "open": 503.0,
        "high": 512.0,
        "low": 478.0,
        "close": 478.0,
        "ma5": 483.9,
        "ma10": 449.8
      },
      {
        "open": 465.0,
        "high": 482.0,
        "low": 460.0,
        "close": 468.0,
        "ma5": 484.5,
        "ma10": 461.3
      }
    ],
    "symbol": "4991.TWO",
    "maxVol10d": 11329,
    "hasVolumeBurst": true
  },
  {
    "code": "8358",
    "name": "金居",
    "categories": [
      "Top100"
    ],
    "price": 433.5,
    "prevClose": 421.0,
    "open": 427.0,
    "high": 462.0,
    "low": 413.0,
    "volume": 38075,
    "ma5": 399.9,
    "ma10": 375.35,
    "ma20": 364.0,
    "ma60": 502.42,
    "vMa5": 32040,
    "vMa10": 26765,
    "high20d": 462.0,
    "sparkline": [
      327.5,
      341.0,
      349.5,
      384.0,
      352.0,
      346.0,
      380.5,
      418.5,
      421.0,
      433.5
    ],
    "high5d": 462.0,
    "high10d": 462.0,
    "k3d": [
      {
        "open": 346.0,
        "high": 380.5,
        "low": 346.0,
        "close": 380.5,
        "ma5": 362.4,
        "ma10": 335.05
      },
      {
        "open": 402.5,
        "high": 418.5,
        "low": 402.0,
        "close": 418.5,
        "ma5": 376.2,
        "ma10": 346.8
      },
      {
        "open": 445.0,
        "high": 445.0,
        "low": 417.0,
        "close": 421.0,
        "ma5": 383.6,
        "ma10": 361.8
      }
    ],
    "k5d": [
      {
        "open": 354.5,
        "high": 369.5,
        "low": 342.5,
        "close": 346.0,
        "ma5": 354.5,
        "ma10": 330.4
      },
      {
        "open": 346.0,
        "high": 380.5,
        "low": 346.0,
        "close": 380.5,
        "ma5": 362.4,
        "ma10": 335.05
      },
      {
        "open": 402.5,
        "high": 418.5,
        "low": 402.0,
        "close": 418.5,
        "ma5": 376.2,
        "ma10": 346.8
      },
      {
        "open": 445.0,
        "high": 445.0,
        "low": 417.0,
        "close": 421.0,
        "ma5": 383.6,
        "ma10": 361.8
      },
      {
        "open": 427.0,
        "high": 462.0,
        "low": 413.0,
        "close": 433.5,
        "ma5": 399.9,
        "ma10": 375.35
      }
    ],
    "symbol": "8358.TWO",
    "maxVol10d": 47566,
    "hasVolumeBurst": true
  },
  {
    "code": "3441",
    "name": "聯一光",
    "categories": [
      "Top100"
    ],
    "price": 81.0,
    "prevClose": 85.0,
    "open": 86.0,
    "high": 88.9,
    "low": 80.7,
    "volume": 7583,
    "ma5": 82.4,
    "ma10": 85.22,
    "ma20": 78.49,
    "ma60": 72.49,
    "vMa5": 8576,
    "vMa10": 17866,
    "high20d": 95.8,
    "sparkline": [
      92.4,
      89.6,
      85.4,
      88.4,
      84.4,
      79.5,
      79.3,
      87.2,
      85.0,
      81.0
    ],
    "high5d": 88.9,
    "high10d": 95.8,
    "k3d": [
      {
        "open": 79.2,
        "high": 82.0,
        "low": 77.9,
        "close": 79.3,
        "ma5": 83.4,
        "ma10": 84.42
      },
      {
        "open": 79.3,
        "high": 87.2,
        "low": 79.2,
        "close": 87.2,
        "ma5": 83.76,
        "ma10": 84.66
      },
      {
        "open": 87.4,
        "high": 88.7,
        "low": 85.0,
        "close": 85.0,
        "ma5": 83.08,
        "ma10": 85.52
      }
    ],
    "k5d": [
      {
        "open": 82.7,
        "high": 84.0,
        "low": 79.0,
        "close": 79.5,
        "ma5": 85.46,
        "ma10": 84.21
      },
      {
        "open": 79.2,
        "high": 82.0,
        "low": 77.9,
        "close": 79.3,
        "ma5": 83.4,
        "ma10": 84.42
      },
      {
        "open": 79.3,
        "high": 87.2,
        "low": 79.2,
        "close": 87.2,
        "ma5": 83.76,
        "ma10": 84.66
      },
      {
        "open": 87.4,
        "high": 88.7,
        "low": 85.0,
        "close": 85.0,
        "ma5": 83.08,
        "ma10": 85.52
      },
      {
        "open": 86.0,
        "high": 88.9,
        "low": 80.7,
        "close": 81.0,
        "ma5": 82.4,
        "ma10": 85.22
      }
    ],
    "symbol": "3441.TWO",
    "maxVol10d": 49241,
    "hasVolumeBurst": false
  },
  {
    "code": "3374",
    "name": "精材",
    "categories": [
      "Top100"
    ],
    "price": 327.0,
    "prevClose": 325.0,
    "open": 327.5,
    "high": 346.5,
    "low": 326.5,
    "volume": 14341,
    "ma5": 330.6,
    "ma10": 320.25,
    "ma20": 328.9,
    "ma60": 300.52,
    "vMa5": 12667,
    "vMa10": 12591,
    "high20d": 418.5,
    "sparkline": [
      304.5,
      309.5,
      313.0,
      316.0,
      306.5,
      337.0,
      334.0,
      330.0,
      325.0,
      327.0
    ],
    "high5d": 351.5,
    "high10d": 351.5,
    "k3d": [
      {
        "open": 341.0,
        "high": 351.5,
        "low": 324.0,
        "close": 334.0,
        "ma5": 321.3,
        "ma10": 302.9
      },
      {
        "open": 332.0,
        "high": 338.0,
        "low": 324.0,
        "close": 330.0,
        "ma5": 324.7,
        "ma10": 307.95
      },
      {
        "open": 333.5,
        "high": 341.0,
        "low": 324.5,
        "close": 325.0,
        "ma5": 326.5,
        "ma10": 315.25
      }
    ],
    "k5d": [
      {
        "open": 325.5,
        "high": 337.0,
        "low": 325.5,
        "close": 337.0,
        "ma5": 316.4,
        "ma10": 300.55
      },
      {
        "open": 341.0,
        "high": 351.5,
        "low": 324.0,
        "close": 334.0,
        "ma5": 321.3,
        "ma10": 302.9
      },
      {
        "open": 332.0,
        "high": 338.0,
        "low": 324.0,
        "close": 330.0,
        "ma5": 324.7,
        "ma10": 307.95
      },
      {
        "open": 333.5,
        "high": 341.0,
        "low": 324.5,
        "close": 325.0,
        "ma5": 326.5,
        "ma10": 315.25
      },
      {
        "open": 327.5,
        "high": 346.5,
        "low": 326.5,
        "close": 327.0,
        "ma5": 330.6,
        "ma10": 320.25
      }
    ],
    "symbol": "3374.TWO",
    "maxVol10d": 19807,
    "hasVolumeBurst": true
  },
  {
    "code": "009825",
    "name": "聯邦美國金融創新",
    "categories": [
      "Top100"
    ],
    "price": 10.24,
    "prevClose": 10.1,
    "open": 10.26,
    "high": 10.3,
    "low": 10.2,
    "volume": 9746,
    "ma5": 10.09,
    "ma10": 10.02,
    "ma20": 9.9,
    "ma60": 9.93,
    "vMa5": 6015,
    "vMa10": 5153,
    "high20d": 10.3,
    "sparkline": [
      9.8,
      9.88,
      9.99,
      10.02,
      10.05,
      10.0,
      10.04,
      10.09,
      10.1,
      10.24
    ],
    "high5d": 10.3,
    "high10d": 10.3,
    "k3d": [
      {
        "open": 10.0,
        "high": 10.04,
        "low": 10.0,
        "close": 10.04,
        "ma5": 10.02,
        "ma10": 9.92
      },
      {
        "open": 10.05,
        "high": 10.1,
        "low": 10.05,
        "close": 10.09,
        "ma5": 10.04,
        "ma10": 9.94
      },
      {
        "open": 10.09,
        "high": 10.1,
        "low": 10.06,
        "close": 10.1,
        "ma5": 10.06,
        "ma10": 9.98
      }
    ],
    "k5d": [
      {
        "open": 10.05,
        "high": 10.05,
        "low": 9.99,
        "close": 10.0,
        "ma5": 9.99,
        "ma10": 9.88
      },
      {
        "open": 10.0,
        "high": 10.04,
        "low": 10.0,
        "close": 10.04,
        "ma5": 10.02,
        "ma10": 9.92
      },
      {
        "open": 10.05,
        "high": 10.1,
        "low": 10.05,
        "close": 10.09,
        "ma5": 10.04,
        "ma10": 9.94
      },
      {
        "open": 10.09,
        "high": 10.1,
        "low": 10.06,
        "close": 10.1,
        "ma5": 10.06,
        "ma10": 9.98
      },
      {
        "open": 10.26,
        "high": 10.3,
        "low": 10.2,
        "close": 10.24,
        "ma5": 10.09,
        "ma10": 10.02
      }
    ],
    "symbol": "009825.TWO",
    "maxVol10d": 9746,
    "hasVolumeBurst": true
  },
  {
    "code": "8069",
    "name": "元太",
    "categories": [
      "Top100"
    ],
    "price": 165.0,
    "prevClose": 171.0,
    "open": 160.5,
    "high": 168.5,
    "low": 158.5,
    "volume": 15817,
    "ma5": 168.7,
    "ma10": 181.75,
    "ma20": 183.55,
    "ma60": 198.88,
    "vMa5": 13772,
    "vMa10": 12658,
    "high20d": 208.5,
    "sparkline": [
      189.0,
      197.5,
      195.5,
      196.0,
      196.0,
      176.5,
      165.0,
      166.0,
      171.0,
      165.0
    ],
    "high5d": 178.5,
    "high10d": 208.5,
    "k3d": [
      {
        "open": 169.5,
        "high": 170.0,
        "low": 164.5,
        "close": 165.0,
        "ma5": 185.8,
        "ma10": 186.55
      },
      {
        "open": 165.0,
        "high": 167.0,
        "low": 160.0,
        "close": 166.0,
        "ma5": 179.9,
        "ma10": 185.25
      },
      {
        "open": 167.5,
        "high": 173.0,
        "low": 164.0,
        "close": 171.0,
        "ma5": 174.9,
        "ma10": 184.15
      }
    ],
    "k5d": [
      {
        "open": 176.5,
        "high": 178.5,
        "low": 176.5,
        "close": 176.5,
        "ma5": 192.3,
        "ma10": 187.35
      },
      {
        "open": 169.5,
        "high": 170.0,
        "low": 164.5,
        "close": 165.0,
        "ma5": 185.8,
        "ma10": 186.55
      },
      {
        "open": 165.0,
        "high": 167.0,
        "low": 160.0,
        "close": 166.0,
        "ma5": 179.9,
        "ma10": 185.25
      },
      {
        "open": 167.5,
        "high": 173.0,
        "low": 164.0,
        "close": 171.0,
        "ma5": 174.9,
        "ma10": 184.15
      },
      {
        "open": 160.5,
        "high": 168.5,
        "low": 158.5,
        "close": 165.0,
        "ma5": 168.7,
        "ma10": 181.75
      }
    ],
    "symbol": "8069.TWO",
    "maxVol10d": 17231,
    "hasVolumeBurst": false
  },
  {
    "code": "5351",
    "name": "鈺創",
    "categories": [
      "Top100"
    ],
    "price": 135.0,
    "prevClose": 129.0,
    "open": 131.0,
    "high": 138.0,
    "low": 131.0,
    "volume": 7513,
    "ma5": 123.9,
    "ma10": 109.07,
    "ma20": 94.66,
    "ma60": 91.24,
    "vMa5": 16476,
    "vMa10": 24094,
    "high20d": 138.0,
    "sparkline": [
      79.9,
      87.8,
      96.5,
      103.0,
      104.0,
      114.0,
      119.5,
      122.0,
      129.0,
      135.0
    ],
    "high5d": 138.0,
    "high10d": 138.0,
    "k3d": [
      {
        "open": 116.0,
        "high": 119.5,
        "low": 108.5,
        "close": 119.5,
        "ma5": 107.4,
        "ma10": 91.36
      },
      {
        "open": 124.5,
        "high": 124.5,
        "low": 120.5,
        "close": 122.0,
        "ma5": 112.5,
        "ma10": 96.55
      },
      {
        "open": 127.0,
        "high": 130.0,
        "low": 123.0,
        "close": 129.0,
        "ma5": 117.7,
        "ma10": 102.84
      }
    ],
    "k5d": [
      {
        "open": 107.5,
        "high": 114.0,
        "low": 103.0,
        "close": 114.0,
        "ma5": 101.06,
        "ma10": 86.94
      },
      {
        "open": 116.0,
        "high": 119.5,
        "low": 108.5,
        "close": 119.5,
        "ma5": 107.4,
        "ma10": 91.36
      },
      {
        "open": 124.5,
        "high": 124.5,
        "low": 120.5,
        "close": 122.0,
        "ma5": 112.5,
        "ma10": 96.55
      },
      {
        "open": 127.0,
        "high": 130.0,
        "low": 123.0,
        "close": 129.0,
        "ma5": 117.7,
        "ma10": 102.84
      },
      {
        "open": 131.0,
        "high": 138.0,
        "low": 131.0,
        "close": 135.0,
        "ma5": 123.9,
        "ma10": 109.07
      }
    ],
    "symbol": "5351.TWO",
    "maxVol10d": 59974,
    "hasVolumeBurst": true
  },
  {
    "code": "00687B",
    "name": "國泰20年美債",
    "categories": [
      "Top100"
    ],
    "price": 27.36,
    "prevClose": 27.43,
    "open": 27.44,
    "high": 27.46,
    "low": 27.35,
    "volume": 8586,
    "ma5": 27.44,
    "ma10": 27.53,
    "ma20": 27.7,
    "ma60": 27.86,
    "vMa5": 9043,
    "vMa10": 14491,
    "high20d": 28.15,
    "sparkline": [
      27.51,
      27.54,
      27.76,
      27.76,
      27.49,
      27.57,
      27.39,
      27.46,
      27.43,
      27.36
    ],
    "high5d": 27.58,
    "high10d": 27.82,
    "k3d": [
      {
        "open": 27.39,
        "high": 27.39,
        "low": 27.33,
        "close": 27.39,
        "ma5": 27.59,
        "ma10": 27.65
      },
      {
        "open": 27.43,
        "high": 27.48,
        "low": 27.41,
        "close": 27.46,
        "ma5": 27.53,
        "ma10": 27.58
      },
      {
        "open": 27.43,
        "high": 27.43,
        "low": 27.39,
        "close": 27.43,
        "ma5": 27.47,
        "ma10": 27.56
      }
    ],
    "k5d": [
      {
        "open": 27.54,
        "high": 27.58,
        "low": 27.53,
        "close": 27.57,
        "ma5": 27.62,
        "ma10": 27.71
      },
      {
        "open": 27.39,
        "high": 27.39,
        "low": 27.33,
        "close": 27.39,
        "ma5": 27.59,
        "ma10": 27.65
      },
      {
        "open": 27.43,
        "high": 27.48,
        "low": 27.41,
        "close": 27.46,
        "ma5": 27.53,
        "ma10": 27.58
      },
      {
        "open": 27.43,
        "high": 27.43,
        "low": 27.39,
        "close": 27.43,
        "ma5": 27.47,
        "ma10": 27.56
      },
      {
        "open": 27.44,
        "high": 27.46,
        "low": 27.35,
        "close": 27.36,
        "ma5": 27.44,
        "ma10": 27.53
      }
    ],
    "symbol": "00687B.TWO",
    "maxVol10d": 35058,
    "hasVolumeBurst": false
  },
  {
    "code": "3264",
    "name": "欣銓",
    "categories": [
      "Top100"
    ],
    "price": 227.5,
    "prevClose": 230.5,
    "open": 232.0,
    "high": 232.5,
    "low": 224.0,
    "volume": 4481,
    "ma5": 223.3,
    "ma10": 211.85,
    "ma20": 203.35,
    "ma60": 219.74,
    "vMa5": 10789,
    "vMa10": 8707,
    "high20d": 243.5,
    "sparkline": [
      187.5,
      193.5,
      202.0,
      211.5,
      207.5,
      222.5,
      219.5,
      216.5,
      230.5,
      227.5
    ],
    "high5d": 238.0,
    "high10d": 238.0,
    "k3d": [
      {
        "open": 221.0,
        "high": 221.5,
        "low": 214.5,
        "close": 219.5,
        "ma5": 212.6,
        "ma10": 194.9
      },
      {
        "open": 221.0,
        "high": 225.5,
        "low": 216.0,
        "close": 216.5,
        "ma5": 215.5,
        "ma10": 199.85
      },
      {
        "open": 222.5,
        "high": 238.0,
        "low": 220.0,
        "close": 230.5,
        "ma5": 219.3,
        "ma10": 206.8
      }
    ],
    "k5d": [
      {
        "open": 213.5,
        "high": 228.0,
        "low": 210.5,
        "close": 222.5,
        "ma5": 207.4,
        "ma10": 191.5
      },
      {
        "open": 221.0,
        "high": 221.5,
        "low": 214.5,
        "close": 219.5,
        "ma5": 212.6,
        "ma10": 194.9
      },
      {
        "open": 221.0,
        "high": 225.5,
        "low": 216.0,
        "close": 216.5,
        "ma5": 215.5,
        "ma10": 199.85
      },
      {
        "open": 222.5,
        "high": 238.0,
        "low": 220.0,
        "close": 230.5,
        "ma5": 219.3,
        "ma10": 206.8
      },
      {
        "open": 232.0,
        "high": 232.5,
        "low": 224.0,
        "close": 227.5,
        "ma5": 223.3,
        "ma10": 211.85
      }
    ],
    "symbol": "3264.TWO",
    "maxVol10d": 16634,
    "hasVolumeBurst": true
  },
  {
    "code": "6265",
    "name": "方土昶",
    "categories": [
      "Top100"
    ],
    "price": 63.0,
    "prevClose": 58.9,
    "open": 62.2,
    "high": 63.8,
    "low": 61.0,
    "volume": 12058,
    "ma5": 58.12,
    "ma10": 54.61,
    "ma20": 49.71,
    "ma60": 52.95,
    "vMa5": 8403,
    "vMa10": 6668,
    "high20d": 63.8,
    "sparkline": [
      44.85,
      49.3,
      51.3,
      54.7,
      55.4,
      55.8,
      56.1,
      56.8,
      58.9,
      63.0
    ],
    "high5d": 63.8,
    "high10d": 63.8,
    "k3d": [
      {
        "open": 56.4,
        "high": 58.8,
        "low": 55.4,
        "close": 56.1,
        "ma5": 54.66,
        "ma10": 48.95
      },
      {
        "open": 56.7,
        "high": 59.0,
        "low": 56.6,
        "close": 56.8,
        "ma5": 55.76,
        "ma10": 50.52
      },
      {
        "open": 57.2,
        "high": 59.9,
        "low": 57.0,
        "close": 58.9,
        "ma5": 56.6,
        "ma10": 52.55
      }
    ],
    "k5d": [
      {
        "open": 57.9,
        "high": 58.5,
        "low": 55.1,
        "close": 55.8,
        "ma5": 53.3,
        "ma10": 47.7
      },
      {
        "open": 56.4,
        "high": 58.8,
        "low": 55.4,
        "close": 56.1,
        "ma5": 54.66,
        "ma10": 48.95
      },
      {
        "open": 56.7,
        "high": 59.0,
        "low": 56.6,
        "close": 56.8,
        "ma5": 55.76,
        "ma10": 50.52
      },
      {
        "open": 57.2,
        "high": 59.9,
        "low": 57.0,
        "close": 58.9,
        "ma5": 56.6,
        "ma10": 52.55
      },
      {
        "open": 62.2,
        "high": 63.8,
        "low": 61.0,
        "close": 63.0,
        "ma5": 58.12,
        "ma10": 54.61
      }
    ],
    "symbol": "6265.TWO",
    "maxVol10d": 12058,
    "hasVolumeBurst": true
  },
  {
    "code": "00679B",
    "name": "元大美債20年",
    "categories": [
      "Top100"
    ],
    "price": 26.29,
    "prevClose": 26.35,
    "open": 26.37,
    "high": 26.39,
    "low": 26.28,
    "volume": 15899,
    "ma5": 26.37,
    "ma10": 26.45,
    "ma20": 26.62,
    "ma60": 26.71,
    "vMa5": 12951,
    "vMa10": 19260,
    "high20d": 27.04,
    "sparkline": [
      26.42,
      26.45,
      26.67,
      26.66,
      26.41,
      26.49,
      26.32,
      26.39,
      26.35,
      26.29
    ],
    "high5d": 26.5,
    "high10d": 26.73,
    "k3d": [
      {
        "open": 26.3,
        "high": 26.32,
        "low": 26.26,
        "close": 26.32,
        "ma5": 26.51,
        "ma10": 26.56
      },
      {
        "open": 26.36,
        "high": 26.39,
        "low": 26.34,
        "close": 26.39,
        "ma5": 26.45,
        "ma10": 26.5
      },
      {
        "open": 26.36,
        "high": 26.36,
        "low": 26.32,
        "close": 26.35,
        "ma5": 26.39,
        "ma10": 26.48
      }
    ],
    "k5d": [
      {
        "open": 26.46,
        "high": 26.5,
        "low": 26.45,
        "close": 26.49,
        "ma5": 26.54,
        "ma10": 26.62
      },
      {
        "open": 26.3,
        "high": 26.32,
        "low": 26.26,
        "close": 26.32,
        "ma5": 26.51,
        "ma10": 26.56
      },
      {
        "open": 26.36,
        "high": 26.39,
        "low": 26.34,
        "close": 26.39,
        "ma5": 26.45,
        "ma10": 26.5
      },
      {
        "open": 26.36,
        "high": 26.36,
        "low": 26.32,
        "close": 26.35,
        "ma5": 26.39,
        "ma10": 26.48
      },
      {
        "open": 26.37,
        "high": 26.39,
        "low": 26.28,
        "close": 26.29,
        "ma5": 26.37,
        "ma10": 26.45
      }
    ],
    "symbol": "00679B.TWO",
    "maxVol10d": 47248,
    "hasVolumeBurst": true
  },
  {
    "code": "5340",
    "name": "建榮",
    "categories": [],
    "price": 78.8,
    "prevClose": 78.6,
    "open": 78.4,
    "high": 81.7,
    "low": 77.6,
    "volume": 2595,
    "ma5": 76.8,
    "ma10": 73.62,
    "ma20": 69.94,
    "ma60": 84.49,
    "vMa5": 4352,
    "vMa10": 3877,
    "high20d": 82.5,
    "sparkline": [
      64.2,
      70.6,
      75.7,
      71.4,
      70.3,
      73.0,
      74.0,
      79.6,
      78.6,
      78.8
    ],
    "high5d": 82.5,
    "high10d": 82.5,
    "k3d": [
      {
        "open": 73.9,
        "high": 75.5,
        "low": 72.5,
        "close": 74.0,
        "ma5": 72.88,
        "ma10": 67.57
      },
      {
        "open": 76.1,
        "high": 81.4,
        "low": 75.4,
        "close": 79.6,
        "ma5": 73.66,
        "ma10": 69.6
      },
      {
        "open": 78.5,
        "high": 82.5,
        "low": 77.3,
        "close": 78.6,
        "ma5": 75.1,
        "ma10": 71.86
      }
    ],
    "k5d": [
      {
        "open": 71.5,
        "high": 75.5,
        "low": 71.4,
        "close": 73.0,
        "ma5": 72.2,
        "ma10": 66.42
      },
      {
        "open": 73.9,
        "high": 75.5,
        "low": 72.5,
        "close": 74.0,
        "ma5": 72.88,
        "ma10": 67.57
      },
      {
        "open": 76.1,
        "high": 81.4,
        "low": 75.4,
        "close": 79.6,
        "ma5": 73.66,
        "ma10": 69.6
      },
      {
        "open": 78.5,
        "high": 82.5,
        "low": 77.3,
        "close": 78.6,
        "ma5": 75.1,
        "ma10": 71.86
      },
      {
        "open": 78.4,
        "high": 81.7,
        "low": 77.6,
        "close": 78.8,
        "ma5": 76.8,
        "ma10": 73.62
      }
    ],
    "symbol": "5340.TWO",
    "maxVol10d": 8040,
    "hasVolumeBurst": true
  },
  {
    "code": "8050",
    "name": "廣積",
    "categories": [],
    "price": 58.1,
    "prevClose": 58.6,
    "open": 59.0,
    "high": 59.2,
    "low": 57.1,
    "volume": 2148,
    "ma5": 61.1,
    "ma10": 61.95,
    "ma20": 60.47,
    "ma60": 58.06,
    "vMa5": 7166,
    "vMa10": 7315,
    "high20d": 69.4,
    "sparkline": [
      58.0,
      59.0,
      64.9,
      63.1,
      69.0,
      68.4,
      61.6,
      58.8,
      58.6,
      58.1
    ],
    "high5d": 68.9,
    "high10d": 69.4,
    "k3d": [
      {
        "open": 64.5,
        "high": 64.7,
        "low": 61.6,
        "close": 61.6,
        "ma5": 65.4,
        "ma10": 61.42
      },
      {
        "open": 60.2,
        "high": 60.2,
        "low": 58.1,
        "close": 58.8,
        "ma5": 64.18,
        "ma10": 61.22
      },
      {
        "open": 58.9,
        "high": 59.4,
        "low": 58.2,
        "close": 58.6,
        "ma5": 63.28,
        "ma10": 61.6
      }
    ],
    "k5d": [
      {
        "open": 67.3,
        "high": 68.9,
        "low": 63.5,
        "close": 68.4,
        "ma5": 64.88,
        "ma10": 61.11
      },
      {
        "open": 64.5,
        "high": 64.7,
        "low": 61.6,
        "close": 61.6,
        "ma5": 65.4,
        "ma10": 61.42
      },
      {
        "open": 60.2,
        "high": 60.2,
        "low": 58.1,
        "close": 58.8,
        "ma5": 64.18,
        "ma10": 61.22
      },
      {
        "open": 58.9,
        "high": 59.4,
        "low": 58.2,
        "close": 58.6,
        "ma5": 63.28,
        "ma10": 61.6
      },
      {
        "open": 59.0,
        "high": 59.2,
        "low": 57.1,
        "close": 58.1,
        "ma5": 61.1,
        "ma10": 61.95
      }
    ],
    "symbol": "8050.TWO",
    "maxVol10d": 16150,
    "hasVolumeBurst": true
  },
  {
    "code": "3163",
    "name": "波若威",
    "categories": [],
    "price": 701.0,
    "prevClose": 717.0,
    "open": 718.0,
    "high": 722.0,
    "low": 688.0,
    "volume": 846,
    "ma5": 705.0,
    "ma10": 688.3,
    "ma20": 631.29,
    "ma60": 711.37,
    "vMa5": 4001,
    "vMa10": 4664,
    "high20d": 757.0,
    "sparkline": [
      598.0,
      657.0,
      722.0,
      710.0,
      671.0,
      706.0,
      683.0,
      718.0,
      717.0,
      701.0
    ],
    "high5d": 740.0,
    "high10d": 757.0,
    "k3d": [
      {
        "open": 690.0,
        "high": 723.0,
        "low": 673.0,
        "close": 683.0,
        "ma5": 698.4,
        "ma10": 631.1
      },
      {
        "open": 685.0,
        "high": 735.0,
        "low": 682.0,
        "close": 718.0,
        "ma5": 697.6,
        "ma10": 650.4
      },
      {
        "open": 740.0,
        "high": 740.0,
        "low": 715.0,
        "close": 717.0,
        "ma5": 699.0,
        "ma10": 672.6
      }
    ],
    "k5d": [
      {
        "open": 698.0,
        "high": 735.0,
        "low": 692.0,
        "close": 706.0,
        "ma5": 693.2,
        "ma10": 621.1
      },
      {
        "open": 690.0,
        "high": 723.0,
        "low": 673.0,
        "close": 683.0,
        "ma5": 698.4,
        "ma10": 631.1
      },
      {
        "open": 685.0,
        "high": 735.0,
        "low": 682.0,
        "close": 718.0,
        "ma5": 697.6,
        "ma10": 650.4
      },
      {
        "open": 740.0,
        "high": 740.0,
        "low": 715.0,
        "close": 717.0,
        "ma5": 699.0,
        "ma10": 672.6
      },
      {
        "open": 718.0,
        "high": 722.0,
        "low": 688.0,
        "close": 701.0,
        "ma5": 705.0,
        "ma10": 688.3
      }
    ],
    "symbol": "3163.TWO",
    "maxVol10d": 11130,
    "hasVolumeBurst": true
  },
  {
    "code": "00989B",
    "name": "台新美國非投等債",
    "categories": [
      "Top100"
    ],
    "price": 10.27,
    "prevClose": 10.3,
    "open": 10.3,
    "high": 10.3,
    "low": 10.26,
    "volume": 5888,
    "ma5": 10.29,
    "ma10": 10.28,
    "ma20": 10.25,
    "ma60": 10.16,
    "vMa5": 6238,
    "vMa10": 4961,
    "high20d": 10.32,
    "sparkline": [
      10.24,
      10.28,
      10.27,
      10.26,
      10.26,
      10.28,
      10.3,
      10.29,
      10.3,
      10.27
    ],
    "high5d": 10.32,
    "high10d": 10.32,
    "k3d": [
      {
        "open": 10.28,
        "high": 10.3,
        "low": 10.27,
        "close": 10.3,
        "ma5": 10.27,
        "ma10": 10.26
      },
      {
        "open": 10.3,
        "high": 10.31,
        "low": 10.28,
        "close": 10.29,
        "ma5": 10.28,
        "ma10": 10.27
      },
      {
        "open": 10.3,
        "high": 10.32,
        "low": 10.3,
        "close": 10.3,
        "ma5": 10.29,
        "ma10": 10.27
      }
    ],
    "k5d": [
      {
        "open": 10.28,
        "high": 10.3,
        "low": 10.28,
        "close": 10.28,
        "ma5": 10.27,
        "ma10": 10.25
      },
      {
        "open": 10.28,
        "high": 10.3,
        "low": 10.27,
        "close": 10.3,
        "ma5": 10.27,
        "ma10": 10.26
      },
      {
        "open": 10.3,
        "high": 10.31,
        "low": 10.28,
        "close": 10.29,
        "ma5": 10.28,
        "ma10": 10.27
      },
      {
        "open": 10.3,
        "high": 10.32,
        "low": 10.3,
        "close": 10.3,
        "ma5": 10.29,
        "ma10": 10.27
      },
      {
        "open": 10.3,
        "high": 10.3,
        "low": 10.26,
        "close": 10.27,
        "ma5": 10.29,
        "ma10": 10.28
      }
    ],
    "symbol": "00989B.TWO",
    "maxVol10d": 7159,
    "hasVolumeBurst": false
  },
  {
    "code": "6016",
    "name": "康和證",
    "categories": [],
    "price": 20.4,
    "prevClose": 20.1,
    "open": 20.2,
    "high": 20.75,
    "low": 20.05,
    "volume": 3297,
    "ma5": 19.48,
    "ma10": 19.91,
    "ma20": 20.42,
    "ma60": 23.59,
    "vMa5": 6055,
    "vMa10": 4766,
    "high20d": 22.93,
    "sparkline": [
      20.3,
      20.45,
      20.9,
      20.3,
      19.8,
      18.4,
      18.65,
      19.85,
      20.1,
      20.4
    ],
    "high5d": 20.75,
    "high10d": 21.25,
    "k3d": [
      {
        "open": 18.2,
        "high": 18.7,
        "low": 18.0,
        "close": 18.65,
        "ma5": 19.61,
        "ma10": 19.78
      },
      {
        "open": 18.7,
        "high": 20.1,
        "low": 18.7,
        "close": 19.85,
        "ma5": 19.4,
        "ma10": 19.82
      },
      {
        "open": 20.1,
        "high": 20.6,
        "low": 19.85,
        "close": 20.1,
        "ma5": 19.36,
        "ma10": 19.93
      }
    ],
    "k5d": [
      {
        "open": 18.65,
        "high": 19.05,
        "low": 18.35,
        "close": 18.4,
        "ma5": 19.97,
        "ma10": 19.91
      },
      {
        "open": 18.2,
        "high": 18.7,
        "low": 18.0,
        "close": 18.65,
        "ma5": 19.61,
        "ma10": 19.78
      },
      {
        "open": 18.7,
        "high": 20.1,
        "low": 18.7,
        "close": 19.85,
        "ma5": 19.4,
        "ma10": 19.82
      },
      {
        "open": 20.1,
        "high": 20.6,
        "low": 19.85,
        "close": 20.1,
        "ma5": 19.36,
        "ma10": 19.93
      },
      {
        "open": 20.2,
        "high": 20.75,
        "low": 20.05,
        "close": 20.4,
        "ma5": 19.48,
        "ma10": 19.91
      }
    ],
    "symbol": "6016.TWO",
    "maxVol10d": 12528,
    "hasVolumeBurst": true
  },
  {
    "code": "00933B",
    "name": "國泰10Y+金融債",
    "categories": [
      "Top100"
    ],
    "price": 15.86,
    "prevClose": 15.9,
    "open": 15.92,
    "high": 15.93,
    "low": 15.86,
    "volume": 8633,
    "ma5": 15.91,
    "ma10": 15.95,
    "ma20": 15.98,
    "ma60": 16.04,
    "vMa5": 8400,
    "vMa10": 7543,
    "high20d": 16.12,
    "sparkline": [
      15.94,
      15.96,
      16.05,
      16.03,
      15.95,
      15.97,
      15.91,
      15.91,
      15.9,
      15.86
    ],
    "high5d": 15.99,
    "high10d": 16.09,
    "k3d": [
      {
        "open": 15.9,
        "high": 15.91,
        "low": 15.87,
        "close": 15.91,
        "ma5": 15.98,
        "ma10": 15.97
      },
      {
        "open": 15.91,
        "high": 15.92,
        "low": 15.89,
        "close": 15.91,
        "ma5": 15.95,
        "ma10": 15.96
      },
      {
        "open": 15.91,
        "high": 15.94,
        "low": 15.88,
        "close": 15.9,
        "ma5": 15.93,
        "ma10": 15.96
      }
    ],
    "k5d": [
      {
        "open": 15.96,
        "high": 15.99,
        "low": 15.95,
        "close": 15.97,
        "ma5": 15.99,
        "ma10": 15.99
      },
      {
        "open": 15.9,
        "high": 15.91,
        "low": 15.87,
        "close": 15.91,
        "ma5": 15.98,
        "ma10": 15.97
      },
      {
        "open": 15.91,
        "high": 15.92,
        "low": 15.89,
        "close": 15.91,
        "ma5": 15.95,
        "ma10": 15.96
      },
      {
        "open": 15.91,
        "high": 15.94,
        "low": 15.88,
        "close": 15.9,
        "ma5": 15.93,
        "ma10": 15.96
      },
      {
        "open": 15.92,
        "high": 15.93,
        "low": 15.86,
        "close": 15.86,
        "ma5": 15.91,
        "ma10": 15.95
      }
    ],
    "symbol": "00933B.TWO",
    "maxVol10d": 11659,
    "hasVolumeBurst": false
  },
  {
    "code": "4707",
    "name": "磐亞",
    "categories": [
      "Top100"
    ],
    "price": 31.5,
    "prevClose": 32.45,
    "open": 32.3,
    "high": 32.9,
    "low": 31.45,
    "volume": 2255,
    "ma5": 31.78,
    "ma10": 30.9,
    "ma20": 30.69,
    "ma60": 27.46,
    "vMa5": 5937,
    "vMa10": 6113,
    "high20d": 45.0,
    "sparkline": [
      25.5,
      28.05,
      30.85,
      33.85,
      31.9,
      31.95,
      30.0,
      33.0,
      32.45,
      31.5
    ],
    "high5d": 34.95,
    "high10d": 34.95,
    "k3d": [
      {
        "open": 31.3,
        "high": 31.9,
        "low": 28.8,
        "close": 30.0,
        "ma5": 31.71,
        "ma10": 28.43
      },
      {
        "open": 30.3,
        "high": 33.0,
        "low": 30.3,
        "close": 33.0,
        "ma5": 32.14,
        "ma10": 29.15
      },
      {
        "open": 34.0,
        "high": 34.95,
        "low": 32.0,
        "close": 32.45,
        "ma5": 31.86,
        "ma10": 30.07
      }
    ],
    "k5d": [
      {
        "open": 31.85,
        "high": 32.8,
        "low": 30.75,
        "close": 31.95,
        "ma5": 31.32,
        "ma10": 28.3
      },
      {
        "open": 31.3,
        "high": 31.9,
        "low": 28.8,
        "close": 30.0,
        "ma5": 31.71,
        "ma10": 28.43
      },
      {
        "open": 30.3,
        "high": 33.0,
        "low": 30.3,
        "close": 33.0,
        "ma5": 32.14,
        "ma10": 29.15
      },
      {
        "open": 34.0,
        "high": 34.95,
        "low": 32.0,
        "close": 32.45,
        "ma5": 31.86,
        "ma10": 30.07
      },
      {
        "open": 32.3,
        "high": 32.9,
        "low": 31.45,
        "close": 31.5,
        "ma5": 31.78,
        "ma10": 30.9
      }
    ],
    "symbol": "4707.TWO",
    "maxVol10d": 12952,
    "hasVolumeBurst": true
  },
  {
    "code": "4541",
    "name": "晟田",
    "categories": [
      "Top100"
    ],
    "price": 74.5,
    "prevClose": 72.6,
    "open": 72.7,
    "high": 76.0,
    "low": 69.4,
    "volume": 13056,
    "ma5": 69.82,
    "ma10": 66.8,
    "ma20": 66.55,
    "ma60": 57.45,
    "vMa5": 6319,
    "vMa10": 4797,
    "high20d": 81.6,
    "sparkline": [
      60.5,
      62.8,
      66.0,
      63.7,
      65.9,
      65.4,
      66.3,
      70.3,
      72.6,
      74.5
    ],
    "high5d": 76.0,
    "high10d": 76.0,
    "k3d": [
      {
        "open": 66.0,
        "high": 67.3,
        "low": 64.4,
        "close": 66.3,
        "ma5": 65.46,
        "ma10": 62.84
      },
      {
        "open": 66.5,
        "high": 71.5,
        "low": 65.1,
        "close": 70.3,
        "ma5": 66.32,
        "ma10": 63.75
      },
      {
        "open": 70.6,
        "high": 73.7,
        "low": 70.3,
        "close": 72.6,
        "ma5": 68.1,
        "ma10": 65.35
      }
    ],
    "k5d": [
      {
        "open": 65.0,
        "high": 66.2,
        "low": 64.1,
        "close": 65.4,
        "ma5": 64.76,
        "ma10": 62.5
      },
      {
        "open": 66.0,
        "high": 67.3,
        "low": 64.4,
        "close": 66.3,
        "ma5": 65.46,
        "ma10": 62.84
      },
      {
        "open": 66.5,
        "high": 71.5,
        "low": 65.1,
        "close": 70.3,
        "ma5": 66.32,
        "ma10": 63.75
      },
      {
        "open": 70.6,
        "high": 73.7,
        "low": 70.3,
        "close": 72.6,
        "ma5": 68.1,
        "ma10": 65.35
      },
      {
        "open": 72.7,
        "high": 76.0,
        "low": 69.4,
        "close": 74.5,
        "ma5": 69.82,
        "ma10": 66.8
      }
    ],
    "symbol": "4541.TWO",
    "maxVol10d": 13056,
    "hasVolumeBurst": true
  },
  {
    "code": "6603",
    "name": "富強鑫",
    "categories": [],
    "price": 28.25,
    "prevClose": 28.85,
    "open": 29.5,
    "high": 29.5,
    "low": 28.0,
    "volume": 1831,
    "ma5": 27.71,
    "ma10": 26.93,
    "ma20": 25.95,
    "ma60": 24.61,
    "vMa5": 3531,
    "vMa10": 2595,
    "high20d": 29.5,
    "sparkline": [
      26.3,
      25.95,
      26.75,
      25.75,
      26.0,
      26.85,
      26.9,
      27.7,
      28.85,
      28.25
    ],
    "high5d": 29.5,
    "high10d": 29.5,
    "k3d": [
      {
        "open": 26.85,
        "high": 27.3,
        "low": 26.1,
        "close": 26.9,
        "ma5": 26.45,
        "ma10": 26.16
      },
      {
        "open": 27.3,
        "high": 29.4,
        "low": 27.3,
        "close": 27.7,
        "ma5": 26.64,
        "ma10": 26.31
      },
      {
        "open": 28.35,
        "high": 29.3,
        "low": 28.0,
        "close": 28.85,
        "ma5": 27.26,
        "ma10": 26.72
      }
    ],
    "k5d": [
      {
        "open": 26.35,
        "high": 27.2,
        "low": 26.35,
        "close": 26.85,
        "ma5": 26.26,
        "ma10": 26.04
      },
      {
        "open": 26.85,
        "high": 27.3,
        "low": 26.1,
        "close": 26.9,
        "ma5": 26.45,
        "ma10": 26.16
      },
      {
        "open": 27.3,
        "high": 29.4,
        "low": 27.3,
        "close": 27.7,
        "ma5": 26.64,
        "ma10": 26.31
      },
      {
        "open": 28.35,
        "high": 29.3,
        "low": 28.0,
        "close": 28.85,
        "ma5": 27.26,
        "ma10": 26.72
      },
      {
        "open": 29.5,
        "high": 29.5,
        "low": 28.0,
        "close": 28.25,
        "ma5": 27.71,
        "ma10": 26.93
      }
    ],
    "symbol": "6603.TWO",
    "maxVol10d": 6392,
    "hasVolumeBurst": true
  },
  {
    "code": "5371",
    "name": "中光電",
    "categories": [
      "Top100"
    ],
    "price": 91.5,
    "prevClose": 86.3,
    "open": 86.0,
    "high": 92.6,
    "low": 85.4,
    "volume": 24354,
    "ma5": 87.5,
    "ma10": 85.56,
    "ma20": 82.45,
    "ma60": 80.27,
    "vMa5": 11584,
    "vMa10": 12609,
    "high20d": 98.3,
    "sparkline": [
      75.2,
      82.7,
      90.5,
      86.7,
      83.0,
      85.6,
      87.6,
      86.5,
      86.3,
      91.5
    ],
    "high5d": 92.6,
    "high10d": 92.6,
    "k3d": [
      {
        "open": 85.3,
        "high": 89.3,
        "low": 82.5,
        "close": 87.6,
        "ma5": 86.68,
        "ma10": 80.5
      },
      {
        "open": 86.9,
        "high": 86.9,
        "low": 84.3,
        "close": 86.5,
        "ma5": 85.88,
        "ma10": 82.0
      },
      {
        "open": 86.6,
        "high": 88.1,
        "low": 85.7,
        "close": 86.3,
        "ma5": 85.8,
        "ma10": 83.78
      }
    ],
    "k5d": [
      {
        "open": 83.0,
        "high": 85.9,
        "low": 82.5,
        "close": 85.6,
        "ma5": 85.7,
        "ma10": 79.32
      },
      {
        "open": 85.3,
        "high": 89.3,
        "low": 82.5,
        "close": 87.6,
        "ma5": 86.68,
        "ma10": 80.5
      },
      {
        "open": 86.9,
        "high": 86.9,
        "low": 84.3,
        "close": 86.5,
        "ma5": 85.88,
        "ma10": 82.0
      },
      {
        "open": 86.6,
        "high": 88.1,
        "low": 85.7,
        "close": 86.3,
        "ma5": 85.8,
        "ma10": 83.78
      },
      {
        "open": 86.0,
        "high": 92.6,
        "low": 85.4,
        "close": 91.5,
        "ma5": 87.5,
        "ma10": 85.56
      }
    ],
    "symbol": "5371.TWO",
    "maxVol10d": 24471,
    "hasVolumeBurst": true
  },
  {
    "code": "8042",
    "name": "金山電",
    "categories": [
      "Top100"
    ],
    "price": 114.0,
    "prevClose": 116.5,
    "open": 119.0,
    "high": 119.5,
    "low": 112.5,
    "volume": 2726,
    "ma5": 114.8,
    "ma10": 113.2,
    "ma20": 112.22,
    "ma60": 148.93,
    "vMa5": 7866,
    "vMa10": 6051,
    "high20d": 152.5,
    "sparkline": [
      108.5,
      110.5,
      110.0,
      112.5,
      116.5,
      114.0,
      116.5,
      113.0,
      116.5,
      114.0
    ],
    "high5d": 125.0,
    "high10d": 125.0,
    "k3d": [
      {
        "open": 114.5,
        "high": 125.0,
        "low": 114.0,
        "close": 116.5,
        "ma5": 113.9,
        "ma10": 107.24
      },
      {
        "open": 113.5,
        "high": 117.0,
        "low": 112.0,
        "close": 113.0,
        "ma5": 114.5,
        "ma10": 109.0
      },
      {
        "open": 115.0,
        "high": 123.0,
        "low": 115.0,
        "close": 116.5,
        "ma5": 115.3,
        "ma10": 111.67
      }
    ],
    "k5d": [
      {
        "open": 114.5,
        "high": 118.0,
        "low": 111.0,
        "close": 114.0,
        "ma5": 112.7,
        "ma10": 106.19
      },
      {
        "open": 114.5,
        "high": 125.0,
        "low": 114.0,
        "close": 116.5,
        "ma5": 113.9,
        "ma10": 107.24
      },
      {
        "open": 113.5,
        "high": 117.0,
        "low": 112.0,
        "close": 113.0,
        "ma5": 114.5,
        "ma10": 109.0
      },
      {
        "open": 115.0,
        "high": 123.0,
        "low": 115.0,
        "close": 116.5,
        "ma5": 115.3,
        "ma10": 111.67
      },
      {
        "open": 119.0,
        "high": 119.5,
        "low": 112.5,
        "close": 114.0,
        "ma5": 114.8,
        "ma10": 113.2
      }
    ],
    "symbol": "8042.TWO",
    "maxVol10d": 15319,
    "hasVolumeBurst": true
  },
  {
    "code": "00888",
    "name": "永豐台灣ESG",
    "categories": [
      "Top100"
    ],
    "price": 33.18,
    "prevClose": 33.32,
    "open": 33.53,
    "high": 33.63,
    "low": 33.11,
    "volume": 4657,
    "ma5": 32.87,
    "ma10": 32.29,
    "ma20": 32.3,
    "ma60": 34.66,
    "vMa5": 7170,
    "vMa10": 7321,
    "high20d": 37.55,
    "sparkline": [
      31.24,
      31.38,
      32.09,
      32.1,
      31.71,
      32.66,
      32.59,
      32.61,
      33.32,
      33.18
    ],
    "high5d": 33.64,
    "high10d": 33.64,
    "k3d": [
      {
        "open": 32.45,
        "high": 32.63,
        "low": 32.28,
        "close": 32.59,
        "ma5": 32.23,
        "ma10": 31.22
      },
      {
        "open": 32.79,
        "high": 32.85,
        "low": 32.51,
        "close": 32.61,
        "ma5": 32.33,
        "ma10": 31.65
      },
      {
        "open": 33.31,
        "high": 33.64,
        "low": 33.16,
        "close": 33.32,
        "ma5": 32.58,
        "ma10": 32.12
      }
    ],
    "k5d": [
      {
        "open": 32.1,
        "high": 32.76,
        "low": 32.1,
        "close": 32.66,
        "ma5": 31.99,
        "ma10": 30.95
      },
      {
        "open": 32.45,
        "high": 32.63,
        "low": 32.28,
        "close": 32.59,
        "ma5": 32.23,
        "ma10": 31.22
      },
      {
        "open": 32.79,
        "high": 32.85,
        "low": 32.51,
        "close": 32.61,
        "ma5": 32.33,
        "ma10": 31.65
      },
      {
        "open": 33.31,
        "high": 33.64,
        "low": 33.16,
        "close": 33.32,
        "ma5": 32.58,
        "ma10": 32.12
      },
      {
        "open": 33.53,
        "high": 33.63,
        "low": 33.11,
        "close": 33.18,
        "ma5": 32.87,
        "ma10": 32.29
      }
    ],
    "symbol": "00888.TWO",
    "maxVol10d": 12508,
    "hasVolumeBurst": true
  },
  {
    "code": "1815",
    "name": "富喬",
    "categories": [],
    "price": 91.2,
    "prevClose": 89.9,
    "open": 90.5,
    "high": 91.5,
    "low": 89.4,
    "volume": 4852,
    "ma5": 89.78,
    "ma10": 85.85,
    "ma20": 79.04,
    "ma60": 92.82,
    "vMa5": 13616,
    "vMa10": 20825,
    "high20d": 93.9,
    "sparkline": [
      72.9,
      80.1,
      83.9,
      86.8,
      85.9,
      89.1,
      88.7,
      90.0,
      89.9,
      91.2
    ],
    "high5d": 93.9,
    "high10d": 93.9,
    "k3d": [
      {
        "open": 88.9,
        "high": 88.9,
        "low": 87.2,
        "close": 88.7,
        "ma5": 86.88,
        "ma10": 77.67
      },
      {
        "open": 89.3,
        "high": 90.9,
        "low": 89.3,
        "close": 90.0,
        "ma5": 88.1,
        "ma10": 80.4
      },
      {
        "open": 91.5,
        "high": 91.5,
        "low": 89.0,
        "close": 89.9,
        "ma5": 88.72,
        "ma10": 83.36
      }
    ],
    "k5d": [
      {
        "open": 86.0,
        "high": 93.9,
        "low": 85.1,
        "close": 89.1,
        "ma5": 85.16,
        "ma10": 75.59
      },
      {
        "open": 88.9,
        "high": 88.9,
        "low": 87.2,
        "close": 88.7,
        "ma5": 86.88,
        "ma10": 77.67
      },
      {
        "open": 89.3,
        "high": 90.9,
        "low": 89.3,
        "close": 90.0,
        "ma5": 88.1,
        "ma10": 80.4
      },
      {
        "open": 91.5,
        "high": 91.5,
        "low": 89.0,
        "close": 89.9,
        "ma5": 88.72,
        "ma10": 83.36
      },
      {
        "open": 90.5,
        "high": 91.5,
        "low": 89.4,
        "close": 91.2,
        "ma5": 89.78,
        "ma10": 85.85
      }
    ],
    "symbol": "1815.TWO",
    "maxVol10d": 48946,
    "hasVolumeBurst": true
  },
  {
    "code": "4716",
    "name": "大立",
    "categories": [],
    "price": 17.85,
    "prevClose": 17.35,
    "open": 17.5,
    "high": 18.55,
    "low": 17.45,
    "volume": 1229,
    "ma5": 17.76,
    "ma10": 17.37,
    "ma20": 17.44,
    "ma60": 18.68,
    "vMa5": 2637,
    "vMa10": 1664,
    "high20d": 21.05,
    "sparkline": [
      16.5,
      17.55,
      17.0,
      17.2,
      16.65,
      17.3,
      18.9,
      17.4,
      17.35,
      17.85
    ],
    "high5d": 19.25,
    "high10d": 19.25,
    "k3d": [
      {
        "open": 17.5,
        "high": 19.0,
        "low": 17.2,
        "close": 18.9,
        "ma5": 17.41,
        "ma10": 17.03
      },
      {
        "open": 18.9,
        "high": 19.25,
        "low": 17.3,
        "close": 17.4,
        "ma5": 17.49,
        "ma10": 17.13
      },
      {
        "open": 17.55,
        "high": 17.9,
        "low": 17.3,
        "close": 17.35,
        "ma5": 17.52,
        "ma10": 17.23
      }
    ],
    "k5d": [
      {
        "open": 16.5,
        "high": 17.65,
        "low": 16.45,
        "close": 17.3,
        "ma5": 17.14,
        "ma10": 16.85
      },
      {
        "open": 17.5,
        "high": 19.0,
        "low": 17.2,
        "close": 18.9,
        "ma5": 17.41,
        "ma10": 17.03
      },
      {
        "open": 18.9,
        "high": 19.25,
        "low": 17.3,
        "close": 17.4,
        "ma5": 17.49,
        "ma10": 17.13
      },
      {
        "open": 17.55,
        "high": 17.9,
        "low": 17.3,
        "close": 17.35,
        "ma5": 17.52,
        "ma10": 17.23
      },
      {
        "open": 17.5,
        "high": 18.55,
        "low": 17.45,
        "close": 17.85,
        "ma5": 17.76,
        "ma10": 17.37
      }
    ],
    "symbol": "4716.TWO",
    "maxVol10d": 6171,
    "hasVolumeBurst": true
  },
  {
    "code": "00950B",
    "name": "凱基A級公司債",
    "categories": [],
    "price": 13.82,
    "prevClose": 13.85,
    "open": 13.86,
    "high": 13.88,
    "low": 13.82,
    "volume": 2422,
    "ma5": 13.86,
    "ma10": 13.91,
    "ma20": 13.98,
    "ma60": 14.07,
    "vMa5": 3864,
    "vMa10": 4047,
    "high20d": 14.17,
    "sparkline": [
      13.9,
      13.94,
      14.03,
      14.0,
      13.92,
      13.95,
      13.85,
      13.85,
      13.85,
      13.82
    ],
    "high5d": 13.97,
    "high10d": 14.05,
    "k3d": [
      {
        "open": 13.85,
        "high": 13.86,
        "low": 13.83,
        "close": 13.85,
        "ma5": 13.95,
        "ma10": 13.96
      },
      {
        "open": 13.86,
        "high": 13.86,
        "low": 13.84,
        "close": 13.85,
        "ma5": 13.91,
        "ma10": 13.94
      },
      {
        "open": 13.88,
        "high": 13.88,
        "low": 13.84,
        "close": 13.85,
        "ma5": 13.88,
        "ma10": 13.93
      }
    ],
    "k5d": [
      {
        "open": 13.91,
        "high": 13.97,
        "low": 13.91,
        "close": 13.95,
        "ma5": 13.97,
        "ma10": 13.98
      },
      {
        "open": 13.85,
        "high": 13.86,
        "low": 13.83,
        "close": 13.85,
        "ma5": 13.95,
        "ma10": 13.96
      },
      {
        "open": 13.86,
        "high": 13.86,
        "low": 13.84,
        "close": 13.85,
        "ma5": 13.91,
        "ma10": 13.94
      },
      {
        "open": 13.88,
        "high": 13.88,
        "low": 13.84,
        "close": 13.85,
        "ma5": 13.88,
        "ma10": 13.93
      },
      {
        "open": 13.86,
        "high": 13.88,
        "low": 13.82,
        "close": 13.82,
        "ma5": 13.86,
        "ma10": 13.91
      }
    ],
    "symbol": "00950B.TWO",
    "maxVol10d": 7683,
    "hasVolumeBurst": true
  },
  {
    "code": "5425",
    "name": "台半",
    "categories": [
      "Top100"
    ],
    "price": 85.7,
    "prevClose": 88.8,
    "open": 89.7,
    "high": 89.7,
    "low": 85.4,
    "volume": 4537,
    "ma5": 86.3,
    "ma10": 84.44,
    "ma20": 82.75,
    "ma60": 102.16,
    "vMa5": 7923,
    "vMa10": 8337,
    "high20d": 107.0,
    "sparkline": [
      80.4,
      81.6,
      83.5,
      84.9,
      82.5,
      84.3,
      86.0,
      86.7,
      88.8,
      85.7
    ],
    "high5d": 93.2,
    "high10d": 93.2,
    "k3d": [
      {
        "open": 84.3,
        "high": 88.8,
        "low": 83.6,
        "close": 86.0,
        "ma5": 84.24,
        "ma10": 79.36
      },
      {
        "open": 86.1,
        "high": 87.3,
        "low": 85.1,
        "close": 86.7,
        "ma5": 84.88,
        "ma10": 81.02
      },
      {
        "open": 89.2,
        "high": 93.2,
        "low": 88.4,
        "close": 88.8,
        "ma5": 85.66,
        "ma10": 83.18
      }
    ],
    "k5d": [
      {
        "open": 82.7,
        "high": 86.0,
        "low": 82.7,
        "close": 84.3,
        "ma5": 83.36,
        "ma10": 78.29
      },
      {
        "open": 84.3,
        "high": 88.8,
        "low": 83.6,
        "close": 86.0,
        "ma5": 84.24,
        "ma10": 79.36
      },
      {
        "open": 86.1,
        "high": 87.3,
        "low": 85.1,
        "close": 86.7,
        "ma5": 84.88,
        "ma10": 81.02
      },
      {
        "open": 89.2,
        "high": 93.2,
        "low": 88.4,
        "close": 88.8,
        "ma5": 85.66,
        "ma10": 83.18
      },
      {
        "open": 89.7,
        "high": 89.7,
        "low": 85.4,
        "close": 85.7,
        "ma5": 86.3,
        "ma10": 84.44
      }
    ],
    "symbol": "5425.TWO",
    "maxVol10d": 14658,
    "hasVolumeBurst": true
  },
  {
    "code": "3624",
    "name": "光頡",
    "categories": [
      "Top100"
    ],
    "price": 89.1,
    "prevClose": 95.1,
    "open": 96.2,
    "high": 99.4,
    "low": 88.6,
    "volume": 8603,
    "ma5": 87.62,
    "ma10": 79.57,
    "ma20": 78.79,
    "ma60": 111.04,
    "vMa5": 7900,
    "vMa10": 4578,
    "high20d": 115.0,
    "sparkline": [
      64.4,
      68.0,
      74.8,
      75.6,
      74.8,
      82.2,
      85.2,
      86.5,
      95.1,
      89.1
    ],
    "high5d": 99.4,
    "high10d": 99.4,
    "k3d": [
      {
        "open": 82.2,
        "high": 89.4,
        "low": 80.3,
        "close": 85.2,
        "ma5": 78.52,
        "ma10": 70.67
      },
      {
        "open": 86.2,
        "high": 88.4,
        "low": 83.6,
        "close": 86.5,
        "ma5": 80.86,
        "ma10": 73.09
      },
      {
        "open": 88.5,
        "high": 95.1,
        "low": 88.5,
        "close": 95.1,
        "ma5": 84.76,
        "ma10": 76.91
      }
    ],
    "k5d": [
      {
        "open": 76.0,
        "high": 82.2,
        "low": 76.0,
        "close": 82.2,
        "ma5": 75.08,
        "ma10": 69.07
      },
      {
        "open": 82.2,
        "high": 89.4,
        "low": 80.3,
        "close": 85.2,
        "ma5": 78.52,
        "ma10": 70.67
      },
      {
        "open": 86.2,
        "high": 88.4,
        "low": 83.6,
        "close": 86.5,
        "ma5": 80.86,
        "ma10": 73.09
      },
      {
        "open": 88.5,
        "high": 95.1,
        "low": 88.5,
        "close": 95.1,
        "ma5": 84.76,
        "ma10": 76.91
      },
      {
        "open": 96.2,
        "high": 99.4,
        "low": 88.6,
        "close": 89.1,
        "ma5": 87.62,
        "ma10": 79.57
      }
    ],
    "symbol": "3624.TWO",
    "maxVol10d": 12192,
    "hasVolumeBurst": true
  },
  {
    "code": "5864",
    "name": "致和證",
    "categories": [],
    "price": 34.45,
    "prevClose": 33.9,
    "open": 33.9,
    "high": 35.0,
    "low": 33.8,
    "volume": 2865,
    "ma5": 32.36,
    "ma10": 31.19,
    "ma20": 31.36,
    "ma60": 37.38,
    "vMa5": 3888,
    "vMa10": 4116,
    "high20d": 37.2,
    "sparkline": [
      30.15,
      30.85,
      31.15,
      29.15,
      28.8,
      29.55,
      30.45,
      33.45,
      33.9,
      34.45
    ],
    "high5d": 35.0,
    "high10d": 35.0,
    "k3d": [
      {
        "open": 29.6,
        "high": 30.45,
        "low": 29.2,
        "close": 30.45,
        "ma5": 29.82,
        "ma10": 29.72
      },
      {
        "open": 30.8,
        "high": 33.45,
        "low": 30.8,
        "close": 33.45,
        "ma5": 30.28,
        "ma10": 30.18
      },
      {
        "open": 33.6,
        "high": 34.35,
        "low": 33.5,
        "close": 33.9,
        "ma5": 31.23,
        "ma10": 30.8
      }
    ],
    "k5d": [
      {
        "open": 29.15,
        "high": 29.6,
        "low": 28.55,
        "close": 29.55,
        "ma5": 29.9,
        "ma10": 29.71
      },
      {
        "open": 29.6,
        "high": 30.45,
        "low": 29.2,
        "close": 30.45,
        "ma5": 29.82,
        "ma10": 29.72
      },
      {
        "open": 30.8,
        "high": 33.45,
        "low": 30.8,
        "close": 33.45,
        "ma5": 30.28,
        "ma10": 30.18
      },
      {
        "open": 33.6,
        "high": 34.35,
        "low": 33.5,
        "close": 33.9,
        "ma5": 31.23,
        "ma10": 30.8
      },
      {
        "open": 33.9,
        "high": 35.0,
        "low": 33.8,
        "close": 34.45,
        "ma5": 32.36,
        "ma10": 31.19
      }
    ],
    "symbol": "5864.TWO",
    "maxVol10d": 7477,
    "hasVolumeBurst": true
  },
  {
    "code": "4939",
    "name": "亞電",
    "categories": [
      "Top100"
    ],
    "price": 62.8,
    "prevClose": 63.9,
    "open": 65.4,
    "high": 65.5,
    "low": 62.5,
    "volume": 15430,
    "ma5": 62.1,
    "ma10": 60.42,
    "ma20": 60.48,
    "ma60": 59.02,
    "vMa5": 10415,
    "vMa10": 12853,
    "high20d": 78.2,
    "sparkline": [
      55.8,
      56.3,
      59.4,
      61.4,
      60.8,
      61.3,
      61.7,
      60.8,
      63.9,
      62.8
    ],
    "high5d": 65.5,
    "high10d": 67.2,
    "k3d": [
      {
        "open": 60.8,
        "high": 62.0,
        "low": 59.1,
        "close": 61.7,
        "ma5": 60.92,
        "ma10": 56.4
      },
      {
        "open": 61.0,
        "high": 62.8,
        "low": 60.8,
        "close": 60.8,
        "ma5": 61.2,
        "ma10": 57.48
      },
      {
        "open": 61.1,
        "high": 64.9,
        "low": 61.1,
        "close": 63.9,
        "ma5": 61.7,
        "ma10": 59.22
      }
    ],
    "k5d": [
      {
        "open": 60.8,
        "high": 62.8,
        "low": 60.1,
        "close": 61.3,
        "ma5": 59.84,
        "ma10": 55.78
      },
      {
        "open": 60.8,
        "high": 62.0,
        "low": 59.1,
        "close": 61.7,
        "ma5": 60.92,
        "ma10": 56.4
      },
      {
        "open": 61.0,
        "high": 62.8,
        "low": 60.8,
        "close": 60.8,
        "ma5": 61.2,
        "ma10": 57.48
      },
      {
        "open": 61.1,
        "high": 64.9,
        "low": 61.1,
        "close": 63.9,
        "ma5": 61.7,
        "ma10": 59.22
      },
      {
        "open": 65.4,
        "high": 65.5,
        "low": 62.5,
        "close": 62.8,
        "ma5": 62.1,
        "ma10": 60.42
      }
    ],
    "symbol": "4939.TWO",
    "maxVol10d": 21750,
    "hasVolumeBurst": true
  },
  {
    "code": "3234",
    "name": "光環",
    "categories": [
      "Top100"
    ],
    "price": 136.5,
    "prevClose": 141.0,
    "open": 138.0,
    "high": 141.0,
    "low": 135.0,
    "volume": 2423,
    "ma5": 130.0,
    "ma10": 120.0,
    "ma20": 109.83,
    "ma60": 118.06,
    "vMa5": 4194,
    "vMa10": 2934,
    "high20d": 146.0,
    "sparkline": [
      104.0,
      113.0,
      115.0,
      110.5,
      107.5,
      118.0,
      121.5,
      133.0,
      141.0,
      136.5
    ],
    "high5d": 146.0,
    "high10d": 146.0,
    "k3d": [
      {
        "open": 120.0,
        "high": 124.5,
        "low": 114.0,
        "close": 121.5,
        "ma5": 114.5,
        "ma10": 106.22
      },
      {
        "open": 117.0,
        "high": 133.5,
        "low": 117.0,
        "close": 133.0,
        "ma5": 118.1,
        "ma10": 110.52
      },
      {
        "open": 133.5,
        "high": 146.0,
        "low": 133.5,
        "close": 141.0,
        "ma5": 124.2,
        "ma10": 115.92
      }
    ],
    "k5d": [
      {
        "open": 118.0,
        "high": 118.0,
        "low": 116.0,
        "close": 118.0,
        "ma5": 112.8,
        "ma10": 104.06
      },
      {
        "open": 120.0,
        "high": 124.5,
        "low": 114.0,
        "close": 121.5,
        "ma5": 114.5,
        "ma10": 106.22
      },
      {
        "open": 117.0,
        "high": 133.5,
        "low": 117.0,
        "close": 133.0,
        "ma5": 118.1,
        "ma10": 110.52
      },
      {
        "open": 133.5,
        "high": 146.0,
        "low": 133.5,
        "close": 141.0,
        "ma5": 124.2,
        "ma10": 115.92
      },
      {
        "open": 138.0,
        "high": 141.0,
        "low": 135.0,
        "close": 136.5,
        "ma5": 130.0,
        "ma10": 120.0
      }
    ],
    "symbol": "3234.TWO",
    "maxVol10d": 7998,
    "hasVolumeBurst": true
  },
  {
    "code": "4938",
    "name": "和碩",
    "categories": [
      "SitcaBuy",
      "Top100",
      "MajorBuy"
    ],
    "price": 95.1,
    "prevClose": 94.8,
    "open": 95.3,
    "high": 97.0,
    "low": 93.7,
    "volume": 13769,
    "ma5": 92.02,
    "ma10": 89.97,
    "ma20": 87.0,
    "ma60": 86.32,
    "vMa5": 22815,
    "vMa10": 16897,
    "high5d": 100.5,
    "high10d": 100.5,
    "high20d": 100.5,
    "sparkline": [
      86.6,
      88.4,
      89.5,
      88.0,
      87.1,
      89.5,
      89.0,
      91.4,
      94.8,
      95.1
    ],
    "k3d": [
      {
        "open": 87.5,
        "high": 89.0,
        "low": 84.7,
        "close": 89.0,
        "ma5": 88.62,
        "ma10": 86.5
      },
      {
        "open": 88.9,
        "high": 91.5,
        "low": 88.9,
        "close": 91.4,
        "ma5": 89.0,
        "ma10": 87.44
      },
      {
        "open": 93.6,
        "high": 100.5,
        "low": 93.5,
        "close": 94.8,
        "ma5": 90.36,
        "ma10": 88.87
      }
    ],
    "k5d": [
      {
        "open": 88.4,
        "high": 89.7,
        "low": 87.1,
        "close": 89.5,
        "ma5": 88.5,
        "ma10": 85.92
      },
      {
        "open": 87.5,
        "high": 89.0,
        "low": 84.7,
        "close": 89.0,
        "ma5": 88.62,
        "ma10": 86.5
      },
      {
        "open": 88.9,
        "high": 91.5,
        "low": 88.9,
        "close": 91.4,
        "ma5": 89.0,
        "ma10": 87.44
      },
      {
        "open": 93.6,
        "high": 100.5,
        "low": 93.5,
        "close": 94.8,
        "ma5": 90.36,
        "ma10": 88.87
      },
      {
        "open": 95.3,
        "high": 97.0,
        "low": 93.7,
        "close": 95.4,
        "ma5": 92.02,
        "ma10": 89.97
      }
    ],
    "symbol": "4938.TW",
    "maxVol10d": 66267,
    "hasVolumeBurst": true
  },
  {
    "code": "2855",
    "name": "統一證",
    "categories": [
      "SitcaBuy"
    ],
    "price": 47.35,
    "prevClose": 47.35,
    "open": 47.5,
    "high": 48.35,
    "low": 47.2,
    "volume": 2154,
    "ma5": 46.89,
    "ma10": 45.88,
    "ma20": 44.51,
    "ma60": 47.99,
    "vMa5": 4006,
    "vMa10": 4036,
    "high5d": 48.5,
    "high10d": 48.5,
    "high20d": 48.5,
    "sparkline": [
      44.15,
      44.75,
      45.85,
      45.1,
      44.5,
      45.85,
      46.2,
      47.5,
      47.35,
      47.35
    ],
    "k3d": [
      {
        "open": 45.55,
        "high": 46.25,
        "low": 45.25,
        "close": 46.2,
        "ma5": 45.5,
        "ma10": 44.06
      },
      {
        "open": 46.4,
        "high": 48.0,
        "low": 46.4,
        "close": 47.5,
        "ma5": 45.83,
        "ma10": 44.73
      },
      {
        "open": 48.05,
        "high": 48.5,
        "low": 47.1,
        "close": 47.35,
        "ma5": 46.28,
        "ma10": 45.45
      }
    ],
    "k5d": [
      {
        "open": 44.5,
        "high": 46.1,
        "low": 44.05,
        "close": 45.85,
        "ma5": 45.21,
        "ma10": 43.66
      },
      {
        "open": 45.55,
        "high": 46.25,
        "low": 45.25,
        "close": 46.2,
        "ma5": 45.5,
        "ma10": 44.06
      },
      {
        "open": 46.4,
        "high": 48.0,
        "low": 46.4,
        "close": 47.5,
        "ma5": 45.83,
        "ma10": 44.73
      },
      {
        "open": 48.05,
        "high": 48.5,
        "low": 47.1,
        "close": 47.35,
        "ma5": 46.28,
        "ma10": 45.45
      },
      {
        "open": 47.5,
        "high": 48.35,
        "low": 47.2,
        "close": 47.55,
        "ma5": 46.89,
        "ma10": 45.88
      }
    ],
    "symbol": "2855.TW",
    "maxVol10d": 5868,
    "hasVolumeBurst": false
  },
  {
    "code": "3450",
    "name": "聯鈞",
    "categories": [
      "SitcaBuy"
    ],
    "price": 497.0,
    "prevClose": 527.0,
    "open": 516.0,
    "high": 516.0,
    "low": 491.0,
    "volume": 1014,
    "ma5": 504.5,
    "ma10": 480.7,
    "ma20": 445.05,
    "ma60": 488.62,
    "vMa5": 4383,
    "vMa10": 9407,
    "high5d": 543.0,
    "high10d": 543.0,
    "high20d": 543.0,
    "sparkline": [
      409.0,
      432.0,
      475.0,
      491.5,
      477.0,
      524.0,
      473.5,
      507.0,
      527.0,
      497.0
    ],
    "k3d": [
      {
        "open": 500.0,
        "high": 507.0,
        "low": 472.0,
        "close": 473.5,
        "ma5": 488.2,
        "ma10": 435.7
      },
      {
        "open": 484.5,
        "high": 508.0,
        "low": 484.5,
        "close": 507.0,
        "ma5": 494.6,
        "ma10": 449.95
      },
      {
        "open": 525.0,
        "high": 543.0,
        "low": 499.5,
        "close": 527.0,
        "ma5": 501.7,
        "ma10": 468.8
      }
    ],
    "k5d": [
      {
        "open": 495.0,
        "high": 524.0,
        "low": 495.0,
        "close": 524.0,
        "ma5": 479.9,
        "ma10": 428.85
      },
      {
        "open": 500.0,
        "high": 507.0,
        "low": 472.0,
        "close": 473.5,
        "ma5": 488.2,
        "ma10": 435.7
      },
      {
        "open": 484.5,
        "high": 508.0,
        "low": 484.5,
        "close": 507.0,
        "ma5": 494.6,
        "ma10": 449.95
      },
      {
        "open": 525.0,
        "high": 543.0,
        "low": 499.5,
        "close": 527.0,
        "ma5": 501.7,
        "ma10": 468.8
      },
      {
        "open": 516.0,
        "high": 516.0,
        "low": 491.0,
        "close": 491.0,
        "ma5": 504.5,
        "ma10": 480.7
      }
    ],
    "symbol": "3450.TW",
    "maxVol10d": 22467,
    "hasVolumeBurst": true
  },
  {
    "code": "6805",
    "name": "富世達",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1825.0,
    "prevClose": 1830.0,
    "open": 1860.0,
    "high": 1895.0,
    "low": 1820.0,
    "volume": 761,
    "ma5": 1807.0,
    "ma10": 1712.5,
    "ma20": 1537.25,
    "ma60": 1654.75,
    "vMa5": 2066,
    "vMa10": 2234,
    "high5d": 1915.0,
    "high10d": 1915.0,
    "high20d": 1915.0,
    "sparkline": [
      1470.0,
      1590.0,
      1600.0,
      1760.0,
      1670.0,
      1755.0,
      1790.0,
      1835.0,
      1830.0,
      1825.0
    ],
    "k3d": [
      {
        "open": 1725.0,
        "high": 1840.0,
        "low": 1725.0,
        "close": 1790.0,
        "ma5": 1715.0,
        "ma10": 1548.0
      },
      {
        "open": 1790.0,
        "high": 1860.0,
        "low": 1780.0,
        "close": 1835.0,
        "ma5": 1762.0,
        "ma10": 1605.0
      },
      {
        "open": 1850.0,
        "high": 1915.0,
        "low": 1825.0,
        "close": 1830.0,
        "ma5": 1776.0,
        "ma10": 1665.0
      }
    ],
    "k5d": [
      {
        "open": 1720.0,
        "high": 1825.0,
        "low": 1680.0,
        "close": 1755.0,
        "ma5": 1675.0,
        "ma10": 1503.0
      },
      {
        "open": 1725.0,
        "high": 1840.0,
        "low": 1725.0,
        "close": 1790.0,
        "ma5": 1715.0,
        "ma10": 1548.0
      },
      {
        "open": 1790.0,
        "high": 1860.0,
        "low": 1780.0,
        "close": 1835.0,
        "ma5": 1762.0,
        "ma10": 1605.0
      },
      {
        "open": 1850.0,
        "high": 1915.0,
        "low": 1825.0,
        "close": 1830.0,
        "ma5": 1776.0,
        "ma10": 1665.0
      },
      {
        "open": 1860.0,
        "high": 1895.0,
        "low": 1820.0,
        "close": 1825.0,
        "ma5": 1807.0,
        "ma10": 1712.5
      }
    ],
    "symbol": "6805.TW",
    "maxVol10d": 3185,
    "hasVolumeBurst": true
  },
  {
    "code": "00980A",
    "name": "主動野村臺灣優選",
    "categories": [
      "SitcaBuy"
    ],
    "price": 25.35,
    "prevClose": 25.2,
    "open": 25.5,
    "high": 25.54,
    "low": 25.3,
    "volume": 15879,
    "ma5": 24.42,
    "ma10": 23.54,
    "ma20": 22.53,
    "ma60": 23.62,
    "vMa5": 13950,
    "vMa10": 20640,
    "high5d": 25.54,
    "high10d": 25.54,
    "high20d": 25.54,
    "sparkline": [
      21.46,
      22.13,
      22.66,
      23.31,
      23.73,
      23.57,
      24.09,
      24.29,
      24.73,
      25.35
    ],
    "k3d": [
      {
        "open": 24.1,
        "high": 24.39,
        "low": 23.99,
        "close": 24.09,
        "ma5": 23.47,
        "ma10": 22.09
      },
      {
        "open": 24.01,
        "high": 24.32,
        "low": 23.87,
        "close": 24.29,
        "ma5": 23.8,
        "ma10": 22.44
      },
      {
        "open": 25.18,
        "high": 25.3,
        "low": 25.02,
        "close": 25.2,
        "ma5": 24.18,
        "ma10": 23.0
      }
    ],
    "k5d": [
      {
        "open": 24.0,
        "high": 24.0,
        "low": 23.4,
        "close": 23.57,
        "ma5": 23.08,
        "ma10": 21.91
      },
      {
        "open": 24.1,
        "high": 24.39,
        "low": 23.99,
        "close": 24.09,
        "ma5": 23.47,
        "ma10": 22.09
      },
      {
        "open": 24.01,
        "high": 24.32,
        "low": 23.87,
        "close": 24.29,
        "ma5": 23.8,
        "ma10": 22.44
      },
      {
        "open": 24.55,
        "high": 24.75,
        "low": 24.49,
        "close": 24.73,
        "ma5": 24.08,
        "ma10": 22.95
      },
      {
        "open": 25.5,
        "high": 25.54,
        "low": 25.3,
        "close": 25.41,
        "ma5": 24.42,
        "ma10": 23.54
      }
    ],
    "symbol": "00980A.TW",
    "maxVol10d": 52383,
    "hasVolumeBurst": true
  },
  {
    "code": "2542",
    "name": "興富發",
    "categories": [
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 45.95,
    "prevClose": 46.4,
    "open": 46.2,
    "high": 46.65,
    "low": 45.75,
    "volume": 5423,
    "ma5": 45.24,
    "ma10": 44.66,
    "ma20": 44.3,
    "ma60": 43.72,
    "vMa5": 7455,
    "vMa10": 6233,
    "high5d": 46.65,
    "high10d": 46.65,
    "high20d": 46.65,
    "sparkline": [
      43.85,
      44.15,
      44.05,
      44.1,
      44.3,
      44.35,
      44.55,
      44.8,
      46.4,
      45.95
    ],
    "k3d": [
      {
        "open": 44.35,
        "high": 44.55,
        "low": 44.15,
        "close": 44.55,
        "ma5": 44.27,
        "ma10": 44.09
      },
      {
        "open": 44.7,
        "high": 44.85,
        "low": 44.5,
        "close": 44.8,
        "ma5": 44.42,
        "ma10": 44.25
      },
      {
        "open": 45.0,
        "high": 46.4,
        "low": 44.9,
        "close": 46.4,
        "ma5": 44.88,
        "ma10": 44.45
      }
    ],
    "k5d": [
      {
        "open": 44.05,
        "high": 44.45,
        "low": 43.85,
        "close": 44.35,
        "ma5": 44.19,
        "ma10": 43.93
      },
      {
        "open": 44.35,
        "high": 44.55,
        "low": 44.15,
        "close": 44.55,
        "ma5": 44.27,
        "ma10": 44.09
      },
      {
        "open": 44.7,
        "high": 44.85,
        "low": 44.5,
        "close": 44.8,
        "ma5": 44.42,
        "ma10": 44.25
      },
      {
        "open": 45.0,
        "high": 46.4,
        "low": 44.9,
        "close": 46.4,
        "ma5": 44.88,
        "ma10": 44.45
      },
      {
        "open": 46.2,
        "high": 46.65,
        "low": 45.75,
        "close": 46.1,
        "ma5": 45.24,
        "ma10": 44.66
      }
    ],
    "symbol": "2542.TW",
    "maxVol10d": 16696,
    "hasVolumeBurst": true
  },
  {
    "code": "2633",
    "name": "台灣高鐵",
    "categories": [
      "SitcaBuy"
    ],
    "price": 25.9,
    "prevClose": 25.95,
    "open": 25.95,
    "high": 25.95,
    "low": 25.8,
    "volume": 1667,
    "ma5": 25.85,
    "ma10": 25.84,
    "ma20": 25.94,
    "ma60": 25.9,
    "vMa5": 4284,
    "vMa10": 4548,
    "high5d": 26.0,
    "high10d": 26.15,
    "high20d": 26.6,
    "sparkline": [
      25.9,
      25.75,
      25.9,
      25.8,
      25.8,
      25.9,
      25.7,
      25.8,
      25.95,
      25.9
    ],
    "k3d": [
      {
        "open": 25.75,
        "high": 25.9,
        "low": 25.6,
        "close": 25.7,
        "ma5": 25.82,
        "ma10": 25.91
      },
      {
        "open": 25.8,
        "high": 25.85,
        "low": 25.75,
        "close": 25.8,
        "ma5": 25.8,
        "ma10": 25.89
      },
      {
        "open": 25.85,
        "high": 25.95,
        "low": 25.7,
        "close": 25.95,
        "ma5": 25.83,
        "ma10": 25.85
      }
    ],
    "k5d": [
      {
        "open": 26.0,
        "high": 26.0,
        "low": 25.65,
        "close": 25.9,
        "ma5": 25.83,
        "ma10": 25.94
      },
      {
        "open": 25.75,
        "high": 25.9,
        "low": 25.6,
        "close": 25.7,
        "ma5": 25.82,
        "ma10": 25.91
      },
      {
        "open": 25.8,
        "high": 25.85,
        "low": 25.75,
        "close": 25.8,
        "ma5": 25.8,
        "ma10": 25.89
      },
      {
        "open": 25.85,
        "high": 25.95,
        "low": 25.7,
        "close": 25.95,
        "ma5": 25.83,
        "ma10": 25.85
      },
      {
        "open": 25.95,
        "high": 25.95,
        "low": 25.8,
        "close": 25.9,
        "ma5": 25.85,
        "ma10": 25.84
      }
    ],
    "symbol": "2633.TW",
    "maxVol10d": 6992,
    "hasVolumeBurst": true
  },
  {
    "code": "3044",
    "name": "健鼎",
    "categories": [
      "SitcaBuy"
    ],
    "price": 493.0,
    "prevClose": 495.0,
    "open": 492.0,
    "high": 505.0,
    "low": 488.0,
    "volume": 3537,
    "ma5": 463.4,
    "ma10": 427.3,
    "ma20": 404.12,
    "ma60": 466.31,
    "vMa5": 6161,
    "vMa10": 4635,
    "high5d": 524.0,
    "high10d": 524.0,
    "high20d": 524.0,
    "sparkline": [
      374.0,
      392.0,
      398.5,
      397.5,
      394.0,
      401.5,
      441.5,
      485.5,
      495.0,
      493.0
    ],
    "k3d": [
      {
        "open": 441.5,
        "high": 441.5,
        "low": 430.0,
        "close": 441.5,
        "ma5": 406.6,
        "ma10": 384.95
      },
      {
        "open": 485.5,
        "high": 485.5,
        "low": 485.5,
        "close": 485.5,
        "ma5": 424.0,
        "ma10": 399.55
      },
      {
        "open": 502.0,
        "high": 524.0,
        "low": 485.5,
        "close": 495.0,
        "ma5": 443.5,
        "ma10": 414.85
      }
    ],
    "k5d": [
      {
        "open": 396.5,
        "high": 410.5,
        "low": 396.5,
        "close": 401.5,
        "ma5": 396.7,
        "ma10": 376.75
      },
      {
        "open": 441.5,
        "high": 441.5,
        "low": 430.0,
        "close": 441.5,
        "ma5": 406.6,
        "ma10": 384.95
      },
      {
        "open": 485.5,
        "high": 485.5,
        "low": 485.5,
        "close": 485.5,
        "ma5": 424.0,
        "ma10": 399.55
      },
      {
        "open": 502.0,
        "high": 524.0,
        "low": 485.5,
        "close": 495.0,
        "ma5": 443.5,
        "ma10": 414.85
      },
      {
        "open": 492.0,
        "high": 505.0,
        "low": 488.0,
        "close": 493.5,
        "ma5": 463.4,
        "ma10": 427.3
      }
    ],
    "symbol": "3044.TW",
    "maxVol10d": 13891,
    "hasVolumeBurst": true
  },
  {
    "code": "4915",
    "name": "致伸",
    "categories": [
      "SitcaBuy"
    ],
    "price": 60.8,
    "prevClose": 60.7,
    "open": 60.8,
    "high": 61.1,
    "low": 60.2,
    "volume": 1195,
    "ma5": 60.5,
    "ma10": 61.58,
    "ma20": 63.24,
    "ma60": 69.12,
    "vMa5": 2592,
    "vMa10": 3666,
    "high5d": 61.1,
    "high10d": 65.3,
    "high20d": 67.6,
    "sparkline": [
      64.6,
      63.6,
      63.7,
      61.9,
      59.5,
      60.7,
      60.0,
      60.4,
      60.7,
      60.8
    ],
    "k3d": [
      {
        "open": 60.4,
        "high": 60.7,
        "low": 59.2,
        "close": 60.0,
        "ma5": 61.16,
        "ma10": 62.6
      },
      {
        "open": 60.1,
        "high": 60.8,
        "low": 59.9,
        "close": 60.4,
        "ma5": 60.5,
        "ma10": 62.34
      },
      {
        "open": 61.0,
        "high": 61.0,
        "low": 60.2,
        "close": 60.7,
        "ma5": 60.26,
        "ma10": 62.05
      }
    ],
    "k5d": [
      {
        "open": 60.2,
        "high": 60.9,
        "low": 59.8,
        "close": 60.7,
        "ma5": 61.88,
        "ma10": 63.04
      },
      {
        "open": 60.4,
        "high": 60.7,
        "low": 59.2,
        "close": 60.0,
        "ma5": 61.16,
        "ma10": 62.6
      },
      {
        "open": 60.1,
        "high": 60.8,
        "low": 59.9,
        "close": 60.4,
        "ma5": 60.5,
        "ma10": 62.34
      },
      {
        "open": 61.0,
        "high": 61.0,
        "low": 60.2,
        "close": 60.7,
        "ma5": 60.26,
        "ma10": 62.05
      },
      {
        "open": 60.8,
        "high": 61.1,
        "low": 60.2,
        "close": 60.7,
        "ma5": 60.5,
        "ma10": 61.58
      }
    ],
    "symbol": "4915.TW",
    "maxVol10d": 8650,
    "hasVolumeBurst": true
  },
  {
    "code": "4551",
    "name": "智伸科",
    "categories": [
      "SitcaBuy"
    ],
    "price": 164.5,
    "prevClose": 174.0,
    "open": 176.0,
    "high": 176.0,
    "low": 164.0,
    "volume": 1573,
    "ma5": 168.5,
    "ma10": 166.85,
    "ma20": 170.28,
    "ma60": 186.57,
    "vMa5": 2047,
    "vMa10": 1444,
    "high5d": 182.0,
    "high10d": 182.0,
    "high20d": 200.0,
    "sparkline": [
      160.0,
      163.0,
      165.5,
      170.0,
      167.5,
      174.0,
      157.0,
      172.5,
      174.0,
      164.5
    ],
    "k3d": [
      {
        "open": 171.0,
        "high": 171.0,
        "low": 157.0,
        "close": 157.0,
        "ma5": 166.8,
        "ma10": 162.9
      },
      {
        "open": 157.5,
        "high": 172.5,
        "low": 157.0,
        "close": 172.5,
        "ma5": 168.2,
        "ma10": 164.1
      },
      {
        "open": 174.0,
        "high": 182.0,
        "low": 174.0,
        "close": 174.0,
        "ma5": 169.0,
        "ma10": 166.65
      }
    ],
    "k5d": [
      {
        "open": 169.5,
        "high": 174.0,
        "low": 163.5,
        "close": 174.0,
        "ma5": 168.0,
        "ma10": 163.9
      },
      {
        "open": 171.0,
        "high": 171.0,
        "low": 157.0,
        "close": 157.0,
        "ma5": 166.8,
        "ma10": 162.9
      },
      {
        "open": 157.5,
        "high": 172.5,
        "low": 157.0,
        "close": 172.5,
        "ma5": 168.2,
        "ma10": 164.1
      },
      {
        "open": 174.0,
        "high": 182.0,
        "low": 174.0,
        "close": 174.0,
        "ma5": 169.0,
        "ma10": 166.65
      },
      {
        "open": 176.0,
        "high": 176.0,
        "low": 164.0,
        "close": 165.0,
        "ma5": 168.5,
        "ma10": 166.85
      }
    ],
    "symbol": "4551.TW",
    "maxVol10d": 3258,
    "hasVolumeBurst": true
  },
  {
    "code": "8996",
    "name": "高力",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1300.0,
    "prevClose": 1285.0,
    "open": 1325.0,
    "high": 1330.0,
    "low": 1245.0,
    "volume": 4769,
    "ma5": 1178.0,
    "ma10": 1107.5,
    "ma20": 1029.1,
    "ma60": 1194.87,
    "vMa5": 2921,
    "vMa10": 3399,
    "high5d": 1330.0,
    "high10d": 1330.0,
    "high20d": 1330.0,
    "sparkline": [
      940.0,
      1030.0,
      1035.0,
      1135.0,
      1045.0,
      1075.0,
      1065.0,
      1170.0,
      1285.0,
      1300.0
    ],
    "k3d": [
      {
        "open": 1060.0,
        "high": 1080.0,
        "low": 1045.0,
        "close": 1065.0,
        "ma5": 1071.0,
        "ma10": 981.7
      },
      {
        "open": 1070.0,
        "high": 1170.0,
        "low": 1065.0,
        "close": 1170.0,
        "ma5": 1098.0,
        "ma10": 1012.8
      },
      {
        "open": 1235.0,
        "high": 1285.0,
        "low": 1195.0,
        "close": 1285.0,
        "ma5": 1128.0,
        "ma10": 1063.5
      }
    ],
    "k5d": [
      {
        "open": 1065.0,
        "high": 1110.0,
        "low": 1060.0,
        "close": 1075.0,
        "ma5": 1064.0,
        "ma10": 965.8
      },
      {
        "open": 1060.0,
        "high": 1080.0,
        "low": 1045.0,
        "close": 1065.0,
        "ma5": 1071.0,
        "ma10": 981.7
      },
      {
        "open": 1070.0,
        "high": 1170.0,
        "low": 1065.0,
        "close": 1170.0,
        "ma5": 1098.0,
        "ma10": 1012.8
      },
      {
        "open": 1235.0,
        "high": 1285.0,
        "low": 1195.0,
        "close": 1285.0,
        "ma5": 1128.0,
        "ma10": 1063.5
      },
      {
        "open": 1325.0,
        "high": 1330.0,
        "low": 1245.0,
        "close": 1295.0,
        "ma5": 1178.0,
        "ma10": 1107.5
      }
    ],
    "symbol": "8996.TW",
    "maxVol10d": 5985,
    "hasVolumeBurst": true
  },
  {
    "code": "2903",
    "name": "遠百",
    "categories": [
      "SitcaBuy"
    ],
    "price": 21.8,
    "prevClose": 21.75,
    "open": 21.75,
    "high": 21.8,
    "low": 21.55,
    "volume": 2078,
    "ma5": 21.89,
    "ma10": 21.98,
    "ma20": 22.13,
    "ma60": 22.52,
    "vMa5": 2343,
    "vMa10": 1935,
    "high5d": 22.1,
    "high10d": 22.35,
    "high20d": 22.7,
    "sparkline": [
      22.35,
      22.1,
      22.0,
      21.85,
      22.0,
      22.05,
      21.9,
      22.0,
      21.75,
      21.8
    ],
    "k3d": [
      {
        "open": 22.05,
        "high": 22.1,
        "low": 21.9,
        "close": 21.9,
        "ma5": 21.96,
        "ma10": 22.13
      },
      {
        "open": 22.05,
        "high": 22.1,
        "low": 21.9,
        "close": 22.0,
        "ma5": 21.96,
        "ma10": 22.09
      },
      {
        "open": 21.9,
        "high": 21.9,
        "low": 21.55,
        "close": 21.75,
        "ma5": 21.94,
        "ma10": 22.01
      }
    ],
    "k5d": [
      {
        "open": 22.05,
        "high": 22.1,
        "low": 21.9,
        "close": 22.05,
        "ma5": 22.0,
        "ma10": 22.17
      },
      {
        "open": 22.05,
        "high": 22.1,
        "low": 21.9,
        "close": 21.9,
        "ma5": 21.96,
        "ma10": 22.13
      },
      {
        "open": 22.05,
        "high": 22.1,
        "low": 21.9,
        "close": 22.0,
        "ma5": 21.96,
        "ma10": 22.09
      },
      {
        "open": 21.9,
        "high": 21.9,
        "low": 21.55,
        "close": 21.75,
        "ma5": 21.94,
        "ma10": 22.01
      },
      {
        "open": 21.75,
        "high": 21.8,
        "low": 21.55,
        "close": 21.75,
        "ma5": 21.89,
        "ma10": 21.98
      }
    ],
    "symbol": "2903.TW",
    "maxVol10d": 7140,
    "hasVolumeBurst": true
  },
  {
    "code": "6139",
    "name": "亞翔",
    "categories": [],
    "price": 798.0,
    "prevClose": 805.0,
    "open": 815.0,
    "high": 820.0,
    "low": 792.0,
    "volume": 1855,
    "ma5": 807.8,
    "ma10": 802.8,
    "ma20": 782.35,
    "ma60": 816.8,
    "vMa5": 2976,
    "vMa10": 3451,
    "high5d": 837.0,
    "high10d": 840.0,
    "high20d": 912.0,
    "sparkline": [
      765.0,
      786.0,
      800.0,
      836.0,
      802.0,
      808.0,
      812.0,
      811.0,
      805.0,
      798.0
    ],
    "k3d": [
      {
        "open": 810.0,
        "high": 827.0,
        "low": 785.0,
        "close": 812.0,
        "ma5": 811.6,
        "ma10": 763.0
      },
      {
        "open": 824.0,
        "high": 837.0,
        "low": 808.0,
        "close": 811.0,
        "ma5": 813.8,
        "ma10": 777.0
      },
      {
        "open": 824.0,
        "high": 831.0,
        "low": 805.0,
        "close": 805.0,
        "ma5": 807.6,
        "ma10": 793.2
      }
    ],
    "k5d": [
      {
        "open": 822.0,
        "high": 835.0,
        "low": 793.0,
        "close": 808.0,
        "ma5": 806.4,
        "ma10": 752.2
      },
      {
        "open": 810.0,
        "high": 827.0,
        "low": 785.0,
        "close": 812.0,
        "ma5": 811.6,
        "ma10": 763.0
      },
      {
        "open": 824.0,
        "high": 837.0,
        "low": 808.0,
        "close": 811.0,
        "ma5": 813.8,
        "ma10": 777.0
      },
      {
        "open": 824.0,
        "high": 831.0,
        "low": 805.0,
        "close": 805.0,
        "ma5": 807.6,
        "ma10": 793.2
      },
      {
        "open": 815.0,
        "high": 820.0,
        "low": 792.0,
        "close": 803.0,
        "ma5": 807.8,
        "ma10": 802.8
      }
    ],
    "symbol": "6139.TW",
    "maxVol10d": 5175,
    "hasVolumeBurst": false
  },
  {
    "code": "2481",
    "name": "強茂",
    "categories": [
      "Top100"
    ],
    "price": 137.5,
    "prevClose": 143.0,
    "open": 145.0,
    "high": 146.0,
    "low": 137.0,
    "volume": 11175,
    "ma5": 139.9,
    "ma10": 136.45,
    "ma20": 134.4,
    "ma60": 158.07,
    "vMa5": 19570,
    "vMa10": 20964,
    "high5d": 152.5,
    "high10d": 152.5,
    "high20d": 173.0,
    "sparkline": [
      129.0,
      130.0,
      134.0,
      139.0,
      133.0,
      137.5,
      141.5,
      139.0,
      143.0,
      137.5
    ],
    "k3d": [
      {
        "open": 138.0,
        "high": 144.5,
        "low": 136.0,
        "close": 141.5,
        "ma5": 137.0,
        "ma10": 128.1
      },
      {
        "open": 143.5,
        "high": 144.0,
        "low": 138.5,
        "close": 139.0,
        "ma5": 138.0,
        "ma10": 130.75
      },
      {
        "open": 140.5,
        "high": 152.5,
        "low": 140.0,
        "close": 143.0,
        "ma5": 138.8,
        "ma10": 134.35
      }
    ],
    "k5d": [
      {
        "open": 136.0,
        "high": 141.5,
        "low": 135.5,
        "close": 137.5,
        "ma5": 134.7,
        "ma10": 126.4
      },
      {
        "open": 138.0,
        "high": 144.5,
        "low": 136.0,
        "close": 141.5,
        "ma5": 137.0,
        "ma10": 128.1
      },
      {
        "open": 143.5,
        "high": 144.0,
        "low": 138.5,
        "close": 139.0,
        "ma5": 138.0,
        "ma10": 130.75
      },
      {
        "open": 140.5,
        "high": 152.5,
        "low": 140.0,
        "close": 143.0,
        "ma5": 138.8,
        "ma10": 134.35
      },
      {
        "open": 145.0,
        "high": 146.0,
        "low": 137.0,
        "close": 138.5,
        "ma5": 139.9,
        "ma10": 136.45
      }
    ],
    "symbol": "2481.TW",
    "maxVol10d": 35784,
    "hasVolumeBurst": true
  },
  {
    "code": "2027",
    "name": "大成鋼",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 47.1,
    "prevClose": 50.4,
    "open": 50.0,
    "high": 50.0,
    "low": 47.0,
    "volume": 27666,
    "ma5": 47.64,
    "ma10": 46.39,
    "ma20": 44.71,
    "ma60": 42.62,
    "vMa5": 25854,
    "vMa10": 23226,
    "high5d": 51.5,
    "high10d": 51.5,
    "high20d": 51.5,
    "sparkline": [
      44.45,
      44.25,
      44.35,
      46.1,
      46.6,
      47.3,
      46.45,
      46.85,
      50.4,
      47.1
    ],
    "k3d": [
      {
        "open": 47.5,
        "high": 47.75,
        "low": 46.0,
        "close": 46.45,
        "ma5": 46.16,
        "ma10": 44.96
      },
      {
        "open": 46.45,
        "high": 47.6,
        "low": 46.2,
        "close": 46.85,
        "ma5": 46.66,
        "ma10": 45.32
      },
      {
        "open": 48.5,
        "high": 51.5,
        "low": 48.0,
        "close": 50.4,
        "ma5": 47.52,
        "ma10": 45.99
      }
    ],
    "k5d": [
      {
        "open": 47.45,
        "high": 47.8,
        "low": 46.75,
        "close": 47.3,
        "ma5": 45.72,
        "ma10": 44.54
      },
      {
        "open": 47.5,
        "high": 47.75,
        "low": 46.0,
        "close": 46.45,
        "ma5": 46.16,
        "ma10": 44.96
      },
      {
        "open": 46.45,
        "high": 47.6,
        "low": 46.2,
        "close": 46.85,
        "ma5": 46.66,
        "ma10": 45.32
      },
      {
        "open": 48.5,
        "high": 51.5,
        "low": 48.0,
        "close": 50.4,
        "ma5": 47.52,
        "ma10": 45.99
      },
      {
        "open": 50.0,
        "high": 50.0,
        "low": 47.0,
        "close": 47.2,
        "ma5": 47.64,
        "ma10": 46.39
      }
    ],
    "symbol": "2027.TW",
    "maxVol10d": 58324,
    "hasVolumeBurst": true
  },
  {
    "code": "3090",
    "name": "日電貿",
    "categories": [],
    "price": 172.0,
    "prevClose": 175.0,
    "open": 179.5,
    "high": 181.0,
    "low": 171.0,
    "volume": 9685,
    "ma5": 170.7,
    "ma10": 158.75,
    "ma20": 155.95,
    "ma60": 228.3,
    "vMa5": 18987,
    "vMa10": 15462,
    "high5d": 187.0,
    "high10d": 187.0,
    "high20d": 227.5,
    "sparkline": [
      137.5,
      144.0,
      147.0,
      155.0,
      150.5,
      161.0,
      174.5,
      170.5,
      175.0,
      172.0
    ],
    "k3d": [
      {
        "open": 158.0,
        "high": 177.0,
        "low": 158.0,
        "close": 174.5,
        "ma5": 157.6,
        "ma10": 143.5
      },
      {
        "open": 175.5,
        "high": 177.0,
        "low": 168.0,
        "close": 170.5,
        "ma5": 162.3,
        "ma10": 147.9
      },
      {
        "open": 173.5,
        "high": 187.0,
        "low": 173.5,
        "close": 175.0,
        "ma5": 166.3,
        "ma10": 154.0
      }
    ],
    "k5d": [
      {
        "open": 158.0,
        "high": 165.5,
        "low": 155.5,
        "close": 161.0,
        "ma5": 151.5,
        "ma10": 140.1
      },
      {
        "open": 158.0,
        "high": 177.0,
        "low": 158.0,
        "close": 174.5,
        "ma5": 157.6,
        "ma10": 143.5
      },
      {
        "open": 175.5,
        "high": 177.0,
        "low": 168.0,
        "close": 170.5,
        "ma5": 162.3,
        "ma10": 147.9
      },
      {
        "open": 173.5,
        "high": 187.0,
        "low": 173.5,
        "close": 175.0,
        "ma5": 166.3,
        "ma10": 154.0
      },
      {
        "open": 179.5,
        "high": 181.0,
        "low": 171.0,
        "close": 172.5,
        "ma5": 170.7,
        "ma10": 158.75
      }
    ],
    "symbol": "3090.TW",
    "maxVol10d": 32109,
    "hasVolumeBurst": true
  },
  {
    "code": "2347",
    "name": "聯強",
    "categories": [
      "SitcaBuy"
    ],
    "price": 90.1,
    "prevClose": 91.5,
    "open": 91.8,
    "high": 92.0,
    "low": 90.1,
    "volume": 1577,
    "ma5": 91.26,
    "ma10": 92.7,
    "ma20": 90.03,
    "ma60": 89.68,
    "vMa5": 3805,
    "vMa10": 4168,
    "high5d": 93.7,
    "high10d": 98.3,
    "high20d": 98.3,
    "sparkline": [
      91.7,
      93.8,
      97.1,
      94.7,
      93.4,
      91.9,
      91.0,
      91.6,
      91.5,
      90.1
    ],
    "k3d": [
      {
        "open": 91.4,
        "high": 91.5,
        "low": 89.4,
        "close": 91.0,
        "ma5": 93.62,
        "ma10": 91.88
      },
      {
        "open": 91.0,
        "high": 93.5,
        "low": 91.0,
        "close": 91.6,
        "ma5": 92.52,
        "ma10": 92.5
      },
      {
        "open": 91.6,
        "high": 92.3,
        "low": 90.9,
        "close": 91.5,
        "ma5": 91.88,
        "ma10": 93.04
      }
    ],
    "k5d": [
      {
        "open": 93.4,
        "high": 93.7,
        "low": 91.2,
        "close": 91.9,
        "ma5": 94.18,
        "ma10": 91.38
      },
      {
        "open": 91.4,
        "high": 91.5,
        "low": 89.4,
        "close": 91.0,
        "ma5": 93.62,
        "ma10": 91.88
      },
      {
        "open": 91.0,
        "high": 93.5,
        "low": 91.0,
        "close": 91.6,
        "ma5": 92.52,
        "ma10": 92.5
      },
      {
        "open": 91.6,
        "high": 92.3,
        "low": 90.9,
        "close": 91.5,
        "ma5": 91.88,
        "ma10": 93.04
      },
      {
        "open": 91.8,
        "high": 92.0,
        "low": 90.1,
        "close": 90.3,
        "ma5": 91.26,
        "ma10": 92.7
      }
    ],
    "symbol": "2347.TW",
    "maxVol10d": 7185,
    "hasVolumeBurst": false
  },
  {
    "code": "009814",
    "name": "富邦標普500",
    "categories": [],
    "price": 11.6,
    "prevClose": 11.59,
    "open": 11.61,
    "high": 11.65,
    "low": 11.58,
    "volume": 497,
    "ma5": 11.6,
    "ma10": 11.55,
    "ma20": 11.36,
    "ma60": 11.16,
    "vMa5": 957,
    "vMa10": 825,
    "high5d": 11.65,
    "high10d": 11.66,
    "high20d": 11.66,
    "sparkline": [
      11.31,
      11.43,
      11.63,
      11.58,
      11.53,
      11.63,
      11.61,
      11.57,
      11.59,
      11.6
    ],
    "k3d": [
      {
        "open": 11.63,
        "high": 11.63,
        "low": 11.59,
        "close": 11.61,
        "ma5": 11.6,
        "ma10": 11.41
      },
      {
        "open": 11.6,
        "high": 11.6,
        "low": 11.55,
        "close": 11.57,
        "ma5": 11.58,
        "ma10": 11.46
      },
      {
        "open": 11.57,
        "high": 11.59,
        "low": 11.57,
        "close": 11.59,
        "ma5": 11.59,
        "ma10": 11.51
      }
    ],
    "k5d": [
      {
        "open": 11.6,
        "high": 11.63,
        "low": 11.59,
        "close": 11.63,
        "ma5": 11.56,
        "ma10": 11.36
      },
      {
        "open": 11.63,
        "high": 11.63,
        "low": 11.59,
        "close": 11.61,
        "ma5": 11.6,
        "ma10": 11.41
      },
      {
        "open": 11.6,
        "high": 11.6,
        "low": 11.55,
        "close": 11.57,
        "ma5": 11.58,
        "ma10": 11.46
      },
      {
        "open": 11.57,
        "high": 11.59,
        "low": 11.57,
        "close": 11.59,
        "ma5": 11.59,
        "ma10": 11.51
      },
      {
        "open": 11.61,
        "high": 11.65,
        "low": 11.58,
        "close": 11.6,
        "ma5": 11.6,
        "ma10": 11.55
      }
    ],
    "symbol": "009814.TWO",
    "maxVol10d": 1343,
    "hasVolumeBurst": true
  },
  {
    "code": "00695B",
    "name": "富邦美債7-10",
    "categories": [],
    "price": 35.18,
    "prevClose": 35.23,
    "open": 35.25,
    "high": 35.25,
    "low": 35.18,
    "volume": 112,
    "ma5": 35.23,
    "ma10": 35.29,
    "ma20": 35.36,
    "ma60": 35.28,
    "vMa5": 325,
    "vMa10": 279,
    "high5d": 35.35,
    "high10d": 35.45,
    "high20d": 35.6,
    "sparkline": [
      35.32,
      35.36,
      35.41,
      35.4,
      35.23,
      35.32,
      35.19,
      35.24,
      35.23,
      35.18
    ],
    "k3d": [
      {
        "open": 35.16,
        "high": 35.2,
        "low": 35.16,
        "close": 35.19,
        "ma5": 35.31,
        "ma10": 35.36
      },
      {
        "open": 35.21,
        "high": 35.26,
        "low": 35.21,
        "close": 35.24,
        "ma5": 35.28,
        "ma10": 35.33
      },
      {
        "open": 35.25,
        "high": 35.26,
        "low": 35.23,
        "close": 35.23,
        "ma5": 35.24,
        "ma10": 35.32
      }
    ],
    "k5d": [
      {
        "open": 35.27,
        "high": 35.35,
        "low": 35.27,
        "close": 35.32,
        "ma5": 35.34,
        "ma10": 35.39
      },
      {
        "open": 35.16,
        "high": 35.2,
        "low": 35.16,
        "close": 35.19,
        "ma5": 35.31,
        "ma10": 35.36
      },
      {
        "open": 35.21,
        "high": 35.26,
        "low": 35.21,
        "close": 35.24,
        "ma5": 35.28,
        "ma10": 35.33
      },
      {
        "open": 35.25,
        "high": 35.26,
        "low": 35.23,
        "close": 35.23,
        "ma5": 35.24,
        "ma10": 35.32
      },
      {
        "open": 35.25,
        "high": 35.25,
        "low": 35.18,
        "close": 35.18,
        "ma5": 35.23,
        "ma10": 35.29
      }
    ],
    "symbol": "00695B.TWO",
    "maxVol10d": 884,
    "hasVolumeBurst": true
  },
  {
    "code": "3081",
    "name": "聯亞",
    "categories": [],
    "price": 2535.0,
    "prevClose": 2665.0,
    "open": 2700.0,
    "high": 2700.0,
    "low": 2485.0,
    "volume": 924,
    "ma5": 2588.0,
    "ma10": 2353.5,
    "ma20": 1995.5,
    "ma60": 2051.08,
    "vMa5": 1573,
    "vMa10": 1951,
    "high5d": 2845.0,
    "high10d": 2845.0,
    "high20d": 2845.0,
    "sparkline": [
      1790.0,
      1965.0,
      2160.0,
      2375.0,
      2305.0,
      2535.0,
      2480.0,
      2725.0,
      2665.0,
      2535.0
    ],
    "k3d": [
      {
        "open": 2420.0,
        "high": 2485.0,
        "low": 2415.0,
        "close": 2480.0,
        "ma5": 2371.0,
        "ma10": 2026.5
      },
      {
        "open": 2560.0,
        "high": 2725.0,
        "low": 2560.0,
        "close": 2725.0,
        "ma5": 2484.0,
        "ma10": 2145.0
      },
      {
        "open": 2840.0,
        "high": 2845.0,
        "low": 2640.0,
        "close": 2665.0,
        "ma5": 2542.0,
        "ma10": 2263.0
      }
    ],
    "k5d": [
      {
        "open": 2500.0,
        "high": 2535.0,
        "low": 2420.0,
        "close": 2535.0,
        "ma5": 2268.0,
        "ma10": 1949.5
      },
      {
        "open": 2420.0,
        "high": 2485.0,
        "low": 2415.0,
        "close": 2480.0,
        "ma5": 2371.0,
        "ma10": 2026.5
      },
      {
        "open": 2560.0,
        "high": 2725.0,
        "low": 2560.0,
        "close": 2725.0,
        "ma5": 2484.0,
        "ma10": 2145.0
      },
      {
        "open": 2840.0,
        "high": 2845.0,
        "low": 2640.0,
        "close": 2665.0,
        "ma5": 2542.0,
        "ma10": 2263.0
      },
      {
        "open": 2700.0,
        "high": 2700.0,
        "low": 2485.0,
        "close": 2535.0,
        "ma5": 2588.0,
        "ma10": 2353.5
      }
    ],
    "symbol": "3081.TWO",
    "maxVol10d": 5704,
    "hasVolumeBurst": true
  },
  {
    "code": "6510",
    "name": "精測",
    "categories": [],
    "price": 3000.0,
    "prevClose": 2820.0,
    "open": 2830.0,
    "high": 3100.0,
    "low": 2810.0,
    "volume": 749,
    "ma5": 2858.0,
    "ma10": 2802.5,
    "ma20": 2678.5,
    "ma60": 3045.5,
    "vMa5": 548,
    "vMa10": 526,
    "high5d": 3100.0,
    "high10d": 3100.0,
    "high20d": 3100.0,
    "sparkline": [
      2655.0,
      2795.0,
      2755.0,
      2835.0,
      2695.0,
      2845.0,
      2800.0,
      2825.0,
      2820.0,
      3000.0
    ],
    "k3d": [
      {
        "open": 2780.0,
        "high": 2875.0,
        "low": 2770.0,
        "close": 2800.0,
        "ma5": 2786.0,
        "ma10": 2651.5
      },
      {
        "open": 2855.0,
        "high": 2950.0,
        "low": 2815.0,
        "close": 2825.0,
        "ma5": 2800.0,
        "ma10": 2697.0
      },
      {
        "open": 2895.0,
        "high": 2925.0,
        "low": 2810.0,
        "close": 2820.0,
        "ma5": 2797.0,
        "ma10": 2752.0
      }
    ],
    "k5d": [
      {
        "open": 2790.0,
        "high": 2950.0,
        "low": 2785.0,
        "close": 2845.0,
        "ma5": 2785.0,
        "ma10": 2619.5
      },
      {
        "open": 2780.0,
        "high": 2875.0,
        "low": 2770.0,
        "close": 2800.0,
        "ma5": 2786.0,
        "ma10": 2651.5
      },
      {
        "open": 2855.0,
        "high": 2950.0,
        "low": 2815.0,
        "close": 2825.0,
        "ma5": 2800.0,
        "ma10": 2697.0
      },
      {
        "open": 2895.0,
        "high": 2925.0,
        "low": 2810.0,
        "close": 2820.0,
        "ma5": 2797.0,
        "ma10": 2752.0
      },
      {
        "open": 2830.0,
        "high": 3100.0,
        "low": 2810.0,
        "close": 3000.0,
        "ma5": 2858.0,
        "ma10": 2802.5
      }
    ],
    "symbol": "6510.TWO",
    "maxVol10d": 749,
    "hasVolumeBurst": false
  },
  {
    "code": "3529",
    "name": "力旺",
    "categories": [],
    "price": 2680.0,
    "prevClose": 2700.0,
    "open": 2740.0,
    "high": 2825.0,
    "low": 2660.0,
    "volume": 789,
    "ma5": 2707.0,
    "ma10": 2651.5,
    "ma20": 2511.75,
    "ma60": 2881.5,
    "vMa5": 915,
    "vMa10": 943,
    "high5d": 2995.0,
    "high10d": 2995.0,
    "high20d": 2995.0,
    "sparkline": [
      2390.0,
      2575.0,
      2630.0,
      2660.0,
      2725.0,
      2835.0,
      2660.0,
      2660.0,
      2700.0,
      2680.0
    ],
    "k3d": [
      {
        "open": 2795.0,
        "high": 2820.0,
        "low": 2655.0,
        "close": 2660.0,
        "ma5": 2702.0,
        "ma10": 2532.5
      },
      {
        "open": 2660.0,
        "high": 2705.0,
        "low": 2635.0,
        "close": 2660.0,
        "ma5": 2708.0,
        "ma10": 2590.0
      },
      {
        "open": 2675.0,
        "high": 2800.0,
        "low": 2630.0,
        "close": 2700.0,
        "ma5": 2716.0,
        "ma10": 2631.0
      }
    ],
    "k5d": [
      {
        "open": 2755.0,
        "high": 2995.0,
        "low": 2705.0,
        "close": 2835.0,
        "ma5": 2685.0,
        "ma10": 2486.5
      },
      {
        "open": 2795.0,
        "high": 2820.0,
        "low": 2655.0,
        "close": 2660.0,
        "ma5": 2702.0,
        "ma10": 2532.5
      },
      {
        "open": 2660.0,
        "high": 2705.0,
        "low": 2635.0,
        "close": 2660.0,
        "ma5": 2708.0,
        "ma10": 2590.0
      },
      {
        "open": 2675.0,
        "high": 2800.0,
        "low": 2630.0,
        "close": 2700.0,
        "ma5": 2716.0,
        "ma10": 2631.0
      },
      {
        "open": 2740.0,
        "high": 2825.0,
        "low": 2660.0,
        "close": 2680.0,
        "ma5": 2707.0,
        "ma10": 2651.5
      }
    ],
    "symbol": "3529.TWO",
    "maxVol10d": 1454,
    "hasVolumeBurst": false
  },
  {
    "code": "5274",
    "name": "信驊",
    "categories": [],
    "price": 17975.0,
    "prevClose": 17490.0,
    "open": 17990.0,
    "high": 18600.0,
    "low": 17700.0,
    "volume": 227,
    "ma5": 17163.0,
    "ma10": 16640.5,
    "ma20": 15388.25,
    "ma60": 15498.17,
    "vMa5": 226,
    "vMa10": 234,
    "high5d": 18600.0,
    "high10d": 18600.0,
    "high20d": 18600.0,
    "sparkline": [
      15975.0,
      15500.0,
      16020.0,
      16750.0,
      16345.0,
      16540.0,
      16440.0,
      17370.0,
      17490.0,
      17975.0
    ],
    "k3d": [
      {
        "open": 16800.0,
        "high": 16800.0,
        "low": 15930.0,
        "close": 16440.0,
        "ma5": 16419.0,
        "ma10": 15421.0
      },
      {
        "open": 16450.0,
        "high": 17395.0,
        "low": 16450.0,
        "close": 17370.0,
        "ma5": 16689.0,
        "ma10": 15867.0
      },
      {
        "open": 17920.0,
        "high": 18085.0,
        "low": 17010.0,
        "close": 17490.0,
        "ma5": 16837.0,
        "ma10": 16295.5
      }
    ],
    "k5d": [
      {
        "open": 16750.0,
        "high": 17395.0,
        "low": 16535.0,
        "close": 16540.0,
        "ma5": 16231.0,
        "ma10": 15100.0
      },
      {
        "open": 16800.0,
        "high": 16800.0,
        "low": 15930.0,
        "close": 16440.0,
        "ma5": 16419.0,
        "ma10": 15421.0
      },
      {
        "open": 16450.0,
        "high": 17395.0,
        "low": 16450.0,
        "close": 17370.0,
        "ma5": 16689.0,
        "ma10": 15867.0
      },
      {
        "open": 17920.0,
        "high": 18085.0,
        "low": 17010.0,
        "close": 17490.0,
        "ma5": 16837.0,
        "ma10": 16295.5
      },
      {
        "open": 17990.0,
        "high": 18600.0,
        "low": 17700.0,
        "close": 17975.0,
        "ma5": 17163.0,
        "ma10": 16640.5
      }
    ],
    "symbol": "5274.TWO",
    "maxVol10d": 318,
    "hasVolumeBurst": false
  },
  {
    "code": "4749",
    "name": "新應材",
    "categories": [],
    "price": 791.0,
    "prevClose": 798.0,
    "open": 800.0,
    "high": 802.0,
    "low": 786.0,
    "volume": 281,
    "ma5": 797.4,
    "ma10": 795.6,
    "ma20": 776.7,
    "ma60": 895.7,
    "vMa5": 568,
    "vMa10": 688,
    "high5d": 824.0,
    "high10d": 832.0,
    "high20d": 884.0,
    "sparkline": [
      765.0,
      778.0,
      794.0,
      823.0,
      809.0,
      786.0,
      803.0,
      809.0,
      798.0,
      791.0
    ],
    "k3d": [
      {
        "open": 786.0,
        "high": 807.0,
        "low": 771.0,
        "close": 803.0,
        "ma5": 803.0,
        "ma10": 761.6
      },
      {
        "open": 806.0,
        "high": 823.0,
        "low": 806.0,
        "close": 809.0,
        "ma5": 806.0,
        "ma10": 776.1
      },
      {
        "open": 824.0,
        "high": 824.0,
        "low": 795.0,
        "close": 798.0,
        "ma5": 801.0,
        "ma10": 788.7
      }
    ],
    "k5d": [
      {
        "open": 786.0,
        "high": 800.0,
        "low": 764.0,
        "close": 786.0,
        "ma5": 798.0,
        "ma10": 753.1
      },
      {
        "open": 786.0,
        "high": 807.0,
        "low": 771.0,
        "close": 803.0,
        "ma5": 803.0,
        "ma10": 761.6
      },
      {
        "open": 806.0,
        "high": 823.0,
        "low": 806.0,
        "close": 809.0,
        "ma5": 806.0,
        "ma10": 776.1
      },
      {
        "open": 824.0,
        "high": 824.0,
        "low": 795.0,
        "close": 798.0,
        "ma5": 801.0,
        "ma10": 788.7
      },
      {
        "open": 800.0,
        "high": 802.0,
        "low": 786.0,
        "close": 791.0,
        "ma5": 797.4,
        "ma10": 795.6
      }
    ],
    "symbol": "4749.TWO",
    "maxVol10d": 1191,
    "hasVolumeBurst": false
  },
  {
    "code": "00980D",
    "name": "主動聯博投等入息",
    "categories": [],
    "price": 20.4,
    "prevClose": 20.44,
    "open": 20.43,
    "high": 20.43,
    "low": 20.4,
    "volume": 450,
    "ma5": 20.43,
    "ma10": 20.44,
    "ma20": 20.45,
    "ma60": 20.44,
    "vMa5": 586,
    "vMa10": 559,
    "high5d": 20.47,
    "high10d": 20.55,
    "high20d": 20.55,
    "sparkline": [
      20.41,
      20.43,
      20.49,
      20.5,
      20.45,
      20.46,
      20.42,
      20.42,
      20.44,
      20.4
    ],
    "k3d": [
      {
        "open": 20.46,
        "high": 20.46,
        "low": 20.4,
        "close": 20.42,
        "ma5": 20.46,
        "ma10": 20.45
      },
      {
        "open": 20.42,
        "high": 20.42,
        "low": 20.41,
        "close": 20.42,
        "ma5": 20.45,
        "ma10": 20.44
      },
      {
        "open": 20.43,
        "high": 20.45,
        "low": 20.42,
        "close": 20.44,
        "ma5": 20.44,
        "ma10": 20.45
      }
    ],
    "k5d": [
      {
        "open": 20.45,
        "high": 20.47,
        "low": 20.44,
        "close": 20.46,
        "ma5": 20.47,
        "ma10": 20.45
      },
      {
        "open": 20.46,
        "high": 20.46,
        "low": 20.4,
        "close": 20.42,
        "ma5": 20.46,
        "ma10": 20.45
      },
      {
        "open": 20.42,
        "high": 20.42,
        "low": 20.41,
        "close": 20.42,
        "ma5": 20.45,
        "ma10": 20.44
      },
      {
        "open": 20.43,
        "high": 20.45,
        "low": 20.42,
        "close": 20.44,
        "ma5": 20.44,
        "ma10": 20.45
      },
      {
        "open": 20.43,
        "high": 20.43,
        "low": 20.4,
        "close": 20.4,
        "ma5": 20.43,
        "ma10": 20.44
      }
    ],
    "symbol": "00980D.TWO",
    "maxVol10d": 787,
    "hasVolumeBurst": false
  },
  {
    "code": "3131",
    "name": "弘塑",
    "categories": [],
    "price": 2540.0,
    "prevClose": 2635.0,
    "open": 2640.0,
    "high": 2675.0,
    "low": 2535.0,
    "volume": 427,
    "ma5": 2518.0,
    "ma10": 2466.5,
    "ma20": 2578.0,
    "ma60": 3066.92,
    "vMa5": 641,
    "vMa10": 744,
    "high5d": 2730.0,
    "high10d": 2730.0,
    "high20d": 3330.0,
    "sparkline": [
      2420.0,
      2540.0,
      2345.0,
      2385.0,
      2385.0,
      2470.0,
      2390.0,
      2555.0,
      2635.0,
      2540.0
    ],
    "k3d": [
      {
        "open": 2470.0,
        "high": 2470.0,
        "low": 2365.0,
        "close": 2390.0,
        "ma5": 2395.0,
        "ma10": 2371.5
      },
      {
        "open": 2405.0,
        "high": 2570.0,
        "low": 2405.0,
        "close": 2555.0,
        "ma5": 2437.0,
        "ma10": 2401.5
      },
      {
        "open": 2610.0,
        "high": 2730.0,
        "low": 2560.0,
        "close": 2635.0,
        "ma5": 2487.0,
        "ma10": 2449.5
      }
    ],
    "k5d": [
      {
        "open": 2455.0,
        "high": 2570.0,
        "low": 2415.0,
        "close": 2470.0,
        "ma5": 2425.0,
        "ma10": 2387.5
      },
      {
        "open": 2470.0,
        "high": 2470.0,
        "low": 2365.0,
        "close": 2390.0,
        "ma5": 2395.0,
        "ma10": 2371.5
      },
      {
        "open": 2405.0,
        "high": 2570.0,
        "low": 2405.0,
        "close": 2555.0,
        "ma5": 2437.0,
        "ma10": 2401.5
      },
      {
        "open": 2610.0,
        "high": 2730.0,
        "low": 2560.0,
        "close": 2635.0,
        "ma5": 2487.0,
        "ma10": 2449.5
      },
      {
        "open": 2640.0,
        "high": 2675.0,
        "low": 2535.0,
        "close": 2540.0,
        "ma5": 2518.0,
        "ma10": 2466.5
      }
    ],
    "symbol": "3131.TWO",
    "maxVol10d": 1388,
    "hasVolumeBurst": true
  },
  {
    "code": "006201",
    "name": "元大富櫃50",
    "categories": [],
    "price": 45.53,
    "prevClose": 45.67,
    "open": 46.07,
    "high": 46.07,
    "low": 45.5,
    "volume": 245,
    "ma5": 44.82,
    "ma10": 43.39,
    "ma20": 41.58,
    "ma60": 45.66,
    "vMa5": 353,
    "vMa10": 497,
    "high5d": 46.5,
    "high10d": 46.5,
    "high20d": 46.5,
    "sparkline": [
      39.88,
      41.2,
      42.42,
      43.66,
      42.6,
      43.85,
      43.8,
      45.26,
      45.67,
      45.53
    ],
    "k3d": [
      {
        "open": 43.75,
        "high": 43.95,
        "low": 42.98,
        "close": 43.8,
        "ma5": 43.27,
        "ma10": 40.64
      },
      {
        "open": 44.2,
        "high": 45.26,
        "low": 44.2,
        "close": 45.26,
        "ma5": 43.83,
        "ma10": 41.56
      },
      {
        "open": 46.49,
        "high": 46.5,
        "low": 45.52,
        "close": 45.67,
        "ma5": 44.24,
        "ma10": 42.64
      }
    ],
    "k5d": [
      {
        "open": 43.36,
        "high": 44.55,
        "low": 43.36,
        "close": 43.85,
        "ma5": 42.75,
        "ma10": 40.07
      },
      {
        "open": 43.75,
        "high": 43.95,
        "low": 42.98,
        "close": 43.8,
        "ma5": 43.27,
        "ma10": 40.64
      },
      {
        "open": 44.2,
        "high": 45.26,
        "low": 44.2,
        "close": 45.26,
        "ma5": 43.83,
        "ma10": 41.56
      },
      {
        "open": 46.49,
        "high": 46.5,
        "low": 45.52,
        "close": 45.67,
        "ma5": 44.24,
        "ma10": 42.64
      },
      {
        "open": 46.07,
        "high": 46.07,
        "low": 45.5,
        "close": 45.53,
        "ma5": 44.82,
        "ma10": 43.39
      }
    ],
    "symbol": "006201.TWO",
    "maxVol10d": 1083,
    "hasVolumeBurst": false
  },
  {
    "code": "4123",
    "name": "晟德",
    "categories": [
      "Top100"
    ],
    "price": 34.2,
    "prevClose": 34.7,
    "open": 34.45,
    "high": 34.55,
    "low": 33.85,
    "volume": 4265,
    "ma5": 36.48,
    "ma10": 37.69,
    "ma20": 37.85,
    "ma60": 38.0,
    "vMa5": 4620,
    "vMa10": 3568,
    "high5d": 39.4,
    "high10d": 39.5,
    "high20d": 39.5,
    "sparkline": [
      38.5,
      38.95,
      39.15,
      38.75,
      39.1,
      39.4,
      39.0,
      35.1,
      34.7,
      34.2
    ],
    "k3d": [
      {
        "open": 39.35,
        "high": 39.35,
        "low": 38.9,
        "close": 39.0,
        "ma5": 39.08,
        "ma10": 38.62
      },
      {
        "open": 35.1,
        "high": 35.1,
        "low": 35.1,
        "close": 35.1,
        "ma5": 38.27,
        "ma10": 38.32
      },
      {
        "open": 34.1,
        "high": 34.9,
        "low": 33.85,
        "close": 34.7,
        "ma5": 37.46,
        "ma10": 38.04
      }
    ],
    "k5d": [
      {
        "open": 39.05,
        "high": 39.4,
        "low": 38.95,
        "close": 39.4,
        "ma5": 39.07,
        "ma10": 38.52
      },
      {
        "open": 39.35,
        "high": 39.35,
        "low": 38.9,
        "close": 39.0,
        "ma5": 39.08,
        "ma10": 38.62
      },
      {
        "open": 35.1,
        "high": 35.1,
        "low": 35.1,
        "close": 35.1,
        "ma5": 38.27,
        "ma10": 38.32
      },
      {
        "open": 34.1,
        "high": 34.9,
        "low": 33.85,
        "close": 34.7,
        "ma5": 37.46,
        "ma10": 38.04
      },
      {
        "open": 34.45,
        "high": 34.55,
        "low": 33.85,
        "close": 34.2,
        "ma5": 36.48,
        "ma10": 37.69
      }
    ],
    "symbol": "4123.TWO",
    "maxVol10d": 10394,
    "hasVolumeBurst": true
  },
  {
    "code": "6121",
    "name": "新普",
    "categories": [],
    "price": 416.5,
    "prevClose": 431.5,
    "open": 431.5,
    "high": 432.0,
    "low": 415.0,
    "volume": 749,
    "ma5": 421.8,
    "ma10": 396.75,
    "ma20": 381.27,
    "ma60": 400.22,
    "vMa5": 1321,
    "vMa10": 1031,
    "high5d": 440.0,
    "high10d": 440.0,
    "high20d": 440.0,
    "sparkline": [
      362.5,
      370.0,
      372.5,
      380.5,
      373.0,
      395.0,
      434.5,
      431.5,
      431.5,
      416.5
    ],
    "k3d": [
      {
        "open": 403.5,
        "high": 434.5,
        "low": 403.5,
        "close": 434.5,
        "ma5": 391.1,
        "ma10": 373.5
      },
      {
        "open": 427.0,
        "high": 440.0,
        "low": 425.0,
        "close": 431.5,
        "ma5": 402.9,
        "ma10": 381.85
      },
      {
        "open": 435.0,
        "high": 440.0,
        "low": 424.5,
        "close": 431.5,
        "ma5": 413.1,
        "ma10": 390.35
      }
    ],
    "k5d": [
      {
        "open": 379.5,
        "high": 397.5,
        "low": 375.5,
        "close": 395.0,
        "ma5": 378.2,
        "ma10": 365.85
      },
      {
        "open": 403.5,
        "high": 434.5,
        "low": 403.5,
        "close": 434.5,
        "ma5": 391.1,
        "ma10": 373.5
      },
      {
        "open": 427.0,
        "high": 440.0,
        "low": 425.0,
        "close": 431.5,
        "ma5": 402.9,
        "ma10": 381.85
      },
      {
        "open": 435.0,
        "high": 440.0,
        "low": 424.5,
        "close": 431.5,
        "ma5": 413.1,
        "ma10": 390.35
      },
      {
        "open": 431.5,
        "high": 432.0,
        "low": 415.0,
        "close": 416.5,
        "ma5": 421.8,
        "ma10": 396.75
      }
    ],
    "symbol": "6121.TWO",
    "maxVol10d": 2550,
    "hasVolumeBurst": true
  },
  {
    "code": "3491",
    "name": "昇達科",
    "categories": [],
    "price": 1380.0,
    "prevClose": 1345.0,
    "open": 1385.0,
    "high": 1450.0,
    "low": 1350.0,
    "volume": 2163,
    "ma5": 1311.0,
    "ma10": 1266.0,
    "ma20": 1200.85,
    "ma60": 1455.37,
    "vMa5": 1615,
    "vMa10": 1783,
    "high5d": 1450.0,
    "high10d": 1450.0,
    "high20d": 1450.0,
    "sparkline": [
      1065.0,
      1170.0,
      1285.0,
      1350.0,
      1235.0,
      1235.0,
      1275.0,
      1320.0,
      1345.0,
      1380.0
    ],
    "k3d": [
      {
        "open": 1230.0,
        "high": 1275.0,
        "low": 1215.0,
        "close": 1275.0,
        "ma5": 1276.0,
        "ma10": 1153.2
      },
      {
        "open": 1250.0,
        "high": 1350.0,
        "low": 1250.0,
        "close": 1320.0,
        "ma5": 1283.0,
        "ma10": 1182.7
      },
      {
        "open": 1360.0,
        "high": 1440.0,
        "low": 1325.0,
        "close": 1345.0,
        "ma5": 1282.0,
        "ma10": 1224.9
      }
    ],
    "k5d": [
      {
        "open": 1290.0,
        "high": 1290.0,
        "low": 1215.0,
        "close": 1235.0,
        "ma5": 1255.0,
        "ma10": 1134.7
      },
      {
        "open": 1230.0,
        "high": 1275.0,
        "low": 1215.0,
        "close": 1275.0,
        "ma5": 1276.0,
        "ma10": 1153.2
      },
      {
        "open": 1250.0,
        "high": 1350.0,
        "low": 1250.0,
        "close": 1320.0,
        "ma5": 1283.0,
        "ma10": 1182.7
      },
      {
        "open": 1360.0,
        "high": 1440.0,
        "low": 1325.0,
        "close": 1345.0,
        "ma5": 1282.0,
        "ma10": 1224.9
      },
      {
        "open": 1385.0,
        "high": 1450.0,
        "low": 1350.0,
        "close": 1380.0,
        "ma5": 1311.0,
        "ma10": 1266.0
      }
    ],
    "symbol": "3491.TWO",
    "maxVol10d": 3380,
    "hasVolumeBurst": false
  },
  {
    "code": "3293",
    "name": "鈊象",
    "categories": [],
    "price": 757.0,
    "prevClose": 762.0,
    "open": 762.0,
    "high": 765.0,
    "low": 753.0,
    "volume": 617,
    "ma5": 779.2,
    "ma10": 780.1,
    "ma20": 753.35,
    "ma60": 759.87,
    "vMa5": 1390,
    "vMa10": 1478,
    "high5d": 806.0,
    "high10d": 806.0,
    "high20d": 806.0,
    "sparkline": [
      771.0,
      774.0,
      777.0,
      784.0,
      799.0,
      792.0,
      804.0,
      781.0,
      762.0,
      757.0
    ],
    "k3d": [
      {
        "open": 793.0,
        "high": 804.0,
        "low": 791.0,
        "close": 804.0,
        "ma5": 791.2,
        "ma10": 776.0
      },
      {
        "open": 806.0,
        "high": 806.0,
        "low": 778.0,
        "close": 781.0,
        "ma5": 792.0,
        "ma10": 780.7
      },
      {
        "open": 772.0,
        "high": 777.0,
        "low": 750.0,
        "close": 762.0,
        "ma5": 787.6,
        "ma10": 782.0
      }
    ],
    "k5d": [
      {
        "open": 801.0,
        "high": 804.0,
        "low": 792.0,
        "close": 792.0,
        "ma5": 785.2,
        "ma10": 767.9
      },
      {
        "open": 793.0,
        "high": 804.0,
        "low": 791.0,
        "close": 804.0,
        "ma5": 791.2,
        "ma10": 776.0
      },
      {
        "open": 806.0,
        "high": 806.0,
        "low": 778.0,
        "close": 781.0,
        "ma5": 792.0,
        "ma10": 780.7
      },
      {
        "open": 772.0,
        "high": 777.0,
        "low": 750.0,
        "close": 762.0,
        "ma5": 787.6,
        "ma10": 782.0
      },
      {
        "open": 762.0,
        "high": 765.0,
        "low": 753.0,
        "close": 757.0,
        "ma5": 779.2,
        "ma10": 780.1
      }
    ],
    "symbol": "3293.TWO",
    "maxVol10d": 2526,
    "hasVolumeBurst": true
  },
  {
    "code": "6138",
    "name": "茂達",
    "categories": [],
    "price": 300.0,
    "prevClose": 301.5,
    "open": 307.0,
    "high": 315.0,
    "low": 297.0,
    "volume": 1471,
    "ma5": 294.1,
    "ma10": 289.75,
    "ma20": 295.1,
    "ma60": 330.55,
    "vMa5": 964,
    "vMa10": 1051,
    "high5d": 315.0,
    "high10d": 315.0,
    "high20d": 349.5,
    "sparkline": [
      277.5,
      295.5,
      289.5,
      288.5,
      276.0,
      288.5,
      288.0,
      292.5,
      301.5,
      300.0
    ],
    "k3d": [
      {
        "open": 282.5,
        "high": 295.0,
        "low": 282.5,
        "close": 288.0,
        "ma5": 286.1,
        "ma10": 279.9
      },
      {
        "open": 291.0,
        "high": 297.0,
        "low": 290.5,
        "close": 292.5,
        "ma5": 286.7,
        "ma10": 281.85
      },
      {
        "open": 298.0,
        "high": 311.5,
        "low": 297.5,
        "close": 301.5,
        "ma5": 289.3,
        "ma10": 286.25
      }
    ],
    "k5d": [
      {
        "open": 279.5,
        "high": 292.5,
        "low": 279.0,
        "close": 288.5,
        "ma5": 287.6,
        "ma10": 279.85
      },
      {
        "open": 282.5,
        "high": 295.0,
        "low": 282.5,
        "close": 288.0,
        "ma5": 286.1,
        "ma10": 279.9
      },
      {
        "open": 291.0,
        "high": 297.0,
        "low": 290.5,
        "close": 292.5,
        "ma5": 286.7,
        "ma10": 281.85
      },
      {
        "open": 298.0,
        "high": 311.5,
        "low": 297.5,
        "close": 301.5,
        "ma5": 289.3,
        "ma10": 286.25
      },
      {
        "open": 307.0,
        "high": 315.0,
        "low": 297.0,
        "close": 300.0,
        "ma5": 294.1,
        "ma10": 289.75
      }
    ],
    "symbol": "6138.TWO",
    "maxVol10d": 1513,
    "hasVolumeBurst": true
  },
  {
    "code": "8436",
    "name": "大江",
    "categories": [],
    "price": 120.5,
    "prevClose": 122.5,
    "open": 123.5,
    "high": 123.5,
    "low": 119.5,
    "volume": 556,
    "ma5": 123.8,
    "ma10": 119.65,
    "ma20": 117.12,
    "ma60": 117.18,
    "vMa5": 1465,
    "vMa10": 1000,
    "high5d": 127.5,
    "high10d": 127.5,
    "high20d": 127.5,
    "sparkline": [
      113.0,
      113.5,
      114.5,
      119.5,
      117.0,
      125.5,
      126.0,
      124.5,
      122.5,
      120.5
    ],
    "k3d": [
      {
        "open": 122.5,
        "high": 127.0,
        "low": 119.5,
        "close": 126.0,
        "ma5": 120.5,
        "ma10": 116.75
      },
      {
        "open": 126.0,
        "high": 126.0,
        "low": 122.5,
        "close": 124.5,
        "ma5": 122.5,
        "ma10": 117.85
      },
      {
        "open": 124.0,
        "high": 124.0,
        "low": 121.5,
        "close": 122.5,
        "ma5": 123.1,
        "ma10": 118.9
      }
    ],
    "k5d": [
      {
        "open": 117.0,
        "high": 127.5,
        "low": 116.5,
        "close": 125.5,
        "ma5": 118.0,
        "ma10": 115.65
      },
      {
        "open": 122.5,
        "high": 127.0,
        "low": 119.5,
        "close": 126.0,
        "ma5": 120.5,
        "ma10": 116.75
      },
      {
        "open": 126.0,
        "high": 126.0,
        "low": 122.5,
        "close": 124.5,
        "ma5": 122.5,
        "ma10": 117.85
      },
      {
        "open": 124.0,
        "high": 124.0,
        "low": 121.5,
        "close": 122.5,
        "ma5": 123.1,
        "ma10": 118.9
      },
      {
        "open": 123.5,
        "high": 123.5,
        "low": 119.5,
        "close": 120.5,
        "ma5": 123.8,
        "ma10": 119.65
      }
    ],
    "symbol": "8436.TWO",
    "maxVol10d": 2839,
    "hasVolumeBurst": true
  },
  {
    "code": "4966",
    "name": "譜瑞-KY",
    "categories": [],
    "price": 573.0,
    "prevClose": 586.0,
    "open": 588.0,
    "high": 589.0,
    "low": 573.0,
    "volume": 477,
    "ma5": 589.0,
    "ma10": 592.6,
    "ma20": 587.95,
    "ma60": 660.48,
    "vMa5": 620,
    "vMa10": 850,
    "high5d": 602.0,
    "high10d": 622.0,
    "high20d": 638.0,
    "sparkline": [
      576.0,
      584.0,
      618.0,
      605.0,
      598.0,
      600.0,
      595.0,
      591.0,
      586.0,
      573.0
    ],
    "k3d": [
      {
        "open": 595.0,
        "high": 601.0,
        "low": 589.0,
        "close": 595.0,
        "ma5": 603.2,
        "ma10": 583.1
      },
      {
        "open": 592.0,
        "high": 600.0,
        "low": 590.0,
        "close": 591.0,
        "ma5": 597.8,
        "ma10": 586.1
      },
      {
        "open": 594.0,
        "high": 601.0,
        "low": 585.0,
        "close": 586.0,
        "ma5": 594.0,
        "ma10": 591.5
      }
    ],
    "k5d": [
      {
        "open": 595.0,
        "high": 602.0,
        "low": 590.0,
        "close": 600.0,
        "ma5": 601.0,
        "ma10": 581.4
      },
      {
        "open": 595.0,
        "high": 601.0,
        "low": 589.0,
        "close": 595.0,
        "ma5": 603.2,
        "ma10": 583.1
      },
      {
        "open": 592.0,
        "high": 600.0,
        "low": 590.0,
        "close": 591.0,
        "ma5": 597.8,
        "ma10": 586.1
      },
      {
        "open": 594.0,
        "high": 601.0,
        "low": 585.0,
        "close": 586.0,
        "ma5": 594.0,
        "ma10": 591.5
      },
      {
        "open": 588.0,
        "high": 589.0,
        "low": 573.0,
        "close": 573.0,
        "ma5": 589.0,
        "ma10": 592.6
      }
    ],
    "symbol": "4966.TWO",
    "maxVol10d": 1435,
    "hasVolumeBurst": false
  },
  {
    "code": "6274",
    "name": "台燿",
    "categories": [],
    "price": 1690.0,
    "prevClose": 1600.0,
    "open": 1620.0,
    "high": 1730.0,
    "low": 1600.0,
    "volume": 2851,
    "ma5": 1591.0,
    "ma10": 1495.5,
    "ma20": 1339.0,
    "ma60": 1512.17,
    "vMa5": 2679,
    "vMa10": 5104,
    "high5d": 1730.0,
    "high10d": 1730.0,
    "high20d": 1730.0,
    "sparkline": [
      1220.0,
      1340.0,
      1470.0,
      1530.0,
      1440.0,
      1460.0,
      1605.0,
      1600.0,
      1600.0,
      1690.0
    ],
    "k3d": [
      {
        "open": 1585.0,
        "high": 1605.0,
        "low": 1500.0,
        "close": 1605.0,
        "ma5": 1501.0,
        "ma10": 1320.5
      },
      {
        "open": 1580.0,
        "high": 1645.0,
        "low": 1580.0,
        "close": 1600.0,
        "ma5": 1527.0,
        "ma10": 1378.5
      },
      {
        "open": 1675.0,
        "high": 1675.0,
        "low": 1525.0,
        "close": 1600.0,
        "ma5": 1541.0,
        "ma10": 1437.5
      }
    ],
    "k5d": [
      {
        "open": 1510.0,
        "high": 1510.0,
        "low": 1445.0,
        "close": 1460.0,
        "ma5": 1448.0,
        "ma10": 1273.0
      },
      {
        "open": 1585.0,
        "high": 1605.0,
        "low": 1500.0,
        "close": 1605.0,
        "ma5": 1501.0,
        "ma10": 1320.5
      },
      {
        "open": 1580.0,
        "high": 1645.0,
        "low": 1580.0,
        "close": 1600.0,
        "ma5": 1527.0,
        "ma10": 1378.5
      },
      {
        "open": 1675.0,
        "high": 1675.0,
        "low": 1525.0,
        "close": 1600.0,
        "ma5": 1541.0,
        "ma10": 1437.5
      },
      {
        "open": 1620.0,
        "high": 1730.0,
        "low": 1600.0,
        "close": 1690.0,
        "ma5": 1591.0,
        "ma10": 1495.5
      }
    ],
    "symbol": "6274.TWO",
    "maxVol10d": 16305,
    "hasVolumeBurst": true
  },
  {
    "code": "5289",
    "name": "宜鼎",
    "categories": [],
    "price": 1485.0,
    "prevClose": 1535.0,
    "open": 1565.0,
    "high": 1595.0,
    "low": 1470.0,
    "volume": 2358,
    "ma5": 1495.0,
    "ma10": 1485.0,
    "ma20": 1381.5,
    "ma60": 1601.33,
    "vMa5": 2543,
    "vMa10": 3172,
    "high5d": 1595.0,
    "high10d": 1680.0,
    "high20d": 1680.0,
    "sparkline": [
      1385.0,
      1415.0,
      1465.0,
      1610.0,
      1500.0,
      1465.0,
      1470.0,
      1520.0,
      1535.0,
      1485.0
    ],
    "k3d": [
      {
        "open": 1460.0,
        "high": 1485.0,
        "low": 1425.0,
        "close": 1470.0,
        "ma5": 1502.0,
        "ma10": 1394.5
      },
      {
        "open": 1480.0,
        "high": 1535.0,
        "low": 1480.0,
        "close": 1520.0,
        "ma5": 1513.0,
        "ma10": 1430.5
      },
      {
        "open": 1560.0,
        "high": 1560.0,
        "low": 1510.0,
        "close": 1535.0,
        "ma5": 1498.0,
        "ma10": 1466.0
      }
    ],
    "k5d": [
      {
        "open": 1525.0,
        "high": 1530.0,
        "low": 1460.0,
        "close": 1465.0,
        "ma5": 1491.0,
        "ma10": 1367.5
      },
      {
        "open": 1460.0,
        "high": 1485.0,
        "low": 1425.0,
        "close": 1470.0,
        "ma5": 1502.0,
        "ma10": 1394.5
      },
      {
        "open": 1480.0,
        "high": 1535.0,
        "low": 1480.0,
        "close": 1520.0,
        "ma5": 1513.0,
        "ma10": 1430.5
      },
      {
        "open": 1560.0,
        "high": 1560.0,
        "low": 1510.0,
        "close": 1535.0,
        "ma5": 1498.0,
        "ma10": 1466.0
      },
      {
        "open": 1565.0,
        "high": 1595.0,
        "low": 1470.0,
        "close": 1485.0,
        "ma5": 1495.0,
        "ma10": 1485.0
      }
    ],
    "symbol": "5289.TWO",
    "maxVol10d": 7433,
    "hasVolumeBurst": true
  },
  {
    "code": "3324",
    "name": "雙鴻",
    "categories": [],
    "price": 1030.0,
    "prevClose": 1035.0,
    "open": 1050.0,
    "high": 1050.0,
    "low": 1020.0,
    "volume": 1282,
    "ma5": 1034.0,
    "ma10": 1009.8,
    "ma20": 951.65,
    "ma60": 1000.18,
    "vMa5": 2613,
    "vMa10": 3219,
    "high5d": 1080.0,
    "high10d": 1080.0,
    "high20d": 1080.0,
    "sparkline": [
      944.0,
      944.0,
      965.0,
      1060.0,
      1015.0,
      1010.0,
      1045.0,
      1050.0,
      1035.0,
      1030.0
    ],
    "k3d": [
      {
        "open": 1015.0,
        "high": 1050.0,
        "low": 1000.0,
        "close": 1045.0,
        "ma5": 1019.0,
        "ma10": 956.0
      },
      {
        "open": 1035.0,
        "high": 1070.0,
        "low": 1035.0,
        "close": 1050.0,
        "ma5": 1036.0,
        "ma10": 975.5
      },
      {
        "open": 1065.0,
        "high": 1080.0,
        "low": 1025.0,
        "close": 1035.0,
        "ma5": 1031.0,
        "ma10": 997.0
      }
    ],
    "k5d": [
      {
        "open": 1025.0,
        "high": 1080.0,
        "low": 1005.0,
        "close": 1010.0,
        "ma5": 998.8,
        "ma10": 938.5
      },
      {
        "open": 1015.0,
        "high": 1050.0,
        "low": 1000.0,
        "close": 1045.0,
        "ma5": 1019.0,
        "ma10": 956.0
      },
      {
        "open": 1035.0,
        "high": 1070.0,
        "low": 1035.0,
        "close": 1050.0,
        "ma5": 1036.0,
        "ma10": 975.5
      },
      {
        "open": 1065.0,
        "high": 1080.0,
        "low": 1025.0,
        "close": 1035.0,
        "ma5": 1031.0,
        "ma10": 997.0
      },
      {
        "open": 1050.0,
        "high": 1050.0,
        "low": 1020.0,
        "close": 1030.0,
        "ma5": 1034.0,
        "ma10": 1009.8
      }
    ],
    "symbol": "3324.TWO",
    "maxVol10d": 7045,
    "hasVolumeBurst": true
  },
  {
    "code": "00999A",
    "name": "主動野村臺灣高息",
    "categories": [
      "MajorBuy"
    ],
    "price": 11.35,
    "prevClose": 11.3,
    "open": 11.39,
    "high": 11.41,
    "low": 11.3,
    "volume": 10959,
    "ma5": 11.09,
    "ma10": 10.81,
    "ma20": 10.43,
    "ma60": 10.75,
    "vMa5": 16401,
    "vMa10": 17950,
    "high5d": 11.41,
    "high10d": 11.41,
    "high20d": 11.41,
    "sparkline": [
      10.16,
      10.35,
      10.51,
      10.75,
      10.88,
      10.83,
      11.03,
      11.06,
      11.19,
      11.35
    ],
    "k3d": [
      {
        "open": 11.01,
        "high": 11.12,
        "low": 11.0,
        "close": 11.03,
        "ma5": 10.8,
        "ma10": 10.32
      },
      {
        "open": 11.0,
        "high": 11.07,
        "low": 10.93,
        "close": 11.06,
        "ma5": 10.91,
        "ma10": 10.44
      },
      {
        "open": 11.33,
        "high": 11.35,
        "low": 11.23,
        "close": 11.3,
        "ma5": 11.02,
        "ma10": 10.63
      }
    ],
    "k5d": [
      {
        "open": 10.98,
        "high": 10.99,
        "low": 10.78,
        "close": 10.83,
        "ma5": 10.66,
        "ma10": 10.25
      },
      {
        "open": 11.01,
        "high": 11.12,
        "low": 11.0,
        "close": 11.03,
        "ma5": 10.8,
        "ma10": 10.32
      },
      {
        "open": 11.0,
        "high": 11.07,
        "low": 10.93,
        "close": 11.06,
        "ma5": 10.91,
        "ma10": 10.44
      },
      {
        "open": 11.11,
        "high": 11.2,
        "low": 11.11,
        "close": 11.19,
        "ma5": 11.0,
        "ma10": 10.62
      },
      {
        "open": 11.39,
        "high": 11.41,
        "low": 11.3,
        "close": 11.33,
        "ma5": 11.09,
        "ma10": 10.81
      }
    ],
    "symbol": "00999A.TW",
    "maxVol10d": 26113,
    "hasVolumeBurst": false
  },
  {
    "code": "009821",
    "name": "野村稀土關鍵資源",
    "categories": [
      "MajorBuy"
    ],
    "price": 14.8,
    "prevClose": 14.98,
    "open": 14.87,
    "high": 14.87,
    "low": 14.68,
    "volume": 9053,
    "ma5": 14.83,
    "ma10": 14.11,
    "ma20": 13.42,
    "ma60": 14.06,
    "vMa5": 17539,
    "vMa10": 12453,
    "high5d": 15.13,
    "high10d": 15.13,
    "high20d": 15.13,
    "sparkline": [
      13.02,
      12.85,
      13.19,
      13.71,
      14.12,
      14.34,
      14.91,
      15.07,
      15.05,
      14.8
    ],
    "k3d": [
      {
        "open": 14.9,
        "high": 14.95,
        "low": 14.88,
        "close": 14.91,
        "ma5": 14.05,
        "ma10": 13.37
      },
      {
        "open": 15.1,
        "high": 15.13,
        "low": 14.98,
        "close": 15.07,
        "ma5": 14.43,
        "ma10": 13.61
      },
      {
        "open": 15.05,
        "high": 15.09,
        "low": 14.97,
        "close": 14.98,
        "ma5": 14.68,
        "ma10": 13.86
      }
    ],
    "k5d": [
      {
        "open": 14.14,
        "high": 14.39,
        "low": 14.08,
        "close": 14.34,
        "ma5": 13.64,
        "ma10": 13.17
      },
      {
        "open": 14.9,
        "high": 14.95,
        "low": 14.88,
        "close": 14.91,
        "ma5": 14.05,
        "ma10": 13.37
      },
      {
        "open": 15.1,
        "high": 15.13,
        "low": 14.98,
        "close": 15.07,
        "ma5": 14.43,
        "ma10": 13.61
      },
      {
        "open": 15.07,
        "high": 15.09,
        "low": 14.99,
        "close": 15.05,
        "ma5": 14.7,
        "ma10": 13.86
      },
      {
        "open": 14.87,
        "high": 14.87,
        "low": 14.68,
        "close": 14.8,
        "ma5": 14.83,
        "ma10": 14.11
      }
    ],
    "symbol": "009821.TW",
    "maxVol10d": 25406,
    "hasVolumeBurst": true
  },
  {
    "code": "3706",
    "name": "神達",
    "categories": [],
    "price": 93.1,
    "prevClose": 91.7,
    "open": 92.3,
    "high": 94.0,
    "low": 91.9,
    "volume": 15951,
    "ma5": 92.06,
    "ma10": 91.76,
    "ma20": 90.4,
    "ma60": 89.24,
    "vMa5": 12696,
    "vMa10": 13435,
    "high5d": 94.0,
    "high10d": 94.0,
    "high20d": 94.0,
    "sparkline": [
      89.5,
      91.3,
      91.9,
      92.9,
      91.7,
      92.9,
      90.0,
      92.4,
      91.7,
      93.1
    ],
    "k3d": [
      {
        "open": 91.9,
        "high": 91.9,
        "low": 89.6,
        "close": 90.0,
        "ma5": 91.88,
        "ma10": 89.7
      },
      {
        "open": 89.5,
        "high": 93.4,
        "low": 89.5,
        "close": 92.4,
        "ma5": 91.98,
        "ma10": 90.41
      },
      {
        "open": 93.0,
        "high": 93.5,
        "low": 91.4,
        "close": 91.7,
        "ma5": 91.74,
        "ma10": 91.17
      }
    ],
    "k5d": [
      {
        "open": 92.2,
        "high": 93.2,
        "low": 91.8,
        "close": 92.9,
        "ma5": 92.14,
        "ma10": 89.52
      },
      {
        "open": 91.9,
        "high": 91.9,
        "low": 89.6,
        "close": 90.0,
        "ma5": 91.88,
        "ma10": 89.7
      },
      {
        "open": 89.5,
        "high": 93.4,
        "low": 89.5,
        "close": 92.4,
        "ma5": 91.98,
        "ma10": 90.41
      },
      {
        "open": 93.0,
        "high": 93.5,
        "low": 91.4,
        "close": 91.7,
        "ma5": 91.74,
        "ma10": 91.17
      },
      {
        "open": 92.3,
        "high": 94.0,
        "low": 91.9,
        "close": 93.3,
        "ma5": 92.06,
        "ma10": 91.76
      }
    ],
    "symbol": "3706.TW",
    "maxVol10d": 19372,
    "hasVolumeBurst": true
  },
  {
    "code": "2353",
    "name": "宏碁",
    "categories": [],
    "price": 32.6,
    "prevClose": 31.55,
    "open": 31.8,
    "high": 33.2,
    "low": 31.8,
    "volume": 48261,
    "ma5": 31.63,
    "ma10": 30.65,
    "ma20": 30.05,
    "ma60": 32.84,
    "vMa5": 26534,
    "vMa10": 23575,
    "high5d": 33.2,
    "high10d": 33.2,
    "high20d": 33.2,
    "sparkline": [
      28.8,
      29.05,
      30.25,
      30.0,
      30.25,
      31.0,
      31.05,
      31.75,
      31.55,
      32.6
    ],
    "k3d": [
      {
        "open": 30.9,
        "high": 31.05,
        "low": 30.5,
        "close": 31.05,
        "ma5": 30.51,
        "ma10": 29.58
      },
      {
        "open": 31.0,
        "high": 31.95,
        "low": 30.85,
        "close": 31.75,
        "ma5": 30.81,
        "ma10": 29.89
      },
      {
        "open": 32.2,
        "high": 32.5,
        "low": 31.5,
        "close": 31.55,
        "ma5": 31.12,
        "ma10": 30.25
      }
    ],
    "k5d": [
      {
        "open": 30.3,
        "high": 31.0,
        "low": 30.0,
        "close": 31.0,
        "ma5": 30.11,
        "ma10": 29.36
      },
      {
        "open": 30.9,
        "high": 31.05,
        "low": 30.5,
        "close": 31.05,
        "ma5": 30.51,
        "ma10": 29.58
      },
      {
        "open": 31.0,
        "high": 31.95,
        "low": 30.85,
        "close": 31.75,
        "ma5": 30.81,
        "ma10": 29.89
      },
      {
        "open": 32.2,
        "high": 32.5,
        "low": 31.5,
        "close": 31.55,
        "ma5": 31.12,
        "ma10": 30.25
      },
      {
        "open": 31.8,
        "high": 33.2,
        "low": 31.8,
        "close": 32.8,
        "ma5": 31.63,
        "ma10": 30.65
      }
    ],
    "symbol": "2353.TW",
    "maxVol10d": 48261,
    "hasVolumeBurst": true
  },
  {
    "code": "00940",
    "name": "元大台灣價值高息",
    "categories": [
      "MajorBuy"
    ],
    "price": 12.52,
    "prevClose": 12.56,
    "open": 12.61,
    "high": 12.63,
    "low": 12.5,
    "volume": 7571,
    "ma5": 12.43,
    "ma10": 12.35,
    "ma20": 12.15,
    "ma60": 12.28,
    "vMa5": 12356,
    "vMa10": 16662,
    "high5d": 12.63,
    "high10d": 12.63,
    "high20d": 12.63,
    "sparkline": [
      12.09,
      12.12,
      12.23,
      12.47,
      12.45,
      12.4,
      12.44,
      12.34,
      12.43,
      12.52
    ],
    "k3d": [
      {
        "open": 12.39,
        "high": 12.45,
        "low": 12.34,
        "close": 12.44,
        "ma5": 12.4,
        "ma10": 12.11
      },
      {
        "open": 12.34,
        "high": 12.35,
        "low": 12.28,
        "close": 12.34,
        "ma5": 12.42,
        "ma10": 12.17
      },
      {
        "open": 12.59,
        "high": 12.64,
        "low": 12.52,
        "close": 12.56,
        "ma5": 12.44,
        "ma10": 12.26
      }
    ],
    "k5d": [
      {
        "open": 12.41,
        "high": 12.47,
        "low": 12.34,
        "close": 12.4,
        "ma5": 12.33,
        "ma10": 12.08
      },
      {
        "open": 12.39,
        "high": 12.45,
        "low": 12.34,
        "close": 12.44,
        "ma5": 12.4,
        "ma10": 12.11
      },
      {
        "open": 12.34,
        "high": 12.35,
        "low": 12.28,
        "close": 12.34,
        "ma5": 12.42,
        "ma10": 12.17
      },
      {
        "open": 12.4,
        "high": 12.47,
        "low": 12.38,
        "close": 12.43,
        "ma5": 12.41,
        "ma10": 12.25
      },
      {
        "open": 12.61,
        "high": 12.63,
        "low": 12.5,
        "close": 12.53,
        "ma5": 12.43,
        "ma10": 12.35
      }
    ],
    "symbol": "00940.TW",
    "maxVol10d": 38123,
    "hasVolumeBurst": true
  },
  {
    "code": "1608",
    "name": "華榮",
    "categories": [],
    "price": 36.75,
    "prevClose": 36.8,
    "open": 36.8,
    "high": 37.35,
    "low": 36.6,
    "volume": 3064,
    "ma5": 36.76,
    "ma10": 35.2,
    "ma20": 32.38,
    "ma60": 33.68,
    "vMa5": 9992,
    "vMa10": 9994,
    "high5d": 39.2,
    "high10d": 39.2,
    "high20d": 39.2,
    "sparkline": [
      31.15,
      34.25,
      33.4,
      34.4,
      34.95,
      35.75,
      36.45,
      37.95,
      36.8,
      36.75
    ],
    "k3d": [
      {
        "open": 35.95,
        "high": 37.0,
        "low": 35.8,
        "close": 36.45,
        "ma5": 34.99,
        "ma10": 32.42
      },
      {
        "open": 36.3,
        "high": 39.2,
        "low": 36.3,
        "close": 37.95,
        "ma5": 35.9,
        "ma10": 33.46
      },
      {
        "open": 37.95,
        "high": 37.95,
        "low": 36.6,
        "close": 36.8,
        "ma5": 36.38,
        "ma10": 34.45
      }
    ],
    "k5d": [
      {
        "open": 35.0,
        "high": 36.15,
        "low": 34.7,
        "close": 35.75,
        "ma5": 34.55,
        "ma10": 31.61
      },
      {
        "open": 35.95,
        "high": 37.0,
        "low": 35.8,
        "close": 36.45,
        "ma5": 34.99,
        "ma10": 32.42
      },
      {
        "open": 36.3,
        "high": 39.2,
        "low": 36.3,
        "close": 37.95,
        "ma5": 35.9,
        "ma10": 33.46
      },
      {
        "open": 37.95,
        "high": 37.95,
        "low": 36.6,
        "close": 36.8,
        "ma5": 36.38,
        "ma10": 34.45
      },
      {
        "open": 36.8,
        "high": 37.35,
        "low": 36.6,
        "close": 36.85,
        "ma5": 36.76,
        "ma10": 35.2
      }
    ],
    "symbol": "1608.TW",
    "maxVol10d": 22330,
    "hasVolumeBurst": true
  },
  {
    "code": "0052",
    "name": "富邦科技",
    "categories": [
      "MajorBuy"
    ],
    "price": 62.3,
    "prevClose": 62.4,
    "open": 62.7,
    "high": 62.8,
    "low": 62.25,
    "volume": 19187,
    "ma5": 61.23,
    "ma10": 60.48,
    "ma20": 59.31,
    "ma60": 60.81,
    "vMa5": 18256,
    "vMa10": 26936,
    "high5d": 62.8,
    "high10d": 62.8,
    "high20d": 62.8,
    "sparkline": [
      59.7,
      59.15,
      58.65,
      60.65,
      60.45,
      60.2,
      60.95,
      61.05,
      61.5,
      62.3
    ],
    "k3d": [
      {
        "open": 60.75,
        "high": 61.25,
        "low": 60.6,
        "close": 60.95,
        "ma5": 60.18,
        "ma10": 58.51
      },
      {
        "open": 60.6,
        "high": 61.2,
        "low": 60.2,
        "close": 61.05,
        "ma5": 60.66,
        "ma10": 58.95
      },
      {
        "open": 62.5,
        "high": 62.7,
        "low": 62.1,
        "close": 62.4,
        "ma5": 61.01,
        "ma10": 59.75
      }
    ],
    "k5d": [
      {
        "open": 60.65,
        "high": 60.75,
        "low": 59.65,
        "close": 60.2,
        "ma5": 59.82,
        "ma10": 58.35
      },
      {
        "open": 60.75,
        "high": 61.25,
        "low": 60.6,
        "close": 60.95,
        "ma5": 60.18,
        "ma10": 58.51
      },
      {
        "open": 60.6,
        "high": 61.2,
        "low": 60.2,
        "close": 61.05,
        "ma5": 60.66,
        "ma10": 58.95
      },
      {
        "open": 61.3,
        "high": 61.65,
        "low": 61.1,
        "close": 61.5,
        "ma5": 60.83,
        "ma10": 59.66
      },
      {
        "open": 62.7,
        "high": 62.8,
        "low": 62.25,
        "close": 62.45,
        "ma5": 61.23,
        "ma10": 60.48
      }
    ],
    "symbol": "0052.TW",
    "maxVol10d": 72591,
    "hasVolumeBurst": true
  },
  {
    "code": "00712",
    "name": "復華富時不動產",
    "categories": [],
    "price": 8.91,
    "prevClose": 8.9,
    "open": 8.91,
    "high": 8.92,
    "low": 8.9,
    "volume": 5064,
    "ma5": 8.85,
    "ma10": 8.85,
    "ma20": 8.87,
    "ma60": 8.8,
    "vMa5": 14502,
    "vMa10": 14748,
    "high5d": 8.92,
    "high10d": 8.93,
    "high20d": 9.13,
    "sparkline": [
      8.9,
      8.84,
      8.83,
      8.85,
      8.8,
      8.76,
      8.86,
      8.84,
      8.91,
      8.91
    ],
    "k3d": [
      {
        "open": 8.87,
        "high": 8.88,
        "low": 8.86,
        "close": 8.86,
        "ma5": 8.82,
        "ma10": 8.85
      },
      {
        "open": 8.84,
        "high": 8.85,
        "low": 8.82,
        "close": 8.84,
        "ma5": 8.82,
        "ma10": 8.85
      },
      {
        "open": 8.91,
        "high": 8.91,
        "low": 8.89,
        "close": 8.9,
        "ma5": 8.83,
        "ma10": 8.85
      }
    ],
    "k5d": [
      {
        "open": 8.8,
        "high": 8.8,
        "low": 8.74,
        "close": 8.76,
        "ma5": 8.82,
        "ma10": 8.84
      },
      {
        "open": 8.87,
        "high": 8.88,
        "low": 8.86,
        "close": 8.86,
        "ma5": 8.82,
        "ma10": 8.85
      },
      {
        "open": 8.84,
        "high": 8.85,
        "low": 8.82,
        "close": 8.84,
        "ma5": 8.82,
        "ma10": 8.85
      },
      {
        "open": 8.89,
        "high": 8.92,
        "low": 8.88,
        "close": 8.91,
        "ma5": 8.83,
        "ma10": 8.85
      },
      {
        "open": 8.91,
        "high": 8.92,
        "low": 8.9,
        "close": 8.9,
        "ma5": 8.85,
        "ma10": 8.85
      }
    ],
    "symbol": "00712.TW",
    "maxVol10d": 30470,
    "hasVolumeBurst": true
  },
  {
    "code": "009820",
    "name": "元大納斯達克精選",
    "categories": [
      "MajorBuy"
    ],
    "price": 10.27,
    "prevClose": 10.13,
    "open": 10.28,
    "high": 10.31,
    "low": 10.27,
    "volume": 16678,
    "ma5": 10.09,
    "ma10": 9.89,
    "ma20": 9.77,
    "ma60": 10.0,
    "vMa5": 12668,
    "vMa10": 10783,
    "high5d": 10.31,
    "high10d": 10.31,
    "high20d": 10.31,
    "sparkline": [
      9.47,
      9.44,
      9.62,
      9.99,
      9.95,
      9.95,
      10.09,
      10.06,
      10.07,
      10.27
    ],
    "k3d": [
      {
        "open": 9.99,
        "high": 10.12,
        "low": 9.99,
        "close": 10.09,
        "ma5": 9.92,
        "ma10": 9.61
      },
      {
        "open": 10.06,
        "high": 10.08,
        "low": 10.05,
        "close": 10.06,
        "ma5": 10.01,
        "ma10": 9.67
      },
      {
        "open": 10.14,
        "high": 10.15,
        "low": 10.11,
        "close": 10.13,
        "ma5": 10.04,
        "ma10": 9.77
      }
    ],
    "k5d": [
      {
        "open": 9.98,
        "high": 9.99,
        "low": 9.93,
        "close": 9.95,
        "ma5": 9.79,
        "ma10": 9.58
      },
      {
        "open": 9.99,
        "high": 10.12,
        "low": 9.99,
        "close": 10.09,
        "ma5": 9.92,
        "ma10": 9.61
      },
      {
        "open": 10.06,
        "high": 10.08,
        "low": 10.05,
        "close": 10.06,
        "ma5": 10.01,
        "ma10": 9.67
      },
      {
        "open": 10.08,
        "high": 10.1,
        "low": 10.07,
        "close": 10.07,
        "ma5": 10.02,
        "ma10": 9.76
      },
      {
        "open": 10.28,
        "high": 10.31,
        "low": 10.27,
        "close": 10.27,
        "ma5": 10.09,
        "ma10": 9.89
      }
    ],
    "symbol": "009820.TW",
    "maxVol10d": 20254,
    "hasVolumeBurst": true
  },
  {
    "code": "00990A",
    "name": "主動元大AI新經濟",
    "categories": [
      "MajorBuy"
    ],
    "price": 16.51,
    "prevClose": 16.61,
    "open": 16.73,
    "high": 16.73,
    "low": 16.5,
    "volume": 10908,
    "ma5": 16.0,
    "ma10": 15.84,
    "ma20": 15.72,
    "ma60": 18.29,
    "vMa5": 12890,
    "vMa10": 16245,
    "high5d": 16.73,
    "high10d": 16.73,
    "high20d": 18.21,
    "sparkline": [
      15.56,
      15.34,
      15.49,
      16.2,
      15.83,
      15.68,
      16.03,
      15.88,
      15.9,
      16.51
    ],
    "k3d": [
      {
        "open": 15.86,
        "high": 16.07,
        "low": 15.86,
        "close": 16.03,
        "ma5": 15.85,
        "ma10": 15.24
      },
      {
        "open": 15.75,
        "high": 15.89,
        "low": 15.75,
        "close": 15.88,
        "ma5": 15.92,
        "ma10": 15.35
      },
      {
        "open": 16.66,
        "high": 16.66,
        "low": 16.45,
        "close": 16.61,
        "ma5": 16.01,
        "ma10": 15.63
      }
    ],
    "k5d": [
      {
        "open": 15.9,
        "high": 15.9,
        "low": 15.59,
        "close": 15.68,
        "ma5": 15.71,
        "ma10": 15.24
      },
      {
        "open": 15.86,
        "high": 16.07,
        "low": 15.86,
        "close": 16.03,
        "ma5": 15.85,
        "ma10": 15.24
      },
      {
        "open": 15.75,
        "high": 15.89,
        "low": 15.75,
        "close": 15.88,
        "ma5": 15.92,
        "ma10": 15.35
      },
      {
        "open": 15.88,
        "high": 15.93,
        "low": 15.85,
        "close": 15.9,
        "ma5": 15.86,
        "ma10": 15.56
      },
      {
        "open": 16.73,
        "high": 16.73,
        "low": 16.5,
        "close": 16.53,
        "ma5": 16.0,
        "ma10": 15.84
      }
    ],
    "symbol": "00990A.TW",
    "maxVol10d": 37939,
    "hasVolumeBurst": false
  },
  {
    "code": "2354",
    "name": "鴻準",
    "categories": [],
    "price": 62.4,
    "prevClose": 62.8,
    "open": 62.8,
    "high": 63.4,
    "low": 62.0,
    "volume": 6810,
    "ma5": 62.84,
    "ma10": 60.49,
    "ma20": 57.85,
    "ma60": 57.9,
    "vMa5": 18914,
    "vMa10": 21650,
    "high5d": 65.2,
    "high10d": 65.2,
    "high20d": 65.2,
    "sparkline": [
      56.4,
      56.0,
      55.5,
      61.0,
      61.8,
      63.1,
      62.7,
      63.0,
      62.8,
      62.4
    ],
    "k3d": [
      {
        "open": 63.1,
        "high": 63.9,
        "low": 61.7,
        "close": 62.7,
        "ma5": 60.82,
        "ma10": 57.91
      },
      {
        "open": 63.1,
        "high": 64.6,
        "low": 62.8,
        "close": 63.0,
        "ma5": 62.32,
        "ma10": 58.91
      },
      {
        "open": 63.6,
        "high": 63.8,
        "low": 61.9,
        "close": 62.8,
        "ma5": 62.68,
        "ma10": 59.88
      }
    ],
    "k5d": [
      {
        "open": 62.4,
        "high": 65.2,
        "low": 61.8,
        "close": 63.1,
        "ma5": 59.48,
        "ma10": 57.04
      },
      {
        "open": 63.1,
        "high": 63.9,
        "low": 61.7,
        "close": 62.7,
        "ma5": 60.82,
        "ma10": 57.91
      },
      {
        "open": 63.1,
        "high": 64.6,
        "low": 62.8,
        "close": 63.0,
        "ma5": 62.32,
        "ma10": 58.91
      },
      {
        "open": 63.6,
        "high": 63.8,
        "low": 61.9,
        "close": 62.8,
        "ma5": 62.68,
        "ma10": 59.88
      },
      {
        "open": 62.8,
        "high": 63.4,
        "low": 62.0,
        "close": 62.6,
        "ma5": 62.84,
        "ma10": 60.49
      }
    ],
    "symbol": "2354.TW",
    "maxVol10d": 81031,
    "hasVolumeBurst": true
  },
  {
    "code": "9933",
    "name": "中鼎",
    "categories": [],
    "price": 42.9,
    "prevClose": 42.2,
    "open": 42.15,
    "high": 42.75,
    "low": 41.55,
    "volume": 1692,
    "ma5": 40.67,
    "ma10": 38.74,
    "ma20": 38.67,
    "ma60": 40.39,
    "vMa5": 3651,
    "vMa10": 2833,
    "high5d": 42.8,
    "high10d": 42.8,
    "high20d": 42.8,
    "sparkline": [
      36.0,
      36.45,
      36.65,
      37.15,
      37.75,
      38.25,
      38.65,
      42.0,
      42.2,
      42.9
    ],
    "k3d": [
      {
        "open": 37.85,
        "high": 38.8,
        "low": 37.85,
        "close": 38.65,
        "ma5": 37.69,
        "ma10": 36.82
      },
      {
        "open": 40.6,
        "high": 42.5,
        "low": 40.6,
        "close": 42.0,
        "ma5": 38.76,
        "ma10": 37.39
      },
      {
        "open": 41.95,
        "high": 42.8,
        "low": 41.7,
        "close": 42.2,
        "ma5": 39.77,
        "ma10": 38.04
      }
    ],
    "k5d": [
      {
        "open": 37.9,
        "high": 38.35,
        "low": 37.3,
        "close": 38.25,
        "ma5": 37.25,
        "ma10": 36.87
      },
      {
        "open": 37.85,
        "high": 38.8,
        "low": 37.85,
        "close": 38.65,
        "ma5": 37.69,
        "ma10": 36.82
      },
      {
        "open": 40.6,
        "high": 42.5,
        "low": 40.6,
        "close": 42.0,
        "ma5": 38.76,
        "ma10": 37.39
      },
      {
        "open": 41.95,
        "high": 42.8,
        "low": 41.7,
        "close": 42.2,
        "ma5": 39.77,
        "ma10": 38.04
      },
      {
        "open": 42.15,
        "high": 42.75,
        "low": 41.55,
        "close": 42.25,
        "ma5": 40.67,
        "ma10": 38.74
      }
    ],
    "symbol": "9933.TW",
    "maxVol10d": 9689,
    "hasVolumeBurst": true
  },
  {
    "code": "3605",
    "name": "宏致",
    "categories": [],
    "price": 132.0,
    "prevClose": 132.0,
    "open": 134.0,
    "high": 137.5,
    "low": 128.0,
    "volume": 14589,
    "ma5": 120.8,
    "ma10": 109.78,
    "ma20": 97.65,
    "ma60": 86.0,
    "vMa5": 12395,
    "vMa10": 13201,
    "high5d": 137.5,
    "high10d": 137.5,
    "high20d": 137.5,
    "sparkline": [
      84.2,
      92.6,
      101.5,
      108.0,
      107.5,
      109.0,
      111.0,
      120.0,
      132.0,
      132.0
    ],
    "k3d": [
      {
        "open": 111.5,
        "high": 119.5,
        "low": 109.5,
        "close": 111.0,
        "ma5": 107.4,
        "ma10": 95.36
      },
      {
        "open": 111.0,
        "high": 120.0,
        "low": 111.0,
        "close": 120.0,
        "ma5": 111.1,
        "ma10": 99.11
      },
      {
        "open": 124.5,
        "high": 132.0,
        "low": 123.0,
        "close": 132.0,
        "ma5": 115.9,
        "ma10": 104.48
      }
    ],
    "k5d": [
      {
        "open": 108.5,
        "high": 110.5,
        "low": 103.0,
        "close": 109.0,
        "ma5": 103.72,
        "ma10": 92.74
      },
      {
        "open": 111.5,
        "high": 119.5,
        "low": 109.5,
        "close": 111.0,
        "ma5": 107.4,
        "ma10": 95.36
      },
      {
        "open": 111.0,
        "high": 120.0,
        "low": 111.0,
        "close": 120.0,
        "ma5": 111.1,
        "ma10": 99.11
      },
      {
        "open": 124.5,
        "high": 132.0,
        "low": 123.0,
        "close": 132.0,
        "ma5": 115.9,
        "ma10": 104.48
      },
      {
        "open": 134.0,
        "high": 137.5,
        "low": 128.0,
        "close": 132.0,
        "ma5": 120.8,
        "ma10": 109.78
      }
    ],
    "symbol": "3605.TW",
    "maxVol10d": 23186,
    "hasVolumeBurst": true
  },
  {
    "code": "00993A",
    "name": "主動安聯台灣",
    "categories": [],
    "price": 13.71,
    "prevClose": 13.6,
    "open": 13.72,
    "high": 13.8,
    "low": 13.68,
    "volume": 6313,
    "ma5": 13.22,
    "ma10": 12.83,
    "ma20": 12.36,
    "ma60": 13.21,
    "vMa5": 6237,
    "vMa10": 7894,
    "high5d": 13.8,
    "high10d": 13.8,
    "high20d": 13.8,
    "sparkline": [
      11.77,
      12.23,
      12.46,
      12.81,
      12.93,
      12.75,
      13.06,
      13.14,
      13.4,
      13.71
    ],
    "k3d": [
      {
        "open": 13.0,
        "high": 13.24,
        "low": 12.98,
        "close": 13.06,
        "ma5": 12.8,
        "ma10": 12.08
      },
      {
        "open": 13.01,
        "high": 13.15,
        "low": 12.97,
        "close": 13.14,
        "ma5": 12.94,
        "ma10": 12.25
      },
      {
        "open": 13.63,
        "high": 13.72,
        "low": 13.5,
        "close": 13.6,
        "ma5": 13.1,
        "ma10": 12.55
      }
    ],
    "k5d": [
      {
        "open": 13.0,
        "high": 13.03,
        "low": 12.69,
        "close": 12.75,
        "ma5": 12.64,
        "ma10": 12.01
      },
      {
        "open": 13.0,
        "high": 13.24,
        "low": 12.98,
        "close": 13.06,
        "ma5": 12.8,
        "ma10": 12.08
      },
      {
        "open": 13.01,
        "high": 13.15,
        "low": 12.97,
        "close": 13.14,
        "ma5": 12.94,
        "ma10": 12.25
      },
      {
        "open": 13.27,
        "high": 13.4,
        "low": 13.25,
        "close": 13.4,
        "ma5": 13.06,
        "ma10": 12.53
      },
      {
        "open": 13.72,
        "high": 13.8,
        "low": 13.68,
        "close": 13.75,
        "ma5": 13.22,
        "ma10": 12.83
      }
    ],
    "symbol": "00993A.TW",
    "maxVol10d": 15807,
    "hasVolumeBurst": true
  },
  {
    "code": "00918",
    "name": "大華優利高填息30",
    "categories": [],
    "price": 34.17,
    "prevClose": 33.97,
    "open": 34.25,
    "high": 34.43,
    "low": 34.1,
    "volume": 10755,
    "ma5": 33.72,
    "ma10": 33.48,
    "ma20": 32.64,
    "ma60": 31.49,
    "vMa5": 12020,
    "vMa10": 18164,
    "high5d": 34.43,
    "high10d": 34.43,
    "high20d": 34.43,
    "sparkline": [
      32.73,
      32.97,
      33.25,
      33.66,
      33.58,
      33.59,
      33.61,
      33.49,
      33.75,
      34.17
    ],
    "k3d": [
      {
        "open": 33.6,
        "high": 33.64,
        "low": 33.32,
        "close": 33.61,
        "ma5": 33.54,
        "ma10": 32.79
      },
      {
        "open": 33.52,
        "high": 33.55,
        "low": 33.38,
        "close": 33.49,
        "ma5": 33.59,
        "ma10": 32.96
      },
      {
        "open": 34.0,
        "high": 34.1,
        "low": 33.79,
        "close": 33.97,
        "ma5": 33.65,
        "ma10": 33.21
      }
    ],
    "k5d": [
      {
        "open": 33.53,
        "high": 33.68,
        "low": 33.45,
        "close": 33.59,
        "ma5": 33.41,
        "ma10": 32.69
      },
      {
        "open": 33.6,
        "high": 33.64,
        "low": 33.32,
        "close": 33.61,
        "ma5": 33.54,
        "ma10": 32.79
      },
      {
        "open": 33.52,
        "high": 33.55,
        "low": 33.38,
        "close": 33.49,
        "ma5": 33.59,
        "ma10": 32.96
      },
      {
        "open": 33.6,
        "high": 33.84,
        "low": 33.6,
        "close": 33.75,
        "ma5": 33.6,
        "ma10": 33.19
      },
      {
        "open": 34.25,
        "high": 34.43,
        "low": 34.1,
        "close": 34.15,
        "ma5": 33.72,
        "ma10": 33.48
      }
    ],
    "symbol": "00918.TW",
    "maxVol10d": 38034,
    "hasVolumeBurst": false
  },
  {
    "code": "1513",
    "name": "中興電",
    "categories": [
      "MajorBuy"
    ],
    "price": 170.5,
    "prevClose": 171.0,
    "open": 172.5,
    "high": 174.0,
    "low": 168.5,
    "volume": 2792,
    "ma5": 165.4,
    "ma10": 162.05,
    "ma20": 159.1,
    "ma60": 167.43,
    "vMa5": 5609,
    "vMa10": 3877,
    "high5d": 177.0,
    "high10d": 177.0,
    "high20d": 177.0,
    "sparkline": [
      155.5,
      159.0,
      161.0,
      160.5,
      157.5,
      159.5,
      160.5,
      165.5,
      171.0,
      170.5
    ],
    "k3d": [
      {
        "open": 159.5,
        "high": 160.5,
        "low": 157.5,
        "close": 160.5,
        "ma5": 159.8,
        "ma10": 156.35
      },
      {
        "open": 161.5,
        "high": 168.0,
        "low": 161.0,
        "close": 165.5,
        "ma5": 160.7,
        "ma10": 157.95
      },
      {
        "open": 168.5,
        "high": 177.0,
        "low": 166.5,
        "close": 171.0,
        "ma5": 162.8,
        "ma10": 160.35
      }
    ],
    "k5d": [
      {
        "open": 159.5,
        "high": 160.5,
        "low": 158.5,
        "close": 159.5,
        "ma5": 159.5,
        "ma10": 155.55
      },
      {
        "open": 159.5,
        "high": 160.5,
        "low": 157.5,
        "close": 160.5,
        "ma5": 159.8,
        "ma10": 156.35
      },
      {
        "open": 161.5,
        "high": 168.0,
        "low": 161.0,
        "close": 165.5,
        "ma5": 160.7,
        "ma10": 157.95
      },
      {
        "open": 168.5,
        "high": 177.0,
        "low": 166.5,
        "close": 171.0,
        "ma5": 162.8,
        "ma10": 160.35
      },
      {
        "open": 172.5,
        "high": 174.0,
        "low": 168.5,
        "close": 170.5,
        "ma5": 165.4,
        "ma10": 162.05
      }
    ],
    "symbol": "1513.TW",
    "maxVol10d": 14984,
    "hasVolumeBurst": true
  },
  {
    "code": "4763",
    "name": "材料*-KY",
    "categories": [],
    "price": 51.2,
    "prevClose": 51.6,
    "open": 51.6,
    "high": 51.6,
    "low": 50.5,
    "volume": 4303,
    "ma5": 51.4,
    "ma10": 50.33,
    "ma20": 49.66,
    "ma60": 46.76,
    "vMa5": 11066,
    "vMa10": 9996,
    "high5d": 55.0,
    "high10d": 55.0,
    "high20d": 55.0,
    "sparkline": [
      49.85,
      48.45,
      48.45,
      49.65,
      49.9,
      50.0,
      51.6,
      52.6,
      51.6,
      51.2
    ],
    "k3d": [
      {
        "open": 50.0,
        "high": 52.3,
        "low": 49.6,
        "close": 51.6,
        "ma5": 49.92,
        "ma10": 49.08
      },
      {
        "open": 52.1,
        "high": 55.0,
        "low": 51.9,
        "close": 52.6,
        "ma5": 50.75,
        "ma10": 49.63
      },
      {
        "open": 53.0,
        "high": 53.1,
        "low": 51.3,
        "close": 51.6,
        "ma5": 51.14,
        "ma10": 50.03
      }
    ],
    "k5d": [
      {
        "open": 50.2,
        "high": 50.3,
        "low": 49.4,
        "close": 50.0,
        "ma5": 49.29,
        "ma10": 48.68
      },
      {
        "open": 50.0,
        "high": 52.3,
        "low": 49.6,
        "close": 51.6,
        "ma5": 49.92,
        "ma10": 49.08
      },
      {
        "open": 52.1,
        "high": 55.0,
        "low": 51.9,
        "close": 52.6,
        "ma5": 50.75,
        "ma10": 49.63
      },
      {
        "open": 53.0,
        "high": 53.1,
        "low": 51.3,
        "close": 51.6,
        "ma5": 51.14,
        "ma10": 50.03
      },
      {
        "open": 51.6,
        "high": 51.6,
        "low": 50.5,
        "close": 51.2,
        "ma5": 51.4,
        "ma10": 50.33
      }
    ],
    "symbol": "4763.TW",
    "maxVol10d": 20330,
    "hasVolumeBurst": true
  },
  {
    "code": "4510",
    "name": "高鋒",
    "categories": [],
    "price": 46.25,
    "prevClose": 45.7,
    "open": 46.8,
    "high": 47.25,
    "low": 46.1,
    "volume": 4651,
    "ma5": 43.57,
    "ma10": 40.84,
    "ma20": 39.01,
    "ma60": 43.28,
    "vMa5": 3065,
    "vMa10": 1949,
    "high5d": 47.25,
    "high10d": 47.25,
    "high20d": 47.25,
    "sparkline": [
      36.4,
      37.0,
      38.25,
      38.85,
      40.1,
      40.85,
      40.5,
      44.55,
      45.7,
      46.25
    ],
    "k3d": [
      {
        "open": 40.85,
        "high": 41.6,
        "low": 40.35,
        "close": 40.5,
        "ma5": 39.71,
        "ma10": 37.45
      },
      {
        "open": 41.1,
        "high": 44.55,
        "low": 40.8,
        "close": 44.55,
        "ma5": 40.97,
        "ma10": 38.47
      },
      {
        "open": 45.3,
        "high": 46.5,
        "low": 44.9,
        "close": 45.7,
        "ma5": 42.34,
        "ma10": 39.74
      }
    ],
    "k5d": [
      {
        "open": 40.2,
        "high": 42.7,
        "low": 39.95,
        "close": 40.85,
        "ma5": 39.01,
        "ma10": 37.05
      },
      {
        "open": 40.85,
        "high": 41.6,
        "low": 40.35,
        "close": 40.5,
        "ma5": 39.71,
        "ma10": 37.45
      },
      {
        "open": 41.1,
        "high": 44.55,
        "low": 40.8,
        "close": 44.55,
        "ma5": 40.97,
        "ma10": 38.47
      },
      {
        "open": 45.3,
        "high": 46.5,
        "low": 44.9,
        "close": 45.7,
        "ma5": 42.34,
        "ma10": 39.74
      },
      {
        "open": 46.8,
        "high": 47.25,
        "low": 46.1,
        "close": 46.25,
        "ma5": 43.57,
        "ma10": 40.84
      }
    ],
    "symbol": "4510.TWO",
    "maxVol10d": 5129,
    "hasVolumeBurst": true
  },
  {
    "code": "00955",
    "name": "中信日本商社",
    "categories": [],
    "price": 15.63,
    "prevClose": 15.64,
    "open": 15.7,
    "high": 15.74,
    "low": 15.57,
    "volume": 1916,
    "ma5": 15.69,
    "ma10": 15.6,
    "ma20": 15.23,
    "ma60": 14.7,
    "vMa5": 3295,
    "vMa10": 4800,
    "high5d": 15.89,
    "high10d": 15.94,
    "high20d": 15.94,
    "sparkline": [
      15.45,
      15.38,
      15.3,
      15.61,
      15.8,
      15.81,
      15.77,
      15.58,
      15.64,
      15.63
    ],
    "k3d": [
      {
        "open": 15.78,
        "high": 15.82,
        "low": 15.76,
        "close": 15.77,
        "ma5": 15.66,
        "ma10": 15.43
      },
      {
        "open": 15.72,
        "high": 15.73,
        "low": 15.55,
        "close": 15.58,
        "ma5": 15.71,
        "ma10": 15.5
      },
      {
        "open": 15.66,
        "high": 15.67,
        "low": 15.55,
        "close": 15.64,
        "ma5": 15.72,
        "ma10": 15.57
      }
    ],
    "k5d": [
      {
        "open": 15.8,
        "high": 15.89,
        "low": 15.78,
        "close": 15.81,
        "ma5": 15.58,
        "ma10": 15.33
      },
      {
        "open": 15.78,
        "high": 15.82,
        "low": 15.76,
        "close": 15.77,
        "ma5": 15.66,
        "ma10": 15.43
      },
      {
        "open": 15.72,
        "high": 15.73,
        "low": 15.55,
        "close": 15.58,
        "ma5": 15.71,
        "ma10": 15.5
      },
      {
        "open": 15.66,
        "high": 15.67,
        "low": 15.55,
        "close": 15.64,
        "ma5": 15.72,
        "ma10": 15.57
      },
      {
        "open": 15.7,
        "high": 15.74,
        "low": 15.57,
        "close": 15.63,
        "ma5": 15.69,
        "ma10": 15.6
      }
    ],
    "symbol": "00955.TWO",
    "maxVol10d": 9234,
    "hasVolumeBurst": false
  },
  {
    "code": "4147",
    "name": "中裕",
    "categories": [],
    "price": 64.1,
    "prevClose": 65.2,
    "open": 65.2,
    "high": 65.2,
    "low": 63.3,
    "volume": 698,
    "ma5": 64.46,
    "ma10": 61.12,
    "ma20": 59.46,
    "ma60": 59.62,
    "vMa5": 2137,
    "vMa10": 1335,
    "high5d": 69.8,
    "high10d": 69.8,
    "high20d": 69.8,
    "sparkline": [
      56.9,
      57.6,
      59.1,
      58.5,
      56.8,
      61.0,
      63.5,
      68.5,
      65.2,
      64.1
    ],
    "k3d": [
      {
        "open": 60.2,
        "high": 64.5,
        "low": 60.2,
        "close": 63.5,
        "ma5": 59.78,
        "ma10": 58.11
      },
      {
        "open": 63.5,
        "high": 69.8,
        "low": 63.4,
        "close": 68.5,
        "ma5": 61.66,
        "ma10": 59.31
      },
      {
        "open": 66.5,
        "high": 67.8,
        "low": 64.9,
        "close": 65.2,
        "ma5": 63.0,
        "ma10": 60.21
      }
    ],
    "k5d": [
      {
        "open": 58.3,
        "high": 62.1,
        "low": 58.2,
        "close": 61.0,
        "ma5": 58.6,
        "ma10": 57.56
      },
      {
        "open": 60.2,
        "high": 64.5,
        "low": 60.2,
        "close": 63.5,
        "ma5": 59.78,
        "ma10": 58.11
      },
      {
        "open": 63.5,
        "high": 69.8,
        "low": 63.4,
        "close": 68.5,
        "ma5": 61.66,
        "ma10": 59.31
      },
      {
        "open": 66.5,
        "high": 67.8,
        "low": 64.9,
        "close": 65.2,
        "ma5": 63.0,
        "ma10": 60.21
      },
      {
        "open": 65.2,
        "high": 65.2,
        "low": 63.3,
        "close": 64.1,
        "ma5": 64.46,
        "ma10": 61.12
      }
    ],
    "symbol": "4147.TWO",
    "maxVol10d": 5207,
    "hasVolumeBurst": true
  },
  {
    "code": "6187",
    "name": "萬潤",
    "categories": [
      "Top100"
    ],
    "price": 1255.0,
    "prevClose": 1270.0,
    "open": 1275.0,
    "high": 1320.0,
    "low": 1250.0,
    "volume": 3637,
    "ma5": 1164.0,
    "ma10": 1129.0,
    "ma20": 1045.3,
    "ma60": 1071.55,
    "vMa5": 4674,
    "vMa10": 3837,
    "high5d": 1320.0,
    "high10d": 1320.0,
    "high20d": 1320.0,
    "sparkline": [
      1005.0,
      1090.0,
      1070.0,
      1175.0,
      1130.0,
      1090.0,
      1050.0,
      1155.0,
      1270.0,
      1255.0
    ],
    "k3d": [
      {
        "open": 1165.0,
        "high": 1195.0,
        "low": 1035.0,
        "close": 1050.0,
        "ma5": 1103.0,
        "ma10": 1027.4
      },
      {
        "open": 1060.0,
        "high": 1155.0,
        "low": 1055.0,
        "close": 1155.0,
        "ma5": 1120.0,
        "ma10": 1053.9
      },
      {
        "open": 1190.0,
        "high": 1270.0,
        "low": 1185.0,
        "close": 1270.0,
        "ma5": 1139.0,
        "ma10": 1096.4
      }
    ],
    "k5d": [
      {
        "open": 1165.0,
        "high": 1220.0,
        "low": 1080.0,
        "close": 1090.0,
        "ma5": 1111.0,
        "ma10": 1018.6
      },
      {
        "open": 1165.0,
        "high": 1195.0,
        "low": 1035.0,
        "close": 1050.0,
        "ma5": 1103.0,
        "ma10": 1027.4
      },
      {
        "open": 1060.0,
        "high": 1155.0,
        "low": 1055.0,
        "close": 1155.0,
        "ma5": 1120.0,
        "ma10": 1053.9
      },
      {
        "open": 1190.0,
        "high": 1270.0,
        "low": 1185.0,
        "close": 1270.0,
        "ma5": 1139.0,
        "ma10": 1096.4
      },
      {
        "open": 1275.0,
        "high": 1320.0,
        "low": 1250.0,
        "close": 1255.0,
        "ma5": 1164.0,
        "ma10": 1129.0
      }
    ],
    "symbol": "6187.TWO",
    "maxVol10d": 5823,
    "hasVolumeBurst": true
  },
  {
    "code": "3265",
    "name": "台星科",
    "categories": [],
    "price": 170.5,
    "prevClose": 181.0,
    "open": 182.5,
    "high": 183.0,
    "low": 168.0,
    "volume": 2155,
    "ma5": 170.1,
    "ma10": 162.5,
    "ma20": 157.62,
    "ma60": 172.48,
    "vMa5": 2204,
    "vMa10": 1515,
    "high5d": 190.5,
    "high10d": 190.5,
    "high20d": 190.5,
    "sparkline": [
      152.5,
      155.5,
      155.5,
      157.5,
      153.5,
      164.5,
      159.5,
      175.0,
      181.0,
      170.5
    ],
    "k3d": [
      {
        "open": 164.5,
        "high": 164.5,
        "low": 156.5,
        "close": 159.5,
        "ma5": 158.1,
        "ma10": 151.25
      },
      {
        "open": 160.5,
        "high": 175.0,
        "low": 160.5,
        "close": 175.0,
        "ma5": 162.0,
        "ma10": 155.05
      },
      {
        "open": 179.5,
        "high": 190.5,
        "low": 178.5,
        "close": 181.0,
        "ma5": 166.7,
        "ma10": 159.85
      }
    ],
    "k5d": [
      {
        "open": 156.0,
        "high": 168.5,
        "low": 156.0,
        "close": 164.5,
        "ma5": 157.3,
        "ma10": 150.25
      },
      {
        "open": 164.5,
        "high": 164.5,
        "low": 156.5,
        "close": 159.5,
        "ma5": 158.1,
        "ma10": 151.25
      },
      {
        "open": 160.5,
        "high": 175.0,
        "low": 160.5,
        "close": 175.0,
        "ma5": 162.0,
        "ma10": 155.05
      },
      {
        "open": 179.5,
        "high": 190.5,
        "low": 178.5,
        "close": 181.0,
        "ma5": 166.7,
        "ma10": 159.85
      },
      {
        "open": 182.5,
        "high": 183.0,
        "low": 168.0,
        "close": 170.5,
        "ma5": 170.1,
        "ma10": 162.5
      }
    ],
    "symbol": "3265.TWO",
    "maxVol10d": 3489,
    "hasVolumeBurst": true
  },
  {
    "code": "5443",
    "name": "均豪",
    "categories": [],
    "price": 106.0,
    "prevClose": 107.0,
    "open": 108.0,
    "high": 108.0,
    "low": 105.5,
    "volume": 1320,
    "ma5": 107.7,
    "ma10": 100.6,
    "ma20": 96.54,
    "ma60": 106.99,
    "vMa5": 3250,
    "vMa10": 2039,
    "high5d": 115.0,
    "high10d": 115.0,
    "high20d": 115.0,
    "sparkline": [
      90.3,
      92.2,
      94.7,
      95.2,
      95.1,
      104.5,
      107.5,
      113.5,
      107.0,
      106.0
    ],
    "k3d": [
      {
        "open": 105.5,
        "high": 109.5,
        "low": 105.0,
        "close": 107.5,
        "ma5": 99.4,
        "ma10": 92.66
      },
      {
        "open": 108.0,
        "high": 114.5,
        "low": 108.0,
        "close": 113.5,
        "ma5": 103.16,
        "ma10": 95.73
      },
      {
        "open": 114.5,
        "high": 115.0,
        "low": 107.0,
        "close": 107.0,
        "ma5": 105.52,
        "ma10": 98.6
      }
    ],
    "k5d": [
      {
        "open": 104.5,
        "high": 104.5,
        "low": 104.5,
        "close": 104.5,
        "ma5": 96.34,
        "ma10": 90.91
      },
      {
        "open": 105.5,
        "high": 109.5,
        "low": 105.0,
        "close": 107.5,
        "ma5": 99.4,
        "ma10": 92.66
      },
      {
        "open": 108.0,
        "high": 114.5,
        "low": 108.0,
        "close": 113.5,
        "ma5": 103.16,
        "ma10": 95.73
      },
      {
        "open": 114.5,
        "high": 115.0,
        "low": 107.0,
        "close": 107.0,
        "ma5": 105.52,
        "ma10": 98.6
      },
      {
        "open": 108.0,
        "high": 108.0,
        "low": 105.5,
        "close": 106.0,
        "ma5": 107.7,
        "ma10": 100.6
      }
    ],
    "symbol": "5443.TWO",
    "maxVol10d": 5085,
    "hasVolumeBurst": true
  },
  {
    "code": "3357",
    "name": "臺慶科",
    "categories": [],
    "price": 230.5,
    "prevClose": 253.5,
    "open": 249.5,
    "high": 250.0,
    "low": 230.0,
    "volume": 4085,
    "ma5": 230.3,
    "ma10": 218.85,
    "ma20": 210.78,
    "ma60": 262.33,
    "vMa5": 3419,
    "vMa10": 2681,
    "high5d": 253.5,
    "high10d": 253.5,
    "high20d": 253.5,
    "sparkline": [
      204.0,
      206.0,
      210.0,
      210.0,
      207.0,
      218.0,
      219.0,
      230.5,
      253.5,
      230.5
    ],
    "k3d": [
      {
        "open": 214.0,
        "high": 227.0,
        "low": 213.5,
        "close": 219.0,
        "ma5": 212.8,
        "ma10": 202.95
      },
      {
        "open": 218.0,
        "high": 234.0,
        "low": 217.0,
        "close": 230.5,
        "ma5": 216.9,
        "ma10": 207.5
      },
      {
        "open": 230.5,
        "high": 253.5,
        "low": 229.5,
        "close": 253.5,
        "ma5": 225.6,
        "ma10": 215.2
      }
    ],
    "k5d": [
      {
        "open": 211.5,
        "high": 220.5,
        "low": 210.0,
        "close": 218.0,
        "ma5": 210.2,
        "ma10": 200.35
      },
      {
        "open": 214.0,
        "high": 227.0,
        "low": 213.5,
        "close": 219.0,
        "ma5": 212.8,
        "ma10": 202.95
      },
      {
        "open": 218.0,
        "high": 234.0,
        "low": 217.0,
        "close": 230.5,
        "ma5": 216.9,
        "ma10": 207.5
      },
      {
        "open": 230.5,
        "high": 253.5,
        "low": 229.5,
        "close": 253.5,
        "ma5": 225.6,
        "ma10": 215.2
      },
      {
        "open": 249.5,
        "high": 250.0,
        "low": 230.0,
        "close": 230.5,
        "ma5": 230.3,
        "ma10": 218.85
      }
    ],
    "symbol": "3357.TWO",
    "maxVol10d": 4085,
    "hasVolumeBurst": true
  },
  {
    "code": "6538",
    "name": "倉和",
    "categories": [],
    "price": 185.0,
    "prevClose": 177.5,
    "open": 181.5,
    "high": 195.0,
    "low": 177.5,
    "volume": 5040,
    "ma5": 163.3,
    "ma10": 155.15,
    "ma20": 144.03,
    "ma60": 131.72,
    "vMa5": 2794,
    "vMa10": 2819,
    "high5d": 195.0,
    "high10d": 195.0,
    "high20d": 195.0,
    "sparkline": [
      135.0,
      148.5,
      156.5,
      150.0,
      145.0,
      145.5,
      147.0,
      161.5,
      177.5,
      185.0
    ],
    "k3d": [
      {
        "open": 143.5,
        "high": 149.5,
        "low": 140.5,
        "close": 147.0,
        "ma5": 148.8,
        "ma10": 141.6
      },
      {
        "open": 148.5,
        "high": 161.5,
        "low": 147.0,
        "close": 161.5,
        "ma5": 149.8,
        "ma10": 145.55
      },
      {
        "open": 177.5,
        "high": 177.5,
        "low": 174.0,
        "close": 177.5,
        "ma5": 155.3,
        "ma10": 150.45
      }
    ],
    "k5d": [
      {
        "open": 144.5,
        "high": 151.5,
        "low": 143.5,
        "close": 145.5,
        "ma5": 149.1,
        "ma10": 138.65
      },
      {
        "open": 143.5,
        "high": 149.5,
        "low": 140.5,
        "close": 147.0,
        "ma5": 148.8,
        "ma10": 141.6
      },
      {
        "open": 148.5,
        "high": 161.5,
        "low": 147.0,
        "close": 161.5,
        "ma5": 149.8,
        "ma10": 145.55
      },
      {
        "open": 177.5,
        "high": 177.5,
        "low": 174.0,
        "close": 177.5,
        "ma5": 155.3,
        "ma10": 150.45
      },
      {
        "open": 181.5,
        "high": 195.0,
        "low": 177.5,
        "close": 185.0,
        "ma5": 163.3,
        "ma10": 155.15
      }
    ],
    "symbol": "6538.TWO",
    "maxVol10d": 6417,
    "hasVolumeBurst": true
  },
  {
    "code": "8071",
    "name": "能率網通",
    "categories": [],
    "price": 24.45,
    "prevClose": 25.15,
    "open": 25.15,
    "high": 25.15,
    "low": 24.1,
    "volume": 678,
    "ma5": 24.3,
    "ma10": 23.63,
    "ma20": 23.07,
    "ma60": 25.29,
    "vMa5": 1224,
    "vMa10": 1203,
    "high5d": 26.0,
    "high10d": 26.0,
    "high20d": 27.9,
    "sparkline": [
      22.25,
      22.5,
      23.8,
      23.15,
      23.15,
      23.1,
      23.25,
      25.55,
      25.15,
      24.45
    ],
    "k3d": [
      {
        "open": 23.1,
        "high": 23.5,
        "low": 22.85,
        "close": 23.25,
        "ma5": 23.29,
        "ma10": 22.18
      },
      {
        "open": 23.25,
        "high": 25.55,
        "low": 23.25,
        "close": 25.55,
        "ma5": 23.64,
        "ma10": 22.73
      },
      {
        "open": 25.8,
        "high": 26.0,
        "low": 24.9,
        "close": 25.15,
        "ma5": 24.04,
        "ma10": 23.28
      }
    ],
    "k5d": [
      {
        "open": 23.3,
        "high": 23.8,
        "low": 23.0,
        "close": 23.1,
        "ma5": 23.14,
        "ma10": 21.98
      },
      {
        "open": 23.1,
        "high": 23.5,
        "low": 22.85,
        "close": 23.25,
        "ma5": 23.29,
        "ma10": 22.18
      },
      {
        "open": 23.25,
        "high": 25.55,
        "low": 23.25,
        "close": 25.55,
        "ma5": 23.64,
        "ma10": 22.73
      },
      {
        "open": 25.8,
        "high": 26.0,
        "low": 24.9,
        "close": 25.15,
        "ma5": 24.04,
        "ma10": 23.28
      },
      {
        "open": 25.15,
        "high": 25.15,
        "low": 24.1,
        "close": 24.45,
        "ma5": 24.3,
        "ma10": 23.63
      }
    ],
    "symbol": "8071.TWO",
    "maxVol10d": 2711,
    "hasVolumeBurst": true
  },
  {
    "code": "6588",
    "name": "東典光電",
    "categories": [],
    "price": 93.8,
    "prevClose": 93.7,
    "open": 93.9,
    "high": 94.9,
    "low": 92.2,
    "volume": 498,
    "ma5": 92.68,
    "ma10": 92.34,
    "ma20": 86.74,
    "ma60": 95.03,
    "vMa5": 1332,
    "vMa10": 2035,
    "high5d": 100.5,
    "high10d": 103.5,
    "high20d": 103.5,
    "sparkline": [
      86.8,
      95.4,
      94.0,
      94.0,
      89.8,
      90.5,
      88.3,
      97.1,
      93.7,
      93.8
    ],
    "k3d": [
      {
        "open": 89.5,
        "high": 90.5,
        "low": 85.6,
        "close": 88.3,
        "ma5": 91.32,
        "ma10": 89.88
      },
      {
        "open": 87.8,
        "high": 97.1,
        "low": 87.8,
        "close": 97.1,
        "ma5": 91.94,
        "ma10": 90.6
      },
      {
        "open": 99.1,
        "high": 100.5,
        "low": 93.4,
        "close": 93.7,
        "ma5": 91.88,
        "ma10": 91.87
      }
    ],
    "k5d": [
      {
        "open": 91.5,
        "high": 95.0,
        "low": 89.8,
        "close": 90.5,
        "ma5": 92.74,
        "ma10": 90.35
      },
      {
        "open": 89.5,
        "high": 90.5,
        "low": 85.6,
        "close": 88.3,
        "ma5": 91.32,
        "ma10": 89.88
      },
      {
        "open": 87.8,
        "high": 97.1,
        "low": 87.8,
        "close": 97.1,
        "ma5": 91.94,
        "ma10": 90.6
      },
      {
        "open": 99.1,
        "high": 100.5,
        "low": 93.4,
        "close": 93.7,
        "ma5": 91.88,
        "ma10": 91.87
      },
      {
        "open": 93.9,
        "high": 94.9,
        "low": 92.2,
        "close": 93.8,
        "ma5": 92.68,
        "ma10": 92.34
      }
    ],
    "symbol": "6588.TWO",
    "maxVol10d": 3951,
    "hasVolumeBurst": false
  },
  {
    "code": "5498",
    "name": "凱崴",
    "categories": [],
    "price": 52.3,
    "prevClose": 53.3,
    "open": 53.7,
    "high": 53.7,
    "low": 51.9,
    "volume": 979,
    "ma5": 52.5,
    "ma10": 50.01,
    "ma20": 47.53,
    "ma60": 57.49,
    "vMa5": 2681,
    "vMa10": 2263,
    "high5d": 56.2,
    "high10d": 56.2,
    "high20d": 56.2,
    "sparkline": [
      44.5,
      46.9,
      47.65,
      50.1,
      48.5,
      50.6,
      51.1,
      55.2,
      53.3,
      52.3
    ],
    "k3d": [
      {
        "open": 50.6,
        "high": 53.2,
        "low": 50.5,
        "close": 51.1,
        "ma5": 49.59,
        "ma10": 46.05
      },
      {
        "open": 50.9,
        "high": 56.0,
        "low": 50.9,
        "close": 55.2,
        "ma5": 51.1,
        "ma10": 47.47
      },
      {
        "open": 55.9,
        "high": 56.2,
        "low": 53.0,
        "close": 53.3,
        "ma5": 51.74,
        "ma10": 48.98
      }
    ],
    "k5d": [
      {
        "open": 49.5,
        "high": 51.2,
        "low": 48.65,
        "close": 50.6,
        "ma5": 48.75,
        "ma10": 45.28
      },
      {
        "open": 50.6,
        "high": 53.2,
        "low": 50.5,
        "close": 51.1,
        "ma5": 49.59,
        "ma10": 46.05
      },
      {
        "open": 50.9,
        "high": 56.0,
        "low": 50.9,
        "close": 55.2,
        "ma5": 51.1,
        "ma10": 47.47
      },
      {
        "open": 55.9,
        "high": 56.2,
        "low": 53.0,
        "close": 53.3,
        "ma5": 51.74,
        "ma10": 48.98
      },
      {
        "open": 53.7,
        "high": 53.7,
        "low": 51.9,
        "close": 52.3,
        "ma5": 52.5,
        "ma10": 50.01
      }
    ],
    "symbol": "5498.TWO",
    "maxVol10d": 4028,
    "hasVolumeBurst": true
  },
  {
    "code": "3360",
    "name": "尚立",
    "categories": [],
    "price": 16.6,
    "prevClose": 17.1,
    "open": 17.45,
    "high": 17.45,
    "low": 16.35,
    "volume": 781,
    "ma5": 16.66,
    "ma10": 16.41,
    "ma20": 16.7,
    "ma60": 17.26,
    "vMa5": 1208,
    "vMa10": 964,
    "high5d": 17.75,
    "high10d": 17.75,
    "high20d": 23.5,
    "sparkline": [
      15.9,
      16.5,
      16.3,
      16.1,
      16.05,
      16.25,
      15.9,
      17.45,
      17.1,
      16.6
    ],
    "k3d": [
      {
        "open": 16.0,
        "high": 16.5,
        "low": 15.9,
        "close": 15.9,
        "ma5": 16.12,
        "ma10": 15.86
      },
      {
        "open": 16.0,
        "high": 17.45,
        "low": 16.0,
        "close": 17.45,
        "ma5": 16.35,
        "ma10": 16.1
      },
      {
        "open": 17.45,
        "high": 17.75,
        "low": 16.95,
        "close": 17.1,
        "ma5": 16.55,
        "ma10": 16.32
      }
    ],
    "k5d": [
      {
        "open": 16.2,
        "high": 16.6,
        "low": 16.2,
        "close": 16.25,
        "ma5": 16.24,
        "ma10": 15.85
      },
      {
        "open": 16.0,
        "high": 16.5,
        "low": 15.9,
        "close": 15.9,
        "ma5": 16.12,
        "ma10": 15.86
      },
      {
        "open": 16.0,
        "high": 17.45,
        "low": 16.0,
        "close": 17.45,
        "ma5": 16.35,
        "ma10": 16.1
      },
      {
        "open": 17.45,
        "high": 17.75,
        "low": 16.95,
        "close": 17.1,
        "ma5": 16.55,
        "ma10": 16.32
      },
      {
        "open": 17.45,
        "high": 17.45,
        "low": 16.35,
        "close": 16.6,
        "ma5": 16.66,
        "ma10": 16.41
      }
    ],
    "symbol": "3360.TWO",
    "maxVol10d": 2502,
    "hasVolumeBurst": true
  },
  {
    "code": "3455",
    "name": "由田",
    "categories": [],
    "price": 231.5,
    "prevClose": 225.0,
    "open": 227.5,
    "high": 236.5,
    "low": 222.0,
    "volume": 1998,
    "ma5": 217.2,
    "ma10": 200.15,
    "ma20": 189.72,
    "ma60": 221.4,
    "vMa5": 1542,
    "vMa10": 1221,
    "high5d": 236.5,
    "high10d": 236.5,
    "high20d": 236.5,
    "sparkline": [
      167.5,
      182.5,
      186.0,
      189.5,
      190.0,
      205.5,
      202.0,
      222.0,
      225.0,
      231.5
    ],
    "k3d": [
      {
        "open": 202.0,
        "high": 203.0,
        "low": 192.5,
        "close": 202.0,
        "ma5": 194.6,
        "ma10": 178.8
      },
      {
        "open": 202.0,
        "high": 222.0,
        "low": 201.5,
        "close": 222.0,
        "ma5": 201.8,
        "ma10": 185.8
      },
      {
        "open": 222.0,
        "high": 231.5,
        "low": 217.0,
        "close": 225.0,
        "ma5": 208.9,
        "ma10": 193.25
      }
    ],
    "k5d": [
      {
        "open": 193.0,
        "high": 208.5,
        "low": 192.0,
        "close": 205.5,
        "ma5": 190.7,
        "ma10": 175.45
      },
      {
        "open": 202.0,
        "high": 203.0,
        "low": 192.5,
        "close": 202.0,
        "ma5": 194.6,
        "ma10": 178.8
      },
      {
        "open": 202.0,
        "high": 222.0,
        "low": 201.5,
        "close": 222.0,
        "ma5": 201.8,
        "ma10": 185.8
      },
      {
        "open": 222.0,
        "high": 231.5,
        "low": 217.0,
        "close": 225.0,
        "ma5": 208.9,
        "ma10": 193.25
      },
      {
        "open": 227.5,
        "high": 236.5,
        "low": 222.0,
        "close": 231.5,
        "ma5": 217.2,
        "ma10": 200.15
      }
    ],
    "symbol": "3455.TWO",
    "maxVol10d": 2486,
    "hasVolumeBurst": true
  },
  {
    "code": "6207",
    "name": "雷科",
    "categories": [],
    "price": 106.5,
    "prevClose": 111.0,
    "open": 111.0,
    "high": 111.5,
    "low": 106.5,
    "volume": 2171,
    "ma5": 108.6,
    "ma10": 105.09,
    "ma20": 106.75,
    "ma60": 126.86,
    "vMa5": 4300,
    "vMa10": 4253,
    "high5d": 117.0,
    "high10d": 117.0,
    "high20d": 154.0,
    "sparkline": [
      96.5,
      103.0,
      104.5,
      104.0,
      99.9,
      107.0,
      107.0,
      111.5,
      111.0,
      106.5
    ],
    "k3d": [
      {
        "open": 106.0,
        "high": 110.5,
        "low": 104.0,
        "close": 107.0,
        "ma5": 104.48,
        "ma10": 99.76
      },
      {
        "open": 107.5,
        "high": 114.5,
        "low": 107.0,
        "close": 111.5,
        "ma5": 105.88,
        "ma10": 101.49
      },
      {
        "open": 113.0,
        "high": 117.0,
        "low": 110.5,
        "close": 111.0,
        "ma5": 107.28,
        "ma10": 103.91
      }
    ],
    "k5d": [
      {
        "open": 103.0,
        "high": 109.5,
        "low": 102.5,
        "close": 107.0,
        "ma5": 103.68,
        "ma10": 99.06
      },
      {
        "open": 106.0,
        "high": 110.5,
        "low": 104.0,
        "close": 107.0,
        "ma5": 104.48,
        "ma10": 99.76
      },
      {
        "open": 107.5,
        "high": 114.5,
        "low": 107.0,
        "close": 111.5,
        "ma5": 105.88,
        "ma10": 101.49
      },
      {
        "open": 113.0,
        "high": 117.0,
        "low": 110.5,
        "close": 111.0,
        "ma5": 107.28,
        "ma10": 103.91
      },
      {
        "open": 111.0,
        "high": 111.5,
        "low": 106.5,
        "close": 106.5,
        "ma5": 108.6,
        "ma10": 105.09
      }
    ],
    "symbol": "6207.TWO",
    "maxVol10d": 6033,
    "hasVolumeBurst": false
  },
  {
    "code": "3498",
    "name": "陽程",
    "categories": [],
    "price": 158.0,
    "prevClose": 144.0,
    "open": 154.0,
    "high": 158.0,
    "low": 154.0,
    "volume": 5730,
    "ma5": 136.5,
    "ma10": 122.55,
    "ma20": 112.74,
    "ma60": 123.45,
    "vMa5": 2824,
    "vMa10": 2159,
    "high5d": 158.0,
    "high10d": 158.0,
    "high20d": 158.0,
    "sparkline": [
      99.0,
      103.5,
      113.0,
      111.0,
      116.5,
      125.0,
      124.5,
      131.0,
      144.0,
      158.0
    ],
    "k3d": [
      {
        "open": 130.0,
        "high": 131.0,
        "low": 121.5,
        "close": 124.5,
        "ma5": 118.0,
        "ma10": 106.21
      },
      {
        "open": 126.0,
        "high": 133.0,
        "low": 124.5,
        "close": 131.0,
        "ma5": 121.6,
        "ma10": 109.98
      },
      {
        "open": 144.0,
        "high": 144.0,
        "low": 144.0,
        "close": 144.0,
        "ma5": 128.2,
        "ma10": 115.75
      }
    ],
    "k5d": [
      {
        "open": 118.5,
        "high": 127.0,
        "low": 118.0,
        "close": 125.0,
        "ma5": 113.8,
        "ma10": 103.68
      },
      {
        "open": 130.0,
        "high": 131.0,
        "low": 121.5,
        "close": 124.5,
        "ma5": 118.0,
        "ma10": 106.21
      },
      {
        "open": 126.0,
        "high": 133.0,
        "low": 124.5,
        "close": 131.0,
        "ma5": 121.6,
        "ma10": 109.98
      },
      {
        "open": 144.0,
        "high": 144.0,
        "low": 144.0,
        "close": 144.0,
        "ma5": 128.2,
        "ma10": 115.75
      },
      {
        "open": 154.0,
        "high": 158.0,
        "low": 154.0,
        "close": 158.0,
        "ma5": 136.5,
        "ma10": 122.55
      }
    ],
    "symbol": "3498.TWO",
    "maxVol10d": 5730,
    "hasVolumeBurst": true
  },
  {
    "code": "5314",
    "name": "世紀*",
    "categories": [],
    "price": 16.2,
    "prevClose": 14.75,
    "open": 16.2,
    "high": 16.2,
    "low": 16.2,
    "volume": 329,
    "ma5": 15.13,
    "ma10": 14.49,
    "ma20": 13.85,
    "ma60": 14.66,
    "vMa5": 10473,
    "vMa10": 11227,
    "high5d": 16.2,
    "high10d": 16.2,
    "high20d": 16.2,
    "sparkline": [
      13.25,
      13.57,
      13.66,
      14.31,
      14.43,
      14.99,
      14.7,
      15.03,
      14.75,
      16.2
    ],
    "k3d": [
      {
        "open": 61.9,
        "high": 62.5,
        "low": 60.7,
        "close": 61.1,
        "ma5": 59.94,
        "ma10": 56.06
      },
      {
        "open": 61.1,
        "high": 62.8,
        "low": 60.8,
        "close": 62.5,
        "ma5": 61.08,
        "ma10": 57.28
      },
      {
        "open": 62.5,
        "high": 63.4,
        "low": 61.3,
        "close": 61.3,
        "ma5": 61.44,
        "ma10": 58.69
      }
    ],
    "k5d": [
      {
        "open": 14.67,
        "high": 14.99,
        "low": 14.43,
        "close": 14.99,
        "ma5": 14.19,
        "ma10": 13.29
      },
      {
        "open": 14.89,
        "high": 15.03,
        "low": 14.6,
        "close": 14.7,
        "ma5": 14.42,
        "ma10": 13.49
      },
      {
        "open": 14.7,
        "high": 15.11,
        "low": 14.63,
        "close": 15.03,
        "ma5": 14.69,
        "ma10": 13.78
      },
      {
        "open": 15.03,
        "high": 15.25,
        "low": 14.75,
        "close": 14.75,
        "ma5": 14.78,
        "ma10": 14.12
      },
      {
        "open": 16.2,
        "high": 16.2,
        "low": 16.2,
        "close": 16.2,
        "ma5": 15.13,
        "ma10": 14.49
      }
    ],
    "symbol": "5314.TWO",
    "maxVol10d": 16488,
    "hasVolumeBurst": false
  },
  {
    "code": "6026",
    "name": "福邦證",
    "categories": [],
    "price": 14.65,
    "prevClose": 14.5,
    "open": 14.6,
    "high": 14.9,
    "low": 14.6,
    "volume": 808,
    "ma5": 14.33,
    "ma10": 14.17,
    "ma20": 14.12,
    "ma60": 15.71,
    "vMa5": 1127,
    "vMa10": 1018,
    "high5d": 14.9,
    "high10d": 14.9,
    "high20d": 15.0,
    "sparkline": [
      14.0,
      13.95,
      14.15,
      13.9,
      14.1,
      13.9,
      13.95,
      14.65,
      14.5,
      14.65
    ],
    "k3d": [
      {
        "open": 13.9,
        "high": 13.95,
        "low": 13.8,
        "close": 13.95,
        "ma5": 14.0,
        "ma10": 13.88
      },
      {
        "open": 14.25,
        "high": 14.7,
        "low": 14.25,
        "close": 14.65,
        "ma5": 14.1,
        "ma10": 14.0
      },
      {
        "open": 14.75,
        "high": 14.9,
        "low": 14.45,
        "close": 14.5,
        "ma5": 14.22,
        "ma10": 14.12
      }
    ],
    "k5d": [
      {
        "open": 14.1,
        "high": 14.1,
        "low": 13.9,
        "close": 13.9,
        "ma5": 14.0,
        "ma10": 13.86
      },
      {
        "open": 13.9,
        "high": 13.95,
        "low": 13.8,
        "close": 13.95,
        "ma5": 14.0,
        "ma10": 13.88
      },
      {
        "open": 14.25,
        "high": 14.7,
        "low": 14.25,
        "close": 14.65,
        "ma5": 14.1,
        "ma10": 14.0
      },
      {
        "open": 14.75,
        "high": 14.9,
        "low": 14.45,
        "close": 14.5,
        "ma5": 14.22,
        "ma10": 14.12
      },
      {
        "open": 14.6,
        "high": 14.9,
        "low": 14.6,
        "close": 14.65,
        "ma5": 14.33,
        "ma10": 14.17
      }
    ],
    "symbol": "6026.TWO",
    "maxVol10d": 1947,
    "hasVolumeBurst": true
  },
  {
    "code": "6015",
    "name": "宏遠證",
    "categories": [],
    "price": 16.5,
    "prevClose": 15.95,
    "open": 16.2,
    "high": 16.85,
    "low": 16.0,
    "volume": 2349,
    "ma5": 15.71,
    "ma10": 15.64,
    "ma20": 15.71,
    "ma60": 17.45,
    "vMa5": 2258,
    "vMa10": 1790,
    "high5d": 16.85,
    "high10d": 16.85,
    "high20d": 17.75,
    "sparkline": [
      15.55,
      15.55,
      15.95,
      15.5,
      15.3,
      14.95,
      15.1,
      16.05,
      15.95,
      16.5
    ],
    "k3d": [
      {
        "open": 14.9,
        "high": 15.15,
        "low": 14.55,
        "close": 15.1,
        "ma5": 15.36,
        "ma10": 15.28
      },
      {
        "open": 15.25,
        "high": 16.2,
        "low": 15.25,
        "close": 16.05,
        "ma5": 15.38,
        "ma10": 15.41
      },
      {
        "open": 16.3,
        "high": 16.55,
        "low": 15.85,
        "close": 15.95,
        "ma5": 15.47,
        "ma10": 15.55
      }
    ],
    "k5d": [
      {
        "open": 15.05,
        "high": 15.15,
        "low": 14.7,
        "close": 14.95,
        "ma5": 15.45,
        "ma10": 15.29
      },
      {
        "open": 14.9,
        "high": 15.15,
        "low": 14.55,
        "close": 15.1,
        "ma5": 15.36,
        "ma10": 15.28
      },
      {
        "open": 15.25,
        "high": 16.2,
        "low": 15.25,
        "close": 16.05,
        "ma5": 15.38,
        "ma10": 15.41
      },
      {
        "open": 16.3,
        "high": 16.55,
        "low": 15.85,
        "close": 15.95,
        "ma5": 15.47,
        "ma10": 15.55
      },
      {
        "open": 16.2,
        "high": 16.85,
        "low": 16.0,
        "close": 16.5,
        "ma5": 15.71,
        "ma10": 15.64
      }
    ],
    "symbol": "6015.TWO",
    "maxVol10d": 2625,
    "hasVolumeBurst": true
  },
  {
    "code": "00877",
    "name": "復華中國5G",
    "categories": [],
    "price": 38.69,
    "prevClose": 39.07,
    "open": 38.75,
    "high": 38.96,
    "low": 38.23,
    "volume": 1877,
    "ma5": 37.96,
    "ma10": 37.21,
    "ma20": 36.97,
    "ma60": 41.88,
    "vMa5": 4076,
    "vMa10": 4262,
    "high5d": 39.44,
    "high10d": 39.44,
    "high20d": 43.8,
    "sparkline": [
      33.74,
      35.93,
      37.12,
      36.87,
      38.66,
      36.72,
      37.42,
      37.9,
      39.07,
      38.69
    ],
    "k3d": [
      {
        "open": 37.17,
        "high": 37.92,
        "low": 36.5,
        "close": 37.42,
        "ma5": 37.36,
        "ma10": 35.81
      },
      {
        "open": 37.42,
        "high": 38.55,
        "low": 37.31,
        "close": 37.9,
        "ma5": 37.51,
        "ma10": 36.14
      },
      {
        "open": 38.51,
        "high": 39.44,
        "low": 38.39,
        "close": 39.07,
        "ma5": 37.95,
        "ma10": 36.79
      }
    ],
    "k5d": [
      {
        "open": 38.85,
        "high": 38.95,
        "low": 36.65,
        "close": 36.72,
        "ma5": 37.06,
        "ma10": 35.62
      },
      {
        "open": 37.17,
        "high": 37.92,
        "low": 36.5,
        "close": 37.42,
        "ma5": 37.36,
        "ma10": 35.81
      },
      {
        "open": 37.42,
        "high": 38.55,
        "low": 37.31,
        "close": 37.9,
        "ma5": 37.51,
        "ma10": 36.14
      },
      {
        "open": 38.51,
        "high": 39.44,
        "low": 38.39,
        "close": 39.07,
        "ma5": 37.95,
        "ma10": 36.79
      },
      {
        "open": 38.75,
        "high": 38.96,
        "low": 38.23,
        "close": 38.69,
        "ma5": 37.96,
        "ma10": 37.21
      }
    ],
    "symbol": "00877.TWO",
    "maxVol10d": 8466,
    "hasVolumeBurst": true
  },
  {
    "code": "6190",
    "name": "萬泰科",
    "categories": [],
    "price": 67.3,
    "prevClose": 68.2,
    "open": 69.1,
    "high": 69.1,
    "low": 66.9,
    "volume": 713,
    "ma5": 68.38,
    "ma10": 67.54,
    "ma20": 67.22,
    "ma60": 76.68,
    "vMa5": 1178,
    "vMa10": 1205,
    "high5d": 70.4,
    "high10d": 70.4,
    "high20d": 76.8,
    "sparkline": [
      64.8,
      67.0,
      67.9,
      68.0,
      65.8,
      68.8,
      68.8,
      68.8,
      68.2,
      67.3
    ],
    "k3d": [
      {
        "open": 69.0,
        "high": 69.9,
        "low": 67.8,
        "close": 68.8,
        "ma5": 67.86,
        "ma10": 65.03
      },
      {
        "open": 69.9,
        "high": 70.4,
        "low": 68.4,
        "close": 68.8,
        "ma5": 68.04,
        "ma10": 65.89
      },
      {
        "open": 70.0,
        "high": 70.4,
        "low": 68.1,
        "close": 68.2,
        "ma5": 68.08,
        "ma10": 66.99
      }
    ],
    "k5d": [
      {
        "open": 68.4,
        "high": 69.5,
        "low": 67.6,
        "close": 68.8,
        "ma5": 67.5,
        "ma10": 64.63
      },
      {
        "open": 69.0,
        "high": 69.9,
        "low": 67.8,
        "close": 68.8,
        "ma5": 67.86,
        "ma10": 65.03
      },
      {
        "open": 69.9,
        "high": 70.4,
        "low": 68.4,
        "close": 68.8,
        "ma5": 68.04,
        "ma10": 65.89
      },
      {
        "open": 70.0,
        "high": 70.4,
        "low": 68.1,
        "close": 68.2,
        "ma5": 68.08,
        "ma10": 66.99
      },
      {
        "open": 69.1,
        "high": 69.1,
        "low": 66.9,
        "close": 67.3,
        "ma5": 68.38,
        "ma10": 67.54
      }
    ],
    "symbol": "6190.TWO",
    "maxVol10d": 1538,
    "hasVolumeBurst": false
  },
  {
    "code": "8182",
    "name": "加高",
    "categories": [],
    "price": 40.35,
    "prevClose": 42.3,
    "open": 42.6,
    "high": 42.6,
    "low": 40.05,
    "volume": 660,
    "ma5": 40.83,
    "ma10": 39.81,
    "ma20": 39.08,
    "ma60": 45.74,
    "vMa5": 1538,
    "vMa10": 1692,
    "high5d": 44.8,
    "high10d": 44.8,
    "high20d": 48.95,
    "sparkline": [
      37.3,
      38.8,
      39.9,
      39.4,
      38.55,
      40.0,
      39.75,
      41.75,
      42.3,
      40.35
    ],
    "k3d": [
      {
        "open": 40.0,
        "high": 41.35,
        "low": 39.4,
        "close": 39.75,
        "ma5": 39.52,
        "ma10": 37.91
      },
      {
        "open": 39.75,
        "high": 42.2,
        "low": 39.75,
        "close": 41.75,
        "ma5": 39.89,
        "ma10": 38.59
      },
      {
        "open": 41.9,
        "high": 44.8,
        "low": 41.9,
        "close": 42.3,
        "ma5": 40.47,
        "ma10": 39.42
      }
    ],
    "k5d": [
      {
        "open": 39.95,
        "high": 41.3,
        "low": 39.2,
        "close": 40.0,
        "ma5": 39.33,
        "ma10": 37.65
      },
      {
        "open": 40.0,
        "high": 41.35,
        "low": 39.4,
        "close": 39.75,
        "ma5": 39.52,
        "ma10": 37.91
      },
      {
        "open": 39.75,
        "high": 42.2,
        "low": 39.75,
        "close": 41.75,
        "ma5": 39.89,
        "ma10": 38.59
      },
      {
        "open": 41.9,
        "high": 44.8,
        "low": 41.9,
        "close": 42.3,
        "ma5": 40.47,
        "ma10": 39.42
      },
      {
        "open": 42.6,
        "high": 42.6,
        "low": 40.05,
        "close": 40.35,
        "ma5": 40.83,
        "ma10": 39.81
      }
    ],
    "symbol": "8182.TWO",
    "maxVol10d": 4125,
    "hasVolumeBurst": true
  },
  {
    "code": "6530",
    "name": "創威",
    "categories": [],
    "price": 83.6,
    "prevClose": 85.8,
    "open": 87.2,
    "high": 87.9,
    "low": 83.3,
    "volume": 1057,
    "ma5": 83.94,
    "ma10": 79.87,
    "ma20": 74.6,
    "ma60": 88.1,
    "vMa5": 1806,
    "vMa10": 1369,
    "high5d": 90.4,
    "high10d": 90.4,
    "high20d": 90.4,
    "sparkline": [
      69.9,
      74.7,
      82.1,
      77.3,
      75.0,
      82.5,
      80.3,
      87.5,
      85.8,
      83.6
    ],
    "k3d": [
      {
        "open": 81.0,
        "high": 84.3,
        "low": 80.1,
        "close": 80.3,
        "ma5": 79.44,
        "ma10": 73.56
      },
      {
        "open": 80.4,
        "high": 88.1,
        "low": 80.4,
        "close": 87.5,
        "ma5": 80.52,
        "ma10": 75.84
      },
      {
        "open": 88.5,
        "high": 90.4,
        "low": 85.2,
        "close": 85.8,
        "ma5": 82.22,
        "ma10": 78.27
      }
    ],
    "k5d": [
      {
        "open": 78.0,
        "high": 82.5,
        "low": 77.5,
        "close": 82.5,
        "ma5": 78.32,
        "ma10": 72.42
      },
      {
        "open": 81.0,
        "high": 84.3,
        "low": 80.1,
        "close": 80.3,
        "ma5": 79.44,
        "ma10": 73.56
      },
      {
        "open": 80.4,
        "high": 88.1,
        "low": 80.4,
        "close": 87.5,
        "ma5": 80.52,
        "ma10": 75.84
      },
      {
        "open": 88.5,
        "high": 90.4,
        "low": 85.2,
        "close": 85.8,
        "ma5": 82.22,
        "ma10": 78.27
      },
      {
        "open": 87.2,
        "high": 87.9,
        "low": 83.3,
        "close": 83.6,
        "ma5": 83.94,
        "ma10": 79.87
      }
    ],
    "symbol": "6530.TWO",
    "maxVol10d": 2778,
    "hasVolumeBurst": true
  },
  {
    "code": "6548",
    "name": "長科*",
    "categories": [],
    "price": 74.0,
    "prevClose": 74.5,
    "open": 75.5,
    "high": 75.5,
    "low": 73.1,
    "volume": 1218,
    "ma5": 74.82,
    "ma10": 73.93,
    "ma20": 70.0,
    "ma60": 78.19,
    "vMa5": 2021,
    "vMa10": 3498,
    "high5d": 77.5,
    "high10d": 79.2,
    "high20d": 79.6,
    "sparkline": [
      70.2,
      74.0,
      74.4,
      74.2,
      72.4,
      75.7,
      74.6,
      75.3,
      74.5,
      74.0
    ],
    "k3d": [
      {
        "open": 75.1,
        "high": 76.7,
        "low": 74.2,
        "close": 74.6,
        "ma5": 74.26,
        "ma10": 69.92
      },
      {
        "open": 74.7,
        "high": 76.3,
        "low": 74.7,
        "close": 75.3,
        "ma5": 74.44,
        "ma10": 71.49
      },
      {
        "open": 76.1,
        "high": 76.7,
        "low": 74.3,
        "close": 74.5,
        "ma5": 74.5,
        "ma10": 73.03
      }
    ],
    "k5d": [
      {
        "open": 75.0,
        "high": 77.5,
        "low": 73.6,
        "close": 75.7,
        "ma5": 74.14,
        "ma10": 68.66
      },
      {
        "open": 75.1,
        "high": 76.7,
        "low": 74.2,
        "close": 74.6,
        "ma5": 74.26,
        "ma10": 69.92
      },
      {
        "open": 74.7,
        "high": 76.3,
        "low": 74.7,
        "close": 75.3,
        "ma5": 74.44,
        "ma10": 71.49
      },
      {
        "open": 76.1,
        "high": 76.7,
        "low": 74.3,
        "close": 74.5,
        "ma5": 74.5,
        "ma10": 73.03
      },
      {
        "open": 75.5,
        "high": 75.5,
        "low": 73.1,
        "close": 74.0,
        "ma5": 74.82,
        "ma10": 73.93
      }
    ],
    "symbol": "6548.TWO",
    "maxVol10d": 7383,
    "hasVolumeBurst": false
  },
  {
    "code": "3221",
    "name": "台嘉碩",
    "categories": [],
    "price": 47.8,
    "prevClose": 49.35,
    "open": 50.0,
    "high": 50.1,
    "low": 47.5,
    "volume": 1519,
    "ma5": 48.52,
    "ma10": 47.62,
    "ma20": 46.67,
    "ma60": 54.43,
    "vMa5": 2594,
    "vMa10": 3237,
    "high5d": 52.0,
    "high10d": 52.0,
    "high20d": 57.5,
    "sparkline": [
      45.45,
      47.0,
      47.65,
      47.3,
      46.15,
      48.2,
      48.25,
      49.0,
      49.35,
      47.8
    ],
    "k3d": [
      {
        "open": 48.5,
        "high": 50.2,
        "low": 48.0,
        "close": 48.25,
        "ma5": 47.51,
        "ma10": 45.7
      },
      {
        "open": 48.1,
        "high": 49.6,
        "low": 47.95,
        "close": 49.0,
        "ma5": 47.78,
        "ma10": 46.34
      },
      {
        "open": 49.3,
        "high": 52.0,
        "low": 49.3,
        "close": 49.35,
        "ma5": 48.19,
        "ma10": 47.26
      }
    ],
    "k5d": [
      {
        "open": 48.5,
        "high": 49.6,
        "low": 47.45,
        "close": 48.2,
        "ma5": 47.26,
        "ma10": 45.47
      },
      {
        "open": 48.5,
        "high": 50.2,
        "low": 48.0,
        "close": 48.25,
        "ma5": 47.51,
        "ma10": 45.7
      },
      {
        "open": 48.1,
        "high": 49.6,
        "low": 47.95,
        "close": 49.0,
        "ma5": 47.78,
        "ma10": 46.34
      },
      {
        "open": 49.3,
        "high": 52.0,
        "low": 49.3,
        "close": 49.35,
        "ma5": 48.19,
        "ma10": 47.26
      },
      {
        "open": 50.0,
        "high": 50.1,
        "low": 47.5,
        "close": 47.8,
        "ma5": 48.52,
        "ma10": 47.62
      }
    ],
    "symbol": "3221.TWO",
    "maxVol10d": 8018,
    "hasVolumeBurst": true
  },
  {
    "code": "4561",
    "name": "健椿",
    "categories": [],
    "price": 45.65,
    "prevClose": 45.65,
    "open": 45.9,
    "high": 46.7,
    "low": 45.35,
    "volume": 302,
    "ma5": 44.42,
    "ma10": 41.31,
    "ma20": 38.3,
    "ma60": 41.93,
    "vMa5": 793,
    "vMa10": 555,
    "high5d": 48.2,
    "high10d": 48.2,
    "high20d": 48.2,
    "sparkline": [
      35.2,
      35.7,
      36.3,
      39.9,
      43.85,
      42.85,
      41.9,
      46.05,
      45.65,
      45.65
    ],
    "k3d": [
      {
        "open": 42.8,
        "high": 43.5,
        "low": 41.35,
        "close": 41.9,
        "ma5": 40.96,
        "ma10": 37.51
      },
      {
        "open": 46.05,
        "high": 46.05,
        "low": 46.05,
        "close": 46.05,
        "ma5": 42.91,
        "ma10": 38.83
      },
      {
        "open": 48.2,
        "high": 48.2,
        "low": 45.4,
        "close": 45.65,
        "ma5": 44.06,
        "ma10": 40.16
      }
    ],
    "k5d": [
      {
        "open": 44.1,
        "high": 44.1,
        "low": 41.05,
        "close": 42.85,
        "ma5": 39.72,
        "ma10": 36.75
      },
      {
        "open": 42.8,
        "high": 43.5,
        "low": 41.35,
        "close": 41.9,
        "ma5": 40.96,
        "ma10": 37.51
      },
      {
        "open": 46.05,
        "high": 46.05,
        "low": 46.05,
        "close": 46.05,
        "ma5": 42.91,
        "ma10": 38.83
      },
      {
        "open": 48.2,
        "high": 48.2,
        "low": 45.4,
        "close": 45.65,
        "ma5": 44.06,
        "ma10": 40.16
      },
      {
        "open": 45.9,
        "high": 46.7,
        "low": 45.35,
        "close": 45.65,
        "ma5": 44.42,
        "ma10": 41.31
      }
    ],
    "symbol": "4561.TWO",
    "maxVol10d": 1424,
    "hasVolumeBurst": true
  },
  {
    "code": "6127",
    "name": "九豪",
    "categories": [
      "Top100"
    ],
    "price": 51.6,
    "prevClose": 52.8,
    "open": 53.2,
    "high": 53.2,
    "low": 51.4,
    "volume": 2363,
    "ma5": 51.62,
    "ma10": 50.27,
    "ma20": 50.82,
    "ma60": 67.76,
    "vMa5": 4217,
    "vMa10": 4127,
    "high5d": 55.9,
    "high10d": 55.9,
    "high20d": 69.6,
    "sparkline": [
      48.25,
      48.9,
      49.35,
      50.0,
      48.1,
      50.3,
      51.6,
      51.8,
      52.8,
      51.6
    ],
    "k3d": [
      {
        "open": 50.2,
        "high": 54.3,
        "low": 50.0,
        "close": 51.6,
        "ma5": 49.87,
        "ma10": 48.01
      },
      {
        "open": 51.8,
        "high": 53.3,
        "low": 50.9,
        "close": 51.8,
        "ma5": 50.36,
        "ma10": 48.64
      },
      {
        "open": 52.6,
        "high": 55.9,
        "low": 52.5,
        "close": 52.8,
        "ma5": 50.92,
        "ma10": 49.7
      }
    ],
    "k5d": [
      {
        "open": 50.5,
        "high": 52.2,
        "low": 50.1,
        "close": 50.3,
        "ma5": 49.33,
        "ma10": 47.7
      },
      {
        "open": 50.2,
        "high": 54.3,
        "low": 50.0,
        "close": 51.6,
        "ma5": 49.87,
        "ma10": 48.01
      },
      {
        "open": 51.8,
        "high": 53.3,
        "low": 50.9,
        "close": 51.8,
        "ma5": 50.36,
        "ma10": 48.64
      },
      {
        "open": 52.6,
        "high": 55.9,
        "low": 52.5,
        "close": 52.8,
        "ma5": 50.92,
        "ma10": 49.7
      },
      {
        "open": 53.2,
        "high": 53.2,
        "low": 51.4,
        "close": 51.6,
        "ma5": 51.62,
        "ma10": 50.27
      }
    ],
    "symbol": "6127.TWO",
    "maxVol10d": 7230,
    "hasVolumeBurst": true
  },
  {
    "code": "00961",
    "name": "FT臺灣永續高息",
    "categories": [
      "Top100"
    ],
    "price": 13.42,
    "prevClose": 13.31,
    "open": 13.46,
    "high": 13.49,
    "low": 13.38,
    "volume": 32635,
    "ma5": 13.18,
    "ma10": 13.09,
    "ma20": 12.84,
    "ma60": 12.71,
    "vMa5": 22489,
    "vMa10": 19948,
    "high5d": 13.49,
    "high10d": 13.49,
    "high20d": 13.49,
    "sparkline": [
      12.95,
      12.92,
      13.03,
      13.12,
      13.05,
      13.04,
      13.12,
      13.13,
      13.18,
      13.42
    ],
    "k3d": [
      {
        "open": 13.16,
        "high": 13.16,
        "low": 13.04,
        "close": 13.12,
        "ma5": 13.07,
        "ma10": 12.89
      },
      {
        "open": 13.12,
        "high": 13.15,
        "low": 13.09,
        "close": 13.13,
        "ma5": 13.09,
        "ma10": 12.95
      },
      {
        "open": 13.35,
        "high": 13.37,
        "low": 13.27,
        "close": 13.31,
        "ma5": 13.13,
        "ma10": 13.02
      }
    ],
    "k5d": [
      {
        "open": 13.13,
        "high": 13.13,
        "low": 13.01,
        "close": 13.04,
        "ma5": 13.03,
        "ma10": 12.86
      },
      {
        "open": 13.16,
        "high": 13.16,
        "low": 13.04,
        "close": 13.12,
        "ma5": 13.07,
        "ma10": 12.89
      },
      {
        "open": 13.12,
        "high": 13.15,
        "low": 13.09,
        "close": 13.13,
        "ma5": 13.09,
        "ma10": 12.95
      },
      {
        "open": 13.18,
        "high": 13.25,
        "low": 13.15,
        "close": 13.18,
        "ma5": 13.1,
        "ma10": 13.01
      },
      {
        "open": 13.46,
        "high": 13.49,
        "low": 13.38,
        "close": 13.41,
        "ma5": 13.18,
        "ma10": 13.09
      }
    ],
    "symbol": "00961.TW",
    "maxVol10d": 32635,
    "hasVolumeBurst": true
  },
  {
    "code": "2834",
    "name": "臺企銀",
    "categories": [
      "Top100"
    ],
    "price": 16.35,
    "prevClose": 16.45,
    "open": 16.45,
    "high": 16.45,
    "low": 16.25,
    "volume": 19234,
    "ma5": 16.43,
    "ma10": 16.59,
    "ma20": 16.73,
    "ma60": 16.35,
    "vMa5": 27804,
    "vMa10": 41568,
    "high5d": 16.7,
    "high10d": 17.15,
    "high20d": 17.2,
    "sparkline": [
      17.01,
      16.9,
      16.75,
      16.55,
      16.5,
      16.5,
      16.4,
      16.5,
      16.45,
      16.35
    ],
    "k3d": [
      {
        "open": 16.5,
        "high": 16.55,
        "low": 16.35,
        "close": 16.4,
        "ma5": 16.54,
        "ma10": 16.73
      },
      {
        "open": 16.45,
        "high": 16.55,
        "low": 16.4,
        "close": 16.5,
        "ma5": 16.49,
        "ma10": 16.7
      },
      {
        "open": 16.5,
        "high": 16.5,
        "low": 16.25,
        "close": 16.45,
        "ma5": 16.47,
        "ma10": 16.66
      }
    ],
    "k5d": [
      {
        "open": 16.7,
        "high": 16.7,
        "low": 16.4,
        "close": 16.5,
        "ma5": 16.64,
        "ma10": 16.78
      },
      {
        "open": 16.5,
        "high": 16.55,
        "low": 16.35,
        "close": 16.4,
        "ma5": 16.54,
        "ma10": 16.73
      },
      {
        "open": 16.45,
        "high": 16.55,
        "low": 16.4,
        "close": 16.5,
        "ma5": 16.49,
        "ma10": 16.7
      },
      {
        "open": 16.5,
        "high": 16.5,
        "low": 16.25,
        "close": 16.45,
        "ma5": 16.47,
        "ma10": 16.66
      },
      {
        "open": 16.45,
        "high": 16.45,
        "low": 16.25,
        "close": 16.3,
        "ma5": 16.43,
        "ma10": 16.59
      }
    ],
    "symbol": "2834.TW",
    "maxVol10d": 85994,
    "hasVolumeBurst": false
  },
  {
    "code": "2332",
    "name": "友訊",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 22.7,
    "prevClose": 22.65,
    "open": 22.9,
    "high": 23.3,
    "low": 22.65,
    "volume": 21016,
    "ma5": 22.81,
    "ma10": 22.79,
    "ma20": 22.7,
    "ma60": 19.83,
    "vMa5": 31377,
    "vMa10": 40379,
    "high5d": 23.8,
    "high10d": 24.95,
    "high20d": 25.1,
    "sparkline": [
      22.2,
      23.85,
      22.9,
      22.7,
      22.15,
      23.6,
      22.6,
      22.3,
      22.65,
      22.7
    ],
    "k3d": [
      {
        "open": 23.75,
        "high": 23.8,
        "low": 22.55,
        "close": 22.6,
        "ma5": 22.79,
        "ma10": 22.69
      },
      {
        "open": 22.9,
        "high": 22.9,
        "low": 22.2,
        "close": 22.3,
        "ma5": 22.67,
        "ma10": 22.52
      },
      {
        "open": 22.55,
        "high": 23.5,
        "low": 22.25,
        "close": 22.65,
        "ma5": 22.66,
        "ma10": 22.62
      }
    ],
    "k5d": [
      {
        "open": 22.15,
        "high": 23.8,
        "low": 22.15,
        "close": 23.6,
        "ma5": 23.04,
        "ma10": 22.79
      },
      {
        "open": 23.75,
        "high": 23.8,
        "low": 22.55,
        "close": 22.6,
        "ma5": 22.79,
        "ma10": 22.69
      },
      {
        "open": 22.9,
        "high": 22.9,
        "low": 22.2,
        "close": 22.3,
        "ma5": 22.67,
        "ma10": 22.52
      },
      {
        "open": 22.55,
        "high": 23.5,
        "low": 22.25,
        "close": 22.65,
        "ma5": 22.66,
        "ma10": 22.62
      },
      {
        "open": 22.9,
        "high": 23.3,
        "low": 22.65,
        "close": 22.9,
        "ma5": 22.81,
        "ma10": 22.79
      }
    ],
    "symbol": "2332.TW",
    "maxVol10d": 71778,
    "hasVolumeBurst": false
  },
  {
    "code": "00764B",
    "name": "群益25年美債",
    "categories": [
      "Top100"
    ],
    "price": 27.26,
    "prevClose": 27.33,
    "open": 27.38,
    "high": 27.39,
    "low": 27.26,
    "volume": 866,
    "ma5": 27.35,
    "ma10": 27.43,
    "ma20": 27.62,
    "ma60": 27.79,
    "vMa5": 5033,
    "vMa10": 5418,
    "high5d": 27.48,
    "high10d": 27.71,
    "high20d": 28.06,
    "sparkline": [
      27.45,
      27.43,
      27.67,
      27.65,
      27.39,
      27.48,
      27.3,
      27.37,
      27.33,
      27.26
    ],
    "k3d": [
      {
        "open": 27.28,
        "high": 27.3,
        "low": 27.23,
        "close": 27.3,
        "ma5": 27.5,
        "ma10": 27.56
      },
      {
        "open": 27.38,
        "high": 27.38,
        "low": 27.33,
        "close": 27.37,
        "ma5": 27.44,
        "ma10": 27.49
      },
      {
        "open": 27.32,
        "high": 27.33,
        "low": 27.29,
        "close": 27.33,
        "ma5": 27.37,
        "ma10": 27.47
      }
    ],
    "k5d": [
      {
        "open": 27.43,
        "high": 27.48,
        "low": 27.41,
        "close": 27.48,
        "ma5": 27.52,
        "ma10": 27.62
      },
      {
        "open": 27.28,
        "high": 27.3,
        "low": 27.23,
        "close": 27.3,
        "ma5": 27.5,
        "ma10": 27.56
      },
      {
        "open": 27.38,
        "high": 27.38,
        "low": 27.33,
        "close": 27.37,
        "ma5": 27.44,
        "ma10": 27.49
      },
      {
        "open": 27.32,
        "high": 27.33,
        "low": 27.29,
        "close": 27.33,
        "ma5": 27.37,
        "ma10": 27.47
      },
      {
        "open": 27.38,
        "high": 27.39,
        "low": 27.26,
        "close": 27.26,
        "ma5": 27.35,
        "ma10": 27.43
      }
    ],
    "symbol": "00764B.TWO",
    "maxVol10d": 13345,
    "hasVolumeBurst": false
  },
  {
    "code": "3236",
    "name": "千如",
    "categories": [
      "Top100"
    ],
    "price": 45.5,
    "prevClose": 47.3,
    "open": 47.7,
    "high": 47.7,
    "low": 45.4,
    "volume": 2064,
    "ma5": 45.42,
    "ma10": 43.96,
    "ma20": 42.9,
    "ma60": 54.61,
    "vMa5": 4620,
    "vMa10": 4084,
    "high5d": 49.0,
    "high10d": 49.0,
    "high20d": 56.2,
    "sparkline": [
      42.6,
      43.0,
      42.7,
      43.25,
      40.9,
      42.95,
      46.15,
      45.2,
      47.3,
      45.5
    ],
    "k3d": [
      {
        "open": 42.95,
        "high": 46.8,
        "low": 42.6,
        "close": 46.15,
        "ma5": 43.19,
        "ma10": 41.4
      },
      {
        "open": 45.65,
        "high": 46.6,
        "low": 44.7,
        "close": 45.2,
        "ma5": 43.69,
        "ma10": 42.08
      },
      {
        "open": 46.0,
        "high": 49.0,
        "low": 46.0,
        "close": 47.3,
        "ma5": 44.5,
        "ma10": 43.28
      }
    ],
    "k5d": [
      {
        "open": 42.9,
        "high": 43.4,
        "low": 42.2,
        "close": 42.95,
        "ma5": 42.56,
        "ma10": 40.68
      },
      {
        "open": 42.95,
        "high": 46.8,
        "low": 42.6,
        "close": 46.15,
        "ma5": 43.19,
        "ma10": 41.4
      },
      {
        "open": 45.65,
        "high": 46.6,
        "low": 44.7,
        "close": 45.2,
        "ma5": 43.69,
        "ma10": 42.08
      },
      {
        "open": 46.0,
        "high": 49.0,
        "low": 46.0,
        "close": 47.3,
        "ma5": 44.5,
        "ma10": 43.28
      },
      {
        "open": 47.7,
        "high": 47.7,
        "low": 45.4,
        "close": 45.5,
        "ma5": 45.42,
        "ma10": 43.96
      }
    ],
    "symbol": "3236.TWO",
    "maxVol10d": 7387,
    "hasVolumeBurst": true
  },
  {
    "code": "6244",
    "name": "茂迪",
    "categories": [
      "Top100"
    ],
    "price": 25.3,
    "prevClose": 25.7,
    "open": 25.6,
    "high": 25.7,
    "low": 24.9,
    "volume": 1344,
    "ma5": 24.7,
    "ma10": 24.19,
    "ma20": 23.95,
    "ma60": 26.9,
    "vMa5": 2374,
    "vMa10": 2690,
    "high5d": 26.65,
    "high10d": 26.65,
    "high20d": 27.3,
    "sparkline": [
      23.1,
      23.7,
      24.7,
      23.75,
      23.1,
      24.1,
      24.1,
      24.3,
      25.7,
      25.3
    ],
    "k3d": [
      {
        "open": 24.05,
        "high": 24.35,
        "low": 23.6,
        "close": 24.1,
        "ma5": 23.95,
        "ma10": 23.0
      },
      {
        "open": 24.45,
        "high": 24.45,
        "low": 24.15,
        "close": 24.3,
        "ma5": 23.87,
        "ma10": 23.32
      },
      {
        "open": 24.5,
        "high": 26.65,
        "low": 24.5,
        "close": 25.7,
        "ma5": 24.26,
        "ma10": 23.85
      }
    ],
    "k5d": [
      {
        "open": 23.55,
        "high": 24.15,
        "low": 23.45,
        "close": 24.1,
        "ma5": 23.87,
        "ma10": 22.86
      },
      {
        "open": 24.05,
        "high": 24.35,
        "low": 23.6,
        "close": 24.1,
        "ma5": 23.95,
        "ma10": 23.0
      },
      {
        "open": 24.45,
        "high": 24.45,
        "low": 24.15,
        "close": 24.3,
        "ma5": 23.87,
        "ma10": 23.32
      },
      {
        "open": 24.5,
        "high": 26.65,
        "low": 24.5,
        "close": 25.7,
        "ma5": 24.26,
        "ma10": 23.85
      },
      {
        "open": 25.6,
        "high": 25.7,
        "low": 24.9,
        "close": 25.3,
        "ma5": 24.7,
        "ma10": 24.19
      }
    ],
    "symbol": "6244.TWO",
    "maxVol10d": 5862,
    "hasVolumeBurst": true
  },
  {
    "code": "8096",
    "name": "擎亞",
    "categories": [
      "Top100"
    ],
    "price": 119.0,
    "prevClose": 125.5,
    "open": 127.0,
    "high": 127.5,
    "low": 117.5,
    "volume": 5429,
    "ma5": 122.9,
    "ma10": 125.25,
    "ma20": 126.83,
    "ma60": 137.16,
    "vMa5": 6559,
    "vMa10": 7148,
    "high5d": 138.0,
    "high10d": 141.0,
    "high20d": 150.0,
    "sparkline": [
      115.0,
      126.5,
      129.5,
      135.5,
      131.5,
      123.0,
      121.5,
      125.5,
      125.5,
      119.0
    ],
    "k3d": [
      {
        "open": 123.0,
        "high": 126.0,
        "low": 120.0,
        "close": 121.5,
        "ma5": 128.2,
        "ma10": 121.1
      },
      {
        "open": 122.5,
        "high": 126.5,
        "low": 121.5,
        "close": 125.5,
        "ma5": 127.4,
        "ma10": 122.3
      },
      {
        "open": 125.0,
        "high": 128.0,
        "low": 123.5,
        "close": 125.5,
        "ma5": 125.4,
        "ma10": 124.6
      }
    ],
    "k5d": [
      {
        "open": 135.0,
        "high": 138.0,
        "low": 123.0,
        "close": 123.0,
        "ma5": 129.2,
        "ma10": 121.55
      },
      {
        "open": 123.0,
        "high": 126.0,
        "low": 120.0,
        "close": 121.5,
        "ma5": 128.2,
        "ma10": 121.1
      },
      {
        "open": 122.5,
        "high": 126.5,
        "low": 121.5,
        "close": 125.5,
        "ma5": 127.4,
        "ma10": 122.3
      },
      {
        "open": 125.0,
        "high": 128.0,
        "low": 123.5,
        "close": 125.5,
        "ma5": 125.4,
        "ma10": 124.6
      },
      {
        "open": 127.0,
        "high": 127.5,
        "low": 117.5,
        "close": 119.0,
        "ma5": 122.9,
        "ma10": 125.25
      }
    ],
    "symbol": "8096.TWO",
    "maxVol10d": 12087,
    "hasVolumeBurst": true
  },
  {
    "code": "3363",
    "name": "上詮",
    "categories": [
      "Top100"
    ],
    "price": 591.0,
    "prevClose": 600.0,
    "open": 600.0,
    "high": 604.0,
    "low": 580.0,
    "volume": 2059,
    "ma5": 613.4,
    "ma10": 594.1,
    "ma20": 562.2,
    "ma60": 652.15,
    "vMa5": 3750,
    "vMa10": 3454,
    "high5d": 656.0,
    "high10d": 656.0,
    "high20d": 656.0,
    "sparkline": [
      525.0,
      563.0,
      600.0,
      604.0,
      582.0,
      640.0,
      606.0,
      630.0,
      600.0,
      591.0
    ],
    "k3d": [
      {
        "open": 640.0,
        "high": 648.0,
        "low": 603.0,
        "close": 606.0,
        "ma5": 606.4,
        "ma10": 552.3
      },
      {
        "open": 616.0,
        "high": 652.0,
        "low": 612.0,
        "close": 630.0,
        "ma5": 612.4,
        "ma10": 566.75
      },
      {
        "open": 654.0,
        "high": 656.0,
        "low": 598.0,
        "close": 600.0,
        "ma5": 611.6,
        "ma10": 583.05
      }
    ],
    "k5d": [
      {
        "open": 604.0,
        "high": 640.0,
        "low": 603.0,
        "close": 640.0,
        "ma5": 597.8,
        "ma10": 545.6
      },
      {
        "open": 640.0,
        "high": 648.0,
        "low": 603.0,
        "close": 606.0,
        "ma5": 606.4,
        "ma10": 552.3
      },
      {
        "open": 616.0,
        "high": 652.0,
        "low": 612.0,
        "close": 630.0,
        "ma5": 612.4,
        "ma10": 566.75
      },
      {
        "open": 654.0,
        "high": 656.0,
        "low": 598.0,
        "close": 600.0,
        "ma5": 611.6,
        "ma10": 583.05
      },
      {
        "open": 600.0,
        "high": 604.0,
        "low": 580.0,
        "close": 591.0,
        "ma5": 613.4,
        "ma10": 594.1
      }
    ],
    "symbol": "3363.TWO",
    "maxVol10d": 5455,
    "hasVolumeBurst": false
  },
  {
    "code": "00887",
    "name": "永豐中國科技50大",
    "categories": [
      "Top100"
    ],
    "price": 17.08,
    "prevClose": 17.5,
    "open": 17.33,
    "high": 17.33,
    "low": 17.01,
    "volume": 5280,
    "ma5": 17.23,
    "ma10": 16.97,
    "ma20": 16.95,
    "ma60": 17.93,
    "vMa5": 5784,
    "vMa10": 7373,
    "high5d": 17.63,
    "high10d": 17.63,
    "high20d": 18.61,
    "sparkline": [
      15.94,
      16.34,
      17.04,
      16.89,
      17.33,
      17.09,
      17.29,
      17.21,
      17.5,
      17.08
    ],
    "k3d": [
      {
        "open": 17.3,
        "high": 17.42,
        "low": 17.08,
        "close": 17.29,
        "ma5": 17.13,
        "ma10": 16.68
      },
      {
        "open": 17.2,
        "high": 17.37,
        "low": 17.09,
        "close": 17.21,
        "ma5": 17.16,
        "ma10": 16.77
      },
      {
        "open": 17.37,
        "high": 17.63,
        "low": 17.36,
        "close": 17.5,
        "ma5": 17.28,
        "ma10": 16.92
      }
    ],
    "k5d": [
      {
        "open": 17.5,
        "high": 17.52,
        "low": 17.05,
        "close": 17.09,
        "ma5": 16.94,
        "ma10": 16.61
      },
      {
        "open": 17.3,
        "high": 17.42,
        "low": 17.08,
        "close": 17.29,
        "ma5": 17.13,
        "ma10": 16.68
      },
      {
        "open": 17.2,
        "high": 17.37,
        "low": 17.09,
        "close": 17.21,
        "ma5": 17.16,
        "ma10": 16.77
      },
      {
        "open": 17.37,
        "high": 17.63,
        "low": 17.36,
        "close": 17.5,
        "ma5": 17.28,
        "ma10": 16.92
      },
      {
        "open": 17.33,
        "high": 17.33,
        "low": 17.01,
        "close": 17.08,
        "ma5": 17.23,
        "ma10": 16.97
      }
    ],
    "symbol": "00887.TWO",
    "maxVol10d": 12971,
    "hasVolumeBurst": false
  },
  {
    "code": "00900",
    "name": "富邦特選高股息30",
    "categories": [
      "SitcaBuy"
    ],
    "price": 18.91,
    "prevClose": 18.94,
    "open": 19.0,
    "high": 19.02,
    "low": 18.84,
    "volume": 3881,
    "ma5": 18.8,
    "ma10": 18.63,
    "ma20": 18.34,
    "ma60": 18.84,
    "vMa5": 4343,
    "vMa10": 5119,
    "high5d": 19.02,
    "high10d": 19.02,
    "high20d": 19.02,
    "sparkline": [
      18.24,
      18.25,
      18.38,
      18.74,
      18.67,
      18.64,
      18.8,
      18.73,
      18.94,
      18.91
    ],
    "k3d": [
      {
        "open": 18.7,
        "high": 18.83,
        "low": 18.62,
        "close": 18.8,
        "ma5": 18.65,
        "ma10": 18.28
      },
      {
        "open": 18.77,
        "high": 18.77,
        "low": 18.65,
        "close": 18.73,
        "ma5": 18.72,
        "ma10": 18.37
      },
      {
        "open": 19.0,
        "high": 19.03,
        "low": 18.81,
        "close": 18.94,
        "ma5": 18.76,
        "ma10": 18.49
      }
    ],
    "k5d": [
      {
        "open": 18.66,
        "high": 18.75,
        "low": 18.6,
        "close": 18.64,
        "ma5": 18.54,
        "ma10": 18.24
      },
      {
        "open": 18.7,
        "high": 18.83,
        "low": 18.62,
        "close": 18.8,
        "ma5": 18.65,
        "ma10": 18.28
      },
      {
        "open": 18.77,
        "high": 18.77,
        "low": 18.65,
        "close": 18.73,
        "ma5": 18.72,
        "ma10": 18.37
      },
      {
        "open": 18.82,
        "high": 18.96,
        "low": 18.82,
        "close": 18.94,
        "ma5": 18.76,
        "ma10": 18.49
      },
      {
        "open": 19.0,
        "high": 19.02,
        "low": 18.84,
        "close": 18.89,
        "ma5": 18.8,
        "ma10": 18.63
      }
    ],
    "symbol": "00900.TW",
    "maxVol10d": 7310,
    "hasVolumeBurst": false
  },
  {
    "code": "1402",
    "name": "遠東新",
    "categories": [
      "SitcaBuy"
    ],
    "price": 27.0,
    "prevClose": 26.95,
    "open": 27.0,
    "high": 27.0,
    "low": 26.65,
    "volume": 8470,
    "ma5": 27.2,
    "ma10": 27.12,
    "ma20": 27.2,
    "ma60": 27.42,
    "vMa5": 18255,
    "vMa10": 17716,
    "high5d": 27.9,
    "high10d": 27.9,
    "high20d": 28.2,
    "sparkline": [
      26.9,
      27.15,
      26.7,
      27.0,
      27.5,
      27.25,
      27.3,
      27.55,
      26.95,
      27.0
    ],
    "k3d": [
      {
        "open": 27.5,
        "high": 27.5,
        "low": 26.95,
        "close": 27.3,
        "ma5": 27.15,
        "ma10": 27.13
      },
      {
        "open": 27.3,
        "high": 27.9,
        "low": 27.3,
        "close": 27.55,
        "ma5": 27.32,
        "ma10": 27.16
      },
      {
        "open": 27.7,
        "high": 27.7,
        "low": 26.85,
        "close": 26.95,
        "ma5": 27.31,
        "ma10": 27.14
      }
    ],
    "k5d": [
      {
        "open": 27.4,
        "high": 27.6,
        "low": 27.15,
        "close": 27.25,
        "ma5": 27.12,
        "ma10": 27.14
      },
      {
        "open": 27.5,
        "high": 27.5,
        "low": 26.95,
        "close": 27.3,
        "ma5": 27.15,
        "ma10": 27.13
      },
      {
        "open": 27.3,
        "high": 27.9,
        "low": 27.3,
        "close": 27.55,
        "ma5": 27.32,
        "ma10": 27.16
      },
      {
        "open": 27.7,
        "high": 27.7,
        "low": 26.85,
        "close": 26.95,
        "ma5": 27.31,
        "ma10": 27.14
      },
      {
        "open": 27.0,
        "high": 27.0,
        "low": 26.65,
        "close": 26.95,
        "ma5": 27.2,
        "ma10": 27.12
      }
    ],
    "symbol": "1402.TW",
    "maxVol10d": 23484,
    "hasVolumeBurst": false
  },
  {
    "code": "3702",
    "name": "大聯大",
    "categories": [
      "SitcaBuy"
    ],
    "price": 116.5,
    "prevClose": 123.5,
    "open": 124.5,
    "high": 124.5,
    "low": 116.5,
    "volume": 8414,
    "ma5": 123.7,
    "ma10": 122.9,
    "ma20": 117.7,
    "ma60": 113.88,
    "vMa5": 11480,
    "vMa10": 11515,
    "high5d": 130.5,
    "high10d": 130.5,
    "high20d": 130.5,
    "sparkline": [
      116.0,
      117.5,
      129.0,
      125.5,
      122.5,
      130.0,
      125.5,
      122.5,
      123.5,
      116.5
    ],
    "k3d": [
      {
        "open": 126.0,
        "high": 128.0,
        "low": 121.0,
        "close": 125.5,
        "ma5": 126.5,
        "ma10": 119.0
      },
      {
        "open": 125.0,
        "high": 125.5,
        "low": 121.0,
        "close": 122.5,
        "ma5": 125.2,
        "ma10": 120.65
      },
      {
        "open": 122.5,
        "high": 125.0,
        "low": 120.5,
        "close": 123.5,
        "ma5": 124.8,
        "ma10": 122.45
      }
    ],
    "k5d": [
      {
        "open": 123.0,
        "high": 130.5,
        "low": 123.0,
        "close": 130.0,
        "ma5": 124.9,
        "ma10": 117.45
      },
      {
        "open": 126.0,
        "high": 128.0,
        "low": 121.0,
        "close": 125.5,
        "ma5": 126.5,
        "ma10": 119.0
      },
      {
        "open": 125.0,
        "high": 125.5,
        "low": 121.0,
        "close": 122.5,
        "ma5": 125.2,
        "ma10": 120.65
      },
      {
        "open": 122.5,
        "high": 125.0,
        "low": 120.5,
        "close": 123.5,
        "ma5": 124.8,
        "ma10": 122.45
      },
      {
        "open": 124.5,
        "high": 124.5,
        "low": 116.5,
        "close": 117.0,
        "ma5": 123.7,
        "ma10": 122.9
      }
    ],
    "symbol": "3702.TW",
    "maxVol10d": 17455,
    "hasVolumeBurst": true
  },
  {
    "code": "6442",
    "name": "光聖",
    "categories": [],
    "price": 1580.0,
    "prevClose": 1565.0,
    "open": 1550.0,
    "high": 1620.0,
    "low": 1530.0,
    "volume": 2057,
    "ma5": 1523.0,
    "ma10": 1439.0,
    "ma20": 1342.25,
    "ma60": 1634.17,
    "vMa5": 2952,
    "vMa10": 2964,
    "high5d": 1670.0,
    "high10d": 1670.0,
    "high20d": 1670.0,
    "sparkline": [
      1270.0,
      1395.0,
      1370.0,
      1415.0,
      1325.0,
      1425.0,
      1450.0,
      1595.0,
      1565.0,
      1580.0
    ],
    "k3d": [
      {
        "open": 1380.0,
        "high": 1470.0,
        "low": 1365.0,
        "close": 1450.0,
        "ma5": 1397.0,
        "ma10": 1296.5
      },
      {
        "open": 1470.0,
        "high": 1595.0,
        "low": 1470.0,
        "close": 1595.0,
        "ma5": 1442.0,
        "ma10": 1345.0
      },
      {
        "open": 1635.0,
        "high": 1670.0,
        "low": 1545.0,
        "close": 1565.0,
        "ma5": 1472.0,
        "ma10": 1396.5
      }
    ],
    "k5d": [
      {
        "open": 1380.0,
        "high": 1455.0,
        "low": 1375.0,
        "close": 1425.0,
        "ma5": 1386.0,
        "ma10": 1274.5
      },
      {
        "open": 1380.0,
        "high": 1470.0,
        "low": 1365.0,
        "close": 1450.0,
        "ma5": 1397.0,
        "ma10": 1296.5
      },
      {
        "open": 1470.0,
        "high": 1595.0,
        "low": 1470.0,
        "close": 1595.0,
        "ma5": 1442.0,
        "ma10": 1345.0
      },
      {
        "open": 1635.0,
        "high": 1670.0,
        "low": 1545.0,
        "close": 1565.0,
        "ma5": 1472.0,
        "ma10": 1396.5
      },
      {
        "open": 1550.0,
        "high": 1620.0,
        "low": 1530.0,
        "close": 1580.0,
        "ma5": 1523.0,
        "ma10": 1439.0
      }
    ],
    "symbol": "6442.TW",
    "maxVol10d": 5843,
    "hasVolumeBurst": true
  },
  {
    "code": "6693",
    "name": "廣閎科",
    "categories": [],
    "price": 188.5,
    "prevClose": 185.0,
    "open": 190.0,
    "high": 190.5,
    "low": 182.5,
    "volume": 640,
    "ma5": 183.1,
    "ma10": 176.05,
    "ma20": 172.72,
    "ma60": 190.31,
    "vMa5": 1441,
    "vMa10": 1033,
    "high5d": 200.5,
    "high10d": 200.5,
    "high20d": 217.5,
    "sparkline": [
      157.0,
      163.0,
      170.5,
      169.0,
      185.5,
      184.0,
      173.5,
      184.5,
      185.0,
      188.5
    ],
    "k3d": [
      {
        "open": 183.0,
        "high": 183.0,
        "low": 170.0,
        "close": 173.5,
        "ma5": 176.5,
        "ma10": 163.1
      },
      {
        "open": 177.0,
        "high": 190.0,
        "low": 176.5,
        "close": 184.5,
        "ma5": 179.3,
        "ma10": 167.35
      },
      {
        "open": 185.0,
        "high": 197.0,
        "low": 184.5,
        "close": 185.0,
        "ma5": 182.5,
        "ma10": 172.2
      }
    ],
    "k5d": [
      {
        "open": 198.5,
        "high": 200.5,
        "low": 183.0,
        "close": 184.0,
        "ma5": 174.4,
        "ma10": 161.3
      },
      {
        "open": 183.0,
        "high": 183.0,
        "low": 170.0,
        "close": 173.5,
        "ma5": 176.5,
        "ma10": 163.1
      },
      {
        "open": 177.0,
        "high": 190.0,
        "low": 176.5,
        "close": 184.5,
        "ma5": 179.3,
        "ma10": 167.35
      },
      {
        "open": 185.0,
        "high": 197.0,
        "low": 184.5,
        "close": 185.0,
        "ma5": 182.5,
        "ma10": 172.2
      },
      {
        "open": 190.0,
        "high": 190.5,
        "low": 182.5,
        "close": 188.5,
        "ma5": 183.1,
        "ma10": 176.05
      }
    ],
    "symbol": "6693.TWO",
    "maxVol10d": 3052,
    "hasVolumeBurst": true
  },
  {
    "code": "3526",
    "name": "凡甲",
    "categories": [],
    "price": 291.5,
    "prevClose": 288.0,
    "open": 291.0,
    "high": 294.0,
    "low": 288.0,
    "volume": 224,
    "ma5": 288.7,
    "ma10": 293.8,
    "ma20": 297.52,
    "ma60": 322.3,
    "vMa5": 293,
    "vMa10": 400,
    "high5d": 294.0,
    "high10d": 312.5,
    "high20d": 315.0,
    "sparkline": [
      304.0,
      305.0,
      307.0,
      296.0,
      282.5,
      289.0,
      286.5,
      288.5,
      288.0,
      291.5
    ],
    "k3d": [
      {
        "open": 289.0,
        "high": 290.5,
        "low": 284.5,
        "close": 286.5,
        "ma5": 292.2,
        "ma10": 294.25
      },
      {
        "open": 286.0,
        "high": 291.0,
        "low": 286.0,
        "close": 288.5,
        "ma5": 288.5,
        "ma10": 294.8
      },
      {
        "open": 292.0,
        "high": 292.5,
        "low": 287.5,
        "close": 288.0,
        "ma5": 286.9,
        "ma10": 294.65
      }
    ],
    "k5d": [
      {
        "open": 284.0,
        "high": 292.0,
        "low": 283.0,
        "close": 289.0,
        "ma5": 295.9,
        "ma10": 295.25
      },
      {
        "open": 289.0,
        "high": 290.5,
        "low": 284.5,
        "close": 286.5,
        "ma5": 292.2,
        "ma10": 294.25
      },
      {
        "open": 286.0,
        "high": 291.0,
        "low": 286.0,
        "close": 288.5,
        "ma5": 288.5,
        "ma10": 294.8
      },
      {
        "open": 292.0,
        "high": 292.5,
        "low": 287.5,
        "close": 288.0,
        "ma5": 286.9,
        "ma10": 294.65
      },
      {
        "open": 291.0,
        "high": 294.0,
        "low": 288.0,
        "close": 291.5,
        "ma5": 288.7,
        "ma10": 293.8
      }
    ],
    "symbol": "3526.TWO",
    "maxVol10d": 1110,
    "hasVolumeBurst": true
  },
  {
    "code": "6223",
    "name": "旺矽",
    "categories": [],
    "price": 6540.0,
    "prevClose": 6495.0,
    "open": 6515.0,
    "high": 6630.0,
    "low": 6435.0,
    "volume": 302,
    "ma5": 6435.0,
    "ma10": 6252.5,
    "ma20": 5878.25,
    "ma60": 6179.58,
    "vMa5": 543,
    "vMa10": 585,
    "high5d": 6815.0,
    "high10d": 6815.0,
    "high20d": 6815.0,
    "sparkline": [
      5805.0,
      5900.0,
      6245.0,
      6300.0,
      6100.0,
      6225.0,
      6315.0,
      6600.0,
      6495.0,
      6540.0
    ],
    "k3d": [
      {
        "open": 6330.0,
        "high": 6380.0,
        "low": 6140.0,
        "close": 6315.0,
        "ma5": 6237.0,
        "ma10": 5776.0
      },
      {
        "open": 6355.0,
        "high": 6600.0,
        "low": 6355.0,
        "close": 6600.0,
        "ma5": 6308.0,
        "ma10": 5957.0
      },
      {
        "open": 6800.0,
        "high": 6815.0,
        "low": 6470.0,
        "close": 6495.0,
        "ma5": 6347.0,
        "ma10": 6126.5
      }
    ],
    "k5d": [
      {
        "open": 6230.0,
        "high": 6695.0,
        "low": 6100.0,
        "close": 6225.0,
        "ma5": 6154.0,
        "ma10": 5661.0
      },
      {
        "open": 6330.0,
        "high": 6380.0,
        "low": 6140.0,
        "close": 6315.0,
        "ma5": 6237.0,
        "ma10": 5776.0
      },
      {
        "open": 6355.0,
        "high": 6600.0,
        "low": 6355.0,
        "close": 6600.0,
        "ma5": 6308.0,
        "ma10": 5957.0
      },
      {
        "open": 6800.0,
        "high": 6815.0,
        "low": 6470.0,
        "close": 6495.0,
        "ma5": 6347.0,
        "ma10": 6126.5
      },
      {
        "open": 6515.0,
        "high": 6630.0,
        "low": 6435.0,
        "close": 6540.0,
        "ma5": 6435.0,
        "ma10": 6252.5
      }
    ],
    "symbol": "6223.TWO",
    "maxVol10d": 937,
    "hasVolumeBurst": false
  },
  {
    "code": "2634",
    "name": "漢翔",
    "categories": [
      "MajorBuy"
    ],
    "price": 70.6,
    "prevClose": 64.2,
    "open": 64.2,
    "high": 70.6,
    "low": 63.2,
    "volume": 75084,
    "ma5": 64.06,
    "ma10": 62.89,
    "ma20": 63.05,
    "ma60": 55.64,
    "vMa5": 32512,
    "vMa10": 27204,
    "high5d": 70.6,
    "high10d": 70.6,
    "high20d": 75.3,
    "sparkline": [
      60.7,
      60.5,
      63.5,
      62.2,
      61.7,
      61.0,
      62.8,
      61.7,
      64.2,
      70.6
    ],
    "k3d": [
      {
        "open": 61.5,
        "high": 64.4,
        "low": 59.9,
        "close": 62.8,
        "ma5": 62.24,
        "ma10": 61.36
      },
      {
        "open": 61.8,
        "high": 62.2,
        "low": 61.4,
        "close": 61.7,
        "ma5": 61.88,
        "ma10": 61.46
      },
      {
        "open": 63.0,
        "high": 65.0,
        "low": 62.9,
        "close": 64.2,
        "ma5": 62.28,
        "ma10": 62.02
      }
    ],
    "k5d": [
      {
        "open": 61.7,
        "high": 62.0,
        "low": 60.8,
        "close": 61.0,
        "ma5": 61.78,
        "ma10": 61.17
      },
      {
        "open": 61.5,
        "high": 64.4,
        "low": 59.9,
        "close": 62.8,
        "ma5": 62.24,
        "ma10": 61.36
      },
      {
        "open": 61.8,
        "high": 62.2,
        "low": 61.4,
        "close": 61.7,
        "ma5": 61.88,
        "ma10": 61.46
      },
      {
        "open": 63.0,
        "high": 65.0,
        "low": 62.9,
        "close": 64.2,
        "ma5": 62.28,
        "ma10": 62.02
      },
      {
        "open": 64.2,
        "high": 70.6,
        "low": 63.2,
        "close": 70.6,
        "ma5": 64.06,
        "ma10": 62.89
      }
    ],
    "symbol": "2634.TW",
    "maxVol10d": 75084,
    "hasVolumeBurst": true
  },
  {
    "code": "1504",
    "name": "東元",
    "categories": [
      "MajorBuy"
    ],
    "price": 71.3,
    "prevClose": 70.4,
    "open": 70.8,
    "high": 73.8,
    "low": 70.6,
    "volume": 13233,
    "ma5": 68.78,
    "ma10": 67.38,
    "ma20": 66.34,
    "ma60": 69.76,
    "vMa5": 10141,
    "vMa10": 7654,
    "high5d": 73.8,
    "high10d": 73.8,
    "high20d": 73.8,
    "sparkline": [
      65.3,
      65.4,
      66.5,
      66.7,
      66.0,
      67.2,
      67.4,
      67.3,
      70.4,
      71.3
    ],
    "k3d": [
      {
        "open": 67.2,
        "high": 67.4,
        "low": 66.3,
        "close": 67.4,
        "ma5": 66.76,
        "ma10": 65.18
      },
      {
        "open": 67.4,
        "high": 68.2,
        "low": 67.2,
        "close": 67.3,
        "ma5": 66.92,
        "ma10": 65.71
      },
      {
        "open": 68.5,
        "high": 71.4,
        "low": 68.3,
        "close": 70.4,
        "ma5": 67.66,
        "ma10": 66.7
      }
    ],
    "k5d": [
      {
        "open": 67.5,
        "high": 67.8,
        "low": 67.0,
        "close": 67.2,
        "ma5": 66.36,
        "ma10": 64.74
      },
      {
        "open": 67.2,
        "high": 67.4,
        "low": 66.3,
        "close": 67.4,
        "ma5": 66.76,
        "ma10": 65.18
      },
      {
        "open": 67.4,
        "high": 68.2,
        "low": 67.2,
        "close": 67.3,
        "ma5": 66.92,
        "ma10": 65.71
      },
      {
        "open": 68.5,
        "high": 71.4,
        "low": 68.3,
        "close": 70.4,
        "ma5": 67.66,
        "ma10": 66.7
      },
      {
        "open": 70.8,
        "high": 73.8,
        "low": 70.6,
        "close": 71.6,
        "ma5": 68.78,
        "ma10": 67.38
      }
    ],
    "symbol": "1504.TW",
    "maxVol10d": 22704,
    "hasVolumeBurst": true
  },
  {
    "code": "009819",
    "name": "中信數據及電力",
    "categories": [
      "MajorBuy"
    ],
    "price": 10.51,
    "prevClose": 10.5,
    "open": 10.55,
    "high": 10.57,
    "low": 10.5,
    "volume": 5974,
    "ma5": 10.39,
    "ma10": 10.28,
    "ma20": 10.08,
    "ma60": 10.25,
    "vMa5": 5465,
    "vMa10": 7037,
    "high5d": 10.57,
    "high10d": 10.57,
    "high20d": 10.57,
    "sparkline": [
      10.02,
      9.99,
      10.11,
      10.42,
      10.3,
      10.31,
      10.41,
      10.37,
      10.37,
      10.51
    ],
    "k3d": [
      {
        "open": 10.37,
        "high": 10.43,
        "low": 10.37,
        "close": 10.41,
        "ma5": 10.31,
        "ma10": 10.06
      },
      {
        "open": 10.39,
        "high": 10.39,
        "low": 10.34,
        "close": 10.37,
        "ma5": 10.36,
        "ma10": 10.12
      },
      {
        "open": 10.48,
        "high": 10.53,
        "low": 10.47,
        "close": 10.5,
        "ma5": 10.38,
        "ma10": 10.2
      }
    ],
    "k5d": [
      {
        "open": 10.32,
        "high": 10.35,
        "low": 10.3,
        "close": 10.31,
        "ma5": 10.23,
        "ma10": 10.03
      },
      {
        "open": 10.37,
        "high": 10.43,
        "low": 10.37,
        "close": 10.41,
        "ma5": 10.31,
        "ma10": 10.06
      },
      {
        "open": 10.39,
        "high": 10.39,
        "low": 10.34,
        "close": 10.37,
        "ma5": 10.36,
        "ma10": 10.12
      },
      {
        "open": 10.37,
        "high": 10.4,
        "low": 10.36,
        "close": 10.37,
        "ma5": 10.35,
        "ma10": 10.19
      },
      {
        "open": 10.55,
        "high": 10.57,
        "low": 10.5,
        "close": 10.5,
        "ma5": 10.39,
        "ma10": 10.28
      }
    ],
    "symbol": "009819.TW",
    "maxVol10d": 23424,
    "hasVolumeBurst": true
  },
  {
    "code": "3576",
    "name": "聯合再生",
    "categories": [
      "MajorBuy"
    ],
    "price": 17.9,
    "prevClose": 17.9,
    "open": 18.3,
    "high": 18.35,
    "low": 17.65,
    "volume": 7160,
    "ma5": 17.52,
    "ma10": 17.34,
    "ma20": 17.49,
    "ma60": 17.67,
    "vMa5": 9965,
    "vMa10": 11670,
    "high5d": 18.4,
    "high10d": 18.4,
    "high20d": 20.8,
    "sparkline": [
      16.65,
      16.6,
      18.25,
      17.4,
      16.95,
      17.15,
      17.3,
      17.3,
      17.9,
      17.9
    ],
    "k3d": [
      {
        "open": 17.15,
        "high": 17.45,
        "low": 17.05,
        "close": 17.3,
        "ma5": 17.41,
        "ma10": 16.82
      },
      {
        "open": 17.3,
        "high": 17.55,
        "low": 17.25,
        "close": 17.3,
        "ma5": 17.22,
        "ma10": 16.95
      },
      {
        "open": 17.8,
        "high": 18.4,
        "low": 17.7,
        "close": 17.9,
        "ma5": 17.32,
        "ma10": 17.18
      }
    ],
    "k5d": [
      {
        "open": 16.95,
        "high": 17.4,
        "low": 16.95,
        "close": 17.15,
        "ma5": 17.27,
        "ma10": 16.78
      },
      {
        "open": 17.15,
        "high": 17.45,
        "low": 17.05,
        "close": 17.3,
        "ma5": 17.41,
        "ma10": 16.82
      },
      {
        "open": 17.3,
        "high": 17.55,
        "low": 17.25,
        "close": 17.3,
        "ma5": 17.22,
        "ma10": 16.95
      },
      {
        "open": 17.8,
        "high": 18.4,
        "low": 17.7,
        "close": 17.9,
        "ma5": 17.32,
        "ma10": 17.18
      },
      {
        "open": 18.3,
        "high": 18.35,
        "low": 17.65,
        "close": 17.95,
        "ma5": 17.52,
        "ma10": 17.34
      }
    ],
    "symbol": "3576.TW",
    "maxVol10d": 20783,
    "hasVolumeBurst": true
  },
  {
    "code": "00982A",
    "name": "主動群益台灣強棒",
    "categories": [
      "MajorBuy"
    ],
    "price": 23.34,
    "prevClose": 23.18,
    "open": 23.41,
    "high": 23.53,
    "low": 23.26,
    "volume": 20220,
    "ma5": 22.77,
    "ma10": 22.19,
    "ma20": 21.67,
    "ma60": 23.21,
    "vMa5": 23714,
    "vMa10": 29911,
    "high5d": 23.53,
    "high10d": 23.53,
    "high20d": 23.75,
    "sparkline": [
      20.39,
      21.04,
      21.61,
      22.33,
      22.71,
      22.39,
      22.68,
      22.5,
      22.82,
      23.34
    ],
    "k3d": [
      {
        "open": 22.8,
        "high": 23.0,
        "low": 22.58,
        "close": 22.68,
        "ma5": 22.34,
        "ma10": 21.07
      },
      {
        "open": 22.26,
        "high": 22.53,
        "low": 22.16,
        "close": 22.5,
        "ma5": 22.52,
        "ma10": 21.31
      },
      {
        "open": 23.32,
        "high": 23.54,
        "low": 23.18,
        "close": 23.18,
        "ma5": 22.69,
        "ma10": 21.74
      }
    ],
    "k5d": [
      {
        "open": 22.95,
        "high": 22.98,
        "low": 22.25,
        "close": 22.39,
        "ma5": 22.02,
        "ma10": 20.98
      },
      {
        "open": 22.8,
        "high": 23.0,
        "low": 22.58,
        "close": 22.68,
        "ma5": 22.34,
        "ma10": 21.07
      },
      {
        "open": 22.26,
        "high": 22.53,
        "low": 22.16,
        "close": 22.5,
        "ma5": 22.52,
        "ma10": 21.31
      },
      {
        "open": 22.55,
        "high": 22.91,
        "low": 22.54,
        "close": 22.82,
        "ma5": 22.62,
        "ma10": 21.7
      },
      {
        "open": 23.41,
        "high": 23.53,
        "low": 23.26,
        "close": 23.45,
        "ma5": 22.77,
        "ma10": 22.19
      }
    ],
    "symbol": "00982A.TW",
    "maxVol10d": 63066,
    "hasVolumeBurst": false
  },
  {
    "code": "2359",
    "name": "所羅門",
    "categories": [
      "MajorBuy"
    ],
    "price": 160.0,
    "prevClose": 157.0,
    "open": 157.5,
    "high": 169.0,
    "low": 154.5,
    "volume": 22056,
    "ma5": 151.2,
    "ma10": 145.35,
    "ma20": 140.62,
    "ma60": 139.46,
    "vMa5": 12806,
    "vMa10": 10659,
    "high5d": 169.0,
    "high10d": 169.0,
    "high20d": 169.0,
    "sparkline": [
      132.5,
      132.0,
      145.0,
      144.5,
      143.5,
      153.5,
      140.5,
      143.0,
      157.0,
      160.0
    ],
    "k3d": [
      {
        "open": 150.0,
        "high": 150.0,
        "low": 139.0,
        "close": 140.5,
        "ma5": 145.4,
        "ma10": 137.3
      },
      {
        "open": 140.0,
        "high": 144.0,
        "low": 139.0,
        "close": 143.0,
        "ma5": 145.0,
        "ma10": 137.9
      },
      {
        "open": 151.0,
        "high": 157.0,
        "low": 151.0,
        "close": 157.0,
        "ma5": 147.5,
        "ma10": 141.25
      }
    ],
    "k5d": [
      {
        "open": 145.0,
        "high": 157.5,
        "low": 142.0,
        "close": 153.5,
        "ma5": 143.7,
        "ma10": 136.65
      },
      {
        "open": 150.0,
        "high": 150.0,
        "low": 139.0,
        "close": 140.5,
        "ma5": 145.4,
        "ma10": 137.3
      },
      {
        "open": 140.0,
        "high": 144.0,
        "low": 139.0,
        "close": 143.0,
        "ma5": 145.0,
        "ma10": 137.9
      },
      {
        "open": 151.0,
        "high": 157.0,
        "low": 151.0,
        "close": 157.0,
        "ma5": 147.5,
        "ma10": 141.25
      },
      {
        "open": 157.5,
        "high": 169.0,
        "low": 154.5,
        "close": 162.0,
        "ma5": 151.2,
        "ma10": 145.35
      }
    ],
    "symbol": "2359.TW",
    "maxVol10d": 22056,
    "hasVolumeBurst": true
  },
  {
    "code": "00402A",
    "name": "主動安聯美國科技",
    "categories": [
      "MajorBuy"
    ],
    "price": 9.92,
    "prevClose": 9.9,
    "open": 9.95,
    "high": 9.98,
    "low": 9.92,
    "volume": 6740,
    "ma5": 9.83,
    "ma10": 9.74,
    "ma20": 9.59,
    "ma60": 9.75,
    "vMa5": 4672,
    "vMa10": 5996,
    "high5d": 9.98,
    "high10d": 9.98,
    "high20d": 10.01,
    "sparkline": [
      9.51,
      9.49,
      9.57,
      9.92,
      9.77,
      9.75,
      9.88,
      9.81,
      9.79,
      9.92
    ],
    "k3d": [
      {
        "open": 9.81,
        "high": 9.89,
        "low": 9.81,
        "close": 9.88,
        "ma5": 9.78,
        "ma10": 9.51
      },
      {
        "open": 9.83,
        "high": 9.83,
        "low": 9.79,
        "close": 9.81,
        "ma5": 9.83,
        "ma10": 9.57
      },
      {
        "open": 9.89,
        "high": 9.95,
        "low": 9.88,
        "close": 9.9,
        "ma5": 9.82,
        "ma10": 9.65
      }
    ],
    "k5d": [
      {
        "open": 9.76,
        "high": 9.78,
        "low": 9.73,
        "close": 9.75,
        "ma5": 9.7,
        "ma10": 9.48
      },
      {
        "open": 9.81,
        "high": 9.89,
        "low": 9.81,
        "close": 9.88,
        "ma5": 9.78,
        "ma10": 9.51
      },
      {
        "open": 9.83,
        "high": 9.83,
        "low": 9.79,
        "close": 9.81,
        "ma5": 9.83,
        "ma10": 9.57
      },
      {
        "open": 9.81,
        "high": 9.81,
        "low": 9.78,
        "close": 9.79,
        "ma5": 9.8,
        "ma10": 9.64
      },
      {
        "open": 9.95,
        "high": 9.98,
        "low": 9.92,
        "close": 9.92,
        "ma5": 9.83,
        "ma10": 9.74
      }
    ],
    "symbol": "00402A.TW",
    "maxVol10d": 13423,
    "hasVolumeBurst": true
  },
  {
    "code": "00637L",
    "name": "元大滬深300正2",
    "categories": [
      "MajorBuy"
    ],
    "price": 20.74,
    "prevClose": 21.32,
    "open": 21.02,
    "high": 21.02,
    "low": 20.62,
    "volume": 21155,
    "ma5": 20.88,
    "ma10": 20.67,
    "ma20": 20.61,
    "ma60": 21.12,
    "vMa5": 18990,
    "vMa10": 19892,
    "high5d": 21.26,
    "high10d": 21.26,
    "high20d": 21.66,
    "sparkline": [
      20.45,
      20.04,
      20.39,
      20.81,
      20.54,
      21.12,
      20.71,
      20.94,
      20.88,
      20.74
    ],
    "k3d": [
      {
        "open": 21.17,
        "high": 21.26,
        "low": 20.71,
        "close": 20.71,
        "ma5": 20.71,
        "ma10": 20.46
      },
      {
        "open": 20.92,
        "high": 21.15,
        "low": 20.76,
        "close": 20.94,
        "ma5": 20.82,
        "ma10": 20.53
      },
      {
        "open": 21.08,
        "high": 21.32,
        "low": 21.03,
        "close": 21.32,
        "ma5": 20.93,
        "ma10": 20.61
      }
    ],
    "k5d": [
      {
        "open": 20.71,
        "high": 21.17,
        "low": 20.71,
        "close": 21.12,
        "ma5": 20.58,
        "ma10": 20.49
      },
      {
        "open": 21.17,
        "high": 21.26,
        "low": 20.71,
        "close": 20.71,
        "ma5": 20.71,
        "ma10": 20.46
      },
      {
        "open": 20.92,
        "high": 21.15,
        "low": 20.76,
        "close": 20.94,
        "ma5": 20.82,
        "ma10": 20.53
      },
      {
        "open": 20.92,
        "high": 21.03,
        "low": 20.71,
        "close": 20.88,
        "ma5": 20.84,
        "ma10": 20.57
      },
      {
        "open": 21.02,
        "high": 21.02,
        "low": 20.62,
        "close": 20.77,
        "ma5": 20.88,
        "ma10": 20.67
      }
    ],
    "symbol": "00637L.TW",
    "maxVol10d": 34852,
    "hasVolumeBurst": false
  },
  {
    "code": "6282",
    "name": "康舒",
    "categories": [
      "MajorBuy"
    ],
    "price": 47.85,
    "prevClose": 48.15,
    "open": 48.65,
    "high": 48.65,
    "low": 47.65,
    "volume": 4852,
    "ma5": 48.63,
    "ma10": 47.92,
    "ma20": 46.54,
    "ma60": 54.9,
    "vMa5": 13693,
    "vMa10": 12094,
    "high5d": 50.7,
    "high10d": 50.7,
    "high20d": 56.1,
    "sparkline": [
      44.65,
      47.9,
      48.0,
      48.3,
      47.15,
      50.0,
      49.85,
      47.15,
      48.15,
      47.85
    ],
    "k3d": [
      {
        "open": 50.2,
        "high": 50.7,
        "low": 49.05,
        "close": 49.85,
        "ma5": 48.66,
        "ma10": 45.78
      },
      {
        "open": 47.4,
        "high": 48.1,
        "low": 47.05,
        "close": 47.15,
        "ma5": 48.49,
        "ma10": 46.43
      },
      {
        "open": 47.7,
        "high": 49.2,
        "low": 47.6,
        "close": 48.15,
        "ma5": 48.46,
        "ma10": 47.36
      }
    ],
    "k5d": [
      {
        "open": 47.7,
        "high": 50.4,
        "low": 47.7,
        "close": 50.0,
        "ma5": 48.27,
        "ma10": 45.08
      },
      {
        "open": 50.2,
        "high": 50.7,
        "low": 49.05,
        "close": 49.85,
        "ma5": 48.66,
        "ma10": 45.78
      },
      {
        "open": 47.4,
        "high": 48.1,
        "low": 47.05,
        "close": 47.15,
        "ma5": 48.49,
        "ma10": 46.43
      },
      {
        "open": 47.7,
        "high": 49.2,
        "low": 47.6,
        "close": 48.15,
        "ma5": 48.46,
        "ma10": 47.36
      },
      {
        "open": 48.65,
        "high": 48.65,
        "low": 47.65,
        "close": 48.0,
        "ma5": 48.63,
        "ma10": 47.92
      }
    ],
    "symbol": "6282.TW",
    "maxVol10d": 21927,
    "hasVolumeBurst": true
  },
  {
    "code": "00997A",
    "name": "主動群益美國增長",
    "categories": [
      "MajorBuy"
    ],
    "price": 11.76,
    "prevClose": 11.76,
    "open": 11.78,
    "high": 11.81,
    "low": 11.75,
    "volume": 6462,
    "ma5": 11.54,
    "ma10": 11.45,
    "ma20": 11.29,
    "ma60": 12.62,
    "vMa5": 6197,
    "vMa10": 7916,
    "high5d": 11.81,
    "high10d": 11.81,
    "high20d": 12.4,
    "sparkline": [
      11.2,
      11.11,
      11.23,
      11.77,
      11.49,
      11.41,
      11.54,
      11.46,
      11.52,
      11.76
    ],
    "k3d": [
      {
        "open": 11.5,
        "high": 11.58,
        "low": 11.5,
        "close": 11.54,
        "ma5": 11.49,
        "ma10": 11.11
      },
      {
        "open": 11.5,
        "high": 11.5,
        "low": 11.4,
        "close": 11.46,
        "ma5": 11.53,
        "ma10": 11.18
      },
      {
        "open": 11.75,
        "high": 11.8,
        "low": 11.7,
        "close": 11.76,
        "ma5": 11.53,
        "ma10": 11.32
      }
    ],
    "k5d": [
      {
        "open": 11.5,
        "high": 11.5,
        "low": 11.38,
        "close": 11.41,
        "ma5": 11.4,
        "ma10": 11.1
      },
      {
        "open": 11.5,
        "high": 11.58,
        "low": 11.5,
        "close": 11.54,
        "ma5": 11.49,
        "ma10": 11.11
      },
      {
        "open": 11.5,
        "high": 11.5,
        "low": 11.4,
        "close": 11.46,
        "ma5": 11.53,
        "ma10": 11.18
      },
      {
        "open": 11.5,
        "high": 11.55,
        "low": 11.46,
        "close": 11.52,
        "ma5": 11.48,
        "ma10": 11.3
      },
      {
        "open": 11.78,
        "high": 11.81,
        "low": 11.75,
        "close": 11.76,
        "ma5": 11.54,
        "ma10": 11.45
      }
    ],
    "symbol": "00997A.TW",
    "maxVol10d": 14303,
    "hasVolumeBurst": false
  },
  {
    "code": "1709",
    "name": "和益",
    "categories": [
      "MajorBuy"
    ],
    "price": 30.45,
    "prevClose": 30.65,
    "open": 29.9,
    "high": 32.2,
    "low": 29.5,
    "volume": 10571,
    "ma5": 28.81,
    "ma10": 27.39,
    "ma20": 26.48,
    "ma60": 23.5,
    "vMa5": 9947,
    "vMa10": 7263,
    "high5d": 32.2,
    "high10d": 32.2,
    "high20d": 32.2,
    "sparkline": [
      22.95,
      25.2,
      26.2,
      27.65,
      27.8,
      27.3,
      27.4,
      28.0,
      30.65,
      30.45
    ],
    "k3d": [
      {
        "open": 26.75,
        "high": 27.7,
        "low": 26.2,
        "close": 27.4,
        "ma5": 27.27,
        "ma10": 25.41
      },
      {
        "open": 27.45,
        "high": 28.3,
        "low": 27.05,
        "close": 28.0,
        "ma5": 27.63,
        "ma10": 25.81
      },
      {
        "open": 28.5,
        "high": 30.8,
        "low": 28.15,
        "close": 30.65,
        "ma5": 28.23,
        "ma10": 26.62
      }
    ],
    "k5d": [
      {
        "open": 28.3,
        "high": 28.55,
        "low": 27.0,
        "close": 27.3,
        "ma5": 26.83,
        "ma10": 25.13
      },
      {
        "open": 26.75,
        "high": 27.7,
        "low": 26.2,
        "close": 27.4,
        "ma5": 27.27,
        "ma10": 25.41
      },
      {
        "open": 27.45,
        "high": 28.3,
        "low": 27.05,
        "close": 28.0,
        "ma5": 27.63,
        "ma10": 25.81
      },
      {
        "open": 28.5,
        "high": 30.8,
        "low": 28.15,
        "close": 30.65,
        "ma5": 28.23,
        "ma10": 26.62
      },
      {
        "open": 29.9,
        "high": 32.2,
        "low": 29.5,
        "close": 30.7,
        "ma5": 28.81,
        "ma10": 27.39
      }
    ],
    "symbol": "1709.TW",
    "maxVol10d": 24646,
    "hasVolumeBurst": true
  },
  {
    "code": "2867",
    "name": "三商壽",
    "categories": [
      "MajorBuy"
    ],
    "price": 9.78,
    "prevClose": 9.62,
    "open": 9.62,
    "high": 9.73,
    "low": 9.5,
    "volume": 4657,
    "ma5": 9.57,
    "ma10": 9.68,
    "ma20": 9.54,
    "ma60": 8.73,
    "vMa5": 10953,
    "vMa10": 13399,
    "high5d": 9.8,
    "high10d": 10.0,
    "high20d": 10.05,
    "sparkline": [
      9.82,
      9.76,
      9.77,
      9.77,
      9.81,
      9.7,
      9.48,
      9.43,
      9.62,
      9.78
    ],
    "k3d": [
      {
        "open": 9.66,
        "high": 9.66,
        "low": 9.44,
        "close": 9.48,
        "ma5": 9.71,
        "ma10": 9.7
      },
      {
        "open": 9.45,
        "high": 9.54,
        "low": 9.34,
        "close": 9.43,
        "ma5": 9.64,
        "ma10": 9.7
      },
      {
        "open": 9.43,
        "high": 9.62,
        "low": 9.35,
        "close": 9.62,
        "ma5": 9.61,
        "ma10": 9.71
      }
    ],
    "k5d": [
      {
        "open": 9.8,
        "high": 9.8,
        "low": 9.56,
        "close": 9.7,
        "ma5": 9.76,
        "ma10": 9.68
      },
      {
        "open": 9.66,
        "high": 9.66,
        "low": 9.44,
        "close": 9.48,
        "ma5": 9.71,
        "ma10": 9.7
      },
      {
        "open": 9.45,
        "high": 9.54,
        "low": 9.34,
        "close": 9.43,
        "ma5": 9.64,
        "ma10": 9.7
      },
      {
        "open": 9.43,
        "high": 9.62,
        "low": 9.35,
        "close": 9.62,
        "ma5": 9.61,
        "ma10": 9.71
      },
      {
        "open": 9.62,
        "high": 9.73,
        "low": 9.5,
        "close": 9.6,
        "ma5": 9.57,
        "ma10": 9.68
      }
    ],
    "symbol": "2867.TW",
    "maxVol10d": 20252,
    "hasVolumeBurst": false
  },
  {
    "code": "6432",
    "name": "今展科",
    "categories": [],
    "price": 73.1,
    "prevClose": 78.0,
    "open": 78.8,
    "high": 78.8,
    "low": 72.6,
    "volume": 1716,
    "ma5": 74.04,
    "ma10": 72.82,
    "ma20": 72.36,
    "ma60": 72.14,
    "vMa5": 1683,
    "vMa10": 2038,
    "high5d": 79.5,
    "high10d": 80.0,
    "high20d": 80.0,
    "sparkline": [
      71.5,
      71.1,
      71.0,
      73.5,
      70.9,
      71.0,
      74.1,
      74.0,
      78.0,
      73.1
    ],
    "k3d": [
      {
        "open": 70.5,
        "high": 74.7,
        "low": 70.5,
        "close": 74.1,
        "ma5": 72.1,
        "ma10": 72.3
      },
      {
        "open": 74.1,
        "high": 76.2,
        "low": 73.5,
        "close": 74.0,
        "ma5": 72.7,
        "ma10": 72.47
      },
      {
        "open": 74.5,
        "high": 79.5,
        "low": 74.5,
        "close": 78.0,
        "ma5": 73.6,
        "ma10": 73.24
      }
    ],
    "k5d": [
      {
        "open": 71.5,
        "high": 72.9,
        "low": 70.6,
        "close": 71.0,
        "ma5": 71.5,
        "ma10": 72.04
      },
      {
        "open": 70.5,
        "high": 74.7,
        "low": 70.5,
        "close": 74.1,
        "ma5": 72.1,
        "ma10": 72.3
      },
      {
        "open": 74.1,
        "high": 76.2,
        "low": 73.5,
        "close": 74.0,
        "ma5": 72.7,
        "ma10": 72.47
      },
      {
        "open": 74.5,
        "high": 79.5,
        "low": 74.5,
        "close": 78.0,
        "ma5": 73.6,
        "ma10": 73.24
      },
      {
        "open": 78.8,
        "high": 78.8,
        "low": 72.6,
        "close": 73.1,
        "ma5": 74.04,
        "ma10": 72.82
      }
    ],
    "symbol": "6432.TWO",
    "maxVol10d": 5553,
    "hasVolumeBurst": true
  },
  {
    "code": "6547",
    "name": "高端疫苗",
    "categories": [],
    "price": 51.8,
    "prevClose": 52.2,
    "open": 52.0,
    "high": 52.0,
    "low": 51.0,
    "volume": 1524,
    "ma5": 51.7,
    "ma10": 50.53,
    "ma20": 48.57,
    "ma60": 47.1,
    "vMa5": 2488,
    "vMa10": 3790,
    "high5d": 52.6,
    "high10d": 54.6,
    "high20d": 54.6,
    "sparkline": [
      46.85,
      47.4,
      52.1,
      48.9,
      51.6,
      51.9,
      52.0,
      50.6,
      52.2,
      51.8
    ],
    "k3d": [
      {
        "open": 51.6,
        "high": 52.4,
        "low": 51.2,
        "close": 52.0,
        "ma5": 51.3,
        "ma10": 48.78
      },
      {
        "open": 51.8,
        "high": 52.6,
        "low": 50.4,
        "close": 50.6,
        "ma5": 51.0,
        "ma10": 49.27
      },
      {
        "open": 51.4,
        "high": 52.6,
        "low": 50.4,
        "close": 52.2,
        "ma5": 51.66,
        "ma10": 49.93
      }
    ],
    "k5d": [
      {
        "open": 51.0,
        "high": 52.3,
        "low": 50.1,
        "close": 51.9,
        "ma5": 50.38,
        "ma10": 48.23
      },
      {
        "open": 51.6,
        "high": 52.4,
        "low": 51.2,
        "close": 52.0,
        "ma5": 51.3,
        "ma10": 48.78
      },
      {
        "open": 51.8,
        "high": 52.6,
        "low": 50.4,
        "close": 50.6,
        "ma5": 51.0,
        "ma10": 49.27
      },
      {
        "open": 51.4,
        "high": 52.6,
        "low": 50.4,
        "close": 52.2,
        "ma5": 51.66,
        "ma10": 49.93
      },
      {
        "open": 52.0,
        "high": 52.0,
        "low": 51.0,
        "close": 51.8,
        "ma5": 51.7,
        "ma10": 50.53
      }
    ],
    "symbol": "6547.TWO",
    "maxVol10d": 9876,
    "hasVolumeBurst": true
  },
  {
    "code": "3693",
    "name": "營邦",
    "categories": [],
    "price": 545.0,
    "prevClose": 552.0,
    "open": 570.0,
    "high": 573.0,
    "low": 538.0,
    "volume": 1971,
    "ma5": 518.2,
    "ma10": 512.65,
    "ma20": 490.23,
    "ma60": 513.58,
    "vMa5": 1028,
    "vMa10": 1051,
    "high5d": 573.0,
    "high10d": 573.0,
    "high20d": 573.0,
    "sparkline": [
      472.0,
      498.5,
      501.0,
      537.0,
      527.0,
      500.0,
      492.0,
      502.0,
      552.0,
      545.0
    ],
    "k3d": [
      {
        "open": 493.0,
        "high": 500.0,
        "low": 481.5,
        "close": 492.0,
        "ma5": 511.4,
        "ma10": 481.05
      },
      {
        "open": 492.5,
        "high": 510.0,
        "low": 492.5,
        "close": 502.0,
        "ma5": 511.6,
        "ma10": 488.3
      },
      {
        "open": 531.0,
        "high": 552.0,
        "low": 531.0,
        "close": 552.0,
        "ma5": 514.6,
        "ma10": 502.85
      }
    ],
    "k5d": [
      {
        "open": 526.0,
        "high": 529.0,
        "low": 499.5,
        "close": 500.0,
        "ma5": 512.7,
        "ma10": 476.45
      },
      {
        "open": 493.0,
        "high": 500.0,
        "low": 481.5,
        "close": 492.0,
        "ma5": 511.4,
        "ma10": 481.05
      },
      {
        "open": 492.5,
        "high": 510.0,
        "low": 492.5,
        "close": 502.0,
        "ma5": 511.6,
        "ma10": 488.3
      },
      {
        "open": 531.0,
        "high": 552.0,
        "low": 531.0,
        "close": 552.0,
        "ma5": 514.6,
        "ma10": 502.85
      },
      {
        "open": 570.0,
        "high": 573.0,
        "low": 538.0,
        "close": 545.0,
        "ma5": 518.2,
        "ma10": 512.65
      }
    ],
    "symbol": "3693.TWO",
    "maxVol10d": 2411,
    "hasVolumeBurst": true
  },
  {
    "code": "009815",
    "name": "大華美國MAG7+",
    "categories": [],
    "price": 11.68,
    "prevClose": 11.66,
    "open": 11.71,
    "high": 11.73,
    "low": 11.68,
    "volume": 837,
    "ma5": 11.72,
    "ma10": 11.66,
    "ma20": 11.38,
    "ma60": 11.31,
    "vMa5": 2331,
    "vMa10": 2724,
    "high5d": 11.84,
    "high10d": 11.84,
    "high20d": 11.84,
    "sparkline": [
      11.32,
      11.51,
      11.79,
      11.69,
      11.69,
      11.81,
      11.78,
      11.67,
      11.66,
      11.68
    ],
    "k3d": [
      {
        "open": 11.79,
        "high": 11.8,
        "low": 11.76,
        "close": 11.78,
        "ma5": 11.75,
        "ma10": 11.44
      },
      {
        "open": 11.7,
        "high": 11.71,
        "low": 11.66,
        "close": 11.67,
        "ma5": 11.73,
        "ma10": 11.52
      },
      {
        "open": 11.66,
        "high": 11.67,
        "low": 11.64,
        "close": 11.66,
        "ma5": 11.72,
        "ma10": 11.61
      }
    ],
    "k5d": [
      {
        "open": 11.74,
        "high": 11.84,
        "low": 11.72,
        "close": 11.81,
        "ma5": 11.7,
        "ma10": 11.34
      },
      {
        "open": 11.79,
        "high": 11.8,
        "low": 11.76,
        "close": 11.78,
        "ma5": 11.75,
        "ma10": 11.44
      },
      {
        "open": 11.7,
        "high": 11.71,
        "low": 11.66,
        "close": 11.67,
        "ma5": 11.73,
        "ma10": 11.52
      },
      {
        "open": 11.66,
        "high": 11.67,
        "low": 11.64,
        "close": 11.66,
        "ma5": 11.72,
        "ma10": 11.61
      },
      {
        "open": 11.71,
        "high": 11.73,
        "low": 11.68,
        "close": 11.68,
        "ma5": 11.72,
        "ma10": 11.66
      }
    ],
    "symbol": "009815.TWO",
    "maxVol10d": 5332,
    "hasVolumeBurst": true
  },
  {
    "code": "3490",
    "name": "單井",
    "categories": [],
    "price": 39.85,
    "prevClose": 36.85,
    "open": 37.85,
    "high": 40.45,
    "low": 37.2,
    "volume": 11144,
    "ma5": 34.76,
    "ma10": 31.92,
    "ma20": 29.5,
    "ma60": 32.59,
    "vMa5": 5591,
    "vMa10": 4070,
    "high5d": 40.45,
    "high10d": 40.45,
    "high20d": 40.45,
    "sparkline": [
      28.4,
      28.4,
      28.55,
      29.7,
      30.4,
      31.6,
      32.0,
      33.5,
      36.85,
      39.85
    ],
    "k3d": [
      {
        "open": 30.75,
        "high": 32.45,
        "low": 30.75,
        "close": 32.0,
        "ma5": 30.45,
        "ma10": 28.88
      },
      {
        "open": 32.25,
        "high": 33.95,
        "low": 32.05,
        "close": 33.5,
        "ma5": 31.44,
        "ma10": 29.64
      },
      {
        "open": 36.85,
        "high": 36.85,
        "low": 36.8,
        "close": 36.85,
        "ma5": 32.87,
        "ma10": 30.71
      }
    ],
    "k5d": [
      {
        "open": 31.05,
        "high": 31.75,
        "low": 30.55,
        "close": 31.6,
        "ma5": 29.73,
        "ma10": 28.34
      },
      {
        "open": 30.75,
        "high": 32.45,
        "low": 30.75,
        "close": 32.0,
        "ma5": 30.45,
        "ma10": 28.88
      },
      {
        "open": 32.25,
        "high": 33.95,
        "low": 32.05,
        "close": 33.5,
        "ma5": 31.44,
        "ma10": 29.64
      },
      {
        "open": 36.85,
        "high": 36.85,
        "low": 36.8,
        "close": 36.85,
        "ma5": 32.87,
        "ma10": 30.71
      },
      {
        "open": 37.85,
        "high": 40.45,
        "low": 37.2,
        "close": 39.85,
        "ma5": 34.76,
        "ma10": 31.92
      }
    ],
    "symbol": "3490.TWO",
    "maxVol10d": 11144,
    "hasVolumeBurst": true
  },
  {
    "code": "4533",
    "name": "協易機",
    "categories": [],
    "price": 28.5,
    "prevClose": 28.2,
    "open": 28.3,
    "high": 28.8,
    "low": 27.1,
    "volume": 1963,
    "ma5": 27.14,
    "ma10": 25.84,
    "ma20": 25.46,
    "ma60": 28.61,
    "vMa5": 1887,
    "vMa10": 1123,
    "high5d": 29.45,
    "high10d": 29.45,
    "high20d": 29.45,
    "sparkline": [
      23.75,
      24.35,
      25.05,
      24.9,
      24.6,
      25.5,
      26.7,
      26.8,
      28.2,
      28.5
    ],
    "k3d": [
      {
        "open": 27.0,
        "high": 27.25,
        "low": 25.75,
        "close": 26.7,
        "ma5": 25.35,
        "ma10": 24.39
      },
      {
        "open": 26.3,
        "high": 26.8,
        "low": 26.1,
        "close": 26.8,
        "ma5": 25.7,
        "ma10": 24.73
      },
      {
        "open": 27.05,
        "high": 29.45,
        "low": 27.0,
        "close": 28.2,
        "ma5": 26.36,
        "ma10": 25.33
      }
    ],
    "k5d": [
      {
        "open": 25.2,
        "high": 25.75,
        "low": 24.9,
        "close": 25.5,
        "ma5": 24.88,
        "ma10": 24.18
      },
      {
        "open": 27.0,
        "high": 27.25,
        "low": 25.75,
        "close": 26.7,
        "ma5": 25.35,
        "ma10": 24.39
      },
      {
        "open": 26.3,
        "high": 26.8,
        "low": 26.1,
        "close": 26.8,
        "ma5": 25.7,
        "ma10": 24.73
      },
      {
        "open": 27.05,
        "high": 29.45,
        "low": 27.0,
        "close": 28.2,
        "ma5": 26.36,
        "ma10": 25.33
      },
      {
        "open": 28.3,
        "high": 28.8,
        "low": 27.1,
        "close": 28.5,
        "ma5": 27.14,
        "ma10": 25.84
      }
    ],
    "symbol": "4533.TWO",
    "maxVol10d": 3325,
    "hasVolumeBurst": true
  },
  {
    "code": "6284",
    "name": "佳邦",
    "categories": [],
    "price": 77.8,
    "prevClose": 81.6,
    "open": 82.0,
    "high": 82.0,
    "low": 77.8,
    "volume": 784,
    "ma5": 78.62,
    "ma10": 77.31,
    "ma20": 76.75,
    "ma60": 94.25,
    "vMa5": 1128,
    "vMa10": 1141,
    "high5d": 83.4,
    "high10d": 83.4,
    "high20d": 92.4,
    "sparkline": [
      76.0,
      77.1,
      77.4,
      76.2,
      73.3,
      76.4,
      78.0,
      79.3,
      81.6,
      77.8
    ],
    "k3d": [
      {
        "open": 77.2,
        "high": 80.5,
        "low": 76.5,
        "close": 78.0,
        "ma5": 76.26,
        "ma10": 74.03
      },
      {
        "open": 78.7,
        "high": 80.6,
        "low": 78.5,
        "close": 79.3,
        "ma5": 76.64,
        "ma10": 75.04
      },
      {
        "open": 80.1,
        "high": 83.4,
        "low": 80.1,
        "close": 81.6,
        "ma5": 77.72,
        "ma10": 76.69
      }
    ],
    "k5d": [
      {
        "open": 75.2,
        "high": 78.0,
        "low": 74.5,
        "close": 76.4,
        "ma5": 76.08,
        "ma10": 73.55
      },
      {
        "open": 77.2,
        "high": 80.5,
        "low": 76.5,
        "close": 78.0,
        "ma5": 76.26,
        "ma10": 74.03
      },
      {
        "open": 78.7,
        "high": 80.6,
        "low": 78.5,
        "close": 79.3,
        "ma5": 76.64,
        "ma10": 75.04
      },
      {
        "open": 80.1,
        "high": 83.4,
        "low": 80.1,
        "close": 81.6,
        "ma5": 77.72,
        "ma10": 76.69
      },
      {
        "open": 82.0,
        "high": 82.0,
        "low": 77.8,
        "close": 77.8,
        "ma5": 78.62,
        "ma10": 77.31
      }
    ],
    "symbol": "6284.TWO",
    "maxVol10d": 1686,
    "hasVolumeBurst": false
  },
  {
    "code": "6716",
    "name": "應廣",
    "categories": [],
    "price": 121.5,
    "prevClose": 117.5,
    "open": 117.5,
    "high": 126.5,
    "low": 116.5,
    "volume": 1543,
    "ma5": 111.5,
    "ma10": 98.32,
    "ma20": 88.93,
    "ma60": 95.16,
    "vMa5": 1266,
    "vMa10": 724,
    "high5d": 126.5,
    "high10d": 126.5,
    "high20d": 126.5,
    "sparkline": [
      78.8,
      80.8,
      83.4,
      87.0,
      95.7,
      105.0,
      104.5,
      109.0,
      117.5,
      121.5
    ],
    "k3d": [
      {
        "open": 107.0,
        "high": 109.5,
        "low": 101.5,
        "close": 104.5,
        "ma5": 95.12,
        "ma10": 85.44
      },
      {
        "open": 105.0,
        "high": 111.0,
        "low": 104.5,
        "close": 109.0,
        "ma5": 100.24,
        "ma10": 89.24
      },
      {
        "open": 111.5,
        "high": 119.5,
        "low": 109.0,
        "close": 117.5,
        "ma5": 106.34,
        "ma10": 93.93
      }
    ],
    "k5d": [
      {
        "open": 105.0,
        "high": 105.0,
        "low": 105.0,
        "close": 105.0,
        "ma5": 90.38,
        "ma10": 82.67
      },
      {
        "open": 107.0,
        "high": 109.5,
        "low": 101.5,
        "close": 104.5,
        "ma5": 95.12,
        "ma10": 85.44
      },
      {
        "open": 105.0,
        "high": 111.0,
        "low": 104.5,
        "close": 109.0,
        "ma5": 100.24,
        "ma10": 89.24
      },
      {
        "open": 111.5,
        "high": 119.5,
        "low": 109.0,
        "close": 117.5,
        "ma5": 106.34,
        "ma10": 93.93
      },
      {
        "open": 117.5,
        "high": 126.5,
        "low": 116.5,
        "close": 121.5,
        "ma5": 111.5,
        "ma10": 98.32
      }
    ],
    "symbol": "6716.TWO",
    "maxVol10d": 1932,
    "hasVolumeBurst": true
  },
  {
    "code": "6179",
    "name": "亞通",
    "categories": [],
    "price": 26.8,
    "prevClose": 27.85,
    "open": 27.45,
    "high": 27.6,
    "low": 26.65,
    "volume": 1072,
    "ma5": 27.48,
    "ma10": 26.89,
    "ma20": 25.62,
    "ma60": 25.57,
    "vMa5": 1416,
    "vMa10": 1603,
    "high5d": 28.1,
    "high10d": 28.15,
    "high20d": 28.45,
    "sparkline": [
      24.65,
      25.8,
      27.65,
      26.35,
      27.05,
      27.9,
      27.5,
      27.35,
      27.85,
      26.8
    ],
    "k3d": [
      {
        "open": 28.0,
        "high": 28.0,
        "low": 27.5,
        "close": 27.5,
        "ma5": 27.29,
        "ma10": 25.71
      },
      {
        "open": 27.6,
        "high": 27.85,
        "low": 27.3,
        "close": 27.35,
        "ma5": 27.23,
        "ma10": 26.13
      },
      {
        "open": 27.55,
        "high": 28.1,
        "low": 27.3,
        "close": 27.85,
        "ma5": 27.53,
        "ma10": 26.63
      }
    ],
    "k5d": [
      {
        "open": 27.1,
        "high": 28.1,
        "low": 27.1,
        "close": 27.9,
        "ma5": 26.95,
        "ma10": 25.36
      },
      {
        "open": 28.0,
        "high": 28.0,
        "low": 27.5,
        "close": 27.5,
        "ma5": 27.29,
        "ma10": 25.71
      },
      {
        "open": 27.6,
        "high": 27.85,
        "low": 27.3,
        "close": 27.35,
        "ma5": 27.23,
        "ma10": 26.13
      },
      {
        "open": 27.55,
        "high": 28.1,
        "low": 27.3,
        "close": 27.85,
        "ma5": 27.53,
        "ma10": 26.63
      },
      {
        "open": 27.45,
        "high": 27.6,
        "low": 26.65,
        "close": 26.8,
        "ma5": 27.48,
        "ma10": 26.89
      }
    ],
    "symbol": "6179.TWO",
    "maxVol10d": 4149,
    "hasVolumeBurst": true
  },
  {
    "code": "8942",
    "name": "森鉅",
    "categories": [],
    "price": 43.3,
    "prevClose": 42.8,
    "open": 42.7,
    "high": 43.4,
    "low": 42.2,
    "volume": 566,
    "ma5": 40.89,
    "ma10": 39.26,
    "ma20": 38.34,
    "ma60": 40.07,
    "vMa5": 589,
    "vMa10": 354,
    "high5d": 43.45,
    "high10d": 43.45,
    "high20d": 43.45,
    "sparkline": [
      36.9,
      37.2,
      37.6,
      37.9,
      38.6,
      38.85,
      39.45,
      40.05,
      42.8,
      43.3
    ],
    "k3d": [
      {
        "open": 38.45,
        "high": 40.0,
        "low": 38.45,
        "close": 39.45,
        "ma5": 38.48,
        "ma10": 37.51
      },
      {
        "open": 39.45,
        "high": 40.65,
        "low": 39.45,
        "close": 40.05,
        "ma5": 38.97,
        "ma10": 37.91
      },
      {
        "open": 41.9,
        "high": 43.45,
        "low": 41.9,
        "close": 42.8,
        "ma5": 39.95,
        "ma10": 38.59
      }
    ],
    "k5d": [
      {
        "open": 38.6,
        "high": 38.85,
        "low": 38.45,
        "close": 38.85,
        "ma5": 38.03,
        "ma10": 37.24
      },
      {
        "open": 38.45,
        "high": 40.0,
        "low": 38.45,
        "close": 39.45,
        "ma5": 38.48,
        "ma10": 37.51
      },
      {
        "open": 39.45,
        "high": 40.65,
        "low": 39.45,
        "close": 40.05,
        "ma5": 38.97,
        "ma10": 37.91
      },
      {
        "open": 41.9,
        "high": 43.45,
        "low": 41.9,
        "close": 42.8,
        "ma5": 39.95,
        "ma10": 38.59
      },
      {
        "open": 42.7,
        "high": 43.4,
        "low": 42.2,
        "close": 43.3,
        "ma5": 40.89,
        "ma10": 39.26
      }
    ],
    "symbol": "8942.TWO",
    "maxVol10d": 1672,
    "hasVolumeBurst": true
  },
  {
    "code": "4128",
    "name": "中天",
    "categories": [],
    "price": 14.75,
    "prevClose": 15.0,
    "open": 15.1,
    "high": 15.1,
    "low": 14.6,
    "volume": 932,
    "ma5": 14.72,
    "ma10": 14.64,
    "ma20": 14.68,
    "ma60": 15.23,
    "vMa5": 1209,
    "vMa10": 1315,
    "high5d": 15.15,
    "high10d": 15.15,
    "high20d": 16.2,
    "sparkline": [
      14.5,
      14.65,
      14.55,
      14.4,
      14.7,
      14.5,
      14.7,
      14.65,
      15.0,
      14.75
    ],
    "k3d": [
      {
        "open": 14.95,
        "high": 15.0,
        "low": 14.65,
        "close": 14.7,
        "ma5": 14.57,
        "ma10": 14.35
      },
      {
        "open": 14.8,
        "high": 15.05,
        "low": 14.6,
        "close": 14.65,
        "ma5": 14.59,
        "ma10": 14.41
      },
      {
        "open": 14.75,
        "high": 15.15,
        "low": 14.7,
        "close": 15.0,
        "ma5": 14.71,
        "ma10": 14.55
      }
    ],
    "k5d": [
      {
        "open": 14.8,
        "high": 14.8,
        "low": 14.45,
        "close": 14.5,
        "ma5": 14.56,
        "ma10": 14.33
      },
      {
        "open": 14.95,
        "high": 15.0,
        "low": 14.65,
        "close": 14.7,
        "ma5": 14.57,
        "ma10": 14.35
      },
      {
        "open": 14.8,
        "high": 15.05,
        "low": 14.6,
        "close": 14.65,
        "ma5": 14.59,
        "ma10": 14.41
      },
      {
        "open": 14.75,
        "high": 15.15,
        "low": 14.7,
        "close": 15.0,
        "ma5": 14.71,
        "ma10": 14.55
      },
      {
        "open": 15.1,
        "high": 15.1,
        "low": 14.6,
        "close": 14.75,
        "ma5": 14.72,
        "ma10": 14.64
      }
    ],
    "symbol": "4128.TWO",
    "maxVol10d": 3141,
    "hasVolumeBurst": true
  },
  {
    "code": "4973",
    "name": "廣穎",
    "categories": [],
    "price": 161.0,
    "prevClose": 163.5,
    "open": 165.0,
    "high": 168.5,
    "low": 160.5,
    "volume": 2199,
    "ma5": 160.2,
    "ma10": 155.05,
    "ma20": 144.85,
    "ma60": 159.76,
    "vMa5": 2658,
    "vMa10": 2950,
    "high5d": 168.5,
    "high10d": 168.5,
    "high20d": 168.5,
    "sparkline": [
      139.0,
      144.0,
      148.0,
      162.5,
      156.0,
      162.0,
      156.0,
      158.5,
      163.5,
      161.0
    ],
    "k3d": [
      {
        "open": 160.5,
        "high": 160.5,
        "low": 152.0,
        "close": 156.0,
        "ma5": 156.9,
        "ma10": 143.65
      },
      {
        "open": 156.0,
        "high": 160.0,
        "low": 155.5,
        "close": 158.5,
        "ma5": 159.0,
        "ma10": 147.25
      },
      {
        "open": 165.0,
        "high": 167.0,
        "low": 162.5,
        "close": 163.5,
        "ma5": 159.2,
        "ma10": 151.85
      }
    ],
    "k5d": [
      {
        "open": 160.0,
        "high": 165.0,
        "low": 158.5,
        "close": 162.0,
        "ma5": 154.5,
        "ma10": 140.95
      },
      {
        "open": 160.5,
        "high": 160.5,
        "low": 152.0,
        "close": 156.0,
        "ma5": 156.9,
        "ma10": 143.65
      },
      {
        "open": 156.0,
        "high": 160.0,
        "low": 155.5,
        "close": 158.5,
        "ma5": 159.0,
        "ma10": 147.25
      },
      {
        "open": 165.0,
        "high": 167.0,
        "low": 162.5,
        "close": 163.5,
        "ma5": 159.2,
        "ma10": 151.85
      },
      {
        "open": 165.0,
        "high": 168.5,
        "low": 160.5,
        "close": 161.0,
        "ma5": 160.2,
        "ma10": 155.05
      }
    ],
    "symbol": "4973.TWO",
    "maxVol10d": 5236,
    "hasVolumeBurst": true
  },
  {
    "code": "6509",
    "name": "聚和",
    "categories": [],
    "price": 47.15,
    "prevClose": 49.0,
    "open": 49.35,
    "high": 49.35,
    "low": 47.05,
    "volume": 998,
    "ma5": 48.01,
    "ma10": 46.84,
    "ma20": 46.17,
    "ma60": 48.88,
    "vMa5": 1002,
    "vMa10": 984,
    "high5d": 49.4,
    "high10d": 49.4,
    "high20d": 51.4,
    "sparkline": [
      43.7,
      44.25,
      45.85,
      47.0,
      47.5,
      47.7,
      47.7,
      48.5,
      49.0,
      47.15
    ],
    "k3d": [
      {
        "open": 47.7,
        "high": 48.25,
        "low": 47.1,
        "close": 47.7,
        "ma5": 47.15,
        "ma10": 45.04
      },
      {
        "open": 47.5,
        "high": 48.6,
        "low": 47.5,
        "close": 48.5,
        "ma5": 47.68,
        "ma10": 45.64
      },
      {
        "open": 48.7,
        "high": 49.4,
        "low": 48.6,
        "close": 49.0,
        "ma5": 48.08,
        "ma10": 46.42
      }
    ],
    "k5d": [
      {
        "open": 48.1,
        "high": 48.2,
        "low": 47.3,
        "close": 47.7,
        "ma5": 46.46,
        "ma10": 44.67
      },
      {
        "open": 47.7,
        "high": 48.25,
        "low": 47.1,
        "close": 47.7,
        "ma5": 47.15,
        "ma10": 45.04
      },
      {
        "open": 47.5,
        "high": 48.6,
        "low": 47.5,
        "close": 48.5,
        "ma5": 47.68,
        "ma10": 45.64
      },
      {
        "open": 48.7,
        "high": 49.4,
        "low": 48.6,
        "close": 49.0,
        "ma5": 48.08,
        "ma10": 46.42
      },
      {
        "open": 49.35,
        "high": 49.35,
        "low": 47.05,
        "close": 47.15,
        "ma5": 48.01,
        "ma10": 46.84
      }
    ],
    "symbol": "6509.TWO",
    "maxVol10d": 1322,
    "hasVolumeBurst": false
  },
  {
    "code": "6217",
    "name": "中探針",
    "categories": [],
    "price": 165.0,
    "prevClose": 168.5,
    "open": 166.0,
    "high": 172.0,
    "low": 160.0,
    "volume": 369,
    "ma5": 161.1,
    "ma10": 153.5,
    "ma20": 148.2,
    "ma60": 219.86,
    "vMa5": 1524,
    "vMa10": 1168,
    "high5d": 173.0,
    "high10d": 173.0,
    "high20d": 224.5,
    "sparkline": [
      122.0,
      134.0,
      147.0,
      161.5,
      165.0,
      165.0,
      153.0,
      154.0,
      168.5,
      165.0
    ],
    "k3d": [
      {
        "open": 166.5,
        "high": 166.5,
        "low": 152.0,
        "close": 153.0,
        "ma5": 158.3,
        "ma10": 137.25
      },
      {
        "open": 149.0,
        "high": 156.0,
        "low": 149.0,
        "close": 154.0,
        "ma5": 159.7,
        "ma10": 141.4
      },
      {
        "open": 160.0,
        "high": 169.0,
        "low": 160.0,
        "close": 168.5,
        "ma5": 161.1,
        "ma10": 148.1
      }
    ],
    "k5d": [
      {
        "open": 165.0,
        "high": 173.0,
        "low": 161.0,
        "close": 165.0,
        "ma5": 154.5,
        "ma10": 134.4
      },
      {
        "open": 166.5,
        "high": 166.5,
        "low": 152.0,
        "close": 153.0,
        "ma5": 158.3,
        "ma10": 137.25
      },
      {
        "open": 149.0,
        "high": 156.0,
        "low": 149.0,
        "close": 154.0,
        "ma5": 159.7,
        "ma10": 141.4
      },
      {
        "open": 160.0,
        "high": 169.0,
        "low": 160.0,
        "close": 168.5,
        "ma5": 161.1,
        "ma10": 148.1
      },
      {
        "open": 166.0,
        "high": 172.0,
        "low": 160.0,
        "close": 165.0,
        "ma5": 161.1,
        "ma10": 153.5
      }
    ],
    "symbol": "6217.TWO",
    "maxVol10d": 4812,
    "hasVolumeBurst": true
  },
  {
    "code": "6840",
    "name": "東研信超",
    "categories": [],
    "price": 82.2,
    "prevClose": 75.6,
    "open": 82.8,
    "high": 83.1,
    "low": 79.5,
    "volume": 2051,
    "ma5": 72.12,
    "ma10": 68.6,
    "ma20": 64.17,
    "ma60": 64.71,
    "vMa5": 707,
    "vMa10": 442,
    "high5d": 83.1,
    "high10d": 83.1,
    "high20d": 83.1,
    "sparkline": [
      61.0,
      62.4,
      68.6,
      66.8,
      66.6,
      66.0,
      68.0,
      68.8,
      75.6,
      82.2
    ],
    "k3d": [
      {
        "open": 66.9,
        "high": 68.3,
        "low": 65.5,
        "close": 68.0,
        "ma5": 67.2,
        "ma10": 63.52
      },
      {
        "open": 68.6,
        "high": 70.8,
        "low": 67.3,
        "close": 68.8,
        "ma5": 67.24,
        "ma10": 64.62
      },
      {
        "open": 72.0,
        "high": 75.6,
        "low": 72.0,
        "close": 75.6,
        "ma5": 69.0,
        "ma10": 66.38
      }
    ],
    "k5d": [
      {
        "open": 66.5,
        "high": 67.7,
        "low": 65.8,
        "close": 66.0,
        "ma5": 66.08,
        "ma10": 62.62
      },
      {
        "open": 66.9,
        "high": 68.3,
        "low": 65.5,
        "close": 68.0,
        "ma5": 67.2,
        "ma10": 63.52
      },
      {
        "open": 68.6,
        "high": 70.8,
        "low": 67.3,
        "close": 68.8,
        "ma5": 67.24,
        "ma10": 64.62
      },
      {
        "open": 72.0,
        "high": 75.6,
        "low": 72.0,
        "close": 75.6,
        "ma5": 69.0,
        "ma10": 66.38
      },
      {
        "open": 82.8,
        "high": 83.1,
        "low": 79.5,
        "close": 82.2,
        "ma5": 72.12,
        "ma10": 68.6
      }
    ],
    "symbol": "6840.TWO",
    "maxVol10d": 2051,
    "hasVolumeBurst": true
  },
  {
    "code": "6584",
    "name": "南俊國際",
    "categories": [],
    "price": 613.0,
    "prevClose": 597.0,
    "open": 656.0,
    "high": 656.0,
    "low": 603.0,
    "volume": 2432,
    "ma5": 562.6,
    "ma10": 527.75,
    "ma20": 513.58,
    "ma60": 614.66,
    "vMa5": 1304,
    "vMa10": 1003,
    "high5d": 656.0,
    "high10d": 656.0,
    "high20d": 668.0,
    "sparkline": [
      452.0,
      475.5,
      487.0,
      500.0,
      550.0,
      522.0,
      538.0,
      543.0,
      597.0,
      613.0
    ],
    "k3d": [
      {
        "open": 530.0,
        "high": 540.0,
        "low": 520.0,
        "close": 538.0,
        "ma5": 519.4,
        "ma10": 479.15
      },
      {
        "open": 553.0,
        "high": 566.0,
        "low": 539.0,
        "close": 543.0,
        "ma5": 530.6,
        "ma10": 490.05
      },
      {
        "open": 580.0,
        "high": 597.0,
        "low": 573.0,
        "close": 597.0,
        "ma5": 550.0,
        "ma10": 509.0
      }
    ],
    "k5d": [
      {
        "open": 570.0,
        "high": 570.0,
        "low": 515.0,
        "close": 522.0,
        "ma5": 506.9,
        "ma10": 473.55
      },
      {
        "open": 530.0,
        "high": 540.0,
        "low": 520.0,
        "close": 538.0,
        "ma5": 519.4,
        "ma10": 479.15
      },
      {
        "open": 553.0,
        "high": 566.0,
        "low": 539.0,
        "close": 543.0,
        "ma5": 530.6,
        "ma10": 490.05
      },
      {
        "open": 580.0,
        "high": 597.0,
        "low": 573.0,
        "close": 597.0,
        "ma5": 550.0,
        "ma10": 509.0
      },
      {
        "open": 656.0,
        "high": 656.0,
        "low": 603.0,
        "close": 613.0,
        "ma5": 562.6,
        "ma10": 527.75
      }
    ],
    "symbol": "6584.TWO",
    "maxVol10d": 2432,
    "hasVolumeBurst": true
  },
  {
    "code": "3680",
    "name": "家登",
    "categories": [],
    "price": 471.5,
    "prevClose": 472.0,
    "open": 478.0,
    "high": 486.5,
    "low": 466.5,
    "volume": 859,
    "ma5": 457.4,
    "ma10": 447.55,
    "ma20": 442.15,
    "ma60": 495.83,
    "vMa5": 858,
    "vMa10": 883,
    "high5d": 486.5,
    "high10d": 486.5,
    "high20d": 534.0,
    "sparkline": [
      419.5,
      430.0,
      447.5,
      453.0,
      438.5,
      446.0,
      445.0,
      452.5,
      472.0,
      471.5
    ],
    "k3d": [
      {
        "open": 447.0,
        "high": 459.0,
        "low": 445.0,
        "close": 445.0,
        "ma5": 446.0,
        "ma10": 423.3
      },
      {
        "open": 452.0,
        "high": 459.5,
        "low": 450.0,
        "close": 452.5,
        "ma5": 447.0,
        "ma10": 430.05
      },
      {
        "open": 460.0,
        "high": 480.0,
        "low": 459.0,
        "close": 472.0,
        "ma5": 450.8,
        "ma10": 440.3
      }
    ],
    "k5d": [
      {
        "open": 442.5,
        "high": 451.5,
        "low": 442.5,
        "close": 446.0,
        "ma5": 443.0,
        "ma10": 419.85
      },
      {
        "open": 447.0,
        "high": 459.0,
        "low": 445.0,
        "close": 445.0,
        "ma5": 446.0,
        "ma10": 423.3
      },
      {
        "open": 452.0,
        "high": 459.5,
        "low": 450.0,
        "close": 452.5,
        "ma5": 447.0,
        "ma10": 430.05
      },
      {
        "open": 460.0,
        "high": 480.0,
        "low": 459.0,
        "close": 472.0,
        "ma5": 450.8,
        "ma10": 440.3
      },
      {
        "open": 478.0,
        "high": 486.5,
        "low": 466.5,
        "close": 471.5,
        "ma5": 457.4,
        "ma10": 447.55
      }
    ],
    "symbol": "3680.TWO",
    "maxVol10d": 1314,
    "hasVolumeBurst": true
  },
  {
    "code": "6829",
    "name": "千附精密",
    "categories": [],
    "price": 244.0,
    "prevClose": 222.0,
    "open": 225.0,
    "high": 244.0,
    "low": 218.5,
    "volume": 2614,
    "ma5": 216.6,
    "ma10": 201.35,
    "ma20": 194.45,
    "ma60": 209.53,
    "vMa5": 1292,
    "vMa10": 901,
    "high5d": 244.0,
    "high10d": 244.0,
    "high20d": 256.5,
    "sparkline": [
      173.5,
      181.5,
      188.0,
      196.0,
      191.5,
      200.0,
      206.0,
      211.0,
      222.0,
      244.0
    ],
    "k3d": [
      {
        "open": 204.0,
        "high": 207.0,
        "low": 197.5,
        "close": 206.0,
        "ma5": 196.3,
        "ma10": 183.6
      },
      {
        "open": 205.0,
        "high": 214.0,
        "low": 204.0,
        "close": 211.0,
        "ma5": 200.9,
        "ma10": 187.8
      },
      {
        "open": 212.5,
        "high": 226.0,
        "low": 212.5,
        "close": 222.0,
        "ma5": 206.1,
        "ma10": 194.1
      }
    ],
    "k5d": [
      {
        "open": 194.0,
        "high": 201.0,
        "low": 188.5,
        "close": 200.0,
        "ma5": 191.4,
        "ma10": 181.0
      },
      {
        "open": 204.0,
        "high": 207.0,
        "low": 197.5,
        "close": 206.0,
        "ma5": 196.3,
        "ma10": 183.6
      },
      {
        "open": 205.0,
        "high": 214.0,
        "low": 204.0,
        "close": 211.0,
        "ma5": 200.9,
        "ma10": 187.8
      },
      {
        "open": 212.5,
        "high": 226.0,
        "low": 212.5,
        "close": 222.0,
        "ma5": 206.1,
        "ma10": 194.1
      },
      {
        "open": 225.0,
        "high": 244.0,
        "low": 218.5,
        "close": 244.0,
        "ma5": 216.6,
        "ma10": 201.35
      }
    ],
    "symbol": "6829.TWO",
    "maxVol10d": 2614,
    "hasVolumeBurst": true
  },
  {
    "code": "6419",
    "name": "京晨科",
    "categories": [],
    "price": 165.0,
    "prevClose": 167.5,
    "open": 169.0,
    "high": 169.5,
    "low": 160.0,
    "volume": 437,
    "ma5": 156.4,
    "ma10": 146.85,
    "ma20": 138.25,
    "ma60": 142.31,
    "vMa5": 526,
    "vMa10": 421,
    "high5d": 169.5,
    "high10d": 169.5,
    "high20d": 169.5,
    "sparkline": [
      128.0,
      133.0,
      136.0,
      149.5,
      140.0,
      145.0,
      151.5,
      153.0,
      167.5,
      165.0
    ],
    "k3d": [
      {
        "open": 153.5,
        "high": 154.0,
        "low": 148.0,
        "close": 151.5,
        "ma5": 144.4,
        "ma10": 134.05
      },
      {
        "open": 151.5,
        "high": 157.0,
        "low": 151.0,
        "close": 153.0,
        "ma5": 147.8,
        "ma10": 137.3
      },
      {
        "open": 156.0,
        "high": 168.0,
        "low": 156.0,
        "close": 167.5,
        "ma5": 151.4,
        "ma10": 142.7
      }
    ],
    "k5d": [
      {
        "open": 141.0,
        "high": 147.5,
        "low": 141.0,
        "close": 145.0,
        "ma5": 140.7,
        "ma10": 131.4
      },
      {
        "open": 153.5,
        "high": 154.0,
        "low": 148.0,
        "close": 151.5,
        "ma5": 144.4,
        "ma10": 134.05
      },
      {
        "open": 151.5,
        "high": 157.0,
        "low": 151.0,
        "close": 153.0,
        "ma5": 147.8,
        "ma10": 137.3
      },
      {
        "open": 156.0,
        "high": 168.0,
        "low": 156.0,
        "close": 167.5,
        "ma5": 151.4,
        "ma10": 142.7
      },
      {
        "open": 169.0,
        "high": 169.5,
        "low": 160.0,
        "close": 165.0,
        "ma5": 156.4,
        "ma10": 146.85
      }
    ],
    "symbol": "6419.TWO",
    "maxVol10d": 892,
    "hasVolumeBurst": true
  }
];