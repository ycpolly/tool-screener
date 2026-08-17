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

  function loadCachedRealtimeQuotes() {
    try {
      const cachedStr = localStorage.getItem('CACHED_REALTIME_QUOTES');
      if (!cachedStr) return;
      const cachedObj = JSON.parse(cachedStr);
      if (cachedObj && cachedObj.data && Object.keys(cachedObj.data).length > 0) {
        const dataMap = cachedObj.data;
        let count = 0;
        for (const stock of STOCK_DATABASE) {
          if (dataMap[stock.code]) {
            const item = dataMap[stock.code];
            if (item.price && item.price > 0) {
              stock.price = item.price;
              if (item.open) stock.open = item.open;
              if (item.high) stock.high = item.high;
              if (item.low) stock.low = item.low;
              if (item.volume) stock.volume = item.volume;
              if (item.prevClose) stock.prevClose = item.prevClose;
              count++;
            }
          }
        }
        if (cachedObj.timestamp) {
          updateFetchTimestamp(new Date(cachedObj.timestamp));
        }
        console.log(`✅ 已自動載入上次連線快取的即時行情 (${count} 檔)`);
      }
    } catch (e) {
      console.warn('載入行情快取失敗:', e);
    }
  }

  function init() {
    initTheme();
    loadCachedRealtimeQuotes();
    bindModeTabEvents();
    bindParameterEvents();
    bindSearchAndFilterEvents();
    bindModalEvents();
    bindHeaderActions();
    bindFetchDataEvents();
    initCeilingPopoverEvents();
    initApiSettingsModal();
    populateModalData();
    updateMarketState();
    updateFetchTimestamp();
    switchMode('LOW_ENTRY');

    // 綁定首次進站 [🚀 取得最新價格] 英雄按鈕
    const btnInitialFetch = document.getElementById('btnInitialFetch');
    const initialFetchWrapper = document.getElementById('initialFetchWrapper');
    const poolFilterRow = document.querySelector('.pool-filter-row');
    const fetchActionsSubgroup = document.querySelector('.fetch-actions-subgroup');
    const statusSep = document.getElementById('statusSep');

    if (btnInitialFetch) {
      btnInitialFetch.addEventListener('click', async () => {
        if (initialFetchWrapper) initialFetchWrapper.style.display = 'none';
        if (matchCounterBadge) matchCounterBadge.style.display = 'none';
        await performRealTimeFetch(false);
        if (poolFilterRow) poolFilterRow.style.display = 'flex';
        if (fetchActionsSubgroup) fetchActionsSubgroup.style.display = 'inline-flex';
        if (statusSep) statusSep.style.display = 'inline';
        if (stockListContainer) stockListContainer.style.display = 'grid';
      });
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
        modeHintBox.innerHTML = '尋找爆量拉回後、腳踩均線的量縮洗盤點，適用時段為 12:30-13:00';
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
        modeHintBox.innerHTML = '尋找當日帶量突破的強勢攻擊股，適用時段為 09:30-10:30';
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

  // --------------------------------------------------------------------------
  // 深淺色 Theme 模式 (Slack Dark Mode + 跟隨系統預設 + 手動切換)
  // --------------------------------------------------------------------------
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    });

    const btnThemeToggle = document.getElementById('btnThemeToggle');
    if (btnThemeToggle) {
      btnThemeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        showToast(`已切換至 ${newTheme === 'dark' ? '🌙 深色模式' : '☀️ 淺色模式'}`);
      });
    }
  }

  // 綁定 Title Bar 版本點擊重整理
  function bindHeaderActions() {
    if (btnVersionBadge) {
      btnVersionBadge.addEventListener('click', () => {
        window.location.reload();
      });
    }
  }

  // 綁定手動連線 API 同步與進度條功能
  function bindFetchDataEvents() {
    if (!btnFetchLiveData) return;

    const syncProgressContainer = document.getElementById('syncProgressContainer');
    const syncProgressText = document.getElementById('syncProgressText');
    const syncProgressPct = document.getElementById('syncProgressPct');
    const syncProgressBar = document.getElementById('syncProgressBar');
    const autoRefreshCountdown = document.getElementById('autoRefreshCountdown');
    const btnCancelFetch = document.getElementById('btnCancelFetch');

    updateMarketState();

    btnFetchLiveData.addEventListener('click', () => {
      performRealTimeFetch(false);
    });

    if (btnCancelFetch) {
      btnCancelFetch.addEventListener('click', () => {
        isFetchCancelled = true;
        if (currentFetchController) {
          currentFetchController.abort();
        }
      });
    }

    // 綁定盤中自動更新開關 (每 60 秒與秒數倒數)
    const toggleAutoRefresh = document.getElementById('toggleAutoRefresh');
    let autoRefreshTimer = null;
    let countdownSec = 60;

    if (toggleAutoRefresh) {
      toggleAutoRefresh.addEventListener('change', (e) => {
        if (e.target.checked) {
          if (btnFetchLiveData) {
            btnFetchLiveData.disabled = true;
            btnFetchLiveData.classList.add('disabled');
          }
          showToast('已開啟每 60 秒自動連線更新！');
          if (autoRefreshCountdown) autoRefreshCountdown.style.display = 'inline';
          countdownSec = 60;
          if (autoRefreshCountdown) autoRefreshCountdown.innerText = `(倒數 ${countdownSec})`;

          performRealTimeFetch(false);

          autoRefreshTimer = setInterval(() => {
            countdownSec--;
            if (countdownSec <= 0) {
              countdownSec = 60;
              performRealTimeFetch(false);
            }
            if (autoRefreshCountdown) {
              autoRefreshCountdown.innerText = `(倒數 ${countdownSec})`;
            }
          }, 1000);
        } else {
          if (autoRefreshTimer) clearInterval(autoRefreshTimer);
          if (autoRefreshCountdown) autoRefreshCountdown.style.display = 'none';
          if (btnFetchLiveData) {
            btnFetchLiveData.disabled = false;
            btnFetchLiveData.classList.remove('disabled');
          }
          showToast('已關閉自動更新。');
        }
      });
    }
  }

  // --------------------------------------------------------------------------
  // 實時 API 連線 (Client-Side Real-Time Fetcher)
  // --------------------------------------------------------------------------

  let isFetchingRealTime = false;
  let isFetchCancelled = false;
  let currentFetchController = null;

  async function fetchWithTimeout(url, timeoutMs = 7000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    const onExternalAbort = () => controller.abort();
    if (currentFetchController) {
      currentFetchController.signal.addEventListener('abort', onExternalAbort, { once: true });
    }

    try {
      const res = await fetch(url, { signal: controller.signal, cache: 'no-store' });
      clearTimeout(timer);
      if (currentFetchController) {
        currentFetchController.signal.removeEventListener('abort', onExternalAbort);
      }
      return res;
    } catch (e) {
      clearTimeout(timer);
      if (currentFetchController) {
        currentFetchController.signal.removeEventListener('abort', onExternalAbort);
      }
      return null;
    }
  }
  // --------------------------------------------------------------------------
  // 實時 API 校對與資料同步 (Cloud Function Proxy)
  // --------------------------------------------------------------------------

  // 行情微服務伺服器連線
  async function fetchGcpServerQuotes(symbols = null) {
    try {
      const gcpUrl = localStorage.getItem('GCP_FUNCTION_URL') || '';
      const baseUrl = gcpUrl.trim() ? gcpUrl.trim() : '';
      if (!baseUrl) return null;
      const url = symbols
        ? `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}symbols=${encodeURIComponent(symbols)}`
        : baseUrl;
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) {
        const errJson = await res.json().catch(() => null);
        console.warn('⚠️ 行情 API 回傳非 200 狀態:', res.status, errJson);
        if (errJson && errJson.message) {
          showToast(`⚠️ 提示: ${errJson.message}`);
        }
        return null;
      }
      return await res.json();
    } catch (e) {
      console.error('❌ 連線行情 API 失敗 (請檢查網址或 CORS 設定):', e);
      return null;
    }
  }

  async function performRealTimeFetch(silent = false) {
    if (!btnFetchLiveData) return;
    if (isFetchingRealTime) return;

    const gcpUrl = (localStorage.getItem('GCP_FUNCTION_URL') || '').trim();
    if (!gcpUrl) {
      if (!silent) {
        showToast('💡 請點擊右上角齒輪 ⚙️ 設定您的行情 API 網址！');
        const modal = document.getElementById('apiSettingsModal');
        if (modal) modal.style.display = 'flex';
      }
      return;
    }

    isFetchingRealTime = true;
    isFetchCancelled = false;
    currentFetchController = new AbortController();

    const syncProgressContainer = document.getElementById('syncProgressContainer');
    const syncProgressText = document.getElementById('syncProgressText');
    const syncProgressPct = document.getElementById('syncProgressPct');
    const syncProgressBar = document.getElementById('syncProgressBar');
    const toggleAutoRefresh = document.getElementById('toggleAutoRefresh');

    // 連線期間將手動按鈕與自動更新開關一律關閉 (DISABLED)
    btnFetchLiveData.disabled = true;
    btnFetchLiveData.classList.add('disabled');
    if (toggleAutoRefresh) {
      toggleAutoRefresh.disabled = true;
      if (toggleAutoRefresh.parentElement) toggleAutoRefresh.parentElement.classList.add('disabled');
    }

    if (!silent) {
      btnFetchLiveData.classList.add('spinning');
      if (syncProgressContainer) {
        syncProgressContainer.style.display = 'flex';
        if (syncProgressText) syncProgressText.innerText = `🔄 準備連線行情 API...`;
        if (syncProgressPct) syncProgressPct.innerText = '0%';
        if (syncProgressBar) syncProgressBar.style.width = '0%';
      }
    }

    try {
      const allStocks = STOCK_DATABASE;
      const totalToSync = allStocks.length;

      let successCount = 0;
      let latestApiTimestamp = null;

      // 連線行情微服務 API
      const allCodes = allStocks.map(s => s.code).join(',');
      const gcpResult = await fetchGcpServerQuotes(allCodes);

      if (gcpResult && gcpResult.success && gcpResult.data && Object.keys(gcpResult.data).length > 0) {
        // 從行情微服務 API 成功取得數據！
        const dataMap = gcpResult.data;
        const cachedQuotesMap = {};
        for (const stock of allStocks) {
          if (dataMap[stock.code]) {
            const fItem = dataMap[stock.code];
            if (fItem.price && fItem.price > 0) {
              stock.price = fItem.price;
              if (fItem.open) stock.open = fItem.open;
              if (fItem.high) stock.high = fItem.high;
              if (fItem.low) stock.low = fItem.low;
              if (fItem.volume) stock.volume = fItem.volume;
              if (fItem.change) stock.prevClose = fItem.price - fItem.change;

              cachedQuotesMap[stock.code] = {
                price: stock.price,
                open: stock.open,
                high: stock.high,
                low: stock.low,
                volume: stock.volume,
                prevClose: stock.prevClose
              };
              successCount++;
            }
          }
        }
        latestApiTimestamp = gcpResult.timestamp || Date.now();

        // 將最新同步的行情自動保存至瀏覽器快取 (localStorage)，確保下次開啟保持最新
        try {
          localStorage.setItem('CACHED_REALTIME_QUOTES', JSON.stringify({
            timestamp: latestApiTimestamp,
            data: cachedQuotesMap
          }));
        } catch (e) { }

        if (!silent) {
          if (syncProgressText) syncProgressText.innerText = `✅ 已完成 ${successCount} 檔同步`;
          if (syncProgressPct) syncProgressPct.innerText = '100%';
          if (syncProgressBar) syncProgressBar.style.width = '100%';
        }
      } else {
        if (!silent) {
          if (gcpResult && gcpResult.debug_notice) {
            showToast(`⚠️ ${gcpResult.debug_notice}`);
          } else {
            showToast('⚠️ 連線行情 API 失敗，請檢查 API 設定。');
          }
        }
      }

      const latestMarketTime = latestApiTimestamp ? new Date(latestApiTimestamp) : new Date();
      updateFetchTimestamp(latestMarketTime);
      updateMarketState();

      isFetchingRealTime = false;
      renderStockPool();

      const initialFetchWrapper = document.getElementById('initialFetchWrapper');
      const poolFilterRow = document.querySelector('.pool-filter-row');
      const fetchActionsSubgroup = document.querySelector('.fetch-actions-subgroup');
      const statusSep = document.getElementById('statusSep');

      if (initialFetchWrapper) initialFetchWrapper.style.display = 'none';
      if (poolFilterRow) poolFilterRow.style.display = 'flex';
      if (fetchActionsSubgroup) fetchActionsSubgroup.style.display = 'inline-flex';
      if (statusSep) statusSep.style.display = 'inline';
      if (stockListContainer) stockListContainer.style.display = 'grid';

      if (!silent && successCount > 0) {
        showToast(`✅ 已成功同步 ${successCount} / ${totalToSync} 檔最新行情`);
      }
    } catch (err) {
      console.error('performRealTimeFetch failed:', err);
    } finally {
      isFetchingRealTime = false;
      currentFetchController = null;

      // 依據「自動更新開關」狀態維護「手動更新按鈕」與「開關本身」之狀態
      if (btnFetchLiveData) {
        btnFetchLiveData.classList.remove('spinning');
        if (toggleAutoRefresh && toggleAutoRefresh.checked) {
          btnFetchLiveData.disabled = true;
          btnFetchLiveData.classList.add('disabled');
        } else {
          btnFetchLiveData.disabled = false;
          btnFetchLiveData.classList.remove('disabled');
        }
      }
      if (toggleAutoRefresh) {
        toggleAutoRefresh.disabled = false;
        if (toggleAutoRefresh.parentElement) toggleAutoRefresh.parentElement.classList.remove('disabled');
      }

      if (!silent && syncProgressContainer) {
        setTimeout(() => {
          syncProgressContainer.style.display = 'none';
        }, 800);
      }
    }
  }

  // 保留相容性
  function updateMarketState() { }

  // 更新股價資料時間標籤 (根據 API 真實時間判斷 (撮合) 或 (收盤))
  function updateFetchTimestamp(apiDate = null) {
    if (!dataTimestampBadge) return;

    let targetDate = apiDate;
    if (!targetDate || isNaN(targetDate.getTime())) {
      targetDate = new Date();
    }

    const YY = String(targetDate.getFullYear()).slice(2);
    const MM = String(targetDate.getMonth() + 1).padStart(2, '0');
    const DD = String(targetDate.getDate()).padStart(2, '0');
    const hh = String(targetDate.getHours()).padStart(2, '0');
    const mm = String(targetDate.getMinutes()).padStart(2, '0');

    const day = targetDate.getDay();
    const mins = targetDate.getHours() * 60 + targetDate.getMinutes();
    const isTradingDay = (day >= 1 && day <= 5);

    // 台股盤中交易時間：平日 09:00 (540分) ~ 13:29 (809分) 為盤中動態撮合
    if (isTradingDay && mins >= 540 && mins < 810) {
      dataTimestampBadge.innerText = `資料時間：${YY}-${MM}-${DD} ${hh}:${mm} (撮合)`;
    } else {
      // 13:30 收盤過後或週末盤後，一律顯示 13:30 (收盤)
      dataTimestampBadge.innerText = `資料時間：${YY}-${MM}-${DD} 13:30 (收盤)`;
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
        if (currentCategory === 'ValueTop' && !stock.categories.includes('ValueTop')) return false;
        if (currentCategory === 'SitcaBuy' && !stock.categories.includes('SitcaBuy')) return false;
        if (currentCategory === 'MajorBuy' && !stock.categories.includes('MajorBuy')) return false;
        if (currentCategory === 'TurnoverRate' && !stock.categories.includes('TurnoverRate')) return false;
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
    if (matchCounterBadge) {
      matchCounterBadge.textContent = `${totalMatchCount} / ${evaluatedStocks.length} 檔符合`;
      const initialFetchWrapper = document.getElementById('initialFetchWrapper');
      const isInitialHidden = !initialFetchWrapper || initialFetchWrapper.style.display === 'none';
      if (isInitialHidden && !isFetchingRealTime) {
        matchCounterBadge.style.display = 'inline-block';
      } else {
        matchCounterBadge.style.display = 'none';
      }
    }

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

    const categoryMap = {
      '0050': '50成分',
      'Top100': '量大',
      'ValueTop': '值大',
      'SitcaBuy3D': '投信買超(3日)',
      'SitcaBuy5D': '投信買超(5日)',
      'MajorBuy1D': '主力買超(1日)',
      'MajorBuy3D': '主力買超(3日)',
      'TurnoverRate': '週轉率',
      '半導體': '半導體'
    };

    const categoryLabels = [];
    (stock.categories || []).forEach(cat => {
      let label = categoryMap[cat];
      if (!label && cat.startsWith('半導體')) {
        label = '半導體';
      }
      if (label && !categoryLabels.includes(label)) {
        categoryLabels.push(label);
      }
    });

    const categoryTagsHtml = categoryLabels.length > 0
      ? `<div class="stock-category-tags">${categoryLabels.join('｜')}</div>`
      : '';

    const currentPrice = (evalResult.currentPrice !== undefined) ? evalResult.currentPrice : stock.price;
    const kdResult = ScreenerEngine.calculateKD(stock, currentPrice);

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
          ${categoryTagsHtml}
        </div>

        <!-- Col 4: 現價或收盤價 -->
        <div class="price-change-cell">
          <span class="current-price ${priceClass}">${stock.price.toLocaleString()}</span>
          <span class="price-change ${priceClass}">(${changeSign}${evalResult.changePrice} / ${changeSign}${evalResult.changePct}%)</span>
        </div>

        <!-- Col 5: 第一天花板與預期純利決策區 -->
        <div class="ceiling-profit-column">
          <div class="ceiling-info-line">
            <span class="ceiling-type">${evalResult.ceilingType}</span>
            <span class="ceiling-price">${parseFloat(Number(evalResult.ceilingPrice).toFixed(2))} 元</span>
          </div>
          <div class="net-profit-chip ${evalResult.rules.netProfitPassed ? 'profit-pass' : 'profit-fail'}">
            <span class="chip-label">預期純利</span>
            <span class="chip-val">${evalResult.netProfitPct >= 0 ? '+' : ''}${evalResult.netProfitPct}%</span>
          </div>
        </div>

        <!-- Col 6: 快捷按鈕 (籌碼 / 多空 / 資券 / 盤後) -->
        <div class="stock-action-links">
          <a href="https://tw.finance.yahoo.com/quote/${stock.code}.TW/institutional-trading" target="_blank" rel="noopener" class="btn-stock-link" title="籌碼分析 (三大法人)">
            <span>籌碼</span>
          </a>
          <a href="https://tw.finance.yahoo.com/quote/${stock.code}.TW/bullbear" target="_blank" rel="noopener" class="btn-stock-link" title="多空診斷">
            <span>多空</span>
          </a>
          <a href="https://fubon-ebrokerdj.fbs.com.tw/z/zc/zcn/zcn_${stock.code}.djhtm" target="_blank" rel="noopener" class="btn-stock-link" title="融資融券">
            <span>資券</span>
          </a>
          <a href="https://fubon-ebrokerdj.fbs.com.tw/z/zc/zcw/zcw1_${stock.code}.djhtm" target="_blank" rel="noopener" class="btn-stock-link" title="盤後資訊">
            <span>盤後</span>
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

        <!-- 中間：KD 智慧指標標籤 -->
        <div class="kd-metrics-group" title="KD(9,3) 智慧指標 (K值/D值) 與狀態">
          <span style="font-size: 0.68rem; color: var(--text-muted); font-weight: 500;">KD (9,3)</span>
          <span class="kd-value-text">${kdResult.k}/${kdResult.d}</span>
          <span class="kd-chip ${kdResult.statusClass}">${kdResult.status}</span>
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
      type: '現價',
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

  // ⚙️ 雲端 API (GCP Cloud Function URL) 設定彈窗初始化
  function initApiSettingsModal() {
    const btnOpen = document.getElementById('btnOpenApiSettings');
    const modal = document.getElementById('apiSettingsModal');
    const btnClose = document.getElementById('btnCloseApiSettings');
    const btnSave = document.getElementById('btnSaveGcpUrl');
    const btnClear = document.getElementById('btnClearGcpUrl');
    const inputUrl = document.getElementById('inputGcpUrl');

    if (!modal) return;

    if (btnOpen) {
      btnOpen.addEventListener('click', () => {
        const savedUrl = localStorage.getItem('GCP_FUNCTION_URL') || '';
        if (inputUrl) inputUrl.value = savedUrl;
        modal.style.display = 'flex';
      });
    }

    if (btnClose) {
      btnClose.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    if (btnSave) {
      btnSave.addEventListener('click', () => {
        const urlVal = inputUrl ? inputUrl.value.trim() : '';
        if (urlVal) {
          localStorage.setItem('GCP_FUNCTION_URL', urlVal);
          showToast('✅ 已儲存 API 網址！');
        } else {
          localStorage.removeItem('GCP_FUNCTION_URL');
          showToast('💡 已清除 API 網址設定');
        }
        modal.style.display = 'none';
      });
    }

    if (btnClear) {
      btnClear.addEventListener('click', () => {
        if (inputUrl) inputUrl.value = '';
        localStorage.removeItem('GCP_FUNCTION_URL');
        showToast('💡 已清除 API 網址設定');
        modal.style.display = 'none';
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
        modal.style.display = 'none';
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

    // Value Top Data
    if (typeof VALUE_TOP !== 'undefined') {
      const dateValue = document.getElementById('dateValueTop');
      if (dateValue) dateValue.textContent = formatDateWithWeekday(VALUE_TOP.date);
      const tbodyValue = document.getElementById('tableBodyValueTop');
      if (tbodyValue) {
        tbodyValue.innerHTML = VALUE_TOP.stocks.map((s, idx) => `
          <tr>
            <td style="text-align: center; color: var(--text-muted);">#${idx + 1}</td>
            <td><strong>${s.code}</strong></td>
            <td>${s.name}</td>
            <td style="text-align: center;"><span style="font-size: 0.72rem; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 600; background: ${s.market === '上櫃' ? '#fef3c7; color: #b45309;' : '#e0f2fe; color: #0369a1;'}">${s.market || '上市'}</span></td>
            <td style="text-align: right; padding-right: 1rem; font-weight: 600; color: #0284c7;">${s.amount ? s.amount.toLocaleString() : '-'} 千元</td>
          </tr>
        `).join('');
      }
    }

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

    // Turnover Rate Data
    if (typeof TURNOVER_RATE !== 'undefined') {
      const dateTurnover = document.getElementById('dateTurnoverRate');
      if (dateTurnover) dateTurnover.textContent = formatDateWithWeekday(TURNOVER_RATE.date);
      const linkTurnoverListed = document.getElementById('linkTurnoverListed');
      if (linkTurnoverListed) linkTurnoverListed.href = TURNOVER_RATE.sourceUrl;
      const tbodyTurnover = document.getElementById('tableBodyTurnoverRate');
      if (tbodyTurnover) {
        tbodyTurnover.innerHTML = TURNOVER_RATE.stocks.map((s, idx) => `
          <tr>
            <td style="text-align: center; color: var(--text-muted);">#${idx + 1}</td>
            <td><strong>${s.code}</strong></td>
            <td>${s.name}</td>
            <td style="text-align: center;"><span style="font-size: 0.72rem; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 600; background: ${s.market === '上櫃' ? '#fef3c7; color: #b45309;' : '#e0f2fe; color: #0369a1;'}">${s.market || '上市'}</span></td>
            <td style="text-align: right; padding-right: 1rem; font-weight: 600; color: var(--match-primary, #0284c7);">${s.turnoverRate !== undefined ? s.turnoverRate.toFixed(2) + '%' : '-'}</td>
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
    const valueCount = (typeof VALUE_TOP !== 'undefined' && VALUE_TOP.stocks) ? VALUE_TOP.stocks.length : 0;
    const sitcaCount = (typeof SITCA_BUY_3D !== 'undefined' && SITCA_BUY_3D.stocks) ? SITCA_BUY_3D.stocks.length : 0;
    const majorCount = (typeof MAJOR_BUY_1D !== 'undefined' && MAJOR_BUY_1D.stocks) ? MAJOR_BUY_1D.stocks.length : 0;
    const turnoverCount = (typeof TURNOVER_RATE !== 'undefined' && TURNOVER_RATE.stocks) ? TURNOVER_RATE.stocks.length : 0;

    const summaryContainer = document.getElementById('summaryStatsContainer');
    summaryContainer.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.75rem; margin-top: 0.5rem;">
        <div style="background: var(--bg-surface-subtle); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color-light);">
          <div style="font-size: 0.75rem; color: var(--text-muted);">50 成分</div>
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--match-primary);">${HOLDINGS_0050.stocks.length} 檔</div>
        </div>
        <div style="background: var(--bg-surface-subtle); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color-light);">
          <div style="font-size: 0.75rem; color: var(--text-muted);">量大</div>
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--match-primary);">${TOP100_VOLUME.stocks.length} 檔</div>
        </div>
        <div style="background: var(--bg-surface-subtle); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color-light);">
          <div style="font-size: 0.75rem; color: var(--text-muted);">值大</div>
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--match-primary);">${valueCount} 檔</div>
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
          <div style="font-size: 0.75rem; color: var(--text-muted);">週轉率</div>
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--match-primary);">${turnoverCount} 檔</div>
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
