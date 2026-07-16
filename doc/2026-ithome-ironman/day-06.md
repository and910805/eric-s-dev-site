# Day 6 - 漏洞資訊到底看誰？CVE/MITRE、NIST/NVD、CISA/KEV、FIRST 與 Vendor Advisory

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVE 與 CNA 基礎

把一組 CVE ID 貼進搜尋引擎，通常會同時看到 CVE.org、NVD、CISA、FIRST、廠商公告，外加幾個商業情資平台。每個頁面看起來都很正式，分數卻可能不一樣，受影響版本也不一定寫得同樣完整。

這時候問「哪個網站才是對的」其實問錯了。比較有用的問法是：**現在要找的是官方識別、技術評分、在野利用，還是修補方式？**

![漏洞資訊來源分工：CVE/MITRE、NIST/NVD、CISA/KEV、FIRST 與 Vendor Advisory](/blog-assets/ithome-2026/day-06-source-map.png)

## CVE Program：建立共同識別與基本紀錄

CVE Program 的核心任務，是用一致的 CVE ID 識別並描述公開的資安漏洞。CVE.org 上的 CVE List 是官方 CVE Record 集合。

它主要回答：

- 這個漏洞的官方 CVE ID 是什麼？
- Record 是 `RESERVED`、`PUBLISHED` 還是 `REJECTED`？
- 哪個 CNA 負責指派或發布？
- CNA 公開了哪些產品、版本、描述與 references？

CVE Program 是一個由多種角色共同運作的體系，不是所有 Record 都由 MITRE 單獨撰寫。產品廠商、研究組織、協調中心等 CNA，會在各自 scope 內指派 CVE ID 並發布 Record。

**那 MITRE 在哪裡？**

MITRE 在 CVE Program 中承擔 Secretariat、Top-Level Root 與 CNA of Last Resort 等職責，也維運 CVE 相關基礎服務。但「MITRE 管理 CVE Program」不等於「每一筆 CVE 都是 MITRE 發現、驗證或評分」。

閱讀 Record 時，應查看 assigner 與 CNA provider，而不是只因頁面位於 CVE.org 就把內容全部歸給 MITRE。

**適合查 CVE.org 的情境：**確認官方 ID、Record 狀態、CNA 原始資料與公開 references。

## NIST 與 NVD：把公開漏洞資料做成可分析的資料庫

NIST 是美國國家標準與技術研究院；NVD，也就是 National Vulnerability Database，是由 NIST 維運的漏洞資料庫。

NVD 會使用 CVE List 中的 Published CVE，並補充安全分析資料，例如：

- CVSS 評分與向量
- CWE 弱點分類
- CPE 產品與平台對應
- Reference tags
- 其他搜尋與分析所需資料

這類工作通常稱為 enrichment。它讓 CVE 更容易被資產管理、掃描器與風險流程使用，但 NVD 不是 CVE ID 的原始指派單位，也不是每一筆產品修補資訊的最終權威。

因此會出現幾種正常現象：

- CVE Record 已發布，NVD 頁面仍顯示待分析。
- CNA 與 NVD 都提供 CVSS，但向量或分數不同。
- NVD 的 CPE 尚未完整對應產品版本。
- Vendor advisory 已更新，NVD 尚未同步反映。

遇到差異時，不要只挑分數較高或頁面較熟悉的一方。先比較評分向量、分析時間、產品版本與各自引用的公開證據。

**適合查 NVD 的情境：**需要 NIST 提供的 CVSS/CWE/CPE enrichment，或要用結構化條件搜尋與交叉分析 CVE。

## CISA 與 KEV：哪些漏洞已知正在被利用？

CISA 是美國網路安全暨基礎設施安全局。它維護的 Known Exploited Vulnerabilities Catalog，通常簡稱 KEV，聚焦於已有在野利用證據的漏洞。

KEV 回答的不是「理論上最嚴重的是哪一個」，而是：

- 哪些漏洞已有遭實際利用的證據？
- 供應商或專案要求採取什麼行動？
- 美國聯邦民用行政部門的修補期限為何？

這也是 KEV 與 CVSS 最根本的差異。CVSS 描述漏洞在特定假設下的技術嚴重程度；KEV 提供的是已知利用狀態與修補優先順序的重要訊號。

一個 CVSS 9.8 的漏洞可能尚未出現在 KEV；一個分數較低的漏洞，若已被攻擊者大量利用，仍可能需要優先處理。CISA 也建議不只聯邦機關，其他組織同樣可把 KEV 納入漏洞管理優先排序。

不過，**不在 KEV 不等於沒有被利用**。它只表示目前未被納入該 catalog，不能被當成安全證明。

**適合查 CISA KEV 的情境：**確認 CVE 是否被列為已知在野利用，並把它作為修補優先級的強訊號。

## FIRST：維護評分與風險標準，不是另一個 CVE List

FIRST 是 Forum of Incident Response and Security Teams。它維護多項資安標準與規格，其中和漏洞管理最常遇到的是 CVSS；EPSS 也由 FIRST 提供相關資源與資料。

**CVSS 回答技術嚴重程度**

CVSS 透過一組 metric 與 vector 描述漏洞特性，最後形成分數與 severity。當資料來源標示 CVSS v3.1 或 v4.0，真正的計算規格與定義應回到 FIRST 文件查核。

FIRST 不會替全世界每一筆 CVE 決定唯一分數。實際評分可能由 CNA、NVD、廠商或其他分析者提供，因此同一 CVE 可能出現多組向量。

**EPSS 回答近期被利用的機率**

EPSS 是資料驅動的預測模型，估計已公開 CVE 在未來 30 天內遭到利用的機率。它和 CVSS 不可互相替代：

- CVSS：漏洞本身有多嚴重？
- EPSS：它近期有多可能被利用？
- KEV：是否已有符合收錄標準的在野利用證據？

這三種訊號放在一起，比只依 CVSS 高低排序更接近實際風險管理。第 22、23 天會再深入拆解 EPSS 與 CVSS 的差異。

**適合查 FIRST 的情境：**確認 CVSS 規格、向量定義、版本差異，以及查詢 EPSS 模型與分數資料。

## Vendor Advisory：產品版本、修補與緩解措施的第一手來源

當問題變成「手上的系統到底要不要修、怎麼修」，通常要回到產品供應商或開源專案的官方 advisory。

Vendor advisory 通常最適合回答：

- 哪些產品、分支與版本受影響？
- 哪個版本已修補？
- 修補程式、升級方式或 release notes 在哪裡？
- 有沒有 workaround 或 mitigation？
- 是否需要特定設定、模組或權限才會受影響？
- 供應商的 CVSS 評分與判斷依據是什麼？

這些資訊可能在 CVE Record 的 references 中出現，但資產處理時仍應打開原始 advisory，而不是只讀資料庫的摘要。

Vendor advisory 也不是永遠完美。它可能晚於研究者公告、更新版本範圍，或使用與其他來源不同的評分假設。因此仍要確認發布與更新日期，必要時比對修補 commit、CVE Record 與協調單位公告。

**適合查 Vendor Advisory 的情境：**確認產品是否受影響，以及取得官方修補版本、緩解方式與操作指引。

## 同一個 CVE 為什麼會有不同分數？

假設一筆 CVE 同時顯示：

```text
CNA:  CVSS 8.1
NVD:  CVSS 9.8
```

這不一定代表其中一方算錯。可能原因包括：

- 對所需權限的判斷不同。
- 對是否需要使用者互動的理解不同。
- CNA 掌握產品預設設定，NVD 依公開描述採用較一般化假設。
- 評分使用不同 CVSS 版本。
- Record 或 advisory 更新後，其中一方尚未重評。

正確比較方式是閱讀完整 vector，再回到描述、受影響設定與產品文件驗證每一個 metric。只比較 8.1 與 9.8，無法知道差異發生在哪裡。

## 實際查一個漏洞時怎麼走

處理一筆陌生 CVE，通常先到 CVE.org 確認 ID、Record 狀態、CNA 與 references。接著打開 vendor advisory 查受影響和修補版本；需要 NIST 的 CVSS、CWE、CPE enrichment 時再看 NVD。若正在排修補優先順序，就加查 CISA KEV 與 EPSS；對向量有疑問，再回 FIRST 的 CVSS 規格核對定義。

順序不是硬性規則。例如事件應變期間，可能會先查 KEV 與 vendor mitigation；研究評分差異時，則會優先打開 FIRST 規格。重點是每次引用資料，都知道它是誰提供、想回答哪個問題、何時更新。

## 幾句常聽到、但要多想一下的話

「NVD 就是 CVE 官網」不對，NVD 是使用 CVE 資料做 enrichment 的下游資料庫。「MITRE 會替每一筆 CVE 打分數」也不對，評分可能來自 CNA、NVD、廠商或其他 provider。

「沒在 KEV 就不急」更危險。KEV 是很強的優先訊號，卻不是全世界利用活動的完整清單。至於 vendor 說不受影響，也要先核對產品分支、部署方式和公告更新日期；使用下游重新封裝版本時，還得找對應發行者的公告。

最後只留一個判斷原則：不要找一個網站包辦所有答案。CVE Program 管識別與核心 Record，NVD 做分析補充，CISA 提供已知利用訊號，FIRST 維護評分規格，真正要升級哪一版，通常還是得回 vendor advisory。

下一篇會回到通報的起點：一封只寫「這裡有漏洞」的信，為什麼通常還不夠處理？

## 參考資料

- CVE Program Structure: https://www.cve.org/ProgramOrganization/Structure
- MITRE CVE Partner Information: https://www.cve.org/PartnerInformation/ListofPartners/partner/mitre
- NVD CVEs and the NVD Process: https://nvd.nist.gov/general/cve-process
- NVD General Information: https://nvd.nist.gov/general
- CISA Known Exploited Vulnerabilities Catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- FIRST Standards: https://www.first.org/standards/
- FIRST CVSS: https://www.first.org/cvss/
- FIRST EPSS: https://www.first.org/epss/
