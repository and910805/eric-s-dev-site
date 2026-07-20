# Day 10 - 不要只寫表面現象：CWE 與漏洞根因

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：弱點分類與攻擊模式

「攻擊者可以讀取任意檔案。」

這句話很有價值，因為它說明了 impact；但拿來選 CWE，資訊仍然不夠。造成任意檔案讀取的原因可能是 Path Traversal、授權檢查缺失、符號連結處理錯誤，也可能是原本不該公開的 debug endpoint。

結果相同，不代表根因相同。

## Root Cause Mapping 在找什麼

CWE 將 Root Cause Mapping 描述為辨識漏洞底層成因，並把 CVE Record、bug ticket 或漏洞報告與適當 CWE 關聯。目的不是替漏洞貼一個好看的標籤，而是找出哪一類設計或實作問題應該被改善。

如果十筆漏洞都被標成「Information Disclosure」，只能知道資料外洩很多；如果能進一步看出其中六筆來自 missing authorization，開發流程才知道該把資源放在哪裡。

## 從 symptom 往前追

可以把分析拆成三層：

```text
結果：讀到其他使用者的檔案
失效點：取檔前沒有驗證 resource ownership
根因：Authorization Missing / Incorrect Authorization
```

另一個案例也可能有相同結果：

```text
結果：讀到系統任意檔案
失效點：外部輸入可用 ../ 跳出允許目錄
根因：Path Traversal
```

兩者都可以被描述成 arbitrary file read，修補位置卻完全不同。一個要補授權決策，一個要處理路徑解析與目錄限制。

## 修補內容常比 payload 更接近根因

PoC 告訴我們怎麼觸發問題，patch 則常透露真正少了哪個控制。

如果修補加入 prepared statement，可能支持 SQL Injection；若只是把錯誤訊息隱藏起來，則未必修掉注入。若 patch 加上 ownership check，比起看到 URL 裡有一個可改的 ID，更能支持 authorization 類 CWE。

當然，patch 也可能同時做重構或防禦加固，不能看到新增一個 validation 就直接決定根因。仍要把變更和可利用路徑對起來。

## 別選到不能拿來 mapping 的 CWE

CWE 條目會標示 Vulnerability Mapping 使用建議：`ALLOWED`、`ALLOWED with careful review`、`DISCOURAGED` 或 `PROHIBITED`。有些條目太抽象、是 Category，或不適合直接對應具體漏洞。

例如很寬的輸入驗證分類看起來什麼都能套，但可能遮住更具體的 injection、path traversal 或數值處理錯誤。官方建議能準確選 Base 或 Variant 時，就不要只停在過度抽象的 Class；若證據真的不足，選可允許 mapping 的較高層級，反而比猜一個錯誤細項可靠。

## 一條 weakness chain 可能不只一個節點

有些漏洞不是單一錯誤。外部輸入缺少驗證，進入不安全反序列化，最後載入攻擊者控制的 class，可能形成一條 weakness chain。

這時可以記錄多個相關 CWE，但要分清楚哪個是 primary root cause、哪個是後續 consequence。把每個看得到的現象全部塞進去，並不會自動變得更精確。

## 不知道時，保留不確定性

只有黑箱行為時，可以寫清楚「確認的 impact」與「推測的 root cause」。例如已確認未授權讀取，但無法判斷是 routing、ACL 還是 ownership check 出錯，就不要假裝掌握內部實作。

好的分類不是最細，而是剛好落在證據能支持的位置。明天開始看 CAPEC，從「系統為什麼會弱」轉到「攻擊者通常怎麼利用這些弱點」。

## 參考資料

- CWE Root Cause Mapping Guidance: https://cwe.mitre.org/documents/cwe_usage/guidance.html
- CWE Root Cause Mapping Quick Tips: https://cwe.mitre.org/documents/cwe_usage/quick_tips.html
- CWE FAQ: https://cwe.mitre.org/about/faq.html
