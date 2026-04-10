---
title: CEH V13 證照心得與準備方式分享

---

# CEH V13 證照心得與準備方式分享

> 考試日期：2025/07  
> 結果：通過 ✅

---
![CEH_2E345519D3F7](https://hackmd.io/_uploads/rkp74hpLeg.png)
![image](https://hackmd.io/_uploads/HJtBEnaIgx.png)

![image](https://hackmd.io/_uploads/rk433K38ee.png)
![image](https://hackmd.io/_uploads/SyVrWi28gx.png)

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

![image](https://hackmd.io/_uploads/rkLyTDsLlx.png)

- 即時答題  
  ![image](https://hackmd.io/_uploads/S1AlpvoLle.png)

- 支援中英文題目  
  ![image](https://hackmd.io/_uploads/SyLz6Dj8lx.png)

- 自動隨機產生 Google 表單作為小測驗  
  ![image](https://hackmd.io/_uploads/H1Cp2PiUll.png)

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
