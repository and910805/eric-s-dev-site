# Day 21 - 從向量到分數：RCE 一定是 9.8 嗎

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVSS 評分核心

RCE 很嚴重，但「RCE = 9.8」不是 CVSS 規則。9.8 是一組特定 v3.1 Base Metrics 算出的結果：

```text
CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
```

只要必要條件或實際影響不同，向量和分數就會改變。

## 先寫向量，再讓計算器算分

CVSS 公式包含 exploitability 與 impact 的權重、Scope 影響和向上取整規則。實務上應使用 FIRST 官方計算器或可信工具，不建議手算後只留下數字。

真正需要人工判斷的是每個 metric。工具能正確代公式，不能替你知道入口是否需要登入、使用者是否必須開檔，或程式碼最後以什麼權限執行。

## 需要登入的 RCE

假設一般使用者可在自己的專案設定中插入命令，伺服器會以受限服務帳號執行。若攻擊前需要低權限帳號，PR 就不會是 None；若只能從管理網路接觸，還要依漏洞本身和部署方式判斷 AV 或 Environmental Metrics。

「最後可執行命令」也不保證 C、I、A 全部 High。容器權限、檔案掛載、網路政策與可用命令，都可能限制技術影響。

## 要人開檔的 RCE

惡意文件觸發桌面程式碼執行時，往往需要受害者開啟檔案。v3.1 的 UI 可能是 Required；v4.0 還要判斷 Passive 或 Active。寄送管道在網路上，不代表 AV 就一定是 Network，應依漏洞觸發位置套用規格定義。

## 只在本機成立的權限提升

某些漏洞能執行任意程式碼，但攻擊者先要有本機帳號或執行能力。這類案例可能是 AV:L、PR:L，技術影響仍可很高，分數卻不會是遠端未驗證 RCE 常見的 9.8。

這不代表漏洞不重要。對多使用者主機、VDI、容器平台或已遭入侵的環境，本機提權可能是攻擊鏈中的關鍵一步。

## 分數相同，故事可能不同

CVSS 分數經過加權與四捨五入，不同向量可能落到同一數值。因此公告只寫「CVSS 8.8」會丟失大量資訊。至少應保留版本與完整向量，最好再附上各項判斷理由。

不同版本也不能直接比較。v4.0 改了 metric 與 scoring system，同一漏洞的 v3.1 與 v4.0 分數不同，不代表其中一個一定錯。

## 評分前的五句話

我習慣先回答五件事：攻擊從哪裡開始、依賴什麼額外條件、攻擊前要有何權限、是否需要另一位使用者參與、成功後實際影響哪些系統與資料。

這五句若寫不出來，先補漏洞事實；急著開計算器，只會把不確定性包裝成一個很精確的數字。

## 參考資料

- CVSS v3.1 Calculator: https://www.first.org/cvss/calculator/3.1
- CVSS v3.1 Specification: https://www.first.org/cvss/v3.1/specification-document
- CVSS v4.0 Calculator: https://www.first.org/cvss/calculator/4.0
- CVSS v4.0 Specification: https://www.first.org/cvss/v4-0/specification-document
