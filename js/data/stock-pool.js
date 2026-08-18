/**
 * 台股盤中波段選股工具 - 數據庫
 * 資料日期：日 K 線歷史基底與均線數據 (精確昨收與漲跌點數)
 */

// 1. 0050 最新 50 持股名單
const HOLDINGS_0050 = {
  "date": "2026/08/17",
  "sourceName": "0050 官方成分股",
  "sourceUrl": "https://www.moneydj.com/ETF/X/Basic/Basic0007B.xdjhtm?etfid=0050.TW",
  "stocks": [
    {
      "code": "2330",
      "name": "台積電",
      "weight": "57.40%"
    },
    {
      "code": "2454",
      "name": "聯發科",
      "weight": "5.83%"
    },
    {
      "code": "2308",
      "name": "台達電",
      "weight": "3.56%"
    },
    {
      "code": "2317",
      "name": "鴻海",
      "weight": "3.05%"
    },
    {
      "code": "3711",
      "name": "日月光投控",
      "weight": "2.00%"
    },
    {
      "code": "2383",
      "name": "台光電",
      "weight": "1.81%"
    },
    {
      "code": "3037",
      "name": "欣興",
      "weight": "1.45%"
    },
    {
      "code": "2303",
      "name": "聯電",
      "weight": "1.39%"
    },
    {
      "code": "2891",
      "name": "中信金",
      "weight": "1.14%"
    },
    {
      "code": "2345",
      "name": "智邦",
      "weight": "1.11%"
    },
    {
      "code": "2881",
      "name": "富邦金",
      "weight": "1.03%"
    },
    {
      "code": "3017",
      "name": "奇鋐",
      "weight": "0.99%"
    },
    {
      "code": "1303",
      "name": "南亞",
      "weight": "0.97%"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "weight": "0.94%"
    },
    {
      "code": "2882",
      "name": "國泰金",
      "weight": "0.92%"
    },
    {
      "code": "2382",
      "name": "廣達",
      "weight": "0.86%"
    },
    {
      "code": "2887",
      "name": "台新新光金",
      "weight": "0.85%"
    },
    {
      "code": "2360",
      "name": "致茂",
      "weight": "0.85%"
    },
    {
      "code": "2059",
      "name": "川湖",
      "weight": "0.74%"
    },
    {
      "code": "2885",
      "name": "元大金",
      "weight": "0.74%"
    },
    {
      "code": "6669",
      "name": "緯穎",
      "weight": "0.67%"
    },
    {
      "code": "2357",
      "name": "華碩",
      "weight": "0.62%"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "weight": "0.59%"
    },
    {
      "code": "2884",
      "name": "玉山金",
      "weight": "0.56%"
    },
    {
      "code": "2344",
      "name": "華邦電",
      "weight": "0.55%"
    },
    {
      "code": "3231",
      "name": "緯創",
      "weight": "0.55%"
    },
    {
      "code": "2886",
      "name": "兆豐金",
      "weight": "0.54%"
    },
    {
      "code": "2890",
      "name": "永豐金",
      "weight": "0.51%"
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
      "code": "2883",
      "name": "凱基金",
      "weight": "0.48%"
    },
    {
      "code": "3008",
      "name": "大立光",
      "weight": "0.47%"
    },
    {
      "code": "3443",
      "name": "創意",
      "weight": "0.46%"
    },
    {
      "code": "3653",
      "name": "健策",
      "weight": "0.46%"
    },
    {
      "code": "7769",
      "name": "鴻勁",
      "weight": "0.38%"
    },
    {
      "code": "4958",
      "name": "臻鼎-KY",
      "weight": "0.38%"
    },
    {
      "code": "3665",
      "name": "貿聯-KY",
      "weight": "0.37%"
    },
    {
      "code": "2892",
      "name": "第一金",
      "weight": "0.37%"
    },
    {
      "code": "2880",
      "name": "華南金",
      "weight": "0.36%"
    },
    {
      "code": "1216",
      "name": "統一",
      "weight": "0.36%"
    },
    {
      "code": "2368",
      "name": "金像電",
      "weight": "0.34%"
    },
    {
      "code": "3661",
      "name": "世芯-KY",
      "weight": "0.31%"
    },
    {
      "code": "2395",
      "name": "研華",
      "weight": "0.30%"
    },
    {
      "code": "2449",
      "name": "京元電子",
      "weight": "0.28%"
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
      "weight": "0.25%"
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
  "date": "08/18",
  "sourceName": "成交量排行",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_BE_0_1.djhtm",
  "stocks": [
    {
      "code": "00406A",
      "name": "主動中信台灣收益",
      "volume": 228310,
      "market": "上市"
    },
    {
      "code": "6770",
      "name": "力積電",
      "volume": 226495,
      "market": "上市"
    },
    {
      "code": "00981A",
      "name": "主動統一台股增長",
      "volume": 217130,
      "market": "上市"
    },
    {
      "code": "00685L",
      "name": "群益臺灣加權正2",
      "volume": 215840,
      "market": "上市"
    },
    {
      "code": "3481",
      "name": "群創",
      "volume": 209580,
      "market": "上市"
    },
    {
      "code": "2344",
      "name": "華邦電",
      "volume": 183343,
      "market": "上市"
    },
    {
      "code": "00403A",
      "name": "主動統一升級50",
      "volume": 181249,
      "market": "上市"
    },
    {
      "code": "00631L",
      "name": "元大台灣50正2",
      "volume": 167876,
      "market": "上市"
    },
    {
      "code": "2409",
      "name": "友達",
      "volume": 152715,
      "market": "上市"
    },
    {
      "code": "00991A",
      "name": "主動復華未來50",
      "volume": 144642,
      "market": "上市"
    },
    {
      "code": "2324",
      "name": "仁寶",
      "volume": 138341,
      "market": "上市"
    },
    {
      "code": "00632R",
      "name": "元大台灣50反1",
      "volume": 125082,
      "market": "上市"
    },
    {
      "code": "2337",
      "name": "旺宏",
      "volume": 107033,
      "market": "上市"
    },
    {
      "code": "2634",
      "name": "漢翔",
      "volume": 101347,
      "market": "上市"
    },
    {
      "code": "2303",
      "name": "聯電",
      "volume": 91483,
      "market": "上市"
    },
    {
      "code": "00881",
      "name": "國泰台灣科技龍頭",
      "volume": 90126,
      "market": "上市"
    },
    {
      "code": "00878",
      "name": "國泰永續高股息",
      "volume": 87657,
      "market": "上市"
    },
    {
      "code": "2609",
      "name": "陽明",
      "volume": 86793,
      "market": "上市"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "volume": 85564,
      "market": "上市"
    },
    {
      "code": "00405A",
      "name": "主動富邦台灣龍耀",
      "volume": 84522,
      "market": "上市"
    },
    {
      "code": "00929",
      "name": "復華台灣科技優息",
      "volume": 83257,
      "market": "上市"
    },
    {
      "code": "009816",
      "name": "凱基台灣TOP50",
      "volume": 78606,
      "market": "上市"
    },
    {
      "code": "2615",
      "name": "萬海",
      "volume": 71061,
      "market": "上市"
    },
    {
      "code": "1303",
      "name": "南亞",
      "volume": 69266,
      "market": "上市"
    },
    {
      "code": "0050",
      "name": "元大台灣50",
      "volume": 65621,
      "market": "上市"
    },
    {
      "code": "2887",
      "name": "台新新光金",
      "volume": 62432,
      "market": "上市"
    },
    {
      "code": "00407A",
      "name": "主動凱基台灣",
      "volume": 57972,
      "market": "上市"
    },
    {
      "code": "00992A",
      "name": "主動群益科技創新",
      "volume": 51001,
      "market": "上市"
    },
    {
      "code": "2883",
      "name": "凱基金",
      "volume": 50380,
      "market": "上市"
    },
    {
      "code": "2317",
      "name": "鴻海",
      "volume": 50034,
      "market": "上市"
    },
    {
      "code": "8105",
      "name": "凌巨",
      "volume": 48154,
      "market": "上市"
    },
    {
      "code": "00400A",
      "name": "主動國泰動能高息",
      "volume": 47181,
      "market": "上市"
    },
    {
      "code": "2885",
      "name": "元大金",
      "volume": 46679,
      "market": "上市"
    },
    {
      "code": "2884",
      "name": "玉山金",
      "volume": 46641,
      "market": "上市"
    },
    {
      "code": "00988A",
      "name": "主動統一全球創新",
      "volume": 43663,
      "market": "上市"
    },
    {
      "code": "2481",
      "name": "強茂",
      "volume": 42147,
      "market": "上市"
    },
    {
      "code": "00919",
      "name": "群益台灣精選高息",
      "volume": 41900,
      "market": "上市"
    },
    {
      "code": "2886",
      "name": "兆豐金",
      "volume": 41757,
      "market": "上市"
    },
    {
      "code": "2301",
      "name": "光寶科",
      "volume": 40918,
      "market": "上市"
    },
    {
      "code": "2892",
      "name": "第一金",
      "volume": 40529,
      "market": "上市"
    },
    {
      "code": "00664R",
      "name": "國泰臺灣加權反1",
      "volume": 40362,
      "market": "上市"
    },
    {
      "code": "4958",
      "name": "臻鼎-KY",
      "volume": 39504,
      "market": "上市"
    },
    {
      "code": "3231",
      "name": "緯創",
      "volume": 39193,
      "market": "上市"
    },
    {
      "code": "6505",
      "name": "台塑化",
      "volume": 39001,
      "market": "上市"
    },
    {
      "code": "3037",
      "name": "欣興",
      "volume": 38530,
      "market": "上市"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "volume": 37659,
      "market": "上市"
    },
    {
      "code": "2455",
      "name": "全新",
      "volume": 35432,
      "market": "上市"
    },
    {
      "code": "2359",
      "name": "所羅門",
      "volume": 34472,
      "market": "上市"
    },
    {
      "code": "00961",
      "name": "FT臺灣永續高息",
      "volume": 33418,
      "market": "上市"
    },
    {
      "code": "2880",
      "name": "華南金",
      "volume": 33199,
      "market": "上市"
    },
    {
      "code": "6182",
      "name": "合晶",
      "volume": 209396,
      "market": "上櫃"
    },
    {
      "code": "00937B",
      "name": "群益ESG投等債20+",
      "volume": 114166,
      "market": "上櫃"
    },
    {
      "code": "1815",
      "name": "富喬",
      "volume": 70434,
      "market": "上櫃"
    },
    {
      "code": "5425",
      "name": "台半",
      "volume": 35760,
      "market": "上櫃"
    },
    {
      "code": "8358",
      "name": "金居",
      "volume": 33692,
      "market": "上櫃"
    },
    {
      "code": "5351",
      "name": "鈺創",
      "volume": 31471,
      "market": "上櫃"
    },
    {
      "code": "00679B",
      "name": "元大美債20年",
      "volume": 30320,
      "market": "上櫃"
    },
    {
      "code": "5483",
      "name": "中美晶",
      "volume": 29223,
      "market": "上櫃"
    },
    {
      "code": "00981B",
      "name": "第一金優選非投債",
      "volume": 29014,
      "market": "上櫃"
    },
    {
      "code": "3105",
      "name": "穩懋",
      "volume": 28851,
      "market": "上櫃"
    },
    {
      "code": "3374",
      "name": "精材",
      "volume": 26946,
      "market": "上櫃"
    },
    {
      "code": "6147",
      "name": "頎邦",
      "volume": 23443,
      "market": "上櫃"
    },
    {
      "code": "00687B",
      "name": "國泰20年美債",
      "volume": 23376,
      "market": "上櫃"
    },
    {
      "code": "5904",
      "name": "寶雅*",
      "volume": 21397,
      "market": "上櫃"
    },
    {
      "code": "00933B",
      "name": "國泰10Y+金融債",
      "volume": 19094,
      "market": "上櫃"
    },
    {
      "code": "5347",
      "name": "世界",
      "volume": 14069,
      "market": "上櫃"
    },
    {
      "code": "6488",
      "name": "環球晶",
      "volume": 13532,
      "market": "上櫃"
    },
    {
      "code": "3441",
      "name": "聯一光",
      "volume": 12819,
      "market": "上櫃"
    },
    {
      "code": "6173",
      "name": "信昌電",
      "volume": 12051,
      "market": "上櫃"
    },
    {
      "code": "3388",
      "name": "崇越電",
      "volume": 11803,
      "market": "上櫃"
    },
    {
      "code": "8086",
      "name": "宏捷科",
      "volume": 11008,
      "market": "上櫃"
    },
    {
      "code": "6265",
      "name": "方土昶",
      "volume": 10895,
      "market": "上櫃"
    },
    {
      "code": "3490",
      "name": "單井",
      "volume": 10287,
      "market": "上櫃"
    },
    {
      "code": "4939",
      "name": "亞電",
      "volume": 10041,
      "market": "上櫃"
    },
    {
      "code": "3260",
      "name": "威剛",
      "volume": 9598,
      "market": "上櫃"
    },
    {
      "code": "00751B",
      "name": "元大AAA至A公司債",
      "volume": 9348,
      "market": "上櫃"
    },
    {
      "code": "8069",
      "name": "元太",
      "volume": 9254,
      "market": "上櫃"
    },
    {
      "code": "5371",
      "name": "中光電",
      "volume": 8953,
      "market": "上櫃"
    },
    {
      "code": "3455",
      "name": "由田",
      "volume": 8557,
      "market": "上櫃"
    },
    {
      "code": "00720B",
      "name": "元大投資級公司債",
      "volume": 8037,
      "market": "上櫃"
    },
    {
      "code": "00948B",
      "name": "中信優息投資級債",
      "volume": 7959,
      "market": "上櫃"
    },
    {
      "code": "5328",
      "name": "華容",
      "volume": 7452,
      "market": "上櫃"
    },
    {
      "code": "6274",
      "name": "台燿",
      "volume": 7097,
      "market": "上櫃"
    },
    {
      "code": "1785",
      "name": "光洋科",
      "volume": 6666,
      "market": "上櫃"
    },
    {
      "code": "3498",
      "name": "陽程",
      "volume": 6626,
      "market": "上櫃"
    },
    {
      "code": "4971",
      "name": "IET-KY",
      "volume": 6501,
      "market": "上櫃"
    },
    {
      "code": "4541",
      "name": "晟田",
      "volume": 6331,
      "market": "上櫃"
    },
    {
      "code": "00968B",
      "name": "元大優息投等債",
      "volume": 6312,
      "market": "上櫃"
    },
    {
      "code": "00795B",
      "name": "中信美國公債20年",
      "volume": 6238,
      "market": "上櫃"
    },
    {
      "code": "00981D",
      "name": "主動中信非投等債",
      "volume": 5800,
      "market": "上櫃"
    },
    {
      "code": "3234",
      "name": "光環",
      "volume": 5658,
      "market": "上櫃"
    },
    {
      "code": "3081",
      "name": "聯亞",
      "volume": 5626,
      "market": "上櫃"
    },
    {
      "code": "00888",
      "name": "永豐台灣ESG",
      "volume": 5592,
      "market": "上櫃"
    },
    {
      "code": "6217",
      "name": "中探針",
      "volume": 5053,
      "market": "上櫃"
    },
    {
      "code": "8299",
      "name": "群聯",
      "volume": 4978,
      "market": "上櫃"
    },
    {
      "code": "5340",
      "name": "建榮",
      "volume": 4908,
      "market": "上櫃"
    },
    {
      "code": "2641",
      "name": "正德",
      "volume": 4878,
      "market": "上櫃"
    },
    {
      "code": "3362",
      "name": "先進光",
      "volume": 4709,
      "market": "上櫃"
    },
    {
      "code": "00970B",
      "name": "台新BBB投等債20+",
      "volume": 4551,
      "market": "上櫃"
    },
    {
      "code": "3707",
      "name": "漢磊",
      "volume": 4492,
      "market": "上櫃"
    }
  ]
};

const VALUE_TOP = {
  "date": "08/18",
  "sourceName": "成交值排行",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/Z/ZG/ZG_CD.djhtm",
  "stocks": [
    {
      "code": "2408",
      "name": "南亞科",
      "amount": 45626110,
      "market": "上市"
    },
    {
      "code": "2330",
      "name": "台積電",
      "amount": 45013928,
      "market": "上市"
    },
    {
      "code": "3037",
      "name": "欣興",
      "amount": 44299763,
      "market": "上市"
    },
    {
      "code": "2454",
      "name": "聯發科",
      "amount": 36493971,
      "market": "上市"
    },
    {
      "code": "2344",
      "name": "華邦電",
      "amount": 33695744,
      "market": "上市"
    },
    {
      "code": "3189",
      "name": "景碩",
      "amount": 24209430,
      "market": "上市"
    },
    {
      "code": "2059",
      "name": "川湖",
      "amount": 22333837,
      "market": "上市"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "amount": 22275844,
      "market": "上市"
    },
    {
      "code": "3008",
      "name": "大立光",
      "amount": 19441073,
      "market": "上市"
    },
    {
      "code": "4958",
      "name": "臻鼎-KY",
      "amount": 19323571,
      "market": "上市"
    },
    {
      "code": "3653",
      "name": "健策",
      "amount": 18316879,
      "market": "上市"
    },
    {
      "code": "2308",
      "name": "台達電",
      "amount": 17569251,
      "market": "上市"
    },
    {
      "code": "6770",
      "name": "力積電",
      "amount": 16317290,
      "market": "上市"
    },
    {
      "code": "2368",
      "name": "金像電",
      "amount": 15378839,
      "market": "上市"
    },
    {
      "code": "2455",
      "name": "全新",
      "amount": 15026153,
      "market": "上市"
    },
    {
      "code": "3661",
      "name": "世芯-KY",
      "amount": 14796600,
      "market": "上市"
    },
    {
      "code": "1303",
      "name": "南亞",
      "amount": 13950447,
      "market": "上市"
    },
    {
      "code": "3443",
      "name": "創意",
      "amount": 13928173,
      "market": "上市"
    },
    {
      "code": "8046",
      "name": "南電",
      "amount": 13495600,
      "market": "上市"
    },
    {
      "code": "2337",
      "name": "旺宏",
      "amount": 13419241,
      "market": "上市"
    },
    {
      "code": "3450",
      "name": "聯鈞",
      "amount": 13072851,
      "market": "上市"
    },
    {
      "code": "2317",
      "name": "鴻海",
      "amount": 12531808,
      "market": "上市"
    },
    {
      "code": "3711",
      "name": "日月光投控",
      "amount": 12072781,
      "market": "上市"
    },
    {
      "code": "2383",
      "name": "台光電",
      "amount": 11276577,
      "market": "上市"
    },
    {
      "code": "2301",
      "name": "光寶科",
      "amount": 11210302,
      "market": "上市"
    },
    {
      "code": "3017",
      "name": "奇鋐",
      "amount": 11021753,
      "market": "上市"
    },
    {
      "code": "2303",
      "name": "聯電",
      "amount": 10982956,
      "market": "上市"
    },
    {
      "code": "6669",
      "name": "緯穎",
      "amount": 10632086,
      "market": "上市"
    },
    {
      "code": "3481",
      "name": "群創",
      "amount": 10483421,
      "market": "上市"
    },
    {
      "code": "8039",
      "name": "台虹",
      "amount": 8874100,
      "market": "上市"
    },
    {
      "code": "6442",
      "name": "光聖",
      "amount": 7458919,
      "market": "上市"
    },
    {
      "code": "2634",
      "name": "漢翔",
      "amount": 7456837,
      "market": "上市"
    },
    {
      "code": "3532",
      "name": "台勝科",
      "amount": 7406531,
      "market": "上市"
    },
    {
      "code": "2615",
      "name": "萬海",
      "amount": 7344319,
      "market": "上市"
    },
    {
      "code": "2603",
      "name": "長榮",
      "amount": 7277330,
      "market": "上市"
    },
    {
      "code": "2345",
      "name": "智邦",
      "amount": 7213727,
      "market": "上市"
    },
    {
      "code": "6446",
      "name": "藥華藥",
      "amount": 7211631,
      "market": "上市"
    },
    {
      "code": "3231",
      "name": "緯創",
      "amount": 7140565,
      "market": "上市"
    },
    {
      "code": "3665",
      "name": "貿聯-KY",
      "amount": 6954668,
      "market": "上市"
    },
    {
      "code": "0050",
      "name": "元大台灣50",
      "amount": 6917013,
      "market": "上市"
    },
    {
      "code": "6531",
      "name": "愛普*",
      "amount": 6688473,
      "market": "上市"
    },
    {
      "code": "00981A",
      "name": "主動統一台股增長",
      "amount": 6519674,
      "market": "上市"
    },
    {
      "code": "2492",
      "name": "華新科",
      "amount": 6435691,
      "market": "上市"
    },
    {
      "code": "2481",
      "name": "強茂",
      "amount": 6053552,
      "market": "上市"
    },
    {
      "code": "2359",
      "name": "所羅門",
      "amount": 6040931,
      "market": "上市"
    },
    {
      "code": "00631L",
      "name": "元大台灣50正2",
      "amount": 5910439,
      "market": "上市"
    },
    {
      "code": "2324",
      "name": "仁寶",
      "amount": 5688895,
      "market": "上市"
    },
    {
      "code": "2449",
      "name": "京元電子",
      "amount": 4876991,
      "market": "上市"
    },
    {
      "code": "2609",
      "name": "陽明",
      "amount": 4866634,
      "market": "上市"
    },
    {
      "code": "2376",
      "name": "技嘉",
      "amount": 4642684,
      "market": "上市"
    },
    {
      "code": "6182",
      "name": "合晶",
      "amount": 25920704,
      "market": "上櫃"
    },
    {
      "code": "3081",
      "name": "聯亞",
      "amount": 16543835,
      "market": "上櫃"
    },
    {
      "code": "6488",
      "name": "環球晶",
      "amount": 14608848,
      "market": "上櫃"
    },
    {
      "code": "8358",
      "name": "金居",
      "amount": 14492372,
      "market": "上櫃"
    },
    {
      "code": "3105",
      "name": "穩懋",
      "amount": 11302035,
      "market": "上櫃"
    },
    {
      "code": "6223",
      "name": "旺矽",
      "amount": 11178159,
      "market": "上櫃"
    },
    {
      "code": "6274",
      "name": "台燿",
      "amount": 11119215,
      "market": "上櫃"
    },
    {
      "code": "8299",
      "name": "群聯",
      "amount": 10165942,
      "market": "上櫃"
    },
    {
      "code": "3374",
      "name": "精材",
      "amount": 8329648,
      "market": "上櫃"
    },
    {
      "code": "1815",
      "name": "富喬",
      "amount": 7048964,
      "market": "上櫃"
    },
    {
      "code": "5483",
      "name": "中美晶",
      "amount": 5538951,
      "market": "上櫃"
    },
    {
      "code": "6187",
      "name": "萬潤",
      "amount": 5304589,
      "market": "上櫃"
    },
    {
      "code": "3529",
      "name": "力旺",
      "amount": 4517384,
      "market": "上櫃"
    },
    {
      "code": "5351",
      "name": "鈺創",
      "amount": 4082071,
      "market": "上櫃"
    },
    {
      "code": "6147",
      "name": "頎邦",
      "amount": 3888939,
      "market": "上櫃"
    },
    {
      "code": "3260",
      "name": "威剛",
      "amount": 3764755,
      "market": "上櫃"
    },
    {
      "code": "4971",
      "name": "IET-KY",
      "amount": 3712321,
      "market": "上櫃"
    },
    {
      "code": "5425",
      "name": "台半",
      "amount": 3346579,
      "market": "上櫃"
    },
    {
      "code": "5274",
      "name": "信驊",
      "amount": 3045432,
      "market": "上櫃"
    },
    {
      "code": "5289",
      "name": "宜鼎",
      "amount": 2917249,
      "market": "上櫃"
    },
    {
      "code": "6173",
      "name": "信昌電",
      "amount": 2454682,
      "market": "上櫃"
    },
    {
      "code": "3363",
      "name": "上詮",
      "amount": 2406351,
      "market": "上櫃"
    },
    {
      "code": "5536",
      "name": "聖暉*",
      "amount": 2290670,
      "market": "上櫃"
    },
    {
      "code": "3455",
      "name": "由田",
      "amount": 2223599,
      "market": "上櫃"
    },
    {
      "code": "5347",
      "name": "世界",
      "amount": 2216383,
      "market": "上櫃"
    },
    {
      "code": "3491",
      "name": "昇達科",
      "amount": 1770576,
      "market": "上櫃"
    },
    {
      "code": "3324",
      "name": "雙鴻",
      "amount": 1647481,
      "market": "上櫃"
    },
    {
      "code": "5904",
      "name": "寶雅*",
      "amount": 1621459,
      "market": "上櫃"
    },
    {
      "code": "00937B",
      "name": "群益ESG投等債20+",
      "amount": 1618660,
      "market": "上櫃"
    },
    {
      "code": "8069",
      "name": "元太",
      "amount": 1468594,
      "market": "上櫃"
    },
    {
      "code": "8086",
      "name": "宏捷科",
      "amount": 1313025,
      "market": "上櫃"
    },
    {
      "code": "6510",
      "name": "精測",
      "amount": 1238544,
      "market": "上櫃"
    },
    {
      "code": "3388",
      "name": "崇越電",
      "amount": 1173434,
      "market": "上櫃"
    },
    {
      "code": "3163",
      "name": "波若威",
      "amount": 1161061,
      "market": "上櫃"
    },
    {
      "code": "3441",
      "name": "聯一光",
      "amount": 1118437,
      "market": "上櫃"
    },
    {
      "code": "3293",
      "name": "鈊象",
      "amount": 1108509,
      "market": "上櫃"
    },
    {
      "code": "4979",
      "name": "華星光",
      "amount": 1097235,
      "market": "上櫃"
    },
    {
      "code": "3498",
      "name": "陽程",
      "amount": 1089229,
      "market": "上櫃"
    },
    {
      "code": "3211",
      "name": "順達",
      "amount": 1057511,
      "market": "上櫃"
    },
    {
      "code": "7734",
      "name": "印能科技",
      "amount": 947919,
      "market": "上櫃"
    },
    {
      "code": "6727",
      "name": "亞泰金屬",
      "amount": 892779,
      "market": "上櫃"
    },
    {
      "code": "3264",
      "name": "欣銓",
      "amount": 889923,
      "market": "上櫃"
    },
    {
      "code": "3680",
      "name": "家登",
      "amount": 870146,
      "market": "上櫃"
    },
    {
      "code": "3362",
      "name": "先進光",
      "amount": 851663,
      "market": "上櫃"
    },
    {
      "code": "6217",
      "name": "中探針",
      "amount": 848697,
      "market": "上櫃"
    },
    {
      "code": "3234",
      "name": "光環",
      "amount": 833620,
      "market": "上櫃"
    },
    {
      "code": "7751",
      "name": "竑騰",
      "amount": 817777,
      "market": "上櫃"
    },
    {
      "code": "5371",
      "name": "中光電",
      "amount": 792174,
      "market": "上櫃"
    },
    {
      "code": "6683",
      "name": "雍智科技",
      "amount": 788047,
      "market": "上櫃"
    },
    {
      "code": "00679B",
      "name": "元大美債20年",
      "amount": 782096,
      "market": "上櫃"
    }
  ]
};

const SITCA_BUY_3D = {
  "date": "08/18",
  "sourceName": "投信買超排行",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_DD_0_3.djhtm",
  "stocks": [
    {
      "code": "2887",
      "name": "台新新光金",
      "buyVol": 72212,
      "market": "上市"
    },
    {
      "code": "2883",
      "name": "凱基金",
      "buyVol": 68084,
      "market": "上市"
    },
    {
      "code": "2884",
      "name": "玉山金",
      "buyVol": 60779,
      "market": "上市"
    },
    {
      "code": "2890",
      "name": "永豐金",
      "buyVol": 44015,
      "market": "上市"
    },
    {
      "code": "2892",
      "name": "第一金",
      "buyVol": 43696,
      "market": "上市"
    },
    {
      "code": "2886",
      "name": "兆豐金",
      "buyVol": 36015,
      "market": "上市"
    },
    {
      "code": "2880",
      "name": "華南金",
      "buyVol": 26346,
      "market": "上市"
    },
    {
      "code": "5880",
      "name": "合庫金",
      "buyVol": 24754,
      "market": "上市"
    },
    {
      "code": "3481",
      "name": "群創",
      "buyVol": 13462,
      "market": "上市"
    },
    {
      "code": "4938",
      "name": "和碩",
      "buyVol": 8746,
      "market": "上市"
    },
    {
      "code": "2412",
      "name": "中華電",
      "buyVol": 8003,
      "market": "上市"
    },
    {
      "code": "3532",
      "name": "台勝科",
      "buyVol": 5948,
      "market": "上市"
    },
    {
      "code": "2542",
      "name": "興富發",
      "buyVol": 3755,
      "market": "上市"
    },
    {
      "code": "2344",
      "name": "華邦電",
      "buyVol": 3604,
      "market": "上市"
    },
    {
      "code": "2633",
      "name": "台灣高鐵",
      "buyVol": 3588,
      "market": "上市"
    },
    {
      "code": "2885",
      "name": "元大金",
      "buyVol": 3468,
      "market": "上市"
    },
    {
      "code": "8046",
      "name": "南電",
      "buyVol": 3322,
      "market": "上市"
    },
    {
      "code": "2301",
      "name": "光寶科",
      "buyVol": 2768,
      "market": "上市"
    },
    {
      "code": "8996",
      "name": "高力",
      "buyVol": 2636,
      "market": "上市"
    },
    {
      "code": "00900",
      "name": "富邦特選高股息30",
      "buyVol": 2500,
      "market": "上市"
    },
    {
      "code": "3706",
      "name": "神達",
      "buyVol": 2464,
      "market": "上市"
    },
    {
      "code": "1303",
      "name": "南亞",
      "buyVol": 2241,
      "market": "上市"
    },
    {
      "code": "8070",
      "name": "長華*",
      "buyVol": 2238,
      "market": "上市"
    },
    {
      "code": "2368",
      "name": "金像電",
      "buyVol": 2217,
      "market": "上市"
    },
    {
      "code": "2377",
      "name": "微星",
      "buyVol": 2101,
      "market": "上市"
    },
    {
      "code": "2347",
      "name": "聯強",
      "buyVol": 2034,
      "market": "上市"
    },
    {
      "code": "3406",
      "name": "玉晶光",
      "buyVol": 1977,
      "market": "上市"
    },
    {
      "code": "2610",
      "name": "華航",
      "buyVol": 1957,
      "market": "上市"
    },
    {
      "code": "3450",
      "name": "聯鈞",
      "buyVol": 1892,
      "market": "上市"
    },
    {
      "code": "2855",
      "name": "統一證",
      "buyVol": 1798,
      "market": "上市"
    },
    {
      "code": "6805",
      "name": "富世達",
      "buyVol": 1521,
      "market": "上市"
    },
    {
      "code": "1504",
      "name": "東元",
      "buyVol": 1453,
      "market": "上市"
    },
    {
      "code": "6214",
      "name": "精誠",
      "buyVol": 1319,
      "market": "上市"
    },
    {
      "code": "3189",
      "name": "景碩",
      "buyVol": 1273,
      "market": "上市"
    },
    {
      "code": "2395",
      "name": "研華",
      "buyVol": 1231,
      "market": "上市"
    },
    {
      "code": "8422",
      "name": "可寧衛*",
      "buyVol": 1129,
      "market": "上市"
    },
    {
      "code": "3044",
      "name": "健鼎",
      "buyVol": 1044,
      "market": "上市"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "buyVol": 913,
      "market": "上市"
    },
    {
      "code": "00980A",
      "name": "主動野村臺灣優選",
      "buyVol": 887,
      "market": "上市"
    },
    {
      "code": "2105",
      "name": "正新",
      "buyVol": 881,
      "market": "上市"
    },
    {
      "code": "1402",
      "name": "遠東新",
      "buyVol": 877,
      "market": "上市"
    },
    {
      "code": "2615",
      "name": "萬海",
      "buyVol": 788,
      "market": "上市"
    },
    {
      "code": "2352",
      "name": "佳世達",
      "buyVol": 731,
      "market": "上市"
    },
    {
      "code": "9904",
      "name": "寶成",
      "buyVol": 724,
      "market": "上市"
    },
    {
      "code": "1102",
      "name": "亞泥",
      "buyVol": 722,
      "market": "上市"
    },
    {
      "code": "2474",
      "name": "可成",
      "buyVol": 695,
      "market": "上市"
    },
    {
      "code": "2357",
      "name": "華碩",
      "buyVol": 690,
      "market": "上市"
    },
    {
      "code": "4958",
      "name": "臻鼎-KY",
      "buyVol": 633,
      "market": "上市"
    },
    {
      "code": "8112",
      "name": "至上",
      "buyVol": 611,
      "market": "上市"
    },
    {
      "code": "2464",
      "name": "盟立",
      "buyVol": 578,
      "market": "上市"
    },
    {
      "code": "6488",
      "name": "環球晶",
      "buyVol": 1644,
      "market": "上櫃"
    },
    {
      "code": "6187",
      "name": "萬潤",
      "buyVol": 1449,
      "market": "上櫃"
    },
    {
      "code": "3265",
      "name": "台星科",
      "buyVol": 1358,
      "market": "上櫃"
    },
    {
      "code": "5483",
      "name": "中美晶",
      "buyVol": 1234,
      "market": "上櫃"
    },
    {
      "code": "00695B",
      "name": "富邦美債7-10",
      "buyVol": 1000,
      "market": "上櫃"
    },
    {
      "code": "00740B",
      "name": "富邦全球投等債",
      "buyVol": 800,
      "market": "上櫃"
    },
    {
      "code": "009814",
      "name": "富邦標普500",
      "buyVol": 800,
      "market": "上櫃"
    },
    {
      "code": "5425",
      "name": "台半",
      "buyVol": 639,
      "market": "上櫃"
    },
    {
      "code": "3081",
      "name": "聯亞",
      "buyVol": 608,
      "market": "上櫃"
    },
    {
      "code": "3105",
      "name": "穩懋",
      "buyVol": 529,
      "market": "上櫃"
    },
    {
      "code": "6182",
      "name": "合晶",
      "buyVol": 502,
      "market": "上櫃"
    },
    {
      "code": "4966",
      "name": "譜瑞-KY",
      "buyVol": 443,
      "market": "上櫃"
    },
    {
      "code": "3227",
      "name": "原相",
      "buyVol": 208,
      "market": "上櫃"
    },
    {
      "code": "6121",
      "name": "新普",
      "buyVol": 183,
      "market": "上櫃"
    },
    {
      "code": "8069",
      "name": "元太",
      "buyVol": 177,
      "market": "上櫃"
    },
    {
      "code": "6548",
      "name": "長科*",
      "buyVol": 161,
      "market": "上櫃"
    },
    {
      "code": "8358",
      "name": "金居",
      "buyVol": 156,
      "market": "上櫃"
    },
    {
      "code": "1815",
      "name": "富喬",
      "buyVol": 92,
      "market": "上櫃"
    },
    {
      "code": "3491",
      "name": "昇達科",
      "buyVol": 72,
      "market": "上櫃"
    },
    {
      "code": "5904",
      "name": "寶雅*",
      "buyVol": 64,
      "market": "上櫃"
    },
    {
      "code": "6693",
      "name": "廣閎科",
      "buyVol": 59,
      "market": "上櫃"
    },
    {
      "code": "5274",
      "name": "信驊",
      "buyVol": 49,
      "market": "上櫃"
    },
    {
      "code": "6640",
      "name": "均華",
      "buyVol": 38,
      "market": "上櫃"
    },
    {
      "code": "6584",
      "name": "南俊國際",
      "buyVol": 36,
      "market": "上櫃"
    },
    {
      "code": "3211",
      "name": "順達",
      "buyVol": 21,
      "market": "上櫃"
    },
    {
      "code": "3264",
      "name": "欣銓",
      "buyVol": 15,
      "market": "上櫃"
    },
    {
      "code": "5289",
      "name": "宜鼎",
      "buyVol": 12,
      "market": "上櫃"
    },
    {
      "code": "3693",
      "name": "營邦",
      "buyVol": 5,
      "market": "上櫃"
    },
    {
      "code": "6173",
      "name": "信昌電",
      "buyVol": 3,
      "market": "上櫃"
    },
    {
      "code": "7828",
      "name": "創新服務",
      "buyVol": 2,
      "market": "上櫃"
    },
    {
      "code": "3374",
      "name": "精材",
      "buyVol": 2,
      "market": "上櫃"
    },
    {
      "code": "3131",
      "name": "弘塑",
      "buyVol": 1,
      "market": "上櫃"
    },
    {
      "code": "3357",
      "name": "臺慶科",
      "buyVol": 1,
      "market": "上櫃"
    },
    {
      "code": "8086",
      "name": "宏捷科",
      "buyVol": 1,
      "market": "上櫃"
    },
    {
      "code": "2887",
      "name": "台新新光金",
      "buyVol": 86294,
      "market": "上市"
    },
    {
      "code": "2883",
      "name": "凱基金",
      "buyVol": 78374,
      "market": "上市"
    },
    {
      "code": "2884",
      "name": "玉山金",
      "buyVol": 62059,
      "market": "上市"
    },
    {
      "code": "2890",
      "name": "永豐金",
      "buyVol": 45692,
      "market": "上市"
    },
    {
      "code": "2892",
      "name": "第一金",
      "buyVol": 45021,
      "market": "上市"
    },
    {
      "code": "2886",
      "name": "兆豐金",
      "buyVol": 41376,
      "market": "上市"
    },
    {
      "code": "2880",
      "name": "華南金",
      "buyVol": 32258,
      "market": "上市"
    },
    {
      "code": "5880",
      "name": "合庫金",
      "buyVol": 30007,
      "market": "上市"
    },
    {
      "code": "3481",
      "name": "群創",
      "buyVol": 14008,
      "market": "上市"
    },
    {
      "code": "4938",
      "name": "和碩",
      "buyVol": 8685,
      "market": "上市"
    },
    {
      "code": "2368",
      "name": "金像電",
      "buyVol": 6552,
      "market": "上市"
    },
    {
      "code": "3532",
      "name": "台勝科",
      "buyVol": 6123,
      "market": "上市"
    },
    {
      "code": "2412",
      "name": "中華電",
      "buyVol": 6014,
      "market": "上市"
    },
    {
      "code": "2633",
      "name": "台灣高鐵",
      "buyVol": 5661,
      "market": "上市"
    },
    {
      "code": "2542",
      "name": "興富發",
      "buyVol": 5481,
      "market": "上市"
    },
    {
      "code": "2885",
      "name": "元大金",
      "buyVol": 5332,
      "market": "上市"
    },
    {
      "code": "00900",
      "name": "富邦特選高股息30",
      "buyVol": 5000,
      "market": "上市"
    },
    {
      "code": "8046",
      "name": "南電",
      "buyVol": 4881,
      "market": "上市"
    },
    {
      "code": "2301",
      "name": "光寶科",
      "buyVol": 4376,
      "market": "上市"
    },
    {
      "code": "8996",
      "name": "高力",
      "buyVol": 3321,
      "market": "上市"
    },
    {
      "code": "2855",
      "name": "統一證",
      "buyVol": 2991,
      "market": "上市"
    },
    {
      "code": "2610",
      "name": "華航",
      "buyVol": 2749,
      "market": "上市"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "buyVol": 2741,
      "market": "上市"
    },
    {
      "code": "2347",
      "name": "聯強",
      "buyVol": 2485,
      "market": "上市"
    },
    {
      "code": "3706",
      "name": "神達",
      "buyVol": 2367,
      "market": "上市"
    },
    {
      "code": "2377",
      "name": "微星",
      "buyVol": 2325,
      "market": "上市"
    },
    {
      "code": "1402",
      "name": "遠東新",
      "buyVol": 2305,
      "market": "上市"
    },
    {
      "code": "3450",
      "name": "聯鈞",
      "buyVol": 2240,
      "market": "上市"
    },
    {
      "code": "8070",
      "name": "長華*",
      "buyVol": 2235,
      "market": "上市"
    },
    {
      "code": "6805",
      "name": "富世達",
      "buyVol": 2141,
      "market": "上市"
    },
    {
      "code": "1303",
      "name": "南亞",
      "buyVol": 2094,
      "market": "上市"
    },
    {
      "code": "2603",
      "name": "長榮",
      "buyVol": 2092,
      "market": "上市"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "buyVol": 2053,
      "market": "上市"
    },
    {
      "code": "3406",
      "name": "玉晶光",
      "buyVol": 1975,
      "market": "上市"
    },
    {
      "code": "4915",
      "name": "致伸",
      "buyVol": 1690,
      "market": "上市"
    },
    {
      "code": "2382",
      "name": "廣達",
      "buyVol": 1657,
      "market": "上市"
    },
    {
      "code": "00980A",
      "name": "主動野村臺灣優選",
      "buyVol": 1650,
      "market": "上市"
    },
    {
      "code": "3044",
      "name": "健鼎",
      "buyVol": 1636,
      "market": "上市"
    },
    {
      "code": "3026",
      "name": "禾伸堂",
      "buyVol": 1632,
      "market": "上市"
    },
    {
      "code": "2903",
      "name": "遠百",
      "buyVol": 1457,
      "market": "上市"
    },
    {
      "code": "1504",
      "name": "東元",
      "buyVol": 1441,
      "market": "上市"
    },
    {
      "code": "2395",
      "name": "研華",
      "buyVol": 1402,
      "market": "上市"
    },
    {
      "code": "6214",
      "name": "精誠",
      "buyVol": 1316,
      "market": "上市"
    },
    {
      "code": "2105",
      "name": "正新",
      "buyVol": 1189,
      "market": "上市"
    },
    {
      "code": "8422",
      "name": "可寧衛*",
      "buyVol": 1130,
      "market": "上市"
    },
    {
      "code": "9904",
      "name": "寶成",
      "buyVol": 1084,
      "market": "上市"
    },
    {
      "code": "2492",
      "name": "華新科",
      "buyVol": 930,
      "market": "上市"
    },
    {
      "code": "2882",
      "name": "國泰金",
      "buyVol": 905,
      "market": "上市"
    },
    {
      "code": "8112",
      "name": "至上",
      "buyVol": 828,
      "market": "上市"
    },
    {
      "code": "2376",
      "name": "技嘉",
      "buyVol": 797,
      "market": "上市"
    },
    {
      "code": "3264",
      "name": "欣銓",
      "buyVol": 5787,
      "market": "上櫃"
    },
    {
      "code": "4979",
      "name": "華星光",
      "buyVol": 5413,
      "market": "上櫃"
    },
    {
      "code": "3211",
      "name": "順達",
      "buyVol": 3075,
      "market": "上櫃"
    },
    {
      "code": "3105",
      "name": "穩懋",
      "buyVol": 2499,
      "market": "上櫃"
    },
    {
      "code": "6173",
      "name": "信昌電",
      "buyVol": 1925,
      "market": "上櫃"
    },
    {
      "code": "5483",
      "name": "中美晶",
      "buyVol": 1854,
      "market": "上櫃"
    },
    {
      "code": "6187",
      "name": "萬潤",
      "buyVol": 1816,
      "market": "上櫃"
    },
    {
      "code": "00695B",
      "name": "富邦美債7-10",
      "buyVol": 1750,
      "market": "上櫃"
    },
    {
      "code": "009814",
      "name": "富邦標普500",
      "buyVol": 1700,
      "market": "上櫃"
    },
    {
      "code": "3265",
      "name": "台星科",
      "buyVol": 1358,
      "market": "上櫃"
    },
    {
      "code": "3081",
      "name": "聯亞",
      "buyVol": 1061,
      "market": "上櫃"
    },
    {
      "code": "5347",
      "name": "世界",
      "buyVol": 1014,
      "market": "上櫃"
    },
    {
      "code": "6488",
      "name": "環球晶",
      "buyVol": 999,
      "market": "上櫃"
    },
    {
      "code": "00740B",
      "name": "富邦全球投等債",
      "buyVol": 800,
      "market": "上櫃"
    },
    {
      "code": "5904",
      "name": "寶雅*",
      "buyVol": 762,
      "market": "上櫃"
    },
    {
      "code": "5425",
      "name": "台半",
      "buyVol": 639,
      "market": "上櫃"
    },
    {
      "code": "6182",
      "name": "合晶",
      "buyVol": 613,
      "market": "上櫃"
    },
    {
      "code": "4966",
      "name": "譜瑞-KY",
      "buyVol": 429,
      "market": "上櫃"
    },
    {
      "code": "6693",
      "name": "廣閎科",
      "buyVol": 242,
      "market": "上櫃"
    },
    {
      "code": "6121",
      "name": "新普",
      "buyVol": 225,
      "market": "上櫃"
    },
    {
      "code": "3227",
      "name": "原相",
      "buyVol": 208,
      "market": "上櫃"
    },
    {
      "code": "6548",
      "name": "長科*",
      "buyVol": 161,
      "market": "上櫃"
    },
    {
      "code": "5274",
      "name": "信驊",
      "buyVol": 136,
      "market": "上櫃"
    },
    {
      "code": "8069",
      "name": "元太",
      "buyVol": 129,
      "market": "上櫃"
    },
    {
      "code": "3131",
      "name": "弘塑",
      "buyVol": 111,
      "market": "上櫃"
    },
    {
      "code": "3491",
      "name": "昇達科",
      "buyVol": 107,
      "market": "上櫃"
    },
    {
      "code": "1815",
      "name": "富喬",
      "buyVol": 92,
      "market": "上櫃"
    },
    {
      "code": "6640",
      "name": "均華",
      "buyVol": 38,
      "market": "上櫃"
    },
    {
      "code": "6584",
      "name": "南俊國際",
      "buyVol": 36,
      "market": "上櫃"
    },
    {
      "code": "4123",
      "name": "晟德",
      "buyVol": 33,
      "market": "上櫃"
    },
    {
      "code": "3526",
      "name": "凡甲",
      "buyVol": 19,
      "market": "上櫃"
    },
    {
      "code": "3363",
      "name": "上詮",
      "buyVol": 13,
      "market": "上櫃"
    },
    {
      "code": "5289",
      "name": "宜鼎",
      "buyVol": 8,
      "market": "上櫃"
    },
    {
      "code": "8436",
      "name": "大江",
      "buyVol": 5,
      "market": "上櫃"
    },
    {
      "code": "3693",
      "name": "營邦",
      "buyVol": 5,
      "market": "上櫃"
    },
    {
      "code": "7828",
      "name": "創新服務",
      "buyVol": 2,
      "market": "上櫃"
    },
    {
      "code": "3357",
      "name": "臺慶科",
      "buyVol": 1,
      "market": "上櫃"
    },
    {
      "code": "8086",
      "name": "宏捷科",
      "buyVol": 1,
      "market": "上櫃"
    }
  ]
};

const MAJOR_BUY_1D = {
  "date": "08/17",
  "sourceName": "主力買超近 1 日 (上市 Top 50 + 上櫃 Top 50)",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/Z/ZG/ZG_F.djhtm",
  "stocks": [
    {
      "code": "00403A",
      "name": "主動統一升級50",
      "buyVol": 172705,
      "market": "上市"
    },
    {
      "code": "2409",
      "name": "友達",
      "buyVol": 66317,
      "market": "上市"
    },
    {
      "code": "00981A",
      "name": "主動統一台股增長",
      "buyVol": 65677,
      "market": "上市"
    },
    {
      "code": "00685L",
      "name": "群益臺灣加權正2",
      "buyVol": 59372,
      "market": "上市"
    },
    {
      "code": "00631L",
      "name": "元大台灣50正2",
      "buyVol": 54463,
      "market": "上市"
    },
    {
      "code": "00991A",
      "name": "主動復華未來50",
      "buyVol": 32413,
      "market": "上市"
    },
    {
      "code": "00405A",
      "name": "主動富邦台灣龍耀",
      "buyVol": 28923,
      "market": "上市"
    },
    {
      "code": "00400A",
      "name": "主動國泰動能高息",
      "buyVol": 26279,
      "market": "上市"
    },
    {
      "code": "009816",
      "name": "凱基台灣TOP50",
      "buyVol": 25396,
      "market": "上市"
    },
    {
      "code": "00407A",
      "name": "主動凱基台灣",
      "buyVol": 22343,
      "market": "上市"
    },
    {
      "code": "2603",
      "name": "長榮",
      "buyVol": 22165,
      "market": "上市"
    },
    {
      "code": "3037",
      "name": "欣興",
      "buyVol": 20684,
      "market": "上市"
    },
    {
      "code": "2609",
      "name": "陽明",
      "buyVol": 19684,
      "market": "上市"
    },
    {
      "code": "2618",
      "name": "長榮航",
      "buyVol": 19676,
      "market": "上市"
    },
    {
      "code": "0050",
      "name": "元大台灣50",
      "buyVol": 17690,
      "market": "上市"
    },
    {
      "code": "00992A",
      "name": "主動群益科技創新",
      "buyVol": 16911,
      "market": "上市"
    },
    {
      "code": "2615",
      "name": "萬海",
      "buyVol": 15910,
      "market": "上市"
    },
    {
      "code": "2027",
      "name": "大成鋼",
      "buyVol": 13077,
      "market": "上市"
    },
    {
      "code": "00988A",
      "name": "主動統一全球創新",
      "buyVol": 12819,
      "market": "上市"
    },
    {
      "code": "3481",
      "name": "群創",
      "buyVol": 11565,
      "market": "上市"
    },
    {
      "code": "00999A",
      "name": "主動野村臺灣高息",
      "buyVol": 11441,
      "market": "上市"
    },
    {
      "code": "2845",
      "name": "遠東銀",
      "buyVol": 11320,
      "market": "上市"
    },
    {
      "code": "5880",
      "name": "合庫金",
      "buyVol": 11252,
      "market": "上市"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "buyVol": 10405,
      "market": "上市"
    },
    {
      "code": "2426",
      "name": "鼎元",
      "buyVol": 7899,
      "market": "上市"
    },
    {
      "code": "009821",
      "name": "野村稀土關鍵資源",
      "buyVol": 7451,
      "market": "上市"
    },
    {
      "code": "6214",
      "name": "精誠",
      "buyVol": 6147,
      "market": "上市"
    },
    {
      "code": "00990A",
      "name": "主動元大AI新經濟",
      "buyVol": 5988,
      "market": "上市"
    },
    {
      "code": "1714",
      "name": "和桐",
      "buyVol": 5770,
      "market": "上市"
    },
    {
      "code": "2323",
      "name": "中環",
      "buyVol": 5278,
      "market": "上市"
    },
    {
      "code": "00940",
      "name": "元大台灣價值高息",
      "buyVol": 5146,
      "market": "上市"
    },
    {
      "code": "2542",
      "name": "興富發",
      "buyVol": 4940,
      "market": "上市"
    },
    {
      "code": "2303",
      "name": "聯電",
      "buyVol": 4796,
      "market": "上市"
    },
    {
      "code": "0052",
      "name": "富邦科技",
      "buyVol": 4715,
      "market": "上市"
    },
    {
      "code": "2359",
      "name": "所羅門",
      "buyVol": 4684,
      "market": "上市"
    },
    {
      "code": "1402",
      "name": "遠東新",
      "buyVol": 4300,
      "market": "上市"
    },
    {
      "code": "2455",
      "name": "全新",
      "buyVol": 3896,
      "market": "上市"
    },
    {
      "code": "00402A",
      "name": "主動安聯美國科技",
      "buyVol": 3866,
      "market": "上市"
    },
    {
      "code": "00997A",
      "name": "主動群益美國增長",
      "buyVol": 3824,
      "market": "上市"
    },
    {
      "code": "2382",
      "name": "廣達",
      "buyVol": 3775,
      "market": "上市"
    },
    {
      "code": "009820",
      "name": "元大納斯達克精選",
      "buyVol": 3684,
      "market": "上市"
    },
    {
      "code": "1909",
      "name": "榮成",
      "buyVol": 3664,
      "market": "上市"
    },
    {
      "code": "1504",
      "name": "東元",
      "buyVol": 3663,
      "market": "上市"
    },
    {
      "code": "3045",
      "name": "台灣大",
      "buyVol": 3570,
      "market": "上市"
    },
    {
      "code": "00637L",
      "name": "元大滬深300正2",
      "buyVol": 3301,
      "market": "上市"
    },
    {
      "code": "1709",
      "name": "和益",
      "buyVol": 3240,
      "market": "上市"
    },
    {
      "code": "2371",
      "name": "大同",
      "buyVol": 3155,
      "market": "上市"
    },
    {
      "code": "3042",
      "name": "晶技",
      "buyVol": 3056,
      "market": "上市"
    },
    {
      "code": "00993A",
      "name": "主動安聯台灣",
      "buyVol": 2989,
      "market": "上市"
    },
    {
      "code": "9945",
      "name": "潤泰新",
      "buyVol": 2796,
      "market": "上市"
    },
    {
      "code": "6182",
      "name": "合晶",
      "buyVol": 13728,
      "market": "上櫃"
    },
    {
      "code": "6147",
      "name": "頎邦",
      "buyVol": 4728,
      "market": "上櫃"
    },
    {
      "code": "1815",
      "name": "富喬",
      "buyVol": 3431,
      "market": "上櫃"
    },
    {
      "code": "3105",
      "name": "穩懋",
      "buyVol": 3342,
      "market": "上櫃"
    },
    {
      "code": "00888",
      "name": "永豐台灣ESG",
      "buyVol": 3093,
      "market": "上櫃"
    },
    {
      "code": "3490",
      "name": "單井",
      "buyVol": 1776,
      "market": "上櫃"
    },
    {
      "code": "00887",
      "name": "永豐中國科技50大",
      "buyVol": 1655,
      "market": "上櫃"
    },
    {
      "code": "5425",
      "name": "台半",
      "buyVol": 1637,
      "market": "上櫃"
    },
    {
      "code": "6244",
      "name": "茂迪",
      "buyVol": 1540,
      "market": "上櫃"
    },
    {
      "code": "6265",
      "name": "方土昶",
      "buyVol": 1377,
      "market": "上櫃"
    },
    {
      "code": "6187",
      "name": "萬潤",
      "buyVol": 1288,
      "market": "上櫃"
    },
    {
      "code": "3234",
      "name": "光環",
      "buyVol": 1234,
      "market": "上櫃"
    },
    {
      "code": "6163",
      "name": "華電網",
      "buyVol": 1132,
      "market": "上櫃"
    },
    {
      "code": "6603",
      "name": "富強鑫",
      "buyVol": 1049,
      "market": "上櫃"
    },
    {
      "code": "3455",
      "name": "由田",
      "buyVol": 857,
      "market": "上櫃"
    },
    {
      "code": "5351",
      "name": "鈺創",
      "buyVol": 784,
      "market": "上櫃"
    },
    {
      "code": "5347",
      "name": "世界",
      "buyVol": 769,
      "market": "上櫃"
    },
    {
      "code": "3441",
      "name": "聯一光",
      "buyVol": 752,
      "market": "上櫃"
    },
    {
      "code": "00877",
      "name": "復華中國5G",
      "buyVol": 722,
      "market": "上櫃"
    },
    {
      "code": "6179",
      "name": "亞通",
      "buyVol": 711,
      "market": "上櫃"
    },
    {
      "code": "1785",
      "name": "光洋科",
      "buyVol": 573,
      "market": "上櫃"
    },
    {
      "code": "3339",
      "name": "泰谷",
      "buyVol": 505,
      "market": "上櫃"
    },
    {
      "code": "5289",
      "name": "宜鼎",
      "buyVol": 495,
      "market": "上櫃"
    },
    {
      "code": "4931",
      "name": "新盛力",
      "buyVol": 466,
      "market": "上櫃"
    },
    {
      "code": "3221",
      "name": "台嘉碩",
      "buyVol": 464,
      "market": "上櫃"
    },
    {
      "code": "4561",
      "name": "健椿",
      "buyVol": 460,
      "market": "上櫃"
    },
    {
      "code": "4541",
      "name": "晟田",
      "buyVol": 389,
      "market": "上櫃"
    },
    {
      "code": "00955",
      "name": "中信日本商社",
      "buyVol": 358,
      "market": "上櫃"
    },
    {
      "code": "3675",
      "name": "德微",
      "buyVol": 342,
      "market": "上櫃"
    },
    {
      "code": "3498",
      "name": "陽程",
      "buyVol": 308,
      "market": "上櫃"
    },
    {
      "code": "5321",
      "name": "美而快",
      "buyVol": 275,
      "market": "上櫃"
    },
    {
      "code": "5392",
      "name": "能率",
      "buyVol": 270,
      "market": "上櫃"
    },
    {
      "code": "8932",
      "name": "智通*",
      "buyVol": 262,
      "market": "上櫃"
    },
    {
      "code": "5340",
      "name": "建榮",
      "buyVol": 257,
      "market": "上櫃"
    },
    {
      "code": "4991",
      "name": "環宇-KY",
      "buyVol": 254,
      "market": "上櫃"
    },
    {
      "code": "6538",
      "name": "倉和",
      "buyVol": 251,
      "market": "上櫃"
    },
    {
      "code": "4114",
      "name": "健喬",
      "buyVol": 249,
      "market": "上櫃"
    },
    {
      "code": "8042",
      "name": "金山電",
      "buyVol": 247,
      "market": "上櫃"
    },
    {
      "code": "5009",
      "name": "榮剛",
      "buyVol": 229,
      "market": "上櫃"
    },
    {
      "code": "4707",
      "name": "磐亞",
      "buyVol": 219,
      "market": "上櫃"
    },
    {
      "code": "4303",
      "name": "信立",
      "buyVol": 217,
      "market": "上櫃"
    },
    {
      "code": "3363",
      "name": "上詮",
      "buyVol": 209,
      "market": "上櫃"
    },
    {
      "code": "3163",
      "name": "波若威",
      "buyVol": 199,
      "market": "上櫃"
    },
    {
      "code": "3081",
      "name": "聯亞",
      "buyVol": 189,
      "market": "上櫃"
    },
    {
      "code": "6548",
      "name": "長科*",
      "buyVol": 184,
      "market": "上櫃"
    },
    {
      "code": "009815",
      "name": "大華美國MAG7+",
      "buyVol": 183,
      "market": "上櫃"
    },
    {
      "code": "3489",
      "name": "森寶",
      "buyVol": 175,
      "market": "上櫃"
    },
    {
      "code": "3236",
      "name": "千如",
      "buyVol": 175,
      "market": "上櫃"
    },
    {
      "code": "6530",
      "name": "創威",
      "buyVol": 159,
      "market": "上櫃"
    },
    {
      "code": "4128",
      "name": "中天",
      "buyVol": 157,
      "market": "上櫃"
    },
    {
      "code": "00403A",
      "name": "主動統一升級50",
      "buyVol": 641681,
      "market": "上市"
    },
    {
      "code": "00981A",
      "name": "主動統一台股增長",
      "buyVol": 258291,
      "market": "上市"
    },
    {
      "code": "00631L",
      "name": "元大台灣50正2",
      "buyVol": 193606,
      "market": "上市"
    },
    {
      "code": "00685L",
      "name": "群益臺灣加權正2",
      "buyVol": 193339,
      "market": "上市"
    },
    {
      "code": "00407A",
      "name": "主動凱基台灣",
      "buyVol": 162024,
      "market": "上市"
    },
    {
      "code": "00991A",
      "name": "主動復華未來50",
      "buyVol": 108904,
      "market": "上市"
    },
    {
      "code": "009816",
      "name": "凱基台灣TOP50",
      "buyVol": 97096,
      "market": "上市"
    },
    {
      "code": "00405A",
      "name": "主動富邦台灣龍耀",
      "buyVol": 88197,
      "market": "上市"
    },
    {
      "code": "0050",
      "name": "元大台灣50",
      "buyVol": 88061,
      "market": "上市"
    },
    {
      "code": "00400A",
      "name": "主動國泰動能高息",
      "buyVol": 70271,
      "market": "上市"
    },
    {
      "code": "6770",
      "name": "力積電",
      "buyVol": 62722,
      "market": "上市"
    },
    {
      "code": "00992A",
      "name": "主動群益科技創新",
      "buyVol": 58538,
      "market": "上市"
    },
    {
      "code": "2409",
      "name": "友達",
      "buyVol": 57684,
      "market": "上市"
    },
    {
      "code": "2324",
      "name": "仁寶",
      "buyVol": 54021,
      "market": "上市"
    },
    {
      "code": "0056",
      "name": "元大高股息",
      "buyVol": 49123,
      "market": "上市"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "buyVol": 40766,
      "market": "上市"
    },
    {
      "code": "2887",
      "name": "台新新光金",
      "buyVol": 40085,
      "market": "上市"
    },
    {
      "code": "00999A",
      "name": "主動野村臺灣高息",
      "buyVol": 35719,
      "market": "上市"
    },
    {
      "code": "2615",
      "name": "萬海",
      "buyVol": 30396,
      "market": "上市"
    },
    {
      "code": "2603",
      "name": "長榮",
      "buyVol": 28585,
      "market": "上市"
    },
    {
      "code": "00919",
      "name": "群益台灣精選高息",
      "buyVol": 27665,
      "market": "上市"
    },
    {
      "code": "2634",
      "name": "漢翔",
      "buyVol": 27118,
      "market": "上市"
    },
    {
      "code": "2344",
      "name": "華邦電",
      "buyVol": 26475,
      "market": "上市"
    },
    {
      "code": "009820",
      "name": "元大納斯達克精選",
      "buyVol": 26058,
      "market": "上市"
    },
    {
      "code": "3037",
      "name": "欣興",
      "buyVol": 25669,
      "market": "上市"
    },
    {
      "code": "2027",
      "name": "大成鋼",
      "buyVol": 25484,
      "market": "上市"
    },
    {
      "code": "0052",
      "name": "富邦科技",
      "buyVol": 22914,
      "market": "上市"
    },
    {
      "code": "2883",
      "name": "凱基金",
      "buyVol": 22846,
      "market": "上市"
    },
    {
      "code": "00940",
      "name": "元大台灣價值高息",
      "buyVol": 21904,
      "market": "上市"
    },
    {
      "code": "00988A",
      "name": "主動統一全球創新",
      "buyVol": 21673,
      "market": "上市"
    },
    {
      "code": "1303",
      "name": "南亞",
      "buyVol": 20171,
      "market": "上市"
    },
    {
      "code": "009821",
      "name": "野村稀土關鍵資源",
      "buyVol": 20064,
      "market": "上市"
    },
    {
      "code": "3481",
      "name": "群創",
      "buyVol": 18582,
      "market": "上市"
    },
    {
      "code": "1504",
      "name": "東元",
      "buyVol": 16760,
      "market": "上市"
    },
    {
      "code": "2609",
      "name": "陽明",
      "buyVol": 16166,
      "market": "上市"
    },
    {
      "code": "2542",
      "name": "興富發",
      "buyVol": 14930,
      "market": "上市"
    },
    {
      "code": "9945",
      "name": "潤泰新",
      "buyVol": 14533,
      "market": "上市"
    },
    {
      "code": "00402A",
      "name": "主動安聯美國科技",
      "buyVol": 13930,
      "market": "上市"
    },
    {
      "code": "009819",
      "name": "中信數據及電力",
      "buyVol": 13898,
      "market": "上市"
    },
    {
      "code": "4938",
      "name": "和碩",
      "buyVol": 13788,
      "market": "上市"
    },
    {
      "code": "1605",
      "name": "華新",
      "buyVol": 13771,
      "market": "上市"
    },
    {
      "code": "00990A",
      "name": "主動元大AI新經濟",
      "buyVol": 13587,
      "market": "上市"
    },
    {
      "code": "2323",
      "name": "中環",
      "buyVol": 12750,
      "market": "上市"
    },
    {
      "code": "2359",
      "name": "所羅門",
      "buyVol": 12200,
      "market": "上市"
    },
    {
      "code": "2845",
      "name": "遠東銀",
      "buyVol": 11297,
      "market": "上市"
    },
    {
      "code": "00997A",
      "name": "主動群益美國增長",
      "buyVol": 11109,
      "market": "上市"
    },
    {
      "code": "9105",
      "name": "泰金寶-DR",
      "buyVol": 10370,
      "market": "上市"
    },
    {
      "code": "3231",
      "name": "緯創",
      "buyVol": 10274,
      "market": "上市"
    },
    {
      "code": "5880",
      "name": "合庫金",
      "buyVol": 10144,
      "market": "上市"
    },
    {
      "code": "1513",
      "name": "中興電",
      "buyVol": 9433,
      "market": "上市"
    },
    {
      "code": "00888",
      "name": "永豐台灣ESG",
      "buyVol": 10139,
      "market": "上櫃"
    },
    {
      "code": "5347",
      "name": "世界",
      "buyVol": 7723,
      "market": "上櫃"
    },
    {
      "code": "6265",
      "name": "方土昶",
      "buyVol": 7418,
      "market": "上櫃"
    },
    {
      "code": "1815",
      "name": "富喬",
      "buyVol": 6478,
      "market": "上櫃"
    },
    {
      "code": "6147",
      "name": "頎邦",
      "buyVol": 3840,
      "market": "上櫃"
    },
    {
      "code": "5351",
      "name": "鈺創",
      "buyVol": 3428,
      "market": "上櫃"
    },
    {
      "code": "3498",
      "name": "陽程",
      "buyVol": 3423,
      "market": "上櫃"
    },
    {
      "code": "6244",
      "name": "茂迪",
      "buyVol": 3417,
      "market": "上櫃"
    },
    {
      "code": "6187",
      "name": "萬潤",
      "buyVol": 3230,
      "market": "上櫃"
    },
    {
      "code": "3490",
      "name": "單井",
      "buyVol": 2791,
      "market": "上櫃"
    },
    {
      "code": "00955",
      "name": "中信日本商社",
      "buyVol": 2551,
      "market": "上櫃"
    },
    {
      "code": "3264",
      "name": "欣銓",
      "buyVol": 2394,
      "market": "上櫃"
    },
    {
      "code": "3234",
      "name": "光環",
      "buyVol": 2169,
      "market": "上櫃"
    },
    {
      "code": "6538",
      "name": "倉和",
      "buyVol": 1825,
      "market": "上櫃"
    },
    {
      "code": "6603",
      "name": "富強鑫",
      "buyVol": 1531,
      "market": "上櫃"
    },
    {
      "code": "4931",
      "name": "新盛力",
      "buyVol": 1325,
      "market": "上櫃"
    },
    {
      "code": "6163",
      "name": "華電網",
      "buyVol": 1263,
      "market": "上櫃"
    },
    {
      "code": "00877",
      "name": "復華中國5G",
      "buyVol": 1226,
      "market": "上櫃"
    },
    {
      "code": "009815",
      "name": "大華美國MAG7+",
      "buyVol": 1202,
      "market": "上櫃"
    },
    {
      "code": "6179",
      "name": "亞通",
      "buyVol": 980,
      "market": "上櫃"
    },
    {
      "code": "6829",
      "name": "千附精密",
      "buyVol": 926,
      "market": "上櫃"
    },
    {
      "code": "3455",
      "name": "由田",
      "buyVol": 845,
      "market": "上櫃"
    },
    {
      "code": "3707",
      "name": "漢磊",
      "buyVol": 728,
      "market": "上櫃"
    },
    {
      "code": "6840",
      "name": "東研信超",
      "buyVol": 698,
      "market": "上櫃"
    },
    {
      "code": "6716",
      "name": "應廣",
      "buyVol": 658,
      "market": "上櫃"
    },
    {
      "code": "6548",
      "name": "長科*",
      "buyVol": 603,
      "market": "上櫃"
    },
    {
      "code": "1336",
      "name": "台翰",
      "buyVol": 599,
      "market": "上櫃"
    },
    {
      "code": "8932",
      "name": "智通*",
      "buyVol": 593,
      "market": "上櫃"
    },
    {
      "code": "4979",
      "name": "華星光",
      "buyVol": 574,
      "market": "上櫃"
    },
    {
      "code": "5392",
      "name": "能率",
      "buyVol": 528,
      "market": "上櫃"
    },
    {
      "code": "6727",
      "name": "亞泰金屬",
      "buyVol": 482,
      "market": "上櫃"
    },
    {
      "code": "8942",
      "name": "森鉅",
      "buyVol": 439,
      "market": "上櫃"
    },
    {
      "code": "4533",
      "name": "協易機",
      "buyVol": 418,
      "market": "上櫃"
    },
    {
      "code": "6217",
      "name": "中探針",
      "buyVol": 357,
      "market": "上櫃"
    },
    {
      "code": "3260",
      "name": "威剛",
      "buyVol": 352,
      "market": "上櫃"
    },
    {
      "code": "3339",
      "name": "泰谷",
      "buyVol": 342,
      "market": "上櫃"
    },
    {
      "code": "4561",
      "name": "健椿",
      "buyVol": 341,
      "market": "上櫃"
    },
    {
      "code": "6488",
      "name": "環球晶",
      "buyVol": 339,
      "market": "上櫃"
    },
    {
      "code": "8042",
      "name": "金山電",
      "buyVol": 332,
      "market": "上櫃"
    },
    {
      "code": "5289",
      "name": "宜鼎",
      "buyVol": 299,
      "market": "上櫃"
    },
    {
      "code": "4114",
      "name": "健喬",
      "buyVol": 299,
      "market": "上櫃"
    },
    {
      "code": "4128",
      "name": "中天",
      "buyVol": 292,
      "market": "上櫃"
    },
    {
      "code": "2221",
      "name": "大甲",
      "buyVol": 289,
      "market": "上櫃"
    },
    {
      "code": "3693",
      "name": "營邦",
      "buyVol": 277,
      "market": "上櫃"
    },
    {
      "code": "00928",
      "name": "中信上櫃ESG30",
      "buyVol": 266,
      "market": "上櫃"
    },
    {
      "code": "4167",
      "name": "松瑞藥",
      "buyVol": 245,
      "market": "上櫃"
    },
    {
      "code": "5530",
      "name": "龍巖",
      "buyVol": 237,
      "market": "上櫃"
    },
    {
      "code": "3675",
      "name": "德微",
      "buyVol": 233,
      "market": "上櫃"
    },
    {
      "code": "5321",
      "name": "美而快",
      "buyVol": 227,
      "market": "上櫃"
    },
    {
      "code": "5309",
      "name": "系統電",
      "buyVol": 220,
      "market": "上櫃"
    }
  ]
};

const TURNOVER_RATE = {
  "date": "08/18",
  "sourceName": "週轉率排行",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/Z/ZG/ZG_BD.djhtm",
  "stocks": [
    {
      "code": "2359",
      "name": "所羅門",
      "turnoverRate": 20.1,
      "market": "上市"
    },
    {
      "code": "2455",
      "name": "全新",
      "turnoverRate": 19.16,
      "market": "上市"
    },
    {
      "code": "3450",
      "name": "聯鈞",
      "turnoverRate": 15.39,
      "market": "上市"
    },
    {
      "code": "6226",
      "name": "光鼎",
      "turnoverRate": 13.51,
      "market": "上市"
    },
    {
      "code": "00406A",
      "name": "主動中信台灣收益",
      "turnoverRate": 12.95,
      "market": "上市"
    },
    {
      "code": "8039",
      "name": "台虹",
      "turnoverRate": 12.09,
      "market": "上市"
    },
    {
      "code": "1727",
      "name": "中華化",
      "turnoverRate": 11.36,
      "market": "上市"
    },
    {
      "code": "8261",
      "name": "富鼎",
      "turnoverRate": 11.06,
      "market": "上市"
    },
    {
      "code": "2481",
      "name": "強茂",
      "turnoverRate": 11.03,
      "market": "上市"
    },
    {
      "code": "8105",
      "name": "凌巨",
      "turnoverRate": 10.91,
      "market": "上市"
    },
    {
      "code": "2634",
      "name": "漢翔",
      "turnoverRate": 10.76,
      "market": "上市"
    },
    {
      "code": "00686R",
      "name": "群益臺灣加權反1",
      "turnoverRate": 10.49,
      "market": "上市"
    },
    {
      "code": "6672",
      "name": "騰輝電子-KY",
      "turnoverRate": 10.24,
      "market": "上市"
    },
    {
      "code": "00657K",
      "name": "國泰日經225+U",
      "turnoverRate": 10.0,
      "market": "上市"
    },
    {
      "code": "2464",
      "name": "盟立",
      "turnoverRate": 8.56,
      "market": "上市"
    },
    {
      "code": "3042",
      "name": "晶技",
      "turnoverRate": 7.52,
      "market": "上市"
    },
    {
      "code": "8021",
      "name": "尖點",
      "turnoverRate": 7.38,
      "market": "上市"
    },
    {
      "code": "2426",
      "name": "鼎元",
      "turnoverRate": 7.26,
      "market": "上市"
    },
    {
      "code": "6141",
      "name": "柏承",
      "turnoverRate": 6.87,
      "market": "上市"
    },
    {
      "code": "3605",
      "name": "宏致",
      "turnoverRate": 6.75,
      "market": "上市"
    },
    {
      "code": "00715L",
      "name": "期街口布蘭特正2",
      "turnoverRate": 6.74,
      "market": "上市"
    },
    {
      "code": "3167",
      "name": "大量",
      "turnoverRate": 6.55,
      "market": "上市"
    },
    {
      "code": "3229",
      "name": "晟鈦",
      "turnoverRate": 6.15,
      "market": "上市"
    },
    {
      "code": "2302",
      "name": "麗正",
      "turnoverRate": 5.9,
      "market": "上市"
    },
    {
      "code": "6442",
      "name": "光聖",
      "turnoverRate": 5.73,
      "market": "上市"
    },
    {
      "code": "6451",
      "name": "訊芯-KY",
      "turnoverRate": 5.61,
      "market": "上市"
    },
    {
      "code": "00875",
      "name": "國泰網路資安",
      "turnoverRate": 5.58,
      "market": "上市"
    },
    {
      "code": "2484",
      "name": "希華",
      "turnoverRate": 5.53,
      "market": "上市"
    },
    {
      "code": "1810",
      "name": "和成",
      "turnoverRate": 5.49,
      "market": "上市"
    },
    {
      "code": "009826",
      "name": "貝萊德世界股票",
      "turnoverRate": 5.46,
      "market": "上市"
    },
    {
      "code": "4977",
      "name": "眾達-KY",
      "turnoverRate": 5.46,
      "market": "上市"
    },
    {
      "code": "2337",
      "name": "旺宏",
      "turnoverRate": 5.4,
      "market": "上市"
    },
    {
      "code": "00410A",
      "name": "主動永豐科技趨勢",
      "turnoverRate": 5.32,
      "market": "上市"
    },
    {
      "code": "3006",
      "name": "晶豪科",
      "turnoverRate": 5.31,
      "market": "上市"
    },
    {
      "code": "00664R",
      "name": "國泰臺灣加權反1",
      "turnoverRate": 5.17,
      "market": "上市"
    },
    {
      "code": "00668",
      "name": "國泰美國道瓊",
      "turnoverRate": 5.13,
      "market": "上市"
    },
    {
      "code": "3189",
      "name": "景碩",
      "turnoverRate": 5.12,
      "market": "上市"
    },
    {
      "code": "00678",
      "name": "群益那斯達克生技",
      "turnoverRate": 4.99,
      "market": "上市"
    },
    {
      "code": "3406",
      "name": "玉晶光",
      "turnoverRate": 4.98,
      "market": "上市"
    },
    {
      "code": "3532",
      "name": "台勝科",
      "turnoverRate": 4.98,
      "market": "上市"
    },
    {
      "code": "6770",
      "name": "力積電",
      "turnoverRate": 4.86,
      "market": "上市"
    },
    {
      "code": "8103",
      "name": "瀚荃",
      "turnoverRate": 4.74,
      "market": "上市"
    },
    {
      "code": "00961",
      "name": "FT臺灣永續高息",
      "turnoverRate": 4.73,
      "market": "上市"
    },
    {
      "code": "6531",
      "name": "愛普*",
      "turnoverRate": 4.64,
      "market": "上市"
    },
    {
      "code": "3661",
      "name": "世芯-KY",
      "turnoverRate": 4.62,
      "market": "上市"
    },
    {
      "code": "2492",
      "name": "華新科",
      "turnoverRate": 4.57,
      "market": "上市"
    },
    {
      "code": "00632R",
      "name": "元大台灣50反1",
      "turnoverRate": 4.49,
      "market": "上市"
    },
    {
      "code": "6477",
      "name": "安集",
      "turnoverRate": 4.49,
      "market": "上市"
    },
    {
      "code": "2342",
      "name": "茂矽",
      "turnoverRate": 4.44,
      "market": "上市"
    },
    {
      "code": "4967",
      "name": "十銓",
      "turnoverRate": 4.3,
      "market": "上市"
    },
    {
      "code": "6182",
      "name": "合晶",
      "turnoverRate": 33.49,
      "market": "上櫃"
    },
    {
      "code": "3441",
      "name": "聯一光",
      "turnoverRate": 32.02,
      "market": "上櫃"
    },
    {
      "code": "3490",
      "name": "單井",
      "turnoverRate": 18.7,
      "market": "上櫃"
    },
    {
      "code": "3388",
      "name": "崇越電",
      "turnoverRate": 15.18,
      "market": "上櫃"
    },
    {
      "code": "3455",
      "name": "由田",
      "turnoverRate": 14.3,
      "market": "上櫃"
    },
    {
      "code": "4971",
      "name": "IET-KY",
      "turnoverRate": 13.78,
      "market": "上櫃"
    },
    {
      "code": "5425",
      "name": "台半",
      "turnoverRate": 13.57,
      "market": "上櫃"
    },
    {
      "code": "8358",
      "name": "金居",
      "turnoverRate": 13.34,
      "market": "上櫃"
    },
    {
      "code": "1815",
      "name": "富喬",
      "turnoverRate": 12.03,
      "market": "上櫃"
    },
    {
      "code": "3498",
      "name": "陽程",
      "turnoverRate": 10.81,
      "market": "上櫃"
    },
    {
      "code": "00859B",
      "name": "群益0-1年美債",
      "turnoverRate": 10.79,
      "market": "上櫃"
    },
    {
      "code": "4939",
      "name": "亞電",
      "turnoverRate": 10.23,
      "market": "上櫃"
    },
    {
      "code": "3374",
      "name": "精材",
      "turnoverRate": 9.93,
      "market": "上櫃"
    },
    {
      "code": "5351",
      "name": "鈺創",
      "turnoverRate": 9.58,
      "market": "上櫃"
    },
    {
      "code": "4541",
      "name": "晟田",
      "turnoverRate": 9.36,
      "market": "上櫃"
    },
    {
      "code": "6265",
      "name": "方土昶",
      "turnoverRate": 9.22,
      "market": "上櫃"
    },
    {
      "code": "00847B",
      "name": "中信美國市政債",
      "turnoverRate": 7.86,
      "market": "上櫃"
    },
    {
      "code": "6727",
      "name": "亞泰金屬",
      "turnoverRate": 7.29,
      "market": "上櫃"
    },
    {
      "code": "6173",
      "name": "信昌電",
      "turnoverRate": 7.04,
      "market": "上櫃"
    },
    {
      "code": "6517",
      "name": "保勝光學",
      "turnoverRate": 6.99,
      "market": "上櫃"
    },
    {
      "code": "6588",
      "name": "東典光電",
      "turnoverRate": 6.98,
      "market": "上櫃"
    },
    {
      "code": "3105",
      "name": "穩懋",
      "turnoverRate": 6.81,
      "market": "上櫃"
    },
    {
      "code": "6538",
      "name": "倉和",
      "turnoverRate": 6.63,
      "market": "上櫃"
    },
    {
      "code": "6419",
      "name": "京晨科",
      "turnoverRate": 5.65,
      "market": "上櫃"
    },
    {
      "code": "8086",
      "name": "宏捷科",
      "turnoverRate": 5.6,
      "market": "上櫃"
    },
    {
      "code": "3081",
      "name": "聯亞",
      "turnoverRate": 5.53,
      "market": "上櫃"
    },
    {
      "code": "00860B",
      "name": "群益1-5Y投資級債",
      "turnoverRate": 5.51,
      "market": "上櫃"
    },
    {
      "code": "5291",
      "name": "邑昇",
      "turnoverRate": 5.34,
      "market": "上櫃"
    },
    {
      "code": "3234",
      "name": "光環",
      "turnoverRate": 5.08,
      "market": "上櫃"
    },
    {
      "code": "5483",
      "name": "中美晶",
      "turnoverRate": 4.56,
      "market": "上櫃"
    },
    {
      "code": "7714",
      "name": "創泓科技",
      "turnoverRate": 4.43,
      "market": "上櫃"
    },
    {
      "code": "3675",
      "name": "德微",
      "turnoverRate": 4.38,
      "market": "上櫃"
    },
    {
      "code": "5328",
      "name": "華容",
      "turnoverRate": 4.31,
      "market": "上櫃"
    },
    {
      "code": "6217",
      "name": "中探針",
      "turnoverRate": 4.31,
      "market": "上櫃"
    },
    {
      "code": "6187",
      "name": "萬潤",
      "turnoverRate": 4.16,
      "market": "上櫃"
    },
    {
      "code": "6907",
      "name": "雅特力-KY",
      "turnoverRate": 4.0,
      "market": "上櫃"
    },
    {
      "code": "2061",
      "name": "風青",
      "turnoverRate": 3.92,
      "market": "上櫃"
    },
    {
      "code": "7402",
      "name": "邑錡",
      "turnoverRate": 3.64,
      "market": "上櫃"
    },
    {
      "code": "6530",
      "name": "創威",
      "turnoverRate": 3.52,
      "market": "上櫃"
    },
    {
      "code": "00990B",
      "name": "國泰收益非投等債",
      "turnoverRate": 3.48,
      "market": "上櫃"
    },
    {
      "code": "3363",
      "name": "上詮",
      "turnoverRate": 3.48,
      "market": "上櫃"
    },
    {
      "code": "5475",
      "name": "德宏",
      "turnoverRate": 3.36,
      "market": "上櫃"
    },
    {
      "code": "00781B",
      "name": "國泰A級科技債",
      "turnoverRate": 3.25,
      "market": "上櫃"
    },
    {
      "code": "3362",
      "name": "先進光",
      "turnoverRate": 3.19,
      "market": "上櫃"
    },
    {
      "code": "00988B",
      "name": "玉山嚴選非投債",
      "turnoverRate": 3.15,
      "market": "上櫃"
    },
    {
      "code": "6147",
      "name": "頎邦",
      "turnoverRate": 3.15,
      "market": "上櫃"
    },
    {
      "code": "6259",
      "name": "百徽",
      "turnoverRate": 3.03,
      "market": "上櫃"
    },
    {
      "code": "00799B",
      "name": "國泰A級醫療債",
      "turnoverRate": 2.98,
      "market": "上櫃"
    },
    {
      "code": "4416",
      "name": "三圓",
      "turnoverRate": 2.96,
      "market": "上櫃"
    },
    {
      "code": "3624",
      "name": "光頡",
      "turnoverRate": 2.89,
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

// 4. 全池個股歷史數據庫

const STOCK_DATABASE = [
  {
    "code": "2330",
    "name": "台積電",
    "price": 2380.0,
    "open": 2415.0,
    "high": 2415.0,
    "low": 2375.0,
    "prevClose": 2400.0,
    "volume": 18776,
    "ma5": 2405.0,
    "ma10": 2394.0,
    "ma20": 2362.25,
    "vMa5": 17831,
    "vMa10": 20076,
    "limitUpPrice": 2618.0,
    "categories": [
      "0050",
      "半導體-晶圓",
      "ValueTop"
    ],
    "sparkline": [
      2405.0,
      2365.0,
      2370.0,
      2380.0,
      2395.0,
      2415.0,
      2435.0,
      2395.0,
      2400.0,
      2380.0
    ],
    "ma60": 2377.67,
    "high20d": 2445.0,
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
        "open": 2405.0,
        "high": 2415.0,
        "low": 2390.0,
        "close": 2415.0,
        "volume": 17709,
        "ma5": 2385.0,
        "ma10": 2365.0
      },
      {
        "open": 2440.0,
        "high": 2445.0,
        "low": 2425.0,
        "close": 2435.0,
        "volume": 21188,
        "ma5": 2399.0,
        "ma10": 2388.0
      },
      {
        "open": 2435.0,
        "high": 2440.0,
        "low": 2395.0,
        "close": 2395.0,
        "volume": 18951,
        "ma5": 2404.0,
        "ma10": 2385.0
      },
      {
        "open": 2410.0,
        "high": 2420.0,
        "low": 2390.0,
        "close": 2400.0,
        "volume": 12532,
        "ma5": 2408.0,
        "ma10": 2388.0
      },
      {
        "open": 2415.0,
        "high": 2415.0,
        "low": 2375.0,
        "close": 2380.0,
        "volume": 18776,
        "ma5": 2405.0,
        "ma10": 2394.0
      }
    ],
    "symbol": "2330.TW",
    "maxVol10d": 31905,
    "hasVolumeBurst": false,
    "kd": {
      "k": 55.3,
      "d": 68.8,
      "prevK": 69.1,
      "prevD": 75.5,
      "h8": 2445.0,
      "l8": 2355.0
    }
  },
  {
    "code": "2454",
    "name": "聯發科",
    "price": 3885.0,
    "open": 4020.0,
    "high": 4050.0,
    "low": 3885.0,
    "prevClose": 4050.0,
    "volume": 9224,
    "ma5": 4077.0,
    "ma10": 4018.5,
    "ma20": 3818.5,
    "vMa5": 8964,
    "vMa10": 8147,
    "limitUpPrice": 4356.0,
    "categories": [
      "0050",
      "半導體-IC設計",
      "ValueTop"
    ],
    "sparkline": [
      4000.0,
      3920.0,
      3900.0,
      3960.0,
      4020.0,
      4015.0,
      4225.0,
      4210.0,
      4050.0,
      3885.0
    ],
    "ma60": 4050.08,
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
        "open": 3950.0,
        "high": 4030.0,
        "low": 3950.0,
        "close": 4015.0,
        "volume": 5519,
        "ma5": 3963.0,
        "ma10": 3838.0
      },
      {
        "open": 4130.0,
        "high": 4295.0,
        "low": 4115.0,
        "close": 4225.0,
        "volume": 10529,
        "ma5": 4024.0,
        "ma10": 3937.0
      },
      {
        "open": 4400.0,
        "high": 4400.0,
        "low": 4205.0,
        "close": 4210.0,
        "volume": 9711,
        "ma5": 4086.0,
        "ma10": 4002.5
      },
      {
        "open": 4205.0,
        "high": 4225.0,
        "low": 4025.0,
        "close": 4050.0,
        "volume": 9835,
        "ma5": 4104.0,
        "ma10": 4016.5
      },
      {
        "open": 4020.0,
        "high": 4050.0,
        "low": 3885.0,
        "close": 3885.0,
        "volume": 9224,
        "ma5": 4077.0,
        "ma10": 4018.5
      }
    ],
    "symbol": "2454.TW",
    "maxVol10d": 11201,
    "hasVolumeBurst": true,
    "kd": {
      "k": 48.2,
      "d": 65.9,
      "prevK": 65.9,
      "prevD": 74.8,
      "h8": 4400.0,
      "l8": 3810.0
    }
  },
  {
    "code": "2317",
    "name": "鴻海",
    "price": 249.0,
    "open": 255.0,
    "high": 256.5,
    "low": 247.5,
    "prevClose": 255.0,
    "volume": 49866,
    "ma5": 259.1,
    "ma10": 260.6,
    "ma20": 253.93,
    "vMa5": 56840,
    "vMa10": 53035,
    "limitUpPrice": 290.95,
    "categories": [
      "0050",
      "ValueTop",
      "Top100"
    ],
    "sparkline": [
      258.5,
      264.5,
      260.0,
      264.5,
      263.0,
      270.0,
      262.0,
      259.5,
      255.0,
      249.0
    ],
    "ma60": 256.93,
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
        "open": 264.5,
        "high": 270.5,
        "low": 264.0,
        "close": 270.0,
        "volume": 58028,
        "ma5": 264.4,
        "ma10": 256.35
      },
      {
        "open": 274.5,
        "high": 274.5,
        "low": 261.0,
        "close": 262.0,
        "volume": 92698,
        "ma5": 263.9,
        "ma10": 259.6
      },
      {
        "open": 262.0,
        "high": 264.5,
        "low": 257.5,
        "close": 259.5,
        "volume": 49248,
        "ma5": 263.8,
        "ma10": 260.5
      },
      {
        "open": 259.5,
        "high": 261.0,
        "low": 255.0,
        "close": 255.0,
        "volume": 34360,
        "ma5": 261.9,
        "ma10": 260.7
      },
      {
        "open": 255.0,
        "high": 256.5,
        "low": 247.5,
        "close": 249.0,
        "volume": 49866,
        "ma5": 259.1,
        "ma10": 260.6
      }
    ],
    "symbol": "2317.TW",
    "maxVol10d": 92698,
    "hasVolumeBurst": true,
    "kd": {
      "k": 32.9,
      "d": 56.2,
      "prevK": 46.5,
      "prevD": 67.9,
      "h8": 274.5,
      "l8": 255.0
    }
  },
  {
    "code": "2308",
    "name": "台達電",
    "price": 1820.0,
    "open": 1900.0,
    "high": 1905.0,
    "low": 1820.0,
    "prevClose": 1885.0,
    "volume": 9475,
    "ma5": 1853.0,
    "ma10": 1786.5,
    "ma20": 1730.5,
    "vMa5": 11349,
    "vMa10": 11699,
    "limitUpPrice": 1996.5,
    "categories": [
      "0050",
      "ValueTop"
    ],
    "sparkline": [
      1650.0,
      1680.0,
      1650.0,
      1815.0,
      1805.0,
      1790.0,
      1885.0,
      1885.0,
      1885.0,
      1820.0
    ],
    "ma60": 1975.42,
    "high20d": 2005.0,
    "high5d": 2005.0,
    "high10d": 2005.0,
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
        "open": 1810.0,
        "high": 1830.0,
        "low": 1785.0,
        "close": 1790.0,
        "volume": 8531,
        "ma5": 1748.0,
        "ma10": 1676.0
      },
      {
        "open": 1845.0,
        "high": 1915.0,
        "low": 1845.0,
        "close": 1885.0,
        "volume": 13176,
        "ma5": 1789.0,
        "ma10": 1711.5
      },
      {
        "open": 1945.0,
        "high": 1975.0,
        "low": 1865.0,
        "close": 1885.0,
        "volume": 13046,
        "ma5": 1836.0,
        "ma10": 1736.0
      },
      {
        "open": 1950.0,
        "high": 2005.0,
        "low": 1885.0,
        "close": 1885.0,
        "volume": 12518,
        "ma5": 1850.0,
        "ma10": 1766.5
      },
      {
        "open": 1900.0,
        "high": 1905.0,
        "low": 1820.0,
        "close": 1820.0,
        "volume": 9475,
        "ma5": 1853.0,
        "ma10": 1786.5
      }
    ],
    "symbol": "2308.TW",
    "maxVol10d": 17946,
    "hasVolumeBurst": false,
    "kd": {
      "k": 68.5,
      "d": 73.2,
      "prevK": 77.1,
      "prevD": 75.6,
      "h8": 2005.0,
      "l8": 1625.0
    }
  },
  {
    "code": "2303",
    "name": "聯電",
    "price": 119.0,
    "open": 122.5,
    "high": 124.0,
    "low": 117.5,
    "prevClose": 121.5,
    "volume": 91291,
    "ma5": 121.8,
    "ma10": 121.45,
    "ma20": 121.47,
    "vMa5": 112390,
    "vMa10": 140113,
    "limitUpPrice": 135.3,
    "categories": [
      "0050",
      "Top100",
      "半導體-晶圓",
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy"
    ],
    "sparkline": [
      122.0,
      121.5,
      116.0,
      123.0,
      123.0,
      123.0,
      124.5,
      121.0,
      121.5,
      119.0
    ],
    "ma60": 139.62,
    "high20d": 145.0,
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
        "open": 123.0,
        "high": 125.5,
        "low": 121.0,
        "close": 123.0,
        "volume": 91987,
        "ma5": 121.3,
        "ma10": 119.6
      },
      {
        "open": 125.5,
        "high": 130.5,
        "low": 123.0,
        "close": 124.5,
        "volume": 199266,
        "ma5": 121.9,
        "ma10": 121.05
      },
      {
        "open": 125.0,
        "high": 125.5,
        "low": 120.0,
        "close": 121.0,
        "volume": 112997,
        "ma5": 122.9,
        "ma10": 121.05
      },
      {
        "open": 121.5,
        "high": 124.0,
        "low": 121.5,
        "close": 121.5,
        "volume": 66406,
        "ma5": 122.6,
        "ma10": 121.4
      },
      {
        "open": 122.5,
        "high": 124.0,
        "low": 117.5,
        "close": 119.0,
        "volume": 91291,
        "ma5": 121.8,
        "ma10": 121.45
      }
    ],
    "symbol": "2303.TW",
    "maxVol10d": 273650,
    "hasVolumeBurst": false,
    "kd": {
      "k": 45.2,
      "d": 52.5,
      "prevK": 52.7,
      "prevD": 56.1,
      "h8": 130.5,
      "l8": 114.0
    }
  },
  {
    "code": "3711",
    "name": "日月光投控",
    "price": 599.0,
    "open": 630.0,
    "high": 634.0,
    "low": 596.0,
    "prevClose": 615.0,
    "volume": 19836,
    "ma5": 615.4,
    "ma10": 610.9,
    "ma20": 597.15,
    "vMa5": 18423,
    "vMa10": 19975,
    "limitUpPrice": 693.0,
    "categories": [
      "0050",
      "半導體-封測",
      "ValueTop"
    ],
    "sparkline": [
      593.0,
      595.0,
      585.0,
      630.0,
      629.0,
      621.0,
      626.0,
      616.0,
      615.0,
      599.0
    ],
    "ma60": 618.25,
    "high20d": 673.0,
    "high5d": 643.0,
    "high10d": 643.0,
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
        "open": 633.0,
        "high": 634.0,
        "low": 619.0,
        "close": 621.0,
        "volume": 16847,
        "ma5": 612.0,
        "ma10": 590.8
      },
      {
        "open": 627.0,
        "high": 638.0,
        "low": 623.0,
        "close": 626.0,
        "volume": 18814,
        "ma5": 618.2,
        "ma10": 602.9
      },
      {
        "open": 635.0,
        "high": 635.0,
        "low": 608.0,
        "close": 616.0,
        "volume": 15905,
        "ma5": 624.4,
        "ma10": 609.0
      },
      {
        "open": 626.0,
        "high": 643.0,
        "low": 615.0,
        "close": 615.0,
        "volume": 20713,
        "ma5": 621.4,
        "ma10": 609.5
      },
      {
        "open": 630.0,
        "high": 634.0,
        "low": 596.0,
        "close": 599.0,
        "volume": 19836,
        "ma5": 615.4,
        "ma10": 610.9
      }
    ],
    "symbol": "3711.TW",
    "maxVol10d": 32119,
    "hasVolumeBurst": false,
    "kd": {
      "k": 58.2,
      "d": 68.1,
      "prevK": 69.2,
      "prevD": 73.0,
      "h8": 643.0,
      "l8": 574.0
    }
  },
  {
    "code": "2449",
    "name": "京元電子",
    "price": 236.0,
    "open": 250.5,
    "high": 251.0,
    "low": 233.0,
    "prevClose": 248.5,
    "volume": 20326,
    "ma5": 248.8,
    "ma10": 247.65,
    "ma20": 245.26,
    "vMa5": 19446,
    "vMa10": 19688,
    "limitUpPrice": 273.35,
    "categories": [
      "0050",
      "半導體-封測",
      "ValueTop"
    ],
    "sparkline": [
      247.0,
      249.0,
      242.0,
      248.5,
      246.0,
      259.0,
      253.5,
      247.0,
      248.5,
      236.0
    ],
    "ma60": 278.4,
    "high20d": 287.62,
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
        "open": 246.0,
        "high": 260.0,
        "low": 243.5,
        "close": 259.0,
        "volume": 21198,
        "ma5": 248.9,
        "ma10": 239.75
      },
      {
        "open": 261.0,
        "high": 262.0,
        "low": 253.0,
        "close": 253.5,
        "volume": 26393,
        "ma5": 249.8,
        "ma10": 244.75
      },
      {
        "open": 256.0,
        "high": 256.5,
        "low": 245.0,
        "close": 247.0,
        "volume": 16148,
        "ma5": 250.8,
        "ma10": 247.1
      },
      {
        "open": 250.5,
        "high": 258.0,
        "low": 248.5,
        "close": 248.5,
        "volume": 13164,
        "ma5": 250.8,
        "ma10": 248.6
      },
      {
        "open": 250.5,
        "high": 251.0,
        "low": 233.0,
        "close": 236.0,
        "volume": 20326,
        "ma5": 248.8,
        "ma10": 247.65
      }
    ],
    "symbol": "2449.TW",
    "maxVol10d": 34302,
    "hasVolumeBurst": true,
    "kd": {
      "k": 45.7,
      "d": 60.6,
      "prevK": 63.4,
      "prevD": 68.1,
      "h8": 262.0,
      "l8": 237.0
    }
  },
  {
    "code": "3037",
    "name": "欣興",
    "price": 1145.0,
    "open": 1130.0,
    "high": 1200.0,
    "low": 1115.0,
    "prevClose": 1120.0,
    "volume": 38481,
    "ma5": 1057.0,
    "ma10": 1016.6,
    "ma20": 920.0,
    "vMa5": 22165,
    "vMa10": 20944,
    "limitUpPrice": 1091.2,
    "categories": [
      "0050",
      "半導體-載板",
      "Top100",
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy"
    ],
    "sparkline": [
      969.0,
      973.0,
      955.0,
      992.0,
      992.0,
      1000.0,
      1000.0,
      1020.0,
      1120.0,
      1145.0
    ],
    "ma60": 937.73,
    "high20d": 1200.0,
    "high5d": 1200.0,
    "high10d": 1200.0,
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
        "open": 999.0,
        "high": 1010.0,
        "low": 990.0,
        "close": 1000.0,
        "volume": 7208,
        "ma5": 982.4,
        "ma10": 917.3
      },
      {
        "open": 1045.0,
        "high": 1045.0,
        "low": 976.0,
        "close": 1000.0,
        "volume": 8303,
        "ma5": 987.8,
        "ma10": 945.7
      },
      {
        "open": 1020.0,
        "high": 1025.0,
        "low": 995.0,
        "close": 1020.0,
        "volume": 8181,
        "ma5": 1000.8,
        "ma10": 969.0
      },
      {
        "open": 1045.0,
        "high": 1120.0,
        "low": 1035.0,
        "close": 1120.0,
        "volume": 48653,
        "ma5": 1026.4,
        "ma10": 994.5
      },
      {
        "open": 1130.0,
        "high": 1200.0,
        "low": 1115.0,
        "close": 1145.0,
        "volume": 38481,
        "ma5": 1057.0,
        "ma10": 1016.6
      }
    ],
    "symbol": "3037.TW",
    "maxVol10d": 48653,
    "hasVolumeBurst": true,
    "kd": {
      "k": 87.1,
      "d": 86.8,
      "prevK": 90.7,
      "prevD": 86.6,
      "h8": 1120.0,
      "l8": 928.0
    }
  },
  {
    "code": "8046",
    "name": "南電",
    "price": 1245.0,
    "open": 1320.0,
    "high": 1355.0,
    "low": 1245.0,
    "prevClose": 1295.0,
    "volume": 10318,
    "ma5": 1265.0,
    "ma10": 1185.0,
    "ma20": 1109.0,
    "vMa5": 16595,
    "vMa10": 10134,
    "limitUpPrice": 1243.0,
    "categories": [
      "0050",
      "半導體-載板",
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      1060.0,
      1105.0,
      1080.0,
      1130.0,
      1150.0,
      1265.0,
      1215.0,
      1305.0,
      1295.0,
      1245.0
    ],
    "ma60": 1047.35,
    "high20d": 1380.0,
    "high5d": 1380.0,
    "high10d": 1380.0,
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
        "open": 1170.0,
        "high": 1265.0,
        "low": 1130.0,
        "close": 1265.0,
        "volume": 12443,
        "ma5": 1146.0,
        "ma10": 1054.5
      },
      {
        "open": 1295.0,
        "high": 1300.0,
        "low": 1215.0,
        "close": 1215.0,
        "volume": 18617,
        "ma5": 1168.0,
        "ma10": 1092.3
      },
      {
        "open": 1235.0,
        "high": 1335.0,
        "low": 1205.0,
        "close": 1305.0,
        "volume": 22661,
        "ma5": 1213.0,
        "ma10": 1130.8
      },
      {
        "open": 1310.0,
        "high": 1380.0,
        "low": 1295.0,
        "close": 1295.0,
        "volume": 18935,
        "ma5": 1246.0,
        "ma10": 1165.0
      },
      {
        "open": 1320.0,
        "high": 1355.0,
        "low": 1245.0,
        "close": 1245.0,
        "volume": 10318,
        "ma5": 1265.0,
        "ma10": 1185.0
      }
    ],
    "symbol": "8046.TW",
    "maxVol10d": 22661,
    "hasVolumeBurst": true,
    "kd": {
      "k": 76.1,
      "d": 78.6,
      "prevK": 82.7,
      "prevD": 79.9,
      "h8": 1380.0,
      "l8": 1015.0
    }
  },
  {
    "code": "3189",
    "name": "景碩",
    "price": 865.0,
    "open": 917.0,
    "high": 937.0,
    "low": 861.0,
    "prevClose": 905.0,
    "volume": 26919,
    "ma5": 868.2,
    "ma10": 852.3,
    "ma20": 770.9,
    "vMa5": 15180,
    "vMa10": 15230,
    "limitUpPrice": 919.6,
    "categories": [
      "半導體-載板",
      "ValueTop",
      "TurnoverRate",
      "SitcaBuy3D",
      "SitcaBuy"
    ],
    "sparkline": [
      828.0,
      853.0,
      823.0,
      836.0,
      842.0,
      858.0,
      851.0,
      862.0,
      905.0,
      865.0
    ],
    "ma60": 753.23,
    "high20d": 937.0,
    "high5d": 937.0,
    "high10d": 937.0,
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
        "open": 847.0,
        "high": 864.0,
        "low": 827.0,
        "close": 858.0,
        "volume": 3299,
        "ma5": 842.4,
        "ma10": 771.8
      },
      {
        "open": 866.0,
        "high": 872.0,
        "low": 813.0,
        "close": 851.0,
        "volume": 4295,
        "ma5": 842.0,
        "ma10": 799.1
      },
      {
        "open": 841.0,
        "high": 862.0,
        "low": 840.0,
        "close": 862.0,
        "volume": 4040,
        "ma5": 849.8,
        "ma10": 821.8
      },
      {
        "open": 896.0,
        "high": 932.0,
        "low": 881.0,
        "close": 905.0,
        "volume": 37348,
        "ma5": 863.6,
        "ma10": 842.5
      },
      {
        "open": 917.0,
        "high": 937.0,
        "low": 861.0,
        "close": 865.0,
        "volume": 26919,
        "ma5": 868.2,
        "ma10": 852.3
      }
    ],
    "symbol": "3189.TW",
    "maxVol10d": 37348,
    "hasVolumeBurst": true,
    "kd": {
      "k": 73.7,
      "d": 82.6,
      "prevK": 87.1,
      "prevD": 87.0,
      "h8": 932.0,
      "l8": 801.0
    }
  },
  {
    "code": "6239",
    "name": "力成",
    "price": 265.5,
    "open": 279.0,
    "high": 279.5,
    "low": 265.0,
    "prevClose": 278.0,
    "volume": 11309,
    "ma5": 277.2,
    "ma10": 274.55,
    "ma20": 266.07,
    "vMa5": 13031,
    "vMa10": 18179,
    "limitUpPrice": 317.35,
    "categories": [
      "半導體-封測"
    ],
    "sparkline": [
      256.5,
      269.5,
      262.5,
      288.5,
      282.5,
      281.5,
      283.0,
      278.0,
      278.0,
      265.5
    ],
    "ma60": 308.78,
    "high20d": 315.0,
    "high5d": 294.0,
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
        "open": 284.0,
        "high": 287.0,
        "low": 280.5,
        "close": 281.5,
        "volume": 13658,
        "ma5": 276.9,
        "ma10": 258.6
      },
      {
        "open": 287.0,
        "high": 294.0,
        "low": 282.0,
        "close": 283.0,
        "volume": 17996,
        "ma5": 279.6,
        "ma10": 265.45
      },
      {
        "open": 287.0,
        "high": 288.5,
        "low": 276.0,
        "close": 278.0,
        "volume": 14537,
        "ma5": 282.7,
        "ma10": 269.7
      },
      {
        "open": 278.0,
        "high": 282.0,
        "low": 275.5,
        "close": 278.0,
        "volume": 7656,
        "ma5": 280.6,
        "ma10": 273.65
      },
      {
        "open": 279.0,
        "high": 279.5,
        "low": 265.0,
        "close": 265.5,
        "volume": 11309,
        "ma5": 277.2,
        "ma10": 274.55
      }
    ],
    "symbol": "6239.TW",
    "maxVol10d": 39058,
    "hasVolumeBurst": true,
    "kd": {
      "k": 58.7,
      "d": 67.8,
      "prevK": 70.9,
      "prevD": 72.3,
      "h8": 296.0,
      "l8": 249.5
    }
  },
  {
    "code": "6770",
    "name": "力積電",
    "price": 69.7,
    "open": 75.0,
    "high": 75.7,
    "low": 69.5,
    "prevClose": 74.6,
    "volume": 225794,
    "ma5": 74.26,
    "ma10": 70.41,
    "ma20": 64.33,
    "vMa5": 380684,
    "vMa10": 314408,
    "limitUpPrice": 74.36,
    "categories": [
      "Top100",
      "半導體-晶圓",
      "MajorBuy",
      "TurnoverRate",
      "ValueTop",
      "MajorBuy3D"
    ],
    "sparkline": [
      66.1,
      66.6,
      65.5,
      67.6,
      67.0,
      73.7,
      74.9,
      78.4,
      74.6,
      69.7
    ],
    "ma60": 71.18,
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
        "open": 68.0,
        "high": 73.7,
        "low": 67.9,
        "close": 73.7,
        "volume": 425852,
        "ma5": 68.08,
        "ma10": 62.53
      },
      {
        "open": 75.0,
        "high": 77.4,
        "low": 72.7,
        "close": 74.9,
        "volume": 469207,
        "ma5": 69.74,
        "ma10": 65.07
      },
      {
        "open": 76.6,
        "high": 81.8,
        "low": 76.3,
        "close": 78.4,
        "volume": 524437,
        "ma5": 72.32,
        "ma10": 67.46
      },
      {
        "open": 79.9,
        "high": 79.9,
        "low": 74.2,
        "close": 74.6,
        "volume": 258128,
        "ma5": 73.72,
        "ma10": 69.45
      },
      {
        "open": 75.0,
        "high": 75.7,
        "low": 69.5,
        "close": 69.7,
        "volume": 225794,
        "ma5": 74.26,
        "ma10": 70.41
      }
    ],
    "symbol": "6770.TW",
    "maxVol10d": 524437,
    "hasVolumeBurst": true,
    "kd": {
      "k": 62.6,
      "d": 75.4,
      "prevK": 80.0,
      "prevD": 81.8,
      "h8": 81.8,
      "l8": 65.0
    }
  },
  {
    "code": "3707",
    "name": "漢磊",
    "price": 62.9,
    "open": 65.5,
    "high": 66.4,
    "low": 62.9,
    "prevClose": 65.2,
    "volume": 4480,
    "ma5": 64.56,
    "ma10": 63.16,
    "ma20": 60.52,
    "vMa5": 5977,
    "vMa10": 4811,
    "limitUpPrice": 68.53,
    "categories": [
      "半導體-功率",
      "Top100",
      "MajorBuy",
      "MajorBuy3D"
    ],
    "sparkline": [
      62.4,
      62.1,
      60.1,
      62.3,
      61.9,
      63.5,
      65.6,
      65.6,
      65.2,
      62.9
    ],
    "ma60": 74.33,
    "high20d": 69.3,
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
        "open": 62.0,
        "high": 65.0,
        "low": 62.0,
        "close": 63.5,
        "volume": 5098,
        "ma5": 61.98,
        "ma10": 58.96
      },
      {
        "open": 64.1,
        "high": 68.9,
        "low": 64.1,
        "close": 65.6,
        "volume": 8394,
        "ma5": 62.68,
        "ma10": 60.65
      },
      {
        "open": 66.4,
        "high": 66.6,
        "low": 63.2,
        "close": 65.6,
        "volume": 5992,
        "ma5": 63.78,
        "ma10": 61.96
      },
      {
        "open": 64.5,
        "high": 66.5,
        "low": 62.5,
        "close": 65.2,
        "volume": 5923,
        "ma5": 64.36,
        "ma10": 62.85
      },
      {
        "open": 65.5,
        "high": 66.4,
        "low": 62.9,
        "close": 62.9,
        "volume": 4480,
        "ma5": 64.56,
        "ma10": 63.16
      }
    ],
    "symbol": "3707.TWO",
    "maxVol10d": 8394,
    "hasVolumeBurst": true,
    "kd": {
      "k": 60.5,
      "d": 70.0,
      "prevK": 73.0,
      "prevD": 74.7,
      "h8": 68.9,
      "l8": 59.6
    }
  },
  {
    "code": "6488",
    "name": "環球晶",
    "price": 1060.0,
    "open": 1020.0,
    "high": 1120.0,
    "low": 1010.0,
    "prevClose": 1020.0,
    "volume": 13515,
    "ma5": 1009.6,
    "ma10": 936.7,
    "ma20": 954.8,
    "vMa5": 11830,
    "vMa10": 11958,
    "limitUpPrice": 939.4,
    "categories": [
      "Top100",
      "半導體-功率",
      "MajorBuy",
      "ValueTop",
      "SitcaBuy",
      "SitcaBuy3D",
      "MajorBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      872.0,
      872.0,
      872.0,
      854.0,
      849.0,
      933.0,
      1025.0,
      1010.0,
      1020.0,
      1060.0
    ],
    "ma60": 1035.62,
    "high20d": 1305.0,
    "high5d": 1120.0,
    "high10d": 1120.0,
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
        "open": 844.0,
        "high": 933.0,
        "low": 844.0,
        "close": 933.0,
        "volume": 10567,
        "ma5": 876.0,
        "ma10": 870.3
      },
      {
        "open": 970.0,
        "high": 1025.0,
        "low": 950.0,
        "close": 1025.0,
        "volume": 9649,
        "ma5": 906.6,
        "ma10": 895.0
      },
      {
        "open": 1025.0,
        "high": 1045.0,
        "low": 993.0,
        "close": 1010.0,
        "volume": 14913,
        "ma5": 934.2,
        "ma10": 910.5
      },
      {
        "open": 1000.0,
        "high": 1095.0,
        "low": 990.0,
        "close": 1020.0,
        "volume": 10508,
        "ma5": 967.4,
        "ma10": 925.9
      },
      {
        "open": 1020.0,
        "high": 1120.0,
        "low": 1010.0,
        "close": 1060.0,
        "volume": 13515,
        "ma5": 1009.6,
        "ma10": 936.7
      }
    ],
    "symbol": "6488.TWO",
    "maxVol10d": 25167,
    "hasVolumeBurst": true,
    "kd": {
      "k": 73.8,
      "d": 63.5,
      "prevK": 70.8,
      "prevD": 58.4,
      "h8": 1095.0,
      "l8": 823.0
    }
  },
  {
    "code": "5483",
    "name": "中美晶",
    "price": 185.0,
    "open": 185.5,
    "high": 195.0,
    "low": 184.0,
    "prevClose": 186.5,
    "volume": 29179,
    "ma5": 186.4,
    "ma10": 179.4,
    "ma20": 183.12,
    "vMa5": 36892,
    "vMa10": 30450,
    "limitUpPrice": 186.45,
    "categories": [
      "Top100",
      "半導體-功率",
      "SitcaBuy",
      "ValueTop",
      "TurnoverRate",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      178.0,
      177.5,
      168.5,
      169.5,
      168.5,
      185.0,
      187.5,
      188.0,
      186.5,
      185.0
    ],
    "ma60": 185.77,
    "high20d": 252.0,
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
        "open": 169.5,
        "high": 185.0,
        "low": 169.5,
        "close": 185.0,
        "volume": 32341,
        "ma5": 173.8,
        "ma10": 171.0
      },
      {
        "open": 188.0,
        "high": 203.0,
        "low": 186.0,
        "close": 187.5,
        "volume": 75101,
        "ma5": 175.8,
        "ma10": 174.5
      },
      {
        "open": 189.5,
        "high": 191.5,
        "low": 183.5,
        "close": 188.0,
        "volume": 25570,
        "ma5": 179.7,
        "ma10": 177.6
      },
      {
        "open": 185.0,
        "high": 193.0,
        "low": 183.5,
        "close": 186.5,
        "volume": 22268,
        "ma5": 183.1,
        "ma10": 179.0
      },
      {
        "open": 185.5,
        "high": 195.0,
        "low": 184.0,
        "close": 185.0,
        "volume": 29179,
        "ma5": 186.4,
        "ma10": 179.4
      }
    ],
    "symbol": "5483.TWO",
    "maxVol10d": 75101,
    "hasVolumeBurst": true,
    "kd": {
      "k": 55.9,
      "d": 53.4,
      "prevK": 57.6,
      "prevD": 52.2,
      "h8": 203.0,
      "l8": 165.0
    }
  },
  {
    "code": "2327",
    "name": "國巨*",
    "price": 576.0,
    "open": 614.0,
    "high": 615.0,
    "low": 574.0,
    "prevClose": 608.0,
    "volume": 37489,
    "ma5": 614.0,
    "ma10": 594.8,
    "ma20": 588.02,
    "vMa5": 48425,
    "vMa10": 51185,
    "limitUpPrice": 630.3,
    "categories": [
      "0050",
      "Top100",
      "半導體-被動元件",
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy5D"
    ],
    "sparkline": [
      578.0,
      570.0,
      540.0,
      573.0,
      617.0,
      602.0,
      662.0,
      622.0,
      608.0,
      576.0
    ],
    "ma60": 784.67,
    "high20d": 732.0,
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
        "open": 607.0,
        "high": 625.0,
        "low": 600.0,
        "close": 602.0,
        "volume": 54120,
        "ma5": 580.4,
        "ma10": 555.65
      },
      {
        "open": 631.0,
        "high": 662.0,
        "low": 626.0,
        "close": 662.0,
        "volume": 44736,
        "ma5": 598.8,
        "ma10": 576.2
      },
      {
        "open": 668.0,
        "high": 668.0,
        "low": 617.0,
        "close": 622.0,
        "volume": 70638,
        "ma5": 615.2,
        "ma10": 588.2
      },
      {
        "open": 620.0,
        "high": 622.0,
        "low": 596.0,
        "close": 608.0,
        "volume": 35142,
        "ma5": 622.2,
        "ma10": 593.8
      },
      {
        "open": 614.0,
        "high": 615.0,
        "low": 574.0,
        "close": 576.0,
        "volume": 37489,
        "ma5": 614.0,
        "ma10": 594.8
      }
    ],
    "symbol": "2327.TW",
    "maxVol10d": 79552,
    "hasVolumeBurst": false,
    "kd": {
      "k": 57.5,
      "d": 65.5,
      "prevK": 69.8,
      "prevD": 69.5,
      "h8": 668.0,
      "l8": 531.0
    }
  },
  {
    "code": "2492",
    "name": "華新科",
    "price": 282.0,
    "open": 292.0,
    "high": 301.0,
    "low": 281.0,
    "prevClose": 291.5,
    "volume": 22138,
    "ma5": 296.1,
    "ma10": 282.15,
    "ma20": 267.43,
    "vMa5": 37826,
    "vMa10": 34928,
    "limitUpPrice": 300.85,
    "categories": [
      "半導體-被動元件",
      "SitcaBuy",
      "TurnoverRate",
      "ValueTop",
      "SitcaBuy5D"
    ],
    "sparkline": [
      259.5,
      256.5,
      251.0,
      273.5,
      300.5,
      288.0,
      316.5,
      302.5,
      291.5,
      282.0
    ],
    "ma60": 393.76,
    "high20d": 322.0,
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
        "open": 298.0,
        "high": 312.0,
        "low": 288.0,
        "close": 288.0,
        "volume": 65843,
        "ma5": 273.9,
        "ma10": 254.45
      },
      {
        "open": 299.0,
        "high": 316.5,
        "low": 298.0,
        "close": 316.5,
        "volume": 26308,
        "ma5": 285.9,
        "ma10": 266.25
      },
      {
        "open": 321.0,
        "high": 322.0,
        "low": 301.0,
        "close": 302.5,
        "volume": 48510,
        "ma5": 296.2,
        "ma10": 274.7
      },
      {
        "open": 298.0,
        "high": 299.5,
        "low": 288.0,
        "close": 291.5,
        "volume": 26334,
        "ma5": 299.8,
        "ma10": 279.9
      },
      {
        "open": 292.0,
        "high": 301.0,
        "low": 281.0,
        "close": 282.0,
        "volume": 22138,
        "ma5": 296.1,
        "ma10": 282.15
      }
    ],
    "symbol": "2492.TW",
    "maxVol10d": 65843,
    "hasVolumeBurst": true,
    "kd": {
      "k": 68.4,
      "d": 73.0,
      "prevK": 76.1,
      "prevD": 75.3,
      "h8": 322.0,
      "l8": 236.5
    }
  },
  {
    "code": "3026",
    "name": "禾伸堂",
    "price": 668.0,
    "open": 673.0,
    "high": 685.0,
    "low": 656.0,
    "prevClose": 689.0,
    "volume": 1318,
    "ma5": 676.0,
    "ma10": 628.9,
    "ma20": 585.52,
    "vMa5": 10600,
    "vMa10": 8142,
    "limitUpPrice": 646.8,
    "categories": [
      "半導體-被動元件",
      "SitcaBuy",
      "SitcaBuy5D"
    ],
    "sparkline": [
      547.0,
      593.0,
      535.0,
      588.0,
      646.0,
      685.0,
      691.0,
      647.0,
      689.0,
      668.0
    ],
    "ma60": 711.09,
    "high20d": 752.0,
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
        "open": 646.0,
        "high": 710.0,
        "low": 631.0,
        "close": 685.0,
        "volume": 23731,
        "ma5": 609.4,
        "ma10": 542.9
      },
      {
        "open": 706.0,
        "high": 752.0,
        "low": 690.0,
        "close": 691.0,
        "volume": 24454,
        "ma5": 629.0,
        "ma10": 569.25
      },
      {
        "open": 695.0,
        "high": 695.0,
        "low": 640.0,
        "close": 647.0,
        "volume": 2127,
        "ma5": 651.4,
        "ma10": 588.95
      },
      {
        "open": 647.0,
        "high": 692.0,
        "low": 605.0,
        "close": 689.0,
        "volume": 1369,
        "ma5": 671.6,
        "ma10": 611.9
      },
      {
        "open": 673.0,
        "high": 685.0,
        "low": 656.0,
        "close": 668.0,
        "volume": 1318,
        "ma5": 676.0,
        "ma10": 628.9
      }
    ],
    "symbol": "3026.TW",
    "maxVol10d": 24454,
    "hasVolumeBurst": true,
    "kd": {
      "k": 70.5,
      "d": 71.9,
      "prevK": 74.3,
      "prevD": 72.6,
      "h8": 752.0,
      "l8": 525.0
    }
  },
  {
    "code": "2408",
    "name": "南亞科",
    "price": 515.0,
    "open": 540.0,
    "high": 553.0,
    "low": 511.0,
    "prevClose": 524.0,
    "volume": 85407,
    "ma5": 509.5,
    "ma10": 489.95,
    "ma20": 443.75,
    "vMa5": 93199,
    "vMa10": 99275,
    "limitUpPrice": 552.2,
    "categories": [
      "0050",
      "Top100",
      "半導體-記憶體",
      "SitcaBuy",
      "ValueTop",
      "MajorBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy3D",
      "MajorBuy1D"
    ],
    "sparkline": [
      445.0,
      459.0,
      457.0,
      502.0,
      489.0,
      482.5,
      514.0,
      512.0,
      524.0,
      515.0
    ],
    "ma60": 418.68,
    "high20d": 553.0,
    "high5d": 553.0,
    "high10d": 553.0,
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
        "open": 497.0,
        "high": 511.0,
        "low": 480.5,
        "close": 482.5,
        "volume": 91906,
        "ma5": 477.9,
        "ma10": 435.55
      },
      {
        "open": 497.0,
        "high": 530.0,
        "low": 490.0,
        "close": 514.0,
        "volume": 125125,
        "ma5": 488.9,
        "ma10": 454.15
      },
      {
        "open": 532.0,
        "high": 542.0,
        "low": 501.0,
        "close": 512.0,
        "volume": 102563,
        "ma5": 499.9,
        "ma10": 469.3
      },
      {
        "open": 520.0,
        "high": 535.0,
        "low": 513.0,
        "close": 524.0,
        "volume": 60993,
        "ma5": 504.3,
        "ma10": 482.05
      },
      {
        "open": 540.0,
        "high": 553.0,
        "low": 511.0,
        "close": 515.0,
        "volume": 85407,
        "ma5": 509.5,
        "ma10": 489.95
      }
    ],
    "symbol": "2408.TW",
    "maxVol10d": 142126,
    "hasVolumeBurst": true,
    "kd": {
      "k": 78.4,
      "d": 81.4,
      "prevK": 83.9,
      "prevD": 82.9,
      "h8": 542.0,
      "l8": 436.0
    }
  },
  {
    "code": "2344",
    "name": "華邦電",
    "price": 176.5,
    "open": 186.0,
    "high": 192.0,
    "low": 176.0,
    "prevClose": 181.5,
    "volume": 182808,
    "ma5": 179.1,
    "ma10": 175.65,
    "ma20": 161.28,
    "vMa5": 195249,
    "vMa10": 190669,
    "limitUpPrice": 197.45,
    "categories": [
      "Top100",
      "半導體-記憶體",
      "0050",
      "MajorBuy",
      "ValueTop",
      "MajorBuy3D",
      "SitcaBuy3D",
      "SitcaBuy"
    ],
    "sparkline": [
      169.0,
      171.0,
      163.5,
      179.5,
      178.0,
      177.0,
      177.0,
      183.5,
      181.5,
      176.5
    ],
    "ma60": 172.39,
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
        "open": 186.5,
        "high": 193.0,
        "low": 174.5,
        "close": 177.0,
        "volume": 205043,
        "ma5": 173.8,
        "ma10": 158.65
      },
      {
        "open": 183.0,
        "high": 185.0,
        "low": 177.0,
        "close": 177.0,
        "volume": 225612,
        "ma5": 175.0,
        "ma10": 164.5
      },
      {
        "open": 183.0,
        "high": 191.0,
        "low": 180.5,
        "close": 183.5,
        "volume": 235496,
        "ma5": 179.0,
        "ma10": 169.85
      },
      {
        "open": 185.5,
        "high": 190.0,
        "low": 181.5,
        "close": 181.5,
        "volume": 127289,
        "ma5": 179.4,
        "ma10": 173.7
      },
      {
        "open": 186.0,
        "high": 192.0,
        "low": 176.0,
        "close": 176.5,
        "volume": 182808,
        "ma5": 179.1,
        "ma10": 175.65
      }
    ],
    "symbol": "2344.TW",
    "maxVol10d": 235496,
    "hasVolumeBurst": true,
    "kd": {
      "k": 66.4,
      "d": 73.7,
      "prevK": 74.9,
      "prevD": 77.3,
      "h8": 193.0,
      "l8": 160.5
    }
  },
  {
    "code": "3260",
    "name": "威剛",
    "price": 387.0,
    "open": 404.0,
    "high": 406.0,
    "low": 386.0,
    "prevClose": 400.0,
    "volume": 9568,
    "ma5": 401.5,
    "ma10": 405.7,
    "ma20": 396.5,
    "vMa5": 8857,
    "vMa10": 11765,
    "limitUpPrice": 452.1,
    "categories": [
      "Top100",
      "半導體-記憶體",
      "MajorBuy",
      "ValueTop",
      "MajorBuy3D"
    ],
    "sparkline": [
      396.0,
      421.0,
      416.0,
      411.0,
      405.5,
      409.5,
      409.0,
      402.0,
      400.0,
      387.0
    ],
    "ma60": 405.57,
    "high20d": 437.0,
    "high5d": 422.0,
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
        "open": 408.5,
        "high": 422.0,
        "low": 408.5,
        "close": 409.5,
        "volume": 11927,
        "ma5": 412.6,
        "ma10": 402.6
      },
      {
        "open": 416.0,
        "high": 419.0,
        "low": 409.0,
        "close": 409.0,
        "volume": 7818,
        "ma5": 410.2,
        "ma10": 405.65
      },
      {
        "open": 415.5,
        "high": 419.0,
        "low": 400.0,
        "close": 402.0,
        "volume": 10186,
        "ma5": 407.4,
        "ma10": 406.0
      },
      {
        "open": 404.0,
        "high": 404.0,
        "low": 397.0,
        "close": 400.0,
        "volume": 4788,
        "ma5": 405.2,
        "ma10": 406.85
      },
      {
        "open": 404.0,
        "high": 406.0,
        "low": 386.0,
        "close": 387.0,
        "volume": 9568,
        "ma5": 401.5,
        "ma10": 405.7
      }
    ],
    "symbol": "3260.TWO",
    "maxVol10d": 21069,
    "hasVolumeBurst": false,
    "kd": {
      "k": 24.8,
      "d": 42.1,
      "prevK": 36.1,
      "prevD": 50.8,
      "h8": 437.0,
      "l8": 394.0
    }
  },
  {
    "code": "8299",
    "name": "群聯",
    "price": 2000.0,
    "open": 2105.0,
    "high": 2120.0,
    "low": 2000.0,
    "prevClose": 2085.0,
    "volume": 4964,
    "ma5": 2131.0,
    "ma10": 2067.5,
    "ma20": 1901.75,
    "vMa5": 7370,
    "vMa10": 5946,
    "limitUpPrice": 2244.0,
    "categories": [
      "Top100",
      "半導體-記憶體",
      "ValueTop"
    ],
    "sparkline": [
      1845.0,
      2025.0,
      2020.0,
      2040.0,
      2090.0,
      2210.0,
      2280.0,
      2080.0,
      2085.0,
      2000.0
    ],
    "ma60": 2178.33,
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
        "open": 2110.0,
        "high": 2245.0,
        "low": 2110.0,
        "close": 2210.0,
        "volume": 5667,
        "ma5": 2077.0,
        "ma10": 1894.5
      },
      {
        "open": 2260.0,
        "high": 2280.0,
        "low": 2175.0,
        "close": 2280.0,
        "volume": 6913,
        "ma5": 2128.0,
        "ma10": 1973.0
      },
      {
        "open": 2325.0,
        "high": 2325.0,
        "low": 2065.0,
        "close": 2080.0,
        "volume": 15030,
        "ma5": 2140.0,
        "ma10": 2017.0
      },
      {
        "open": 2110.0,
        "high": 2125.0,
        "low": 2085.0,
        "close": 2085.0,
        "volume": 4279,
        "ma5": 2149.0,
        "ma10": 2049.5
      },
      {
        "open": 2105.0,
        "high": 2120.0,
        "low": 2000.0,
        "close": 2000.0,
        "volume": 4964,
        "ma5": 2131.0,
        "ma10": 2067.5
      }
    ],
    "symbol": "8299.TWO",
    "maxVol10d": 15030,
    "hasVolumeBurst": true,
    "kd": {
      "k": 60.3,
      "d": 73.2,
      "prevK": 72.3,
      "prevD": 79.7,
      "h8": 2325.0,
      "l8": 1815.0
    }
  },
  {
    "code": "3034",
    "name": "聯詠",
    "price": 505.0,
    "open": 502.0,
    "high": 508.0,
    "low": 499.5,
    "prevClose": 509.0,
    "volume": 2567,
    "ma5": 520.2,
    "ma10": 531.8,
    "ma20": 519.88,
    "vMa5": 3165,
    "vMa10": 3496,
    "limitUpPrice": 598.4,
    "categories": [
      "半導體-IC設計"
    ],
    "sparkline": [
      550.0,
      543.0,
      542.0,
      544.0,
      538.0,
      537.0,
      538.0,
      512.0,
      509.0,
      505.0
    ],
    "ma60": 510.35,
    "high20d": 572.0,
    "high5d": 545.0,
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
        "open": 538.0,
        "high": 544.0,
        "low": 532.0,
        "close": 537.0,
        "volume": 2987,
        "ma5": 540.8,
        "ma10": 530.7
      },
      {
        "open": 542.0,
        "high": 545.0,
        "low": 531.0,
        "close": 538.0,
        "volume": 3595,
        "ma5": 539.8,
        "ma10": 535.4
      },
      {
        "open": 538.0,
        "high": 538.0,
        "low": 507.0,
        "close": 512.0,
        "volume": 3535,
        "ma5": 533.8,
        "ma10": 534.7
      },
      {
        "open": 510.0,
        "high": 513.0,
        "low": 498.5,
        "close": 509.0,
        "volume": 3138,
        "ma5": 526.8,
        "ma10": 533.7
      },
      {
        "open": 502.0,
        "high": 508.0,
        "low": 499.5,
        "close": 505.0,
        "volume": 2567,
        "ma5": 520.2,
        "ma10": 531.8
      }
    ],
    "symbol": "3034.TW",
    "maxVol10d": 7520,
    "hasVolumeBurst": false,
    "kd": {
      "k": 24.4,
      "d": 39.3,
      "prevK": 31.0,
      "prevD": 46.8,
      "h8": 557.0,
      "l8": 498.5
    }
  },
  {
    "code": "2379",
    "name": "瑞昱",
    "price": 707.0,
    "open": 710.0,
    "high": 723.0,
    "low": 690.0,
    "prevClose": 717.0,
    "volume": 2425,
    "ma5": 733.8,
    "ma10": 744.4,
    "ma20": 735.7,
    "vMa5": 2172,
    "vMa10": 2459,
    "limitUpPrice": 833.8,
    "categories": [
      "半導體-IC設計"
    ],
    "sparkline": [
      751.0,
      744.0,
      750.0,
      758.0,
      772.0,
      766.0,
      758.0,
      721.0,
      717.0,
      707.0
    ],
    "ma60": 727.13,
    "high20d": 783.0,
    "high5d": 776.0,
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
        "open": 772.0,
        "high": 776.0,
        "low": 760.0,
        "close": 766.0,
        "volume": 1438,
        "ma5": 758.0,
        "ma10": 734.8
      },
      {
        "open": 775.0,
        "high": 775.0,
        "low": 750.0,
        "close": 758.0,
        "volume": 1972,
        "ma5": 760.8,
        "ma10": 740.9
      },
      {
        "open": 752.0,
        "high": 759.0,
        "low": 721.0,
        "close": 721.0,
        "volume": 2479,
        "ma5": 755.0,
        "ma10": 744.7
      },
      {
        "open": 712.0,
        "high": 725.0,
        "low": 706.0,
        "close": 717.0,
        "volume": 2548,
        "ma5": 746.8,
        "ma10": 746.0
      },
      {
        "open": 710.0,
        "high": 723.0,
        "low": 690.0,
        "close": 707.0,
        "volume": 2425,
        "ma5": 733.8,
        "ma10": 744.4
      }
    ],
    "symbol": "2379.TW",
    "maxVol10d": 3684,
    "hasVolumeBurst": false,
    "kd": {
      "k": 40.5,
      "d": 57.4,
      "prevK": 51.3,
      "prevD": 65.8,
      "h8": 780.0,
      "l8": 706.0
    }
  },
  {
    "code": "2382",
    "name": "廣達",
    "price": 327.0,
    "open": 330.0,
    "high": 330.5,
    "low": 323.5,
    "prevClose": 333.5,
    "volume": 14108,
    "ma5": 327.7,
    "ma10": 317.15,
    "ma20": 313.85,
    "vMa5": 25445,
    "vMa10": 21410,
    "limitUpPrice": 344.85,
    "categories": [
      "0050",
      "SitcaBuy",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy"
    ],
    "sparkline": [
      304.0,
      302.0,
      298.0,
      313.5,
      315.5,
      325.5,
      325.0,
      327.5,
      333.5,
      327.0
    ],
    "ma60": 348.86,
    "high20d": 339.0,
    "high5d": 339.0,
    "high10d": 339.0,
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
        "open": 317.0,
        "high": 330.0,
        "low": 316.5,
        "close": 325.5,
        "volume": 22795,
        "ma5": 310.9,
        "ma10": 302.6
      },
      {
        "open": 328.0,
        "high": 328.5,
        "low": 320.5,
        "close": 325.0,
        "volume": 19248,
        "ma5": 315.5,
        "ma10": 307.2
      },
      {
        "open": 325.0,
        "high": 336.5,
        "low": 318.0,
        "close": 327.5,
        "volume": 41703,
        "ma5": 321.4,
        "ma10": 310.8
      },
      {
        "open": 332.0,
        "high": 339.0,
        "low": 330.5,
        "close": 333.5,
        "volume": 29370,
        "ma5": 325.4,
        "ma10": 314.5
      },
      {
        "open": 330.0,
        "high": 330.5,
        "low": 323.5,
        "close": 327.0,
        "volume": 14108,
        "ma5": 327.7,
        "ma10": 317.15
      }
    ],
    "symbol": "2382.TW",
    "maxVol10d": 41703,
    "hasVolumeBurst": true,
    "kd": {
      "k": 79.2,
      "d": 75.8,
      "prevK": 82.5,
      "prevD": 74.1,
      "h8": 339.0,
      "l8": 295.0
    }
  },
  {
    "code": "3231",
    "name": "緯創",
    "price": 181.0,
    "open": 186.5,
    "high": 187.0,
    "low": 179.0,
    "prevClose": 187.0,
    "volume": 39100,
    "ma5": 190.4,
    "ma10": 190.2,
    "ma20": 182.6,
    "vMa5": 59580,
    "vMa10": 75254,
    "limitUpPrice": 212.3,
    "categories": [
      "0050",
      "Top100",
      "ValueTop",
      "MajorBuy",
      "MajorBuy3D"
    ],
    "sparkline": [
      193.0,
      189.5,
      183.5,
      193.0,
      191.0,
      193.5,
      197.0,
      193.5,
      187.0,
      181.0
    ],
    "ma60": 165.53,
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
        "open": 189.5,
        "high": 195.0,
        "low": 189.0,
        "close": 193.5,
        "volume": 42545,
        "ma5": 190.1,
        "ma10": 186.05
      },
      {
        "open": 196.0,
        "high": 199.5,
        "low": 193.5,
        "close": 197.0,
        "volume": 71358,
        "ma5": 191.6,
        "ma10": 189.75
      },
      {
        "open": 198.0,
        "high": 206.0,
        "low": 193.0,
        "close": 193.5,
        "volume": 93839,
        "ma5": 193.6,
        "ma10": 191.5
      },
      {
        "open": 193.5,
        "high": 193.5,
        "low": 184.5,
        "close": 187.0,
        "volume": 51060,
        "ma5": 192.4,
        "ma10": 191.6
      },
      {
        "open": 186.5,
        "high": 187.0,
        "low": 179.0,
        "close": 181.0,
        "volume": 39100,
        "ma5": 190.4,
        "ma10": 190.2
      }
    ],
    "symbol": "3231.TW",
    "maxVol10d": 204777,
    "hasVolumeBurst": true,
    "kd": {
      "k": 38.6,
      "d": 57.5,
      "prevK": 54.3,
      "prevD": 66.9,
      "h8": 206.0,
      "l8": 180.5
    }
  },
  {
    "code": "2603",
    "name": "長榮",
    "price": 238.0,
    "open": 232.0,
    "high": 242.0,
    "low": 231.0,
    "prevClose": 231.5,
    "volume": 30573,
    "ma5": 223.7,
    "ma10": 216.7,
    "ma20": 210.3,
    "vMa5": 19215,
    "vMa10": 13712,
    "limitUpPrice": 235.4,
    "categories": [
      "0050",
      "SitcaBuy",
      "MajorBuy",
      "ValueTop",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "sparkline": [
      205.0,
      204.0,
      207.5,
      214.0,
      218.0,
      214.5,
      215.5,
      219.0,
      231.5,
      238.0
    ],
    "ma60": 206.53,
    "high20d": 242.0,
    "high5d": 242.0,
    "high10d": 242.0,
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
        "open": 217.0,
        "high": 217.0,
        "low": 213.0,
        "close": 214.5,
        "volume": 9380,
        "ma5": 211.6,
        "ma10": 208.15
      },
      {
        "open": 215.0,
        "high": 217.0,
        "low": 214.0,
        "close": 215.5,
        "volume": 5927,
        "ma5": 213.9,
        "ma10": 209.6
      },
      {
        "open": 215.5,
        "high": 219.0,
        "low": 211.0,
        "close": 219.0,
        "volume": 13115,
        "ma5": 216.2,
        "ma10": 211.1
      },
      {
        "open": 220.0,
        "high": 232.0,
        "low": 219.0,
        "close": 231.5,
        "volume": 37080,
        "ma5": 219.7,
        "ma10": 213.5
      },
      {
        "open": 232.0,
        "high": 242.0,
        "low": 231.0,
        "close": 238.0,
        "volume": 30573,
        "ma5": 223.7,
        "ma10": 216.7
      }
    ],
    "symbol": "2603.TW",
    "maxVol10d": 37080,
    "hasVolumeBurst": true,
    "kd": {
      "k": 89.1,
      "d": 85.0,
      "prevK": 88.6,
      "prevD": 83.0,
      "h8": 232.0,
      "l8": 202.0
    }
  },
  {
    "code": "2615",
    "name": "萬海",
    "price": 105.0,
    "open": 99.9,
    "high": 108.0,
    "low": 98.9,
    "prevClose": 99.6,
    "volume": 70913,
    "ma5": 93.96,
    "ma10": 89.9,
    "ma20": 87.47,
    "vMa5": 33409,
    "vMa10": 21342,
    "limitUpPrice": 96.25,
    "categories": [
      "MajorBuy",
      "Top100",
      "MajorBuy1D",
      "MajorBuy3D",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy"
    ],
    "sparkline": [
      85.4,
      84.3,
      84.9,
      87.5,
      87.1,
      87.1,
      87.5,
      90.6,
      99.6,
      105.0
    ],
    "ma60": 83.31,
    "high20d": 108.0,
    "high5d": 108.0,
    "high10d": 108.0,
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
        "open": 87.7,
        "high": 87.7,
        "low": 86.0,
        "close": 87.1,
        "volume": 7057,
        "ma5": 86.18,
        "ma10": 85.76
      },
      {
        "open": 88.1,
        "high": 88.8,
        "low": 86.5,
        "close": 87.5,
        "volume": 12371,
        "ma5": 86.82,
        "ma10": 86.07
      },
      {
        "open": 88.2,
        "high": 91.4,
        "low": 87.0,
        "close": 90.6,
        "volume": 27553,
        "ma5": 87.96,
        "ma10": 86.66
      },
      {
        "open": 91.3,
        "high": 99.6,
        "low": 90.8,
        "close": 99.6,
        "volume": 49153,
        "ma5": 90.38,
        "ma10": 88.01
      },
      {
        "open": 99.9,
        "high": 108.0,
        "low": 98.9,
        "close": 105.0,
        "volume": 70913,
        "ma5": 93.96,
        "ma10": 89.9
      }
    ],
    "symbol": "2615.TW",
    "maxVol10d": 70913,
    "hasVolumeBurst": true,
    "kd": {
      "k": 84.9,
      "d": 77.4,
      "prevK": 83.6,
      "prevD": 73.6,
      "h8": 99.6,
      "l8": 83.8
    }
  },
  {
    "code": "3481",
    "name": "群創",
    "price": 49.5,
    "open": 50.8,
    "high": 51.2,
    "low": 49.2,
    "prevClose": 51.2,
    "volume": 209021,
    "ma5": 50.12,
    "ma10": 49.83,
    "ma20": 48.34,
    "vMa5": 214760,
    "vMa10": 263668,
    "limitUpPrice": 57.53,
    "categories": [
      "Top100",
      "MajorBuy",
      "ValueTop",
      "SitcaBuy",
      "SitcaBuy3D",
      "MajorBuy1D",
      "MajorBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      47.8,
      50.0,
      47.55,
      52.3,
      50.1,
      50.4,
      49.4,
      50.1,
      51.2,
      49.5
    ],
    "ma60": 54.95,
    "high20d": 54.1,
    "high5d": 52.1,
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
        "open": 51.0,
        "high": 52.1,
        "low": 50.3,
        "close": 50.4,
        "volume": 188241,
        "ma5": 50.07,
        "ma10": 47.86
      },
      {
        "open": 51.5,
        "high": 51.9,
        "low": 49.4,
        "close": 49.4,
        "volume": 194225,
        "ma5": 49.95,
        "ma10": 48.66
      },
      {
        "open": 50.2,
        "high": 51.5,
        "low": 49.7,
        "close": 50.1,
        "volume": 234661,
        "ma5": 50.46,
        "ma10": 49.12
      },
      {
        "open": 50.5,
        "high": 51.3,
        "low": 48.85,
        "close": 51.2,
        "volume": 247653,
        "ma5": 50.24,
        "ma10": 49.66
      },
      {
        "open": 50.8,
        "high": 51.2,
        "low": 49.2,
        "close": 49.5,
        "volume": 209021,
        "ma5": 50.12,
        "ma10": 49.83
      }
    ],
    "symbol": "3481.TW",
    "maxVol10d": 419589,
    "hasVolumeBurst": false,
    "kd": {
      "k": 67.0,
      "d": 70.9,
      "prevK": 75.4,
      "prevD": 72.9,
      "h8": 52.3,
      "l8": 46.7
    }
  },
  {
    "code": "2409",
    "name": "友達",
    "price": 26.35,
    "open": 27.2,
    "high": 27.25,
    "low": 26.25,
    "prevClose": 27.25,
    "volume": 152460,
    "ma5": 26.28,
    "ma10": 25.8,
    "ma20": 25.09,
    "vMa5": 175240,
    "vMa10": 204592,
    "limitUpPrice": 29.7,
    "categories": [
      "Top100",
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy"
    ],
    "sparkline": [
      24.45,
      24.55,
      24.55,
      27.0,
      26.1,
      26.25,
      25.75,
      25.8,
      27.25,
      26.35
    ],
    "ma60": 26.53,
    "high20d": 27.9,
    "high5d": 27.4,
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
        "open": 26.4,
        "high": 26.9,
        "low": 26.15,
        "close": 26.25,
        "volume": 169762,
        "ma5": 25.69,
        "ma10": 24.77
      },
      {
        "open": 26.55,
        "high": 26.9,
        "low": 25.75,
        "close": 25.75,
        "volume": 127979,
        "ma5": 25.93,
        "ma10": 25.12
      },
      {
        "open": 26.05,
        "high": 26.4,
        "low": 25.75,
        "close": 25.8,
        "volume": 132143,
        "ma5": 26.18,
        "ma10": 25.28
      },
      {
        "open": 26.0,
        "high": 27.4,
        "low": 25.8,
        "close": 27.25,
        "volume": 293857,
        "ma5": 26.23,
        "ma10": 25.61
      },
      {
        "open": 27.2,
        "high": 27.25,
        "low": 26.25,
        "close": 26.35,
        "volume": 152460,
        "ma5": 26.28,
        "ma10": 25.8
      }
    ],
    "symbol": "2409.TW",
    "maxVol10d": 458806,
    "hasVolumeBurst": true,
    "kd": {
      "k": 66.3,
      "d": 64.8,
      "prevK": 67.7,
      "prevD": 64.1,
      "h8": 27.9,
      "l8": 23.65
    }
  },
  {
    "code": "2881",
    "name": "富邦金",
    "price": 129.5,
    "open": 125.0,
    "high": 129.5,
    "low": 125.0,
    "prevClose": 125.5,
    "volume": 22365,
    "ma5": 128.0,
    "ma10": 127.9,
    "ma20": 127.62,
    "vMa5": 15420,
    "vMa10": 14413,
    "limitUpPrice": 141.35,
    "categories": [
      "0050"
    ],
    "sparkline": [
      129.5,
      126.0,
      127.0,
      128.5,
      128.0,
      127.0,
      128.5,
      129.5,
      125.5,
      129.5
    ],
    "ma60": 124.95,
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
        "open": 127.5,
        "high": 129.5,
        "low": 126.5,
        "close": 127.0,
        "volume": 9080,
        "ma5": 127.3,
        "ma10": 127.8
      },
      {
        "open": 128.0,
        "high": 129.0,
        "low": 127.0,
        "close": 128.5,
        "volume": 8539,
        "ma5": 127.8,
        "ma10": 128.25
      },
      {
        "open": 128.5,
        "high": 130.0,
        "low": 128.0,
        "close": 129.5,
        "volume": 8826,
        "ma5": 128.3,
        "ma10": 128.2
      },
      {
        "open": 127.0,
        "high": 127.0,
        "low": 123.5,
        "close": 125.5,
        "volume": 28289,
        "ma5": 127.7,
        "ma10": 127.8
      },
      {
        "open": 125.0,
        "high": 129.5,
        "low": 125.0,
        "close": 129.5,
        "volume": 22365,
        "ma5": 128.0,
        "ma10": 127.9
      }
    ],
    "symbol": "2881.TW",
    "maxVol10d": 28289,
    "hasVolumeBurst": true,
    "kd": {
      "k": 59.1,
      "d": 53.4,
      "prevK": 42.5,
      "prevD": 50.6,
      "h8": 130.0,
      "l8": 123.5
    }
  },
  {
    "code": "2882",
    "name": "國泰金",
    "price": 99.2,
    "open": 98.2,
    "high": 99.5,
    "low": 98.0,
    "prevClose": 98.1,
    "volume": 15160,
    "ma5": 99.6,
    "ma10": 99.6,
    "ma20": 98.57,
    "vMa5": 19923,
    "vMa10": 17294,
    "limitUpPrice": 111.1,
    "categories": [
      "0050",
      "SitcaBuy",
      "SitcaBuy5D"
    ],
    "sparkline": [
      100.5,
      97.5,
      99.4,
      101.0,
      99.6,
      99.7,
      99.5,
      101.5,
      98.1,
      99.2
    ],
    "ma60": 98.4,
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
        "low": 98.5,
        "close": 99.7,
        "volume": 17321,
        "ma5": 99.44,
        "ma10": 99.41
      },
      {
        "open": 100.0,
        "high": 100.5,
        "low": 98.9,
        "close": 99.5,
        "volume": 14354,
        "ma5": 99.84,
        "ma10": 99.84
      },
      {
        "open": 100.0,
        "high": 102.5,
        "low": 100.0,
        "close": 101.5,
        "volume": 19066,
        "ma5": 100.26,
        "ma10": 99.84
      },
      {
        "open": 101.0,
        "high": 101.0,
        "low": 97.3,
        "close": 98.1,
        "volume": 33712,
        "ma5": 99.68,
        "ma10": 99.6
      },
      {
        "open": 98.2,
        "high": 99.5,
        "low": 98.0,
        "close": 99.2,
        "volume": 15160,
        "ma5": 99.6,
        "ma10": 99.6
      }
    ],
    "symbol": "2882.TW",
    "maxVol10d": 33712,
    "hasVolumeBurst": true,
    "kd": {
      "k": 44.6,
      "d": 54.3,
      "prevK": 48.7,
      "prevD": 59.2,
      "h8": 102.5,
      "l8": 97.3
    }
  },
  {
    "code": "2891",
    "name": "中信金",
    "price": 66.5,
    "open": 66.2,
    "high": 66.5,
    "low": 65.9,
    "prevClose": 65.6,
    "volume": 26505,
    "ma5": 66.2,
    "ma10": 66.05,
    "ma20": 64.83,
    "vMa5": 28559,
    "vMa10": 26959,
    "limitUpPrice": 73.15,
    "categories": [
      "0050"
    ],
    "sparkline": [
      66.0,
      64.6,
      65.6,
      66.5,
      66.8,
      66.6,
      66.5,
      65.8,
      65.6,
      66.5
    ],
    "ma60": 66.49,
    "high20d": 67.3,
    "high5d": 67.2,
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
        "open": 66.3,
        "high": 67.0,
        "low": 65.5,
        "close": 66.6,
        "volume": 37535,
        "ma5": 66.02,
        "ma10": 65.37
      },
      {
        "open": 66.3,
        "high": 66.5,
        "low": 65.2,
        "close": 66.5,
        "volume": 27427,
        "ma5": 66.4,
        "ma10": 65.71
      },
      {
        "open": 66.9,
        "high": 67.2,
        "low": 65.2,
        "close": 65.8,
        "volume": 25041,
        "ma5": 66.44,
        "ma10": 65.8
      },
      {
        "open": 66.3,
        "high": 66.3,
        "low": 65.2,
        "close": 65.6,
        "volume": 26289,
        "ma5": 66.26,
        "ma10": 65.88
      },
      {
        "open": 66.2,
        "high": 66.5,
        "low": 65.9,
        "close": 66.5,
        "volume": 26505,
        "ma5": 66.2,
        "ma10": 66.05
      }
    ],
    "symbol": "2891.TW",
    "maxVol10d": 37535,
    "hasVolumeBurst": false,
    "kd": {
      "k": 63.3,
      "d": 68.8,
      "prevK": 59.8,
      "prevD": 71.5,
      "h8": 67.3,
      "l8": 64.6
    }
  },
  {
    "code": "2886",
    "name": "兆豐金",
    "price": 46.9,
    "open": 46.85,
    "high": 47.3,
    "low": 46.15,
    "prevClose": 46.6,
    "volume": 41744,
    "ma5": 47.08,
    "ma10": 48.82,
    "ma20": 49.43,
    "vMa5": 49467,
    "vMa10": 38594,
    "limitUpPrice": 56.1,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      51.2,
      50.3,
      50.9,
      51.0,
      49.4,
      48.7,
      45.85,
      47.35,
      46.6,
      46.9
    ],
    "ma60": 46.2,
    "high20d": 53.7,
    "high5d": 49.45,
    "high10d": 51.9,
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
        "open": 49.4,
        "high": 49.45,
        "low": 48.55,
        "close": 48.7,
        "volume": 31262,
        "ma5": 50.06,
        "ma10": 50.84
      },
      {
        "open": 46.9,
        "high": 46.9,
        "low": 44.95,
        "close": 45.85,
        "volume": 71142,
        "ma5": 49.17,
        "ma10": 50.27
      },
      {
        "open": 45.85,
        "high": 47.5,
        "low": 45.7,
        "close": 47.35,
        "volume": 50466,
        "ma5": 48.46,
        "ma10": 49.7
      },
      {
        "open": 47.0,
        "high": 47.05,
        "low": 45.6,
        "close": 46.6,
        "volume": 52720,
        "ma5": 47.58,
        "ma10": 49.2
      },
      {
        "open": 46.85,
        "high": 47.3,
        "low": 46.15,
        "close": 46.9,
        "volume": 41744,
        "ma5": 47.08,
        "ma10": 48.82
      }
    ],
    "symbol": "2886.TW",
    "maxVol10d": 71142,
    "hasVolumeBurst": true,
    "kd": {
      "k": 25.4,
      "d": 27.5,
      "prevK": 24.1,
      "prevD": 28.5,
      "h8": 51.9,
      "l8": 44.95
    }
  },
  {
    "code": "2884",
    "name": "玉山金",
    "price": 38.1,
    "open": 38.0,
    "high": 38.4,
    "low": 37.5,
    "prevClose": 37.75,
    "volume": 46623,
    "ma5": 37.51,
    "ma10": 37.65,
    "ma20": 37.3,
    "vMa5": 45156,
    "vMa10": 36303,
    "limitUpPrice": 41.58,
    "categories": [
      "0050",
      "SitcaBuy",
      "Top100",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      38.1,
      37.95,
      38.15,
      37.8,
      36.9,
      36.75,
      37.3,
      37.65,
      37.75,
      38.1
    ],
    "ma60": 35.14,
    "high20d": 39.1,
    "high5d": 38.4,
    "high10d": 38.4,
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
        "open": 37.2,
        "high": 37.25,
        "low": 36.3,
        "close": 36.75,
        "volume": 27822,
        "ma5": 37.51,
        "ma10": 37.85
      },
      {
        "open": 37.0,
        "high": 37.3,
        "low": 36.35,
        "close": 37.3,
        "volume": 40938,
        "ma5": 37.38,
        "ma10": 37.81
      },
      {
        "open": 37.45,
        "high": 38.2,
        "low": 36.95,
        "close": 37.65,
        "volume": 54693,
        "ma5": 37.28,
        "ma10": 37.71
      },
      {
        "open": 37.3,
        "high": 37.9,
        "low": 36.65,
        "close": 37.75,
        "volume": 55701,
        "ma5": 37.27,
        "ma10": 37.64
      },
      {
        "open": 38.0,
        "high": 38.4,
        "low": 37.5,
        "close": 38.1,
        "volume": 46623,
        "ma5": 37.51,
        "ma10": 37.65
      }
    ],
    "symbol": "2884.TW",
    "maxVol10d": 55701,
    "hasVolumeBurst": false,
    "kd": {
      "k": 64.9,
      "d": 55.9,
      "prevK": 54.5,
      "prevD": 51.4,
      "h8": 38.3,
      "l8": 36.3
    }
  },
  {
    "code": "2892",
    "name": "第一金",
    "price": 33.7,
    "open": 33.4,
    "high": 34.25,
    "low": 33.25,
    "prevClose": 33.4,
    "volume": 40516,
    "ma5": 33.35,
    "ma10": 34.14,
    "ma20": 34.61,
    "vMa5": 39318,
    "vMa10": 46366,
    "limitUpPrice": 38.45,
    "categories": [
      "0050",
      "SitcaBuy",
      "Top100",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      35.9,
      35.5,
      35.55,
      34.95,
      32.7,
      33.15,
      33.15,
      33.35,
      33.4,
      33.7
    ],
    "ma60": 32.6,
    "high20d": 36.9,
    "high5d": 34.25,
    "high10d": 36.3,
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
        "open": 32.7,
        "high": 33.15,
        "low": 32.45,
        "close": 33.15,
        "volume": 42825,
        "ma5": 34.37,
        "ma10": 35.13
      },
      {
        "open": 33.35,
        "high": 33.35,
        "low": 32.65,
        "close": 33.15,
        "volume": 27923,
        "ma5": 33.9,
        "ma10": 34.89
      },
      {
        "open": 33.15,
        "high": 33.7,
        "low": 32.75,
        "close": 33.35,
        "volume": 39692,
        "ma5": 33.46,
        "ma10": 34.55
      },
      {
        "open": 33.1,
        "high": 33.55,
        "low": 32.55,
        "close": 33.4,
        "volume": 45633,
        "ma5": 33.15,
        "ma10": 34.3
      },
      {
        "open": 33.4,
        "high": 34.25,
        "low": 33.25,
        "close": 33.7,
        "volume": 40516,
        "ma5": 33.35,
        "ma10": 34.14
      }
    ],
    "symbol": "2892.TW",
    "maxVol10d": 84500,
    "hasVolumeBurst": true,
    "kd": {
      "k": 27.0,
      "d": 29.3,
      "prevK": 24.3,
      "prevD": 30.4,
      "h8": 36.3,
      "l8": 32.45
    }
  },
  {
    "code": "2885",
    "name": "元大金",
    "price": 64.0,
    "open": 65.2,
    "high": 66.1,
    "low": 63.6,
    "prevClose": 65.7,
    "volume": 46627,
    "ma5": 65.93,
    "ma10": 65.74,
    "ma20": 64.03,
    "vMa5": 25912,
    "vMa10": 22221,
    "limitUpPrice": 75.02,
    "categories": [
      "0050",
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "Top100"
    ],
    "sparkline": [
      66.73,
      64.52,
      65.1,
      65.58,
      65.77,
      65.96,
      67.02,
      67.02,
      65.67,
      64.0
    ],
    "ma60": 62.97,
    "high20d": 68.08,
    "high5d": 67.79,
    "high10d": 67.79,
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
        "open": 66.25,
        "high": 66.73,
        "low": 65.29,
        "close": 65.96,
        "volume": 12600,
        "ma5": 65.38,
        "ma10": 65.15
      },
      {
        "open": 66.54,
        "high": 67.31,
        "low": 65.77,
        "close": 67.02,
        "volume": 19590,
        "ma5": 65.88,
        "ma10": 65.79
      },
      {
        "open": 67.79,
        "high": 67.79,
        "low": 66.44,
        "close": 67.02,
        "volume": 23670,
        "ma5": 66.27,
        "ma10": 65.94
      },
      {
        "open": 67.02,
        "high": 67.21,
        "low": 65.19,
        "close": 65.67,
        "volume": 27073,
        "ma5": 66.29,
        "ma10": 65.97
      },
      {
        "open": 65.2,
        "high": 66.1,
        "low": 63.6,
        "close": 64.0,
        "volume": 46627,
        "ma5": 65.93,
        "ma10": 65.74
      }
    ],
    "symbol": "2885.TW",
    "maxVol10d": 46627,
    "hasVolumeBurst": true,
    "kd": {
      "k": 42.8,
      "d": 59.2,
      "prevK": 59.4,
      "prevD": 67.4,
      "h8": 67.79,
      "l8": 64.52
    }
  },
  {
    "code": "5880",
    "name": "合庫金",
    "price": 24.95,
    "open": 24.65,
    "high": 25.2,
    "low": 24.5,
    "prevClose": 24.9,
    "volume": 26601,
    "ma5": 24.47,
    "ma10": 24.88,
    "ma20": 25.26,
    "vMa5": 22253,
    "vMa10": 25697,
    "limitUpPrice": 28.01,
    "categories": [
      "0050",
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy"
    ],
    "sparkline": [
      25.95,
      25.46,
      25.56,
      25.46,
      24.0,
      24.1,
      24.2,
      24.2,
      24.9,
      24.95
    ],
    "ma60": 24.26,
    "high20d": 26.98,
    "high5d": 25.2,
    "high10d": 26.15,
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
        "open": 24.0,
        "high": 24.1,
        "low": 23.85,
        "close": 24.1,
        "volume": 18286,
        "ma5": 24.92,
        "ma10": 25.6
      },
      {
        "open": 24.15,
        "high": 24.25,
        "low": 23.9,
        "close": 24.2,
        "volume": 18909,
        "ma5": 24.66,
        "ma10": 25.38
      },
      {
        "open": 24.1,
        "high": 24.25,
        "low": 24.0,
        "close": 24.2,
        "volume": 12484,
        "ma5": 24.39,
        "ma10": 25.11
      },
      {
        "open": 24.25,
        "high": 25.0,
        "low": 24.15,
        "close": 24.9,
        "volume": 34984,
        "ma5": 24.28,
        "ma10": 24.97
      },
      {
        "open": 24.65,
        "high": 25.2,
        "low": 24.5,
        "close": 24.95,
        "volume": 26601,
        "ma5": 24.47,
        "ma10": 24.88
      }
    ],
    "symbol": "5880.TW",
    "maxVol10d": 50665,
    "hasVolumeBurst": true,
    "kd": {
      "k": 34.1,
      "d": 28.4,
      "prevK": 26.2,
      "prevD": 25.6,
      "h8": 26.05,
      "l8": 23.85
    }
  },
  {
    "code": "2890",
    "name": "永豐金",
    "price": 39.6,
    "open": 39.55,
    "high": 40.5,
    "low": 39.35,
    "prevClose": 39.6,
    "volume": 30968,
    "ma5": 39.91,
    "ma10": 39.47,
    "ma20": 39.35,
    "vMa5": 30291,
    "vMa10": 23085,
    "limitUpPrice": 42.79,
    "categories": [
      "0050",
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      39.55,
      38.7,
      38.95,
      38.9,
      39.05,
      39.85,
      39.95,
      40.55,
      39.6,
      39.6
    ],
    "ma60": 37.19,
    "high20d": 41.05,
    "high5d": 40.95,
    "high10d": 40.95,
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
        "open": 39.15,
        "high": 39.9,
        "low": 39.0,
        "close": 39.85,
        "volume": 19200,
        "ma5": 39.09,
        "ma10": 39.41
      },
      {
        "open": 40.2,
        "high": 40.2,
        "low": 39.3,
        "close": 39.95,
        "volume": 17941,
        "ma5": 39.34,
        "ma10": 39.52
      },
      {
        "open": 40.1,
        "high": 40.95,
        "low": 39.6,
        "close": 40.55,
        "volume": 35312,
        "ma5": 39.66,
        "ma10": 39.51
      },
      {
        "open": 40.0,
        "high": 40.05,
        "low": 38.75,
        "close": 39.6,
        "volume": 48034,
        "ma5": 39.8,
        "ma10": 39.47
      },
      {
        "open": 39.55,
        "high": 40.5,
        "low": 39.35,
        "close": 39.6,
        "volume": 30968,
        "ma5": 39.91,
        "ma10": 39.47
      }
    ],
    "symbol": "2890.TW",
    "maxVol10d": 48034,
    "hasVolumeBurst": true,
    "kd": {
      "k": 54.1,
      "d": 53.8,
      "prevK": 57.6,
      "prevD": 53.7,
      "h8": 40.95,
      "l8": 38.4
    }
  },
  {
    "code": "2880",
    "name": "華南金",
    "price": 39.7,
    "open": 38.9,
    "high": 40.1,
    "low": 38.7,
    "prevClose": 39.2,
    "volume": 33163,
    "ma5": 39.94,
    "ma10": 41.74,
    "ma20": 41.69,
    "vMa5": 45777,
    "vMa10": 35117,
    "limitUpPrice": 48.4,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      43.37,
      43.61,
      43.96,
      43.56,
      43.22,
      42.77,
      39.1,
      38.95,
      39.2,
      39.7
    ],
    "ma60": 38.12,
    "high20d": 44.7,
    "high5d": 43.51,
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
        "open": 43.47,
        "high": 43.51,
        "low": 42.43,
        "close": 42.77,
        "volume": 30440,
        "ma5": 43.43,
        "ma10": 43.14
      },
      {
        "open": 41.5,
        "high": 41.55,
        "low": 38.3,
        "close": 39.1,
        "volume": 71533,
        "ma5": 42.52,
        "ma10": 42.83
      },
      {
        "open": 39.0,
        "high": 39.0,
        "low": 38.0,
        "close": 38.95,
        "volume": 48021,
        "ma5": 41.52,
        "ma10": 42.4
      },
      {
        "open": 38.6,
        "high": 39.25,
        "low": 38.0,
        "close": 39.2,
        "volume": 45726,
        "ma5": 40.65,
        "ma10": 42.06
      },
      {
        "open": 38.9,
        "high": 40.1,
        "low": 38.7,
        "close": 39.7,
        "volume": 33163,
        "ma5": 39.94,
        "ma10": 41.74
      }
    ],
    "symbol": "2880.TW",
    "maxVol10d": 71533,
    "hasVolumeBurst": true,
    "kd": {
      "k": 28.5,
      "d": 39.4,
      "prevK": 29.4,
      "prevD": 44.9,
      "h8": 44.41,
      "l8": 38.0
    }
  },
  {
    "code": "2883",
    "name": "凱基金",
    "price": 30.95,
    "open": 31.1,
    "high": 31.35,
    "low": 30.85,
    "prevClose": 31.4,
    "volume": 50325,
    "ma5": 31.34,
    "ma10": 31.19,
    "ma20": 30.7,
    "vMa5": 44835,
    "vMa10": 41350,
    "limitUpPrice": 34.16,
    "categories": [
      "0050",
      "SitcaBuy",
      "MajorBuy",
      "Top100",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy3D"
    ],
    "sparkline": [
      31.6,
      30.6,
      30.85,
      31.05,
      31.05,
      31.2,
      31.5,
      31.65,
      31.4,
      30.95
    ],
    "ma60": 29.01,
    "high20d": 31.75,
    "high5d": 31.75,
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
        "high": 31.4,
        "low": 30.55,
        "close": 31.2,
        "volume": 29093,
        "ma5": 30.95,
        "ma10": 30.71
      },
      {
        "open": 31.4,
        "high": 31.5,
        "low": 30.85,
        "close": 31.5,
        "volume": 34211,
        "ma5": 31.13,
        "ma10": 30.96
      },
      {
        "open": 31.25,
        "high": 31.75,
        "low": 30.95,
        "close": 31.65,
        "volume": 58546,
        "ma5": 31.29,
        "ma10": 31.04
      },
      {
        "open": 31.5,
        "high": 31.65,
        "low": 30.9,
        "close": 31.4,
        "volume": 52003,
        "ma5": 31.36,
        "ma10": 31.14
      },
      {
        "open": 31.1,
        "high": 31.35,
        "low": 30.85,
        "close": 30.95,
        "volume": 50325,
        "ma5": 31.34,
        "ma10": 31.19
      }
    ],
    "symbol": "2883.TW",
    "maxVol10d": 65139,
    "hasVolumeBurst": true,
    "kd": {
      "k": 69.3,
      "d": 76.0,
      "prevK": 81.6,
      "prevD": 79.3,
      "h8": 31.75,
      "l8": 30.3
    }
  },
  {
    "code": "2887",
    "name": "台新新光金",
    "price": 36.9,
    "open": 36.95,
    "high": 37.5,
    "low": 36.8,
    "prevClose": 37.15,
    "volume": 62383,
    "ma5": 36.73,
    "ma10": 36.05,
    "ma20": 35.26,
    "vMa5": 66655,
    "vMa10": 53920,
    "limitUpPrice": 39.49,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy",
      "MajorBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy3D"
    ],
    "sparkline": [
      35.7,
      34.5,
      35.15,
      35.9,
      35.55,
      35.65,
      36.2,
      37.75,
      37.15,
      36.9
    ],
    "ma60": 32.51,
    "high20d": 37.8,
    "high5d": 37.8,
    "high10d": 37.8,
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
        "open": 35.65,
        "high": 36.0,
        "low": 35.1,
        "close": 35.65,
        "volume": 35115,
        "ma5": 35.35,
        "ma10": 35.24
      },
      {
        "open": 35.7,
        "high": 36.3,
        "low": 35.25,
        "close": 36.2,
        "volume": 57188,
        "ma5": 35.69,
        "ma10": 35.55
      },
      {
        "open": 36.8,
        "high": 37.8,
        "low": 36.55,
        "close": 37.75,
        "volume": 100227,
        "ma5": 36.21,
        "ma10": 35.73
      },
      {
        "open": 37.7,
        "high": 37.7,
        "low": 36.8,
        "close": 37.15,
        "volume": 78364,
        "ma5": 36.46,
        "ma10": 35.91
      },
      {
        "open": 36.95,
        "high": 37.5,
        "low": 36.8,
        "close": 36.9,
        "volume": 62383,
        "ma5": 36.73,
        "ma10": 36.05
      }
    ],
    "symbol": "2887.TW",
    "maxVol10d": 100227,
    "hasVolumeBurst": true,
    "kd": {
      "k": 81.4,
      "d": 82.4,
      "prevK": 85.8,
      "prevD": 82.9,
      "h8": 37.8,
      "l8": 34.5
    }
  },
  {
    "code": "3008",
    "name": "大立光",
    "categories": [
      "0050",
      "ValueTop"
    ],
    "price": 5290.0,
    "prevClose": 5070.0,
    "open": 5115.0,
    "high": 5330.0,
    "low": 5055.0,
    "volume": 3721,
    "ma5": 4843.0,
    "ma10": 4655.5,
    "ma20": 4326.0,
    "ma60": 4238.5,
    "vMa5": 2436,
    "vMa10": 2348,
    "high20d": 5330.0,
    "sparkline": [
      4575.0,
      4625.0,
      4385.0,
      4400.0,
      4355.0,
      4585.0,
      4660.0,
      4610.0,
      5070.0,
      5290.0
    ],
    "high5d": 5330.0,
    "high10d": 5330.0,
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
        "open": 4390.0,
        "high": 4685.0,
        "low": 4355.0,
        "close": 4585.0,
        "volume": 1945,
        "ma5": 4470.0,
        "ma10": 4299.0
      },
      {
        "open": 4655.0,
        "high": 4825.0,
        "low": 4545.0,
        "close": 4660.0,
        "volume": 1967,
        "ma5": 4477.0,
        "ma10": 4393.5
      },
      {
        "open": 4700.0,
        "high": 4920.0,
        "low": 4590.0,
        "close": 4610.0,
        "volume": 1673,
        "ma5": 4522.0,
        "ma10": 4451.0
      },
      {
        "open": 4670.0,
        "high": 5070.0,
        "low": 4670.0,
        "close": 5070.0,
        "volume": 2872,
        "ma5": 4656.0,
        "ma10": 4562.0
      },
      {
        "open": 5115.0,
        "high": 5330.0,
        "low": 5055.0,
        "close": 5290.0,
        "volume": 3721,
        "ma5": 4843.0,
        "ma10": 4655.5
      }
    ],
    "symbol": "3008.TW",
    "maxVol10d": 4411,
    "hasVolumeBurst": true,
    "kd": {
      "k": 86.3,
      "d": 78.5,
      "prevK": 81.3,
      "prevD": 74.6,
      "h8": 5070.0,
      "l8": 4230.0
    }
  },
  {
    "code": "2357",
    "name": "華碩",
    "categories": [
      "0050",
      "SitcaBuy3D",
      "SitcaBuy"
    ],
    "price": 910.0,
    "prevClose": 938.0,
    "open": 930.0,
    "high": 933.0,
    "low": 891.0,
    "volume": 4638,
    "ma5": 926.6,
    "ma10": 876.3,
    "ma20": 823.4,
    "ma60": 776.43,
    "vMa5": 6343,
    "vMa10": 5069,
    "high20d": 1025.0,
    "sparkline": [
      838.0,
      818.0,
      817.0,
      818.0,
      839.0,
      852.0,
      937.0,
      996.0,
      938.0,
      910.0
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
        "open": 831.0,
        "high": 860.0,
        "low": 831.0,
        "close": 852.0,
        "volume": 2930,
        "ma5": 828.8,
        "ma10": 813.4
      },
      {
        "open": 937.0,
        "high": 937.0,
        "low": 937.0,
        "close": 937.0,
        "volume": 3222,
        "ma5": 852.6,
        "ma10": 833.4
      },
      {
        "open": 968.0,
        "high": 1025.0,
        "low": 966.0,
        "close": 996.0,
        "volume": 15570,
        "ma5": 888.4,
        "ma10": 852.0
      },
      {
        "open": 985.0,
        "high": 986.0,
        "low": 921.0,
        "close": 938.0,
        "volume": 5358,
        "ma5": 912.4,
        "ma10": 865.9
      },
      {
        "open": 930.0,
        "high": 933.0,
        "low": 891.0,
        "close": 910.0,
        "volume": 4638,
        "ma5": 926.6,
        "ma10": 876.3
      }
    ],
    "symbol": "2357.TW",
    "maxVol10d": 15570,
    "hasVolumeBurst": true,
    "kd": {
      "k": 68.5,
      "d": 77.8,
      "prevK": 78.9,
      "prevD": 82.4,
      "h8": 1025.0,
      "l8": 805.0
    }
  },
  {
    "code": "2395",
    "name": "研華",
    "categories": [
      "0050",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "SitcaBuy"
    ],
    "price": 679.0,
    "prevClose": 674.0,
    "open": 674.0,
    "high": 682.0,
    "low": 666.0,
    "volume": 3691,
    "ma5": 684.0,
    "ma10": 663.7,
    "ma20": 617.95,
    "ma60": 541.55,
    "vMa5": 4021,
    "vMa10": 5215,
    "high20d": 709.0,
    "sparkline": [
      633.0,
      622.0,
      634.0,
      667.0,
      661.0,
      686.0,
      698.0,
      683.0,
      674.0,
      679.0
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
        "open": 672.0,
        "high": 699.0,
        "low": 667.0,
        "close": 686.0,
        "volume": 5883,
        "ma5": 654.0,
        "ma10": 616.5
      },
      {
        "open": 695.0,
        "high": 709.0,
        "low": 690.0,
        "close": 698.0,
        "volume": 4048,
        "ma5": 669.2,
        "ma10": 631.6
      },
      {
        "open": 690.0,
        "high": 699.0,
        "low": 676.0,
        "close": 683.0,
        "volume": 3069,
        "ma5": 679.0,
        "ma10": 643.6
      },
      {
        "open": 659.0,
        "high": 686.0,
        "low": 657.0,
        "close": 674.0,
        "volume": 3414,
        "ma5": 680.4,
        "ma10": 653.4
      },
      {
        "open": 674.0,
        "high": 682.0,
        "low": 666.0,
        "close": 679.0,
        "volume": 3691,
        "ma5": 684.0,
        "ma10": 663.7
      }
    ],
    "symbol": "2395.TW",
    "maxVol10d": 10650,
    "hasVolumeBurst": true,
    "kd": {
      "k": 75.9,
      "d": 78.4,
      "prevK": 79.6,
      "prevD": 79.6,
      "h8": 709.0,
      "l8": 614.0
    }
  },
  {
    "code": "2301",
    "name": "光寶科",
    "categories": [
      "0050",
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy5D",
      "Top100",
      "SitcaBuy3D"
    ],
    "price": 273.5,
    "prevClose": 263.5,
    "open": 266.0,
    "high": 279.5,
    "low": 265.0,
    "volume": 40825,
    "ma5": 266.6,
    "ma10": 262.15,
    "ma20": 237.18,
    "ma60": 225.44,
    "vMa5": 31647,
    "vMa10": 39297,
    "high20d": 286.5,
    "sparkline": [
      249.0,
      252.5,
      247.0,
      271.5,
      268.5,
      259.5,
      269.5,
      267.0,
      263.5,
      273.5
    ],
    "high5d": 286.5,
    "high10d": 286.5,
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
        "open": 267.0,
        "high": 267.0,
        "low": 254.0,
        "close": 259.5,
        "volume": 36200,
        "ma5": 259.8,
        "ma10": 242.85
      },
      {
        "open": 268.0,
        "high": 281.0,
        "low": 266.5,
        "close": 269.5,
        "volume": 37396,
        "ma5": 263.2,
        "ma10": 250.8
      },
      {
        "open": 274.5,
        "high": 278.0,
        "low": 261.0,
        "close": 267.0,
        "volume": 21128,
        "ma5": 267.2,
        "ma10": 256.6
      },
      {
        "open": 277.0,
        "high": 286.5,
        "low": 263.5,
        "close": 263.5,
        "volume": 22687,
        "ma5": 265.6,
        "ma10": 260.0
      },
      {
        "open": 266.0,
        "high": 279.5,
        "low": 265.0,
        "close": 273.5,
        "volume": 40825,
        "ma5": 266.6,
        "ma10": 262.15
      }
    ],
    "symbol": "2301.TW",
    "maxVol10d": 89058,
    "hasVolumeBurst": true,
    "kd": {
      "k": 67.8,
      "d": 72.9,
      "prevK": 67.0,
      "prevD": 75.4,
      "h8": 286.5,
      "l8": 244.0
    }
  },
  {
    "code": "6669",
    "name": "緯穎",
    "categories": [
      "0050",
      "ValueTop"
    ],
    "price": 6400.0,
    "prevClose": 6620.0,
    "open": 6595.0,
    "high": 6650.0,
    "low": 6285.0,
    "volume": 1652,
    "ma5": 6310.0,
    "ma10": 6203.0,
    "ma20": 5867.25,
    "ma60": 5308.83,
    "vMa5": 1533,
    "vMa10": 1547,
    "high20d": 6740.0,
    "sparkline": [
      6175.0,
      6265.0,
      6100.0,
      6010.0,
      5930.0,
      6025.0,
      6070.0,
      6435.0,
      6620.0,
      6400.0
    ],
    "high5d": 6740.0,
    "high10d": 6740.0,
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
        "open": 5905.0,
        "high": 6140.0,
        "low": 5900.0,
        "close": 6025.0,
        "volume": 1034,
        "ma5": 6066.0,
        "ma10": 5892.5
      },
      {
        "open": 6095.0,
        "high": 6195.0,
        "low": 6020.0,
        "close": 6070.0,
        "volume": 1262,
        "ma5": 6027.0,
        "ma10": 6009.5
      },
      {
        "open": 6145.0,
        "high": 6650.0,
        "low": 6140.0,
        "close": 6435.0,
        "volume": 2357,
        "ma5": 6094.0,
        "ma10": 6114.0
      },
      {
        "open": 6585.0,
        "high": 6740.0,
        "low": 6420.0,
        "close": 6620.0,
        "volume": 1359,
        "ma5": 6216.0,
        "ma10": 6183.5
      },
      {
        "open": 6595.0,
        "high": 6650.0,
        "low": 6285.0,
        "close": 6400.0,
        "volume": 1652,
        "ma5": 6310.0,
        "ma10": 6203.0
      }
    ],
    "symbol": "6669.TW",
    "maxVol10d": 2357,
    "hasVolumeBurst": true,
    "kd": {
      "k": 71.5,
      "d": 73.3,
      "prevK": 76.5,
      "prevD": 74.1,
      "h8": 6740.0,
      "l8": 5855.0
    }
  },
  {
    "code": "3661",
    "name": "世芯-KY",
    "categories": [
      "0050",
      "ValueTop",
      "TurnoverRate"
    ],
    "price": 3715.0,
    "prevClose": 4060.0,
    "open": 4105.0,
    "high": 4135.0,
    "low": 3680.0,
    "volume": 3841,
    "ma5": 4046.0,
    "ma10": 3897.0,
    "ma20": 3567.0,
    "ma60": 3991.0,
    "vMa5": 3223,
    "vMa10": 2913,
    "high20d": 4530.0,
    "sparkline": [
      3610.0,
      3660.0,
      3715.0,
      3800.0,
      3955.0,
      4055.0,
      4190.0,
      4210.0,
      4060.0,
      3715.0
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
        "open": 3960.0,
        "high": 4100.0,
        "low": 3950.0,
        "close": 4055.0,
        "volume": 1915,
        "ma5": 3837.0,
        "ma10": 3528.0
      },
      {
        "open": 4100.0,
        "high": 4225.0,
        "low": 4090.0,
        "close": 4190.0,
        "volume": 2690,
        "ma5": 3943.0,
        "ma10": 3668.5
      },
      {
        "open": 4225.0,
        "high": 4530.0,
        "low": 4180.0,
        "close": 4210.0,
        "volume": 3281,
        "ma5": 4042.0,
        "ma10": 3783.5
      },
      {
        "open": 4350.0,
        "high": 4490.0,
        "low": 4060.0,
        "close": 4060.0,
        "volume": 4386,
        "ma5": 4094.0,
        "ma10": 3864.5
      },
      {
        "open": 4105.0,
        "high": 4135.0,
        "low": 3680.0,
        "close": 3715.0,
        "volume": 3841,
        "ma5": 4046.0,
        "ma10": 3897.0
      }
    ],
    "symbol": "3661.TW",
    "maxVol10d": 4386,
    "hasVolumeBurst": true,
    "kd": {
      "k": 54.8,
      "d": 71.8,
      "prevK": 75.1,
      "prevD": 80.3,
      "h8": 4530.0,
      "l8": 3580.0
    }
  },
  {
    "code": "3443",
    "name": "創意",
    "categories": [
      "0050",
      "ValueTop"
    ],
    "price": 5535.0,
    "prevClose": 5850.0,
    "open": 5845.0,
    "high": 5885.0,
    "low": 5520.0,
    "volume": 2447,
    "ma5": 5504.0,
    "ma10": 5042.0,
    "ma20": 4492.0,
    "ma60": 4526.67,
    "vMa5": 2643,
    "vMa10": 2396,
    "high20d": 5990.0,
    "sparkline": [
      4390.0,
      4480.0,
      4545.0,
      4530.0,
      4955.0,
      5130.0,
      5540.0,
      5465.0,
      5850.0,
      5535.0
    ],
    "high5d": 5990.0,
    "high10d": 5990.0,
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
        "open": 5025.0,
        "high": 5180.0,
        "low": 4945.0,
        "close": 5130.0,
        "volume": 2532,
        "ma5": 4728.0,
        "ma10": 4362.5
      },
      {
        "open": 5260.0,
        "high": 5580.0,
        "low": 5230.0,
        "close": 5540.0,
        "volume": 2708,
        "ma5": 4940.0,
        "ma10": 4570.5
      },
      {
        "open": 5640.0,
        "high": 5830.0,
        "low": 5420.0,
        "close": 5465.0,
        "volume": 2522,
        "ma5": 5124.0,
        "ma10": 4736.5
      },
      {
        "open": 5475.0,
        "high": 5990.0,
        "low": 5360.0,
        "close": 5850.0,
        "volume": 3006,
        "ma5": 5388.0,
        "ma10": 4903.0
      },
      {
        "open": 5845.0,
        "high": 5885.0,
        "low": 5520.0,
        "close": 5535.0,
        "volume": 2447,
        "ma5": 5504.0,
        "ma10": 5042.0
      }
    ],
    "symbol": "3443.TW",
    "maxVol10d": 3175,
    "hasVolumeBurst": false,
    "kd": {
      "k": 84.3,
      "d": 86.5,
      "prevK": 89.5,
      "prevD": 87.6,
      "h8": 5990.0,
      "l8": 4250.0
    }
  },
  {
    "code": "1216",
    "name": "統一",
    "categories": [
      "0050"
    ],
    "price": 76.2,
    "prevClose": 75.2,
    "open": 75.0,
    "high": 76.2,
    "low": 74.7,
    "volume": 9089,
    "ma5": 75.96,
    "ma10": 75.31,
    "ma20": 75.67,
    "ma60": 75.63,
    "vMa5": 9809,
    "vMa10": 13909,
    "high20d": 79.3,
    "sparkline": [
      73.2,
      73.0,
      75.7,
      75.5,
      75.9,
      76.3,
      76.3,
      75.8,
      75.2,
      76.2
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
        "open": 75.8,
        "high": 76.3,
        "low": 75.4,
        "close": 76.3,
        "volume": 9901,
        "ma5": 75.28,
        "ma10": 74.59
      },
      {
        "open": 76.5,
        "high": 76.5,
        "low": 75.1,
        "close": 76.3,
        "volume": 13795,
        "ma5": 75.94,
        "ma10": 74.66
      },
      {
        "open": 76.2,
        "high": 76.3,
        "low": 75.4,
        "close": 75.8,
        "volume": 6866,
        "ma5": 75.96,
        "ma10": 74.86
      },
      {
        "open": 75.4,
        "high": 75.7,
        "low": 74.6,
        "close": 75.2,
        "volume": 9392,
        "ma5": 75.9,
        "ma10": 75.08
      },
      {
        "open": 75.0,
        "high": 76.2,
        "low": 74.7,
        "close": 76.2,
        "volume": 9089,
        "ma5": 75.96,
        "ma10": 75.31
      }
    ],
    "symbol": "1216.TW",
    "maxVol10d": 27617,
    "hasVolumeBurst": false,
    "kd": {
      "k": 80.4,
      "d": 71.2,
      "prevK": 74.3,
      "prevD": 66.7,
      "h8": 76.5,
      "l8": 72.5
    }
  },
  {
    "code": "1303",
    "name": "南亞",
    "categories": [
      "0050",
      "Top100",
      "MajorBuy",
      "ValueTop",
      "SitcaBuy",
      "SitcaBuy5D",
      "MajorBuy3D",
      "SitcaBuy3D"
    ],
    "price": 200.0,
    "prevClose": 200.5,
    "open": 199.5,
    "high": 204.5,
    "low": 198.0,
    "volume": 69143,
    "ma5": 197.2,
    "ma10": 190.45,
    "ma20": 179.97,
    "ma60": 158.53,
    "vMa5": 107005,
    "vMa10": 101082,
    "high20d": 217.0,
    "sparkline": [
      177.0,
      178.5,
      188.0,
      185.0,
      190.0,
      189.0,
      189.0,
      207.5,
      200.5,
      200.0
    ],
    "high5d": 215.0,
    "high10d": 215.0,
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
        "open": 195.0,
        "high": 197.5,
        "low": 187.0,
        "close": 189.0,
        "volume": 77715,
        "ma5": 186.1,
        "ma10": 174.75
      },
      {
        "open": 191.0,
        "high": 195.0,
        "low": 184.0,
        "close": 189.0,
        "volume": 95239,
        "ma5": 188.2,
        "ma10": 179.15
      },
      {
        "open": 194.0,
        "high": 207.5,
        "low": 189.5,
        "close": 207.5,
        "volume": 154379,
        "ma5": 192.1,
        "ma10": 183.95
      },
      {
        "open": 213.5,
        "high": 215.0,
        "low": 200.0,
        "close": 200.5,
        "volume": 138547,
        "ma5": 195.2,
        "ma10": 187.5
      },
      {
        "open": 199.5,
        "high": 204.5,
        "low": 198.0,
        "close": 200.0,
        "volume": 69143,
        "ma5": 197.2,
        "ma10": 190.45
      }
    ],
    "symbol": "1303.TW",
    "maxVol10d": 154379,
    "hasVolumeBurst": false,
    "kd": {
      "k": 75.7,
      "d": 77.5,
      "prevK": 80.0,
      "prevD": 78.4,
      "h8": 215.0,
      "l8": 169.5
    }
  },
  {
    "code": "6505",
    "name": "台塑化",
    "categories": [
      "0050",
      "Top100"
    ],
    "price": 72.0,
    "prevClose": 71.1,
    "open": 71.3,
    "high": 76.2,
    "low": 71.3,
    "volume": 38934,
    "ma5": 70.8,
    "ma10": 69.98,
    "ma20": 73.47,
    "ma60": 63.19,
    "vMa5": 19648,
    "vMa10": 22412,
    "high20d": 97.9,
    "sparkline": [
      67.6,
      67.1,
      71.0,
      69.0,
      71.1,
      70.2,
      69.8,
      70.9,
      71.1,
      72.0
    ],
    "high5d": 76.2,
    "high10d": 76.2,
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
        "open": 71.8,
        "high": 72.9,
        "low": 70.2,
        "close": 70.2,
        "volume": 15017,
        "ma5": 69.68,
        "ma10": 69.43
      },
      {
        "open": 70.6,
        "high": 71.1,
        "low": 69.6,
        "close": 69.8,
        "volume": 11689,
        "ma5": 70.22,
        "ma10": 69.25
      },
      {
        "open": 70.0,
        "high": 71.6,
        "low": 69.8,
        "close": 70.9,
        "volume": 12853,
        "ma5": 70.2,
        "ma10": 69.26
      },
      {
        "open": 71.1,
        "high": 74.2,
        "low": 70.1,
        "close": 71.1,
        "volume": 19747,
        "ma5": 70.62,
        "ma10": 69.6
      },
      {
        "open": 71.3,
        "high": 76.2,
        "low": 71.3,
        "close": 72.0,
        "volume": 38934,
        "ma5": 70.8,
        "ma10": 69.98
      }
    ],
    "symbol": "6505.TW",
    "maxVol10d": 41386,
    "hasVolumeBurst": true,
    "kd": {
      "k": 56.4,
      "d": 48.6,
      "prevK": 55.6,
      "prevD": 44.8,
      "h8": 74.2,
      "l8": 66.2
    }
  },
  {
    "code": "2618",
    "name": "長榮航",
    "categories": [
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 41.9,
    "prevClose": 41.8,
    "open": 41.45,
    "high": 42.3,
    "low": 41.4,
    "volume": 28997,
    "ma5": 41.35,
    "ma10": 42.26,
    "ma20": 42.25,
    "ma60": 40.98,
    "vMa5": 36845,
    "vMa10": 36283,
    "high20d": 44.6,
    "sparkline": [
      43.8,
      43.25,
      44.4,
      42.65,
      41.75,
      42.15,
      41.0,
      39.9,
      41.8,
      41.9
    ],
    "high5d": 42.6,
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
        "open": 41.9,
        "high": 42.6,
        "low": 41.45,
        "close": 42.15,
        "volume": 22091,
        "ma5": 42.84,
        "ma10": 43.06
      },
      {
        "open": 41.9,
        "high": 41.95,
        "low": 40.8,
        "close": 41.0,
        "volume": 32275,
        "ma5": 42.39,
        "ma10": 42.98
      },
      {
        "open": 40.65,
        "high": 40.65,
        "low": 39.2,
        "close": 39.9,
        "volume": 55184,
        "ma5": 41.49,
        "ma10": 42.64
      },
      {
        "open": 40.05,
        "high": 41.8,
        "low": 39.9,
        "close": 41.8,
        "volume": 45678,
        "ma5": 41.32,
        "ma10": 42.45
      },
      {
        "open": 41.45,
        "high": 42.3,
        "low": 41.4,
        "close": 41.9,
        "volume": 28997,
        "ma5": 41.35,
        "ma10": 42.26
      }
    ],
    "symbol": "2618.TW",
    "maxVol10d": 55184,
    "hasVolumeBurst": false,
    "kd": {
      "k": 38.7,
      "d": 39.1,
      "prevK": 33.1,
      "prevD": 39.2,
      "h8": 44.6,
      "l8": 39.2
    }
  },
  {
    "code": "2610",
    "name": "華航",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 20.1,
    "prevClose": 20.25,
    "open": 20.15,
    "high": 20.3,
    "low": 20.0,
    "volume": 21904,
    "ma5": 20.12,
    "ma10": 20.86,
    "ma20": 21.24,
    "ma60": 21.14,
    "vMa5": 29920,
    "vMa10": 42673,
    "high20d": 22.85,
    "sparkline": [
      22.6,
      22.15,
      22.5,
      20.45,
      20.25,
      20.25,
      20.1,
      19.9,
      20.25,
      20.1
    ],
    "high5d": 20.4,
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
        "open": 20.25,
        "high": 20.4,
        "low": 20.1,
        "close": 20.25,
        "volume": 25503,
        "ma5": 21.12,
        "ma10": 21.72
      },
      {
        "open": 20.35,
        "high": 20.35,
        "low": 20.0,
        "close": 20.1,
        "volume": 35877,
        "ma5": 20.71,
        "ma10": 21.56
      },
      {
        "open": 20.15,
        "high": 20.15,
        "low": 19.85,
        "close": 19.9,
        "volume": 41614,
        "ma5": 20.19,
        "ma10": 21.31
      },
      {
        "open": 19.9,
        "high": 20.3,
        "low": 19.9,
        "close": 20.25,
        "volume": 24701,
        "ma5": 20.15,
        "ma10": 21.09
      },
      {
        "open": 20.15,
        "high": 20.3,
        "low": 20.0,
        "close": 20.1,
        "volume": 21904,
        "ma5": 20.12,
        "ma10": 20.86
      }
    ],
    "symbol": "2610.TW",
    "maxVol10d": 125826,
    "hasVolumeBurst": true,
    "kd": {
      "k": 12.2,
      "d": 21.0,
      "prevK": 13.9,
      "prevD": 25.5,
      "h8": 22.7,
      "l8": 19.85
    }
  },
  {
    "code": "2383",
    "name": "台光電",
    "categories": [
      "0050",
      "ValueTop"
    ],
    "price": 6205.0,
    "prevClose": 6350.0,
    "open": 6350.0,
    "high": 6470.0,
    "low": 6170.0,
    "volume": 1794,
    "ma5": 6028.0,
    "ma10": 5675.5,
    "ma20": 5211.75,
    "ma60": 5195.08,
    "vMa5": 1813,
    "vMa10": 1894,
    "high20d": 6470.0,
    "sparkline": [
      5245.0,
      5305.0,
      5240.0,
      5290.0,
      5535.0,
      5730.0,
      5690.0,
      6165.0,
      6350.0,
      6205.0
    ],
    "high5d": 6470.0,
    "high10d": 6470.0,
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
        "open": 5500.0,
        "high": 5730.0,
        "low": 5480.0,
        "close": 5730.0,
        "volume": 1468,
        "ma5": 5420.0,
        "ma10": 5152.5
      },
      {
        "open": 5875.0,
        "high": 5875.0,
        "low": 5655.0,
        "close": 5690.0,
        "volume": 1472,
        "ma5": 5497.0,
        "ma10": 5290.0
      },
      {
        "open": 5790.0,
        "high": 6200.0,
        "low": 5770.0,
        "close": 6165.0,
        "volume": 2605,
        "ma5": 5682.0,
        "ma10": 5432.0
      },
      {
        "open": 6165.0,
        "high": 6445.0,
        "low": 6110.0,
        "close": 6350.0,
        "volume": 1725,
        "ma5": 5894.0,
        "ma10": 5569.0
      },
      {
        "open": 6350.0,
        "high": 6470.0,
        "low": 6170.0,
        "close": 6205.0,
        "volume": 1794,
        "ma5": 6028.0,
        "ma10": 5675.5
      }
    ],
    "symbol": "2383.TW",
    "maxVol10d": 2615,
    "hasVolumeBurst": false,
    "kd": {
      "k": 88.3,
      "d": 88.8,
      "prevK": 92.1,
      "prevD": 89.1,
      "h8": 6445.0,
      "l8": 5105.0
    }
  },
  {
    "code": "2345",
    "name": "智邦",
    "categories": [
      "0050",
      "ValueTop"
    ],
    "price": 2225.0,
    "prevClose": 2290.0,
    "open": 2280.0,
    "high": 2350.0,
    "low": 2210.0,
    "volume": 3172,
    "ma5": 2260.0,
    "ma10": 2261.0,
    "ma20": 2217.25,
    "ma60": 2367.75,
    "vMa5": 2872,
    "vMa10": 3086,
    "high20d": 2595.0,
    "sparkline": [
      2385.0,
      2410.0,
      2215.0,
      2165.0,
      2135.0,
      2215.0,
      2270.0,
      2300.0,
      2290.0,
      2225.0
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
        "open": 2140.0,
        "high": 2255.0,
        "low": 2125.0,
        "close": 2215.0,
        "volume": 2760,
        "ma5": 2228.0,
        "ma10": 2224.0
      },
      {
        "open": 2275.0,
        "high": 2310.0,
        "low": 2235.0,
        "close": 2270.0,
        "volume": 2890,
        "ma5": 2200.0,
        "ma10": 2257.5
      },
      {
        "open": 2305.0,
        "high": 2385.0,
        "low": 2275.0,
        "close": 2300.0,
        "volume": 3192,
        "ma5": 2217.0,
        "ma10": 2275.0
      },
      {
        "open": 2300.0,
        "high": 2335.0,
        "low": 2245.0,
        "close": 2290.0,
        "volume": 2343,
        "ma5": 2242.0,
        "ma10": 2270.5
      },
      {
        "open": 2280.0,
        "high": 2350.0,
        "low": 2210.0,
        "close": 2225.0,
        "volume": 3172,
        "ma5": 2260.0,
        "ma10": 2261.0
      }
    ],
    "symbol": "2345.TW",
    "maxVol10d": 3934,
    "hasVolumeBurst": false,
    "kd": {
      "k": 37.4,
      "d": 42.4,
      "prevK": 41.7,
      "prevD": 44.9,
      "h8": 2595.0,
      "l8": 2075.0
    }
  },
  {
    "code": "3017",
    "name": "奇鋐",
    "categories": [
      "0050",
      "ValueTop"
    ],
    "price": 3035.0,
    "prevClose": 3150.0,
    "open": 3150.0,
    "high": 3180.0,
    "low": 2990.0,
    "volume": 3599,
    "ma5": 3106.0,
    "ma10": 2951.0,
    "ma20": 2645.5,
    "ma60": 2526.75,
    "vMa5": 5386,
    "vMa10": 5044,
    "high20d": 3320.0,
    "sparkline": [
      2730.0,
      2940.0,
      2785.0,
      2765.0,
      2760.0,
      2910.0,
      3200.0,
      3235.0,
      3150.0,
      3035.0
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
        "open": 2765.0,
        "high": 2915.0,
        "low": 2755.0,
        "close": 2910.0,
        "volume": 3904,
        "ma5": 2832.0,
        "ma10": 2647.0
      },
      {
        "open": 3030.0,
        "high": 3200.0,
        "low": 2925.0,
        "close": 3200.0,
        "volume": 9481,
        "ma5": 2884.0,
        "ma10": 2756.0
      },
      {
        "open": 3250.0,
        "high": 3320.0,
        "low": 3170.0,
        "close": 3235.0,
        "volume": 6988,
        "ma5": 2974.0,
        "ma10": 2847.5
      },
      {
        "open": 3230.0,
        "high": 3230.0,
        "low": 3115.0,
        "close": 3150.0,
        "volume": 2956,
        "ma5": 3051.0,
        "ma10": 2907.5
      },
      {
        "open": 3150.0,
        "high": 3180.0,
        "low": 2990.0,
        "close": 3035.0,
        "volume": 3599,
        "ma5": 3106.0,
        "ma10": 2951.0
      }
    ],
    "symbol": "3017.TW",
    "maxVol10d": 9481,
    "hasVolumeBurst": true,
    "kd": {
      "k": 76.2,
      "d": 82.3,
      "prevK": 84.8,
      "prevD": 85.4,
      "h8": 3320.0,
      "l8": 2625.0
    }
  },
  {
    "code": "2360",
    "name": "致茂",
    "categories": [
      "0050"
    ],
    "price": 2305.0,
    "prevClose": 2360.0,
    "open": 2350.0,
    "high": 2390.0,
    "low": 2290.0,
    "volume": 1727,
    "ma5": 2292.0,
    "ma10": 2146.0,
    "ma20": 2079.5,
    "ma60": 2167.42,
    "vMa5": 2239,
    "vMa10": 2389,
    "high20d": 2400.0,
    "sparkline": [
      1885.0,
      1975.0,
      2030.0,
      2030.0,
      2080.0,
      2195.0,
      2300.0,
      2300.0,
      2360.0,
      2305.0
    ],
    "high5d": 2400.0,
    "high10d": 2400.0,
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
        "open": 2110.0,
        "high": 2230.0,
        "low": 2095.0,
        "close": 2195.0,
        "volume": 2496,
        "ma5": 2062.0,
        "ma10": 2009.0
      },
      {
        "open": 2335.0,
        "high": 2395.0,
        "low": 2255.0,
        "close": 2300.0,
        "volume": 3374,
        "ma5": 2127.0,
        "ma10": 2048.0
      },
      {
        "open": 2335.0,
        "high": 2365.0,
        "low": 2280.0,
        "close": 2300.0,
        "volume": 1649,
        "ma5": 2181.0,
        "ma10": 2068.0
      },
      {
        "open": 2335.0,
        "high": 2400.0,
        "low": 2250.0,
        "close": 2360.0,
        "volume": 1951,
        "ma5": 2247.0,
        "ma10": 2108.0
      },
      {
        "open": 2350.0,
        "high": 2390.0,
        "low": 2290.0,
        "close": 2305.0,
        "volume": 1727,
        "ma5": 2292.0,
        "ma10": 2146.0
      }
    ],
    "symbol": "2360.TW",
    "maxVol10d": 3518,
    "hasVolumeBurst": false,
    "kd": {
      "k": 83.0,
      "d": 77.1,
      "prevK": 83.0,
      "prevD": 74.2,
      "h8": 2400.0,
      "l8": 1845.0
    }
  },
  {
    "code": "2059",
    "name": "川湖",
    "categories": [
      "0050",
      "ValueTop"
    ],
    "price": 14370.0,
    "prevClose": 13750.0,
    "open": 14105.0,
    "high": 15085.0,
    "low": 13965.0,
    "volume": 1535,
    "ma5": 12980.0,
    "ma10": 11980.0,
    "ma20": 9992.5,
    "ma60": 7970.92,
    "vMa5": 507,
    "vMa10": 558,
    "high20d": 15085.0,
    "sparkline": [
      9470.0,
      10100.0,
      11110.0,
      11905.0,
      12315.0,
      12045.0,
      12235.0,
      12500.0,
      13750.0,
      14370.0
    ],
    "high5d": 15085.0,
    "high10d": 15085.0,
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
        "open": 12250.0,
        "high": 12295.0,
        "low": 11790.0,
        "close": 12045.0,
        "volume": 311,
        "ma5": 11495.0,
        "ma10": 10006.5
      },
      {
        "open": 12235.0,
        "high": 12500.0,
        "low": 11840.0,
        "close": 12235.0,
        "volume": 263,
        "ma5": 11922.0,
        "ma10": 10516.0
      },
      {
        "open": 12010.0,
        "high": 12670.0,
        "low": 12010.0,
        "close": 12500.0,
        "volume": 201,
        "ma5": 12200.0,
        "ma10": 10981.0
      },
      {
        "open": 13750.0,
        "high": 13750.0,
        "low": 13750.0,
        "close": 13750.0,
        "volume": 223,
        "ma5": 12569.0,
        "ma10": 11492.5
      },
      {
        "open": 14105.0,
        "high": 15085.0,
        "low": 13965.0,
        "close": 14370.0,
        "volume": 1535,
        "ma5": 12980.0,
        "ma10": 11980.0
      }
    ],
    "symbol": "2059.TW",
    "maxVol10d": 1535,
    "hasVolumeBurst": true,
    "kd": {
      "k": 92.8,
      "d": 92.6,
      "prevK": 95.7,
      "prevD": 92.4,
      "h8": 13750.0,
      "l8": 9510.0
    }
  },
  {
    "code": "2412",
    "name": "中華電",
    "categories": [
      "0050",
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 137.0,
    "prevClose": 136.0,
    "open": 136.5,
    "high": 137.5,
    "low": 135.5,
    "volume": 13909,
    "ma5": 136.0,
    "ma10": 136.4,
    "ma20": 137.85,
    "ma60": 139.53,
    "vMa5": 10570,
    "vMa10": 9668,
    "high20d": 142.5,
    "sparkline": [
      137.0,
      137.0,
      137.5,
      136.5,
      136.0,
      136.0,
      136.0,
      135.0,
      136.0,
      137.0
    ],
    "high5d": 137.5,
    "high10d": 138.0,
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
        "open": 137.0,
        "high": 137.0,
        "low": 135.5,
        "close": 136.0,
        "volume": 8779,
        "ma5": 136.6,
        "ma10": 137.55
      },
      {
        "open": 135.5,
        "high": 136.0,
        "low": 135.0,
        "close": 136.0,
        "volume": 8782,
        "ma5": 136.4,
        "ma10": 137.1
      },
      {
        "open": 136.0,
        "high": 136.5,
        "low": 135.0,
        "close": 135.0,
        "volume": 11192,
        "ma5": 135.9,
        "ma10": 136.65
      },
      {
        "open": 135.0,
        "high": 137.0,
        "low": 135.0,
        "close": 136.0,
        "volume": 10190,
        "ma5": 135.8,
        "ma10": 136.35
      },
      {
        "open": 136.5,
        "high": 137.5,
        "low": 135.5,
        "close": 137.0,
        "volume": 13909,
        "ma5": 136.0,
        "ma10": 136.4
      }
    ],
    "symbol": "2412.TW",
    "maxVol10d": 13909,
    "hasVolumeBurst": false,
    "kd": {
      "k": 34.0,
      "d": 22.2,
      "prevK": 17.6,
      "prevD": 16.3,
      "h8": 138.0,
      "l8": 135.0
    }
  },
  {
    "code": "3665",
    "name": "貿聯-KY",
    "categories": [
      "0050",
      "ValueTop"
    ],
    "price": 2240.0,
    "prevClose": 2135.0,
    "open": 2130.0,
    "high": 2310.0,
    "low": 2125.0,
    "volume": 3103,
    "ma5": 2187.0,
    "ma10": 2225.0,
    "ma20": 2185.75,
    "ma60": 2082.92,
    "vMa5": 2374,
    "vMa10": 3318,
    "high20d": 2555.0,
    "sparkline": [
      2355.0,
      2370.0,
      2200.0,
      2190.0,
      2200.0,
      2155.0,
      2205.0,
      2200.0,
      2135.0,
      2240.0
    ],
    "high5d": 2310.0,
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
        "open": 2195.0,
        "high": 2195.0,
        "low": 2130.0,
        "close": 2155.0,
        "volume": 2888,
        "ma5": 2223.0,
        "ma10": 2187.5
      },
      {
        "open": 2180.0,
        "high": 2275.0,
        "low": 2165.0,
        "close": 2205.0,
        "volume": 2529,
        "ma5": 2190.0,
        "ma10": 2217.0
      },
      {
        "open": 2235.0,
        "high": 2245.0,
        "low": 2180.0,
        "close": 2200.0,
        "volume": 1564,
        "ma5": 2190.0,
        "ma10": 2227.0
      },
      {
        "open": 2185.0,
        "high": 2185.0,
        "low": 2095.0,
        "close": 2135.0,
        "volume": 1787,
        "ma5": 2179.0,
        "ma10": 2231.0
      },
      {
        "open": 2130.0,
        "high": 2310.0,
        "low": 2125.0,
        "close": 2240.0,
        "volume": 3103,
        "ma5": 2187.0,
        "ma10": 2225.0
      }
    ],
    "symbol": "3665.TW",
    "maxVol10d": 5306,
    "hasVolumeBurst": false,
    "kd": {
      "k": 30.1,
      "d": 36.0,
      "prevK": 27.7,
      "prevD": 38.9,
      "h8": 2555.0,
      "l8": 2070.0
    }
  },
  {
    "code": "4958",
    "name": "臻鼎-KY",
    "categories": [
      "0050",
      "Top100",
      "ValueTop",
      "SitcaBuy",
      "SitcaBuy3D"
    ],
    "price": 474.0,
    "prevClose": 503.0,
    "open": 507.0,
    "high": 513.0,
    "low": 469.0,
    "volume": 39416,
    "ma5": 483.1,
    "ma10": 481.9,
    "ma20": 466.18,
    "ma60": 532.48,
    "vMa5": 47566,
    "vMa10": 41059,
    "high20d": 559.0,
    "sparkline": [
      488.0,
      482.0,
      473.0,
      470.5,
      490.0,
      471.5,
      477.5,
      489.5,
      503.0,
      474.0
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
        "open": 485.0,
        "high": 486.0,
        "low": 468.5,
        "close": 471.5,
        "volume": 51183,
        "ma5": 477.4,
        "ma10": 453.0
      },
      {
        "open": 483.0,
        "high": 506.0,
        "low": 472.0,
        "close": 477.5,
        "volume": 41320,
        "ma5": 476.5,
        "ma10": 463.15
      },
      {
        "open": 481.5,
        "high": 522.0,
        "low": 473.0,
        "close": 489.5,
        "volume": 61365,
        "ma5": 479.8,
        "ma10": 470.75
      },
      {
        "open": 491.5,
        "high": 515.0,
        "low": 484.0,
        "close": 503.0,
        "volume": 44547,
        "ma5": 486.3,
        "ma10": 478.9
      },
      {
        "open": 507.0,
        "high": 513.0,
        "low": 469.0,
        "close": 474.0,
        "volume": 39416,
        "ma5": 483.1,
        "ma10": 481.9
      }
    ],
    "symbol": "4958.TW",
    "maxVol10d": 61365,
    "hasVolumeBurst": false,
    "kd": {
      "k": 57.8,
      "d": 65.9,
      "prevK": 71.5,
      "prevD": 70.0,
      "h8": 522.0,
      "l8": 453.0
    }
  },
  {
    "code": "7769",
    "name": "鴻勁",
    "categories": [
      "0050"
    ],
    "price": 6525.0,
    "prevClose": 6750.0,
    "open": 6670.0,
    "high": 6775.0,
    "low": 6500.0,
    "volume": 534,
    "ma5": 6623.0,
    "ma10": 6507.0,
    "ma20": 6272.25,
    "ma60": 6716.67,
    "vMa5": 576,
    "vMa10": 538,
    "high20d": 6960.0,
    "sparkline": [
      6530.0,
      6475.0,
      6320.0,
      6280.0,
      6350.0,
      6480.0,
      6770.0,
      6590.0,
      6750.0,
      6525.0
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
        "open": 6380.0,
        "high": 6600.0,
        "low": 6380.0,
        "close": 6480.0,
        "volume": 362,
        "ma5": 6381.0,
        "ma10": 6285.0
      },
      {
        "open": 6645.0,
        "high": 6845.0,
        "low": 6505.0,
        "close": 6770.0,
        "volume": 998,
        "ma5": 6440.0,
        "ma10": 6400.0
      },
      {
        "open": 6950.0,
        "high": 6960.0,
        "low": 6560.0,
        "close": 6590.0,
        "volume": 558,
        "ma5": 6494.0,
        "ma10": 6441.0
      },
      {
        "open": 6600.0,
        "high": 6825.0,
        "low": 6465.0,
        "close": 6750.0,
        "volume": 426,
        "ma5": 6588.0,
        "ma10": 6473.5
      },
      {
        "open": 6670.0,
        "high": 6775.0,
        "low": 6500.0,
        "close": 6525.0,
        "volume": 534,
        "ma5": 6623.0,
        "ma10": 6507.0
      }
    ],
    "symbol": "7769.TW",
    "maxVol10d": 998,
    "hasVolumeBurst": true,
    "kd": {
      "k": 62.4,
      "d": 68.3,
      "prevK": 70.8,
      "prevD": 71.3,
      "h8": 6960.0,
      "l8": 6160.0
    }
  },
  {
    "code": "3653",
    "name": "健策",
    "categories": [
      "0050",
      "ValueTop"
    ],
    "price": 5150.0,
    "prevClose": 5340.0,
    "open": 5370.0,
    "high": 5485.0,
    "low": 5120.0,
    "volume": 3451,
    "ma5": 4890.0,
    "ma10": 4582.0,
    "ma20": 4058.0,
    "ma60": 3720.42,
    "vMa5": 1450,
    "vMa10": 1602,
    "high20d": 5485.0,
    "sparkline": [
      4340.0,
      4450.0,
      4380.0,
      4135.0,
      4065.0,
      4470.0,
      4635.0,
      4855.0,
      5340.0,
      5150.0
    ],
    "high5d": 5485.0,
    "high10d": 5485.0,
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
        "open": 4125.0,
        "high": 4470.0,
        "low": 4125.0,
        "close": 4470.0,
        "volume": 700,
        "ma5": 4300.0,
        "ma10": 4033.5
      },
      {
        "open": 4500.0,
        "high": 4670.0,
        "low": 4415.0,
        "close": 4635.0,
        "volume": 880,
        "ma5": 4337.0,
        "ma10": 4183.5
      },
      {
        "open": 4695.0,
        "high": 4860.0,
        "low": 4530.0,
        "close": 4855.0,
        "volume": 1194,
        "ma5": 4432.0,
        "ma10": 4324.5
      },
      {
        "open": 5340.0,
        "high": 5340.0,
        "low": 5340.0,
        "close": 5340.0,
        "volume": 1022,
        "ma5": 4673.0,
        "ma10": 4481.5
      },
      {
        "open": 5370.0,
        "high": 5485.0,
        "low": 5120.0,
        "close": 5150.0,
        "volume": 3451,
        "ma5": 4890.0,
        "ma10": 4582.0
      }
    ],
    "symbol": "3653.TW",
    "maxVol10d": 3451,
    "hasVolumeBurst": true,
    "kd": {
      "k": 88.5,
      "d": 87.1,
      "prevK": 93.2,
      "prevD": 86.4,
      "h8": 5340.0,
      "l8": 3895.0
    }
  },
  {
    "code": "2368",
    "name": "金像電",
    "categories": [
      "0050",
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 1070.0,
    "prevClose": 1010.0,
    "open": 1020.0,
    "high": 1110.0,
    "low": 1010.0,
    "volume": 14235,
    "ma5": 1021.0,
    "ma10": 990.2,
    "ma20": 920.0,
    "ma60": 1131.15,
    "vMa5": 12554,
    "vMa10": 12993,
    "high20d": 1110.0,
    "sparkline": [
      940.0,
      985.0,
      982.0,
      926.0,
      964.0,
      1000.0,
      1010.0,
      1015.0,
      1010.0,
      1070.0
    ],
    "high5d": 1110.0,
    "high10d": 1110.0,
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
        "open": 1015.0,
        "high": 1045.0,
        "low": 964.0,
        "close": 1000.0,
        "volume": 19420,
        "ma5": 971.4,
        "ma10": 908.0
      },
      {
        "open": 1030.0,
        "high": 1045.0,
        "low": 994.0,
        "close": 1010.0,
        "volume": 14043,
        "ma5": 976.4,
        "ma10": 936.9
      },
      {
        "open": 1015.0,
        "high": 1065.0,
        "low": 995.0,
        "close": 1015.0,
        "volume": 8998,
        "ma5": 983.0,
        "ma10": 959.1
      },
      {
        "open": 1020.0,
        "high": 1025.0,
        "low": 995.0,
        "close": 1010.0,
        "volume": 6073,
        "ma5": 999.8,
        "ma10": 972.9
      },
      {
        "open": 1020.0,
        "high": 1110.0,
        "low": 1010.0,
        "close": 1070.0,
        "volume": 14235,
        "ma5": 1021.0,
        "ma10": 990.2
      }
    ],
    "symbol": "2368.TW",
    "maxVol10d": 19420,
    "hasVolumeBurst": false,
    "kd": {
      "k": 76.0,
      "d": 74.8,
      "prevK": 73.8,
      "prevD": 74.3,
      "h8": 1065.0,
      "l8": 906.0
    }
  },
  {
    "code": "4904",
    "name": "遠傳",
    "categories": [
      "0050"
    ],
    "price": 101.5,
    "prevClose": 100.5,
    "open": 100.0,
    "high": 101.5,
    "low": 99.9,
    "volume": 6067,
    "ma5": 100.3,
    "ma10": 101.0,
    "ma20": 102.8,
    "ma60": 102.51,
    "vMa5": 5576,
    "vMa10": 5474,
    "high20d": 108.5,
    "sparkline": [
      101.0,
      102.0,
      103.0,
      101.5,
      101.0,
      101.0,
      99.5,
      99.0,
      100.5,
      101.5
    ],
    "high5d": 102.0,
    "high10d": 104.0,
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
        "open": 100.5,
        "high": 102.0,
        "low": 100.5,
        "close": 101.0,
        "volume": 4753,
        "ma5": 101.7,
        "ma10": 102.45
      },
      {
        "open": 102.0,
        "high": 102.0,
        "low": 99.1,
        "close": 99.5,
        "volume": 7273,
        "ma5": 101.2,
        "ma10": 101.85
      },
      {
        "open": 98.3,
        "high": 99.4,
        "low": 98.1,
        "close": 99.0,
        "volume": 4963,
        "ma5": 100.4,
        "ma10": 101.25
      },
      {
        "open": 98.9,
        "high": 101.0,
        "low": 98.7,
        "close": 100.5,
        "volume": 4822,
        "ma5": 100.2,
        "ma10": 100.95
      },
      {
        "open": 100.0,
        "high": 101.5,
        "low": 99.9,
        "close": 101.5,
        "volume": 6067,
        "ma5": 100.3,
        "ma10": 101.0
      }
    ],
    "symbol": "4904.TW",
    "maxVol10d": 7601,
    "hasVolumeBurst": false,
    "kd": {
      "k": 35.4,
      "d": 26.6,
      "prevK": 24.3,
      "prevD": 22.2,
      "h8": 104.0,
      "l8": 98.1
    }
  },
  {
    "code": "3045",
    "name": "台灣大",
    "categories": [
      "0050",
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 111.0,
    "prevClose": 111.0,
    "open": 110.5,
    "high": 111.5,
    "low": 110.0,
    "volume": 8688,
    "ma5": 109.6,
    "ma10": 110.05,
    "ma20": 111.45,
    "ma60": 113.93,
    "vMa5": 11784,
    "vMa10": 10109,
    "high20d": 115.0,
    "sparkline": [
      110.5,
      110.5,
      111.5,
      110.5,
      109.5,
      109.5,
      108.5,
      108.0,
      111.0,
      111.0
    ],
    "high5d": 111.5,
    "high10d": 111.5,
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
        "open": 109.5,
        "high": 110.0,
        "low": 109.0,
        "close": 109.5,
        "volume": 6649,
        "ma5": 110.3,
        "ma10": 111.15
      },
      {
        "open": 109.0,
        "high": 109.5,
        "low": 108.0,
        "close": 108.5,
        "volume": 15538,
        "ma5": 109.9,
        "ma10": 110.6
      },
      {
        "open": 108.5,
        "high": 108.5,
        "low": 107.5,
        "close": 108.0,
        "volume": 9467,
        "ma5": 109.2,
        "ma10": 110.15
      },
      {
        "open": 108.0,
        "high": 111.5,
        "low": 108.0,
        "close": 111.0,
        "volume": 18579,
        "ma5": 109.3,
        "ma10": 110.05
      },
      {
        "open": 110.5,
        "high": 111.5,
        "low": 110.0,
        "close": 111.0,
        "volume": 8688,
        "ma5": 109.6,
        "ma10": 110.05
      }
    ],
    "symbol": "3045.TW",
    "maxVol10d": 18579,
    "hasVolumeBurst": true,
    "kd": {
      "k": 54.1,
      "d": 33.8,
      "prevK": 37.3,
      "prevD": 23.7,
      "h8": 111.5,
      "l8": 107.5
    }
  },
  {
    "code": "00403A",
    "name": "主動統一升級50",
    "categories": [
      "Top100",
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 10.16,
    "prevClose": 10.4,
    "open": 10.4,
    "high": 10.44,
    "low": 10.13,
    "volume": 180646,
    "ma5": 10.16,
    "ma10": 9.97,
    "ma20": 9.66,
    "ma60": 10.28,
    "vMa5": 268203,
    "vMa10": 238204,
    "high20d": 10.44,
    "sparkline": [
      9.54,
      9.81,
      9.91,
      9.72,
      9.9,
      9.94,
      10.1,
      10.3,
      10.32,
      10.16
    ],
    "high5d": 10.44,
    "high10d": 10.44,
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
        "open": 9.87,
        "high": 9.96,
        "low": 9.8,
        "close": 9.94,
        "volume": 116679,
        "ma5": 9.86,
        "ma10": 9.44
      },
      {
        "open": 9.96,
        "high": 10.12,
        "low": 9.96,
        "close": 10.1,
        "volume": 319433,
        "ma5": 9.91,
        "ma10": 9.6
      },
      {
        "open": 10.26,
        "high": 10.38,
        "low": 10.22,
        "close": 10.3,
        "volume": 371521,
        "ma5": 9.99,
        "ma10": 9.79
      },
      {
        "open": 10.4,
        "high": 10.42,
        "low": 10.28,
        "close": 10.32,
        "volume": 352737,
        "ma5": 10.11,
        "ma10": 9.89
      },
      {
        "open": 10.4,
        "high": 10.44,
        "low": 10.13,
        "close": 10.16,
        "volume": 180646,
        "ma5": 10.16,
        "ma10": 9.97
      }
    ],
    "symbol": "00403A.TW",
    "maxVol10d": 371521,
    "hasVolumeBurst": true,
    "kd": {
      "k": 82.4,
      "d": 85.5,
      "prevK": 91.6,
      "prevD": 87.0,
      "h8": 10.42,
      "l8": 9.66
    }
  },
  {
    "code": "00685L",
    "name": "群益臺灣加權正2",
    "categories": [
      "Top100",
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 11.44,
    "prevClose": 11.84,
    "open": 11.81,
    "high": 11.83,
    "low": 11.44,
    "volume": 214854,
    "ma5": 11.71,
    "ma10": 11.45,
    "ma20": 10.97,
    "ma60": 11.75,
    "vMa5": 207490,
    "vMa10": 234042,
    "high20d": 12.05,
    "sparkline": [
      11.12,
      11.05,
      11.01,
      11.37,
      11.42,
      11.6,
      11.91,
      11.76,
      11.84,
      11.44
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
        "open": 11.58,
        "high": 11.65,
        "low": 11.46,
        "close": 11.6,
        "volume": 205727,
        "ma5": 11.29,
        "ma10": 10.86
      },
      {
        "open": 11.97,
        "high": 11.99,
        "low": 11.8,
        "close": 11.91,
        "volume": 230825,
        "ma5": 11.46,
        "ma10": 11.14
      },
      {
        "open": 12.04,
        "high": 12.05,
        "low": 11.71,
        "close": 11.76,
        "volume": 216773,
        "ma5": 11.61,
        "ma10": 11.23
      },
      {
        "open": 11.84,
        "high": 11.95,
        "low": 11.74,
        "close": 11.84,
        "volume": 169271,
        "ma5": 11.71,
        "ma10": 11.36
      },
      {
        "open": 11.81,
        "high": 11.83,
        "low": 11.44,
        "close": 11.44,
        "volume": 214854,
        "ma5": 11.71,
        "ma10": 11.45
      }
    ],
    "symbol": "00685L.TW",
    "maxVol10d": 423338,
    "hasVolumeBurst": false,
    "kd": {
      "k": 75.1,
      "d": 82.8,
      "prevK": 87.4,
      "prevD": 86.7,
      "h8": 12.05,
      "l8": 10.82
    }
  },
  {
    "code": "00631L",
    "name": "元大台灣50正2",
    "categories": [
      "Top100",
      "MajorBuy",
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 34.81,
    "prevClose": 35.95,
    "open": 35.88,
    "high": 35.9,
    "low": 34.81,
    "volume": 167171,
    "ma5": 35.64,
    "ma10": 34.94,
    "ma20": 33.62,
    "ma60": 35.7,
    "vMa5": 177676,
    "vMa10": 198837,
    "high20d": 36.6,
    "sparkline": [
      34.15,
      33.85,
      33.68,
      34.7,
      34.87,
      35.45,
      36.29,
      35.69,
      35.95,
      34.81
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
        "open": 35.08,
        "high": 35.49,
        "low": 34.94,
        "close": 35.45,
        "volume": 173337,
        "ma5": 34.51,
        "ma10": 33.36
      },
      {
        "open": 36.47,
        "high": 36.5,
        "low": 35.99,
        "close": 36.29,
        "volume": 192736,
        "ma5": 35.0,
        "ma10": 34.15
      },
      {
        "open": 36.59,
        "high": 36.6,
        "low": 35.62,
        "close": 35.69,
        "volume": 210625,
        "ma5": 35.4,
        "ma10": 34.35
      },
      {
        "open": 35.94,
        "high": 36.28,
        "low": 35.61,
        "close": 35.95,
        "volume": 144511,
        "ma5": 35.65,
        "ma10": 34.68
      },
      {
        "open": 35.88,
        "high": 35.9,
        "low": 34.81,
        "close": 34.81,
        "volume": 167171,
        "ma5": 35.64,
        "ma10": 34.94
      }
    ],
    "symbol": "00631L.TW",
    "maxVol10d": 390233,
    "hasVolumeBurst": false,
    "kd": {
      "k": 72.9,
      "d": 82.0,
      "prevK": 86.4,
      "prevD": 86.5,
      "h8": 36.6,
      "l8": 33.29
    }
  },
  {
    "code": "2324",
    "name": "仁寶",
    "categories": [
      "Top100",
      "MajorBuy",
      "ValueTop",
      "MajorBuy3D"
    ],
    "price": 40.6,
    "prevClose": 41.65,
    "open": 41.75,
    "high": 43.2,
    "low": 40.15,
    "volume": 138145,
    "ma5": 40.93,
    "ma10": 38.8,
    "ma20": 37.4,
    "ma60": 37.09,
    "vMa5": 236397,
    "vMa10": 134410,
    "high20d": 44.95,
    "sparkline": [
      36.95,
      37.3,
      36.55,
      36.3,
      36.3,
      39.9,
      39.3,
      43.2,
      41.65,
      40.6
    ],
    "high5d": 44.95,
    "high10d": 44.95,
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
        "high": 39.9,
        "low": 36.6,
        "close": 39.9,
        "volume": 170434,
        "ma5": 37.27,
        "ma10": 36.64
      },
      {
        "open": 40.1,
        "high": 41.7,
        "low": 39.1,
        "close": 39.3,
        "volume": 210540,
        "ma5": 37.67,
        "ma10": 37.19
      },
      {
        "open": 40.3,
        "high": 43.2,
        "low": 40.3,
        "close": 43.2,
        "volume": 400219,
        "ma5": 39.0,
        "ma10": 37.91
      },
      {
        "open": 43.35,
        "high": 44.95,
        "low": 40.95,
        "close": 41.65,
        "volume": 262647,
        "ma5": 40.07,
        "ma10": 38.45
      },
      {
        "open": 41.75,
        "high": 43.2,
        "low": 40.15,
        "close": 40.6,
        "volume": 138145,
        "ma5": 40.93,
        "ma10": 38.8
      }
    ],
    "symbol": "2324.TW",
    "maxVol10d": 400219,
    "hasVolumeBurst": true,
    "kd": {
      "k": 69.2,
      "d": 74.3,
      "prevK": 77.2,
      "prevD": 76.9,
      "h8": 44.95,
      "l8": 35.65
    }
  },
  {
    "code": "00981A",
    "name": "主動統一台股增長",
    "categories": [
      "Top100",
      "MajorBuy",
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 29.61,
    "prevClose": 30.39,
    "open": 30.48,
    "high": 30.5,
    "low": 29.5,
    "volume": 216430,
    "ma5": 29.57,
    "ma10": 28.93,
    "ma20": 27.78,
    "ma60": 29.65,
    "vMa5": 200785,
    "vMa10": 203043,
    "high20d": 30.53,
    "sparkline": [
      27.58,
      28.46,
      28.84,
      28.03,
      28.53,
      28.73,
      29.34,
      29.95,
      30.22,
      29.61
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
        "open": 28.46,
        "high": 28.75,
        "low": 28.21,
        "close": 28.73,
        "volume": 112314,
        "ma5": 28.52,
        "ma10": 27.1
      },
      {
        "open": 28.89,
        "high": 29.36,
        "low": 28.89,
        "close": 29.34,
        "volume": 167873,
        "ma5": 28.69,
        "ma10": 27.65
      },
      {
        "open": 29.96,
        "high": 30.18,
        "low": 29.68,
        "close": 29.95,
        "volume": 205892,
        "ma5": 28.92,
        "ma10": 28.27
      },
      {
        "open": 30.29,
        "high": 30.53,
        "low": 30.07,
        "close": 30.22,
        "volume": 301418,
        "ma5": 29.35,
        "ma10": 28.68
      },
      {
        "open": 30.48,
        "high": 30.5,
        "low": 29.5,
        "close": 29.61,
        "volume": 216430,
        "ma5": 29.57,
        "ma10": 28.93
      }
    ],
    "symbol": "00981A.TW",
    "maxVol10d": 301418,
    "hasVolumeBurst": true,
    "kd": {
      "k": 83.2,
      "d": 85.9,
      "prevK": 92.0,
      "prevD": 87.3,
      "h8": 30.53,
      "l8": 27.86
    }
  },
  {
    "code": "00632R",
    "name": "元大台灣50反1",
    "categories": [
      "Top100",
      "TurnoverRate"
    ],
    "price": 10.13,
    "prevClose": 9.97,
    "open": 9.96,
    "high": 10.14,
    "low": 9.96,
    "volume": 124871,
    "ma5": 10.02,
    "ma10": 10.14,
    "ma20": 10.45,
    "ma60": 10.33,
    "vMa5": 141050,
    "vMa10": 160730,
    "high20d": 11.67,
    "sparkline": [
      10.3,
      10.33,
      10.35,
      10.17,
      10.16,
      10.06,
      9.95,
      10.01,
      9.97,
      10.13
    ],
    "high5d": 10.15,
    "high10d": 10.45,
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
        "open": 10.12,
        "high": 10.15,
        "low": 10.05,
        "close": 10.06,
        "volume": 129736,
        "ma5": 10.21,
        "ma10": 10.45
      },
      {
        "open": 9.92,
        "high": 10.0,
        "low": 9.91,
        "close": 9.95,
        "volume": 156891,
        "ma5": 10.14,
        "ma10": 10.3
      },
      {
        "open": 9.9,
        "high": 10.03,
        "low": 9.89,
        "close": 10.01,
        "volume": 162540,
        "ma5": 10.07,
        "ma10": 10.26
      },
      {
        "open": 9.98,
        "high": 10.02,
        "low": 9.93,
        "close": 9.97,
        "volume": 131211,
        "ma5": 10.03,
        "ma10": 10.19
      },
      {
        "open": 9.96,
        "high": 10.14,
        "low": 9.96,
        "close": 10.13,
        "volume": 124871,
        "ma5": 10.02,
        "ma10": 10.14
      }
    ],
    "symbol": "00632R.TW",
    "maxVol10d": 318457,
    "hasVolumeBurst": false,
    "kd": {
      "k": 21.2,
      "d": 14.3,
      "prevK": 10.4,
      "prevD": 10.8,
      "h8": 10.45,
      "l8": 9.89
    }
  },
  {
    "code": "2337",
    "name": "旺宏",
    "categories": [
      "Top100",
      "ValueTop",
      "TurnoverRate"
    ],
    "price": 122.0,
    "prevClose": 129.5,
    "open": 130.0,
    "high": 133.5,
    "low": 121.0,
    "volume": 106856,
    "ma5": 132.3,
    "ma10": 129.55,
    "ma20": 122.37,
    "ma60": 141.73,
    "vMa5": 92948,
    "vMa10": 114757,
    "high20d": 144.5,
    "sparkline": [
      117.5,
      129.0,
      121.5,
      133.5,
      132.5,
      136.5,
      136.5,
      137.0,
      129.5,
      122.0
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
        "open": 135.0,
        "high": 140.0,
        "low": 134.5,
        "close": 136.5,
        "volume": 103745,
        "ma5": 130.6,
        "ma10": 119.33
      },
      {
        "open": 140.0,
        "high": 141.5,
        "low": 136.0,
        "close": 136.5,
        "volume": 87759,
        "ma5": 132.1,
        "ma10": 123.8
      },
      {
        "open": 140.5,
        "high": 144.5,
        "low": 134.5,
        "close": 137.0,
        "volume": 93287,
        "ma5": 135.2,
        "ma10": 127.45
      },
      {
        "open": 135.0,
        "high": 135.0,
        "low": 128.0,
        "close": 129.5,
        "volume": 73095,
        "ma5": 134.4,
        "ma10": 129.35
      },
      {
        "open": 130.0,
        "high": 133.5,
        "low": 121.0,
        "close": 122.0,
        "volume": 106856,
        "ma5": 132.3,
        "ma10": 129.55
      }
    ],
    "symbol": "2337.TW",
    "maxVol10d": 172045,
    "hasVolumeBurst": true,
    "kd": {
      "k": 54.5,
      "d": 69.3,
      "prevK": 71.3,
      "prevD": 76.6,
      "h8": 144.5,
      "l8": 116.0
    }
  },
  {
    "code": "1605",
    "name": "華新",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 37.1,
    "prevClose": 38.5,
    "open": 38.3,
    "high": 38.5,
    "low": 37.0,
    "volume": 21439,
    "ma5": 38.79,
    "ma10": 37.39,
    "ma20": 34.65,
    "ma60": 36.03,
    "vMa5": 48264,
    "vMa10": 43344,
    "high20d": 41.0,
    "sparkline": [
      34.85,
      34.25,
      34.55,
      38.0,
      38.3,
      40.0,
      39.3,
      39.05,
      38.5,
      37.1
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
        "open": 38.5,
        "high": 41.0,
        "low": 38.3,
        "close": 40.0,
        "volume": 93858,
        "ma5": 37.02,
        "ma10": 34.65
      },
      {
        "open": 40.3,
        "high": 41.0,
        "low": 39.15,
        "close": 39.3,
        "volume": 57644,
        "ma5": 38.03,
        "ma10": 35.72
      },
      {
        "open": 40.0,
        "high": 40.5,
        "low": 38.55,
        "close": 39.05,
        "volume": 41720,
        "ma5": 38.93,
        "ma10": 36.48
      },
      {
        "open": 38.7,
        "high": 38.7,
        "low": 37.6,
        "close": 38.5,
        "volume": 26658,
        "ma5": 39.03,
        "ma10": 37.05
      },
      {
        "open": 38.3,
        "high": 38.5,
        "low": 37.0,
        "close": 37.1,
        "volume": 21439,
        "ma5": 38.79,
        "ma10": 37.39
      }
    ],
    "symbol": "1605.TW",
    "maxVol10d": 93858,
    "hasVolumeBurst": true,
    "kd": {
      "k": 66.2,
      "d": 76.1,
      "prevK": 77.2,
      "prevD": 81.0,
      "h8": 41.0,
      "l8": 34.0
    }
  },
  {
    "code": "009816",
    "name": "凱基台灣TOP50",
    "categories": [
      "Top100",
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 15.31,
    "prevClose": 15.52,
    "open": 15.53,
    "high": 15.53,
    "low": 15.3,
    "volume": 77805,
    "ma5": 15.35,
    "ma10": 15.13,
    "ma20": 14.78,
    "ma60": 15.09,
    "vMa5": 91585,
    "vMa10": 105159,
    "high20d": 15.65,
    "sparkline": [
      14.56,
      15.0,
      14.96,
      14.88,
      15.12,
      15.16,
      15.26,
      15.52,
      15.49,
      15.31
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
        "high": 15.18,
        "low": 14.96,
        "close": 15.16,
        "volume": 66801,
        "ma5": 15.02,
        "ma10": 14.57
      },
      {
        "open": 15.21,
        "high": 15.28,
        "low": 15.17,
        "close": 15.26,
        "volume": 79363,
        "ma5": 15.08,
        "ma10": 14.76
      },
      {
        "open": 15.49,
        "high": 15.56,
        "low": 15.42,
        "close": 15.52,
        "volume": 124367,
        "ma5": 15.19,
        "ma10": 14.97
      },
      {
        "open": 15.61,
        "high": 15.65,
        "low": 15.45,
        "close": 15.49,
        "volume": 109587,
        "ma5": 15.31,
        "ma10": 15.06
      },
      {
        "open": 15.53,
        "high": 15.53,
        "low": 15.3,
        "close": 15.31,
        "volume": 77805,
        "ma5": 15.35,
        "ma10": 15.13
      }
    ],
    "symbol": "009816.TW",
    "maxVol10d": 182614,
    "hasVolumeBurst": false,
    "kd": {
      "k": 81.4,
      "d": 85.9,
      "prevK": 91.6,
      "prevD": 88.2,
      "h8": 15.65,
      "l8": 14.78
    }
  },
  {
    "code": "00405A",
    "name": "主動富邦台灣龍耀",
    "categories": [
      "Top100",
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 8.6,
    "prevClose": 8.8,
    "open": 8.8,
    "high": 8.85,
    "low": 8.55,
    "volume": 84321,
    "ma5": 8.62,
    "ma10": 8.37,
    "ma20": 7.98,
    "ma60": 8.75,
    "vMa5": 86111,
    "vMa10": 81141,
    "high20d": 8.85,
    "sparkline": [
      8.05,
      8.25,
      8.02,
      8.13,
      8.15,
      8.42,
      8.62,
      8.66,
      8.8,
      8.6
    ],
    "high5d": 8.85,
    "high10d": 8.85,
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
        "open": 8.24,
        "high": 8.42,
        "low": 8.22,
        "close": 8.42,
        "volume": 77851,
        "ma5": 8.19,
        "ma10": 7.86
      },
      {
        "open": 8.6,
        "high": 8.67,
        "low": 8.52,
        "close": 8.62,
        "volume": 83236,
        "ma5": 8.27,
        "ma10": 8.05
      },
      {
        "open": 8.7,
        "high": 8.76,
        "low": 8.62,
        "close": 8.66,
        "volume": 94495,
        "ma5": 8.4,
        "ma10": 8.19
      },
      {
        "open": 8.66,
        "high": 8.84,
        "low": 8.62,
        "close": 8.8,
        "volume": 90651,
        "ma5": 8.53,
        "ma10": 8.3
      },
      {
        "open": 8.8,
        "high": 8.85,
        "low": 8.55,
        "close": 8.6,
        "volume": 84321,
        "ma5": 8.62,
        "ma10": 8.37
      }
    ],
    "symbol": "00405A.TW",
    "maxVol10d": 107395,
    "hasVolumeBurst": false,
    "kd": {
      "k": 86.0,
      "d": 87.7,
      "prevK": 93.0,
      "prevD": 88.6,
      "h8": 8.84,
      "l8": 7.96
    }
  },
  {
    "code": "00991A",
    "name": "主動復華未來50",
    "categories": [
      "Top100",
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 18.14,
    "prevClose": 18.58,
    "open": 18.68,
    "high": 18.74,
    "low": 18.1,
    "volume": 144355,
    "ma5": 17.98,
    "ma10": 17.45,
    "ma20": 16.66,
    "ma60": 18.58,
    "vMa5": 110174,
    "vMa10": 120357,
    "high20d": 18.74,
    "sparkline": [
      16.33,
      16.89,
      17.16,
      16.86,
      17.33,
      17.52,
      17.79,
      18.19,
      18.24,
      18.14
    ],
    "high5d": 18.74,
    "high10d": 18.74,
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
        "open": 17.22,
        "high": 17.55,
        "low": 17.11,
        "close": 17.52,
        "volume": 112540,
        "ma5": 17.15,
        "ma10": 16.16
      },
      {
        "open": 17.67,
        "high": 17.85,
        "low": 17.59,
        "close": 17.79,
        "volume": 71789,
        "ma5": 17.33,
        "ma10": 16.53
      },
      {
        "open": 18.16,
        "high": 18.34,
        "low": 18.03,
        "close": 18.19,
        "volume": 97654,
        "ma5": 17.54,
        "ma10": 16.95
      },
      {
        "open": 18.37,
        "high": 18.47,
        "low": 18.17,
        "close": 18.24,
        "volume": 124532,
        "ma5": 17.81,
        "ma10": 17.23
      },
      {
        "open": 18.68,
        "high": 18.74,
        "low": 18.1,
        "close": 18.14,
        "volume": 144355,
        "ma5": 17.98,
        "ma10": 17.45
      }
    ],
    "symbol": "00991A.TW",
    "maxVol10d": 186185,
    "hasVolumeBurst": false,
    "kd": {
      "k": 85.6,
      "d": 86.8,
      "prevK": 92.2,
      "prevD": 87.3,
      "h8": 18.47,
      "l8": 16.56
    }
  },
  {
    "code": "00407A",
    "name": "主動凱基台灣",
    "categories": [
      "Top100",
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 9.73,
    "prevClose": 9.91,
    "open": 9.93,
    "high": 9.96,
    "low": 9.67,
    "volume": 57870,
    "ma5": 9.81,
    "ma10": 9.61,
    "ma20": 9.12,
    "ma60": 9.38,
    "vMa5": 86400,
    "vMa10": 72444,
    "high20d": 10.01,
    "sparkline": [
      9.28,
      9.45,
      9.28,
      9.49,
      9.55,
      9.66,
      9.83,
      9.92,
      9.91,
      9.73
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
        "open": 9.56,
        "high": 9.68,
        "low": 9.56,
        "close": 9.66,
        "volume": 67603,
        "ma5": 9.49,
        "ma10": 9.07
      },
      {
        "open": 9.85,
        "high": 9.92,
        "low": 9.76,
        "close": 9.83,
        "volume": 125829,
        "ma5": 9.56,
        "ma10": 9.27
      },
      {
        "open": 9.93,
        "high": 10.01,
        "low": 9.87,
        "close": 9.92,
        "volume": 123028,
        "ma5": 9.69,
        "ma10": 9.42
      },
      {
        "open": 9.94,
        "high": 10.0,
        "low": 9.84,
        "close": 9.91,
        "volume": 57673,
        "ma5": 9.77,
        "ma10": 9.54
      },
      {
        "open": 9.93,
        "high": 9.96,
        "low": 9.67,
        "close": 9.73,
        "volume": 57870,
        "ma5": 9.81,
        "ma10": 9.61
      }
    ],
    "symbol": "00407A.TW",
    "maxVol10d": 125829,
    "hasVolumeBurst": true,
    "kd": {
      "k": 83.2,
      "d": 87.6,
      "prevK": 91.4,
      "prevD": 89.9,
      "h8": 10.01,
      "l8": 9.17
    }
  },
  {
    "code": "0050",
    "name": "元大台灣50",
    "categories": [
      "Top100",
      "MajorBuy",
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 104.9,
    "prevClose": 106.45,
    "open": 106.45,
    "high": 106.45,
    "low": 104.85,
    "volume": 65201,
    "ma5": 105.93,
    "ma10": 104.84,
    "ma20": 102.46,
    "ma60": 104.2,
    "vMa5": 67987,
    "vMa10": 78472,
    "high20d": 107.5,
    "sparkline": [
      103.8,
      103.3,
      102.85,
      104.25,
      104.6,
      105.2,
      106.7,
      106.4,
      106.45,
      104.9
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
        "open": 105.0,
        "high": 105.25,
        "low": 104.45,
        "close": 105.2,
        "volume": 58197,
        "ma5": 104.04,
        "ma10": 102.3
      },
      {
        "open": 106.55,
        "high": 107.0,
        "low": 106.15,
        "close": 106.7,
        "volume": 84987,
        "ma5": 104.72,
        "ma10": 103.62
      },
      {
        "open": 107.1,
        "high": 107.5,
        "low": 106.05,
        "close": 106.4,
        "volume": 77524,
        "ma5": 105.43,
        "ma10": 103.97
      },
      {
        "open": 106.4,
        "high": 106.95,
        "low": 106.0,
        "close": 106.45,
        "volume": 54027,
        "ma5": 105.87,
        "ma10": 104.42
      },
      {
        "open": 106.45,
        "high": 106.45,
        "low": 104.85,
        "close": 104.9,
        "volume": 65201,
        "ma5": 105.93,
        "ma10": 104.84
      }
    ],
    "symbol": "0050.TW",
    "maxVol10d": 162327,
    "hasVolumeBurst": false,
    "kd": {
      "k": 75.8,
      "d": 83.9,
      "prevK": 87.6,
      "prevD": 88.0,
      "h8": 107.5,
      "l8": 102.05
    }
  },
  {
    "code": "00878",
    "name": "國泰永續高股息",
    "categories": [
      "Top100"
    ],
    "price": 32.38,
    "prevClose": 32.74,
    "open": 32.76,
    "high": 32.76,
    "low": 32.3,
    "volume": 87138,
    "ma5": 33.4,
    "ma10": 33.18,
    "ma20": 32.63,
    "ma60": 32.54,
    "vMa5": 58087,
    "vMa10": 53883,
    "high20d": 34.19,
    "sparkline": [
      32.57,
      33.15,
      32.84,
      32.81,
      33.4,
      33.47,
      33.52,
      33.78,
      33.87,
      32.38
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
        "open": 33.33,
        "high": 33.49,
        "low": 33.22,
        "close": 33.47,
        "volume": 35230,
        "ma5": 33.13,
        "ma10": 32.49
      },
      {
        "open": 33.58,
        "high": 33.79,
        "low": 33.41,
        "close": 33.52,
        "volume": 43771,
        "ma5": 33.21,
        "ma10": 32.75
      },
      {
        "open": 33.9,
        "high": 33.95,
        "low": 33.69,
        "close": 33.78,
        "volume": 45862,
        "ma5": 33.4,
        "ma10": 33.05
      },
      {
        "open": 34.09,
        "high": 34.19,
        "low": 33.8,
        "close": 33.87,
        "volume": 78431,
        "ma5": 33.61,
        "ma10": 33.2
      },
      {
        "open": 32.76,
        "high": 32.76,
        "low": 32.3,
        "close": 32.38,
        "volume": 87138,
        "ma5": 33.4,
        "ma10": 33.18
      }
    ],
    "symbol": "00878.TW",
    "maxVol10d": 87138,
    "hasVolumeBurst": true,
    "kd": {
      "k": 59.3,
      "d": 76.6,
      "prevK": 86.9,
      "prevD": 85.2,
      "h8": 34.19,
      "l8": 32.65
    }
  },
  {
    "code": "00400A",
    "name": "主動國泰動能高息",
    "categories": [
      "Top100",
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 14.76,
    "prevClose": 15.05,
    "open": 15.06,
    "high": 15.17,
    "low": 14.74,
    "volume": 47057,
    "ma5": 14.53,
    "ma10": 14.15,
    "ma20": 13.6,
    "ma60": 14.21,
    "vMa5": 41293,
    "vMa10": 39676,
    "high20d": 15.17,
    "sparkline": [
      13.57,
      13.69,
      13.89,
      13.74,
      13.94,
      14.0,
      14.36,
      14.73,
      14.79,
      14.76
    ],
    "high5d": 15.17,
    "high10d": 15.17,
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
        "open": 13.88,
        "high": 14.04,
        "low": 13.8,
        "close": 14.0,
        "volume": 20491,
        "ma5": 13.85,
        "ma10": 13.27
      },
      {
        "open": 14.1,
        "high": 14.37,
        "low": 14.1,
        "close": 14.36,
        "volume": 43811,
        "ma5": 13.99,
        "ma10": 13.52
      },
      {
        "open": 14.68,
        "high": 14.8,
        "low": 14.59,
        "close": 14.73,
        "volume": 45687,
        "ma5": 14.15,
        "ma10": 13.81
      },
      {
        "open": 14.87,
        "high": 14.94,
        "low": 14.74,
        "close": 14.79,
        "volume": 49420,
        "ma5": 14.36,
        "ma10": 14.0
      },
      {
        "open": 15.06,
        "high": 15.17,
        "low": 14.74,
        "close": 14.76,
        "volume": 47057,
        "ma5": 14.53,
        "ma10": 14.15
      }
    ],
    "symbol": "00400A.TW",
    "maxVol10d": 51258,
    "hasVolumeBurst": false,
    "kd": {
      "k": 87.0,
      "d": 87.9,
      "prevK": 92.8,
      "prevD": 88.4,
      "h8": 14.94,
      "l8": 13.51
    }
  },
  {
    "code": "00406A",
    "name": "主動中信台灣收益",
    "categories": [
      "Top100",
      "TurnoverRate"
    ],
    "price": 9.68,
    "prevClose": 9.84,
    "open": 9.96,
    "high": 9.99,
    "low": 9.66,
    "volume": 227165,
    "ma5": 9.62,
    "ma10": 9.43,
    "ma20": 9.14,
    "ma60": 9.64,
    "vMa5": 79791,
    "vMa10": 68328,
    "high20d": 9.99,
    "sparkline": [
      8.97,
      9.27,
      9.35,
      9.23,
      9.37,
      9.4,
      9.53,
      9.69,
      9.78,
      9.68
    ],
    "high5d": 9.99,
    "high10d": 9.99,
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
        "open": 9.37,
        "high": 9.41,
        "low": 9.27,
        "close": 9.4,
        "volume": 31984,
        "ma5": 9.32,
        "ma10": 8.91
      },
      {
        "open": 9.43,
        "high": 9.53,
        "low": 9.43,
        "close": 9.53,
        "volume": 42663,
        "ma5": 9.38,
        "ma10": 9.06
      },
      {
        "open": 9.69,
        "high": 9.75,
        "low": 9.62,
        "close": 9.69,
        "volume": 48103,
        "ma5": 9.44,
        "ma10": 9.22
      },
      {
        "open": 9.74,
        "high": 9.85,
        "low": 9.73,
        "close": 9.78,
        "volume": 49039,
        "ma5": 9.55,
        "ma10": 9.34
      },
      {
        "open": 9.96,
        "high": 9.99,
        "low": 9.66,
        "close": 9.68,
        "volume": 227165,
        "ma5": 9.62,
        "ma10": 9.43
      }
    ],
    "symbol": "00406A.TW",
    "maxVol10d": 227165,
    "hasVolumeBurst": true,
    "kd": {
      "k": 83.4,
      "d": 85.9,
      "prevK": 92.9,
      "prevD": 87.1,
      "h8": 9.85,
      "l8": 9.12
    }
  },
  {
    "code": "00919",
    "name": "群益台灣精選高息",
    "categories": [
      "Top100",
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 30.34,
    "prevClose": 30.34,
    "open": 30.34,
    "high": 30.38,
    "low": 30.14,
    "volume": 41807,
    "ma5": 30.37,
    "ma10": 30.13,
    "ma20": 29.67,
    "ma60": 29.75,
    "vMa5": 50281,
    "vMa10": 49563,
    "high20d": 30.8,
    "sparkline": [
      29.94,
      29.6,
      29.74,
      30.03,
      30.12,
      30.19,
      30.41,
      30.57,
      30.34,
      30.34
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
        "open": 30.33,
        "high": 30.5,
        "low": 30.12,
        "close": 30.19,
        "volume": 41705,
        "ma5": 29.94,
        "ma10": 29.64
      },
      {
        "open": 30.46,
        "high": 30.52,
        "low": 30.32,
        "close": 30.41,
        "volume": 48932,
        "ma5": 30.1,
        "ma10": 29.86
      },
      {
        "open": 30.7,
        "high": 30.8,
        "low": 30.51,
        "close": 30.57,
        "volume": 65003,
        "ma5": 30.26,
        "ma10": 29.96
      },
      {
        "open": 30.52,
        "high": 30.52,
        "low": 30.2,
        "close": 30.34,
        "volume": 53958,
        "ma5": 30.33,
        "ma10": 30.05
      },
      {
        "open": 30.34,
        "high": 30.38,
        "low": 30.14,
        "close": 30.34,
        "volume": 41807,
        "ma5": 30.37,
        "ma10": 30.13
      }
    ],
    "symbol": "00919.TW",
    "maxVol10d": 65003,
    "hasVolumeBurst": false,
    "kd": {
      "k": 73.6,
      "d": 79.1,
      "prevK": 78.6,
      "prevD": 81.9,
      "h8": 30.8,
      "l8": 29.54
    }
  },
  {
    "code": "8112",
    "name": "至上",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 90.3,
    "prevClose": 93.5,
    "open": 93.3,
    "high": 94.2,
    "low": 90.3,
    "volume": 11434,
    "ma5": 94.86,
    "ma10": 93.31,
    "ma20": 87.96,
    "ma60": 89.79,
    "vMa5": 21345,
    "vMa10": 24611,
    "high20d": 101.5,
    "sparkline": [
      86.2,
      89.0,
      91.2,
      92.4,
      100.0,
      96.9,
      97.8,
      95.8,
      93.5,
      90.3
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
        "open": 100.0,
        "high": 101.5,
        "low": 96.6,
        "close": 96.9,
        "volume": 36751,
        "ma5": 93.9,
        "ma10": 87.82
      },
      {
        "open": 98.5,
        "high": 100.5,
        "low": 97.6,
        "close": 97.8,
        "volume": 23170,
        "ma5": 95.66,
        "ma10": 90.04
      },
      {
        "open": 99.3,
        "high": 99.8,
        "low": 95.1,
        "close": 95.8,
        "volume": 20143,
        "ma5": 96.58,
        "ma10": 91.59
      },
      {
        "open": 96.2,
        "high": 96.2,
        "low": 93.0,
        "close": 93.5,
        "volume": 15227,
        "ma5": 96.8,
        "ma10": 92.8
      },
      {
        "open": 93.3,
        "high": 94.2,
        "low": 90.3,
        "close": 90.3,
        "volume": 11434,
        "ma5": 94.86,
        "ma10": 93.31
      }
    ],
    "symbol": "8112.TW",
    "maxVol10d": 71918,
    "hasVolumeBurst": true,
    "kd": {
      "k": 58.8,
      "d": 71.4,
      "prevK": 71.6,
      "prevD": 77.7,
      "h8": 101.5,
      "l8": 84.7
    }
  },
  {
    "code": "0056",
    "name": "元大高股息",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 52.7,
    "prevClose": 53.0,
    "open": 53.1,
    "high": 53.2,
    "low": 52.4,
    "volume": 30781,
    "ma5": 52.82,
    "ma10": 52.1,
    "ma20": 50.64,
    "ma60": 51.36,
    "vMa5": 36207,
    "vMa10": 37766,
    "high20d": 54.0,
    "sparkline": [
      50.6,
      51.45,
      51.3,
      51.05,
      52.45,
      52.3,
      52.7,
      53.0,
      53.4,
      52.7
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
        "open": 52.4,
        "high": 52.4,
        "low": 51.8,
        "close": 52.3,
        "volume": 23952,
        "ma5": 51.71,
        "ma10": 50.15
      },
      {
        "open": 52.5,
        "high": 53.05,
        "low": 52.5,
        "close": 52.7,
        "volume": 34282,
        "ma5": 51.96,
        "ma10": 50.74
      },
      {
        "open": 53.4,
        "high": 53.5,
        "low": 52.9,
        "close": 53.0,
        "volume": 43656,
        "ma5": 52.3,
        "ma10": 51.41
      },
      {
        "open": 53.35,
        "high": 54.0,
        "low": 53.3,
        "close": 53.4,
        "volume": 48363,
        "ma5": 52.77,
        "ma10": 51.81
      },
      {
        "open": 53.1,
        "high": 53.2,
        "low": 52.4,
        "close": 52.7,
        "volume": 30781,
        "ma5": 52.82,
        "ma10": 52.1
      }
    ],
    "symbol": "0056.TW",
    "maxVol10d": 66315,
    "hasVolumeBurst": true,
    "kd": {
      "k": 78.0,
      "d": 83.2,
      "prevK": 88.6,
      "prevD": 85.8,
      "h8": 54.0,
      "l8": 51.0
    }
  },
  {
    "code": "00988A",
    "name": "主動統一全球創新",
    "categories": [
      "MajorBuy",
      "MajorBuy3D",
      "MajorBuy1D",
      "Top100"
    ],
    "price": 17.32,
    "prevClose": 17.69,
    "open": 17.79,
    "high": 17.89,
    "low": 17.29,
    "volume": 43494,
    "ma5": 17.13,
    "ma10": 16.87,
    "ma20": 16.59,
    "ma60": 19.54,
    "vMa5": 41858,
    "vMa10": 45931,
    "high20d": 18.09,
    "sparkline": [
      16.23,
      17.19,
      16.6,
      16.39,
      16.67,
      16.55,
      16.76,
      17.66,
      17.37,
      17.32
    ],
    "high5d": 17.89,
    "high10d": 17.89,
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
        "open": 16.4,
        "high": 16.58,
        "low": 16.35,
        "close": 16.55,
        "volume": 22576,
        "ma5": 16.68,
        "ma10": 16.05
      },
      {
        "open": 16.69,
        "high": 16.79,
        "low": 16.6,
        "close": 16.76,
        "volume": 35245,
        "ma5": 16.59,
        "ma10": 16.29
      },
      {
        "open": 17.47,
        "high": 17.68,
        "low": 17.38,
        "close": 17.66,
        "volume": 60978,
        "ma5": 16.81,
        "ma10": 16.64
      },
      {
        "open": 17.68,
        "high": 17.68,
        "low": 17.36,
        "close": 17.37,
        "volume": 46997,
        "ma5": 17.0,
        "ma10": 16.76
      },
      {
        "open": 17.79,
        "high": 17.89,
        "low": 17.29,
        "close": 17.32,
        "volume": 43494,
        "ma5": 17.13,
        "ma10": 16.87
      }
    ],
    "symbol": "00988A.TW",
    "maxVol10d": 70276,
    "hasVolumeBurst": true,
    "kd": {
      "k": 75.8,
      "d": 75.7,
      "prevK": 81.3,
      "prevD": 75.6,
      "h8": 17.68,
      "l8": 16.27
    }
  },
  {
    "code": "00881",
    "name": "國泰台灣科技龍頭",
    "categories": [
      "Top100"
    ],
    "price": 49.48,
    "prevClose": 50.55,
    "open": 50.5,
    "high": 50.5,
    "low": 49.35,
    "volume": 89660,
    "ma5": 53.39,
    "ma10": 52.87,
    "ma20": 51.41,
    "ma60": 53.16,
    "vMa5": 60748,
    "vMa10": 47172,
    "high20d": 55.55,
    "sparkline": [
      50.9,
      52.65,
      52.75,
      52.25,
      53.2,
      53.5,
      54.15,
      55.0,
      54.8,
      49.48
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
        "open": 53.0,
        "high": 53.65,
        "low": 52.7,
        "close": 53.5,
        "volume": 38063,
        "ma5": 52.87,
        "ma10": 50.88
      },
      {
        "open": 53.85,
        "high": 54.15,
        "low": 53.6,
        "close": 54.15,
        "volume": 34785,
        "ma5": 53.17,
        "ma10": 51.69
      },
      {
        "open": 55.3,
        "high": 55.4,
        "low": 54.7,
        "close": 55.0,
        "volume": 51901,
        "ma5": 53.62,
        "ma10": 52.59
      },
      {
        "open": 55.5,
        "high": 55.55,
        "low": 54.8,
        "close": 54.8,
        "volume": 89331,
        "ma5": 54.13,
        "ma10": 53.01
      },
      {
        "open": 50.5,
        "high": 50.5,
        "low": 49.35,
        "close": 49.48,
        "volume": 89660,
        "ma5": 53.39,
        "ma10": 52.87
      }
    ],
    "symbol": "00881.TW",
    "maxVol10d": 89660,
    "hasVolumeBurst": true,
    "kd": {
      "k": 61.3,
      "d": 79.3,
      "prevK": 90.9,
      "prevD": 88.4,
      "h8": 55.55,
      "l8": 51.9
    }
  },
  {
    "code": "00992A",
    "name": "主動群益科技創新",
    "categories": [
      "Top100",
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 17.94,
    "prevClose": 18.23,
    "open": 18.35,
    "high": 18.39,
    "low": 17.84,
    "volume": 50929,
    "ma5": 17.58,
    "ma10": 17.11,
    "ma20": 16.14,
    "ma60": 17.43,
    "vMa5": 41220,
    "vMa10": 42846,
    "high20d": 18.39,
    "sparkline": [
      16.18,
      16.55,
      16.93,
      16.63,
      16.9,
      16.96,
      17.29,
      17.78,
      17.91,
      17.94
    ],
    "high5d": 18.39,
    "high10d": 18.39,
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
        "open": 16.76,
        "high": 17.02,
        "low": 16.63,
        "close": 16.96,
        "volume": 20369,
        "ma5": 16.79,
        "ma10": 15.76
      },
      {
        "open": 17.02,
        "high": 17.3,
        "low": 17.02,
        "close": 17.29,
        "volume": 34357,
        "ma5": 16.94,
        "ma10": 16.13
      },
      {
        "open": 17.7,
        "high": 17.86,
        "low": 17.6,
        "close": 17.78,
        "volume": 45489,
        "ma5": 17.11,
        "ma10": 16.56
      },
      {
        "open": 17.97,
        "high": 18.11,
        "low": 17.85,
        "close": 17.91,
        "volume": 54955,
        "ma5": 17.37,
        "ma10": 16.87
      },
      {
        "open": 18.35,
        "high": 18.39,
        "low": 17.84,
        "close": 17.94,
        "volume": 50929,
        "ma5": 17.58,
        "ma10": 17.11
      }
    ],
    "symbol": "00992A.TW",
    "maxVol10d": 56105,
    "hasVolumeBurst": false,
    "kd": {
      "k": 87.6,
      "d": 88.2,
      "prevK": 93.2,
      "prevD": 88.5,
      "h8": 18.11,
      "l8": 16.47
    }
  },
  {
    "code": "8039",
    "name": "台虹",
    "categories": [
      "TurnoverRate",
      "ValueTop"
    ],
    "price": 277.5,
    "prevClose": 259.0,
    "open": 258.0,
    "high": 284.5,
    "low": 258.0,
    "volume": 31820,
    "ma5": 257.1,
    "ma10": 240.1,
    "ma20": 221.9,
    "ma60": 176.49,
    "vMa5": 34389,
    "vMa10": 27312,
    "high20d": 286.5,
    "sparkline": [
      220.0,
      216.0,
      237.5,
      226.0,
      216.0,
      227.0,
      249.5,
      272.5,
      259.0,
      277.5
    ],
    "high5d": 286.5,
    "high10d": 286.5,
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
        "open": 215.0,
        "high": 231.0,
        "low": 210.5,
        "close": 227.0,
        "volume": 30141,
        "ma5": 224.5,
        "ma10": 206.45
      },
      {
        "open": 228.0,
        "high": 249.5,
        "low": 227.5,
        "close": 249.5,
        "volume": 22540,
        "ma5": 231.2,
        "ma10": 215.6
      },
      {
        "open": 259.5,
        "high": 274.0,
        "low": 246.5,
        "close": 272.5,
        "volume": 55602,
        "ma5": 238.2,
        "ma10": 225.5
      },
      {
        "open": 274.0,
        "high": 286.5,
        "low": 253.0,
        "close": 259.0,
        "volume": 31840,
        "ma5": 244.8,
        "ma10": 232.35
      },
      {
        "open": 258.0,
        "high": 284.5,
        "low": 258.0,
        "close": 277.5,
        "volume": 31820,
        "ma5": 257.1,
        "ma10": 240.1
      }
    ],
    "symbol": "8039.TW",
    "maxVol10d": 55602,
    "hasVolumeBurst": true,
    "kd": {
      "k": 80.7,
      "d": 76.2,
      "prevK": 77.0,
      "prevD": 73.9,
      "h8": 286.5,
      "l8": 210.5
    }
  },
  {
    "code": "2464",
    "name": "盟立",
    "categories": [
      "TurnoverRate",
      "SitcaBuy",
      "SitcaBuy3D"
    ],
    "price": 178.0,
    "prevClose": 186.0,
    "open": 190.0,
    "high": 199.5,
    "low": 174.5,
    "volume": 18517,
    "ma5": 189.7,
    "ma10": 183.75,
    "ma20": 162.32,
    "ma60": 164.27,
    "vMa5": 19318,
    "vMa10": 20674,
    "high20d": 208.0,
    "sparkline": [
      170.0,
      178.0,
      173.5,
      180.0,
      187.5,
      196.5,
      196.0,
      192.0,
      186.0,
      178.0
    ],
    "high5d": 208.0,
    "high10d": 208.0,
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
        "open": 185.5,
        "high": 205.0,
        "low": 185.5,
        "close": 196.5,
        "volume": 28585,
        "ma5": 183.1,
        "ma10": 165.2
      },
      {
        "open": 198.0,
        "high": 200.5,
        "low": 192.0,
        "close": 196.0,
        "volume": 17022,
        "ma5": 186.7,
        "ma10": 172.55
      },
      {
        "open": 197.0,
        "high": 198.0,
        "low": 189.5,
        "close": 192.0,
        "volume": 9861,
        "ma5": 190.4,
        "ma10": 178.3
      },
      {
        "open": 197.0,
        "high": 208.0,
        "low": 183.5,
        "close": 186.0,
        "volume": 22607,
        "ma5": 191.6,
        "ma10": 182.15
      },
      {
        "open": 190.0,
        "high": 199.5,
        "low": 174.5,
        "close": 178.0,
        "volume": 18517,
        "ma5": 189.7,
        "ma10": 183.75
      }
    ],
    "symbol": "2464.TW",
    "maxVol10d": 28585,
    "hasVolumeBurst": true,
    "kd": {
      "k": 54.4,
      "d": 70.9,
      "prevK": 72.1,
      "prevD": 79.2,
      "h8": 208.0,
      "l8": 171.0
    }
  },
  {
    "code": "5904",
    "name": "寶雅*",
    "categories": [
      "Top100",
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 78.7,
    "prevClose": 76.5,
    "open": 75.0,
    "high": 79.0,
    "low": 73.2,
    "volume": 21345,
    "ma5": 79.7,
    "ma10": 78.08,
    "ma20": 73.36,
    "ma60": 66.88,
    "vMa5": 32489,
    "vMa10": 18783,
    "high20d": 92.3,
    "sparkline": [
      72.0,
      72.0,
      72.0,
      79.2,
      87.1,
      82.5,
      81.8,
      79.0,
      76.5,
      78.7
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
        "open": 90.6,
        "high": 92.3,
        "low": 82.5,
        "close": 82.5,
        "volume": 84486,
        "ma5": 78.56,
        "ma10": 75.28
      },
      {
        "open": 81.5,
        "high": 84.0,
        "low": 77.6,
        "close": 81.8,
        "volume": 27711,
        "ma5": 80.52,
        "ma10": 76.26
      },
      {
        "open": 81.7,
        "high": 81.7,
        "low": 79.0,
        "close": 79.0,
        "volume": 15155,
        "ma5": 81.92,
        "ma10": 76.96
      },
      {
        "open": 77.8,
        "high": 77.8,
        "low": 76.0,
        "close": 76.5,
        "volume": 13749,
        "ma5": 81.38,
        "ma10": 77.41
      },
      {
        "open": 75.0,
        "high": 79.0,
        "low": 73.2,
        "close": 78.7,
        "volume": 21345,
        "ma5": 79.7,
        "ma10": 78.08
      }
    ],
    "symbol": "5904.TWO",
    "maxVol10d": 84486,
    "hasVolumeBurst": true,
    "kd": {
      "k": 41.0,
      "d": 54.7,
      "prevK": 45.0,
      "prevD": 61.6,
      "h8": 92.3,
      "l8": 72.0
    }
  },
  {
    "code": "6182",
    "name": "合晶",
    "categories": [
      "Top100",
      "SitcaBuy",
      "TurnoverRate",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 120.0,
    "prevClose": 122.5,
    "open": 122.0,
    "high": 131.0,
    "low": 119.0,
    "volume": 209183,
    "ma5": 114.0,
    "ma10": 107.0,
    "ma20": 105.64,
    "ma60": 116.79,
    "vMa5": 100543,
    "vMa10": 62332,
    "high20d": 143.0,
    "sparkline": [
      104.0,
      108.0,
      101.0,
      93.0,
      94.0,
      103.0,
      113.0,
      111.5,
      122.5,
      120.0
    ],
    "high5d": 131.0,
    "high10d": 131.0,
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
        "open": 94.3,
        "high": 103.0,
        "low": 94.1,
        "close": 103.0,
        "volume": 55472,
        "ma5": 99.8,
        "ma10": 96.17
      },
      {
        "open": 107.5,
        "high": 113.0,
        "low": 105.5,
        "close": 113.0,
        "volume": 31895,
        "ma5": 100.8,
        "ma10": 99.0
      },
      {
        "open": 116.5,
        "high": 119.5,
        "low": 108.0,
        "close": 111.5,
        "volume": 122537,
        "ma5": 102.9,
        "ma10": 101.25
      },
      {
        "open": 111.0,
        "high": 122.5,
        "low": 108.5,
        "close": 122.5,
        "volume": 83626,
        "ma5": 108.8,
        "ma10": 104.69
      },
      {
        "open": 122.0,
        "high": 131.0,
        "low": 119.0,
        "close": 120.0,
        "volume": 209183,
        "ma5": 114.0,
        "ma10": 107.0
      }
    ],
    "symbol": "6182.TWO",
    "maxVol10d": 209183,
    "hasVolumeBurst": true,
    "kd": {
      "k": 79.0,
      "d": 71.9,
      "prevK": 81.9,
      "prevD": 68.4,
      "h8": 122.5,
      "l8": 89.8
    }
  },
  {
    "code": "00937B",
    "name": "群益ESG投等債20+",
    "categories": [
      "Top100",
      "ValueTop"
    ],
    "price": 14.18,
    "prevClose": 14.41,
    "open": 14.2,
    "high": 14.21,
    "low": 14.14,
    "volume": 113797,
    "ma5": 14.45,
    "ma10": 14.55,
    "ma20": 14.59,
    "ma60": 14.81,
    "vMa5": 71411,
    "vMa10": 56343,
    "high20d": 14.76,
    "sparkline": [
      14.73,
      14.73,
      14.61,
      14.65,
      14.55,
      14.56,
      14.56,
      14.53,
      14.41,
      14.18
    ],
    "high5d": 14.6,
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
        "open": 14.56,
        "high": 14.57,
        "low": 14.54,
        "close": 14.56,
        "volume": 38104,
        "ma5": 14.62,
        "ma10": 14.61
      },
      {
        "open": 14.56,
        "high": 14.56,
        "low": 14.54,
        "close": 14.56,
        "volume": 40748,
        "ma5": 14.59,
        "ma10": 14.62
      },
      {
        "open": 14.58,
        "high": 14.6,
        "low": 14.52,
        "close": 14.53,
        "volume": 53686,
        "ma5": 14.57,
        "ma10": 14.61
      },
      {
        "open": 14.48,
        "high": 14.48,
        "low": 14.39,
        "close": 14.41,
        "volume": 110722,
        "ma5": 14.52,
        "ma10": 14.59
      },
      {
        "open": 14.2,
        "high": 14.21,
        "low": 14.14,
        "close": 14.18,
        "volume": 113797,
        "ma5": 14.45,
        "ma10": 14.55
      }
    ],
    "symbol": "00937B.TWO",
    "maxVol10d": 113797,
    "hasVolumeBurst": true,
    "kd": {
      "k": 12.9,
      "d": 23.1,
      "prevK": 16.1,
      "prevD": 28.2,
      "h8": 14.74,
      "l8": 14.39
    }
  },
  {
    "code": "3105",
    "name": "穩懋",
    "categories": [
      "Top100",
      "SitcaBuy",
      "ValueTop",
      "TurnoverRate",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 374.5,
    "prevClose": 398.0,
    "open": 400.0,
    "high": 406.0,
    "low": 373.5,
    "volume": 28789,
    "ma5": 387.5,
    "ma10": 381.8,
    "ma20": 353.38,
    "ma60": 422.11,
    "vMa5": 27482,
    "vMa10": 24617,
    "high20d": 417.5,
    "sparkline": [
      376.0,
      382.0,
      366.0,
      385.5,
      371.0,
      400.0,
      387.0,
      378.0,
      398.0,
      374.5
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
        "open": 372.0,
        "high": 408.0,
        "low": 370.5,
        "close": 400.0,
        "volume": 29907,
        "ma5": 380.9,
        "ma10": 349.6
      },
      {
        "open": 406.5,
        "high": 417.5,
        "low": 383.0,
        "close": 387.0,
        "volume": 38867,
        "ma5": 381.9,
        "ma10": 361.5
      },
      {
        "open": 389.0,
        "high": 389.5,
        "low": 375.0,
        "close": 378.0,
        "volume": 14892,
        "ma5": 384.3,
        "ma10": 369.85
      },
      {
        "open": 391.0,
        "high": 404.5,
        "low": 388.5,
        "close": 398.0,
        "volume": 24956,
        "ma5": 386.8,
        "ma10": 378.55
      },
      {
        "open": 400.0,
        "high": 406.0,
        "low": 373.5,
        "close": 374.5,
        "volume": 28789,
        "ma5": 387.5,
        "ma10": 381.8
      }
    ],
    "symbol": "3105.TWO",
    "maxVol10d": 40586,
    "hasVolumeBurst": true,
    "kd": {
      "k": 56.4,
      "d": 68.3,
      "prevK": 71.7,
      "prevD": 74.2,
      "h8": 417.5,
      "l8": 359.5
    }
  },
  {
    "code": "6147",
    "name": "頎邦",
    "categories": [
      "Top100",
      "ValueTop",
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy"
    ],
    "price": 163.5,
    "prevClose": 168.5,
    "open": 168.5,
    "high": 171.0,
    "low": 163.0,
    "volume": 23410,
    "ma5": 162.1,
    "ma10": 158.2,
    "ma20": 152.72,
    "ma60": 205.3,
    "vMa5": 27009,
    "vMa10": 25088,
    "high20d": 190.0,
    "sparkline": [
      158.5,
      151.0,
      146.5,
      154.0,
      161.5,
      156.5,
      164.5,
      157.5,
      168.5,
      163.5
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
        "open": 160.5,
        "high": 163.0,
        "low": 156.0,
        "close": 156.5,
        "volume": 26263,
        "ma5": 153.9,
        "ma10": 145.65
      },
      {
        "open": 159.0,
        "high": 171.0,
        "low": 159.0,
        "close": 164.5,
        "volume": 31394,
        "ma5": 156.6,
        "ma10": 150.25
      },
      {
        "open": 165.0,
        "high": 166.0,
        "low": 157.5,
        "close": 157.5,
        "volume": 21366,
        "ma5": 158.8,
        "ma10": 153.0
      },
      {
        "open": 158.5,
        "high": 171.0,
        "low": 155.5,
        "close": 168.5,
        "volume": 32613,
        "ma5": 161.7,
        "ma10": 156.3
      },
      {
        "open": 168.5,
        "high": 171.0,
        "low": 163.0,
        "close": 163.5,
        "volume": 23410,
        "ma5": 162.1,
        "ma10": 158.2
      }
    ],
    "symbol": "6147.TWO",
    "maxVol10d": 32613,
    "hasVolumeBurst": false,
    "kd": {
      "k": 77.8,
      "d": 76.7,
      "prevK": 80.8,
      "prevD": 76.2,
      "h8": 171.0,
      "l8": 144.5
    }
  },
  {
    "code": "6173",
    "name": "信昌電",
    "categories": [
      "Top100",
      "SitcaBuy",
      "TurnoverRate",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 194.5,
    "prevClose": 211.0,
    "open": 207.5,
    "high": 215.5,
    "low": 191.0,
    "volume": 12028,
    "ma5": 208.5,
    "ma10": 189.0,
    "ma20": 175.47,
    "ma60": 232.33,
    "vMa5": 22301,
    "vMa10": 16042,
    "high20d": 230.0,
    "sparkline": [
      165.0,
      171.0,
      158.0,
      168.5,
      185.0,
      203.5,
      223.5,
      210.0,
      211.0,
      194.5
    ],
    "high5d": 230.0,
    "high10d": 230.0,
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
        "open": 186.5,
        "high": 203.5,
        "low": 182.5,
        "close": 203.5,
        "volume": 26043,
        "ma5": 177.2,
        "ma10": 165.35
      },
      {
        "open": 207.5,
        "high": 223.5,
        "low": 203.5,
        "close": 223.5,
        "volume": 36396,
        "ma5": 187.7,
        "ma10": 174.45
      },
      {
        "open": 224.0,
        "high": 224.0,
        "low": 207.0,
        "close": 210.0,
        "volume": 18805,
        "ma5": 198.1,
        "ma10": 180.9
      },
      {
        "open": 210.0,
        "high": 230.0,
        "low": 201.5,
        "close": 211.0,
        "volume": 18234,
        "ma5": 206.6,
        "ma10": 186.0
      },
      {
        "open": 207.5,
        "high": 215.5,
        "low": 191.0,
        "close": 194.5,
        "volume": 12028,
        "ma5": 208.5,
        "ma10": 189.0
      }
    ],
    "symbol": "6173.TWO",
    "maxVol10d": 36396,
    "hasVolumeBurst": true,
    "kd": {
      "k": 72.7,
      "d": 77.5,
      "prevK": 82.5,
      "prevD": 79.9,
      "h8": 230.0,
      "l8": 154.0
    }
  },
  {
    "code": "5328",
    "name": "華容",
    "categories": [
      "Top100",
      "TurnoverRate"
    ],
    "price": 62.5,
    "prevClose": 65.1,
    "open": 65.5,
    "high": 67.0,
    "low": 61.9,
    "volume": 7435,
    "ma5": 66.16,
    "ma10": 64.89,
    "ma20": 64.61,
    "ma60": 59.02,
    "vMa5": 16789,
    "vMa10": 17012,
    "high20d": 73.0,
    "sparkline": [
      65.9,
      62.9,
      60.8,
      62.5,
      66.0,
      67.2,
      68.8,
      67.2,
      65.1,
      62.5
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
        "open": 66.7,
        "high": 67.2,
        "low": 65.0,
        "close": 67.2,
        "volume": 18994,
        "ma5": 63.88,
        "ma10": 64.12
      },
      {
        "open": 67.2,
        "high": 73.0,
        "low": 67.2,
        "close": 68.8,
        "volume": 36974,
        "ma5": 65.06,
        "ma10": 65.17
      },
      {
        "open": 69.0,
        "high": 69.3,
        "low": 65.1,
        "close": 67.2,
        "volume": 14837,
        "ma5": 66.34,
        "ma10": 65.51
      },
      {
        "open": 66.4,
        "high": 66.8,
        "low": 64.5,
        "close": 65.1,
        "volume": 5705,
        "ma5": 66.86,
        "ma10": 65.28
      },
      {
        "open": 65.5,
        "high": 67.0,
        "low": 61.9,
        "close": 62.5,
        "volume": 7435,
        "ma5": 66.16,
        "ma10": 64.89
      }
    ],
    "symbol": "5328.TWO",
    "maxVol10d": 36974,
    "hasVolumeBurst": true,
    "kd": {
      "k": 39.2,
      "d": 49.9,
      "prevK": 51.2,
      "prevD": 55.3,
      "h8": 73.0,
      "l8": 60.6
    }
  },
  {
    "code": "4979",
    "name": "華星光",
    "categories": [
      "SitcaBuy",
      "ValueTop",
      "MajorBuy",
      "SitcaBuy5D",
      "MajorBuy3D"
    ],
    "price": 528.0,
    "prevClose": 545.0,
    "open": 550.0,
    "high": 550.0,
    "low": 515.0,
    "volume": 2076,
    "ma5": 544.0,
    "ma10": 523.4,
    "ma20": 463.9,
    "ma60": 489.84,
    "vMa5": 10097,
    "vMa10": 9191,
    "high20d": 615.0,
    "sparkline": [
      492.0,
      488.0,
      488.0,
      536.0,
      510.0,
      561.0,
      564.0,
      522.0,
      545.0,
      528.0
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
        "open": 529.0,
        "high": 561.0,
        "low": 529.0,
        "close": 561.0,
        "volume": 17061,
        "ma5": 516.6,
        "ma10": 464.6
      },
      {
        "open": 579.0,
        "high": 615.0,
        "low": 560.0,
        "close": 564.0,
        "volume": 25944,
        "ma5": 531.8,
        "ma10": 486.35
      },
      {
        "open": 550.0,
        "high": 565.0,
        "low": 508.0,
        "close": 522.0,
        "volume": 3831,
        "ma5": 538.6,
        "ma10": 501.55
      },
      {
        "open": 540.0,
        "high": 545.0,
        "low": 521.0,
        "close": 545.0,
        "volume": 1573,
        "ma5": 540.4,
        "ma10": 515.35
      },
      {
        "open": 550.0,
        "high": 550.0,
        "low": 515.0,
        "close": 528.0,
        "volume": 2076,
        "ma5": 544.0,
        "ma10": 523.4
      }
    ],
    "symbol": "4979.TWO",
    "maxVol10d": 25944,
    "hasVolumeBurst": true,
    "kd": {
      "k": 57.5,
      "d": 70.0,
      "prevK": 66.7,
      "prevD": 76.2,
      "h8": 615.0,
      "l8": 472.5
    }
  },
  {
    "code": "5347",
    "name": "世界",
    "categories": [
      "Top100",
      "SitcaBuy",
      "MajorBuy",
      "ValueTop",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 155.0,
    "prevClose": 162.0,
    "open": 160.5,
    "high": 161.5,
    "low": 155.0,
    "volume": 14012,
    "ma5": 160.0,
    "ma10": 156.75,
    "ma20": 154.82,
    "ma60": 169.91,
    "vMa5": 15793,
    "vMa10": 22674,
    "high20d": 177.0,
    "sparkline": [
      157.0,
      151.5,
      143.5,
      157.5,
      158.0,
      159.5,
      163.0,
      160.5,
      162.0,
      155.0
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
        "open": 160.5,
        "high": 160.5,
        "low": 156.5,
        "close": 159.5,
        "volume": 15105,
        "ma5": 154.0,
        "ma10": 152.2
      },
      {
        "open": 163.0,
        "high": 166.0,
        "low": 162.0,
        "close": 163.0,
        "volume": 19107,
        "ma5": 156.3,
        "ma10": 154.7
      },
      {
        "open": 166.0,
        "high": 168.0,
        "low": 160.0,
        "close": 160.5,
        "volume": 22123,
        "ma5": 159.7,
        "ma10": 155.6
      },
      {
        "open": 160.5,
        "high": 163.0,
        "low": 158.0,
        "close": 162.0,
        "volume": 8617,
        "ma5": 160.6,
        "ma10": 156.7
      },
      {
        "open": 160.5,
        "high": 161.5,
        "low": 155.0,
        "close": 155.0,
        "volume": 14012,
        "ma5": 160.0,
        "ma10": 156.75
      }
    ],
    "symbol": "5347.TWO",
    "maxVol10d": 36909,
    "hasVolumeBurst": false,
    "kd": {
      "k": 64.6,
      "d": 65.4,
      "prevK": 72.0,
      "prevD": 65.8,
      "h8": 168.0,
      "l8": 142.0
    }
  },
  {
    "code": "4931",
    "name": "新盛力",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 259.5,
    "prevClose": 269.5,
    "open": 270.5,
    "high": 271.0,
    "low": 259.0,
    "volume": 1550,
    "ma5": 264.0,
    "ma10": 244.7,
    "ma20": 218.03,
    "ma60": 233.19,
    "vMa5": 4603,
    "vMa10": 7239,
    "high20d": 271.5,
    "sparkline": [
      199.0,
      218.5,
      216.5,
      238.0,
      255.0,
      267.0,
      261.0,
      263.0,
      269.5,
      259.5
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
        "open": 255.0,
        "high": 268.0,
        "low": 250.5,
        "close": 267.0,
        "volume": 15912,
        "ma5": 239.0,
        "ma10": 212.0
      },
      {
        "open": 271.0,
        "high": 271.5,
        "low": 261.0,
        "close": 261.0,
        "volume": 2250,
        "ma5": 247.5,
        "ma10": 221.95
      },
      {
        "open": 265.0,
        "high": 265.0,
        "low": 256.5,
        "close": 263.0,
        "volume": 1630,
        "ma5": 256.8,
        "ma10": 230.5
      },
      {
        "open": 267.0,
        "high": 270.0,
        "low": 264.0,
        "close": 269.5,
        "volume": 1672,
        "ma5": 263.1,
        "ma10": 238.35
      },
      {
        "open": 270.5,
        "high": 271.0,
        "low": 259.0,
        "close": 259.5,
        "volume": 1550,
        "ma5": 264.0,
        "ma10": 244.7
      }
    ],
    "symbol": "4931.TWO",
    "maxVol10d": 21294,
    "hasVolumeBurst": true,
    "kd": {
      "k": 89.4,
      "d": 87.7,
      "prevK": 92.2,
      "prevD": 86.9,
      "h8": 271.5,
      "l8": 197.0
    }
  },
  {
    "code": "3211",
    "name": "順達",
    "categories": [
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 382.5,
    "prevClose": 392.0,
    "open": 392.5,
    "high": 394.5,
    "low": 381.0,
    "volume": 2732,
    "ma5": 396.8,
    "ma10": 377.35,
    "ma20": 358.57,
    "ma60": 401.4,
    "vMa5": 7096,
    "vMa10": 9780,
    "high20d": 419.0,
    "sparkline": [
      324.5,
      356.5,
      338.5,
      370.0,
      400.0,
      412.0,
      406.5,
      391.0,
      392.0,
      382.5
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
        "open": 400.5,
        "high": 418.0,
        "low": 393.0,
        "close": 412.0,
        "volume": 13478,
        "ma5": 375.4,
        "ma10": 341.3
      },
      {
        "open": 417.0,
        "high": 419.0,
        "low": 405.0,
        "close": 406.5,
        "volume": 9258,
        "ma5": 385.4,
        "ma10": 353.4
      },
      {
        "open": 408.5,
        "high": 411.0,
        "low": 389.0,
        "close": 391.0,
        "volume": 6744,
        "ma5": 395.9,
        "ma10": 363.3
      },
      {
        "open": 393.5,
        "high": 396.0,
        "low": 382.0,
        "close": 392.0,
        "volume": 3268,
        "ma5": 400.3,
        "ma10": 371.6
      },
      {
        "open": 392.5,
        "high": 394.5,
        "low": 381.0,
        "close": 382.5,
        "volume": 2732,
        "ma5": 396.8,
        "ma10": 377.35
      }
    ],
    "symbol": "3211.TWO",
    "maxVol10d": 20458,
    "hasVolumeBurst": true,
    "kd": {
      "k": 73.4,
      "d": 75.6,
      "prevK": 78.9,
      "prevD": 76.7,
      "h8": 419.0,
      "l8": 322.0
    }
  },
  {
    "code": "00981B",
    "name": "第一金優選非投債",
    "categories": [
      "Top100"
    ],
    "price": 9.27,
    "prevClose": 9.29,
    "open": 9.28,
    "high": 9.28,
    "low": 9.24,
    "volume": 29014,
    "ma5": 9.31,
    "ma10": 9.32,
    "ma20": 9.3,
    "ma60": 9.25,
    "vMa5": 18700,
    "vMa10": 14730,
    "high20d": 9.36,
    "sparkline": [
      9.34,
      9.33,
      9.32,
      9.34,
      9.34,
      9.33,
      9.33,
      9.31,
      9.29,
      9.27
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
        "open": 9.35,
        "high": 9.35,
        "low": 9.32,
        "close": 9.33,
        "volume": 11577,
        "ma5": 9.33,
        "ma10": 9.32
      },
      {
        "open": 9.34,
        "high": 9.34,
        "low": 9.32,
        "close": 9.33,
        "volume": 8319,
        "ma5": 9.33,
        "ma10": 9.32
      },
      {
        "open": 9.34,
        "high": 9.34,
        "low": 9.31,
        "close": 9.31,
        "volume": 19278,
        "ma5": 9.33,
        "ma10": 9.33
      },
      {
        "open": 9.31,
        "high": 9.31,
        "low": 9.28,
        "close": 9.29,
        "volume": 25310,
        "ma5": 9.32,
        "ma10": 9.33
      },
      {
        "open": 9.28,
        "high": 9.28,
        "low": 9.24,
        "close": 9.27,
        "volume": 29014,
        "ma5": 9.31,
        "ma10": 9.32
      }
    ],
    "symbol": "00981B.TWO",
    "maxVol10d": 29014,
    "hasVolumeBurst": true,
    "kd": {
      "k": 33.5,
      "d": 47.6,
      "prevK": 36.6,
      "prevD": 54.6,
      "h8": 9.35,
      "l8": 9.28
    }
  },
  {
    "code": "4991",
    "name": "環宇-KY",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 485.0,
    "prevClose": 488.0,
    "open": 497.0,
    "high": 500.0,
    "low": 482.0,
    "volume": 1449,
    "ma5": 479.1,
    "ma10": 476.35,
    "ma20": 435.57,
    "ma60": 516.07,
    "vMa5": 4608,
    "vMa10": 4061,
    "high20d": 522.0,
    "sparkline": [
      469.0,
      442.0,
      465.0,
      511.0,
      481.0,
      484.5,
      478.0,
      460.0,
      488.0,
      485.0
    ],
    "high5d": 512.0,
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
        "open": 486.0,
        "high": 500.0,
        "low": 460.0,
        "close": 484.5,
        "volume": 11329,
        "ma5": 476.7,
        "ma10": 434.1
      },
      {
        "open": 503.0,
        "high": 512.0,
        "low": 478.0,
        "close": 478.0,
        "volume": 8508,
        "ma5": 483.9,
        "ma10": 449.8
      },
      {
        "open": 465.0,
        "high": 482.0,
        "low": 460.0,
        "close": 460.0,
        "volume": 911,
        "ma5": 482.9,
        "ma10": 460.5
      },
      {
        "open": 478.0,
        "high": 492.0,
        "low": 472.0,
        "close": 488.0,
        "volume": 841,
        "ma5": 478.3,
        "ma10": 470.5
      },
      {
        "open": 497.0,
        "high": 500.0,
        "low": 482.0,
        "close": 485.0,
        "volume": 1449,
        "ma5": 479.1,
        "ma10": 476.35
      }
    ],
    "symbol": "4991.TWO",
    "maxVol10d": 11329,
    "hasVolumeBurst": true,
    "kd": {
      "k": 64.6,
      "d": 68.7,
      "prevK": 65.4,
      "prevD": 70.8,
      "h8": 522.0,
      "l8": 422.5
    }
  },
  {
    "code": "8358",
    "name": "金居",
    "categories": [
      "Top100",
      "TurnoverRate",
      "ValueTop",
      "SitcaBuy",
      "SitcaBuy3D"
    ],
    "price": 416.0,
    "prevClose": 419.5,
    "open": 425.5,
    "high": 441.0,
    "low": 415.0,
    "volume": 33629,
    "ma5": 420.7,
    "ma10": 391.55,
    "ma20": 367.25,
    "ma60": 498.48,
    "vMa5": 31092,
    "vMa10": 29453,
    "high20d": 462.0,
    "sparkline": [
      349.5,
      384.0,
      352.0,
      346.0,
      380.5,
      418.5,
      421.0,
      428.5,
      419.5,
      416.0
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
        "open": 402.5,
        "high": 418.5,
        "low": 402.0,
        "close": 418.5,
        "volume": 10981,
        "ma5": 376.2,
        "ma10": 346.8
      },
      {
        "open": 445.0,
        "high": 445.0,
        "low": 417.0,
        "close": 421.0,
        "volume": 47566,
        "ma5": 383.6,
        "ma10": 361.8
      },
      {
        "open": 427.0,
        "high": 462.0,
        "low": 413.0,
        "close": 428.5,
        "volume": 44121,
        "ma5": 398.9,
        "ma10": 374.85
      },
      {
        "open": 430.5,
        "high": 434.0,
        "low": 418.5,
        "close": 419.5,
        "volume": 19161,
        "ma5": 413.6,
        "ma10": 384.05
      },
      {
        "open": 425.5,
        "high": 441.0,
        "low": 415.0,
        "close": 416.0,
        "volume": 33629,
        "ma5": 420.7,
        "ma10": 391.55
      }
    ],
    "symbol": "8358.TWO",
    "maxVol10d": 47566,
    "hasVolumeBurst": true,
    "kd": {
      "k": 70.3,
      "d": 72.4,
      "prevK": 74.6,
      "prevD": 73.5,
      "h8": 462.0,
      "l8": 341.5
    }
  },
  {
    "code": "3441",
    "name": "聯一光",
    "categories": [
      "Top100",
      "TurnoverRate",
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 86.2,
    "prevClose": 87.4,
    "open": 87.4,
    "high": 90.5,
    "low": 84.6,
    "volume": 12803,
    "ma5": 85.92,
    "ma10": 84.66,
    "ma20": 80.94,
    "ma60": 73.61,
    "vMa5": 12776,
    "vMa10": 13051,
    "high20d": 95.8,
    "sparkline": [
      85.4,
      88.4,
      84.4,
      79.5,
      79.3,
      87.2,
      85.0,
      83.8,
      87.4,
      86.2
    ],
    "high5d": 91.0,
    "high10d": 94.3,
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
        "open": 79.3,
        "high": 87.2,
        "low": 79.2,
        "close": 87.2,
        "volume": 10762,
        "ma5": 83.76,
        "ma10": 84.66
      },
      {
        "open": 87.4,
        "high": 88.7,
        "low": 85.0,
        "close": 85.0,
        "volume": 11442,
        "ma5": 83.08,
        "ma10": 85.52
      },
      {
        "open": 86.0,
        "high": 88.9,
        "low": 80.0,
        "close": 83.8,
        "volume": 10038,
        "ma5": 82.96,
        "ma10": 85.5
      },
      {
        "open": 83.0,
        "high": 91.0,
        "low": 82.6,
        "close": 87.4,
        "volume": 18835,
        "ma5": 84.54,
        "ma10": 85.0
      },
      {
        "open": 87.4,
        "high": 90.5,
        "low": 84.6,
        "close": 86.2,
        "volume": 12803,
        "ma5": 85.92,
        "ma10": 84.66
      }
    ],
    "symbol": "3441.TWO",
    "maxVol10d": 22424,
    "hasVolumeBurst": true,
    "kd": {
      "k": 47.4,
      "d": 46.8,
      "prevK": 45.8,
      "prevD": 46.5,
      "h8": 94.3,
      "l8": 77.9
    }
  },
  {
    "code": "3374",
    "name": "精材",
    "categories": [
      "Top100",
      "TurnoverRate",
      "ValueTop",
      "SitcaBuy",
      "SitcaBuy3D"
    ],
    "price": 306.5,
    "prevClose": 292.5,
    "open": 291.0,
    "high": 321.5,
    "low": 288.0,
    "volume": 26897,
    "ma5": 315.8,
    "ma10": 318.55,
    "ma20": 322.48,
    "ma60": 301.95,
    "vMa5": 16450,
    "vMa10": 14820,
    "high20d": 418.5,
    "sparkline": [
      313.0,
      316.0,
      306.5,
      337.0,
      334.0,
      330.0,
      325.0,
      325.0,
      292.5,
      306.5
    ],
    "high5d": 346.5,
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
        "open": 332.0,
        "high": 338.0,
        "low": 324.0,
        "close": 330.0,
        "volume": 10566,
        "ma5": 324.7,
        "ma10": 307.95
      },
      {
        "open": 333.5,
        "high": 341.0,
        "low": 324.5,
        "close": 325.0,
        "volume": 13473,
        "ma5": 326.5,
        "ma10": 315.25
      },
      {
        "open": 327.5,
        "high": 346.5,
        "low": 318.0,
        "close": 325.0,
        "volume": 18270,
        "ma5": 330.2,
        "ma10": 320.05
      },
      {
        "open": 299.5,
        "high": 301.0,
        "low": 292.5,
        "close": 292.5,
        "volume": 13045,
        "ma5": 321.3,
        "ma10": 318.85
      },
      {
        "open": 291.0,
        "high": 321.5,
        "low": 288.0,
        "close": 306.5,
        "volume": 26897,
        "ma5": 315.8,
        "ma10": 318.55
      }
    ],
    "symbol": "3374.TWO",
    "maxVol10d": 26897,
    "hasVolumeBurst": true,
    "kd": {
      "k": 36.3,
      "d": 47.9,
      "prevK": 39.9,
      "prevD": 53.7,
      "h8": 351.5,
      "l8": 292.5
    }
  },
  {
    "code": "8069",
    "name": "元太",
    "categories": [
      "Top100",
      "ValueTop",
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 157.5,
    "prevClose": 162.5,
    "open": 162.5,
    "high": 162.5,
    "low": 156.5,
    "volume": 9238,
    "ma5": 164.5,
    "ma10": 175.15,
    "ma20": 181.15,
    "ma60": 196.57,
    "vMa5": 12136,
    "vMa10": 13343,
    "high20d": 208.5,
    "sparkline": [
      195.5,
      196.0,
      196.0,
      176.5,
      165.0,
      166.0,
      171.0,
      165.5,
      162.5,
      157.5
    ],
    "high5d": 173.0,
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
        "open": 165.0,
        "high": 167.0,
        "low": 160.0,
        "close": 166.0,
        "volume": 8709,
        "ma5": 179.9,
        "ma10": 185.25
      },
      {
        "open": 167.5,
        "high": 173.0,
        "low": 164.0,
        "close": 171.0,
        "volume": 12682,
        "ma5": 174.9,
        "ma10": 184.15
      },
      {
        "open": 160.5,
        "high": 168.5,
        "low": 158.5,
        "close": 165.5,
        "volume": 19502,
        "ma5": 168.8,
        "ma10": 181.8
      },
      {
        "open": 164.0,
        "high": 165.0,
        "low": 161.0,
        "close": 162.5,
        "volume": 10548,
        "ma5": 166.0,
        "ma10": 179.15
      },
      {
        "open": 162.5,
        "high": 162.5,
        "low": 156.5,
        "close": 157.5,
        "volume": 9238,
        "ma5": 164.5,
        "ma10": 175.15
      }
    ],
    "symbol": "8069.TWO",
    "maxVol10d": 19502,
    "hasVolumeBurst": false,
    "kd": {
      "k": 11.8,
      "d": 21.3,
      "prevK": 16.7,
      "prevD": 26.0,
      "h8": 208.5,
      "l8": 158.5
    }
  },
  {
    "code": "5351",
    "name": "鈺創",
    "categories": [
      "Top100",
      "MajorBuy",
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy3D",
      "TurnoverRate"
    ],
    "price": 122.0,
    "prevClose": 135.5,
    "open": 138.0,
    "high": 141.0,
    "low": 122.0,
    "volume": 31440,
    "ma5": 128.3,
    "ma10": 117.85,
    "ma20": 98.85,
    "ma60": 92.79,
    "vMa5": 13238,
    "vMa10": 26348,
    "high20d": 141.0,
    "sparkline": [
      96.5,
      103.0,
      104.0,
      114.0,
      119.5,
      122.0,
      129.0,
      133.0,
      135.5,
      122.0
    ],
    "high5d": 141.0,
    "high10d": 141.0,
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
        "open": 124.5,
        "high": 124.5,
        "low": 120.5,
        "close": 122.0,
        "volume": 8528,
        "ma5": 112.5,
        "ma10": 96.55
      },
      {
        "open": 127.0,
        "high": 130.0,
        "low": 123.0,
        "close": 129.0,
        "volume": 8611,
        "ma5": 117.7,
        "ma10": 102.84
      },
      {
        "open": 131.0,
        "high": 138.0,
        "low": 128.0,
        "close": 133.0,
        "volume": 10988,
        "ma5": 123.5,
        "ma10": 108.87
      },
      {
        "open": 134.5,
        "high": 136.5,
        "low": 130.0,
        "close": 135.5,
        "volume": 6623,
        "ma5": 127.8,
        "ma10": 114.43
      },
      {
        "open": 138.0,
        "high": 141.0,
        "low": 122.0,
        "close": 122.0,
        "volume": 31440,
        "ma5": 128.3,
        "ma10": 117.85
      }
    ],
    "symbol": "5351.TWO",
    "maxVol10d": 59974,
    "hasVolumeBurst": true,
    "kd": {
      "k": 81.6,
      "d": 87.2,
      "prevK": 93.5,
      "prevD": 90.0,
      "h8": 138.0,
      "l8": 95.8
    }
  },
  {
    "code": "00687B",
    "name": "國泰20年美債",
    "categories": [
      "Top100"
    ],
    "price": 26.83,
    "prevClose": 27.12,
    "open": 26.86,
    "high": 26.87,
    "low": 26.81,
    "volume": 23360,
    "ma5": 27.23,
    "ma10": 27.41,
    "ma20": 27.6,
    "ma60": 27.85,
    "vMa5": 12333,
    "vMa10": 13510,
    "high20d": 28.15,
    "sparkline": [
      27.76,
      27.76,
      27.49,
      27.57,
      27.39,
      27.46,
      27.43,
      27.33,
      27.12,
      26.83
    ],
    "high5d": 27.48,
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
        "open": 27.43,
        "high": 27.48,
        "low": 27.41,
        "close": 27.46,
        "volume": 8062,
        "ma5": 27.53,
        "ma10": 27.58
      },
      {
        "open": 27.43,
        "high": 27.43,
        "low": 27.39,
        "close": 27.43,
        "volume": 8588,
        "ma5": 27.47,
        "ma10": 27.56
      },
      {
        "open": 27.44,
        "high": 27.46,
        "low": 27.32,
        "close": 27.33,
        "volume": 11002,
        "ma5": 27.44,
        "ma10": 27.52
      },
      {
        "open": 27.21,
        "high": 27.21,
        "low": 27.1,
        "close": 27.12,
        "volume": 10654,
        "ma5": 27.35,
        "ma10": 27.49
      },
      {
        "open": 26.86,
        "high": 26.87,
        "low": 26.81,
        "close": 26.83,
        "volume": 23360,
        "ma5": 27.23,
        "ma10": 27.41
      }
    ],
    "symbol": "00687B.TWO",
    "maxVol10d": 28712,
    "hasVolumeBurst": true,
    "kd": {
      "k": 8.5,
      "d": 15.7,
      "prevK": 11.7,
      "prevD": 19.4,
      "h8": 27.78,
      "l8": 27.1
    }
  },
  {
    "code": "3264",
    "name": "欣銓",
    "categories": [
      "SitcaBuy",
      "ValueTop",
      "MajorBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy3D"
    ],
    "price": 210.5,
    "prevClose": 219.0,
    "open": 219.0,
    "high": 220.5,
    "low": 210.0,
    "volume": 4165,
    "ma5": 220.4,
    "ma10": 216.5,
    "ma20": 204.35,
    "ma60": 219.44,
    "vMa5": 7956,
    "vMa10": 8924,
    "high20d": 238.0,
    "sparkline": [
      202.0,
      211.5,
      207.5,
      222.5,
      219.5,
      216.5,
      230.5,
      225.5,
      219.0,
      210.5
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
        "open": 221.0,
        "high": 225.5,
        "low": 216.0,
        "close": 216.5,
        "volume": 7612,
        "ma5": 215.5,
        "ma10": 199.85
      },
      {
        "open": 222.5,
        "high": 238.0,
        "low": 220.0,
        "close": 230.5,
        "volume": 16634,
        "ma5": 219.3,
        "ma10": 206.8
      },
      {
        "open": 232.0,
        "high": 232.5,
        "low": 224.0,
        "close": 225.5,
        "volume": 6348,
        "ma5": 222.9,
        "ma10": 211.65
      },
      {
        "open": 225.5,
        "high": 229.0,
        "low": 219.0,
        "close": 219.0,
        "volume": 5023,
        "ma5": 222.2,
        "ma10": 214.8
      },
      {
        "open": 219.0,
        "high": 220.5,
        "low": 210.0,
        "close": 210.5,
        "volume": 4165,
        "ma5": 220.4,
        "ma10": 216.5
      }
    ],
    "symbol": "3264.TWO",
    "maxVol10d": 16634,
    "hasVolumeBurst": true,
    "kd": {
      "k": 56.6,
      "d": 68.8,
      "prevK": 71.1,
      "prevD": 75.0,
      "h8": 238.0,
      "l8": 200.0
    }
  },
  {
    "code": "6265",
    "name": "方土昶",
    "categories": [
      "Top100",
      "MajorBuy",
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 58.8,
    "prevClose": 63.3,
    "open": 63.7,
    "high": 65.0,
    "low": 58.3,
    "volume": 10877,
    "ma5": 60.06,
    "ma10": 57.36,
    "ma20": 51.18,
    "ma60": 53.29,
    "vMa5": 11301,
    "vMa10": 8788,
    "high20d": 68.7,
    "sparkline": [
      51.3,
      54.7,
      55.4,
      55.8,
      56.1,
      56.8,
      58.9,
      62.5,
      63.3,
      58.8
    ],
    "high5d": 68.7,
    "high10d": 68.7,
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
        "open": 56.7,
        "high": 59.0,
        "low": 56.6,
        "close": 56.8,
        "volume": 7491,
        "ma5": 55.76,
        "ma10": 50.52
      },
      {
        "open": 57.2,
        "high": 59.9,
        "low": 57.0,
        "close": 58.9,
        "volume": 9091,
        "ma5": 56.6,
        "ma10": 52.55
      },
      {
        "open": 62.2,
        "high": 63.8,
        "low": 61.0,
        "close": 62.5,
        "volume": 14861,
        "ma5": 58.02,
        "ma10": 54.56
      },
      {
        "open": 65.8,
        "high": 68.7,
        "low": 62.9,
        "close": 63.3,
        "volume": 14185,
        "ma5": 59.52,
        "ma10": 56.41
      },
      {
        "open": 63.7,
        "high": 65.0,
        "low": 58.3,
        "close": 58.8,
        "volume": 10877,
        "ma5": 60.06,
        "ma10": 57.36
      }
    ],
    "symbol": "6265.TWO",
    "maxVol10d": 14861,
    "hasVolumeBurst": true,
    "kd": {
      "k": 70.6,
      "d": 79.7,
      "prevK": 83.6,
      "prevD": 84.3,
      "h8": 68.7,
      "l8": 50.8
    }
  },
  {
    "code": "00679B",
    "name": "元大美債20年",
    "categories": [
      "Top100",
      "ValueTop"
    ],
    "price": 25.8,
    "prevClose": 26.07,
    "open": 25.82,
    "high": 25.83,
    "low": 25.77,
    "volume": 30307,
    "ma5": 26.17,
    "ma10": 26.34,
    "ma20": 26.52,
    "ma60": 26.7,
    "vMa5": 19266,
    "vMa10": 20295,
    "high20d": 27.04,
    "sparkline": [
      26.67,
      26.66,
      26.41,
      26.49,
      26.32,
      26.39,
      26.35,
      26.26,
      26.07,
      25.8
    ],
    "high5d": 26.39,
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
        "open": 26.36,
        "high": 26.39,
        "low": 26.34,
        "close": 26.39,
        "volume": 7432,
        "ma5": 26.45,
        "ma10": 26.5
      },
      {
        "open": 26.36,
        "high": 26.36,
        "low": 26.32,
        "close": 26.35,
        "volume": 13559,
        "ma5": 26.39,
        "ma10": 26.48
      },
      {
        "open": 26.37,
        "high": 26.39,
        "low": 26.25,
        "close": 26.26,
        "volume": 21789,
        "ma5": 26.36,
        "ma10": 26.44
      },
      {
        "open": 26.14,
        "high": 26.15,
        "low": 26.03,
        "close": 26.07,
        "volume": 23242,
        "ma5": 26.28,
        "ma10": 26.41
      },
      {
        "open": 25.82,
        "high": 25.83,
        "low": 25.77,
        "close": 25.8,
        "volume": 30307,
        "ma5": 26.17,
        "ma10": 26.34
      }
    ],
    "symbol": "00679B.TWO",
    "maxVol10d": 47248,
    "hasVolumeBurst": true,
    "kd": {
      "k": 9.5,
      "d": 16.3,
      "prevK": 12.6,
      "prevD": 19.6,
      "h8": 26.67,
      "l8": 26.03
    }
  },
  {
    "code": "00933B",
    "name": "國泰10Y+金融債",
    "categories": [
      "Top100"
    ],
    "price": 15.53,
    "prevClose": 15.75,
    "open": 15.59,
    "high": 15.59,
    "low": 15.52,
    "volume": 19083,
    "ma5": 15.79,
    "ma10": 15.89,
    "ma20": 15.93,
    "ma60": 16.04,
    "vMa5": 13695,
    "vMa10": 10813,
    "high20d": 16.09,
    "sparkline": [
      16.05,
      16.03,
      15.95,
      15.97,
      15.91,
      15.91,
      15.9,
      15.86,
      15.75,
      15.53
    ],
    "high5d": 15.94,
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
        "open": 15.91,
        "high": 15.92,
        "low": 15.89,
        "close": 15.91,
        "volume": 6941,
        "ma5": 15.95,
        "ma10": 15.96
      },
      {
        "open": 15.91,
        "high": 15.94,
        "low": 15.88,
        "close": 15.9,
        "volume": 8590,
        "ma5": 15.93,
        "ma10": 15.96
      },
      {
        "open": 15.92,
        "high": 15.93,
        "low": 15.85,
        "close": 15.86,
        "volume": 12935,
        "ma5": 15.91,
        "ma10": 15.95
      },
      {
        "open": 15.8,
        "high": 15.82,
        "low": 15.73,
        "close": 15.75,
        "volume": 20924,
        "ma5": 15.87,
        "ma10": 15.93
      },
      {
        "open": 15.59,
        "high": 15.59,
        "low": 15.52,
        "close": 15.53,
        "volume": 19083,
        "ma5": 15.79,
        "ma10": 15.89
      }
    ],
    "symbol": "00933B.TWO",
    "maxVol10d": 20924,
    "hasVolumeBurst": true,
    "kd": {
      "k": 11.2,
      "d": 21.9,
      "prevK": 15.8,
      "prevD": 27.3,
      "h8": 16.04,
      "l8": 15.73
    }
  },
  {
    "code": "4541",
    "name": "晟田",
    "categories": [
      "Top100",
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 70.5,
    "prevClose": 72.7,
    "open": 72.3,
    "high": 75.4,
    "low": 70.4,
    "volume": 6324,
    "ma5": 72.0,
    "ma10": 68.73,
    "ma20": 66.45,
    "ma60": 58.35,
    "vMa5": 8703,
    "vMa10": 6056,
    "high20d": 81.6,
    "sparkline": [
      66.0,
      63.7,
      65.9,
      65.4,
      66.3,
      70.3,
      72.6,
      73.9,
      72.7,
      70.5
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
        "open": 66.5,
        "high": 71.5,
        "low": 65.1,
        "close": 70.3,
        "volume": 6383,
        "ma5": 66.32,
        "ma10": 63.75
      },
      {
        "open": 70.6,
        "high": 73.7,
        "low": 70.3,
        "close": 72.6,
        "volume": 5108,
        "ma5": 68.1,
        "ma10": 65.35
      },
      {
        "open": 72.7,
        "high": 76.0,
        "low": 69.4,
        "close": 73.9,
        "volume": 17577,
        "ma5": 69.7,
        "ma10": 66.74
      },
      {
        "open": 73.8,
        "high": 75.5,
        "low": 69.8,
        "close": 72.7,
        "volume": 8125,
        "ma5": 71.16,
        "ma10": 67.96
      },
      {
        "open": 72.3,
        "high": 75.4,
        "low": 70.4,
        "close": 70.5,
        "volume": 6324,
        "ma5": 72.0,
        "ma10": 68.73
      }
    ],
    "symbol": "4541.TWO",
    "maxVol10d": 17577,
    "hasVolumeBurst": true,
    "kd": {
      "k": 71.7,
      "d": 73.3,
      "prevK": 79.6,
      "prevD": 74.1,
      "h8": 76.0,
      "l8": 63.5
    }
  },
  {
    "code": "5371",
    "name": "中光電",
    "categories": [
      "Top100",
      "ValueTop"
    ],
    "price": 86.3,
    "prevClose": 89.3,
    "open": 88.4,
    "high": 91.2,
    "low": 86.3,
    "volume": 8927,
    "ma5": 87.7,
    "ma10": 87.19,
    "ma20": 82.49,
    "ma60": 80.75,
    "vMa5": 15726,
    "vMa10": 14696,
    "high20d": 93.6,
    "sparkline": [
      90.5,
      86.7,
      83.0,
      85.6,
      87.6,
      86.5,
      86.3,
      90.1,
      89.3,
      86.3
    ],
    "high5d": 93.6,
    "high10d": 93.6,
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
        "open": 86.9,
        "high": 86.9,
        "low": 84.3,
        "close": 86.5,
        "volume": 6349,
        "ma5": 85.88,
        "ma10": 82.0
      },
      {
        "open": 86.6,
        "high": 88.1,
        "low": 85.7,
        "close": 86.3,
        "volume": 6079,
        "ma5": 85.8,
        "ma10": 83.78
      },
      {
        "open": 86.0,
        "high": 92.6,
        "low": 85.4,
        "close": 90.1,
        "volume": 36523,
        "ma5": 87.22,
        "ma10": 85.42
      },
      {
        "open": 90.5,
        "high": 93.6,
        "low": 86.1,
        "close": 89.3,
        "volume": 20754,
        "ma5": 87.96,
        "ma10": 86.83
      },
      {
        "open": 88.4,
        "high": 91.2,
        "low": 86.3,
        "close": 86.3,
        "volume": 8927,
        "ma5": 87.7,
        "ma10": 87.19
      }
    ],
    "symbol": "5371.TWO",
    "maxVol10d": 36523,
    "hasVolumeBurst": true,
    "kd": {
      "k": 63.1,
      "d": 70.2,
      "prevK": 74.3,
      "prevD": 73.8,
      "h8": 93.6,
      "l8": 81.3
    }
  },
  {
    "code": "00888",
    "name": "永豐台灣ESG",
    "categories": [
      "Top100",
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 32.45,
    "prevClose": 33.02,
    "open": 33.28,
    "high": 33.29,
    "low": 32.43,
    "volume": 5580,
    "ma5": 32.9,
    "ma10": 32.56,
    "ma20": 32.18,
    "ma60": 34.67,
    "vMa5": 8099,
    "vMa10": 7241,
    "high20d": 35.95,
    "sparkline": [
      32.09,
      32.1,
      31.71,
      32.66,
      32.59,
      32.61,
      33.32,
      33.08,
      33.02,
      32.45
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
        "open": 32.79,
        "high": 32.85,
        "low": 32.51,
        "close": 32.61,
        "volume": 6244,
        "ma5": 32.33,
        "ma10": 31.65
      },
      {
        "open": 33.31,
        "high": 33.64,
        "low": 33.16,
        "close": 33.32,
        "volume": 12508,
        "ma5": 32.58,
        "ma10": 32.12
      },
      {
        "open": 33.53,
        "high": 33.63,
        "low": 32.97,
        "close": 33.08,
        "volume": 7008,
        "ma5": 32.85,
        "ma10": 32.28
      },
      {
        "open": 33.21,
        "high": 33.44,
        "low": 33.02,
        "close": 33.02,
        "volume": 9153,
        "ma5": 32.92,
        "ma10": 32.46
      },
      {
        "open": 33.28,
        "high": 33.29,
        "low": 32.43,
        "close": 32.45,
        "volume": 5580,
        "ma5": 32.9,
        "ma10": 32.56
      }
    ],
    "symbol": "00888.TWO",
    "maxVol10d": 12508,
    "hasVolumeBurst": true,
    "kd": {
      "k": 67.5,
      "d": 75.3,
      "prevK": 79.3,
      "prevD": 79.2,
      "h8": 33.64,
      "l8": 31.52
    }
  },
  {
    "code": "1815",
    "name": "富喬",
    "categories": [
      "Top100",
      "MajorBuy",
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy3D",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "TurnoverRate",
      "SitcaBuy"
    ],
    "price": 95.3,
    "prevClose": 96.5,
    "open": 98.5,
    "high": 105.5,
    "low": 94.9,
    "volume": 70352,
    "ma5": 92.64,
    "ma10": 89.76,
    "ma20": 80.82,
    "ma60": 92.42,
    "vMa5": 19890,
    "vMa10": 25936,
    "high20d": 105.5,
    "sparkline": [
      83.9,
      86.8,
      85.9,
      89.1,
      88.7,
      90.0,
      89.9,
      91.5,
      96.5,
      95.3
    ],
    "high5d": 105.5,
    "high10d": 105.5,
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
        "open": 89.3,
        "high": 90.9,
        "low": 89.3,
        "close": 90.0,
        "volume": 6156,
        "ma5": 88.1,
        "ma10": 80.4
      },
      {
        "open": 91.5,
        "high": 91.5,
        "low": 89.0,
        "close": 89.9,
        "volume": 3947,
        "ma5": 88.72,
        "ma10": 83.36
      },
      {
        "open": 90.5,
        "high": 91.5,
        "low": 89.4,
        "close": 91.5,
        "volume": 7660,
        "ma5": 89.84,
        "ma10": 85.88
      },
      {
        "open": 93.0,
        "high": 96.5,
        "low": 91.5,
        "close": 96.5,
        "volume": 11335,
        "ma5": 91.32,
        "ma10": 88.24
      },
      {
        "open": 98.5,
        "high": 105.5,
        "low": 94.9,
        "close": 95.3,
        "volume": 70352,
        "ma5": 92.64,
        "ma10": 89.76
      }
    ],
    "symbol": "1815.TWO",
    "maxVol10d": 70352,
    "hasVolumeBurst": true,
    "kd": {
      "k": 77.9,
      "d": 81.5,
      "prevK": 90.1,
      "prevD": 83.2,
      "h8": 96.5,
      "l8": 83.5
    }
  },
  {
    "code": "5425",
    "name": "台半",
    "categories": [
      "Top100",
      "ValueTop",
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "SitcaBuy"
    ],
    "price": 91.5,
    "prevClose": 89.9,
    "open": 91.2,
    "high": 97.9,
    "low": 88.9,
    "volume": 35729,
    "ma5": 88.48,
    "ma10": 86.36,
    "ma20": 83.04,
    "ma60": 102.21,
    "vMa5": 14508,
    "vMa10": 10987,
    "high20d": 97.9,
    "sparkline": [
      83.5,
      84.9,
      82.5,
      84.3,
      86.0,
      86.7,
      88.8,
      85.5,
      89.9,
      91.5
    ],
    "high5d": 97.9,
    "high10d": 97.9,
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
        "open": 86.1,
        "high": 87.3,
        "low": 85.1,
        "close": 86.7,
        "volume": 6011,
        "ma5": 84.88,
        "ma10": 81.02
      },
      {
        "open": 89.2,
        "high": 93.2,
        "low": 88.4,
        "close": 88.8,
        "volume": 14627,
        "ma5": 85.66,
        "ma10": 83.18
      },
      {
        "open": 89.7,
        "high": 89.7,
        "low": 84.8,
        "close": 85.5,
        "volume": 6589,
        "ma5": 86.26,
        "ma10": 84.42
      },
      {
        "open": 85.5,
        "high": 91.5,
        "low": 83.3,
        "close": 89.9,
        "volume": 9585,
        "ma5": 87.38,
        "ma10": 85.37
      },
      {
        "open": 91.2,
        "high": 97.9,
        "low": 88.9,
        "close": 91.5,
        "volume": 35729,
        "ma5": 88.48,
        "ma10": 86.36
      }
    ],
    "symbol": "5425.TWO",
    "maxVol10d": 35729,
    "hasVolumeBurst": true,
    "kd": {
      "k": 69.9,
      "d": 71.8,
      "prevK": 72.8,
      "prevD": 72.8,
      "h8": 93.2,
      "l8": 80.1
    }
  },
  {
    "code": "3624",
    "name": "光頡",
    "categories": [
      "TurnoverRate"
    ],
    "price": 84.8,
    "prevClose": 87.5,
    "open": 86.5,
    "high": 89.4,
    "low": 84.8,
    "volume": 3381,
    "ma5": 88.68,
    "ma10": 83.6,
    "ma20": 78.4,
    "ma60": 110.83,
    "vMa5": 6368,
    "vMa10": 5211,
    "high20d": 99.4,
    "sparkline": [
      74.8,
      75.6,
      74.8,
      82.2,
      85.2,
      86.5,
      95.1,
      89.5,
      87.5,
      84.8
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
        "open": 86.2,
        "high": 88.4,
        "low": 83.6,
        "close": 86.5,
        "volume": 5999,
        "ma5": 80.86,
        "ma10": 73.09
      },
      {
        "open": 88.5,
        "high": 95.1,
        "low": 88.5,
        "close": 95.1,
        "volume": 7584,
        "ma5": 84.76,
        "ma10": 76.91
      },
      {
        "open": 96.2,
        "high": 99.4,
        "low": 86.6,
        "close": 89.5,
        "volume": 11116,
        "ma5": 87.7,
        "ma10": 79.61
      },
      {
        "open": 87.9,
        "high": 89.9,
        "low": 85.0,
        "close": 87.5,
        "volume": 3761,
        "ma5": 88.76,
        "ma10": 81.92
      },
      {
        "open": 86.5,
        "high": 89.4,
        "low": 84.8,
        "close": 84.8,
        "volume": 3381,
        "ma5": 88.68,
        "ma10": 83.6
      }
    ],
    "symbol": "3624.TWO",
    "maxVol10d": 12192,
    "hasVolumeBurst": true,
    "kd": {
      "k": 66.1,
      "d": 72.9,
      "prevK": 75.2,
      "prevD": 76.3,
      "h8": 99.4,
      "l8": 71.3
    }
  },
  {
    "code": "4939",
    "name": "亞電",
    "categories": [
      "Top100",
      "TurnoverRate"
    ],
    "price": 60.1,
    "prevClose": 60.4,
    "open": 59.9,
    "high": 63.9,
    "low": 59.7,
    "volume": 10027,
    "ma5": 61.32,
    "ma10": 61.12,
    "ma20": 59.49,
    "ma60": 59.69,
    "vMa5": 10960,
    "vMa10": 12245,
    "high20d": 78.2,
    "sparkline": [
      59.4,
      61.4,
      60.8,
      61.3,
      61.7,
      60.8,
      63.9,
      61.4,
      60.4,
      60.1
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
        "open": 61.0,
        "high": 62.8,
        "low": 60.8,
        "close": 60.8,
        "volume": 5780,
        "ma5": 61.2,
        "ma10": 57.48
      },
      {
        "open": 61.1,
        "high": 64.9,
        "low": 61.1,
        "close": 63.9,
        "volume": 14427,
        "ma5": 61.7,
        "ma10": 59.22
      },
      {
        "open": 65.4,
        "high": 65.5,
        "low": 61.0,
        "close": 61.4,
        "volume": 19841,
        "ma5": 61.82,
        "ma10": 60.28
      },
      {
        "open": 61.0,
        "high": 62.4,
        "low": 59.1,
        "close": 60.4,
        "volume": 4725,
        "ma5": 61.64,
        "ma10": 60.74
      },
      {
        "open": 59.9,
        "high": 63.9,
        "low": 59.7,
        "close": 60.1,
        "volume": 10027,
        "ma5": 61.32,
        "ma10": 61.12
      }
    ],
    "symbol": "4939.TWO",
    "maxVol10d": 21750,
    "hasVolumeBurst": true,
    "kd": {
      "k": 38.5,
      "d": 52.6,
      "prevK": 51.5,
      "prevD": 59.6,
      "h8": 67.2,
      "l8": 59.1
    }
  },
  {
    "code": "4938",
    "name": "和碩",
    "categories": [
      "SitcaBuy",
      "MajorBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy3D"
    ],
    "price": 91.0,
    "prevClose": 90.3,
    "open": 89.9,
    "high": 91.0,
    "low": 87.4,
    "volume": 13131,
    "ma5": 92.46,
    "ma10": 90.54,
    "ma20": 87.9,
    "ma60": 86.63,
    "vMa5": 27747,
    "vMa10": 18441,
    "high5d": 100.5,
    "high10d": 100.5,
    "high20d": 100.5,
    "sparkline": [
      89.5,
      88.0,
      87.1,
      89.5,
      89.0,
      91.4,
      94.8,
      94.8,
      90.3,
      91.0
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
        "open": 88.9,
        "high": 91.5,
        "low": 88.9,
        "close": 91.4,
        "volume": 15483,
        "ma5": 89.0,
        "ma10": 87.44
      },
      {
        "open": 93.6,
        "high": 100.5,
        "low": 93.5,
        "close": 94.8,
        "volume": 66267,
        "ma5": 90.36,
        "ma10": 88.87
      },
      {
        "open": 95.3,
        "high": 97.0,
        "low": 93.7,
        "close": 94.8,
        "volume": 20837,
        "ma5": 91.9,
        "ma10": 89.91
      },
      {
        "open": 94.2,
        "high": 94.8,
        "low": 88.2,
        "close": 90.3,
        "volume": 23017,
        "ma5": 92.06,
        "ma10": 90.28
      },
      {
        "open": 89.9,
        "high": 91.0,
        "low": 87.4,
        "close": 91.0,
        "volume": 13131,
        "ma5": 92.46,
        "ma10": 90.54
      }
    ],
    "symbol": "4938.TW",
    "maxVol10d": 66267,
    "hasVolumeBurst": true,
    "kd": {
      "k": 54.0,
      "d": 65.0,
      "prevK": 61.0,
      "prevD": 70.6,
      "h8": 100.5,
      "l8": 84.7
    }
  },
  {
    "code": "2855",
    "name": "統一證",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 46.85,
    "prevClose": 46.6,
    "open": 46.6,
    "high": 46.95,
    "low": 46.35,
    "volume": 2682,
    "ma5": 47.14,
    "ma10": 46.32,
    "ma20": 44.84,
    "ma60": 48.16,
    "vMa5": 3731,
    "vMa10": 3868,
    "high5d": 48.5,
    "high10d": 48.5,
    "high20d": 48.5,
    "sparkline": [
      45.85,
      45.1,
      44.5,
      45.85,
      46.2,
      47.5,
      47.35,
      47.4,
      46.6,
      46.85
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
        "open": 46.4,
        "high": 48.0,
        "low": 46.4,
        "close": 47.5,
        "volume": 5868,
        "ma5": 45.83,
        "ma10": 44.73
      },
      {
        "open": 48.05,
        "high": 48.5,
        "low": 47.1,
        "close": 47.35,
        "volume": 3805,
        "ma5": 46.28,
        "ma10": 45.45
      },
      {
        "open": 47.5,
        "high": 48.35,
        "low": 47.2,
        "close": 47.4,
        "volume": 3266,
        "ma5": 46.86,
        "ma10": 45.86
      },
      {
        "open": 47.4,
        "high": 47.4,
        "low": 46.3,
        "close": 46.6,
        "volume": 3036,
        "ma5": 47.01,
        "ma10": 46.11
      },
      {
        "open": 46.6,
        "high": 46.95,
        "low": 46.35,
        "close": 46.85,
        "volume": 2682,
        "ma5": 47.14,
        "ma10": 46.32
      }
    ],
    "symbol": "2855.TW",
    "maxVol10d": 5868,
    "hasVolumeBurst": false,
    "kd": {
      "k": 70.0,
      "d": 75.4,
      "prevK": 73.6,
      "prevD": 78.0,
      "h8": 48.5,
      "l8": 44.05
    }
  },
  {
    "code": "6805",
    "name": "富世達",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 1960.0,
    "prevClose": 1925.0,
    "open": 1950.0,
    "high": 1995.0,
    "low": 1900.0,
    "volume": 2053,
    "ma5": 1871.0,
    "ma10": 1793.0,
    "ma20": 1594.5,
    "ma60": 1660.17,
    "vMa5": 1884,
    "vMa10": 2421,
    "high5d": 1995.0,
    "high10d": 1995.0,
    "high20d": 1995.0,
    "sparkline": [
      1600.0,
      1760.0,
      1670.0,
      1755.0,
      1790.0,
      1835.0,
      1830.0,
      1805.0,
      1925.0,
      1960.0
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
        "open": 1790.0,
        "high": 1860.0,
        "low": 1780.0,
        "close": 1835.0,
        "volume": 1819,
        "ma5": 1762.0,
        "ma10": 1605.0
      },
      {
        "open": 1850.0,
        "high": 1915.0,
        "low": 1825.0,
        "close": 1830.0,
        "volume": 2032,
        "ma5": 1776.0,
        "ma10": 1665.0
      },
      {
        "open": 1860.0,
        "high": 1895.0,
        "low": 1785.0,
        "close": 1805.0,
        "volume": 1132,
        "ma5": 1803.0,
        "ma10": 1710.5
      },
      {
        "open": 1795.0,
        "high": 1950.0,
        "low": 1785.0,
        "close": 1925.0,
        "volume": 2384,
        "ma5": 1837.0,
        "ma10": 1756.0
      },
      {
        "open": 1950.0,
        "high": 1995.0,
        "low": 1900.0,
        "close": 1960.0,
        "volume": 2053,
        "ma5": 1871.0,
        "ma10": 1793.0
      }
    ],
    "symbol": "6805.TW",
    "maxVol10d": 3185,
    "hasVolumeBurst": true,
    "kd": {
      "k": 87.8,
      "d": 85.7,
      "prevK": 86.6,
      "prevD": 84.7,
      "h8": 1950.0,
      "l8": 1635.0
    }
  },
  {
    "code": "00980A",
    "name": "主動野村臺灣優選",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 24.47,
    "prevClose": 24.98,
    "open": 25.08,
    "high": 25.16,
    "low": 24.46,
    "volume": 19744,
    "ma5": 25.05,
    "ma10": 24.43,
    "ma20": 23.05,
    "ma60": 23.71,
    "vMa5": 19451,
    "vMa10": 16576,
    "high5d": 25.7,
    "high10d": 25.7,
    "high20d": 25.7,
    "sparkline": [
      23.31,
      23.73,
      23.57,
      24.09,
      24.29,
      24.73,
      25.2,
      25.24,
      25.62,
      24.47
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
        "open": 24.55,
        "high": 24.75,
        "low": 24.49,
        "close": 24.73,
        "volume": 13100,
        "ma5": 24.08,
        "ma10": 22.95
      },
      {
        "open": 25.18,
        "high": 25.3,
        "low": 25.02,
        "close": 25.2,
        "volume": 23473,
        "ma5": 24.38,
        "ma10": 23.52
      },
      {
        "open": 25.5,
        "high": 25.54,
        "low": 25.17,
        "close": 25.24,
        "volume": 20783,
        "ma5": 24.71,
        "ma10": 23.89
      },
      {
        "open": 25.43,
        "high": 25.7,
        "low": 25.3,
        "close": 25.62,
        "volume": 20154,
        "ma5": 25.02,
        "ma10": 24.24
      },
      {
        "open": 25.08,
        "high": 25.16,
        "low": 24.46,
        "close": 24.47,
        "volume": 19744,
        "ma5": 25.05,
        "ma10": 24.43
      }
    ],
    "symbol": "00980A.TW",
    "maxVol10d": 23473,
    "hasVolumeBurst": true,
    "kd": {
      "k": 81.2,
      "d": 88.2,
      "prevK": 94.8,
      "prevD": 91.6,
      "h8": 25.7,
      "l8": 23.03
    }
  },
  {
    "code": "2542",
    "name": "興富發",
    "categories": [
      "SitcaBuy",
      "MajorBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy3D",
      "MajorBuy1D"
    ],
    "price": 47.75,
    "prevClose": 46.8,
    "open": 47.0,
    "high": 47.8,
    "low": 46.8,
    "volume": 16465,
    "ma5": 46.39,
    "ma10": 45.33,
    "ma20": 44.66,
    "ma60": 43.87,
    "vMa5": 12039,
    "vMa10": 8274,
    "high5d": 47.8,
    "high10d": 47.8,
    "high20d": 47.8,
    "sparkline": [
      44.05,
      44.1,
      44.3,
      44.35,
      44.55,
      44.8,
      46.4,
      46.2,
      46.8,
      47.75
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
        "open": 44.7,
        "high": 44.85,
        "low": 44.5,
        "close": 44.8,
        "volume": 6292,
        "ma5": 44.42,
        "ma10": 44.25
      },
      {
        "open": 45.0,
        "high": 46.4,
        "low": 44.9,
        "close": 46.4,
        "volume": 16696,
        "ma5": 44.88,
        "ma10": 44.45
      },
      {
        "open": 46.2,
        "high": 46.65,
        "low": 45.75,
        "close": 46.2,
        "volume": 9161,
        "ma5": 45.26,
        "ma10": 44.67
      },
      {
        "open": 46.0,
        "high": 46.95,
        "low": 45.8,
        "close": 46.8,
        "volume": 11584,
        "ma5": 45.75,
        "ma10": 44.97
      },
      {
        "open": 47.0,
        "high": 47.8,
        "low": 46.8,
        "close": 47.75,
        "volume": 16465,
        "ma5": 46.39,
        "ma10": 45.33
      }
    ],
    "symbol": "2542.TW",
    "maxVol10d": 16696,
    "hasVolumeBurst": true,
    "kd": {
      "k": 93.3,
      "d": 87.8,
      "prevK": 90.5,
      "prevD": 85.1,
      "h8": 46.95,
      "l8": 43.8
    }
  },
  {
    "code": "2633",
    "name": "台灣高鐵",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 25.9,
    "prevClose": 26.0,
    "open": 25.95,
    "high": 26.1,
    "low": 25.9,
    "volume": 2958,
    "ma5": 25.91,
    "ma10": 25.86,
    "ma20": 25.93,
    "ma60": 25.91,
    "vMa5": 4150,
    "vMa10": 4393,
    "high5d": 26.2,
    "high10d": 26.2,
    "high20d": 26.6,
    "sparkline": [
      25.9,
      25.8,
      25.8,
      25.9,
      25.7,
      25.8,
      25.95,
      25.9,
      26.0,
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
        "open": 25.8,
        "high": 25.85,
        "low": 25.75,
        "close": 25.8,
        "volume": 3205,
        "ma5": 25.8,
        "ma10": 25.89
      },
      {
        "open": 25.85,
        "high": 25.95,
        "low": 25.7,
        "close": 25.95,
        "volume": 4995,
        "ma5": 25.83,
        "ma10": 25.85
      },
      {
        "open": 25.95,
        "high": 25.95,
        "low": 25.8,
        "close": 25.9,
        "volume": 4147,
        "ma5": 25.85,
        "ma10": 25.84
      },
      {
        "open": 26.0,
        "high": 26.2,
        "low": 25.95,
        "close": 26.0,
        "volume": 5443,
        "ma5": 25.87,
        "ma10": 25.85
      },
      {
        "open": 25.95,
        "high": 26.1,
        "low": 25.9,
        "close": 25.9,
        "volume": 2958,
        "ma5": 25.91,
        "ma10": 25.86
      }
    ],
    "symbol": "2633.TW",
    "maxVol10d": 6992,
    "hasVolumeBurst": true,
    "kd": {
      "k": 52.7,
      "d": 44.7,
      "prevK": 54.1,
      "prevD": 40.8,
      "h8": 26.2,
      "l8": 25.6
    }
  },
  {
    "code": "3044",
    "name": "健鼎",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 488.5,
    "prevClose": 483.0,
    "open": 493.0,
    "high": 502.0,
    "low": 482.0,
    "volume": 3066,
    "ma5": 488.0,
    "ma10": 447.3,
    "ma20": 412.8,
    "ma60": 466.0,
    "vMa5": 5533,
    "vMa10": 4670,
    "high5d": 524.0,
    "high10d": 524.0,
    "high20d": 524.0,
    "sparkline": [
      398.5,
      397.5,
      394.0,
      401.5,
      441.5,
      485.5,
      495.0,
      488.0,
      483.0,
      488.5
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
        "open": 485.5,
        "high": 485.5,
        "low": 485.5,
        "close": 485.5,
        "volume": 2852,
        "ma5": 424.0,
        "ma10": 399.55
      },
      {
        "open": 502.0,
        "high": 524.0,
        "low": 485.5,
        "close": 495.0,
        "volume": 13891,
        "ma5": 443.5,
        "ma10": 414.85
      },
      {
        "open": 492.0,
        "high": 505.0,
        "low": 486.0,
        "close": 488.0,
        "volume": 5271,
        "ma5": 462.3,
        "ma10": 426.75
      },
      {
        "open": 481.0,
        "high": 491.0,
        "low": 480.0,
        "close": 483.0,
        "volume": 2584,
        "ma5": 478.6,
        "ma10": 437.65
      },
      {
        "open": 493.0,
        "high": 502.0,
        "low": 482.0,
        "close": 488.5,
        "volume": 3066,
        "ma5": 488.0,
        "ma10": 447.3
      }
    ],
    "symbol": "3044.TW",
    "maxVol10d": 13891,
    "hasVolumeBurst": true,
    "kd": {
      "k": 78.0,
      "d": 80.3,
      "prevK": 79.6,
      "prevD": 81.4,
      "h8": 524.0,
      "l8": 383.5
    }
  },
  {
    "code": "4915",
    "name": "致伸",
    "categories": [
      "SitcaBuy",
      "SitcaBuy5D"
    ],
    "price": 59.4,
    "prevClose": 60.5,
    "open": 60.6,
    "high": 60.7,
    "low": 59.4,
    "volume": 3281,
    "ma5": 60.38,
    "ma10": 60.77,
    "ma20": 62.72,
    "ma60": 68.72,
    "vMa5": 2651,
    "vMa10": 3741,
    "high5d": 61.1,
    "high10d": 64.6,
    "high20d": 67.0,
    "sparkline": [
      63.7,
      61.9,
      59.5,
      60.7,
      60.0,
      60.4,
      60.7,
      60.9,
      60.5,
      59.4
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
        "open": 60.1,
        "high": 60.8,
        "low": 59.9,
        "close": 60.4,
        "volume": 3142,
        "ma5": 60.5,
        "ma10": 62.34
      },
      {
        "open": 61.0,
        "high": 61.0,
        "low": 60.2,
        "close": 60.7,
        "volume": 3212,
        "ma5": 60.26,
        "ma10": 62.05
      },
      {
        "open": 60.8,
        "high": 61.1,
        "low": 60.2,
        "close": 60.9,
        "volume": 2032,
        "ma5": 60.54,
        "ma10": 61.6
      },
      {
        "open": 60.5,
        "high": 61.1,
        "low": 60.2,
        "close": 60.5,
        "volume": 1586,
        "ma5": 60.5,
        "ma10": 61.19
      },
      {
        "open": 60.6,
        "high": 60.7,
        "low": 59.4,
        "close": 59.4,
        "volume": 3281,
        "ma5": 60.38,
        "ma10": 60.77
      }
    ],
    "symbol": "4915.TW",
    "maxVol10d": 8650,
    "hasVolumeBurst": true,
    "kd": {
      "k": 17.5,
      "d": 20.7,
      "prevK": 23.6,
      "prevD": 22.3,
      "h8": 63.0,
      "l8": 59.2
    }
  },
  {
    "code": "8996",
    "name": "高力",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 1175.0,
    "prevClose": 1215.0,
    "open": 1265.0,
    "high": 1265.0,
    "low": 1165.0,
    "volume": 2312,
    "ma5": 1225.0,
    "ma10": 1148.0,
    "ma20": 1050.15,
    "ma60": 1196.03,
    "vMa5": 3553,
    "vMa10": 3579,
    "high5d": 1330.0,
    "high10d": 1330.0,
    "high20d": 1330.0,
    "sparkline": [
      1035.0,
      1135.0,
      1045.0,
      1075.0,
      1065.0,
      1170.0,
      1285.0,
      1280.0,
      1215.0,
      1175.0
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
        "open": 1070.0,
        "high": 1170.0,
        "low": 1065.0,
        "close": 1170.0,
        "volume": 2725,
        "ma5": 1098.0,
        "ma10": 1012.8
      },
      {
        "open": 1235.0,
        "high": 1285.0,
        "low": 1195.0,
        "close": 1285.0,
        "volume": 3838,
        "ma5": 1128.0,
        "ma10": 1063.5
      },
      {
        "open": 1325.0,
        "high": 1330.0,
        "low": 1245.0,
        "close": 1280.0,
        "volume": 6097,
        "ma5": 1175.0,
        "ma10": 1106.0
      },
      {
        "open": 1270.0,
        "high": 1290.0,
        "low": 1195.0,
        "close": 1215.0,
        "volume": 2794,
        "ma5": 1203.0,
        "ma10": 1133.5
      },
      {
        "open": 1265.0,
        "high": 1265.0,
        "low": 1165.0,
        "close": 1175.0,
        "volume": 2312,
        "ma5": 1225.0,
        "ma10": 1148.0
      }
    ],
    "symbol": "8996.TW",
    "maxVol10d": 6097,
    "hasVolumeBurst": true,
    "kd": {
      "k": 68.4,
      "d": 76.6,
      "prevK": 79.4,
      "prevD": 80.7,
      "h8": 1330.0,
      "l8": 1040.0
    }
  },
  {
    "code": "2903",
    "name": "遠百",
    "categories": [
      "SitcaBuy",
      "SitcaBuy5D"
    ],
    "price": 21.75,
    "prevClose": 21.6,
    "open": 21.6,
    "high": 21.8,
    "low": 21.55,
    "volume": 2066,
    "ma5": 21.75,
    "ma10": 21.85,
    "ma20": 22.05,
    "ma60": 22.51,
    "vMa5": 2952,
    "vMa10": 1966,
    "high5d": 22.1,
    "high10d": 22.15,
    "high20d": 22.7,
    "sparkline": [
      22.0,
      21.85,
      22.0,
      22.05,
      21.9,
      22.0,
      21.75,
      21.65,
      21.6,
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
    ],
    "k5d": [
      {
        "open": 22.05,
        "high": 22.1,
        "low": 21.9,
        "close": 22.0,
        "volume": 1290,
        "ma5": 21.96,
        "ma10": 22.09
      },
      {
        "open": 21.9,
        "high": 21.9,
        "low": 21.55,
        "close": 21.75,
        "volume": 7140,
        "ma5": 21.94,
        "ma10": 22.01
      },
      {
        "open": 21.75,
        "high": 21.8,
        "low": 21.55,
        "close": 21.65,
        "volume": 2526,
        "ma5": 21.87,
        "ma10": 21.96
      },
      {
        "open": 21.65,
        "high": 21.85,
        "low": 21.6,
        "close": 21.6,
        "volume": 1740,
        "ma5": 21.78,
        "ma10": 21.89
      },
      {
        "open": 21.6,
        "high": 21.8,
        "low": 21.55,
        "close": 21.75,
        "volume": 2066,
        "ma5": 21.75,
        "ma10": 21.85
      }
    ],
    "symbol": "2903.TW",
    "maxVol10d": 7140,
    "hasVolumeBurst": true,
    "kd": {
      "k": 22.3,
      "d": 20.5,
      "prevK": 15.2,
      "prevD": 19.6,
      "h8": 22.1,
      "l8": 21.55
    }
  },
  {
    "code": "2347",
    "name": "聯強",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 86.0,
    "prevClose": 88.8,
    "open": 88.4,
    "high": 88.5,
    "low": 86.0,
    "volume": 3644,
    "ma5": 89.76,
    "ma10": 91.69,
    "ma20": 90.34,
    "ma60": 89.79,
    "vMa5": 3972,
    "vMa10": 4580,
    "high5d": 93.5,
    "high10d": 98.3,
    "high20d": 98.3,
    "sparkline": [
      97.1,
      94.7,
      93.4,
      91.9,
      91.0,
      91.6,
      91.5,
      90.9,
      88.8,
      86.0
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
        "open": 91.0,
        "high": 93.5,
        "low": 91.0,
        "close": 91.6,
        "volume": 5762,
        "ma5": 92.52,
        "ma10": 92.5
      },
      {
        "open": 91.6,
        "high": 92.3,
        "low": 90.9,
        "close": 91.5,
        "volume": 3161,
        "ma5": 91.88,
        "ma10": 93.04
      },
      {
        "open": 91.8,
        "high": 92.0,
        "low": 89.8,
        "close": 90.9,
        "volume": 2934,
        "ma5": 91.38,
        "ma10": 92.76
      },
      {
        "open": 90.5,
        "high": 91.3,
        "low": 87.6,
        "close": 88.8,
        "volume": 4358,
        "ma5": 90.76,
        "ma10": 92.47
      },
      {
        "open": 88.4,
        "high": 88.5,
        "low": 86.0,
        "close": 86.0,
        "volume": 3644,
        "ma5": 89.76,
        "ma10": 91.69
      }
    ],
    "symbol": "2347.TW",
    "maxVol10d": 7185,
    "hasVolumeBurst": false,
    "kd": {
      "k": 17.6,
      "d": 33.4,
      "prevK": 26.4,
      "prevD": 41.3,
      "h8": 96.9,
      "l8": 87.6
    }
  },
  {
    "code": "009814",
    "name": "富邦標普500",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 11.44,
    "prevClose": 11.57,
    "open": 11.56,
    "high": 11.56,
    "low": 11.41,
    "volume": 680,
    "ma5": 11.55,
    "ma10": 11.57,
    "ma20": 11.39,
    "ma60": 11.17,
    "vMa5": 954,
    "vMa10": 885,
    "high5d": 11.65,
    "high10d": 11.66,
    "high20d": 11.66,
    "sparkline": [
      11.63,
      11.58,
      11.53,
      11.63,
      11.61,
      11.57,
      11.59,
      11.59,
      11.57,
      11.44
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
        "high": 11.6,
        "low": 11.55,
        "close": 11.57,
        "volume": 1283,
        "ma5": 11.58,
        "ma10": 11.46
      },
      {
        "open": 11.57,
        "high": 11.59,
        "low": 11.57,
        "close": 11.59,
        "volume": 967,
        "ma5": 11.59,
        "ma10": 11.51
      },
      {
        "open": 11.61,
        "high": 11.65,
        "low": 11.58,
        "close": 11.59,
        "volume": 598,
        "ma5": 11.6,
        "ma10": 11.55
      },
      {
        "open": 11.59,
        "high": 11.59,
        "low": 11.53,
        "close": 11.57,
        "volume": 1243,
        "ma5": 11.59,
        "ma10": 11.57
      },
      {
        "open": 11.56,
        "high": 11.56,
        "low": 11.41,
        "close": 11.44,
        "volume": 680,
        "ma5": 11.55,
        "ma10": 11.57
      }
    ],
    "symbol": "009814.TWO",
    "maxVol10d": 1343,
    "hasVolumeBurst": true,
    "kd": {
      "k": 47.9,
      "d": 67.3,
      "prevK": 65.6,
      "prevD": 76.9,
      "h8": 11.65,
      "l8": 11.52
    }
  },
  {
    "code": "00695B",
    "name": "富邦美債7-10",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 34.83,
    "prevClose": 35.1,
    "open": 35.0,
    "high": 35.0,
    "low": 34.8,
    "volume": 152,
    "ma5": 35.11,
    "ma10": 35.21,
    "ma20": 35.3,
    "ma60": 35.29,
    "vMa5": 515,
    "vMa10": 354,
    "high5d": 35.26,
    "high10d": 35.45,
    "high20d": 35.55,
    "sparkline": [
      35.41,
      35.4,
      35.23,
      35.32,
      35.19,
      35.24,
      35.23,
      35.16,
      35.1,
      34.83
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
        "open": 35.21,
        "high": 35.26,
        "low": 35.21,
        "close": 35.24,
        "volume": 884,
        "ma5": 35.28,
        "ma10": 35.33
      },
      {
        "open": 35.25,
        "high": 35.26,
        "low": 35.23,
        "close": 35.23,
        "volume": 74,
        "ma5": 35.24,
        "ma10": 35.32
      },
      {
        "open": 35.25,
        "high": 35.25,
        "low": 35.16,
        "close": 35.16,
        "volume": 175,
        "ma5": 35.23,
        "ma10": 35.29
      },
      {
        "open": 35.08,
        "high": 35.23,
        "low": 34.95,
        "close": 35.1,
        "volume": 1292,
        "ma5": 35.18,
        "ma10": 35.26
      },
      {
        "open": 35.0,
        "high": 35.0,
        "low": 34.8,
        "close": 34.83,
        "volume": 152,
        "ma5": 35.11,
        "ma10": 35.21
      }
    ],
    "symbol": "00695B.TWO",
    "maxVol10d": 1292,
    "hasVolumeBurst": true,
    "kd": {
      "k": 18.8,
      "d": 29.1,
      "prevK": 25.8,
      "prevD": 34.2,
      "h8": 35.41,
      "l8": 34.95
    }
  },
  {
    "code": "3081",
    "name": "聯亞",
    "categories": [
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy",
      "Top100",
      "TurnoverRate"
    ],
    "price": 2925.0,
    "prevClose": 2790.0,
    "open": 2850.0,
    "high": 3065.0,
    "low": 2775.0,
    "volume": 5617,
    "ma5": 2729.0,
    "ma10": 2550.0,
    "ma20": 2134.0,
    "ma60": 2061.04,
    "vMa5": 2216,
    "vMa10": 2590,
    "high5d": 3065.0,
    "high10d": 3065.0,
    "high20d": 3065.0,
    "sparkline": [
      2160.0,
      2375.0,
      2305.0,
      2535.0,
      2480.0,
      2725.0,
      2665.0,
      2540.0,
      2790.0,
      2925.0
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
        "open": 2560.0,
        "high": 2725.0,
        "low": 2560.0,
        "close": 2725.0,
        "volume": 1187,
        "ma5": 2484.0,
        "ma10": 2145.0
      },
      {
        "open": 2840.0,
        "high": 2845.0,
        "low": 2640.0,
        "close": 2665.0,
        "volume": 1677,
        "ma5": 2542.0,
        "ma10": 2263.0
      },
      {
        "open": 2700.0,
        "high": 2700.0,
        "low": 2470.0,
        "close": 2540.0,
        "volume": 1259,
        "ma5": 2589.0,
        "ma10": 2354.0
      },
      {
        "open": 2670.0,
        "high": 2790.0,
        "low": 2625.0,
        "close": 2790.0,
        "volume": 1342,
        "ma5": 2640.0,
        "ma10": 2454.0
      },
      {
        "open": 2850.0,
        "high": 3065.0,
        "low": 2775.0,
        "close": 2925.0,
        "volume": 5617,
        "ma5": 2729.0,
        "ma10": 2550.0
      }
    ],
    "symbol": "3081.TWO",
    "maxVol10d": 5704,
    "hasVolumeBurst": true,
    "kd": {
      "k": 84.7,
      "d": 84.8,
      "prevK": 85.0,
      "prevD": 84.8,
      "h8": 2845.0,
      "l8": 2180.0
    }
  },
  {
    "code": "6510",
    "name": "精測",
    "categories": [
      "ValueTop"
    ],
    "price": 2765.0,
    "prevClose": 2880.0,
    "open": 2955.0,
    "high": 2955.0,
    "low": 2710.0,
    "volume": 446,
    "ma5": 2856.0,
    "ma10": 2821.0,
    "ma20": 2699.75,
    "ma60": 3025.08,
    "vMa5": 584,
    "vMa10": 527,
    "high5d": 3100.0,
    "high10d": 3100.0,
    "high20d": 3100.0,
    "sparkline": [
      2755.0,
      2835.0,
      2695.0,
      2845.0,
      2800.0,
      2825.0,
      2820.0,
      2990.0,
      2880.0,
      2765.0
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
        "open": 2855.0,
        "high": 2950.0,
        "low": 2815.0,
        "close": 2825.0,
        "volume": 605,
        "ma5": 2800.0,
        "ma10": 2697.0
      },
      {
        "open": 2895.0,
        "high": 2925.0,
        "low": 2810.0,
        "close": 2820.0,
        "volume": 409,
        "ma5": 2797.0,
        "ma10": 2752.0
      },
      {
        "open": 2830.0,
        "high": 3100.0,
        "low": 2810.0,
        "close": 2990.0,
        "volume": 819,
        "ma5": 2856.0,
        "ma10": 2801.5
      },
      {
        "open": 3010.0,
        "high": 3010.0,
        "low": 2790.0,
        "close": 2880.0,
        "volume": 639,
        "ma5": 2863.0,
        "ma10": 2824.0
      },
      {
        "open": 2955.0,
        "high": 2955.0,
        "low": 2710.0,
        "close": 2765.0,
        "volume": 446,
        "ma5": 2856.0,
        "ma10": 2821.0
      }
    ],
    "symbol": "6510.TWO",
    "maxVol10d": 819,
    "hasVolumeBurst": false,
    "kd": {
      "k": 52.0,
      "d": 63.5,
      "prevK": 65.6,
      "prevD": 69.2,
      "h8": 3100.0,
      "l8": 2655.0
    }
  },
  {
    "code": "3529",
    "name": "力旺",
    "categories": [
      "ValueTop"
    ],
    "price": 2340.0,
    "prevClose": 2390.0,
    "open": 2440.0,
    "high": 2500.0,
    "low": 2335.0,
    "volume": 1875,
    "ma5": 2549.0,
    "ma10": 2625.5,
    "ma20": 2513.75,
    "ma60": 2837.67,
    "vMa5": 1131,
    "vMa10": 1094,
    "high5d": 2825.0,
    "high10d": 2995.0,
    "high20d": 2995.0,
    "sparkline": [
      2630.0,
      2660.0,
      2725.0,
      2835.0,
      2660.0,
      2660.0,
      2700.0,
      2655.0,
      2390.0,
      2340.0
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
        "open": 2660.0,
        "high": 2705.0,
        "low": 2635.0,
        "close": 2660.0,
        "volume": 546,
        "ma5": 2708.0,
        "ma10": 2590.0
      },
      {
        "open": 2675.0,
        "high": 2800.0,
        "low": 2630.0,
        "close": 2700.0,
        "volume": 1001,
        "ma5": 2716.0,
        "ma10": 2631.0
      },
      {
        "open": 2740.0,
        "high": 2825.0,
        "low": 2635.0,
        "close": 2655.0,
        "volume": 954,
        "ma5": 2702.0,
        "ma10": 2649.0
      },
      {
        "open": 2645.0,
        "high": 2685.0,
        "low": 2390.0,
        "close": 2390.0,
        "volume": 1281,
        "ma5": 2613.0,
        "ma10": 2649.0
      },
      {
        "open": 2440.0,
        "high": 2500.0,
        "low": 2335.0,
        "close": 2340.0,
        "volume": 1875,
        "ma5": 2549.0,
        "ma10": 2625.5
      }
    ],
    "symbol": "3529.TWO",
    "maxVol10d": 1875,
    "hasVolumeBurst": true,
    "kd": {
      "k": 25.5,
      "d": 45.5,
      "prevK": 37.9,
      "prevD": 55.5,
      "h8": 2995.0,
      "l8": 2390.0
    }
  },
  {
    "code": "5274",
    "name": "信驊",
    "categories": [
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 17055.0,
    "prevClose": 17020.0,
    "open": 16950.0,
    "high": 17450.0,
    "low": 16715.0,
    "volume": 178,
    "ma5": 17325.0,
    "ma10": 16872.0,
    "ma20": 15727.0,
    "ma60": 15523.39,
    "vMa5": 223,
    "vMa10": 215,
    "high5d": 18600.0,
    "high10d": 18600.0,
    "high20d": 18600.0,
    "sparkline": [
      16020.0,
      16750.0,
      16345.0,
      16540.0,
      16440.0,
      17370.0,
      17490.0,
      17690.0,
      17020.0,
      17055.0
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
        "open": 16450.0,
        "high": 17395.0,
        "low": 16450.0,
        "close": 17370.0,
        "volume": 252,
        "ma5": 16689.0,
        "ma10": 15867.0
      },
      {
        "open": 17920.0,
        "high": 18085.0,
        "low": 17010.0,
        "close": 17490.0,
        "volume": 310,
        "ma5": 16837.0,
        "ma10": 16295.5
      },
      {
        "open": 17990.0,
        "high": 18600.0,
        "low": 17690.0,
        "close": 17690.0,
        "volume": 246,
        "ma5": 17106.0,
        "ma10": 16612.0
      },
      {
        "open": 17380.0,
        "high": 17600.0,
        "low": 16980.0,
        "close": 17020.0,
        "volume": 127,
        "ma5": 17202.0,
        "ma10": 16716.5
      },
      {
        "open": 16950.0,
        "high": 17450.0,
        "low": 16715.0,
        "close": 17055.0,
        "volume": 178,
        "ma5": 17325.0,
        "ma10": 16872.0
      }
    ],
    "symbol": "5274.TWO",
    "maxVol10d": 318,
    "hasVolumeBurst": false,
    "kd": {
      "k": 59.8,
      "d": 71.8,
      "prevK": 68.7,
      "prevD": 77.8,
      "h8": 18600.0,
      "l8": 15930.0
    }
  },
  {
    "code": "3131",
    "name": "弘塑",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 2465.0,
    "prevClose": 2500.0,
    "open": 2500.0,
    "high": 2515.0,
    "low": 2435.0,
    "volume": 290,
    "ma5": 2538.0,
    "ma10": 2466.5,
    "ma20": 2532.25,
    "ma60": 3053.92,
    "vMa5": 534,
    "vMa10": 749,
    "high5d": 2730.0,
    "high10d": 2730.0,
    "high20d": 3225.0,
    "sparkline": [
      2345.0,
      2385.0,
      2385.0,
      2470.0,
      2390.0,
      2555.0,
      2635.0,
      2535.0,
      2500.0,
      2465.0
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
        "open": 2405.0,
        "high": 2570.0,
        "low": 2405.0,
        "close": 2555.0,
        "volume": 647,
        "ma5": 2437.0,
        "ma10": 2401.5
      },
      {
        "open": 2610.0,
        "high": 2730.0,
        "low": 2560.0,
        "close": 2635.0,
        "volume": 807,
        "ma5": 2487.0,
        "ma10": 2449.5
      },
      {
        "open": 2640.0,
        "high": 2675.0,
        "low": 2535.0,
        "close": 2535.0,
        "volume": 530,
        "ma5": 2517.0,
        "ma10": 2466.0
      },
      {
        "open": 2485.0,
        "high": 2535.0,
        "low": 2410.0,
        "close": 2500.0,
        "volume": 394,
        "ma5": 2523.0,
        "ma10": 2474.0
      },
      {
        "open": 2500.0,
        "high": 2515.0,
        "low": 2435.0,
        "close": 2465.0,
        "volume": 290,
        "ma5": 2538.0,
        "ma10": 2466.5
      }
    ],
    "symbol": "3131.TWO",
    "maxVol10d": 1388,
    "hasVolumeBurst": true,
    "kd": {
      "k": 58.9,
      "d": 59.2,
      "prevK": 62.9,
      "prevD": 59.3,
      "h8": 2730.0,
      "l8": 2190.0
    }
  },
  {
    "code": "4123",
    "name": "晟德",
    "categories": [
      "SitcaBuy",
      "SitcaBuy5D"
    ],
    "price": 31.95,
    "prevClose": 31.85,
    "open": 31.7,
    "high": 31.95,
    "low": 31.65,
    "volume": 1312,
    "ma5": 32.59,
    "ma10": 34.91,
    "ma20": 35.65,
    "ma60": 36.04,
    "vMa5": 5181,
    "vMa10": 3813,
    "high5d": 33.43,
    "high10d": 37.53,
    "high20d": 37.62,
    "sparkline": [
      37.29,
      36.91,
      37.24,
      37.53,
      37.15,
      33.43,
      33.05,
      32.67,
      31.85,
      31.95
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
        "open": 33.43,
        "high": 33.43,
        "low": 33.43,
        "close": 33.43,
        "volume": 3989,
        "ma5": 36.45,
        "ma10": 36.49
      },
      {
        "open": 32.48,
        "high": 33.24,
        "low": 32.24,
        "close": 33.05,
        "volume": 10913,
        "ma5": 35.68,
        "ma10": 36.23
      },
      {
        "open": 32.81,
        "high": 32.91,
        "low": 32.24,
        "close": 32.67,
        "volume": 5779,
        "ma5": 34.77,
        "ma10": 35.9
      },
      {
        "open": 31.85,
        "high": 32.2,
        "low": 31.65,
        "close": 31.85,
        "volume": 3914,
        "ma5": 33.63,
        "ma10": 35.42
      },
      {
        "open": 31.7,
        "high": 31.95,
        "low": 31.65,
        "close": 31.95,
        "volume": 1312,
        "ma5": 32.59,
        "ma10": 34.91
      }
    ],
    "symbol": "4123.TWO",
    "maxVol10d": 10913,
    "hasVolumeBurst": true,
    "kd": {
      "k": 15.7,
      "d": 31.7,
      "prevK": 20.9,
      "prevD": 39.8,
      "h8": 37.53,
      "l8": 31.65
    }
  },
  {
    "code": "6121",
    "name": "新普",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 397.5,
    "prevClose": 409.0,
    "open": 411.0,
    "high": 411.0,
    "low": 394.5,
    "volume": 877,
    "ma5": 416.3,
    "ma10": 403.7,
    "ma20": 384.73,
    "ma60": 400.83,
    "vMa5": 975,
    "vMa10": 1091,
    "high5d": 440.0,
    "high10d": 440.0,
    "high20d": 440.0,
    "sparkline": [
      372.5,
      380.5,
      373.0,
      395.0,
      434.5,
      431.5,
      431.5,
      412.0,
      409.0,
      397.5
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
        "open": 427.0,
        "high": 440.0,
        "low": 425.0,
        "close": 431.5,
        "volume": 1387,
        "ma5": 402.9,
        "ma10": 381.85
      },
      {
        "open": 435.0,
        "high": 440.0,
        "low": 424.5,
        "close": 431.5,
        "volume": 796,
        "ma5": 413.1,
        "ma10": 390.35
      },
      {
        "open": 431.5,
        "high": 432.0,
        "low": 410.0,
        "close": 412.0,
        "volume": 1213,
        "ma5": 420.9,
        "ma10": 396.3
      },
      {
        "open": 419.0,
        "high": 420.0,
        "low": 405.0,
        "close": 409.0,
        "volume": 600,
        "ma5": 423.7,
        "ma10": 400.95
      },
      {
        "open": 411.0,
        "high": 411.0,
        "low": 394.5,
        "close": 397.5,
        "volume": 877,
        "ma5": 416.3,
        "ma10": 403.7
      }
    ],
    "symbol": "6121.TWO",
    "maxVol10d": 2550,
    "hasVolumeBurst": true,
    "kd": {
      "k": 61.3,
      "d": 72.0,
      "prevK": 72.3,
      "prevD": 77.3,
      "h8": 440.0,
      "l8": 370.0
    }
  },
  {
    "code": "3491",
    "name": "昇達科",
    "categories": [
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 1250.0,
    "prevClose": 1330.0,
    "open": 1335.0,
    "high": 1370.0,
    "low": 1235.0,
    "volume": 1368,
    "ma5": 1324.0,
    "ma10": 1300.0,
    "ma20": 1209.35,
    "ma60": 1431.28,
    "vMa5": 1660,
    "vMa10": 1800,
    "high5d": 1450.0,
    "high10d": 1450.0,
    "high20d": 1450.0,
    "sparkline": [
      1285.0,
      1350.0,
      1235.0,
      1235.0,
      1275.0,
      1320.0,
      1345.0,
      1375.0,
      1330.0,
      1250.0
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
        "open": 1250.0,
        "high": 1350.0,
        "low": 1250.0,
        "close": 1320.0,
        "volume": 1110,
        "ma5": 1283.0,
        "ma10": 1182.7
      },
      {
        "open": 1360.0,
        "high": 1440.0,
        "low": 1325.0,
        "close": 1345.0,
        "volume": 2084,
        "ma5": 1282.0,
        "ma10": 1224.9
      },
      {
        "open": 1385.0,
        "high": 1450.0,
        "low": 1350.0,
        "close": 1375.0,
        "volume": 2488,
        "ma5": 1310.0,
        "ma10": 1265.5
      },
      {
        "open": 1375.0,
        "high": 1375.0,
        "low": 1310.0,
        "close": 1330.0,
        "volume": 1251,
        "ma5": 1329.0,
        "ma10": 1292.0
      },
      {
        "open": 1335.0,
        "high": 1370.0,
        "low": 1235.0,
        "close": 1250.0,
        "volume": 1368,
        "ma5": 1324.0,
        "ma10": 1300.0
      }
    ],
    "symbol": "3491.TWO",
    "maxVol10d": 3380,
    "hasVolumeBurst": false,
    "kd": {
      "k": 49.9,
      "d": 63.5,
      "prevK": 67.4,
      "prevD": 70.4,
      "h8": 1450.0,
      "l8": 1215.0
    }
  },
  {
    "code": "3293",
    "name": "鈊象",
    "categories": [
      "ValueTop"
    ],
    "price": 742.0,
    "prevClose": 731.0,
    "open": 728.0,
    "high": 742.0,
    "low": 721.0,
    "volume": 1506,
    "ma5": 753.2,
    "ma10": 772.2,
    "ma20": 755.45,
    "ma60": 759.48,
    "vMa5": 1620,
    "vMa10": 1565,
    "high5d": 806.0,
    "high10d": 806.0,
    "high20d": 806.0,
    "sparkline": [
      777.0,
      784.0,
      799.0,
      792.0,
      804.0,
      781.0,
      762.0,
      750.0,
      731.0,
      742.0
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
        "open": 806.0,
        "high": 806.0,
        "low": 778.0,
        "close": 781.0,
        "volume": 1553,
        "ma5": 792.0,
        "ma10": 780.7
      },
      {
        "open": 772.0,
        "high": 777.0,
        "low": 750.0,
        "close": 762.0,
        "volume": 2181,
        "ma5": 787.6,
        "ma10": 782.0
      },
      {
        "open": 762.0,
        "high": 765.0,
        "low": 750.0,
        "close": 750.0,
        "volume": 1147,
        "ma5": 777.8,
        "ma10": 779.4
      },
      {
        "open": 750.0,
        "high": 750.0,
        "low": 728.0,
        "close": 731.0,
        "volume": 1711,
        "ma5": 765.6,
        "ma10": 775.4
      },
      {
        "open": 728.0,
        "high": 742.0,
        "low": 721.0,
        "close": 742.0,
        "volume": 1506,
        "ma5": 753.2,
        "ma10": 772.2
      }
    ],
    "symbol": "3293.TWO",
    "maxVol10d": 2526,
    "hasVolumeBurst": true,
    "kd": {
      "k": 26.4,
      "d": 42.6,
      "prevK": 27.3,
      "prevD": 50.7,
      "h8": 806.0,
      "l8": 728.0
    }
  },
  {
    "code": "8436",
    "name": "大江",
    "categories": [
      "SitcaBuy",
      "SitcaBuy5D"
    ],
    "price": 124.5,
    "prevClose": 123.0,
    "open": 123.0,
    "high": 126.0,
    "low": 122.0,
    "volume": 843,
    "ma5": 122.9,
    "ma10": 121.7,
    "ma20": 118.0,
    "ma60": 117.3,
    "vMa5": 857,
    "vMa10": 1115,
    "high5d": 126.0,
    "high10d": 127.5,
    "high20d": 127.5,
    "sparkline": [
      114.5,
      119.5,
      117.0,
      125.5,
      126.0,
      124.5,
      122.5,
      120.0,
      123.0,
      124.5
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
        "open": 126.0,
        "high": 126.0,
        "low": 122.5,
        "close": 124.5,
        "volume": 982,
        "ma5": 122.5,
        "ma10": 117.85
      },
      {
        "open": 124.0,
        "high": 124.0,
        "low": 121.5,
        "close": 122.5,
        "volume": 783,
        "ma5": 123.1,
        "ma10": 118.9
      },
      {
        "open": 123.5,
        "high": 123.5,
        "low": 119.5,
        "close": 120.0,
        "volume": 721,
        "ma5": 123.7,
        "ma10": 119.6
      },
      {
        "open": 120.0,
        "high": 123.0,
        "low": 118.0,
        "close": 123.0,
        "volume": 957,
        "ma5": 123.2,
        "ma10": 120.6
      },
      {
        "open": 123.0,
        "high": 126.0,
        "low": 122.0,
        "close": 124.5,
        "volume": 843,
        "ma5": 122.9,
        "ma10": 121.7
      }
    ],
    "symbol": "8436.TWO",
    "maxVol10d": 2839,
    "hasVolumeBurst": true,
    "kd": {
      "k": 69.6,
      "d": 68.1,
      "prevK": 66.0,
      "prevD": 67.3,
      "h8": 127.5,
      "l8": 114.5
    }
  },
  {
    "code": "6274",
    "name": "台燿",
    "categories": [
      "Top100",
      "ValueTop"
    ],
    "price": 1545.0,
    "prevClose": 1600.0,
    "open": 1620.0,
    "high": 1640.0,
    "low": 1515.0,
    "volume": 7091,
    "ma5": 1604.0,
    "ma10": 1552.5,
    "ma20": 1377.5,
    "ma60": 1513.42,
    "vMa5": 4307,
    "vMa10": 5480,
    "high5d": 1730.0,
    "high10d": 1730.0,
    "high20d": 1730.0,
    "sparkline": [
      1470.0,
      1530.0,
      1440.0,
      1460.0,
      1605.0,
      1600.0,
      1600.0,
      1675.0,
      1600.0,
      1545.0
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
        "open": 1580.0,
        "high": 1645.0,
        "low": 1580.0,
        "close": 1600.0,
        "volume": 2271,
        "ma5": 1527.0,
        "ma10": 1378.5
      },
      {
        "open": 1675.0,
        "high": 1675.0,
        "low": 1525.0,
        "close": 1600.0,
        "volume": 2760,
        "ma5": 1541.0,
        "ma10": 1437.5
      },
      {
        "open": 1620.0,
        "high": 1730.0,
        "low": 1600.0,
        "close": 1675.0,
        "volume": 3196,
        "ma5": 1588.0,
        "ma10": 1494.0
      },
      {
        "open": 1695.0,
        "high": 1695.0,
        "low": 1575.0,
        "close": 1600.0,
        "volume": 6217,
        "ma5": 1616.0,
        "ma10": 1532.0
      },
      {
        "open": 1620.0,
        "high": 1640.0,
        "low": 1515.0,
        "close": 1545.0,
        "volume": 7091,
        "ma5": 1604.0,
        "ma10": 1552.5
      }
    ],
    "symbol": "6274.TWO",
    "maxVol10d": 16305,
    "hasVolumeBurst": true,
    "kd": {
      "k": 69.8,
      "d": 78.7,
      "prevK": 80.0,
      "prevD": 83.2,
      "h8": 1730.0,
      "l8": 1365.0
    }
  },
  {
    "code": "00999A",
    "name": "主動野村臺灣高息",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 11.3,
    "prevClose": 11.42,
    "open": 11.42,
    "high": 11.46,
    "low": 11.27,
    "volume": 10725,
    "ma5": 11.24,
    "ma10": 11.02,
    "ma20": 10.57,
    "ma60": 10.78,
    "vMa5": 16812,
    "vMa10": 17974,
    "high5d": 11.46,
    "high10d": 11.46,
    "high20d": 11.46,
    "sparkline": [
      10.51,
      10.75,
      10.88,
      10.83,
      11.03,
      11.06,
      11.19,
      11.3,
      11.34,
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
    ],
    "k5d": [
      {
        "open": 11.0,
        "high": 11.07,
        "low": 10.93,
        "close": 11.06,
        "volume": 12823,
        "ma5": 10.91,
        "ma10": 10.44
      },
      {
        "open": 11.11,
        "high": 11.2,
        "low": 11.11,
        "close": 11.19,
        "volume": 20494,
        "ma5": 11.0,
        "ma10": 10.62
      },
      {
        "open": 11.33,
        "high": 11.35,
        "low": 11.23,
        "close": 11.3,
        "volume": 20878,
        "ma5": 11.08,
        "ma10": 10.81
      },
      {
        "open": 11.39,
        "high": 11.41,
        "low": 11.29,
        "close": 11.34,
        "volume": 19140,
        "ma5": 11.18,
        "ma10": 10.92
      },
      {
        "open": 11.42,
        "high": 11.46,
        "low": 11.27,
        "close": 11.3,
        "volume": 10725,
        "ma5": 11.24,
        "ma10": 11.02
      }
    ],
    "symbol": "00999A.TW",
    "maxVol10d": 26113,
    "hasVolumeBurst": false,
    "kd": {
      "k": 89.7,
      "d": 90.7,
      "prevK": 94.4,
      "prevD": 91.1,
      "h8": 11.41,
      "l8": 10.65
    }
  },
  {
    "code": "009821",
    "name": "野村稀土關鍵資源",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 14.96,
    "prevClose": 15.02,
    "open": 15.07,
    "high": 15.1,
    "low": 14.95,
    "volume": 8106,
    "ma5": 14.96,
    "ma10": 14.51,
    "ma20": 13.66,
    "ma60": 14.09,
    "vMa5": 15127,
    "vMa10": 14204,
    "high5d": 15.13,
    "high10d": 15.13,
    "high20d": 15.13,
    "sparkline": [
      13.19,
      13.71,
      14.12,
      14.34,
      14.91,
      15.07,
      15.05,
      14.98,
      14.76,
      14.96
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
        "open": 15.1,
        "high": 15.13,
        "low": 14.98,
        "close": 15.07,
        "volume": 23237,
        "ma5": 14.43,
        "ma10": 13.61
      },
      {
        "open": 15.07,
        "high": 15.09,
        "low": 14.99,
        "close": 15.05,
        "volume": 16820,
        "ma5": 14.7,
        "ma10": 13.86
      },
      {
        "open": 15.05,
        "high": 15.09,
        "low": 14.97,
        "close": 14.98,
        "volume": 15552,
        "ma5": 14.87,
        "ma10": 14.12
      },
      {
        "open": 14.87,
        "high": 14.87,
        "low": 14.68,
        "close": 14.76,
        "volume": 11918,
        "ma5": 14.95,
        "ma10": 14.3
      },
      {
        "open": 15.07,
        "high": 15.1,
        "low": 14.95,
        "close": 14.96,
        "volume": 8106,
        "ma5": 14.96,
        "ma10": 14.51
      }
    ],
    "symbol": "009821.TW",
    "maxVol10d": 25406,
    "hasVolumeBurst": true,
    "kd": {
      "k": 89.8,
      "d": 89.2,
      "prevK": 90.1,
      "prevD": 88.9,
      "h8": 15.13,
      "l8": 13.56
    }
  },
  {
    "code": "00940",
    "name": "元大台灣價值高息",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 12.35,
    "prevClose": 12.46,
    "open": 12.43,
    "high": 12.46,
    "low": 12.3,
    "volume": 9265,
    "ma5": 12.47,
    "ma10": 12.45,
    "ma20": 12.24,
    "ma60": 12.33,
    "vMa5": 10891,
    "vMa10": 14118,
    "high5d": 12.64,
    "high10d": 12.64,
    "high20d": 12.64,
    "sparkline": [
      12.47,
      12.45,
      12.4,
      12.44,
      12.34,
      12.43,
      12.56,
      12.49,
      12.54,
      12.35
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
        "open": 12.4,
        "high": 12.47,
        "low": 12.38,
        "close": 12.43,
        "volume": 14967,
        "ma5": 12.41,
        "ma10": 12.25
      },
      {
        "open": 12.59,
        "high": 12.64,
        "low": 12.52,
        "close": 12.56,
        "volume": 19588,
        "ma5": 12.43,
        "ma10": 12.35
      },
      {
        "open": 12.61,
        "high": 12.63,
        "low": 12.47,
        "close": 12.49,
        "volume": 10634,
        "ma5": 12.45,
        "ma10": 12.39
      },
      {
        "open": 12.54,
        "high": 12.54,
        "low": 12.54,
        "close": 12.54,
        "volume": 0,
        "ma5": 12.47,
        "ma10": 12.43
      },
      {
        "open": 12.43,
        "high": 12.46,
        "low": 12.3,
        "close": 12.35,
        "volume": 9265,
        "ma5": 12.47,
        "ma10": 12.45
      }
    ],
    "symbol": "00940.TW",
    "maxVol10d": 38123,
    "hasVolumeBurst": true,
    "kd": {
      "k": 58.4,
      "d": 72.4,
      "prevK": 77.8,
      "prevD": 79.5,
      "h8": 12.64,
      "l8": 12.28
    }
  },
  {
    "code": "0052",
    "name": "富邦科技",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 60.9,
    "prevClose": 61.8,
    "open": 61.85,
    "high": 61.9,
    "low": 60.85,
    "volume": 15243,
    "ma5": 61.71,
    "ma10": 61.19,
    "ma20": 59.75,
    "ma60": 60.99,
    "vMa5": 19369,
    "vMa10": 20790,
    "high5d": 62.8,
    "high10d": 62.8,
    "high20d": 62.8,
    "sparkline": [
      60.65,
      60.45,
      60.2,
      60.95,
      61.05,
      61.5,
      62.4,
      61.95,
      61.8,
      60.9
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
        "open": 61.3,
        "high": 61.65,
        "low": 61.1,
        "close": 61.5,
        "volume": 16610,
        "ma5": 60.83,
        "ma10": 59.66
      },
      {
        "open": 62.5,
        "high": 62.7,
        "low": 62.1,
        "close": 62.4,
        "volume": 19846,
        "ma5": 61.22,
        "ma10": 60.47
      },
      {
        "open": 62.7,
        "high": 62.8,
        "low": 61.85,
        "close": 61.95,
        "volume": 27647,
        "ma5": 61.57,
        "ma10": 60.7
      },
      {
        "open": 61.95,
        "high": 62.2,
        "low": 61.7,
        "close": 61.8,
        "volume": 17497,
        "ma5": 61.74,
        "ma10": 60.96
      },
      {
        "open": 61.85,
        "high": 61.9,
        "low": 60.85,
        "close": 60.9,
        "volume": 15243,
        "ma5": 61.71,
        "ma10": 61.19
      }
    ],
    "symbol": "0052.TW",
    "maxVol10d": 39603,
    "hasVolumeBurst": false,
    "kd": {
      "k": 67.6,
      "d": 79.1,
      "prevK": 81.6,
      "prevD": 84.8,
      "h8": 62.8,
      "l8": 59.65
    }
  },
  {
    "code": "009820",
    "name": "元大納斯達克精選",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 10.09,
    "prevClose": 10.23,
    "open": 10.2,
    "high": 10.2,
    "low": 10.07,
    "volume": 8062,
    "ma5": 10.12,
    "ma10": 10.02,
    "ma20": 9.81,
    "ma60": 10.0,
    "vMa5": 14707,
    "vMa10": 12982,
    "high5d": 10.31,
    "high10d": 10.31,
    "high20d": 10.31,
    "sparkline": [
      9.62,
      9.99,
      9.95,
      9.95,
      10.09,
      10.06,
      10.07,
      10.13,
      10.26,
      10.09
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
        "open": 10.06,
        "high": 10.08,
        "low": 10.05,
        "close": 10.06,
        "volume": 8711,
        "ma5": 10.01,
        "ma10": 9.67
      },
      {
        "open": 10.08,
        "high": 10.1,
        "low": 10.07,
        "close": 10.07,
        "volume": 13888,
        "ma5": 10.02,
        "ma10": 9.76
      },
      {
        "open": 10.14,
        "high": 10.15,
        "low": 10.11,
        "close": 10.13,
        "volume": 22542,
        "ma5": 10.06,
        "ma10": 9.88
      },
      {
        "open": 10.28,
        "high": 10.31,
        "low": 10.26,
        "close": 10.26,
        "volume": 20330,
        "ma5": 10.12,
        "ma10": 9.96
      },
      {
        "open": 10.2,
        "high": 10.2,
        "low": 10.07,
        "close": 10.09,
        "volume": 8062,
        "ma5": 10.12,
        "ma10": 10.02
      }
    ],
    "symbol": "009820.TW",
    "maxVol10d": 22542,
    "hasVolumeBurst": true,
    "kd": {
      "k": 77.4,
      "d": 84.0,
      "prevK": 93.0,
      "prevD": 87.3,
      "h8": 10.31,
      "l8": 9.9
    }
  },
  {
    "code": "3605",
    "name": "宏致",
    "categories": [
      "TurnoverRate"
    ],
    "price": 121.0,
    "prevClose": 131.5,
    "open": 133.0,
    "high": 133.0,
    "low": 119.5,
    "volume": 11770,
    "ma5": 127.2,
    "ma10": 117.3,
    "ma20": 102.19,
    "ma60": 87.51,
    "vMa5": 11946,
    "vMa10": 14176,
    "high5d": 137.5,
    "high10d": 137.5,
    "high20d": 137.5,
    "sparkline": [
      101.5,
      108.0,
      107.5,
      109.0,
      111.0,
      120.0,
      132.0,
      131.5,
      131.5,
      121.0
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
        "open": 111.0,
        "high": 120.0,
        "low": 111.0,
        "close": 120.0,
        "volume": 8285,
        "ma5": 111.1,
        "ma10": 99.11
      },
      {
        "open": 124.5,
        "high": 132.0,
        "low": 123.0,
        "close": 132.0,
        "volume": 13693,
        "ma5": 115.9,
        "ma10": 104.48
      },
      {
        "open": 134.0,
        "high": 137.5,
        "low": 128.0,
        "close": 131.5,
        "volume": 18699,
        "ma5": 120.7,
        "ma10": 109.73
      },
      {
        "open": 131.5,
        "high": 136.5,
        "low": 128.0,
        "close": 131.5,
        "volume": 7282,
        "ma5": 125.2,
        "ma10": 114.46
      },
      {
        "open": 133.0,
        "high": 133.0,
        "low": 119.5,
        "close": 121.0,
        "volume": 11770,
        "ma5": 127.2,
        "ma10": 117.3
      }
    ],
    "symbol": "3605.TW",
    "maxVol10d": 23186,
    "hasVolumeBurst": true,
    "kd": {
      "k": 79.1,
      "d": 84.5,
      "prevK": 89.5,
      "prevD": 87.2,
      "h8": 137.5,
      "l8": 98.0
    }
  },
  {
    "code": "00955",
    "name": "中信日本商社",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 15.33,
    "prevClose": 15.33,
    "open": 15.34,
    "high": 15.43,
    "low": 15.31,
    "volume": 2414,
    "ma5": 15.49,
    "ma10": 15.57,
    "ma20": 15.31,
    "ma60": 14.69,
    "vMa5": 3582,
    "vMa10": 4112,
    "high5d": 15.74,
    "high10d": 15.94,
    "high20d": 15.94,
    "sparkline": [
      15.3,
      15.61,
      15.8,
      15.81,
      15.77,
      15.58,
      15.64,
      15.55,
      15.33,
      15.33
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
        "open": 15.72,
        "high": 15.73,
        "low": 15.55,
        "close": 15.58,
        "volume": 5364,
        "ma5": 15.71,
        "ma10": 15.5
      },
      {
        "open": 15.66,
        "high": 15.67,
        "low": 15.55,
        "close": 15.64,
        "volume": 2623,
        "ma5": 15.72,
        "ma10": 15.57
      },
      {
        "open": 15.7,
        "high": 15.74,
        "low": 15.54,
        "close": 15.55,
        "volume": 3215,
        "ma5": 15.67,
        "ma10": 15.59
      },
      {
        "open": 15.55,
        "high": 15.55,
        "low": 15.29,
        "close": 15.33,
        "volume": 4295,
        "ma5": 15.57,
        "ma10": 15.58
      },
      {
        "open": 15.34,
        "high": 15.43,
        "low": 15.31,
        "close": 15.33,
        "volume": 2414,
        "ma5": 15.49,
        "ma10": 15.57
      }
    ],
    "symbol": "00955.TWO",
    "maxVol10d": 7582,
    "hasVolumeBurst": false,
    "kd": {
      "k": 31.2,
      "d": 53.2,
      "prevK": 43.7,
      "prevD": 64.1,
      "h8": 15.94,
      "l8": 15.29
    }
  },
  {
    "code": "6187",
    "name": "萬潤",
    "categories": [
      "SitcaBuy",
      "MajorBuy",
      "TurnoverRate",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 1260.0,
    "prevClose": 1385.0,
    "open": 1360.0,
    "high": 1360.0,
    "low": 1250.0,
    "volume": 4076,
    "ma5": 1269.0,
    "ma10": 1186.0,
    "ma20": 1081.9,
    "ma60": 1076.8,
    "vMa5": 4768,
    "vMa10": 4415,
    "high5d": 1400.0,
    "high10d": 1400.0,
    "high20d": 1400.0,
    "sparkline": [
      1070.0,
      1175.0,
      1130.0,
      1090.0,
      1050.0,
      1155.0,
      1270.0,
      1275.0,
      1385.0,
      1260.0
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
        "open": 1060.0,
        "high": 1155.0,
        "low": 1055.0,
        "close": 1155.0,
        "volume": 4336,
        "ma5": 1120.0,
        "ma10": 1053.9
      },
      {
        "open": 1190.0,
        "high": 1270.0,
        "low": 1185.0,
        "close": 1270.0,
        "volume": 5823,
        "ma5": 1139.0,
        "ma10": 1096.4
      },
      {
        "open": 1275.0,
        "high": 1320.0,
        "low": 1250.0,
        "close": 1275.0,
        "volume": 4494,
        "ma5": 1168.0,
        "ma10": 1131.0
      },
      {
        "open": 1275.0,
        "high": 1400.0,
        "low": 1265.0,
        "close": 1385.0,
        "volume": 5112,
        "ma5": 1227.0,
        "ma10": 1169.0
      },
      {
        "open": 1360.0,
        "high": 1360.0,
        "low": 1250.0,
        "close": 1260.0,
        "volume": 4076,
        "ma5": 1269.0,
        "ma10": 1186.0
      }
    ],
    "symbol": "6187.TWO",
    "maxVol10d": 5823,
    "hasVolumeBurst": true,
    "kd": {
      "k": 78.6,
      "d": 79.6,
      "prevK": 87.0,
      "prevD": 80.2,
      "h8": 1400.0,
      "l8": 1035.0
    }
  },
  {
    "code": "6538",
    "name": "倉和",
    "categories": [
      "MajorBuy",
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 192.0,
    "prevClose": 190.5,
    "open": 186.5,
    "high": 198.5,
    "low": 181.0,
    "volume": 2516,
    "ma5": 181.1,
    "ma10": 164.95,
    "ma20": 149.15,
    "ma60": 133.76,
    "vMa5": 3424,
    "vMa10": 2936,
    "high5d": 198.5,
    "high10d": 198.5,
    "high20d": 198.5,
    "sparkline": [
      156.5,
      150.0,
      145.0,
      145.5,
      147.0,
      161.5,
      177.5,
      184.0,
      190.5,
      192.0
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
        "open": 148.5,
        "high": 161.5,
        "low": 147.0,
        "close": 161.5,
        "volume": 2692,
        "ma5": 149.8,
        "ma10": 145.55
      },
      {
        "open": 177.5,
        "high": 177.5,
        "low": 174.0,
        "close": 177.5,
        "volume": 4021,
        "ma5": 155.3,
        "ma10": 150.45
      },
      {
        "open": 181.5,
        "high": 195.0,
        "low": 177.5,
        "close": 184.0,
        "volume": 5634,
        "ma5": 163.1,
        "ma10": 155.05
      },
      {
        "open": 187.0,
        "high": 193.0,
        "low": 181.0,
        "close": 190.5,
        "volume": 2257,
        "ma5": 172.1,
        "ma10": 160.6
      },
      {
        "open": 186.5,
        "high": 198.5,
        "low": 181.0,
        "close": 192.0,
        "volume": 2516,
        "ma5": 181.1,
        "ma10": 164.95
      }
    ],
    "symbol": "6538.TWO",
    "maxVol10d": 6417,
    "hasVolumeBurst": true,
    "kd": {
      "k": 87.2,
      "d": 83.1,
      "prevK": 86.4,
      "prevD": 81.0,
      "h8": 195.0,
      "l8": 140.5
    }
  },
  {
    "code": "3498",
    "name": "陽程",
    "categories": [
      "Top100",
      "MajorBuy",
      "TurnoverRate",
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 174.0,
    "prevClose": 158.5,
    "open": 158.5,
    "high": 174.0,
    "low": 153.5,
    "volume": 6597,
    "ma5": 153.1,
    "ma10": 135.55,
    "ma20": 118.62,
    "ma60": 123.67,
    "vMa5": 4919,
    "vMa10": 3359,
    "high5d": 174.0,
    "high10d": 174.0,
    "high20d": 174.0,
    "sparkline": [
      113.0,
      111.0,
      116.5,
      125.0,
      124.5,
      131.0,
      144.0,
      158.0,
      158.5,
      174.0
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
        "open": 126.0,
        "high": 133.0,
        "low": 124.5,
        "close": 131.0,
        "volume": 2161,
        "ma5": 121.6,
        "ma10": 109.98
      },
      {
        "open": 144.0,
        "high": 144.0,
        "low": 144.0,
        "close": 144.0,
        "volume": 1716,
        "ma5": 128.2,
        "ma10": 115.75
      },
      {
        "open": 154.0,
        "high": 158.0,
        "low": 154.0,
        "close": 158.0,
        "volume": 6201,
        "ma5": 136.5,
        "ma10": 122.55
      },
      {
        "open": 159.5,
        "high": 168.5,
        "low": 155.5,
        "close": 158.5,
        "volume": 7920,
        "ma5": 143.2,
        "ma10": 128.5
      },
      {
        "open": 158.5,
        "high": 174.0,
        "low": 153.5,
        "close": 174.0,
        "volume": 6597,
        "ma5": 153.1,
        "ma10": 135.55
      }
    ],
    "symbol": "3498.TWO",
    "maxVol10d": 7920,
    "hasVolumeBurst": true,
    "kd": {
      "k": 93.9,
      "d": 89.4,
      "prevK": 90.8,
      "prevD": 87.2,
      "h8": 168.5,
      "l8": 109.0
    }
  },
  {
    "code": "6548",
    "name": "長科*",
    "categories": [
      "MajorBuy",
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 72.4,
    "prevClose": 73.2,
    "open": 73.1,
    "high": 75.4,
    "low": 72.0,
    "volume": 3233,
    "ma5": 73.6,
    "ma10": 73.93,
    "ma20": 70.43,
    "ma60": 78.82,
    "vMa5": 2165,
    "vMa10": 2706,
    "high5d": 76.7,
    "high10d": 79.2,
    "high20d": 79.2,
    "sparkline": [
      74.4,
      74.2,
      72.4,
      75.7,
      74.6,
      75.3,
      74.5,
      72.6,
      73.2,
      72.4
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
        "open": 74.7,
        "high": 76.3,
        "low": 74.7,
        "close": 75.3,
        "volume": 1695,
        "ma5": 74.44,
        "ma10": 71.49
      },
      {
        "open": 76.1,
        "high": 76.7,
        "low": 74.3,
        "close": 74.5,
        "volume": 2075,
        "ma5": 74.5,
        "ma10": 73.03
      },
      {
        "open": 75.5,
        "high": 75.5,
        "low": 72.2,
        "close": 72.6,
        "volume": 2333,
        "ma5": 74.54,
        "ma10": 73.79
      },
      {
        "open": 72.6,
        "high": 73.5,
        "low": 71.5,
        "close": 73.2,
        "volume": 1489,
        "ma5": 74.04,
        "ma10": 74.09
      },
      {
        "open": 73.1,
        "high": 75.4,
        "low": 72.0,
        "close": 72.4,
        "volume": 3233,
        "ma5": 73.6,
        "ma10": 73.93
      }
    ],
    "symbol": "6548.TWO",
    "maxVol10d": 5469,
    "hasVolumeBurst": false,
    "kd": {
      "k": 37.0,
      "d": 53.7,
      "prevK": 48.0,
      "prevD": 62.1,
      "h8": 77.5,
      "l8": 71.5
    }
  },
  {
    "code": "00961",
    "name": "FT臺灣永續高息",
    "categories": [
      "Top100",
      "TurnoverRate"
    ],
    "price": 13.0,
    "prevClose": 13.11,
    "open": 13.08,
    "high": 13.08,
    "low": 12.95,
    "volume": 33200,
    "ma5": 13.21,
    "ma10": 13.14,
    "ma20": 12.92,
    "ma60": 12.77,
    "vMa5": 33955,
    "vMa10": 26993,
    "high5d": 13.49,
    "high10d": 13.49,
    "high20d": 13.49,
    "sparkline": [
      13.03,
      13.12,
      13.05,
      13.04,
      13.12,
      13.13,
      13.18,
      13.31,
      13.44,
      13.0
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
        "open": 13.12,
        "high": 13.15,
        "low": 13.09,
        "close": 13.13,
        "volume": 19182,
        "ma5": 13.09,
        "ma10": 12.95
      },
      {
        "open": 13.18,
        "high": 13.25,
        "low": 13.15,
        "close": 13.18,
        "volume": 22964,
        "ma5": 13.1,
        "ma10": 13.01
      },
      {
        "open": 13.35,
        "high": 13.37,
        "low": 13.27,
        "close": 13.31,
        "volume": 46552,
        "ma5": 13.16,
        "ma10": 13.09
      },
      {
        "open": 13.46,
        "high": 13.49,
        "low": 13.38,
        "close": 13.44,
        "volume": 47876,
        "ma5": 13.24,
        "ma10": 13.13
      },
      {
        "open": 13.08,
        "high": 13.08,
        "low": 12.95,
        "close": 13.0,
        "volume": 33200,
        "ma5": 13.21,
        "ma10": 13.14
      }
    ],
    "symbol": "00961.TW",
    "maxVol10d": 47876,
    "hasVolumeBurst": true,
    "kd": {
      "k": 60.8,
      "d": 75.7,
      "prevK": 86.5,
      "prevD": 83.1,
      "h8": 13.49,
      "l8": 13.01
    }
  },
  {
    "code": "3363",
    "name": "上詮",
    "categories": [
      "SitcaBuy",
      "ValueTop",
      "TurnoverRate",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 586.0,
    "prevClose": 624.0,
    "open": 620.0,
    "high": 632.0,
    "low": 584.0,
    "volume": 3949,
    "ma5": 605.2,
    "ma10": 605.8,
    "ma20": 571.15,
    "ma60": 643.93,
    "vMa5": 4043,
    "vMa10": 3680,
    "high5d": 656.0,
    "high10d": 656.0,
    "high20d": 656.0,
    "sparkline": [
      600.0,
      604.0,
      582.0,
      640.0,
      606.0,
      630.0,
      600.0,
      586.0,
      624.0,
      586.0
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
        "open": 616.0,
        "high": 652.0,
        "low": 612.0,
        "close": 630.0,
        "volume": 4384,
        "ma5": 612.4,
        "ma10": 566.75
      },
      {
        "open": 654.0,
        "high": 656.0,
        "low": 598.0,
        "close": 600.0,
        "volume": 5455,
        "ma5": 611.6,
        "ma10": 583.05
      },
      {
        "open": 600.0,
        "high": 604.0,
        "low": 580.0,
        "close": 586.0,
        "volume": 2656,
        "ma5": 612.4,
        "ma10": 593.6
      },
      {
        "open": 593.0,
        "high": 625.0,
        "low": 585.0,
        "close": 624.0,
        "volume": 3772,
        "ma5": 609.2,
        "ma10": 603.5
      },
      {
        "open": 620.0,
        "high": 632.0,
        "low": 584.0,
        "close": 586.0,
        "volume": 3949,
        "ma5": 605.2,
        "ma10": 605.8
      }
    ],
    "symbol": "3363.TWO",
    "maxVol10d": 5455,
    "hasVolumeBurst": false,
    "kd": {
      "k": 49.3,
      "d": 63.0,
      "prevK": 65.1,
      "prevD": 69.9,
      "h8": 656.0,
      "l8": 571.0
    }
  },
  {
    "code": "00900",
    "name": "富邦特選高股息30",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 18.61,
    "prevClose": 18.66,
    "open": 18.68,
    "high": 18.68,
    "low": 18.51,
    "volume": 3826,
    "ma5": 18.82,
    "ma10": 18.73,
    "ma20": 18.43,
    "ma60": 18.89,
    "vMa5": 4487,
    "vMa10": 4858,
    "high5d": 19.03,
    "high10d": 19.03,
    "high20d": 19.03,
    "sparkline": [
      18.38,
      18.74,
      18.67,
      18.64,
      18.8,
      18.73,
      18.94,
      18.94,
      18.87,
      18.61
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
        "open": 18.77,
        "high": 18.77,
        "low": 18.65,
        "close": 18.73,
        "volume": 2453,
        "ma5": 18.72,
        "ma10": 18.37
      },
      {
        "open": 18.82,
        "high": 18.96,
        "low": 18.82,
        "close": 18.94,
        "volume": 5597,
        "ma5": 18.76,
        "ma10": 18.49
      },
      {
        "open": 19.0,
        "high": 19.03,
        "low": 18.81,
        "close": 18.94,
        "volume": 4785,
        "ma5": 18.81,
        "ma10": 18.63
      },
      {
        "open": 19.0,
        "high": 19.02,
        "low": 18.84,
        "close": 18.87,
        "volume": 5775,
        "ma5": 18.86,
        "ma10": 18.7
      },
      {
        "open": 18.68,
        "high": 18.68,
        "low": 18.51,
        "close": 18.61,
        "volume": 3826,
        "ma5": 18.82,
        "ma10": 18.73
      }
    ],
    "symbol": "00900.TW",
    "maxVol10d": 7310,
    "hasVolumeBurst": false,
    "kd": {
      "k": 65.3,
      "d": 79.8,
      "prevK": 88.4,
      "prevD": 87.0,
      "h8": 19.03,
      "l8": 18.6
    }
  },
  {
    "code": "1402",
    "name": "遠東新",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 27.8,
    "prevClose": 27.55,
    "open": 27.5,
    "high": 27.8,
    "low": 27.4,
    "volume": 11125,
    "ma5": 27.39,
    "ma10": 27.27,
    "ma20": 27.24,
    "ma60": 27.44,
    "vMa5": 15371,
    "vMa10": 17726,
    "high5d": 27.9,
    "high10d": 27.9,
    "high20d": 27.9,
    "sparkline": [
      26.7,
      27.0,
      27.5,
      27.25,
      27.3,
      27.55,
      26.95,
      27.1,
      27.55,
      27.8
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
        "open": 27.3,
        "high": 27.9,
        "low": 27.3,
        "close": 27.55,
        "volume": 23484,
        "ma5": 27.32,
        "ma10": 27.16
      },
      {
        "open": 27.7,
        "high": 27.7,
        "low": 26.85,
        "close": 26.95,
        "volume": 21175,
        "ma5": 27.31,
        "ma10": 27.14
      },
      {
        "open": 27.0,
        "high": 27.1,
        "low": 26.65,
        "close": 27.1,
        "volume": 12033,
        "ma5": 27.23,
        "ma10": 27.14
      },
      {
        "open": 27.1,
        "high": 27.55,
        "low": 27.0,
        "close": 27.55,
        "volume": 9038,
        "ma5": 27.29,
        "ma10": 27.2
      },
      {
        "open": 27.5,
        "high": 27.8,
        "low": 27.4,
        "close": 27.8,
        "volume": 11125,
        "ma5": 27.39,
        "ma10": 27.27
      }
    ],
    "symbol": "1402.TW",
    "maxVol10d": 23484,
    "hasVolumeBurst": false,
    "kd": {
      "k": 67.4,
      "d": 56.5,
      "prevK": 55.0,
      "prevD": 51.1,
      "h8": 27.9,
      "l8": 26.6
    }
  },
  {
    "code": "6442",
    "name": "光聖",
    "categories": [
      "ValueTop",
      "TurnoverRate"
    ],
    "price": 1555.0,
    "prevClose": 1630.0,
    "open": 1650.0,
    "high": 1705.0,
    "low": 1530.0,
    "volume": 4604,
    "ma5": 1581.0,
    "ma10": 1489.0,
    "ma20": 1376.5,
    "ma60": 1621.33,
    "vMa5": 3510,
    "vMa10": 3387,
    "high5d": 1705.0,
    "high10d": 1705.0,
    "high20d": 1705.0,
    "sparkline": [
      1370.0,
      1415.0,
      1325.0,
      1425.0,
      1450.0,
      1595.0,
      1565.0,
      1560.0,
      1630.0,
      1555.0
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
        "open": 1470.0,
        "high": 1595.0,
        "low": 1470.0,
        "close": 1595.0,
        "volume": 2836,
        "ma5": 1442.0,
        "ma10": 1345.0
      },
      {
        "open": 1635.0,
        "high": 1670.0,
        "low": 1545.0,
        "close": 1565.0,
        "volume": 4869,
        "ma5": 1472.0,
        "ma10": 1396.5
      },
      {
        "open": 1550.0,
        "high": 1620.0,
        "low": 1530.0,
        "close": 1560.0,
        "volume": 2497,
        "ma5": 1519.0,
        "ma10": 1437.0
      },
      {
        "open": 1605.0,
        "high": 1635.0,
        "low": 1540.0,
        "close": 1630.0,
        "volume": 2741,
        "ma5": 1560.0,
        "ma10": 1473.0
      },
      {
        "open": 1650.0,
        "high": 1705.0,
        "low": 1530.0,
        "close": 1555.0,
        "volume": 4604,
        "ma5": 1581.0,
        "ma10": 1489.0
      }
    ],
    "symbol": "6442.TW",
    "maxVol10d": 5843,
    "hasVolumeBurst": true,
    "kd": {
      "k": 76.0,
      "d": 78.1,
      "prevK": 82.5,
      "prevD": 79.2,
      "h8": 1670.0,
      "l8": 1300.0
    }
  },
  {
    "code": "6693",
    "name": "廣閎科",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 172.5,
    "prevClose": 181.0,
    "open": 183.0,
    "high": 187.0,
    "low": 169.5,
    "volume": 854,
    "ma5": 182.1,
    "ma10": 179.3,
    "ma20": 172.1,
    "ma60": 191.28,
    "vMa5": 967,
    "vMa10": 1105,
    "high5d": 197.0,
    "high10d": 200.5,
    "high20d": 200.5,
    "sparkline": [
      170.5,
      169.0,
      185.5,
      184.0,
      173.5,
      184.5,
      185.0,
      187.5,
      181.0,
      172.5
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
        "open": 177.0,
        "high": 190.0,
        "low": 176.5,
        "close": 184.5,
        "volume": 996,
        "ma5": 179.3,
        "ma10": 167.35
      },
      {
        "open": 185.0,
        "high": 197.0,
        "low": 184.5,
        "close": 185.0,
        "volume": 1422,
        "ma5": 182.5,
        "ma10": 172.2
      },
      {
        "open": 190.0,
        "high": 190.5,
        "low": 182.5,
        "close": 187.5,
        "volume": 844,
        "ma5": 182.9,
        "ma10": 175.95
      },
      {
        "open": 186.0,
        "high": 188.0,
        "low": 178.5,
        "close": 181.0,
        "volume": 721,
        "ma5": 182.3,
        "ma10": 178.35
      },
      {
        "open": 183.0,
        "high": 187.0,
        "low": 169.5,
        "close": 172.5,
        "volume": 854,
        "ma5": 182.1,
        "ma10": 179.3
      }
    ],
    "symbol": "6693.TWO",
    "maxVol10d": 3052,
    "hasVolumeBurst": true,
    "kd": {
      "k": 49.3,
      "d": 59.0,
      "prevK": 61.8,
      "prevD": 63.9,
      "h8": 200.5,
      "l8": 163.5
    }
  },
  {
    "code": "3526",
    "name": "凡甲",
    "categories": [
      "SitcaBuy",
      "SitcaBuy5D"
    ],
    "price": 281.0,
    "prevClose": 285.5,
    "open": 285.5,
    "high": 286.5,
    "low": 281.0,
    "volume": 334,
    "ma5": 286.5,
    "ma10": 289.35,
    "ma20": 295.4,
    "ma60": 319.38,
    "vMa5": 270,
    "vMa10": 419,
    "high5d": 294.0,
    "high10d": 312.5,
    "high20d": 315.0,
    "sparkline": [
      307.0,
      296.0,
      282.5,
      289.0,
      286.5,
      288.5,
      288.0,
      289.5,
      285.5,
      281.0
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
        "open": 286.0,
        "high": 291.0,
        "low": 286.0,
        "close": 288.5,
        "volume": 248,
        "ma5": 288.5,
        "ma10": 294.8
      },
      {
        "open": 292.0,
        "high": 292.5,
        "low": 287.5,
        "close": 288.0,
        "volume": 321,
        "ma5": 286.9,
        "ma10": 294.65
      },
      {
        "open": 291.0,
        "high": 294.0,
        "low": 288.0,
        "close": 289.5,
        "volume": 271,
        "ma5": 288.3,
        "ma10": 293.6
      },
      {
        "open": 289.5,
        "high": 289.5,
        "low": 285.5,
        "close": 285.5,
        "volume": 179,
        "ma5": 287.6,
        "ma10": 291.75
      },
      {
        "open": 285.5,
        "high": 286.5,
        "low": 281.0,
        "close": 281.0,
        "volume": 334,
        "ma5": 286.5,
        "ma10": 289.35
      }
    ],
    "symbol": "3526.TWO",
    "maxVol10d": 1110,
    "hasVolumeBurst": true,
    "kd": {
      "k": 14.0,
      "d": 23.6,
      "prevK": 21.0,
      "prevD": 28.4,
      "h8": 298.0,
      "l8": 282.0
    }
  },
  {
    "code": "2634",
    "name": "漢翔",
    "categories": [
      "MajorBuy",
      "Top100",
      "TurnoverRate",
      "ValueTop",
      "MajorBuy3D"
    ],
    "price": 73.3,
    "prevClose": 71.0,
    "open": 71.9,
    "high": 76.5,
    "low": 70.7,
    "volume": 101205,
    "ma5": 68.16,
    "ma10": 65.2,
    "ma20": 63.44,
    "ma60": 56.5,
    "vMa5": 71689,
    "vMa10": 47146,
    "high5d": 76.5,
    "high10d": 76.5,
    "high20d": 76.5,
    "sparkline": [
      63.5,
      62.2,
      61.7,
      61.0,
      62.8,
      61.7,
      64.2,
      70.6,
      71.0,
      73.3
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
        "open": 61.8,
        "high": 62.2,
        "low": 61.4,
        "close": 61.7,
        "volume": 13043,
        "ma5": 61.88,
        "ma10": 61.46
      },
      {
        "open": 63.0,
        "high": 65.0,
        "low": 62.9,
        "close": 64.2,
        "volume": 31659,
        "ma5": 62.28,
        "ma10": 62.02
      },
      {
        "open": 64.2,
        "high": 70.6,
        "low": 63.2,
        "close": 70.6,
        "volume": 78696,
        "ma5": 64.06,
        "ma10": 62.89
      },
      {
        "open": 72.2,
        "high": 73.7,
        "low": 65.8,
        "close": 71.0,
        "volume": 133842,
        "ma5": 66.06,
        "ma10": 63.92
      },
      {
        "open": 71.9,
        "high": 76.5,
        "low": 70.7,
        "close": 73.3,
        "volume": 101205,
        "ma5": 68.16,
        "ma10": 65.2
      }
    ],
    "symbol": "2634.TW",
    "maxVol10d": 133842,
    "hasVolumeBurst": true,
    "kd": {
      "k": 78.0,
      "d": 69.4,
      "prevK": 76.6,
      "prevD": 65.1,
      "h8": 73.7,
      "l8": 59.9
    }
  },
  {
    "code": "1504",
    "name": "東元",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "SitcaBuy"
    ],
    "price": 71.0,
    "prevClose": 71.9,
    "open": 71.7,
    "high": 72.5,
    "low": 70.3,
    "volume": 8467,
    "ma5": 70.24,
    "ma10": 68.5,
    "ma20": 66.76,
    "ma60": 69.72,
    "vMa5": 13058,
    "vMa10": 8995,
    "high5d": 73.8,
    "high10d": 73.8,
    "high20d": 73.8,
    "sparkline": [
      66.5,
      66.7,
      66.0,
      67.2,
      67.4,
      67.3,
      70.4,
      70.6,
      71.9,
      71.0
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
        "open": 67.4,
        "high": 68.2,
        "low": 67.2,
        "close": 67.3,
        "volume": 5787,
        "ma5": 66.92,
        "ma10": 65.71
      },
      {
        "open": 68.5,
        "high": 71.4,
        "low": 68.3,
        "close": 70.4,
        "volume": 22704,
        "ma5": 67.66,
        "ma10": 66.7
      },
      {
        "open": 70.8,
        "high": 73.8,
        "low": 70.5,
        "close": 70.6,
        "volume": 17106,
        "ma5": 68.58,
        "ma10": 67.28
      },
      {
        "open": 71.4,
        "high": 72.7,
        "low": 70.3,
        "close": 71.9,
        "volume": 11229,
        "ma5": 69.52,
        "ma10": 67.94
      },
      {
        "open": 71.7,
        "high": 72.5,
        "low": 70.3,
        "close": 71.0,
        "volume": 8467,
        "ma5": 70.24,
        "ma10": 68.5
      }
    ],
    "symbol": "1504.TW",
    "maxVol10d": 22704,
    "hasVolumeBurst": true,
    "kd": {
      "k": 74.4,
      "d": 76.9,
      "prevK": 78.2,
      "prevD": 78.2,
      "h8": 73.8,
      "l8": 65.4
    }
  },
  {
    "code": "009819",
    "name": "中信數據及電力",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 10.21,
    "prevClose": 10.34,
    "open": 10.32,
    "high": 10.32,
    "low": 10.2,
    "volume": 3944,
    "ma5": 10.38,
    "ma10": 10.37,
    "ma20": 10.16,
    "ma60": 10.26,
    "vMa5": 6647,
    "vMa10": 7712,
    "high5d": 10.57,
    "high10d": 10.57,
    "high20d": 10.57,
    "sparkline": [
      10.42,
      10.3,
      10.31,
      10.41,
      10.37,
      10.37,
      10.5,
      10.5,
      10.34,
      10.21
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
        "open": 10.37,
        "high": 10.4,
        "low": 10.36,
        "close": 10.37,
        "volume": 4221,
        "ma5": 10.35,
        "ma10": 10.19
      },
      {
        "open": 10.48,
        "high": 10.53,
        "low": 10.47,
        "close": 10.5,
        "volume": 13557,
        "ma5": 10.39,
        "ma10": 10.28
      },
      {
        "open": 10.55,
        "high": 10.57,
        "low": 10.5,
        "close": 10.5,
        "volume": 8718,
        "ma5": 10.43,
        "ma10": 10.33
      },
      {
        "open": 10.38,
        "high": 10.4,
        "low": 10.33,
        "close": 10.34,
        "volume": 2798,
        "ma5": 10.42,
        "ma10": 10.36
      },
      {
        "open": 10.32,
        "high": 10.32,
        "low": 10.2,
        "close": 10.21,
        "volume": 3944,
        "ma5": 10.38,
        "ma10": 10.37
      }
    ],
    "symbol": "009819.TW",
    "maxVol10d": 23424,
    "hasVolumeBurst": true,
    "kd": {
      "k": 46.1,
      "d": 67.9,
      "prevK": 67.9,
      "prevD": 78.8,
      "h8": 10.57,
      "l8": 10.25
    }
  },
  {
    "code": "2359",
    "name": "所羅門",
    "categories": [
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy",
      "Top100",
      "ValueTop"
    ],
    "price": 177.5,
    "prevClose": 175.0,
    "open": 178.0,
    "high": 183.0,
    "low": 164.5,
    "volume": 34411,
    "ma5": 162.4,
    "ma10": 153.9,
    "ma20": 144.47,
    "ma60": 140.58,
    "vMa5": 18608,
    "vMa10": 14804,
    "high5d": 183.0,
    "high10d": 183.0,
    "high20d": 183.0,
    "sparkline": [
      145.0,
      144.5,
      143.5,
      153.5,
      140.5,
      143.0,
      157.0,
      159.5,
      175.0,
      177.5
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
        "open": 140.0,
        "high": 144.0,
        "low": 139.0,
        "close": 143.0,
        "volume": 4315,
        "ma5": 145.0,
        "ma10": 137.9
      },
      {
        "open": 151.0,
        "high": 157.0,
        "low": 151.0,
        "close": 157.0,
        "volume": 13261,
        "ma5": 147.5,
        "ma10": 141.25
      },
      {
        "open": 157.5,
        "high": 169.0,
        "low": 154.5,
        "close": 159.5,
        "volume": 26024,
        "ma5": 150.7,
        "ma10": 145.1
      },
      {
        "open": 166.5,
        "high": 175.0,
        "low": 165.0,
        "close": 175.0,
        "volume": 15027,
        "ma5": 155.0,
        "ma10": 149.35
      },
      {
        "open": 178.0,
        "high": 183.0,
        "low": 164.5,
        "close": 177.5,
        "volume": 34411,
        "ma5": 162.4,
        "ma10": 153.9
      }
    ],
    "symbol": "2359.TW",
    "maxVol10d": 34411,
    "hasVolumeBurst": true,
    "kd": {
      "k": 85.7,
      "d": 79.0,
      "prevK": 84.7,
      "prevD": 75.7,
      "h8": 175.0,
      "l8": 139.0
    }
  },
  {
    "code": "00402A",
    "name": "主動安聯美國科技",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 9.87,
    "prevClose": 9.95,
    "open": 9.96,
    "high": 9.96,
    "low": 9.85,
    "volume": 6235,
    "ma5": 9.88,
    "ma10": 9.86,
    "ma20": 9.65,
    "ma60": 9.76,
    "vMa5": 7442,
    "vMa10": 6944,
    "high5d": 9.98,
    "high10d": 9.98,
    "high20d": 9.98,
    "sparkline": [
      9.92,
      9.77,
      9.75,
      9.88,
      9.81,
      9.79,
      9.9,
      9.91,
      9.95,
      9.87
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
        "open": 9.81,
        "high": 9.81,
        "low": 9.78,
        "close": 9.79,
        "volume": 3350,
        "ma5": 9.8,
        "ma10": 9.64
      },
      {
        "open": 9.89,
        "high": 9.95,
        "low": 9.88,
        "close": 9.9,
        "volume": 10090,
        "ma5": 9.83,
        "ma10": 9.74
      },
      {
        "open": 9.95,
        "high": 9.98,
        "low": 9.91,
        "close": 9.91,
        "volume": 8735,
        "ma5": 9.86,
        "ma10": 9.78
      },
      {
        "open": 9.96,
        "high": 9.98,
        "low": 9.93,
        "close": 9.95,
        "volume": 8800,
        "ma5": 9.87,
        "ma10": 9.82
      },
      {
        "open": 9.96,
        "high": 9.96,
        "low": 9.85,
        "close": 9.87,
        "volume": 6235,
        "ma5": 9.88,
        "ma10": 9.86
      }
    ],
    "symbol": "00402A.TW",
    "maxVol10d": 13423,
    "hasVolumeBurst": true,
    "kd": {
      "k": 77.0,
      "d": 80.5,
      "prevK": 85.8,
      "prevD": 82.3,
      "h8": 9.98,
      "l8": 9.71
    }
  },
  {
    "code": "3693",
    "name": "營邦",
    "categories": [
      "SitcaBuy",
      "MajorBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy3D"
    ],
    "price": 523.0,
    "prevClose": 525.0,
    "open": 523.0,
    "high": 542.0,
    "low": 513.0,
    "volume": 781,
    "ma5": 527.6,
    "ma10": 519.5,
    "ma20": 496.0,
    "ma60": 510.73,
    "vMa5": 999,
    "vMa10": 1097,
    "high5d": 573.0,
    "high10d": 573.0,
    "high20d": 573.0,
    "sparkline": [
      501.0,
      537.0,
      527.0,
      500.0,
      492.0,
      502.0,
      552.0,
      536.0,
      525.0,
      523.0
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
        "open": 492.5,
        "high": 510.0,
        "low": 492.5,
        "close": 502.0,
        "volume": 444,
        "ma5": 511.6,
        "ma10": 488.3
      },
      {
        "open": 531.0,
        "high": 552.0,
        "low": 531.0,
        "close": 552.0,
        "volume": 928,
        "ma5": 514.6,
        "ma10": 502.85
      },
      {
        "open": 570.0,
        "high": 573.0,
        "low": 535.0,
        "close": 536.0,
        "volume": 2334,
        "ma5": 516.4,
        "ma10": 511.75
      },
      {
        "open": 534.0,
        "high": 542.0,
        "low": 523.0,
        "close": 525.0,
        "volume": 507,
        "ma5": 521.4,
        "ma10": 517.05
      },
      {
        "open": 523.0,
        "high": 542.0,
        "low": 513.0,
        "close": 523.0,
        "volume": 781,
        "ma5": 527.6,
        "ma10": 519.5
      }
    ],
    "symbol": "3693.TWO",
    "maxVol10d": 2411,
    "hasVolumeBurst": true,
    "kd": {
      "k": 56.0,
      "d": 61.5,
      "prevK": 61.3,
      "prevD": 64.3,
      "h8": 573.0,
      "l8": 481.5
    }
  },
  {
    "code": "009815",
    "name": "大華美國MAG7+",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 11.46,
    "prevClose": 11.62,
    "open": 11.56,
    "high": 11.56,
    "low": 11.44,
    "volume": 2189,
    "ma5": 11.62,
    "ma10": 11.68,
    "ma20": 11.41,
    "ma60": 11.41,
    "vMa5": 2302,
    "vMa10": 2641,
    "high5d": 11.73,
    "high10d": 11.84,
    "high20d": 11.84,
    "sparkline": [
      11.79,
      11.69,
      11.69,
      11.81,
      11.78,
      11.67,
      11.66,
      11.67,
      11.62,
      11.46
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
        "open": 11.7,
        "high": 11.71,
        "low": 11.66,
        "close": 11.67,
        "volume": 3427,
        "ma5": 11.73,
        "ma10": 11.52
      },
      {
        "open": 11.66,
        "high": 11.67,
        "low": 11.64,
        "close": 11.66,
        "volume": 2546,
        "ma5": 11.72,
        "ma10": 11.61
      },
      {
        "open": 11.71,
        "high": 11.73,
        "low": 11.67,
        "close": 11.67,
        "volume": 1496,
        "ma5": 11.72,
        "ma10": 11.66
      },
      {
        "open": 11.7,
        "high": 11.7,
        "low": 11.61,
        "close": 11.62,
        "volume": 1853,
        "ma5": 11.68,
        "ma10": 11.69
      },
      {
        "open": 11.56,
        "high": 11.56,
        "low": 11.44,
        "close": 11.46,
        "volume": 2189,
        "ma5": 11.62,
        "ma10": 11.68
      }
    ],
    "symbol": "009815.TWO",
    "maxVol10d": 5332,
    "hasVolumeBurst": true,
    "kd": {
      "k": 34.9,
      "d": 58.3,
      "prevK": 49.9,
      "prevD": 70.0,
      "h8": 11.84,
      "l8": 11.61
    }
  },
  {
    "code": "3490",
    "name": "單井",
    "categories": [
      "Top100",
      "MajorBuy",
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 44.5,
    "prevClose": 42.45,
    "open": 42.65,
    "high": 44.5,
    "low": 41.8,
    "volume": 10269,
    "ma5": 39.39,
    "ma10": 34.92,
    "ma20": 31.11,
    "ma60": 32.61,
    "vMa5": 8583,
    "vMa10": 5999,
    "high5d": 44.5,
    "high10d": 44.5,
    "high20d": 44.5,
    "sparkline": [
      28.55,
      29.7,
      30.4,
      31.6,
      32.0,
      33.5,
      36.85,
      39.65,
      42.45,
      44.5
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
        "open": 32.25,
        "high": 33.95,
        "low": 32.05,
        "close": 33.5,
        "volume": 5436,
        "ma5": 31.44,
        "ma10": 29.64
      },
      {
        "open": 36.85,
        "high": 36.85,
        "low": 36.8,
        "close": 36.85,
        "volume": 3124,
        "ma5": 32.87,
        "ma10": 30.71
      },
      {
        "open": 37.85,
        "high": 40.45,
        "low": 37.2,
        "close": 39.65,
        "volume": 12704,
        "ma5": 34.72,
        "ma10": 31.9
      },
      {
        "open": 39.9,
        "high": 43.0,
        "low": 39.5,
        "close": 42.45,
        "volume": 11379,
        "ma5": 36.89,
        "ma10": 33.31
      },
      {
        "open": 42.65,
        "high": 44.5,
        "low": 41.8,
        "close": 44.5,
        "volume": 10269,
        "ma5": 39.39,
        "ma10": 34.92
      }
    ],
    "symbol": "3490.TWO",
    "maxVol10d": 12704,
    "hasVolumeBurst": true,
    "kd": {
      "k": 96.6,
      "d": 93.3,
      "prevK": 94.9,
      "prevD": 91.7,
      "h8": 43.0,
      "l8": 28.05
    }
  },
  {
    "code": "4533",
    "name": "協易機",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 26.7,
    "prevClose": 27.15,
    "open": 27.4,
    "high": 27.45,
    "low": 26.65,
    "volume": 797,
    "ma5": 27.45,
    "ma10": 26.4,
    "ma20": 25.54,
    "ma60": 28.39,
    "vMa5": 1743,
    "vMa10": 1329,
    "high5d": 29.45,
    "high10d": 29.45,
    "high20d": 29.45,
    "sparkline": [
      25.05,
      24.9,
      24.6,
      25.5,
      26.7,
      26.8,
      28.2,
      28.4,
      27.15,
      26.7
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
        "open": 26.3,
        "high": 26.8,
        "low": 26.1,
        "close": 26.8,
        "volume": 782,
        "ma5": 25.7,
        "ma10": 24.73
      },
      {
        "open": 27.05,
        "high": 29.45,
        "low": 27.0,
        "close": 28.2,
        "volume": 3325,
        "ma5": 26.36,
        "ma10": 25.33
      },
      {
        "open": 28.3,
        "high": 28.8,
        "low": 27.1,
        "close": 28.4,
        "volume": 2555,
        "ma5": 27.12,
        "ma10": 25.82
      },
      {
        "open": 28.4,
        "high": 28.9,
        "low": 26.9,
        "close": 27.15,
        "volume": 1255,
        "ma5": 27.45,
        "ma10": 26.16
      },
      {
        "open": 27.4,
        "high": 27.45,
        "low": 26.65,
        "close": 26.7,
        "volume": 797,
        "ma5": 27.45,
        "ma10": 26.4
      }
    ],
    "symbol": "4533.TWO",
    "maxVol10d": 3325,
    "hasVolumeBurst": true,
    "kd": {
      "k": 62.7,
      "d": 70.0,
      "prevK": 71.9,
      "prevD": 73.6,
      "h8": 29.45,
      "l8": 24.5
    }
  },
  {
    "code": "6716",
    "name": "應廣",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 137.5,
    "prevClose": 130.0,
    "open": 134.5,
    "high": 139.0,
    "low": 132.0,
    "volume": 870,
    "ma5": 123.5,
    "ma10": 109.31,
    "ma20": 94.24,
    "ma60": 96.21,
    "vMa5": 1218,
    "vMa10": 903,
    "high5d": 139.0,
    "high10d": 139.0,
    "high20d": 139.0,
    "sparkline": [
      83.4,
      87.0,
      95.7,
      105.0,
      104.5,
      109.0,
      117.5,
      123.5,
      130.0,
      137.5
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
        "high": 111.0,
        "low": 104.5,
        "close": 109.0,
        "volume": 860,
        "ma5": 100.24,
        "ma10": 89.24
      },
      {
        "open": 111.5,
        "high": 119.5,
        "low": 109.0,
        "close": 117.5,
        "volume": 1673,
        "ma5": 106.34,
        "ma10": 93.93
      },
      {
        "open": 117.5,
        "high": 126.5,
        "low": 116.5,
        "close": 123.5,
        "volume": 2055,
        "ma5": 111.9,
        "ma10": 98.52
      },
      {
        "open": 131.0,
        "high": 132.5,
        "low": 126.0,
        "close": 130.0,
        "volume": 631,
        "ma5": 116.9,
        "ma10": 103.64
      },
      {
        "open": 134.5,
        "high": 139.0,
        "low": 132.0,
        "close": 137.5,
        "volume": 870,
        "ma5": 123.5,
        "ma10": 109.31
      }
    ],
    "symbol": "6716.TWO",
    "maxVol10d": 2055,
    "hasVolumeBurst": true,
    "kd": {
      "k": 94.5,
      "d": 90.6,
      "prevK": 93.2,
      "prevD": 88.6,
      "h8": 132.5,
      "l8": 83.7
    }
  },
  {
    "code": "8942",
    "name": "森鉅",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 41.55,
    "prevClose": 42.25,
    "open": 42.25,
    "high": 42.3,
    "low": 41.55,
    "volume": 321,
    "ma5": 41.93,
    "ma10": 40.2,
    "ma20": 38.65,
    "ma60": 40.1,
    "vMa5": 673,
    "vMa10": 421,
    "high5d": 43.45,
    "high10d": 43.45,
    "high20d": 43.45,
    "sparkline": [
      37.6,
      37.9,
      38.6,
      38.85,
      39.45,
      40.05,
      42.8,
      43.0,
      42.25,
      41.55
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
        "open": 39.45,
        "high": 40.65,
        "low": 39.45,
        "close": 40.05,
        "volume": 235,
        "ma5": 38.97,
        "ma10": 37.91
      },
      {
        "open": 41.9,
        "high": 43.45,
        "low": 41.9,
        "close": 42.8,
        "volume": 1672,
        "ma5": 39.95,
        "ma10": 38.59
      },
      {
        "open": 42.7,
        "high": 43.4,
        "low": 42.2,
        "close": 43.0,
        "volume": 692,
        "ma5": 40.83,
        "ma10": 39.23
      },
      {
        "open": 43.2,
        "high": 43.25,
        "low": 42.05,
        "close": 42.25,
        "volume": 445,
        "ma5": 41.51,
        "ma10": 39.77
      },
      {
        "open": 42.25,
        "high": 42.3,
        "low": 41.55,
        "close": 41.55,
        "volume": 321,
        "ma5": 41.93,
        "ma10": 40.2
      }
    ],
    "symbol": "8942.TWO",
    "maxVol10d": 1672,
    "hasVolumeBurst": true,
    "kd": {
      "k": 80.1,
      "d": 82.4,
      "prevK": 86.0,
      "prevD": 83.6,
      "h8": 43.45,
      "l8": 37.45
    }
  },
  {
    "code": "6840",
    "name": "東研信超",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 83.0,
    "prevClose": 83.0,
    "open": 83.8,
    "high": 84.5,
    "low": 81.4,
    "volume": 713,
    "ma5": 78.28,
    "ma10": 72.74,
    "ma20": 66.41,
    "ma60": 65.36,
    "vMa5": 1060,
    "vMa10": 629,
    "high5d": 84.5,
    "high10d": 84.5,
    "high20d": 84.5,
    "sparkline": [
      68.6,
      66.8,
      66.6,
      66.0,
      68.0,
      68.8,
      75.6,
      81.0,
      83.0,
      83.0
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
        "open": 68.6,
        "high": 70.8,
        "low": 67.3,
        "close": 68.8,
        "volume": 146,
        "ma5": 67.24,
        "ma10": 64.62
      },
      {
        "open": 72.0,
        "high": 75.6,
        "low": 72.0,
        "close": 75.6,
        "volume": 1177,
        "ma5": 69.0,
        "ma10": 66.38
      },
      {
        "open": 82.8,
        "high": 83.1,
        "low": 79.5,
        "close": 81.0,
        "volume": 2287,
        "ma5": 71.88,
        "ma10": 68.48
      },
      {
        "open": 81.0,
        "high": 83.1,
        "low": 79.9,
        "close": 83.0,
        "volume": 979,
        "ma5": 75.28,
        "ma10": 70.68
      },
      {
        "open": 83.8,
        "high": 84.5,
        "low": 81.4,
        "close": 83.0,
        "volume": 713,
        "ma5": 78.28,
        "ma10": 72.74
      }
    ],
    "symbol": "6840.TWO",
    "maxVol10d": 2287,
    "hasVolumeBurst": true,
    "kd": {
      "k": 92.9,
      "d": 89.7,
      "prevK": 93.2,
      "prevD": 88.0,
      "h8": 83.1,
      "l8": 65.0
    }
  },
  {
    "code": "6829",
    "name": "千附精密",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 220.5,
    "prevClose": 238.5,
    "open": 242.5,
    "high": 242.5,
    "low": 220.5,
    "volume": 1232,
    "ma5": 227.2,
    "ma10": 211.75,
    "ma20": 197.35,
    "ma60": 209.9,
    "vMa5": 1660,
    "vMa10": 1178,
    "high5d": 244.5,
    "high10d": 244.5,
    "high20d": 244.5,
    "sparkline": [
      188.0,
      196.0,
      191.5,
      200.0,
      206.0,
      211.0,
      222.0,
      244.0,
      238.5,
      220.5
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
        "open": 205.0,
        "high": 214.0,
        "low": 204.0,
        "close": 211.0,
        "volume": 828,
        "ma5": 200.9,
        "ma10": 187.8
      },
      {
        "open": 212.5,
        "high": 226.0,
        "low": 212.5,
        "close": 222.0,
        "volume": 1229,
        "ma5": 206.1,
        "ma10": 194.1
      },
      {
        "open": 225.0,
        "high": 244.0,
        "low": 218.5,
        "close": 244.0,
        "volume": 2720,
        "ma5": 216.6,
        "ma10": 201.35
      },
      {
        "open": 240.0,
        "high": 244.5,
        "low": 232.0,
        "close": 238.5,
        "volume": 2293,
        "ma5": 224.3,
        "ma10": 207.85
      },
      {
        "open": 242.5,
        "high": 242.5,
        "low": 220.5,
        "close": 220.5,
        "volume": 1232,
        "ma5": 227.2,
        "ma10": 211.75
      }
    ],
    "symbol": "6829.TWO",
    "maxVol10d": 2720,
    "hasVolumeBurst": true,
    "kd": {
      "k": 80.4,
      "d": 83.9,
      "prevK": 91.7,
      "prevD": 85.7,
      "h8": 244.5,
      "l8": 187.5
    }
  },
  {
    "code": "6419",
    "name": "京晨科",
    "categories": [
      "TurnoverRate"
    ],
    "price": 163.5,
    "prevClose": 180.0,
    "open": 174.0,
    "high": 178.5,
    "low": 163.0,
    "volume": 743,
    "ma5": 166.4,
    "ma10": 155.4,
    "ma20": 142.43,
    "ma60": 142.89,
    "vMa5": 817,
    "vMa10": 626,
    "high5d": 183.0,
    "high10d": 183.0,
    "high20d": 183.0,
    "sparkline": [
      136.0,
      149.5,
      140.0,
      145.0,
      151.5,
      153.0,
      167.5,
      168.0,
      180.0,
      163.5
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
        "open": 151.5,
        "high": 157.0,
        "low": 151.0,
        "close": 153.0,
        "volume": 405,
        "ma5": 147.8,
        "ma10": 137.3
      },
      {
        "open": 156.0,
        "high": 168.0,
        "low": 156.0,
        "close": 167.5,
        "volume": 892,
        "ma5": 151.4,
        "ma10": 142.7
      },
      {
        "open": 169.0,
        "high": 169.5,
        "low": 160.0,
        "close": 168.0,
        "volume": 663,
        "ma5": 157.0,
        "ma10": 147.15
      },
      {
        "open": 183.0,
        "high": 183.0,
        "low": 168.5,
        "close": 180.0,
        "volume": 1381,
        "ma5": 164.0,
        "ma10": 152.35
      },
      {
        "open": 174.0,
        "high": 178.5,
        "low": 163.0,
        "close": 163.5,
        "volume": 743,
        "ma5": 166.4,
        "ma10": 155.4
      }
    ],
    "symbol": "6419.TWO",
    "maxVol10d": 1381,
    "hasVolumeBurst": true,
    "kd": {
      "k": 80.9,
      "d": 84.9,
      "prevK": 92.6,
      "prevD": 86.9,
      "h8": 183.0,
      "l8": 137.0
    }
  },
  {
    "code": "9904",
    "name": "寶成",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 24.5,
    "prevClose": 24.8,
    "open": 24.7,
    "high": 24.7,
    "low": 24.3,
    "volume": 18648,
    "ma5": 24.48,
    "ma10": 24.16,
    "ma20": 24.15,
    "ma60": 24.98,
    "vMa5": 24317,
    "vMa10": 21313,
    "maxVol10d": 54971,
    "hasVolumeBurst": true,
    "high5d": 25.35,
    "high10d": 25.35,
    "high20d": 25.35,
    "sparkline": [
      23.45,
      23.75,
      23.9,
      24.1,
      24.05,
      23.95,
      23.9,
      25.25,
      24.8,
      24.5
    ],
    "k5d": [
      {
        "open": 24.05,
        "high": 24.15,
        "low": 23.9,
        "close": 23.95,
        "volume": 11944,
        "ma5": 23.95,
        "ma10": 23.92
      },
      {
        "open": 24.0,
        "high": 24.0,
        "low": 23.75,
        "close": 23.9,
        "volume": 14040,
        "ma5": 23.98,
        "ma10": 23.91
      },
      {
        "open": 24.45,
        "high": 25.35,
        "low": 24.45,
        "close": 25.25,
        "volume": 54971,
        "ma5": 24.25,
        "ma10": 24.04
      },
      {
        "open": 25.25,
        "high": 25.3,
        "low": 24.65,
        "close": 24.8,
        "volume": 21981,
        "ma5": 24.39,
        "ma10": 24.09
      },
      {
        "open": 24.7,
        "high": 24.7,
        "low": 24.3,
        "close": 24.5,
        "volume": 18648,
        "ma5": 24.48,
        "ma10": 24.16
      }
    ],
    "symbol": "9904.TW",
    "kd": {
      "k": 66.4,
      "d": 62.4,
      "prevK": 70.4,
      "prevD": 60.4,
      "h8": 25.35,
      "l8": 23.3
    }
  },
  {
    "code": "00988B",
    "name": "玉山嚴選非投債",
    "categories": [
      "TurnoverRate"
    ],
    "price": 19.63,
    "prevClose": 19.86,
    "open": 19.7,
    "high": 19.7,
    "low": 19.63,
    "volume": 4404,
    "ma5": 19.87,
    "ma10": 19.93,
    "ma20": 19.91,
    "ma60": 19.88,
    "vMa5": 5501,
    "vMa10": 4196,
    "maxVol10d": 7146,
    "hasVolumeBurst": true,
    "high5d": 20.0,
    "high10d": 20.05,
    "high20d": 20.05,
    "sparkline": [
      20.02,
      20.0,
      19.98,
      20.0,
      19.98,
      19.97,
      19.96,
      19.94,
      19.86,
      19.63
    ],
    "k5d": [
      {
        "open": 19.98,
        "high": 19.99,
        "low": 19.96,
        "close": 19.97,
        "volume": 4549,
        "ma5": 19.99,
        "ma10": 19.96
      },
      {
        "open": 19.97,
        "high": 19.99,
        "low": 19.96,
        "close": 19.96,
        "volume": 4389,
        "ma5": 19.98,
        "ma10": 19.97
      },
      {
        "open": 20.0,
        "high": 20.0,
        "low": 19.93,
        "close": 19.94,
        "volume": 7146,
        "ma5": 19.97,
        "ma10": 19.97
      },
      {
        "open": 19.95,
        "high": 19.95,
        "low": 19.85,
        "close": 19.86,
        "volume": 7019,
        "ma5": 19.94,
        "ma10": 19.97
      },
      {
        "open": 19.7,
        "high": 19.7,
        "low": 19.63,
        "close": 19.63,
        "volume": 4404,
        "ma5": 19.87,
        "ma10": 19.93
      }
    ],
    "symbol": "00988B.TWO",
    "kd": {
      "k": 23.7,
      "d": 43.3,
      "prevK": 35.5,
      "prevD": 53.1,
      "h8": 20.03,
      "l8": 19.85
    }
  },
  {
    "code": "3362",
    "name": "先進光",
    "categories": [
      "Top100",
      "ValueTop",
      "TurnoverRate"
    ],
    "price": 175.0,
    "prevClose": 178.5,
    "open": 180.5,
    "high": 185.5,
    "low": 175.0,
    "volume": 4691,
    "ma5": 177.1,
    "ma10": 176.2,
    "ma20": 170.85,
    "ma60": 167.41,
    "vMa5": 4058,
    "vMa10": 2578,
    "maxVol10d": 7508,
    "hasVolumeBurst": true,
    "high5d": 191.5,
    "high10d": 191.5,
    "high20d": 196.5,
    "sparkline": [
      174.5,
      176.0,
      173.5,
      178.0,
      174.5,
      179.0,
      181.0,
      172.0,
      178.5,
      175.0
    ],
    "k5d": [
      {
        "open": 174.5,
        "high": 179.5,
        "low": 172.0,
        "close": 179.0,
        "volume": 962,
        "ma5": 176.2,
        "ma10": 174.35
      },
      {
        "open": 181.0,
        "high": 181.5,
        "low": 177.5,
        "close": 181.0,
        "volume": 1443,
        "ma5": 177.2,
        "ma10": 176.8
      },
      {
        "open": 185.5,
        "high": 191.5,
        "low": 170.5,
        "close": 172.0,
        "volume": 5687,
        "ma5": 176.9,
        "ma10": 176.8
      },
      {
        "open": 173.0,
        "high": 186.0,
        "low": 171.0,
        "close": 178.5,
        "volume": 7508,
        "ma5": 177.0,
        "ma10": 176.65
      },
      {
        "open": 180.5,
        "high": 185.5,
        "low": 175.0,
        "close": 175.0,
        "volume": 4691,
        "ma5": 177.1,
        "ma10": 176.2
      }
    ],
    "symbol": "3362.TWO",
    "kd": {
      "k": 30.8,
      "d": 38.3,
      "prevK": 35.6,
      "prevD": 42.0,
      "h8": 191.5,
      "l8": 170.5
    }
  },
  {
    "code": "00795B",
    "name": "中信美國公債20年",
    "categories": [
      "Top100"
    ],
    "price": 25.62,
    "prevClose": 26.23,
    "open": 25.65,
    "high": 25.65,
    "low": 25.6,
    "volume": 6238,
    "ma5": 26.27,
    "ma10": 26.48,
    "ma20": 26.68,
    "ma60": 26.87,
    "vMa5": 4443,
    "vMa10": 5332,
    "maxVol10d": 6961,
    "hasVolumeBurst": false,
    "high5d": 26.59,
    "high10d": 26.9,
    "high20d": 27.24,
    "sparkline": [
      26.86,
      26.85,
      26.58,
      26.65,
      26.49,
      26.54,
      26.52,
      26.43,
      26.23,
      25.62
    ],
    "k5d": [
      {
        "open": 26.56,
        "high": 26.56,
        "low": 26.51,
        "close": 26.54,
        "volume": 2373,
        "ma5": 26.62,
        "ma10": 26.68
      },
      {
        "open": 26.52,
        "high": 26.53,
        "low": 26.49,
        "close": 26.52,
        "volume": 2914,
        "ma5": 26.56,
        "ma10": 26.66
      },
      {
        "open": 26.59,
        "high": 26.59,
        "low": 26.41,
        "close": 26.43,
        "volume": 5455,
        "ma5": 26.53,
        "ma10": 26.62
      },
      {
        "open": 26.32,
        "high": 26.32,
        "low": 26.2,
        "close": 26.23,
        "volume": 5234,
        "ma5": 26.44,
        "ma10": 26.58
      },
      {
        "open": 25.65,
        "high": 25.65,
        "low": 25.6,
        "close": 25.62,
        "volume": 6238,
        "ma5": 26.27,
        "ma10": 26.48
      }
    ],
    "symbol": "00795B.TWO",
    "kd": {
      "k": 8.0,
      "d": 14.5,
      "prevK": 11.3,
      "prevD": 17.8,
      "h8": 26.86,
      "l8": 26.2
    }
  },
  {
    "code": "00981D",
    "name": "主動中信非投等債",
    "categories": [
      "Top100"
    ],
    "price": 10.35,
    "prevClose": 10.45,
    "open": 10.4,
    "high": 10.4,
    "low": 10.32,
    "volume": 5800,
    "ma5": 10.46,
    "ma10": 10.47,
    "ma20": 10.47,
    "ma60": 10.42,
    "vMa5": 4625,
    "vMa10": 4547,
    "maxVol10d": 9696,
    "hasVolumeBurst": true,
    "high5d": 10.51,
    "high10d": 10.54,
    "high20d": 10.54,
    "sparkline": [
      10.5,
      10.49,
      10.47,
      10.49,
      10.5,
      10.5,
      10.5,
      10.48,
      10.45,
      10.35
    ],
    "k5d": [
      {
        "open": 10.51,
        "high": 10.51,
        "low": 10.49,
        "close": 10.5,
        "volume": 1631,
        "ma5": 10.49,
        "ma10": 10.49
      },
      {
        "open": 10.51,
        "high": 10.51,
        "low": 10.49,
        "close": 10.5,
        "volume": 2774,
        "ma5": 10.49,
        "ma10": 10.49
      },
      {
        "open": 10.51,
        "high": 10.51,
        "low": 10.47,
        "close": 10.48,
        "volume": 5426,
        "ma5": 10.49,
        "ma10": 10.49
      },
      {
        "open": 10.47,
        "high": 10.47,
        "low": 10.44,
        "close": 10.45,
        "volume": 7493,
        "ma5": 10.49,
        "ma10": 10.49
      },
      {
        "open": 10.4,
        "high": 10.4,
        "low": 10.32,
        "close": 10.35,
        "volume": 5800,
        "ma5": 10.46,
        "ma10": 10.47
      }
    ],
    "symbol": "00981D.TWO",
    "kd": {
      "k": 28.3,
      "d": 40.9,
      "prevK": 34.5,
      "prevD": 47.3,
      "h8": 10.51,
      "l8": 10.44
    }
  },
  {
    "code": "00720B",
    "name": "元大投資級公司債",
    "categories": [
      "Top100"
    ],
    "price": 31.54,
    "prevClose": 31.88,
    "open": 31.7,
    "high": 31.72,
    "low": 31.51,
    "volume": 8017,
    "ma5": 31.99,
    "ma10": 32.21,
    "ma20": 32.34,
    "ma60": 32.99,
    "vMa5": 5744,
    "vMa10": 5266,
    "maxVol10d": 8017,
    "hasVolumeBurst": false,
    "high5d": 32.33,
    "high10d": 32.66,
    "high20d": 32.7,
    "sparkline": [
      32.61,
      32.6,
      32.36,
      32.43,
      32.19,
      32.2,
      32.2,
      32.13,
      31.88,
      31.54
    ],
    "k5d": [
      {
        "open": 32.24,
        "high": 32.24,
        "low": 32.18,
        "close": 32.2,
        "volume": 4597,
        "ma5": 32.36,
        "ma10": 32.36
      },
      {
        "open": 32.2,
        "high": 32.2,
        "low": 32.17,
        "close": 32.2,
        "volume": 3729,
        "ma5": 32.28,
        "ma10": 32.36
      },
      {
        "open": 32.33,
        "high": 32.33,
        "low": 32.13,
        "close": 32.13,
        "volume": 4890,
        "ma5": 32.23,
        "ma10": 32.33
      },
      {
        "open": 32.01,
        "high": 32.01,
        "low": 31.85,
        "close": 31.88,
        "volume": 7485,
        "ma5": 32.12,
        "ma10": 32.29
      },
      {
        "open": 31.7,
        "high": 31.72,
        "low": 31.51,
        "close": 31.54,
        "volume": 8017,
        "ma5": 31.99,
        "ma10": 32.21
      }
    ],
    "symbol": "00720B.TWO",
    "kd": {
      "k": 9.1,
      "d": 18.9,
      "prevK": 12.3,
      "prevD": 23.8,
      "h8": 32.62,
      "l8": 31.85
    }
  },
  {
    "code": "3532",
    "name": "台勝科",
    "categories": [
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "TurnoverRate"
    ],
    "price": 369.0,
    "prevClose": 371.5,
    "open": 360.0,
    "high": 402.5,
    "low": 360.0,
    "volume": 19299,
    "ma5": 350.3,
    "ma10": 326.35,
    "ma20": 333.38,
    "ma60": 358.52,
    "vMa5": 12234,
    "vMa10": 7922,
    "maxVol10d": 19299,
    "hasVolumeBurst": true,
    "high5d": 402.5,
    "high10d": 402.5,
    "high20d": 499.0,
    "sparkline": [
      316.5,
      316.0,
      312.5,
      283.0,
      284.0,
      312.0,
      343.0,
      356.0,
      371.5,
      369.0
    ],
    "k5d": [
      {
        "open": 289.0,
        "high": 312.0,
        "low": 286.5,
        "close": 312.0,
        "volume": 5841,
        "ma5": 301.5,
        "ma10": 292.95
      },
      {
        "open": 334.5,
        "high": 343.0,
        "low": 320.5,
        "close": 343.0,
        "volume": 5403,
        "ma5": 306.9,
        "ma10": 299.5
      },
      {
        "open": 343.0,
        "high": 358.0,
        "low": 330.0,
        "close": 356.0,
        "volume": 15148,
        "ma5": 315.6,
        "ma10": 307.95
      },
      {
        "open": 346.0,
        "high": 387.5,
        "low": 342.0,
        "close": 371.5,
        "volume": 15480,
        "ma5": 333.3,
        "ma10": 318.6
      },
      {
        "open": 360.0,
        "high": 402.5,
        "low": 360.0,
        "close": 369.0,
        "volume": 19299,
        "ma5": 350.3,
        "ma10": 326.35
      }
    ],
    "symbol": "3532.TW",
    "kd": {
      "k": 80.0,
      "d": 71.8,
      "prevK": 82.2,
      "prevD": 67.6,
      "h8": 387.5,
      "l8": 265.5
    }
  },
  {
    "code": "6640",
    "name": "均華",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 1065.0,
    "prevClose": 1070.0,
    "open": 1070.0,
    "high": 1105.0,
    "low": 1040.0,
    "volume": 310,
    "ma5": 1043.0,
    "ma10": 994.1,
    "ma20": 934.85,
    "ma60": 1047.02,
    "vMa5": 351,
    "vMa10": 283,
    "maxVol10d": 645,
    "hasVolumeBurst": true,
    "high5d": 1130.0,
    "high10d": 1130.0,
    "high20d": 1130.0,
    "sparkline": [
      910.0,
      948.0,
      918.0,
      1005.0,
      945.0,
      1000.0,
      995.0,
      1085.0,
      1070.0,
      1065.0
    ],
    "k5d": [
      {
        "open": 938.0,
        "high": 1025.0,
        "low": 938.0,
        "close": 1000.0,
        "volume": 314,
        "ma5": 963.2,
        "ma10": 902.8
      },
      {
        "open": 1020.0,
        "high": 1035.0,
        "low": 995.0,
        "close": 995.0,
        "volume": 221,
        "ma5": 972.6,
        "ma10": 926.7
      },
      {
        "open": 1005.0,
        "high": 1090.0,
        "low": 995.0,
        "close": 1085.0,
        "volume": 457,
        "ma5": 1006.0,
        "ma10": 952.9
      },
      {
        "open": 1085.0,
        "high": 1130.0,
        "low": 1060.0,
        "close": 1070.0,
        "volume": 452,
        "ma5": 1019.0,
        "ma10": 976.1
      },
      {
        "open": 1070.0,
        "high": 1105.0,
        "low": 1040.0,
        "close": 1065.0,
        "volume": 310,
        "ma5": 1043.0,
        "ma10": 994.1
      }
    ],
    "symbol": "6640.TWO",
    "kd": {
      "k": 75.8,
      "d": 73.5,
      "prevK": 76.3,
      "prevD": 72.3,
      "h8": 1130.0,
      "l8": 873.0
    }
  },
  {
    "code": "7828",
    "name": "創新服務",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 1630.0,
    "prevClose": 1725.0,
    "open": 1725.0,
    "high": 1735.0,
    "low": 1625.0,
    "volume": 158,
    "ma5": 1742.0,
    "ma10": 1718.5,
    "ma20": 1632.75,
    "ma60": 1798.67,
    "vMa5": 238,
    "vMa10": 184,
    "maxVol10d": 357,
    "hasVolumeBurst": true,
    "high5d": 1880.0,
    "high10d": 1880.0,
    "high20d": 2010.0,
    "sparkline": [
      1750.0,
      1755.0,
      1710.0,
      1655.0,
      1605.0,
      1760.0,
      1875.0,
      1720.0,
      1725.0,
      1630.0
    ],
    "k5d": [
      {
        "open": 1625.0,
        "high": 1760.0,
        "low": 1625.0,
        "close": 1760.0,
        "volume": 357,
        "ma5": 1697.0,
        "ma10": 1587.0
      },
      {
        "open": 1880.0,
        "high": 1880.0,
        "low": 1785.0,
        "close": 1875.0,
        "volume": 286,
        "ma5": 1721.0,
        "ma10": 1652.5
      },
      {
        "open": 1875.0,
        "high": 1875.0,
        "low": 1720.0,
        "close": 1720.0,
        "volume": 220,
        "ma5": 1723.0,
        "ma10": 1690.5
      },
      {
        "open": 1680.0,
        "high": 1730.0,
        "low": 1630.0,
        "close": 1725.0,
        "volume": 168,
        "ma5": 1737.0,
        "ma10": 1716.5
      },
      {
        "open": 1725.0,
        "high": 1735.0,
        "low": 1625.0,
        "close": 1630.0,
        "volume": 158,
        "ma5": 1742.0,
        "ma10": 1718.5
      }
    ],
    "symbol": "7828.TWO",
    "kd": {
      "k": 53.1,
      "d": 65.9,
      "prevK": 67.6,
      "prevD": 72.3,
      "h8": 1880.0,
      "l8": 1550.0
    }
  },
  {
    "code": "9945",
    "name": "潤泰新",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 29.7,
    "prevClose": 30.2,
    "open": 30.2,
    "high": 30.2,
    "low": 29.6,
    "volume": 11011,
    "ma5": 28.8,
    "ma10": 27.78,
    "ma20": 27.12,
    "ma60": 26.27,
    "vMa5": 15550,
    "vMa10": 10318,
    "maxVol10d": 37020,
    "hasVolumeBurst": true,
    "high5d": 30.85,
    "high10d": 30.85,
    "high20d": 30.85,
    "sparkline": [
      26.4,
      26.35,
      26.75,
      27.25,
      27.05,
      27.2,
      27.1,
      29.8,
      30.2,
      29.7
    ],
    "k5d": [
      {
        "open": 27.05,
        "high": 27.35,
        "low": 27.0,
        "close": 27.2,
        "volume": 5315,
        "ma5": 26.92,
        "ma10": 26.84
      },
      {
        "open": 27.4,
        "high": 27.4,
        "low": 26.8,
        "close": 27.1,
        "volume": 4277,
        "ma5": 27.07,
        "ma10": 26.88
      },
      {
        "open": 28.1,
        "high": 29.8,
        "low": 28.05,
        "close": 29.8,
        "volume": 37020,
        "ma5": 27.68,
        "ma10": 27.16
      },
      {
        "open": 30.1,
        "high": 30.85,
        "low": 29.8,
        "close": 30.2,
        "volume": 20128,
        "ma5": 28.27,
        "ma10": 27.48
      },
      {
        "open": 30.2,
        "high": 30.2,
        "low": 29.6,
        "close": 29.7,
        "volume": 11011,
        "ma5": 28.8,
        "ma10": 27.78
      }
    ],
    "symbol": "9945.TW",
    "kd": {
      "k": 80.4,
      "d": 77.2,
      "prevK": 83.0,
      "prevD": 75.6,
      "h8": 30.85,
      "l8": 26.2
    }
  },
  {
    "code": "1102",
    "name": "亞泥",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D"
    ],
    "price": 33.5,
    "prevClose": 33.45,
    "open": 33.3,
    "high": 33.5,
    "low": 33.2,
    "volume": 5612,
    "ma5": 32.89,
    "ma10": 32.83,
    "ma20": 32.82,
    "ma60": 34.14,
    "vMa5": 13316,
    "vMa10": 9830,
    "maxVol10d": 26134,
    "hasVolumeBurst": true,
    "high5d": 33.8,
    "high10d": 33.8,
    "high20d": 33.8,
    "sparkline": [
      32.6,
      32.95,
      32.85,
      32.95,
      32.45,
      32.35,
      31.7,
      33.45,
      33.45,
      33.5
    ],
    "k5d": [
      {
        "open": 32.6,
        "high": 32.65,
        "low": 32.3,
        "close": 32.35,
        "volume": 7085,
        "ma5": 32.71,
        "ma10": 32.75
      },
      {
        "open": 32.55,
        "high": 32.55,
        "low": 31.6,
        "close": 31.7,
        "volume": 19359,
        "ma5": 32.46,
        "ma10": 32.6
      },
      {
        "open": 32.5,
        "high": 33.45,
        "low": 32.45,
        "close": 33.45,
        "volume": 26134,
        "ma5": 32.58,
        "ma10": 32.64
      },
      {
        "open": 33.3,
        "high": 33.8,
        "low": 33.2,
        "close": 33.45,
        "volume": 8390,
        "ma5": 32.68,
        "ma10": 32.72
      },
      {
        "open": 33.3,
        "high": 33.5,
        "low": 33.2,
        "close": 33.5,
        "volume": 5612,
        "ma5": 32.89,
        "ma10": 32.83
      }
    ],
    "symbol": "1102.TW",
    "kd": {
      "k": 68.5,
      "d": 52.2,
      "prevK": 59.5,
      "prevD": 44.1,
      "h8": 33.8,
      "l8": 31.6
    }
  },
  {
    "code": "9105",
    "name": "泰金寶-DR",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 8.42,
    "prevClose": 8.82,
    "open": 8.82,
    "high": 8.83,
    "low": 8.4,
    "volume": 25038,
    "ma5": 8.5,
    "ma10": 8.35,
    "ma20": 8.25,
    "ma60": 9.02,
    "vMa5": 24892,
    "vMa10": 19390,
    "maxVol10d": 37843,
    "hasVolumeBurst": true,
    "high5d": 9.09,
    "high10d": 9.09,
    "high20d": 9.09,
    "sparkline": [
      8.21,
      8.18,
      8.08,
      8.28,
      8.27,
      8.33,
      8.3,
      8.61,
      8.82,
      8.42
    ],
    "k5d": [
      {
        "open": 8.28,
        "high": 8.46,
        "low": 8.28,
        "close": 8.33,
        "volume": 14382,
        "ma5": 8.23,
        "ma10": 8.15
      },
      {
        "open": 8.45,
        "high": 8.51,
        "low": 8.29,
        "close": 8.3,
        "volume": 13446,
        "ma5": 8.25,
        "ma10": 8.23
      },
      {
        "open": 8.32,
        "high": 8.7,
        "low": 8.32,
        "close": 8.61,
        "volume": 33750,
        "ma5": 8.36,
        "ma10": 8.28
      },
      {
        "open": 8.74,
        "high": 9.09,
        "low": 8.42,
        "close": 8.82,
        "volume": 37843,
        "ma5": 8.47,
        "ma10": 8.34
      },
      {
        "open": 8.82,
        "high": 8.83,
        "low": 8.4,
        "close": 8.42,
        "volume": 25038,
        "ma5": 8.5,
        "ma10": 8.35
      }
    ],
    "symbol": "9105.TW",
    "kd": {
      "k": 59.8,
      "d": 66.5,
      "prevK": 72.9,
      "prevD": 69.8,
      "h8": 9.09,
      "l8": 8.08
    }
  },
  {
    "code": "2323",
    "name": "中環",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 11.1,
    "prevClose": 11.7,
    "open": 11.6,
    "high": 11.8,
    "low": 11.0,
    "volume": 15397,
    "ma5": 10.94,
    "ma10": 10.61,
    "ma20": 10.36,
    "ma60": 10.89,
    "vMa5": 15804,
    "vMa10": 10056,
    "maxVol10d": 38335,
    "hasVolumeBurst": true,
    "high5d": 11.95,
    "high10d": 11.95,
    "high20d": 11.95,
    "sparkline": [
      10.3,
      10.35,
      10.25,
      10.25,
      10.2,
      10.3,
      10.3,
      11.3,
      11.7,
      11.1
    ],
    "k5d": [
      {
        "open": 10.2,
        "high": 10.35,
        "low": 10.15,
        "close": 10.3,
        "volume": 2697,
        "ma5": 10.27,
        "ma10": 10.14
      },
      {
        "open": 10.35,
        "high": 10.45,
        "low": 10.25,
        "close": 10.3,
        "volume": 7570,
        "ma5": 10.26,
        "ma10": 10.23
      },
      {
        "open": 11.0,
        "high": 11.3,
        "low": 10.95,
        "close": 11.3,
        "volume": 15021,
        "ma5": 10.47,
        "ma10": 10.37
      },
      {
        "open": 10.95,
        "high": 11.95,
        "low": 10.6,
        "close": 11.7,
        "volume": 38335,
        "ma5": 10.76,
        "ma10": 10.53
      },
      {
        "open": 11.6,
        "high": 11.8,
        "low": 11.0,
        "close": 11.1,
        "volume": 15397,
        "ma5": 10.94,
        "ma10": 10.61
      }
    ],
    "symbol": "2323.TW",
    "kd": {
      "k": 74.6,
      "d": 77.0,
      "prevK": 84.3,
      "prevD": 78.2,
      "h8": 11.95,
      "l8": 10.05
    }
  },
  {
    "code": "1336",
    "name": "台翰",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 17.5,
    "prevClose": 18.0,
    "open": 17.6,
    "high": 17.9,
    "low": 17.25,
    "volume": 763,
    "ma5": 17.08,
    "ma10": 16.12,
    "ma20": 15.71,
    "ma60": 15.0,
    "vMa5": 1789,
    "vMa10": 995,
    "maxVol10d": 3476,
    "hasVolumeBurst": true,
    "high5d": 18.6,
    "high10d": 18.6,
    "high20d": 18.6,
    "sparkline": [
      15.2,
      15.1,
      14.55,
      14.75,
      16.2,
      16.2,
      16.05,
      17.65,
      18.0,
      17.5
    ],
    "k5d": [
      {
        "open": 16.5,
        "high": 16.8,
        "low": 16.0,
        "close": 16.2,
        "volume": 1351,
        "ma5": 15.36,
        "ma10": 15.15
      },
      {
        "open": 16.5,
        "high": 16.5,
        "low": 15.95,
        "close": 16.05,
        "volume": 342,
        "ma5": 15.55,
        "ma10": 15.32
      },
      {
        "open": 16.2,
        "high": 17.65,
        "low": 16.05,
        "close": 17.65,
        "volume": 3476,
        "ma5": 16.17,
        "ma10": 15.59
      },
      {
        "open": 18.35,
        "high": 18.6,
        "low": 17.2,
        "close": 18.0,
        "volume": 3014,
        "ma5": 16.82,
        "ma10": 15.89
      },
      {
        "open": 17.6,
        "high": 17.9,
        "low": 17.25,
        "close": 17.5,
        "volume": 763,
        "ma5": 17.08,
        "ma10": 16.12
      }
    ],
    "symbol": "1336.TWO",
    "kd": {
      "k": 77.3,
      "d": 71.5,
      "prevK": 79.6,
      "prevD": 68.5,
      "h8": 18.6,
      "l8": 14.55
    }
  },
  {
    "code": "3388",
    "name": "崇越電",
    "categories": [
      "Top100",
      "ValueTop",
      "TurnoverRate"
    ],
    "price": 101.0,
    "prevClose": 92.2,
    "open": 96.7,
    "high": 101.0,
    "low": 94.1,
    "volume": 11801,
    "ma5": 85.8,
    "ma10": 79.39,
    "ma20": 75.68,
    "ma60": 84.63,
    "vMa5": 5274,
    "vMa10": 2830,
    "maxVol10d": 11801,
    "hasVolumeBurst": true,
    "high5d": 101.0,
    "high10d": 101.0,
    "high20d": 101.0,
    "sparkline": [
      73.2,
      73.4,
      72.6,
      73.1,
      72.6,
      75.6,
      76.3,
      83.9,
      92.2,
      101.0
    ],
    "k5d": [
      {
        "open": 72.9,
        "high": 75.7,
        "low": 72.4,
        "close": 75.6,
        "volume": 1116,
        "ma5": 73.46,
        "ma10": 72.49
      },
      {
        "open": 78.6,
        "high": 78.9,
        "low": 74.8,
        "close": 76.3,
        "volume": 1149,
        "ma5": 74.04,
        "ma10": 73.31
      },
      {
        "open": 76.7,
        "high": 83.9,
        "low": 76.7,
        "close": 83.9,
        "volume": 2726,
        "ma5": 76.3,
        "ma10": 74.52
      },
      {
        "open": 91.7,
        "high": 92.2,
        "low": 90.0,
        "close": 92.2,
        "volume": 9580,
        "ma5": 80.12,
        "ma10": 76.61
      },
      {
        "open": 96.7,
        "high": 101.0,
        "low": 94.1,
        "close": 101.0,
        "volume": 11801,
        "ma5": 85.8,
        "ma10": 79.39
      }
    ],
    "symbol": "3388.TWO",
    "kd": {
      "k": 93.2,
      "d": 85.5,
      "prevK": 89.8,
      "prevD": 81.6,
      "h8": 92.2,
      "l8": 71.9
    }
  },
  {
    "code": "8932",
    "name": "智通*",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 109.0,
    "prevClose": 110.0,
    "open": 109.5,
    "high": 111.5,
    "low": 107.5,
    "volume": 2320,
    "ma5": 107.9,
    "ma10": 104.49,
    "ma20": 102.68,
    "ma60": 105.99,
    "vMa5": 2581,
    "vMa10": 2305,
    "maxVol10d": 3230,
    "hasVolumeBurst": false,
    "high5d": 113.0,
    "high10d": 113.0,
    "high20d": 121.5,
    "sparkline": [
      99.4,
      101.0,
      98.0,
      102.0,
      105.0,
      107.5,
      105.0,
      108.0,
      110.0,
      109.0
    ],
    "k5d": [
      {
        "open": 105.0,
        "high": 109.0,
        "low": 103.5,
        "close": 107.5,
        "volume": 2321,
        "ma5": 102.7,
        "ma10": 98.06
      },
      {
        "open": 108.5,
        "high": 108.5,
        "low": 105.0,
        "close": 105.0,
        "volume": 2230,
        "ma5": 103.5,
        "ma10": 99.9
      },
      {
        "open": 105.0,
        "high": 109.5,
        "low": 105.0,
        "close": 108.0,
        "volume": 2804,
        "ma5": 105.5,
        "ma10": 101.83
      },
      {
        "open": 108.0,
        "high": 113.0,
        "low": 107.0,
        "close": 110.0,
        "volume": 3230,
        "ma5": 107.1,
        "ma10": 103.47
      },
      {
        "open": 109.5,
        "high": 111.5,
        "low": 107.5,
        "close": 109.0,
        "volume": 2320,
        "ma5": 107.9,
        "ma10": 104.49
      }
    ],
    "symbol": "8932.TWO",
    "kd": {
      "k": 80.9,
      "d": 78.8,
      "prevK": 83.6,
      "prevD": 77.7,
      "h8": 113.0,
      "l8": 96.6
    }
  },
  {
    "code": "6727",
    "name": "亞泰金屬",
    "categories": [
      "MajorBuy",
      "TurnoverRate",
      "ValueTop",
      "MajorBuy3D"
    ],
    "price": 441.5,
    "prevClose": 475.0,
    "open": 472.0,
    "high": 481.0,
    "low": 438.0,
    "volume": 1956,
    "ma5": 427.3,
    "ma10": 410.5,
    "ma20": 377.1,
    "ma60": 432.31,
    "vMa5": 1709,
    "vMa10": 1228,
    "maxVol10d": 3393,
    "hasVolumeBurst": true,
    "high5d": 481.0,
    "high10d": 481.0,
    "high20d": 481.0,
    "sparkline": [
      407.0,
      400.0,
      383.0,
      388.0,
      390.5,
      395.0,
      393.0,
      432.0,
      475.0,
      441.5
    ],
    "k5d": [
      {
        "open": 388.0,
        "high": 408.0,
        "low": 388.0,
        "close": 395.0,
        "volume": 661,
        "ma5": 391.3,
        "ma10": 365.45
      },
      {
        "open": 408.0,
        "high": 408.0,
        "low": 390.0,
        "close": 393.0,
        "volume": 650,
        "ma5": 389.9,
        "ma10": 376.9
      },
      {
        "open": 396.0,
        "high": 432.0,
        "low": 382.0,
        "close": 432.0,
        "volume": 1883,
        "ma5": 399.7,
        "ma10": 389.5
      },
      {
        "open": 440.0,
        "high": 475.0,
        "low": 430.0,
        "close": 475.0,
        "volume": 3393,
        "ma5": 417.1,
        "ma10": 403.35
      },
      {
        "open": 472.0,
        "high": 481.0,
        "low": 438.0,
        "close": 441.5,
        "volume": 1956,
        "ma5": 427.3,
        "ma10": 410.5
      }
    ],
    "symbol": "6727.TWO",
    "kd": {
      "k": 75.1,
      "d": 72.8,
      "prevK": 81.6,
      "prevD": 71.6,
      "h8": 475.0,
      "l8": 377.0
    }
  },
  {
    "code": "7402",
    "name": "邑錡",
    "categories": [
      "TurnoverRate"
    ],
    "price": 113.0,
    "prevClose": 118.0,
    "open": 115.5,
    "high": 119.5,
    "low": 112.5,
    "volume": 1282,
    "ma5": 111.1,
    "ma10": 107.9,
    "ma20": 105.77,
    "ma60": 108.67,
    "vMa5": 1370,
    "vMa10": 924,
    "maxVol10d": 3385,
    "hasVolumeBurst": true,
    "high5d": 123.0,
    "high10d": 123.0,
    "high20d": 123.0,
    "sparkline": [
      106.0,
      104.5,
      103.5,
      103.0,
      106.5,
      104.0,
      105.0,
      115.5,
      118.0,
      113.0
    ],
    "k5d": [
      {
        "open": 107.0,
        "high": 107.0,
        "low": 103.0,
        "close": 104.0,
        "volume": 450,
        "ma5": 104.3,
        "ma10": 102.65
      },
      {
        "open": 104.5,
        "high": 106.0,
        "low": 104.0,
        "close": 105.0,
        "volume": 345,
        "ma5": 104.4,
        "ma10": 103.75
      },
      {
        "open": 107.0,
        "high": 115.5,
        "low": 103.5,
        "close": 115.5,
        "volume": 1387,
        "ma5": 106.8,
        "ma10": 105.1
      },
      {
        "open": 122.0,
        "high": 123.0,
        "low": 112.5,
        "close": 118.0,
        "volume": 3385,
        "ma5": 109.8,
        "ma10": 106.8
      },
      {
        "open": 115.5,
        "high": 119.5,
        "low": 112.5,
        "close": 113.0,
        "volume": 1282,
        "ma5": 111.1,
        "ma10": 107.9
      }
    ],
    "symbol": "7402.TWO",
    "kd": {
      "k": 66.2,
      "d": 64.5,
      "prevK": 71.5,
      "prevD": 63.6,
      "h8": 123.0,
      "l8": 100.5
    }
  },
  {
    "code": "5530",
    "name": "龍巖",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 49.25,
    "prevClose": 49.85,
    "open": 49.85,
    "high": 49.85,
    "low": 48.9,
    "volume": 218,
    "ma5": 49.75,
    "ma10": 49.03,
    "ma20": 48.36,
    "ma60": 48.78,
    "vMa5": 425,
    "vMa10": 375,
    "maxVol10d": 891,
    "hasVolumeBurst": true,
    "high5d": 50.9,
    "high10d": 50.9,
    "high20d": 50.9,
    "sparkline": [
      47.5,
      47.25,
      47.3,
      49.85,
      49.65,
      49.35,
      49.5,
      50.8,
      49.85,
      49.25
    ],
    "k5d": [
      {
        "open": 49.65,
        "high": 49.65,
        "low": 48.95,
        "close": 49.35,
        "volume": 215,
        "ma5": 48.68,
        "ma10": 47.99
      },
      {
        "open": 49.35,
        "high": 50.0,
        "low": 49.05,
        "close": 49.5,
        "volume": 376,
        "ma5": 49.13,
        "ma10": 48.23
      },
      {
        "open": 49.6,
        "high": 50.9,
        "low": 49.3,
        "close": 50.8,
        "volume": 882,
        "ma5": 49.83,
        "ma10": 48.57
      },
      {
        "open": 50.9,
        "high": 50.9,
        "low": 49.5,
        "close": 49.85,
        "volume": 433,
        "ma5": 49.83,
        "ma10": 48.85
      },
      {
        "open": 49.85,
        "high": 49.85,
        "low": 48.9,
        "close": 49.25,
        "volume": 218,
        "ma5": 49.75,
        "ma10": 49.03
      }
    ],
    "symbol": "5530.TWO",
    "kd": {
      "k": 69.7,
      "d": 69.6,
      "prevK": 76.0,
      "prevD": 69.6,
      "h8": 50.9,
      "l8": 47.05
    }
  },
  {
    "code": "4167",
    "name": "松瑞藥",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 19.35,
    "prevClose": 19.4,
    "open": 19.5,
    "high": 19.5,
    "low": 19.1,
    "volume": 547,
    "ma5": 18.94,
    "ma10": 18.85,
    "ma20": 18.47,
    "ma60": 18.77,
    "vMa5": 745,
    "vMa10": 1105,
    "maxVol10d": 2832,
    "hasVolumeBurst": true,
    "high5d": 19.55,
    "high10d": 20.15,
    "high20d": 20.15,
    "sparkline": [
      18.2,
      18.7,
      19.75,
      18.7,
      18.45,
      18.45,
      18.35,
      19.15,
      19.4,
      19.35
    ],
    "k5d": [
      {
        "open": 18.55,
        "high": 18.55,
        "low": 18.25,
        "close": 18.45,
        "volume": 489,
        "ma5": 18.81,
        "ma10": 18.14
      },
      {
        "open": 18.45,
        "high": 18.5,
        "low": 18.35,
        "close": 18.35,
        "volume": 327,
        "ma5": 18.74,
        "ma10": 18.3
      },
      {
        "open": 19.35,
        "high": 19.35,
        "low": 18.8,
        "close": 19.15,
        "volume": 1577,
        "ma5": 18.62,
        "ma10": 18.53
      },
      {
        "open": 19.5,
        "high": 19.55,
        "low": 18.95,
        "close": 19.4,
        "volume": 782,
        "ma5": 18.76,
        "ma10": 18.71
      },
      {
        "open": 19.5,
        "high": 19.5,
        "low": 19.1,
        "close": 19.35,
        "volume": 547,
        "ma5": 18.94,
        "ma10": 18.85
      }
    ],
    "symbol": "4167.TWO",
    "kd": {
      "k": 61.0,
      "d": 58.4,
      "prevK": 60.6,
      "prevD": 57.0,
      "h8": 20.15,
      "l8": 18.05
    }
  },
  {
    "code": "5309",
    "name": "系統電",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 52.2,
    "prevClose": 54.2,
    "open": 54.8,
    "high": 54.8,
    "low": 52.1,
    "volume": 1309,
    "ma5": 54.52,
    "ma10": 54.26,
    "ma20": 52.42,
    "ma60": 61.79,
    "vMa5": 1485,
    "vMa10": 2224,
    "maxVol10d": 4718,
    "hasVolumeBurst": true,
    "high5d": 56.5,
    "high10d": 57.0,
    "high20d": 57.0,
    "sparkline": [
      52.7,
      53.2,
      52.0,
      55.8,
      56.3,
      56.0,
      55.6,
      54.6,
      54.2,
      52.2
    ],
    "k5d": [
      {
        "open": 56.3,
        "high": 56.5,
        "low": 55.7,
        "close": 56.0,
        "volume": 1835,
        "ma5": 54.66,
        "ma10": 52.2
      },
      {
        "open": 56.1,
        "high": 56.4,
        "low": 55.6,
        "close": 55.6,
        "volume": 1544,
        "ma5": 55.14,
        "ma10": 53.28
      },
      {
        "open": 55.2,
        "high": 55.5,
        "low": 54.3,
        "close": 54.6,
        "volume": 1730,
        "ma5": 55.66,
        "ma10": 53.82
      },
      {
        "open": 55.0,
        "high": 55.2,
        "low": 53.5,
        "close": 54.2,
        "volume": 1007,
        "ma5": 55.34,
        "ma10": 54.19
      },
      {
        "open": 54.8,
        "high": 54.8,
        "low": 52.1,
        "close": 52.2,
        "volume": 1309,
        "ma5": 54.52,
        "ma10": 54.26
      }
    ],
    "symbol": "5309.TWO",
    "kd": {
      "k": 48.6,
      "d": 66.3,
      "prevK": 68.1,
      "prevD": 75.1,
      "h8": 57.0,
      "l8": 51.7
    }
  },
  {
    "code": "6163",
    "name": "華電網",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 43.4,
    "prevClose": 46.8,
    "open": 45.9,
    "high": 46.5,
    "low": 43.15,
    "volume": 3790,
    "ma5": 43.65,
    "ma10": 42.64,
    "ma20": 41.35,
    "ma60": 46.43,
    "vMa5": 2356,
    "vMa10": 1683,
    "maxVol10d": 5474,
    "hasVolumeBurst": true,
    "high5d": 46.8,
    "high10d": 46.8,
    "high20d": 47.05,
    "sparkline": [
      41.25,
      41.25,
      40.65,
      42.0,
      43.0,
      43.1,
      42.4,
      42.55,
      46.8,
      43.4
    ],
    "k5d": [
      {
        "open": 43.0,
        "high": 44.95,
        "low": 42.85,
        "close": 43.1,
        "volume": 1197,
        "ma5": 42.0,
        "ma10": 40.56
      },
      {
        "open": 43.35,
        "high": 43.8,
        "low": 42.3,
        "close": 42.4,
        "volume": 751,
        "ma5": 42.23,
        "ma10": 41.22
      },
      {
        "open": 42.4,
        "high": 42.95,
        "low": 41.75,
        "close": 42.55,
        "volume": 568,
        "ma5": 42.61,
        "ma10": 41.62
      },
      {
        "open": 42.5,
        "high": 46.8,
        "low": 42.5,
        "close": 46.8,
        "volume": 5474,
        "ma5": 43.57,
        "ma10": 42.35
      },
      {
        "open": 45.9,
        "high": 46.5,
        "low": 43.15,
        "close": 43.4,
        "volume": 3790,
        "ma5": 43.65,
        "ma10": 42.64
      }
    ],
    "symbol": "6163.TWO",
    "kd": {
      "k": 69.0,
      "d": 71.7,
      "prevK": 78.5,
      "prevD": 73.0,
      "h8": 46.8,
      "l8": 40.0
    }
  },
  {
    "code": "7751",
    "name": "竑騰",
    "categories": [
      "ValueTop"
    ],
    "price": 1535.0,
    "prevClose": 1480.0,
    "open": 1485.0,
    "high": 1580.0,
    "low": 1430.0,
    "volume": 536,
    "ma5": 1418.0,
    "ma10": 1393.0,
    "ma20": 1299.5,
    "ma60": 1387.5,
    "vMa5": 415,
    "vMa10": 347,
    "maxVol10d": 812,
    "hasVolumeBurst": true,
    "high5d": 1580.0,
    "high10d": 1580.0,
    "high20d": 1580.0,
    "sparkline": [
      1405.0,
      1405.0,
      1385.0,
      1390.0,
      1255.0,
      1315.0,
      1315.0,
      1445.0,
      1480.0,
      1535.0
    ],
    "k5d": [
      {
        "open": 1230.0,
        "high": 1320.0,
        "low": 1225.0,
        "close": 1315.0,
        "volume": 341,
        "ma5": 1350.0,
        "ma10": 1311.5
      },
      {
        "open": 1345.0,
        "high": 1360.0,
        "low": 1285.0,
        "close": 1315.0,
        "volume": 169,
        "ma5": 1332.0,
        "ma10": 1331.0
      },
      {
        "open": 1440.0,
        "high": 1445.0,
        "low": 1435.0,
        "close": 1445.0,
        "volume": 214,
        "ma5": 1344.0,
        "ma10": 1352.5
      },
      {
        "open": 1485.0,
        "high": 1580.0,
        "low": 1425.0,
        "close": 1480.0,
        "volume": 812,
        "ma5": 1362.0,
        "ma10": 1376.0
      },
      {
        "open": 1485.0,
        "high": 1580.0,
        "low": 1430.0,
        "close": 1535.0,
        "volume": 536,
        "ma5": 1418.0,
        "ma10": 1393.0
      }
    ],
    "symbol": "7751.TWO",
    "kd": {
      "k": 72.1,
      "d": 66.2,
      "prevK": 64.5,
      "prevD": 63.2,
      "h8": 1580.0,
      "l8": 1225.0
    }
  },
  {
    "code": "8261",
    "name": "富鼎",
    "categories": [
      "TurnoverRate"
    ],
    "price": 186.5,
    "prevClose": 195.5,
    "open": 196.5,
    "high": 210.5,
    "low": 185.0,
    "volume": 13131,
    "ma5": 190.6,
    "ma10": 185.4,
    "ma20": 190.97,
    "ma60": 222.05,
    "vMa5": 9634,
    "vMa10": 8426,
    "maxVol10d": 13131,
    "hasVolumeBurst": true,
    "high5d": 210.5,
    "high10d": 210.5,
    "high20d": 266.0,
    "sparkline": [
      179.5,
      186.5,
      172.0,
      179.0,
      184.0,
      184.0,
      202.0,
      185.0,
      195.5,
      186.5
    ],
    "k5d": [
      {
        "open": 184.0,
        "high": 190.0,
        "low": 183.5,
        "close": 184.0,
        "volume": 4760,
        "ma5": 181.1,
        "ma10": 175.75
      },
      {
        "open": 187.0,
        "high": 202.0,
        "low": 187.0,
        "close": 202.0,
        "volume": 10902,
        "ma5": 184.2,
        "ma10": 180.15
      },
      {
        "open": 202.5,
        "high": 202.5,
        "low": 185.0,
        "close": 185.0,
        "volume": 11947,
        "ma5": 186.8,
        "ma10": 182.3
      },
      {
        "open": 187.0,
        "high": 197.5,
        "low": 180.5,
        "close": 195.5,
        "volume": 7429,
        "ma5": 190.1,
        "ma10": 184.75
      },
      {
        "open": 196.5,
        "high": 210.5,
        "low": 185.0,
        "close": 186.5,
        "volume": 13131,
        "ma5": 190.6,
        "ma10": 185.4
      }
    ],
    "symbol": "8261.TW",
    "kd": {
      "k": 61.1,
      "d": 62.1,
      "prevK": 70.9,
      "prevD": 62.6,
      "h8": 202.5,
      "l8": 169.5
    }
  },
  {
    "code": "00657K",
    "name": "國泰日經225+U",
    "categories": [
      "TurnoverRate"
    ],
    "price": 25.16,
    "prevClose": 25.53,
    "open": 25.14,
    "high": 25.14,
    "low": 25.14,
    "volume": 0,
    "ma5": 25.23,
    "ma10": 24.79,
    "ma20": 23.99,
    "ma60": 24.61,
    "vMa5": 0,
    "vMa10": 0,
    "maxVol10d": 0,
    "hasVolumeBurst": false,
    "high5d": 25.53,
    "high10d": 25.53,
    "high20d": 25.53,
    "sparkline": [
      24.29,
      24.18,
      24.01,
      24.66,
      24.64,
      24.82,
      25.3,
      25.35,
      25.53,
      25.16
    ],
    "k5d": [
      {
        "open": 24.82,
        "high": 24.82,
        "low": 24.82,
        "close": 24.82,
        "volume": 0,
        "ma5": 24.46,
        "ma10": 23.87
      },
      {
        "open": 25.3,
        "high": 25.3,
        "low": 25.3,
        "close": 25.3,
        "volume": 0,
        "ma5": 24.69,
        "ma10": 24.15
      },
      {
        "open": 25.35,
        "high": 25.35,
        "low": 25.35,
        "close": 25.35,
        "volume": 0,
        "ma5": 24.95,
        "ma10": 24.38
      },
      {
        "open": 25.53,
        "high": 25.53,
        "low": 25.53,
        "close": 25.53,
        "volume": 0,
        "ma5": 25.13,
        "ma10": 24.61
      },
      {
        "open": 25.14,
        "high": 25.14,
        "low": 25.14,
        "close": 25.14,
        "volume": 0,
        "ma5": 25.23,
        "ma10": 24.79
      }
    ],
    "symbol": "00657K.TW",
    "kd": {
      "k": 90.1,
      "d": 91.8,
      "prevK": 98.0,
      "prevD": 92.7,
      "h8": 25.53,
      "l8": 24.01
    }
  },
  {
    "code": "2484",
    "name": "希華",
    "categories": [
      "TurnoverRate"
    ],
    "price": 71.9,
    "prevClose": 75.0,
    "open": 75.2,
    "high": 75.4,
    "low": 70.5,
    "volume": 8796,
    "ma5": 73.9,
    "ma10": 73.05,
    "ma20": 69.72,
    "ma60": 70.51,
    "vMa5": 15883,
    "vMa10": 19429,
    "maxVol10d": 39627,
    "hasVolumeBurst": false,
    "high5d": 80.7,
    "high10d": 80.7,
    "high20d": 80.7,
    "sparkline": [
      70.5,
      71.2,
      71.7,
      74.3,
      73.3,
      73.9,
      75.9,
      72.8,
      75.0,
      71.9
    ],
    "k5d": [
      {
        "open": 72.7,
        "high": 75.3,
        "low": 72.7,
        "close": 73.9,
        "volume": 10610,
        "ma5": 72.88,
        "ma10": 68.71
      },
      {
        "open": 74.5,
        "high": 80.7,
        "low": 74.3,
        "close": 75.9,
        "volume": 28139,
        "ma5": 73.82,
        "ma10": 70.54
      },
      {
        "open": 76.6,
        "high": 77.2,
        "low": 71.8,
        "close": 72.8,
        "volume": 13241,
        "ma5": 74.04,
        "ma10": 71.71
      },
      {
        "open": 74.2,
        "high": 76.4,
        "low": 73.0,
        "close": 75.0,
        "volume": 18630,
        "ma5": 74.18,
        "ma10": 72.85
      },
      {
        "open": 75.2,
        "high": 75.4,
        "low": 70.5,
        "close": 71.9,
        "volume": 8796,
        "ma5": 73.9,
        "ma10": 73.05
      }
    ],
    "symbol": "2484.TW",
    "kd": {
      "k": 52.2,
      "d": 61.8,
      "prevK": 63.4,
      "prevD": 66.7,
      "h8": 80.7,
      "l8": 68.2
    }
  },
  {
    "code": "00686R",
    "name": "群益臺灣加權反1",
    "categories": [
      "TurnoverRate"
    ],
    "price": 1.0,
    "prevClose": 0.99,
    "open": 0.99,
    "high": 1.01,
    "low": 0.99,
    "volume": 24270,
    "ma5": 0.99,
    "ma10": 1.0,
    "ma20": 1.03,
    "ma60": 1.02,
    "vMa5": 14674,
    "vMa10": 12678,
    "maxVol10d": 24270,
    "hasVolumeBurst": true,
    "high5d": 1.01,
    "high10d": 1.03,
    "high20d": 1.15,
    "sparkline": [
      1.02,
      1.01,
      1.02,
      1.01,
      1.01,
      1.0,
      0.99,
      0.99,
      0.99,
      1.0
    ],
    "k5d": [
      {
        "open": 1.0,
        "high": 1.01,
        "low": 0.99,
        "close": 1.0,
        "volume": 7313,
        "ma5": 1.01,
        "ma10": 1.03
      },
      {
        "open": 0.99,
        "high": 0.99,
        "low": 0.98,
        "close": 0.99,
        "volume": 9748,
        "ma5": 1.01,
        "ma10": 1.02
      },
      {
        "open": 0.98,
        "high": 1.0,
        "low": 0.98,
        "close": 0.99,
        "volume": 18123,
        "ma5": 1.0,
        "ma10": 1.01
      },
      {
        "open": 0.99,
        "high": 1.0,
        "low": 0.98,
        "close": 0.99,
        "volume": 13918,
        "ma5": 1.0,
        "ma10": 1.01
      },
      {
        "open": 0.99,
        "high": 1.01,
        "low": 0.99,
        "close": 1.0,
        "volume": 24270,
        "ma5": 0.99,
        "ma10": 1.0
      }
    ],
    "symbol": "00686R.TW",
    "kd": {
      "k": 22.9,
      "d": 17.3,
      "prevK": 14.4,
      "prevD": 14.5,
      "h8": 1.03,
      "l8": 0.98
    }
  },
  {
    "code": "1810",
    "name": "和成",
    "categories": [
      "TurnoverRate"
    ],
    "price": 26.85,
    "prevClose": 26.2,
    "open": 26.0,
    "high": 28.45,
    "low": 26.0,
    "volume": 16546,
    "ma5": 25.97,
    "ma10": 25.33,
    "ma20": 25.93,
    "ma60": 23.58,
    "vMa5": 15701,
    "vMa10": 10395,
    "maxVol10d": 24272,
    "hasVolumeBurst": true,
    "high5d": 29.0,
    "high10d": 29.0,
    "high20d": 34.15,
    "sparkline": [
      24.9,
      24.5,
      24.6,
      24.65,
      24.8,
      24.2,
      25.05,
      27.55,
      26.2,
      26.85
    ],
    "k5d": [
      {
        "open": 24.5,
        "high": 24.7,
        "low": 24.1,
        "close": 24.2,
        "volume": 3660,
        "ma5": 24.55,
        "ma10": 24.43
      },
      {
        "open": 24.45,
        "high": 26.4,
        "low": 24.45,
        "close": 25.05,
        "volume": 10202,
        "ma5": 24.66,
        "ma10": 24.58
      },
      {
        "open": 25.2,
        "high": 27.55,
        "low": 24.3,
        "close": 27.55,
        "volume": 24272,
        "ma5": 25.25,
        "ma10": 24.9
      },
      {
        "open": 28.05,
        "high": 29.0,
        "low": 26.05,
        "close": 26.2,
        "volume": 23825,
        "ma5": 25.56,
        "ma10": 25.13
      },
      {
        "open": 26.0,
        "high": 28.45,
        "low": 26.0,
        "close": 26.85,
        "volume": 16546,
        "ma5": 25.97,
        "ma10": 25.33
      }
    ],
    "symbol": "1810.TW",
    "kd": {
      "k": 57.7,
      "d": 52.7,
      "prevK": 57.0,
      "prevD": 50.2,
      "h8": 29.0,
      "l8": 23.75
    }
  },
  {
    "code": "6672",
    "name": "騰輝電子-KY",
    "categories": [
      "TurnoverRate"
    ],
    "price": 288.0,
    "prevClose": 283.0,
    "open": 283.0,
    "high": 295.0,
    "low": 277.5,
    "volume": 8348,
    "ma5": 274.7,
    "ma10": 256.5,
    "ma20": 233.53,
    "ma60": 246.07,
    "vMa5": 5849,
    "vMa10": 5052,
    "maxVol10d": 8348,
    "hasVolumeBurst": true,
    "high5d": 295.0,
    "high10d": 295.0,
    "high20d": 295.0,
    "sparkline": [
      221.5,
      232.5,
      229.0,
      251.5,
      257.0,
      268.0,
      264.5,
      270.0,
      283.0,
      288.0
    ],
    "k5d": [
      {
        "open": 252.5,
        "high": 270.0,
        "low": 252.0,
        "close": 268.0,
        "volume": 5260,
        "ma5": 247.6,
        "ma10": 226.85
      },
      {
        "open": 269.5,
        "high": 272.5,
        "low": 260.0,
        "close": 264.5,
        "volume": 4448,
        "ma5": 254.0,
        "ma10": 235.2
      },
      {
        "open": 264.5,
        "high": 284.5,
        "low": 258.5,
        "close": 270.0,
        "volume": 6160,
        "ma5": 262.2,
        "ma10": 242.4
      },
      {
        "open": 271.0,
        "high": 288.0,
        "low": 266.0,
        "close": 283.0,
        "volume": 5027,
        "ma5": 268.5,
        "ma10": 249.55
      },
      {
        "open": 283.0,
        "high": 295.0,
        "low": 277.5,
        "close": 288.0,
        "volume": 8348,
        "ma5": 274.7,
        "ma10": 256.5
      }
    ],
    "symbol": "6672.TW",
    "kd": {
      "k": 89.6,
      "d": 86.6,
      "prevK": 88.8,
      "prevD": 85.1,
      "h8": 288.0,
      "l8": 216.0
    }
  },
  {
    "code": "00668",
    "name": "國泰美國道瓊",
    "categories": [
      "TurnoverRate"
    ],
    "price": 62.2,
    "prevClose": 62.6,
    "open": 62.15,
    "high": 62.2,
    "low": 62.1,
    "volume": 384,
    "ma5": 62.82,
    "ma10": 63.24,
    "ma20": 62.56,
    "ma60": 60.88,
    "vMa5": 262,
    "vMa10": 221,
    "maxVol10d": 560,
    "hasVolumeBurst": true,
    "high5d": 63.4,
    "high10d": 64.15,
    "high20d": 64.15,
    "sparkline": [
      64.0,
      64.05,
      63.25,
      63.55,
      63.4,
      63.2,
      63.1,
      63.0,
      62.6,
      62.2
    ],
    "k5d": [
      {
        "open": 63.4,
        "high": 63.4,
        "low": 63.15,
        "close": 63.2,
        "volume": 20,
        "ma5": 63.49,
        "ma10": 63.0
      },
      {
        "open": 63.15,
        "high": 63.2,
        "low": 63.05,
        "close": 63.1,
        "volume": 34,
        "ma5": 63.3,
        "ma10": 63.2
      },
      {
        "open": 63.05,
        "high": 63.05,
        "low": 63.0,
        "close": 63.0,
        "volume": 560,
        "ma5": 63.25,
        "ma10": 63.29
      },
      {
        "open": 62.75,
        "high": 62.75,
        "low": 62.55,
        "close": 62.6,
        "volume": 311,
        "ma5": 63.06,
        "ma10": 63.32
      },
      {
        "open": 62.15,
        "high": 62.2,
        "low": 62.1,
        "close": 62.2,
        "volume": 384,
        "ma5": 62.82,
        "ma10": 63.24
      }
    ],
    "symbol": "00668.TW",
    "kd": {
      "k": 22.7,
      "d": 43.5,
      "prevK": 31.5,
      "prevD": 53.9,
      "h8": 64.05,
      "l8": 62.55
    }
  },
  {
    "code": "4967",
    "name": "十銓",
    "categories": [
      "TurnoverRate"
    ],
    "price": 252.0,
    "prevClose": 263.5,
    "open": 265.0,
    "high": 267.0,
    "low": 252.0,
    "volume": 3648,
    "ma5": 270.1,
    "ma10": 273.1,
    "ma20": 248.97,
    "ma60": 257.43,
    "vMa5": 3982,
    "vMa10": 5635,
    "maxVol10d": 10211,
    "hasVolumeBurst": false,
    "high5d": 284.5,
    "high10d": 288.5,
    "high20d": 288.5,
    "sparkline": [
      265.5,
      280.0,
      280.0,
      280.5,
      274.5,
      279.5,
      280.5,
      275.0,
      263.5,
      252.0
    ],
    "k5d": [
      {
        "open": 277.0,
        "high": 281.0,
        "low": 276.0,
        "close": 279.5,
        "volume": 3593,
        "ma5": 278.9,
        "ma10": 260.25
      },
      {
        "open": 283.0,
        "high": 284.5,
        "low": 279.5,
        "close": 280.5,
        "volume": 4470,
        "ma5": 279.0,
        "ma10": 267.05
      },
      {
        "open": 283.5,
        "high": 284.5,
        "low": 274.0,
        "close": 275.0,
        "volume": 4529,
        "ma5": 278.0,
        "ma10": 271.2
      },
      {
        "open": 270.0,
        "high": 270.0,
        "low": 262.5,
        "close": 263.5,
        "volume": 3670,
        "ma5": 274.6,
        "ma10": 273.55
      },
      {
        "open": 265.0,
        "high": 267.0,
        "low": 252.0,
        "close": 252.0,
        "volume": 3648,
        "ma5": 270.1,
        "ma10": 273.1
      }
    ],
    "symbol": "4967.TW",
    "kd": {
      "k": 36.5,
      "d": 62.1,
      "prevK": 54.8,
      "prevD": 74.8,
      "h8": 288.5,
      "l8": 262.5
    }
  },
  {
    "code": "00678",
    "name": "群益那斯達克生技",
    "categories": [
      "TurnoverRate"
    ],
    "price": 41.95,
    "prevClose": 41.56,
    "open": 41.96,
    "high": 41.96,
    "low": 41.92,
    "volume": 422,
    "ma5": 42.0,
    "ma10": 41.71,
    "ma20": 41.12,
    "ma60": 39.16,
    "vMa5": 363,
    "vMa10": 358,
    "maxVol10d": 520,
    "hasVolumeBurst": false,
    "high5d": 42.4,
    "high10d": 42.47,
    "high20d": 42.47,
    "sparkline": [
      40.8,
      40.97,
      41.0,
      41.91,
      42.43,
      42.22,
      42.4,
      41.88,
      41.56,
      41.95
    ],
    "k5d": [
      {
        "open": 42.28,
        "high": 42.28,
        "low": 42.15,
        "close": 42.22,
        "volume": 237,
        "ma5": 41.71,
        "ma10": 41.12
      },
      {
        "open": 42.37,
        "high": 42.4,
        "low": 42.37,
        "close": 42.4,
        "volume": 241,
        "ma5": 41.99,
        "ma10": 41.31
      },
      {
        "open": 42.4,
        "high": 42.4,
        "low": 41.79,
        "close": 41.88,
        "volume": 395,
        "ma5": 42.17,
        "ma10": 41.39
      },
      {
        "open": 41.75,
        "high": 41.81,
        "low": 41.53,
        "close": 41.56,
        "volume": 520,
        "ma5": 42.1,
        "ma10": 41.52
      },
      {
        "open": 41.96,
        "high": 41.96,
        "low": 41.92,
        "close": 41.95,
        "volume": 422,
        "ma5": 42.0,
        "ma10": 41.71
      }
    ],
    "symbol": "00678.TW",
    "kd": {
      "k": 71.6,
      "d": 78.3,
      "prevK": 73.9,
      "prevD": 81.7,
      "h8": 42.47,
      "l8": 40.89
    }
  },
  {
    "code": "00859B",
    "name": "群益0-1年美債",
    "categories": [
      "TurnoverRate"
    ],
    "price": 41.16,
    "prevClose": 41.18,
    "open": 41.14,
    "high": 41.16,
    "low": 41.04,
    "volume": 2967,
    "ma5": 41.35,
    "ma10": 41.45,
    "ma20": 41.55,
    "ma60": 41.19,
    "vMa5": 2825,
    "vMa10": 2772,
    "maxVol10d": 3394,
    "hasVolumeBurst": false,
    "high5d": 41.57,
    "high10d": 41.75,
    "high20d": 41.81,
    "sparkline": [
      41.54,
      41.52,
      41.54,
      41.54,
      41.57,
      41.55,
      41.52,
      41.33,
      41.18,
      41.16
    ],
    "k5d": [
      {
        "open": 41.57,
        "high": 41.57,
        "low": 41.53,
        "close": 41.55,
        "volume": 3180,
        "ma5": 41.54,
        "ma10": 41.62
      },
      {
        "open": 41.55,
        "high": 41.55,
        "low": 41.5,
        "close": 41.52,
        "volume": 1507,
        "ma5": 41.54,
        "ma10": 41.6
      },
      {
        "open": 41.51,
        "high": 41.51,
        "low": 41.32,
        "close": 41.33,
        "volume": 3394,
        "ma5": 41.5,
        "ma10": 41.55
      },
      {
        "open": 41.25,
        "high": 41.29,
        "low": 41.17,
        "close": 41.18,
        "volume": 3076,
        "ma5": 41.43,
        "ma10": 41.5
      },
      {
        "open": 41.14,
        "high": 41.16,
        "low": 41.04,
        "close": 41.16,
        "volume": 2967,
        "ma5": 41.35,
        "ma10": 41.45
      }
    ],
    "symbol": "00859B.TWO",
    "kd": {
      "k": 15.8,
      "d": 21.7,
      "prevK": 13.4,
      "prevD": 24.7,
      "h8": 41.62,
      "l8": 41.17
    }
  },
  {
    "code": "00847B",
    "name": "中信美國市政債",
    "categories": [
      "TurnoverRate"
    ],
    "price": 24.37,
    "prevClose": 24.9,
    "open": 24.47,
    "high": 24.47,
    "low": 24.32,
    "volume": 338,
    "ma5": 24.98,
    "ma10": 25.18,
    "ma20": 25.34,
    "ma60": 25.53,
    "vMa5": 299,
    "vMa10": 305,
    "maxVol10d": 523,
    "hasVolumeBurst": true,
    "high5d": 25.27,
    "high10d": 25.56,
    "high20d": 25.76,
    "sparkline": [
      25.54,
      25.53,
      25.3,
      25.33,
      25.2,
      25.24,
      25.25,
      25.13,
      24.9,
      24.37
    ],
    "k5d": [
      {
        "open": 25.25,
        "high": 25.27,
        "low": 25.24,
        "close": 25.24,
        "volume": 222,
        "ma5": 25.32,
        "ma10": 25.35
      },
      {
        "open": 25.25,
        "high": 25.25,
        "low": 25.24,
        "close": 25.25,
        "volume": 204,
        "ma5": 25.26,
        "ma10": 25.34
      },
      {
        "open": 25.16,
        "high": 25.17,
        "low": 25.13,
        "close": 25.13,
        "volume": 523,
        "ma5": 25.23,
        "ma10": 25.31
      },
      {
        "open": 24.94,
        "high": 24.94,
        "low": 24.9,
        "close": 24.9,
        "volume": 206,
        "ma5": 25.14,
        "ma10": 25.28
      },
      {
        "open": 24.47,
        "high": 24.47,
        "low": 24.32,
        "close": 24.37,
        "volume": 338,
        "ma5": 24.98,
        "ma10": 25.18
      }
    ],
    "symbol": "00847B.TWO",
    "kd": {
      "k": 19.8,
      "d": 36.5,
      "prevK": 27.7,
      "prevD": 44.9,
      "h8": 25.56,
      "l8": 24.9
    }
  },
  {
    "code": "2061",
    "name": "風青",
    "categories": [
      "TurnoverRate"
    ],
    "price": 48.0,
    "prevClose": 51.6,
    "open": 51.0,
    "high": 51.3,
    "low": 48.0,
    "volume": 2247,
    "ma5": 53.82,
    "ma10": 56.13,
    "ma20": 54.77,
    "ma60": 54.32,
    "vMa5": 2678,
    "vMa10": 2676,
    "maxVol10d": 4829,
    "hasVolumeBurst": true,
    "high5d": 64.6,
    "high10d": 65.3,
    "high20d": 65.3,
    "sparkline": [
      55.2,
      58.2,
      56.2,
      59.5,
      63.1,
      62.5,
      56.3,
      50.7,
      51.6,
      48.0
    ],
    "k5d": [
      {
        "open": 62.4,
        "high": 64.6,
        "low": 62.4,
        "close": 62.5,
        "volume": 1951,
        "ma5": 59.9,
        "ma10": 56.82
      },
      {
        "open": 59.3,
        "high": 59.3,
        "low": 56.3,
        "close": 56.3,
        "volume": 2352,
        "ma5": 59.52,
        "ma10": 57.33
      },
      {
        "open": 54.0,
        "high": 54.4,
        "low": 50.7,
        "close": 50.7,
        "volume": 4829,
        "ma5": 58.42,
        "ma10": 56.85
      },
      {
        "open": 50.0,
        "high": 53.2,
        "low": 49.1,
        "close": 51.6,
        "volume": 2013,
        "ma5": 56.84,
        "ma10": 56.73
      },
      {
        "open": 51.0,
        "high": 51.3,
        "low": 48.0,
        "close": 48.0,
        "volume": 2247,
        "ma5": 53.82,
        "ma10": 56.13
      }
    ],
    "symbol": "2061.TWO",
    "kd": {
      "k": 21.5,
      "d": 39.0,
      "prevK": 32.2,
      "prevD": 47.8,
      "h8": 65.3,
      "l8": 49.1
    }
  },
  {
    "code": "00860B",
    "name": "群益1-5Y投資級債",
    "categories": [
      "TurnoverRate"
    ],
    "price": 38.03,
    "prevClose": 38.46,
    "open": 37.99,
    "high": 38.07,
    "low": 37.99,
    "volume": 147,
    "ma5": 38.53,
    "ma10": 38.68,
    "ma20": 38.8,
    "ma60": 38.37,
    "vMa5": 134,
    "vMa10": 133,
    "maxVol10d": 211,
    "hasVolumeBurst": true,
    "high5d": 38.81,
    "high10d": 38.98,
    "high20d": 39.04,
    "sparkline": [
      38.91,
      38.84,
      38.81,
      38.81,
      38.81,
      38.79,
      38.77,
      38.61,
      38.46,
      38.03
    ],
    "k5d": [
      {
        "open": 38.79,
        "high": 38.81,
        "low": 38.79,
        "close": 38.79,
        "volume": 117,
        "ma5": 38.81,
        "ma10": 38.89
      },
      {
        "open": 38.79,
        "high": 38.79,
        "low": 38.76,
        "close": 38.77,
        "volume": 120,
        "ma5": 38.8,
        "ma10": 38.87
      },
      {
        "open": 38.77,
        "high": 38.77,
        "low": 38.6,
        "close": 38.61,
        "volume": 157,
        "ma5": 38.76,
        "ma10": 38.83
      },
      {
        "open": 38.56,
        "high": 38.56,
        "low": 38.46,
        "close": 38.46,
        "volume": 128,
        "ma5": 38.69,
        "ma10": 38.78
      },
      {
        "open": 37.99,
        "high": 38.07,
        "low": 37.99,
        "close": 38.03,
        "volume": 147,
        "ma5": 38.53,
        "ma10": 38.68
      }
    ],
    "symbol": "00860B.TWO",
    "kd": {
      "k": 6.7,
      "d": 15.3,
      "prevK": 7.7,
      "prevD": 19.6,
      "h8": 38.84,
      "l8": 38.46
    }
  },
  {
    "code": "6259",
    "name": "百徽",
    "categories": [
      "TurnoverRate"
    ],
    "price": 30.4,
    "prevClose": 33.45,
    "open": 33.65,
    "high": 34.4,
    "low": 30.25,
    "volume": 848,
    "ma5": 32.07,
    "ma10": 31.05,
    "ma20": 30.93,
    "ma60": 32.57,
    "vMa5": 1069,
    "vMa10": 818,
    "maxVol10d": 1417,
    "hasVolumeBurst": true,
    "high5d": 35.0,
    "high10d": 35.0,
    "high20d": 38.6,
    "sparkline": [
      30.3,
      29.9,
      29.0,
      30.25,
      30.75,
      31.05,
      32.0,
      33.45,
      33.45,
      30.4
    ],
    "k5d": [
      {
        "open": 30.8,
        "high": 31.95,
        "low": 30.6,
        "close": 31.05,
        "volume": 665,
        "ma5": 30.19,
        "ma10": 29.83
      },
      {
        "open": 31.65,
        "high": 33.8,
        "low": 31.5,
        "close": 32.0,
        "volume": 1080,
        "ma5": 30.61,
        "ma10": 30.33
      },
      {
        "open": 32.3,
        "high": 33.7,
        "low": 31.7,
        "close": 33.45,
        "volume": 1417,
        "ma5": 31.5,
        "ma10": 30.7
      },
      {
        "open": 33.5,
        "high": 35.0,
        "low": 32.05,
        "close": 33.45,
        "volume": 1336,
        "ma5": 32.14,
        "ma10": 31.03
      },
      {
        "open": 33.65,
        "high": 34.4,
        "low": 30.25,
        "close": 30.4,
        "volume": 848,
        "ma5": 32.07,
        "ma10": 31.05
      }
    ],
    "symbol": "6259.TWO",
    "kd": {
      "k": 56.8,
      "d": 62.7,
      "prevK": 73.5,
      "prevD": 65.7,
      "h8": 35.0,
      "l8": 29.0
    }
  },
  {
    "code": "6683",
    "name": "雍智科技",
    "categories": [
      "ValueTop"
    ],
    "price": 1260.0,
    "prevClose": 1325.0,
    "open": 1325.0,
    "high": 1345.0,
    "low": 1255.0,
    "volume": 608,
    "ma5": 1324.0,
    "ma10": 1259.5,
    "ma20": 1162.3,
    "ma60": 1470.77,
    "vMa5": 663,
    "vMa10": 647,
    "maxVol10d": 1199,
    "hasVolumeBurst": true,
    "high5d": 1460.0,
    "high10d": 1460.0,
    "high20d": 1460.0,
    "sparkline": [
      1195.0,
      1185.0,
      1120.0,
      1230.0,
      1245.0,
      1270.0,
      1395.0,
      1370.0,
      1325.0,
      1260.0
    ],
    "k5d": [
      {
        "open": 1255.0,
        "high": 1290.0,
        "low": 1240.0,
        "close": 1270.0,
        "volume": 356,
        "ma5": 1210.0,
        "ma10": 1112.0
      },
      {
        "open": 1315.0,
        "high": 1395.0,
        "low": 1315.0,
        "close": 1395.0,
        "volume": 614,
        "ma5": 1252.0,
        "ma10": 1167.2
      },
      {
        "open": 1445.0,
        "high": 1460.0,
        "low": 1345.0,
        "close": 1370.0,
        "volume": 1199,
        "ma5": 1302.0,
        "ma10": 1211.5
      },
      {
        "open": 1350.0,
        "high": 1370.0,
        "low": 1280.0,
        "close": 1325.0,
        "volume": 536,
        "ma5": 1321.0,
        "ma10": 1242.5
      },
      {
        "open": 1325.0,
        "high": 1345.0,
        "low": 1255.0,
        "close": 1260.0,
        "volume": 608,
        "ma5": 1324.0,
        "ma10": 1259.5
      }
    ],
    "symbol": "6683.TWO",
    "kd": {
      "k": 67.2,
      "d": 76.8,
      "prevK": 79.0,
      "prevD": 81.5,
      "h8": 1460.0,
      "l8": 1105.0
    }
  },
  {
    "code": "2609",
    "name": "陽明",
    "categories": [
      "Top100",
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy"
    ],
    "price": 56.2,
    "prevClose": 54.7,
    "open": 55.1,
    "high": 57.2,
    "low": 54.6,
    "volume": 86638,
    "ma5": 53.12,
    "ma10": 52.07,
    "ma20": 51.43,
    "ma60": 51.53,
    "vMa5": 46478,
    "vMa10": 31321,
    "maxVol10d": 96627,
    "hasVolumeBurst": true,
    "high5d": 57.2,
    "high10d": 57.2,
    "high20d": 57.2,
    "sparkline": [
      50.6,
      50.4,
      50.5,
      51.6,
      52.0,
      51.7,
      51.4,
      51.6,
      54.7,
      56.2
    ],
    "k5d": [
      {
        "open": 52.0,
        "high": 52.1,
        "low": 51.3,
        "close": 51.7,
        "volume": 10302,
        "ma5": 51.24,
        "ma10": 50.94
      },
      {
        "open": 51.9,
        "high": 52.0,
        "low": 50.9,
        "close": 51.4,
        "volume": 17193,
        "ma5": 51.44,
        "ma10": 51.08
      },
      {
        "open": 51.5,
        "high": 51.9,
        "low": 50.7,
        "close": 51.6,
        "volume": 21629,
        "ma5": 51.66,
        "ma10": 51.16
      },
      {
        "open": 51.7,
        "high": 54.8,
        "low": 51.7,
        "close": 54.7,
        "volume": 96627,
        "ma5": 52.28,
        "ma10": 51.55
      },
      {
        "open": 55.1,
        "high": 57.2,
        "low": 54.6,
        "close": 56.2,
        "volume": 86638,
        "ma5": 53.12,
        "ma10": 52.07
      }
    ],
    "symbol": "2609.TW",
    "kd": {
      "k": 82.5,
      "d": 76.0,
      "prevK": 80.7,
      "prevD": 72.7,
      "h8": 54.8,
      "l8": 50.0
    }
  },
  {
    "code": "00929",
    "name": "復華台灣科技優息",
    "categories": [
      "Top100"
    ],
    "price": 28.87,
    "prevClose": 29.2,
    "open": 29.25,
    "high": 29.25,
    "low": 28.84,
    "volume": 82564,
    "ma5": 29.34,
    "ma10": 29.03,
    "ma20": 28.43,
    "ma60": 29.59,
    "vMa5": 37859,
    "vMa10": 33068,
    "maxVol10d": 82564,
    "hasVolumeBurst": true,
    "high5d": 30.09,
    "high10d": 30.09,
    "high20d": 30.09,
    "sparkline": [
      28.15,
      28.78,
      28.94,
      28.59,
      29.16,
      29.17,
      29.53,
      29.67,
      29.44,
      28.87
    ],
    "k5d": [
      {
        "open": 29.0,
        "high": 29.22,
        "low": 28.88,
        "close": 29.17,
        "volume": 20217,
        "ma5": 28.93,
        "ma10": 28.02
      },
      {
        "open": 29.35,
        "high": 29.63,
        "low": 29.35,
        "close": 29.53,
        "volume": 24514,
        "ma5": 29.08,
        "ma10": 28.34
      },
      {
        "open": 29.94,
        "high": 30.09,
        "low": 29.67,
        "close": 29.67,
        "volume": 23772,
        "ma5": 29.22,
        "ma10": 28.7
      },
      {
        "open": 29.9,
        "high": 29.92,
        "low": 29.39,
        "close": 29.44,
        "volume": 38230,
        "ma5": 29.39,
        "ma10": 28.9
      },
      {
        "open": 29.25,
        "high": 29.25,
        "low": 28.84,
        "close": 28.87,
        "volume": 82564,
        "ma5": 29.34,
        "ma10": 29.03
      }
    ],
    "symbol": "00929.TW",
    "kd": {
      "k": 67.2,
      "d": 78.6,
      "prevK": 85.3,
      "prevD": 84.2,
      "h8": 30.09,
      "l8": 28.32
    }
  },
  {
    "code": "2027",
    "name": "大成鋼",
    "categories": [
      "MajorBuy",
      "MajorBuy3D",
      "MajorBuy1D"
    ],
    "price": 49.7,
    "prevClose": 50.0,
    "open": 49.3,
    "high": 50.2,
    "low": 48.8,
    "volume": 15772,
    "ma5": 48.91,
    "ma10": 47.53,
    "ma20": 45.63,
    "ma60": 42.86,
    "vMa5": 32663,
    "vMa10": 26665,
    "maxVol10d": 58324,
    "hasVolumeBurst": true,
    "high5d": 51.5,
    "high10d": 51.5,
    "high20d": 51.5,
    "sparkline": [
      44.35,
      46.1,
      46.6,
      47.3,
      46.45,
      46.85,
      50.4,
      47.6,
      50.0,
      49.7
    ],
    "k5d": [
      {
        "open": 46.45,
        "high": 47.6,
        "low": 46.2,
        "close": 46.85,
        "volume": 10017,
        "ma5": 46.66,
        "ma10": 45.32
      },
      {
        "open": 48.5,
        "high": 51.5,
        "low": 48.0,
        "close": 50.4,
        "volume": 58324,
        "ma5": 47.52,
        "ma10": 45.99
      },
      {
        "open": 50.0,
        "high": 50.0,
        "low": 46.85,
        "close": 47.6,
        "volume": 36428,
        "ma5": 47.72,
        "ma10": 46.43
      },
      {
        "open": 47.9,
        "high": 51.3,
        "low": 47.55,
        "close": 50.0,
        "volume": 42773,
        "ma5": 48.26,
        "ma10": 46.99
      },
      {
        "open": 49.3,
        "high": 50.2,
        "low": 48.8,
        "close": 49.7,
        "volume": 15772,
        "ma5": 48.91,
        "ma10": 47.53
      }
    ],
    "symbol": "2027.TW",
    "kd": {
      "k": 75.1,
      "d": 76.4,
      "prevK": 75.2,
      "prevD": 77.0,
      "h8": 51.5,
      "l8": 44.35
    }
  },
  {
    "code": "00751B",
    "name": "元大AAA至A公司債",
    "categories": [
      "Top100"
    ],
    "price": 30.09,
    "prevClose": 30.41,
    "open": 30.21,
    "high": 30.21,
    "low": 30.07,
    "volume": 9346,
    "ma5": 30.53,
    "ma10": 30.76,
    "ma20": 30.9,
    "ma60": 31.47,
    "vMa5": 5185,
    "vMa10": 4576,
    "maxVol10d": 9346,
    "hasVolumeBurst": true,
    "high5d": 30.82,
    "high10d": 31.23,
    "high20d": 31.32,
    "sparkline": [
      31.17,
      31.18,
      30.92,
      30.96,
      30.73,
      30.74,
      30.72,
      30.67,
      30.41,
      30.09
    ],
    "k5d": [
      {
        "open": 30.74,
        "high": 30.79,
        "low": 30.71,
        "close": 30.74,
        "volume": 3248,
        "ma5": 30.91,
        "ma10": 30.92
      },
      {
        "open": 30.74,
        "high": 30.74,
        "low": 30.7,
        "close": 30.72,
        "volume": 2746,
        "ma5": 30.81,
        "ma10": 30.92
      },
      {
        "open": 30.77,
        "high": 30.82,
        "low": 30.67,
        "close": 30.67,
        "volume": 3381,
        "ma5": 30.76,
        "ma10": 30.88
      },
      {
        "open": 30.53,
        "high": 30.53,
        "low": 30.39,
        "close": 30.41,
        "volume": 7206,
        "ma5": 30.65,
        "ma10": 30.84
      },
      {
        "open": 30.21,
        "high": 30.21,
        "low": 30.07,
        "close": 30.09,
        "volume": 9346,
        "ma5": 30.53,
        "ma10": 30.76
      }
    ],
    "symbol": "00751B.TWO",
    "kd": {
      "k": 7.2,
      "d": 16.3,
      "prevK": 9.9,
      "prevD": 20.8,
      "h8": 31.19,
      "l8": 30.39
    }
  },
  {
    "code": "3234",
    "name": "光環",
    "categories": [
      "Top100",
      "ValueTop",
      "MajorBuy",
      "TurnoverRate",
      "MajorBuy3D",
      "MajorBuy1D"
    ],
    "price": 146.0,
    "prevClose": 150.0,
    "open": 149.0,
    "high": 154.0,
    "low": 141.0,
    "volume": 5653,
    "ma5": 141.3,
    "ma10": 127.9,
    "ma20": 114.88,
    "ma60": 119.48,
    "vMa5": 5717,
    "vMa10": 3814,
    "maxVol10d": 7998,
    "hasVolumeBurst": true,
    "high5d": 154.0,
    "high10d": 154.0,
    "high20d": 154.0,
    "sparkline": [
      115.0,
      110.5,
      107.5,
      118.0,
      121.5,
      133.0,
      141.0,
      136.5,
      150.0,
      146.0
    ],
    "k5d": [
      {
        "open": 117.0,
        "high": 133.5,
        "low": 117.0,
        "close": 133.0,
        "volume": 5605,
        "ma5": 118.1,
        "ma10": 110.52
      },
      {
        "open": 133.5,
        "high": 146.0,
        "low": 133.5,
        "close": 141.0,
        "volume": 7998,
        "ma5": 124.2,
        "ma10": 115.92
      },
      {
        "open": 138.0,
        "high": 141.0,
        "low": 134.5,
        "close": 136.5,
        "volume": 3417,
        "ma5": 130.0,
        "ma10": 120.0
      },
      {
        "open": 139.5,
        "high": 150.0,
        "low": 137.5,
        "close": 150.0,
        "volume": 5911,
        "ma5": 136.4,
        "ma10": 124.6
      },
      {
        "open": 149.0,
        "high": 154.0,
        "low": 141.0,
        "close": 146.0,
        "volume": 5653,
        "ma5": 141.3,
        "ma10": 127.9
      }
    ],
    "symbol": "3234.TWO",
    "kd": {
      "k": 87.7,
      "d": 84.7,
      "prevK": 89.4,
      "prevD": 83.2,
      "h8": 150.0,
      "l8": 103.0
    }
  },
  {
    "code": "6603",
    "name": "富強鑫",
    "categories": [
      "MajorBuy",
      "MajorBuy3D",
      "MajorBuy1D"
    ],
    "price": 27.95,
    "prevClose": 29.95,
    "open": 29.9,
    "high": 30.25,
    "low": 27.9,
    "volume": 4140,
    "ma5": 28.49,
    "ma10": 27.47,
    "ma20": 26.4,
    "ma60": 24.83,
    "vMa5": 4617,
    "vMa10": 3359,
    "maxVol10d": 6392,
    "hasVolumeBurst": true,
    "high5d": 30.5,
    "high10d": 30.5,
    "high20d": 30.5,
    "sparkline": [
      26.75,
      25.75,
      26.0,
      26.85,
      26.9,
      27.7,
      28.85,
      28.0,
      29.95,
      27.95
    ],
    "k5d": [
      {
        "open": 27.3,
        "high": 29.4,
        "low": 27.3,
        "close": 27.7,
        "volume": 6392,
        "ma5": 26.64,
        "ma10": 26.31
      },
      {
        "open": 28.35,
        "high": 29.3,
        "low": 28.0,
        "close": 28.85,
        "volume": 4845,
        "ma5": 27.26,
        "ma10": 26.72
      },
      {
        "open": 29.5,
        "high": 29.5,
        "low": 28.0,
        "close": 28.0,
        "volume": 2584,
        "ma5": 27.66,
        "ma10": 26.91
      },
      {
        "open": 28.3,
        "high": 30.5,
        "low": 28.25,
        "close": 29.95,
        "volume": 5122,
        "ma5": 28.28,
        "ma10": 27.27
      },
      {
        "open": 29.9,
        "high": 30.25,
        "low": 27.9,
        "close": 27.95,
        "volume": 4140,
        "ma5": 28.49,
        "ma10": 27.47
      }
    ],
    "symbol": "6603.TWO",
    "kd": {
      "k": 70.4,
      "d": 73.5,
      "prevK": 78.8,
      "prevD": 75.1,
      "h8": 30.5,
      "l8": 25.0
    }
  },
  {
    "code": "8086",
    "name": "宏捷科",
    "categories": [
      "Top100",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "TurnoverRate",
      "SitcaBuy"
    ],
    "price": 115.0,
    "prevClose": 120.5,
    "open": 122.5,
    "high": 123.5,
    "low": 115.0,
    "volume": 10982,
    "ma5": 117.1,
    "ma10": 117.9,
    "ma20": 116.7,
    "ma60": 138.04,
    "vMa5": 4686,
    "vMa10": 4467,
    "maxVol10d": 10982,
    "hasVolumeBurst": true,
    "high5d": 123.5,
    "high10d": 129.5,
    "high20d": 129.5,
    "sparkline": [
      124.0,
      123.5,
      111.5,
      118.0,
      116.5,
      119.0,
      117.0,
      114.0,
      120.5,
      115.0
    ],
    "k5d": [
      {
        "open": 116.5,
        "high": 122.0,
        "low": 116.5,
        "close": 119.0,
        "volume": 3022,
        "ma5": 117.7,
        "ma10": 116.35
      },
      {
        "open": 121.5,
        "high": 121.5,
        "low": 117.0,
        "close": 117.0,
        "volume": 2395,
        "ma5": 116.4,
        "ma10": 117.75
      },
      {
        "open": 118.0,
        "high": 118.5,
        "low": 113.5,
        "close": 114.0,
        "volume": 2006,
        "ma5": 116.9,
        "ma10": 118.15
      },
      {
        "open": 114.5,
        "high": 122.0,
        "low": 114.5,
        "close": 120.5,
        "volume": 5024,
        "ma5": 117.4,
        "ma10": 118.65
      },
      {
        "open": 122.5,
        "high": 123.5,
        "low": 115.0,
        "close": 115.0,
        "volume": 10982,
        "ma5": 117.1,
        "ma10": 117.9
      }
    ],
    "symbol": "8086.TWO",
    "kd": {
      "k": 37.1,
      "d": 43.1,
      "prevK": 41.7,
      "prevD": 46.1,
      "h8": 124.0,
      "l8": 111.5
    }
  },
  {
    "code": "6179",
    "name": "亞通",
    "categories": [
      "MajorBuy3D",
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 27.3,
    "prevClose": 27.75,
    "open": 27.95,
    "high": 28.05,
    "low": 27.05,
    "volume": 1622,
    "ma5": 27.46,
    "ma10": 27.37,
    "ma20": 25.93,
    "ma60": 25.65,
    "vMa5": 2153,
    "vMa10": 2115,
    "maxVol10d": 5004,
    "hasVolumeBurst": true,
    "high5d": 29.3,
    "high10d": 29.3,
    "high20d": 29.3,
    "sparkline": [
      27.65,
      26.35,
      27.05,
      27.9,
      27.5,
      27.35,
      27.85,
      27.05,
      27.75,
      27.3
    ],
    "k5d": [
      {
        "open": 27.6,
        "high": 27.85,
        "low": 27.3,
        "close": 27.35,
        "volume": 931,
        "ma5": 27.23,
        "ma10": 26.13
      },
      {
        "open": 27.55,
        "high": 28.1,
        "low": 27.3,
        "close": 27.85,
        "volume": 1758,
        "ma5": 27.53,
        "ma10": 26.63
      },
      {
        "open": 27.45,
        "high": 27.6,
        "low": 26.65,
        "close": 27.05,
        "volume": 1450,
        "ma5": 27.53,
        "ma10": 26.91
      },
      {
        "open": 28.0,
        "high": 29.3,
        "low": 27.65,
        "close": 27.75,
        "volume": 5004,
        "ma5": 27.5,
        "ma10": 27.22
      },
      {
        "open": 27.95,
        "high": 28.05,
        "low": 27.05,
        "close": 27.3,
        "volume": 1622,
        "ma5": 27.46,
        "ma10": 27.37
      }
    ],
    "symbol": "6179.TWO",
    "kd": {
      "k": 60.9,
      "d": 71.9,
      "prevK": 71.6,
      "prevD": 77.4,
      "h8": 29.3,
      "l8": 26.0
    }
  },
  {
    "code": "6244",
    "name": "茂迪",
    "categories": [
      "MajorBuy",
      "MajorBuy3D",
      "MajorBuy1D"
    ],
    "price": 25.3,
    "prevClose": 26.7,
    "open": 26.7,
    "high": 27.05,
    "low": 25.3,
    "volume": 3381,
    "ma5": 25.44,
    "ma10": 24.7,
    "ma20": 24.0,
    "ma60": 26.77,
    "vMa5": 3354,
    "vMa10": 3033,
    "maxVol10d": 5862,
    "hasVolumeBurst": true,
    "high5d": 27.05,
    "high10d": 27.05,
    "high20d": 27.3,
    "sparkline": [
      24.7,
      23.75,
      23.1,
      24.1,
      24.1,
      24.3,
      25.7,
      25.2,
      26.7,
      25.3
    ],
    "k5d": [
      {
        "open": 24.45,
        "high": 24.45,
        "low": 24.15,
        "close": 24.3,
        "volume": 1076,
        "ma5": 23.87,
        "ma10": 23.32
      },
      {
        "open": 24.5,
        "high": 26.65,
        "low": 24.5,
        "close": 25.7,
        "volume": 5862,
        "ma5": 24.26,
        "ma10": 23.85
      },
      {
        "open": 25.6,
        "high": 25.7,
        "low": 24.9,
        "close": 25.2,
        "volume": 1905,
        "ma5": 24.68,
        "ma10": 24.18
      },
      {
        "open": 25.2,
        "high": 27.0,
        "low": 25.05,
        "close": 26.7,
        "volume": 4544,
        "ma5": 25.2,
        "ma10": 24.54
      },
      {
        "open": 26.7,
        "high": 27.05,
        "low": 25.3,
        "close": 25.3,
        "volume": 3381,
        "ma5": 25.44,
        "ma10": 24.7
      }
    ],
    "symbol": "6244.TWO",
    "kd": {
      "k": 70.6,
      "d": 71.7,
      "prevK": 78.1,
      "prevD": 72.2,
      "h8": 27.0,
      "l8": 23.1
    }
  },
  {
    "code": "2376",
    "name": "技嘉",
    "categories": [
      "ValueTop",
      "SitcaBuy5D",
      "SitcaBuy"
    ],
    "price": 348.0,
    "prevClose": 358.0,
    "open": 359.0,
    "high": 362.5,
    "low": 346.0,
    "volume": 13181,
    "ma5": 374.5,
    "ma10": 360.25,
    "ma20": 348.45,
    "ma60": 345.82,
    "vMa5": 16958,
    "vMa10": 11793,
    "maxVol10d": 22379,
    "hasVolumeBurst": true,
    "high5d": 402.0,
    "high10d": 402.0,
    "high20d": 402.0,
    "sparkline": [
      342.0,
      344.0,
      344.0,
      349.5,
      350.5,
      375.5,
      393.5,
      397.5,
      358.0,
      348.0
    ],
    "k5d": [
      {
        "open": 352.0,
        "high": 381.0,
        "low": 352.0,
        "close": 375.5,
        "volume": 17404,
        "ma5": 352.7,
        "ma10": 341.7
      },
      {
        "open": 385.5,
        "high": 395.0,
        "low": 379.5,
        "close": 393.5,
        "volume": 17911,
        "ma5": 362.6,
        "ma10": 349.2
      },
      {
        "open": 390.0,
        "high": 402.0,
        "low": 386.5,
        "close": 397.5,
        "volume": 13912,
        "ma5": 373.3,
        "ma10": 355.3
      },
      {
        "open": 380.0,
        "high": 381.5,
        "low": 358.0,
        "close": 358.0,
        "volume": 22379,
        "ma5": 375.0,
        "ma10": 358.65
      },
      {
        "open": 359.0,
        "high": 362.5,
        "low": 346.0,
        "close": 348.0,
        "volume": 13181,
        "ma5": 374.5,
        "ma10": 360.25
      }
    ],
    "symbol": "2376.TW",
    "kd": {
      "k": 52.1,
      "d": 69.9,
      "prevK": 71.0,
      "prevD": 78.8,
      "h8": 402.0,
      "l8": 339.0
    }
  },
  {
    "code": "6446",
    "name": "藥華藥",
    "categories": [
      "ValueTop"
    ],
    "price": 1400.0,
    "prevClose": 1410.0,
    "open": 1430.0,
    "high": 1430.0,
    "low": 1345.0,
    "volume": 5222,
    "ma5": 1439.0,
    "ma10": 1385.0,
    "ma20": 1258.5,
    "ma60": 1114.79,
    "vMa5": 4555,
    "vMa10": 4577,
    "maxVol10d": 5918,
    "hasVolumeBurst": true,
    "high5d": 1550.0,
    "high10d": 1550.0,
    "high20d": 1550.0,
    "sparkline": [
      1335.0,
      1290.0,
      1240.0,
      1330.0,
      1460.0,
      1440.0,
      1445.0,
      1500.0,
      1410.0,
      1400.0
    ],
    "k5d": [
      {
        "open": 1465.0,
        "high": 1550.0,
        "low": 1415.0,
        "close": 1440.0,
        "volume": 5760,
        "ma5": 1352.0,
        "ma10": 1256.0
      },
      {
        "open": 1475.0,
        "high": 1510.0,
        "low": 1430.0,
        "close": 1445.0,
        "volume": 3268,
        "ma5": 1383.0,
        "ma10": 1298.0
      },
      {
        "open": 1440.0,
        "high": 1525.0,
        "low": 1440.0,
        "close": 1500.0,
        "volume": 3841,
        "ma5": 1435.0,
        "ma10": 1342.0
      },
      {
        "open": 1505.0,
        "high": 1545.0,
        "low": 1405.0,
        "close": 1410.0,
        "volume": 4682,
        "ma5": 1451.0,
        "ma10": 1366.5
      },
      {
        "open": 1430.0,
        "high": 1430.0,
        "low": 1345.0,
        "close": 1400.0,
        "volume": 5222,
        "ma5": 1439.0,
        "ma10": 1385.0
      }
    ],
    "symbol": "6446.TW",
    "kd": {
      "k": 69.2,
      "d": 73.7,
      "prevK": 74.7,
      "prevD": 76.0,
      "h8": 1550.0,
      "l8": 1190.0
    }
  },
  {
    "code": "2455",
    "name": "全新",
    "categories": [
      "ValueTop",
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy",
      "Top100"
    ],
    "price": 417.5,
    "prevClose": 417.0,
    "open": 435.0,
    "high": 437.5,
    "low": 409.5,
    "volume": 35397,
    "ma5": 396.5,
    "ma10": 385.85,
    "ma20": 349.7,
    "ma60": 359.11,
    "vMa5": 11698,
    "vMa10": 12666,
    "maxVol10d": 35397,
    "hasVolumeBurst": true,
    "high5d": 437.5,
    "high10d": 437.5,
    "high20d": 437.5,
    "sparkline": [
      388.0,
      372.0,
      364.0,
      384.5,
      367.5,
      384.5,
      384.0,
      379.5,
      417.0,
      417.5
    ],
    "k5d": [
      {
        "open": 372.0,
        "high": 388.0,
        "low": 372.0,
        "close": 384.5,
        "volume": 3785,
        "ma5": 374.5,
        "ma10": 349.2
      },
      {
        "open": 398.0,
        "high": 398.0,
        "low": 380.0,
        "close": 384.0,
        "volume": 3585,
        "ma5": 376.9,
        "ma10": 361.05
      },
      {
        "open": 385.0,
        "high": 385.0,
        "low": 376.0,
        "close": 379.5,
        "volume": 2537,
        "ma5": 380.0,
        "ma10": 369.8
      },
      {
        "open": 409.5,
        "high": 417.0,
        "low": 405.0,
        "close": 417.0,
        "volume": 13187,
        "ma5": 386.5,
        "ma10": 379.4
      },
      {
        "open": 435.0,
        "high": 437.5,
        "low": 409.5,
        "close": 417.5,
        "volume": 35397,
        "ma5": 396.5,
        "ma10": 385.85
      }
    ],
    "symbol": "2455.TW",
    "kd": {
      "k": 80.0,
      "d": 79.1,
      "prevK": 82.6,
      "prevD": 78.7,
      "h8": 417.0,
      "l8": 358.5
    }
  },
  {
    "code": "3042",
    "name": "晶技",
    "categories": [
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 178.5,
    "prevClose": 195.5,
    "open": 192.0,
    "high": 192.5,
    "low": 176.0,
    "volume": 23890,
    "ma5": 184.5,
    "ma10": 180.1,
    "ma20": 167.72,
    "ma60": 192.76,
    "vMa5": 18608,
    "vMa10": 16322,
    "maxVol10d": 28065,
    "hasVolumeBurst": true,
    "high5d": 196.5,
    "high10d": 196.5,
    "high20d": 196.5,
    "sparkline": [
      177.0,
      174.0,
      168.0,
      180.5,
      179.0,
      181.5,
      186.5,
      180.5,
      195.5,
      178.5
    ],
    "k5d": [
      {
        "open": 179.0,
        "high": 185.0,
        "low": 175.5,
        "close": 181.5,
        "volume": 13365,
        "ma5": 176.6,
        "ma10": 167.05
      },
      {
        "open": 183.0,
        "high": 196.5,
        "low": 182.0,
        "close": 186.5,
        "volume": 18241,
        "ma5": 179.1,
        "ma10": 172.0
      },
      {
        "open": 185.0,
        "high": 187.5,
        "low": 179.0,
        "close": 180.5,
        "volume": 9480,
        "ma5": 181.6,
        "ma10": 175.1
      },
      {
        "open": 187.0,
        "high": 196.5,
        "low": 184.5,
        "close": 195.5,
        "volume": 28065,
        "ma5": 184.6,
        "ma10": 179.2
      },
      {
        "open": 192.0,
        "high": 192.5,
        "low": 176.0,
        "close": 178.5,
        "volume": 23890,
        "ma5": 184.5,
        "ma10": 180.1
      }
    ],
    "symbol": "3042.TW",
    "kd": {
      "k": 67.6,
      "d": 74.4,
      "prevK": 82.0,
      "prevD": 77.8,
      "h8": 196.5,
      "l8": 167.0
    }
  },
  {
    "code": "6223",
    "name": "旺矽",
    "categories": [
      "ValueTop"
    ],
    "price": 5270.0,
    "prevClose": 5800.0,
    "open": 5860.0,
    "high": 5895.0,
    "low": 5220.0,
    "volume": 2076,
    "ma5": 6121.0,
    "ma10": 6179.0,
    "ma20": 5860.25,
    "ma60": 6158.5,
    "vMa5": 966,
    "vMa10": 796,
    "maxVol10d": 2076,
    "hasVolumeBurst": true,
    "high5d": 6815.0,
    "high10d": 6815.0,
    "high20d": 6815.0,
    "sparkline": [
      6245.0,
      6300.0,
      6100.0,
      6225.0,
      6315.0,
      6600.0,
      6495.0,
      6440.0,
      5800.0,
      5270.0
    ],
    "k5d": [
      {
        "open": 6355.0,
        "high": 6600.0,
        "low": 6355.0,
        "close": 6600.0,
        "volume": 486,
        "ma5": 6308.0,
        "ma10": 5957.0
      },
      {
        "open": 6800.0,
        "high": 6815.0,
        "low": 6470.0,
        "close": 6495.0,
        "volume": 524,
        "ma5": 6347.0,
        "ma10": 6126.5
      },
      {
        "open": 6515.0,
        "high": 6630.0,
        "low": 6430.0,
        "close": 6440.0,
        "volume": 413,
        "ma5": 6415.0,
        "ma10": 6242.5
      },
      {
        "open": 5800.0,
        "high": 5950.0,
        "low": 5800.0,
        "close": 5800.0,
        "volume": 1332,
        "ma5": 6330.0,
        "ma10": 6242.0
      },
      {
        "open": 5860.0,
        "high": 5895.0,
        "low": 5220.0,
        "close": 5270.0,
        "volume": 2076,
        "ma5": 6121.0,
        "ma10": 6179.0
      }
    ],
    "symbol": "6223.TWO",
    "kd": {
      "k": 34.4,
      "d": 56.6,
      "prevK": 50.0,
      "prevD": 67.6,
      "h8": 6815.0,
      "l8": 5800.0
    }
  },
  {
    "code": "5289",
    "name": "宜鼎",
    "categories": [
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "SitcaBuy"
    ],
    "price": 1460.0,
    "prevClose": 1530.0,
    "open": 1540.0,
    "high": 1560.0,
    "low": 1450.0,
    "volume": 1945,
    "ma5": 1504.0,
    "ma10": 1503.0,
    "ma20": 1404.75,
    "ma60": 1594.17,
    "vMa5": 2199,
    "vMa10": 3016,
    "maxVol10d": 7433,
    "hasVolumeBurst": true,
    "high5d": 1595.0,
    "high10d": 1680.0,
    "high20d": 1680.0,
    "sparkline": [
      1465.0,
      1610.0,
      1500.0,
      1465.0,
      1470.0,
      1520.0,
      1535.0,
      1475.0,
      1530.0,
      1460.0
    ],
    "k5d": [
      {
        "open": 1480.0,
        "high": 1535.0,
        "low": 1480.0,
        "close": 1520.0,
        "volume": 2354,
        "ma5": 1513.0,
        "ma10": 1430.5
      },
      {
        "open": 1560.0,
        "high": 1560.0,
        "low": 1510.0,
        "close": 1535.0,
        "volume": 2070,
        "ma5": 1498.0,
        "ma10": 1466.0
      },
      {
        "open": 1565.0,
        "high": 1595.0,
        "low": 1460.0,
        "close": 1475.0,
        "volume": 2892,
        "ma5": 1493.0,
        "ma10": 1484.0
      },
      {
        "open": 1485.0,
        "high": 1540.0,
        "low": 1485.0,
        "close": 1530.0,
        "volume": 1735,
        "ma5": 1506.0,
        "ma10": 1498.5
      },
      {
        "open": 1540.0,
        "high": 1560.0,
        "low": 1450.0,
        "close": 1460.0,
        "volume": 1945,
        "ma5": 1504.0,
        "ma10": 1503.0
      }
    ],
    "symbol": "5289.TWO",
    "kd": {
      "k": 38.8,
      "d": 52.7,
      "prevK": 51.4,
      "prevD": 59.7,
      "h8": 1680.0,
      "l8": 1425.0
    }
  },
  {
    "code": "3324",
    "name": "雙鴻",
    "categories": [
      "ValueTop"
    ],
    "price": 978.0,
    "prevClose": 1005.0,
    "open": 1015.0,
    "high": 1020.0,
    "low": 978.0,
    "volume": 1649,
    "ma5": 1015.6,
    "ma10": 1017.3,
    "ma20": 960.6,
    "ma60": 999.23,
    "vMa5": 2277,
    "vMa10": 3095,
    "maxVol10d": 7045,
    "hasVolumeBurst": true,
    "high5d": 1080.0,
    "high10d": 1080.0,
    "high20d": 1080.0,
    "sparkline": [
      965.0,
      1060.0,
      1015.0,
      1010.0,
      1045.0,
      1050.0,
      1035.0,
      1010.0,
      1005.0,
      978.0
    ],
    "k5d": [
      {
        "open": 1035.0,
        "high": 1070.0,
        "low": 1035.0,
        "close": 1050.0,
        "volume": 1900,
        "ma5": 1036.0,
        "ma10": 975.5
      },
      {
        "open": 1065.0,
        "high": 1080.0,
        "low": 1025.0,
        "close": 1035.0,
        "volume": 4345,
        "ma5": 1031.0,
        "ma10": 997.0
      },
      {
        "open": 1050.0,
        "high": 1050.0,
        "low": 1005.0,
        "close": 1010.0,
        "volume": 2053,
        "ma5": 1030.0,
        "ma10": 1007.8
      },
      {
        "open": 1015.0,
        "high": 1035.0,
        "low": 1000.0,
        "close": 1005.0,
        "volume": 1440,
        "ma5": 1029.0,
        "ma10": 1013.9
      },
      {
        "open": 1015.0,
        "high": 1020.0,
        "low": 978.0,
        "close": 978.0,
        "volume": 1649,
        "ma5": 1015.6,
        "ma10": 1017.3
      }
    ],
    "symbol": "3324.TWO",
    "kd": {
      "k": 38.6,
      "d": 58.9,
      "prevK": 57.9,
      "prevD": 69.0,
      "h8": 1080.0,
      "l8": 1000.0
    }
  },
  {
    "code": "5536",
    "name": "聖暉*",
    "categories": [
      "ValueTop"
    ],
    "price": 889.0,
    "prevClose": 908.0,
    "open": 909.0,
    "high": 937.0,
    "low": 881.0,
    "volume": 2541,
    "ma5": 908.6,
    "ma10": 967.9,
    "ma20": 1001.05,
    "ma60": 1132.62,
    "vMa5": 1698,
    "vMa10": 1159,
    "maxVol10d": 2541,
    "hasVolumeBurst": true,
    "high5d": 940.0,
    "high10d": 1125.0,
    "high20d": 1250.0,
    "sparkline": [
      1020.0,
      1070.0,
      1060.0,
      1045.0,
      941.0,
      918.0,
      903.0,
      925.0,
      908.0,
      889.0
    ],
    "k5d": [
      {
        "open": 925.0,
        "high": 938.0,
        "low": 900.0,
        "close": 918.0,
        "volume": 2087,
        "ma5": 1006.8,
        "ma10": 981.7
      },
      {
        "open": 928.0,
        "high": 940.0,
        "low": 901.0,
        "close": 903.0,
        "volume": 1415,
        "ma5": 973.4,
        "ma10": 981.4
      },
      {
        "open": 910.0,
        "high": 933.0,
        "low": 895.0,
        "close": 925.0,
        "volume": 1308,
        "ma5": 946.4,
        "ma10": 981.4
      },
      {
        "open": 925.0,
        "high": 925.0,
        "low": 896.0,
        "close": 908.0,
        "volume": 1137,
        "ma5": 919.0,
        "ma10": 978.0
      },
      {
        "open": 909.0,
        "high": 937.0,
        "low": 881.0,
        "close": 889.0,
        "volume": 2541,
        "ma5": 908.6,
        "ma10": 967.9
      }
    ],
    "symbol": "5536.TWO",
    "kd": {
      "k": 10.7,
      "d": 19.5,
      "prevK": 14.5,
      "prevD": 23.8,
      "h8": 1125.0,
      "l8": 895.0
    }
  },
  {
    "code": "3455",
    "name": "由田",
    "categories": [
      "ValueTop",
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy",
      "Top100"
    ],
    "price": 258.0,
    "prevClose": 253.0,
    "open": 253.0,
    "high": 271.5,
    "low": 251.0,
    "volume": 8547,
    "ma5": 237.6,
    "ma10": 216.1,
    "ma20": 196.03,
    "ma60": 220.42,
    "vMa5": 3696,
    "vMa10": 2263,
    "maxVol10d": 8547,
    "hasVolumeBurst": true,
    "high5d": 271.5,
    "high10d": 271.5,
    "high20d": 271.5,
    "sparkline": [
      186.0,
      189.5,
      190.0,
      205.5,
      202.0,
      222.0,
      225.0,
      230.0,
      253.0,
      258.0
    ],
    "k5d": [
      {
        "open": 202.0,
        "high": 222.0,
        "low": 201.5,
        "close": 222.0,
        "volume": 1348,
        "ma5": 201.8,
        "ma10": 185.8
      },
      {
        "open": 222.0,
        "high": 231.5,
        "low": 217.0,
        "close": 225.0,
        "volume": 2486,
        "ma5": 208.9,
        "ma10": 193.25
      },
      {
        "open": 227.5,
        "high": 236.5,
        "low": 222.0,
        "close": 230.0,
        "volume": 2377,
        "ma5": 216.9,
        "ma10": 200.0
      },
      {
        "open": 232.0,
        "high": 253.0,
        "low": 227.0,
        "close": 253.0,
        "volume": 3719,
        "ma5": 226.4,
        "ma10": 208.55
      },
      {
        "open": 253.0,
        "high": 271.5,
        "low": 251.0,
        "close": 258.0,
        "volume": 8547,
        "ma5": 237.6,
        "ma10": 216.1
      }
    ],
    "symbol": "3455.TWO",
    "kd": {
      "k": 90.4,
      "d": 87.3,
      "prevK": 93.0,
      "prevD": 85.8,
      "h8": 253.0,
      "l8": 180.5
    }
  },
  {
    "code": "3163",
    "name": "波若威",
    "categories": [
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 711.0,
    "prevClose": 733.0,
    "open": 733.0,
    "high": 733.0,
    "low": 711.0,
    "volume": 1604,
    "ma5": 716.2,
    "ma10": 707.3,
    "ma20": 648.81,
    "ma60": 702.04,
    "vMa5": 2475,
    "vMa10": 4403,
    "maxVol10d": 11130,
    "hasVolumeBurst": true,
    "high5d": 740.0,
    "high10d": 757.0,
    "high20d": 757.0,
    "sparkline": [
      722.0,
      710.0,
      671.0,
      706.0,
      683.0,
      718.0,
      717.0,
      702.0,
      733.0,
      711.0
    ],
    "k5d": [
      {
        "open": 685.0,
        "high": 735.0,
        "low": 682.0,
        "close": 718.0,
        "volume": 7040,
        "ma5": 697.6,
        "ma10": 650.4
      },
      {
        "open": 740.0,
        "high": 740.0,
        "low": 715.0,
        "close": 717.0,
        "volume": 1514,
        "ma5": 699.0,
        "ma10": 672.6
      },
      {
        "open": 718.0,
        "high": 722.0,
        "low": 688.0,
        "close": 702.0,
        "volume": 1106,
        "ma5": 705.2,
        "ma10": 688.4
      },
      {
        "open": 705.0,
        "high": 733.0,
        "low": 691.0,
        "close": 733.0,
        "volume": 1114,
        "ma5": 710.6,
        "ma10": 701.9
      },
      {
        "open": 733.0,
        "high": 733.0,
        "low": 711.0,
        "close": 711.0,
        "volume": 1604,
        "ma5": 716.2,
        "ma10": 707.3
      }
    ],
    "symbol": "3163.TWO",
    "kd": {
      "k": 64.0,
      "d": 69.7,
      "prevK": 71.8,
      "prevD": 72.6,
      "h8": 757.0,
      "l8": 668.0
    }
  },
  {
    "code": "6584",
    "name": "南俊國際",
    "categories": [
      "SitcaBuy3D",
      "SitcaBuy5D",
      "SitcaBuy"
    ],
    "price": 602.0,
    "prevClose": 596.0,
    "open": 601.0,
    "high": 611.0,
    "low": 586.0,
    "volume": 824,
    "ma5": 588.6,
    "ma10": 554.0,
    "ma20": 519.02,
    "ma60": 611.69,
    "vMa5": 1213,
    "vMa10": 1093,
    "maxVol10d": 2826,
    "hasVolumeBurst": true,
    "high5d": 656.0,
    "high10d": 656.0,
    "high20d": 656.0,
    "sparkline": [
      487.0,
      500.0,
      550.0,
      522.0,
      538.0,
      543.0,
      597.0,
      605.0,
      596.0,
      602.0
    ],
    "k5d": [
      {
        "open": 553.0,
        "high": 566.0,
        "low": 539.0,
        "close": 543.0,
        "volume": 884,
        "ma5": 530.6,
        "ma10": 490.05
      },
      {
        "open": 580.0,
        "high": 597.0,
        "low": 573.0,
        "close": 597.0,
        "volume": 559,
        "ma5": 550.0,
        "ma10": 509.0
      },
      {
        "open": 656.0,
        "high": 656.0,
        "low": 595.0,
        "close": 605.0,
        "volume": 2826,
        "ma5": 561.0,
        "ma10": 526.95
      },
      {
        "open": 625.0,
        "high": 630.0,
        "low": 595.0,
        "close": 596.0,
        "volume": 974,
        "ma5": 575.8,
        "ma10": 541.35
      },
      {
        "open": 601.0,
        "high": 611.0,
        "low": 586.0,
        "close": 602.0,
        "volume": 824,
        "ma5": 588.6,
        "ma10": 554.0
      }
    ],
    "symbol": "6584.TWO",
    "kd": {
      "k": 74.7,
      "d": 74.7,
      "prevK": 76.5,
      "prevD": 74.6,
      "h8": 656.0,
      "l8": 469.5
    }
  },
  {
    "code": "2105",
    "name": "正新",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 31.1,
    "prevClose": 30.75,
    "open": 30.65,
    "high": 31.15,
    "low": 30.6,
    "volume": 5774,
    "ma5": 31.01,
    "ma10": 31.14,
    "ma20": 30.94,
    "ma60": 31.83,
    "vMa5": 8159,
    "vMa10": 6569,
    "maxVol10d": 18393,
    "hasVolumeBurst": true,
    "high5d": 32.35,
    "high10d": 32.35,
    "high20d": 32.5,
    "sparkline": [
      30.5,
      31.0,
      31.4,
      31.7,
      31.8,
      32.1,
      30.7,
      30.4,
      30.75,
      31.1
    ],
    "k5d": [
      {
        "open": 31.9,
        "high": 32.35,
        "low": 31.8,
        "close": 32.1,
        "volume": 5036,
        "ma5": 31.6,
        "ma10": 31.02
      },
      {
        "open": 31.7,
        "high": 31.75,
        "low": 30.5,
        "close": 30.7,
        "volume": 18393,
        "ma5": 31.54,
        "ma10": 31.04
      },
      {
        "open": 30.65,
        "high": 30.65,
        "low": 30.2,
        "close": 30.4,
        "volume": 7147,
        "ma5": 31.34,
        "ma10": 31.03
      },
      {
        "open": 30.35,
        "high": 30.75,
        "low": 30.25,
        "close": 30.75,
        "volume": 4444,
        "ma5": 31.15,
        "ma10": 31.08
      },
      {
        "open": 30.65,
        "high": 31.15,
        "low": 30.6,
        "close": 31.1,
        "volume": 5774,
        "ma5": 31.01,
        "ma10": 31.14
      }
    ],
    "symbol": "2105.TW",
    "kd": {
      "k": 41.2,
      "d": 49.1,
      "prevK": 40.9,
      "prevD": 53.0,
      "h8": 32.35,
      "l8": 30.2
    }
  },
  {
    "code": "3406",
    "name": "玉晶光",
    "categories": [
      "SitcaBuy",
      "TurnoverRate",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 685.0,
    "prevClose": 676.0,
    "open": 676.0,
    "high": 695.0,
    "low": 669.0,
    "volume": 5613,
    "ma5": 636.6,
    "ma10": 589.3,
    "ma20": 542.27,
    "ma60": 609.96,
    "vMa5": 4981,
    "vMa10": 3745,
    "maxVol10d": 6144,
    "hasVolumeBurst": true,
    "high5d": 695.0,
    "high10d": 695.0,
    "high20d": 695.0,
    "sparkline": [
      533.0,
      547.0,
      546.0,
      546.0,
      538.0,
      578.0,
      629.0,
      615.0,
      676.0,
      685.0
    ],
    "k5d": [
      {
        "open": 546.0,
        "high": 584.0,
        "low": 535.0,
        "close": 578.0,
        "volume": 2686,
        "ma5": 551.0,
        "ma10": 520.65
      },
      {
        "open": 585.0,
        "high": 635.0,
        "low": 572.0,
        "close": 629.0,
        "volume": 6056,
        "ma5": 567.4,
        "ma10": 538.8
      },
      {
        "open": 623.0,
        "high": 642.0,
        "low": 608.0,
        "close": 615.0,
        "volume": 4405,
        "ma5": 581.2,
        "ma10": 552.2
      },
      {
        "open": 630.0,
        "high": 676.0,
        "low": 625.0,
        "close": 676.0,
        "volume": 6144,
        "ma5": 607.2,
        "ma10": 571.0
      },
      {
        "open": 676.0,
        "high": 695.0,
        "low": 669.0,
        "close": 685.0,
        "volume": 5613,
        "ma5": 636.6,
        "ma10": 589.3
      }
    ],
    "symbol": "3406.TW",
    "kd": {
      "k": 90.9,
      "d": 84.5,
      "prevK": 89.3,
      "prevD": 81.4,
      "h8": 676.0,
      "l8": 525.0
    }
  },
  {
    "code": "2377",
    "name": "微星",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 148.0,
    "prevClose": 149.5,
    "open": 149.5,
    "high": 150.0,
    "low": 144.5,
    "volume": 15354,
    "ma5": 158.7,
    "ma10": 156.05,
    "ma20": 150.38,
    "ma60": 142.91,
    "vMa5": 30867,
    "vMa10": 21578,
    "maxVol10d": 50805,
    "hasVolumeBurst": true,
    "high5d": 173.5,
    "high10d": 173.5,
    "high20d": 173.5,
    "sparkline": [
      151.0,
      154.0,
      153.0,
      155.0,
      154.0,
      169.0,
      168.0,
      159.0,
      149.5,
      148.0
    ],
    "k5d": [
      {
        "open": 157.0,
        "high": 169.0,
        "low": 152.0,
        "close": 169.0,
        "volume": 45461,
        "ma5": 157.0,
        "ma10": 150.65
      },
      {
        "open": 171.0,
        "high": 173.5,
        "low": 162.5,
        "close": 168.0,
        "volume": 50805,
        "ma5": 159.8,
        "ma10": 153.85
      },
      {
        "open": 170.5,
        "high": 171.0,
        "low": 158.5,
        "close": 159.0,
        "volume": 24449,
        "ma5": 161.0,
        "ma10": 155.55
      },
      {
        "open": 158.5,
        "high": 158.5,
        "low": 149.5,
        "close": 149.5,
        "volume": 18263,
        "ma5": 159.9,
        "ma10": 156.2
      },
      {
        "open": 149.5,
        "high": 150.0,
        "low": 144.5,
        "close": 148.0,
        "volume": 15354,
        "ma5": 158.7,
        "ma10": 156.05
      }
    ],
    "symbol": "2377.TW",
    "kd": {
      "k": 37.8,
      "d": 58.4,
      "prevK": 50.7,
      "prevD": 68.8,
      "h8": 173.5,
      "l8": 149.5
    }
  },
  {
    "code": "8422",
    "name": "可寧衛*",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 27.1,
    "prevClose": 26.45,
    "open": 26.55,
    "high": 27.15,
    "low": 26.4,
    "volume": 9546,
    "ma5": 26.66,
    "ma10": 26.52,
    "ma20": 26.05,
    "ma60": 27.16,
    "vMa5": 4659,
    "vMa10": 4756,
    "maxVol10d": 9546,
    "hasVolumeBurst": true,
    "high5d": 27.2,
    "high10d": 27.2,
    "high20d": 27.2,
    "sparkline": [
      26.0,
      26.15,
      26.3,
      26.8,
      26.65,
      26.9,
      26.45,
      26.4,
      26.45,
      27.1
    ],
    "k5d": [
      {
        "open": 26.85,
        "high": 27.15,
        "low": 26.6,
        "close": 26.9,
        "volume": 4864,
        "ma5": 26.56,
        "ma10": 26.09
      },
      {
        "open": 27.1,
        "high": 27.2,
        "low": 26.4,
        "close": 26.45,
        "volume": 3466,
        "ma5": 26.62,
        "ma10": 26.3
      },
      {
        "open": 26.4,
        "high": 26.5,
        "low": 26.2,
        "close": 26.4,
        "volume": 2865,
        "ma5": 26.64,
        "ma10": 26.47
      },
      {
        "open": 26.3,
        "high": 26.5,
        "low": 26.15,
        "close": 26.45,
        "volume": 2554,
        "ma5": 26.57,
        "ma10": 26.43
      },
      {
        "open": 26.55,
        "high": 27.15,
        "low": 26.4,
        "close": 27.1,
        "volume": 9546,
        "ma5": 26.66,
        "ma10": 26.52
      }
    ],
    "symbol": "8422.TW",
    "kd": {
      "k": 72.2,
      "d": 71.1,
      "prevK": 61.8,
      "prevD": 70.6,
      "h8": 27.2,
      "l8": 25.75
    }
  },
  {
    "code": "2474",
    "name": "可成",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D"
    ],
    "price": 204.0,
    "prevClose": 204.0,
    "open": 205.0,
    "high": 205.0,
    "low": 202.5,
    "volume": 2602,
    "ma5": 204.1,
    "ma10": 198.4,
    "ma20": 191.85,
    "ma60": 201.22,
    "vMa5": 2696,
    "vMa10": 3578,
    "maxVol10d": 8213,
    "hasVolumeBurst": true,
    "high5d": 209.0,
    "high10d": 209.0,
    "high20d": 209.0,
    "sparkline": [
      181.5,
      187.5,
      187.5,
      201.0,
      206.0,
      205.0,
      203.0,
      204.5,
      204.0,
      204.0
    ],
    "k5d": [
      {
        "open": 206.0,
        "high": 209.0,
        "low": 204.5,
        "close": 205.0,
        "volume": 3566,
        "ma5": 197.4,
        "ma10": 189.35
      },
      {
        "open": 206.0,
        "high": 206.0,
        "low": 202.5,
        "close": 203.0,
        "volume": 2484,
        "ma5": 200.5,
        "ma10": 191.8
      },
      {
        "open": 203.0,
        "high": 205.0,
        "low": 202.5,
        "close": 204.5,
        "volume": 2323,
        "ma5": 203.9,
        "ma10": 193.95
      },
      {
        "open": 203.5,
        "high": 204.5,
        "low": 202.0,
        "close": 204.0,
        "volume": 2503,
        "ma5": 204.5,
        "ma10": 196.1
      },
      {
        "open": 205.0,
        "high": 205.0,
        "low": 202.5,
        "close": 204.0,
        "volume": 2602,
        "ma5": 204.1,
        "ma10": 198.4
      }
    ],
    "symbol": "2474.TW",
    "kd": {
      "k": 81.0,
      "d": 77.5,
      "prevK": 80.9,
      "prevD": 75.7,
      "h8": 209.0,
      "l8": 182.5
    }
  },
  {
    "code": "00740B",
    "name": "富邦全球投等債",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 36.99,
    "prevClose": 37.56,
    "open": 37.21,
    "high": 37.21,
    "low": 36.98,
    "volume": 2449,
    "ma5": 37.65,
    "ma10": 37.91,
    "ma20": 38.02,
    "ma60": 38.53,
    "vMa5": 1769,
    "vMa10": 1475,
    "maxVol10d": 3083,
    "hasVolumeBurst": true,
    "high5d": 38.02,
    "high10d": 38.43,
    "high20d": 38.43,
    "sparkline": [
      38.37,
      38.34,
      38.07,
      38.15,
      37.9,
      37.92,
      37.93,
      37.85,
      37.56,
      36.99
    ],
    "k5d": [
      {
        "open": 38.02,
        "high": 38.02,
        "low": 37.89,
        "close": 37.92,
        "volume": 1430,
        "ma5": 38.08,
        "ma10": 38.08
      },
      {
        "open": 37.9,
        "high": 37.94,
        "low": 37.9,
        "close": 37.93,
        "volume": 1235,
        "ma5": 37.99,
        "ma10": 38.09
      },
      {
        "open": 37.97,
        "high": 37.97,
        "low": 37.85,
        "close": 37.85,
        "volume": 649,
        "ma5": 37.95,
        "ma10": 38.06
      },
      {
        "open": 37.76,
        "high": 37.76,
        "low": 37.49,
        "close": 37.56,
        "volume": 3083,
        "ma5": 37.83,
        "ma10": 38.02
      },
      {
        "open": 37.21,
        "high": 37.21,
        "low": 36.98,
        "close": 36.99,
        "volume": 2449,
        "ma5": 37.65,
        "ma10": 37.91
      }
    ],
    "symbol": "00740B.TWO",
    "kd": {
      "k": 9.9,
      "d": 20.2,
      "prevK": 14.5,
      "prevD": 25.3,
      "h8": 38.37,
      "l8": 37.49
    }
  },
  {
    "code": "3227",
    "name": "原相",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 196.5,
    "prevClose": 198.5,
    "open": 198.5,
    "high": 201.0,
    "low": 195.5,
    "volume": 815,
    "ma5": 199.7,
    "ma10": 203.65,
    "ma20": 199.5,
    "ma60": 213.03,
    "vMa5": 950,
    "vMa10": 1180,
    "maxVol10d": 1909,
    "hasVolumeBurst": false,
    "high5d": 206.0,
    "high10d": 214.5,
    "high20d": 214.5,
    "sparkline": [
      209.5,
      204.0,
      205.5,
      210.0,
      209.0,
      204.0,
      201.5,
      198.0,
      198.5,
      196.5
    ],
    "k5d": [
      {
        "open": 205.0,
        "high": 206.0,
        "low": 202.5,
        "close": 204.0,
        "volume": 1362,
        "ma5": 206.5,
        "ma10": 201.75
      },
      {
        "open": 205.5,
        "high": 206.0,
        "low": 200.0,
        "close": 201.5,
        "volume": 1218,
        "ma5": 206.0,
        "ma10": 203.8
      },
      {
        "open": 201.5,
        "high": 202.0,
        "low": 198.0,
        "close": 198.0,
        "volume": 777,
        "ma5": 204.5,
        "ma10": 204.4
      },
      {
        "open": 198.5,
        "high": 200.5,
        "low": 196.5,
        "close": 198.5,
        "volume": 575,
        "ma5": 202.2,
        "ma10": 204.55
      },
      {
        "open": 198.5,
        "high": 201.0,
        "low": 195.5,
        "close": 196.5,
        "volume": 815,
        "ma5": 199.7,
        "ma10": 203.65
      }
    ],
    "symbol": "3227.TWO",
    "kd": {
      "k": 25.2,
      "d": 44.9,
      "prevK": 35.1,
      "prevD": 54.8,
      "h8": 214.5,
      "l8": 196.5
    }
  },
  {
    "code": "4966",
    "name": "譜瑞-KY",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 565.0,
    "prevClose": 565.0,
    "open": 570.0,
    "high": 576.0,
    "low": 553.0,
    "volume": 990,
    "ma5": 575.4,
    "ma10": 589.3,
    "ma20": 586.8,
    "ma60": 652.38,
    "vMa5": 744,
    "vMa10": 897,
    "maxVol10d": 1435,
    "hasVolumeBurst": false,
    "high5d": 601.0,
    "high10d": 622.0,
    "high20d": 622.0,
    "sparkline": [
      618.0,
      605.0,
      598.0,
      600.0,
      595.0,
      591.0,
      586.0,
      570.0,
      565.0,
      565.0
    ],
    "k5d": [
      {
        "open": 592.0,
        "high": 600.0,
        "low": 590.0,
        "close": 591.0,
        "volume": 600,
        "ma5": 597.8,
        "ma10": 586.1
      },
      {
        "open": 594.0,
        "high": 601.0,
        "low": 585.0,
        "close": 586.0,
        "volume": 803,
        "ma5": 594.0,
        "ma10": 591.5
      },
      {
        "open": 588.0,
        "high": 589.0,
        "low": 569.0,
        "close": 570.0,
        "volume": 707,
        "ma5": 588.4,
        "ma10": 592.3
      },
      {
        "open": 567.0,
        "high": 573.0,
        "low": 563.0,
        "close": 565.0,
        "volume": 619,
        "ma5": 581.4,
        "ma10": 591.2
      },
      {
        "open": 570.0,
        "high": 576.0,
        "low": 553.0,
        "close": 565.0,
        "volume": 990,
        "ma5": 575.4,
        "ma10": 589.3
      }
    ],
    "symbol": "4966.TWO",
    "kd": {
      "k": 27.0,
      "d": 42.0,
      "prevK": 30.5,
      "prevD": 49.4,
      "h8": 613.0,
      "l8": 563.0
    }
  },
  {
    "code": "3450",
    "name": "聯鈞",
    "categories": [
      "SitcaBuy",
      "SitcaBuy5D",
      "ValueTop",
      "SitcaBuy3D",
      "TurnoverRate"
    ],
    "price": 579.0,
    "prevClose": 550.0,
    "open": 562.0,
    "high": 600.0,
    "low": 559.0,
    "volume": 22374,
    "ma5": 534.6,
    "ma10": 511.4,
    "ma20": 461.62,
    "ma60": 491.74,
    "vMa5": 5885,
    "vMa10": 9202,
    "maxVol10d": 22467,
    "hasVolumeBurst": true,
    "high5d": 600.0,
    "high10d": 600.0,
    "high20d": 600.0,
    "sparkline": [
      475.0,
      491.5,
      477.0,
      524.0,
      473.5,
      507.0,
      527.0,
      510.0,
      550.0,
      579.0
    ],
    "k5d": [
      {
        "open": 484.5,
        "high": 508.0,
        "low": 484.5,
        "close": 507.0,
        "volume": 1333,
        "ma5": 494.6,
        "ma10": 449.95
      },
      {
        "open": 525.0,
        "high": 543.0,
        "low": 499.5,
        "close": 527.0,
        "volume": 2451,
        "ma5": 501.7,
        "ma10": 468.8
      },
      {
        "open": 516.0,
        "high": 516.0,
        "low": 491.0,
        "close": 510.0,
        "volume": 1336,
        "ma5": 508.3,
        "ma10": 482.6
      },
      {
        "open": 510.0,
        "high": 550.0,
        "low": 502.0,
        "close": 550.0,
        "volume": 1930,
        "ma5": 513.5,
        "ma10": 496.7
      },
      {
        "open": 562.0,
        "high": 600.0,
        "low": 559.0,
        "close": 579.0,
        "volume": 22374,
        "ma5": 534.6,
        "ma10": 511.4
      }
    ],
    "symbol": "3450.TW",
    "kd": {
      "k": 86.4,
      "d": 82.9,
      "prevK": 87.3,
      "prevD": 81.1,
      "h8": 550.0,
      "l8": 463.5
    }
  },
  {
    "code": "1513",
    "name": "中興電",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 167.0,
    "prevClose": 171.0,
    "open": 170.0,
    "high": 171.5,
    "low": 166.0,
    "volume": 2620,
    "ma5": 168.9,
    "ma10": 164.35,
    "ma20": 159.97,
    "ma60": 167.78,
    "vMa5": 6415,
    "vMa10": 4080,
    "maxVol10d": 14984,
    "hasVolumeBurst": true,
    "high5d": 177.0,
    "high10d": 177.0,
    "high20d": 177.0,
    "sparkline": [
      161.0,
      160.5,
      157.5,
      159.5,
      160.5,
      165.5,
      171.0,
      170.0,
      171.0,
      167.0
    ],
    "k5d": [
      {
        "open": 161.5,
        "high": 168.0,
        "low": 161.0,
        "close": 165.5,
        "volume": 7058,
        "ma5": 160.7,
        "ma10": 157.95
      },
      {
        "open": 168.5,
        "high": 177.0,
        "low": 166.5,
        "close": 171.0,
        "volume": 14984,
        "ma5": 162.8,
        "ma10": 160.35
      },
      {
        "open": 172.5,
        "high": 174.0,
        "low": 168.5,
        "close": 170.0,
        "volume": 4063,
        "ma5": 165.3,
        "ma10": 162.0
      },
      {
        "open": 169.5,
        "high": 172.5,
        "low": 167.0,
        "close": 171.0,
        "volume": 3348,
        "ma5": 167.6,
        "ma10": 163.55
      },
      {
        "open": 170.0,
        "high": 171.5,
        "low": 166.0,
        "close": 167.0,
        "volume": 2620,
        "ma5": 168.9,
        "ma10": 164.35
      }
    ],
    "symbol": "1513.TW",
    "kd": {
      "k": 65.6,
      "d": 70.9,
      "prevK": 73.4,
      "prevD": 73.6,
      "h8": 177.0,
      "l8": 157.0
    }
  },
  {
    "code": "00877",
    "name": "復華中國5G",
    "categories": [
      "MajorBuy",
      "MajorBuy3D",
      "MajorBuy1D"
    ],
    "price": 39.21,
    "prevClose": 39.81,
    "open": 40.15,
    "high": 40.25,
    "low": 38.94,
    "volume": 3169,
    "ma5": 38.88,
    "ma10": 38.12,
    "ma20": 37.08,
    "ma60": 41.83,
    "vMa5": 3256,
    "vMa10": 4271,
    "maxVol10d": 8466,
    "hasVolumeBurst": true,
    "high5d": 40.25,
    "high10d": 40.25,
    "high20d": 40.69,
    "sparkline": [
      37.12,
      36.87,
      38.66,
      36.72,
      37.42,
      37.9,
      39.07,
      38.41,
      39.81,
      39.21
    ],
    "k5d": [
      {
        "open": 37.42,
        "high": 38.55,
        "low": 37.31,
        "close": 37.9,
        "volume": 3378,
        "ma5": 37.51,
        "ma10": 36.14
      },
      {
        "open": 38.51,
        "high": 39.44,
        "low": 38.39,
        "close": 39.07,
        "volume": 3510,
        "ma5": 37.95,
        "ma10": 36.79
      },
      {
        "open": 38.75,
        "high": 38.96,
        "low": 38.23,
        "close": 38.41,
        "volume": 2458,
        "ma5": 37.9,
        "ma10": 37.18
      },
      {
        "open": 38.53,
        "high": 40.1,
        "low": 38.53,
        "close": 39.81,
        "volume": 3763,
        "ma5": 38.52,
        "ma10": 37.79
      },
      {
        "open": 40.15,
        "high": 40.25,
        "low": 38.94,
        "close": 39.21,
        "volume": 3169,
        "ma5": 38.88,
        "ma10": 38.12
      }
    ],
    "symbol": "00877.TWO",
    "kd": {
      "k": 83.2,
      "d": 80.2,
      "prevK": 86.0,
      "prevD": 78.8,
      "h8": 40.1,
      "l8": 35.64
    }
  },
  {
    "code": "00928",
    "name": "中信上櫃ESG30",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 31.83,
    "prevClose": 32.71,
    "open": 32.8,
    "high": 33.0,
    "low": 31.79,
    "volume": 943,
    "ma5": 32.8,
    "ma10": 32.35,
    "ma20": 30.51,
    "ma60": 34.86,
    "vMa5": 986,
    "vMa10": 1035,
    "maxVol10d": 1456,
    "hasVolumeBurst": false,
    "high5d": 34.0,
    "high10d": 34.0,
    "high20d": 34.0,
    "sparkline": [
      31.27,
      32.42,
      31.55,
      32.0,
      32.26,
      33.14,
      33.26,
      33.05,
      32.71,
      31.83
    ],
    "k5d": [
      {
        "open": 32.3,
        "high": 33.22,
        "low": 32.3,
        "close": 33.14,
        "volume": 1456,
        "ma5": 32.27,
        "ma10": 30.42
      },
      {
        "open": 33.9,
        "high": 34.0,
        "low": 33.22,
        "close": 33.26,
        "volume": 1320,
        "ma5": 32.44,
        "ma10": 31.21
      },
      {
        "open": 33.5,
        "high": 33.74,
        "low": 32.76,
        "close": 33.05,
        "volume": 513,
        "ma5": 32.74,
        "ma10": 31.78
      },
      {
        "open": 32.95,
        "high": 32.95,
        "low": 32.34,
        "close": 32.71,
        "volume": 699,
        "ma5": 32.88,
        "ma10": 32.17
      },
      {
        "open": 32.8,
        "high": 33.0,
        "low": 31.79,
        "close": 31.83,
        "volume": 943,
        "ma5": 32.8,
        "ma10": 32.35
      }
    ],
    "symbol": "00928.TWO",
    "kd": {
      "k": 60.5,
      "d": 73.9,
      "prevK": 76.4,
      "prevD": 80.5,
      "h8": 34.0,
      "l8": 30.95
    }
  },
  {
    "code": "6217",
    "name": "中探針",
    "categories": [
      "MajorBuy",
      "MajorBuy3D",
      "Top100",
      "ValueTop",
      "TurnoverRate"
    ],
    "price": 157.0,
    "prevClose": 171.0,
    "open": 176.5,
    "high": 183.5,
    "low": 155.0,
    "volume": 5040,
    "ma5": 163.9,
    "ma10": 161.1,
    "ma20": 147.5,
    "ma60": 216.1,
    "vMa5": 1530,
    "vMa10": 1599,
    "maxVol10d": 5040,
    "hasVolumeBurst": true,
    "high5d": 183.5,
    "high10d": 183.5,
    "high20d": 185.5,
    "sparkline": [
      147.0,
      161.5,
      165.0,
      165.0,
      153.0,
      154.0,
      168.5,
      169.0,
      171.0,
      157.0
    ],
    "k5d": [
      {
        "open": 149.0,
        "high": 156.0,
        "low": 149.0,
        "close": 154.0,
        "volume": 656,
        "ma5": 159.7,
        "ma10": 141.4
      },
      {
        "open": 160.0,
        "high": 169.0,
        "low": 160.0,
        "close": 168.5,
        "volume": 884,
        "ma5": 161.1,
        "ma10": 148.1
      },
      {
        "open": 166.0,
        "high": 172.0,
        "low": 160.0,
        "close": 169.0,
        "volume": 574,
        "ma5": 161.9,
        "ma10": 153.9
      },
      {
        "open": 172.0,
        "high": 172.0,
        "low": 164.0,
        "close": 171.0,
        "volume": 497,
        "ma5": 163.1,
        "ma10": 158.8
      },
      {
        "open": 176.5,
        "high": 183.5,
        "low": 155.0,
        "close": 157.0,
        "volume": 5040,
        "ma5": 163.9,
        "ma10": 161.1
      }
    ],
    "symbol": "6217.TWO",
    "kd": {
      "k": 72.7,
      "d": 78.1,
      "prevK": 88.2,
      "prevD": 80.8,
      "h8": 173.0,
      "l8": 138.0
    }
  },
  {
    "code": "6477",
    "name": "安集",
    "categories": [
      "TurnoverRate"
    ],
    "price": 38.4,
    "prevClose": 38.45,
    "open": 37.8,
    "high": 40.3,
    "low": 37.8,
    "volume": 5547,
    "ma5": 36.83,
    "ma10": 35.87,
    "ma20": 36.1,
    "ma60": 35.43,
    "vMa5": 4838,
    "vMa10": 3129,
    "maxVol10d": 11446,
    "hasVolumeBurst": true,
    "high5d": 41.25,
    "high10d": 41.25,
    "high20d": 43.9,
    "sparkline": [
      36.3,
      35.25,
      34.05,
      33.95,
      34.95,
      34.25,
      34.8,
      38.25,
      38.45,
      38.4
    ],
    "k5d": [
      {
        "open": 34.6,
        "high": 34.8,
        "low": 34.0,
        "close": 34.25,
        "volume": 930,
        "ma5": 34.49,
        "ma10": 34.87
      },
      {
        "open": 34.3,
        "high": 35.85,
        "low": 34.3,
        "close": 34.8,
        "volume": 1358,
        "ma5": 34.4,
        "ma10": 35.09
      },
      {
        "open": 35.75,
        "high": 38.25,
        "low": 34.05,
        "close": 38.25,
        "volume": 4909,
        "ma5": 35.24,
        "ma10": 35.34
      },
      {
        "open": 40.15,
        "high": 41.25,
        "low": 37.3,
        "close": 38.45,
        "volume": 11446,
        "ma5": 36.14,
        "ma10": 35.63
      },
      {
        "open": 37.8,
        "high": 40.3,
        "low": 37.8,
        "close": 38.4,
        "volume": 5547,
        "ma5": 36.83,
        "ma10": 35.87
      }
    ],
    "symbol": "6477.TW",
    "kd": {
      "k": 62.9,
      "d": 53.7,
      "prevK": 61.1,
      "prevD": 49.0,
      "h8": 41.25,
      "l8": 32.75
    }
  },
  {
    "code": "6214",
    "name": "精誠",
    "categories": [
      "MajorBuy1D",
      "MajorBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "SitcaBuy"
    ],
    "price": 176.0,
    "prevClose": 175.5,
    "open": 175.0,
    "high": 176.0,
    "low": 173.5,
    "volume": 5260,
    "ma5": 164.5,
    "ma10": 155.5,
    "ma20": 150.28,
    "ma60": 142.4,
    "vMa5": 6415,
    "vMa10": 4342,
    "maxVol10d": 23394,
    "hasVolumeBurst": true,
    "high5d": 179.5,
    "high10d": 179.5,
    "high20d": 179.5,
    "sparkline": [
      153.0,
      145.5,
      146.5,
      144.5,
      143.0,
      142.5,
      156.5,
      172.0,
      175.5,
      176.0
    ],
    "k5d": [
      {
        "open": 143.0,
        "high": 144.0,
        "low": 142.0,
        "close": 142.5,
        "volume": 701,
        "ma5": 144.4,
        "ma10": 147.1
      },
      {
        "open": 156.5,
        "high": 156.5,
        "low": 156.5,
        "close": 156.5,
        "volume": 917,
        "ma5": 146.6,
        "ma10": 148.4
      },
      {
        "open": 172.0,
        "high": 172.0,
        "low": 172.0,
        "close": 172.0,
        "volume": 1803,
        "ma5": 151.7,
        "ma10": 150.2
      },
      {
        "open": 173.0,
        "high": 179.5,
        "low": 173.0,
        "close": 175.5,
        "volume": 23394,
        "ma5": 157.9,
        "ma10": 152.9
      },
      {
        "open": 175.0,
        "high": 176.0,
        "low": 173.5,
        "close": 176.0,
        "volume": 5260,
        "ma5": 164.5,
        "ma10": 155.5
      }
    ],
    "symbol": "6214.TW",
    "kd": {
      "k": 81.4,
      "d": 69.2,
      "prevK": 76.6,
      "prevD": 63.1,
      "h8": 179.5,
      "l8": 140.0
    }
  },
  {
    "code": "2426",
    "name": "鼎元",
    "categories": [
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 67.1,
    "prevClose": 73.2,
    "open": 73.2,
    "high": 73.2,
    "low": 67.0,
    "volume": 21796,
    "ma5": 68.88,
    "ma10": 67.09,
    "ma20": 61.74,
    "ma60": 69.19,
    "vMa5": 19601,
    "vMa10": 18298,
    "maxVol10d": 24142,
    "hasVolumeBurst": true,
    "high5d": 74.5,
    "high10d": 74.5,
    "high20d": 74.5,
    "sparkline": [
      62.5,
      63.9,
      67.8,
      67.6,
      64.7,
      68.9,
      68.6,
      66.6,
      73.2,
      67.1
    ],
    "k5d": [
      {
        "open": 65.0,
        "high": 71.0,
        "low": 65.0,
        "close": 68.9,
        "volume": 17283,
        "ma5": 66.58,
        "ma10": 60.92
      },
      {
        "open": 69.3,
        "high": 74.5,
        "low": 68.1,
        "close": 68.6,
        "volume": 23171,
        "ma5": 67.52,
        "ma10": 63.04
      },
      {
        "open": 69.3,
        "high": 69.5,
        "low": 65.8,
        "close": 66.6,
        "volume": 11611,
        "ma5": 67.28,
        "ma10": 64.67
      },
      {
        "open": 66.4,
        "high": 73.2,
        "low": 66.0,
        "close": 73.2,
        "volume": 24142,
        "ma5": 68.4,
        "ma10": 66.46
      },
      {
        "open": 73.2,
        "high": 73.2,
        "low": 67.0,
        "close": 67.1,
        "volume": 21796,
        "ma5": 68.88,
        "ma10": 67.09
      }
    ],
    "symbol": "2426.TW",
    "kd": {
      "k": 68.1,
      "d": 74.5,
      "prevK": 79.8,
      "prevD": 77.7,
      "h8": 74.5,
      "l8": 61.1
    }
  },
  {
    "code": "2481",
    "name": "強茂",
    "categories": [
      "TurnoverRate",
      "Top100",
      "ValueTop"
    ],
    "price": 139.5,
    "prevClose": 144.5,
    "open": 146.0,
    "high": 152.5,
    "low": 139.0,
    "volume": 42126,
    "ma5": 140.8,
    "ma10": 138.9,
    "ma20": 134.43,
    "ma60": 158.33,
    "vMa5": 26395,
    "vMa10": 23870,
    "maxVol10d": 42126,
    "hasVolumeBurst": true,
    "high5d": 152.5,
    "high10d": 152.5,
    "high20d": 157.5,
    "sparkline": [
      134.0,
      139.0,
      133.0,
      137.5,
      141.5,
      139.0,
      143.0,
      138.0,
      144.5,
      139.5
    ],
    "k5d": [
      {
        "open": 143.5,
        "high": 144.0,
        "low": 138.5,
        "close": 139.0,
        "volume": 15087,
        "ma5": 138.0,
        "ma10": 130.75
      },
      {
        "open": 140.5,
        "high": 152.5,
        "low": 140.0,
        "close": 143.0,
        "volume": 35784,
        "ma5": 138.8,
        "ma10": 134.35
      },
      {
        "open": 145.0,
        "high": 146.0,
        "low": 136.0,
        "close": 138.0,
        "volume": 16327,
        "ma5": 139.8,
        "ma10": 136.4
      },
      {
        "open": 139.0,
        "high": 150.0,
        "low": 134.0,
        "close": 144.5,
        "volume": 22649,
        "ma5": 141.2,
        "ma10": 137.95
      },
      {
        "open": 146.0,
        "high": 152.5,
        "low": 139.0,
        "close": 139.5,
        "volume": 42126,
        "ma5": 140.8,
        "ma10": 138.9
      }
    ],
    "symbol": "2481.TW",
    "kd": {
      "k": 63.3,
      "d": 68.5,
      "prevK": 69.9,
      "prevD": 71.1,
      "h8": 152.5,
      "l8": 126.5
    }
  },
  {
    "code": "3229",
    "name": "晟鈦",
    "categories": [
      "TurnoverRate"
    ],
    "price": 51.1,
    "prevClose": 54.2,
    "open": 54.7,
    "high": 57.4,
    "low": 50.5,
    "volume": 1979,
    "ma5": 53.6,
    "ma10": 50.67,
    "ma20": 46.33,
    "ma60": 44.3,
    "vMa5": 1702,
    "vMa10": 1345,
    "maxVol10d": 2441,
    "hasVolumeBurst": true,
    "high5d": 57.4,
    "high10d": 57.4,
    "high20d": 57.4,
    "sparkline": [
      44.25,
      46.0,
      46.55,
      50.9,
      51.0,
      55.9,
      53.0,
      53.8,
      54.2,
      51.1
    ],
    "k5d": [
      {
        "open": 50.8,
        "high": 56.0,
        "low": 49.7,
        "close": 55.9,
        "volume": 2441,
        "ma5": 50.07,
        "ma10": 47.22
      },
      {
        "open": 55.9,
        "high": 55.9,
        "low": 51.4,
        "close": 53.0,
        "volume": 1479,
        "ma5": 51.47,
        "ma10": 48.6
      },
      {
        "open": 53.0,
        "high": 54.3,
        "low": 50.6,
        "close": 53.8,
        "volume": 1005,
        "ma5": 52.92,
        "ma10": 49.66
      },
      {
        "open": 54.0,
        "high": 55.1,
        "low": 50.5,
        "close": 54.2,
        "volume": 1604,
        "ma5": 53.58,
        "ma10": 50.34
      },
      {
        "open": 54.7,
        "high": 57.4,
        "low": 50.5,
        "close": 51.1,
        "volume": 1979,
        "ma5": 53.6,
        "ma10": 50.67
      }
    ],
    "symbol": "3229.TW",
    "kd": {
      "k": 76.2,
      "d": 81.1,
      "prevK": 85.5,
      "prevD": 83.5,
      "h8": 56.0,
      "l8": 42.55
    }
  },
  {
    "code": "6226",
    "name": "光鼎",
    "categories": [
      "TurnoverRate"
    ],
    "price": 21.1,
    "prevClose": 19.2,
    "open": 19.4,
    "high": 21.1,
    "low": 19.4,
    "volume": 15582,
    "ma5": 19.85,
    "ma10": 20.66,
    "ma20": 20.38,
    "ma60": 18.73,
    "vMa5": 8307,
    "vMa10": 12277,
    "maxVol10d": 25661,
    "hasVolumeBurst": true,
    "high5d": 21.1,
    "high10d": 23.8,
    "high20d": 24.5,
    "sparkline": [
      20.8,
      22.85,
      22.05,
      21.4,
      20.3,
      20.3,
      19.6,
      19.05,
      19.2,
      21.1
    ],
    "k5d": [
      {
        "open": 20.85,
        "high": 20.9,
        "low": 20.1,
        "close": 20.3,
        "volume": 5891,
        "ma5": 21.38,
        "ma10": 21.11
      },
      {
        "open": 20.45,
        "high": 20.9,
        "low": 19.5,
        "close": 19.6,
        "volume": 9501,
        "ma5": 20.73,
        "ma10": 21.04
      },
      {
        "open": 19.7,
        "high": 19.75,
        "low": 19.05,
        "close": 19.05,
        "volume": 5057,
        "ma5": 20.13,
        "ma10": 20.99
      },
      {
        "open": 19.05,
        "high": 19.65,
        "low": 18.7,
        "close": 19.2,
        "volume": 5506,
        "ma5": 19.69,
        "ma10": 20.75
      },
      {
        "open": 19.4,
        "high": 21.1,
        "low": 19.4,
        "close": 21.1,
        "volume": 15582,
        "ma5": 19.85,
        "ma10": 20.66
      }
    ],
    "symbol": "6226.TW",
    "kd": {
      "k": 26.9,
      "d": 27.9,
      "prevK": 16.8,
      "prevD": 28.4,
      "h8": 23.8,
      "l8": 18.7
    }
  },
  {
    "code": "6530",
    "name": "創威",
    "categories": [
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 80.8,
    "prevClose": 86.7,
    "open": 85.0,
    "high": 87.9,
    "low": 80.8,
    "volume": 1187,
    "ma5": 84.86,
    "ma10": 82.15,
    "ma20": 76.07,
    "ma60": 87.13,
    "vMa5": 1798,
    "vMa10": 1524,
    "maxVol10d": 2778,
    "hasVolumeBurst": true,
    "high5d": 90.4,
    "high10d": 90.4,
    "high20d": 90.4,
    "sparkline": [
      82.1,
      77.3,
      75.0,
      82.5,
      80.3,
      87.5,
      85.8,
      83.5,
      86.7,
      80.8
    ],
    "k5d": [
      {
        "open": 80.4,
        "high": 88.1,
        "low": 80.4,
        "close": 87.5,
        "volume": 2281,
        "ma5": 80.52,
        "ma10": 75.84
      },
      {
        "open": 88.5,
        "high": 90.4,
        "low": 85.2,
        "close": 85.8,
        "volume": 2778,
        "ma5": 82.22,
        "ma10": 78.27
      },
      {
        "open": 87.2,
        "high": 87.9,
        "low": 82.9,
        "close": 83.5,
        "volume": 1425,
        "ma5": 83.92,
        "ma10": 79.86
      },
      {
        "open": 84.1,
        "high": 87.6,
        "low": 81.9,
        "close": 86.7,
        "volume": 1316,
        "ma5": 84.76,
        "ma10": 81.54
      },
      {
        "open": 85.0,
        "high": 87.9,
        "low": 80.8,
        "close": 80.8,
        "volume": 1187,
        "ma5": 84.86,
        "ma10": 82.15
      }
    ],
    "symbol": "6530.TWO",
    "kd": {
      "k": 64.6,
      "d": 73.8,
      "prevK": 77.5,
      "prevD": 78.4,
      "h8": 90.4,
      "l8": 74.7
    }
  },
  {
    "code": "4561",
    "name": "健椿",
    "categories": [
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy"
    ],
    "price": 49.4,
    "prevClose": 50.2,
    "open": 50.3,
    "high": 50.9,
    "low": 48.0,
    "volume": 1484,
    "ma5": 47.48,
    "ma10": 44.22,
    "ma20": 39.64,
    "ma60": 41.88,
    "vMa5": 1175,
    "vMa10": 887,
    "maxVol10d": 1838,
    "hasVolumeBurst": true,
    "high5d": 50.9,
    "high10d": 50.9,
    "high20d": 50.9,
    "sparkline": [
      36.3,
      39.9,
      43.85,
      42.85,
      41.9,
      46.05,
      45.65,
      46.1,
      50.2,
      49.4
    ],
    "k5d": [
      {
        "open": 46.05,
        "high": 46.05,
        "low": 46.05,
        "close": 46.05,
        "volume": 573,
        "ma5": 42.91,
        "ma10": 38.83
      },
      {
        "open": 48.2,
        "high": 48.2,
        "low": 45.4,
        "close": 45.65,
        "volume": 1424,
        "ma5": 44.06,
        "ma10": 40.16
      },
      {
        "open": 45.9,
        "high": 46.7,
        "low": 45.0,
        "close": 46.1,
        "volume": 557,
        "ma5": 44.51,
        "ma10": 41.35
      },
      {
        "open": 46.1,
        "high": 50.5,
        "low": 46.1,
        "close": 50.2,
        "volume": 1838,
        "ma5": 45.98,
        "ma10": 42.85
      },
      {
        "open": 50.3,
        "high": 50.9,
        "low": 48.0,
        "close": 49.4,
        "volume": 1484,
        "ma5": 47.48,
        "ma10": 44.22
      }
    ],
    "symbol": "4561.TWO",
    "kd": {
      "k": 89.7,
      "d": 86.5,
      "prevK": 89.9,
      "prevD": 84.9,
      "h8": 50.5,
      "l8": 36.95
    }
  },
  {
    "code": "5392",
    "name": "能率",
    "categories": [
      "MajorBuy3D",
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 45.85,
    "prevClose": 46.5,
    "open": 46.6,
    "high": 47.15,
    "low": 45.7,
    "volume": 1671,
    "ma5": 45.78,
    "ma10": 45.99,
    "ma20": 42.79,
    "ma60": 44.18,
    "vMa5": 2029,
    "vMa10": 3467,
    "maxVol10d": 7464,
    "hasVolumeBurst": true,
    "high5d": 47.3,
    "high10d": 47.7,
    "high20d": 47.7,
    "sparkline": [
      46.4,
      46.2,
      46.05,
      47.1,
      45.3,
      46.05,
      45.3,
      45.2,
      46.5,
      45.85
    ],
    "kd": {
      "k": 60.2,
      "d": 70.9,
      "prevK": 72.7,
      "prevD": 76.3,
      "h8": 47.7,
      "l8": 44.85
    },
    "k5d": [
      {
        "open": 45.3,
        "high": 46.55,
        "low": 44.85,
        "close": 46.05,
        "volume": 2296,
        "ma5": 46.14,
        "ma10": 43.32
      },
      {
        "open": 46.3,
        "high": 46.75,
        "low": 45.3,
        "close": 45.3,
        "volume": 1407,
        "ma5": 45.96,
        "ma10": 44.41
      },
      {
        "open": 46.35,
        "high": 46.4,
        "low": 45.2,
        "close": 45.2,
        "volume": 1292,
        "ma5": 45.79,
        "ma10": 45.15
      },
      {
        "open": 45.25,
        "high": 47.3,
        "low": 45.25,
        "close": 46.5,
        "volume": 3481,
        "ma5": 45.67,
        "ma10": 45.64
      },
      {
        "open": 46.6,
        "high": 47.15,
        "low": 45.7,
        "close": 45.85,
        "volume": 1671,
        "ma5": 45.78,
        "ma10": 45.99
      }
    ],
    "symbol": "5392.TWO"
  },
  {
    "code": "2221",
    "name": "大甲",
    "categories": [
      "MajorBuy3D",
      "MajorBuy"
    ],
    "price": 54.4,
    "prevClose": 54.0,
    "open": 54.0,
    "high": 54.7,
    "low": 53.2,
    "volume": 331,
    "ma5": 52.92,
    "ma10": 50.07,
    "ma20": 48.22,
    "ma60": 47.29,
    "vMa5": 457,
    "vMa10": 338,
    "maxVol10d": 720,
    "hasVolumeBurst": true,
    "high5d": 55.0,
    "high10d": 55.0,
    "high20d": 55.3,
    "sparkline": [
      44.75,
      46.3,
      46.95,
      49.0,
      49.1,
      50.2,
      53.7,
      52.3,
      54.0,
      54.4
    ],
    "kd": {
      "k": 88.0,
      "d": 80.7,
      "prevK": 84.8,
      "prevD": 77.0,
      "h8": 55.0,
      "l8": 44.2
    },
    "k5d": [
      {
        "open": 48.95,
        "high": 52.0,
        "low": 47.8,
        "close": 50.2,
        "volume": 466,
        "ma5": 48.31,
        "ma10": 45.94
      },
      {
        "open": 50.5,
        "high": 54.0,
        "low": 50.5,
        "close": 53.7,
        "volume": 720,
        "ma5": 49.79,
        "ma10": 47.1
      },
      {
        "open": 53.7,
        "high": 55.0,
        "low": 51.6,
        "close": 52.3,
        "volume": 296,
        "ma5": 50.86,
        "ma10": 48.0
      },
      {
        "open": 52.7,
        "high": 54.9,
        "low": 51.7,
        "close": 54.0,
        "volume": 471,
        "ma5": 51.86,
        "ma10": 49.08
      },
      {
        "open": 54.0,
        "high": 54.7,
        "low": 53.2,
        "close": 54.4,
        "volume": 331,
        "ma5": 52.92,
        "ma10": 50.07
      }
    ],
    "symbol": "2221.TWO"
  },
  {
    "code": "2845",
    "name": "遠東銀",
    "categories": [
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy"
    ],
    "price": 13.45,
    "prevClose": 13.6,
    "open": 13.55,
    "high": 13.55,
    "low": 13.45,
    "volume": 5606,
    "ma5": 13.31,
    "ma10": 13.24,
    "ma20": 13.3,
    "ma60": 13.02,
    "vMa5": 8755,
    "vMa10": 7199,
    "maxVol10d": 21778,
    "hasVolumeBurst": true,
    "high5d": 13.6,
    "high10d": 13.6,
    "high20d": 13.65,
    "sparkline": [
      13.3,
      13.15,
      13.2,
      13.15,
      13.1,
      13.1,
      13.2,
      13.2,
      13.6,
      13.45
    ],
    "kd": {
      "k": 54.9,
      "d": 37.6,
      "prevK": 47.3,
      "prevD": 29.0,
      "h8": 13.6,
      "l8": 13.1
    },
    "k5d": [
      {
        "open": 13.15,
        "high": 13.2,
        "low": 13.1,
        "close": 13.1,
        "volume": 6091,
        "ma5": 13.14,
        "ma10": 13.26
      },
      {
        "open": 13.2,
        "high": 13.25,
        "low": 13.1,
        "close": 13.2,
        "volume": 6864,
        "ma5": 13.15,
        "ma10": 13.24
      },
      {
        "open": 13.25,
        "high": 13.25,
        "low": 13.15,
        "close": 13.2,
        "volume": 3438,
        "ma5": 13.15,
        "ma10": 13.21
      },
      {
        "open": 13.25,
        "high": 13.6,
        "low": 13.2,
        "close": 13.6,
        "volume": 21778,
        "ma5": 13.24,
        "ma10": 13.23
      },
      {
        "open": 13.55,
        "high": 13.55,
        "low": 13.45,
        "close": 13.45,
        "volume": 5606,
        "ma5": 13.31,
        "ma10": 13.24
      }
    ],
    "symbol": "2845.TW"
  },
  {
    "code": "00990A",
    "name": "主動元大AI新經濟",
    "categories": [
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy"
    ],
    "price": 16.52,
    "prevClose": 16.72,
    "open": 16.92,
    "high": 17.02,
    "low": 16.52,
    "volume": 22541,
    "ma5": 16.45,
    "ma10": 16.19,
    "ma20": 15.83,
    "ma60": 18.19,
    "vMa5": 19697,
    "vMa10": 17049,
    "maxVol10d": 24971,
    "hasVolumeBurst": true,
    "high5d": 17.02,
    "high10d": 17.02,
    "high20d": 17.13,
    "sparkline": [
      16.2,
      15.83,
      15.68,
      16.03,
      15.88,
      15.9,
      16.61,
      16.49,
      16.72,
      16.52
    ],
    "kd": {
      "k": 80.2,
      "d": 80.9,
      "prevK": 87.8,
      "prevD": 81.3,
      "h8": 16.76,
      "l8": 15.59
    },
    "k5d": [
      {
        "open": 15.88,
        "high": 15.93,
        "low": 15.85,
        "close": 15.9,
        "volume": 15963,
        "ma5": 15.86,
        "ma10": 15.56
      },
      {
        "open": 16.66,
        "high": 16.66,
        "low": 16.45,
        "close": 16.61,
        "volume": 24971,
        "ma5": 16.02,
        "ma10": 15.85
      },
      {
        "open": 16.73,
        "high": 16.73,
        "low": 16.47,
        "close": 16.49,
        "volume": 15700,
        "ma5": 16.18,
        "ma10": 15.95
      },
      {
        "open": 16.53,
        "high": 16.76,
        "low": 16.53,
        "close": 16.72,
        "volume": 19313,
        "ma5": 16.32,
        "ma10": 16.08
      },
      {
        "open": 16.92,
        "high": 17.02,
        "low": 16.52,
        "close": 16.52,
        "volume": 22541,
        "ma5": 16.45,
        "ma10": 16.19
      }
    ],
    "symbol": "00990A.TW"
  },
  {
    "code": "1714",
    "name": "和桐",
    "categories": [
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 16.9,
    "prevClose": 17.15,
    "open": 17.2,
    "high": 17.3,
    "low": 16.55,
    "volume": 13495,
    "ma5": 16.91,
    "ma10": 16.45,
    "ma20": 15.32,
    "ma60": 15.66,
    "vMa5": 21565,
    "vMa10": 25027,
    "maxVol10d": 47227,
    "hasVolumeBurst": true,
    "high5d": 17.55,
    "high10d": 17.55,
    "high20d": 17.55,
    "sparkline": [
      14.75,
      16.2,
      15.75,
      16.65,
      16.65,
      17.4,
      16.7,
      16.4,
      17.15,
      16.9
    ],
    "kd": {
      "k": 77.3,
      "d": 78.3,
      "prevK": 81.8,
      "prevD": 78.8,
      "h8": 17.55,
      "l8": 15.5
    },
    "k5d": [
      {
        "open": 16.65,
        "high": 17.5,
        "low": 16.65,
        "close": 17.4,
        "volume": 24709,
        "ma5": 16.53,
        "ma10": 15.2
      },
      {
        "open": 17.4,
        "high": 17.55,
        "low": 16.55,
        "close": 16.7,
        "volume": 28599,
        "ma5": 16.63,
        "ma10": 15.61
      },
      {
        "open": 16.7,
        "high": 17.1,
        "low": 16.25,
        "close": 16.4,
        "volume": 17091,
        "ma5": 16.76,
        "ma10": 15.94
      },
      {
        "open": 16.75,
        "high": 17.5,
        "low": 16.5,
        "close": 17.15,
        "volume": 23932,
        "ma5": 16.86,
        "ma10": 16.22
      },
      {
        "open": 17.2,
        "high": 17.3,
        "low": 16.55,
        "close": 16.9,
        "volume": 13495,
        "ma5": 16.91,
        "ma10": 16.45
      }
    ],
    "symbol": "1714.TW"
  },
  {
    "code": "00997A",
    "name": "主動群益美國增長",
    "categories": [
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy"
    ],
    "price": 11.76,
    "prevClose": 11.85,
    "open": 11.96,
    "high": 11.97,
    "low": 11.74,
    "volume": 10675,
    "ma5": 11.72,
    "ma10": 11.63,
    "ma20": 11.37,
    "ma60": 12.57,
    "vMa5": 9854,
    "vMa10": 9065,
    "maxVol10d": 14303,
    "hasVolumeBurst": true,
    "high5d": 11.97,
    "high10d": 11.97,
    "high20d": 11.97,
    "sparkline": [
      11.77,
      11.49,
      11.41,
      11.54,
      11.46,
      11.52,
      11.76,
      11.73,
      11.85,
      11.76
    ],
    "kd": {
      "k": 80.1,
      "d": 80.8,
      "prevK": 87.9,
      "prevD": 81.2,
      "h8": 11.87,
      "l8": 11.38
    },
    "k5d": [
      {
        "open": 11.5,
        "high": 11.55,
        "low": 11.46,
        "close": 11.52,
        "volume": 6857,
        "ma5": 11.48,
        "ma10": 11.3
      },
      {
        "open": 11.75,
        "high": 11.8,
        "low": 11.7,
        "close": 11.76,
        "volume": 10764,
        "ma5": 11.54,
        "ma10": 11.45
      },
      {
        "open": 11.78,
        "high": 11.81,
        "low": 11.73,
        "close": 11.73,
        "volume": 10058,
        "ma5": 11.6,
        "ma10": 11.5
      },
      {
        "open": 11.74,
        "high": 11.87,
        "low": 11.74,
        "close": 11.85,
        "volume": 10913,
        "ma5": 11.66,
        "ma10": 11.58
      },
      {
        "open": 11.96,
        "high": 11.97,
        "low": 11.74,
        "close": 11.76,
        "volume": 10675,
        "ma5": 11.72,
        "ma10": 11.63
      }
    ],
    "symbol": "00997A.TW"
  },
  {
    "code": "1909",
    "name": "榮成",
    "categories": [
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 11.1,
    "prevClose": 11.45,
    "open": 11.15,
    "high": 11.3,
    "low": 10.9,
    "volume": 7358,
    "ma5": 10.68,
    "ma10": 10.37,
    "ma20": 10.2,
    "ma60": 9.95,
    "vMa5": 8460,
    "vMa10": 5618,
    "maxVol10d": 18037,
    "hasVolumeBurst": true,
    "high5d": 11.5,
    "high10d": 11.5,
    "high20d": 11.5,
    "sparkline": [
      9.99,
      10.05,
      10.0,
      10.15,
      10.1,
      10.1,
      10.15,
      10.6,
      11.45,
      11.1
    ],
    "kd": {
      "k": 73.7,
      "d": 66.8,
      "prevK": 73.3,
      "prevD": 63.4,
      "h8": 11.5,
      "l8": 9.94
    },
    "k5d": [
      {
        "open": 10.1,
        "high": 10.1,
        "low": 10.1,
        "close": 10.1,
        "volume": 0,
        "ma5": 10.08,
        "ma10": 10.04
      },
      {
        "open": 10.45,
        "high": 10.85,
        "low": 10.1,
        "close": 10.15,
        "volume": 10532,
        "ma5": 10.1,
        "ma10": 10.05
      },
      {
        "open": 10.15,
        "high": 10.6,
        "low": 10.15,
        "close": 10.6,
        "volume": 6373,
        "ma5": 10.22,
        "ma10": 10.13
      },
      {
        "open": 10.55,
        "high": 11.5,
        "low": 10.45,
        "close": 11.45,
        "volume": 18037,
        "ma5": 10.48,
        "ma10": 10.27
      },
      {
        "open": 11.15,
        "high": 11.3,
        "low": 10.9,
        "close": 11.1,
        "volume": 7358,
        "ma5": 10.68,
        "ma10": 10.37
      }
    ],
    "symbol": "1909.TW"
  },
  {
    "code": "00637L",
    "name": "元大滬深300正2",
    "categories": [
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 20.82,
    "prevClose": 21.02,
    "open": 21.15,
    "high": 21.15,
    "low": 20.67,
    "volume": 8257,
    "ma5": 20.92,
    "ma10": 20.82,
    "ma20": 20.74,
    "ma60": 21.11,
    "vMa5": 14521,
    "vMa10": 17702,
    "maxVol10d": 34852,
    "hasVolumeBurst": true,
    "high5d": 21.32,
    "high10d": 21.32,
    "high20d": 21.66,
    "sparkline": [
      20.39,
      20.81,
      20.54,
      21.12,
      20.71,
      20.94,
      20.88,
      21.32,
      20.64,
      20.82
    ],
    "kd": {
      "k": 68.1,
      "d": 70.4,
      "prevK": 70.9,
      "prevD": 71.6,
      "h8": 21.32,
      "l8": 19.98
    },
    "k5d": [
      {
        "open": 20.92,
        "high": 21.15,
        "low": 20.76,
        "close": 20.94,
        "volume": 15358,
        "ma5": 20.82,
        "ma10": 20.53
      },
      {
        "open": 20.92,
        "high": 21.03,
        "low": 20.71,
        "close": 20.88,
        "volume": 11285,
        "ma5": 20.84,
        "ma10": 20.57
      },
      {
        "open": 21.08,
        "high": 21.32,
        "low": 21.03,
        "close": 21.32,
        "volume": 10880,
        "ma5": 20.99,
        "ma10": 20.72
      },
      {
        "open": 21.02,
        "high": 21.02,
        "low": 20.56,
        "close": 20.64,
        "volume": 26826,
        "ma5": 20.9,
        "ma10": 20.74
      },
      {
        "open": 21.15,
        "high": 21.15,
        "low": 20.67,
        "close": 20.82,
        "volume": 8257,
        "ma5": 20.92,
        "ma10": 20.82
      }
    ],
    "symbol": "00637L.TW"
  },
  {
    "code": "1709",
    "name": "和益",
    "categories": [
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 32.7,
    "prevClose": 32.75,
    "open": 32.55,
    "high": 33.25,
    "low": 30.95,
    "volume": 7844,
    "ma5": 30.89,
    "ma10": 29.08,
    "ma20": 27.02,
    "ma60": 23.96,
    "vMa5": 12945,
    "vMa10": 9176,
    "maxVol10d": 24646,
    "hasVolumeBurst": true,
    "high5d": 33.35,
    "high10d": 33.35,
    "high20d": 33.35,
    "sparkline": [
      26.2,
      27.65,
      27.8,
      27.3,
      27.4,
      28.0,
      30.65,
      30.35,
      32.75,
      32.7
    ],
    "kd": {
      "k": 88.3,
      "d": 82.8,
      "prevK": 86.8,
      "prevD": 80.0,
      "h8": 33.35,
      "l8": 25.8
    },
    "k5d": [
      {
        "open": 27.45,
        "high": 28.3,
        "low": 27.05,
        "close": 28.0,
        "volume": 5137,
        "ma5": 27.63,
        "ma10": 25.81
      },
      {
        "open": 28.5,
        "high": 30.8,
        "low": 28.15,
        "close": 30.65,
        "volume": 24646,
        "ma5": 28.23,
        "ma10": 26.62
      },
      {
        "open": 29.9,
        "high": 32.2,
        "low": 29.5,
        "close": 30.35,
        "volume": 13422,
        "ma5": 28.74,
        "ma10": 27.35
      },
      {
        "open": 30.9,
        "high": 33.35,
        "low": 30.55,
        "close": 32.75,
        "volume": 13678,
        "ma5": 29.83,
        "ma10": 28.33
      },
      {
        "open": 32.55,
        "high": 33.25,
        "low": 30.95,
        "close": 32.7,
        "volume": 7844,
        "ma5": 30.89,
        "ma10": 29.08
      }
    ],
    "symbol": "1709.TW"
  },
  {
    "code": "2371",
    "name": "大同",
    "categories": [
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 26.75,
    "prevClose": 27.45,
    "open": 27.3,
    "high": 27.45,
    "low": 26.2,
    "volume": 11636,
    "ma5": 26.63,
    "ma10": 26.28,
    "ma20": 25.71,
    "ma60": 27.35,
    "vMa5": 8385,
    "vMa10": 8429,
    "maxVol10d": 15887,
    "hasVolumeBurst": true,
    "high5d": 27.45,
    "high10d": 27.45,
    "high20d": 27.45,
    "sparkline": [
      25.5,
      25.45,
      25.95,
      26.8,
      25.95,
      26.35,
      26.25,
      26.35,
      27.45,
      26.75
    ],
    "kd": {
      "k": 76.3,
      "d": 73.2,
      "prevK": 78.2,
      "prevD": 71.6,
      "h8": 27.45,
      "l8": 24.9
    },
    "k5d": [
      {
        "open": 26.25,
        "high": 26.9,
        "low": 26.15,
        "close": 26.35,
        "volume": 9359,
        "ma5": 26.1,
        "ma10": 25.43
      },
      {
        "open": 26.5,
        "high": 26.75,
        "low": 26.15,
        "close": 26.25,
        "volume": 4712,
        "ma5": 26.26,
        "ma10": 25.71
      },
      {
        "open": 26.25,
        "high": 26.6,
        "low": 26.1,
        "close": 26.35,
        "volume": 4975,
        "ma5": 26.34,
        "ma10": 25.91
      },
      {
        "open": 26.8,
        "high": 27.45,
        "low": 26.45,
        "close": 27.45,
        "volume": 11243,
        "ma5": 26.47,
        "ma10": 26.13
      },
      {
        "open": 27.3,
        "high": 27.45,
        "low": 26.2,
        "close": 26.75,
        "volume": 11636,
        "ma5": 26.63,
        "ma10": 26.28
      }
    ],
    "symbol": "2371.TW"
  },
  {
    "code": "00993A",
    "name": "主動安聯台灣",
    "categories": [
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 13.45,
    "prevClose": 13.74,
    "open": 13.84,
    "high": 13.85,
    "low": 13.42,
    "volume": 6153,
    "ma5": 13.45,
    "ma10": 13.13,
    "ma20": 12.53,
    "ma60": 13.22,
    "vMa5": 7108,
    "vMa10": 6477,
    "maxVol10d": 8887,
    "hasVolumeBurst": true,
    "high5d": 13.85,
    "high10d": 13.85,
    "high20d": 13.85,
    "sparkline": [
      12.46,
      12.81,
      12.93,
      12.75,
      13.06,
      13.14,
      13.4,
      13.6,
      13.66,
      13.45
    ],
    "kd": {
      "k": 84.6,
      "d": 87.2,
      "prevK": 92.5,
      "prevD": 88.5,
      "h8": 13.8,
      "l8": 12.57
    },
    "k5d": [
      {
        "open": 13.01,
        "high": 13.15,
        "low": 12.97,
        "close": 13.14,
        "volume": 5081,
        "ma5": 12.94,
        "ma10": 12.25
      },
      {
        "open": 13.27,
        "high": 13.4,
        "low": 13.25,
        "close": 13.4,
        "volume": 7621,
        "ma5": 13.06,
        "ma10": 12.53
      },
      {
        "open": 13.63,
        "high": 13.72,
        "low": 13.5,
        "close": 13.6,
        "volume": 8223,
        "ma5": 13.19,
        "ma10": 12.82
      },
      {
        "open": 13.72,
        "high": 13.8,
        "low": 13.63,
        "close": 13.66,
        "volume": 8460,
        "ma5": 13.37,
        "ma10": 13.0
      },
      {
        "open": 13.84,
        "high": 13.85,
        "low": 13.42,
        "close": 13.45,
        "volume": 6153,
        "ma5": 13.45,
        "ma10": 13.13
      }
    ],
    "symbol": "00993A.TW"
  },
  {
    "code": "00887",
    "name": "永豐中國科技50大",
    "categories": [
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 17.13,
    "prevClose": 17.25,
    "open": 17.39,
    "high": 17.47,
    "low": 17.12,
    "volume": 4122,
    "ma5": 17.2,
    "ma10": 17.17,
    "ma20": 16.95,
    "ma60": 17.93,
    "vMa5": 5180,
    "vMa10": 6464,
    "maxVol10d": 12971,
    "hasVolumeBurst": false,
    "high5d": 17.63,
    "high10d": 17.63,
    "high20d": 18.18,
    "sparkline": [
      17.04,
      16.89,
      17.33,
      17.09,
      17.29,
      17.21,
      17.5,
      16.93,
      17.25,
      17.13
    ],
    "kd": {
      "k": 64.0,
      "d": 70.1,
      "prevK": 72.8,
      "prevD": 73.1,
      "h8": 17.63,
      "l8": 16.7
    },
    "k5d": [
      {
        "open": 17.2,
        "high": 17.37,
        "low": 17.09,
        "close": 17.21,
        "volume": 4055,
        "ma5": 17.16,
        "ma10": 16.77
      },
      {
        "open": 17.37,
        "high": 17.63,
        "low": 17.36,
        "close": 17.5,
        "volume": 5499,
        "ma5": 17.28,
        "ma10": 16.92
      },
      {
        "open": 17.33,
        "high": 17.33,
        "low": 16.88,
        "close": 16.93,
        "volume": 8038,
        "ma5": 17.2,
        "ma10": 16.96
      },
      {
        "open": 16.98,
        "high": 17.37,
        "low": 16.98,
        "close": 17.25,
        "volume": 4188,
        "ma5": 17.24,
        "ma10": 17.09
      },
      {
        "open": 17.39,
        "high": 17.47,
        "low": 17.12,
        "close": 17.13,
        "volume": 4122,
        "ma5": 17.2,
        "ma10": 17.17
      }
    ],
    "symbol": "00887.TWO"
  },
  {
    "code": "1785",
    "name": "光洋科",
    "categories": [
      "MajorBuy1D",
      "MajorBuy",
      "Top100"
    ],
    "price": 100.0,
    "prevClose": 105.0,
    "open": 106.0,
    "high": 106.0,
    "low": 99.9,
    "volume": 6651,
    "ma5": 105.0,
    "ma10": 109.15,
    "ma20": 106.49,
    "ma60": 128.2,
    "vMa5": 9664,
    "vMa10": 7995,
    "maxVol10d": 17911,
    "hasVolumeBurst": true,
    "high5d": 112.0,
    "high10d": 119.5,
    "high20d": 119.5,
    "sparkline": [
      111.5,
      115.0,
      114.5,
      118.5,
      107.0,
      106.5,
      109.0,
      104.5,
      105.0,
      100.0
    ],
    "kd": {
      "k": 21.9,
      "d": 40.7,
      "prevK": 32.6,
      "prevD": 50.1,
      "h8": 119.5,
      "l8": 103.0
    },
    "k5d": [
      {
        "open": 107.0,
        "high": 110.0,
        "low": 103.0,
        "close": 106.5,
        "volume": 17911,
        "ma5": 112.3,
        "ma10": 108.03
      },
      {
        "open": 107.5,
        "high": 112.0,
        "low": 107.0,
        "close": 109.0,
        "volume": 10930,
        "ma5": 111.1,
        "ma10": 109.89
      },
      {
        "open": 109.5,
        "high": 109.5,
        "low": 103.0,
        "close": 104.5,
        "volume": 9070,
        "ma5": 109.1,
        "ma10": 110.4
      },
      {
        "open": 104.0,
        "high": 105.0,
        "low": 103.0,
        "close": 105.0,
        "volume": 3758,
        "ma5": 106.4,
        "ma10": 110.25
      },
      {
        "open": 106.0,
        "high": 106.0,
        "low": 99.9,
        "close": 100.0,
        "volume": 6651,
        "ma5": 105.0,
        "ma10": 109.15
      }
    ],
    "symbol": "1785.TWO"
  },
  {
    "code": "3339",
    "name": "泰谷",
    "categories": [
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy"
    ],
    "price": 38.15,
    "prevClose": 39.8,
    "open": 40.25,
    "high": 40.75,
    "low": 38.05,
    "volume": 1381,
    "ma5": 38.42,
    "ma10": 38.76,
    "ma20": 36.52,
    "ma60": 41.07,
    "vMa5": 1403,
    "vMa10": 2423,
    "maxVol10d": 6196,
    "hasVolumeBurst": true,
    "high5d": 40.75,
    "high10d": 43.0,
    "high20d": 43.0,
    "sparkline": [
      39.8,
      40.6,
      37.8,
      39.5,
      37.85,
      38.9,
      38.05,
      37.2,
      39.8,
      38.15
    ],
    "kd": {
      "k": 39.1,
      "d": 49.9,
      "prevK": 49.1,
      "prevD": 55.3,
      "h8": 43.0,
      "l8": 37.0
    },
    "k5d": [
      {
        "open": 37.55,
        "high": 39.55,
        "low": 37.55,
        "close": 38.9,
        "volume": 1732,
        "ma5": 38.93,
        "ma10": 36.98
      },
      {
        "open": 38.5,
        "high": 38.75,
        "low": 37.8,
        "close": 38.05,
        "volume": 1176,
        "ma5": 38.42,
        "ma10": 37.72
      },
      {
        "open": 38.25,
        "high": 38.6,
        "low": 37.0,
        "close": 37.2,
        "volume": 735,
        "ma5": 38.3,
        "ma10": 38.11
      },
      {
        "open": 37.2,
        "high": 40.4,
        "low": 37.2,
        "close": 39.8,
        "volume": 1991,
        "ma5": 38.36,
        "ma10": 38.69
      },
      {
        "open": 40.25,
        "high": 40.75,
        "low": 38.05,
        "close": 38.15,
        "volume": 1381,
        "ma5": 38.42,
        "ma10": 38.76
      }
    ],
    "symbol": "3339.TWO"
  },
  {
    "code": "3221",
    "name": "台嘉碩",
    "categories": [
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 46.5,
    "prevClose": 48.85,
    "open": 48.6,
    "high": 48.85,
    "low": 46.25,
    "volume": 1574,
    "ma5": 48.23,
    "ma10": 47.87,
    "ma20": 46.8,
    "ma60": 54.07,
    "vMa5": 2491,
    "vMa10": 2539,
    "maxVol10d": 4636,
    "hasVolumeBurst": true,
    "high5d": 52.0,
    "high10d": 52.0,
    "high20d": 52.3,
    "sparkline": [
      47.65,
      47.3,
      46.15,
      48.2,
      48.25,
      49.0,
      49.35,
      47.45,
      48.85,
      46.5
    ],
    "kd": {
      "k": 38.3,
      "d": 53.2,
      "prevK": 54.0,
      "prevD": 60.6,
      "h8": 52.0,
      "l8": 46.1
    },
    "k5d": [
      {
        "open": 48.1,
        "high": 49.6,
        "low": 47.95,
        "close": 49.0,
        "volume": 2131,
        "ma5": 47.78,
        "ma10": 46.34
      },
      {
        "open": 49.3,
        "high": 52.0,
        "low": 49.3,
        "close": 49.35,
        "volume": 4636,
        "ma5": 48.19,
        "ma10": 47.26
      },
      {
        "open": 50.0,
        "high": 50.1,
        "low": 47.2,
        "close": 47.45,
        "volume": 2148,
        "ma5": 48.45,
        "ma10": 47.58
      },
      {
        "open": 48.4,
        "high": 49.5,
        "low": 47.45,
        "close": 48.85,
        "volume": 1966,
        "ma5": 48.58,
        "ma10": 47.92
      },
      {
        "open": 48.6,
        "high": 48.85,
        "low": 46.25,
        "close": 46.5,
        "volume": 1574,
        "ma5": 48.23,
        "ma10": 47.87
      }
    ],
    "symbol": "3221.TWO"
  },
  {
    "code": "3675",
    "name": "德微",
    "categories": [
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy",
      "TurnoverRate"
    ],
    "price": 274.0,
    "prevClose": 294.0,
    "open": 294.0,
    "high": 300.0,
    "low": 272.5,
    "volume": 2322,
    "ma5": 277.8,
    "ma10": 274.2,
    "ma20": 254.05,
    "ma60": 325.38,
    "vMa5": 1068,
    "vMa10": 972,
    "maxVol10d": 2322,
    "hasVolumeBurst": true,
    "high5d": 300.0,
    "high10d": 300.0,
    "high20d": 300.0,
    "sparkline": [
      267.5,
      267.0,
      265.5,
      280.5,
      272.5,
      275.5,
      278.0,
      267.5,
      294.0,
      274.0
    ],
    "kd": {
      "k": 67.1,
      "d": 71.8,
      "prevK": 78.9,
      "prevD": 74.1,
      "h8": 294.0,
      "l8": 254.0
    },
    "k5d": [
      {
        "open": 275.0,
        "high": 281.0,
        "low": 273.5,
        "close": 275.5,
        "volume": 390,
        "ma5": 272.2,
        "ma10": 253.25
      },
      {
        "open": 275.5,
        "high": 294.0,
        "low": 275.5,
        "close": 278.0,
        "volume": 928,
        "ma5": 274.4,
        "ma10": 261.35
      },
      {
        "open": 277.5,
        "high": 278.0,
        "low": 264.5,
        "close": 267.5,
        "volume": 765,
        "ma5": 274.8,
        "ma10": 266.45
      },
      {
        "open": 267.5,
        "high": 294.0,
        "low": 265.0,
        "close": 294.0,
        "volume": 932,
        "ma5": 277.5,
        "ma10": 272.05
      },
      {
        "open": 294.0,
        "high": 300.0,
        "low": 272.5,
        "close": 274.0,
        "volume": 2322,
        "ma5": 277.8,
        "ma10": 274.2
      }
    ],
    "symbol": "3675.TWO"
  },
  {
    "code": "5321",
    "name": "美而快",
    "categories": [
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy"
    ],
    "price": 72.9,
    "prevClose": 68.0,
    "open": 69.4,
    "high": 73.0,
    "low": 69.0,
    "volume": 1519,
    "ma5": 64.68,
    "ma10": 59.64,
    "ma20": 57.16,
    "ma60": 53.81,
    "vMa5": 1020,
    "vMa10": 611,
    "maxVol10d": 1650,
    "hasVolumeBurst": true,
    "high5d": 73.0,
    "high10d": 73.0,
    "high20d": 73.0,
    "sparkline": [
      53.0,
      54.3,
      54.0,
      56.1,
      55.6,
      56.9,
      62.0,
      63.6,
      68.0,
      72.9
    ],
    "kd": {
      "k": 88.6,
      "d": 77.1,
      "prevK": 83.1,
      "prevD": 71.3,
      "h8": 69.9,
      "l8": 52.6
    },
    "k5d": [
      {
        "open": 55.6,
        "high": 57.5,
        "low": 55.6,
        "close": 56.9,
        "volume": 158,
        "ma5": 55.38,
        "ma10": 54.47
      },
      {
        "open": 57.0,
        "high": 62.5,
        "low": 56.9,
        "close": 62.0,
        "volume": 1067,
        "ma5": 56.92,
        "ma10": 55.47
      },
      {
        "open": 60.0,
        "high": 65.0,
        "low": 59.8,
        "close": 63.6,
        "volume": 704,
        "ma5": 58.84,
        "ma10": 56.5
      },
      {
        "open": 63.6,
        "high": 69.9,
        "low": 62.2,
        "close": 68.0,
        "volume": 1650,
        "ma5": 61.22,
        "ma10": 57.71
      },
      {
        "open": 69.4,
        "high": 73.0,
        "low": 69.0,
        "close": 72.9,
        "volume": 1519,
        "ma5": 64.68,
        "ma10": 59.64
      }
    ],
    "symbol": "5321.TWO"
  },
  {
    "code": "5340",
    "name": "建榮",
    "categories": [
      "MajorBuy1D",
      "MajorBuy",
      "Top100"
    ],
    "price": 77.4,
    "prevClose": 79.5,
    "open": 80.0,
    "high": 82.5,
    "low": 77.2,
    "volume": 4903,
    "ma5": 78.4,
    "ma10": 75.64,
    "ma20": 70.64,
    "ma60": 83.49,
    "vMa5": 4733,
    "vMa10": 4468,
    "maxVol10d": 8040,
    "hasVolumeBurst": true,
    "high5d": 82.5,
    "high10d": 82.5,
    "high20d": 82.5,
    "sparkline": [
      75.7,
      71.4,
      70.3,
      73.0,
      74.0,
      79.6,
      78.6,
      76.9,
      79.5,
      77.4
    ],
    "kd": {
      "k": 71.7,
      "d": 75.7,
      "prevK": 78.0,
      "prevD": 77.6,
      "h8": 82.5,
      "l8": 70.0
    },
    "k5d": [
      {
        "open": 76.1,
        "high": 81.4,
        "low": 75.4,
        "close": 79.6,
        "volume": 7347,
        "ma5": 73.66,
        "ma10": 69.6
      },
      {
        "open": 78.5,
        "high": 82.5,
        "low": 77.3,
        "close": 78.6,
        "volume": 5084,
        "ma5": 75.1,
        "ma10": 71.86
      },
      {
        "open": 78.4,
        "high": 81.7,
        "low": 74.6,
        "close": 76.9,
        "volume": 3914,
        "ma5": 76.42,
        "ma10": 73.43
      },
      {
        "open": 77.0,
        "high": 80.1,
        "low": 77.0,
        "close": 79.5,
        "volume": 2419,
        "ma5": 77.72,
        "ma10": 74.96
      },
      {
        "open": 80.0,
        "high": 82.5,
        "low": 77.2,
        "close": 77.4,
        "volume": 4903,
        "ma5": 78.4,
        "ma10": 75.64
      }
    ],
    "symbol": "5340.TWO"
  },
  {
    "code": "4114",
    "name": "健喬",
    "categories": [
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy"
    ],
    "price": 30.0,
    "prevClose": 30.0,
    "open": 30.05,
    "high": 30.1,
    "low": 29.85,
    "volume": 813,
    "ma5": 29.92,
    "ma10": 29.63,
    "ma20": 29.44,
    "ma60": 29.16,
    "vMa5": 872,
    "vMa10": 957,
    "maxVol10d": 1970,
    "hasVolumeBurst": true,
    "high5d": 30.1,
    "high10d": 30.15,
    "high20d": 30.15,
    "sparkline": [
      28.95,
      28.95,
      29.25,
      29.5,
      30.05,
      29.8,
      30.0,
      29.8,
      30.0,
      30.0
    ],
    "kd": {
      "k": 83.0,
      "d": 75.5,
      "prevK": 80.2,
      "prevD": 71.8,
      "h8": 30.15,
      "l8": 28.85
    },
    "k5d": [
      {
        "open": 30.05,
        "high": 30.05,
        "low": 29.65,
        "close": 29.8,
        "volume": 900,
        "ma5": 29.51,
        "ma10": 29.25
      },
      {
        "open": 29.7,
        "high": 30.0,
        "low": 29.7,
        "close": 30.0,
        "volume": 892,
        "ma5": 29.72,
        "ma10": 29.34
      },
      {
        "open": 30.0,
        "high": 30.0,
        "low": 29.7,
        "close": 29.8,
        "volume": 834,
        "ma5": 29.83,
        "ma10": 29.42
      },
      {
        "open": 29.8,
        "high": 30.05,
        "low": 29.65,
        "close": 30.0,
        "volume": 921,
        "ma5": 29.93,
        "ma10": 29.53
      },
      {
        "open": 30.05,
        "high": 30.1,
        "low": 29.85,
        "close": 30.0,
        "volume": 813,
        "ma5": 29.92,
        "ma10": 29.63
      }
    ],
    "symbol": "4114.TWO"
  },
  {
    "code": "8042",
    "name": "金山電",
    "categories": [
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy"
    ],
    "price": 101.5,
    "prevClose": 108.5,
    "open": 108.5,
    "high": 109.5,
    "low": 101.0,
    "volume": 2282,
    "ma5": 110.4,
    "ma10": 112.15,
    "ma20": 110.75,
    "ma60": 148.11,
    "vMa5": 4521,
    "vMa10": 5755,
    "maxVol10d": 15319,
    "hasVolumeBurst": true,
    "high5d": 123.0,
    "high10d": 125.0,
    "high20d": 132.5,
    "sparkline": [
      110.0,
      112.5,
      116.5,
      114.0,
      116.5,
      113.0,
      116.5,
      112.5,
      108.5,
      101.5
    ],
    "kd": {
      "k": 31.9,
      "d": 49.2,
      "prevK": 46.9,
      "prevD": 57.9,
      "h8": 125.0,
      "l8": 103.5
    },
    "k5d": [
      {
        "open": 113.5,
        "high": 117.0,
        "low": 112.0,
        "close": 113.0,
        "volume": 6313,
        "ma5": 114.5,
        "ma10": 109.0
      },
      {
        "open": 115.0,
        "high": 123.0,
        "low": 115.0,
        "close": 116.5,
        "volume": 8130,
        "ma5": 115.3,
        "ma10": 111.67
      },
      {
        "open": 119.0,
        "high": 119.5,
        "low": 112.0,
        "close": 112.5,
        "volume": 3691,
        "ma5": 114.5,
        "ma10": 113.05
      },
      {
        "open": 110.5,
        "high": 111.0,
        "low": 106.0,
        "close": 108.5,
        "volume": 2191,
        "ma5": 113.4,
        "ma10": 113.05
      },
      {
        "open": 108.5,
        "high": 109.5,
        "low": 101.0,
        "close": 101.5,
        "volume": 2282,
        "ma5": 110.4,
        "ma10": 112.15
      }
    ],
    "symbol": "8042.TWO"
  },
  {
    "code": "5009",
    "name": "榮剛",
    "categories": [
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 32.85,
    "prevClose": 32.95,
    "open": 33.0,
    "high": 33.2,
    "low": 32.85,
    "volume": 1199,
    "ma5": 32.9,
    "ma10": 32.99,
    "ma20": 32.9,
    "ma60": 34.16,
    "vMa5": 1474,
    "vMa10": 1631,
    "maxVol10d": 2198,
    "hasVolumeBurst": false,
    "high5d": 33.65,
    "high10d": 33.9,
    "high20d": 34.5,
    "sparkline": [
      33.3,
      32.5,
      32.85,
      33.45,
      33.25,
      33.15,
      32.9,
      32.65,
      32.95,
      32.85
    ],
    "kd": {
      "k": 41.7,
      "d": 50.8,
      "prevK": 46.3,
      "prevD": 55.4,
      "h8": 33.9,
      "l8": 32.35
    },
    "k5d": [
      {
        "open": 33.2,
        "high": 33.55,
        "low": 33.15,
        "close": 33.15,
        "volume": 1631,
        "ma5": 33.04,
        "ma10": 32.75
      },
      {
        "open": 33.3,
        "high": 33.65,
        "low": 32.7,
        "close": 32.9,
        "volume": 1852,
        "ma5": 33.12,
        "ma10": 32.9
      },
      {
        "open": 32.9,
        "high": 32.9,
        "low": 32.35,
        "close": 32.65,
        "volume": 1892,
        "ma5": 33.08,
        "ma10": 32.98
      },
      {
        "open": 32.85,
        "high": 33.1,
        "low": 32.65,
        "close": 32.95,
        "volume": 797,
        "ma5": 32.98,
        "ma10": 33.01
      },
      {
        "open": 33.0,
        "high": 33.2,
        "low": 32.85,
        "close": 32.85,
        "volume": 1199,
        "ma5": 32.9,
        "ma10": 32.99
      }
    ],
    "symbol": "5009.TWO"
  },
  {
    "code": "4707",
    "name": "磐亞",
    "categories": [
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 32.9,
    "prevClose": 32.2,
    "open": 32.2,
    "high": 33.05,
    "low": 31.75,
    "volume": 3345,
    "ma5": 32.41,
    "ma10": 32.06,
    "ma20": 30.48,
    "ma60": 28.06,
    "vMa5": 5069,
    "vMa10": 6016,
    "maxVol10d": 12952,
    "hasVolumeBurst": true,
    "high5d": 34.95,
    "high10d": 34.95,
    "high20d": 36.0,
    "sparkline": [
      30.85,
      33.85,
      31.9,
      31.95,
      30.0,
      33.0,
      32.45,
      31.5,
      32.2,
      32.9
    ],
    "kd": {
      "k": 65.9,
      "d": 66.5,
      "prevK": 65.6,
      "prevD": 66.8,
      "h8": 34.95,
      "l8": 28.8
    },
    "k5d": [
      {
        "open": 30.3,
        "high": 33.0,
        "low": 30.3,
        "close": 33.0,
        "volume": 6696,
        "ma5": 32.14,
        "ma10": 29.15
      },
      {
        "open": 34.0,
        "high": 34.95,
        "low": 32.0,
        "close": 32.45,
        "volume": 9332,
        "ma5": 31.86,
        "ma10": 30.07
      },
      {
        "open": 32.3,
        "high": 32.9,
        "low": 31.25,
        "close": 31.5,
        "volume": 3168,
        "ma5": 31.78,
        "ma10": 30.9
      },
      {
        "open": 31.25,
        "high": 33.2,
        "low": 31.25,
        "close": 32.2,
        "volume": 2802,
        "ma5": 31.83,
        "ma10": 31.57
      },
      {
        "open": 32.2,
        "high": 33.05,
        "low": 31.75,
        "close": 32.9,
        "volume": 3345,
        "ma5": 32.41,
        "ma10": 32.06
      }
    ],
    "symbol": "4707.TWO"
  },
  {
    "code": "4303",
    "name": "信立",
    "categories": [
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 48.0,
    "prevClose": 48.45,
    "open": 48.45,
    "high": 48.6,
    "low": 47.8,
    "volume": 459,
    "ma5": 47.64,
    "ma10": 46.2,
    "ma20": 44.27,
    "ma60": 45.67,
    "vMa5": 830,
    "vMa10": 605,
    "maxVol10d": 1346,
    "hasVolumeBurst": true,
    "high5d": 48.8,
    "high10d": 48.8,
    "high20d": 48.8,
    "sparkline": [
      43.95,
      45.2,
      45.05,
      45.0,
      44.6,
      47.0,
      47.6,
      47.15,
      48.45,
      48.0
    ],
    "kd": {
      "k": 85.1,
      "d": 83.3,
      "prevK": 85.8,
      "prevD": 82.3,
      "h8": 48.8,
      "l8": 43.85
    },
    "k5d": [
      {
        "open": 45.4,
        "high": 47.7,
        "low": 45.25,
        "close": 47.0,
        "volume": 1346,
        "ma5": 45.37,
        "ma10": 43.77
      },
      {
        "open": 47.0,
        "high": 48.5,
        "low": 46.9,
        "close": 47.6,
        "volume": 932,
        "ma5": 45.85,
        "ma10": 44.57
      },
      {
        "open": 48.6,
        "high": 48.8,
        "low": 47.1,
        "close": 47.15,
        "volume": 614,
        "ma5": 46.27,
        "ma10": 45.15
      },
      {
        "open": 47.85,
        "high": 48.6,
        "low": 46.8,
        "close": 48.45,
        "volume": 799,
        "ma5": 46.96,
        "ma10": 45.79
      },
      {
        "open": 48.45,
        "high": 48.6,
        "low": 47.8,
        "close": 48.0,
        "volume": 459,
        "ma5": 47.64,
        "ma10": 46.2
      }
    ],
    "symbol": "4303.TWO"
  },
  {
    "code": "3489",
    "name": "森寶",
    "categories": [
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 23.65,
    "prevClose": 26.25,
    "open": 25.8,
    "high": 25.8,
    "low": 23.65,
    "volume": 554,
    "ma5": 25.59,
    "ma10": 25.76,
    "ma20": 23.29,
    "ma60": 22.57,
    "vMa5": 551,
    "vMa10": 604,
    "maxVol10d": 1244,
    "hasVolumeBurst": false,
    "high5d": 26.3,
    "high10d": 26.3,
    "high20d": 26.4,
    "sparkline": [
      25.9,
      25.9,
      26.0,
      25.95,
      25.95,
      26.1,
      25.9,
      26.05,
      26.25,
      23.65
    ],
    "kd": {
      "k": 54.8,
      "d": 74.4,
      "prevK": 82.1,
      "prevD": 84.2,
      "h8": 26.3,
      "l8": 25.75
    },
    "k5d": [
      {
        "open": 25.95,
        "high": 26.1,
        "low": 25.9,
        "close": 26.1,
        "volume": 572,
        "ma5": 25.98,
        "ma10": 24.8
      },
      {
        "open": 26.1,
        "high": 26.1,
        "low": 25.75,
        "close": 25.9,
        "volume": 719,
        "ma5": 25.98,
        "ma10": 25.38
      },
      {
        "open": 25.9,
        "high": 26.1,
        "low": 25.9,
        "close": 26.05,
        "volume": 371,
        "ma5": 25.99,
        "ma10": 25.77
      },
      {
        "open": 26.05,
        "high": 26.3,
        "low": 26.0,
        "close": 26.25,
        "volume": 536,
        "ma5": 26.05,
        "ma10": 25.96
      },
      {
        "open": 25.8,
        "high": 25.8,
        "low": 23.65,
        "close": 23.65,
        "volume": 554,
        "ma5": 25.59,
        "ma10": 25.76
      }
    ],
    "symbol": "3489.TWO"
  },
  {
    "code": "3236",
    "name": "千如",
    "categories": [
      "MajorBuy1D",
      "MajorBuy"
    ],
    "price": 43.4,
    "prevClose": 45.1,
    "open": 45.1,
    "high": 45.85,
    "low": 43.4,
    "volume": 1507,
    "ma5": 45.34,
    "ma10": 44.27,
    "ma20": 42.81,
    "ma60": 54.23,
    "vMa5": 3652,
    "vMa10": 3450,
    "maxVol10d": 7387,
    "hasVolumeBurst": true,
    "high5d": 49.0,
    "high10d": 49.0,
    "high20d": 50.3,
    "sparkline": [
      42.7,
      43.25,
      40.9,
      42.95,
      46.15,
      45.2,
      47.3,
      45.7,
      45.1,
      43.4
    ],
    "kd": {
      "k": 54.7,
      "d": 64.4,
      "prevK": 66.0,
      "prevD": 69.2,
      "h8": 49.0,
      "l8": 40.75
    },
    "k5d": [
      {
        "open": 45.65,
        "high": 46.6,
        "low": 44.7,
        "close": 45.2,
        "volume": 4848,
        "ma5": 43.69,
        "ma10": 42.08
      },
      {
        "open": 46.0,
        "high": 49.0,
        "low": 46.0,
        "close": 47.3,
        "volume": 7387,
        "ma5": 44.5,
        "ma10": 43.28
      },
      {
        "open": 47.7,
        "high": 47.7,
        "low": 44.85,
        "close": 45.7,
        "volume": 2957,
        "ma5": 45.46,
        "ma10": 43.98
      },
      {
        "open": 45.25,
        "high": 45.8,
        "low": 44.2,
        "close": 45.1,
        "volume": 1563,
        "ma5": 45.89,
        "ma10": 44.23
      },
      {
        "open": 45.1,
        "high": 45.85,
        "low": 43.4,
        "close": 43.4,
        "volume": 1507,
        "ma5": 45.34,
        "ma10": 44.27
      }
    ],
    "symbol": "3236.TWO"
  },
  {
    "code": "4128",
    "name": "中天",
    "categories": [
      "MajorBuy1D",
      "MajorBuy3D",
      "MajorBuy"
    ],
    "price": 15.1,
    "prevClose": 15.1,
    "open": 15.1,
    "high": 15.15,
    "low": 14.9,
    "volume": 672,
    "ma5": 14.93,
    "ma10": 14.75,
    "ma20": 14.65,
    "ma60": 15.22,
    "vMa5": 1219,
    "vMa10": 1117,
    "maxVol10d": 1596,
    "hasVolumeBurst": true,
    "high5d": 15.5,
    "high10d": 15.5,
    "high20d": 15.65,
    "sparkline": [
      14.55,
      14.4,
      14.7,
      14.5,
      14.7,
      14.65,
      15.0,
      14.8,
      15.1,
      15.1
    ],
    "kd": {
      "k": 67.4,
      "d": 65.4,
      "prevK": 67.8,
      "prevD": 64.3,
      "h8": 15.5,
      "l8": 14.3
    },
    "k5d": [
      {
        "open": 14.8,
        "high": 15.05,
        "low": 14.6,
        "close": 14.65,
        "volume": 1037,
        "ma5": 14.59,
        "ma10": 14.41
      },
      {
        "open": 14.75,
        "high": 15.15,
        "low": 14.7,
        "close": 15.0,
        "volume": 1578,
        "ma5": 14.71,
        "ma10": 14.55
      },
      {
        "open": 15.1,
        "high": 15.1,
        "low": 14.6,
        "close": 14.8,
        "volume": 1309,
        "ma5": 14.73,
        "ma10": 14.64
      },
      {
        "open": 15.2,
        "high": 15.5,
        "low": 15.0,
        "close": 15.1,
        "volume": 1500,
        "ma5": 14.85,
        "ma10": 14.7
      },
      {
        "open": 15.1,
        "high": 15.15,
        "low": 14.9,
        "close": 15.1,
        "volume": 672,
        "ma5": 14.93,
        "ma10": 14.75
      }
    ],
    "symbol": "4128.TWO"
  },
  {
    "code": "8105",
    "name": "凌巨",
    "categories": [
      "Top100",
      "TurnoverRate"
    ],
    "price": 13.8,
    "prevClose": 15.1,
    "open": 13.6,
    "high": 14.55,
    "low": 13.6,
    "volume": 48067,
    "ma5": 15.91,
    "ma10": 16.29,
    "ma20": 16.24,
    "ma60": 18.98,
    "vMa5": 11060,
    "vMa10": 6660,
    "maxVol10d": 48067,
    "hasVolumeBurst": true,
    "high5d": 17.45,
    "high10d": 17.45,
    "high20d": 18.3,
    "sparkline": [
      16.7,
      16.5,
      16.4,
      16.65,
      17.15,
      17.15,
      16.75,
      16.75,
      15.1,
      13.8
    ],
    "kd": {
      "k": 33.6,
      "d": 53.8,
      "prevK": 47.9,
      "prevD": 63.9,
      "h8": 17.45,
      "l8": 15.1
    },
    "k5d": [
      {
        "open": 17.15,
        "high": 17.4,
        "low": 17.1,
        "close": 17.15,
        "volume": 1689,
        "ma5": 16.77,
        "ma10": 16.29
      },
      {
        "open": 17.35,
        "high": 17.45,
        "low": 16.7,
        "close": 16.75,
        "volume": 1923,
        "ma5": 16.82,
        "ma10": 16.5
      },
      {
        "open": 16.9,
        "high": 16.95,
        "low": 16.65,
        "close": 16.75,
        "volume": 1157,
        "ma5": 16.89,
        "ma10": 16.6
      },
      {
        "open": 15.1,
        "high": 15.1,
        "low": 15.1,
        "close": 15.1,
        "volume": 2466,
        "ma5": 16.58,
        "ma10": 16.54
      },
      {
        "open": 13.6,
        "high": 14.55,
        "low": 13.6,
        "close": 13.8,
        "volume": 48067,
        "ma5": 15.91,
        "ma10": 16.29
      }
    ],
    "symbol": "8105.TW"
  },
  {
    "code": "00664R",
    "name": "國泰臺灣加權反1",
    "categories": [
      "Top100",
      "TurnoverRate"
    ],
    "price": 1.64,
    "prevClose": 1.62,
    "open": 1.63,
    "high": 1.64,
    "low": 1.61,
    "volume": 40333,
    "ma5": 1.63,
    "ma10": 1.65,
    "ma20": 1.69,
    "ma60": 1.67,
    "vMa5": 26140,
    "vMa10": 25273,
    "maxVol10d": 40333,
    "hasVolumeBurst": true,
    "high5d": 1.66,
    "high10d": 1.74,
    "high20d": 1.89,
    "sparkline": [
      1.71,
      1.68,
      1.67,
      1.68,
      1.64,
      1.64,
      1.63,
      1.61,
      1.62,
      1.64
    ],
    "kd": {
      "k": 21.6,
      "d": 15.4,
      "prevK": 10.2,
      "prevD": 12.3,
      "h8": 1.69,
      "l8": 1.6
    },
    "k5d": [
      {
        "open": 1.66,
        "high": 1.66,
        "low": 1.64,
        "close": 1.64,
        "volume": 20517,
        "ma5": 1.66,
        "ma10": 1.71
      },
      {
        "open": 1.64,
        "high": 1.65,
        "low": 1.62,
        "close": 1.63,
        "volume": 17523,
        "ma5": 1.65,
        "ma10": 1.69
      },
      {
        "open": 1.6,
        "high": 1.62,
        "low": 1.6,
        "close": 1.61,
        "volume": 21583,
        "ma5": 1.64,
        "ma10": 1.66
      },
      {
        "open": 1.61,
        "high": 1.63,
        "low": 1.6,
        "close": 1.62,
        "volume": 30745,
        "ma5": 1.63,
        "ma10": 1.66
      },
      {
        "open": 1.63,
        "high": 1.64,
        "low": 1.61,
        "close": 1.64,
        "volume": 40333,
        "ma5": 1.63,
        "ma10": 1.65
      }
    ],
    "symbol": "00664R.TW"
  },
  {
    "code": "00948B",
    "name": "中信優息投資級債",
    "categories": [
      "Top100"
    ],
    "price": 9.05,
    "prevClose": 9.19,
    "open": 9.09,
    "high": 9.09,
    "low": 9.04,
    "volume": 7959,
    "ma5": 9.21,
    "ma10": 9.28,
    "ma20": 9.31,
    "ma60": 9.45,
    "vMa5": 4035,
    "vMa10": 5140,
    "maxVol10d": 13143,
    "hasVolumeBurst": true,
    "high5d": 9.29,
    "high10d": 9.41,
    "high20d": 9.42,
    "sparkline": [
      9.39,
      9.4,
      9.33,
      9.35,
      9.29,
      9.27,
      9.28,
      9.26,
      9.19,
      9.05
    ],
    "kd": {
      "k": 11.8,
      "d": 23.9,
      "prevK": 16.3,
      "prevD": 30.0,
      "h8": 9.41,
      "l8": 9.18
    },
    "k5d": [
      {
        "open": 9.29,
        "high": 9.29,
        "low": 9.27,
        "close": 9.27,
        "volume": 3007,
        "ma5": 9.33,
        "ma10": 9.32
      },
      {
        "open": 9.27,
        "high": 9.29,
        "low": 9.26,
        "close": 9.28,
        "volume": 2722,
        "ma5": 9.3,
        "ma10": 9.33
      },
      {
        "open": 9.28,
        "high": 9.29,
        "low": 9.25,
        "close": 9.26,
        "volume": 2363,
        "ma5": 9.29,
        "ma10": 9.32
      },
      {
        "open": 9.22,
        "high": 9.23,
        "low": 9.18,
        "close": 9.19,
        "volume": 4125,
        "ma5": 9.26,
        "ma10": 9.31
      },
      {
        "open": 9.09,
        "high": 9.09,
        "low": 9.04,
        "close": 9.05,
        "volume": 7959,
        "ma5": 9.21,
        "ma10": 9.28
      }
    ],
    "symbol": "00948B.TWO"
  },
  {
    "code": "4971",
    "name": "IET-KY",
    "categories": [
      "Top100",
      "ValueTop",
      "TurnoverRate"
    ],
    "price": 556.0,
    "prevClose": 528.0,
    "open": 564.0,
    "high": 580.0,
    "low": 545.0,
    "volume": 6493,
    "ma5": 511.6,
    "ma10": 492.75,
    "ma20": 440.2,
    "ma60": 506.77,
    "vMa5": 1839,
    "vMa10": 2007,
    "maxVol10d": 6493,
    "hasVolumeBurst": true,
    "high5d": 580.0,
    "high10d": 580.0,
    "high20d": 580.0,
    "sparkline": [
      462.0,
      480.0,
      460.5,
      502.0,
      465.0,
      500.0,
      494.0,
      480.0,
      528.0,
      556.0
    ],
    "kd": {
      "k": 79.7,
      "d": 78.1,
      "prevK": 78.8,
      "prevD": 77.3,
      "h8": 535.0,
      "l8": 450.0
    },
    "k5d": [
      {
        "open": 478.0,
        "high": 500.0,
        "low": 475.0,
        "close": 500.0,
        "volume": 586,
        "ma5": 481.5,
        "ma10": 433.5
      },
      {
        "open": 535.0,
        "high": 535.0,
        "low": 489.5,
        "close": 494.0,
        "volume": 694,
        "ma5": 484.3,
        "ma10": 451.3
      },
      {
        "open": 484.5,
        "high": 487.0,
        "low": 473.0,
        "close": 480.0,
        "volume": 416,
        "ma5": 488.2,
        "ma10": 464.55
      },
      {
        "open": 487.0,
        "high": 528.0,
        "low": 487.0,
        "close": 528.0,
        "volume": 1003,
        "ma5": 493.4,
        "ma10": 479.15
      },
      {
        "open": 564.0,
        "high": 580.0,
        "low": 545.0,
        "close": 556.0,
        "volume": 6493,
        "ma5": 511.6,
        "ma10": 492.75
      }
    ],
    "symbol": "4971.TWO"
  },
  {
    "code": "00968B",
    "name": "元大優息投等債",
    "categories": [
      "Top100"
    ],
    "price": 8.95,
    "prevClose": 9.04,
    "open": 9.02,
    "high": 9.02,
    "low": 8.94,
    "volume": 6303,
    "ma5": 9.07,
    "ma10": 9.13,
    "ma20": 9.15,
    "ma60": 9.26,
    "vMa5": 2528,
    "vMa10": 3362,
    "maxVol10d": 7680,
    "hasVolumeBurst": true,
    "high5d": 9.16,
    "high10d": 9.25,
    "high20d": 9.25,
    "sparkline": [
      9.24,
      9.23,
      9.17,
      9.18,
      9.11,
      9.12,
      9.12,
      9.1,
      9.04,
      8.95
    ],
    "kd": {
      "k": 14.0,
      "d": 26.2,
      "prevK": 19.3,
      "prevD": 32.3,
      "h8": 9.24,
      "l8": 9.02
    },
    "k5d": [
      {
        "open": 9.14,
        "high": 9.14,
        "low": 9.1,
        "close": 9.12,
        "volume": 2646,
        "ma5": 9.16,
        "ma10": 9.16
      },
      {
        "open": 9.13,
        "high": 9.13,
        "low": 9.11,
        "close": 9.12,
        "volume": 535,
        "ma5": 9.14,
        "ma10": 9.16
      },
      {
        "open": 9.16,
        "high": 9.16,
        "low": 9.09,
        "close": 9.1,
        "volume": 1072,
        "ma5": 9.13,
        "ma10": 9.16
      },
      {
        "open": 9.08,
        "high": 9.08,
        "low": 9.02,
        "close": 9.04,
        "volume": 2086,
        "ma5": 9.1,
        "ma10": 9.15
      },
      {
        "open": 9.02,
        "high": 9.02,
        "low": 8.94,
        "close": 8.95,
        "volume": 6303,
        "ma5": 9.07,
        "ma10": 9.13
      }
    ],
    "symbol": "00968B.TWO"
  },
  {
    "code": "2641",
    "name": "正德",
    "categories": [
      "Top100"
    ],
    "price": 17.9,
    "prevClose": 17.55,
    "open": 17.6,
    "high": 18.2,
    "low": 17.55,
    "volume": 4874,
    "ma5": 17.5,
    "ma10": 17.4,
    "ma20": 17.17,
    "ma60": 17.89,
    "vMa5": 1901,
    "vMa10": 1354,
    "maxVol10d": 4874,
    "hasVolumeBurst": true,
    "high5d": 18.2,
    "high10d": 18.2,
    "high20d": 18.2,
    "sparkline": [
      17.25,
      17.15,
      17.3,
      17.5,
      17.3,
      17.5,
      17.2,
      17.35,
      17.55,
      17.9
    ],
    "kd": {
      "k": 67.0,
      "d": 67.5,
      "prevK": 63.6,
      "prevD": 67.8,
      "h8": 17.8,
      "l8": 17.05
    },
    "k5d": [
      {
        "open": 17.75,
        "high": 17.8,
        "low": 17.35,
        "close": 17.5,
        "volume": 1053,
        "ma5": 17.35,
        "ma10": 17.1
      },
      {
        "open": 17.6,
        "high": 17.7,
        "low": 17.2,
        "close": 17.2,
        "volume": 1295,
        "ma5": 17.36,
        "ma10": 17.19
      },
      {
        "open": 17.2,
        "high": 17.45,
        "low": 17.1,
        "close": 17.35,
        "volume": 936,
        "ma5": 17.37,
        "ma10": 17.25
      },
      {
        "open": 17.35,
        "high": 17.65,
        "low": 17.35,
        "close": 17.55,
        "volume": 1347,
        "ma5": 17.38,
        "ma10": 17.31
      },
      {
        "open": 17.6,
        "high": 18.2,
        "low": 17.55,
        "close": 17.9,
        "volume": 4874,
        "ma5": 17.5,
        "ma10": 17.4
      }
    ],
    "symbol": "2641.TWO"
  },
  {
    "code": "00970B",
    "name": "台新BBB投等債20+",
    "categories": [
      "Top100"
    ],
    "price": 8.97,
    "prevClose": 9.05,
    "open": 9.0,
    "high": 9.0,
    "low": 8.95,
    "volume": 4551,
    "ma5": 9.12,
    "ma10": 9.2,
    "ma20": 9.23,
    "ma60": 9.36,
    "vMa5": 2164,
    "vMa10": 1838,
    "maxVol10d": 4785,
    "hasVolumeBurst": true,
    "high5d": 9.21,
    "high10d": 9.33,
    "high20d": 9.33,
    "sparkline": [
      9.33,
      9.31,
      9.24,
      9.26,
      9.2,
      9.21,
      9.2,
      9.18,
      9.05,
      8.97
    ],
    "kd": {
      "k": 13.2,
      "d": 24.5,
      "prevK": 17.2,
      "prevD": 30.1,
      "h8": 9.33,
      "l8": 9.03
    },
    "k5d": [
      {
        "open": 9.2,
        "high": 9.21,
        "low": 9.19,
        "close": 9.21,
        "volume": 800,
        "ma5": 9.24,
        "ma10": 9.25
      },
      {
        "open": 9.2,
        "high": 9.2,
        "low": 9.19,
        "close": 9.2,
        "volume": 793,
        "ma5": 9.22,
        "ma10": 9.25
      },
      {
        "open": 9.21,
        "high": 9.21,
        "low": 9.17,
        "close": 9.18,
        "volume": 1484,
        "ma5": 9.21,
        "ma10": 9.24
      },
      {
        "open": 9.1,
        "high": 9.1,
        "low": 9.03,
        "close": 9.05,
        "volume": 3192,
        "ma5": 9.17,
        "ma10": 9.22
      },
      {
        "open": 9.0,
        "high": 9.0,
        "low": 8.95,
        "close": 8.97,
        "volume": 4551,
        "ma5": 9.12,
        "ma10": 9.2
      }
    ],
    "symbol": "00970B.TWO"
  },
  {
    "code": "6531",
    "name": "愛普*",
    "categories": [
      "ValueTop",
      "TurnoverRate"
    ],
    "price": 863.0,
    "prevClose": 873.0,
    "open": 893.0,
    "high": 925.0,
    "low": 847.0,
    "volume": 7555,
    "ma5": 882.2,
    "ma10": 887.1,
    "ma20": 822.5,
    "ma60": 925.87,
    "vMa5": 2369,
    "vMa10": 2458,
    "maxVol10d": 7555,
    "hasVolumeBurst": true,
    "high5d": 932.0,
    "high10d": 1010.0,
    "high20d": 1010.0,
    "sparkline": [
      855.0,
      900.0,
      951.0,
      923.0,
      831.0,
      878.0,
      865.0,
      932.0,
      873.0,
      863.0
    ],
    "kd": {
      "k": 42.7,
      "d": 56.3,
      "prevK": 54.5,
      "prevD": 63.0,
      "h8": 1010.0,
      "l8": 828.0
    },
    "k5d": [
      {
        "open": 831.0,
        "high": 885.0,
        "low": 828.0,
        "close": 878.0,
        "volume": 1313,
        "ma5": 896.6,
        "ma10": 815.1
      },
      {
        "open": 880.0,
        "high": 903.0,
        "low": 860.0,
        "close": 865.0,
        "volume": 889,
        "ma5": 889.6,
        "ma10": 840.9
      },
      {
        "open": 882.0,
        "high": 932.0,
        "low": 870.0,
        "close": 932.0,
        "volume": 904,
        "ma5": 885.8,
        "ma10": 867.4
      },
      {
        "open": 906.0,
        "high": 927.0,
        "low": 873.0,
        "close": 873.0,
        "volume": 1183,
        "ma5": 875.8,
        "ma10": 881.4
      },
      {
        "open": 893.0,
        "high": 925.0,
        "low": 847.0,
        "close": 863.0,
        "volume": 7555,
        "ma5": 882.2,
        "ma10": 887.1
      }
    ],
    "symbol": "6531.TW"
  },
  {
    "code": "7734",
    "name": "印能科技",
    "categories": [
      "ValueTop"
    ],
    "price": 2945.0,
    "prevClose": 3070.0,
    "open": 3090.0,
    "high": 3150.0,
    "low": 2925.0,
    "volume": 313,
    "ma5": 3141.0,
    "ma10": 3259.5,
    "ma20": 3295.75,
    "ma60": 3202.0,
    "vMa5": 221,
    "vMa10": 210,
    "maxVol10d": 313,
    "hasVolumeBurst": false,
    "high5d": 3475.0,
    "high10d": 3875.0,
    "high20d": 3875.0,
    "sparkline": [
      3440.0,
      3390.0,
      3375.0,
      3455.0,
      3230.0,
      3350.0,
      3250.0,
      3090.0,
      3070.0,
      2945.0
    ],
    "kd": {
      "k": 12.6,
      "d": 25.9,
      "prevK": 17.1,
      "prevD": 32.6,
      "h8": 3520.0,
      "l8": 3050.0
    },
    "k5d": [
      {
        "open": 3200.0,
        "high": 3385.0,
        "low": 3095.0,
        "close": 3350.0,
        "volume": 291,
        "ma5": 3360.0,
        "ma10": 3405.5
      },
      {
        "open": 3385.0,
        "high": 3475.0,
        "low": 3230.0,
        "close": 3250.0,
        "volume": 199,
        "ma5": 3332.0,
        "ma10": 3424.0
      },
      {
        "open": 3285.0,
        "high": 3325.0,
        "low": 3075.0,
        "close": 3090.0,
        "volume": 160,
        "ma5": 3275.0,
        "ma10": 3396.0
      },
      {
        "open": 3140.0,
        "high": 3200.0,
        "low": 3050.0,
        "close": 3070.0,
        "volume": 141,
        "ma5": 3198.0,
        "ma10": 3334.0
      },
      {
        "open": 3090.0,
        "high": 3150.0,
        "low": 2925.0,
        "close": 2945.0,
        "volume": 313,
        "ma5": 3141.0,
        "ma10": 3259.5
      }
    ],
    "symbol": "7734.TWO"
  },
  {
    "code": "3680",
    "name": "家登",
    "categories": [
      "ValueTop"
    ],
    "price": 473.5,
    "prevClose": 471.0,
    "open": 471.5,
    "high": 496.0,
    "low": 470.0,
    "volume": 1801,
    "ma5": 466.5,
    "ma10": 456.25,
    "ma20": 443.05,
    "ma60": 492.06,
    "vMa5": 1124,
    "vMa10": 971,
    "maxVol10d": 1801,
    "hasVolumeBurst": true,
    "high5d": 496.0,
    "high10d": 496.0,
    "high20d": 523.0,
    "sparkline": [
      447.5,
      453.0,
      438.5,
      446.0,
      445.0,
      452.5,
      472.0,
      463.5,
      471.0,
      473.5
    ],
    "kd": {
      "k": 71.2,
      "d": 73.4,
      "prevK": 75.0,
      "prevD": 74.5,
      "h8": 486.5,
      "l8": 434.0
    },
    "k5d": [
      {
        "open": 452.0,
        "high": 459.5,
        "low": 450.0,
        "close": 452.5,
        "volume": 671,
        "ma5": 447.0,
        "ma10": 430.05
      },
      {
        "open": 460.0,
        "high": 480.0,
        "low": 459.0,
        "close": 472.0,
        "volume": 1314,
        "ma5": 450.8,
        "ma10": 440.3
      },
      {
        "open": 478.0,
        "high": 486.5,
        "low": 463.5,
        "close": 463.5,
        "volume": 1144,
        "ma5": 455.8,
        "ma10": 446.75
      },
      {
        "open": 464.0,
        "high": 476.0,
        "low": 463.0,
        "close": 471.0,
        "volume": 691,
        "ma5": 460.8,
        "ma10": 451.9
      },
      {
        "open": 471.5,
        "high": 496.0,
        "low": 470.0,
        "close": 473.5,
        "volume": 1801,
        "ma5": 466.5,
        "ma10": 456.25
      }
    ],
    "symbol": "3680.TWO"
  },
  {
    "code": "3706",
    "name": "神達",
    "categories": [
      "SitcaBuy3D",
      "SitcaBuy5D",
      "SitcaBuy"
    ],
    "price": 90.6,
    "prevClose": 92.1,
    "open": 92.0,
    "high": 92.0,
    "low": 90.1,
    "volume": 10883,
    "ma5": 91.9,
    "ma10": 91.89,
    "ma20": 90.52,
    "ma60": 89.33,
    "vMa5": 13323,
    "vMa10": 13509,
    "maxVol10d": 19873,
    "hasVolumeBurst": true,
    "high5d": 94.0,
    "high10d": 94.0,
    "high20d": 94.0,
    "sparkline": [
      91.9,
      92.9,
      91.7,
      92.9,
      90.0,
      92.4,
      91.7,
      92.7,
      92.1,
      90.6
    ],
    "kd": {
      "k": 54.0,
      "d": 66.1,
      "prevK": 68.8,
      "prevD": 72.1,
      "h8": 94.0,
      "l8": 89.5
    },
    "k5d": [
      {
        "open": 89.5,
        "high": 93.4,
        "low": 89.5,
        "close": 92.4,
        "volume": 17729,
        "ma5": 91.98,
        "ma10": 90.41
      },
      {
        "open": 93.0,
        "high": 93.5,
        "low": 91.4,
        "close": 91.7,
        "volume": 9553,
        "ma5": 91.74,
        "ma10": 91.17
      },
      {
        "open": 92.3,
        "high": 94.0,
        "low": 91.9,
        "close": 92.7,
        "volume": 19873,
        "ma5": 91.94,
        "ma10": 91.7
      },
      {
        "open": 93.2,
        "high": 93.2,
        "low": 91.1,
        "close": 92.1,
        "volume": 8578,
        "ma5": 91.78,
        "ma10": 91.96
      },
      {
        "open": 92.0,
        "high": 92.0,
        "low": 90.1,
        "close": 90.6,
        "volume": 10883,
        "ma5": 91.9,
        "ma10": 91.89
      }
    ],
    "symbol": "3706.TW"
  },
  {
    "code": "8070",
    "name": "長華*",
    "categories": [
      "SitcaBuy3D",
      "SitcaBuy5D",
      "SitcaBuy"
    ],
    "price": 54.4,
    "prevClose": 49.5,
    "open": 49.3,
    "high": 54.4,
    "low": 49.15,
    "volume": 13020,
    "ma5": 50.24,
    "ma10": 49.04,
    "ma20": 47.5,
    "ma60": 52.37,
    "vMa5": 4633,
    "vMa10": 3349,
    "maxVol10d": 13020,
    "hasVolumeBurst": true,
    "high5d": 54.4,
    "high10d": 54.4,
    "high20d": 54.4,
    "sparkline": [
      47.25,
      47.25,
      47.35,
      48.8,
      48.55,
      48.7,
      48.95,
      49.65,
      49.5,
      54.4
    ],
    "kd": {
      "k": 81.9,
      "d": 78.1,
      "prevK": 72.9,
      "prevD": 76.3,
      "h8": 51.6,
      "l8": 46.05
    },
    "k5d": [
      {
        "open": 49.0,
        "high": 49.75,
        "low": 48.65,
        "close": 48.7,
        "volume": 1550,
        "ma5": 48.13,
        "ma10": 46.9
      },
      {
        "open": 49.2,
        "high": 49.6,
        "low": 48.8,
        "close": 48.95,
        "volume": 1451,
        "ma5": 48.47,
        "ma10": 47.64
      },
      {
        "open": 49.0,
        "high": 51.4,
        "low": 48.75,
        "close": 49.65,
        "volume": 4434,
        "ma5": 48.93,
        "ma10": 48.04
      },
      {
        "open": 50.0,
        "high": 51.6,
        "low": 49.1,
        "close": 49.5,
        "volume": 2712,
        "ma5": 49.07,
        "ma10": 48.29
      },
      {
        "open": 49.3,
        "high": 54.4,
        "low": 49.15,
        "close": 54.4,
        "volume": 13020,
        "ma5": 50.24,
        "ma10": 49.04
      }
    ],
    "symbol": "8070.TW"
  },
  {
    "code": "2352",
    "name": "佳世達",
    "categories": [
      "SitcaBuy3D",
      "SitcaBuy"
    ],
    "price": 28.35,
    "prevClose": 29.0,
    "open": 28.95,
    "high": 28.95,
    "low": 28.2,
    "volume": 5692,
    "ma5": 28.89,
    "ma10": 28.85,
    "ma20": 28.64,
    "ma60": 30.37,
    "vMa5": 7582,
    "vMa10": 7389,
    "maxVol10d": 16049,
    "hasVolumeBurst": true,
    "high5d": 30.1,
    "high10d": 30.1,
    "high20d": 31.35,
    "sparkline": [
      28.45,
      28.8,
      28.3,
      29.6,
      28.9,
      28.9,
      28.7,
      29.5,
      29.0,
      28.35
    ],
    "kd": {
      "k": 43.5,
      "d": 55.5,
      "prevK": 59.0,
      "prevD": 61.5,
      "h8": 30.1,
      "l8": 28.1
    },
    "k5d": [
      {
        "open": 29.15,
        "high": 29.3,
        "low": 28.8,
        "close": 28.9,
        "volume": 4680,
        "ma5": 28.9,
        "ma10": 28.41
      },
      {
        "open": 29.2,
        "high": 29.25,
        "low": 28.7,
        "close": 28.7,
        "volume": 4560,
        "ma5": 28.88,
        "ma10": 28.64
      },
      {
        "open": 28.9,
        "high": 30.1,
        "low": 28.7,
        "close": 29.5,
        "volume": 16049,
        "ma5": 29.12,
        "ma10": 28.85
      },
      {
        "open": 29.7,
        "high": 29.75,
        "low": 28.7,
        "close": 29.0,
        "volume": 6927,
        "ma5": 29.0,
        "ma10": 28.9
      },
      {
        "open": 28.95,
        "high": 28.95,
        "low": 28.2,
        "close": 28.35,
        "volume": 5692,
        "ma5": 28.89,
        "ma10": 28.85
      }
    ],
    "symbol": "2352.TW"
  },
  {
    "code": "3265",
    "name": "台星科",
    "categories": [
      "SitcaBuy3D",
      "SitcaBuy5D",
      "SitcaBuy"
    ],
    "price": 171.0,
    "prevClose": 170.5,
    "open": 172.5,
    "high": 177.0,
    "low": 168.5,
    "volume": 3411,
    "ma5": 174.1,
    "ma10": 166.1,
    "ma20": 159.2,
    "ma60": 171.96,
    "vMa5": 2644,
    "vMa10": 1873,
    "maxVol10d": 3489,
    "hasVolumeBurst": true,
    "high5d": 190.5,
    "high10d": 190.5,
    "high20d": 190.5,
    "sparkline": [
      155.5,
      157.5,
      153.5,
      164.5,
      159.5,
      175.0,
      181.0,
      173.0,
      170.5,
      171.0
    ],
    "kd": {
      "k": 59.3,
      "d": 67.0,
      "prevK": 64.6,
      "prevD": 70.9,
      "h8": 190.5,
      "l8": 152.5
    },
    "k5d": [
      {
        "open": 160.5,
        "high": 175.0,
        "low": 160.5,
        "close": 175.0,
        "volume": 2760,
        "ma5": 162.0,
        "ma10": 155.05
      },
      {
        "open": 179.5,
        "high": 190.5,
        "low": 178.5,
        "close": 181.0,
        "volume": 3489,
        "ma5": 166.7,
        "ma10": 159.85
      },
      {
        "open": 182.5,
        "high": 183.0,
        "low": 168.0,
        "close": 173.0,
        "volume": 2728,
        "ma5": 170.6,
        "ma10": 162.75
      },
      {
        "open": 171.0,
        "high": 175.0,
        "low": 168.0,
        "close": 170.5,
        "volume": 830,
        "ma5": 171.8,
        "ma10": 164.55
      },
      {
        "open": 172.5,
        "high": 177.0,
        "low": 168.5,
        "close": 171.0,
        "volume": 3411,
        "ma5": 174.1,
        "ma10": 166.1
      }
    ],
    "symbol": "3265.TWO"
  },
  {
    "code": "3357",
    "name": "臺慶科",
    "categories": [
      "SitcaBuy3D",
      "SitcaBuy5D",
      "SitcaBuy"
    ],
    "price": 213.0,
    "prevClose": 220.0,
    "open": 220.0,
    "high": 221.5,
    "low": 212.0,
    "volume": 1491,
    "ma5": 229.1,
    "ma10": 220.95,
    "ma20": 211.0,
    "ma60": 260.3,
    "vMa5": 3123,
    "vMa10": 2656,
    "maxVol10d": 5034,
    "hasVolumeBurst": true,
    "high5d": 253.5,
    "high10d": 253.5,
    "high20d": 253.5,
    "sparkline": [
      210.0,
      210.0,
      207.0,
      218.0,
      219.0,
      230.5,
      253.5,
      228.5,
      220.0,
      213.0
    ],
    "kd": {
      "k": 50.5,
      "d": 65.7,
      "prevK": 63.9,
      "prevD": 73.3,
      "h8": 253.5,
      "l8": 200.5
    },
    "k5d": [
      {
        "open": 218.0,
        "high": 234.0,
        "low": 217.0,
        "close": 230.5,
        "volume": 3474,
        "ma5": 216.9,
        "ma10": 207.5
      },
      {
        "open": 230.5,
        "high": 253.5,
        "low": 229.5,
        "close": 253.5,
        "volume": 3836,
        "ma5": 225.6,
        "ma10": 215.2
      },
      {
        "open": 249.5,
        "high": 250.0,
        "low": 228.5,
        "close": 228.5,
        "volume": 5034,
        "ma5": 229.9,
        "ma10": 218.65
      },
      {
        "open": 226.0,
        "high": 226.5,
        "low": 219.5,
        "close": 220.0,
        "volume": 1782,
        "ma5": 230.3,
        "ma10": 220.25
      },
      {
        "open": 220.0,
        "high": 221.5,
        "low": 212.0,
        "close": 213.0,
        "volume": 1491,
        "ma5": 229.1,
        "ma10": 220.95
      }
    ],
    "symbol": "3357.TWO"
  },
  {
    "code": "1727",
    "name": "中華化",
    "categories": [
      "TurnoverRate"
    ],
    "price": 89.1,
    "prevClose": 82.6,
    "open": 84.2,
    "high": 90.8,
    "low": 83.2,
    "volume": 14524,
    "ma5": 80.5,
    "ma10": 77.67,
    "ma20": 74.9,
    "ma60": 85.84,
    "vMa5": 5305,
    "vMa10": 3563,
    "maxVol10d": 14524,
    "hasVolumeBurst": true,
    "high5d": 90.8,
    "high10d": 90.8,
    "high20d": 90.8,
    "sparkline": [
      73.9,
      75.0,
      72.2,
      76.5,
      76.6,
      79.3,
      76.4,
      75.1,
      82.6,
      89.1
    ],
    "kd": {
      "k": 80.3,
      "d": 72.8,
      "prevK": 74.8,
      "prevD": 69.0,
      "h8": 82.6,
      "l8": 71.5
    },
    "k5d": [
      {
        "open": 77.0,
        "high": 82.3,
        "low": 76.6,
        "close": 79.3,
        "volume": 3129,
        "ma5": 75.92,
        "ma10": 72.68
      },
      {
        "open": 79.6,
        "high": 80.8,
        "low": 76.2,
        "close": 76.4,
        "volume": 2653,
        "ma5": 76.2,
        "ma10": 74.09
      },
      {
        "open": 77.3,
        "high": 77.7,
        "low": 74.3,
        "close": 75.1,
        "volume": 1241,
        "ma5": 76.78,
        "ma10": 74.82
      },
      {
        "open": 80.0,
        "high": 82.6,
        "low": 80.0,
        "close": 82.6,
        "volume": 4976,
        "ma5": 78.0,
        "ma10": 76.0
      },
      {
        "open": 84.2,
        "high": 90.8,
        "low": 83.2,
        "close": 89.1,
        "volume": 14524,
        "ma5": 80.5,
        "ma10": 77.67
      }
    ],
    "symbol": "1727.TW"
  },
  {
    "code": "8021",
    "name": "尖點",
    "categories": [
      "TurnoverRate"
    ],
    "price": 408.5,
    "prevClose": 428.0,
    "open": 437.0,
    "high": 452.0,
    "low": 400.0,
    "volume": 10697,
    "ma5": 425.3,
    "ma10": 420.85,
    "ma20": 391.23,
    "ma60": 467.13,
    "vMa5": 3072,
    "vMa10": 5014,
    "maxVol10d": 11033,
    "hasVolumeBurst": true,
    "high5d": 452.0,
    "high10d": 452.0,
    "high20d": 452.0,
    "sparkline": [
      396.0,
      417.5,
      395.0,
      434.5,
      439.0,
      427.0,
      429.0,
      434.0,
      428.0,
      408.5
    ],
    "kd": {
      "k": 65.2,
      "d": 75.2,
      "prevK": 80.1,
      "prevD": 80.2,
      "h8": 446.5,
      "l8": 384.5
    },
    "k5d": [
      {
        "open": 439.5,
        "high": 441.0,
        "low": 421.0,
        "close": 427.0,
        "volume": 1088,
        "ma5": 422.6,
        "ma10": 387.15
      },
      {
        "open": 439.0,
        "high": 446.5,
        "low": 427.5,
        "close": 429.0,
        "volume": 977,
        "ma5": 424.9,
        "ma10": 400.65
      },
      {
        "open": 431.0,
        "high": 437.0,
        "low": 415.0,
        "close": 434.0,
        "volume": 1057,
        "ma5": 432.7,
        "ma10": 411.75
      },
      {
        "open": 423.5,
        "high": 431.0,
        "low": 395.0,
        "close": 428.0,
        "volume": 1542,
        "ma5": 431.4,
        "ma10": 419.05
      },
      {
        "open": 437.0,
        "high": 452.0,
        "low": 400.0,
        "close": 408.5,
        "volume": 10697,
        "ma5": 425.3,
        "ma10": 420.85
      }
    ],
    "symbol": "8021.TW"
  },
  {
    "code": "6141",
    "name": "柏承",
    "categories": [
      "TurnoverRate"
    ],
    "price": 41.25,
    "prevClose": 38.5,
    "open": 39.2,
    "high": 42.35,
    "low": 39.2,
    "volume": 7785,
    "ma5": 37.65,
    "ma10": 36.16,
    "ma20": 35.32,
    "ma60": 37.09,
    "vMa5": 2638,
    "vMa10": 1809,
    "maxVol10d": 7785,
    "hasVolumeBurst": true,
    "high5d": 42.35,
    "high10d": 42.35,
    "high20d": 46.2,
    "sparkline": [
      35.45,
      34.4,
      34.1,
      34.7,
      34.65,
      36.9,
      36.6,
      35.0,
      38.5,
      41.25
    ],
    "kd": {
      "k": 84.9,
      "d": 78.2,
      "prevK": 83.7,
      "prevD": 74.8,
      "h8": 38.5,
      "l8": 33.65
    },
    "k5d": [
      {
        "open": 35.35,
        "high": 37.1,
        "low": 35.0,
        "close": 36.9,
        "volume": 1265,
        "ma5": 34.95,
        "ma10": 33.34
      },
      {
        "open": 36.0,
        "high": 37.6,
        "low": 34.9,
        "close": 36.6,
        "volume": 1148,
        "ma5": 35.39,
        "ma10": 34.07
      },
      {
        "open": 36.15,
        "high": 36.9,
        "low": 34.55,
        "close": 35.0,
        "volume": 953,
        "ma5": 35.57,
        "ma10": 34.56
      },
      {
        "open": 35.3,
        "high": 38.5,
        "low": 34.9,
        "close": 38.5,
        "volume": 2040,
        "ma5": 36.33,
        "ma10": 35.37
      },
      {
        "open": 39.2,
        "high": 42.35,
        "low": 39.2,
        "close": 41.25,
        "volume": 7785,
        "ma5": 37.65,
        "ma10": 36.16
      }
    ],
    "symbol": "6141.TW"
  },
  {
    "code": "00715L",
    "name": "期街口布蘭特正2",
    "categories": [
      "TurnoverRate"
    ],
    "price": 50.8,
    "prevClose": 47.37,
    "open": 50.2,
    "high": 50.95,
    "low": 50.0,
    "volume": 6754,
    "ma5": 48.21,
    "ma10": 45.15,
    "ma20": 46.36,
    "ma60": 44.63,
    "vMa5": 5560,
    "vMa10": 8089,
    "maxVol10d": 18088,
    "hasVolumeBurst": true,
    "high5d": 50.95,
    "high10d": 50.95,
    "high20d": 55.8,
    "sparkline": [
      38.49,
      38.48,
      43.02,
      43.15,
      47.25,
      48.63,
      47.96,
      46.31,
      47.37,
      50.8
    ],
    "kd": {
      "k": 84.7,
      "d": 72.7,
      "prevK": 77.6,
      "prevD": 66.7,
      "h8": 49.2,
      "l8": 38.48
    },
    "k5d": [
      {
        "open": 48.67,
        "high": 49.2,
        "low": 48.55,
        "close": 48.63,
        "volume": 6219,
        "ma5": 44.11,
        "ma10": 44.01
      },
      {
        "open": 47.29,
        "high": 48.08,
        "low": 46.93,
        "close": 47.96,
        "volume": 5249,
        "ma5": 46.0,
        "ma10": 43.98
      },
      {
        "open": 46.32,
        "high": 46.56,
        "low": 45.82,
        "close": 46.31,
        "volume": 5779,
        "ma5": 46.66,
        "ma10": 44.12
      },
      {
        "open": 47.27,
        "high": 48.19,
        "low": 47.2,
        "close": 47.37,
        "volume": 3801,
        "ma5": 47.5,
        "ma10": 44.57
      },
      {
        "open": 50.2,
        "high": 50.95,
        "low": 50.0,
        "close": 50.8,
        "volume": 6754,
        "ma5": 48.21,
        "ma10": 45.15
      }
    ],
    "symbol": "00715L.TW"
  },
  {
    "code": "3167",
    "name": "大量",
    "categories": [
      "TurnoverRate"
    ],
    "price": 770.0,
    "prevClose": 700.0,
    "open": 762.0,
    "high": 770.0,
    "low": 753.0,
    "volume": 5841,
    "ma5": 698.2,
    "ma10": 682.2,
    "ma20": 624.58,
    "ma60": 759.16,
    "vMa5": 1506,
    "vMa10": 1360,
    "maxVol10d": 5841,
    "hasVolumeBurst": true,
    "high5d": 770.0,
    "high10d": 770.0,
    "high20d": 770.0,
    "sparkline": [
      645.0,
      705.0,
      691.0,
      655.0,
      635.0,
      672.0,
      674.0,
      675.0,
      700.0,
      770.0
    ],
    "kd": {
      "k": 77.9,
      "d": 71.2,
      "prevK": 66.9,
      "prevD": 67.8,
      "h8": 736.0,
      "l8": 635.0
    },
    "k5d": [
      {
        "open": 642.0,
        "high": 673.0,
        "low": 635.0,
        "close": 672.0,
        "volume": 394,
        "ma5": 671.6,
        "ma10": 605.2
      },
      {
        "open": 699.0,
        "high": 699.0,
        "low": 670.0,
        "close": 674.0,
        "volume": 424,
        "ma5": 665.4,
        "ma10": 628.4
      },
      {
        "open": 695.0,
        "high": 695.0,
        "low": 673.0,
        "close": 675.0,
        "volume": 379,
        "ma5": 662.2,
        "ma10": 647.3
      },
      {
        "open": 680.0,
        "high": 700.0,
        "low": 675.0,
        "close": 700.0,
        "volume": 493,
        "ma5": 671.2,
        "ma10": 663.9
      },
      {
        "open": 762.0,
        "high": 770.0,
        "low": 753.0,
        "close": 770.0,
        "volume": 5841,
        "ma5": 698.2,
        "ma10": 682.2
      }
    ],
    "symbol": "3167.TW"
  },
  {
    "code": "2302",
    "name": "麗正",
    "categories": [
      "TurnoverRate"
    ],
    "price": 45.3,
    "prevClose": 43.2,
    "open": 42.4,
    "high": 45.95,
    "low": 42.4,
    "volume": 9727,
    "ma5": 44.29,
    "ma10": 43.84,
    "ma20": 41.65,
    "ma60": 41.95,
    "vMa5": 5541,
    "vMa10": 4917,
    "maxVol10d": 9727,
    "hasVolumeBurst": true,
    "high5d": 47.65,
    "high10d": 47.65,
    "high20d": 47.65,
    "sparkline": [
      42.4,
      43.05,
      42.9,
      42.5,
      46.05,
      45.55,
      45.2,
      42.2,
      43.2,
      45.3
    ],
    "kd": {
      "k": 58.5,
      "d": 63.5,
      "prevK": 54.5,
      "prevD": 66.0,
      "h8": 47.65,
      "l8": 40.65
    },
    "k5d": [
      {
        "open": 45.65,
        "high": 47.65,
        "low": 45.05,
        "close": 45.55,
        "volume": 6516,
        "ma5": 44.01,
        "ma10": 41.46
      },
      {
        "open": 46.0,
        "high": 47.0,
        "low": 44.8,
        "close": 45.2,
        "volume": 5017,
        "ma5": 44.44,
        "ma10": 42.63
      },
      {
        "open": 45.55,
        "high": 46.0,
        "low": 42.2,
        "close": 42.2,
        "volume": 4310,
        "ma5": 44.3,
        "ma10": 43.18
      },
      {
        "open": 42.15,
        "high": 43.7,
        "low": 41.45,
        "close": 43.2,
        "volume": 2135,
        "ma5": 44.44,
        "ma10": 43.5
      },
      {
        "open": 42.4,
        "high": 45.95,
        "low": 42.4,
        "close": 45.3,
        "volume": 9727,
        "ma5": 44.29,
        "ma10": 43.84
      }
    ],
    "symbol": "2302.TW"
  },
  {
    "code": "6451",
    "name": "訊芯-KY",
    "categories": [
      "TurnoverRate"
    ],
    "price": 421.0,
    "prevClose": 458.5,
    "open": 470.5,
    "high": 474.5,
    "low": 419.5,
    "volume": 6403,
    "ma5": 438.4,
    "ma10": 438.4,
    "ma20": 414.25,
    "ma60": 508.04,
    "vMa5": 2184,
    "vMa10": 3480,
    "maxVol10d": 9130,
    "hasVolumeBurst": true,
    "high5d": 474.5,
    "high10d": 475.0,
    "high20d": 484.0,
    "sparkline": [
      430.0,
      452.0,
      421.0,
      456.0,
      433.0,
      451.0,
      436.0,
      425.5,
      458.5,
      421.0
    ],
    "kd": {
      "k": 51.1,
      "d": 62.6,
      "prevK": 69.2,
      "prevD": 68.4,
      "h8": 475.0,
      "l8": 411.5
    },
    "k5d": [
      {
        "open": 433.5,
        "high": 455.0,
        "low": 428.5,
        "close": 451.0,
        "volume": 1119,
        "ma5": 442.6,
        "ma10": 407.15
      },
      {
        "open": 458.0,
        "high": 458.0,
        "low": 436.0,
        "close": 436.0,
        "volume": 1219,
        "ma5": 439.4,
        "ma10": 418.55
      },
      {
        "open": 436.0,
        "high": 436.0,
        "low": 420.5,
        "close": 425.5,
        "volume": 777,
        "ma5": 440.3,
        "ma10": 427.0
      },
      {
        "open": 433.5,
        "high": 458.5,
        "low": 426.5,
        "close": 458.5,
        "volume": 1401,
        "ma5": 440.8,
        "ma10": 435.4
      },
      {
        "open": 470.5,
        "high": 474.5,
        "low": 419.5,
        "close": 421.0,
        "volume": 6403,
        "ma5": 438.4,
        "ma10": 438.4
      }
    ],
    "symbol": "6451.TW"
  },
  {
    "code": "00875",
    "name": "國泰網路資安",
    "categories": [
      "TurnoverRate"
    ],
    "price": 55.1,
    "prevClose": 56.75,
    "open": 55.05,
    "high": 55.1,
    "low": 54.75,
    "volume": 752,
    "ma5": 57.17,
    "ma10": 56.33,
    "ma20": 53.89,
    "ma60": 50.88,
    "vMa5": 276,
    "vMa10": 207,
    "maxVol10d": 752,
    "hasVolumeBurst": true,
    "high5d": 58.55,
    "high10d": 58.55,
    "high20d": 58.55,
    "sparkline": [
      53.65,
      56.4,
      55.55,
      55.65,
      56.15,
      57.65,
      57.4,
      57.45,
      58.25,
      55.1
    ],
    "kd": {
      "k": 65.0,
      "d": 81.0,
      "prevK": 92.9,
      "prevD": 88.9,
      "h8": 58.55,
      "l8": 55.45
    },
    "k5d": [
      {
        "open": 57.35,
        "high": 57.75,
        "low": 57.35,
        "close": 57.65,
        "volume": 156,
        "ma5": 56.28,
        "ma10": 54.13
      },
      {
        "open": 57.6,
        "high": 57.6,
        "low": 57.2,
        "close": 57.4,
        "volume": 111,
        "ma5": 56.48,
        "ma10": 54.79
      },
      {
        "open": 57.45,
        "high": 57.45,
        "low": 57.3,
        "close": 57.45,
        "volume": 52,
        "ma5": 56.86,
        "ma10": 55.43
      },
      {
        "open": 58.55,
        "high": 58.55,
        "low": 58.25,
        "close": 58.25,
        "volume": 309,
        "ma5": 57.38,
        "ma10": 56.08
      },
      {
        "open": 55.05,
        "high": 55.1,
        "low": 54.75,
        "close": 55.1,
        "volume": 752,
        "ma5": 57.17,
        "ma10": 56.33
      }
    ],
    "symbol": "00875.TW"
  },
  {
    "code": "009826",
    "name": "貝萊德世界股票",
    "categories": [
      "TurnoverRate"
    ],
    "price": 10.18,
    "prevClose": 10.28,
    "open": 10.25,
    "high": 10.25,
    "low": 10.16,
    "volume": 32155,
    "ma5": 10.27,
    "ma10": 10.28,
    "ma20": 10.15,
    "ma60": 10.15,
    "vMa5": 25326,
    "vMa10": 28394,
    "maxVol10d": 50892,
    "hasVolumeBurst": false,
    "high5d": 10.33,
    "high10d": 10.39,
    "high20d": 10.39,
    "sparkline": [
      10.29,
      10.28,
      10.22,
      10.32,
      10.32,
      10.29,
      10.31,
      10.3,
      10.28,
      10.18
    ],
    "kd": {
      "k": 45.3,
      "d": 61.5,
      "prevK": 62.1,
      "prevD": 69.6,
      "h8": 10.33,
      "l8": 10.2
    },
    "k5d": [
      {
        "open": 10.29,
        "high": 10.3,
        "low": 10.27,
        "close": 10.29,
        "volume": 22829,
        "ma5": 10.29,
        "ma10": 10.2
      },
      {
        "open": 10.32,
        "high": 10.32,
        "low": 10.29,
        "close": 10.31,
        "volume": 24586,
        "ma5": 10.29,
        "ma10": 10.23
      },
      {
        "open": 10.32,
        "high": 10.33,
        "low": 10.29,
        "close": 10.3,
        "volume": 24647,
        "ma5": 10.31,
        "ma10": 10.26
      },
      {
        "open": 10.3,
        "high": 10.3,
        "low": 10.26,
        "close": 10.28,
        "volume": 22415,
        "ma5": 10.3,
        "ma10": 10.28
      },
      {
        "open": 10.25,
        "high": 10.25,
        "low": 10.16,
        "close": 10.18,
        "volume": 32155,
        "ma5": 10.27,
        "ma10": 10.28
      }
    ],
    "symbol": "009826.TW"
  },
  {
    "code": "4977",
    "name": "眾達-KY",
    "categories": [
      "TurnoverRate"
    ],
    "price": 151.0,
    "prevClose": 158.0,
    "open": 157.0,
    "high": 160.0,
    "low": 149.0,
    "volume": 4507,
    "ma5": 151.7,
    "ma10": 146.4,
    "ma20": 135.85,
    "ma60": 162.45,
    "vMa5": 3799,
    "vMa10": 3780,
    "maxVol10d": 5252,
    "hasVolumeBurst": true,
    "high5d": 161.0,
    "high10d": 161.0,
    "high20d": 161.0,
    "sparkline": [
      142.5,
      138.5,
      133.5,
      144.5,
      146.5,
      154.0,
      151.5,
      144.0,
      158.0,
      151.0
    ],
    "kd": {
      "k": 74.3,
      "d": 75.7,
      "prevK": 78.4,
      "prevD": 76.4,
      "h8": 161.0,
      "l8": 131.5
    },
    "k5d": [
      {
        "open": 147.0,
        "high": 158.0,
        "low": 147.0,
        "close": 154.0,
        "volume": 5252,
        "ma5": 143.4,
        "ma10": 133.55
      },
      {
        "open": 158.0,
        "high": 161.0,
        "low": 150.0,
        "close": 151.5,
        "volume": 4254,
        "ma5": 146.0,
        "ma10": 138.05
      },
      {
        "open": 150.0,
        "high": 150.0,
        "low": 143.5,
        "close": 144.0,
        "volume": 1837,
        "ma5": 148.1,
        "ma10": 140.75
      },
      {
        "open": 147.0,
        "high": 158.0,
        "low": 143.5,
        "close": 158.0,
        "volume": 3145,
        "ma5": 150.8,
        "ma10": 144.4
      },
      {
        "open": 157.0,
        "high": 160.0,
        "low": 149.0,
        "close": 151.0,
        "volume": 4507,
        "ma5": 151.7,
        "ma10": 146.4
      }
    ],
    "symbol": "4977.TW"
  },
  {
    "code": "00410A",
    "name": "主動永豐科技趨勢",
    "categories": [
      "TurnoverRate"
    ],
    "price": 11.35,
    "prevClose": 11.59,
    "open": 11.57,
    "high": 11.75,
    "low": 11.35,
    "volume": 7403,
    "ma5": 11.19,
    "ma10": 10.93,
    "ma20": 10.56,
    "ma60": 10.56,
    "vMa5": 6629,
    "vMa10": 13300,
    "maxVol10d": 37935,
    "hasVolumeBurst": false,
    "high5d": 11.75,
    "high10d": 11.75,
    "high20d": 11.35,
    "sparkline": [
      10.41,
      10.7,
      10.88,
      10.57,
      10.75,
      10.79,
      11.09,
      11.31,
      11.43,
      11.35
    ],
    "kd": {
      "k": 81.0,
      "d": 81.0,
      "prevK": 87.9,
      "prevD": 81.0,
      "h8": 11.57,
      "l8": 10.53
    },
    "k5d": [
      {
        "open": 10.7,
        "high": 10.79,
        "low": 10.58,
        "close": 10.79,
        "volume": 3702,
        "ma5": 10.74,
        "ma10": 10.39
      },
      {
        "open": 10.8,
        "high": 11.09,
        "low": 10.8,
        "close": 11.09,
        "volume": 10444,
        "ma5": 10.82,
        "ma10": 10.51
      },
      {
        "open": 11.3,
        "high": 11.44,
        "low": 11.27,
        "close": 11.31,
        "volume": 5275,
        "ma5": 10.9,
        "ma10": 10.67
      },
      {
        "open": 11.41,
        "high": 11.57,
        "low": 11.37,
        "close": 11.43,
        "volume": 6319,
        "ma5": 11.07,
        "ma10": 10.8
      },
      {
        "open": 11.57,
        "high": 11.75,
        "low": 11.35,
        "close": 11.35,
        "volume": 7403,
        "ma5": 11.19,
        "ma10": 10.93
      }
    ],
    "symbol": "00410A.TW"
  },
  {
    "code": "3006",
    "name": "晶豪科",
    "categories": [
      "TurnoverRate"
    ],
    "price": 248.0,
    "prevClose": 273.0,
    "open": 278.0,
    "high": 279.0,
    "low": 246.5,
    "volume": 15786,
    "ma5": 269.2,
    "ma10": 264.25,
    "ma20": 230.65,
    "ma60": 228.27,
    "vMa5": 6172,
    "vMa10": 12016,
    "maxVol10d": 30199,
    "hasVolumeBurst": true,
    "high5d": 285.5,
    "high10d": 285.5,
    "high20d": 285.5,
    "sparkline": [
      239.0,
      258.0,
      256.5,
      275.5,
      267.5,
      274.0,
      277.5,
      273.5,
      273.0,
      248.0
    ],
    "kd": {
      "k": 62.6,
      "d": 78.0,
      "prevK": 84.2,
      "prevD": 85.7,
      "h8": 285.5,
      "l8": 239.0
    },
    "k5d": [
      {
        "open": 275.5,
        "high": 279.0,
        "low": 269.0,
        "close": 274.0,
        "volume": 3572,
        "ma5": 266.3,
        "ma10": 233.0
      },
      {
        "open": 285.5,
        "high": 285.5,
        "low": 272.5,
        "close": 277.5,
        "volume": 3988,
        "ma5": 270.2,
        "ma10": 244.35
      },
      {
        "open": 282.0,
        "high": 282.0,
        "low": 269.5,
        "close": 273.5,
        "volume": 3973,
        "ma5": 273.6,
        "ma10": 253.7
      },
      {
        "open": 274.0,
        "high": 275.5,
        "low": 266.5,
        "close": 273.0,
        "volume": 3538,
        "ma5": 273.1,
        "ma10": 261.2
      },
      {
        "open": 278.0,
        "high": 279.0,
        "low": 246.5,
        "close": 248.0,
        "volume": 15786,
        "ma5": 269.2,
        "ma10": 264.25
      }
    ],
    "symbol": "3006.TW"
  },
  {
    "code": "8103",
    "name": "瀚荃",
    "categories": [
      "TurnoverRate"
    ],
    "price": 83.4,
    "prevClose": 80.0,
    "open": 80.1,
    "high": 88.0,
    "low": 80.0,
    "volume": 3717,
    "ma5": 80.7,
    "ma10": 80.58,
    "ma20": 77.73,
    "ma60": 90.33,
    "vMa5": 1314,
    "vMa10": 1148,
    "maxVol10d": 3717,
    "hasVolumeBurst": true,
    "high5d": 88.0,
    "high10d": 88.0,
    "high20d": 88.0,
    "sparkline": [
      78.7,
      84.5,
      78.7,
      80.3,
      80.1,
      81.1,
      80.1,
      78.9,
      80.0,
      83.4
    ],
    "kd": {
      "k": 54.2,
      "d": 59.7,
      "prevK": 54.5,
      "prevD": 62.4,
      "h8": 85.0,
      "l8": 78.1
    },
    "k5d": [
      {
        "open": 80.7,
        "high": 83.8,
        "low": 80.7,
        "close": 81.1,
        "volume": 847,
        "ma5": 80.94,
        "ma10": 77.38
      },
      {
        "open": 81.3,
        "high": 82.3,
        "low": 80.0,
        "close": 80.1,
        "volume": 496,
        "ma5": 80.06,
        "ma10": 78.62
      },
      {
        "open": 80.3,
        "high": 81.5,
        "low": 78.5,
        "close": 78.9,
        "volume": 662,
        "ma5": 80.1,
        "ma10": 79.2
      },
      {
        "open": 79.6,
        "high": 82.9,
        "low": 78.9,
        "close": 80.0,
        "volume": 847,
        "ma5": 80.04,
        "ma10": 79.81
      },
      {
        "open": 80.1,
        "high": 88.0,
        "low": 80.0,
        "close": 83.4,
        "volume": 3717,
        "ma5": 80.7,
        "ma10": 80.58
      }
    ],
    "symbol": "8103.TW"
  },
  {
    "code": "2342",
    "name": "茂矽",
    "categories": [
      "TurnoverRate"
    ],
    "price": 41.0,
    "prevClose": 40.4,
    "open": 40.1,
    "high": 43.95,
    "low": 39.95,
    "volume": 6990,
    "ma5": 39.95,
    "ma10": 38.55,
    "ma20": 37.32,
    "ma60": 44.32,
    "vMa5": 4051,
    "vMa10": 2910,
    "maxVol10d": 6990,
    "hasVolumeBurst": true,
    "high5d": 43.95,
    "high10d": 43.95,
    "high20d": 44.3,
    "sparkline": [
      37.65,
      37.6,
      36.35,
      37.1,
      37.05,
      38.4,
      39.25,
      40.7,
      40.4,
      41.0
    ],
    "kd": {
      "k": 75.3,
      "d": 75.9,
      "prevK": 81.0,
      "prevD": 76.2,
      "h8": 41.6,
      "l8": 35.8
    },
    "k5d": [
      {
        "open": 37.6,
        "high": 39.15,
        "low": 37.55,
        "close": 38.4,
        "volume": 2669,
        "ma5": 37.3,
        "ma10": 35.66
      },
      {
        "open": 38.95,
        "high": 41.6,
        "low": 38.9,
        "close": 39.25,
        "volume": 4133,
        "ma5": 37.63,
        "ma10": 36.59
      },
      {
        "open": 39.6,
        "high": 41.0,
        "low": 38.45,
        "close": 40.7,
        "volume": 3236,
        "ma5": 38.5,
        "ma10": 37.45
      },
      {
        "open": 39.7,
        "high": 40.95,
        "low": 38.0,
        "close": 40.4,
        "volume": 3227,
        "ma5": 39.16,
        "ma10": 38.12
      },
      {
        "open": 40.1,
        "high": 43.95,
        "low": 39.95,
        "close": 41.0,
        "volume": 6990,
        "ma5": 39.95,
        "ma10": 38.55
      }
    ],
    "symbol": "2342.TW"
  },
  {
    "code": "6517",
    "name": "保勝光學",
    "categories": [
      "TurnoverRate"
    ],
    "price": 68.1,
    "prevClose": 64.0,
    "open": 64.5,
    "high": 70.4,
    "low": 64.1,
    "volume": 2133,
    "ma5": 64.52,
    "ma10": 63.45,
    "ma20": 63.96,
    "ma60": 67.03,
    "vMa5": 1002,
    "vMa10": 709,
    "maxVol10d": 2133,
    "hasVolumeBurst": true,
    "high5d": 70.4,
    "high10d": 70.4,
    "high20d": 76.6,
    "sparkline": [
      64.0,
      63.0,
      61.0,
      62.0,
      61.9,
      63.0,
      63.7,
      63.8,
      64.0,
      68.1
    ],
    "kd": {
      "k": 58.8,
      "d": 49.6,
      "prevK": 50.1,
      "prevD": 45.0,
      "h8": 67.3,
      "l8": 60.7
    },
    "k5d": [
      {
        "open": 62.2,
        "high": 64.0,
        "low": 62.0,
        "close": 63.0,
        "volume": 345,
        "ma5": 62.18,
        "ma10": 62.23
      },
      {
        "open": 63.8,
        "high": 64.8,
        "low": 62.6,
        "close": 63.7,
        "volume": 763,
        "ma5": 62.32,
        "ma10": 62.67
      },
      {
        "open": 63.8,
        "high": 66.0,
        "low": 63.4,
        "close": 63.8,
        "volume": 930,
        "ma5": 62.88,
        "ma10": 62.81
      },
      {
        "open": 63.5,
        "high": 67.3,
        "low": 63.1,
        "close": 64.0,
        "volume": 839,
        "ma5": 63.28,
        "ma10": 62.96
      },
      {
        "open": 64.5,
        "high": 70.4,
        "low": 64.1,
        "close": 68.1,
        "volume": 2133,
        "ma5": 64.52,
        "ma10": 63.45
      }
    ],
    "symbol": "6517.TWO"
  },
  {
    "code": "6588",
    "name": "東典光電",
    "categories": [
      "TurnoverRate"
    ],
    "price": 94.5,
    "prevClose": 90.9,
    "open": 90.9,
    "high": 96.8,
    "low": 88.5,
    "volume": 2419,
    "ma5": 93.86,
    "ma10": 92.59,
    "ma20": 89.0,
    "ma60": 93.76,
    "vMa5": 1609,
    "vMa10": 1844,
    "maxVol10d": 3951,
    "hasVolumeBurst": true,
    "high5d": 100.5,
    "high10d": 103.5,
    "high20d": 103.5,
    "sparkline": [
      94.0,
      94.0,
      89.8,
      90.5,
      88.3,
      97.1,
      93.7,
      93.1,
      90.9,
      94.5
    ],
    "kd": {
      "k": 47.8,
      "d": 48.2,
      "prevK": 41.9,
      "prevD": 48.4,
      "h8": 100.5,
      "l8": 85.6
    },
    "k5d": [
      {
        "open": 87.8,
        "high": 97.1,
        "low": 87.8,
        "close": 97.1,
        "volume": 1851,
        "ma5": 91.94,
        "ma10": 90.6
      },
      {
        "open": 99.1,
        "high": 100.5,
        "low": 93.4,
        "close": 93.7,
        "volume": 2311,
        "ma5": 91.88,
        "ma10": 91.87
      },
      {
        "open": 93.9,
        "high": 94.9,
        "low": 91.3,
        "close": 93.1,
        "volume": 734,
        "ma5": 92.54,
        "ma10": 92.27
      },
      {
        "open": 93.3,
        "high": 94.3,
        "low": 90.0,
        "close": 90.9,
        "volume": 731,
        "ma5": 92.62,
        "ma10": 92.68
      },
      {
        "open": 90.9,
        "high": 96.8,
        "low": 88.5,
        "close": 94.5,
        "volume": 2419,
        "ma5": 93.86,
        "ma10": 92.59
      }
    ],
    "symbol": "6588.TWO"
  },
  {
    "code": "5291",
    "name": "邑昇",
    "categories": [
      "TurnoverRate"
    ],
    "price": 55.9,
    "prevClose": 55.3,
    "open": 59.2,
    "high": 60.8,
    "low": 55.6,
    "volume": 2235,
    "ma5": 55.98,
    "ma10": 54.94,
    "ma20": 52.13,
    "ma60": 58.58,
    "vMa5": 785,
    "vMa10": 722,
    "maxVol10d": 2235,
    "hasVolumeBurst": true,
    "high5d": 60.8,
    "high10d": 60.8,
    "high20d": 60.8,
    "sparkline": [
      49.55,
      51.0,
      56.1,
      56.2,
      56.6,
      56.9,
      55.9,
      55.9,
      55.3,
      55.9
    ],
    "kd": {
      "k": 73.5,
      "d": 77.4,
      "prevK": 79.6,
      "prevD": 79.3,
      "h8": 58.1,
      "l8": 48.2
    },
    "k5d": [
      {
        "open": 57.3,
        "high": 58.0,
        "low": 56.0,
        "close": 56.9,
        "volume": 493,
        "ma5": 55.36,
        "ma10": 50.93
      },
      {
        "open": 57.5,
        "high": 58.1,
        "low": 55.6,
        "close": 55.9,
        "volume": 456,
        "ma5": 56.34,
        "ma10": 52.25
      },
      {
        "open": 56.9,
        "high": 57.9,
        "low": 55.8,
        "close": 55.9,
        "volume": 551,
        "ma5": 56.3,
        "ma10": 53.28
      },
      {
        "open": 56.8,
        "high": 56.8,
        "low": 55.2,
        "close": 55.3,
        "volume": 189,
        "ma5": 56.12,
        "ma10": 54.14
      },
      {
        "open": 59.2,
        "high": 60.8,
        "low": 55.6,
        "close": 55.9,
        "volume": 2235,
        "ma5": 55.98,
        "ma10": 54.94
      }
    ],
    "symbol": "5291.TWO"
  },
  {
    "code": "7714",
    "name": "創泓科技",
    "categories": [
      "TurnoverRate"
    ],
    "price": 170.0,
    "prevClose": 166.0,
    "open": 166.0,
    "high": 176.5,
    "low": 164.0,
    "volume": 930,
    "ma5": 163.3,
    "ma10": 158.45,
    "ma20": 155.7,
    "ma60": 149.25,
    "vMa5": 473,
    "vMa10": 392,
    "maxVol10d": 930,
    "hasVolumeBurst": true,
    "high5d": 178.5,
    "high10d": 178.5,
    "high20d": 206.5,
    "sparkline": [
      158.0,
      153.5,
      153.0,
      150.0,
      153.5,
      151.0,
      157.0,
      172.5,
      166.0,
      170.0
    ],
    "kd": {
      "k": 70.3,
      "d": 65.5,
      "prevK": 68.9,
      "prevD": 63.1,
      "h8": 178.5,
      "l8": 147.0
    },
    "k5d": [
      {
        "open": 152.0,
        "high": 153.5,
        "low": 151.0,
        "close": 151.0,
        "volume": 111,
        "ma5": 152.2,
        "ma10": 147.75
      },
      {
        "open": 153.0,
        "high": 160.0,
        "low": 153.0,
        "close": 157.0,
        "volume": 246,
        "ma5": 152.9,
        "ma10": 150.95
      },
      {
        "open": 159.0,
        "high": 172.5,
        "low": 155.0,
        "close": 172.5,
        "volume": 454,
        "ma5": 156.8,
        "ma10": 154.45
      },
      {
        "open": 176.0,
        "high": 178.5,
        "low": 163.5,
        "close": 166.0,
        "volume": 624,
        "ma5": 160.0,
        "ma10": 156.95
      },
      {
        "open": 166.0,
        "high": 176.5,
        "low": 164.0,
        "close": 170.0,
        "volume": 930,
        "ma5": 163.3,
        "ma10": 158.45
      }
    ],
    "symbol": "7714.TWO"
  },
  {
    "code": "6907",
    "name": "雅特力-KY",
    "categories": [
      "TurnoverRate"
    ],
    "price": 188.0,
    "prevClose": 171.0,
    "open": 173.0,
    "high": 188.0,
    "low": 171.5,
    "volume": 2495,
    "ma5": 175.2,
    "ma10": 181.4,
    "ma20": 182.6,
    "ma60": 184.48,
    "vMa5": 2222,
    "vMa10": 2473,
    "maxVol10d": 4220,
    "hasVolumeBurst": true,
    "high5d": 188.0,
    "high10d": 214.5,
    "high20d": 223.0,
    "sparkline": [
      177.5,
      195.0,
      189.0,
      189.5,
      187.0,
      170.5,
      170.5,
      176.0,
      171.0,
      188.0
    ],
    "kd": {
      "k": 30.0,
      "d": 34.6,
      "prevK": 23.4,
      "prevD": 37.0,
      "h8": 214.5,
      "l8": 168.0
    },
    "k5d": [
      {
        "open": 182.5,
        "high": 182.5,
        "low": 169.5,
        "close": 170.5,
        "volume": 3680,
        "ma5": 186.2,
        "ma10": 178.1
      },
      {
        "open": 170.5,
        "high": 174.5,
        "low": 168.0,
        "close": 170.5,
        "volume": 1945,
        "ma5": 181.3,
        "ma10": 180.15
      },
      {
        "open": 174.0,
        "high": 180.0,
        "low": 170.5,
        "close": 176.0,
        "volume": 2055,
        "ma5": 178.7,
        "ma10": 181.25
      },
      {
        "open": 172.0,
        "high": 175.0,
        "low": 169.5,
        "close": 171.0,
        "volume": 935,
        "ma5": 175.0,
        "ma10": 180.75
      },
      {
        "open": 173.0,
        "high": 188.0,
        "low": 171.5,
        "close": 188.0,
        "volume": 2495,
        "ma5": 175.2,
        "ma10": 181.4
      }
    ],
    "symbol": "6907.TWO"
  },
  {
    "code": "00990B",
    "name": "國泰收益非投等債",
    "categories": [
      "TurnoverRate"
    ],
    "price": 10.0,
    "prevClose": 10.02,
    "open": 10.01,
    "high": 10.01,
    "low": 9.98,
    "volume": 2932,
    "ma5": 10.05,
    "ma10": 10.08,
    "ma20": 10.07,
    "ma60": 10.04,
    "vMa5": 2137,
    "vMa10": 1697,
    "maxVol10d": 3141,
    "hasVolumeBurst": true,
    "high5d": 10.11,
    "high10d": 10.13,
    "high20d": 10.13,
    "sparkline": [
      10.11,
      10.09,
      10.09,
      10.1,
      10.1,
      10.08,
      10.09,
      10.07,
      10.02,
      10.0
    ],
    "kd": {
      "k": 26.9,
      "d": 42.3,
      "prevK": 32.6,
      "prevD": 50.1,
      "h8": 10.11,
      "l8": 10.01
    },
    "k5d": [
      {
        "open": 10.1,
        "high": 10.11,
        "low": 10.08,
        "close": 10.08,
        "volume": 2150,
        "ma5": 10.09,
        "ma10": 10.09
      },
      {
        "open": 10.1,
        "high": 10.11,
        "low": 10.08,
        "close": 10.09,
        "volume": 808,
        "ma5": 10.09,
        "ma10": 10.09
      },
      {
        "open": 10.1,
        "high": 10.1,
        "low": 10.06,
        "close": 10.07,
        "volume": 3141,
        "ma5": 10.09,
        "ma10": 10.09
      },
      {
        "open": 10.06,
        "high": 10.06,
        "low": 10.01,
        "close": 10.02,
        "volume": 1652,
        "ma5": 10.07,
        "ma10": 10.09
      },
      {
        "open": 10.01,
        "high": 10.01,
        "low": 9.98,
        "close": 10.0,
        "volume": 2932,
        "ma5": 10.05,
        "ma10": 10.08
      }
    ],
    "symbol": "00990B.TWO"
  },
  {
    "code": "5475",
    "name": "德宏",
    "categories": [
      "TurnoverRate"
    ],
    "price": 182.5,
    "prevClose": 169.0,
    "open": 175.5,
    "high": 184.0,
    "low": 174.0,
    "volume": 4260,
    "ma5": 166.7,
    "ma10": 146.45,
    "ma20": 136.53,
    "ma60": 204.37,
    "vMa5": 14753,
    "vMa10": 11501,
    "maxVol10d": 27404,
    "hasVolumeBurst": true,
    "high5d": 184.0,
    "high10d": 184.0,
    "high20d": 184.0,
    "sparkline": [
      124.5,
      123.0,
      123.5,
      125.0,
      135.0,
      148.5,
      163.0,
      170.5,
      169.0,
      182.5
    ],
    "kd": {
      "k": 87.7,
      "d": 78.3,
      "prevK": 82.7,
      "prevD": 73.6,
      "h8": 179.0,
      "l8": 119.0
    },
    "k5d": [
      {
        "open": 136.0,
        "high": 148.5,
        "low": 136.0,
        "close": 148.5,
        "volume": 15152,
        "ma5": 131.0,
        "ma10": 124.75
      },
      {
        "open": 157.5,
        "high": 163.0,
        "low": 148.5,
        "close": 163.0,
        "volume": 24112,
        "ma5": 139.0,
        "ma10": 130.95
      },
      {
        "open": 167.0,
        "high": 179.0,
        "low": 166.0,
        "close": 170.5,
        "volume": 27404,
        "ma5": 148.4,
        "ma10": 136.9
      },
      {
        "open": 170.5,
        "high": 170.5,
        "low": 157.5,
        "close": 169.0,
        "volume": 2834,
        "ma5": 157.2,
        "ma10": 141.6
      },
      {
        "open": 175.5,
        "high": 184.0,
        "low": 174.0,
        "close": 182.5,
        "volume": 4260,
        "ma5": 166.7,
        "ma10": 146.45
      }
    ],
    "symbol": "5475.TWO"
  },
  {
    "code": "00781B",
    "name": "國泰A級科技債",
    "categories": [
      "TurnoverRate"
    ],
    "price": 26.87,
    "prevClose": 27.12,
    "open": 26.99,
    "high": 26.99,
    "low": 26.83,
    "volume": 271,
    "ma5": 27.24,
    "ma10": 27.47,
    "ma20": 27.59,
    "ma60": 28.2,
    "vMa5": 237,
    "vMa10": 210,
    "maxVol10d": 343,
    "hasVolumeBurst": true,
    "high5d": 27.46,
    "high10d": 27.97,
    "high20d": 28.03,
    "sparkline": [
      27.92,
      27.88,
      27.65,
      27.66,
      27.4,
      27.4,
      27.44,
      27.38,
      27.12,
      26.87
    ],
    "kd": {
      "k": 10.3,
      "d": 20.1,
      "prevK": 13.5,
      "prevD": 24.9,
      "h8": 27.88,
      "l8": 27.09
    },
    "k5d": [
      {
        "open": 27.41,
        "high": 27.43,
        "low": 27.4,
        "close": 27.4,
        "volume": 343,
        "ma5": 27.6,
        "ma10": 27.61
      },
      {
        "open": 27.41,
        "high": 27.44,
        "low": 27.41,
        "close": 27.44,
        "volume": 198,
        "ma5": 27.51,
        "ma10": 27.62
      },
      {
        "open": 27.46,
        "high": 27.46,
        "low": 27.38,
        "close": 27.38,
        "volume": 141,
        "ma5": 27.46,
        "ma10": 27.59
      },
      {
        "open": 27.24,
        "high": 27.24,
        "low": 27.09,
        "close": 27.12,
        "volume": 231,
        "ma5": 27.35,
        "ma10": 27.55
      },
      {
        "open": 26.99,
        "high": 26.99,
        "low": 26.83,
        "close": 26.87,
        "volume": 271,
        "ma5": 27.24,
        "ma10": 27.47
      }
    ],
    "symbol": "00781B.TWO"
  },
  {
    "code": "00799B",
    "name": "國泰A級醫療債",
    "categories": [
      "TurnoverRate"
    ],
    "price": 28.24,
    "prevClose": 28.94,
    "open": 28.54,
    "high": 28.54,
    "low": 28.22,
    "volume": 747,
    "ma5": 28.96,
    "ma10": 29.2,
    "ma20": 29.38,
    "ma60": 29.65,
    "vMa5": 314,
    "vMa10": 286,
    "maxVol10d": 747,
    "hasVolumeBurst": true,
    "high5d": 29.25,
    "high10d": 30.06,
    "high20d": 30.06,
    "sparkline": [
      29.62,
      29.56,
      29.35,
      29.43,
      29.23,
      29.24,
      29.21,
      29.16,
      28.94,
      28.24
    ],
    "kd": {
      "k": 2.7,
      "d": 6.4,
      "prevK": 3.3,
      "prevD": 8.2,
      "h8": 29.6,
      "l8": 28.93
    },
    "k5d": [
      {
        "open": 29.23,
        "high": 29.24,
        "low": 29.23,
        "close": 29.24,
        "volume": 149,
        "ma5": 29.36,
        "ma10": 29.43
      },
      {
        "open": 29.23,
        "high": 29.24,
        "low": 29.21,
        "close": 29.21,
        "volume": 166,
        "ma5": 29.29,
        "ma10": 29.41
      },
      {
        "open": 29.24,
        "high": 29.25,
        "low": 29.16,
        "close": 29.16,
        "volume": 225,
        "ma5": 29.25,
        "ma10": 29.37
      },
      {
        "open": 29.02,
        "high": 29.02,
        "low": 28.93,
        "close": 28.94,
        "volume": 285,
        "ma5": 29.16,
        "ma10": 29.32
      },
      {
        "open": 28.54,
        "high": 28.54,
        "low": 28.22,
        "close": 28.24,
        "volume": 747,
        "ma5": 28.96,
        "ma10": 29.2
      }
    ],
    "symbol": "00799B.TWO"
  },
  {
    "code": "4416",
    "name": "三圓",
    "categories": [
      "TurnoverRate"
    ],
    "price": 12.25,
    "prevClose": 11.15,
    "open": 11.25,
    "high": 12.25,
    "low": 11.25,
    "volume": 2177,
    "ma5": 11.01,
    "ma10": 10.75,
    "ma20": 10.56,
    "ma60": 10.82,
    "vMa5": 1083,
    "vMa10": 622,
    "maxVol10d": 2177,
    "hasVolumeBurst": true,
    "high5d": 12.25,
    "high10d": 12.25,
    "high20d": 12.25,
    "sparkline": [
      10.3,
      10.6,
      10.55,
      10.55,
      10.45,
      10.45,
      10.35,
      10.85,
      11.15,
      12.25
    ],
    "kd": {
      "k": 74.0,
      "d": 60.1,
      "prevK": 61.0,
      "prevD": 53.1,
      "h8": 11.35,
      "l8": 10.25
    },
    "k5d": [
      {
        "open": 10.45,
        "high": 10.6,
        "low": 10.4,
        "close": 10.45,
        "volume": 159,
        "ma5": 10.52,
        "ma10": 10.39
      },
      {
        "open": 10.45,
        "high": 10.55,
        "low": 10.3,
        "close": 10.35,
        "volume": 118,
        "ma5": 10.47,
        "ma10": 10.4
      },
      {
        "open": 11.0,
        "high": 11.35,
        "low": 10.85,
        "close": 10.85,
        "volume": 1765,
        "ma5": 10.53,
        "ma10": 10.47
      },
      {
        "open": 10.9,
        "high": 11.25,
        "low": 10.75,
        "close": 11.15,
        "volume": 1194,
        "ma5": 10.65,
        "ma10": 10.55
      },
      {
        "open": 11.25,
        "high": 12.25,
        "low": 11.25,
        "close": 12.25,
        "volume": 2177,
        "ma5": 11.01,
        "ma10": 10.75
      }
    ],
    "symbol": "4416.TWO"
  }
];