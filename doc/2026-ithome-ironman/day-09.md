# Day 9 - 常見 CWE 怎麼分？從 XSS、SQL Injection、Path Traversal 到 RCE

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：弱點分類與攻擊模式

## 前言

真的有不少廠商第一次碰到漏洞通報時，會問一些讓人不知道該先從哪裡解釋的問題。

「我們都已經修好了，可以把 CVE 撤銷嗎？」

「這會影響商譽，我是要找通報者，還是找 CNA 賠我？」

先別急著找人賠錢啦。CVE 不是處罰單，也不是產品的負評留言。漏洞修好之後，CVE 反而更有用途，因為使用者需要知道哪些版本受影響、哪個版本已修補，以及自己到底要不要更新。

修補完成，也不代表這個漏洞就沒有發生過。一般來說，CVE 會因為確認並不存在漏洞、重複指派、使用錯誤的 ID，或多筆紀錄需要合併等原因被標記為 `REJECTED`；「廠商已經修好」或「看起來會影響商譽」，本身並不是撤掉一筆有效 CVE 的理由。

至於通報者在協調修補後公開研究成果，本來就是漏洞揭露流程的一部分。很多通報者甚至會等廠商完成修補、公告新版後才公開，目的不是讓廠商難看，而是讓正在使用舊版本的人知道：這個問題真的存在，該更新了。

不過公告寫「有一個漏洞」還不夠。使用者會想知道它到底是 XSS、SQL Injection、Path Traversal，還是最後可以造成 RCE。這幾個詞平常都會被叫做「漏洞類型」，但真的要對應 CWE 時，麻煩就來了。

XSS、SQL Injection 與 Path Traversal 比較像問題怎麼發生；RCE 則比較像攻擊成功後造成的結果。把四個詞擺在一起，剛好可以看出選 CWE 時最常踩到的坑。

## XSS：不要只盯著 script 標籤

XSS 常對應 `CWE-79: Improper Neutralization of Input During Web Page Generation`。重點不是測試內容裡有沒有 script 標籤，而是外部可控資料進入網頁輸出時，沒有依所在 context 做正確處理，最後能在其他使用者的瀏覽器中執行非預期內容。

同一段輸入放在 HTML body、attribute、JavaScript 字串或 URL，所需的處理方式都不同。因此「系統有做 HTML escape」不一定能回答所有 XSS 問題，還要看資料最後落在哪個 context。

如果輸入只會回顯給攻擊者自己，且沒有跨越信任邊界，也不能看到 alert 就立刻下結論。真正要確認的是誰控制輸入、誰載入輸出，以及執行後取得了哪個 origin 下的能力。

## SQL Injection：問題在查詢結構被改變

SQL Injection 最常對應 `CWE-89`。它不是單純「輸入含有單引號」，而是外部輸入被拼進 SQL 指令，使攻擊者能改變原本的查詢語意。

例如，程式直接把使用者提供的名稱接到查詢字串後面，而不是把它當成獨立參數，輸入內容就可能從原本的「資料」變成查詢結構的一部分。

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

## 當然還可以分得更細

前面提到 Path Traversal 常對應 `CWE-22`，但這其實還能再往下分。`CWE-22` 比較像上層的通稱，底下還有兩個更具體的項目：

- `CWE-23: Relative Path Traversal`：攻擊者利用相對路徑離開原本允許的目錄，常見線索就是 `../` 這類往上一層走的表示方式。
- `CWE-36: Absolute Path Traversal`：程式接受了攻擊者提供的完整路徑，導致檔案操作直接指向原本限制範圍以外的位置。

簡單講，一個是「從目前的位置一路走出去」，另一個是「直接指定要去哪裡」。兩者最後都可能讀取或修改不該碰到的檔案，但資料走法不太一樣。

所以報告如果已經清楚證明使用相對路徑繞出目錄，可以選 `CWE-23`；如果問題是可直接指定完整路徑，則可以選 `CWE-36`。但手上的資料如果只能確認有 Path Traversal，還分不出是哪一種，留在 `CWE-22` 反而比較誠實。CWE 不是選得越細越厲害，而是要細到證據撐得住的位置。

## 用一條資料流來判斷

遇到名稱不確定時，可以追四個位置：input 從哪裡進來、途中經過哪些轉換、在哪個安全檢查失敗、最後進入哪個敏感 sink。

輸入進到 HTML renderer，可能往 CWE-79 查；進到 SQL parser，可能是 CWE-89；進到檔案系統 path resolver，可能是 CWE-22 或 CWE-73；進到 shell，則可能是 CWE-78。

所以分類不是看到關鍵字就連連看。明天會繼續往根因走：為什麼只寫「任意檔案讀取」或「RCE」，仍然可能只停在表面現象。

## 參考資料

- CWE-79: https://cwe.mitre.org/data/definitions/79.html
- CWE-89: https://cwe.mitre.org/data/definitions/89.html
- CWE-22: https://cwe.mitre.org/data/definitions/22.html
- CWE-23: https://cwe.mitre.org/data/definitions/23.html
- CWE-36: https://cwe.mitre.org/data/definitions/36.html
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
- CWE Root Cause Mapping: https://cwe.mitre.org/documents/cwe_usage/guidance.html
- CVE CNA Operational Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
