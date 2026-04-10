> 接續昨天的內容

對藍隊（防禦方）來說，MITRE ATT&CK 不是什麼「加分題」的選修，而是**必修的攻防劇本**。 它不像教科書那樣生硬，而是像一部懸疑大片，有完整的故事線，帶著你從駭客的角度一步步推進：

1. **初始存取（Initial Access）** 駭客怎麼敲門？（例如 `T1566 - Phishing`、`T1190 - Exploit Public-Facing Application`） → 藍隊該做的：郵件過濾、Web 應用防火牆。
2. **執行與持久化（Execution & Persistence）** 進來後怎麼安家？（`T1059 - PowerShell`、`T1547 - Boot or Logon Autostart Execution`） → 藍隊該做的：監控異常腳本、審查登錄項。
3. **權限提升與橫向移動（Privilege Escalation & Lateral Movement）** 怎麼爬到更高層？（`T1068 - Exploitation for Privilege Escalation`、`T1021 - Remote Services`） → 藍隊該做的：最小權限原則、網路分割。
4. **收集與外洩（Collection & Exfiltration）** 偷了什麼？怎麼運出去？（`T1005 - Data from Local System`、`T1041 - Exfiltration Over C2 Channel`） → 藍隊該做的：部署 DLP、監控異常流量。
5. **防禦規避與影響（Defense Evasion & Impact）** 怎麼擦屁股、留下傷害？（`T1070 - Indicator Removal`、`T1490 - Inhibit System Recovery`） → 藍隊該做的：審核日誌、強化備份。

掌握 ATT&CK，就不只是「看懂 SIEM」而已，更能**主動映射組織的防禦覆蓋率（Coverage）**，找出真正的缺口。

---

## 回憶：初探 APT

回想起之前，偶然接觸到APT，： 開始研究 **APT29（Cozy Bear，俄羅斯 APT 團體）** 的攻擊手法，並試著模擬。

當時的我對 MITRE ATT&CK 幾乎是零基礎，打開矩陣只覺得眼花撩亂，滿滿的 TTPs 看得頭昏腦脹。很多地方不懂，甚至有誤解，但也正是這樣的過程，讓我第一次真正「走進駭客劇本」。

我後來建了一個 GitHub 專案（[and910805/APT29](https://github.com/and910805/APT29)），把攻擊步驟記錄下來。專案基於 MITRE ATT&CK 的 Enterprise Matrix，模擬了一條完整流程：從初始存取到資料外洩，全程大約 20 步，涵蓋 Windows Server 2019 和 Windows 10 的環境。

現在回頭看，專案其實還能更好 ：像是加個 README 說明背景、多放幾張截圖，或更新近年的 APT29 攻擊技術。 但對我來說，這就是一個重要的里程碑。

畢竟這是我第一次嘗試，難免有錯誤或理解不到位，但正是這種跌跌撞撞的經驗，成為我後來工作上的基礎。 如果你有興趣考古或擴充，歡迎 fork 一起玩，也請多多指教！

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10379244
