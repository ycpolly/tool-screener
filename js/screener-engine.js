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
    checkNetProfit: true,    // 規則 4: 天花板預期純利濾網開關
    minNetProfit: 3.0        // 預期純利門檻下限 (%)
  },

  modePresets: {
    LOW_ENTRY: {
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
      checkNotLimitUp: true,
      checkNotDisposed: true,
      checkVolumeBurst: true,
      checkNetProfit: true,
      minNetProfit: 3.0
    },
    MOMENTUM: {
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
      checkNotLimitUp: true,
      checkNotDisposed: true,
      checkVolumeBurst: true,
      checkNetProfit: true,
      minNetProfit: 3.0
    }
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
   * 計算整數關卡 Resistance
   */
  calculateIntegerResistance(price) {
    if (!price || price <= 0) return 10;
    let step = 1;
    if (price < 10) step = 0.5;
    else if (price < 50) step = 1;
    else if (price < 100) step = 5;
    else if (price < 500) step = 10;
    else if (price < 1000) step = 50;
    else step = 100;

    let candidate = Math.ceil((price + 0.01) / step) * step;
    if (candidate <= price) candidate += step;
    return candidate;
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
   * 評估單一股票是否符合目前波段參數邏輯
   * @param {Object} stock 個股數據
   * @param {Object} params 選股邏輯參數
   */
  evaluateStock(stock, params = ScreenerEngine.defaultParams) {
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

    // 3. 縮量洗盤、非漲停、排除處置與攻擊爆量
    const isVolContraction = stock.volume < stock.vMa5 && stock.volume < stock.vMa10;
    const isNotLimitUp = stock.limitUpPrice ? stock.price < stock.limitUpPrice : true;
    const isNotDisposed = !stock.isDisposed;
    const hasVolumeBurst = stock.hasVolumeBurst ?? (stock.maxVol10d ? (stock.maxVol10d >= stock.volume * 2.5) : (stock.volume >= stock.vMa5 * 1.5));

    let isVolConditionPassed = true;
    if (params.checkVolumeContraction && !isVolContraction) isVolConditionPassed = false;
    if (params.checkNotLimitUp && !isNotLimitUp) isVolConditionPassed = false;
    if (params.checkNotDisposed && !isNotDisposed) isVolConditionPassed = false;
    if (params.checkVolumeBurst && !hasVolumeBurst) isVolConditionPassed = false;

    // 4. 流動性下限
    const isLiquidityPassed = params.checkMinVolume ? stock.volume >= params.minVolume : true;

    // 5. 規則 4: 天花板預期純利 (預期純利 >= minNetProfit %)
    const ceilingInfo = this.calculateFirstCeiling(stock);
    const isNetProfitPassed = (params.checkNetProfit ?? true) ? (ceilingInfo.netProfitPct >= (params.minNetProfit ?? 3.0)) : true;

    // 綜合判定
    const isMatch = isBias5Passed && isBias20Passed && isMAStructurePassed && isVolConditionPassed && isLiquidityPassed && isNetProfitPassed;

    // 漲跌幅計算
    const changePrice = parseFloat((stock.price - stock.prevClose).toFixed(2));
    const changePct = parseFloat(((changePrice / stock.prevClose) * 100).toFixed(2));

    return {
      isMatch,
      bias5,
      bias10,
      bias20,
      convergencePct,
      isAboveMA5or10: isAboveAnyMA,
      isMAConverged,
      isVolContraction,
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
        bias5Passed: isBias5Passed,
        bias20Passed: isBias20Passed,
        maPassed: isMAStructurePassed,
        volPassed: isVolConditionPassed,
        liquidityPassed: isLiquidityPassed,
        netProfitPassed: isNetProfitPassed
      }
    };
  },

  /**
   * 生成近 5 日 K 棒 (Candlestick) 與 5 日雙均線折線 SVG 圖表
   * 包含 T-4, T-3, T-2, T-1, T-0 五根 K 棒
   * 比照台股慣例：漲紅 (Close > Open)、跌綠 (Close < Open)
   * @param {Object} stock 個股數據
   */
  generateCandlestickSVG(stock) {
    const width = 130;
    const height = 56;
    const paddingY = 5;

    let k5d = stock.k5d || stock.k3d;
    if (!k5d || !Array.isArray(k5d) || k5d.length < 5) {
      const curPrice = stock.price;
      const open = stock.open || curPrice;
      const high = stock.high || Math.max(open, curPrice);
      const low = stock.low || Math.min(open, curPrice);
      const prevC = stock.prevClose || open;
      const ma5 = stock.ma5 || curPrice;
      const ma10 = stock.ma10 || curPrice;

      const sp = stock.sparkline || [curPrice, curPrice, curPrice, curPrice, curPrice];
      const p1 = sp.length >= 2 ? sp[sp.length - 2] : prevC;
      const p2 = sp.length >= 3 ? sp[sp.length - 3] : prevC;
      const p3 = sp.length >= 4 ? sp[sp.length - 4] : prevC;
      const p4 = sp.length >= 5 ? sp[sp.length - 5] : prevC;

      k5d = [
        { open: p4, high: Math.max(p4, p3), low: Math.min(p4, p3), close: p3, ma5: (ma5 + p4) / 2, ma10: (ma10 + p4) / 2 },
        { open: p3, high: Math.max(p3, p2), low: Math.min(p3, p2), close: p2, ma5: (ma5 + p3) / 2, ma10: (ma10 + p3) / 2 },
        { open: p2, high: Math.max(p2, p1), low: Math.min(p2, p1), close: p1, ma5: (ma5 + p2) / 2, ma10: (ma10 + p2) / 2 },
        { open: p1, high: Math.max(p1, open), low: Math.min(p1, open), close: prevC, ma5: (ma5 + p1) / 2, ma10: (ma10 + p1) / 2 },
        { open: open, high: high, low: low, close: curPrice, ma5: ma5, ma10: ma10 }
      ];
    }

    // 收集近 5 日所有極值以計算 Y 軸垂直動態縮放
    const allVals = [];
    k5d.forEach(d => {
      allVals.push(d.open, d.high, d.low, d.close);
      if (d.ma5) allVals.push(d.ma5);
      if (d.ma10) allVals.push(d.ma10);
    });

    const maxVal = Math.max(...allVals) * 1.002;
    const minVal = Math.min(...allVals) * 0.998;
    const range = (maxVal - minVal) || 1;

    const getY = (val) => height - paddingY - ((val - minVal) / range) * (height - 2 * paddingY);

    const xCoords = [14, 33, 52, 71, 90];
    const bodyWidth = 11;

    // 繪製 5 根 K 棒
    let candlesSvg = '';
    k5d.forEach((day, idx) => {
      const cx = xCoords[idx];
      const yHigh = getY(day.high);
      const yLow = getY(day.low);
      const yOpen = getY(day.open);
      const yClose = getY(day.close);

      const isUp = day.close > day.open;
      const isDown = day.close < day.open;
      const candleColor = isUp ? '#dc2626' : (isDown ? '#059669' : '#64748b');

      const bodyTop = Math.min(yOpen, yClose);
      const bodyHeight = Math.max(Math.abs(yClose - yOpen), 2.5);
      const bodyLeft = cx - bodyWidth / 2;

      candlesSvg += `
        <!-- Day ${idx + 1} 影線 -->
        <line x1="${cx.toFixed(1)}" y1="${yHigh.toFixed(1)}" x2="${cx.toFixed(1)}" y2="${yLow.toFixed(1)}" stroke="${candleColor}" stroke-width="1.8" stroke-linecap="round" />
        <!-- Day ${idx + 1} 實體 -->
        <rect x="${bodyLeft.toFixed(1)}" y="${bodyTop.toFixed(1)}" width="${bodyWidth}" height="${bodyHeight.toFixed(1)}" fill="${candleColor}" rx="1" />
      `;
    });

    // MA5 均線折線 (藍色 #0284c7)
    const ma5Points = k5d.map((d, i) => `${xCoords[i]},${getY(d.ma5).toFixed(1)}`).join(' ');
    const lastYMa5 = getY(k5d[4].ma5);

    // MA10 均線折線 (紫色 #8b5cf6)
    const ma10Points = k5d.map((d, i) => `${xCoords[i]},${getY(d.ma10).toFixed(1)}`).join(' ');
    const lastYMa10 = getY(k5d[4].ma10);

    return `
      <svg class="candlestick-svg" viewBox="0 0 ${width} ${height}" aria-label="5日K棒與均線折線圖">
        <!-- MA10 10日均線折線 (紫色實線) -->
        <polyline points="${ma10Points}" fill="none" stroke="#8b5cf6" stroke-width="1.8" />
        <text x="105" y="${(lastYMa10 + 3.2).toFixed(1)}" fill="#8b5cf6" font-size="8.5" font-weight="700">10</text>

        <!-- MA5 5日均線折線 (藍色實線) -->
        <polyline points="${ma5Points}" fill="none" stroke="#0284c7" stroke-width="1.8" />
        <text x="105" y="${(lastYMa5 + 3.2).toFixed(1)}" fill="#0284c7" font-size="9" font-weight="700">5</text>

        <!-- 5 根 K 棒 -->
        ${candlesSvg}
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
