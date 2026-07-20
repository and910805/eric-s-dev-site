# Day 14 - 案例練習：一個漏洞如何選 CWE 與 CAPEC

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：弱點分類與攻擊模式

這次不從編號開始，而是先看一段假想報告：

> 某備份管理系統提供已登入管理員下載備份檔的 API。`name` 參數會與備份目錄組合後交給檔案讀取函式。伺服器只移除一次 `../`，但輸入經過 URL decoding 後仍可跳出備份目錄。攻擊者可讀取服務帳號有權存取的設定檔，其中可能含有資料庫連線資訊。

接下來逐步判斷，不急著搜尋「arbitrary file read CWE」。

## 先把已知事實圈出來

入口是下載 API；需要已登入且具有管理權限；可控資料是 `name`；失效控制是路徑處理；敏感操作是檔案讀取；影響範圍受服務帳號權限限制。

這些資訊同時會影響漏洞描述、CVSS 評估和 CWE 選擇。若報告只留下 payload，很多判斷就只能靠猜。

## 第一個候選：CWE-22

問題的核心是解析後的 pathname 沒有被限制在指定目錄，符合 `CWE-22` 的概念。報告也實際證明 traversal，而不只是能控制檔名，因此比僅使用較寬的 `CWE-73: External Control of File Name or Path` 更具體。

如果目前只知道使用者能提供任意檔名，卻沒有證明能越過預期目錄，選 CWE-22 就可能太早。精確度要跟著證據走。

## 要不要再加 Improper Input Validation

「輸入驗證不足」在日常溝通中沒有錯，但它太寬，幾乎可以套在所有 injection 與 traversal。當更具體的 root cause 已知時，優先記錄 CWE-22 通常更有分析價值。

至於「只移除一次 `../`」可以放進技術說明，讓讀者理解修補為什麼失敗；不必為每一個程式動作再塞一個 CWE。

## CAPEC 候選怎麼核對

`CAPEC-139: Relative Path Traversal` 的前置條件與流程符合這個案例：應用程式接受路徑相關輸入，攻擊者以相對路徑序列逃離限制位置，存取其他檔案。

不過，CAPEC 仍是補充。若最終 CVE Record 的資料模型或發布方流程沒有 CAPEC 欄位，並不影響 CWE-22 與描述本身成立。

## 描述可以怎麼寫

可以整理成：

> 某備份管理系統的 A 至 B 版本在下載備份檔時，未將 URL decoding 後的路徑限制於備份目錄。具有管理權限的遠端攻擊者可透過特製的 `name` 參數，讀取服務帳號有權存取的任意檔案，可能導致敏感設定資訊外洩。

這段話沒有寫「讀取整台主機所有檔案」，也沒有把資料庫憑證視為必然存在。它區分了已證明的能力與可能後果。

## 換一個細節，答案就可能不同

若路徑始終在備份目錄內，但一般帳號可以下載別人的備份，根因更可能是 authorization 或 ownership check，而不是 traversal。若 API 會把路徑交給 shell 解壓縮，且可插入命令，則要重新檢查 command injection。

漏洞分類不是替結果找一個相似名稱，而是找出哪個安全控制真正失效。這個習慣建立後，下一週看 CVSS 也會輕鬆一些，因為評分同樣依賴具體攻擊條件，而不是漏洞名稱。

## 參考資料

- CWE-22: https://cwe.mitre.org/data/definitions/22.html
- CWE-73: https://cwe.mitre.org/data/definitions/73.html
- CAPEC-139: https://capec.mitre.org/data/definitions/139.html
- CWE Root Cause Mapping Guidance: https://cwe.mitre.org/documents/cwe_usage/guidance.html
