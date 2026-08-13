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
    "price": 2415.0,
    "open": 2405.0,
    "high": 2415.0,
    "low": 2390.0,
    "prevClose": 2395.0,
    "volume": 17709,
    "ma5": 2385.0,
    "ma10": 2365.0,
    "ma20": 2356.25,
    "vMa5": 19482,
    "vMa10": 29686,
    "limitUpPrice": 2618.0,
    "categories": [
      "0050",
      "半導體-晶圓",
      "SitcaBuy",
      "MajorBuy"
    ],
    "sparkline": [
      2205.0,
      2425.0,
      2370.0,
      2320.0,
      2405.0,
      2365.0,
      2370.0,
      2380.0,
      2395.0,
      2415.0
    ],
    "ma60": 2367.17,
    "high20d": 2470.0,
    "high5d": 2415.0,
    "high10d": 2425.0
  },
  {
    "code": "2454",
    "name": "聯發科",
    "price": 4015.0,
    "open": 3950.0,
    "high": 4030.0,
    "low": 3950.0,
    "prevClose": 4020.0,
    "volume": 5519,
    "ma5": 3963.0,
    "ma10": 3838.0,
    "ma20": 3704.0,
    "vMa5": 6194,
    "vMa10": 8104,
    "limitUpPrice": 4356.0,
    "categories": [
      "0050",
      "半導體-IC設計"
    ],
    "sparkline": [
      3235.0,
      3555.0,
      3910.0,
      3865.0,
      4000.0,
      3920.0,
      3900.0,
      3960.0,
      4020.0,
      4015.0
    ],
    "ma60": 4025.33,
    "high20d": 4125.0,
    "high5d": 4100.0,
    "high10d": 4125.0
  },
  {
    "code": "2317",
    "name": "鴻海",
    "price": 270.0,
    "open": 264.5,
    "high": 270.5,
    "low": 264.0,
    "prevClose": 263.0,
    "volume": 58028,
    "ma5": 264.4,
    "ma10": 256.35,
    "ma20": 250.5,
    "vMa5": 46703,
    "vMa10": 56650,
    "limitUpPrice": 290.95,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "sparkline": [
      229.5,
      250.5,
      253.0,
      250.0,
      258.5,
      264.5,
      260.0,
      264.5,
      263.0,
      270.0
    ],
    "ma60": 256.48,
    "high20d": 270.5,
    "high5d": 270.5,
    "high10d": 270.5
  },
  {
    "code": "2308",
    "name": "台達電",
    "price": 1790.0,
    "open": 1810.0,
    "high": 1830.0,
    "low": 1785.0,
    "prevClose": 1805.0,
    "volume": 8531,
    "ma5": 1748.0,
    "ma10": 1676.0,
    "ma20": 1716.0,
    "vMa5": 11186,
    "vMa10": 15665,
    "limitUpPrice": 1996.5,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      1530.0,
      1640.0,
      1580.0,
      1620.0,
      1650.0,
      1680.0,
      1650.0,
      1815.0,
      1805.0,
      1790.0
    ],
    "ma60": 1989.67,
    "high20d": 1950.0,
    "high5d": 1865.0,
    "high10d": 1865.0
  },
  {
    "code": "2303",
    "name": "聯電",
    "price": 123.0,
    "open": 123.0,
    "high": 125.5,
    "low": 121.0,
    "prevClose": 123.0,
    "volume": 91987,
    "ma5": 121.3,
    "ma10": 119.6,
    "ma20": 125.6,
    "vMa5": 131504,
    "vMa10": 189765,
    "limitUpPrice": 135.3,
    "categories": [
      "0050",
      "Top100",
      "半導體-晶圓"
    ],
    "sparkline": [
      110.0,
      121.0,
      118.0,
      118.5,
      122.0,
      121.5,
      116.0,
      123.0,
      123.0,
      123.0
    ],
    "ma60": 139.23,
    "high20d": 168.0,
    "high5d": 125.5,
    "high10d": 129.0
  },
  {
    "code": "3711",
    "name": "日月光投控",
    "price": 621.0,
    "open": 633.0,
    "high": 634.0,
    "low": 619.0,
    "prevClose": 629.0,
    "volume": 16847,
    "ma5": 612.0,
    "ma10": 590.8,
    "ma20": 600.65,
    "vMa5": 18471,
    "vMa10": 22843,
    "limitUpPrice": 693.0,
    "categories": [
      "0050",
      "半導體-封測",
      "SitcaBuy"
    ],
    "sparkline": [
      505.0,
      555.0,
      610.0,
      585.0,
      593.0,
      595.0,
      585.0,
      630.0,
      629.0,
      621.0
    ],
    "ma60": 613.38,
    "high20d": 694.0,
    "high5d": 641.0,
    "high10d": 641.0
  },
  {
    "code": "2449",
    "name": "京元電子",
    "price": 259.0,
    "open": 246.0,
    "high": 260.0,
    "low": 243.5,
    "prevClose": 246.0,
    "volume": 21198,
    "ma5": 248.9,
    "ma10": 239.75,
    "ma20": 250.97,
    "vMa5": 20341,
    "vMa10": 22654,
    "limitUpPrice": 273.35,
    "categories": [
      "0050",
      "半導體-封測",
      "MajorBuy"
    ],
    "sparkline": [
      203.5,
      223.5,
      233.5,
      245.5,
      247.0,
      249.0,
      242.0,
      248.5,
      246.0,
      259.0
    ],
    "ma60": 280.66,
    "high20d": 308.57,
    "high5d": 260.0,
    "high10d": 261.5
  },
  {
    "code": "3037",
    "name": "欣興",
    "price": 1000.0,
    "open": 999.0,
    "high": 1010.0,
    "low": 990.0,
    "prevClose": 992.0,
    "volume": 7208,
    "ma5": 982.4,
    "ma10": 917.3,
    "ma20": 868.3,
    "vMa5": 12952,
    "vMa10": 23256,
    "limitUpPrice": 1091.2,
    "categories": [
      "0050",
      "半導體-載板"
    ],
    "sparkline": [
      716.0,
      787.0,
      865.0,
      924.0,
      969.0,
      973.0,
      955.0,
      992.0,
      992.0,
      1000.0
    ],
    "ma60": 927.78,
    "high20d": 1010.0,
    "high5d": 1010.0,
    "high10d": 1010.0
  },
  {
    "code": "8046",
    "name": "南電",
    "price": 1265.0,
    "open": 1170.0,
    "high": 1265.0,
    "low": 1130.0,
    "prevClose": 1150.0,
    "volume": 12443,
    "ma5": 1146.0,
    "ma10": 1054.5,
    "ma20": 1092.0,
    "vMa5": 5110,
    "vMa10": 8366,
    "limitUpPrice": 1243.0,
    "categories": [
      "0050",
      "半導體-載板",
      "SitcaBuy"
    ],
    "sparkline": [
      837.0,
      920.0,
      953.0,
      1045.0,
      1060.0,
      1105.0,
      1080.0,
      1130.0,
      1150.0,
      1265.0
    ],
    "ma60": 1021.67,
    "high20d": 1415.0,
    "high5d": 1265.0,
    "high10d": 1265.0
  },
  {
    "code": "3189",
    "name": "景碩",
    "price": 858.0,
    "open": 847.0,
    "high": 864.0,
    "low": 827.0,
    "prevClose": 842.0,
    "volume": 3299,
    "ma5": 842.4,
    "ma10": 771.8,
    "ma20": 741.15,
    "vMa5": 9621,
    "vMa10": 12042,
    "limitUpPrice": 919.6,
    "categories": [
      "半導體-載板"
    ],
    "sparkline": [
      578.0,
      635.0,
      698.0,
      767.0,
      828.0,
      853.0,
      823.0,
      836.0,
      842.0,
      858.0
    ],
    "ma60": 734.12,
    "high20d": 864.0,
    "high5d": 864.0,
    "high10d": 864.0
  },
  {
    "code": "6239",
    "name": "力成",
    "price": 281.5,
    "open": 284.0,
    "high": 287.0,
    "low": 280.5,
    "prevClose": 282.5,
    "volume": 13658,
    "ma5": 276.9,
    "ma10": 258.6,
    "ma20": 268.0,
    "vMa5": 19716,
    "vMa10": 22313,
    "limitUpPrice": 317.35,
    "categories": [
      "半導體-封測",
      "SitcaBuy"
    ],
    "sparkline": [
      214.5,
      235.5,
      238.5,
      256.5,
      256.5,
      269.5,
      262.5,
      288.5,
      282.5,
      281.5
    ],
    "ma60": 308.48,
    "high20d": 325.0,
    "high5d": 296.0,
    "high10d": 296.0
  },
  {
    "code": "6770",
    "name": "力積電",
    "price": 73.7,
    "open": 68.0,
    "high": 73.7,
    "low": 67.9,
    "prevClose": 67.0,
    "volume": 425852,
    "ma5": 68.08,
    "ma10": 62.53,
    "ma20": 63.12,
    "vMa5": 285348,
    "vMa10": 227484,
    "limitUpPrice": 74.36,
    "categories": [
      "Top100",
      "半導體-晶圓",
      "MajorBuy"
    ],
    "sparkline": [
      49.55,
      54.5,
      54.7,
      60.1,
      66.1,
      66.6,
      65.5,
      67.6,
      67.0,
      73.7
    ],
    "ma60": 70.36,
    "high20d": 79.5,
    "high5d": 73.7,
    "high10d": 73.7
  },
  {
    "code": "3707",
    "name": "漢磊",
    "price": 63.5,
    "open": 62.0,
    "high": 65.0,
    "low": 62.0,
    "prevClose": 61.9,
    "volume": 5098,
    "ma5": 61.98,
    "ma10": 58.96,
    "ma20": 61.27,
    "vMa5": 3366,
    "vMa10": 4511,
    "limitUpPrice": 68.53,
    "categories": [
      "半導體-功率"
    ],
    "sparkline": [
      48.75,
      52.5,
      56.3,
      59.8,
      62.4,
      62.1,
      60.1,
      62.3,
      61.9,
      63.5
    ],
    "ma60": 75.38,
    "high20d": 80.1,
    "high5d": 65.0,
    "high10d": 65.0
  },
  {
    "code": "6488",
    "name": "環球晶",
    "price": 933.0,
    "open": 844.0,
    "high": 933.0,
    "low": 844.0,
    "prevClose": 849.0,
    "volume": 10567,
    "ma5": 876.0,
    "ma10": 870.3,
    "ma20": 1003.05,
    "vMa5": 9166,
    "vMa10": 12251,
    "limitUpPrice": 939.4,
    "categories": [
      "Top100",
      "半導體-功率",
      "MajorBuy"
    ],
    "sparkline": [
      778.0,
      855.0,
      866.0,
      952.0,
      872.0,
      872.0,
      872.0,
      854.0,
      849.0,
      933.0
    ],
    "ma60": 1014.43,
    "high20d": 1460.0,
    "high5d": 933.0,
    "high10d": 996.0
  },
  {
    "code": "5483",
    "name": "中美晶",
    "price": 185.0,
    "open": 169.5,
    "high": 185.0,
    "low": 169.5,
    "prevClose": 168.5,
    "volume": 32341,
    "ma5": 173.8,
    "ma10": 171.0,
    "ma20": 192.9,
    "vMa5": 20086,
    "vMa10": 34721,
    "limitUpPrice": 186.45,
    "categories": [
      "Top100",
      "半導體-功率",
      "MajorBuy"
    ],
    "sparkline": [
      152.5,
      157.0,
      172.5,
      181.0,
      178.0,
      177.5,
      168.5,
      169.5,
      168.5,
      185.0
    ],
    "ma60": 182.97,
    "high20d": 279.5,
    "high5d": 185.0,
    "high10d": 194.0
  },
  {
    "code": "2327",
    "name": "國巨*",
    "price": 602.0,
    "open": 607.0,
    "high": 625.0,
    "low": 600.0,
    "prevClose": 617.0,
    "volume": 54120,
    "ma5": 580.4,
    "ma10": 555.65,
    "ma20": 603.38,
    "vMa5": 52539,
    "vMa10": 53967,
    "limitUpPrice": 630.3,
    "categories": [
      "0050",
      "Top100",
      "半導體-被動元件",
      "SitcaBuy"
    ],
    "sparkline": [
      456.5,
      502.0,
      552.0,
      566.0,
      578.0,
      570.0,
      540.0,
      573.0,
      617.0,
      602.0
    ],
    "ma60": 783.74,
    "high20d": 807.0,
    "high5d": 625.0,
    "high10d": 625.0
  },
  {
    "code": "2492",
    "name": "華新科",
    "price": 288.0,
    "open": 298.0,
    "high": 312.0,
    "low": 288.0,
    "prevClose": 300.5,
    "volume": 65843,
    "ma5": 273.9,
    "ma10": 254.45,
    "ma20": 267.75,
    "vMa5": 36566,
    "vMa10": 26699,
    "limitUpPrice": 300.85,
    "categories": [
      "Top100",
      "半導體-被動元件",
      "SitcaBuy"
    ],
    "sparkline": [
      198.5,
      218.0,
      239.5,
      259.5,
      259.5,
      256.5,
      251.0,
      273.5,
      300.5,
      288.0
    ],
    "ma60": 392.58,
    "high20d": 375.0,
    "high5d": 312.0,
    "high10d": 312.0
  },
  {
    "code": "3026",
    "name": "禾伸堂",
    "price": 685.0,
    "open": 646.0,
    "high": 710.0,
    "low": 631.0,
    "prevClose": 646.0,
    "volume": 23731,
    "ma5": 609.4,
    "ma10": 542.9,
    "ma20": 588.73,
    "vMa5": 10197,
    "vMa10": 6880,
    "limitUpPrice": 646.8,
    "categories": [
      "半導體-被動元件",
      "SitcaBuy"
    ],
    "sparkline": [
      427.5,
      450.0,
      459.5,
      498.0,
      547.0,
      593.0,
      535.0,
      588.0,
      646.0,
      685.0
    ],
    "ma60": 696.63,
    "high20d": 854.0,
    "high5d": 710.0,
    "high10d": 710.0
  },
  {
    "code": "2408",
    "name": "南亞科",
    "price": 482.5,
    "open": 497.0,
    "high": 511.0,
    "low": 480.5,
    "prevClose": 489.0,
    "volume": 91906,
    "ma5": 477.9,
    "ma10": 435.55,
    "ma20": 421.52,
    "vMa5": 95307,
    "vMa10": 91903,
    "limitUpPrice": 552.2,
    "categories": [
      "0050",
      "Top100",
      "半導體-記憶體",
      "SitcaBuy"
    ],
    "sparkline": [
      328.0,
      360.5,
      396.5,
      436.0,
      445.0,
      459.0,
      457.0,
      502.0,
      489.0,
      482.5
    ],
    "ma60": 403.83,
    "high20d": 511.0,
    "high5d": 511.0,
    "high10d": 511.0
  },
  {
    "code": "2344",
    "name": "華邦電",
    "price": 177.0,
    "open": 186.5,
    "high": 193.0,
    "low": 174.5,
    "prevClose": 178.0,
    "volume": 205043,
    "ma5": 173.8,
    "ma10": 158.65,
    "ma20": 157.03,
    "vMa5": 181848,
    "vMa10": 155751,
    "limitUpPrice": 197.45,
    "categories": [
      "Top100",
      "半導體-記憶體",
      "0050"
    ],
    "sparkline": [
      118.5,
      130.0,
      143.0,
      157.0,
      169.0,
      171.0,
      163.5,
      179.5,
      178.0,
      177.0
    ],
    "ma60": 168.47,
    "high20d": 193.0,
    "high5d": 193.0,
    "high10d": 193.0
  },
  {
    "code": "3260",
    "name": "威剛",
    "price": 409.5,
    "open": 408.5,
    "high": 422.0,
    "low": 408.5,
    "prevClose": 405.5,
    "volume": 11927,
    "ma5": 412.6,
    "ma10": 402.6,
    "ma20": 390.8,
    "vMa5": 14324,
    "vMa10": 15442,
    "limitUpPrice": 452.1,
    "categories": [
      "Top100",
      "半導體-記憶體",
      "MajorBuy"
    ],
    "sparkline": [
      378.5,
      398.5,
      391.5,
      398.5,
      396.0,
      421.0,
      416.0,
      411.0,
      405.5,
      409.5
    ],
    "ma60": 406.32,
    "high20d": 437.0,
    "high5d": 437.0,
    "high10d": 437.0
  },
  {
    "code": "8299",
    "name": "群聯",
    "price": 2210.0,
    "open": 2110.0,
    "high": 2245.0,
    "low": 2110.0,
    "prevClose": 2090.0,
    "volume": 5667,
    "ma5": 2077.0,
    "ma10": 1894.5,
    "ma20": 1847.25,
    "vMa5": 4942,
    "vMa10": 4654,
    "limitUpPrice": 2244.0,
    "categories": [
      "Top100",
      "半導體-記憶體",
      "MajorBuy"
    ],
    "sparkline": [
      1495.0,
      1640.0,
      1760.0,
      1820.0,
      1845.0,
      2025.0,
      2020.0,
      2040.0,
      2090.0,
      2210.0
    ],
    "ma60": 2196.08,
    "high20d": 2245.0,
    "high5d": 2245.0,
    "high10d": 2245.0
  },
  {
    "code": "3034",
    "name": "聯詠",
    "price": 537.0,
    "open": 538.0,
    "high": 544.0,
    "low": 532.0,
    "prevClose": 538.0,
    "volume": 2987,
    "ma5": 540.8,
    "ma10": 530.7,
    "ma20": 509.98,
    "vMa5": 2921,
    "vMa10": 4120,
    "limitUpPrice": 598.4,
    "categories": [
      "半導體-IC設計"
    ],
    "sparkline": [
      491.0,
      519.0,
      519.0,
      524.0,
      550.0,
      543.0,
      542.0,
      544.0,
      538.0,
      537.0
    ],
    "ma60": 508.14,
    "high20d": 572.0,
    "high5d": 557.0,
    "high10d": 572.0
  },
  {
    "code": "2379",
    "name": "瑞昱",
    "price": 766.0,
    "open": 772.0,
    "high": 776.0,
    "low": 760.0,
    "prevClose": 772.0,
    "volume": 1438,
    "ma5": 758.0,
    "ma10": 734.8,
    "ma20": 735.15,
    "vMa5": 2296,
    "vMa10": 4355,
    "limitUpPrice": 833.8,
    "categories": [
      "半導體-IC設計"
    ],
    "sparkline": [
      697.0,
      683.0,
      704.0,
      723.0,
      751.0,
      744.0,
      750.0,
      758.0,
      772.0,
      766.0
    ],
    "ma60": 717.13,
    "high20d": 783.0,
    "high5d": 780.0,
    "high10d": 780.0
  },
  {
    "code": "2382",
    "name": "廣達",
    "price": 325.5,
    "open": 317.0,
    "high": 330.0,
    "low": 316.5,
    "prevClose": 315.5,
    "volume": 22795,
    "ma5": 310.9,
    "ma10": 302.6,
    "ma20": 314.07,
    "vMa5": 18182,
    "vMa10": 26811,
    "limitUpPrice": 344.85,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      279.0,
      291.5,
      296.5,
      300.5,
      304.0,
      302.0,
      298.0,
      313.5,
      315.5,
      325.5
    ],
    "ma60": 347.48,
    "high20d": 360.5,
    "high5d": 330.0,
    "high10d": 330.0
  },
  {
    "code": "3231",
    "name": "緯創",
    "price": 193.5,
    "open": 189.5,
    "high": 195.0,
    "low": 189.0,
    "prevClose": 191.0,
    "volume": 42545,
    "ma5": 190.1,
    "ma10": 186.05,
    "ma20": 173.6,
    "vMa5": 58482,
    "vMa10": 102326,
    "limitUpPrice": 212.3,
    "categories": [
      "0050",
      "Top100",
      "MajorBuy"
    ],
    "sparkline": [
      160.0,
      176.0,
      186.0,
      195.0,
      193.0,
      189.5,
      183.5,
      193.0,
      191.0,
      193.5
    ],
    "ma60": 162.32,
    "high20d": 202.5,
    "high5d": 199.0,
    "high10d": 202.5
  },
  {
    "code": "2356",
    "name": "英業達",
    "price": 69.0,
    "open": 66.0,
    "high": 71.1,
    "low": 65.9,
    "prevClose": 65.1,
    "volume": 79065,
    "ma5": 65.92,
    "ma10": 64.45,
    "ma20": 62.65,
    "vMa5": 28742,
    "vMa10": 32382,
    "limitUpPrice": 72.6,
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "sparkline": [
      57.5,
      61.8,
      63.9,
      66.0,
      65.7,
      65.5,
      64.0,
      66.0,
      65.1,
      69.0
    ],
    "ma60": 65.62,
    "high20d": 71.1,
    "high5d": 71.1,
    "high10d": 71.1
  },
  {
    "code": "2376",
    "name": "技嘉",
    "price": 375.5,
    "open": 352.0,
    "high": 381.0,
    "low": 352.0,
    "prevClose": 350.5,
    "volume": 17404,
    "ma5": 352.7,
    "ma10": 341.7,
    "ma20": 340.3,
    "vMa5": 8069,
    "vMa10": 8490,
    "limitUpPrice": 384.45,
    "categories": [
      "MajorBuy"
    ],
    "sparkline": [
      318.5,
      336.5,
      324.5,
      332.0,
      342.0,
      344.0,
      344.0,
      349.5,
      350.5,
      375.5
    ],
    "ma60": 342.16,
    "high20d": 381.0,
    "high5d": 381.0,
    "high10d": 381.0
  },
  {
    "code": "2603",
    "name": "長榮",
    "price": 214.5,
    "open": 217.0,
    "high": 217.0,
    "low": 213.0,
    "prevClose": 218.0,
    "volume": 9380,
    "ma5": 211.6,
    "ma10": 208.15,
    "ma20": 204.95,
    "vMa5": 9017,
    "vMa10": 7745,
    "limitUpPrice": 235.4,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      201.0,
      204.0,
      207.5,
      206.0,
      205.0,
      204.0,
      207.5,
      214.0,
      218.0,
      214.5
    ],
    "ma60": 205.75,
    "high20d": 220.0,
    "high5d": 220.0,
    "high10d": 220.0
  },
  {
    "code": "2609",
    "name": "陽明",
    "price": 51.7,
    "open": 52.0,
    "high": 52.1,
    "low": 51.3,
    "prevClose": 52.0,
    "volume": 10302,
    "ma5": 51.24,
    "ma10": 50.94,
    "ma20": 50.7,
    "vMa5": 14925,
    "vMa10": 14646,
    "limitUpPrice": 56.76,
    "categories": [],
    "sparkline": [
      50.0,
      50.8,
      50.8,
      51.0,
      50.6,
      50.4,
      50.5,
      51.6,
      52.0,
      51.7
    ],
    "ma60": 51.4,
    "high20d": 52.2,
    "high5d": 52.2,
    "high10d": 52.2
  },
  {
    "code": "2615",
    "name": "萬海",
    "price": 87.1,
    "open": 87.7,
    "high": 87.7,
    "low": 86.0,
    "prevClose": 87.1,
    "volume": 7057,
    "ma5": 86.18,
    "ma10": 85.76,
    "ma20": 84.63,
    "vMa5": 9412,
    "vMa10": 8091,
    "limitUpPrice": 96.25,
    "categories": [],
    "sparkline": [
      84.4,
      84.7,
      86.1,
      86.1,
      85.4,
      84.3,
      84.9,
      87.5,
      87.1,
      87.1
    ],
    "ma60": 82.43,
    "high20d": 88.8,
    "high5d": 88.8,
    "high10d": 88.8
  },
  {
    "code": "3481",
    "name": "群創",
    "price": 50.4,
    "open": 51.0,
    "high": 52.1,
    "low": 50.3,
    "prevClose": 50.1,
    "volume": 188241,
    "ma5": 50.07,
    "ma10": 47.86,
    "ma20": 48.88,
    "vMa5": 266307,
    "vMa10": 334837,
    "limitUpPrice": 57.53,
    "categories": [
      "Top100"
    ],
    "sparkline": [
      41.4,
      45.5,
      45.8,
      47.8,
      47.8,
      50.0,
      47.55,
      52.3,
      50.1,
      50.4
    ],
    "ma60": 54.47,
    "high20d": 58.9,
    "high5d": 52.3,
    "high10d": 52.3
  },
  {
    "code": "2409",
    "name": "友達",
    "price": 26.25,
    "open": 26.4,
    "high": 26.9,
    "low": 26.15,
    "prevClose": 26.1,
    "volume": 169762,
    "ma5": 25.69,
    "ma10": 24.77,
    "ma20": 25.05,
    "vMa5": 226807,
    "vMa10": 202050,
    "limitUpPrice": 29.7,
    "categories": [
      "Top100"
    ],
    "sparkline": [
      22.2,
      24.2,
      23.9,
      24.45,
      24.45,
      24.55,
      24.55,
      27.0,
      26.1,
      26.25
    ],
    "ma60": 26.2,
    "high20d": 28.2,
    "high5d": 27.9,
    "high10d": 27.9
  },
  {
    "code": "2881",
    "name": "富邦金",
    "price": 127.0,
    "open": 127.5,
    "high": 129.5,
    "low": 126.5,
    "prevClose": 128.0,
    "volume": 9080,
    "ma5": 127.3,
    "ma10": 127.8,
    "ma20": 126.8,
    "vMa5": 12179,
    "vMa10": 18238,
    "limitUpPrice": 141.35,
    "categories": [
      "0050"
    ],
    "sparkline": [
      124.0,
      130.0,
      129.5,
      128.5,
      129.5,
      126.0,
      127.0,
      128.5,
      128.0,
      127.0
    ],
    "ma60": 122.81,
    "high20d": 132.5,
    "high5d": 129.5,
    "high10d": 132.5
  },
  {
    "code": "2882",
    "name": "國泰金",
    "price": 99.7,
    "open": 100.0,
    "high": 101.0,
    "low": 98.5,
    "prevClose": 99.6,
    "volume": 17321,
    "ma5": 99.44,
    "ma10": 99.41,
    "ma20": 97.73,
    "vMa5": 15401,
    "vMa10": 20991,
    "limitUpPrice": 111.1,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      95.2,
      101.5,
      100.5,
      99.2,
      100.5,
      97.5,
      99.4,
      101.0,
      99.6,
      99.7
    ],
    "ma60": 97.06,
    "high20d": 102.5,
    "high5d": 101.5,
    "high10d": 102.5
  },
  {
    "code": "2891",
    "name": "中信金",
    "price": 66.6,
    "open": 66.3,
    "high": 67.0,
    "low": 65.5,
    "prevClose": 66.8,
    "volume": 37535,
    "ma5": 66.02,
    "ma10": 65.37,
    "ma20": 64.08,
    "vMa5": 26270,
    "vMa10": 33956,
    "limitUpPrice": 73.15,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      63.1,
      64.9,
      64.8,
      64.8,
      66.0,
      64.6,
      65.6,
      66.5,
      66.8,
      66.6
    ],
    "ma60": 65.92,
    "high20d": 67.3,
    "high5d": 67.3,
    "high10d": 67.3
  },
  {
    "code": "2886",
    "name": "兆豐金",
    "price": 48.7,
    "open": 49.4,
    "high": 49.45,
    "low": 48.55,
    "prevClose": 49.4,
    "volume": 31262,
    "ma5": 50.06,
    "ma10": 50.84,
    "ma20": 49.65,
    "vMa5": 27992,
    "vMa10": 33311,
    "limitUpPrice": 56.1,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "sparkline": [
      51.5,
      53.1,
      51.6,
      50.7,
      51.2,
      50.3,
      50.9,
      51.0,
      49.4,
      48.7
    ],
    "ma60": 45.75,
    "high20d": 53.7,
    "high5d": 51.9,
    "high10d": 53.7
  },
  {
    "code": "2884",
    "name": "玉山金",
    "price": 36.75,
    "open": 37.2,
    "high": 37.25,
    "low": 36.3,
    "prevClose": 36.9,
    "volume": 27822,
    "ma5": 37.51,
    "ma10": 37.85,
    "ma20": 36.9,
    "vMa5": 26077,
    "vMa10": 36909,
    "limitUpPrice": 41.58,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      37.7,
      38.65,
      38.45,
      38.0,
      38.1,
      37.95,
      38.15,
      37.8,
      36.9,
      36.75
    ],
    "ma60": 34.72,
    "high20d": 39.1,
    "high5d": 38.3,
    "high10d": 39.1
  },
  {
    "code": "2892",
    "name": "第一金",
    "price": 33.15,
    "open": 32.7,
    "high": 33.15,
    "low": 32.45,
    "prevClose": 32.7,
    "volume": 42825,
    "ma5": 34.37,
    "ma10": 35.13,
    "ma20": 34.75,
    "vMa5": 52278,
    "vMa10": 53580,
    "limitUpPrice": 38.45,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "sparkline": [
      35.5,
      36.75,
      35.95,
      35.3,
      35.9,
      35.5,
      35.55,
      34.95,
      32.7,
      33.15
    ],
    "ma60": 32.22,
    "high20d": 36.9,
    "high5d": 36.3,
    "high10d": 36.9
  },
  {
    "code": "2885",
    "name": "元大金",
    "price": 68.6,
    "open": 68.9,
    "high": 69.4,
    "low": 67.9,
    "prevClose": 68.4,
    "volume": 12115,
    "ma5": 68.0,
    "ma10": 67.76,
    "ma20": 65.67,
    "vMa5": 16890,
    "vMa10": 24541,
    "limitUpPrice": 75.02,
    "categories": [
      "0050"
    ],
    "sparkline": [
      63.1,
      68.1,
      68.0,
      69.0,
      69.4,
      67.1,
      67.7,
      68.2,
      68.4,
      68.6
    ],
    "ma60": 64.6,
    "high20d": 70.8,
    "high5d": 69.4,
    "high10d": 70.8
  },
  {
    "code": "5880",
    "name": "合庫金",
    "price": 24.1,
    "open": 24.0,
    "high": 24.1,
    "low": 23.85,
    "prevClose": 24.0,
    "volume": 18286,
    "ma5": 24.92,
    "ma10": 25.6,
    "ma20": 25.33,
    "vMa5": 28930,
    "vMa10": 35039,
    "limitUpPrice": 28.01,
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "sparkline": [
      26.34,
      26.93,
      26.24,
      25.9,
      25.95,
      25.46,
      25.56,
      25.46,
      24.0,
      24.1
    ],
    "ma60": 24.1,
    "high20d": 26.98,
    "high5d": 26.05,
    "high10d": 26.98
  },
  {
    "code": "2890",
    "name": "永豐金",
    "price": 39.85,
    "open": 39.15,
    "high": 39.9,
    "low": 39.0,
    "prevClose": 39.05,
    "volume": 19200,
    "ma5": 39.09,
    "ma10": 39.41,
    "ma20": 39.2,
    "vMa5": 15569,
    "vMa10": 24552,
    "limitUpPrice": 42.79,
    "categories": [
      "0050",
      "MajorBuy"
    ],
    "sparkline": [
      38.85,
      40.6,
      40.05,
      39.6,
      39.55,
      38.7,
      38.95,
      38.9,
      39.05,
      39.85
    ],
    "ma60": 36.45,
    "high20d": 41.05,
    "high5d": 39.9,
    "high10d": 41.05
  },
  {
    "code": "2880",
    "name": "華南金",
    "price": 42.77,
    "open": 43.47,
    "high": 43.51,
    "low": 42.43,
    "prevClose": 43.22,
    "volume": 30440,
    "ma5": 43.43,
    "ma10": 43.14,
    "ma20": 41.77,
    "vMa5": 26340,
    "vMa10": 27811,
    "limitUpPrice": 48.4,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "sparkline": [
      42.23,
      43.27,
      42.62,
      42.82,
      43.37,
      43.61,
      43.96,
      43.56,
      43.22,
      42.77
    ],
    "ma60": 37.59,
    "high20d": 44.7,
    "high5d": 44.41,
    "high10d": 44.7
  },
  {
    "code": "2883",
    "name": "凱基金",
    "price": 31.2,
    "open": 31.0,
    "high": 31.4,
    "low": 30.55,
    "prevClose": 31.05,
    "volume": 29093,
    "ma5": 30.95,
    "ma10": 30.71,
    "ma20": 30.42,
    "vMa5": 30656,
    "vMa10": 44568,
    "limitUpPrice": 34.16,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "sparkline": [
      28.95,
      30.85,
      30.4,
      30.55,
      31.6,
      30.6,
      30.85,
      31.05,
      31.05,
      31.2
    ],
    "ma60": 28.36,
    "high20d": 31.75,
    "high5d": 31.4,
    "high10d": 31.75
  },
  {
    "code": "2887",
    "name": "台新新光金",
    "price": 35.65,
    "open": 35.65,
    "high": 36.0,
    "low": 35.1,
    "prevClose": 35.55,
    "volume": 35115,
    "ma5": 35.35,
    "ma10": 35.24,
    "ma20": 34.88,
    "vMa5": 41007,
    "vMa10": 48982,
    "limitUpPrice": 39.49,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "sparkline": [
      33.15,
      35.95,
      35.3,
      35.55,
      35.7,
      34.5,
      35.15,
      35.9,
      35.55,
      35.65
    ],
    "ma60": 31.61,
    "high20d": 36.3,
    "high5d": 36.0,
    "high10d": 36.3
  },
  {
    "code": "2002",
    "name": "中鋼",
    "price": 19.75,
    "open": 19.85,
    "high": 19.85,
    "low": 19.65,
    "prevClose": 19.75,
    "volume": 44366,
    "ma5": 19.44,
    "ma10": 19.17,
    "ma20": 19.04,
    "vMa5": 61298,
    "vMa10": 45844,
    "limitUpPrice": 21.61,
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "sparkline": [
      18.95,
      18.95,
      18.85,
      18.85,
      18.9,
      19.0,
      19.05,
      19.65,
      19.75,
      19.75
    ],
    "ma60": 18.93,
    "high20d": 19.9,
    "high5d": 19.9,
    "high10d": 19.9
  },
  {
    "code": "1101",
    "name": "台泥",
    "price": 24.45,
    "open": 24.65,
    "high": 24.75,
    "low": 24.45,
    "prevClose": 24.65,
    "volume": 13911,
    "ma5": 24.47,
    "ma10": 24.21,
    "ma20": 24.13,
    "vMa5": 18920,
    "vMa10": 23205,
    "limitUpPrice": 27.01,
    "categories": [],
    "sparkline": [
      24.05,
      24.3,
      23.8,
      23.55,
      24.05,
      24.35,
      24.35,
      24.55,
      24.65,
      24.45
    ],
    "ma60": 24.02,
    "high20d": 25.05,
    "high5d": 24.8,
    "high10d": 24.8
  },
  {
    "code": "1301",
    "name": "台塑",
    "price": 56.2,
    "open": 55.7,
    "high": 56.5,
    "low": 55.6,
    "prevClose": 55.6,
    "volume": 14624,
    "ma5": 55.66,
    "ma10": 55.24,
    "ma20": 58.61,
    "vMa5": 16614,
    "vMa10": 24013,
    "limitUpPrice": 61.16,
    "categories": [
      "MajorBuy"
    ],
    "sparkline": [
      54.0,
      55.0,
      53.8,
      55.3,
      56.0,
      55.1,
      55.8,
      55.6,
      55.6,
      56.2
    ],
    "ma60": 53.87,
    "high20d": 69.8,
    "high5d": 57.2,
    "high10d": 57.8
  },
  {
    "code": "5876",
    "name": "上海商銀",
    "categories": [
      "SitcaBuy"
    ],
    "price": 42.85,
    "prevClose": 43.1,
    "open": 43.1,
    "high": 43.1,
    "low": 42.6,
    "volume": 4310,
    "ma5": 43.24,
    "ma10": 43.94,
    "ma20": 44.42,
    "ma60": 42.32,
    "vMa5": 5498,
    "vMa10": 8388,
    "high20d": 46.63,
    "sparkline": [
      44.8,
      45.45,
      44.65,
      44.15,
      44.15,
      43.45,
      43.45,
      43.35,
      43.1,
      42.85
    ],
    "high5d": 44.4,
    "high10d": 45.7
  },
  {
    "code": "5871",
    "name": "中租-KY",
    "categories": [],
    "price": 113.5,
    "prevClose": 115.5,
    "open": 115.0,
    "high": 115.5,
    "low": 113.0,
    "volume": 4274,
    "ma5": 111.2,
    "ma10": 111.45,
    "ma20": 114.76,
    "ma60": 113.32,
    "vMa5": 6333,
    "vMa10": 6596,
    "high20d": 122.06,
    "sparkline": [
      110.5,
      111.5,
      113.0,
      111.5,
      112.0,
      109.0,
      109.0,
      109.0,
      115.5,
      113.5
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
    "price": 4585.0,
    "prevClose": 4355.0,
    "open": 4390.0,
    "high": 4685.0,
    "low": 4355.0,
    "volume": 1945,
    "ma5": 4470.0,
    "ma10": 4299.0,
    "ma20": 4151.0,
    "ma60": 4145.42,
    "vMa5": 1768,
    "vMa10": 2212,
    "high20d": 4770.0,
    "sparkline": [
      3715.0,
      4035.0,
      3960.0,
      4355.0,
      4575.0,
      4625.0,
      4385.0,
      4400.0,
      4355.0,
      4585.0
    ],
    "high5d": 4770.0,
    "high10d": 4770.0
  },
  {
    "code": "2357",
    "name": "華碩",
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "price": 852.0,
    "prevClose": 839.0,
    "open": 831.0,
    "high": 860.0,
    "low": 831.0,
    "volume": 2930,
    "ma5": 828.8,
    "ma10": 813.4,
    "ma20": 776.3,
    "ma60": 758.2,
    "vMa5": 3389,
    "vMa10": 4379,
    "high20d": 860.0,
    "sparkline": [
      737.0,
      810.0,
      799.0,
      806.0,
      838.0,
      818.0,
      817.0,
      818.0,
      839.0,
      852.0
    ],
    "high5d": 860.0,
    "high10d": 860.0
  },
  {
    "code": "2395",
    "name": "研華",
    "categories": [
      "0050"
    ],
    "price": 686.0,
    "prevClose": 661.0,
    "open": 672.0,
    "high": 699.0,
    "low": 667.0,
    "volume": 5883,
    "ma5": 654.0,
    "ma10": 616.5,
    "ma20": 587.55,
    "ma60": 527.58,
    "vMa5": 6791,
    "vMa10": 5828,
    "high20d": 699.0,
    "sparkline": [
      547.0,
      563.0,
      576.0,
      576.0,
      633.0,
      622.0,
      634.0,
      667.0,
      661.0,
      686.0
    ],
    "high5d": 699.0,
    "high10d": 699.0
  },
  {
    "code": "2301",
    "name": "光寶科",
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy"
    ],
    "price": 259.5,
    "prevClose": 268.5,
    "open": 267.0,
    "high": 267.0,
    "low": 254.0,
    "volume": 36200,
    "ma5": 259.8,
    "ma10": 242.85,
    "ma20": 224.25,
    "ma60": 221.6,
    "vMa5": 36376,
    "vMa10": 39882,
    "high20d": 277.5,
    "sparkline": [
      190.0,
      209.0,
      229.5,
      252.0,
      249.0,
      252.5,
      247.0,
      271.5,
      268.5,
      259.5
    ],
    "high5d": 277.5,
    "high10d": 277.5
  },
  {
    "code": "6669",
    "name": "緯穎",
    "categories": [
      "0050"
    ],
    "price": 6025.0,
    "prevClose": 5930.0,
    "open": 5905.0,
    "high": 6140.0,
    "low": 5900.0,
    "volume": 1034,
    "ma5": 6066.0,
    "ma10": 5892.5,
    "ma20": 5562.0,
    "ma60": 5239.92,
    "vMa5": 1353,
    "vMa10": 1809,
    "high20d": 6400.0,
    "sparkline": [
      4900.0,
      5390.0,
      5925.0,
      6205.0,
      6175.0,
      6265.0,
      6100.0,
      6010.0,
      5930.0,
      6025.0
    ],
    "high5d": 6275.0,
    "high10d": 6400.0
  },
  {
    "code": "3661",
    "name": "世芯-KY",
    "categories": [
      "0050"
    ],
    "price": 4055.0,
    "prevClose": 3955.0,
    "open": 3960.0,
    "high": 4100.0,
    "low": 3950.0,
    "volume": 1915,
    "ma5": 3837.0,
    "ma10": 3528.0,
    "ma20": 3463.5,
    "ma60": 4043.08,
    "vMa5": 2618,
    "vMa10": 2447,
    "high20d": 4150.0,
    "sparkline": [
      2785.0,
      3060.0,
      3250.0,
      3390.0,
      3610.0,
      3660.0,
      3715.0,
      3800.0,
      3955.0,
      4055.0
    ],
    "high5d": 4150.0,
    "high10d": 4150.0
  },
  {
    "code": "3443",
    "name": "創意",
    "categories": [
      "0050"
    ],
    "price": 5130.0,
    "prevClose": 4955.0,
    "open": 5025.0,
    "high": 5180.0,
    "low": 4945.0,
    "volume": 2532,
    "ma5": 4728.0,
    "ma10": 4362.5,
    "ma20": 4166.5,
    "ma60": 4488.83,
    "vMa5": 2245,
    "vMa10": 2096,
    "high20d": 5180.0,
    "sparkline": [
      3460.0,
      3805.0,
      4185.0,
      4145.0,
      4390.0,
      4480.0,
      4545.0,
      4530.0,
      4955.0,
      5130.0
    ],
    "high5d": 5180.0,
    "high10d": 5180.0
  },
  {
    "code": "1216",
    "name": "統一",
    "categories": [
      "0050"
    ],
    "price": 76.3,
    "prevClose": 75.9,
    "open": 75.8,
    "high": 76.3,
    "low": 75.4,
    "volume": 9901,
    "ma5": 75.28,
    "ma10": 74.59,
    "ma20": 76.44,
    "ma60": 75.39,
    "vMa5": 16530,
    "vMa10": 21326,
    "high20d": 80.7,
    "sparkline": [
      75.6,
      73.8,
      73.0,
      73.9,
      73.2,
      73.0,
      75.7,
      75.5,
      75.9,
      76.3
    ],
    "high5d": 76.3,
    "high10d": 76.8
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
    "prevClose": 190.0,
    "open": 195.0,
    "high": 197.5,
    "low": 187.0,
    "volume": 77715,
    "ma5": 186.1,
    "ma10": 174.75,
    "ma20": 180.22,
    "ma60": 150.95,
    "vMa5": 94046,
    "vMa10": 93643,
    "high20d": 229.0,
    "sparkline": [
      145.0,
      159.5,
      165.0,
      170.5,
      177.0,
      178.5,
      188.0,
      185.0,
      190.0,
      189.0
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
    "price": 59.6,
    "prevClose": 58.2,
    "open": 58.7,
    "high": 60.0,
    "low": 58.7,
    "volume": 20042,
    "ma5": 58.72,
    "ma10": 58.05,
    "ma20": 62.12,
    "ma60": 57.09,
    "vMa5": 19537,
    "vMa10": 27112,
    "high20d": 77.6,
    "sparkline": [
      56.4,
      57.4,
      56.3,
      58.2,
      58.6,
      58.1,
      58.9,
      58.8,
      58.2,
      59.6
    ],
    "high5d": 60.5,
    "high10d": 61.3
  },
  {
    "code": "6505",
    "name": "台塑化",
    "categories": [
      "0050"
    ],
    "price": 70.2,
    "prevClose": 71.1,
    "open": 71.8,
    "high": 72.9,
    "low": 70.2,
    "volume": 15017,
    "ma5": 69.68,
    "ma10": 69.43,
    "ma20": 75.5,
    "ma60": 61.84,
    "vMa5": 24120,
    "vMa10": 29847,
    "high20d": 97.9,
    "sparkline": [
      71.6,
      70.8,
      67.7,
      68.2,
      67.6,
      67.1,
      71.0,
      69.0,
      71.1,
      70.2
    ],
    "high5d": 73.0,
    "high10d": 78.0
  },
  {
    "code": "2618",
    "name": "長榮航",
    "categories": [
      "SitcaBuy"
    ],
    "price": 42.15,
    "prevClose": 41.75,
    "open": 41.9,
    "high": 42.6,
    "low": 41.45,
    "volume": 22091,
    "ma5": 42.84,
    "ma10": 43.06,
    "ma20": 42.35,
    "ma60": 40.58,
    "vMa5": 31145,
    "vMa10": 41194,
    "high20d": 44.6,
    "sparkline": [
      41.75,
      43.3,
      43.7,
      43.8,
      43.8,
      43.25,
      44.4,
      42.65,
      41.75,
      42.15
    ],
    "high5d": 44.6,
    "high10d": 44.6
  },
  {
    "code": "2610",
    "name": "長榮航",
    "categories": [],
    "price": 20.25,
    "prevClose": 20.25,
    "open": 20.25,
    "high": 20.4,
    "low": 20.1,
    "volume": 25503,
    "ma5": 21.12,
    "ma10": 21.72,
    "ma20": 21.42,
    "ma60": 21.04,
    "vMa5": 52427,
    "vMa10": 48000,
    "high20d": 22.85,
    "sparkline": [
      21.7,
      22.4,
      22.45,
      22.45,
      22.6,
      22.15,
      22.5,
      20.45,
      20.25,
      20.25
    ],
    "high5d": 22.7,
    "high10d": 22.85
  },
  {
    "code": "9910",
    "name": "豐泰",
    "categories": [],
    "price": 71.0,
    "prevClose": 71.3,
    "open": 71.9,
    "high": 73.2,
    "low": 70.5,
    "volume": 1492,
    "ma5": 70.34,
    "ma10": 69.25,
    "ma20": 68.91,
    "ma60": 71.79,
    "vMa5": 1240,
    "vMa10": 1348,
    "high20d": 73.2,
    "sparkline": [
      70.4,
      68.4,
      67.2,
      67.4,
      67.4,
      69.7,
      69.5,
      70.2,
      71.3,
      71.0
    ],
    "high5d": 73.2,
    "high10d": 73.2
  },
  {
    "code": "2912",
    "name": "統一超",
    "categories": [],
    "price": 219.5,
    "prevClose": 219.0,
    "open": 219.5,
    "high": 221.0,
    "low": 219.0,
    "volume": 1161,
    "ma5": 219.8,
    "ma10": 221.65,
    "ma20": 231.35,
    "ma60": 228.98,
    "vMa5": 2009,
    "vMa10": 3293,
    "high20d": 249.0,
    "sparkline": [
      230.0,
      224.0,
      220.5,
      221.5,
      221.5,
      220.0,
      221.0,
      219.5,
      219.0,
      219.5
    ],
    "high5d": 224.0,
    "high10d": 235.0
  },
  {
    "code": "1590",
    "name": "亞德客-KY",
    "categories": [],
    "price": 1595.0,
    "prevClose": 1560.0,
    "open": 1530.0,
    "high": 1615.0,
    "low": 1530.0,
    "volume": 560,
    "ma5": 1566.0,
    "ma10": 1484.5,
    "ma20": 1427.25,
    "ma60": 1378.75,
    "vMa5": 891,
    "vMa10": 1067,
    "high20d": 1615.0,
    "sparkline": [
      1340.0,
      1325.0,
      1415.0,
      1425.0,
      1510.0,
      1560.0,
      1545.0,
      1570.0,
      1560.0,
      1595.0
    ],
    "high5d": 1615.0,
    "high10d": 1615.0
  },
  {
    "code": "2207",
    "name": "和泰車",
    "categories": [],
    "price": 504.0,
    "prevClose": 511.0,
    "open": 513.0,
    "high": 516.0,
    "low": 504.0,
    "volume": 270,
    "ma5": 512.2,
    "ma10": 521.8,
    "ma20": 508.68,
    "ma60": 485.71,
    "vMa5": 264,
    "vMa10": 573,
    "high20d": 573.0,
    "sparkline": [
      551.0,
      558.0,
      522.0,
      517.0,
      509.0,
      516.0,
      516.0,
      514.0,
      511.0,
      504.0
    ],
    "high5d": 524.0,
    "high10d": 573.0
  },
  {
    "code": "6415",
    "name": "矽力*-KY",
    "categories": [],
    "price": 449.0,
    "prevClose": 466.5,
    "open": 466.0,
    "high": 472.0,
    "low": 447.0,
    "volume": 4078,
    "ma5": 453.4,
    "ma10": 434.9,
    "ma20": 440.02,
    "ma60": 529.21,
    "vMa5": 3534,
    "vMa10": 4405,
    "high20d": 499.0,
    "sparkline": [
      375.5,
      413.0,
      424.5,
      424.0,
      445.0,
      445.0,
      441.5,
      465.0,
      466.5,
      449.0
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
    "price": 5730.0,
    "prevClose": 5535.0,
    "open": 5500.0,
    "high": 5730.0,
    "low": 5480.0,
    "volume": 1468,
    "ma5": 5420.0,
    "ma10": 5152.5,
    "ma20": 4926.75,
    "ma60": 5114.83,
    "vMa5": 1802,
    "vMa10": 2461,
    "high20d": 5730.0,
    "sparkline": [
      4315.0,
      4745.0,
      4980.0,
      5140.0,
      5245.0,
      5305.0,
      5240.0,
      5290.0,
      5535.0,
      5730.0
    ],
    "high5d": 5730.0,
    "high10d": 5730.0
  },
  {
    "code": "2345",
    "name": "智邦",
    "categories": [
      "0050"
    ],
    "price": 2215.0,
    "prevClose": 2135.0,
    "open": 2140.0,
    "high": 2255.0,
    "low": 2125.0,
    "volume": 2760,
    "ma5": 2228.0,
    "ma10": 2224.0,
    "ma20": 2199.0,
    "ma60": 2380.42,
    "vMa5": 3296,
    "vMa10": 3136,
    "high20d": 2595.0,
    "sparkline": [
      1935.0,
      2125.0,
      2335.0,
      2320.0,
      2385.0,
      2410.0,
      2215.0,
      2165.0,
      2135.0,
      2215.0
    ],
    "high5d": 2595.0,
    "high10d": 2595.0
  },
  {
    "code": "3017",
    "name": "奇鋐",
    "categories": [
      "0050"
    ],
    "price": 2910.0,
    "prevClose": 2760.0,
    "open": 2765.0,
    "high": 2915.0,
    "low": 2755.0,
    "volume": 3904,
    "ma5": 2832.0,
    "ma10": 2647.0,
    "ma20": 2458.5,
    "ma60": 2482.33,
    "vMa5": 4454,
    "vMa10": 4339,
    "high20d": 2965.0,
    "sparkline": [
      2110.0,
      2320.0,
      2550.0,
      2600.0,
      2730.0,
      2940.0,
      2785.0,
      2765.0,
      2760.0,
      2910.0
    ],
    "high5d": 2965.0,
    "high10d": 2965.0
  },
  {
    "code": "2360",
    "name": "致茂",
    "categories": [
      "0050"
    ],
    "price": 2195.0,
    "prevClose": 2080.0,
    "open": 2110.0,
    "high": 2230.0,
    "low": 2095.0,
    "volume": 2496,
    "ma5": 2062.0,
    "ma10": 2009.0,
    "ma20": 2000.75,
    "ma60": 2164.08,
    "vMa5": 2335,
    "vMa10": 3694,
    "high20d": 2230.0,
    "sparkline": [
      1910.0,
      2100.0,
      1960.0,
      1925.0,
      1885.0,
      1975.0,
      2030.0,
      2030.0,
      2080.0,
      2195.0
    ],
    "high5d": 2230.0,
    "high10d": 2230.0
  },
  {
    "code": "2059",
    "name": "川湖",
    "categories": [
      "0050"
    ],
    "price": 12045.0,
    "prevClose": 12315.0,
    "open": 12250.0,
    "high": 12295.0,
    "low": 11790.0,
    "volume": 311,
    "ma5": 11495.0,
    "ma10": 10006.5,
    "ma20": 8963.25,
    "ma60": 7414.42,
    "vMa5": 533,
    "vMa10": 565,
    "high20d": 12540.0,
    "sparkline": [
      7140.0,
      7850.0,
      8635.0,
      9495.0,
      9470.0,
      10100.0,
      11110.0,
      11905.0,
      12315.0,
      12045.0
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
    "price": 136.0,
    "prevClose": 136.0,
    "open": 137.0,
    "high": 137.0,
    "low": 135.5,
    "volume": 8779,
    "ma5": 136.6,
    "ma10": 137.55,
    "ma20": 138.25,
    "ma60": 139.63,
    "vMa5": 8157,
    "vMa10": 11841,
    "high20d": 142.5,
    "sparkline": [
      140.5,
      139.5,
      139.0,
      136.5,
      137.0,
      137.0,
      137.5,
      136.5,
      136.0,
      136.0
    ],
    "high5d": 138.0,
    "high10d": 141.0
  },
  {
    "code": "3665",
    "name": "貿聯-KY",
    "categories": [
      "0050"
    ],
    "price": 2155.0,
    "prevClose": 2200.0,
    "open": 2195.0,
    "high": 2195.0,
    "low": 2130.0,
    "volume": 2888,
    "ma5": 2223.0,
    "ma10": 2187.5,
    "ma20": 2123.75,
    "ma60": 2082.08,
    "vMa5": 4090,
    "vMa10": 3910,
    "high20d": 2555.0,
    "sparkline": [
      1910.0,
      2100.0,
      2095.0,
      2300.0,
      2355.0,
      2370.0,
      2200.0,
      2190.0,
      2200.0,
      2155.0
    ],
    "high5d": 2555.0,
    "high10d": 2555.0
  },
  {
    "code": "4958",
    "name": "臻鼎-KY",
    "categories": [
      "0050",
      "Top100"
    ],
    "price": 471.5,
    "prevClose": 490.0,
    "open": 485.0,
    "high": 486.0,
    "low": 468.5,
    "volume": 51183,
    "ma5": 477.4,
    "ma10": 453.0,
    "ma20": 473.3,
    "ma60": 532.63,
    "vMa5": 40022,
    "vMa10": 39126,
    "high20d": 612.0,
    "sparkline": [
      376.0,
      413.5,
      421.5,
      444.0,
      488.0,
      482.0,
      473.0,
      470.5,
      490.0,
      471.5
    ],
    "high5d": 502.0,
    "high10d": 502.0
  },
  {
    "code": "7769",
    "name": "鴻勁",
    "categories": [
      "0050"
    ],
    "price": 6480.0,
    "prevClose": 6350.0,
    "open": 6380.0,
    "high": 6600.0,
    "low": 6380.0,
    "volume": 362,
    "ma5": 6381.0,
    "ma10": 6285.0,
    "ma20": 6204.0,
    "ma60": 6773.25,
    "vMa5": 458,
    "vMa10": 728,
    "high20d": 6730.0,
    "sparkline": [
      5620.0,
      6180.0,
      6425.0,
      6190.0,
      6530.0,
      6475.0,
      6320.0,
      6280.0,
      6350.0,
      6480.0
    ],
    "high5d": 6720.0,
    "high10d": 6720.0
  },
  {
    "code": "3653",
    "name": "健策",
    "categories": [
      "0050"
    ],
    "price": 4470.0,
    "prevClose": 4065.0,
    "open": 4125.0,
    "high": 4470.0,
    "low": 4125.0,
    "volume": 700,
    "ma5": 4300.0,
    "ma10": 4033.5,
    "ma20": 3725.25,
    "ma60": 3617.25,
    "vMa5": 1331,
    "vMa10": 1605,
    "high20d": 4600.0,
    "sparkline": [
      3135.0,
      3445.0,
      3770.0,
      4145.0,
      4340.0,
      4450.0,
      4380.0,
      4135.0,
      4065.0,
      4470.0
    ],
    "high5d": 4600.0,
    "high10d": 4600.0
  },
  {
    "code": "2368",
    "name": "金像電",
    "categories": [
      "0050",
      "SitcaBuy"
    ],
    "price": 1000.0,
    "prevClose": 964.0,
    "open": 1015.0,
    "high": 1045.0,
    "low": 964.0,
    "volume": 19420,
    "ma5": 971.4,
    "ma10": 908.0,
    "ma20": 906.7,
    "ma60": 1150.65,
    "vMa5": 14770,
    "vMa10": 11711,
    "high20d": 1045.0,
    "sparkline": [
      721.0,
      793.0,
      872.0,
      897.0,
      940.0,
      985.0,
      982.0,
      926.0,
      964.0,
      1000.0
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
    "price": 101.0,
    "prevClose": 101.0,
    "open": 100.5,
    "high": 102.0,
    "low": 100.5,
    "volume": 4753,
    "ma5": 101.7,
    "ma10": 102.45,
    "ma20": 103.3,
    "ma60": 102.21,
    "vMa5": 4803,
    "vMa10": 8465,
    "high20d": 108.5,
    "sparkline": [
      105.5,
      105.0,
      103.5,
      101.0,
      101.0,
      102.0,
      103.0,
      101.5,
      101.0,
      101.0
    ],
    "high5d": 104.0,
    "high10d": 106.5
  },
  {
    "code": "3045",
    "name": "台灣大",
    "categories": [
      "0050"
    ],
    "price": 109.5,
    "prevClose": 109.5,
    "open": 109.5,
    "high": 110.0,
    "low": 109.0,
    "volume": 6649,
    "ma5": 110.3,
    "ma10": 111.15,
    "ma20": 111.8,
    "ma60": 114.16,
    "vMa5": 8468,
    "vMa10": 10213,
    "high20d": 115.0,
    "sparkline": [
      114.0,
      112.5,
      112.0,
      111.0,
      110.5,
      110.5,
      111.5,
      110.5,
      109.5,
      109.5
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
    "price": 9.94,
    "prevClose": 9.9,
    "open": 9.96,
    "high": 10.12,
    "low": 9.96,
    "volume": 318910,
    "ma5": 9.86,
    "ma10": 9.44,
    "ma20": 9.59,
    "ma60": 10.26,
    "vMa5": 186756,
    "vMa10": 280883,
    "high20d": 10.37,
    "sparkline": [
      8.46,
      8.47,
      9.25,
      9.39,
      9.54,
      9.81,
      9.91,
      9.72,
      9.9,
      9.94
    ],
    "high5d": 10.12,
    "high10d": 10.12
  },
  {
    "code": "00685L",
    "name": "群益臺灣加權正2",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 11.42,
    "prevClose": 11.37,
    "open": 11.58,
    "high": 11.65,
    "low": 11.46,
    "volume": 205715,
    "ma5": 11.19,
    "ma10": 10.62,
    "ma20": 10.87,
    "ma60": 11.64,
    "vMa5": 217069,
    "vMa10": 318054,
    "high20d": 12.21,
    "sparkline": [
      9.22,
      9.16,
      10.83,
      10.56,
      10.49,
      11.12,
      11.05,
      11.01,
      11.37,
      11.42
    ],
    "high5d": 11.65,
    "high10d": 11.65
  },
  {
    "code": "00631L",
    "name": "元大台灣50正2",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 34.87,
    "prevClose": 34.7,
    "open": 35.08,
    "high": 35.49,
    "low": 34.94,
    "volume": 173903,
    "ma5": 34.25,
    "ma10": 32.66,
    "ma20": 33.35,
    "ma60": 35.36,
    "vMa5": 176732,
    "vMa10": 283811,
    "high20d": 37.32,
    "sparkline": [
      28.53,
      28.38,
      33.7,
      32.62,
      32.15,
      34.15,
      33.85,
      33.68,
      34.7,
      34.87
    ],
    "high5d": 35.49,
    "high10d": 35.49
  },
  {
    "code": "2324",
    "name": "仁寶",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 39.9,
    "prevClose": 36.3,
    "open": 36.75,
    "high": 39.9,
    "low": 36.6,
    "volume": 170434,
    "ma5": 37.27,
    "ma10": 36.64,
    "ma20": 36.28,
    "ma60": 36.41,
    "vMa5": 56897,
    "vMa10": 55834,
    "high20d": 39.9,
    "sparkline": [
      33.75,
      36.0,
      36.35,
      37.0,
      36.95,
      37.3,
      36.55,
      36.3,
      36.3,
      39.9
    ],
    "high5d": 39.9,
    "high10d": 39.9
  },
  {
    "code": "00981A",
    "name": "主動統一台股增長",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 28.73,
    "prevClose": 28.53,
    "open": 28.89,
    "high": 29.36,
    "low": 28.89,
    "volume": 168944,
    "ma5": 28.52,
    "ma10": 27.1,
    "ma20": 27.36,
    "ma60": 29.56,
    "vMa5": 159332,
    "vMa10": 310192,
    "high20d": 29.36,
    "sparkline": [
      23.85,
      23.76,
      26.13,
      27.11,
      27.58,
      28.46,
      28.84,
      28.03,
      28.53,
      28.73
    ],
    "high5d": 29.36,
    "high10d": 29.36
  },
  {
    "code": "00632R",
    "name": "元大台灣50反1",
    "categories": [
      "Top100"
    ],
    "price": 10.16,
    "prevClose": 10.17,
    "open": 10.12,
    "high": 10.15,
    "low": 10.05,
    "volume": 129348,
    "ma5": 10.26,
    "ma10": 10.59,
    "ma20": 10.57,
    "ma60": 10.44,
    "vMa5": 142589,
    "vMa10": 237619,
    "high20d": 11.67,
    "sparkline": [
      11.43,
      11.49,
      10.44,
      10.6,
      10.63,
      10.3,
      10.33,
      10.35,
      10.17,
      10.16
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
    "prevClose": 132.5,
    "open": 135.0,
    "high": 140.0,
    "low": 134.5,
    "volume": 103745,
    "ma5": 130.6,
    "ma10": 119.33,
    "ma20": 121.22,
    "ma60": 142.71,
    "vMa5": 122905,
    "vMa10": 105852,
    "high20d": 144.0,
    "sparkline": [
      91.8,
      100.5,
      110.5,
      120.0,
      117.5,
      129.0,
      121.5,
      133.5,
      132.5,
      136.5
    ],
    "high5d": 140.0,
    "high10d": 140.0
  },
  {
    "code": "1605",
    "name": "華新",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 40.0,
    "prevClose": 38.3,
    "open": 38.5,
    "high": 41.0,
    "low": 38.3,
    "volume": 93858,
    "ma5": 37.02,
    "ma10": 34.65,
    "ma20": 33.56,
    "ma60": 35.85,
    "vMa5": 49540,
    "vMa10": 37967,
    "high20d": 41.0,
    "sparkline": [
      28.6,
      31.45,
      32.8,
      33.75,
      34.85,
      34.25,
      34.55,
      38.0,
      38.3,
      40.0
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
    "price": 92.2,
    "prevClose": 99.0,
    "open": 96.6,
    "high": 97.4,
    "low": 92.0,
    "volume": 85273,
    "ma5": 91.46,
    "ma10": 84.25,
    "ma20": 90.77,
    "ma60": 96.73,
    "vMa5": 57398,
    "vMa10": 46753,
    "high20d": 125.0,
    "sparkline": [
      66.0,
      72.6,
      77.6,
      82.5,
      86.5,
      86.9,
      86.3,
      92.9,
      99.0,
      92.2
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
    "price": 15.16,
    "prevClose": 15.12,
    "open": 15.21,
    "high": 15.28,
    "low": 15.17,
    "volume": 79905,
    "ma5": 15.02,
    "ma10": 14.57,
    "ma20": 14.65,
    "ma60": 14.98,
    "vMa5": 82498,
    "vMa10": 148470,
    "high20d": 15.36,
    "sparkline": [
      13.35,
      13.41,
      14.65,
      14.61,
      14.56,
      15.0,
      14.96,
      14.88,
      15.12,
      15.16
    ],
    "high5d": 15.28,
    "high10d": 15.28
  },
  {
    "code": "00405A",
    "name": "主動富邦台灣龍耀",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 8.15,
    "prevClose": 8.13,
    "open": 8.24,
    "high": 8.42,
    "low": 8.22,
    "volume": 77481,
    "ma5": 8.12,
    "ma10": 7.68,
    "ma20": 7.84,
    "ma60": 8.79,
    "vMa5": 70189,
    "vMa10": 106167,
    "high20d": 8.57,
    "sparkline": [
      6.7,
      6.68,
      7.3,
      7.66,
      7.9,
      8.05,
      8.25,
      8.02,
      8.13,
      8.15
    ],
    "high5d": 8.42,
    "high10d": 8.42
  },
  {
    "code": "00991A",
    "name": "主動復華未來50",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 17.52,
    "prevClose": 17.33,
    "open": 17.67,
    "high": 17.85,
    "low": 17.59,
    "volume": 72076,
    "ma5": 17.15,
    "ma10": 16.16,
    "ma20": 16.59,
    "ma60": 18.55,
    "vMa5": 94318,
    "vMa10": 213782,
    "high20d": 18.81,
    "sparkline": [
      14.07,
      14.01,
      15.41,
      15.98,
      16.33,
      16.89,
      17.16,
      16.86,
      17.33,
      17.52
    ],
    "high5d": 17.85,
    "high10d": 17.85
  },
  {
    "code": "00407A",
    "name": "主動凱基台灣",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 9.55,
    "prevClose": 9.49,
    "open": 9.56,
    "high": 9.68,
    "low": 9.56,
    "volume": 67695,
    "ma5": 9.41,
    "ma10": 8.89,
    "ma20": 8.89,
    "ma60": 9.33,
    "vMa5": 54928,
    "vMa10": 57737,
    "high20d": 9.68,
    "sparkline": [
      7.79,
      7.82,
      8.48,
      8.74,
      8.99,
      9.28,
      9.45,
      9.28,
      9.49,
      9.55
    ],
    "high5d": 9.68,
    "high10d": 9.68
  },
  {
    "code": "0050",
    "name": "元大台灣50",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 104.6,
    "prevClose": 104.25,
    "open": 105.0,
    "high": 105.25,
    "low": 104.45,
    "volume": 64255,
    "ma5": 103.76,
    "ma10": 101.15,
    "ma20": 101.7,
    "ma60": 103.37,
    "vMa5": 69343,
    "vMa10": 139867,
    "high20d": 106.75,
    "sparkline": [
      93.7,
      93.5,
      102.85,
      102.0,
      100.65,
      103.8,
      103.3,
      102.85,
      104.25,
      104.6
    ],
    "high5d": 105.25,
    "high10d": 105.25
  },
  {
    "code": "2377",
    "name": "微星",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 169.0,
    "prevClose": 154.0,
    "open": 157.0,
    "high": 169.0,
    "low": 152.0,
    "volume": 45461,
    "ma5": 157.0,
    "ma10": 150.65,
    "ma20": 147.85,
    "ma60": 140.39,
    "vMa5": 17569,
    "vMa10": 16691,
    "high20d": 169.0,
    "sparkline": [
      136.0,
      142.0,
      143.0,
      149.5,
      151.0,
      154.0,
      153.0,
      155.0,
      154.0,
      169.0
    ],
    "high5d": 169.0,
    "high10d": 169.0
  },
  {
    "code": "00878",
    "name": "國泰永續高股息",
    "categories": [
      "Top100"
    ],
    "price": 33.47,
    "prevClose": 33.4,
    "open": 33.58,
    "high": 33.79,
    "low": 33.41,
    "volume": 45345,
    "ma5": 33.13,
    "ma10": 32.49,
    "ma20": 32.42,
    "ma60": 32.15,
    "vMa5": 46055,
    "vMa10": 49456,
    "high20d": 33.79,
    "sparkline": [
      30.91,
      30.75,
      32.43,
      32.57,
      32.57,
      33.15,
      32.84,
      32.81,
      33.4,
      33.47
    ],
    "high5d": 33.79,
    "high10d": 33.79
  },
  {
    "code": "1717",
    "name": "長興",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 78.6,
    "prevClose": 71.9,
    "open": 72.5,
    "high": 79.0,
    "low": 72.3,
    "volume": 44183,
    "ma5": 70.58,
    "ma10": 66.03,
    "ma20": 63.98,
    "ma60": 71.59,
    "vMa5": 17692,
    "vMa10": 13902,
    "high20d": 79.0,
    "sparkline": [
      55.7,
      59.9,
      61.7,
      63.6,
      66.5,
      66.2,
      66.2,
      70.0,
      71.9,
      78.6
    ],
    "high5d": 79.0,
    "high10d": 79.0
  },
  {
    "code": "00400A",
    "name": "主動國泰動能高息",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 14.0,
    "prevClose": 13.94,
    "open": 14.1,
    "high": 14.37,
    "low": 14.1,
    "volume": 43093,
    "ma5": 13.85,
    "ma10": 13.27,
    "ma20": 13.36,
    "ma60": 14.12,
    "vMa5": 31555,
    "vMa10": 47603,
    "high20d": 14.37,
    "sparkline": [
      11.88,
      11.83,
      12.94,
      13.25,
      13.57,
      13.69,
      13.89,
      13.74,
      13.94,
      14.0
    ],
    "high5d": 14.37,
    "high10d": 14.37
  },
  {
    "code": "1718",
    "name": "中纖",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 11.2,
    "prevClose": 10.2,
    "open": 10.3,
    "high": 11.2,
    "low": 10.3,
    "volume": 43165,
    "ma5": 10.35,
    "ma10": 9.87,
    "ma20": 10.85,
    "ma60": 10.48,
    "vMa5": 38674,
    "vMa10": 39245,
    "high20d": 14.95,
    "sparkline": [
      8.64,
      8.73,
      9.6,
      9.99,
      9.99,
      10.2,
      9.91,
      10.25,
      10.2,
      11.2
    ],
    "high5d": 11.2,
    "high10d": 11.2
  },
  {
    "code": "00406A",
    "name": "主動中信台灣收益",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 9.4,
    "prevClose": 9.37,
    "open": 9.43,
    "high": 9.53,
    "low": 9.43,
    "volume": 42602,
    "ma5": 9.32,
    "ma10": 8.91,
    "ma20": 9.05,
    "ma60": 9.64,
    "vMa5": 39750,
    "vMa10": 66927,
    "high20d": 9.8,
    "sparkline": [
      8.03,
      8.06,
      8.59,
      8.81,
      8.97,
      9.27,
      9.35,
      9.23,
      9.37,
      9.4
    ],
    "high5d": 9.53,
    "high10d": 9.53
  },
  {
    "code": "00919",
    "name": "群益台灣精選高息",
    "categories": [
      "Top100"
    ],
    "price": 30.12,
    "prevClose": 30.03,
    "open": 30.33,
    "high": 30.5,
    "low": 30.12,
    "volume": 42277,
    "ma5": 29.89,
    "ma10": 29.47,
    "ma20": 29.37,
    "ma60": 29.43,
    "vMa5": 45125,
    "vMa10": 56166,
    "high20d": 30.5,
    "sparkline": [
      28.5,
      28.25,
      29.57,
      29.45,
      29.51,
      29.94,
      29.6,
      29.74,
      30.03,
      30.12
    ],
    "high5d": 30.5,
    "high10d": 30.5
  },
  {
    "code": "1802",
    "name": "台玻",
    "categories": [
      "Top100"
    ],
    "price": 57.6,
    "prevClose": 55.9,
    "open": 56.8,
    "high": 59.8,
    "low": 56.7,
    "volume": 37867,
    "ma5": 55.18,
    "ma10": 51.79,
    "ma20": 52.46,
    "ma60": 62.86,
    "vMa5": 28809,
    "vMa10": 30911,
    "high20d": 63.9,
    "sparkline": [
      42.6,
      45.7,
      47.55,
      52.3,
      53.9,
      54.6,
      53.1,
      54.7,
      55.9,
      57.6
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
    "price": 96.9,
    "prevClose": 100.0,
    "open": 100.0,
    "high": 101.5,
    "low": 96.6,
    "volume": 36751,
    "ma5": 93.9,
    "ma10": 87.82,
    "ma20": 85.83,
    "ma60": 89.15,
    "vMa5": 32200,
    "vMa10": 23369,
    "high20d": 101.5,
    "sparkline": [
      75.6,
      80.3,
      81.4,
      85.2,
      86.2,
      89.0,
      91.2,
      92.4,
      100.0,
      96.9
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
    "price": 52.3,
    "prevClose": 52.45,
    "open": 52.5,
    "high": 53.05,
    "low": 52.5,
    "volume": 36213,
    "ma5": 51.71,
    "ma10": 50.15,
    "ma20": 50.37,
    "ma60": 50.83,
    "vMa5": 32399,
    "vMa10": 45775,
    "high20d": 53.05,
    "sparkline": [
      46.73,
      46.29,
      49.48,
      49.82,
      50.6,
      51.45,
      51.3,
      51.05,
      52.45,
      52.3
    ],
    "high5d": 53.05,
    "high10d": 53.05
  },
  {
    "code": "00988A",
    "name": "主動統一全球創新",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 16.55,
    "prevClose": 16.67,
    "open": 16.69,
    "high": 16.79,
    "low": 16.6,
    "volume": 35515,
    "ma5": 16.68,
    "ma10": 16.05,
    "ma20": 16.65,
    "ma60": 19.66,
    "vMa5": 39528,
    "vMa10": 51025,
    "high20d": 18.33,
    "sparkline": [
      14.35,
      14.16,
      16.26,
      16.14,
      16.23,
      17.19,
      16.6,
      16.39,
      16.67,
      16.55
    ],
    "high5d": 16.79,
    "high10d": 17.19
  },
  {
    "code": "00881",
    "name": "國泰台灣科技龍頭",
    "categories": [
      "Top100"
    ],
    "price": 53.5,
    "prevClose": 53.2,
    "open": 53.85,
    "high": 54.15,
    "low": 53.6,
    "volume": 35466,
    "ma5": 52.87,
    "ma10": 50.88,
    "ma20": 50.97,
    "ma60": 52.88,
    "vMa5": 35617,
    "vMa10": 33353,
    "high20d": 54.15,
    "sparkline": [
      46.07,
      46.04,
      50.6,
      50.85,
      50.9,
      52.65,
      52.75,
      52.25,
      53.2,
      53.5
    ],
    "high5d": 54.15,
    "high10d": 54.15
  },
  {
    "code": "00992A",
    "name": "主動群益科技創新",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 16.96,
    "prevClose": 16.9,
    "open": 17.02,
    "high": 17.3,
    "low": 17.02,
    "volume": 34459,
    "ma5": 16.79,
    "ma10": 15.76,
    "ma20": 15.81,
    "ma60": 17.4,
    "vMa5": 36233,
    "vMa10": 53940,
    "high20d": 17.3,
    "sparkline": [
      13.59,
      13.48,
      14.82,
      15.59,
      16.18,
      16.55,
      16.93,
      16.63,
      16.9,
      16.96
    ],
    "high5d": 17.3,
    "high10d": 17.3
  },
  {
    "code": "8039",
    "name": "台虹",
    "categories": [
      "Top100"
    ],
    "price": 227.0,
    "prevClose": 216.0,
    "open": 215.0,
    "high": 231.0,
    "low": 210.5,
    "volume": 30141,
    "ma5": 224.5,
    "ma10": 206.45,
    "ma20": 208.82,
    "ma60": 168.28,
    "vMa5": 24743,
    "vMa10": 24901,
    "high20d": 257.5,
    "sparkline": [
      158.0,
      173.5,
      190.5,
      200.0,
      220.0,
      216.0,
      237.5,
      226.0,
      216.0,
      227.0
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
    "price": 196.5,
    "prevClose": 187.5,
    "open": 185.5,
    "high": 205.0,
    "low": 185.5,
    "volume": 28585,
    "ma5": 183.1,
    "ma10": 165.2,
    "ma20": 153.47,
    "ma60": 161.11,
    "vMa5": 24566,
    "vMa10": 16834,
    "high20d": 205.0,
    "sparkline": [
      122.5,
      134.5,
      147.5,
      162.0,
      170.0,
      178.0,
      173.5,
      180.0,
      187.5,
      196.5
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
    "price": 82.5,
    "prevClose": 87.1,
    "open": 90.6,
    "high": 92.3,
    "low": 82.5,
    "volume": 84486,
    "ma5": 78.56,
    "ma10": 75.28,
    "ma20": 69.97,
    "ma60": 65.35,
    "vMa5": 21974,
    "vMa10": 10987,
    "high20d": 92.3,
    "sparkline": [
      72.0,
      72.0,
      72.0,
      72.0,
      72.0,
      72.0,
      72.0,
      79.2,
      87.1,
      82.5
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
    "price": 103.0,
    "prevClose": 94.0,
    "open": 94.3,
    "high": 103.0,
    "low": 94.1,
    "volume": 55472,
    "ma5": 99.8,
    "ma10": 96.17,
    "ma20": 111.31,
    "ma60": 113.48,
    "vMa5": 33093,
    "vMa10": 23454,
    "high20d": 184.0,
    "sparkline": [
      84.7,
      89.0,
      88.1,
      96.9,
      104.0,
      108.0,
      101.0,
      93.0,
      94.0,
      103.0
    ],
    "high5d": 108.0,
    "high10d": 108.0
  },
  {
    "code": "00937B",
    "name": "群益ESG投等債20+",
    "categories": [
      "Top100"
    ],
    "price": 14.56,
    "prevClose": 14.55,
    "open": 14.56,
    "high": 14.57,
    "low": 14.54,
    "volume": 38104,
    "ma5": 14.62,
    "ma10": 14.61,
    "ma20": 14.67,
    "ma60": 14.82,
    "vMa5": 41811,
    "vMa10": 40878,
    "high20d": 14.84,
    "sparkline": [
      14.51,
      14.62,
      14.57,
      14.62,
      14.73,
      14.73,
      14.61,
      14.65,
      14.55,
      14.56
    ],
    "high5d": 14.74,
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
    "price": 400.0,
    "prevClose": 371.0,
    "open": 372.0,
    "high": 408.0,
    "low": 370.5,
    "volume": 29907,
    "ma5": 380.9,
    "ma10": 349.6,
    "ma20": 344.23,
    "ma60": 429.88,
    "vMa5": 27185,
    "vMa10": 21608,
    "high20d": 408.0,
    "sparkline": [
      268.0,
      294.5,
      311.0,
      342.0,
      376.0,
      382.0,
      366.0,
      385.5,
      371.0,
      400.0
    ],
    "high5d": 408.0,
    "high10d": 408.0
  },
  {
    "code": "6147",
    "name": "頎邦",
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "price": 156.5,
    "prevClose": 161.5,
    "open": 160.5,
    "high": 163.0,
    "low": 156.0,
    "volume": 26263,
    "ma5": 153.9,
    "ma10": 145.65,
    "ma20": 155.7,
    "ma60": 209.24,
    "vMa5": 24913,
    "vMa10": 27605,
    "high20d": 204.5,
    "sparkline": [
      118.5,
      130.0,
      135.5,
      144.5,
      158.5,
      151.0,
      146.5,
      154.0,
      161.5,
      156.5
    ],
    "high5d": 166.0,
    "high10d": 166.0
  },
  {
    "code": "6173",
    "name": "信昌電",
    "categories": [
      "Top100"
    ],
    "price": 203.5,
    "prevClose": 185.0,
    "open": 186.5,
    "high": 203.5,
    "low": 182.5,
    "volume": 26043,
    "ma5": 177.2,
    "ma10": 165.35,
    "ma20": 171.5,
    "ma60": 230.66,
    "vMa5": 12118,
    "vMa10": 8098,
    "high20d": 233.5,
    "sparkline": [
      132.5,
      145.5,
      160.0,
      164.5,
      165.0,
      171.0,
      158.0,
      168.5,
      185.0,
      203.5
    ],
    "high5d": 203.5,
    "high10d": 203.5
  },
  {
    "code": "8043",
    "name": "蜜望實",
    "categories": [
      "Top100"
    ],
    "price": 147.5,
    "prevClose": 147.5,
    "open": 147.5,
    "high": 152.0,
    "low": 142.5,
    "volume": 19965,
    "ma5": 138.1,
    "ma10": 134.4,
    "ma20": 137.2,
    "ma60": 161.5,
    "vMa5": 8354,
    "vMa10": 6951,
    "high20d": 162.0,
    "sparkline": [
      115.0,
      126.5,
      139.0,
      137.5,
      135.5,
      135.0,
      126.0,
      134.5,
      147.5,
      147.5
    ],
    "high5d": 152.0,
    "high10d": 152.0
  },
  {
    "code": "5328",
    "name": "華容",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 67.2,
    "prevClose": 66.0,
    "open": 66.7,
    "high": 67.2,
    "low": 65.0,
    "volume": 18994,
    "ma5": 63.88,
    "ma10": 64.12,
    "ma20": 63.55,
    "ma60": 56.9,
    "vMa5": 16515,
    "vMa10": 25292,
    "high20d": 72.5,
    "sparkline": [
      58.3,
      63.8,
      67.4,
      66.4,
      65.9,
      62.9,
      60.8,
      62.5,
      66.0,
      67.2
    ],
    "high5d": 67.2,
    "high10d": 70.0
  },
  {
    "code": "1785",
    "name": "光洋科",
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "price": 106.5,
    "prevClose": 107.0,
    "open": 107.0,
    "high": 110.0,
    "low": 103.0,
    "volume": 17911,
    "ma5": 112.3,
    "ma10": 108.03,
    "ma20": 107.24,
    "ma60": 130.82,
    "vMa5": 8516,
    "vMa10": 8304,
    "high20d": 119.5,
    "sparkline": [
      90.4,
      99.4,
      106.5,
      111.0,
      111.5,
      115.0,
      114.5,
      118.5,
      107.0,
      106.5
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
    "price": 561.0,
    "prevClose": 510.0,
    "open": 529.0,
    "high": 561.0,
    "low": 529.0,
    "volume": 17061,
    "ma5": 516.6,
    "ma10": 464.6,
    "ma20": 428.2,
    "ma60": 494.52,
    "vMa5": 10357,
    "vMa10": 6909,
    "high20d": 561.0,
    "sparkline": [
      346.5,
      370.0,
      407.0,
      447.5,
      492.0,
      488.0,
      488.0,
      536.0,
      510.0,
      561.0
    ],
    "high5d": 561.0,
    "high10d": 561.0
  },
  {
    "code": "5347",
    "name": "世界",
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "price": 159.5,
    "prevClose": 158.0,
    "open": 160.5,
    "high": 160.5,
    "low": 156.5,
    "volume": 15105,
    "ma5": 154.0,
    "ma10": 152.2,
    "ma20": 156.03,
    "ma60": 170.12,
    "vMa5": 25194,
    "vMa10": 29004,
    "high20d": 192.0,
    "sparkline": [
      138.0,
      151.5,
      151.0,
      154.5,
      157.0,
      151.5,
      143.5,
      157.5,
      158.0,
      159.5
    ],
    "high5d": 160.5,
    "high10d": 168.0
  },
  {
    "code": "4931",
    "name": "新盛力",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 267.0,
    "prevClose": 255.0,
    "open": 255.0,
    "high": 268.0,
    "low": 250.5,
    "volume": 15912,
    "ma5": 239.0,
    "ma10": 212.0,
    "ma20": 206.95,
    "ma60": 229.28,
    "vMa5": 12339,
    "vMa10": 7983,
    "high20d": 268.0,
    "sparkline": [
      161.5,
      177.5,
      191.0,
      196.0,
      199.0,
      218.5,
      216.5,
      238.0,
      255.0,
      267.0
    ],
    "high5d": 268.0,
    "high10d": 268.0
  },
  {
    "code": "5475",
    "name": "德宏",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 148.5,
    "prevClose": 135.0,
    "open": 136.0,
    "high": 148.5,
    "low": 136.0,
    "volume": 15152,
    "ma5": 131.0,
    "ma10": 124.75,
    "ma20": 133.62,
    "ma60": 212.11,
    "vMa5": 9311,
    "vMa10": 6490,
    "high20d": 179.0,
    "sparkline": [
      101.0,
      111.0,
      122.0,
      134.0,
      124.5,
      123.0,
      123.5,
      125.0,
      135.0,
      148.5
    ],
    "high5d": 148.5,
    "high10d": 148.5
  },
  {
    "code": "3211",
    "name": "順達",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 412.0,
    "prevClose": 400.0,
    "open": 400.5,
    "high": 418.0,
    "low": 393.0,
    "volume": 13478,
    "ma5": 375.4,
    "ma10": 341.3,
    "ma20": 357.27,
    "ma60": 400.44,
    "vMa5": 13668,
    "vMa10": 10469,
    "high20d": 439.0,
    "sparkline": [
      285.5,
      292.0,
      309.0,
      325.0,
      324.5,
      356.5,
      338.5,
      370.0,
      400.0,
      412.0
    ],
    "high5d": 418.0,
    "high10d": 418.0
  },
  {
    "code": "00981B",
    "name": "第一金優選非投債",
    "categories": [
      "Top100"
    ],
    "price": 9.33,
    "prevClose": 9.34,
    "open": 9.35,
    "high": 9.35,
    "low": 9.32,
    "volume": 11577,
    "ma5": 9.33,
    "ma10": 9.32,
    "ma20": 9.31,
    "ma60": 9.24,
    "vMa5": 10540,
    "vMa10": 11914,
    "high20d": 9.38,
    "sparkline": [
      9.25,
      9.3,
      9.28,
      9.34,
      9.34,
      9.33,
      9.32,
      9.34,
      9.34,
      9.33
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
    "price": 484.5,
    "prevClose": 481.0,
    "open": 486.0,
    "high": 500.0,
    "low": 460.0,
    "volume": 11329,
    "ma5": 476.7,
    "ma10": 434.1,
    "ma20": 414.55,
    "ma60": 535.78,
    "vMa5": 5369,
    "vMa10": 3103,
    "high20d": 522.0,
    "sparkline": [
      321.0,
      353.0,
      388.0,
      426.5,
      469.0,
      442.0,
      465.0,
      511.0,
      481.0,
      484.5
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
    "price": 418.5,
    "prevClose": 380.5,
    "open": 402.5,
    "high": 418.5,
    "low": 402.0,
    "volume": 10981,
    "ma5": 376.2,
    "ma10": 346.8,
    "ma20": 363.15,
    "ma60": 504.14,
    "vMa5": 25157,
    "vMa10": 20723,
    "high20d": 461.0,
    "sparkline": [
      271.0,
      298.0,
      327.5,
      341.0,
      349.5,
      384.0,
      352.0,
      346.0,
      380.5,
      418.5
    ],
    "high5d": 418.5,
    "high10d": 418.5
  },
  {
    "code": "3441",
    "name": "聯一光",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 87.2,
    "prevClose": 79.3,
    "open": 79.3,
    "high": 87.2,
    "low": 79.2,
    "volume": 10762,
    "ma5": 83.76,
    "ma10": 84.66,
    "ma20": 77.07,
    "ma60": 71.41,
    "vMa5": 10994,
    "vMa10": 21303,
    "high20d": 95.8,
    "sparkline": [
      76.4,
      84.0,
      92.4,
      89.6,
      85.4,
      88.4,
      84.4,
      79.5,
      79.3,
      87.2
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
    "price": 330.0,
    "prevClose": 334.0,
    "open": 332.0,
    "high": 338.0,
    "low": 324.0,
    "volume": 10566,
    "ma5": 324.7,
    "ma10": 307.95,
    "ma20": 333.98,
    "ma60": 297.57,
    "vMa5": 11341,
    "vMa10": 11578,
    "high20d": 418.5,
    "sparkline": [
      252.0,
      277.0,
      304.5,
      309.5,
      313.0,
      316.0,
      306.5,
      337.0,
      334.0,
      330.0
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
    "price": 10.09,
    "prevClose": 10.04,
    "open": 10.05,
    "high": 10.1,
    "low": 10.05,
    "volume": 9141,
    "ma5": 10.04,
    "ma10": 9.94,
    "ma20": 9.86,
    "ma60": 9.91,
    "vMa5": 5500,
    "vMa10": 3826,
    "high20d": 10.1,
    "sparkline": [
      9.75,
      9.8,
      9.8,
      9.88,
      9.99,
      10.02,
      10.05,
      10.0,
      10.04,
      10.09
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
    "price": 166.0,
    "prevClose": 165.0,
    "open": 165.0,
    "high": 167.0,
    "low": 160.0,
    "volume": 8709,
    "ma5": 179.9,
    "ma10": 185.25,
    "ma20": 185.03,
    "ma60": 200.95,
    "vMa5": 13987,
    "vMa10": 11695,
    "high20d": 208.5,
    "sparkline": [
      182.0,
      189.0,
      189.0,
      197.5,
      195.5,
      196.0,
      196.0,
      176.5,
      165.0,
      166.0
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
    "price": 122.0,
    "prevClose": 119.5,
    "open": 124.5,
    "high": 124.5,
    "low": 120.5,
    "volume": 8528,
    "ma5": 112.5,
    "ma10": 96.55,
    "ma20": 90.75,
    "ma60": 89.34,
    "vMa5": 34942,
    "vMa10": 24436,
    "high20d": 124.5,
    "sparkline": [
      66.1,
      72.7,
      79.9,
      87.8,
      96.5,
      103.0,
      104.0,
      114.0,
      119.5,
      122.0
    ],
    "high5d": 124.5,
    "high10d": 124.5
  },
  {
    "code": "00687B",
    "name": "國泰20年美債",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 27.46,
    "prevClose": 27.39,
    "open": 27.43,
    "high": 27.48,
    "low": 27.41,
    "volume": 8062,
    "ma5": 27.53,
    "ma10": 27.58,
    "ma20": 27.76,
    "ma60": 27.86,
    "vMa5": 10556,
    "vMa10": 16925,
    "high20d": 28.15,
    "sparkline": [
      27.6,
      27.73,
      27.51,
      27.54,
      27.76,
      27.76,
      27.49,
      27.57,
      27.39,
      27.46
    ],
    "high5d": 27.78,
    "high10d": 27.82
  },
  {
    "code": "3264",
    "name": "欣銓",
    "categories": [
      "Top100",
      "SitcaBuy"
    ],
    "price": 216.5,
    "prevClose": 219.5,
    "open": 221.0,
    "high": 225.5,
    "low": 216.0,
    "volume": 7612,
    "ma5": 215.5,
    "ma10": 199.85,
    "ma20": 203.03,
    "ma60": 219.2,
    "vMa5": 10331,
    "vMa10": 7765,
    "high20d": 243.5,
    "sparkline": [
      161.0,
      177.0,
      187.5,
      193.5,
      202.0,
      211.5,
      207.5,
      222.5,
      219.5,
      216.5
    ],
    "high5d": 228.0,
    "high10d": 228.0
  },
  {
    "code": "6265",
    "name": "方土昶",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 56.8,
    "prevClose": 56.1,
    "open": 56.7,
    "high": 59.0,
    "low": 56.6,
    "volume": 7491,
    "ma5": 55.76,
    "ma10": 50.52,
    "ma20": 48.6,
    "ma60": 52.34,
    "vMa5": 6558,
    "vMa10": 4950,
    "high20d": 59.0,
    "sparkline": [
      38.6,
      42.4,
      44.85,
      49.3,
      51.3,
      54.7,
      55.4,
      55.8,
      56.1,
      56.8
    ],
    "high5d": 59.0,
    "high10d": 59.0
  },
  {
    "code": "00679B",
    "name": "元大美債20年",
    "categories": [
      "Top100"
    ],
    "price": 26.39,
    "prevClose": 26.32,
    "open": 26.36,
    "high": 26.39,
    "low": 26.34,
    "volume": 7432,
    "ma5": 26.45,
    "ma10": 26.5,
    "ma20": 26.68,
    "ma60": 26.7,
    "vMa5": 13362,
    "vMa10": 20310,
    "high20d": 27.04,
    "sparkline": [
      26.51,
      26.68,
      26.42,
      26.45,
      26.67,
      26.66,
      26.41,
      26.49,
      26.32,
      26.39
    ],
    "high5d": 26.67,
    "high10d": 26.73
  },
  {
    "code": "5340",
    "name": "建榮",
    "categories": [
      "Top100"
    ],
    "price": 79.6,
    "prevClose": 74.0,
    "open": 76.1,
    "high": 81.4,
    "low": 75.4,
    "volume": 7347,
    "ma5": 73.66,
    "ma10": 69.6,
    "ma20": 69.51,
    "ma60": 85.2,
    "vMa5": 4065,
    "vMa10": 3344,
    "high20d": 81.4,
    "sparkline": [
      56.0,
      61.2,
      64.2,
      70.6,
      75.7,
      71.4,
      70.3,
      73.0,
      74.0,
      79.6
    ],
    "high5d": 81.4,
    "high10d": 81.4
  },
  {
    "code": "8050",
    "name": "廣積",
    "categories": [
      "Top100"
    ],
    "price": 58.8,
    "prevClose": 61.6,
    "open": 60.2,
    "high": 60.2,
    "low": 58.1,
    "volume": 7258,
    "ma5": 64.18,
    "ma10": 61.22,
    "ma20": 60.55,
    "ma60": 57.82,
    "vMa5": 11271,
    "vMa10": 7962,
    "high20d": 69.4,
    "sparkline": [
      54.8,
      54.6,
      58.0,
      59.0,
      64.9,
      63.1,
      69.0,
      68.4,
      61.6,
      58.8
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
    "price": 718.0,
    "prevClose": 683.0,
    "open": 685.0,
    "high": 735.0,
    "low": 682.0,
    "volume": 7040,
    "ma5": 697.6,
    "ma10": 650.4,
    "ma20": 618.94,
    "ma60": 716.06,
    "vMa5": 7007,
    "vMa10": 5248,
    "high20d": 757.0,
    "sparkline": [
      495.0,
      544.0,
      598.0,
      657.0,
      722.0,
      710.0,
      671.0,
      706.0,
      683.0,
      718.0
    ],
    "high5d": 757.0,
    "high10d": 757.0
  },
  {
    "code": "00989B",
    "name": "台新美國非投等債",
    "categories": [
      "Top100"
    ],
    "price": 10.29,
    "prevClose": 10.3,
    "open": 10.3,
    "high": 10.31,
    "low": 10.28,
    "volume": 7159,
    "ma5": 10.28,
    "ma10": 10.27,
    "ma20": 10.25,
    "ma60": 10.15,
    "vMa5": 5505,
    "vMa10": 4285,
    "high20d": 10.31,
    "sparkline": [
      10.23,
      10.26,
      10.24,
      10.28,
      10.27,
      10.26,
      10.26,
      10.28,
      10.3,
      10.29
    ],
    "high5d": 10.31,
    "high10d": 10.31
  },
  {
    "code": "6016",
    "name": "康和證",
    "categories": [
      "Top100"
    ],
    "price": 19.85,
    "prevClose": 18.65,
    "open": 18.7,
    "high": 20.1,
    "low": 18.7,
    "volume": 7012,
    "ma5": 19.4,
    "ma10": 19.82,
    "ma20": 20.59,
    "ma60": 23.57,
    "vMa5": 6249,
    "vMa10": 4741,
    "high20d": 22.93,
    "sparkline": [
      19.0,
      20.6,
      20.3,
      20.45,
      20.9,
      20.3,
      19.8,
      18.4,
      18.65,
      19.85
    ],
    "high5d": 20.65,
    "high10d": 21.25
  },
  {
    "code": "00933B",
    "name": "國泰10Y+金融債",
    "categories": [
      "Top100"
    ],
    "price": 15.91,
    "prevClose": 15.91,
    "open": 15.91,
    "high": 15.92,
    "low": 15.89,
    "volume": 6941,
    "ma5": 15.95,
    "ma10": 15.96,
    "ma20": 15.99,
    "ma60": 16.04,
    "vMa5": 7468,
    "vMa10": 7547,
    "high20d": 16.12,
    "sparkline": [
      15.9,
      15.99,
      15.94,
      15.96,
      16.05,
      16.03,
      15.95,
      15.97,
      15.91,
      15.91
    ],
    "high5d": 16.04,
    "high10d": 16.09
  },
  {
    "code": "4707",
    "name": "磐亞",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 33.0,
    "prevClose": 30.0,
    "open": 30.3,
    "high": 33.0,
    "low": 30.3,
    "volume": 6696,
    "ma5": 32.14,
    "ma10": 29.15,
    "ma20": 31.77,
    "ma60": 26.88,
    "vMa5": 7597,
    "vMa10": 6125,
    "high20d": 45.0,
    "sparkline": [
      23.25,
      23.2,
      25.5,
      28.05,
      30.85,
      33.85,
      31.9,
      31.95,
      30.0,
      33.0
    ],
    "high5d": 34.8,
    "high10d": 34.8
  },
  {
    "code": "4541",
    "name": "晟田",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 70.3,
    "prevClose": 66.3,
    "open": 66.5,
    "high": 71.5,
    "low": 65.1,
    "volume": 6383,
    "ma5": 66.32,
    "ma10": 63.75,
    "ma20": 66.39,
    "ma60": 56.45,
    "vMa5": 3652,
    "vMa10": 3979,
    "high20d": 81.6,
    "sparkline": [
      56.6,
      60.0,
      60.5,
      62.8,
      66.0,
      63.7,
      65.9,
      65.4,
      66.3,
      70.3
    ],
    "high5d": 71.5,
    "high10d": 71.5
  },
  {
    "code": "6603",
    "name": "富強鑫",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 27.7,
    "prevClose": 26.9,
    "open": 27.3,
    "high": 29.4,
    "low": 27.3,
    "volume": 6392,
    "ma5": 26.64,
    "ma10": 26.31,
    "ma20": 25.54,
    "ma60": 24.39,
    "vMa5": 2838,
    "vMa10": 2517,
    "high20d": 29.4,
    "sparkline": [
      24.8,
      26.15,
      26.3,
      25.95,
      26.75,
      25.75,
      26.0,
      26.85,
      26.9,
      27.7
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
    "price": 86.5,
    "prevClose": 87.6,
    "open": 86.9,
    "high": 86.9,
    "low": 84.3,
    "volume": 6349,
    "ma5": 85.88,
    "ma10": 82.0,
    "ma20": 82.11,
    "ma60": 79.68,
    "vMa5": 10040,
    "vMa10": 11289,
    "high20d": 98.3,
    "sparkline": [
      68.5,
      73.7,
      75.2,
      82.7,
      90.5,
      86.7,
      83.0,
      85.6,
      87.6,
      86.5
    ],
    "high5d": 89.9,
    "high10d": 90.8
  },
  {
    "code": "8042",
    "name": "金山電",
    "categories": [
      "Top100"
    ],
    "price": 113.0,
    "prevClose": 116.5,
    "open": 113.5,
    "high": 117.0,
    "low": 112.0,
    "volume": 6313,
    "ma5": 114.5,
    "ma10": 109.0,
    "ma20": 114.35,
    "ma60": 149.12,
    "vMa5": 7136,
    "vMa10": 5612,
    "high20d": 152.5,
    "sparkline": [
      89.8,
      98.7,
      108.5,
      110.5,
      110.0,
      112.5,
      116.5,
      114.0,
      116.5,
      113.0
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
    "price": 32.61,
    "prevClose": 32.59,
    "open": 32.79,
    "high": 32.85,
    "low": 32.51,
    "volume": 6244,
    "ma5": 32.33,
    "ma10": 31.65,
    "ma20": 32.55,
    "ma60": 34.57,
    "vMa5": 5622,
    "vMa10": 10204,
    "high20d": 37.55,
    "sparkline": [
      28.61,
      31.47,
      31.24,
      31.38,
      32.09,
      32.1,
      31.71,
      32.66,
      32.59,
      32.61
    ],
    "high5d": 32.85,
    "high10d": 32.85
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
    "prevClose": 88.7,
    "open": 89.3,
    "high": 90.9,
    "low": 89.3,
    "volume": 6156,
    "ma5": 88.1,
    "ma10": 80.4,
    "ma20": 78.51,
    "ma60": 93.15,
    "vMa5": 26151,
    "vMa10": 22911,
    "high20d": 93.9,
    "sparkline": [
      60.3,
      66.3,
      72.9,
      80.1,
      83.9,
      86.8,
      85.9,
      89.1,
      88.7,
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
    "price": 17.4,
    "prevClose": 18.9,
    "open": 18.9,
    "high": 19.25,
    "low": 17.3,
    "volume": 6171,
    "ma5": 17.49,
    "ma10": 17.13,
    "ma20": 17.63,
    "ma60": 18.58,
    "vMa5": 2313,
    "vMa10": 1576,
    "high20d": 21.05,
    "sparkline": [
      16.35,
      16.5,
      16.5,
      17.55,
      17.0,
      17.2,
      16.65,
      17.3,
      18.9,
      17.4
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
    "open": 13.86,
    "high": 13.86,
    "low": 13.84,
    "volume": 6092,
    "ma5": 13.91,
    "ma10": 13.94,
    "ma20": 14.01,
    "ma60": 14.07,
    "vMa5": 3761,
    "vMa10": 4397,
    "high20d": 14.17,
    "sparkline": [
      13.96,
      13.98,
      13.9,
      13.94,
      14.03,
      14.0,
      13.92,
      13.95,
      13.85,
      13.85
    ],
    "high5d": 14.03,
    "high10d": 14.05
  },
  {
    "code": "5425",
    "name": "台半",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 86.7,
    "prevClose": 86.0,
    "open": 86.1,
    "high": 87.3,
    "low": 85.1,
    "volume": 6011,
    "ma5": 84.88,
    "ma10": 81.02,
    "ma20": 83.75,
    "ma60": 102.21,
    "vMa5": 6305,
    "vMa10": 7768,
    "high20d": 107.0,
    "sparkline": [
      67.2,
      73.1,
      80.4,
      81.6,
      83.5,
      84.9,
      82.5,
      84.3,
      86.0,
      86.7
    ],
    "high5d": 88.8,
    "high10d": 88.8
  },
  {
    "code": "3624",
    "name": "光頡",
    "categories": [
      "Top100"
    ],
    "price": 86.5,
    "prevClose": 85.2,
    "open": 86.2,
    "high": 88.4,
    "low": 83.6,
    "volume": 5999,
    "ma5": 80.86,
    "ma10": 73.09,
    "ma20": 79.89,
    "ma60": 111.0,
    "vMa5": 5007,
    "vMa10": 3473,
    "high20d": 115.0,
    "sparkline": [
      56.9,
      62.5,
      64.4,
      68.0,
      74.8,
      75.6,
      74.8,
      82.2,
      85.2,
      86.5
    ],
    "high5d": 89.4,
    "high10d": 89.4
  },
  {
    "code": "5864",
    "name": "致和證",
    "categories": [
      "Top100",
      "MajorBuy"
    ],
    "price": 33.45,
    "prevClose": 30.45,
    "open": 30.8,
    "high": 33.45,
    "low": 30.8,
    "volume": 5937,
    "ma5": 30.28,
    "ma10": 30.18,
    "ma20": 31.4,
    "ma60": 37.2,
    "vMa5": 4378,
    "vMa10": 4084,
    "high20d": 37.2,
    "sparkline": [
      27.75,
      30.5,
      30.15,
      30.85,
      31.15,
      29.15,
      28.8,
      29.55,
      30.45,
      33.45
    ],
    "high5d": 33.45,
    "high10d": 33.45
  },
  {
    "code": "4939",
    "name": "亞電",
    "categories": [
      "Top100"
    ],
    "price": 60.8,
    "prevClose": 61.7,
    "open": 61.0,
    "high": 62.8,
    "low": 60.8,
    "volume": 5780,
    "ma5": 61.2,
    "ma10": 57.48,
    "ma20": 60.5,
    "ma60": 58.17,
    "vMa5": 12324,
    "vMa10": 11853,
    "high20d": 78.2,
    "sparkline": [
      46.55,
      50.8,
      55.8,
      56.3,
      59.4,
      61.4,
      60.8,
      61.3,
      61.7,
      60.8
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
    "price": 133.0,
    "prevClose": 121.5,
    "open": 117.0,
    "high": 133.5,
    "low": 117.0,
    "volume": 5605,
    "ma5": 118.1,
    "ma10": 110.52,
    "ma20": 106.38,
    "ma60": 116.69,
    "vMa5": 2620,
    "vMa10": 2002,
    "high20d": 133.5,
    "sparkline": [
      87.0,
      95.7,
      104.0,
      113.0,
      115.0,
      110.5,
      107.5,
      118.0,
      121.5,
      133.0
    ],
    "high5d": 133.5,
    "high10d": 133.5
  },
  {
    "code": "4938",
    "name": "和碩",
    "categories": [
      "SitcaBuy",
      "MajorBuy"
    ],
    "price": 91.4,
    "prevClose": 89.0,
    "open": 88.9,
    "high": 91.5,
    "low": 88.9,
    "volume": 15483,
    "ma5": 89.0,
    "ma10": 87.44,
    "ma20": 85.76,
    "ma60": 85.75,
    "vMa5": 9347,
    "vMa10": 11403,
    "high5d": 91.5,
    "high10d": 91.5,
    "high20d": 91.5,
    "sparkline": [
      80.5,
      84.4,
      86.6,
      88.4,
      89.5,
      88.0,
      87.1,
      89.5,
      89.0,
      91.4
    ]
  },
  {
    "code": "2855",
    "name": "統一證",
    "categories": [
      "SitcaBuy"
    ],
    "price": 47.5,
    "prevClose": 46.2,
    "open": 46.4,
    "high": 48.0,
    "low": 46.4,
    "volume": 5868,
    "ma5": 45.83,
    "ma10": 44.73,
    "ma20": 44.29,
    "ma60": 47.73,
    "vMa5": 4299,
    "vMa10": 4351,
    "high5d": 48.0,
    "high10d": 48.0,
    "high20d": 48.0,
    "sparkline": [
      40.1,
      43.3,
      44.15,
      44.75,
      45.85,
      45.1,
      44.5,
      45.85,
      46.2,
      47.5
    ]
  },
  {
    "code": "3450",
    "name": "聯鈞",
    "categories": [
      "SitcaBuy"
    ],
    "price": 507.0,
    "prevClose": 473.5,
    "open": 484.5,
    "high": 508.0,
    "low": 484.5,
    "volume": 1333,
    "ma5": 494.6,
    "ma10": 449.95,
    "ma20": 439.75,
    "ma60": 485.88,
    "vMa5": 11551,
    "vMa10": 10380,
    "high5d": 527.0,
    "high10d": 527.0,
    "high20d": 527.0,
    "sparkline": [
      338.5,
      372.0,
      409.0,
      432.0,
      475.0,
      491.5,
      477.0,
      524.0,
      473.5,
      507.0
    ]
  },
  {
    "code": "6805",
    "name": "富世達",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1835.0,
    "prevClose": 1790.0,
    "open": 1790.0,
    "high": 1860.0,
    "low": 1780.0,
    "volume": 1819,
    "ma5": 1762.0,
    "ma10": 1605.0,
    "ma20": 1492.5,
    "ma60": 1652.67,
    "vMa5": 2686,
    "vMa10": 2112,
    "high5d": 1860.0,
    "high10d": 1860.0,
    "high20d": 1860.0,
    "sparkline": [
      1230.0,
      1350.0,
      1470.0,
      1590.0,
      1600.0,
      1760.0,
      1670.0,
      1755.0,
      1790.0,
      1835.0
    ]
  },
  {
    "code": "00980A",
    "name": "主動野村臺灣優選",
    "categories": [
      "SitcaBuy"
    ],
    "price": 24.29,
    "prevClose": 24.09,
    "open": 24.55,
    "high": 24.75,
    "low": 24.49,
    "volume": 13184,
    "ma5": 23.8,
    "ma10": 22.44,
    "ma20": 22.35,
    "ma60": 23.5,
    "vMa5": 13616,
    "vMa10": 22482,
    "high5d": 24.75,
    "high10d": 24.75,
    "high20d": 24.75,
    "sparkline": [
      19.58,
      19.56,
      21.46,
      22.13,
      22.66,
      23.31,
      23.73,
      23.57,
      24.09,
      24.29
    ]
  },
  {
    "code": "2542",
    "name": "興富發",
    "categories": [
      "SitcaBuy"
    ],
    "price": 44.8,
    "prevClose": 44.55,
    "open": 44.7,
    "high": 44.85,
    "low": 44.5,
    "volume": 6292,
    "ma5": 44.42,
    "ma10": 44.25,
    "ma20": 44.01,
    "ma60": 43.63,
    "vMa5": 5006,
    "vMa10": 5828,
    "high5d": 44.85,
    "high10d": 44.85,
    "high20d": 44.95,
    "sparkline": [
      44.35,
      44.0,
      43.85,
      44.15,
      44.05,
      44.1,
      44.3,
      44.35,
      44.55,
      44.8
    ]
  },
  {
    "code": "2633",
    "name": "台灣高鐵",
    "categories": [
      "SitcaBuy"
    ],
    "price": 25.8,
    "prevClose": 25.7,
    "open": 25.8,
    "high": 25.85,
    "low": 25.75,
    "volume": 3205,
    "ma5": 25.8,
    "ma10": 25.89,
    "ma20": 25.95,
    "ma60": 25.89,
    "vMa5": 4355,
    "vMa10": 5489,
    "high5d": 26.0,
    "high10d": 26.6,
    "high20d": 26.6,
    "sparkline": [
      26.3,
      26.05,
      25.9,
      25.75,
      25.9,
      25.8,
      25.8,
      25.9,
      25.7,
      25.8
    ]
  },
  {
    "code": "3044",
    "name": "健鼎",
    "categories": [
      "SitcaBuy"
    ],
    "price": 485.5,
    "prevClose": 441.5,
    "open": 485.5,
    "high": 485.5,
    "low": 485.5,
    "volume": 2852,
    "ma5": 424.0,
    "ma10": 399.55,
    "ma20": 395.68,
    "ma60": 465.68,
    "vMa5": 3554,
    "vMa10": 3500,
    "high5d": 485.5,
    "high10d": 485.5,
    "high20d": 485.5,
    "sparkline": [
      342.0,
      369.0,
      374.0,
      392.0,
      398.5,
      397.5,
      394.0,
      401.5,
      441.5,
      485.5
    ]
  },
  {
    "code": "4915",
    "name": "致伸",
    "categories": [
      "SitcaBuy"
    ],
    "price": 60.4,
    "prevClose": 60.0,
    "open": 60.1,
    "high": 60.8,
    "low": 59.9,
    "volume": 3142,
    "ma5": 60.5,
    "ma10": 62.34,
    "ma20": 63.76,
    "ma60": 69.49,
    "vMa5": 4963,
    "vMa10": 4065,
    "high5d": 63.0,
    "high10d": 66.5,
    "high20d": 67.6,
    "sparkline": [
      63.6,
      65.4,
      64.6,
      63.6,
      63.7,
      61.9,
      59.5,
      60.7,
      60.0,
      60.4
    ]
  },
  {
    "code": "4551",
    "name": "智伸科",
    "categories": [
      "SitcaBuy"
    ],
    "price": 172.5,
    "prevClose": 157.0,
    "open": 157.5,
    "high": 172.5,
    "low": 157.0,
    "volume": 1635,
    "ma5": 168.2,
    "ma10": 164.1,
    "ma20": 172.62,
    "ma60": 186.04,
    "vMa5": 1526,
    "vMa10": 1051,
    "high5d": 177.0,
    "high10d": 177.0,
    "high20d": 200.0,
    "sparkline": [
      148.5,
      163.0,
      160.0,
      163.0,
      165.5,
      170.0,
      167.5,
      174.0,
      157.0,
      172.5
    ]
  },
  {
    "code": "8996",
    "name": "高力",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1170.0,
    "prevClose": 1065.0,
    "open": 1070.0,
    "high": 1170.0,
    "low": 1065.0,
    "volume": 2725,
    "ma5": 1098.0,
    "ma10": 1012.8,
    "ma20": 1007.1,
    "ma60": 1186.18,
    "vMa5": 2954,
    "vMa10": 2993,
    "high5d": 1170.0,
    "high10d": 1170.0,
    "high20d": 1170.0,
    "sparkline": [
      778.0,
      855.0,
      940.0,
      1030.0,
      1035.0,
      1135.0,
      1045.0,
      1075.0,
      1065.0,
      1170.0
    ]
  },
  {
    "code": "2903",
    "name": "遠百",
    "categories": [
      "SitcaBuy"
    ],
    "price": 22.0,
    "prevClose": 21.9,
    "open": 22.05,
    "high": 22.1,
    "low": 21.9,
    "volume": 1290,
    "ma5": 21.96,
    "ma10": 22.09,
    "ma20": 22.19,
    "ma60": 22.54,
    "vMa5": 973,
    "vMa10": 1559,
    "high5d": 22.1,
    "high10d": 22.7,
    "high20d": 22.7,
    "sparkline": [
      22.55,
      22.15,
      22.35,
      22.1,
      22.0,
      21.85,
      22.0,
      22.05,
      21.9,
      22.0
    ]
  },
  {
    "code": "6139",
    "name": "亞翔",
    "categories": [
      "SitcaBuy"
    ],
    "price": 811.0,
    "prevClose": 812.0,
    "open": 824.0,
    "high": 837.0,
    "low": 808.0,
    "volume": 2949,
    "ma5": 813.8,
    "ma10": 777.0,
    "ma20": 785.3,
    "ma60": 815.07,
    "vMa5": 3555,
    "vMa10": 3724,
    "high5d": 840.0,
    "high10d": 840.0,
    "high20d": 912.0,
    "sparkline": [
      643.0,
      707.0,
      765.0,
      786.0,
      800.0,
      836.0,
      802.0,
      808.0,
      812.0,
      811.0
    ]
  },
  {
    "code": "2481",
    "name": "強茂",
    "categories": [
      "SitcaBuy"
    ],
    "price": 139.0,
    "prevClose": 141.5,
    "open": 143.5,
    "high": 144.0,
    "low": 138.5,
    "volume": 15087,
    "ma5": 138.0,
    "ma10": 130.75,
    "ma20": 136.25,
    "ma60": 157.8,
    "vMa5": 18692,
    "vMa10": 20301,
    "high5d": 144.5,
    "high10d": 144.5,
    "high20d": 173.0,
    "sparkline": [
      107.0,
      117.5,
      129.0,
      130.0,
      134.0,
      139.0,
      133.0,
      137.5,
      141.5,
      139.0
    ]
  },
  {
    "code": "2027",
    "name": "大成鋼",
    "categories": [
      "SitcaBuy"
    ],
    "price": 46.85,
    "prevClose": 46.45,
    "open": 46.45,
    "high": 47.6,
    "low": 46.2,
    "volume": 10017,
    "ma5": 46.66,
    "ma10": 45.32,
    "ma20": 43.91,
    "ma60": 42.38,
    "vMa5": 19851,
    "vMa10": 18926,
    "high5d": 47.8,
    "high10d": 47.8,
    "high20d": 47.8,
    "sparkline": [
      43.7,
      43.2,
      44.45,
      44.25,
      44.35,
      46.1,
      46.6,
      47.3,
      46.45,
      46.85
    ]
  },
  {
    "code": "3090",
    "name": "日電貿",
    "categories": [
      "SitcaBuy"
    ],
    "price": 170.5,
    "prevClose": 174.5,
    "open": 175.5,
    "high": 177.0,
    "low": 168.0,
    "volume": 20080,
    "ma5": 162.3,
    "ma10": 147.9,
    "ma20": 158.75,
    "ma60": 228.75,
    "vMa5": 16408,
    "vMa10": 12972,
    "high5d": 177.0,
    "high10d": 177.0,
    "high20d": 227.5,
    "sparkline": [
      114.0,
      125.0,
      137.5,
      144.0,
      147.0,
      155.0,
      150.5,
      161.0,
      174.5,
      170.5
    ]
  },
  {
    "code": "2347",
    "name": "聯強",
    "categories": [
      "SitcaBuy"
    ],
    "price": 91.6,
    "prevClose": 91.0,
    "open": 91.0,
    "high": 93.5,
    "low": 91.0,
    "volume": 5762,
    "ma5": 92.52,
    "ma10": 92.5,
    "ma20": 89.58,
    "ma60": 89.45,
    "vMa5": 4905,
    "vMa10": 5223,
    "high5d": 96.9,
    "high10d": 98.3,
    "high20d": 98.3,
    "sparkline": [
      86.1,
      93.7,
      91.7,
      93.8,
      97.1,
      94.7,
      93.4,
      91.9,
      91.0,
      91.6
    ]
  },
  {
    "code": "009814",
    "name": "富邦標普500",
    "categories": [
      "SitcaBuy"
    ],
    "price": 11.57,
    "prevClose": 11.61,
    "open": 11.6,
    "high": 11.6,
    "low": 11.55,
    "volume": 1283,
    "ma5": 11.58,
    "ma10": 11.46,
    "ma20": 11.33,
    "ma60": 11.13,
    "vMa5": 977,
    "vMa10": 776,
    "high5d": 11.63,
    "high10d": 11.66,
    "high20d": 11.66,
    "sparkline": [
      11.04,
      11.22,
      11.31,
      11.43,
      11.63,
      11.58,
      11.53,
      11.63,
      11.61,
      11.57
    ]
  },
  {
    "code": "00695B",
    "name": "富邦美債7-10",
    "categories": [
      "SitcaBuy"
    ],
    "price": 35.24,
    "prevClose": 35.19,
    "open": 35.21,
    "high": 35.26,
    "low": 35.21,
    "volume": 884,
    "ma5": 35.28,
    "ma10": 35.33,
    "ma20": 35.39,
    "ma60": 35.27,
    "vMa5": 339,
    "vMa10": 368,
    "high5d": 35.41,
    "high10d": 35.5,
    "high20d": 35.6,
    "sparkline": [
      35.37,
      35.5,
      35.32,
      35.36,
      35.41,
      35.4,
      35.23,
      35.32,
      35.19,
      35.24
    ]
  },
  {
    "code": "3081",
    "name": "聯亞",
    "categories": [
      "SitcaBuy"
    ],
    "price": 2725.0,
    "prevClose": 2480.0,
    "open": 2560.0,
    "high": 2725.0,
    "low": 2560.0,
    "volume": 1187,
    "ma5": 2484.0,
    "ma10": 2145.0,
    "ma20": 1890.5,
    "ma60": 2042.22,
    "vMa5": 3142,
    "vMa10": 2191,
    "high5d": 2725.0,
    "high10d": 2725.0,
    "high20d": 2725.0,
    "sparkline": [
      1485.0,
      1630.0,
      1790.0,
      1965.0,
      2160.0,
      2375.0,
      2305.0,
      2535.0,
      2480.0,
      2725.0
    ]
  },
  {
    "code": "6510",
    "name": "精測",
    "categories": [
      "SitcaBuy"
    ],
    "price": 2825.0,
    "prevClose": 2800.0,
    "open": 2855.0,
    "high": 2950.0,
    "low": 2815.0,
    "volume": 605,
    "ma5": 2800.0,
    "ma10": 2697.0,
    "ma20": 2650.75,
    "ma60": 3060.75,
    "vMa5": 469,
    "vMa10": 555,
    "high5d": 2950.0,
    "high10d": 2975.0,
    "high20d": 2975.0,
    "sparkline": [
      2270.0,
      2495.0,
      2655.0,
      2795.0,
      2755.0,
      2835.0,
      2695.0,
      2845.0,
      2800.0,
      2825.0
    ]
  },
  {
    "code": "3529",
    "name": "力旺",
    "categories": [
      "SitcaBuy"
    ],
    "price": 2660.0,
    "prevClose": 2660.0,
    "open": 2660.0,
    "high": 2705.0,
    "low": 2635.0,
    "volume": 546,
    "ma5": 2708.0,
    "ma10": 2590.0,
    "ma20": 2486.75,
    "ma60": 2907.5,
    "vMa5": 929,
    "vMa10": 1068,
    "high5d": 2995.0,
    "high10d": 2995.0,
    "high20d": 2995.0,
    "sparkline": [
      2290.0,
      2475.0,
      2390.0,
      2575.0,
      2630.0,
      2660.0,
      2725.0,
      2835.0,
      2660.0,
      2660.0
    ]
  },
  {
    "code": "5274",
    "name": "信驊",
    "categories": [
      "SitcaBuy"
    ],
    "price": 17370.0,
    "prevClose": 16440.0,
    "open": 16450.0,
    "high": 17395.0,
    "low": 16450.0,
    "volume": 252,
    "ma5": 16689.0,
    "ma10": 15867.0,
    "ma20": 14957.75,
    "ma60": 15391.94,
    "vMa5": 213,
    "vMa10": 224,
    "high5d": 17395.0,
    "high10d": 17395.0,
    "high20d": 17395.0,
    "sparkline": [
      13205.0,
      14525.0,
      15975.0,
      15500.0,
      16020.0,
      16750.0,
      16345.0,
      16540.0,
      16440.0,
      17370.0
    ]
  },
  {
    "code": "4749",
    "name": "新應材",
    "categories": [
      "SitcaBuy"
    ],
    "price": 809.0,
    "prevClose": 803.0,
    "open": 806.0,
    "high": 823.0,
    "low": 806.0,
    "volume": 339,
    "ma5": 806.0,
    "ma10": 776.1,
    "ma20": 780.1,
    "ma60": 903.95,
    "vMa5": 729,
    "vMa10": 832,
    "high5d": 832.0,
    "high10d": 832.0,
    "high20d": 884.0,
    "sparkline": [
      672.0,
      722.0,
      765.0,
      778.0,
      794.0,
      823.0,
      809.0,
      786.0,
      803.0,
      809.0
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
    "open": 20.42,
    "high": 20.42,
    "low": 20.41,
    "volume": 455,
    "ma5": 20.45,
    "ma10": 20.44,
    "ma20": 20.45,
    "ma60": 20.43,
    "vMa5": 500,
    "vMa10": 601,
    "high5d": 20.55,
    "high10d": 20.55,
    "high20d": 20.55,
    "sparkline": [
      20.4,
      20.45,
      20.41,
      20.43,
      20.49,
      20.5,
      20.45,
      20.46,
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
    "price": 2555.0,
    "prevClose": 2390.0,
    "open": 2405.0,
    "high": 2570.0,
    "low": 2405.0,
    "volume": 647,
    "ma5": 2437.0,
    "ma10": 2401.5,
    "ma20": 2628.5,
    "ma60": 3068.67,
    "vMa5": 846,
    "vMa10": 723,
    "high5d": 2570.0,
    "high10d": 2670.0,
    "high20d": 3330.0,
    "sparkline": [
      2155.0,
      2370.0,
      2420.0,
      2540.0,
      2345.0,
      2385.0,
      2385.0,
      2470.0,
      2390.0,
      2555.0
    ]
  },
  {
    "code": "006201",
    "name": "元大富櫃50",
    "categories": [
      "SitcaBuy"
    ],
    "price": 45.26,
    "prevClose": 43.8,
    "open": 44.2,
    "high": 45.26,
    "low": 44.2,
    "volume": 484,
    "ma5": 43.83,
    "ma10": 41.56,
    "ma20": 41.31,
    "ma60": 45.64,
    "vMa5": 395,
    "vMa10": 564,
    "high5d": 45.26,
    "high10d": 45.26,
    "high20d": 45.26,
    "sparkline": [
      34.89,
      38.07,
      39.88,
      41.2,
      42.42,
      43.66,
      42.6,
      43.85,
      43.8,
      45.26
    ]
  },
  {
    "code": "4123",
    "name": "晟德",
    "categories": [
      "SitcaBuy"
    ],
    "price": 35.1,
    "prevClose": 39.0,
    "open": 35.1,
    "high": 35.1,
    "low": 35.1,
    "volume": 3799,
    "ma5": 38.27,
    "ma10": 38.32,
    "ma20": 38.16,
    "ma60": 38.13,
    "vMa5": 2421,
    "vMa10": 2503,
    "high5d": 39.4,
    "high10d": 39.5,
    "high20d": 39.5,
    "sparkline": [
      37.45,
      37.75,
      38.5,
      38.95,
      39.15,
      38.75,
      39.1,
      39.4,
      39.0,
      35.1
    ]
  },
  {
    "code": "6121",
    "name": "新普",
    "categories": [
      "SitcaBuy"
    ],
    "price": 431.5,
    "prevClose": 434.5,
    "open": 427.0,
    "high": 440.0,
    "low": 425.0,
    "volume": 1387,
    "ma5": 402.9,
    "ma10": 381.85,
    "ma20": 376.73,
    "ma60": 398.71,
    "vMa5": 1335,
    "vMa10": 1175,
    "high5d": 440.0,
    "high10d": 440.0,
    "high20d": 440.0,
    "sparkline": [
      346.5,
      352.5,
      362.5,
      370.0,
      372.5,
      380.5,
      373.0,
      395.0,
      434.5,
      431.5
    ]
  },
  {
    "code": "3491",
    "name": "昇達科",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1320.0,
    "prevClose": 1275.0,
    "open": 1250.0,
    "high": 1350.0,
    "low": 1250.0,
    "volume": 1110,
    "ma5": 1283.0,
    "ma10": 1182.7,
    "ma20": 1197.85,
    "ma60": 1470.03,
    "vMa5": 1945,
    "vMa10": 2045,
    "high5d": 1395.0,
    "high10d": 1395.0,
    "high20d": 1430.0,
    "sparkline": [
      923.0,
      969.0,
      1065.0,
      1170.0,
      1285.0,
      1350.0,
      1235.0,
      1235.0,
      1275.0,
      1320.0
    ]
  },
  {
    "code": "3293",
    "name": "鈊象",
    "categories": [
      "SitcaBuy"
    ],
    "price": 781.0,
    "prevClose": 804.0,
    "open": 806.0,
    "high": 806.0,
    "low": 778.0,
    "volume": 1553,
    "ma5": 792.0,
    "ma10": 780.7,
    "ma20": 746.9,
    "ma60": 759.02,
    "vMa5": 1581,
    "vMa10": 1780,
    "high5d": 806.0,
    "high10d": 806.0,
    "high20d": 806.0,
    "sparkline": [
      749.0,
      776.0,
      771.0,
      774.0,
      777.0,
      784.0,
      799.0,
      792.0,
      804.0,
      781.0
    ]
  },
  {
    "code": "6138",
    "name": "茂達",
    "categories": [
      "SitcaBuy"
    ],
    "price": 292.5,
    "prevClose": 288.0,
    "open": 291.0,
    "high": 297.0,
    "low": 290.5,
    "volume": 787,
    "ma5": 286.7,
    "ma10": 281.85,
    "ma20": 296.62,
    "ma60": 330.7,
    "vMa5": 803,
    "vMa10": 986,
    "high5d": 297.0,
    "high10d": 309.5,
    "high20d": 349.5,
    "sparkline": [
      257.5,
      265.0,
      277.5,
      295.5,
      289.5,
      288.5,
      276.0,
      288.5,
      288.0,
      292.5
    ]
  },
  {
    "code": "8436",
    "name": "大江",
    "categories": [
      "SitcaBuy"
    ],
    "price": 124.5,
    "prevClose": 126.0,
    "open": 126.0,
    "high": 126.0,
    "low": 122.5,
    "volume": 982,
    "ma5": 122.5,
    "ma10": 117.85,
    "ma20": 116.5,
    "ma60": 117.12,
    "vMa5": 1509,
    "vMa10": 935,
    "high5d": 127.5,
    "high10d": 127.5,
    "high20d": 127.5,
    "sparkline": [
      112.0,
      113.0,
      113.0,
      113.5,
      114.5,
      119.5,
      117.0,
      125.5,
      126.0,
      124.5
    ]
  },
  {
    "code": "4966",
    "name": "譜瑞-KY",
    "categories": [
      "SitcaBuy"
    ],
    "price": 591.0,
    "prevClose": 595.0,
    "open": 592.0,
    "high": 600.0,
    "low": 590.0,
    "volume": 600,
    "ma5": 597.8,
    "ma10": 586.1,
    "ma20": 590.8,
    "ma60": 666.93,
    "vMa5": 899,
    "vMa10": 908,
    "high5d": 613.0,
    "high10d": 622.0,
    "high20d": 638.0,
    "sparkline": [
      532.0,
      562.0,
      576.0,
      584.0,
      618.0,
      605.0,
      598.0,
      600.0,
      595.0,
      591.0
    ]
  },
  {
    "code": "6274",
    "name": "台燿",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1600.0,
    "prevClose": 1605.0,
    "open": 1580.0,
    "high": 1645.0,
    "low": 1580.0,
    "volume": 2271,
    "ma5": 1527.0,
    "ma10": 1378.5,
    "ma20": 1297.75,
    "ma60": 1499.5,
    "vMa5": 6542,
    "vMa10": 6041,
    "high5d": 1645.0,
    "high10d": 1645.0,
    "high20d": 1645.0,
    "sparkline": [
      1010.0,
      1110.0,
      1220.0,
      1340.0,
      1470.0,
      1530.0,
      1440.0,
      1460.0,
      1605.0,
      1600.0
    ]
  },
  {
    "code": "5289",
    "name": "宜鼎",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1520.0,
    "prevClose": 1470.0,
    "open": 1480.0,
    "high": 1535.0,
    "low": 1480.0,
    "volume": 2354,
    "ma5": 1513.0,
    "ma10": 1430.5,
    "ma20": 1364.0,
    "ma60": 1607.42,
    "vMa5": 3838,
    "vMa10": 3146,
    "high5d": 1680.0,
    "high10d": 1680.0,
    "high20d": 1680.0,
    "sparkline": [
      1180.0,
      1295.0,
      1385.0,
      1415.0,
      1465.0,
      1610.0,
      1500.0,
      1465.0,
      1470.0,
      1520.0
    ]
  },
  {
    "code": "3324",
    "name": "雙鴻",
    "categories": [
      "SitcaBuy"
    ],
    "price": 1050.0,
    "prevClose": 1045.0,
    "open": 1035.0,
    "high": 1070.0,
    "low": 1035.0,
    "volume": 1900,
    "ma5": 1036.0,
    "ma10": 975.5,
    "ma20": 939.15,
    "ma60": 998.08,
    "vMa5": 3787,
    "vMa10": 3017,
    "high5d": 1080.0,
    "high10d": 1080.0,
    "high20d": 1080.0,
    "sparkline": [
      820.0,
      902.0,
      944.0,
      944.0,
      965.0,
      1060.0,
      1015.0,
      1010.0,
      1045.0,
      1050.0
    ]
  },
  {
    "code": "00999A",
    "name": "主動野村臺灣高息",
    "categories": [
      "MajorBuy"
    ],
    "price": 11.06,
    "prevClose": 11.03,
    "open": 11.11,
    "high": 11.2,
    "low": 11.11,
    "volume": 20394,
    "ma5": 10.91,
    "ma10": 10.44,
    "ma20": 10.36,
    "ma60": 10.71,
    "vMa5": 17884,
    "vMa10": 18717,
    "high5d": 11.2,
    "high10d": 11.2,
    "high20d": 11.2,
    "sparkline": [
      9.42,
      9.4,
      10.16,
      10.35,
      10.51,
      10.75,
      10.88,
      10.83,
      11.03,
      11.06
    ]
  },
  {
    "code": "009821",
    "name": "野村稀土關鍵資源",
    "categories": [
      "MajorBuy"
    ],
    "price": 15.07,
    "prevClose": 14.91,
    "open": 15.07,
    "high": 15.09,
    "low": 14.99,
    "volume": 16869,
    "ma5": 14.43,
    "ma10": 13.61,
    "ma20": 13.26,
    "ma60": 14.02,
    "vMa5": 18414,
    "vMa10": 12077,
    "high5d": 15.13,
    "high10d": 15.13,
    "high20d": 15.13,
    "sparkline": [
      12.48,
      12.37,
      13.02,
      12.85,
      13.19,
      13.71,
      14.12,
      14.34,
      14.91,
      15.07
    ]
  },
  {
    "code": "3706",
    "name": "神達",
    "categories": [
      "MajorBuy"
    ],
    "price": 92.4,
    "prevClose": 90.0,
    "open": 89.5,
    "high": 93.4,
    "low": 89.5,
    "volume": 17729,
    "ma5": 91.98,
    "ma10": 90.41,
    "ma20": 90.06,
    "ma60": 88.88,
    "vMa5": 13388,
    "vMa10": 12872,
    "high5d": 94.0,
    "high10d": 94.0,
    "high20d": 94.0,
    "sparkline": [
      84.1,
      87.4,
      89.5,
      91.3,
      91.9,
      92.9,
      91.7,
      92.9,
      90.0,
      92.4
    ]
  },
  {
    "code": "2353",
    "name": "宏碁",
    "categories": [
      "MajorBuy"
    ],
    "price": 31.75,
    "prevClose": 31.05,
    "open": 31.0,
    "high": 31.95,
    "low": 30.85,
    "volume": 24846,
    "ma5": 30.81,
    "ma10": 29.89,
    "ma20": 29.85,
    "ma60": 32.7,
    "vMa5": 18781,
    "vMa10": 21928,
    "high5d": 31.95,
    "high10d": 31.95,
    "high20d": 31.95,
    "sparkline": [
      27.9,
      28.85,
      28.8,
      29.05,
      30.25,
      30.0,
      30.25,
      31.0,
      31.05,
      31.75
    ]
  },
  {
    "code": "00940",
    "name": "元大台灣價值高息",
    "categories": [
      "MajorBuy"
    ],
    "price": 12.34,
    "prevClose": 12.44,
    "open": 12.4,
    "high": 12.47,
    "low": 12.38,
    "volume": 14934,
    "ma5": 12.42,
    "ma10": 12.17,
    "ma20": 12.14,
    "ma60": 12.23,
    "vMa5": 12708,
    "vMa10": 17999,
    "high5d": 12.47,
    "high10d": 12.58,
    "high20d": 12.58,
    "sparkline": [
      11.62,
      11.52,
      12.09,
      12.12,
      12.23,
      12.47,
      12.45,
      12.4,
      12.44,
      12.34
    ]
  },
  {
    "code": "1608",
    "name": "華榮",
    "categories": [
      "MajorBuy"
    ],
    "price": 37.95,
    "prevClose": 36.45,
    "open": 36.3,
    "high": 39.2,
    "low": 36.3,
    "volume": 19453,
    "ma5": 35.9,
    "ma10": 33.46,
    "ma20": 31.97,
    "ma60": 33.53,
    "vMa5": 11087,
    "vMa10": 9106,
    "high5d": 39.2,
    "high10d": 39.2,
    "high20d": 39.2,
    "sparkline": [
      26.95,
      29.35,
      31.15,
      34.25,
      33.4,
      34.4,
      34.95,
      35.75,
      36.45,
      37.95
    ]
  },
  {
    "code": "0052",
    "name": "富邦科技",
    "categories": [
      "MajorBuy"
    ],
    "price": 61.05,
    "prevClose": 60.95,
    "open": 61.3,
    "high": 61.65,
    "low": 61.1,
    "volume": 17011,
    "ma5": 60.66,
    "ma10": 58.95,
    "ma20": 59.34,
    "ma60": 60.56,
    "vMa5": 17693,
    "vMa10": 28459,
    "high5d": 61.65,
    "high10d": 61.65,
    "high20d": 62.45,
    "sparkline": [
      54.4,
      54.3,
      59.7,
      59.15,
      58.65,
      60.65,
      60.45,
      60.2,
      60.95,
      61.05
    ]
  },
  {
    "code": "00712",
    "name": "復華富時不動產",
    "categories": [
      "MajorBuy"
    ],
    "price": 8.84,
    "prevClose": 8.86,
    "open": 8.89,
    "high": 8.92,
    "low": 8.88,
    "volume": 16936,
    "ma5": 8.82,
    "ma10": 8.85,
    "ma20": 8.88,
    "ma60": 8.79,
    "vMa5": 17617,
    "vMa10": 16116,
    "high5d": 8.92,
    "high10d": 8.93,
    "high20d": 9.13,
    "sparkline": [
      8.93,
      8.9,
      8.9,
      8.84,
      8.83,
      8.85,
      8.8,
      8.76,
      8.86,
      8.84
    ]
  },
  {
    "code": "009820",
    "name": "元大納斯達克精選",
    "categories": [
      "MajorBuy"
    ],
    "price": 10.06,
    "prevClose": 10.09,
    "open": 10.08,
    "high": 10.1,
    "low": 10.07,
    "volume": 13889,
    "ma5": 10.01,
    "ma10": 9.67,
    "ma20": 9.77,
    "ma60": 10.0,
    "vMa5": 10178,
    "vMa10": 11054,
    "high5d": 10.12,
    "high10d": 10.12,
    "high20d": 10.12,
    "sparkline": [
      9.21,
      8.96,
      9.47,
      9.44,
      9.62,
      9.99,
      9.95,
      9.95,
      10.09,
      10.06
    ]
  },
  {
    "code": "00990A",
    "name": "主動元大AI新經濟",
    "categories": [
      "MajorBuy"
    ],
    "price": 15.88,
    "prevClose": 16.03,
    "open": 15.88,
    "high": 15.93,
    "low": 15.85,
    "volume": 16004,
    "ma5": 15.92,
    "ma10": 15.35,
    "ma20": 15.87,
    "ma60": 18.29,
    "vMa5": 13779,
    "vMa10": 17658,
    "high5d": 16.07,
    "high10d": 16.26,
    "high20d": 17.4,
    "sparkline": [
      13.83,
      13.65,
      15.56,
      15.34,
      15.49,
      16.2,
      15.83,
      15.68,
      16.03,
      15.88
    ]
  },
  {
    "code": "2354",
    "name": "鴻準",
    "categories": [
      "MajorBuy"
    ],
    "price": 63.0,
    "prevClose": 62.7,
    "open": 63.1,
    "high": 64.6,
    "low": 62.8,
    "volume": 16533,
    "ma5": 62.32,
    "ma10": 58.91,
    "ma20": 57.1,
    "ma60": 57.75,
    "vMa5": 36338,
    "vMa10": 20578,
    "high5d": 65.2,
    "high10d": 65.2,
    "high20d": 65.2,
    "sparkline": [
      53.1,
      56.5,
      56.4,
      56.0,
      55.5,
      61.0,
      61.8,
      63.1,
      62.7,
      63.0
    ]
  },
  {
    "code": "9933",
    "name": "中鼎",
    "categories": [
      "MajorBuy"
    ],
    "price": 42.0,
    "prevClose": 38.65,
    "open": 40.6,
    "high": 42.5,
    "low": 40.6,
    "volume": 9689,
    "ma5": 38.76,
    "ma10": 37.39,
    "ma20": 38.44,
    "ma60": 40.29,
    "vMa5": 3196,
    "vMa10": 2854,
    "high5d": 42.5,
    "high10d": 42.5,
    "high20d": 42.5,
    "sparkline": [
      35.75,
      35.25,
      36.0,
      36.45,
      36.65,
      37.15,
      37.75,
      38.25,
      38.65,
      42.0
    ]
  },
  {
    "code": "3605",
    "name": "宏致",
    "categories": [
      "MajorBuy"
    ],
    "price": 120.0,
    "prevClose": 111.0,
    "open": 111.0,
    "high": 120.0,
    "low": 111.0,
    "volume": 8285,
    "ma5": 111.1,
    "ma10": 99.11,
    "ma20": 92.66,
    "ma60": 84.3,
    "vMa5": 13427,
    "vMa10": 11915,
    "high5d": 120.0,
    "high10d": 120.0,
    "high20d": 120.0,
    "sparkline": [
      78.3,
      79.0,
      84.2,
      92.6,
      101.5,
      108.0,
      107.5,
      109.0,
      111.0,
      120.0
    ]
  },
  {
    "code": "00993A",
    "name": "主動安聯台灣",
    "categories": [
      "MajorBuy"
    ],
    "price": 13.14,
    "prevClose": 13.06,
    "open": 13.27,
    "high": 13.4,
    "low": 13.25,
    "volume": 7648,
    "ma5": 12.94,
    "ma10": 12.25,
    "ma20": 12.31,
    "ma60": 13.16,
    "vMa5": 5720,
    "vMa10": 8707,
    "high5d": 13.4,
    "high10d": 13.4,
    "high20d": 13.4,
    "sparkline": [
      10.69,
      10.7,
      11.77,
      12.23,
      12.46,
      12.81,
      12.93,
      12.75,
      13.06,
      13.14
    ]
  },
  {
    "code": "00918",
    "name": "大華優利高填息30",
    "categories": [
      "MajorBuy"
    ],
    "price": 33.49,
    "prevClose": 33.61,
    "open": 33.6,
    "high": 33.84,
    "low": 33.6,
    "volume": 12544,
    "ma5": 33.59,
    "ma10": 32.96,
    "ma20": 32.43,
    "ma60": 31.22,
    "vMa5": 12066,
    "vMa10": 19737,
    "high5d": 33.84,
    "high10d": 33.99,
    "high20d": 33.99,
    "sparkline": [
      31.46,
      31.24,
      32.73,
      32.97,
      33.25,
      33.66,
      33.58,
      33.59,
      33.61,
      33.49
    ]
  },
  {
    "code": "1513",
    "name": "中興電",
    "categories": [
      "MajorBuy"
    ],
    "price": 165.5,
    "prevClose": 160.5,
    "open": 161.5,
    "high": 168.0,
    "low": 161.0,
    "volume": 7058,
    "ma5": 160.7,
    "ma10": 157.95,
    "ma20": 158.3,
    "ma60": 166.79,
    "vMa5": 2687,
    "vMa10": 2797,
    "high5d": 168.0,
    "high10d": 168.0,
    "high20d": 170.5,
    "sparkline": [
      147.0,
      153.5,
      155.5,
      159.0,
      161.0,
      160.5,
      157.5,
      159.5,
      160.5,
      165.5
    ]
  },
  {
    "code": "4763",
    "name": "材料*-KY",
    "categories": [
      "MajorBuy"
    ],
    "price": 52.6,
    "prevClose": 51.6,
    "open": 52.1,
    "high": 55.0,
    "low": 51.9,
    "volume": 20330,
    "ma5": 50.75,
    "ma10": 49.63,
    "ma20": 49.16,
    "ma60": 46.44,
    "vMa5": 11991,
    "vMa10": 10651,
    "high5d": 55.0,
    "high10d": 55.0,
    "high20d": 55.0,
    "sparkline": [
      47.6,
      48.25,
      49.85,
      48.45,
      48.45,
      49.65,
      49.9,
      50.0,
      51.6,
      52.6
    ]
  },
  {
    "code": "4510",
    "name": "高鋒",
    "categories": [
      "MajorBuy"
    ],
    "price": 44.55,
    "prevClose": 40.5,
    "open": 41.1,
    "high": 44.55,
    "low": 40.8,
    "volume": 3749,
    "ma5": 40.97,
    "ma10": 38.47,
    "ma20": 38.42,
    "ma60": 43.31,
    "vMa5": 1637,
    "vMa10": 1089,
    "high5d": 44.55,
    "high10d": 44.55,
    "high20d": 44.55,
    "sparkline": [
      33.0,
      35.2,
      36.4,
      37.0,
      38.25,
      38.85,
      40.1,
      40.85,
      40.5,
      44.55
    ]
  },
  {
    "code": "00955",
    "name": "中信日本商社",
    "categories": [
      "MajorBuy"
    ],
    "price": 15.58,
    "prevClose": 15.77,
    "open": 15.72,
    "high": 15.73,
    "low": 15.55,
    "volume": 5364,
    "ma5": 15.71,
    "ma10": 15.5,
    "ma20": 15.1,
    "ma60": 14.7,
    "vMa5": 4995,
    "vMa10": 6110,
    "high5d": 15.94,
    "high10d": 15.94,
    "high20d": 15.94,
    "sparkline": [
      14.94,
      15.32,
      15.45,
      15.38,
      15.3,
      15.61,
      15.8,
      15.81,
      15.77,
      15.58
    ]
  },
  {
    "code": "4147",
    "name": "中裕",
    "categories": [
      "MajorBuy"
    ],
    "price": 68.5,
    "prevClose": 63.5,
    "open": 63.5,
    "high": 69.8,
    "low": 63.4,
    "volume": 5207,
    "ma5": 61.66,
    "ma10": 59.31,
    "ma20": 59.29,
    "ma60": 59.09,
    "vMa5": 1885,
    "vMa10": 1309,
    "high5d": 69.8,
    "high10d": 69.8,
    "high20d": 69.8,
    "sparkline": [
      56.2,
      55.0,
      56.9,
      57.6,
      59.1,
      58.5,
      56.8,
      61.0,
      63.5,
      68.5
    ]
  },
  {
    "code": "6187",
    "name": "萬潤",
    "categories": [
      "MajorBuy"
    ],
    "price": 1155.0,
    "prevClose": 1050.0,
    "open": 1060.0,
    "high": 1155.0,
    "low": 1055.0,
    "volume": 4336,
    "ma5": 1120.0,
    "ma10": 1053.9,
    "ma20": 1021.55,
    "ma60": 1065.72,
    "vMa5": 4102,
    "vMa10": 3163,
    "high5d": 1220.0,
    "high10d": 1220.0,
    "high20d": 1220.0,
    "sparkline": [
      845.0,
      929.0,
      1005.0,
      1090.0,
      1070.0,
      1175.0,
      1130.0,
      1090.0,
      1050.0,
      1155.0
    ]
  },
  {
    "code": "3265",
    "name": "台星科",
    "categories": [
      "MajorBuy"
    ],
    "price": 175.0,
    "prevClose": 159.5,
    "open": 160.5,
    "high": 175.0,
    "low": 160.5,
    "volume": 2760,
    "ma5": 162.0,
    "ma10": 155.05,
    "ma20": 156.43,
    "ma60": 172.43,
    "vMa5": 1442,
    "vMa10": 1105,
    "high5d": 175.0,
    "high10d": 175.0,
    "high20d": 175.0,
    "sparkline": [
      133.0,
      144.0,
      152.5,
      155.5,
      155.5,
      157.5,
      153.5,
      164.5,
      159.5,
      175.0
    ]
  },
  {
    "code": "5443",
    "name": "均豪",
    "categories": [
      "MajorBuy"
    ],
    "price": 113.5,
    "prevClose": 107.5,
    "open": 108.0,
    "high": 114.5,
    "low": 108.0,
    "volume": 4931,
    "ma5": 103.16,
    "ma10": 95.73,
    "ma20": 96.2,
    "ma60": 107.34,
    "vMa5": 2655,
    "vMa10": 1838,
    "high5d": 114.5,
    "high10d": 114.5,
    "high20d": 114.5,
    "sparkline": [
      78.3,
      86.0,
      90.3,
      92.2,
      94.7,
      95.2,
      95.1,
      104.5,
      107.5,
      113.5
    ]
  },
  {
    "code": "3357",
    "name": "臺慶科",
    "categories": [
      "MajorBuy"
    ],
    "price": 230.5,
    "prevClose": 219.0,
    "open": 218.0,
    "high": 234.0,
    "low": 217.0,
    "volume": 3474,
    "ma5": 216.9,
    "ma10": 207.5,
    "ma20": 209.3,
    "ma60": 262.35,
    "vMa5": 2511,
    "vMa10": 2420,
    "high5d": 234.0,
    "high10d": 234.0,
    "high20d": 248.5,
    "sparkline": [
      176.5,
      194.0,
      204.0,
      206.0,
      210.0,
      210.0,
      207.0,
      218.0,
      219.0,
      230.5
    ]
  },
  {
    "code": "6538",
    "name": "倉和",
    "categories": [
      "MajorBuy"
    ],
    "price": 161.5,
    "prevClose": 147.0,
    "open": 148.5,
    "high": 161.5,
    "low": 147.0,
    "volume": 2692,
    "ma5": 149.8,
    "ma10": 145.55,
    "ma20": 140.15,
    "ma60": 129.4,
    "vMa5": 1704,
    "vMa10": 2561,
    "high5d": 161.5,
    "high10d": 163.0,
    "high20d": 163.0,
    "sparkline": [
      128.5,
      138.0,
      135.0,
      148.5,
      156.5,
      150.0,
      145.0,
      145.5,
      147.0,
      161.5
    ]
  },
  {
    "code": "8071",
    "name": "能率網通",
    "categories": [
      "MajorBuy"
    ],
    "price": 25.55,
    "prevClose": 23.25,
    "open": 23.25,
    "high": 25.55,
    "low": 23.25,
    "volume": 1454,
    "ma5": 23.64,
    "ma10": 22.73,
    "ma20": 23.19,
    "ma60": 25.12,
    "vMa5": 915,
    "vMa10": 1095,
    "high5d": 25.55,
    "high10d": 25.55,
    "high20d": 27.9,
    "sparkline": [
      19.6,
      20.95,
      22.25,
      22.5,
      23.8,
      23.15,
      23.15,
      23.1,
      23.25,
      25.55
    ]
  },
  {
    "code": "6588",
    "name": "東典光電",
    "categories": [
      "MajorBuy"
    ],
    "price": 97.1,
    "prevClose": 88.3,
    "open": 87.8,
    "high": 97.1,
    "low": 87.8,
    "volume": 1851,
    "ma5": 91.94,
    "ma10": 90.6,
    "ma20": 84.86,
    "ma60": 96.06,
    "vMa5": 1658,
    "vMa10": 2290,
    "high5d": 98.9,
    "high10d": 103.5,
    "high20d": 103.5,
    "sparkline": [
      81.0,
      89.1,
      86.8,
      95.4,
      94.0,
      94.0,
      89.8,
      90.5,
      88.3,
      97.1
    ]
  },
  {
    "code": "5498",
    "name": "凱崴",
    "categories": [
      "MajorBuy"
    ],
    "price": 55.2,
    "prevClose": 51.1,
    "open": 50.9,
    "high": 56.0,
    "low": 50.9,
    "volume": 4028,
    "ma5": 51.1,
    "ma10": 47.47,
    "ma20": 47.4,
    "ma60": 57.8,
    "vMa5": 2425,
    "vMa10": 2126,
    "high5d": 56.0,
    "high10d": 56.0,
    "high20d": 56.0,
    "sparkline": [
      38.15,
      41.95,
      44.5,
      46.9,
      47.65,
      50.1,
      48.5,
      50.6,
      51.1,
      55.2
    ]
  },
  {
    "code": "3360",
    "name": "尚立",
    "categories": [
      "MajorBuy"
    ],
    "price": 17.45,
    "prevClose": 15.9,
    "open": 16.0,
    "high": 17.45,
    "low": 16.0,
    "volume": 1387,
    "ma5": 16.35,
    "ma10": 16.1,
    "ma20": 17.03,
    "ma60": 17.18,
    "vMa5": 768,
    "vMa10": 842,
    "high5d": 17.45,
    "high10d": 17.45,
    "high20d": 23.5,
    "sparkline": [
      14.9,
      15.7,
      15.9,
      16.5,
      16.3,
      16.1,
      16.05,
      16.25,
      15.9,
      17.45
    ]
  },
  {
    "code": "3455",
    "name": "由田",
    "categories": [
      "MajorBuy"
    ],
    "price": 222.0,
    "prevClose": 202.0,
    "open": 202.0,
    "high": 222.0,
    "low": 201.5,
    "volume": 1348,
    "ma5": 201.8,
    "ma10": 185.8,
    "ma20": 187.8,
    "ma60": 223.69,
    "vMa5": 915,
    "vMa10": 966,
    "high5d": 222.0,
    "high10d": 222.0,
    "high20d": 226.0,
    "sparkline": [
      150.5,
      162.5,
      167.5,
      182.5,
      186.0,
      189.5,
      190.0,
      205.5,
      202.0,
      222.0
    ]
  },
  {
    "code": "6207",
    "name": "雷科",
    "categories": [
      "MajorBuy"
    ],
    "price": 111.5,
    "prevClose": 107.0,
    "open": 107.5,
    "high": 114.5,
    "low": 107.0,
    "volume": 5420,
    "ma5": 105.88,
    "ma10": 101.49,
    "ma20": 109.43,
    "ma60": 126.06,
    "vMa5": 3937,
    "vMa10": 4732,
    "high5d": 114.5,
    "high10d": 114.5,
    "high20d": 154.0,
    "sparkline": [
      86.8,
      94.7,
      96.5,
      103.0,
      104.5,
      104.0,
      99.9,
      107.0,
      107.0,
      111.5
    ]
  },
  {
    "code": "3498",
    "name": "陽程",
    "categories": [
      "MajorBuy"
    ],
    "price": 131.0,
    "prevClose": 124.5,
    "open": 126.0,
    "high": 133.0,
    "low": 124.5,
    "volume": 2161,
    "ma5": 121.6,
    "ma10": 109.98,
    "ma20": 109.97,
    "ma60": 123.25,
    "vMa5": 1940,
    "vMa10": 1645,
    "high5d": 133.0,
    "high10d": 133.0,
    "high20d": 133.0,
    "sparkline": [
      86.3,
      90.0,
      99.0,
      103.5,
      113.0,
      111.0,
      116.5,
      125.0,
      124.5,
      131.0
    ]
  },
  {
    "code": "5314",
    "name": "世紀*",
    "categories": [
      "MajorBuy"
    ],
    "price": 62.5,
    "prevClose": 61.1,
    "open": 61.1,
    "high": 62.8,
    "low": 60.8,
    "volume": 2703,
    "ma5": 61.08,
    "ma10": 57.28,
    "ma20": 57.31,
    "ma60": 61.08,
    "vMa5": 3032,
    "vMa10": 3021,
    "high5d": 62.8,
    "high10d": 62.8,
    "high20d": 66.6,
    "sparkline": [
      47.25,
      51.9,
      55.1,
      56.4,
      56.8,
      59.5,
      60.0,
      62.3,
      61.1,
      62.5
    ]
  },
  {
    "code": "6026",
    "name": "福邦證",
    "categories": [
      "MajorBuy"
    ],
    "price": 14.65,
    "prevClose": 13.95,
    "open": 14.25,
    "high": 14.7,
    "low": 14.25,
    "volume": 1947,
    "ma5": 14.1,
    "ma10": 14.0,
    "ma20": 14.1,
    "ma60": 15.73,
    "vMa5": 1249,
    "vMa10": 1084,
    "high5d": 14.7,
    "high10d": 14.7,
    "high20d": 15.0,
    "sparkline": [
      13.35,
      14.1,
      14.0,
      13.95,
      14.15,
      13.9,
      14.1,
      13.9,
      13.95,
      14.65
    ]
  },
  {
    "code": "6015",
    "name": "宏遠證",
    "categories": [
      "MajorBuy"
    ],
    "price": 16.05,
    "prevClose": 15.1,
    "open": 15.25,
    "high": 16.2,
    "low": 15.25,
    "volume": 2625,
    "ma5": 15.38,
    "ma10": 15.41,
    "ma20": 15.78,
    "ma60": 17.4,
    "vMa5": 1831,
    "vMa10": 1696,
    "high5d": 16.2,
    "high10d": 16.2,
    "high20d": 17.75,
    "sparkline": [
      14.55,
      15.65,
      15.55,
      15.55,
      15.95,
      15.5,
      15.3,
      14.95,
      15.1,
      16.05
    ]
  },
  {
    "code": "00877",
    "name": "復華中國5G",
    "categories": [
      "MajorBuy"
    ],
    "price": 37.9,
    "prevClose": 37.42,
    "open": 37.42,
    "high": 38.55,
    "low": 37.31,
    "volume": 3378,
    "ma5": 37.51,
    "ma10": 36.14,
    "ma20": 37.15,
    "ma60": 41.91,
    "vMa5": 4468,
    "vMa10": 4951,
    "high5d": 38.95,
    "high10d": 38.95,
    "high20d": 43.8,
    "sparkline": [
      32.58,
      34.5,
      33.74,
      35.93,
      37.12,
      36.87,
      38.66,
      36.72,
      37.42,
      37.9
    ]
  },
  {
    "code": "6190",
    "name": "萬泰科",
    "categories": [
      "MajorBuy"
    ],
    "price": 68.8,
    "prevClose": 68.8,
    "open": 69.9,
    "high": 70.4,
    "low": 68.4,
    "volume": 1486,
    "ma5": 68.04,
    "ma10": 65.89,
    "ma20": 67.62,
    "ma60": 77.03,
    "vMa5": 1210,
    "vMa10": 1366,
    "high5d": 70.4,
    "high10d": 70.4,
    "high20d": 76.8,
    "sparkline": [
      57.2,
      61.8,
      64.8,
      67.0,
      67.9,
      68.0,
      65.8,
      68.8,
      68.8,
      68.8
    ]
  },
  {
    "code": "8182",
    "name": "加高",
    "categories": [
      "MajorBuy"
    ],
    "price": 41.75,
    "prevClose": 39.75,
    "open": 39.75,
    "high": 42.2,
    "low": 39.75,
    "volume": 1726,
    "ma5": 39.89,
    "ma10": 38.59,
    "ma20": 39.42,
    "ma60": 45.6,
    "vMa5": 1094,
    "vMa10": 1603,
    "high5d": 42.2,
    "high10d": 42.2,
    "high20d": 48.95,
    "sparkline": [
      34.0,
      36.45,
      37.3,
      38.8,
      39.9,
      39.4,
      38.55,
      40.0,
      39.75,
      41.75
    ]
  },
  {
    "code": "6530",
    "name": "創威",
    "categories": [
      "MajorBuy"
    ],
    "price": 87.5,
    "prevClose": 80.3,
    "open": 80.4,
    "high": 88.1,
    "low": 80.4,
    "volume": 2281,
    "ma5": 80.52,
    "ma10": 75.84,
    "ma20": 73.31,
    "ma60": 88.71,
    "vMa5": 1501,
    "vMa10": 1074,
    "high5d": 88.1,
    "high10d": 88.1,
    "high20d": 88.1,
    "sparkline": [
      61.5,
      67.6,
      69.9,
      74.7,
      82.1,
      77.3,
      75.0,
      82.5,
      80.3,
      87.5
    ]
  },
  {
    "code": "6548",
    "name": "長科*",
    "categories": [
      "MajorBuy"
    ],
    "price": 75.3,
    "prevClose": 74.6,
    "open": 74.7,
    "high": 76.3,
    "low": 74.7,
    "volume": 1695,
    "ma5": 74.44,
    "ma10": 71.49,
    "ma20": 70.13,
    "ma60": 77.38,
    "vMa5": 2492,
    "vMa10": 4244,
    "high5d": 77.5,
    "high10d": 79.2,
    "high20d": 79.6,
    "sparkline": [
      59.1,
      65.0,
      70.2,
      74.0,
      74.4,
      74.2,
      72.4,
      75.7,
      74.6,
      75.3
    ]
  },
  {
    "code": "3221",
    "name": "台嘉碩",
    "categories": [
      "MajorBuy"
    ],
    "price": 49.0,
    "prevClose": 48.25,
    "open": 48.1,
    "high": 49.6,
    "low": 47.95,
    "volume": 2131,
    "ma5": 47.78,
    "ma10": 46.34,
    "ma20": 46.98,
    "ma60": 54.46,
    "vMa5": 2384,
    "vMa10": 3275,
    "high5d": 50.2,
    "high10d": 50.2,
    "high20d": 57.5,
    "sparkline": [
      40.2,
      44.2,
      45.45,
      47.0,
      47.65,
      47.3,
      46.15,
      48.2,
      48.25,
      49.0
    ]
  },
  {
    "code": "4561",
    "name": "健椿",
    "categories": [
      "MajorBuy"
    ],
    "price": 46.05,
    "prevClose": 41.9,
    "open": 46.05,
    "high": 46.05,
    "low": 46.05,
    "volume": 573,
    "ma5": 42.91,
    "ma10": 38.83,
    "ma20": 37.48,
    "ma60": 42.02,
    "vMa5": 677,
    "vMa10": 414,
    "high5d": 46.05,
    "high10d": 46.05,
    "high20d": 46.05,
    "sparkline": [
      32.3,
      34.2,
      35.2,
      35.7,
      36.3,
      39.9,
      43.85,
      42.85,
      41.9,
      46.05
    ]
  },
  {
    "code": "6127",
    "name": "九豪",
    "categories": [
      "MajorBuy"
    ],
    "price": 51.8,
    "prevClose": 51.6,
    "open": 51.8,
    "high": 53.3,
    "low": 50.9,
    "volume": 3576,
    "ma5": 50.36,
    "ma10": 48.64,
    "ma20": 51.94,
    "ma60": 67.77,
    "vMa5": 3509,
    "vMa10": 3918,
    "high5d": 54.3,
    "high10d": 54.3,
    "high20d": 69.6,
    "sparkline": [
      42.2,
      45.95,
      48.25,
      48.9,
      49.35,
      50.0,
      48.1,
      50.3,
      51.6,
      51.8
    ]
  }
];