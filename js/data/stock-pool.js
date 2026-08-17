/**
 * 台股盤中波段選股工具 - 數據庫
 * 資料日期：日 K 線歷史基底與均線數據 (精確昨收與漲跌點數)
 */

// 1. 0050 最新 50 持股名單
const HOLDINGS_0050 = {
  "date": "2026/08/14",
  "sourceName": "0050 官方成分股",
  "sourceUrl": "https://www.moneydj.com/ETF/X/Basic/Basic0007B.xdjhtm?etfid=0050.TW",
  "stocks": [
    {
      "code": "2330",
      "name": "台積電",
      "weight": "57.28%"
    },
    {
      "code": "2454",
      "name": "聯發科",
      "weight": "6.07%"
    },
    {
      "code": "2308",
      "name": "台達電",
      "weight": "3.56%"
    },
    {
      "code": "2317",
      "name": "鴻海",
      "weight": "3.10%"
    },
    {
      "code": "3711",
      "name": "日月光投控",
      "weight": "2.00%"
    },
    {
      "code": "2383",
      "name": "台光電",
      "weight": "1.75%"
    },
    {
      "code": "2303",
      "name": "聯電",
      "weight": "1.38%"
    },
    {
      "code": "3037",
      "name": "欣興",
      "weight": "1.32%"
    },
    {
      "code": "2891",
      "name": "中信金",
      "weight": "1.14%"
    },
    {
      "code": "2345",
      "name": "智邦",
      "weight": "1.12%"
    },
    {
      "code": "2881",
      "name": "富邦金",
      "weight": "1.06%"
    },
    {
      "code": "3017",
      "name": "奇鋐",
      "weight": "1.01%"
    },
    {
      "code": "1303",
      "name": "南亞",
      "weight": "1.00%"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "weight": "0.96%"
    },
    {
      "code": "2882",
      "name": "國泰金",
      "weight": "0.95%"
    },
    {
      "code": "2887",
      "name": "台新新光金",
      "weight": "0.87%"
    },
    {
      "code": "2382",
      "name": "廣達",
      "weight": "0.85%"
    },
    {
      "code": "2360",
      "name": "致茂",
      "weight": "0.83%"
    },
    {
      "code": "2885",
      "name": "元大金",
      "weight": "0.75%"
    },
    {
      "code": "2059",
      "name": "川湖",
      "weight": "0.67%"
    },
    {
      "code": "2357",
      "name": "華碩",
      "weight": "0.66%"
    },
    {
      "code": "6669",
      "name": "緯穎",
      "weight": "0.65%"
    },
    {
      "code": "3231",
      "name": "緯創",
      "weight": "0.57%"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "weight": "0.57%"
    },
    {
      "code": "2344",
      "name": "華邦電",
      "weight": "0.56%"
    },
    {
      "code": "2884",
      "name": "玉山金",
      "weight": "0.56%"
    },
    {
      "code": "2886",
      "name": "兆豐金",
      "weight": "0.55%"
    },
    {
      "code": "2890",
      "name": "永豐金",
      "weight": "0.52%"
    },
    {
      "code": "2301",
      "name": "光寶科",
      "weight": "0.51%"
    },
    {
      "code": "2412",
      "name": "中華電",
      "weight": "0.50%"
    },
    {
      "code": "2883",
      "name": "凱基金",
      "weight": "0.49%"
    },
    {
      "code": "3443",
      "name": "創意",
      "weight": "0.43%"
    },
    {
      "code": "3008",
      "name": "大立光",
      "weight": "0.42%"
    },
    {
      "code": "3653",
      "name": "健策",
      "weight": "0.41%"
    },
    {
      "code": "3665",
      "name": "貿聯-KY",
      "weight": "0.39%"
    },
    {
      "code": "7769",
      "name": "鴻勁",
      "weight": "0.37%"
    },
    {
      "code": "4958",
      "name": "臻鼎-KY",
      "weight": "0.37%"
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
      "code": "2880",
      "name": "華南金",
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
      "weight": "0.33%"
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
  "date": "08/17",
  "sourceName": "成交量排行",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_BE_0_1.djhtm",
  "stocks": [
    {
      "code": "2409",
      "name": "友達",
      "volume": 294735,
      "market": "上市"
    },
    {
      "code": "00403A",
      "name": "主動統一升級50",
      "volume": 270983,
      "market": "上市"
    },
    {
      "code": "2324",
      "name": "仁寶",
      "volume": 263419,
      "market": "上市"
    },
    {
      "code": "6770",
      "name": "力積電",
      "volume": 259955,
      "market": "上市"
    },
    {
      "code": "3481",
      "name": "群創",
      "volume": 248739,
      "market": "上市"
    },
    {
      "code": "00981A",
      "name": "主動統一台股增長",
      "volume": 211159,
      "market": "上市"
    },
    {
      "code": "00685L",
      "name": "群益臺灣加權正2",
      "volume": 169800,
      "market": "上市"
    },
    {
      "code": "00878",
      "name": "國泰永續高股息",
      "volume": 168685,
      "market": "上市"
    },
    {
      "code": "00631L",
      "name": "元大台灣50正2",
      "volume": 145512,
      "market": "上市"
    },
    {
      "code": "1303",
      "name": "南亞",
      "volume": 139718,
      "market": "上市"
    },
    {
      "code": "2634",
      "name": "漢翔",
      "volume": 134348,
      "market": "上市"
    },
    {
      "code": "00632R",
      "name": "元大台灣50反1",
      "volume": 131329,
      "market": "上市"
    },
    {
      "code": "2344",
      "name": "華邦電",
      "volume": 128521,
      "market": "上市"
    },
    {
      "code": "00881",
      "name": "國泰台灣科技龍頭",
      "volume": 126800,
      "market": "上市"
    },
    {
      "code": "00991A",
      "name": "主動復華未來50",
      "volume": 126517,
      "market": "上市"
    },
    {
      "code": "00961",
      "name": "FT臺灣永續高息",
      "volume": 108922,
      "market": "上市"
    },
    {
      "code": "2609",
      "name": "陽明",
      "volume": 97224,
      "market": "上市"
    },
    {
      "code": "009816",
      "name": "凱基台灣TOP50",
      "volume": 93647,
      "market": "上市"
    },
    {
      "code": "00405A",
      "name": "主動富邦台灣龍耀",
      "volume": 90836,
      "market": "上市"
    },
    {
      "code": "2887",
      "name": "台新新光金",
      "volume": 78732,
      "market": "上市"
    },
    {
      "code": "2337",
      "name": "旺宏",
      "volume": 74330,
      "market": "上市"
    },
    {
      "code": "2303",
      "name": "聯電",
      "volume": 67357,
      "market": "上市"
    },
    {
      "code": "00953B",
      "name": "群益優選非投等債",
      "volume": 65281,
      "market": "上市"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "volume": 62243,
      "market": "上市"
    },
    {
      "code": "00400A",
      "name": "主動國泰動能高息",
      "volume": 60834,
      "market": "上市"
    },
    {
      "code": "0050",
      "name": "元大台灣50",
      "volume": 58016,
      "market": "上市"
    },
    {
      "code": "00407A",
      "name": "主動凱基台灣",
      "volume": 57813,
      "market": "上市"
    },
    {
      "code": "00992A",
      "name": "主動群益科技創新",
      "volume": 56481,
      "market": "上市"
    },
    {
      "code": "2884",
      "name": "玉山金",
      "volume": 56021,
      "market": "上市"
    },
    {
      "code": "00919",
      "name": "群益台灣精選高息",
      "volume": 55708,
      "market": "上市"
    },
    {
      "code": "3037",
      "name": "欣興",
      "volume": 53834,
      "market": "上市"
    },
    {
      "code": "00891",
      "name": "中信關鍵半導體",
      "volume": 53279,
      "market": "上市"
    },
    {
      "code": "2886",
      "name": "兆豐金",
      "volume": 53106,
      "market": "上市"
    },
    {
      "code": "2883",
      "name": "凱基金",
      "volume": 52124,
      "market": "上市"
    },
    {
      "code": "3231",
      "name": "緯創",
      "volume": 51873,
      "market": "上市"
    },
    {
      "code": "00929",
      "name": "復華台灣科技優息",
      "volume": 51471,
      "market": "上市"
    },
    {
      "code": "2615",
      "name": "萬海",
      "volume": 49767,
      "market": "上市"
    },
    {
      "code": "2890",
      "name": "永豐金",
      "volume": 48300,
      "market": "上市"
    },
    {
      "code": "2880",
      "name": "華南金",
      "volume": 46041,
      "market": "上市"
    },
    {
      "code": "2618",
      "name": "長榮航",
      "volume": 45855,
      "market": "上市"
    },
    {
      "code": "2892",
      "name": "第一金",
      "volume": 45847,
      "market": "上市"
    },
    {
      "code": "4958",
      "name": "臻鼎-KY",
      "volume": 45341,
      "market": "上市"
    },
    {
      "code": "2027",
      "name": "大成鋼",
      "volume": 43019,
      "market": "上市"
    },
    {
      "code": "00406A",
      "name": "主動中信台灣收益",
      "volume": 42461,
      "market": "上市"
    },
    {
      "code": "2323",
      "name": "中環",
      "volume": 38380,
      "market": "上市"
    },
    {
      "code": "2603",
      "name": "長榮",
      "volume": 38361,
      "market": "上市"
    },
    {
      "code": "3189",
      "name": "景碩",
      "volume": 38323,
      "market": "上市"
    },
    {
      "code": "9105",
      "name": "泰金寶-DR",
      "volume": 37949,
      "market": "上市"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "volume": 36648,
      "market": "上市"
    },
    {
      "code": "2353",
      "name": "宏碁",
      "volume": 36593,
      "market": "上市"
    },
    {
      "code": "00937B",
      "name": "群益ESG投等債20+",
      "volume": 111472,
      "market": "上櫃"
    },
    {
      "code": "6182",
      "name": "合晶",
      "volume": 84401,
      "market": "上櫃"
    },
    {
      "code": "6147",
      "name": "頎邦",
      "volume": 32977,
      "market": "上櫃"
    },
    {
      "code": "00981B",
      "name": "第一金優選非投債",
      "volume": 25411,
      "market": "上櫃"
    },
    {
      "code": "3105",
      "name": "穩懋",
      "volume": 25290,
      "market": "上櫃"
    },
    {
      "code": "00679B",
      "name": "元大美債20年",
      "volume": 23474,
      "market": "上櫃"
    },
    {
      "code": "5483",
      "name": "中美晶",
      "volume": 22605,
      "market": "上櫃"
    },
    {
      "code": "00933B",
      "name": "國泰10Y+金融債",
      "volume": 21053,
      "market": "上櫃"
    },
    {
      "code": "5371",
      "name": "中光電",
      "volume": 20875,
      "market": "上櫃"
    },
    {
      "code": "8358",
      "name": "金居",
      "volume": 19738,
      "market": "上櫃"
    },
    {
      "code": "3441",
      "name": "聯一光",
      "volume": 18938,
      "market": "上櫃"
    },
    {
      "code": "6173",
      "name": "信昌電",
      "volume": 18456,
      "market": "上櫃"
    },
    {
      "code": "5904",
      "name": "寶雅*",
      "volume": 14617,
      "market": "上櫃"
    },
    {
      "code": "6265",
      "name": "方土昶",
      "volume": 14301,
      "market": "上櫃"
    },
    {
      "code": "3374",
      "name": "精材",
      "volume": 13787,
      "market": "上櫃"
    },
    {
      "code": "1815",
      "name": "富喬",
      "volume": 11577,
      "market": "上櫃"
    },
    {
      "code": "3490",
      "name": "單井",
      "volume": 11424,
      "market": "上櫃"
    },
    {
      "code": "6488",
      "name": "環球晶",
      "volume": 10932,
      "market": "上櫃"
    },
    {
      "code": "00687B",
      "name": "國泰20年美債",
      "volume": 10774,
      "market": "上櫃"
    },
    {
      "code": "8069",
      "name": "元太",
      "volume": 10653,
      "market": "上櫃"
    },
    {
      "code": "5425",
      "name": "台半",
      "volume": 9714,
      "market": "上櫃"
    },
    {
      "code": "3388",
      "name": "崇越電",
      "volume": 9662,
      "market": "上櫃"
    },
    {
      "code": "00888",
      "name": "永豐台灣ESG",
      "volume": 9259,
      "market": "上櫃"
    },
    {
      "code": "5347",
      "name": "世界",
      "volume": 8739,
      "market": "上櫃"
    },
    {
      "code": "4541",
      "name": "晟田",
      "volume": 8156,
      "market": "上櫃"
    },
    {
      "code": "3498",
      "name": "陽程",
      "volume": 7989,
      "market": "上櫃"
    },
    {
      "code": "00720B",
      "name": "元大投資級公司債",
      "volume": 7599,
      "market": "上櫃"
    },
    {
      "code": "3362",
      "name": "先進光",
      "volume": 7591,
      "market": "上櫃"
    },
    {
      "code": "00981D",
      "name": "主動中信非投等債",
      "volume": 7528,
      "market": "上櫃"
    },
    {
      "code": "00751B",
      "name": "元大AAA至A公司債",
      "volume": 7312,
      "market": "上櫃"
    },
    {
      "code": "00988B",
      "name": "玉山嚴選非投債",
      "volume": 7111,
      "market": "上櫃"
    },
    {
      "code": "5351",
      "name": "鈺創",
      "volume": 6767,
      "market": "上櫃"
    },
    {
      "code": "6274",
      "name": "台燿",
      "volume": 6559,
      "market": "上櫃"
    },
    {
      "code": "3234",
      "name": "光環",
      "volume": 6043,
      "market": "上櫃"
    },
    {
      "code": "3707",
      "name": "漢磊",
      "volume": 5968,
      "market": "上櫃"
    },
    {
      "code": "5328",
      "name": "華容",
      "volume": 5771,
      "market": "上櫃"
    },
    {
      "code": "6163",
      "name": "華電網",
      "volume": 5508,
      "market": "上櫃"
    },
    {
      "code": "6187",
      "name": "萬潤",
      "volume": 5460,
      "market": "上櫃"
    },
    {
      "code": "00795B",
      "name": "中信美國公債20年",
      "volume": 5276,
      "market": "上櫃"
    },
    {
      "code": "6603",
      "name": "富強鑫",
      "volume": 5146,
      "market": "上櫃"
    },
    {
      "code": "3264",
      "name": "欣銓",
      "volume": 5100,
      "market": "上櫃"
    },
    {
      "code": "8086",
      "name": "宏捷科",
      "volume": 5068,
      "market": "上櫃"
    },
    {
      "code": "6179",
      "name": "亞通",
      "volume": 5019,
      "market": "上櫃"
    },
    {
      "code": "3260",
      "name": "威剛",
      "volume": 4939,
      "market": "上櫃"
    },
    {
      "code": "4510",
      "name": "高鋒",
      "volume": 4885,
      "market": "上櫃"
    },
    {
      "code": "4939",
      "name": "亞電",
      "volume": 4774,
      "market": "上櫃"
    },
    {
      "code": "8299",
      "name": "群聯",
      "volume": 4643,
      "market": "上櫃"
    },
    {
      "code": "6244",
      "name": "茂迪",
      "volume": 4569,
      "market": "上櫃"
    },
    {
      "code": "00985D",
      "name": "主動貝萊德優投等",
      "volume": 4434,
      "market": "上櫃"
    },
    {
      "code": "8096",
      "name": "擎亞",
      "volume": 4411,
      "market": "上櫃"
    }
  ]
};

const VALUE_TOP = {
  "date": "08/17",
  "sourceName": "成交值排行",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/Z/ZG/ZG_CD.djhtm",
  "stocks": [
    {
      "code": "3037",
      "name": "欣興",
      "amount": 59850940,
      "market": "上市"
    },
    {
      "code": "2454",
      "name": "聯發科",
      "amount": 43090307,
      "market": "上市"
    },
    {
      "code": "3189",
      "name": "景碩",
      "amount": 34802947,
      "market": "上市"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "amount": 32661333,
      "market": "上市"
    },
    {
      "code": "2330",
      "name": "台積電",
      "amount": 32423014,
      "market": "上市"
    },
    {
      "code": "1303",
      "name": "南亞",
      "amount": 28998372,
      "market": "上市"
    },
    {
      "code": "8046",
      "name": "南電",
      "amount": 25697974,
      "market": "上市"
    },
    {
      "code": "2308",
      "name": "台達電",
      "amount": 25504330,
      "market": "上市"
    },
    {
      "code": "2344",
      "name": "華邦電",
      "amount": 23698348,
      "market": "上市"
    },
    {
      "code": "4958",
      "name": "臻鼎-KY",
      "amount": 22872218,
      "market": "上市"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "amount": 22321084,
      "market": "上市"
    },
    {
      "code": "6770",
      "name": "力積電",
      "amount": 19726306,
      "market": "上市"
    },
    {
      "code": "3661",
      "name": "世芯-KY",
      "amount": 19431095,
      "market": "上市"
    },
    {
      "code": "3443",
      "name": "創意",
      "amount": 18495600,
      "market": "上市"
    },
    {
      "code": "3008",
      "name": "大立光",
      "amount": 16959807,
      "market": "上市"
    },
    {
      "code": "3711",
      "name": "日月光投控",
      "amount": 13240070,
      "market": "上市"
    },
    {
      "code": "3481",
      "name": "群創",
      "amount": 12500907,
      "market": "上市"
    },
    {
      "code": "2383",
      "name": "台光電",
      "amount": 12074118,
      "market": "上市"
    },
    {
      "code": "2324",
      "name": "仁寶",
      "amount": 11221361,
      "market": "上市"
    },
    {
      "code": "2382",
      "name": "廣達",
      "amount": 9921566,
      "market": "上市"
    },
    {
      "code": "3017",
      "name": "奇鋐",
      "amount": 9919034,
      "market": "上市"
    },
    {
      "code": "6669",
      "name": "緯穎",
      "amount": 9800401,
      "market": "上市"
    },
    {
      "code": "3231",
      "name": "緯創",
      "amount": 9720280,
      "market": "上市"
    },
    {
      "code": "2337",
      "name": "旺宏",
      "amount": 9678421,
      "market": "上市"
    },
    {
      "code": "2634",
      "name": "漢翔",
      "amount": 9404293,
      "market": "上市"
    },
    {
      "code": "2317",
      "name": "鴻海",
      "amount": 9136204,
      "market": "上市"
    },
    {
      "code": "2603",
      "name": "長榮",
      "amount": 8785051,
      "market": "上市"
    },
    {
      "code": "8039",
      "name": "台虹",
      "amount": 8571233,
      "market": "上市"
    },
    {
      "code": "2376",
      "name": "技嘉",
      "amount": 8355052,
      "market": "上市"
    },
    {
      "code": "2303",
      "name": "聯電",
      "amount": 8252017,
      "market": "上市"
    },
    {
      "code": "2409",
      "name": "友達",
      "amount": 7929883,
      "market": "上市"
    },
    {
      "code": "2492",
      "name": "華新科",
      "amount": 7846084,
      "market": "上市"
    },
    {
      "code": "6446",
      "name": "藥華藥",
      "amount": 7324902,
      "market": "上市"
    },
    {
      "code": "00881",
      "name": "國泰台灣科技龍頭",
      "amount": 6984719,
      "market": "上市"
    },
    {
      "code": "00981A",
      "name": "主動統一台股增長",
      "amount": 6421493,
      "market": "上市"
    },
    {
      "code": "3653",
      "name": "健策",
      "amount": 6395776,
      "market": "上市"
    },
    {
      "code": "2368",
      "name": "金像電",
      "amount": 6357898,
      "market": "上市"
    },
    {
      "code": "2301",
      "name": "光寶科",
      "amount": 6269715,
      "market": "上市"
    },
    {
      "code": "8033",
      "name": "雷虎",
      "amount": 6239984,
      "market": "上市"
    },
    {
      "code": "0050",
      "name": "元大台灣50",
      "amount": 6183538,
      "market": "上市"
    },
    {
      "code": "3532",
      "name": "台勝科",
      "amount": 5823135,
      "market": "上市"
    },
    {
      "code": "00878",
      "name": "國泰永續高股息",
      "amount": 5683251,
      "market": "上市"
    },
    {
      "code": "2455",
      "name": "全新",
      "amount": 5663138,
      "market": "上市"
    },
    {
      "code": "2345",
      "name": "智邦",
      "amount": 5517252,
      "market": "上市"
    },
    {
      "code": "3042",
      "name": "晶技",
      "amount": 5424773,
      "market": "上市"
    },
    {
      "code": "2357",
      "name": "華碩",
      "amount": 5340172,
      "market": "上市"
    },
    {
      "code": "2609",
      "name": "陽明",
      "amount": 5240868,
      "market": "上市"
    },
    {
      "code": "00631L",
      "name": "元大台灣50正2",
      "amount": 5236104,
      "market": "上市"
    },
    {
      "code": "6805",
      "name": "富世達",
      "amount": 4881890,
      "market": "上市"
    },
    {
      "code": "2615",
      "name": "萬海",
      "amount": 4847528,
      "market": "上市"
    },
    {
      "code": "6488",
      "name": "環球晶",
      "amount": 11409571,
      "market": "上櫃"
    },
    {
      "code": "6274",
      "name": "台燿",
      "amount": 10617487,
      "market": "上櫃"
    },
    {
      "code": "3105",
      "name": "穩懋",
      "amount": 10006724,
      "market": "上櫃"
    },
    {
      "code": "6182",
      "name": "合晶",
      "amount": 9931718,
      "market": "上櫃"
    },
    {
      "code": "8299",
      "name": "群聯",
      "amount": 9761613,
      "market": "上櫃"
    },
    {
      "code": "6223",
      "name": "旺矽",
      "amount": 8772289,
      "market": "上櫃"
    },
    {
      "code": "8358",
      "name": "金居",
      "amount": 8388407,
      "market": "上櫃"
    },
    {
      "code": "6187",
      "name": "萬潤",
      "amount": 7417891,
      "market": "上櫃"
    },
    {
      "code": "6147",
      "name": "頎邦",
      "amount": 5505335,
      "market": "上櫃"
    },
    {
      "code": "3081",
      "name": "聯亞",
      "amount": 4326151,
      "market": "上櫃"
    },
    {
      "code": "5483",
      "name": "中美晶",
      "amount": 4280741,
      "market": "上櫃"
    },
    {
      "code": "3374",
      "name": "精材",
      "amount": 4049546,
      "market": "上櫃"
    },
    {
      "code": "6173",
      "name": "信昌電",
      "amount": 4013922,
      "market": "上櫃"
    },
    {
      "code": "3529",
      "name": "力旺",
      "amount": 3470560,
      "market": "上櫃"
    },
    {
      "code": "5289",
      "name": "宜鼎",
      "amount": 2805006,
      "market": "上櫃"
    },
    {
      "code": "5274",
      "name": "信驊",
      "amount": 2503454,
      "market": "上櫃"
    },
    {
      "code": "3363",
      "name": "上詮",
      "amount": 2341904,
      "market": "上櫃"
    },
    {
      "code": "3260",
      "name": "威剛",
      "amount": 1978779,
      "market": "上櫃"
    },
    {
      "code": "6510",
      "name": "精測",
      "amount": 1915255,
      "market": "上櫃"
    },
    {
      "code": "5371",
      "name": "中光電",
      "amount": 1857041,
      "market": "上櫃"
    },
    {
      "code": "3491",
      "name": "昇達科",
      "amount": 1742360,
      "market": "上櫃"
    },
    {
      "code": "8069",
      "name": "元太",
      "amount": 1735581,
      "market": "上櫃"
    },
    {
      "code": "3441",
      "name": "聯一光",
      "amount": 1668521,
      "market": "上櫃"
    },
    {
      "code": "00937B",
      "name": "群益ESG投等債20+",
      "amount": 1607562,
      "market": "上櫃"
    },
    {
      "code": "6727",
      "name": "亞泰金屬",
      "amount": 1569980,
      "market": "上櫃"
    },
    {
      "code": "3324",
      "name": "雙鴻",
      "amount": 1535590,
      "market": "上櫃"
    },
    {
      "code": "3293",
      "name": "鈊象",
      "amount": 1423187,
      "market": "上櫃"
    },
    {
      "code": "5347",
      "name": "世界",
      "amount": 1409029,
      "market": "上櫃"
    },
    {
      "code": "3362",
      "name": "先進光",
      "amount": 1373666,
      "market": "上櫃"
    },
    {
      "code": "3211",
      "name": "順達",
      "amount": 1312998,
      "market": "上櫃"
    },
    {
      "code": "3498",
      "name": "陽程",
      "amount": 1290254,
      "market": "上櫃"
    },
    {
      "code": "7751",
      "name": "竑騰",
      "amount": 1259489,
      "market": "上櫃"
    },
    {
      "code": "3264",
      "name": "欣銓",
      "amount": 1138900,
      "market": "上櫃"
    },
    {
      "code": "5904",
      "name": "寶雅*",
      "amount": 1117549,
      "market": "上櫃"
    },
    {
      "code": "1815",
      "name": "富喬",
      "amount": 1092337,
      "market": "上櫃"
    },
    {
      "code": "5536",
      "name": "聖暉*",
      "amount": 1087384,
      "market": "上櫃"
    },
    {
      "code": "3131",
      "name": "弘塑",
      "amount": 1065189,
      "market": "上櫃"
    },
    {
      "code": "6265",
      "name": "方土昶",
      "amount": 946905,
      "market": "上櫃"
    },
    {
      "code": "3455",
      "name": "由田",
      "amount": 943228,
      "market": "上櫃"
    },
    {
      "code": "5351",
      "name": "鈺創",
      "amount": 902392,
      "market": "上櫃"
    },
    {
      "code": "4979",
      "name": "華星光",
      "amount": 888582,
      "market": "上櫃"
    },
    {
      "code": "3388",
      "name": "崇越電",
      "amount": 886214,
      "market": "上櫃"
    },
    {
      "code": "3234",
      "name": "光環",
      "amount": 879233,
      "market": "上櫃"
    },
    {
      "code": "5425",
      "name": "台半",
      "amount": 859712,
      "market": "上櫃"
    },
    {
      "code": "3163",
      "name": "波若威",
      "amount": 844970,
      "market": "上櫃"
    },
    {
      "code": "6683",
      "name": "雍智科技",
      "amount": 751523,
      "market": "上櫃"
    },
    {
      "code": "6584",
      "name": "南俊國際",
      "amount": 633345,
      "market": "上櫃"
    },
    {
      "code": "00679B",
      "name": "元大美債20年",
      "amount": 612197,
      "market": "上櫃"
    },
    {
      "code": "8086",
      "name": "宏捷科",
      "amount": 603312,
      "market": "上櫃"
    },
    {
      "code": "4541",
      "name": "晟田",
      "amount": 594070,
      "market": "上櫃"
    }
  ]
};

const SITCA_BUY_3D = {
  "date": "08/17",
  "sourceName": "投信買超排行",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/z/zg/zg_DD_0_3.djhtm",
  "stocks": [
    {
      "code": "2887",
      "name": "台新新光金",
      "buyVol": 56244,
      "market": "上市"
    },
    {
      "code": "2883",
      "name": "凱基金",
      "buyVol": 51983,
      "market": "上市"
    },
    {
      "code": "2884",
      "name": "玉山金",
      "buyVol": 43021,
      "market": "上市"
    },
    {
      "code": "2890",
      "name": "永豐金",
      "buyVol": 31600,
      "market": "上市"
    },
    {
      "code": "2892",
      "name": "第一金",
      "buyVol": 31454,
      "market": "上市"
    },
    {
      "code": "2886",
      "name": "兆豐金",
      "buyVol": 24249,
      "market": "上市"
    },
    {
      "code": "5880",
      "name": "合庫金",
      "buyVol": 17749,
      "market": "上市"
    },
    {
      "code": "2880",
      "name": "華南金",
      "buyVol": 14184,
      "market": "上市"
    },
    {
      "code": "2885",
      "name": "元大金",
      "buyVol": 8747,
      "market": "上市"
    },
    {
      "code": "4938",
      "name": "和碩",
      "buyVol": 6692,
      "market": "上市"
    },
    {
      "code": "00900",
      "name": "富邦特選高股息30",
      "buyVol": 5000,
      "market": "上市"
    },
    {
      "code": "2633",
      "name": "台灣高鐵",
      "buyVol": 4535,
      "market": "上市"
    },
    {
      "code": "2542",
      "name": "興富發",
      "buyVol": 4304,
      "market": "上市"
    },
    {
      "code": "3532",
      "name": "台勝科",
      "buyVol": 3992,
      "market": "上市"
    },
    {
      "code": "8046",
      "name": "南電",
      "buyVol": 3956,
      "market": "上市"
    },
    {
      "code": "2610",
      "name": "華航",
      "buyVol": 3939,
      "market": "上市"
    },
    {
      "code": "2412",
      "name": "中華電",
      "buyVol": 3607,
      "market": "上市"
    },
    {
      "code": "2368",
      "name": "金像電",
      "buyVol": 3063,
      "market": "上市"
    },
    {
      "code": "8996",
      "name": "高力",
      "buyVol": 2948,
      "market": "上市"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "buyVol": 2205,
      "market": "上市"
    },
    {
      "code": "1402",
      "name": "遠東新",
      "buyVol": 2023,
      "market": "上市"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "buyVol": 1949,
      "market": "上市"
    },
    {
      "code": "2855",
      "name": "統一證",
      "buyVol": 1784,
      "market": "上市"
    },
    {
      "code": "2347",
      "name": "聯強",
      "buyVol": 1715,
      "market": "上市"
    },
    {
      "code": "4958",
      "name": "臻鼎-KY",
      "buyVol": 1554,
      "market": "上市"
    },
    {
      "code": "00980A",
      "name": "主動野村臺灣優選",
      "buyVol": 1415,
      "market": "上市"
    },
    {
      "code": "3044",
      "name": "健鼎",
      "buyVol": 1311,
      "market": "上市"
    },
    {
      "code": "4915",
      "name": "致伸",
      "buyVol": 1053,
      "market": "上市"
    },
    {
      "code": "3017",
      "name": "奇鋐",
      "buyVol": 964,
      "market": "上市"
    },
    {
      "code": "2105",
      "name": "正新",
      "buyVol": 927,
      "market": "上市"
    },
    {
      "code": "9904",
      "name": "寶成",
      "buyVol": 906,
      "market": "上市"
    },
    {
      "code": "2618",
      "name": "長榮航",
      "buyVol": 891,
      "market": "上市"
    },
    {
      "code": "2903",
      "name": "遠百",
      "buyVol": 858,
      "market": "上市"
    },
    {
      "code": "1102",
      "name": "亞泥",
      "buyVol": 639,
      "market": "上市"
    },
    {
      "code": "3026",
      "name": "禾伸堂",
      "buyVol": 631,
      "market": "上市"
    },
    {
      "code": "4551",
      "name": "智伸科",
      "buyVol": 600,
      "market": "上市"
    },
    {
      "code": "2464",
      "name": "盟立",
      "buyVol": 580,
      "market": "上市"
    },
    {
      "code": "8112",
      "name": "至上",
      "buyVol": 556,
      "market": "上市"
    },
    {
      "code": "6805",
      "name": "富世達",
      "buyVol": 484,
      "market": "上市"
    },
    {
      "code": "6442",
      "name": "光聖",
      "buyVol": 482,
      "market": "上市"
    },
    {
      "code": "3406",
      "name": "玉晶光",
      "buyVol": 478,
      "market": "上市"
    },
    {
      "code": "2377",
      "name": "微星",
      "buyVol": 454,
      "market": "上市"
    },
    {
      "code": "2492",
      "name": "華新科",
      "buyVol": 441,
      "market": "上市"
    },
    {
      "code": "9910",
      "name": "豐泰",
      "buyVol": 438,
      "market": "上市"
    },
    {
      "code": "2353",
      "name": "宏碁",
      "buyVol": 438,
      "market": "上市"
    },
    {
      "code": "3481",
      "name": "群創",
      "buyVol": 434,
      "market": "上市"
    },
    {
      "code": "2609",
      "name": "陽明",
      "buyVol": 421,
      "market": "上市"
    },
    {
      "code": "2486",
      "name": "一詮",
      "buyVol": 415,
      "market": "上市"
    },
    {
      "code": "8422",
      "name": "可寧衛*",
      "buyVol": 411,
      "market": "上市"
    },
    {
      "code": "2474",
      "name": "可成",
      "buyVol": 373,
      "market": "上市"
    },
    {
      "code": "3264",
      "name": "欣銓",
      "buyVol": 5900,
      "market": "上櫃"
    },
    {
      "code": "4979",
      "name": "華星光",
      "buyVol": 5340,
      "market": "上櫃"
    },
    {
      "code": "6187",
      "name": "萬潤",
      "buyVol": 2211,
      "market": "上櫃"
    },
    {
      "code": "6173",
      "name": "信昌電",
      "buyVol": 1922,
      "market": "上櫃"
    },
    {
      "code": "3211",
      "name": "順達",
      "buyVol": 1269,
      "market": "上櫃"
    },
    {
      "code": "3105",
      "name": "穩懋",
      "buyVol": 1137,
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
      "code": "6182",
      "name": "合晶",
      "buyVol": 514,
      "market": "上櫃"
    },
    {
      "code": "6488",
      "name": "環球晶",
      "buyVol": 410,
      "market": "上櫃"
    },
    {
      "code": "5483",
      "name": "中美晶",
      "buyVol": 333,
      "market": "上櫃"
    },
    {
      "code": "6693",
      "name": "廣閎科",
      "buyVol": 242,
      "market": "上櫃"
    },
    {
      "code": "8358",
      "name": "金居",
      "buyVol": 205,
      "market": "上櫃"
    },
    {
      "code": "6548",
      "name": "長科*",
      "buyVol": 160,
      "market": "上櫃"
    },
    {
      "code": "5904",
      "name": "寶雅*",
      "buyVol": 154,
      "market": "上櫃"
    },
    {
      "code": "3081",
      "name": "聯亞",
      "buyVol": 148,
      "market": "上櫃"
    },
    {
      "code": "6121",
      "name": "新普",
      "buyVol": 133,
      "market": "上櫃"
    },
    {
      "code": "3131",
      "name": "弘塑",
      "buyVol": 110,
      "market": "上櫃"
    },
    {
      "code": "3227",
      "name": "原相",
      "buyVol": 69,
      "market": "上櫃"
    },
    {
      "code": "3260",
      "name": "威剛",
      "buyVol": 66,
      "market": "上櫃"
    },
    {
      "code": "3491",
      "name": "昇達科",
      "buyVol": 57,
      "market": "上櫃"
    },
    {
      "code": "5274",
      "name": "信驊",
      "buyVol": 56,
      "market": "上櫃"
    },
    {
      "code": "6640",
      "name": "均華",
      "buyVol": 38,
      "market": "上櫃"
    },
    {
      "code": "8069",
      "name": "元太",
      "buyVol": 28,
      "market": "上櫃"
    },
    {
      "code": "3526",
      "name": "凡甲",
      "buyVol": 21,
      "market": "上櫃"
    },
    {
      "code": "4966",
      "name": "譜瑞-KY",
      "buyVol": 17,
      "market": "上櫃"
    },
    {
      "code": "3363",
      "name": "上詮",
      "buyVol": 13,
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
      "buyVol": 1,
      "market": "上櫃"
    },
    {
      "code": "3374",
      "name": "精材",
      "buyVol": 1,
      "market": "上櫃"
    },
    {
      "code": "2887",
      "name": "台新新光金",
      "buyVol": 71403,
      "market": "上市"
    },
    {
      "code": "2883",
      "name": "凱基金",
      "buyVol": 61513,
      "market": "上市"
    },
    {
      "code": "2884",
      "name": "玉山金",
      "buyVol": 43804,
      "market": "上市"
    },
    {
      "code": "2890",
      "name": "永豐金",
      "buyVol": 31728,
      "market": "上市"
    },
    {
      "code": "2886",
      "name": "兆豐金",
      "buyVol": 31309,
      "market": "上市"
    },
    {
      "code": "2892",
      "name": "第一金",
      "buyVol": 31171,
      "market": "上市"
    },
    {
      "code": "2880",
      "name": "華南金",
      "buyVol": 26739,
      "market": "上市"
    },
    {
      "code": "5880",
      "name": "合庫金",
      "buyVol": 18190,
      "market": "上市"
    },
    {
      "code": "4938",
      "name": "和碩",
      "buyVol": 10308,
      "market": "上市"
    },
    {
      "code": "2885",
      "name": "元大金",
      "buyVol": 8965,
      "market": "上市"
    },
    {
      "code": "2368",
      "name": "金像電",
      "buyVol": 6982,
      "market": "上市"
    },
    {
      "code": "1303",
      "name": "南亞",
      "buyVol": 5355,
      "market": "上市"
    },
    {
      "code": "2633",
      "name": "台灣高鐵",
      "buyVol": 5312,
      "market": "上市"
    },
    {
      "code": "2542",
      "name": "興富發",
      "buyVol": 5111,
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
      "buyVol": 4816,
      "market": "上市"
    },
    {
      "code": "2327",
      "name": "國巨*",
      "buyVol": 4560,
      "market": "上市"
    },
    {
      "code": "2610",
      "name": "華航",
      "buyVol": 4057,
      "market": "上市"
    },
    {
      "code": "2855",
      "name": "統一證",
      "buyVol": 3354,
      "market": "上市"
    },
    {
      "code": "8996",
      "name": "高力",
      "buyVol": 3342,
      "market": "上市"
    },
    {
      "code": "3026",
      "name": "禾伸堂",
      "buyVol": 2987,
      "market": "上市"
    },
    {
      "code": "3532",
      "name": "台勝科",
      "buyVol": 2702,
      "market": "上市"
    },
    {
      "code": "00980A",
      "name": "主動野村臺灣優選",
      "buyVol": 2376,
      "market": "上市"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "buyVol": 2311,
      "market": "上市"
    },
    {
      "code": "2603",
      "name": "長榮",
      "buyVol": 2215,
      "market": "上市"
    },
    {
      "code": "1402",
      "name": "遠東新",
      "buyVol": 2160,
      "market": "上市"
    },
    {
      "code": "6805",
      "name": "富世達",
      "buyVol": 2067,
      "market": "上市"
    },
    {
      "code": "2347",
      "name": "聯強",
      "buyVol": 1966,
      "market": "上市"
    },
    {
      "code": "3044",
      "name": "健鼎",
      "buyVol": 1762,
      "market": "上市"
    },
    {
      "code": "4915",
      "name": "致伸",
      "buyVol": 1691,
      "market": "上市"
    },
    {
      "code": "2412",
      "name": "中華電",
      "buyVol": 1662,
      "market": "上市"
    },
    {
      "code": "2492",
      "name": "華新科",
      "buyVol": 1550,
      "market": "上市"
    },
    {
      "code": "2382",
      "name": "廣達",
      "buyVol": 1541,
      "market": "上市"
    },
    {
      "code": "2903",
      "name": "遠百",
      "buyVol": 1438,
      "market": "上市"
    },
    {
      "code": "2618",
      "name": "長榮航",
      "buyVol": 1307,
      "market": "上市"
    },
    {
      "code": "2882",
      "name": "國泰金",
      "buyVol": 1280,
      "market": "上市"
    },
    {
      "code": "2301",
      "name": "光寶科",
      "buyVol": 1207,
      "market": "上市"
    },
    {
      "code": "2105",
      "name": "正新",
      "buyVol": 1115,
      "market": "上市"
    },
    {
      "code": "9904",
      "name": "寶成",
      "buyVol": 1101,
      "market": "上市"
    },
    {
      "code": "4551",
      "name": "智伸科",
      "buyVol": 970,
      "market": "上市"
    },
    {
      "code": "4904",
      "name": "遠傳",
      "buyVol": 945,
      "market": "上市"
    },
    {
      "code": "3017",
      "name": "奇鋐",
      "buyVol": 913,
      "market": "上市"
    },
    {
      "code": "3450",
      "name": "聯鈞",
      "buyVol": 898,
      "market": "上市"
    },
    {
      "code": "8112",
      "name": "至上",
      "buyVol": 768,
      "market": "上市"
    },
    {
      "code": "6442",
      "name": "光聖",
      "buyVol": 712,
      "market": "上市"
    },
    {
      "code": "00992A",
      "name": "主動群益科技創新",
      "buyVol": 700,
      "market": "上市"
    },
    {
      "code": "1717",
      "name": "長興",
      "buyVol": 613,
      "market": "上市"
    },
    {
      "code": "2308",
      "name": "台達電",
      "buyVol": 609,
      "market": "上市"
    },
    {
      "code": "2464",
      "name": "盟立",
      "buyVol": 580,
      "market": "上市"
    },
    {
      "code": "9910",
      "name": "豐泰",
      "buyVol": 526,
      "market": "上市"
    },
    {
      "code": "4979",
      "name": "華星光",
      "buyVol": 7488,
      "market": "上櫃"
    },
    {
      "code": "3264",
      "name": "欣銓",
      "buyVol": 6926,
      "market": "上櫃"
    },
    {
      "code": "3211",
      "name": "順達",
      "buyVol": 6855,
      "market": "上櫃"
    },
    {
      "code": "3105",
      "name": "穩懋",
      "buyVol": 2047,
      "market": "上櫃"
    },
    {
      "code": "6187",
      "name": "萬潤",
      "buyVol": 2026,
      "market": "上櫃"
    },
    {
      "code": "6173",
      "name": "信昌電",
      "buyVol": 1922,
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
      "code": "00740B",
      "name": "富邦全球投等債",
      "buyVol": 800,
      "market": "上櫃"
    },
    {
      "code": "5904",
      "name": "寶雅*",
      "buyVol": 759,
      "market": "上櫃"
    },
    {
      "code": "6182",
      "name": "合晶",
      "buyVol": 625,
      "market": "上櫃"
    },
    {
      "code": "5483",
      "name": "中美晶",
      "buyVol": 623,
      "market": "上櫃"
    },
    {
      "code": "5347",
      "name": "世界",
      "buyVol": 535,
      "market": "上櫃"
    },
    {
      "code": "3081",
      "name": "聯亞",
      "buyVol": 356,
      "market": "上櫃"
    },
    {
      "code": "6693",
      "name": "廣閎科",
      "buyVol": 242,
      "market": "上櫃"
    },
    {
      "code": "6548",
      "name": "長科*",
      "buyVol": 160,
      "market": "上櫃"
    },
    {
      "code": "6121",
      "name": "新普",
      "buyVol": 151,
      "market": "上櫃"
    },
    {
      "code": "5274",
      "name": "信驊",
      "buyVol": 118,
      "market": "上櫃"
    },
    {
      "code": "6510",
      "name": "精測",
      "buyVol": 103,
      "market": "上櫃"
    },
    {
      "code": "3131",
      "name": "弘塑",
      "buyVol": 99,
      "market": "上櫃"
    },
    {
      "code": "3491",
      "name": "昇達科",
      "buyVol": 91,
      "market": "上櫃"
    },
    {
      "code": "4749",
      "name": "新應材",
      "buyVol": 69,
      "market": "上櫃"
    },
    {
      "code": "00980D",
      "name": "主動聯博投等入息",
      "buyVol": 64,
      "market": "上櫃"
    },
    {
      "code": "3260",
      "name": "威剛",
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
      "code": "4123",
      "name": "晟德",
      "buyVol": 33,
      "market": "上櫃"
    },
    {
      "code": "006201",
      "name": "元大富櫃50",
      "buyVol": 20,
      "market": "上櫃"
    },
    {
      "code": "3526",
      "name": "凡甲",
      "buyVol": 20,
      "market": "上櫃"
    },
    {
      "code": "4966",
      "name": "譜瑞-KY",
      "buyVol": 17,
      "market": "上櫃"
    },
    {
      "code": "3363",
      "name": "上詮",
      "buyVol": 13,
      "market": "上櫃"
    },
    {
      "code": "6138",
      "name": "茂達",
      "buyVol": 8,
      "market": "上櫃"
    },
    {
      "code": "8436",
      "name": "大江",
      "buyVol": 8,
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
      "buyVol": 1,
      "market": "上櫃"
    }
  ]
};

const MAJOR_BUY_1D = {
  "date": "08/14",
  "sourceName": "主力買超近 1 日 (上市 Top 50 + 上櫃 Top 50)",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/Z/ZG/ZG_F.djhtm",
  "stocks": [
    {
      "code": "00403A",
      "name": "主動統一升級50",
      "buyVol": 225613,
      "market": "上市"
    },
    {
      "code": "6770",
      "name": "力積電",
      "buyVol": 135574,
      "market": "上市"
    },
    {
      "code": "2324",
      "name": "仁寶",
      "buyVol": 109967,
      "market": "上市"
    },
    {
      "code": "00981A",
      "name": "主動統一台股增長",
      "buyVol": 109778,
      "market": "上市"
    },
    {
      "code": "00407A",
      "name": "主動凱基台灣",
      "buyVol": 75072,
      "market": "上市"
    },
    {
      "code": "00631L",
      "name": "元大台灣50正2",
      "buyVol": 67829,
      "market": "上市"
    },
    {
      "code": "00685L",
      "name": "群益臺灣加權正2",
      "buyVol": 57520,
      "market": "上市"
    },
    {
      "code": "2344",
      "name": "華邦電",
      "buyVol": 53785,
      "market": "上市"
    },
    {
      "code": "00991A",
      "name": "主動復華未來50",
      "buyVol": 45967,
      "market": "上市"
    },
    {
      "code": "1303",
      "name": "南亞",
      "buyVol": 39589,
      "market": "上市"
    },
    {
      "code": "3481",
      "name": "群創",
      "buyVol": 34625,
      "market": "上市"
    },
    {
      "code": "2887",
      "name": "台新新光金",
      "buyVol": 34625,
      "market": "上市"
    },
    {
      "code": "00405A",
      "name": "主動富邦台灣龍耀",
      "buyVol": 31363,
      "market": "上市"
    },
    {
      "code": "0056",
      "name": "元大高股息",
      "buyVol": 28428,
      "market": "上市"
    },
    {
      "code": "009816",
      "name": "凱基台灣TOP50",
      "buyVol": 28343,
      "market": "上市"
    },
    {
      "code": "0050",
      "name": "元大台灣50",
      "buyVol": 27696,
      "market": "上市"
    },
    {
      "code": "00919",
      "name": "群益台灣精選高息",
      "buyVol": 24385,
      "market": "上市"
    },
    {
      "code": "00992A",
      "name": "主動群益科技創新",
      "buyVol": 23578,
      "market": "上市"
    },
    {
      "code": "2634",
      "name": "漢翔",
      "buyVol": 23513,
      "market": "上市"
    },
    {
      "code": "00400A",
      "name": "主動國泰動能高息",
      "buyVol": 21760,
      "market": "上市"
    },
    {
      "code": "9904",
      "name": "寶成",
      "buyVol": 14736,
      "market": "上市"
    },
    {
      "code": "2615",
      "name": "萬海",
      "buyVol": 12421,
      "market": "上市"
    },
    {
      "code": "9945",
      "name": "潤泰新",
      "buyVol": 12255,
      "market": "上市"
    },
    {
      "code": "2883",
      "name": "凱基金",
      "buyVol": 12211,
      "market": "上市"
    },
    {
      "code": "2356",
      "name": "英業達",
      "buyVol": 12079,
      "market": "上市"
    },
    {
      "code": "009820",
      "name": "元大納斯達克精選",
      "buyVol": 11652,
      "market": "上市"
    },
    {
      "code": "1102",
      "name": "亞泥",
      "buyVol": 11628,
      "market": "上市"
    },
    {
      "code": "00999A",
      "name": "主動野村臺灣高息",
      "buyVol": 11328,
      "market": "上市"
    },
    {
      "code": "9105",
      "name": "泰金寶-DR",
      "buyVol": 9960,
      "market": "上市"
    },
    {
      "code": "3706",
      "name": "神達",
      "buyVol": 8516,
      "market": "上市"
    },
    {
      "code": "1301",
      "name": "台塑",
      "buyVol": 8459,
      "market": "上市"
    },
    {
      "code": "2353",
      "name": "宏碁",
      "buyVol": 8075,
      "market": "上市"
    },
    {
      "code": "2323",
      "name": "中環",
      "buyVol": 7273,
      "market": "上市"
    },
    {
      "code": "0052",
      "name": "富邦科技",
      "buyVol": 7102,
      "market": "上市"
    },
    {
      "code": "4958",
      "name": "臻鼎-KY",
      "buyVol": 7036,
      "market": "上市"
    },
    {
      "code": "2337",
      "name": "旺宏",
      "buyVol": 6000,
      "market": "上市"
    },
    {
      "code": "2890",
      "name": "永豐金",
      "buyVol": 5943,
      "market": "上市"
    },
    {
      "code": "2603",
      "name": "長榮",
      "buyVol": 5686,
      "market": "上市"
    },
    {
      "code": "2884",
      "name": "玉山金",
      "buyVol": 5536,
      "market": "上市"
    },
    {
      "code": "2392",
      "name": "正崴",
      "buyVol": 5312,
      "market": "上市"
    },
    {
      "code": "2357",
      "name": "華碩",
      "buyVol": 5070,
      "market": "上市"
    },
    {
      "code": "009819",
      "name": "中信數據及電力",
      "buyVol": 4913,
      "market": "上市"
    },
    {
      "code": "2882",
      "name": "國泰金",
      "buyVol": 4845,
      "market": "上市"
    },
    {
      "code": "009821",
      "name": "野村稀土關鍵資源",
      "buyVol": 4631,
      "market": "上市"
    },
    {
      "code": "00402A",
      "name": "主動安聯美國科技",
      "buyVol": 4490,
      "market": "上市"
    },
    {
      "code": "00940",
      "name": "元大台灣價值高息",
      "buyVol": 4407,
      "market": "上市"
    },
    {
      "code": "2867",
      "name": "三商壽",
      "buyVol": 4007,
      "market": "上市"
    },
    {
      "code": "2892",
      "name": "第一金",
      "buyVol": 3938,
      "market": "上市"
    },
    {
      "code": "1319",
      "name": "東陽",
      "buyVol": 3684,
      "market": "上市"
    },
    {
      "code": "1504",
      "name": "東元",
      "buyVol": 3655,
      "market": "上市"
    },
    {
      "code": "6265",
      "name": "方土昶",
      "buyVol": 3322,
      "market": "上櫃"
    },
    {
      "code": "3498",
      "name": "陽程",
      "buyVol": 2256,
      "market": "上櫃"
    },
    {
      "code": "1815",
      "name": "富喬",
      "buyVol": 2183,
      "market": "上櫃"
    },
    {
      "code": "00888",
      "name": "永豐台灣ESG",
      "buyVol": 1235,
      "market": "上櫃"
    },
    {
      "code": "5347",
      "name": "世界",
      "buyVol": 1150,
      "market": "上櫃"
    },
    {
      "code": "5351",
      "name": "鈺創",
      "buyVol": 1120,
      "market": "上櫃"
    },
    {
      "code": "00955",
      "name": "中信日本商社",
      "buyVol": 1107,
      "market": "上櫃"
    },
    {
      "code": "1336",
      "name": "台翰",
      "buyVol": 959,
      "market": "上櫃"
    },
    {
      "code": "6015",
      "name": "宏遠證",
      "buyVol": 760,
      "market": "上櫃"
    },
    {
      "code": "5483",
      "name": "中美晶",
      "buyVol": 713,
      "market": "上櫃"
    },
    {
      "code": "6829",
      "name": "千附精密",
      "buyVol": 713,
      "market": "上櫃"
    },
    {
      "code": "3388",
      "name": "崇越電",
      "buyVol": 492,
      "market": "上櫃"
    },
    {
      "code": "6274",
      "name": "台燿",
      "buyVol": 449,
      "market": "上櫃"
    },
    {
      "code": "3490",
      "name": "單井",
      "buyVol": 447,
      "market": "上櫃"
    },
    {
      "code": "5864",
      "name": "致和證",
      "buyVol": 435,
      "market": "上櫃"
    },
    {
      "code": "8932",
      "name": "智通*",
      "buyVol": 433,
      "market": "上櫃"
    },
    {
      "code": "6727",
      "name": "亞泰金屬",
      "buyVol": 432,
      "market": "上櫃"
    },
    {
      "code": "6538",
      "name": "倉和",
      "buyVol": 430,
      "market": "上櫃"
    },
    {
      "code": "009815",
      "name": "大華美國MAG7+",
      "buyVol": 429,
      "market": "上櫃"
    },
    {
      "code": "7402",
      "name": "邑錡",
      "buyVol": 411,
      "market": "上櫃"
    },
    {
      "code": "4931",
      "name": "新盛力",
      "buyVol": 376,
      "market": "上櫃"
    },
    {
      "code": "6207",
      "name": "雷科",
      "buyVol": 299,
      "market": "上櫃"
    },
    {
      "code": "6488",
      "name": "環球晶",
      "buyVol": 296,
      "market": "上櫃"
    },
    {
      "code": "4533",
      "name": "協易機",
      "buyVol": 288,
      "market": "上櫃"
    },
    {
      "code": "6840",
      "name": "東研信超",
      "buyVol": 272,
      "market": "上櫃"
    },
    {
      "code": "6187",
      "name": "萬潤",
      "buyVol": 259,
      "market": "上櫃"
    },
    {
      "code": "6125",
      "name": "廣運",
      "buyVol": 257,
      "market": "上櫃"
    },
    {
      "code": "3230",
      "name": "錦明",
      "buyVol": 243,
      "market": "上櫃"
    },
    {
      "code": "5530",
      "name": "龍巖",
      "buyVol": 210,
      "market": "上櫃"
    },
    {
      "code": "4167",
      "name": "松瑞藥",
      "buyVol": 209,
      "market": "上櫃"
    },
    {
      "code": "6548",
      "name": "長科*",
      "buyVol": 199,
      "market": "上櫃"
    },
    {
      "code": "4991",
      "name": "環宇-KY",
      "buyVol": 196,
      "market": "上櫃"
    },
    {
      "code": "6026",
      "name": "福邦證",
      "buyVol": 185,
      "market": "上櫃"
    },
    {
      "code": "4716",
      "name": "大立",
      "buyVol": 183,
      "market": "上櫃"
    },
    {
      "code": "6716",
      "name": "應廣",
      "buyVol": 172,
      "market": "上櫃"
    },
    {
      "code": "3287",
      "name": "廣寰科",
      "buyVol": 155,
      "market": "上櫃"
    },
    {
      "code": "6510",
      "name": "精測",
      "buyVol": 152,
      "market": "上櫃"
    },
    {
      "code": "5309",
      "name": "系統電",
      "buyVol": 151,
      "market": "上櫃"
    },
    {
      "code": "7714",
      "name": "創泓科技",
      "buyVol": 149,
      "market": "上櫃"
    },
    {
      "code": "6234",
      "name": "高僑",
      "buyVol": 145,
      "market": "上櫃"
    },
    {
      "code": "6134",
      "name": "萬旭",
      "buyVol": 144,
      "market": "上櫃"
    },
    {
      "code": "3260",
      "name": "威剛",
      "buyVol": 142,
      "market": "上櫃"
    },
    {
      "code": "3580",
      "name": "友威科",
      "buyVol": 138,
      "market": "上櫃"
    },
    {
      "code": "6163",
      "name": "華電網",
      "buyVol": 136,
      "market": "上櫃"
    },
    {
      "code": "8942",
      "name": "森鉅",
      "buyVol": 133,
      "market": "上櫃"
    },
    {
      "code": "6143",
      "name": "振曜",
      "buyVol": 127,
      "market": "上櫃"
    },
    {
      "code": "1586",
      "name": "和勤",
      "buyVol": 125,
      "market": "上櫃"
    },
    {
      "code": "8027",
      "name": "鈦昇",
      "buyVol": 120,
      "market": "上櫃"
    },
    {
      "code": "7751",
      "name": "竑騰",
      "buyVol": 110,
      "market": "上櫃"
    },
    {
      "code": "3484",
      "name": "崧騰",
      "buyVol": 110,
      "market": "上櫃"
    },
    {
      "code": "00403A",
      "name": "主動統一升級50",
      "buyVol": 692052,
      "market": "上市"
    },
    {
      "code": "6770",
      "name": "力積電",
      "buyVol": 286794,
      "market": "上市"
    },
    {
      "code": "00981A",
      "name": "主動統一台股增長",
      "buyVol": 261582,
      "market": "上市"
    },
    {
      "code": "00631L",
      "name": "元大台灣50正2",
      "buyVol": 197029,
      "market": "上市"
    },
    {
      "code": "00685L",
      "name": "群益臺灣加權正2",
      "buyVol": 193762,
      "market": "上市"
    },
    {
      "code": "00407A",
      "name": "主動凱基台灣",
      "buyVol": 172233,
      "market": "上市"
    },
    {
      "code": "2324",
      "name": "仁寶",
      "buyVol": 170268,
      "market": "上市"
    },
    {
      "code": "00405A",
      "name": "主動富邦台灣龍耀",
      "buyVol": 97745,
      "market": "上市"
    },
    {
      "code": "00991A",
      "name": "主動復華未來50",
      "buyVol": 93407,
      "market": "上市"
    },
    {
      "code": "009816",
      "name": "凱基台灣TOP50",
      "buyVol": 92555,
      "market": "上市"
    },
    {
      "code": "0050",
      "name": "元大台灣50",
      "buyVol": 91592,
      "market": "上市"
    },
    {
      "code": "0056",
      "name": "元大高股息",
      "buyVol": 62343,
      "market": "上市"
    },
    {
      "code": "00400A",
      "name": "主動國泰動能高息",
      "buyVol": 61507,
      "market": "上市"
    },
    {
      "code": "00992A",
      "name": "主動群益科技創新",
      "buyVol": 54949,
      "market": "上市"
    },
    {
      "code": "2887",
      "name": "台新新光金",
      "buyVol": 49706,
      "market": "上市"
    },
    {
      "code": "1605",
      "name": "華新",
      "buyVol": 48680,
      "market": "上市"
    },
    {
      "code": "00919",
      "name": "群益台灣精選高息",
      "buyVol": 44745,
      "market": "上市"
    },
    {
      "code": "2356",
      "name": "英業達",
      "buyVol": 38885,
      "market": "上市"
    },
    {
      "code": "00999A",
      "name": "主動野村臺灣高息",
      "buyVol": 37357,
      "market": "上市"
    },
    {
      "code": "1303",
      "name": "南亞",
      "buyVol": 36891,
      "market": "上市"
    },
    {
      "code": "2634",
      "name": "漢翔",
      "buyVol": 33220,
      "market": "上市"
    },
    {
      "code": "009820",
      "name": "元大納斯達克精選",
      "buyVol": 27749,
      "market": "上市"
    },
    {
      "code": "3231",
      "name": "緯創",
      "buyVol": 27612,
      "market": "上市"
    },
    {
      "code": "0052",
      "name": "富邦科技",
      "buyVol": 25820,
      "market": "上市"
    },
    {
      "code": "2883",
      "name": "凱基金",
      "buyVol": 25797,
      "market": "上市"
    },
    {
      "code": "4938",
      "name": "和碩",
      "buyVol": 24853,
      "market": "上市"
    },
    {
      "code": "00940",
      "name": "元大台灣價值高息",
      "buyVol": 24433,
      "market": "上市"
    },
    {
      "code": "009821",
      "name": "野村稀土關鍵資源",
      "buyVol": 22270,
      "market": "上市"
    },
    {
      "code": "2353",
      "name": "宏碁",
      "buyVol": 19685,
      "market": "上市"
    },
    {
      "code": "2408",
      "name": "南亞科",
      "buyVol": 19652,
      "market": "上市"
    },
    {
      "code": "3706",
      "name": "神達",
      "buyVol": 18136,
      "market": "上市"
    },
    {
      "code": "00988A",
      "name": "主動統一全球創新",
      "buyVol": 15658,
      "market": "上市"
    },
    {
      "code": "2337",
      "name": "旺宏",
      "buyVol": 15583,
      "market": "上市"
    },
    {
      "code": "009819",
      "name": "中信數據及電力",
      "buyVol": 15479,
      "market": "上市"
    },
    {
      "code": "1301",
      "name": "台塑",
      "buyVol": 15266,
      "market": "上市"
    },
    {
      "code": "2027",
      "name": "大成鋼",
      "buyVol": 14863,
      "market": "上市"
    },
    {
      "code": "2615",
      "name": "萬海",
      "buyVol": 14143,
      "market": "上市"
    },
    {
      "code": "9945",
      "name": "潤泰新",
      "buyVol": 13182,
      "market": "上市"
    },
    {
      "code": "2376",
      "name": "技嘉",
      "buyVol": 13077,
      "market": "上市"
    },
    {
      "code": "1504",
      "name": "東元",
      "buyVol": 12654,
      "market": "上市"
    },
    {
      "code": "00990A",
      "name": "主動元大AI新經濟",
      "buyVol": 12353,
      "market": "上市"
    },
    {
      "code": "1513",
      "name": "中興電",
      "buyVol": 11766,
      "market": "上市"
    },
    {
      "code": "2542",
      "name": "興富發",
      "buyVol": 11490,
      "market": "上市"
    },
    {
      "code": "00402A",
      "name": "主動安聯美國科技",
      "buyVol": 11090,
      "market": "上市"
    },
    {
      "code": "9105",
      "name": "泰金寶-DR",
      "buyVol": 11089,
      "market": "上市"
    },
    {
      "code": "1717",
      "name": "長興",
      "buyVol": 10659,
      "market": "上市"
    },
    {
      "code": "2890",
      "name": "永豐金",
      "buyVol": 10573,
      "market": "上市"
    },
    {
      "code": "00982A",
      "name": "主動群益台灣強棒",
      "buyVol": 10290,
      "market": "上市"
    },
    {
      "code": "00993A",
      "name": "主動安聯台灣",
      "buyVol": 10148,
      "market": "上市"
    },
    {
      "code": "2377",
      "name": "微星",
      "buyVol": 10141,
      "market": "上市"
    },
    {
      "code": "00888",
      "name": "永豐台灣ESG",
      "buyVol": 8266,
      "market": "上櫃"
    },
    {
      "code": "6265",
      "name": "方土昶",
      "buyVol": 7674,
      "market": "上櫃"
    },
    {
      "code": "4979",
      "name": "華星光",
      "buyVol": 4819,
      "market": "上櫃"
    },
    {
      "code": "5347",
      "name": "世界",
      "buyVol": 4682,
      "market": "上櫃"
    },
    {
      "code": "5351",
      "name": "鈺創",
      "buyVol": 4502,
      "market": "上櫃"
    },
    {
      "code": "1815",
      "name": "富喬",
      "buyVol": 4147,
      "market": "上櫃"
    },
    {
      "code": "3260",
      "name": "威剛",
      "buyVol": 3758,
      "market": "上櫃"
    },
    {
      "code": "3498",
      "name": "陽程",
      "buyVol": 3667,
      "market": "上櫃"
    },
    {
      "code": "6488",
      "name": "環球晶",
      "buyVol": 3361,
      "market": "上櫃"
    },
    {
      "code": "00955",
      "name": "中信日本商社",
      "buyVol": 3343,
      "market": "上櫃"
    },
    {
      "code": "4931",
      "name": "新盛力",
      "buyVol": 3087,
      "market": "上櫃"
    },
    {
      "code": "6187",
      "name": "萬潤",
      "buyVol": 3014,
      "market": "上櫃"
    },
    {
      "code": "3234",
      "name": "光環",
      "buyVol": 2626,
      "market": "上櫃"
    },
    {
      "code": "6538",
      "name": "倉和",
      "buyVol": 2395,
      "market": "上櫃"
    },
    {
      "code": "3264",
      "name": "欣銓",
      "buyVol": 2267,
      "market": "上櫃"
    },
    {
      "code": "6244",
      "name": "茂迪",
      "buyVol": 2083,
      "market": "上櫃"
    },
    {
      "code": "3265",
      "name": "台星科",
      "buyVol": 1265,
      "market": "上櫃"
    },
    {
      "code": "00687B",
      "name": "國泰20年美債",
      "buyVol": 1158,
      "market": "上櫃"
    },
    {
      "code": "5864",
      "name": "致和證",
      "buyVol": 1112,
      "market": "上櫃"
    },
    {
      "code": "3707",
      "name": "漢磊",
      "buyVol": 1046,
      "market": "上櫃"
    },
    {
      "code": "3490",
      "name": "單井",
      "buyVol": 1040,
      "market": "上櫃"
    },
    {
      "code": "6829",
      "name": "千附精密",
      "buyVol": 997,
      "market": "上櫃"
    },
    {
      "code": "009815",
      "name": "大華美國MAG7+",
      "buyVol": 971,
      "market": "上櫃"
    },
    {
      "code": "4533",
      "name": "協易機",
      "buyVol": 903,
      "market": "上櫃"
    },
    {
      "code": "00877",
      "name": "復華中國5G",
      "buyVol": 901,
      "market": "上櫃"
    },
    {
      "code": "6603",
      "name": "富強鑫",
      "buyVol": 879,
      "market": "上櫃"
    },
    {
      "code": "1336",
      "name": "台翰",
      "buyVol": 850,
      "market": "上櫃"
    },
    {
      "code": "4147",
      "name": "中裕",
      "buyVol": 781,
      "market": "上櫃"
    },
    {
      "code": "6548",
      "name": "長科*",
      "buyVol": 774,
      "market": "上櫃"
    },
    {
      "code": "6015",
      "name": "宏遠證",
      "buyVol": 750,
      "market": "上櫃"
    },
    {
      "code": "6716",
      "name": "應廣",
      "buyVol": 748,
      "market": "上櫃"
    },
    {
      "code": "6207",
      "name": "雷科",
      "buyVol": 621,
      "market": "上櫃"
    },
    {
      "code": "6840",
      "name": "東研信超",
      "buyVol": 591,
      "market": "上櫃"
    },
    {
      "code": "3455",
      "name": "由田",
      "buyVol": 557,
      "market": "上櫃"
    },
    {
      "code": "8942",
      "name": "森鉅",
      "buyVol": 531,
      "market": "上櫃"
    },
    {
      "code": "6026",
      "name": "福邦證",
      "buyVol": 529,
      "market": "上櫃"
    },
    {
      "code": "8932",
      "name": "智通*",
      "buyVol": 520,
      "market": "上櫃"
    },
    {
      "code": "4707",
      "name": "磐亞",
      "buyVol": 505,
      "market": "上櫃"
    },
    {
      "code": "7402",
      "name": "邑錡",
      "buyVol": 436,
      "market": "上櫃"
    },
    {
      "code": "3211",
      "name": "順達",
      "buyVol": 407,
      "market": "上櫃"
    },
    {
      "code": "6125",
      "name": "廣運",
      "buyVol": 389,
      "market": "上櫃"
    },
    {
      "code": "00928",
      "name": "中信上櫃ESG30",
      "buyVol": 387,
      "market": "上櫃"
    },
    {
      "code": "6509",
      "name": "聚和",
      "buyVol": 378,
      "market": "上櫃"
    },
    {
      "code": "6217",
      "name": "中探針",
      "buyVol": 359,
      "market": "上櫃"
    },
    {
      "code": "6190",
      "name": "萬泰科",
      "buyVol": 342,
      "market": "上櫃"
    },
    {
      "code": "6727",
      "name": "亞泰金屬",
      "buyVol": 339,
      "market": "上櫃"
    },
    {
      "code": "3693",
      "name": "營邦",
      "buyVol": 330,
      "market": "上櫃"
    },
    {
      "code": "8064",
      "name": "東捷",
      "buyVol": 320,
      "market": "上櫃"
    },
    {
      "code": "5314",
      "name": "世紀*",
      "buyVol": 318,
      "market": "上櫃"
    },
    {
      "code": "6419",
      "name": "京晨科",
      "buyVol": 310,
      "market": "上櫃"
    }
  ]
};

const TURNOVER_RATE = {
  "date": "08/17",
  "sourceName": "週轉率排行",
  "sourceUrl": "https://fubon-ebrokerdj.fbs.com.tw/Z/ZG/ZG_BD.djhtm",
  "stocks": [
    {
      "code": "8033",
      "name": "雷虎",
      "turnoverRate": 19.21,
      "market": "上市"
    },
    {
      "code": "00961",
      "name": "FT臺灣永續高息",
      "turnoverRate": 17.94,
      "market": "上市"
    },
    {
      "code": "2634",
      "name": "漢翔",
      "turnoverRate": 14.26,
      "market": "上市"
    },
    {
      "code": "8039",
      "name": "台虹",
      "turnoverRate": 12.19,
      "market": "上市"
    },
    {
      "code": "2484",
      "name": "希華",
      "turnoverRate": 11.73,
      "market": "上市"
    },
    {
      "code": "2464",
      "name": "盟立",
      "turnoverRate": 10.52,
      "market": "上市"
    },
    {
      "code": "00657K",
      "name": "國泰日經225+U",
      "turnoverRate": 10.0,
      "market": "上市"
    },
    {
      "code": "6477",
      "name": "安集",
      "turnoverRate": 9.27,
      "market": "上市"
    },
    {
      "code": "2359",
      "name": "所羅門",
      "turnoverRate": 8.95,
      "market": "上市"
    },
    {
      "code": "3042",
      "name": "晶技",
      "turnoverRate": 8.91,
      "market": "上市"
    },
    {
      "code": "6214",
      "name": "精誠",
      "turnoverRate": 8.67,
      "market": "上市"
    },
    {
      "code": "2399",
      "name": "映泰",
      "turnoverRate": 8.35,
      "market": "上市"
    },
    {
      "code": "2426",
      "name": "鼎元",
      "turnoverRate": 8.1,
      "market": "上市"
    },
    {
      "code": "1810",
      "name": "和成",
      "turnoverRate": 7.9,
      "market": "上市"
    },
    {
      "code": "2455",
      "name": "全新",
      "turnoverRate": 7.38,
      "market": "上市"
    },
    {
      "code": "3189",
      "name": "景碩",
      "turnoverRate": 7.27,
      "market": "上市"
    },
    {
      "code": "6243",
      "name": "迅杰",
      "turnoverRate": 6.95,
      "market": "上市"
    },
    {
      "code": "8261",
      "name": "富鼎",
      "turnoverRate": 6.38,
      "market": "上市"
    },
    {
      "code": "6672",
      "name": "騰輝電子-KY",
      "turnoverRate": 6.31,
      "market": "上市"
    },
    {
      "code": "00686R",
      "name": "群益臺灣加權反1",
      "turnoverRate": 6.21,
      "market": "上市"
    },
    {
      "code": "00678",
      "name": "群益那斯達克生技",
      "turnoverRate": 6.2,
      "market": "上市"
    },
    {
      "code": "2630",
      "name": "亞航",
      "turnoverRate": 6.14,
      "market": "上市"
    },
    {
      "code": "2481",
      "name": "強茂",
      "turnoverRate": 6.11,
      "market": "上市"
    },
    {
      "code": "2324",
      "name": "仁寶",
      "turnoverRate": 5.98,
      "market": "上市"
    },
    {
      "code": "2465",
      "name": "麗臺",
      "turnoverRate": 5.73,
      "market": "上市"
    },
    {
      "code": "3406",
      "name": "玉晶光",
      "turnoverRate": 5.65,
      "market": "上市"
    },
    {
      "code": "6770",
      "name": "力積電",
      "turnoverRate": 5.57,
      "market": "上市"
    },
    {
      "code": "3661",
      "name": "世芯-KY",
      "turnoverRate": 5.53,
      "market": "上市"
    },
    {
      "code": "2492",
      "name": "華新科",
      "turnoverRate": 5.52,
      "market": "上市"
    },
    {
      "code": "4916",
      "name": "事欣科",
      "turnoverRate": 5.52,
      "market": "上市"
    },
    {
      "code": "3543",
      "name": "州巧",
      "turnoverRate": 5.39,
      "market": "上市"
    },
    {
      "code": "1515",
      "name": "力山",
      "turnoverRate": 5.26,
      "market": "上市"
    },
    {
      "code": "3229",
      "name": "晟鈦",
      "turnoverRate": 5.01,
      "market": "上市"
    },
    {
      "code": "6226",
      "name": "光鼎",
      "turnoverRate": 4.78,
      "market": "上市"
    },
    {
      "code": "00632R",
      "name": "元大台灣50反1",
      "turnoverRate": 4.77,
      "market": "上市"
    },
    {
      "code": "00881",
      "name": "國泰台灣科技龍頭",
      "turnoverRate": 4.69,
      "market": "上市"
    },
    {
      "code": "2493",
      "name": "揚博",
      "turnoverRate": 4.62,
      "market": "上市"
    },
    {
      "code": "6753",
      "name": "龍德造船",
      "turnoverRate": 4.56,
      "market": "上市"
    },
    {
      "code": "4540",
      "name": "全球傳動",
      "turnoverRate": 4.53,
      "market": "上市"
    },
    {
      "code": "4967",
      "name": "十銓",
      "turnoverRate": 4.45,
      "market": "上市"
    },
    {
      "code": "00984D",
      "name": "主動聯博全球非投",
      "turnoverRate": 4.41,
      "market": "上市"
    },
    {
      "code": "2425",
      "name": "承啟",
      "turnoverRate": 4.38,
      "market": "上市"
    },
    {
      "code": "00708L",
      "name": "期元大S＆P黃金正2",
      "turnoverRate": 4.36,
      "market": "上市"
    },
    {
      "code": "8150",
      "name": "南茂",
      "turnoverRate": 4.36,
      "market": "上市"
    },
    {
      "code": "4976",
      "name": "佳凌",
      "turnoverRate": 4.27,
      "market": "上市"
    },
    {
      "code": "006204",
      "name": "永豐臺灣加權",
      "turnoverRate": 4.26,
      "market": "上市"
    },
    {
      "code": "3605",
      "name": "宏致",
      "turnoverRate": 4.21,
      "market": "上市"
    },
    {
      "code": "00668",
      "name": "國泰美國道瓊",
      "turnoverRate": 4.19,
      "market": "上市"
    },
    {
      "code": "00676R",
      "name": "富邦臺灣加權反1",
      "turnoverRate": 4.13,
      "market": "上市"
    },
    {
      "code": "00964",
      "name": "中信亞太高股息",
      "turnoverRate": 4.09,
      "market": "上市"
    },
    {
      "code": "3441",
      "name": "聯一光",
      "turnoverRate": 47.3,
      "market": "上櫃"
    },
    {
      "code": "3490",
      "name": "單井",
      "turnoverRate": 20.77,
      "market": "上櫃"
    },
    {
      "code": "6182",
      "name": "合晶",
      "turnoverRate": 13.5,
      "market": "上櫃"
    },
    {
      "code": "3498",
      "name": "陽程",
      "turnoverRate": 13.04,
      "market": "上櫃"
    },
    {
      "code": "6727",
      "name": "亞泰金屬",
      "turnoverRate": 12.9,
      "market": "上櫃"
    },
    {
      "code": "3388",
      "name": "崇越電",
      "turnoverRate": 12.43,
      "market": "上櫃"
    },
    {
      "code": "6265",
      "name": "方土昶",
      "turnoverRate": 12.1,
      "market": "上櫃"
    },
    {
      "code": "4541",
      "name": "晟田",
      "turnoverRate": 12.06,
      "market": "上櫃"
    },
    {
      "code": "00859B",
      "name": "群益0-1年美債",
      "turnoverRate": 11.19,
      "market": "上櫃"
    },
    {
      "code": "6173",
      "name": "信昌電",
      "turnoverRate": 10.78,
      "market": "上櫃"
    },
    {
      "code": "6419",
      "name": "京晨科",
      "turnoverRate": 10.63,
      "market": "上櫃"
    },
    {
      "code": "7402",
      "name": "邑錡",
      "turnoverRate": 10.16,
      "market": "上櫃"
    },
    {
      "code": "8358",
      "name": "金居",
      "turnoverRate": 7.81,
      "market": "上櫃"
    },
    {
      "code": "3455",
      "name": "由田",
      "turnoverRate": 6.4,
      "market": "上櫃"
    },
    {
      "code": "6538",
      "name": "倉和",
      "turnoverRate": 6.0,
      "market": "上櫃"
    },
    {
      "code": "3105",
      "name": "穩懋",
      "turnoverRate": 5.97,
      "market": "上櫃"
    },
    {
      "code": "6187",
      "name": "萬潤",
      "turnoverRate": 5.56,
      "market": "上櫃"
    },
    {
      "code": "3234",
      "name": "光環",
      "turnoverRate": 5.42,
      "market": "上櫃"
    },
    {
      "code": "5371",
      "name": "中光電",
      "turnoverRate": 5.34,
      "market": "上櫃"
    },
    {
      "code": "00983B",
      "name": "大華優利美公債20",
      "turnoverRate": 5.29,
      "market": "上櫃"
    },
    {
      "code": "00989B",
      "name": "台新美國非投等債",
      "turnoverRate": 5.25,
      "market": "上櫃"
    },
    {
      "code": "3362",
      "name": "先進光",
      "turnoverRate": 5.15,
      "market": "上櫃"
    },
    {
      "code": "00988B",
      "name": "玉山嚴選非投債",
      "turnoverRate": 5.09,
      "market": "上櫃"
    },
    {
      "code": "3374",
      "name": "精材",
      "turnoverRate": 5.08,
      "market": "上櫃"
    },
    {
      "code": "4939",
      "name": "亞電",
      "turnoverRate": 4.86,
      "market": "上櫃"
    },
    {
      "code": "00860B",
      "name": "群益1-5Y投資級債",
      "turnoverRate": 4.83,
      "market": "上櫃"
    },
    {
      "code": "00847B",
      "name": "中信美國市政債",
      "turnoverRate": 4.79,
      "market": "上櫃"
    },
    {
      "code": "6259",
      "name": "百徽",
      "turnoverRate": 4.79,
      "market": "上櫃"
    },
    {
      "code": "00985D",
      "name": "主動貝萊德優投等",
      "turnoverRate": 4.63,
      "market": "上櫃"
    },
    {
      "code": "4510",
      "name": "高鋒",
      "turnoverRate": 4.48,
      "market": "上櫃"
    },
    {
      "code": "6147",
      "name": "頎邦",
      "turnoverRate": 4.43,
      "market": "上櫃"
    },
    {
      "code": "6829",
      "name": "千附精密",
      "turnoverRate": 3.95,
      "market": "上櫃"
    },
    {
      "code": "6530",
      "name": "創威",
      "turnoverRate": 3.92,
      "market": "上櫃"
    },
    {
      "code": "1336",
      "name": "台翰",
      "turnoverRate": 3.89,
      "market": "上櫃"
    },
    {
      "code": "6163",
      "name": "華電網",
      "turnoverRate": 3.7,
      "market": "上櫃"
    },
    {
      "code": "5425",
      "name": "台半",
      "turnoverRate": 3.69,
      "market": "上櫃"
    },
    {
      "code": "8383",
      "name": "千附",
      "turnoverRate": 3.61,
      "market": "上櫃"
    },
    {
      "code": "5483",
      "name": "中美晶",
      "turnoverRate": 3.53,
      "market": "上櫃"
    },
    {
      "code": "2061",
      "name": "風青",
      "turnoverRate": 3.52,
      "market": "上櫃"
    },
    {
      "code": "6218",
      "name": "豪勉",
      "turnoverRate": 3.42,
      "market": "上櫃"
    },
    {
      "code": "3363",
      "name": "上詮",
      "turnoverRate": 3.4,
      "market": "上櫃"
    },
    {
      "code": "5328",
      "name": "華容",
      "turnoverRate": 3.34,
      "market": "上櫃"
    },
    {
      "code": "3230",
      "name": "錦明",
      "turnoverRate": 3.29,
      "market": "上櫃"
    },
    {
      "code": "00695B",
      "name": "富邦美債7-10",
      "turnoverRate": 3.26,
      "market": "上櫃"
    },
    {
      "code": "3624",
      "name": "光頡",
      "turnoverRate": 3.24,
      "market": "上櫃"
    },
    {
      "code": "6840",
      "name": "東研信超",
      "turnoverRate": 3.22,
      "market": "上櫃"
    },
    {
      "code": "00842B",
      "name": "台新美元銀行債",
      "turnoverRate": 3.2,
      "market": "上櫃"
    },
    {
      "code": "4561",
      "name": "健椿",
      "turnoverRate": 3.17,
      "market": "上櫃"
    },
    {
      "code": "7751",
      "name": "竑騰",
      "turnoverRate": 3.11,
      "market": "上櫃"
    },
    {
      "code": "6603",
      "name": "富強鑫",
      "turnoverRate": 3.07,
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
    "price": 2400.0,
    "open": 2410.0,
    "high": 2420.0,
    "low": 2390.0,
    "prevClose": 2395.0,
    "volume": 13445,
    "ma5": 2408.0,
    "ma10": 2388.0,
    "ma20": 2363.75,
    "vMa5": 17440,
    "vMa10": 21885,
    "limitUpPrice": 2618.0,
    "categories": [
      "0050",
      "半導體-晶圓",
      "ValueTop"
    ],
    "sparkline": [
      2320.0,
      2405.0,
      2365.0,
      2370.0,
      2380.0,
      2395.0,
      2415.0,
      2435.0,
      2395.0,
      2400.0
    ],
    "ma60": 2376.5,
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
        "low": 2395.0,
        "close": 2395.0,
        "ma5": 2404.0,
        "ma10": 2385.0
      },
      {
        "open": 2410.0,
        "high": 2420.0,
        "low": 2390.0,
        "close": 2400.0,
        "ma5": 2408.0,
        "ma10": 2388.0
      }
    ],
    "symbol": "2330.TW",
    "maxVol10d": 35945,
    "hasVolumeBurst": false,
    "kd": {
      "k": 69.1,
      "d": 75.5,
      "prevK": 78.6,
      "prevD": 78.8,
      "h8": 2445.0,
      "l8": 2355.0
    }
  },
  {
    "code": "2454",
    "name": "聯發科",
    "price": 4050.0,
    "open": 4205.0,
    "high": 4225.0,
    "low": 4025.0,
    "prevClose": 4210.0,
    "volume": 10544,
    "ma5": 4104.0,
    "ma10": 4016.5,
    "ma20": 3807.75,
    "vMa5": 8672,
    "vMa10": 8894,
    "limitUpPrice": 4356.0,
    "categories": [
      "0050",
      "半導體-IC設計",
      "ValueTop"
    ],
    "sparkline": [
      3865.0,
      4000.0,
      3920.0,
      3900.0,
      3960.0,
      4020.0,
      4015.0,
      4225.0,
      4210.0,
      4050.0
    ],
    "ma60": 4056.08,
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
        "low": 4205.0,
        "close": 4210.0,
        "ma5": 4086.0,
        "ma10": 4002.5
      },
      {
        "open": 4205.0,
        "high": 4225.0,
        "low": 4025.0,
        "close": 4050.0,
        "ma5": 4104.0,
        "ma10": 4016.5
      }
    ],
    "symbol": "2454.TW",
    "maxVol10d": 15986,
    "hasVolumeBurst": true,
    "kd": {
      "k": 65.9,
      "d": 74.8,
      "prevK": 78.5,
      "prevD": 79.2,
      "h8": 4400.0,
      "l8": 3810.0
    }
  },
  {
    "code": "2317",
    "name": "鴻海",
    "price": 255.0,
    "open": 259.5,
    "high": 261.0,
    "low": 255.0,
    "prevClose": 259.5,
    "volume": 35438,
    "ma5": 261.9,
    "ma10": 260.7,
    "ma20": 253.78,
    "vMa5": 51887,
    "vMa10": 52177,
    "limitUpPrice": 290.95,
    "categories": [
      "0050",
      "ValueTop"
    ],
    "sparkline": [
      250.0,
      258.5,
      264.5,
      260.0,
      264.5,
      263.0,
      270.0,
      262.0,
      259.5,
      255.0
    ],
    "ma60": 257.12,
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
        "low": 257.5,
        "close": 259.5,
        "ma5": 263.8,
        "ma10": 260.5
      },
      {
        "open": 259.5,
        "high": 261.0,
        "low": 255.0,
        "close": 255.0,
        "ma5": 261.9,
        "ma10": 260.7
      }
    ],
    "symbol": "2317.TW",
    "maxVol10d": 92698,
    "hasVolumeBurst": true,
    "kd": {
      "k": 46.5,
      "d": 67.9,
      "prevK": 69.8,
      "prevD": 78.6,
      "h8": 274.5,
      "l8": 256.0
    }
  },
  {
    "code": "2308",
    "name": "台達電",
    "price": 1885.0,
    "open": 1950.0,
    "high": 2005.0,
    "low": 1885.0,
    "prevClose": 1885.0,
    "volume": 13172,
    "ma5": 1850.0,
    "ma10": 1766.5,
    "ma20": 1731.25,
    "vMa5": 13174,
    "vMa10": 12838,
    "limitUpPrice": 1996.5,
    "categories": [
      "0050",
      "ValueTop",
      "SitcaBuy",
      "SitcaBuy5D"
    ],
    "sparkline": [
      1620.0,
      1650.0,
      1680.0,
      1650.0,
      1815.0,
      1805.0,
      1790.0,
      1885.0,
      1885.0,
      1885.0
    ],
    "ma60": 1983.25,
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
        "low": 1865.0,
        "close": 1885.0,
        "ma5": 1836.0,
        "ma10": 1736.0
      },
      {
        "open": 1950.0,
        "high": 2005.0,
        "low": 1885.0,
        "close": 1885.0,
        "ma5": 1850.0,
        "ma10": 1766.5
      }
    ],
    "symbol": "2308.TW",
    "maxVol10d": 20203,
    "hasVolumeBurst": false,
    "kd": {
      "k": 77.1,
      "d": 75.6,
      "prevK": 81.4,
      "prevD": 74.8,
      "h8": 1975.0,
      "l8": 1625.0
    }
  },
  {
    "code": "2303",
    "name": "聯電",
    "price": 121.5,
    "open": 121.5,
    "high": 124.0,
    "low": 121.5,
    "prevClose": 121.0,
    "volume": 67192,
    "ma5": 122.6,
    "ma10": 121.4,
    "ma20": 122.25,
    "vMa5": 110082,
    "vMa10": 149074,
    "limitUpPrice": 135.3,
    "categories": [
      "0050",
      "Top100",
      "半導體-晶圓",
      "ValueTop"
    ],
    "sparkline": [
      118.5,
      122.0,
      121.5,
      116.0,
      123.0,
      123.0,
      123.0,
      124.5,
      121.0,
      121.5
    ],
    "ma60": 139.72,
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
        "close": 121.0,
        "ma5": 122.9,
        "ma10": 121.05
      },
      {
        "open": 121.5,
        "high": 124.0,
        "low": 121.5,
        "close": 121.5,
        "ma5": 122.6,
        "ma10": 121.4
      }
    ],
    "symbol": "2303.TW",
    "maxVol10d": 273650,
    "hasVolumeBurst": false,
    "kd": {
      "k": 52.7,
      "d": 56.1,
      "prevK": 56.3,
      "prevD": 57.8,
      "h8": 130.5,
      "l8": 114.0
    }
  },
  {
    "code": "3711",
    "name": "日月光投控",
    "price": 615.0,
    "open": 626.0,
    "high": 643.0,
    "low": 615.0,
    "prevClose": 616.0,
    "volume": 21206,
    "ma5": 621.4,
    "ma10": 609.5,
    "ma20": 598.85,
    "vMa5": 18313,
    "vMa10": 23075,
    "limitUpPrice": 693.0,
    "categories": [
      "0050",
      "半導體-封測",
      "ValueTop"
    ],
    "sparkline": [
      585.0,
      593.0,
      595.0,
      585.0,
      630.0,
      629.0,
      621.0,
      626.0,
      616.0,
      615.0
    ],
    "ma60": 618.55,
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
        "close": 616.0,
        "ma5": 624.4,
        "ma10": 609.0
      },
      {
        "open": 626.0,
        "high": 643.0,
        "low": 615.0,
        "close": 615.0,
        "ma5": 621.4,
        "ma10": 609.5
      }
    ],
    "symbol": "3711.TW",
    "maxVol10d": 50347,
    "hasVolumeBurst": true,
    "kd": {
      "k": 69.2,
      "d": 73.0,
      "prevK": 74.1,
      "prevD": 74.9,
      "h8": 641.0,
      "l8": 574.0
    }
  },
  {
    "code": "2449",
    "name": "京元電子",
    "price": 248.5,
    "open": 250.5,
    "high": 258.0,
    "low": 248.5,
    "prevClose": 247.0,
    "volume": 13479,
    "ma5": 250.8,
    "ma10": 248.6,
    "ma20": 246.75,
    "vMa5": 18876,
    "vMa10": 20796,
    "limitUpPrice": 273.35,
    "categories": [
      "0050",
      "半導體-封測"
    ],
    "sparkline": [
      245.5,
      247.0,
      249.0,
      242.0,
      248.5,
      246.0,
      259.0,
      253.5,
      247.0,
      248.5
    ],
    "ma60": 279.5,
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
        "low": 245.0,
        "close": 247.0,
        "ma5": 250.8,
        "ma10": 247.1
      },
      {
        "open": 250.5,
        "high": 258.0,
        "low": 248.5,
        "close": 248.5,
        "ma5": 250.8,
        "ma10": 248.6
      }
    ],
    "symbol": "2449.TW",
    "maxVol10d": 34302,
    "hasVolumeBurst": true,
    "kd": {
      "k": 63.4,
      "d": 68.1,
      "prevK": 72.1,
      "prevD": 70.5,
      "h8": 262.0,
      "l8": 237.0
    }
  },
  {
    "code": "3037",
    "name": "欣興",
    "price": 1120.0,
    "open": 1045.0,
    "high": 1120.0,
    "low": 1035.0,
    "prevClose": 1020.0,
    "volume": 53745,
    "ma5": 1026.4,
    "ma10": 994.5,
    "ma20": 904.0,
    "vMa5": 16438,
    "vMa10": 22819,
    "limitUpPrice": 1091.2,
    "categories": [
      "0050",
      "半導體-載板",
      "Top100",
      "ValueTop"
    ],
    "sparkline": [
      924.0,
      969.0,
      973.0,
      955.0,
      992.0,
      992.0,
      1000.0,
      1000.0,
      1020.0,
      1120.0
    ],
    "ma60": 935.15,
    "high20d": 1120.0,
    "high5d": 1120.0,
    "high10d": 1120.0,
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
      },
      {
        "open": 1045.0,
        "high": 1120.0,
        "low": 1035.0,
        "close": 1120.0,
        "ma5": 1026.4,
        "ma10": 994.5
      }
    ],
    "symbol": "3037.TW",
    "maxVol10d": 53745,
    "hasVolumeBurst": true,
    "kd": {
      "k": 90.7,
      "d": 86.6,
      "prevK": 86.1,
      "prevD": 84.6,
      "h8": 1045.0,
      "l8": 928.0
    }
  },
  {
    "code": "8046",
    "name": "南電",
    "price": 1295.0,
    "open": 1310.0,
    "high": 1380.0,
    "low": 1295.0,
    "prevClose": 1305.0,
    "volume": 19197,
    "ma5": 1246.0,
    "ma10": 1165.0,
    "ma20": 1106.25,
    "vMa5": 15068,
    "vMa10": 9660,
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
      1045.0,
      1060.0,
      1105.0,
      1080.0,
      1130.0,
      1150.0,
      1265.0,
      1215.0,
      1305.0,
      1295.0
    ],
    "ma60": 1041.33,
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
        "close": 1305.0,
        "ma5": 1213.0,
        "ma10": 1130.8
      },
      {
        "open": 1310.0,
        "high": 1380.0,
        "low": 1295.0,
        "close": 1295.0,
        "ma5": 1246.0,
        "ma10": 1165.0
      }
    ],
    "symbol": "8046.TW",
    "maxVol10d": 22661,
    "hasVolumeBurst": true,
    "kd": {
      "k": 82.7,
      "d": 79.9,
      "prevK": 85.7,
      "prevD": 78.4,
      "h8": 1335.0,
      "l8": 1015.0
    }
  },
  {
    "code": "3189",
    "name": "景碩",
    "price": 905.0,
    "open": 896.0,
    "high": 932.0,
    "low": 881.0,
    "prevClose": 862.0,
    "volume": 38283,
    "ma5": 863.6,
    "ma10": 842.5,
    "ma20": 764.95,
    "vMa5": 10550,
    "vMa10": 13199,
    "limitUpPrice": 919.6,
    "categories": [
      "半導體-載板",
      "Top100",
      "ValueTop",
      "TurnoverRate"
    ],
    "sparkline": [
      767.0,
      828.0,
      853.0,
      823.0,
      836.0,
      842.0,
      858.0,
      851.0,
      862.0,
      905.0
    ],
    "ma60": 749.97,
    "high20d": 932.0,
    "high5d": 932.0,
    "high10d": 932.0,
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
        "close": 862.0,
        "ma5": 849.8,
        "ma10": 821.8
      },
      {
        "open": 896.0,
        "high": 932.0,
        "low": 881.0,
        "close": 905.0,
        "ma5": 863.6,
        "ma10": 842.5
      }
    ],
    "symbol": "3189.TW",
    "maxVol10d": 38283,
    "hasVolumeBurst": true,
    "kd": {
      "k": 87.1,
      "d": 87.0,
      "prevK": 90.9,
      "prevD": 86.9,
      "h8": 872.0,
      "l8": 801.0
    }
  },
  {
    "code": "6239",
    "name": "力成",
    "price": 278.0,
    "open": 278.0,
    "high": 282.0,
    "low": 275.5,
    "prevClose": 278.0,
    "volume": 7805,
    "ma5": 280.6,
    "ma10": 273.65,
    "ma20": 266.4,
    "vMa5": 18611,
    "vMa10": 19421,
    "limitUpPrice": 317.35,
    "categories": [
      "半導體-封測"
    ],
    "sparkline": [
      256.5,
      256.5,
      269.5,
      262.5,
      288.5,
      282.5,
      281.5,
      283.0,
      278.0,
      278.0
    ],
    "ma60": 309.54,
    "high20d": 315.0,
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
        "low": 276.0,
        "close": 278.0,
        "ma5": 282.7,
        "ma10": 269.7
      },
      {
        "open": 278.0,
        "high": 282.0,
        "low": 275.5,
        "close": 278.0,
        "ma5": 280.6,
        "ma10": 273.65
      }
    ],
    "symbol": "6239.TW",
    "maxVol10d": 39058,
    "hasVolumeBurst": true,
    "kd": {
      "k": 70.9,
      "d": 72.3,
      "prevK": 75.7,
      "prevD": 73.0,
      "h8": 296.0,
      "l8": 249.5
    }
  },
  {
    "code": "6770",
    "name": "力積電",
    "price": 74.6,
    "open": 79.9,
    "high": 79.9,
    "low": 74.2,
    "prevClose": 78.4,
    "volume": 259294,
    "ma5": 73.72,
    "ma10": 69.45,
    "ma20": 64.1,
    "vMa5": 357807,
    "vMa10": 310506,
    "limitUpPrice": 74.36,
    "categories": [
      "Top100",
      "半導體-晶圓",
      "MajorBuy",
      "TurnoverRate",
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "sparkline": [
      60.1,
      66.1,
      66.6,
      65.5,
      67.6,
      67.0,
      73.7,
      74.9,
      78.4,
      74.6
    ],
    "ma60": 71.14,
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
        "close": 78.4,
        "ma5": 72.32,
        "ma10": 67.46
      },
      {
        "open": 79.9,
        "high": 79.9,
        "low": 74.2,
        "close": 74.6,
        "ma5": 73.72,
        "ma10": 69.45
      }
    ],
    "symbol": "6770.TW",
    "maxVol10d": 524437,
    "hasVolumeBurst": true,
    "kd": {
      "k": 80.0,
      "d": 81.8,
      "prevK": 88.3,
      "prevD": 82.7,
      "h8": 81.8,
      "l8": 62.2
    }
  },
  {
    "code": "3707",
    "name": "漢磊",
    "price": 65.2,
    "open": 64.5,
    "high": 66.5,
    "low": 62.5,
    "prevClose": 65.6,
    "volume": 5963,
    "ma5": 64.36,
    "ma10": 62.85,
    "ma20": 60.64,
    "vMa5": 5620,
    "vMa10": 4897,
    "limitUpPrice": 68.53,
    "categories": [
      "半導體-功率",
      "Top100",
      "MajorBuy",
      "MajorBuy3D"
    ],
    "sparkline": [
      59.8,
      62.4,
      62.1,
      60.1,
      62.3,
      61.9,
      63.5,
      65.6,
      65.6,
      65.2
    ],
    "ma60": 74.71,
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
        "high": 66.6,
        "low": 63.2,
        "close": 65.6,
        "ma5": 63.78,
        "ma10": 61.96
      },
      {
        "open": 64.5,
        "high": 66.5,
        "low": 62.5,
        "close": 65.2,
        "ma5": 64.36,
        "ma10": 62.85
      }
    ],
    "symbol": "3707.TWO",
    "maxVol10d": 8394,
    "hasVolumeBurst": true,
    "kd": {
      "k": 73.0,
      "d": 74.7,
      "prevK": 79.4,
      "prevD": 75.6,
      "h8": 68.9,
      "l8": 59.6
    }
  },
  {
    "code": "6488",
    "name": "環球晶",
    "price": 1020.0,
    "open": 1000.0,
    "high": 1095.0,
    "low": 990.0,
    "prevClose": 1010.0,
    "volume": 10918,
    "ma5": 967.4,
    "ma10": 925.9,
    "ma20": 962.05,
    "vMa5": 10910,
    "vMa10": 11442,
    "limitUpPrice": 939.4,
    "categories": [
      "Top100",
      "半導體-功率",
      "MajorBuy",
      "ValueTop",
      "SitcaBuy",
      "SitcaBuy3D",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "sparkline": [
      952.0,
      872.0,
      872.0,
      872.0,
      854.0,
      849.0,
      933.0,
      1025.0,
      1010.0,
      1020.0
    ],
    "ma60": 1031.08,
    "high20d": 1305.0,
    "high5d": 1095.0,
    "high10d": 1095.0,
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
        "low": 993.0,
        "close": 1010.0,
        "ma5": 934.2,
        "ma10": 910.5
      },
      {
        "open": 1000.0,
        "high": 1095.0,
        "low": 990.0,
        "close": 1020.0,
        "ma5": 967.4,
        "ma10": 925.9
      }
    ],
    "symbol": "6488.TWO",
    "maxVol10d": 25167,
    "hasVolumeBurst": true,
    "kd": {
      "k": 70.8,
      "d": 58.4,
      "prevK": 69.9,
      "prevD": 52.2,
      "h8": 1045.0,
      "l8": 823.0
    }
  },
  {
    "code": "5483",
    "name": "中美晶",
    "price": 186.5,
    "open": 185.0,
    "high": 193.0,
    "low": 183.5,
    "prevClose": 188.0,
    "volume": 22560,
    "ma5": 183.1,
    "ma10": 179.0,
    "ma20": 184.9,
    "vMa5": 33638,
    "vMa10": 31860,
    "limitUpPrice": 186.45,
    "categories": [
      "Top100",
      "半導體-功率",
      "SitcaBuy",
      "MajorBuy",
      "ValueTop",
      "TurnoverRate",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D"
    ],
    "sparkline": [
      181.0,
      178.0,
      177.5,
      168.5,
      169.5,
      168.5,
      185.0,
      187.5,
      188.0,
      186.5
    ],
    "ma60": 185.26,
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
        "low": 183.5,
        "close": 188.0,
        "ma5": 179.7,
        "ma10": 177.6
      },
      {
        "open": 185.0,
        "high": 193.0,
        "low": 183.5,
        "close": 186.5,
        "ma5": 183.1,
        "ma10": 179.0
      }
    ],
    "symbol": "5483.TWO",
    "maxVol10d": 75101,
    "hasVolumeBurst": true,
    "kd": {
      "k": 57.6,
      "d": 52.2,
      "prevK": 58.1,
      "prevD": 49.5,
      "h8": 203.0,
      "l8": 165.0
    }
  },
  {
    "code": "2327",
    "name": "國巨*",
    "price": 608.0,
    "open": 620.0,
    "high": 622.0,
    "low": 596.0,
    "prevClose": 622.0,
    "volume": 36557,
    "ma5": 622.2,
    "ma10": 593.8,
    "ma20": 592.73,
    "vMa5": 57120,
    "vMa10": 55960,
    "limitUpPrice": 630.3,
    "categories": [
      "0050",
      "Top100",
      "半導體-被動元件",
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      566.0,
      578.0,
      570.0,
      540.0,
      573.0,
      617.0,
      602.0,
      662.0,
      622.0,
      608.0
    ],
    "ma60": 786.59,
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
        "close": 622.0,
        "ma5": 615.2,
        "ma10": 588.2
      },
      {
        "open": 620.0,
        "high": 622.0,
        "low": 596.0,
        "close": 608.0,
        "ma5": 622.2,
        "ma10": 593.8
      }
    ],
    "symbol": "2327.TW",
    "maxVol10d": 83824,
    "hasVolumeBurst": true,
    "kd": {
      "k": 69.8,
      "d": 69.5,
      "prevK": 76.6,
      "prevD": 69.3,
      "h8": 668.0,
      "l8": 531.0
    }
  },
  {
    "code": "2492",
    "name": "華新科",
    "price": 291.5,
    "open": 298.0,
    "high": 299.5,
    "low": 288.0,
    "prevClose": 302.5,
    "volume": 26744,
    "ma5": 299.8,
    "ma10": 279.9,
    "ma20": 266.98,
    "vMa5": 44195,
    "vMa10": 36024,
    "limitUpPrice": 300.85,
    "categories": [
      "半導體-被動元件",
      "SitcaBuy",
      "TurnoverRate",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      259.5,
      259.5,
      256.5,
      251.0,
      273.5,
      300.5,
      288.0,
      316.5,
      302.5,
      291.5
    ],
    "ma60": 394.42,
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
        "close": 302.5,
        "ma5": 296.2,
        "ma10": 274.7
      },
      {
        "open": 298.0,
        "high": 299.5,
        "low": 288.0,
        "close": 291.5,
        "ma5": 299.8,
        "ma10": 279.9
      }
    ],
    "symbol": "2492.TW",
    "maxVol10d": 65843,
    "hasVolumeBurst": true,
    "kd": {
      "k": 76.1,
      "d": 75.3,
      "prevK": 81.9,
      "prevD": 74.9,
      "h8": 322.0,
      "l8": 236.5
    }
  },
  {
    "code": "3026",
    "name": "禾伸堂",
    "price": 689.0,
    "open": 647.0,
    "high": 692.0,
    "low": 605.0,
    "prevClose": 647.0,
    "volume": 1449,
    "ma5": 671.6,
    "ma10": 611.9,
    "ma20": 586.23,
    "vMa5": 14844,
    "vMa10": 8388,
    "limitUpPrice": 646.8,
    "categories": [
      "半導體-被動元件",
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      498.0,
      547.0,
      593.0,
      535.0,
      588.0,
      646.0,
      685.0,
      691.0,
      647.0,
      689.0
    ],
    "ma60": 708.67,
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
        "low": 640.0,
        "close": 647.0,
        "ma5": 651.4,
        "ma10": 588.95
      },
      {
        "open": 647.0,
        "high": 692.0,
        "low": 605.0,
        "close": 689.0,
        "ma5": 671.6,
        "ma10": 611.9
      }
    ],
    "symbol": "3026.TW",
    "maxVol10d": 24454,
    "hasVolumeBurst": true,
    "kd": {
      "k": 74.3,
      "d": 72.6,
      "prevK": 75.0,
      "prevD": 71.7,
      "h8": 752.0,
      "l8": 520.0
    }
  },
  {
    "code": "2408",
    "name": "南亞科",
    "price": 524.0,
    "open": 520.0,
    "high": 535.0,
    "low": 513.0,
    "prevClose": 512.0,
    "volume": 62093,
    "ma5": 504.3,
    "ma10": 482.05,
    "ma20": 438.25,
    "vMa5": 98729,
    "vMa10": 102528,
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
      "MajorBuy3D"
    ],
    "sparkline": [
      436.0,
      445.0,
      459.0,
      457.0,
      502.0,
      489.0,
      482.5,
      514.0,
      512.0,
      524.0
    ],
    "ma60": 415.02,
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
        "low": 501.0,
        "close": 512.0,
        "ma5": 499.9,
        "ma10": 469.3
      },
      {
        "open": 520.0,
        "high": 535.0,
        "low": 513.0,
        "close": 524.0,
        "ma5": 504.3,
        "ma10": 482.05
      }
    ],
    "symbol": "2408.TW",
    "maxVol10d": 142126,
    "hasVolumeBurst": true,
    "kd": {
      "k": 83.9,
      "d": 82.9,
      "prevK": 84.3,
      "prevD": 82.5,
      "h8": 542.0,
      "l8": 436.0
    }
  },
  {
    "code": "2344",
    "name": "華邦電",
    "price": 181.5,
    "open": 185.5,
    "high": 190.0,
    "low": 181.5,
    "prevClose": 183.5,
    "volume": 128345,
    "ma5": 179.4,
    "ma10": 173.7,
    "ma20": 160.22,
    "vMa5": 197567,
    "vMa10": 184544,
    "limitUpPrice": 197.45,
    "categories": [
      "Top100",
      "半導體-記憶體",
      "0050",
      "MajorBuy",
      "ValueTop",
      "MajorBuy1D"
    ],
    "sparkline": [
      157.0,
      169.0,
      171.0,
      163.5,
      179.5,
      178.0,
      177.0,
      177.0,
      183.5,
      181.5
    ],
    "ma60": 171.59,
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
        "low": 180.5,
        "close": 183.5,
        "ma5": 179.0,
        "ma10": 169.85
      },
      {
        "open": 185.5,
        "high": 190.0,
        "low": 181.5,
        "close": 181.5,
        "ma5": 179.4,
        "ma10": 173.7
      }
    ],
    "symbol": "2344.TW",
    "maxVol10d": 235496,
    "hasVolumeBurst": true,
    "kd": {
      "k": 74.9,
      "d": 77.3,
      "prevK": 80.1,
      "prevD": 78.5,
      "h8": 193.0,
      "l8": 160.5
    }
  },
  {
    "code": "3260",
    "name": "威剛",
    "price": 400.0,
    "open": 404.0,
    "high": 404.0,
    "low": 397.0,
    "prevClose": 402.0,
    "volume": 4925,
    "ma5": 405.2,
    "ma10": 406.85,
    "ma20": 395.57,
    "vMa5": 8458,
    "vMa10": 11850,
    "limitUpPrice": 452.1,
    "categories": [
      "Top100",
      "半導體-記憶體",
      "MajorBuy",
      "ValueTop",
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "sparkline": [
      398.5,
      396.0,
      421.0,
      416.0,
      411.0,
      405.5,
      409.5,
      409.0,
      402.0,
      400.0
    ],
    "ma60": 405.91,
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
        "low": 400.0,
        "close": 402.0,
        "ma5": 407.4,
        "ma10": 406.0
      },
      {
        "open": 404.0,
        "high": 404.0,
        "low": 397.0,
        "close": 400.0,
        "ma5": 405.2,
        "ma10": 406.85
      }
    ],
    "symbol": "3260.TWO",
    "maxVol10d": 21069,
    "hasVolumeBurst": false,
    "kd": {
      "k": 36.1,
      "d": 50.8,
      "prevK": 47.2,
      "prevD": 58.1,
      "h8": 437.0,
      "l8": 394.0
    }
  },
  {
    "code": "8299",
    "name": "群聯",
    "price": 2085.0,
    "open": 2110.0,
    "high": 2125.0,
    "low": 2085.0,
    "prevClose": 2080.0,
    "volume": 4627,
    "ma5": 2149.0,
    "ma10": 2049.5,
    "ma20": 1894.5,
    "vMa5": 7024,
    "vMa10": 5920,
    "limitUpPrice": 2244.0,
    "categories": [
      "Top100",
      "半導體-記憶體",
      "ValueTop"
    ],
    "sparkline": [
      1820.0,
      1845.0,
      2025.0,
      2020.0,
      2040.0,
      2090.0,
      2210.0,
      2280.0,
      2080.0,
      2085.0
    ],
    "ma60": 2186.33,
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
        "low": 2065.0,
        "close": 2080.0,
        "ma5": 2140.0,
        "ma10": 2017.0
      },
      {
        "open": 2110.0,
        "high": 2125.0,
        "low": 2085.0,
        "close": 2085.0,
        "ma5": 2149.0,
        "ma10": 2049.5
      }
    ],
    "symbol": "8299.TWO",
    "maxVol10d": 15030,
    "hasVolumeBurst": true,
    "kd": {
      "k": 72.3,
      "d": 79.7,
      "prevK": 82.0,
      "prevD": 83.4,
      "h8": 2325.0,
      "l8": 1815.0
    }
  },
  {
    "code": "3034",
    "name": "聯詠",
    "price": 509.0,
    "open": 510.0,
    "high": 513.0,
    "low": 498.5,
    "prevClose": 512.0,
    "volume": 3210,
    "ma5": 526.8,
    "ma10": 533.7,
    "ma20": 518.42,
    "vMa5": 3138,
    "vMa10": 3668,
    "limitUpPrice": 598.4,
    "categories": [
      "半導體-IC設計"
    ],
    "sparkline": [
      524.0,
      550.0,
      543.0,
      542.0,
      544.0,
      538.0,
      537.0,
      538.0,
      512.0,
      509.0
    ],
    "ma60": 510.08,
    "high20d": 572.0,
    "high5d": 546.0,
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
        "low": 507.0,
        "close": 512.0,
        "ma5": 533.8,
        "ma10": 534.7
      },
      {
        "open": 510.0,
        "high": 513.0,
        "low": 498.5,
        "close": 509.0,
        "ma5": 526.8,
        "ma10": 533.7
      }
    ],
    "symbol": "3034.TW",
    "maxVol10d": 7520,
    "hasVolumeBurst": false,
    "kd": {
      "k": 31.0,
      "d": 46.8,
      "prevK": 39.3,
      "prevD": 54.7,
      "h8": 572.0,
      "l8": 507.0
    }
  },
  {
    "code": "2379",
    "name": "瑞昱",
    "price": 717.0,
    "open": 712.0,
    "high": 725.0,
    "low": 706.0,
    "prevClose": 721.0,
    "volume": 2595,
    "ma5": 746.8,
    "ma10": 746.0,
    "ma20": 738.0,
    "vMa5": 2153,
    "vMa10": 2632,
    "limitUpPrice": 833.8,
    "categories": [
      "半導體-IC設計"
    ],
    "sparkline": [
      723.0,
      751.0,
      744.0,
      750.0,
      758.0,
      772.0,
      766.0,
      758.0,
      721.0,
      717.0
    ],
    "ma60": 725.07,
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
        "low": 721.0,
        "close": 721.0,
        "ma5": 755.0,
        "ma10": 744.7
      },
      {
        "open": 712.0,
        "high": 725.0,
        "low": 706.0,
        "close": 717.0,
        "ma5": 746.8,
        "ma10": 746.0
      }
    ],
    "symbol": "2379.TW",
    "maxVol10d": 4107,
    "hasVolumeBurst": false,
    "kd": {
      "k": 51.3,
      "d": 65.8,
      "prevK": 69.5,
      "prevD": 73.1,
      "h8": 780.0,
      "l8": 721.0
    }
  },
  {
    "code": "2382",
    "name": "廣達",
    "price": 333.5,
    "open": 332.0,
    "high": 339.0,
    "low": 330.5,
    "prevClose": 327.5,
    "volume": 29691,
    "ma5": 325.4,
    "ma10": 314.5,
    "ma20": 313.7,
    "vMa5": 25795,
    "vMa10": 22475,
    "limitUpPrice": 344.85,
    "categories": [
      "0050",
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy5D"
    ],
    "sparkline": [
      300.5,
      304.0,
      302.0,
      298.0,
      313.5,
      315.5,
      325.5,
      325.0,
      327.5,
      333.5
    ],
    "ma60": 348.68,
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
        "close": 327.5,
        "ma5": 321.4,
        "ma10": 310.8
      },
      {
        "open": 332.0,
        "high": 339.0,
        "low": 330.5,
        "close": 333.5,
        "ma5": 325.4,
        "ma10": 314.5
      }
    ],
    "symbol": "2382.TW",
    "maxVol10d": 41703,
    "hasVolumeBurst": true,
    "kd": {
      "k": 82.5,
      "d": 74.1,
      "prevK": 80.0,
      "prevD": 69.9,
      "h8": 336.5,
      "l8": 295.0
    }
  },
  {
    "code": "3231",
    "name": "緯創",
    "price": 187.0,
    "open": 193.5,
    "high": 193.5,
    "low": 184.5,
    "prevClose": 193.5,
    "volume": 51800,
    "ma5": 192.4,
    "ma10": 191.6,
    "ma20": 181.03,
    "vMa5": 58742,
    "vMa10": 86033,
    "limitUpPrice": 212.3,
    "categories": [
      "0050",
      "Top100",
      "ValueTop",
      "MajorBuy",
      "MajorBuy3D"
    ],
    "sparkline": [
      195.0,
      193.0,
      189.5,
      183.5,
      193.0,
      191.0,
      193.5,
      197.0,
      193.5,
      187.0
    ],
    "ma60": 164.99,
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
        "low": 193.0,
        "close": 193.5,
        "ma5": 193.6,
        "ma10": 191.5
      },
      {
        "open": 193.5,
        "high": 193.5,
        "low": 184.5,
        "close": 187.0,
        "ma5": 192.4,
        "ma10": 191.6
      }
    ],
    "symbol": "3231.TW",
    "maxVol10d": 204777,
    "hasVolumeBurst": true,
    "kd": {
      "k": 54.3,
      "d": 66.9,
      "prevK": 68.6,
      "prevD": 73.2,
      "h8": 206.0,
      "l8": 180.5
    }
  },
  {
    "code": "2356",
    "name": "英業達",
    "price": 66.7,
    "open": 68.9,
    "high": 69.0,
    "low": 66.0,
    "prevClose": 69.9,
    "volume": 36487,
    "ma5": 67.9,
    "ma10": 66.67,
    "ma20": 64.1,
    "vMa5": 51959,
    "vMa10": 38929,
    "limitUpPrice": 72.6,
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "sparkline": [
      66.0,
      65.7,
      65.5,
      64.0,
      66.0,
      65.1,
      69.0,
      68.8,
      69.9,
      66.7
    ],
    "ma60": 66.29,
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
        "low": 69.4,
        "close": 69.9,
        "ma5": 67.76,
        "ma10": 66.39
      },
      {
        "open": 68.9,
        "high": 69.0,
        "low": 66.0,
        "close": 66.7,
        "ma5": 67.9,
        "ma10": 66.67
      }
    ],
    "symbol": "2356.TW",
    "maxVol10d": 79065,
    "hasVolumeBurst": true,
    "kd": {
      "k": 59.0,
      "d": 69.4,
      "prevK": 72.8,
      "prevD": 74.7,
      "h8": 73.5,
      "l8": 63.6
    }
  },
  {
    "code": "2603",
    "name": "長榮",
    "price": 231.5,
    "open": 220.0,
    "high": 232.0,
    "low": 219.0,
    "prevClose": 219.0,
    "volume": 38317,
    "ma5": 219.7,
    "ma10": 213.5,
    "ma20": 208.55,
    "vMa5": 15760,
    "vMa10": 11348,
    "limitUpPrice": 235.4,
    "categories": [
      "0050",
      "SitcaBuy",
      "MajorBuy",
      "Top100",
      "ValueTop",
      "SitcaBuy5D",
      "MajorBuy1D"
    ],
    "sparkline": [
      206.0,
      205.0,
      204.0,
      207.5,
      214.0,
      218.0,
      214.5,
      215.5,
      219.0,
      231.5
    ],
    "ma60": 206.12,
    "high20d": 232.0,
    "high5d": 232.0,
    "high10d": 232.0,
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
        "close": 219.0,
        "ma5": 216.2,
        "ma10": 211.1
      },
      {
        "open": 220.0,
        "high": 232.0,
        "low": 219.0,
        "close": 231.5,
        "ma5": 219.7,
        "ma10": 213.5
      }
    ],
    "symbol": "2603.TW",
    "maxVol10d": 38317,
    "hasVolumeBurst": true,
    "kd": {
      "k": 88.6,
      "d": 83.0,
      "prevK": 83.8,
      "prevD": 80.2,
      "h8": 220.0,
      "l8": 202.0
    }
  },
  {
    "code": "2615",
    "name": "萬海",
    "price": 99.6,
    "open": 91.3,
    "high": 99.6,
    "low": 90.8,
    "prevClose": 90.6,
    "volume": 49718,
    "ma5": 90.38,
    "ma10": 88.01,
    "ma20": 86.48,
    "vMa5": 22018,
    "vMa10": 14838,
    "limitUpPrice": 96.25,
    "categories": [
      "MajorBuy",
      "Top100",
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "sparkline": [
      86.1,
      85.4,
      84.3,
      84.9,
      87.5,
      87.1,
      87.1,
      87.5,
      90.6,
      99.6
    ],
    "ma60": 82.95,
    "high20d": 99.6,
    "high5d": 99.6,
    "high10d": 99.6,
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
      },
      {
        "open": 91.3,
        "high": 99.6,
        "low": 90.8,
        "close": 99.6,
        "ma5": 90.38,
        "ma10": 88.01
      }
    ],
    "symbol": "2615.TW",
    "maxVol10d": 49718,
    "hasVolumeBurst": true,
    "kd": {
      "k": 83.6,
      "d": 73.6,
      "prevK": 75.4,
      "prevD": 68.6,
      "h8": 91.4,
      "l8": 83.8
    }
  },
  {
    "code": "3481",
    "name": "群創",
    "price": 51.2,
    "open": 50.5,
    "high": 51.3,
    "low": 48.85,
    "prevClose": 50.1,
    "volume": 248267,
    "ma5": 50.24,
    "ma10": 49.66,
    "ma20": 48.4,
    "vMa5": 244667,
    "vMa10": 277533,
    "limitUpPrice": 57.53,
    "categories": [
      "Top100",
      "MajorBuy",
      "ValueTop",
      "SitcaBuy",
      "SitcaBuy3D",
      "MajorBuy1D"
    ],
    "sparkline": [
      47.8,
      47.8,
      50.0,
      47.55,
      52.3,
      50.1,
      50.4,
      49.4,
      50.1,
      51.2
    ],
    "ma60": 54.95,
    "high20d": 54.1,
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
        "low": 49.7,
        "close": 50.1,
        "ma5": 50.46,
        "ma10": 49.12
      },
      {
        "open": 50.5,
        "high": 51.3,
        "low": 48.85,
        "close": 51.2,
        "ma5": 50.24,
        "ma10": 49.66
      }
    ],
    "symbol": "3481.TW",
    "maxVol10d": 419589,
    "hasVolumeBurst": false,
    "kd": {
      "k": 75.4,
      "d": 72.9,
      "prevK": 73.0,
      "prevD": 71.6,
      "h8": 52.3,
      "l8": 46.7
    }
  },
  {
    "code": "2409",
    "name": "友達",
    "price": 27.25,
    "open": 26.0,
    "high": 27.4,
    "low": 25.8,
    "prevClose": 25.8,
    "volume": 294215,
    "ma5": 26.23,
    "ma10": 25.61,
    "ma20": 25.05,
    "vMa5": 236581,
    "vMa10": 202420,
    "limitUpPrice": 29.7,
    "categories": [
      "Top100",
      "ValueTop"
    ],
    "sparkline": [
      24.45,
      24.45,
      24.55,
      24.55,
      27.0,
      26.1,
      26.25,
      25.75,
      25.8,
      27.25
    ],
    "ma60": 26.49,
    "high20d": 27.9,
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
        "low": 25.75,
        "close": 25.8,
        "ma5": 26.18,
        "ma10": 25.28
      },
      {
        "open": 26.0,
        "high": 27.4,
        "low": 25.8,
        "close": 27.25,
        "ma5": 26.23,
        "ma10": 25.61
      }
    ],
    "symbol": "2409.TW",
    "maxVol10d": 458806,
    "hasVolumeBurst": true,
    "kd": {
      "k": 67.7,
      "d": 64.1,
      "prevK": 59.2,
      "prevD": 62.3,
      "h8": 27.9,
      "l8": 23.65
    }
  },
  {
    "code": "2881",
    "name": "富邦金",
    "price": 125.5,
    "open": 127.0,
    "high": 127.0,
    "low": 123.5,
    "prevClose": 129.5,
    "volume": 28738,
    "ma5": 127.7,
    "ma10": 127.8,
    "ma20": 127.33,
    "vMa5": 13244,
    "vMa10": 15126,
    "limitUpPrice": 141.35,
    "categories": [
      "0050"
    ],
    "sparkline": [
      128.5,
      129.5,
      126.0,
      127.0,
      128.5,
      128.0,
      127.0,
      128.5,
      129.5,
      125.5
    ],
    "ma60": 124.42,
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
        "close": 129.5,
        "ma5": 128.3,
        "ma10": 128.2
      },
      {
        "open": 127.0,
        "high": 127.0,
        "low": 123.5,
        "close": 125.5,
        "ma5": 127.7,
        "ma10": 127.8
      }
    ],
    "symbol": "2881.TW",
    "maxVol10d": 29051,
    "hasVolumeBurst": true,
    "kd": {
      "k": 42.5,
      "d": 50.6,
      "prevK": 52.7,
      "prevD": 54.6,
      "h8": 132.5,
      "l8": 125.0
    }
  },
  {
    "code": "2882",
    "name": "國泰金",
    "price": 98.1,
    "open": 101.0,
    "high": 101.0,
    "low": 97.3,
    "prevClose": 101.5,
    "volume": 34096,
    "ma5": 99.68,
    "ma10": 99.6,
    "ma20": 98.4,
    "vMa5": 20013,
    "vMa10": 18315,
    "limitUpPrice": 111.1,
    "categories": [
      "0050",
      "SitcaBuy",
      "MajorBuy",
      "SitcaBuy5D",
      "MajorBuy1D"
    ],
    "sparkline": [
      99.2,
      100.5,
      97.5,
      99.4,
      101.0,
      99.6,
      99.7,
      99.5,
      101.5,
      98.1
    ],
    "ma60": 98.11,
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
        "close": 101.5,
        "ma5": 100.26,
        "ma10": 99.84
      },
      {
        "open": 101.0,
        "high": 101.0,
        "low": 97.3,
        "close": 98.1,
        "ma5": 99.68,
        "ma10": 99.6
      }
    ],
    "symbol": "2882.TW",
    "maxVol10d": 34096,
    "hasVolumeBurst": true,
    "kd": {
      "k": 48.7,
      "d": 59.2,
      "prevK": 65.3,
      "prevD": 64.4,
      "h8": 102.5,
      "l8": 97.5
    }
  },
  {
    "code": "2891",
    "name": "中信金",
    "price": 65.6,
    "open": 66.3,
    "high": 66.3,
    "low": 65.2,
    "prevClose": 65.8,
    "volume": 26420,
    "ma5": 66.26,
    "ma10": 65.88,
    "ma20": 64.64,
    "vMa5": 28991,
    "vMa10": 28682,
    "limitUpPrice": 73.15,
    "categories": [
      "0050"
    ],
    "sparkline": [
      64.8,
      66.0,
      64.6,
      65.6,
      66.5,
      66.8,
      66.6,
      66.5,
      65.8,
      65.6
    ],
    "ma60": 66.34,
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
        "close": 65.8,
        "ma5": 66.44,
        "ma10": 65.8
      },
      {
        "open": 66.3,
        "high": 66.3,
        "low": 65.2,
        "close": 65.6,
        "ma5": 66.26,
        "ma10": 65.88
      }
    ],
    "symbol": "2891.TW",
    "maxVol10d": 43608,
    "hasVolumeBurst": false,
    "kd": {
      "k": 59.8,
      "d": 71.5,
      "prevK": 71.2,
      "prevD": 77.4,
      "h8": 67.3,
      "l8": 64.6
    }
  },
  {
    "code": "2886",
    "name": "兆豐金",
    "price": 46.6,
    "open": 47.0,
    "high": 47.05,
    "low": 45.6,
    "prevClose": 47.35,
    "volume": 53079,
    "ma5": 47.58,
    "ma10": 49.2,
    "ma20": 49.52,
    "vMa5": 47571,
    "vMa10": 38029,
    "limitUpPrice": 56.1,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      50.7,
      51.2,
      50.3,
      50.9,
      51.0,
      49.4,
      48.7,
      45.85,
      47.35,
      46.6
    ],
    "ma60": 46.07,
    "high20d": 53.7,
    "high5d": 50.9,
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
        "high": 47.5,
        "low": 45.7,
        "close": 47.35,
        "ma5": 48.46,
        "ma10": 49.7
      },
      {
        "open": 47.0,
        "high": 47.05,
        "low": 45.6,
        "close": 46.6,
        "ma5": 47.58,
        "ma10": 49.2
      }
    ],
    "symbol": "2886.TW",
    "maxVol10d": 71142,
    "hasVolumeBurst": true,
    "kd": {
      "k": 24.1,
      "d": 28.5,
      "prevK": 24.2,
      "prevD": 30.7,
      "h8": 51.9,
      "l8": 44.95
    }
  },
  {
    "code": "2884",
    "name": "玉山金",
    "price": 37.75,
    "open": 37.3,
    "high": 37.9,
    "low": 36.65,
    "prevClose": 37.65,
    "volume": 55999,
    "ma5": 37.27,
    "ma10": 37.64,
    "ma20": 37.25,
    "vMa5": 43254,
    "vMa10": 35729,
    "limitUpPrice": 41.58,
    "categories": [
      "0050",
      "SitcaBuy",
      "Top100",
      "MajorBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D"
    ],
    "sparkline": [
      38.0,
      38.1,
      37.95,
      38.15,
      37.8,
      36.9,
      36.75,
      37.3,
      37.65,
      37.75
    ],
    "ma60": 35.02,
    "high20d": 39.1,
    "high5d": 38.2,
    "high10d": 38.55,
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
        "high": 38.2,
        "low": 36.95,
        "close": 37.65,
        "ma5": 37.28,
        "ma10": 37.71
      },
      {
        "open": 37.3,
        "high": 37.9,
        "low": 36.65,
        "close": 37.75,
        "ma5": 37.27,
        "ma10": 37.64
      }
    ],
    "symbol": "2884.TW",
    "maxVol10d": 55999,
    "hasVolumeBurst": false,
    "kd": {
      "k": 54.5,
      "d": 51.4,
      "prevK": 46.4,
      "prevD": 49.8,
      "h8": 38.35,
      "l8": 36.3
    }
  },
  {
    "code": "2892",
    "name": "第一金",
    "price": 33.4,
    "open": 33.1,
    "high": 33.55,
    "low": 32.55,
    "prevClose": 33.35,
    "volume": 45825,
    "ma5": 33.15,
    "ma10": 34.3,
    "ma20": 34.64,
    "vMa5": 48153,
    "vMa10": 47771,
    "limitUpPrice": 38.45,
    "categories": [
      "0050",
      "SitcaBuy",
      "MajorBuy",
      "Top100",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D"
    ],
    "sparkline": [
      35.3,
      35.9,
      35.5,
      35.55,
      34.95,
      32.7,
      33.15,
      33.15,
      33.35,
      33.4
    ],
    "ma60": 32.5,
    "high20d": 36.9,
    "high5d": 33.7,
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
        "high": 33.7,
        "low": 32.75,
        "close": 33.35,
        "ma5": 33.46,
        "ma10": 34.55
      },
      {
        "open": 33.1,
        "high": 33.55,
        "low": 32.55,
        "close": 33.4,
        "ma5": 33.15,
        "ma10": 34.3
      }
    ],
    "symbol": "2892.TW",
    "maxVol10d": 84500,
    "hasVolumeBurst": true,
    "kd": {
      "k": 24.3,
      "d": 30.4,
      "prevK": 24.1,
      "prevD": 33.4,
      "h8": 36.3,
      "l8": 32.45
    }
  },
  {
    "code": "2885",
    "name": "元大金",
    "price": 68.3,
    "open": 69.7,
    "high": 69.9,
    "low": 67.8,
    "prevClose": 69.7,
    "volume": 26376,
    "ma5": 68.94,
    "ma10": 68.61,
    "ma20": 66.32,
    "vMa5": 18404,
    "vMa10": 20549,
    "limitUpPrice": 75.02,
    "categories": [
      "0050",
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      69.0,
      69.4,
      67.1,
      67.7,
      68.2,
      68.4,
      68.6,
      69.7,
      69.7,
      68.3
    ],
    "ma60": 65.32,
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
        "close": 69.7,
        "ma5": 68.92,
        "ma10": 68.58
      },
      {
        "open": 69.7,
        "high": 69.9,
        "low": 67.8,
        "close": 68.3,
        "ma5": 68.94,
        "ma10": 68.61
      }
    ],
    "symbol": "2885.TW",
    "maxVol10d": 36318,
    "hasVolumeBurst": false,
    "kd": {
      "k": 59.4,
      "d": 67.4,
      "prevK": 71.4,
      "prevD": 71.4,
      "h8": 70.5,
      "l8": 67.1
    }
  },
  {
    "code": "5880",
    "name": "合庫金",
    "price": 24.9,
    "open": 24.25,
    "high": 25.0,
    "low": 24.15,
    "prevClose": 24.2,
    "volume": 35113,
    "ma5": 24.28,
    "ma10": 24.97,
    "ma20": 25.27,
    "vMa5": 27091,
    "vMa10": 26304,
    "limitUpPrice": 28.01,
    "categories": [
      "0050",
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      25.9,
      25.95,
      25.46,
      25.56,
      25.46,
      24.0,
      24.1,
      24.2,
      24.2,
      24.9
    ],
    "ma60": 24.21,
    "high20d": 26.98,
    "high5d": 25.0,
    "high10d": 26.2,
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
        "close": 24.2,
        "ma5": 24.39,
        "ma10": 25.11
      },
      {
        "open": 24.25,
        "high": 25.0,
        "low": 24.15,
        "close": 24.9,
        "ma5": 24.28,
        "ma10": 24.97
      }
    ],
    "symbol": "5880.TW",
    "maxVol10d": 50665,
    "hasVolumeBurst": true,
    "kd": {
      "k": 26.2,
      "d": 25.6,
      "prevK": 16.4,
      "prevD": 25.3,
      "h8": 26.15,
      "l8": 23.85
    }
  },
  {
    "code": "2890",
    "name": "永豐金",
    "price": 39.6,
    "open": 40.0,
    "high": 40.05,
    "low": 38.75,
    "prevClose": 40.55,
    "volume": 48284,
    "ma5": 39.8,
    "ma10": 39.47,
    "ma20": 39.34,
    "vMa5": 28862,
    "vMa10": 23171,
    "limitUpPrice": 42.79,
    "categories": [
      "0050",
      "SitcaBuy",
      "MajorBuy",
      "Top100",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "sparkline": [
      39.6,
      39.55,
      38.7,
      38.95,
      38.9,
      39.05,
      39.85,
      39.95,
      40.55,
      39.6
    ],
    "ma60": 37.01,
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
        "high": 40.95,
        "low": 39.6,
        "close": 40.55,
        "ma5": 39.66,
        "ma10": 39.51
      },
      {
        "open": 40.0,
        "high": 40.05,
        "low": 38.75,
        "close": 39.6,
        "ma5": 39.8,
        "ma10": 39.47
      }
    ],
    "symbol": "2890.TW",
    "maxVol10d": 48284,
    "hasVolumeBurst": true,
    "kd": {
      "k": 57.6,
      "d": 53.7,
      "prevK": 62.8,
      "prevD": 51.8,
      "h8": 40.95,
      "l8": 38.4
    }
  },
  {
    "code": "2880",
    "name": "華南金",
    "price": 39.2,
    "open": 38.6,
    "high": 39.25,
    "low": 38.0,
    "prevClose": 38.95,
    "volume": 45987,
    "ma5": 40.65,
    "ma10": 42.06,
    "ma20": 41.72,
    "vMa5": 44189,
    "vMa10": 34399,
    "limitUpPrice": 48.4,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "sparkline": [
      42.82,
      43.37,
      43.61,
      43.96,
      43.56,
      43.22,
      42.77,
      39.1,
      38.95,
      39.2
    ],
    "ma60": 37.96,
    "high20d": 44.7,
    "high5d": 43.76,
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
        "low": 38.0,
        "close": 38.95,
        "ma5": 41.52,
        "ma10": 42.4
      },
      {
        "open": 38.6,
        "high": 39.25,
        "low": 38.0,
        "close": 39.2,
        "ma5": 40.65,
        "ma10": 42.06
      }
    ],
    "symbol": "2880.TW",
    "maxVol10d": 71533,
    "hasVolumeBurst": true,
    "kd": {
      "k": 29.4,
      "d": 44.9,
      "prevK": 34.7,
      "prevD": 52.7,
      "h8": 44.41,
      "l8": 38.0
    }
  },
  {
    "code": "2883",
    "name": "凱基金",
    "price": 31.4,
    "open": 31.5,
    "high": 31.65,
    "low": 30.9,
    "prevClose": 31.65,
    "volume": 52074,
    "ma5": 31.36,
    "ma10": 31.14,
    "ma20": 30.64,
    "vMa5": 39056,
    "vMa10": 40016,
    "limitUpPrice": 34.16,
    "categories": [
      "0050",
      "SitcaBuy",
      "MajorBuy",
      "Top100",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "sparkline": [
      30.55,
      31.6,
      30.6,
      30.85,
      31.05,
      31.05,
      31.2,
      31.5,
      31.65,
      31.4
    ],
    "ma60": 28.86,
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
        "high": 31.75,
        "low": 30.95,
        "close": 31.65,
        "ma5": 31.29,
        "ma10": 31.04
      },
      {
        "open": 31.5,
        "high": 31.65,
        "low": 30.9,
        "close": 31.4,
        "ma5": 31.36,
        "ma10": 31.14
      }
    ],
    "symbol": "2883.TW",
    "maxVol10d": 65139,
    "hasVolumeBurst": true,
    "kd": {
      "k": 81.6,
      "d": 79.3,
      "prevK": 84.5,
      "prevD": 78.2,
      "h8": 31.75,
      "l8": 30.3
    }
  },
  {
    "code": "2887",
    "name": "台新新光金",
    "price": 37.15,
    "open": 37.7,
    "high": 37.7,
    "low": 36.8,
    "prevClose": 37.75,
    "volume": 78610,
    "ma5": 36.46,
    "ma10": 35.91,
    "ma20": 35.15,
    "vMa5": 63363,
    "vMa10": 52294,
    "limitUpPrice": 39.49,
    "categories": [
      "0050",
      "Top100",
      "SitcaBuy",
      "MajorBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "sparkline": [
      35.55,
      35.7,
      34.5,
      35.15,
      35.9,
      35.55,
      35.65,
      36.2,
      37.75,
      37.15
    ],
    "ma60": 32.28,
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
        "high": 37.8,
        "low": 36.55,
        "close": 37.75,
        "ma5": 36.21,
        "ma10": 35.73
      },
      {
        "open": 37.7,
        "high": 37.7,
        "low": 36.8,
        "close": 37.15,
        "ma5": 36.46,
        "ma10": 35.91
      }
    ],
    "symbol": "2887.TW",
    "maxVol10d": 100227,
    "hasVolumeBurst": true,
    "kd": {
      "k": 85.8,
      "d": 82.9,
      "prevK": 88.5,
      "prevD": 81.5,
      "h8": 37.8,
      "l8": 34.5
    }
  },
  {
    "code": "1301",
    "name": "台塑",
    "price": 59.1,
    "open": 61.0,
    "high": 61.8,
    "low": 59.1,
    "prevClose": 60.0,
    "volume": 30702,
    "ma5": 57.68,
    "ma10": 56.62,
    "ma20": 57.99,
    "vMa5": 29672,
    "vMa10": 24386,
    "limitUpPrice": 61.16,
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "sparkline": [
      55.3,
      56.0,
      55.1,
      55.8,
      55.6,
      55.6,
      56.2,
      57.5,
      60.0,
      59.1
    ],
    "ma60": 54.54,
    "high20d": 69.8,
    "high5d": 61.8,
    "high10d": 61.8,
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
        "high": 60.6,
        "low": 57.6,
        "close": 60.0,
        "ma5": 56.98,
        "ma10": 56.09
      },
      {
        "open": 61.0,
        "high": 61.8,
        "low": 59.1,
        "close": 59.1,
        "ma5": 57.68,
        "ma10": 56.62
      }
    ],
    "symbol": "1301.TW",
    "maxVol10d": 53145,
    "hasVolumeBurst": true,
    "kd": {
      "k": 66.5,
      "d": 56.4,
      "prevK": 67.8,
      "prevD": 51.3,
      "h8": 60.6,
      "l8": 54.3
    }
  },
  {
    "code": "3008",
    "name": "大立光",
    "categories": [
      "0050",
      "ValueTop"
    ],
    "price": 5070.0,
    "prevClose": 4610.0,
    "open": 4670.0,
    "high": 5070.0,
    "low": 4670.0,
    "volume": 3377,
    "ma5": 4656.0,
    "ma10": 4562.0,
    "ma20": 4260.75,
    "ma60": 4214.42,
    "vMa5": 2079,
    "vMa10": 2189,
    "high20d": 5070.0,
    "sparkline": [
      4355.0,
      4575.0,
      4625.0,
      4385.0,
      4400.0,
      4355.0,
      4585.0,
      4660.0,
      4610.0,
      5070.0
    ],
    "high5d": 5070.0,
    "high10d": 5070.0,
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
        "low": 4590.0,
        "close": 4610.0,
        "ma5": 4522.0,
        "ma10": 4451.0
      },
      {
        "open": 4670.0,
        "high": 5070.0,
        "low": 4670.0,
        "close": 5070.0,
        "ma5": 4656.0,
        "ma10": 4562.0
      }
    ],
    "symbol": "3008.TW",
    "maxVol10d": 4411,
    "hasVolumeBurst": true,
    "kd": {
      "k": 81.3,
      "d": 74.6,
      "prevK": 72.0,
      "prevD": 71.2,
      "h8": 4920.0,
      "l8": 4230.0
    }
  },
  {
    "code": "2357",
    "name": "華碩",
    "categories": [
      "0050",
      "MajorBuy",
      "ValueTop",
      "MajorBuy1D"
    ],
    "price": 938.0,
    "prevClose": 996.0,
    "open": 985.0,
    "high": 986.0,
    "low": 921.0,
    "volume": 5636,
    "ma5": 912.4,
    "ma10": 865.9,
    "ma20": 814.7,
    "ma60": 773.08,
    "vMa5": 6057,
    "vMa10": 5021,
    "high20d": 1025.0,
    "sparkline": [
      806.0,
      838.0,
      818.0,
      817.0,
      818.0,
      839.0,
      852.0,
      937.0,
      996.0,
      938.0
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
        "close": 996.0,
        "ma5": 888.4,
        "ma10": 852.0
      },
      {
        "open": 985.0,
        "high": 986.0,
        "low": 921.0,
        "close": 938.0,
        "ma5": 912.4,
        "ma10": 865.9
      }
    ],
    "symbol": "2357.TW",
    "maxVol10d": 15570,
    "hasVolumeBurst": true,
    "kd": {
      "k": 78.9,
      "d": 82.4,
      "prevK": 88.2,
      "prevD": 84.1,
      "h8": 1025.0,
      "l8": 805.0
    }
  },
  {
    "code": "2395",
    "name": "研華",
    "categories": [
      "0050"
    ],
    "price": 674.0,
    "prevClose": 683.0,
    "open": 659.0,
    "high": 686.0,
    "low": 657.0,
    "volume": 3491,
    "ma5": 680.4,
    "ma10": 653.4,
    "ma20": 612.35,
    "ma60": 538.54,
    "vMa5": 4111,
    "vMa10": 5244,
    "high20d": 709.0,
    "sparkline": [
      576.0,
      633.0,
      622.0,
      634.0,
      667.0,
      661.0,
      686.0,
      698.0,
      683.0,
      674.0
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
        "low": 676.0,
        "close": 683.0,
        "ma5": 679.0,
        "ma10": 643.6
      },
      {
        "open": 659.0,
        "high": 686.0,
        "low": 657.0,
        "close": 674.0,
        "ma5": 680.4,
        "ma10": 653.4
      }
    ],
    "symbol": "2395.TW",
    "maxVol10d": 10650,
    "hasVolumeBurst": true,
    "kd": {
      "k": 79.6,
      "d": 79.6,
      "prevK": 84.1,
      "prevD": 79.6,
      "h8": 709.0,
      "l8": 590.0
    }
  },
  {
    "code": "2301",
    "name": "光寶科",
    "categories": [
      "0050",
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy5D"
    ],
    "price": 263.5,
    "prevClose": 267.0,
    "open": 277.0,
    "high": 286.5,
    "low": 263.5,
    "volume": 23001,
    "ma5": 265.6,
    "ma10": 260.0,
    "ma20": 233.85,
    "ma60": 224.68,
    "vMa5": 33200,
    "vMa10": 41761,
    "high20d": 286.5,
    "sparkline": [
      252.0,
      249.0,
      252.5,
      247.0,
      271.5,
      268.5,
      259.5,
      269.5,
      267.0,
      263.5
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
        "low": 261.0,
        "close": 267.0,
        "ma5": 267.2,
        "ma10": 256.6
      },
      {
        "open": 277.0,
        "high": 286.5,
        "low": 263.5,
        "close": 263.5,
        "ma5": 265.6,
        "ma10": 260.0
      }
    ],
    "symbol": "2301.TW",
    "maxVol10d": 89058,
    "hasVolumeBurst": true,
    "kd": {
      "k": 67.0,
      "d": 75.4,
      "prevK": 77.6,
      "prevD": 79.6,
      "h8": 281.0,
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
    "price": 6620.0,
    "prevClose": 6435.0,
    "open": 6585.0,
    "high": 6740.0,
    "low": 6420.0,
    "volume": 1480,
    "ma5": 6216.0,
    "ma10": 6183.5,
    "ma20": 5797.25,
    "ma60": 5295.67,
    "vMa5": 1543,
    "vMa10": 1670,
    "high20d": 6740.0,
    "sparkline": [
      6205.0,
      6175.0,
      6265.0,
      6100.0,
      6010.0,
      5930.0,
      6025.0,
      6070.0,
      6435.0,
      6620.0
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
        "close": 6435.0,
        "ma5": 6094.0,
        "ma10": 6114.0
      },
      {
        "open": 6585.0,
        "high": 6740.0,
        "low": 6420.0,
        "close": 6620.0,
        "ma5": 6216.0,
        "ma10": 6183.5
      }
    ],
    "symbol": "6669.TW",
    "maxVol10d": 2761,
    "hasVolumeBurst": true,
    "kd": {
      "k": 76.5,
      "d": 74.1,
      "prevK": 71.5,
      "prevD": 73.0,
      "h8": 6650.0,
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
    "price": 4060.0,
    "prevClose": 4210.0,
    "open": 4350.0,
    "high": 4490.0,
    "low": 4060.0,
    "volume": 4605,
    "ma5": 4094.0,
    "ma10": 3864.5,
    "ma20": 3555.75,
    "ma60": 4010.75,
    "vMa5": 3363,
    "vMa10": 2702,
    "high20d": 4530.0,
    "sparkline": [
      3390.0,
      3610.0,
      3660.0,
      3715.0,
      3800.0,
      3955.0,
      4055.0,
      4190.0,
      4210.0,
      4060.0
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
        "low": 4180.0,
        "close": 4210.0,
        "ma5": 4042.0,
        "ma10": 3783.5
      },
      {
        "open": 4350.0,
        "high": 4490.0,
        "low": 4060.0,
        "close": 4060.0,
        "ma5": 4094.0,
        "ma10": 3864.5
      }
    ],
    "symbol": "3661.TW",
    "maxVol10d": 4605,
    "hasVolumeBurst": true,
    "kd": {
      "k": 75.1,
      "d": 80.3,
      "prevK": 85.3,
      "prevD": 82.8,
      "h8": 4530.0,
      "l8": 3490.0
    }
  },
  {
    "code": "3443",
    "name": "創意",
    "categories": [
      "0050",
      "ValueTop"
    ],
    "price": 5850.0,
    "prevClose": 5465.0,
    "open": 5475.0,
    "high": 5990.0,
    "low": 5360.0,
    "volume": 3208,
    "ma5": 5388.0,
    "ma10": 4903.0,
    "ma20": 4421.0,
    "ma60": 4522.92,
    "vMa5": 2829,
    "vMa10": 2461,
    "high20d": 5990.0,
    "sparkline": [
      4145.0,
      4390.0,
      4480.0,
      4545.0,
      4530.0,
      4955.0,
      5130.0,
      5540.0,
      5465.0,
      5850.0
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
        "low": 5420.0,
        "close": 5465.0,
        "ma5": 5124.0,
        "ma10": 4736.5
      },
      {
        "open": 5475.0,
        "high": 5990.0,
        "low": 5360.0,
        "close": 5850.0,
        "ma5": 5388.0,
        "ma10": 4903.0
      }
    ],
    "symbol": "3443.TW",
    "maxVol10d": 3208,
    "hasVolumeBurst": false,
    "kd": {
      "k": 89.5,
      "d": 87.6,
      "prevK": 88.3,
      "prevD": 86.6,
      "h8": 5830.0,
      "l8": 4250.0
    }
  },
  {
    "code": "1216",
    "name": "統一",
    "categories": [
      "0050"
    ],
    "price": 75.2,
    "prevClose": 75.8,
    "open": 75.4,
    "high": 75.7,
    "low": 74.6,
    "volume": 9451,
    "ma5": 75.9,
    "ma10": 75.08,
    "ma20": 75.84,
    "ma60": 75.55,
    "vMa5": 10463,
    "vMa10": 15596,
    "high20d": 80.3,
    "sparkline": [
      73.9,
      73.2,
      73.0,
      75.7,
      75.5,
      75.9,
      76.3,
      76.3,
      75.8,
      75.2
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
        "close": 75.8,
        "ma5": 75.96,
        "ma10": 74.86
      },
      {
        "open": 75.4,
        "high": 75.7,
        "low": 74.6,
        "close": 75.2,
        "ma5": 75.9,
        "ma10": 75.08
      }
    ],
    "symbol": "1216.TW",
    "maxVol10d": 27617,
    "hasVolumeBurst": false,
    "kd": {
      "k": 74.3,
      "d": 66.7,
      "prevK": 77.7,
      "prevD": 62.9,
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
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 200.5,
    "prevClose": 207.5,
    "open": 213.5,
    "high": 215.0,
    "low": 200.0,
    "volume": 139517,
    "ma5": 195.2,
    "ma10": 187.5,
    "ma20": 179.75,
    "ma60": 156.65,
    "vMa5": 113750,
    "vMa10": 103398,
    "high20d": 217.0,
    "sparkline": [
      170.5,
      177.0,
      178.5,
      188.0,
      185.0,
      190.0,
      189.0,
      189.0,
      207.5,
      200.5
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
      },
      {
        "open": 213.5,
        "high": 215.0,
        "low": 200.0,
        "close": 200.5,
        "ma5": 195.2,
        "ma10": 187.5
      }
    ],
    "symbol": "1303.TW",
    "maxVol10d": 154379,
    "hasVolumeBurst": false,
    "kd": {
      "k": 80.0,
      "d": 78.4,
      "prevK": 85.9,
      "prevD": 77.6,
      "h8": 207.5,
      "l8": 169.5
    }
  },
  {
    "code": "6505",
    "name": "台塑化",
    "categories": [
      "0050"
    ],
    "price": 71.1,
    "prevClose": 70.9,
    "open": 71.1,
    "high": 74.2,
    "low": 70.1,
    "volume": 19810,
    "ma5": 70.62,
    "ma10": 69.6,
    "ma20": 74.14,
    "ma60": 62.81,
    "vMa5": 16795,
    "vMa10": 20519,
    "high20d": 97.9,
    "sparkline": [
      68.2,
      67.6,
      67.1,
      71.0,
      69.0,
      71.1,
      70.2,
      69.8,
      70.9,
      71.1
    ],
    "high5d": 74.2,
    "high10d": 74.2,
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
        "close": 70.9,
        "ma5": 70.2,
        "ma10": 69.26
      },
      {
        "open": 71.1,
        "high": 74.2,
        "low": 70.1,
        "close": 71.1,
        "ma5": 70.62,
        "ma10": 69.6
      }
    ],
    "symbol": "6505.TW",
    "maxVol10d": 41386,
    "hasVolumeBurst": true,
    "kd": {
      "k": 55.6,
      "d": 44.8,
      "prevK": 52.8,
      "prevD": 39.3,
      "h8": 73.0,
      "l8": 66.2
    }
  },
  {
    "code": "2618",
    "name": "長榮航",
    "categories": [
      "SitcaBuy",
      "Top100",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 41.8,
    "prevClose": 39.9,
    "open": 40.05,
    "high": 41.8,
    "low": 39.9,
    "volume": 45731,
    "ma5": 41.32,
    "ma10": 42.45,
    "ma20": 42.27,
    "ma60": 40.88,
    "vMa5": 38342,
    "vMa10": 38338,
    "high20d": 44.6,
    "sparkline": [
      43.8,
      43.8,
      43.25,
      44.4,
      42.65,
      41.75,
      42.15,
      41.0,
      39.9,
      41.8
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
        "close": 39.9,
        "ma5": 41.49,
        "ma10": 42.64
      },
      {
        "open": 40.05,
        "high": 41.8,
        "low": 39.9,
        "close": 41.8,
        "ma5": 41.32,
        "ma10": 42.45
      }
    ],
    "symbol": "2618.TW",
    "maxVol10d": 55184,
    "hasVolumeBurst": false,
    "kd": {
      "k": 33.1,
      "d": 39.2,
      "prevK": 25.6,
      "prevD": 42.3,
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
    "price": 20.25,
    "prevClose": 19.9,
    "open": 19.9,
    "high": 20.3,
    "low": 19.9,
    "volume": 24735,
    "ma5": 20.15,
    "ma10": 21.09,
    "ma20": 21.3,
    "ma60": 21.12,
    "vMa5": 36886,
    "vMa10": 43993,
    "high20d": 22.85,
    "sparkline": [
      22.45,
      22.6,
      22.15,
      22.5,
      20.45,
      20.25,
      20.25,
      20.1,
      19.9,
      20.25
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
      },
      {
        "open": 19.9,
        "high": 20.3,
        "low": 19.9,
        "close": 20.25,
        "ma5": 20.15,
        "ma10": 21.09
      }
    ],
    "symbol": "2610.TW",
    "maxVol10d": 125826,
    "hasVolumeBurst": true,
    "kd": {
      "k": 13.9,
      "d": 25.5,
      "prevK": 14.2,
      "prevD": 31.2,
      "h8": 22.85,
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
    "price": 6350.0,
    "prevClose": 6165.0,
    "open": 6165.0,
    "high": 6445.0,
    "low": 6110.0,
    "volume": 1909,
    "ma5": 5894.0,
    "ma10": 5569.0,
    "ma20": 5143.0,
    "ma60": 5183.42,
    "vMa5": 2014,
    "vMa10": 2015,
    "high20d": 6445.0,
    "sparkline": [
      5140.0,
      5245.0,
      5305.0,
      5240.0,
      5290.0,
      5535.0,
      5730.0,
      5690.0,
      6165.0,
      6350.0
    ],
    "high5d": 6445.0,
    "high10d": 6445.0,
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
        "close": 6165.0,
        "ma5": 5682.0,
        "ma10": 5432.0
      },
      {
        "open": 6165.0,
        "high": 6445.0,
        "low": 6110.0,
        "close": 6350.0,
        "ma5": 5894.0,
        "ma10": 5569.0
      }
    ],
    "symbol": "2383.TW",
    "maxVol10d": 2814,
    "hasVolumeBurst": false,
    "kd": {
      "k": 92.1,
      "d": 89.1,
      "prevK": 91.7,
      "prevD": 87.6,
      "h8": 6200.0,
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
    "price": 2290.0,
    "prevClose": 2300.0,
    "open": 2300.0,
    "high": 2335.0,
    "low": 2245.0,
    "volume": 2406,
    "ma5": 2242.0,
    "ma10": 2270.5,
    "ma20": 2217.0,
    "ma60": 2373.0,
    "vMa5": 2898,
    "vMa10": 3211,
    "high20d": 2595.0,
    "sparkline": [
      2320.0,
      2385.0,
      2410.0,
      2215.0,
      2165.0,
      2135.0,
      2215.0,
      2270.0,
      2300.0,
      2290.0
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
        "close": 2300.0,
        "ma5": 2217.0,
        "ma10": 2275.0
      },
      {
        "open": 2300.0,
        "high": 2335.0,
        "low": 2245.0,
        "close": 2290.0,
        "ma5": 2242.0,
        "ma10": 2270.5
      }
    ],
    "symbol": "2345.TW",
    "maxVol10d": 4364,
    "hasVolumeBurst": false,
    "kd": {
      "k": 41.7,
      "d": 44.9,
      "prevK": 41.9,
      "prevD": 46.5,
      "h8": 2595.0,
      "l8": 2075.0
    }
  },
  {
    "code": "3017",
    "name": "奇鋐",
    "categories": [
      "0050",
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 3150.0,
    "prevClose": 3235.0,
    "open": 3230.0,
    "high": 3230.0,
    "low": 3115.0,
    "volume": 3117,
    "ma5": 3051.0,
    "ma10": 2907.5,
    "ma20": 2609.75,
    "ma60": 2519.08,
    "vMa5": 5300,
    "vMa10": 5212,
    "high20d": 3320.0,
    "sparkline": [
      2600.0,
      2730.0,
      2940.0,
      2785.0,
      2765.0,
      2760.0,
      2910.0,
      3200.0,
      3235.0,
      3150.0
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
        "close": 3235.0,
        "ma5": 2974.0,
        "ma10": 2847.5
      },
      {
        "open": 3230.0,
        "high": 3230.0,
        "low": 3115.0,
        "close": 3150.0,
        "ma5": 3051.0,
        "ma10": 2907.5
      }
    ],
    "symbol": "3017.TW",
    "maxVol10d": 9481,
    "hasVolumeBurst": true,
    "kd": {
      "k": 84.8,
      "d": 85.4,
      "prevK": 89.4,
      "prevD": 85.7,
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
    "price": 2360.0,
    "prevClose": 2300.0,
    "open": 2335.0,
    "high": 2400.0,
    "low": 2250.0,
    "volume": 2042,
    "ma5": 2247.0,
    "ma10": 2108.0,
    "ma20": 2065.0,
    "ma60": 2170.0,
    "vMa5": 2250,
    "vMa10": 2820,
    "high20d": 2400.0,
    "sparkline": [
      1925.0,
      1885.0,
      1975.0,
      2030.0,
      2030.0,
      2080.0,
      2195.0,
      2300.0,
      2300.0,
      2360.0
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
        "close": 2300.0,
        "ma5": 2181.0,
        "ma10": 2068.0
      },
      {
        "open": 2335.0,
        "high": 2400.0,
        "low": 2250.0,
        "close": 2360.0,
        "ma5": 2247.0,
        "ma10": 2108.0
      }
    ],
    "symbol": "2360.TW",
    "maxVol10d": 5944,
    "hasVolumeBurst": false,
    "kd": {
      "k": 83.0,
      "d": 74.2,
      "prevK": 78.1,
      "prevD": 69.8,
      "h8": 2395.0,
      "l8": 1845.0
    }
  },
  {
    "code": "2059",
    "name": "川湖",
    "categories": [
      "0050"
    ],
    "price": 13750.0,
    "prevClose": 12500.0,
    "open": 13750.0,
    "high": 13750.0,
    "low": 13750.0,
    "volume": 244,
    "ma5": 12569.0,
    "ma10": 11492.5,
    "ma20": 9672.75,
    "ma60": 7814.42,
    "vMa5": 288,
    "vMa10": 488,
    "high20d": 13750.0,
    "sparkline": [
      9495.0,
      9470.0,
      10100.0,
      11110.0,
      11905.0,
      12315.0,
      12045.0,
      12235.0,
      12500.0,
      13750.0
    ],
    "high5d": 13750.0,
    "high10d": 13750.0,
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
        "close": 12500.0,
        "ma5": 12200.0,
        "ma10": 10981.0
      },
      {
        "open": 13750.0,
        "high": 13750.0,
        "low": 13750.0,
        "close": 13750.0,
        "ma5": 12569.0,
        "ma10": 11492.5
      }
    ],
    "symbol": "2059.TW",
    "maxVol10d": 978,
    "hasVolumeBurst": false,
    "kd": {
      "k": 95.7,
      "d": 92.4,
      "prevK": 93.5,
      "prevD": 90.8,
      "h8": 12670.0,
      "l8": 9275.0
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
    "price": 136.0,
    "prevClose": 135.0,
    "open": 135.0,
    "high": 137.0,
    "low": 135.0,
    "volume": 10251,
    "ma5": 135.8,
    "ma10": 136.35,
    "ma20": 137.95,
    "ma60": 139.53,
    "vMa5": 9391,
    "vMa10": 9816,
    "high20d": 142.5,
    "sparkline": [
      136.5,
      137.0,
      137.0,
      137.5,
      136.5,
      136.0,
      136.0,
      136.0,
      135.0,
      136.0
    ],
    "high5d": 137.0,
    "high10d": 138.5,
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
      },
      {
        "open": 135.0,
        "high": 137.0,
        "low": 135.0,
        "close": 136.0,
        "ma5": 135.8,
        "ma10": 136.35
      }
    ],
    "symbol": "2412.TW",
    "maxVol10d": 15332,
    "hasVolumeBurst": false,
    "kd": {
      "k": 17.6,
      "d": 16.3,
      "prevK": 9.8,
      "prevD": 15.6,
      "h8": 138.0,
      "l8": 135.0
    }
  },
  {
    "code": "3665",
    "name": "貿聯-KY",
    "categories": [
      "0050"
    ],
    "price": 2135.0,
    "prevClose": 2200.0,
    "open": 2185.0,
    "high": 2185.0,
    "low": 2095.0,
    "volume": 1876,
    "ma5": 2179.0,
    "ma10": 2231.0,
    "ma20": 2173.75,
    "ma60": 2085.33,
    "vMa5": 2463,
    "vMa10": 3386,
    "high20d": 2555.0,
    "sparkline": [
      2300.0,
      2355.0,
      2370.0,
      2200.0,
      2190.0,
      2200.0,
      2155.0,
      2205.0,
      2200.0,
      2135.0
    ],
    "high5d": 2275.0,
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
        "close": 2200.0,
        "ma5": 2190.0,
        "ma10": 2227.0
      },
      {
        "open": 2185.0,
        "high": 2185.0,
        "low": 2095.0,
        "close": 2135.0,
        "ma5": 2179.0,
        "ma10": 2231.0
      }
    ],
    "symbol": "3665.TW",
    "maxVol10d": 5306,
    "hasVolumeBurst": false,
    "kd": {
      "k": 27.7,
      "d": 38.9,
      "prevK": 34.8,
      "prevD": 44.5,
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
      "MajorBuy",
      "ValueTop",
      "SitcaBuy",
      "SitcaBuy3D",
      "MajorBuy1D"
    ],
    "price": 503.0,
    "prevClose": 489.5,
    "open": 491.5,
    "high": 515.0,
    "low": 484.0,
    "volume": 45267,
    "ma5": 486.3,
    "ma10": 478.9,
    "ma20": 467.93,
    "ma60": 533.39,
    "vMa5": 46412,
    "vMa10": 40714,
    "high20d": 559.0,
    "sparkline": [
      444.0,
      488.0,
      482.0,
      473.0,
      470.5,
      490.0,
      471.5,
      477.5,
      489.5,
      503.0
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
        "close": 489.5,
        "ma5": 479.8,
        "ma10": 470.75
      },
      {
        "open": 491.5,
        "high": 515.0,
        "low": 484.0,
        "close": 503.0,
        "ma5": 486.3,
        "ma10": 478.9
      }
    ],
    "symbol": "4958.TW",
    "maxVol10d": 61365,
    "hasVolumeBurst": false,
    "kd": {
      "k": 71.5,
      "d": 70.0,
      "prevK": 71.0,
      "prevD": 69.2,
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
    "price": 6750.0,
    "prevClose": 6590.0,
    "open": 6600.0,
    "high": 6825.0,
    "low": 6465.0,
    "volume": 466,
    "ma5": 6588.0,
    "ma10": 6473.5,
    "ma20": 6271.0,
    "ma60": 6735.33,
    "vMa5": 543,
    "vMa10": 564,
    "high20d": 6960.0,
    "sparkline": [
      6190.0,
      6530.0,
      6475.0,
      6320.0,
      6280.0,
      6350.0,
      6480.0,
      6770.0,
      6590.0,
      6750.0
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
        "low": 6560.0,
        "close": 6590.0,
        "ma5": 6494.0,
        "ma10": 6441.0
      },
      {
        "open": 6600.0,
        "high": 6825.0,
        "low": 6465.0,
        "close": 6750.0,
        "ma5": 6588.0,
        "ma10": 6473.5
      }
    ],
    "symbol": "7769.TW",
    "maxVol10d": 998,
    "hasVolumeBurst": true,
    "kd": {
      "k": 70.8,
      "d": 71.3,
      "prevK": 69.3,
      "prevD": 71.6,
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
    "price": 5340.0,
    "prevClose": 4855.0,
    "open": 5340.0,
    "high": 5340.0,
    "low": 5340.0,
    "volume": 1195,
    "ma5": 4673.0,
    "ma10": 4481.5,
    "ma20": 3976.5,
    "ma60": 3697.42,
    "vMa5": 994,
    "vMa10": 1514,
    "high20d": 5340.0,
    "sparkline": [
      4145.0,
      4340.0,
      4450.0,
      4380.0,
      4135.0,
      4065.0,
      4470.0,
      4635.0,
      4855.0,
      5340.0
    ],
    "high5d": 5340.0,
    "high10d": 5340.0,
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
        "high": 4860.0,
        "low": 4530.0,
        "close": 4855.0,
        "ma5": 4432.0,
        "ma10": 4324.5
      },
      {
        "open": 5340.0,
        "high": 5340.0,
        "low": 5340.0,
        "close": 5340.0,
        "ma5": 4673.0,
        "ma10": 4481.5
      }
    ],
    "symbol": "3653.TW",
    "maxVol10d": 2818,
    "hasVolumeBurst": true,
    "kd": {
      "k": 93.2,
      "d": 86.4,
      "prevK": 89.8,
      "prevD": 82.9,
      "h8": 4860.0,
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
    "price": 1010.0,
    "prevClose": 1015.0,
    "open": 1020.0,
    "high": 1025.0,
    "low": 995.0,
    "volume": 6274,
    "ma5": 999.8,
    "ma10": 972.9,
    "ma20": 915.5,
    "ma60": 1137.07,
    "vMa5": 12280,
    "vMa10": 12926,
    "high20d": 1065.0,
    "sparkline": [
      897.0,
      940.0,
      985.0,
      982.0,
      926.0,
      964.0,
      1000.0,
      1010.0,
      1015.0,
      1010.0
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
        "close": 1015.0,
        "ma5": 983.0,
        "ma10": 959.1
      },
      {
        "open": 1020.0,
        "high": 1025.0,
        "low": 995.0,
        "close": 1010.0,
        "ma5": 999.8,
        "ma10": 972.9
      }
    ],
    "symbol": "2368.TW",
    "maxVol10d": 19420,
    "hasVolumeBurst": true,
    "kd": {
      "k": 73.8,
      "d": 74.3,
      "prevK": 78.0,
      "prevD": 74.5,
      "h8": 1065.0,
      "l8": 906.0
    }
  },
  {
    "code": "4904",
    "name": "遠傳",
    "categories": [
      "0050",
      "SitcaBuy",
      "SitcaBuy5D"
    ],
    "price": 100.5,
    "prevClose": 99.0,
    "open": 98.9,
    "high": 101.0,
    "low": 98.7,
    "volume": 4843,
    "ma5": 100.2,
    "ma10": 100.95,
    "ma20": 102.83,
    "ma60": 102.38,
    "vMa5": 5277,
    "vMa10": 5924,
    "high20d": 108.5,
    "sparkline": [
      101.0,
      101.0,
      102.0,
      103.0,
      101.5,
      101.0,
      101.0,
      99.5,
      99.0,
      100.5
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
        "high": 99.4,
        "low": 98.1,
        "close": 99.0,
        "ma5": 100.4,
        "ma10": 101.25
      },
      {
        "open": 98.9,
        "high": 101.0,
        "low": 98.7,
        "close": 100.5,
        "ma5": 100.2,
        "ma10": 100.95
      }
    ],
    "symbol": "4904.TW",
    "maxVol10d": 10542,
    "hasVolumeBurst": false,
    "kd": {
      "k": 24.3,
      "d": 22.2,
      "prevK": 16.1,
      "prevD": 21.1,
      "h8": 104.0,
      "l8": 98.1
    }
  },
  {
    "code": "3045",
    "name": "台灣大",
    "categories": [
      "0050"
    ],
    "price": 111.0,
    "prevClose": 108.0,
    "open": 108.0,
    "high": 111.5,
    "low": 108.0,
    "volume": 18632,
    "ma5": 109.3,
    "ma10": 110.05,
    "ma20": 111.5,
    "ma60": 113.94,
    "vMa5": 12925,
    "vMa10": 10298,
    "high20d": 115.0,
    "sparkline": [
      111.0,
      110.5,
      110.5,
      111.5,
      110.5,
      109.5,
      109.5,
      108.5,
      108.0,
      111.0
    ],
    "high5d": 111.5,
    "high10d": 112.0,
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
        "close": 108.0,
        "ma5": 109.2,
        "ma10": 110.15
      },
      {
        "open": 108.0,
        "high": 111.5,
        "low": 108.0,
        "close": 111.0,
        "ma5": 109.3,
        "ma10": 110.05
      }
    ],
    "symbol": "3045.TW",
    "maxVol10d": 18632,
    "hasVolumeBurst": true,
    "kd": {
      "k": 37.3,
      "d": 23.7,
      "prevK": 12.3,
      "prevD": 16.9,
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
    "price": 10.4,
    "prevClose": 10.32,
    "open": 10.32,
    "high": 10.46,
    "low": 10.29,
    "volume": 270588,
    "ma5": 10.21,
    "ma10": 9.99,
    "ma20": 9.67,
    "ma60": 10.28,
    "vMa5": 286191,
    "vMa10": 247198,
    "high20d": 10.46,
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
      10.4
    ],
    "high5d": 10.46,
    "high10d": 10.46,
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
        "open": 10.26,
        "high": 10.38,
        "low": 10.22,
        "close": 10.3,
        "ma5": 9.99,
        "ma10": 9.79
      },
      {
        "open": 10.4,
        "high": 10.42,
        "low": 10.28,
        "close": 10.32,
        "ma5": 10.11,
        "ma10": 9.89
      },
      {
        "open": 10.32,
        "high": 10.46,
        "low": 10.29,
        "close": 10.4,
        "ma5": 10.21,
        "ma10": 9.99
      }
    ],
    "symbol": "00403A.TW",
    "maxVol10d": 371521,
    "hasVolumeBurst": true,
    "kd": {
      "k": 91.9,
      "d": 88.6,
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
    "price": 11.84,
    "prevClose": 11.76,
    "open": 11.84,
    "high": 11.95,
    "low": 11.74,
    "volume": 169244,
    "ma5": 11.71,
    "ma10": 11.36,
    "ma20": 10.96,
    "ma60": 11.75,
    "vMa5": 199499,
    "vMa10": 238474,
    "high20d": 12.05,
    "sparkline": [
      10.49,
      11.12,
      11.05,
      11.01,
      11.37,
      11.42,
      11.6,
      11.91,
      11.76,
      11.84
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
        "open": 11.97,
        "high": 11.99,
        "low": 11.8,
        "close": 11.91,
        "ma5": 11.46,
        "ma10": 11.14
      },
      {
        "open": 12.04,
        "high": 12.05,
        "low": 11.71,
        "close": 11.76,
        "ma5": 11.61,
        "ma10": 11.23
      },
      {
        "open": 11.84,
        "high": 11.95,
        "low": 11.74,
        "close": 11.84,
        "ma5": 11.71,
        "ma10": 11.36
      }
    ],
    "symbol": "00685L.TW",
    "maxVol10d": 423338,
    "hasVolumeBurst": false,
    "kd": {
      "k": 87.4,
      "d": 86.7,
      "prevK": 89.7,
      "prevD": 86.3,
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
    "price": 35.95,
    "prevClose": 35.69,
    "open": 35.94,
    "high": 36.28,
    "low": 35.61,
    "volume": 145084,
    "ma5": 35.65,
    "ma10": 34.68,
    "ma20": 33.59,
    "ma60": 35.69,
    "vMa5": 175920,
    "vMa10": 206391,
    "high20d": 36.6,
    "sparkline": [
      32.15,
      34.15,
      33.85,
      33.68,
      34.7,
      34.87,
      35.45,
      36.29,
      35.69,
      35.95
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
        "open": 36.47,
        "high": 36.5,
        "low": 35.99,
        "close": 36.29,
        "ma5": 35.0,
        "ma10": 34.15
      },
      {
        "open": 36.59,
        "high": 36.6,
        "low": 35.62,
        "close": 35.69,
        "ma5": 35.4,
        "ma10": 34.35
      },
      {
        "open": 35.94,
        "high": 36.28,
        "low": 35.61,
        "close": 35.95,
        "ma5": 35.65,
        "ma10": 34.68
      }
    ],
    "symbol": "00631L.TW",
    "maxVol10d": 390233,
    "hasVolumeBurst": false,
    "kd": {
      "k": 86.4,
      "d": 86.5,
      "prevK": 89.5,
      "prevD": 86.6,
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
      "TurnoverRate",
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 41.65,
    "prevClose": 43.2,
    "open": 43.35,
    "high": 44.95,
    "low": 40.95,
    "volume": 263016,
    "ma5": 40.07,
    "ma10": 38.45,
    "ma20": 37.17,
    "ma60": 36.99,
    "vMa5": 213885,
    "vMa10": 124946,
    "high20d": 44.95,
    "sparkline": [
      37.0,
      36.95,
      37.3,
      36.55,
      36.3,
      36.3,
      39.9,
      39.3,
      43.2,
      41.65
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
      },
      {
        "open": 43.35,
        "high": 44.95,
        "low": 40.95,
        "close": 41.65,
        "ma5": 40.07,
        "ma10": 38.45
      }
    ],
    "symbol": "2324.TW",
    "maxVol10d": 400219,
    "hasVolumeBurst": true,
    "kd": {
      "k": 77.2,
      "d": 76.9,
      "prevK": 83.5,
      "prevD": 76.7,
      "h8": 43.2,
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
    "price": 30.39,
    "prevClose": 30.22,
    "open": 30.24,
    "high": 30.57,
    "low": 30.06,
    "volume": 210902,
    "ma5": 29.73,
    "ma10": 29.01,
    "ma20": 27.82,
    "ma60": 29.67,
    "vMa5": 199680,
    "vMa10": 202490,
    "high20d": 30.57,
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
      30.39
    ],
    "high5d": 30.57,
    "high10d": 30.57,
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
        "open": 29.96,
        "high": 30.18,
        "low": 29.68,
        "close": 29.95,
        "ma5": 28.92,
        "ma10": 28.27
      },
      {
        "open": 30.29,
        "high": 30.53,
        "low": 30.07,
        "close": 30.22,
        "ma5": 29.35,
        "ma10": 28.68
      },
      {
        "open": 30.24,
        "high": 30.57,
        "low": 30.06,
        "close": 30.39,
        "ma5": 29.73,
        "ma10": 29.01
      }
    ],
    "symbol": "00981A.TW",
    "maxVol10d": 301418,
    "hasVolumeBurst": true,
    "kd": {
      "k": 92.4,
      "d": 89.0,
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
    "price": 9.97,
    "prevClose": 10.01,
    "open": 9.98,
    "high": 10.02,
    "low": 9.93,
    "volume": 130825,
    "ma5": 10.03,
    "ma10": 10.19,
    "ma20": 10.47,
    "ma60": 10.34,
    "vMa5": 137917,
    "vMa10": 178078,
    "high20d": 11.67,
    "sparkline": [
      10.63,
      10.3,
      10.33,
      10.35,
      10.17,
      10.16,
      10.06,
      9.95,
      10.01,
      9.97
    ],
    "high5d": 10.27,
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
        "open": 9.92,
        "high": 10.0,
        "low": 9.91,
        "close": 9.95,
        "ma5": 10.14,
        "ma10": 10.3
      },
      {
        "open": 9.9,
        "high": 10.03,
        "low": 9.89,
        "close": 10.01,
        "ma5": 10.07,
        "ma10": 10.26
      },
      {
        "open": 9.98,
        "high": 10.02,
        "low": 9.93,
        "close": 9.97,
        "ma5": 10.03,
        "ma10": 10.19
      }
    ],
    "symbol": "00632R.TW",
    "maxVol10d": 318457,
    "hasVolumeBurst": false,
    "kd": {
      "k": 10.4,
      "d": 10.8,
      "prevK": 8.5,
      "prevD": 11.0,
      "h8": 10.45,
      "l8": 9.89
    }
  },
  {
    "code": "2337",
    "name": "旺宏",
    "categories": [
      "Top100",
      "MajorBuy",
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 129.5,
    "prevClose": 137.0,
    "open": 135.0,
    "high": 135.0,
    "low": 128.0,
    "volume": 74155,
    "ma5": 134.4,
    "ma10": 129.35,
    "ma20": 122.42,
    "ma60": 142.24,
    "vMa5": 100677,
    "vMa10": 115902,
    "high20d": 144.5,
    "sparkline": [
      120.0,
      117.5,
      129.0,
      121.5,
      133.5,
      132.5,
      136.5,
      136.5,
      137.0,
      129.5
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
        "low": 134.5,
        "close": 137.0,
        "ma5": 135.2,
        "ma10": 127.45
      },
      {
        "open": 135.0,
        "high": 135.0,
        "low": 128.0,
        "close": 129.5,
        "ma5": 134.4,
        "ma10": 129.35
      }
    ],
    "symbol": "2337.TW",
    "maxVol10d": 172045,
    "hasVolumeBurst": true,
    "kd": {
      "k": 71.3,
      "d": 76.6,
      "prevK": 83.2,
      "prevD": 79.3,
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
    "price": 38.5,
    "prevClose": 39.05,
    "open": 38.7,
    "high": 38.7,
    "low": 37.6,
    "volume": 26731,
    "ma5": 39.03,
    "ma10": 37.05,
    "ma20": 34.45,
    "ma60": 36.05,
    "vMa5": 53983,
    "vMa10": 43450,
    "high20d": 41.0,
    "sparkline": [
      33.75,
      34.85,
      34.25,
      34.55,
      38.0,
      38.3,
      40.0,
      39.3,
      39.05,
      38.5
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
        "low": 38.55,
        "close": 39.05,
        "ma5": 38.93,
        "ma10": 36.48
      },
      {
        "open": 38.7,
        "high": 38.7,
        "low": 37.6,
        "close": 38.5,
        "ma5": 39.03,
        "ma10": 37.05
      }
    ],
    "symbol": "1605.TW",
    "maxVol10d": 93858,
    "hasVolumeBurst": true,
    "kd": {
      "k": 77.2,
      "d": 81.0,
      "prevK": 83.7,
      "prevD": 82.9,
      "h8": 41.0,
      "l8": 34.0
    }
  },
  {
    "code": "8150",
    "name": "南茂",
    "categories": [
      "TurnoverRate"
    ],
    "price": 91.5,
    "prevClose": 91.9,
    "open": 92.5,
    "high": 94.0,
    "low": 90.0,
    "volume": 30687,
    "ma5": 93.5,
    "ma10": 90.26,
    "ma20": 87.78,
    "ma60": 97.52,
    "vMa5": 65544,
    "vMa10": 50907,
    "high20d": 109.5,
    "sparkline": [
      82.5,
      86.5,
      86.9,
      86.3,
      92.9,
      99.0,
      92.2,
      92.9,
      91.9,
      91.5
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
        "low": 90.5,
        "close": 91.9,
        "ma5": 93.78,
        "ma10": 88.87
      },
      {
        "open": 92.5,
        "high": 94.0,
        "low": 90.0,
        "close": 91.5,
        "ma5": 93.5,
        "ma10": 90.26
      }
    ],
    "symbol": "8150.TW",
    "maxVol10d": 100047,
    "hasVolumeBurst": true,
    "kd": {
      "k": 65.8,
      "d": 69.8,
      "prevK": 73.6,
      "prevD": 71.9,
      "h8": 99.4,
      "l8": 83.5
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
    "price": 15.52,
    "prevClose": 15.49,
    "open": 15.54,
    "high": 15.61,
    "low": 15.47,
    "volume": 93472,
    "ma5": 15.39,
    "ma10": 15.15,
    "ma20": 14.79,
    "ma60": 15.1,
    "vMa5": 94718,
    "vMa10": 106725,
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
      15.52
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
        "open": 15.49,
        "high": 15.56,
        "low": 15.42,
        "close": 15.52,
        "ma5": 15.19,
        "ma10": 14.97
      },
      {
        "open": 15.61,
        "high": 15.65,
        "low": 15.45,
        "close": 15.49,
        "ma5": 15.31,
        "ma10": 15.06
      },
      {
        "open": 15.54,
        "high": 15.61,
        "low": 15.47,
        "close": 15.52,
        "ma5": 15.39,
        "ma10": 15.15
      }
    ],
    "symbol": "009816.TW",
    "maxVol10d": 182614,
    "hasVolumeBurst": false,
    "kd": {
      "k": 89.4,
      "d": 88.6,
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
    "price": 8.8,
    "prevClose": 8.66,
    "open": 8.66,
    "high": 8.84,
    "low": 8.62,
    "volume": 90718,
    "ma5": 8.53,
    "ma10": 8.3,
    "ma20": 7.95,
    "ma60": 8.78,
    "vMa5": 78006,
    "vMa10": 85015,
    "high20d": 8.84,
    "sparkline": [
      7.9,
      8.05,
      8.25,
      8.02,
      8.13,
      8.15,
      8.42,
      8.62,
      8.66,
      8.8
    ],
    "high5d": 8.84,
    "high10d": 8.84,
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
        "open": 8.6,
        "high": 8.67,
        "low": 8.52,
        "close": 8.62,
        "ma5": 8.27,
        "ma10": 8.05
      },
      {
        "open": 8.7,
        "high": 8.76,
        "low": 8.62,
        "close": 8.66,
        "ma5": 8.4,
        "ma10": 8.19
      },
      {
        "open": 8.66,
        "high": 8.84,
        "low": 8.62,
        "close": 8.8,
        "ma5": 8.53,
        "ma10": 8.3
      }
    ],
    "symbol": "00405A.TW",
    "maxVol10d": 122994,
    "hasVolumeBurst": false,
    "kd": {
      "k": 93.0,
      "d": 88.6,
      "prevK": 91.8,
      "prevD": 86.4,
      "h8": 8.76,
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
    "price": 18.58,
    "prevClose": 18.24,
    "open": 18.41,
    "high": 18.63,
    "low": 18.28,
    "volume": 126125,
    "ma5": 18.06,
    "ma10": 17.49,
    "ma20": 16.68,
    "ma60": 18.59,
    "vMa5": 106528,
    "vMa10": 118534,
    "high20d": 18.63,
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
      18.58
    ],
    "high5d": 18.63,
    "high10d": 18.63,
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
        "open": 18.16,
        "high": 18.34,
        "low": 18.03,
        "close": 18.19,
        "ma5": 17.54,
        "ma10": 16.95
      },
      {
        "open": 18.37,
        "high": 18.47,
        "low": 18.17,
        "close": 18.24,
        "ma5": 17.81,
        "ma10": 17.23
      },
      {
        "open": 18.41,
        "high": 18.63,
        "low": 18.28,
        "close": 18.58,
        "ma5": 18.06,
        "ma10": 17.49
      }
    ],
    "symbol": "00991A.TW",
    "maxVol10d": 186185,
    "hasVolumeBurst": false,
    "kd": {
      "k": 94.0,
      "d": 89.5,
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
    "price": 9.91,
    "prevClose": 9.92,
    "open": 9.94,
    "high": 10.0,
    "low": 9.84,
    "volume": 57764,
    "ma5": 9.77,
    "ma10": 9.54,
    "ma20": 9.08,
    "ma60": 9.37,
    "vMa5": 84474,
    "vMa10": 70997,
    "high20d": 10.01,
    "sparkline": [
      8.99,
      9.28,
      9.45,
      9.28,
      9.49,
      9.55,
      9.66,
      9.83,
      9.92,
      9.91
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
        "open": 9.85,
        "high": 9.92,
        "low": 9.76,
        "close": 9.83,
        "ma5": 9.56,
        "ma10": 9.27
      },
      {
        "open": 9.93,
        "high": 10.01,
        "low": 9.87,
        "close": 9.92,
        "ma5": 9.69,
        "ma10": 9.42
      },
      {
        "open": 9.94,
        "high": 10.0,
        "low": 9.84,
        "close": 9.91,
        "ma5": 9.77,
        "ma10": 9.54
      }
    ],
    "symbol": "00407A.TW",
    "maxVol10d": 125829,
    "hasVolumeBurst": true,
    "kd": {
      "k": 91.4,
      "d": 89.9,
      "prevK": 93.1,
      "prevD": 89.1,
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
    "price": 106.45,
    "prevClose": 106.4,
    "open": 106.4,
    "high": 106.95,
    "low": 106.0,
    "volume": 57824,
    "ma5": 105.87,
    "ma10": 104.42,
    "ma20": 102.34,
    "ma60": 104.14,
    "vMa5": 68697,
    "vMa10": 83788,
    "high20d": 107.5,
    "sparkline": [
      100.65,
      103.8,
      103.3,
      102.85,
      104.25,
      104.6,
      105.2,
      106.7,
      106.4,
      106.45
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
        "open": 106.55,
        "high": 107.0,
        "low": 106.15,
        "close": 106.7,
        "ma5": 104.72,
        "ma10": 103.62
      },
      {
        "open": 107.1,
        "high": 107.5,
        "low": 106.05,
        "close": 106.4,
        "ma5": 105.43,
        "ma10": 103.97
      },
      {
        "open": 106.4,
        "high": 106.95,
        "low": 106.0,
        "close": 106.45,
        "ma5": 105.87,
        "ma10": 104.42
      }
    ],
    "symbol": "0050.TW",
    "maxVol10d": 162327,
    "hasVolumeBurst": false,
    "kd": {
      "k": 87.6,
      "d": 88.0,
      "prevK": 91.0,
      "prevD": 88.2,
      "h8": 107.5,
      "l8": 102.05
    }
  },
  {
    "code": "00878",
    "name": "國泰永續高股息",
    "categories": [
      "Top100",
      "ValueTop"
    ],
    "price": 33.75,
    "prevClose": 33.87,
    "open": 33.88,
    "high": 33.9,
    "low": 33.55,
    "volume": 168069,
    "ma5": 33.68,
    "ma10": 33.32,
    "ma20": 32.7,
    "ma60": 32.57,
    "vMa5": 74273,
    "vMa10": 61976,
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
      33.75
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
        "open": 33.9,
        "high": 33.95,
        "low": 33.69,
        "close": 33.78,
        "ma5": 33.4,
        "ma10": 33.05
      },
      {
        "open": 34.09,
        "high": 34.19,
        "low": 33.8,
        "close": 33.87,
        "ma5": 33.61,
        "ma10": 33.2
      },
      {
        "open": 33.88,
        "high": 33.9,
        "low": 33.55,
        "close": 33.75,
        "ma5": 33.68,
        "ma10": 33.32
      }
    ],
    "symbol": "00878.TW",
    "maxVol10d": 168069,
    "hasVolumeBurst": true,
    "kd": {
      "k": 81.7,
      "d": 84.1,
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
    "price": 15.05,
    "prevClose": 14.79,
    "open": 14.91,
    "high": 15.11,
    "low": 14.81,
    "volume": 60778,
    "ma5": 14.59,
    "ma10": 14.18,
    "ma20": 13.61,
    "ma60": 14.22,
    "vMa5": 44037,
    "vMa10": 41048,
    "high20d": 15.11,
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
      15.05
    ],
    "high5d": 15.11,
    "high10d": 15.11,
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
        "open": 14.68,
        "high": 14.8,
        "low": 14.59,
        "close": 14.73,
        "ma5": 14.15,
        "ma10": 13.81
      },
      {
        "open": 14.87,
        "high": 14.94,
        "low": 14.74,
        "close": 14.79,
        "ma5": 14.36,
        "ma10": 14.0
      },
      {
        "open": 14.91,
        "high": 15.11,
        "low": 14.81,
        "close": 15.05,
        "ma5": 14.59,
        "ma10": 14.18
      }
    ],
    "symbol": "00400A.TW",
    "maxVol10d": 60778,
    "hasVolumeBurst": false,
    "kd": {
      "k": 94.0,
      "d": 90.2,
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
      "Top100"
    ],
    "price": 9.84,
    "prevClose": 9.78,
    "open": 9.82,
    "high": 9.87,
    "low": 9.74,
    "volume": 42446,
    "ma5": 9.65,
    "ma10": 9.44,
    "ma20": 9.15,
    "ma60": 9.64,
    "vMa5": 42847,
    "vMa10": 49856,
    "high20d": 9.87,
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
      9.84
    ],
    "high5d": 9.87,
    "high10d": 9.87,
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
        "open": 9.69,
        "high": 9.75,
        "low": 9.62,
        "close": 9.69,
        "ma5": 9.44,
        "ma10": 9.22
      },
      {
        "open": 9.74,
        "high": 9.85,
        "low": 9.73,
        "close": 9.78,
        "ma5": 9.55,
        "ma10": 9.34
      },
      {
        "open": 9.82,
        "high": 9.87,
        "low": 9.74,
        "close": 9.84,
        "ma5": 9.65,
        "ma10": 9.44
      }
    ],
    "symbol": "00406A.TW",
    "maxVol10d": 80910,
    "hasVolumeBurst": false,
    "kd": {
      "k": 93.9,
      "d": 89.4,
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
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 30.34,
    "prevClose": 30.57,
    "open": 30.52,
    "high": 30.52,
    "low": 30.2,
    "volume": 55487,
    "ma5": 30.33,
    "ma10": 30.05,
    "ma20": 29.61,
    "ma60": 29.71,
    "vMa5": 51002,
    "vMa10": 49843,
    "high20d": 30.8,
    "sparkline": [
      29.51,
      29.94,
      29.6,
      29.74,
      30.03,
      30.12,
      30.19,
      30.41,
      30.57,
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
        "open": 30.46,
        "high": 30.52,
        "low": 30.32,
        "close": 30.41,
        "ma5": 30.1,
        "ma10": 29.86
      },
      {
        "open": 30.7,
        "high": 30.8,
        "low": 30.51,
        "close": 30.57,
        "ma5": 30.26,
        "ma10": 29.96
      },
      {
        "open": 30.52,
        "high": 30.52,
        "low": 30.2,
        "close": 30.34,
        "ma5": 30.33,
        "ma10": 30.05
      }
    ],
    "symbol": "00919.TW",
    "maxVol10d": 65003,
    "hasVolumeBurst": false,
    "kd": {
      "k": 78.6,
      "d": 81.9,
      "prevK": 86.2,
      "prevD": 83.5,
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
    "price": 93.5,
    "prevClose": 95.8,
    "open": 96.2,
    "high": 96.2,
    "low": 93.0,
    "volume": 15445,
    "ma5": 96.8,
    "ma10": 92.8,
    "ma20": 87.75,
    "ma60": 89.68,
    "vMa5": 33485,
    "vMa10": 25183,
    "high20d": 101.5,
    "sparkline": [
      85.2,
      86.2,
      89.0,
      91.2,
      92.4,
      100.0,
      96.9,
      97.8,
      95.8,
      93.5
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
        "low": 95.1,
        "close": 95.8,
        "ma5": 96.58,
        "ma10": 91.59
      },
      {
        "open": 96.2,
        "high": 96.2,
        "low": 93.0,
        "close": 93.5,
        "ma5": 96.8,
        "ma10": 92.8
      }
    ],
    "symbol": "8112.TW",
    "maxVol10d": 71918,
    "hasVolumeBurst": true,
    "kd": {
      "k": 71.6,
      "d": 77.7,
      "prevK": 81.2,
      "prevD": 80.8,
      "h8": 101.5,
      "l8": 84.7
    }
  },
  {
    "code": "0056",
    "name": "元大高股息",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 53.0,
    "prevClose": 53.4,
    "open": 53.4,
    "high": 53.65,
    "low": 52.85,
    "volume": 26666,
    "ma5": 52.88,
    "ma10": 52.12,
    "ma20": 50.66,
    "ma60": 51.37,
    "vMa5": 35384,
    "vMa10": 37354,
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
      53.0
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
        "open": 53.4,
        "high": 53.5,
        "low": 52.9,
        "close": 53.0,
        "ma5": 52.3,
        "ma10": 51.41
      },
      {
        "open": 53.35,
        "high": 54.0,
        "low": 53.3,
        "close": 53.4,
        "ma5": 52.77,
        "ma10": 51.81
      },
      {
        "open": 53.4,
        "high": 53.65,
        "low": 52.85,
        "close": 53.0,
        "ma5": 52.88,
        "ma10": 52.12
      }
    ],
    "symbol": "0056.TW",
    "maxVol10d": 66315,
    "hasVolumeBurst": true,
    "kd": {
      "k": 81.3,
      "d": 84.3,
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
      "MajorBuy3D"
    ],
    "price": 17.69,
    "prevClose": 17.37,
    "open": 17.58,
    "high": 17.73,
    "low": 17.43,
    "volume": 34960,
    "ma5": 17.21,
    "ma10": 16.91,
    "ma20": 16.61,
    "ma60": 19.55,
    "vMa5": 40151,
    "vMa10": 45078,
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
      17.69
    ],
    "high5d": 17.73,
    "high10d": 17.73,
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
        "open": 17.47,
        "high": 17.68,
        "low": 17.38,
        "close": 17.66,
        "ma5": 16.81,
        "ma10": 16.64
      },
      {
        "open": 17.68,
        "high": 17.68,
        "low": 17.36,
        "close": 17.37,
        "ma5": 17.0,
        "ma10": 16.76
      },
      {
        "open": 17.58,
        "high": 17.73,
        "low": 17.43,
        "close": 17.69,
        "ma5": 17.21,
        "ma10": 16.91
      }
    ],
    "symbol": "00988A.TW",
    "maxVol10d": 70276,
    "hasVolumeBurst": true,
    "kd": {
      "k": 86.6,
      "d": 79.3,
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
      "Top100",
      "ValueTop",
      "TurnoverRate"
    ],
    "price": 55.15,
    "prevClose": 54.8,
    "open": 55.15,
    "high": 55.35,
    "low": 54.75,
    "volume": 126618,
    "ma5": 54.52,
    "ma10": 53.44,
    "ma20": 51.7,
    "ma60": 53.25,
    "vMa5": 68139,
    "vMa10": 50868,
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
        "open": 55.3,
        "high": 55.4,
        "low": 54.7,
        "close": 55.0,
        "ma5": 53.62,
        "ma10": 52.59
      },
      {
        "open": 55.5,
        "high": 55.55,
        "low": 54.8,
        "close": 54.8,
        "ma5": 54.13,
        "ma10": 53.01
      },
      {
        "open": 55.15,
        "high": 55.35,
        "low": 54.75,
        "close": 55.15,
        "ma5": 54.52,
        "ma10": 53.44
      }
    ],
    "symbol": "00881.TW",
    "maxVol10d": 126618,
    "hasVolumeBurst": true,
    "kd": {
      "k": 90.3,
      "d": 89.0,
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
      "SitcaBuy",
      "MajorBuy",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 18.23,
    "prevClose": 17.91,
    "open": 18.15,
    "high": 18.28,
    "low": 17.97,
    "volume": 56322,
    "ma5": 17.63,
    "ma10": 17.14,
    "ma20": 16.16,
    "ma60": 17.43,
    "vMa5": 42298,
    "vMa10": 43385,
    "high20d": 18.28,
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
      18.23
    ],
    "high5d": 18.28,
    "high10d": 18.28,
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
        "open": 17.7,
        "high": 17.86,
        "low": 17.6,
        "close": 17.78,
        "ma5": 17.11,
        "ma10": 16.56
      },
      {
        "open": 17.97,
        "high": 18.11,
        "low": 17.85,
        "close": 17.91,
        "ma5": 17.37,
        "ma10": 16.87
      },
      {
        "open": 18.15,
        "high": 18.28,
        "low": 17.97,
        "close": 18.23,
        "ma5": 17.63,
        "ma10": 17.14
      }
    ],
    "symbol": "00992A.TW",
    "maxVol10d": 56322,
    "hasVolumeBurst": false,
    "kd": {
      "k": 94.5,
      "d": 90.5,
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
    "price": 259.0,
    "prevClose": 272.5,
    "open": 274.0,
    "high": 286.5,
    "low": 253.0,
    "volume": 32089,
    "ma5": 244.8,
    "ma10": 232.35,
    "ma20": 218.62,
    "ma60": 174.36,
    "vMa5": 30705,
    "vMa10": 27240,
    "high20d": 286.5,
    "sparkline": [
      200.0,
      220.0,
      216.0,
      237.5,
      226.0,
      216.0,
      227.0,
      249.5,
      272.5,
      259.0
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
        "close": 272.5,
        "ma5": 238.2,
        "ma10": 225.5
      },
      {
        "open": 274.0,
        "high": 286.5,
        "low": 253.0,
        "close": 259.0,
        "ma5": 244.8,
        "ma10": 232.35
      }
    ],
    "symbol": "8039.TW",
    "maxVol10d": 55602,
    "hasVolumeBurst": true,
    "kd": {
      "k": 77.0,
      "d": 73.9,
      "prevK": 83.6,
      "prevD": 72.3,
      "h8": 274.0,
      "l8": 210.5
    }
  },
  {
    "code": "2464",
    "name": "盟立",
    "categories": [
      "TurnoverRate",
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 186.0,
    "prevClose": 192.0,
    "open": 197.0,
    "high": 208.0,
    "low": 183.5,
    "volume": 22760,
    "ma5": 191.6,
    "ma10": 182.15,
    "ma20": 160.43,
    "ma60": 163.93,
    "vMa5": 20923,
    "vMa10": 20230,
    "high20d": 208.0,
    "sparkline": [
      162.0,
      170.0,
      178.0,
      173.5,
      180.0,
      187.5,
      196.5,
      196.0,
      192.0,
      186.0
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
        "close": 192.0,
        "ma5": 190.4,
        "ma10": 178.3
      },
      {
        "open": 197.0,
        "high": 208.0,
        "low": 183.5,
        "close": 186.0,
        "ma5": 191.6,
        "ma10": 182.15
      }
    ],
    "symbol": "2464.TW",
    "maxVol10d": 28585,
    "hasVolumeBurst": true,
    "kd": {
      "k": 72.1,
      "d": 79.2,
      "prevK": 83.7,
      "prevD": 82.8,
      "h8": 205.0,
      "l8": 165.0
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
    "price": 76.5,
    "prevClose": 79.0,
    "open": 77.8,
    "high": 77.8,
    "low": 76.0,
    "volume": 14571,
    "ma5": 81.38,
    "ma10": 77.41,
    "ma20": 72.59,
    "ma60": 66.5,
    "vMa5": 32350,
    "vMa10": 16730,
    "high20d": 92.3,
    "sparkline": [
      72.0,
      72.0,
      72.0,
      72.0,
      79.2,
      87.1,
      82.5,
      81.8,
      79.0,
      76.5
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
        "low": 79.0,
        "close": 79.0,
        "ma5": 81.92,
        "ma10": 76.96
      },
      {
        "open": 77.8,
        "high": 77.8,
        "low": 76.0,
        "close": 76.5,
        "ma5": 81.38,
        "ma10": 77.41
      }
    ],
    "symbol": "5904.TWO",
    "maxVol10d": 84486,
    "hasVolumeBurst": true,
    "kd": {
      "k": 45.0,
      "d": 61.6,
      "prevK": 56.5,
      "prevD": 69.8,
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
      "SitcaBuy5D"
    ],
    "price": 122.5,
    "prevClose": 111.5,
    "open": 111.0,
    "high": 122.5,
    "low": 108.5,
    "volume": 84366,
    "ma5": 108.8,
    "ma10": 104.69,
    "ma20": 106.14,
    "ma60": 116.07,
    "vMa5": 66823,
    "vMa10": 41820,
    "high20d": 143.0,
    "sparkline": [
      96.9,
      104.0,
      108.0,
      101.0,
      93.0,
      94.0,
      103.0,
      113.0,
      111.5,
      122.5
    ],
    "high5d": 122.5,
    "high10d": 122.5,
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
        "low": 108.0,
        "close": 111.5,
        "ma5": 102.9,
        "ma10": 101.25
      },
      {
        "open": 111.0,
        "high": 122.5,
        "low": 108.5,
        "close": 122.5,
        "ma5": 108.8,
        "ma10": 104.69
      }
    ],
    "symbol": "6182.TWO",
    "maxVol10d": 122537,
    "hasVolumeBurst": true,
    "kd": {
      "k": 81.9,
      "d": 68.4,
      "prevK": 72.8,
      "prevD": 61.6,
      "h8": 119.5,
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
    "price": 14.41,
    "prevClose": 14.53,
    "open": 14.48,
    "high": 14.48,
    "low": 14.39,
    "volume": 111198,
    "ma5": 14.52,
    "ma10": 14.59,
    "ma20": 14.62,
    "ma60": 14.82,
    "vMa5": 64442,
    "vMa10": 47200,
    "high20d": 14.79,
    "sparkline": [
      14.62,
      14.73,
      14.73,
      14.61,
      14.65,
      14.55,
      14.56,
      14.56,
      14.53,
      14.41
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
        "low": 14.52,
        "close": 14.53,
        "ma5": 14.57,
        "ma10": 14.61
      },
      {
        "open": 14.48,
        "high": 14.48,
        "low": 14.39,
        "close": 14.41,
        "ma5": 14.52,
        "ma10": 14.59
      }
    ],
    "symbol": "00937B.TWO",
    "maxVol10d": 111198,
    "hasVolumeBurst": true,
    "kd": {
      "k": 16.1,
      "d": 28.2,
      "prevK": 21.4,
      "prevD": 34.3,
      "h8": 14.76,
      "l8": 14.52
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
      "SitcaBuy5D"
    ],
    "price": 398.0,
    "prevClose": 378.0,
    "open": 391.0,
    "high": 404.5,
    "low": 388.5,
    "volume": 25241,
    "ma5": 386.8,
    "ma10": 378.55,
    "ma20": 351.62,
    "ma60": 424.92,
    "vMa5": 25083,
    "vMa10": 23651,
    "high20d": 417.5,
    "sparkline": [
      342.0,
      376.0,
      382.0,
      366.0,
      385.5,
      371.0,
      400.0,
      387.0,
      378.0,
      398.0
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
        "low": 375.0,
        "close": 378.0,
        "ma5": 384.3,
        "ma10": 369.85
      },
      {
        "open": 391.0,
        "high": 404.5,
        "low": 388.5,
        "close": 398.0,
        "ma5": 386.8,
        "ma10": 378.55
      }
    ],
    "symbol": "3105.TWO",
    "maxVol10d": 40586,
    "hasVolumeBurst": true,
    "kd": {
      "k": 71.7,
      "d": 74.2,
      "prevK": 74.3,
      "prevD": 75.5,
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
      "TurnoverRate"
    ],
    "price": 168.5,
    "prevClose": 157.5,
    "open": 158.5,
    "high": 171.0,
    "low": 155.5,
    "volume": 32936,
    "ma5": 161.7,
    "ma10": 156.3,
    "ma20": 153.2,
    "ma60": 206.53,
    "vMa5": 28699,
    "vMa10": 26183,
    "high20d": 190.0,
    "sparkline": [
      144.5,
      158.5,
      151.0,
      146.5,
      154.0,
      161.5,
      156.5,
      164.5,
      157.5,
      168.5
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
        "low": 157.5,
        "close": 157.5,
        "ma5": 158.8,
        "ma10": 153.0
      },
      {
        "open": 158.5,
        "high": 171.0,
        "low": 155.5,
        "close": 168.5,
        "ma5": 161.7,
        "ma10": 156.3
      }
    ],
    "symbol": "6147.TWO",
    "maxVol10d": 34041,
    "hasVolumeBurst": false,
    "kd": {
      "k": 80.8,
      "d": 76.2,
      "prevK": 76.0,
      "prevD": 73.9,
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
    "price": 211.0,
    "prevClose": 210.0,
    "open": 210.0,
    "high": 230.0,
    "low": 201.5,
    "volume": 18428,
    "ma5": 206.6,
    "ma10": 186.0,
    "ma20": 174.5,
    "ma60": 232.62,
    "vMa5": 23629,
    "vMa10": 15023,
    "high20d": 230.0,
    "sparkline": [
      164.5,
      165.0,
      171.0,
      158.0,
      168.5,
      185.0,
      203.5,
      223.5,
      210.0,
      211.0
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
        "low": 207.0,
        "close": 210.0,
        "ma5": 198.1,
        "ma10": 180.9
      },
      {
        "open": 210.0,
        "high": 230.0,
        "low": 201.5,
        "close": 211.0,
        "ma5": 206.6,
        "ma10": 186.0
      }
    ],
    "symbol": "6173.TWO",
    "maxVol10d": 36396,
    "hasVolumeBurst": true,
    "kd": {
      "k": 82.5,
      "d": 79.9,
      "prevK": 86.2,
      "prevD": 78.6,
      "h8": 224.0,
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
    "price": 65.1,
    "prevClose": 67.2,
    "open": 66.4,
    "high": 66.8,
    "low": 64.5,
    "volume": 5750,
    "ma5": 66.86,
    "ma10": 65.28,
    "ma20": 64.5,
    "ma60": 58.58,
    "vMa5": 21354,
    "vMa10": 19262,
    "high20d": 73.0,
    "sparkline": [
      66.4,
      65.9,
      62.9,
      60.8,
      62.5,
      66.0,
      67.2,
      68.8,
      67.2,
      65.1
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
        "low": 65.1,
        "close": 67.2,
        "ma5": 66.34,
        "ma10": 65.51
      },
      {
        "open": 66.4,
        "high": 66.8,
        "low": 64.5,
        "close": 65.1,
        "ma5": 66.86,
        "ma10": 65.28
      }
    ],
    "symbol": "5328.TWO",
    "maxVol10d": 36974,
    "hasVolumeBurst": true,
    "kd": {
      "k": 51.2,
      "d": 55.3,
      "prevK": 58.6,
      "prevD": 57.4,
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
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy3D"
    ],
    "price": 545.0,
    "prevClose": 522.0,
    "open": 540.0,
    "high": 545.0,
    "low": 521.0,
    "volume": 1666,
    "ma5": 540.4,
    "ma10": 515.35,
    "ma20": 455.35,
    "ma60": 491.96,
    "vMa5": 13742,
    "vMa10": 9311,
    "high20d": 615.0,
    "sparkline": [
      447.5,
      492.0,
      488.0,
      488.0,
      536.0,
      510.0,
      561.0,
      564.0,
      522.0,
      545.0
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
        "low": 508.0,
        "close": 522.0,
        "ma5": 538.6,
        "ma10": 501.55
      },
      {
        "open": 540.0,
        "high": 545.0,
        "low": 521.0,
        "close": 545.0,
        "ma5": 540.4,
        "ma10": 515.35
      }
    ],
    "symbol": "4979.TWO",
    "maxVol10d": 25944,
    "hasVolumeBurst": true,
    "kd": {
      "k": 66.7,
      "d": 76.2,
      "prevK": 74.6,
      "prevD": 81.0,
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
    "price": 162.0,
    "prevClose": 160.5,
    "open": 160.5,
    "high": 163.0,
    "low": 158.0,
    "volume": 8726,
    "ma5": 160.6,
    "ma10": 156.7,
    "ma20": 154.85,
    "ma60": 170.13,
    "vMa5": 18294,
    "vMa10": 24427,
    "high20d": 177.0,
    "sparkline": [
      154.5,
      157.0,
      151.5,
      143.5,
      157.5,
      158.0,
      159.5,
      163.0,
      160.5,
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
        "low": 160.0,
        "close": 160.5,
        "ma5": 159.7,
        "ma10": 155.6
      },
      {
        "open": 160.5,
        "high": 163.0,
        "low": 158.0,
        "close": 162.0,
        "ma5": 160.6,
        "ma10": 156.7
      }
    ],
    "symbol": "5347.TWO",
    "maxVol10d": 36909,
    "hasVolumeBurst": false,
    "kd": {
      "k": 72.0,
      "d": 65.8,
      "prevK": 69.5,
      "prevD": 62.7,
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
    "price": 269.5,
    "prevClose": 263.0,
    "open": 267.0,
    "high": 270.0,
    "low": 264.0,
    "volume": 1728,
    "ma5": 263.1,
    "ma10": 238.35,
    "ma20": 215.5,
    "ma60": 232.59,
    "vMa5": 8563,
    "vMa10": 7623,
    "high20d": 271.5,
    "sparkline": [
      196.0,
      199.0,
      218.5,
      216.5,
      238.0,
      255.0,
      267.0,
      261.0,
      263.0,
      269.5
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
        "close": 263.0,
        "ma5": 256.8,
        "ma10": 230.5
      },
      {
        "open": 267.0,
        "high": 270.0,
        "low": 264.0,
        "close": 269.5,
        "ma5": 263.1,
        "ma10": 238.35
      }
    ],
    "symbol": "4931.TWO",
    "maxVol10d": 21294,
    "hasVolumeBurst": true,
    "kd": {
      "k": 92.2,
      "d": 86.9,
      "prevK": 89.6,
      "prevD": 84.3,
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
      "MajorBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy3D"
    ],
    "price": 392.0,
    "prevClose": 391.0,
    "open": 393.5,
    "high": 396.0,
    "low": 382.0,
    "volume": 3355,
    "ma5": 400.3,
    "ma10": 371.6,
    "ma20": 358.45,
    "ma60": 402.13,
    "vMa5": 10658,
    "vMa10": 10076,
    "high20d": 419.0,
    "sparkline": [
      325.0,
      324.5,
      356.5,
      338.5,
      370.0,
      400.0,
      412.0,
      406.5,
      391.0,
      392.0
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
        "low": 389.0,
        "close": 391.0,
        "ma5": 395.9,
        "ma10": 363.3
      },
      {
        "open": 393.5,
        "high": 396.0,
        "low": 382.0,
        "close": 392.0,
        "ma5": 400.3,
        "ma10": 371.6
      }
    ],
    "symbol": "3211.TWO",
    "maxVol10d": 20458,
    "hasVolumeBurst": true,
    "kd": {
      "k": 78.9,
      "d": 76.7,
      "prevK": 82.2,
      "prevD": 75.6,
      "h8": 419.0,
      "l8": 321.5
    }
  },
  {
    "code": "00981B",
    "name": "第一金優選非投債",
    "categories": [
      "Top100"
    ],
    "price": 9.29,
    "prevClose": 9.31,
    "open": 9.31,
    "high": 9.31,
    "low": 9.28,
    "volume": 25362,
    "ma5": 9.32,
    "ma10": 9.33,
    "ma20": 9.3,
    "ma60": 9.25,
    "vMa5": 14618,
    "vMa10": 12728,
    "high20d": 9.36,
    "sparkline": [
      9.34,
      9.34,
      9.33,
      9.32,
      9.34,
      9.34,
      9.33,
      9.33,
      9.31,
      9.29
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
        "low": 9.31,
        "close": 9.31,
        "ma5": 9.33,
        "ma10": 9.33
      },
      {
        "open": 9.31,
        "high": 9.31,
        "low": 9.28,
        "close": 9.29,
        "ma5": 9.32,
        "ma10": 9.33
      }
    ],
    "symbol": "00981B.TWO",
    "maxVol10d": 25362,
    "hasVolumeBurst": true,
    "kd": {
      "k": 36.6,
      "d": 54.6,
      "prevK": 48.6,
      "prevD": 63.6,
      "h8": 9.36,
      "l8": 9.31
    }
  },
  {
    "code": "4991",
    "name": "環宇-KY",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 488.0,
    "prevClose": 460.0,
    "open": 478.0,
    "high": 492.0,
    "low": 472.0,
    "volume": 891,
    "ma5": 478.3,
    "ma10": 470.5,
    "ma20": 430.45,
    "ma60": 521.98,
    "vMa5": 6174,
    "vMa10": 3973,
    "high20d": 522.0,
    "sparkline": [
      426.5,
      469.0,
      442.0,
      465.0,
      511.0,
      481.0,
      484.5,
      478.0,
      460.0,
      488.0
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
        "close": 460.0,
        "ma5": 482.9,
        "ma10": 460.5
      },
      {
        "open": 478.0,
        "high": 492.0,
        "low": 472.0,
        "close": 488.0,
        "ma5": 478.3,
        "ma10": 470.5
      }
    ],
    "symbol": "4991.TWO",
    "maxVol10d": 11329,
    "hasVolumeBurst": true,
    "kd": {
      "k": 65.4,
      "d": 70.8,
      "prevK": 65.2,
      "prevD": 73.4,
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
    "price": 419.5,
    "prevClose": 428.5,
    "open": 430.5,
    "high": 434.0,
    "low": 418.5,
    "volume": 19652,
    "ma5": 413.6,
    "ma10": 384.05,
    "ma20": 366.18,
    "ma60": 500.62,
    "vMa5": 29869,
    "vMa10": 28573,
    "high20d": 462.0,
    "sparkline": [
      341.0,
      349.5,
      384.0,
      352.0,
      346.0,
      380.5,
      418.5,
      421.0,
      428.5,
      419.5
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
        "close": 428.5,
        "ma5": 398.9,
        "ma10": 374.85
      },
      {
        "open": 430.5,
        "high": 434.0,
        "low": 418.5,
        "close": 419.5,
        "ma5": 413.6,
        "ma10": 384.05
      }
    ],
    "symbol": "8358.TWO",
    "maxVol10d": 47566,
    "hasVolumeBurst": true,
    "kd": {
      "k": 74.6,
      "d": 73.5,
      "prevK": 79.5,
      "prevD": 72.9,
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
      "ValueTop"
    ],
    "price": 87.4,
    "prevClose": 83.8,
    "open": 83.0,
    "high": 91.0,
    "low": 82.6,
    "volume": 18913,
    "ma5": 84.54,
    "ma10": 85.0,
    "ma20": 79.81,
    "ma60": 73.13,
    "vMa5": 11218,
    "vMa10": 16703,
    "high20d": 95.8,
    "sparkline": [
      89.6,
      85.4,
      88.4,
      84.4,
      79.5,
      79.3,
      87.2,
      85.0,
      83.8,
      87.4
    ],
    "high5d": 91.0,
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
        "low": 80.0,
        "close": 83.8,
        "ma5": 82.96,
        "ma10": 85.5
      },
      {
        "open": 83.0,
        "high": 91.0,
        "low": 82.6,
        "close": 87.4,
        "ma5": 84.54,
        "ma10": 85.0
      }
    ],
    "symbol": "3441.TWO",
    "maxVol10d": 49241,
    "hasVolumeBurst": true,
    "kd": {
      "k": 45.8,
      "d": 46.5,
      "prevK": 39.8,
      "prevD": 46.9,
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
    "price": 292.5,
    "prevClose": 325.0,
    "open": 299.5,
    "high": 301.0,
    "low": 292.5,
    "volume": 13758,
    "ma5": 321.3,
    "ma10": 318.85,
    "ma20": 326.15,
    "ma60": 301.14,
    "vMa5": 15133,
    "vMa10": 13955,
    "high20d": 418.5,
    "sparkline": [
      309.5,
      313.0,
      316.0,
      306.5,
      337.0,
      334.0,
      330.0,
      325.0,
      325.0,
      292.5
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
        "low": 318.0,
        "close": 325.0,
        "ma5": 330.2,
        "ma10": 320.05
      },
      {
        "open": 299.5,
        "high": 301.0,
        "low": 292.5,
        "close": 292.5,
        "ma5": 321.3,
        "ma10": 318.85
      }
    ],
    "symbol": "3374.TWO",
    "maxVol10d": 19807,
    "hasVolumeBurst": true,
    "kd": {
      "k": 39.9,
      "d": 53.7,
      "prevK": 59.9,
      "prevD": 60.6,
      "h8": 351.5,
      "l8": 301.0
    }
  },
  {
    "code": "8069",
    "name": "元太",
    "categories": [
      "Top100",
      "ValueTop",
      "SitcaBuy",
      "SitcaBuy3D"
    ],
    "price": 162.5,
    "prevClose": 165.5,
    "open": 164.0,
    "high": 165.0,
    "low": 161.0,
    "volume": 10645,
    "ma5": 166.0,
    "ma10": 179.15,
    "ma20": 182.93,
    "ma60": 197.86,
    "vMa5": 13754,
    "vMa10": 13356,
    "high20d": 208.5,
    "sparkline": [
      197.5,
      195.5,
      196.0,
      196.0,
      176.5,
      165.0,
      166.0,
      171.0,
      165.5,
      162.5
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
        "close": 165.5,
        "ma5": 168.8,
        "ma10": 181.8
      },
      {
        "open": 164.0,
        "high": 165.0,
        "low": 161.0,
        "close": 162.5,
        "ma5": 166.0,
        "ma10": 179.15
      }
    ],
    "symbol": "8069.TWO",
    "maxVol10d": 19502,
    "hasVolumeBurst": false,
    "kd": {
      "k": 16.7,
      "d": 26.0,
      "prevK": 21.0,
      "prevD": 30.7,
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
      "MajorBuy3D"
    ],
    "price": 135.5,
    "prevClose": 133.0,
    "open": 134.5,
    "high": 136.5,
    "low": 130.0,
    "volume": 6727,
    "ma5": 127.8,
    "ma10": 114.43,
    "ma20": 97.2,
    "ma60": 92.13,
    "vMa5": 9501,
    "vMa10": 24589,
    "high20d": 138.0,
    "sparkline": [
      87.8,
      96.5,
      103.0,
      104.0,
      114.0,
      119.5,
      122.0,
      129.0,
      133.0,
      135.5
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
        "low": 128.0,
        "close": 133.0,
        "ma5": 123.5,
        "ma10": 108.87
      },
      {
        "open": 134.5,
        "high": 136.5,
        "low": 130.0,
        "close": 135.5,
        "ma5": 127.8,
        "ma10": 114.43
      }
    ],
    "symbol": "5351.TWO",
    "maxVol10d": 59974,
    "hasVolumeBurst": true,
    "kd": {
      "k": 93.5,
      "d": 90.0,
      "prevK": 93.0,
      "prevD": 88.3,
      "h8": 138.0,
      "l8": 93.2
    }
  },
  {
    "code": "00687B",
    "name": "國泰20年美債",
    "categories": [
      "Top100",
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 27.12,
    "prevClose": 27.33,
    "open": 27.21,
    "high": 27.21,
    "low": 27.1,
    "volume": 10750,
    "ma5": 27.35,
    "ma10": 27.49,
    "ma20": 27.66,
    "ma60": 27.86,
    "vMa5": 10004,
    "vMa10": 12302,
    "high20d": 28.15,
    "sparkline": [
      27.54,
      27.76,
      27.76,
      27.49,
      27.57,
      27.39,
      27.46,
      27.43,
      27.33,
      27.12
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
        "low": 27.32,
        "close": 27.33,
        "ma5": 27.44,
        "ma10": 27.52
      },
      {
        "open": 27.21,
        "high": 27.21,
        "low": 27.1,
        "close": 27.12,
        "ma5": 27.35,
        "ma10": 27.49
      }
    ],
    "symbol": "00687B.TWO",
    "maxVol10d": 28712,
    "hasVolumeBurst": false,
    "kd": {
      "k": 11.7,
      "d": 19.4,
      "prevK": 16.1,
      "prevD": 23.2,
      "h8": 27.82,
      "l8": 27.32
    }
  },
  {
    "code": "3264",
    "name": "欣銓",
    "categories": [
      "Top100",
      "SitcaBuy",
      "ValueTop",
      "MajorBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy3D"
    ],
    "price": 219.0,
    "prevClose": 225.5,
    "open": 225.5,
    "high": 229.0,
    "low": 219.0,
    "volume": 5091,
    "ma5": 222.2,
    "ma10": 214.8,
    "ma20": 204.32,
    "ma60": 219.67,
    "vMa5": 9044,
    "vMa10": 8925,
    "high20d": 238.0,
    "sparkline": [
      193.5,
      202.0,
      211.5,
      207.5,
      222.5,
      219.5,
      216.5,
      230.5,
      225.5,
      219.0
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
        "close": 225.5,
        "ma5": 222.9,
        "ma10": 211.65
      },
      {
        "open": 225.5,
        "high": 229.0,
        "low": 219.0,
        "close": 219.0,
        "ma5": 222.2,
        "ma10": 214.8
      }
    ],
    "symbol": "3264.TWO",
    "maxVol10d": 16634,
    "hasVolumeBurst": true,
    "kd": {
      "k": 71.1,
      "d": 75.0,
      "prevK": 80.7,
      "prevD": 76.9,
      "h8": 238.0,
      "l8": 198.5
    }
  },
  {
    "code": "6265",
    "name": "方土昶",
    "categories": [
      "Top100",
      "MajorBuy",
      "TurnoverRate",
      "ValueTop",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 63.3,
    "prevClose": 62.5,
    "open": 65.8,
    "high": 68.7,
    "low": 62.9,
    "volume": 14291,
    "ma5": 59.52,
    "ma10": 56.41,
    "ma20": 50.58,
    "ma60": 53.19,
    "vMa5": 10517,
    "vMa10": 8097,
    "high20d": 68.7,
    "sparkline": [
      49.3,
      51.3,
      54.7,
      55.4,
      55.8,
      56.1,
      56.8,
      58.9,
      62.5,
      63.3
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
        "close": 62.5,
        "ma5": 58.02,
        "ma10": 54.56
      },
      {
        "open": 65.8,
        "high": 68.7,
        "low": 62.9,
        "close": 63.3,
        "ma5": 59.52,
        "ma10": 56.41
      }
    ],
    "symbol": "6265.TWO",
    "maxVol10d": 14861,
    "hasVolumeBurst": true,
    "kd": {
      "k": 83.6,
      "d": 84.3,
      "prevK": 90.1,
      "prevD": 84.7,
      "h8": 63.8,
      "l8": 50.4
    }
  },
  {
    "code": "00679B",
    "name": "元大美債20年",
    "categories": [
      "Top100",
      "ValueTop"
    ],
    "price": 26.07,
    "prevClose": 26.26,
    "open": 26.14,
    "high": 26.15,
    "low": 26.03,
    "volume": 23468,
    "ma5": 26.28,
    "ma10": 26.41,
    "ma20": 26.58,
    "ma60": 26.71,
    "vMa5": 16724,
    "vMa10": 18801,
    "high20d": 27.04,
    "sparkline": [
      26.45,
      26.67,
      26.66,
      26.41,
      26.49,
      26.32,
      26.39,
      26.35,
      26.26,
      26.07
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
        "low": 26.25,
        "close": 26.26,
        "ma5": 26.36,
        "ma10": 26.44
      },
      {
        "open": 26.14,
        "high": 26.15,
        "low": 26.03,
        "close": 26.07,
        "ma5": 26.28,
        "ma10": 26.41
      }
    ],
    "symbol": "00679B.TWO",
    "maxVol10d": 47248,
    "hasVolumeBurst": true,
    "kd": {
      "k": 12.6,
      "d": 19.6,
      "prevK": 16.0,
      "prevD": 23.2,
      "h8": 26.73,
      "l8": 26.25
    }
  },
  {
    "code": "00989B",
    "name": "台新美國非投等債",
    "categories": [
      "TurnoverRate"
    ],
    "price": 10.12,
    "prevClose": 10.28,
    "open": 10.19,
    "high": 10.19,
    "low": 10.12,
    "volume": 4096,
    "ma5": 10.26,
    "ma10": 10.26,
    "ma20": 10.25,
    "ma60": 10.16,
    "vMa5": 6728,
    "vMa10": 5465,
    "high20d": 10.32,
    "sparkline": [
      10.28,
      10.27,
      10.26,
      10.26,
      10.28,
      10.3,
      10.29,
      10.3,
      10.28,
      10.12
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
        "close": 10.28,
        "ma5": 10.29,
        "ma10": 10.28
      },
      {
        "open": 10.19,
        "high": 10.19,
        "low": 10.12,
        "close": 10.12,
        "ma5": 10.26,
        "ma10": 10.26
      }
    ],
    "symbol": "00989B.TWO",
    "maxVol10d": 9318,
    "hasVolumeBurst": false,
    "kd": {
      "k": 47.6,
      "d": 66.5,
      "prevK": 71.4,
      "prevD": 76.0,
      "h8": 10.32,
      "l8": 10.24
    }
  },
  {
    "code": "00933B",
    "name": "國泰10Y+金融債",
    "categories": [
      "Top100"
    ],
    "price": 15.75,
    "prevClose": 15.86,
    "open": 15.8,
    "high": 15.82,
    "low": 15.73,
    "volume": 21047,
    "ma5": 15.87,
    "ma10": 15.93,
    "ma20": 15.96,
    "ma60": 16.04,
    "vMa5": 12234,
    "vMa10": 9229,
    "high20d": 16.09,
    "sparkline": [
      15.96,
      16.05,
      16.03,
      15.95,
      15.97,
      15.91,
      15.91,
      15.9,
      15.86,
      15.75
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
        "low": 15.85,
        "close": 15.86,
        "ma5": 15.91,
        "ma10": 15.95
      },
      {
        "open": 15.8,
        "high": 15.82,
        "low": 15.73,
        "close": 15.75,
        "ma5": 15.87,
        "ma10": 15.93
      }
    ],
    "symbol": "00933B.TWO",
    "maxVol10d": 21047,
    "hasVolumeBurst": true,
    "kd": {
      "k": 15.8,
      "d": 27.3,
      "prevK": 20.9,
      "prevD": 33.0,
      "h8": 16.09,
      "l8": 15.85
    }
  },
  {
    "code": "4541",
    "name": "晟田",
    "categories": [
      "Top100",
      "TurnoverRate",
      "ValueTop"
    ],
    "price": 72.7,
    "prevClose": 73.9,
    "open": 73.8,
    "high": 75.5,
    "low": 69.8,
    "volume": 8147,
    "ma5": 71.16,
    "ma10": 67.96,
    "ma20": 66.71,
    "ma60": 57.91,
    "vMa5": 8499,
    "vMa10": 5778,
    "high20d": 81.6,
    "sparkline": [
      62.8,
      66.0,
      63.7,
      65.9,
      65.4,
      66.3,
      70.3,
      72.6,
      73.9,
      72.7
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
        "close": 73.9,
        "ma5": 69.7,
        "ma10": 66.74
      },
      {
        "open": 73.8,
        "high": 75.5,
        "low": 69.8,
        "close": 72.7,
        "ma5": 71.16,
        "ma10": 67.96
      }
    ],
    "symbol": "4541.TWO",
    "maxVol10d": 17577,
    "hasVolumeBurst": true,
    "kd": {
      "k": 79.6,
      "d": 74.1,
      "prevK": 82.4,
      "prevD": 71.4,
      "h8": 76.0,
      "l8": 63.3
    }
  },
  {
    "code": "5371",
    "name": "中光電",
    "categories": [
      "Top100",
      "TurnoverRate",
      "ValueTop"
    ],
    "price": 89.3,
    "prevClose": 90.1,
    "open": 90.5,
    "high": 93.6,
    "low": 86.1,
    "volume": 20845,
    "ma5": 87.96,
    "ma10": 86.83,
    "ma20": 82.65,
    "ma60": 80.53,
    "vMa5": 16142,
    "vMa10": 15285,
    "high20d": 93.6,
    "sparkline": [
      82.7,
      90.5,
      86.7,
      83.0,
      85.6,
      87.6,
      86.5,
      86.3,
      90.1,
      89.3
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
        "close": 90.1,
        "ma5": 87.22,
        "ma10": 85.42
      },
      {
        "open": 90.5,
        "high": 93.6,
        "low": 86.1,
        "close": 89.3,
        "ma5": 87.96,
        "ma10": 86.83
      }
    ],
    "symbol": "5371.TWO",
    "maxVol10d": 36523,
    "hasVolumeBurst": true,
    "kd": {
      "k": 74.3,
      "d": 73.8,
      "prevK": 79.0,
      "prevD": 73.5,
      "h8": 92.6,
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
    "price": 33.02,
    "prevClose": 33.08,
    "open": 33.21,
    "high": 33.44,
    "low": 33.02,
    "volume": 9248,
    "ma5": 32.92,
    "ma10": 32.46,
    "ma20": 32.28,
    "ma60": 34.68,
    "vMa5": 7855,
    "vMa10": 7462,
    "high20d": 35.95,
    "sparkline": [
      31.38,
      32.09,
      32.1,
      31.71,
      32.66,
      32.59,
      32.61,
      33.32,
      33.08,
      33.02
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
        "low": 32.97,
        "close": 33.08,
        "ma5": 32.85,
        "ma10": 32.28
      },
      {
        "open": 33.21,
        "high": 33.44,
        "low": 33.02,
        "close": 33.02,
        "ma5": 32.92,
        "ma10": 32.46
      }
    ],
    "symbol": "00888.TWO",
    "maxVol10d": 12508,
    "hasVolumeBurst": true,
    "kd": {
      "k": 79.3,
      "d": 79.2,
      "prevK": 83.5,
      "prevD": 79.1,
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
      "MajorBuy3D"
    ],
    "price": 96.5,
    "prevClose": 91.5,
    "open": 93.0,
    "high": 96.5,
    "low": 91.5,
    "volume": 11511,
    "ma5": 91.32,
    "ma10": 88.24,
    "ma20": 80.01,
    "ma60": 92.65,
    "vMa5": 6690,
    "vMa10": 20793,
    "high20d": 96.5,
    "sparkline": [
      80.1,
      83.9,
      86.8,
      85.9,
      89.1,
      88.7,
      90.0,
      89.9,
      91.5,
      96.5
    ],
    "high5d": 96.5,
    "high10d": 96.5,
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
        "close": 91.5,
        "ma5": 89.84,
        "ma10": 85.88
      },
      {
        "open": 93.0,
        "high": 96.5,
        "low": 91.5,
        "close": 96.5,
        "ma5": 91.32,
        "ma10": 88.24
      }
    ],
    "symbol": "1815.TWO",
    "maxVol10d": 48946,
    "hasVolumeBurst": true,
    "kd": {
      "k": 90.1,
      "d": 83.2,
      "prevK": 85.1,
      "prevD": 79.8,
      "h8": 93.9,
      "l8": 83.2
    }
  },
  {
    "code": "4716",
    "name": "大立",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 17.4,
    "prevClose": 17.7,
    "open": 17.6,
    "high": 18.05,
    "low": 17.1,
    "volume": 853,
    "ma5": 17.75,
    "ma10": 17.44,
    "ma20": 17.39,
    "ma60": 18.72,
    "vMa5": 2757,
    "vMa10": 1760,
    "high20d": 19.35,
    "sparkline": [
      17.55,
      17.0,
      17.2,
      16.65,
      17.3,
      18.9,
      17.4,
      17.35,
      17.7,
      17.4
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
        "close": 17.7,
        "ma5": 17.73,
        "ma10": 17.35
      },
      {
        "open": 17.6,
        "high": 18.05,
        "low": 17.1,
        "close": 17.4,
        "ma5": 17.75,
        "ma10": 17.44
      }
    ],
    "symbol": "4716.TWO",
    "maxVol10d": 6171,
    "hasVolumeBurst": true,
    "kd": {
      "k": 42.8,
      "d": 47.8,
      "prevK": 47.2,
      "prevD": 50.3,
      "h8": 19.25,
      "l8": 16.45
    }
  },
  {
    "code": "5425",
    "name": "台半",
    "categories": [
      "Top100",
      "ValueTop",
      "TurnoverRate"
    ],
    "price": 89.9,
    "prevClose": 85.5,
    "open": 85.5,
    "high": 91.5,
    "low": 83.3,
    "volume": 9679,
    "ma5": 87.38,
    "ma10": 85.37,
    "ma20": 82.94,
    "ma60": 102.21,
    "vMa5": 9323,
    "vMa10": 8890,
    "high20d": 97.0,
    "sparkline": [
      81.6,
      83.5,
      84.9,
      82.5,
      84.3,
      86.0,
      86.7,
      88.8,
      85.5,
      89.9
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
        "low": 84.8,
        "close": 85.5,
        "ma5": 86.26,
        "ma10": 84.42
      },
      {
        "open": 85.5,
        "high": 91.5,
        "low": 83.3,
        "close": 89.9,
        "ma5": 87.38,
        "ma10": 85.37
      }
    ],
    "symbol": "5425.TWO",
    "maxVol10d": 14658,
    "hasVolumeBurst": true,
    "kd": {
      "k": 72.8,
      "d": 72.8,
      "prevK": 71.7,
      "prevD": 72.9,
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
    "price": 87.5,
    "prevClose": 89.5,
    "open": 87.9,
    "high": 89.9,
    "low": 85.0,
    "volume": 3781,
    "ma5": 88.76,
    "ma10": 81.92,
    "ma20": 78.71,
    "ma60": 110.98,
    "vMa5": 8135,
    "vMa10": 5019,
    "high20d": 99.4,
    "sparkline": [
      68.0,
      74.8,
      75.6,
      74.8,
      82.2,
      85.2,
      86.5,
      95.1,
      89.5,
      87.5
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
        "low": 86.6,
        "close": 89.5,
        "ma5": 87.7,
        "ma10": 79.61
      },
      {
        "open": 87.9,
        "high": 89.9,
        "low": 85.0,
        "close": 87.5,
        "ma5": 88.76,
        "ma10": 81.92
      }
    ],
    "symbol": "3624.TWO",
    "maxVol10d": 12192,
    "hasVolumeBurst": true,
    "kd": {
      "k": 75.2,
      "d": 76.3,
      "prevK": 83.0,
      "prevD": 76.8,
      "h8": 99.4,
      "l8": 70.0
    }
  },
  {
    "code": "5864",
    "name": "致和證",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 33.7,
    "prevClose": 34.2,
    "open": 34.15,
    "high": 34.35,
    "low": 33.4,
    "volume": 3325,
    "ma5": 33.14,
    "ma10": 31.52,
    "ma20": 31.44,
    "ma60": 37.44,
    "vMa5": 4198,
    "vMa10": 4187,
    "high20d": 35.0,
    "sparkline": [
      30.85,
      31.15,
      29.15,
      28.8,
      29.55,
      30.45,
      33.45,
      33.9,
      34.2,
      33.7
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
        "close": 34.2,
        "ma5": 32.31,
        "ma10": 31.17
      },
      {
        "open": 34.15,
        "high": 34.35,
        "low": 33.4,
        "close": 33.7,
        "ma5": 33.14,
        "ma10": 31.52
      }
    ],
    "symbol": "5864.TWO",
    "maxVol10d": 7477,
    "hasVolumeBurst": true,
    "kd": {
      "k": 78.2,
      "d": 67.3,
      "prevK": 77.3,
      "prevD": 61.9,
      "h8": 35.0,
      "l8": 28.5
    }
  },
  {
    "code": "4939",
    "name": "亞電",
    "categories": [
      "Top100",
      "TurnoverRate"
    ],
    "price": 60.4,
    "prevClose": 61.4,
    "open": 61.0,
    "high": 62.4,
    "low": 59.1,
    "volume": 4756,
    "ma5": 61.64,
    "ma10": 60.74,
    "ma20": 60.12,
    "ma60": 59.35,
    "vMa5": 10161,
    "vMa10": 12848,
    "high20d": 78.2,
    "sparkline": [
      56.3,
      59.4,
      61.4,
      60.8,
      61.3,
      61.7,
      60.8,
      63.9,
      61.4,
      60.4
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
        "low": 61.0,
        "close": 61.4,
        "ma5": 61.82,
        "ma10": 60.28
      },
      {
        "open": 61.0,
        "high": 62.4,
        "low": 59.1,
        "close": 60.4,
        "ma5": 61.64,
        "ma10": 60.74
      }
    ],
    "symbol": "4939.TWO",
    "maxVol10d": 21750,
    "hasVolumeBurst": true,
    "kd": {
      "k": 51.5,
      "d": 59.6,
      "prevK": 65.9,
      "prevD": 63.7,
      "h8": 67.2,
      "l8": 58.4
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
    "price": 90.3,
    "prevClose": 94.8,
    "open": 94.2,
    "high": 94.8,
    "low": 88.2,
    "volume": 23202,
    "ma5": 92.06,
    "ma10": 90.28,
    "ma20": 87.49,
    "ma60": 86.47,
    "vMa5": 27576,
    "vMa10": 18643,
    "high5d": 100.5,
    "high10d": 100.5,
    "high20d": 100.5,
    "sparkline": [
      88.4,
      89.5,
      88.0,
      87.1,
      89.5,
      89.0,
      91.4,
      94.8,
      94.8,
      90.3
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
        "close": 94.8,
        "ma5": 91.9,
        "ma10": 89.91
      },
      {
        "open": 94.2,
        "high": 94.8,
        "low": 88.2,
        "close": 90.3,
        "ma5": 92.06,
        "ma10": 90.28
      }
    ],
    "symbol": "4938.TW",
    "maxVol10d": 66267,
    "hasVolumeBurst": true,
    "kd": {
      "k": 61.0,
      "d": 70.6,
      "prevK": 73.8,
      "prevD": 75.3,
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
    "price": 46.6,
    "prevClose": 47.4,
    "open": 47.4,
    "high": 47.4,
    "low": 46.3,
    "volume": 3051,
    "ma5": 47.01,
    "ma10": 46.11,
    "ma20": 44.68,
    "ma60": 48.08,
    "vMa5": 3797,
    "vMa10": 4025,
    "high5d": 48.5,
    "high10d": 48.5,
    "high20d": 48.5,
    "sparkline": [
      44.75,
      45.85,
      45.1,
      44.5,
      45.85,
      46.2,
      47.5,
      47.35,
      47.4,
      46.6
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
        "close": 47.4,
        "ma5": 46.86,
        "ma10": 45.86
      },
      {
        "open": 47.4,
        "high": 47.4,
        "low": 46.3,
        "close": 46.6,
        "ma5": 47.01,
        "ma10": 46.11
      }
    ],
    "symbol": "2855.TW",
    "maxVol10d": 5868,
    "hasVolumeBurst": false,
    "kd": {
      "k": 73.6,
      "d": 78.0,
      "prevK": 81.7,
      "prevD": 80.3,
      "h8": 48.5,
      "l8": 44.05
    }
  },
  {
    "code": "6805",
    "name": "富世達",
    "categories": [
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 1925.0,
    "prevClose": 1805.0,
    "open": 1795.0,
    "high": 1950.0,
    "low": 1785.0,
    "volume": 2560,
    "ma5": 1837.0,
    "ma10": 1756.0,
    "ma20": 1567.25,
    "ma60": 1656.58,
    "vMa5": 2137,
    "vMa10": 2419,
    "high5d": 1950.0,
    "high10d": 1950.0,
    "high20d": 1950.0,
    "sparkline": [
      1590.0,
      1600.0,
      1760.0,
      1670.0,
      1755.0,
      1790.0,
      1835.0,
      1830.0,
      1805.0,
      1925.0
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
        "low": 1785.0,
        "close": 1805.0,
        "ma5": 1803.0,
        "ma10": 1710.5
      },
      {
        "open": 1795.0,
        "high": 1950.0,
        "low": 1785.0,
        "close": 1925.0,
        "ma5": 1837.0,
        "ma10": 1756.0
      }
    ],
    "symbol": "6805.TW",
    "maxVol10d": 3185,
    "hasVolumeBurst": true,
    "kd": {
      "k": 86.6,
      "d": 84.7,
      "prevK": 83.1,
      "prevD": 83.7,
      "h8": 1915.0,
      "l8": 1570.0
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
    "price": 25.62,
    "prevClose": 25.24,
    "open": 25.43,
    "high": 25.7,
    "low": 25.3,
    "volume": 20297,
    "ma5": 25.02,
    "ma10": 24.24,
    "ma20": 22.94,
    "ma60": 23.71,
    "vMa5": 18257,
    "vMa10": 16912,
    "high5d": 25.7,
    "high10d": 25.7,
    "high20d": 25.7,
    "sparkline": [
      22.66,
      23.31,
      23.73,
      23.57,
      24.09,
      24.29,
      24.73,
      25.2,
      25.24,
      25.62
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
        "open": 25.18,
        "high": 25.3,
        "low": 25.02,
        "close": 25.2,
        "ma5": 24.38,
        "ma10": 23.52
      },
      {
        "open": 25.5,
        "high": 25.54,
        "low": 25.17,
        "close": 25.24,
        "ma5": 24.71,
        "ma10": 23.89
      },
      {
        "open": 25.43,
        "high": 25.7,
        "low": 25.3,
        "close": 25.62,
        "ma5": 25.02,
        "ma10": 24.24
      }
    ],
    "symbol": "00980A.TW",
    "maxVol10d": 23473,
    "hasVolumeBurst": true,
    "kd": {
      "k": 94.8,
      "d": 91.6,
      "prevK": 93.8,
      "prevD": 90.0,
      "h8": 25.54,
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
      "MajorBuy3D"
    ],
    "price": 46.8,
    "prevClose": 46.2,
    "open": 46.0,
    "high": 46.95,
    "low": 45.8,
    "volume": 11707,
    "ma5": 45.75,
    "ma10": 44.97,
    "ma20": 44.48,
    "ma60": 43.78,
    "vMa5": 9869,
    "vMa10": 7348,
    "high5d": 46.95,
    "high10d": 46.95,
    "high20d": 46.95,
    "sparkline": [
      44.15,
      44.05,
      44.1,
      44.3,
      44.35,
      44.55,
      44.8,
      46.4,
      46.2,
      46.8
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
        "close": 46.2,
        "ma5": 45.26,
        "ma10": 44.67
      },
      {
        "open": 46.0,
        "high": 46.95,
        "low": 45.8,
        "close": 46.8,
        "ma5": 45.75,
        "ma10": 44.97
      }
    ],
    "symbol": "2542.TW",
    "maxVol10d": 16696,
    "hasVolumeBurst": true,
    "kd": {
      "k": 90.5,
      "d": 85.1,
      "prevK": 88.2,
      "prevD": 82.4,
      "h8": 46.65,
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
    "price": 26.0,
    "prevClose": 25.9,
    "open": 26.0,
    "high": 26.2,
    "low": 25.95,
    "volume": 5472,
    "ma5": 25.87,
    "ma10": 25.85,
    "ma20": 25.94,
    "ma60": 25.9,
    "vMa5": 4962,
    "vMa10": 4703,
    "high5d": 26.2,
    "high10d": 26.2,
    "high20d": 26.6,
    "sparkline": [
      25.75,
      25.9,
      25.8,
      25.8,
      25.9,
      25.7,
      25.8,
      25.95,
      25.9,
      26.0
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
      },
      {
        "open": 26.0,
        "high": 26.2,
        "low": 25.95,
        "close": 26.0,
        "ma5": 25.87,
        "ma10": 25.85
      }
    ],
    "symbol": "2633.TW",
    "maxVol10d": 6992,
    "hasVolumeBurst": true,
    "kd": {
      "k": 54.1,
      "d": 40.8,
      "prevK": 47.8,
      "prevD": 34.1,
      "h8": 26.0,
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
    "price": 483.0,
    "prevClose": 488.0,
    "open": 481.0,
    "high": 491.0,
    "low": 480.0,
    "volume": 2650,
    "ma5": 478.6,
    "ma10": 437.65,
    "ma20": 408.6,
    "ma60": 466.09,
    "vMa5": 6629,
    "vMa10": 4722,
    "high5d": 524.0,
    "high10d": 524.0,
    "high20d": 524.0,
    "sparkline": [
      392.0,
      398.5,
      397.5,
      394.0,
      401.5,
      441.5,
      485.5,
      495.0,
      488.0,
      483.0
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
        "low": 486.0,
        "close": 488.0,
        "ma5": 462.3,
        "ma10": 426.75
      },
      {
        "open": 481.0,
        "high": 491.0,
        "low": 480.0,
        "close": 483.0,
        "ma5": 478.6,
        "ma10": 437.65
      }
    ],
    "symbol": "3044.TW",
    "maxVol10d": 13891,
    "hasVolumeBurst": true,
    "kd": {
      "k": 79.6,
      "d": 81.4,
      "prevK": 84.0,
      "prevD": 82.2,
      "h8": 524.0,
      "l8": 383.5
    }
  },
  {
    "code": "4915",
    "name": "致伸",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 60.5,
    "prevClose": 60.9,
    "open": 60.5,
    "high": 61.1,
    "low": 60.2,
    "volume": 1599,
    "ma5": 60.5,
    "ma10": 61.19,
    "ma20": 63.05,
    "ma60": 68.93,
    "vMa5": 2644,
    "vMa10": 3725,
    "high5d": 61.1,
    "high10d": 64.6,
    "high20d": 67.0,
    "sparkline": [
      63.6,
      63.7,
      61.9,
      59.5,
      60.7,
      60.0,
      60.4,
      60.7,
      60.9,
      60.5
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
        "close": 60.9,
        "ma5": 60.54,
        "ma10": 61.6
      },
      {
        "open": 60.5,
        "high": 61.1,
        "low": 60.2,
        "close": 60.5,
        "ma5": 60.5,
        "ma10": 61.19
      }
    ],
    "symbol": "4915.TW",
    "maxVol10d": 8650,
    "hasVolumeBurst": true,
    "kd": {
      "k": 23.6,
      "d": 22.3,
      "prevK": 23.3,
      "prevD": 21.7,
      "h8": 64.6,
      "l8": 59.2
    }
  },
  {
    "code": "4551",
    "name": "智伸科",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 170.5,
    "prevClose": 162.0,
    "open": 163.0,
    "high": 173.0,
    "low": 162.0,
    "volume": 1645,
    "ma5": 167.2,
    "ma10": 167.6,
    "ma20": 169.68,
    "ma60": 186.78,
    "vMa5": 2372,
    "vMa10": 1618,
    "high5d": 182.0,
    "high10d": 182.0,
    "high20d": 196.5,
    "sparkline": [
      163.0,
      165.5,
      170.0,
      167.5,
      174.0,
      157.0,
      172.5,
      174.0,
      162.0,
      170.5
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
        "low": 160.5,
        "close": 162.0,
        "ma5": 167.9,
        "ma10": 166.55
      },
      {
        "open": 163.0,
        "high": 173.0,
        "low": 162.0,
        "close": 170.5,
        "ma5": 167.2,
        "ma10": 167.6
      }
    ],
    "symbol": "4551.TW",
    "maxVol10d": 3258,
    "hasVolumeBurst": true,
    "kd": {
      "k": 51.8,
      "d": 53.9,
      "prevK": 50.7,
      "prevD": 54.9,
      "h8": 182.0,
      "l8": 157.0
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
    "price": 1215.0,
    "prevClose": 1280.0,
    "open": 1270.0,
    "high": 1290.0,
    "low": 1195.0,
    "volume": 2873,
    "ma5": 1203.0,
    "ma10": 1133.5,
    "ma20": 1040.55,
    "ma60": 1195.37,
    "vMa5": 3332,
    "vMa10": 3696,
    "high5d": 1330.0,
    "high10d": 1330.0,
    "high20d": 1330.0,
    "sparkline": [
      1030.0,
      1035.0,
      1135.0,
      1045.0,
      1075.0,
      1065.0,
      1170.0,
      1285.0,
      1280.0,
      1215.0
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
        "close": 1280.0,
        "ma5": 1175.0,
        "ma10": 1106.0
      },
      {
        "open": 1270.0,
        "high": 1290.0,
        "low": 1195.0,
        "close": 1215.0,
        "ma5": 1203.0,
        "ma10": 1133.5
      }
    ],
    "symbol": "8996.TW",
    "maxVol10d": 6097,
    "hasVolumeBurst": true,
    "kd": {
      "k": 79.4,
      "d": 80.7,
      "prevK": 88.2,
      "prevD": 81.4,
      "h8": 1330.0,
      "l8": 1030.0
    }
  },
  {
    "code": "2903",
    "name": "遠百",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 21.6,
    "prevClose": 21.65,
    "open": 21.65,
    "high": 21.85,
    "low": 21.6,
    "volume": 1747,
    "ma5": 21.78,
    "ma10": 21.89,
    "ma20": 22.09,
    "ma60": 22.51,
    "vMa5": 2667,
    "vMa10": 1982,
    "high5d": 22.1,
    "high10d": 22.2,
    "high20d": 22.7,
    "sparkline": [
      22.1,
      22.0,
      21.85,
      22.0,
      22.05,
      21.9,
      22.0,
      21.75,
      21.65,
      21.6
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
        "close": 21.65,
        "ma5": 21.87,
        "ma10": 21.96
      },
      {
        "open": 21.65,
        "high": 21.85,
        "low": 21.6,
        "close": 21.6,
        "ma5": 21.78,
        "ma10": 21.89
      }
    ],
    "symbol": "2903.TW",
    "maxVol10d": 7140,
    "hasVolumeBurst": true,
    "kd": {
      "k": 15.2,
      "d": 19.6,
      "prevK": 18.6,
      "prevD": 21.8,
      "h8": 22.15,
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
    "price": 88.8,
    "prevClose": 90.9,
    "open": 90.5,
    "high": 91.3,
    "low": 87.6,
    "volume": 4406,
    "ma5": 90.76,
    "ma10": 92.47,
    "ma20": 90.3,
    "ma60": 89.76,
    "vMa5": 4302,
    "vMa10": 4470,
    "high5d": 93.5,
    "high10d": 98.3,
    "high20d": 98.3,
    "sparkline": [
      93.8,
      97.1,
      94.7,
      93.4,
      91.9,
      91.0,
      91.6,
      91.5,
      90.9,
      88.8
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
        "low": 89.8,
        "close": 90.9,
        "ma5": 91.38,
        "ma10": 92.76
      },
      {
        "open": 90.5,
        "high": 91.3,
        "low": 87.6,
        "close": 88.8,
        "ma5": 90.76,
        "ma10": 92.47
      }
    ],
    "symbol": "2347.TW",
    "maxVol10d": 7185,
    "hasVolumeBurst": false,
    "kd": {
      "k": 26.4,
      "d": 41.3,
      "prevK": 34.0,
      "prevD": 48.7,
      "h8": 98.3,
      "l8": 89.4
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
    "price": 11.57,
    "prevClose": 11.59,
    "open": 11.59,
    "high": 11.59,
    "low": 11.53,
    "volume": 1266,
    "ma5": 11.59,
    "ma10": 11.57,
    "ma20": 11.38,
    "ma60": 11.17,
    "vMa5": 961,
    "vMa10": 862,
    "high5d": 11.65,
    "high10d": 11.66,
    "high20d": 11.66,
    "sparkline": [
      11.43,
      11.63,
      11.58,
      11.53,
      11.63,
      11.61,
      11.57,
      11.59,
      11.59,
      11.57
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
        "close": 11.59,
        "ma5": 11.6,
        "ma10": 11.55
      },
      {
        "open": 11.59,
        "high": 11.59,
        "low": 11.53,
        "close": 11.57,
        "ma5": 11.59,
        "ma10": 11.57
      }
    ],
    "symbol": "009814.TWO",
    "maxVol10d": 1343,
    "hasVolumeBurst": true,
    "kd": {
      "k": 65.6,
      "d": 76.9,
      "prevK": 80.6,
      "prevD": 82.6,
      "h8": 11.66,
      "l8": 11.52
    }
  },
  {
    "code": "00695B",
    "name": "富邦美債7-10",
    "categories": [
      "SitcaBuy",
      "TurnoverRate",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 35.1,
    "prevClose": 35.16,
    "open": 35.08,
    "high": 35.23,
    "low": 34.95,
    "volume": 1296,
    "ma5": 35.18,
    "ma10": 35.26,
    "ma20": 35.34,
    "ma60": 35.29,
    "vMa5": 578,
    "vMa10": 379,
    "high5d": 35.26,
    "high10d": 35.45,
    "high20d": 35.58,
    "sparkline": [
      35.36,
      35.41,
      35.4,
      35.23,
      35.32,
      35.19,
      35.24,
      35.23,
      35.16,
      35.1
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
        "low": 35.16,
        "close": 35.16,
        "ma5": 35.23,
        "ma10": 35.29
      },
      {
        "open": 35.08,
        "high": 35.23,
        "low": 34.95,
        "close": 35.1,
        "ma5": 35.18,
        "ma10": 35.26
      }
    ],
    "symbol": "00695B.TWO",
    "maxVol10d": 1296,
    "hasVolumeBurst": true,
    "kd": {
      "k": 25.8,
      "d": 34.2,
      "prevK": 23.6,
      "prevD": 38.4,
      "h8": 35.45,
      "l8": 35.16
    }
  },
  {
    "code": "3081",
    "name": "聯亞",
    "categories": [
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 2790.0,
    "prevClose": 2540.0,
    "open": 2670.0,
    "high": 2790.0,
    "low": 2625.0,
    "volume": 1585,
    "ma5": 2640.0,
    "ma10": 2454.0,
    "ma20": 2063.5,
    "ma60": 2056.61,
    "vMa5": 1357,
    "vMa10": 2079,
    "high5d": 2845.0,
    "high10d": 2845.0,
    "high20d": 2845.0,
    "sparkline": [
      1965.0,
      2160.0,
      2375.0,
      2305.0,
      2535.0,
      2480.0,
      2725.0,
      2665.0,
      2540.0,
      2790.0
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
        "low": 2470.0,
        "close": 2540.0,
        "ma5": 2589.0,
        "ma10": 2354.0
      },
      {
        "open": 2670.0,
        "high": 2790.0,
        "low": 2625.0,
        "close": 2790.0,
        "ma5": 2640.0,
        "ma10": 2454.0
      }
    ],
    "symbol": "3081.TWO",
    "maxVol10d": 5704,
    "hasVolumeBurst": true,
    "kd": {
      "k": 85.0,
      "d": 84.8,
      "prevK": 81.5,
      "prevD": 84.7,
      "h8": 2845.0,
      "l8": 2160.0
    }
  },
  {
    "code": "6510",
    "name": "精測",
    "categories": [
      "SitcaBuy",
      "MajorBuy",
      "ValueTop",
      "SitcaBuy5D",
      "MajorBuy1D"
    ],
    "price": 2880.0,
    "prevClose": 2990.0,
    "open": 3010.0,
    "high": 3010.0,
    "low": 2790.0,
    "volume": 663,
    "ma5": 2863.0,
    "ma10": 2824.0,
    "ma20": 2693.75,
    "ma60": 3036.58,
    "vMa5": 560,
    "vMa10": 549,
    "high5d": 3100.0,
    "high10d": 3100.0,
    "high20d": 3100.0,
    "sparkline": [
      2795.0,
      2755.0,
      2835.0,
      2695.0,
      2845.0,
      2800.0,
      2825.0,
      2820.0,
      2990.0,
      2880.0
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
        "close": 2990.0,
        "ma5": 2856.0,
        "ma10": 2801.5
      },
      {
        "open": 3010.0,
        "high": 3010.0,
        "low": 2790.0,
        "close": 2880.0,
        "ma5": 2863.0,
        "ma10": 2824.0
      }
    ],
    "symbol": "6510.TWO",
    "maxVol10d": 819,
    "hasVolumeBurst": false,
    "kd": {
      "k": 65.6,
      "d": 69.2,
      "prevK": 73.1,
      "prevD": 71.0,
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
    "price": 2390.0,
    "prevClose": 2655.0,
    "open": 2645.0,
    "high": 2685.0,
    "low": 2390.0,
    "volume": 1401,
    "ma5": 2613.0,
    "ma10": 2649.0,
    "ma20": 2515.0,
    "ma60": 2860.5,
    "vMa5": 937,
    "vMa10": 1020,
    "high5d": 2825.0,
    "high10d": 2995.0,
    "high20d": 2995.0,
    "sparkline": [
      2575.0,
      2630.0,
      2660.0,
      2725.0,
      2835.0,
      2660.0,
      2660.0,
      2700.0,
      2655.0,
      2390.0
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
        "low": 2635.0,
        "close": 2655.0,
        "ma5": 2702.0,
        "ma10": 2649.0
      },
      {
        "open": 2645.0,
        "high": 2685.0,
        "low": 2390.0,
        "close": 2390.0,
        "ma5": 2613.0,
        "ma10": 2649.0
      }
    ],
    "symbol": "3529.TWO",
    "maxVol10d": 1454,
    "hasVolumeBurst": false,
    "kd": {
      "k": 37.9,
      "d": 55.5,
      "prevK": 56.8,
      "prevD": 64.4,
      "h8": 2995.0,
      "l8": 2565.0
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
    "price": 17020.0,
    "prevClose": 17690.0,
    "open": 17380.0,
    "high": 17600.0,
    "low": 16980.0,
    "volume": 145,
    "ma5": 17202.0,
    "ma10": 16716.5,
    "ma20": 15579.25,
    "ma60": 15507.7,
    "vMa5": 222,
    "vMa10": 226,
    "high5d": 18600.0,
    "high10d": 18600.0,
    "high20d": 18600.0,
    "sparkline": [
      15500.0,
      16020.0,
      16750.0,
      16345.0,
      16540.0,
      16440.0,
      17370.0,
      17490.0,
      17690.0,
      17020.0
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
        "low": 17690.0,
        "close": 17690.0,
        "ma5": 17106.0,
        "ma10": 16612.0
      },
      {
        "open": 17380.0,
        "high": 17600.0,
        "low": 16980.0,
        "close": 17020.0,
        "ma5": 17202.0,
        "ma10": 16716.5
      }
    ],
    "symbol": "5274.TWO",
    "maxVol10d": 318,
    "hasVolumeBurst": false,
    "kd": {
      "k": 68.7,
      "d": 77.8,
      "prevK": 81.0,
      "prevD": 82.4,
      "h8": 18600.0,
      "l8": 15775.0
    }
  },
  {
    "code": "3131",
    "name": "弘塑",
    "categories": [
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 2500.0,
    "prevClose": 2535.0,
    "open": 2485.0,
    "high": 2535.0,
    "low": 2410.0,
    "volume": 429,
    "ma5": 2523.0,
    "ma10": 2474.0,
    "ma20": 2558.5,
    "ma60": 3061.5,
    "vMa5": 613,
    "vMa10": 759,
    "high5d": 2730.0,
    "high10d": 2730.0,
    "high20d": 3225.0,
    "sparkline": [
      2540.0,
      2345.0,
      2385.0,
      2385.0,
      2470.0,
      2390.0,
      2555.0,
      2635.0,
      2535.0,
      2500.0
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
        "close": 2535.0,
        "ma5": 2517.0,
        "ma10": 2466.0
      },
      {
        "open": 2485.0,
        "high": 2535.0,
        "low": 2410.0,
        "close": 2500.0,
        "ma5": 2523.0,
        "ma10": 2474.0
      }
    ],
    "symbol": "3131.TWO",
    "maxVol10d": 1388,
    "hasVolumeBurst": true,
    "kd": {
      "k": 62.9,
      "d": 59.3,
      "prevK": 65.7,
      "prevD": 57.5,
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
    "price": 31.85,
    "prevClose": 32.67,
    "open": 31.85,
    "high": 32.2,
    "low": 31.65,
    "volume": 3946,
    "ma5": 33.63,
    "ma10": 35.42,
    "ma20": 35.87,
    "ma60": 36.11,
    "vMa5": 5295,
    "vMa10": 4000,
    "high5d": 37.48,
    "high10d": 37.62,
    "high20d": 37.62,
    "sparkline": [
      37.1,
      37.29,
      36.91,
      37.24,
      37.53,
      37.15,
      33.43,
      33.05,
      32.67,
      31.85
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
        "open": 37.48,
        "high": 37.48,
        "low": 37.05,
        "close": 37.15,
        "ma5": 37.22,
        "ma10": 36.78
      },
      {
        "open": 33.43,
        "high": 33.43,
        "low": 33.43,
        "close": 33.43,
        "ma5": 36.45,
        "ma10": 36.49
      },
      {
        "open": 32.48,
        "high": 33.24,
        "low": 32.24,
        "close": 33.05,
        "ma5": 35.68,
        "ma10": 36.23
      },
      {
        "open": 32.81,
        "high": 32.91,
        "low": 32.24,
        "close": 32.67,
        "ma5": 34.77,
        "ma10": 35.9
      },
      {
        "open": 31.85,
        "high": 32.2,
        "low": 31.65,
        "close": 31.85,
        "ma5": 33.63,
        "ma10": 35.42
      }
    ],
    "symbol": "4123.TWO",
    "maxVol10d": 10913,
    "hasVolumeBurst": true,
    "kd": {
      "k": 20.9,
      "d": 39.8,
      "prevK": 29.7,
      "prevD": 49.2,
      "h8": 37.53,
      "l8": 32.24
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
    "price": 409.0,
    "prevClose": 412.0,
    "open": 419.0,
    "high": 420.0,
    "low": 405.0,
    "volume": 626,
    "ma5": 423.7,
    "ma10": 400.95,
    "ma20": 383.38,
    "ma60": 400.62,
    "vMa5": 1314,
    "vMa10": 1064,
    "high5d": 440.0,
    "high10d": 440.0,
    "high20d": 440.0,
    "sparkline": [
      370.0,
      372.5,
      380.5,
      373.0,
      395.0,
      434.5,
      431.5,
      431.5,
      412.0,
      409.0
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
        "low": 410.0,
        "close": 412.0,
        "ma5": 420.9,
        "ma10": 396.3
      },
      {
        "open": 419.0,
        "high": 420.0,
        "low": 405.0,
        "close": 409.0,
        "ma5": 423.7,
        "ma10": 400.95
      }
    ],
    "symbol": "6121.TWO",
    "maxVol10d": 2550,
    "hasVolumeBurst": true,
    "kd": {
      "k": 72.3,
      "d": 77.3,
      "prevK": 80.6,
      "prevD": 79.7,
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
    "price": 1330.0,
    "prevClose": 1375.0,
    "open": 1375.0,
    "high": 1375.0,
    "low": 1310.0,
    "volume": 1299,
    "ma5": 1329.0,
    "ma10": 1292.0,
    "ma20": 1206.1,
    "ma60": 1445.28,
    "vMa5": 1596,
    "vMa10": 1793,
    "high5d": 1450.0,
    "high10d": 1450.0,
    "high20d": 1450.0,
    "sparkline": [
      1170.0,
      1285.0,
      1350.0,
      1235.0,
      1235.0,
      1275.0,
      1320.0,
      1345.0,
      1375.0,
      1330.0
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
        "close": 1375.0,
        "ma5": 1310.0,
        "ma10": 1265.5
      },
      {
        "open": 1375.0,
        "high": 1375.0,
        "low": 1310.0,
        "close": 1330.0,
        "ma5": 1329.0,
        "ma10": 1292.0
      }
    ],
    "symbol": "3491.TWO",
    "maxVol10d": 3380,
    "hasVolumeBurst": false,
    "kd": {
      "k": 67.4,
      "d": 70.4,
      "prevK": 76.7,
      "prevD": 71.8,
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
    "price": 731.0,
    "prevClose": 750.0,
    "open": 750.0,
    "high": 750.0,
    "low": 728.0,
    "volume": 1935,
    "ma5": 765.6,
    "ma10": 775.4,
    "ma20": 754.25,
    "ma60": 759.47,
    "vMa5": 1680,
    "vMa10": 1567,
    "high5d": 806.0,
    "high10d": 806.0,
    "high20d": 806.0,
    "sparkline": [
      774.0,
      777.0,
      784.0,
      799.0,
      792.0,
      804.0,
      781.0,
      762.0,
      750.0,
      731.0
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
        "low": 750.0,
        "close": 750.0,
        "ma5": 777.8,
        "ma10": 779.4
      },
      {
        "open": 750.0,
        "high": 750.0,
        "low": 728.0,
        "close": 731.0,
        "ma5": 765.6,
        "ma10": 775.4
      }
    ],
    "symbol": "3293.TWO",
    "maxVol10d": 2526,
    "hasVolumeBurst": true,
    "kd": {
      "k": 27.3,
      "d": 50.7,
      "prevK": 39.0,
      "prevD": 62.5,
      "h8": 806.0,
      "l8": 750.0
    }
  },
  {
    "code": "8436",
    "name": "大江",
    "categories": [
      "SitcaBuy",
      "SitcaBuy5D"
    ],
    "price": 123.0,
    "prevClose": 120.0,
    "open": 120.0,
    "high": 123.0,
    "low": 118.0,
    "volume": 978,
    "ma5": 123.2,
    "ma10": 120.6,
    "ma20": 117.55,
    "ma60": 117.22,
    "vMa5": 1261,
    "vMa10": 1065,
    "high5d": 127.0,
    "high10d": 127.5,
    "high20d": 127.5,
    "sparkline": [
      113.5,
      114.5,
      119.5,
      117.0,
      125.5,
      126.0,
      124.5,
      122.5,
      120.0,
      123.0
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
        "close": 120.0,
        "ma5": 123.7,
        "ma10": 119.6
      },
      {
        "open": 120.0,
        "high": 123.0,
        "low": 118.0,
        "close": 123.0,
        "ma5": 123.2,
        "ma10": 120.6
      }
    ],
    "symbol": "8436.TWO",
    "maxVol10d": 2839,
    "hasVolumeBurst": true,
    "kd": {
      "k": 66.0,
      "d": 67.3,
      "prevK": 65.6,
      "prevD": 68.0,
      "h8": 127.5,
      "l8": 114.0
    }
  },
  {
    "code": "6274",
    "name": "台燿",
    "categories": [
      "MajorBuy",
      "Top100",
      "ValueTop",
      "MajorBuy1D"
    ],
    "price": 1600.0,
    "prevClose": 1675.0,
    "open": 1695.0,
    "high": 1695.0,
    "low": 1575.0,
    "volume": 6547,
    "ma5": 1616.0,
    "ma10": 1532.0,
    "ma20": 1362.0,
    "ma60": 1514.33,
    "vMa5": 3616,
    "vMa10": 5664,
    "high5d": 1730.0,
    "high10d": 1730.0,
    "high20d": 1730.0,
    "sparkline": [
      1340.0,
      1470.0,
      1530.0,
      1440.0,
      1460.0,
      1605.0,
      1600.0,
      1600.0,
      1675.0,
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
    ],
    "k5d": [
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
        "close": 1675.0,
        "ma5": 1588.0,
        "ma10": 1494.0
      },
      {
        "open": 1695.0,
        "high": 1695.0,
        "low": 1575.0,
        "close": 1600.0,
        "ma5": 1616.0,
        "ma10": 1532.0
      }
    ],
    "symbol": "6274.TWO",
    "maxVol10d": 16305,
    "hasVolumeBurst": true,
    "kd": {
      "k": 80.0,
      "d": 83.2,
      "prevK": 87.8,
      "prevD": 84.7,
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
    "price": 11.42,
    "prevClose": 11.34,
    "open": 11.38,
    "high": 11.45,
    "low": 11.31,
    "volume": 17856,
    "ma5": 11.26,
    "ma10": 11.03,
    "ma20": 10.58,
    "ma60": 10.78,
    "vMa5": 18238,
    "vMa10": 18687,
    "high5d": 11.45,
    "high10d": 11.45,
    "high20d": 11.45,
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
      11.42
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
        "open": 11.33,
        "high": 11.35,
        "low": 11.23,
        "close": 11.3,
        "ma5": 11.08,
        "ma10": 10.81
      },
      {
        "open": 11.39,
        "high": 11.41,
        "low": 11.29,
        "close": 11.34,
        "ma5": 11.18,
        "ma10": 10.92
      },
      {
        "open": 11.38,
        "high": 11.45,
        "low": 11.31,
        "close": 11.42,
        "ma5": 11.26,
        "ma10": 11.03
      }
    ],
    "symbol": "00999A.TW",
    "maxVol10d": 26113,
    "hasVolumeBurst": false,
    "kd": {
      "k": 95.0,
      "d": 92.4,
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
    "price": 15.02,
    "prevClose": 14.76,
    "open": 15.05,
    "high": 15.12,
    "low": 15.01,
    "volume": 14465,
    "ma5": 14.98,
    "ma10": 14.51,
    "ma20": 13.67,
    "ma60": 14.09,
    "vMa5": 16398,
    "vMa10": 14840,
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
      15.02
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
        "open": 15.05,
        "high": 15.09,
        "low": 14.97,
        "close": 14.98,
        "ma5": 14.87,
        "ma10": 14.12
      },
      {
        "open": 14.87,
        "high": 14.87,
        "low": 14.68,
        "close": 14.76,
        "ma5": 14.95,
        "ma10": 14.3
      },
      {
        "open": 15.05,
        "high": 15.12,
        "low": 15.01,
        "close": 15.02,
        "ma5": 14.98,
        "ma10": 14.51
      }
    ],
    "symbol": "009821.TW",
    "maxVol10d": 25406,
    "hasVolumeBurst": true,
    "kd": {
      "k": 91.1,
      "d": 89.6,
      "prevK": 90.1,
      "prevD": 88.9,
      "h8": 15.13,
      "l8": 13.56
    }
  },
  {
    "code": "3706",
    "name": "神達",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 92.1,
    "prevClose": 92.7,
    "open": 93.2,
    "high": 93.2,
    "low": 91.1,
    "volume": 8669,
    "ma5": 91.78,
    "ma10": 91.96,
    "ma20": 90.55,
    "ma60": 89.3,
    "vMa5": 13650,
    "vMa10": 13838,
    "high5d": 94.0,
    "high10d": 94.0,
    "high20d": 94.0,
    "sparkline": [
      91.3,
      91.9,
      92.9,
      91.7,
      92.9,
      90.0,
      92.4,
      91.7,
      92.7,
      92.1
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
        "close": 92.7,
        "ma5": 91.94,
        "ma10": 91.7
      },
      {
        "open": 93.2,
        "high": 93.2,
        "low": 91.1,
        "close": 92.1,
        "ma5": 91.78,
        "ma10": 91.96
      }
    ],
    "symbol": "3706.TW",
    "maxVol10d": 19873,
    "hasVolumeBurst": true,
    "kd": {
      "k": 68.8,
      "d": 72.1,
      "prevK": 74.3,
      "prevD": 73.7,
      "h8": 94.0,
      "l8": 89.5
    }
  },
  {
    "code": "2353",
    "name": "宏碁",
    "categories": [
      "Top100",
      "MajorBuy",
      "SitcaBuy",
      "SitcaBuy3D",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 31.45,
    "prevClose": 32.3,
    "open": 32.5,
    "high": 32.55,
    "low": 30.75,
    "volume": 36525,
    "ma5": 31.62,
    "ma10": 30.86,
    "ma20": 30.14,
    "ma60": 32.86,
    "vMa5": 31930,
    "vMa10": 26495,
    "high5d": 33.2,
    "high10d": 33.2,
    "high20d": 33.2,
    "sparkline": [
      29.05,
      30.25,
      30.0,
      30.25,
      31.0,
      31.05,
      31.75,
      31.55,
      32.3,
      31.45
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
        "close": 32.3,
        "ma5": 31.53,
        "ma10": 30.6
      },
      {
        "open": 32.5,
        "high": 32.55,
        "low": 30.75,
        "close": 31.45,
        "ma5": 31.62,
        "ma10": 30.86
      }
    ],
    "symbol": "2353.TW",
    "maxVol10d": 59402,
    "hasVolumeBurst": true,
    "kd": {
      "k": 72.0,
      "d": 76.4,
      "prevK": 82.7,
      "prevD": 78.6,
      "h8": 33.2,
      "l8": 29.65
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
    "price": 12.46,
    "prevClose": 12.49,
    "open": 12.46,
    "high": 12.5,
    "low": 12.4,
    "volume": 10209,
    "ma5": 12.46,
    "ma10": 12.43,
    "ma20": 12.22,
    "ma60": 12.31,
    "vMa5": 12742,
    "vMa10": 15642,
    "high5d": 12.64,
    "high10d": 12.64,
    "high20d": 12.64,
    "sparkline": [
      12.23,
      12.47,
      12.45,
      12.4,
      12.44,
      12.34,
      12.43,
      12.56,
      12.49,
      12.46
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
        "open": 12.59,
        "high": 12.64,
        "low": 12.52,
        "close": 12.56,
        "ma5": 12.43,
        "ma10": 12.35
      },
      {
        "open": 12.61,
        "high": 12.63,
        "low": 12.47,
        "close": 12.49,
        "ma5": 12.45,
        "ma10": 12.39
      },
      {
        "open": 12.46,
        "high": 12.5,
        "low": 12.4,
        "close": 12.46,
        "ma5": 12.46,
        "ma10": 12.43
      }
    ],
    "symbol": "00940.TW",
    "maxVol10d": 38123,
    "hasVolumeBurst": true,
    "kd": {
      "k": 70.4,
      "d": 77.0,
      "prevK": 80.6,
      "prevD": 80.3,
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
    "price": 61.8,
    "prevClose": 61.95,
    "open": 61.95,
    "high": 62.2,
    "low": 61.7,
    "volume": 17817,
    "ma5": 61.74,
    "ma10": 60.96,
    "ma20": 59.72,
    "ma60": 60.97,
    "vMa5": 18923,
    "vMa10": 22299,
    "high5d": 62.8,
    "high10d": 62.8,
    "high20d": 62.8,
    "sparkline": [
      58.65,
      60.65,
      60.45,
      60.2,
      60.95,
      61.05,
      61.5,
      62.4,
      61.95,
      61.8
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
        "open": 62.5,
        "high": 62.7,
        "low": 62.1,
        "close": 62.4,
        "ma5": 61.22,
        "ma10": 60.47
      },
      {
        "open": 62.7,
        "high": 62.8,
        "low": 61.85,
        "close": 61.95,
        "ma5": 61.57,
        "ma10": 60.7
      },
      {
        "open": 61.95,
        "high": 62.2,
        "low": 61.7,
        "close": 61.8,
        "ma5": 61.74,
        "ma10": 60.96
      }
    ],
    "symbol": "0052.TW",
    "maxVol10d": 39603,
    "hasVolumeBurst": false,
    "kd": {
      "k": 81.6,
      "d": 84.8,
      "prevK": 88.3,
      "prevD": 86.3,
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
    "price": 10.23,
    "prevClose": 10.26,
    "open": 10.25,
    "high": 10.26,
    "low": 10.21,
    "volume": 7924,
    "ma5": 10.15,
    "ma10": 10.03,
    "ma20": 9.82,
    "ma60": 10.0,
    "vMa5": 14679,
    "vMa10": 12968,
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
      10.23
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
        "open": 10.14,
        "high": 10.15,
        "low": 10.11,
        "close": 10.13,
        "ma5": 10.06,
        "ma10": 9.88
      },
      {
        "open": 10.28,
        "high": 10.31,
        "low": 10.26,
        "close": 10.26,
        "ma5": 10.12,
        "ma10": 9.96
      },
      {
        "open": 10.25,
        "high": 10.26,
        "low": 10.21,
        "close": 10.23,
        "ma5": 10.15,
        "ma10": 10.03
      }
    ],
    "symbol": "009820.TW",
    "maxVol10d": 22542,
    "hasVolumeBurst": true,
    "kd": {
      "k": 88.8,
      "d": 87.8,
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
    "price": 131.5,
    "prevClose": 131.5,
    "open": 131.5,
    "high": 136.5,
    "low": 128.0,
    "volume": 7340,
    "ma5": 125.2,
    "ma10": 114.46,
    "ma20": 100.36,
    "ma60": 86.83,
    "vMa5": 12708,
    "vMa10": 13794,
    "high5d": 137.5,
    "high10d": 137.5,
    "high20d": 137.5,
    "sparkline": [
      92.6,
      101.5,
      108.0,
      107.5,
      109.0,
      111.0,
      120.0,
      132.0,
      131.5,
      131.5
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
        "close": 131.5,
        "ma5": 120.7,
        "ma10": 109.73
      },
      {
        "open": 131.5,
        "high": 136.5,
        "low": 128.0,
        "close": 131.5,
        "ma5": 125.2,
        "ma10": 114.46
      }
    ],
    "symbol": "3605.TW",
    "maxVol10d": 23186,
    "hasVolumeBurst": true,
    "kd": {
      "k": 89.5,
      "d": 87.2,
      "prevK": 90.8,
      "prevD": 86.0,
      "h8": 137.5,
      "l8": 92.0
    }
  },
  {
    "code": "4510",
    "name": "高鋒",
    "categories": [
      "Top100",
      "TurnoverRate"
    ],
    "price": 45.45,
    "prevClose": 46.45,
    "open": 47.1,
    "high": 48.25,
    "low": 45.3,
    "volume": 4881,
    "ma5": 44.53,
    "ma10": 41.77,
    "ma20": 39.39,
    "ma60": 43.21,
    "vMa5": 3989,
    "vMa10": 2487,
    "high5d": 48.25,
    "high10d": 48.25,
    "high20d": 48.25,
    "sparkline": [
      37.0,
      38.25,
      38.85,
      40.1,
      40.85,
      40.5,
      44.55,
      45.7,
      46.45,
      45.45
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
        "low": 46.05,
        "close": 46.45,
        "ma5": 43.61,
        "ma10": 40.86
      },
      {
        "open": 47.1,
        "high": 48.25,
        "low": 45.3,
        "close": 45.45,
        "ma5": 44.53,
        "ma10": 41.77
      }
    ],
    "symbol": "4510.TWO",
    "maxVol10d": 5649,
    "hasVolumeBurst": true,
    "kd": {
      "k": 83.6,
      "d": 81.3,
      "prevK": 88.6,
      "prevD": 80.2,
      "h8": 47.25,
      "l8": 37.65
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
    "prevClose": 15.55,
    "open": 15.55,
    "high": 15.55,
    "low": 15.29,
    "volume": 4368,
    "ma5": 15.57,
    "ma10": 15.58,
    "ma20": 15.28,
    "ma60": 14.69,
    "vMa5": 3647,
    "vMa10": 4444,
    "high5d": 15.82,
    "high10d": 15.94,
    "high20d": 15.94,
    "sparkline": [
      15.38,
      15.3,
      15.61,
      15.8,
      15.81,
      15.77,
      15.58,
      15.64,
      15.55,
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
        "low": 15.54,
        "close": 15.55,
        "ma5": 15.67,
        "ma10": 15.59
      },
      {
        "open": 15.55,
        "high": 15.55,
        "low": 15.29,
        "close": 15.33,
        "ma5": 15.57,
        "ma10": 15.58
      }
    ],
    "symbol": "00955.TWO",
    "maxVol10d": 7582,
    "hasVolumeBurst": false,
    "kd": {
      "k": 43.7,
      "d": 64.1,
      "prevK": 62.5,
      "prevD": 74.4,
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
      "Top100",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 1385.0,
    "prevClose": 1275.0,
    "open": 1275.0,
    "high": 1400.0,
    "low": 1265.0,
    "volume": 5454,
    "ma5": 1227.0,
    "ma10": 1169.0,
    "ma20": 1068.8,
    "ma60": 1075.97,
    "vMa5": 5148,
    "vMa10": 4323,
    "high5d": 1400.0,
    "high10d": 1400.0,
    "high20d": 1400.0,
    "sparkline": [
      1090.0,
      1070.0,
      1175.0,
      1130.0,
      1090.0,
      1050.0,
      1155.0,
      1270.0,
      1275.0,
      1385.0
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
        "close": 1275.0,
        "ma5": 1168.0,
        "ma10": 1131.0
      },
      {
        "open": 1275.0,
        "high": 1400.0,
        "low": 1265.0,
        "close": 1385.0,
        "ma5": 1227.0,
        "ma10": 1169.0
      }
    ],
    "symbol": "6187.TWO",
    "maxVol10d": 5823,
    "hasVolumeBurst": true,
    "kd": {
      "k": 87.0,
      "d": 80.2,
      "prevK": 82.6,
      "prevD": 76.8,
      "h8": 1320.0,
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
    "price": 190.5,
    "prevClose": 184.0,
    "open": 187.0,
    "high": 193.0,
    "low": 181.0,
    "volume": 2278,
    "ma5": 172.1,
    "ma10": 160.6,
    "ma20": 146.43,
    "ma60": 132.75,
    "vMa5": 3125,
    "vMa10": 2954,
    "high5d": 195.0,
    "high10d": 195.0,
    "high20d": 195.0,
    "sparkline": [
      148.5,
      156.5,
      150.0,
      145.0,
      145.5,
      147.0,
      161.5,
      177.5,
      184.0,
      190.5
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
        "close": 184.0,
        "ma5": 163.1,
        "ma10": 155.05
      },
      {
        "open": 187.0,
        "high": 193.0,
        "low": 181.0,
        "close": 190.5,
        "ma5": 172.1,
        "ma10": 160.6
      }
    ],
    "symbol": "6538.TWO",
    "maxVol10d": 6417,
    "hasVolumeBurst": true,
    "kd": {
      "k": 86.4,
      "d": 81.0,
      "prevK": 83.8,
      "prevD": 78.3,
      "h8": 195.0,
      "l8": 140.5
    }
  },
  {
    "code": "6207",
    "name": "雷科",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 107.5,
    "prevClose": 107.5,
    "open": 108.0,
    "high": 109.5,
    "low": 105.5,
    "volume": 1661,
    "ma5": 108.9,
    "ma10": 106.29,
    "ma20": 106.3,
    "ma60": 127.17,
    "vMa5": 3727,
    "vMa10": 3912,
    "high5d": 117.0,
    "high10d": 117.0,
    "high20d": 134.0,
    "sparkline": [
      103.0,
      104.5,
      104.0,
      99.9,
      107.0,
      107.0,
      111.5,
      111.0,
      107.5,
      107.5
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
        "low": 105.5,
        "close": 107.5,
        "ma5": 108.8,
        "ma10": 105.19
      },
      {
        "open": 108.0,
        "high": 109.5,
        "low": 105.5,
        "close": 107.5,
        "ma5": 108.9,
        "ma10": 106.29
      }
    ],
    "symbol": "6207.TWO",
    "maxVol10d": 5483,
    "hasVolumeBurst": false,
    "kd": {
      "k": 61.3,
      "d": 65.2,
      "prevK": 68.5,
      "prevD": 67.1,
      "h8": 117.0,
      "l8": 99.1
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
    "price": 158.5,
    "prevClose": 158.0,
    "open": 159.5,
    "high": 168.5,
    "low": 155.5,
    "volume": 7984,
    "ma5": 143.2,
    "ma10": 128.5,
    "ma20": 115.19,
    "ma60": 123.42,
    "vMa5": 4111,
    "vMa10": 2895,
    "high5d": 168.5,
    "high10d": 168.5,
    "high20d": 168.5,
    "sparkline": [
      103.5,
      113.0,
      111.0,
      116.5,
      125.0,
      124.5,
      131.0,
      144.0,
      158.0,
      158.5
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
      },
      {
        "open": 159.5,
        "high": 168.5,
        "low": 155.5,
        "close": 158.5,
        "ma5": 143.2,
        "ma10": 128.5
      }
    ],
    "symbol": "3498.TWO",
    "maxVol10d": 7984,
    "hasVolumeBurst": true,
    "kd": {
      "k": 90.8,
      "d": 87.2,
      "prevK": 94.2,
      "prevD": 85.4,
      "h8": 158.0,
      "l8": 106.5
    }
  },
  {
    "code": "6026",
    "name": "福邦證",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 14.55,
    "prevClose": 14.65,
    "open": 14.75,
    "high": 14.75,
    "low": 14.45,
    "volume": 542,
    "ma5": 14.46,
    "ma10": 14.23,
    "ma20": 14.14,
    "ma60": 15.7,
    "vMa5": 1061,
    "vMa10": 1038,
    "high5d": 14.9,
    "high10d": 14.9,
    "high20d": 14.9,
    "sparkline": [
      13.95,
      14.15,
      13.9,
      14.1,
      13.9,
      13.95,
      14.65,
      14.5,
      14.65,
      14.55
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
      },
      {
        "open": 14.75,
        "high": 14.75,
        "low": 14.45,
        "close": 14.55,
        "ma5": 14.46,
        "ma10": 14.23
      }
    ],
    "symbol": "6026.TWO",
    "maxVol10d": 1947,
    "hasVolumeBurst": true,
    "kd": {
      "k": 71.9,
      "d": 70.6,
      "prevK": 73.8,
      "prevD": 70.0,
      "h8": 14.9,
      "l8": 13.8
    }
  },
  {
    "code": "6015",
    "name": "宏遠證",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 15.95,
    "prevClose": 16.45,
    "open": 16.5,
    "high": 16.5,
    "low": 15.95,
    "volume": 1488,
    "ma5": 15.9,
    "ma10": 15.68,
    "ma20": 15.7,
    "ma60": 17.45,
    "vMa5": 2124,
    "vMa10": 1788,
    "high5d": 16.85,
    "high10d": 16.85,
    "high20d": 16.9,
    "sparkline": [
      15.55,
      15.95,
      15.5,
      15.3,
      14.95,
      15.1,
      16.05,
      15.95,
      16.45,
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
    ],
    "k5d": [
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
        "close": 16.45,
        "ma5": 15.7,
        "ma10": 15.64
      },
      {
        "open": 16.5,
        "high": 16.5,
        "low": 15.95,
        "close": 15.95,
        "ma5": 15.9,
        "ma10": 15.68
      }
    ],
    "symbol": "6015.TWO",
    "maxVol10d": 2694,
    "hasVolumeBurst": true,
    "kd": {
      "k": 67.4,
      "d": 63.5,
      "prevK": 70.7,
      "prevD": 61.5,
      "h8": 16.85,
      "l8": 14.55
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
    "price": 73.2,
    "prevClose": 72.6,
    "open": 72.6,
    "high": 73.5,
    "low": 71.5,
    "volume": 1506,
    "ma5": 74.04,
    "ma10": 74.09,
    "ma20": 70.26,
    "ma60": 78.52,
    "vMa5": 1882,
    "vMa10": 3022,
    "high5d": 76.7,
    "high10d": 79.2,
    "high20d": 79.2,
    "sparkline": [
      74.0,
      74.4,
      74.2,
      72.4,
      75.7,
      74.6,
      75.3,
      74.5,
      72.6,
      73.2
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
        "low": 72.2,
        "close": 72.6,
        "ma5": 74.54,
        "ma10": 73.79
      },
      {
        "open": 72.6,
        "high": 73.5,
        "low": 71.5,
        "close": 73.2,
        "ma5": 74.04,
        "ma10": 74.09
      }
    ],
    "symbol": "6548.TWO",
    "maxVol10d": 6375,
    "hasVolumeBurst": false,
    "kd": {
      "k": 48.0,
      "d": 62.1,
      "prevK": 61.0,
      "prevD": 69.1,
      "h8": 79.2,
      "l8": 71.8
    }
  },
  {
    "code": "00961",
    "name": "FT臺灣永續高息",
    "categories": [
      "Top100",
      "TurnoverRate"
    ],
    "price": 13.3,
    "prevClose": 13.44,
    "open": 13.44,
    "high": 13.45,
    "low": 13.2,
    "volume": 108281,
    "ma5": 13.27,
    "ma10": 13.17,
    "ma20": 12.94,
    "ma60": 12.77,
    "vMa5": 48971,
    "vMa10": 34501,
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
      13.3
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
        "open": 13.35,
        "high": 13.37,
        "low": 13.27,
        "close": 13.31,
        "ma5": 13.16,
        "ma10": 13.09
      },
      {
        "open": 13.46,
        "high": 13.49,
        "low": 13.38,
        "close": 13.44,
        "ma5": 13.24,
        "ma10": 13.13
      },
      {
        "open": 13.44,
        "high": 13.45,
        "low": 13.2,
        "close": 13.3,
        "ma5": 13.27,
        "ma10": 13.17
      }
    ],
    "symbol": "00961.TW",
    "maxVol10d": 108281,
    "hasVolumeBurst": true,
    "kd": {
      "k": 77.8,
      "d": 81.4,
      "prevK": 86.5,
      "prevD": 83.1,
      "h8": 13.49,
      "l8": 13.01
    }
  },
  {
    "code": "8096",
    "name": "擎亞",
    "categories": [
      "Top100"
    ],
    "price": 114.0,
    "prevClose": 116.5,
    "open": 119.5,
    "high": 119.5,
    "low": 113.0,
    "volume": 4396,
    "ma5": 120.6,
    "ma10": 124.9,
    "ma20": 126.0,
    "ma60": 137.04,
    "vMa5": 5554,
    "vMa10": 6903,
    "high5d": 128.0,
    "high10d": 141.0,
    "high20d": 146.5,
    "sparkline": [
      126.5,
      129.5,
      135.5,
      131.5,
      123.0,
      121.5,
      125.5,
      125.5,
      116.5,
      114.0
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
        "low": 114.5,
        "close": 116.5,
        "ma5": 122.4,
        "ma10": 125.0
      },
      {
        "open": 119.5,
        "high": 119.5,
        "low": 113.0,
        "close": 114.0,
        "ma5": 120.6,
        "ma10": 124.9
      }
    ],
    "symbol": "8096.TWO",
    "maxVol10d": 12087,
    "hasVolumeBurst": false,
    "kd": {
      "k": 26.4,
      "d": 41.1,
      "prevK": 37.9,
      "prevD": 48.4,
      "h8": 141.0,
      "l8": 114.5
    }
  },
  {
    "code": "3363",
    "name": "上詮",
    "categories": [
      "SitcaBuy",
      "ValueTop",
      "TurnoverRate",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 624.0,
    "prevClose": 586.0,
    "open": 593.0,
    "high": 625.0,
    "low": 585.0,
    "volume": 3859,
    "ma5": 609.2,
    "ma10": 603.5,
    "ma20": 568.0,
    "ma60": 648.27,
    "vMa5": 4093,
    "vMa10": 3691,
    "high5d": 656.0,
    "high10d": 656.0,
    "high20d": 656.0,
    "sparkline": [
      563.0,
      600.0,
      604.0,
      582.0,
      640.0,
      606.0,
      630.0,
      600.0,
      586.0,
      624.0
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
        "close": 586.0,
        "ma5": 612.4,
        "ma10": 593.6
      },
      {
        "open": 593.0,
        "high": 625.0,
        "low": 585.0,
        "close": 624.0,
        "ma5": 609.2,
        "ma10": 603.5
      }
    ],
    "symbol": "3363.TWO",
    "maxVol10d": 5455,
    "hasVolumeBurst": false,
    "kd": {
      "k": 65.1,
      "d": 69.9,
      "prevK": 66.4,
      "prevD": 72.2,
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
    "price": 18.74,
    "prevClose": 18.87,
    "open": 18.79,
    "high": 18.8,
    "low": 18.62,
    "volume": 3667,
    "ma5": 18.84,
    "ma10": 18.74,
    "ma20": 18.44,
    "ma60": 18.89,
    "vMa5": 4455,
    "vMa10": 4842,
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
      18.74
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
        "high": 19.03,
        "low": 18.81,
        "close": 18.94,
        "ma5": 18.81,
        "ma10": 18.63
      },
      {
        "open": 19.0,
        "high": 19.02,
        "low": 18.84,
        "close": 18.87,
        "ma5": 18.86,
        "ma10": 18.7
      },
      {
        "open": 18.79,
        "high": 18.8,
        "low": 18.62,
        "close": 18.74,
        "ma5": 18.84,
        "ma10": 18.74
      }
    ],
    "symbol": "00900.TW",
    "maxVol10d": 7310,
    "hasVolumeBurst": false,
    "kd": {
      "k": 69.8,
      "d": 81.3,
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
      "SitcaBuy5D"
    ],
    "price": 27.55,
    "prevClose": 27.1,
    "open": 27.1,
    "high": 27.55,
    "low": 27.0,
    "volume": 9055,
    "ma5": 27.29,
    "ma10": 27.2,
    "ma20": 27.22,
    "ma60": 27.43,
    "vMa5": 17183,
    "vMa10": 17947,
    "high5d": 27.9,
    "high10d": 27.9,
    "high20d": 27.9,
    "sparkline": [
      27.15,
      26.7,
      27.0,
      27.5,
      27.25,
      27.3,
      27.55,
      26.95,
      27.1,
      27.55
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
        "high": 27.1,
        "low": 26.65,
        "close": 27.1,
        "ma5": 27.23,
        "ma10": 27.14
      },
      {
        "open": 27.1,
        "high": 27.55,
        "low": 27.0,
        "close": 27.55,
        "ma5": 27.29,
        "ma10": 27.2
      }
    ],
    "symbol": "1402.TW",
    "maxVol10d": 23484,
    "hasVolumeBurst": false,
    "kd": {
      "k": 55.0,
      "d": 51.1,
      "prevK": 46.0,
      "prevD": 49.1,
      "h8": 27.9,
      "l8": 26.6
    }
  },
  {
    "code": "6442",
    "name": "光聖",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 1630.0,
    "prevClose": 1560.0,
    "open": 1605.0,
    "high": 1635.0,
    "low": 1540.0,
    "volume": 2837,
    "ma5": 1560.0,
    "ma10": 1473.0,
    "ma20": 1361.75,
    "ma60": 1629.75,
    "vMa5": 3049,
    "vMa10": 3158,
    "high5d": 1670.0,
    "high10d": 1670.0,
    "high20d": 1670.0,
    "sparkline": [
      1395.0,
      1370.0,
      1415.0,
      1325.0,
      1425.0,
      1450.0,
      1595.0,
      1565.0,
      1560.0,
      1630.0
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
        "close": 1560.0,
        "ma5": 1519.0,
        "ma10": 1437.0
      },
      {
        "open": 1605.0,
        "high": 1635.0,
        "low": 1540.0,
        "close": 1630.0,
        "ma5": 1560.0,
        "ma10": 1473.0
      }
    ],
    "symbol": "6442.TW",
    "maxVol10d": 5843,
    "hasVolumeBurst": true,
    "kd": {
      "k": 82.5,
      "d": 79.2,
      "prevK": 79.1,
      "prevD": 77.6,
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
    "price": 181.0,
    "prevClose": 187.5,
    "open": 186.0,
    "high": 188.0,
    "low": 178.5,
    "volume": 731,
    "ma5": 182.3,
    "ma10": 178.35,
    "ma20": 172.75,
    "ma60": 190.88,
    "vMa5": 1017,
    "vMa10": 1058,
    "high5d": 197.0,
    "high10d": 200.5,
    "high20d": 200.5,
    "sparkline": [
      163.0,
      170.5,
      169.0,
      185.5,
      184.0,
      173.5,
      184.5,
      185.0,
      187.5,
      181.0
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
        "close": 187.5,
        "ma5": 182.9,
        "ma10": 175.95
      },
      {
        "open": 186.0,
        "high": 188.0,
        "low": 178.5,
        "close": 181.0,
        "ma5": 182.3,
        "ma10": 178.35
      }
    ],
    "symbol": "6693.TWO",
    "maxVol10d": 3052,
    "hasVolumeBurst": true,
    "kd": {
      "k": 61.8,
      "d": 63.9,
      "prevK": 69.0,
      "prevD": 64.9,
      "h8": 200.5,
      "l8": 163.5
    }
  },
  {
    "code": "3526",
    "name": "凡甲",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 285.5,
    "prevClose": 289.5,
    "open": 289.5,
    "high": 289.5,
    "low": 285.5,
    "volume": 187,
    "ma5": 287.6,
    "ma10": 291.75,
    "ma20": 296.8,
    "ma60": 320.92,
    "vMa5": 264,
    "vMa10": 401,
    "high5d": 294.0,
    "high10d": 312.5,
    "high20d": 315.0,
    "sparkline": [
      305.0,
      307.0,
      296.0,
      282.5,
      289.0,
      286.5,
      288.5,
      288.0,
      289.5,
      285.5
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
        "close": 289.5,
        "ma5": 288.3,
        "ma10": 293.6
      },
      {
        "open": 289.5,
        "high": 289.5,
        "low": 285.5,
        "close": 285.5,
        "ma5": 287.6,
        "ma10": 291.75
      }
    ],
    "symbol": "3526.TWO",
    "maxVol10d": 1110,
    "hasVolumeBurst": true,
    "kd": {
      "k": 21.0,
      "d": 28.4,
      "prevK": 25.8,
      "prevD": 32.0,
      "h8": 312.5,
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
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 71.0,
    "prevClose": 70.6,
    "open": 72.2,
    "high": 73.7,
    "low": 65.8,
    "volume": 134198,
    "ma5": 66.06,
    "ma10": 63.92,
    "ma20": 63.35,
    "ma60": 56.05,
    "vMa5": 57697,
    "vMa10": 39212,
    "high5d": 73.7,
    "high10d": 73.7,
    "high20d": 75.3,
    "sparkline": [
      60.5,
      63.5,
      62.2,
      61.7,
      61.0,
      62.8,
      61.7,
      64.2,
      70.6,
      71.0
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
      },
      {
        "open": 72.2,
        "high": 73.7,
        "low": 65.8,
        "close": 71.0,
        "ma5": 66.06,
        "ma10": 63.92
      }
    ],
    "symbol": "2634.TW",
    "maxVol10d": 134198,
    "hasVolumeBurst": true,
    "kd": {
      "k": 76.6,
      "d": 65.1,
      "prevK": 74.7,
      "prevD": 59.3,
      "h8": 70.6,
      "l8": 59.9
    }
  },
  {
    "code": "1504",
    "name": "東元",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 71.9,
    "prevClose": 70.6,
    "open": 71.4,
    "high": 72.7,
    "low": 70.3,
    "volume": 11318,
    "ma5": 69.52,
    "ma10": 67.94,
    "ma20": 66.57,
    "ma60": 69.74,
    "vMa5": 12146,
    "vMa10": 8705,
    "high5d": 73.8,
    "high10d": 73.8,
    "high20d": 73.8,
    "sparkline": [
      65.4,
      66.5,
      66.7,
      66.0,
      67.2,
      67.4,
      67.3,
      70.4,
      70.6,
      71.9
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
        "low": 70.5,
        "close": 70.6,
        "ma5": 68.58,
        "ma10": 67.28
      },
      {
        "open": 71.4,
        "high": 72.7,
        "low": 70.3,
        "close": 71.9,
        "ma5": 69.52,
        "ma10": 67.94
      }
    ],
    "symbol": "1504.TW",
    "maxVol10d": 22704,
    "hasVolumeBurst": true,
    "kd": {
      "k": 78.2,
      "d": 78.2,
      "prevK": 78.6,
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
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 10.34,
    "prevClose": 10.5,
    "open": 10.38,
    "high": 10.4,
    "low": 10.33,
    "volume": 2835,
    "ma5": 10.42,
    "ma10": 10.36,
    "ma20": 10.14,
    "ma60": 10.26,
    "vMa5": 6415,
    "vMa10": 7990,
    "high5d": 10.57,
    "high10d": 10.57,
    "high20d": 10.57,
    "sparkline": [
      10.11,
      10.42,
      10.3,
      10.31,
      10.41,
      10.37,
      10.37,
      10.5,
      10.5,
      10.34
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
        "open": 10.48,
        "high": 10.53,
        "low": 10.47,
        "close": 10.5,
        "ma5": 10.39,
        "ma10": 10.28
      },
      {
        "open": 10.55,
        "high": 10.57,
        "low": 10.5,
        "close": 10.5,
        "ma5": 10.43,
        "ma10": 10.33
      },
      {
        "open": 10.38,
        "high": 10.4,
        "low": 10.33,
        "close": 10.34,
        "ma5": 10.42,
        "ma10": 10.36
      }
    ],
    "symbol": "009819.TW",
    "maxVol10d": 23424,
    "hasVolumeBurst": true,
    "kd": {
      "k": 67.9,
      "d": 78.8,
      "prevK": 87.7,
      "prevD": 84.3,
      "h8": 10.57,
      "l8": 10.25
    }
  },
  {
    "code": "2359",
    "name": "所羅門",
    "categories": [
      "TurnoverRate"
    ],
    "price": 175.0,
    "prevClose": 159.5,
    "open": 166.5,
    "high": 175.0,
    "low": 165.0,
    "volume": 15330,
    "ma5": 155.0,
    "ma10": 149.35,
    "ma20": 142.53,
    "ma60": 139.98,
    "vMa5": 13484,
    "vMa10": 11822,
    "high5d": 175.0,
    "high10d": 175.0,
    "high20d": 175.0,
    "sparkline": [
      132.0,
      145.0,
      144.5,
      143.5,
      153.5,
      140.5,
      143.0,
      157.0,
      159.5,
      175.0
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
        "close": 159.5,
        "ma5": 150.7,
        "ma10": 145.1
      },
      {
        "open": 166.5,
        "high": 175.0,
        "low": 165.0,
        "close": 175.0,
        "ma5": 155.0,
        "ma10": 149.35
      }
    ],
    "symbol": "2359.TW",
    "maxVol10d": 26024,
    "hasVolumeBurst": true,
    "kd": {
      "k": 84.7,
      "d": 75.7,
      "prevK": 77.1,
      "prevD": 71.2,
      "h8": 169.0,
      "l8": 134.0
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
    "price": 9.95,
    "prevClose": 9.91,
    "open": 9.96,
    "high": 9.98,
    "low": 9.93,
    "volume": 8822,
    "ma5": 9.87,
    "ma10": 9.82,
    "ma20": 9.64,
    "ma60": 9.76,
    "vMa5": 6654,
    "vMa10": 7440,
    "high5d": 9.98,
    "high10d": 9.98,
    "high20d": 9.98,
    "sparkline": [
      9.57,
      9.92,
      9.77,
      9.75,
      9.88,
      9.81,
      9.79,
      9.9,
      9.91,
      9.95
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
        "open": 9.89,
        "high": 9.95,
        "low": 9.88,
        "close": 9.9,
        "ma5": 9.83,
        "ma10": 9.74
      },
      {
        "open": 9.95,
        "high": 9.98,
        "low": 9.91,
        "close": 9.91,
        "ma5": 9.86,
        "ma10": 9.78
      },
      {
        "open": 9.96,
        "high": 9.98,
        "low": 9.93,
        "close": 9.95,
        "ma5": 9.87,
        "ma10": 9.82
      }
    ],
    "symbol": "00402A.TW",
    "maxVol10d": 13423,
    "hasVolumeBurst": true,
    "kd": {
      "k": 85.8,
      "d": 82.3,
      "prevK": 84.2,
      "prevD": 80.6,
      "h8": 9.98,
      "l8": 9.71
    }
  },
  {
    "code": "2867",
    "name": "三商壽",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 9.71,
    "prevClose": 9.75,
    "open": 9.7,
    "high": 9.73,
    "low": 9.45,
    "volume": 15216,
    "ma5": 9.6,
    "ma10": 9.68,
    "ma20": 9.57,
    "ma60": 8.77,
    "vMa5": 12991,
    "vMa10": 13609,
    "high5d": 9.8,
    "high10d": 9.89,
    "high20d": 10.05,
    "sparkline": [
      9.76,
      9.77,
      9.77,
      9.81,
      9.7,
      9.48,
      9.43,
      9.62,
      9.75,
      9.71
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
        "high": 9.8,
        "low": 9.5,
        "close": 9.75,
        "ma5": 9.6,
        "ma10": 9.69
      },
      {
        "open": 9.7,
        "high": 9.73,
        "low": 9.45,
        "close": 9.71,
        "ma5": 9.6,
        "ma10": 9.68
      }
    ],
    "symbol": "2867.TW",
    "maxVol10d": 17474,
    "hasVolumeBurst": false,
    "kd": {
      "k": 56.9,
      "d": 53.0,
      "prevK": 51.8,
      "prevD": 51.1,
      "h8": 9.89,
      "l8": 9.34
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
    "price": 525.0,
    "prevClose": 536.0,
    "open": 534.0,
    "high": 542.0,
    "low": 523.0,
    "volume": 532,
    "ma5": 521.4,
    "ma10": 517.05,
    "ma20": 493.45,
    "ma60": 512.36,
    "vMa5": 977,
    "vMa10": 1079,
    "high5d": 573.0,
    "high10d": 573.0,
    "high20d": 573.0,
    "sparkline": [
      498.5,
      501.0,
      537.0,
      527.0,
      500.0,
      492.0,
      502.0,
      552.0,
      536.0,
      525.0
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
        "low": 535.0,
        "close": 536.0,
        "ma5": 516.4,
        "ma10": 511.75
      },
      {
        "open": 534.0,
        "high": 542.0,
        "low": 523.0,
        "close": 525.0,
        "ma5": 521.4,
        "ma10": 517.05
      }
    ],
    "symbol": "3693.TWO",
    "maxVol10d": 2411,
    "hasVolumeBurst": true,
    "kd": {
      "k": 61.3,
      "d": 64.3,
      "prevK": 68.1,
      "prevD": 65.8,
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
    "price": 11.62,
    "prevClose": 11.67,
    "open": 11.7,
    "high": 11.7,
    "low": 11.61,
    "volume": 1848,
    "ma5": 11.68,
    "ma10": 11.69,
    "ma20": 11.4,
    "ma60": 11.31,
    "vMa5": 2278,
    "vMa10": 2759,
    "high5d": 11.8,
    "high10d": 11.84,
    "high20d": 11.84,
    "sparkline": [
      11.51,
      11.79,
      11.69,
      11.69,
      11.81,
      11.78,
      11.67,
      11.66,
      11.67,
      11.62
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
        "low": 11.67,
        "close": 11.67,
        "ma5": 11.72,
        "ma10": 11.66
      },
      {
        "open": 11.7,
        "high": 11.7,
        "low": 11.61,
        "close": 11.62,
        "ma5": 11.68,
        "ma10": 11.69
      }
    ],
    "symbol": "009815.TWO",
    "maxVol10d": 5332,
    "hasVolumeBurst": true,
    "kd": {
      "k": 49.6,
      "d": 68.8,
      "prevK": 72.3,
      "prevD": 78.4,
      "h8": 11.84,
      "l8": 11.64
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
    "price": 42.45,
    "prevClose": 39.65,
    "open": 39.9,
    "high": 43.0,
    "low": 39.5,
    "volume": 11408,
    "ma5": 36.89,
    "ma10": 33.31,
    "ma20": 30.28,
    "ma60": 32.56,
    "vMa5": 7231,
    "vMa10": 5167,
    "high5d": 43.0,
    "high10d": 43.0,
    "high20d": 43.0,
    "sparkline": [
      28.4,
      28.55,
      29.7,
      30.4,
      31.6,
      32.0,
      33.5,
      36.85,
      39.65,
      42.45
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
        "close": 39.65,
        "ma5": 34.72,
        "ma10": 31.9
      },
      {
        "open": 39.9,
        "high": 43.0,
        "low": 39.5,
        "close": 42.45,
        "ma5": 36.89,
        "ma10": 33.31
      }
    ],
    "symbol": "3490.TWO",
    "maxVol10d": 12704,
    "hasVolumeBurst": true,
    "kd": {
      "k": 94.9,
      "d": 91.7,
      "prevK": 94.2,
      "prevD": 90.0,
      "h8": 40.45,
      "l8": 28.05
    }
  },
  {
    "code": "4533",
    "name": "協易機",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 27.15,
    "prevClose": 28.4,
    "open": 28.4,
    "high": 28.9,
    "low": 26.9,
    "volume": 1261,
    "ma5": 27.45,
    "ma10": 26.16,
    "ma20": 25.52,
    "ma60": 28.51,
    "vMa5": 2140,
    "vMa10": 1278,
    "high5d": 29.45,
    "high10d": 29.45,
    "high20d": 29.45,
    "sparkline": [
      24.35,
      25.05,
      24.9,
      24.6,
      25.5,
      26.7,
      26.8,
      28.2,
      28.4,
      27.15
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
        "close": 28.4,
        "ma5": 27.12,
        "ma10": 25.82
      },
      {
        "open": 28.4,
        "high": 28.9,
        "low": 26.9,
        "close": 27.15,
        "ma5": 27.45,
        "ma10": 26.16
      }
    ],
    "symbol": "4533.TWO",
    "maxVol10d": 3325,
    "hasVolumeBurst": true,
    "kd": {
      "k": 71.9,
      "d": 73.6,
      "prevK": 81.1,
      "prevD": 74.4,
      "h8": 29.45,
      "l8": 24.5
    }
  },
  {
    "code": "6716",
    "name": "應廣",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 130.0,
    "prevClose": 123.5,
    "open": 131.0,
    "high": 132.5,
    "low": 126.0,
    "volume": 642,
    "ma5": 116.9,
    "ma10": 103.64,
    "ma20": 91.51,
    "ma60": 95.66,
    "vMa5": 1433,
    "vMa10": 828,
    "high5d": 132.5,
    "high10d": 132.5,
    "high20d": 132.5,
    "sparkline": [
      80.8,
      83.4,
      87.0,
      95.7,
      105.0,
      104.5,
      109.0,
      117.5,
      123.5,
      130.0
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
        "close": 123.5,
        "ma5": 111.9,
        "ma10": 98.52
      },
      {
        "open": 131.0,
        "high": 132.5,
        "low": 126.0,
        "close": 130.0,
        "ma5": 116.9,
        "ma10": 103.64
      }
    ],
    "symbol": "6716.TWO",
    "maxVol10d": 2055,
    "hasVolumeBurst": true,
    "kd": {
      "k": 93.2,
      "d": 88.6,
      "prevK": 92.2,
      "prevD": 86.3,
      "h8": 126.5,
      "l8": 81.3
    }
  },
  {
    "code": "8942",
    "name": "森鉅",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 42.25,
    "prevClose": 43.0,
    "open": 43.2,
    "high": 43.25,
    "low": 42.05,
    "volume": 448,
    "ma5": 41.51,
    "ma10": 39.77,
    "ma20": 38.52,
    "ma60": 40.09,
    "vMa5": 677,
    "vMa10": 402,
    "high5d": 43.45,
    "high10d": 43.45,
    "high20d": 43.45,
    "sparkline": [
      37.2,
      37.6,
      37.9,
      38.6,
      38.85,
      39.45,
      40.05,
      42.8,
      43.0,
      42.25
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
        "close": 43.0,
        "ma5": 40.83,
        "ma10": 39.23
      },
      {
        "open": 43.2,
        "high": 43.25,
        "low": 42.05,
        "close": 42.25,
        "ma5": 41.51,
        "ma10": 39.77
      }
    ],
    "symbol": "8942.TWO",
    "maxVol10d": 1672,
    "hasVolumeBurst": true,
    "kd": {
      "k": 86.0,
      "d": 83.6,
      "prevK": 88.9,
      "prevD": 82.3,
      "h8": 43.45,
      "l8": 37.4
    }
  },
  {
    "code": "6840",
    "name": "東研信超",
    "categories": [
      "MajorBuy",
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 83.0,
    "prevClose": 81.0,
    "open": 81.0,
    "high": 83.1,
    "low": 79.9,
    "volume": 988,
    "ma5": 75.28,
    "ma10": 70.68,
    "ma20": 65.25,
    "ma60": 65.03,
    "vMa5": 935,
    "vMa10": 563,
    "high5d": 83.1,
    "high10d": 83.1,
    "high20d": 83.1,
    "sparkline": [
      62.4,
      68.6,
      66.8,
      66.6,
      66.0,
      68.0,
      68.8,
      75.6,
      81.0,
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
        "close": 81.0,
        "ma5": 71.88,
        "ma10": 68.48
      },
      {
        "open": 81.0,
        "high": 83.1,
        "low": 79.9,
        "close": 83.0,
        "ma5": 75.28,
        "ma10": 70.68
      }
    ],
    "symbol": "6840.TWO",
    "maxVol10d": 2287,
    "hasVolumeBurst": true,
    "kd": {
      "k": 93.2,
      "d": 88.0,
      "prevK": 90.1,
      "prevD": 85.5,
      "h8": 83.1,
      "l8": 63.2
    }
  },
  {
    "code": "6829",
    "name": "千附精密",
    "categories": [
      "MajorBuy",
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 238.5,
    "prevClose": 244.0,
    "open": 240.0,
    "high": 244.5,
    "low": 232.0,
    "volume": 2336,
    "ma5": 224.3,
    "ma10": 207.85,
    "ma20": 196.65,
    "ma60": 209.98,
    "vMa5": 1603,
    "vMa10": 1104,
    "high5d": 244.5,
    "high10d": 244.5,
    "high20d": 244.5,
    "sparkline": [
      181.5,
      188.0,
      196.0,
      191.5,
      200.0,
      206.0,
      211.0,
      222.0,
      244.0,
      238.5
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
      },
      {
        "open": 240.0,
        "high": 244.5,
        "low": 232.0,
        "close": 238.5,
        "ma5": 224.3,
        "ma10": 207.85
      }
    ],
    "symbol": "6829.TWO",
    "maxVol10d": 2720,
    "hasVolumeBurst": true,
    "kd": {
      "k": 91.7,
      "d": 85.7,
      "prevK": 92.6,
      "prevD": 82.7,
      "h8": 244.0,
      "l8": 184.5
    }
  },
  {
    "code": "6419",
    "name": "京晨科",
    "categories": [
      "TurnoverRate",
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 180.0,
    "prevClose": 168.0,
    "open": 183.0,
    "high": 183.0,
    "low": 168.5,
    "volume": 1395,
    "ma5": 164.0,
    "ma10": 152.35,
    "ma20": 141.0,
    "ma60": 142.7,
    "vMa5": 800,
    "vMa10": 567,
    "high5d": 183.0,
    "high10d": 183.0,
    "high20d": 183.0,
    "sparkline": [
      133.0,
      136.0,
      149.5,
      140.0,
      145.0,
      151.5,
      153.0,
      167.5,
      168.0,
      180.0
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
        "close": 168.0,
        "ma5": 157.0,
        "ma10": 147.15
      },
      {
        "open": 183.0,
        "high": 183.0,
        "low": 168.5,
        "close": 180.0,
        "ma5": 164.0,
        "ma10": 152.35
      }
    ],
    "symbol": "6419.TWO",
    "maxVol10d": 1395,
    "hasVolumeBurst": true,
    "kd": {
      "k": 92.6,
      "d": 86.9,
      "prevK": 92.0,
      "prevD": 84.1,
      "h8": 169.5,
      "l8": 135.5
    }
  },
  {
    "code": "9904",
    "name": "寶成",
    "categories": [
      "SitcaBuy",
      "MajorBuy",
      "SitcaBuy3D",
      "SitcaBuy5D",
      "MajorBuy1D"
    ],
    "price": 24.8,
    "prevClose": 25.25,
    "open": 25.25,
    "high": 25.3,
    "low": 24.65,
    "volume": 22034,
    "ma5": 24.39,
    "ma10": 24.09,
    "ma20": 24.14,
    "ma60": 25.0,
    "vMa5": 22669,
    "vMa10": 22247,
    "maxVol10d": 54971,
    "hasVolumeBurst": true,
    "high5d": 25.35,
    "high10d": 25.35,
    "high20d": 25.35,
    "sparkline": [
      23.75,
      23.45,
      23.75,
      23.9,
      24.1,
      24.05,
      23.95,
      23.9,
      25.25,
      24.8
    ],
    "k5d": [
      {
        "open": 24.1,
        "high": 24.2,
        "low": 24.0,
        "close": 24.05,
        "ma5": 23.85,
        "ma10": 23.94
      },
      {
        "open": 24.05,
        "high": 24.15,
        "low": 23.9,
        "close": 23.95,
        "ma5": 23.95,
        "ma10": 23.92
      },
      {
        "open": 24.0,
        "high": 24.0,
        "low": 23.75,
        "close": 23.9,
        "ma5": 23.98,
        "ma10": 23.91
      },
      {
        "open": 24.45,
        "high": 25.35,
        "low": 24.45,
        "close": 25.25,
        "ma5": 24.25,
        "ma10": 24.04
      },
      {
        "open": 25.25,
        "high": 25.3,
        "low": 24.65,
        "close": 24.8,
        "ma5": 24.39,
        "ma10": 24.09
      }
    ],
    "symbol": "9904.TW",
    "kd": {
      "k": 70.4,
      "d": 60.4,
      "prevK": 69.0,
      "prevD": 55.4,
      "h8": 25.35,
      "l8": 23.3
    }
  },
  {
    "code": "00953B",
    "name": "群益優選非投等債",
    "categories": [
      "Top100"
    ],
    "price": 9.67,
    "prevClose": 9.72,
    "open": 9.72,
    "high": 9.72,
    "low": 9.66,
    "volume": 65232,
    "ma5": 9.74,
    "ma10": 9.75,
    "ma20": 9.78,
    "ma60": 9.69,
    "vMa5": 31319,
    "vMa10": 29145,
    "maxVol10d": 65232,
    "hasVolumeBurst": true,
    "high5d": 9.78,
    "high10d": 9.8,
    "high20d": 9.85,
    "sparkline": [
      9.77,
      9.77,
      9.75,
      9.75,
      9.77,
      9.77,
      9.76,
      9.76,
      9.72,
      9.67
    ],
    "k5d": [
      {
        "open": 9.77,
        "high": 9.77,
        "low": 9.76,
        "close": 9.77,
        "ma5": 9.76,
        "ma10": 9.78
      },
      {
        "open": 9.77,
        "high": 9.78,
        "low": 9.76,
        "close": 9.76,
        "ma5": 9.76,
        "ma10": 9.78
      },
      {
        "open": 9.76,
        "high": 9.77,
        "low": 9.75,
        "close": 9.76,
        "ma5": 9.76,
        "ma10": 9.78
      },
      {
        "open": 9.76,
        "high": 9.77,
        "low": 9.71,
        "close": 9.72,
        "ma5": 9.76,
        "ma10": 9.77
      },
      {
        "open": 9.72,
        "high": 9.72,
        "low": 9.66,
        "close": 9.67,
        "ma5": 9.74,
        "ma10": 9.75
      }
    ],
    "symbol": "00953B.TW",
    "kd": {
      "k": 14.7,
      "d": 20.2,
      "prevK": 18.4,
      "prevD": 23.0,
      "h8": 9.8,
      "l8": 9.71
    }
  },
  {
    "code": "00984D",
    "name": "主動聯博全球非投",
    "categories": [
      "TurnoverRate"
    ],
    "price": 10.08,
    "prevClose": 10.12,
    "open": 10.13,
    "high": 10.13,
    "low": 10.07,
    "volume": 36532,
    "ma5": 10.13,
    "ma10": 10.14,
    "ma20": 10.17,
    "ma60": 10.13,
    "vMa5": 26387,
    "vMa10": 21059,
    "maxVol10d": 45453,
    "hasVolumeBurst": true,
    "high5d": 10.16,
    "high10d": 10.19,
    "high20d": 10.27,
    "sparkline": [
      10.16,
      10.16,
      10.16,
      10.15,
      10.16,
      10.16,
      10.14,
      10.15,
      10.12,
      10.08
    ],
    "k5d": [
      {
        "open": 10.15,
        "high": 10.16,
        "low": 10.14,
        "close": 10.16,
        "ma5": 10.16,
        "ma10": 10.17
      },
      {
        "open": 10.16,
        "high": 10.16,
        "low": 10.14,
        "close": 10.14,
        "ma5": 10.15,
        "ma10": 10.16
      },
      {
        "open": 10.15,
        "high": 10.15,
        "low": 10.14,
        "close": 10.15,
        "ma5": 10.15,
        "ma10": 10.15
      },
      {
        "open": 10.15,
        "high": 10.15,
        "low": 10.11,
        "close": 10.12,
        "ma5": 10.15,
        "ma10": 10.15
      },
      {
        "open": 10.13,
        "high": 10.13,
        "low": 10.07,
        "close": 10.08,
        "ma5": 10.13,
        "ma10": 10.14
      }
    ],
    "symbol": "00984D.TW",
    "kd": {
      "k": 22.0,
      "d": 29.4,
      "prevK": 28.8,
      "prevD": 33.1,
      "h8": 10.19,
      "l8": 10.11
    }
  },
  {
    "code": "00988B",
    "name": "玉山嚴選非投債",
    "categories": [
      "Top100",
      "TurnoverRate"
    ],
    "price": 19.86,
    "prevClose": 19.94,
    "open": 19.95,
    "high": 19.95,
    "low": 19.85,
    "volume": 7041,
    "ma5": 19.94,
    "ma10": 19.97,
    "ma20": 19.93,
    "ma60": 19.88,
    "vMa5": 5108,
    "vMa10": 3931,
    "maxVol10d": 7146,
    "hasVolumeBurst": true,
    "high5d": 20.0,
    "high10d": 20.05,
    "high20d": 20.05,
    "sparkline": [
      19.98,
      20.02,
      20.0,
      19.98,
      20.0,
      19.98,
      19.97,
      19.96,
      19.94,
      19.86
    ],
    "k5d": [
      {
        "open": 20.0,
        "high": 20.0,
        "low": 19.96,
        "close": 19.98,
        "ma5": 20.0,
        "ma10": 19.95
      },
      {
        "open": 19.98,
        "high": 19.99,
        "low": 19.96,
        "close": 19.97,
        "ma5": 19.99,
        "ma10": 19.96
      },
      {
        "open": 19.97,
        "high": 19.99,
        "low": 19.96,
        "close": 19.96,
        "ma5": 19.98,
        "ma10": 19.97
      },
      {
        "open": 20.0,
        "high": 20.0,
        "low": 19.93,
        "close": 19.94,
        "ma5": 19.97,
        "ma10": 19.97
      },
      {
        "open": 19.95,
        "high": 19.95,
        "low": 19.85,
        "close": 19.86,
        "ma5": 19.94,
        "ma10": 19.97
      }
    ],
    "symbol": "00988B.TWO",
    "kd": {
      "k": 35.5,
      "d": 53.1,
      "prevK": 50.8,
      "prevD": 62.0,
      "h8": 20.05,
      "l8": 19.93
    }
  },
  {
    "code": "8383",
    "name": "千附",
    "categories": [
      "TurnoverRate"
    ],
    "price": 71.1,
    "prevClose": 75.1,
    "open": 75.5,
    "high": 75.8,
    "low": 71.0,
    "volume": 4097,
    "ma5": 71.06,
    "ma10": 70.78,
    "ma20": 74.17,
    "ma60": 68.11,
    "vMa5": 3355,
    "vMa10": 2960,
    "maxVol10d": 5886,
    "hasVolumeBurst": true,
    "high5d": 77.0,
    "high10d": 77.0,
    "high20d": 93.8,
    "sparkline": [
      69.9,
      71.0,
      71.7,
      70.0,
      69.9,
      68.6,
      69.7,
      70.8,
      75.1,
      71.1
    ],
    "k5d": [
      {
        "open": 68.4,
        "high": 69.6,
        "low": 65.3,
        "close": 68.6,
        "ma5": 70.24,
        "ma10": 68.91
      },
      {
        "open": 68.5,
        "high": 70.5,
        "low": 67.2,
        "close": 69.7,
        "ma5": 69.98,
        "ma10": 68.99
      },
      {
        "open": 70.2,
        "high": 72.4,
        "low": 70.2,
        "close": 70.8,
        "ma5": 69.8,
        "ma10": 69.84
      },
      {
        "open": 71.3,
        "high": 77.0,
        "low": 70.3,
        "close": 75.1,
        "ma5": 70.82,
        "ma10": 70.5
      },
      {
        "open": 75.5,
        "high": 75.8,
        "low": 71.0,
        "close": 71.1,
        "ma5": 71.06,
        "ma10": 70.78
      }
    ],
    "symbol": "8383.TWO",
    "kd": {
      "k": 61.7,
      "d": 56.4,
      "prevK": 67.8,
      "prevD": 53.7,
      "h8": 77.0,
      "l8": 65.3
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
    "price": 178.5,
    "prevClose": 172.0,
    "open": 173.0,
    "high": 186.0,
    "low": 171.0,
    "volume": 7573,
    "ma5": 177.0,
    "ma10": 176.65,
    "ma20": 169.68,
    "ma60": 166.44,
    "vMa5": 3262,
    "vMa10": 4047,
    "maxVol10d": 19320,
    "hasVolumeBurst": true,
    "high5d": 191.5,
    "high10d": 196.5,
    "high20d": 196.5,
    "sparkline": [
      179.5,
      174.5,
      176.0,
      173.5,
      178.0,
      174.5,
      179.0,
      181.0,
      172.0,
      178.5
    ],
    "k5d": [
      {
        "open": 178.5,
        "high": 178.5,
        "low": 171.0,
        "close": 174.5,
        "ma5": 175.3,
        "ma10": 173.8
      },
      {
        "open": 174.5,
        "high": 179.5,
        "low": 172.0,
        "close": 179.0,
        "ma5": 176.2,
        "ma10": 174.35
      },
      {
        "open": 181.0,
        "high": 181.5,
        "low": 177.5,
        "close": 181.0,
        "ma5": 177.2,
        "ma10": 176.8
      },
      {
        "open": 185.5,
        "high": 191.5,
        "low": 170.5,
        "close": 172.0,
        "ma5": 176.9,
        "ma10": 176.8
      },
      {
        "open": 173.0,
        "high": 186.0,
        "low": 171.0,
        "close": 178.5,
        "ma5": 177.0,
        "ma10": 176.65
      }
    ],
    "symbol": "3362.TWO",
    "kd": {
      "k": 35.6,
      "d": 42.0,
      "prevK": 34.3,
      "prevD": 45.2,
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
    "price": 26.23,
    "prevClose": 26.43,
    "open": 26.32,
    "high": 26.32,
    "low": 26.2,
    "volume": 5274,
    "ma5": 26.44,
    "ma10": 26.58,
    "ma20": 26.75,
    "ma60": 26.89,
    "vMa5": 4298,
    "vMa10": 5032,
    "maxVol10d": 6961,
    "hasVolumeBurst": false,
    "high5d": 26.59,
    "high10d": 26.9,
    "high20d": 27.24,
    "sparkline": [
      26.61,
      26.86,
      26.85,
      26.58,
      26.65,
      26.49,
      26.54,
      26.52,
      26.43,
      26.23
    ],
    "k5d": [
      {
        "open": 26.5,
        "high": 26.5,
        "low": 26.44,
        "close": 26.49,
        "ma5": 26.69,
        "ma10": 26.75
      },
      {
        "open": 26.56,
        "high": 26.56,
        "low": 26.51,
        "close": 26.54,
        "ma5": 26.62,
        "ma10": 26.68
      },
      {
        "open": 26.52,
        "high": 26.53,
        "low": 26.49,
        "close": 26.52,
        "ma5": 26.56,
        "ma10": 26.66
      },
      {
        "open": 26.59,
        "high": 26.59,
        "low": 26.41,
        "close": 26.43,
        "ma5": 26.53,
        "ma10": 26.62
      },
      {
        "open": 26.32,
        "high": 26.32,
        "low": 26.2,
        "close": 26.23,
        "ma5": 26.44,
        "ma10": 26.58
      }
    ],
    "symbol": "00795B.TWO",
    "kd": {
      "k": 11.3,
      "d": 17.8,
      "prevK": 14.8,
      "prevD": 21.1,
      "h8": 26.9,
      "l8": 26.41
    }
  },
  {
    "code": "00981D",
    "name": "主動中信非投等債",
    "categories": [
      "Top100"
    ],
    "price": 10.45,
    "prevClose": 10.48,
    "open": 10.47,
    "high": 10.47,
    "low": 10.44,
    "volume": 7517,
    "ma5": 10.49,
    "ma10": 10.49,
    "ma20": 10.48,
    "ma60": 10.41,
    "vMa5": 3907,
    "vMa10": 4323,
    "maxVol10d": 9696,
    "hasVolumeBurst": true,
    "high5d": 10.51,
    "high10d": 10.54,
    "high20d": 10.54,
    "sparkline": [
      10.51,
      10.5,
      10.49,
      10.47,
      10.49,
      10.5,
      10.5,
      10.5,
      10.48,
      10.45
    ],
    "k5d": [
      {
        "open": 10.49,
        "high": 10.51,
        "low": 10.48,
        "close": 10.5,
        "ma5": 10.49,
        "ma10": 10.49
      },
      {
        "open": 10.51,
        "high": 10.51,
        "low": 10.49,
        "close": 10.5,
        "ma5": 10.49,
        "ma10": 10.49
      },
      {
        "open": 10.51,
        "high": 10.51,
        "low": 10.49,
        "close": 10.5,
        "ma5": 10.49,
        "ma10": 10.49
      },
      {
        "open": 10.51,
        "high": 10.51,
        "low": 10.47,
        "close": 10.48,
        "ma5": 10.49,
        "ma10": 10.49
      },
      {
        "open": 10.47,
        "high": 10.47,
        "low": 10.44,
        "close": 10.45,
        "ma5": 10.49,
        "ma10": 10.49
      }
    ],
    "symbol": "00981D.TWO",
    "kd": {
      "k": 34.5,
      "d": 47.3,
      "prevK": 46.7,
      "prevD": 53.7,
      "h8": 10.54,
      "l8": 10.46
    }
  },
  {
    "code": "00720B",
    "name": "元大投資級公司債",
    "categories": [
      "Top100"
    ],
    "price": 31.88,
    "prevClose": 32.13,
    "open": 32.01,
    "high": 32.01,
    "low": 31.85,
    "volume": 7577,
    "ma5": 32.12,
    "ma10": 32.29,
    "ma20": 32.4,
    "ma60": 33.01,
    "vMa5": 5310,
    "vMa10": 4770,
    "maxVol10d": 7577,
    "hasVolumeBurst": false,
    "high5d": 32.33,
    "high10d": 32.66,
    "high20d": 32.82,
    "sparkline": [
      32.35,
      32.61,
      32.6,
      32.36,
      32.43,
      32.19,
      32.2,
      32.2,
      32.13,
      31.88
    ],
    "k5d": [
      {
        "open": 32.21,
        "high": 32.24,
        "low": 32.15,
        "close": 32.19,
        "ma5": 32.44,
        "ma10": 32.4
      },
      {
        "open": 32.24,
        "high": 32.24,
        "low": 32.18,
        "close": 32.2,
        "ma5": 32.36,
        "ma10": 32.36
      },
      {
        "open": 32.2,
        "high": 32.2,
        "low": 32.17,
        "close": 32.2,
        "ma5": 32.28,
        "ma10": 32.36
      },
      {
        "open": 32.33,
        "high": 32.33,
        "low": 32.13,
        "close": 32.13,
        "ma5": 32.23,
        "ma10": 32.33
      },
      {
        "open": 32.01,
        "high": 32.01,
        "low": 31.85,
        "close": 31.88,
        "ma5": 32.12,
        "ma10": 32.29
      }
    ],
    "symbol": "00720B.TWO",
    "kd": {
      "k": 12.3,
      "d": 23.8,
      "prevK": 16.6,
      "prevD": 29.5,
      "h8": 32.66,
      "l8": 32.13
    }
  },
  {
    "code": "3532",
    "name": "台勝科",
    "categories": [
      "SitcaBuy",
      "ValueTop",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 371.5,
    "prevClose": 356.0,
    "open": 346.0,
    "high": 387.5,
    "low": 342.0,
    "volume": 15686,
    "ma5": 333.3,
    "ma10": 318.6,
    "ma20": 336.6,
    "ma60": 356.93,
    "vMa5": 9943,
    "vMa10": 6068,
    "maxVol10d": 15686,
    "hasVolumeBurst": true,
    "high5d": 387.5,
    "high10d": 387.5,
    "high20d": 499.0,
    "sparkline": [
      291.5,
      316.5,
      316.0,
      312.5,
      283.0,
      284.0,
      312.0,
      343.0,
      356.0,
      371.5
    ],
    "k5d": [
      {
        "open": 282.5,
        "high": 290.5,
        "low": 265.5,
        "close": 284.0,
        "ma5": 302.4,
        "ma10": 292.55
      },
      {
        "open": 289.0,
        "high": 312.0,
        "low": 286.5,
        "close": 312.0,
        "ma5": 301.5,
        "ma10": 292.95
      },
      {
        "open": 334.5,
        "high": 343.0,
        "low": 320.5,
        "close": 343.0,
        "ma5": 306.9,
        "ma10": 299.5
      },
      {
        "open": 343.0,
        "high": 358.0,
        "low": 330.0,
        "close": 356.0,
        "ma5": 315.6,
        "ma10": 307.95
      },
      {
        "open": 346.0,
        "high": 387.5,
        "low": 342.0,
        "close": 371.5,
        "ma5": 333.3,
        "ma10": 318.6
      }
    ],
    "symbol": "3532.TW",
    "kd": {
      "k": 82.2,
      "d": 67.6,
      "prevK": 79.9,
      "prevD": 60.3,
      "h8": 358.0,
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
    "price": 1070.0,
    "prevClose": 1085.0,
    "open": 1085.0,
    "high": 1130.0,
    "low": 1060.0,
    "volume": 474,
    "ma5": 1019.0,
    "ma10": 976.1,
    "ma20": 928.0,
    "ma60": 1053.77,
    "vMa5": 422,
    "vMa10": 269,
    "maxVol10d": 645,
    "hasVolumeBurst": true,
    "high5d": 1130.0,
    "high10d": 1130.0,
    "high20d": 1130.0,
    "sparkline": [
      885.0,
      910.0,
      948.0,
      918.0,
      1005.0,
      945.0,
      1000.0,
      995.0,
      1085.0,
      1070.0
    ],
    "k5d": [
      {
        "open": 1055.0,
        "high": 1105.0,
        "low": 941.0,
        "close": 945.0,
        "ma5": 945.2,
        "ma10": 881.8
      },
      {
        "open": 938.0,
        "high": 1025.0,
        "low": 938.0,
        "close": 1000.0,
        "ma5": 963.2,
        "ma10": 902.8
      },
      {
        "open": 1020.0,
        "high": 1035.0,
        "low": 995.0,
        "close": 995.0,
        "ma5": 972.6,
        "ma10": 926.7
      },
      {
        "open": 1005.0,
        "high": 1090.0,
        "low": 995.0,
        "close": 1085.0,
        "ma5": 1006.0,
        "ma10": 952.9
      },
      {
        "open": 1085.0,
        "high": 1130.0,
        "low": 1060.0,
        "close": 1070.0,
        "ma5": 1019.0,
        "ma10": 976.1
      }
    ],
    "symbol": "6640.TWO",
    "kd": {
      "k": 76.3,
      "d": 72.3,
      "prevK": 76.1,
      "prevD": 70.4,
      "h8": 1105.0,
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
    "price": 1725.0,
    "prevClose": 1720.0,
    "open": 1680.0,
    "high": 1730.0,
    "low": 1630.0,
    "volume": 197,
    "ma5": 1737.0,
    "ma10": 1716.5,
    "ma20": 1644.75,
    "ma60": 1792.83,
    "vMa5": 238,
    "vMa10": 187,
    "maxVol10d": 357,
    "hasVolumeBurst": true,
    "high5d": 1880.0,
    "high10d": 1880.0,
    "high20d": 2010.0,
    "sparkline": [
      1610.0,
      1750.0,
      1755.0,
      1710.0,
      1655.0,
      1605.0,
      1760.0,
      1875.0,
      1720.0,
      1725.0
    ],
    "k5d": [
      {
        "open": 1580.0,
        "high": 1645.0,
        "low": 1550.0,
        "close": 1605.0,
        "ma5": 1695.0,
        "ma10": 1540.0
      },
      {
        "open": 1625.0,
        "high": 1760.0,
        "low": 1625.0,
        "close": 1760.0,
        "ma5": 1697.0,
        "ma10": 1587.0
      },
      {
        "open": 1880.0,
        "high": 1880.0,
        "low": 1785.0,
        "close": 1875.0,
        "ma5": 1721.0,
        "ma10": 1652.5
      },
      {
        "open": 1875.0,
        "high": 1875.0,
        "low": 1720.0,
        "close": 1720.0,
        "ma5": 1723.0,
        "ma10": 1690.5
      },
      {
        "open": 1680.0,
        "high": 1730.0,
        "low": 1630.0,
        "close": 1725.0,
        "ma5": 1737.0,
        "ma10": 1716.5
      }
    ],
    "symbol": "7828.TWO",
    "kd": {
      "k": 67.6,
      "d": 72.3,
      "prevK": 74.9,
      "prevD": 74.7,
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
    "price": 30.2,
    "prevClose": 29.8,
    "open": 30.1,
    "high": 30.85,
    "low": 29.8,
    "volume": 20229,
    "ma5": 28.27,
    "ma10": 27.48,
    "ma20": 26.97,
    "ma60": 26.16,
    "vMa5": 14340,
    "vMa10": 9901,
    "maxVol10d": 37020,
    "hasVolumeBurst": true,
    "high5d": 30.85,
    "high10d": 30.85,
    "high20d": 30.85,
    "sparkline": [
      26.7,
      26.4,
      26.35,
      26.75,
      27.25,
      27.05,
      27.2,
      27.1,
      29.8,
      30.2
    ],
    "k5d": [
      {
        "open": 27.0,
        "high": 27.15,
        "low": 26.75,
        "close": 27.05,
        "ma5": 26.76,
        "ma10": 26.73
      },
      {
        "open": 27.05,
        "high": 27.35,
        "low": 27.0,
        "close": 27.2,
        "ma5": 26.92,
        "ma10": 26.84
      },
      {
        "open": 27.4,
        "high": 27.4,
        "low": 26.8,
        "close": 27.1,
        "ma5": 27.07,
        "ma10": 26.88
      },
      {
        "open": 28.1,
        "high": 29.8,
        "low": 28.05,
        "close": 29.8,
        "ma5": 27.68,
        "ma10": 27.16
      },
      {
        "open": 30.1,
        "high": 30.85,
        "low": 29.8,
        "close": 30.2,
        "ma5": 28.27,
        "ma10": 27.48
      }
    ],
    "symbol": "9945.TW",
    "kd": {
      "k": 83.0,
      "d": 75.6,
      "prevK": 81.5,
      "prevD": 72.0,
      "h8": 29.8,
      "l8": 26.2
    }
  },
  {
    "code": "1102",
    "name": "亞泥",
    "categories": [
      "MajorBuy",
      "SitcaBuy",
      "SitcaBuy3D",
      "MajorBuy1D"
    ],
    "price": 33.45,
    "prevClose": 33.45,
    "open": 33.3,
    "high": 33.8,
    "low": 33.2,
    "volume": 8430,
    "ma5": 32.68,
    "ma10": 32.72,
    "ma20": 32.8,
    "ma60": 34.14,
    "vMa5": 13835,
    "vMa10": 10275,
    "maxVol10d": 26134,
    "hasVolumeBurst": true,
    "high5d": 33.8,
    "high10d": 33.8,
    "high20d": 33.8,
    "sparkline": [
      32.4,
      32.6,
      32.95,
      32.85,
      32.95,
      32.45,
      32.35,
      31.7,
      33.45,
      33.45
    ],
    "k5d": [
      {
        "open": 32.85,
        "high": 33.0,
        "low": 32.35,
        "close": 32.45,
        "ma5": 32.76,
        "ma10": 32.79
      },
      {
        "open": 32.6,
        "high": 32.65,
        "low": 32.3,
        "close": 32.35,
        "ma5": 32.71,
        "ma10": 32.75
      },
      {
        "open": 32.55,
        "high": 32.55,
        "low": 31.6,
        "close": 31.7,
        "ma5": 32.46,
        "ma10": 32.6
      },
      {
        "open": 32.5,
        "high": 33.45,
        "low": 32.45,
        "close": 33.45,
        "ma5": 32.58,
        "ma10": 32.64
      },
      {
        "open": 33.3,
        "high": 33.8,
        "low": 33.2,
        "close": 33.45,
        "ma5": 32.68,
        "ma10": 32.72
      }
    ],
    "symbol": "1102.TW",
    "kd": {
      "k": 59.5,
      "d": 44.1,
      "prevK": 47.3,
      "prevD": 36.3,
      "h8": 33.45,
      "l8": 31.6
    }
  },
  {
    "code": "9105",
    "name": "泰金寶-DR",
    "categories": [
      "MajorBuy",
      "Top100",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 8.82,
    "prevClose": 8.61,
    "open": 8.74,
    "high": 9.09,
    "low": 8.42,
    "volume": 37897,
    "ma5": 8.47,
    "ma10": 8.34,
    "ma20": 8.26,
    "ma60": 9.0,
    "vMa5": 23089,
    "vMa10": 18278,
    "maxVol10d": 37897,
    "hasVolumeBurst": true,
    "high5d": 9.09,
    "high10d": 9.09,
    "high20d": 9.09,
    "sparkline": [
      8.3,
      8.21,
      8.18,
      8.08,
      8.28,
      8.27,
      8.33,
      8.3,
      8.61,
      8.82
    ],
    "k5d": [
      {
        "open": 8.55,
        "high": 8.58,
        "low": 8.25,
        "close": 8.27,
        "ma5": 8.2,
        "ma10": 8.05
      },
      {
        "open": 8.28,
        "high": 8.46,
        "low": 8.28,
        "close": 8.33,
        "ma5": 8.23,
        "ma10": 8.15
      },
      {
        "open": 8.45,
        "high": 8.51,
        "low": 8.29,
        "close": 8.3,
        "ma5": 8.25,
        "ma10": 8.23
      },
      {
        "open": 8.32,
        "high": 8.7,
        "low": 8.32,
        "close": 8.61,
        "ma5": 8.36,
        "ma10": 8.28
      },
      {
        "open": 8.74,
        "high": 9.09,
        "low": 8.42,
        "close": 8.82,
        "ma5": 8.47,
        "ma10": 8.34
      }
    ],
    "symbol": "9105.TW",
    "kd": {
      "k": 72.9,
      "d": 69.8,
      "prevK": 72.7,
      "prevD": 68.2,
      "h8": 8.7,
      "l8": 8.08
    }
  },
  {
    "code": "2323",
    "name": "中環",
    "categories": [
      "MajorBuy",
      "Top100",
      "MajorBuy1D"
    ],
    "price": 11.7,
    "prevClose": 11.3,
    "open": 10.95,
    "high": 11.95,
    "low": 10.6,
    "volume": 38318,
    "ma5": 10.76,
    "ma10": 10.53,
    "ma20": 10.33,
    "ma60": 10.88,
    "vMa5": 13287,
    "vMa10": 9022,
    "maxVol10d": 38318,
    "hasVolumeBurst": true,
    "high5d": 11.95,
    "high10d": 11.95,
    "high20d": 11.95,
    "sparkline": [
      10.3,
      10.3,
      10.35,
      10.25,
      10.25,
      10.2,
      10.3,
      10.3,
      11.3,
      11.7
    ],
    "k5d": [
      {
        "open": 10.25,
        "high": 10.3,
        "low": 10.1,
        "close": 10.2,
        "ma5": 10.27,
        "ma10": 10.06
      },
      {
        "open": 10.2,
        "high": 10.35,
        "low": 10.15,
        "close": 10.3,
        "ma5": 10.27,
        "ma10": 10.14
      },
      {
        "open": 10.35,
        "high": 10.45,
        "low": 10.25,
        "close": 10.3,
        "ma5": 10.26,
        "ma10": 10.23
      },
      {
        "open": 11.0,
        "high": 11.3,
        "low": 10.95,
        "close": 11.3,
        "ma5": 10.47,
        "ma10": 10.37
      },
      {
        "open": 10.95,
        "high": 11.95,
        "low": 10.6,
        "close": 11.7,
        "ma5": 10.76,
        "ma10": 10.53
      }
    ],
    "symbol": "2323.TW",
    "kd": {
      "k": 84.3,
      "d": 78.2,
      "prevK": 83.0,
      "prevD": 75.1,
      "h8": 11.3,
      "l8": 10.05
    }
  },
  {
    "code": "2392",
    "name": "正崴",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 43.3,
    "prevClose": 43.05,
    "open": 43.25,
    "high": 44.75,
    "low": 42.25,
    "volume": 20611,
    "ma5": 40.98,
    "ma10": 38.9,
    "ma20": 36.86,
    "ma60": 38.05,
    "vMa5": 9332,
    "vMa10": 5438,
    "maxVol10d": 20611,
    "hasVolumeBurst": true,
    "high5d": 44.75,
    "high10d": 44.75,
    "high20d": 44.75,
    "sparkline": [
      34.85,
      37.0,
      37.4,
      36.95,
      37.95,
      39.6,
      39.8,
      39.15,
      43.05,
      43.3
    ],
    "k5d": [
      {
        "open": 38.5,
        "high": 40.0,
        "low": 38.05,
        "close": 39.6,
        "ma5": 37.78,
        "ma10": 35.82
      },
      {
        "open": 39.8,
        "high": 40.95,
        "low": 39.7,
        "close": 39.8,
        "ma5": 38.34,
        "ma10": 36.44
      },
      {
        "open": 40.5,
        "high": 40.55,
        "low": 38.8,
        "close": 39.15,
        "ma5": 38.69,
        "ma10": 37.08
      },
      {
        "open": 42.8,
        "high": 43.05,
        "low": 42.15,
        "close": 43.05,
        "ma5": 39.91,
        "ma10": 38.02
      },
      {
        "open": 43.25,
        "high": 44.75,
        "low": 42.25,
        "close": 43.3,
        "ma5": 40.98,
        "ma10": 38.9
      }
    ],
    "symbol": "2392.TW",
    "kd": {
      "k": 86.8,
      "d": 82.8,
      "prevK": 87.9,
      "prevD": 80.9,
      "h8": 43.05,
      "l8": 35.35
    }
  },
  {
    "code": "1319",
    "name": "東陽",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 83.6,
    "prevClose": 83.9,
    "open": 82.7,
    "high": 84.2,
    "low": 82.0,
    "volume": 3524,
    "ma5": 80.94,
    "ma10": 78.04,
    "ma20": 74.99,
    "ma60": 82.02,
    "vMa5": 4925,
    "vMa10": 3749,
    "maxVol10d": 11771,
    "hasVolumeBurst": true,
    "high5d": 86.0,
    "high10d": 86.0,
    "high20d": 86.0,
    "sparkline": [
      72.0,
      72.9,
      76.5,
      76.7,
      77.6,
      78.8,
      79.2,
      79.2,
      83.9,
      83.6
    ],
    "k5d": [
      {
        "open": 76.8,
        "high": 79.0,
        "low": 76.8,
        "close": 78.8,
        "ma5": 76.5,
        "ma10": 73.9
      },
      {
        "open": 79.0,
        "high": 79.4,
        "low": 78.1,
        "close": 79.2,
        "ma5": 77.76,
        "ma10": 74.77
      },
      {
        "open": 79.4,
        "high": 79.5,
        "low": 78.1,
        "close": 79.2,
        "ma5": 78.3,
        "ma10": 75.55
      },
      {
        "open": 85.5,
        "high": 86.0,
        "low": 82.6,
        "close": 83.9,
        "ma5": 79.74,
        "ma10": 76.82
      },
      {
        "open": 82.7,
        "high": 84.2,
        "low": 82.0,
        "close": 83.6,
        "ma5": 80.94,
        "ma10": 78.04
      }
    ],
    "symbol": "1319.TW",
    "kd": {
      "k": 87.9,
      "d": 86.9,
      "prevK": 90.6,
      "prevD": 86.4,
      "h8": 86.0,
      "l8": 72.3
    }
  },
  {
    "code": "1336",
    "name": "台翰",
    "categories": [
      "MajorBuy",
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 18.0,
    "prevClose": 17.65,
    "open": 18.35,
    "high": 18.6,
    "low": 17.2,
    "volume": 3018,
    "ma5": 16.82,
    "ma10": 15.89,
    "ma20": 15.66,
    "ma60": 14.93,
    "vMa5": 1698,
    "vMa10": 929,
    "maxVol10d": 3476,
    "hasVolumeBurst": true,
    "high5d": 18.6,
    "high10d": 18.6,
    "high20d": 18.6,
    "sparkline": [
      15.2,
      15.2,
      15.1,
      14.55,
      14.75,
      16.2,
      16.2,
      16.05,
      17.65,
      18.0
    ],
    "k5d": [
      {
        "open": 16.2,
        "high": 16.2,
        "low": 16.2,
        "close": 16.2,
        "ma5": 15.16,
        "ma10": 15.04
      },
      {
        "open": 16.5,
        "high": 16.8,
        "low": 16.0,
        "close": 16.2,
        "ma5": 15.36,
        "ma10": 15.15
      },
      {
        "open": 16.5,
        "high": 16.5,
        "low": 15.95,
        "close": 16.05,
        "ma5": 15.55,
        "ma10": 15.32
      },
      {
        "open": 16.2,
        "high": 17.65,
        "low": 16.05,
        "close": 17.65,
        "ma5": 16.17,
        "ma10": 15.59
      },
      {
        "open": 18.35,
        "high": 18.6,
        "low": 17.2,
        "close": 18.0,
        "ma5": 16.82,
        "ma10": 15.89
      }
    ],
    "symbol": "1336.TWO",
    "kd": {
      "k": 79.6,
      "d": 68.5,
      "prevK": 76.8,
      "prevD": 63.0,
      "h8": 17.65,
      "l8": 14.55
    }
  },
  {
    "code": "3388",
    "name": "崇越電",
    "categories": [
      "MajorBuy",
      "Top100",
      "ValueTop",
      "TurnoverRate",
      "MajorBuy1D"
    ],
    "price": 92.2,
    "prevClose": 83.9,
    "open": 91.7,
    "high": 92.2,
    "low": 90.0,
    "volume": 9660,
    "ma5": 80.12,
    "ma10": 76.61,
    "ma20": 74.3,
    "ma60": 84.7,
    "vMa5": 2994,
    "vMa10": 1718,
    "maxVol10d": 9660,
    "hasVolumeBurst": true,
    "high5d": 92.2,
    "high10d": 92.2,
    "high20d": 92.2,
    "sparkline": [
      73.2,
      73.2,
      73.4,
      72.6,
      73.1,
      72.6,
      75.6,
      76.3,
      83.9,
      92.2
    ],
    "k5d": [
      {
        "open": 73.0,
        "high": 73.7,
        "low": 72.5,
        "close": 72.6,
        "ma5": 72.98,
        "ma10": 71.81
      },
      {
        "open": 72.9,
        "high": 75.7,
        "low": 72.4,
        "close": 75.6,
        "ma5": 73.46,
        "ma10": 72.49
      },
      {
        "open": 78.6,
        "high": 78.9,
        "low": 74.8,
        "close": 76.3,
        "ma5": 74.04,
        "ma10": 73.31
      },
      {
        "open": 76.7,
        "high": 83.9,
        "low": 76.7,
        "close": 83.9,
        "ma5": 76.3,
        "ma10": 74.52
      },
      {
        "open": 91.7,
        "high": 92.2,
        "low": 90.0,
        "close": 92.2,
        "ma5": 80.12,
        "ma10": 76.61
      }
    ],
    "symbol": "3388.TWO",
    "kd": {
      "k": 89.8,
      "d": 81.6,
      "prevK": 84.8,
      "prevD": 77.5,
      "h8": 83.9,
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
    "price": 110.0,
    "prevClose": 108.0,
    "open": 108.0,
    "high": 113.0,
    "low": 107.0,
    "volume": 3245,
    "ma5": 107.1,
    "ma10": 103.47,
    "ma20": 103.16,
    "ma60": 105.94,
    "vMa5": 2576,
    "vMa10": 2389,
    "maxVol10d": 3245,
    "hasVolumeBurst": false,
    "high5d": 113.0,
    "high10d": 113.0,
    "high20d": 121.5,
    "sparkline": [
      98.8,
      99.4,
      101.0,
      98.0,
      102.0,
      105.0,
      107.5,
      105.0,
      108.0,
      110.0
    ],
    "k5d": [
      {
        "open": 100.0,
        "high": 106.5,
        "low": 100.0,
        "close": 105.0,
        "ma5": 101.08,
        "ma10": 96.26
      },
      {
        "open": 105.0,
        "high": 109.0,
        "low": 103.5,
        "close": 107.5,
        "ma5": 102.7,
        "ma10": 98.06
      },
      {
        "open": 108.5,
        "high": 108.5,
        "low": 105.0,
        "close": 105.0,
        "ma5": 103.5,
        "ma10": 99.9
      },
      {
        "open": 105.0,
        "high": 109.5,
        "low": 105.0,
        "close": 108.0,
        "ma5": 105.5,
        "ma10": 101.83
      },
      {
        "open": 108.0,
        "high": 113.0,
        "low": 107.0,
        "close": 110.0,
        "ma5": 107.1,
        "ma10": 103.47
      }
    ],
    "symbol": "8932.TWO",
    "kd": {
      "k": 83.6,
      "d": 77.7,
      "prevK": 84.5,
      "prevD": 74.8,
      "h8": 109.5,
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
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 475.0,
    "prevClose": 432.0,
    "open": 440.0,
    "high": 475.0,
    "low": 430.0,
    "volume": 3468,
    "ma5": 417.1,
    "ma10": 403.35,
    "ma20": 371.65,
    "ma60": 435.95,
    "vMa5": 1446,
    "vMa10": 1066,
    "maxVol10d": 3468,
    "hasVolumeBurst": true,
    "high5d": 475.0,
    "high10d": 475.0,
    "high20d": 475.0,
    "sparkline": [
      370.0,
      407.0,
      400.0,
      383.0,
      388.0,
      390.5,
      395.0,
      393.0,
      432.0,
      475.0
    ],
    "k5d": [
      {
        "open": 388.5,
        "high": 402.5,
        "low": 381.5,
        "close": 390.5,
        "ma5": 393.7,
        "ma10": 356.85
      },
      {
        "open": 388.0,
        "high": 408.0,
        "low": 388.0,
        "close": 395.0,
        "ma5": 391.3,
        "ma10": 365.45
      },
      {
        "open": 408.0,
        "high": 408.0,
        "low": 390.0,
        "close": 393.0,
        "ma5": 389.9,
        "ma10": 376.9
      },
      {
        "open": 396.0,
        "high": 432.0,
        "low": 382.0,
        "close": 432.0,
        "ma5": 399.7,
        "ma10": 389.5
      },
      {
        "open": 440.0,
        "high": 475.0,
        "low": 430.0,
        "close": 475.0,
        "ma5": 417.1,
        "ma10": 403.35
      }
    ],
    "symbol": "6727.TWO",
    "kd": {
      "k": 81.6,
      "d": 71.6,
      "prevK": 72.4,
      "prevD": 66.6,
      "h8": 444.0,
      "l8": 377.0
    }
  },
  {
    "code": "7402",
    "name": "邑錡",
    "categories": [
      "MajorBuy",
      "TurnoverRate",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 118.0,
    "prevClose": 115.5,
    "open": 122.0,
    "high": 123.0,
    "low": 112.5,
    "volume": 3583,
    "ma5": 109.8,
    "ma10": 106.8,
    "ma20": 106.14,
    "ma60": 108.45,
    "vMa5": 1379,
    "vMa10": 870,
    "maxVol10d": 3583,
    "hasVolumeBurst": true,
    "high5d": 123.0,
    "high10d": 123.0,
    "high20d": 124.0,
    "sparkline": [
      102.0,
      106.0,
      104.5,
      103.5,
      103.0,
      106.5,
      104.0,
      105.0,
      115.5,
      118.0
    ],
    "k5d": [
      {
        "open": 103.0,
        "high": 112.0,
        "low": 100.5,
        "close": 106.5,
        "ma5": 104.7,
        "ma10": 101.88
      },
      {
        "open": 107.0,
        "high": 107.0,
        "low": 103.0,
        "close": 104.0,
        "ma5": 104.3,
        "ma10": 102.65
      },
      {
        "open": 104.5,
        "high": 106.0,
        "low": 104.0,
        "close": 105.0,
        "ma5": 104.4,
        "ma10": 103.75
      },
      {
        "open": 107.0,
        "high": 115.5,
        "low": 103.5,
        "close": 115.5,
        "ma5": 106.8,
        "ma10": 105.1
      },
      {
        "open": 122.0,
        "high": 123.0,
        "low": 112.5,
        "close": 118.0,
        "ma5": 109.8,
        "ma10": 106.8
      }
    ],
    "symbol": "7402.TWO",
    "kd": {
      "k": 71.5,
      "d": 63.6,
      "prevK": 68.3,
      "prevD": 59.7,
      "h8": 115.5,
      "l8": 100.5
    }
  },
  {
    "code": "6125",
    "name": "廣運",
    "categories": [
      "MajorBuy",
      "MajorBuy1D",
      "MajorBuy3D"
    ],
    "price": 50.7,
    "prevClose": 51.6,
    "open": 52.6,
    "high": 53.4,
    "low": 50.7,
    "volume": 1632,
    "ma5": 50.45,
    "ma10": 49.8,
    "ma20": 48.81,
    "ma60": 56.93,
    "vMa5": 805,
    "vMa10": 706,
    "maxVol10d": 1632,
    "hasVolumeBurst": true,
    "high5d": 53.4,
    "high10d": 53.4,
    "high20d": 53.4,
    "sparkline": [
      48.25,
      49.1,
      49.05,
      49.4,
      50.0,
      49.65,
      50.2,
      50.1,
      51.6,
      50.7
    ],
    "k5d": [
      {
        "open": 49.8,
        "high": 49.9,
        "low": 49.15,
        "close": 49.65,
        "ma5": 49.44,
        "ma10": 47.42
      },
      {
        "open": 49.65,
        "high": 50.4,
        "low": 49.65,
        "close": 50.2,
        "ma5": 49.66,
        "ma10": 48.01
      },
      {
        "open": 50.4,
        "high": 50.9,
        "low": 49.95,
        "close": 50.1,
        "ma5": 49.87,
        "ma10": 48.73
      },
      {
        "open": 50.2,
        "high": 52.7,
        "low": 49.65,
        "close": 51.6,
        "ma5": 50.31,
        "ma10": 49.38
      },
      {
        "open": 52.6,
        "high": 53.4,
        "low": 50.7,
        "close": 50.7,
        "ma5": 50.45,
        "ma10": 49.8
      }
    ],
    "symbol": "6125.TWO",
    "kd": {
      "k": 65.5,
      "d": 67.5,
      "prevK": 74.0,
      "prevD": 68.4,
      "h8": 52.7,
      "l8": 48.15
    }
  },
  {
    "code": "3230",
    "name": "錦明",
    "categories": [
      "MajorBuy",
      "TurnoverRate",
      "MajorBuy1D"
    ],
    "price": 44.0,
    "prevClose": 44.45,
    "open": 47.0,
    "high": 47.25,
    "low": 42.5,
    "volume": 2824,
    "ma5": 42.32,
    "ma10": 41.52,
    "ma20": 40.49,
    "ma60": 39.37,
    "vMa5": 1261,
    "vMa10": 987,
    "maxVol10d": 2824,
    "hasVolumeBurst": true,
    "high5d": 47.25,
    "high10d": 47.25,
    "high20d": 47.3,
    "sparkline": [
      40.2,
      41.0,
      41.35,
      40.25,
      40.8,
      41.75,
      40.95,
      40.45,
      44.45,
      44.0
    ],
    "k5d": [
      {
        "open": 40.8,
        "high": 42.4,
        "low": 40.0,
        "close": 41.75,
        "ma5": 41.03,
        "ma10": 39.13
      },
      {
        "open": 42.05,
        "high": 42.6,
        "low": 40.95,
        "close": 40.95,
        "ma5": 41.02,
        "ma10": 39.63
      },
      {
        "open": 40.95,
        "high": 42.2,
        "low": 40.45,
        "close": 40.45,
        "ma5": 40.84,
        "ma10": 40.23
      },
      {
        "open": 40.5,
        "high": 44.45,
        "low": 40.0,
        "close": 44.45,
        "ma5": 41.68,
        "ma10": 41.05
      },
      {
        "open": 47.0,
        "high": 47.25,
        "low": 42.5,
        "close": 44.0,
        "ma5": 42.32,
        "ma10": 41.52
      }
    ],
    "symbol": "3230.TWO",
    "kd": {
      "k": 75.0,
      "d": 75.4,
      "prevK": 83.8,
      "prevD": 75.5,
      "h8": 44.45,
      "l8": 39.6
    }
  },
  {
    "code": "5530",
    "name": "龍巖",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 49.85,
    "prevClose": 50.8,
    "open": 50.9,
    "high": 50.9,
    "low": 49.5,
    "volume": 438,
    "ma5": 49.83,
    "ma10": 48.85,
    "ma20": 48.34,
    "ma60": 48.77,
    "vMa5": 419,
    "vMa10": 361,
    "maxVol10d": 891,
    "hasVolumeBurst": true,
    "high5d": 50.9,
    "high10d": 50.9,
    "high20d": 50.9,
    "sparkline": [
      47.45,
      47.5,
      47.25,
      47.3,
      49.85,
      49.65,
      49.35,
      49.5,
      50.8,
      49.85
    ],
    "k5d": [
      {
        "open": 49.85,
        "high": 50.1,
        "low": 49.2,
        "close": 49.65,
        "ma5": 48.31,
        "ma10": 47.72
      },
      {
        "open": 49.65,
        "high": 49.65,
        "low": 48.95,
        "close": 49.35,
        "ma5": 48.68,
        "ma10": 47.99
      },
      {
        "open": 49.35,
        "high": 50.0,
        "low": 49.05,
        "close": 49.5,
        "ma5": 49.13,
        "ma10": 48.23
      },
      {
        "open": 49.6,
        "high": 50.9,
        "low": 49.3,
        "close": 50.8,
        "ma5": 49.83,
        "ma10": 48.57
      },
      {
        "open": 50.9,
        "high": 50.9,
        "low": 49.5,
        "close": 49.85,
        "ma5": 49.83,
        "ma10": 48.85
      }
    ],
    "symbol": "5530.TWO",
    "kd": {
      "k": 76.0,
      "d": 69.6,
      "prevK": 77.6,
      "prevD": 66.4,
      "h8": 50.9,
      "l8": 47.05
    }
  },
  {
    "code": "4167",
    "name": "松瑞藥",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 19.4,
    "prevClose": 19.15,
    "open": 19.5,
    "high": 19.55,
    "low": 18.95,
    "volume": 783,
    "ma5": 18.76,
    "ma10": 18.71,
    "ma20": 18.48,
    "ma60": 18.74,
    "vMa5": 748,
    "vMa10": 1133,
    "maxVol10d": 2832,
    "hasVolumeBurst": true,
    "high5d": 19.55,
    "high10d": 20.15,
    "high20d": 20.15,
    "sparkline": [
      17.95,
      18.2,
      18.7,
      19.75,
      18.7,
      18.45,
      18.45,
      18.35,
      19.15,
      19.4
    ],
    "k5d": [
      {
        "open": 18.7,
        "high": 18.7,
        "low": 18.25,
        "close": 18.45,
        "ma5": 18.76,
        "ma10": 17.99
      },
      {
        "open": 18.55,
        "high": 18.55,
        "low": 18.25,
        "close": 18.45,
        "ma5": 18.81,
        "ma10": 18.14
      },
      {
        "open": 18.45,
        "high": 18.5,
        "low": 18.35,
        "close": 18.35,
        "ma5": 18.74,
        "ma10": 18.3
      },
      {
        "open": 19.35,
        "high": 19.35,
        "low": 18.8,
        "close": 19.15,
        "ma5": 18.62,
        "ma10": 18.53
      },
      {
        "open": 19.5,
        "high": 19.55,
        "low": 18.95,
        "close": 19.4,
        "ma5": 18.76,
        "ma10": 18.71
      }
    ],
    "symbol": "4167.TWO",
    "kd": {
      "k": 60.6,
      "d": 57.0,
      "prevK": 57.2,
      "prevD": 55.3,
      "h8": 20.15,
      "l8": 17.85
    }
  },
  {
    "code": "3287",
    "name": "廣寰科",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 37.6,
    "prevClose": 37.5,
    "open": 37.25,
    "high": 37.6,
    "low": 36.0,
    "volume": 875,
    "ma5": 35.7,
    "ma10": 32.86,
    "ma20": 30.69,
    "ma60": 32.48,
    "vMa5": 1141,
    "vMa10": 620,
    "maxVol10d": 2808,
    "hasVolumeBurst": true,
    "high5d": 39.25,
    "high10d": 39.25,
    "high20d": 39.25,
    "sparkline": [
      29.9,
      29.7,
      29.7,
      29.6,
      31.15,
      32.25,
      35.45,
      35.7,
      37.5,
      37.6
    ],
    "k5d": [
      {
        "open": 30.9,
        "high": 32.5,
        "low": 30.65,
        "close": 32.25,
        "ma5": 30.48,
        "ma10": 29.37
      },
      {
        "open": 35.45,
        "high": 35.45,
        "low": 35.45,
        "close": 35.45,
        "ma5": 31.63,
        "ma10": 30.17
      },
      {
        "open": 38.0,
        "high": 38.0,
        "low": 34.45,
        "close": 35.7,
        "ma5": 32.83,
        "ma10": 31.04
      },
      {
        "open": 36.5,
        "high": 39.25,
        "low": 35.8,
        "close": 37.5,
        "ma5": 34.41,
        "ma10": 31.96
      },
      {
        "open": 37.25,
        "high": 37.6,
        "low": 36.0,
        "close": 37.6,
        "ma5": 35.7,
        "ma10": 32.86
      }
    ],
    "symbol": "3287.TWO",
    "kd": {
      "k": 85.1,
      "d": 84.8,
      "prevK": 85.8,
      "prevD": 84.7,
      "h8": 39.25,
      "l8": 29.1
    }
  },
  {
    "code": "5309",
    "name": "系統電",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 54.2,
    "prevClose": 54.6,
    "open": 55.0,
    "high": 55.2,
    "low": 53.5,
    "volume": 1020,
    "ma5": 55.34,
    "ma10": 54.19,
    "ma20": 52.51,
    "ma60": 62.08,
    "vMa5": 2169,
    "vMa10": 2218,
    "maxVol10d": 4718,
    "hasVolumeBurst": true,
    "high5d": 57.0,
    "high10d": 57.0,
    "high20d": 57.0,
    "sparkline": [
      51.5,
      52.7,
      53.2,
      52.0,
      55.8,
      56.3,
      56.0,
      55.6,
      54.6,
      54.2
    ],
    "k5d": [
      {
        "open": 55.3,
        "high": 57.0,
        "low": 55.2,
        "close": 56.3,
        "ma5": 54.0,
        "ma10": 51.26
      },
      {
        "open": 56.3,
        "high": 56.5,
        "low": 55.7,
        "close": 56.0,
        "ma5": 54.66,
        "ma10": 52.2
      },
      {
        "open": 56.1,
        "high": 56.4,
        "low": 55.6,
        "close": 55.6,
        "ma5": 55.14,
        "ma10": 53.28
      },
      {
        "open": 55.2,
        "high": 55.5,
        "low": 54.3,
        "close": 54.6,
        "ma5": 55.66,
        "ma10": 53.82
      },
      {
        "open": 55.0,
        "high": 55.2,
        "low": 53.5,
        "close": 54.2,
        "ma5": 55.34,
        "ma10": 54.19
      }
    ],
    "symbol": "5309.TWO",
    "kd": {
      "k": 68.1,
      "d": 75.1,
      "prevK": 78.6,
      "prevD": 78.6,
      "h8": 57.0,
      "l8": 51.7
    }
  },
  {
    "code": "7714",
    "name": "創泓科技",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 166.0,
    "prevClose": 172.5,
    "open": 176.0,
    "high": 178.5,
    "low": 163.5,
    "volume": 635,
    "ma5": 160.0,
    "ma10": 156.95,
    "ma20": 157.25,
    "ma60": 148.44,
    "vMa5": 354,
    "vMa10": 340,
    "maxVol10d": 635,
    "hasVolumeBurst": true,
    "high5d": 178.5,
    "high10d": 178.5,
    "high20d": 206.5,
    "sparkline": [
      155.0,
      158.0,
      153.5,
      153.0,
      150.0,
      153.5,
      151.0,
      157.0,
      172.5,
      166.0
    ],
    "k5d": [
      {
        "open": 148.0,
        "high": 158.5,
        "low": 147.0,
        "close": 153.5,
        "ma5": 153.6,
        "ma10": 146.25
      },
      {
        "open": 152.0,
        "high": 153.5,
        "low": 151.0,
        "close": 151.0,
        "ma5": 152.2,
        "ma10": 147.75
      },
      {
        "open": 153.0,
        "high": 160.0,
        "low": 153.0,
        "close": 157.0,
        "ma5": 152.9,
        "ma10": 150.95
      },
      {
        "open": 159.0,
        "high": 172.5,
        "low": 155.0,
        "close": 172.5,
        "ma5": 156.8,
        "ma10": 154.45
      },
      {
        "open": 176.0,
        "high": 178.5,
        "low": 163.5,
        "close": 166.0,
        "ma5": 160.0,
        "ma10": 156.95
      }
    ],
    "symbol": "7714.TWO",
    "kd": {
      "k": 68.9,
      "d": 63.1,
      "prevK": 73.2,
      "prevD": 60.2,
      "h8": 172.5,
      "l8": 147.0
    }
  },
  {
    "code": "6234",
    "name": "高僑",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 36.7,
    "prevClose": 37.4,
    "open": 36.75,
    "high": 37.8,
    "low": 36.25,
    "volume": 295,
    "ma5": 36.83,
    "ma10": 35.89,
    "ma20": 34.91,
    "ma60": 42.18,
    "vMa5": 463,
    "vMa10": 464,
    "maxVol10d": 740,
    "hasVolumeBurst": true,
    "high5d": 38.5,
    "high10d": 38.5,
    "high20d": 38.5,
    "sparkline": [
      33.35,
      35.2,
      34.7,
      34.05,
      37.45,
      36.65,
      37.35,
      36.05,
      37.4,
      36.7
    ],
    "k5d": [
      {
        "open": 37.4,
        "high": 38.5,
        "low": 36.0,
        "close": 36.65,
        "ma5": 35.61,
        "ma10": 33.71
      },
      {
        "open": 37.0,
        "high": 37.9,
        "low": 36.9,
        "close": 37.35,
        "ma5": 36.04,
        "ma10": 34.25
      },
      {
        "open": 37.45,
        "high": 37.8,
        "low": 35.95,
        "close": 36.05,
        "ma5": 36.31,
        "ma10": 34.92
      },
      {
        "open": 36.3,
        "high": 37.4,
        "low": 35.4,
        "close": 37.4,
        "ma5": 36.98,
        "ma10": 35.44
      },
      {
        "open": 36.75,
        "high": 37.8,
        "low": 36.25,
        "close": 36.7,
        "ma5": 36.83,
        "ma10": 35.89
      }
    ],
    "symbol": "6234.TWO",
    "kd": {
      "k": 72.4,
      "d": 73.1,
      "prevK": 77.6,
      "prevD": 73.4,
      "h8": 38.5,
      "l8": 33.75
    }
  },
  {
    "code": "6134",
    "name": "萬旭",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 28.05,
    "prevClose": 28.7,
    "open": 29.3,
    "high": 29.3,
    "low": 28.05,
    "volume": 223,
    "ma5": 28.02,
    "ma10": 27.57,
    "ma20": 26.66,
    "ma60": 31.25,
    "vMa5": 354,
    "vMa10": 320,
    "maxVol10d": 1011,
    "hasVolumeBurst": true,
    "high5d": 29.8,
    "high10d": 29.8,
    "high20d": 29.8,
    "sparkline": [
      26.3,
      27.2,
      27.15,
      27.1,
      27.85,
      27.8,
      27.9,
      27.65,
      28.7,
      28.05
    ],
    "k5d": [
      {
        "open": 27.85,
        "high": 28.1,
        "low": 27.75,
        "close": 27.8,
        "ma5": 27.42,
        "ma10": 26.02
      },
      {
        "open": 28.15,
        "high": 28.45,
        "low": 27.85,
        "close": 27.9,
        "ma5": 27.56,
        "ma10": 26.44
      },
      {
        "open": 28.5,
        "high": 28.55,
        "low": 27.65,
        "close": 27.65,
        "ma5": 27.66,
        "ma10": 26.91
      },
      {
        "open": 27.65,
        "high": 29.8,
        "low": 27.05,
        "close": 28.7,
        "ma5": 27.98,
        "ma10": 27.29
      },
      {
        "open": 29.3,
        "high": 29.3,
        "low": 28.05,
        "close": 28.05,
        "ma5": 28.02,
        "ma10": 27.57
      }
    ],
    "symbol": "6134.TWO",
    "kd": {
      "k": 70.3,
      "d": 76.1,
      "prevK": 80.1,
      "prevD": 79.0,
      "h8": 29.8,
      "l8": 26.25
    }
  },
  {
    "code": "3580",
    "name": "友威科",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 83.7,
    "prevClose": 85.7,
    "open": 85.7,
    "high": 85.8,
    "low": 83.4,
    "volume": 222,
    "ma5": 81.42,
    "ma10": 79.76,
    "ma20": 77.86,
    "ma60": 91.56,
    "vMa5": 414,
    "vMa10": 325,
    "maxVol10d": 635,
    "hasVolumeBurst": true,
    "high5d": 87.3,
    "high10d": 87.3,
    "high20d": 87.3,
    "sparkline": [
      75.5,
      78.9,
      78.6,
      77.0,
      80.5,
      77.6,
      80.4,
      79.7,
      85.7,
      83.7
    ],
    "k5d": [
      {
        "open": 78.2,
        "high": 78.7,
        "low": 75.9,
        "close": 77.6,
        "ma5": 78.52,
        "ma10": 74.83
      },
      {
        "open": 77.6,
        "high": 81.9,
        "low": 77.6,
        "close": 80.4,
        "ma5": 78.82,
        "ma10": 75.97
      },
      {
        "open": 80.4,
        "high": 82.1,
        "low": 79.4,
        "close": 79.7,
        "ma5": 79.04,
        "ma10": 77.34
      },
      {
        "open": 82.0,
        "high": 87.3,
        "low": 82.0,
        "close": 85.7,
        "ma5": 80.78,
        "ma10": 78.81
      },
      {
        "open": 85.7,
        "high": 85.8,
        "low": 83.4,
        "close": 83.7,
        "ma5": 81.42,
        "ma10": 79.76
      }
    ],
    "symbol": "3580.TWO",
    "kd": {
      "k": 78.2,
      "d": 77.5,
      "prevK": 83.0,
      "prevD": 77.1,
      "h8": 87.3,
      "l8": 75.9
    }
  },
  {
    "code": "6163",
    "name": "華電網",
    "categories": [
      "MajorBuy",
      "Top100",
      "TurnoverRate",
      "MajorBuy1D"
    ],
    "price": 46.8,
    "prevClose": 42.55,
    "open": 42.5,
    "high": 46.8,
    "low": 42.5,
    "volume": 5504,
    "ma5": 43.57,
    "ma10": 42.35,
    "ma20": 41.23,
    "ma60": 46.57,
    "vMa5": 2116,
    "vMa10": 1381,
    "maxVol10d": 5504,
    "hasVolumeBurst": true,
    "high5d": 46.8,
    "high10d": 46.8,
    "high20d": 47.05,
    "sparkline": [
      40.45,
      41.25,
      41.25,
      40.65,
      42.0,
      43.0,
      43.1,
      42.4,
      42.55,
      46.8
    ],
    "k5d": [
      {
        "open": 43.7,
        "high": 44.5,
        "low": 42.6,
        "close": 43.0,
        "ma5": 41.63,
        "ma10": 39.98
      },
      {
        "open": 43.0,
        "high": 44.95,
        "low": 42.85,
        "close": 43.1,
        "ma5": 42.0,
        "ma10": 40.56
      },
      {
        "open": 43.35,
        "high": 43.8,
        "low": 42.3,
        "close": 42.4,
        "ma5": 42.23,
        "ma10": 41.22
      },
      {
        "open": 42.4,
        "high": 42.95,
        "low": 41.75,
        "close": 42.55,
        "ma5": 42.61,
        "ma10": 41.62
      },
      {
        "open": 42.5,
        "high": 46.8,
        "low": 42.5,
        "close": 46.8,
        "ma5": 43.57,
        "ma10": 42.35
      }
    ],
    "symbol": "6163.TWO",
    "kd": {
      "k": 78.5,
      "d": 73.0,
      "prevK": 67.8,
      "prevD": 70.2,
      "h8": 44.95,
      "l8": 40.0
    }
  },
  {
    "code": "6143",
    "name": "振曜",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 91.0,
    "prevClose": 91.0,
    "open": 91.5,
    "high": 92.5,
    "low": 91.0,
    "volume": 1101,
    "ma5": 89.56,
    "ma10": 90.95,
    "ma20": 91.04,
    "ma60": 94.75,
    "vMa5": 777,
    "vMa10": 587,
    "maxVol10d": 1110,
    "hasVolumeBurst": true,
    "high5d": 93.0,
    "high10d": 95.0,
    "high20d": 99.0,
    "sparkline": [
      90.5,
      93.8,
      94.0,
      92.6,
      90.8,
      89.0,
      88.8,
      88.0,
      91.0,
      91.0
    ],
    "k5d": [
      {
        "open": 90.3,
        "high": 90.7,
        "low": 88.6,
        "close": 89.0,
        "ma5": 92.04,
        "ma10": 89.52
      },
      {
        "open": 89.1,
        "high": 89.8,
        "low": 88.2,
        "close": 88.8,
        "ma5": 91.04,
        "ma10": 89.91
      },
      {
        "open": 88.8,
        "high": 89.0,
        "low": 88.0,
        "close": 88.0,
        "ma5": 89.84,
        "ma10": 90.41
      },
      {
        "open": 88.0,
        "high": 93.0,
        "low": 87.8,
        "close": 91.0,
        "ma5": 89.52,
        "ma10": 90.75
      },
      {
        "open": 91.5,
        "high": 92.5,
        "low": 91.0,
        "close": 91.0,
        "ma5": 89.56,
        "ma10": 90.95
      }
    ],
    "symbol": "6143.TWO",
    "kd": {
      "k": 42.8,
      "d": 46.1,
      "prevK": 42.0,
      "prevD": 47.8,
      "h8": 95.0,
      "l8": 87.8
    }
  },
  {
    "code": "1586",
    "name": "和勤",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 19.2,
    "prevClose": 19.2,
    "open": 19.3,
    "high": 19.45,
    "low": 19.0,
    "volume": 496,
    "ma5": 18.76,
    "ma10": 18.48,
    "ma20": 18.31,
    "ma60": 19.63,
    "vMa5": 751,
    "vMa10": 474,
    "maxVol10d": 1425,
    "hasVolumeBurst": true,
    "high5d": 19.45,
    "high10d": 19.45,
    "high20d": 19.45,
    "sparkline": [
      18.1,
      18.15,
      18.25,
      18.2,
      18.3,
      18.3,
      18.35,
      18.75,
      19.2,
      19.2
    ],
    "k5d": [
      {
        "open": 18.3,
        "high": 18.3,
        "low": 18.15,
        "close": 18.3,
        "ma5": 18.24,
        "ma10": 18.25
      },
      {
        "open": 18.35,
        "high": 18.45,
        "low": 18.2,
        "close": 18.35,
        "ma5": 18.28,
        "ma10": 18.28
      },
      {
        "open": 18.4,
        "high": 19.1,
        "low": 18.25,
        "close": 18.75,
        "ma5": 18.38,
        "ma10": 18.34
      },
      {
        "open": 18.95,
        "high": 19.45,
        "low": 18.45,
        "close": 19.2,
        "ma5": 18.58,
        "ma10": 18.4
      },
      {
        "open": 19.3,
        "high": 19.45,
        "low": 19.0,
        "close": 19.2,
        "ma5": 18.76,
        "ma10": 18.48
      }
    ],
    "symbol": "1586.TWO",
    "kd": {
      "k": 69.4,
      "d": 59.0,
      "prevK": 63.0,
      "prevD": 53.8,
      "h8": 19.45,
      "l8": 18.05
    }
  },
  {
    "code": "8027",
    "name": "鈦昇",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 182.0,
    "prevClose": 186.5,
    "open": 190.0,
    "high": 191.5,
    "low": 181.5,
    "volume": 1239,
    "ma5": 186.4,
    "ma10": 182.75,
    "ma20": 181.85,
    "ma60": 222.28,
    "vMa5": 2050,
    "vMa10": 2251,
    "maxVol10d": 3224,
    "hasVolumeBurst": false,
    "high5d": 199.5,
    "high10d": 199.5,
    "high20d": 220.0,
    "sparkline": [
      175.5,
      183.0,
      183.0,
      172.0,
      182.0,
      181.5,
      192.0,
      190.0,
      186.5,
      182.0
    ],
    "k5d": [
      {
        "open": 182.0,
        "high": 186.5,
        "low": 177.0,
        "close": 181.5,
        "ma5": 180.3,
        "ma10": 170.25
      },
      {
        "open": 187.0,
        "high": 198.5,
        "low": 185.0,
        "close": 192.0,
        "ma5": 182.1,
        "ma10": 173.7
      },
      {
        "open": 193.0,
        "high": 199.5,
        "low": 189.5,
        "close": 190.0,
        "ma5": 183.5,
        "ma10": 178.3
      },
      {
        "open": 190.0,
        "high": 191.0,
        "low": 183.5,
        "close": 186.5,
        "ma5": 186.4,
        "ma10": 181.15
      },
      {
        "open": 190.0,
        "high": 191.5,
        "low": 181.5,
        "close": 182.0,
        "ma5": 186.4,
        "ma10": 182.75
      }
    ],
    "symbol": "8027.TWO",
    "kd": {
      "k": 61.2,
      "d": 66.4,
      "prevK": 72.0,
      "prevD": 68.9,
      "h8": 199.5,
      "l8": 170.5
    }
  },
  {
    "code": "7751",
    "name": "竑騰",
    "categories": [
      "MajorBuy",
      "ValueTop",
      "TurnoverRate",
      "MajorBuy1D"
    ],
    "price": 1480.0,
    "prevClose": 1445.0,
    "open": 1485.0,
    "high": 1580.0,
    "low": 1425.0,
    "volume": 835,
    "ma5": 1362.0,
    "ma10": 1376.0,
    "ma20": 1281.75,
    "ma60": 1392.08,
    "vMa5": 373,
    "vMa10": 317,
    "maxVol10d": 835,
    "hasVolumeBurst": true,
    "high5d": 1580.0,
    "high10d": 1580.0,
    "high20d": 1580.0,
    "sparkline": [
      1365.0,
      1405.0,
      1405.0,
      1385.0,
      1390.0,
      1255.0,
      1315.0,
      1315.0,
      1445.0,
      1480.0
    ],
    "k5d": [
      {
        "open": 1310.0,
        "high": 1310.0,
        "low": 1255.0,
        "close": 1255.0,
        "ma5": 1368.0,
        "ma10": 1287.0
      },
      {
        "open": 1230.0,
        "high": 1320.0,
        "low": 1225.0,
        "close": 1315.0,
        "ma5": 1350.0,
        "ma10": 1311.5
      },
      {
        "open": 1345.0,
        "high": 1360.0,
        "low": 1285.0,
        "close": 1315.0,
        "ma5": 1332.0,
        "ma10": 1331.0
      },
      {
        "open": 1440.0,
        "high": 1445.0,
        "low": 1435.0,
        "close": 1445.0,
        "ma5": 1344.0,
        "ma10": 1352.5
      },
      {
        "open": 1485.0,
        "high": 1580.0,
        "low": 1425.0,
        "close": 1480.0,
        "ma5": 1362.0,
        "ma10": 1376.0
      }
    ],
    "symbol": "7751.TWO",
    "kd": {
      "k": 64.5,
      "d": 63.2,
      "prevK": 60.9,
      "prevD": 62.5,
      "h8": 1505.0,
      "l8": 1225.0
    }
  },
  {
    "code": "3484",
    "name": "崧騰",
    "categories": [
      "MajorBuy",
      "MajorBuy1D"
    ],
    "price": 51.5,
    "prevClose": 51.6,
    "open": 52.0,
    "high": 52.5,
    "low": 51.0,
    "volume": 299,
    "ma5": 50.8,
    "ma10": 51.25,
    "ma20": 49.2,
    "ma60": 48.89,
    "vMa5": 239,
    "vMa10": 550,
    "maxVol10d": 1838,
    "hasVolumeBurst": true,
    "high5d": 52.5,
    "high10d": 54.5,
    "high20d": 54.5,
    "sparkline": [
      51.2,
      52.8,
      52.1,
      51.7,
      50.7,
      50.2,
      50.4,
      50.3,
      51.6,
      51.5
    ],
    "k5d": [
      {
        "open": 50.4,
        "high": 50.4,
        "low": 50.0,
        "close": 50.2,
        "ma5": 51.5,
        "ma10": 49.5
      },
      {
        "open": 50.1,
        "high": 50.5,
        "low": 49.9,
        "close": 50.4,
        "ma5": 51.02,
        "ma10": 49.97
      },
      {
        "open": 50.2,
        "high": 50.8,
        "low": 50.0,
        "close": 50.3,
        "ma5": 50.66,
        "ma10": 50.43
      },
      {
        "open": 50.3,
        "high": 51.8,
        "low": 49.8,
        "close": 51.6,
        "ma5": 50.64,
        "ma10": 50.79
      },
      {
        "open": 52.0,
        "high": 52.5,
        "low": 51.0,
        "close": 51.5,
        "ma5": 50.8,
        "ma10": 51.25
      }
    ],
    "symbol": "3484.TWO",
    "kd": {
      "k": 44.6,
      "d": 51.5,
      "prevK": 48.9,
      "prevD": 54.9,
      "h8": 54.5,
      "l8": 49.8
    }
  },
  {
    "code": "6243",
    "name": "迅杰",
    "categories": [
      "TurnoverRate"
    ],
    "price": 45.7,
    "prevClose": 46.8,
    "open": 47.55,
    "high": 48.1,
    "low": 44.55,
    "volume": 3144,
    "ma5": 45.31,
    "ma10": 46.55,
    "ma20": 48.06,
    "ma60": 41.01,
    "vMa5": 2634,
    "vMa10": 3154,
    "maxVol10d": 5200,
    "hasVolumeBurst": true,
    "high5d": 48.1,
    "high10d": 53.6,
    "high20d": 55.5,
    "sparkline": [
      50.5,
      49.5,
      45.3,
      47.9,
      45.7,
      45.6,
      44.55,
      43.9,
      46.8,
      45.7
    ],
    "k5d": [
      {
        "open": 45.55,
        "high": 47.25,
        "low": 43.7,
        "close": 45.6,
        "ma5": 46.8,
        "ma10": 48.06
      },
      {
        "open": 45.2,
        "high": 45.75,
        "low": 44.5,
        "close": 44.55,
        "ma5": 45.81,
        "ma10": 47.39
      },
      {
        "open": 44.8,
        "high": 45.7,
        "low": 43.8,
        "close": 43.9,
        "ma5": 45.53,
        "ma10": 47.17
      },
      {
        "open": 44.5,
        "high": 47.5,
        "low": 41.85,
        "close": 46.8,
        "ma5": 45.31,
        "ma10": 46.78
      },
      {
        "open": 47.55,
        "high": 48.1,
        "low": 44.55,
        "close": 45.7,
        "ma5": 45.31,
        "ma10": 46.55
      }
    ],
    "symbol": "6243.TW",
    "kd": {
      "k": 25.5,
      "d": 22.1,
      "prevK": 21.8,
      "prevD": 20.4,
      "h8": 53.6,
      "l8": 41.85
    }
  },
  {
    "code": "8261",
    "name": "富鼎",
    "categories": [
      "TurnoverRate"
    ],
    "price": 195.5,
    "prevClose": 185.0,
    "open": 187.0,
    "high": 197.5,
    "low": 180.5,
    "volume": 7558,
    "ma5": 190.1,
    "ma10": 184.75,
    "ma20": 193.82,
    "ma60": 221.88,
    "vMa5": 8517,
    "vMa10": 8211,
    "maxVol10d": 11947,
    "hasVolumeBurst": true,
    "high5d": 202.5,
    "high10d": 202.5,
    "high20d": 266.0,
    "sparkline": [
      180.0,
      179.5,
      186.5,
      172.0,
      179.0,
      184.0,
      184.0,
      202.0,
      185.0,
      195.5
    ],
    "k5d": [
      {
        "open": 178.0,
        "high": 191.5,
        "low": 176.5,
        "close": 184.0,
        "ma5": 180.2,
        "ma10": 174.9
      },
      {
        "open": 184.0,
        "high": 190.0,
        "low": 183.5,
        "close": 184.0,
        "ma5": 181.1,
        "ma10": 175.75
      },
      {
        "open": 187.0,
        "high": 202.0,
        "low": 187.0,
        "close": 202.0,
        "ma5": 184.2,
        "ma10": 180.15
      },
      {
        "open": 202.5,
        "high": 202.5,
        "low": 185.0,
        "close": 185.0,
        "ma5": 186.8,
        "ma10": 182.3
      },
      {
        "open": 187.0,
        "high": 197.5,
        "low": 180.5,
        "close": 195.5,
        "ma5": 190.1,
        "ma10": 184.75
      }
    ],
    "symbol": "8261.TW",
    "kd": {
      "k": 70.9,
      "d": 62.6,
      "prevK": 66.9,
      "prevD": 58.4,
      "h8": 202.5,
      "l8": 169.5
    }
  },
  {
    "code": "8033",
    "name": "雷虎",
    "categories": [
      "TurnoverRate",
      "ValueTop"
    ],
    "price": 191.5,
    "prevClose": 201.5,
    "open": 206.5,
    "high": 213.5,
    "low": 188.0,
    "volume": 31590,
    "ma5": 187.7,
    "ma10": 185.3,
    "ma20": 182.28,
    "ma60": 172.21,
    "vMa5": 15894,
    "vMa10": 8901,
    "maxVol10d": 31590,
    "hasVolumeBurst": true,
    "high5d": 213.5,
    "high10d": 213.5,
    "high20d": 222.0,
    "sparkline": [
      178.5,
      189.0,
      190.0,
      185.0,
      172.0,
      189.0,
      173.0,
      183.5,
      201.5,
      191.5
    ],
    "k5d": [
      {
        "open": 170.0,
        "high": 189.0,
        "low": 162.5,
        "close": 189.0,
        "ma5": 185.0,
        "ma10": 174.8
      },
      {
        "open": 185.0,
        "high": 185.0,
        "low": 172.5,
        "close": 173.0,
        "ma5": 181.8,
        "ma10": 176.4
      },
      {
        "open": 174.0,
        "high": 183.5,
        "low": 173.5,
        "close": 183.5,
        "ma5": 180.5,
        "ma10": 179.75
      },
      {
        "open": 182.0,
        "high": 201.5,
        "low": 182.0,
        "close": 201.5,
        "ma5": 183.8,
        "ma10": 183.4
      },
      {
        "open": 206.5,
        "high": 213.5,
        "low": 188.0,
        "close": 191.5,
        "ma5": 187.7,
        "ma10": 185.3
      }
    ],
    "symbol": "8033.TW",
    "kd": {
      "k": 71.6,
      "d": 71.0,
      "prevK": 79.0,
      "prevD": 70.7,
      "h8": 201.5,
      "l8": 162.5
    }
  },
  {
    "code": "00657K",
    "name": "國泰日經225+U",
    "categories": [
      "TurnoverRate"
    ],
    "price": 25.61,
    "prevClose": 25.35,
    "open": 25.53,
    "high": 25.53,
    "low": 25.53,
    "volume": 0,
    "ma5": 25.13,
    "ma10": 24.61,
    "ma20": 23.94,
    "ma60": 24.6,
    "vMa5": 0,
    "vMa10": 0,
    "maxVol10d": 0,
    "hasVolumeBurst": false,
    "high5d": 25.53,
    "high10d": 25.53,
    "high20d": 25.53,
    "sparkline": [
      23.36,
      24.29,
      24.18,
      24.01,
      24.66,
      24.64,
      24.82,
      25.3,
      25.35,
      25.61
    ],
    "k5d": [
      {
        "open": 24.64,
        "high": 24.64,
        "low": 24.64,
        "close": 24.64,
        "ma5": 24.36,
        "ma10": 23.59
      },
      {
        "open": 24.82,
        "high": 24.82,
        "low": 24.82,
        "close": 24.82,
        "ma5": 24.46,
        "ma10": 23.87
      },
      {
        "open": 25.3,
        "high": 25.3,
        "low": 25.3,
        "close": 25.3,
        "ma5": 24.69,
        "ma10": 24.15
      },
      {
        "open": 25.35,
        "high": 25.35,
        "low": 25.35,
        "close": 25.35,
        "ma5": 24.95,
        "ma10": 24.38
      },
      {
        "open": 25.53,
        "high": 25.53,
        "low": 25.53,
        "close": 25.53,
        "ma5": 25.13,
        "ma10": 24.61
      }
    ],
    "symbol": "00657K.TW",
    "kd": {
      "k": 98.0,
      "d": 92.7,
      "prevK": 97.1,
      "prevD": 90.0,
      "h8": 25.35,
      "l8": 24.01
    }
  },
  {
    "code": "2465",
    "name": "麗臺",
    "categories": [
      "TurnoverRate"
    ],
    "price": 90.6,
    "prevClose": 95.9,
    "open": 95.9,
    "high": 96.5,
    "low": 87.0,
    "volume": 5372,
    "ma5": 94.78,
    "ma10": 90.19,
    "ma20": 83.39,
    "ma60": 81.2,
    "vMa5": 8307,
    "vMa10": 5751,
    "maxVol10d": 12724,
    "hasVolumeBurst": true,
    "high5d": 106.5,
    "high10d": 106.5,
    "high20d": 106.5,
    "sparkline": [
      78.0,
      85.8,
      85.5,
      85.1,
      93.6,
      86.9,
      95.5,
      105.0,
      95.9,
      90.6
    ],
    "k5d": [
      {
        "open": 94.6,
        "high": 95.8,
        "low": 86.8,
        "close": 86.9,
        "ma5": 87.38,
        "ma10": 80.4
      },
      {
        "open": 87.5,
        "high": 95.5,
        "low": 87.2,
        "close": 95.5,
        "ma5": 89.32,
        "ma10": 82.69
      },
      {
        "open": 99.1,
        "high": 105.0,
        "low": 95.7,
        "close": 105.0,
        "ma5": 93.22,
        "ma10": 86.43
      },
      {
        "open": 106.0,
        "high": 106.5,
        "low": 95.8,
        "close": 95.9,
        "ma5": 95.38,
        "ma10": 88.68
      },
      {
        "open": 95.9,
        "high": 96.5,
        "low": 87.0,
        "close": 90.6,
        "ma5": 94.78,
        "ma10": 90.19
      }
    ],
    "symbol": "2465.TW",
    "kd": {
      "k": 68.0,
      "d": 75.9,
      "prevK": 81.6,
      "prevD": 79.8,
      "h8": 106.5,
      "l8": 79.6
    }
  },
  {
    "code": "2484",
    "name": "希華",
    "categories": [
      "TurnoverRate"
    ],
    "price": 75.0,
    "prevClose": 72.8,
    "open": 74.2,
    "high": 76.4,
    "low": 73.0,
    "volume": 18625,
    "ma5": 74.18,
    "ma10": 72.85,
    "ma20": 69.7,
    "ma60": 70.22,
    "vMa5": 17226,
    "vMa10": 21554,
    "maxVol10d": 39627,
    "hasVolumeBurst": false,
    "high5d": 80.7,
    "high10d": 80.7,
    "high20d": 80.7,
    "sparkline": [
      69.9,
      70.5,
      71.2,
      71.7,
      74.3,
      73.3,
      73.9,
      75.9,
      72.8,
      75.0
    ],
    "k5d": [
      {
        "open": 74.7,
        "high": 76.4,
        "low": 73.3,
        "close": 73.3,
        "ma5": 72.2,
        "ma10": 67.25
      },
      {
        "open": 72.7,
        "high": 75.3,
        "low": 72.7,
        "close": 73.9,
        "ma5": 72.88,
        "ma10": 68.71
      },
      {
        "open": 74.5,
        "high": 80.7,
        "low": 74.3,
        "close": 75.9,
        "ma5": 73.82,
        "ma10": 70.54
      },
      {
        "open": 76.6,
        "high": 77.2,
        "low": 71.8,
        "close": 72.8,
        "ma5": 74.04,
        "ma10": 71.71
      },
      {
        "open": 74.2,
        "high": 76.4,
        "low": 73.0,
        "close": 75.0,
        "ma5": 74.18,
        "ma10": 72.85
      }
    ],
    "symbol": "2484.TW",
    "kd": {
      "k": 63.4,
      "d": 66.7,
      "prevK": 68.0,
      "prevD": 68.3,
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
    "price": 0.99,
    "prevClose": 0.99,
    "open": 0.99,
    "high": 1.0,
    "low": 0.98,
    "volume": 13919,
    "ma5": 1.0,
    "ma10": 1.01,
    "ma20": 1.03,
    "ma60": 1.02,
    "vMa5": 10846,
    "vMa10": 11511,
    "maxVol10d": 18123,
    "hasVolumeBurst": true,
    "high5d": 1.02,
    "high10d": 1.07,
    "high20d": 1.15,
    "sparkline": [
      1.04,
      1.02,
      1.01,
      1.02,
      1.01,
      1.01,
      1.0,
      0.99,
      0.99,
      0.99
    ],
    "k5d": [
      {
        "open": 1.01,
        "high": 1.02,
        "low": 1.0,
        "close": 1.01,
        "ma5": 1.01,
        "ma10": 1.04
      },
      {
        "open": 1.0,
        "high": 1.01,
        "low": 0.99,
        "close": 1.0,
        "ma5": 1.01,
        "ma10": 1.03
      },
      {
        "open": 0.99,
        "high": 0.99,
        "low": 0.98,
        "close": 0.99,
        "ma5": 1.01,
        "ma10": 1.02
      },
      {
        "open": 0.98,
        "high": 1.0,
        "low": 0.98,
        "close": 0.99,
        "ma5": 1.0,
        "ma10": 1.01
      },
      {
        "open": 0.99,
        "high": 1.0,
        "low": 0.98,
        "close": 0.99,
        "ma5": 1.0,
        "ma10": 1.01
      }
    ],
    "symbol": "00686R.TW",
    "kd": {
      "k": 14.4,
      "d": 14.5,
      "prevK": 11.6,
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
    "price": 26.2,
    "prevClose": 27.55,
    "open": 28.05,
    "high": 29.0,
    "low": 26.05,
    "volume": 23869,
    "ma5": 25.56,
    "ma10": 25.13,
    "ma20": 26.14,
    "ma60": 23.44,
    "vMa5": 13640,
    "vMa10": 9643,
    "maxVol10d": 24272,
    "hasVolumeBurst": true,
    "high5d": 29.0,
    "high10d": 29.0,
    "high20d": 34.15,
    "sparkline": [
      24.9,
      24.9,
      24.5,
      24.6,
      24.65,
      24.8,
      24.2,
      25.05,
      27.55,
      26.2
    ],
    "k5d": [
      {
        "open": 24.35,
        "high": 25.15,
        "low": 23.75,
        "close": 24.8,
        "ma5": 24.69,
        "ma10": 24.39
      },
      {
        "open": 24.5,
        "high": 24.7,
        "low": 24.1,
        "close": 24.2,
        "ma5": 24.55,
        "ma10": 24.43
      },
      {
        "open": 24.45,
        "high": 26.4,
        "low": 24.45,
        "close": 25.05,
        "ma5": 24.66,
        "ma10": 24.58
      },
      {
        "open": 25.2,
        "high": 27.55,
        "low": 24.3,
        "close": 27.55,
        "ma5": 25.25,
        "ma10": 24.9
      },
      {
        "open": 28.05,
        "high": 29.0,
        "low": 26.05,
        "close": 26.2,
        "ma5": 25.56,
        "ma10": 25.13
      }
    ],
    "symbol": "1810.TW",
    "kd": {
      "k": 57.0,
      "d": 50.2,
      "prevK": 62.1,
      "prevD": 46.9,
      "h8": 27.55,
      "l8": 23.75
    }
  },
  {
    "code": "6672",
    "name": "騰輝電子-KY",
    "categories": [
      "TurnoverRate"
    ],
    "price": 283.0,
    "prevClose": 270.0,
    "open": 271.0,
    "high": 288.0,
    "low": 266.0,
    "volume": 5137,
    "ma5": 268.5,
    "ma10": 249.55,
    "ma20": 230.6,
    "ma60": 244.78,
    "vMa5": 5575,
    "vMa10": 4428,
    "maxVol10d": 6872,
    "hasVolumeBurst": true,
    "high5d": 288.0,
    "high10d": 288.0,
    "high20d": 288.0,
    "sparkline": [
      218.5,
      221.5,
      232.5,
      229.0,
      251.5,
      257.0,
      268.0,
      264.5,
      270.0,
      283.0
    ],
    "k5d": [
      {
        "open": 251.5,
        "high": 262.0,
        "low": 247.0,
        "close": 257.0,
        "ma5": 238.3,
        "ma10": 218.6
      },
      {
        "open": 252.5,
        "high": 270.0,
        "low": 252.0,
        "close": 268.0,
        "ma5": 247.6,
        "ma10": 226.85
      },
      {
        "open": 269.5,
        "high": 272.5,
        "low": 260.0,
        "close": 264.5,
        "ma5": 254.0,
        "ma10": 235.2
      },
      {
        "open": 264.5,
        "high": 284.5,
        "low": 258.5,
        "close": 270.0,
        "ma5": 262.2,
        "ma10": 242.4
      },
      {
        "open": 271.0,
        "high": 288.0,
        "low": 266.0,
        "close": 283.0,
        "ma5": 268.5,
        "ma10": 249.55
      }
    ],
    "symbol": "6672.TW",
    "kd": {
      "k": 88.8,
      "d": 85.1,
      "prevK": 86.7,
      "prevD": 83.2,
      "h8": 284.5,
      "l8": 216.0
    }
  },
  {
    "code": "00668",
    "name": "國泰美國道瓊",
    "categories": [
      "TurnoverRate"
    ],
    "price": 62.6,
    "prevClose": 63.0,
    "open": 62.75,
    "high": 62.75,
    "low": 62.55,
    "volume": 313,
    "ma5": 63.06,
    "ma10": 63.32,
    "ma20": 62.53,
    "ma60": 60.82,
    "vMa5": 219,
    "vMa10": 184,
    "maxVol10d": 560,
    "hasVolumeBurst": true,
    "high5d": 63.55,
    "high10d": 64.15,
    "high20d": 64.15,
    "sparkline": [
      63.05,
      64.0,
      64.05,
      63.25,
      63.55,
      63.4,
      63.2,
      63.1,
      63.0,
      62.6
    ],
    "k5d": [
      {
        "open": 63.45,
        "high": 63.55,
        "low": 63.35,
        "close": 63.4,
        "ma5": 63.65,
        "ma10": 62.93
      },
      {
        "open": 63.4,
        "high": 63.4,
        "low": 63.15,
        "close": 63.2,
        "ma5": 63.49,
        "ma10": 63.0
      },
      {
        "open": 63.15,
        "high": 63.2,
        "low": 63.05,
        "close": 63.1,
        "ma5": 63.3,
        "ma10": 63.2
      },
      {
        "open": 63.05,
        "high": 63.05,
        "low": 63.0,
        "close": 63.0,
        "ma5": 63.25,
        "ma10": 63.29
      },
      {
        "open": 62.75,
        "high": 62.75,
        "low": 62.55,
        "close": 62.6,
        "ma5": 63.06,
        "ma10": 63.32
      }
    ],
    "symbol": "00668.TW",
    "kd": {
      "k": 31.5,
      "d": 53.9,
      "prevK": 45.7,
      "prevD": 65.1,
      "h8": 64.15,
      "l8": 63.0
    }
  },
  {
    "code": "6753",
    "name": "龍德造船",
    "categories": [
      "TurnoverRate"
    ],
    "price": 147.0,
    "prevClose": 158.0,
    "open": 158.0,
    "high": 159.0,
    "low": 144.0,
    "volume": 5335,
    "ma5": 146.4,
    "ma10": 140.55,
    "ma20": 138.28,
    "ma60": 134.54,
    "vMa5": 3629,
    "vMa10": 2634,
    "maxVol10d": 8013,
    "hasVolumeBurst": true,
    "high5d": 159.0,
    "high10d": 159.0,
    "high20d": 160.0,
    "sparkline": [
      130.5,
      134.0,
      132.0,
      135.0,
      142.0,
      141.0,
      142.0,
      144.0,
      158.0,
      147.0
    ],
    "k5d": [
      {
        "open": 144.5,
        "high": 144.5,
        "low": 137.0,
        "close": 141.0,
        "ma5": 136.8,
        "ma10": 132.75
      },
      {
        "open": 143.0,
        "high": 145.5,
        "low": 140.0,
        "close": 142.0,
        "ma5": 138.4,
        "ma10": 134.0
      },
      {
        "open": 143.0,
        "high": 145.5,
        "low": 142.0,
        "close": 144.0,
        "ma5": 140.8,
        "ma10": 136.1
      },
      {
        "open": 144.5,
        "high": 158.0,
        "low": 143.5,
        "close": 158.0,
        "ma5": 145.4,
        "ma10": 138.8
      },
      {
        "open": 158.0,
        "high": 159.0,
        "low": 144.0,
        "close": 147.0,
        "ma5": 146.4,
        "ma10": 140.55
      }
    ],
    "symbol": "6753.TW",
    "kd": {
      "k": 72.5,
      "d": 67.6,
      "prevK": 79.1,
      "prevD": 65.1,
      "h8": 158.0,
      "l8": 129.5
    }
  },
  {
    "code": "2399",
    "name": "映泰",
    "categories": [
      "TurnoverRate"
    ],
    "price": 47.0,
    "prevClose": 45.95,
    "open": 46.25,
    "high": 47.3,
    "low": 45.5,
    "volume": 14802,
    "ma5": 44.98,
    "ma10": 43.3,
    "ma20": 39.57,
    "ma60": 45.18,
    "vMa5": 9357,
    "vMa10": 9245,
    "maxVol10d": 14802,
    "hasVolumeBurst": true,
    "high5d": 47.3,
    "high10d": 47.3,
    "high20d": 47.3,
    "sparkline": [
      39.85,
      39.35,
      42.7,
      42.55,
      43.65,
      42.45,
      45.1,
      44.4,
      45.95,
      47.0
    ],
    "k5d": [
      {
        "open": 43.05,
        "high": 43.75,
        "low": 42.45,
        "close": 42.45,
        "ma5": 42.14,
        "ma10": 38.29
      },
      {
        "open": 42.8,
        "high": 45.6,
        "low": 42.65,
        "close": 45.1,
        "ma5": 43.29,
        "ma10": 39.55
      },
      {
        "open": 45.2,
        "high": 45.75,
        "low": 43.95,
        "close": 44.4,
        "ma5": 43.63,
        "ma10": 40.95
      },
      {
        "open": 45.4,
        "high": 47.15,
        "low": 45.05,
        "close": 45.95,
        "ma5": 44.31,
        "ma10": 42.24
      },
      {
        "open": 46.25,
        "high": 47.3,
        "low": 45.5,
        "close": 47.0,
        "ma5": 44.98,
        "ma10": 43.3
      }
    ],
    "symbol": "2399.TW",
    "kd": {
      "k": 92.1,
      "d": 88.3,
      "prevK": 89.9,
      "prevD": 86.5,
      "h8": 47.15,
      "l8": 39.1
    }
  },
  {
    "code": "4916",
    "name": "事欣科",
    "categories": [
      "TurnoverRate"
    ],
    "price": 104.0,
    "prevClose": 106.0,
    "open": 108.0,
    "high": 111.0,
    "low": 103.0,
    "volume": 6818,
    "ma5": 103.8,
    "ma10": 104.5,
    "ma20": 101.64,
    "ma60": 106.0,
    "vMa5": 5252,
    "vMa10": 5486,
    "maxVol10d": 8747,
    "hasVolumeBurst": true,
    "high5d": 111.0,
    "high10d": 111.0,
    "high20d": 112.5,
    "sparkline": [
      101.5,
      104.5,
      108.0,
      108.0,
      104.0,
      104.5,
      103.0,
      101.5,
      106.0,
      104.0
    ],
    "k5d": [
      {
        "open": 104.0,
        "high": 108.0,
        "low": 102.5,
        "close": 104.5,
        "ma5": 105.8,
        "ma10": 99.92
      },
      {
        "open": 105.0,
        "high": 105.0,
        "low": 102.5,
        "close": 103.0,
        "ma5": 105.5,
        "ma10": 101.2
      },
      {
        "open": 103.5,
        "high": 105.0,
        "low": 101.5,
        "close": 101.5,
        "ma5": 104.2,
        "ma10": 102.5
      },
      {
        "open": 102.0,
        "high": 108.0,
        "low": 101.0,
        "close": 106.0,
        "ma5": 103.8,
        "ma10": 103.6
      },
      {
        "open": 108.0,
        "high": 111.0,
        "low": 103.0,
        "close": 104.0,
        "ma5": 103.8,
        "ma10": 104.5
      }
    ],
    "symbol": "4916.TW",
    "kd": {
      "k": 53.1,
      "d": 59.8,
      "prevK": 62.9,
      "prevD": 63.2,
      "h8": 111.0,
      "l8": 100.5
    }
  },
  {
    "code": "00676R",
    "name": "富邦臺灣加權反1",
    "categories": [
      "TurnoverRate"
    ],
    "price": 5.52,
    "prevClose": 5.53,
    "open": 5.52,
    "high": 5.54,
    "low": 5.49,
    "volume": 7365,
    "ma5": 5.55,
    "ma10": 5.64,
    "ma20": 5.79,
    "ma60": 5.7,
    "vMa5": 7207,
    "vMa10": 8593,
    "maxVol10d": 14489,
    "hasVolumeBurst": false,
    "high5d": 5.68,
    "high10d": 5.94,
    "high20d": 6.44,
    "sparkline": [
      5.87,
      5.7,
      5.73,
      5.77,
      5.64,
      5.62,
      5.57,
      5.5,
      5.53,
      5.52
    ],
    "k5d": [
      {
        "open": 5.65,
        "high": 5.68,
        "low": 5.61,
        "close": 5.62,
        "ma5": 5.69,
        "ma10": 5.86
      },
      {
        "open": 5.58,
        "high": 5.61,
        "low": 5.56,
        "close": 5.57,
        "ma5": 5.67,
        "ma10": 5.79
      },
      {
        "open": 5.49,
        "high": 5.53,
        "low": 5.48,
        "close": 5.5,
        "ma5": 5.62,
        "ma10": 5.7
      },
      {
        "open": 5.48,
        "high": 5.55,
        "low": 5.47,
        "close": 5.53,
        "ma5": 5.57,
        "ma10": 5.68
      },
      {
        "open": 5.52,
        "high": 5.54,
        "low": 5.49,
        "close": 5.52,
        "ma5": 5.55,
        "ma10": 5.64
      }
    ],
    "symbol": "00676R.TW",
    "kd": {
      "k": 11.5,
      "d": 11.9,
      "prevK": 8.9,
      "prevD": 12.1,
      "h8": 5.77,
      "l8": 5.47
    }
  },
  {
    "code": "4967",
    "name": "十銓",
    "categories": [
      "TurnoverRate"
    ],
    "price": 263.5,
    "prevClose": 266.5,
    "open": 270.0,
    "high": 270.0,
    "low": 262.5,
    "volume": 3764,
    "ma5": 274.6,
    "ma10": 273.55,
    "ma20": 247.07,
    "ma60": 257.75,
    "vMa5": 4128,
    "vMa10": 6220,
    "maxVol10d": 10211,
    "hasVolumeBurst": true,
    "high5d": 284.5,
    "high10d": 288.5,
    "high20d": 288.5,
    "sparkline": [
      256.5,
      265.5,
      280.0,
      280.0,
      280.5,
      274.5,
      279.5,
      280.5,
      275.0,
      263.5
    ],
    "k5d": [
      {
        "open": 277.0,
        "high": 277.0,
        "low": 270.0,
        "close": 274.5,
        "ma5": 276.1,
        "ma10": 254.15
      },
      {
        "open": 277.0,
        "high": 281.0,
        "low": 276.0,
        "close": 279.5,
        "ma5": 278.9,
        "ma10": 260.25
      },
      {
        "open": 283.0,
        "high": 284.5,
        "low": 279.5,
        "close": 280.5,
        "ma5": 279.0,
        "ma10": 267.05
      },
      {
        "open": 283.5,
        "high": 284.5,
        "low": 274.0,
        "close": 275.0,
        "ma5": 278.0,
        "ma10": 271.2
      },
      {
        "open": 270.0,
        "high": 270.0,
        "low": 262.5,
        "close": 263.5,
        "ma5": 274.6,
        "ma10": 273.55
      }
    ],
    "symbol": "4967.TW",
    "kd": {
      "k": 54.8,
      "d": 74.8,
      "prevK": 80.3,
      "prevD": 84.9,
      "h8": 288.5,
      "l8": 262.5
    }
  },
  {
    "code": "00708L",
    "name": "期元大S＆P黃金正2",
    "categories": [
      "TurnoverRate"
    ],
    "price": 81.75,
    "prevClose": 78.8,
    "open": 81.95,
    "high": 82.45,
    "low": 81.4,
    "volume": 5704,
    "ma5": 81.4,
    "ma10": 78.56,
    "ma20": 74.71,
    "ma60": 76.39,
    "vMa5": 5793,
    "vMa10": 5710,
    "maxVol10d": 12187,
    "hasVolumeBurst": true,
    "high5d": 83.5,
    "high10d": 83.5,
    "high20d": 83.5,
    "sparkline": [
      70.55,
      73.25,
      77.15,
      77.6,
      80.0,
      82.1,
      82.1,
      82.25,
      78.8,
      81.75
    ],
    "k5d": [
      {
        "open": 82.3,
        "high": 83.5,
        "low": 82.0,
        "close": 82.1,
        "ma5": 78.02,
        "ma10": 74.19
      },
      {
        "open": 81.6,
        "high": 82.85,
        "low": 81.55,
        "close": 82.1,
        "ma5": 79.79,
        "ma10": 75.44
      },
      {
        "open": 83.3,
        "high": 83.5,
        "low": 81.85,
        "close": 82.25,
        "ma5": 80.81,
        "ma10": 76.67
      },
      {
        "open": 79.65,
        "high": 79.65,
        "low": 78.65,
        "close": 78.8,
        "ma5": 81.05,
        "ma10": 77.42
      },
      {
        "open": 81.95,
        "high": 82.45,
        "low": 81.4,
        "close": 81.75,
        "ma5": 81.4,
        "ma10": 78.56
      }
    ],
    "symbol": "00708L.TW",
    "kd": {
      "k": 82.4,
      "d": 81.5,
      "prevK": 80.5,
      "prevD": 81.1,
      "h8": 83.5,
      "l8": 70.95
    }
  },
  {
    "code": "00678",
    "name": "群益那斯達克生技",
    "categories": [
      "TurnoverRate"
    ],
    "price": 41.56,
    "prevClose": 41.88,
    "open": 41.75,
    "high": 41.81,
    "low": 41.53,
    "volume": 524,
    "ma5": 42.1,
    "ma10": 41.52,
    "ma20": 41.03,
    "ma60": 39.06,
    "vMa5": 352,
    "vMa10": 359,
    "maxVol10d": 524,
    "hasVolumeBurst": false,
    "high5d": 42.47,
    "high10d": 42.47,
    "high20d": 42.47,
    "sparkline": [
      39.98,
      40.8,
      40.97,
      41.0,
      41.91,
      42.43,
      42.22,
      42.4,
      41.88,
      41.56
    ],
    "k5d": [
      {
        "open": 42.15,
        "high": 42.47,
        "low": 42.15,
        "close": 42.43,
        "ma5": 41.42,
        "ma10": 41.0
      },
      {
        "open": 42.28,
        "high": 42.28,
        "low": 42.15,
        "close": 42.22,
        "ma5": 41.71,
        "ma10": 41.12
      },
      {
        "open": 42.37,
        "high": 42.4,
        "low": 42.37,
        "close": 42.4,
        "ma5": 41.99,
        "ma10": 41.31
      },
      {
        "open": 42.4,
        "high": 42.4,
        "low": 41.79,
        "close": 41.88,
        "ma5": 42.17,
        "ma10": 41.39
      },
      {
        "open": 41.75,
        "high": 41.81,
        "low": 41.53,
        "close": 41.56,
        "ma5": 42.1,
        "ma10": 41.52
      }
    ],
    "symbol": "00678.TW",
    "kd": {
      "k": 73.9,
      "d": 81.7,
      "prevK": 87.3,
      "prevD": 85.5,
      "h8": 42.47,
      "l8": 40.75
    }
  },
  {
    "code": "00859B",
    "name": "群益0-1年美債",
    "categories": [
      "TurnoverRate"
    ],
    "price": 41.18,
    "prevClose": 41.33,
    "open": 41.25,
    "high": 41.29,
    "low": 41.17,
    "volume": 3079,
    "ma5": 41.43,
    "ma10": 41.5,
    "ma20": 41.57,
    "ma60": 41.18,
    "vMa5": 2797,
    "vMa10": 2765,
    "maxVol10d": 3394,
    "hasVolumeBurst": false,
    "high5d": 41.58,
    "high10d": 41.81,
    "high20d": 41.81,
    "sparkline": [
      41.75,
      41.54,
      41.52,
      41.54,
      41.54,
      41.57,
      41.55,
      41.52,
      41.33,
      41.18
    ],
    "k5d": [
      {
        "open": 41.53,
        "high": 41.58,
        "low": 41.52,
        "close": 41.57,
        "ma5": 41.54,
        "ma10": 41.63
      },
      {
        "open": 41.57,
        "high": 41.57,
        "low": 41.53,
        "close": 41.55,
        "ma5": 41.54,
        "ma10": 41.62
      },
      {
        "open": 41.55,
        "high": 41.55,
        "low": 41.5,
        "close": 41.52,
        "ma5": 41.54,
        "ma10": 41.6
      },
      {
        "open": 41.51,
        "high": 41.51,
        "low": 41.32,
        "close": 41.33,
        "ma5": 41.5,
        "ma10": 41.55
      },
      {
        "open": 41.25,
        "high": 41.29,
        "low": 41.17,
        "close": 41.18,
        "ma5": 41.43,
        "ma10": 41.5
      }
    ],
    "symbol": "00859B.TWO",
    "kd": {
      "k": 13.4,
      "d": 24.7,
      "prevK": 19.2,
      "prevD": 30.4,
      "h8": 41.75,
      "l8": 41.32
    }
  },
  {
    "code": "00847B",
    "name": "中信美國市政債",
    "categories": [
      "TurnoverRate"
    ],
    "price": 24.9,
    "prevClose": 25.13,
    "open": 24.94,
    "high": 24.94,
    "low": 24.9,
    "volume": 206,
    "ma5": 25.14,
    "ma10": 25.28,
    "ma20": 25.42,
    "ma60": 25.55,
    "vMa5": 332,
    "vMa10": 303,
    "maxVol10d": 523,
    "hasVolumeBurst": true,
    "high5d": 25.27,
    "high10d": 25.56,
    "high20d": 25.8,
    "sparkline": [
      25.36,
      25.54,
      25.53,
      25.3,
      25.33,
      25.2,
      25.24,
      25.25,
      25.13,
      24.9
    ],
    "k5d": [
      {
        "open": 25.18,
        "high": 25.2,
        "low": 25.12,
        "close": 25.2,
        "ma5": 25.38,
        "ma10": 25.4
      },
      {
        "open": 25.25,
        "high": 25.27,
        "low": 25.24,
        "close": 25.24,
        "ma5": 25.32,
        "ma10": 25.35
      },
      {
        "open": 25.25,
        "high": 25.25,
        "low": 25.24,
        "close": 25.25,
        "ma5": 25.26,
        "ma10": 25.34
      },
      {
        "open": 25.16,
        "high": 25.17,
        "low": 25.13,
        "close": 25.13,
        "ma5": 25.23,
        "ma10": 25.31
      },
      {
        "open": 24.94,
        "high": 24.94,
        "low": 24.9,
        "close": 24.9,
        "ma5": 25.14,
        "ma10": 25.28
      }
    ],
    "symbol": "00847B.TWO",
    "kd": {
      "k": 27.7,
      "d": 44.9,
      "prevK": 41.5,
      "prevD": 53.5,
      "h8": 25.56,
      "l8": 25.12
    }
  },
  {
    "code": "2061",
    "name": "風青",
    "categories": [
      "TurnoverRate"
    ],
    "price": 51.6,
    "prevClose": 50.7,
    "open": 50.0,
    "high": 53.2,
    "low": 49.1,
    "volume": 2021,
    "ma5": 56.84,
    "ma10": 56.73,
    "ma20": 54.93,
    "ma60": 54.01,
    "vMa5": 3090,
    "vMa10": 2540,
    "maxVol10d": 4829,
    "hasVolumeBurst": true,
    "high5d": 65.3,
    "high10d": 65.3,
    "high20d": 65.3,
    "sparkline": [
      54.0,
      55.2,
      58.2,
      56.2,
      59.5,
      63.1,
      62.5,
      56.3,
      50.7,
      51.6
    ],
    "k5d": [
      {
        "open": 58.6,
        "high": 65.3,
        "low": 57.5,
        "close": 63.1,
        "ma5": 58.44,
        "ma10": 56.11
      },
      {
        "open": 62.4,
        "high": 64.6,
        "low": 62.4,
        "close": 62.5,
        "ma5": 59.9,
        "ma10": 56.82
      },
      {
        "open": 59.3,
        "high": 59.3,
        "low": 56.3,
        "close": 56.3,
        "ma5": 59.52,
        "ma10": 57.33
      },
      {
        "open": 54.0,
        "high": 54.4,
        "low": 50.7,
        "close": 50.7,
        "ma5": 58.42,
        "ma10": 56.85
      },
      {
        "open": 50.0,
        "high": 53.2,
        "low": 49.1,
        "close": 51.6,
        "ma5": 56.84,
        "ma10": 56.73
      }
    ],
    "symbol": "2061.TWO",
    "kd": {
      "k": 32.2,
      "d": 47.8,
      "prevK": 40.7,
      "prevD": 55.6,
      "h8": 65.3,
      "l8": 50.7
    }
  },
  {
    "code": "00860B",
    "name": "群益1-5Y投資級債",
    "categories": [
      "TurnoverRate"
    ],
    "price": 38.46,
    "prevClose": 38.61,
    "open": 38.56,
    "high": 38.56,
    "low": 38.46,
    "volume": 129,
    "ma5": 38.69,
    "ma10": 38.78,
    "ma20": 38.85,
    "ma60": 38.36,
    "vMa5": 127,
    "vMa10": 128,
    "maxVol10d": 211,
    "hasVolumeBurst": true,
    "high5d": 38.81,
    "high10d": 39.0,
    "high20d": 39.04,
    "sparkline": [
      39.0,
      38.91,
      38.84,
      38.81,
      38.81,
      38.81,
      38.79,
      38.77,
      38.61,
      38.46
    ],
    "k5d": [
      {
        "open": 38.81,
        "high": 38.81,
        "low": 38.81,
        "close": 38.81,
        "ma5": 38.84,
        "ma10": 38.92
      },
      {
        "open": 38.79,
        "high": 38.81,
        "low": 38.79,
        "close": 38.79,
        "ma5": 38.81,
        "ma10": 38.89
      },
      {
        "open": 38.79,
        "high": 38.79,
        "low": 38.76,
        "close": 38.77,
        "ma5": 38.8,
        "ma10": 38.87
      },
      {
        "open": 38.77,
        "high": 38.77,
        "low": 38.6,
        "close": 38.61,
        "ma5": 38.76,
        "ma10": 38.83
      },
      {
        "open": 38.56,
        "high": 38.56,
        "low": 38.46,
        "close": 38.46,
        "ma5": 38.69,
        "ma10": 38.78
      }
    ],
    "symbol": "00860B.TWO",
    "kd": {
      "k": 7.7,
      "d": 19.6,
      "prevK": 11.5,
      "prevD": 25.6,
      "h8": 38.98,
      "l8": 38.6
    }
  },
  {
    "code": "6259",
    "name": "百徽",
    "categories": [
      "TurnoverRate"
    ],
    "price": 33.45,
    "prevClose": 33.45,
    "open": 33.5,
    "high": 35.0,
    "low": 32.05,
    "volume": 1341,
    "ma5": 32.14,
    "ma10": 31.03,
    "ma20": 31.06,
    "ma60": 32.51,
    "vMa5": 1052,
    "vMa10": 777,
    "maxVol10d": 1417,
    "hasVolumeBurst": true,
    "high5d": 35.0,
    "high10d": 35.0,
    "high20d": 38.6,
    "sparkline": [
      30.15,
      30.3,
      29.9,
      29.0,
      30.25,
      30.75,
      31.05,
      32.0,
      33.45,
      33.45
    ],
    "k5d": [
      {
        "open": 30.3,
        "high": 32.3,
        "low": 30.15,
        "close": 30.75,
        "ma5": 30.04,
        "ma10": 29.5
      },
      {
        "open": 30.8,
        "high": 31.95,
        "low": 30.6,
        "close": 31.05,
        "ma5": 30.19,
        "ma10": 29.83
      },
      {
        "open": 31.65,
        "high": 33.8,
        "low": 31.5,
        "close": 32.0,
        "ma5": 30.61,
        "ma10": 30.33
      },
      {
        "open": 32.3,
        "high": 33.7,
        "low": 31.7,
        "close": 33.45,
        "ma5": 31.5,
        "ma10": 30.7
      },
      {
        "open": 33.5,
        "high": 35.0,
        "low": 32.05,
        "close": 33.45,
        "ma5": 32.14,
        "ma10": 31.03
      }
    ],
    "symbol": "6259.TWO",
    "kd": {
      "k": 73.5,
      "d": 65.7,
      "prevK": 73.2,
      "prevD": 61.7,
      "h8": 33.8,
      "l8": 29.0
    }
  },
  {
    "code": "6683",
    "name": "雍智科技",
    "categories": [
      "ValueTop"
    ],
    "price": 1325.0,
    "prevClose": 1370.0,
    "open": 1350.0,
    "high": 1370.0,
    "low": 1280.0,
    "volume": 565,
    "ma5": 1321.0,
    "ma10": 1242.5,
    "ma20": 1157.8,
    "ma60": 1480.02,
    "vMa5": 722,
    "vMa10": 613,
    "maxVol10d": 1199,
    "hasVolumeBurst": true,
    "high5d": 1460.0,
    "high10d": 1460.0,
    "high20d": 1460.0,
    "sparkline": [
      1090.0,
      1195.0,
      1185.0,
      1120.0,
      1230.0,
      1245.0,
      1270.0,
      1395.0,
      1370.0,
      1325.0
    ],
    "k5d": [
      {
        "open": 1240.0,
        "high": 1280.0,
        "low": 1195.0,
        "close": 1245.0,
        "ma5": 1195.0,
        "ma10": 1078.6
      },
      {
        "open": 1255.0,
        "high": 1290.0,
        "low": 1240.0,
        "close": 1270.0,
        "ma5": 1210.0,
        "ma10": 1112.0
      },
      {
        "open": 1315.0,
        "high": 1395.0,
        "low": 1315.0,
        "close": 1395.0,
        "ma5": 1252.0,
        "ma10": 1167.2
      },
      {
        "open": 1445.0,
        "high": 1460.0,
        "low": 1345.0,
        "close": 1370.0,
        "ma5": 1302.0,
        "ma10": 1211.5
      },
      {
        "open": 1350.0,
        "high": 1370.0,
        "low": 1280.0,
        "close": 1325.0,
        "ma5": 1321.0,
        "ma10": 1242.5
      }
    ],
    "symbol": "6683.TWO",
    "kd": {
      "k": 79.0,
      "d": 81.5,
      "prevK": 87.5,
      "prevD": 82.8,
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
      "SitcaBuy",
      "SitcaBuy3D"
    ],
    "price": 54.7,
    "prevClose": 51.6,
    "open": 51.7,
    "high": 54.8,
    "low": 51.7,
    "volume": 97007,
    "ma5": 52.28,
    "ma10": 51.55,
    "ma20": 51.16,
    "ma60": 51.46,
    "vMa5": 33753,
    "vMa10": 23699,
    "maxVol10d": 97007,
    "hasVolumeBurst": true,
    "high5d": 54.8,
    "high10d": 54.8,
    "high20d": 54.8,
    "sparkline": [
      51.0,
      50.6,
      50.4,
      50.5,
      51.6,
      52.0,
      51.7,
      51.4,
      51.6,
      54.7
    ],
    "k5d": [
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
        "close": 51.6,
        "ma5": 51.66,
        "ma10": 51.16
      },
      {
        "open": 51.7,
        "high": 54.8,
        "low": 51.7,
        "close": 54.7,
        "ma5": 52.28,
        "ma10": 51.55
      }
    ],
    "symbol": "2609.TW",
    "kd": {
      "k": 80.7,
      "d": 72.7,
      "prevK": 72.1,
      "prevD": 68.7,
      "h8": 52.2,
      "l8": 50.0
    }
  },
  {
    "code": "00891",
    "name": "中信關鍵半導體",
    "categories": [
      "Top100"
    ],
    "price": 36.23,
    "prevClose": 36.38,
    "open": 36.51,
    "high": 36.51,
    "low": 36.08,
    "volume": 52882,
    "ma5": 36.11,
    "ma10": 35.49,
    "ma20": 34.33,
    "ma60": 35.53,
    "vMa5": 28642,
    "vMa10": 25455,
    "maxVol10d": 52882,
    "hasVolumeBurst": true,
    "high5d": 37.02,
    "high10d": 37.02,
    "high20d": 37.02,
    "sparkline": [
      33.86,
      35.13,
      35.09,
      34.75,
      35.5,
      35.46,
      35.93,
      36.57,
      36.38,
      36.23
    ],
    "k5d": [
      {
        "open": 35.29,
        "high": 35.55,
        "low": 35.1,
        "close": 35.46,
        "ma5": 35.19,
        "ma10": 33.71
      },
      {
        "open": 35.7,
        "high": 35.94,
        "low": 35.59,
        "close": 35.93,
        "ma5": 35.35,
        "ma10": 34.28
      },
      {
        "open": 36.45,
        "high": 36.82,
        "low": 36.44,
        "close": 36.57,
        "ma5": 35.64,
        "ma10": 34.92
      },
      {
        "open": 37.01,
        "high": 37.02,
        "low": 36.3,
        "close": 36.38,
        "ma5": 35.97,
        "ma10": 35.24
      },
      {
        "open": 36.51,
        "high": 36.51,
        "low": 36.08,
        "close": 36.23,
        "ma5": 36.11,
        "ma10": 35.49
      }
    ],
    "symbol": "00891.TW",
    "kd": {
      "k": 82.2,
      "d": 85.4,
      "prevK": 89.3,
      "prevD": 86.9,
      "h8": 37.02,
      "l8": 34.54
    }
  },
  {
    "code": "00929",
    "name": "復華台灣科技優息",
    "categories": [
      "Top100"
    ],
    "price": 29.2,
    "prevClose": 29.44,
    "open": 29.42,
    "high": 29.44,
    "low": 29.13,
    "volume": 51124,
    "ma5": 29.4,
    "ma10": 29.06,
    "ma20": 28.44,
    "ma60": 29.59,
    "vMa5": 31571,
    "vMa10": 29924,
    "maxVol10d": 51124,
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
      29.2
    ],
    "k5d": [
      {
        "open": 29.0,
        "high": 29.22,
        "low": 28.88,
        "close": 29.17,
        "ma5": 28.93,
        "ma10": 28.02
      },
      {
        "open": 29.35,
        "high": 29.63,
        "low": 29.35,
        "close": 29.53,
        "ma5": 29.08,
        "ma10": 28.34
      },
      {
        "open": 29.94,
        "high": 30.09,
        "low": 29.67,
        "close": 29.67,
        "ma5": 29.22,
        "ma10": 28.7
      },
      {
        "open": 29.9,
        "high": 29.92,
        "low": 29.39,
        "close": 29.44,
        "ma5": 29.39,
        "ma10": 28.9
      },
      {
        "open": 29.42,
        "high": 29.44,
        "low": 29.13,
        "close": 29.2,
        "ma5": 29.4,
        "ma10": 29.06
      }
    ],
    "symbol": "00929.TW",
    "kd": {
      "k": 73.5,
      "d": 80.6,
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
      "Top100",
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 50.0,
    "prevClose": 47.6,
    "open": 47.9,
    "high": 51.3,
    "low": 47.55,
    "volume": 42934,
    "ma5": 48.26,
    "ma10": 46.99,
    "ma20": 45.2,
    "ma60": 42.76,
    "vMa5": 32508,
    "vMa10": 26321,
    "maxVol10d": 58324,
    "hasVolumeBurst": true,
    "high5d": 51.5,
    "high10d": 51.5,
    "high20d": 51.5,
    "sparkline": [
      44.25,
      44.35,
      46.1,
      46.6,
      47.3,
      46.45,
      46.85,
      50.4,
      47.6,
      50.0
    ],
    "k5d": [
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
        "low": 46.85,
        "close": 47.6,
        "ma5": 47.72,
        "ma10": 46.43
      },
      {
        "open": 47.9,
        "high": 51.3,
        "low": 47.55,
        "close": 50.0,
        "ma5": 48.26,
        "ma10": 46.99
      }
    ],
    "symbol": "2027.TW",
    "kd": {
      "k": 75.2,
      "d": 77.0,
      "prevK": 72.6,
      "prevD": 77.9,
      "h8": 51.5,
      "l8": 43.9
    }
  },
  {
    "code": "00751B",
    "name": "元大AAA至A公司債",
    "categories": [
      "Top100"
    ],
    "price": 30.41,
    "prevClose": 30.67,
    "open": 30.53,
    "high": 30.53,
    "low": 30.39,
    "volume": 7305,
    "ma5": 30.65,
    "ma10": 30.84,
    "ma20": 30.96,
    "ma60": 31.49,
    "vMa5": 4200,
    "vMa10": 4073,
    "maxVol10d": 7305,
    "hasVolumeBurst": true,
    "high5d": 30.82,
    "high10d": 31.23,
    "high20d": 31.42,
    "sparkline": [
      30.92,
      31.17,
      31.18,
      30.92,
      30.96,
      30.73,
      30.74,
      30.72,
      30.67,
      30.41
    ],
    "k5d": [
      {
        "open": 30.78,
        "high": 30.8,
        "low": 30.69,
        "close": 30.73,
        "ma5": 30.99,
        "ma10": 30.96
      },
      {
        "open": 30.74,
        "high": 30.79,
        "low": 30.71,
        "close": 30.74,
        "ma5": 30.91,
        "ma10": 30.92
      },
      {
        "open": 30.74,
        "high": 30.74,
        "low": 30.7,
        "close": 30.72,
        "ma5": 30.81,
        "ma10": 30.92
      },
      {
        "open": 30.77,
        "high": 30.82,
        "low": 30.67,
        "close": 30.67,
        "ma5": 30.76,
        "ma10": 30.88
      },
      {
        "open": 30.53,
        "high": 30.53,
        "low": 30.39,
        "close": 30.41,
        "ma5": 30.65,
        "ma10": 30.84
      }
    ],
    "symbol": "00751B.TWO",
    "kd": {
      "k": 9.9,
      "d": 20.8,
      "prevK": 13.6,
      "prevD": 26.3,
      "h8": 31.23,
      "l8": 30.67
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
      "MajorBuy3D"
    ],
    "price": 150.0,
    "prevClose": 136.5,
    "open": 139.5,
    "high": 150.0,
    "low": 137.5,
    "volume": 6025,
    "ma5": 136.4,
    "ma10": 124.6,
    "ma20": 112.51,
    "ma60": 118.83,
    "vMa5": 5114,
    "vMa10": 3487,
    "maxVol10d": 7998,
    "hasVolumeBurst": true,
    "high5d": 150.0,
    "high10d": 150.0,
    "high20d": 150.0,
    "sparkline": [
      113.0,
      115.0,
      110.5,
      107.5,
      118.0,
      121.5,
      133.0,
      141.0,
      136.5,
      150.0
    ],
    "k5d": [
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
        "low": 134.5,
        "close": 136.5,
        "ma5": 130.0,
        "ma10": 120.0
      },
      {
        "open": 139.5,
        "high": 150.0,
        "low": 137.5,
        "close": 150.0,
        "ma5": 136.4,
        "ma10": 124.6
      }
    ],
    "symbol": "3234.TWO",
    "kd": {
      "k": 89.4,
      "d": 83.2,
      "prevK": 84.1,
      "prevD": 80.1,
      "h8": 146.0,
      "l8": 103.0
    }
  },
  {
    "code": "6603",
    "name": "富強鑫",
    "categories": [
      "Top100",
      "MajorBuy",
      "TurnoverRate",
      "MajorBuy3D"
    ],
    "price": 29.95,
    "prevClose": 28.0,
    "open": 28.3,
    "high": 30.5,
    "low": 28.25,
    "volume": 5133,
    "ma5": 28.28,
    "ma10": 27.27,
    "ma20": 26.23,
    "ma60": 24.73,
    "vMa5": 4151,
    "vMa10": 3053,
    "maxVol10d": 6392,
    "hasVolumeBurst": true,
    "high5d": 30.5,
    "high10d": 30.5,
    "high20d": 30.5,
    "sparkline": [
      25.95,
      26.75,
      25.75,
      26.0,
      26.85,
      26.9,
      27.7,
      28.85,
      28.0,
      29.95
    ],
    "k5d": [
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
        "close": 28.0,
        "ma5": 27.66,
        "ma10": 26.91
      },
      {
        "open": 28.3,
        "high": 30.5,
        "low": 28.25,
        "close": 29.95,
        "ma5": 28.28,
        "ma10": 27.27
      }
    ],
    "symbol": "6603.TWO",
    "kd": {
      "k": 78.8,
      "d": 75.1,
      "prevK": 73.2,
      "prevD": 73.2,
      "h8": 29.5,
      "l8": 25.0
    }
  },
  {
    "code": "8086",
    "name": "宏捷科",
    "categories": [
      "Top100",
      "ValueTop"
    ],
    "price": 120.5,
    "prevClose": 114.0,
    "open": 114.5,
    "high": 122.0,
    "low": 114.5,
    "volume": 5057,
    "ma5": 117.4,
    "ma10": 118.65,
    "ma20": 116.92,
    "ma60": 138.84,
    "vMa5": 3318,
    "vMa10": 3697,
    "maxVol10d": 7215,
    "hasVolumeBurst": true,
    "high5d": 122.0,
    "high10d": 129.5,
    "high20d": 129.5,
    "sparkline": [
      122.5,
      124.0,
      123.5,
      111.5,
      118.0,
      116.5,
      119.0,
      117.0,
      114.0,
      120.5
    ],
    "k5d": [
      {
        "open": 119.0,
        "high": 120.5,
        "low": 116.0,
        "close": 116.5,
        "ma5": 118.7,
        "ma10": 115.1
      },
      {
        "open": 116.5,
        "high": 122.0,
        "low": 116.5,
        "close": 119.0,
        "ma5": 117.7,
        "ma10": 116.35
      },
      {
        "open": 121.5,
        "high": 121.5,
        "low": 117.0,
        "close": 117.0,
        "ma5": 116.4,
        "ma10": 117.75
      },
      {
        "open": 118.0,
        "high": 118.5,
        "low": 113.5,
        "close": 114.0,
        "ma5": 116.9,
        "ma10": 118.15
      },
      {
        "open": 114.5,
        "high": 122.0,
        "low": 114.5,
        "close": 120.5,
        "ma5": 117.4,
        "ma10": 118.65
      }
    ],
    "symbol": "8086.TWO",
    "kd": {
      "k": 41.7,
      "d": 46.1,
      "prevK": 37.5,
      "prevD": 48.3,
      "h8": 129.5,
      "l8": 111.5
    }
  },
  {
    "code": "6179",
    "name": "亞通",
    "categories": [
      "Top100"
    ],
    "price": 27.75,
    "prevClose": 27.05,
    "open": 28.0,
    "high": 29.3,
    "low": 27.65,
    "volume": 5018,
    "ma5": 27.5,
    "ma10": 27.22,
    "ma20": 25.81,
    "ma60": 25.61,
    "vMa5": 2011,
    "vMa10": 2076,
    "maxVol10d": 5018,
    "hasVolumeBurst": true,
    "high5d": 29.3,
    "high10d": 29.3,
    "high20d": 29.3,
    "sparkline": [
      25.8,
      27.65,
      26.35,
      27.05,
      27.9,
      27.5,
      27.35,
      27.85,
      27.05,
      27.75
    ],
    "k5d": [
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
        "close": 27.05,
        "ma5": 27.53,
        "ma10": 26.91
      },
      {
        "open": 28.0,
        "high": 29.3,
        "low": 27.65,
        "close": 27.75,
        "ma5": 27.5,
        "ma10": 27.22
      }
    ],
    "symbol": "6179.TWO",
    "kd": {
      "k": 71.6,
      "d": 77.4,
      "prevK": 80.9,
      "prevD": 80.3,
      "h8": 28.15,
      "l8": 26.0
    }
  },
  {
    "code": "6244",
    "name": "茂迪",
    "categories": [
      "Top100",
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 26.7,
    "prevClose": 25.2,
    "open": 25.2,
    "high": 27.0,
    "low": 25.05,
    "volume": 4554,
    "ma5": 25.2,
    "ma10": 24.54,
    "ma20": 24.03,
    "ma60": 26.85,
    "vMa5": 2987,
    "vMa10": 2925,
    "maxVol10d": 5862,
    "hasVolumeBurst": true,
    "high5d": 27.0,
    "high10d": 27.0,
    "high20d": 27.3,
    "sparkline": [
      23.7,
      24.7,
      23.75,
      23.1,
      24.1,
      24.1,
      24.3,
      25.7,
      25.2,
      26.7
    ],
    "k5d": [
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
        "close": 25.2,
        "ma5": 24.68,
        "ma10": 24.18
      },
      {
        "open": 25.2,
        "high": 27.0,
        "low": 25.05,
        "close": 26.7,
        "ma5": 25.2,
        "ma10": 24.54
      }
    ],
    "symbol": "6244.TWO",
    "kd": {
      "k": 78.1,
      "d": 72.2,
      "prevK": 71.0,
      "prevD": 69.2,
      "h8": 26.65,
      "l8": 23.1
    }
  },
  {
    "code": "00985D",
    "name": "主動貝萊德優投等",
    "categories": [
      "Top100",
      "TurnoverRate"
    ],
    "price": 9.9,
    "prevClose": 9.98,
    "open": 9.95,
    "high": 9.95,
    "low": 9.9,
    "volume": 4434,
    "ma5": 9.98,
    "ma10": 10.03,
    "ma20": 10.06,
    "ma60": 10.16,
    "vMa5": 2415,
    "vMa10": 1652,
    "maxVol10d": 4434,
    "hasVolumeBurst": true,
    "high5d": 10.01,
    "high10d": 10.14,
    "high20d": 10.17,
    "sparkline": [
      10.07,
      10.12,
      10.12,
      10.05,
      10.07,
      10.01,
      10.0,
      10.01,
      9.98,
      9.9
    ],
    "k5d": [
      {
        "open": 9.99,
        "high": 10.01,
        "low": 9.98,
        "close": 10.01,
        "ma5": 10.07,
        "ma10": 10.06
      },
      {
        "open": 10.01,
        "high": 10.01,
        "low": 9.99,
        "close": 10.0,
        "ma5": 10.05,
        "ma10": 10.05
      },
      {
        "open": 10.0,
        "high": 10.0,
        "low": 9.99,
        "close": 10.01,
        "ma5": 10.03,
        "ma10": 10.05
      },
      {
        "open": 10.0,
        "high": 10.01,
        "low": 9.97,
        "close": 9.98,
        "ma5": 10.01,
        "ma10": 10.04
      },
      {
        "open": 9.95,
        "high": 9.95,
        "low": 9.9,
        "close": 9.9,
        "ma5": 9.98,
        "ma10": 10.03
      }
    ],
    "symbol": "00985D.TWO",
    "kd": {
      "k": 19.5,
      "d": 33.8,
      "prevK": 29.3,
      "prevD": 41.0,
      "h8": 10.14,
      "l8": 9.97
    }
  },
  {
    "code": "2376",
    "name": "技嘉",
    "categories": [
      "ValueTop",
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 358.0,
    "prevClose": 397.5,
    "open": 380.0,
    "high": 381.5,
    "low": 358.0,
    "volume": 22927,
    "ma5": 375.0,
    "ma10": 358.65,
    "ma20": 348.1,
    "ma60": 345.62,
    "vMa5": 15228,
    "vMa10": 11537,
    "maxVol10d": 22927,
    "hasVolumeBurst": true,
    "high5d": 402.0,
    "high10d": 402.0,
    "high20d": 402.0,
    "sparkline": [
      332.0,
      342.0,
      344.0,
      344.0,
      349.5,
      350.5,
      375.5,
      393.5,
      397.5,
      358.0
    ],
    "k5d": [
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
        "close": 397.5,
        "ma5": 373.3,
        "ma10": 355.3
      },
      {
        "open": 380.0,
        "high": 381.5,
        "low": 358.0,
        "close": 358.0,
        "ma5": 375.0,
        "ma10": 358.65
      }
    ],
    "symbol": "2376.TW",
    "kd": {
      "k": 71.0,
      "d": 78.8,
      "prevK": 90.9,
      "prevD": 82.7,
      "h8": 402.0,
      "l8": 338.0
    }
  },
  {
    "code": "6446",
    "name": "藥華藥",
    "categories": [
      "ValueTop"
    ],
    "price": 1410.0,
    "prevClose": 1500.0,
    "open": 1505.0,
    "high": 1545.0,
    "low": 1405.0,
    "volume": 4968,
    "ma5": 1451.0,
    "ma10": 1366.5,
    "ma20": 1247.25,
    "ma60": 1104.07,
    "vMa5": 4621,
    "vMa10": 4487,
    "maxVol10d": 5918,
    "hasVolumeBurst": true,
    "high5d": 1550.0,
    "high10d": 1550.0,
    "high20d": 1550.0,
    "sparkline": [
      1215.0,
      1335.0,
      1290.0,
      1240.0,
      1330.0,
      1460.0,
      1440.0,
      1445.0,
      1500.0,
      1410.0
    ],
    "k5d": [
      {
        "open": 1330.0,
        "high": 1460.0,
        "low": 1330.0,
        "close": 1460.0,
        "ma5": 1331.0,
        "ma10": 1220.0
      },
      {
        "open": 1465.0,
        "high": 1550.0,
        "low": 1415.0,
        "close": 1440.0,
        "ma5": 1352.0,
        "ma10": 1256.0
      },
      {
        "open": 1475.0,
        "high": 1510.0,
        "low": 1430.0,
        "close": 1445.0,
        "ma5": 1383.0,
        "ma10": 1298.0
      },
      {
        "open": 1440.0,
        "high": 1525.0,
        "low": 1440.0,
        "close": 1500.0,
        "ma5": 1435.0,
        "ma10": 1342.0
      },
      {
        "open": 1505.0,
        "high": 1545.0,
        "low": 1405.0,
        "close": 1410.0,
        "ma5": 1451.0,
        "ma10": 1366.5
      }
    ],
    "symbol": "6446.TW",
    "kd": {
      "k": 74.7,
      "d": 76.0,
      "prevK": 81.5,
      "prevD": 76.7,
      "h8": 1550.0,
      "l8": 1190.0
    }
  },
  {
    "code": "2455",
    "name": "全新",
    "categories": [
      "ValueTop",
      "TurnoverRate"
    ],
    "price": 417.0,
    "prevClose": 379.5,
    "open": 409.5,
    "high": 417.0,
    "low": 405.0,
    "volume": 13643,
    "ma5": 386.5,
    "ma10": 379.4,
    "ma20": 343.57,
    "ma60": 359.55,
    "vMa5": 5391,
    "vMa10": 9672,
    "maxVol10d": 34682,
    "hasVolumeBurst": true,
    "high5d": 417.0,
    "high10d": 417.0,
    "high20d": 417.0,
    "sparkline": [
      353.0,
      388.0,
      372.0,
      364.0,
      384.5,
      367.5,
      384.5,
      384.0,
      379.5,
      417.0
    ],
    "k5d": [
      {
        "open": 365.0,
        "high": 373.5,
        "low": 358.5,
        "close": 367.5,
        "ma5": 375.2,
        "ma10": 338.0
      },
      {
        "open": 372.0,
        "high": 388.0,
        "low": 372.0,
        "close": 384.5,
        "ma5": 374.5,
        "ma10": 349.2
      },
      {
        "open": 398.0,
        "high": 398.0,
        "low": 380.0,
        "close": 384.0,
        "ma5": 376.9,
        "ma10": 361.05
      },
      {
        "open": 385.0,
        "high": 385.0,
        "low": 376.0,
        "close": 379.5,
        "ma5": 380.0,
        "ma10": 369.8
      },
      {
        "open": 409.5,
        "high": 417.0,
        "low": 405.0,
        "close": 417.0,
        "ma5": 386.5,
        "ma10": 379.4
      }
    ],
    "symbol": "2455.TW",
    "kd": {
      "k": 82.6,
      "d": 78.7,
      "prevK": 73.9,
      "prevD": 76.7,
      "h8": 402.0,
      "l8": 358.5
    }
  },
  {
    "code": "3042",
    "name": "晶技",
    "categories": [
      "ValueTop",
      "TurnoverRate"
    ],
    "price": 195.5,
    "prevClose": 180.5,
    "open": 187.0,
    "high": 196.5,
    "low": 184.5,
    "volume": 28293,
    "ma5": 184.6,
    "ma10": 179.2,
    "ma20": 167.2,
    "ma60": 193.01,
    "vMa5": 16294,
    "vMa10": 15814,
    "maxVol10d": 28293,
    "hasVolumeBurst": true,
    "high5d": 196.5,
    "high10d": 196.5,
    "high20d": 196.5,
    "sparkline": [
      169.5,
      177.0,
      174.0,
      168.0,
      180.5,
      179.0,
      181.5,
      186.5,
      180.5,
      195.5
    ],
    "k5d": [
      {
        "open": 178.0,
        "high": 187.0,
        "low": 177.0,
        "close": 179.0,
        "ma5": 175.7,
        "ma10": 162.55
      },
      {
        "open": 179.0,
        "high": 185.0,
        "low": 175.5,
        "close": 181.5,
        "ma5": 176.6,
        "ma10": 167.05
      },
      {
        "open": 183.0,
        "high": 196.5,
        "low": 182.0,
        "close": 186.5,
        "ma5": 179.1,
        "ma10": 172.0
      },
      {
        "open": 185.0,
        "high": 187.5,
        "low": 179.0,
        "close": 180.5,
        "ma5": 181.6,
        "ma10": 175.1
      },
      {
        "open": 187.0,
        "high": 196.5,
        "low": 184.5,
        "close": 195.5,
        "ma5": 184.6,
        "ma10": 179.2
      }
    ],
    "symbol": "3042.TW",
    "kd": {
      "k": 82.0,
      "d": 77.8,
      "prevK": 74.6,
      "prevD": 75.7,
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
    "price": 5800.0,
    "prevClose": 6440.0,
    "open": 5800.0,
    "high": 5950.0,
    "low": 5800.0,
    "volume": 1504,
    "ma5": 6330.0,
    "ma10": 6242.0,
    "ma20": 5890.5,
    "ma60": 6174.0,
    "vMa5": 678,
    "vMa10": 696,
    "maxVol10d": 1504,
    "hasVolumeBurst": true,
    "high5d": 6815.0,
    "high10d": 6815.0,
    "high20d": 6815.0,
    "sparkline": [
      5900.0,
      6245.0,
      6300.0,
      6100.0,
      6225.0,
      6315.0,
      6600.0,
      6495.0,
      6440.0,
      5800.0
    ],
    "k5d": [
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
        "low": 6430.0,
        "close": 6440.0,
        "ma5": 6415.0,
        "ma10": 6242.5
      },
      {
        "open": 5800.0,
        "high": 5950.0,
        "low": 5800.0,
        "close": 5800.0,
        "ma5": 6330.0,
        "ma10": 6242.0
      }
    ],
    "symbol": "6223.TWO",
    "kd": {
      "k": 50.0,
      "d": 67.6,
      "prevK": 75.1,
      "prevD": 76.4,
      "h8": 6815.0,
      "l8": 6005.0
    }
  },
  {
    "code": "5289",
    "name": "宜鼎",
    "categories": [
      "ValueTop"
    ],
    "price": 1530.0,
    "prevClose": 1475.0,
    "open": 1485.0,
    "high": 1540.0,
    "low": 1485.0,
    "volume": 1844,
    "ma5": 1506.0,
    "ma10": 1498.5,
    "ma20": 1396.75,
    "ma60": 1597.92,
    "vMa5": 2316,
    "vMa10": 3154,
    "maxVol10d": 7433,
    "hasVolumeBurst": true,
    "high5d": 1595.0,
    "high10d": 1680.0,
    "high20d": 1680.0,
    "sparkline": [
      1415.0,
      1465.0,
      1610.0,
      1500.0,
      1465.0,
      1470.0,
      1520.0,
      1535.0,
      1475.0,
      1530.0
    ],
    "k5d": [
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
        "low": 1460.0,
        "close": 1475.0,
        "ma5": 1493.0,
        "ma10": 1484.0
      },
      {
        "open": 1485.0,
        "high": 1540.0,
        "low": 1485.0,
        "close": 1530.0,
        "ma5": 1506.0,
        "ma10": 1498.5
      }
    ],
    "symbol": "5289.TWO",
    "kd": {
      "k": 51.4,
      "d": 59.7,
      "prevK": 56.5,
      "prevD": 63.8,
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
    "price": 1005.0,
    "prevClose": 1010.0,
    "open": 1015.0,
    "high": 1035.0,
    "low": 1000.0,
    "volume": 1508,
    "ma5": 1029.0,
    "ma10": 1013.9,
    "ma20": 958.0,
    "ma60": 999.77,
    "vMa5": 2402,
    "vMa10": 3168,
    "maxVol10d": 7045,
    "hasVolumeBurst": true,
    "high5d": 1080.0,
    "high10d": 1080.0,
    "high20d": 1080.0,
    "sparkline": [
      944.0,
      965.0,
      1060.0,
      1015.0,
      1010.0,
      1045.0,
      1050.0,
      1035.0,
      1010.0,
      1005.0
    ],
    "k5d": [
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
        "low": 1005.0,
        "close": 1010.0,
        "ma5": 1030.0,
        "ma10": 1007.8
      },
      {
        "open": 1015.0,
        "high": 1035.0,
        "low": 1000.0,
        "close": 1005.0,
        "ma5": 1029.0,
        "ma10": 1013.9
      }
    ],
    "symbol": "3324.TWO",
    "kd": {
      "k": 57.9,
      "d": 69.0,
      "prevK": 69.4,
      "prevD": 74.5,
      "h8": 1080.0,
      "l8": 965.0
    }
  },
  {
    "code": "5536",
    "name": "聖暉*",
    "categories": [
      "ValueTop"
    ],
    "price": 908.0,
    "prevClose": 925.0,
    "open": 925.0,
    "high": 925.0,
    "low": 896.0,
    "volume": 1197,
    "ma5": 919.0,
    "ma10": 978.0,
    "ma20": 1016.1,
    "ma60": 1133.62,
    "vMa5": 1401,
    "vMa10": 997,
    "maxVol10d": 2087,
    "hasVolumeBurst": true,
    "high5d": 980.0,
    "high10d": 1125.0,
    "high20d": 1250.0,
    "sparkline": [
      990.0,
      1020.0,
      1070.0,
      1060.0,
      1045.0,
      941.0,
      918.0,
      903.0,
      925.0,
      908.0
    ],
    "k5d": [
      {
        "open": 963.0,
        "high": 980.0,
        "low": 941.0,
        "close": 941.0,
        "ma5": 1027.2,
        "ma10": 984.3
      },
      {
        "open": 925.0,
        "high": 938.0,
        "low": 900.0,
        "close": 918.0,
        "ma5": 1006.8,
        "ma10": 981.7
      },
      {
        "open": 928.0,
        "high": 940.0,
        "low": 901.0,
        "close": 903.0,
        "ma5": 973.4,
        "ma10": 981.4
      },
      {
        "open": 910.0,
        "high": 933.0,
        "low": 895.0,
        "close": 925.0,
        "ma5": 946.4,
        "ma10": 981.4
      },
      {
        "open": 925.0,
        "high": 925.0,
        "low": 896.0,
        "close": 908.0,
        "ma5": 919.0,
        "ma10": 978.0
      }
    ],
    "symbol": "5536.TWO",
    "kd": {
      "k": 14.5,
      "d": 23.8,
      "prevK": 18.9,
      "prevD": 28.5,
      "h8": 1125.0,
      "l8": 895.0
    }
  },
  {
    "code": "3455",
    "name": "由田",
    "categories": [
      "ValueTop",
      "MajorBuy",
      "TurnoverRate",
      "MajorBuy3D"
    ],
    "price": 253.0,
    "prevClose": 230.0,
    "open": 232.0,
    "high": 253.0,
    "low": 227.0,
    "volume": 3829,
    "ma5": 226.4,
    "ma10": 208.55,
    "ma20": 192.78,
    "ma60": 220.71,
    "vMa5": 2157,
    "vMa10": 1562,
    "maxVol10d": 3829,
    "hasVolumeBurst": true,
    "high5d": 253.0,
    "high10d": 253.0,
    "high20d": 253.0,
    "sparkline": [
      182.5,
      186.0,
      189.5,
      190.0,
      205.5,
      202.0,
      222.0,
      225.0,
      230.0,
      253.0
    ],
    "k5d": [
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
        "close": 230.0,
        "ma5": 216.9,
        "ma10": 200.0
      },
      {
        "open": 232.0,
        "high": 253.0,
        "low": 227.0,
        "close": 253.0,
        "ma5": 226.4,
        "ma10": 208.55
      }
    ],
    "symbol": "3455.TWO",
    "kd": {
      "k": 93.0,
      "d": 85.8,
      "prevK": 89.6,
      "prevD": 82.2,
      "h8": 236.5,
      "l8": 180.5
    }
  },
  {
    "code": "3163",
    "name": "波若威",
    "categories": [
      "ValueTop"
    ],
    "price": 733.0,
    "prevClose": 702.0,
    "open": 705.0,
    "high": 733.0,
    "low": 691.0,
    "volume": 1176,
    "ma5": 710.6,
    "ma10": 701.9,
    "ma20": 641.52,
    "ma60": 707.36,
    "vMa5": 3118,
    "vMa10": 4555,
    "maxVol10d": 11130,
    "hasVolumeBurst": true,
    "high5d": 740.0,
    "high10d": 757.0,
    "high20d": 757.0,
    "sparkline": [
      657.0,
      722.0,
      710.0,
      671.0,
      706.0,
      683.0,
      718.0,
      717.0,
      702.0,
      733.0
    ],
    "k5d": [
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
        "close": 702.0,
        "ma5": 705.2,
        "ma10": 688.4
      },
      {
        "open": 705.0,
        "high": 733.0,
        "low": 691.0,
        "close": 733.0,
        "ma5": 710.6,
        "ma10": 701.9
      }
    ],
    "symbol": "3163.TWO",
    "kd": {
      "k": 71.8,
      "d": 72.6,
      "prevK": 71.2,
      "prevD": 73.0,
      "h8": 757.0,
      "l8": 668.0
    }
  },
  {
    "code": "6584",
    "name": "南俊國際",
    "categories": [
      "ValueTop"
    ],
    "price": 596.0,
    "prevClose": 605.0,
    "open": 625.0,
    "high": 630.0,
    "low": 595.0,
    "volume": 1032,
    "ma5": 575.8,
    "ma10": 541.35,
    "ma20": 515.98,
    "ma60": 613.11,
    "vMa5": 1190,
    "vMa10": 1090,
    "maxVol10d": 2826,
    "hasVolumeBurst": true,
    "high5d": 656.0,
    "high10d": 656.0,
    "high20d": 656.0,
    "sparkline": [
      475.5,
      487.0,
      500.0,
      550.0,
      522.0,
      538.0,
      543.0,
      597.0,
      605.0,
      596.0
    ],
    "k5d": [
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
        "low": 595.0,
        "close": 605.0,
        "ma5": 561.0,
        "ma10": 526.95
      },
      {
        "open": 625.0,
        "high": 630.0,
        "low": 595.0,
        "close": 596.0,
        "ma5": 575.8,
        "ma10": 541.35
      }
    ],
    "symbol": "6584.TWO",
    "kd": {
      "k": 76.5,
      "d": 74.6,
      "prevK": 80.9,
      "prevD": 73.7,
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
    "price": 30.75,
    "prevClose": 30.4,
    "open": 30.35,
    "high": 30.75,
    "low": 30.25,
    "volume": 4404,
    "ma5": 31.15,
    "ma10": 31.08,
    "ma20": 31.0,
    "ma60": 31.85,
    "vMa5": 7762,
    "vMa10": 6494,
    "maxVol10d": 18393,
    "hasVolumeBurst": true,
    "high5d": 32.35,
    "high10d": 32.35,
    "high20d": 33.6,
    "sparkline": [
      30.45,
      30.5,
      31.0,
      31.4,
      31.7,
      31.8,
      32.1,
      30.7,
      30.4,
      30.75
    ],
    "k5d": [
      {
        "open": 31.5,
        "high": 31.85,
        "low": 31.15,
        "close": 31.8,
        "ma5": 31.28,
        "ma10": 30.85
      },
      {
        "open": 31.9,
        "high": 32.35,
        "low": 31.8,
        "close": 32.1,
        "ma5": 31.6,
        "ma10": 31.02
      },
      {
        "open": 31.7,
        "high": 31.75,
        "low": 30.5,
        "close": 30.7,
        "ma5": 31.54,
        "ma10": 31.04
      },
      {
        "open": 30.65,
        "high": 30.65,
        "low": 30.2,
        "close": 30.4,
        "ma5": 31.34,
        "ma10": 31.03
      },
      {
        "open": 30.35,
        "high": 30.75,
        "low": 30.25,
        "close": 30.75,
        "ma5": 31.15,
        "ma10": 31.08
      }
    ],
    "symbol": "2105.TW",
    "kd": {
      "k": 40.9,
      "d": 53.0,
      "prevK": 48.5,
      "prevD": 59.1,
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
      "SitcaBuy3D"
    ],
    "price": 676.0,
    "prevClose": 615.0,
    "open": 630.0,
    "high": 676.0,
    "low": 625.0,
    "volume": 6364,
    "ma5": 607.2,
    "ma10": 571.0,
    "ma20": 534.58,
    "ma60": 608.39,
    "vMa5": 4086,
    "vMa10": 3385,
    "maxVol10d": 6364,
    "hasVolumeBurst": true,
    "high5d": 676.0,
    "high10d": 676.0,
    "high20d": 676.0,
    "sparkline": [
      502.0,
      533.0,
      547.0,
      546.0,
      546.0,
      538.0,
      578.0,
      629.0,
      615.0,
      676.0
    ],
    "k5d": [
      {
        "open": 546.0,
        "high": 547.0,
        "low": 533.0,
        "close": 538.0,
        "ma5": 542.0,
        "ma10": 509.5
      },
      {
        "open": 546.0,
        "high": 584.0,
        "low": 535.0,
        "close": 578.0,
        "ma5": 551.0,
        "ma10": 520.65
      },
      {
        "open": 585.0,
        "high": 635.0,
        "low": 572.0,
        "close": 629.0,
        "ma5": 567.4,
        "ma10": 538.8
      },
      {
        "open": 623.0,
        "high": 642.0,
        "low": 608.0,
        "close": 615.0,
        "ma5": 581.2,
        "ma10": 552.2
      },
      {
        "open": 630.0,
        "high": 676.0,
        "low": 625.0,
        "close": 676.0,
        "ma5": 607.2,
        "ma10": 571.0
      }
    ],
    "symbol": "3406.TW",
    "kd": {
      "k": 89.3,
      "d": 81.4,
      "prevK": 83.9,
      "prevD": 77.4,
      "h8": 642.0,
      "l8": 508.0
    }
  },
  {
    "code": "2377",
    "name": "微星",
    "categories": [
      "SitcaBuy",
      "MajorBuy",
      "SitcaBuy3D",
      "MajorBuy3D"
    ],
    "price": 149.5,
    "prevClose": 159.0,
    "open": 158.5,
    "high": 158.5,
    "low": 149.5,
    "volume": 18588,
    "ma5": 159.9,
    "ma10": 156.2,
    "ma20": 150.28,
    "ma60": 142.56,
    "vMa5": 29039,
    "vMa10": 22005,
    "maxVol10d": 50805,
    "hasVolumeBurst": true,
    "high5d": 173.5,
    "high10d": 173.5,
    "high20d": 173.5,
    "sparkline": [
      149.5,
      151.0,
      154.0,
      153.0,
      155.0,
      154.0,
      169.0,
      168.0,
      159.0,
      149.5
    ],
    "k5d": [
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
        "low": 158.5,
        "close": 159.0,
        "ma5": 161.0,
        "ma10": 155.55
      },
      {
        "open": 158.5,
        "high": 158.5,
        "low": 149.5,
        "close": 149.5,
        "ma5": 159.9,
        "ma10": 156.2
      }
    ],
    "symbol": "2377.TW",
    "kd": {
      "k": 50.7,
      "d": 68.8,
      "prevK": 76.0,
      "prevD": 77.8,
      "h8": 173.5,
      "l8": 150.0
    }
  },
  {
    "code": "9910",
    "name": "豐泰",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D",
      "SitcaBuy5D"
    ],
    "price": 69.8,
    "prevClose": 69.4,
    "open": 69.4,
    "high": 70.0,
    "low": 68.7,
    "volume": 1887,
    "ma5": 70.36,
    "ma10": 69.6,
    "ma20": 69.24,
    "ma60": 71.81,
    "vMa5": 1596,
    "vMa10": 1328,
    "maxVol10d": 1887,
    "hasVolumeBurst": true,
    "high5d": 73.2,
    "high10d": 73.2,
    "high20d": 73.2,
    "sparkline": [
      67.4,
      67.4,
      69.7,
      69.5,
      70.2,
      71.3,
      71.0,
      70.3,
      69.4,
      69.8
    ],
    "k5d": [
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
        "close": 69.4,
        "ma5": 70.44,
        "ma10": 69.34
      },
      {
        "open": 69.4,
        "high": 70.0,
        "low": 68.7,
        "close": 69.8,
        "ma5": 70.36,
        "ma10": 69.6
      }
    ],
    "symbol": "9910.TW",
    "kd": {
      "k": 53.4,
      "d": 56.9,
      "prevK": 57.1,
      "prevD": 58.7,
      "h8": 73.2,
      "l8": 66.9
    }
  },
  {
    "code": "2486",
    "name": "一詮",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D"
    ],
    "price": 238.0,
    "prevClose": 225.5,
    "open": 223.0,
    "high": 245.0,
    "low": 222.0,
    "volume": 9207,
    "ma5": 231.1,
    "ma10": 228.8,
    "ma20": 218.97,
    "ma60": 242.81,
    "vMa5": 5413,
    "vMa10": 6879,
    "maxVol10d": 11270,
    "hasVolumeBurst": true,
    "high5d": 245.0,
    "high10d": 249.5,
    "high20d": 249.5,
    "sparkline": [
      221.0,
      218.5,
      229.0,
      231.0,
      233.0,
      230.5,
      230.0,
      231.5,
      225.5,
      238.0
    ],
    "k5d": [
      {
        "open": 233.5,
        "high": 235.0,
        "low": 228.5,
        "close": 230.5,
        "ma5": 228.4,
        "ma10": 211.3
      },
      {
        "open": 231.0,
        "high": 236.0,
        "low": 229.5,
        "close": 230.0,
        "ma5": 230.7,
        "ma10": 215.85
      },
      {
        "open": 231.5,
        "high": 241.5,
        "low": 230.0,
        "close": 231.5,
        "ma5": 231.2,
        "ma10": 221.9
      },
      {
        "open": 233.5,
        "high": 236.0,
        "low": 225.5,
        "close": 225.5,
        "ma5": 230.1,
        "ma10": 225.65
      },
      {
        "open": 223.0,
        "high": 245.0,
        "low": 222.0,
        "close": 238.0,
        "ma5": 231.1,
        "ma10": 228.8
      }
    ],
    "symbol": "2486.TW",
    "kd": {
      "k": 61.5,
      "d": 64.2,
      "prevK": 58.4,
      "prevD": 65.5,
      "h8": 249.5,
      "l8": 214.0
    }
  },
  {
    "code": "8422",
    "name": "可寧衛*",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D"
    ],
    "price": 26.45,
    "prevClose": 26.4,
    "open": 26.3,
    "high": 26.5,
    "low": 26.15,
    "volume": 2574,
    "ma5": 26.57,
    "ma10": 26.43,
    "ma20": 26.02,
    "ma60": 27.17,
    "vMa5": 3447,
    "vMa10": 4341,
    "maxVol10d": 6275,
    "hasVolumeBurst": false,
    "high5d": 27.2,
    "high10d": 27.2,
    "high20d": 27.2,
    "sparkline": [
      26.25,
      26.0,
      26.15,
      26.3,
      26.8,
      26.65,
      26.9,
      26.45,
      26.4,
      26.45
    ],
    "k5d": [
      {
        "open": 26.8,
        "high": 26.95,
        "low": 26.55,
        "close": 26.65,
        "ma5": 26.38,
        "ma10": 25.88
      },
      {
        "open": 26.85,
        "high": 27.15,
        "low": 26.6,
        "close": 26.9,
        "ma5": 26.56,
        "ma10": 26.09
      },
      {
        "open": 27.1,
        "high": 27.2,
        "low": 26.4,
        "close": 26.45,
        "ma5": 26.62,
        "ma10": 26.3
      },
      {
        "open": 26.4,
        "high": 26.5,
        "low": 26.2,
        "close": 26.4,
        "ma5": 26.64,
        "ma10": 26.47
      },
      {
        "open": 26.3,
        "high": 26.5,
        "low": 26.15,
        "close": 26.45,
        "ma5": 26.57,
        "ma10": 26.43
      }
    ],
    "symbol": "8422.TW",
    "kd": {
      "k": 61.8,
      "d": 70.6,
      "prevK": 68.6,
      "prevD": 75.0,
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
    "prevClose": 204.5,
    "open": 203.5,
    "high": 204.5,
    "low": 202.0,
    "volume": 2536,
    "ma5": 204.5,
    "ma10": 196.1,
    "ma20": 191.2,
    "ma60": 200.93,
    "vMa5": 3507,
    "vMa10": 3550,
    "maxVol10d": 8213,
    "hasVolumeBurst": true,
    "high5d": 209.0,
    "high10d": 209.0,
    "high20d": 209.0,
    "sparkline": [
      181.0,
      181.5,
      187.5,
      187.5,
      201.0,
      206.0,
      205.0,
      203.0,
      204.5,
      204.0
    ],
    "k5d": [
      {
        "open": 200.0,
        "high": 208.5,
        "low": 200.0,
        "close": 206.0,
        "ma5": 192.7,
        "ma10": 186.9
      },
      {
        "open": 206.0,
        "high": 209.0,
        "low": 204.5,
        "close": 205.0,
        "ma5": 197.4,
        "ma10": 189.35
      },
      {
        "open": 206.0,
        "high": 206.0,
        "low": 202.5,
        "close": 203.0,
        "ma5": 200.5,
        "ma10": 191.8
      },
      {
        "open": 203.0,
        "high": 205.0,
        "low": 202.5,
        "close": 204.5,
        "ma5": 203.9,
        "ma10": 193.95
      },
      {
        "open": 203.5,
        "high": 204.5,
        "low": 202.0,
        "close": 204.0,
        "ma5": 204.5,
        "ma10": 196.1
      }
    ],
    "symbol": "2474.TW",
    "kd": {
      "k": 80.9,
      "d": 75.7,
      "prevK": 80.4,
      "prevD": 73.2,
      "h8": 209.0,
      "l8": 181.5
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
    "price": 37.56,
    "prevClose": 37.85,
    "open": 37.76,
    "high": 37.76,
    "low": 37.49,
    "volume": 3107,
    "ma5": 37.83,
    "ma10": 38.02,
    "ma20": 38.09,
    "ma60": 38.56,
    "vMa5": 1660,
    "vMa10": 1339,
    "maxVol10d": 3107,
    "hasVolumeBurst": true,
    "high5d": 38.02,
    "high10d": 38.43,
    "high20d": 38.51,
    "sparkline": [
      38.09,
      38.37,
      38.34,
      38.07,
      38.15,
      37.9,
      37.92,
      37.93,
      37.85,
      37.56
    ],
    "k5d": [
      {
        "open": 37.98,
        "high": 37.98,
        "low": 37.84,
        "close": 37.9,
        "ma5": 38.17,
        "ma10": 38.12
      },
      {
        "open": 38.02,
        "high": 38.02,
        "low": 37.89,
        "close": 37.92,
        "ma5": 38.08,
        "ma10": 38.08
      },
      {
        "open": 37.9,
        "high": 37.94,
        "low": 37.9,
        "close": 37.93,
        "ma5": 37.99,
        "ma10": 38.09
      },
      {
        "open": 37.97,
        "high": 37.97,
        "low": 37.85,
        "close": 37.85,
        "ma5": 37.95,
        "ma10": 38.06
      },
      {
        "open": 37.76,
        "high": 37.76,
        "low": 37.49,
        "close": 37.56,
        "ma5": 37.83,
        "ma10": 38.02
      }
    ],
    "symbol": "00740B.TWO",
    "kd": {
      "k": 14.5,
      "d": 25.3,
      "prevK": 18.0,
      "prevD": 30.8,
      "h8": 38.43,
      "l8": 37.84
    }
  },
  {
    "code": "3227",
    "name": "原相",
    "categories": [
      "SitcaBuy",
      "SitcaBuy3D"
    ],
    "price": 198.5,
    "prevClose": 198.0,
    "open": 198.5,
    "high": 200.5,
    "low": 196.5,
    "volume": 588,
    "ma5": 202.2,
    "ma10": 204.55,
    "ma20": 199.32,
    "ma60": 213.62,
    "vMa5": 965,
    "vMa10": 1223,
    "maxVol10d": 1909,
    "hasVolumeBurst": false,
    "high5d": 210.5,
    "high10d": 214.5,
    "high20d": 214.5,
    "sparkline": [
      205.5,
      209.5,
      204.0,
      205.5,
      210.0,
      209.0,
      204.0,
      201.5,
      198.0,
      198.5
    ],
    "k5d": [
      {
        "open": 208.0,
        "high": 210.5,
        "low": 205.5,
        "close": 209.0,
        "ma5": 207.6,
        "ma10": 199.85
      },
      {
        "open": 205.0,
        "high": 206.0,
        "low": 202.5,
        "close": 204.0,
        "ma5": 206.5,
        "ma10": 201.75
      },
      {
        "open": 205.5,
        "high": 206.0,
        "low": 200.0,
        "close": 201.5,
        "ma5": 206.0,
        "ma10": 203.8
      },
      {
        "open": 201.5,
        "high": 202.0,
        "low": 198.0,
        "close": 198.0,
        "ma5": 204.5,
        "ma10": 204.4
      },
      {
        "open": 198.5,
        "high": 200.5,
        "low": 196.5,
        "close": 198.5,
        "ma5": 202.2,
        "ma10": 204.55
      }
    ],
    "symbol": "3227.TWO",
    "kd": {
      "k": 35.1,
      "d": 54.8,
      "prevK": 47.1,
      "prevD": 64.7,
      "h8": 214.5,
      "l8": 198.0
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
    "prevClose": 570.0,
    "open": 567.0,
    "high": 573.0,
    "low": 563.0,
    "volume": 645,
    "ma5": 581.4,
    "ma10": 591.2,
    "ma20": 587.7,
    "ma60": 656.6,
    "vMa5": 666,
    "vMa10": 864,
    "maxVol10d": 1435,
    "hasVolumeBurst": false,
    "high5d": 601.0,
    "high10d": 622.0,
    "high20d": 622.0,
    "sparkline": [
      584.0,
      618.0,
      605.0,
      598.0,
      600.0,
      595.0,
      591.0,
      586.0,
      570.0,
      565.0
    ],
    "k5d": [
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
        "low": 569.0,
        "close": 570.0,
        "ma5": 588.4,
        "ma10": 592.3
      },
      {
        "open": 567.0,
        "high": 573.0,
        "low": 563.0,
        "close": 565.0,
        "ma5": 581.4,
        "ma10": 591.2
      }
    ],
    "symbol": "4966.TWO",
    "kd": {
      "k": 30.5,
      "d": 49.4,
      "prevK": 44.1,
      "prevD": 58.9,
      "h8": 622.0,
      "l8": 569.0
    }
  },
  {
    "code": "3450",
    "name": "聯鈞",
    "categories": [
      "SitcaBuy",
      "SitcaBuy5D"
    ],
    "price": 550.0,
    "prevClose": 510.0,
    "open": 510.0,
    "high": 550.0,
    "low": 502.0,
    "volume": 2040,
    "ma5": 513.5,
    "ma10": 496.7,
    "ma20": 454.05,
    "ma60": 490.44,
    "vMa5": 2298,
    "vMa10": 8845,
    "maxVol10d": 22467,
    "hasVolumeBurst": true,
    "high5d": 550.0,
    "high10d": 550.0,
    "high20d": 550.0,
    "sparkline": [
      432.0,
      475.0,
      491.5,
      477.0,
      524.0,
      473.5,
      507.0,
      527.0,
      510.0,
      550.0
    ],
    "k5d": [
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
        "close": 510.0,
        "ma5": 508.3,
        "ma10": 482.6
      },
      {
        "open": 510.0,
        "high": 550.0,
        "low": 502.0,
        "close": 550.0,
        "ma5": 513.5,
        "ma10": 496.7
      }
    ],
    "symbol": "3450.TW",
    "kd": {
      "k": 87.3,
      "d": 81.1,
      "prevK": 81.0,
      "prevD": 78.0,
      "h8": 543.0,
      "l8": 463.5
    }
  },
  {
    "code": "1717",
    "name": "長興",
    "categories": [
      "SitcaBuy",
      "MajorBuy",
      "SitcaBuy5D",
      "MajorBuy3D"
    ],
    "price": 71.8,
    "prevClose": 71.7,
    "open": 71.3,
    "high": 73.6,
    "low": 70.5,
    "volume": 10357,
    "ma5": 74.44,
    "ma10": 70.47,
    "ma20": 65.2,
    "ma60": 71.36,
    "vMa5": 26228,
    "vMa10": 17502,
    "maxVol10d": 44183,
    "hasVolumeBurst": true,
    "high5d": 79.8,
    "high10d": 79.8,
    "high20d": 79.8,
    "sparkline": [
      63.6,
      66.5,
      66.2,
      66.2,
      70.0,
      71.9,
      78.6,
      78.2,
      71.7,
      71.8
    ],
    "k5d": [
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
        "low": 71.5,
        "close": 71.7,
        "ma5": 74.08,
        "ma10": 69.46
      },
      {
        "open": 71.3,
        "high": 73.6,
        "low": 70.5,
        "close": 71.8,
        "ma5": 74.44,
        "ma10": 70.47
      }
    ],
    "symbol": "1717.TW",
    "kd": {
      "k": 69.0,
      "d": 79.1,
      "prevK": 80.4,
      "prevD": 84.2,
      "h8": 79.8,
      "l8": 64.9
    }
  },
  {
    "code": "4749",
    "name": "新應材",
    "categories": [
      "SitcaBuy",
      "SitcaBuy5D"
    ],
    "price": 786.0,
    "prevClose": 787.0,
    "open": 786.0,
    "high": 791.0,
    "low": 780.0,
    "volume": 303,
    "ma5": 796.6,
    "ma10": 797.3,
    "ma20": 775.25,
    "ma60": 889.23,
    "vMa5": 406,
    "vMa10": 640,
    "maxVol10d": 1191,
    "hasVolumeBurst": false,
    "high5d": 824.0,
    "high10d": 832.0,
    "high20d": 840.0,
    "sparkline": [
      778.0,
      794.0,
      823.0,
      809.0,
      786.0,
      803.0,
      809.0,
      798.0,
      787.0,
      786.0
    ],
    "k5d": [
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
        "close": 787.0,
        "ma5": 796.6,
        "ma10": 795.2
      },
      {
        "open": 786.0,
        "high": 791.0,
        "low": 780.0,
        "close": 786.0,
        "ma5": 796.6,
        "ma10": 797.3
      }
    ],
    "symbol": "4749.TWO",
    "kd": {
      "k": 52.9,
      "d": 64.5,
      "prevK": 63.2,
      "prevD": 70.2,
      "h8": 832.0,
      "l8": 764.0
    }
  },
  {
    "code": "00980D",
    "name": "主動聯博投等入息",
    "categories": [
      "SitcaBuy",
      "SitcaBuy5D"
    ],
    "price": 20.3,
    "prevClose": 20.4,
    "open": 20.4,
    "high": 20.4,
    "low": 20.29,
    "volume": 1200,
    "ma5": 20.4,
    "ma10": 20.43,
    "ma20": 20.43,
    "ma60": 20.45,
    "vMa5": 705,
    "vMa10": 631,
    "maxVol10d": 1200,
    "hasVolumeBurst": true,
    "high5d": 20.46,
    "high10d": 20.55,
    "high20d": 20.55,
    "sparkline": [
      20.43,
      20.49,
      20.5,
      20.45,
      20.46,
      20.42,
      20.42,
      20.44,
      20.4,
      20.3
    ],
    "k5d": [
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
        "low": 20.39,
        "close": 20.4,
        "ma5": 20.43,
        "ma10": 20.44
      },
      {
        "open": 20.4,
        "high": 20.4,
        "low": 20.29,
        "close": 20.3,
        "ma5": 20.4,
        "ma10": 20.43
      }
    ],
    "symbol": "00980D.TWO",
    "kd": {
      "k": 24.9,
      "d": 39.9,
      "prevK": 35.5,
      "prevD": 47.4,
      "h8": 20.55,
      "l8": 20.39
    }
  },
  {
    "code": "006201",
    "name": "元大富櫃50",
    "categories": [
      "SitcaBuy",
      "SitcaBuy5D"
    ],
    "price": 44.5,
    "prevClose": 44.95,
    "open": 44.95,
    "high": 44.95,
    "low": 44.04,
    "volume": 171,
    "ma5": 44.84,
    "ma10": 43.79,
    "ma20": 41.79,
    "ma60": 45.6,
    "vMa5": 351,
    "vMa10": 462,
    "maxVol10d": 1083,
    "hasVolumeBurst": false,
    "high5d": 46.5,
    "high10d": 46.5,
    "high20d": 46.5,
    "sparkline": [
      41.2,
      42.42,
      43.66,
      42.6,
      43.85,
      43.8,
      45.26,
      45.67,
      44.95,
      44.5
    ],
    "k5d": [
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
        "low": 44.85,
        "close": 44.95,
        "ma5": 44.71,
        "ma10": 43.33
      },
      {
        "open": 44.95,
        "high": 44.95,
        "low": 44.04,
        "close": 44.5,
        "ma5": 44.84,
        "ma10": 43.79
      }
    ],
    "symbol": "006201.TWO",
    "kd": {
      "k": 75.8,
      "d": 81.1,
      "prevK": 85.9,
      "prevD": 83.7,
      "h8": 46.5,
      "l8": 42.01
    }
  },
  {
    "code": "6138",
    "name": "茂達",
    "categories": [
      "SitcaBuy",
      "SitcaBuy5D"
    ],
    "price": 291.0,
    "prevClose": 295.0,
    "open": 296.0,
    "high": 298.0,
    "low": 286.0,
    "volume": 655,
    "ma5": 293.6,
    "ma10": 290.6,
    "ma20": 294.93,
    "ma60": 330.01,
    "vMa5": 1030,
    "vMa10": 1059,
    "maxVol10d": 1798,
    "hasVolumeBurst": true,
    "high5d": 315.0,
    "high10d": 315.0,
    "high20d": 349.5,
    "sparkline": [
      295.5,
      289.5,
      288.5,
      276.0,
      288.5,
      288.0,
      292.5,
      301.5,
      295.0,
      291.0
    ],
    "k5d": [
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
        "low": 293.0,
        "close": 295.0,
        "ma5": 293.1,
        "ma10": 289.25
      },
      {
        "open": 296.0,
        "high": 298.0,
        "low": 286.0,
        "close": 291.0,
        "ma5": 293.6,
        "ma10": 290.6
      }
    ],
    "symbol": "6138.TWO",
    "kd": {
      "k": 54.0,
      "d": 54.8,
      "prevK": 61.0,
      "prevD": 55.2,
      "h8": 315.0,
      "l8": 275.0
    }
  },
  {
    "code": "00990A",
    "name": "主動元大AI新經濟",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 16.72,
    "prevClose": 16.49,
    "open": 16.53,
    "high": 16.76,
    "low": 16.53,
    "volume": 19369,
    "ma5": 16.32,
    "ma10": 16.08,
    "ma20": 15.82,
    "ma60": 18.24,
    "vMa5": 16612,
    "vMa10": 16088,
    "maxVol10d": 24971,
    "hasVolumeBurst": true,
    "high5d": 16.76,
    "high10d": 16.76,
    "high20d": 17.13,
    "sparkline": [
      15.49,
      16.2,
      15.83,
      15.68,
      16.03,
      15.88,
      15.9,
      16.61,
      16.49,
      16.72
    ],
    "k5d": [
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
        "open": 16.66,
        "high": 16.66,
        "low": 16.45,
        "close": 16.61,
        "ma5": 16.02,
        "ma10": 15.85
      },
      {
        "open": 16.73,
        "high": 16.73,
        "low": 16.47,
        "close": 16.49,
        "ma5": 16.18,
        "ma10": 15.95
      },
      {
        "open": 16.53,
        "high": 16.76,
        "low": 16.53,
        "close": 16.72,
        "ma5": 16.32,
        "ma10": 16.08
      }
    ],
    "symbol": "00990A.TW",
    "kd": {
      "k": 87.8,
      "d": 81.3,
      "prevK": 83.4,
      "prevD": 78.0,
      "h8": 16.73,
      "l8": 15.59
    }
  },
  {
    "code": "1513",
    "name": "中興電",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 171.0,
    "prevClose": 170.0,
    "open": 169.5,
    "high": 172.5,
    "low": 167.0,
    "volume": 3444,
    "ma5": 167.6,
    "ma10": 163.55,
    "ma20": 159.75,
    "ma60": 167.67,
    "vMa5": 6253,
    "vMa10": 4099,
    "maxVol10d": 14984,
    "hasVolumeBurst": true,
    "high5d": 177.0,
    "high10d": 177.0,
    "high20d": 177.0,
    "sparkline": [
      159.0,
      161.0,
      160.5,
      157.5,
      159.5,
      160.5,
      165.5,
      171.0,
      170.0,
      171.0
    ],
    "k5d": [
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
        "close": 170.0,
        "ma5": 165.3,
        "ma10": 162.0
      },
      {
        "open": 169.5,
        "high": 172.5,
        "low": 167.0,
        "close": 171.0,
        "ma5": 167.6,
        "ma10": 163.55
      }
    ],
    "symbol": "1513.TW",
    "kd": {
      "k": 73.4,
      "d": 73.6,
      "prevK": 75.1,
      "prevD": 73.6,
      "h8": 177.0,
      "l8": 157.0
    }
  },
  {
    "code": "00982A",
    "name": "主動群益台灣強棒",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 23.45,
    "prevClose": 23.28,
    "open": 23.38,
    "high": 23.48,
    "low": 23.19,
    "volume": 36476,
    "ma5": 23.05,
    "ma10": 22.7,
    "ma20": 21.87,
    "ma60": 23.24,
    "vMa5": 27639,
    "vMa10": 26942,
    "maxVol10d": 36476,
    "hasVolumeBurst": false,
    "high5d": 23.54,
    "high10d": 23.54,
    "high20d": 23.54,
    "sparkline": [
      21.61,
      22.33,
      22.71,
      22.39,
      22.68,
      22.5,
      22.82,
      23.18,
      23.28,
      23.45
    ],
    "k5d": [
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
        "open": 23.32,
        "high": 23.54,
        "low": 23.18,
        "close": 23.18,
        "ma5": 22.71,
        "ma10": 22.16
      },
      {
        "open": 23.41,
        "high": 23.53,
        "low": 23.21,
        "close": 23.28,
        "ma5": 22.89,
        "ma10": 22.45
      },
      {
        "open": 23.38,
        "high": 23.48,
        "low": 23.19,
        "close": 23.45,
        "ma5": 23.05,
        "ma10": 22.7
      }
    ],
    "symbol": "00982A.TW",
    "kd": {
      "k": 90.7,
      "d": 86.6,
      "prevK": 88.9,
      "prevD": 84.5,
      "h8": 23.54,
      "l8": 21.99
    }
  },
  {
    "code": "00993A",
    "name": "主動安聯台灣",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 13.74,
    "prevClose": 13.66,
    "open": 13.74,
    "high": 13.84,
    "low": 13.64,
    "volume": 7547,
    "ma5": 13.51,
    "ma10": 13.16,
    "ma20": 12.55,
    "ma60": 13.23,
    "vMa5": 7386,
    "vMa10": 6617,
    "maxVol10d": 8887,
    "hasVolumeBurst": true,
    "high5d": 13.84,
    "high10d": 13.84,
    "high20d": 13.84,
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
      13.74
    ],
    "k5d": [
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
        "open": 13.63,
        "high": 13.72,
        "low": 13.5,
        "close": 13.6,
        "ma5": 13.19,
        "ma10": 12.82
      },
      {
        "open": 13.72,
        "high": 13.8,
        "low": 13.63,
        "close": 13.66,
        "ma5": 13.37,
        "ma10": 13.0
      },
      {
        "open": 13.74,
        "high": 13.84,
        "low": 13.64,
        "close": 13.74,
        "ma5": 13.51,
        "ma10": 13.16
      }
    ],
    "symbol": "00993A.TW",
    "kd": {
      "k": 92.4,
      "d": 89.8,
      "prevK": 92.5,
      "prevD": 88.5,
      "h8": 13.8,
      "l8": 12.57
    }
  },
  {
    "code": "3265",
    "name": "台星科",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 170.5,
    "prevClose": 173.0,
    "open": 171.0,
    "high": 175.0,
    "low": 168.0,
    "volume": 836,
    "ma5": 171.8,
    "ma10": 164.55,
    "ma20": 158.75,
    "ma60": 172.27,
    "vMa5": 2140,
    "vMa10": 1597,
    "maxVol10d": 3489,
    "hasVolumeBurst": true,
    "high5d": 190.5,
    "high10d": 190.5,
    "high20d": 190.5,
    "sparkline": [
      155.5,
      155.5,
      157.5,
      153.5,
      164.5,
      159.5,
      175.0,
      181.0,
      173.0,
      170.5
    ],
    "k5d": [
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
        "close": 173.0,
        "ma5": 170.6,
        "ma10": 162.75
      },
      {
        "open": 171.0,
        "high": 175.0,
        "low": 168.0,
        "close": 170.5,
        "ma5": 171.8,
        "ma10": 164.55
      }
    ],
    "symbol": "3265.TWO",
    "kd": {
      "k": 64.6,
      "d": 70.9,
      "prevK": 73.2,
      "prevD": 74.1,
      "h8": 190.5,
      "l8": 152.5
    }
  },
  {
    "code": "00877",
    "name": "復華中國5G",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 39.81,
    "prevClose": 38.41,
    "open": 38.53,
    "high": 40.1,
    "low": 38.53,
    "volume": 3800,
    "ma5": 38.52,
    "ma10": 37.79,
    "ma20": 37.07,
    "ma60": 41.87,
    "vMa5": 3259,
    "vMa10": 4217,
    "maxVol10d": 8466,
    "hasVolumeBurst": true,
    "high5d": 40.1,
    "high10d": 40.1,
    "high20d": 40.69,
    "sparkline": [
      35.93,
      37.12,
      36.87,
      38.66,
      36.72,
      37.42,
      37.9,
      39.07,
      38.41,
      39.81
    ],
    "k5d": [
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
        "close": 38.41,
        "ma5": 37.9,
        "ma10": 37.18
      },
      {
        "open": 38.53,
        "high": 40.1,
        "low": 38.53,
        "close": 39.81,
        "ma5": 38.52,
        "ma10": 37.79
      }
    ],
    "symbol": "00877.TWO",
    "kd": {
      "k": 86.0,
      "d": 78.8,
      "prevK": 82.0,
      "prevD": 75.1,
      "h8": 39.44,
      "l8": 35.16
    }
  },
  {
    "code": "4147",
    "name": "中裕",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 61.6,
    "prevClose": 64.2,
    "open": 65.5,
    "high": 65.5,
    "low": 61.2,
    "volume": 970,
    "ma5": 64.6,
    "ma10": 61.6,
    "ma20": 59.6,
    "ma60": 59.8,
    "vMa5": 2107,
    "vMa10": 1393,
    "maxVol10d": 5207,
    "hasVolumeBurst": true,
    "high5d": 69.8,
    "high10d": 69.8,
    "high20d": 69.8,
    "sparkline": [
      57.6,
      59.1,
      58.5,
      56.8,
      61.0,
      63.5,
      68.5,
      65.2,
      64.2,
      61.6
    ],
    "k5d": [
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
        "close": 64.2,
        "ma5": 64.48,
        "ma10": 61.13
      },
      {
        "open": 65.5,
        "high": 65.5,
        "low": 61.2,
        "close": 61.6,
        "ma5": 64.6,
        "ma10": 61.6
      }
    ],
    "symbol": "4147.TWO",
    "kd": {
      "k": 59.7,
      "d": 66.3,
      "prevK": 70.2,
      "prevD": 69.6,
      "h8": 69.8,
      "l8": 56.4
    }
  },
  {
    "code": "4707",
    "name": "磐亞",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 32.2,
    "prevClose": 31.5,
    "open": 31.25,
    "high": 33.2,
    "low": 31.25,
    "volume": 2811,
    "ma5": 31.83,
    "ma10": 31.57,
    "ma20": 30.48,
    "ma60": 27.75,
    "vMa5": 5872,
    "vMa10": 6093,
    "maxVol10d": 12952,
    "hasVolumeBurst": true,
    "high5d": 34.95,
    "high10d": 34.95,
    "high20d": 36.0,
    "sparkline": [
      28.05,
      30.85,
      33.85,
      31.9,
      31.95,
      30.0,
      33.0,
      32.45,
      31.5,
      32.2
    ],
    "k5d": [
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
        "low": 31.25,
        "close": 31.5,
        "ma5": 31.78,
        "ma10": 30.9
      },
      {
        "open": 31.25,
        "high": 33.2,
        "low": 31.25,
        "close": 32.2,
        "ma5": 31.83,
        "ma10": 31.57
      }
    ],
    "symbol": "4707.TWO",
    "kd": {
      "k": 65.6,
      "d": 66.8,
      "prevK": 70.7,
      "prevD": 67.4,
      "h8": 34.95,
      "l8": 28.8
    }
  },
  {
    "code": "00928",
    "name": "中信上櫃ESG30",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 32.71,
    "prevClose": 33.05,
    "open": 32.95,
    "high": 32.95,
    "low": 32.34,
    "volume": 711,
    "ma5": 32.88,
    "ma10": 32.17,
    "ma20": 30.42,
    "ma60": 34.97,
    "vMa5": 1040,
    "vMa10": 1053,
    "maxVol10d": 1456,
    "hasVolumeBurst": false,
    "high5d": 34.0,
    "high10d": 34.0,
    "high20d": 34.0,
    "sparkline": [
      30.02,
      31.27,
      32.42,
      31.55,
      32.0,
      32.26,
      33.14,
      33.26,
      33.05,
      32.71
    ],
    "k5d": [
      {
        "open": 32.1,
        "high": 32.31,
        "low": 31.6,
        "close": 32.26,
        "ma5": 31.9,
        "ma10": 29.66
      },
      {
        "open": 32.3,
        "high": 33.22,
        "low": 32.3,
        "close": 33.14,
        "ma5": 32.27,
        "ma10": 30.42
      },
      {
        "open": 33.9,
        "high": 34.0,
        "low": 33.22,
        "close": 33.26,
        "ma5": 32.44,
        "ma10": 31.21
      },
      {
        "open": 33.5,
        "high": 33.74,
        "low": 32.76,
        "close": 33.05,
        "ma5": 32.74,
        "ma10": 31.78
      },
      {
        "open": 32.95,
        "high": 32.95,
        "low": 32.34,
        "close": 32.71,
        "ma5": 32.88,
        "ma10": 32.17
      }
    ],
    "symbol": "00928.TWO",
    "kd": {
      "k": 76.4,
      "d": 80.5,
      "prevK": 85.7,
      "prevD": 82.6,
      "h8": 34.0,
      "l8": 30.95
    }
  },
  {
    "code": "6509",
    "name": "聚和",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 46.75,
    "prevClose": 47.4,
    "open": 47.4,
    "high": 47.6,
    "low": 46.5,
    "volume": 698,
    "ma5": 47.87,
    "ma10": 47.17,
    "ma20": 46.17,
    "ma60": 48.82,
    "vMa5": 1019,
    "vMa10": 1013,
    "maxVol10d": 1440,
    "hasVolumeBurst": false,
    "high5d": 49.4,
    "high10d": 49.4,
    "high20d": 49.4,
    "sparkline": [
      44.25,
      45.85,
      47.0,
      47.5,
      47.7,
      47.7,
      48.5,
      49.0,
      47.4,
      46.75
    ],
    "k5d": [
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
        "low": 46.85,
        "close": 47.4,
        "ma5": 48.06,
        "ma10": 46.86
      },
      {
        "open": 47.4,
        "high": 47.6,
        "low": 46.5,
        "close": 46.75,
        "ma5": 47.87,
        "ma10": 47.17
      }
    ],
    "symbol": "6509.TWO",
    "kd": {
      "k": 68.8,
      "d": 77.0,
      "prevK": 82.7,
      "prevD": 81.1,
      "h8": 49.4,
      "l8": 44.9
    }
  },
  {
    "code": "6217",
    "name": "中探針",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 171.0,
    "prevClose": 169.0,
    "open": 172.0,
    "high": 172.0,
    "low": 164.0,
    "volume": 526,
    "ma5": 163.1,
    "ma10": 158.8,
    "ma20": 148.1,
    "ma60": 218.24,
    "vMa5": 707,
    "vMa10": 1144,
    "maxVol10d": 4812,
    "hasVolumeBurst": true,
    "high5d": 172.0,
    "high10d": 173.0,
    "high20d": 185.5,
    "sparkline": [
      134.0,
      147.0,
      161.5,
      165.0,
      165.0,
      153.0,
      154.0,
      168.5,
      169.0,
      171.0
    ],
    "k5d": [
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
        "close": 169.0,
        "ma5": 161.9,
        "ma10": 153.9
      },
      {
        "open": 172.0,
        "high": 172.0,
        "low": 164.0,
        "close": 171.0,
        "ma5": 163.1,
        "ma10": 158.8
      }
    ],
    "symbol": "6217.TWO",
    "kd": {
      "k": 88.2,
      "d": 80.8,
      "prevK": 85.2,
      "prevD": 77.1,
      "h8": 173.0,
      "l8": 138.0
    }
  },
  {
    "code": "6190",
    "name": "萬泰科",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 66.8,
    "prevClose": 67.0,
    "open": 67.0,
    "high": 67.5,
    "low": 66.2,
    "volume": 653,
    "ma5": 67.92,
    "ma10": 67.71,
    "ma20": 67.08,
    "ma60": 76.45,
    "vMa5": 1109,
    "vMa10": 1171,
    "maxVol10d": 1538,
    "hasVolumeBurst": false,
    "high5d": 70.4,
    "high10d": 70.4,
    "high20d": 73.3,
    "sparkline": [
      67.0,
      67.9,
      68.0,
      65.8,
      68.8,
      68.8,
      68.8,
      68.2,
      67.0,
      66.8
    ],
    "k5d": [
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
        "low": 66.6,
        "close": 67.0,
        "ma5": 68.32,
        "ma10": 67.51
      },
      {
        "open": 67.0,
        "high": 67.5,
        "low": 66.2,
        "close": 66.8,
        "ma5": 67.92,
        "ma10": 67.71
      }
    ],
    "symbol": "6190.TWO",
    "kd": {
      "k": 52.2,
      "d": 65.1,
      "prevK": 67.4,
      "prevD": 71.6,
      "h8": 70.4,
      "l8": 65.8
    }
  },
  {
    "code": "8064",
    "name": "東捷",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 103.0,
    "prevClose": 102.5,
    "open": 103.0,
    "high": 105.5,
    "low": 102.0,
    "volume": 1325,
    "ma5": 103.8,
    "ma10": 103.65,
    "ma20": 101.9,
    "ma60": 129.25,
    "vMa5": 2213,
    "vMa10": 2615,
    "maxVol10d": 4604,
    "hasVolumeBurst": true,
    "high5d": 110.5,
    "high10d": 110.5,
    "high20d": 120.0,
    "sparkline": [
      104.0,
      104.0,
      105.5,
      103.0,
      101.0,
      102.5,
      105.5,
      105.5,
      102.5,
      103.0
    ],
    "k5d": [
      {
        "open": 101.5,
        "high": 106.0,
        "low": 99.9,
        "close": 102.5,
        "ma5": 103.2,
        "ma10": 98.09
      },
      {
        "open": 102.5,
        "high": 106.0,
        "low": 102.5,
        "close": 105.5,
        "ma5": 103.5,
        "ma10": 99.86
      },
      {
        "open": 107.0,
        "high": 110.5,
        "low": 104.5,
        "close": 105.5,
        "ma5": 103.5,
        "ma10": 102.05
      },
      {
        "open": 105.5,
        "high": 105.5,
        "low": 102.0,
        "close": 102.5,
        "ma5": 103.4,
        "ma10": 103.11
      },
      {
        "open": 103.0,
        "high": 105.5,
        "low": 102.0,
        "close": 103.0,
        "ma5": 103.8,
        "ma10": 103.65
      }
    ],
    "symbol": "8064.TWO",
    "kd": {
      "k": 56.1,
      "d": 63.8,
      "prevK": 64.4,
      "prevD": 67.7,
      "h8": 110.5,
      "l8": 98.1
    }
  },
  {
    "code": "5314",
    "name": "世紀*",
    "categories": [
      "MajorBuy",
      "MajorBuy3D"
    ],
    "price": 17.8,
    "prevClose": 16.2,
    "open": 17.8,
    "high": 17.8,
    "low": 17.8,
    "volume": 108,
    "ma5": 15.7,
    "ma10": 14.94,
    "ma20": 14.05,
    "ma60": 14.69,
    "vMa5": 7689,
    "vMa10": 9952,
    "maxVol10d": 16488,
    "hasVolumeBurst": false,
    "high5d": 17.8,
    "high10d": 17.8,
    "high20d": 17.8,
    "sparkline": [
      13.57,
      13.66,
      14.31,
      14.43,
      14.99,
      14.7,
      15.03,
      14.75,
      16.2,
      17.8
    ],
    "k5d": [
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
      },
      {
        "open": 17.8,
        "high": 17.8,
        "low": 17.8,
        "close": 17.8,
        "ma5": 15.7,
        "ma10": 14.94
      }
    ],
    "symbol": "5314.TWO",
    "kd": {
      "k": 94.5,
      "d": 88.5,
      "prevK": 91.7,
      "prevD": 85.5,
      "h8": 16.2,
      "l8": 13.47
    }
  },
  {
    "code": "6477",
    "name": "安集",
    "categories": [
      "TurnoverRate"
    ],
    "price": 38.45,
    "prevClose": 38.25,
    "open": 40.15,
    "high": 41.25,
    "low": 37.3,
    "volume": 11450,
    "ma5": 36.14,
    "ma10": 35.63,
    "ma20": 36.3,
    "ma60": 35.38,
    "vMa5": 4144,
    "vMa10": 2761,
    "maxVol10d": 11450,
    "hasVolumeBurst": true,
    "high5d": 41.25,
    "high10d": 41.25,
    "high20d": 45.1,
    "sparkline": [
      36.05,
      36.3,
      35.25,
      34.05,
      33.95,
      34.95,
      34.25,
      34.8,
      38.25,
      38.45
    ],
    "k5d": [
      {
        "open": 33.8,
        "high": 35.2,
        "low": 32.75,
        "close": 34.95,
        "ma5": 34.9,
        "ma10": 34.87
      },
      {
        "open": 34.6,
        "high": 34.8,
        "low": 34.0,
        "close": 34.25,
        "ma5": 34.49,
        "ma10": 34.87
      },
      {
        "open": 34.3,
        "high": 35.85,
        "low": 34.3,
        "close": 34.8,
        "ma5": 34.4,
        "ma10": 35.09
      },
      {
        "open": 35.75,
        "high": 38.25,
        "low": 34.05,
        "close": 38.25,
        "ma5": 35.24,
        "ma10": 35.34
      },
      {
        "open": 40.15,
        "high": 41.25,
        "low": 37.3,
        "close": 38.45,
        "ma5": 36.14,
        "ma10": 35.63
      }
    ],
    "symbol": "6477.TW",
    "kd": {
      "k": 61.1,
      "d": 49.0,
      "prevK": 58.1,
      "prevD": 43.0,
      "h8": 38.25,
      "l8": 32.75
    }
  },
  {
    "code": "6214",
    "name": "精誠",
    "categories": [
      "TurnoverRate"
    ],
    "price": 175.5,
    "prevClose": 172.0,
    "open": 173.0,
    "high": 179.5,
    "low": 173.0,
    "volume": 23584,
    "ma5": 157.9,
    "ma10": 152.9,
    "ma20": 148.55,
    "ma60": 141.62,
    "vMa5": 5652,
    "vMa10": 4065,
    "maxVol10d": 23584,
    "hasVolumeBurst": true,
    "high5d": 179.5,
    "high10d": 179.5,
    "high20d": 179.5,
    "sparkline": [
      150.0,
      153.0,
      145.5,
      146.5,
      144.5,
      143.0,
      142.5,
      156.5,
      172.0,
      175.5
    ],
    "k5d": [
      {
        "open": 142.0,
        "high": 143.0,
        "low": 140.5,
        "close": 143.0,
        "ma5": 146.5,
        "ma10": 147.25
      },
      {
        "open": 143.0,
        "high": 144.0,
        "low": 142.0,
        "close": 142.5,
        "ma5": 144.4,
        "ma10": 147.1
      },
      {
        "open": 156.5,
        "high": 156.5,
        "low": 156.5,
        "close": 156.5,
        "ma5": 146.6,
        "ma10": 148.4
      },
      {
        "open": 172.0,
        "high": 172.0,
        "low": 172.0,
        "close": 172.0,
        "ma5": 151.7,
        "ma10": 150.2
      },
      {
        "open": 173.0,
        "high": 179.5,
        "low": 173.0,
        "close": 175.5,
        "ma5": 157.9,
        "ma10": 152.9
      }
    ],
    "symbol": "6214.TW",
    "kd": {
      "k": 76.6,
      "d": 63.1,
      "prevK": 69.9,
      "prevD": 56.3,
      "h8": 172.0,
      "l8": 140.0
    }
  },
  {
    "code": "2426",
    "name": "鼎元",
    "categories": [
      "TurnoverRate"
    ],
    "price": 73.2,
    "prevClose": 66.6,
    "open": 66.4,
    "high": 73.2,
    "low": 66.0,
    "volume": 24299,
    "ma5": 68.4,
    "ma10": 66.46,
    "ma20": 61.12,
    "ma60": 69.37,
    "vMa5": 17437,
    "vMa10": 17356,
    "maxVol10d": 24299,
    "hasVolumeBurst": true,
    "high5d": 74.5,
    "high10d": 74.5,
    "high20d": 74.5,
    "sparkline": [
      60.8,
      62.5,
      63.9,
      67.8,
      67.6,
      64.7,
      68.9,
      68.6,
      66.6,
      73.2
    ],
    "k5d": [
      {
        "open": 67.0,
        "high": 68.1,
        "low": 64.7,
        "close": 64.7,
        "ma5": 65.3,
        "ma10": 59.06
      },
      {
        "open": 65.0,
        "high": 71.0,
        "low": 65.0,
        "close": 68.9,
        "ma5": 66.58,
        "ma10": 60.92
      },
      {
        "open": 69.3,
        "high": 74.5,
        "low": 68.1,
        "close": 68.6,
        "ma5": 67.52,
        "ma10": 63.04
      },
      {
        "open": 69.3,
        "high": 69.5,
        "low": 65.8,
        "close": 66.6,
        "ma5": 67.28,
        "ma10": 64.67
      },
      {
        "open": 66.4,
        "high": 73.2,
        "low": 66.0,
        "close": 73.2,
        "ma5": 68.4,
        "ma10": 66.46
      }
    ],
    "symbol": "2426.TW",
    "kd": {
      "k": 79.8,
      "d": 77.7,
      "prevK": 74.5,
      "prevD": 76.6,
      "h8": 74.5,
      "l8": 61.1
    }
  },
  {
    "code": "2630",
    "name": "亞航",
    "categories": [
      "TurnoverRate"
    ],
    "price": 52.4,
    "prevClose": 53.1,
    "open": 54.7,
    "high": 56.2,
    "low": 50.5,
    "volume": 12832,
    "ma5": 50.1,
    "ma10": 49.49,
    "ma20": 50.26,
    "ma60": 47.72,
    "vMa5": 4958,
    "vMa10": 3563,
    "maxVol10d": 12832,
    "hasVolumeBurst": true,
    "high5d": 56.2,
    "high10d": 56.2,
    "high20d": 61.2,
    "sparkline": [
      48.95,
      49.9,
      49.0,
      48.2,
      48.3,
      48.8,
      47.9,
      48.3,
      53.1,
      52.4
    ],
    "k5d": [
      {
        "open": 48.05,
        "high": 49.85,
        "low": 46.6,
        "close": 48.8,
        "ma5": 48.84,
        "ma10": 48.34
      },
      {
        "open": 48.8,
        "high": 48.8,
        "low": 47.65,
        "close": 47.9,
        "ma5": 48.44,
        "ma10": 48.32
      },
      {
        "open": 47.9,
        "high": 49.0,
        "low": 47.9,
        "close": 48.3,
        "ma5": 48.3,
        "ma10": 48.56
      },
      {
        "open": 48.7,
        "high": 53.1,
        "low": 47.75,
        "close": 53.1,
        "ma5": 49.28,
        "ma10": 49.04
      },
      {
        "open": 54.7,
        "high": 56.2,
        "low": 50.5,
        "close": 52.4,
        "ma5": 50.1,
        "ma10": 49.49
      }
    ],
    "symbol": "2630.TW",
    "kd": {
      "k": 60.3,
      "d": 50.5,
      "prevK": 60.2,
      "prevD": 45.6,
      "h8": 53.1,
      "l8": 46.6
    }
  },
  {
    "code": "2481",
    "name": "強茂",
    "categories": [
      "TurnoverRate"
    ],
    "price": 144.5,
    "prevClose": 138.0,
    "open": 139.0,
    "high": 150.0,
    "low": 134.0,
    "volume": 23335,
    "ma5": 141.2,
    "ma10": 137.95,
    "ma20": 134.62,
    "ma60": 158.24,
    "vMa5": 22934,
    "vMa10": 23018,
    "maxVol10d": 35784,
    "hasVolumeBurst": true,
    "high5d": 152.5,
    "high10d": 152.5,
    "high20d": 157.5,
    "sparkline": [
      130.0,
      134.0,
      139.0,
      133.0,
      137.5,
      141.5,
      139.0,
      143.0,
      138.0,
      144.5
    ],
    "k5d": [
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
        "low": 136.0,
        "close": 138.0,
        "ma5": 139.8,
        "ma10": 136.4
      },
      {
        "open": 139.0,
        "high": 150.0,
        "low": 134.0,
        "close": 144.5,
        "ma5": 141.2,
        "ma10": 137.95
      }
    ],
    "symbol": "2481.TW",
    "kd": {
      "k": 69.9,
      "d": 71.1,
      "prevK": 70.2,
      "prevD": 71.7,
      "h8": 152.5,
      "l8": 126.5
    }
  },
  {
    "code": "3543",
    "name": "州巧",
    "categories": [
      "TurnoverRate"
    ],
    "price": 42.95,
    "prevClose": 40.1,
    "open": 40.25,
    "high": 44.1,
    "low": 40.25,
    "volume": 5932,
    "ma5": 39.99,
    "ma10": 37.64,
    "ma20": 33.4,
    "ma60": 32.51,
    "vMa5": 2814,
    "vMa10": 2836,
    "maxVol10d": 5932,
    "hasVolumeBurst": true,
    "high5d": 44.1,
    "high10d": 44.1,
    "high20d": 44.1,
    "sparkline": [
      32.85,
      33.3,
      36.6,
      36.0,
      37.75,
      37.1,
      39.7,
      40.1,
      40.1,
      42.95
    ],
    "k5d": [
      {
        "open": 37.75,
        "high": 37.75,
        "low": 35.95,
        "close": 37.1,
        "ma5": 36.15,
        "ma10": 33.7
      },
      {
        "open": 37.55,
        "high": 40.5,
        "low": 37.45,
        "close": 39.7,
        "ma5": 37.43,
        "ma10": 34.94
      },
      {
        "open": 39.7,
        "high": 41.65,
        "low": 39.45,
        "close": 40.1,
        "ma5": 38.13,
        "ma10": 35.94
      },
      {
        "open": 39.9,
        "high": 40.45,
        "low": 39.65,
        "close": 40.1,
        "ma5": 38.95,
        "ma10": 36.65
      },
      {
        "open": 40.25,
        "high": 44.1,
        "low": 40.25,
        "close": 42.95,
        "ma5": 39.99,
        "ma10": 37.64
      }
    ],
    "symbol": "3543.TW",
    "kd": {
      "k": 86.8,
      "d": 85.2,
      "prevK": 85.3,
      "prevD": 84.5,
      "h8": 41.65,
      "l8": 32.85
    }
  },
  {
    "code": "1515",
    "name": "力山",
    "categories": [
      "TurnoverRate"
    ],
    "price": 34.25,
    "prevClose": 33.55,
    "open": 35.7,
    "high": 36.9,
    "low": 33.25,
    "volume": 9521,
    "ma5": 32.15,
    "ma10": 31.33,
    "ma20": 31.95,
    "ma60": 31.05,
    "vMa5": 3223,
    "vMa10": 2058,
    "maxVol10d": 9521,
    "hasVolumeBurst": true,
    "high5d": 36.9,
    "high10d": 36.9,
    "high20d": 45.0,
    "sparkline": [
      28.1,
      30.9,
      31.95,
      30.4,
      31.2,
      31.2,
      31.25,
      30.5,
      33.55,
      34.25
    ],
    "k5d": [
      {
        "open": 31.5,
        "high": 31.7,
        "low": 29.6,
        "close": 31.2,
        "ma5": 31.13,
        "ma10": 29.77
      },
      {
        "open": 31.2,
        "high": 32.3,
        "low": 30.6,
        "close": 31.25,
        "ma5": 31.2,
        "ma10": 30.07
      },
      {
        "open": 31.8,
        "high": 31.8,
        "low": 30.5,
        "close": 30.5,
        "ma5": 30.91,
        "ma10": 30.38
      },
      {
        "open": 31.0,
        "high": 33.55,
        "low": 29.85,
        "close": 33.55,
        "ma5": 31.54,
        "ma10": 30.86
      },
      {
        "open": 35.7,
        "high": 36.9,
        "low": 33.25,
        "close": 34.25,
        "ma5": 32.15,
        "ma10": 31.33
      }
    ],
    "symbol": "1515.TW",
    "kd": {
      "k": 70.1,
      "d": 62.5,
      "prevK": 72.1,
      "prevD": 58.6,
      "h8": 33.55,
      "l8": 29.05
    }
  },
  {
    "code": "3229",
    "name": "晟鈦",
    "categories": [
      "TurnoverRate"
    ],
    "price": 54.2,
    "prevClose": 53.8,
    "open": 54.0,
    "high": 55.1,
    "low": 50.5,
    "volume": 1614,
    "ma5": 53.58,
    "ma10": 50.34,
    "ma20": 45.82,
    "ma60": 44.18,
    "vMa5": 1604,
    "vMa10": 1261,
    "maxVol10d": 2441,
    "hasVolumeBurst": true,
    "high5d": 56.0,
    "high10d": 56.0,
    "high20d": 56.0,
    "sparkline": [
      47.75,
      44.25,
      46.0,
      46.55,
      50.9,
      51.0,
      55.9,
      53.0,
      53.8,
      54.2
    ],
    "k5d": [
      {
        "open": 51.9,
        "high": 51.9,
        "low": 48.45,
        "close": 51.0,
        "ma5": 47.74,
        "ma10": 45.46
      },
      {
        "open": 50.8,
        "high": 56.0,
        "low": 49.7,
        "close": 55.9,
        "ma5": 50.07,
        "ma10": 47.22
      },
      {
        "open": 55.9,
        "high": 55.9,
        "low": 51.4,
        "close": 53.0,
        "ma5": 51.47,
        "ma10": 48.6
      },
      {
        "open": 53.0,
        "high": 54.3,
        "low": 50.6,
        "close": 53.8,
        "ma5": 52.92,
        "ma10": 49.66
      },
      {
        "open": 54.0,
        "high": 55.1,
        "low": 50.5,
        "close": 54.2,
        "ma5": 53.58,
        "ma10": 50.34
      }
    ],
    "symbol": "3229.TW",
    "kd": {
      "k": 85.5,
      "d": 83.5,
      "prevK": 84.9,
      "prevD": 82.6,
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
    "price": 19.2,
    "prevClose": 19.05,
    "open": 19.05,
    "high": 19.65,
    "low": 18.7,
    "volume": 5484,
    "ma5": 19.69,
    "ma10": 20.75,
    "ma20": 20.24,
    "ma60": 18.61,
    "vMa5": 7833,
    "vMa10": 13252,
    "maxVol10d": 25661,
    "hasVolumeBurst": false,
    "high5d": 22.3,
    "high10d": 23.8,
    "high20d": 24.5,
    "sparkline": [
      22.0,
      20.8,
      22.85,
      22.05,
      21.4,
      20.3,
      20.3,
      19.6,
      19.05,
      19.2
    ],
    "k5d": [
      {
        "open": 21.4,
        "high": 22.3,
        "low": 20.1,
        "close": 20.3,
        "ma5": 21.48,
        "ma10": 21.34
      },
      {
        "open": 20.85,
        "high": 20.9,
        "low": 20.1,
        "close": 20.3,
        "ma5": 21.38,
        "ma10": 21.11
      },
      {
        "open": 20.45,
        "high": 20.9,
        "low": 19.5,
        "close": 19.6,
        "ma5": 20.73,
        "ma10": 21.04
      },
      {
        "open": 19.7,
        "high": 19.75,
        "low": 19.05,
        "close": 19.05,
        "ma5": 20.13,
        "ma10": 20.99
      },
      {
        "open": 19.05,
        "high": 19.65,
        "low": 18.7,
        "close": 19.2,
        "ma5": 19.69,
        "ma10": 20.75
      }
    ],
    "symbol": "6226.TW",
    "kd": {
      "k": 16.8,
      "d": 28.4,
      "prevK": 20.3,
      "prevD": 34.2,
      "h8": 23.8,
      "l8": 19.05
    }
  },
  {
    "code": "2493",
    "name": "揚博",
    "categories": [
      "TurnoverRate"
    ],
    "price": 192.0,
    "prevClose": 212.5,
    "open": 200.5,
    "high": 210.0,
    "low": 191.5,
    "volume": 5856,
    "ma5": 224.6,
    "ma10": 220.15,
    "ma20": 213.97,
    "ma60": 224.42,
    "vMa5": 4827,
    "vMa10": 4672,
    "maxVol10d": 6562,
    "hasVolumeBurst": true,
    "high5d": 248.5,
    "high10d": 248.5,
    "high20d": 262.0,
    "sparkline": [
      220.0,
      205.5,
      220.0,
      215.0,
      218.0,
      239.5,
      243.0,
      236.0,
      212.5,
      192.0
    ],
    "k5d": [
      {
        "open": 222.5,
        "high": 239.5,
        "low": 222.5,
        "close": 239.5,
        "ma5": 219.6,
        "ma10": 204.15
      },
      {
        "open": 244.0,
        "high": 248.5,
        "low": 234.5,
        "close": 243.0,
        "ma5": 227.1,
        "ma10": 210.85
      },
      {
        "open": 243.0,
        "high": 245.0,
        "low": 230.0,
        "close": 236.0,
        "ma5": 230.3,
        "ma10": 217.9
      },
      {
        "open": 212.5,
        "high": 218.0,
        "low": 212.5,
        "close": 212.5,
        "ma5": 229.8,
        "ma10": 220.95
      },
      {
        "open": 200.5,
        "high": 210.0,
        "low": 191.5,
        "close": 192.0,
        "ma5": 224.6,
        "ma10": 220.15
      }
    ],
    "symbol": "2493.TW",
    "kd": {
      "k": 43.5,
      "d": 62.3,
      "prevK": 64.8,
      "prevD": 71.7,
      "h8": 248.5,
      "l8": 201.0
    }
  },
  {
    "code": "4540",
    "name": "全球傳動",
    "categories": [
      "TurnoverRate"
    ],
    "price": 61.2,
    "prevClose": 59.7,
    "open": 60.2,
    "high": 65.3,
    "low": 60.2,
    "volume": 5214,
    "ma5": 60.02,
    "ma10": 57.93,
    "ma20": 53.35,
    "ma60": 59.26,
    "vMa5": 3706,
    "vMa10": 5041,
    "maxVol10d": 12921,
    "hasVolumeBurst": true,
    "high5d": 65.3,
    "high10d": 65.3,
    "high20d": 65.3,
    "sparkline": [
      50.0,
      53.6,
      55.8,
      60.0,
      59.8,
      58.3,
      60.6,
      60.3,
      59.7,
      61.2
    ],
    "k5d": [
      {
        "open": 59.6,
        "high": 59.6,
        "low": 57.6,
        "close": 58.3,
        "ma5": 57.5,
        "ma10": 51.9
      },
      {
        "open": 58.3,
        "high": 60.9,
        "low": 58.0,
        "close": 60.6,
        "ma5": 58.9,
        "ma10": 53.46
      },
      {
        "open": 60.9,
        "high": 62.2,
        "low": 59.7,
        "close": 60.3,
        "ma5": 59.8,
        "ma10": 55.27
      },
      {
        "open": 60.0,
        "high": 60.6,
        "low": 59.0,
        "close": 59.7,
        "ma5": 59.74,
        "ma10": 56.71
      },
      {
        "open": 60.2,
        "high": 65.3,
        "low": 60.2,
        "close": 61.2,
        "ma5": 60.02,
        "ma10": 57.93
      }
    ],
    "symbol": "4540.TW",
    "kd": {
      "k": 81.6,
      "d": 82.3,
      "prevK": 86.3,
      "prevD": 82.6,
      "h8": 62.2,
      "l8": 50.6
    }
  },
  {
    "code": "2425",
    "name": "承啟",
    "categories": [
      "TurnoverRate"
    ],
    "price": 38.05,
    "prevClose": 41.1,
    "open": 40.5,
    "high": 40.5,
    "low": 38.05,
    "volume": 4191,
    "ma5": 41.79,
    "ma10": 45.89,
    "ma20": 45.48,
    "ma60": 41.19,
    "vMa5": 6557,
    "vMa10": 8923,
    "maxVol10d": 16690,
    "hasVolumeBurst": true,
    "high5d": 48.85,
    "high10d": 52.9,
    "high20d": 52.9,
    "sparkline": [
      50.2,
      49.1,
      48.15,
      52.9,
      49.55,
      45.95,
      41.9,
      41.95,
      41.1,
      38.05
    ],
    "k5d": [
      {
        "open": 48.25,
        "high": 48.85,
        "low": 44.8,
        "close": 45.95,
        "ma5": 49.13,
        "ma10": 47.8
      },
      {
        "open": 41.6,
        "high": 42.35,
        "low": 41.4,
        "close": 41.9,
        "ma5": 47.69,
        "ma10": 47.57
      },
      {
        "open": 41.75,
        "high": 42.5,
        "low": 41.1,
        "close": 41.95,
        "ma5": 46.45,
        "ma10": 47.5
      },
      {
        "open": 41.95,
        "high": 42.2,
        "low": 41.0,
        "close": 41.1,
        "ma5": 44.09,
        "ma10": 46.91
      },
      {
        "open": 40.5,
        "high": 40.5,
        "low": 38.05,
        "close": 38.05,
        "ma5": 41.79,
        "ma10": 45.89
      }
    ],
    "symbol": "2425.TW",
    "kd": {
      "k": 14.4,
      "d": 32.8,
      "prevK": 21.6,
      "prevD": 42.0,
      "h8": 52.9,
      "l8": 41.0
    }
  },
  {
    "code": "4976",
    "name": "佳凌",
    "categories": [
      "TurnoverRate"
    ],
    "price": 38.7,
    "prevClose": 37.8,
    "open": 37.95,
    "high": 40.8,
    "low": 37.9,
    "volume": 6028,
    "ma5": 37.23,
    "ma10": 36.95,
    "ma20": 35.58,
    "ma60": 35.81,
    "vMa5": 3787,
    "vMa10": 3494,
    "maxVol10d": 6028,
    "hasVolumeBurst": true,
    "high5d": 40.8,
    "high10d": 40.8,
    "high20d": 41.0,
    "sparkline": [
      37.3,
      36.5,
      37.15,
      36.25,
      36.15,
      35.55,
      37.05,
      37.05,
      37.8,
      38.7
    ],
    "k5d": [
      {
        "open": 36.1,
        "high": 36.4,
        "low": 35.55,
        "close": 35.55,
        "ma5": 36.32,
        "ma10": 36.59
      },
      {
        "open": 35.55,
        "high": 37.75,
        "low": 35.0,
        "close": 37.05,
        "ma5": 36.43,
        "ma10": 36.52
      },
      {
        "open": 36.8,
        "high": 38.85,
        "low": 36.3,
        "close": 37.05,
        "ma5": 36.41,
        "ma10": 36.83
      },
      {
        "open": 37.2,
        "high": 40.2,
        "low": 37.2,
        "close": 37.8,
        "ma5": 36.72,
        "ma10": 36.88
      },
      {
        "open": 37.95,
        "high": 40.8,
        "low": 37.9,
        "close": 38.7,
        "ma5": 37.23,
        "ma10": 36.95
      }
    ],
    "symbol": "4976.TW",
    "kd": {
      "k": 52.5,
      "d": 48.0,
      "prevK": 46.9,
      "prevD": 45.7,
      "h8": 40.2,
      "l8": 35.0
    }
  },
  {
    "code": "006204",
    "name": "永豐臺灣加權",
    "categories": [
      "TurnoverRate"
    ],
    "price": 228.8,
    "prevClose": 229.7,
    "open": 229.75,
    "high": 230.4,
    "low": 229.75,
    "volume": 64,
    "ma5": 227.87,
    "ma10": 224.41,
    "ma20": 219.28,
    "ma60": 224.23,
    "vMa5": 31,
    "vMa10": 21,
    "maxVol10d": 82,
    "hasVolumeBurst": true,
    "high5d": 230.4,
    "high10d": 230.4,
    "high20d": 230.4,
    "sparkline": [
      216.0,
      222.25,
      221.75,
      220.7,
      224.1,
      225.2,
      226.15,
      228.2,
      229.7,
      228.8
    ],
    "k5d": [
      {
        "open": 221.8,
        "high": 225.2,
        "low": 221.8,
        "close": 225.2,
        "ma5": 222.8,
        "ma10": 216.12
      },
      {
        "open": 225.3,
        "high": 226.2,
        "low": 225.3,
        "close": 226.15,
        "ma5": 223.58,
        "ma10": 218.87
      },
      {
        "open": 229.2,
        "high": 229.2,
        "low": 228.2,
        "close": 228.2,
        "ma5": 224.87,
        "ma10": 221.52
      },
      {
        "open": 229.6,
        "high": 229.7,
        "low": 229.6,
        "close": 229.7,
        "ma5": 226.67,
        "ma10": 222.95
      },
      {
        "open": 229.75,
        "high": 230.4,
        "low": 229.75,
        "close": 230.1,
        "ma5": 227.87,
        "ma10": 224.41
      }
    ],
    "symbol": "006204.TW",
    "kd": {
      "k": 96.4,
      "d": 92.7,
      "prevK": 96.1,
      "prevD": 90.8,
      "h8": 229.7,
      "l8": 220.15
    }
  },
  {
    "code": "00964",
    "name": "中信亞太高股息",
    "categories": [
      "TurnoverRate"
    ],
    "price": 14.6,
    "prevClose": 14.48,
    "open": 14.54,
    "high": 14.61,
    "low": 14.4,
    "volume": 2844,
    "ma5": 14.46,
    "ma10": 14.26,
    "ma20": 14.03,
    "ma60": 14.16,
    "vMa5": 2132,
    "vMa10": 2100,
    "maxVol10d": 3004,
    "hasVolumeBurst": false,
    "high5d": 14.61,
    "high10d": 14.61,
    "high20d": 14.61,
    "sparkline": [
      13.87,
      14.01,
      14.1,
      14.05,
      14.3,
      14.35,
      14.38,
      14.47,
      14.48,
      14.6
    ],
    "k5d": [
      {
        "open": 14.36,
        "high": 14.37,
        "low": 14.31,
        "close": 14.35,
        "ma5": 14.16,
        "ma10": 13.91
      },
      {
        "open": 14.36,
        "high": 14.46,
        "low": 14.36,
        "close": 14.38,
        "ma5": 14.24,
        "ma10": 14.01
      },
      {
        "open": 14.43,
        "high": 14.55,
        "low": 14.43,
        "close": 14.47,
        "ma5": 14.31,
        "ma10": 14.11
      },
      {
        "open": 14.52,
        "high": 14.54,
        "low": 14.47,
        "close": 14.48,
        "ma5": 14.4,
        "ma10": 14.17
      },
      {
        "open": 14.54,
        "high": 14.61,
        "low": 14.4,
        "close": 14.6,
        "ma5": 14.46,
        "ma10": 14.26
      }
    ],
    "symbol": "00964.TW",
    "kd": {
      "k": 93.1,
      "d": 88.6,
      "prevK": 90.3,
      "prevD": 86.3,
      "h8": 14.55,
      "l8": 13.89
    }
  },
  {
    "code": "00983B",
    "name": "大華優利美公債20",
    "categories": [
      "TurnoverRate"
    ],
    "price": 15.17,
    "prevClose": 15.29,
    "open": 15.2,
    "high": 15.2,
    "low": 15.15,
    "volume": 1383,
    "ma5": 15.29,
    "ma10": 15.37,
    "ma20": 15.49,
    "ma60": 15.63,
    "vMa5": 636,
    "vMa10": 503,
    "maxVol10d": 1383,
    "hasVolumeBurst": true,
    "high5d": 15.36,
    "high10d": 15.56,
    "high20d": 15.8,
    "sparkline": [
      15.4,
      15.54,
      15.51,
      15.36,
      15.42,
      15.3,
      15.36,
      15.31,
      15.29,
      15.17
    ],
    "k5d": [
      {
        "open": 15.32,
        "high": 15.32,
        "low": 15.29,
        "close": 15.3,
        "ma5": 15.43,
        "ma10": 15.47
      },
      {
        "open": 15.34,
        "high": 15.36,
        "low": 15.34,
        "close": 15.36,
        "ma5": 15.39,
        "ma10": 15.43
      },
      {
        "open": 15.32,
        "high": 15.34,
        "low": 15.31,
        "close": 15.31,
        "ma5": 15.35,
        "ma10": 15.41
      },
      {
        "open": 15.35,
        "high": 15.35,
        "low": 15.29,
        "close": 15.29,
        "ma5": 15.34,
        "ma10": 15.39
      },
      {
        "open": 15.2,
        "high": 15.2,
        "low": 15.15,
        "close": 15.17,
        "ma5": 15.29,
        "ma10": 15.37
      }
    ],
    "symbol": "00983B.TWO",
    "kd": {
      "k": 8.5,
      "d": 14.1,
      "prevK": 10.3,
      "prevD": 16.9,
      "h8": 15.56,
      "l8": 15.29
    }
  },
  {
    "code": "6530",
    "name": "創威",
    "categories": [
      "TurnoverRate"
    ],
    "price": 86.7,
    "prevClose": 83.5,
    "open": 84.1,
    "high": 87.6,
    "low": 81.9,
    "volume": 1320,
    "ma5": 84.76,
    "ma10": 81.54,
    "ma20": 75.52,
    "ma60": 87.68,
    "vMa5": 1883,
    "vMa10": 1497,
    "maxVol10d": 2778,
    "hasVolumeBurst": true,
    "high5d": 90.4,
    "high10d": 90.4,
    "high20d": 90.4,
    "sparkline": [
      74.7,
      82.1,
      77.3,
      75.0,
      82.5,
      80.3,
      87.5,
      85.8,
      83.5,
      86.7
    ],
    "k5d": [
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
        "low": 82.9,
        "close": 83.5,
        "ma5": 83.92,
        "ma10": 79.86
      },
      {
        "open": 84.1,
        "high": 87.6,
        "low": 81.9,
        "close": 86.7,
        "ma5": 84.76,
        "ma10": 81.54
      }
    ],
    "symbol": "6530.TWO",
    "kd": {
      "k": 77.5,
      "d": 78.4,
      "prevK": 78.1,
      "prevD": 78.8,
      "h8": 90.4,
      "l8": 74.7
    }
  },
  {
    "code": "6218",
    "name": "豪勉",
    "categories": [
      "TurnoverRate"
    ],
    "price": 37.95,
    "prevClose": 35.6,
    "open": 36.2,
    "high": 38.5,
    "low": 35.55,
    "volume": 2192,
    "ma5": 36.23,
    "ma10": 35.29,
    "ma20": 33.87,
    "ma60": 35.73,
    "vMa5": 928,
    "vMa10": 608,
    "maxVol10d": 2192,
    "hasVolumeBurst": true,
    "high5d": 38.5,
    "high10d": 38.5,
    "high20d": 38.5,
    "sparkline": [
      33.05,
      33.8,
      34.5,
      34.3,
      36.1,
      35.75,
      36.15,
      35.7,
      35.6,
      37.95
    ],
    "k5d": [
      {
        "open": 36.1,
        "high": 37.2,
        "low": 35.6,
        "close": 35.75,
        "ma5": 34.89,
        "ma10": 32.97
      },
      {
        "open": 36.4,
        "high": 37.8,
        "low": 35.45,
        "close": 36.15,
        "ma5": 35.36,
        "ma10": 33.57
      },
      {
        "open": 36.25,
        "high": 36.9,
        "low": 35.65,
        "close": 35.7,
        "ma5": 35.6,
        "ma10": 34.22
      },
      {
        "open": 35.75,
        "high": 36.15,
        "low": 35.4,
        "close": 35.6,
        "ma5": 35.86,
        "ma10": 34.66
      },
      {
        "open": 36.2,
        "high": 38.5,
        "low": 35.55,
        "close": 37.95,
        "ma5": 36.23,
        "ma10": 35.29
      }
    ],
    "symbol": "6218.TWO",
    "kd": {
      "k": 77.8,
      "d": 75.6,
      "prevK": 72.1,
      "prevD": 74.5,
      "h8": 37.8,
      "l8": 33.5
    }
  },
  {
    "code": "00842B",
    "name": "台新美元銀行債",
    "categories": [
      "TurnoverRate"
    ],
    "price": 29.47,
    "prevClose": 29.67,
    "open": 29.67,
    "high": 29.67,
    "low": 29.41,
    "volume": 649,
    "ma5": 29.69,
    "ma10": 29.82,
    "ma20": 29.92,
    "ma60": 30.44,
    "vMa5": 428,
    "vMa10": 382,
    "maxVol10d": 699,
    "hasVolumeBurst": true,
    "high5d": 29.86,
    "high10d": 30.1,
    "high20d": 30.23,
    "sparkline": [
      29.93,
      29.98,
      30.0,
      29.9,
      29.91,
      29.85,
      29.74,
      29.72,
      29.67,
      29.47
    ],
    "k5d": [
      {
        "open": 29.85,
        "high": 29.86,
        "low": 29.75,
        "close": 29.85,
        "ma5": 29.93,
        "ma10": 29.94
      },
      {
        "open": 29.8,
        "high": 29.8,
        "low": 29.71,
        "close": 29.74,
        "ma5": 29.88,
        "ma10": 29.91
      },
      {
        "open": 29.75,
        "high": 29.76,
        "low": 29.7,
        "close": 29.72,
        "ma5": 29.82,
        "ma10": 29.9
      },
      {
        "open": 29.73,
        "high": 29.77,
        "low": 29.65,
        "close": 29.67,
        "ma5": 29.78,
        "ma10": 29.86
      },
      {
        "open": 29.67,
        "high": 29.67,
        "low": 29.41,
        "close": 29.47,
        "ma5": 29.69,
        "ma10": 29.82
      }
    ],
    "symbol": "00842B.TWO",
    "kd": {
      "k": 10.8,
      "d": 16.6,
      "prevK": 11.8,
      "prevD": 19.5,
      "h8": 30.1,
      "l8": 29.65
    }
  },
  {
    "code": "4561",
    "name": "健椿",
    "categories": [
      "TurnoverRate"
    ],
    "price": 50.2,
    "prevClose": 46.1,
    "open": 46.1,
    "high": 50.5,
    "low": 46.1,
    "volume": 1839,
    "ma5": 45.98,
    "ma10": 42.85,
    "ma20": 39.01,
    "ma60": 41.92,
    "vMa5": 950,
    "vMa10": 750,
    "maxVol10d": 1839,
    "hasVolumeBurst": true,
    "high5d": 50.5,
    "high10d": 50.5,
    "high20d": 50.5,
    "sparkline": [
      35.7,
      36.3,
      39.9,
      43.85,
      42.85,
      41.9,
      46.05,
      45.65,
      46.1,
      50.2
    ],
    "k5d": [
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
        "low": 45.0,
        "close": 46.1,
        "ma5": 44.51,
        "ma10": 41.35
      },
      {
        "open": 46.1,
        "high": 50.5,
        "low": 46.1,
        "close": 50.2,
        "ma5": 45.98,
        "ma10": 42.85
      }
    ],
    "symbol": "4561.TWO",
    "kd": {
      "k": 89.9,
      "d": 84.9,
      "prevK": 85.8,
      "prevD": 82.5,
      "h8": 48.2,
      "l8": 35.7
    }
  }
];