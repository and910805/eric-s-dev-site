# Day 16 - 一篇讀懂 CVSS v3.1：從條件、Scope 到影響

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVSS 評分核心

CVSS v3.1 的 Base Vector 看起來像一串縮寫：

```text
CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
```

與其背出 9.8，不如把它當成一段壓縮過的攻擊敘事：遠端可打、條件單純、不需權限、不需使用者互動，影響留在同一安全授權範圍內，且機密性、完整性、可用性都受到高度影響。

## Exploitability：攻擊要怎麼發生

`Attack Vector` 描述攻擊者必須位於哪個位置，從 Network、Adjacent、Local 到 Physical。它看的是利用路徑，不是受影響產品平常被叫作「網路設備」還是「桌面軟體」。

`Attack Complexity` 判斷是否存在攻擊者無法控制、且利用成功前必須具備的額外條件。需要精心設計 payload 不會自動變成 High；多數 exploit 都需要技術能力，這不是 AC 的判斷重點。

`Privileges Required` 是攻擊前已經需要的權限。不要把漏洞成功後取得的 root 權限倒填進去。`User Interaction` 則看攻擊者以外的使用者是否必須完成某個動作，例如開啟文件或點擊連結。

## Scope：v3.1 最容易卡住的地方

Scope 在問：受漏洞影響的元件，與承受後果的元件，是否由不同的 security authority 管理。

例如瀏覽器中的網站腳本若突破 sandbox 影響作業系統，可能涉及 Scope Changed。單純從一台主機橫向移動到另一台，不會因「影響擴大」就自動算 Changed；仍要看漏洞利用是否跨越了原本元件的授權範圍。

Scope 不是「影響很廣」的同義詞，也不是「從 user 變 root」就必然 Changed。這也是 v3.1 評分爭議最常出現的位置之一。

## Impact：C、I、A 受到多少影響

`Confidentiality` 看資訊是否被未授權揭露；`Integrity` 看資料或系統是否能被未授權修改；`Availability` 看服務或資源是否被中斷。三者各有 None、Low、High。

評分要以漏洞造成的直接、可合理預期結果為主。讀到一份低敏感度檔案，不應因為「說不定裡面有密碼」直接給 C:H；一次可恢復的程序 crash，也未必等同整個服務永久不可用。

## Temporal 與 Environmental 沒有消失

Base Vector 最常被引用，但 v3.1 還有 Temporal 與 Environmental Metrics。Temporal 能納入 exploit code maturity、修補狀態與報告可信度；Environmental 則可依部署調整 Modified Base Metrics，並設定 C、I、A Requirement。

正式通報常只提供 Base Score，並不表示其他組不重要，而是發布方通常不知道每個組織的環境。使用者把 9.8 原封不動套到所有資產，等於放棄了 CVSS 本來保留的環境調整能力。

## 讀向量的簡單順序

先讀 AV 到 UI，還原攻擊前置條件；再判斷 Scope；最後確認 C、I、A 是否有證據。遇到爭議時，不要從「我覺得應該是 High」開始，而是回到官方定義與實際攻擊路徑。

明天單獨看 v4.0。它不是把版本號加一，而是直接處理 v3.1 中幾個長期難以表達的問題。

## 參考資料

- CVSS v3.1 Specification: https://www.first.org/cvss/v3.1/specification-document
- CVSS v3.1 User Guide: https://www.first.org/cvss/v3-1/user-guide
- CVSS v3.1 Calculator: https://www.first.org/cvss/calculator/3.1
