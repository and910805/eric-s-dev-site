# Day 9 - 常見 CWE 怎麼分？從 XSS、SQL Injection、Path Traversal 到 RCE

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：弱點分類與攻擊模式

漏洞名稱常把不同層次的概念混在一起。XSS、SQL Injection 與 Path Traversal 比較像失效方式；RCE 則描述攻擊成功後的結果。把四個詞並排，剛好可以看出選 CWE 時最常見的陷阱。

## XSS：不要只看到 `<script>`

XSS 常對應 `CWE-79: Improper Neutralization of Input During Web Page Generation`。重點不是 payload 裡有沒有 `<script>`，而是外部可控資料進入網頁輸出時，沒有依所在 context 做正確處理，最後能在其他使用者的瀏覽器中執行非預期內容。

同一段輸入放在 HTML body、attribute、JavaScript 字串或 URL，所需的處理方式都不同。因此「系統有做 HTML escape」不一定能回答所有 XSS 問題，還要看資料最後落在哪個 context。

如果輸入只會回顯給攻擊者自己，且沒有跨越信任邊界，也不能看到 alert 就立刻下結論。真正要確認的是誰控制輸入、誰載入輸出，以及執行後取得了哪個 origin 下的能力。

## SQL Injection：問題在查詢結構被改變

SQL Injection 最常對應 `CWE-89`。它不是單純「輸入含有單引號」，而是外部輸入被拼進 SQL 指令，使攻擊者能改變原本的查詢語意。

```javascript
const sql = "SELECT * FROM users WHERE name = '" + name + "'"
```

修補方向通常是參數化查詢，讓資料維持資料，不被解讀成 SQL 結構。只做黑名單、刪除單引號或替換關鍵字，往往會漏掉不同編碼、資料庫語法與其他注入位置。

看到資料庫錯誤也不等於已證明 SQL Injection。錯誤可能來自型別轉換、查詢逾時或其他程式問題。最好能證明輸入確實改變了 query behavior，例如布林條件、時間差或可控的結果集差異。

## Path Traversal：路徑走出了原本的邊界

Path Traversal 常見對應是 `CWE-22`。典型輸入是 `../`，但根因不是那兩個點本身，而是程式拿外部可控的路徑組合檔案位置，卻沒有把最後解析結果限制在允許的目錄內。

只做字串取代很容易被不同分隔符號、URL encoding、重複解碼、symbolic link 或平台差異繞過。較可靠的思路是先 canonicalize，再確認解析後的目標仍位於允許範圍，並搭配最小檔案權限。

這類案例還可能同時涉及 `CWE-73: External Control of File Name or Path`。選哪一個，要看已知資料能否證明 traversal，還是目前只知道攻擊者能控制檔名或路徑。

## RCE：它通常是 impact，不是 root cause

RCE 是 Remote Code Execution，描述遠端攻擊者最後能執行程式碼。它可能由很多不同 weakness 造成：

- OS Command Injection，常見為 `CWE-78`
- Code Injection，常見為 `CWE-94`
- Deserialization of Untrusted Data，常見為 `CWE-502`
- 記憶體破壞，例如 Out-of-bounds Write
- 上傳可執行檔案後被伺服器載入

所以「這是一個 RCE，CWE 就選 RCE」通常不夠精確。應往前問：攻擊者的資料經過哪條路徑，最後為什麼被當成指令、程式碼或物件執行？

## 用一條資料流來判斷

遇到名稱不確定時，可以追四個位置：input 從哪裡進來、途中經過哪些轉換、在哪個安全檢查失敗、最後進入哪個敏感 sink。

輸入進到 HTML renderer，可能往 CWE-79 查；進到 SQL parser，可能是 CWE-89；進到檔案系統 path resolver，可能是 CWE-22 或 CWE-73；進到 shell，則可能是 CWE-78。

分類不是關鍵字配對。明天會繼續往根因走：為什麼只寫「任意檔案讀取」或「RCE」仍然可能停在表面現象。

## 參考資料

- CWE-79: https://cwe.mitre.org/data/definitions/79.html
- CWE-89: https://cwe.mitre.org/data/definitions/89.html
- CWE-22: https://cwe.mitre.org/data/definitions/22.html
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
- CWE Root Cause Mapping: https://cwe.mitre.org/documents/cwe_usage/guidance.html
