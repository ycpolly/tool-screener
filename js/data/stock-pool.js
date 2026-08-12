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
  "date": "2026/08/12",
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
    "volume": 19133,
    "ma5": 2385.0,
    "ma10": 2365.0,
    "ma20": 2356.25,
    "vMa5": 19767,
    "vMa10": 29828,
    "limitUpPrice": 2618.0,
    "categories": [
      "0050",
      "半導體-晶圓"
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
    "high20d": 2470.0
  },
  {
    "code": "2454",
    "name": "聯發科",
    "price": 4015.0,
    "open": 3950.0,
    "high": 4030.0,
    "low": 3950.0,
    "prevClose": 4020.0,
    "volume": 5839,
    "ma5": 3963.0,
    "ma10": 3838.0,
    "ma20": 3704.0,
    "vMa5": 6258,
    "vMa10": 8136,
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
    "high20d": 4125.0
  },
  {
    "code": "2317",
    "name": "鴻海",
    "price": 270.0,
    "open": 264.5,
    "high": 270.5,
    "low": 264.0,
    "prevClose": 263.0,
    "volume": 59746,
    "ma5": 264.4,
    "ma10": 256.35,
    "ma20": 250.5,
    "vMa5": 47046,
    "vMa10": 56822,
    "limitUpPrice": 290.95,
    "categories": [
      "0050",
      "Top100"
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
    "high20d": 270.5
  },
  {
    "code": "2308",
    "name": "台達電",
    "price": 1790.0,
    "open": 1810.0,
    "high": 1830.0,
    "low": 1785.0,
    "prevClose": 1805.0,
    "volume": 8968,
    "ma5": 1748.0,
    "ma10": 1676.0,
    "ma20": 1716.0,
    "vMa5": 11273,
    "vMa10": 15709,
    "limitUpPrice": 1996.5,
    "categories": [
      "0050"
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
    "high20d": 1950.0
  },
  {
    "code": "2303",
    "name": "聯電",
    "price": 123.0,
    "open": 123.0,
    "high": 125.5,
    "low": 121.0,
    "prevClose": 123.0,
    "volume": 92999,
    "ma5": 121.3,
    "ma10": 119.6,
    "ma20": 125.6,
    "vMa5": 131706,
    "vMa10": 189866,
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
    "high20d": 168.0
  },
  {
    "code": "3711",
    "name": "日月光投控",
    "price": 621.0,
    "open": 633.0,
    "high": 634.0,
    "low": 619.0,
    "prevClose": 629.0,
    "volume": 17268,
    "ma5": 612.0,
    "ma10": 590.8,
    "ma20": 600.65,
    "vMa5": 18556,
    "vMa10": 22885,
    "limitUpPrice": 693.0,
    "categories": [
      "0050",
      "半導體-封測"
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
    "high20d": 694.0
  },
  {
    "code": "2449",
    "name": "京元電子",
    "price": 259.0,
    "open": 246.0,
    "high": 260.0,
    "low": 243.5,
    "prevClose": 246.0,
    "volume": 21682,
    "ma5": 248.9,
    "ma10": 239.75,
    "ma20": 250.97,
    "vMa5": 20438,
    "vMa10": 22703,
    "limitUpPrice": 273.35,
    "categories": [
      "0050",
      "半導體-封測"
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
    "high20d": 308.57
  },
  {
    "code": "3037",
    "name": "欣興",
    "price": 1000.0,
    "open": 999.0,
    "high": 1010.0,
    "low": 990.0,
    "prevClose": 992.0,
    "volume": 8159,
    "ma5": 982.4,
    "ma10": 917.3,
    "ma20": 868.3,
    "vMa5": 13142,
    "vMa10": 23351,
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
    "high20d": 1010.0
  },
  {
    "code": "8046",
    "name": "南電",
    "price": 1265.0,
    "open": 1170.0,
    "high": 1265.0,
    "low": 1130.0,
    "prevClose": 1150.0,
    "volume": 12961,
    "ma5": 1146.0,
    "ma10": 1054.5,
    "ma20": 1092.0,
    "vMa5": 5213,
    "vMa10": 8418,
    "limitUpPrice": 1243.0,
    "categories": [
      "0050",
      "半導體-載板"
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
    "high20d": 1415.0
  },
  {
    "code": "3189",
    "name": "景碩",
    "price": 858.0,
    "open": 847.0,
    "high": 864.0,
    "low": 827.0,
    "prevClose": 842.0,
    "volume": 3436,
    "ma5": 842.4,
    "ma10": 771.8,
    "ma20": 741.15,
    "vMa5": 9648,
    "vMa10": 12056,
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
    "high20d": 864.0
  },
  {
    "code": "6239",
    "name": "力成",
    "price": 281.5,
    "open": 284.0,
    "high": 287.0,
    "low": 280.5,
    "prevClose": 282.5,
    "volume": 13898,
    "ma5": 276.9,
    "ma10": 258.6,
    "ma20": 268.0,
    "vMa5": 19764,
    "vMa10": 22337,
    "limitUpPrice": 317.35,
    "categories": [
      "半導體-封測"
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
    "high20d": 325.0
  },
  {
    "code": "6770",
    "name": "力積電",
    "price": 73.7,
    "open": 68.0,
    "high": 73.7,
    "low": 67.9,
    "prevClose": 67.0,
    "volume": 428376,
    "ma5": 68.08,
    "ma10": 62.53,
    "ma20": 63.12,
    "vMa5": 285853,
    "vMa10": 227736,
    "limitUpPrice": 74.36,
    "categories": [
      "Top100",
      "半導體-晶圓"
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
    "high20d": 79.5
  },
  {
    "code": "3707",
    "name": "漢磊",
    "price": 63.5,
    "open": 62.0,
    "high": 65.0,
    "low": 62.0,
    "prevClose": 61.9,
    "volume": 5137,
    "ma5": 61.98,
    "ma10": 58.96,
    "ma20": 61.27,
    "vMa5": 3373,
    "vMa10": 4515,
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
    "high20d": 80.1
  },
  {
    "code": "6488",
    "name": "環球晶",
    "price": 933.0,
    "open": 844.0,
    "high": 933.0,
    "low": 844.0,
    "prevClose": 849.0,
    "volume": 11055,
    "ma5": 876.0,
    "ma10": 870.3,
    "ma20": 1003.05,
    "vMa5": 9263,
    "vMa10": 12300,
    "limitUpPrice": 939.4,
    "categories": [
      "Top100",
      "半導體-功率"
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
    "high20d": 1460.0
  },
  {
    "code": "5483",
    "name": "茂矽",
    "price": 185.0,
    "open": 169.5,
    "high": 185.0,
    "low": 169.5,
    "prevClose": 168.5,
    "volume": 32851,
    "ma5": 173.8,
    "ma10": 171.0,
    "ma20": 192.9,
    "vMa5": 20188,
    "vMa10": 34772,
    "limitUpPrice": 186.45,
    "categories": [
      "Top100",
      "半導體-功率"
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
    "high20d": 279.5
  },
  {
    "code": "2327",
    "name": "國巨",
    "price": 602.0,
    "open": 607.0,
    "high": 625.0,
    "low": 600.0,
    "prevClose": 617.0,
    "volume": 55972,
    "ma5": 580.4,
    "ma10": 555.65,
    "ma20": 603.38,
    "vMa5": 52910,
    "vMa10": 54152,
    "limitUpPrice": 630.3,
    "categories": [
      "0050",
      "Top100",
      "半導體-被動元件"
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
    "high20d": 807.0
  },
  {
    "code": "2492",
    "name": "華新科",
    "price": 288.0,
    "open": 298.0,
    "high": 312.0,
    "low": 288.0,
    "prevClose": 300.5,
    "volume": 66827,
    "ma5": 273.9,
    "ma10": 254.45,
    "ma20": 267.75,
    "vMa5": 36762,
    "vMa10": 26797,
    "limitUpPrice": 300.85,
    "categories": [
      "Top100",
      "半導體-被動元件"
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
    "high20d": 375.0
  },
  {
    "code": "3026",
    "name": "禾伸堂",
    "price": 685.0,
    "open": 646.0,
    "high": 710.0,
    "low": 631.0,
    "prevClose": 646.0,
    "volume": 24133,
    "ma5": 609.4,
    "ma10": 542.9,
    "ma20": 588.73,
    "vMa5": 10277,
    "vMa10": 6920,
    "limitUpPrice": 646.8,
    "categories": [
      "半導體-被動元件"
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
    "high20d": 854.0
  },
  {
    "code": "2408",
    "name": "南亞科",
    "price": 482.5,
    "open": 497.0,
    "high": 511.0,
    "low": 480.5,
    "prevClose": 489.0,
    "volume": 93467,
    "ma5": 477.9,
    "ma10": 435.55,
    "ma20": 421.52,
    "vMa5": 95620,
    "vMa10": 92059,
    "limitUpPrice": 552.2,
    "categories": [
      "0050",
      "Top100",
      "半導體-記憶體"
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
    "high20d": 511.0
  },
  {
    "code": "2344",
    "name": "華邦電",
    "price": 177.0,
    "open": 186.5,
    "high": 193.0,
    "low": 174.5,
    "prevClose": 178.0,
    "volume": 206979,
    "ma5": 173.8,
    "ma10": 158.65,
    "ma20": 157.03,
    "vMa5": 182235,
    "vMa10": 155944,
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
    "high20d": 193.0
  },
  {
    "code": "3260",
    "name": "威剛",
    "price": 409.5,
    "open": 408.5,
    "high": 422.0,
    "low": 408.5,
    "prevClose": 405.5,
    "volume": 12177,
    "ma5": 412.6,
    "ma10": 402.6,
    "ma20": 390.8,
    "vMa5": 14374,
    "vMa10": 15467,
    "limitUpPrice": 452.1,
    "categories": [
      "Top100",
      "半導體-記憶體"
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
    "high20d": 437.0
  },
  {
    "code": "8299",
    "name": "群聯",
    "price": 2210.0,
    "open": 2110.0,
    "high": 2245.0,
    "low": 2110.0,
    "prevClose": 2090.0,
    "volume": 6087,
    "ma5": 2077.0,
    "ma10": 1894.5,
    "ma20": 1847.25,
    "vMa5": 5026,
    "vMa10": 4696,
    "limitUpPrice": 2244.0,
    "categories": [
      "Top100",
      "半導體-記憶體"
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
    "high20d": 2245.0
  },
  {
    "code": "3034",
    "name": "聯詠",
    "price": 537.0,
    "open": 538.0,
    "high": 544.0,
    "low": 532.0,
    "prevClose": 538.0,
    "volume": 3046,
    "ma5": 540.8,
    "ma10": 530.7,
    "ma20": 509.98,
    "vMa5": 2933,
    "vMa10": 4126,
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
    "high20d": 572.0
  },
  {
    "code": "2379",
    "name": "瑞昱",
    "price": 766.0,
    "open": 772.0,
    "high": 776.0,
    "low": 760.0,
    "prevClose": 772.0,
    "volume": 1486,
    "ma5": 758.0,
    "ma10": 734.8,
    "ma20": 735.15,
    "vMa5": 2305,
    "vMa10": 4360,
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
    "high20d": 783.0
  },
  {
    "code": "2382",
    "name": "廣達",
    "price": 325.5,
    "open": 317.0,
    "high": 330.0,
    "low": 316.5,
    "prevClose": 315.5,
    "volume": 23202,
    "ma5": 310.9,
    "ma10": 302.6,
    "ma20": 314.07,
    "vMa5": 18264,
    "vMa10": 26851,
    "limitUpPrice": 344.85,
    "categories": [
      "0050"
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
    "high20d": 360.5
  },
  {
    "code": "3231",
    "name": "緯創",
    "price": 193.5,
    "open": 189.5,
    "high": 195.0,
    "low": 189.0,
    "prevClose": 191.0,
    "volume": 42999,
    "ma5": 190.1,
    "ma10": 186.05,
    "ma20": 173.6,
    "vMa5": 58573,
    "vMa10": 102371,
    "limitUpPrice": 212.3,
    "categories": [
      "0050",
      "Top100"
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
    "high20d": 202.5
  },
  {
    "code": "2356",
    "name": "英業達",
    "price": 69.0,
    "open": 66.0,
    "high": 71.1,
    "low": 65.9,
    "prevClose": 65.1,
    "volume": 79680,
    "ma5": 65.92,
    "ma10": 64.45,
    "ma20": 62.65,
    "vMa5": 28865,
    "vMa10": 32443,
    "limitUpPrice": 72.6,
    "categories": [
      "Top100"
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
    "high20d": 71.1
  },
  {
    "code": "2376",
    "name": "技嘉",
    "price": 375.5,
    "open": 352.0,
    "high": 381.0,
    "low": 352.0,
    "prevClose": 350.5,
    "volume": 17967,
    "ma5": 352.7,
    "ma10": 341.7,
    "ma20": 340.3,
    "vMa5": 8181,
    "vMa10": 8547,
    "limitUpPrice": 384.45,
    "categories": [],
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
    "high20d": 381.0
  },
  {
    "code": "2603",
    "name": "長榮",
    "price": 214.5,
    "open": 217.0,
    "high": 217.0,
    "low": 213.0,
    "prevClose": 218.0,
    "volume": 9529,
    "ma5": 211.6,
    "ma10": 208.15,
    "ma20": 204.95,
    "vMa5": 9047,
    "vMa10": 7759,
    "limitUpPrice": 235.4,
    "categories": [
      "0050"
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
    "high20d": 220.0
  },
  {
    "code": "2609",
    "name": "陽明",
    "price": 51.7,
    "open": 52.0,
    "high": 52.1,
    "low": 51.3,
    "prevClose": 52.0,
    "volume": 10368,
    "ma5": 51.24,
    "ma10": 50.94,
    "ma20": 50.7,
    "vMa5": 14938,
    "vMa10": 14653,
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
    "high20d": 52.2
  },
  {
    "code": "2615",
    "name": "萬海",
    "price": 87.1,
    "open": 87.7,
    "high": 87.7,
    "low": 86.0,
    "prevClose": 87.1,
    "volume": 7108,
    "ma5": 86.18,
    "ma10": 85.76,
    "ma20": 84.63,
    "vMa5": 9422,
    "vMa10": 8096,
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
    "high20d": 88.8
  },
  {
    "code": "3481",
    "name": "群創",
    "price": 50.4,
    "open": 51.0,
    "high": 52.1,
    "low": 50.3,
    "prevClose": 50.1,
    "volume": 188570,
    "ma5": 50.07,
    "ma10": 47.86,
    "ma20": 48.88,
    "vMa5": 266372,
    "vMa10": 334870,
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
    "high20d": 58.9
  },
  {
    "code": "2409",
    "name": "友達",
    "price": 26.25,
    "open": 26.4,
    "high": 26.9,
    "low": 26.15,
    "prevClose": 26.1,
    "volume": 169659,
    "ma5": 25.69,
    "ma10": 24.77,
    "ma20": 25.05,
    "vMa5": 226786,
    "vMa10": 202040,
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
    "high20d": 28.2
  },
  {
    "code": "2881",
    "name": "富邦金",
    "price": 127.0,
    "open": 127.5,
    "high": 129.5,
    "low": 126.5,
    "prevClose": 128.0,
    "volume": 9156,
    "ma5": 127.3,
    "ma10": 127.8,
    "ma20": 126.8,
    "vMa5": 12194,
    "vMa10": 18246,
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
    "high20d": 132.5
  },
  {
    "code": "2882",
    "name": "國泰金",
    "price": 99.7,
    "open": 100.0,
    "high": 101.0,
    "low": 98.5,
    "prevClose": 99.6,
    "volume": 17432,
    "ma5": 99.44,
    "ma10": 99.41,
    "ma20": 97.73,
    "vMa5": 15423,
    "vMa10": 21003,
    "limitUpPrice": 111.1,
    "categories": [
      "0050"
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
    "high20d": 102.5
  },
  {
    "code": "2891",
    "name": "中信金",
    "price": 66.6,
    "open": 66.3,
    "high": 67.0,
    "low": 65.5,
    "prevClose": 66.8,
    "volume": 37726,
    "ma5": 66.02,
    "ma10": 65.37,
    "ma20": 64.08,
    "vMa5": 26308,
    "vMa10": 33975,
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
    "high20d": 67.3
  },
  {
    "code": "2886",
    "name": "兆豐金",
    "price": 48.7,
    "open": 49.4,
    "high": 49.45,
    "low": 48.55,
    "prevClose": 49.4,
    "volume": 31466,
    "ma5": 50.06,
    "ma10": 50.84,
    "ma20": 49.65,
    "vMa5": 28033,
    "vMa10": 33331,
    "limitUpPrice": 56.1,
    "categories": [
      "0050",
      "Top100"
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
    "high20d": 53.7
  },
  {
    "code": "2884",
    "name": "玉山金",
    "price": 36.75,
    "open": 37.2,
    "high": 37.25,
    "low": 36.3,
    "prevClose": 36.9,
    "volume": 28077,
    "ma5": 37.51,
    "ma10": 37.85,
    "ma20": 36.9,
    "vMa5": 26128,
    "vMa10": 36935,
    "limitUpPrice": 41.58,
    "categories": [
      "0050"
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
    "high20d": 39.1
  },
  {
    "code": "2892",
    "name": "第一金",
    "price": 33.15,
    "open": 32.7,
    "high": 33.15,
    "low": 32.45,
    "prevClose": 32.7,
    "volume": 42888,
    "ma5": 34.37,
    "ma10": 35.13,
    "ma20": 34.75,
    "vMa5": 52291,
    "vMa10": 53586,
    "limitUpPrice": 38.45,
    "categories": [
      "0050",
      "Top100"
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
    "high20d": 36.9
  },
  {
    "code": "2885",
    "name": "元大金",
    "price": 68.6,
    "open": 68.9,
    "high": 69.4,
    "low": 67.9,
    "prevClose": 68.4,
    "volume": 12218,
    "ma5": 68.0,
    "ma10": 67.76,
    "ma20": 65.67,
    "vMa5": 16911,
    "vMa10": 24551,
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
    "high20d": 70.8
  },
  {
    "code": "5880",
    "name": "合庫金",
    "price": 24.1,
    "open": 24.0,
    "high": 24.1,
    "low": 23.85,
    "prevClose": 24.0,
    "volume": 18498,
    "ma5": 24.92,
    "ma10": 25.6,
    "ma20": 25.33,
    "vMa5": 28972,
    "vMa10": 35060,
    "limitUpPrice": 28.01,
    "categories": [
      "0050"
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
    "high20d": 26.98
  },
  {
    "code": "2890",
    "name": "永豐金",
    "price": 39.85,
    "open": 39.15,
    "high": 39.9,
    "low": 39.0,
    "prevClose": 39.05,
    "volume": 19273,
    "ma5": 39.09,
    "ma10": 39.41,
    "ma20": 39.2,
    "vMa5": 15583,
    "vMa10": 24559,
    "limitUpPrice": 42.79,
    "categories": [
      "0050"
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
    "high20d": 41.05
  },
  {
    "code": "2880",
    "name": "華南金",
    "price": 43.2,
    "open": 43.9,
    "high": 43.95,
    "low": 42.85,
    "prevClose": 43.65,
    "volume": 30239,
    "ma5": 43.86,
    "ma10": 43.58,
    "ma20": 42.19,
    "vMa5": 26100,
    "vMa10": 27546,
    "limitUpPrice": 48.4,
    "categories": [
      "0050",
      "Top100"
    ],
    "sparkline": [
      42.65,
      43.7,
      43.05,
      43.25,
      43.8,
      44.05,
      44.4,
      44.0,
      43.65,
      43.2
    ],
    "ma60": 37.97,
    "high20d": 45.15
  },
  {
    "code": "2883",
    "name": "凱基金",
    "price": 31.2,
    "open": 31.0,
    "high": 31.4,
    "low": 30.55,
    "prevClose": 31.05,
    "volume": 29104,
    "ma5": 30.95,
    "ma10": 30.71,
    "ma20": 30.42,
    "vMa5": 30659,
    "vMa10": 44569,
    "limitUpPrice": 34.16,
    "categories": [
      "0050",
      "Top100"
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
    "high20d": 31.75
  },
  {
    "code": "2887",
    "name": "台新金",
    "price": 35.65,
    "open": 35.65,
    "high": 36.0,
    "low": 35.1,
    "prevClose": 35.55,
    "volume": 35215,
    "ma5": 35.35,
    "ma10": 35.24,
    "ma20": 34.88,
    "vMa5": 41027,
    "vMa10": 48992,
    "limitUpPrice": 39.49,
    "categories": [
      "0050",
      "Top100"
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
    "high20d": 36.3
  },
  {
    "code": "2002",
    "name": "中鋼",
    "price": 19.75,
    "open": 19.85,
    "high": 19.85,
    "low": 19.65,
    "prevClose": 19.75,
    "volume": 44467,
    "ma5": 19.44,
    "ma10": 19.17,
    "ma20": 19.04,
    "vMa5": 61319,
    "vMa10": 45854,
    "limitUpPrice": 21.61,
    "categories": [
      "Top100"
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
    "high20d": 19.9
  },
  {
    "code": "1101",
    "name": "台泥",
    "price": 24.45,
    "open": 24.65,
    "high": 24.75,
    "low": 24.45,
    "prevClose": 24.65,
    "volume": 13963,
    "ma5": 24.47,
    "ma10": 24.21,
    "ma20": 24.13,
    "vMa5": 18931,
    "vMa10": 23210,
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
    "high20d": 25.05
  },
  {
    "code": "1301",
    "name": "台塑",
    "price": 56.2,
    "open": 55.7,
    "high": 56.5,
    "low": 55.6,
    "prevClose": 55.6,
    "volume": 14680,
    "ma5": 55.66,
    "ma10": 55.24,
    "ma20": 58.61,
    "vMa5": 16625,
    "vMa10": 24019,
    "limitUpPrice": 61.16,
    "categories": [],
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
    "high20d": 69.8
  },
  {
    "code": "5876",
    "name": "上海商銀",
    "categories": [],
    "price": 42.85,
    "prevClose": 43.1,
    "open": 43.1,
    "high": 43.1,
    "low": 42.6,
    "volume": 4327,
    "ma5": 43.24,
    "ma10": 43.94,
    "ma20": 44.42,
    "ma60": 42.32,
    "vMa5": 5502,
    "vMa10": 8389,
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
    ]
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
    "volume": 4336,
    "ma5": 111.2,
    "ma10": 111.45,
    "ma20": 114.76,
    "ma60": 113.32,
    "vMa5": 6345,
    "vMa10": 6602,
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
    ]
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
    "volume": 2151,
    "ma5": 4470.0,
    "ma10": 4299.0,
    "ma20": 4151.0,
    "ma60": 4145.42,
    "vMa5": 1810,
    "vMa10": 2232,
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
    ]
  },
  {
    "code": "2357",
    "name": "華碩",
    "categories": [
      "0050"
    ],
    "price": 852.0,
    "prevClose": 839.0,
    "open": 831.0,
    "high": 860.0,
    "low": 831.0,
    "volume": 3087,
    "ma5": 828.8,
    "ma10": 813.4,
    "ma20": 776.3,
    "ma60": 758.2,
    "vMa5": 3420,
    "vMa10": 4395,
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
    ]
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
    "volume": 5999,
    "ma5": 654.0,
    "ma10": 616.5,
    "ma20": 587.55,
    "ma60": 527.58,
    "vMa5": 6814,
    "vMa10": 5840,
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
    ]
  },
  {
    "code": "2301",
    "name": "光寶科",
    "categories": [
      "0050",
      "Top100"
    ],
    "price": 259.5,
    "prevClose": 268.5,
    "open": 267.0,
    "high": 267.0,
    "low": 254.0,
    "volume": 36900,
    "ma5": 259.8,
    "ma10": 242.85,
    "ma20": 224.25,
    "ma60": 221.6,
    "vMa5": 36516,
    "vMa10": 39952,
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
    ]
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
    "volume": 1112,
    "ma5": 6066.0,
    "ma10": 5892.5,
    "ma20": 5562.0,
    "ma60": 5239.92,
    "vMa5": 1369,
    "vMa10": 1817,
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
    ]
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
    "volume": 2022,
    "ma5": 3837.0,
    "ma10": 3528.0,
    "ma20": 3463.5,
    "ma60": 4043.08,
    "vMa5": 2640,
    "vMa10": 2458,
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
    ]
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
    "volume": 2700,
    "ma5": 4728.0,
    "ma10": 4362.5,
    "ma20": 4166.5,
    "ma60": 4488.83,
    "vMa5": 2278,
    "vMa10": 2113,
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
    ]
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
    "volume": 9941,
    "ma5": 75.28,
    "ma10": 74.59,
    "ma20": 76.44,
    "ma60": 75.39,
    "vMa5": 16537,
    "vMa10": 21329,
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
    ]
  },
  {
    "code": "1303",
    "name": "南亞",
    "categories": [
      "0050",
      "Top100"
    ],
    "price": 189.0,
    "prevClose": 190.0,
    "open": 195.0,
    "high": 197.5,
    "low": 187.0,
    "volume": 78085,
    "ma5": 186.1,
    "ma10": 174.75,
    "ma20": 180.22,
    "ma60": 150.95,
    "vMa5": 94121,
    "vMa10": 93680,
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
    ]
  },
  {
    "code": "1326",
    "name": "台化",
    "categories": [],
    "price": 59.6,
    "prevClose": 58.2,
    "open": 58.7,
    "high": 60.0,
    "low": 58.7,
    "volume": 20106,
    "ma5": 58.72,
    "ma10": 58.05,
    "ma20": 62.12,
    "ma60": 57.09,
    "vMa5": 19550,
    "vMa10": 27119,
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
    ]
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
    "volume": 15073,
    "ma5": 69.68,
    "ma10": 69.43,
    "ma20": 75.5,
    "ma60": 61.84,
    "vMa5": 24131,
    "vMa10": 29853,
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
    ]
  },
  {
    "code": "2618",
    "name": "華航",
    "categories": [],
    "price": 42.15,
    "prevClose": 41.75,
    "open": 41.9,
    "high": 42.6,
    "low": 41.45,
    "volume": 22145,
    "ma5": 42.84,
    "ma10": 43.06,
    "ma20": 42.35,
    "ma60": 40.58,
    "vMa5": 31156,
    "vMa10": 41200,
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
    ]
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
    "volume": 25520,
    "ma5": 21.12,
    "ma10": 21.72,
    "ma20": 21.42,
    "ma60": 21.04,
    "vMa5": 52431,
    "vMa10": 48002,
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
    ]
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
    "volume": 1514,
    "ma5": 70.34,
    "ma10": 69.25,
    "ma20": 68.91,
    "ma60": 71.79,
    "vMa5": 1245,
    "vMa10": 1351,
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
    ]
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
    "volume": 1184,
    "ma5": 219.8,
    "ma10": 221.65,
    "ma20": 231.35,
    "ma60": 228.98,
    "vMa5": 2014,
    "vMa10": 3295,
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
    ]
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
    "volume": 581,
    "ma5": 1566.0,
    "ma10": 1484.5,
    "ma20": 1427.25,
    "ma60": 1378.75,
    "vMa5": 896,
    "vMa10": 1069,
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
    ]
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
    "volume": 284,
    "ma5": 512.2,
    "ma10": 521.8,
    "ma20": 508.68,
    "ma60": 485.71,
    "vMa5": 267,
    "vMa10": 574,
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
    ]
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
    "volume": 4155,
    "ma5": 453.4,
    "ma10": 434.9,
    "ma20": 440.02,
    "ma60": 529.21,
    "vMa5": 3550,
    "vMa10": 4413,
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
    ]
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
    "volume": 1628,
    "ma5": 5420.0,
    "ma10": 5152.5,
    "ma20": 4926.75,
    "ma60": 5114.83,
    "vMa5": 1834,
    "vMa10": 2477,
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
    ]
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
    "volume": 2859,
    "ma5": 2228.0,
    "ma10": 2224.0,
    "ma20": 2199.0,
    "ma60": 2380.42,
    "vMa5": 3315,
    "vMa10": 3146,
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
    ]
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
    "volume": 4202,
    "ma5": 2832.0,
    "ma10": 2647.0,
    "ma20": 2458.5,
    "ma60": 2482.33,
    "vMa5": 4513,
    "vMa10": 4369,
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
    ]
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
    "volume": 2620,
    "ma5": 2062.0,
    "ma10": 2009.0,
    "ma20": 2000.75,
    "ma60": 2164.08,
    "vMa5": 2360,
    "vMa10": 3707,
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
    ]
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
    "volume": 348,
    "ma5": 11495.0,
    "ma10": 10006.5,
    "ma20": 8963.25,
    "ma60": 7414.42,
    "vMa5": 541,
    "vMa10": 568,
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
    "open": 137.0,
    "high": 137.0,
    "low": 135.5,
    "volume": 8851,
    "ma5": 136.6,
    "ma10": 137.55,
    "ma20": 138.25,
    "ma60": 139.63,
    "vMa5": 8172,
    "vMa10": 11848,
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
    ]
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
    "volume": 2982,
    "ma5": 2223.0,
    "ma10": 2187.5,
    "ma20": 2123.75,
    "ma60": 2082.08,
    "vMa5": 4108,
    "vMa10": 3920,
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
    ]
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
    "volume": 52760,
    "ma5": 477.4,
    "ma10": 453.0,
    "ma20": 473.3,
    "ma60": 532.63,
    "vMa5": 40338,
    "vMa10": 39283,
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
    ]
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
    "volume": 402,
    "ma5": 6381.0,
    "ma10": 6285.0,
    "ma20": 6204.0,
    "ma60": 6773.25,
    "vMa5": 466,
    "vMa10": 732,
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
    ]
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
    "volume": 815,
    "ma5": 4300.0,
    "ma10": 4033.5,
    "ma20": 3725.25,
    "ma60": 3617.25,
    "vMa5": 1354,
    "vMa10": 1616,
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
    ]
  },
  {
    "code": "2368",
    "name": "金像電",
    "categories": [
      "0050"
    ],
    "price": 1000.0,
    "prevClose": 964.0,
    "open": 1015.0,
    "high": 1045.0,
    "low": 964.0,
    "volume": 19868,
    "ma5": 971.4,
    "ma10": 908.0,
    "ma20": 906.7,
    "ma60": 1150.65,
    "vMa5": 14860,
    "vMa10": 11756,
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
    ]
  },
  {
    "code": "4904",
    "name": "遠傳",
    "categories": [
      "0050"
    ],
    "price": 101.0,
    "prevClose": 101.0,
    "open": 100.5,
    "high": 102.0,
    "low": 100.5,
    "volume": 4760,
    "ma5": 101.7,
    "ma10": 102.45,
    "ma20": 103.3,
    "ma60": 102.21,
    "vMa5": 4805,
    "vMa10": 8466,
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
    ]
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
    "volume": 6663,
    "ma5": 110.3,
    "ma10": 111.15,
    "ma20": 111.8,
    "ma60": 114.16,
    "vMa5": 8471,
    "vMa10": 10215,
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
    ]
  },
  {
    "code": "00403A",
    "name": "主動統一升級50",
    "categories": [
      "Top100"
    ],
    "price": 10.1,
    "prevClose": 9.9,
    "open": 9.96,
    "high": 10.12,
    "low": 9.96,
    "volume": 318910,
    "ma5": 9.89,
    "ma10": 9.46,
    "ma20": 9.6,
    "ma60": 10.26,
    "vMa5": 230771,
    "vMa10": 346174,
    "high20d": 10.44,
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
      10.1
    ]
  },
  {
    "code": "00685L",
    "name": "群益臺灣加權正2",
    "categories": [
      "Top100"
    ],
    "price": 11.6,
    "prevClose": 11.37,
    "open": 11.58,
    "high": 11.65,
    "low": 11.46,
    "volume": 205715,
    "ma5": 11.23,
    "ma10": 10.64,
    "ma20": 10.88,
    "ma60": 11.64,
    "vMa5": 266751,
    "vMa10": 401428,
    "high20d": 12.24,
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
      11.6
    ]
  },
  {
    "code": "00631L",
    "name": "元大台灣50正2",
    "categories": [
      "Top100"
    ],
    "price": 35.45,
    "prevClose": 34.7,
    "open": 35.08,
    "high": 35.49,
    "low": 34.94,
    "volume": 173903,
    "ma5": 34.37,
    "ma10": 32.72,
    "ma20": 33.38,
    "ma60": 35.37,
    "vMa5": 223215,
    "vMa10": 344173,
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
      35.45
    ]
  },
  {
    "code": "2324",
    "name": "仁寶",
    "categories": [
      "Top100"
    ],
    "price": 39.9,
    "prevClose": 36.3,
    "open": 36.75,
    "high": 39.9,
    "low": 36.6,
    "volume": 171682,
    "ma5": 37.27,
    "ma10": 36.64,
    "ma20": 36.28,
    "ma60": 36.41,
    "vMa5": 57147,
    "vMa10": 55959,
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
    ]
  },
  {
    "code": "00981A",
    "name": "主動統一台股增長",
    "categories": [
      "Top100"
    ],
    "price": 29.34,
    "prevClose": 28.53,
    "open": 28.89,
    "high": 29.36,
    "low": 28.89,
    "volume": 168944,
    "ma5": 28.64,
    "ma10": 27.16,
    "ma20": 27.39,
    "ma60": 29.57,
    "vMa5": 184690,
    "vMa10": 353090,
    "high20d": 29.46,
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
      29.34
    ]
  },
  {
    "code": "00632R",
    "name": "元大台灣50反1",
    "categories": [
      "Top100"
    ],
    "price": 10.06,
    "prevClose": 10.17,
    "open": 10.12,
    "high": 10.15,
    "low": 10.05,
    "volume": 129348,
    "ma5": 10.24,
    "ma10": 10.58,
    "ma20": 10.56,
    "ma60": 10.44,
    "vMa5": 184362,
    "vMa10": 271095,
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
      10.06
    ]
  },
  {
    "code": "2337",
    "name": "旺宏",
    "categories": [
      "Top100"
    ],
    "price": 136.5,
    "prevClose": 132.5,
    "open": 135.0,
    "high": 140.0,
    "low": 134.5,
    "volume": 104252,
    "ma5": 130.6,
    "ma10": 119.33,
    "ma20": 121.22,
    "ma60": 142.71,
    "vMa5": 123007,
    "vMa10": 105902,
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
    ]
  },
  {
    "code": "1605",
    "name": "華新",
    "categories": [
      "Top100"
    ],
    "price": 40.0,
    "prevClose": 38.3,
    "open": 38.5,
    "high": 41.0,
    "low": 38.3,
    "volume": 94217,
    "ma5": 37.02,
    "ma10": 34.65,
    "ma20": 33.56,
    "ma60": 35.85,
    "vMa5": 49611,
    "vMa10": 38003,
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
    ]
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
    "volume": 86002,
    "ma5": 91.46,
    "ma10": 84.25,
    "ma20": 90.77,
    "ma60": 96.73,
    "vMa5": 57544,
    "vMa10": 46826,
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
    ]
  },
  {
    "code": "009816",
    "name": "凱基台灣TOP50",
    "categories": [
      "Top100"
    ],
    "price": 15.26,
    "prevClose": 15.12,
    "open": 15.21,
    "high": 15.28,
    "low": 15.17,
    "volume": 79905,
    "ma5": 15.04,
    "ma10": 14.58,
    "ma20": 14.65,
    "ma60": 14.98,
    "vMa5": 105661,
    "vMa10": 189178,
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
      15.26
    ]
  },
  {
    "code": "00405A",
    "name": "主動富邦台灣龍耀",
    "categories": [
      "Top100"
    ],
    "price": 8.42,
    "prevClose": 8.13,
    "open": 8.24,
    "high": 8.42,
    "low": 8.22,
    "volume": 77481,
    "ma5": 8.17,
    "ma10": 7.71,
    "ma20": 7.86,
    "ma60": 8.79,
    "vMa5": 82921,
    "vMa10": 123550,
    "high20d": 8.62,
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
      8.42
    ]
  },
  {
    "code": "00991A",
    "name": "主動復華未來50",
    "categories": [
      "Top100"
    ],
    "price": 17.79,
    "prevClose": 17.33,
    "open": 17.67,
    "high": 17.85,
    "low": 17.59,
    "volume": 72076,
    "ma5": 17.21,
    "ma10": 16.18,
    "ma20": 16.6,
    "ma60": 18.55,
    "vMa5": 107717,
    "vMa10": 232331,
    "high20d": 19.2,
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
      17.79
    ]
  },
  {
    "code": "00407A",
    "name": "主動凱基台灣",
    "categories": [
      "Top100"
    ],
    "price": 9.66,
    "prevClose": 9.49,
    "open": 9.56,
    "high": 9.68,
    "low": 9.56,
    "volume": 67695,
    "ma5": 9.43,
    "ma10": 8.9,
    "ma20": 8.9,
    "ma60": 9.33,
    "vMa5": 62397,
    "vMa10": 65907,
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
      9.66
    ]
  },
  {
    "code": "0050",
    "name": "元大台灣50",
    "categories": [
      "Top100"
    ],
    "price": 105.2,
    "prevClose": 104.25,
    "open": 105.0,
    "high": 105.25,
    "low": 104.45,
    "volume": 64255,
    "ma5": 103.88,
    "ma10": 101.21,
    "ma20": 101.73,
    "ma60": 103.38,
    "vMa5": 88817,
    "vMa10": 181531,
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
      105.2
    ]
  },
  {
    "code": "2377",
    "name": "微星",
    "categories": [
      "Top100"
    ],
    "price": 169.0,
    "prevClose": 154.0,
    "open": 157.0,
    "high": 169.0,
    "low": 152.0,
    "volume": 46107,
    "ma5": 157.0,
    "ma10": 150.65,
    "ma20": 147.85,
    "ma60": 140.39,
    "vMa5": 17698,
    "vMa10": 16756,
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
    ]
  },
  {
    "code": "00878",
    "name": "國泰永續高股息",
    "categories": [
      "Top100"
    ],
    "price": 33.52,
    "prevClose": 33.4,
    "open": 33.58,
    "high": 33.79,
    "low": 33.41,
    "volume": 45345,
    "ma5": 33.14,
    "ma10": 32.5,
    "ma20": 32.42,
    "ma60": 32.15,
    "vMa5": 47536,
    "vMa10": 54948,
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
      33.52
    ]
  },
  {
    "code": "1717",
    "name": "長興",
    "categories": [
      "Top100"
    ],
    "price": 78.6,
    "prevClose": 71.9,
    "open": 72.5,
    "high": 79.0,
    "low": 72.3,
    "volume": 44609,
    "ma5": 70.58,
    "ma10": 66.03,
    "ma20": 63.98,
    "ma60": 71.59,
    "vMa5": 17777,
    "vMa10": 13944,
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
    ]
  },
  {
    "code": "00400A",
    "name": "主動國泰動能高息",
    "categories": [
      "Top100"
    ],
    "price": 14.36,
    "prevClose": 13.94,
    "open": 14.1,
    "high": 14.37,
    "low": 14.1,
    "volume": 43093,
    "ma5": 13.92,
    "ma10": 13.31,
    "ma20": 13.38,
    "ma60": 14.12,
    "vMa5": 36426,
    "vMa10": 55306,
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
      14.36
    ]
  },
  {
    "code": "1718",
    "name": "中纖",
    "categories": [
      "Top100"
    ],
    "price": 11.2,
    "prevClose": 10.2,
    "open": 10.3,
    "high": 11.2,
    "low": 10.3,
    "volume": 43284,
    "ma5": 10.35,
    "ma10": 9.87,
    "ma20": 10.85,
    "ma60": 10.48,
    "vMa5": 38698,
    "vMa10": 39257,
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
    ]
  },
  {
    "code": "00406A",
    "name": "主動中信台灣收益",
    "categories": [
      "Top100"
    ],
    "price": 9.53,
    "prevClose": 9.37,
    "open": 9.43,
    "high": 9.53,
    "low": 9.43,
    "volume": 42602,
    "ma5": 9.35,
    "ma10": 8.92,
    "ma20": 9.06,
    "ma60": 9.64,
    "vMa5": 49204,
    "vMa10": 84290,
    "high20d": 9.81,
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
      9.53
    ]
  },
  {
    "code": "00919",
    "name": "群益台灣精選高息",
    "categories": [
      "Top100"
    ],
    "price": 30.19,
    "prevClose": 30.03,
    "open": 30.33,
    "high": 30.5,
    "low": 30.12,
    "volume": 42277,
    "ma5": 29.9,
    "ma10": 29.48,
    "ma20": 29.38,
    "ma60": 29.43,
    "vMa5": 48523,
    "vMa10": 64633,
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
      30.19
    ]
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
    "volume": 38066,
    "ma5": 55.18,
    "ma10": 51.79,
    "ma20": 52.46,
    "ma60": 62.86,
    "vMa5": 28849,
    "vMa10": 30931,
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
    ]
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
    "volume": 37117,
    "ma5": 93.9,
    "ma10": 87.82,
    "ma20": 85.83,
    "ma60": 89.15,
    "vMa5": 32273,
    "vMa10": 23405,
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
    ]
  },
  {
    "code": "0056",
    "name": "元大高股息",
    "categories": [
      "Top100"
    ],
    "price": 52.7,
    "prevClose": 52.45,
    "open": 52.5,
    "high": 53.05,
    "low": 52.5,
    "volume": 36213,
    "ma5": 51.79,
    "ma10": 50.19,
    "ma20": 50.39,
    "ma60": 50.83,
    "vMa5": 39257,
    "vMa10": 56385,
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
      52.7
    ]
  },
  {
    "code": "00988A",
    "name": "主動統一全球創新",
    "categories": [
      "Top100"
    ],
    "price": 16.76,
    "prevClose": 16.67,
    "open": 16.69,
    "high": 16.79,
    "low": 16.6,
    "volume": 35515,
    "ma5": 16.72,
    "ma10": 16.07,
    "ma20": 16.66,
    "ma60": 19.66,
    "vMa5": 49068,
    "vMa10": 59206,
    "high20d": 19.25,
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
      16.76
    ]
  },
  {
    "code": "00881",
    "name": "國泰台灣科技龍頭",
    "categories": [
      "Top100"
    ],
    "price": 54.15,
    "prevClose": 53.2,
    "open": 53.85,
    "high": 54.15,
    "low": 53.6,
    "volume": 35466,
    "ma5": 53.0,
    "ma10": 50.95,
    "ma20": 51.0,
    "ma60": 52.89,
    "vMa5": 33717,
    "vMa10": 32127,
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
      54.15
    ]
  },
  {
    "code": "00992A",
    "name": "主動群益科技創新",
    "categories": [
      "Top100"
    ],
    "price": 17.29,
    "prevClose": 16.9,
    "open": 17.02,
    "high": 17.3,
    "low": 17.02,
    "volume": 34459,
    "ma5": 16.86,
    "ma10": 15.8,
    "ma20": 15.83,
    "ma60": 17.41,
    "vMa5": 40143,
    "vMa10": 61903,
    "high20d": 17.54,
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
      17.29
    ]
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
    "volume": 30301,
    "ma5": 224.5,
    "ma10": 206.45,
    "ma20": 208.82,
    "ma60": 168.28,
    "vMa5": 24775,
    "vMa10": 24917,
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
    ]
  },
  {
    "code": "2464",
    "name": "盟立",
    "categories": [
      "Top100"
    ],
    "price": 196.5,
    "prevClose": 187.5,
    "open": 185.5,
    "high": 205.0,
    "low": 185.5,
    "volume": 28988,
    "ma5": 183.1,
    "ma10": 165.2,
    "ma20": 153.47,
    "ma60": 161.11,
    "vMa5": 24646,
    "vMa10": 16874,
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
    ]
  },
  {
    "code": "5904",
    "name": "寶雅*",
    "categories": [
      "Top100"
    ],
    "price": 82.5,
    "prevClose": 87.1,
    "open": 90.6,
    "high": 92.3,
    "low": 82.5,
    "volume": 87487,
    "ma5": 78.56,
    "ma10": 75.28,
    "ma20": 69.97,
    "ma60": 65.35,
    "vMa5": 22574,
    "vMa10": 11287,
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
    ]
  },
  {
    "code": "6182",
    "name": "合晶",
    "categories": [
      "Top100"
    ],
    "price": 103.0,
    "prevClose": 94.0,
    "open": 94.3,
    "high": 103.0,
    "low": 94.1,
    "volume": 55956,
    "ma5": 99.8,
    "ma10": 96.17,
    "ma20": 111.31,
    "ma60": 113.48,
    "vMa5": 33190,
    "vMa10": 23502,
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
    ]
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
    "volume": 38294,
    "ma5": 14.62,
    "ma10": 14.61,
    "ma20": 14.67,
    "ma60": 14.82,
    "vMa5": 41849,
    "vMa10": 40897,
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
    ]
  },
  {
    "code": "3105",
    "name": "穩懋",
    "categories": [
      "Top100"
    ],
    "price": 400.0,
    "prevClose": 371.0,
    "open": 372.0,
    "high": 408.0,
    "low": 370.5,
    "volume": 30345,
    "ma5": 380.9,
    "ma10": 349.6,
    "ma20": 344.23,
    "ma60": 429.88,
    "vMa5": 27273,
    "vMa10": 21652,
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
    ]
  },
  {
    "code": "6147",
    "name": "頎邦",
    "categories": [
      "Top100"
    ],
    "price": 156.5,
    "prevClose": 161.5,
    "open": 160.5,
    "high": 163.0,
    "low": 156.0,
    "volume": 26536,
    "ma5": 153.9,
    "ma10": 145.65,
    "ma20": 155.7,
    "ma60": 209.24,
    "vMa5": 24967,
    "vMa10": 27632,
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
    ]
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
    "volume": 26224,
    "ma5": 177.2,
    "ma10": 165.35,
    "ma20": 171.5,
    "ma60": 230.66,
    "vMa5": 12154,
    "vMa10": 8116,
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
    ]
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
    "volume": 20066,
    "ma5": 138.1,
    "ma10": 134.4,
    "ma20": 137.2,
    "ma60": 161.5,
    "vMa5": 8374,
    "vMa10": 6961,
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
    ]
  },
  {
    "code": "5328",
    "name": "華容",
    "categories": [
      "Top100"
    ],
    "price": 67.2,
    "prevClose": 66.0,
    "open": 66.7,
    "high": 67.2,
    "low": 65.0,
    "volume": 18975,
    "ma5": 63.88,
    "ma10": 64.12,
    "ma20": 63.55,
    "ma60": 56.9,
    "vMa5": 16511,
    "vMa10": 25290,
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
    ]
  },
  {
    "code": "1785",
    "name": "光洋科",
    "categories": [
      "Top100"
    ],
    "price": 106.5,
    "prevClose": 107.0,
    "open": 107.0,
    "high": 110.0,
    "low": 103.0,
    "volume": 18067,
    "ma5": 112.3,
    "ma10": 108.03,
    "ma20": 107.24,
    "ma60": 130.82,
    "vMa5": 8547,
    "vMa10": 8319,
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
    ]
  },
  {
    "code": "4979",
    "name": "華星光",
    "categories": [
      "Top100"
    ],
    "price": 561.0,
    "prevClose": 510.0,
    "open": 529.0,
    "high": 561.0,
    "low": 529.0,
    "volume": 17487,
    "ma5": 516.6,
    "ma10": 464.6,
    "ma20": 428.2,
    "ma60": 494.52,
    "vMa5": 10442,
    "vMa10": 6951,
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
    ]
  },
  {
    "code": "5347",
    "name": "世界",
    "categories": [
      "Top100"
    ],
    "price": 159.5,
    "prevClose": 158.0,
    "open": 160.5,
    "high": 160.5,
    "low": 156.5,
    "volume": 15344,
    "ma5": 154.0,
    "ma10": 152.2,
    "ma20": 156.03,
    "ma60": 170.12,
    "vMa5": 25242,
    "vMa10": 29028,
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
    ]
  },
  {
    "code": "4931",
    "name": "新盛力",
    "categories": [
      "Top100"
    ],
    "price": 267.0,
    "prevClose": 255.0,
    "open": 255.0,
    "high": 268.0,
    "low": 250.5,
    "volume": 16070,
    "ma5": 239.0,
    "ma10": 212.0,
    "ma20": 206.95,
    "ma60": 229.28,
    "vMa5": 12371,
    "vMa10": 7999,
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
    ]
  },
  {
    "code": "5475",
    "name": "德宏",
    "categories": [
      "Top100"
    ],
    "price": 148.5,
    "prevClose": 135.0,
    "open": 136.0,
    "high": 148.5,
    "low": 136.0,
    "volume": 15275,
    "ma5": 131.0,
    "ma10": 124.75,
    "ma20": 133.62,
    "ma60": 212.11,
    "vMa5": 9336,
    "vMa10": 6502,
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
    ]
  },
  {
    "code": "3211",
    "name": "順達",
    "categories": [
      "Top100"
    ],
    "price": 412.0,
    "prevClose": 400.0,
    "open": 400.5,
    "high": 418.0,
    "low": 393.0,
    "volume": 13664,
    "ma5": 375.4,
    "ma10": 341.3,
    "ma20": 357.27,
    "ma60": 400.44,
    "vMa5": 13705,
    "vMa10": 10488,
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
    ]
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
    "volume": 11633,
    "ma5": 9.33,
    "ma10": 9.32,
    "ma20": 9.31,
    "ma60": 9.24,
    "vMa5": 10551,
    "vMa10": 11919,
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
    ]
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
    "volume": 11577,
    "ma5": 476.7,
    "ma10": 434.1,
    "ma20": 414.55,
    "ma60": 535.78,
    "vMa5": 5418,
    "vMa10": 3128,
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
    ]
  },
  {
    "code": "8358",
    "name": "金居",
    "categories": [
      "Top100"
    ],
    "price": 418.5,
    "prevClose": 380.5,
    "open": 402.5,
    "high": 418.5,
    "low": 402.0,
    "volume": 11218,
    "ma5": 376.2,
    "ma10": 346.8,
    "ma20": 363.15,
    "ma60": 504.14,
    "vMa5": 25205,
    "vMa10": 20747,
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
    ]
  },
  {
    "code": "3441",
    "name": "聯一光",
    "categories": [
      "Top100"
    ],
    "price": 87.2,
    "prevClose": 79.3,
    "open": 79.3,
    "high": 87.2,
    "low": 79.2,
    "volume": 10827,
    "ma5": 83.76,
    "ma10": 84.66,
    "ma20": 77.07,
    "ma60": 71.41,
    "vMa5": 11007,
    "vMa10": 21309,
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
    ]
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
    "volume": 10710,
    "ma5": 324.7,
    "ma10": 307.95,
    "ma20": 333.98,
    "ma60": 297.57,
    "vMa5": 11370,
    "vMa10": 11592,
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
    ]
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
    ]
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
    "volume": 8862,
    "ma5": 179.9,
    "ma10": 185.25,
    "ma20": 185.03,
    "ma60": 200.95,
    "vMa5": 14018,
    "vMa10": 11710,
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
    ]
  },
  {
    "code": "5351",
    "name": "鈺創",
    "categories": [
      "Top100"
    ],
    "price": 122.0,
    "prevClose": 119.5,
    "open": 124.5,
    "high": 124.5,
    "low": 120.5,
    "volume": 8619,
    "ma5": 112.5,
    "ma10": 96.55,
    "ma20": 90.75,
    "ma60": 89.34,
    "vMa5": 34960,
    "vMa10": 24445,
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
    ]
  },
  {
    "code": "00687B",
    "name": "國泰20年美債",
    "categories": [
      "Top100"
    ],
    "price": 27.46,
    "prevClose": 27.39,
    "open": 27.43,
    "high": 27.48,
    "low": 27.41,
    "volume": 8085,
    "ma5": 27.53,
    "ma10": 27.58,
    "ma20": 27.76,
    "ma60": 27.86,
    "vMa5": 10561,
    "vMa10": 16927,
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
    ]
  },
  {
    "code": "3264",
    "name": "欣銓",
    "categories": [
      "Top100"
    ],
    "price": 216.5,
    "prevClose": 219.5,
    "open": 221.0,
    "high": 225.5,
    "low": 216.0,
    "volume": 7705,
    "ma5": 215.5,
    "ma10": 199.85,
    "ma20": 203.03,
    "ma60": 219.2,
    "vMa5": 10350,
    "vMa10": 7775,
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
    ]
  },
  {
    "code": "6265",
    "name": "方土昶",
    "categories": [
      "Top100"
    ],
    "price": 56.8,
    "prevClose": 56.1,
    "open": 56.7,
    "high": 59.0,
    "low": 56.6,
    "volume": 7529,
    "ma5": 55.76,
    "ma10": 50.52,
    "ma20": 48.6,
    "ma60": 52.34,
    "vMa5": 6566,
    "vMa10": 4954,
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
    ]
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
    "volume": 7483,
    "ma5": 26.45,
    "ma10": 26.5,
    "ma20": 26.68,
    "ma60": 26.7,
    "vMa5": 13372,
    "vMa10": 20315,
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
    ]
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
    "volume": 7413,
    "ma5": 73.66,
    "ma10": 69.6,
    "ma20": 69.51,
    "ma60": 85.2,
    "vMa5": 4078,
    "vMa10": 3351,
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
    ]
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
    "volume": 7296,
    "ma5": 64.18,
    "ma10": 61.22,
    "ma20": 60.55,
    "ma60": 57.82,
    "vMa5": 11279,
    "vMa10": 7966,
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
    ]
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
    "volume": 7176,
    "ma5": 697.6,
    "ma10": 650.4,
    "ma20": 618.94,
    "ma60": 716.06,
    "vMa5": 7034,
    "vMa10": 5262,
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
    ]
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
    "volume": 7161,
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
    ]
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
    "volume": 6994,
    "ma5": 19.4,
    "ma10": 19.82,
    "ma20": 20.59,
    "ma60": 23.57,
    "vMa5": 6246,
    "vMa10": 4739,
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
    ]
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
    "volume": 6973,
    "ma5": 15.95,
    "ma10": 15.96,
    "ma20": 15.99,
    "ma60": 16.04,
    "vMa5": 7474,
    "vMa10": 7550,
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
    ]
  },
  {
    "code": "4707",
    "name": "磐亞",
    "categories": [
      "Top100"
    ],
    "price": 33.0,
    "prevClose": 30.0,
    "open": 30.3,
    "high": 33.0,
    "low": 30.3,
    "volume": 6727,
    "ma5": 32.14,
    "ma10": 29.15,
    "ma20": 31.77,
    "ma60": 26.88,
    "vMa5": 7603,
    "vMa10": 6128,
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
    ]
  },
  {
    "code": "4541",
    "name": "晟田",
    "categories": [
      "Top100"
    ],
    "price": 70.3,
    "prevClose": 66.3,
    "open": 66.5,
    "high": 71.5,
    "low": 65.1,
    "volume": 6415,
    "ma5": 66.32,
    "ma10": 63.75,
    "ma20": 66.39,
    "ma60": 56.45,
    "vMa5": 3659,
    "vMa10": 3982,
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
    ]
  },
  {
    "code": "6603",
    "name": "富強鑫",
    "categories": [
      "Top100"
    ],
    "price": 27.7,
    "prevClose": 26.9,
    "open": 27.3,
    "high": 29.4,
    "low": 27.3,
    "volume": 6399,
    "ma5": 26.64,
    "ma10": 26.31,
    "ma20": 25.54,
    "ma60": 24.39,
    "vMa5": 2840,
    "vMa10": 2518,
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
    ]
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
    "volume": 6371,
    "ma5": 85.88,
    "ma10": 82.0,
    "ma20": 82.11,
    "ma60": 79.68,
    "vMa5": 10045,
    "vMa10": 11291,
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
    ]
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
    "volume": 6375,
    "ma5": 114.5,
    "ma10": 109.0,
    "ma20": 114.35,
    "ma60": 149.12,
    "vMa5": 7148,
    "vMa10": 5618,
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
    ]
  },
  {
    "code": "00888",
    "name": "永豐台灣ESG",
    "categories": [
      "Top100"
    ],
    "price": 32.61,
    "prevClose": 32.59,
    "open": 32.79,
    "high": 32.85,
    "low": 32.51,
    "volume": 6344,
    "ma5": 32.33,
    "ma10": 31.65,
    "ma20": 32.55,
    "ma60": 34.57,
    "vMa5": 5642,
    "vMa10": 10214,
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
    ]
  },
  {
    "code": "1815",
    "name": "富喬",
    "categories": [
      "Top100"
    ],
    "price": 90.0,
    "prevClose": 88.7,
    "open": 89.3,
    "high": 90.9,
    "low": 89.3,
    "volume": 6246,
    "ma5": 88.1,
    "ma10": 80.4,
    "ma20": 78.51,
    "ma60": 93.15,
    "vMa5": 26169,
    "vMa10": 22920,
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
    ]
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
    "volume": 6186,
    "ma5": 17.49,
    "ma10": 17.13,
    "ma20": 17.63,
    "ma60": 18.58,
    "vMa5": 2316,
    "vMa10": 1577,
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
    ]
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
    "volume": 6097,
    "ma5": 13.91,
    "ma10": 13.94,
    "ma20": 14.01,
    "ma60": 14.07,
    "vMa5": 3762,
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
    ]
  },
  {
    "code": "5425",
    "name": "台半",
    "categories": [
      "Top100"
    ],
    "price": 86.7,
    "prevClose": 86.0,
    "open": 86.1,
    "high": 87.3,
    "low": 85.1,
    "volume": 6077,
    "ma5": 84.88,
    "ma10": 81.02,
    "ma20": 83.75,
    "ma60": 102.21,
    "vMa5": 6319,
    "vMa10": 7775,
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
    ]
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
    "volume": 6045,
    "ma5": 80.86,
    "ma10": 73.09,
    "ma20": 79.89,
    "ma60": 111.0,
    "vMa5": 5016,
    "vMa10": 3477,
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
    ]
  },
  {
    "code": "5864",
    "name": "致和證",
    "categories": [
      "Top100"
    ],
    "price": 33.45,
    "prevClose": 30.45,
    "open": 30.8,
    "high": 33.45,
    "low": 30.8,
    "volume": 5998,
    "ma5": 30.28,
    "ma10": 30.18,
    "ma20": 31.4,
    "ma60": 37.2,
    "vMa5": 4390,
    "vMa10": 4091,
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
    ]
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
    "volume": 5795,
    "ma5": 61.2,
    "ma10": 57.48,
    "ma20": 60.5,
    "ma60": 58.17,
    "vMa5": 12327,
    "vMa10": 11855,
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
    ]
  },
  {
    "code": "3234",
    "name": "光環",
    "categories": [
      "Top100"
    ],
    "price": 133.0,
    "prevClose": 121.5,
    "open": 117.0,
    "high": 133.5,
    "low": 117.0,
    "volume": 5743,
    "ma5": 118.1,
    "ma10": 110.52,
    "ma20": 106.38,
    "ma60": 116.69,
    "vMa5": 2647,
    "vMa10": 2015,
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
    ]
  }
];