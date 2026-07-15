# Day 2 - CVE 是什麼？CVE ID、CVE Record、CVE List 的差異

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVE 與 CNA 基礎

[![CVE Program 官方 Logo](/blog-assets/ithome-2026/cve-logo-official.svg)](https://www.cve.org/)

工作上常會聽到一句話：「請查一下這個 CVE。」

這句話大家通常都聽得懂，但仔細想會發現，它可能在問三件不同的事：這個漏洞的編號是什麼？這筆漏洞紀錄寫了什麼？還是這個漏洞有沒有被收錄在 CVE 的公開目錄中？

CVE Program 的術語表甚至直接把單獨使用的「CVE」標成 *Ambiguous*，也就是語意不夠明確。因為 CVE 可能指 CVE ID、CVE Record、CVE List，甚至是 CVE Program 本身。

這些名詞平常混著講不一定會出問題，但進入漏洞通報、資料交換或自動化處理後，差一個詞，指的可能就是不同層次的資料。

先用一句話區分：

- **CVE ID**：一個漏洞的唯一識別碼
- **CVE Record**：與該識別碼關聯的漏洞資料
- **CVE List**：收錄所有 CVE Record 的公開目錄

## 第一層：CVE ID 是識別碼

CVE ID 的格式看起來很簡單：

```text
CVE-YYYY-NNNN
```

它由三個部分組成：固定的 `CVE` 前綴、年份，以及四位以上的序號。

![CVE ID 由固定前綴、年份與四位以上序號組成](/blog-assets/ithome-2026/day-02-id-anatomy.svg)

例如：

```text
CVE-2021-44228
```

這裡有兩個很常見的誤解。

第一，年份不一定是漏洞被發現的年份。依 CVE Program 的說明，年份代表 CVE ID 被保留的年份，或漏洞公開的年份。因此，不能只看 ID 中的年份就推斷漏洞何時被研究者發現、何時通報廠商，或何時完成修補。

第二，最後一段不是固定四位數。四位只是最低長度，序號可以有五位、六位或更多位，也沒有規定上限。若系統用只接受 `CVE-YYYY-NNNN` 的正規表示式驗證，日後很可能漏掉合法的 CVE ID。

比較實用的格式概念會是：

```regex
^CVE-[0-9]{4}-[0-9]{4,}$
```

不過，格式正確只代表它「長得像」CVE ID，不代表這筆 ID 已公開、內容完整，甚至不代表它仍然有效。要知道這些狀態，就必須繼續看 CVE Record。

## 第二層：CVE Record 是漏洞資料

CVE ID 只回答「是哪一個漏洞」，CVE Record 才開始回答「這個漏洞是什麼」。

依 CVE Program 的現行說明，CVE Record 是由 CNA 提供、與 CVE ID 關聯的描述性資料，並以人類和機器都可讀的格式提供。公開紀錄至少會包含：

- CVE ID
- 簡短的漏洞描述
- 受影響產品與版本
- 相關公開參考資料

實際的 CVE Record 還可能包含 CWE、CVSS、問題類型、credits、受影響版本的狀態，以及 CNA 或 ADP 提供的其他資料。

可以把兩者想成資料庫的主鍵與資料列：CVE ID 是用來定位的 key；CVE Record 則是掛在這個 key 底下、可被更新與擴充的內容。

### CVE Record 不只有 Published

CVE Record 常見的三種狀態是：

| 狀態 | 代表意義 |
| --- | --- |
| `RESERVED` | CNA 已保留 CVE ID，用於協調與管理，但還沒有準備公開漏洞細節 |
| `PUBLISHED` | 必要資料已填入，CVE Record 已公開到 CVE List |
| `REJECTED` | 這個 CVE ID 與紀錄不應再使用 |

`RESERVED` 最容易造成誤解。看到一組 CVE ID，不代表一定能查到描述或受影響版本；它可能還在協調期間，公開頁面只顯示保留狀態。

`REJECTED` 也不是把資料完全刪除。被拒絕的紀錄仍會留在 CVE List，目的是讓查詢者知道這個 ID 已失效，避免它被重新使用，或讓不同資料來源繼續把它當成有效漏洞。

## 第三層：CVE List 是所有紀錄的目錄

CVE List 是所有 CVE Record 的集合。它不是單一漏洞，也不只是網頁上的搜尋結果，而是一份可供人員查詢、也可供系統下載與處理的公開目錄。

![CVE ID、CVE Record 與 CVE List 的三層關係](/blog-assets/ithome-2026/day-02-three-layers.svg)

CVE Program 在 GitHub 維護官方的 `cvelistV5` repository，提供 CVE JSON 5 格式的紀錄。對一般使用者來說，CVE 官網是搜尋與閱讀入口；對需要批次分析、資料同步或建立弱點平台的人來說，機器可讀的 CVE List 才是更重要的資料來源。

所以，「CVE List 有這個漏洞」比較精準的意思是：對應的 CVE Record 已存在於官方目錄中。至於內容是否已公開、是否被拒絕，仍要看該 Record 的狀態。

## 三個名詞放在一起看

| 名詞 | 核心問題 | 典型內容 | 會不會更新 |
| --- | --- | --- | --- |
| CVE ID | 我們在談哪個漏洞？ | `CVE-2021-44228` | 識別碼本身不變 |
| CVE Record | 這個漏洞目前有哪些資料？ | 描述、產品、版本、參考資料、評分等 | 可能更新 |
| CVE List | 哪些 CVE Record 被 CVE Program 收錄？ | 所有狀態的 CVE Record | 持續增加與更新 |

這個區分對實務很有幫助。

當有人說「已經有 CVE」時，可以再確認：只是 ID 已被保留，還是 Record 已經 Published？當掃描器顯示一個 CVE ID 時，也可以確認它引用的是哪一版資料，以及是否有同步後續更新。

同樣地，不能因為找到 CVE ID，就直接假設 CVSS、CWE、修補版本或 PoC 一定存在。那些都是 Record 內容或外部資料來源提供的資訊，不是識別碼本身自帶的屬性。

## 一個簡單的閱讀順序

下次查詢漏洞時，可以依序確認：

1. **ID 是否正確**：格式是否合理，是否真的對應官方紀錄。
2. **Record 狀態為何**：Reserved、Published 還是 Rejected。
3. **必要資料是否足夠**：描述、產品、版本與 references 能否支撐判斷。
4. **是否需要外部補充**：再前往 vendor advisory、NVD、修補 commit 或其他情資來源。

這個順序能避免把「找到編號」誤當成「已經理解漏洞」。

## 小結

今天把 CVE 拆成三個層次：

- CVE ID 負責識別
- CVE Record 負責承載漏洞資料
- CVE List 負責收錄與提供所有紀錄

平常口語上可以統稱 CVE，但在寫通報、設計 API、整理資料欄位或確認公開狀態時，最好把名詞說清楚。精準用詞不只是文字潔癖，它會直接影響後續的人如何理解與處理資料。

明天會繼續往角色面前進：CNA 是什麼？CNA、Root CNA、MITRE 與 NVD 各自在漏洞通報流程中負責什麼？

## 參考資料

- CVE Program Terminology: https://www.cve.org/Resources/Media/Archives/OldWebsite/about/terminology.html
- CVE Program Process: https://www.cve.org/about/Process
- CVE Frequently Asked Questions: https://www.cve.org/Resources/Media/Archives/OldWebsite/about/faqs.html
- CVE List V5: https://github.com/CVEProject/cvelistV5
- CVE Record Format: https://github.com/CVEProject/cve-schema
