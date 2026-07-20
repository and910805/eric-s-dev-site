# Day 15 - CVSS 是什麼？先把嚴重度與風險分開

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVSS 評分核心

資安公告最醒目的位置，常是一個 9.8 或紅色 Critical。看到這個數字，人很自然會問：「那是不是應該立刻修？」

答案通常是「很可能要優先看」，但只靠 CVSS 還不能完成風險排序。CVSS 衡量的是漏洞的技術嚴重度，不知道你的系統是否對外、資產是否存在、資料有多重要，也不知道漏洞目前是否正被大量利用。

## CVSS 想解決的問題

Common Vulnerability Scoring System 提供一套共同語言，讓不同人可以用相同指標描述利用條件與技術影響，並產生 0.0 到 10.0 的分數。

它比「這個漏洞很嚴重」更可驗證。看到向量後，可以知道評分者認為攻擊是否需要網路可達、需要哪些權限、是否要求使用者操作，以及成功後會破壞哪些安全屬性。

分數不是標籤的替代品，向量才保留了判斷內容。兩個漏洞都得到 8.8，攻擊條件和影響可能完全不同。

## Base：漏洞本身的固有特徵

Base Metrics 描述在合理最壞情境下，跨時間與使用環境相對穩定的特徵。CVSS v3.1 會看 Attack Vector、Attack Complexity、Privileges Required、User Interaction、Scope，以及 Confidentiality、Integrity、Availability 影響。

Base Score 很適合由產品供應商或漏洞發布方提供，因為它不應依某一家使用者的網路架構而改變。某個管理介面在你的環境只開放內網，不代表漏洞的 Base Attack Vector 就一定從 Network 改成 Adjacent 或 Local；部署控制通常應放在環境風險評估處理。

## Temporal／Threat：隨時間改變的資訊

CVSS v3.1 稱為 Temporal Metrics，包含 exploit code maturity、remediation level 與 report confidence。CVSS v4.0 將這組概念調整為 Threat Metrics，聚焦 Exploit Maturity。

漏洞剛公開時可能沒有可用 exploit，幾週後卻出現可靠工具；正式修補也可能從無到有。這些資訊會變，因此不適合永久寫死成漏洞本身的屬性。

## Environmental：同一漏洞在不同地方不一樣

Environmental Metrics 讓使用者依自己的資產重要性與部署情境調整。例如同一個資訊洩漏，在公開測試機與存放客戶資料的核心系統上，組織風險不會相同。

這一組通常應由資產擁有者或防守方評估。漏洞發布方很難知道每個使用者的網路隔離、補償控制與業務需求。

## 嚴重度不是風險公式

實際風險至少還會碰到這些問題：環境裡是否有受影響版本、攻擊面是否可達、是否已有利用活動、資產價值多高、現有控制能否阻斷，以及修補本身會不會造成營運衝擊。

因此 CVSS 適合當成共同基準，不適合單獨扮演修補佇列。後面談 EPSS 與 KEV 時，會再把「技術影響」和「被利用的可能性／事實」接起來。

先記住一句就好：不要只抄分數，也要讀向量；不要把嚴重度分數，直接當成完整風險答案。

## 參考資料

- CVSS v3.1 Specification: https://www.first.org/cvss/v3.1/specification-document
- CVSS v3.1 User Guide: https://www.first.org/cvss/v3-1/user-guide
- CVSS v4.0 Specification: https://www.first.org/cvss/v4-0/specification-document
