# Day 11 - CAPEC 是什麼？它和 CWE 有什麼不同

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：弱點分類與攻擊模式

CWE 在問「系統哪裡出了問題」，CAPEC 則把視角轉向攻擊者：「他通常怎麼利用這類問題？」

兩者會互相連結，但不是同一套編號換個名字。

## CAPEC 描述 Attack Pattern

CAPEC 全名是 Common Attack Pattern Enumeration and Classification。它是一份公開的攻擊模式目錄，用來整理攻擊者利用已知 weakness 時常見的做法、前置條件、執行流程與緩解方向。

例如：

- `CAPEC-66`：SQL Injection
- `CAPEC-63`：Cross-Site Scripting
- `CAPEC-100`：Overflow Buffers
- `CAPEC-139`：Relative Path Traversal

名稱和常見漏洞類型很接近，閱讀角度卻不同。CWE-89 說明「SQL 指令中沒有正確中和特殊元素」這個 weakness；CAPEC-66 關心攻擊者如何構造輸入、操弄 SQL query，最後讀取或修改資料。

## 同一個廚房，兩種調查方式

如果廚房的瓦斯管線接錯，CWE 比較像記錄設計或施工缺陷；CAPEC 則像整理有人會如何利用這個缺陷製造火災，以及過程中需要哪些條件。

前者適合開發、修補與根因分析，後者適合 threat modeling、攻擊情境設計與防禦驗證。

## CAPEC 裡通常有什麼

一筆 attack pattern 不只有名稱。依條目而異，可能包含 abstraction、description、likelihood、severity、prerequisites、skills required、resources required、execution flow、consequences、mitigations，以及與 CWE 或其他 CAPEC 的關係。

其中 execution flow 特別有用。它可能把攻擊拆成 Explore、Experiment、Exploit 等階段，讓讀者看到攻擊者不是突然送出完美 payload，而是先找入口、測試行為，再完成利用。

## CAPEC 不是 ATT&CK 的替代品

CAPEC 與 MITRE ATT&CK 都描述 adversary behavior，但使用情境不同。CAPEC 偏向 application security，整理如何利用 cyber-enabled capabilities 中的 weakness；ATT&CK 更偏向企業、行動裝置與 ICS 環境中，攻擊者在作戰生命週期使用的 tactics 與 techniques。

一個 SQL Injection 的利用方法適合 CAPEC；攻擊者取得 foothold 後如何 credential dumping、lateral movement，則更接近 ATT&CK。

## CVE Record 一定要填 CAPEC 嗎

不一定。CVE Record 的核心工作是識別與描述具體漏洞，CWE 常用來表示漏洞類型或原因；CAPEC 則適合在需要補充攻擊情境時使用。沒有 CAPEC，不代表 Record 不完整。

也不要看到 CWE 就機械式挑第一個 related CAPEC。CWE 與 CAPEC 可能是多對多關係，具體漏洞是否真的符合某個攻擊模式，仍要看 prerequisites 與 execution flow。

明天會繼續打開一筆 CAPEC，看看它如何把攻擊者行為拆成可閱讀、可驗證的步驟。

## 參考資料

- About CAPEC: https://capec.mitre.org/about/index.html
- CAPEC List: https://capec.mitre.org/data/index.html
- CAPEC and ATT&CK Comparison: https://capec.mitre.org/about/attack_comparison.html
