/**
 * 台股盤中波段選股工具 (Tool Stock Screener)
 * UI 文字字典與 Single Source of Truth 設定檔 (精簡防折行版)
 */

const UI_STRINGS = {
  // 1. 全站通用與頂部 Header / 工具列
  GENERAL: {
    APP_TITLE: '小幫手',
    APP_SUBTITLE: '雙策略主動濾網 x 多空大盤風控 x 空間純利精算',
    BTN_INITIAL_FETCH: '取得最新行情',
    BTN_FETCH_LIVE: '手動更新',
    BTN_CANCEL_FETCH: '中止',
    BTN_RESET_PARAMS: '重置',
    BTN_VERIFY_POOL: '選股池',
    BTN_AVOID_POOL: '避雷區',
    BTN_AVOID_POOL_TITLE: '查看避雷賣超清單',
    BTN_API_SETTINGS_TITLE: 'API 設定',
    BTN_CALCULATOR_TITLE: '計算機',
    SEARCH_PLACEHOLDER: '搜尋代碼 / 名稱...',
    SORT_DEFAULT: '預設排序',
    SORT_BIAS20_ASC: '20MA 乖離 (低到高)',
    SORT_BIAS20_DESC: '20MA 乖離 (高到低)',
    SORT_PROFIT_DESC: '預期純利 (高到低)',
    SORT_VOLUME_DESC: '成交量 (大到小)',
    MATCH_COUNT_UNIT: (count) => `符合: ${count} 檔`
  },

  // 2. 市場環境多空風控橫幅文字 (極簡版，適配手機)
  MARKET_REGIME: {
    SAFE: {
      title: '🟢 市場多頭順風（偏多安全，可操作）',
      subtitle: '大盤與櫃買站穩均線，多頭結構健康，適合執行低接與爆量操作。'
    },
    NEUTRAL: {
      title: '🟡 市場盤整震盪（建議防守減量）',
      subtitle: '指數回測均線整理，操作宜提高防守意識，縮減持股部位。'
    },
    RISK: {
      title: '🔴 系統避險警戒（嚴格空手觀望）',
      subtitle: '雙指數跌破月線支撐，破線風險極高，強烈建議保留現金。'
    }
  },

  // 3. 選股模式與動態過濾條件說明
  STRATEGY_MODES: {
    LOW_ENTRY: {
      name: '卡位',
      hint: '尋找爆量回檔、腳踩均線的量縮洗盤點 (-0.5% ~ -1.5% 微幅量縮小黑/十字星，浮在均線上)',
      labelVol: '量縮洗盤',
      descVol: '相較 5 日均量萎縮 15% 以上，或相較近 10 日爆量萎縮 50% 以上。',
      labelKd: 'KD 多頭區',
      kdStrict: '(嚴) 30~65',
      kdRelaxed: '(寬) 25~70',
      descKd: '限制 K 處於低/中檔多頭區，且 K 向上穿過 D 或收斂，排除 K > 80 過熱股。',
      labelCandle: '排除長黑倒貨 K 棒',
      descCandle: '過濾開高走低、實體黑 K 下跌超過 1.8% 的弱勢出貨棒。'
    },
    MOMENTUM: {
      name: '動能',
      hint: '尋找盤中帶量突破、實體收紅的多頭攻擊股 (量 > 5日均量且漲幅 >= +1.5%)',
      labelVol: '帶量攻擊 (量 ≥ 5日均量)',
      descVol: '成交量超越 5 日均量（或昨量 1.2 倍），大資金盤中進場拉升。',
      labelKd: 'KD 高檔攻擊區 (65-90)',
      descKd: '限制 K 處於中/高檔黃金交叉區 (65-90)，且動能持續向上。',
      labelCandle: '排除長上影避雷針 K 棒',
      descCandle: '過濾上影線長度超過實體紅 K 一半的開高走低出貨棒。'
    }
  },

  // 4. 通過篩選原因 (極簡標籤化，不折行)
  PASS_REASONS: {
    MA_CONVERGED: '三線糾結',
    MA_BOTH: '雙線站穩',
    MA_STATIONED: '站穩均線',
    VOL_MOMENTUM: '放量攻擊',
    VOL_EXTREME_CONTRACT: '極致量縮',
    VOL_CONTRACT: '量縮洗盤',
    PROFIT_PREFIX: (pct) => `純利+${pct.toFixed(1)}%`,
    FULL_SUMMARY: (maText, volText, profitText) => `乖離適中｜${maText}｜${volText ? volText + '｜' : ''}${profitText}`
  },

  // 5. 未通過篩選原因 (去贅字，直球對決)
  FAILURE_REASONS: {
    DISPOSED: '處置股',
    LIMIT_UP: '漲停鎖死',
    BIAS20_TOO_HIGH: (maxLimit, currVal) => `月線乖離過高 (${currVal > 0 ? '+' : ''}${currVal.toFixed(1)}% > ${maxLimit}%)`,
    BIAS20_INVALID: (minLimit, currVal) => `月線破位 (${currVal > 0 ? '+' : ''}${currVal.toFixed(1)}% < ${minLimit}%)`,
    BIAS5_INVALID: (currVal) => `5MA乖離不符 (${currVal > 0 ? '+' : ''}${currVal.toFixed(1)}%)`,
    VOL_NOT_EXPAND: (ratio) => `未放量 (${ratio.toFixed(1)}x MV5)`,
    VOL_NOT_CONTRACT: (ratioToVMa5) => `未量縮 (量為MV5的 ${ratioToVMa5}%)`,
    NOT_RED_MOMENTUM: (chgPct) => `未收紅或漲幅<1.5% (${chgPct > 0 ? '+' : ''}${chgPct.toFixed(1)}%)`,
    NO_VOL_BURST: (maxRatio) => maxRatio ? `近10日無攻擊量 (${maxRatio.toFixed(1)}x MV5)` : '近10日無攻擊量',
    KD_LOW_ENTRY: (kVal, minK = 30, maxK = 65) => `KD未達標 (K:${kVal} 不在 ${minK}-${maxK})`,
    KD_MOMENTUM: (kVal) => `KD未達高檔區 (K:${kVal} < 65)`,
    CANDLE_MOMENTUM: '避雷針上影線',
    CANDLE_LOW_ENTRY: '長黑倒貨K棒',
    PROFIT_TOO_LOW: (currPct, minReq) => `空間不足 (+${currPct.toFixed(1)}% < ${minReq}%)`,
    MA_NOT_CONVERGED: '三線未糾結',
    MA_NOT_STATIONED: '均線未站穩',
    LIQUIDITY_TOO_LOW: '流動性不足'
  },

  // 6. 避雷區賣超警戒提示文字
  SELL_WARNINGS: {
    ALL: '法人/主力賣超',
    INSTITUTIONAL: '法人賣超',
    FOREIGN_MAJOR: '外資/主力賣超',
    SITCA_MAJOR: '投信/主力賣超',
    FOREIGN: '外資賣超',
    SITCA: '投信賣超',
    MAJOR: '主力賣超'
  },

  // 7. 個股卡片類別標籤
  CATEGORY_TAGS: {
    '0050': '50成分',
    '0051': '51成分',
    'SitcaBuy3D': '投信買3D',
    'SitcaBuy5D': '投信買5D',
    'SitcaBuy': '投信買',
    'ForeignBuy1D': '外資買1D',
    'ForeignBuy3D': '外資買3D',
    'ForeignBuy': '外資買',
    'MajorBuy1D': '主力買1D',
    'MajorBuy3D': '主力買3D',
    'MajorBuy': '主力買',
    'ValueTop': '值大',
    'Top100': '量大',
    'TurnoverRate': '週轉率',
    '半導體': '半導體'
  },

  // 8. ⓘ 說明彈窗
  POPOVERS: {
    infoBias5: '【5MA 短線成本】限制 -3% ~ +5%，確保未破支撐且未追高，屬於安全洗盤區。',
    infoBias20: '【20MA 生命線】下限 -2% 排除破線弱勢股；上限 +8% 避開高檔回吐風險。',
    infoBoth: '【強勢標的】選出雙均線（5MA / 10MA）全在腳下防守的強勢股。',
    infoAny: '【洗盤標的】衝高後回檔，雖跌破 5MA 但有 10MA 支撐，適合低接卡位。',
    infoConvergence: '【均線糾結】5/10/20MA 高度重疊，籌碼沉澱，一旦突破易有行情。',
    infoMinVolume: '【流動性防護】過濾冷門小盤股，確保零股與盤中交易流暢不卡單。',
    infoRedCandle: '【實質動能】收紅 K 且漲幅 ≥ +1.5%，確保為實質買盤突破。',
    infoVolBurst: '【辨識主力】過去 10 日內須有單日量 ≥ 5日均量 1.5 倍，過濾無人關注冷門股。',
    infoNotLimitUp: '【排除漲停】已漲停鎖死股票無法買進卡位，排除以聚焦實質標的。',
    infoNotDisposed: '【排除處置】處置股限制撮合且波動大，排除以控制風險。',
    infoNetProfit: '試算現價與第一道天花板空間，扣除 0.58% 摩擦成本後之純利。',
    infoBbandUpper: '股價常態波動上限，碰觸時易遇阻力，適合作為第一道停利點。'
  },

  // 9. 選股池 Modal 頁籤說明
  POOL_MODAL_NOTES: {
    noteTop100: '掌握市場最新人氣與流動性。',
    noteValueTop: '掌握大資金與中高價股停泊處。',
    noteSitcaBuy: '投信買超：3D 抓起漲發動，5D 抓連續鎖碼。',
    noteForeignBuy: '外資買超：1D 抓即時翻多，3D 抓波段佈局。',
    noteMajorBuy: '主力買超：1D 抓大戶敲進，3D 抓連續吃貨。'
  },

  // 10. 空間與風控全貌 Modal 文字對照 (Single Source of Truth)
  RISK_CEILING_MODAL: {
    TITLE_RATING: '下層防守與預期風報比 (R/R Ratio)',
    CURRENT_PRICE_LABEL: '現價 (進場基準)',
    LABEL_STOP_LOSS: '建議停損點位',
    LABEL_MAX_RISK: '最大預期虧損',
    LABEL_RR_RATIO: '預期風報比：',
    FRICTION_COST_NOTE: '(已扣除 0.58% 摩擦成本)',
    STOP_LOSS_LOW_ENTRY: '【低接防守】5MA 或前日最低價',
    STOP_LOSS_MOMENTUM: '【突破防守】當日實體紅 K 中關價',
    TYPE_HIGH_5D: '5日最高價',
    TYPE_HIGH_10D: '10日最高價',
    TYPE_HIGH_20D: '20日最高價',
    TYPE_LOW_5D: '5日最低價',
    TYPE_LOW_10D: '10日最低價',
    TYPE_LOW_20D: '20日最低價',
    TYPE_MA5: '5日線 (5MA)',
    TYPE_MA10: '10日線 (10MA)',
    TYPE_MA20: '20日線 (20MA)',
    TYPE_MA60: '季線 (60MA)',
    TYPE_INTEGER: '整數關卡價',
    TYPE_BB_UPPER: '布林上限',
    TYPE_BB_LOWER: '布林下限',
    TYPE_LIMIT_UP: '漲停價天花板',
    TAG_CLOSEST: '最近',
    NO_MATCH_REASON: '未達波段標準'
  }
};
