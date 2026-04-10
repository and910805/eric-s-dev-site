---
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
| `-sn` | Ping Scan（不掃 port，只確認活著） | **s = skip port scan** |
| `-PS` | TCP SYN Ping | **S = SYN** |
| `-PA` | TCP ACK Ping | **A = ACK** |
| `-PU` | UDP Ping | **U = UDP** |
| `-PE` | ICMP Echo Request | **E = Echo（正常 ICMP Ping）** |
| `-PP` | ICMP Timestamp Request | **P = Ping Timestamp** |
| `-PM` | ICMP Address Mask Request | **M = Mask** |
| `-PO` | IP Protocol Ping | **O = prOtocol** |

✅ **背法：** `P + 英文字母` 就是「各種 Ping 類型」

---

#### ② Port 掃描類型（掃描手法）

| 指令 | 代表意思 | 怎麼背？ |
|:---|:---|:---|
| `-sS` | SYN Scan（半開掃描，Stealth Scan）| **sS = stealth SYN** |
| `-sT` | TCP Connect 掃描（正常 TCP 連線） | **sT = standard TCP** |
| `-sU` | UDP Scan | **sU = UDP** |
| `-sA` | ACK Scan | **sA = ACK** |
| `-sN` | Null Scan（TCP 標誌全關） | **sN = Null (nothing)** |
| `-sX` | Xmas Scan（TCP 特定標誌開啟） | **sX = Xmas tree lights** |
| `-sF` | FIN Scan（只開 FIN flag） | **sF = FIN** |
| `-sO` | IP Protocol 掃描 | **sO = prOtocol** |

✅ **背法：** `-s` 開頭的就是「掃 port 手法」，`s = scan`

---

### ③ 版本偵測 / 作業系統偵測 / Service 偵測

| 指令 | 代表意思 | 怎麼背？ |
|:---|:---|:---|
| `-sV` | 服務版本偵測（Version detection） | **sV = Service Version** |
| `-O` | 作業系統偵測（OS detection） | **O = OS** |
| `-A` | 強化掃描（包含 OS、版本、腳本、traceroute）| **A = All-in-One** |

✅ **背法：**
- `-sV` → 查服務版本  
- `-O` → 查作業系統  
- `-A` → 一次來全部

---

#### ④ 特別模式 / 其他小技巧

| 指令 | 代表意思 | 怎麼背？ |
|:---|:---|:---|
| `-F` | Fast mode（快速掃描，只掃常見 ports） | **F = Fast** |
| `-T0` ~ `-T5` | Timing Template（調整速度） | **T = Timing** |
| `-p` | 指定 Port | **p = port** |
| `--top-ports 100` | 掃前 100 個最熱門的 ports | **top-ports = 最夯 ports** |
| `-v` | Verbose 模式（詳細輸出） | **v = verbose** |
| `-vv` | 更詳細模式 | **vv = very verbose** |
| `-d` | Debug 模式 | **d = debug** |

---

### 🔥 整體背誦小技巧

| 流程 | 記法 |
|:---|:---|
| 確認活著？ | `-sn + P系列（PS, PA, PU, PE...）` |
| 掃 port？ | `-sS`, `-sT`, `-sU`, `-sA`... |
| 查服務版本？ | `-sV` |
| 查 OS？ | `-O` |
| 全部來？ | `-A` |
| 要快？ | `-F`, `-T4` |

---

### 📦 常見實戰組合（直接拿去抄用）

#### 找存活主機（不掃 port）

```bash
nmap -sn -PS22,80,443 192.168.1.0/24

# 1. TCP Connect 掃描（完整連線）
- 使用三次握手完成連線。
- 不需 root 權限。
- 容易被 IDS 偵測。
```bash
nmap -sT target.com
```


| 作業系統     | TTL  | TCP Window Size |
|--------------|------|-----------------|
| Linux        | 64   | 5840            |
| Windows XP   | 128  | 65535           |
| Windows 2008 | 128  | 8192            |
| FreeBSD      | 64   | 5840            |



### 封包規避技巧（IDS/IPS）

#### - 封包分段（Fragmentation）
```bash
nmap -f target.com
```

#### - 改變封包長度
```bash
nmap --data-length 50 target.com
```

#### - 偽裝來源埠（避開防火牆）
```bash
nmap --source-port 53 target.com
```

#### - 偽造來源 IP（Decoy）
```bash
nmap -D 192.168.1.5,192.168.1.6 target.com
```

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
- 常見指令：`VRFY`、`EXPN`、`RCPT TO`

### 🛡 預設密碼風險
- 有些系統未更改預設帳密，攻擊者可利用公知帳號登入系統

---

### 🔒 Active Directory（AD）& LDAP 枚舉
- 中央控管使用者、電腦與群組
- 可透過暴力破解或 LDAP 查詢列出資訊
- **常用 Port**：TCP/UDP `389`（LDAP）、`636`（LDAPS）

#### 可枚舉資訊：
- 使用者名稱、位址
- 憑證與權限資訊
- 群組結構與角色

#### 工具與指令：
```bash
ldapsearch -x -h <IP> -b "DC=domain,DC=com"
nmap -p389 --script ldap* <IP>
enum4linux -u user -p pass <IP>
```

---

### 🖥 NetBIOS / SMB（Windows 弱點常見）
- **Port**：137/UDP、138/UDP、139/TCP、445/TCP
- NetBIOS 名稱最長 15 字元，第 16 字元為服務尾碼

#### 常用工具：
```bash
nbtstat -A <IP>
nmap -sU -p137 <IP>
enum4linux -U -P -S <IP>
smbclient //IP/share -U user
smbmap -H <IP>
rpcclient -U "" <IP>
```

---

### 🌐 DNS 枚舉
[DNS Hacking 之 Subdomain Enumeration 的技巧與自動化挖掘](https://tech-blog.cymetrics.io/posts/crystal/dns-hacking-3/)
- **Port**：53/UDP
- 技巧：Zone Transfer、Snooping、DNSSEC 遍歷

#### 工具與指令：
```bash
dig axfr @<ns-ip> <domain>
ldns-walk <domain>
amass enum -d <domain>
```

---

### 📡 SNMP（簡易網管協定）
- **Port**：161/UDP、162/UDP (Trap)
- 協定版本：v1 / v2（無加密）/ v3（支援加密與驗證）
- 預設 Community String：`public`、`private`

#### 組成要素：
1. **Manager**：顯示與管理收集的資訊
2. **Agent**：裝置上執行、提供資料
3. **MIB（資訊庫）**：結構化儲存裝置資訊（Scaler / Tabular）

#### 工具與指令：
```bash
snmpwalk -v2c -c public <IP>
snmp-check <IP>
onesixtyone -c dict.txt <IP>
snmpbulkwalk -v2c -c public <IP>
```

---

### 📬 SMTP 枚舉
- **Port**：25/TCP
- 可使用 `VRFY`、`EXPN`、`RCPT TO` 測試帳號存在性

#### 工具：
```bash
nmap --script smtp-enum-users -p25 <IP>
smtp-user-enum -M VRFY -U users.txt -t <IP>
swaks --to user@domain.com --server <IP>
```

---

### ⏰ NTP（網路時間協定）
- **Port**：123/UDP
- 常見指令：
```bash
ntpq -p <IP>
ntpdate -q <IP>
```

---

### 📁 NFS / RPC
- **Port**：2049（NFS）、135（RPC）
- 列舉與掛載共享目錄

#### 工具：
```bash
rpcinfo -p <IP>
showmount -e <IP>
mount -t nfs <IP>:<share> /mnt
nmap --script nfs-* <IP>
```

---

### 🔐 IPsec 枚舉
- 工具：
```bash
ike-scan <IP>
psk-crack -f wordlist.txt <capture.pcap>
```

---

### ☎️ VoIP（SIP）
- 工具：
```bash
svmap -p5060 <IP>
```

---

### 📌 案例：尋找 Microsoft DC-FQDN
```bash
nmap -p389 <IP-range>
nmap -p445,389,3268 -A <IP>

nslookup ip(Dc server)
dig -x ip
```

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
| **Nmap** vuln script | `nmap --script vuln <IP>` 自動執行服務弱點偵測腳本 |

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

* **Windows:** C:\windows\system32\config\SAM
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

- 使用 `cewl` 工具爬網站關鍵字製作字典檔
- 搭配 `ncrack` 工具對登入介面爆破

---

### 🧠 PTH（Pass The Hash）攻擊

> PTH 攻擊是利用已知的 NTLM 雜湊來模擬合法使用者登入，而不需知道明文密碼。

- 雜湊雖不可逆，但 Windows 認證系統允許使用 hash 來完成身份驗證
- 攻擊工具：`Mimikatz` + `psexec`, `Impacket` 模組

---

### 🔍 駭侵與橫向移動工具

- **Responder**：監聽 SMB/LLMNR 併誘導目標送出雜湊，配合 `John` 破解
- **Metasploit (msfconsole)**：
  - `exploit`, `payload`, `post` 模組
  - 支援 PTH、提權、Dump hash、自動化攻擊
  - 常用模組：
    - `post/windows/gather/hashdump`
    - `post/windows/manage/enable_rdp`
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

- 利用替換 Sticky Keys (`sethc.exe`)
- 建立假憑證或惡意 sideload
- 使用如 `bypassuac_eventvwr` 模組

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
| **ADS（Alternate Data Stream）** | 利用 NTFS 隱藏檔案內容 `dir /R` 可偵測 |
| **Steganography** | 圖片/聲音中藏入資料，工具如 `Snow`, `OpenStego`, `zsteg` |

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
  4. 利用 `msfvenom` 產生惡意載荷
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
- **dsniff 套件** 🎯：包含 `arpspoof`、`dnsspoof`、`filesnarf` 等工具。
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








