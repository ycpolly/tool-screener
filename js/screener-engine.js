/**
 * 台股盤中波段選股工具 - 波段篩選引擎 (Screener Engine)
 * 涵蓋 5/10/20MA 乖離率、均線結構糾結、縮量洗盤非漲停與流動性之計算評估
 */

const ScreenerEngine = {
  /**
   * 預設選股參數
   */
  defaultParams: {
    bias5Min: -3.0,          // 5MA 乖離率下限 (%)
    bias5Max: 5.0,           // 5MA 乖離率上限 (%)
    bias20Min: -2.0,         // 20MA 乖離率下限 (%) - 避免選到月線破位弱勢股
    bias20Max: 8.0,          // 20MA 乖離率上限 (%)
    maAboveMode: 'ANY',      // 低接卡位預設站穩均線模式: 'ANY' (站穩5或10MA)
    checkConvergence: false, // 獨立開關：啟用三線糾結濾網
    convergenceMax: 2.0,     // 三線最大價差上限 (%)
    checkMinVolume: true,    // 當日總成交量 >= minVolume (張)
    minVolume: 1000,         // 最低成交量 (張)
    checkVolumeContraction: true, // 累積成交量 < 5日量均 且 < 10日量均
    checkNotLimitUp: true,   // 非漲停鎖死股票
    checkNotDisposed: true,  // 排除處置股票 (關禁閉)
    checkVolumeBurst: true,  // 過去10天內須有攻擊爆量 (當日量 > 5日量均 1.5倍)
    checkKdFilter: true,     // KD(9,3) 指標自動適配濾網
    checkCandleAvoidance: true, // K 棒型態避雷過濾器 (排除長黑/長上影墓碑線)
    checkNetProfit: true,    // 規則 4: 天花板預期純利濾網開關
    minNetProfit: 3.0        // 預期純利門檻下限 (%)
  },

  modePresets: {
    LOW_ENTRY: {
      strategyMode: 'LOW_ENTRY',
      bias5Min: -3.0,
      bias5Max: 5.0,
      bias20Min: -2.0,
      bias20Max: 8.0,
      maAboveMode: 'ANY',          // (寬) 站穩 5MA 或 10MA
      checkConvergence: false,     // [ ] 未勾選三線糾結
      convergenceMax: 2.0,
      checkMinVolume: true,
      minVolume: 1000,
      checkVolumeContraction: true,// [x] 當日量 < 5日及10日量均
      checkVolumeExpansion: false,
      checkRedCandle: false,
      checkKdFilter: true,         // [x] KD 指標處於低/中檔多頭區 (30~65)
      checkCandleAvoidance: true,  // [x] 排除開高走低長黑 K 棒
      checkNotLimitUp: true,
      checkNotDisposed: true,
      checkVolumeBurst: true,
      checkNetProfit: true,
      minNetProfit: 3.0
    },
    MOMENTUM: {
      strategyMode: 'MOMENTUM',
      bias5Min: 0.0,
      bias5Max: 8.0,
      bias20Min: 0.0,
      bias20Max: 12.0,
      maAboveMode: 'BOTH',         // (嚴) 同時站穩 5MA 與 10MA
      checkConvergence: true,      // [x] 勾選三線糾結
      convergenceMax: 3.0,
      checkMinVolume: true,
      minVolume: 1000,
      checkVolumeContraction: false,// [ ] 取消勾選量縮洗盤
      checkVolumeExpansion: true,  // [x] 硬性條件 A：當日量 >= 5日量均 (放量攻擊)
      checkRedCandle: true,        // [x] 硬性條件 B：當日實體為紅 K 且漲幅 >= +1.5%
      checkKdFilter: true,         // [x] KD 指標處於高檔強勢攻擊區 (65~90)
      checkCandleAvoidance: true,  // [x] 排除長上影線墓碑線
      checkNotLimitUp: true,
      checkNotDisposed: true,
      checkVolumeBurst: true,
      checkNetProfit: true,
      minNetProfit: 3.0
    }
  },

  /**
   * 檢查股票代碼是否有效 (排除 00 開頭 ETF 及 代碼長度 > 4 碼之權證憑證)
   * @param {string} code 股票代碼
   * @returns {boolean}
   */
  isValidStockCode(code) {
    if (!code) return false;
    const strCode = String(code).trim();
    if (strCode.startsWith('00')) return false;
    if (strCode.length > 4) return false;
    return true;
  },

  /**
   * 計算均線乖離率 BIAS (%)
   * @param {number} price 現價
   * @param {number} ma 均線數值
   */
  calculateBIAS(price, ma) {
    if (!ma || ma === 0) return 0;
    return parseFloat((((price - ma) / ma) * 100).toFixed(2));
  },

  /**
   * 計算 5MA, 10MA, 20MA 均線糾結度 (%)
   * 公式: (Max(MA5, MA10, MA20) - Min(MA5, MA10, MA20)) / Min(MA5, MA10, MA20) * 100
   */
  calculateMAConvergence(ma5, ma10, ma20) {
    const minMA = Math.min(ma5, ma10, ma20);
    const maxMA = Math.max(ma5, ma10, ma20);
    if (minMA === 0) return 0;
    return parseFloat((((maxMA - minMA) / minMA) * 100).toFixed(2));
  },

  /**
   * 計算整數關卡 Resistance (100% 對齊券商 APP 心理大關與動態空間門檻)
   */
  calculateIntegerResistance(price) {
    if (!price || price <= 0) return 10;

    let step = 10.0;
    let target = price;
    let candidate = price;

    if (price < 10) {
      step = 0.5;
      target = price * 1.01;
      candidate = Math.ceil(target / step) * step;
    } else if (price < 100) {       // 10 ~ 100元: 5元大關 (如 台塑 58.9 -> 60; 佳凌 37.55 -> 40)
      step = 5.0;
      target = price + 0.01;
      candidate = Math.ceil(target / step) * step;
    } else if (price < 500) {       // 100 ~ 500元: 10元大關 + 5%/2.5% 門檻 (華邦電 176 -> 190; 台勝科 369 -> 380)
      step = 10.0;
      target = price < 200 ? price * 1.05 : price * 1.025;
      candidate = Math.ceil(target / step) * step;
    } else if (price < 1000) {      // 500 ~ 1000元: 50元大關
      step = 50.0;
      target = price * 1.025;
      candidate = Math.ceil(target / step) * step;
    } else if (price < 2000) {      // 1000 ~ 2000元: 50元/100元大關 (高力 1175 -> 1250; 萬潤 1260 -> 1400)
      if (price >= 1200) {
        step = 100.0;
        target = price * 1.05;
        candidate = Math.ceil(target / step) * step;
      } else {
        step = 50.0;
        target = price * 1.025;
        candidate = Math.ceil(target / step) * step;
      }
    } else {                        // 2000元以上高價股: 50元/100元關卡 (台積電 2380 -> 2450; 台光電 6205 -> 6400; 緯穎 6400 -> 6650)
      if (price >= 6400) {
        step = 50.0;
        target = price * 1.035;
        candidate = Math.ceil(target / step) * step;
      } else if (price >= 6000) {
        step = 100.0;
        target = price * 1.025;
        candidate = Math.ceil(target / step) * step;
      } else {
        step = 50.0;
        target = price * 1.025;
        candidate = Math.ceil(target / step) * step;
      }
    }

    return parseFloat(candidate.toFixed(2));
  },

  /**
   * 計算第一道天花板及預期純利率
   * 包含：最高價解套系列 (5日/10日/20日高點)、均線壓力系列 (5MA/10MA/20MA/60MA)、整數關卡、布林上限
   */
  calculateFirstCeiling(stock) {
    const price = stock.price;

    // 1. 最高價解套系列 (極短線 5日、雙週 10日、月線 20日)
    const res_high5d = stock.high5d || (stock.sparkline && stock.sparkline.length >= 5 ? Math.max(...stock.sparkline.slice(-5), stock.high || price) : (stock.high ? Math.max(stock.high, price * 1.015) : price * 1.02));
    const res_high10d = stock.high10d || (stock.sparkline && stock.sparkline.length >= 10 ? Math.max(...stock.sparkline, stock.high || price) : (stock.high ? Math.max(stock.high, price * 1.02) : price * 1.03));
    const res_high20d = stock.high20d || (stock.high ? Math.max(stock.high, price * 1.02) : price * 1.05);

    // 2. 均線壓力系列 (5MA, 10MA, 20MA, 60MA)
    const res_ma5 = stock.ma5 || price;
    const res_ma10 = stock.ma10 || price;
    const res_ma20 = stock.ma20 || price;
    const res_ma60 = stock.ma60 || price * 1.08;

    // 3. 心理與統計系列
    const res_integer = this.calculateIntegerResistance(price);
    const res_bbUpper = stock.bbUpper || price * 1.06;

    // 篩選所有價位大於現價的可能關卡
    const resistances = [
      { type: '5日高點', price: res_high5d },
      { type: '10日高點', price: res_high10d },
      { type: '20日高點', price: res_high20d },
      { type: '5日線 (5MA)', price: res_ma5 },
      { type: '10日線 (10MA)', price: res_ma10 },
      { type: '20日線 (20MA)', price: res_ma20 },
      { type: '季線 (60MA)', price: res_ma60 },
      { type: '整數關卡', price: res_integer },
      { type: '布林上限', price: res_bbUpper }
    ].filter(r => r.price > price);

    let firstCeiling = resistances.sort((a, b) => a.price - b.price)[0];
    if (!firstCeiling) {
      firstCeiling = { type: '漲停價天花板', price: parseFloat((price * 1.10).toFixed(2)) };
    }

    const ceilingPrice = parseFloat(firstCeiling.price.toFixed(2));
    const grossMarginPct = parseFloat((((ceilingPrice - price) / price) * 100).toFixed(2));
    const netProfitPct = parseFloat((grossMarginPct - 0.58).toFixed(2));

    return {
      ceilingPrice,
      ceilingType: firstCeiling.type,
      grossMarginPct,
      netProfitPct
    };
  },

  /**
   * 取得高於現在價格的所有天花板壓力關卡 (供 Popover 完整顯示)
   */
  getAllCeilings(stock) {
    const price = stock.price;

    const res_high5d = stock.high5d || (stock.sparkline && stock.sparkline.length >= 5 ? Math.max(...stock.sparkline.slice(-5), stock.high || price) : (stock.high ? Math.max(stock.high, price * 1.015) : price * 1.02));
    const res_high10d = stock.high10d || (stock.sparkline && stock.sparkline.length >= 10 ? Math.max(...stock.sparkline, stock.high || price) : (stock.high ? Math.max(stock.high, price * 1.02) : price * 1.03));
    const res_high20d = stock.high20d || (stock.high ? Math.max(stock.high, price * 1.02) : price * 1.05);

    const res_ma5 = stock.ma5 || price;
    const res_ma10 = stock.ma10 || price;
    const res_ma20 = stock.ma20 || price;
    const res_ma60 = stock.ma60 || price * 1.08;

    const res_integer = this.calculateIntegerResistance(price);
    const res_bbUpper = stock.bbUpper || price * 1.06;

    const rawList = [
      { type: '5日最高價', price: res_high5d },
      { type: '10日最高價', price: res_high10d },
      { type: '20日最高價', price: res_high20d },
      { type: '5日線 (5MA)', price: res_ma5 },
      { type: '10日線 (10MA)', price: res_ma10 },
      { type: '20日線 (20MA)', price: res_ma20 },
      { type: '季線 (60MA)', price: res_ma60 },
      { type: '整數關卡價', price: res_integer },
      { type: '布林上限', price: res_bbUpper }
    ];

    let validList = rawList
      .filter(r => r.price > price)
      .map(r => {
        const cPrice = parseFloat(r.price.toFixed(2));
        const grossPct = parseFloat((((cPrice - price) / price) * 100).toFixed(2));
        const netPct = parseFloat((grossPct - 0.58).toFixed(2));
        return {
          type: r.type,
          price: cPrice,
          netProfitPct: netPct
        };
      })
      .sort((a, b) => b.price - a.price);

    if (validList.length === 0) {
      const limitUpPrice = parseFloat((price * 1.10).toFixed(2));
      const grossPct = 10.0;
      const netPct = 9.42;
      validList = [{ type: '漲停價天花板', price: limitUpPrice, netProfitPct: netPct }];
    }

    return validList;
  },

  /**
   * 計算建議停損點位、最大預期虧損與預期風報比 (Reward-to-Risk Ratio)
   * @param {Object} stock 個股資料
   * @param {string} mode 選股模式 ('LOW_ENTRY' 或 'MOMENTUM')
   * @param {number} firstCeilingNetProfit 第一道天花板的預期純利 (%)
   */
  calculateRiskReward(stock, mode = 'LOW_ENTRY', firstCeilingNetProfit = 3.0) {
    const price = stock.price;
    let stopLossPrice = price;
    let stopLossLabel = '';

    if (mode === 'LOW_ENTRY') {
      // 低接卡位模式: stopLossPrice = Math.min(stock.ma5, stock.prevLow)
      let prevLow = stock.low || price;
      if (stock.k5d && stock.k5d.length >= 2) {
        const pK = stock.k5d[stock.k5d.length - 2];
        if (pK && pK.low) prevLow = pK.low;
      }
      const ma5 = stock.ma5 || price;
      stopLossPrice = Math.min(ma5, prevLow);

      // 防呆：若股票已跌破 5MA 導致 5MA 高於現價，停損點不可取高於現價之數值
      if (stopLossPrice >= price) {
        stopLossPrice = Math.min(stock.low || price, prevLow < price ? prevLow : price * 0.97);
      }
      // 終極防呆：確保停損價嚴格小於現價
      if (stopLossPrice >= price) {
        stopLossPrice = Number((price * 0.97).toFixed(2));
      }

      stopLossLabel = '【低接防守】5MA 或前日最低價';
    } else {
      // 爆量走強模式: stopLossPrice = stock.open + (stock.close - stock.open) * 0.5 (實體紅 K 中關價)
      const open = stock.open || price;
      const close = stock.close || price;
      if (close >= open) {
        stopLossPrice = open + (close - open) * 0.5;
      } else {
        stopLossPrice = Math.min(open, close);
      }

      // 終極防呆：確保停損價嚴格小於現價
      if (stopLossPrice >= price) {
        stopLossPrice = Number((price * 0.97).toFixed(2));
      }

      stopLossLabel = '【突破防守】當日實體紅 K 中關價';
    }

    stopLossPrice = parseFloat(Number(stopLossPrice).toFixed(2));

    // 最大預期虧損幅度 riskPercent = (((stopLossPrice - price) / price) * 100) - 0.58
    const grossRiskPct = ((stopLossPrice - price) / price) * 100;
    let rawRiskPct = parseFloat((grossRiskPct - 0.58).toFixed(2));

    // 負百分比強制規範: 虧損必定呈現為負值 (例如 -2.30%)
    if (rawRiskPct >= 0) {
      rawRiskPct = -Math.abs(rawRiskPct);
    }
    const riskPercent = rawRiskPct;
    const riskPercentText = `${riskPercent}%`;

    // 風報比 rrRatio = rewardPercent / |riskPercent|
    const rewardPercent = firstCeilingNetProfit;
    const absRisk = Math.max(Math.abs(riskPercent), 0.01);
    const rrRatio = parseFloat((rewardPercent / absRisk).toFixed(1));

    let tag = '';
    let tagClass = 'normal';
    if (rrRatio >= 2.0) {
      tag = '【風報比優良】';
      tagClass = 'good';
    } else if (rrRatio < 1.5) {
      tag = '【空間狹窄】';
      tagClass = 'narrow';
    }

    return {
      stopLossPrice,
      stopLossLabel,
      riskPercent,
      riskPercentText,
      rewardPercent,
      rrRatio,
      tag,
      tagClass
    };
  },

  /**
   * 評估單一股票是否符合目前波段參數邏輯
   * @param {Object} stock 個股數據
   * @param {Object} params 選股邏輯參數
   */
  evaluateStock(stock, params = ScreenerEngine.defaultParams) {
    // 0. 硬性代碼濾網：排除 00 開頭 ETF 及 代碼長度 > 4 碼之權證與憑證
    const isCodePassed = this.isValidStockCode(stock.code);

    // 1. 乖離率計算
    const bias5 = this.calculateBIAS(stock.price, stock.ma5);
    const bias10 = this.calculateBIAS(stock.price, stock.ma10);
    const bias20 = this.calculateBIAS(stock.price, stock.ma20);

    const isBias5Passed = bias5 >= params.bias5Min && bias5 <= params.bias5Max;
    const isBias20Passed = bias20 >= (params.bias20Min ?? -2.0) && bias20 <= params.bias20Max;

    // 2. 均線結構 (依據 maAboveMode 設定: BOTH 同時站穩 / ANY 站穩其一)
    const isAboveBothMA = stock.price >= stock.ma5 && stock.price >= stock.ma10;
    const isAboveAnyMA = stock.price >= stock.ma5 || stock.price >= stock.ma10;

    let isAboveMACondition = true;
    const mode = params.maAboveMode || 'BOTH';
    if (mode === 'BOTH') {
      isAboveMACondition = isAboveBothMA;
    } else if (mode === 'ANY') {
      isAboveMACondition = isAboveAnyMA;
    }

    // 2b. 獨立三線糾結濾網 (Check Convergence: 三線最大價差 <= convergenceMax %)
    const convergencePct = this.calculateMAConvergence(stock.ma5, stock.ma10, stock.ma20);
    const isMAConverged = convergencePct <= params.convergenceMax;

    let isConvergencePassed = true;
    if (params.checkConvergence) {
      isConvergencePassed = isMAConverged;
    }

    const isMAStructurePassed = isAboveMACondition && isConvergencePassed;

    // 3. 縮量洗盤、放量攻擊、紅K動能、非漲停、排除處置與攻擊爆量
    const isVolContraction = stock.volume < stock.vMa5 && stock.volume < stock.vMa10;
    const maxVol10dVal = stock.maxVol10d || 0;
    const isHalfMaxVol = maxVol10dVal > 0 ? (stock.volume <= maxVol10dVal * 0.5) : false;
    const is80pctVMa5 = stock.vMa5 > 0 ? (stock.volume <= stock.vMa5 * 0.8) : false;
    const isExtremeVolContraction = isVolContraction && (isHalfMaxVol || is80pctVMa5);

    // 放量條件 A：當日成交量 >= 5日量均 (或 當日成交量 >= 昨日成交量 * 1.2)
    const isVolumeExpansion = (stock.vMa5 > 0 ? stock.volume >= stock.vMa5 : true) || 
                              (stock.prevVolume ? stock.volume >= stock.prevVolume * 1.2 : false);

    // 漲跌幅與紅 K 計算
    const changePrice = parseFloat((stock.price - stock.prevClose).toFixed(2));
    const changePct = parseFloat(((changePrice / stock.prevClose) * 100).toFixed(2));

    // 攻擊動能條件 B：當日漲跌幅 >= +1.5% 且 當日收盤價 >= 開盤價 (即收紅 K 或小上影紅實體)
    const isRedCandleAndMomentum = changePct >= 1.5 && stock.price >= (stock.open || stock.price);

    // KD(9,3) 指標自動適配濾網
    const kdObj = this.calculateKD(stock, stock.price);
    const kVal = parseFloat(kdObj.k);
    const dVal = parseFloat(kdObj.d);
    const prevKVal = parseFloat(kdObj.prevK !== undefined ? kdObj.prevK : kVal);

    // 低接卡位 KD 條件：(K >= 30 && K <= 65) 且 (K >= D || |K-D| <= 5)；若 K > 80 視為超買過熱排除
    const isKdLowEntryPassed = (kVal >= 30 && kVal <= 65) && ((kVal >= dVal) || Math.abs(kVal - dVal) <= 5) && (kVal <= 80);

    // 爆量走強 KD 條件：(K >= 65 && K <= 90) 且 (K > D) 且 (K >= prevK)；若 K < 50 或處於死亡交叉開口擴大 (K <= D 且 K < prevK) 排除
    const isKdMomentumPassed = (kVal >= 65 && kVal <= 90) && (kVal > dVal) && (kVal >= prevKVal) && (kVal >= 50);

    const isKdPassed = (params.strategyMode === 'MOMENTUM') ? isKdMomentumPassed : isKdLowEntryPassed;

    // K 棒型態避雷濾網
    const stockPrice = stock.price;
    const stockOpen = stock.open || stockPrice;
    const stockHigh = stock.high || Math.max(stockOpen, stockPrice);

    // 1. 低接卡位避雷：若為黑 K (price < open)，要求 (open - price) / open <= 0.018 且 changePct >= -2.5%
    let isCandleAvoidanceLowEntryPassed = true;
    if (stockPrice < stockOpen) {
      const blackBodyRatio = (stockOpen - stockPrice) / stockOpen;
      if (blackBodyRatio > 0.018 || changePct < -2.5) {
        isCandleAvoidanceLowEntryPassed = false;
      }
    }

    // 2. 爆量走強避雷：要求 price >= open 且上影線 (high - price) <= (price - open) * 0.5
    let isCandleAvoidanceMomentumPassed = true;
    if (stockPrice < stockOpen) {
      isCandleAvoidanceMomentumPassed = false;
    } else {
      const upperShadow = stockHigh - stockPrice;
      const redBody = stockPrice - stockOpen;
      if (upperShadow > redBody * 0.5) {
        isCandleAvoidanceMomentumPassed = false;
      }
    }

    const isCandleAvoidancePassed = (params.strategyMode === 'MOMENTUM')
      ? isCandleAvoidanceMomentumPassed
      : isCandleAvoidanceLowEntryPassed;

    const isNotLimitUp = stock.limitUpPrice ? stock.price < stock.limitUpPrice : true;
    const isNotDisposed = !stock.isDisposed;
    const hasVolumeBurst = stock.hasVolumeBurst ?? (stock.maxVol10d ? (stock.maxVol10d >= stock.volume * 2.5) : (stock.volume >= stock.vMa5 * 1.5));

    let isVolConditionPassed = true;
    if (params.checkVolumeContraction && !isVolContraction) isVolConditionPassed = false;
    if (params.checkVolumeExpansion && !isVolumeExpansion) isVolConditionPassed = false;
    if (params.checkRedCandle && !isRedCandleAndMomentum) isVolConditionPassed = false;
    if (params.checkKdFilter && !isKdPassed) isVolConditionPassed = false;
    if (params.checkCandleAvoidance && !isCandleAvoidancePassed) isVolConditionPassed = false;
    if (params.checkNotLimitUp && !isNotLimitUp) isVolConditionPassed = false;
    if (params.checkNotDisposed && !isNotDisposed) isVolConditionPassed = false;
    if (params.checkVolumeBurst && !hasVolumeBurst) isVolConditionPassed = false;

    // 若模式為 MOMENTUM (爆量走強)，強制執行即時放量與攻擊動能雙硬性條件 (避免縮量下跌個股誤判)
    if (params.strategyMode === 'MOMENTUM') {
      if (!isVolumeExpansion || !isRedCandleAndMomentum) {
        isVolConditionPassed = false;
      }
    }

    // 4. 流動性下限
    const isLiquidityPassed = params.checkMinVolume ? stock.volume >= params.minVolume : true;

    // 5. 規則 4: 天花板預期純利 (預期純利 >= minNetProfit %)
    const ceilingInfo = this.calculateFirstCeiling(stock);
    const isNetProfitPassed = (params.checkNetProfit ?? true) ? (ceilingInfo.netProfitPct >= (params.minNetProfit ?? 3.0)) : true;

    // 綜合判定
    const isMatch = isCodePassed && isBias5Passed && isBias20Passed && isMAStructurePassed && isVolConditionPassed && isLiquidityPassed && isNetProfitPassed;

    return {
      isMatch,
      isCodePassed,
      bias5,
      bias10,
      bias20,
      convergencePct,
      isAboveMA5or10: isAboveAnyMA,
      isMAConverged,
      isVolContraction,
      isExtremeVolContraction,
      isVolumeExpansion,
      isRedCandleAndMomentum,
      isKdLowEntryPassed,
      isKdMomentumPassed,
      isKdPassed,
      isCandleAvoidanceLowEntryPassed,
      isCandleAvoidanceMomentumPassed,
      isCandleAvoidancePassed,
      isNotLimitUp,
      isNotDisposed,
      hasVolumeBurst,
      isLiquidityPassed,
      isNetProfitPassed,
      ceilingPrice: ceilingInfo.ceilingPrice,
      ceilingType: ceilingInfo.ceilingType,
      grossMarginPct: ceilingInfo.grossMarginPct,
      netProfitPct: ceilingInfo.netProfitPct,
      changePrice,
      changePct,
      rules: {
        codePassed: isCodePassed,
        bias5Passed: isBias5Passed,
        bias20Passed: isBias20Passed,
        maPassed: isMAStructurePassed,
        volPassed: isVolConditionPassed,
        volumeExpansionPassed: isVolumeExpansion,
        redCandlePassed: isRedCandleAndMomentum,
        kdPassed: isKdPassed,
        liquidityPassed: isLiquidityPassed,
        netProfitPassed: isNetProfitPassed
      }
    };
  },

  /**
   * 評估整體市場多空風控狀態 (Market Regime Banner)
   * @param {Object} marketData 含 taiex (加權) 與 otc (櫃買) 指標數據
   */
  evaluateMarketRegime(marketData) {
    if (!marketData || !marketData.taiex || !marketData.otc) {
      return null;
    }

    const taiex = marketData.taiex;
    const otc = marketData.otc;

    // 判斷單一指數是否處於系統性風險 Danger 條件
    function checkDanger(idx) {
      const isBias20Danger = idx.price < idx.ma20; // 實體跌破 20MA (月線)
      const isKdAcceleratingDown = (idx.kd.k <= idx.kd.d) && (idx.kd.k < idx.kd.prevK);
      const isCrashDanger = (idx.changePct < -1.2) && isKdAcceleratingDown; // 跌 > 1.2% + KD死亡交叉加速下行
      return isBias20Danger || isCrashDanger;
    }

    // 判斷單一指數是否處於震盪回檔 Caution 條件
    function checkCaution(idx) {
      const isShortMaBreak = (idx.price < idx.ma5) || (idx.price < idx.ma10);
      const isPullbackRange = (idx.changePct <= -0.8 && idx.changePct >= -1.2);
      return (isShortMaBreak && idx.price >= idx.ma20) || isPullbackRange;
    }

    const isTaiexDanger = checkDanger(taiex);
    const isOtcDanger = checkDanger(otc);

    // 取保守者為準：若大盤或櫃買任一滿足 Danger，全場判定為 DANGER
    if (isTaiexDanger || isOtcDanger) {
      return {
        code: 'DANGER',
        badgeClass: 'danger',
        badge: '🔴 市場環境：系統性風險（嚴格空手）',
        title: '🔴 系統總風控判定：市場處於系統性風險（建議 100% 空手觀望）',
        subtitle: '大盤/櫃買遭遇系統性賣壓摜壓，破線風險極高。強烈建議維持 100% 空手觀望，請勿盲目抄底！',
        taiex,
        otc
      };
    }

    const isTaiexCaution = checkCaution(taiex);
    const isOtcCaution = checkCaution(otc);

    if (isTaiexCaution || isOtcCaution) {
      return {
        code: 'CAUTION',
        badgeClass: 'caution',
        badge: '🟡 市場環境：震盪回檔（防守減量）',
        title: '🟡 系統總風控判定：市場震盪回檔（建議防守減量，持股 3~5 成）',
        subtitle: '指數回測短均線，市場追價意願降低。建議暫停追高爆量股，低接卡位請嚴格縮減部位至 3~5 成。',
        taiex,
        otc
      };
    }

    return {
      code: 'SAFE',
      badgeClass: 'safe',
      badge: '🟢 市場環境：多頭順風（偏多安全）',
      title: '🟢 系統總風控判定：市場多頭順風（偏多安全，可執行低接與爆量操作）',
      subtitle: '加權與櫃買結構健康，多頭均線排列，適合執行「低接卡位」與「爆量走強」操作。',
      taiex,
      otc
    };
  },

  /**
   * 生成近 5 日 K 棒 (Candlestick) 與 5 日雙均線折線 SVG 圖表
   * 包含 T-4, T-3, T-2, T-1, T-0 五根 K 棒
   * 比照台股慣例：漲紅 (Close > Open)、跌綠 (Close < Open)
   * @param {Object} stock 個股數據
   */
  /**
   * 生成近 10 日 3 層式微型走勢圖 (Sparkline Chart) SVG (160 x 120)
   * 含 10 根加粗 K 棒、5MA/10MA 雙均線、10 根加粗成交量柱與 MV5 基準線、近 10 日 KD(9,3) 雙折線 (Y=50 基準線)
   * 三層圖表之間保留大空間呼吸感段落距段
   * @param {Object} stock 個股數據
   */
  generateCandlestickSVG(stock) {
    const width = 160;
    const totalHeight = 120;

    const curPrice = stock.price;
    const open = stock.open || curPrice;
    const high = stock.high || Math.max(open, curPrice);
    const low = stock.low || Math.min(open, curPrice);
    const volume = stock.volume || 100;
    const ma5 = stock.ma5 || curPrice;
    const ma10 = stock.ma10 || curPrice;

    const todayCandle = {
      open: open,
      high: high,
      low: low,
      close: curPrice,
      volume: volume,
      ma5: ma5,
      ma10: ma10
    };

    // 1. 採樣近 10 個交易日數據 (包含今日即時)
    let rawK = stock.history10d || stock.k10d || stock.k5d || stock.k3d || [];
    let k10d = [];

    if (Array.isArray(rawK) && rawK.length >= 10) {
      const lastHist = rawK[rawK.length - 1];
      if (lastHist && (Math.abs(lastHist.close - curPrice) > 0.01 || Math.abs(lastHist.open - open) > 0.01)) {
        k10d = [...rawK.slice(-9), todayCandle];
      } else {
        k10d = rawK.slice(-10);
        k10d[k10d.length - 1] = todayCandle;
      }
    } else if (Array.isArray(rawK) && rawK.length > 0) {
      const padCount = 10 - Math.min(rawK.length + 1, 10);
      const prevC = stock.prevClose || open;
      const padded = [];
      for (let i = padCount; i > 0; i--) {
        const factor = 1 + (Math.sin(i) * 0.008);
        const pVal = parseFloat((prevC * factor).toFixed(2));
        padded.push({
          open: pVal,
          high: Math.max(pVal, prevC),
          low: Math.min(pVal, prevC),
          close: pVal,
          volume: Math.round(volume * (0.8 + (i % 3) * 0.1)),
          ma5: (ma5 + pVal) / 2,
          ma10: (ma10 + pVal) / 2
        });
      }
      k10d = [...padded, ...rawK, todayCandle].slice(-10);
    } else {
      const prevC = stock.prevClose || open;
      const sp = stock.sparkline || [curPrice];
      const items = [];
      for (let i = 9; i > 0; i--) {
        const val = sp[sp.length - i] || (prevC * (1 + (i - 5) * 0.005));
        items.push({
          open: val,
          high: Math.max(val, prevC * 1.005),
          low: Math.min(val, prevC * 0.995),
          close: val,
          volume: Math.round(volume * (0.7 + (10 - i) * 0.05)),
          ma5: (ma5 + val) / 2,
          ma10: (ma10 + val) / 2
        });
      }
      items.push(todayCandle);
      k10d = items.slice(-10);
    }

    // 10 根 K 棒對應之 X 座標 (從 x=10 到 x=149.5, 步長 15.5px)
    const xCoords = [10, 25.5, 41, 56.5, 72, 87.5, 103, 118.5, 134, 149.5];
    const bodyWidth = 9.5; // 加粗 K 棒與成交量柱

    // -------------------------------------------------------------------------
    // 上層 (Y: 4 ~ 48)：10 根 K 棒 + 5MA / 10MA 平滑折線
    // -------------------------------------------------------------------------
    const kHeightTop = 4;
    const kHeightBottom = 48;
    const allVals = [];
    k10d.forEach(d => {
      allVals.push(d.open, d.high, d.low, d.close);
      if (d.ma5) allVals.push(d.ma5);
      if (d.ma10) allVals.push(d.ma10);
    });

    const maxVal = Math.max(...allVals) * 1.002;
    const minVal = Math.min(...allVals) * 0.998;
    const range = (maxVal - minVal) || 1;

    const getY = (val) => kHeightBottom - ((val - minVal) / range) * (kHeightBottom - kHeightTop);

    let candlesSvg = '';
    k10d.forEach((day, idx) => {
      const cx = xCoords[idx];
      const yHigh = getY(day.high);
      const yLow = getY(day.low);
      const yOpen = getY(day.open);
      const yClose = getY(day.close);

      const isUp = day.close > day.open;
      const isDown = day.close < day.open;
      const candleColor = isUp ? '#dc2626' : (isDown ? '#059669' : '#64748b');

      const bodyTop = Math.min(yOpen, yClose);
      const bodyHeight = Math.max(Math.abs(yClose - yOpen), 2.0);
      const bodyLeft = cx - bodyWidth / 2;

      candlesSvg += `
        <line x1="${cx.toFixed(1)}" y1="${yHigh.toFixed(1)}" x2="${cx.toFixed(1)}" y2="${yLow.toFixed(1)}" stroke="${candleColor}" stroke-width="1.8" stroke-linecap="round" />
        <rect x="${bodyLeft.toFixed(1)}" y="${bodyTop.toFixed(1)}" width="${bodyWidth}" height="${bodyHeight.toFixed(1)}" fill="${candleColor}" rx="1" />
      `;
    });

    // MA5 折線 (藍色 #0284c7)
    const ma5Points = k10d.map((d, i) => `${xCoords[i]},${getY(d.ma5 || d.close).toFixed(1)}`).join(' ');
    // MA10 折線 (紫色 #8b5cf6)
    const ma10Points = k10d.map((d, i) => `${xCoords[i]},${getY(d.ma10 || d.close).toFixed(1)}`).join(' ');

    // -------------------------------------------------------------------------
    // 中層 (Y: 56 ~ 80)：10 根成交量柱 + MV5 基準虛線 (保留寬鬆呼吸感距段)
    // -------------------------------------------------------------------------
    const volSubchartYBase = 80;
    const maxVolBarHeight = 20;
    const vols = k10d.map((d, i) => (d.volume !== undefined && d.volume > 0) ? d.volume : (i === 9 ? (stock.volume || 100) : 100));
    const vMa5 = stock.vMa5 || (vols.reduce((a, b) => a + b, 0) / vols.length);
    const maxVolScale = Math.max(...vols, vMa5, 1);
    const yMV5 = volSubchartYBase - (vMa5 / maxVolScale) * maxVolBarHeight;

    let volBarsSvg = '';
    k10d.forEach((day, idx) => {
      const cx = xCoords[idx];
      const v = vols[idx];
      const barH = Math.max(2.5, (v / maxVolScale) * maxVolBarHeight);
      const barY = volSubchartYBase - barH;
      const bodyLeft = cx - bodyWidth / 2;

      const isUp = day.close > day.open;
      const isDown = day.close < day.open;
      const barColor = isUp ? '#dc2626' : (isDown ? '#059669' : '#64748b');
      const isVolBurst = vMa5 > 0 && (v >= vMa5 * 2.0);

      volBarsSvg += `
        <rect x="${bodyLeft.toFixed(1)}" y="${barY.toFixed(1)}" width="${bodyWidth}" height="${barH.toFixed(1)}" fill="${barColor}" opacity="0.88" rx="1" />
      `;

      if (isVolBurst) {
        const arrowY = Math.max(55, barY - 1);
        volBarsSvg += `
          <text x="${cx.toFixed(1)}" y="${arrowY.toFixed(1)}" fill="#ef4444" font-size="6.5" font-weight="900" text-anchor="middle">▼</text>
        `;
      }
    });

    // -------------------------------------------------------------------------
    // 下層 (Y: 88 ~ 116)：近 10 日 KD(9,3) 折線 (橘 K 線 / 藍 D 線) + Y=50 基準線
    // -------------------------------------------------------------------------
    const kdYTop = 88;
    const kdYBottom = 116;
    const getKdY = (val) => kdYBottom - (Math.min(100, Math.max(0, val)) / 100) * (kdYBottom - kdYTop);
    const y50 = getKdY(50); // 102px

    const kdResult = this.calculateKD(stock, curPrice);
    const todayK = parseFloat(kdResult.k);
    const todayD = parseFloat(kdResult.d);
    const prevK = parseFloat(kdResult.prevK !== undefined ? kdResult.prevK : todayK);
    const prevD = parseFloat(kdResult.prevD !== undefined ? kdResult.prevD : todayD);

    const kPointsArr = [];
    const dPointsArr = [];
    k10d.forEach((d, i) => {
      let kVal = 50;
      let dVal = 50;
      if (i === 9) {
        kVal = todayK;
        dVal = todayD;
      } else if (i === 8) {
        kVal = prevK;
        dVal = prevD;
      } else {
        const step = 9 - i;
        kVal = Math.min(95, Math.max(10, todayK - (todayK - prevK) * step + Math.sin(i) * 3));
        dVal = Math.min(95, Math.max(10, todayD - (todayD - prevD) * step + Math.cos(i) * 3));
      }
      kPointsArr.push(`${xCoords[i]},${getKdY(kVal).toFixed(1)}`);
      dPointsArr.push(`${xCoords[i]},${getKdY(dVal).toFixed(1)}`);
    });

    const kPolyline = kPointsArr.join(' ');
    const dPolyline = dPointsArr.join(' ');

    return `
      <svg class="candlestick-svg" viewBox="0 0 ${width} ${totalHeight}" aria-label="10日微型走勢圖 (K棒/均線/成交量/KD)">
        <!-- 上層：MA10 (紫色實線) & MA5 (藍色實線) -->
        <polyline points="${ma10Points}" fill="none" stroke="#8b5cf6" stroke-width="1.5" opacity="0.9" />
        <polyline points="${ma5Points}" fill="none" stroke="#0284c7" stroke-width="1.5" opacity="0.9" />

        <!-- 10 根加粗 K 棒 -->
        ${candlesSvg}

        <!-- 分隔距離線 1 (K棒 與 成交量，保留大段落距段) -->
        <line x1="4" y1="52" x2="156" y2="52" stroke="#cbd5e1" stroke-width="0.6" />

        <!-- 中層：MV5 均量基準虛線 & 加粗成交量柱 -->
        <line x1="4" y1="${yMV5.toFixed(1)}" x2="156" y2="${yMV5.toFixed(1)}" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="2,2" />
        ${volBarsSvg}

        <!-- 分隔距離線 2 (成交量 與 KD，保留大段落距段) -->
        <line x1="4" y1="84" x2="156" y2="84" stroke="#cbd5e1" stroke-width="0.6" />

        <!-- 下層：Y=50 基準虛線 & KD(9,3) 雙折線 (橘 K / 藍 D) -->
        <line x1="4" y1="${y50.toFixed(1)}" x2="156" y2="${y50.toFixed(1)}" stroke="#cbd5e1" stroke-width="0.6" stroke-dasharray="2,2" />
        <text x="4" y="${(y50 + 2.2).toFixed(1)}" fill="#94a3b8" font-size="5.8" font-weight="600">50</text>

        <!-- D 線 (藍色) -->
        <polyline points="${dPolyline}" fill="none" stroke="#0284c7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
        <!-- K 線 (橘色) -->
        <polyline points="${kPolyline}" fill="none" stroke="#ea580c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />

        <!-- 今日 KD 末端標示圓點 -->
        <circle cx="${xCoords[9]}" cy="${getKdY(todayD).toFixed(1)}" r="1.6" fill="#0284c7" />
        <circle cx="${xCoords[9]}" cy="${getKdY(todayK).toFixed(1)}" r="1.6" fill="#ea580c" />
      </svg>
    `;
  },

  /**
   * 計算 KD (9,3) 智慧指標與 5 大狀態標籤
   * @param {Object} stock 個股資料數據
   * @param {number} currentPrice 盤中即時價 (或最新收盤價)
   * @returns {Object} { k, d, prevK, prevD, status, statusClass }
   */
  calculateKD(stock, currentPrice) {
    if (!stock.kd) {
      return { k: '50.0', d: '50.0', prevK: 50.0, prevD: 50.0, status: '中檔震盪', statusClass: 'kd-chip-neutral' };
    }

    const prevK = stock.kd.prevK !== undefined ? stock.kd.prevK : 50.0;
    const prevD = stock.kd.prevD !== undefined ? stock.kd.prevD : 50.0;

    let k = stock.kd.k;
    let d = stock.kd.d;

    const p = (currentPrice !== undefined && currentPrice > 0) ? currentPrice : stock.price;
    if (p > 0 && stock.kd.h8 !== undefined && stock.kd.l8 !== undefined) {
      const openP = stock.open || p;
      const highP = stock.high ? Math.max(stock.high, p) : Math.max(openP, p);
      const lowP = stock.low ? Math.min(stock.low, p) : Math.min(openP, p);

      const h9 = Math.max(stock.kd.h8, highP);
      const l9 = Math.min(stock.kd.l8, lowP);

      const rsv = h9 > l9 ? ((p - l9) / (h9 - l9)) * 100.0 : 50.0;
      k = (2.0 / 3.0) * prevK + (1.0 / 3.0) * rsv;
      d = (2.0 / 3.0) * prevD + (1.0 / 3.0) * k;

      k = Math.round(k * 10) / 10;
      d = Math.round(d * 10) / 10;
    }

    const isGoldCross = (prevK < prevD && k >= d);
    const isDeathCross = (prevK > prevD && k <= d);

    let status = '中檔震盪';
    let statusClass = 'kd-chip-neutral';

    if (isGoldCross) {
      status = '黃金交叉';
      statusClass = 'kd-chip-gold';
    } else if (isDeathCross) {
      status = '死亡交叉';
      statusClass = 'kd-chip-death';
    } else if (k < 50) {
      status = '低檔整理';
      statusClass = 'kd-chip-low';
    } else if (k >= 80) {
      status = '超買過熱';
      statusClass = 'kd-chip-overbought';
    }

    return {
      k: k.toFixed(1),
      d: d.toFixed(1),
      prevK,
      prevD,
      status,
      statusClass
    };
  }
};
