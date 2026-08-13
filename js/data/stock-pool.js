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
  "date": "2026/08/13",
  "sourceName": "富邦證券 / 每日成交量排行 (上市 Top 50 + 上櫃 Top 50)",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_BE_0_1.djhtm",
  "stocks": [
    {
      "code": "6770",
      "name": "力積電",
      "volume": 428615,
      "market": "上市"
    },
    {
      "code": "00403A",
      "name": "主動統一升級50",
      "volume": 320226,
      "market": "上市"
    },
    {
      "code": "2344",
      "name": "華邦電",
      "volume": 207363,
      "market": "上市"
    },
    {
      "code": "00685L",
      "name": "群益臺灣加權正2",
      "volume": 206337,
      "market": "上市"
    },
    {
      "code": "3481",
      "name": "群創",
      "volume": 189190,
      "market": "上市"
    },
    {
      "code": "00631L",
      "name": "元大台灣50正2",
      "volume": 174469,
      "market": "上市"
    },
    {
      "code": "2324",
      "name": "仁寶",
      "volume": 171747,
      "market": "上市"
    },
    {
      "code": "2409",
      "name": "友達",
      "volume": 170126,
      "market": "上市"
    },
    {
      "code": "00981A",
      "name": "主動統一台股增長",
      "volume": 169428,
      "market": "上市"
    },
    {
      "code": "00632R",
      "name": "元大台灣50反1",
      "volume": 129905,
      "market": "上市"
    },
    {
      "code": "2337",
      "name": "旺宏",
      "volume": 104417,
      "market": "上市"
    },
    {
      "code": "1605",
      "name": "華新",
      "volume": 94362,
      "market": "上市"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "volume": 93648,
      "market": "上市"
    },
    {
      "code": "2303",
      "name": "聯電",
      "volume": 93125,
      "market": "上市"
    },
    {
      "code": "8150",
      "name": "南茂",
      "volume": 86136,
      "market": "上市"
    },
    {
      "code": "009816",
      "name": "凱基台灣TOP50",
      "volume": 80280,
      "market": "上市"
    },
    {
      "code": "2356",
      "name": "英業達",
      "volume": 79797,
      "market": "上市"
    },
    {
      "code": "1303",
      "name": "南亞",
      "volume": 78318,
      "market": "上市"
    },
    {
      "code": "00405A",
      "name": "主動富邦台灣龍耀",
      "volume": 78039,
      "market": "上市"
    },
    {
      "code": "00991A",
      "name": "主動復華未來50",
      "volume": 72201,
      "market": "上市"
    },
    {
      "code": "00407A",
      "name": "主動凱基台灣",
      "volume": 67773,
      "market": "上市"
    },
    {
      "code": "2492",
      "name": "華新科",
      "volume": 66915,
      "market": "上市"
    },
    {
      "code": "0050",
      "name": "元大台灣50",
      "volume": 64991,
      "market": "上市"
    },
    {
      "code": "2317",
      "name": "鴻海",
      "volume": 60316,
      "market": "上市"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "volume": 56066,
      "market": "上市"
    },
    {
      "code": "4958",
      "name": "臻鼎-KY",
      "volume": 52832,
      "market": "上市"
    },
    {
      "code": "2377",
      "name": "微星",
      "volume": 46112,
      "market": "上市"
    },
    {
      "code": "00878",
      "name": "國泰永續高股息",
      "volume": 45388,
      "market": "上市"
    },
    {
      "code": "1717",
      "name": "長興",
      "volume": 44658,
      "market": "上市"
    },
    {
      "code": "2002",
      "name": "中鋼",
      "volume": 44569,
      "market": "上市"
    },
    {
      "code": "00400A",
      "name": "主動國泰動能高息",
      "volume": 44262,
      "market": "上市"
    },
    {
      "code": "1718",
      "name": "中纖",
      "volume": 43321,
      "market": "上市"
    },
    {
      "code": "3231",
      "name": "緯創",
      "volume": 43108,
      "market": "上市"
    },
    {
      "code": "2892",
      "name": "第一金",
      "volume": 42976,
      "market": "上市"
    },
    {
      "code": "00406A",
      "name": "主動中信台灣收益",
      "volume": 42776,
      "market": "上市"
    },
    {
      "code": "00919",
      "name": "群益台灣精選高息",
      "volume": 42432,
      "market": "上市"
    },
    {
      "code": "2891",
      "name": "中信金",
      "volume": 39347,
      "market": "上市"
    },
    {
      "code": "1802",
      "name": "台玻",
      "volume": 38112,
      "market": "上市"
    },
    {
      "code": "8112",
      "name": "至上",
      "volume": 37212,
      "market": "上市"
    },
    {
      "code": "2301",
      "name": "光寶科",
      "volume": 36948,
      "market": "上市"
    },
    {
      "code": "0056",
      "name": "元大高股息",
      "volume": 36316,
      "market": "上市"
    },
    {
      "code": "00988A",
      "name": "主動統一全球創新",
      "volume": 35545,
      "market": "上市"
    },
    {
      "code": "00881",
      "name": "國泰台灣科技龍頭",
      "volume": 35487,
      "market": "上市"
    },
    {
      "code": "2887",
      "name": "台新新光金",
      "volume": 35236,
      "market": "上市"
    },
    {
      "code": "00992A",
      "name": "主動群益科技創新",
      "volume": 34590,
      "market": "上市"
    },
    {
      "code": "2886",
      "name": "兆豐金",
      "volume": 31601,
      "market": "上市"
    },
    {
      "code": "8039",
      "name": "台虹",
      "volume": 30336,
      "market": "上市"
    },
    {
      "code": "2880",
      "name": "華南金",
      "volume": 30304,
      "market": "上市"
    },
    {
      "code": "2883",
      "name": "凱基金",
      "volume": 29200,
      "market": "上市"
    },
    {
      "code": "2464",
      "name": "盟立",
      "volume": 29018,
      "market": "上市"
    },
    {
      "code": "5904",
      "name": "寶雅*",
      "volume": 87597,
      "market": "上櫃"
    },
    {
      "code": "6182",
      "name": "合晶",
      "volume": 55977,
      "market": "上櫃"
    },
    {
      "code": "00937B",
      "name": "群益ESG投等債20+",
      "volume": 38517,
      "market": "上櫃"
    },
    {
      "code": "5483",
      "name": "中美晶",
      "volume": 32861,
      "market": "上櫃"
    },
    {
      "code": "3105",
      "name": "穩懋",
      "volume": 30375,
      "market": "上櫃"
    },
    {
      "code": "6147",
      "name": "頎邦",
      "volume": 26621,
      "market": "上櫃"
    },
    {
      "code": "6173",
      "name": "信昌電",
      "volume": 26232,
      "market": "上櫃"
    },
    {
      "code": "8043",
      "name": "蜜望實",
      "volume": 20090,
      "market": "上櫃"
    },
    {
      "code": "5328",
      "name": "華容",
      "volume": 19087,
      "market": "上櫃"
    },
    {
      "code": "1785",
      "name": "光洋科",
      "volume": 18100,
      "market": "上櫃"
    },
    {
      "code": "4979",
      "name": "華星光",
      "volume": 17490,
      "market": "上櫃"
    },
    {
      "code": "5347",
      "name": "世界",
      "volume": 16125,
      "market": "上櫃"
    },
    {
      "code": "4931",
      "name": "新盛力",
      "volume": 16103,
      "market": "上櫃"
    },
    {
      "code": "5475",
      "name": "德宏",
      "volume": 15276,
      "market": "上櫃"
    },
    {
      "code": "3211",
      "name": "順達",
      "volume": 13683,
      "market": "上櫃"
    },
    {
      "code": "3260",
      "name": "威剛",
      "volume": 12197,
      "market": "上櫃"
    },
    {
      "code": "00981B",
      "name": "第一金優選非投債",
      "volume": 11662,
      "market": "上櫃"
    },
    {
      "code": "4991",
      "name": "環宇-KY",
      "volume": 11591,
      "market": "上櫃"
    },
    {
      "code": "8358",
      "name": "金居",
      "volume": 11222,
      "market": "上櫃"
    },
    {
      "code": "6488",
      "name": "環球晶",
      "volume": 11057,
      "market": "上櫃"
    },
    {
      "code": "3441",
      "name": "聯一光",
      "volume": 10828,
      "market": "上櫃"
    },
    {
      "code": "3374",
      "name": "精材",
      "volume": 10752,
      "market": "上櫃"
    },
    {
      "code": "009825",
      "name": "聯邦美國金融創新",
      "volume": 9141,
      "market": "上櫃"
    },
    {
      "code": "8069",
      "name": "元太",
      "volume": 8900,
      "market": "上櫃"
    },
    {
      "code": "5351",
      "name": "鈺創",
      "volume": 8671,
      "market": "上櫃"
    },
    {
      "code": "00687B",
      "name": "國泰20年美債",
      "volume": 8086,
      "market": "上櫃"
    },
    {
      "code": "3264",
      "name": "欣銓",
      "volume": 7720,
      "market": "上櫃"
    },
    {
      "code": "6265",
      "name": "方土昶",
      "volume": 7539,
      "market": "上櫃"
    },
    {
      "code": "00679B",
      "name": "元大美債20年",
      "volume": 7487,
      "market": "上櫃"
    },
    {
      "code": "5340",
      "name": "建榮",
      "volume": 7422,
      "market": "上櫃"
    },
    {
      "code": "8050",
      "name": "廣積",
      "volume": 7321,
      "market": "上櫃"
    },
    {
      "code": "3163",
      "name": "波若威",
      "volume": 7189,
      "market": "上櫃"
    },
    {
      "code": "00989B",
      "name": "台新美國非投等債",
      "volume": 7161,
      "market": "上櫃"
    },
    {
      "code": "6016",
      "name": "康和證",
      "volume": 7046,
      "market": "上櫃"
    },
    {
      "code": "00933B",
      "name": "國泰10Y+金融債",
      "volume": 6973,
      "market": "上櫃"
    },
    {
      "code": "4707",
      "name": "磐亞",
      "volume": 6736,
      "market": "上櫃"
    },
    {
      "code": "4541",
      "name": "晟田",
      "volume": 6423,
      "market": "上櫃"
    },
    {
      "code": "6603",
      "name": "富強鑫",
      "volume": 6409,
      "market": "上櫃"
    },
    {
      "code": "5371",
      "name": "中光電",
      "volume": 6402,
      "market": "上櫃"
    },
    {
      "code": "8042",
      "name": "金山電",
      "volume": 6387,
      "market": "上櫃"
    },
    {
      "code": "00888",
      "name": "永豐台灣ESG",
      "volume": 6374,
      "market": "上櫃"
    },
    {
      "code": "1815",
      "name": "富喬",
      "volume": 6263,
      "market": "上櫃"
    },
    {
      "code": "4716",
      "name": "大立",
      "volume": 6201,
      "market": "上櫃"
    },
    {
      "code": "8299",
      "name": "群聯",
      "volume": 6097,
      "market": "上櫃"
    },
    {
      "code": "00950B",
      "name": "凱基A級公司債",
      "volume": 6096,
      "market": "上櫃"
    },
    {
      "code": "5425",
      "name": "台半",
      "volume": 6089,
      "market": "上櫃"
    },
    {
      "code": "3624",
      "name": "光頡",
      "volume": 6053,
      "market": "上櫃"
    },
    {
      "code": "5864",
      "name": "致和證",
      "volume": 6010,
      "market": "上櫃"
    },
    {
      "code": "4939",
      "name": "亞電",
      "volume": 5805,
      "market": "上櫃"
    },
    {
      "code": "3234",
      "name": "光環",
      "volume": 5747,
      "market": "上櫃"
    }
  ]
};

const SITCA_BUY_3D = {
  "date": "08/12",
  "sourceName": "富邦證券 / 投信買超近 3 日 (上市 Top 50 + 上櫃 Top 50)",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_DD_0_3.djhtm",
  "stocks": [
    {
      "code": "2880",
      "name": "華南金",
      "buyVol": 19302,
      "market": "上市"
    },
    {
      "code": "2887",
      "name": "台新新光金",
      "buyVol": 19189,
      "market": "上市"
    },
    {
      "code": "2883",
      "name": "凱基金",
      "buyVol": 16708,
      "market": "上市"
    },
    {
      "code": "2886",
      "name": "兆豐金",
      "buyVol": 10028,
      "market": "上市"
    },
    {
      "code": "1303",
      "name": "南亞",
      "buyVol": 9152,
      "market": "上市"
    },
    {
      "code": "2337",
      "name": "旺宏",
      "buyVol": 8741,
      "market": "上市"
    },
    {
      "code": "4938",
      "name": "和碩",
      "buyVol": 3712,
      "market": "上市"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "buyVol": 3312,
      "market": "上市"
    },
    {
      "code": "3711",
      "name": "日月光投控",
      "buyVol": 2898,
      "market": "上市"
    },
    {
      "code": "4904",
      "name": "遠傳",
      "buyVol": 2760,
      "market": "上市"
    },
    {
      "code": "2603",
      "name": "長榮",
      "buyVol": 2657,
      "market": "上市"
    },
    {
      "code": "2855",
      "name": "統一證",
      "buyVol": 2536,
      "market": "上市"
    },
    {
      "code": "00991A",
      "name": "主動復華未來50",
      "buyVol": 2450,
      "market": "上市"
    },
    {
      "code": "2492",
      "name": "華新科",
      "buyVol": 2332,
      "market": "上市"
    },
    {
      "code": "3026",
      "name": "禾伸堂",
      "buyVol": 2331,
      "market": "上市"
    },
    {
      "code": "3450",
      "name": "聯鈞",
      "buyVol": 2318,
      "market": "上市"
    },
    {
      "code": "6805",
      "name": "富世達",
      "buyVol": 2236,
      "market": "上市"
    },
    {
      "code": "00992A",
      "name": "主動群益科技創新",
      "buyVol": 1900,
      "market": "上市"
    },
    {
      "code": "00980A",
      "name": "主動野村臺灣優選",
      "buyVol": 1789,
      "market": "上市"
    },
    {
      "code": "2308",
      "name": "台達電",
      "buyVol": 1782,
      "market": "上市"
    },
    {
      "code": "2382",
      "name": "廣達",
      "buyVol": 1626,
      "market": "上市"
    },
    {
      "code": "2368",
      "name": "金像電",
      "buyVol": 1511,
      "market": "上市"
    },
    {
      "code": "2892",
      "name": "第一金",
      "buyVol": 1435,
      "market": "上市"
    },
    {
      "code": "2301",
      "name": "光寶科",
      "buyVol": 1359,
      "market": "上市"
    },
    {
      "code": "2542",
      "name": "興富發",
      "buyVol": 1259,
      "market": "上市"
    },
    {
      "code": "2633",
      "name": "台灣高鐵",
      "buyVol": 1212,
      "market": "上市"
    },
    {
      "code": "2884",
      "name": "玉山金",
      "buyVol": 1139,
      "market": "上市"
    },
    {
      "code": "2330",
      "name": "台積電",
      "buyVol": 1121,
      "market": "上市"
    },
    {
      "code": "1717",
      "name": "長興",
      "buyVol": 992,
      "market": "上市"
    },
    {
      "code": "2882",
      "name": "國泰金",
      "buyVol": 976,
      "market": "上市"
    },
    {
      "code": "5880",
      "name": "合庫金",
      "buyVol": 945,
      "market": "上市"
    },
    {
      "code": "0056",
      "name": "元大高股息",
      "buyVol": 840,
      "market": "上市"
    },
    {
      "code": "2356",
      "name": "英業達",
      "buyVol": 837,
      "market": "上市"
    },
    {
      "code": "8046",
      "name": "南電",
      "buyVol": 833,
      "market": "上市"
    },
    {
      "code": "2317",
      "name": "鴻海",
      "buyVol": 790,
      "market": "上市"
    },
    {
      "code": "3044",
      "name": "健鼎",
      "buyVol": 739,
      "market": "上市"
    },
    {
      "code": "5876",
      "name": "上海商銀",
      "buyVol": 720,
      "market": "上市"
    },
    {
      "code": "2618",
      "name": "長榮航",
      "buyVol": 660,
      "market": "上市"
    },
    {
      "code": "4915",
      "name": "致伸",
      "buyVol": 638,
      "market": "上市"
    },
    {
      "code": "2357",
      "name": "華碩",
      "buyVol": 632,
      "market": "上市"
    },
    {
      "code": "4551",
      "name": "智伸科",
      "buyVol": 625,
      "market": "上市"
    },
    {
      "code": "8996",
      "name": "高力",
      "buyVol": 599,
      "market": "上市"
    },
    {
      "code": "2903",
      "name": "遠百",
      "buyVol": 580,
      "market": "上市"
    },
    {
      "code": "6239",
      "name": "力成",
      "buyVol": 569,
      "market": "上市"
    },
    {
      "code": "6139",
      "name": "亞翔",
      "buyVol": 438,
      "market": "上市"
    },
    {
      "code": "2481",
      "name": "強茂",
      "buyVol": 434,
      "market": "上市"
    },
    {
      "code": "2027",
      "name": "大成鋼",
      "buyVol": 425,
      "market": "上市"
    },
    {
      "code": "3090",
      "name": "日電貿",
      "buyVol": 417,
      "market": "上市"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "buyVol": 411,
      "market": "上市"
    },
    {
      "code": "2347",
      "name": "聯強",
      "buyVol": 399,
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
    "volume": 17403,
    "ma5": 2399.0,
    "ma10": 2388.0,
    "ma20": 2354.5,
    "vMa5": 18374,
    "vMa10": 26982,
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
    "high20d": 2445.0,
    "high5d": 2445.0,
    "high10d": 2445.0
  },
  {
    "code": "2454",
    "name": "聯發科",
    "price": 4220.0,
    "open": 4130.0,
    "high": 4295.0,
    "low": 4115.0,
    "prevClose": 4015.0,
    "volume": 10474,
    "ma5": 4023.0,
    "ma10": 3936.5,
    "ma20": 3730.0,
    "vMa5": 6939,
    "vMa10": 7802,
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
      4220.0
    ],
    "ma60": 4041.83,
    "high20d": 4295.0,
    "high5d": 4295.0,
    "high10d": 4295.0
  },
  {
    "code": "2317",
    "name": "鴻海",
    "price": 262.0,
    "open": 274.5,
    "high": 274.5,
    "low": 261.0,
    "prevClose": 270.0,
    "volume": 84812,
    "ma5": 263.9,
    "ma10": 259.6,
    "ma20": 251.47,
    "vMa5": 47666,
    "vMa10": 57701,
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
    "high10d": 274.5
  },
  {
    "code": "2308",
    "name": "台達電",
    "price": 1880.0,
    "open": 1845.0,
    "high": 1915.0,
    "low": 1845.0,
    "prevClose": 1790.0,
    "volume": 12579,
    "ma5": 1788.0,
    "ma10": 1711.0,
    "ma20": 1714.75,
    "vMa5": 11621,
    "vMa10": 14745,
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
      1880.0
    ],
    "ma60": 1989.08,
    "high20d": 1950.0,
    "high5d": 1915.0,
    "high10d": 1915.0
  },
  {
    "code": "2303",
    "name": "聯電",
    "price": 124.0,
    "open": 125.5,
    "high": 130.5,
    "low": 123.0,
    "prevClose": 123.0,
    "volume": 189831,
    "ma5": 121.8,
    "ma10": 121.0,
    "ma20": 123.8,
    "vMa5": 140001,
    "vMa10": 171424,
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
      124.0
    ],
    "ma60": 139.5,
    "high20d": 148.0,
    "high5d": 130.5,
    "high10d": 130.5
  },
  {
    "code": "3711",
    "name": "日月光投控",
    "price": 626.0,
    "open": 627.0,
    "high": 638.0,
    "low": 623.0,
    "prevClose": 621.0,
    "volume": 17034,
    "ma5": 618.2,
    "ma10": 602.9,
    "ma20": 597.85,
    "vMa5": 18483,
    "vMa10": 21543,
    "limitUpPrice": 693.0,
    "categories": [
      "0050",
      "半導體-封測",
      "SitcaBuy"
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
    "high20d": 673.0,
    "high5d": 641.0,
    "high10d": 641.0
  },
  {
    "code": "2449",
    "name": "京元電子",
    "price": 253.5,
    "open": 261.0,
    "high": 262.0,
    "low": 253.0,
    "prevClose": 259.0,
    "volume": 24424,
    "ma5": 249.8,
    "ma10": 244.75,
    "ma20": 248.5,
    "vMa5": 22314,
    "vMa10": 21393,
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
    "high20d": 291.43,
    "high5d": 262.0,
    "high10d": 262.0
  },
  {
    "code": "3037",
    "name": "欣興",
    "price": 995.0,
    "open": 1045.0,
    "high": 1045.0,
    "low": 976.0,
    "prevClose": 1000.0,
    "volume": 8118,
    "ma5": 986.8,
    "ma10": 945.2,
    "ma20": 873.95,
    "vMa5": 9572,
    "vMa10": 19064,
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
      995.0
    ],
    "ma60": 930.65,
    "high20d": 1045.0,
    "high5d": 1045.0,
    "high10d": 1045.0
  },
  {
    "code": "8046",
    "name": "南電",
    "price": 1220.0,
    "open": 1295.0,
    "high": 1300.0,
    "low": 1215.0,
    "prevClose": 1265.0,
    "volume": 17617,
    "ma5": 1169.0,
    "ma10": 1092.8,
    "ma20": 1089.25,
    "vMa5": 7922,
    "vMa10": 6132,
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
      1220.0
    ],
    "ma60": 1028.18,
    "high20d": 1310.0,
    "high5d": 1300.0,
    "high10d": 1300.0
  },
  {
    "code": "3189",
    "name": "景碩",
    "price": 834.0,
    "open": 866.0,
    "high": 872.0,
    "low": 813.0,
    "prevClose": 858.0,
    "volume": 4127,
    "ma5": 838.6,
    "ma10": 797.4,
    "ma20": 744.35,
    "vMa5": 5895,
    "vMa10": 9493,
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
      834.0
    ],
    "ma60": 739.62,
    "high20d": 872.0,
    "high5d": 872.0,
    "high10d": 872.0
  },
  {
    "code": "6239",
    "name": "力成",
    "price": 284.0,
    "open": 287.0,
    "high": 294.0,
    "low": 284.0,
    "prevClose": 281.5,
    "volume": 16267,
    "ma5": 279.8,
    "ma10": 265.55,
    "ma20": 266.38,
    "vMa5": 19421,
    "vMa10": 21496,
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
      284.0
    ],
    "ma60": 309.3,
    "high20d": 325.0,
    "high5d": 296.0,
    "high10d": 296.0
  },
  {
    "code": "6770",
    "name": "力積電",
    "price": 75.0,
    "open": 75.0,
    "high": 77.4,
    "low": 72.7,
    "prevClose": 73.7,
    "volume": 444927,
    "ma5": 69.76,
    "ma10": 65.08,
    "ma20": 63.05,
    "vMa5": 285782,
    "vMa10": 252853,
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
      75.0
    ],
    "ma60": 70.64,
    "high20d": 77.4,
    "high5d": 77.4,
    "high10d": 77.4
  },
  {
    "code": "3707",
    "name": "漢磊",
    "price": 65.7,
    "open": 64.1,
    "high": 68.9,
    "low": 64.1,
    "prevClose": 63.5,
    "volume": 7999,
    "ma5": 62.7,
    "ma10": 60.66,
    "ma20": 60.78,
    "vMa5": 4234,
    "vMa10": 4664,
    "limitUpPrice": 68.53,
    "categories": [
      "半導體-功率"
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
      65.7
    ],
    "ma60": 75.26,
    "high20d": 72.5,
    "high5d": 68.9,
    "high10d": 68.9
  },
  {
    "code": "6488",
    "name": "環球晶",
    "price": 1025.0,
    "open": 970.0,
    "high": 1025.0,
    "low": 950.0,
    "prevClose": 933.0,
    "volume": 9893,
    "ma5": 906.6,
    "ma10": 895.0,
    "ma20": 985.8,
    "vMa5": 8987,
    "vMa10": 12249,
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
    "high20d": 1320.0,
    "high5d": 1025.0,
    "high10d": 1025.0
  },
  {
    "code": "5483",
    "name": "中美晶",
    "price": 188.0,
    "open": 188.0,
    "high": 203.0,
    "low": 186.0,
    "prevClose": 185.0,
    "volume": 70927,
    "ma5": 175.9,
    "ma10": 174.55,
    "ma20": 189.35,
    "vMa5": 30424,
    "vMa10": 38547,
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
      188.0
    ],
    "ma60": 183.86,
    "high20d": 252.0,
    "high5d": 203.0,
    "high10d": 203.0
  },
  {
    "code": "2327",
    "name": "國巨*",
    "price": 662.0,
    "open": 631.0,
    "high": 662.0,
    "low": 626.0,
    "prevClose": 602.0,
    "volume": 46022,
    "ma5": 598.8,
    "ma10": 576.2,
    "ma20": 597.67,
    "vMa5": 51399,
    "vMa10": 48167,
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
    "high20d": 732.0,
    "high5d": 662.0,
    "high10d": 662.0
  },
  {
    "code": "2492",
    "name": "華新科",
    "price": 316.5,
    "open": 299.0,
    "high": 316.5,
    "low": 298.0,
    "prevClose": 288.0,
    "volume": 26444,
    "ma5": 285.9,
    "ma10": 266.25,
    "ma20": 266.5,
    "vMa5": 36820,
    "vMa10": 28875,
    "limitUpPrice": 300.85,
    "categories": [
      "Top100",
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
    "high20d": 316.5,
    "high5d": 316.5,
    "high10d": 316.5
  },
  {
    "code": "3026",
    "name": "禾伸堂",
    "price": 698.0,
    "open": 706.0,
    "high": 752.0,
    "low": 695.0,
    "prevClose": 685.0,
    "volume": 23296,
    "ma5": 630.4,
    "ma10": 569.95,
    "ma20": 585.33,
    "vMa5": 14507,
    "vMa10": 8822,
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
      698.0
    ],
    "ma60": 701.69,
    "high20d": 752.0,
    "high5d": 752.0,
    "high10d": 752.0
  },
  {
    "code": "2408",
    "name": "南亞科",
    "price": 518.0,
    "open": 497.0,
    "high": 530.0,
    "low": 490.0,
    "prevClose": 482.5,
    "volume": 120895,
    "ma5": 489.7,
    "ma10": 454.55,
    "ma20": 425.48,
    "vMa5": 98461,
    "vMa10": 92134,
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
      518.0
    ],
    "ma60": 407.88,
    "high20d": 530.0,
    "high5d": 530.0,
    "high10d": 530.0
  },
  {
    "code": "2344",
    "name": "華邦電",
    "price": 178.0,
    "open": 183.0,
    "high": 185.0,
    "low": 177.5,
    "prevClose": 177.0,
    "volume": 207230,
    "ma5": 175.2,
    "ma10": 164.6,
    "ma20": 157.32,
    "vMa5": 186497,
    "vMa10": 155780,
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
      178.0
    ],
    "ma60": 169.51,
    "high20d": 193.0,
    "high5d": 193.0,
    "high10d": 193.0
  },
  {
    "code": "3260",
    "name": "威剛",
    "price": 410.0,
    "open": 416.0,
    "high": 419.0,
    "low": 409.5,
    "prevClose": 409.5,
    "volume": 7110,
    "ma5": 410.4,
    "ma10": 405.75,
    "ma20": 391.27,
    "vMa5": 11532,
    "vMa10": 14040,
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
      410.0
    ],
    "ma60": 406.4,
    "high20d": 437.0,
    "high5d": 437.0,
    "high10d": 437.0
  },
  {
    "code": "8299",
    "name": "群聯",
    "price": 2270.0,
    "open": 2260.0,
    "high": 2280.0,
    "low": 2175.0,
    "prevClose": 2210.0,
    "volume": 6644,
    "ma5": 2126.0,
    "ma10": 1972.0,
    "ma20": 1861.75,
    "vMa5": 5212,
    "vMa10": 4624,
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
      2270.0
    ],
    "ma60": 2196.17,
    "high20d": 2280.0,
    "high5d": 2280.0,
    "high10d": 2280.0
  },
  {
    "code": "3034",
    "name": "聯詠",
    "price": 534.0,
    "open": 542.0,
    "high": 545.0,
    "low": 531.0,
    "prevClose": 537.0,
    "volume": 2814,
    "ma5": 539.0,
    "ma10": 535.0,
    "ma20": 513.1,
    "vMa5": 2902,
    "vMa10": 3983,
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
      534.0
    ],
    "ma60": 509.17,
    "high20d": 572.0,
    "high5d": 557.0,
    "high10d": 572.0
  },
  {
    "code": "2379",
    "name": "瑞昱",
    "price": 758.0,
    "open": 775.0,
    "high": 775.0,
    "low": 750.0,
    "prevClose": 766.0,
    "volume": 1744,
    "ma5": 760.8,
    "ma10": 740.9,
    "ma20": 737.45,
    "vMa5": 2180,
    "vMa10": 3955,
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
    "high10d": 780.0
  },
  {
    "code": "2382",
    "name": "廣達",
    "price": 323.5,
    "open": 328.0,
    "high": 328.5,
    "low": 320.5,
    "prevClose": 325.5,
    "volume": 16224,
    "ma5": 315.2,
    "ma10": 307.05,
    "ma20": 312.65,
    "vMa5": 18749,
    "vMa10": 22687,
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
      323.5
    ],
    "ma60": 348.04,
    "high20d": 349.0,
    "high5d": 330.0,
    "high10d": 330.0
  },
  {
    "code": "3231",
    "name": "緯創",
    "price": 196.5,
    "open": 196.0,
    "high": 199.5,
    "low": 193.5,
    "prevClose": 193.5,
    "volume": 65948,
    "ma5": 191.5,
    "ma10": 189.7,
    "ma20": 176.1,
    "vMa5": 55190,
    "vMa10": 100743,
    "limitUpPrice": 212.3,
    "categories": [
      "0050",
      "Top100",
      "MajorBuy"
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
      196.5
    ],
    "ma60": 163.38,
    "high20d": 202.5,
    "high5d": 199.5,
    "high10d": 202.5
  },
  {
    "code": "2356",
    "name": "英業達",
    "price": 69.2,
    "open": 69.5,
    "high": 72.6,
    "low": 68.2,
    "prevClose": 69.0,
    "volume": 66547,
    "ma5": 66.66,
    "ma10": 65.62,
    "ma20": 63.08,
    "vMa5": 38476,
    "vMa10": 35270,
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
      69.2
    ],
    "ma60": 65.92,
    "high20d": 72.6,
    "high5d": 72.6,
    "high10d": 72.6
  },
  {
    "code": "2376",
    "name": "技嘉",
    "price": 393.0,
    "open": 385.5,
    "high": 395.0,
    "low": 379.5,
    "prevClose": 375.5,
    "volume": 16830,
    "ma5": 362.5,
    "ma10": 349.15,
    "ma20": 343.1,
    "vMa5": 9953,
    "vMa10": 9649,
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
      393.0
    ],
    "ma60": 343.68,
    "high20d": 395.0,
    "high5d": 395.0,
    "high10d": 395.0
  },
  {
    "code": "2603",
    "name": "長榮",
    "price": 214.0,
    "open": 215.0,
    "high": 217.0,
    "low": 214.0,
    "prevClose": 214.5,
    "volume": 4795,
    "ma5": 213.6,
    "ma10": 209.45,
    "ma20": 205.65,
    "vMa5": 9238,
    "vMa10": 7542,
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
      214.0
    ],
    "ma60": 205.78,
    "high20d": 220.0,
    "high5d": 220.0,
    "high10d": 220.0
  },
  {
    "code": "2609",
    "name": "陽明",
    "price": 51.1,
    "open": 51.9,
    "high": 52.0,
    "low": 50.9,
    "prevClose": 51.7,
    "volume": 14534,
    "ma5": 51.38,
    "ma10": 51.05,
    "ma20": 50.74,
    "vMa5": 16154,
    "vMa10": 14756,
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
      51.1
    ],
    "ma60": 51.42,
    "high20d": 52.2,
    "high5d": 52.2,
    "high10d": 52.2
  },
  {
    "code": "2615",
    "name": "萬海",
    "price": 87.4,
    "open": 88.1,
    "high": 88.8,
    "low": 86.5,
    "prevClose": 87.1,
    "volume": 11543,
    "ma5": 86.8,
    "ma10": 86.06,
    "ma20": 84.97,
    "vMa5": 10748,
    "vMa10": 8623,
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
      87.4
    ],
    "ma60": 82.53,
    "high20d": 88.8,
    "high5d": 88.8,
    "high10d": 88.8
  },
  {
    "code": "3481",
    "name": "群創",
    "price": 49.45,
    "open": 51.5,
    "high": 51.9,
    "low": 49.4,
    "prevClose": 50.4,
    "volume": 176114,
    "ma5": 49.96,
    "ma10": 48.67,
    "ma20": 48.49,
    "vMa5": 241992,
    "vMa10": 301529,
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
      49.45
    ],
    "ma60": 54.68,
    "high20d": 55.1,
    "high5d": 52.3,
    "high10d": 52.3
  },
  {
    "code": "2409",
    "name": "友達",
    "price": 25.85,
    "open": 26.55,
    "high": 26.9,
    "low": 25.8,
    "prevClose": 26.25,
    "volume": 111976,
    "ma5": 25.95,
    "ma10": 25.13,
    "ma20": 24.96,
    "vMa5": 220266,
    "vMa10": 190904,
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
      25.85
    ],
    "ma60": 26.32,
    "high20d": 27.9,
    "high5d": 27.9,
    "high10d": 27.9
  },
  {
    "code": "2881",
    "name": "富邦金",
    "price": 128.5,
    "open": 128.0,
    "high": 129.0,
    "low": 127.0,
    "prevClose": 127.0,
    "volume": 6956,
    "ma5": 127.8,
    "ma10": 128.25,
    "ma20": 126.97,
    "vMa5": 9627,
    "vMa10": 16652,
    "limitUpPrice": 141.35,
    "categories": [
      "0050"
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
    "high10d": 132.5
  },
  {
    "code": "2882",
    "name": "國泰金",
    "price": 99.8,
    "open": 100.0,
    "high": 100.5,
    "low": 98.9,
    "prevClose": 99.7,
    "volume": 11681,
    "ma5": 99.9,
    "ma10": 99.87,
    "ma20": 97.86,
    "vMa5": 14453,
    "vMa10": 19387,
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
      99.8
    ],
    "ma60": 97.43,
    "high20d": 102.5,
    "high5d": 101.5,
    "high10d": 102.5
  },
  {
    "code": "2891",
    "name": "中信金",
    "price": 66.1,
    "open": 66.3,
    "high": 66.5,
    "low": 65.2,
    "prevClose": 66.6,
    "volume": 20410,
    "ma5": 66.32,
    "ma10": 65.67,
    "ma20": 64.23,
    "vMa5": 24907,
    "vMa10": 31627,
    "limitUpPrice": 73.15,
    "categories": [
      "0050",
      "Top100"
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
      66.1
    ],
    "ma60": 66.06,
    "high20d": 67.3,
    "high5d": 67.3,
    "high10d": 67.3
  },
  {
    "code": "2886",
    "name": "兆豐金",
    "price": 45.5,
    "open": 46.9,
    "high": 46.9,
    "low": 44.95,
    "prevClose": 48.7,
    "volume": 64529,
    "ma5": 49.1,
    "ma10": 50.24,
    "ma20": 49.59,
    "vMa5": 34665,
    "vMa10": 35128,
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
      45.5
    ],
    "ma60": 45.84,
    "high20d": 53.7,
    "high5d": 51.9,
    "high10d": 53.7
  },
  {
    "code": "2884",
    "name": "玉山金",
    "price": 37.2,
    "open": 37.0,
    "high": 37.3,
    "low": 36.35,
    "prevClose": 36.75,
    "volume": 32602,
    "ma5": 37.36,
    "ma10": 37.8,
    "ma20": 37.02,
    "vMa5": 28092,
    "vMa10": 33330,
    "limitUpPrice": 41.58,
    "categories": [
      "0050",
      "SitcaBuy"
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
      37.2
    ],
    "ma60": 34.81,
    "high20d": 39.1,
    "high5d": 38.3,
    "high10d": 39.1
  },
  {
    "code": "2892",
    "name": "第一金",
    "price": 33.0,
    "open": 33.35,
    "high": 33.35,
    "low": 32.65,
    "prevClose": 33.15,
    "volume": 24229,
    "ma5": 33.87,
    "ma10": 34.88,
    "ma20": 34.7,
    "vMa5": 46999,
    "vMa10": 49707,
    "limitUpPrice": 38.45,
    "categories": [
      "0050",
      "Top100",
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
      33.0
    ],
    "ma60": 32.3,
    "high20d": 36.9,
    "high5d": 35.85,
    "high10d": 36.9
  },
  {
    "code": "2885",
    "name": "元大金",
    "price": 69.7,
    "open": 69.2,
    "high": 70.0,
    "low": 68.4,
    "prevClose": 68.6,
    "volume": 16272,
    "ma5": 68.52,
    "ma10": 68.42,
    "ma20": 65.82,
    "vMa5": 14807,
    "vMa10": 22868,
    "limitUpPrice": 75.02,
    "categories": [
      "0050"
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
    "high10d": 70.8
  },
  {
    "code": "5880",
    "name": "合庫金",
    "price": 24.15,
    "open": 24.15,
    "high": 24.2,
    "low": 23.9,
    "prevClose": 24.1,
    "volume": 16492,
    "ma5": 24.65,
    "ma10": 25.38,
    "ma20": 25.29,
    "vMa5": 26724,
    "vMa10": 29492,
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
      24.15
    ],
    "ma60": 24.13,
    "high20d": 26.98,
    "high5d": 25.8,
    "high10d": 26.98
  },
  {
    "code": "2890",
    "name": "永豐金",
    "price": 39.85,
    "open": 40.2,
    "high": 40.2,
    "low": 39.3,
    "prevClose": 39.85,
    "volume": 12525,
    "ma5": 39.32,
    "ma10": 39.51,
    "ma20": 39.24,
    "vMa5": 14903,
    "vMa10": 21812,
    "limitUpPrice": 42.79,
    "categories": [
      "0050",
      "MajorBuy"
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
      39.85
    ],
    "ma60": 36.63,
    "high20d": 41.05,
    "high5d": 40.2,
    "high10d": 41.05
  },
  {
    "code": "2880",
    "name": "華南金",
    "price": 38.9,
    "open": 41.5,
    "high": 41.55,
    "low": 38.3,
    "prevClose": 42.77,
    "volume": 66802,
    "ma5": 42.48,
    "ma10": 42.81,
    "ma20": 41.77,
    "vMa5": 34569,
    "vMa10": 31429,
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
      38.9
    ],
    "ma60": 37.71,
    "high20d": 44.7,
    "high5d": 44.41,
    "high10d": 44.7
  },
  {
    "code": "2883",
    "name": "凱基金",
    "price": 31.45,
    "open": 31.4,
    "high": 31.5,
    "low": 30.85,
    "prevClose": 31.2,
    "volume": 27848,
    "ma5": 31.12,
    "ma10": 30.96,
    "ma20": 30.46,
    "vMa5": 27076,
    "vMa10": 42978,
    "limitUpPrice": 34.16,
    "categories": [
      "0050",
      "Top100",
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
      31.45
    ],
    "ma60": 28.52,
    "high20d": 31.75,
    "high5d": 31.5,
    "high10d": 31.75
  },
  {
    "code": "2887",
    "name": "台新新光金",
    "price": 36.1,
    "open": 35.7,
    "high": 36.3,
    "low": 35.25,
    "prevClose": 35.65,
    "volume": 46503,
    "ma5": 35.67,
    "ma10": 35.54,
    "ma20": 34.9,
    "vMa5": 38812,
    "vMa10": 47636,
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
      36.1
    ],
    "ma60": 31.81,
    "high20d": 36.3,
    "high5d": 36.3,
    "high10d": 36.3
  },
  {
    "code": "2002",
    "name": "中鋼",
    "price": 19.2,
    "open": 19.8,
    "high": 19.8,
    "low": 19.15,
    "prevClose": 19.75,
    "volume": 46264,
    "ma5": 19.48,
    "ma10": 19.2,
    "ma20": 19.06,
    "vMa5": 63567,
    "vMa10": 46651,
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
    "high10d": 19.9
  },
  {
    "code": "1101",
    "name": "台泥",
    "price": 24.0,
    "open": 24.55,
    "high": 24.7,
    "low": 24.0,
    "prevClose": 24.45,
    "volume": 31851,
    "ma5": 24.4,
    "ma10": 24.2,
    "ma20": 24.13,
    "vMa5": 19658,
    "vMa10": 23736,
    "limitUpPrice": 27.01,
    "categories": [],
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
      24.0
    ],
    "ma60": 24.02,
    "high20d": 25.05,
    "high5d": 24.8,
    "high10d": 24.8
  },
  {
    "code": "1301",
    "name": "台塑",
    "price": 57.7,
    "open": 57.9,
    "high": 59.8,
    "low": 57.5,
    "prevClose": 56.2,
    "volume": 30459,
    "ma5": 56.18,
    "ma10": 55.61,
    "ma20": 58.21,
    "vMa5": 20168,
    "vMa10": 23233,
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
      57.7
    ],
    "ma60": 54.08,
    "high20d": 69.8,
    "high5d": 59.8,
    "high10d": 59.8
  },
  {
    "code": "5876",
    "name": "上海商銀",
    "categories": [
      "SitcaBuy"
    ],
    "price": 42.3,
    "prevClose": 42.85,
    "open": 43.1,
    "high": 43.1,
    "low": 42.05,
    "volume": 6795,
    "ma5": 43.01,
    "ma10": 43.69,
    "ma20": 44.31,
    "ma60": 42.36,
    "vMa5": 5254,
    "vMa10": 7529,
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
      42.3
    ],
    "high5d": 43.75,
    "high10d": 45.7
  },
  {
    "code": "5871",
    "name": "中租-KY",
    "categories": [],
    "price": 114.0,
    "prevClose": 113.5,
    "open": 114.0,
    "high": 114.5,
    "low": 112.5,
    "volume": 3251,
    "ma5": 112.2,
    "ma10": 111.8,
    "ma20": 114.55,
    "ma60": 113.4,
    "vMa5": 5534,
    "vMa10": 5824,
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
    "high10d": 116.0
  },
  {
    "code": "3008",
    "name": "大立光",
    "categories": [
      "0050"
    ],
    "price": 4675.0,
    "prevClose": 4585.0,
    "open": 4655.0,
    "high": 4825.0,
    "low": 4545.0,
    "volume": 2054,
    "ma5": 4480.0,
    "ma10": 4395.0,
    "ma20": 4171.75,
    "ma60": 4170.0,
    "vMa5": 1749,
    "vMa10": 2144,
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
      4675.0
    ],
    "high5d": 4825.0,
    "high10d": 4825.0
  },
  {
    "code": "2357",
    "name": "華碩",
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "price": 937.0,
    "prevClose": 852.0,
    "open": 937.0,
    "high": 937.0,
    "low": 937.0,
    "volume": 3531,
    "ma5": 852.6,
    "ma10": 833.4,
    "ma20": 787.4,
    "ma60": 763.15,
    "vMa5": 3315,
    "vMa10": 4241,
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
    "high10d": 937.0
  },
  {
    "code": "2395",
    "name": "研華",
    "categories": [
      "0050"
    ],
    "price": 696.0,
    "prevClose": 686.0,
    "open": 695.0,
    "high": 709.0,
    "low": 690.0,
    "volume": 3657,
    "ma5": 668.8,
    "ma10": 631.4,
    "ma20": 595.85,
    "ma60": 531.43,
    "vMa5": 5392,
    "vMa10": 5772,
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
      696.0
    ],
    "high5d": 709.0,
    "high10d": 709.0
  },
  {
    "code": "2301",
    "name": "光寶科",
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "price": 268.0,
    "prevClose": 259.5,
    "open": 268.0,
    "high": 281.0,
    "low": 266.5,
    "volume": 34773,
    "ma5": 262.9,
    "ma10": 250.65,
    "ma20": 226.75,
    "ma60": 222.67,
    "vMa5": 35382,
    "vMa10": 40253,
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
      268.0
    ],
    "high5d": 281.0,
    "high10d": 281.0
  },
  {
    "code": "6669",
    "name": "緯穎",
    "categories": [
      "0050"
    ],
    "price": 6090.0,
    "prevClose": 6025.0,
    "open": 6095.0,
    "high": 6195.0,
    "low": 6020.0,
    "volume": 1196,
    "ma5": 6031.0,
    "ma10": 6011.5,
    "ma20": 5610.75,
    "ma60": 5259.58,
    "vMa5": 1340,
    "vMa10": 1714,
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
      6090.0
    ],
    "high5d": 6265.0,
    "high10d": 6400.0
  },
  {
    "code": "3661",
    "name": "世芯-KY",
    "categories": [
      "0050"
    ],
    "price": 4155.0,
    "prevClose": 4055.0,
    "open": 4100.0,
    "high": 4225.0,
    "low": 4090.0,
    "volume": 2401,
    "ma5": 3936.0,
    "ma10": 3665.0,
    "ma20": 3482.75,
    "ma60": 4035.67,
    "vMa5": 2761,
    "vMa10": 2385,
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
      4155.0
    ],
    "high5d": 4225.0,
    "high10d": 4225.0
  },
  {
    "code": "3443",
    "name": "創意",
    "categories": [
      "0050"
    ],
    "price": 5525.0,
    "prevClose": 5130.0,
    "open": 5260.0,
    "high": 5580.0,
    "low": 5230.0,
    "volume": 2819,
    "ma5": 4937.0,
    "ma10": 4569.0,
    "ma20": 4233.5,
    "ma60": 4504.17,
    "vMa5": 2455,
    "vMa10": 2096,
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
      5525.0
    ],
    "high5d": 5580.0,
    "high10d": 5580.0
  },
  {
    "code": "1216",
    "name": "統一",
    "categories": [
      "0050"
    ],
    "price": 76.2,
    "prevClose": 76.3,
    "open": 76.5,
    "high": 76.5,
    "low": 75.1,
    "volume": 10631,
    "ma5": 75.92,
    "ma10": 74.65,
    "ma20": 76.3,
    "ma60": 75.44,
    "vMa5": 14210,
    "vMa10": 18652,
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
      76.2
    ],
    "high5d": 76.5,
    "high10d": 76.6
  },
  {
    "code": "1303",
    "name": "南亞",
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "price": 189.5,
    "prevClose": 189.0,
    "open": 191.0,
    "high": 195.0,
    "low": 184.0,
    "volume": 91257,
    "ma5": 188.3,
    "ma10": 179.2,
    "ma20": 178.65,
    "ma60": 152.76,
    "vMa5": 100779,
    "vMa10": 88820,
    "high20d": 217.0,
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
      189.5
    ],
    "high5d": 197.5,
    "high10d": 197.5
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
    "volume": 19181,
    "ma5": 59.0,
    "ma10": 58.36,
    "ma20": 61.65,
    "ma60": 57.34,
    "vMa5": 20687,
    "vMa10": 24612,
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
    "high10d": 61.3
  },
  {
    "code": "6505",
    "name": "台塑化",
    "categories": [
      "0050"
    ],
    "price": 69.9,
    "prevClose": 70.2,
    "open": 70.6,
    "high": 71.1,
    "low": 69.6,
    "volume": 10321,
    "ma5": 70.24,
    "ma10": 69.26,
    "ma20": 75.0,
    "ma60": 62.15,
    "vMa5": 23439,
    "vMa10": 26996,
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
      69.9
    ],
    "high5d": 73.0,
    "high10d": 76.0
  },
  {
    "code": "2618",
    "name": "長榮航",
    "categories": [
      "SitcaBuy"
    ],
    "price": 40.85,
    "prevClose": 42.15,
    "open": 41.9,
    "high": 41.95,
    "low": 40.8,
    "volume": 27459,
    "ma5": 42.36,
    "ma10": 42.97,
    "ma20": 42.3,
    "ma60": 40.69,
    "vMa5": 32652,
    "vMa10": 38662,
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
      40.85
    ],
    "high5d": 44.6,
    "high10d": 44.6
  },
  {
    "code": "2610",
    "name": "長榮航",
    "categories": [],
    "price": 20.1,
    "prevClose": 20.25,
    "open": 20.35,
    "high": 20.35,
    "low": 20.0,
    "volume": 31520,
    "ma5": 20.71,
    "ma10": 21.56,
    "ma20": 21.38,
    "ma60": 21.07,
    "vMa5": 54000,
    "vMa10": 47527,
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
    "high10d": 22.85
  },
  {
    "code": "9910",
    "name": "豐泰",
    "categories": [],
    "price": 69.4,
    "prevClose": 71.0,
    "open": 71.4,
    "high": 71.4,
    "low": 69.2,
    "volume": 1114,
    "ma5": 70.28,
    "ma10": 69.15,
    "ma20": 68.99,
    "ma60": 71.78,
    "vMa5": 1204,
    "vMa10": 1294,
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
      69.4
    ],
    "high5d": 73.2,
    "high10d": 73.2
  },
  {
    "code": "2912",
    "name": "統一超",
    "categories": [],
    "price": 216.5,
    "prevClose": 219.5,
    "open": 220.0,
    "high": 220.0,
    "low": 216.0,
    "volume": 3572,
    "ma5": 219.1,
    "ma10": 220.3,
    "ma20": 229.9,
    "ma60": 228.89,
    "vMa5": 2316,
    "vMa10": 2958,
    "high20d": 246.5,
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
      216.5
    ],
    "high5d": 222.0,
    "high10d": 230.5
  },
  {
    "code": "1590",
    "name": "亞德客-KY",
    "categories": [],
    "price": 1485.0,
    "prevClose": 1595.0,
    "open": 1590.0,
    "high": 1595.0,
    "low": 1455.0,
    "volume": 1165,
    "ma5": 1551.0,
    "ma10": 1499.0,
    "ma20": 1434.0,
    "ma60": 1380.08,
    "vMa5": 953,
    "vMa10": 1059,
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
      1485.0
    ],
    "high5d": 1615.0,
    "high10d": 1615.0
  },
  {
    "code": "2207",
    "name": "和泰車",
    "categories": [],
    "price": 523.0,
    "prevClose": 504.0,
    "open": 516.0,
    "high": 529.0,
    "low": 515.0,
    "volume": 362,
    "ma5": 513.6,
    "ma10": 519.0,
    "ma20": 510.18,
    "ma60": 486.65,
    "vMa5": 271,
    "vMa10": 443,
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
      523.0
    ],
    "high5d": 529.0,
    "high10d": 573.0
  },
  {
    "code": "6415",
    "name": "矽力*-KY",
    "categories": [],
    "price": 467.0,
    "prevClose": 449.0,
    "open": 460.5,
    "high": 487.0,
    "low": 460.5,
    "volume": 2860,
    "ma5": 457.8,
    "ma10": 444.05,
    "ma20": 439.73,
    "ma60": 528.54,
    "vMa5": 3425,
    "vMa10": 4083,
    "high20d": 499.0,
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
      467.0
    ],
    "high5d": 488.0,
    "high10d": 488.0
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
    "volume": 1300,
    "ma5": 5497.0,
    "ma10": 5290.0,
    "ma20": 4961.75,
    "ma60": 5136.42,
    "vMa5": 1709,
    "vMa10": 2083,
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
    "high10d": 5875.0
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
    "volume": 2725,
    "ma5": 2200.0,
    "ma10": 2257.5,
    "ma20": 2196.5,
    "ma60": 2379.0,
    "vMa5": 3054,
    "vMa10": 3085,
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
    "high10d": 2595.0
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
    "volume": 10455,
    "ma5": 2884.0,
    "ma10": 2756.0,
    "ma20": 2507.25,
    "ma60": 2496.67,
    "vMa5": 4880,
    "vMa10": 4947,
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
    "high10d": 3200.0
  },
  {
    "code": "2360",
    "name": "致茂",
    "categories": [
      "0050"
    ],
    "price": 2305.0,
    "prevClose": 2195.0,
    "open": 2335.0,
    "high": 2395.0,
    "low": 2255.0,
    "volume": 3257,
    "ma5": 2128.0,
    "ma10": 2048.5,
    "ma20": 2016.5,
    "ma60": 2168.08,
    "vMa5": 2411,
    "vMa10": 3513,
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
      2305.0
    ],
    "high5d": 2395.0,
    "high10d": 2395.0
  },
  {
    "code": "2059",
    "name": "川湖",
    "categories": [
      "0050"
    ],
    "price": 11845.0,
    "prevClose": 12045.0,
    "open": 12235.0,
    "high": 12500.0,
    "low": 11845.0,
    "volume": 233,
    "ma5": 11844.0,
    "ma10": 10477.0,
    "ma20": 9122.75,
    "ma60": 7536.83,
    "vMa5": 451,
    "vMa10": 518,
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
      11845.0
    ],
    "high5d": 12540.0,
    "high10d": 12540.0
  },
  {
    "code": "2412",
    "name": "中華電",
    "categories": [
      "0050"
    ],
    "price": 135.5,
    "prevClose": 136.0,
    "open": 135.5,
    "high": 136.0,
    "low": 135.0,
    "volume": 7368,
    "ma5": 136.3,
    "ma10": 137.05,
    "ma20": 138.22,
    "ma60": 139.57,
    "vMa5": 8075,
    "vMa10": 10729,
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
      135.5
    ],
    "high5d": 138.0,
    "high10d": 140.5
  },
  {
    "code": "3665",
    "name": "貿聯-KY",
    "categories": [
      "0050"
    ],
    "price": 2195.0,
    "prevClose": 2155.0,
    "open": 2180.0,
    "high": 2275.0,
    "low": 2165.0,
    "volume": 2467,
    "ma5": 2188.0,
    "ma10": 2216.0,
    "ma20": 2135.75,
    "ma60": 2085.92,
    "vMa5": 3650,
    "vMa10": 3738,
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
      2195.0
    ],
    "high5d": 2300.0,
    "high10d": 2555.0
  },
  {
    "code": "4958",
    "name": "臻鼎-KY",
    "categories": [
      "0050",
      "Top100"
    ],
    "price": 473.0,
    "prevClose": 471.5,
    "open": 483.0,
    "high": 506.0,
    "low": 472.0,
    "volume": 38463,
    "ma5": 475.6,
    "ma10": 462.7,
    "ma20": 468.05,
    "ma60": 533.2,
    "vMa5": 37742,
    "vMa10": 36676,
    "high20d": 559.0,
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
      473.0
    ],
    "high5d": 506.0,
    "high10d": 506.0
  },
  {
    "code": "7769",
    "name": "鴻勁",
    "categories": [
      "0050"
    ],
    "price": 6750.0,
    "prevClose": 6480.0,
    "open": 6645.0,
    "high": 6845.0,
    "low": 6505.0,
    "volume": 1002,
    "ma5": 6436.0,
    "ma10": 6398.0,
    "ma20": 6206.75,
    "ma60": 6769.42,
    "vMa5": 569,
    "vMa10": 678,
    "high20d": 6845.0,
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
      6750.0
    ],
    "high5d": 6845.0,
    "high10d": 6845.0
  },
  {
    "code": "3653",
    "name": "健策",
    "categories": [
      "0050"
    ],
    "price": 4625.0,
    "prevClose": 4470.0,
    "open": 4500.0,
    "high": 4670.0,
    "low": 4415.0,
    "volume": 876,
    "ma5": 4335.0,
    "ma10": 4182.5,
    "ma20": 3786.75,
    "ma60": 3643.83,
    "vMa5": 1115,
    "vMa10": 1528,
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
      4625.0
    ],
    "high5d": 4670.0,
    "high10d": 4670.0
  },
  {
    "code": "2368",
    "name": "金像電",
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "price": 1015.0,
    "prevClose": 1000.0,
    "open": 1030.0,
    "high": 1045.0,
    "low": 994.0,
    "volume": 13442,
    "ma5": 977.4,
    "ma10": 937.4,
    "ma20": 907.2,
    "ma60": 1146.98,
    "vMa5": 14968,
    "vMa10": 12121,
    "high20d": 1045.0,
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
      1015.0
    ],
    "high5d": 1045.0,
    "high10d": 1045.0
  },
  {
    "code": "4904",
    "name": "遠傳",
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "price": 99.2,
    "prevClose": 101.0,
    "open": 102.0,
    "high": 102.0,
    "low": 99.1,
    "volume": 6536,
    "ma5": 101.14,
    "ma10": 101.82,
    "ma20": 103.21,
    "ma60": 102.24,
    "vMa5": 5102,
    "vMa10": 7618,
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
      99.2
    ],
    "high5d": 104.0,
    "high10d": 106.0
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
    "volume": 13810,
    "ma5": 109.9,
    "ma10": 110.6,
    "ma20": 111.7,
    "ma60": 114.05,
    "vMa5": 10296,
    "vMa10": 10392,
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
    "high10d": 114.5
  },
  {
    "code": "00403A",
    "name": "主動統一升級50",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 10.3,
    "prevClose": 9.94,
    "open": 10.26,
    "high": 10.38,
    "low": 10.22,
    "volume": 360240,
    "ma5": 9.95,
    "ma10": 9.62,
    "ma20": 9.59,
    "ma60": 10.26,
    "vMa5": 195022,
    "vMa10": 285016,
    "high20d": 10.38,
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
    "high10d": 10.38
  },
  {
    "code": "00685L",
    "name": "群益臺灣加權正2",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 11.91,
    "prevClose": 11.42,
    "open": 11.97,
    "high": 11.99,
    "low": 11.8,
    "volume": 211663,
    "ma5": 11.35,
    "ma10": 10.89,
    "ma20": 10.86,
    "ma60": 11.67,
    "vMa5": 218258,
    "vMa10": 318649,
    "high20d": 12.21,
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
    "high10d": 11.99
  },
  {
    "code": "00631L",
    "name": "元大台灣50正2",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 36.27,
    "prevClose": 34.87,
    "open": 36.47,
    "high": 36.5,
    "low": 35.99,
    "volume": 180136,
    "ma5": 34.67,
    "ma10": 33.44,
    "ma20": 33.31,
    "ma60": 35.47,
    "vMa5": 177978,
    "vMa10": 284434,
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
      36.27
    ],
    "high5d": 36.5,
    "high10d": 36.5
  },
  {
    "code": "2324",
    "name": "仁寶",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 39.25,
    "prevClose": 39.9,
    "open": 40.1,
    "high": 41.7,
    "low": 39.15,
    "volume": 201121,
    "ma5": 37.66,
    "ma10": 37.19,
    "ma20": 36.45,
    "ma60": 36.61,
    "vMa5": 91232,
    "vMa10": 69721,
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
      39.25
    ],
    "high5d": 41.7,
    "high10d": 41.7
  },
  {
    "code": "00981A",
    "name": "主動統一台股增長",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 29.97,
    "prevClose": 28.73,
    "open": 29.96,
    "high": 30.18,
    "low": 29.68,
    "volume": 198112,
    "ma5": 28.82,
    "ma10": 27.71,
    "ma20": 27.39,
    "ma60": 29.6,
    "vMa5": 165166,
    "vMa10": 313108,
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
      29.97
    ],
    "high5d": 30.18,
    "high10d": 30.18
  },
  {
    "code": "00632R",
    "name": "元大台灣50反1",
    "categories": [
      "Top100"
    ],
    "price": 9.95,
    "prevClose": 10.16,
    "open": 9.92,
    "high": 10.0,
    "low": 9.91,
    "volume": 146954,
    "ma5": 10.19,
    "ma10": 10.44,
    "ma20": 10.56,
    "ma60": 10.41,
    "vMa5": 146110,
    "vMa10": 239380,
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
    "high10d": 11.64
  },
  {
    "code": "2337",
    "name": "旺宏",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 136.5,
    "prevClose": 136.5,
    "open": 140.0,
    "high": 141.5,
    "low": 136.5,
    "volume": 80708,
    "ma5": 132.1,
    "ma10": 123.8,
    "ma20": 121.22,
    "ma60": 142.64,
    "vMa5": 114748,
    "vMa10": 104558,
    "high20d": 141.5,
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
    "high10d": 141.5
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
    "volume": 52534,
    "ma5": 38.03,
    "ma10": 35.72,
    "ma20": 33.79,
    "ma60": 35.95,
    "vMa5": 57257,
    "vMa10": 41106,
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
    "high10d": 41.0
  },
  {
    "code": "8150",
    "name": "南茂",
    "categories": [
      "Top100"
    ],
    "price": 93.3,
    "prevClose": 92.2,
    "open": 93.5,
    "high": 98.5,
    "low": 92.9,
    "volume": 68065,
    "ma5": 92.74,
    "ma10": 86.98,
    "ma20": 89.31,
    "ma60": 97.05,
    "vMa5": 64979,
    "vMa10": 49201,
    "high20d": 119.0,
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
      93.3
    ],
    "high5d": 99.4,
    "high10d": 99.4
  },
  {
    "code": "009816",
    "name": "凱基台灣TOP50",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 15.51,
    "prevClose": 15.16,
    "open": 15.49,
    "high": 15.56,
    "low": 15.42,
    "volume": 115901,
    "ma5": 15.13,
    "ma10": 14.79,
    "ma20": 14.66,
    "ma60": 15.02,
    "vMa5": 89697,
    "vMa10": 152070,
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
      15.51
    ],
    "high5d": 15.56,
    "high10d": 15.56
  },
  {
    "code": "00405A",
    "name": "主動富邦台灣龍耀",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 8.62,
    "prevClose": 8.15,
    "open": 8.6,
    "high": 8.67,
    "low": 8.52,
    "volume": 79653,
    "ma5": 8.23,
    "ma10": 7.88,
    "ma20": 7.84,
    "ma60": 8.79,
    "vMa5": 70623,
    "vMa10": 106384,
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
    "high10d": 8.67
  },
  {
    "code": "00991A",
    "name": "主動復華未來50",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 18.17,
    "prevClose": 17.52,
    "open": 18.16,
    "high": 18.34,
    "low": 18.03,
    "volume": 90506,
    "ma5": 17.41,
    "ma10": 16.57,
    "ma20": 16.54,
    "ma60": 18.57,
    "vMa5": 98004,
    "vMa10": 215625,
    "high20d": 18.81,
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
      18.17
    ],
    "high5d": 18.34,
    "high10d": 18.34
  },
  {
    "code": "00407A",
    "name": "主動凱基台灣",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 9.82,
    "prevClose": 9.55,
    "open": 9.85,
    "high": 9.92,
    "low": 9.76,
    "volume": 123047,
    "ma5": 9.52,
    "ma10": 9.09,
    "ma20": 8.92,
    "ma60": 9.34,
    "vMa5": 65998,
    "vMa10": 63272,
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
      9.82
    ],
    "high5d": 9.92,
    "high10d": 9.92
  },
  {
    "code": "0050",
    "name": "元大台灣50",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 106.7,
    "prevClose": 104.6,
    "open": 106.55,
    "high": 107.0,
    "low": 106.15,
    "volume": 84329,
    "ma5": 104.34,
    "ma10": 102.45,
    "ma20": 101.72,
    "ma60": 103.6,
    "vMa5": 73357,
    "vMa10": 141875,
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
    "high10d": 107.0
  },
  {
    "code": "2377",
    "name": "微星",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 168.5,
    "prevClose": 169.0,
    "open": 171.0,
    "high": 173.5,
    "low": 162.5,
    "volume": 48149,
    "ma5": 159.9,
    "ma10": 153.9,
    "ma20": 149.03,
    "ma60": 141.38,
    "vMa5": 23883,
    "vMa10": 20500,
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
      168.5
    ],
    "high5d": 173.5,
    "high10d": 173.5
  },
  {
    "code": "00878",
    "name": "國泰永續高股息",
    "categories": [
      "Top100"
    ],
    "price": 33.77,
    "prevClose": 33.47,
    "open": 33.9,
    "high": 33.95,
    "low": 33.69,
    "volume": 44240,
    "ma5": 33.26,
    "ma10": 32.78,
    "ma20": 32.45,
    "ma60": 32.26,
    "vMa5": 45834,
    "vMa10": 49345,
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
      33.77
    ],
    "high5d": 33.95,
    "high10d": 33.95
  },
  {
    "code": "1717",
    "name": "長興",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 78.3,
    "prevClose": 78.6,
    "open": 78.7,
    "high": 79.8,
    "low": 77.4,
    "volume": 26286,
    "ma5": 73.0,
    "ma10": 68.29,
    "ma20": 64.36,
    "ma60": 71.68,
    "vMa5": 21469,
    "vMa10": 15081,
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
      78.3
    ],
    "high5d": 79.8,
    "high10d": 79.8
  },
  {
    "code": "00400A",
    "name": "主動國泰動能高息",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 14.71,
    "prevClose": 14.0,
    "open": 14.68,
    "high": 14.8,
    "low": 14.59,
    "volume": 44187,
    "ma5": 14.06,
    "ma10": 13.56,
    "ma20": 13.39,
    "ma60": 14.15,
    "vMa5": 31773,
    "vMa10": 47713,
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
      14.71
    ],
    "high5d": 14.8,
    "high10d": 14.8
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
    "volume": 69654,
    "ma5": 10.51,
    "ma10": 10.11,
    "ma20": 10.67,
    "ma60": 10.56,
    "vMa5": 38386,
    "vMa10": 43475,
    "high20d": 14.1,
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
    "high10d": 11.45
  },
  {
    "code": "00406A",
    "name": "主動中信台灣收益",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 9.7,
    "prevClose": 9.4,
    "open": 9.69,
    "high": 9.75,
    "low": 9.62,
    "volume": 43400,
    "ma5": 9.41,
    "ma10": 9.08,
    "ma20": 9.05,
    "ma60": 9.64,
    "vMa5": 39910,
    "vMa10": 67007,
    "high20d": 9.8,
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
      9.7
    ],
    "high5d": 9.75,
    "high10d": 9.75
  },
  {
    "code": "00919",
    "name": "群益台灣精選高息",
    "categories": [
      "Top100"
    ],
    "price": 30.4,
    "prevClose": 30.12,
    "open": 30.46,
    "high": 30.52,
    "low": 30.32,
    "volume": 46379,
    "ma5": 29.98,
    "ma10": 29.66,
    "ma20": 29.4,
    "ma60": 29.51,
    "vMa5": 45946,
    "vMa10": 56576,
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
      30.4
    ],
    "high5d": 30.52,
    "high10d": 30.52
  },
  {
    "code": "1802",
    "name": "台玻",
    "categories": [
      "Top100"
    ],
    "price": 57.3,
    "prevClose": 57.6,
    "open": 58.6,
    "high": 59.0,
    "low": 56.9,
    "volume": 17223,
    "ma5": 55.72,
    "ma10": 53.26,
    "ma20": 52.24,
    "ma60": 62.75,
    "vMa5": 25832,
    "vMa10": 30050,
    "high20d": 59.8,
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
      57.3
    ],
    "high5d": 59.8,
    "high10d": 59.8
  },
  {
    "code": "8112",
    "name": "至上",
    "categories": [
      "Top100"
    ],
    "price": 97.9,
    "prevClose": 96.9,
    "open": 98.5,
    "high": 100.5,
    "low": 97.6,
    "volume": 21318,
    "ma5": 95.68,
    "ma10": 90.05,
    "ma20": 86.43,
    "ma60": 89.38,
    "vMa5": 33707,
    "vMa10": 24491,
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
      97.9
    ],
    "high5d": 101.5,
    "high10d": 101.5
  },
  {
    "code": "0056",
    "name": "元大高股息",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 52.95,
    "prevClose": 52.3,
    "open": 53.4,
    "high": 53.5,
    "low": 52.9,
    "volume": 42927,
    "ma5": 52.01,
    "ma10": 50.77,
    "ma20": 50.37,
    "ma60": 50.98,
    "vMa5": 33742,
    "vMa10": 46446,
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
      52.95
    ],
    "high5d": 53.5,
    "high10d": 53.5
  },
  {
    "code": "00988A",
    "name": "主動統一全球創新",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 17.65,
    "prevClose": 16.55,
    "open": 17.47,
    "high": 17.68,
    "low": 17.38,
    "volume": 56644,
    "ma5": 16.77,
    "ma10": 16.38,
    "ma20": 16.57,
    "ma60": 19.65,
    "vMa5": 43753,
    "vMa10": 53138,
    "high20d": 18.33,
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
      17.65
    ],
    "high5d": 17.68,
    "high10d": 17.68
  },
  {
    "code": "00881",
    "name": "國泰台灣科技龍頭",
    "categories": [
      "Top100"
    ],
    "price": 54.9,
    "prevClose": 53.5,
    "open": 55.3,
    "high": 55.4,
    "low": 54.7,
    "volume": 48815,
    "ma5": 53.32,
    "ma10": 51.76,
    "ma20": 51.06,
    "ma60": 52.99,
    "vMa5": 38287,
    "vMa10": 34688,
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
      54.9
    ],
    "high5d": 55.4,
    "high10d": 55.4
  },
  {
    "code": "00992A",
    "name": "主動群益科技創新",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 17.74,
    "prevClose": 16.96,
    "open": 17.7,
    "high": 17.86,
    "low": 17.6,
    "volume": 43366,
    "ma5": 17.03,
    "ma10": 16.18,
    "ma20": 15.83,
    "ma60": 17.42,
    "vMa5": 38014,
    "vMa10": 54831,
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
      17.74
    ],
    "high5d": 17.86,
    "high10d": 17.86
  },
  {
    "code": "8039",
    "name": "台虹",
    "categories": [
      "Top100"
    ],
    "price": 249.5,
    "prevClose": 227.0,
    "open": 228.0,
    "high": 249.5,
    "low": 227.5,
    "volume": 22706,
    "ma5": 231.2,
    "ma10": 215.6,
    "ma20": 211.32,
    "ma60": 170.33,
    "vMa5": 23474,
    "vMa10": 23533,
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
    "high10d": 254.0
  },
  {
    "code": "2464",
    "name": "盟立",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 195.5,
    "prevClose": 196.5,
    "open": 198.0,
    "high": 200.5,
    "low": 192.0,
    "volume": 15398,
    "ma5": 186.6,
    "ma10": 172.5,
    "ma20": 155.38,
    "ma60": 162.29,
    "vMa5": 22607,
    "vMa10": 17764,
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
      195.5
    ],
    "high5d": 205.0,
    "high10d": 205.0
  },
  {
    "code": "5904",
    "name": "寶雅*",
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "price": 81.7,
    "prevClose": 82.5,
    "open": 81.5,
    "high": 84.0,
    "low": 77.6,
    "volume": 27197,
    "ma5": 80.5,
    "ma10": 76.25,
    "ma20": 70.94,
    "ma60": 65.78,
    "vMa5": 27413,
    "vMa10": 13707,
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
      81.7
    ],
    "high5d": 92.3,
    "high10d": 92.3
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
    "volume": 31934,
    "ma5": 100.8,
    "ma10": 99.0,
    "ma20": 108.66,
    "ma60": 114.4,
    "vMa5": 38359,
    "vMa10": 24446,
    "high20d": 156.5,
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
    "high10d": 113.0
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
    "volume": 38989,
    "ma5": 14.59,
    "ma10": 14.62,
    "ma20": 14.66,
    "ma60": 14.82,
    "vMa5": 45844,
    "vMa10": 36551,
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
    "high10d": 14.76
  },
  {
    "code": "3105",
    "name": "穩懋",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 383.5,
    "prevClose": 400.0,
    "open": 406.5,
    "high": 417.5,
    "low": 383.0,
    "volume": 36998,
    "ma5": 381.2,
    "ma10": 361.15,
    "ma20": 344.95,
    "ma60": 428.82,
    "vMa5": 26468,
    "vMa10": 22758,
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
      383.5
    ],
    "high5d": 417.5,
    "high10d": 417.5
  },
  {
    "code": "6147",
    "name": "頎邦",
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "price": 165.5,
    "prevClose": 156.5,
    "open": 159.0,
    "high": 171.0,
    "low": 159.0,
    "volume": 29587,
    "ma5": 156.8,
    "ma10": 150.35,
    "ma20": 154.07,
    "ma60": 208.41,
    "vMa5": 25144,
    "vMa10": 26681,
    "high20d": 190.0,
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
      165.5
    ],
    "high5d": 171.0,
    "high10d": 171.0
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
    "volume": 36570,
    "ma5": 187.7,
    "ma10": 174.45,
    "ma20": 171.9,
    "ma60": 231.72,
    "vMa5": 18298,
    "vMa10": 11653,
    "high20d": 223.5,
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
    "high10d": 223.5
  },
  {
    "code": "8043",
    "name": "蜜望實",
    "categories": [
      "Top100"
    ],
    "price": 155.0,
    "prevClose": 147.5,
    "open": 151.0,
    "high": 162.0,
    "low": 151.0,
    "volume": 13047,
    "ma5": 142.1,
    "ma10": 138.4,
    "ma20": 137.3,
    "ma60": 162.18,
    "vMa5": 10306,
    "vMa10": 7534,
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
      155.0
    ],
    "high5d": 162.0,
    "high10d": 162.0
  },
  {
    "code": "5328",
    "name": "華容",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 68.7,
    "prevClose": 67.2,
    "open": 67.2,
    "high": 73.0,
    "low": 67.2,
    "volume": 34190,
    "ma5": 65.04,
    "ma10": 65.16,
    "ma20": 63.64,
    "ma60": 57.53,
    "vMa5": 20837,
    "vMa10": 22740,
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
      68.7
    ],
    "high5d": 73.0,
    "high10d": 73.0
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
    "volume": 10479,
    "ma5": 111.1,
    "ma10": 109.89,
    "ma20": 106.99,
    "ma60": 130.34,
    "vMa5": 9346,
    "vMa10": 8351,
    "high20d": 119.5,
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
    "high10d": 119.5
  },
  {
    "code": "4979",
    "name": "華星光",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 567.0,
    "prevClose": 561.0,
    "open": 579.0,
    "high": 615.0,
    "low": 562.0,
    "volume": 25457,
    "ma5": 532.4,
    "ma10": 486.65,
    "ma20": 436.95,
    "ma60": 494.61,
    "vMa5": 14816,
    "vMa10": 9225,
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
      567.0
    ],
    "high5d": 615.0,
    "high10d": 615.0
  },
  {
    "code": "5347",
    "name": "世界",
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "price": 164.0,
    "prevClose": 159.5,
    "open": 163.0,
    "high": 166.0,
    "low": 162.0,
    "volume": 17805,
    "ma5": 156.5,
    "ma10": 154.8,
    "ma20": 154.85,
    "ma60": 170.2,
    "vMa5": 21506,
    "vMa10": 26903,
    "high20d": 177.0,
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
      164.0
    ],
    "high5d": 166.0,
    "high10d": 168.0
  },
  {
    "code": "4931",
    "name": "新盛力",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 262.0,
    "prevClose": 267.0,
    "open": 271.0,
    "high": 271.5,
    "low": 261.5,
    "volume": 2161,
    "ma5": 247.7,
    "ma10": 222.05,
    "ma20": 209.0,
    "ma60": 230.48,
    "vMa5": 11630,
    "vMa10": 7769,
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
      262.0
    ],
    "high5d": 271.5,
    "high10d": 271.5
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
    "volume": 24305,
    "ma5": 139.0,
    "ma10": 130.95,
    "ma20": 133.0,
    "ma60": 210.19,
    "vMa5": 13084,
    "vMa10": 8621,
    "high20d": 173.0,
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
    "high10d": 163.0
  },
  {
    "code": "3211",
    "name": "順達",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 409.0,
    "prevClose": 412.0,
    "open": 417.0,
    "high": 419.0,
    "low": 405.0,
    "volume": 8733,
    "ma5": 385.9,
    "ma10": 353.65,
    "ma20": 356.4,
    "ma60": 401.48,
    "vMa5": 13319,
    "vMa10": 10623,
    "high20d": 419.0,
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
      409.0
    ],
    "high5d": 419.0,
    "high10d": 419.0
  },
  {
    "code": "00981B",
    "name": "第一金優選非投債",
    "categories": [
      "Top100"
    ],
    "price": 9.34,
    "prevClose": 9.33,
    "open": 9.34,
    "high": 9.34,
    "low": 9.32,
    "volume": 7208,
    "ma5": 9.33,
    "ma10": 9.33,
    "ma20": 9.31,
    "ma60": 9.24,
    "vMa5": 9417,
    "vMa10": 11623,
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
      9.34
    ],
    "high5d": 9.35,
    "high10d": 9.36
  },
  {
    "code": "4991",
    "name": "環宇-KY",
    "categories": [
      "Top100"
    ],
    "price": 479.0,
    "prevClose": 484.5,
    "open": 503.0,
    "high": 512.0,
    "low": 478.0,
    "volume": 7611,
    "ma5": 484.1,
    "ma10": 449.9,
    "ma20": 418.5,
    "ma60": 532.1,
    "vMa5": 6564,
    "vMa10": 3788,
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
      479.0
    ],
    "high5d": 522.0,
    "high10d": 522.0
  },
  {
    "code": "8358",
    "name": "金居",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 423.0,
    "prevClose": 418.5,
    "open": 445.0,
    "high": 445.0,
    "low": 417.0,
    "volume": 45706,
    "ma5": 384.0,
    "ma10": 362.0,
    "ma20": 362.35,
    "ma60": 503.52,
    "vMa5": 30197,
    "vMa10": 23354,
    "high20d": 445.0,
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
      423.0
    ],
    "high5d": 445.0,
    "high10d": 445.0
  },
  {
    "code": "3441",
    "name": "聯一光",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 86.2,
    "prevClose": 87.2,
    "open": 87.4,
    "high": 88.7,
    "low": 85.0,
    "volume": 10350,
    "ma5": 83.32,
    "ma10": 85.64,
    "ma20": 77.9,
    "ma60": 72.05,
    "vMa5": 10320,
    "vMa10": 18613,
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
      86.2
    ],
    "high5d": 94.3,
    "high10d": 95.8
  },
  {
    "code": "3374",
    "name": "精材",
    "categories": [
      "Top100"
    ],
    "price": 327.5,
    "prevClose": 330.0,
    "open": 333.5,
    "high": 341.0,
    "low": 324.5,
    "volume": 12487,
    "ma5": 327.0,
    "ma10": 315.5,
    "ma20": 330.6,
    "ma60": 299.18,
    "vMa5": 11999,
    "vMa10": 11257,
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
      327.5
    ],
    "high5d": 351.5,
    "high10d": 351.5
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
    "volume": 5282,
    "ma5": 10.06,
    "ma10": 9.98,
    "ma20": 9.87,
    "ma60": 9.92,
    "vMa5": 5171,
    "vMa10": 4277,
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
    "high10d": 10.1
  },
  {
    "code": "8069",
    "name": "元太",
    "categories": [
      "Top100"
    ],
    "price": 172.5,
    "prevClose": 166.0,
    "open": 167.5,
    "high": 173.0,
    "low": 164.0,
    "volume": 11711,
    "ma5": 175.2,
    "ma10": 184.3,
    "ma20": 184.45,
    "ma60": 199.99,
    "vMa5": 13824,
    "vMa10": 11957,
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
      172.5
    ],
    "high5d": 208.5,
    "high10d": 208.5
  },
  {
    "code": "5351",
    "name": "鈺創",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 128.5,
    "prevClose": 122.0,
    "open": 127.0,
    "high": 130.0,
    "low": 123.0,
    "volume": 7970,
    "ma5": 117.6,
    "ma10": 102.79,
    "ma20": 92.29,
    "ma60": 90.24,
    "vMa5": 26841,
    "vMa10": 23544,
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
      128.5
    ],
    "high5d": 130.0,
    "high10d": 130.0
  },
  {
    "code": "00687B",
    "name": "國泰20年美債",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 27.41,
    "prevClose": 27.46,
    "open": 27.43,
    "high": 27.43,
    "low": 27.39,
    "volume": 7850,
    "ma5": 27.46,
    "ma10": 27.56,
    "ma20": 27.74,
    "ma60": 27.86,
    "vMa5": 9258,
    "vMa10": 15355,
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
      27.41
    ],
    "high5d": 27.58,
    "high10d": 27.82
  },
  {
    "code": "3264",
    "name": "欣銓",
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "price": 233.0,
    "prevClose": 216.5,
    "open": 222.5,
    "high": 238.0,
    "low": 220.0,
    "volume": 15728,
    "ma5": 219.8,
    "ma10": 207.05,
    "ma20": 202.8,
    "ma60": 219.64,
    "vMa5": 11681,
    "vMa10": 8678,
    "high20d": 238.0,
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
      233.0
    ],
    "high5d": 238.0,
    "high10d": 238.0
  },
  {
    "code": "6265",
    "name": "方土昶",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 59.0,
    "prevClose": 56.8,
    "open": 57.2,
    "high": 59.9,
    "low": 57.0,
    "volume": 8438,
    "ma5": 56.62,
    "ma10": 52.56,
    "ma20": 48.97,
    "ma60": 52.63,
    "vMa5": 7006,
    "vMa10": 5561,
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
      59.0
    ],
    "high5d": 59.9,
    "high10d": 59.9
  },
  {
    "code": "00679B",
    "name": "元大美債20年",
    "categories": [
      "Top100"
    ],
    "price": 26.34,
    "prevClose": 26.39,
    "open": 26.36,
    "high": 26.36,
    "low": 26.32,
    "volume": 13166,
    "ma5": 26.39,
    "ma10": 26.48,
    "ma20": 26.66,
    "ma60": 26.71,
    "vMa5": 13391,
    "vMa10": 19181,
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
      26.34
    ],
    "high5d": 26.5,
    "high10d": 26.73
  },
  {
    "code": "5340",
    "name": "建榮",
    "categories": [
      "Top100"
    ],
    "price": 79.4,
    "prevClose": 79.6,
    "open": 78.5,
    "high": 82.5,
    "low": 77.3,
    "volume": 4769,
    "ma5": 75.26,
    "ma10": 71.94,
    "ma20": 69.59,
    "ma60": 84.86,
    "vMa5": 4073,
    "vMa10": 3682,
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
      79.4
    ],
    "high5d": 82.5,
    "high10d": 82.5
  },
  {
    "code": "8050",
    "name": "廣積",
    "categories": [
      "Top100"
    ],
    "price": 58.9,
    "prevClose": 58.8,
    "open": 58.9,
    "high": 59.4,
    "low": 58.2,
    "volume": 2779,
    "ma5": 63.34,
    "ma10": 61.63,
    "ma20": 60.44,
    "ma60": 57.95,
    "vMa5": 9906,
    "vMa10": 7790,
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
      58.9
    ],
    "high5d": 69.4,
    "high10d": 69.4
  },
  {
    "code": "3163",
    "name": "波若威",
    "categories": [
      "Top100"
    ],
    "price": 716.0,
    "prevClose": 718.0,
    "open": 740.0,
    "high": 740.0,
    "low": 715.0,
    "volume": 1520,
    "ma5": 698.8,
    "ma10": 672.5,
    "ma20": 623.93,
    "ma60": 714.49,
    "vMa5": 5085,
    "vMa10": 4828,
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
      716.0
    ],
    "high5d": 745.0,
    "high10d": 757.0
  },
  {
    "code": "00989B",
    "name": "台新美國非投等債",
    "categories": [
      "Top100"
    ],
    "price": 10.31,
    "prevClose": 10.29,
    "open": 10.3,
    "high": 10.32,
    "low": 10.3,
    "volume": 4438,
    "ma5": 10.29,
    "ma10": 10.28,
    "ma20": 10.25,
    "ma60": 10.16,
    "vMa5": 5474,
    "vMa10": 4458,
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
      10.31
    ],
    "high5d": 10.32,
    "high10d": 10.32
  },
  {
    "code": "6016",
    "name": "康和證",
    "categories": [
      "Top100"
    ],
    "price": 20.0,
    "prevClose": 19.85,
    "open": 20.1,
    "high": 20.6,
    "low": 19.85,
    "volume": 4240,
    "ma5": 19.34,
    "ma10": 19.92,
    "ma20": 20.46,
    "ma60": 23.58,
    "vMa5": 6297,
    "vMa10": 4837,
    "high20d": 22.36,
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
      20.0
    ],
    "high5d": 20.6,
    "high10d": 21.25
  },
  {
    "code": "00933B",
    "name": "國泰10Y+金融債",
    "categories": [
      "Top100"
    ],
    "price": 15.89,
    "prevClose": 15.91,
    "open": 15.91,
    "high": 15.94,
    "low": 15.88,
    "volume": 7952,
    "ma5": 15.93,
    "ma10": 15.96,
    "ma20": 15.99,
    "ma60": 16.04,
    "vMa5": 8298,
    "vMa10": 7260,
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
      15.89
    ],
    "high5d": 15.99,
    "high10d": 16.09
  },
  {
    "code": "4707",
    "name": "磐亞",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 32.55,
    "prevClose": 33.0,
    "open": 34.0,
    "high": 34.95,
    "low": 32.4,
    "volume": 8516,
    "ma5": 31.88,
    "ma10": 30.08,
    "ma20": 31.15,
    "ma60": 27.19,
    "vMa5": 6710,
    "vMa10": 6814,
    "high20d": 42.0,
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
      32.55
    ],
    "high5d": 34.95,
    "high10d": 34.95
  },
  {
    "code": "4541",
    "name": "晟田",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 73.1,
    "prevClose": 70.3,
    "open": 70.6,
    "high": 73.7,
    "low": 70.3,
    "volume": 4718,
    "ma5": 68.2,
    "ma10": 65.4,
    "ma20": 66.48,
    "ma60": 56.95,
    "vMa5": 4066,
    "vMa10": 4010,
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
      73.1
    ],
    "high5d": 73.7,
    "high10d": 73.7
  },
  {
    "code": "6603",
    "name": "富強鑫",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 28.75,
    "prevClose": 27.7,
    "open": 28.35,
    "high": 29.3,
    "low": 28.0,
    "volume": 4553,
    "ma5": 27.24,
    "ma10": 26.71,
    "ma20": 25.72,
    "ma60": 24.51,
    "vMa5": 3332,
    "vMa10": 2658,
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
      28.75
    ],
    "high5d": 29.4,
    "high10d": 29.4
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
    "volume": 5419,
    "ma5": 85.8,
    "ma10": 83.78,
    "ma20": 81.95,
    "ma60": 79.94,
    "vMa5": 9000,
    "vMa10": 10950,
    "high20d": 92.0,
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
    "high10d": 90.8
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
    "volume": 7545,
    "ma5": 115.3,
    "ma10": 111.67,
    "ma20": 113.0,
    "ma60": 149.12,
    "vMa5": 7998,
    "vMa10": 5807,
    "high20d": 135.5,
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
    "high10d": 125.0
  },
  {
    "code": "00888",
    "name": "永豐台灣ESG",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 33.3,
    "prevClose": 32.61,
    "open": 33.31,
    "high": 33.64,
    "low": 33.16,
    "volume": 12076,
    "ma5": 32.57,
    "ma10": 32.11,
    "ma20": 32.36,
    "ma60": 34.62,
    "vMa5": 7072,
    "vMa10": 9162,
    "high20d": 36.01,
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
      33.3
    ],
    "high5d": 33.64,
    "high10d": 33.64
  },
  {
    "code": "1815",
    "name": "富喬",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 90.0,
    "prevClose": 90.0,
    "open": 91.5,
    "high": 91.5,
    "low": 89.0,
    "volume": 3685,
    "ma5": 88.74,
    "ma10": 83.37,
    "ma20": 78.56,
    "ma60": 92.99,
    "vMa5": 18814,
    "vMa10": 21721,
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
      90.0
    ],
    "high5d": 93.9,
    "high10d": 93.9
  },
  {
    "code": "4716",
    "name": "大立",
    "categories": [
      "Top100"
    ],
    "price": 17.45,
    "prevClose": 17.4,
    "open": 17.55,
    "high": 17.9,
    "low": 17.3,
    "volume": 1101,
    "ma5": 17.54,
    "ma10": 17.24,
    "ma20": 17.49,
    "ma60": 18.63,
    "vMa5": 2443,
    "vMa10": 1596,
    "high20d": 19.75,
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
      17.45
    ],
    "high5d": 19.25,
    "high10d": 19.25
  },
  {
    "code": "00950B",
    "name": "凱基A級公司債",
    "categories": [
      "Top100"
    ],
    "price": 13.85,
    "prevClose": 13.85,
    "open": 13.88,
    "high": 13.88,
    "low": 13.84,
    "volume": 1762,
    "ma5": 13.88,
    "ma10": 13.93,
    "ma20": 14.0,
    "ma60": 14.07,
    "vMa5": 3997,
    "vMa10": 3954,
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
    "high10d": 14.05
  },
  {
    "code": "5425",
    "name": "台半",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 89.0,
    "prevClose": 86.7,
    "open": 89.2,
    "high": 93.2,
    "low": 88.4,
    "volume": 14013,
    "ma5": 85.7,
    "ma10": 83.2,
    "ma20": 83.1,
    "ma60": 102.25,
    "vMa5": 7817,
    "vMa10": 8450,
    "high20d": 99.5,
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
      89.0
    ],
    "high5d": 93.2,
    "high10d": 93.2
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
    "volume": 7631,
    "ma5": 84.76,
    "ma10": 76.91,
    "ma20": 79.21,
    "ma60": 111.08,
    "vMa5": 6334,
    "vMa10": 3969,
    "high20d": 105.0,
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
    "high10d": 95.1
  },
  {
    "code": "5864",
    "name": "致和證",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 33.8,
    "prevClose": 33.45,
    "open": 33.6,
    "high": 34.35,
    "low": 33.5,
    "volume": 4683,
    "ma5": 31.21,
    "ma10": 30.78,
    "ma20": 31.29,
    "ma60": 37.29,
    "vMa5": 3819,
    "vMa10": 4262,
    "high20d": 34.95,
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
      33.8
    ],
    "high5d": 34.35,
    "high10d": 34.35
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
    "volume": 13361,
    "ma5": 61.7,
    "ma10": 59.22,
    "ma20": 60.35,
    "ma60": 58.61,
    "vMa5": 11466,
    "vMa10": 12399,
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
    "high10d": 67.2
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
    "volume": 7956,
    "ma5": 124.2,
    "ma10": 115.92,
    "ma20": 108.03,
    "ma60": 117.43,
    "vMa5": 3891,
    "vMa10": 2722,
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
    "high10d": 146.0
  },
  {
    "code": "4938",
    "name": "和碩",
    "categories": [
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 94.2,
    "prevClose": 91.4,
    "open": 93.6,
    "high": 100.5,
    "low": 93.5,
    "volume": 63775,
    "ma5": 90.24,
    "ma10": 88.81,
    "ma20": 86.31,
    "ma60": 86.04,
    "vMa5": 20606,
    "vMa10": 16681,
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
      94.2
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
    "volume": 3247,
    "ma5": 46.28,
    "ma10": 45.45,
    "ma20": 44.34,
    "ma60": 47.87,
    "vMa5": 4040,
    "vMa10": 4280,
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
    ]
  },
  {
    "code": "3450",
    "name": "聯鈞",
    "categories": [
      "SitcaBuy"
    ],
    "price": 526.0,
    "prevClose": 507.0,
    "open": 525.0,
    "high": 543.0,
    "low": 499.5,
    "volume": 2259,
    "ma5": 501.5,
    "ma10": 468.7,
    "ma20": 442.05,
    "ma60": 487.75,
    "vMa5": 7510,
    "vMa10": 9567,
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
      526.0
    ]
  },
  {
    "code": "6805",
    "name": "富世達",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1845.0,
    "prevClose": 1835.0,
    "open": 1850.0,
    "high": 1915.0,
    "low": 1825.0,
    "volume": 1934,
    "ma5": 1779.0,
    "ma10": 1666.5,
    "ma20": 1514.0,
    "ma60": 1654.75,
    "vMa5": 2481,
    "vMa10": 2201,
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
      1845.0
    ]
  },
  {
    "code": "00980A",
    "name": "主動野村臺灣優選",
    "categories": [
      "SitcaBuy"
    ],
    "price": 25.14,
    "prevClose": 24.29,
    "open": 25.18,
    "high": 25.3,
    "low": 25.02,
    "volume": 23032,
    "ma5": 24.16,
    "ma10": 22.99,
    "ma20": 22.44,
    "ma60": 23.56,
    "vMa5": 15585,
    "vMa10": 23467,
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
      25.14
    ]
  },
  {
    "code": "2542",
    "name": "興富發",
    "categories": [
      "SitcaBuy"
    ],
    "price": 46.15,
    "prevClose": 44.8,
    "open": 45.0,
    "high": 46.3,
    "low": 44.9,
    "volume": 14512,
    "ma5": 44.83,
    "ma10": 44.43,
    "ma20": 44.15,
    "ma60": 43.67,
    "vMa5": 6903,
    "vMa10": 6267,
    "high5d": 46.3,
    "high10d": 46.3,
    "high20d": 46.3,
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
      46.15
    ]
  },
  {
    "code": "2633",
    "name": "台灣高鐵",
    "categories": [
      "SitcaBuy"
    ],
    "price": 25.9,
    "prevClose": 25.8,
    "open": 25.85,
    "high": 25.95,
    "low": 25.7,
    "volume": 3912,
    "ma5": 25.82,
    "ma10": 25.85,
    "ma20": 25.94,
    "ma60": 25.9,
    "vMa5": 4288,
    "vMa10": 4940,
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
      25.9
    ]
  },
  {
    "code": "3044",
    "name": "健鼎",
    "categories": [
      "SitcaBuy"
    ],
    "price": 491.0,
    "prevClose": 485.5,
    "open": 502.0,
    "high": 524.0,
    "low": 485.5,
    "volume": 13348,
    "ma5": 442.7,
    "ma10": 414.45,
    "ma20": 399.12,
    "ma60": 466.15,
    "vMa5": 5742,
    "vMa10": 4557,
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
      491.0
    ]
  },
  {
    "code": "4915",
    "name": "致伸",
    "categories": [
      "SitcaBuy"
    ],
    "price": 60.4,
    "prevClose": 60.4,
    "open": 61.0,
    "high": 61.0,
    "low": 60.3,
    "volume": 2598,
    "ma5": 60.2,
    "ma10": 62.02,
    "ma20": 63.44,
    "ma60": 69.3,
    "vMa5": 3960,
    "vMa10": 4057,
    "high5d": 61.9,
    "high10d": 66.5,
    "high20d": 67.0,
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
      60.4
    ]
  },
  {
    "code": "4551",
    "name": "智伸科",
    "categories": [
      "SitcaBuy"
    ],
    "price": 174.5,
    "prevClose": 172.5,
    "open": 174.0,
    "high": 182.0,
    "low": 174.0,
    "volume": 3043,
    "ma5": 169.1,
    "ma10": 166.7,
    "ma20": 171.45,
    "ma60": 186.47,
    "vMa5": 1939,
    "vMa10": 1281,
    "high5d": 182.0,
    "high10d": 182.0,
    "high20d": 196.5,
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
      174.5
    ]
  },
  {
    "code": "8996",
    "name": "高力",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1285.0,
    "prevClose": 1170.0,
    "open": 1235.0,
    "high": 1285.0,
    "low": 1195.0,
    "volume": 3895,
    "ma5": 1128.0,
    "ma10": 1063.5,
    "ma20": 1015.1,
    "ma60": 1191.03,
    "vMa5": 2875,
    "vMa10": 3007,
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
    ]
  },
  {
    "code": "2903",
    "name": "遠百",
    "categories": [
      "SitcaBuy"
    ],
    "price": 21.6,
    "prevClose": 22.0,
    "open": 21.9,
    "high": 21.9,
    "low": 21.55,
    "volume": 6361,
    "ma5": 21.91,
    "ma10": 22.0,
    "ma20": 22.15,
    "ma60": 22.53,
    "vMa5": 2027,
    "vMa10": 1920,
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
      21.6
    ]
  },
  {
    "code": "6139",
    "name": "亞翔",
    "categories": [
      "SitcaBuy"
    ],
    "price": 806.0,
    "prevClose": 811.0,
    "open": 824.0,
    "high": 831.0,
    "low": 806.0,
    "volume": 2480,
    "ma5": 807.8,
    "ma10": 793.3,
    "ma20": 782.2,
    "ma60": 816.5,
    "vMa5": 3240,
    "vMa10": 3490,
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
      806.0
    ]
  },
  {
    "code": "2481",
    "name": "強茂",
    "categories": [
      "SitcaBuy"
    ],
    "price": 144.0,
    "prevClose": 139.0,
    "open": 140.5,
    "high": 152.5,
    "low": 140.0,
    "volume": 33867,
    "ma5": 139.0,
    "ma10": 134.45,
    "ma20": 135.1,
    "ma60": 157.98,
    "vMa5": 20392,
    "vMa10": 21767,
    "high5d": 152.5,
    "high10d": 152.5,
    "high20d": 159.5,
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
      144.0
    ]
  },
  {
    "code": "2027",
    "name": "大成鋼",
    "categories": [
      "SitcaBuy"
    ],
    "price": 50.1,
    "prevClose": 46.85,
    "open": 48.5,
    "high": 51.5,
    "low": 48.0,
    "volume": 54980,
    "ma5": 47.46,
    "ma10": 45.96,
    "ma20": 44.36,
    "ma60": 42.53,
    "vMa5": 22992,
    "vMa10": 22029,
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
      50.1
    ]
  },
  {
    "code": "3090",
    "name": "日電貿",
    "categories": [
      "SitcaBuy"
    ],
    "price": 175.5,
    "prevClose": 170.5,
    "open": 173.5,
    "high": 187.0,
    "low": 173.5,
    "volume": 20129,
    "ma5": 166.4,
    "ma10": 154.05,
    "ma20": 157.07,
    "ma60": 228.7,
    "vMa5": 18559,
    "vMa10": 14598,
    "high5d": 187.0,
    "high10d": 187.0,
    "high20d": 210.0,
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
      175.5
    ]
  },
  {
    "code": "2347",
    "name": "聯強",
    "categories": [
      "SitcaBuy"
    ],
    "price": 91.0,
    "prevClose": 91.6,
    "open": 91.6,
    "high": 92.3,
    "low": 91.0,
    "volume": 2411,
    "ma5": 91.78,
    "ma10": 92.99,
    "ma20": 89.76,
    "ma60": 89.57,
    "vMa5": 4357,
    "vMa10": 5109,
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
      91.0
    ]
  },
  {
    "code": "009814",
    "name": "富邦標普500",
    "categories": [
      "SitcaBuy"
    ],
    "price": 11.58,
    "prevClose": 11.57,
    "open": 11.57,
    "high": 11.59,
    "low": 11.57,
    "volume": 970,
    "ma5": 11.58,
    "ma10": 11.51,
    "ma20": 11.34,
    "ma60": 11.14,
    "vMa5": 1095,
    "vMa10": 840,
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
      11.58
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
    "volume": 72,
    "ma5": 35.24,
    "ma10": 35.32,
    "ma20": 35.38,
    "ma60": 35.28,
    "vMa5": 326,
    "vMa10": 313,
    "high5d": 35.35,
    "high10d": 35.5,
    "high20d": 35.6,
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
    ]
  },
  {
    "code": "3081",
    "name": "聯亞",
    "categories": [
      "SitcaBuy"
    ],
    "price": 2645.0,
    "prevClose": 2725.0,
    "open": 2840.0,
    "high": 2845.0,
    "low": 2640.0,
    "volume": 1712,
    "ma5": 2538.0,
    "ma10": 2261.0,
    "ma20": 1941.75,
    "ma60": 2047.21,
    "vMa5": 2536,
    "vMa10": 1896,
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
      2645.0
    ]
  },
  {
    "code": "6510",
    "name": "精測",
    "categories": [
      "SitcaBuy"
    ],
    "price": 2815.0,
    "prevClose": 2825.0,
    "open": 2895.0,
    "high": 2925.0,
    "low": 2810.0,
    "volume": 396,
    "ma5": 2796.0,
    "ma10": 2751.5,
    "ma20": 2657.5,
    "ma60": 3051.25,
    "vMa5": 458,
    "vMa10": 524,
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
      2815.0
    ]
  },
  {
    "code": "3529",
    "name": "力旺",
    "categories": [
      "SitcaBuy"
    ],
    "price": 2710.0,
    "prevClose": 2660.0,
    "open": 2675.0,
    "high": 2800.0,
    "low": 2630.0,
    "volume": 952,
    "ma5": 2718.0,
    "ma10": 2632.0,
    "ma20": 2495.75,
    "ma60": 2896.25,
    "vMa5": 904,
    "vMa10": 1067,
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
      2710.0
    ]
  },
  {
    "code": "5274",
    "name": "信驊",
    "categories": [
      "SitcaBuy"
    ],
    "price": 17405.0,
    "prevClose": 17370.0,
    "open": 17920.0,
    "high": 18085.0,
    "low": 17010.0,
    "volume": 311,
    "ma5": 16820.0,
    "ma10": 16287.0,
    "ma20": 15132.75,
    "ma60": 15446.27,
    "vMa5": 212,
    "vMa10": 222,
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
      17405.0
    ]
  },
  {
    "code": "4749",
    "name": "新應材",
    "categories": [
      "SitcaBuy"
    ],
    "price": 799.0,
    "prevClose": 809.0,
    "open": 824.0,
    "high": 824.0,
    "low": 795.0,
    "volume": 493,
    "ma5": 801.2,
    "ma10": 788.8,
    "ma20": 777.05,
    "ma60": 900.7,
    "vMa5": 645,
    "vMa10": 749,
    "high5d": 828.0,
    "high10d": 832.0,
    "high20d": 850.0,
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
      799.0
    ]
  },
  {
    "code": "00980D",
    "name": "主動聯博投等入息",
    "categories": [
      "SitcaBuy"
    ],
    "price": 20.42,
    "prevClose": 20.42,
    "open": 20.43,
    "high": 20.45,
    "low": 20.42,
    "volume": 646,
    "ma5": 20.43,
    "ma10": 20.45,
    "ma20": 20.45,
    "ma60": 20.44,
    "vMa5": 551,
    "vMa10": 534,
    "high5d": 20.48,
    "high10d": 20.55,
    "high20d": 20.55,
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
      20.42
    ]
  },
  {
    "code": "3131",
    "name": "弘塑",
    "categories": [
      "SitcaBuy"
    ],
    "price": 2640.0,
    "prevClose": 2555.0,
    "open": 2610.0,
    "high": 2730.0,
    "low": 2560.0,
    "volume": 764,
    "ma5": 2488.0,
    "ma10": 2450.0,
    "ma20": 2597.75,
    "ma60": 3069.67,
    "vMa5": 722,
    "vMa10": 749,
    "high5d": 2730.0,
    "high10d": 2730.0,
    "high20d": 3225.0,
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
      2640.0
    ]
  },
  {
    "code": "006201",
    "name": "元大富櫃50",
    "categories": [
      "SitcaBuy"
    ],
    "price": 45.93,
    "prevClose": 45.26,
    "open": 46.49,
    "high": 46.5,
    "low": 45.52,
    "volume": 365,
    "ma5": 44.29,
    "ma10": 42.67,
    "ma20": 41.38,
    "ma60": 45.67,
    "vMa5": 374,
    "vMa10": 533,
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
      45.93
    ]
  },
  {
    "code": "4123",
    "name": "晟德",
    "categories": [
      "SitcaBuy"
    ],
    "price": 34.6,
    "prevClose": 35.1,
    "open": 34.1,
    "high": 34.9,
    "low": 33.85,
    "volume": 10042,
    "ma5": 37.44,
    "ma10": 38.03,
    "ma20": 37.99,
    "ma60": 38.07,
    "vMa5": 4099,
    "vMa10": 3335,
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
      34.6
    ]
  },
  {
    "code": "6121",
    "name": "新普",
    "categories": [
      "SitcaBuy"
    ],
    "price": 428.5,
    "prevClose": 431.5,
    "open": 435.0,
    "high": 440.0,
    "low": 424.5,
    "volume": 700,
    "ma5": 412.5,
    "ma10": 390.05,
    "ma20": 378.82,
    "ma60": 399.58,
    "vMa5": 1268,
    "vMa10": 1177,
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
      428.5
    ]
  },
  {
    "code": "3491",
    "name": "昇達科",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1355.0,
    "prevClose": 1320.0,
    "open": 1360.0,
    "high": 1440.0,
    "low": 1325.0,
    "volume": 2109,
    "ma5": 1284.0,
    "ma10": 1225.9,
    "ma20": 1200.1,
    "ma60": 1463.37,
    "vMa5": 1690,
    "vMa10": 2033,
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
      1355.0
    ]
  },
  {
    "code": "3293",
    "name": "鈊象",
    "categories": [
      "SitcaBuy"
    ],
    "price": 761.0,
    "prevClose": 781.0,
    "open": 772.0,
    "high": 777.0,
    "low": 750.0,
    "volume": 2134,
    "ma5": 787.4,
    "ma10": 781.9,
    "ma20": 749.75,
    "ma60": 759.57,
    "vMa5": 1762,
    "vMa10": 1816,
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
      761.0
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
    "volume": 1326,
    "ma5": 289.3,
    "ma10": 286.25,
    "ma20": 295.35,
    "ma60": 330.58,
    "vMa5": 875,
    "vMa10": 999,
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
    "volume": 722,
    "ma5": 123.1,
    "ma10": 118.9,
    "ma20": 116.85,
    "ma60": 117.17,
    "vMa5": 1508,
    "vMa10": 973,
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
    ]
  },
  {
    "code": "4966",
    "name": "譜瑞-KY",
    "categories": [
      "SitcaBuy"
    ],
    "price": 587.0,
    "prevClose": 591.0,
    "open": 594.0,
    "high": 601.0,
    "low": 585.0,
    "volume": 777,
    "ma5": 594.2,
    "ma10": 591.6,
    "ma20": 588.6,
    "ma60": 664.1,
    "vMa5": 767,
    "vMa10": 880,
    "high5d": 613.0,
    "high10d": 622.0,
    "high20d": 622.0,
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
      587.0
    ]
  },
  {
    "code": "6274",
    "name": "台燿",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1585.0,
    "prevClose": 1600.0,
    "open": 1675.0,
    "high": 1675.0,
    "low": 1525.0,
    "volume": 2732,
    "ma5": 1538.0,
    "ma10": 1436.0,
    "ma20": 1312.25,
    "ma60": 1505.83,
    "vMa5": 3827,
    "vMa10": 4895,
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
      1585.0
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
    "volume": 1963,
    "ma5": 1498.0,
    "ma10": 1466.0,
    "ma20": 1371.0,
    "ma60": 1605.08,
    "vMa5": 3536,
    "vMa10": 2968,
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
    ]
  },
  {
    "code": "3324",
    "name": "雙鴻",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1050.0,
    "prevClose": 1050.0,
    "open": 1065.0,
    "high": 1080.0,
    "low": 1025.0,
    "volume": 4084,
    "ma5": 1034.0,
    "ma10": 998.5,
    "ma20": 946.55,
    "ma60": 999.93,
    "vMa5": 3195,
    "vMa10": 3221,
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
      1050.0
    ]
  },
  {
    "code": "00999A",
    "name": "主動野村臺灣高息",
    "categories": [
      "MajorBuy"
    ],
    "price": 11.28,
    "prevClose": 11.06,
    "open": 11.33,
    "high": 11.35,
    "low": 11.23,
    "volume": 18744,
    "ma5": 11.02,
    "ma10": 10.62,
    "ma20": 10.4,
    "ma60": 10.73,
    "vMa5": 17554,
    "vMa10": 18552,
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
      11.28
    ]
  },
  {
    "code": "009821",
    "name": "野村稀土關鍵資源",
    "categories": [
      "MajorBuy"
    ],
    "price": 15.0,
    "prevClose": 15.07,
    "open": 15.05,
    "high": 15.09,
    "low": 14.97,
    "volume": 14450,
    "ma5": 14.69,
    "ma10": 13.86,
    "ma20": 13.34,
    "ma60": 14.04,
    "vMa5": 17930,
    "vMa10": 11835,
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
      15.0
    ]
  },
  {
    "code": "3706",
    "name": "神達",
    "categories": [
      "MajorBuy"
    ],
    "price": 91.9,
    "prevClose": 92.4,
    "open": 93.0,
    "high": 93.5,
    "low": 91.4,
    "volume": 8484,
    "ma5": 91.78,
    "ma10": 91.19,
    "ma20": 90.16,
    "ma60": 89.08,
    "vMa5": 11211,
    "vMa10": 12975,
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
      91.9
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
    "volume": 24209,
    "ma5": 31.12,
    "ma10": 30.25,
    "ma20": 29.89,
    "ma60": 32.77,
    "vMa5": 20863,
    "vMa10": 22075,
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
    ]
  },
  {
    "code": "00940",
    "name": "元大台灣價值高息",
    "categories": [
      "MajorBuy"
    ],
    "price": 12.55,
    "prevClose": 12.34,
    "open": 12.59,
    "high": 12.64,
    "low": 12.52,
    "volume": 17287,
    "ma5": 12.44,
    "ma10": 12.26,
    "ma20": 12.15,
    "ma60": 12.26,
    "vMa5": 13179,
    "vMa10": 18235,
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
      12.55
    ]
  },
  {
    "code": "1608",
    "name": "華榮",
    "categories": [
      "MajorBuy"
    ],
    "price": 36.7,
    "prevClose": 37.95,
    "open": 37.95,
    "high": 37.95,
    "low": 36.6,
    "volume": 9164,
    "ma5": 36.36,
    "ma10": 34.44,
    "ma20": 32.14,
    "ma60": 33.61,
    "vMa5": 10969,
    "vMa10": 9880,
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
      36.7
    ]
  },
  {
    "code": "0052",
    "name": "富邦科技",
    "categories": [
      "MajorBuy"
    ],
    "price": 62.4,
    "prevClose": 61.05,
    "open": 62.5,
    "high": 62.7,
    "low": 62.1,
    "volume": 19234,
    "ma5": 61.01,
    "ma10": 59.75,
    "ma20": 59.34,
    "ma60": 60.69,
    "vMa5": 18137,
    "vMa10": 28681,
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
    ]
  },
  {
    "code": "00712",
    "name": "復華富時不動產",
    "categories": [
      "MajorBuy"
    ],
    "price": 8.89,
    "prevClose": 8.84,
    "open": 8.91,
    "high": 8.91,
    "low": 8.89,
    "volume": 7430,
    "ma5": 8.83,
    "ma10": 8.85,
    "ma20": 8.88,
    "ma60": 8.79,
    "vMa5": 15715,
    "vMa10": 15165,
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
      8.89
    ]
  },
  {
    "code": "009820",
    "name": "元大納斯達克精選",
    "categories": [
      "MajorBuy"
    ],
    "price": 10.14,
    "prevClose": 10.06,
    "open": 10.14,
    "high": 10.15,
    "low": 10.11,
    "volume": 21871,
    "ma5": 10.04,
    "ma10": 9.77,
    "ma20": 9.77,
    "ma60": 10.0,
    "vMa5": 11774,
    "vMa10": 11852,
    "high5d": 10.15,
    "high10d": 10.15,
    "high20d": 10.15,
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
      10.14
    ]
  },
  {
    "code": "00990A",
    "name": "主動元大AI新經濟",
    "categories": [
      "MajorBuy"
    ],
    "price": 16.59,
    "prevClose": 15.88,
    "open": 16.66,
    "high": 16.66,
    "low": 16.45,
    "volume": 23236,
    "ma5": 16.0,
    "ma10": 15.63,
    "ma20": 15.79,
    "ma60": 18.3,
    "vMa5": 15226,
    "vMa10": 18381,
    "high5d": 16.66,
    "high10d": 16.66,
    "high20d": 17.4,
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
      16.59
    ]
  },
  {
    "code": "2354",
    "name": "鴻準",
    "categories": [
      "MajorBuy"
    ],
    "price": 63.0,
    "prevClose": 63.0,
    "open": 63.6,
    "high": 63.8,
    "low": 61.9,
    "volume": 15894,
    "ma5": 62.72,
    "ma10": 59.9,
    "ma20": 57.43,
    "ma60": 57.85,
    "vMa5": 33554,
    "vMa10": 21673,
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
      63.0
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
    "volume": 3698,
    "ma5": 39.77,
    "ma10": 38.04,
    "ma20": 38.51,
    "ma60": 40.35,
    "vMa5": 3693,
    "vMa10": 3017,
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
    "volume": 13756,
    "ma5": 115.9,
    "ma10": 104.48,
    "ma20": 95.01,
    "ma60": 85.16,
    "vMa5": 11708,
    "vMa10": 12747,
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
    ]
  },
  {
    "code": "00993A",
    "name": "主動安聯台灣",
    "categories": [
      "MajorBuy"
    ],
    "price": 13.58,
    "prevClose": 13.14,
    "open": 13.63,
    "high": 13.72,
    "low": 13.5,
    "volume": 7546,
    "ma5": 13.09,
    "ma10": 12.54,
    "ma20": 12.33,
    "ma60": 13.18,
    "vMa5": 5700,
    "vMa10": 8697,
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
      13.58
    ]
  },
  {
    "code": "00918",
    "name": "大華優利高填息30",
    "categories": [
      "MajorBuy"
    ],
    "price": 33.97,
    "prevClose": 33.49,
    "open": 34.0,
    "high": 34.1,
    "low": 33.79,
    "volume": 13806,
    "ma5": 33.65,
    "ma10": 33.21,
    "ma20": 32.54,
    "ma60": 31.36,
    "vMa5": 12318,
    "vMa10": 19864,
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
    ]
  },
  {
    "code": "1513",
    "name": "中興電",
    "categories": [
      "MajorBuy"
    ],
    "price": 172.0,
    "prevClose": 165.5,
    "open": 168.5,
    "high": 177.0,
    "low": 166.5,
    "volume": 14541,
    "ma5": 163.0,
    "ma10": 160.45,
    "ma20": 158.55,
    "ma60": 167.18,
    "vMa5": 5255,
    "vMa10": 3984,
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
      172.0
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
    "volume": 9228,
    "ma5": 51.14,
    "ma10": 50.03,
    "ma20": 49.36,
    "ma60": 46.61,
    "vMa5": 12739,
    "vMa10": 10505,
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
    ]
  },
  {
    "code": "4510",
    "name": "高鋒",
    "categories": [
      "MajorBuy"
    ],
    "price": 45.5,
    "prevClose": 44.55,
    "open": 45.3,
    "high": 46.5,
    "low": 44.9,
    "volume": 4810,
    "ma5": 42.3,
    "ma10": 39.72,
    "ma20": 38.64,
    "ma60": 43.3,
    "vMa5": 2515,
    "vMa10": 1507,
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
      45.5
    ]
  },
  {
    "code": "00955",
    "name": "中信日本商社",
    "categories": [
      "MajorBuy"
    ],
    "price": 15.63,
    "prevClose": 15.58,
    "open": 15.66,
    "high": 15.67,
    "low": 15.55,
    "volume": 2470,
    "ma5": 15.72,
    "ma10": 15.57,
    "ma20": 15.16,
    "ma60": 14.7,
    "vMa5": 3973,
    "vMa10": 5463,
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
      15.63
    ]
  },
  {
    "code": "4147",
    "name": "中裕",
    "categories": [
      "MajorBuy"
    ],
    "price": 65.3,
    "prevClose": 68.5,
    "open": 66.5,
    "high": 67.8,
    "low": 64.9,
    "volume": 1485,
    "ma5": 63.02,
    "ma10": 60.22,
    "ma20": 59.26,
    "ma60": 59.37,
    "vMa5": 2117,
    "vMa10": 1354,
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
      65.3
    ]
  },
  {
    "code": "6187",
    "name": "萬潤",
    "categories": [
      "MajorBuy"
    ],
    "price": 1270.0,
    "prevClose": 1155.0,
    "open": 1190.0,
    "high": 1270.0,
    "low": 1185.0,
    "volume": 6243,
    "ma5": 1139.0,
    "ma10": 1096.4,
    "ma20": 1031.3,
    "ma60": 1068.8,
    "vMa5": 4526,
    "vMa10": 3603,
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
    ]
  },
  {
    "code": "3265",
    "name": "台星科",
    "categories": [
      "MajorBuy"
    ],
    "price": 180.0,
    "prevClose": 175.0,
    "open": 179.5,
    "high": 190.5,
    "low": 178.5,
    "volume": 3248,
    "ma5": 166.5,
    "ma10": 159.75,
    "ma20": 156.88,
    "ma60": 172.58,
    "vMa5": 1849,
    "vMa10": 1341,
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
      180.0
    ]
  },
  {
    "code": "5443",
    "name": "均豪",
    "categories": [
      "MajorBuy"
    ],
    "price": 107.5,
    "prevClose": 113.5,
    "open": 114.5,
    "high": 115.0,
    "low": 107.0,
    "volume": 3010,
    "ma5": 105.62,
    "ma10": 98.65,
    "ma20": 96.15,
    "ma60": 107.19,
    "vMa5": 3119,
    "vMa10": 1983,
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
      107.5
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
    "volume": 3791,
    "ma5": 225.6,
    "ma10": 215.2,
    "ma20": 210.15,
    "ma60": 262.73,
    "vMa5": 2945,
    "vMa10": 2436,
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
    "volume": 3983,
    "ma5": 155.3,
    "ma10": 150.45,
    "ma20": 141.62,
    "ma60": 130.59,
    "vMa5": 2138,
    "vMa10": 2699,
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
    ]
  },
  {
    "code": "8071",
    "name": "能率網通",
    "categories": [
      "MajorBuy"
    ],
    "price": 25.0,
    "prevClose": 25.55,
    "open": 25.8,
    "high": 26.0,
    "low": 24.9,
    "volume": 2455,
    "ma5": 24.01,
    "ma10": 23.27,
    "ma20": 23.09,
    "ma60": 25.21,
    "vMa5": 1225,
    "vMa10": 1215,
    "high5d": 26.0,
    "high10d": 26.0,
    "high20d": 27.55,
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
      25.0
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
    "volume": 2059,
    "ma5": 91.88,
    "ma10": 91.87,
    "ma20": 85.62,
    "ma60": 95.57,
    "vMa5": 1616,
    "vMa10": 2241,
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
    "volume": 3649,
    "ma5": 51.74,
    "ma10": 48.98,
    "ma20": 47.37,
    "ma60": 57.66,
    "vMa5": 2700,
    "vMa10": 2235,
    "high5d": 56.2,
    "high10d": 56.2,
    "high20d": 56.2,
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
    ]
  },
  {
    "code": "3360",
    "name": "尚立",
    "categories": [
      "MajorBuy"
    ],
    "price": 17.2,
    "prevClose": 17.45,
    "open": 17.45,
    "high": 17.75,
    "low": 16.95,
    "volume": 2333,
    "ma5": 16.57,
    "ma10": 16.33,
    "ma20": 16.85,
    "ma60": 17.23,
    "vMa5": 1114,
    "vMa10": 955,
    "high5d": 17.75,
    "high10d": 17.75,
    "high20d": 21.0,
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
      17.2
    ]
  },
  {
    "code": "3455",
    "name": "由田",
    "categories": [
      "MajorBuy"
    ],
    "price": 224.0,
    "prevClose": 222.0,
    "open": 222.0,
    "high": 231.5,
    "low": 217.0,
    "volume": 2553,
    "ma5": 208.7,
    "ma10": 193.15,
    "ma20": 188.1,
    "ma60": 222.69,
    "vMa5": 1301,
    "vMa10": 1100,
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
      224.0
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
    "volume": 4009,
    "ma5": 107.28,
    "ma10": 103.91,
    "ma20": 107.95,
    "ma60": 126.57,
    "vMa5": 4258,
    "vMa10": 4426,
    "high5d": 117.0,
    "high10d": 117.0,
    "high20d": 143.5,
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
    "volume": 1734,
    "ma5": 128.2,
    "ma10": 115.75,
    "ma20": 110.69,
    "ma60": 123.26,
    "vMa5": 2063,
    "vMa10": 1694,
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
    ]
  },
  {
    "code": "5314",
    "name": "世紀*",
    "categories": [
      "MajorBuy"
    ],
    "price": 61.7,
    "prevClose": 62.5,
    "open": 62.5,
    "high": 63.4,
    "low": 61.5,
    "volume": 3210,
    "ma5": 61.52,
    "ma10": 58.73,
    "ma20": 57.19,
    "ma60": 60.98,
    "vMa5": 2881,
    "vMa10": 2921,
    "high5d": 63.4,
    "high10d": 63.4,
    "high20d": 66.0,
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
      61.7
    ]
  },
  {
    "code": "6026",
    "name": "福邦證",
    "categories": [
      "MajorBuy"
    ],
    "price": 14.55,
    "prevClose": 14.65,
    "open": 14.75,
    "high": 14.9,
    "low": 14.45,
    "volume": 920,
    "ma5": 14.23,
    "ma10": 14.12,
    "ma20": 14.09,
    "ma60": 15.72,
    "vMa5": 1266,
    "vMa10": 1074,
    "high5d": 14.9,
    "high10d": 14.9,
    "high20d": 14.9,
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
      14.55
    ]
  },
  {
    "code": "6015",
    "name": "宏遠證",
    "categories": [
      "MajorBuy"
    ],
    "price": 16.0,
    "prevClose": 16.05,
    "open": 16.3,
    "high": 16.55,
    "low": 15.85,
    "volume": 2511,
    "ma5": 15.48,
    "ma10": 15.56,
    "ma20": 15.71,
    "ma60": 17.43,
    "vMa5": 2030,
    "vMa10": 1766,
    "high5d": 16.55,
    "high10d": 16.55,
    "high20d": 17.1,
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
      16.0
    ]
  },
  {
    "code": "00877",
    "name": "復華中國5G",
    "categories": [
      "MajorBuy"
    ],
    "price": 39.06,
    "prevClose": 37.9,
    "open": 38.51,
    "high": 39.44,
    "low": 38.39,
    "volume": 3377,
    "ma5": 37.95,
    "ma10": 36.79,
    "ma20": 36.97,
    "ma60": 41.9,
    "vMa5": 4432,
    "vMa10": 4486,
    "high5d": 39.44,
    "high10d": 39.44,
    "high20d": 42.14,
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
      39.06
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
    "volume": 1123,
    "ma5": 68.08,
    "ma10": 66.99,
    "ma20": 67.27,
    "ma60": 76.87,
    "vMa5": 1253,
    "vMa10": 1273,
    "high5d": 70.4,
    "high10d": 70.4,
    "high20d": 74.6,
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
    ]
  },
  {
    "code": "8182",
    "name": "加高",
    "categories": [
      "MajorBuy"
    ],
    "price": 42.45,
    "prevClose": 41.75,
    "open": 41.9,
    "high": 44.8,
    "low": 41.9,
    "volume": 2714,
    "ma5": 40.5,
    "ma10": 39.44,
    "ma20": 39.19,
    "ma60": 45.7,
    "vMa5": 1511,
    "vMa10": 1696,
    "high5d": 44.8,
    "high10d": 44.8,
    "high20d": 46.1,
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
      42.45
    ]
  },
  {
    "code": "6530",
    "name": "創威",
    "categories": [
      "MajorBuy"
    ],
    "price": 86.2,
    "prevClose": 87.5,
    "open": 88.5,
    "high": 90.4,
    "low": 85.2,
    "volume": 2611,
    "ma5": 82.3,
    "ma10": 78.31,
    "ma20": 73.89,
    "ma60": 88.46,
    "vMa5": 1706,
    "vMa10": 1287,
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
      86.2
    ]
  },
  {
    "code": "6548",
    "name": "長科*",
    "categories": [
      "MajorBuy"
    ],
    "price": 74.4,
    "prevClose": 75.3,
    "open": 76.1,
    "high": 76.7,
    "low": 74.3,
    "volume": 1853,
    "ma5": 74.48,
    "ma10": 73.02,
    "ma20": 69.97,
    "ma60": 77.81,
    "vMa5": 2340,
    "vMa10": 3783,
    "high5d": 77.5,
    "high10d": 79.2,
    "high20d": 79.2,
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
      74.4
    ]
  },
  {
    "code": "3221",
    "name": "台嘉碩",
    "categories": [
      "MajorBuy"
    ],
    "price": 49.65,
    "prevClose": 49.0,
    "open": 49.3,
    "high": 52.0,
    "low": 49.3,
    "volume": 4204,
    "ma5": 48.25,
    "ma10": 47.29,
    "ma20": 46.75,
    "ma60": 54.49,
    "vMa5": 2871,
    "vMa10": 3274,
    "high5d": 52.0,
    "high10d": 52.0,
    "high20d": 52.7,
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
      49.65
    ]
  },
  {
    "code": "4561",
    "name": "健椿",
    "categories": [
      "MajorBuy"
    ],
    "price": 45.95,
    "prevClose": 46.05,
    "open": 48.2,
    "high": 48.2,
    "low": 45.4,
    "volume": 1344,
    "ma5": 44.12,
    "ma10": 40.19,
    "ma20": 37.83,
    "ma60": 41.99,
    "vMa5": 869,
    "vMa10": 529,
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
      45.95
    ]
  },
  {
    "code": "6127",
    "name": "九豪",
    "categories": [
      "MajorBuy"
    ],
    "price": 52.7,
    "prevClose": 51.8,
    "open": 52.6,
    "high": 55.9,
    "low": 52.5,
    "volume": 5676,
    "ma5": 50.9,
    "ma10": 49.69,
    "ma20": 51.24,
    "ma60": 67.78,
    "vMa5": 4122,
    "vMa10": 4105,
    "high5d": 55.9,
    "high10d": 55.9,
    "high20d": 64.6,
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
      52.7
    ]
  }
];