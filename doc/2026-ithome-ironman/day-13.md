# Day 13 - CVE、CWE、CAPEC 三者到底怎麼接在一起

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：弱點分類與攻擊模式

看到一筆漏洞時，常會同時遇到 CVE、CWE 與 CAPEC。它們不是三套互相競爭的分類，而是在回答三個不同問題：發生了哪一件事、系統弱在哪裡，以及攻擊者可能怎麼利用。

先用一個假想案例串起來：某套文件系統的下載 API 接受外部路徑，解析後沒有確認目標仍位於附件目錄。未登入的遠端攻擊者可以用 `../` 讀取程序有權存取的設定檔。

## CVE：這一個具體漏洞是什麼

CVE Record 負責識別這個產品中的具體問題。它需要說清楚受影響產品與版本、漏洞條件、影響、參考資料，以及由誰發布或維護這筆紀錄。

CVE ID 不代表漏洞類型，也不直接代表嚴重程度。它是一個穩定識別符，讓公告、修補說明、掃描器和資產清單能指向同一件事。

## CWE：程式或設計弱在哪裡

在這個案例中，若證據支持路徑可跳出限制目錄，可能對應 `CWE-22: Improper Limitation of a Pathname to a Restricted Directory`。

CWE 把具體產品拿掉，保留可重用的弱點概念。其他語言、框架或產品也可能犯相同錯誤，因此可用來做根因統計、安全開發規範與測試設計。

## CAPEC：攻擊者如何把弱點變成結果

若要描述利用手法，`CAPEC-139: Relative Path Traversal` 會更接近攻擊者視角。它會談到尋找可控路徑、嘗試 traversal sequence、推測目錄結構，最後存取限制範圍外的資源。

CAPEC 不負責證明某個產品真的有漏洞。它提供的是通用攻擊模式，必須再和個案的入口、前置條件及行為相互驗證。

## 它們不是一對一關係

一筆 CVE 可能牽涉多個 CWE。例如檔案上傳缺少副檔名限制，又因伺服器設定而可直接執行，可能存在一條由 upload weakness 通往 code execution 的 chain。

同一個 CWE 也可能被多種攻擊模式利用；同一個 CAPEC 則可能連到多個相關 CWE。這些關聯是導覽，不是看到編號後就能自動完成 mapping 的公式。

## 實務上先後順序怎麼排

較穩定的順序是先建立具體事實：受影響版本、入口、權限、使用者互動、失效的控制與可觀察影響。接著才選證據支持的 CWE；需要補充威脅情境時，再查相關 CAPEC 是否吻合。

反過來先挑一個熱門攻擊名稱，再把案例硬塞進去，容易把結果誤當根因。例如「最後能 RCE」並不能告訴我們是 command injection、unsafe deserialization，還是 memory corruption。

一段好的通報描述，即使讀者沒點開 CWE 或 CAPEC，也應該能理解漏洞。分類編號是結構化補充，不是拿來代替事實敘述。

## 參考資料

- CVE Program: https://www.cve.org/
- CWE About: https://cwe.mitre.org/about/index.html
- CAPEC About: https://capec.mitre.org/about/index.html
- CWE/CAPEC Graphs: https://capec.mitre.org/data/graphs/3000.html
