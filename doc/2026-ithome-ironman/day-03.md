# Day 3 - CNA 是什麼？CNA、Root CNA、MITRE、NVD 的角色

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVE 與 CNA 基礎

「這個 CVE 是 MITRE 發的嗎？」

「要申請 CVE，是不是去 NVD 填資料？」

這兩句都很常見，也剛好把 CVE 生態系最容易混淆的地方點了出來：名字都看過，但不一定知道它們分別在流程的哪一站。

CVE Program 並不是由單一組織集中處理全球所有漏洞。它採用分層、分工的架構，讓不同產品廠商、開源專案、安全組織與協調單位，可以在各自被授權的範圍內指派 CVE ID 並發布 CVE Record。

今天先把四個最常混在一起的角色拆開：CNA、Root、MITRE 與 NVD。

![CNA、Root、MITRE 與 NVD 在 CVE 生態系中的角色關係](/blog-assets/ithome-2026/day-03-role-map.png)

## CNA：實際處理指派與發布的角色

CNA 是 **CVE Numbering Authority** 的縮寫。依 CVE Program 的定義，CNA 是經授權、在特定 scope 內，負責定期指派 CVE ID 並發布對應 CVE Record 的組織。

關鍵字是 **scope**。

一個 CNA 的權限通常不是「任何漏洞都能處理」，而是有明確範圍，例如：

- 自己開發與維護的產品
- 特定開源專案或生態系
- 某個國家、產業或協調範圍
- 由研究或漏洞協調業務涵蓋的產品

因此，收到漏洞報告後，第一個問題往往不是嚴重度幾分，而是：「這個問題是否在自己的 scope 內？」若不在，應協助辨識更適合的 CNA 或依規則進行協調，而不是因為能看到漏洞就直接指派。

CNA 的核心工作通常包括：

1. 確認通報是否落在自身 scope。
2. 判斷問題是否符合 CVE Program 的漏洞與指派規則。
3. 避免與其他 CNA 重複指派。
4. 保留或指派 CVE ID。
5. 整理描述、受影響產品與版本、references 等資料。
6. 將 CVE Record 發布到 CVE List，並在需要時更新。

所以 CNA 不只是「發號碼的單位」。真正影響紀錄品質的，是它如何確認範圍、理解漏洞、整理資料與協調公開。

## Root：管理與支援 CNA 的角色

Root 位在 CNA 的上層，主要負責特定 scope 內的管理與治理。依目前 CVE Program 的架構，Root 可以管理 CNA、CNA of Last Resort，甚至其他 Root。

Root 常見的責任包括：

- 招募與 onboarding 新 CNA
- 提供規則、訓練與操作指引
- 管理下層 CNA 的帳號與 CVE ID 配額機制
- 確認 CNA 遵循 CVE Program 規則
- 處理 scope 重疊、爭議與升級事項
- 確保範圍內有 CNA-LR 可以承接沒有其他 CNA 處理的漏洞

可以把 CNA 理解為第一線的指派與發布角色，把 Root 理解為制度與品質治理角色。Root 不需要逐筆代替所有 CNA 撰寫紀錄，但要確保其管理範圍內的運作一致、可升級，也有人能處理責任空缺。

### Root 與 Top-Level Root

目前 CVE Program 的正式架構還有 **Top-Level Root（TL-Root）**。TL-Root 直接向 CVE Board 責任，並管理自己底下的 Root 與 CNA 階層。

這表示 CVE Program 不是單一路徑，而是多個具有不同 scope 的階層。遇到問題時，通常先從最接近產品或範圍的 CNA 開始；無法處理時，再依階層向 Root 或 TL-Root 升級。

## MITRE：一個組織，同時扮演多個角色

MITRE 容易讓人混淆，是因為它不是只扮演一個角色。

依 CVE Program 目前公開的組織架構與 partner 資訊，MITRE 同時具有：

- **Secretariat**：提供行政與後勤支援，維護 CVE Program 基礎設施。
- **Top-Level Root**：管理其 Root、CNA 與 CNA-LR 階層。
- **CNA-LR**：在其適用 scope 內，承接未被其他 CNA scope 涵蓋的漏洞。

因此，「MITRE 在維護 CVE Program」與「某筆 CVE Record 由 MITRE 處理」是兩件不同的事。很多 CVE Record 是由全球各地的 CNA 直接發布；只有在對應 scope 與流程下，MITRE 才會是該筆紀錄的指派或發布角色。

閱讀 CVE Record 時，應查看 CNA container 中的 provider metadata 或頁面標示，確認真正負責該筆紀錄的 CNA，而不是看到 CVE 就一律歸因於 MITRE。

## NVD：CVE 的下游豐富化資料庫

NVD 是 **National Vulnerability Database**，由美國 NIST 維護。它會接收已發布到 CVE List 的紀錄，再依 CVE references 與公開資訊進行 enrichment。

NVD 可能補充的內容包括：

- CVSS v4.0 與 CVSS v3.1 評分
- CWE 弱點分類
- CPE applicability statements
- reference tags 與其他可供弱點管理使用的 metadata

NVD 不負責替 CNA 指派 CVE ID，也不是 CVE Record 第一次發布的來源。更精準的資料流是：

```text
CNA 發布 CVE Record → CVE List → NVD 收錄並進行 enrichment
```

這也解釋了為什麼 CVE 官網與 NVD 顯示的欄位可能不同。CVE Record 可能已經 Published，但 NVD enrichment 尚未完成；也可能 CNA 提供了一組 CVSS，NVD 後續根據公開資料提供另一組評估。兩者不一定互相衝突，而是資料提供者與用途不同。

## 沿著一筆通報走一次

假設一份漏洞報告送到產品 CNA。CNA 先確認 scope、判斷是否符合指派規則，接著保留 ID、整理資料並發布 Record。遇到跨 scope、重複指派或治理問題時，Root 可能介入協調；再往上，TL-Root 與 Secretariat 維持整個 Program 的運作，而 MITRE 同時承擔其中幾種角色。

Record 公開後，NVD 才從下游接手，依公開資訊補上 CVSS、CWE、CPE 等 enrichment。換句話說，CNA 與 Root 位在「指派與發布」這條線上，NVD 位在「公開後分析」這條線上。MITRE 則不能只用一個框框概括，必須看當下談的是它的哪個角色。

## 實務上應該找誰？

如果要通報漏洞或申請 CVE ID，可以依這個順序思考：

1. 先查產品供應商或專案是否本身就是 CNA。
2. 若不是，查是否有涵蓋該產品、產業或協調範圍的 CNA。
3. 找不到適合的 CNA，再依 CVE Program 提供的管道尋求 CNA-LR 協助。
4. 不要把 NVD 當成 CVE ID 申請入口；NVD 是資料發布後的下游服務。

選對窗口能減少轉交時間，也能降低 scope 重疊與重複指派的風險。

## 下次別再找錯窗口

CVE Program 比較像一個分散合作的網路，不是一間把全球漏洞全部收進來處理的總公司。要通報或申請 ID，找 scope 合適的 CNA；遇到治理與升級問題，才往 Root 體系走；要看公開後的 NIST 分析，再開 NVD。

角色釐清後，下一篇就比較好走了：直接跟著一個漏洞，從發現一路走到公開。

## 參考資料

- CVE Program Structure: https://www.cve.org/ProgramOrganization/Structure
- CVE Partner Roles: https://www.cve.org/PartnerInformation/ListofPartners
- MITRE Partner Information: https://www.cve.org/PartnerInformation/ListofPartners/partner/mitre
- CNA Operational Rules: https://www.cve.org/resourcessupport/allresources/cnarules
- NVD CVEs and the NVD Process: https://nvd.nist.gov/general/cve-process
- NVD General Information: https://nvd.nist.gov/general
