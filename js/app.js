/**
 * 台股盤中波段選股工具 - 主應用程式 (App Controller)
 */

document.addEventListener('DOMContentLoaded', () => {
  // App State
  let currentParams = { ...ScreenerEngine.defaultParams };
  let currentMode = 'LOW_ENTRY';
  let selectedCategories = ['ALL'];
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
  const checkRedCandle = document.getElementById('paramCheckRedCandle');
  const checkKdFilter = document.getElementById('paramCheckKdFilter');
  const checkCandleAvoidance = document.getElementById('paramCheckCandleAvoidance');
  const labelVolumeContraction = document.getElementById('labelVolumeContraction');
  const descVolContraction = document.getElementById('descVolContraction');
  const labelKdFilter = document.getElementById('labelKdFilter');
  const descKdFilter = document.getElementById('descKdFilter');
  const labelCandleAvoidance = document.getElementById('labelCandleAvoidance');
  const descCandleAvoidance = document.getElementById('descCandleAvoidance');
  const rowRedCandle = document.getElementById('rowRedCandle');
  const rowCandleAvoidance = document.getElementById('rowCandleAvoidance');
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

  // 從 UI_STRINGS 自動注入所有 ⓘ 說明彈窗內文 (Single Source of Truth)
  function applyUIStrings() {
    if (typeof UI_STRINGS === 'undefined') return;
    if (UI_STRINGS.POPOVERS) {
      for (const [id, text] of Object.entries(UI_STRINGS.POPOVERS)) {
        const popover = document.getElementById(id);
        if (popover) {
          const p = popover.querySelector('.popover-content p');
          if (p) p.innerText = text;
        }
      }
    }
  }

  function init() {
    applyUIStrings();
    initTheme();
    loadCachedRealtimeQuotes();
    bindModeTabEvents();
    bindParameterEvents();
    bindSearchAndFilterEvents();
    bindModalEvents();
    bindHeaderActions();
    bindFetchDataEvents();
    initCeilingPopoverEvents();
    initKdPopoverEvents();
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
      strategyMode: currentMode,
      bias5Min: parseNum(inputBias5Min, -3.0),
      bias5Max: parseNum(inputBias5Max, 5.0),
      bias20Min: parseNum(inputBias20Min, -2.0),
      bias20Max: parseNum(inputBias20Max, 8.0),
      maAboveMode: maAboveMode,
      checkConvergence: checkConvergence ? checkConvergence.checked : false,
      convergenceMax: parseNum(inputConvergenceMax, 2.0),
      checkMinVolume: checkMinVolume ? checkMinVolume.checked : true,
      minVolume: parseNum(inputMinVolume, 1000),
      checkVolumeContraction: (currentMode === 'LOW_ENTRY') ? (checkVolumeContraction ? checkVolumeContraction.checked : true) : false,
      checkVolumeExpansion: (currentMode === 'MOMENTUM') ? (checkVolumeContraction ? checkVolumeContraction.checked : true) : false,
      checkRedCandle: (currentMode === 'MOMENTUM') ? (checkRedCandle ? checkRedCandle.checked : true) : false,
      checkKdFilter: checkKdFilter ? checkKdFilter.checked : true,
      checkCandleAvoidance: checkCandleAvoidance ? checkCandleAvoidance.checked : true,
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
    const modeConfig = (typeof UI_STRINGS !== 'undefined' && UI_STRINGS.STRATEGY_MODES && UI_STRINGS.STRATEGY_MODES[modeKey])
      ? UI_STRINGS.STRATEGY_MODES[modeKey]
      : (UI_STRINGS.STRATEGY_MODES ? UI_STRINGS.STRATEGY_MODES.LOW_ENTRY : null);

    if (modeKey === 'LOW_ENTRY') {
      if (tabLowEntry) {
        tabLowEntry.classList.add('active');
        tabLowEntry.setAttribute('aria-selected', 'true');
      }
      if (tabMomentum) {
        tabMomentum.classList.remove('active');
        tabMomentum.setAttribute('aria-selected', 'false');
      }
      if (modeHintBox && modeConfig) modeHintBox.innerText = modeConfig.hint;
      if (labelVolumeContraction && modeConfig) labelVolumeContraction.innerText = modeConfig.labelVol;
      if (descVolContraction && modeConfig) descVolContraction.innerText = modeConfig.descVol;
      if (labelKdFilter && modeConfig) labelKdFilter.innerText = modeConfig.labelKd;
      if (descKdFilter && modeConfig) descKdFilter.innerText = modeConfig.descKd;
      if (labelCandleAvoidance && modeConfig) labelCandleAvoidance.innerText = modeConfig.labelCandle;
      if (descCandleAvoidance && modeConfig) descCandleAvoidance.innerText = modeConfig.descCandle;
      if (rowRedCandle) rowRedCandle.style.display = 'none';
      if (checkVolumeContraction) checkVolumeContraction.checked = true;
      if (checkRedCandle) checkRedCandle.checked = false;
      if (checkKdFilter) checkKdFilter.checked = true;
      if (checkCandleAvoidance) checkCandleAvoidance.checked = true;
    } else if (modeKey === 'MOMENTUM') {
      if (tabMomentum) {
        tabMomentum.classList.add('active');
        tabMomentum.setAttribute('aria-selected', 'true');
      }
      if (tabLowEntry) {
        tabLowEntry.classList.remove('active');
        tabLowEntry.setAttribute('aria-selected', 'false');
      }
      if (modeHintBox && modeConfig) modeHintBox.innerText = modeConfig.hint;
      if (labelVolumeContraction && modeConfig) labelVolumeContraction.innerText = modeConfig.labelVol;
      if (descVolContraction && modeConfig) descVolContraction.innerText = modeConfig.descVol;
      if (labelKdFilter && modeConfig) labelKdFilter.innerText = modeConfig.labelKd;
      if (descKdFilter && modeConfig) descKdFilter.innerText = modeConfig.descKd;
      if (labelCandleAvoidance && modeConfig) labelCandleAvoidance.innerText = modeConfig.labelCandle;
      if (descCandleAvoidance && modeConfig) descCandleAvoidance.innerText = modeConfig.descCandle;
      if (rowRedCandle) rowRedCandle.style.display = 'flex';
      if (checkVolumeContraction) checkVolumeContraction.checked = true;
      if (checkRedCandle) checkRedCandle.checked = true;
      if (checkKdFilter) checkKdFilter.checked = true;
      if (checkCandleAvoidance) checkCandleAvoidance.checked = true;
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

  // 通用防抖 (Debounce) 工具函式：防止使用者在輸入框連續敲擊時頻繁觸發全站重算
  function debounce(func, delay = 300) {
    let timer = null;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  // 綁定選股參數控制項事件
  function bindParameterEvents() {
    const paramInputs = [
      inputBias5Min, inputBias5Max, inputBias20Min, inputBias20Max,
      inputConvergenceMax, inputMinVolume, inputMinNetProfit
    ];

    // 對輸入框套用 300ms 防抖 (Debounce)，打字過程零卡頓，停止輸入 300ms 後自動計算
    const debouncedReadAndRender = debounce(() => {
      readParamsFromUI();
      renderStockPool();
    }, 300);

    paramInputs.forEach(input => {
      if (input) {
        input.addEventListener('input', debouncedReadAndRender);
      }
    });

    const paramCheckboxes = [
      checkMinVolume, checkVolumeContraction, checkRedCandle, checkKdFilter,
      checkCandleAvoidance, checkNotLimitUp, checkNotDisposed, checkVolumeBurst, checkNetProfit
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
    const btnClearSearch = document.getElementById('btnClearSearch');

    const updateClearBtnVisibility = () => {
      if (btnClearSearch) {
        btnClearSearch.style.display = searchInput.value.trim().length > 0 ? 'flex' : 'none';
      }
    };

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      updateClearBtnVisibility();
      renderStockPool();
    });

    if (btnClearSearch) {
      btnClearSearch.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        updateClearBtnVisibility();
        searchInput.focus();
        renderStockPool();
      });
    }

    const dropdownWrapper = document.getElementById('categoryDropdownWrapper');
    const dropdownBtn = document.getElementById('categoryDropdownBtn');
    const dropdownMenu = document.getElementById('categoryDropdownMenu');
    const dropdownLabel = document.getElementById('categoryDropdownLabel');
    const checkALL = document.getElementById('catCheck_ALL');
    const catCheckboxes = document.querySelectorAll('.cat-checkbox');

    const updateDropdownState = () => {
      const checkedBoxes = Array.from(catCheckboxes).filter(cb => cb.checked);
      const selectedVals = checkedBoxes.map(cb => cb.value);

      if (selectedVals.length === 0 || (checkALL && checkALL.checked)) {
        selectedCategories = ['ALL'];
        if (checkALL) checkALL.checked = true;
        catCheckboxes.forEach(cb => cb.checked = false);
        if (dropdownLabel) dropdownLabel.innerText = '全選去重 (全部個股池)';
      } else {
        if (checkALL) checkALL.checked = false;
        selectedCategories = selectedVals;
        if (dropdownLabel) {
          if (selectedVals.length === 1) {
            const labelText = checkedBoxes[0].nextElementSibling.innerText.split(' ')[0];
            dropdownLabel.innerText = `選股池: ${labelText}`;
          } else if (selectedVals.length === 2) {
            const label1 = checkedBoxes[0].nextElementSibling.innerText.split(' ')[0];
            const label2 = checkedBoxes[1].nextElementSibling.innerText.split(' ')[0];
            dropdownLabel.innerText = `選股池: ${label1}, ${label2}`;
          } else {
            dropdownLabel.innerText = `已選 ${selectedVals.length} 項選股池`;
          }
        }
      }
      renderStockPool();
    };

    if (dropdownBtn && dropdownMenu) {
      dropdownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isOpen ? 'none' : 'block';
        if (dropdownWrapper) dropdownWrapper.classList.toggle('open', !isOpen);
      });

      if (checkALL) {
        checkALL.addEventListener('change', () => {
          if (checkALL.checked) {
            catCheckboxes.forEach(cb => cb.checked = false);
          }
          updateDropdownState();
        });
      }

      catCheckboxes.forEach(cb => {
        cb.addEventListener('change', () => {
          if (cb.checked && checkALL) {
            checkALL.checked = false;
          }
          updateDropdownState();
        });
      });

      document.addEventListener('click', (e) => {
        if (dropdownWrapper && !dropdownWrapper.contains(e.target)) {
          dropdownMenu.style.display = 'none';
          if (dropdownWrapper) dropdownWrapper.classList.remove('open');
        }
      });
    }

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
  let hasFetchedRealTime = false;
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

  // 動態即時校對與重算大盤/櫃買指數之價、漲跌幅、20MA 乖離率、狀態描述與 KD 指標狀態
  function updateIndexFromQuote(idxObj, newPrice, prevClose) {
    if (!idxObj || !newPrice || newPrice <= 0) return;

    idxObj.price = parseFloat(newPrice.toFixed(2));
    if (prevClose && prevClose > 0) {
      idxObj.prevClose = parseFloat(prevClose.toFixed(2));
      idxObj.changePrice = parseFloat((idxObj.price - idxObj.prevClose).toFixed(2));
      idxObj.changePct = parseFloat(((idxObj.changePrice / idxObj.prevClose) * 100).toFixed(2));
    }

    if (idxObj.ma20 && idxObj.ma20 > 0) {
      idxObj.bias20 = parseFloat((((idxObj.price - idxObj.ma20) / idxObj.ma20) * 100).toFixed(2));
    }

    // 呼叫 ScreenerEngine 依 5MA / 20MA 動態判定最新狀態描述
    if (typeof ScreenerEngine !== 'undefined' && ScreenerEngine.computeIndexStatusDesc) {
      idxObj.statusDesc = ScreenerEngine.computeIndexStatusDesc(idxObj);
    }

    // 依權威點位保留精確 KD 值，並動態判定 KD 狀態 (優先級：黃金交叉/死亡交叉 > 超買過熱 > 低檔整理 > 中檔震盪)
    if (idxObj.kd) {
      const k = idxObj.kd.k;
      const d = idxObj.kd.d;
      const prevK = idxObj.kd.prevK !== undefined ? idxObj.kd.prevK : k;
      const prevD = idxObj.kd.prevD !== undefined ? idxObj.kd.prevD : d;

      const isGold = (prevK < prevD && k >= d);
      const isDeath = (prevK > prevD && k <= d);

      if (isGold) {
        idxObj.kd.status = '黃金交叉';
      } else if (isDeath) {
        idxObj.kd.status = '死亡交叉';
      } else if (k >= 80) {
        idxObj.kd.status = '超買過熱';
      } else if (k < 50) {
        idxObj.kd.status = '低檔整理';
      } else {
        idxObj.kd.status = '中檔震盪';
      }
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

      // 連線行情微服務 API (同時帶上大盤加權 t00 與 櫃買 o00 指數代碼)
      const allCodes = allStocks.map(s => s.code).join(',') + ',t00,o00';
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

        // 同步大盤 (加權) 與 櫃買 (OTC) 雙指數報價
        const taiexItem = dataMap['t00'] || dataMap['tse_t00.tw'];
        if (taiexItem && taiexItem.price && taiexItem.price > 0) {
          updateIndexFromQuote(MARKET_DATA.taiex, taiexItem.price, taiexItem.prevClose);
        }
        const otcItem = dataMap['o00'] || dataMap['otc_o00.tw'];
        if (otcItem && otcItem.price && otcItem.price > 0) {
          updateIndexFromQuote(MARKET_DATA.otc, otcItem.price, otcItem.prevClose);
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

      hasFetchedRealTime = true;
      isFetchingRealTime = false;

      // 即時刷新市場多空風控橫幅看板 (系統總風控判定、雙指數價格、20MA 乖離與燈號)
      renderMarketRegimeBanner(MARKET_DATA);

      const latestMarketTime = latestApiTimestamp ? new Date(latestApiTimestamp) : new Date();
      updateFetchTimestamp(latestMarketTime);
      updateMarketState();
      updateMarketState();

      hasFetchedRealTime = true;
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

    // 1. 過濾代碼格式、搜尋關鍵字與類別
    let filteredStocks = STOCK_DATABASE.filter(stock => {
      // 0. 硬性代碼濾網：排除 00 開頭 ETF 及 代碼長度 > 4 碼權證與憑證
      if (!ScreenerEngine.isValidStockCode(stock.code)) return false;

      // Search Code or Name
      if (searchQuery) {
        const matchesCode = stock.code.toLowerCase().includes(searchQuery);
        const matchesName = stock.name.toLowerCase().includes(searchQuery);
        if (!matchesCode && !matchesName) return false;
      }

      // Category filter (Multi-Select Support)
      if (selectedCategories.length > 0 && !selectedCategories.includes('ALL')) {
        const hasMatch = selectedCategories.some(cat => {
          if (cat === '0050') return stock.categories.includes('0050');
          if (cat === '0051') return stock.categories.includes('0051');
          if (cat === 'Top100') return stock.categories.includes('Top100');
          if (cat === 'ValueTop') return stock.categories.includes('ValueTop');
          if (cat === 'SitcaBuy') return stock.categories.includes('SitcaBuy');
          if (cat === 'MajorBuy') return stock.categories.includes('MajorBuy');
          if (cat === 'TurnoverRate') return stock.categories.includes('TurnoverRate');
          if (cat === '半導體') return stock.categories.some(c => c.startsWith('半導體'));
          return false;
        });
        if (!hasMatch) return false;
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

    renderMarketRegimeBanner();
  }

  // --------------------------------------------------------------------------
  // 市場環境多空風控橫幅渲染 (Market Regime Banner)
  // --------------------------------------------------------------------------

  function renderMarketRegimeBanner(mktData = null) {
    const banner = document.getElementById('marketRegimeBanner');
    if (!banner) return;

    // 還沒取得即時行情 API 資料前，一律隱藏風控橫幅 (維持原規格)
    if (!hasFetchedRealTime) {
      banner.style.display = 'none';
      return;
    }

    const data = mktData || (typeof MARKET_DATA !== 'undefined' ? MARKET_DATA : null);
    if (!data || !data.taiex || !data.otc) {
      banner.style.display = 'none';
      return;
    }

    banner.style.display = 'block';

    const regime = ScreenerEngine.evaluateMarketRegime(data);
    if (!regime) {
      banner.style.display = 'none';
      return;
    }

    // 1. 上半部：系統總風控判定列
    const headerRow = document.getElementById('regimeHeaderRow');
    const titleEl = document.getElementById('regimeTitle');
    const subtitleEl = document.getElementById('regimeSubtitle');

    if (headerRow) {
      headerRow.className = `regime-header-row ${regime.code}`;
    }
    if (titleEl) {
      titleEl.innerText = regime.title;
    }
    if (subtitleEl) {
      subtitleEl.innerText = regime.subtitle;
    }

    // 2. 下半部：雙指數微型看板 (2-Column Grid)
    // 加權指數
    const taiexPrice = document.getElementById('taiexPrice');
    const taiexChange = document.getElementById('taiexChange');
    const taiexMaBias = document.getElementById('taiexMaBias');
    const taiexStatusDesc = document.getElementById('taiexStatusDesc');
    const taiexKdDesc = document.getElementById('taiexKdDesc');

    if (taiexPrice) taiexPrice.innerText = data.taiex.price.toLocaleString();
    if (taiexChange) {
      const isUp = data.taiex.changePrice > 0;
      const isDown = data.taiex.changePrice < 0;
      const cls = isUp ? 'up' : (isDown ? 'down' : 'flat');
      const sign = isUp ? '+' : '';
      taiexChange.className = `index-change-val ${cls}`;
      taiexChange.innerText = `(${sign}${data.taiex.changePct}%)`;
    }
    if (taiexMaBias) {
      const sign = data.taiex.bias20 >= 0 ? '+' : '';
      const ma5Val = data.taiex.ma5 ? data.taiex.ma5.toLocaleString() : '--';
      const ma20Val = data.taiex.ma20 ? data.taiex.ma20.toLocaleString() : '--';
      taiexMaBias.innerText = `5MA ${ma5Val} ｜ 20MA ${ma20Val} (${sign}${data.taiex.bias20}%)`;
    }
    if (taiexStatusDesc) {
      taiexStatusDesc.innerText = `狀態：${data.taiex.statusDesc || '--'}`;
    }
    if (taiexKdDesc) {
      taiexKdDesc.innerText = `KD(9,3) ${data.taiex.kd.k}/${data.taiex.kd.d} (${data.taiex.kd.status})`;
    }

    // 櫃買指數
    const otcPrice = document.getElementById('otcPrice');
    const otcChange = document.getElementById('otcChange');
    const otcMaBias = document.getElementById('otcMaBias');
    const otcStatusDesc = document.getElementById('otcStatusDesc');
    const otcKdDesc = document.getElementById('otcKdDesc');

    if (otcPrice) otcPrice.innerText = data.otc.price.toLocaleString();
    if (otcChange) {
      const isUp = data.otc.changePrice > 0;
      const isDown = data.otc.changePrice < 0;
      const cls = isUp ? 'up' : (isDown ? 'down' : 'flat');
      const sign = isUp ? '+' : '';
      otcChange.className = `index-change-val ${cls}`;
      otcChange.innerText = `(${sign}${data.otc.changePct}%)`;
    }
    if (otcMaBias) {
      const sign = data.otc.bias20 >= 0 ? '+' : '';
      const ma5Val = data.otc.ma5 ? data.otc.ma5.toLocaleString() : '--';
      const ma20Val = data.otc.ma20 ? data.otc.ma20.toLocaleString() : '--';
      otcMaBias.innerText = `5MA ${ma5Val} ｜ 20MA ${ma20Val} (${sign}${data.otc.bias20}%)`;
    }
    if (otcStatusDesc) {
      otcStatusDesc.innerText = `狀態：${data.otc.statusDesc || '--'}`;
    }
    if (otcKdDesc) {
      otcKdDesc.innerText = `KD(9,3) ${data.otc.kd.k}/${data.otc.kd.d} (${data.otc.kd.status})`;
    }

    banner.style.display = 'block';
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
    '0051': '51成分',
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
            ${evalResult.isLimitUp ? '<span class="limitup-badge" title="漲停股票 (當日漲幅達上限)">漲停</span>' : ''}
            ${stock.isDisposed ? '<span class="disposed-badge" title="處置股票 (關禁閉/限制撮合時間)">處置</span>' : ''}
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

        <!-- 中間：KD 簡化標籤 (hover 可查看 KD(9,3) 精確數值) -->
        <div class="kd-metrics-group" title="KD (9,3) ${kdResult.k}/${kdResult.d} (${kdResult.status})&#10;點擊檢視 KD (9,3) 指標判讀指南">
          <span class="kd-chip ${kdResult.statusClass}">KD ${kdResult.status}</span>
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

      ${evalResult.isMatch ? `
        <!-- 通過原因區域 (僅限符合條件個股顯示) -->
        <div class="stock-pass-row">
          <span class="pass-text">${getPassReasonText(evalResult, stock, currentParams)}</span>
        </div>
      ` : `
        <!-- 未通過原因區域 (僅限未符合條件個股顯示) -->
        <div class="stock-failure-row">
          <span class="failure-text">${getFailureReasonText(evalResult, stock, currentParams)}</span>
        </div>
      `}
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
        if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.kd-metrics-group')) return;
        window.open(`https://pchome.megatime.com.tw/stock/sto0/ock1/sid${stock.code}.html`, '_blank');
      });
    }

    // 綁定 KD Metrics Group 點擊彈出 KD (9,3) 指標判讀指南 Popover
    const kdGroup = card.querySelector('.kd-metrics-group');
    if (kdGroup) {
      kdGroup.setAttribute('title', `KD (9,3) ${kdResult.k}/${kdResult.d} (${kdResult.status})\n點擊檢視 KD (9,3) 指標判讀指南`);
      kdGroup.addEventListener('click', (e) => {
        e.stopPropagation();
        openKdPopover(stock, kdResult);
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

  // 評估符合篩選條件時之通過原因摘要字串 (無 Emoji)
  function getPassReasonText(evalResult, stock, params) {
    if (!evalResult.isMatch) return null;

    // 1. 均線狀態 (雙均線站穩 / 站穩均線 / 三線糾結)
    const maText = params.checkConvergence ? '三線糾結' : (params.maAboveMode === 'BOTH' ? '雙均線站穩' : '站穩均線');

    // 2. 量能狀態 (放量攻擊 / 極致量縮 / 量縮洗盤)
    let volText = '';
    if (params.strategyMode === 'MOMENTUM' || evalResult.isVolumeExpansion) {
      volText = '放量攻擊、';
    } else if (evalResult.isExtremeVolContraction) {
      volText = '極致量縮、';
    } else if (evalResult.isVolContraction) {
      volText = '量縮洗盤、';
    }

    // 3. 預期純利
    const profitText = `預期純利 +${evalResult.netProfitPct.toFixed(1)}%`;

    return `符合所有參數：乖離適中、${maText}、${volText}${profitText}`;
  }

  // 評估不符合篩選條件時之未通過原因字串 (依據決策樹優先順序)
  function getFailureReasonText(evalResult, stock, params) {
    if (evalResult.isMatch) return null;

    const reasons = [];

    // 1. 若為漲停板鎖死
    if (evalResult && evalResult.isLimitUp) {
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

    // 4. 若量能不符 (爆量走強放量/紅K 或 低接模式量縮)
    if (params.strategyMode === 'MOMENTUM' || params.checkVolumeExpansion || params.checkRedCandle) {
      if (!evalResult.isVolumeExpansion) {
        reasons.push('成交量未放量');
      }
      if (!evalResult.isRedCandleAndMomentum) {
        reasons.push('未收紅K或漲幅<1.5%');
      }
    } else if (params.checkVolumeContraction && !evalResult.isVolContraction) {
      reasons.push('當日成交量未縮');
    }

    // 4b. 若 KD 指標不符
    if (params.checkKdFilter && !evalResult.rules.kdPassed) {
      if (params.strategyMode === 'MOMENTUM') {
        reasons.push('KD未達高檔攻擊區(65~90)');
      } else {
        reasons.push('KD未達低/中檔多頭區(30~65)');
      }
    }

    // 4c. 若 K 棒型態避雷不符
    if (params.checkCandleAvoidance && !evalResult.rules.candleAvoidancePassed) {
      if (params.strategyMode === 'MOMENTUM') {
        reasons.push('長上影墓碑線避雷');
      } else {
        reasons.push('長黑K跌破避雷');
      }
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

    // 找出最靠近現價的第一關卡 (價位最低的近端天花板)
    const closestCeiling = allCeilings.length ? allCeilings[allCeilings.length - 1] : null;
    const firstCeilingNetProfit = closestCeiling ? closestCeiling.netProfitPct : 3.0;

    // 計算建議停損點位與風報比
    const riskReward = ScreenerEngine.calculateRiskReward(stock, currentMode, firstCeilingNetProfit);

    // 1. 頂部天花板列表 (依價格高到低排列，最靠近現價的在底部)
    const bbandTooltipText = (typeof UI_STRINGS !== 'undefined' && UI_STRINGS.POPOVERS && UI_STRINGS.POPOVERS.infoBbandUpper)
      ? UI_STRINGS.POPOVERS.infoBbandUpper
      : '股價常態波動上限，碰觸時易遇阻力，適合作為第一道動態停利點';

    const ceilingsHTML = allCeilings.map(c => {
      const isClosest = closestCeiling && c.price === closestCeiling.price && c.type === closestCeiling.type;
      const isPass = c.netProfitPct >= (currentParams.minNetProfit ?? 3.0);
      const isBbandUpper = c.type && c.type.includes('布林上限');

      const bbandInfoHTML = isBbandUpper ? `
        <button type="button" class="btn-info-mark btn-ceiling-bband" data-info="infoBbandUpper" title="點擊查看說明">ⓘ</button>
        <div id="infoBbandUpper" class="info-popover ceiling-bband-popover" style="display: none;">
          <div class="popover-content">
            <button type="button" class="btn-close-popover" data-target="infoBbandUpper" title="關閉說明">✕</button>
            <p>${bbandTooltipText}</p>
          </div>
        </div>
      ` : '';

      return `
        <div class="popover-item-row ${isClosest ? 'is-closest' : ''}">
          <span class="popover-item-price">${c.price.toFixed(2)} 元</span>
          <span class="popover-item-name">
            ${c.type}
            ${bbandInfoHTML}
            ${isClosest ? '<span class="popover-tag-closest">最近</span>' : ''}
          </span>
          <span class="popover-item-profit ${isPass ? 'pass' : 'fail'}">${c.netProfitPct >= 0 ? '+' : ''}${c.netProfitPct}%</span>
        </div>
      `;
    }).join('');

    // 2. 中部現價基準線 HTML
    const baselineHTML = `
      <div class="popover-item-row is-current-price">
        <span class="popover-item-price current-price-color">${stock.price.toFixed(2)} 元</span>
        <span class="popover-item-name">現價 (進場基準)</span>
        <span class="popover-item-profit current-profit">0.00%</span>
      </div>
    `;

    // 3. 底部防守與風報比卡片 HTML
    const riskRewardHTML = `
      <div class="popover-risk-section">
        <div class="risk-card-header">
          <div class="risk-card-title">
            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <span>下層防守與預期風報比 (R/R Ratio)</span>
          </div>
          ${riskReward.tag ? `<span class="rr-tag-badge ${riskReward.tagClass}">${riskReward.tag}</span>` : ''}
        </div>
        <div class="risk-card-grid">
          <div class="risk-grid-item">
            <span class="risk-label">建議停損點位</span>
            <span class="risk-value stop-loss-price">${riskReward.stopLossPrice.toFixed(2)} 元</span>
            <span class="risk-sub-label">${riskReward.stopLossLabel}</span>
          </div>
          <div class="risk-grid-item">
            <span class="risk-label">最大預期虧損</span>
            <span class="risk-value risk-negative">${riskReward.riskPercentText}</span>
            <span class="risk-sub-label">(已扣除 0.58% 摩擦成本)</span>
          </div>
        </div>
        <div class="risk-rr-row">
          <span class="rr-main-text">預期風報比： <strong>${riskReward.rrRatio.toFixed(1)} : 1</strong></span>
          <span class="rr-detail-text">(潛在獲利 +${riskReward.rewardPercent}% / 潛在虧損 ${riskReward.riskPercentText})</span>
        </div>
      </div>
    `;

    listContainer.innerHTML = ceilingsHTML + baselineHTML + riskRewardHTML;
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
          return;
        }

        const infoBtn = e.target.closest('.btn-info-mark');
        if (infoBtn) {
          e.preventDefault();
          e.stopPropagation();
          const targetId = infoBtn.dataset.info;
          const popover = overlay.querySelector('#' + targetId);
          if (popover) {
            const isVisible = popover.style.display === 'block';
            overlay.querySelectorAll('.info-popover').forEach(p => p.style.display = 'none');
            popover.style.display = isVisible ? 'none' : 'block';
          }
          return;
        }

        const closeBtn = e.target.closest('.btn-close-popover');
        if (closeBtn) {
          e.preventDefault();
          e.stopPropagation();
          const targetId = closeBtn.dataset.target;
          const popover = overlay.querySelector('#' + targetId);
          if (popover) popover.style.display = 'none';
          return;
        }

        if (!e.target.closest('.info-popover')) {
          overlay.querySelectorAll('.info-popover').forEach(p => p.style.display = 'none');
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay && overlay.style.display === 'flex') {
        overlay.style.display = 'none';
      }
    });
  }

  function openKdPopover(stock, kdResult) {
    const overlay = document.getElementById('kdPopoverOverlay');
    const stockSub = document.getElementById('popoverKdStockSub');
    if (!overlay) return;

    if (stockSub && kdResult) {
      stockSub.innerText = `${stock.code} ${stock.name} | 當前: KD(9,3) ${kdResult.k}/${kdResult.d} (${kdResult.status})`;
    }

    overlay.style.display = 'flex';
  }

  function initKdPopoverEvents() {
    const overlay = document.getElementById('kdPopoverOverlay');
    const btnClose = document.getElementById('btnCloseKdPopover');

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

    // 0051 Data
    if (typeof HOLDINGS_0051 !== 'undefined' && HOLDINGS_0051) {
      const date0051El = document.getElementById('date0051');
      if (date0051El) date0051El.textContent = formatDateWithWeekday(HOLDINGS_0051.date);
      const tbody0051 = document.getElementById('tableBody0051');
      if (tbody0051) {
        tbody0051.innerHTML = HOLDINGS_0051.stocks.map((s, idx) => `
          <tr>
            <td style="text-align: center; color: var(--text-muted);">#${idx + 1}</td>
            <td><strong>${s.code}</strong></td>
            <td>${s.name}</td>
            <td style="text-align: right; padding-right: 1rem; font-weight: 600; color: var(--match-primary, #0284c7);">${s.weight || '--'}</td>
          </tr>
        `).join('');
      }
    }

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
          <div style="font-size: 0.75rem; color: var(--text-muted);">51 成分</div>
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--match-primary);">${typeof HOLDINGS_0051 !== 'undefined' ? HOLDINGS_0051.stocks.length : 100} 檔</div>
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
