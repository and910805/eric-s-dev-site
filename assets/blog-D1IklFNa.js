import{c as t}from"./index-BT5TUhd5.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=t("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]),o=`---
title: CEH v13 筆記（持續更新中）

---





[TOC]

# CEH v13 筆記（無限停更中:D）
## 學習資源
https://ceh.cagy.org/

https://hackmd.io/@7ZcmfE2ETz-ntel2Ma6uTg/rJvhYym62

[freecram](https://www.freecram.com/ECCouncil-certification/312-50v13-exam-questions.html#) 可以免費看，但下載下來要錢，一次只能看五題就要輸入驗證碼


## 01 - Introduction to Ethical Hacking

### 常見資安法規（考試至少會出一題）
- **ISO/IEC 27001**：資訊安全管理系統標準
- **PCI DSS**：支付卡產業資料安全標準（常考！）
- **HIPAA**：美國醫療資訊保護法案
- **SOX**：美國薩班斯-奧克斯利法案，針對企業財報誠信
- **FISMA**：美國聯邦資訊安全管理法
- **GDPR**：歐盟通用資料保護規則
- **DPA**：英國資料保護法案

---
### 道德駭客是什麼？
- 經過授權進行系統弱點測試的駭客
- 模擬攻擊以強化系統防禦

### 為什麼需要道德駭客？
- 減少系統被惡意攻擊的風險
- 提升資訊安全意識與防護能力

### Ethical Hacking 的範圍與限制
- 僅限授權範圍內的測試
- 不得造成實質損害或中斷服務

### 技術與非技術能力
- 技術：網路、系統、程式、滲透測試
- 非技術：溝通、邏輯思維、法律意識

### AI-Driven Ethical Hacking
- AI 輔助漏洞掃描、模式分析
- 自動化報告與弱點偵測

### AI 如何幫助道德駭客？
- 減少人力負擔、快速分析大量資料
- 偵測複雜模式與新型攻擊手法

### AI 是否會取代道德駭客？
- AI 是輔助，不具備人類判斷與創造力
- 結合人機合作才能達到最佳成效

### ChatGPT 相關工具
- 用於生成測試腳本、攻擊模擬
- 撰寫報告與訓練材料

---

## 02 - Footprinting and Reconnaissance

### 情資蒐集分為：
- 主動（Active）：與目標互動，如掃描、Ping、Traceroute
- 被動（Passive）：不與目標互動，如公開資料、DNS 查詢

### 被動情蒐工具：
- GHDB（Google Hacking Database）
- Shodan
- Netcraft、DNSDumpster、Dig、Sublist3r
- Archive.org、Google Alert、EmailTrackerPro

### 情蒐框架與工具：
- Maltego
- Recon-ng
- OSINT Framework
- WinHTTrack

### MITRE ATT&CK Framework
- 紀錄攻擊者的行為、技術與手法（TTPs）
- 依照不同階段分類（Initial Access、Execution、Persistence 等）

### Diamond Model of Intrusion Analysis
- 四個要素：Adversary（攻擊者）、Infrastructure（基礎設施）、Capability（能力）、Victim（受害者）
- 強調事件之間的關聯性與關鍵資源鏈結

### Information Assurance（IA）
- 保證資訊的 CIAAN：Confidentiality、Integrity、Availability、Authentication、Non-repudiation

### Defense in Depth（縱深防禦）
- 多層防禦架構：防火牆、入侵偵測、身分驗證、加密等層層保護

### What is Risk？
- 威脅 × 脆弱性 × 資產價值 = 風險

### Risk Management
- 識別風險、評估風險、緩解風險、監控風險

### Cyber Threat Intelligence（CTI）
- **必考重點！**
- 分類層級：
  - Strategic（戰略層級）：政府政策、長期策略
  - Tactical（戰術層級）：攻擊手法、威脅趨勢
  - Operational（作戰層級）：攻擊計畫、特定目標
  - Technical（技術層級）：IP、Domain、Hash、漏洞
- 時效性：
  - 長期：Strategic、Tactical
  - 短期：Operational、Technical
- 資訊層級分類：
  - High Level（給管理者）
  - Low Level（給技術人員）

---

## 03 - Scanning Networks

### 網路掃描基本概念

網路掃描（Scanning）是駭客入侵前的重要階段，目的是識別目標主機的活動狀態、開放的服務埠、運行的作業系統與可能存在的漏洞。這個階段又可細分為：

- **Port Scanning（埠掃描）**：檢查目標主機哪些 TCP 或 UDP 埠是開啟的。
- **Network Scanning（網路掃描）**：識別活躍主機與其 IP 位址。
- **Vulnerability Scanning（漏洞掃描）**：檢查目標系統是否存在已知漏洞。

### 常見通訊協定

這些協定在掃描過程中經常使用，必須熟悉其用途與特性：

- **TCP（Transmission Control Protocol）**：連線導向、可靠傳輸。
- **UDP（User Datagram Protocol）**：無連線、快速但不保證送達。
- **ICMP**：用於錯誤訊息回報與網路診斷，如 ping、traceroute。
- **ARP**：解析 IP 位址為 MAC 位址。
- **DNS**：網域名稱解析。
- **DHCP**：自動配置 IP 位址。
- **SSDP / UPnP**：設備發現協定。

### TCP 封包標記（Flags）

| Flag | 說明 |
|------|------|
| SYN  | 建立連線請求 |
| ACK  | 對封包做確認回應 |
| FIN  | 結束連線 |
| RST  | 強制中斷連線 |
| PSH  | 要求立即傳送資料 |
| URG  | 緊急資料指示 |

### TCP 三次握手（Three-way Handshake）

| 客戶端 | → | 伺服器 |
|--------|---|--------|
| SYN    |   |        |
|        | ← | SYN+ACK |
| ACK    | → |        |

### OSI 七層模型 vs TCP/IP 模型

#### OSI 模型

| 層級 | 名稱           | 協定範例           |
|------|----------------|--------------------|
| 7    | 應用層         | HTTP, SNMP         |
| 6    | 表示層         | SSL, MIME, ASCII   |
| 5    | 會話層         | NetBIOS, RPC       |
| 4    | 傳輸層         | TCP, UDP           |
| 3    | 網路層         | IP, ICMP           |
| 2    | 資料鏈結層     | ARP, MAC           |
| 1    | 實體層         | Ethernet, Wi-Fi    |

#### TCP/IP 模型

| 層級 | 名稱           | 協定範例           |
|------|----------------|--------------------|
| 4    | 應用層         | HTTP, DNS          |
| 3    | 傳輸層         | TCP, UDP           |
| 2    | 網際層         | IP, ICMP           |
| 1    | 網路存取層     | ARP, MAC           |

### 掃描技術（Nmap 範例）
### Nmap 指令記憶整理 （超實用版）

#### ① 存活探測（Ping Scan 類）

| 指令 | 代表意思 | 怎麼背？ |
|:---|:---|:---|
| \`-sn\` | Ping Scan（不掃 port，只確認活著） | **s = skip port scan** |
| \`-PS\` | TCP SYN Ping | **S = SYN** |
| \`-PA\` | TCP ACK Ping | **A = ACK** |
| \`-PU\` | UDP Ping | **U = UDP** |
| \`-PE\` | ICMP Echo Request | **E = Echo（正常 ICMP Ping）** |
| \`-PP\` | ICMP Timestamp Request | **P = Ping Timestamp** |
| \`-PM\` | ICMP Address Mask Request | **M = Mask** |
| \`-PO\` | IP Protocol Ping | **O = prOtocol** |

✅ **背法：** \`P + 英文字母\` 就是「各種 Ping 類型」

---

#### ② Port 掃描類型（掃描手法）

| 指令 | 代表意思 | 怎麼背？ |
|:---|:---|:---|
| \`-sS\` | SYN Scan（半開掃描，Stealth Scan）| **sS = stealth SYN** |
| \`-sT\` | TCP Connect 掃描（正常 TCP 連線） | **sT = standard TCP** |
| \`-sU\` | UDP Scan | **sU = UDP** |
| \`-sA\` | ACK Scan | **sA = ACK** |
| \`-sN\` | Null Scan（TCP 標誌全關） | **sN = Null (nothing)** |
| \`-sX\` | Xmas Scan（TCP 特定標誌開啟） | **sX = Xmas tree lights** |
| \`-sF\` | FIN Scan（只開 FIN flag） | **sF = FIN** |
| \`-sO\` | IP Protocol 掃描 | **sO = prOtocol** |

✅ **背法：** \`-s\` 開頭的就是「掃 port 手法」，\`s = scan\`

---

### ③ 版本偵測 / 作業系統偵測 / Service 偵測

| 指令 | 代表意思 | 怎麼背？ |
|:---|:---|:---|
| \`-sV\` | 服務版本偵測（Version detection） | **sV = Service Version** |
| \`-O\` | 作業系統偵測（OS detection） | **O = OS** |
| \`-A\` | 強化掃描（包含 OS、版本、腳本、traceroute）| **A = All-in-One** |

✅ **背法：**
- \`-sV\` → 查服務版本  
- \`-O\` → 查作業系統  
- \`-A\` → 一次來全部

---

#### ④ 特別模式 / 其他小技巧

| 指令 | 代表意思 | 怎麼背？ |
|:---|:---|:---|
| \`-F\` | Fast mode（快速掃描，只掃常見 ports） | **F = Fast** |
| \`-T0\` ~ \`-T5\` | Timing Template（調整速度） | **T = Timing** |
| \`-p\` | 指定 Port | **p = port** |
| \`--top-ports 100\` | 掃前 100 個最熱門的 ports | **top-ports = 最夯 ports** |
| \`-v\` | Verbose 模式（詳細輸出） | **v = verbose** |
| \`-vv\` | 更詳細模式 | **vv = very verbose** |
| \`-d\` | Debug 模式 | **d = debug** |

---

### 🔥 整體背誦小技巧

| 流程 | 記法 |
|:---|:---|
| 確認活著？ | \`-sn + P系列（PS, PA, PU, PE...）\` |
| 掃 port？ | \`-sS\`, \`-sT\`, \`-sU\`, \`-sA\`... |
| 查服務版本？ | \`-sV\` |
| 查 OS？ | \`-O\` |
| 全部來？ | \`-A\` |
| 要快？ | \`-F\`, \`-T4\` |

---

### 📦 常見實戰組合（直接拿去抄用）

#### 找存活主機（不掃 port）

\`\`\`bash
nmap -sn -PS22,80,443 192.168.1.0/24

# 1. TCP Connect 掃描（完整連線）
- 使用三次握手完成連線。
- 不需 root 權限。
- 容易被 IDS 偵測。
\`\`\`bash
nmap -sT target.com
\`\`\`


| 作業系統     | TTL  | TCP Window Size |
|--------------|------|-----------------|
| Linux        | 64   | 5840            |
| Windows XP   | 128  | 65535           |
| Windows 2008 | 128  | 8192            |
| FreeBSD      | 64   | 5840            |



### 封包規避技巧（IDS/IPS）

#### - 封包分段（Fragmentation）
\`\`\`bash
nmap -f target.com
\`\`\`

#### - 改變封包長度
\`\`\`bash
nmap --data-length 50 target.com
\`\`\`

#### - 偽裝來源埠（避開防火牆）
\`\`\`bash
nmap --source-port 53 target.com
\`\`\`

#### - 偽造來源 IP（Decoy）
\`\`\`bash
nmap -D 192.168.1.5,192.168.1.6 target.com
\`\`\`

### Proxy & 匿名掃描

- **代理伺服器**：隱藏攻擊者真實 IP。
- **Proxy chaining**：多層代理鏈（如 Tor）。

### 掃描偵測工具

- **Wireshark**：封包擷取分析。
- **Snort**：入侵偵測系統。
- **Nmap**：主要掃描工具。
- **Hping**：自訂封包發送。

---


## 04 - Enumeration（列舉）

> **NOTE**: This may cross legal boundaries, you must have proper permission to perform these actions.

Enumeration 是主動與目標系統互動，取得帳號、資源、服務與設定等資訊的過程。它是滲透測試中的關鍵階段，能揭露潛在攻擊面。下列為重點項目：


---

### 🧩 常見可枚舉資訊
- 路由資訊
- SNMP 裝置資訊
- DNS 記錄與區域傳輸
- 機器名稱 / 網域名稱
- 使用者與群組名稱
- 應用程式與服務橫幅（Banner）
- 網路共享資源

### 📧 Email 枚舉
- 可萃取帳號、網域、通訊清單等資訊
- 常見指令：\`VRFY\`、\`EXPN\`、\`RCPT TO\`

### 🛡 預設密碼風險
- 有些系統未更改預設帳密，攻擊者可利用公知帳號登入系統

---

### 🔒 Active Directory（AD）& LDAP 枚舉
- 中央控管使用者、電腦與群組
- 可透過暴力破解或 LDAP 查詢列出資訊
- **常用 Port**：TCP/UDP \`389\`（LDAP）、\`636\`（LDAPS）

#### 可枚舉資訊：
- 使用者名稱、位址
- 憑證與權限資訊
- 群組結構與角色

#### 工具與指令：
\`\`\`bash
ldapsearch -x -h <IP> -b "DC=domain,DC=com"
nmap -p389 --script ldap* <IP>
enum4linux -u user -p pass <IP>
\`\`\`

---

### 🖥 NetBIOS / SMB（Windows 弱點常見）
- **Port**：137/UDP、138/UDP、139/TCP、445/TCP
- NetBIOS 名稱最長 15 字元，第 16 字元為服務尾碼

#### 常用工具：
\`\`\`bash
nbtstat -A <IP>
nmap -sU -p137 <IP>
enum4linux -U -P -S <IP>
smbclient //IP/share -U user
smbmap -H <IP>
rpcclient -U "" <IP>
\`\`\`

---

### 🌐 DNS 枚舉
[DNS Hacking 之 Subdomain Enumeration 的技巧與自動化挖掘](https://tech-blog.cymetrics.io/posts/crystal/dns-hacking-3/)
- **Port**：53/UDP
- 技巧：Zone Transfer、Snooping、DNSSEC 遍歷

#### 工具與指令：
\`\`\`bash
dig axfr @<ns-ip> <domain>
ldns-walk <domain>
amass enum -d <domain>
\`\`\`

---

### 📡 SNMP（簡易網管協定）
- **Port**：161/UDP、162/UDP (Trap)
- 協定版本：v1 / v2（無加密）/ v3（支援加密與驗證）
- 預設 Community String：\`public\`、\`private\`

#### 組成要素：
1. **Manager**：顯示與管理收集的資訊
2. **Agent**：裝置上執行、提供資料
3. **MIB（資訊庫）**：結構化儲存裝置資訊（Scaler / Tabular）

#### 工具與指令：
\`\`\`bash
snmpwalk -v2c -c public <IP>
snmp-check <IP>
onesixtyone -c dict.txt <IP>
snmpbulkwalk -v2c -c public <IP>
\`\`\`

---

### 📬 SMTP 枚舉
- **Port**：25/TCP
- 可使用 \`VRFY\`、\`EXPN\`、\`RCPT TO\` 測試帳號存在性

#### 工具：
\`\`\`bash
nmap --script smtp-enum-users -p25 <IP>
smtp-user-enum -M VRFY -U users.txt -t <IP>
swaks --to user@domain.com --server <IP>
\`\`\`

---

### ⏰ NTP（網路時間協定）
- **Port**：123/UDP
- 常見指令：
\`\`\`bash
ntpq -p <IP>
ntpdate -q <IP>
\`\`\`

---

### 📁 NFS / RPC
- **Port**：2049（NFS）、135（RPC）
- 列舉與掛載共享目錄

#### 工具：
\`\`\`bash
rpcinfo -p <IP>
showmount -e <IP>
mount -t nfs <IP>:<share> /mnt
nmap --script nfs-* <IP>
\`\`\`

---

### 🔐 IPsec 枚舉
- 工具：
\`\`\`bash
ike-scan <IP>
psk-crack -f wordlist.txt <capture.pcap>
\`\`\`

---

### ☎️ VoIP（SIP）
- 工具：
\`\`\`bash
svmap -p5060 <IP>
\`\`\`

---

### 📌 案例：尋找 Microsoft DC-FQDN
\`\`\`bash
nmap -p389 <IP-range>
nmap -p445,389,3268 -A <IP>

nslookup ip(Dc server)
dig -x ip
\`\`\`

---

### 🛠 其他工具
- **Global Network Inventory**：企業級資產盤點工具

---

## 05 - Vulnerability Analysis（漏洞分析）

漏洞分析是發掘系統、應用程式、服務中已知弱點的過程，通常是進入實際攻擊前的重要階段。可利用漏洞資料庫與自動化工具進行評估與風險確認。

---

### 📚 常見漏洞資料庫

| 資料庫名稱 | 說明 |
|------------|------|
| **NVD** (National Vulnerability Database) | 提供 CVE、CVSS 評分與修補建議 |
| **Exploit-DB** | 含大量真實可用 exploit 程式碼（包含 metasploit 模組） |
| **CWE** (Common Weakness Enumeration) | 軟體常見弱點分類，如邏輯錯誤、權限錯誤等 |
| **MSRC** | 微軟官方安全通報，彙整 Windows / Azure 等漏洞 |

---

### 🔍 常見漏洞掃描工具

| 工具名稱 | 說明 |
|----------|------|
| **OpenVAS** | 開源掃描器，支援報表與弱點評估（需 GVM） |
| **Nessus** | 商業工具，簽名庫完整、支援合規性報告 |
| **Nikto** | 快速找出 Web 弱點與錯誤設定 |
| **Nmap** vuln script | \`nmap --script vuln <IP>\` 自動執行服務弱點偵測腳本 |

---

### 🔁 漏洞分析流程

1. **資產盤點**：確認掃描範圍與服務類型（OS、Web、DB...）
2. **漏洞查詢**：依照版本搜尋 CVE、CWE 編號
3. **自動掃描**：透過工具產生詳細報告
4. **可用性驗證**：比對 Exploit-DB 或 Metasploit 模組
5. **風險評估**：依 CVSS 分數回報管理單位





## 06 - System Hacking（系統侵入）

系統駭侵是指取得對目標系統的未授權存取權限後，進行密碼破解、提權、資料隱匿、持久性植入、清除痕跡等活動。本章核心是「入侵－掌控－維持－隱匿」。

---
### 方法論

* Cracking Password
* Escalating Privileges
* Executing Applications
* Hiding Files
* Covering Tracks



### 🎯 系統入侵技術
#### 密碼攻擊類型補充

| 攻擊類型 | 說明 |
| -------- | -------- |
| 非電子攻擊     | 肩窺/社交工程/垃圾桶潛水     |
|主動線上攻擊|字典攻擊/暴力破解/雜湊注入|
|被動線上攻擊|封包嗅探/MITM/重放攻擊|
|離線攻擊|彩虹表/Distributed Network Attack|

#### 作業系統密碼檔案位置

* **Windows:** C:\\windows\\system32\\config\\SAM
* **Linux:** /etc/shadow
* **Domain Controller:** NTDS.dit
#### 密碼擷取與破解工具

| 工具名稱       | 說明 |
|----------------|------|
| **Pwdump7**     | 匯出 Windows SAM 檔中的雜湊密碼 |
| **Mimikatz**    | 取得明文密碼、hash、Kerberos ticket |
| **DSInternals** | 針對 Active Directory 進行雜湊導出 |
| **Hashcat**     | GPU 加速密碼破解工具，支援多種雜湊格式 |
| **PyCrack**     | Python 編寫的雜湊破解工具 |
| **John the Ripper (John)** | 傳統 CLI 破解工具，支援字典攻擊與彩虹表 |

#### 微軟認證協議比較
| 協議 | 特性 |
| -------- | -------- |
| LM     | 已淘汰，安全性低     |
|NTLMv1|使用 DES 易受破解|
|NTLMv2|改進安全性，仍存在 PTH 風險|
|Kerberos|現行標準，依賴 TGT/TGS 票證|

####  Kerberos 認證流程圖解
![deepseek_mermaid_20250421_f1979a](https://hackmd.io/_uploads/BJLe2UXkgx.png)


#### 字典檔攻擊技巧

- 使用 \`cewl\` 工具爬網站關鍵字製作字典檔
- 搭配 \`ncrack\` 工具對登入介面爆破

---

### 🧠 PTH（Pass The Hash）攻擊

> PTH 攻擊是利用已知的 NTLM 雜湊來模擬合法使用者登入，而不需知道明文密碼。

- 雜湊雖不可逆，但 Windows 認證系統允許使用 hash 來完成身份驗證
- 攻擊工具：\`Mimikatz\` + \`psexec\`, \`Impacket\` 模組

---

### 🔍 駭侵與橫向移動工具

- **Responder**：監聽 SMB/LLMNR 併誘導目標送出雜湊，配合 \`John\` 破解
- **Metasploit (msfconsole)**：
  - \`exploit\`, \`payload\`, \`post\` 模組
  - 支援 PTH、提權、Dump hash、自動化攻擊
  - 常用模組：
    - \`post/windows/gather/hashdump\`
    - \`post/windows/manage/enable_rdp\`
- **BloodHound**：圖形化 AD 權限分析工具，找出攻擊路徑
- **Docusnap**：企業用 IT 架構分析與網域視覺化工具
- **Powerview**：Windows AD 權限探索工具

---

### 🔼 權限提升技術（Privilege Escalation）

#### 常見提權方式

| 技術名稱            | 說明 |
|---------------------|------|
| **DLL Hijacking**   | 將惡意 DLL 命名與合法相同並置於目標目錄，程式會誤載入 |
| **Dylib Injection** | macOS 上類似 DLL Hijacking 的技術 |
| **Impersonation**   | 模擬更高權限帳戶的 Token 進行操作 |
| **UAC Bypass**      | 使用 Sticky Keys 或合法應用繞過使用者存取控制 |
| **ADCS Misconfig**  | Active Directory Certificate Services 誤設造成提權（考點！） |

#### UAC Bypass 方法

- 利用替換 Sticky Keys (\`sethc.exe\`)
- 建立假憑證或惡意 sideload
- 使用如 \`bypassuac_eventvwr\` 模組

---

### 📡 Pivoting & Relaying（跳板與轉送）

- **Pivoting**：透過已控制主機存取內網中其他主機
- **Relaying**：中繼 NTLM 認證封包到其他主機以取得權限

---

### 🧫 惡意程式植入與資料隱匿

#### 技術與工具

| 名稱             | 說明 |
|------------------|------|
| **Keylogger**     | 紀錄鍵盤輸入工具，可用於竊取帳密 |
| **Rootkits**      | 深入核心隱藏惡意程式，擋掉系統檢測機制 |
| **ADS（Alternate Data Stream）** | 利用 NTFS 隱藏檔案內容 \`dir /R\` 可偵測 |
| **Steganography** | 圖片/聲音中藏入資料，工具如 \`Snow\`, \`OpenStego\`, \`zsteg\` |

---

### 🧱 常見漏洞攻擊技術

#### Buffer Overflow

- 分為：
  - Stack-based（堆疊）
  - Heap-based（堆積）
- 步驟：
  1. Fuzz 測試輸入界線
  2. 找出 Offset（控制 EIP）
  3. 撰寫 Payload（Shellcode）
  4. 利用 \`msfvenom\` 產生惡意載荷
- 防禦繞過技術：ASLR、DEP

---

### 🧹 清除痕跡（Covering Tracks）

| 工具/指令                  | 功能 |
|----------------------------|------|
| **auditpol**               | 設定與停用事件稽核 |
| **clearev / clear-eventlog** | 清除事件紀錄 |
| **history -c**             | 清除 Bash 紀錄 |
| **cipher.exe /w**          | 清除未配置空間資料 |
| **fsutil**                 | 修改時間戳記 |
| **ipconfig /flushdns**     | 清除 DNS Cache |
| **CCleaner**               | 常用 GUI 系統痕跡清除工具 |

---

### 🛠 其他工具補充

| 名稱           | 說明 |
|----------------|------|
| **WMI / WinRM**| 遠端執行命令工具，可用於後門操作 |
| **Inspectre**  | 用於檢查與修補 Meltdown、Spectre 漏洞 |
| **Dependency Walker** | 檢查應用程式依賴 DLL，用來分析惡意 DLL  |

---

## 07 - Malware Threats（惡意程式威脅）

惡意程式威脅主要透過靜態分析、動態分析、與混合分析方式進行偵測與研究。需熟悉常用工具及病毒行為五大階段。

---

### 靜態分析（Static Analysis）

直接檢查檔案，不執行程式。

**工具：**
- **Detect It Easy（P329頁）** - 檢查檔案結構。
- **pdfid** - 分析 PDF 是否包含惡意指令。
- **YARA** - 撰寫特徵規則偵測惡意檔案。
- **PEiD** - 偵測檔案是否被加殼。
- **HashMyFiles** - 計算並比對檔案 Hash 值。

---

### 動態分析（Dynamic Analysis）

執行可疑檔案，觀察行為。

**工具：**
- **Process Explorer** - 檢查正在運行的程式。
- **Process Monitor** - 監控檔案、登錄檔與程序活動。
- **jv16 PowerTool** - 系統清理與優化工具（考試常出）。
- **Windows Service Manager** - 管理與分析 Windows 服務。
- **Autoruns** - 找出自動啟動的惡意程式。
- **SIEM 系統** - 分析 Logs（例如 PA File Sight、Tripwire）。
- **DriverView** - 查看系統驅動。
- **DnsQuerySniff** - 監控 DNS 查詢。
- **schtasks** - 查看系統排程任務。
- **Regshot** - 比較登錄檔改變。
- **Wireshark** - 監控可疑網路流量。

---

### 混合分析（Hybrid Analysis）

結合靜態與動態分析技術，透過自動化平台進行。

**常用工具：**
- **Cuckoo Sandbox**
- **Any.Run**

---

### 常見惡意程式類型

- **病毒（Virus）**：需依賴宿主檔案感染傳播。
- **蠕蟲（Worm）**：可自我複製傳播，不需要宿主檔案。
- **木馬（Trojan）**：偽裝成正常程式，實際暗中執行惡意操作。
- **勒索軟體（Ransomware）**：加密資料並勒索贖金。
- **Rootkit**：隱藏惡意活動，避免偵測。
- **間諜軟體（Spyware）**：暗中蒐集使用者資料。
- **後門（Backdoor）**：允許繞過正常驗證存取系統。

---

### 病毒偵測的五大階段（Static & Dynamic 5 Virus Methods）

1. **Scanning（掃描）**：檢查檔案或記憶體中是否有已知特徵碼。
2. **Integrity Checking（完整性檢查）**：比對檔案或系統狀態變化。
3. **Interception（攔截）**：即時攔截可疑行為或存取。
4. **Code Emulation（程式碼模擬）**：在虛擬環境中執行觀察程式行為。
5. **Heuristic Analysis（啟發式分析）**：基於行為與特徵推測是否為惡意程式。

---
## 08 - Sniffing（封包嗅探）

封包嗅探是攔截、監聽網路流量的技術，常被用於竊取密碼、會話資訊或分析流量行為。  
瞭解嗅探方式與防禦技巧是資訊安全的重要基礎。

---

### 🎯 封包嗅探的目的

- 竊取帳號密碼、Cookie、敏感資料
- 分析網路流量與使用模式
- 監控網路活動
- 搜集偵察情報

🔧 **推薦工具：ipscan** - 輕量且好用的 IP 掃描工具。

---

### 🧩 嗅探技術類型

- **被動嗅探（Passive Sniffing）** 📡  
  僅監聽流量，不產生額外干擾，適用於 Hub 環境。

- **主動嗅探（Active Sniffing）** 🚨  
  利用 ARP 欺騙、MAC Flooding 等方式主動引導流量，適用於 Switch 環境。

---

### 🛠️ 常見嗅探攻擊技術

- **ARP Spoofing/Poisoning（ARP 欺騙/污染）** 🎭
- **MAC Flooding（MAC 泛洪攻擊）** 🌊
- **DHCP Spoofing（DHCP 欺騙）** 📋
- **DNS Poisoning（DNS 污染）** 🧬

---

### 🧰 常見嗅探工具

- **Wireshark** 🐬：最常用的封包分析工具。
- **Tcpdump** 📜：命令列封包擷取分析。
- **Cain and Abel** 🥷：支援 ARP Spoofing、封包解密等功能。
- **Ettercap** 🧩：進行中間人攻擊與封包嗅探。
- **dsniff 套件** 🎯：包含 \`arpspoof\`、\`dnsspoof\`、\`filesnarf\` 等工具。
- **Nmap** 🛰️：除了掃描，也可輔助發動 ARP Spoofing。

---

### 🛡️ 防禦嗅探攻擊的方法

- ✅ 使用 **加密協定**（如 HTTPS、SSH、SFTP）
- ✅ 避免在公共 Wi-Fi 或不受信任網路中傳輸敏感資料
- ✅ 部署 **ARP 檢測工具**（如 XArp）
- ✅ 啟用 **Port Security**（限制 Switch 上可連接的 MAC 數量）
- ✅ 使用 **VPN** 加密網路流量
- ✅ 透過 VLAN 分割重要系統與一般網路流量

---

### 🔒 ARP Spoofing 防禦技巧

- 🔹 靜態設定 IP-MAC 對應表
- 🔹 監控 ARP 對應異常變更
- 🔹 啟用 **Dynamic ARP Inspection (DAI)**，自動阻擋 ARP 攻擊

---
## 09 - Social Engineering（社交工程）


社交工程是一種攻擊技術，透過操縱人類心理弱點（如信任、恐懼、好奇心）來取得敏感資訊或系統權限。相較於純技術攻擊，社交工程常更容易得逞，因此防禦人為因素是資訊安全的重要一環。

---

### 🎯 攻擊目的

- 獲取帳號密碼、個人/企業敏感資訊
- 取得未授權的系統或網路存取
- 社會工程可能作為更深層攻擊（如 APT、惡意軟體植入）的起點

---

### 🧠 常見攻擊類型

#### 🎣 Phishing（網路釣魚）
透過偽造郵件或網站誘使使用者輸入敏感資訊（如帳密、信用卡）。

#### 🎯 Spear Phishing（魚叉式釣魚）
針對特定個人或組織量身打造的釣魚攻擊，成功率更高。

#### 🐋 Whaling（捕鯨攻擊）
針對公司高層（如 CEO、CFO）進行釣魚，藉以入侵高權限系統。

#### 📞 Vishing（語音詐騙）
利用電話詐騙方式，冒充客服或主管來套取資訊。

#### 📱 Smishing（簡訊詐騙）
透過 SMS 發送惡意連結或偽造銀行通知，誘導點擊。

#### 🕵️ Pretexting（預設情境）
假冒某身份（如 IT、銀行、稽核員），騙取受害者信任。

#### 🧲 Baiting（誘餌攻擊）
放置 USB、光碟等惡意裝置，引誘受害者插入並執行惡意程式。

#### 🤝 Quid Pro Quo（互惠攻擊）
提供「免費技術支援」等好處，換取帳密或裝置訪問權限。

#### 🚪 Tailgating（尾隨進入）
在實體環境中尾隨他人進入有管制的區域。

#### 💘 Honey Trap（蜜罐陷阱）
利用假冒戀愛或吸引力，誘導受害者提供資訊或進行某些行為。

#### 🧠 Tabnabbing（標籤綁架）
惡意網站在背景變更頁籤內容，誘導輸入密碼等資料。

#### 🗣️ Elicitation（對話套話）
以非正式對話的方式，引導對方透露敏感資訊。

---

### 🛠️ 常用工具

| 工具名稱 | 功能說明 |
|----------|-----------|
| **Social Engineering Toolkit (SET)** | 支援釣魚網站、惡意 PDF、Java Applet 攻擊等多種社交工程方式 |
| **Metasploit** | 提供社交工程模組（如偽裝可執行檔、後門） |
| **Wifiphisher** | 建立惡意 Wi-Fi AP，進行 Fake Login 攻擊 |
| **ShellPhish** | 快速建立釣魚網站 |
| **King Phisher** | 進階釣魚測試框架，支援報表與模板 |
| **GoPhish** | 簡易釣魚模擬平台，適合教育訓練 |

---

### 🛡️ 防範方法

#### 🎓 員工資安教育
- 定期訓練員工辨識釣魚信、惡意連結、社交工程技巧
- 模擬攻擊演練（如使用 GoPhish）

#### 🔐 多因素驗證（MFA）
- 即使帳號密碼被竊，無第二驗證因素仍無法登入

#### 📵 資訊保密政策
- 減少公司員工在 LinkedIn、FB 等平台上洩露職位與工作資訊

#### 📣 回報與警覺機制
- 建立「可疑郵件回報」管道
- 對重複出現的釣魚攻擊建立 SIEM 通知或封鎖規則

#### 🏢 實體安全
- 實施門禁卡、門禁記錄、訪客識別
- 禁止 USB、可攜設備在未授權主機使用

---

### ✅ 小結

社交工程是滲透攻擊中最容易低成本且高成功率的手段之一。攻擊者可從公開資訊取得目標背景，再透過設計社交攻擊向量逐步取得存取權限。有效防範社交工程需從**人員訓練、技術防護、實體控管**三方面同時著手。

---

> 📌 **提醒：社交工程不是技術問題，是人性問題！**


## 10 - Denial-of-Service（拒絕服務攻擊）

拒絕服務（DoS）與分散式拒絕服務（DDoS）攻擊是破壞系統可用性的常見威脅，攻擊者藉由大量請求或漏洞利用，讓目標系統無法提供正常服務。

---

### ⚡ DoS vs DDoS

- **DoS（Denial of Service）**  
  單一來源發起，流量有限。

- **DDoS（Distributed Denial of Service）**  
  使用大量殭屍主機（Botnet）從不同來源同時發動攻擊，破壞力極大。

---

### 🕵️‍♂️ 如何尋找 Botnets？

- 利用 OSINT 或威脅情報平台搜尋 Botnet 活動。
- 分析流量異常與可疑通訊。

---

### 🎯 主要攻擊向量

#### 🌊 Volumetric Attack（流量型攻擊）

利用大量流量癱瘓網路或伺服器：

- **UDP Flood**：隨機 UDP 封包轟炸。
- **ICMP Flood（Ping Flood）**：密集 ICMP Echo 要求。
- **PoD（Ping of Death）**：異常大封包導致當機。
- **Smurf Attack**：利用 ICMP broadcast 產生放大攻擊。
- **SYN Flooding**：不斷發送 SYN，耗盡伺服器資源。
- **Fragment Attack**：碎片封包阻塞重組緩衝區。
- **Spoofed Session Attack**：偽造 IP 請求癱瘓資源。
- **HTTP GET/POST Flood**：慢速大量 HTTP 請求（如 Slowloris）。
- **DRDoS（反射型 DDoS）**：放大器伺服器（如 NTP、DNS）反射攻擊。

---

#### 📜 Protocol Attack（協定型攻擊）

針對協定本身漏洞進行攻擊：

- **SYN Flood**
- **ACK Flood**
- **RST Flood**
- **TCP State Exhaustion**
- **NTP Amplification**

---

#### 🖥️ Application Layer Attack（應用層攻擊）

針對應用系統，模擬正常行為隱蔽攻擊：

- **HTTP Flood**
- **Slowloris Attack**（保持大量半開連線）
- **Slow POST Attack**

---

### 🛠️ 攻擊工具範例

- **hping3**：產生各種 DoS 封包。
- **Low Orbit Ion Cannon (LOIC)**：簡單操作的大流量工具。
- **High Orbit Ion Cannon (HOIC)**：高效能 DDoS 工具。
- **Slowloris**：專攻 HTTP 應用層。

---

### 🛡️ 防禦對策

- 部署 **防火牆（Firewall）**、**入侵防禦系統（IPS/IDS）** 過濾異常流量。
- 啟用 **SYN Cookies**、**Fragment 檢查** 等防護技術。
- 使用 **DDoS 防護服務**（如 Cloudflare、AWS Shield）。
- 增設流量警報與自動縮減機制。
- 強化伺服器 TCP/IP 設定（例如 SYN Backlog、縮短 Timeout）。

---
## 11 - Session Hijacking（會話劫持）

會話劫持（Session Hijacking）是指駭客竊取合法使用者的會話 ID，繞過認證系統，取得系統或應用服務的存取權限。

---

### 🎯 會話劫持的種類

- **Active Attack（主動攻擊）**  
  駭客持續監控並篡改會話。

- **Passive Attack（被動攻擊）**  
  只監聽並蒐集會話資料，不直接干擾。

---

### 🧩 會話劫持的常見技術

#### 🎭 Session Sniffing（會話嗅探）

- 使用封包分析工具（如 Wireshark）攔截未加密的會話資訊。
- 常見於未加密 HTTP 通訊環境。

#### 🔥 Session Prediction（會話預測）

- 根據可預測的 Session ID 規則，暴力或推算出有效會話。

#### 🪤 Session Fixation（會話固定）

- 在用戶認證前，預先設置一個會話 ID，讓受害者使用。

#### 🔀 Cross-site Scripting (XSS)

- 利用 XSS 攻擊植入惡意程式碼，盜取 Cookie 與 Session ID。

#### 📡 Man-in-the-Middle (MITM)

- 攻擊者攔截雙方通訊，竊取或修改會話資料。

---

### 🛠️ 常用攻擊工具

- **Ettercap**：MITM 攻擊與封包修改。
- **Wireshark**：封包嗅探分析。
- **Burp Suite**：攔截與修改 HTTP 通訊。
- **Ferret and Hamster**：自動化 HTTP session 劫持。

---

### ⚡ 會話劫持的流程示意

1. 攻擊者監聽目標的網路流量。
2. 取得會話識別資訊（如 Cookie、Token）。
3. 使用劫持到的資料，偽裝成合法用戶。
4. 進行未授權存取或操控目標系統。

---

### 🛡️ 防禦對策

- **加密通訊（如 HTTPS）** 🔒
- **Session ID 設計應隨機且不可預測** 🎲
- **短期 Session Timeout 機制** ⏳
- **驗證 Client IP/裝置 Fingerprint** 🖐️
- **Cookie 設定 Secure 與 HttpOnly 屬性** 🍪
- **定期強制重新登入（Re-authentication）** 🔄

---








`,i=`---
title: CEH V13 證照心得與準備方式分享

---

# CEH V13 證照心得與準備方式分享

> 考試日期：2025/07  
> 結果：通過 ✅

---
![CEH_2E345519D3F7](/blog-assets/ceh-v13-review/rkp74hpLeg.png)
![image](/blog-assets/ceh-v13-review/HJtBEnaIgx.png)

![image](/blog-assets/ceh-v13-review/rk433K38ee.png)
![image](/blog-assets/ceh-v13-review/SyVrWi28gx.png)

---

## 📌 考前準備提醒

在正式考試前，記得完成以下步驟，避免像我一樣考完才發現資料填錯還要補救 😅

1. 前往官方考試平台 **[https://www.eccexam.com/](https://www.eccexam.com/)** 註冊帳號。
2. 註冊後將你收到的 **考試證號**（Exam Eligibility Code）輸入上去完成綁定。
3. 注意！註冊時的 **名字一定要填正確（與證件一致）**，我就是名字順序填錯，考完後還得寄信給官方請他們協助修改（雖然最後有成功）。
4. 考試當天要攜帶兩樣東西：
   - **影印一份 EC-Council 原廠寄來的考試通知信**，上面會有你的考試證號。
   - **有效證件**，我本人是帶 **護照**，官方會確認名字、照片、證件號碼。

---

## 成績資訊（Exam Score Report）

| 題目數 | 考試時間 | 成績 | 通過標準 | 結果   |
|--------|----------|------|-----------|--------|
| 125 題 | 4 小時   | 120  | 未知      | 通過 ✅ |

---

## 考後心得

這次能夠順利拿下 CEH V13 證照，真的非常開心。整體準備時間加上上課以及考古題大約花了 1~1.5 個月。  
我認為如果**只靠上課而不刷題**，會有點危險，因為考試題目偏向知識應用與情境題，細節很多。

---

## 我的準備方式

### 1. 上課內容：打基礎

我上了五個星期的假日共五天40個小時，內容放在另外一篇：  
https://hackmd.io/@LKanFpXQTUSJayug7EHeiA/Sk3bRkqAkl

---

### 2. 考古題刷題（必備）

我認為刷題是非常關鍵的一步。

- 熟悉題目類型與出題語氣
- 找出自己容易混淆的概念
- 模擬考試節奏與心態

---

### 3. 自製刷題工具：LINE Bot + Google Sheet + Apps Script

為了強化練習，我將整理好的考古題匯入 Google 試算表，並配合 Google Apps Script 製作了一個 LINE Bot：

![image](/blog-assets/ceh-v13-review/rkLyTDsLlx.png)

- 即時答題  
  ![image](/blog-assets/ceh-v13-review/S1AlpvoLle.png)

- 支援中英文題目  
  ![image](/blog-assets/ceh-v13-review/SyLz6Dj8lx.png)

- 自動隨機產生 Google 表單作為小測驗  
  ![image](/blog-assets/ceh-v13-review/H1Cp2PiUll.png)

---

## ❓ 為什麼後來開源？

當初我在分享文裡提到這個 LINE Bot 後，很多人來私訊跟我要機器人。  
但因為：  
- 我沒有時間幫大家維護程式  
- 使用人數太多會導致 **Google Drive 塞爆問卷**  
- LINE API 與 Google API 都有限額，可能影響服務  

與其一個個幫忙，不如 **直接公開程式碼**，讓大家可以自己部署、自己調整。  

程式碼已經放在 GitHub：  
👉 [CEH-robot (GitHub Repo)](https://github.com/and910805/CEH-robot/tree/mainer)

裡面有範例檔案和教學說明，大家可以依照需求去修改。  
也歡迎大家 fork / 發 PR，一起改進 🙌

---

## 題型與準備建議

| 主題                   | 出題類型       | 建議準備方式                                 |
|------------------------|----------------|----------------------------------------------|
| Enumeration            | 工具＋協定知識 | 熟悉 SNMP、LDAP、DNS 的工具與查詢方式        |
| Web Security           | 攻擊手法題     | XSS、SQLi、XXE、CSRF 的差異與防禦手法         |
| Vulnerability Scanning | 工具題         | Nessus、Nikto、OpenVAS 的功能與應用區別       |
| Risk Management        | 理論題         | CTI 四層級（Strategic / Tactical / ...）概念 |
| Tools / Parameters     | 工具題         | 熟悉 nmap、Metasploit 常見參數與使用場景     |

**還有很多很多，還是建議要刷題**

---

## 結語

這次 CEH 考試讓我收穫很多，也體會到：

> 上課是打底，刷題是關鍵，實作才是王道。
`,r=`---
title: CEHP心得

---


---

# CEHP (Certified Ethical Hacker Practical) 考後心得


---
> 考試日期：2026/3  
> 結果：通過 ✅
> 對答率：20/20
> 花費時間：4小時多

![image](https://hackmd.io/_uploads/S1XjAcDsbe.png)

離上次考到CEH也快一年了，最近去上了恆毅總複習班，並順利考取CEHP，以下是一些我有寄起來的資訊，跟大家分享一下

[去年CEH心得分享](https://hackmd.io/@LKanFpXQTUSJayug7EHeiA/Bk4l2UoLxl)

## 1. 考試基本規定與核心機制

CEHP 是一場長達 6 小時的純實作考試，總共包含 20 道題目，受試者必須答對 15 題才能取得證照。

| 項目 | 說明 | 實務細節 |
| --- | --- | --- |
| 考試時長 | 總計 6 小時 | 建議分配 1 小時進行網路枚舉，剩餘時間專注破題。 |
| 休息機制 | 一般可休息 2 至 3 次 | 休息需向監考官報備，且休息期間考試倒數不會停止。 |
| 題目提交 | 每題通常可提交 3 至 5 次答案 | 提交前請檢查 Flags 的大小寫、空白字元與特殊符號。 |
| 作答方式 | 可先跳過難題，再回頭作答 | 題目之間無前後關聯性，遇到卡關建議先執行下一題。 |
| 證照組合 | 通過 CEH (ANSI) 與 CEH Practical | 完成兩項後，系統會自動核發 CEH Master 勳章。 |

> 備註：實際規則可能因考場或監考平台（如 ProctorU 或 GoToMeeting）調整，考前應提前十分鐘進去準備。

---

## 2. 考試環境

在考試環境中，針對特定的 Linux 或 Windows 主機，通常會提供以下預設帳密供登入：

| 系統類型 | 帳號 | 密碼 |
| --- | --- | --- |
| Parrot Security (攻擊機) | attacker | toor |
| Windows 11 | admin | Pa$$w0rd |
| Nessus Web Client | admin | password |

---

## 3. 網路環境架構與掃描策略



### 網段架構
通常環境中會包含 **3 個不同的子網段**（例如：10.10.1.x, 172.16.x.x, 192.168.x.x）。
### 掃描邏輯與策略
* **精確導向掃描：** 部分題目會直接提供目標 IP 或所屬網段，並告知特定服務（如 Port 80 的 Web 服務或 Port 445 的 SMB）。此時應直接針對該 IP 進行全埠掃描與服務版本辨識。
* **全域搜索與枚舉：** 少部分難度較高的題目僅提供目標描述（如：找到一台執行特定舊版服務的主機）。此時必須對**所有 3 個網段**進行大規模掃描。

---

## 4. 攻擊機配置與工具分佈

考試會提供兩台核心攻擊機，分別代表 Windows 與 Linux 兩大體系，各自負責不同的攻擊任務。

| 機器類型 | 主要用途 | 技術備註 |
| --- | --- | --- |
| **Windows** | **GUI 工具大本營** | 桌面包含 \`CEH-Tools\` 資料夾，內含隱寫術工具、密碼分析器、靜態程式碼分析工具。 |
| **Parrot** | **CLI 指令工具與腳本** | 核心工具包含 Nmap, Metasploit, SQLMap, WPScan, Hashcat 等，適合自動化滲透。 |

---

## 5. 檔案傳輸

由於 Windows 機器內建較多圖形化分析工具（如針對隱寫術圖片的分析），而 Parrot 機器則強於資料產出，因此跨平台的檔案互傳非常重要。

### 跨平台傳檔 (Parrot <-> Windows)
在考試環境中，使用 Python 內建的 HTTP 伺服器是最有效率的方法：
1. **在來源機器啟動：** 於檔案所在目錄執行 \`python3 -m http.server 8080\`。
2. **在目標機器下載：** 開啟瀏覽器輸入 \`http://[來源IP]:8080\` 即可下載分析檔案。

> **實戰應用建議：** 在 Linux 掃描出的惡意程式丟給windows分析程式好用很多。



---

## QA 常見問題與解答

**1. 六小時會寫不完嗎？**
我覺得不會。雖然考試時間很長，但我大約花四小時就完成了。分享一下我的經驗：剛開始時因為太緊張，環境還不熟悉，光是前兩題就花了一個多小時。建議大家前幾題慢慢來，等手感順了、網路環境適應了，後面的解題速度會快很多。

**2. 可以用 AI 嗎？**
盡管用。官方目前的規則是允許使用網路資源的（Open Book），包含 Gemini、ChatGPT 等 AI 工具。如果你還是不放心，可以在考試開始時主動詢問監考官確認。在解密 Hash 或寫 Python 腳本時，AI 是非常有力的助手。

**3. 考完什麼時候可以領到證照？**
馬上。考完當下點擊提交後，系統會立即顯示你的分數與是否通過。監考官會幫你進行最後的確認並結束工作階段。接著回到 EC-Council 的 Aspen 平台，證照通常已經產出並開放下載了。

**4. 要多久會變成 CEH Master？**
這需要一點點作業時間。通常在考完 CEHP 後的兩天內，Aspen 平台會自動偵測到你同時擁有 ANSI（筆試）與 Practical（實作）證照，接著就會多出一張 CEH Master 的證照。

**5. 不會英文怎麼跟監考官溝通？**
不用擔心，溝通過程可以全程使用打字（Chat box）。你可以開著網頁翻譯，或是將監考官的指令貼到翻譯軟體中。如果真的需要說話，簡單的英文單字或用翻譯軟體唸出來也是可以溝通的。

**6. 考試環境會很卡（Lag）嗎？**
會有感延遲。因為是透過瀏覽器連線到遠端的虛擬機，滑鼠移動或輸入指令時會有很嚴重延遲，以及輸入法我不知道為什麼一直怪怪的。

**7. 答案（Flag）提交要注意什麼？**
答案通常是從靶機裡找到的字串。要注意字串前後有沒沒有打對，以及大小寫是否完全符合。

**8. 中途可以上廁所或喝水嗎？**
可以。你可以向監考官申請「Break」，通常可以休息 2 至 3 次。要注意休息期間考試計時是不會停止的。回來後，監考官可能會要求你再次拿著攝影機環繞房間一圈，確認環境安全。

**9. 可以使用自己的數位筆記嗎？**
可以。只要筆記是存在你電腦裡的電子檔、Google Doc 或自己的部落格，都可以開啟。但切記「不能看實體書或紙本筆記」，所有的參考資料都必須在螢幕上閱讀。



**10. 考試題目與 iLabs（官方實驗室）的關聯性？**
相似度非常高。如果你能熟練操作 iLabs 裡面的所有單元，尤其是網路掃描（Scanning）、Web 攻擊（SQLi, Cross-Site Scripting）、密碼破解（Password Cracking）與隱寫術（Steganography），那麼這場考試對你來說會非常輕鬆。題目邏輯幾乎與實驗室一模一樣，只是替換了目標 IP 與 Flag 內容。

**11. 覺得內建工具不好用，可以自行下載嗎？**
可以。考試環境基本上就是兩台可以上網的虛擬機，我在考試過程中就有在 Windows 攻擊機上下載了幾款自己比較順手的輔助工具來提升效率。

**12. 該如何有效準備這場考試？**
最推薦的方法是重複練習官方的 iLabs 實驗室，或是參加恆毅提供的總複習班。重點在於熟悉工具的操作指令與圖形化介面的位置，因為考試時會有連線延遲，熟悉度越高越能節省時間。

**13. 破解密碼用的字典檔（Wordlist）通常放在哪裡？**
在 Parrot Security 攻擊機中，常用的字典檔通常直接放在桌面（Desktop），路徑大約是：
* \`/home/attacker/Desktop/username.txt\`
* \`/home/attacker/Desktop/password.txt\`
如果桌面沒看到，也可以在 \`/home/attacker/\` 目錄下找找。

**14. 密碼破解（Cracking）的難度與策略？**
破解過程本身並不難，只要將桌面提供的使用者名稱與密碼字典檔然後用上hydra，基本上都能順利跑出答案。但「時間」是關鍵，強烈建議：**先讓破解程式在背景執行，同時間去解其他的題目**，不要坐在螢幕前死等結果。

**15. 還有其他問題可以聯絡你嗎？**
沒問題，如果對 CEH Master 或是 CEHP 有任何疑問，歡迎寫信給我交流：goole910805@gmail.com


---





`,a=`---
title: Forensics社課3/24

---

# Forensics社課3/24
* <font size='5px' color='#FF7F50'>**介紹kali**</font>
* <font size='5px' color='#FF7F50'>**介紹picoCTF**</font>
* <font size='5px' color='#FF7F50'>**介紹鑑識**</font>
    * <font size='5px' color='#FF7F50'>**基本題目練習&&講解**</font>

## 介紹kali
### [<font color='deep red'>甚麼是kali?</font>](https://zh.wikipedia.org/zh-tw/Kali_Linux) <-網址
* 駭客的好工具
  <font color='blue'>原意是想設計給滲透測試使用，但在駭客手中就變他的攻擊利器</font>
* 設計用於數位鑑識和滲透測試
* 基於 Debian 的 Linux 發行版
### [<font color='deep red'>安裝kali</font>](https://ithelp.ithome.com.tw/articles/10298620) <-網址
* 按照網址內步驟，幫助我們安裝kali
* 最低要求

1. 安裝 Kali Linux 需要至少 3.8 GB 的硬碟空間。
2. i386 和 AMD64 架構需要至少 512 MB 的記憶體。
3. 可引導的 CD-DVD 光碟機或USB隨身碟。

* 建議要求
1. 10.0 GB 硬碟空間，最好是SSD。
2. 至少有 2048 MB RAM。
## 介紹picoCTF
### [<font color='deep red'>甚麼是picoCTF?</font>](https://picoctf.org/) <-網址
* picoCTF 是一個免費的資訊安全教育計畫，其中的原創內容建立在由美國卡內基．梅隆大學的資安專家們所建立的 CTF 框架上
* 簡單來說就是一個可以供大家做CTF的地方

### [<font color='deep red'>註冊、登入 picoCTF</font>](https://play.picoctf.org/login) <-網址
* 以後在家可以自己練習題目，大部分題目網路上都有解答
* 登入完可以按上方的Pratice
### <font color='deep red'>CTF常見領域分類</font>
CTF 比賽中，大概可以分成六大類的題型：

* Web Exploitation 網路弱點
* Cryptography 密碼學
* Reverse Engineering 逆向工程
* Forensics 鑑識學
* Pwn (Binary Exploitation)
(發音為：碰！) 這個不好翻譯，大致上就是尋找二進制檔案、執行檔的漏洞，或是取得 shell 控制權
* MISC 雜項

### [<font color='deep red'>想玩其他CTF平台?!</font>](https://dd13036.blogspot.com/2019/06/ctf.html) <-網址

## Foriensics 鑑識

[Wikipedia](https://zh.wikipedia.org/zh-tw/%E6%95%B8%E4%BD%8D%E9%91%91%E8%AD%98)
### <font color='deep red'>Steganography隱寫術</font>
隱寫技術的類型(Types of Steganography)
* 圖片隱寫(Image Steganography)
  <font color='deep blue'>相關工具：QuickStego、Steghide、zsteg、HxD、CryptaPix、BinWalk</font>
* 文件隱寫(Document Steganography)
  <font color='deep blue'>相關工具：StegoStick、StegJ</font>
* 影片隱寫(Video Steganography)
  <font color='deep blue'>相關工具：OmniHide、StegoStick、OpenPuff</font>
* 聲音隱寫(Audio Steganography)
  <font color='deep blue'>相關工具：WavSteg、AudioStego、DeepSound</font>
* 資料夾隱寫(Folder Steganography)
* 網頁隱寫(Web Steganography)
* 電子郵件隱寫(Email Steganography)
### <font color='deep red'>有趣工具和指令</font>
 * steghide 
 * binwalk
 * strings
 * grep
 * dd
 <font color='deep blue'>一個用於從一個位置複製二進制數據到另一個位置的命令行工具。</font>
 * wireshark
 <font color='deep blue'>網路封包分析工具，可用於檢查網路流量中的隱藏信息。</font>
 * hexdump
 <font color='deep blue'>一個在二進制文件中查看十六進制數據的命令行工具。</font>
 * exiftool
 <font color='deep blue'>一個用於讀取和編輯圖像、音頻、視頻和PDF等媒體文件的元數據的工具。</font>
 
 
#### steghide 
---
[參考資料1](https://ithelp.ithome.com.tw/m/articles/10278964)
[參考資料2](https://anwendeng.blogspot.com/2019/07/linuxsteganographysteghide.html)
[steghide官方網站](https://steghide.sourceforge.net/)

![](https://i.imgur.com/sjpsBJ8.jpg)
![](https://i.imgur.com/8RGT62O.png)


\`\`\`bash
$sudo apt－get install steghide #安裝
$steghide --help 查詢指令
$steghide embed -cf picture.jpg -ef secret.t
$steghide extract -sf picture.jpg
$steghide info picture.jpg
\`\`\`
 <font color='deep blue'>幫大家補充一點點linux最最最基本指令</font>
 \`\`\`bash
$wget 網址 #下載
$cd [directory] #到某個目的
$cd ../.#可以接相對路徑
$cd /[path]#可以接絕對路徑
$ls #列出本位置的所有資料，可以帶參數後面再講
$ls [directory]#可以目的
$pwd #查看目前位置
$touch file1 #建立單一檔案
$touch file1 file2#建立多重檔案
$mkdir dir #建立資料夾
$cp file1 file2#複製單一檔案
$cp file1 file2 file3 dir1#複製多重檔案，前三個檔案複製到後面那個dirl
$mv file1 file2#移動，可以更改黨名
$mv file1 file2 dir1#多重檔案移動
$rm file1 #刪除單一檔案，要刪除資料夾要-r遞迴
 \`\`\`
 
 
#### binwalk
---

 <font color='deep blue'>跟steghide區別</font>
![](https://i.imgur.com/ityc41v.png)
[安裝方式&&教學](https://cloud.tencent.com/developer/article/1515285)
\`\`\`bash
$binwalk --help
$binwalk file#可以分析
$binwalk -e file#文件提取
\`\`\`
[picoCTF練習簡單題目](https://play.picoctf.org/practice/challenge/129?category=4&page=1)
[picoCTF練習中級題目](
https://play.picoctf.org/practice/challenge/130?category=4&page=1)
為啥binwalk分析不出來steghide隱藏資訊?
![](https://i.imgur.com/zovxvJd.png)

#### strings
---
[參考資料](https://wangchujiang.com/linux-command/c/strings.html)
在文件中或二禁制文件中找尋可打印的字串
![](https://i.imgur.com/127CQAy.png)
[picoCTF練習簡單題目](https://play.picoctf.org/practice/challenge/44?category=4&page=1)
[picoCTF練習簡單題目](
https://play.picoctf.org/practice/challenge/265?category=4&page=1)
####  grep
---
[用法大全](https://blog.gtwang.org/linux/linux-grep-command-tutorial-examples/)
\`\`\`bash
$grep 關鍵字 檔案
$grep 關鍵字 檔案1 檔案2 ...
$grep 關鍵字 /kali/123.file
$grep 關鍵字 /kali/*.conf #在kali下所有.conf，尋找關鍵字
$grep -i 關鍵字 /kali/123.file #不分大小寫
$grep -n 關鍵字 /kali/123.file #顯示行數
$grep -v 關鍵字 /kali/123.file #反向搜尋除了關鍵字其他顯示
$grep -r 關鍵字 /kali/123.file #遞迴搜尋
$grep -A 1 關鍵字 /kali/123.file #多顯示後一行
$grep -B 1 關鍵字 /kali/123.file #多顯示前一行
$grep -C 1 關鍵字 /kali/123.file #多顯示前後各一行
\`\`\`
也可以與其他指令混用 |
\`\`\`bash
$strings file | grep picoCTF{.*}
\`\`\`
[picoCTF練習簡單題目](https://play.picoctf.org/practice/challenge/279?category=4&page=1)
[picoCTF練習簡單題目](https://play.picoctf.org/practice/challenge/19?category=4&page=2)
#### 最後
---
上面題目很多，大家可以加以練習，我覺得成長最快的方式是要記錄，做個筆記之類的，[這是我的筆記](https://hackmd.io/@LKanFpXQTUSJayug7EHeiA/rJqLG8Qdj)，但其實大部分題目都找的到答案。


`,s=`---
title: picoCTF

---

# picoCTF
<font size='5px' color='#FF1493' face="DFKai-sb"><b>

</b>
</font>
## <font size='10px'>Web Exploitation</font>
### <font size='6px'>題目GET aHEAD</font>
![](https://i.imgur.com/gWuXnHM.png)
* <font color='red'>提示</font>
    1. 他說可能我們用大於兩種的選擇
    2. 我們可以透過burpsuit類似工具來修改請求
* <font color='red'>解題思路</font>
    先打開F12看一下，我們會看到html裡面兩個按鈕請求不一樣。
    ![](https://i.imgur.com/FgXxGhS.png)
    一個是GET 跟POST當然根據提示我們還可以用別種請求試試看，
    這裡用到[curl指令](https://blog.techbridge.cc/2019/02/01/linux-curl-command-tutorial/)
    \`\`\`bash
    $curl -I URL
    \`\`\`
    就會顯示出來了
    ![](https://i.imgur.com/fsy8y7v.png)

### <font size='6px'>題目Cookies</font>

![](https://i.imgur.com/H58sjM3.png)
* <font color='red'>解題思路</font>

    看題目一定八九不離十跟cookie有關係，
    一樣打開F12->application 改改看cookie，
    會發現每改一次他輸出都不太一樣，可以順著這個思路去改改看，
    會發現在name=18時，可以看到我們的flag。
    
    不過這題是因為數字比較小，如果牠放到很後面，我們當然不可能慢慢點，
    所以我們可以通過寫程式方式，我這邊提供[別人的程式](https://github.com/JeffersonDing/CTF/blob/master/pico_CTF_2021/web/cookies/ape.py)，他用py迴圈去檢測，當然也可以直接在shell下 
    \`\`\`bash
    $for i in {1..100}; do #你要的指令curl之類的
    \`\`\`
### <font size='6px'>題目Insp3ct0r</font>
![](https://i.imgur.com/xos4X4E.png)
* <font color='red'>解題思路</font>
    題目說了要我們檢查code，我們就F12檢查吧，
    首先看到html他有註解沒有刪掉，而且看起來像旗幟
    ![](https://i.imgur.com/TSR4lOj.png)
    不過好像只給1/3的部分，我們接著找其他檔案。
    F12->Source 依序在js 跟css找到我們剩餘的flag。
    這題對新手蠻實用的，許多人架網站註解都會忘記刪掉。
    
### <font size='6px'>題目Scavenger Hunt</font>
![](https://i.imgur.com/Z3hvf4a.png)
* <font color='red'>解題思路</font>
    題目叫做尋寶獵人，且敘述說周圍隱藏者一些有趣的訊息，
    感覺就跟上一題很像，那我們一樣檢查網站的code，馬上就在html看到一小段flag，
    css第二段，可惜的是js沒有找到但他也提供我們訊息防止google引擎查詢，
    馬上就聯想到[robots.txt](https://www.newscan.com.tw/all-seo/robots-block-search-engines.htm)，我們訪問看看。
    ![](https://i.imgur.com/5sbYgRV.png)
    這裡也出現一段flag並出現提示，網頁適用阿帕契架的，那就有可能會有[.htaccess](https://www.newscan.com.tw/all-seo/block-search-engines-htaccess.htm)，我們在這裡找到第四段，接下來的提示是mac，那我們再找找看[.DS_Store](https://zh.wikipedia.org/zh-tw/.DS_Store)全部flag就找到了。
    
### <font size='6px'>題目where are the robots</font>
![](https://i.imgur.com/HghEyZa.png)
* <font color='red'>解題思路</font>
    題目寫哪裡有robots，還記得上一題我們才剛剛寫到robots.txt嗎，
    我們試試看直接去查看/robot.txt，發現他有阻止一個網站被找到，
    ![](https://i.imgur.com/yqFjquq.png)
    我們就去看看這是甚麼網站吧，很好進去答案就找到了:>

### <font size='6px'>題目logon</font>
![](https://i.imgur.com/plk8Aq4.png)
* <font color='red'>解題思路</font>
    題目說好像不會講檢查登入?除了joe，那我們猜測joe應該是root管理員，
    我先隨便打帳密進去，進去發現應該是權限不足? !，F12到處檢查一下，
    我發現cookie有一個admin=false看起來超奇怪的，我把它改成True，
    結果Flag就出來了
    
### <font size='6px'>題目dont-use-client-side</font>
![](https://i.imgur.com/z5epn6a.png)
* <font color='red'>解題思路</font>
    題目說沒有使用者? !不太懂他得意思，
    沒關係我們一樣F12看一下有沒有可以利用的咚咚，
    我看了一下Html裡面藏著js驗證指令
    ![](https://i.imgur.com/jP94WrL.png)
    細看發現，把後面按照split順序拼起來就是flag，
    <font color='	DeepPink'>picoCTF{no_clients_plz_7723ce}</font>
    我也懂了為啥叫做沒有使用者，因為他怎麼樣都不會進去。
    你正確他也不會跳轉，他只會跟你講對了而已。

### <font size='6px'>題目login</font>
![](https://i.imgur.com/UPc3LDI.png)
* <font color='red'>解題思路</font>
    打開F12，東看看西看看看到他的js，感覺很奇怪我們可以用[縮排網站](https://www.tutorialspoint.com/online_javascript_formatter.htm)幫忙縮排，
    然後縮完，會看到一串很像base64的密文
    ![](https://i.imgur.com/uAWw6C5.png)
，可以用線上[Decode解解看](https://emn178.github.io/online-tools/base64_decode.html)答案就出來了。

### <font size='6px'>題目Includes</font>
![](https://i.imgur.com/KbeYMm3.png)
* <font color='red'>解題思路</font>
    這題我是不太知道要考甚麼，他說去維基百科查include，好吧，
    一樣先看F12有啥東西，恩..js跟css註解就有答案了，完全不知道這題要考啥。

### <font size='6px'>題目Inspect HTML</font>
![](https://i.imgur.com/KhGDjbJ.png)
* <font color='red'>解題思路</font>
    題目叫做檢查html，那就F12一樣檢查看看吧，恩..又是註解。
    你看超簡單你只要會看F12就能解大部分題目了。

### <font size='6px'>題目Local Authority</font>
![](https://i.imgur.com/k9Iz5eD.png)
* <font color='red'>解題思路</font>
    看到題目這個名字，我以為是改cookie之類的，因為我點開也有admin咚咚，
    超奇怪但我試了幾次都沒有，我點開了提示，他說檢查看看網站是怎麼驗證的，
    那我們就登登看，發現會跳轉到login.php，我們打開看一下F12，
    他驗證的程式有沒有寫在裡面吧，欸發現了secure.js點開就會看到帳密，
    登進去flag就出來了。


### <font size='6px'>題目Search source</font>
![](https://i.imgur.com/uCBGBHO.png)
* <font color='red'>解題思路</font>
    題目說好像有留強大重大的神器?，不太懂不管我們一樣F12找找看，
    他的網站超級多的，為了效率我們ctrl+f搜尋picoCTF，結果發現在style.css，
    裡面出現flag。
### <font size='6px'>題目caas</font>
![](https://i.imgur.com/fiZoP7e.png)
* <font color='red'>解題思路</font>
    這題還蠻有趣的，點開網站看得出，他叫我們把訊息寫在網址後，
    就能跟這個cowsay互動，不管寫甚麼他都可以印出來，那我們試試看有沒有文件漏洞，
    我打上linux指令，盡然可以互動欸
    ![](https://i.imgur.com/TnRfj9j.png)
    那我們查查看這個falg.txt看起來超奇怪的檔案，
    在後面加cat falg.txt答案就出來了。
    ![](https://i.imgur.com/NCrbNhg.png)
    這個題目超有趣
### <font size='6px'>題目picobrowser</font>
![](https://i.imgur.com/TmOXYCq.png)
* <font color='red'>解題思路</font>
    這題我點網址進去，中間出現了flag看起來很奇怪，點點看，
    跳出了
    \`\`\`
    You're not picobrowser! 
    Mozilla/5.0 (Windows NT 10.0; Win64; x64)
    AppleWebKit/537.36 (KHTML, like Gecko) 
    Chrome/108.0.0.0 Safari/537.36
    \`\`\`
    反正就是要我用picobrowser才給我點，F12的右邊點更多，有一個
    more tool然後裡面有一個network conditions，點開可以改瀏覽器名字
    我們可以把它改成他要的picobrowser像這樣
    ![](https://i.imgur.com/5PfqYqA.png)
    重新點就可以了，flag就出來了
### <font size='6px'>題目Client-side-again</font>
![](https://i.imgur.com/wMMH3RS.png)
* <font color='red'>解題思路</font>
    他說我們能不能闖進這個超強門呢，恩不知道一樣F12打開，
    欸奇怪盡然沒有js或是css檔案，不過他要驗證一定會有js，所以應該是寫在
    html裡面，我們看一下，果然有一個很長的js code，我們複製用之前那個
    [js排版工具](https://www.tutorialspoint.com/online_javascript_formatter.htm)
    我們會看到一堆flag片段，我們按造順序把它組合起來就是答案了。
    不過組合過程偏麻煩，還要用到F12 console查看js變數，然後一個一個對照，
    我這裡就不做了，我傳別人寫好的[網址](https://ithelp.ithome.com.tw/articles/10246749)

### <font size='6px'>題目Web Gauntlet</font>
![](https://i.imgur.com/a9OfGvi.png)
* <font color='red'>解題思路</font>
    這題看提示似乎要我們用注入器，但是可能給我們另一個網址好像是他的過濾器，
    我們可以對應看看過濾器，下面是每個回合。
    1. 第一回合過濾器說不能用OR，那我們試試看admin' --
    2. 第二回合過濾器說不能用--，那我們用admin'/*
    3. 第三回合過濾器說不能用><，那等於上回合還可以用
    4. 第四回合過濾器說不能用admin，那我用字串結合的方式a'||'dmin'/*
    5. 第五回合過濾器說不能用union攻擊，那上回合一樣可以用
    最後他叫我們再去檢查看看filter.php，裡面就出現了全部回合的驗證步驟，
    以及flag註解，這題可以上網查sql注入清單一個一個是拉。
        
    


### <font size='6px'>題目Irish-Name-Repo 1</font>
![](https://i.imgur.com/4nXEwH1.png)

* <font color='red'>提示</font>
    1. 我想知道用戶是否保存在數據庫中？
    2. 嘗試考慮網站如何驗證您的登錄信息。

* <font color='red'>解題思路</font>

    從以上提示能判斷出，題目想要叫我們去看他的程式碼是怎麼判別登入的。
    首先F12 Elements 層層打開能看到一個login.php 用post
    
    ![](https://i.imgur.com/Uo47ufZ.png)
    
    我們試試看把debug 後面value改成1
    ![](https://i.imgur.com/64wOo3P.png)
    跳出這個sql的語法，那我就能試試看以前sql注入的漏洞
    參考網址:https://ithelp.ithome.com.tw/articles/10189201
    
    在username上打'OR 1=1 -- 便能破解
    ![](https://i.imgur.com/dr23RCw.png)
### <font size='6px'>題目Forbidden Paths</font>

![](https://i.imgur.com/DXRdObo.png)
* <font color='red'>解題思路</font>
    題目說flag在flag.txt上
    進到網頁我們會發現這個read看起來很可疑
    ![](https://i.imgur.com/RJyhu1T.png)
    又因為題目說nginx的index放在/usr/share/nginx/html下
    所以我用打了linex語法 ../../../../flag.txt
    便找到
![](https://i.imgur.com/yU5hXld.png)

### <font size='6px'>題目SQLiLite</font>

![](https://i.imgur.com/dLjoYlV.png)
* <font color='red'>解題思路</font>
     測試了一下發現也是sql注入
     一樣打'OR 1=1 -- 就可以登入
     當然他的flag藏起來了，這裡F12打開就可以看到
     ![](https://i.imgur.com/q32GJuq.png)
## <font size='10px'>Foriensics 鑑識</font>
 
 <font color='purple' size='6px'><span>基本工具</span> </font>
 * binwalk
 * [strings](https://eecsmt.com/linux/linux-strings/)
 ### <font size='6px'>題目Matryoshka doll </font>
 
 ![](https://i.imgur.com/YKl9YZV.png)
  * <font color='red'>解題思路</font>
     提示中跟我們講，有隱藏的文件那我們用binwalk掃掃看
     \`\`\`bash
     $binwalk -e dolls.jpg
     \`\`\`
     會發現隱藏文件出來了
     一層一層的解開會找到最後一層的flag.txt
 ### <font size='6px'>題目Glory of the Garden</font>
 
![](https://i.imgur.com/07N01LC.png)
 *  <font color='red'>解題思路</font> 
     直接點開裡面的圖長這樣
     ![](https://i.imgur.com/PO8gt1V.jpg)
     提示有說16禁制編輯器?
     我們先用vim打開看看，然後<font color='pink'>/picoCTf</font>就出現了，
     他藏在最後面
     ![](https://i.imgur.com/cH9EoIM.png)
 

 ### <font size='6px'>題目Enhance!</font>
 
 ![](https://i.imgur.com/VsfUMtq.png)

* <font color='red'>解題思路</font>
     strings指令用來檢視二進位檔案。
     用strings來檢查看看
     會發現答案藏在裡面
    \`\`\`bash
    $strings drawing.flag.svg
    \`\`\`
 ### <font size='6px'>題目Lookey here</font>
 
 ![](https://i.imgur.com/Ytk0J7E.png)
 
* <font color='red'>解題思路</font>
     需要了解grep用法 
     ．*代表所有字元都可替代
    \`\`\`bash
    $cat anthem.flag.txt | grep picoCTF{.*}
    \`\`\`

### <font size='6px'>題目Packets Primer</font>

![](https://i.imgur.com/1UtgW9q.png)

* <font color='red'>解題思路</font>
    用wireshark打開選擇任一個tcp
    右鍵點擊follow看他的tcp stream裡面就是我們找的flag

### <font size='6px'>題目Redaction gone wrong</font>

![](https://i.imgur.com/B13Ywjp.png)

* <font color='red'>解題思路</font>
    把下載完的pdf點開，發現有一部分是黑的
    ![](https://i.imgur.com/ETJfJoZ.png)
    我們試試將他反白就會發現最後一個是我們的flag

### <font size='6px'>題目So Meta</font>

![](https://i.imgur.com/dvMVJR1.png)

* <font color='red'>解題思路</font>
     二進制打開順便記得用grep查查看
    \`\`\`bash
    $strings pico_img.png | grep picoCTF{.*}
    \`\`\`
    可以找到我們的flag了
    
    
### <font size='6px'>題目shark on wire 1</font>

![](https://i.imgur.com/JLriV5c.png)

* <font color='red'>解題思路</font>
    提示要我們用wireshark以及檢查所有stream
    我們就一個一個檢查，檢查到第六個時找到了答案
    ![](https://i.imgur.com/TmCJGfb.png)
    
### <font size='6px'>題目extensions</font>

![](https://i.imgur.com/xfmzq9o.png)

* <font color='red'>解題思路</font>
    我們vim打開發現一堆亂碼，但開頭顯示png
    代表這有可能是一個png檔，我們將他改副檔名
    便成功找出flag

### <font size='6px'>題目What Lies Within</font>

![](https://i.imgur.com/FheIBKQ.png)

* <font color='red'>解題思路</font>
    提示叫我們找線上decode，那我們就找吧
    找[decode image](https://stylesuxx.github.io/steganography/)
    照片上傳上去flag就出來了

### <font size='6px'>題目MacroHard WeakEdge</font>

![](https://i.imgur.com/5bCz9iB.png)

* <font color='red'>解題思路</font>
    這題好難好麻煩，我看這個人的[解答](https://ctftime.org/writeup/26975)
    我列出幾點我比較不熟習
    1.     $7z -x file(解壓縮)
    2.     ls -la *(可以遞迴顯示)
    3.     echo "string" | base64 -d (解密)
    依序上面三點網址
    [7z](http://note.drx.tw/2008/04/command.html)
    [ls *](https://n.sfs.tw/mymedia/index/10365)
    [base64](https://shengyu7697.github.io/linux-base64/)

## <font size='10px'>General Skills</font>
[**grep指令**](https://blog.gtwang.org/linux/linux-grep-command-tutorial-examples/)
\`\`\`bash
$grep 關鍵字 檔案1 檔案2 ...
$grep 關鍵字 /kali/123.file
$grep 關鍵字 /kali/*.conf #在kali下所有.conf，尋找關鍵字
$grep -i 關鍵字 /kali/123.file #不分大小寫
$grep -n 關鍵字 /kali/123.file #顯示行數
$grep -v 關鍵字 /kali/123.file #反向搜尋除了關鍵字其他顯示
$grep -r 關鍵字 /kali/123.file #遞迴搜尋
$grep -A 1 關鍵字 /kali/123.file #多顯示後一行
$grep -B 1 關鍵字 /kali/123.file #多顯示前一行
$grep -B 1 關鍵字 /kali/123.file #多顯示前後各一行
\`\`\`

[**find指令**](https://blog.gtwang.org/linux/unix-linux-find-command-examples/)

\`\`\`bash
$find / -name "flag.txt" #從根目錄底下搜尋
$find / -name "flag.txt" 2>/dev/null #過濾掉報錯訊息
\`\`\`

### <font size='6px'>題目Big Zip</font> 

![](https://i.imgur.com/3dJD3J3.png)
* <font color='red'>解題思路</font>
    這題解壓縮完有許多txt檔跟資料夾
    要從這麼多資料一個一個找到flag
    是有點難，所以要透過grep來尋找
    \`\`\`bash
    $unzip  big-zip-files.zip
    $grep -r pico *
    \`\`\`
    
### <font size='6px'>題目First Find</font>
![](https://i.imgur.com/bI87fdh.png)
* <font color='red'>解題思路</font>
    此題跟上一題有異曲同工之妙
    解壓縮完看起來很多資料夾跟txt
    我們一樣用grep 遞迴去尋找
    \`\`\`bash
    $unzip  files.zip
    $grep -r pico *
    \`\`\`

### <font size='6px'>題目Based</font>
![](https://i.imgur.com/ZXMGTnd.png)

* <font color='red'>解題思路</font>
     反正就是nc連線過去會出現一堆題目，
     教你分別把二、八、十六進制轉成string
     我們可以用線上轉換器
     [二進制、十六進制to string](https://www.rapidtables.com/convert/number/binary-to-ascii.html)
     [八進制to string](http://www.unit-conversion.info/texttools/octal/)
     我不知道為啥第一個網站沒辦法八進制轉string
     回答完flag就跑出來了

### <font size='6px'>題目mus1c</font>
![](https://i.imgur.com/qOCPXw1.png)

* <font color='red' >解題思路</font>
     老實說這題我是看不懂要幹嘛，
     但提示有講到rockstar這程式語言
     我們就將他給的文件丟上去看看
     [網站](https://codewithrockstar.com/online)
     
     轉換發現看起來像是ASCII
     我們丟上去ASCII to string的[網站](https://codebeautify.org/ascii-to-text)
     發現出現<font color='blue'>rrrocknrn0113r</font>
     轉成<font color='pink'>picoCTF{rrrocknrn0113r}</font>
     就是答案了
    
### <font size='6px'>題目flag_shop</font>

![](https://i.imgur.com/gKHrvc2.png)

* <font color='red' >解題思路</font>
     這題我們先看他的程式<font color='blue'>store.c</font>
     然後看了一下提示，我猜是要把c程式用爆，
     c的int是有[大小限制的](https://openhome.cc/Gossip/CGossip/Datatype.html)
     我們是看看輸入會超過的範圍，他將會產生亂數使我們金額剩餘超大
     便可以買我們的flag了



`,c=`**資安是一場長期戰爭，我想把戰場紀錄下來。**

還記得面試那天，主管提到公司剛上櫃，為了符合法規要求，需要一名專職的資安人員。 在那之前，所有 IT 事務幾乎都由一位資深 MIS 扛下。

> 不過因為專精領域不同，資安並沒有做到很深入，所以需要額外聘請專職。

**雖然代表很多事情都要自己來，但我相信這會是最快速的學習機會。** 抱著這樣的想法，我接下了這份工作。

雖說公司前期的資安設備不多， 但好在沒有對外公開的系統，外部攻擊面相對少。 但這也意味著，真正的挑戰會是 —— **如何讓資安更完整、更制度化。**

這個系列，會記錄我在第一年資安工作的點滴，分享一路上碰到的真實課題：

- **工具導入**：MDR、SOC、DLP、Nessus、ZAP、MFA、特權帳號管理，從零開始到落地。
- **制度推動**：ISO 27001 建置、ISMS 政策制定，以及合規過程的挑戰。
- **教育與演練**：社交工程演練、教育訓練，如何讓同仁真正有感。
- **雲端與裝置管理**：M365、Intune、Entra ID，以及公司手機的安全管理。
- **客戶稽核**：其實最麻煩的，往往是來自大型客戶的一堆資安要求，如何在有限資源下逐一滿足。

接下來的 30 天，我會用「第一年資安工程師」的視角，把真實遇到的問題、解法與心得一一寫下來。

---

**「如果你正準備踏入資安，或已在戰場上打拼，或許能在這系列找到共鳴。」**

---

原文連結：https://ithelp.ithome.com.tw/articles/10374837
`,l=`![/blog-assets/ithome-2025/20171891UXsSIBCW7L.png](/blog-assets/ithome-2025/20171891UXsSIBCW7L.png)

> 是不是以為我要介紹 OWASP？ 今天不打算列一堆「情資平台清單」，而是針對公務繁忙、只能被動收信的資安工程師：只要訂閱幾個可靠來源，人家幫你整理好寄到信箱，這些也都是公開情資的一部分。

## 為什麼要「訂閱」而不是偶爾去逛？

- **早一步知道、少一步風險**：國際 0-day、RCE 或供應鏈事件常在 24–48 小時內快速演變，Email 訂閱能第一時間進信箱。以 The Hacker News 為例，提供即時新聞與週報。([The Hacker News](https://thehackernews.com/search/label/Rss%20feeds))
- **週會能直接用**：「資安人」整理在地案例與觀點，很適合拿來做週會簡報或內部宣導。([資訊安全](https://www.informationsecurity.com.tw/))
- **盡早準備資料**：重大事件發生後，通常幾天內就會被客戶或主管詢問「我們怎麼因應」。我會**先準備一頁式 PPT**放著，必要時直接拿出來講。
  > 例：最近的台積電供應鏈事件； 例：SharePoint 相關漏洞——若新聞指涉 **on-prem 版** CVE，而我們是 **SharePoint Online**，就要在簡報裡說明「由 Microsoft 代維運、修補，影響不同」，同時補上我們的權限與外分享檢查結果。 **「這就是公開情資帶來的第一手提醒：當主管或客戶問起，你能馬上拿出回應。」**

---

![/blog-assets/ithome-2025/20171891Q2irF2N7F1.png](/blog-assets/ithome-2025/20171891Q2irF2N7F1.png)

![/blog-assets/ithome-2025/201718910VgWKVY32o.png](/blog-assets/ithome-2025/201718910VgWKVY32o.png)

## 我訂閱的 3 個來源（以及各自的價值）

### 1) 資安人週報（在地視角）

- **重點濃縮**：整理台灣相關新聞、專欄與活動，適合做「本週摘要」與內部宣導。
- **怎麼拿到**：到官網註冊／訂閱電子報，新內容會寄到 Email。([資訊安全](https://www.informationsecurity.com.tw/))

### 2) The Hacker News（全球視角）

- **更新快、案例多**：新型攻擊、APT、0-day 與緩解建議常第一時間出現，能提早規劃防護。
- **怎麼拿到**：追蹤新聞／RSS／週報，新文會推播到信箱或閱讀器。([The Hacker News](https://thehackernews.com/search/label/Rss%20feeds))

### 3) TW-ISAC／TWCERT/CC（通報與聯防）

- **官方與聯防情資**：TWCERT/CC 維運的 TW-ISAC 與 TVN（Taiwan Vulnerability Note）提供公告、漏洞與預警；屬於**可作為稽核與事件通報依據**的來源。([twcert.org.tw](https://www.twcert.org.tw/tw/lp-103-1.html))
- **背景補充**：TWCERT/CC 是 MITRE 授權的 CNA，能協助指派國內產品的 CVE，公信力佳。([dsp.twse.com.tw](https://dsp.twse.com.tw/public/static/downloads/computerPlanningOperationsDepartment/01-%E5%8F%B0%E7%81%A3%E9%9B%BB%E8%85%A6%E7%B6%B2%E8%B7%AF%E5%8D%B1%E6%A9%9F%E8%99%95%E7%90%86%E6%9A%A8%E5%8D%94%E8%AA%BF%E4%B8%AD%E5%BF%83%28TWCERT%29%E6%9C%8D%E5%8B%99%E4%BB%8B%E7%B4%B9_20211216091733.pdf)、[iThome](https://www.ithome.com.tw/news/146035))

---

> 不是每個人都需要貴鬆鬆的威脅情資平台；**對多數團隊來說，訂閱幾個可靠來源，就足夠你在事件爆發時說得清楚、動得快速**。

**「而這些公開情資，就是最省成本的入門方式，幫助你在第一線把新聞轉成行動。」**

---

原文連結：https://ithelp.ithome.com.tw/articles/10374947
`,p=`![/blog-assets/ithome-2025/20171891eFUriHTRZ2.png](/blog-assets/ithome-2025/20171891eFUriHTRZ2.png)![/blog-assets/ithome-2025/20171891Xm2FaXlRMz.png](/blog-assets/ithome-2025/20171891Xm2FaXlRMz.png)

在一家公司裡，導入資安工具與服務的最大推力，往往來自 **法規要求**（ISO 27001、GDPR、金融業規範）與 **客戶稽核**，再加上長官對安全能力的期待。這些要求就像遊戲裡的任務 NPC：指定你必須拿到某些裝備才能闖關。 平時沒事可以撐著過日子，但遇到 BOSS（法規檢查 / 客戶審查），裝備不夠就會瞬間 Game Over。

---

## 公司常見裝備地圖（快速看表）

![/blog-assets/ithome-2025/20171891VJ2SD5m3Ko.png](/blog-assets/ithome-2025/20171891VJ2SD5m3Ko.png)

- **ISO/ISMS（ISO/IEC 27001）**：不是工具，是「制度＋程序＋文件」的地基。
- **EDR / MDR**：端點偵測與回應；MDR 為 24/7 外包代管。
- **SIEM / SOC**：集中日誌、關聯分析、告警監控。
- **防火牆 / WAF / IDS/IPS**：邊界/應用層防護。
- **VPN / MFA / PAM**：安全連線與特權存取管理。
- **加密 / DLP / 文件控管**：資料不外洩，對應 GDPR/DPA。
- **備份 / 災復**：確保 RTO/RPO。
- **弱點掃描（Nessus / OpenVAS / ZAP）**：ISO 控制項必備證據。
- **滲透測試**：高要求產業常見。
- **社交工程演練 / 教育訓練**：文化與落地的必要動作。
- **雲端安全（CSPM / CASB）**：雲使用普及後的加點。

> 記住：**ISO/ISMS 是任務線，裝備是破關條件**。

---

## 小錢辦大事：先用布甲活下去，再視情況換鐵裝

### 1) 自己管理（先不上託管）：端點防護的起手式

**做法**

- 先上 **EDR 授權**（許多防毒已內建 EDR 能力），由內部處理告警。
- 建立 **最小事件流程**：告警分級 → 快速隔離 → 情資回饋到防火牆封鎖。

**為什麼這樣做**

- **成本友善**：不上 MDR，費用可降一大截。
- **可交付稽核證據**：EDR 安裝覆蓋率、告警處理紀錄、隔離與封鎖憑證。

**何時升級到 MDR**

- 月均告警量 > 你的小組處理能力（例如每人每日>10 則需分析）。
- 需要 **7×24** 監控或客戶硬性要求。
- 曾發生延遲回應導致擴散的事故。

---

### 2) 開源自建 SIEM：用 Wazuh 先把盤子端起來

**定位**

- Wazuh 是常見的開源 **SIEM / XDR** 解法之一，適合預算有限但願意投入時間的團隊。

**優點**

- 省授權費、彈性高，可整合 EDR / Firewall / OS 日誌與弱掃結果。
- 能快速做出 **關聯規則 + 儀表板**，稽核時有畫面與告警證據可交。

**注意事項**

- **門檻**：主機資源、佈署（Server/Agent）、索引/儲存維運與規則調校。
- **人力**：要有人寫/調規則、控噪音、維持可靠度。

---

### 3) 自建：社交工程演練與員工教育訓練

**策略**

> Gofish 開源軟體 簡報自己做，勒索軟體、釣魚郵件、電腦資安

- 題材自己產出：釣魚郵件（假通知、假加班單）、勒索案例分享、軟體下載風險。

**優缺點**

- **優點**：成本近乎零、貼合公司情境、可快速迭代。
- **缺點**：耗時、需準備內容與管控投遞風險（避免影響營運）。

**可交付證據（稽核超好用）**

- 投遞名單與郵件樣本、點擊率/回報率統計、教育簽到與測驗分數、跟進改善清單。

---

## ISO 27001 是任務系統：把技術、流程、人串成主線

ISO/ISMS 不是「再買一個工具」，而是**讓所有裝備有章可循**：

---

## 結語

資安沒有「一套最強裝備」，只有「**當下最合適**」的組合。 先用 **布甲起手** 撐起基本盤。當量能與要求提升，再逐步升級鐵裝——**這才是可持續進化的養成路線**。

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10374848
`,m=`### 畢業後正式踏入資安職涯：Firewall，新手的第一道防線

畢業後正式踏入資安職涯，迎來的第一份正職工作。剛坐下還沒熟悉環境，主管就直接開口：

> 「你會看 Firewall 嗎？」

![/blog-assets/ithome-2025/20171891IQeBuzI90Q.jpg](/blog-assets/ithome-2025/20171891IQeBuzI90Q.jpg)

當下愣了一下，還沒來得及回答，桌上就多了一本厚到嚇人的 Palo Alto 防火牆操作手冊。 **幾百頁的設定、策略、規則說明**，瞬間像是 RPG 遊戲剛創角就被發了一本「防禦指南」。

> 只差沒附註：**請三天內看完。**

![/blog-assets/ithome-2025/20171891bGli5r07gP.png](/blog-assets/ithome-2025/20171891bGli5r07gP.png)

---

## 為什麼 Firewall 是第一道防線？

因為**防火牆就是公司的第一道防線**。 不論是駭客掃描、惡意流量，還是內網員工誤觸奇怪連結，第一個擋下來的就是它。 如果把資安比作城堡，Firewall 就是那道厚重的城門：

- 沒它，城門洞開。
- 配不好，誤擋正常流量，員工立刻抗議。
- 配太鬆，資安事件隨時爆。

---

## 新手的挑戰

對剛入行的新鮮人來說，看防火牆 log 就像看天書；在學校大概知道有哪些名詞，但把「書面」變「實戰」真的不簡單：

- **來源 IP／目的 IP**：一串數字，還要判斷是內部、外部，或是可疑來源。
- **Port number**：常見的 80（HTTP）、443（HTTPS）、53（DNS）還好；遇到冷門 port 就得查清楚是什麼服務、是否為業務需求。
- **Application（App-ID）**：不只 HTTP、DNS，還會辨識各式陌生應用，甚至遊戲與串流流量。
- **Security Rule**：每條 policy 都像一名守衛；你得知道它為什麼放行、為什麼阻擋、由誰建立。
- **NAT**：內外 IP 映射讓流量像披了斗篷，不小心就追錯對象。

最折磨的是——廠內還有一堆陌生機台，協定冷門、流量古怪，第一眼根本看不懂。於是你一邊翻「怪物圖鑑」一邊學判怪：哪些是「正常村民」的日常流量，哪些是「可疑怪獸」在伺機而動；就像在圖鑑上標註弱點一樣，養成快速識別潛在威脅的本能。

---

## 心得

回頭看，那本厚厚的 PA 手冊（Palo Alto Networks），不只是產品說明，而是我在資安職涯遇到的**第一個大魔王**。 熬過去之後，懂得怎麼下規則、怎麼看日誌、怎麼追封包，這些能力後來成了所有工作的基礎。

第一道防線雖然無聊又繁瑣，但就像**新手村的必修關卡**——不練好，後面的大 Boss 根本打不下去。 打敗大魔王後，技能樹彈出一排亮光，**就像打通任督二脈，內力開始源源不絕地流動**。

而 Palo Alto 作為大廠牌，設定相對複雜，卻也因此成為最好的磨刀石。 學會這一套後，再去碰其他防火牆（Fortinet、Check Point、Cisco FTD/ASA），就像換副武器一樣，很快就能上手。

---

> 這個系列沒有固定進度表，都是當天想到什麼就寫什麼。 本來今天想談 ISMS，但還是決定按戰鬥流程從 Firewall 開始。 歡迎分享你的新手經歷，一起交流！

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10375208
`,C=`在資安工程師的世界裡，敵人不只有勒索病毒、APT、釣魚信…… 還有一種藏在辦公室抽屜、共用槽的恐怖怪物：

**「ISMS 文件」**。

如果把防火牆當作是鐵甲、EDR 當作神器， 那 ISMS（資訊安全管理系統）就是一本「**葵花寶典**」。 只不過這本就像尚未自宮前的無字天書，是**厚到能壓死人**的一疊政策、流程、紀錄表單。

![/blog-assets/ithome-2025/20171891H2Ajv5O8hb.jpg](/blog-assets/ithome-2025/20171891H2Ajv5O8hb.jpg)

---

## 前言：劇情背景

在我們公司，以前的 ISMS 文件全都塞在一階「資訊安全政策」裡， 就像遊戲剛開服時，只有一張大地圖，任務全擠在告示板上。

但隨著法規和客戶審查壓力越來越大，高層突然下令：

> 「把整套 ISMS 補齊！」

於是，身為新手資安工程師的我，正式踏上了這條修煉之路。

---

## 初遇：文件海的第一口鹹水

於是我想知道，到底「補齊」要補什麼，就決定深入研究 ISMS。 結果一翻才發現，原來不止一階，還有二階、三階、四階…… 瞬間就像誤觸彩蛋副本，越看越覺得自己等級不夠。

我一臉黑人問號：

> 「這是……啥？一階、二階、三階、四階文件？ 感覺要打到王城才看得懂的東西？」

- 角色等級：Lv.1 新手工程師
- 任務列表：Annex A 上百條控制措施
- 任務說明：一行行專業名詞（資產分類、風險評鑑、供應商安全）
- 任務道具：堆滿資料夾的 Word + Excel 表單

很快我就悟了： **這不是「讀完就懂」的文件，而是「看不懂才正常」的文件。**

---

## 文件怪物圖鑑

玩了一陣子後，我才發現文件其實分成四階，就像副本由大到小：

1. **政策（Policy）** – 主線劇情。公司高層大喊：「我們要保護資訊安全！」
2. **規範（Standard / Guideline）** – 裝備圖鑑。密碼要幾碼？權限怎麼分？
3. **程序（Procedure）** – 副本任務。事件發生時，誰要補血、誰要拉怪。
4. **紀錄（Record）** – 存檔紀錄。打王了？請截圖簽名，沒有證據一律不算。

---

## 第一次挑戰的痛點

1. **字太硬** 條文滿滿「應、需、必須」，讀起來比武功祕笈還難懂。 看到「應實施風險評鑑」時，我腦袋浮現的不是方法，而是：「這是謎題嗎？提示呢？」
2. **看不出關聯** 文件寫「定期審核存取權限」，我一開始以為那是 HR 的工作，結果後來才懂： 它跟我每天查的 log 直接掛勾。
3. **填表焦慮** 《資產盤點表》、《風險評鑑表》一拿到就想 Alt+F4。 想像一下，要為每台電腦寫價值和威脅，半夜還在糾結：「這台舊筆電算高風險嗎？萬一被偷呢？」
4. **補齊壓力** 發現我們缺二、三、四階文件，感覺像被告知： 「副本還有三章沒解鎖，請玩家自行補劇情。」 寫太嚴 → 每天自己卡關；寫太鬆 → 稽核員直接秒殺。 到最後才懂，這些文件如果沒拿捏好，不是防護盾，反而會變成自己設下的陷阱。

---

## 小攻略：如何不被文件秒殺

- **先看大地圖，不要迷路** → 把「P-D-C-A 循環」記熟：Plan＝風險評鑑、Do＝執行程序、Check＝審核紀錄、Act＝改善政策。 就像遊戲的循環任務系統，懂這個才不會迷路。
- **把文件對應到日常工作** → 防火牆 Log 保留一年 → Annex A.12.4。 → 開啟 MFA → Annex A.9.4。 → 設定 EDR 事件回應 → 對應「事件處理程序」。 這樣一來，文件不再只是紙上談兵，而是你的日常任務手冊。
- **別一口氣硬啃** → 文件太厚，像打大型副本，得拆章節慢慢推。 先從自己負責的區域開始，例如「網路安全」，推完再挑戰「人員安全」。 而且可以「回溯舊副本」：遇到新情境，反推回去補一個政策／程序，讓系統更完整。

---

## 結語：地獄，其實是新手教學

第一次看 ISMS 文件，真的像掉進地獄副本。 但後來才懂：它不是要嚇死你， 而是提醒你：

**資安不是只有裝備（工具），還要有規則（制度）和紀錄（證據）。**

就像打遊戲不能只有手速，還要會看地圖； 同理，資安工程師不能只有防毒和弱掃，還要能看懂政策文件。

因為最後 Boss 不是駭客，而是—— **稽核員（GM = Game Master，線上遊戲裡專門抓外掛、檢查你有沒有照規矩玩的管理員）。**

---

> 準備迎來這篇系列，第一個假日.. 這假日還要回老家，希望能夠可以完賽

---

原文連結：https://ithelp.ithome.com.tw/articles/10375130
`,h=`我每次 Python 寫的程式都被 EDR 擋住 :D 還有一些機台軟體，每次安裝都會被隔離，有時候還誤以為「安裝失敗」，結果白白浪費好幾個小時在 debug。 這就是所謂的——神器雖好，但用起來一樣會先誤傷自己。

在資安工程師的領域中，除了防火牆這種鐵甲之外，還有一種更高階的裝備： **EDR（Endpoint Detection & Response）**。

如果防毒是站在門口的保全，專門認人臉、擋已知壞人； 那 EDR 就像是帶著放大鏡的警探，會盯著端點的一舉一動， 不只擋住可疑行為，還會幫你回放「犯案過程」，甚至一鍵把嫌犯抓起來。

---

## 為什麼有了防毒還需要 EDR？

> 防毒軟體就像舊時代的鎖頭，只能擋「已知小偷」。 但駭客不會乖乖排隊，他們會換裝、變身、用新招。 **EDR 能監控可疑行為、追蹤入侵路徑、事後還能復盤**，補上防毒缺不了的那一塊。

防毒負責「已知惡意檔案」，EDR 則補上「未知行為偵測 + 即時回應」。 兩者搭配起來，才能真正做到事半功倍。

---

## 初次使用體驗：神器也會亂叫

第一次部署 EDR，感覺很像拿到一把高階武器——帥氣，但也很吵。 因為一打開，它就瘋狂丟警報：

- **某主機執行可疑 PowerShell 指令**
- **某使用者開啟了不明巨集**
- **某電腦連上怪怪的 IP**

警報一多，我email完全不想打開...

更慘的是，當我在寫 Python 自動化腳本， 或工程師在安裝機台軟體時， EDR 常常誤判成惡意行為，把程式直接擋掉。 結果我們還得花時間排查：「到底是安裝失敗？還是 EDR 又出手了？」 這就是 EDR 的副作用——神器沒調教，先誤傷自家隊友。

---

## 技能樹解析

> 只用一家EDR，但我知道現在EDR有些會整合很多功能 以下是網路上的一些資料，有說錯再麻煩糾正:D

EDR（Endpoint Detection & Response）的核心功能通常圍繞端點上的持續監控、威脅識別與處置。以下是主要功能解析，基於標準定義並擴展用戶提及的沙箱與 USB 管控功能。這些功能並非所有 EDR 解決方案皆完全相同，視供應商而異，但以下為常見分類：

1. **偵測（Detection）** 識別端點上的異常行為，例如可疑 PowerShell 指令、Python subprocess 模組使用，或不尋常的網路連線。這通常透過行為分析、簽章比對和機器學習實現，目的是及早發現已知或未知威脅。
2. **回應（Response）** 自動或手動處置偵測到的威脅，例如隔離受感染主機、封鎖惡意程式，或終止可疑進程。這有助於快速遏止攻擊擴散。
3. **調查（Investigation）** 提供事件完整時間線和詳細記錄，包括檔案修改、進程呼叫和網路流量分析。像重播入侵過程，讓資安團隊還原攻擊路徑並收集證據。
4. **威脅獵捕（Threat Hunting）** 主動搜尋潛在風險，使用自訂查詢語法（如 IOC 指標）調查環境，例如針對異常 Python 環境或潛伏惡意程式進行深入掃描。

EDR 的功能不僅限於以上四項。許多現代 EDR 解決方案還整合額外能力，以提升防護效能。例如：

- **沙箱分析（Sandboxing）**：這是用戶提及的功能，用來將可疑檔案或程式隔離在虛擬環境中執行，觀察其行為是否惡意，而不影響實際端點。有些 EDR（如 Cisco Secure Endpoint 或 Bitdefender GravityZone）內建或雲端沙箱，能自動上傳檔案進行測試，偵測零日攻擊或進階持續威脅（APT）。 然而，沙箱並非所有 EDR 的標準核心功能，而是常見的擴展，尤其在與 EPP（Endpoint Protection Platform）結合時出現。
- **USB 管控（USB Device Control）**：這是用戶提及的額外功能，用來監控和管理 USB 裝置的存取權限，防止資料外洩或惡意裝置插入。許多 EDR 解決方案提供 USB 管控，能設定讀寫權限、封鎖特定裝置，或記錄 USB 使用行為，以強化端點安全並符合合規要求。 這功能通常可按裝置 ID、供應商或類型進行細粒度控制，適用於 Windows 等作業系統。
- **檔案隔離與還原（File Isolation and Remediation）**：自動隔離可疑檔案，並提供一鍵還原或刪除功能。
- **整合 AI/機器學習**：用於預測性偵測，減少誤報率，例如優化對 Python 等開發工具的判斷。
- **端點隔離與網路控制**：不僅封鎖程式，還能斷開端點網路連線，防止橫向移動。

## 神器要配合，才不會反噬

EDR 的確是神器，但如果不懂調整，它只會變成一把會亂叫的裝備。 真正能駕馭它的人，才算是從新手村畢業。

因為資安的戰場不是只有病毒， 還有那些會偽裝成「正常使用者」的怪物。 所以——**防毒負責守門，EDR 負責破案，兩者搭配才能事半功倍。**

> 假日寫得有點水:D

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10375289
`,g=`本來以為進公司，掛上「資安工程師」這個名號後，我的世界就是防火牆、EDR、弱點掃描，跟駭客在暗網對決。 結果現實卻是：**IT 部門人少，很多雜事也會落到我身上。**

> 假日，寫一篇單純工作心得?

---

## 🎭 多重身份切換

- 早上 9:00 → 幫忙看 ERP Server 卡住，重啟服務。
- 上午 10:30 → User Line 我：「我電腦怎麼又不能連印表機？」
- 中午 12:00 → 正在吃飯，接到電話：「Wi-Fi 斷線，產線要刷卡不能進。」
- 下午 14:00 → 資安角色上線，跑 Nessus 弱點掃描，結果發現 Windows Patch 一堆沒補。
- 下午 15:30 → 突然被叫去查 AD 帳號權限，順便新增DNS設定
- 晚上 18:30 → 正準備下班，Teams 叮一聲：「這台電腦怎麼開不了，能不能來看一下？」

瞬間感覺自己像在演《奇異博士》，不斷在不同宇宙間切換身份。

---

## IT & 資安的模糊邊界

在中小企業，IT 和資安往往沒有明確界線。 有時候我一邊在思考 ISO 27001 條款，下一秒就蹲在地上幫人插網路線，或打開 DNS Manager 幫忙調 Zone Record。 甚至同事看到我走過來，第一句話常常不是「你最近在跑什麼專案？」 而是：「欸，你有沒有空？我的電腦怪怪的。」

---

## 自嘲的技能樹

如果把我的工作畫成遊戲技能樹，大概會是這樣：

- **資安主線任務**：弱掃、補丁、SIEM、EDR
- **IT 支線任務**：印表機排障、Wi-Fi 維護、ERP babysitter、AD & DNS babysitter
- **隱藏成就**：幫同事解釋為什麼 Teams 開不了，然後順便推廣資安意識

---

## 總結

雖然偶爾會覺得「這真的是資安工程師該做的嗎？」 但也因為這樣，我更了解整個 IT 環境的底層細節。

> 假日就產出不多:D 明天繼續努力

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10375678
`,d=`想像一下：你的船在風平浪靜時就開始漏水——你會怎麼辦？在資安的世界裡，公司就像一艘航行中的大船，弱點就是那些你看不見的裂縫。不先檢查，等到海水灌進來，可能就來不及了。也因此稽核、法規、甚至客戶審查，總會要求：**「你們要定期做弱點掃描！」**

---

## 為什麼要弱點掃描？

很多人以為弱點掃描只是「檢查一下有沒有漏洞」。但在資安工程師眼裡，它其實有幾個關鍵任務：

1. **稽核必備**：ISO 27001 與各式資安/合規要求，都要能證明「我們有持續檢測並改善」。
2. **風險評估**：先知道洞在哪，才能在年度風險評鑑裡說清楚、排得出優先順序。
3. **決策依據**：報告是給主管/老闆評估是否投入資源用的（最後通常還是自己補 ）。
4. **成本控制**：事前修補的成本，通常遠低於事件爆發後的處置與商業損失。
5. **意識提升**：以報告帶動跨部門的安全討論與改善文化。

這些要素環環相扣，讓弱點掃描不只是例行公事，而是防禦體系的核心。

---

## 弱點掃描的分類

弱點掃描依「面向」分門別類；就像看診，要看骨頭會拍 X 光，不會去做胃鏡。

- **Web 弱掃**（OWASP ZAP、Burp Suite、Acunetix）： 專攻網站應用程式，找 SQL Injection、XSS 等問題。
- **網路／系統層弱掃**（Nessus、OpenVAS／GVM、Qualys/VMDR）： 從 OS、開放 Port、服務版本、組態下手，一次掃滿整個網段。
  > **Nessus 定位**：主力在主機/網路層；具備基礎 Web/CGI 檢查，但若要做完整 Web 掃描，建議用專業 DAST（ZAP／Burp／Acunetix），或採用 **Nessus Expert 的 WAS 模組／Tenable WAS**。
- **端點弱掃**（EDR／Agent）： 檢查電腦與伺服器的修補狀態與已知漏洞。
  > 現在有些 EDR 甚至能直接派送修補的 Patch。

快速對照表：

| 掃描類型 | 適用環境 | 推薦工具 |
| --- | --- | --- |
| Web 弱掃 | 有對外網站服務 | OWASP ZAP、Burp Suite、Acunetix |
| 網路層弱掃 | 內網有大量 Server | Nessus、OpenVAS／GVM、Qualys/VMDR |
| 端點弱掃 | 擔心用戶端未更新 | 各類 EDR／Agent 型工具 |

- 有對外網站服務 → **Web 弱掃必跑**（例行可用 ZAP，需要更完整可用 Acunetix／Tenable WAS）。
- 內網一堆 Server → 用 **Nessus／GVM** 或 **Qualys** 做盤點與定期掃描。
- 擔心員工電腦沒更新 → 用 **端點掃描**補刀。

**開源起步**：**ZAP**、**Greenbone Community（GVM 社群版）** 安裝不難、教學多、可輸出報告；成本低、社群活躍，很適合小團隊自建。

---

## 外包勇者 vs 自建工匠

公司決定要做弱點掃描後，接著就是經典二選一。不管哪種選擇，共通痛點都是：**報告再漂亮，修補還是得自己做**（除非另購代修服務）。

**外包勇者**

- **特點**：交給資安廠商，拿回厚實完整的 PDF 報告。
- **優點**：專業度高、報告精美，稽核官一看就懂。
- **缺點**：價格不菲；若未加購代修，仍需自家團隊落地修補。

**自建工匠**

- **特點**：自己買 **Nessus Pro** 或搭 **GVM** 規劃週期與範圍；也可採用雲端掃描平台（如 **Qualys/VMDR**）但由你們自行規劃與執行。
- **優點**：彈性大、頻率可控，成本通常較低。
- **缺點**：需投入人力維護工具與流程；修補依然在自己身上。
  > 類似先前說的「布甲 vs 鐵裝」：**GVM**、**ZAP** 都是免費開源，安裝不難、教學很多，也能輸出報告；新手跟著官方文件或 YouTube 教程就能上手。

無論選勇者還是工匠，最後都會發現：**報告只是序章，真正的挑戰在於「補」**。

---

## 結語：補洞才是真正考驗

弱點掃描像遊戲裡的「地圖探索」。找到紅點不難，難的是**誰要衝進去打怪、誰來收拾戰場**。

很多公司停在「我們有做掃描」這一步，卻忘了下一關才是關鍵：

- 排定修補時程
- 依風險分級決定優先順序
- 定期回報改善紀錄

弱點掃描看似帥氣，但資安工程師最常掉的血，不是在掃描那一刻，而是在**加班Patch**的過程。等系統穩穩的，你會發現：一切都值得。繼續你的資安冒險吧！

---

原文連結：https://ithelp.ithome.com.tw/articles/10375763
`,S=`> 原本以為微軟不就 **Word、Excel** 而已？ 公司導入 M365 才發現：微軟的 **Security** 其實很全。 先聲明我沒買它股票（笑），但也必須說：**全＝好複雜(上手難)**。 有講錯再請修正啦~

> 明天會講微軟的**Zero Trust**到底在搞甚麼!

## Microsoft Security 家族速覽

- **Microsoft Entra**：身分與網路存取（Entra ID、MFA、CA、PIM、Identity Protection…）
- **Microsoft Defender**：威脅防護 / XDR（Defender for Endpoint / Office 365 / Identity / Cloud Apps、Defender for Cloud、Defender for IoT、EASM…）
- **Microsoft Intune**：端點與 App 管理（合規、MAM、端點安全原則，與 MDE/CA 聯動）
- **Microsoft Purview**：資料保護與合規（敏感度標籤、DLP、eDiscovery、Audit、Records、Insider Risk）
- **Microsoft Sentinel**： **SIEM + SOAR**
- **Microsoft Priva**：隱私與個資請求（DSR、隱私風險）
- **橫向能力**：**Secure Score / Defender XDR / Security Copilot**（態勢、事件關聯、AI 協助）

## 主要 M365 安全性方案分類

身分識別與存取管理、防護（威脅防禦）、資訊保護、端點安全，以及雲端安全性。

---

### 1) 身分識別與存取管理（門口保全）

- **Microsoft Entra ID（原 Azure AD）**：公司大門的門禁系統。管帳號、群組、應用授權；開啟 **MFA**、**條件式存取（CA）**、**封鎖舊式驗證**（POP/IMAP/SMTP AUTH/Basic），才像真的有保全在看門。
- **Entra ID Protection（風險式原則）**：偵測異常登入（異地／非常用裝置／已知洩漏帳密），必要時自動提高驗證強度或直接阻擋。＊
- **Privileged Identity Management（PIM）**：高權限 **Just-In-Time**（臨時升權＋審批＋逾時收回），讓全域管理員不常駐。＊
- **Passwordless**：Microsoft Authenticator、**FIDO2**、**Windows Hello for Business**，把密碼退居備援。
- **SSPR／Access Reviews**：**自助重設密碼**與**存取複核**，把帳號生命週期與權限健檢自動化。

> 上面這些都是 **Entra ID** 的內容；基礎沒打好，後面所有 M365 安全都進不去。依公司架構（純雲、混合 AD、B2B 協作）設計基線，別忘了 **兩個 break-glass 帳號**（長密碼、監控、從 CA 排除）與**全域封鎖舊式驗證**。 ＊註：Entra ID Protection／PIM 等屬進階功能，通常需要 **P2** 授權。

![/blog-assets/ithome-2025/20171891QaAr1hc8Lf.png](/blog-assets/ithome-2025/20171891QaAr1hc8Lf.png)

---

### 2) 威脅防護（城牆＋陷阱）

> Q：**Microsoft Defender 跟家用的是一樣的嗎？** A：不一樣。家用的「Microsoft Defender」是**個人/家用防護 App**；下面列的是**企業級 Defender 家族**（for Endpoint/Office 365/Identity/Cloud Apps…），有 **EDR、威脅情報、進階獵威、事件關聯** 等企業功能與管理主控台（security.microsoft.com）。

- **Microsoft Defender（企業）**：一套可串聯的防線，從**端點 → 信箱/協作 → 身分 → 雲端 App** 接力應戰。
- **Exchange Online Protection（EOP）**：信件進租戶的第一道關卡，**內建反垃圾／反惡意** 的基礎過濾。
- **Defender for Office 365（MDO）**：信箱與協作的保鑣；**Safe Links／Safe Attachments**、進階反詐騙，補上釣魚與**零時差（0-day）**。
- **Defender for Endpoint（MDE）**：端點 **NGAV + EDR**，外加 **ASR（攻擊面縮減）**、弱點曝險/修補建議、隔離與自動修復。
- **Defender for Identity（MDI）**：專盯 **On-prem AD** 的側門攻擊（Pass-the-Ticket、橫向移動等），像在走道埋紅外線。
- **Defender for Cloud Apps（CASB）**：雲端應用的交通警察；**Shadow IT** 探勘、OAuth App 風險、即時會話控管（可搭**條件式存取**）。

> 補充：**信箱的「垃圾信/惡意信」基礎防護主要由 EOP 負責；Defender for Office 365 是在 EOP 之上提供進階釣魚與 0-day 防護。**

## ![/blog-assets/ithome-2025/20171891WRgLvFHTaZ.png](/blog-assets/ithome-2025/20171891WRgLvFHTaZ.png)

---

### 3) 資訊保護（倉庫鎖＋盤點表）

- **Microsoft Purview**（資訊保護 + DLP + 治理 + 合規）：
  **資訊保護（敏感度標籤／加密）**：在文件與郵件貼「內部／機密」等標籤，可強制加密、限制轉寄/外傳，亦可條件式自動套用＊。
- **資料外洩防護（DLP）**：偵測信用卡/個資等敏感資訊並採取動作（警告、封鎖、加密）；涵蓋 Exchange、SharePoint、OneDrive、Teams，亦可延伸到端點＊。
- **治理與合規**：保留/刪除原則與記錄管理（Records）、審核追蹤（Audit）、電子蒐證（eDiscovery）、通訊稽核與**內部風險管理**（Insider Risk），讓「誰、何時、對什麼做了什麼」有跡可循。

＊註：部分進階功能（如自動標籤、Endpoint DLP、eDiscovery Premium、Insider Risk）需較高階授權。

![/blog-assets/ithome-2025/201718910zAiHjnhoM.png](/blog-assets/ithome-2025/201718910zAiHjnhoM.png)

[微軟 Purview 文件](https://learn.microsoft.com/zh-tw/purview/purview)

---

> 再來幾天稍微講一下各別產品是在做啥吧?

---

原文連結：https://ithelp.ithome.com.tw/articles/10375925
`,u=`### 前言

> 講到 ZT（Zero Trust），就會想到大學時期的大專生計劃，我還拿這個當主題，但後來沒過

昨天說到 M365 不只是辦公室套件，今天要聊聊現在最流行的資安策略：**Zero Trust（零信任）**。 一句話總結：**「永不信任，始終驗證」**

![/blog-assets/ithome-2025/20171891gAGsA9HlG5.jpg](/blog-assets/ithome-2025/20171891gAGsA9HlG5.jpg)

---

### 1. 什麼是 Zero Trust？

- 不是單一產品，而是一套 **安全理念＋實作方法論**。
- 三大原則：
  **明確驗證（Verify explicitly）** → 每次登入都要檢查身份、裝置狀態、地點、異常行為。
- **最低權限存取（Least privilege access）** → 用到什麼權限就給多少，Just-in-time / Just-enough。
- **假設有缺口（Assume breach）** → 預設系統已經被滲透，重點是降低橫向移動的風險。

---

### 2. Zero Trust 的六大支柱

零信任拆成六大面向，組合起來就像一個完整的安全堡壘：

![/blog-assets/ithome-2025/20171891fc37LuSgR7.png](/blog-assets/ithome-2025/20171891fc37LuSgR7.png)

1. **身分（Identities）** → 誰在存取？帳號驗證、MFA、風險評估。
2. **端點（Endpoints）** → 從哪台裝置來？裝置合規性、Defender for Endpoint 偵測風險。
3. **應用程式（Applications）** → 存取哪些系統？SSO、Shadow IT 管控、條件式存取。
4. **資料（Data）** → 保護公司最重要的資產，Purview 敏感度標籤、DLP、自動加密。
5. **網路（Network）** → 確保傳輸過程安全，微分段、全流量加密、ML 偵測。
6. **基礎設施（Infrastructure）** → 後端伺服器與雲端服務，JIT 權限、異常行為即時阻擋。

---

### 3. 為什麼微軟版本的 Zero Trust 特別？

- 現代工作環境已經不再有「安全邊界」這種東西： 遠端上班、個人筆電、手機、跨組織協作，全部都是風險點。
  > 想想疫情的時候，大部分的人都居家上班 台 X 電，資料就是遠端時候被拍照！
- 微軟的優勢在於：它手上握有 **Entra ID（身份）、Intune + Defender for Endpoint（端點）、M365 全家桶（應用）、Purview（資料）**，幾乎能把六大支柱全部串起來。
- 簡單講：**你的帳號、電腦、郵件、雲端文件，微軟都有工具幫你驗證與控管。**

![/blog-assets/ithome-2025/20171891oVDsOSVmud.jpg](/blog-assets/ithome-2025/20171891oVDsOSVmud.jpg)

---

### 4. 零信任成熟度模型

零信任不是一蹴可幾，而是有不同的階段。分成 **傳統、進階、最佳** 三種層次，套用到六大支柱來看：

#### 身份（Identity）

- **傳統**：地端 AD，沒有 SSO，風險看不到。
- **進階**：混合身分、MFA、BYOD 也能套 DLP。
- **最佳**：即時風險分析，走向無密碼驗證（FIDO2、WHfB）。

#### 端點（Endpoint）

- **傳統**：電腦要插公司網路才算安全。
- **進階**：Intune、條件式存取檢查合規性。
- **最佳**：Defender for Endpoint 監控風險，異常就封鎖。

#### 應用程式（Applications）

- **傳統**：VPN 或內網存取。
- **進階**：雲端應用 SSO，開始管 Shadow IT。
- **最佳**：最低權限 + 持續驗證。

#### 基礎設施（Infrastructure）

- **傳統**：權限人工分配，VM 分散管理。
- **進階**：工作負載監控、JIT 權限。
- **最佳**：自動化存取分段，異常即時阻擋。

#### 網路（Network）

- **傳統**：內網平坦，流量未加密。
- **進階**：微分段、內網加密。
- **最佳**：全流量加密 + ML 偵測可疑流量。

#### 資料（Data）

- **傳統**：只靠邊界控制，檔案離開公司就失控。
- **進階**：敏感度標籤、DLP。
- **最佳**：AI 自動分類，標籤 + 加密 + 追蹤共享。

**換句話說，從「誰都能進公司大門」 → 「有守衛＋刷卡」 → 「還要人臉辨識＋AI 偵測你是不是在裝乖」的進化。**

---

> 越寫越像業配了…😅 不過微軟的好處就是：工具都在 M365 裡，剩下的就是你該如何去整合。 **「零信任不是不相信同事，而是幫大家多一層保險。」**

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10376085
`,E=`## 前言

昨天講了 Zero Trust 的六大支柱，今天要挑一個大家最有感的：**資料（Data）**。 因為對公司來說，伺服器壞了可以重建，但 **資料外洩** 可能直接 GG。

> 這邊先聲明，我今天不是要聊什麼 3-2-1 備份法（3 個備份、2 種不同媒介、1 個異地保存），改天有機會再分享。今天的主題不是「怎麼救回資料」，而是「怎麼防止資料飛出去」。

想像一下：

> 一封 Excel 被傳到外部，裡面有上萬筆客戶電話與身分證字號。 你覺得新聞標題會寫「電腦壞掉」？還是「XX 公司洩漏個資」？

再想一個場景：

> 公司沒有禁止員工使用 Line、Google Drive、Gmail。 一名快離職的員工，被挖角時需要帶走設計圖，他只要一個滑鼠拖曳，就把檔案丟進 Line，**公司可能瞬間損失數千萬**。

在 Zero Trust 框架中，「資料（Data）」支柱強調 **分類、加密、可控**，而 DLP 就是實現這一點的關鍵工具。根據最新報告，2025 年 AI 驅動的攻擊（像是深偽、或自動化資料竊取）讓資料外洩風險增加了 15%。這意味著公司更需要關注「資料在移動中的保護」。

---

## 為什麼需要 DLP（Data Loss Prevention）？

DLP 的核心目標：**避免資料外洩、濫用或流向錯誤的人**。

近年來的統計數字：

- 一家公司因為資料外洩，平均損失超過 **400 萬美元**（全球平均約 444 萬美元，美國更高達 1022 萬美元）。
- 完全復原平均需要 **100 天以上**（實際平均識別 + 遏止時間約 277 天）。
- 而且只有不到 **1/5 的企業能真正恢復**（接近報告中的 12% 完全恢復率）。

這些數字背後，代表的不只是 IT 成本，而是 **商譽與客戶信任的流失**。

造成外洩風險的幾個趨勢：

- **邊界消失**：資料已經不只在內網，還散落在雲端、手機、筆電。
- **遠距辦公普及**：疫情後，檔案經常被存取在私人設備。
- **法規壓力**：GDPR、個資法、ISO 27001:2022 都要求「證明你有保護機敏資料」。

> 甚至連客戶都會有相關規定，要保護他們資料

而實務上，DLP 的落地往往分為四個階段：

1. **通知（Notification）** → 提醒員工有風險，培養正確行為。
2. **可視性（Visibility）** → 盤點哪些資料最敏感、流向何處。
3. **阻止（Prevention）** → 在風險發生時，主動擋下來。
4. **修復（Remediation）** → 調整流程，避免再次發生。

常見風險場景：

- 員工寄信夾帶機密檔案到 Gmail
- USB 隨手插，整包資料 copy 帶走
- 用 ChatGPT / 外部網站貼了公司內部程式碼
- 離職員工還能登入下載舊資料

2025 年的新趨勢：**「影子 AI」**（未經授權的 AI 工具使用），導致資料外洩事件增加 20%，因為員工常不小心將機敏資料輸入 ChatGPT 等外部平台。這跟前陣子 **Grok 4 外洩事件**、早期 GPT 被濫用的案例，都說明了 **AI 場景下的 DLP 更關鍵**。

---

## 市面上常見的 DLP 型態

DLP 大致可分成三個面向，每一種都有應用場景與限制：

1. **一般型 DLP**
  - 特點：管控 USB、郵件、印表機等資料流通途徑。
  - 應用：最貼近傳統 IT 環境，覆蓋面廣。
  - 挑戰：政策需要長時間訓練與調整，容易誤判。
    > 有時候只是想寄個午餐菜單，卻也被擋下來。
2. **雲端整合型 DLP**
  - 特點：與雲端郵件、雲端硬碟、協作平台緊密整合。
  - 應用：適合大量使用 SaaS 的組織，政策可跨平台套用。
  - 挑戰：依賴雲端供應商功能更新，政策彈性受限。
3. **輕量型 DLP（DLPP / 在地方案）**
  - 特點：偏重浮水印、檔案追蹤、操作記錄。
  - 應用：符合稽核與合規需求，重點在「有跡可循」。
  - 挑戰：較偏重內部資料流向，對跨境、跨平台管控有限。

不論是哪一種，**最難的不是工具，而是內部如何定義什麼才算「機敏資料」**。

另外值得注意：Email 仍是資料外洩的主要管道（佔超過 30% 事件），因此「郵件 DLP」常被獨立出來。近年也有更多方案開始與 **SASE（Secure Access Service Edge）** 結合，讓 DLP 可以涵蓋跨境雲端流量，成為完整的安全架構一環。

---

## 現在 DLP 的通用能力

現代 DLP 已經不只是關鍵字比對，而是結合更多技術來降低誤判與漏判，例如：

- **精確資料比對（Exact Data Matching, EDM）**：把資料庫裡的客戶名單轉成「指紋」，比對外洩內容是否一致。
- **文件指紋（Document Fingerprinting）**：上傳一份範本（例如合約），即使檔案被改寫也能偵測出來。
- **光學字元辨識（OCR）**：分析影像、PDF、截圖，把裡面的文字抽取出來。
- **使用者行為分析（UEBA）**：不是只看檔案，而是觀察「人」的行為（例如員工半夜大量下載檔案 → 風險分數拉高）。
- **AI/ML 分類**：利用機器學習自動判斷異常模式，把誤報率降到 5% 以下。

這些能力已經成為 **業界 baseline**，換句話說，如果一套 DLP 工具連 OCR、行為分析都沒有，就很難稱得上是「新一代方案」。

---

## DLP 的落地挑戰

- **誤判 vs 漏判**：太嚴格會影響員工工作，太鬆又擋不住。
- **教育問題**：員工常抱怨「為什麼我要多點這一步？」。
- **整合難度**：傳統 DLP 偏地端，但現代人手一支手機，行為難以全面限制。

例如：員工用 **私人手機拍照帶走設計圖**，這是傳統 DLP 完全無法偵測的。 因此許多公司會先導入 **浮水印／追蹤型方案**（如 IST），至少先做到「有跡可循」，再慢慢推進完整 DLP。

報告顯示，2025 年遠距辦公導致 **45% 外洩來自個人設備（BYOD）**。這也呼應 Zero Trust 的精神：DLP 必須與 **身分驗證、裝置合規** 整合，才能真正落地。

---

> 防火牆擋住的是「外面的人」， DLP 要擋的，卻是「裡面的人」。 而在 2025 年，DLP 也不只是「檔案不能帶走」的工具， 更是 **企業數位轉型、AI 時代下，守住信任最後一道防線的關鍵**。

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10376246
`,P=`昨天我們討論了**資料（Data）**，這是企業最擔心外洩的核心資產。要有效守護資料，下一步必須確認：**員工是用什麼裝置來存取這些資料**。

想像一下：一台多年未更新的 Windows 筆記型電腦連上公司網路，充滿漏洞且未安裝 EDR（端點偵測與回應），攻擊者早已潛伏其中。**即使資料保護再嚴密，也擋不住一台失守的裝置**。

---

## 為什麼需要管理裝置？

- **BYOD 風險**：員工自帶手機或筆電雖然方便，但可能未安裝防毒軟體、未加密或未更新，增加安全隱患。
- **裝置遺失導致外洩**：未啟用全碟加密的筆電遺失，等於直接將資料拱手讓人。
- **漏洞與威脅**：未套用補丁或未部署 EDR，等於在內網開啟一道後門，讓攻擊輕易擴散。

---

## 企業如何落實裝置管理

### MDM（Mobile Device Management，行動/端點裝置管理）

以 **Microsoft Intune** 為例，這是常見的 MDM 工具，與 Microsoft 365 生態高度整合，從註冊到政策執行、應用程式發佈與報表，都能在同一平台完成。

- **註冊與接管**：支援 Windows Autopilot、Android Enterprise 或 Apple ADE；裝置一登入公司帳號，即自動納管。
- **合規性政策**：強制螢幕鎖定、磁碟加密（BitLocker for Windows / FileVault for macOS）、作業系統安全更新，以及安全開機機制。
- **應用程式政策**：自動部署 Teams、Outlook 或公司專屬 App，並封鎖未經授權的應用程式。
- **不合規即阻擋**：如果裝置未通過政策檢查，就無法存取郵件、OneDrive 或 ERP 等系統。

### 條件式存取（Conditional Access）

同時評估「**使用者身分 + 裝置狀態**」，整合 Microsoft Entra ID（前 Azure AD）：

- 合規且受管裝置 → 直接允許存取。
- 陌生或不合規裝置 → 要求 **MFA（多因素驗證）**、僅允許 **Web 限制存取**，或直接封鎖。
- 針對行動裝置，建議啟用 **Require approved client app** + **Require app protection policy**，確保僅使用經核准的應用程式，並保護其中的資料。

### 磁碟加密與資料防護

- **BitLocker（Windows）** 或 **FileVault（macOS）**：確保裝置遺失時，資料無法被讀取。
- **DLP（Data Loss Prevention，資料遺失防護）**：限制 USB 傳輸或第三方雲端上傳；檔案僅允許儲存到 OneDrive for Business 或 SharePoint，防止外洩。

### 週期性合規檢查

- 透過 Intune 的報表與警示，定期檢視補丁、防毒軟體、防火牆及 EDR 狀態。
- 配合條件式存取，**不合規就不給登入**，確保持續合規。

---

## BYOD vs. 公司配發裝置：兩套策略並行

企業裡通常會遇到兩種狀況：有人想用自己手機（BYOD），有人則拿公司發的標準機。這時候要是硬套同一套規則，就像拿制服去逼大家週末也穿出門一樣——不實際。真正的解法是：**靈活＋安全要同時顧**。

> 拿我們公司當例子。最近因為政策，我先上線了「公司機」專案。透過 **Intune + Android Enterprise**，員工的桌面就像吃了定心丸——只有核准的 App，桌面和選單都依角色自動排好，Wi-Fi 自動連上公司網路，其他網路想都別想，外面亂七八糟的 App 更是直接擋掉。
>
> 當然，人生（跟資安）不會永遠只有「公司機」。未來我們還會導入 **BYOD**，針對產線員工、辦公室員工設計不同規則。畢竟，有些人只想快點用手機看 Teams，有些人卻需要完全被控管。不同族群，菜單當然不能一樣。

### A. BYOD（自帶裝置）：重點在「保護公司資料、不干擾個人隱私」

BYOD 適合重視便利的員工，管理原則是只針對公司應用程式與資料，不接管整台裝置。

**Intune 建議做法**：

- **MAM-WE（Mobile Application Management without Enrollment，無需註冊裝置的應用程式保護）** 只管理 Outlook、Teams 或 OneDrive 等公司 App 及其資料。
  禁止公司內容複製到 LINE 或個人雲端。
- 檔案**僅限**儲存到 OneDrive for Business。
- App 內資料加密，並強制 PIN 或生物辨識解鎖。

**條件式存取** 啟用 **Require approved client app** + **Require app protection policy** + **MFA**； 針對高風險登入（如陌生地點或裝置），可限制為 Web 存取或直接封鎖。

**平台微調（選用）**

- **Android**：使用 Work Profile 分隔公私資料，無需重置裝置。
- **iOS/iPadOS**：採用 User Enrollment 輕量註冊，保護隱私。

> **要點**：BYOD 不接管整台手機或筆電，只將**公司資料隔離在 App 的沙盒中**，確保公私分明。

### B. 公司配發裝置：重點在「全面控管」

公司裝置由 IT 完全掌控，目標是從硬體到軟體的全方位管理，適用於高安全需求情境。

**Intune 建議做法**：

- **註冊與開箱即用**
  **Windows Autopilot**：新裝置開箱連網，即自動加入 Entra ID、安裝 App 並套用政策。
- **Android Enterprise Fully Managed / Dedicated**：依情境選擇（Fully Managed 適合全面工作用；Dedicated 適用公用裝置），通常需重置裝置。
- **Apple ADE（Automated Device Enrollment） + Apple Business Manager**：支援無人值守註冊，開箱即納管。

**合規與安全基線**

- 套用 **Security Baselines**：強制 BitLocker/FileVault、密碼/生物辨識、韌體與驅動程式更新。
- 使用 **Update Rings** 控制 Windows 或 macOS 更新節奏，避免影響業務。

**應用程式白名單與周邊控制**

- 設定 Allowlist（允許清單），封鎖高風險 App。
- 管控 **USB/藍牙/可移除儲存**（透過 Intune Endpoint Security 或 Defender for Endpoint Device Control）。

**條件式存取**

- 僅 **Compliant（合規）** 裝置可存取敏感系統。
- 對高敏感應用，再疊加 **MFA**、位置或風險條件。

> **要點**：公司裝置**全面納管**，若違規或不合規，即**直接禁止登入**。

---

> **Zero Trust** 不僅驗證「你是誰」，還要檢查「你用什麼上線」。**BYOD 以 MAM 隔離資料、尊重隱私；公司裝置以 MDM 全面納管、違規即擋**。兩套策略並行，才能平衡員工體驗與企業安全。

---

原文連結：https://ithelp.ithome.com.tw/articles/10376390
`,f=`還記得剛進公司的第一天，IT 交給我一組帳號密碼，叮嚀：「千萬不要外流」。 但現在光靠帳號密碼，已經很難抵擋駭客了。**密碼外洩、釣魚信、暴力破解**，都讓帳密組合變成資安界的「過時武器」。

在 Zero Trust 裡，**身份（Identity）** 被視為最重要的一環。因為駭客要進公司，第一件事就是「取得合法帳號」。 如果身份沒有管好，什麼防火牆、EDR、SIEM，最後都可能被繞過。

所以，我們必須確保：

- **帳號不會被濫用**（共用帳號是大忌）
- **離職帳號馬上關閉**（否則變後門）
- **權限符合最小化原則**（不用的權限要回收）
- **登入的人真的是本人**（這就是 MFA 的任務！）

---

## 為什麼現在一定要上 MFA？

近年許多勒索事件，都是**憑證外洩**後，攻擊者透過**合法的 SSL VPN／遠端入口**進到內網，再橫向移動散播勒索。 把「知道密碼」變成「還得證明本人」，能直接切斷這條最常見的攻擊路徑。

而且不論密碼再怎麼強，總有機會被竊取或破解；只有加上 MFA，才能有效降低風險。

![/blog-assets/ithome-2025/20171891QNZQll0jeM.png](/blog-assets/ithome-2025/20171891QNZQll0jeM.png)

---

## 稽核要求

現在不只 ISO/客戶審查，**多數供應商與雲服務**也把 MFA 視為基本門檻；特別是**管理者帳號**與**外部合作帳號**，幾乎一律強制。

---

## MFA 常見的使用場景

1. **開機／作業系統登入**
  - Windows、macOS 都可整合 MFA：如 **Windows Hello**（指紋／臉部／PIN）或安裝登入層外掛（推播／TOTP）。
  - 有些公司要求 **開機後先過 App 推播或 OTP** 才能進桌面。
2. **公司系統（內部／雲端）**
  - **ERP / 郵件 / 協作（如 O365、Google Workspace）**
  - 常見方式：**Authenticator App（Google/Microsoft 等）** 推播＋**數字配對**、或 **TOTP** 六位數碼。
3. **VPN／遠端連線**
  - 沒有 MFA 的 VPN = 把公司大門鑰匙放在馬路邊。
  - 多數 VPN 都支援：**RADIUS / SAML / OIDC** 串接 MFA。
  - 若需要「**開機前連線（Pre-logon/SBL）**」，可先用**機器憑證**掛上 VPN，使用者登入時再跑 **MFA**。
4. **伺服器與安全服務後台**
  - **EDR 中控台、SIEM、雲主控台**等高敏感入口，**優先**上 MFA（最好為 FIDO2/Passkey）。
5. **各種 SaaS 平台**
  - GitHub、AWS、GCP、Salesforce… 一律 **SSO + MFA**，不要散落本地獨立帳號。

---

## 現在的趨勢

- **FIDO2 / Passkey 無密碼** 以**裝置內私鑰 + 指紋/臉部**取代密碼，**天然抗釣魚**；**YubiKey** 這類硬體金鑰也屬此類。 Apple / Google / Microsoft 都已支援，正邁向「**無密碼時代**」。
- **推播改「數字配對」** 為防 MFA 疲勞轟炸，推播需使用**數字配對**（使用者需輸入螢幕顯示數字到手機 App），比單純按「接受」安全得多。
- **條件式/情境式 MFA** 依據**地點、裝置合規、風險分數**動態要求 MFA。 例如：內網＋受管裝置可放行；外部網路或風險高就強制 MFA。 （常見於 Entra ID、Okta、Ping 等 IdP；這裡僅點名，不做產品介紹。）

---

如果說密碼是**第一道鎖**，那 **身份管理**就是**鎖的規則**（誰能開、什麼時候能開），而 **MFA** 則是**第二把鎖**，會根據情境自動加強。 在攻擊手法越來越高明的今天，沒有 MFA，就像把大門只靠一條橡皮筋綁著。

所以，當有人說「我們公司不需要 MFA」時，你可以回他：

> **駭客才正等著感謝你呢。**

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10376102
`,D=`又是週末了，請容許我偷懶一下，寫一篇心得文吧。 這篇不談技術細節，主要是想回顧一下開賽到現在我寫了些什麼。

老實說，這 14 天的文章有點隨性，每天都是當天臨時想到什麼就寫什麼，主題也很分散，從 Zero Trust、MFA、弱點掃描、到裝置管理，各種東西都碰了一點。雖然不像教科書一樣系統化，但至少是我在工作中實際接觸到、親身踩過坑的東西。

其實我一開始也會擔心：「資安除了 CTF，還能講什麼？」但寫著寫著，發現資安工程師日常就是最好的題材——從公司導入 M365，到管理 Intune、EDR，再到做 Nessus 弱掃、甚至被使用者問 Wi-Fi 掛掉怎麼辦。每一段經歷都能變成一篇小故事。

## 小回顧（Day 1 ~ Day 13）

這段時間其實寫過不少主題，簡單整理一下：

| Day | 主題 | 關鍵字 |
| --- | --- | --- |
| 1 | 法規推著我上場，學習讓我留下 | ISO、法規遵循 |
| 2 | 公開情資很重要 | 訂閱資安週報 |
| 3 | 鐵裝還是布甲？資安裝備選擇題 | 安全工具選型 |
| 4 | 公司的第一道防線 | Firewall、防火牆 |
| 5 | 文件地獄：葵花寶典？ | ISMS、資安政策 |
| 6 | EDR：手上那把神器 | 偵測、回應 |
| 7 | IT 部門人少，資安工程師的多重宇宙 | 多重身份、雜事 |
| 8 | 漏洞掃描大冒險 | Nessus、自建 vs 外包 |
| 9 | 什麼 M365 除了 Word，也有資安產品？ | Microsoft Security |
| 10 | 微軟有 Zero Trust 架構嗎？ | Zero Trust |
| 11 | 資料保護：別讓公司機密飛出去 | Data Protection |
| 12 | 即使資料保護再嚴密，也擋不住一台失守的裝置 | Device Management |
| 13 | 打帳密已經過時了？大門不只要鎖，還要驗明正身 | 多重要素驗證 |

回頭看，其實每天的題材都跟我的工作緊密相關。第一天是想定調「為什麼要寫這個方向」，後面就比較隨性，想到什麼就寫什麼，沒有特別去刻意規劃。但或許這樣也更貼近「一個資安工程師的真實日常」。

有時候還會想完蛋了，沒東西寫，結果隔天又冒出一堆想法~

> 最近還在家裡翻出一台舊筆電，乾脆直接灌成 Ubuntu，順手裝了 Wazuh Server，成了一個新的實驗平台。舊硬體能被重新利用，拿來玩資安實驗還挺香的。

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10376400
`,A=`前面談過 Zero Trust 的身分、裝置、資料，今天來到第四根柱子：**網路（Network）**。 老實說，這一塊其實跟傳統 IT 網路很像，像 CCNA 的考題一堆都在講 VLAN、防火牆、ACL。 但差別是：在 Zero Trust 的世界裡，這些技術不是「堆設備」，而是「切碎、限制、再加監控」。

---

## 傳統內網的問題

過去的企業網路設計常見這樣的邏輯：

- 只要連上 VPN → 等於進入「安全區域」。
- 內部網段都是平的 → 伺服器、用戶端、產線設備全混在一起。

結果就是： 駭客只要攻下其中一台機器，就能透過 **橫向移動（Lateral Movement）**，一路掃描、嘗試弱密碼、利用共享資源，最終取得 AD 控制權。 這就是為什麼常見的資安事件，都是「一台失守，整網淪陷」。

---

## Zero Trust 網路哲學：分段與限制

Zero Trust 的第四柱強調：**網路必須被切分，並且每個區塊都要最小化權限。**

### 1. 網段分離（Segmentation）

- **依部門區分 VLAN**：研發、財務、產線、訪客 → 各自獨立。
- **伺服器區域隔離**：AD、ERP、檔案伺服器不要跟用戶端在同一個平面。
- **OT 與 IT 網段分開**：產線機器與公司內部電腦必須斷開，只透過受控的閘道溝通。

### 2. 最小必要通道（Least Privilege Networking）

- ACL 與防火牆規則 → 只允許必須的應用連線。
  產線電腦只需要連 MES，就封掉其他不相關的通道。
- 財務電腦只要連 ERP，不該能掃整個 192.168.0.0/16。

採 **白名單模式**，而不是「預設放行、遇事再擋」。

### 3. 流量檢測（Traffic Monitoring）

- **東西向流量（East-West）監控**： 內部主機互相溝通的流量，比進出口流量更容易藏駭客活動。
- IDS/IPS、NDR、甚至 EDR 日誌，都要整合起來，才能偵測「異常的橫向移動」。
- **此時就需要 SIEM**： 把防火牆 Log、EDR Event、NDR Flow 全部集中，做關聯分析。
  例如：員工 PC 同時對多個伺服器發起 SMB 掃描 → 高風險。
- ERP 帳號在半夜從產線 VLAN 登入 → 立即告警。

---

## 實務案例

想像一個沒有分段的環境：

1. 一台員工筆電中標 → 駭客拿到 VPN 帳號。
2. 進內網後馬上橫掃，找到一台老舊伺服器弱密碼。
3. 取得更高權限後，成功跳到 AD Domain Controller。
4. 之後整個公司所有電腦都被勒索。

如果採用 Zero Trust：

- VPN 帳號只能進特定 VLAN。
- 產線 VLAN 與 AD VLAN 完全隔離。
- ERP 僅開放特定帳號、特定網段能連。
- 橫向掃描異常流量會被 SIEM 偵測到。

結果就是：駭客被困在一小塊網段，無法橫向擴散。

---

> **「沒有一張萬用通行證，每一步都要驗證。」** 這樣才能避免駭客利用一個破口就跑遍全公司。

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10376885
`,V=`> 很多人以為一定要掃 IP、跑掃描器才看得到風險。 其實 **不碰對方資產**，只靠公開資訊與指標，也能把自家對外面貌、第三方風險、外洩跡象抓個七八成。 **完全被動、合法合規**

---

## 一、先決條件：先畫好「邊界地圖」

> 先把會代表公司的外部識別盤點好，後續所有工具都靠這些關聯：

- **網域／子網域**：\`example.com\`、\`*.example.com\`
- **公司名稱／品牌別名**、產品名
- **ASN／公網 IP 範圍**（向 ISP 或內部網管確認）
- **雲端帳號標識**：Azure tenant name、AWS Account Alias、GCP Project 名稱
- **官方社群／套件命名空間**：GitHub Org、npm、PyPI、Docker Hub

---

## 二、Scorecard vs ASM：兩個視角，互補使用

- [**Security Scorecard／外部評分**](https://www.ithome.com.tw/review/135314)：第三方「從外看內」的體檢分數，常含 DNS posture、憑證配置、開放服務指標、垃圾郵件名譽、外洩關聯等。
  **用途**：對標同業、第三方風險管理（供應商）。

[**ASM／EASM（Attack Surface Management）**](https://www.checkpoint.com/tw/cyber-hub/cyber-security/what-is-external-attack-surface-management-easm/what-is-attack-surface-management/)：以**資產為中心**的外部盤點（網域、IP、雲資產、SaaS），持續監控「新長出來的東西」。

- **用途**：建立／維護「外部資產清冊」、偵測影子 IT。

---

## 三、「完全被動」的關鍵觀測面

1. **DNS posture與郵件防護**
  - 檢查 \`SPF / DKIM / DMARC\` 是否存在與策略強度（最終建議走到 \`p=reject\`；可先以 \`quarantine\` 過渡）。
  - 檢視 MX／NS 是否在可信供應商；清理外曝測試或過期紀錄。
  - 常見記錄速查：A（IPv4）、AAAA（IPv6）、MX（郵件）、CNAME（別名）、NS（名稱伺服器）、SOA（權威起始）、PTR（反查）、TXT（含 SPF）。
  - 工具示例（僅查公開 DNS，非掃描）：
    \`whois example.com\`（註冊資訊）
  - \`nslookup -type=MX example.com\`（查郵件伺服器）
  - \`nslookup -type=TXT example.com\`（看 SPF／DMARC）
  - \`host example.com\`、\`host 172.217.160.110\`（正反向快查）
2. **外網服務指紋（搜尋引擎型）**
  - 用 **Shodan／Censys** 的「搜尋／監控」功能，追蹤與你 **ASN／網域** 相關的服務變動（這是被動索引，不是你主動掃；免費版有查詢限額，建議付費訂閱持續監控）。
  - 檢查是否出現 **不該對外** 的服務（如資料庫、遠端桌面）。
3. **資料外洩跡象（帳密／文件）**
  - **Have I Been Pwned** 企業網域監控（需域名驗證）查歷史外洩。
  - **GitHub／套件倉庫**：確認組織空間未被偽冒；開 **Secret Scanning／Dependabot**（公開庫免費）。
  - **套件命名空間**：監控品牌 typosquatting。
  - **擴大公開線索**（僅觀測、不互動）：搜尋引擎、公司官網與新聞稿、社群（LinkedIn、X〔Twitter〕、Facebook、Instagram）、論壇……可能間接洩露員工結構、供應商、VPN 品牌、帳號命名規則等。
4. **雲端足跡**
  - 依雲供應商公開命名慣例交叉 CT／DNS，盤點 **公開端點／網站**；標記是否有 **列目錄／錯誤洩漏** 痕跡（只看，不碰）。
5. **品牌／網域仿冒**
  - 監控 **近似域（look-alike）** 的註冊與憑證簽發；標記可疑登入頁與釣魚跡象（截圖存證，交法務或反詐窗口）。
6. **第三方依賴／SaaS 曝險**
  - 列出代發郵件、客服、行銷、CDN、分析 SDK 等供應商清單，對照其外部事件公告／評分。
  - 檢查是否出現在已知供應鏈事件波及清單。
7. **開放目錄／備份檔被索引**
  - 以一般搜尋引擎（**僅限自家品牌／網域**）查是否收錄 **備份檔、暫存頁、測試報表** 等線索（不嘗試下載）。
8. **郵件名譽與黑名單**
  - 觀測寄信網域與來源 IP 是否上主要黑名單；名譽差不僅影響投遞，亦提高被濫用風險。

> **If you can’t name it, you can’t protect it.**

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10377098
`,w=`> 越來越想不到寫啥了 XDD 每天在想要寫什麼，甚至都比寫的時間久

大家常聽到「帳號權限要設定好」，但「**特權帳號**」其實是另一回事：它能新增使用者、修改設定、存取敏感資料，甚至停擺整個服務。一旦外洩或被誤用，就可能引發全公司級災難。而且現在客戶稽核越來越嚴格，不只問「有沒有政策」，更要你拿出**實質證據**來證明一切都在掌控中。

> **駭客真正想要的不是進門，而是「鑰匙圈」**。 一把特權帳號，等於掌握整家公司。

---

## 什麼叫「特權帳號」？

把帳號想像成門禁卡：有些只能進大門，有些能開保險箱。後者就是特權帳號。它們擁有高權限，能執行關鍵操作。常見類型包括：

- **人員特權**：如 Domain Admin、本機系統管理員、資料庫管理員（DBA）、雲端租戶或訂閱層管理員（例如 Owner 或 Global Admin）。
- **服務／應用帳號**：用於排程任務或系統整合的非互動帳號（常被忽略，密碼不易輪替）。
- **緊急帳號（Break-glass）**：在 SSO 或 MFA 失效時的備用帳號（平時封存、需雙人授權開啟，並立即觸發告警）。
- **外包／臨時帳號**：供應商維護或短期專案使用（**必須設定時效與權限範圍**）。

---

## 特權帳號危險嗎?

特權帳號是資安弱點的放大鏡，不僅是外部攻擊的目標，人為錯誤也可能釀成大禍。幾個關鍵理由：

- **攻擊鏈的終點是升權**：滲透只是開胃菜，拿到特權才是主菜。之後能橫向移動、批量竄改、外洩機密，甚至勒索。
- **人為誤用也很可怕**：例如長期保留高權、多人共用同一帳號，或臨時開啟後忘記關閉——**就算不是駭客，也能造成意外**。
- **供應鏈壓力**：客戶與上游會要求證明：誰、何時、因何事使用了高權、做了什麼，以及**誰核准**？這已成為合約常見條款。

---

## 這裡就是 PAM 登場的地方（Privileged Access Management）

> **PAM 就是把鑰匙鎖進保險箱，借鑰匙要走流程，連線走專屬通道，且全程錄影。** 它把「政策」變成「可證明、可回放、可稽核」的流程與技術控制。

1. **密鑰保管與自動輪替（Vault & Rotation）**
  把 Domain Admin、DBA、設備管理介面、服務帳號等高權密碼／金鑰放進金庫，設定**定期自動換密碼**與**借出即換**，杜絕共用密碼與長期不換。
2. **即時、剛好夠用的權限（JIT／JEA）**
  平時不給高權，臨時升權必須**填寫事由＋時間盒（time-bound）**，過期自動收回；可以限制到**指令層級／作業範圍**。
3. **會話代理與側錄（Session Proxy & Recording）**
  RDP／SSH／SQL／Web 管理面板**必須經 PAM 閘道**，可控剪貼簿／檔案傳輸／命令白黑名單，並**錄影或記錄命令**，事後可回放。
4. **盤點與治理（Discovery & Governance）**
  自動掃描找出「遺失在角落」的特權與服務帳號，定期輸出**輪替合規率、使用軌跡、審批紀錄、外包時段存取**等報表，直接回答稽核題。

> 沒人能「直接」拿鑰匙，也不能「直接」開門；一切都要過金庫、過流程、走指定通道，而且留證據。

---

原文連結：https://ithelp.ithome.com.tw/articles/10377265
`,y=`在資訊安全裡，很多人把心力放在「防止駭客入侵」，卻忘了一件更現實的事：

> **系統總有一天會壞，資料總有一天會丟。**

不論是硬碟故障、人為誤刪、勒索病毒，還是天災火災，最後能不能「活下去」，靠的就是備份。 試想一下你 DB 哪天突然壞掉，沒備份一年的資料都沒了，你看你會不會被炒魷魚。

## ![/blog-assets/ithome-2025/20171891AL8on83kKP.png](/blog-assets/ithome-2025/20171891AL8on83kKP.png)

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

![/blog-assets/ithome-2025/20171891oGuXFW1F4Y.jpg](/blog-assets/ithome-2025/20171891oGuXFW1F4Y.jpg) 圖片為[Manish Sharma](https://www.linkedin.com/pulse/design-reliability-driven-rto-rpo-manish-sharma)

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
`,I=`> 昨天聊到 RTO（恢復時間目標）與 RPO（恢復點目標），今天來談談如何透過備份保護資料，確保在最壞情況下仍能快速復原。

---

## 最經典的 3-2-1 備份原則

**3-2-1 備份原則** 是業界公認的資料保護標準，簡單卻有效，能大幅降低資料遺失風險：

- **3**：保留**三份資料**（一份原始資料 + 兩份備份），確保單點故障不影響資料完整性。
- **2**：使用**兩種不同媒介**（例如硬碟和雲端），避免因硬體損壞（如硬碟壞軌）或網路問題導致備份不可用。
- **1**：至少**一份備份存放異地**（如雲端或另一地點的儲存設備），防止火災、水災或勒索病毒導致所有資料同時失效。

> 不要把雞蛋放在同一個籃子裡，分散風險才能保護資料。

![3-2-1 原則示意圖](3-2-1 原則示意圖)

---

## 常見的備份工具

以下是企業環境中常見的備份方式，以及它們的優缺點與建議：

### 1. NAS 備份

> 主流應該是Synology 或 QNAP 的 NAS（網路附加儲存）作為備份倉庫，成本低且管理方便。 一台應該幾十萬可以搞定

### 2. 專業備份軟體（Veeam / Commvault）

> 我自己是只用過Veeam，所以不太了解commvault

- **功能**：
  **自動排程**：定時備份，減少人工介入。
- **增量備份**：僅備份變更資料，節省儲存空間與時間。
- **還原測試**：模擬還原流程，確保備份可用。
- **異地複製**：將備份複製到雲端（如 Azure、AWS S3 Glacier）或另一地點。

### 3. 雲端備份

> 直接將資料備份到雲端（如 Azure Backup、Google Cloud Storage Nearline 或 AWS S3 Glacier）。

---

## 實務上？

1. **設定自動化排程** 使用 Veeam、Windows Server Backup 或 NAS 內建排程工具，確保備份定時執行，避免依賴人工操作。
2. **實現異地存放** 至少一份備份存放在雲端（如 Azure、AWS S3 Glacier）或另一地點的儲存設備，符合 3-2-1 原則。
3. **啟用快照與不可變備份** 在 NAS 或備份軟體中啟用快照功能，儲存歷史版本；使用不可變備份（Immutable Backup），設定一段時間內無法修改或刪除，防範勒索病毒。
4. **定期測試還原** 每季執行一次還原測試，模擬資料遺失場景，確認備份是否能快速復原，且資料完整無誤。
5. **分層備份策略** 針對不同資料類型（資料庫、檔案伺服器、虛擬機）制定不同備份頻率與方式。例如：
  - **資料庫**：每小時增量備份，每日完整備份。
  - **檔案伺服器**：每日增量備份，每週完整備份。
  - **虛擬機**：使用 Veeam 進行每日快照與異地複製。

---

> 明天講如何做災害復原

---

原文連結：https://ithelp.ithome.com.tw/articles/10377679
`,T=`> 昨天聊到 **3-2-1 備份原則**，備份能確保資料還在，但光有備份，並不代表系統能夠快速恢復上線。 每年不管是 ISO 還是法規，總有個大魔王：**災害復原（Disaster Recovery, DR）**。 當然做這個DR的報告也很麻煩...

---

## 備份 ≠ 災害復原

- **備份**：重點是「確保資料還在」，像一張保險單。
- **災害復原（DR）**：重點是「讓服務回到運作狀態」，像發生車禍後的急診與治療流程。

DR 是讓企業在天災、人禍或設備故障後，**快速恢復營運或維持關鍵任務功能**。這不只是技術問題，更包含規劃、測試，甚至可能需要異地的 DR Site 或雲端資源來支撐。[相關連結](https://www.nutanix.com/zh_tw/info/disaster-recovery)

---

## 為什麼需要 DR？

1. **時間就是金錢** 停機不只是「不方便」，是直接的營收與商譽損失。產業統計顯示 **IT 停機平均成本可高達每分鐘 17,000 美元**，縮短 RTO 就是現金流保命。
2. **資料完整 ≠ 服務可用** 昨天的備份不代表今天能上線。如果重建環境要花三天，對客戶來說仍然是「停擺」。這就是 **RTO（恢復時間目標）/ RPO（復原點目標）** 的重要性。
3. **合規與稽核要求** ISO 27001 以及大客戶稽核，會要求不只要有備份，還要具備 **DR 計畫與演練證據**，證明「真的回得來」。
4. **降低單點風險** 火災、水災、地震、機房斷電、勒索軟體……任何一件事都可能讓主站與本地備份同時失效。**異地/異平台 DR** 才能把雞蛋分開放。

---

## ISO 27001:2022 的要求

在 ISO/IEC 27001:2022 中，**附錄 A 控制項 5.30「ICT 對營運持續的就緒度（ICT Readiness for Business Continuity）」** 明確指出：

- 高階管理者必須能在事故中快速做決策，確保業務不中斷。
- RTO 與 RPO 必須清楚定義，並在組織內廣泛傳達。
- 必須定期進行測試與演練，量測恢復時間、反應速度等關鍵指標。
- ICT 連續性計劃應包含：
  系統與流程的效能與容量需求
- 每個 ICT 服務的 RTO 與恢復方式
- 每個 ICT 資源的 RPO 與復原流程

換句話說，ISO 不只要你「有備份」，還要你證明系統真的能依照 RTO/RPO **在限定時間內復原**。

> 備份能確保「資料不會永遠消失」， 但只有 **災害復原計畫**，才能確保「公司能在風暴後繼續營運」。

---

原文連結：https://ithelp.ithome.com.tw/articles/10377737
`,v=`倒數第二個假日啦～ 前幾天聊到的 **備份、零信任、帳號管理、災害復原、各種監控**，其實通通都是資安專責人員的日常。

以下引用數發部發佈的資料：

- [何謂資安專責人員](https://moda.gov.tw/ACS/laws/faq/03/636)
- [認可證照清單](https://www-api.moda.gov.tw/File/Get/acs/zh-tw/epCm7MlcYGOKmPH)

從法規面來看，資安專責人員需要具備**認可的資安證照**，並能建立制度與流程；但回到現實，多半是每天面對突發的資安議題，確保營運不中斷。 尤其在公司初期、或資安機制尚未完善時，這個角色還要負責**整體資安架構的部署與藍圖規劃**。

我一直覺得資安專責人員是「暗影中的守門人」：平常不顯眼，一出事大家第一個就會找你。 雖然壓力不小，但也因此更能感受到這份工作的價值。

> 但簡單來講，沒出事沒人覺得你有用；出事了你沒處理好也會被噴。XDD

---

原文連結：https://ithelp.ithome.com.tw/articles/10378065
`,R=`> 分享一個朋友的故事。

剛進公司不久，他電腦突然變超卡， 還沒來得及寫信報修，電話就先響了：

「嗨～你電腦是不是怪怪的？我們這邊看到你 CPU 爆了。」

當下他整個愣住，只能心裡默默問一句： **「你們到底是怎麼知道的？」**

後來主管 casually 又補了一槍：

> 「其實我們隨時都看得到使用者在電腦上做什麼。」

那瞬間，他腦袋立刻閃回小時候電腦教室被老師**強制全螢幕接管**的畫面。 原來這不是童年陰影，而是在公司裡，真的有可能發生。

---

### 公司電腦上的「隱形眼睛」

大部分員工可能完全沒想過，其實公司常常會部署一些**神秘工具**，功能強大到你難以想像：

- **螢幕監控**：很像 AnyDesk，但不用你按「同意」，管理員就能即時看到你的螢幕畫面，**而且你永遠不知道他有沒有正在看**。
- **應用程式紀錄**：你開了 Word？Excel？開多久？都有 log。
- **檔案操作追蹤**：複製到 USB、壓縮打包，甚至傳到雲端，動作全都被攔截或上報。
- **聊天軟體偵測**：LINE、Telegram、WeChat 這類 IM，常被列為高風險，系統能偵測甚至禁止檔案傳輸。

說白了，這些工具就像你電腦裡的「黑盒子」，所有操作一清二楚。

> 所以啊，和另一半的不可告人對話…小心都被看光光。 聽起來很沒隱私？其實真的蠻沒隱私的 XDD

---

### 為什麼要這麼做？

雖然很像《中國天眼》，但背後其實有正當理由：

1. **防止機密外洩**：員工一個拖曳，就可能把幾千萬設計圖帶走。
2. **稽核要求**：大客戶、ISO 27001 都會要求「能不能追蹤使用者行為」。
3. **事件回溯**：真的出事時，至少能回頭查「誰、什麼時候、做了什麼」。

這些工具不是針對你，而是針對「風險」。 只是大部分員工不知道，自己其實早就處在「被保護、也被監控」的狀態。

---

在公司電腦上，永遠抱持一個心態：

> **「有人在看。」** 👀

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10378223
`,b=`它就像是給汽車換機油：如果不做，引擎遲早會出大問題，系統可能因為安全漏洞而「爆炸」；但如果做得太急躁、貿然**全域**部署，又可能毀掉整個環境，導致服務中斷或**相容性**問題。因此，千萬不要一看到新的 KB 就立刻全域滾動（rollout）。相反，我們應該採用一個穩健的策略，讓更新變成**可控的日常操作**，而不是冒險的賭注。

> 當然，Patch Management 本身就是**資安控制**之一，ISO 或稽核都有相對的控制項。

---

### Patch Tuesday

![Microsoft Patch Tuesday](Microsoft Patch Tuesday)

[Wiki](https://zh.wikipedia.org/zh-tw/%E5%91%A8%E4%BA%8C%E8%A1%A5%E4%B8%81%E6%97%A5) 每月的**第二個星期二**是微軟的「Patch Tuesday」，主要更新發布日，通常包含安全修補、功能改進與累積更新。這就像一頓豐盛的主菜，值得**優先關注**。但**別盲裝**，先快速查看官方與社群資訊評估風險：

- **檢查 Release Health**：微軟的 Release Health 會列出已知問題（Known Issues)與暫緩保護。若某更新會導致特定硬體或軟體不相容，就先避開。
- **確認 KEV 清單**：KEV（Known Exploited Vulnerabilities）是 CISA 維護的**已遭利用**漏洞清單。若本次修補包含 KEV，代表已被攻擊者積極利用，需**加速部署**。

> KEV 情資也可關注 **TWCERT/CC** 與各大**資安電子報**。 上網查看是否有「災情」是必不可少的，尤其是**大版本**更新！若是**高風險漏洞（例如零日攻擊）**，原則上**先處理**，沒人想讓自家伺服器曝露在風險下。

---

### Ring Deployment

> 我也是寫今天才去了解，Ring Deployment，下面提供資訊參考：[What is Ring Deployment? A Guide to Phased Software Rollouts](https://www.ivanti.com/blog/ring-deployment)，不然我怕我說錯XDD

用**環狀部署**降低風險：先小圈驗證，再逐步擴散到更多系統與環境。這能把「一次全推」的災難機率降到最低。

---

### 浪子回頭：備份與回滾，確保退路

更新不是「破釜沉舟」。我們必須確保**能回頭**。在每次更新前，都要準備**備份與回滾**劇本，這是降低風險的關鍵步驟：

- **虛擬機環境**：使用 VM **快照（Snapshot） 或**系統映像（Image），以便快速還原。
- **資料庫**：確保有**可還原的備份點**（例如 SQL Server 交易記錄與時間點還原）。

> 理論上，關鍵伺服器都應該**有備份與快照**吧？

若在部署中「踩雷」（例如藍屏或服務崩潰），**立即回退**：停止該環的進一步推廣、暫緩到下一環，並通報影響範圍。這不僅能控制損害，也能累積經驗，避免下次重蹈覆轍。

---

**若有說錯，歡迎留言更正，謝謝～**

**最後**：想知道你的電腦最近的更新嗎？

\`\`\`
# 列出最近五筆已安裝的更新
$Get-HotFix | Sort-Object InstalledOn -Descending | Select-Object -First 5
\`\`\`

---

原文連結：https://ithelp.ithome.com.tw/articles/10378517
`,M=`> 風險評鑑這位**每日必戰的 BOSS** 每年稽核必看.. 也是ISO/IEC 27001 的要求

當然他也是有好處，能幫組織及時發現潛在危機，並想出好方法應對。簡單來說，風險就像是「壞事可能發生，影響我們的核心資產」的可能性，尤其是當外面的威脅找到我們的弱點時，那你就等著被罵吧！

## 為什麼要跟「風險 BOSS」對決？

我們得想想，如果風險真的發生，組織能不能承受那一下打擊？這不僅是 ISMS 的「硬性任務」，還能在編預算前跟老闆說：「嘿，我們得買點新裝備防身！」

> 例如舊的firewall=高風險 那是不是就可以考慮添購新的

### 風險評鑑的超級好處（除了不被罵之外）

除了滿足 ISO/IEC 27001 的要求，讓組織通過稽核，這玩意兒還能讓你提前發現隱藏的「地雷」，避免小問題變成大災難。想像一下，沒有風險評鑑，就像是開車不看後照鏡，直接撞上後面的卡車！它能幫助組織優化資源分配，把錢花在刀口上，而不是亂撒網。像是那個舊 firewall，如果評鑑出它是高風險點，你就能理直氣壯地申請升級，變成「預防勝於治療」的英雄。更酷的是，它能提升整體資安意識，讓團隊從「被動挨打」變成「主動防禦」，長期下來，組織的韌性 UP UP，競爭力也跟著漲。

### 風險評鑑程序：一步步打敗 BOSS 的攻略指南

[參考ISMS優先落實執行策略](https://sites.google.com/email.nchu.edu.tw/isms-strategy/%E7%9B%B8%E9%97%9C%E7%A8%8B%E5%BA%8F%E6%9B%B8%E4%BF%AE%E8%A8%82%E5%8F%83%E8%80%83/b003%E9%A2%A8%E9%9A%AA%E8%A9%95%E9%91%91%E7%AE%A1%E7%90%862)

> 網路上也有流程範本可以去借鑒 基於 ISO/IEC 27001 的精神，風險評鑑不是隨便評評，而是有系統的流程。

**識別風險：找出隱藏敵人** 列出所有潛在風險來源：內部（員工失誤、系統老舊）、外部（駭客攻擊、自然災害）。識別資產（什麼東西重要？如客戶資料）、威脅（誰想搞我們？如病毒、競爭對手）、漏洞（哪裡弱？如沒加密的傳輸）。可以用問卷、訪談或工具掃描，別漏掉任何角落。例如，舊 firewall 就是個典型漏洞，威脅是太舊XDD。

**評估風險：算分數決定嚴重度** 對每個風險打分：可能性（低、中、高）、影響（輕微、重大、毀滅性）。用公式計算風險值，例如可能性 4 x 影響 5 = 風險分數 20（滿分 25 算高風險）。畫出風險矩陣：紅色區 = 馬上處理，黃色 = 監控，綠色 = 放鬆點。記得考慮殘餘風險（處理後剩多少）。

**風險處理：出招反擊** 決定策略：避免（別做那件事）、減輕（加控制措施，如升級 firewall）、轉移（買保險）、接受（低風險就認了）。列出行動計劃：誰負責、何時完成、預算多少。例如，高風險的舊 firewall → 計劃 Q4 升級到新一代防火牆。

**監控與審核：別讓 BOSS 復活** 不是做完就結束！定期追蹤處理進度，每季或每年審核一次。記錄一切到風險登錄冊，方便稽核時秀給審核員看。如果環境變了（新法規、新科技），馬上重評。最後，報告給高層：用圖表秀成果，讓老闆點頭說「好棒棒」。

這個程序不只符合標準，還能讓組織像有超能力一樣，預知危機。記得，風險評鑑是活的過程，不是死板的表格——多練習，就能變成你的資安神器！

> 題外話，原先想說30天應該很漫長，但現在寫著寫的也快寫完了XDD 加油，希望我還可以再想六篇題材

---

原文連結：https://ithelp.ithome.com.tw/articles/10378757
`,N=`**垃圾郵件：資安戰場的第一道城門**

剛進公司時，我最怕的不是伺服器當機，而是員工慌張打電話：

> 「我好像點錯了一封信…」 **一封垃圾郵件，可能讓公司資料被鎖、帳號被盜，甚至損失百萬！千萬別手滑啊！**

垃圾郵件就像公司的第一道城門，跟防火牆一樣，守不住就完蛋啦！根據 [2025 年 Sophos 報告](https://news.sophos.com/en-us/2025/06/24/the-state-of-ransomware-2025/)，近 90% 的網路攻擊從一封釣魚郵件開始。垃圾郵件不再只是惱人的廣告，它是駭客的利器，藏著釣魚、病毒和冒用陷阱，隨時搞亂公司。

---

## 垃圾郵件的真面目：駭客的四大武器

垃圾郵件看似無害，背後危機四伏，以下是它們的「作案手法」：

1. **釣魚攻擊（Phishing）**
  - **特點**：假裝成老闆、銀行或客戶，騙你點擊惡意連結或輸入帳密。
  - **範例**：一封假財務部門的郵件，要求「緊急轉帳 $50,000」，可能讓公司血本無歸。
  - **危害**：偷帳號、搶資料，甚至癱瘓系統。2025 年，18% 的勒索病毒靠釣魚郵件發動（[Sophos 2025](https://news.sophos.com/en-us/2025/06/24/the-state-of-ransomware-2025/))。
2. **惡意軟體散布**
  - **特點**：附件或連結藏勒索病毒、木馬或間諜軟體，點擊就中招。
  - **範例**：一個偽裝成「發票.pdf」的 .exe 檔案，可能鎖住公司資料要贖金。
  - **數據**：2025 年 Sophos 報告顯示，70% 的勒索病毒從垃圾郵件來（[Sophos 年度威脅報告](https://news.sophos.com/en-us/2025/04/16/the-sophos-annual-threat-report-cybercrime-on-main-street-2025/))。
3. **冒用與詐騙（Spoofing & Social Engineering）**
  - **特點**：假冒公司網域或員工信箱，發看似正常的郵件，誘你洩露機密。
  - **範例**：假 IT 部門要求「更新密碼」，點進去卻是駭客的陷阱網站，超氣人！
  - **數據**：2025 年 Sophos 報告指出，30% 的冒用郵件騙到員工機密。
  - **危害**：害公司吃虧，還連累客戶，信任崩盤只能含淚收拾。
4. **大量垃圾郵件（Bulk Spam）**
  - **特點**：駭客盜用信箱狂發廣告或詐騙信，把公司網域拖進黑名單。
  - **範例**：員工信箱被駭，短時間寄出數萬封「中獎通知」，害公司郵件送不到客戶。
  - **影響**：網域進黑名單，客戶收不到信，業務直接 GG，誰來救救我？

---

## 為什麼好好的信總被丟進垃圾桶？

為什麼好好的信總被丟進垃圾桶？根據 [夏格飛](https://simular.co/blog/post/spf-dkim-dmarc-important-knowledge)，郵件協議沒內建安全驗證，駭客輕鬆假冒寄件人，搞出「自己寄給自己」的鬧劇。解決方法是設定 **SPF**（指定誰能寄信）、**DKIM**（加密簽章防竄改）、**DMARC**（處理驗證失敗與回報），確保郵件可信。沒設好這些，郵件可能被拒收或進垃圾桶。像 SendGrid 的「單一寄件人認證」也能幫忙，增加收件伺服器的信任。2025 年，這些驗證是寄信的基本門檻，不然重要通知信永遠到不了客戶收件匣。

> 公司用 Exchange Online 整天查隔離信，但閥值又不能降低 誤判率跟資安要取一個適當平衡

---

原文連結：https://ithelp.ithome.com.tw/articles/10378959
`,k=`還記得我最早接觸資安的時候嗎？那時常常看到一堆神秘的代號：\`T1566\`、\`T1059\`、\`T1003\`……完全摸不著頭緒，心想這些數字到底在搞什麼鬼？我只聽過\`T65K2\`（當兵必備知識，哈哈！），結果現在要背的卻是另一套「資安軍規」。

> 會不會真的有人去查T65k2

但等我進公司後，才發現這些代號不是在唬人——**幾乎所有EDR（Endpoint Detection and Response）、SIEM（Security Information and Event Management）的事件記錄，都會用這些編號來描述攻擊手法**。如果你看不懂，就等於丟掉一半的情報，藍隊工作瞬間變得像霧裡看花。

---

## MITRE ATT&CK 到底是什麼？

![/blog-assets/ithome-2025/20171891Mo04h3xS5n.png](/blog-assets/ithome-2025/20171891Mo04h3xS5n.png)

[MITRE ATT&CK（Adversarial Tactics, Techniques, and Common Knowledge）](https://attack.mitre.org/)其實是一個**全球性的攻擊手法知識庫**，它把駭客的TTPs（Tactics戰術、Techniques技術、Procedures程序）整理成一張詳細的「攻擊地圖」。這不是枯燥的理論，而是基於真實威脅情報（如APT團體的案例）建構的框架，讓資安從業者能快速理解和應對攻擊。

- **戰術 (Tactics)**：駭客的目標，例如「初始存取（Initial Access）」、「橫向移動（Lateral Movement）」、「資料外洩（Exfiltration）」或「防禦規避（Defense Evasion）」。
- **技術 (Techniques)**：達成目標的具體方法，例如釣魚郵件（Phishing）、Pass-the-Hash憑證竊取，或惡意巨集（Malicious Macro）。
- **程序 (Procedures)**：更細部的實作細節，例如用\`Mimikatz\`工具來執行憑證傾印（Credential Dumping）。

舉例來說，\`T1566\` 就是 **Phishing（釣魚攻擊）**，這是駭客最愛的「開門紅」——透過偽造郵件或連結誘騙受害者點擊，進而植入惡意軟體。\`T1059\` 則是 **Command and Scripting Interpreter**，常見於濫用PowerShell執行惡意指令；\`T1003\` 是 **OS Credential Dumping**，專門偷系統憑證，讓駭客能假裝成合法用戶。

這些編號就像資安界的「通用語言」，無論是SIEM/EDR，都會在警報中標註它們，方便你一目了然：「哦，這是釣魚攻擊，我該檢查郵件伺服器！」

不過，知道這些代號可以做什麼呢? 明天我已經想好要寫啥

> 為什麼藍隊一定要學 MITRE ATT&CK？

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10379225
`,x=`> 接續昨天的內容

對藍隊（防禦方）來說，MITRE ATT&CK 不是什麼「加分題」的選修，而是**必修的攻防劇本**。 它不像教科書那樣生硬，而是像一部懸疑大片，有完整的故事線，帶著你從駭客的角度一步步推進：

1. **初始存取（Initial Access）** 駭客怎麼敲門？（例如 \`T1566 - Phishing\`、\`T1190 - Exploit Public-Facing Application\`） → 藍隊該做的：郵件過濾、Web 應用防火牆。
2. **執行與持久化（Execution & Persistence）** 進來後怎麼安家？（\`T1059 - PowerShell\`、\`T1547 - Boot or Logon Autostart Execution\`） → 藍隊該做的：監控異常腳本、審查登錄項。
3. **權限提升與橫向移動（Privilege Escalation & Lateral Movement）** 怎麼爬到更高層？（\`T1068 - Exploitation for Privilege Escalation\`、\`T1021 - Remote Services\`） → 藍隊該做的：最小權限原則、網路分割。
4. **收集與外洩（Collection & Exfiltration）** 偷了什麼？怎麼運出去？（\`T1005 - Data from Local System\`、\`T1041 - Exfiltration Over C2 Channel\`） → 藍隊該做的：部署 DLP、監控異常流量。
5. **防禦規避與影響（Defense Evasion & Impact）** 怎麼擦屁股、留下傷害？（\`T1070 - Indicator Removal\`、\`T1490 - Inhibit System Recovery\`） → 藍隊該做的：審核日誌、強化備份。

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
`,W=`> 又是假日了，來個比較輕鬆的主題

剛入職的時候，公司還沒分得這麼細，**IT 的監控、資安的巡檢，全都一把抓**。 每天一到公司，除了要看 AD、DNS、核心系統有沒有掛掉，還得盯著一堆 log：

- 防火牆有沒有被 scan
- DNS 有沒有異常 query
- 伺服器 CPU/記憶體是不是爆了

說實話，那時候感覺自己像個「24 小時的看門狗」。

---

## 從 IT 監控 → 資安巡檢

隨著人力慢慢增加，日常的 IT 監控有同事分攤，我才有時間把重心放到「資安監控」。 現在我的日常大概是：

- **Firewall**：看有沒有異常流量、爆量連線
- **EDR**：端點有沒有中惡意程式，哪台電腦一直在爆告警
- **SIEM**：彙整 log，有沒有奇怪的帳號嘗試登入、異地存取
- **Outlook Online**：有沒有被意外隔離的信件，需要去釋放的

這些東西，說白了就是 **「證據 + 警報」**，沒有它們，你根本不知道發生了什麼。

---

## 為什麼要留日誌？

ISO 27001 也很明確：**日誌與監控是必須的控制措施**（Annex A 8.15 / 8.16）。

- 沒有 log → 事情發生後完全追不到
- 有 log 但不看 → 等於白做工
- 有 log 又有監控 → 才能在早期發現異常

想像一下： 一台電腦連續 10 分鐘爆 100 次錯誤登入，如果沒有人發現，可能就是 AD 被暴力破解的開端。

---

## 工具再多，還是要有人盯

SIEM、SOAR、AI 偵測再厲害，都只是輔助。 最關鍵的還是：**有人要每天打開來看，並且能判斷什麼是真正的威脅**。 不然就會落到「工具很多，但都是高級展示品」的窘境。

---

## 小結

> **「沒有監控，你什麼都不知道。」**

備份讓資料回得來、災害復原讓系統活得下去，但 **沒有監控，你根本不會知道什麼時候該啟動這些計畫**。 這就是日誌與監控的價值。

> 不過說真的還是希望企業注重資安這塊，多請點人 工具是冰冷的，但人的生活是真實的。別讓工程師的假日，綁在一封 EDR 郵件上。

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10378945
`,F=`**「如果想轉職資安，要從哪裡開始？」**

說真的，資安的範圍大到你會覺得無從下手。 一堆名詞：Nmap、SIEM、EDR、SOC、APT… 到底要先學哪一個？

其實最簡單的方法就是 —— **去看求職網站上的職缺**。 因為 JD（Job Description）才是最誠實的需求。

---

## 從職缺看真實技能需求

> 大部分資安工程師會寫這幾個

- **弱點掃描 / 漏洞管理**：會操作 Nessus、OpenVAS 或類似工具
- **事件偵測與回應**：有用過 SIEM、EDR，能看 log、追異常
- **網路與系統基礎**：熟悉 TCP/IP、DNS，能處理 Windows/Linux 基本設定
- **程式與自動化**：至少懂一門語言（Python、Go），或能寫 Script 來省時
- **雲端安全**：AWS / Azure / GCP 基本防護經驗（有的職缺會寫「佳」）
- **證照**：CEH、Security+、CISSP、ISO 27001 常被列為加分項
- **軟實力**：細心、邏輯思考、耐心、溝通協調、英文讀寫能力

你可以看到，不會有人要求「一定要會全部」，但 **基礎 IT + 一兩項專長** 幾乎是標配。

---

## 技術面的基礎

資安不是憑空長出來的，它是 **IT 的延伸**。 所以轉職資安，第一步還是要打好 IT 基礎：

- **網路**：TCP/IP、DNS、Routing、防火牆
  → 可以把 CCNA 當成入門證照
- **系統**：Windows / Linux 基本操作
- **程式**：能看懂程式碼、會寫 Script（Python/Shell）做自動化

如果你走比較硬派技術，可以挑戰 CTF 六大領域：

1. Web
2. Crypto
3. Pwn
4. Reverse
5. Forensics
6. Misc

幾乎涵蓋大學資工的必修課，對轉職的人來說，是很完整的技能地圖。

---

## 技術 + 管理的切入點

不是每個人都要當「滲透高手」。 另一條路是走「技術 + 管理」：

- 學 ISO 27001 的概念，理解資安制度
- 了解風險管理、法規（GDPR、PCI DSS、個資法）
- 能把技術轉成管理聽得懂的語言（報告、簡報）

> 很多公司缺的就是「會講人話的資安人」。

---

## 證照的現實

證照的確是好敲門磚，但要注意成本。

> 因為真的很貴啊..

- **IT 基礎**：CCNA、Linux Essentials
- **資安入門**：Security+、CEH
- **進階管理**：ISO 27001 LA / LI、CISSP

> 先挑 **CP 值高、能快速讓你跨進門檻的**。 證照不是保證工作，但會讓 HR 至少願意多看你一眼。

---

原文連結：https://ithelp.ithome.com.tw/articles/10379737
`,L=`回顧

不知不覺，這個系列也走到尾聲了。 第一次參加鐵人賽，真的正如它的名字一樣──很難。 尤其我還一次報了兩個系列，結果 **DevSecOps 系列**在中途就沒能繼續更新。 但其實也不完全是沒時間，而是過程中踩了不少坑，例如天真地以為「今天發兩篇，明天就能休息」，結果後天文章上面直接寫著你 **已失敗**...。

原以為三十天很簡單，卻在第 20 天開始就明顯感受到題材枯竭。 回顧這段時間，我大致分享了 **資安工程師的日常工作**，以及在這條路上需要掌握的各種知識與心態。

在撰寫的同時，其實我也等於在整理自己一路以來的學習與經驗。 這些並不是教科書上的章節，而是每天可能遇到的真實場景。

當然過程中我也希望我的字眼是順暢且有趣，能讓讀者願意一直讀下去，所以不免俗也有借助 AI 來潤色。

---

## 文章總覽

> 希望這些主題能幫助對資安領域有興趣的人，至少摸到一點皮毛。

| Day | 主題 |
| --- | --- |
| 1 | Day 1- 法規推著我上場，學習讓我留下 |
| 2 | Day 2 - 公開情資很重要 |
| 3 | Day 3 - 鐵裝還是布甲？資安裝備選擇題 |
| 4 | Day 4 - 公司的第一道防線 |
| 5 | Day 5 - 文件地獄：葵花寶典? |
| 6 | Day 6 - EDR：手上那把神器 |
| 7 | Day 7 - IT 部門人少，資安工程師的多重宇宙 |
| 8 | Day 8 - 漏洞掃描大冒險：外包勇者 vs 自建工匠 |
| 9 | Day 9 - 什麼M365除了Word，也有資安產品? |
| 10 | Day 10 - 微軟有Zero Trust架構嗎? |
| 11 | Day 11 - 資料保護：別讓公司機密「長翅膀」飛出去 |
| 12 | Day 12 - 即使資料保護再嚴密，也擋不住一台失守的裝置 |
| 13 | Day 13 - 打帳密已經過時了?大門不只要鎖，還要驗明正身 |
| 14 | Day 14 - 資安工程師的週末小結 |
| 15 | Day 15 - 切碎內網，才能防止駭客橫向移動 |
| 16 | Day 16 - 不出手也能「看光光」：被動盤點你公司的對外曝險 |
| 17 | Day 17 - 為什麼一定要管「特權帳號」？ |
| 18 | Day 18 - 如果明天 DB 爆掉，你撐得住嗎？ |
| 19 | Day 19 - 如何打造一個可靠的備份策略？ |
| 20 | Day 20 — 為什麼要做災害復原？ |
| 21 | Day 21 - 資安專責人員 |
| 22 | Day 22 - 公司電腦上，還有隱私嗎？ |
| 23 | Day 23 - Patch Management 是一項既必要又棘手的任務。 |
| 24 | Day 24 - 風險評鑑：年度BOSS戰開打 |
| 25 | Day 25 - 一封垃圾郵件，可能就是資安危機的開端？ |
| 26 | Day 26 - 從T65K2到T1566：MITRE ATT&CK入門指南 |
| 27 | Day 27 - 為什麼藍隊要學MITRE ATT&CK？ |
| 28 | Day 28 - 沒有監控，你什麼都不知道 |
| 29 | Day 29 - 轉職資安人必備技能 |
| 30 | Day 30 - 尾聲：資安人的三十天 |

---

## 學校 vs. 公司

我一直覺得，**大學所學與公司實務之間，有很大的落差**。 在學校，我們習慣寫程式、做專題，可能用 VM 跑個小實驗就結束。 但一進公司，就會馬上被丟進一個完整的 IT 環境：

- **AD（Active Directory）**：帳號、群組、權限，錯一個就可能全公司登不進去。
- **DNS**：小小一筆設定錯誤，整個網路像失憶一樣。
- **ERP、MES、產線系統**：這些是公司營運的命脈，任何資安事件都可能造成實際金錢損失。

學校教的是基礎，但公司要的是能把基礎套進真實場景的人。 這也是為什麼我希望，這個系列能幫助剛踏入資安領域的朋友，有個更貼近實務的參考。

---

## 心得

資安領域瞬息萬變，每天都有新的威脅、工具、框架。 但我仍然希望這個產業能 **更包容新手、願意培育人才**。 畢竟，沒有人一開始就能看懂 \`T1566\` 或 \`CVE-2025-xxxx\`，大家都是從踩坑、出錯、被問倒中慢慢成長的。

如果你現在正覺得「自己什麼都不會」，那很正常。 重要的是保持好奇心，願意去翻、去試、去問。

---

## 結語

三十天的挑戰雖然告一段落，但資安的學習永遠不會結束。 對我來說，這更像是存了一個「里程碑存檔點」。 未來我還會繼續往前走，學更多東西，踩更多坑，再把故事寫下來。

當然，**明年我還是會再參加鐵人賽**。 只是這次經驗也讓我發現，臨時想到什麼就寫什麼，文章雖然真實，但缺乏系統性。 所以下一次，我會花點時間先規劃主題架構，讓整個系列更有脈絡，不只是「日更挑戰」，而是真正能幫助別人、也能沉澱自己的知識旅程。

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10379242
`,O=`# Day 1 - 為什麼漏洞需要標準化通報？從 CVE 說起

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀  
> 本週主題：CVE 與 CNA 基礎

## 前言

> 不免俗地，系列第一篇還是先來一段前言喇賽。

去年我第一次參加鐵人賽，題目是「打雜工程師的資安修煉之路」。

原本覺得連續寫 30 天根本是在找自己麻煩，沒想到每天東湊一點、西補一點，最後還真的寫完了。雖然過程中也有幾天很想直接躺平，但整體來說比想像中有趣，所以今年又跑回來挑戰一次。

以前準備發文時，我其實滿擔心自己文筆不夠好，甚至怕別人看完會想說：「這是哪個小學生投稿錯地方？」

不過這一兩年 AI 發展得很快，至少在寫作這件事上，確實能幫忙整理句子、潤稿和製作圖片。對我來說，它降低了不少寫作門檻，也讓我比較有勇氣再參加一次。

當然，AI 可以幫忙打字，卻不能幫忙負責。資料對不對、文章怎麼安排，以及最後到底想表達什麼，還是得由自己把關。

那今年為什麼會選 CVE？

其實原因也沒有多偉大。這幾年看到的 CVE 通報愈來愈多，加上今年因緣際會接觸到一些漏洞通報相關內容，查著查著才發現，原來一個漏洞從被發現到正式公開，中間要經過的事情比想像中多很多。

誰負責發 CVE 編號？  
為什麼同一個漏洞會看到不同的 CVSS 分數？  
CWE、CAPEC、EPSS 又是在幹嘛？  
有 CVE 就代表很危險嗎？

這些名詞平常都看過，但真的要把它們串在一起時，腦袋可能還是會打結。

所以這次想用 30 天，跟著一個漏洞走完它的公開旅程。從 CVE 編號、CNA 協調與漏洞描述，一路走到 CWE、CVSS、EPSS，以及最後怎麼判斷修補優先順序。

這個系列不會著重在某個漏洞要怎麼打，也不會每天丟一大堆規格文件叫大家回去啃。比較像是把我自己查過、踩過坑的內容整理起來，看看一份漏洞資訊究竟要怎麼寫，後面接手的人才不會看得一頭霧水。

## 為什麼還需要 CVE？

先想像一個很常見的情境。

某天群組突然有人丟進三個連結：

- 一篇研究者公開的 PoC
- 一份產品廠商的安全公告
- 一則寫著「這個洞已經有人在打」的資安情資

三篇標題不一樣，使用的名詞也不一樣。

研究者寫「某產品登入流程可被繞過」，廠商公告寫 \`Authentication bypass in product X\`，資安新聞則變成「未授權攻擊者可存取管理功能」。

這時候第一個問題通常還不是「這個洞幾分」，而是：

> 等一下，這三篇是在講同一個洞嗎？

研究者關心攻擊手法，廠商關心受影響與修補版本，防禦端先看有沒有利用跡象，系統管理者只想知道今晚到底要不要留下來加班。

大家都沒說錯，只是站的位置不同，講出來的東西自然也不一樣。

這就是 CVE 最先要處理的問題：先讓大家確定，我們現在講的是不是同一件事。

說穿了，CVE ID 有點像漏洞的身分證字號。

名字可能有人翻成中文、有人使用英文，也可能每篇文章下的標題都不一樣；但只要大家引用的是同一組 CVE ID，至少可以先把資料對到同一個漏洞上。

例如：

\`\`\`text
CVE-YYYY-NNNN
\`\`\`

它不會告訴你漏洞的全部細節，也不會直接告訴你今晚要不要加班，但它提供了一個穩定的關聯點。後續的廠商公告、修補版本、CVSS、CWE、EPSS、KEV 與資產盤點，才有辦法圍繞著同一個漏洞串起來。

## CVE 解決的是「識別」問題，不是所有問題

很多人第一次接觸 CVE 時，會以為 CVE 就等於完整的漏洞分析報告。其實比較精準的說法是：CVE 主要解決漏洞識別與資訊交換問題。

一筆 CVE Record 會包含漏洞描述、受影響產品或版本、參考連結等基本資訊，也可能進一步提供 CWE、CVSS 或其他補充資料。但 CVE 本身並不保證所有細節都已經完整到可以重現漏洞。完整技術細節通常還是會出現在 vendor advisory、研究者文章、修補 commit、PoC 或其他公開資料裡。

所以在閱讀 CVE 時，可以把它當成一個入口：

- 先用 CVE ID 確認漏洞身分
- 再看描述理解問題輪廓
- 接著看受影響版本與參考資料
- 最後搭配 CVSS、EPSS、KEV、PoC 等資料做風險判斷

這樣比較不會把 CVE 當成萬能答案，也比較符合實務上的使用方式。

## 為什麼標準化對防禦者很重要？

對防禦者來說，漏洞資訊最大的挑戰通常不是「知不知道有漏洞」，而是「能不能快速判斷跟自己有沒有關係」。

標準化資訊至少帶來幾個好處。

第一，它讓資產盤點可以對應漏洞。當掃描器、SBOM、弱點管理平台、修補公告都能引用同一個 CVE ID，組織就比較容易回答：「我們有沒有受影響版本？」

第二，它讓風險排序更有基礎。CVSS 可以描述漏洞的技術嚴重性，EPSS 可以補充漏洞在未來 30 天內遭實際利用的可能性，CISA KEV 這類清單則能告訴我們，哪些漏洞已經確認遭到實際利用。這些資料之所以能被串接，很大一部分是因為 CVE ID 提供了共同的關聯點。

第三，它降低跨團隊溝通成本。工程、維運、資安、管理層在討論漏洞時，如果都能引用同一個識別碼，就比較不容易在名稱、版本、影響範圍上各說各話。

## 一個好的通報，不只是「有洞」

漏洞通報的品質，會直接影響後續修補與風險判斷。如果描述只寫「存在安全漏洞」或「可造成未授權存取」，讀者仍然會有很多疑問：

- 哪個產品或元件受影響？
- 哪些版本受影響？
- 攻擊者需要什麼條件？
- 成功利用後會造成什麼影響？
- 使用者該去哪裡看修補資訊？

因此，標準化不是把文字變得制式，而是讓必要資訊更容易被檢查、理解與重複使用。好的漏洞描述，通常會盡量交代哪個產品或元件出了問題、問題發生在哪裡、攻擊者需要具備什麼條件，以及成功利用後會造成什麼影響。

例如，比起這樣寫：

\`\`\`text
某系統存在漏洞，攻擊者可取得資料。
\`\`\`

更好的方向會是：

\`\`\`text
某產品在特定版本中，因為未正確限制某功能的存取權限，已通過身分驗證的遠端攻擊者，可能讀取原本不應存取的資料。
\`\`\`

這段仍然是泛化範例，但它至少把產品範圍、版本概念、攻擊條件、問題原因和影響方向放進同一句話裡。

## 先從 CVE 把地圖攤開

CVE 是這個系列的起點，因為很多漏洞知識都會圍繞它展開。

接下來幾天會依序拆開幾個常見但容易混在一起的概念：CVE ID、CVE Record、CNA、NVD、Vendor Advisory。之後會進入 CWE、CAPEC、CVSS、EPSS 等主題。

如果把漏洞通報想成一份資料表，CVE ID 像是主鍵；CWE 幫助描述弱點類型；CAPEC 描述攻擊模式；CVSS 描述技術嚴重程度；EPSS 補充利用可能性。這些資料各自回答不同的問題，但串在一起後，就能讓漏洞資訊更容易被理解、搜尋、排序與處理。

![以 CVE ID 為中心，連結 CWE、CAPEC、CVSS、EPSS 與 KEV 的漏洞知識地圖](https://eric-s-dev-site.kuanlin.pro/blog-assets/ithome-2026/day-01-knowledge-map.svg)

## Day 1 先停在這裡

今天先建立一個基本觀念：漏洞需要標準化通報，不是因為大家喜歡填表，而是因為漏洞資訊會被很多角色重複使用。

CVE 的核心價值，是讓不同資料來源能對齊同一個漏洞。它不等於完整技術報告，也不等於風險的全部答案，但它是後續分類、評分、修補追蹤與風險管理的重要入口。

下一篇就從最常被混用的三個名詞下手：CVE ID、CVE Record、CVE List。平常聊天時混著說無妨，真的要查資料或寫系統時，它們可不能算同一樣東西。

## 參考資料

- CVE Program: https://www.cve.org/
- CVE Logo Usage Guidelines: https://www.cve.org/Resources/Media/LogoGuidelines/CVE-Logo-Usage-Guidelines.pdf
- CVE Record Format: https://github.com/CVEProject/cve-schema
- FIRST CVSS: https://www.first.org/cvss/
- FIRST EPSS: https://www.first.org/epss/
- CISA KEV: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
`,B=`# Day 2 - CVE 是什麼？CVE ID、CVE Record、CVE List 的差異

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀  
> 本週主題：CVE 與 CNA 基礎

## 前言

> Day 2 開始前，還是先來一段跟 CVE 完全沒關係的喇賽。

昨天 Day 1 寫完後，晚上跑去看《蜘蛛人》。買的電影套票有附爆米花和飲料，原本想說可以邊看邊吃，感覺非常舒服。

我是在前面還在播預告片時才進場，走到位子上坐好，電影也剛好開始。接著吃了幾口爆米花，準備喝我的檸檬紅茶時，才發現一件很尷尬的事——我忘記拿吸管了。

偏偏影廳和櫃檯又在不同樓層。電影都開始了，實在不想為了一根吸管錯過劇情，所以那杯檸檬紅茶就這樣從頭到尾完整地放在旁邊，一口都沒喝……

![無奈表情](https://ithelp.ithome.com.tw/images/emoticon/emoticon02.gif)

最後電影看完了、爆米花吃完了，檸檬紅茶則原封不動地跟著我一起離場。

好啦，題外話先到這裡。

## 回到正題：大家說的 CVE 是同一個東西嗎？

昨天 Day 1 講了一大堆，其實重點只有一句：

> 同一個漏洞，不管研究者、廠商或資安新聞怎麼稱呼，只要寫的是同一組 CVE ID，大家就知道在講同一件事。

但到了 Day 2，麻煩又來了。

因為大家平常講「CVE」時，可能是在講三個不同的東西。

既然前面剛好聊到電影，我們就繼續拿電影票來比喻。

假設我的電影票上有一組訂單編號：

\`\`\`text
ABC-123456
\`\`\`

這組編號可以讓櫃檯找到我的訂單，概念上就像 **CVE ID**。每一組 CVE ID 都是唯一的，用來指向特定的一筆漏洞紀錄。

但編號是編號，資料是資料。光看 \`ABC-123456\`，你不會知道我看哪部電影、幾點開演、坐在哪裡，也不知道套餐裡有沒有那杯完全沒喝到的檸檬紅茶。

把訂單打開後，裡面的電影名稱、場次、座位和套餐內容，就像 **CVE Record**。CVE ID 負責告訴大家「要找哪一筆」，CVE Record 才會告訴大家「這一筆裡面寫了什麼」。

至於影城系統裡全部的訂單集合，就可以想成 **CVE List**。它不是某一張電影票，而是收錄所有紀錄的總目錄。

先用三句話記起來：

- **CVE ID**：要找哪一筆漏洞
- **CVE Record**：這筆漏洞有哪些資料
- **CVE List**：收錄所有 CVE Record 的官方目錄

所以當有人說：

> 可以幫忙查一下這個 CVE 嗎？

最好再確認一下，他是想確認那組 CVE ID、查看 Record 裡的漏洞內容，還是到 CVE List 搜尋紀錄。

平常聊天時全部簡稱 CVE 當然沒關係，反正大家大概聽得懂。但真的要寫通報、查資料或設計系統時，這三個東西就不能全部混在一起。

CVE Program 自己也知道這件事，所以官方術語表直接把單獨使用的「CVE」標成 *Ambiguous*。講白一點就是：只說 CVE，實在有點模糊。

接下來就把 ID、Record 和 List 分開來看。

## 第一層：CVE ID 是唯一編號

CVE ID 的格式看起來很簡單：

\`\`\`text
CVE-YYYY-NNNN
\`\`\`

它由三個部分組成：

- \`CVE\`：固定前綴，看到它就知道這是一組 CVE ID
- \`YYYY\`：年份
- \`NNNN\`：四位以上的序號

![CVE ID 由固定前綴、年份與四位以上序號組成](https://eric-s-dev-site.kuanlin.pro/blog-assets/ithome-2026/day-02-id-anatomy.svg)

例如大家很熟悉的 Log4Shell：

\`\`\`text
CVE-2021-44228
\`\`\`

看起來沒有很複雜，但裡面有兩個很容易搞錯的地方。

### 年份不一定是發現漏洞的年份

\`2021\` 不一定代表研究者在 2021 年發現漏洞。依 CVE Program 的說明，年份會依 CVE ID 被保留、Record 首次發布，或漏洞首次公開的時間來決定。

所以只看這四個數字，沒辦法知道漏洞是哪一天被發現、哪一天通報廠商，也不知道廠商什麼時候完成修補。想還原完整時間線，還是得去看 Record、廠商公告或研究者公開資料。

### 最後一段不一定只有四位數

很多人看到 \`CVE-YYYY-NNNN\`，會以為最後只能放四位數。

其實四位只是最低長度。序號可以有五位、六位，甚至更多位，而且官方沒有設定最大位數。

因此，如果系統只接受四位序號，以後遇到合法的五位或六位 CVE ID，就可能直接把人家擋在門外。

不過要注意，格式正確只代表它「長得像」CVE ID，不代表這組 ID 一定存在，也不代表漏洞資料已經公開。

就像一串文字長得很像電影訂單編號，不代表櫃檯系統裡真的找得到這筆訂單。

要確認內容和狀態，就要繼續看 CVE Record。

## 第二層：CVE Record 才是完整資料

CVE ID 只回答：

> 我們現在講的是哪一個漏洞？

CVE Record 才開始回答：

> 這個漏洞到底是什麼？

一筆公開的 CVE Record，至少會提供：

- CVE ID
- 簡短的漏洞描述
- 受影響的產品與版本
- 可以公開查證的參考資料

除此之外，還可能看到 CWE、CVSS、致謝資訊、修補方式，以及 CNA 或 ADP 補充的其他資料。

換回電影訂單的例子，CVE ID 就像唯一的訂單編號；CVE Record 則是打開訂單後看到的完整內容。訂單內容之後可能更新，例如更換座位或修改套餐，但原本用來識別這筆訂單的編號不需要跟著改。

CVE Record 也是一樣。描述、版本範圍或參考連結可能在公開後繼續修正，但大家仍然可以透過同一組 CVE ID 找到它。

### 有編號，不代表資料已經公開

CVE Record 會處於不同狀態：

| 狀態 | 白話一點的意思 |
| --- | --- |
| \`RESERVED\` | 編號先保留起來了，但漏洞資料還沒準備公開 |
| \`PUBLISHED\` | 必要資料已經填好，Record 也正式公開了 |
| \`REJECTED\` | 這組 ID 與紀錄已失效，不應再拿來指稱有效漏洞 |

\`RESERVED\` 最容易讓人誤會。

你可能已經在廠商公告、GitHub issue 或新聞裡看到一組 CVE ID，點進 CVE.org 卻只有 \`RESERVED\`，什麼產品、版本和描述都看不到。

這不代表網站壞掉，也不代表有人忘記按儲存。通常只是這組 ID 已經先拿來做漏洞協調，但負責的 CNA 還沒準備好公開完整內容。

\`REJECTED\` 也不是直接把資料刪掉。這筆紀錄仍會留在 CVE List，讓後來查詢的人知道：這組 ID 已經失效，不要再繼續使用，也不會把它重新發給另一個漏洞。

## 第三層：CVE List 是官方總目錄

如果 CVE ID 是訂單編號，CVE Record 是單筆訂單內容，那 CVE List 就是收錄全部訂單的總目錄。

當然，CVE List 收的不是電影票，而是由 CVE Program 識別或接收到的 CVE Record。

![CVE ID、CVE Record 與 CVE List 的三層關係](https://eric-s-dev-site.kuanlin.pro/blog-assets/ithome-2026/day-02-three-layers.svg)

一般使用者可以在 CVE 官網搜尋紀錄；如果要做大量分析、資料同步或建立弱點平台，也可以從官方的 \`cvelistV5\` repository 取得採用 CVE Record Format 5.x 的機器可讀資料。

因此，在 CVE List 中找到一組 CVE ID，只能確定官方目錄裡有這筆紀錄。至於漏洞資料是否已經公開，或這組 ID 是否仍然有效，還要繼續看它是 \`RESERVED\`、\`PUBLISHED\` 還是 \`REJECTED\`。

不能只看到搜尋結果出現，就直接腦補成「漏洞已確認、分數 9.8、修補也已經出了」。後面那些資訊都要另外確認。

## 把三個名詞放回真實案例

假設今天拿到：

\`\`\`text
CVE-2021-44228
\`\`\`

這串唯一編號是 **CVE ID**。

打開後看到的漏洞描述、受影響產品、版本、狀態與參考連結，是這個 ID 所對應的 **CVE Record**。

而收錄這筆 Record，也持續收錄其他漏洞紀錄的官方目錄，就是 **CVE List**。

所以有人說「這個漏洞已經有 CVE」時，還可以再多問一句：

> 是只有 ID 已經保留，還是 Record 已經正式公開？

這句話很重要。因為只有一組編號，不代表 CVSS、CWE、修補版本或 PoC 都已經準備好了。它們可能出現在 Record 裡，也可能要到廠商公告、NVD 或研究者文章繼續找。

## 實際查詢時怎麼走？

拿到一組 CVE ID 後，我會照這個順序看：

1. 先到 CVE.org 確認這組 ID 是否存在。
2. 看 Record 是 \`RESERVED\`、\`PUBLISHED\` 還是 \`REJECTED\`。
3. 如果已公開，再看產品、版本與漏洞描述。
4. 打開 references，找廠商公告和修補資訊。
5. 資料仍然不夠，再往 NVD、修補 commit、PoC 或其他情資來源找。

這幾步不複雜，但可以避免一個很常見的錯誤：看到 CVE 編號，就以為自己已經看完漏洞了。

其實那可能只像拿到電影訂單編號，連電影幾點開演都還不知道。

## 參考資料

- CVE Program Glossary: https://www.cve.org/ResourcesSupport/Glossary
- CVE Program Process: https://www.cve.org/about/Process
- CNA Operational Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
- CVE List V5: https://github.com/CVEProject/cvelistV5
- CVE Record Format: https://github.com/CVEProject/cve-schema
`,H=`# Day 3 - CNA、Root、MITRE 與 NVD：一筆 CVE 到底是誰在處理？

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：CVE 與 CNA 基礎

## 先離題一下：昨天的煙火

昨天 8/5 去看大稻埕煙火。本來看到「大稻埕」三個字就有點怕，感覺是要去人群裡面練閃避技能；還好先看了脆上的建議，改去水庫停車場附近找位置，沒有硬擠到大稻埕現場。

結果真的不錯看。視野很好，人也相對舒服，算是有成功避開一場交通與人流的壓力測試。

![2026 年 8 月 5 日的大稻埕煙火](/blog-assets/ithome-2026/day-03-dadaocheng-fireworks.jpg)

看完煙火回來，本來要繼續整理今天的內容，結果腦中一直卡著一個很常見的問題。

「這個 CVE 是 MITRE 發的嗎？」

「要申請 CVE，是不是去 NVD 填資料？」

這兩句聽起來都滿合理，但其實都差了一點。問題不在於名詞太多，而是大家常常知道名字，卻不知道它們在流程裡各自站哪一站。

今天就不先背組織圖了，直接把 CNA、Root、MITRE 與 NVD 拆開來看。

![CNA、Root、MITRE 與 NVD 在 CVE 生態系中的角色關係](/blog-assets/ithome-2026/day-03-role-map.png)

## CVE 不是 MITRE 一個人處理完的

先講結論：CVE Program 不是由單一組織集中處理全世界所有漏洞。

它比較像一個分工網路。產品廠商、開源專案、安全組織與協調單位，只要被授權並且有對應的處理範圍，就能在自己的 scope 內指派 CVE ID、建立並發布 CVE Record。

所以遇到漏洞時，第一個問題通常不是「這個 CVSS 幾分」，而是：「這個問題該由誰處理？」

## CNA：真正會指派 ID、發布紀錄的人

CNA 是 **CVE Numbering Authority** 的縮寫。簡單說，就是被 CVE Program 授權、可以在特定範圍內處理 CVE 的組織。

但 CNA 不是拿到權限後就什麼漏洞都能接。每個 CNA 都有自己的 **scope**，可能是：

- 自己開發與維護的產品
- 特定開源專案或生態系
- 某個國家、產業或協調範圍
- 自己負責的漏洞揭露或協調服務

例如某個產品供應商是 CNA，最適合處理的通常就是自家產品的漏洞；研究者回報一個完全無關的產品問題，就不該因為「手上有 CVE ID」而直接接下來。

一份通報進來後，CNA 大致會做這些事：確認 scope、判斷是否符合指派規則、避免和其他 CNA 重複處理、保留或指派 CVE ID，再整理描述、受影響產品與版本、references 等資料，最後發布或更新 CVE Record。

所以 CNA 不只是發號碼。真正麻煩的地方通常在前面：這是不是同一個問題？版本範圍有沒有講清楚？有沒有更適合的 CNA？公開後別人讀不讀得懂？

## Root：不是逐筆寫 CVE，而是讓流程有人管

Root 位在 CNA 的管理層，負責的是某個範圍內的招募、訓練與治理。

它不一定要親自代寫每一筆 CVE Record，但要確保下面的 CNA 有規則可依、有問題可問，也有人能處理 scope 重疊、爭議或升級事項。

用比較生活化的說法，CNA 比較像第一線窗口；Root 則是負責把窗口、流程與規則維持住的人。

現行 CVE Program 架構還有 **Top-Level Root（TL-Root）**。TL-Root 直接對 CVE Board 負責，目前有 CISA 與 MITRE 兩個 TL-Root。它們各自管理底下的 Root、CNA 與 CNA of Last Resort（CNA-LR）階層。

這裡的重點不是把組織圖背下來，而是理解一件事：CVE 的處理路徑不是只有「丟給 MITRE」這一條。正常情況下，會先找最靠近產品或範圍的 CNA；真的沒有適合的窗口，才會依規則往 CNA-LR 或上層體系協調。

## MITRE：它同時戴了好幾頂帽子

MITRE 最容易被誤會，因為它不是只有一個身分。

在 CVE Program 裡，MITRE 目前同時擔任 Secretariat 與 TL-Root，也在自己的階層中承擔 CNA-LR 的角色。Secretariat 主要提供行政、後勤與基礎設施支援；TL-Root 則負責管理其下的階層。

所以「MITRE 維護 CVE Program」這句話沒有錯，但不能直接推論成「每一筆 CVE 都是 MITRE 發的」。

實際上，很多 CVE Record 是由各地的 CNA 直接發布。真的想知道某一筆是誰處理的，最可靠的方法不是猜，而是看該 Record 的 CNA container 或 provider metadata。

## NVD：收到 CVE 之後，才開始補資料

NVD 是 **National Vulnerability Database**，由美國 NIST 維護。它的工作不是受理漏洞通報，也不是替人指派 CVE ID。

比較好記的流程是：

\`\`\`text
CNA 發布 CVE Record → CVE List → NVD 收錄並進行 enrichment
\`\`\`

NVD 會根據 CVE Record 裡的 references 與公開資訊，補上比較適合弱點管理使用的資料，例如 CVSS v4.0、CVSS v3.1、CWE、CPE applicability statements，以及 reference tags。

因此 CVE 官網和 NVD 的欄位不完全一樣很正常。可能是 CVE Record 已經公開，但 NVD 還在補資料；也可能 CNA 與 NVD 對 CVSS 有不同評估。這不一定代表誰寫錯，而是資料來源與用途不同。

如果是想通報漏洞或申請 CVE ID，直接找 NVD 就是找錯窗口；NVD 是發布之後的下游資料服務。

## 沿著一筆通報走一次

假設研究者發現某個產品的漏洞，通報先送到該產品的 CNA。CNA 會先確認是不是自己的 scope，確認後才保留 ID、整理資料並發布 Record。

如果產品範圍不清楚、兩個 CNA 都可能處理，或流程上有爭議，才需要 Root 協調。真的找不到任何適合的 CNA，再由 CNA-LR 承接。Record 公開到 CVE List 後，NVD 才會從公開資料開始做 enrichment。

整條路線看起來有不少角色，但實務上只要先記住下面這句就夠了：

> 要申請或通報 CVE，先找 scope 合適的 CNA；要看公開後的 NIST 分析，再去 NVD。

## 在台灣可以怎麼找？

如果目標是台灣的產品或組織，實務上可以先看該廠商有沒有自己的漏洞揭露政策、\`security.txt\`，或是否本身就是 CNA。直接交給最了解產品的人處理，通常會是最快的路。

若一時找不到廠商窗口，或需要第三方協調，TWCERT/CC 是可以考慮的管道。TWCERT/CC 自 2018 年起就是 CNA，也有漏洞通報與協調機制；是否能承接，仍要看案件是否落在它的處理範圍內。

HITCON ZeroDay 也值得知道。它是台灣的漏洞通報與協調平台，會協助驗證問題並聯繫被通報的組織，特別適合遇到沒有明確窗口的台灣組織。不過它不是用來直接申請 CVE ID 的 CNA 入口；需不需要 CVE、由誰指派，還是要回到產品廠商或適合的 CNA 來判斷。

## 下次別再找錯窗口

CVE Program 比較像一個分散合作的網路，不是一間把全球漏洞全部收進來處理的總公司。

CNA 在第一線處理指派與發布；Root 維持階層與治理；MITRE 同時扮演多個 Program 角色；NVD 則是在公開後把資料整理得更適合做弱點管理。加上台灣的窗口一起看，方向就更清楚了：先找產品廠商；需要協調時找 TWCERT/CC 或 HITCON ZeroDay；需要公開後的弱點資料，再去看 CVE 與 NVD。

下一篇就沿著這條路繼續走：一個漏洞從被發現開始，到公開成 CVE Record，中間通常會經過哪些階段？

## 參考資料

- CVE Program Structure: https://www.cve.org/ProgramOrganization/Structure
- CVE Partner Roles: https://www.cve.org/PartnerInformation/ListofPartners
- MITRE Partner Information: https://www.cve.org/PartnerInformation/ListofPartners/partner/mitre
- CNA Operational Rules: https://www.cve.org/resourcessupport/allresources/cnarules
- NVD CVEs and the NVD Process: https://nvd.nist.gov/general/cve-process
- NVD General Information: https://nvd.nist.gov/general
- TWCERT/CC Vulnerability Disclosure Policy: https://www.twcert.org.tw/en/cp-59-98-f496f-2.html
- HITCON ZeroDay: https://zeroday.hitcon.org/
`,U=`# Day 4 - 一個漏洞從發現到公開的生命週期

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：CVE 與 CNA 基礎

今天沒什麼生活素材可以講，就直接進文章吧 XDD

不過在講 CVE lifecycle 前，先拿大家比較熟的網購包裹當比喻。你按下下單，不代表包裹已經在門口；看到「賣家已出貨」，也不代表物流已經送到；就算貨到了，還可能發現寄錯東西要退貨。

漏洞也是差不多的感覺。研究者把報告寄出去，不代表 CVE 已經有了；拿到 CVE ID，也不代表細節已公開；公開後，內容也還可能更新。

「這個問題確認了，CVE 編號是……」大概是研究者很想收到的回覆之一。但從寄出報告到看到公開 CVE，中間不是按一顆按鈕就結束。有些問題很快就能確認產品、版本與影響；有些光是重現就要來回好幾次，還可能碰上多家供應商、共用元件或公開時間協調。

CVE Program 將主要流程整理成六個階段：

\`\`\`text
Discover → Report → Request → Reserve → Submit → Publish
\`\`\`

![CVE Program 官方 CVE Record lifecycle：Discover、Report、Request、Reserve、Submit、Publish](/blog-assets/ithome-2026/day-04-cve-record-lifecycle-official.jpg)

*圖：CVE Record Lifecycle，來源：[CVE Program Process](https://www.cve.org/about/Process)。*

這張圖看起來一路向右，乾淨得不得了。實務上當然沒這麼聽話，每個階段都可能需要補資料、重新確認，甚至回頭釐清前一步。接下來就逐段拆開來看。

## 1. Discover：發現可能的漏洞

流程從某個人或組織發現疑似安全問題開始。可能是研究人員、產品使用者、內部測試團隊、自動化掃描系統，或供應鏈中的其他人。

這時候的關鍵字是「可能」。掃描器跳警告、程式崩潰，或看到不預期的行為，都可能是線索；但還不能直接畫上等號說「這一定有 CVE」。

初步確認時，通常會先問幾件事：問題在哪個產品或元件？哪些版本可能受影響？能不能穩定重現？需要什麼條件？成功利用後可能造成什麼影響？

## 2. Report：通報給適合的窗口

確認不是單純 bug 後，下一步是把問題送到對的地方。通常會先找產品供應商、專案維護者，或涵蓋該產品 scope 的 CNA。

這一步有點像寄包裹時地址寫錯。資料再完整，送錯窗口還是得被轉來轉去。若產品本身已有 CNA，讓最了解產品與版本的人處理，通常更容易確認受影響範圍與修補方式。

一份可處理的初始通報不一定要像完整研究報告，但至少盡量附上產品與測試版本、重現步驟、必要條件、實際與預期結果、安全影響，以及 PoC、log、封包或 crash 資訊等證據。若已有公開時間規劃，也應一併說明。

尚未公開的漏洞更要小心揭露範圍。大家都想趕快修好，但在協調完成前把可利用細節丟到公開地方，通常只會讓事情更難收。

## 3. Request：確認是否需要 CVE ID

收到通報後，CNA 會先確認是否落在自己的 scope 內，並依 CVE Program 規則判斷是否適合指派 CVE ID。

這不是按下「產生編號」就結束。還可能要確認：問題有沒有實際安全影響？是不是已經有其他 CVE ID？同一串現象究竟是一個漏洞還是多個？產品、版本與公開狀態是否足以支撐判斷？

所以被要求補件，或被引導去其他 CNA，不一定是在否定通報。很多時候只是目前的資料還不足，或這份包裹真的寄錯地址了。

## 4. Reserve：先保留一組 CVE ID

符合條件後，CNA 可以保留一組 CVE ID，Record 會處於 \`RESERVED\` 狀態。

\`\`\`text
CVE-2026-NNNN  RESERVED
\`\`\`

它代表這組 ID 已經被拿來做早期協調與管理，但 CNA 還沒有準備好公開漏洞細節。修補流程、advisory 草稿或跨組織協調文件，就能先用同一組編號講同一件事。

這裡很容易看錯幾件事：Reserved 不等於 Published；不代表細節已可查詢；也不代表修補已完成。

如果 CVE ID 已經出現在公開公告或其他來源，但 Record 還沒填好細節，就常被稱為 **Reserved but Public**。對一般使用者來說，這通常只表示「知道有這組 ID」，還不能據此完成風險判斷。

## 5. Submit：把能公開的資料整理好

保留 ID 後，CNA 需要準備可發布的 CVE Record。官方流程列出的內容包括受影響產品、受影響或已修補版本、漏洞類型、根因或影響，以及至少一個公開 reference。

這段常常和廠商修補、advisory 撰寫、公開時間協調一起進行。好的描述至少讓人看得出來：「哪個產品，因為什麼問題，在什麼條件下，可能造成什麼影響。」reference 則把讀者帶到修補公告或其他完整資料。

只寫「產品存在安全漏洞」不是不能送，但幾乎幫不上資產判斷、風險排序和修補追蹤。真正花時間的常常不是填欄位，而是把版本與影響範圍講清楚。

## 6. Publish：發布到 CVE List

當最低必要資料與公開 reference 都準備完成後，負責的 CNA 會將 CVE Record 發布到 CVE List，狀態轉為 \`PUBLISHED\`。

\`\`\`text
RESERVED → PUBLISHED
\`\`\`

這時一般使用者才能在 CVE 官網搜尋與閱讀，系統也能取得機器可讀資料。發布後，下游才會開始各自的處理。例如 NVD 收錄 Published CVE 後，可能根據 references 與公開資訊補充 CVSS、CWE、CPE 與 reference tags。

所以同一天內不同網站顯示的資料量不同很正常：CVE Record 已發布，不代表每個掃描器、資料庫或情資平台都已經同步完成。

## 發布不是流程的終點

官方 lifecycle 圖畫到 Publish，但公開後仍可能補充或修正受影響版本、描述、references，或新增 CVSS、CWE 與其他 ADP enrichment。遇到重複指派或其他原因時，Record 也可能變成 \`REJECTED\`。

CVE Record 是可更新的資料，不是發布後就永遠不變的公告。做風險判斷時，除了第一次發布日期，也可以留意最後更新時間與資料來源。

## 把流程走一次

假設研究者發現某產品的權限檢查缺失：未授權帳號可以存取管理功能。

1. 研究者先確認可重現，整理影響與證據。
2. 透過廠商的安全通報管道送出報告。
3. 廠商確認問題，並由合適的 CNA 判斷是否符合 CVE 指派規則。
4. CNA 保留 CVE ID，供修補與 advisory 協調使用。
5. 廠商確認受影響版本、完成修補，並準備公開 reference。
6. CNA 發布 CVE Record，廠商同步發布 advisory。
7. NVD 與其他平台陸續收錄或補充資料。

這是一條理想化時間線。若涉及共享元件、多家供應商或供應鏈，scope、版本與公開時間的協調都會更複雜，包裹也就不只轉運一次了。

## 幾個容易看錯的時間點

拿到 CVE ID，不代表內容已公開，它可能仍停在 Reserved；看到 Record Published，也不能直接推論修補已經提供，還是要打開 vendor advisory 與 references。ID 裡的年份同樣不是漏洞發現年份，不能拿來還原完整時間線。

至於 CVE.org 已經查得到、NVD 卻還沒有評分，通常只是下游 enrichment 尚未完成，不代表 CVE 無效。把這幾條時間線混在一起，才會出現「明明有 CVE，為什麼這裡還沒有資料？」的疑問。

## 公開不是句點

一個漏洞從發現到公開，大致經過：

\`\`\`text
發現 → 通報 → 請求與判斷 → 保留 ID → 整理資料 → 發布 Record
\`\`\`

說穿了，真正困難的通常不是拿到一組編號，而是確認 scope、避免重複、釐清受影響版本、整理可公開資料，以及協調適當的揭露時間。編號只有一行，前面的協調可能是一長串。

下一篇打開實際的 CVE Record 結構，看識別資料、產品版本、影響與資料來源分別被放在哪裡。

## 參考資料

- CVE Program Process: https://www.cve.org/about/Process
- CNA Operational Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
- CVE Program FAQ: https://www.cve.org/ResourcesSupport/FAQs
`,G=`# Day 5 - CVE Record 裡通常包含哪些欄位？

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：CVE 與 CNA 基礎

> 遇到鐵人賽的第一個假日，本來想說終於不用上班，可以睡晚一點。結果一睜開眼睛，腦袋馬上跳出一句話：「對齁，今天的文章還是得寫。」
>
> 看了一下外面的天氣，目前好像也沒什麼颱風要來的跡象。既然沒有風雨大到哪裡都不能去，就更想趕快把文章寫完，下午還能出去晃晃。
>
> 鐵人賽最公平的地方，大概就是它不管今天是平日還是假日，時間一到，文章照樣要交。平日是下班後拖著疲憊的身體寫；假日則是坐在電腦前，一邊想著外面天氣好像不錯，一邊告訴自己：「先把今天這篇寫完再出去。」

原本想說，既然是假日，今天就挑個比較輕鬆的內容。

昨天才剛跟著一個漏洞走完發現、通報、保留編號到正式公開的流程。今天只要把公開後的 CVE Record 打開來看看，應該不會太難吧？

結果點開 CVE JSON 後，映入眼簾的是 \`cveMetadata\`、\`containers\`、\`affected\`、\`problemTypes\`，一層包著一層。

好，當我沒說。

假日果然沒有比較輕鬆。

第一次打開 CVE JSON，畫面真的不太親切。看沒幾行，就很想默默把分頁關掉，回到網頁版只看漏洞描述和 CVSS 分數，假裝自己什麼都沒看見。

但問題也出在這裡。

只看描述和分數，很容易漏掉真正會影響判斷的資訊：這份資料是誰提供的、哪些版本受影響、Record 後來有沒有更新，以及眼前這個分數到底是誰算的。

不過別擔心，今天不打算帶大家硬背 JSON schema。

我們只要把一筆 CVE Record 拆成幾個比較看得懂的區塊，弄清楚每一區大概在放什麼。下次再看到整包 JSON，至少不會立刻關掉分頁。

## 先別被大括號嚇跑

目前的 CVE Record 採用 CVE JSON 5.x 格式。

如果把那些大括號、方括號和逗號先遮起來，一筆 Record 大致可以拆成這幾個部分：

![CVE Record 結構示意：cveMetadata、CNA container 與可選的 ADP container](https://eric-s-dev-site.kuanlin.pro/blog-assets/ithome-2026/day-05-record-anatomy.png)

1. \`cveMetadata\`：這筆 Record 的基本資料與狀態。
2. \`containers.cna\`：負責發布的 CNA 所提供的主要漏洞資料。
3. \`containers.adp\`：其他獲授權的角色後續補上的資料，可能沒有，也可能不只一組。

最外層通常還會看到 \`dataType\` 和 \`dataVersion\`。

這兩個欄位比較像包裹外面的規格標籤，主要是告訴系統：「這包資料是什麼格式、該用哪個版本的規則來讀。」它們很重要，但不是在解釋漏洞怎麼發生。

所以第一次閱讀時，不用每一個欄位都從頭慢慢啃。先認得這幾個大區塊，事情就已經簡單不少。

## cveMetadata：先確認這包東西是誰

\`cveMetadata\` 可以看成這筆 Record 外面的資料標籤。

它不會告訴你漏洞怎麼利用，主要回答的是：

> 這是哪一筆紀錄？由誰負責？現在是什麼狀態？什麼時候更新過？

常見欄位包括：

- \`cveId\`：例如 \`CVE-2026-12345\`
- \`assignerOrgId\`：負責這組 ID 的組織識別碼
- \`state\`：這筆 Record 目前的狀態
- \`dateReserved\`：ID 被保留的時間
- \`datePublished\`：Record 首次發布的時間
- \`dateUpdated\`：Record 最近更新的時間

這幾個日期看起來很像，但回答的是不同問題。

\`dateReserved\` 是編號被保留的時間，不是漏洞公開的時間；\`datePublished\` 是 Record 首次發布的時間，也不代表研究者當天才發現漏洞；\`dateUpdated\` 則表示這筆資料後來又被修改過。

例如廠商修正受影響版本、調整描述或新增參考連結，\`dateUpdated\` 就可能跟著改變。

所以看到一筆兩年前發布的 CVE，也不要直接認定內容兩年都沒動過。先瞄一眼更新時間，有時會發現它昨天才剛改完。

另外也要注意 \`state\`。

如果狀態是 \`REJECTED\`，代表這組 ID 已經不再用來指稱一筆有效的獨立漏洞。原因可能是重複指派、後來確認不是安全問題，或有其他需要撤回的情況。

遇到這種紀錄，不要再抱著舊描述繼續分析，應該先看它的 rejection reason，確認發生了什麼事。

不然很可能認真研究半天，最後才發現自己查的是一個已經被判出局的號碼。

## containers.cna：真正的主菜在這裡

看完外面的資料標籤，接下來就可以打開 \`containers.cna\`。

一筆已發布 Record 的主要漏洞內容，通常都放在這裡。這份資料由負責該漏洞的 CNA 提供，但 CNA 不一定就是產品廠商，也可能是研究機構、協調單位或其他獲授權的組織。

這個 container 裡的欄位很多，不過實際閱讀時，可以先挑幾個比較重要的看。

### providerMetadata：這份資料是誰放進來的？

\`providerMetadata\` 通常會提供組織 ID、簡稱和更新時間，用來標示這個 container 的資料來源。

這個欄位平常看起來很不起眼，但當一筆 Record 同時出現 CNA、CVE Program 或其他 ADP 提供的資料時，它就很重要。

因為不同單位可能會提供不同的 CVSS、CWE 或補充資訊。這時候不能把所有內容攪在一起，再說「官方就是這樣寫」。

先看 provider，才知道這句話、這個分數或這項分類究竟是誰提供的。

簡單來說，吃東西之前先看一下外送單，不然等等連這份餐是誰送來的都搞不清楚。

### title：先看標題，但不要只看標題

\`title\` 是漏洞的短標題，通常會用一行文字帶出產品、元件或弱點類型，例如：

\`\`\`text
某元件存在路徑穿越漏洞
\`\`\`

它很適合讓人快速掃過，但畢竟只是一行標題，不可能把攻擊條件、受影響版本和實際影響全部塞進去。

而且不是每筆 Record 都一定會有 \`title\`。

所以標題可以先看，但不能看完標題就宣布結案。這就像新聞只看標題一樣，很快，但翻車的速度通常也很快。

### descriptions：終於開始講這個洞在幹嘛

\`descriptions\` 是比較接近人類正常閱讀方式的漏洞描述。

理想情況下，讀完描述後應該能回答幾個問題：

- 哪個產品或元件出了問題？
- 問題發生在哪裡？
- 攻擊者需要具備什麼條件？
- 成功利用後會造成什麼影響？

例如只寫：

\`\`\`text
某產品存在驗證不足漏洞。
\`\`\`

看完還是會滿頭問號。

誰可以利用？要不要登入？從遠端就能打嗎？成功後可以讀資料、改設定，還是直接接管系統？

如果能進一步寫成「未通過身分驗證的遠端攻擊者，可透過特定介面修改系統設定」，對後續判斷才比較有幫助。

不過，漏洞描述也不是完整的技術報告。PoC、修補 commit、繞過方式或更詳細的操作流程，通常還是得往 advisory 或其他 references 繼續找。

### affected：跟我家的系統到底有沒有關係？

如果是站在防禦者或維運人員的角度，\`affected\` 很可能是整筆 Record 最值得先看的地方。

因為大家最想知道的，通常不是這個洞聽起來有多可怕，而是：

> 我們公司的版本到底有沒有中？

常見欄位包括：

- \`vendor\`：產品供應商或維護組織
- \`product\`：受影響的產品
- \`versions\`：各版本是否受影響
- \`platforms\`：特定作業系統、硬體或執行平台
- \`modules\`、\`programFiles\`、\`programRoutines\`：更細的受影響元件
- \`defaultStatus\`：未逐一列出版本的預設狀態

其中 \`versions\` 可能會看到：

- \`affected\`
- \`unaffected\`
- \`unknown\`

版本也不一定只寫成一個固定數字，有時會是一整段範圍，例如某個版本以上、某個版本以前，或直到某個修補版本為止。

這時還要留意邊界有沒有包含在內，以及 \`lessThan\`、\`lessThanOrEqual\` 這類表示方式。

一個很危險的讀法，是看到產品名稱相同，就立刻宣布全部中獎。

實際上，產品分支、平台、模組、設定和版本邊界，都可能改變最後結論。名稱一樣不代表版本一樣，更不代表每一台機器都受影響。

不然看到自家有 Apache，就把所有寫著 Apache 的 CVE 全部丟進緊急修補清單，維運人員大概會先想辦法修補提出清單的人。

### problemTypes：這個洞是哪一種類型？

\`problemTypes\` 常用來放 CWE，例如：

\`\`\`text
CWE-79: Improper Neutralization of Input During Web Page Generation
\`\`\`

它是在描述弱點類型或問題根因，不是另一組漏洞編號。

CVE ID 回答的是「哪一個漏洞」，CWE 則比較像是在回答「這是哪一類問題」。

不過，不是每一筆 Record 都能立刻選到非常精確的 CWE。有時資訊還不夠完整，有時不同提供者也可能做出不同分類。

與其為了把欄位填滿，硬挑一個看起來差不多的 CWE，不如先確認漏洞真正的失效機制。

CWE 和根因分類在第 8 到第 10 天還會再慢慢拆，今天先知道去哪裡找就好。

### metrics：大家最愛先看的分數

\`metrics\` 可以放 CVSS v3.1、CVSS v4.0 或其他評估資料，通常會包含向量、分數和嚴重程度。

這大概是整筆 Record 裡最容易被第一眼看到的欄位。

畢竟 \`9.8\` 看起來就是比一整串版本範圍刺激很多。

但這裡要先記住兩件事：

1. CVE ID 本身不會自動附贈一個固定分數。
2. 不同資料提供者可能因為掌握的資訊或評估假設不同，算出不同的向量與分數。

所以看到某個網站顯示 CVSS 9.8，除了被數字嚇到之外，還要一起看它使用哪個 CVSS 版本、向量怎麼寫，以及這個分數是誰提供的。

如果 CNA container 沒有 \`metrics\`，也不代表這筆 CVE 是假的，更不代表它沒有風險。可能只是 CNA 沒有在這個 container 裡提供評分。

分數很方便，但不能把大腦整個外包給分數。

### references：覺得資料不夠，就從這裡繼續挖

\`references\` 會列出與漏洞相關的公開網址，可能包含：

- 廠商安全公告
- 修補公告或 release notes
- Git commit、issue 或 pull request
- CERT/CC 或其他協調單位的公告
- 研究報告、技術分析或利用說明

有些 reference 還會帶著 \`vendor-advisory\`、\`patch\` 或 \`exploit\` 等 tag，幫助系統判斷這個連結大概是什麼類型。

不過，tag 只是分類提示，不是品質保證。

真正要確認修補版本、發布時間或利用方式，還是得把原始頁面打開來看。只收藏連結但完全不點進去，就像買了參考書卻只欣賞封面，知識通常不會自己跑進腦袋。

### 其他欄位：不是每一筆都會全員到齊

Record 裡還可能看到：

- \`credits\`：致謝發現者、通報者或協調者
- \`timeline\`：發現、通報、確認與公開的時間線
- \`supportingMedia\`：補充文字或媒體資料
- \`solutions\`：修補或緩解方式
- \`workarounds\`：暫時性的替代措施
- \`configurations\`：容易受影響的特定設定
- \`exploits\`：已知利用資訊

這些欄位都很有價值，但不是每筆 Record 都會全部出現。

缺少 \`workarounds\`，不代表現實中一定沒有暫時緩解方式；沒有 \`exploits\`，也不能直接推論從來沒有人利用過。

比較安全的理解是：

> 這個資料來源目前沒有在這個欄位提供相關資訊。

「資料裡沒寫」和「現實中不存在」，中間還隔著一段不小的距離。

## containers.adp：主菜上完後，其他人又端東西過來

ADP 是 Authorized Data Publisher，也就是獲授權的資料發布者。

它可以在 CNA 已發布的主要內容之外，補上額外分析、標準化資料或其他參考資訊，同時保留各自的資料來源。

其中，CVE Program 自己後來補上的 references，也可能放在採用 ADP 格式的 CVE Program Container 裡。其他 ADP 則可能補充 CVSS、CWE、CPE、KEV 或 SSVC 等資料。

這種設計的好處是，不同來源不必互相覆蓋。

假設 CNA 算出一組 CVSS，另一個 ADP 根據自己掌握的資訊算出另一組，兩份評估可以同時保留。讀者可以知道誰提供了什麼，再依實際用途決定要採用哪一份。

所以一筆 Record 裡同時出現兩組 CVSS，不一定是系統壞掉，也不一定是有人算錯。

先看它們分別在哪個 container，再檢查 \`providerMetadata\`，通常就能知道這兩組資料是從哪裡來的。

千萬不要直接抓第一個數字，然後開始跟別人爭「官方明明就是這一分」。

## 常見不代表一定要有

CVE JSON 能放的東西很多，但不代表每一筆 Record 都必須把所有欄位填滿。

可以先記住：

- CVSS 很常見，但不是每筆 Record 都一定由 CNA 提供。
- CWE 很有用，但不一定能在第一時間精確分類。
- CPE 常見於 NVD，不應預設一定會出現在 CNA container。
- 沒看到 PoC，不代表漏洞不存在。
- 沒列出 workaround，也不代表廠商公告裡一定沒有暫時措施。

JSON schema 比較像是提供很多不同尺寸的收納格，讓資料有地方可以放。

但有這個格子，不代表每一筆 CVE 都必須把它塞滿；格子是空的，也不代表世界上完全不存在那項資訊。

只是這一包資料目前沒裝進來而已。

## 真正查資料時，我會先看哪裡？

如果今天拿到一筆陌生的 CVE，我通常會照這個順序看：

1. 先看 \`cveId\`、\`state\` 和 \`dateUpdated\`，確認是哪一筆、是否有效，以及最近有沒有更新。
2. 接著跳到 \`affected\`，確認產品和版本範圍。
3. 如果自己的資產可能受影響，再細讀 \`descriptions\`。
4. 接著看 CWE、CVSS 和 references。
5. 如果有多個 container，再確認各自的 provider，避免把不同來源的評估混在一起。

這個順序刻意把產品和版本放在分數前面。

因為自家的資產如果根本不在受影響範圍內，就算 CVSS 是 9.8，也不能直接把它當成這台機器的修補結論。

反過來說，一筆 Record 暫時沒有 CVSS，也不代表可以直接略過。

先確認跟自己有沒有關係，再看它到底有多嚴重，通常比看到紅色高分就開始緊張實際得多。

> 今天就到這裡了，先去買一點乾糧預防一下 XDD
`,q=`# Day 6 - 同一個 CVE 一堆網站，到底該看哪一個？

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：CVE 與 CNA 基礎

## 前言

> 昨天 Day 5 最後才說要去買點乾糧，今天先不管乾糧到底有沒有買到，繼續回來看 CVE。
>
> 原本以為把 CVE JSON 拆完後，今天應該會輕鬆一點。結果隨便拿一組 CVE ID 丟進搜尋引擎，瀏覽器分頁馬上又開了一整排。
>
> 好，看來今天也沒有比較輕鬆。

搜尋一組 CVE ID 時，通常不會只看到一個網站。

CVE.org、NVD、廠商公告、CISA、資安新聞和各種商業情資平台，可能全部一起出現。查著查著，還會一路跑去看 FIRST、EPSS 或 GitHub 上的修補 commit。

每個頁面看起來都很專業，問題是內容不一定完全一樣。

這邊寫 CVSS 8.1，那邊寫 9.8；廠商說只有某些版本受影響，另一個網站列出的版本範圍卻又不太一樣。

看著看著，腦袋很容易冒出一句：

> 所以到底該相信誰？

其實這個問題有點像走進五金行，指著架上的榔頭、螺絲起子和扳手問老闆：

> 哪一個才是正確的工具？

老闆大概也只能先反問：

> 你到底想修什麼？

查漏洞資料也是一樣。

不是這些網站正在搶著回答同一個問題，而是它們原本負責的事情就不一樣。

先用最簡單的方式整理：

| 想知道什麼 | 優先去哪裡看 |
| --- | --- |
| 這組 CVE ID 是誰發布的、目前是什麼狀態 | CVE.org |
| CVSS、CWE、CPE 等分析資料 | NVD |
| 是否已知遭到實際利用 | CISA KEV |
| CVSS 規格與 EPSS 資料 | FIRST |
| 哪些版本受影響、該升級到哪一版 | Vendor Advisory |

所以今天不是要選出「全世界最正確的漏洞網站」，而是要弄清楚：每個來源擅長回答什麼問題。

![漏洞資訊來源分工：CVE/MITRE、NIST/NVD、CISA/KEV、FIRST 與 Vendor Advisory](https://eric-s-dev-site.kuanlin.pro/blog-assets/ithome-2026/day-06-source-map.png)

## CVE.org：先確認我們在講哪一個洞

前幾天已經提過，CVE Program 最重要的工作，是提供共同的漏洞識別方式。

所以拿到一組 CVE ID 後，可以先到 CVE.org 確認：

- 這組 ID 是否存在？
- 目前是 \`RESERVED\`、\`PUBLISHED\` 還是 \`REJECTED\`？
- 由哪個 CNA 負責？
- CNA 提供了哪些漏洞描述、產品、版本和 references？

可以把 CVE.org 想成確認漏洞身分的地方。

它先幫你確定：

> 對，我們現在講的就是這一個洞。

不過，確認身分不代表所有問題都已經有答案。

CVE Record 不一定會有 CVSS，也不一定會附上完整的修補方式或 PoC。有些資料可能要往 NVD、廠商公告或其他來源繼續找。

### 那 MITRE 又在哪裡？

MITRE 目前在 CVE Program 裡負責 Secretariat、MITRE Top-Level Root，以及 CNA of Last Resort 等工作，也協助維護 CVE Program 的基礎服務。

但這不代表每一筆 CVE 都是 MITRE 發現、驗證、撰寫和評分的。

很多 CVE Record 實際上是由產品廠商、研究組織或協調單位等 CNA 發布。

這些角色 Day 3 已經拆過，今天只要記得一件事：

> 看到資料出現在 CVE.org，不代表每一個字都是 MITRE 寫的。

真正想知道資料是誰提供的，還是要看 CNA、assigner 和 \`providerMetadata\`。

簡單說，CVE.org 適合拿來確認「這是哪一個洞」；但今晚到底該升級哪一版，通常還要繼續往下查。

## NVD：幫 CVE 加上更多分析資料

NVD 是 National Vulnerability Database，由美國 NIST 維運。

Published CVE 通常會進入 NVD，但不代表每一筆都已經完成分析。

NVD 會依目前的處理範圍與優先順序，利用 CVE Record、公開 references 和其他公開資料進行 enrichment，可能補上：

- CVSS 評分與向量
- CWE 弱點分類
- CPE 產品與平台對應
- Reference tags
- 其他方便搜尋與分析的資料

如果說 CVE.org 先幫漏洞建立基本資料，NVD 就比較像拿到這筆資料後，再幫它分類、貼標籤和補充分析。

這些資料很適合拿來做搜尋、資產比對和自動化處理。

不過，打開 NVD 時可能會遇到幾種情況：

- CVE Record 已經發布，NVD 還沒完成 enrichment。
- CNA 和 NVD 都有 CVSS，但分數不一樣。
- NVD 的 CPE 沒有完整對應所有產品版本。
- 廠商公告已經更新，NVD 還沒反映最新內容。
- 這筆 CVE 暫時沒有排入 NVD 的 enrichment。

這些情況不一定代表網站壞掉，也不一定代表其中一方寫錯。

NVD 是根據分析當下能取得的公開資料進行判斷。如果後來廠商補充攻擊條件、修正版本範圍或更新公告，兩邊的內容就可能暫時不同。

所以看到 NVD 分數比較高，也不要立刻宣布：

> 好，NVD 比較嚴重，所以 NVD 一定比較對。

應該先比較評分時間、CVSS vector、受影響版本，以及雙方使用了哪些公開資料。

NVD 很適合拿來分析和串資料，但它不是每一款產品的原廠維修手冊。

## CISA KEV：這些洞真的有人拿來打

CISA 維護一份 Known Exploited Vulnerabilities Catalog，通常簡稱 KEV。

它關心的問題不是：

> 哪個漏洞理論上最嚴重？

而是：

> 哪些漏洞已經有實際遭利用的證據？

KEV 裡通常會看到：

- CVE ID
- 漏洞名稱
- 加入 KEV 的日期
- CISA 列出的 Required Action
- 美國聯邦民用行政部門的處理期限
- 是否與勒索軟體活動有關等補充資訊

這也是 KEV 和 CVSS 最大的差別。

CVSS 描述漏洞在特定條件下的技術嚴重程度；KEV 則告訴我們，這個漏洞已經有符合收錄標準的實際利用證據。

因此，CVSS 9.8 的漏洞不一定會出現在 KEV；分數沒有那麼高的漏洞，如果已經被攻擊者拿來使用，也可能需要優先處理。

可以把 KEV 想成有人真的踩過地雷後，留下來的警告牌。

看到警告牌，當然應該提高處理優先級。

不過反過來要注意：

> 沒有出現在 KEV，不代表保證沒有人利用。

它只代表這筆漏洞目前沒有被收錄在 CISA KEV，不能把「不在清單裡」直接翻譯成「很安全」。

CISA 也建議其他組織把 KEV 納入漏洞管理的優先排序，不只是美國聯邦機關才需要看。

## FIRST：提供尺，不是替每個漏洞量好答案

FIRST 是 Forum of Incident Response and Security Teams。

在漏洞管理裡，最常遇到的兩個 FIRST 項目，就是 CVSS 和 EPSS。

### CVSS：這個洞的技術嚴重程度

CVSS 透過一組 metrics 和 vector，描述漏洞的攻擊條件與可能影響，最後計算出分數和嚴重程度。

但 FIRST 的角色比較像制定尺的規格，而不是拿著尺，替全世界每一筆 CVE 都量出唯一答案。

實際的 CVSS 評分可能來自：

- CNA
- NVD
- 產品廠商
- 其他分析單位

因此，同一組 CVE ID 看到不同 CVSS 分數，是有可能發生的。

這時候應該回到 FIRST 的規格，檢查雙方對 Attack Vector、Privileges Required、User Interaction 等 metric 的判斷哪裡不同。

只拿 8.1 和 9.8 兩個數字互相比大小，看不出真正的差異。

### EPSS：未來 30 天有多可能被利用

EPSS 是一套資料驅動的預測模型，用來估計一筆已公開 CVE 在未來 30 天內遭到實際利用的機率。

它回答的問題和 CVSS 不一樣：

\`\`\`text
CVSS：這個漏洞的技術影響有多嚴重？
EPSS：它近期有多可能被利用？
KEV：是否已有符合收錄標準的實際利用證據？
\`\`\`

三個資料放在一起看，通常會比只按照 CVSS 分數由高排到低，更接近實際的修補需求。

不過 EPSS 畢竟是預測，不是預言。

分數低不代表絕對不會被利用；分數高也不代表明天早上一定會被攻擊。它是幫助排序的訊號，不是拿來代替所有判斷的答案。

EPSS 和 CVSS 的差異，第 22、23 天還會再詳細拆開。

## Vendor Advisory：到底該升級哪一版？

前面看了一圈，最後如果問題是：

> 我們家的系統到底有沒有中？

或者：

> 今天晚上到底要升級到哪一版？

通常還是得回到產品廠商或開源專案的官方 advisory。

Vendor advisory 通常最適合回答：

- 哪些產品和版本受影響？
- 哪個版本已經修補？
- 修補程式或 release notes 在哪裡？
- 有沒有 workaround 或 mitigation？
- 是否要開啟特定功能或設定才會受影響？
- 更新過程有沒有其他注意事項？

這些連結可能已經放在 CVE Record 的 references 裡，但實際處理資產時，最好還是把原始公告打開來看。

不要只看到資料庫摘要寫著「Upgrade to a newer version」，就瀟灑地把正式環境升到最新版。

最新版是哪一版？能不能跨版本升級？設定會不會壞掉？服務要不要重開？

這些問題通常不會只靠 CVE ID 自動回答。

當然，Vendor Advisory 也不是永遠不會改。

廠商可能在發布後重新確認版本範圍、補上修補方式，或調整 CVSS。閱讀時還是要注意公告的發布日期和更新時間。

如果使用的是 Linux 發行版重新封裝的套件，也要查看對應發行版的公告，不能只拿上游版本號直接比。

簡單說，CVE.org 幫你確認漏洞身分；真正要動手修時，原廠或專案公告通常才是操作說明書。

## 為什麼同一個 CVE 會有不同分數？

假設今天看到：

\`\`\`text
CNA：CVSS 8.1
NVD：CVSS 9.8
\`\`\`

先不要急著認定其中一邊算錯。

可能原因包括：

- 對攻擊者所需權限的判斷不同。
- 對是否需要使用者互動的理解不同。
- 對產品預設設定的掌握程度不同。
- 使用了不同的 CVSS 版本。
- 廠商或 CVE Record 後來更新，其中一邊還沒重新評估。

這有點像兩個人都在替同一間房子量大小，一個把陽台算進去，另一個沒有。

最後數字不一樣，不一定是有人連尺都不會拿，而是要先確認雙方怎麼量。

因此，比較 CVSS 時不能只看分數，還要看完整 vector，再回頭確認產品設定、漏洞描述和評分依據。

## 實際查一個 CVE，我會怎麼走？

如果今天拿到一組陌生的 CVE ID，我通常會這樣查：

1. 先到 CVE.org 確認 ID、Record 狀態、CNA 和 references。
2. 打開 Vendor Advisory，確認受影響版本與修補方式。
3. 到 NVD 看 CVSS、CWE、CPE 等 enrichment。
4. 查 CISA KEV，確認是否已有實際利用證據。
5. 查 EPSS，補充近期被利用的機率。
6. 如果不同來源的 CVSS 不一樣，再回 FIRST 規格比較 vector。

這個順序不是硬性規定。

如果現在正在處理攻擊事件，可能會先查 KEV 和廠商的 mitigation；如果只是研究 CVSS 為什麼不同，則會先打開 vector 和 FIRST 規格。

重點不是永遠按照同一條路走，而是每次引用資料時，都知道：

- 這份資料是誰提供的？
- 它想回答什麼問題？
- 最後一次更新是什麼時候？

## Day 6 先記住這張分工表

今天不用把每個組織的全名背起來，只要先記住：

\`\`\`text
CVE.org：確認這是哪一個漏洞
NVD：補充分析與結構化資料
CISA KEV：確認是否已知遭到實際利用
FIRST：提供 CVSS 規格與 EPSS 資料
Vendor Advisory：確認版本、修補與操作方式
\`\`\`

所以，看到不同網站的資料不一樣，先不用急著問誰對誰錯。

先問自己：

> 我現在到底想查什麼？

工具本來就各有用途。拿螺絲起子敲釘子不是完全不行，但旁邊明明有榔頭，實在沒必要把自己搞得那麼累。

下一篇會回到漏洞通報的起點：一封只寫著「這裡有漏洞」的信，為什麼通常還不夠讓廠商開始處理？

## 參考資料

- CVE Program Structure: https://www.cve.org/ProgramOrganization/Structure
- MITRE CVE Partner Information: https://www.cve.org/PartnerInformation/ListofPartners/partner/mitre
- NVD CVEs and the NVD Process: https://nvd.nist.gov/general/cve-process
- NVD General Information: https://nvd.nist.gov/general
- CISA Known Exploited Vulnerabilities Catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- FIRST Standards: https://www.first.org/standards/
- FIRST CVSS: https://www.first.org/cvss/
- FIRST EPSS: https://www.first.org/epss/
`,K=`# Day 7 - 寫漏洞通報時，什麼資訊是「必要」的？

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：CVE 與 CNA 基礎

有些漏洞報告只有一句話：

> 某某功能有漏洞，可以繞過權限，請確認。

這種報告真的很省字，但收到的人完全不會省事，幾乎一定得回信追問：哪個產品？測試版本是什麼？哪個功能？怎麼繞過？原本需要什麼權限，成功後又多拿到了什麼？

通報不是寫得越長越好。真正重要的是讓另一個沒坐在你旁邊的人，能夠找到同一個位置、看到同一個現象，最後理解它為什麼是安全問題。

所以這篇想談兩套很容易混在一起的標準：一套是 **CVE Record 發布時最低要有什麼**，另一套是 **一份剛送進來的漏洞報告，怎樣才比較容易被處理**。兩者有重疊，但不是同一張清單。

## 先讓人找得到問題在哪裡

產品名稱聽起來是最不可能漏掉的資料，實際上卻常寫得不夠精確。

只寫「後台系統」或「API server」不夠。接手的人需要知道正式產品名稱、元件或模組，最好再附上取得版本資訊的方法。例如版本頁面、套件版本、commit hash、韌體編號，或可以辨認 build 的其他資訊。

版本也不要只寫「最新版」。報告送出那天的最新版，兩週後可能已經不同。比較穩定的寫法是：

\`\`\`text
測試產品：Example Server
測試版本：3.4.1
受影響元件：admin-api
測試環境：預設安裝，啟用 remote management
\`\`\`

如果已經測過多個版本，可以直接寫哪些確認受影響、哪些確認不受影響。這不只省下往返，也可能幫助維護者縮小問題是在哪次變更被引入。

## 重現步驟要讓別人走得回去

PoC 很有用，但一段可以執行的程式不一定等於完整重現步驟。接手的人還需要知道前置條件：使用什麼身分、功能是否預設開啟、資料要先處於什麼狀態，以及請求應該送到哪裡。

一份容易跟著操作的重現內容，通常會交代：

- 測試環境與必要設定
- 攻擊者原本擁有的權限
- 建立測試資料的方式
- 每一步操作或請求
- 實際看到的結果
- 正常情況下預期看到的結果

「實際結果」和「預期結果」最好都寫。以 IDOR 為例，只貼出一個回傳 \`200 OK\` 的 request，還不能證明跨越了授權邊界；如果補上「帳號 A 不屬於組織 B，卻能讀到組織 B 的文件」，安全影響就清楚多了。

log、封包、截圖與 crash dump 都可以當證據，但應該先移除 session token、個人資料與不必要的內部資訊。能用最小測試資料重現，就不要整包上傳真實環境資料。

## 不只說「能打」，還要說清楚安全邊界

同一個行為，在不同安全模型下可能有完全不同的意義。

例如一般使用者能修改自己的顯示名稱，通常是正常功能；能修改別人的角色，就可能是權限問題。HTML 被原樣儲存不一定就是 Stored XSS，還要看它是否進入瀏覽器可執行的 context，以及產品原本是否允許這類內容。

因此，影響描述最好能回答三件事：

1. 攻擊者從什麼起始權限出發？
2. 哪一條安全邊界被跨越？
3. 最後影響了機密性、完整性或可用性的哪一部分？

可以先用一句不誇大的話收斂：

\`\`\`text
低權限帳號可修改其他租戶的 webhook URL，可能使該租戶後續事件被傳送到攻擊者控制的端點。
\`\`\`

這比「可完全控制系統」更容易驗證，也比較不會讓真正重要的影響被誇張用語蓋掉。

## 一開始不知道根因，沒關係

研究者看到的通常是外部行為，不一定能取得原始碼。這時可以誠實區分「已確認」和「推測」。

\`\`\`text
已確認：修改 object ID 後可讀取其他帳號的檔案。
推測：後端可能只檢查檔案是否存在，未檢查 resource ownership。
\`\`\`

這種寫法比直接斷言某個 function 缺少檢查更可靠。維護者取得程式碼後，也比較容易回覆真正根因。

漏洞類型或 CWE 也是同樣道理。確定時可以提供候選分類；只有表面現象時，不必為了讓報告看起來完整而硬選一個 CWE。錯誤分類有時比暫時不分類更費時間，因為後面的人得先拆掉錯誤假設。

## 公開狀態與聯絡方式也很重要

漏洞是否已出現在 GitHub issue、社群貼文、影片或其他公開頁面，會影響協調方式。若已公開，直接附上 URL；若尚未公開，也可以說明預計揭露時間，讓對方知道時程壓力從哪裡來。

通報者還應留下穩定的聯絡方式，並說明是否希望致謝、致謝名稱怎麼寫。若涉及加密郵件，也可以附 public key。不要把緊急聯絡資訊只放在會過期的檔案分享連結裡。

至於揭露期限，與其丟一句「七天後公開」，不如交代日期、時區，以及什麼情況下願意調整。協調不代表無限期等待，但明確條件比模糊施壓更有用。

## CVE Record 的最低要求，和初始報告有什麼不同？

依 CNA Operational Rules v4.1.0，一筆要發布的 CVE Record 必須識別至少一個受影響產品、至少一個 \`affected\` 或 \`unknown\` 狀態、漏洞類型、文字描述，以及至少一個不是 CVE Record 自己的公開 reference。規則也要求至少一份英文描述，並建議提供修補版本。

這些是 **Record 發布要求**，不是說研究者第一次寄信就必須交出完整 CVE JSON。初始報告最重要的工作，是提供足夠證據讓問題能被定位、重現與判斷；產品版本、描述與公開 reference，可能在協調過程中繼續補齊。

反過來也一樣：一份已經能重現的好報告，仍不代表可以立刻公開 Record。受影響版本、公開 reference 或漏洞類型還不清楚時，CNA 可能需要繼續確認。

## 寄出前，做一次「陌生人測試」

把報告想像成交給一個第一次看到這套產品的人。他能不能只靠目前內容，找到版本、建立前置狀態、重做步驟，並解釋實際結果為何違反安全預期？

如果答案是可以，這份報告通常已經有很好的起點。若心裡冒出的是「他應該知道我在說哪個頁面吧」，那多半就是還要再補一點上下文。

第 7 天先把 CVE 與 CNA 基礎收在這裡。下一篇進入 CWE：為什麼一筆具體 CVE，還要再對應一個看起來更抽象的弱點分類？

## 參考資料

- CNA Operational Rules v4.1.0: https://www.cve.org/resourcessupport/allresources/cnarules
- CVE Program Process: https://www.cve.org/about/Process
- CVE Record Format: https://github.com/CVEProject/cve-schema

`,z=`# Day 8 - CWE 是什麼？為什麼漏洞要對應 CWE

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：弱點分類與攻擊模式

[![CWE 官方 Logo](/blog-assets/ithome-2026/cwe-logo-official.jpg)](https://cwe.mitre.org/)

*CWE Logo 來源：[CWE](https://cwe.mitre.org/)。*

看到 \`CVE-2026-XXXXX\`，知道的是「哪一個漏洞」；看到 \`CWE-79\`，知道的則是「這類問題通常錯在哪裡」。兩串編號長得像親戚，工作卻完全不一樣。

先看一段很小的程式：

\`\`\`javascript
result.innerHTML = req.query.name
\`\`\`

如果外部輸入未經適當處理就被放進 HTML，某個產品可能因此產生 XSS 漏洞。這個產品裡可被利用的具體 instance 可以有 CVE ID；背後「在產生網頁時，沒有正確處理輸入」這一類弱點，則可以用 CWE 描述。

## CWE 不是另一套漏洞編號

CWE 的全名是 **Common Weakness Enumeration**。官方把 weakness 定義成存在於軟體、韌體、硬體或服務元件中的某種條件；在特定情況下，它可能促成漏洞產生。

這裡的關鍵字是「類型」和「可能促成」。CWE 不會告訴你某台伺服器今晚要不要更新，也不能拿來代替 vendor advisory。它比較像一套共同語言，讓開發者、研究者、掃描工具和漏洞資料庫能夠討論同一種設計或實作缺陷。

可以這樣區分：

\`\`\`text
CVE：某個產品、某些版本中的具體漏洞
CWE：可能在許多產品中反覆出現的弱點類型
\`\`\`

同一個 CWE 可以對應大量 CVE；一筆 CVE 也可能牽涉不只一個 weakness。它們不是一對一關係。

## 為什麼只寫「XSS」還不太夠

「XSS」、「SQL Injection」和「Path Traversal」都是大家熟悉的漏洞名稱，但自然語言很容易遇到同義詞、縮寫和分類粒度不一的問題。

以 XSS 為例，有人寫 Cross-Site Scripting，有人只寫 script injection，有人從輸出編碼失敗來描述。CWE ID 讓資料比較容易被搜尋和統計，也能把讀者帶回一份包含定義、常見後果、偵測方式、緩解方式與相關弱點的知識條目。

這也是 CWE 對不同角色都有用的原因。漏洞處理人員可以整理根因分布，開發團隊能回頭改善 coding guideline，工具廠商可以對齊掃描規則，管理者則能觀察哪些 weakness 一直重複出現在不同產品。

如果一家公司一年修了十個不同 CVE，逐筆看只會得到十段事件；若其中六筆都指向同一類授權檢查問題，CWE 才讓這個趨勢比較容易被看見。

## Weakness 和 Vulnerability 差在哪裡？

CWE 官方 FAQ 的說法很實用：weakness 是可能在各種產品中導致漏洞的底層條件；vulnerability 則是這些 weakness 在特定產品中的具體 instance，而且能被利用並對機密性、完整性或可用性造成負面影響。

拿門鎖做一個不完全精確的比喻：

- 「鎖具設計沒有驗證鑰匙的某項特徵」是 weakness。
- 「某型號門鎖因此能被特製鑰匙打開」是具體 vulnerability。

前者描述共通的失效方式，後者帶著產品、版本、攻擊條件與實際影響。

這個區分也提醒一件事：看到危險的 coding pattern，不代表已經證明一筆可指派的漏洞。還需要確認它是否可達、是否跨越安全邊界，以及實際造成什麼影響。

## CWE 不是一張平面的清單

CWE 裡的條目有不同抽象層級。官方常見的四種 weakness abstraction 是 Pillar、Class、Base 與 Variant。

Pillar 最抽象，像一個很大的概念入口；Class 比 Pillar 具體，但通常仍不依賴特定語言或技術；Base 已經有足夠細節，可以推導偵測與預防方法；Variant 則更貼近特定資源、技術或 context。

例如 \`CWE-74: Injection\` 是較抽象的 Class，\`CWE-79: Cross-site Scripting\` 是更具體的 Base。若通報只確認「某種 injection」，卻硬選到很細的子類，分類可能超過現有證據；反過來，明明已經知道是 XSS，卻只停在 CWE-74，資訊又太寬。

因此，選 CWE 不是找名稱最像的那一條，而是找 **目前證據能支持、又盡量具體** 的層級。

## 一筆 CVE 為什麼可能看到不同 CWE？

同一個漏洞在 CNA、NVD 或其他 provider 那裡，偶爾會看到不同 CWE。原因不一定是誰粗心，也可能是：

- 一方依表面行為分類，另一方掌握了根因。
- 一方選較抽象的 Class，另一方選更具體的 Base。
- 漏洞由一連串 weakness 共同形成。
- Record 更新後，下游資料還沒同步。
- 公開資訊真的不足，只能先標成較寬的類型。

遇到差異時，先回到漏洞描述、受影響元件與修補內容。分類的目的是幫助理解，不是用編號投票決定答案。

## 不確定時，別急著猜最細的 CWE

假設看到「攻擊者可以下載任意檔案」，可能想到 Path Traversal，也可能是授權檢查缺失、外部可控檔名，甚至是多個問題串在一起。只有結果，還不足以證明根因。

比較穩妥的做法是先拆開：輸入如何進入系統、哪個檢查沒有發生、資料最後流向哪個敏感操作，以及修補實際改了什麼。修補若是在路徑正規化，和補上一段 ownership check，對應的 weakness 很可能不同。

所以看到漏洞結果時先別急著搶答 CWE。第 9 天會看 XSS、SQL Injection、Path Traversal、RCE 這些常見名稱在 CWE 裡怎麼落點；第 10 天再專門處理「不要只看表面現象，怎麼往根因靠近」。

## 參考資料

- CWE About: https://cwe.mitre.org/about/
- CWE Frequently Asked Questions: https://cwe.mitre.org/about/faq.html
- New to CWE: https://cwe.mitre.org/about/new_to_cwe.html
- CWE Glossary: https://cwe.mitre.org/documents/glossary/index.html
- CNA Operational Rules v4.1.0: https://www.cve.org/resourcessupport/allresources/cnarules
`,j=`# Day 9 - 常見 CWE 怎麼分？從 XSS、SQL Injection、Path Traversal 到 RCE

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：弱點分類與攻擊模式

## 前言

真的有不少廠商第一次碰到漏洞通報時，會問一些讓人不知道該先從哪裡解釋的問題。

「我們都已經修好了，可以把 CVE 撤銷嗎？」

「這會影響商譽，我是要找通報者，還是找 CNA 賠我？」

先別急著找人賠錢啦。CVE 不是處罰單，也不是產品的負評留言。漏洞修好之後，CVE 反而更有用途，因為使用者需要知道哪些版本受影響、哪個版本已修補，以及自己到底要不要更新。

修補完成，也不代表這個漏洞就沒有發生過。一般來說，CVE 會因為確認並不存在漏洞、重複指派、使用錯誤的 ID，或多筆紀錄需要合併等原因被標記為 \`REJECTED\`；「廠商已經修好」或「看起來會影響商譽」，本身並不是撤掉一筆有效 CVE 的理由。

至於通報者在協調修補後公開研究成果，本來就是漏洞揭露流程的一部分。很多通報者甚至會等廠商完成修補、公告新版後才公開，目的不是讓廠商難看，而是讓正在使用舊版本的人知道：這個問題真的存在，該更新了。

不過公告寫「有一個漏洞」還不夠。使用者會想知道它到底是 XSS、SQL Injection、Path Traversal，還是最後可以造成 RCE。這幾個詞平常都會被叫做「漏洞類型」，但真的要對應 CWE 時，麻煩就來了。

XSS、SQL Injection 與 Path Traversal 比較像問題怎麼發生；RCE 則比較像攻擊成功後造成的結果。把四個詞擺在一起，剛好可以看出選 CWE 時最常踩到的坑。

## XSS：不要只盯著 script 標籤

XSS 常對應 \`CWE-79: Improper Neutralization of Input During Web Page Generation\`。重點不是測試內容裡有沒有 script 標籤，而是外部可控資料進入網頁輸出時，沒有依所在 context 做正確處理，最後能在其他使用者的瀏覽器中執行非預期內容。

同一段輸入放在 HTML body、attribute、JavaScript 字串或 URL，所需的處理方式都不同。因此「系統有做 HTML escape」不一定能回答所有 XSS 問題，還要看資料最後落在哪個 context。

如果輸入只會回顯給攻擊者自己，且沒有跨越信任邊界，也不能看到 alert 就立刻下結論。真正要確認的是誰控制輸入、誰載入輸出，以及執行後取得了哪個 origin 下的能力。

## SQL Injection：問題在查詢結構被改變

SQL Injection 最常對應 \`CWE-89\`。它不是單純「輸入含有單引號」，而是外部輸入被拼進 SQL 指令，使攻擊者能改變原本的查詢語意。

例如，程式直接把使用者提供的名稱接到查詢字串後面，而不是把它當成獨立參數，輸入內容就可能從原本的「資料」變成查詢結構的一部分。

修補方向通常是參數化查詢，讓資料維持資料，不被解讀成 SQL 結構。只做黑名單、刪除單引號或替換關鍵字，往往會漏掉不同編碼、資料庫語法與其他注入位置。

看到資料庫錯誤也不等於已證明 SQL Injection。錯誤可能來自型別轉換、查詢逾時或其他程式問題。最好能證明輸入確實改變了 query behavior，例如布林條件、時間差或可控的結果集差異。

## Path Traversal：路徑走出了原本的邊界

Path Traversal 常見對應是 \`CWE-22\`。典型輸入是 \`../\`，但根因不是那兩個點本身，而是程式拿外部可控的路徑組合檔案位置，卻沒有把最後解析結果限制在允許的目錄內。

只做字串取代很容易被不同分隔符號、URL encoding、重複解碼、symbolic link 或平台差異繞過。較可靠的思路是先 canonicalize，再確認解析後的目標仍位於允許範圍，並搭配最小檔案權限。

這類案例還可能同時涉及 \`CWE-73: External Control of File Name or Path\`。選哪一個，要看已知資料能否證明 traversal，還是目前只知道攻擊者能控制檔名或路徑。

## RCE：它通常是 impact，不是 root cause

RCE 是 Remote Code Execution，描述遠端攻擊者最後能執行程式碼。它可能由很多不同 weakness 造成：

- OS Command Injection，常見為 \`CWE-78\`
- Code Injection，常見為 \`CWE-94\`
- Deserialization of Untrusted Data，常見為 \`CWE-502\`
- 記憶體破壞，例如 Out-of-bounds Write
- 上傳可執行檔案後被伺服器載入

所以「這是一個 RCE，CWE 就選 RCE」通常不夠精確。應往前問：攻擊者的資料經過哪條路徑，最後為什麼被當成指令、程式碼或物件執行？

## 當然還可以分得更細

前面提到 Path Traversal 常對應 \`CWE-22\`，但這其實還能再往下分。\`CWE-22\` 比較像上層的通稱，底下還有兩個更具體的項目：

- \`CWE-23: Relative Path Traversal\`：攻擊者利用相對路徑離開原本允許的目錄，常見線索就是 \`../\` 這類往上一層走的表示方式。
- \`CWE-36: Absolute Path Traversal\`：程式接受了攻擊者提供的完整路徑，導致檔案操作直接指向原本限制範圍以外的位置。

簡單講，一個是「從目前的位置一路走出去」，另一個是「直接指定要去哪裡」。兩者最後都可能讀取或修改不該碰到的檔案，但資料走法不太一樣。

所以報告如果已經清楚證明使用相對路徑繞出目錄，可以選 \`CWE-23\`；如果問題是可直接指定完整路徑，則可以選 \`CWE-36\`。但手上的資料如果只能確認有 Path Traversal，還分不出是哪一種，留在 \`CWE-22\` 反而比較誠實。CWE 不是選得越細越厲害，而是要細到證據撐得住的位置。

## 用一條資料流來判斷

遇到名稱不確定時，可以追四個位置：input 從哪裡進來、途中經過哪些轉換、在哪個安全檢查失敗、最後進入哪個敏感 sink。

輸入進到 HTML renderer，可能往 CWE-79 查；進到 SQL parser，可能是 CWE-89；進到檔案系統 path resolver，可能是 CWE-22 或 CWE-73；進到 shell，則可能是 CWE-78。

所以分類不是看到關鍵字就連連看。明天會繼續往根因走：為什麼只寫「任意檔案讀取」或「RCE」，仍然可能只停在表面現象。

## 參考資料

- CWE-79: https://cwe.mitre.org/data/definitions/79.html
- CWE-89: https://cwe.mitre.org/data/definitions/89.html
- CWE-22: https://cwe.mitre.org/data/definitions/22.html
- CWE-23: https://cwe.mitre.org/data/definitions/23.html
- CWE-36: https://cwe.mitre.org/data/definitions/36.html
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
- CWE Root Cause Mapping: https://cwe.mitre.org/documents/cwe_usage/guidance.html
- CVE CNA Operational Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
`,X=`# Day 10 - 不要只寫表面現象：CWE 與漏洞根因

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：弱點分類與攻擊模式

## 前言

唉，團隊賽又失敗了，看來還是得繼續個人單飛。

朋友還以為我今天已經發文，跑來問我文章在哪。只能說，不是我不想發，是隊伍先把我送回單人模式了 XDD

好啦，傷心歸傷心，鐵人賽還是得繼續。上一篇聊到 CWE 可以分得多細，今天就接著談一個更容易選錯的地方：**看到漏洞造成的結果，不代表已經找到它的根因。**

「攻擊者可以讀取任意檔案。」

這句話很有價值，因為它已經說明漏洞造成的影響。但如果要拿來選 CWE，資訊還是不夠。任意檔案讀取可能來自 Path Traversal、授權檢查缺失、符號連結處理錯誤，也可能是原本不該公開的 debug endpoint 被放了出來。

結果相同，不代表根因相同。就像看到地板都是濕的，也不能每次都直接判定是同一根水管破掉。

## Root Cause Mapping 到底在找什麼？

CWE 所說的 Root Cause Mapping，就是試著找出漏洞底層真正出了什麼問題，再把 CVE Record、bug ticket 或漏洞報告對應到適合的 CWE。

說白一點，它不是替漏洞貼一張看起來很專業的標籤，而是要回答：「到底是哪一類設計或實作問題需要被修掉？」

假設十筆漏洞全部都只標成 Information Disclosure，我們只能知道最近資料外洩很多；但如果繼續往下看，發現其中六筆都來自 missing authorization，開發團隊才知道問題可能集中在授權設計，而不是每一筆都各自救火。

## 從結果一路往前追

分析時，可以把資訊拆成三層：

- **結果**：讀到其他使用者的檔案。
- **失效點**：取檔前沒有檢查這份資源是不是屬於目前使用者。
- **根因**：Missing Authorization 或 Incorrect Authorization。

另一個案例雖然也是讀到不該看的檔案，過程可能完全不同：

- **結果**：讀到系統中的任意檔案。
- **失效點**：外部輸入可以讓路徑離開原本允許的目錄。
- **根因**：Path Traversal。

兩個案例最後都能被描述成 arbitrary file read，修補位置卻完全不同。一個要補授權判斷，另一個要處理路徑解析與目錄限制。只看最後結果，很容易把兩種問題選成同一個 CWE。

## 修補內容常比測試字串更接近根因

PoC 告訴我們怎麼觸發問題，patch 則常常透露原本少了哪一道控制。

如果修補改成參數化查詢，通常更能支持 SQL Injection 的判斷；如果只是把錯誤訊息藏起來，可能只是看不到錯誤，注入問題本身還在。若 patch 補上 ownership check，也比「網址裡有一個可以修改的 ID」更能支持 authorization 類 CWE。

不過也不能看到 patch 新增 validation，就立刻把根因定案。一次修補可能同時包含重構、防禦加固和真正的漏洞修正，還是要把變更和可利用路徑對起來看。

## 別選到不適合拿來 mapping 的 CWE

CWE 條目會標示 Vulnerability Mapping 的使用建議，目前可看到四種：

- \`ALLOWED\`
- \`ALLOWED（with careful review of mapping notes）\`
- \`DISCOURAGED\`
- \`PROHIBITED\`

有些條目太抽象，有些只是 Category，並不適合直接對應一個具體漏洞。這也是為什麼不能只看名稱很像，就把 CWE 編號填上去。

例如很寬的輸入驗證分類看起來什麼都能套，但可能會蓋掉更明確的 Injection、Path Traversal 或數值處理錯誤。官方建議是：能準確選到 Base 或 Variant 時，就不要只停在過度抽象的 Class；若證據真的不足，選一個允許 mapping、但較高層的 CWE，也比硬猜一個錯誤細項可靠。

## 一條 weakness chain 可能不只一個節點

有些漏洞真的不是一個錯誤造成的。外部輸入缺少驗證，接著進入不安全的反序列化流程，最後又載入攻擊者可控的 class，就可能形成一條 weakness chain。

這時可以記錄多個相關 CWE，但要分清楚哪一個比較接近 primary root cause，哪些是後續才出現的 weakness 或 consequence。把每個看得到的現象全部塞進去，不會自動變得比較精確，只會讓讀者更難看出問題從哪裡開始。

## 不知道時，就老實保留不確定性

只有黑箱測試結果時，可以把「已確認的 impact」和「推測的 root cause」分開寫。

例如，已經確認使用者可以讀取別人的檔案，但看不到程式碼，也無法判斷究竟是 routing、ACL，還是 ownership check 出錯，就不要假裝自己已經掌握內部實作。這時先記錄確定的行為，再選擇證據能支持的 CWE 層級即可。

所以好的分類，不一定是挑到最細的那一條，而是剛好落在證據撐得住的位置。上一篇講的是 CWE 可以分得多細；這一篇要記住的則是：**分得細之前，先確定自己真的知道問題出在哪裡。**

下一篇開始看 CAPEC，把鏡頭從「系統為什麼會弱」，轉到「攻擊者通常怎麼利用這些弱點」。

## 參考資料

- CWE Root Cause Mapping Guidance: https://cwe.mitre.org/documents/cwe_usage/guidance.html
- CWE Root Cause Mapping Quick Tips: https://cwe.mitre.org/documents/cwe_usage/quick_tips.html
- CWE FAQ: https://cwe.mitre.org/about/faq.html
`,Q=`# Day 11 - CAPEC 是什麼？它和 CWE 有什麼不同

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：弱點分類與攻擊模式

前幾天都在看「系統到底哪裡寫壞了」，今天先換個位置，坐到攻擊者那一邊看看：碰到這類弱點時，他通常會怎麼下手？

CWE 在問「系統哪裡出了問題」，CAPEC 則把視角轉向「攻擊者通常怎麼利用這類問題」。

兩者確實會互相連結，但不是同一套編號換個名字而已。

## CAPEC 描述 Attack Pattern

CAPEC 全名是 Common Attack Pattern Enumeration and Classification。它是一份公開的攻擊模式目錄，用來整理攻擊者利用已知 weakness 時常見的做法、前置條件、執行流程與緩解方向。

例如：

- \`CAPEC-66\`：SQL Injection
- \`CAPEC-63\`：Cross-Site Scripting
- \`CAPEC-100\`：Overflow Buffers
- \`CAPEC-139\`：Relative Path Traversal

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

不一定。CVE Record 的核心工作是識別與描述具體漏洞，CWE 常用來表示漏洞類型或原因；CAPEC 則適合在需要補充攻擊情境時使用。沒看到 CAPEC，不用急著覺得這筆 Record 少了什麼。

也不要看到 CWE 就機械式挑第一個 related CAPEC。CWE 與 CAPEC 可能是多對多關係，具體漏洞是否真的符合某個攻擊模式，仍要看 prerequisites 與 execution flow。

明天會繼續打開一筆 CAPEC，看看它如何把攻擊者行為拆成可閱讀、可驗證的步驟。

## 參考資料

- About CAPEC: https://capec.mitre.org/about/index.html
- CAPEC List: https://capec.mitre.org/data/index.html
- CAPEC and ATT&CK Comparison: https://capec.mitre.org/about/attack_comparison.html
`,Z=`# Day 12 - CAPEC 怎麼讀？把攻擊行為拆成幾個階段

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：弱點分類與攻擊模式

讀 CAPEC 時，如果看完標題和編號就關掉，很容易把它誤認成另一份漏洞類型清單。真正有意思的其實藏在 execution flow：它會試著還原攻擊者從找入口、測試邊界，到最後完成利用的過程。

以 Relative Path Traversal（\`CAPEC-139\`）為例，攻擊者通常不是一開始就知道伺服器的完整目錄結構。他可能先找出帶有檔名、路徑或下載參數的功能，再用不存在的檔案、不同層數的 \`../\`、編碼字元或平台分隔符號觀察回應。

單看每一個動作可能都沒什麼，串起來之後，才會變成一個完整的攻擊模式。

## Explore：先找得到入口

第一階段常是盤點可控制的位置。例如下載功能中的 \`file\`、語系切換中的 \`template\`，或圖片預覽 API 的 \`path\`。錯誤訊息、回應時間與 HTTP 狀態碼，都可能透露後端是否真的碰了檔案系統。

這裡還沒有證明漏洞。允許使用者提供檔名本身很正常，關鍵在於後端如何解析、正規化並限制最後的路徑。

## Experiment：測試邊界在哪裡

接著是試探。單純的 \`../\` 可能被擋，但 URL encoding、重複編碼、Windows 與 Unix 分隔符號，或應用程式與反向代理的解碼順序，都可能造成不同結果。

測試的目的不是無止境變換 payload，而是回答幾個問題：輸入在哪一層被解碼？應用程式有沒有 canonicalize？檢查發生在解析之前還是之後？錯誤回應是否能區分「檔案不存在」和「路徑不允許」？

## Exploit：取得原本不該取得的資源

確認能越過目錄邊界後，攻擊者才會嘗試讀取設定檔、憑證、原始碼或其他敏感資源。能讀到什麼，仍受執行帳號權限、容器掛載與作業系統存取控制限制。

因此，Path Traversal 不應自動被描述成「可讀取主機所有檔案」。比較準確的說法是：攻擊者可讓應用程式存取允許目錄之外、且該程序本身有權讀取的檔案。

## Execution flow 不是固定劇本

CAPEC 提供的是可重用的模式，不是每個案例都必須逐步照演。白箱測試可能直接從程式碼看到失效點，不需要探索；某些 API 也可能因錯誤訊息太少，無法用回應推測目錄結構。

使用 CAPEC 的價值，是檢查一份報告有沒有漏掉重要條件。例如只附上一個 payload，卻沒說入口在哪、需要登入嗎、回應如何證明越界、程序權限又限制了哪些結果。沿著攻擊階段追問，通常比單純要求「再給一個 PoC」更有效。

## 從攻擊模式回頭看防禦

每個階段都可能有不同防禦點：減少詳細錯誤可降低探索資訊；統一解碼與 canonicalization 可避免檢查落差；以 allowlist 對應伺服器端資源，可以避免直接接受路徑；最小權限則限制成功利用後的影響。

所以防禦不是看到 \`../\` 就全部擋掉，而是想辦法打斷整條利用路徑。這也是 CAPEC 比單看一條 payload 更值得讀的地方。

## 參考資料

- CAPEC-139 Relative Path Traversal: https://capec.mitre.org/data/definitions/139.html
- CAPEC Schema Elements: https://capec.mitre.org/data/help/schema.html
- About CAPEC: https://capec.mitre.org/about/index.html
`,$=`# Day 13 - CVE、CWE、CAPEC 三者到底怎麼接在一起

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：弱點分類與攻擊模式

看到一筆漏洞時，CVE、CWE 與 CAPEC 常常會一起出現。三個縮寫排在一起，很容易讓人以為又要背三套分類，其實它們只是在回答三個不同問題：發生了哪一件事、系統弱在哪裡，以及攻擊者可能怎麼利用。

先用一個假想案例串起來：某套文件系統的下載 API 接受外部路徑，解析後沒有確認目標仍位於附件目錄。未登入的遠端攻擊者可以用 \`../\` 讀取程序有權存取的設定檔。

## CVE：這一個具體漏洞是什麼

CVE Record 負責識別這個產品中的具體問題。它需要說清楚受影響產品與版本、漏洞條件、影響、參考資料，以及由誰發布或維護這筆紀錄。

CVE ID 不代表漏洞類型，也不直接代表嚴重程度。它是一個穩定識別符，讓公告、修補說明、掃描器和資產清單能指向同一件事。

## CWE：程式或設計弱在哪裡

在這個案例中，若證據支持路徑可跳出限制目錄，可能對應 \`CWE-22: Improper Limitation of a Pathname to a Restricted Directory\`。

CWE 把具體產品拿掉，保留可重用的弱點概念。其他語言、框架或產品也可能犯相同錯誤，因此可用來做根因統計、安全開發規範與測試設計。

## CAPEC：攻擊者如何把弱點變成結果

若要描述利用手法，\`CAPEC-139: Relative Path Traversal\` 會更接近攻擊者視角。它會談到尋找可控路徑、嘗試 traversal sequence、推測目錄結構，最後存取限制範圍外的資源。

CAPEC 不負責證明某個產品真的有漏洞。它提供的是通用攻擊模式，必須再和個案的入口、前置條件及行為相互驗證。

## 它們不是一對一關係

一筆 CVE 可能牽涉多個 CWE。例如檔案上傳缺少副檔名限制，又因伺服器設定而可直接執行，可能存在一條由 upload weakness 通往 code execution 的 chain。

同一個 CWE 也可能被多種攻擊模式利用；同一個 CAPEC 則可能連到多個相關 CWE。這些關聯是導覽，不是看到編號後就能自動完成 mapping 的公式。

## 實務上先後順序怎麼排

比較不容易走歪的順序，是先把具體事實整理好：受影響版本、入口、權限、使用者互動、失效的控制與可觀察影響。接著才選證據支持的 CWE；需要補充威脅情境時，再查相關 CAPEC 是否吻合。

反過來先挑一個熱門攻擊名稱，再把案例硬塞進去，容易把結果誤當根因。例如「最後能 RCE」並不能告訴我們是 command injection、unsafe deserialization，還是 memory corruption。

最後還是那句話：一段好的通報描述，就算讀者完全沒點開 CWE 或 CAPEC，也應該看得懂漏洞。分類編號是結構化補充，不是拿來代替事實敘述。

## 參考資料

- CVE Program: https://www.cve.org/
- CWE About: https://cwe.mitre.org/about/index.html
- CAPEC About: https://capec.mitre.org/about/index.html
- CWE/CAPEC Graphs: https://capec.mitre.org/data/graphs/3000.html
`,Y=`# Day 14 - 案例練習：一個漏洞如何選 CWE 與 CAPEC

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：弱點分類與攻擊模式

前面講了這麼多分類，今天直接來做題目。不先開 CWE 或 CAPEC 搜尋，先看一段假想報告：

> 某備份管理系統提供已登入管理員下載備份檔的 API。\`name\` 參數會與備份目錄組合後交給檔案讀取函式。伺服器只移除一次 \`../\`，但輸入經過 URL decoding 後仍可跳出備份目錄。攻擊者可讀取服務帳號有權存取的設定檔，其中可能含有資料庫連線資訊。

看到 arbitrary file read 先不要急著把這幾個字貼進搜尋框，我們照著現有證據一步一步判斷。

## 先把已知事實圈出來

入口是下載 API；需要已登入且具有管理權限；可控資料是 \`name\`；失效控制是路徑處理；敏感操作是檔案讀取；影響範圍受服務帳號權限限制。

這些資訊同時會影響漏洞描述、CVSS 評估和 CWE 選擇。若報告只留下 payload，很多判斷就只能靠猜。

## 第一個候選：CWE-22

問題的核心是解析後的 pathname 沒有被限制在指定目錄，符合 \`CWE-22\` 的概念。報告也實際證明 traversal，而不只是能控制檔名，因此比僅使用較寬的 \`CWE-73: External Control of File Name or Path\` 更具體。

如果目前只知道使用者能提供任意檔名，卻沒有證明能越過預期目錄，選 CWE-22 就可能太早。精確度要跟著證據走。

## 要不要再加 Improper Input Validation

「輸入驗證不足」在日常溝通中沒有錯，但它太寬，幾乎可以套在所有 injection 與 traversal。當更具體的 root cause 已知時，優先記錄 CWE-22 通常更有分析價值。

至於「只移除一次 \`../\`」可以放進技術說明，讓讀者理解修補為什麼失敗；不必為每一個程式動作再塞一個 CWE。

## CAPEC 候選怎麼核對

\`CAPEC-139: Relative Path Traversal\` 的前置條件與流程符合這個案例：應用程式接受路徑相關輸入，攻擊者以相對路徑序列逃離限制位置，存取其他檔案。

不過，CAPEC 仍是補充。若最終 CVE Record 的資料模型或發布方流程沒有 CAPEC 欄位，並不影響 CWE-22 與描述本身成立。

## 描述可以怎麼寫

可以整理成：

> 某備份管理系統的 A 至 B 版本在下載備份檔時，未將 URL decoding 後的路徑限制於備份目錄。具有管理權限的遠端攻擊者可透過特製的 \`name\` 參數，讀取服務帳號有權存取的任意檔案，可能導致敏感設定資訊外洩。

這段話沒有寫「讀取整台主機所有檔案」，也沒有把資料庫憑證視為必然存在。它區分了已證明的能力與可能後果。

## 換一個細節，答案就可能不同

若路徑始終在備份目錄內，但一般帳號可以下載別人的備份，根因更可能是 authorization 或 ownership check，而不是 traversal。若 API 會把路徑交給 shell 解壓縮，且可插入命令，則要重新檢查 command injection。

漏洞分類不是替結果找一個長得最像的名稱，而是找出哪個安全控制真的失效。這個習慣建立後，下一週看 CVSS 也會輕鬆一些，因為評分同樣靠具體攻擊條件，不是看到漏洞名稱就能直接猜答案。

## 參考資料

- CWE-22: https://cwe.mitre.org/data/definitions/22.html
- CWE-73: https://cwe.mitre.org/data/definitions/73.html
- CAPEC-139: https://capec.mitre.org/data/definitions/139.html
- CWE Root Cause Mapping Guidance: https://cwe.mitre.org/documents/cwe_usage/guidance.html
`,J=`# Day 15 - CVSS 是什麼？先把嚴重度與風險分開

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：CVSS 評分核心

打開資安公告，最先吸引目光的通常不是那一大段描述，而是紅通通的 \`Critical\`，旁邊再放一個 9.8。看到這個數字，第一個反應多半是：「完了，今晚是不是要加班修？」

答案通常是「很可能要優先看」，但先別只靠一個分數決定今晚的行程。CVSS 衡量的是漏洞的技術嚴重度，不知道你的系統是否對外、資產是否存在、資料有多重要，也不知道漏洞目前是否正被大量利用。

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

今天先記住一句就好：不要只抄分數，也要讀向量；不要把嚴重度分數直接當成完整的風險答案。9.8 很醒目，但它不是替你排好修補順序的魔法數字。

## 參考資料

- CVSS v3.1 Specification: https://www.first.org/cvss/v3.1/specification-document
- CVSS v3.1 User Guide: https://www.first.org/cvss/v3-1/user-guide
- CVSS v4.0 Specification: https://www.first.org/cvss/v4-0/specification-document
`,_=`# Day 16 - 一篇讀懂 CVSS v3.1：從條件、Scope 到影響

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：CVSS 評分核心

第一次看到 CVSS v3.1 的 Base Vector，很可能只覺得它像一串壓縮過的亂碼：

\`\`\`text
CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
\`\`\`

其實先別急著背 9.8，把它當成一段壓縮過的攻擊故事就好：遠端可打、條件單純、不需權限、不需使用者互動，影響留在同一安全授權範圍內，而且機密性、完整性、可用性都受到高度影響。

## Exploitability：攻擊要怎麼發生

\`Attack Vector\` 描述攻擊者必須位於哪個位置，從 Network、Adjacent、Local 到 Physical。它看的是利用路徑，不是受影響產品平常被叫作「網路設備」還是「桌面軟體」。

\`Attack Complexity\` 判斷是否存在攻擊者無法控制、且利用成功前必須具備的額外條件。需要精心設計 payload 不會自動變成 High；多數 exploit 都需要技術能力，這不是 AC 的判斷重點。

\`Privileges Required\` 是攻擊前已經需要的權限。不要把漏洞成功後取得的 root 權限倒填進去。\`User Interaction\` 則看攻擊者以外的使用者是否必須完成某個動作，例如開啟文件或點擊連結。

## Scope：v3.1 最容易卡住的地方

Scope 在問：受漏洞影響的元件，與承受後果的元件，是否由不同的 security authority 管理。

例如瀏覽器中的網站腳本若突破 sandbox 影響作業系統，可能涉及 Scope Changed。單純從一台主機橫向移動到另一台，不會因「影響擴大」就自動算 Changed；仍要看漏洞利用是否跨越了原本元件的授權範圍。

Scope 不是「影響很廣」的同義詞，也不是「從 user 變 root」就必然 Changed。這也是 v3.1 評分爭議最常出現的位置之一。

## Impact：C、I、A 受到多少影響

\`Confidentiality\` 看資訊是否被未授權揭露；\`Integrity\` 看資料或系統是否能被未授權修改；\`Availability\` 看服務或資源是否被中斷。三者各有 None、Low、High。

評分要以漏洞造成的直接、可合理預期結果為主。讀到一份低敏感度檔案，不應因為「說不定裡面有密碼」直接給 C:H；一次可恢復的程序 crash，也未必等同整個服務永久不可用。

## Temporal 與 Environmental 沒有消失

Base Vector 最常被引用，但 v3.1 還有 Temporal 與 Environmental Metrics。Temporal 能納入 exploit code maturity、修補狀態與報告可信度；Environmental 則可依部署調整 Modified Base Metrics，並設定 C、I、A Requirement。

正式通報常只提供 Base Score，並不表示其他組不重要，而是發布方通常不知道每個組織的環境。使用者把 9.8 原封不動套到所有資產，等於放棄了 CVSS 本來保留的環境調整能力。

## 讀向量的簡單順序

讀的時候先從 AV 一路看到 UI，把攻擊前置條件還原出來；再判斷 Scope；最後確認 C、I、A 是否有證據。遇到爭議時，先別用「我感覺應該是 High」開場，回到官方定義與實際攻擊路徑會比較有用。

明天單獨看 v4.0。它不是把版本號加一，而是直接處理 v3.1 中幾個長期難以表達的問題。

## 參考資料

- CVSS v3.1 Specification: https://www.first.org/cvss/v3.1/specification-document
- CVSS v3.1 User Guide: https://www.first.org/cvss/v3-1/user-guide
- CVSS v3.1 Calculator: https://www.first.org/cvss/calculator/3.1
`,nn=`# Day 17 - CVSS v4.0 改了什麼？不只是多一組縮寫

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：CVSS 評分核心

CVSS v4.0 在 2023 年正式發布。第一次打開向量，腦中最直接的想法大概是：「很好，欄位又變多了。」

\`\`\`text
CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N
\`\`\`

不過先別急著關掉頁面，這次變動不是單純想增加填表難度。v4.0 把 v3.1 難以表達的攻擊條件、跨系統影響與輔助資訊拆得更清楚，也試著避免 Base Score 被當成完整風險分數。

## Attack Requirements 獨立出來

v3.1 的 Attack Complexity 同時承擔不少概念。v4.0 新增 \`Attack Requirements\`（AT），專門描述成功利用是否依賴 vulnerable system 的部署或執行條件，例如特定競態狀態或中間人位置。

\`Attack Complexity\` 則更聚焦攻擊者為了避開或繞過防禦技術所需採取的動作。把兩者拆開後，評分理由比較容易說明，也比較不會把「payload 很難寫」誤當 AC:H。

## User Interaction 變成 Passive 與 Active

v3.1 的 UI 只有 None 和 Required。v4.0 將需要互動的情境分為 Passive 與 Active。

Passive 指使用者的正常行為讓漏洞得以觸發，但不需要刻意突破保護，例如載入惡意內容；Active 則需要使用者執行特定動作來破壞保護，例如忽略警告或匯入惡意檔案。這比所有情境都塞進 Required 更有區別力。

## Scope 退場，影響分成兩個系統

v4.0 移除 Scope，改用 Vulnerable System 的 \`VC/VI/VA\`，以及 Subsequent System 的 \`SC/SI/SA\`，分別記錄機密性、完整性與可用性影響。

這讓評分者可以直接說：漏洞位於哪個系統，主要後果又落在哪個後續系統，不必先把複雜關係壓成 Scope Changed，再共用一組 C/I/A。

## Temporal 改名 Threat，內容更聚焦

v4.0 的 Threat Metrics 保留 \`Exploit Maturity\`。狀態可表達尚未回報利用、已有概念驗證，或已觀察到攻擊。v3.1 Temporal 裡的 Remediation Level 與 Report Confidence 不再以相同方式參與這一組分數。

Environmental Metrics 仍然存在，讓使用者依自己的部署與安全需求調整。

## Supplemental Metrics 不改分數，但很有用

Safety、Automatable、Recovery、Value Density、Vulnerability Response Effort 與 Provider Urgency 等 Supplemental Metrics，用來補充分數難以承載的資訊。

它們不直接改變 CVSS 數值，卻能幫助消費者理解人身安全、自動化利用、復原方式或供應商評估。這種設計也提醒我們：並非所有決策資訊都應硬塞進一個 0 到 10 的數字。

## v3.1 分數不能直接換算成 v4.0

兩個版本的指標與公式都不同，不能只把向量前綴換掉就假裝升級完成，也不能期待同一個漏洞得到相同分數。發布時應清楚標示版本、保留完整向量，更不要因為「v4.0 分數比較低」，就直接推論漏洞突然變得不重要。

FIRST 對 v4.0 分數使用 \`CVSS-B\`、\`CVSS-BT\`、\`CVSS-BE\`、\`CVSS-BTE\` 等 nomenclature，說明計算包含哪些 metric group。引用時把 nomenclature 一起帶上，比只留下裸分數更完整。

## 參考資料

- CVSS v4.0 Specification: https://www.first.org/cvss/v4-0/specification-document
- CVSS v4.0 User Guide: https://www.first.org/cvss/v4-0/user-guide
- CVSS v4.0 Calculator: https://www.first.org/cvss/calculator/4.0
- CVSS v4.0 Release: https://www.first.org/cvss/v4-0/
`,en=`# Day 18 - AV、AC 與 AT：攻擊距離和攻擊難度怎麼判斷

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：CVSS 評分核心

「這個漏洞很難利用，所以 AC 應該是 High。」

問題是，到底難在哪裡？需要高超的逆向能力、payload 要調很久、只能在同網段利用，或必須等服務碰巧進入特殊狀態，對 CVSS 而言是完全不同的事情。不能全部丟進 AC:H 就下班。

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

v4.0 將 \`AT\` 拆出來，描述 vulnerable system 中是否必須存在特定部署或執行條件。典型例子包括必須取得中間人位置，或利用成功依賴競態條件。

這時可分別表達：攻擊需要特殊系統條件（AT:P），以及攻擊者是否還必須採取可觀察、可重複的防禦繞過動作（AC:H）。兩者不再擠在同一格。

v4.0 的 AT 值為 None 或 Present。Present 不代表漏洞幾乎無法利用，而是承認利用並非在所有狀態下都成立。

## 三個容易混淆的例子

需要同一 Wi-Fi 網段才能送封包，首先影響的是 AV，不能只因距離受限就填 AC:H。

需要受害者打開惡意文件，主要是 UI；文件內容製作困難，不足以單獨證明 AC:H。

必須在極短時間窗競爭檔案操作，v3.1 可能反映在 AC:H；到了 v4.0，這類執行條件更適合檢查 AT:P。

## 寫下理由，比背答案重要

評分時可以替每個非直覺選項留一句理由，例如：「利用介面僅可從同一廣播網域存取，因此 AV:A」或「成功利用依賴非決定性的 race condition，因此 v4.0 AT:P」。

這些句子能讓另一位評分者重現你的判斷。若最後留下的理由只有「因為很難」，通常就表示還沒把這個「難」拆到正確指標。

## 參考資料

- CVSS v3.1 Specification, Base Metrics: https://www.first.org/cvss/v3.1/specification-document
- CVSS v3.1 User Guide: https://www.first.org/cvss/v3-1/user-guide
- CVSS v4.0 Specification, Base Metrics: https://www.first.org/cvss/v4-0/specification-document
`,tn=`# Day 19 - PR 與 UI：到底是誰必須先做什麼

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：CVSS 評分核心

一份報告寫著：「攻擊者登入後上傳檔案，管理員查看後就會執行 JavaScript。」

這短短一句其實塞了兩種前置條件：攻擊者要先登入，另一位使用者還得去看那份內容。前者由 Privileges Required 處理，後者則屬於 User Interaction。兩個角色如果沒拆開，分數很容易填錯。

## PR 看的是攻擊前已有的權限

\`Privileges Required\` 有 None、Low、High。判斷時間點是在漏洞利用開始之前，而不是成功之後。

攻擊者透過漏洞取得管理員權限，不能因此填 PR:H；若觸發入口完全不需登入，仍可能是 PR:N。相反地，只有系統管理員能進入的設定頁面存在 command injection，通常要考慮 PR:H，即使成功後能執行更高權限命令。

Low 與 High 的界線要看攻擊前權限能控制的範圍。一般使用者只能操作自己擁有的資源，通常較接近 Low；已能控制整個 vulnerable component 的設定或使用者，則可能是 High。不要只用角色名稱判斷，名為 operator 的帳號在不同產品可能權力差很多。

## UI 要找攻擊者以外的人

\`User Interaction\` 關心的是另一位使用者是否必須參與。受害者開啟文件、瀏覽頁面、點擊連結或匯入設定，都可能構成 UI。

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

最簡單也最實用的檢查方式，就是把攻擊者和受害者的動作分成兩行寫。誰需要什麼權限、誰必須做哪一步，通常一眼就會清楚很多。

## 參考資料

- CVSS v3.1 Specification: https://www.first.org/cvss/v3.1/specification-document
- CVSS v3.1 User Guide, Privileges Required: https://www.first.org/cvss/v3-1/user-guide
- CVSS v4.0 Specification: https://www.first.org/cvss/v4-0/specification-document
`,on=`# Day 20 - Scope 與 C／I／A：影響到底落在哪個系統

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：CVSS 評分核心

「這個漏洞成功後影響很大。」這句話聽起來很嚴重，但拿來填 CVSS 還是不夠。要先分清楚被攻擊的元件、承受後果的系統，以及機密性、完整性、可用性各自損失多少。

這也是 v3.1 Scope 經常產生歧見，而 v4.0 決定換一種表達方式的原因。

## v3.1 Scope 在看 security authority

v3.1 的 Scope Unchanged 表示受漏洞影響的元件，與受到衝擊的資源由同一個 security authority 管理。Changed 則表示漏洞利用能影響另一個安全授權範圍內的資源。

虛擬機逃逸是常見例子：漏洞位於 guest，後果進入 hypervisor 或 host 管理的範圍。瀏覽器 renderer 突破 sandbox 影響更高權限元件，也可能符合 Changed。

但權限提升不一定等於 Scope Changed。如果同一作業系統的授權機制本來就管理低權限與 root 資源，仍需依元件與 authority 邊界判斷。影響多台主機也不會只因數量增加就自動 Changed。

## v4.0 改成直接描述兩端影響

v4.0 不再使用 Scope，而是分成 Vulnerable System 的 \`VC/VI/VA\`，以及 Subsequent System 的 \`SC/SI/SA\`。

評分者可以把漏洞所在系統的影響，與後續系統承受的影響分開。Stored XSS 位於網站應用，但後果可能發生在另一位使用者的瀏覽器安全情境；v4.0 能直接表示兩端，不必先把關係壓成一個 S:C。

Subsequent System 不是「任何間接商業損失」。仍要是漏洞利用造成、且可由技術安全屬性描述的後續系統影響。

## Confidentiality：能看到什麼

C:N 表示沒有機密性損失；Low 通常是部分資訊受到限制性影響；High 則是全面或嚴重的資訊揭露。

評估應以可存取資料的性質與範圍為依據。錯誤訊息洩漏一個安裝路徑，和下載整份客戶資料庫，不應只因都叫 information disclosure 就給一樣的值。

## Integrity：能改變什麼

Integrity 看攻擊者能否修改受保護資料或系統行為。只能更改自己原本就有權修改的內容，不是漏洞帶來的完整性影響；能竄改其他使用者資料、設定或執行流程，才是要評估的部分。

High 通常表示完整性保護遭到重大或全面破壞。不要因 payload 最後可以「執行一個命令」，就略過命令實際執行權限與可控制範圍。

## Availability：壞多久、壞多大

一次 request crash、單一 worker 重啟、整個服務無限期中斷，影響層次不同。若服務有自動復原且只有短暫資源消耗，A:L 可能比 A:H 合理；若攻擊可持續阻斷核心功能或需要人工重建，才更支持 High。

CVSS Base 評估合理最壞結果，但仍要是攻擊者可達成的結果，不是任意延伸的災難故事。

## 一個實用寫法

卡住時先別盯著計算器，寫下兩句話：「漏洞位於哪個元件？成功後直接控制或破壞哪些資源？」再分別檢查 C、I、A。v3.1 接著判斷這些影響是否跨越 authority；v4.0 則把它們放到 vulnerable 或 subsequent system。

如果連受影響資源都還寫不清楚，那個看起來很精確的分數，多半也還沒有足夠依據。

## 參考資料

- CVSS v3.1 Specification, Scope and Impact: https://www.first.org/cvss/v3.1/specification-document
- CVSS v3.1 Scope Examples: https://www.first.org/cvss/v3-1/examples
- CVSS v4.0 Specification, Impact Metrics: https://www.first.org/cvss/v4-0/specification-document
`,rn=`# Day 21 - 從向量到分數：RCE 一定是 9.8 嗎

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：CVSS 評分核心

看到 RCE 三個字，手很容易直接往 9.8 填下去。這樣表單做得很快，答案卻不一定對。

RCE 通常很嚴重，但「RCE = 9.8」從來不是 CVSS 規則。9.8 是一組特定 v3.1 Base Metrics 算出的結果：

\`\`\`text
CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
\`\`\`

只要必要條件或實際影響有一項不同，向量和分數就可能跟著改變。

## 先寫向量，再讓計算器算分

CVSS 公式包含 exploitability 與 impact 的權重、Scope 影響和向上取整規則。實務上應使用 FIRST 官方計算器或可信工具，不建議手算後只留下數字。

真正需要人工判斷的是每個 metric。工具能正確代公式，不能替你知道入口是否需要登入、使用者是否必須開檔，或程式碼最後以什麼權限執行。

## 需要登入的 RCE

假設一般使用者可在自己的專案設定中插入命令，伺服器會以受限服務帳號執行。若攻擊前需要低權限帳號，PR 就不會是 None；若只能從管理網路接觸，還要依漏洞本身和部署方式判斷 AV 或 Environmental Metrics。

「最後可執行命令」也不保證 C、I、A 全部 High。容器權限、檔案掛載、網路政策與可用命令，都可能限制技術影響。

## 要人開檔的 RCE

惡意文件觸發桌面程式碼執行時，往往需要受害者開啟檔案。v3.1 的 UI 可能是 Required；v4.0 還要判斷 Passive 或 Active。寄送管道在網路上，不代表 AV 就一定是 Network，應依漏洞觸發位置套用規格定義。

## 只在本機成立的權限提升

某些漏洞能執行任意程式碼，但攻擊者先要有本機帳號或執行能力。這類案例可能是 AV:L、PR:L，技術影響仍可很高，分數卻不會是遠端未驗證 RCE 常見的 9.8。

這不代表漏洞不重要。對多使用者主機、VDI、容器平台或已遭入侵的環境，本機提權可能是攻擊鏈中的關鍵一步。

## 分數相同，故事可能不同

CVSS 分數經過加權與四捨五入，不同向量可能落到同一數值。因此公告只寫「CVSS 8.8」會丟失大量資訊。至少應保留版本與完整向量，最好再附上各項判斷理由。

不同版本也不能直接比較。v4.0 改了 metric 與 scoring system，同一漏洞的 v3.1 與 v4.0 分數不同，不代表其中一個一定錯。

## 評分前的五句話

我習慣先回答五件事：攻擊從哪裡開始、依賴什麼額外條件、攻擊前要有何權限、是否需要另一位使用者參與、成功後實際影響哪些系統與資料。

這五句如果寫不出來，就先回去補漏洞事實。急著打開計算器，只會把一堆不確定性包裝成一個看起來很精確的數字。

## 參考資料

- CVSS v3.1 Calculator: https://www.first.org/cvss/calculator/3.1
- CVSS v3.1 Specification: https://www.first.org/cvss/v3.1/specification-document
- CVSS v4.0 Calculator: https://www.first.org/cvss/calculator/4.0
- CVSS v4.0 Specification: https://www.first.org/cvss/v4-0/specification-document
`,an=`# Day 22 - EPSS 是什麼？它預測的是未來 30 天

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：EPSS、風險排序與 CNA 實務

假設面前有兩個 CVSS 都是 9.8 的漏洞，但今晚的人力只夠先修一個。兩邊分數打成平手，再比較一次嚴重度也不會突然跑出答案。這時真正想問的是：「哪一個比較可能很快遭到利用？」

EPSS 就是拿來補這塊資訊的，但先說在前面：它會提供線索，不會替你按下最終決定鍵。

## 一個每天更新的機率估計

Exploit Prediction Scoring System 由 FIRST 維護。它利用公開可取得的漏洞與威脅資訊，估計某一個已發布 CVE 在未來 30 天內，出現野外利用活動的機率。

EPSS score 介於 0 到 1，也可以看成 0% 到 100%。例如 0.20 表示模型估計未來 30 天觀察到利用的機率為 20%，不是「漏洞有 20% 嚴重」，也不是「20% 的系統已遭入侵」。

分數每日更新。PoC、攻擊工具、社群關注與其他訊號改變後，同一 CVE 的 EPSS 可能跟著升降，因此引用時最好保留查詢日期。

## Percentile 是相對位置

EPSS 資料還提供 percentile。它回答這個分數在所有已評估 CVE 中排在哪個相對位置。

score 是模型的絕對機率估計，percentile 是相對排名。某筆 CVE 的機率看起來不高，仍可能位於很高 percentile，因為大多數漏洞被觀察利用的機率本來就低。兩個值不能互相替代。

## EPSS 不知道你的環境

模型不知道公司是否真的使用該產品、不知道服務是否對外，也不知道受影響資產承載的是公開測試資料還是核心交易。

它同樣不衡量利用成功後的衝擊。EPSS 高、技術影響低，和 EPSS 低、可能造成重大安全事故，是兩種不同決策情境。

因此 EPSS 是 prioritization input，不是完整風險分數。資產存在性、可達性、補償控制、業務影響與威脅情報仍要一起看。

## 為什麼不能拿 EPSS 當預言

機率不是承諾。高分漏洞可能在你的環境從未遭利用，低分漏洞也可能成為針對性攻擊入口。模型根據可觀察資料建立，而觀測本身必然有限，新的漏洞與小眾產品也可能缺乏足夠訊號。

比較健康的用法是縮小待處理清單。例如先從確實存在於環境的 CVE 中，找出 EPSS 較高者進一步檢查，而不是訂一條「低於 0.1 一律不修」的永久規則。

## 查詢時至少記三件事

記下 CVE ID、score 與查詢日期；需要比較整體相對位置時，再記 percentile。若將 EPSS 匯入內部系統，應按日更新，而不是在漏洞建立當天抓一次後永久保存。

明天會把 CVSS 與 EPSS 放在同一張決策圖裡看：一個談技術嚴重度，一個談近期利用機率。兩個放在一起很有用，但誰都不能單獨冒充完整風險。

## 參考資料

- EPSS 官方網站: https://www.first.org/epss/
- EPSS Model: https://www.first.org/epss/model
- EPSS FAQ: https://www.first.org/epss/faq
- EPSS API: https://www.first.org/epss/api
`,sn=`# Day 23 - CVSS 高不等於一定被利用：怎麼和 EPSS 一起看

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：EPSS、風險排序與 CNA 實務

CVSS 與 EPSS 放進同一張試算表後，很多人的手會很自然地想把兩個數字相乘，再做出一欄漂亮的「風險分數」。這樣做不是完全不能用，但至少要先知道，這個方便的總分把哪些資訊壓扁了。

CVSS 說明技術嚴重度與利用條件；EPSS 估計未來 30 天觀察到利用的機率。兩者量尺、更新頻率與問題都不同。

## 高 CVSS、低 EPSS

這類漏洞成功利用後可能造成重大衝擊，但目前公開世界裡的利用訊號較少。原因可能是產品部署量低、利用條件不穩定、細節尚未公開，也可能只是模型目前可見的資料不足。

不能因此直接延後。若受影響系統正好對外、資產價值高，或威脅模型顯示它是特定攻擊者會關注的入口，仍可能需要立即處理。

## 中等 CVSS、高 EPSS

這類漏洞技術影響未必是全面接管，但容易自動化、產品普及，或已出現大量利用訊號。若環境中有大量同類資產，累積風險可能比單一 Critical 更急。

常見例子是可被批次掃描的資訊洩漏、驗證繞過或服務中斷。只用「未達 9 分」篩選，會讓這些項目沉到清單後面。

## 四個步驟比一條公式好用

第一步先確認資產與版本。環境裡沒有受影響產品，後面的分數都只是情報；版本判斷不明時，先補 inventory 或驗證。

第二步看可達性與補償控制。Internet-facing、內網、只限管理平面，攻擊機會不同。

第三步把 CVSS 向量、EPSS score 與 KEV 等利用證據並列，不要只留下綜合數字。這樣決策者看得到「為什麼排前面」。

第四步再納入資產價值、資料敏感度、服務關鍵性與修補成本，形成自己的處置期限。

## EPSS 低不代表沒有 exploit

EPSS 是模型估計，不是 exploit database。某漏洞可能已有 PoC，卻因使用門檻、可靠度或觀測訊號而維持低分；也可能存在未公開或針對性的利用，模型尚未捕捉。

同樣地，EPSS 高不表示已確認遭到野外利用。要回答「是否有已知利用事實」，應查看 CISA KEV、供應商公告與可信威脅情報，而不是從機率反推事實。

## 保留原始欄位，日後才有辦法調整

組織可以設計自己的優先級規則，但最好保留 CVSS vector、版本、EPSS score 與日期、KEV 狀態、資產情境。當模型更新或業務門檻改變時，才能重新排序。

一個漂亮的總分確實很方便，但真正要處置或面對稽核時，幾個能解釋「為什麼」的原始欄位，通常更有用。

## 參考資料

- EPSS FAQ: https://www.first.org/epss/faq
- EPSS Model: https://www.first.org/epss/model
- CVSS v4.0 User Guide: https://www.first.org/cvss/v4-0/user-guide
- CISA KEV Catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
`,cn=`# Day 24 - KEV、Exploit、PoC：不要把三種證據混成一句話

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：EPSS、風險排序與 CNA 實務

「這個漏洞有 exploit。」

這句話看起來有情報，實際上資訊量可能跟「那邊有東西」差不多。它可能代表研究員公開了一段只能讓程式 crash 的 PoC，也可能代表攻擊框架已有可靠模組，甚至是事件調查已確認攻擊者正在野外利用。三種情況差很多，通報時不能全部用同一句話帶過。

## PoC：證明某個主張成立

Proof of Concept 的目的，是以最小方式證明漏洞或其中一段利用條件。它可能只讓服務異常、顯示可控 instruction pointer，或讀出一小段資料。

PoC 不一定可靠、不一定跨版本，也不一定完成攻擊鏈。能 crash 的 memory corruption PoC，和穩定繞過保護並執行程式碼的 exploit，不是同一成熟度。

引用 PoC 時應說清楚它證明了什麼、測試版本、必要條件與來源。不要因為 GitHub 上出現檔案，就把「存在公開 exploit」寫成「已遭廣泛利用」。

## Exploit：把弱點轉成可利用結果

Exploit 通常比 PoC 更接近實際取得安全影響的程式或方法，但這個詞沒有單一可靠度保證。它可能要人工調整 offset、只支援特定環境，也可能已被整合到成熟工具中。

判讀時至少看來源、發布時間、支援版本、成功結果、是否需要先取得權限，以及是否有可信的獨立驗證。來路不明的 exploit code 本身也可能帶有惡意內容，不適合直接在工作環境執行。

## KEV：已知遭到野外利用的目錄

CISA 的 Known Exploited Vulnerabilities Catalog 收錄有證據顯示已在野外遭利用，且符合其納入條件的 CVE。對美國聯邦文職機關，BOD 22-01 另規定了修補要求；其他組織也可把 KEV 當作高價值排序依據。

KEV 是一份經策展的權威清單，不是世界上所有利用事件的完整全集。某 CVE 尚未列入，不能反推它從未被利用或不重要。

## 三句話分開寫

比起「已有 exploit」，更好的寫法是：

- 研究員已公開可重現服務崩潰的 PoC，尚未證明程式碼執行
- 某工具已加入針對特定版本的 exploit module
- CISA 已於某日將此 CVE 納入 KEV，表示有野外利用證據

每一句都能被查證，也不會把能力、成熟度與觀測事實混在一起。

## 時間戳記很重要

利用狀態會變。公告發布當天「尚無公開 PoC」，一週後可能已失效。撰寫時應加上截至日期與來源；資料庫也應把觀測狀態視為可更新欄位，而不是漏洞永遠不變的描述。

對防守方而言，KEV、可信事件情報與成熟 exploit 通常會顯著提高優先級。但最後還是得確認資產、版本與可達性。環境裡根本沒有受影響產品，清單標得再紅，也不會憑空變成你家的資安事件。

## 參考資料

- CISA KEV Catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- CISA BOD 22-01: https://www.cisa.gov/news-events/directives/bod-22-01-reducing-significant-risk-known-exploited-vulnerabilities
- CVSS v4.0 Exploit Maturity: https://www.first.org/cvss/v4-0/specification-document
- EPSS FAQ: https://www.first.org/epss/faq
`,ln=`# Day 25 - 漏洞類型整理：Injection、Memory Corruption、Auth Bypass、DoS

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：EPSS、風險排序與 CNA 實務

漏洞公告裡常會看到 Injection、Memory Corruption、Auth Bypass、DoS 這些大標籤，看起來像分得很整齊，實際上裡面常混著根因、利用方法與結果。

今天就挑四個最常出現的詞來拆。重點不是背定義，而是下次看到名稱時，知道自己還要繼續追問什麼。

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

標題可以短，正文不能只剩標籤。與其丟一句「Critical Auth Bypass RCE」讓讀者自己腦補，不如說清楚哪個驗證步驟可被繞過、之後能呼叫哪個管理功能，以及命令會用什麼權限執行。這樣別人才真的有辦法判斷修補與風險。

## 參考資料

- CWE-74 Injection: https://cwe.mitre.org/data/definitions/74.html
- CWE-119 Memory Buffer Operations: https://cwe.mitre.org/data/definitions/119.html
- CWE-288 Authentication Bypass: https://cwe.mitre.org/data/definitions/288.html
- CWE-400 Uncontrolled Resource Consumption: https://cwe.mitre.org/data/definitions/400.html
`,pn=`# Day 26 - CVE 描述怎麼寫：把必要事實放進一個段落

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：EPSS、風險排序與 CNA 實務

CVE 描述很尷尬：它不能像新聞標題一樣只負責吸睛，也不可能塞進整份技術報告。它得在不長的篇幅裡，讓沒有參與調查的人看懂哪個產品、哪些版本、出了什麼問題、誰能在什麼條件下利用，以及最後會造成什麼影響。

最常見的問題通常不是英文文法，而是句子看起來很完整，關鍵資訊卻剛好都不在裡面。

## 先確定主詞

「A vulnerability was found in the system」幾乎沒有識別力。主詞應盡量包含 vendor、product 與受影響元件。若產品有容易混淆的同名版本，也要用 CPE、package ecosystem 或其他結構化欄位補足。

版本範圍不必全塞進英文句子，但 Record 中應有可機器讀取的 affected data。使用「latest version」「all versions」前要特別小心，除非調查真的能支持這麼大的範圍。

## 中間說明 weakness 與入口

接著交代失效控制與可控入口，例如「在處理下載路徑時未限制解析後的位置」或「將未經中和的參數串接到 shell command」。這比只寫 arbitrary file read 或 RCE 更能說明漏洞本身。

若公開細節會在修補前增加不必要風險，可以保留 payload 或敏感路徑，但不應把描述抽空到只剩「存在安全問題」。

## 攻擊者條件不能省略

遠端或本機、是否需要驗證、需要一般帳號還是管理員權限、是否要另一位使用者操作，會直接改變讀者判斷。

避免使用「authenticated attacker」後就不再說明權限。若產品角色很多，應指出最低必要權限或可執行的功能。若目前只能證明管理員可利用，就不要推測一般使用者也可以。

## 結尾描述可證明的影響

影響可以是讀取限制外檔案、修改其他使用者資料、執行服務帳號權限的命令，或造成服務中斷。把能力與可能後果分開，文字會比較誠實。

例如「可讀取服務程序有權存取的檔案，可能導致敏感設定外洩」，比「可取得伺服器所有機密」準確。後者同時假設了權限、檔案內容與後續利用。

## 一個可重用的骨架

\`\`\`text
[Vendor] [Product] [affected versions] contains [weakness]
in [component or operation]. [Attacker with conditions] can
[action] via [input or interface], resulting in [technical impact].
\`\`\`

骨架是防漏清單，不是要每篇公告長得一模一樣。若句子太長，可以拆成兩句；若產品名稱已在結構化欄位很清楚，也不必為了模板反覆堆疊。

## 避免沒有證據的形容詞

Critical、easily、severe、fully compromised 都需要依據。CVE 描述的工作是陳述事實，嚴重度可由 CVSS 向量表達，利用成熟度則交給相應欄位與外部情報。

發布前可以把描述丟給一個完全沒看過報告的人，只問五件事：哪個產品、哪些版本、哪個控制失效、利用條件、技術影響。如果有一題答不出來，通常不是讀者不夠聰明，而是描述還需要補資料。

## 參考資料

- CVE Record Format: https://cveproject.github.io/cve-schema/schema/docs/
- CVE CNA Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
`,mn=`# Day 27 - 一份好漏洞報告需要什麼：影響、條件、版本、修補

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：EPSS、風險排序與 CNA 實務

報告裡有一串很帥的 payload，不代表別人就一定重現得出來；反過來，一份沒有華麗 exploit 的報告，也可能好處理得不得了。差別通常不在畫面有多炫，而是有沒有把測試環境、操作步驟與安全影響連成一條可驗證的證據鏈。

## 先讓別人找到同一個系統

列出產品名稱、版本、build、安裝方式、作業系統與相關設定。雲端服務則需要 endpoint、租戶條件與測試時間。若漏洞只在非預設設定出現，設定本身就是前置條件，不能藏在重現步驟深處。

版本資訊最好能被再次確認，例如 About 頁面、package lock、image digest 或回應 header。只寫「最新版」幾天後就失去意義。

## 重現步驟要能從乾淨狀態開始

說明使用哪種角色登入、先建立什麼資料、送出哪個 request，再觀察哪個結果。HTTP 報告可附上去除 cookie、token 與個資後的原始 request/response；桌面程式則可附 crash log、stack trace 或最小觸發檔案。

不要只貼自動化工具的結論畫面。工具名稱與版本可以保留，但核心證據應讓維護者不用同一套工具也能理解。

## Expected 與 Actual 能快速定位問題

Expected Behavior 說明系統原本應阻止什麼；Actual Behavior 則記錄實際發生的安全違反。

例如：「一般帳號應只能下載自己建立的備份；修改 \`backup_id\` 後，伺服器回傳另一位使用者的備份。」這比「存在 IDOR」更容易驗證，也避免術語選錯時拖累整份報告。

## Impact 要和證據接得起來

能修改顯示名稱，不等於能接管帳號；看到 stack trace，不等於已取得 RCE。可以分成已證明的 impact 與合理的後續風險，並標示尚未驗證的部分。

若測試為了避免碰觸真實資料而中止，也可以清楚說明停止位置。負責任的邊界，比假裝完成整條攻擊鏈更可信。

## 版本範圍與修補資訊

研究者通常只能確認測過的版本，不應自行宣稱所有歷史版本都受影響。供應商在 triage 後可透過 commit history、回歸測試與 release branch 補齊範圍。

修補建議可以提供，但不必把單一 payload 黑名單當成完整修復。若已有 patch，應測試原 PoC、編碼變形、權限邊界與相鄰功能，並記錄第一個修補版本或 workaround。

## 別忘了聯絡與揭露安排

留下可回覆的聯絡方式、期望署名，以及是否已向其他協調單位或平台通報。若附檔含敏感資訊或 exploit，先確認接收方提供的安全傳輸方式。

說到底，一份好報告的目的不是證明作者有多厲害，而是讓另一端能穩定重現、判斷範圍、完成修補，最後把公開資訊寫對。能讓問題順利往下走，才是真正有用的報告。

## 參考資料

- CERT/CC Vulnerability Disclosure Guidance: https://certcc.github.io/confluence/display/CVD/
- CISA Coordinated Vulnerability Disclosure Process: https://www.cisa.gov/coordinated-vulnerability-disclosure-process
- CVE CNA Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
`,Cn=`# Day 28 - 案例拆解：把漏洞報告整理成 CVE Record

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：EPSS、風險排序與 CNA 實務

前面一路講了報告、CWE、CVSS 和描述，今天終於把它們全部放到同一張桌上。我們用一個虛構案例，走完從原始報告到公開 Record 的整理過程。

案例不對應任何真實產品，也不用忙著搜尋 CVE。這次的重點，是看一堆研究資料最後怎麼被整理成可公開、可查詢的欄位。

## 原始報告

研究者回報 Acme Note Server 4.2.0 的匯入功能接受 ZIP 檔。封裝內的檔名若包含 \`../\`，解壓縮後可以把檔案寫到匯入目錄之外。功能僅限已登入的一般帳號使用；研究者以無害文字檔證明可以覆寫服務帳號有權寫入的位置。

報告附上測試環境、最小 ZIP、request、解壓前後檔案位置與服務日誌。沒有測試寫入 web root 或啟動目錄，因此尚未證明程式碼執行。

## 先確認這是不是一個可獨立修補的漏洞

維護者重現後，發現解壓函式只檢查封裝檔名是否為絕對路徑，沒有確認正規化後的輸出仍在目的目錄。修補是在寫檔前解析 canonical path，拒絕超出目錄的項目。

這裡已有明確的安全政策違反、受影響元件與獨立修補點。接著要確認是否已有 CVE、產品是否在該 CNA scope，以及公開時程。

## 補齊 affected versions

研究者只測 4.2.0。維護者追查後確認問題從 4.0.0 引入，4.2.1 修正；3.x 使用另一套匯入流程，不受影響。

Record 的 affected data 因而可以表達 4.0.0 起、4.2.1 之前受影響，而不是含糊寫成「4.2.0 and earlier」。版本範圍是調查結果，不是從單一測試版本外推。

## 選 CWE

輸入是封裝內路徑，失效點是解壓目的路徑未限制在指定目錄，符合 \`CWE-22\`。若要更貼近 Zip Slip 的實作情境，也仍應從官方允許用於 vulnerability mapping 的 weakness 與證據出發，不需自創分類。

## 寫描述

可以整理成：

> Acme Note Server 4.0.0 through 4.2.0 does not restrict the resolved path of entries extracted by its ZIP import function. An authenticated remote user can upload a crafted archive to write files outside the import directory with the privileges of the service account, potentially overwriting application-accessible files.

描述沒有宣稱 RCE，因為報告沒有證明可寫位置一定會被執行；也保留了服務帳號權限這個重要邊界。

## 評估與參考資料分開處理

CVSS 要依匯入功能的網路可達性、一般帳號權限、是否需他人互動及可寫範圍判斷，不能因為看到 Zip Slip 就套固定向量。

References 可放供應商公告、修補 release note 或 commit，以及協調後同意公開的研究報告。若 commit 在公告前會直接揭露 exploit 細節，發布時程需要一起安排。

## 最後做一致性檢查

產品名、版本、描述、CWE、CVSS 與 references 應講同一個故事。若描述寫一般帳號即可利用，CVSS 卻填 PR:N；或修補版本寫 4.2.1，affected data 又把 4.2.1 標成 affected，就需要在發布前修正。

所以把報告轉成 Record，不是把長文按下「摘要」就結束，而是把每個主張放進可驗證、可供人與機器使用的欄位。

## 參考資料

- CVE Record Format: https://cveproject.github.io/cve-schema/schema/docs/
- CVE CNA Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
- CWE-22: https://cwe.mitre.org/data/definitions/22.html
- CVSS v4.0 Calculator: https://www.first.org/cvss/calculator/4.0
`,hn=`# Day 29 - 從公開審查規則看：哪些報告最容易被要求補件

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：EPSS、風險排序與 CNA 實務

辛苦挖到漏洞，報告寄出去後卻收到一句「請補充資訊」，心情多少會有點差。但「確實有安全問題」和「目前資料足以完成 CVE 判定與發布」，本來就是兩件不同的事。

從 CVE Program 公開的 CNA Rules 與協調指引，可以整理出幾類最常被要求補件的報告。

被要求補件不代表研究沒有價值，也不一定是在懷疑你。很多時候只表示：要把它變成一筆公開 Record，還缺少幾個能讓其他人驗證的事實。

## 找不到產品與版本

產品有社群版、企業版、雲端版與多個 fork，報告卻只寫專案簡稱；或測試版本只標成 latest。接收方很難確認責任範圍，也無法搜尋 duplicate。

補件時通常需要完整產品名稱、取得來源、版本／commit、安裝模式與受影響元件。截圖可以輔助，但最好再有可複製的文字資訊。

## 無法從步驟重現安全影響

只有掃描器標題、沒有 request/response；只有 crash 畫面、沒有觸發檔案；或步驟依賴未說明的測試資料。這些都會讓重現停住。

報告應把環境、權限、前置資料、觸發輸入與觀察結果接起來。若漏洞不穩定，也要記錄成功率、時序或資源條件，而不是隱去失敗情況。

## 把預期功能當成漏洞

管理員原本就能執行系統命令、公開目錄原本就允許下載、使用者能修改自己建立的內容，單看結果未必違反安全政策。

要指出跨越了哪個信任邊界：一般帳號取得管理能力、A 租戶讀到 B 租戶資料，或輸入逃離原本限制。Expected 與 Actual 在這裡特別重要。

## Impact 過度延伸

錯誤訊息洩漏被寫成 full database compromise；可造成 crash 被寫成 remote code execution；需要管理員權限的功能被描述為 unauthenticated。

這類報告不是形容詞刪掉就好，還要回到證據。把已證明能力、合理後果與尚未驗證假設分開，反而更容易推進。

## 版本範圍靠猜

只測一版卻宣稱「所有版本」，或看到修補版後就假定所有舊版皆受影響。CVE Record 需要盡量準確的 affected status，但研究者與供應商掌握的資料可能不同。

報告可明確寫「confirmed on 4.2.0」；後續再由維護者檢查引入 commit 與各分支。這比先寫一個很大的範圍再縮回來可靠。

## Duplicate、scope 與聯絡對象

同一 root cause 可能已分配 CVE，也可能報到不負責該產品的 CNA。分配前搜尋既有公告、CVE List 與 issue tracker，可以減少重複；不確定窗口時，可依 CVE Program 的 CNA List 尋找產品 CNA 或適當的協調單位。

## 保持可回覆

很多補件最後卡在聯絡信箱失效、附件過期，或報告者未回覆關鍵問題。送出後保留原始測試環境與檔案，並明確告知公開期限或其他通報窗口。

一份研究的價值，當然不該只用「最後有沒有 CVE」衡量；但如果目標就是完成標準化通報，那可重現性、scope、獨立修補點與清楚的產品資料，確實一樣都不能少。

## 參考資料

- CVE CNA Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
- CVE CNA List: https://www.cve.org/PartnerInformation/ListofPartners
- CERT/CC Coordinated Vulnerability Disclosure: https://certcc.github.io/confluence/display/CVD/
`,gn=`# Day 30 - 建立自己的 CVE／CNA 漏洞通報檢查清單

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：EPSS、風險排序與 CNA 實務

終於來到第 30 天。放心，今天不再增加新的縮寫，不然寫的人和看的人可能都要翻桌了。

最後一天，就把前面談過的內容全部收進一份真的可以拿來用的檢查清單。

清單的目的不是讓每份通報都變成制式作文，而是在送出、分配或發布前，替自己攔下那些「我以為你有看」「我以為廠商會補」的空白。

## 1. 識別與責任範圍

- 產品、vendor、元件名稱是否明確且一致？
- 這個問題是否已有 CVE 或供應商公告？
- 接收方是否在該產品或漏洞類型的 CNA scope？
- 問題是否違反安全政策，且有可獨立修補的原因？

若產品本身都還對不上，先不要急著選 CWE 或算 CVSS。

## 2. 受影響版本

- 哪些版本經過實際測試？
- 問題何時引入、第一個修補版本為何？
- affected 與 unaffected 範圍是否有 commit、測試或維護者確認？
- 預設設定與非預設設定是否需要分開說明？

把 confirmed、inferred 與 unknown 分開。精確承認未知，比看似完整的猜測好。

## 3. 可重現性與證據

- 測試環境、角色、設定與前置資料是否齊全？
- 步驟能否從乾淨狀態重現？
- request/response、PoC、log 或 crash trace 是否已移除 token 與個資？
- Expected 與 Actual 是否清楚指出安全邊界？

證據要支持報告中的每個重要動詞：讀取、修改、繞過、執行、中斷。

## 4. 根因與分類

- 已知的是 impact、symptom，還是 root cause？
- CWE 是否允許用於 vulnerability mapping？
- 是否有更具體、且證據支持的 Base 或 Variant？
- 若使用 CAPEC，前置條件與 execution flow 是否真的吻合？

不知道時保留較高層但合法的分類，不要用精確編號包裝猜測。

## 5. CVSS

- 使用的是 v3.1 還是 v4.0，版本有沒有標清楚？
- AV、AC／AT、PR、UI 都有一句可重現的理由嗎？
- v3.1 Scope 或 v4.0 subsequent system 是否判斷正確？
- C、I、A 是已證明影響，還是延伸情境？
- 是否保留完整 vector，而不只是一個分數？

若漏洞事實不足，先補資料，不要讓計算器替不確定性做決定。

## 6. 描述與公開資料

- 描述是否包含產品、版本、weakness、攻擊條件與技術影響？
- 是否避免 latest、all versions、fully compromised 等無法支持的用語？
- references 能否讓讀者找到修補與公告？
- 結構化 affected data、文字描述與 release note 是否一致？
- 公開內容是否意外帶出憑證、個資或未協調的 exploit 細節？

發布前讀一次 Record，不看原始報告，確認它仍能獨立被理解。

## 7. 風險排序與後續更新

- 環境中是否真的存在受影響資產，且攻擊面可達？
- EPSS 的 score、percentile 與查詢日期是否保存？
- 是否已查看 CISA KEV、供應商公告與可信利用情報？
- CVSS、EPSS、KEV 與資產重要性是否各自保留，而非混成不可解釋的總分？
- 修補、workaround、版本範圍或利用狀態改變時，誰負責更新？

## 三十天之後

CVE 提供共同識別，CWE 整理弱點根因，CAPEC 描述攻擊模式，CVSS 表達技術嚴重度，EPSS 與 KEV 補上利用機率與已知利用事實。每一套工具都有邊界，放對位置才會有用。

真正好的漏洞通報，不是縮寫塞得最多，也不是分數算得最高，而是能讓研究者、維護者、防守方與使用者，針對同一組事實採取行動。

這份清單也不用一次就變成完美版本。每遇到一次資訊落差，就把新的檢查問題補回去。寫著寫著，它才會慢慢從一張通用清單，變成真正適合自己的工作方法。

## 參考資料

- CVE Program: https://www.cve.org/
- CVE CNA Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
- CWE Root Cause Mapping: https://cwe.mitre.org/documents/cwe_usage/guidance.html
- CAPEC: https://capec.mitre.org/
- CVSS: https://www.first.org/cvss/
- EPSS: https://www.first.org/epss/
- CISA KEV: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
`,dn=`# 2025 年回顧：在新竹 37K 的日子裡，我為自己打了一場仗

看到以前實習時遇到的資安前輩 HackerCat（駭客貓）寫的年度回顧，發現他每年都會記錄自己的成長，這讓我也想靜下心來，把這精彩到不行、甚至有點瘋狂的 2025 年給記錄下來。

這一年，我從一個剛走出軍營的新人，變成了一個在實戰中摸爬滾打的資安人。

> 薪水是公司的，但學到的技術是自己的。既然來了，就要帶走一點什麼。

---

## 從軍營走進新竹，先感受到的是現實

剛畢業、當完兵後，我帶著熱血跑去新竹找了人生第一份正式工作。現實很快就讓我體會到社會的重量。

領著扣完勞健保大約三萬七的月薪，在物價高昂的新竹，租了一間每個月一萬塊的小套房。每個月薪水入帳，看著被房租抽走的一大塊，再算算剩下的生活費，存摺裡的數字真的會讓人心涼一半。

但那時候我心裡一直有個聲音提醒自己：現在也許苦，可是只要能力真的有長在自己身上，這段日子就不算白熬。

## 一人資安，一人 IT，什麼都得扛

我的公司大約兩百人，但資安專職只有我一個，整個 IT 部門算上我也才三個人。

這意味著我沒有前輩可以帶，沒有現成的 SOP 可以照著走，很多問題到了我這裡，就是最後一站。

那一年，我活得像個雜食動物，什麼都得學、什麼都得碰。

- 從最基礎的 IT 運作開始補
- 學 AD 權限控管與 DNS 解析
- 跟著公司一起轉向雲端，摸熟 M365 生態系
- 研究 Entra ID 的身分驗證機制
- 用 Intune 管兩百多台狀況百出的端點
- 接觸 Microsoft Purview 做資料治理
- 地端環境還得處理 PA 防火牆、Switch 配置、XFort 與 PAM 導入

很多時候，我不是在做單一職位的工作，而是在用一個人的力氣，硬撐出一個小型資訊與資安體系。

## 那個凌晨一點回公司的夜晚，我記到現在

印象最深的一次，是因為我白天動了防火牆設定，結果害得別部門主管半夜沒辦法連 VPN 工作。

那天半夜一點，我一個人從租屋處爬起來，在空蕩蕩的新竹街道上趕回公司處理。深夜的公司很安靜，安靜到只剩機房風扇聲。

就是在那個時間點，我第一次很清楚地意識到：資安這份工作不只是技術而已，它還包含一種很難分攤的責任感，甚至是一種孤獨感。

你改一條規則、開一個權限、做一次修補，背後接住的不是一台設備，而是一整個部門能不能正常運作。

## 每月 Nessus 掃描，手抖著按下修補

因為公司經費有限，弱點掃描又是客戶稽核裡很重要的一塊，所以公司買了 Nessus 授權，而我就負責每個月的掃描與修補。

說實話，每次按下修補鍵時，手真的會抖。超怕哪台 Server 被我補壞直接掛掉，畢竟我背後沒有一個完整團隊可以支援，也沒有什麼緩衝空間能讓我放心犯錯。

但也就是在這種環境裡，我開始被迫養出真正的判斷力。

- 哪些漏洞要先補
- 哪些風險要先隔離
- 哪些變更要先驗證
- 哪些系統不能用理想狀態去看，只能在現實限制裡做最好的決定

## AI 變成我那一年的資安導師

在這種極限環境下，AI 幾乎成了我唯一的「資安導師」。

我學會了如何更精準地與 AI 對話，讓它幫我分析 Log、撰寫自動化腳本、整理觀念、檢視設定，甚至陪我一起做問題拆解。

那些夜晚，表面上看起來只是我一個人坐在螢幕前，但其實我是在和工具、知識、壓力、責任一起對打。

也正是那段時間，我開始真正理解一件事：會不會用 AI，不只是效率問題，而是你能不能在資源稀缺的情況下，替自己補出一個成長系統。

## 小程式、小自動化，替自己也替公司爭一口氣

這一年也不是只有壓力和疲勞。

我偶爾也會幫使用者寫一些小程式，去簡化他們原本很繁瑣的流程。看到原本要花幾小時的事，因為我的程式只要幾秒鐘就能完成，那種「真的幫上忙」的成就感很踏實。

我也慢慢發現，自己除了做資安，開發這件事其實也能成為我很強的武器。

如果一個資安人懂得寫程式、懂得自動化，就不只是守住風險而已，還能直接幫團隊提升效率、幫公司省掉外包成本，甚至把很多原本會重複消耗人的工作，變成一次做好、之後持續受益。

## 在混亂裡逼自己拿下 CEH，也開始公開輸出

為了證明自己，我逼著自己在雜事夾縫中考到了 CEH 證照。

那段日子，下了班就馬上回到小套房與考古題和實驗環境為伍。白天解決公司問題，晚上處理自己的未來。

後來，我還報名了人生第一次的 iThome 鐵人賽。連續寫三十天技術文章的過程，某種程度上也是在跟這一整年的混亂對話，把那些看似雜亂無章，但其實非常紮實的實戰經驗，一點一點整理成我能帶走的東西。

## 2025 很苦，但真的很精彩

現在回頭看，2025 年真的過得非常充實。

雖然領著實領三萬七、住著一萬塊的房子，生活並不寬裕，但這一年下來，我學會了如何在資源最匱乏的時候，靠自己撐起一整個防禦體系。

那些半夜修好的防火牆、那些一個人做完的掃描與修補、那些與 AI 一起熬過去的深夜，還有那份被現實逼出來的韌性，都是我在 2025 年拿到最貴、也最真實的資產。

2025，我過得很精彩。

---

改天再找時間補 2024 實習那段日子。
`;function n(e){return e.replace(/^---[\s\S]*?---\s*/,"").trim()}const Pn=[{slug:"certification-review",name:"證照心得",count:2},{slug:"certification-notes",name:"證照筆記",count:1},{slug:"ctf-notes",name:"CTF 筆記",count:1},{slug:"forensics",name:"Forensics",count:1},{slug:"self-review",name:"回顧自我",count:1},{slug:"ithome-2025-ironman",name:"2025 iThome 鐵人賽",count:30},{slug:"ithome-2026-ironman",name:"2026 iThome 鐵人賽",count:30},{slug:"weekly-vulnerability-radar",name:"每週漏洞雷達",count:32}],Sn=[{slug:"ithome-2026-day-30",title:"Day 30 - 建立自己的 CVE／CNA 漏洞通報檢查清單",date:"2026-08-05",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"9 min read",excerpt:"把產品、版本、證據、CWE、CVSS、描述與風險情報收成一份發布前檢查清單，替三十天的通報實務建立可重複使用的工作方法。",coverImage:null,contentMarkdown:gn},{slug:"ithome-2026-day-29",title:"Day 29 - 從公開審查規則看：哪些報告最容易被要求補件",date:"2026-08-04",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"從 CNA Rules 與協調指引整理常見補件原因：產品版本不明、無法重現、影響過度延伸、scope 錯誤與版本範圍靠猜。",coverImage:null,contentMarkdown:hn},{slug:"ithome-2026-day-28",title:"Day 28 - 案例拆解：把漏洞報告整理成 CVE Record",date:"2026-08-03",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"用虛構的 ZIP 路徑穿越案例，逐步確認修補點、affected versions、CWE、描述、CVSS 與 references 如何保持一致。",coverImage:null,contentMarkdown:Cn},{slug:"ithome-2026-day-27",title:"Day 27 - 一份好漏洞報告需要什麼：影響、條件、版本、修補",date:"2026-08-02",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"好的漏洞報告要讓另一端找到同一環境、從乾淨狀態重現，並把已證明影響、版本範圍與修補資訊清楚分開。",coverImage:null,contentMarkdown:mn},{slug:"ithome-2026-day-26",title:"Day 26 - CVE 描述怎麼寫：把必要事實放進一個段落",date:"2026-08-01",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"從產品、版本、weakness、攻擊條件到技術影響，整理 CVE 描述應保留的必要事實，以及容易讓內容失真的用語。",coverImage:null,contentMarkdown:pn},{slug:"ithome-2026-day-25",title:"Day 25 - 漏洞類型整理：Injection、Memory Corruption、Auth Bypass、DoS",date:"2026-07-31",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"四種常見漏洞名稱各自在描述什麼，又還缺哪些資訊？從輸入、失效控制與實際結果，避免把根因、利用方法與影響混在一起。",coverImage:null,contentMarkdown:ln},{slug:"ithome-2026-day-24",title:"Day 24 - KEV、Exploit、PoC：不要把三種證據混成一句話",date:"2026-07-30",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"PoC 證明主張、exploit 取得利用結果、KEV 記錄已知野外利用。分開能力、成熟度與觀測事實，通報才不會誇大。",coverImage:null,contentMarkdown:cn},{slug:"ithome-2026-day-23",title:"Day 23 - CVSS 高不等於一定被利用：怎麼和 EPSS 一起看",date:"2026-07-29",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"6 min read",excerpt:"CVSS 描述技術嚴重度，EPSS 估計近期利用機率；搭配資產、可達性與 KEV 證據，才能形成可解釋的優先順序。",coverImage:null,contentMarkdown:sn},{slug:"ithome-2026-day-22",title:"Day 22 - EPSS 是什麼？它預測的是未來 30 天",date:"2026-07-28",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"6 min read",excerpt:"EPSS 每日估計 CVE 在未來 30 天觀察到野外利用的機率。理解 score、percentile 與模型限制，避免把預測當成風險答案。",coverImage:null,contentMarkdown:an},{slug:"ithome-2026-day-21",title:"Day 21 - 從向量到分數：RCE 一定是 9.8 嗎",date:"2026-07-27",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"RCE 不會自動等於 CVSS 9.8。登入權限、使用者互動、利用位置與實際影響不同，都會產生不同向量與分數。",coverImage:null,contentMarkdown:rn},{slug:"ithome-2026-day-20",title:"Day 20 - Scope 與 C／I／A：影響到底落在哪個系統",date:"2026-07-26",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"從 v3.1 Scope 的 security authority，到 v4.0 vulnerable 與 subsequent system，逐一確認機密性、完整性與可用性影響。",coverImage:null,contentMarkdown:on},{slug:"ithome-2026-day-19",title:"Day 19 - PR 與 UI：到底是誰必須先做什麼",date:"2026-07-25",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"Privileges Required 看攻擊前已有權限，User Interaction 看攻擊者以外的人是否必須參與；用 Stored XSS 拆開兩者。",coverImage:null,contentMarkdown:tn},{slug:"ithome-2026-day-18",title:"Day 18 - AV、AC 與 AT：攻擊距離和攻擊難度怎麼判斷",date:"2026-07-24",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"利用位置、額外條件與攻擊者必須克服的防禦不是同一件事。比較 v3.1 AC 與 v4.0 新增的 Attack Requirements。",coverImage:null,contentMarkdown:en},{slug:"ithome-2026-day-17",title:"Day 17 - CVSS v4.0 改了什麼？不只是多一組縮寫",date:"2026-07-23",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"CVSS v4.0 新增 Attack Requirements、細分 User Interaction、移除 Scope，並加入 Threat 與 Supplemental Metrics。",coverImage:null,contentMarkdown:nn},{slug:"ithome-2026-day-16",title:"Day 16 - 一篇讀懂 CVSS v3.1：從條件、Scope 到影響",date:"2026-07-22",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"把 v3.1 Base Vector 還原成攻擊敘事，依序理解 AV、AC、PR、UI、Scope 與 C／I／A，而不是只記住 9.8。",coverImage:null,contentMarkdown:_},{slug:"ithome-2026-day-15",title:"Day 15 - CVSS 是什麼？先把嚴重度與風險分開",date:"2026-07-21",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"CVSS 提供技術嚴重度的共同語言，不知道組織的資產與威脅情境。先分清 Base、時間變化與 Environmental Metrics。",coverImage:null,contentMarkdown:J},{slug:"ithome-2026-day-14",title:"Day 14 - 案例練習：一個漏洞如何選 CWE 與 CAPEC",date:"2026-07-20",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"從虛構的任意檔案讀取報告開始，圈出入口、權限、失效控制與影響，再判斷 CWE-22 與 CAPEC-139 是否真的吻合。",coverImage:null,contentMarkdown:Y},{slug:"ithome-2026-day-13",title:"Day 13 - CVE、CWE、CAPEC 三者到底怎麼接在一起",date:"2026-07-19",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"6 min read",excerpt:"CVE 識別具體漏洞，CWE 描述系統弱點，CAPEC 整理攻擊者行為。三者回答不同問題，也不是一對一關係。",coverImage:null,contentMarkdown:$},{slug:"ithome-2026-day-12",title:"Day 12 - CAPEC 怎麼讀？把攻擊行為拆成幾個階段",date:"2026-07-18",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"6 min read",excerpt:"以 Relative Path Traversal 為例，沿著 Explore、Experiment、Exploit 閱讀 CAPEC execution flow，找出報告缺少的利用條件。",coverImage:null,contentMarkdown:Z},{slug:"ithome-2026-day-11",title:"Day 11 - CAPEC 是什麼？它和 CWE 有什麼不同",date:"2026-07-17",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"CWE 在問系統哪裡出了問題，CAPEC 則整理攻擊者如何利用弱點。理解 attack pattern，也釐清它和 ATT&CK 的使用差異。",coverImage:null,contentMarkdown:Q},{slug:"ithome-2026-day-10",title:"Day 10 - 不要只寫表面現象：CWE 與漏洞根因",date:"2026-07-16",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"任意檔案讀取與 RCE 都可能只是結果。從資料流、失效控制與 patch 往前追，讓 CWE mapping 停在證據支持的位置。",coverImage:null,contentMarkdown:X},{slug:"ithome-2026-day-09",title:"Day 9 - 常見 CWE 怎麼分？從 XSS、SQL Injection、Path Traversal 到 RCE",date:"2026-07-15",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"XSS、SQL Injection 與 Path Traversal 比較像失效方式，RCE 通常是結果。沿著 input、檢查與 sink 選擇合適 CWE。",coverImage:null,contentMarkdown:j},{slug:"ithome-2026-day-08",title:"Day 8 - CWE 是什麼？為什麼漏洞要對應 CWE",date:"2026-07-14",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"CVE 指向特定產品裡的一個漏洞，CWE 則描述可能反覆出現的弱點類型。從一行不安全程式碼開始，理解 weakness、vulnerability 與分類粒度的差別。",coverImage:null,contentMarkdown:z},{slug:"ithome-2026-day-07",title:"Day 7 - 寫漏洞通報時，什麼資訊是「必要」的？",date:"2026-07-13",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"9 min read",excerpt:"一封只寫「這裡有漏洞」的信，通常還不足以處理。從產品版本、重現步驟、安全邊界到公開狀態，整理一份能被定位、驗證與協調的漏洞報告。",coverImage:null,contentMarkdown:K},{slug:"ithome-2026-day-06",title:"Day 6 - 漏洞資訊到底看誰？CVE/MITRE、NIST/NVD、CISA/KEV、FIRST 與 Vendor Advisory",date:"2026-07-12",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"10 min read",excerpt:"同一組 CVE ID 在 CVE.org、NVD、CISA、FIRST 與廠商公告中，可能呈現不同資料。從官方識別、NIST enrichment、在野利用、評分標準到修補資訊，整理各來源真正負責回答的問題。",coverImage:null,contentMarkdown:q},{slug:"ithome-2026-day-05",title:"Day 5 - CVE Record 裡通常包含哪些欄位？",date:"2026-07-11",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"9 min read",excerpt:"一筆 CVE Record 不只有描述與分數。從 cveMetadata、CNA container 到可選的 ADP enrichment，逐一拆解產品、版本、CWE、CVSS、references 等欄位該怎麼讀。",coverImage:null,contentMarkdown:G},{slug:"ithome-2026-day-04",title:"Day 4 - 一個漏洞從發現到公開的生命週期",date:"2026-07-10",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"9 min read",excerpt:"漏洞從被發現到成為公開 CVE Record，會經過通報、指派判斷、保留 ID、整理資料與發布。理解每個階段，才能分清 Reserved、Published 與下游 enrichment。",coverImage:null,contentMarkdown:U},{slug:"ithome-2026-day-03",title:"Day 3 - CNA 是什麼？CNA、Root CNA、MITRE、NVD 的角色",date:"2026-07-09",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"CNA 負責指派與發布，Root 負責治理，MITRE 同時扮演多個 Program 角色，而 NVD 是下游 enrichment 資料庫。釐清角色，才能找到正確通報窗口。",coverImage:null,contentMarkdown:H},{slug:"ithome-2026-day-02",title:"Day 2 - CVE 是什麼？CVE ID、CVE Record、CVE List 的差異",date:"2026-07-08",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"一句「請查一下這個 CVE」，可能在問識別碼、單筆漏洞紀錄或整份公開目錄。拆開 CVE ID、CVE Record 與 CVE List，才能正確理解漏洞狀態與資料層次。",coverImage:null,contentMarkdown:B},{slug:"ithome-2026-day-01",title:"Day 1 - 為什麼漏洞需要標準化通報？從 CVE 說起",date:"2026-07-07",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"6 min read",excerpt:"漏洞通報不是把技術細節丟出去就結束。CVE 的價值在於讓研究者、廠商、使用者與防禦者能用同一個識別方式討論同一個問題，降低誤解與重複溝通成本。",coverImage:null,contentMarkdown:O},{slug:"ithome-2025-day-01",title:"Day 1- 法規推著我上場，學習讓我留下",date:"2025-08-18",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"資安是一場長期戰爭，我想把戰場紀錄下來。 還記得面試那天，主管提到公司剛上櫃，為了符合法規要求，需要一名專職的資安人員。在那之前，所有 IT 事務幾乎都由一位資...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10374837",contentMarkdown:c},{slug:"ithome-2025-day-02",title:"Day 2 - 公開情資很重要",date:"2025-08-19",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"是不是以為我要介紹 OWASP？今天不打算列一堆「情資平台清單」，而是針對公務繁忙、只能被動收信的資安工程師：只要訂閱幾個可靠來源，人家幫你整理好寄到信箱，...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10374947",contentMarkdown:l},{slug:"ithome-2025-day-03",title:"Day 3 - 鐵裝還是布甲？資安裝備選擇題",date:"2025-08-20",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"在一家公司裡，導入資安工具與服務的最大推力，往往來自 法規要求（ISO 27001、GDPR、金融業規範）與 客戶稽核，再加上長官對安全能力的期待。這些要求就...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10374848",contentMarkdown:p},{slug:"ithome-2025-day-04",title:"Day 4 - 公司的第一道防線",date:"2025-08-21",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"畢業後正式踏入資安職涯：Firewall，新手的第一道防線 畢業後正式踏入資安職涯，迎來的第一份正職工作。剛坐下還沒熟悉環境，主管就直接開口： 「你會看 Fi...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375208",contentMarkdown:m},{slug:"ithome-2025-day-05",title:"Day 5 - 文件地獄：葵花寶典?",date:"2025-08-22",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"在資安工程師的世界裡，敵人不只有勒索病毒、APT、釣魚信……還有一種藏在辦公室抽屜、共用槽的恐怖怪物： 「ISMS 文件」。 如果把防火牆當作是鐵甲、EDR 當...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375130",contentMarkdown:C},{slug:"ithome-2025-day-06",title:"Day 6 - EDR：手上那把神器",date:"2025-08-23",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"我每次 Python 寫的程式都被 EDR 擋住 :D還有一些機台軟體，每次安裝都會被隔離，有時候還誤以為「安裝失敗」，結果白白浪費好幾個小時在 debug。這...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375289",contentMarkdown:h},{slug:"ithome-2025-day-07",title:"Day 7 - IT 部門人少，資安工程師的多重宇宙",date:"2025-08-24",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"本來以為進公司，掛上「資安工程師」這個名號後，我的世界就是防火牆、EDR、弱點掃描，跟駭客在暗網對決。結果現實卻是：IT 部門人少，很多雜事也會落到我身上。...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375678",contentMarkdown:g},{slug:"ithome-2025-day-08",title:"Day 8 - 漏洞掃描大冒險：外包勇者 vs 自建工匠",date:"2025-08-25",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"想像一下：你的船在風平浪靜時就開始漏水——你會怎麼辦？在資安的世界裡，公司就像一艘航行中的大船，弱點就是那些你看不見的裂縫。不先檢查，等到海水灌進來，可能就來不...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375763",contentMarkdown:d},{slug:"ithome-2025-day-09",title:"Day 9 - 什麼M365除了Word，也有資安產品?",date:"2025-08-26",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"6 min read",excerpt:"原本以為微軟不就 Word、Excel 而已？公司導入 M365 才發現：微軟的 Security 其實很全。先聲明我沒買它股票（笑），但也必須說：全＝好複雜...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375925",contentMarkdown:S},{slug:"ithome-2025-day-10",title:"Day 10 - 微軟有Zero Trust架構嗎?",date:"2025-08-27",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"前言 講到 ZT（Zero Trust），就會想到大學時期的大專生計劃，我還拿這個當主題，但後來沒過 昨天說到 M365 不只是辦公室套件，今天要聊聊現在最...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376085",contentMarkdown:u},{slug:"ithome-2025-day-11",title:"Day 11 - 資料保護：別讓公司機密「長翅膀」飛出去",date:"2025-08-28",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"5 min read",excerpt:"前言 昨天講了 Zero Trust 的六大支柱，今天要挑一個大家最有感的：資料（Data）。因為對公司來說，伺服器壞了可以重建，但 資料外洩 可能直接 GG。...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376246",contentMarkdown:E},{slug:"ithome-2025-day-12",title:"Day 12 - 即使資料保護再嚴密，也擋不住一台失守的裝置",date:"2025-08-29",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"5 min read",excerpt:"昨天我們討論了資料（Data），這是企業最擔心外洩的核心資產。要有效守護資料，下一步必須確認：員工是用什麼裝置來存取這些資料。 想像一下：一台多年未更新的 Wi...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376390",contentMarkdown:P},{slug:"ithome-2025-day-13",title:"Day 13 - 打帳密已經過時了?大門不只要鎖，還要驗明正身",date:"2025-08-30",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"還記得剛進公司的第一天，IT 交給我一組帳號密碼，叮嚀：「千萬不要外流」。但現在光靠帳號密碼，已經很難抵擋駭客了。密碼外洩、釣魚信、暴力破解，都讓帳密組合變成資...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376102",contentMarkdown:f},{slug:"ithome-2025-day-14",title:"Day 14 - 資安工程師的週末小結",date:"2025-08-31",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"又是週末了，請容許我偷懶一下，寫一篇心得文吧。這篇不談技術細節，主要是想回顧一下開賽到現在我寫了些什麼。 老實說，這 14 天的文章有點隨性，每天都是當天臨時想...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376400",contentMarkdown:D},{slug:"ithome-2025-day-15",title:"Day 15 - 切碎內網，才能防止駭客橫向移動",date:"2025-09-01",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"前面談過 Zero Trust 的身分、裝置、資料，今天來到第四根柱子：網路（Network）。老實說，這一塊其實跟傳統 IT 網路很像，像 CCNA 的考題一...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376885",contentMarkdown:A},{slug:"ithome-2025-day-16",title:"Day 16 - 不出手也能「看光光」：被動盤點你公司的對外曝險",date:"2025-09-02",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"很多人以為一定要掃 IP、跑掃描器才看得到風險。其實 不碰對方資產，只靠公開資訊與指標，也能把自家對外面貌、第三方風險、外洩跡象抓個七八成。完全被動、合法合規...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10377098",contentMarkdown:V},{slug:"ithome-2025-day-17",title:"Day 17 - 為什麼一定要管「特權帳號」？",date:"2025-09-03",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"越來越想不到寫啥了 XDD每天在想要寫什麼，甚至都比寫的時間久 大家常聽到「帳號權限要設定好」，但「特權帳號」其實是另一回事：它能新增使用者、修改設定、存取...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10377265",contentMarkdown:w},{slug:"ithome-2025-day-18",title:"Day 18 - 如果明天 DB 爆掉，你撐得住嗎？",date:"2025-09-04",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"在資訊安全裡，很多人把心力放在「防止駭客入侵」，卻忘了一件更現實的事： 系統總有一天會壞，資料總有一天會丟。 不論是硬碟故障、人為誤刪、勒索病毒，還是天災火...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10377454",contentMarkdown:y},{slug:"ithome-2025-day-19",title:"Day 19 - 如何打造一個可靠的備份策略？",date:"2025-09-05",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"昨天聊到 RTO（恢復時間目標）與 RPO（恢復點目標），今天來談談如何透過備份保護資料，確保在最壞情況下仍能快速復原。 最經典的 3-2-1 備份原則...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10377679",contentMarkdown:I},{slug:"ithome-2025-day-20",title:"Day 20 — 為什麼要做災害復原？",date:"2025-09-06",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"昨天聊到 3-2-1 備份原則，備份能確保資料還在，但光有備份，並不代表系統能夠快速恢復上線。每年不管是 ISO 還是法規，總有個大魔王：災害復原（Disas...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10377737",contentMarkdown:T},{slug:"ithome-2025-day-21",title:"Day 21 - 資安專責人員",date:"2025-09-07",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"倒數第二個假日啦～前幾天聊到的 備份、零信任、帳號管理、災害復原、各種監控，其實通通都是資安專責人員的日常。 以下引用數發部發佈的資料： 何謂資安專責人員...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378065",contentMarkdown:v},{slug:"ithome-2025-day-22",title:"Day 22 - 公司電腦上，還有隱私嗎？",date:"2025-09-08",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"分享一個朋友的故事。 剛進公司不久，他電腦突然變超卡，還沒來得及寫信報修，電話就先響了： 「嗨～你電腦是不是怪怪的？我們這邊看到你 CPU 爆了。」 當下他...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378223",contentMarkdown:R},{slug:"ithome-2025-day-23",title:"Day 23 - Patch Management 是一項既必要又棘手的任務。",date:"2025-09-09",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"它就像是給汽車換機油：如果不做，引擎遲早會出大問題，系統可能因為安全漏洞而「爆炸」；但如果做得太急躁、貿然全域部署，又可能毀掉整個環境，導致服務中斷或相容性問題...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378517",contentMarkdown:b},{slug:"ithome-2025-day-24",title:"Day 24 - 風險評鑑：年度BOSS戰開打",date:"2025-09-10",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"風險評鑑這位每日必戰的 BOSS每年稽核必看..也是ISO/IEC 27001 的要求 當然他也是有好處，能幫組織及時發現潛在危機，並想出好方法應對。簡單來...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378757",contentMarkdown:M},{slug:"ithome-2025-day-25",title:"Day 25 - 一封垃圾郵件，可能就是資安危機的開端？",date:"2025-09-11",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"垃圾郵件：資安戰場的第一道城門 剛進公司時，我最怕的不是伺服器當機，而是員工慌張打電話： 「我好像點錯了一封信…」 一封垃圾郵件，可能讓公司資料被鎖、帳號被盜...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378959",contentMarkdown:N},{slug:"ithome-2025-day-26",title:"Day 26 - 從T65K2到T1566：MITRE ATT&CK入門指南",date:"2025-09-12",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"還記得我最早接觸資安的時候嗎？那時常常看到一堆神秘的代號：T1566、T1059、T1003……完全摸不著頭緒，心想這些數字到底在搞什麼鬼？我只聽過T65K2（...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10379225",contentMarkdown:k},{slug:"ithome-2025-day-27",title:"Day 27 - 為什麼藍隊要學MITRE ATT&CK？",date:"2025-09-13",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"接續昨天的內容 對藍隊（防禦方）來說，MITRE ATT&amp;CK 不是什麼「加分題」的選修，而是必修的攻防劇本。它不像教科書那樣生硬，而是像一部懸疑大...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10379244",contentMarkdown:x},{slug:"ithome-2025-day-28",title:"Day 28 - 沒有監控，你什麼都不知道",date:"2025-09-14",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"又是假日了，來個比較輕鬆的主題 剛入職的時候，公司還沒分得這麼細，IT 的監控、資安的巡檢，全都一把抓。每天一到公司，除了要看 AD、DNS、核心系統有沒有...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378945",contentMarkdown:W},{slug:"ithome-2025-day-29",title:"Day 29 - 轉職資安人必備技能",date:"2025-09-15",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"「如果想轉職資安，要從哪裡開始？」 說真的，資安的範圍大到你會覺得無從下手。一堆名詞：Nmap、SIEM、EDR、SOC、APT…到底要先學哪一個？ 其實最簡單...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10379737",contentMarkdown:F},{slug:"ithome-2025-day-30",title:"Day 30 - 尾聲：資安人的三十天",date:"2025-09-16",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"回顧 不知不覺，這個系列也走到尾聲了。第一次參加鐵人賽，真的正如它的名字一樣──很難。尤其我還一次報了兩個系列，結果 DevSecOps 系列在中途就沒能繼續更...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10379242",contentMarkdown:L},{slug:"cehp-review",title:"CEHP 心得",date:"2026-03-20",category:"證照心得",categorySlug:"certification-review",readTime:"12 min read",excerpt:"CEH Practical 考後心得，整理考試規則、環境、解題節奏與實作準備方式。",coverImage:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",contentMarkdown:n(r)},{slug:"ceh-v13-review",title:"CEH V13 證照心得與準備方式分享",date:"2025-07-20",category:"證照心得",categorySlug:"certification-review",readTime:"10 min read",excerpt:"CEH V13 考試心得與準備流程，包含考前提醒、考試經驗與複習方向。",coverImage:"https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80",contentMarkdown:n(i)},{slug:"ceh-v13-notes",title:"CEH v13 筆記（持續更新中）",date:"2025-07-01",category:"證照筆記",categorySlug:"certification-notes",readTime:"20 min read",excerpt:"CEH v13 重點筆記，整理常見觀念、攻防主題與考試複習內容。",coverImage:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",contentMarkdown:n(o)},{slug:"picoctf-notes",title:"picoCTF 筆記",date:"2025-06-20",category:"CTF 筆記",categorySlug:"ctf-notes",readTime:"18 min read",excerpt:"picoCTF 解題筆記，包含 Web Exploitation 等題型的觀察與解題流程。",coverImage:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",contentMarkdown:n(s)},{slug:"forensics-class-0324",title:"Forensics 社課 3/24",date:"2025-03-24",category:"Forensics",categorySlug:"forensics",readTime:"8 min read",excerpt:"Forensics 社課教材與筆記，整理鑑識題型與實作觀察。",coverImage:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",contentMarkdown:n(a)},{slug:"2025-self-review-hsinchu-37k",title:"2025 年回顧：在新竹 37K 的日子裡，我為自己打了一場仗",date:"2025-12-31",category:"回顧自我",categorySlug:"self-review",readTime:"7 min read",excerpt:"從剛退伍踏進新竹，到一個人扛起公司資安與 IT 日常，這一年不寬裕、不輕鬆，卻也讓我真正長出韌性、技術與責任感。",coverImage:"/S__67723282.jpg",contentMarkdown:n(dn)},{slug:"zeabur-postgresql-blog-foundation",title:"Zeabur PostgreSQL Blog Foundation",date:"2026-04-10",category:"Database Lab",categorySlug:"database-lab",readTime:"5 min read",excerpt:"把部落格內容獨立成一個資料庫 schema，讓文章、分類、標籤、留言與發佈狀態可以和作品集靜態資料分開管理。",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",contentMarkdown:`## 目標

這個分頁用來承接長文、學習筆記、證照心得與資料庫紀錄，不再混在原本的文章連結清單裡。

內容結構參考傳統部落格文章頁：

- 文章標題與發佈日期
- 分類、閱讀時間與摘要
- Markdown 主文
- 近期文章與分類側邊欄
- 文章底部留言區

## 資料切分方式

前端先用獨立的 \`blogPosts\` data module 呈現，後續要接 API 時可以直接對應 PostgreSQL 的 \`blog\` schema。

資料庫端建議使用獨立 schema，表格包含：

| table | purpose |
| --- | --- |
| \`blog.categories\` | 文章分類 |
| \`blog.posts\` | Markdown 文章本文 |
| \`blog.tags\` | 標籤 |
| \`blog.post_tags\` | 文章與標籤關聯 |
| \`blog.comments\` | 留言 |

## 後台寫作流程

後台文章內容使用 Markdown 儲存在 \`content_markdown\` 欄位。前端文章頁只負責渲染 Markdown，不直接連 PostgreSQL。

\`\`\`markdown
## 範例標題

- 支援清單
- 支援表格
- 支援程式碼區塊
\`\`\`

## 安全注意

PostgreSQL 密碼不應該放進 React 前端或 Git repository，部署時只放在 Zeabur 的環境變數。

如果資料庫連線資訊曾經貼到對話或文件，正式上線前建議旋轉密碼，並確認應用程式只使用最小權限帳號。`},{slug:"security-writing-index",title:"Security Writing Index",date:"2026-04-08",category:"Security Notes",categorySlug:"security-notes",readTime:"3 min read",excerpt:"把資安筆記整理成可搜尋、可分類、可延伸的內容索引，降低日後重複整理成本。",coverImage:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",contentMarkdown:`## 索引策略

以主題分類文章，例如證照心得、CTF 解題、工具使用、弱點管理與自動化流程。

每篇文章保留摘要、標籤與發佈狀態，方便後續做列表、搜尋與精選文章區塊。

## 建議分類

- 證照心得
- CTF 筆記
- 弱點管理
- 工具使用
- 自動化流程`},{slug:"portfolio-content-architecture",title:"Portfolio Content Architecture",date:"2026-04-01",category:"Build Log",categorySlug:"build-log",readTime:"4 min read",excerpt:"記錄作品集從靜態資料走向可維護內容系統的規劃方式。",coverImage:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",contentMarkdown:`## 內容邊界

首頁維持資安履歷定位，專案與證照維持原本展示用途，部落格則獨立承接長文。

資料來源拆開之後，未來可以逐步把 \`blogPosts\` 換成 API response，而不用重寫整個 UI。

## 下一步

- 建立後端 API
- 將 Markdown 寫入 PostgreSQL
- 將留言送進 \`blog.comments\`
- 文章改由本地檔案或資料庫維護，不開放線上寫文章後台`}],fn=Sn.filter(e=>!["database-lab","security-notes","build-log"].includes(e.categorySlug)),Dn={"zeabur-postgresql-blog-foundation":[{id:1,author:"Eric",date:"2026-04-10",body:"這裡先保留留言樣式，接 API 後可以直接改成從 blog.comments 讀取。"}]};export{En as F,Pn as a,fn as b,Dn as c};
