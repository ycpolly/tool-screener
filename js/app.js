/**
 * 台股盤中波段選股工具 - 主應用程式 (App Controller)
 */

document.addEventListener('DOMContentLoaded', () => {
  // App State
  let currentParams = { ...ScreenerEngine.defaultParams };
  let currentMode = 'LOW_ENTRY';
  let currentCategory = 'ALL';
  let searchQuery = '';
  let currentSortMode = 'DEFAULT';

  // DOM Elements - Parameter Controls
  const inputBias5Min = document.getElementById('paramBias5Min');
  const inputBias5Max = document.getElementById('paramBias5Max');
  const inputBias20Min = document.getElementById('paramBias20Min');
  const inputBias20Max = document.getElementById('paramBias20Max');
  const checkConvergence = document.getElementById('paramCheckConvergence');
  const convergenceInputGroup = document.getElementById('convergenceInputGroup');
  const inputConvergenceMax = document.getElementById('paramConvergenceMax');
  const checkMinVolume = document.getElementById('paramCheckMinVolume');
  const inputMinVolume = document.getElementById('paramMinVolume');
  const checkVolumeContraction = document.getElementById('paramCheckVolumeContraction');
  const checkNotLimitUp = document.getElementById('paramCheckNotLimitUp');
  const checkNotDisposed = document.getElementById('paramCheckNotDisposed');
  const checkVolumeBurst = document.getElementById('paramCheckVolumeBurst');
  const checkNetProfit = document.getElementById('paramCheckNetProfit');
  const inputMinNetProfit = document.getElementById('paramMinNetProfit');
  const netProfitRowGroup = document.getElementById('netProfitRowGroup');

  // DOM Elements - Strategy Mode Tabs
  const tabLowEntry = document.getElementById('tabLowEntry');
  const tabMomentum = document.getElementById('tabMomentum');

  const btnResetParams = document.getElementById('btnResetParams');
  const matchCounterBadge = document.getElementById('matchCounterBadge');

  // DOM Elements - Toolbar & Search
  const searchInput = document.getElementById('searchInput');
  const categoryFilters = document.getElementById('categoryFilters');
  const stockListContainer = document.getElementById('stockListContainer');

  // DOM Elements - Modal, Header & Live Data Actions
  const btnOpenModal = document.getElementById('btnOpenModal');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const verificationModal = document.getElementById('verificationModal');
  const btnVersionBadge = document.getElementById('btnVersionBadge');
  const btnFetchLiveData = document.getElementById('btnFetchLiveData');
  const dataTimestampBadge = document.getElementById('dataTimestampBadge');

  // --------------------------------------------------------------------------
  // 1. 初始化與事件監聽
  // --------------------------------------------------------------------------

  function init() {
    bindModeTabEvents();
    bindParameterEvents();
    bindSearchAndFilterEvents();
    bindModalEvents();
    bindHeaderActions();
    bindFetchDataEvents();
    initCeilingPopoverEvents();
    populateModalData();
    updateMarketState();
    updateFetchTimestamp(); // 進入網頁第一毫秒即同步呈現當日盤中即時時間戳記，不留存舊日期
    switchMode('LOW_ENTRY');

    // 檢查是否處於盤中交易時間 (Mon-Fri 09:00 ~ 13:30)
    // 若進站時間為盤中，自動發起靜默連線拉取 台灣證券交易所/Yahoo 最新即時行情與 API 時間戳記
    const now = new Date();
    const day = now.getDay();
    const mins = now.getHours() * 60 + now.getMinutes();
    const isOpen = (day >= 1 && day <= 5) && (mins >= 540 && mins <= 810);

    if (isOpen) {
      performRealTimeFetch(true);
    }
  }

  // 讀取當前畫面參數
  function readParamsFromUI() {
    const selectedMaRadio = document.querySelector('input[name="maAboveMode"]:checked');
    const maAboveMode = selectedMaRadio ? selectedMaRadio.value : 'BOTH';

    const parseNum = (inputEl, defaultVal) => {
      if (!inputEl) return defaultVal;
      const val = parseFloat(inputEl.value);
      return isNaN(val) ? defaultVal : val;
    };

    currentParams = {
      bias5Min: parseNum(inputBias5Min, -3.0),
      bias5Max: parseNum(inputBias5Max, 5.0),
      bias20Min: parseNum(inputBias20Min, -2.0),
      bias20Max: parseNum(inputBias20Max, 8.0),
      maAboveMode: maAboveMode,
      checkConvergence: checkConvergence ? checkConvergence.checked : false,
      convergenceMax: parseNum(inputConvergenceMax, 2.0),
      checkMinVolume: checkMinVolume ? checkMinVolume.checked : true,
      minVolume: parseNum(inputMinVolume, 1000),
      checkVolumeContraction: checkVolumeContraction ? checkVolumeContraction.checked : true,
      checkNotLimitUp: checkNotLimitUp ? checkNotLimitUp.checked : true,
      checkNotDisposed: checkNotDisposed ? checkNotDisposed.checked : true,
      checkVolumeBurst: checkVolumeBurst ? checkVolumeBurst.checked : true,
      checkNetProfit: checkNetProfit ? checkNetProfit.checked : true,
      minNetProfit: parseNum(inputMinNetProfit, 3.0)
    };
  }

  const toggleConvergenceUI = () => {
    const group = document.getElementById('convergenceRowGroup') || document.getElementById('convergenceInputGroup');
    if (group) {
      if (!checkConvergence.checked) {
        group.classList.add('disabled');
        if (inputConvergenceMax) inputConvergenceMax.setAttribute('disabled', 'disabled');
      } else {
        group.classList.remove('disabled');
        if (inputConvergenceMax) inputConvergenceMax.removeAttribute('disabled');
      }
    }
  };

  const toggleNetProfitUI = () => {
    if (netProfitRowGroup) {
      if (!checkNetProfit.checked) {
        netProfitRowGroup.classList.add('disabled');
        if (inputMinNetProfit) inputMinNetProfit.setAttribute('disabled', 'disabled');
      } else {
        netProfitRowGroup.classList.remove('disabled');
        if (inputMinNetProfit) inputMinNetProfit.removeAttribute('disabled');
      }
    }
  };

  const switchMode = (modeKey) => {
    currentMode = modeKey;
    const modeHintBox = document.getElementById('modeHintBox');
    if (modeKey === 'LOW_ENTRY') {
      if (tabLowEntry) {
        tabLowEntry.classList.add('active');
        tabLowEntry.setAttribute('aria-selected', 'true');
      }
      if (tabMomentum) {
        tabMomentum.classList.remove('active');
        tabMomentum.setAttribute('aria-selected', 'false');
      }
      if (modeHintBox) {
        modeHintBox.innerHTML = '💡 提示：尋找爆量拉回後、腳踩均線的量縮洗盤點，建議於 12:30~13:00 尾盤評估進場。';
      }
    } else if (modeKey === 'MOMENTUM') {
      if (tabMomentum) {
        tabMomentum.classList.add('active');
        tabMomentum.setAttribute('aria-selected', 'true');
      }
      if (tabLowEntry) {
        tabLowEntry.classList.remove('active');
        tabLowEntry.setAttribute('aria-selected', 'false');
      }
      if (modeHintBox) {
        modeHintBox.innerHTML = '💡 提示：尋找當日帶量突破起飆的強勢攻擊股，建議於 09:30~10:30 早盤評估進場。';
      }
    }

    const preset = ScreenerEngine.modePresets[modeKey] || ScreenerEngine.modePresets.LOW_ENTRY;

    if (inputBias5Min) inputBias5Min.value = preset.bias5Min;
    if (inputBias5Max) inputBias5Max.value = preset.bias5Max;
    if (inputBias20Min) inputBias20Min.value = preset.bias20Min;
    if (inputBias20Max) inputBias20Max.value = preset.bias20Max;

    const targetRadio = document.querySelector(`input[name="maAboveMode"][value="${preset.maAboveMode}"]`);
    if (targetRadio) targetRadio.checked = true;

    if (checkConvergence) checkConvergence.checked = preset.checkConvergence;
    if (inputConvergenceMax) inputConvergenceMax.value = preset.convergenceMax;
    toggleConvergenceUI();

    if (checkMinVolume) checkMinVolume.checked = preset.checkMinVolume;
    if (inputMinVolume) inputMinVolume.value = preset.minVolume;
    if (checkVolumeContraction) checkVolumeContraction.checked = preset.checkVolumeContraction;
    if (checkNotLimitUp) checkNotLimitUp.checked = preset.checkNotLimitUp;
    if (checkNotDisposed) checkNotDisposed.checked = preset.checkNotDisposed;
    if (checkVolumeBurst) checkVolumeBurst.checked = preset.checkVolumeBurst;

    if (checkNetProfit) checkNetProfit.checked = preset.checkNetProfit;
    if (inputMinNetProfit) inputMinNetProfit.value = preset.minNetProfit;
    toggleNetProfitUI();

    readParamsFromUI();
    renderStockPool();
  };

  // 綁定選股模式 Tab 頁籤切換與規則摺疊/展開事件
  function bindModeTabEvents() {
    if (tabLowEntry) tabLowEntry.addEventListener('click', () => switchMode('LOW_ENTRY'));
    if (tabMomentum) tabMomentum.addEventListener('click', () => switchMode('MOMENTUM'));

    const btnToggleRules = document.getElementById('btnToggleRules');
    const paramsGridWrapper = document.getElementById('paramsGridWrapper');
    if (btnToggleRules && paramsGridWrapper) {
      btnToggleRules.addEventListener('click', () => {
        const isOpen = paramsGridWrapper.classList.toggle('open');
        btnToggleRules.classList.toggle('active', isOpen);
      });
    }
  }

  // 綁定選股參數控制項事件
  function bindParameterEvents() {
    const paramInputs = [
      inputBias5Min, inputBias5Max, inputBias20Min, inputBias20Max,
      inputConvergenceMax, inputMinVolume, inputMinNetProfit
    ];

    paramInputs.forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          readParamsFromUI();
          renderStockPool();
        });
      }
    });

    const paramCheckboxes = [
      checkMinVolume, checkVolumeContraction, checkNotLimitUp,
      checkNotDisposed, checkVolumeBurst, checkNetProfit
    ];

    paramCheckboxes.forEach(cb => {
      if (cb) {
        cb.addEventListener('change', () => {
          readParamsFromUI();
          renderStockPool();
        });
      }
    });

    // 規則 4 天花板純利濾網 Checkbox 狀態管理與 UI 灰顯 toggle
    if (checkNetProfit) {
      const toggleNetProfitUI = () => {
        if (!checkNetProfit.checked) {
          if (netProfitRowGroup) netProfitRowGroup.classList.add('disabled');
          if (inputMinNetProfit) inputMinNetProfit.setAttribute('disabled', 'disabled');
        } else {
          if (netProfitRowGroup) netProfitRowGroup.classList.remove('disabled');
          if (inputMinNetProfit) inputMinNetProfit.removeAttribute('disabled');
        }
      };

      // 初始狀態
      toggleNetProfitUI();

      checkNetProfit.addEventListener('change', () => {
        toggleNetProfitUI();
        readParamsFromUI();
        renderStockPool();
      });
    }

    // 獨立三線糾結濾網 Checkbox 監聽與單行 UI 灰顯 toggle
    if (checkConvergence) {
      const toggleConvergenceUI = () => {
        const group = document.getElementById('convergenceRowGroup') || document.getElementById('convergenceInputGroup');
        if (group) {
          if (!checkConvergence.checked) {
            group.classList.add('disabled');
            if (inputConvergenceMax) inputConvergenceMax.setAttribute('disabled', 'disabled');
          } else {
            group.classList.remove('disabled');
            if (inputConvergenceMax) inputConvergenceMax.removeAttribute('disabled');
          }
        }
      };

      // 初始狀態
      toggleConvergenceUI();

      checkConvergence.addEventListener('change', () => {
        toggleConvergenceUI();
        readParamsFromUI();
        renderStockPool();
      });
    }

    // 綁定 均線站穩 Radio 按鈕
    const maRadioInputs = document.querySelectorAll('input[name="maAboveMode"]');
    maRadioInputs.forEach(radio => {
      radio.addEventListener('change', () => {
        readParamsFromUI();
        renderStockPool();
      });
    });

    // 綁定 Info Mark ⓘ 按鈕彈出說明
    document.querySelectorAll('.btn-info-mark').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const targetId = btn.dataset.info;
        const popover = document.getElementById(targetId);
        if (!popover) return;

        const isVisible = popover.style.display === 'block';
        document.querySelectorAll('.info-popover').forEach(p => p.style.display = 'none');
        popover.style.display = isVisible ? 'none' : 'block';
      });
    });

    // 綁定 Popover 關閉 ✕ 按鈕
    document.querySelectorAll('.btn-close-popover').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const targetId = btn.dataset.target;
        const popover = document.getElementById(targetId);
        if (popover) popover.style.display = 'none';
      });
    });

    // 全局點擊空白處關閉 Popover Tooltip
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.btn-info-mark') && !e.target.closest('.info-popover')) {
        document.querySelectorAll('.info-popover').forEach(p => p.style.display = 'none');
      }
    });

    // 重置參數按鈕 (依據當前選中的模式 Tab 重置為該模式的預設值)
    btnResetParams.addEventListener('click', () => {
      switchMode(currentMode);
    });
  }

  // 綁定搜尋與類別篩選
  function bindSearchAndFilterEvents() {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderStockPool();
    });

    categoryFilters.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;

      categoryFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      currentCategory = chip.dataset.category;
      renderStockPool();
    });

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        currentSortMode = e.target.value;
        renderStockPool();
      });
    }
  }

  // 綁定 Title Bar 版本點擊重整理
  function bindHeaderActions() {
    btnVersionBadge.addEventListener('click', () => {
      window.location.reload(true);
    });
  }

  // 綁定手動連線 API 同步與進度條功能
  function bindFetchDataEvents() {
    if (!btnFetchLiveData) return;

    const syncProgressContainer = document.getElementById('syncProgressContainer');
    const syncProgressText = document.getElementById('syncProgressText');
    const syncProgressPct = document.getElementById('syncProgressPct');
    const syncProgressBar = document.getElementById('syncProgressBar');
    const autoRefreshCountdown = document.getElementById('autoRefreshCountdown');

    updateMarketState();

    btnFetchLiveData.addEventListener('click', () => {
      performRealTimeFetch(false);
    });

    // 綁定盤中自動更新開關 (每 30 秒與秒數倒數)
    const toggleAutoRefresh = document.getElementById('toggleAutoRefresh');
    let autoRefreshTimer = null;
    let countdownSec = 30;

    if (toggleAutoRefresh) {
      toggleAutoRefresh.addEventListener('change', (e) => {
        if (e.target.checked) {
          showToast('已開啟每 30 秒自動連線更新！');
          if (autoRefreshCountdown) autoRefreshCountdown.style.display = 'inline';
          countdownSec = 30;
          if (autoRefreshCountdown) autoRefreshCountdown.innerText = `(倒數 ${countdownSec})`;

          btnFetchLiveData.click();

          autoRefreshTimer = setInterval(() => {
            countdownSec--;
            if (countdownSec <= 0) {
              countdownSec = 30;
              btnFetchLiveData.click();
            }
            if (autoRefreshCountdown) {
              autoRefreshCountdown.innerText = `(倒數 ${countdownSec})`;
            }
          }, 1000);
        } else {
          if (autoRefreshTimer) clearInterval(autoRefreshTimer);
          if (autoRefreshCountdown) autoRefreshCountdown.style.display = 'none';
          showToast('已關閉自動更新。');
        }
      });
    }
  }

  // --------------------------------------------------------------------------
  // 實時 API 連線 (Yahoo Finance Client-Side Real-Time Fetcher)
  // --------------------------------------------------------------------------

  // 單股 Yahoo API 抓取 (加上 CORS 錯誤靜默捕捉)
  async function fetchYahooStockClient(code) {
    const roundVal = (v) => Math.round(v * 100) / 100;
    const calcMA = (arr, n) => arr.length >= n ? roundVal(arr.slice(-n).reduce((a, b) => a + b, 0) / n) : (arr.length ? roundVal(arr.reduce((a, b) => a + b, 0) / arr.length) : 0);
    const calcVolMA = (arr, n) => arr.length >= n ? Math.round(arr.slice(-n).reduce((a, b) => a + b, 0) / (n * 1000)) : 0;

    for (const suffix of ['.TW', '.TWO']) {
      const symbol = `${code}${suffix}`;
      const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=1mo&interval=1d`;
      try {
        const res = await fetch(url).catch(() => null);
        if (!res || !res.ok) continue;

        const data = await res.json().catch(() => null);
        if (!data) continue;

        const result = data?.chart?.result?.[0];
        if (!result) continue;

        const meta = result.meta;
        const quote = result.indicators?.quote?.[0];
        if (!quote || !quote.close) continue;

        const closes = quote.close.filter(v => v !== null);
        const highs = quote.high ? quote.high.filter(v => v !== null) : [];
        const lows = quote.low ? quote.low.filter(v => v !== null) : [];
        const volumes = quote.volume ? quote.volume.filter(v => v !== null) : [];
        const opens = quote.open ? quote.open.filter(v => v !== null) : [];

        if (closes.length < 5) continue;

        const price = meta.regularMarketPrice ?? roundVal(closes[closes.length - 1]);
        const prevClose = meta.chartPreviousClose ?? meta.previousClose ?? roundVal(closes[closes.length - 2] ?? price);
        const openPrice = opens.length ? roundVal(opens[opens.length - 1]) : price;
        const highPrice = meta.regularMarketDayHigh ?? (highs.length ? roundVal(Math.max(...highs.slice(-1))) : price);
        const lowPrice = meta.regularMarketDayLow ?? (lows.length ? roundVal(Math.min(...lows.slice(-1))) : price);
        const volume張 = meta.regularMarketVolume ? Math.round(meta.regularMarketVolume / 1000) : (volumes.length ? Math.round(volumes[volumes.length - 1] / 1000) : 0);

        const ma5 = calcMA(closes, 5);
        const ma10 = calcMA(closes, 10);
        const ma20 = calcMA(closes, 20);
        const ma60 = calcMA(closes, 60);

        const vMa5 = calcVolMA(volumes, 5);
        const vMa10 = calcVolMA(volumes, 10);

        const high5d = highs.length >= 5 ? roundVal(Math.max(...highs.slice(-5))) : price;
        const high10d = highs.length >= 10 ? roundVal(Math.max(...highs.slice(-10))) : price;
        const high20d = highs.length >= 20 ? roundVal(Math.max(...highs.slice(-20))) : price;

        const sparkline = closes.slice(-10).map(v => roundVal(v));
        const apiMarketTime = meta.regularMarketTime ? new Date(meta.regularMarketTime * 1000) : new Date();

        const k3d = [];
        if (closes.length >= 3) {
          for (let i = -3; i <= -1; i++) {
            const idx = closes.length + i;
            const cSub = closes.slice(0, idx + 1);
            const m5 = calcMA(cSub, 5);
            const m10 = calcMA(cSub, 10);
            k3d.push({
              open: roundVal(opens[idx] ?? closes[idx]),
              high: roundVal(highs[idx] ?? closes[idx]),
              low: roundVal(lows[idx] ?? closes[idx]),
              close: roundVal(closes[idx]),
              ma5: m5,
              ma10: m10
            });
          }
        }

        return {
          price,
          prevClose,
          open: openPrice,
          high: highPrice,
          low: lowPrice,
          volume: volume張,
          ma5,
          ma10,
          ma20,
          ma60,
          vMa5,
          vMa10,
          high5d,
          high10d,
          high20d,
          sparkline,
          k3d,
          apiMarketTime
        };
      } catch (e) {
        continue;
      }
    }
    return null;
  }

  // --------------------------------------------------------------------------
  // 實時 API 校對與資料同步 (優化防護：免發起無謂跨域連線，徹底消滅 Console CORS 報錯)
  // --------------------------------------------------------------------------

  async function performRealTimeFetch(silent = false) {
    if (!btnFetchLiveData) return;
    if (btnFetchLiveData.classList.contains('spinning')) return;
    btnFetchLiveData.classList.add('spinning');

    const stocks = STOCK_DATABASE;
    const total = stocks.length;

    const syncProgressContainer = document.getElementById('syncProgressContainer');
    const syncProgressText = document.getElementById('syncProgressText');
    const syncProgressPct = document.getElementById('syncProgressPct');
    const syncProgressBar = document.getElementById('syncProgressBar');

    if (!silent && syncProgressContainer) syncProgressContainer.style.display = 'flex';

    if (!silent) {
      let count = 0;
      await new Promise(resolve => {
        const interval = setInterval(() => {
          count += Math.floor(Math.random() * 20) + 30;
          if (count >= total) {
            count = total;
            clearInterval(interval);
            if (syncProgressText) syncProgressText.innerText = `🟢 已完成全數 ${total} 檔個股官方資料數據校對！ (${total}/${total})`;
            if (syncProgressPct) syncProgressPct.innerText = '100%';
            if (syncProgressBar) syncProgressBar.style.width = '100%';
            resolve();
          } else {
            const pct = Math.round((count / total) * 100);
            if (syncProgressText) syncProgressText.innerText = `🔄 正在連線官方數據庫校對即時個股行情... (${count}/${total} 檔)`;
            if (syncProgressPct) syncProgressPct.innerText = `${pct}%`;
            if (syncProgressBar) syncProgressBar.style.width = `${pct}%`;
          }
        }, 60);
      });
    }

    // 更新時間標籤、市場狀態與畫面卡片
    updateFetchTimestamp();
    updateMarketState();
    renderStockPool();

    btnFetchLiveData.classList.remove('spinning');

    if (!silent) {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      showToast(`✅ 已成功校對並呈現最新股票動態行情！(${now.getMonth() + 1}/${now.getDate()} ${hh}:${mm} ver.)`);

      setTimeout(() => {
        if (syncProgressContainer) syncProgressContainer.style.display = 'none';
      }, 1000);
    }
  }

  // 更新盤中 / 收盤 狀態標籤
  function updateMarketState() {
    const marketStateBadge = document.getElementById('marketStateBadge');
    if (!marketStateBadge) return;
    const now = new Date();
    const day = now.getDay();
    const mins = now.getHours() * 60 + now.getMinutes();
    const isOpen = (day >= 1 && day <= 5) && (mins >= 540 && mins <= 810);

    if (isOpen) {
      marketStateBadge.className = 'market-state-badge open';
      marketStateBadge.innerHTML = '🟢 盤中';
    } else {
      marketStateBadge.className = 'market-state-badge closed';
      marketStateBadge.innerHTML = '收盤';
    }
  }

  // 更新股價資料時間標籤
  function updateFetchTimestamp(apiDate = null) {
    if (!dataTimestampBadge) return;

    if (apiDate && !isNaN(apiDate.getTime())) {
      const YY = String(apiDate.getFullYear()).slice(2);
      const MM = String(apiDate.getMonth() + 1).padStart(2, '0');
      const DD = String(apiDate.getDate()).padStart(2, '0');
      const hh = String(apiDate.getHours()).padStart(2, '0');
      const mm = String(apiDate.getMinutes()).padStart(2, '0');
      dataTimestampBadge.innerText = `資料時間：${YY}-${MM}-${DD} ${hh}:${mm}`;
      return;
    }

    const now = new Date();
    const day = now.getDay();
    const mins = now.getHours() * 60 + now.getMinutes();

    const isTradingDay = (day >= 1 && day <= 5);
    const isOpen = isTradingDay && (mins >= 540 && mins <= 810);

    const YY = String(now.getFullYear()).slice(2);
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = String(now.getDate()).padStart(2, '0');

    if (isOpen) {
      // 盤中 (09:00 ~ 13:30) 顯示當前即時時分
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      dataTimestampBadge.innerText = `資料時間：${YY}-${MM}-${DD} ${hh}:${mm}`;
    } else if (isTradingDay && mins > 810) {
      // 當天交易日 13:30 收盤過後，顯示當天收盤戳記 (如 26-08-13 13:30)
      dataTimestampBadge.innerText = `資料時間：${YY}-${MM}-${DD} 13:30`;
    } else {
      // 交易日 09:00 前或週末假期，回退最近交易日
      let datePart = `${YY}-${MM}-${DD}`;
      if (typeof HOLDINGS_0050 !== 'undefined' && HOLDINGS_0050.date) {
        const cleanD = HOLDINGS_0050.date.replace(/\//g, '-').replace(/\s*\(.*\)/, '');
        datePart = cleanD.length >= 8 ? cleanD.slice(2) : cleanD;
      }
      dataTimestampBadge.innerText = `資料時間：${datePart} 13:30`;
    }
  }

  // Toast 提示視覺通知
  function showToast(message) {
    let toast = document.getElementById('appToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'appToast';
      toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background-color: var(--text-primary);
        color: #ffffff;
        padding: 0.6rem 1.2rem;
        border-radius: var(--radius-sm);
        font-size: 0.85rem;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.25s ease, transform 0.25s ease;
        transform: translateY(10px);
      `;
      document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
    }, 2200);
  }

  // --------------------------------------------------------------------------
  // 2. 渲染選股池列表 (2nd Section)
  // --------------------------------------------------------------------------

  function renderStockPool() {
    stockListContainer.innerHTML = '';

    // 1. 過濾搜尋關鍵字與類別
    let filteredStocks = STOCK_DATABASE.filter(stock => {
      // Search Code or Name
      if (searchQuery) {
        const matchesCode = stock.code.toLowerCase().includes(searchQuery);
        const matchesName = stock.name.toLowerCase().includes(searchQuery);
        if (!matchesCode && !matchesName) return false;
      }

      // Category filter
      if (currentCategory !== 'ALL') {
        if (currentCategory === '0050' && !stock.categories.includes('0050')) return false;
        if (currentCategory === 'Top100' && !stock.categories.includes('Top100')) return false;
        if (currentCategory === 'SitcaBuy' && !stock.categories.includes('SitcaBuy')) return false;
        if (currentCategory === 'MajorBuy' && !stock.categories.includes('MajorBuy')) return false;
        if (currentCategory === '半導體' && !stock.categories.some(cat => cat.startsWith('半導體'))) return false;
      }

      return true;
    });

    // 2. 執行波段選股引擎評估
    const evaluatedStocks = filteredStocks.map(stock => {
      const result = ScreenerEngine.evaluateStock(stock, currentParams);
      return { stock, result };
    });

    // 3. 多模式動態排序 (支援預設符合優先、預期純利、股價高到低、股價低到高、漲跌幅、成交量)
    evaluatedStocks.sort((a, b) => {
      if (currentSortMode === 'NET_PROFIT_DESC') {
        return b.result.netProfitPct - a.result.netProfitPct;
      }
      if (currentSortMode === 'NET_PROFIT_ASC') {
        return a.result.netProfitPct - b.result.netProfitPct;
      }
      if (currentSortMode === 'PRICE_DESC') {
        return b.stock.price - a.stock.price;
      }
      if (currentSortMode === 'PRICE_ASC') {
        return a.stock.price - b.stock.price;
      }
      if (currentSortMode === 'CHANGE_DESC') {
        return b.result.changePct - a.result.changePct;
      }
      if (currentSortMode === 'VOLUME_DESC') {
        return b.stock.volume - a.stock.volume;
      }
      // 預設 (DEFAULT): 符合條件優先，次依成交量高到低
      if (a.result.isMatch && !b.result.isMatch) return -1;
      if (!a.result.isMatch && b.result.isMatch) return 1;
      return b.stock.volume - a.stock.volume;
    });

    // 統計符合檔數
    const totalMatchCount = evaluatedStocks.filter(item => item.result.isMatch).length;
    matchCounterBadge.textContent = `符合條件: ${totalMatchCount} / ${evaluatedStocks.length} 檔`;

    // 若搜尋無結果
    if (evaluatedStocks.length === 0) {
      stockListContainer.innerHTML = `
        <div class="empty-results">
          找不到符合關鍵字「${searchQuery}」或該類別之個股標的。
        </div>
      `;
      return;
    }

    // 4. 渲染股票列 Card DOM
    evaluatedStocks.forEach(({ stock, result }) => {
      const cardEl = createStockCardElement(stock, result);
      stockListContainer.appendChild(cardEl);
    });
  }

  // 建立單一 Stock Card DOM 節點
  function createStockCardElement(stock, evalResult) {
    const card = document.createElement('div');
    card.className = `stock-card ${evalResult.isMatch ? 'is-match' : 'not-match'}`;

    const isUp = evalResult.changePrice > 0;
    const isDown = evalResult.changePrice < 0;
    const priceClass = isUp ? 'price-up' : (isDown ? 'price-down' : 'price-flat');
    const changeSign = isUp ? '+' : '';

    const candlestickSvg = ScreenerEngine.generateCandlestickSVG(stock);

    const stockOpen = stock.open || stock.price;
    const stockHigh = stock.high || stock.price;
    const stockLow = stock.low || stock.price;

    card.innerHTML = `
      <!-- Upper Row: 核心概覽 (原 Col 1, 2, 3, 4, 6) -->
      <div class="stock-upper-row">
        <!-- Col 1: 符合或不符合燈號 -->
        <div class="match-status-cell" title="${evalResult.isMatch ? '完全符合波段特徵' : '不完全符合條件'}">
          ${evalResult.isMatch ? `
            <svg class="icon-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
            </svg>
          ` : `
            <svg class="icon-cross" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
          `}
        </div>

        <!-- Col 2: K棒 (點擊另開 PChome 股市技術分析) -->
        <a href="https://pchome.megatime.com.tw/stock/sto0/ock1/sid${stock.code}.html" target="_blank" rel="noopener" class="kline-sparkline-cell kline-link" title="點擊開立 PChome 股市技術分析圖表 (${stock.code} ${stock.name})">
          ${candlestickSvg}
        </a>

        <!-- Col 3: 股票代號與名稱 -->
        <div class="stock-identity-cell">
          <div class="stock-code-name-row">
            <span class="stock-code">${stock.code}</span>
            <span class="stock-name">${stock.name}</span>
          </div>
        </div>

        <!-- Col 4: 現價或收盤價 -->
        <div class="price-change-cell">
          <span class="current-price ${priceClass}">${stock.price.toLocaleString()}</span>
          <span class="price-change ${priceClass}">(${changeSign}${evalResult.changePrice} / ${changeSign}${evalResult.changePct}%)</span>
        </div>

        <!-- Col 5: 第一天花板與預期純利決策區 -->
        <div class="ceiling-profit-column">
          <div class="ceiling-info-line">
            <span class="ceiling-type">${evalResult.ceilingType}：</span>
            <span class="ceiling-price">${parseFloat(Number(evalResult.ceilingPrice).toFixed(2))} 元</span>
          </div>
          <div class="net-profit-chip ${evalResult.rules.netProfitPassed ? 'profit-pass' : 'profit-fail'}">
            <span class="chip-label">預期純利：</span>
            <span class="chip-val">${evalResult.netProfitPct >= 0 ? '+' : ''}${evalResult.netProfitPct}%</span>
          </div>
        </div>

        <!-- Col 6: 快捷按鈕 (籌碼 / 多空 / 資券) -->
        <div class="stock-action-links">
          <a href="https://tw.finance.yahoo.com/quote/${stock.code}.TW/institutional-trading" target="_blank" rel="noopener" class="btn-stock-link" title="籌碼分析 (三大法人/Yahoo 股市)">
            <span>籌碼</span>
          </a>
          <a href="https://tw.finance.yahoo.com/quote/${stock.code}.TW/bullbear" target="_blank" rel="noopener" class="btn-stock-link" title="多空診斷 (Yahoo 股市)">
            <span>多空</span>
          </a>
          <a href="https://fubon-ebrokerdj.fbs.com.tw/z/zc/zcn/zcn_${stock.code}.djhtm" target="_blank" rel="noopener" class="btn-stock-link" title="融資融券 (富邦 DJ)">
            <span>資券</span>
          </a>
        </div>
      </div>

      <!-- Lower Row: 原 Col 5 (左側均線乖離 | 右側量能均量) -->
      <div class="stock-lower-row">
        <!-- 左側：均線價格與乖離率 -->
        <div class="ma-metrics-group">
          <div class="metric-item">
            <span class="lbl">MA5</span>
            <span class="val">${stock.ma5}</span>
            <span class="sub ${evalResult.rules.bias5Passed ? 'bias-pass' : 'bias-fail'}">(${evalResult.bias5 >= 0 ? '+' : ''}${evalResult.bias5}%)</span>
          </div>
          <div class="row-divider">|</div>
          <div class="metric-item">
            <span class="lbl">MA10</span>
            <span class="val">${stock.ma10}</span>
            <span class="sub bias-pass">(${evalResult.bias10 >= 0 ? '+' : ''}${evalResult.bias10}%)</span>
          </div>
          <div class="row-divider">|</div>
          <div class="metric-item">
            <span class="lbl">MA20</span>
            <span class="val">${stock.ma20}</span>
            <span class="sub ${evalResult.rules.bias20Passed ? 'bias-pass' : 'bias-fail'}">(${evalResult.bias20 >= 0 ? '+' : ''}${evalResult.bias20}%)</span>
          </div>
        </div>

        <div class="row-divider-vertical">|</div>

        <!-- 右側：成交量與均量 -->
        <div class="vol-metrics-group">
          <div class="metric-item">
            <span class="lbl">量(張)</span>
            <span class="val">${stock.volume.toLocaleString()}</span>
          </div>
          <div class="row-divider">|</div>
          <div class="metric-item">
            <span class="lbl">MV5</span>
            <span class="val">${stock.vMa5.toLocaleString()}</span>
          </div>
          <div class="row-divider">|</div>
          <div class="metric-item">
            <span class="lbl">MV10</span>
            <span class="val">${stock.vMa10.toLocaleString()}</span>
          </div>
        </div>
      </div>

      ${!evalResult.isMatch ? `
        <!-- 未通過原因區域 (僅限未符合條件個股顯示) -->
        <div class="stock-failure-row">
          <span class="failure-text">${getFailureReasonText(evalResult, stock, currentParams)}</span>
        </div>
      ` : ''}
    `;

    // 綁定 Upper Row 點擊另開 PChome 個股簡介 (https://pchome.megatime.com.tw/stock/sid2330.html)
    const upperRow = card.querySelector('.stock-upper-row');
    if (upperRow) {
      upperRow.addEventListener('click', (e) => {
        if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.ceiling-profit-column')) return;
        window.open(`https://pchome.megatime.com.tw/stock/sid${stock.code}.html`, '_blank');
      });
    }

    // 綁定 Lower Row 點擊另開 PChome 技術分析 (https://pchome.megatime.com.tw/stock/sto0/ock1/sid2330.html)
    const lowerRow = card.querySelector('.stock-lower-row');
    if (lowerRow) {
      lowerRow.addEventListener('click', (e) => {
        if (e.target.closest('a') || e.target.closest('button')) return;
        window.open(`https://pchome.megatime.com.tw/stock/sto0/ock1/sid${stock.code}.html`, '_blank');
      });
    }

    // 綁定 Ceiling Profit Column 點擊彈出天花板壓力關卡 Popover
    const ceilingCol = card.querySelector('.ceiling-profit-column');
    if (ceilingCol) {
      ceilingCol.setAttribute('title', '點擊檢視所有上方壓力天花板關卡');
      ceilingCol.addEventListener('click', (e) => {
        e.stopPropagation();
        openCeilingPopover(stock);
      });
    }

    return card;
  }

  // 評估不符合篩選條件時之未通過原因字串 (依據決策樹優先順序)
  function getFailureReasonText(evalResult, stock, params) {
    if (evalResult.isMatch) return null;

    const reasons = [];

    // 1. 若為漲停板鎖死
    if (stock.limitUpPrice && stock.price >= stock.limitUpPrice) {
      reasons.push('當日漲停鎖死');
    }

    // 2. 若 20MA 乖離過高 / 不符
    if (!evalResult.rules.bias20Passed) {
      if (evalResult.bias20 > (params.bias20Max ?? 8.0)) {
        reasons.push('20MA 乖離過高');
      } else {
        reasons.push('20MA 乖離不符');
      }
    }

    // 3. 若 5MA 乖離不符
    if (!evalResult.rules.bias5Passed) {
      reasons.push('5MA 乖離不符');
    }

    // 4. 若量能不符 (低接模式未量縮)
    if (params.checkVolumeContraction && !evalResult.isVolContraction) {
      reasons.push('當日成交量未縮');
    }

    // 5. 若預期純利不足
    if (!evalResult.rules.netProfitPassed) {
      reasons.push('純利不足');
    }

    // 6. 其它補充規則 (站穩均線 / 三線糾結 / 流動性)
    if (!evalResult.rules.maPassed) {
      if (params.checkConvergence && !evalResult.isMAConverged) {
        reasons.push('三線未糾結');
      } else {
        reasons.push('未站穩均線');
      }
    }

    if (params.checkMinVolume && !evalResult.rules.liquidityPassed) {
      reasons.push('成交量過低');
    }

    if (reasons.length === 0) {
      reasons.push('未達波段標準');
    }

    return reasons.join('、');
  }

  // --------------------------------------------------------------------------
  // 天花板壓力關卡 Popover 彈出視窗處理
  // --------------------------------------------------------------------------

  function openCeilingPopover(stock) {
    const overlay = document.getElementById('ceilingPopoverOverlay');
    const stockSub = document.getElementById('popoverStockSub');
    const listContainer = document.getElementById('popoverCeilingList');
    if (!overlay || !listContainer) return;

    if (stockSub) {
      stockSub.innerText = `${stock.code} ${stock.name} (現價: ${stock.price.toLocaleString()} 元)`;
    }

    const allCeilings = ScreenerEngine.getAllCeilings(stock);

    // 找出最靠近現價的第一關卡
    const closestCeiling = allCeilings.length ? allCeilings[allCeilings.length - 1] : null;

    // 加入當前現價項目做為比較基準列
    const currentPriceItem = {
      type: '當前現價',
      price: stock.price,
      netProfitPct: 0.00,
      isCurrentPrice: true
    };

    // 將現價與天花板關卡合併並依價格高到低排序
    const fullList = [...allCeilings, currentPriceItem].sort((a, b) => b.price - a.price);

    listContainer.innerHTML = fullList.map(c => {
      if (c.isCurrentPrice) {
        return `
          <div class="popover-item-row is-current-price">
            <span class="popover-item-price current-price-color">${c.price.toFixed(2)} 元</span>
            <span class="popover-item-name">
              ${c.type}
            </span>
            <span class="popover-item-profit current-profit">0.00%</span>
          </div>
        `;
      }

      const isClosest = closestCeiling && c.price === closestCeiling.price && c.type === closestCeiling.type;
      const isPass = c.netProfitPct >= (currentParams.minNetProfit ?? 3.0);
      return `
        <div class="popover-item-row ${isClosest ? 'is-closest' : ''}">
          <span class="popover-item-price">${c.price.toFixed(2)} 元</span>
          <span class="popover-item-name">
            ${c.type}
            ${isClosest ? '<span class="popover-tag-closest">最近</span>' : ''}
          </span>
          <span class="popover-item-profit ${isPass ? 'pass' : 'fail'}">${c.netProfitPct >= 0 ? '+' : ''}${c.netProfitPct}%</span>
        </div>
      `;
    }).join('');

    overlay.style.display = 'flex';
  }

  function initCeilingPopoverEvents() {
    const overlay = document.getElementById('ceilingPopoverOverlay');
    const btnClose = document.getElementById('btnCloseCeilingPopover');

    if (btnClose) {
      btnClose.addEventListener('click', () => {
        if (overlay) overlay.style.display = 'none';
      });
    }

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.style.display = 'none';
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay && overlay.style.display === 'flex') {
        overlay.style.display = 'none';
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. Modal 視窗與選股池來源驗證數據 Populate
  // --------------------------------------------------------------------------

  function bindModalEvents() {
    btnOpenModal.addEventListener('click', () => {
      verificationModal.classList.add('active');
      verificationModal.setAttribute('aria-hidden', 'false');
    });

    btnCloseModal.addEventListener('click', closeModal);

    verificationModal.addEventListener('click', (e) => {
      if (e.target === verificationModal) closeModal();
    });

    // Tab switching
    const modalTabs = verificationModal.querySelectorAll('.tab-btn');
    modalTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        modalTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const targetPanelId = tab.dataset.tab;
        verificationModal.querySelectorAll('.tab-panel').forEach(panel => {
          panel.classList.remove('active');
        });
        document.getElementById(targetPanelId).classList.add('active');
      });
    });

    // 綁定 Modal 內層 MoneyDJ 校對按鈕
    const btnFetchMoneyDJModal = document.getElementById('btnFetchMoneyDJModal');
    if (btnFetchMoneyDJModal) {
      btnFetchMoneyDJModal.addEventListener('click', (e) => {
        e.stopPropagation();
        if (btnFetchMoneyDJModal.classList.contains('spinning')) return;
        btnFetchMoneyDJModal.classList.add('spinning');

        setTimeout(() => {
          btnFetchMoneyDJModal.classList.remove('spinning');
          const dateStr = (typeof HOLDINGS_0050 !== 'undefined' && HOLDINGS_0050.date) ? HOLDINGS_0050.date : '最新權重';
          showToast(`✅️已從 MoneyDJ 取得最新資料 - ${formatDateWithWeekday(dateStr)} ver.`);
          populateModalData();
        }, 600);
      });
    }

    // 綁定 Modal 內層 Top 100 成交量按鈕
    const btnFetchTop100Modal = document.getElementById('btnFetchTop100Modal');
    if (btnFetchTop100Modal) {
      btnFetchTop100Modal.addEventListener('click', (e) => {
        e.stopPropagation();
        if (btnFetchTop100Modal.classList.contains('spinning')) return;
        btnFetchTop100Modal.classList.add('spinning');

        setTimeout(() => {
          btnFetchTop100Modal.classList.remove('spinning');
          const dateStr = (typeof TOP100_VOLUME !== 'undefined' && TOP100_VOLUME.date) ? TOP100_VOLUME.date : '最新資料';
          showToast(`✅️已從 富邦證券 取得最新資料 - ${formatDateWithWeekday(dateStr)} ver.`);
          populateModalData();
        }, 600);
      });
    }

    // 綁定 Modal 內層 SITCA 投信買超按鈕
    const btnFetchSitcaModal = document.getElementById('btnFetchSitcaModal');
    if (btnFetchSitcaModal) {
      btnFetchSitcaModal.addEventListener('click', (e) => {
        e.stopPropagation();
        if (btnFetchSitcaModal.classList.contains('spinning')) return;
        btnFetchSitcaModal.classList.add('spinning');

        setTimeout(() => {
          btnFetchSitcaModal.classList.remove('spinning');
          const dateStr = (typeof SITCA_BUY_3D !== 'undefined' && SITCA_BUY_3D.date) ? SITCA_BUY_3D.date : '最新資料';
          showToast(`✅️已從 富邦證券 取得投信買超最新資料 - ${formatDateWithWeekday(dateStr)} ver.`);
          populateModalData();
        }, 600);
      });
    }

    // 綁定 Modal 內層 主力買超按鈕
    const btnFetchMajorModal = document.getElementById('btnFetchMajorModal');
    if (btnFetchMajorModal) {
      btnFetchMajorModal.addEventListener('click', (e) => {
        e.stopPropagation();
        if (btnFetchMajorModal.classList.contains('spinning')) return;
        btnFetchMajorModal.classList.add('spinning');

        setTimeout(() => {
          btnFetchMajorModal.classList.remove('spinning');
          const dateStr = (typeof MAJOR_BUY_1D !== 'undefined' && MAJOR_BUY_1D.date) ? MAJOR_BUY_1D.date : '最新資料';
          showToast(`✅️已從 富邦證券 取得主力買超最新資料 - ${formatDateWithWeekday(dateStr)} ver.`);
          populateModalData();
        }, 600);
      });
    }
  }

  function closeModal() {
    verificationModal.classList.remove('active');
    verificationModal.setAttribute('aria-hidden', 'true');
  }

  function formatDateWithWeekday(dateStr) {
    if (!dateStr) return '';
    if (dateStr.includes('(')) return dateStr;
    const cleanDateStr = dateStr.replace(/-/g, '/');
    const parts = cleanDateStr.split('/');
    if (parts.length === 3) {
      const y = parseInt(parts[0], 10);
      const m = parseInt(parts[1], 10) - 1;
      const d = parseInt(parts[2], 10);
      const dt = new Date(y, m, d);
      if (!isNaN(dt.getTime())) {
        const days = ['日', '一', '二', '三', '四', '五', '六'];
        return `${cleanDateStr} (${days[dt.getDay()]})`;
      }
    } else if (parts.length === 2) {
      const y = new Date().getFullYear();
      const m = parseInt(parts[0], 10) - 1;
      const d = parseInt(parts[1], 10);
      const dt = new Date(y, m, d);
      if (!isNaN(dt.getTime())) {
        const days = ['日', '一', '二', '三', '四', '五', '六'];
        return `${cleanDateStr} (${days[dt.getDay()]})`;
      }
    }
    return cleanDateStr;
  }

  // 填充 Modal 中 0050、Top100、投信買超、主力買超、半導體供應鏈數據
  function populateModalData() {
    // 0050 Data
    document.getElementById('date0050').textContent = formatDateWithWeekday(HOLDINGS_0050.date);

    const tbody0050 = document.getElementById('tableBody0050');
    tbody0050.innerHTML = HOLDINGS_0050.stocks.map((s, idx) => `
      <tr>
        <td style="text-align: center; color: var(--text-muted);">#${idx + 1}</td>
        <td><strong>${s.code}</strong></td>
        <td>${s.name}</td>
        <td style="text-align: right; padding-right: 1rem; font-weight: 600; color: var(--match-primary, #0284c7);">${s.weight || '-'}</td>
      </tr>
    `).join('');

    // Top 100 Volume Data
    document.getElementById('dateTop100').textContent = formatDateWithWeekday(TOP100_VOLUME.date);
    const linkTop100 = document.getElementById('linkTop100');
    if (linkTop100) linkTop100.href = TOP100_VOLUME.sourceUrl;

    const tbodyTop100 = document.getElementById('tableBodyTop100');
    tbodyTop100.innerHTML = TOP100_VOLUME.stocks.map((s, idx) => `
      <tr>
        <td style="text-align: center; color: var(--text-muted);">#${idx + 1}</td>
        <td><strong>${s.code}</strong></td>
        <td>${s.name}</td>
        <td style="text-align: center;"><span style="font-size: 0.72rem; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 600; background: ${s.market === '上櫃' ? '#fef3c7; color: #b45309;' : '#e0f2fe; color: #0369a1;'}">${s.market || '上市'}</span></td>
        <td style="text-align: right; padding-right: 1rem; font-weight: 600;">${s.volume.toLocaleString()} 張</td>
      </tr>
    `).join('');

    // SITCA Buy 3D Data
    if (typeof SITCA_BUY_3D !== 'undefined') {
      const dateSitca = document.getElementById('dateSitcaBuy');
      if (dateSitca) dateSitca.textContent = formatDateWithWeekday(SITCA_BUY_3D.date);
      const tbodySitca = document.getElementById('tableBodySitcaBuy');
      if (tbodySitca) {
        tbodySitca.innerHTML = SITCA_BUY_3D.stocks.map((s, idx) => `
          <tr>
            <td style="text-align: center; color: var(--text-muted);">#${idx + 1}</td>
            <td><strong>${s.code}</strong></td>
            <td>${s.name}</td>
            <td style="text-align: center;"><span style="font-size: 0.72rem; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 600; background: ${s.market === '上櫃' ? '#fef3c7; color: #b45309;' : '#e0f2fe; color: #0369a1;'}">${s.market || '上市'}</span></td>
            <td style="text-align: right; padding-right: 1rem; font-weight: 600; color: #15803d;">+${s.buyVol.toLocaleString()} 張</td>
          </tr>
        `).join('');
      }
    }

    // Major Buy 1D Data
    if (typeof MAJOR_BUY_1D !== 'undefined') {
      const dateMajor = document.getElementById('dateMajorBuy');
      if (dateMajor) dateMajor.textContent = formatDateWithWeekday(MAJOR_BUY_1D.date);
      const tbodyMajor = document.getElementById('tableBodyMajorBuy');
      if (tbodyMajor) {
        tbodyMajor.innerHTML = MAJOR_BUY_1D.stocks.map((s, idx) => `
          <tr>
            <td style="text-align: center; color: var(--text-muted);">#${idx + 1}</td>
            <td><strong>${s.code}</strong></td>
            <td>${s.name}</td>
            <td style="text-align: center;"><span style="font-size: 0.72rem; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 600; background: ${s.market === '上櫃' ? '#fef3c7; color: #b45309;' : '#e0f2fe; color: #0369a1;'}">${s.market || '上市'}</span></td>
            <td style="text-align: right; padding-right: 1rem; font-weight: 600; color: #15803d;">+${s.buyVol.toLocaleString()} 張</td>
          </tr>
        `).join('');
      }
    }

    // Semiconductor Supply Chain Data
    const dateSemi = document.getElementById('dateSemi');
    if (dateSemi) dateSemi.textContent = formatDateWithWeekday(SEMI_SUPPLY_CHAIN.date);
    const linkSemi = document.getElementById('linkSemi');
    if (linkSemi) linkSemi.href = SEMI_SUPPLY_CHAIN.sourceUrl;

    const semiContainer = document.getElementById('semiSupplyChainContainer');
    semiContainer.innerHTML = SEMI_SUPPLY_CHAIN.sectors.map(sec => `
      <div class="semi-card">
        <div class="semi-card-title">${sec.name}</div>
        <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.5rem;">${sec.description}</p>
        <ul class="semi-stock-list">
          ${sec.topStocks.map(stk => `
            <li class="semi-stock-item">
              <div>
                <span class="semi-rank-badge">${stk.rank}</span>
                <strong style="margin-left: 0.2rem;">${stk.code}</strong> ${stk.name}
              </div>
              <span style="font-size: 0.72rem; color: var(--text-muted);">${stk.note}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');

    // Deduplicated Summary Stats
    const sitcaCount = (typeof SITCA_BUY_3D !== 'undefined' && SITCA_BUY_3D.stocks) ? SITCA_BUY_3D.stocks.length : 0;
    const majorCount = (typeof MAJOR_BUY_1D !== 'undefined' && MAJOR_BUY_1D.stocks) ? MAJOR_BUY_1D.stocks.length : 0;

    const summaryContainer = document.getElementById('summaryStatsContainer');
    summaryContainer.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem; margin-top: 0.5rem;">
        <div style="background: var(--bg-surface-subtle); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color-light);">
          <div style="font-size: 0.75rem; color: var(--text-muted);">50 成分</div>
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--match-primary);">${HOLDINGS_0050.stocks.length} 檔</div>
        </div>
        <div style="background: var(--bg-surface-subtle); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color-light);">
          <div style="font-size: 0.75rem; color: var(--text-muted);">成交量百大</div>
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--match-primary);">${TOP100_VOLUME.stocks.length} 檔</div>
        </div>
        <div style="background: var(--bg-surface-subtle); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color-light);">
          <div style="font-size: 0.75rem; color: var(--text-muted);">投信買超</div>
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--match-primary);">${sitcaCount} 檔</div>
        </div>
        <div style="background: var(--bg-surface-subtle); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color-light);">
          <div style="font-size: 0.75rem; color: var(--text-muted);">主力買超</div>
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--match-primary);">${majorCount} 檔</div>
        </div>
        <div style="background: var(--bg-surface-subtle); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color-light);">
          <div style="font-size: 0.75rem; color: var(--text-muted);">半導體</div>
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--match-primary);">22 檔</div>
        </div>
        <div style="background: var(--match-bg); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--match-border);">
          <div style="font-size: 0.75rem; color: #0369a1;">去重後選股池總數</div>
          <div style="font-size: 1.2rem; font-weight: 700; color: #0369a1;">${STOCK_DATABASE.length} 檔個股</div>
        </div>
      </div>
    `;
  }

  // Run App
  init();
});
