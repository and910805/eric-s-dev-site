# Day 19 - PR 與 UI：到底是誰必須先做什麼

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVSS 評分核心

一份報告寫著：「攻擊者登入後上傳檔案，管理員查看後就會執行 JavaScript。」

這短短一句至少包含兩種前置條件：攻擊者需要登入，以及另一位使用者需要查看內容。前者由 Privileges Required 處理，後者屬於 User Interaction。

## PR 看的是攻擊前已有的權限

`Privileges Required` 有 None、Low、High。判斷時間點是在漏洞利用開始之前，而不是成功之後。

攻擊者透過漏洞取得管理員權限，不能因此填 PR:H；若觸發入口完全不需登入，仍可能是 PR:N。相反地，只有系統管理員能進入的設定頁面存在 command injection，通常要考慮 PR:H，即使成功後能執行更高權限命令。

Low 與 High 的界線要看攻擊前權限能控制的範圍。一般使用者只能操作自己擁有的資源，通常較接近 Low；已能控制整個 vulnerable component 的設定或使用者，則可能是 High。不要只用角色名稱判斷，名為 operator 的帳號在不同產品可能權力差很多。

## UI 要找攻擊者以外的人

`User Interaction` 關心的是另一位使用者是否必須參與。受害者開啟文件、瀏覽頁面、點擊連結或匯入設定，都可能構成 UI。

攻擊者自己登入、自己按下送出按鈕，不算 UI:R；那是利用步驟的一部分，應由 PR 或其他攻擊條件反映。否則許多需要 HTTP request 的漏洞都會被誤判成需要使用者互動。

## Stored XSS 是很好的練習題

假設一般帳號可在留言欄儲存惡意內容，管理員檢視後觸發 XSS。Base 評估通常需要分別問：攻擊者建立留言是否要帳號？如果要，PR 可能是 Low；管理員是否必須載入該頁？如果是，UI 不是 None。

至於攻擊成功後能以管理員身分操作哪些功能，會影響後續的 C、I、A，而不是回頭改變 PR。

## v4.0 把 UI 拆得更細

v3.1 只有 None 與 Required。v4.0 則有 None、Passive、Active。

Passive 是使用者在正常操作中，無意間讓漏洞可被利用，例如瀏覽受到污染的頁面。Active 要求使用者採取較明確的動作來突破保護，例如忽略安全警告、開啟受保護內容或執行特定步驟。

區分時不要只看「有沒有點擊」。一次正常導覽點擊可能仍接近 Passive；關鍵是使用者是否必須主動顛覆保護機制，才能讓攻擊成功。

## 不要用社交工程成功率改寫指標

「管理員通常不會點」不是 UI 的值；「釣魚信做得很好」也不會把 UI 變成 None。CVSS 描述必要條件，不估算某一群使用者受騙的統計機率。

最實用的檢查方式，是把攻擊者和受害者的動作分兩行寫出來。誰需要什麼權限、誰必須做哪一步，通常就清楚了。

## 參考資料

- CVSS v3.1 Specification: https://www.first.org/cvss/v3.1/specification-document
- CVSS v3.1 User Guide, Privileges Required: https://www.first.org/cvss/v3-1/user-guide
- CVSS v4.0 Specification: https://www.first.org/cvss/v4-0/specification-document
