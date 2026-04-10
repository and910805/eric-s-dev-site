---
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


```bash
$sudo apt－get install steghide #安裝
$steghide --help 查詢指令
$steghide embed -cf picture.jpg -ef secret.t
$steghide extract -sf picture.jpg
$steghide info picture.jpg
```
 <font color='deep blue'>幫大家補充一點點linux最最最基本指令</font>
 ```bash
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
 ```
 
 
#### binwalk
---

 <font color='deep blue'>跟steghide區別</font>
![](https://i.imgur.com/ityc41v.png)
[安裝方式&&教學](https://cloud.tencent.com/developer/article/1515285)
```bash
$binwalk --help
$binwalk file#可以分析
$binwalk -e file#文件提取
```
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
```bash
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
```
也可以與其他指令混用 |
```bash
$strings file | grep picoCTF{.*}
```
[picoCTF練習簡單題目](https://play.picoctf.org/practice/challenge/279?category=4&page=1)
[picoCTF練習簡單題目](https://play.picoctf.org/practice/challenge/19?category=4&page=2)
#### 最後
---
上面題目很多，大家可以加以練習，我覺得成長最快的方式是要記錄，做個筆記之類的，[這是我的筆記](https://hackmd.io/@LKanFpXQTUSJayug7EHeiA/rJqLG8Qdj)，但其實大部分題目都找的到答案。


