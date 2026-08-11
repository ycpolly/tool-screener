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
   */
  calculateFirstCeiling(stock) {
    const price = stock.price;
    const res1_high20d = stock.high20d || (stock.high ? Math.max(stock.high, price * 1.02) : price * 1.05);
    const res2_ma60 = stock.ma60 || price * 1.08;
    const res3_integer = this.calculateIntegerResistance(price);
    const res4_bbUpper = stock.bbUpper || price * 1.06;

    const resistances = [
      { type: '20日高點', price: res1_high20d },
      { type: '季線 (60MA)', price: res2_ma60 },
      { type: '整數關卡', price: res3_integer },
      { type: '布林上限', price: res4_bbUpper }
    ].filter(r => r.price > price);

    let firstCeiling = resistances.sort((a, b) => a.price - b.price)[0];
    if (!firstCeiling) {
      firstCeiling = { type: '漲停價天花板', price: parseFloat((price * 1.10).toFixed(2)) };
    }

    const grossMarginPct = parseFloat((((firstCeiling.price - price) / price) * 100).toFixed(2));
    const netProfitPct = parseFloat((grossMarginPct - 0.58).toFixed(2));

    return {
      ceilingPrice: firstCeiling.price,
      ceilingType: firstCeiling.type,
      grossMarginPct,
      netProfitPct
    };
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
    const hasVolumeBurst = stock.hasVolumeBurst ?? ((stock.maxVol10d || stock.volume) >= stock.vMa5 * 1.5);
    
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
   * 生成當日 K 棒 (Candlestick) SVG 圖表
   * 比照台股慣例：漲紅 (Close > Open)、跌綠 (Close < Open)
   * @param {Object} stock 個股數據
   */
  generateCandlestickSVG(stock) {
    const width = 110;
    const height = 56;
    const paddingY = 6;

    const open = stock.open || stock.price;
    const high = stock.high || Math.max(open, stock.price);
    const low = stock.low || Math.min(open, stock.price);
    const close = stock.price;
    const prevClose = stock.prevClose || open;
    const ma5 = stock.ma5;
    const ma10 = stock.ma10;

    // Dynamically scale vertical bounds including High, Low, PrevClose, MA5, MA10
    const maxVal = Math.max(high, prevClose, ma5 || high, ma10 || high) * 1.002;
    const minVal = Math.min(low, prevClose, ma5 || low, ma10 || low) * 0.998;
    const range = (maxVal - minVal) || 1;

    const getY = (val) => height - paddingY - ((val - minVal) / range) * (height - 2 * paddingY);

    const yHigh = getY(high);
    const yLow = getY(low);
    const yOpen = getY(open);
    const yClose = getY(close);
    const yPrevClose = getY(prevClose);
    const yMA5 = ma5 ? getY(ma5) : null;
    const yMA10 = ma10 ? getY(ma10) : null;

    const isUp = close > open;
    const isDown = close < open;

    // 台股色彩: 漲紅 / 跌綠 / 平灰
    const candleColor = isUp ? '#dc2626' : (isDown ? '#059669' : '#64748b');

    const candleX = 46;
    const bodyWidth = 22;
    const bodyLeft = candleX - bodyWidth / 2;

    const bodyTop = Math.min(yOpen, yClose);
    const bodyHeight = Math.max(Math.abs(yClose - yOpen), 3); // Ensure min 3px height

    return `
      <svg class="candlestick-svg" viewBox="0 0 ${width} ${height}" aria-label="K棒圖: 開盤${open} 最高${high} 最低${low} 收盤${close} MA5:${ma5} MA10:${ma10}">
        <!-- 昨收參考虛線 (灰色) -->
        <line x1="2" y1="${yPrevClose.toFixed(1)}" x2="${width - 18}" y2="${yPrevClose.toFixed(1)}" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2 2" />
        
        <!-- MA5 實心線 (藍色) 與 右端標籤 5 -->
        ${yMA5 !== null ? `
          <line x1="2" y1="${yMA5.toFixed(1)}" x2="${width - 18}" y2="${yMA5.toFixed(1)}" stroke="#0284c7" stroke-width="1.5" />
          <text x="${width - 14}" y="${(yMA5 + 3.2).toFixed(1)}" fill="#0284c7" font-size="9" font-weight="700">5</text>
        ` : ''}

        <!-- MA10 實心線 (紫色) 與 右端標籤 10 -->
        ${yMA10 !== null ? `
          <line x1="2" y1="${yMA10.toFixed(1)}" x2="${width - 18}" y2="${yMA10.toFixed(1)}" stroke="#8b5cf6" stroke-width="1.5" />
          <text x="${width - 16}" y="${(yMA10 + 3.2).toFixed(1)}" fill="#8b5cf6" font-size="8.5" font-weight="700">10</text>
        ` : ''}

        <!-- K棒影線 (High - Low) -->
        <line x1="${candleX}" y1="${yHigh.toFixed(1)}" x2="${candleX}" y2="${yLow.toFixed(1)}" stroke="${candleColor}" stroke-width="2.5" stroke-linecap="round" />
        
        <!-- K棒實體 (Open - Close) -->
        <rect x="${bodyLeft}" y="${bodyTop.toFixed(1)}" width="${bodyWidth}" height="${bodyHeight.toFixed(1)}" fill="${candleColor}" rx="1" />
      </svg>
    `;
  }
};
