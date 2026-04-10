還記得我最早接觸資安的時候嗎？那時常常看到一堆神秘的代號：`T1566`、`T1059`、`T1003`……完全摸不著頭緒，心想這些數字到底在搞什麼鬼？我只聽過`T65K2`（當兵必備知識，哈哈！），結果現在要背的卻是另一套「資安軍規」。

> 會不會真的有人去查T65k2

但等我進公司後，才發現這些代號不是在唬人——**幾乎所有EDR（Endpoint Detection and Response）、SIEM（Security Information and Event Management）的事件記錄，都會用這些編號來描述攻擊手法**。如果你看不懂，就等於丟掉一半的情報，藍隊工作瞬間變得像霧裡看花。

---

## MITRE ATT&CK 到底是什麼？

![/blog-assets/ithome-2025/20171891Mo04h3xS5n.png](/blog-assets/ithome-2025/20171891Mo04h3xS5n.png)

[MITRE ATT&CK（Adversarial Tactics, Techniques, and Common Knowledge）](https://attack.mitre.org/)其實是一個**全球性的攻擊手法知識庫**，它把駭客的TTPs（Tactics戰術、Techniques技術、Procedures程序）整理成一張詳細的「攻擊地圖」。這不是枯燥的理論，而是基於真實威脅情報（如APT團體的案例）建構的框架，讓資安從業者能快速理解和應對攻擊。

- **戰術 (Tactics)**：駭客的目標，例如「初始存取（Initial Access）」、「橫向移動（Lateral Movement）」、「資料外洩（Exfiltration）」或「防禦規避（Defense Evasion）」。
- **技術 (Techniques)**：達成目標的具體方法，例如釣魚郵件（Phishing）、Pass-the-Hash憑證竊取，或惡意巨集（Malicious Macro）。
- **程序 (Procedures)**：更細部的實作細節，例如用`Mimikatz`工具來執行憑證傾印（Credential Dumping）。

舉例來說，`T1566` 就是 **Phishing（釣魚攻擊）**，這是駭客最愛的「開門紅」——透過偽造郵件或連結誘騙受害者點擊，進而植入惡意軟體。`T1059` 則是 **Command and Scripting Interpreter**，常見於濫用PowerShell執行惡意指令；`T1003` 是 **OS Credential Dumping**，專門偷系統憑證，讓駭客能假裝成合法用戶。

這些編號就像資安界的「通用語言」，無論是SIEM/EDR，都會在警報中標註它們，方便你一目了然：「哦，這是釣魚攻擊，我該檢查郵件伺服器！」

不過，知道這些代號可以做什麼呢? 明天我已經想好要寫啥

> 為什麼藍隊一定要學 MITRE ATT&CK？

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10379225
