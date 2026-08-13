/**
 * 台股盤中波段選股工具 - 數據庫
 * 資料日期：2026-08-11 Yahoo Finance API 即時收盤與均線數據 (精確昨收與漲跌點數)
 */

// 1. 0050 最新 50 持股名單 (數據日期: 2026/08/11, 資料來源: 元大投信 / TWSE 證交所 API)
const HOLDINGS_0050 = {
  "date": "2026/08/12",
  "sourceName": "MoneyDJ 理財網 (轉載元大 0050 官方持股)",
  "sourceUrl": "https://www.moneydj.com/ETF/X/Basic/Basic0007B.xdjhtm?etfid=0050.TW",
  "stocks": [
    {
      "code": "2330",
      "name": "台積電",
      "weight": "58.17%"
    },
    {
      "code": "2454",
      "name": "聯發科",
      "weight": "5.83%"
    },
    {
      "code": "2308",
      "name": "台達電",
      "weight": "3.41%"
    },
    {
      "code": "2317",
      "name": "鴻海",
      "weight": "3.25%"
    },
    {
      "code": "3711",
      "name": "日月光投控",
      "weight": "2.03%"
    },
    {
      "code": "2383",
      "name": "台光電",
      "weight": "1.64%"
    },
    {
      "code": "2303",
      "name": "聯電",
      "weight": "1.41%"
    },
    {
      "code": "3037",
      "name": "欣興",
      "weight": "1.30%"
    },
    {
      "code": "2891",
      "name": "中信金",
      "weight": "1.16%"
    },
    {
      "code": "2345",
      "name": "智邦",
      "weight": "1.08%"
    },
    {
      "code": "2881",
      "name": "富邦金",
      "weight": "1.05%"
    },
    {
      "code": "2882",
      "name": "國泰金",
      "weight": "0.94%"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "weight": "0.93%"
    },
    {
      "code": "1303",
      "name": "南亞",
      "weight": "0.92%"
    },
    {
      "code": "3017",
      "name": "奇鋐",
      "weight": "0.92%"
    },
    {
      "code": "2382",
      "name": "廣達",
      "weight": "0.85%"
    },
    {
      "code": "2887",
      "name": "台新新光金",
      "weight": "0.82%"
    },
    {
      "code": "2360",
      "name": "致茂",
      "weight": "0.80%"
    },
    {
      "code": "2885",
      "name": "元大金",
      "weight": "0.75%"
    },
    {
      "code": "2059",
      "name": "川湖",
      "weight": "0.65%"
    },
    {
      "code": "6669",
      "name": "緯穎",
      "weight": "0.62%"
    },
    {
      "code": "3231",
      "name": "緯創",
      "weight": "0.58%"
    },
    {
      "code": "2357",
      "name": "華碩",
      "weight": "0.57%"
    },
    {
      "code": "2886",
      "name": "兆豐金",
      "weight": "0.57%"
    },
    {
      "code": "2884",
      "name": "玉山金",
      "weight": "0.55%"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "weight": "0.54%"
    },
    {
      "code": "2344",
      "name": "華邦電",
      "weight": "0.54%"
    },
    {
      "code": "2890",
      "name": "永豐金",
      "weight": "0.52%"
    },
    {
      "code": "2412",
      "name": "中華電",
      "weight": "0.51%"
    },
    {
      "code": "2301",
      "name": "光寶科",
      "weight": "0.50%"
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
      "weight": "0.41%"
    },
    {
      "code": "2880",
      "name": "華南金",
      "weight": "0.39%"
    },
    {
      "code": "3653",
      "name": "健策",
      "weight": "0.38%"
    },
    {
      "code": "3665",
      "name": "貿聯-KY",
      "weight": "0.38%"
    },
    {
      "code": "2892",
      "name": "第一金",
      "weight": "0.37%"
    },
    {
      "code": "1216",
      "name": "統一",
      "weight": "0.37%"
    },
    {
      "code": "7769",
      "name": "鴻勁",
      "weight": "0.36%"
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
      "weight": "0.29%"
    },
    {
      "code": "8046",
      "name": "南電",
      "weight": "0.27%"
    },
    {
      "code": "5880",
      "name": "合庫金",
      "weight": "0.26%"
    },
    {
      "code": "2603",
      "name": "長榮",
      "weight": "0.23%"
    },
    {
      "code": "4904",
      "name": "遠傳",
      "weight": "0.18%"
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
      "code": "1303",
      "name": "南亞",
      "volume": 96042,
      "market": "上市"
    },
    {
      "code": "2317",
      "name": "鴻海",
      "volume": 95804,
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
      "code": "2356",
      "name": "英業達",
      "volume": 71471,
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
      "code": "00961",
      "name": "FT臺灣永續高息",
      "volume": 46687,
      "market": "上市"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "volume": 46605,
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
      "buyVol": 3837,
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
      "buyVol": 1705,
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
      "code": "8046",
      "name": "南電",
      "buyVol": 1255,
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
      "buyVol": 1043,
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
    },
    {
      "code": "2317",
      "name": "鴻海",
      "buyVol": 573,
      "market": "上市"
    },
    {
      "code": "6442",
      "name": "光聖",
      "buyVol": 562,
      "market": "上市"
    },
    {
      "code": "3450",
      "name": "聯鈞",
      "buyVol": 550,
      "market": "上市"
    },
    {
      "code": "3211",
      "name": "順達",
      "buyVol": 8574,
      "market": "上櫃"
    },
    {
      "code": "1815",
      "name": "富喬",
      "buyVol": 6676,
      "market": "上櫃"
    },
    {
      "code": "3264",
      "name": "欣銓",
      "buyVol": 4359,
      "market": "上櫃"
    },
    {
      "code": "4979",
      "name": "華星光",
      "buyVol": 3247,
      "market": "上櫃"
    },
    {
      "code": "5347",
      "name": "世界",
      "buyVol": 1985,
      "market": "上櫃"
    },
    {
      "code": "009814",
      "name": "富邦標普500",
      "buyVol": 1700,
      "market": "上櫃"
    },
    {
      "code": "3105",
      "name": "穩懋",
      "buyVol": 1167,
      "market": "上櫃"
    },
    {
      "code": "00695B",
      "name": "富邦美債7-10",
      "buyVol": 750,
      "market": "上櫃"
    },
    {
      "code": "3081",
      "name": "聯亞",
      "buyVol": 659,
      "market": "上櫃"
    },
    {
      "code": "5904",
      "name": "寶雅*",
      "buyVol": 580,
      "market": "上櫃"
    },
    {
      "code": "6147",
      "name": "頎邦",
      "buyVol": 579,
      "market": "上櫃"
    },
    {
      "code": "6510",
      "name": "精測",
      "buyVol": 317,
      "market": "上櫃"
    },
    {
      "code": "3529",
      "name": "力旺",
      "buyVol": 258,
      "market": "上櫃"
    },
    {
      "code": "5274",
      "name": "信驊",
      "buyVol": 87,
      "market": "上櫃"
    },
    {
      "code": "4749",
      "name": "新應材",
      "buyVol": 65,
      "market": "上櫃"
    },
    {
      "code": "00980D",
      "name": "主動聯博投等入息",
      "buyVol": 64,
      "market": "上櫃"
    },
    {
      "code": "3131",
      "name": "弘塑",
      "buyVol": 61,
      "market": "上櫃"
    },
    {
      "code": "006201",
      "name": "元大富櫃50",
      "buyVol": 35,
      "market": "上櫃"
    },
    {
      "code": "4123",
      "name": "晟德",
      "buyVol": 33,
      "market": "上櫃"
    },
    {
      "code": "6121",
      "name": "新普",
      "buyVol": 30,
      "market": "上櫃"
    },
    {
      "code": "3491",
      "name": "昇達科",
      "buyVol": 26,
      "market": "上櫃"
    },
    {
      "code": "3293",
      "name": "鈊象",
      "buyVol": 20,
      "market": "上櫃"
    },
    {
      "code": "6138",
      "name": "茂達",
      "buyVol": 10,
      "market": "上櫃"
    },
    {
      "code": "8436",
      "name": "大江",
      "buyVol": 9,
      "market": "上櫃"
    },
    {
      "code": "1785",
      "name": "光洋科",
      "buyVol": 9,
      "market": "上櫃"
    },
    {
      "code": "4966",
      "name": "譜瑞-KY",
      "buyVol": 8,
      "market": "上櫃"
    },
    {
      "code": "6274",
      "name": "台燿",
      "buyVol": 3,
      "market": "上櫃"
    },
    {
      "code": "5289",
      "name": "宜鼎",
      "buyVol": 2,
      "market": "上櫃"
    },
    {
      "code": "3324",
      "name": "雙鴻",
      "buyVol": 1,
      "market": "上櫃"
    }
  ]
};

const MAJOR_BUY_1D = {
  "date": "08/12",
  "sourceName": "富邦證券 / 主力買超近 1 日 (上市 Top 50 + 上櫃 Top 50)",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/Z/ZG/ZG_F.djhtm",
  "stocks": [
    {
      "code": "00403A",
      "name": "主動統一升級50",
      "buyVol": 223077,
      "market": "上市"
    },
    {
      "code": "6770",
      "name": "力積電",
      "buyVol": 161135,
      "market": "上市"
    },
    {
      "code": "2324",
      "name": "仁寶",
      "buyVol": 69314,
      "market": "上市"
    },
    {
      "code": "00981A",
      "name": "主動統一台股增長",
      "buyVol": 68968,
      "market": "上市"
    },
    {
      "code": "00685L",
      "name": "群益臺灣加權正2",
      "buyVol": 59794,
      "market": "上市"
    },
    {
      "code": "00631L",
      "name": "元大台灣50正2",
      "buyVol": 57885,
      "market": "上市"
    },
    {
      "code": "00405A",
      "name": "主動富邦台灣龍耀",
      "buyVol": 38471,
      "market": "上市"
    },
    {
      "code": "1605",
      "name": "華新",
      "buyVol": 34504,
      "market": "上市"
    },
    {
      "code": "00407A",
      "name": "主動凱基台灣",
      "buyVol": 32553,
      "market": "上市"
    },
    {
      "code": "2317",
      "name": "鴻海",
      "buyVol": 29248,
      "market": "上市"
    },
    {
      "code": "2356",
      "name": "英業達",
      "buyVol": 22768,
      "market": "上市"
    },
    {
      "code": "0050",
      "name": "元大台灣50",
      "buyVol": 21221,
      "market": "上市"
    },
    {
      "code": "009816",
      "name": "凱基台灣TOP50",
      "buyVol": 20855,
      "market": "上市"
    },
    {
      "code": "00400A",
      "name": "主動國泰動能高息",
      "buyVol": 17514,
      "market": "上市"
    },
    {
      "code": "1717",
      "name": "長興",
      "buyVol": 17301,
      "market": "上市"
    },
    {
      "code": "00991A",
      "name": "主動復華未來50",
      "buyVol": 16917,
      "market": "上市"
    },
    {
      "code": "2377",
      "name": "微星",
      "buyVol": 16286,
      "market": "上市"
    },
    {
      "code": "2002",
      "name": "中鋼",
      "buyVol": 14080,
      "market": "上市"
    },
    {
      "code": "1718",
      "name": "中纖",
      "buyVol": 13665,
      "market": "上市"
    },
    {
      "code": "00992A",
      "name": "主動群益科技創新",
      "buyVol": 13321,
      "market": "上市"
    },
    {
      "code": "00999A",
      "name": "主動野村臺灣高息",
      "buyVol": 13079,
      "market": "上市"
    },
    {
      "code": "0056",
      "name": "元大高股息",
      "buyVol": 12747,
      "market": "上市"
    },
    {
      "code": "009821",
      "name": "野村稀土關鍵資源",
      "buyVol": 9658,
      "market": "上市"
    },
    {
      "code": "3706",
      "name": "神達",
      "buyVol": 8802,
      "market": "上市"
    },
    {
      "code": "2353",
      "name": "宏碁",
      "buyVol": 8122,
      "market": "上市"
    },
    {
      "code": "2337",
      "name": "旺宏",
      "buyVol": 7911,
      "market": "上市"
    },
    {
      "code": "00940",
      "name": "元大台灣價值高息",
      "buyVol": 7675,
      "market": "上市"
    },
    {
      "code": "1608",
      "name": "華榮",
      "buyVol": 7656,
      "market": "上市"
    },
    {
      "code": "3231",
      "name": "緯創",
      "buyVol": 7624,
      "market": "上市"
    },
    {
      "code": "0052",
      "name": "富邦科技",
      "buyVol": 7621,
      "market": "上市"
    },
    {
      "code": "00988A",
      "name": "主動統一全球創新",
      "buyVol": 6804,
      "market": "上市"
    },
    {
      "code": "1326",
      "name": "台化",
      "buyVol": 6573,
      "market": "上市"
    },
    {
      "code": "4938",
      "name": "和碩",
      "buyVol": 6222,
      "market": "上市"
    },
    {
      "code": "00712",
      "name": "復華富時不動產",
      "buyVol": 6137,
      "market": "上市"
    },
    {
      "code": "2449",
      "name": "京元電子",
      "buyVol": 5847,
      "market": "上市"
    },
    {
      "code": "2464",
      "name": "盟立",
      "buyVol": 5388,
      "market": "上市"
    },
    {
      "code": "009820",
      "name": "元大納斯達克精選",
      "buyVol": 5375,
      "market": "上市"
    },
    {
      "code": "00990A",
      "name": "主動元大AI新經濟",
      "buyVol": 4753,
      "market": "上市"
    },
    {
      "code": "2376",
      "name": "技嘉",
      "buyVol": 4689,
      "market": "上市"
    },
    {
      "code": "2890",
      "name": "永豐金",
      "buyVol": 4568,
      "market": "上市"
    },
    {
      "code": "2330",
      "name": "台積電",
      "buyVol": 4472,
      "market": "上市"
    },
    {
      "code": "2354",
      "name": "鴻準",
      "buyVol": 4459,
      "market": "上市"
    },
    {
      "code": "9933",
      "name": "中鼎",
      "buyVol": 4079,
      "market": "上市"
    },
    {
      "code": "3605",
      "name": "宏致",
      "buyVol": 3855,
      "market": "上市"
    },
    {
      "code": "00993A",
      "name": "主動安聯台灣",
      "buyVol": 3740,
      "market": "上市"
    },
    {
      "code": "00918",
      "name": "大華優利高填息30",
      "buyVol": 3413,
      "market": "上市"
    },
    {
      "code": "1513",
      "name": "中興電",
      "buyVol": 3372,
      "market": "上市"
    },
    {
      "code": "1301",
      "name": "台塑",
      "buyVol": 3308,
      "market": "上市"
    },
    {
      "code": "00406A",
      "name": "主動中信台灣收益",
      "buyVol": 3302,
      "market": "上市"
    },
    {
      "code": "4763",
      "name": "材料*-KY",
      "buyVol": 3274,
      "market": "上市"
    },
    {
      "code": "6182",
      "name": "合晶",
      "buyVol": 9485,
      "market": "上櫃"
    },
    {
      "code": "5483",
      "name": "中美晶",
      "buyVol": 6407,
      "market": "上櫃"
    },
    {
      "code": "3105",
      "name": "穩懋",
      "buyVol": 5632,
      "market": "上櫃"
    },
    {
      "code": "4979",
      "name": "華星光",
      "buyVol": 4371,
      "market": "上櫃"
    },
    {
      "code": "3260",
      "name": "威剛",
      "buyVol": 2825,
      "market": "上櫃"
    },
    {
      "code": "4931",
      "name": "新盛力",
      "buyVol": 2228,
      "market": "上櫃"
    },
    {
      "code": "6488",
      "name": "環球晶",
      "buyVol": 2040,
      "market": "上櫃"
    },
    {
      "code": "5351",
      "name": "鈺創",
      "buyVol": 1858,
      "market": "上櫃"
    },
    {
      "code": "3441",
      "name": "聯一光",
      "buyVol": 1730,
      "market": "上櫃"
    },
    {
      "code": "3234",
      "name": "光環",
      "buyVol": 1691,
      "market": "上櫃"
    },
    {
      "code": "6265",
      "name": "方土昶",
      "buyVol": 1633,
      "market": "上櫃"
    },
    {
      "code": "4541",
      "name": "晟田",
      "buyVol": 1625,
      "market": "上櫃"
    },
    {
      "code": "4510",
      "name": "高鋒",
      "buyVol": 1351,
      "market": "上櫃"
    },
    {
      "code": "00687B",
      "name": "國泰20年美債",
      "buyVol": 1319,
      "market": "上櫃"
    },
    {
      "code": "00888",
      "name": "永豐台灣ESG",
      "buyVol": 1220,
      "market": "上櫃"
    },
    {
      "code": "00955",
      "name": "中信日本商社",
      "buyVol": 1150,
      "market": "上櫃"
    },
    {
      "code": "1815",
      "name": "富喬",
      "buyVol": 1100,
      "market": "上櫃"
    },
    {
      "code": "4707",
      "name": "磐亞",
      "buyVol": 1095,
      "market": "上櫃"
    },
    {
      "code": "4147",
      "name": "中裕",
      "buyVol": 1076,
      "market": "上櫃"
    },
    {
      "code": "6187",
      "name": "萬潤",
      "buyVol": 1072,
      "market": "上櫃"
    },
    {
      "code": "3265",
      "name": "台星科",
      "buyVol": 1007,
      "market": "上櫃"
    },
    {
      "code": "5443",
      "name": "均豪",
      "buyVol": 960,
      "market": "上櫃"
    },
    {
      "code": "8299",
      "name": "群聯",
      "buyVol": 947,
      "market": "上櫃"
    },
    {
      "code": "5864",
      "name": "致和證",
      "buyVol": 872,
      "market": "上櫃"
    },
    {
      "code": "3357",
      "name": "臺慶科",
      "buyVol": 825,
      "market": "上櫃"
    },
    {
      "code": "6538",
      "name": "倉和",
      "buyVol": 822,
      "market": "上櫃"
    },
    {
      "code": "8071",
      "name": "能率網通",
      "buyVol": 768,
      "market": "上櫃"
    },
    {
      "code": "8358",
      "name": "金居",
      "buyVol": 729,
      "market": "上櫃"
    },
    {
      "code": "6588",
      "name": "東典光電",
      "buyVol": 700,
      "market": "上櫃"
    },
    {
      "code": "5328",
      "name": "華容",
      "buyVol": 687,
      "market": "上櫃"
    },
    {
      "code": "5425",
      "name": "台半",
      "buyVol": 665,
      "market": "上櫃"
    },
    {
      "code": "5498",
      "name": "凱崴",
      "buyVol": 577,
      "market": "上櫃"
    },
    {
      "code": "3360",
      "name": "尚立",
      "buyVol": 572,
      "market": "上櫃"
    },
    {
      "code": "3455",
      "name": "由田",
      "buyVol": 569,
      "market": "上櫃"
    },
    {
      "code": "6207",
      "name": "雷科",
      "buyVol": 567,
      "market": "上櫃"
    },
    {
      "code": "3498",
      "name": "陽程",
      "buyVol": 553,
      "market": "上櫃"
    },
    {
      "code": "5314",
      "name": "世紀*",
      "buyVol": 532,
      "market": "上櫃"
    },
    {
      "code": "3211",
      "name": "順達",
      "buyVol": 424,
      "market": "上櫃"
    },
    {
      "code": "6026",
      "name": "福邦證",
      "buyVol": 421,
      "market": "上櫃"
    },
    {
      "code": "6015",
      "name": "宏遠證",
      "buyVol": 412,
      "market": "上櫃"
    },
    {
      "code": "00877",
      "name": "復華中國5G",
      "buyVol": 397,
      "market": "上櫃"
    },
    {
      "code": "6603",
      "name": "富強鑫",
      "buyVol": 397,
      "market": "上櫃"
    },
    {
      "code": "6190",
      "name": "萬泰科",
      "buyVol": 390,
      "market": "上櫃"
    },
    {
      "code": "8182",
      "name": "加高",
      "buyVol": 379,
      "market": "上櫃"
    },
    {
      "code": "6530",
      "name": "創威",
      "buyVol": 359,
      "market": "上櫃"
    },
    {
      "code": "6548",
      "name": "長科*",
      "buyVol": 355,
      "market": "上櫃"
    },
    {
      "code": "5475",
      "name": "德宏",
      "buyVol": 340,
      "market": "上櫃"
    },
    {
      "code": "3221",
      "name": "台嘉碩",
      "buyVol": 339,
      "market": "上櫃"
    },
    {
      "code": "4561",
      "name": "健椿",
      "buyVol": 326,
      "market": "上櫃"
    },
    {
      "code": "6127",
      "name": "九豪",
      "buyVol": 311,
      "market": "上櫃"
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
    "price": 2435.0,
    "open": 2440.0,
    "high": 2445.0,
    "low": 2425.0,
    "prevClose": 2415.0,
    "volume": 23012,
    "ma5": 2399.0,
    "ma10": 2388.0,
    "ma20": 2354.5,
    "vMa5": 19496,
    "vMa10": 27543,
    "limitUpPrice": 2618.0,
    "categories": [
      "0050",
      "半導體-晶圓",
      "SitcaBuy",
      "MajorBuy"
    ],
    "sparkline": [
      2425.0,
      2370.0,
      2320.0,
      2405.0,
      2365.0,
      2370.0,
      2380.0,
      2395.0,
      2415.0,
      2435.0
    ],
    "ma60": 2371.33,
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
    ]
  },
  {
    "code": "2454",
    "name": "聯發科",
    "price": 4225.0,
    "open": 4130.0,
    "high": 4295.0,
    "low": 4115.0,
    "prevClose": 4015.0,
    "volume": 12110,
    "ma5": 4024.0,
    "ma10": 3937.0,
    "ma20": 3730.25,
    "vMa5": 7266,
    "vMa10": 7966,
    "limitUpPrice": 4356.0,
    "categories": [
      "0050",
      "半導體-IC設計"
    ],
    "sparkline": [
      3555.0,
      3910.0,
      3865.0,
      4000.0,
      3920.0,
      3900.0,
      3960.0,
      4020.0,
      4015.0,
      4225.0
    ],
    "ma60": 4041.92,
    "high20d": 4295.0,
    "high5d": 4295.0,
    "high10d": 4295.0,
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
    ]
  },
  {
    "code": "2317",
    "name": "鴻海",
    "price": 262.0,
    "open": 274.5,
    "high": 274.5,
    "low": 261.0,
    "prevClose": 270.0,
    "volume": 95516,
    "ma5": 263.9,
    "ma10": 259.6,
    "ma20": 251.47,
    "vMa5": 49807,
    "vMa10": 58772,
    "limitUpPrice": 290.95,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "sparkline": [
      250.5,
      253.0,
      250.0,
      258.5,
      264.5,
      260.0,
      264.5,
      263.0,
      270.0,
      262.0
    ],
    "ma60": 256.84,
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
    ]
  },
  {
    "code": "2308",
    "name": "台達電",
    "price": 1885.0,
    "open": 1845.0,
    "high": 1915.0,
    "low": 1845.0,
    "prevClose": 1790.0,
    "volume": 14078,
    "ma5": 1789.0,
    "ma10": 1711.5,
    "ma20": 1715.0,
    "vMa5": 11921,
    "vMa10": 14895,
    "limitUpPrice": 1996.5,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      1640.0,
      1580.0,
      1620.0,
      1650.0,
      1680.0,
      1650.0,
      1815.0,
      1805.0,
      1790.0,
      1885.0
    ],
    "ma60": 1989.17,
    "high20d": 1950.0,
    "high5d": 1915.0,
    "high10d": 1915.0,
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
    ]
  },
  {
    "code": "2303",
    "name": "聯電",
    "price": 124.5,
    "open": 125.5,
    "high": 130.5,
    "low": 123.0,
    "prevClose": 123.0,
    "volume": 201183,
    "ma5": 121.9,
    "ma10": 121.05,
    "ma20": 123.83,
    "vMa5": 142272,
    "vMa10": 172559,
    "limitUpPrice": 135.3,
    "categories": [
      "0050",
      "Top100",
      "半導體-晶圓"
    ],
    "sparkline": [
      121.0,
      118.0,
      118.5,
      122.0,
      121.5,
      116.0,
      123.0,
      123.0,
      123.0,
      124.5
    ],
    "ma60": 139.51,
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
    ]
  },
  {
    "code": "3711",
    "name": "日月光投控",
    "price": 626.0,
    "open": 627.0,
    "high": 638.0,
    "low": 623.0,
    "prevClose": 621.0,
    "volume": 19358,
    "ma5": 618.2,
    "ma10": 602.9,
    "ma20": 597.85,
    "vMa5": 18947,
    "vMa10": 21775,
    "limitUpPrice": 693.0,
    "categories": [
      "0050",
      "半導體-封測"
    ],
    "sparkline": [
      555.0,
      610.0,
      585.0,
      593.0,
      595.0,
      585.0,
      630.0,
      629.0,
      621.0,
      626.0
    ],
    "ma60": 615.88,
    "high20d": 696.0,
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
    ]
  },
  {
    "code": "2449",
    "name": "京元電子",
    "price": 253.5,
    "open": 261.0,
    "high": 262.0,
    "low": 253.0,
    "prevClose": 259.0,
    "volume": 27308,
    "ma5": 249.8,
    "ma10": 244.75,
    "ma20": 248.5,
    "vMa5": 22890,
    "vMa10": 21682,
    "limitUpPrice": 273.35,
    "categories": [
      "0050",
      "半導體-封測",
      "MajorBuy"
    ],
    "sparkline": [
      223.5,
      233.5,
      245.5,
      247.0,
      249.0,
      242.0,
      248.5,
      246.0,
      259.0,
      253.5
    ],
    "ma60": 280.48,
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
    ]
  },
  {
    "code": "3037",
    "name": "欣興",
    "price": 1000.0,
    "open": 1045.0,
    "high": 1045.0,
    "low": 976.0,
    "prevClose": 1000.0,
    "volume": 8880,
    "ma5": 987.8,
    "ma10": 945.7,
    "ma20": 874.2,
    "vMa5": 9724,
    "vMa10": 19140,
    "limitUpPrice": 1091.2,
    "categories": [
      "0050",
      "半導體-載板"
    ],
    "sparkline": [
      787.0,
      865.0,
      924.0,
      969.0,
      973.0,
      955.0,
      992.0,
      992.0,
      1000.0,
      1000.0
    ],
    "ma60": 930.73,
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
    ]
  },
  {
    "code": "8046",
    "name": "南電",
    "price": 1215.0,
    "open": 1295.0,
    "high": 1300.0,
    "low": 1215.0,
    "prevClose": 1265.0,
    "volume": 18936,
    "ma5": 1168.0,
    "ma10": 1092.3,
    "ma20": 1089.0,
    "vMa5": 8186,
    "vMa10": 6263,
    "limitUpPrice": 1243.0,
    "categories": [
      "0050",
      "半導體-載板",
      "SitcaBuy"
    ],
    "sparkline": [
      920.0,
      953.0,
      1045.0,
      1060.0,
      1105.0,
      1080.0,
      1130.0,
      1150.0,
      1265.0,
      1215.0
    ],
    "ma60": 1028.1,
    "high20d": 1415.0,
    "high5d": 1300.0,
    "high10d": 1300.0,
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
    ]
  },
  {
    "code": "3189",
    "name": "景碩",
    "price": 851.0,
    "open": 866.0,
    "high": 872.0,
    "low": 813.0,
    "prevClose": 858.0,
    "volume": 4536,
    "ma5": 842.0,
    "ma10": 799.1,
    "ma20": 745.2,
    "vMa5": 5977,
    "vMa10": 9533,
    "limitUpPrice": 919.6,
    "categories": [
      "半導體-載板"
    ],
    "sparkline": [
      635.0,
      698.0,
      767.0,
      828.0,
      853.0,
      823.0,
      836.0,
      842.0,
      858.0,
      851.0
    ],
    "ma60": 739.9,
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
    ]
  },
  {
    "code": "6239",
    "name": "力成",
    "price": 283.0,
    "open": 287.0,
    "high": 294.0,
    "low": 282.0,
    "prevClose": 281.5,
    "volume": 18328,
    "ma5": 279.6,
    "ma10": 265.45,
    "ma20": 266.32,
    "vMa5": 19833,
    "vMa10": 21702,
    "limitUpPrice": 317.35,
    "categories": [
      "半導體-封測",
      "SitcaBuy"
    ],
    "sparkline": [
      235.5,
      238.5,
      256.5,
      256.5,
      269.5,
      262.5,
      288.5,
      282.5,
      281.5,
      283.0
    ],
    "ma60": 309.28,
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
    ]
  },
  {
    "code": "6770",
    "name": "力積電",
    "price": 74.9,
    "open": 75.0,
    "high": 77.4,
    "low": 72.7,
    "prevClose": 73.7,
    "volume": 470650,
    "ma5": 69.74,
    "ma10": 65.07,
    "ma20": 63.04,
    "vMa5": 290926,
    "vMa10": 255425,
    "limitUpPrice": 74.36,
    "categories": [
      "Top100",
      "半導體-晶圓",
      "MajorBuy"
    ],
    "sparkline": [
      54.5,
      54.7,
      60.1,
      66.1,
      66.6,
      65.5,
      67.6,
      67.0,
      73.7,
      74.9
    ],
    "ma60": 70.64,
    "high20d": 79.5,
    "high5d": 77.4,
    "high10d": 77.4,
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
    ]
  },
  {
    "code": "3707",
    "name": "漢磊",
    "price": 65.6,
    "open": 64.1,
    "high": 68.9,
    "low": 64.1,
    "prevClose": 63.5,
    "volume": 8473,
    "ma5": 62.68,
    "ma10": 60.65,
    "ma20": 60.78,
    "vMa5": 4329,
    "vMa10": 4711,
    "limitUpPrice": 68.53,
    "categories": [
      "半導體-功率",
      "Top100"
    ],
    "sparkline": [
      52.5,
      56.3,
      59.8,
      62.4,
      62.1,
      60.1,
      62.3,
      61.9,
      63.5,
      65.6
    ],
    "ma60": 75.26,
    "high20d": 80.9,
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
    ]
  },
  {
    "code": "6488",
    "name": "環球晶",
    "price": 1025.0,
    "open": 970.0,
    "high": 1025.0,
    "low": 950.0,
    "prevClose": 933.0,
    "volume": 9988,
    "ma5": 906.6,
    "ma10": 895.0,
    "ma20": 985.8,
    "vMa5": 9006,
    "vMa10": 12258,
    "limitUpPrice": 939.4,
    "categories": [
      "Top100",
      "半導體-功率",
      "MajorBuy"
    ],
    "sparkline": [
      855.0,
      866.0,
      952.0,
      872.0,
      872.0,
      872.0,
      854.0,
      849.0,
      933.0,
      1025.0
    ],
    "ma60": 1020.88,
    "high20d": 1600.0,
    "high5d": 1025.0,
    "high10d": 1025.0,
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
    ]
  },
  {
    "code": "5483",
    "name": "中美晶",
    "price": 187.5,
    "open": 188.0,
    "high": 203.0,
    "low": 186.0,
    "prevClose": 185.0,
    "volume": 76025,
    "ma5": 175.8,
    "ma10": 174.5,
    "ma20": 189.32,
    "vMa5": 31444,
    "vMa10": 39057,
    "limitUpPrice": 186.45,
    "categories": [
      "Top100",
      "半導體-功率",
      "MajorBuy"
    ],
    "sparkline": [
      157.0,
      172.5,
      181.0,
      178.0,
      177.5,
      168.5,
      169.5,
      168.5,
      185.0,
      187.5
    ],
    "ma60": 183.85,
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
    ]
  },
  {
    "code": "2327",
    "name": "國巨*",
    "price": 662.0,
    "open": 631.0,
    "high": 662.0,
    "low": 626.0,
    "prevClose": 602.0,
    "volume": 46572,
    "ma5": 598.8,
    "ma10": 576.2,
    "ma20": 597.67,
    "vMa5": 51509,
    "vMa10": 48222,
    "limitUpPrice": 630.3,
    "categories": [
      "0050",
      "Top100",
      "半導體-被動元件",
      "SitcaBuy"
    ],
    "sparkline": [
      502.0,
      552.0,
      566.0,
      578.0,
      570.0,
      540.0,
      573.0,
      617.0,
      602.0,
      662.0
    ],
    "ma60": 786.11,
    "high20d": 813.0,
    "high5d": 662.0,
    "high10d": 662.0,
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
    ]
  },
  {
    "code": "2492",
    "name": "華新科",
    "price": 316.5,
    "open": 299.0,
    "high": 316.5,
    "low": 298.0,
    "prevClose": 288.0,
    "volume": 26760,
    "ma5": 285.9,
    "ma10": 266.25,
    "ma20": 266.5,
    "vMa5": 36883,
    "vMa10": 28906,
    "limitUpPrice": 300.85,
    "categories": [
      "半導體-被動元件",
      "SitcaBuy"
    ],
    "sparkline": [
      218.0,
      239.5,
      259.5,
      259.5,
      256.5,
      251.0,
      273.5,
      300.5,
      288.0,
      316.5
    ],
    "ma60": 393.82,
    "high20d": 395.0,
    "high5d": 316.5,
    "high10d": 316.5,
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
    ]
  },
  {
    "code": "3026",
    "name": "禾伸堂",
    "price": 691.0,
    "open": 706.0,
    "high": 752.0,
    "low": 690.0,
    "prevClose": 685.0,
    "volume": 24900,
    "ma5": 629.0,
    "ma10": 569.25,
    "ma20": 584.98,
    "vMa5": 14828,
    "vMa10": 8982,
    "limitUpPrice": 646.8,
    "categories": [
      "半導體-被動元件",
      "SitcaBuy"
    ],
    "sparkline": [
      450.0,
      459.5,
      498.0,
      547.0,
      593.0,
      535.0,
      588.0,
      646.0,
      685.0,
      691.0
    ],
    "ma60": 701.58,
    "high20d": 865.0,
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
    ]
  },
  {
    "code": "2408",
    "name": "南亞科",
    "price": 514.0,
    "open": 497.0,
    "high": 530.0,
    "low": 490.0,
    "prevClose": 482.5,
    "volume": 128410,
    "ma5": 488.9,
    "ma10": 454.15,
    "ma20": 425.27,
    "vMa5": 99964,
    "vMa10": 92885,
    "limitUpPrice": 552.2,
    "categories": [
      "0050",
      "Top100",
      "半導體-記憶體",
      "SitcaBuy"
    ],
    "sparkline": [
      360.5,
      396.5,
      436.0,
      445.0,
      459.0,
      457.0,
      502.0,
      489.0,
      482.5,
      514.0
    ],
    "ma60": 407.82,
    "high20d": 530.0,
    "high5d": 530.0,
    "high10d": 530.0,
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
    ]
  },
  {
    "code": "2344",
    "name": "華邦電",
    "price": 177.0,
    "open": 183.0,
    "high": 185.0,
    "low": 177.0,
    "prevClose": 177.0,
    "volume": 226824,
    "ma5": 175.0,
    "ma10": 164.5,
    "ma20": 157.28,
    "vMa5": 190416,
    "vMa10": 157739,
    "limitUpPrice": 197.45,
    "categories": [
      "Top100",
      "半導體-記憶體",
      "0050"
    ],
    "sparkline": [
      130.0,
      143.0,
      157.0,
      169.0,
      171.0,
      163.5,
      179.5,
      178.0,
      177.0,
      177.0
    ],
    "ma60": 169.49,
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
    ]
  },
  {
    "code": "3260",
    "name": "威剛",
    "price": 409.0,
    "open": 416.0,
    "high": 419.0,
    "low": 409.0,
    "prevClose": 409.5,
    "volume": 8062,
    "ma5": 410.2,
    "ma10": 405.65,
    "ma20": 391.23,
    "vMa5": 11722,
    "vMa10": 14136,
    "limitUpPrice": 452.1,
    "categories": [
      "Top100",
      "半導體-記憶體",
      "MajorBuy"
    ],
    "sparkline": [
      398.5,
      391.5,
      398.5,
      396.0,
      421.0,
      416.0,
      411.0,
      405.5,
      409.5,
      409.0
    ],
    "ma60": 406.38,
    "high20d": 437.0,
    "high5d": 437.0,
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
    ]
  },
  {
    "code": "8299",
    "name": "群聯",
    "price": 2280.0,
    "open": 2260.0,
    "high": 2280.0,
    "low": 2175.0,
    "prevClose": 2210.0,
    "volume": 7324,
    "ma5": 2128.0,
    "ma10": 1973.0,
    "ma20": 1862.25,
    "vMa5": 5348,
    "vMa10": 4692,
    "limitUpPrice": 2244.0,
    "categories": [
      "Top100",
      "半導體-記憶體",
      "MajorBuy"
    ],
    "sparkline": [
      1640.0,
      1760.0,
      1820.0,
      1845.0,
      2025.0,
      2020.0,
      2040.0,
      2090.0,
      2210.0,
      2280.0
    ],
    "ma60": 2196.33,
    "high20d": 2280.0,
    "high5d": 2280.0,
    "high10d": 2280.0,
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
    ]
  },
  {
    "code": "3034",
    "name": "聯詠",
    "price": 538.0,
    "open": 542.0,
    "high": 545.0,
    "low": 531.0,
    "prevClose": 537.0,
    "volume": 3658,
    "ma5": 539.8,
    "ma10": 535.4,
    "ma20": 513.3,
    "vMa5": 3071,
    "vMa10": 4068,
    "limitUpPrice": 598.4,
    "categories": [
      "半導體-IC設計"
    ],
    "sparkline": [
      519.0,
      519.0,
      524.0,
      550.0,
      543.0,
      542.0,
      544.0,
      538.0,
      537.0,
      538.0
    ],
    "ma60": 509.23,
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
    ]
  },
  {
    "code": "2379",
    "name": "瑞昱",
    "price": 758.0,
    "open": 775.0,
    "high": 775.0,
    "low": 750.0,
    "prevClose": 766.0,
    "volume": 2038,
    "ma5": 760.8,
    "ma10": 740.9,
    "ma20": 737.45,
    "vMa5": 2239,
    "vMa10": 3984,
    "limitUpPrice": 833.8,
    "categories": [
      "半導體-IC設計"
    ],
    "sparkline": [
      683.0,
      704.0,
      723.0,
      751.0,
      744.0,
      750.0,
      758.0,
      772.0,
      766.0,
      758.0
    ],
    "ma60": 720.32,
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
    ]
  },
  {
    "code": "2382",
    "name": "廣達",
    "price": 325.0,
    "open": 328.0,
    "high": 328.5,
    "low": 320.5,
    "prevClose": 325.5,
    "volume": 19627,
    "ma5": 315.5,
    "ma10": 307.2,
    "ma20": 312.73,
    "vMa5": 19429,
    "vMa10": 23027,
    "limitUpPrice": 344.85,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      291.5,
      296.5,
      300.5,
      304.0,
      302.0,
      298.0,
      313.5,
      315.5,
      325.5,
      325.0
    ],
    "ma60": 348.07,
    "high20d": 384.0,
    "high5d": 330.0,
    "high10d": 330.0,
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
    ]
  },
  {
    "code": "3231",
    "name": "緯創",
    "price": 197.0,
    "open": 196.0,
    "high": 199.5,
    "low": 193.5,
    "prevClose": 193.5,
    "volume": 72180,
    "ma5": 191.6,
    "ma10": 189.75,
    "ma20": 176.12,
    "vMa5": 56436,
    "vMa10": 101366,
    "limitUpPrice": 212.3,
    "categories": [
      "0050",
      "Top100",
      "MajorBuy",
      "SitcaBuy"
    ],
    "sparkline": [
      176.0,
      186.0,
      195.0,
      193.0,
      189.5,
      183.5,
      193.0,
      191.0,
      193.5,
      197.0
    ],
    "ma60": 163.39,
    "high20d": 202.5,
    "high5d": 199.5,
    "high10d": 202.5,
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
    ]
  },
  {
    "code": "2356",
    "name": "英業達",
    "price": 68.8,
    "open": 69.5,
    "high": 72.6,
    "low": 68.2,
    "prevClose": 69.0,
    "volume": 71366,
    "ma5": 66.58,
    "ma10": 65.58,
    "ma20": 63.06,
    "vMa5": 39440,
    "vMa10": 35752,
    "limitUpPrice": 72.6,
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "sparkline": [
      61.8,
      63.9,
      66.0,
      65.7,
      65.5,
      64.0,
      66.0,
      65.1,
      69.0,
      68.8
    ],
    "ma60": 65.91,
    "high20d": 72.6,
    "high5d": 72.6,
    "high10d": 72.6,
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
    ]
  },
  {
    "code": "2376",
    "name": "技嘉",
    "price": 393.5,
    "open": 385.5,
    "high": 395.0,
    "low": 379.5,
    "prevClose": 375.5,
    "volume": 18476,
    "ma5": 362.6,
    "ma10": 349.2,
    "ma20": 343.12,
    "vMa5": 10282,
    "vMa10": 9814,
    "limitUpPrice": 384.45,
    "categories": [
      "MajorBuy"
    ],
    "sparkline": [
      336.5,
      324.5,
      332.0,
      342.0,
      344.0,
      344.0,
      349.5,
      350.5,
      375.5,
      393.5
    ],
    "ma60": 343.68,
    "high20d": 395.0,
    "high5d": 395.0,
    "high10d": 395.0,
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
    ]
  },
  {
    "code": "2603",
    "name": "長榮",
    "price": 215.5,
    "open": 215.0,
    "high": 217.0,
    "low": 214.0,
    "prevClose": 214.5,
    "volume": 6043,
    "ma5": 213.9,
    "ma10": 209.6,
    "ma20": 205.72,
    "vMa5": 9488,
    "vMa10": 7667,
    "limitUpPrice": 235.4,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      204.0,
      207.5,
      206.0,
      205.0,
      204.0,
      207.5,
      214.0,
      218.0,
      214.5,
      215.5
    ],
    "ma60": 205.8,
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
    ]
  },
  {
    "code": "2609",
    "name": "陽明",
    "price": 51.4,
    "open": 51.9,
    "high": 52.0,
    "low": 50.9,
    "prevClose": 51.7,
    "volume": 17268,
    "ma5": 51.44,
    "ma10": 51.08,
    "ma20": 50.76,
    "vMa5": 16701,
    "vMa10": 15029,
    "limitUpPrice": 56.76,
    "categories": [],
    "sparkline": [
      50.8,
      50.8,
      51.0,
      50.6,
      50.4,
      50.5,
      51.6,
      52.0,
      51.7,
      51.4
    ],
    "ma60": 51.42,
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
    ]
  },
  {
    "code": "2615",
    "name": "萬海",
    "price": 87.5,
    "open": 88.1,
    "high": 88.8,
    "low": 86.5,
    "prevClose": 87.1,
    "volume": 12458,
    "ma5": 86.82,
    "ma10": 86.07,
    "ma20": 84.97,
    "vMa5": 10931,
    "vMa10": 8714,
    "limitUpPrice": 96.25,
    "categories": [],
    "sparkline": [
      84.7,
      86.1,
      86.1,
      85.4,
      84.3,
      84.9,
      87.5,
      87.1,
      87.1,
      87.5
    ],
    "ma60": 82.54,
    "high20d": 88.8,
    "high5d": 88.8,
    "high10d": 88.8,
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
    ]
  },
  {
    "code": "3481",
    "name": "群創",
    "price": 49.4,
    "open": 51.5,
    "high": 51.9,
    "low": 49.4,
    "prevClose": 50.4,
    "volume": 195568,
    "ma5": 49.95,
    "ma10": 48.66,
    "ma20": 48.49,
    "vMa5": 245883,
    "vMa10": 303475,
    "limitUpPrice": 57.53,
    "categories": [
      "Top100"
    ],
    "sparkline": [
      45.5,
      45.8,
      47.8,
      47.8,
      50.0,
      47.55,
      52.3,
      50.1,
      50.4,
      49.4
    ],
    "ma60": 54.68,
    "high20d": 59.2,
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
    ]
  },
  {
    "code": "2409",
    "name": "友達",
    "price": 25.75,
    "open": 26.55,
    "high": 26.9,
    "low": 25.75,
    "prevClose": 26.25,
    "volume": 128066,
    "ma5": 25.93,
    "ma10": 25.12,
    "ma20": 24.96,
    "vMa5": 223484,
    "vMa10": 192512,
    "limitUpPrice": 29.7,
    "categories": [
      "Top100"
    ],
    "sparkline": [
      24.2,
      23.9,
      24.45,
      24.45,
      24.55,
      24.55,
      27.0,
      26.1,
      26.25,
      25.75
    ],
    "ma60": 26.32,
    "high20d": 28.75,
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
    ]
  },
  {
    "code": "2881",
    "name": "富邦金",
    "price": 128.5,
    "open": 128.0,
    "high": 129.0,
    "low": 127.0,
    "prevClose": 127.0,
    "volume": 8612,
    "ma5": 127.8,
    "ma10": 128.25,
    "ma20": 126.97,
    "vMa5": 9958,
    "vMa10": 16818,
    "limitUpPrice": 141.35,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      130.0,
      129.5,
      128.5,
      129.5,
      126.0,
      127.0,
      128.5,
      128.0,
      127.0,
      128.5
    ],
    "ma60": 123.36,
    "high20d": 132.5,
    "high5d": 129.5,
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
    ]
  },
  {
    "code": "2882",
    "name": "國泰金",
    "price": 99.5,
    "open": 100.0,
    "high": 100.5,
    "low": 98.9,
    "prevClose": 99.7,
    "volume": 14433,
    "ma5": 99.84,
    "ma10": 99.84,
    "ma20": 97.84,
    "vMa5": 15003,
    "vMa10": 19662,
    "limitUpPrice": 111.1,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      101.5,
      100.5,
      99.2,
      100.5,
      97.5,
      99.4,
      101.0,
      99.6,
      99.7,
      99.5
    ],
    "ma60": 97.42,
    "high20d": 102.5,
    "high5d": 101.5,
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
    ]
  },
  {
    "code": "2891",
    "name": "中信金",
    "price": 66.5,
    "open": 66.3,
    "high": 66.5,
    "low": 65.2,
    "prevClose": 66.6,
    "volume": 27681,
    "ma5": 66.4,
    "ma10": 65.71,
    "ma20": 64.25,
    "vMa5": 26362,
    "vMa10": 32354,
    "limitUpPrice": 73.15,
    "categories": [
      "0050"
    ],
    "sparkline": [
      64.9,
      64.8,
      64.8,
      66.0,
      64.6,
      65.6,
      66.5,
      66.8,
      66.6,
      66.5
    ],
    "ma60": 66.06,
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
    ]
  },
  {
    "code": "2886",
    "name": "兆豐金",
    "price": 45.85,
    "open": 46.9,
    "high": 46.9,
    "low": 44.95,
    "prevClose": 46.95,
    "volume": 71742,
    "ma5": 49.17,
    "ma10": 50.27,
    "ma20": 49.61,
    "vMa5": 36107,
    "vMa10": 35849,
    "limitUpPrice": 56.1,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "sparkline": [
      53.1,
      51.6,
      50.7,
      51.2,
      50.3,
      50.9,
      51.0,
      49.4,
      48.7,
      45.85
    ],
    "ma60": 45.84,
    "high20d": 53.7,
    "high5d": 51.9,
    "high10d": 53.7,
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
    ]
  },
  {
    "code": "2884",
    "name": "玉山金",
    "price": 37.3,
    "open": 37.0,
    "high": 37.3,
    "low": 36.35,
    "prevClose": 36.75,
    "volume": 41181,
    "ma5": 37.38,
    "ma10": 37.81,
    "ma20": 37.02,
    "vMa5": 29807,
    "vMa10": 34188,
    "limitUpPrice": 41.58,
    "categories": [
      "0050",
      "SitcaBuy",
      "Top100"
    ],
    "sparkline": [
      38.65,
      38.45,
      38.0,
      38.1,
      37.95,
      38.15,
      37.8,
      36.9,
      36.75,
      37.3
    ],
    "ma60": 34.81,
    "high20d": 39.1,
    "high5d": 38.3,
    "high10d": 39.1,
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
    ]
  },
  {
    "code": "2892",
    "name": "第一金",
    "price": 33.15,
    "open": 33.35,
    "high": 33.35,
    "low": 32.65,
    "prevClose": 33.15,
    "volume": 28039,
    "ma5": 33.9,
    "ma10": 34.89,
    "ma20": 34.71,
    "vMa5": 47761,
    "vMa10": 50088,
    "limitUpPrice": 38.45,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      36.75,
      35.95,
      35.3,
      35.9,
      35.5,
      35.55,
      34.95,
      32.7,
      33.15,
      33.15
    ],
    "ma60": 32.31,
    "high20d": 36.9,
    "high5d": 35.85,
    "high10d": 36.9,
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
    ]
  },
  {
    "code": "2885",
    "name": "元大金",
    "price": 69.7,
    "open": 69.2,
    "high": 70.0,
    "low": 68.4,
    "prevClose": 68.6,
    "volume": 18960,
    "ma5": 68.52,
    "ma10": 68.42,
    "ma20": 65.82,
    "vMa5": 15344,
    "vMa10": 23137,
    "limitUpPrice": 75.02,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      68.1,
      68.0,
      69.0,
      69.4,
      67.1,
      67.7,
      68.2,
      68.4,
      68.6,
      69.7
    ],
    "ma60": 64.85,
    "high20d": 70.8,
    "high5d": 70.0,
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
    ]
  },
  {
    "code": "5880",
    "name": "合庫金",
    "price": 24.2,
    "open": 24.15,
    "high": 24.25,
    "low": 23.9,
    "prevClose": 24.1,
    "volume": 19043,
    "ma5": 24.66,
    "ma10": 25.38,
    "ma20": 25.29,
    "vMa5": 27235,
    "vMa10": 29747,
    "limitUpPrice": 28.01,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      26.93,
      26.24,
      25.9,
      25.95,
      25.46,
      25.56,
      25.46,
      24.0,
      24.1,
      24.2
    ],
    "ma60": 24.13,
    "high20d": 26.98,
    "high5d": 25.8,
    "high10d": 26.98,
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
    ]
  },
  {
    "code": "2890",
    "name": "永豐金",
    "price": 39.95,
    "open": 40.2,
    "high": 40.2,
    "low": 39.3,
    "prevClose": 39.85,
    "volume": 18013,
    "ma5": 39.34,
    "ma10": 39.52,
    "ma20": 39.24,
    "vMa5": 16000,
    "vMa10": 22361,
    "limitUpPrice": 42.79,
    "categories": [
      "0050",
      "MajorBuy",
      "SitcaBuy"
    ],
    "sparkline": [
      40.6,
      40.05,
      39.6,
      39.55,
      38.7,
      38.95,
      38.9,
      39.05,
      39.85,
      39.95
    ],
    "ma60": 36.63,
    "high20d": 41.05,
    "high5d": 40.2,
    "high10d": 41.05,
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
    ]
  },
  {
    "code": "2880",
    "name": "華南金",
    "price": 39.1,
    "open": 41.5,
    "high": 41.55,
    "low": 38.3,
    "prevClose": 41.45,
    "volume": 72408,
    "ma5": 42.52,
    "ma10": 42.83,
    "ma20": 41.78,
    "vMa5": 35690,
    "vMa10": 31989,
    "limitUpPrice": 48.4,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "sparkline": [
      43.27,
      42.62,
      42.82,
      43.37,
      43.61,
      43.96,
      43.56,
      43.22,
      42.77,
      39.1
    ],
    "ma60": 37.71,
    "high20d": 44.7,
    "high5d": 44.41,
    "high10d": 44.7,
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
    ]
  },
  {
    "code": "2883",
    "name": "凱基金",
    "price": 31.5,
    "open": 31.4,
    "high": 31.5,
    "low": 30.85,
    "prevClose": 31.2,
    "volume": 34311,
    "ma5": 31.13,
    "ma10": 30.96,
    "ma20": 30.46,
    "vMa5": 28368,
    "vMa10": 43624,
    "limitUpPrice": 34.16,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      30.85,
      30.4,
      30.55,
      31.6,
      30.6,
      30.85,
      31.05,
      31.05,
      31.2,
      31.5
    ],
    "ma60": 28.52,
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
    ]
  },
  {
    "code": "2887",
    "name": "台新新光金",
    "price": 36.2,
    "open": 35.7,
    "high": 36.3,
    "low": 35.25,
    "prevClose": 35.65,
    "volume": 57401,
    "ma5": 35.69,
    "ma10": 35.55,
    "ma20": 34.9,
    "vMa5": 40991,
    "vMa10": 48726,
    "limitUpPrice": 39.49,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "sparkline": [
      35.95,
      35.3,
      35.55,
      35.7,
      34.5,
      35.15,
      35.9,
      35.55,
      35.65,
      36.2
    ],
    "ma60": 31.82,
    "high20d": 36.44,
    "high5d": 36.3,
    "high10d": 36.3,
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
    ]
  },
  {
    "code": "2002",
    "name": "中鋼",
    "price": 19.2,
    "open": 19.8,
    "high": 19.8,
    "low": 19.15,
    "prevClose": 19.75,
    "volume": 52020,
    "ma5": 19.48,
    "ma10": 19.2,
    "ma20": 19.06,
    "vMa5": 64719,
    "vMa10": 47226,
    "limitUpPrice": 21.61,
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "sparkline": [
      18.95,
      18.85,
      18.85,
      18.9,
      19.0,
      19.05,
      19.65,
      19.75,
      19.75,
      19.2
    ],
    "ma60": 18.95,
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
    ]
  },
  {
    "code": "1101",
    "name": "台泥",
    "price": 24.05,
    "open": 24.55,
    "high": 24.7,
    "low": 24.0,
    "prevClose": 24.45,
    "volume": 37503,
    "ma5": 24.41,
    "ma10": 24.21,
    "ma20": 24.13,
    "vMa5": 20788,
    "vMa10": 24301,
    "limitUpPrice": 27.01,
    "categories": [
      "Top100"
    ],
    "sparkline": [
      24.3,
      23.8,
      23.55,
      24.05,
      24.35,
      24.35,
      24.55,
      24.65,
      24.45,
      24.05
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
    ]
  },
  {
    "code": "1301",
    "name": "台塑",
    "price": 57.5,
    "open": 57.9,
    "high": 59.8,
    "low": 57.5,
    "prevClose": 56.2,
    "volume": 33092,
    "ma5": 56.14,
    "ma10": 55.59,
    "ma20": 58.2,
    "vMa5": 20695,
    "vMa10": 23496,
    "limitUpPrice": 61.16,
    "categories": [
      "MajorBuy"
    ],
    "sparkline": [
      55.0,
      53.8,
      55.3,
      56.0,
      55.1,
      55.8,
      55.6,
      55.6,
      56.2,
      57.5
    ],
    "ma60": 54.08,
    "high20d": 69.8,
    "high5d": 59.8,
    "high10d": 59.8,
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
    ]
  },
  {
    "code": "5876",
    "name": "上海商銀",
    "categories": [
      "SitcaBuy"
    ],
    "price": 42.25,
    "prevClose": 42.85,
    "open": 43.1,
    "high": 43.1,
    "low": 42.05,
    "volume": 8247,
    "ma5": 43.0,
    "ma10": 43.69,
    "ma20": 44.3,
    "ma60": 42.36,
    "vMa5": 5544,
    "vMa10": 7674,
    "high20d": 46.63,
    "sparkline": [
      45.45,
      44.65,
      44.15,
      44.15,
      43.45,
      43.45,
      43.35,
      43.1,
      42.85,
      42.25
    ],
    "high5d": 43.75,
    "high10d": 45.7,
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
    ]
  },
  {
    "code": "5871",
    "name": "中租-KY",
    "categories": [
      "SitcaBuy"
    ],
    "price": 114.0,
    "prevClose": 113.5,
    "open": 114.0,
    "high": 114.5,
    "low": 112.5,
    "volume": 3911,
    "ma5": 112.2,
    "ma10": 111.8,
    "ma20": 114.55,
    "ma60": 113.4,
    "vMa5": 5666,
    "vMa10": 5890,
    "high20d": 122.06,
    "sparkline": [
      111.5,
      113.0,
      111.5,
      112.0,
      109.0,
      109.0,
      109.0,
      115.5,
      113.5,
      114.0
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
    ]
  },
  {
    "code": "3008",
    "name": "大立光",
    "categories": [
      "0050"
    ],
    "price": 4660.0,
    "prevClose": 4545.0,
    "open": 4655.0,
    "high": 4825.0,
    "low": 4545.0,
    "volume": 2185,
    "ma5": 4477.0,
    "ma10": 4393.5,
    "ma20": 4171.0,
    "ma60": 4169.75,
    "vMa5": 1775,
    "vMa10": 2157,
    "high20d": 4825.0,
    "sparkline": [
      4035.0,
      3960.0,
      4355.0,
      4575.0,
      4625.0,
      4385.0,
      4400.0,
      4355.0,
      4585.0,
      4660.0
    ],
    "high5d": 4825.0,
    "high10d": 4825.0,
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
    ]
  },
  {
    "code": "2357",
    "name": "華碩",
    "categories": [
      "0050"
    ],
    "price": 937.0,
    "prevClose": 852.0,
    "open": 937.0,
    "high": 937.0,
    "low": 937.0,
    "volume": 3599,
    "ma5": 852.6,
    "ma10": 833.4,
    "ma20": 787.4,
    "ma60": 763.15,
    "vMa5": 3329,
    "vMa10": 4248,
    "high20d": 937.0,
    "sparkline": [
      810.0,
      799.0,
      806.0,
      838.0,
      818.0,
      817.0,
      818.0,
      839.0,
      852.0,
      937.0
    ],
    "high5d": 937.0,
    "high10d": 937.0,
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
    ]
  },
  {
    "code": "2395",
    "name": "研華",
    "categories": [
      "0050"
    ],
    "price": 698.0,
    "prevClose": 686.0,
    "open": 695.0,
    "high": 709.0,
    "low": 690.0,
    "volume": 4151,
    "ma5": 669.2,
    "ma10": 631.6,
    "ma20": 595.95,
    "ma60": 531.47,
    "vMa5": 5491,
    "vMa10": 5822,
    "high20d": 709.0,
    "sparkline": [
      563.0,
      576.0,
      576.0,
      633.0,
      622.0,
      634.0,
      667.0,
      661.0,
      686.0,
      698.0
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
    ]
  },
  {
    "code": "2301",
    "name": "光寶科",
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "price": 269.5,
    "prevClose": 259.5,
    "open": 268.0,
    "high": 281.0,
    "low": 266.5,
    "volume": 37956,
    "ma5": 263.2,
    "ma10": 250.8,
    "ma20": 226.82,
    "ma60": 222.69,
    "vMa5": 36019,
    "vMa10": 40572,
    "high20d": 281.0,
    "sparkline": [
      209.0,
      229.5,
      252.0,
      249.0,
      252.5,
      247.0,
      271.5,
      268.5,
      259.5,
      269.5
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
    ]
  },
  {
    "code": "6669",
    "name": "緯穎",
    "categories": [
      "0050"
    ],
    "price": 6070.0,
    "prevClose": 6025.0,
    "open": 6095.0,
    "high": 6195.0,
    "low": 6020.0,
    "volume": 1337,
    "ma5": 6027.0,
    "ma10": 6009.5,
    "ma20": 5609.75,
    "ma60": 5259.25,
    "vMa5": 1368,
    "vMa10": 1728,
    "high20d": 6400.0,
    "sparkline": [
      5390.0,
      5925.0,
      6205.0,
      6175.0,
      6265.0,
      6100.0,
      6010.0,
      5930.0,
      6025.0,
      6070.0
    ],
    "high5d": 6265.0,
    "high10d": 6400.0,
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
    ]
  },
  {
    "code": "3661",
    "name": "世芯-KY",
    "categories": [
      "0050"
    ],
    "price": 4190.0,
    "prevClose": 4055.0,
    "open": 4100.0,
    "high": 4225.0,
    "low": 4090.0,
    "volume": 2844,
    "ma5": 3943.0,
    "ma10": 3668.5,
    "ma20": 3484.5,
    "ma60": 4036.25,
    "vMa5": 2850,
    "vMa10": 2430,
    "high20d": 4225.0,
    "sparkline": [
      3060.0,
      3250.0,
      3390.0,
      3610.0,
      3660.0,
      3715.0,
      3800.0,
      3955.0,
      4055.0,
      4190.0
    ],
    "high5d": 4225.0,
    "high10d": 4225.0,
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
    ]
  },
  {
    "code": "3443",
    "name": "創意",
    "categories": [
      "0050"
    ],
    "price": 5540.0,
    "prevClose": 5130.0,
    "open": 5260.0,
    "high": 5580.0,
    "low": 5230.0,
    "volume": 2992,
    "ma5": 4940.0,
    "ma10": 4570.5,
    "ma20": 4234.25,
    "ma60": 4504.42,
    "vMa5": 2489,
    "vMa10": 2113,
    "high20d": 5580.0,
    "sparkline": [
      3805.0,
      4185.0,
      4145.0,
      4390.0,
      4480.0,
      4545.0,
      4530.0,
      4955.0,
      5130.0,
      5540.0
    ],
    "high5d": 5580.0,
    "high10d": 5580.0,
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
    ]
  },
  {
    "code": "1216",
    "name": "統一",
    "categories": [
      "0050"
    ],
    "price": 76.3,
    "prevClose": 76.3,
    "open": 76.5,
    "high": 76.5,
    "low": 75.1,
    "volume": 13838,
    "ma5": 75.94,
    "ma10": 74.66,
    "ma20": 76.3,
    "ma60": 75.44,
    "vMa5": 14851,
    "vMa10": 18973,
    "high20d": 80.7,
    "sparkline": [
      73.8,
      73.0,
      73.9,
      73.2,
      73.0,
      75.7,
      75.5,
      75.9,
      76.3,
      76.3
    ],
    "high5d": 76.5,
    "high10d": 76.6,
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
    ]
  },
  {
    "code": "1303",
    "name": "南亞",
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "price": 189.0,
    "prevClose": 189.0,
    "open": 191.0,
    "high": 195.0,
    "low": 184.0,
    "volume": 95974,
    "ma5": 188.2,
    "ma10": 179.15,
    "ma20": 178.62,
    "ma60": 152.75,
    "vMa5": 101723,
    "vMa10": 89292,
    "high20d": 230.0,
    "sparkline": [
      159.5,
      165.0,
      170.5,
      177.0,
      178.5,
      188.0,
      185.0,
      190.0,
      189.0,
      189.0
    ],
    "high5d": 197.5,
    "high10d": 197.5,
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
    ]
  },
  {
    "code": "1326",
    "name": "台化",
    "categories": [
      "MajorBuy"
    ],
    "price": 59.5,
    "prevClose": 59.6,
    "open": 60.3,
    "high": 61.1,
    "low": 59.0,
    "volume": 21318,
    "ma5": 59.0,
    "ma10": 58.36,
    "ma20": 61.65,
    "ma60": 57.34,
    "vMa5": 21114,
    "vMa10": 24826,
    "high20d": 77.6,
    "sparkline": [
      57.4,
      56.3,
      58.2,
      58.6,
      58.1,
      58.9,
      58.8,
      58.2,
      59.6,
      59.5
    ],
    "high5d": 61.1,
    "high10d": 61.3,
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
    ]
  },
  {
    "code": "6505",
    "name": "台塑化",
    "categories": [
      "0050"
    ],
    "price": 69.8,
    "prevClose": 70.2,
    "open": 70.6,
    "high": 71.1,
    "low": 69.6,
    "volume": 11750,
    "ma5": 70.22,
    "ma10": 69.25,
    "ma20": 74.99,
    "ma60": 62.15,
    "vMa5": 23725,
    "vMa10": 27139,
    "high20d": 97.9,
    "sparkline": [
      70.8,
      67.7,
      68.2,
      67.6,
      67.1,
      71.0,
      69.0,
      71.1,
      70.2,
      69.8
    ],
    "high5d": 73.0,
    "high10d": 76.0,
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
    ]
  },
  {
    "code": "2618",
    "name": "長榮航",
    "categories": [
      "SitcaBuy"
    ],
    "price": 41.0,
    "prevClose": 42.15,
    "open": 41.9,
    "high": 41.95,
    "low": 40.8,
    "volume": 32418,
    "ma5": 42.39,
    "ma10": 42.98,
    "ma20": 42.3,
    "ma60": 40.7,
    "vMa5": 33644,
    "vMa10": 39158,
    "high20d": 44.6,
    "sparkline": [
      43.3,
      43.7,
      43.8,
      43.8,
      43.25,
      44.4,
      42.65,
      41.75,
      42.15,
      41.0
    ],
    "high5d": 44.6,
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
    ]
  },
  {
    "code": "2610",
    "name": "華航",
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "price": 20.1,
    "prevClose": 20.25,
    "open": 20.35,
    "high": 20.35,
    "low": 20.0,
    "volume": 35941,
    "ma5": 20.71,
    "ma10": 21.56,
    "ma20": 21.38,
    "ma60": 21.07,
    "vMa5": 54884,
    "vMa10": 47969,
    "high20d": 22.85,
    "sparkline": [
      22.4,
      22.45,
      22.45,
      22.6,
      22.15,
      22.5,
      20.45,
      20.25,
      20.25,
      20.1
    ],
    "high5d": 22.55,
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
    ]
  },
  {
    "code": "9910",
    "name": "豐泰",
    "categories": [],
    "price": 70.3,
    "prevClose": 71.0,
    "open": 71.4,
    "high": 71.4,
    "low": 69.2,
    "volume": 1537,
    "ma5": 70.46,
    "ma10": 69.24,
    "ma20": 69.03,
    "ma60": 71.79,
    "vMa5": 1288,
    "vMa10": 1336,
    "high20d": 73.2,
    "sparkline": [
      68.4,
      67.2,
      67.4,
      67.4,
      69.7,
      69.5,
      70.2,
      71.3,
      71.0,
      70.3
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
    ]
  },
  {
    "code": "2912",
    "name": "統一超",
    "categories": [],
    "price": 217.0,
    "prevClose": 219.5,
    "open": 220.0,
    "high": 220.0,
    "low": 216.0,
    "volume": 3948,
    "ma5": 219.2,
    "ma10": 220.35,
    "ma20": 229.93,
    "ma60": 228.9,
    "vMa5": 2391,
    "vMa10": 2995,
    "high20d": 249.0,
    "sparkline": [
      224.0,
      220.5,
      221.5,
      221.5,
      220.0,
      221.0,
      219.5,
      219.0,
      219.5,
      217.0
    ],
    "high5d": 222.0,
    "high10d": 230.5,
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
    ]
  },
  {
    "code": "1590",
    "name": "亞德客-KY",
    "categories": [],
    "price": 1470.0,
    "prevClose": 1595.0,
    "open": 1590.0,
    "high": 1595.0,
    "low": 1455.0,
    "volume": 1356,
    "ma5": 1548.0,
    "ma10": 1497.5,
    "ma20": 1433.25,
    "ma60": 1379.83,
    "vMa5": 991,
    "vMa10": 1078,
    "high20d": 1615.0,
    "sparkline": [
      1325.0,
      1415.0,
      1425.0,
      1510.0,
      1560.0,
      1545.0,
      1570.0,
      1560.0,
      1595.0,
      1470.0
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
    ]
  },
  {
    "code": "2207",
    "name": "和泰車",
    "categories": [],
    "price": 524.0,
    "prevClose": 504.0,
    "open": 516.0,
    "high": 529.0,
    "low": 515.0,
    "volume": 441,
    "ma5": 513.8,
    "ma10": 519.1,
    "ma20": 510.23,
    "ma60": 486.67,
    "vMa5": 287,
    "vMa10": 451,
    "high20d": 573.0,
    "sparkline": [
      558.0,
      522.0,
      517.0,
      509.0,
      516.0,
      516.0,
      514.0,
      511.0,
      504.0,
      524.0
    ],
    "high5d": 529.0,
    "high10d": 573.0,
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
    ]
  },
  {
    "code": "6415",
    "name": "矽力*-KY",
    "categories": [],
    "price": 465.0,
    "prevClose": 449.0,
    "open": 460.5,
    "high": 487.0,
    "low": 460.5,
    "volume": 3047,
    "ma5": 457.4,
    "ma10": 443.85,
    "ma20": 439.62,
    "ma60": 528.51,
    "vMa5": 3463,
    "vMa10": 4102,
    "high20d": 517.0,
    "sparkline": [
      413.0,
      424.5,
      424.0,
      445.0,
      445.0,
      441.5,
      465.0,
      466.5,
      449.0,
      465.0
    ],
    "high5d": 488.0,
    "high10d": 488.0,
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
    ]
  },
  {
    "code": "2383",
    "name": "台光電",
    "categories": [
      "0050"
    ],
    "price": 5690.0,
    "prevClose": 5730.0,
    "open": 5875.0,
    "high": 5875.0,
    "low": 5655.0,
    "volume": 1567,
    "ma5": 5497.0,
    "ma10": 5290.0,
    "ma20": 4961.75,
    "ma60": 5136.42,
    "vMa5": 1762,
    "vMa10": 2110,
    "high20d": 5875.0,
    "sparkline": [
      4745.0,
      4980.0,
      5140.0,
      5245.0,
      5305.0,
      5240.0,
      5290.0,
      5535.0,
      5730.0,
      5690.0
    ],
    "high5d": 5875.0,
    "high10d": 5875.0,
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
    ]
  },
  {
    "code": "2345",
    "name": "智邦",
    "categories": [
      "0050"
    ],
    "price": 2270.0,
    "prevClose": 2215.0,
    "open": 2275.0,
    "high": 2310.0,
    "low": 2235.0,
    "volume": 2997,
    "ma5": 2200.0,
    "ma10": 2257.5,
    "ma20": 2196.5,
    "ma60": 2379.0,
    "vMa5": 3108,
    "vMa10": 3112,
    "high20d": 2595.0,
    "sparkline": [
      2125.0,
      2335.0,
      2320.0,
      2385.0,
      2410.0,
      2215.0,
      2165.0,
      2135.0,
      2215.0,
      2270.0
    ],
    "high5d": 2395.0,
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
    ]
  },
  {
    "code": "3017",
    "name": "奇鋐",
    "categories": [
      "0050"
    ],
    "price": 3200.0,
    "prevClose": 2910.0,
    "open": 3030.0,
    "high": 3200.0,
    "low": 2925.0,
    "volume": 10528,
    "ma5": 2884.0,
    "ma10": 2756.0,
    "ma20": 2507.25,
    "ma60": 2496.67,
    "vMa5": 4895,
    "vMa10": 4955,
    "high20d": 3200.0,
    "sparkline": [
      2320.0,
      2550.0,
      2600.0,
      2730.0,
      2940.0,
      2785.0,
      2765.0,
      2760.0,
      2910.0,
      3200.0
    ],
    "high5d": 3200.0,
    "high10d": 3200.0,
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
    ]
  },
  {
    "code": "2360",
    "name": "致茂",
    "categories": [
      "0050"
    ],
    "price": 2300.0,
    "prevClose": 2195.0,
    "open": 2335.0,
    "high": 2395.0,
    "low": 2255.0,
    "volume": 3521,
    "ma5": 2127.0,
    "ma10": 2048.0,
    "ma20": 2016.25,
    "ma60": 2168.0,
    "vMa5": 2464,
    "vMa10": 3540,
    "high20d": 2395.0,
    "sparkline": [
      2100.0,
      1960.0,
      1925.0,
      1885.0,
      1975.0,
      2030.0,
      2030.0,
      2080.0,
      2195.0,
      2300.0
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
    ]
  },
  {
    "code": "2059",
    "name": "川湖",
    "categories": [
      "0050"
    ],
    "price": 12235.0,
    "prevClose": 12045.0,
    "open": 12235.0,
    "high": 12500.0,
    "low": 11840.0,
    "volume": 289,
    "ma5": 11922.0,
    "ma10": 10516.0,
    "ma20": 9142.25,
    "ma60": 7543.33,
    "vMa5": 462,
    "vMa10": 523,
    "high20d": 12540.0,
    "sparkline": [
      7850.0,
      8635.0,
      9495.0,
      9470.0,
      10100.0,
      11110.0,
      11905.0,
      12315.0,
      12045.0,
      12235.0
    ],
    "high5d": 12540.0,
    "high10d": 12540.0,
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
    ]
  },
  {
    "code": "2412",
    "name": "中華電",
    "categories": [
      "0050"
    ],
    "price": 136.0,
    "prevClose": 136.0,
    "open": 135.5,
    "high": 136.0,
    "low": 135.0,
    "volume": 8836,
    "ma5": 136.4,
    "ma10": 137.1,
    "ma20": 138.25,
    "ma60": 139.58,
    "vMa5": 8369,
    "vMa10": 10875,
    "high20d": 142.5,
    "sparkline": [
      139.5,
      139.0,
      136.5,
      137.0,
      137.0,
      137.5,
      136.5,
      136.0,
      136.0,
      136.0
    ],
    "high5d": 138.0,
    "high10d": 140.5,
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
    ]
  },
  {
    "code": "3665",
    "name": "貿聯-KY",
    "categories": [
      "0050"
    ],
    "price": 2205.0,
    "prevClose": 2155.0,
    "open": 2180.0,
    "high": 2275.0,
    "low": 2165.0,
    "volume": 2619,
    "ma5": 2190.0,
    "ma10": 2217.0,
    "ma20": 2136.25,
    "ma60": 2086.08,
    "vMa5": 3680,
    "vMa10": 3753,
    "high20d": 2555.0,
    "sparkline": [
      2100.0,
      2095.0,
      2300.0,
      2355.0,
      2370.0,
      2200.0,
      2190.0,
      2200.0,
      2155.0,
      2205.0
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
    ]
  },
  {
    "code": "4958",
    "name": "臻鼎-KY",
    "categories": [
      "0050",
      "Top100"
    ],
    "price": 477.5,
    "prevClose": 471.5,
    "open": 483.0,
    "high": 506.0,
    "low": 472.0,
    "volume": 42053,
    "ma5": 476.5,
    "ma10": 463.15,
    "ma20": 468.27,
    "ma60": 533.27,
    "vMa5": 38460,
    "vMa10": 37035,
    "high20d": 656.0,
    "sparkline": [
      413.5,
      421.5,
      444.0,
      488.0,
      482.0,
      473.0,
      470.5,
      490.0,
      471.5,
      477.5
    ],
    "high5d": 506.0,
    "high10d": 506.0,
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
    ]
  },
  {
    "code": "7769",
    "name": "鴻勁",
    "categories": [
      "0050"
    ],
    "price": 6770.0,
    "prevClose": 6480.0,
    "open": 6645.0,
    "high": 6845.0,
    "low": 6505.0,
    "volume": 1096,
    "ma5": 6440.0,
    "ma10": 6400.0,
    "ma20": 6207.75,
    "ma60": 6769.75,
    "vMa5": 588,
    "vMa10": 687,
    "high20d": 6855.0,
    "sparkline": [
      6180.0,
      6425.0,
      6190.0,
      6530.0,
      6475.0,
      6320.0,
      6280.0,
      6350.0,
      6480.0,
      6770.0
    ],
    "high5d": 6845.0,
    "high10d": 6845.0,
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
    ]
  },
  {
    "code": "3653",
    "name": "健策",
    "categories": [
      "0050"
    ],
    "price": 4635.0,
    "prevClose": 4470.0,
    "open": 4500.0,
    "high": 4670.0,
    "low": 4415.0,
    "volume": 974,
    "ma5": 4337.0,
    "ma10": 4183.5,
    "ma20": 3787.25,
    "ma60": 3644.0,
    "vMa5": 1135,
    "vMa10": 1538,
    "high20d": 4670.0,
    "sparkline": [
      3445.0,
      3770.0,
      4145.0,
      4340.0,
      4450.0,
      4380.0,
      4135.0,
      4065.0,
      4470.0,
      4635.0
    ],
    "high5d": 4670.0,
    "high10d": 4670.0,
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
    ]
  },
  {
    "code": "2368",
    "name": "金像電",
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "price": 1010.0,
    "prevClose": 1000.0,
    "open": 1030.0,
    "high": 1045.0,
    "low": 994.0,
    "volume": 14389,
    "ma5": 976.4,
    "ma10": 936.9,
    "ma20": 906.95,
    "ma60": 1146.9,
    "vMa5": 15157,
    "vMa10": 12215,
    "high20d": 1060.0,
    "sparkline": [
      793.0,
      872.0,
      897.0,
      940.0,
      985.0,
      982.0,
      926.0,
      964.0,
      1000.0,
      1010.0
    ],
    "high5d": 1045.0,
    "high10d": 1045.0,
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
    ]
  },
  {
    "code": "4904",
    "name": "遠傳",
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "price": 99.5,
    "prevClose": 101.0,
    "open": 102.0,
    "high": 102.0,
    "low": 99.1,
    "volume": 7314,
    "ma5": 101.2,
    "ma10": 101.85,
    "ma20": 103.22,
    "ma60": 102.25,
    "vMa5": 5258,
    "vMa10": 7696,
    "high20d": 108.5,
    "sparkline": [
      105.0,
      103.5,
      101.0,
      101.0,
      102.0,
      103.0,
      101.5,
      101.0,
      101.0,
      99.5
    ],
    "high5d": 104.0,
    "high10d": 106.0,
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
    ]
  },
  {
    "code": "3045",
    "name": "台灣大",
    "categories": [
      "0050"
    ],
    "price": 108.5,
    "prevClose": 109.5,
    "open": 109.0,
    "high": 109.5,
    "low": 108.0,
    "volume": 15590,
    "ma5": 109.9,
    "ma10": 110.6,
    "ma20": 111.7,
    "ma60": 114.05,
    "vMa5": 10652,
    "vMa10": 10570,
    "high20d": 115.0,
    "sparkline": [
      112.5,
      112.0,
      111.0,
      110.5,
      110.5,
      111.5,
      110.5,
      109.5,
      109.5,
      108.5
    ],
    "high5d": 111.5,
    "high10d": 114.5,
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
    ]
  },
  {
    "code": "00403A",
    "name": "主動統一升級50",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 10.3,
    "prevClose": 10.1,
    "open": 10.26,
    "high": 10.38,
    "low": 10.22,
    "volume": 371956,
    "ma5": 9.95,
    "ma10": 9.62,
    "ma20": 9.59,
    "ma60": 10.26,
    "vMa5": 197365,
    "vMa10": 286188,
    "high20d": 10.44,
    "sparkline": [
      8.47,
      9.25,
      9.39,
      9.54,
      9.81,
      9.91,
      9.72,
      9.9,
      9.94,
      10.3
    ],
    "high5d": 10.38,
    "high10d": 10.38,
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
    ]
  },
  {
    "code": "00685L",
    "name": "群益臺灣加權正2",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 11.91,
    "prevClose": 11.6,
    "open": 11.97,
    "high": 11.99,
    "low": 11.8,
    "volume": 230754,
    "ma5": 11.35,
    "ma10": 10.89,
    "ma20": 10.86,
    "ma60": 11.67,
    "vMa5": 222077,
    "vMa10": 320558,
    "high20d": 12.24,
    "sparkline": [
      9.16,
      10.83,
      10.56,
      10.49,
      11.12,
      11.05,
      11.01,
      11.37,
      11.42,
      11.91
    ],
    "high5d": 11.99,
    "high10d": 11.99,
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
    ]
  },
  {
    "code": "00631L",
    "name": "元大台灣50正2",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 36.29,
    "prevClose": 35.45,
    "open": 36.47,
    "high": 36.5,
    "low": 35.99,
    "volume": 193458,
    "ma5": 34.68,
    "ma10": 33.44,
    "ma20": 33.31,
    "ma60": 35.47,
    "vMa5": 180643,
    "vMa10": 285767,
    "high20d": 37.32,
    "sparkline": [
      28.38,
      33.7,
      32.62,
      32.15,
      34.15,
      33.85,
      33.68,
      34.7,
      34.87,
      36.29
    ],
    "high5d": 36.5,
    "high10d": 36.5,
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
    ]
  },
  {
    "code": "2324",
    "name": "仁寶",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 39.3,
    "prevClose": 39.9,
    "open": 40.1,
    "high": 41.7,
    "low": 39.1,
    "volume": 211207,
    "ma5": 37.67,
    "ma10": 37.19,
    "ma20": 36.45,
    "ma60": 36.61,
    "vMa5": 93249,
    "vMa10": 70730,
    "high20d": 41.7,
    "sparkline": [
      36.0,
      36.35,
      37.0,
      36.95,
      37.3,
      36.55,
      36.3,
      36.3,
      39.9,
      39.3
    ],
    "high5d": 41.7,
    "high10d": 41.7,
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
    ]
  },
  {
    "code": "00981A",
    "name": "主動統一台股增長",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 29.95,
    "prevClose": 29.34,
    "open": 29.96,
    "high": 30.18,
    "low": 29.68,
    "volume": 207138,
    "ma5": 28.82,
    "ma10": 27.71,
    "ma20": 27.38,
    "ma60": 29.6,
    "vMa5": 166971,
    "vMa10": 314011,
    "high20d": 30.18,
    "sparkline": [
      23.76,
      26.13,
      27.11,
      27.58,
      28.46,
      28.84,
      28.03,
      28.53,
      28.73,
      29.95
    ],
    "high5d": 30.18,
    "high10d": 30.18,
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
    ]
  },
  {
    "code": "00632R",
    "name": "元大台灣50反1",
    "categories": [
      "Top100"
    ],
    "price": 9.95,
    "prevClose": 10.06,
    "open": 9.92,
    "high": 10.0,
    "low": 9.91,
    "volume": 157035,
    "ma5": 10.19,
    "ma10": 10.44,
    "ma20": 10.56,
    "ma60": 10.41,
    "vMa5": 148126,
    "vMa10": 240388,
    "high20d": 11.67,
    "sparkline": [
      11.49,
      10.44,
      10.6,
      10.63,
      10.3,
      10.33,
      10.35,
      10.17,
      10.16,
      9.95
    ],
    "high5d": 10.45,
    "high10d": 11.64,
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
    ]
  },
  {
    "code": "2337",
    "name": "旺宏",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 136.5,
    "prevClose": 136.5,
    "open": 140.0,
    "high": 141.5,
    "low": 136.0,
    "volume": 88482,
    "ma5": 132.1,
    "ma10": 123.8,
    "ma20": 121.22,
    "ma60": 142.64,
    "vMa5": 116303,
    "vMa10": 105336,
    "high20d": 150.5,
    "sparkline": [
      100.5,
      110.5,
      120.0,
      117.5,
      129.0,
      121.5,
      133.5,
      132.5,
      136.5,
      136.5
    ],
    "high5d": 141.5,
    "high10d": 141.5,
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
    ]
  },
  {
    "code": "1605",
    "name": "華新",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 39.3,
    "prevClose": 40.0,
    "open": 40.3,
    "high": 41.0,
    "low": 39.15,
    "volume": 57874,
    "ma5": 38.03,
    "ma10": 35.72,
    "ma20": 33.79,
    "ma60": 35.95,
    "vMa5": 58325,
    "vMa10": 41640,
    "high20d": 41.0,
    "sparkline": [
      31.45,
      32.8,
      33.75,
      34.85,
      34.25,
      34.55,
      38.0,
      38.3,
      40.0,
      39.3
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
    ]
  },
  {
    "code": "8150",
    "name": "南茂",
    "categories": [
      "Top100"
    ],
    "price": 92.9,
    "prevClose": 92.2,
    "open": 93.5,
    "high": 98.5,
    "low": 92.8,
    "volume": 72511,
    "ma5": 92.66,
    "ma10": 86.94,
    "ma20": 89.29,
    "ma60": 97.04,
    "vMa5": 65868,
    "vMa10": 49646,
    "high20d": 125.0,
    "sparkline": [
      72.6,
      77.6,
      82.5,
      86.5,
      86.9,
      86.3,
      92.9,
      99.0,
      92.2,
      92.9
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
    ]
  },
  {
    "code": "009816",
    "name": "凱基台灣TOP50",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 15.52,
    "prevClose": 15.26,
    "open": 15.49,
    "high": 15.56,
    "low": 15.42,
    "volume": 124995,
    "ma5": 15.13,
    "ma10": 14.79,
    "ma20": 14.66,
    "ma60": 15.02,
    "vMa5": 91516,
    "vMa10": 152979,
    "high20d": 15.56,
    "sparkline": [
      13.41,
      14.65,
      14.61,
      14.56,
      15.0,
      14.96,
      14.88,
      15.12,
      15.16,
      15.52
    ],
    "high5d": 15.56,
    "high10d": 15.56,
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
    ]
  },
  {
    "code": "00405A",
    "name": "主動富邦台灣龍耀",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 8.62,
    "prevClose": 8.42,
    "open": 8.6,
    "high": 8.67,
    "low": 8.52,
    "volume": 83084,
    "ma5": 8.23,
    "ma10": 7.88,
    "ma20": 7.84,
    "ma60": 8.79,
    "vMa5": 71309,
    "vMa10": 106727,
    "high20d": 8.67,
    "sparkline": [
      6.68,
      7.3,
      7.66,
      7.9,
      8.05,
      8.25,
      8.02,
      8.13,
      8.15,
      8.62
    ],
    "high5d": 8.67,
    "high10d": 8.67,
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
    ]
  },
  {
    "code": "00991A",
    "name": "主動復華未來50",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 18.19,
    "prevClose": 17.79,
    "open": 18.16,
    "high": 18.34,
    "low": 18.03,
    "volume": 97658,
    "ma5": 17.41,
    "ma10": 16.57,
    "ma20": 16.54,
    "ma60": 18.57,
    "vMa5": 99435,
    "vMa10": 216340,
    "high20d": 19.2,
    "sparkline": [
      14.01,
      15.41,
      15.98,
      16.33,
      16.89,
      17.16,
      16.86,
      17.33,
      17.52,
      18.19
    ],
    "high5d": 18.34,
    "high10d": 18.34,
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
    ]
  },
  {
    "code": "00407A",
    "name": "主動凱基台灣",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 9.83,
    "prevClose": 9.66,
    "open": 9.85,
    "high": 9.92,
    "low": 9.76,
    "volume": 125801,
    "ma5": 9.52,
    "ma10": 9.09,
    "ma20": 8.92,
    "ma60": 9.34,
    "vMa5": 66549,
    "vMa10": 63547,
    "high20d": 9.92,
    "sparkline": [
      7.82,
      8.48,
      8.74,
      8.99,
      9.28,
      9.45,
      9.28,
      9.49,
      9.55,
      9.83
    ],
    "high5d": 9.92,
    "high10d": 9.92,
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
    ]
  },
  {
    "code": "0050",
    "name": "元大台灣50",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 106.7,
    "prevClose": 105.2,
    "open": 106.55,
    "high": 107.0,
    "low": 106.15,
    "volume": 89145,
    "ma5": 104.34,
    "ma10": 102.45,
    "ma20": 101.72,
    "ma60": 103.6,
    "vMa5": 74321,
    "vMa10": 142356,
    "high20d": 107.0,
    "sparkline": [
      93.5,
      102.85,
      102.0,
      100.65,
      103.8,
      103.3,
      102.85,
      104.25,
      104.6,
      106.7
    ],
    "high5d": 107.0,
    "high10d": 107.0,
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
    ]
  },
  {
    "code": "2377",
    "name": "微星",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 168.0,
    "prevClose": 169.0,
    "open": 171.0,
    "high": 173.5,
    "low": 162.5,
    "volume": 51164,
    "ma5": 159.8,
    "ma10": 153.85,
    "ma20": 149.0,
    "ma60": 141.37,
    "vMa5": 24486,
    "vMa10": 20802,
    "high20d": 173.5,
    "sparkline": [
      142.0,
      143.0,
      149.5,
      151.0,
      154.0,
      153.0,
      155.0,
      154.0,
      169.0,
      168.0
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
    ]
  },
  {
    "code": "00878",
    "name": "國泰永續高股息",
    "categories": [
      "Top100"
    ],
    "price": 33.78,
    "prevClose": 33.52,
    "open": 33.9,
    "high": 33.95,
    "low": 33.69,
    "volume": 46795,
    "ma5": 33.26,
    "ma10": 32.78,
    "ma20": 32.45,
    "ma60": 32.26,
    "vMa5": 46345,
    "vMa10": 49601,
    "high20d": 33.95,
    "sparkline": [
      30.75,
      32.43,
      32.57,
      32.57,
      33.15,
      32.84,
      32.81,
      33.4,
      33.47,
      33.78
    ],
    "high5d": 33.95,
    "high10d": 33.95,
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
    ]
  },
  {
    "code": "1717",
    "name": "長興",
    "categories": [
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 78.2,
    "prevClose": 78.6,
    "open": 78.7,
    "high": 79.8,
    "low": 77.4,
    "volume": 28206,
    "ma5": 72.98,
    "ma10": 68.28,
    "ma20": 64.35,
    "ma60": 71.68,
    "vMa5": 21853,
    "vMa10": 15273,
    "high20d": 79.8,
    "sparkline": [
      59.9,
      61.7,
      63.6,
      66.5,
      66.2,
      66.2,
      70.0,
      71.9,
      78.6,
      78.2
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
    ]
  },
  {
    "code": "00400A",
    "name": "主動國泰動能高息",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 14.73,
    "prevClose": 14.36,
    "open": 14.68,
    "high": 14.8,
    "low": 14.59,
    "volume": 45905,
    "ma5": 14.06,
    "ma10": 13.56,
    "ma20": 13.39,
    "ma60": 14.15,
    "vMa5": 32117,
    "vMa10": 47884,
    "high20d": 14.8,
    "sparkline": [
      11.83,
      12.94,
      13.25,
      13.57,
      13.69,
      13.89,
      13.74,
      13.94,
      14.0,
      14.73
    ],
    "high5d": 14.8,
    "high10d": 14.8,
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
    ]
  },
  {
    "code": "1718",
    "name": "中纖",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 11.0,
    "prevClose": 11.2,
    "open": 11.35,
    "high": 11.45,
    "low": 10.75,
    "volume": 75415,
    "ma5": 10.51,
    "ma10": 10.11,
    "ma20": 10.67,
    "ma60": 10.56,
    "vMa5": 39538,
    "vMa10": 44051,
    "high20d": 14.95,
    "sparkline": [
      8.73,
      9.6,
      9.99,
      9.99,
      10.2,
      9.91,
      10.25,
      10.2,
      11.2,
      11.0
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
    ]
  },
  {
    "code": "00406A",
    "name": "主動中信台灣收益",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 9.69,
    "prevClose": 9.53,
    "open": 9.69,
    "high": 9.75,
    "low": 9.62,
    "volume": 47593,
    "ma5": 9.41,
    "ma10": 9.07,
    "ma20": 9.05,
    "ma60": 9.64,
    "vMa5": 40748,
    "vMa10": 67426,
    "high20d": 9.81,
    "sparkline": [
      8.06,
      8.59,
      8.81,
      8.97,
      9.27,
      9.35,
      9.23,
      9.37,
      9.4,
      9.69
    ],
    "high5d": 9.75,
    "high10d": 9.75,
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
    ]
  },
  {
    "code": "00919",
    "name": "群益台灣精選高息",
    "categories": [
      "Top100"
    ],
    "price": 30.41,
    "prevClose": 30.19,
    "open": 30.46,
    "high": 30.52,
    "low": 30.32,
    "volume": 49467,
    "ma5": 29.98,
    "ma10": 29.66,
    "ma20": 29.4,
    "ma60": 29.51,
    "vMa5": 46563,
    "vMa10": 56885,
    "high20d": 30.52,
    "sparkline": [
      28.25,
      29.57,
      29.45,
      29.51,
      29.94,
      29.6,
      29.74,
      30.03,
      30.12,
      30.41
    ],
    "high5d": 30.52,
    "high10d": 30.52,
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
    ]
  },
  {
    "code": "1802",
    "name": "台玻",
    "categories": [],
    "price": 56.9,
    "prevClose": 57.6,
    "open": 58.6,
    "high": 59.0,
    "low": 56.9,
    "volume": 19883,
    "ma5": 55.64,
    "ma10": 53.23,
    "ma20": 52.22,
    "ma60": 62.74,
    "vMa5": 26364,
    "vMa10": 30316,
    "high20d": 64.2,
    "sparkline": [
      45.7,
      47.55,
      52.3,
      53.9,
      54.6,
      53.1,
      54.7,
      55.9,
      57.6,
      56.9
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
    ]
  },
  {
    "code": "8112",
    "name": "至上",
    "categories": [],
    "price": 97.8,
    "prevClose": 96.9,
    "open": 98.5,
    "high": 100.5,
    "low": 97.6,
    "volume": 23368,
    "ma5": 95.66,
    "ma10": 90.04,
    "ma20": 86.43,
    "ma60": 89.38,
    "vMa5": 34117,
    "vMa10": 24696,
    "high20d": 101.5,
    "sparkline": [
      80.3,
      81.4,
      85.2,
      86.2,
      89.0,
      91.2,
      92.4,
      100.0,
      96.9,
      97.8
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
    ]
  },
  {
    "code": "0056",
    "name": "元大高股息",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 53.0,
    "prevClose": 52.7,
    "open": 53.4,
    "high": 53.5,
    "low": 52.9,
    "volume": 44566,
    "ma5": 52.02,
    "ma10": 50.77,
    "ma20": 50.37,
    "ma60": 50.98,
    "vMa5": 34069,
    "vMa10": 46610,
    "high20d": 53.5,
    "sparkline": [
      46.29,
      49.48,
      49.82,
      50.6,
      51.45,
      51.3,
      51.05,
      52.45,
      52.3,
      53.0
    ],
    "high5d": 53.5,
    "high10d": 53.5,
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
    ]
  },
  {
    "code": "00988A",
    "name": "主動統一全球創新",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 17.66,
    "prevClose": 16.76,
    "open": 17.47,
    "high": 17.68,
    "low": 17.38,
    "volume": 60781,
    "ma5": 16.77,
    "ma10": 16.38,
    "ma20": 16.57,
    "ma60": 19.65,
    "vMa5": 44581,
    "vMa10": 53551,
    "high20d": 19.25,
    "sparkline": [
      14.16,
      16.26,
      16.14,
      16.23,
      17.19,
      16.6,
      16.39,
      16.67,
      16.55,
      17.66
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
    ]
  },
  {
    "code": "00881",
    "name": "國泰台灣科技龍頭",
    "categories": [
      "Top100"
    ],
    "price": 55.0,
    "prevClose": 54.15,
    "open": 55.3,
    "high": 55.4,
    "low": 54.7,
    "volume": 52519,
    "ma5": 53.34,
    "ma10": 51.77,
    "ma20": 51.06,
    "ma60": 52.99,
    "vMa5": 39028,
    "vMa10": 35058,
    "high20d": 55.4,
    "sparkline": [
      46.04,
      50.6,
      50.85,
      50.9,
      52.65,
      52.75,
      52.25,
      53.2,
      53.5,
      55.0
    ],
    "high5d": 55.4,
    "high10d": 55.4,
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
    ]
  },
  {
    "code": "00992A",
    "name": "主動群益科技創新",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 17.78,
    "prevClose": 17.29,
    "open": 17.7,
    "high": 17.86,
    "low": 17.6,
    "volume": 45838,
    "ma5": 17.04,
    "ma10": 16.18,
    "ma20": 15.83,
    "ma60": 17.42,
    "vMa5": 38509,
    "vMa10": 55078,
    "high20d": 17.86,
    "sparkline": [
      13.48,
      14.82,
      15.59,
      16.18,
      16.55,
      16.93,
      16.63,
      16.9,
      16.96,
      17.78
    ],
    "high5d": 17.86,
    "high10d": 17.86,
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
    ]
  },
  {
    "code": "8039",
    "name": "台虹",
    "categories": [],
    "price": 249.5,
    "prevClose": 227.0,
    "open": 228.0,
    "high": 249.5,
    "low": 227.5,
    "volume": 22807,
    "ma5": 231.2,
    "ma10": 215.6,
    "ma20": 211.32,
    "ma60": 170.33,
    "vMa5": 23494,
    "vMa10": 23544,
    "high20d": 257.5,
    "sparkline": [
      173.5,
      190.5,
      200.0,
      220.0,
      216.0,
      237.5,
      226.0,
      216.0,
      227.0,
      249.5
    ],
    "high5d": 254.0,
    "high10d": 254.0,
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
    ]
  },
  {
    "code": "2464",
    "name": "盟立",
    "categories": [
      "MajorBuy"
    ],
    "price": 196.0,
    "prevClose": 196.5,
    "open": 198.0,
    "high": 200.5,
    "low": 192.0,
    "volume": 17163,
    "ma5": 186.7,
    "ma10": 172.55,
    "ma20": 155.4,
    "ma60": 162.3,
    "vMa5": 22960,
    "vMa10": 17940,
    "high20d": 205.0,
    "sparkline": [
      134.5,
      147.5,
      162.0,
      170.0,
      178.0,
      173.5,
      180.0,
      187.5,
      196.5,
      196.0
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
    ]
  },
  {
    "code": "5904",
    "name": "寶雅*",
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "price": 81.8,
    "prevClose": 82.5,
    "open": 81.5,
    "high": 84.0,
    "low": 77.6,
    "volume": 28660,
    "ma5": 80.52,
    "ma10": 76.26,
    "ma20": 70.94,
    "ma60": 65.79,
    "vMa5": 27706,
    "vMa10": 13853,
    "high20d": 92.3,
    "sparkline": [
      72.0,
      72.0,
      72.0,
      72.0,
      72.0,
      72.0,
      79.2,
      87.1,
      82.5,
      81.8
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
    ]
  },
  {
    "code": "6182",
    "name": "合晶",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 113.0,
    "prevClose": 103.0,
    "open": 107.5,
    "high": 113.0,
    "low": 105.5,
    "volume": 32153,
    "ma5": 100.8,
    "ma10": 99.0,
    "ma20": 108.66,
    "ma60": 114.4,
    "vMa5": 38402,
    "vMa10": 24468,
    "high20d": 189.0,
    "sparkline": [
      89.0,
      88.1,
      96.9,
      104.0,
      108.0,
      101.0,
      93.0,
      94.0,
      103.0,
      113.0
    ],
    "high5d": 113.0,
    "high10d": 113.0,
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
    ]
  },
  {
    "code": "00937B",
    "name": "群益ESG投等債20+",
    "categories": [
      "Top100"
    ],
    "price": 14.56,
    "prevClose": 14.56,
    "open": 14.56,
    "high": 14.56,
    "low": 14.54,
    "volume": 41109,
    "ma5": 14.59,
    "ma10": 14.62,
    "ma20": 14.66,
    "ma60": 14.82,
    "vMa5": 46268,
    "vMa10": 36763,
    "high20d": 14.84,
    "sparkline": [
      14.62,
      14.57,
      14.62,
      14.73,
      14.73,
      14.61,
      14.65,
      14.55,
      14.56,
      14.56
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
    ]
  },
  {
    "code": "3105",
    "name": "穩懋",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 387.0,
    "prevClose": 400.0,
    "open": 406.5,
    "high": 417.5,
    "low": 383.0,
    "volume": 39541,
    "ma5": 381.9,
    "ma10": 361.5,
    "ma20": 345.12,
    "ma60": 428.88,
    "vMa5": 26976,
    "vMa10": 23012,
    "high20d": 417.5,
    "sparkline": [
      294.5,
      311.0,
      342.0,
      376.0,
      382.0,
      366.0,
      385.5,
      371.0,
      400.0,
      387.0
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
    ]
  },
  {
    "code": "6147",
    "name": "頎邦",
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "price": 164.5,
    "prevClose": 156.5,
    "open": 159.0,
    "high": 171.0,
    "low": 159.0,
    "volume": 31728,
    "ma5": 156.6,
    "ma10": 150.25,
    "ma20": 154.03,
    "ma60": 208.39,
    "vMa5": 25573,
    "vMa10": 26895,
    "high20d": 204.5,
    "sparkline": [
      130.0,
      135.5,
      144.5,
      158.5,
      151.0,
      146.5,
      154.0,
      161.5,
      156.5,
      164.5
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
    ]
  },
  {
    "code": "6173",
    "name": "信昌電",
    "categories": [
      "Top100"
    ],
    "price": 223.5,
    "prevClose": 203.5,
    "open": 207.5,
    "high": 223.5,
    "low": 203.5,
    "volume": 36706,
    "ma5": 187.7,
    "ma10": 174.45,
    "ma20": 171.9,
    "ma60": 231.72,
    "vMa5": 18325,
    "vMa10": 11667,
    "high20d": 246.5,
    "sparkline": [
      145.5,
      160.0,
      164.5,
      165.0,
      171.0,
      158.0,
      168.5,
      185.0,
      203.5,
      223.5
    ],
    "high5d": 223.5,
    "high10d": 223.5,
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
    ]
  },
  {
    "code": "8043",
    "name": "蜜望實",
    "categories": [
      "Top100"
    ],
    "price": 154.0,
    "prevClose": 147.5,
    "open": 151.0,
    "high": 162.0,
    "low": 151.0,
    "volume": 13967,
    "ma5": 141.9,
    "ma10": 138.3,
    "ma20": 137.25,
    "ma60": 162.16,
    "vMa5": 10490,
    "vMa10": 7626,
    "high20d": 162.0,
    "sparkline": [
      126.5,
      139.0,
      137.5,
      135.5,
      135.0,
      126.0,
      134.5,
      147.5,
      147.5,
      154.0
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
    ]
  },
  {
    "code": "5328",
    "name": "華容",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 68.8,
    "prevClose": 67.2,
    "open": 67.2,
    "high": 73.0,
    "low": 67.2,
    "volume": 37094,
    "ma5": 65.06,
    "ma10": 65.17,
    "ma20": 63.65,
    "ma60": 57.53,
    "vMa5": 21418,
    "vMa10": 23030,
    "high20d": 73.0,
    "sparkline": [
      63.8,
      67.4,
      66.4,
      65.9,
      62.9,
      60.8,
      62.5,
      66.0,
      67.2,
      68.8
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
    ]
  },
  {
    "code": "1785",
    "name": "光洋科",
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "price": 109.0,
    "prevClose": 106.5,
    "open": 107.5,
    "high": 112.0,
    "low": 107.0,
    "volume": 11080,
    "ma5": 111.1,
    "ma10": 109.89,
    "ma20": 106.99,
    "ma60": 130.34,
    "vMa5": 9467,
    "vMa10": 8411,
    "high20d": 123.5,
    "sparkline": [
      99.4,
      106.5,
      111.0,
      111.5,
      115.0,
      114.5,
      118.5,
      107.0,
      106.5,
      109.0
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
    ]
  },
  {
    "code": "4979",
    "name": "華星光",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 564.0,
    "prevClose": 561.0,
    "open": 579.0,
    "high": 615.0,
    "low": 560.0,
    "volume": 26480,
    "ma5": 531.8,
    "ma10": 486.35,
    "ma20": 436.8,
    "ma60": 494.56,
    "vMa5": 15021,
    "vMa10": 9328,
    "high20d": 615.0,
    "sparkline": [
      370.0,
      407.0,
      447.5,
      492.0,
      488.0,
      488.0,
      536.0,
      510.0,
      561.0,
      564.0
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
    ]
  },
  {
    "code": "5347",
    "name": "世界",
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "price": 163.0,
    "prevClose": 159.5,
    "open": 163.0,
    "high": 166.0,
    "low": 162.0,
    "volume": 19369,
    "ma5": 156.3,
    "ma10": 154.7,
    "ma20": 154.8,
    "ma60": 170.18,
    "vMa5": 21819,
    "vMa10": 27059,
    "high20d": 192.0,
    "sparkline": [
      151.5,
      151.0,
      154.5,
      157.0,
      151.5,
      143.5,
      157.5,
      158.0,
      159.5,
      163.0
    ],
    "high5d": 166.0,
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
    ]
  },
  {
    "code": "4931",
    "name": "新盛力",
    "categories": [
      "MajorBuy"
    ],
    "price": 261.0,
    "prevClose": 267.0,
    "open": 271.0,
    "high": 271.5,
    "low": 261.0,
    "volume": 2335,
    "ma5": 247.5,
    "ma10": 221.95,
    "ma20": 208.95,
    "ma60": 230.47,
    "vMa5": 11665,
    "vMa10": 7786,
    "high20d": 271.5,
    "sparkline": [
      177.5,
      191.0,
      196.0,
      199.0,
      218.5,
      216.5,
      238.0,
      255.0,
      267.0,
      261.0
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
    ]
  },
  {
    "code": "5475",
    "name": "德宏",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 163.0,
    "prevClose": 148.5,
    "open": 157.5,
    "high": 163.0,
    "low": 148.5,
    "volume": 24383,
    "ma5": 139.0,
    "ma10": 130.95,
    "ma20": 133.0,
    "ma60": 210.19,
    "vMa5": 13100,
    "vMa10": 8629,
    "high20d": 185.0,
    "sparkline": [
      111.0,
      122.0,
      134.0,
      124.5,
      123.0,
      123.5,
      125.0,
      135.0,
      148.5,
      163.0
    ],
    "high5d": 163.0,
    "high10d": 163.0,
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
    ]
  },
  {
    "code": "3211",
    "name": "順達",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 406.5,
    "prevClose": 412.0,
    "open": 417.0,
    "high": 419.0,
    "low": 405.0,
    "volume": 9403,
    "ma5": 385.4,
    "ma10": 353.4,
    "ma20": 356.27,
    "ma60": 401.43,
    "vMa5": 13453,
    "vMa10": 10690,
    "high20d": 446.0,
    "sparkline": [
      292.0,
      309.0,
      325.0,
      324.5,
      356.5,
      338.5,
      370.0,
      400.0,
      412.0,
      406.5
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
    ]
  },
  {
    "code": "00981B",
    "name": "第一金優選非投債",
    "categories": [
      "Top100"
    ],
    "price": 9.33,
    "prevClose": 9.33,
    "open": 9.34,
    "high": 9.34,
    "low": 9.32,
    "volume": 8351,
    "ma5": 9.33,
    "ma10": 9.32,
    "ma20": 9.31,
    "ma60": 9.24,
    "vMa5": 9645,
    "vMa10": 11738,
    "high20d": 9.38,
    "sparkline": [
      9.3,
      9.28,
      9.34,
      9.34,
      9.33,
      9.32,
      9.34,
      9.34,
      9.33,
      9.33
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
    ]
  },
  {
    "code": "4991",
    "name": "環宇-KY",
    "categories": [
      "Top100"
    ],
    "price": 478.0,
    "prevClose": 484.5,
    "open": 503.0,
    "high": 512.0,
    "low": 478.0,
    "volume": 8650,
    "ma5": 483.9,
    "ma10": 449.8,
    "ma20": 418.45,
    "ma60": 532.08,
    "vMa5": 6771,
    "vMa10": 3892,
    "high20d": 522.0,
    "sparkline": [
      353.0,
      388.0,
      426.5,
      469.0,
      442.0,
      465.0,
      511.0,
      481.0,
      484.5,
      478.0
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
    ]
  },
  {
    "code": "8358",
    "name": "金居",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 421.0,
    "prevClose": 418.5,
    "open": 445.0,
    "high": 445.0,
    "low": 417.0,
    "volume": 48649,
    "ma5": 383.6,
    "ma10": 361.8,
    "ma20": 362.25,
    "ma60": 503.49,
    "vMa5": 30786,
    "vMa10": 23648,
    "high20d": 479.5,
    "sparkline": [
      298.0,
      327.5,
      341.0,
      349.5,
      384.0,
      352.0,
      346.0,
      380.5,
      418.5,
      421.0
    ],
    "high5d": 445.0,
    "high10d": 445.0,
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
    ]
  },
  {
    "code": "3441",
    "name": "聯一光",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 85.0,
    "prevClose": 87.2,
    "open": 87.4,
    "high": 88.7,
    "low": 85.0,
    "volume": 11554,
    "ma5": 83.08,
    "ma10": 85.52,
    "ma20": 77.84,
    "ma60": 72.03,
    "vMa5": 10561,
    "vMa10": 18733,
    "high20d": 95.8,
    "sparkline": [
      84.0,
      92.4,
      89.6,
      85.4,
      88.4,
      84.4,
      79.5,
      79.3,
      87.2,
      85.0
    ],
    "high5d": 94.3,
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
    ]
  },
  {
    "code": "3374",
    "name": "精材",
    "categories": [
      "Top100"
    ],
    "price": 325.0,
    "prevClose": 330.0,
    "open": 333.5,
    "high": 341.0,
    "low": 324.5,
    "volume": 13686,
    "ma5": 326.5,
    "ma10": 315.25,
    "ma20": 330.48,
    "ma60": 299.14,
    "vMa5": 12239,
    "vMa10": 11377,
    "high20d": 418.5,
    "sparkline": [
      277.0,
      304.5,
      309.5,
      313.0,
      316.0,
      306.5,
      337.0,
      334.0,
      330.0,
      325.0
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
    ]
  },
  {
    "code": "009825",
    "name": "聯邦美國金融創新",
    "categories": [
      "Top100"
    ],
    "price": 10.1,
    "prevClose": 10.09,
    "open": 10.09,
    "high": 10.1,
    "low": 10.06,
    "volume": 5428,
    "ma5": 10.06,
    "ma10": 9.98,
    "ma20": 9.87,
    "ma60": 9.92,
    "vMa5": 5200,
    "vMa10": 4292,
    "high20d": 10.1,
    "sparkline": [
      9.8,
      9.8,
      9.88,
      9.99,
      10.02,
      10.05,
      10.0,
      10.04,
      10.09,
      10.1
    ],
    "high5d": 10.1,
    "high10d": 10.1,
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
    ]
  },
  {
    "code": "8069",
    "name": "元太",
    "categories": [
      "Top100"
    ],
    "price": 171.0,
    "prevClose": 166.0,
    "open": 167.5,
    "high": 173.0,
    "low": 164.0,
    "volume": 12834,
    "ma5": 174.9,
    "ma10": 184.15,
    "ma20": 184.38,
    "ma60": 199.97,
    "vMa5": 14049,
    "vMa10": 12070,
    "high20d": 208.5,
    "sparkline": [
      189.0,
      189.0,
      197.5,
      195.5,
      196.0,
      196.0,
      176.5,
      165.0,
      166.0,
      171.0
    ],
    "high5d": 208.5,
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
    ]
  },
  {
    "code": "5351",
    "name": "鈺創",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 129.0,
    "prevClose": 122.0,
    "open": 127.0,
    "high": 130.0,
    "low": 123.0,
    "volume": 8734,
    "ma5": 117.7,
    "ma10": 102.84,
    "ma20": 92.31,
    "ma60": 90.25,
    "vMa5": 26993,
    "vMa10": 23620,
    "high20d": 130.0,
    "sparkline": [
      72.7,
      79.9,
      87.8,
      96.5,
      103.0,
      104.0,
      114.0,
      119.5,
      122.0,
      129.0
    ],
    "high5d": 130.0,
    "high10d": 130.0,
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
    ]
  },
  {
    "code": "00687B",
    "name": "國泰20年美債",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 27.43,
    "prevClose": 27.46,
    "open": 27.43,
    "high": 27.43,
    "low": 27.39,
    "volume": 8629,
    "ma5": 27.47,
    "ma10": 27.56,
    "ma20": 27.74,
    "ma60": 27.86,
    "vMa5": 9414,
    "vMa10": 15432,
    "high20d": 28.15,
    "sparkline": [
      27.73,
      27.51,
      27.54,
      27.76,
      27.76,
      27.49,
      27.57,
      27.39,
      27.46,
      27.43
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
    ]
  },
  {
    "code": "3264",
    "name": "欣銓",
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "price": 230.5,
    "prevClose": 216.5,
    "open": 222.5,
    "high": 238.0,
    "low": 220.0,
    "volume": 16815,
    "ma5": 219.3,
    "ma10": 206.8,
    "ma20": 202.68,
    "ma60": 219.6,
    "vMa5": 11899,
    "vMa10": 8786,
    "high20d": 243.5,
    "sparkline": [
      177.0,
      187.5,
      193.5,
      202.0,
      211.5,
      207.5,
      222.5,
      219.5,
      216.5,
      230.5
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
    ]
  },
  {
    "code": "6265",
    "name": "方土昶",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 58.9,
    "prevClose": 56.8,
    "open": 57.2,
    "high": 59.9,
    "low": 57.0,
    "volume": 9135,
    "ma5": 56.6,
    "ma10": 52.55,
    "ma20": 48.96,
    "ma60": 52.63,
    "vMa5": 7145,
    "vMa10": 5631,
    "high20d": 59.9,
    "sparkline": [
      42.4,
      44.85,
      49.3,
      51.3,
      54.7,
      55.4,
      55.8,
      56.1,
      56.8,
      58.9
    ],
    "high5d": 59.9,
    "high10d": 59.9,
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
    ]
  },
  {
    "code": "00679B",
    "name": "元大美債20年",
    "categories": [
      "Top100"
    ],
    "price": 26.35,
    "prevClose": 26.39,
    "open": 26.36,
    "high": 26.36,
    "low": 26.32,
    "volume": 13639,
    "ma5": 26.39,
    "ma10": 26.48,
    "ma20": 26.66,
    "ma60": 26.71,
    "vMa5": 13486,
    "vMa10": 19228,
    "high20d": 27.04,
    "sparkline": [
      26.68,
      26.42,
      26.45,
      26.67,
      26.66,
      26.41,
      26.49,
      26.32,
      26.39,
      26.35
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
    ]
  },
  {
    "code": "5340",
    "name": "建榮",
    "categories": [],
    "price": 78.6,
    "prevClose": 79.6,
    "open": 78.5,
    "high": 82.5,
    "low": 77.3,
    "volume": 5126,
    "ma5": 75.1,
    "ma10": 71.86,
    "ma20": 69.55,
    "ma60": 84.85,
    "vMa5": 4144,
    "vMa10": 3718,
    "high20d": 82.5,
    "sparkline": [
      61.2,
      64.2,
      70.6,
      75.7,
      71.4,
      70.3,
      73.0,
      74.0,
      79.6,
      78.6
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
    ]
  },
  {
    "code": "8050",
    "name": "廣積",
    "categories": [],
    "price": 58.6,
    "prevClose": 58.8,
    "open": 58.9,
    "high": 59.4,
    "low": 58.2,
    "volume": 3098,
    "ma5": 63.28,
    "ma10": 61.6,
    "ma20": 60.42,
    "ma60": 57.94,
    "vMa5": 9970,
    "vMa10": 7821,
    "high20d": 69.4,
    "sparkline": [
      54.6,
      58.0,
      59.0,
      64.9,
      63.1,
      69.0,
      68.4,
      61.6,
      58.8,
      58.6
    ],
    "high5d": 69.4,
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
    ]
  },
  {
    "code": "3163",
    "name": "波若威",
    "categories": [],
    "price": 717.0,
    "prevClose": 718.0,
    "open": 740.0,
    "high": 740.0,
    "low": 715.0,
    "volume": 1613,
    "ma5": 699.0,
    "ma10": 672.6,
    "ma20": 623.98,
    "ma60": 714.5,
    "vMa5": 5103,
    "vMa10": 4838,
    "high20d": 757.0,
    "sparkline": [
      544.0,
      598.0,
      657.0,
      722.0,
      710.0,
      671.0,
      706.0,
      683.0,
      718.0,
      717.0
    ],
    "high5d": 745.0,
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
    ]
  },
  {
    "code": "00989B",
    "name": "台新美國非投等債",
    "categories": [
      "Top100"
    ],
    "price": 10.3,
    "prevClose": 10.29,
    "open": 10.3,
    "high": 10.32,
    "low": 10.3,
    "volume": 6258,
    "ma5": 10.29,
    "ma10": 10.27,
    "ma20": 10.25,
    "ma60": 10.16,
    "vMa5": 5838,
    "vMa10": 4640,
    "high20d": 10.32,
    "sparkline": [
      10.26,
      10.24,
      10.28,
      10.27,
      10.26,
      10.26,
      10.28,
      10.3,
      10.29,
      10.3
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
    ]
  },
  {
    "code": "6016",
    "name": "康和證",
    "categories": [],
    "price": 20.1,
    "prevClose": 19.85,
    "open": 20.1,
    "high": 20.6,
    "low": 19.85,
    "volume": 4559,
    "ma5": 19.36,
    "ma10": 19.93,
    "ma20": 20.47,
    "ma60": 23.58,
    "vMa5": 6360,
    "vMa10": 4869,
    "high20d": 23.07,
    "sparkline": [
      20.6,
      20.3,
      20.45,
      20.9,
      20.3,
      19.8,
      18.4,
      18.65,
      19.85,
      20.1
    ],
    "high5d": 20.6,
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
    ]
  },
  {
    "code": "00933B",
    "name": "國泰10Y+金融債",
    "categories": [
      "Top100"
    ],
    "price": 15.9,
    "prevClose": 15.91,
    "open": 15.91,
    "high": 15.94,
    "low": 15.88,
    "volume": 8687,
    "ma5": 15.93,
    "ma10": 15.96,
    "ma20": 15.99,
    "ma60": 16.04,
    "vMa5": 8445,
    "vMa10": 7333,
    "high20d": 16.12,
    "sparkline": [
      15.99,
      15.94,
      15.96,
      16.05,
      16.03,
      15.95,
      15.97,
      15.91,
      15.91,
      15.9
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
    ]
  },
  {
    "code": "4707",
    "name": "磐亞",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 32.45,
    "prevClose": 33.0,
    "open": 34.0,
    "high": 34.95,
    "low": 32.0,
    "volume": 9363,
    "ma5": 31.86,
    "ma10": 30.07,
    "ma20": 31.14,
    "ma60": 27.19,
    "vMa5": 6879,
    "vMa10": 6899,
    "high20d": 45.0,
    "sparkline": [
      23.2,
      25.5,
      28.05,
      30.85,
      33.85,
      31.9,
      31.95,
      30.0,
      33.0,
      32.45
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
    ]
  },
  {
    "code": "4541",
    "name": "晟田",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 72.6,
    "prevClose": 70.3,
    "open": 70.6,
    "high": 73.7,
    "low": 70.3,
    "volume": 5152,
    "ma5": 68.1,
    "ma10": 65.35,
    "ma20": 66.45,
    "ma60": 56.94,
    "vMa5": 4153,
    "vMa10": 4053,
    "high20d": 81.6,
    "sparkline": [
      60.0,
      60.5,
      62.8,
      66.0,
      63.7,
      65.9,
      65.4,
      66.3,
      70.3,
      72.6
    ],
    "high5d": 73.7,
    "high10d": 73.7,
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
    ]
  },
  {
    "code": "6603",
    "name": "富強鑫",
    "categories": [
      "MajorBuy"
    ],
    "price": 28.85,
    "prevClose": 27.7,
    "open": 28.35,
    "high": 29.3,
    "low": 28.0,
    "volume": 4858,
    "ma5": 27.26,
    "ma10": 26.72,
    "ma20": 25.72,
    "ma60": 24.51,
    "vMa5": 3393,
    "vMa10": 2688,
    "high20d": 29.4,
    "sparkline": [
      26.15,
      26.3,
      25.95,
      26.75,
      25.75,
      26.0,
      26.85,
      26.9,
      27.7,
      28.85
    ],
    "high5d": 29.4,
    "high10d": 29.4,
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
    ]
  },
  {
    "code": "5371",
    "name": "中光電",
    "categories": [
      "Top100"
    ],
    "price": 86.3,
    "prevClose": 86.5,
    "open": 86.6,
    "high": 88.1,
    "low": 85.7,
    "volume": 6114,
    "ma5": 85.8,
    "ma10": 83.78,
    "ma20": 81.95,
    "ma60": 79.94,
    "vMa5": 9139,
    "vMa10": 11020,
    "high20d": 98.3,
    "sparkline": [
      73.7,
      75.2,
      82.7,
      90.5,
      86.7,
      83.0,
      85.6,
      87.6,
      86.5,
      86.3
    ],
    "high5d": 89.3,
    "high10d": 90.8,
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
    ]
  },
  {
    "code": "8042",
    "name": "金山電",
    "categories": [
      "Top100"
    ],
    "price": 116.5,
    "prevClose": 113.0,
    "open": 115.0,
    "high": 123.0,
    "low": 115.0,
    "volume": 8189,
    "ma5": 115.3,
    "ma10": 111.67,
    "ma20": 113.0,
    "ma60": 149.12,
    "vMa5": 8127,
    "vMa10": 5872,
    "high20d": 160.0,
    "sparkline": [
      98.7,
      108.5,
      110.5,
      110.0,
      112.5,
      116.5,
      114.0,
      116.5,
      113.0,
      116.5
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
    ]
  },
  {
    "code": "00888",
    "name": "永豐台灣ESG",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 33.32,
    "prevClose": 32.61,
    "open": 33.31,
    "high": 33.64,
    "low": 33.16,
    "volume": 12627,
    "ma5": 32.58,
    "ma10": 32.12,
    "ma20": 32.36,
    "ma60": 34.62,
    "vMa5": 7182,
    "vMa10": 9217,
    "high20d": 37.56,
    "sparkline": [
      31.47,
      31.24,
      31.38,
      32.09,
      32.1,
      31.71,
      32.66,
      32.59,
      32.61,
      33.32
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
    ]
  },
  {
    "code": "1815",
    "name": "富喬",
    "categories": [
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 89.9,
    "prevClose": 90.0,
    "open": 91.5,
    "high": 91.5,
    "low": 89.0,
    "volume": 4001,
    "ma5": 88.72,
    "ma10": 83.36,
    "ma20": 78.55,
    "ma60": 92.99,
    "vMa5": 18878,
    "vMa10": 21752,
    "high20d": 93.9,
    "sparkline": [
      66.3,
      72.9,
      80.1,
      83.9,
      86.8,
      85.9,
      89.1,
      88.7,
      90.0,
      89.9
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
    ]
  },
  {
    "code": "4716",
    "name": "大立",
    "categories": [],
    "price": 17.35,
    "prevClose": 17.4,
    "open": 17.55,
    "high": 17.9,
    "low": 17.3,
    "volume": 1205,
    "ma5": 17.52,
    "ma10": 17.23,
    "ma20": 17.49,
    "ma60": 18.63,
    "vMa5": 2464,
    "vMa10": 1607,
    "high20d": 21.7,
    "sparkline": [
      16.5,
      16.5,
      17.55,
      17.0,
      17.2,
      16.65,
      17.3,
      18.9,
      17.4,
      17.35
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
    ]
  },
  {
    "code": "00950B",
    "name": "凱基A級公司債",
    "categories": [],
    "price": 13.85,
    "prevClose": 13.85,
    "open": 13.88,
    "high": 13.88,
    "low": 13.84,
    "volume": 1793,
    "ma5": 13.88,
    "ma10": 13.93,
    "ma20": 14.0,
    "ma60": 14.07,
    "vMa5": 4004,
    "vMa10": 3957,
    "high20d": 14.17,
    "sparkline": [
      13.98,
      13.9,
      13.94,
      14.03,
      14.0,
      13.92,
      13.95,
      13.85,
      13.85,
      13.85
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
    ]
  },
  {
    "code": "5425",
    "name": "台半",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 88.8,
    "prevClose": 86.7,
    "open": 89.2,
    "high": 93.2,
    "low": 88.4,
    "volume": 14789,
    "ma5": 85.66,
    "ma10": 83.18,
    "ma20": 83.09,
    "ma60": 102.24,
    "vMa5": 7972,
    "vMa10": 8528,
    "high20d": 110.0,
    "sparkline": [
      73.1,
      80.4,
      81.6,
      83.5,
      84.9,
      82.5,
      84.3,
      86.0,
      86.7,
      88.8
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
    ]
  },
  {
    "code": "3624",
    "name": "光頡",
    "categories": [
      "Top100"
    ],
    "price": 95.1,
    "prevClose": 86.5,
    "open": 88.5,
    "high": 95.1,
    "low": 88.5,
    "volume": 7674,
    "ma5": 84.76,
    "ma10": 76.91,
    "ma20": 79.21,
    "ma60": 111.08,
    "vMa5": 6343,
    "vMa10": 3973,
    "high20d": 120.0,
    "sparkline": [
      62.5,
      64.4,
      68.0,
      74.8,
      75.6,
      74.8,
      82.2,
      85.2,
      86.5,
      95.1
    ],
    "high5d": 95.1,
    "high10d": 95.1,
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
    ]
  },
  {
    "code": "5864",
    "name": "致和證",
    "categories": [
      "MajorBuy"
    ],
    "price": 33.9,
    "prevClose": 33.45,
    "open": 33.6,
    "high": 34.35,
    "low": 33.5,
    "volume": 5043,
    "ma5": 31.23,
    "ma10": 30.8,
    "ma20": 31.29,
    "ma60": 37.29,
    "vMa5": 3891,
    "vMa10": 4298,
    "high20d": 37.2,
    "sparkline": [
      30.5,
      30.15,
      30.85,
      31.15,
      29.15,
      28.8,
      29.55,
      30.45,
      33.45,
      33.9
    ],
    "high5d": 34.35,
    "high10d": 34.35,
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
    ]
  },
  {
    "code": "4939",
    "name": "亞電",
    "categories": [
      "Top100"
    ],
    "price": 63.9,
    "prevClose": 60.8,
    "open": 61.1,
    "high": 64.9,
    "low": 61.1,
    "volume": 14480,
    "ma5": 61.7,
    "ma10": 59.22,
    "ma20": 60.35,
    "ma60": 58.61,
    "vMa5": 11690,
    "vMa10": 12511,
    "high20d": 78.2,
    "sparkline": [
      50.8,
      55.8,
      56.3,
      59.4,
      61.4,
      60.8,
      61.3,
      61.7,
      60.8,
      63.9
    ],
    "high5d": 67.2,
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
    ]
  },
  {
    "code": "3234",
    "name": "光環",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 141.0,
    "prevClose": 133.0,
    "open": 133.5,
    "high": 146.0,
    "low": 133.5,
    "volume": 8144,
    "ma5": 124.2,
    "ma10": 115.92,
    "ma20": 108.03,
    "ma60": 117.43,
    "vMa5": 3928,
    "vMa10": 2740,
    "high20d": 146.0,
    "sparkline": [
      95.7,
      104.0,
      113.0,
      115.0,
      110.5,
      107.5,
      118.0,
      121.5,
      133.0,
      141.0
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
    ]
  },
  {
    "code": "4938",
    "name": "和碩",
    "categories": [
      "SitcaBuy",
      "MajorBuy",
      "Top100"
    ],
    "price": 94.8,
    "prevClose": 91.4,
    "open": 93.6,
    "high": 100.5,
    "low": 93.5,
    "volume": 66760,
    "ma5": 90.36,
    "ma10": 88.87,
    "ma20": 86.34,
    "ma60": 86.05,
    "vMa5": 21203,
    "vMa10": 16980,
    "high5d": 100.5,
    "high10d": 100.5,
    "high20d": 100.5,
    "sparkline": [
      84.4,
      86.6,
      88.4,
      89.5,
      88.0,
      87.1,
      89.5,
      89.0,
      91.4,
      94.8
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
    ]
  },
  {
    "code": "2855",
    "name": "統一證",
    "categories": [
      "SitcaBuy"
    ],
    "price": 47.35,
    "prevClose": 47.5,
    "open": 48.05,
    "high": 48.5,
    "low": 47.1,
    "volume": 3823,
    "ma5": 46.28,
    "ma10": 45.45,
    "ma20": 44.34,
    "ma60": 47.87,
    "vMa5": 4156,
    "vMa10": 4338,
    "high5d": 48.5,
    "high10d": 48.5,
    "high20d": 48.5,
    "sparkline": [
      43.3,
      44.15,
      44.75,
      45.85,
      45.1,
      44.5,
      45.85,
      46.2,
      47.5,
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
    ]
  },
  {
    "code": "3450",
    "name": "聯鈞",
    "categories": [
      "SitcaBuy"
    ],
    "price": 527.0,
    "prevClose": 507.0,
    "open": 525.0,
    "high": 543.0,
    "low": 499.5,
    "volume": 2532,
    "ma5": 501.7,
    "ma10": 468.8,
    "ma20": 442.1,
    "ma60": 487.77,
    "vMa5": 7564,
    "vMa10": 9594,
    "high5d": 543.0,
    "high10d": 543.0,
    "high20d": 543.0,
    "sparkline": [
      372.0,
      409.0,
      432.0,
      475.0,
      491.5,
      477.0,
      524.0,
      473.5,
      507.0,
      527.0
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
    ]
  },
  {
    "code": "6805",
    "name": "富世達",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1830.0,
    "prevClose": 1835.0,
    "open": 1850.0,
    "high": 1915.0,
    "low": 1825.0,
    "volume": 2125,
    "ma5": 1776.0,
    "ma10": 1665.0,
    "ma20": 1513.25,
    "ma60": 1654.5,
    "vMa5": 2520,
    "vMa10": 2220,
    "high5d": 1915.0,
    "high10d": 1915.0,
    "high20d": 1915.0,
    "sparkline": [
      1350.0,
      1470.0,
      1590.0,
      1600.0,
      1760.0,
      1670.0,
      1755.0,
      1790.0,
      1835.0,
      1830.0
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
    ]
  },
  {
    "code": "00980A",
    "name": "主動野村臺灣優選",
    "categories": [
      "SitcaBuy"
    ],
    "price": 25.2,
    "prevClose": 24.73,
    "open": 25.18,
    "high": 25.3,
    "low": 25.02,
    "volume": 23589,
    "ma5": 24.18,
    "ma10": 23.0,
    "ma20": 22.44,
    "ma60": 23.56,
    "vMa5": 15697,
    "vMa10": 23522,
    "high5d": 25.3,
    "high10d": 25.3,
    "high20d": 25.3,
    "sparkline": [
      19.56,
      21.46,
      22.13,
      22.66,
      23.31,
      23.73,
      23.57,
      24.09,
      24.29,
      25.2
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
    ]
  },
  {
    "code": "2542",
    "name": "興富發",
    "categories": [
      "SitcaBuy"
    ],
    "price": 46.4,
    "prevClose": 44.8,
    "open": 45.0,
    "high": 46.4,
    "low": 44.9,
    "volume": 16821,
    "ma5": 44.88,
    "ma10": 44.45,
    "ma20": 44.16,
    "ma60": 43.68,
    "vMa5": 7364,
    "vMa10": 6498,
    "high5d": 46.4,
    "high10d": 46.4,
    "high20d": 46.4,
    "sparkline": [
      44.0,
      43.85,
      44.15,
      44.05,
      44.1,
      44.3,
      44.35,
      44.55,
      44.8,
      46.4
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
    ]
  },
  {
    "code": "2633",
    "name": "台灣高鐵",
    "categories": [
      "SitcaBuy"
    ],
    "price": 25.95,
    "prevClose": 25.8,
    "open": 25.85,
    "high": 25.95,
    "low": 25.7,
    "volume": 4984,
    "ma5": 25.83,
    "ma10": 25.85,
    "ma20": 25.94,
    "ma60": 25.9,
    "vMa5": 4502,
    "vMa10": 5047,
    "high5d": 26.0,
    "high10d": 26.6,
    "high20d": 26.6,
    "sparkline": [
      26.05,
      25.9,
      25.75,
      25.9,
      25.8,
      25.8,
      25.9,
      25.7,
      25.8,
      25.95
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
    ]
  },
  {
    "code": "3044",
    "name": "健鼎",
    "categories": [
      "SitcaBuy"
    ],
    "price": 495.0,
    "prevClose": 485.5,
    "open": 502.0,
    "high": 524.0,
    "low": 485.5,
    "volume": 14119,
    "ma5": 443.5,
    "ma10": 414.85,
    "ma20": 399.32,
    "ma60": 466.22,
    "vMa5": 5896,
    "vMa10": 4635,
    "high5d": 524.0,
    "high10d": 524.0,
    "high20d": 524.0,
    "sparkline": [
      369.0,
      374.0,
      392.0,
      398.5,
      397.5,
      394.0,
      401.5,
      441.5,
      485.5,
      495.0
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
    ]
  },
  {
    "code": "4915",
    "name": "致伸",
    "categories": [
      "SitcaBuy"
    ],
    "price": 60.7,
    "prevClose": 60.4,
    "open": 61.0,
    "high": 61.0,
    "low": 60.2,
    "volume": 3237,
    "ma5": 60.26,
    "ma10": 62.05,
    "ma20": 63.45,
    "ma60": 69.3,
    "vMa5": 4088,
    "vMa10": 4121,
    "high5d": 61.9,
    "high10d": 66.5,
    "high20d": 68.2,
    "sparkline": [
      65.4,
      64.6,
      63.6,
      63.7,
      61.9,
      59.5,
      60.7,
      60.0,
      60.4,
      60.7
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
    ]
  },
  {
    "code": "4551",
    "name": "智伸科",
    "categories": [
      "SitcaBuy"
    ],
    "price": 174.0,
    "prevClose": 172.5,
    "open": 174.0,
    "high": 182.0,
    "low": 174.0,
    "volume": 3293,
    "ma5": 169.0,
    "ma10": 166.65,
    "ma20": 171.43,
    "ma60": 186.47,
    "vMa5": 1989,
    "vMa10": 1306,
    "high5d": 182.0,
    "high10d": 182.0,
    "high20d": 213.0,
    "sparkline": [
      163.0,
      160.0,
      163.0,
      165.5,
      170.0,
      167.5,
      174.0,
      157.0,
      172.5,
      174.0
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
    ]
  },
  {
    "code": "8996",
    "name": "高力",
    "categories": [],
    "price": 1285.0,
    "prevClose": 1170.0,
    "open": 1235.0,
    "high": 1285.0,
    "low": 1195.0,
    "volume": 3925,
    "ma5": 1128.0,
    "ma10": 1063.5,
    "ma20": 1015.1,
    "ma60": 1191.03,
    "vMa5": 2881,
    "vMa10": 3010,
    "high5d": 1285.0,
    "high10d": 1285.0,
    "high20d": 1285.0,
    "sparkline": [
      855.0,
      940.0,
      1030.0,
      1035.0,
      1135.0,
      1045.0,
      1075.0,
      1065.0,
      1170.0,
      1285.0
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
    ]
  },
  {
    "code": "2903",
    "name": "遠百",
    "categories": [
      "SitcaBuy"
    ],
    "price": 21.75,
    "prevClose": 22.0,
    "open": 21.9,
    "high": 21.9,
    "low": 21.55,
    "volume": 7166,
    "ma5": 21.94,
    "ma10": 22.01,
    "ma20": 22.16,
    "ma60": 22.53,
    "vMa5": 2188,
    "vMa10": 2001,
    "high5d": 22.1,
    "high10d": 22.7,
    "high20d": 22.7,
    "sparkline": [
      22.15,
      22.35,
      22.1,
      22.0,
      21.85,
      22.0,
      22.05,
      21.9,
      22.0,
      21.75
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
    ]
  },
  {
    "code": "6139",
    "name": "亞翔",
    "categories": [],
    "price": 805.0,
    "prevClose": 811.0,
    "open": 824.0,
    "high": 831.0,
    "low": 805.0,
    "volume": 2836,
    "ma5": 807.6,
    "ma10": 793.2,
    "ma20": 782.15,
    "ma60": 816.48,
    "vMa5": 3311,
    "vMa10": 3525,
    "high5d": 838.0,
    "high10d": 840.0,
    "high20d": 912.0,
    "sparkline": [
      707.0,
      765.0,
      786.0,
      800.0,
      836.0,
      802.0,
      808.0,
      812.0,
      811.0,
      805.0
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
    ]
  },
  {
    "code": "2481",
    "name": "強茂",
    "categories": [
      "Top100"
    ],
    "price": 143.0,
    "prevClose": 139.0,
    "open": 140.5,
    "high": 152.5,
    "low": 140.0,
    "volume": 36079,
    "ma5": 138.8,
    "ma10": 134.35,
    "ma20": 135.05,
    "ma60": 157.97,
    "vMa5": 20834,
    "vMa10": 21988,
    "high5d": 152.5,
    "high10d": 152.5,
    "high20d": 183.0,
    "sparkline": [
      117.5,
      129.0,
      130.0,
      134.0,
      139.0,
      133.0,
      137.5,
      141.5,
      139.0,
      143.0
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
    ]
  },
  {
    "code": "2027",
    "name": "大成鋼",
    "categories": [
      "Top100"
    ],
    "price": 50.4,
    "prevClose": 46.85,
    "open": 48.5,
    "high": 51.5,
    "low": 48.0,
    "volume": 58603,
    "ma5": 47.52,
    "ma10": 45.99,
    "ma20": 44.38,
    "ma60": 42.54,
    "vMa5": 23717,
    "vMa10": 22391,
    "high5d": 51.5,
    "high10d": 51.5,
    "high20d": 51.5,
    "sparkline": [
      43.2,
      44.45,
      44.25,
      44.35,
      46.1,
      46.6,
      47.3,
      46.45,
      46.85,
      50.4
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
    ]
  },
  {
    "code": "3090",
    "name": "日電貿",
    "categories": [],
    "price": 175.0,
    "prevClose": 170.5,
    "open": 173.5,
    "high": 187.0,
    "low": 173.5,
    "volume": 21409,
    "ma5": 166.3,
    "ma10": 154.0,
    "ma20": 157.05,
    "ma60": 228.69,
    "vMa5": 18815,
    "vMa10": 14726,
    "high5d": 187.0,
    "high10d": 187.0,
    "high20d": 231.0,
    "sparkline": [
      125.0,
      137.5,
      144.0,
      147.0,
      155.0,
      150.5,
      161.0,
      174.5,
      170.5,
      175.0
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
    ]
  },
  {
    "code": "2347",
    "name": "聯強",
    "categories": [
      "SitcaBuy"
    ],
    "price": 91.5,
    "prevClose": 91.6,
    "open": 91.6,
    "high": 92.3,
    "low": 90.9,
    "volume": 3181,
    "ma5": 91.88,
    "ma10": 93.04,
    "ma20": 89.78,
    "ma60": 89.58,
    "vMa5": 4511,
    "vMa10": 5186,
    "high5d": 94.0,
    "high10d": 98.3,
    "high20d": 98.3,
    "sparkline": [
      93.7,
      91.7,
      93.8,
      97.1,
      94.7,
      93.4,
      91.9,
      91.0,
      91.6,
      91.5
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
    ]
  },
  {
    "code": "009814",
    "name": "富邦標普500",
    "categories": [
      "SitcaBuy"
    ],
    "price": 11.59,
    "prevClose": 11.57,
    "open": 11.57,
    "high": 11.59,
    "low": 11.57,
    "volume": 979,
    "ma5": 11.59,
    "ma10": 11.51,
    "ma20": 11.34,
    "ma60": 11.14,
    "vMa5": 1097,
    "vMa10": 841,
    "high5d": 11.63,
    "high10d": 11.66,
    "high20d": 11.66,
    "sparkline": [
      11.22,
      11.31,
      11.43,
      11.63,
      11.58,
      11.53,
      11.63,
      11.61,
      11.57,
      11.59
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
    ]
  },
  {
    "code": "00695B",
    "name": "富邦美債7-10",
    "categories": [
      "SitcaBuy"
    ],
    "price": 35.23,
    "prevClose": 35.24,
    "open": 35.25,
    "high": 35.26,
    "low": 35.23,
    "volume": 74,
    "ma5": 35.24,
    "ma10": 35.32,
    "ma20": 35.38,
    "ma60": 35.28,
    "vMa5": 326,
    "vMa10": 313,
    "high5d": 35.35,
    "high10d": 35.5,
    "high20d": 35.62,
    "sparkline": [
      35.5,
      35.32,
      35.36,
      35.41,
      35.4,
      35.23,
      35.32,
      35.19,
      35.24,
      35.23
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
    ]
  },
  {
    "code": "3081",
    "name": "聯亞",
    "categories": [
      "SitcaBuy"
    ],
    "price": 2665.0,
    "prevClose": 2725.0,
    "open": 2840.0,
    "high": 2845.0,
    "low": 2640.0,
    "volume": 1865,
    "ma5": 2542.0,
    "ma10": 2263.0,
    "ma20": 1942.75,
    "ma60": 2047.55,
    "vMa5": 2567,
    "vMa10": 1911,
    "high5d": 2845.0,
    "high10d": 2845.0,
    "high20d": 2845.0,
    "sparkline": [
      1630.0,
      1790.0,
      1965.0,
      2160.0,
      2375.0,
      2305.0,
      2535.0,
      2480.0,
      2725.0,
      2665.0
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
    ]
  },
  {
    "code": "6510",
    "name": "精測",
    "categories": [
      "SitcaBuy"
    ],
    "price": 2820.0,
    "prevClose": 2825.0,
    "open": 2895.0,
    "high": 2925.0,
    "low": 2810.0,
    "volume": 430,
    "ma5": 2797.0,
    "ma10": 2752.0,
    "ma20": 2657.75,
    "ma60": 3051.33,
    "vMa5": 464,
    "vMa10": 527,
    "high5d": 2950.0,
    "high10d": 2975.0,
    "high20d": 2975.0,
    "sparkline": [
      2495.0,
      2655.0,
      2795.0,
      2755.0,
      2835.0,
      2695.0,
      2845.0,
      2800.0,
      2825.0,
      2820.0
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
    ]
  },
  {
    "code": "3529",
    "name": "力旺",
    "categories": [
      "SitcaBuy"
    ],
    "price": 2700.0,
    "prevClose": 2660.0,
    "open": 2675.0,
    "high": 2800.0,
    "low": 2630.0,
    "volume": 1024,
    "ma5": 2716.0,
    "ma10": 2631.0,
    "ma20": 2495.25,
    "ma60": 2896.08,
    "vMa5": 919,
    "vMa10": 1074,
    "high5d": 2995.0,
    "high10d": 2995.0,
    "high20d": 2995.0,
    "sparkline": [
      2475.0,
      2390.0,
      2575.0,
      2630.0,
      2660.0,
      2725.0,
      2835.0,
      2660.0,
      2660.0,
      2700.0
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
    ]
  },
  {
    "code": "5274",
    "name": "信驊",
    "categories": [
      "SitcaBuy"
    ],
    "price": 17490.0,
    "prevClose": 17370.0,
    "open": 17920.0,
    "high": 18085.0,
    "low": 17010.0,
    "volume": 341,
    "ma5": 16837.0,
    "ma10": 16295.5,
    "ma20": 15137.0,
    "ma60": 15447.68,
    "vMa5": 218,
    "vMa10": 225,
    "high5d": 18085.0,
    "high10d": 18085.0,
    "high20d": 18085.0,
    "sparkline": [
      14525.0,
      15975.0,
      15500.0,
      16020.0,
      16750.0,
      16345.0,
      16540.0,
      16440.0,
      17370.0,
      17490.0
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
    ]
  },
  {
    "code": "4749",
    "name": "新應材",
    "categories": [
      "SitcaBuy"
    ],
    "price": 798.0,
    "prevClose": 809.0,
    "open": 824.0,
    "high": 824.0,
    "low": 795.0,
    "volume": 538,
    "ma5": 801.0,
    "ma10": 788.7,
    "ma20": 777.0,
    "ma60": 900.68,
    "vMa5": 654,
    "vMa10": 753,
    "high5d": 828.0,
    "high10d": 832.0,
    "high20d": 884.0,
    "sparkline": [
      722.0,
      765.0,
      778.0,
      794.0,
      823.0,
      809.0,
      786.0,
      803.0,
      809.0,
      798.0
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
    ]
  },
  {
    "code": "00980D",
    "name": "主動聯博投等入息",
    "categories": [
      "SitcaBuy"
    ],
    "price": 20.44,
    "prevClose": 20.42,
    "open": 20.43,
    "high": 20.45,
    "low": 20.42,
    "volume": 647,
    "ma5": 20.44,
    "ma10": 20.45,
    "ma20": 20.45,
    "ma60": 20.44,
    "vMa5": 551,
    "vMa10": 534,
    "high5d": 20.48,
    "high10d": 20.55,
    "high20d": 20.57,
    "sparkline": [
      20.45,
      20.41,
      20.43,
      20.49,
      20.5,
      20.45,
      20.46,
      20.42,
      20.42,
      20.44
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
    ]
  },
  {
    "code": "3131",
    "name": "弘塑",
    "categories": [
      "SitcaBuy"
    ],
    "price": 2635.0,
    "prevClose": 2555.0,
    "open": 2610.0,
    "high": 2730.0,
    "low": 2560.0,
    "volume": 857,
    "ma5": 2487.0,
    "ma10": 2449.5,
    "ma20": 2597.5,
    "ma60": 3069.58,
    "vMa5": 740,
    "vMa10": 758,
    "high5d": 2730.0,
    "high10d": 2730.0,
    "high20d": 3330.0,
    "sparkline": [
      2370.0,
      2420.0,
      2540.0,
      2345.0,
      2385.0,
      2385.0,
      2470.0,
      2390.0,
      2555.0,
      2635.0
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
    ]
  },
  {
    "code": "006201",
    "name": "元大富櫃50",
    "categories": [
      "SitcaBuy"
    ],
    "price": 45.67,
    "prevClose": 45.26,
    "open": 46.49,
    "high": 46.5,
    "low": 45.52,
    "volume": 399,
    "ma5": 44.24,
    "ma10": 42.64,
    "ma20": 41.37,
    "ma60": 45.67,
    "vMa5": 380,
    "vMa10": 536,
    "high5d": 46.5,
    "high10d": 46.5,
    "high20d": 46.5,
    "sparkline": [
      38.07,
      39.88,
      41.2,
      42.42,
      43.66,
      42.6,
      43.85,
      43.8,
      45.26,
      45.67
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
    ]
  },
  {
    "code": "4123",
    "name": "晟德",
    "categories": [
      "SitcaBuy",
      "Top100"
    ],
    "price": 34.7,
    "prevClose": 35.1,
    "open": 34.1,
    "high": 34.9,
    "low": 33.85,
    "volume": 10454,
    "ma5": 37.46,
    "ma10": 38.04,
    "ma20": 37.99,
    "ma60": 38.07,
    "vMa5": 4181,
    "vMa10": 3377,
    "high5d": 39.4,
    "high10d": 39.5,
    "high20d": 39.5,
    "sparkline": [
      37.75,
      38.5,
      38.95,
      39.15,
      38.75,
      39.1,
      39.4,
      39.0,
      35.1,
      34.7
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
    ]
  },
  {
    "code": "6121",
    "name": "新普",
    "categories": [
      "SitcaBuy"
    ],
    "price": 431.5,
    "prevClose": 431.5,
    "open": 435.0,
    "high": 440.0,
    "low": 424.5,
    "volume": 823,
    "ma5": 413.1,
    "ma10": 390.35,
    "ma20": 378.98,
    "ma60": 399.63,
    "vMa5": 1293,
    "vMa10": 1189,
    "high5d": 440.0,
    "high10d": 440.0,
    "high20d": 440.0,
    "sparkline": [
      352.5,
      362.5,
      370.0,
      372.5,
      380.5,
      373.0,
      395.0,
      434.5,
      431.5,
      431.5
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
    ]
  },
  {
    "code": "3491",
    "name": "昇達科",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1345.0,
    "prevClose": 1320.0,
    "open": 1360.0,
    "high": 1440.0,
    "low": 1325.0,
    "volume": 2219,
    "ma5": 1282.0,
    "ma10": 1224.9,
    "ma20": 1199.6,
    "ma60": 1463.2,
    "vMa5": 1712,
    "vMa10": 2044,
    "high5d": 1440.0,
    "high10d": 1440.0,
    "high20d": 1440.0,
    "sparkline": [
      969.0,
      1065.0,
      1170.0,
      1285.0,
      1350.0,
      1235.0,
      1235.0,
      1275.0,
      1320.0,
      1345.0
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
    ]
  },
  {
    "code": "3293",
    "name": "鈊象",
    "categories": [
      "SitcaBuy"
    ],
    "price": 762.0,
    "prevClose": 781.0,
    "open": 772.0,
    "high": 777.0,
    "low": 750.0,
    "volume": 2339,
    "ma5": 787.6,
    "ma10": 782.0,
    "ma20": 749.8,
    "ma60": 759.58,
    "vMa5": 1803,
    "vMa10": 1836,
    "high5d": 806.0,
    "high10d": 806.0,
    "high20d": 806.0,
    "sparkline": [
      776.0,
      771.0,
      774.0,
      777.0,
      784.0,
      799.0,
      792.0,
      804.0,
      781.0,
      762.0
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
    ]
  },
  {
    "code": "6138",
    "name": "茂達",
    "categories": [
      "SitcaBuy"
    ],
    "price": 301.5,
    "prevClose": 292.5,
    "open": 298.0,
    "high": 311.5,
    "low": 297.5,
    "volume": 1430,
    "ma5": 289.3,
    "ma10": 286.25,
    "ma20": 295.35,
    "ma60": 330.58,
    "vMa5": 896,
    "vMa10": 1009,
    "high5d": 311.5,
    "high10d": 311.5,
    "high20d": 349.5,
    "sparkline": [
      265.0,
      277.5,
      295.5,
      289.5,
      288.5,
      276.0,
      288.5,
      288.0,
      292.5,
      301.5
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
    ]
  },
  {
    "code": "8436",
    "name": "大江",
    "categories": [
      "SitcaBuy"
    ],
    "price": 122.5,
    "prevClose": 124.5,
    "open": 124.0,
    "high": 124.0,
    "low": 121.5,
    "volume": 796,
    "ma5": 123.1,
    "ma10": 118.9,
    "ma20": 116.85,
    "ma60": 117.17,
    "vMa5": 1523,
    "vMa10": 980,
    "high5d": 127.5,
    "high10d": 127.5,
    "high20d": 127.5,
    "sparkline": [
      113.0,
      113.0,
      113.5,
      114.5,
      119.5,
      117.0,
      125.5,
      126.0,
      124.5,
      122.5
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
    ]
  },
  {
    "code": "4966",
    "name": "譜瑞-KY",
    "categories": [
      "SitcaBuy"
    ],
    "price": 586.0,
    "prevClose": 591.0,
    "open": 594.0,
    "high": 601.0,
    "low": 585.0,
    "volume": 848,
    "ma5": 594.0,
    "ma10": 591.5,
    "ma20": 588.55,
    "ma60": 664.08,
    "vMa5": 782,
    "vMa10": 887,
    "high5d": 613.0,
    "high10d": 622.0,
    "high20d": 642.0,
    "sparkline": [
      562.0,
      576.0,
      584.0,
      618.0,
      605.0,
      598.0,
      600.0,
      595.0,
      591.0,
      586.0
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
    ]
  },
  {
    "code": "6274",
    "name": "台燿",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1600.0,
    "prevClose": 1600.0,
    "open": 1675.0,
    "high": 1675.0,
    "low": 1525.0,
    "volume": 2932,
    "ma5": 1541.0,
    "ma10": 1437.5,
    "ma20": 1313.0,
    "ma60": 1506.08,
    "vMa5": 3867,
    "vMa10": 4915,
    "high5d": 1675.0,
    "high10d": 1675.0,
    "high20d": 1675.0,
    "sparkline": [
      1110.0,
      1220.0,
      1340.0,
      1470.0,
      1530.0,
      1440.0,
      1460.0,
      1605.0,
      1600.0,
      1600.0
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
    ]
  },
  {
    "code": "5289",
    "name": "宜鼎",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1535.0,
    "prevClose": 1520.0,
    "open": 1560.0,
    "high": 1560.0,
    "low": 1510.0,
    "volume": 2193,
    "ma5": 1498.0,
    "ma10": 1466.0,
    "ma20": 1371.0,
    "ma60": 1605.08,
    "vMa5": 3582,
    "vMa10": 2991,
    "high5d": 1680.0,
    "high10d": 1680.0,
    "high20d": 1680.0,
    "sparkline": [
      1295.0,
      1385.0,
      1415.0,
      1465.0,
      1610.0,
      1500.0,
      1465.0,
      1470.0,
      1520.0,
      1535.0
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
    ]
  },
  {
    "code": "3324",
    "name": "雙鴻",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1035.0,
    "prevClose": 1050.0,
    "open": 1065.0,
    "high": 1080.0,
    "low": 1025.0,
    "volume": 4521,
    "ma5": 1031.0,
    "ma10": 997.0,
    "ma20": 945.8,
    "ma60": 999.68,
    "vMa5": 3282,
    "vMa10": 3265,
    "high5d": 1080.0,
    "high10d": 1080.0,
    "high20d": 1080.0,
    "sparkline": [
      902.0,
      944.0,
      944.0,
      965.0,
      1060.0,
      1015.0,
      1010.0,
      1045.0,
      1050.0,
      1035.0
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
    ]
  },
  {
    "code": "00999A",
    "name": "主動野村臺灣高息",
    "categories": [
      "MajorBuy"
    ],
    "price": 11.3,
    "prevClose": 11.19,
    "open": 11.33,
    "high": 11.35,
    "low": 11.23,
    "volume": 20950,
    "ma5": 11.02,
    "ma10": 10.63,
    "ma20": 10.4,
    "ma60": 10.73,
    "vMa5": 17996,
    "vMa10": 18773,
    "high5d": 11.35,
    "high10d": 11.35,
    "high20d": 11.35,
    "sparkline": [
      9.4,
      10.16,
      10.35,
      10.51,
      10.75,
      10.88,
      10.83,
      11.03,
      11.06,
      11.3
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
    ]
  },
  {
    "code": "009821",
    "name": "野村稀土關鍵資源",
    "categories": [
      "MajorBuy"
    ],
    "price": 14.98,
    "prevClose": 15.05,
    "open": 15.05,
    "high": 15.09,
    "low": 14.97,
    "volume": 15558,
    "ma5": 14.68,
    "ma10": 13.86,
    "ma20": 13.34,
    "ma60": 14.04,
    "vMa5": 18152,
    "vMa10": 11946,
    "high5d": 15.13,
    "high10d": 15.13,
    "high20d": 15.13,
    "sparkline": [
      12.37,
      13.02,
      12.85,
      13.19,
      13.71,
      14.12,
      14.34,
      14.91,
      15.07,
      14.98
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
    ]
  },
  {
    "code": "3706",
    "name": "神達",
    "categories": [
      "MajorBuy"
    ],
    "price": 91.7,
    "prevClose": 92.4,
    "open": 93.0,
    "high": 93.5,
    "low": 91.4,
    "volume": 9649,
    "ma5": 91.74,
    "ma10": 91.17,
    "ma20": 90.15,
    "ma60": 89.07,
    "vMa5": 11444,
    "vMa10": 13092,
    "high5d": 93.7,
    "high10d": 94.0,
    "high20d": 94.0,
    "sparkline": [
      87.4,
      89.5,
      91.3,
      91.9,
      92.9,
      91.7,
      92.9,
      90.0,
      92.4,
      91.7
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
    ]
  },
  {
    "code": "2353",
    "name": "宏碁",
    "categories": [
      "MajorBuy"
    ],
    "price": 31.55,
    "prevClose": 31.75,
    "open": 32.2,
    "high": 32.5,
    "low": 31.5,
    "volume": 26467,
    "ma5": 31.12,
    "ma10": 30.25,
    "ma20": 29.89,
    "ma60": 32.77,
    "vMa5": 21315,
    "vMa10": 22301,
    "high5d": 32.5,
    "high10d": 32.5,
    "high20d": 32.5,
    "sparkline": [
      28.85,
      28.8,
      29.05,
      30.25,
      30.0,
      30.25,
      31.0,
      31.05,
      31.75,
      31.55
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
    ]
  },
  {
    "code": "00940",
    "name": "元大台灣價值高息",
    "categories": [
      "MajorBuy"
    ],
    "price": 12.56,
    "prevClose": 12.43,
    "open": 12.59,
    "high": 12.64,
    "low": 12.52,
    "volume": 19659,
    "ma5": 12.44,
    "ma10": 12.26,
    "ma20": 12.15,
    "ma60": 12.26,
    "vMa5": 13653,
    "vMa10": 18472,
    "high5d": 12.64,
    "high10d": 12.64,
    "high20d": 12.64,
    "sparkline": [
      11.52,
      12.09,
      12.12,
      12.23,
      12.47,
      12.45,
      12.4,
      12.44,
      12.34,
      12.56
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
    ]
  },
  {
    "code": "1608",
    "name": "華榮",
    "categories": [
      "MajorBuy"
    ],
    "price": 36.8,
    "prevClose": 37.95,
    "open": 37.95,
    "high": 37.95,
    "low": 36.6,
    "volume": 10054,
    "ma5": 36.38,
    "ma10": 34.45,
    "ma20": 32.15,
    "ma60": 33.61,
    "vMa5": 11147,
    "vMa10": 9969,
    "high5d": 39.2,
    "high10d": 39.2,
    "high20d": 39.2,
    "sparkline": [
      29.35,
      31.15,
      34.25,
      33.4,
      34.4,
      34.95,
      35.75,
      36.45,
      37.95,
      36.8
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
    ]
  },
  {
    "code": "0052",
    "name": "富邦科技",
    "categories": [
      "MajorBuy"
    ],
    "price": 62.4,
    "prevClose": 61.5,
    "open": 62.5,
    "high": 62.7,
    "low": 62.1,
    "volume": 20357,
    "ma5": 61.01,
    "ma10": 59.75,
    "ma20": 59.34,
    "ma60": 60.69,
    "vMa5": 18362,
    "vMa10": 28794,
    "high5d": 62.7,
    "high10d": 62.7,
    "high20d": 62.7,
    "sparkline": [
      54.3,
      59.7,
      59.15,
      58.65,
      60.65,
      60.45,
      60.2,
      60.95,
      61.05,
      62.4
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
    ]
  },
  {
    "code": "00712",
    "name": "復華富時不動產",
    "categories": [
      "MajorBuy"
    ],
    "price": 8.9,
    "prevClose": 8.91,
    "open": 8.91,
    "high": 8.91,
    "low": 8.89,
    "volume": 7763,
    "ma5": 8.83,
    "ma10": 8.85,
    "ma20": 8.88,
    "ma60": 8.79,
    "vMa5": 15782,
    "vMa10": 15198,
    "high5d": 8.91,
    "high10d": 8.93,
    "high20d": 9.13,
    "sparkline": [
      8.9,
      8.9,
      8.84,
      8.83,
      8.85,
      8.8,
      8.76,
      8.86,
      8.84,
      8.9
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
    ]
  },
  {
    "code": "009820",
    "name": "元大納斯達克精選",
    "categories": [
      "MajorBuy"
    ],
    "price": 10.13,
    "prevClose": 10.07,
    "open": 10.14,
    "high": 10.15,
    "low": 10.11,
    "volume": 22553,
    "ma5": 10.04,
    "ma10": 9.77,
    "ma20": 9.77,
    "ma60": 10.0,
    "vMa5": 11911,
    "vMa10": 11920,
    "high5d": 10.15,
    "high10d": 10.15,
    "high20d": 10.23,
    "sparkline": [
      8.96,
      9.47,
      9.44,
      9.62,
      9.99,
      9.95,
      9.95,
      10.09,
      10.06,
      10.13
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
    ]
  },
  {
    "code": "00990A",
    "name": "主動元大AI新經濟",
    "categories": [
      "MajorBuy"
    ],
    "price": 16.61,
    "prevClose": 15.9,
    "open": 16.66,
    "high": 16.66,
    "low": 16.45,
    "volume": 24934,
    "ma5": 16.01,
    "ma10": 15.63,
    "ma20": 15.79,
    "ma60": 18.3,
    "vMa5": 15565,
    "vMa10": 18551,
    "high5d": 16.66,
    "high10d": 16.66,
    "high20d": 18.21,
    "sparkline": [
      13.65,
      15.56,
      15.34,
      15.49,
      16.2,
      15.83,
      15.68,
      16.03,
      15.88,
      16.61
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
    ]
  },
  {
    "code": "2354",
    "name": "鴻準",
    "categories": [
      "MajorBuy"
    ],
    "price": 62.8,
    "prevClose": 63.0,
    "open": 63.6,
    "high": 63.8,
    "low": 61.9,
    "volume": 17002,
    "ma5": 62.68,
    "ma10": 59.88,
    "ma20": 57.42,
    "ma60": 57.84,
    "vMa5": 33776,
    "vMa10": 21784,
    "high5d": 65.2,
    "high10d": 65.2,
    "high20d": 65.2,
    "sparkline": [
      56.5,
      56.4,
      56.0,
      55.5,
      61.0,
      61.8,
      63.1,
      62.7,
      63.0,
      62.8
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
    ]
  },
  {
    "code": "9933",
    "name": "中鼎",
    "categories": [
      "MajorBuy"
    ],
    "price": 42.2,
    "prevClose": 42.0,
    "open": 41.95,
    "high": 42.8,
    "low": 41.7,
    "volume": 3929,
    "ma5": 39.77,
    "ma10": 38.04,
    "ma20": 38.51,
    "ma60": 40.35,
    "vMa5": 3739,
    "vMa10": 3040,
    "high5d": 42.8,
    "high10d": 42.8,
    "high20d": 42.8,
    "sparkline": [
      35.25,
      36.0,
      36.45,
      36.65,
      37.15,
      37.75,
      38.25,
      38.65,
      42.0,
      42.2
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
    ]
  },
  {
    "code": "3605",
    "name": "宏致",
    "categories": [
      "MajorBuy"
    ],
    "price": 132.0,
    "prevClose": 120.0,
    "open": 124.5,
    "high": 132.0,
    "low": 123.0,
    "volume": 13814,
    "ma5": 115.9,
    "ma10": 104.48,
    "ma20": 95.01,
    "ma60": 85.16,
    "vMa5": 11719,
    "vMa10": 12752,
    "high5d": 132.0,
    "high10d": 132.0,
    "high20d": 132.0,
    "sparkline": [
      79.0,
      84.2,
      92.6,
      101.5,
      108.0,
      107.5,
      109.0,
      111.0,
      120.0,
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
    ]
  },
  {
    "code": "00993A",
    "name": "主動安聯台灣",
    "categories": [
      "MajorBuy"
    ],
    "price": 13.6,
    "prevClose": 13.4,
    "open": 13.63,
    "high": 13.72,
    "low": 13.5,
    "volume": 8249,
    "ma5": 13.1,
    "ma10": 12.55,
    "ma20": 12.33,
    "ma60": 13.18,
    "vMa5": 5840,
    "vMa10": 8767,
    "high5d": 13.72,
    "high10d": 13.72,
    "high20d": 13.72,
    "sparkline": [
      10.7,
      11.77,
      12.23,
      12.46,
      12.81,
      12.93,
      12.75,
      13.06,
      13.14,
      13.6
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
    ]
  },
  {
    "code": "00918",
    "name": "大華優利高填息30",
    "categories": [
      "MajorBuy"
    ],
    "price": 33.97,
    "prevClose": 33.75,
    "open": 34.0,
    "high": 34.1,
    "low": 33.79,
    "volume": 14587,
    "ma5": 33.65,
    "ma10": 33.21,
    "ma20": 32.54,
    "ma60": 31.36,
    "vMa5": 12474,
    "vMa10": 19942,
    "high5d": 34.1,
    "high10d": 34.1,
    "high20d": 34.1,
    "sparkline": [
      31.24,
      32.73,
      32.97,
      33.25,
      33.66,
      33.58,
      33.59,
      33.61,
      33.49,
      33.97
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
    ]
  },
  {
    "code": "1513",
    "name": "中興電",
    "categories": [
      "MajorBuy"
    ],
    "price": 171.0,
    "prevClose": 165.5,
    "open": 168.5,
    "high": 177.0,
    "low": 166.5,
    "volume": 15430,
    "ma5": 162.8,
    "ma10": 160.35,
    "ma20": 158.5,
    "ma60": 167.17,
    "vMa5": 5433,
    "vMa10": 4073,
    "high5d": 177.0,
    "high10d": 177.0,
    "high20d": 177.0,
    "sparkline": [
      153.5,
      155.5,
      159.0,
      161.0,
      160.5,
      157.5,
      159.5,
      160.5,
      165.5,
      171.0
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
    ]
  },
  {
    "code": "4763",
    "name": "材料*-KY",
    "categories": [
      "MajorBuy"
    ],
    "price": 51.6,
    "prevClose": 52.6,
    "open": 53.0,
    "high": 53.1,
    "low": 51.3,
    "volume": 10341,
    "ma5": 51.14,
    "ma10": 50.03,
    "ma20": 49.36,
    "ma60": 46.61,
    "vMa5": 12962,
    "vMa10": 10616,
    "high5d": 55.0,
    "high10d": 55.0,
    "high20d": 55.0,
    "sparkline": [
      48.25,
      49.85,
      48.45,
      48.45,
      49.65,
      49.9,
      50.0,
      51.6,
      52.6,
      51.6
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
    ]
  },
  {
    "code": "4510",
    "name": "高鋒",
    "categories": [
      "MajorBuy"
    ],
    "price": 45.7,
    "prevClose": 44.55,
    "open": 45.3,
    "high": 46.5,
    "low": 44.9,
    "volume": 5149,
    "ma5": 42.34,
    "ma10": 39.74,
    "ma20": 38.65,
    "ma60": 43.3,
    "vMa5": 2583,
    "vMa10": 1541,
    "high5d": 46.5,
    "high10d": 46.5,
    "high20d": 46.5,
    "sparkline": [
      35.2,
      36.4,
      37.0,
      38.25,
      38.85,
      40.1,
      40.85,
      40.5,
      44.55,
      45.7
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
    ]
  },
  {
    "code": "00955",
    "name": "中信日本商社",
    "categories": [
      "MajorBuy"
    ],
    "price": 15.64,
    "prevClose": 15.58,
    "open": 15.66,
    "high": 15.67,
    "low": 15.55,
    "volume": 2668,
    "ma5": 15.72,
    "ma10": 15.57,
    "ma20": 15.16,
    "ma60": 14.7,
    "vMa5": 4013,
    "vMa10": 5483,
    "high5d": 15.94,
    "high10d": 15.94,
    "high20d": 15.94,
    "sparkline": [
      15.32,
      15.45,
      15.38,
      15.3,
      15.61,
      15.8,
      15.81,
      15.77,
      15.58,
      15.64
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
    ]
  },
  {
    "code": "4147",
    "name": "中裕",
    "categories": [
      "MajorBuy"
    ],
    "price": 65.2,
    "prevClose": 68.5,
    "open": 66.5,
    "high": 67.8,
    "low": 64.9,
    "volume": 1621,
    "ma5": 63.0,
    "ma10": 60.21,
    "ma20": 59.25,
    "ma60": 59.37,
    "vMa5": 2145,
    "vMa10": 1368,
    "high5d": 69.8,
    "high10d": 69.8,
    "high20d": 69.8,
    "sparkline": [
      55.0,
      56.9,
      57.6,
      59.1,
      58.5,
      56.8,
      61.0,
      63.5,
      68.5,
      65.2
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
    ]
  },
  {
    "code": "6187",
    "name": "萬潤",
    "categories": [
      "MajorBuy",
      "Top100"
    ],
    "price": 1270.0,
    "prevClose": 1155.0,
    "open": 1190.0,
    "high": 1270.0,
    "low": 1185.0,
    "volume": 6272,
    "ma5": 1139.0,
    "ma10": 1096.4,
    "ma20": 1031.3,
    "ma60": 1068.8,
    "vMa5": 4532,
    "vMa10": 3606,
    "high5d": 1270.0,
    "high10d": 1270.0,
    "high20d": 1270.0,
    "sparkline": [
      929.0,
      1005.0,
      1090.0,
      1070.0,
      1175.0,
      1130.0,
      1090.0,
      1050.0,
      1155.0,
      1270.0
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
    ]
  },
  {
    "code": "3265",
    "name": "台星科",
    "categories": [
      "MajorBuy"
    ],
    "price": 181.0,
    "prevClose": 175.0,
    "open": 179.5,
    "high": 190.5,
    "low": 178.5,
    "volume": 3544,
    "ma5": 166.7,
    "ma10": 159.85,
    "ma20": 156.93,
    "ma60": 172.6,
    "vMa5": 1908,
    "vMa10": 1371,
    "high5d": 190.5,
    "high10d": 190.5,
    "high20d": 190.5,
    "sparkline": [
      144.0,
      152.5,
      155.5,
      155.5,
      157.5,
      153.5,
      164.5,
      159.5,
      175.0,
      181.0
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
    ]
  },
  {
    "code": "5443",
    "name": "均豪",
    "categories": [
      "MajorBuy"
    ],
    "price": 107.0,
    "prevClose": 113.5,
    "open": 114.5,
    "high": 115.0,
    "low": 107.0,
    "volume": 3325,
    "ma5": 105.52,
    "ma10": 98.6,
    "ma20": 96.12,
    "ma60": 107.18,
    "vMa5": 3182,
    "vMa10": 2014,
    "high5d": 115.0,
    "high10d": 115.0,
    "high20d": 115.0,
    "sparkline": [
      86.0,
      90.3,
      92.2,
      94.7,
      95.2,
      95.1,
      104.5,
      107.5,
      113.5,
      107.0
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
    ]
  },
  {
    "code": "3357",
    "name": "臺慶科",
    "categories": [
      "MajorBuy"
    ],
    "price": 253.5,
    "prevClose": 230.5,
    "open": 230.5,
    "high": 253.5,
    "low": 229.5,
    "volume": 3886,
    "ma5": 225.6,
    "ma10": 215.2,
    "ma20": 210.15,
    "ma60": 262.73,
    "vMa5": 2963,
    "vMa10": 2446,
    "high5d": 253.5,
    "high10d": 253.5,
    "high20d": 253.5,
    "sparkline": [
      194.0,
      204.0,
      206.0,
      210.0,
      210.0,
      207.0,
      218.0,
      219.0,
      230.5,
      253.5
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
    ]
  },
  {
    "code": "6538",
    "name": "倉和",
    "categories": [
      "MajorBuy"
    ],
    "price": 177.5,
    "prevClose": 161.5,
    "open": 177.5,
    "high": 177.5,
    "low": 174.0,
    "volume": 4061,
    "ma5": 155.3,
    "ma10": 150.45,
    "ma20": 141.62,
    "ma60": 130.59,
    "vMa5": 2153,
    "vMa10": 2707,
    "high5d": 177.5,
    "high10d": 177.5,
    "high20d": 177.5,
    "sparkline": [
      138.0,
      135.0,
      148.5,
      156.5,
      150.0,
      145.0,
      145.5,
      147.0,
      161.5,
      177.5
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
    ]
  },
  {
    "code": "8071",
    "name": "能率網通",
    "categories": [
      "MajorBuy"
    ],
    "price": 25.15,
    "prevClose": 25.55,
    "open": 25.8,
    "high": 26.0,
    "low": 24.9,
    "volume": 2707,
    "ma5": 24.04,
    "ma10": 23.28,
    "ma20": 23.09,
    "ma60": 25.21,
    "vMa5": 1276,
    "vMa10": 1241,
    "high5d": 26.0,
    "high10d": 26.0,
    "high20d": 29.75,
    "sparkline": [
      20.95,
      22.25,
      22.5,
      23.8,
      23.15,
      23.15,
      23.1,
      23.25,
      25.55,
      25.15
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
    ]
  },
  {
    "code": "6588",
    "name": "東典光電",
    "categories": [
      "MajorBuy"
    ],
    "price": 93.7,
    "prevClose": 97.1,
    "open": 99.1,
    "high": 100.5,
    "low": 93.4,
    "volume": 2321,
    "ma5": 91.88,
    "ma10": 91.87,
    "ma20": 85.62,
    "ma60": 95.57,
    "vMa5": 1669,
    "vMa10": 2267,
    "high5d": 100.5,
    "high10d": 103.5,
    "high20d": 103.5,
    "sparkline": [
      89.1,
      86.8,
      95.4,
      94.0,
      94.0,
      89.8,
      90.5,
      88.3,
      97.1,
      93.7
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
    ]
  },
  {
    "code": "5498",
    "name": "凱崴",
    "categories": [
      "MajorBuy"
    ],
    "price": 53.3,
    "prevClose": 55.2,
    "open": 55.9,
    "high": 56.2,
    "low": 53.0,
    "volume": 3998,
    "ma5": 51.74,
    "ma10": 48.98,
    "ma20": 47.37,
    "ma60": 57.66,
    "vMa5": 2770,
    "vMa10": 2270,
    "high5d": 56.2,
    "high10d": 56.2,
    "high20d": 56.4,
    "sparkline": [
      41.95,
      44.5,
      46.9,
      47.65,
      50.1,
      48.5,
      50.6,
      51.1,
      55.2,
      53.3
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
    ]
  },
  {
    "code": "3360",
    "name": "尚立",
    "categories": [
      "MajorBuy"
    ],
    "price": 17.1,
    "prevClose": 17.45,
    "open": 17.45,
    "high": 17.75,
    "low": 16.95,
    "volume": 2508,
    "ma5": 16.55,
    "ma10": 16.32,
    "ma20": 16.85,
    "ma60": 17.22,
    "vMa5": 1149,
    "vMa10": 972,
    "high5d": 17.75,
    "high10d": 17.75,
    "high20d": 23.5,
    "sparkline": [
      15.7,
      15.9,
      16.5,
      16.3,
      16.1,
      16.05,
      16.25,
      15.9,
      17.45,
      17.1
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
    ]
  },
  {
    "code": "3455",
    "name": "由田",
    "categories": [
      "MajorBuy"
    ],
    "price": 225.0,
    "prevClose": 222.0,
    "open": 222.0,
    "high": 231.5,
    "low": 217.0,
    "volume": 2766,
    "ma5": 208.9,
    "ma10": 193.25,
    "ma20": 188.15,
    "ma60": 222.71,
    "vMa5": 1344,
    "vMa10": 1121,
    "high5d": 231.5,
    "high10d": 231.5,
    "high20d": 231.5,
    "sparkline": [
      162.5,
      167.5,
      182.5,
      186.0,
      189.5,
      190.0,
      205.5,
      202.0,
      222.0,
      225.0
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
    ]
  },
  {
    "code": "6207",
    "name": "雷科",
    "categories": [
      "MajorBuy"
    ],
    "price": 111.0,
    "prevClose": 111.5,
    "open": 113.0,
    "high": 117.0,
    "low": 110.5,
    "volume": 4553,
    "ma5": 107.28,
    "ma10": 103.91,
    "ma20": 107.95,
    "ma60": 126.57,
    "vMa5": 4366,
    "vMa10": 4480,
    "high5d": 117.0,
    "high10d": 117.0,
    "high20d": 154.0,
    "sparkline": [
      94.7,
      96.5,
      103.0,
      104.5,
      104.0,
      99.9,
      107.0,
      107.0,
      111.5,
      111.0
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
    ]
  },
  {
    "code": "3498",
    "name": "陽程",
    "categories": [
      "MajorBuy"
    ],
    "price": 144.0,
    "prevClose": 131.0,
    "open": 144.0,
    "high": 144.0,
    "low": 144.0,
    "volume": 1759,
    "ma5": 128.2,
    "ma10": 115.75,
    "ma20": 110.69,
    "ma60": 123.26,
    "vMa5": 2068,
    "vMa10": 1697,
    "high5d": 144.0,
    "high10d": 144.0,
    "high20d": 144.0,
    "sparkline": [
      90.0,
      99.0,
      103.5,
      113.0,
      111.0,
      116.5,
      125.0,
      124.5,
      131.0,
      144.0
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
    ]
  },
  {
    "code": "5314",
    "name": "世紀*",
    "categories": [
      "MajorBuy"
    ],
    "price": 61.3,
    "prevClose": 62.5,
    "open": 62.5,
    "high": 63.4,
    "low": 61.3,
    "volume": 3872,
    "ma5": 61.44,
    "ma10": 58.69,
    "ma20": 57.17,
    "ma60": 60.98,
    "vMa5": 3014,
    "vMa10": 2988,
    "high5d": 63.4,
    "high10d": 63.4,
    "high20d": 68.0,
    "sparkline": [
      51.9,
      55.1,
      56.4,
      56.8,
      59.5,
      60.0,
      62.3,
      61.1,
      62.5,
      61.3
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
    ]
  },
  {
    "code": "6026",
    "name": "福邦證",
    "categories": [
      "MajorBuy"
    ],
    "price": 14.5,
    "prevClose": 14.65,
    "open": 14.75,
    "high": 14.9,
    "low": 14.45,
    "volume": 1008,
    "ma5": 14.22,
    "ma10": 14.12,
    "ma20": 14.09,
    "ma60": 15.72,
    "vMa5": 1284,
    "vMa10": 1083,
    "high5d": 14.9,
    "high10d": 14.9,
    "high20d": 15.0,
    "sparkline": [
      14.1,
      14.0,
      13.95,
      14.15,
      13.9,
      14.1,
      13.9,
      13.95,
      14.65,
      14.5
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
    ]
  },
  {
    "code": "6015",
    "name": "宏遠證",
    "categories": [
      "MajorBuy"
    ],
    "price": 15.95,
    "prevClose": 16.05,
    "open": 16.3,
    "high": 16.55,
    "low": 15.85,
    "volume": 2581,
    "ma5": 15.47,
    "ma10": 15.55,
    "ma20": 15.71,
    "ma60": 17.43,
    "vMa5": 2044,
    "vMa10": 1773,
    "high5d": 16.55,
    "high10d": 16.55,
    "high20d": 17.75,
    "sparkline": [
      15.65,
      15.55,
      15.55,
      15.95,
      15.5,
      15.3,
      14.95,
      15.1,
      16.05,
      15.95
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
    ]
  },
  {
    "code": "00877",
    "name": "復華中國5G",
    "categories": [
      "MajorBuy"
    ],
    "price": 39.07,
    "prevClose": 37.9,
    "open": 38.51,
    "high": 39.44,
    "low": 38.39,
    "volume": 3543,
    "ma5": 37.95,
    "ma10": 36.79,
    "ma20": 36.97,
    "ma60": 41.9,
    "vMa5": 4465,
    "vMa10": 4502,
    "high5d": 39.44,
    "high10d": 39.44,
    "high20d": 45.12,
    "sparkline": [
      34.5,
      33.74,
      35.93,
      37.12,
      36.87,
      38.66,
      36.72,
      37.42,
      37.9,
      39.07
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
    ]
  },
  {
    "code": "6190",
    "name": "萬泰科",
    "categories": [
      "MajorBuy"
    ],
    "price": 68.2,
    "prevClose": 68.8,
    "open": 70.0,
    "high": 70.4,
    "low": 68.1,
    "volume": 1252,
    "ma5": 68.08,
    "ma10": 66.99,
    "ma20": 67.27,
    "ma60": 76.87,
    "vMa5": 1278,
    "vMa10": 1286,
    "high5d": 70.4,
    "high10d": 70.4,
    "high20d": 79.8,
    "sparkline": [
      61.8,
      64.8,
      67.0,
      67.9,
      68.0,
      65.8,
      68.8,
      68.8,
      68.8,
      68.2
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
    ]
  },
  {
    "code": "8182",
    "name": "加高",
    "categories": [
      "MajorBuy"
    ],
    "price": 42.3,
    "prevClose": 41.75,
    "open": 41.9,
    "high": 44.8,
    "low": 41.9,
    "volume": 2898,
    "ma5": 40.47,
    "ma10": 39.42,
    "ma20": 39.18,
    "ma60": 45.7,
    "vMa5": 1548,
    "vMa10": 1715,
    "high5d": 44.8,
    "high10d": 44.8,
    "high20d": 48.95,
    "sparkline": [
      36.45,
      37.3,
      38.8,
      39.9,
      39.4,
      38.55,
      40.0,
      39.75,
      41.75,
      42.3
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
    ]
  },
  {
    "code": "6530",
    "name": "創威",
    "categories": [
      "MajorBuy"
    ],
    "price": 85.8,
    "prevClose": 87.5,
    "open": 88.5,
    "high": 90.4,
    "low": 85.2,
    "volume": 2796,
    "ma5": 82.22,
    "ma10": 78.27,
    "ma20": 73.87,
    "ma60": 88.45,
    "vMa5": 1743,
    "vMa10": 1306,
    "high5d": 90.4,
    "high10d": 90.4,
    "high20d": 90.4,
    "sparkline": [
      67.6,
      69.9,
      74.7,
      82.1,
      77.3,
      75.0,
      82.5,
      80.3,
      87.5,
      85.8
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
    ]
  },
  {
    "code": "6548",
    "name": "長科*",
    "categories": [
      "MajorBuy"
    ],
    "price": 74.5,
    "prevClose": 75.3,
    "open": 76.1,
    "high": 76.7,
    "low": 74.3,
    "volume": 2108,
    "ma5": 74.5,
    "ma10": 73.03,
    "ma20": 69.98,
    "ma60": 77.82,
    "vMa5": 2391,
    "vMa10": 3809,
    "high5d": 77.5,
    "high10d": 79.2,
    "high20d": 83.8,
    "sparkline": [
      65.0,
      70.2,
      74.0,
      74.4,
      74.2,
      72.4,
      75.7,
      74.6,
      75.3,
      74.5
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
    ]
  },
  {
    "code": "3221",
    "name": "台嘉碩",
    "categories": [
      "MajorBuy"
    ],
    "price": 49.35,
    "prevClose": 49.0,
    "open": 49.3,
    "high": 52.0,
    "low": 49.3,
    "volume": 4655,
    "ma5": 48.19,
    "ma10": 47.26,
    "ma20": 46.73,
    "ma60": 54.49,
    "vMa5": 2962,
    "vMa10": 3319,
    "high5d": 52.0,
    "high10d": 52.0,
    "high20d": 57.5,
    "sparkline": [
      44.2,
      45.45,
      47.0,
      47.65,
      47.3,
      46.15,
      48.2,
      48.25,
      49.0,
      49.35
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
    ]
  },
  {
    "code": "4561",
    "name": "健椿",
    "categories": [
      "MajorBuy"
    ],
    "price": 45.65,
    "prevClose": 46.05,
    "open": 48.2,
    "high": 48.2,
    "low": 45.4,
    "volume": 1432,
    "ma5": 44.06,
    "ma10": 40.16,
    "ma20": 37.81,
    "ma60": 41.98,
    "vMa5": 886,
    "vMa10": 538,
    "high5d": 48.2,
    "high10d": 48.2,
    "high20d": 48.2,
    "sparkline": [
      34.2,
      35.2,
      35.7,
      36.3,
      39.9,
      43.85,
      42.85,
      41.9,
      46.05,
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
    ]
  },
  {
    "code": "6127",
    "name": "九豪",
    "categories": [
      "MajorBuy",
      "Top100"
    ],
    "price": 52.8,
    "prevClose": 51.8,
    "open": 52.6,
    "high": 55.9,
    "low": 52.5,
    "volume": 6106,
    "ma5": 50.92,
    "ma10": 49.7,
    "ma20": 51.25,
    "ma60": 67.79,
    "vMa5": 4208,
    "vMa10": 4148,
    "high5d": 55.9,
    "high10d": 55.9,
    "high20d": 69.6,
    "sparkline": [
      45.95,
      48.25,
      48.9,
      49.35,
      50.0,
      48.1,
      50.3,
      51.6,
      51.8,
      52.8
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
    ]
  },
  {
    "code": "00961",
    "name": "FT臺灣永續高息",
    "categories": [
      "Top100"
    ],
    "price": 13.31,
    "prevClose": 13.18,
    "open": 13.35,
    "high": 13.37,
    "low": 13.27,
    "volume": 46681,
    "ma5": 13.13,
    "ma10": 13.02,
    "ma20": 12.8,
    "ma60": 12.67,
    "vMa5": 25507,
    "vMa10": 19978,
    "high5d": 13.37,
    "high10d": 13.37,
    "high20d": 13.37,
    "sparkline": [
      12.55,
      12.95,
      12.92,
      13.03,
      13.12,
      13.05,
      13.04,
      13.12,
      13.13,
      13.31
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
    ]
  },
  {
    "code": "2834",
    "name": "臺企銀",
    "categories": [
      "Top100"
    ],
    "price": 16.45,
    "prevClose": 16.5,
    "open": 16.5,
    "high": 16.5,
    "low": 16.25,
    "volume": 42952,
    "ma5": 16.47,
    "ma10": 16.66,
    "ma20": 16.76,
    "ma60": 16.33,
    "vMa5": 30274,
    "vMa10": 47750,
    "high5d": 16.7,
    "high10d": 17.2,
    "high20d": 17.2,
    "sparkline": [
      17.01,
      17.01,
      16.9,
      16.75,
      16.55,
      16.5,
      16.5,
      16.4,
      16.5,
      16.45
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
    ]
  },
  {
    "code": "2332",
    "name": "友訊",
    "categories": [
      "Top100"
    ],
    "price": 22.65,
    "prevClose": 22.3,
    "open": 22.55,
    "high": 23.5,
    "low": 22.25,
    "volume": 36061,
    "ma5": 22.66,
    "ma10": 22.62,
    "ma20": 22.58,
    "ma60": 19.69,
    "vMa5": 32236,
    "vMa10": 49866,
    "high5d": 23.8,
    "high10d": 24.95,
    "high20d": 25.65,
    "sparkline": [
      21.25,
      22.2,
      23.85,
      22.9,
      22.7,
      22.15,
      23.6,
      22.6,
      22.3,
      22.65
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
    ]
  },
  {
    "code": "00764B",
    "name": "群益25年美債",
    "categories": [
      "Top100"
    ],
    "price": 27.33,
    "prevClose": 27.37,
    "open": 27.32,
    "high": 27.33,
    "low": 27.29,
    "volume": 8189,
    "ma5": 27.37,
    "ma10": 27.47,
    "ma20": 27.66,
    "ma60": 27.79,
    "vMa5": 5882,
    "vMa10": 6102,
    "high5d": 27.48,
    "high10d": 27.71,
    "high20d": 28.06,
    "sparkline": [
      27.65,
      27.45,
      27.43,
      27.67,
      27.65,
      27.39,
      27.48,
      27.3,
      27.37,
      27.33
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
    ]
  },
  {
    "code": "3236",
    "name": "千如",
    "categories": [
      "Top100"
    ],
    "price": 47.3,
    "prevClose": 45.2,
    "open": 46.0,
    "high": 49.0,
    "low": 46.0,
    "volume": 7425,
    "ma5": 44.5,
    "ma10": 43.28,
    "ma20": 43.04,
    "ma60": 54.65,
    "vMa5": 4637,
    "vMa10": 3983,
    "high5d": 49.0,
    "high10d": 49.0,
    "high20d": 56.2,
    "sparkline": [
      38.75,
      42.6,
      43.0,
      42.7,
      43.25,
      40.9,
      42.95,
      46.15,
      45.2,
      47.3
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
    ]
  },
  {
    "code": "6244",
    "name": "茂迪",
    "categories": [
      "Top100"
    ],
    "price": 25.7,
    "prevClose": 24.3,
    "open": 24.5,
    "high": 26.65,
    "low": 24.5,
    "volume": 5884,
    "ma5": 24.26,
    "ma10": 23.85,
    "ma20": 23.98,
    "ma60": 26.95,
    "vMa5": 2436,
    "vMa10": 2915,
    "high5d": 26.65,
    "high10d": 26.65,
    "high20d": 27.3,
    "sparkline": [
      21.9,
      23.1,
      23.7,
      24.7,
      23.75,
      23.1,
      24.1,
      24.1,
      24.3,
      25.7
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
    ]
  },
  {
    "code": "8096",
    "name": "擎亞",
    "categories": [
      "Top100"
    ],
    "price": 125.5,
    "prevClose": 125.5,
    "open": 125.0,
    "high": 128.0,
    "low": 123.5,
    "volume": 5803,
    "ma5": 125.4,
    "ma10": 124.6,
    "ma20": 127.28,
    "ma60": 136.97,
    "vMa5": 6854,
    "vMa10": 6730,
    "high5d": 141.0,
    "high10d": 141.0,
    "high20d": 158.5,
    "sparkline": [
      112.5,
      115.0,
      126.5,
      129.5,
      135.5,
      131.5,
      123.0,
      121.5,
      125.5,
      125.5
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
    ]
  },
  {
    "code": "3363",
    "name": "上詮",
    "categories": [
      "Top100"
    ],
    "price": 600.0,
    "prevClose": 630.0,
    "open": 654.0,
    "high": 656.0,
    "low": 598.0,
    "volume": 5665,
    "ma5": 611.6,
    "ma10": 583.05,
    "ma20": 557.85,
    "ma60": 655.93,
    "vMa5": 3925,
    "vMa10": 3413,
    "high5d": 656.0,
    "high10d": 656.0,
    "high20d": 656.0,
    "sparkline": [
      480.5,
      525.0,
      563.0,
      600.0,
      604.0,
      582.0,
      640.0,
      606.0,
      630.0,
      600.0
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
    ]
  },
  {
    "code": "00887",
    "name": "永豐中國科技50大",
    "categories": [
      "Top100"
    ],
    "price": 17.5,
    "prevClose": 17.21,
    "open": 17.37,
    "high": 17.63,
    "low": 17.36,
    "volume": 5518,
    "ma5": 17.28,
    "ma10": 16.92,
    "ma20": 16.94,
    "ma60": 17.92,
    "vMa5": 5892,
    "vMa10": 8231,
    "high5d": 17.63,
    "high10d": 17.63,
    "high20d": 19.1,
    "sparkline": [
      16.57,
      15.94,
      16.34,
      17.04,
      16.89,
      17.33,
      17.09,
      17.29,
      17.21,
      17.5
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
    ]
  },
  {
    "code": "00900",
    "name": "富邦特選高股息30",
    "categories": [
      "SitcaBuy"
    ],
    "price": 18.94,
    "prevClose": 18.94,
    "open": 19.0,
    "high": 19.03,
    "low": 18.81,
    "volume": 4821,
    "ma5": 18.76,
    "ma10": 18.49,
    "ma20": 18.34,
    "ma60": 18.8,
    "vMa5": 4126,
    "vMa10": 5083,
    "high5d": 19.03,
    "high10d": 19.03,
    "high20d": 19.03,
    "sparkline": [
      17.55,
      18.24,
      18.25,
      18.38,
      18.74,
      18.67,
      18.64,
      18.8,
      18.73,
      18.94
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
    ]
  },
  {
    "code": "1402",
    "name": "遠東新",
    "categories": [
      "SitcaBuy"
    ],
    "price": 26.95,
    "prevClose": 27.55,
    "open": 27.7,
    "high": 27.7,
    "low": 26.85,
    "volume": 21260,
    "ma5": 27.31,
    "ma10": 27.14,
    "ma20": 27.24,
    "ma60": 27.42,
    "vMa5": 20813,
    "vMa10": 19180,
    "high5d": 27.9,
    "high10d": 27.9,
    "high20d": 28.2,
    "sparkline": [
      27.15,
      26.9,
      27.15,
      26.7,
      27.0,
      27.5,
      27.25,
      27.3,
      27.55,
      26.95
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
    ]
  },
  {
    "code": "3702",
    "name": "大聯大",
    "categories": [
      "SitcaBuy"
    ],
    "price": 123.5,
    "prevClose": 122.5,
    "open": 122.5,
    "high": 125.0,
    "low": 120.5,
    "volume": 10892,
    "ma5": 124.8,
    "ma10": 122.45,
    "ma20": 117.33,
    "ma60": 113.99,
    "vMa5": 11798,
    "vMa10": 11778,
    "high5d": 130.5,
    "high10d": 130.5,
    "high20d": 130.5,
    "sparkline": [
      112.5,
      116.0,
      117.5,
      129.0,
      125.5,
      122.5,
      130.0,
      125.5,
      122.5,
      123.5
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
    ]
  },
  {
    "code": "6442",
    "name": "光聖",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1565.0,
    "prevClose": 1595.0,
    "open": 1635.0,
    "high": 1670.0,
    "low": 1545.0,
    "volume": 5048,
    "ma5": 1472.0,
    "ma10": 1396.5,
    "ma20": 1328.25,
    "ma60": 1637.58,
    "vMa5": 3002,
    "vMa10": 2860,
    "high5d": 1670.0,
    "high10d": 1670.0,
    "high20d": 1670.0,
    "sparkline": [
      1155.0,
      1270.0,
      1395.0,
      1370.0,
      1415.0,
      1325.0,
      1425.0,
      1450.0,
      1595.0,
      1565.0
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
    ]
  }
];