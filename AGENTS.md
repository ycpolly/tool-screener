# Project Guidelines & Workflow Rules

## 1. Git Commit & Push Restrictions (嚴格 Git 提交與推送流程)
- **嚴禁自動 Commit / Push**：在完成任何程式碼修改、修復 Bug 或功能更新後，**絕對不可自動執行 `git commit` 或 `git push`**。
- **必須先交由使用者檢查**：完成工作後，僅能在本地進行測試與修改，並向使用者回報變更與測試結果，等待使用者人工檢查過目並明確下指令同意後，方可執行 commit 或 push。

## 2. 資料即時性與嚴禁硬編碼/靜態舊字串 (Real-time Data Integrity Directives)
- **所有功能嚴禁使用硬編碼 (Hardcoding)**：所有功能、指標與計算邏輯**嚴禁**使用硬編碼數值或寫死的靜態 fallback。
- **嚴禁使用舊的靜態字串與舊數值補洞**：切勿因缺少資料、過期資料或計算複雜就使用舊的靜態字串或預設舊數值補洞。
- **即時 API 優先與精確動態運算**：有 API 就必須從 API 抓取最新資料，該即時運算就必須進行即時運算，一切以最新、最權威、最正確的資料為準則。

## 3. 安全指令與流暢開發 (Execution Guidelines)
- 在進行開發與測試時，非破壞性指令（如 `python scripts/...`、`git status`、`git diff`、`node`）應保持流暢執行，並隨時於說明中保持透明告知。

## 4. 需求不明確與資料對齊原則 (Clarification & Data Requests)
- **需求不明確時先提問確認**：若使用者給予的規格、UI 樣式或業務邏輯需求有不清楚、不明確或存在歧義時，**務必先主動向使用者發問或確認**，不可擅自猜測。
- **需要更多資料時即時告知**：若任務執行過程中發現缺乏必要的數據、資料庫欄位或外部 API 資訊，**必須主動向使用者說明與索取**。

## 5. UI 設計與視覺風格 (Clean & Minimal UI Directives)
- **UI 保持精簡俐落 (Minimal & Clean UI)**：視覺風格講求簡潔、專業與現代感，避免過多繁雜修飾。
- **減少 Emoji 使用 (Avoid Emojis)**：介面標籤、按鈕與狀態 Badge 盡量不使用 Emoji 圖示（如 🔒、🚀、🔴），應優先採用簡潔純文字或精緻的 SVG 向量圖示。

## 6. UI 文字單一真理源 (Single Source of Truth for UI Strings)
- **集中於 `js/ui-strings.js` 維護**：所有介面提示語、大盤風控警語與 ⓘ 說明彈窗內文，統一由 `js/ui-strings.js` (`UI_STRINGS` 物件) 集中管理。
- **禁止硬寫重複字串**：修改或擴充 UI 說明文案時，**嚴禁**在 `index.html` 或 `js/app.js` 中重複寫死硬性文字，必須統一至 `UI_STRINGS` 修改，確保 HTML 與 JS 零字串冗餘。

