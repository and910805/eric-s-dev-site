# Day 25 - 漏洞類型整理：Injection、Memory Corruption、Auth Bypass、DoS

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：EPSS、風險排序與 CNA 實務

漏洞類型名稱常同時混著根因、利用方法與結果。今天挑四個經常出現在公告裡的詞，重點不是背定義，而是知道看到名稱後還要追問什麼。

## Injection：資料被當成指令或語法

Injection 的共同概念，是不受信任資料進入 interpreter 或 parser 後，改變了原本預期的指令結構。SQL Injection、OS Command Injection、Code Injection、LDAP Injection 都屬於這個家族，但 sink、權限與修補方式不同。

報告只寫「存在 injection」還不夠。要補上可控輸入、進入哪種語法、缺少什麼 neutralization 或參數化，以及成功後可以讀取、修改或執行到什麼程度。

## Memory Corruption：記憶體狀態遭到破壞

Out-of-bounds Read／Write、Use After Free、Buffer Overflow 等問題可能造成 crash、資訊洩漏或程式碼執行。Memory Corruption 是一個很大的結果家族，不應看到 crash 就直接宣稱 RCE。

評估時會關心可控程度、受影響記憶體區域、保護機制、觸發穩定度與程序權限。只有 AddressSanitizer 報告時，可以準確描述觀察到的錯誤，不必替尚未證明的 exploitability 補上戲劇性結論。

## Authentication Bypass：跳過身分驗證

Auth Bypass 表示攻擊者能繞過原本用來確認身分的控制。原因可能是邏輯條件錯誤、token 驗證缺失、預設憑證、簽章驗證問題或路由保護不一致。

它和 Authorization 問題不同。前者回答「你是誰」的驗證失效；後者則是身分已知，但系統錯誤允許你操作不屬於你的資源。一般使用者修改另一位使用者的資料，通常更接近授權問題，不應全部叫 auth bypass。

## Denial of Service：可用性受到影響

DoS 可以來自無限迴圈、資源耗盡、未處理例外、演算法複雜度或網路放大。要描述的是攻擊成本與服務損失：單一 request 能否觸發、服務會自動恢復嗎、只影響一個 worker 還是整個節點、能否持續重複。

「程式崩潰」是重要證據，但不一定等於 A:H。若程序立即由 supervisor 拉起，且只有單次請求受影響，和需要人工重建資料、長時間無法提供服務的情況不同。

## 類型不能代替完整句子

同一個漏洞可能有一條鏈：未驗證攻擊者透過 injection 執行命令，進一步讀取設定並使服務中斷。分類時要找主要 weakness；描述時則交代入口、條件與可達影響。

好的標題可以簡短，正文不能只靠標籤。與其寫「Critical Auth Bypass RCE」，不如說明哪個驗證步驟可被繞過、之後可呼叫哪個管理功能，以及命令以何種權限執行。讀者才能判斷修補與風險。

## 參考資料

- CWE-74 Injection: https://cwe.mitre.org/data/definitions/74.html
- CWE-119 Memory Buffer Operations: https://cwe.mitre.org/data/definitions/119.html
- CWE-288 Authentication Bypass: https://cwe.mitre.org/data/definitions/288.html
- CWE-400 Uncontrolled Resource Consumption: https://cwe.mitre.org/data/definitions/400.html
