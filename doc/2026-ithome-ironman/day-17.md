# Day 17 - CVSS v4.0 改了什麼？不只是多一組縮寫

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVSS 評分核心

CVSS v4.0 在 2023 年正式發布。第一次打開向量，最直接的感受大概是：欄位又變多了。

```text
CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N
```

不過這次變動不是為了增加填表難度。v4.0 把 v3.1 難以表達的攻擊條件、跨系統影響與輔助資訊拆得更清楚，也試著避免 Base Score 被當成完整風險分數。

## Attack Requirements 獨立出來

v3.1 的 Attack Complexity 同時承擔不少概念。v4.0 新增 `Attack Requirements`（AT），專門描述成功利用是否依賴 vulnerable system 的部署或執行條件，例如特定競態狀態或中間人位置。

`Attack Complexity` 則更聚焦攻擊者為了避開或繞過防禦技術所需採取的動作。把兩者拆開後，評分理由比較容易說明，也比較不會把「payload 很難寫」誤當 AC:H。

## User Interaction 變成 Passive 與 Active

v3.1 的 UI 只有 None 和 Required。v4.0 將需要互動的情境分為 Passive 與 Active。

Passive 指使用者的正常行為讓漏洞得以觸發，但不需要刻意突破保護，例如載入惡意內容；Active 則需要使用者執行特定動作來破壞保護，例如忽略警告或匯入惡意檔案。這比所有情境都塞進 Required 更有區別力。

## Scope 退場，影響分成兩個系統

v4.0 移除 Scope，改用 Vulnerable System 的 `VC/VI/VA`，以及 Subsequent System 的 `SC/SI/SA`，分別記錄機密性、完整性與可用性影響。

這讓評分者可以直接說：漏洞位於哪個系統，主要後果又落在哪個後續系統，不必先把複雜關係壓成 Scope Changed，再共用一組 C/I/A。

## Temporal 改名 Threat，內容更聚焦

v4.0 的 Threat Metrics 保留 `Exploit Maturity`。狀態可表達尚未回報利用、已有概念驗證，或已觀察到攻擊。v3.1 Temporal 裡的 Remediation Level 與 Report Confidence 不再以相同方式參與這一組分數。

Environmental Metrics 仍然存在，讓使用者依自己的部署與安全需求調整。

## Supplemental Metrics 不改分數，但很有用

Safety、Automatable、Recovery、Value Density、Vulnerability Response Effort 與 Provider Urgency 等 Supplemental Metrics，用來補充分數難以承載的資訊。

它們不直接改變 CVSS 數值，卻能幫助消費者理解人身安全、自動化利用、復原方式或供應商評估。這種設計也提醒我們：並非所有決策資訊都應硬塞進一個 0 到 10 的數字。

## v3.1 分數不能直接換算成 v4.0

兩個版本的指標與公式不同，不能只把向量前綴替換，或期待同一漏洞得到相同分數。發布時應清楚標示版本，保留完整向量，也不要用「v4.0 分數較低」直接推論漏洞變得不重要。

FIRST 對 v4.0 分數使用 `CVSS-B`、`CVSS-BT`、`CVSS-BE`、`CVSS-BTE` 等 nomenclature，說明計算包含哪些 metric group。引用時把 nomenclature 一起帶上，比只留下裸分數更完整。

## 參考資料

- CVSS v4.0 Specification: https://www.first.org/cvss/v4-0/specification-document
- CVSS v4.0 User Guide: https://www.first.org/cvss/v4-0/user-guide
- CVSS v4.0 Calculator: https://www.first.org/cvss/calculator/4.0
- CVSS v4.0 Release: https://www.first.org/cvss/v4-0/
