/**
 * 台股盤中波段選股工具 - 數據庫
 * 資料日期：2026-08-11 Yahoo Finance API 即時收盤與均線數據 (精確昨收與漲跌點數)
 */

// 1. 0050 最新 50 持股名單 (數據日期: 2026/08/11, 資料來源: 元大投信 / TWSE 證交所 API)
const HOLDINGS_0050 = {
  date: "2026-08-11",
  sourceName: "元大台灣50 (0050) 官方持股明細 / TWSE 證交所 API",
  sourceUrl: "https://www.yuantaetfs.com/product/detail/0050/Ratio",
  stocks: [
    {
        "code": "2330",
        "name": "台積電",
        "weight": "官方最新持股"
    },
    {
        "code": "2454",
        "name": "聯發科",
        "weight": "官方最新持股"
    },
    {
        "code": "2317",
        "name": "鴻海",
        "weight": "官方最新持股"
    },
    {
        "code": "2308",
        "name": "台達電",
        "weight": "官方最新持股"
    },
    {
        "code": "2303",
        "name": "聯電",
        "weight": "官方最新持股"
    },
    {
        "code": "3711",
        "name": "日月光投控",
        "weight": "官方最新持股"
    },
    {
        "code": "2449",
        "name": "京元電子",
        "weight": "官方最新持股"
    },
    {
        "code": "3037",
        "name": "欣興",
        "weight": "官方最新持股"
    },
    {
        "code": "8046",
        "name": "南電",
        "weight": "官方最新持股"
    },
    {
        "code": "2327",
        "name": "國巨",
        "weight": "官方最新持股"
    },
    {
        "code": "2408",
        "name": "南亞科",
        "weight": "官方最新持股"
    },
    {
        "code": "2382",
        "name": "廣達",
        "weight": "官方最新持股"
    },
    {
        "code": "3231",
        "name": "緯創",
        "weight": "官方最新持股"
    },
    {
        "code": "2356",
        "name": "英業達",
        "weight": "官方最新持股"
    },
    {
        "code": "2376",
        "name": "技嘉",
        "weight": "官方最新持股"
    },
    {
        "code": "2603",
        "name": "長榮",
        "weight": "官方最新持股"
    },
    {
        "code": "2609",
        "name": "陽明",
        "weight": "官方最新持股"
    },
    {
        "code": "2615",
        "name": "萬海",
        "weight": "官方最新持股"
    },
    {
        "code": "2881",
        "name": "富邦金",
        "weight": "官方最新持股"
    },
    {
        "code": "2882",
        "name": "國泰金",
        "weight": "官方最新持股"
    },
    {
        "code": "2891",
        "name": "中信金",
        "weight": "官方最新持股"
    },
    {
        "code": "2886",
        "name": "兆豐金",
        "weight": "官方最新持股"
    },
    {
        "code": "2884",
        "name": "玉山金",
        "weight": "官方最新持股"
    },
    {
        "code": "2892",
        "name": "第一金",
        "weight": "官方最新持股"
    },
    {
        "code": "2885",
        "name": "元大金",
        "weight": "官方最新持股"
    },
    {
        "code": "5880",
        "name": "合庫金",
        "weight": "官方最新持股"
    },
    {
        "code": "2890",
        "name": "永豐金",
        "weight": "官方最新持股"
    },
    {
        "code": "2880",
        "name": "華南金",
        "weight": "官方最新持股"
    },
    {
        "code": "2883",
        "name": "凱基金",
        "weight": "官方最新持股"
    },
    {
        "code": "2887",
        "name": "台新金",
        "weight": "官方最新持股"
    },
    {
        "code": "2002",
        "name": "中鋼",
        "weight": "官方最新持股"
    },
    {
        "code": "1101",
        "name": "台泥",
        "weight": "官方最新持股"
    },
    {
        "code": "1301",
        "name": "台塑",
        "weight": "官方最新持股"
    }
]
};

// 2. 當日成交量 Top 100 股票名單 (數據日期: 2026/08/11, 資料來源: TWSE / Yahoo 股市)
const TOP100_VOLUME = {
  date: "2026-08-11",
  sourceName: "TWSE 台灣證券交易所當日成交量排行 / Yahoo 股市",
  sourceUrl: "https://tw.stock.yahoo.com/rank/volume",
  stocks: [
    {
        "code": "2330",
        "name": "台積電",
        "volume": 19997
    },
    {
        "code": "2454",
        "name": "聯發科",
        "volume": 5857
    },
    {
        "code": "2317",
        "name": "鴻海",
        "volume": 34724
    },
    {
        "code": "2308",
        "name": "台達電",
        "volume": 10310
    },
    {
        "code": "2303",
        "name": "聯電",
        "volume": 175365
    },
    {
        "code": "3711",
        "name": "日月光投控",
        "volume": 28631
    },
    {
        "code": "2449",
        "name": "京元電子",
        "volume": 34830
    },
    {
        "code": "3037",
        "name": "欣興",
        "volume": 7435
    },
    {
        "code": "8046",
        "name": "南電",
        "volume": 3370
    },
    {
        "code": "3189",
        "name": "景碩",
        "volume": 3625
    },
    {
        "code": "6239",
        "name": "力成",
        "volume": 7908
    },
    {
        "code": "6770",
        "name": "力積電",
        "volume": 231182
    },
    {
        "code": "3707",
        "name": "漢磊",
        "volume": 2987
    },
    {
        "code": "6488",
        "name": "環球晶",
        "volume": 7163
    },
    {
        "code": "5483",
        "name": "茂矽",
        "volume": 17952
    },
    {
        "code": "2327",
        "name": "國巨",
        "volume": 36267
    },
    {
        "code": "2492",
        "name": "華新科",
        "volume": 27496
    },
    {
        "code": "3026",
        "name": "禾伸堂",
        "volume": 1247
    },
    {
        "code": "2408",
        "name": "南亞科",
        "volume": 102580
    },
    {
        "code": "2344",
        "name": "華邦電",
        "volume": 154697
    },
    {
        "code": "3260",
        "name": "威剛",
        "volume": 11642
    },
    {
        "code": "8299",
        "name": "群聯",
        "volume": 4442
    },
    {
        "code": "3034",
        "name": "聯詠",
        "volume": 3003
    },
    {
        "code": "2379",
        "name": "瑞昱",
        "volume": 2607
    },
    {
        "code": "2382",
        "name": "廣達",
        "volume": 22725
    },
    {
        "code": "3231",
        "name": "緯創",
        "volume": 69520
    },
    {
        "code": "2356",
        "name": "英業達",
        "volume": 18544
    },
    {
        "code": "2376",
        "name": "技嘉",
        "volume": 6537
    },
    {
        "code": "2603",
        "name": "長榮",
        "volume": 14589
    },
    {
        "code": "2609",
        "name": "陽明",
        "volume": 23632
    },
    {
        "code": "2615",
        "name": "萬海",
        "volume": 18135
    },
    {
        "code": "3481",
        "name": "群創",
        "volume": 219094
    },
    {
        "code": "2409",
        "name": "友達",
        "volume": 215846
    },
    {
        "code": "2881",
        "name": "富邦金",
        "volume": 10390
    },
    {
        "code": "2882",
        "name": "國泰金",
        "volume": 14319
    },
    {
        "code": "2891",
        "name": "中信金",
        "volume": 22141
    },
    {
        "code": "2886",
        "name": "兆豐金",
        "volume": 23255
    },
    {
        "code": "2884",
        "name": "玉山金",
        "volume": 26382
    },
    {
        "code": "2892",
        "name": "第一金",
        "volume": 51223
    },
    {
        "code": "2885",
        "name": "元大金",
        "volume": 20123
    },
    {
        "code": "5880",
        "name": "合庫金",
        "volume": 32072
    },
    {
        "code": "2890",
        "name": "永豐金",
        "volume": 10439
    },
    {
        "code": "2880",
        "name": "華南金",
        "volume": 25551
    },
    {
        "code": "2883",
        "name": "凱基金",
        "volume": 30313
    },
    {
        "code": "2887",
        "name": "台新金",
        "volume": 36054
    },
    {
        "code": "2002",
        "name": "中鋼",
        "volume": 115480
    },
    {
        "code": "1101",
        "name": "台泥",
        "volume": 14546
    },
    {
        "code": "1301",
        "name": "台塑",
        "volume": 14344
    }
]
};

// 3. 台灣半導體供應鏈重點企業 (Top1, Top2, Top3)
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
    "price": 2395.0,
    "open": 2390.0,
    "high": 2405.0,
    "low": 2375.0,
    "prevClose": 2380.0,
    "volume": 16787,
    "ma5": 2383.0,
    "ma10": 2343.5,
    "ma20": 2357.5,
    "vMa5": 22497,
    "vMa10": 33547,
    "limitUpPrice": 2618.0,
    "categories": [
      "0050",
      "Top100",
      "半導體-晶圓"
    ],
    "sparkline": [
      2280.0,
      2200.0,
      2205.0,
      2425.0,
      2370.0,
      2320.0,
      2405.0,
      2365.0,
      2370.0,
      2380.0
    ]
  },
  {
    "code": "2454",
    "name": "聯發科",
    "price": 4020.0,
    "open": 3900.0,
    "high": 4050.0,
    "low": 3810.0,
    "prevClose": 3960.0,
    "volume": 7639,
    "ma5": 3960.0,
    "ma10": 3751.5,
    "ma20": 3690.25,
    "vMa5": 7446,
    "vMa10": 9108,
    "limitUpPrice": 4356.0,
    "categories": [
      "0050",
      "Top100",
      "半導體-IC設計"
    ],
    "sparkline": [
      3315.0,
      3150.0,
      3235.0,
      3555.0,
      3910.0,
      3865.0,
      4000.0,
      3920.0,
      3900.0,
      3960.0
    ]
  },
  {
    "code": "2317",
    "name": "鴻海",
    "price": 263.0,
    "open": 266.0,
    "high": 266.0,
    "low": 260.5,
    "prevClose": 264.5,
    "volume": 24427,
    "ma5": 262.1,
    "ma10": 253.05,
    "ma20": 248.95,
    "vMa5": 49309,
    "vMa10": 59087,
    "limitUpPrice": 290.95,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      238.0,
      237.0,
      229.5,
      250.5,
      253.0,
      250.0,
      258.5,
      264.5,
      260.0,
      264.5
    ]
  },
  {
    "code": "2308",
    "name": "台達電",
    "price": 1805.0,
    "open": 1835.0,
    "high": 1865.0,
    "low": 1785.0,
    "prevClose": 1815.0,
    "volume": 18600,
    "ma5": 1720.0,
    "ma10": 1646.5,
    "ma20": 1721.0,
    "vMa5": 12180,
    "vMa10": 16944,
    "limitUpPrice": 1996.5,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      1580.0,
      1495.0,
      1530.0,
      1640.0,
      1580.0,
      1620.0,
      1650.0,
      1680.0,
      1650.0,
      1815.0
    ]
  },
  {
    "code": "2303",
    "name": "聯電",
    "price": 123.0,
    "open": 121.5,
    "high": 124.5,
    "low": 120.0,
    "prevClose": 123.0,
    "volume": 79709,
    "ma5": 121.1,
    "ma10": 117.55,
    "ma20": 127.75,
    "vMa5": 167983,
    "vMa10": 207512,
    "limitUpPrice": 135.3,
    "categories": [
      "0050",
      "Top100",
      "半導體-晶圓"
    ],
    "sparkline": [
      113.5,
      102.5,
      110.0,
      121.0,
      118.0,
      118.5,
      122.0,
      121.5,
      116.0,
      123.0
    ]
  },
  {
    "code": "3711",
    "name": "日月光投控",
    "price": 629.0,
    "open": 629.0,
    "high": 632.0,
    "low": 610.0,
    "prevClose": 630.0,
    "volume": 19131,
    "ma5": 606.4,
    "ma10": 578.6,
    "ma20": 603.75,
    "vMa5": 21593,
    "vMa10": 23384,
    "limitUpPrice": 693.0,
    "categories": [
      "0050",
      "Top100",
      "半導體-封測"
    ],
    "sparkline": [
      554.0,
      499.0,
      505.0,
      555.0,
      610.0,
      585.0,
      593.0,
      595.0,
      585.0,
      630.0
    ]
  },
  {
    "code": "2449",
    "name": "京元電子",
    "price": 246.0,
    "open": 243.0,
    "high": 250.5,
    "low": 238.5,
    "prevClose": 248.5,
    "volume": 17559,
    "ma5": 246.5,
    "ma10": 235.1,
    "ma20": 252.64,
    "vMa5": 20009,
    "vMa10": 22669,
    "limitUpPrice": 273.35,
    "categories": [
      "0050",
      "Top100",
      "半導體-封測"
    ],
    "sparkline": [
      236.0,
      212.5,
      203.5,
      223.5,
      233.5,
      245.5,
      247.0,
      249.0,
      242.0,
      248.5
    ]
  },
  {
    "code": "3037",
    "name": "欣興",
    "price": 992.0,
    "open": 988.0,
    "high": 995.0,
    "low": 972.0,
    "prevClose": 992.0,
    "volume": 5158,
    "ma5": 976.2,
    "ma10": 886.1,
    "ma20": 865.1,
    "vMa5": 19803,
    "vMa10": 25529,
    "limitUpPrice": 1091.2,
    "categories": [
      "0050",
      "Top100",
      "半導體-載板"
    ],
    "sparkline": [
      764.0,
      688.0,
      716.0,
      787.0,
      865.0,
      924.0,
      969.0,
      973.0,
      955.0,
      992.0
    ]
  },
  {
    "code": "8046",
    "name": "南電",
    "price": 1150.0,
    "open": 1115.0,
    "high": 1160.0,
    "low": 1100.0,
    "prevClose": 1130.0,
    "volume": 2574,
    "ma5": 1105.0,
    "ma10": 1015.9,
    "ma20": 1099.5,
    "vMa5": 3703,
    "vMa10": 8443,
    "limitUpPrice": 1243.0,
    "categories": [
      "0050",
      "Top100",
      "半導體-載板"
    ],
    "sparkline": [
      976.0,
      879.0,
      837.0,
      920.0,
      953.0,
      1045.0,
      1060.0,
      1105.0,
      1080.0,
      1130.0
    ]
  },
  {
    "code": "3189",
    "name": "景碩",
    "price": 842.0,
    "open": 820.0,
    "high": 844.0,
    "low": 807.0,
    "prevClose": 836.0,
    "volume": 2947,
    "ma5": 836.4,
    "ma10": 743.6,
    "ma20": 740.5,
    "vMa5": 15303,
    "vMa10": 13268,
    "limitUpPrice": 919.6,
    "categories": [
      "Top100",
      "半導體-載板"
    ],
    "sparkline": [
      639.0,
      576.0,
      578.0,
      635.0,
      698.0,
      767.0,
      828.0,
      853.0,
      823.0,
      836.0
    ]
  },
  {
    "code": "6239",
    "name": "力成",
    "price": 282.5,
    "open": 291.0,
    "high": 296.0,
    "low": 271.0,
    "prevClose": 288.5,
    "volume": 39685,
    "ma5": 271.9,
    "ma10": 253.75,
    "ma20": 269.62,
    "vMa5": 23453,
    "vMa10": 24271,
    "limitUpPrice": 317.35,
    "categories": [
      "Top100",
      "半導體-封測"
    ],
    "sparkline": [
      251.5,
      233.0,
      214.5,
      235.5,
      238.5,
      256.5,
      256.5,
      269.5,
      262.5,
      288.5
    ]
  },
  {
    "code": "6770",
    "name": "力積電",
    "price": 67.0,
    "open": 66.4,
    "high": 67.5,
    "low": 65.3,
    "prevClose": 67.6,
    "volume": 110508,
    "ma5": 66.56,
    "ma10": 60.2,
    "ma20": 63.24,
    "vMa5": 248185,
    "vMa10": 200669,
    "limitUpPrice": 74.36,
    "categories": [
      "Top100",
      "半導體-晶圓"
    ],
    "sparkline": [
      55.8,
      50.4,
      49.55,
      54.5,
      54.7,
      60.1,
      66.1,
      66.6,
      65.5,
      67.6
    ]
  },
  {
    "code": "3707",
    "name": "漢磊",
    "price": 61.9,
    "open": 61.5,
    "high": 63.6,
    "low": 61.1,
    "prevClose": 62.3,
    "volume": 2674,
    "ma5": 61.76,
    "ma10": 57.9,
    "ma20": 62.1,
    "vMa5": 3648,
    "vMa10": 4751,
    "limitUpPrice": 68.53,
    "categories": [
      "Top100",
      "半導體-功率"
    ],
    "sparkline": [
      54.9,
      52.8,
      48.75,
      52.5,
      56.3,
      59.8,
      62.4,
      62.1,
      60.1,
      62.3
    ]
  },
  {
    "code": "6488",
    "name": "環球晶",
    "price": 849.0,
    "open": 847.0,
    "high": 883.0,
    "low": 823.0,
    "prevClose": 854.0,
    "volume": 8806,
    "ma5": 863.8,
    "ma10": 863.4,
    "ma20": 1030.4,
    "vMa5": 12145,
    "vMa10": 11697,
    "limitUpPrice": 939.4,
    "categories": [
      "Top100",
      "半導體-功率"
    ],
    "sparkline": [
      959.0,
      864.0,
      778.0,
      855.0,
      866.0,
      952.0,
      872.0,
      872.0,
      872.0,
      854.0
    ]
  },
  {
    "code": "5483",
    "name": "茂矽",
    "price": 168.5,
    "open": 168.5,
    "high": 173.0,
    "low": 165.0,
    "prevClose": 169.5,
    "volume": 12871,
    "ma5": 172.4,
    "ma10": 169.15,
    "ma20": 197.55,
    "vMa5": 24057,
    "vMa10": 33122,
    "limitUpPrice": 186.45,
    "categories": [
      "Top100",
      "半導體-功率"
    ],
    "sparkline": [
      185.0,
      166.5,
      152.5,
      157.0,
      172.5,
      181.0,
      178.0,
      177.5,
      168.5,
      169.5
    ]
  },
  {
    "code": "2327",
    "name": "國巨",
    "price": 617.0,
    "open": 568.0,
    "high": 623.0,
    "low": 567.0,
    "prevClose": 573.0,
    "volume": 81510,
    "ma5": 575.6,
    "ma10": 546.15,
    "ma20": 613.17,
    "vMa5": 54337,
    "vMa10": 53739,
    "limitUpPrice": 630.3,
    "categories": [
      "0050",
      "Top100",
      "半導體-被動元件"
    ],
    "sparkline": [
      563.0,
      507.0,
      456.5,
      502.0,
      552.0,
      566.0,
      578.0,
      570.0,
      540.0,
      573.0
    ]
  },
  {
    "code": "2492",
    "name": "華新科",
    "price": 300.5,
    "open": 271.0,
    "high": 300.5,
    "low": 270.0,
    "prevClose": 273.5,
    "volume": 54233,
    "ma5": 268.2,
    "ma10": 247.7,
    "ma20": 272.3,
    "vMa5": 32161,
    "vMa10": 20337,
    "limitUpPrice": 300.85,
    "categories": [
      "Top100",
      "半導體-被動元件"
    ],
    "sparkline": [
      245.0,
      220.5,
      198.5,
      218.0,
      239.5,
      259.5,
      259.5,
      256.5,
      251.0,
      273.5
    ]
  },
  {
    "code": "3026",
    "name": "禾伸堂",
    "price": 646.0,
    "open": 617.0,
    "high": 646.0,
    "low": 594.0,
    "prevClose": 588.0,
    "volume": 22659,
    "ma5": 581.8,
    "ma10": 521.85,
    "ma20": 596.38,
    "vMa5": 5723,
    "vMa10": 4601,
    "limitUpPrice": 646.8,
    "categories": [
      "Top100",
      "半導體-被動元件"
    ],
    "sparkline": [
      527.0,
      474.5,
      427.5,
      450.0,
      459.5,
      498.0,
      547.0,
      593.0,
      535.0,
      588.0
    ]
  },
  {
    "code": "2408",
    "name": "南亞科",
    "price": 489.0,
    "open": 491.5,
    "high": 500.0,
    "low": 474.0,
    "prevClose": 502.0,
    "volume": 113445,
    "ma5": 470.4,
    "ma10": 422.65,
    "ma20": 421.45,
    "vMa5": 105649,
    "vMa10": 88340,
    "limitUpPrice": 552.2,
    "categories": [
      "0050",
      "Top100",
      "半導體-記憶體"
    ],
    "sparkline": [
      392.5,
      353.5,
      328.0,
      360.5,
      396.5,
      436.0,
      445.0,
      459.0,
      457.0,
      502.0
    ]
  },
  {
    "code": "2344",
    "name": "華邦電",
    "price": 178.0,
    "open": 178.0,
    "high": 181.0,
    "low": 172.5,
    "prevClose": 179.5,
    "volume": 194329,
    "ma5": 172.2,
    "ma10": 153.95,
    "ma20": 157.2,
    "vMa5": 186286,
    "vMa10": 143457,
    "limitUpPrice": 197.45,
    "categories": [
      "Top100",
      "半導體-記憶體"
    ],
    "sparkline": [
      144.0,
      130.0,
      118.5,
      130.0,
      143.0,
      157.0,
      169.0,
      171.0,
      163.5,
      179.5
    ]
  },
  {
    "code": "3260",
    "name": "威剛",
    "price": 405.5,
    "open": 409.5,
    "high": 409.5,
    "low": 400.5,
    "prevClose": 411.0,
    "volume": 7589,
    "ma5": 409.9,
    "ma10": 401.05,
    "ma20": 390.73,
    "vMa5": 14704,
    "vMa10": 17335,
    "limitUpPrice": 452.1,
    "categories": [
      "Top100",
      "半導體-記憶體"
    ],
    "sparkline": [
      369.0,
      394.0,
      378.5,
      398.5,
      391.5,
      398.5,
      396.0,
      421.0,
      416.0,
      411.0
    ]
  },
  {
    "code": "8299",
    "name": "群聯",
    "price": 2090.0,
    "open": 2035.0,
    "high": 2100.0,
    "low": 2015.0,
    "prevClose": 2040.0,
    "volume": 3090,
    "ma5": 2004.0,
    "ma10": 1825.0,
    "ma20": 1842.0,
    "vMa5": 4562,
    "vMa10": 4922,
    "limitUpPrice": 2244.0,
    "categories": [
      "Top100",
      "半導體-記憶體"
    ],
    "sparkline": [
      1650.0,
      1515.0,
      1495.0,
      1640.0,
      1760.0,
      1820.0,
      1845.0,
      2025.0,
      2020.0,
      2040.0
    ]
  },
  {
    "code": "3034",
    "name": "聯詠",
    "price": 538.0,
    "open": 543.0,
    "high": 546.0,
    "low": 533.0,
    "prevClose": 544.0,
    "volume": 2418,
    "ma5": 543.4,
    "ma10": 527.5,
    "ma20": 506.73,
    "vMa5": 3838,
    "vMa10": 4434,
    "limitUpPrice": 598.4,
    "categories": [
      "Top100",
      "半導體-IC設計"
    ],
    "sparkline": [
      492.5,
      505.0,
      491.0,
      519.0,
      519.0,
      524.0,
      550.0,
      543.0,
      542.0,
      544.0
    ]
  },
  {
    "code": "2379",
    "name": "瑞昱",
    "price": 772.0,
    "open": 758.0,
    "high": 780.0,
    "low": 758.0,
    "prevClose": 758.0,
    "volume": 2356,
    "ma5": 755.0,
    "ma10": 732.0,
    "ma20": 734.5,
    "vMa5": 2759,
    "vMa10": 4767,
    "limitUpPrice": 833.8,
    "categories": [
      "Top100",
      "半導體-IC設計"
    ],
    "sparkline": [
      731.0,
      738.0,
      697.0,
      683.0,
      704.0,
      723.0,
      751.0,
      744.0,
      750.0,
      758.0
    ]
  },
  {
    "code": "2382",
    "name": "廣達",
    "price": 315.5,
    "open": 312.5,
    "high": 316.5,
    "low": 309.5,
    "prevClose": 313.5,
    "volume": 15771,
    "ma5": 306.6,
    "ma10": 301.0,
    "ma20": 316.85,
    "vMa5": 17420,
    "vMa10": 27309,
    "limitUpPrice": 344.85,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      313.5,
      309.5,
      279.0,
      291.5,
      296.5,
      300.5,
      304.0,
      302.0,
      298.0,
      313.5
    ]
  },
  {
    "code": "3231",
    "name": "緯創",
    "price": 191.0,
    "open": 190.0,
    "high": 193.5,
    "low": 188.0,
    "prevClose": 193.0,
    "volume": 34395,
    "ma5": 190.0,
    "ma10": 183.65,
    "ma20": 171.2,
    "vMa5": 90973,
    "vMa10": 113535,
    "limitUpPrice": 212.3,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      170.0,
      169.5,
      160.0,
      176.0,
      186.0,
      195.0,
      193.0,
      189.5,
      183.5,
      193.0
    ]
  },
  {
    "code": "2356",
    "name": "英業達",
    "price": 65.1,
    "open": 65.9,
    "high": 66.0,
    "low": 64.2,
    "prevClose": 66.0,
    "volume": 14570,
    "ma5": 65.26,
    "ma10": 63.58,
    "ma20": 62.26,
    "vMa5": 21960,
    "vMa10": 29729,
    "limitUpPrice": 72.6,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      58.8,
      60.3,
      57.5,
      61.8,
      63.9,
      66.0,
      65.7,
      65.5,
      64.0,
      66.0
    ]
  },
  {
    "code": "2376",
    "name": "技嘉",
    "price": 350.5,
    "open": 349.5,
    "high": 353.0,
    "low": 346.5,
    "prevClose": 349.5,
    "volume": 4089,
    "ma5": 346.0,
    "ma10": 336.3,
    "ma20": 338.73,
    "vMa5": 6649,
    "vMa10": 7502,
    "limitUpPrice": 384.45,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      327.0,
      321.5,
      318.5,
      336.5,
      324.5,
      332.0,
      342.0,
      344.0,
      344.0,
      349.5
    ]
  },
  {
    "code": "2603",
    "name": "長榮",
    "price": 218.0,
    "open": 215.0,
    "high": 220.0,
    "low": 213.5,
    "prevClose": 214.0,
    "volume": 12457,
    "ma5": 209.7,
    "ma10": 206.85,
    "ma20": 204.2,
    "vMa5": 8287,
    "vMa10": 8143,
    "limitUpPrice": 235.4,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      200.0,
      201.5,
      201.0,
      204.0,
      207.5,
      206.0,
      205.0,
      204.0,
      207.5,
      214.0
    ]
  },
  {
    "code": "2609",
    "name": "陽明",
    "price": 52.0,
    "open": 51.8,
    "high": 52.2,
    "low": 51.3,
    "prevClose": 51.6,
    "volume": 22709,
    "ma5": 51.02,
    "ma10": 50.78,
    "ma20": 50.62,
    "vMa5": 16177,
    "vMa10": 15879,
    "limitUpPrice": 56.76,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      50.7,
      50.1,
      50.0,
      50.8,
      50.8,
      51.0,
      50.6,
      50.4,
      50.5,
      51.6
    ]
  },
  {
    "code": "2615",
    "name": "萬海",
    "price": 87.1,
    "open": 87.7,
    "high": 88.8,
    "low": 86.4,
    "prevClose": 87.5,
    "volume": 13500,
    "ma5": 85.84,
    "ma10": 85.55,
    "ma20": 84.36,
    "vMa5": 9295,
    "vMa10": 9016,
    "limitUpPrice": 96.25,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      83.6,
      85.0,
      84.4,
      84.7,
      86.1,
      86.1,
      85.4,
      84.3,
      84.9,
      87.5
    ]
  },
  {
    "code": "3481",
    "name": "群創",
    "price": 50.1,
    "open": 51.4,
    "high": 52.3,
    "low": 49.65,
    "prevClose": 52.3,
    "volume": 359000,
    "ma5": 49.55,
    "ma10": 47.0,
    "ma20": 49.29,
    "vMa5": 312787,
    "vMa10": 368223,
    "limitUpPrice": 57.53,
    "categories": [
      "Top100"
    ],
    "sparkline": [
      45.0,
      41.8,
      41.4,
      45.5,
      45.8,
      47.8,
      47.8,
      50.0,
      47.55,
      52.3
    ]
  },
  {
    "code": "2409",
    "name": "友達",
    "price": 26.1,
    "open": 27.85,
    "high": 27.9,
    "low": 25.9,
    "prevClose": 27.0,
    "volume": 459245,
    "ma5": 25.33,
    "ma10": 24.51,
    "ma20": 25.16,
    "vMa5": 234030,
    "vMa10": 210237,
    "limitUpPrice": 29.7,
    "categories": [
      "Top100"
    ],
    "sparkline": [
      23.9,
      23.65,
      22.2,
      24.2,
      23.9,
      24.45,
      24.45,
      24.55,
      24.55,
      27.0
    ]
  },
  {
    "code": "2881",
    "name": "富邦金",
    "price": 128.0,
    "open": 129.5,
    "high": 129.5,
    "low": 127.5,
    "prevClose": 128.5,
    "volume": 11094,
    "ma5": 127.8,
    "ma10": 127.4,
    "ma20": 126.88,
    "vMa5": 13416,
    "vMa10": 20400,
    "limitUpPrice": 141.35,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      125.5,
      123.0,
      124.0,
      130.0,
      129.5,
      128.5,
      129.5,
      126.0,
      127.0,
      128.5
    ]
  },
  {
    "code": "2882",
    "name": "國泰金",
    "price": 99.6,
    "open": 101.5,
    "high": 101.5,
    "low": 99.1,
    "prevClose": 101.0,
    "volume": 15315,
    "ma5": 99.6,
    "ma10": 98.85,
    "ma20": 97.58,
    "vMa5": 14682,
    "vMa10": 22251,
    "limitUpPrice": 111.1,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      95.4,
      94.1,
      95.2,
      101.5,
      100.5,
      99.2,
      100.5,
      97.5,
      99.4,
      101.0
    ]
  },
  {
    "code": "2891",
    "name": "中信金",
    "price": 66.8,
    "open": 67.0,
    "high": 67.3,
    "low": 66.3,
    "prevClose": 66.5,
    "volume": 28814,
    "ma5": 65.9,
    "ma10": 64.91,
    "ma20": 63.92,
    "vMa5": 25414,
    "vMa10": 35654,
    "limitUpPrice": 73.15,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      62.4,
      62.0,
      63.1,
      64.9,
      64.8,
      64.8,
      66.0,
      64.6,
      65.6,
      66.5
    ]
  },
  {
    "code": "2886",
    "name": "兆豐金",
    "price": 49.4,
    "open": 50.7,
    "high": 50.9,
    "low": 49.35,
    "prevClose": 51.0,
    "volume": 32153,
    "ma5": 50.56,
    "ma10": 50.96,
    "ma20": 49.51,
    "vMa5": 27770,
    "vMa10": 34698,
    "limitUpPrice": 56.1,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      49.45,
      49.9,
      51.5,
      53.1,
      51.6,
      50.7,
      51.2,
      50.3,
      50.9,
      51.0
    ]
  },
  {
    "code": "2884",
    "name": "玉山金",
    "price": 36.9,
    "open": 37.2,
    "high": 37.5,
    "low": 36.65,
    "prevClose": 37.8,
    "volume": 37251,
    "ma5": 37.78,
    "ma10": 37.82,
    "ma20": 36.79,
    "vMa5": 27537,
    "vMa10": 41747,
    "limitUpPrice": 41.58,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      36.25,
      36.5,
      37.7,
      38.65,
      38.45,
      38.0,
      38.1,
      37.95,
      38.15,
      37.8
    ]
  },
  {
    "code": "2892",
    "name": "第一金",
    "price": 32.7,
    "open": 33.55,
    "high": 33.7,
    "low": 32.6,
    "prevClose": 34.95,
    "volume": 85113,
    "ma5": 34.92,
    "ma10": 35.29,
    "ma20": 34.74,
    "vMa5": 53535,
    "vMa10": 54323,
    "limitUpPrice": 38.45,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      34.8,
      34.8,
      35.5,
      36.75,
      35.95,
      35.3,
      35.9,
      35.5,
      35.55,
      34.95
    ]
  },
  {
    "code": "2885",
    "name": "元大金",
    "price": 68.4,
    "open": 67.6,
    "high": 69.0,
    "low": 67.5,
    "prevClose": 68.2,
    "volume": 12030,
    "ma5": 68.16,
    "ma10": 67.12,
    "ma20": 65.59,
    "vMa5": 17836,
    "vMa10": 27579,
    "limitUpPrice": 75.02,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      63.5,
      62.2,
      63.1,
      68.1,
      68.0,
      69.0,
      69.4,
      67.1,
      67.7,
      68.2
    ]
  },
  {
    "code": "5880",
    "name": "合庫金",
    "price": 24.0,
    "open": 24.75,
    "high": 24.8,
    "low": 23.95,
    "prevClose": 25.46,
    "volume": 51312,
    "ma5": 25.29,
    "ma10": 25.73,
    "ma20": 25.36,
    "vMa5": 29270,
    "vMa10": 37959,
    "limitUpPrice": 28.01,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      25.95,
      26.1,
      27.0,
      27.6,
      26.9,
      26.55,
      26.6,
      26.1,
      26.2,
      26.1
    ]
  },
  {
    "code": "2890",
    "name": "永豐金",
    "price": 39.05,
    "open": 39.0,
    "high": 39.25,
    "low": 38.4,
    "prevClose": 38.9,
    "volume": 23650,
    "ma5": 39.03,
    "ma10": 39.29,
    "ma20": 39.16,
    "vMa5": 15893,
    "vMa10": 26543,
    "limitUpPrice": 42.79,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      38.65,
      38.6,
      38.85,
      40.6,
      40.05,
      39.6,
      39.55,
      38.7,
      38.95,
      38.9
    ]
  },
  {
    "code": "2880",
    "name": "華南金",
    "price": 43.65,
    "open": 43.6,
    "high": 44.2,
    "low": 43.4,
    "prevClose": 44.0,
    "volume": 24773,
    "ma5": 43.98,
    "ma10": 43.43,
    "ma20": 41.97,
    "vMa5": 24226,
    "vMa10": 27986,
    "limitUpPrice": 48.4,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      41.4,
      41.8,
      42.65,
      43.7,
      43.05,
      43.25,
      43.8,
      44.05,
      44.4,
      44.0
    ]
  },
  {
    "code": "2883",
    "name": "凱基金",
    "price": 31.05,
    "open": 30.8,
    "high": 31.2,
    "low": 30.65,
    "prevClose": 31.05,
    "volume": 21395,
    "ma5": 31.03,
    "ma10": 30.51,
    "ma20": 30.36,
    "vMa5": 37872,
    "vMa10": 47473,
    "limitUpPrice": 34.16,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      29.6,
      29.15,
      28.95,
      30.85,
      30.4,
      30.55,
      31.6,
      30.6,
      30.85,
      31.05
    ]
  },
  {
    "code": "2887",
    "name": "台新金",
    "price": 35.55,
    "open": 35.6,
    "high": 36.0,
    "low": 35.2,
    "prevClose": 35.9,
    "volume": 45822,
    "ma5": 35.36,
    "ma10": 34.94,
    "ma20": 34.89,
    "vMa5": 41213,
    "vMa10": 55173,
    "limitUpPrice": 39.49,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      33.95,
      32.6,
      33.15,
      35.95,
      35.3,
      35.55,
      35.7,
      34.5,
      35.15,
      35.9
    ]
  },
  {
    "code": "2002",
    "name": "中鋼",
    "price": 19.75,
    "open": 19.8,
    "high": 19.9,
    "low": 19.55,
    "prevClose": 19.65,
    "volume": 82850,
    "ma5": 19.27,
    "ma10": 19.09,
    "ma20": 18.98,
    "vMa5": 55991,
    "vMa10": 46804,
    "limitUpPrice": 21.61,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      19.0,
      18.95,
      18.95,
      18.95,
      18.85,
      18.85,
      18.9,
      19.0,
      19.05,
      19.65
    ]
  },
  {
    "code": "1101",
    "name": "台泥",
    "price": 24.65,
    "open": 24.55,
    "high": 24.8,
    "low": 24.3,
    "prevClose": 24.55,
    "volume": 19778,
    "ma5": 24.39,
    "ma10": 24.2,
    "ma20": 24.09,
    "vMa5": 20204,
    "vMa10": 26527,
    "limitUpPrice": 27.01,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      24.8,
      24.35,
      24.05,
      24.3,
      23.8,
      23.55,
      24.05,
      24.35,
      24.35,
      24.55
    ]
  },
  {
    "code": "1301",
    "name": "台塑",
    "price": 55.6,
    "open": 55.6,
    "high": 55.9,
    "low": 54.3,
    "prevClose": 55.6,
    "volume": 17015,
    "ma5": 55.62,
    "ma10": 55.24,
    "ma20": 59.09,
    "vMa5": 17885,
    "vMa10": 27053,
    "limitUpPrice": 61.16,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      57.5,
      56.2,
      54.0,
      55.0,
      53.8,
      55.3,
      56.0,
      55.1,
      55.8,
      55.6
    ]
  }
];
