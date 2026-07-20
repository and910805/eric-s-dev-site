# Day 30 - 建立自己的 CVE／CNA 漏洞通報檢查清單

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：EPSS、風險排序與 CNA 實務

三十天最後，不再加新縮寫。把前面談過的內容收成一份可以真的拿來用的檢查清單。

清單的目的不是讓每份通報變成制式作文，而是在送出、分配或發布前，替自己攔下那些「大家都以為別人確認過」的空白。

## 1. 識別與責任範圍

- 產品、vendor、元件名稱是否明確且一致？
- 這個問題是否已有 CVE 或供應商公告？
- 接收方是否在該產品或漏洞類型的 CNA scope？
- 問題是否違反安全政策，且有可獨立修補的原因？

若產品本身都還對不上，先不要急著選 CWE 或算 CVSS。

## 2. 受影響版本

- 哪些版本經過實際測試？
- 問題何時引入、第一個修補版本為何？
- affected 與 unaffected 範圍是否有 commit、測試或維護者確認？
- 預設設定與非預設設定是否需要分開說明？

把 confirmed、inferred 與 unknown 分開。精確承認未知，比看似完整的猜測好。

## 3. 可重現性與證據

- 測試環境、角色、設定與前置資料是否齊全？
- 步驟能否從乾淨狀態重現？
- request/response、PoC、log 或 crash trace 是否已移除 token 與個資？
- Expected 與 Actual 是否清楚指出安全邊界？

證據要支持報告中的每個重要動詞：讀取、修改、繞過、執行、中斷。

## 4. 根因與分類

- 已知的是 impact、symptom，還是 root cause？
- CWE 是否允許用於 vulnerability mapping？
- 是否有更具體、且證據支持的 Base 或 Variant？
- 若使用 CAPEC，前置條件與 execution flow 是否真的吻合？

不知道時保留較高層但合法的分類，不要用精確編號包裝猜測。

## 5. CVSS

- 使用的是 v3.1 還是 v4.0，版本有沒有標清楚？
- AV、AC／AT、PR、UI 都有一句可重現的理由嗎？
- v3.1 Scope 或 v4.0 subsequent system 是否判斷正確？
- C、I、A 是已證明影響，還是延伸情境？
- 是否保留完整 vector，而不只是一個分數？

若漏洞事實不足，先補資料，不要讓計算器替不確定性做決定。

## 6. 描述與公開資料

- 描述是否包含產品、版本、weakness、攻擊條件與技術影響？
- 是否避免 latest、all versions、fully compromised 等無法支持的用語？
- references 能否讓讀者找到修補與公告？
- 結構化 affected data、文字描述與 release note 是否一致？
- 公開內容是否意外帶出憑證、個資或未協調的 exploit 細節？

發布前讀一次 Record，不看原始報告，確認它仍能獨立被理解。

## 7. 風險排序與後續更新

- 環境中是否真的存在受影響資產，且攻擊面可達？
- EPSS 的 score、percentile 與查詢日期是否保存？
- 是否已查看 CISA KEV、供應商公告與可信利用情報？
- CVSS、EPSS、KEV 與資產重要性是否各自保留，而非混成不可解釋的總分？
- 修補、workaround、版本範圍或利用狀態改變時，誰負責更新？

## 三十天之後

CVE 提供共同識別，CWE 整理弱點根因，CAPEC 描述攻擊模式，CVSS 表達技術嚴重度，EPSS 與 KEV 補上利用機率與已知利用事實。每一套工具都有邊界，放對位置才會有用。

真正好的漏洞通報，不是縮寫最多或分數最高，而是讓研究者、維護者、防守方與使用者能針對同一組事實採取行動。這份清單也不必一次定稿；每遇到一次資訊落差，就把新的檢查問題補回去，它才會慢慢變成自己的工作方法。

## 參考資料

- CVE Program: https://www.cve.org/
- CVE CNA Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
- CWE Root Cause Mapping: https://cwe.mitre.org/documents/cwe_usage/guidance.html
- CAPEC: https://capec.mitre.org/
- CVSS: https://www.first.org/cvss/
- EPSS: https://www.first.org/epss/
- CISA KEV: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
