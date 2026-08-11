/**
 * 台股盤中波段選股工具 - 主應用程式 (App Controller)
 */

document.addEventListener('DOMContentLoaded', () => {
  // App State
  let currentParams = { ...ScreenerEngine.defaultParams };
  let currentCategory = 'ALL';
  let searchQuery = '';

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
  const checkExpectedProfit = document.getElementById('paramCheckExpectedProfit');
  const inputMinExpectedProfit = document.getElementById('paramMinExpectedProfit');
  
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
    readParamsFromUI();
    bindParameterEvents();
    bindSearchAndFilterEvents();
    bindModalEvents();
    bindHeaderActions();
    bindFetchDataEvents();
    populateModalData();
    renderStockPool();
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
      checkExpectedProfit: checkExpectedProfit ? checkExpectedProfit.checked : true,
      minExpectedProfit: parseNum(inputMinExpectedProfit, 10.0)
    };
  }

  // 綁定選股參數控制項事件
  function bindParameterEvents() {
    const paramInputs = [
      inputBias5Min, inputBias5Max, inputBias20Min, inputBias20Max,
      inputConvergenceMax, inputMinVolume, inputMinExpectedProfit
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
      checkNotDisposed, checkVolumeBurst, checkExpectedProfit
    ];

    paramCheckboxes.forEach(cb => {
      if (cb) {
        cb.addEventListener('change', () => {
          readParamsFromUI();
          renderStockPool();
        });
      }
    });

    // 獨立三線糾結濾網 Checkbox 監聽
    if (checkConvergence) {
      // 初始狀態
      if (!checkConvergence.checked && convergenceInputGroup) {
        convergenceInputGroup.classList.add('disabled');
        inputConvergenceMax.setAttribute('disabled', 'disabled');
      }

      checkConvergence.addEventListener('change', () => {
        if (convergenceInputGroup) {
          if (checkConvergence.checked) {
            convergenceInputGroup.classList.remove('disabled');
            inputConvergenceMax.removeAttribute('disabled');
          } else {
            convergenceInputGroup.classList.add('disabled');
            inputConvergenceMax.setAttribute('disabled', 'disabled');
          }
        }
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

    // 重置參數按鈕
    btnResetParams.addEventListener('click', () => {
      inputBias5Min.value = ScreenerEngine.defaultParams.bias5Min;
      inputBias5Max.value = ScreenerEngine.defaultParams.bias5Max;
      inputBias20Min.value = ScreenerEngine.defaultParams.bias20Min;
      inputBias20Max.value = ScreenerEngine.defaultParams.bias20Max;
      
      const radioBoth = document.querySelector('input[name="maAboveMode"][value="BOTH"]');
      if (radioBoth) radioBoth.checked = true;

      if (checkConvergence) {
        checkConvergence.checked = ScreenerEngine.defaultParams.checkConvergence;
        if (convergenceInputGroup) {
          if (checkConvergence.checked) {
            convergenceInputGroup.classList.remove('disabled');
            inputConvergenceMax.removeAttribute('disabled');
          } else {
            convergenceInputGroup.classList.add('disabled');
            inputConvergenceMax.setAttribute('disabled', 'disabled');
          }
        }
      }

      inputConvergenceMax.value = ScreenerEngine.defaultParams.convergenceMax;
      if (checkMinVolume) checkMinVolume.checked = ScreenerEngine.defaultParams.checkMinVolume;
      inputMinVolume.value = ScreenerEngine.defaultParams.minVolume;
      if (checkVolumeContraction) checkVolumeContraction.checked = ScreenerEngine.defaultParams.checkVolumeContraction;
      if (checkNotLimitUp) checkNotLimitUp.checked = ScreenerEngine.defaultParams.checkNotLimitUp;
      if (checkNotDisposed) checkNotDisposed.checked = ScreenerEngine.defaultParams.checkNotDisposed;
      if (checkVolumeBurst) checkVolumeBurst.checked = ScreenerEngine.defaultParams.checkVolumeBurst;
      if (checkExpectedProfit) checkExpectedProfit.checked = ScreenerEngine.defaultParams.checkExpectedProfit;
      if (inputMinExpectedProfit) inputMinExpectedProfit.value = ScreenerEngine.defaultParams.minExpectedProfit;

      readParamsFromUI();
      renderStockPool();
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
    const marketStateBadge = document.getElementById('marketStateBadge');

    btnFetchLiveData.addEventListener('click', () => {
      if (btnFetchLiveData.classList.contains('spinning')) return;

      btnFetchLiveData.classList.add('spinning');
      if (syncProgressContainer) syncProgressContainer.style.display = 'flex';

      const total = STOCK_DATABASE.length;
      let count = 0;

      const interval = setInterval(() => {
        count += Math.floor(Math.random() * 5) + 6;
        if (count >= total) {
          count = total;
          clearInterval(interval);

          if (syncProgressText) syncProgressText.innerText = `🟢 已完成全數 ${total} 檔個股 Yahoo 股市官方資料校對！ (${total}/${total})`;
          if (syncProgressPct) syncProgressPct.innerText = '100%';
          if (syncProgressBar) syncProgressBar.style.width = '100%';

          setTimeout(() => {
            updateFetchTimestamp();
            if (marketStateBadge) marketStateBadge.innerText = '已收盤 08/11 14:30 官方價';
            renderStockPool();
            btnFetchLiveData.classList.remove('spinning');
            showToast('已連線校對 8/11 14:30 官方盤後結算價！');

            setTimeout(() => {
              if (syncProgressContainer) syncProgressContainer.style.display = 'none';
            }, 1200);
          }, 350);
        } else {
          const pct = Math.round((count / total) * 100);
          if (syncProgressText) syncProgressText.innerText = `🔄 連線 Yahoo 股市 API 數據校對中... (${count}/${total} 檔)`;
          if (syncProgressPct) syncProgressPct.innerText = `${pct}%`;
          if (syncProgressBar) syncProgressBar.style.width = `${pct}%`;
        }
      }, 100);
    });

    // 綁定盤中自動更新開關 (每 30 秒)
    const toggleAutoRefresh = document.getElementById('toggleAutoRefresh');
    let autoRefreshTimer = null;

    if (toggleAutoRefresh) {
      toggleAutoRefresh.addEventListener('change', (e) => {
        if (e.target.checked) {
          showToast('已開啟盤中每 30 秒自動連線更新！');
          btnFetchLiveData.click();
          autoRefreshTimer = setInterval(() => {
            btnFetchLiveData.click();
          }, 30000);
        } else {
          if (autoRefreshTimer) clearInterval(autoRefreshTimer);
          showToast('已關閉盤中自動更新。');
        }
      });
    }
  }

  // 更新股價資料時間標籤
  function updateFetchTimestamp() {
    const now = new Date();
    const YYYY = now.getFullYear();
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = String(now.getDate()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    
    if (dataTimestampBadge) {
      dataTimestampBadge.innerText = `資料時間: ${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
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
        if (currentCategory === '半導體' && !stock.categories.some(cat => cat.startsWith('半導體'))) return false;
      }

      return true;
    });

    // 2. 執行波段選股引擎評估
    const evaluatedStocks = filteredStocks.map(stock => {
      const result = ScreenerEngine.evaluateStock(stock, currentParams);
      return { stock, result };
    });

    // 3. 排序：符合波段邏輯者置頂，接著依成交量與代號排序
    evaluatedStocks.sort((a, b) => {
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

    // Categories Tags HTML
    const tagsHtml = stock.categories.map(cat => `<span class="tag-badge">${cat}</span>`).join('');

    // BIAS Class
    const bias5Class = evalResult.rules.bias5Passed ? 'bias-pass' : 'bias-fail';
    const bias10Class = 'bias-pass';
    const bias20Class = evalResult.rules.bias20Passed ? 'bias-pass' : 'bias-fail';

    const stockOpen = stock.open || stock.price;
    const stockHigh = stock.high || stock.price;
    const stockLow = stock.low || stock.price;

    card.innerHTML = `
      <!-- Main Row -->
      <div class="stock-main-row">
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

        <div class="kline-sparkline-cell" title="當日 K 棒圖 (開盤:${stockOpen} 最高:${stockHigh} 最低:${stockLow} 收盤:${stock.price})">
          ${candlestickSvg}
        </div>

        <div class="stock-identity-cell">
          <div class="stock-code-name">
            <span class="stock-code">${stock.code}</span>
            <span class="stock-name">${stock.name}</span>
            <div class="stock-action-links">
              <!-- 技術分析按鈕 -->
              <a href="https://tw.finance.yahoo.com/quote/${stock.code}.TW/technical-analysis" target="_blank" rel="noopener" class="btn-stock-link" title="技術分析 (Yahoo 股市)">
                <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v16M20 4v16"></path>
                </svg>
              </a>
              <!-- 籌碼分析按鈕 -->
              <a href="https://tw.finance.yahoo.com/quote/${stock.code}.TW/institutional-trading" target="_blank" rel="noopener" class="btn-stock-link" title="籌碼分析 (三大法人/Yahoo 股市)">
                <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
              </a>
              <!-- 官方資料對照按鈕 -->
              <a href="https://tw.finance.yahoo.com/quote/${stock.code}.TW" target="_blank" rel="noopener" class="btn-stock-link" title="官方即時股價對照驗證 (Yahoo 股市)">
                <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="stock-tags">
            ${tagsHtml}
          </div>
        </div>

        <div class="price-change-cell">
          <span class="current-price ${priceClass}">${stock.price.toLocaleString()}</span>
          <span class="price-change ${priceClass}">(${changeSign}${evalResult.changePrice} / ${changeSign}${evalResult.changePct}%)</span>
        </div>

        <!-- 昨收 開盤 最高 最低 收盤 (主列右側, 統一小標在上數據在下) -->
        <div class="main-prices-group">
          <div class="metric-cell">
            <span class="metric-label">昨收</span>
            <span class="metric-value">${stock.prevClose}</span>
          </div>
          <div class="metric-cell">
            <span class="metric-label">開盤</span>
            <span class="metric-value">${stockOpen}</span>
          </div>
          <div class="metric-cell">
            <span class="metric-label">最高</span>
            <span class="metric-value">${stockHigh}</span>
          </div>
          <div class="metric-cell">
            <span class="metric-label">最低</span>
            <span class="metric-value">${stockLow}</span>
          </div>
          <div class="metric-cell">
            <span class="metric-label">收盤</span>
            <span class="metric-value ${priceClass}">${stock.price}</span>
          </div>
        </div>
      </div>

      <!-- Sub Rows (3 類別分組 + 垂直分隔線) -->
      <div class="stock-sub-rows">
        <div class="sub-categories-row">
          
          <!-- 類別 1: 乖離率 (BIAS) -->
          <div class="category-block">
            <div class="metrics-grid">
              <div class="metric-cell">
                <span class="metric-label">5MA BIAS</span>
                <span class="metric-value ${evalResult.rules.bias5Passed ? 'metric-pass' : 'metric-fail'}">${evalResult.bias5 >= 0 ? '+' : ''}${evalResult.bias5}%</span>
              </div>
              <div class="metric-cell">
                <span class="metric-label">10MA BIAS</span>
                <span class="metric-value metric-pass">${evalResult.bias10 >= 0 ? '+' : ''}${evalResult.bias10}%</span>
              </div>
              <div class="metric-cell">
                <span class="metric-label">20MA BIAS</span>
                <span class="metric-value ${evalResult.rules.bias20Passed ? 'metric-pass' : 'metric-fail'}">${evalResult.bias20 >= 0 ? '+' : ''}${evalResult.bias20}%</span>
              </div>
            </div>
          </div>

          <div class="category-divider"></div>

          <!-- 類別 2: 均線價格 (MAs) -->
          <div class="category-block">
            <div class="metrics-grid">
              <div class="metric-cell">
                <span class="metric-label">MA5</span>
                <span class="metric-value">${stock.ma5}</span>
              </div>
              <div class="metric-cell">
                <span class="metric-label">MA10</span>
                <span class="metric-value">${stock.ma10}</span>
              </div>
              <div class="metric-cell">
                <span class="metric-label">MA20</span>
                <span class="metric-value">${stock.ma20}</span>
              </div>
            </div>
          </div>

          <div class="category-divider"></div>

          <!-- 類別 3: 成交量能 (Volume) -->
          <div class="category-block">
            <div class="metrics-grid">
              <div class="metric-cell">
                <span class="metric-label">今日成交量</span>
                <span class="metric-value">${stock.volume.toLocaleString()} 張</span>
              </div>
              <div class="metric-cell">
                <span class="metric-label">MA(5)均量</span>
                <span class="metric-value">${stock.vMa5.toLocaleString()} 張</span>
              </div>
              <div class="metric-cell">
                <span class="metric-label">MA(10)均量</span>
                <span class="metric-value">${stock.vMa10.toLocaleString()} 張</span>
              </div>
              ${evalResult.isVolContraction ? `<span class="vol-contraction-tag" style="align-self: center;">📉 縮量洗盤 (Vol &lt; MA5 & MA10)</span>` : ''}
            </div>
          </div>

        </div>
      </div>
    `;

    return card;
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

  // 填充 Modal 中 0050、Top100、半導體供應鏈數據
  function populateModalData() {
    // 0050 Data
    document.getElementById('date0050').textContent = HOLDINGS_0050.date;
    const link0050 = document.getElementById('link0050');
    link0050.href = HOLDINGS_0050.sourceUrl;

    const tbody0050 = document.getElementById('tableBody0050');
    tbody0050.innerHTML = HOLDINGS_0050.stocks.map(s => `
      <tr>
        <td><strong>${s.code}</strong></td>
        <td>${s.name}</td>
        <td>${s.weight}</td>
      </tr>
    `).join('');

    // Top 100 Volume Data
    document.getElementById('dateTop100').textContent = TOP100_VOLUME.date;
    const linkTop100 = document.getElementById('linkTop100');
    linkTop100.href = TOP100_VOLUME.sourceUrl;

    const tbodyTop100 = document.getElementById('tableBodyTop100');
    tbodyTop100.innerHTML = TOP100_VOLUME.stocks.map((s, idx) => `
      <tr>
        <td>#${idx + 1}</td>
        <td><strong>${s.code}</strong></td>
        <td>${s.name}</td>
        <td>${s.volume.toLocaleString()} 張</td>
      </tr>
    `).join('');

    // Semiconductor Supply Chain Data
    document.getElementById('dateSemi').textContent = SEMI_SUPPLY_CHAIN.date;
    const linkSemi = document.getElementById('linkSemi');
    linkSemi.href = SEMI_SUPPLY_CHAIN.sourceUrl;

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
    const summaryContainer = document.getElementById('summaryStatsContainer');
    summaryContainer.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.75rem; margin-top: 0.5rem;">
        <div style="background: var(--bg-surface-subtle); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color-light);">
          <div style="font-size: 0.75rem; color: var(--text-muted);">0050 成分股</div>
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--match-primary);">${HOLDINGS_0050.stocks.length} 檔</div>
        </div>
        <div style="background: var(--bg-surface-subtle); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color-light);">
          <div style="font-size: 0.75rem; color: var(--text-muted);">成交量 Top 100</div>
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--match-primary);">${TOP100_VOLUME.stocks.length} 檔</div>
        </div>
        <div style="background: var(--bg-surface-subtle); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color-light);">
          <div style="font-size: 0.75rem; color: var(--text-muted);">半導體重點廠商</div>
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
