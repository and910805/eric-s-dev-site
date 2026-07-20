# Day 27 - 一份好漏洞報告需要什麼：影響、條件、版本、修補

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：EPSS、風險排序與 CNA 實務

一份有 payload 的報告不一定能被重現；一份沒有華麗 exploit 的報告，也可能非常好處理。差異通常在於它是否把測試環境、操作步驟與安全影響連成一條可驗證的證據鏈。

## 先讓別人找到同一個系統

列出產品名稱、版本、build、安裝方式、作業系統與相關設定。雲端服務則需要 endpoint、租戶條件與測試時間。若漏洞只在非預設設定出現，設定本身就是前置條件，不能藏在重現步驟深處。

版本資訊最好能被再次確認，例如 About 頁面、package lock、image digest 或回應 header。只寫「最新版」幾天後就失去意義。

## 重現步驟要能從乾淨狀態開始

說明使用哪種角色登入、先建立什麼資料、送出哪個 request，再觀察哪個結果。HTTP 報告可附上去除 cookie、token 與個資後的原始 request/response；桌面程式則可附 crash log、stack trace 或最小觸發檔案。

不要只貼自動化工具的結論畫面。工具名稱與版本可以保留，但核心證據應讓維護者不用同一套工具也能理解。

## Expected 與 Actual 能快速定位問題

Expected Behavior 說明系統原本應阻止什麼；Actual Behavior 則記錄實際發生的安全違反。

例如：「一般帳號應只能下載自己建立的備份；修改 `backup_id` 後，伺服器回傳另一位使用者的備份。」這比「存在 IDOR」更容易驗證，也避免術語選錯時拖累整份報告。

## Impact 要和證據接得起來

能修改顯示名稱，不等於能接管帳號；看到 stack trace，不等於已取得 RCE。可以分成已證明的 impact 與合理的後續風險，並標示尚未驗證的部分。

若測試為了避免碰觸真實資料而中止，也可以清楚說明停止位置。負責任的邊界，比假裝完成整條攻擊鏈更可信。

## 版本範圍與修補資訊

研究者通常只能確認測過的版本，不應自行宣稱所有歷史版本都受影響。供應商在 triage 後可透過 commit history、回歸測試與 release branch 補齊範圍。

修補建議可以提供，但不必把單一 payload 黑名單當成完整修復。若已有 patch，應測試原 PoC、編碼變形、權限邊界與相鄰功能，並記錄第一個修補版本或 workaround。

## 別忘了聯絡與揭露安排

留下可回覆的聯絡方式、期望署名，以及是否已向其他協調單位或平台通報。若附檔含敏感資訊或 exploit，先確認接收方提供的安全傳輸方式。

一份好報告的目的不是證明作者多厲害，而是讓另一端能穩定重現、判斷範圍、完成修補，最後把公開資訊寫對。

## 參考資料

- CERT/CC Vulnerability Disclosure Guidance: https://certcc.github.io/confluence/display/CVD/
- CISA Coordinated Vulnerability Disclosure Process: https://www.cisa.gov/coordinated-vulnerability-disclosure-process
- CVE CNA Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
