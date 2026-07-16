# Day 4 - 一個漏洞從發現到公開的生命週期

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVE 與 CNA 基礎

漏洞報告寄出去之後，研究者最常問的是：「什麼時候會有 CVE？」

這題沒有固定答案。有些問題很快就能確認產品、版本與影響；有些光是重現就要來回幾次，還可能碰上多家供應商、共用元件或公開時間協調。CVE ID 也不是按下按鈕就會立刻連同完整資料出現在網站上。

CVE Program 將主要流程整理成六個階段：

```text
Discover → Report → Request → Reserve → Submit → Publish
```

![CVE Program 官方 CVE Record lifecycle：Discover、Report、Request、Reserve、Submit、Publish](/blog-assets/ithome-2026/day-04-cve-record-lifecycle-official.jpg)

*圖：CVE Record Lifecycle，來源：[CVE Program Process](https://www.cve.org/about/Process)。*

這張圖看起來是一條直線，但實務上每個階段都可能需要補資料、重新確認，甚至回到前一步。接下來逐段拆開。

## 1. Discover：發現可能的漏洞

流程從某個人或組織發現疑似安全問題開始。發現者可能是研究人員、產品使用者、內部測試團隊、自動化掃描系統，或其他供應鏈參與者。

這個階段的重點是「可能的漏洞」，而不是已經確定能取得 CVE ID。

初步發現通常需要回答：

- 問題發生在哪個產品或元件？
- 哪些版本可能受影響？
- 是否能穩定重現？
- 需要什麼攻擊條件？
- 成功利用後可能造成什麼影響？

掃描器警告、程式崩潰或不預期行為都可以是線索，但還需要進一步確認根因與安全影響。

## 2. Report：通報給適合的窗口

發現者接著將問題通報給 CVE Program partner，實務上通常會先找產品供應商、專案維護者，或涵蓋該產品 scope 的 CNA。

選對窗口很重要。若產品本身已有 CNA，由最了解產品與版本的人處理，通常更容易確認受影響範圍與修補方式。找錯 CNA 則可能需要轉交，增加協調時間。

一份可處理的初始通報不一定要像完整研究報告，但至少應盡量包含：

- 產品與元件名稱
- 受影響版本或測試版本
- 重現步驟與必要條件
- 實際結果與預期結果
- 安全影響
- PoC、log、封包或 crash 資訊等證據
- 預計公開時間或已知公開狀態

若漏洞尚未公開，通報者與處理單位也要注意資訊揭露範圍，避免協調尚未完成就意外公開可利用細節。

## 3. Request：確認是否需要 CVE ID

收到通報後，CNA 會先確認問題是否在自身 scope，並依 CVE Program 規則判斷是否適合指派 CVE ID。

這裡不是單純按下「產生編號」。CNA 可能還要確認：

- 是否確實存在安全影響
- 是否已有其他 CVE ID
- 問題應算一個還是多個漏洞
- 是否與既有問題具有相同根因與修補方式
- 產品、版本與公開狀態是否足以支撐判斷

若 scope 不符，通報可能被引導到其他 CNA；若資訊不足，也可能先要求補件。這不等於否定漏洞，而是目前還不足以完成指派判斷。

## 4. Reserve：保留 CVE ID

符合條件後，CNA 可以保留一組 CVE ID。此時 Record 進入 `RESERVED` 狀態。

```text
CVE-2026-NNNN  RESERVED
```

`RESERVED` 代表這組 ID 已被用於早期協調與管理，但 CNA 還沒有準備好公開完整漏洞資料。它可以被放進修補流程、advisory 草稿或跨組織協調文件中，讓大家引用同一個識別碼。

需要特別注意：

- Reserved 不等於 Published。
- Reserved 不代表漏洞細節已可查詢。
- Reserved 不代表修補已完成。
- Reserved 也不代表外部一定完全不知道這組 ID。

如果 CVE ID 已在公開來源出現，但 Record 尚未發布，就可能形成 Reserved but Public 的情況。對使用者來說，這通常只表示「知道有這組 ID」，不代表已有足夠資料判斷風險。

## 5. Submit：整理並提交 CVE Record 資料

保留 ID 後，CNA 需要準備可公開的 CVE Record。依 CVE Program 的流程說明，資料包括但不限於：

- 受影響產品
- 受影響或已修補版本
- 漏洞類型、根因或影響
- 至少一個公開 reference

此階段常與廠商修補、advisory 撰寫及公開時間協調並行。CVE 描述要讓讀者知道「哪個產品因為什麼問題，在什麼條件下造成什麼影響」，references 則提供更完整的修補或技術資訊。

如果 Record 只寫「產品存在安全漏洞」，即使格式能送出，也很難支援後續的資產判斷、風險排序與修補追蹤。提交前的品質檢查，因此是整個流程中很重要的一段。

## 6. Publish：發布到 CVE List

當最低必要資料準備完成後，負責的 CNA 會將 CVE Record 發布到 CVE List。Record 狀態轉為 `PUBLISHED`，一般使用者可以在 CVE 官網搜尋，也可以透過機器可讀資料取得。

```text
RESERVED → PUBLISHED
```

發布後，下游系統才會開始各自的處理。例如 NVD 收錄 Published CVE 後，可能根據 references 與公開資訊補充 CVSS、CWE、CPE 與 reference tags。

因此，同一天內不同網站顯示的資料量可能不同：CVE Record 已發布，不代表每個掃描器、資料庫或情資平台都已同步完成。

## 發布不是流程的終點

官方 lifecycle 圖畫到 Publish，但公開後仍可能發生後續變化：

- 補充或修正受影響版本
- 更新描述與 references
- 新增 CVSS、CWE 或其他 ADP enrichment
- 修正錯誤的產品資訊
- 因重複指派或其他原因將 Record 改為 `REJECTED`

CVE Record 是可更新的資料，不是發布後就永遠不變的靜態公告。使用者在做風險判斷時，除了第一次發布日期，也應注意最後更新時間與資料來源。

## 一個簡化的時間線範例

假設某研究者發現產品的權限檢查缺失，流程可能是：

1. 研究者確認未授權帳號可以存取管理功能。
2. 透過廠商的安全通報管道送出報告。
3. 廠商確認問題，並由其 CNA 判斷符合 CVE 指派規則。
4. CNA 保留 CVE ID，供修補與 advisory 協調使用。
5. 廠商確認受影響版本、完成修補，並準備公開 reference。
6. CNA 發布 CVE Record，廠商同步發布 advisory。
7. NVD 與其他平台陸續收錄或補充資料。

這是一條理想化時間線。若涉及多家供應商、共享元件或 supply chain，scope、版本與公開時間的協調可能更複雜。

## 幾個容易看錯的時間點

拿到 CVE ID，不代表內容已經公開，它可能仍停在 Reserved；看到 Record Published，也不能直接推論修補已經提供，仍要打開 vendor advisory 與 references。ID 裡的年份同樣不是漏洞發現年份，不能拿來還原完整時間線。

至於 CVE.org 已經查得到、NVD 卻還沒有評分，通常只是下游 enrichment 尚未完成，不代表 CVE 無效。把這幾條時間線混在一起，才會產生「明明有 CVE，為什麼這裡還沒有資料」的疑問。

## 公開不是流程的句點

一個漏洞從發現到公開，大致經過：

```text
發現 → 通報 → 請求與判斷 → 保留 ID → 整理資料 → 發布 Record
```

真正困難的地方通常不在取得一組編號，而是確認 scope、避免重複、釐清受影響版本、整理可公開資料，以及協調適當的揭露時間。

下一篇打開實際的 CVE Record 結構，看識別資料、產品版本、影響與資料來源分別被放在哪裡。

## 參考資料

- CVE Program Process: https://www.cve.org/about/Process
- CVE Program Glossary: https://www.cve.org/ResourcesSupport/Glossary
- CNA Operational Rules: https://www.cve.org/resourcessupport/allresources/cnarules
- Reserve IDs and Publish Records for CNAs: https://www.cve.org/ReportRequest/ReserveIDsPublishRecordsForCNAs
- NVD CVEs and the NVD Process: https://nvd.nist.gov/general/cve-process
