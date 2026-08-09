# Day 4 - 一個漏洞從發現到公開的生命週期

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：CVE 與 CNA 基礎

今天沒什麼生活素材可以講，就直接進文章吧 XDD

不過在講 CVE lifecycle 前，先拿大家比較熟的網購包裹當比喻。你按下下單，不代表包裹已經在門口；看到「賣家已出貨」，也不代表物流已經送到；就算貨到了，還可能發現寄錯東西要退貨。

漏洞也是差不多的感覺。研究者把報告寄出去，不代表 CVE 已經有了；拿到 CVE ID，也不代表細節已公開；公開後，內容也還可能更新。

「這個問題確認了，CVE 編號是……」大概是研究者很想收到的回覆之一。但從寄出報告到看到公開 CVE，中間不是按一顆按鈕就結束。有些問題很快就能確認產品、版本與影響；有些光是重現就要來回好幾次，還可能碰上多家供應商、共用元件或公開時間協調。

CVE Program 將主要流程整理成六個階段：

```text
Discover → Report → Request → Reserve → Submit → Publish
```

![CVE Program 官方 CVE Record lifecycle：Discover、Report、Request、Reserve、Submit、Publish](/blog-assets/ithome-2026/day-04-cve-record-lifecycle-official.jpg)

*圖：CVE Record Lifecycle，來源：[CVE Program Process](https://www.cve.org/about/Process)。*

這張圖看起來一路向右，乾淨得不得了。實務上當然沒這麼聽話，每個階段都可能需要補資料、重新確認，甚至回頭釐清前一步。接下來就逐段拆開來看。

## 1. Discover：發現可能的漏洞

流程從某個人或組織發現疑似安全問題開始。可能是研究人員、產品使用者、內部測試團隊、自動化掃描系統，或供應鏈中的其他人。

這時候的關鍵字是「可能」。掃描器跳警告、程式崩潰，或看到不預期的行為，都可能是線索；但還不能直接畫上等號說「這一定有 CVE」。

初步確認時，通常會先問幾件事：問題在哪個產品或元件？哪些版本可能受影響？能不能穩定重現？需要什麼條件？成功利用後可能造成什麼影響？

## 2. Report：通報給適合的窗口

確認不是單純 bug 後，下一步是把問題送到對的地方。通常會先找產品供應商、專案維護者，或涵蓋該產品 scope 的 CNA。

這一步有點像寄包裹時地址寫錯。資料再完整，送錯窗口還是得被轉來轉去。若產品本身已有 CNA，讓最了解產品與版本的人處理，通常更容易確認受影響範圍與修補方式。

一份可處理的初始通報不一定要像完整研究報告，但至少盡量附上產品與測試版本、重現步驟、必要條件、實際與預期結果、安全影響，以及 PoC、log、封包或 crash 資訊等證據。若已有公開時間規劃，也應一併說明。

尚未公開的漏洞更要小心揭露範圍。大家都想趕快修好，但在協調完成前把可利用細節丟到公開地方，通常只會讓事情更難收。

## 3. Request：確認是否需要 CVE ID

收到通報後，CNA 會先確認是否落在自己的 scope 內，並依 CVE Program 規則判斷是否適合指派 CVE ID。

這不是按下「產生編號」就結束。還可能要確認：問題有沒有實際安全影響？是不是已經有其他 CVE ID？同一串現象究竟是一個漏洞還是多個？產品、版本與公開狀態是否足以支撐判斷？

所以被要求補件，或被引導去其他 CNA，不一定是在否定通報。很多時候只是目前的資料還不足，或這份包裹真的寄錯地址了。

## 4. Reserve：先保留一組 CVE ID

符合條件後，CNA 可以保留一組 CVE ID，Record 會處於 `RESERVED` 狀態。

```text
CVE-2026-NNNN  RESERVED
```

它代表這組 ID 已經被拿來做早期協調與管理，但 CNA 還沒有準備好公開漏洞細節。修補流程、advisory 草稿或跨組織協調文件，就能先用同一組編號講同一件事。

這裡很容易看錯幾件事：Reserved 不等於 Published；不代表細節已可查詢；也不代表修補已完成。

如果 CVE ID 已經出現在公開公告或其他來源，但 Record 還沒填好細節，就常被稱為 **Reserved but Public**。對一般使用者來說，這通常只表示「知道有這組 ID」，還不能據此完成風險判斷。

## 5. Submit：把能公開的資料整理好

保留 ID 後，CNA 需要準備可發布的 CVE Record。官方流程列出的內容包括受影響產品、受影響或已修補版本、漏洞類型、根因或影響，以及至少一個公開 reference。

這段常常和廠商修補、advisory 撰寫、公開時間協調一起進行。好的描述至少讓人看得出來：「哪個產品，因為什麼問題，在什麼條件下，可能造成什麼影響。」reference 則把讀者帶到修補公告或其他完整資料。

只寫「產品存在安全漏洞」不是不能送，但幾乎幫不上資產判斷、風險排序和修補追蹤。真正花時間的常常不是填欄位，而是把版本與影響範圍講清楚。

## 6. Publish：發布到 CVE List

當最低必要資料與公開 reference 都準備完成後，負責的 CNA 會將 CVE Record 發布到 CVE List，狀態轉為 `PUBLISHED`。

```text
RESERVED → PUBLISHED
```

這時一般使用者才能在 CVE 官網搜尋與閱讀，系統也能取得機器可讀資料。發布後，下游才會開始各自的處理。例如 NVD 收錄 Published CVE 後，可能根據 references 與公開資訊補充 CVSS、CWE、CPE 與 reference tags。

所以同一天內不同網站顯示的資料量不同很正常：CVE Record 已發布，不代表每個掃描器、資料庫或情資平台都已經同步完成。

## 發布不是流程的終點

官方 lifecycle 圖畫到 Publish，但公開後仍可能補充或修正受影響版本、描述、references，或新增 CVSS、CWE 與其他 ADP enrichment。遇到重複指派或其他原因時，Record 也可能變成 `REJECTED`。

CVE Record 是可更新的資料，不是發布後就永遠不變的公告。做風險判斷時，除了第一次發布日期，也可以留意最後更新時間與資料來源。

## 把流程走一次

假設研究者發現某產品的權限檢查缺失：未授權帳號可以存取管理功能。

1. 研究者先確認可重現，整理影響與證據。
2. 透過廠商的安全通報管道送出報告。
3. 廠商確認問題，並由合適的 CNA 判斷是否符合 CVE 指派規則。
4. CNA 保留 CVE ID，供修補與 advisory 協調使用。
5. 廠商確認受影響版本、完成修補，並準備公開 reference。
6. CNA 發布 CVE Record，廠商同步發布 advisory。
7. NVD 與其他平台陸續收錄或補充資料。

這是一條理想化時間線。若涉及共享元件、多家供應商或供應鏈，scope、版本與公開時間的協調都會更複雜，包裹也就不只轉運一次了。

## 幾個容易看錯的時間點

拿到 CVE ID，不代表內容已公開，它可能仍停在 Reserved；看到 Record Published，也不能直接推論修補已經提供，還是要打開 vendor advisory 與 references。ID 裡的年份同樣不是漏洞發現年份，不能拿來還原完整時間線。

至於 CVE.org 已經查得到、NVD 卻還沒有評分，通常只是下游 enrichment 尚未完成，不代表 CVE 無效。把這幾條時間線混在一起，才會出現「明明有 CVE，為什麼這裡還沒有資料？」的疑問。

## 公開不是句點

一個漏洞從發現到公開，大致經過：

```text
發現 → 通報 → 請求與判斷 → 保留 ID → 整理資料 → 發布 Record
```

說穿了，真正困難的通常不是拿到一組編號，而是確認 scope、避免重複、釐清受影響版本、整理可公開資料，以及協調適當的揭露時間。編號只有一行，前面的協調可能是一長串。

下一篇打開實際的 CVE Record 結構，看識別資料、產品版本、影響與資料來源分別被放在哪裡。

## 參考資料

- CVE Program Process: https://www.cve.org/about/Process
- CNA Operational Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
- CVE Program FAQ: https://www.cve.org/ResourcesSupport/FAQs
