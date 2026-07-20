# Day 24 - KEV、Exploit、PoC：不要把三種證據混成一句話

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：EPSS、風險排序與 CNA 實務

「這個漏洞有 exploit。」

這句話可能代表研究員公開了一段只能讓程式 crash 的 PoC，也可能代表攻擊框架已有可靠模組，甚至是事件調查已確認攻擊者正在野外利用。差異很大，通報時不應用同一個詞帶過。

## PoC：證明某個主張成立

Proof of Concept 的目的，是以最小方式證明漏洞或其中一段利用條件。它可能只讓服務異常、顯示可控 instruction pointer，或讀出一小段資料。

PoC 不一定可靠、不一定跨版本，也不一定完成攻擊鏈。能 crash 的 memory corruption PoC，和穩定繞過保護並執行程式碼的 exploit，不是同一成熟度。

引用 PoC 時應說清楚它證明了什麼、測試版本、必要條件與來源。不要因為 GitHub 上出現檔案，就把「存在公開 exploit」寫成「已遭廣泛利用」。

## Exploit：把弱點轉成可利用結果

Exploit 通常比 PoC 更接近實際取得安全影響的程式或方法，但這個詞沒有單一可靠度保證。它可能要人工調整 offset、只支援特定環境，也可能已被整合到成熟工具中。

判讀時至少看來源、發布時間、支援版本、成功結果、是否需要先取得權限，以及是否有可信的獨立驗證。來路不明的 exploit code 本身也可能帶有惡意內容，不適合直接在工作環境執行。

## KEV：已知遭到野外利用的目錄

CISA 的 Known Exploited Vulnerabilities Catalog 收錄有證據顯示已在野外遭利用，且符合其納入條件的 CVE。對美國聯邦文職機關，BOD 22-01 另規定了修補要求；其他組織也可把 KEV 當作高價值排序依據。

KEV 是一份經策展的權威清單，不是世界上所有利用事件的完整全集。某 CVE 尚未列入，不能反推它從未被利用或不重要。

## 三句話分開寫

比起「已有 exploit」，更好的寫法是：

- 研究員已公開可重現服務崩潰的 PoC，尚未證明程式碼執行
- 某工具已加入針對特定版本的 exploit module
- CISA 已於某日將此 CVE 納入 KEV，表示有野外利用證據

每一句都能被查證，也不會把能力、成熟度與觀測事實混在一起。

## 時間戳記很重要

利用狀態會變。公告發布當天「尚無公開 PoC」，一週後可能已失效。撰寫時應加上截至日期與來源；資料庫也應把觀測狀態視為可更新欄位，而不是漏洞永遠不變的描述。

對防守方而言，KEV、可信事件情報與成熟 exploit 通常會顯著提高優先級。但最後仍要確認資產存在、版本與可達性。沒有受影響產品，清單再紅也不會直接變成環境事件。

## 參考資料

- CISA KEV Catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- CISA BOD 22-01: https://www.cisa.gov/news-events/directives/bod-22-01-reducing-significant-risk-known-exploited-vulnerabilities
- CVSS v4.0 Exploit Maturity: https://www.first.org/cvss/v4-0/specification-document
- EPSS FAQ: https://www.first.org/epss/faq
