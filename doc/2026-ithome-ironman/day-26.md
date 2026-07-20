# Day 26 - CVE 描述怎麼寫：把必要事實放進一個段落

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：EPSS、風險排序與 CNA 實務

CVE 描述不是新聞標題，也不是完整技術報告。它需要在不長的篇幅裡，讓沒有參與調查的人知道哪個產品、哪些版本、出了什麼問題、誰能在什麼條件下利用，以及會造成什麼影響。

最常見的失敗不是文法，而是句子看起來完整，關鍵資訊卻不在裡面。

## 先確定主詞

「A vulnerability was found in the system」幾乎沒有識別力。主詞應盡量包含 vendor、product 與受影響元件。若產品有容易混淆的同名版本，也要用 CPE、package ecosystem 或其他結構化欄位補足。

版本範圍不必全塞進英文句子，但 Record 中應有可機器讀取的 affected data。使用「latest version」「all versions」前要特別小心，除非調查真的能支持這麼大的範圍。

## 中間說明 weakness 與入口

接著交代失效控制與可控入口，例如「在處理下載路徑時未限制解析後的位置」或「將未經中和的參數串接到 shell command」。這比只寫 arbitrary file read 或 RCE 更能說明漏洞本身。

若公開細節會在修補前增加不必要風險，可以保留 payload 或敏感路徑，但不應把描述抽空到只剩「存在安全問題」。

## 攻擊者條件不能省略

遠端或本機、是否需要驗證、需要一般帳號還是管理員權限、是否要另一位使用者操作，會直接改變讀者判斷。

避免使用「authenticated attacker」後就不再說明權限。若產品角色很多，應指出最低必要權限或可執行的功能。若目前只能證明管理員可利用，就不要推測一般使用者也可以。

## 結尾描述可證明的影響

影響可以是讀取限制外檔案、修改其他使用者資料、執行服務帳號權限的命令，或造成服務中斷。把能力與可能後果分開，文字會比較誠實。

例如「可讀取服務程序有權存取的檔案，可能導致敏感設定外洩」，比「可取得伺服器所有機密」準確。後者同時假設了權限、檔案內容與後續利用。

## 一個可重用的骨架

```text
[Vendor] [Product] [affected versions] contains [weakness]
in [component or operation]. [Attacker with conditions] can
[action] via [input or interface], resulting in [technical impact].
```

骨架是防漏清單，不是要每篇公告長得一模一樣。若句子太長，可以拆成兩句；若產品名稱已在結構化欄位很清楚，也不必為了模板反覆堆疊。

## 避免沒有證據的形容詞

Critical、easily、severe、fully compromised 都需要依據。CVE 描述的工作是陳述事實，嚴重度可由 CVSS 向量表達，利用成熟度則交給相應欄位與外部情報。

發布前可以把描述交給沒看過報告的人，只問五件事：哪個產品、哪些版本、哪個控制失效、利用條件、技術影響。如果有一題答不出來，通常還需要補資料。

## 參考資料

- CVE Record Format: https://cveproject.github.io/cve-schema/schema/docs/
- CVE CNA Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
