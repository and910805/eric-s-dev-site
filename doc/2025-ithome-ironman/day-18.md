在資訊安全裡，很多人把心力放在「防止駭客入侵」，卻忘了一件更現實的事：

> **系統總有一天會壞，資料總有一天會丟。**

不論是硬碟故障、人為誤刪、勒索病毒，還是天災火災，最後能不能「活下去」，靠的就是備份。 試想一下你 DB 哪天突然壞掉，沒備份一年的資料都沒了，你看你會不會被炒魷魚。

## ![https://ithelp.ithome.com.tw/upload/images/20250904/20171891AL8on83kKP.png](https://ithelp.ithome.com.tw/upload/images/20250904/20171891AL8on83kKP.png)

## ISO 27001 與法規怎麼要求？

ISO/IEC 27001 明確規範：企業必須建立 **備份策略**，並確保能在災難後復原。 在金融業、醫療業，監管法規甚至會寫得更細：

- **多久內系統要能恢復運作？**
- **多久內要能還原到最新資料？**

這裡就會牽涉到兩個常聽到的名詞：

---

## 什麼是 RTO / RPO？

> 撰寫 ISMS 文件時，這兩個字一定會出現。 我第一次看到時還愣了一下：「這是什麼？RPG 嗎？」

- **RTO（Recovery Time Objective，復原時間目標）** → 系統掛掉後，要在多久時間內恢復？ 例如：銀行核心系統 RTO = 4 小時，代表不論發生什麼事，都得在 4 小時內重新上線。
- **RPO（Recovery Point Objective，復原點目標）** → 能接受多少資料遺失？ 例如：RPO = 15 分鐘，表示即使資料庫炸掉，最多只能回溯到 15 分鐘前的狀態。

![https://ithelp.ithome.com.tw/upload/images/20250904/20171891oGuXFW1F4Y.jpg](https://ithelp.ithome.com.tw/upload/images/20250904/20171891oGuXFW1F4Y.jpg) 圖片為[Manish Sharma](https://www.linkedin.com/pulse/design-reliability-driven-rto-rpo-manish-sharma)

| 名詞 | 全名 | 問題核心 | 舉例 |
| --- | --- | --- | --- |
| **RTO** | Recovery Time Objective | 多久能把系統救回來？ | 4 小時內恢復服務 |
| **RPO** | Recovery Point Objective | 能接受多少資料遺失？ | 最多回溯 15 分鐘前 |

這兩個數字，往往比「有沒有備份」更重要，因為它決定了業務能不能繼續運作。

---

## 為什麼要做年度災難復原演練？

很多公司都有備份，但實際出事時才發現：

- 備份檔雖然在，但根本壞掉打不開。
- 還原流程太複雜，沒人會操作。
- 還原速度太慢，根本達不到 RTO。

這就是為什麼 ISO 和法規會要求： **至少每年要做一次災難復原演練**，並且留存紀錄，確保備份不是紙上談兵。

---

備份不是為了應付稽核，而是為了公司在最壞情況下，還能繼續活下去。

> **沒有測過的備份 = 沒有備份。**

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10377454
