# Day 18 - AV、AC 與 AT：攻擊距離和攻擊難度怎麼判斷

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVSS 評分核心

「這個漏洞很難利用，所以 AC 應該是 High。」

問題是，難在哪裡？需要高超的逆向能力、payload 要調很久、只能在同網段利用，或必須等服務碰巧進入特殊狀態，對 CVSS 而言是不同事情。

## Attack Vector 看的是利用位置

在 v3.1 與 v4.0 中，AV 都是在描述攻擊者必須從哪裡送出利用：

- Network：可經由網路協定跨越一個或多個網路邊界利用
- Adjacent：攻擊者必須位於邏輯或實體相鄰網路
- Local：需要本機存取能力，或讓本機使用者執行惡意內容
- Physical：必須實際接觸或操作設備

「服務只綁在 localhost」不一定讓 AV 直接變 Local。要看漏洞本身可利用的介面與合理部署；特定組織的 firewall 或網路隔離，通常屬於環境控制。反過來，透過電子郵件寄送惡意檔案，也不會只因郵件走網路就必然是 AV:N，還要看漏洞實際在何處被觸發。

## v3.1 的 Attack Complexity

v3.1 的 AC:L 表示除了攻擊者可控制的條件外，不需要額外特殊狀態；AC:H 則表示成功利用依賴攻擊者無法控制的條件，或需要先完成額外準備以克服那些條件。

官方 User Guide 特別提醒，社交工程本身與使用者互動應由 UI 表示，不要重複灌進 AC。需要寫一段複雜 exploit 也不等同 AC:H，因為評的是利用條件，不是研究成本。

## v4.0 為什麼多了 Attack Requirements

v4.0 將 `AT` 拆出來，描述 vulnerable system 中是否必須存在特定部署或執行條件。典型例子包括必須取得中間人位置，或利用成功依賴競態條件。

這時可分別表達：攻擊需要特殊系統條件（AT:P），以及攻擊者是否還必須採取可觀察、可重複的防禦繞過動作（AC:H）。兩者不再擠在同一格。

v4.0 的 AT 值為 None 或 Present。Present 不代表漏洞幾乎無法利用，而是承認利用並非在所有狀態下都成立。

## 三個容易混淆的例子

需要同一 Wi-Fi 網段才能送封包，首先影響的是 AV，不能只因距離受限就填 AC:H。

需要受害者打開惡意文件，主要是 UI；文件內容製作困難，不足以單獨證明 AC:H。

必須在極短時間窗競爭檔案操作，v3.1 可能反映在 AC:H；到了 v4.0，這類執行條件更適合檢查 AT:P。

## 寫下理由，比背答案重要

評分時可以替每個非直覺選項留一句理由，例如：「利用介面僅可從同一廣播網域存取，因此 AV:A」或「成功利用依賴非決定性的 race condition，因此 v4.0 AT:P」。

這些句子能讓另一位評分者重現判斷。若理由只剩「因為很難」，通常表示還沒把困難拆到正確指標。

## 參考資料

- CVSS v3.1 Specification, Base Metrics: https://www.first.org/cvss/v3.1/specification-document
- CVSS v3.1 User Guide: https://www.first.org/cvss/v3-1/user-guide
- CVSS v4.0 Specification, Base Metrics: https://www.first.org/cvss/v4-0/specification-document
