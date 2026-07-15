# Day 5 - CVE Record 裡通常包含哪些欄位？

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVE 與 CNA 基礎

前一天談完漏洞從發現、保留 ID 到公開的生命週期，今天把鏡頭拉近，直接拆一筆 CVE Record。

閱讀 CVE 時，最容易犯的錯是只看標題、描述或分數。其實一筆 Record 不只是「漏洞說明」，而是一份有結構的資料：誰發布、目前是什麼狀態、影響哪個產品、哪些版本受影響、弱點屬於哪一類，以及有哪些公開證據，都有各自的位置。

先建立一個重要觀念：**CVE ID 是識別碼，CVE Record 才是承載漏洞資料的紀錄。**

## 先看整體：CVE JSON 5.x 的三個區塊

目前的 CVE Record 採用 CVE JSON 5.x 格式。若先忽略細節，可以把它理解成三層：

![CVE Record 結構示意：cveMetadata、CNA container 與可選的 ADP container](/blog-assets/ithome-2026/day-05-record-anatomy.png)

1. `cveMetadata`：這筆 Record 的識別、狀態與時間資料。
2. `containers.cna`：負責發布的 CNA 所提供的主要漏洞資料。
3. `containers.adp`：ADP 後續補充的 enrichment，可有零個或多個。

最外層還會看到 `dataType` 與 `dataVersion`，用來表明資料類型與格式版本。它們比較像機器讀取時的路標，不是漏洞本身的技術內容。

## cveMetadata：這筆紀錄是誰、由誰處理、處於什麼狀態

`cveMetadata` 回答的是 Record 身分與管理狀態。常見欄位包括：

- `cveId`：例如 `CVE-2026-12345`。
- `assignerOrgId`：指派這組 ID 的組織識別碼。
- `state`：常見為 `PUBLISHED` 或 `REJECTED`。
- `dateReserved`：ID 被保留的時間。
- `datePublished`：Record 首次發布的時間。
- `dateUpdated`：Record 最近更新的時間。

這些日期回答的是不同問題。`dateReserved` 不是公開日期，`datePublished` 也不表示當天才發現漏洞；`dateUpdated` 則可能因版本、描述或 reference 修正而改變。

閱讀時還要留意 `state`。如果狀態是 `REJECTED`，原本的 ID 可能因重複指派、不是安全問題或其他原因不再作為獨立漏洞使用。此時應閱讀 rejection reason，而不是沿用舊描述做判斷。

## containers.cna：CNA 發布的核心內容

一筆 Published Record 的主要內容通常放在 `containers.cna`。這裡的 CNA 是資料提供者，不代表所有欄位都一定由產品廠商填寫；實際來源仍取決於該筆漏洞由哪個 CNA 負責。

### providerMetadata：誰提供這個 container

這個區塊通常包含提供者的組織 ID、短名稱與更新時間。它能幫助讀者辨認這份 CNA container 是由哪個組織提交。

如果 Record 後來出現 ADP container，每個 container 也會有自己的 provider metadata，讓不同來源的資料不會混在一起。

### title：短標題

`title` 用一行文字概括漏洞。好的標題通常會帶出產品、元件或弱點類型，例如「某元件的路徑穿越漏洞」，但它不是完整描述，也不適合承擔所有技術條件。

有些 Record 沒有 title，因此不能把它當成判斷漏洞內容的唯一入口。

### descriptions：人類可讀的漏洞描述

`descriptions` 是陣列，通常至少包含語言代碼與文字內容。描述的核心任務，是讓讀者能回答：

- 哪個產品或元件有問題？
- 問題的根因或行為是什麼？
- 攻擊者需要哪些條件？
- 成功利用後會造成什麼影響？

例如，「某產品存在驗證不足」仍然太模糊；若能進一步說明未驗證的遠端攻擊者可透過特定介面修改設定，資訊才足以支援後續判斷。

描述也不等於完整技術報告。PoC、修補 commit、繞過方式或操作細節，通常會放在 advisory 或其他 references 中。

### affected：產品與版本範圍

`affected` 是實務上最需要仔細看的區塊之一。常見資料包括：

- `vendor`：供應商或維護組織。
- `product`：受影響產品。
- `versions`：版本與狀態，例如 `affected`、`unaffected` 或 `unknown`。
- `platforms`：特定作業系統、硬體或執行平台。
- `modules`、`programFiles`、`programRoutines`：更細的受影響元件。
- `defaultStatus`：未逐一列出的版本預設狀態。

版本不一定只是一個固定字串，也可能是範圍：某版本起、某版本以前，或直到某個修補版本為止。閱讀時必須同時看邊界是否包含，以及 `lessThan`、`lessThanOrEqual` 等表示方式。

最危險的讀法，是看到產品名稱相同就直接判定資產受影響。產品分支、平台、模組、設定與版本邊界都可能改變結論。

### problemTypes：弱點分類

`problemTypes` 常用來記錄 CWE，例如：

```text
CWE-79: Improper Neutralization of Input During Web Page Generation
```

它描述的是弱點類型或根因分類，不是另一個漏洞編號。CWE 可能由 CNA 提供，也可能在其他平台的 enrichment 中出現；有些 Record 則沒有足夠資訊選到精確 CWE。

與其為了填欄位勉強選一個看似接近的分類，不如先確認真正的失效機制。第 8 至 10 天會再完整討論 CWE 與根因判斷。

### metrics：嚴重程度資料

`metrics` 可以承載 CVSS v3.1、CVSS v4.0 或其他評估資料，通常包含向量、分數與嚴重程度。

但要注意兩件事：

1. CVE ID 本身不自帶固定分數。
2. 不同資料提供者可能基於不同資訊與假設給出不同向量。

所以看到某網站的 CVSS 時，要一起確認版本、向量與評分來源。若 CNA container 沒有 metrics，也不代表這筆 CVE 無效。

### references：可公開查證的資料

`references` 會列出與漏洞相關的公開網址，可能指向：

- Vendor security advisory
- 修補公告或 release notes
- Git commit、issue 或 pull request
- CERT/CC、協調單位或研究報告
- 技術分析與利用說明

有些 reference 還會帶 tags，例如 `vendor-advisory`、`patch` 或 `exploit`，幫助系統分類。不過 tag 只是提示，仍應打開原始頁面確認內容、版本與更新時間。

### credits、timeline 與 supportingMedia

Record 還可能包含：

- `credits`：致謝發現者、通報者或協調者。
- `timeline`：發現、通報、確認、公開等事件。
- `supportingMedia`：補充文字或媒體資料。
- `solutions`：修補或緩解方式。
- `workarounds`：暫時性替代措施。
- `configurations`：容易受影響的特定設定。
- `exploits`：已知利用資訊。

這些欄位很有價值，但不是每筆 Record 都會出現。缺少某個可選欄位，不應直接解讀成「沒有修補」、「沒有被利用」或「沒有人獲得致謝」。它可能只是資料未由該來源提供。

## containers.adp：由其他角色補充 enrichment

ADP 是 Authorized Data Publisher。它可以在 CNA 已發布的核心資料之外，加入額外分析或標準化內容，同時保留來源邊界。

這種設計很重要：如果 CNA 與後續分析者對評分或分類有不同判斷，資料不必互相覆蓋。讀者可以看到各自提供了什麼，再依用途決定採用方式。

因此，一筆 Record 裡同時出現多組 metrics 或 problem type 並不一定是資料衝突，也可能是不同 provider 的評估。比較時應看 container 與 `providerMetadata`，不能只抓第一個分數。

## 最低要求與常見欄位，不是同一件事

依 CVE Program 公開流程，發布 Record 時需要提供 CVE ID、簡短描述、受影響產品與版本，以及相關公開 references。實際 JSON schema 為了支援多語言、版本範圍、評分與 enrichment，能承載的欄位遠比最低發布資料多。

也就是說：

- CVSS 很常見，但不是判斷 CVE 是否存在的必要條件。
- CWE 很有用，但不是每筆都能立即精確分類。
- CPE 常在 NVD 使用，不應預設一定存在於 CNA container。
- 沒有 PoC，不代表沒有漏洞。
- 沒列 workaround，不代表一定沒有暫時措施，仍要查 vendor advisory。

把「沒有欄位」直接翻譯成「現實中不存在」，是讀漏洞資料時常見的推論錯誤。

## 實際閱讀一筆 Record 的順序

面對一筆陌生 CVE，可以依序檢查：

1. **身分與狀態**：CVE ID、`PUBLISHED` 或 `REJECTED`、更新時間。
2. **資料來源**：CNA container 與 provider 是誰，是否還有 ADP。
3. **受影響範圍**：vendor、product、版本邊界、平台與模組。
4. **漏洞機制與影響**：description 是否交代攻擊條件與結果。
5. **分類與評分**：CWE、CVSS 由誰提供，向量假設是什麼。
6. **外部證據**：vendor advisory、patch、release notes 與其他 references。

這個順序刻意把產品與版本放在分數前面。若資產根本不在受影響範圍內，再高的 CVSS 也不是該資產的修補結論；反過來，沒有分數也不能成為忽略漏洞的理由。

## 小結

CVE Record 可以先分成 metadata、CNA 核心資料與可選的 ADP enrichment。真正閱讀時，最重要的不是背完 JSON 欄位，而是知道每個欄位回答哪一類問題，以及資料由誰提供。

明天會把視野再拉遠：CVE/MITRE、NIST/NVD、CISA/KEV、FIRST 與 Vendor Advisory 都在談漏洞，但它們各自回答的問題並不相同。

## 參考資料

- CVE Program Process: https://www.cve.org/about/Process
- CVE JSON 5 Schema: https://github.com/CVEProject/cve-schema
- CVE List V5 Repository: https://github.com/CVEProject/cvelistV5
- CVE Program Glossary: https://www.cve.org/ResourcesSupport/Glossary

