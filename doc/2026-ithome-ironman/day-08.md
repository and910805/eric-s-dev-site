# Day 8 - CWE 是什麼？為什麼漏洞要對應 CWE

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：弱點分類與攻擊模式

[![CWE 官方 Logo](/blog-assets/ithome-2026/cwe-logo-official.jpg)](https://cwe.mitre.org/)

*CWE Logo 來源：[CWE](https://cwe.mitre.org/)。*

看到 `CVE-2026-XXXXX`，知道的是「哪一個漏洞」；看到 `CWE-79`，知道的則是「這類問題通常錯在哪裡」。兩串編號長得很像，工作完全不同。

先看一段很小的程式：

```javascript
result.innerHTML = req.query.name
```

如果外部輸入未經適當處理就被放進 HTML，某個產品可能因此產生 XSS 漏洞。這個產品裡可被利用的具體 instance 可以有 CVE ID；背後「在產生網頁時，沒有正確處理輸入」這一類弱點，則可以用 CWE 描述。

## CWE 不是另一套漏洞編號

CWE 的全名是 **Common Weakness Enumeration**。官方把 weakness 定義成存在於軟體、韌體、硬體或服務元件中的某種條件；在特定情況下，它可能促成漏洞產生。

這裡的關鍵字是「類型」和「可能促成」。CWE 不會告訴你某台伺服器是否需要更新，也不會代替 vendor advisory。它比較像一套共同語言，讓開發者、研究者、掃描工具和漏洞資料庫談論同一種設計或實作缺陷。

可以這樣區分：

```text
CVE：某個產品、某些版本中的具體漏洞
CWE：可能在許多產品中反覆出現的弱點類型
```

同一個 CWE 可以對應大量 CVE；一筆 CVE 也可能牽涉不只一個 weakness。它們不是一對一關係。

## 為什麼只寫「XSS」還不太夠

「XSS」、「SQL Injection」和「Path Traversal」都是大家熟悉的漏洞名稱，但自然語言很容易遇到同義詞、縮寫和分類粒度不一的問題。

以 XSS 為例，有人寫 Cross-Site Scripting，有人只寫 script injection，有人從輸出編碼失敗來描述。CWE ID 讓資料比較容易被搜尋和統計，也能把讀者帶回一份包含定義、常見後果、偵測方式、緩解方式與相關弱點的知識條目。

這也是 CWE 對不同角色都有用的原因。漏洞處理人員可以整理根因分布，開發團隊能回頭改善 coding guideline，工具廠商可以對齊掃描規則，管理者則能觀察哪些 weakness 一直重複出現在不同產品。

如果一家公司一年修了十個不同 CVE，逐筆看只會得到十段事件；若其中六筆都指向同一類授權檢查問題，CWE 才讓這個趨勢比較容易被看見。

## Weakness 和 Vulnerability 差在哪裡？

CWE 官方 FAQ 的說法很實用：weakness 是可能在各種產品中導致漏洞的底層條件；vulnerability 則是這些 weakness 在特定產品中的具體 instance，而且能被利用並對機密性、完整性或可用性造成負面影響。

拿門鎖做一個不完全精確的比喻：

- 「鎖具設計沒有驗證鑰匙的某項特徵」是 weakness。
- 「某型號門鎖因此能被特製鑰匙打開」是具體 vulnerability。

前者描述共通的失效方式，後者帶著產品、版本、攻擊條件與實際影響。

這個區分也提醒一件事：看到危險的 coding pattern，不代表已經證明一筆可指派的漏洞。還需要確認它是否可達、是否跨越安全邊界，以及實際造成什麼影響。

## CWE 不是一張平面的清單

CWE 裡的條目有不同抽象層級。官方常見的四種 weakness abstraction 是 Pillar、Class、Base 與 Variant。

Pillar 最抽象，像一個很大的概念入口；Class 比 Pillar 具體，但通常仍不依賴特定語言或技術；Base 已經有足夠細節，可以推導偵測與預防方法；Variant 則更貼近特定資源、技術或 context。

例如 `CWE-74: Injection` 是較抽象的 Class，`CWE-79: Cross-site Scripting` 是更具體的 Base。若通報只確認「某種 injection」，卻硬選到很細的子類，分類可能超過現有證據；反過來，明明已經知道是 XSS，卻只停在 CWE-74，資訊又太寬。

因此，選 CWE 不是找名稱最像的那一條，而是找 **目前證據能支持、又盡量具體** 的層級。

## 一筆 CVE 為什麼可能看到不同 CWE？

同一個漏洞在 CNA、NVD 或其他 provider 那裡，偶爾會看到不同 CWE。原因不一定是誰粗心，也可能是：

- 一方依表面行為分類，另一方掌握了根因。
- 一方選較抽象的 Class，另一方選更具體的 Base。
- 漏洞由一連串 weakness 共同形成。
- Record 更新後，下游資料還沒同步。
- 公開資訊真的不足，只能先標成較寬的類型。

遇到差異時，先回到漏洞描述、受影響元件與修補內容。分類的目的是幫助理解，不是用編號投票決定答案。

## 不確定時，別急著猜最細的 CWE

假設看到「攻擊者可以下載任意檔案」，可能想到 Path Traversal，也可能是授權檢查缺失、外部可控檔名，甚至是多個問題串在一起。只有結果，還不足以證明根因。

比較穩妥的做法是先拆開：輸入如何進入系統、哪個檢查沒有發生、資料最後流向哪個敏感操作，以及修補實際改了什麼。修補若是在路徑正規化，和補上一段 ownership check，對應的 weakness 很可能不同。

這也是後面兩天要繼續談的內容：第 9 天會看 XSS、SQL Injection、Path Traversal、RCE 這些常見名稱在 CWE 裡怎麼落點；第 10 天則專門處理「不要只看表面現象，怎麼往根因靠近」。

## 參考資料

- CWE About: https://cwe.mitre.org/about/
- CWE Frequently Asked Questions: https://cwe.mitre.org/about/faq.html
- New to CWE: https://cwe.mitre.org/about/new_to_cwe.html
- CWE Glossary: https://cwe.mitre.org/documents/glossary/index.html
- CNA Operational Rules v4.1.0: https://www.cve.org/resourcessupport/allresources/cnarules
