import cehV13Notes from '../../doc/CEH v13 筆記（持續更新中）.md?raw'
import cehV13Review from '../../doc/CEH V13 證照心得與準備方式分享.md?raw'
import cehpReview from '../../doc/CEHP心得.md?raw'
import forensicsClass from '../../doc/Forensics社課3_24.md?raw'
import picoCtfNotes from '../../doc/picoCTF.md?raw'
import ithomeDay01 from '../../doc/2025-ithome-ironman/day-01.md?raw'
import ithomeDay02 from '../../doc/2025-ithome-ironman/day-02.md?raw'
import ithomeDay03 from '../../doc/2025-ithome-ironman/day-03.md?raw'
import ithomeDay04 from '../../doc/2025-ithome-ironman/day-04.md?raw'
import ithomeDay05 from '../../doc/2025-ithome-ironman/day-05.md?raw'
import ithomeDay06 from '../../doc/2025-ithome-ironman/day-06.md?raw'
import ithomeDay07 from '../../doc/2025-ithome-ironman/day-07.md?raw'
import ithomeDay08 from '../../doc/2025-ithome-ironman/day-08.md?raw'
import ithomeDay09 from '../../doc/2025-ithome-ironman/day-09.md?raw'
import ithomeDay10 from '../../doc/2025-ithome-ironman/day-10.md?raw'
import ithomeDay11 from '../../doc/2025-ithome-ironman/day-11.md?raw'
import ithomeDay12 from '../../doc/2025-ithome-ironman/day-12.md?raw'
import ithomeDay13 from '../../doc/2025-ithome-ironman/day-13.md?raw'
import ithomeDay14 from '../../doc/2025-ithome-ironman/day-14.md?raw'
import ithomeDay15 from '../../doc/2025-ithome-ironman/day-15.md?raw'
import ithomeDay16 from '../../doc/2025-ithome-ironman/day-16.md?raw'
import ithomeDay17 from '../../doc/2025-ithome-ironman/day-17.md?raw'
import ithomeDay18 from '../../doc/2025-ithome-ironman/day-18.md?raw'
import ithomeDay19 from '../../doc/2025-ithome-ironman/day-19.md?raw'
import ithomeDay20 from '../../doc/2025-ithome-ironman/day-20.md?raw'
import ithomeDay21 from '../../doc/2025-ithome-ironman/day-21.md?raw'
import ithomeDay22 from '../../doc/2025-ithome-ironman/day-22.md?raw'
import ithomeDay23 from '../../doc/2025-ithome-ironman/day-23.md?raw'
import ithomeDay24 from '../../doc/2025-ithome-ironman/day-24.md?raw'
import ithomeDay25 from '../../doc/2025-ithome-ironman/day-25.md?raw'
import ithomeDay26 from '../../doc/2025-ithome-ironman/day-26.md?raw'
import ithomeDay27 from '../../doc/2025-ithome-ironman/day-27.md?raw'
import ithomeDay28 from '../../doc/2025-ithome-ironman/day-28.md?raw'
import ithomeDay29 from '../../doc/2025-ithome-ironman/day-29.md?raw'
import ithomeDay30 from '../../doc/2025-ithome-ironman/day-30.md?raw'
import selfReview2025 from '../../doc/2025-self-review-hsinchu.md?raw'

function stripFrontmatter(markdown) {
  return markdown.replace(/^---[\s\S]*?---\s*/, '').trim()
}

export const blogCategories = [
  { slug: 'certification-review', name: '證照心得', count: 2 },
  { slug: 'certification-notes', name: '證照筆記', count: 1 },
  { slug: 'ctf-notes', name: 'CTF 筆記', count: 1 },
  { slug: 'forensics', name: 'Forensics', count: 1 },
  { slug: 'self-review', name: '回顧自我', count: 1 },
  { slug: 'ithome-2025-ironman', name: '2025 iThome 鐵人賽', count: 30 },
]

const rawBlogPosts = [
  {
    slug: "ithome-2025-day-01",
    title: "Day 1- 法規推著我上場，學習讓我留下",
    date: "2025-08-18",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "資安是一場長期戰爭，我想把戰場紀錄下來。 還記得面試那天，主管提到公司剛上櫃，為了符合法規要求，需要一名專職的資安人員。在那之前，所有 IT 事務幾乎都由一位資...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10374837",
    contentMarkdown: ithomeDay01,
  },
  {
    slug: "ithome-2025-day-02",
    title: "Day 2 - 公開情資很重要",
    date: "2025-08-19",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "4 min read",
    excerpt: "是不是以為我要介紹 OWASP？今天不打算列一堆「情資平台清單」，而是針對公務繁忙、只能被動收信的資安工程師：只要訂閱幾個可靠來源，人家幫你整理好寄到信箱，...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10374947",
    contentMarkdown: ithomeDay02,
  },
  {
    slug: "ithome-2025-day-03",
    title: "Day 3 - 鐵裝還是布甲？資安裝備選擇題",
    date: "2025-08-20",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "4 min read",
    excerpt: "在一家公司裡，導入資安工具與服務的最大推力，往往來自 法規要求（ISO 27001、GDPR、金融業規範）與 客戶稽核，再加上長官對安全能力的期待。這些要求就...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10374848",
    contentMarkdown: ithomeDay03,
  },
  {
    slug: "ithome-2025-day-04",
    title: "Day 4 - 公司的第一道防線",
    date: "2025-08-21",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "畢業後正式踏入資安職涯：Firewall，新手的第一道防線 畢業後正式踏入資安職涯，迎來的第一份正職工作。剛坐下還沒熟悉環境，主管就直接開口： 「你會看 Fi...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10375208",
    contentMarkdown: ithomeDay04,
  },
  {
    slug: "ithome-2025-day-05",
    title: "Day 5 - 文件地獄：葵花寶典?",
    date: "2025-08-22",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "4 min read",
    excerpt: "在資安工程師的世界裡，敵人不只有勒索病毒、APT、釣魚信……還有一種藏在辦公室抽屜、共用槽的恐怖怪物： 「ISMS 文件」。 如果把防火牆當作是鐵甲、EDR 當...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10375130",
    contentMarkdown: ithomeDay05,
  },
  {
    slug: "ithome-2025-day-06",
    title: "Day 6 - EDR：手上那把神器",
    date: "2025-08-23",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "4 min read",
    excerpt: "我每次 Python 寫的程式都被 EDR 擋住 :D還有一些機台軟體，每次安裝都會被隔離，有時候還誤以為「安裝失敗」，結果白白浪費好幾個小時在 debug。這...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10375289",
    contentMarkdown: ithomeDay06,
  },
  {
    slug: "ithome-2025-day-07",
    title: "Day 7 - IT 部門人少，資安工程師的多重宇宙",
    date: "2025-08-24",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "本來以為進公司，掛上「資安工程師」這個名號後，我的世界就是防火牆、EDR、弱點掃描，跟駭客在暗網對決。結果現實卻是：IT 部門人少，很多雜事也會落到我身上。...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10375678",
    contentMarkdown: ithomeDay07,
  },
  {
    slug: "ithome-2025-day-08",
    title: "Day 8 - 漏洞掃描大冒險：外包勇者 vs 自建工匠",
    date: "2025-08-25",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "4 min read",
    excerpt: "想像一下：你的船在風平浪靜時就開始漏水——你會怎麼辦？在資安的世界裡，公司就像一艘航行中的大船，弱點就是那些你看不見的裂縫。不先檢查，等到海水灌進來，可能就來不...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10375763",
    contentMarkdown: ithomeDay08,
  },
  {
    slug: "ithome-2025-day-09",
    title: "Day 9 - 什麼M365除了Word，也有資安產品?",
    date: "2025-08-26",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "6 min read",
    excerpt: "原本以為微軟不就 Word、Excel 而已？公司導入 M365 才發現：微軟的 Security 其實很全。先聲明我沒買它股票（笑），但也必須說：全＝好複雜...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10375925",
    contentMarkdown: ithomeDay09,
  },
  {
    slug: "ithome-2025-day-10",
    title: "Day 10 - 微軟有Zero Trust架構嗎?",
    date: "2025-08-27",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "4 min read",
    excerpt: "前言 講到 ZT（Zero Trust），就會想到大學時期的大專生計劃，我還拿這個當主題，但後來沒過 昨天說到 M365 不只是辦公室套件，今天要聊聊現在最...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10376085",
    contentMarkdown: ithomeDay10,
  },
  {
    slug: "ithome-2025-day-11",
    title: "Day 11 - 資料保護：別讓公司機密「長翅膀」飛出去",
    date: "2025-08-28",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "5 min read",
    excerpt: "前言 昨天講了 Zero Trust 的六大支柱，今天要挑一個大家最有感的：資料（Data）。因為對公司來說，伺服器壞了可以重建，但 資料外洩 可能直接 GG。...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10376246",
    contentMarkdown: ithomeDay11,
  },
  {
    slug: "ithome-2025-day-12",
    title: "Day 12 - 即使資料保護再嚴密，也擋不住一台失守的裝置",
    date: "2025-08-29",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "5 min read",
    excerpt: "昨天我們討論了資料（Data），這是企業最擔心外洩的核心資產。要有效守護資料，下一步必須確認：員工是用什麼裝置來存取這些資料。 想像一下：一台多年未更新的 Wi...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10376390",
    contentMarkdown: ithomeDay12,
  },
  {
    slug: "ithome-2025-day-13",
    title: "Day 13 - 打帳密已經過時了?大門不只要鎖，還要驗明正身",
    date: "2025-08-30",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "還記得剛進公司的第一天，IT 交給我一組帳號密碼，叮嚀：「千萬不要外流」。但現在光靠帳號密碼，已經很難抵擋駭客了。密碼外洩、釣魚信、暴力破解，都讓帳密組合變成資...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10376102",
    contentMarkdown: ithomeDay13,
  },
  {
    slug: "ithome-2025-day-14",
    title: "Day 14 - 資安工程師的週末小結",
    date: "2025-08-31",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "又是週末了，請容許我偷懶一下，寫一篇心得文吧。這篇不談技術細節，主要是想回顧一下開賽到現在我寫了些什麼。 老實說，這 14 天的文章有點隨性，每天都是當天臨時想...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10376400",
    contentMarkdown: ithomeDay14,
  },
  {
    slug: "ithome-2025-day-15",
    title: "Day 15 - 切碎內網，才能防止駭客橫向移動",
    date: "2025-09-01",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "前面談過 Zero Trust 的身分、裝置、資料，今天來到第四根柱子：網路（Network）。老實說，這一塊其實跟傳統 IT 網路很像，像 CCNA 的考題一...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10376885",
    contentMarkdown: ithomeDay15,
  },
  {
    slug: "ithome-2025-day-16",
    title: "Day 16 - 不出手也能「看光光」：被動盤點你公司的對外曝險",
    date: "2025-09-02",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "4 min read",
    excerpt: "很多人以為一定要掃 IP、跑掃描器才看得到風險。其實 不碰對方資產，只靠公開資訊與指標，也能把自家對外面貌、第三方風險、外洩跡象抓個七八成。完全被動、合法合規...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10377098",
    contentMarkdown: ithomeDay16,
  },
  {
    slug: "ithome-2025-day-17",
    title: "Day 17 - 為什麼一定要管「特權帳號」？",
    date: "2025-09-03",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "越來越想不到寫啥了 XDD每天在想要寫什麼，甚至都比寫的時間久 大家常聽到「帳號權限要設定好」，但「特權帳號」其實是另一回事：它能新增使用者、修改設定、存取...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10377265",
    contentMarkdown: ithomeDay17,
  },
  {
    slug: "ithome-2025-day-18",
    title: "Day 18 - 如果明天 DB 爆掉，你撐得住嗎？",
    date: "2025-09-04",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "在資訊安全裡，很多人把心力放在「防止駭客入侵」，卻忘了一件更現實的事： 系統總有一天會壞，資料總有一天會丟。 不論是硬碟故障、人為誤刪、勒索病毒，還是天災火...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10377454",
    contentMarkdown: ithomeDay18,
  },
  {
    slug: "ithome-2025-day-19",
    title: "Day 19 - 如何打造一個可靠的備份策略？",
    date: "2025-09-05",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "昨天聊到 RTO（恢復時間目標）與 RPO（恢復點目標），今天來談談如何透過備份保護資料，確保在最壞情況下仍能快速復原。 最經典的 3-2-1 備份原則...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10377679",
    contentMarkdown: ithomeDay19,
  },
  {
    slug: "ithome-2025-day-20",
    title: "Day 20 — 為什麼要做災害復原？",
    date: "2025-09-06",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "昨天聊到 3-2-1 備份原則，備份能確保資料還在，但光有備份，並不代表系統能夠快速恢復上線。每年不管是 ISO 還是法規，總有個大魔王：災害復原（Disas...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10377737",
    contentMarkdown: ithomeDay20,
  },
  {
    slug: "ithome-2025-day-21",
    title: "Day 21 - 資安專責人員",
    date: "2025-09-07",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "倒數第二個假日啦～前幾天聊到的 備份、零信任、帳號管理、災害復原、各種監控，其實通通都是資安專責人員的日常。 以下引用數發部發佈的資料： 何謂資安專責人員...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10378065",
    contentMarkdown: ithomeDay21,
  },
  {
    slug: "ithome-2025-day-22",
    title: "Day 22 - 公司電腦上，還有隱私嗎？",
    date: "2025-09-08",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "分享一個朋友的故事。 剛進公司不久，他電腦突然變超卡，還沒來得及寫信報修，電話就先響了： 「嗨～你電腦是不是怪怪的？我們這邊看到你 CPU 爆了。」 當下他...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10378223",
    contentMarkdown: ithomeDay22,
  },
  {
    slug: "ithome-2025-day-23",
    title: "Day 23 - Patch Management 是一項既必要又棘手的任務。",
    date: "2025-09-09",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "它就像是給汽車換機油：如果不做，引擎遲早會出大問題，系統可能因為安全漏洞而「爆炸」；但如果做得太急躁、貿然全域部署，又可能毀掉整個環境，導致服務中斷或相容性問題...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10378517",
    contentMarkdown: ithomeDay23,
  },
  {
    slug: "ithome-2025-day-24",
    title: "Day 24 - 風險評鑑：年度BOSS戰開打",
    date: "2025-09-10",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "風險評鑑這位每日必戰的 BOSS每年稽核必看..也是ISO/IEC 27001 的要求 當然他也是有好處，能幫組織及時發現潛在危機，並想出好方法應對。簡單來...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10378757",
    contentMarkdown: ithomeDay24,
  },
  {
    slug: "ithome-2025-day-25",
    title: "Day 25 - 一封垃圾郵件，可能就是資安危機的開端？",
    date: "2025-09-11",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "垃圾郵件：資安戰場的第一道城門 剛進公司時，我最怕的不是伺服器當機，而是員工慌張打電話： 「我好像點錯了一封信…」 一封垃圾郵件，可能讓公司資料被鎖、帳號被盜...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10378959",
    contentMarkdown: ithomeDay25,
  },
  {
    slug: "ithome-2025-day-26",
    title: "Day 26 - 從T65K2到T1566：MITRE ATT&CK入門指南",
    date: "2025-09-12",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "還記得我最早接觸資安的時候嗎？那時常常看到一堆神秘的代號：T1566、T1059、T1003……完全摸不著頭緒，心想這些數字到底在搞什麼鬼？我只聽過T65K2（...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10379225",
    contentMarkdown: ithomeDay26,
  },
  {
    slug: "ithome-2025-day-27",
    title: "Day 27 - 為什麼藍隊要學MITRE ATT&CK？",
    date: "2025-09-13",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "接續昨天的內容 對藍隊（防禦方）來說，MITRE ATT&amp;CK 不是什麼「加分題」的選修，而是必修的攻防劇本。它不像教科書那樣生硬，而是像一部懸疑大...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10379244",
    contentMarkdown: ithomeDay27,
  },
  {
    slug: "ithome-2025-day-28",
    title: "Day 28 - 沒有監控，你什麼都不知道",
    date: "2025-09-14",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "又是假日了，來個比較輕鬆的主題 剛入職的時候，公司還沒分得這麼細，IT 的監控、資安的巡檢，全都一把抓。每天一到公司，除了要看 AD、DNS、核心系統有沒有...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10378945",
    contentMarkdown: ithomeDay28,
  },
  {
    slug: "ithome-2025-day-29",
    title: "Day 29 - 轉職資安人必備技能",
    date: "2025-09-15",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "3 min read",
    excerpt: "「如果想轉職資安，要從哪裡開始？」 說真的，資安的範圍大到你會覺得無從下手。一堆名詞：Nmap、SIEM、EDR、SOC、APT…到底要先學哪一個？ 其實最簡單...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10379737",
    contentMarkdown: ithomeDay29,
  },
  {
    slug: "ithome-2025-day-30",
    title: "Day 30 - 尾聲：資安人的三十天",
    date: "2025-09-16",
    category: '2025 iThome 鐵人賽',
    categorySlug: 'ithome-2025-ironman',
    readTime: "4 min read",
    excerpt: "回顧 不知不覺，這個系列也走到尾聲了。第一次參加鐵人賽，真的正如它的名字一樣──很難。尤其我還一次報了兩個系列，結果 DevSecOps 系列在中途就沒能繼續更...",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    sourceUrl: "https://ithelp.ithome.com.tw/articles/10379242",
    contentMarkdown: ithomeDay30,
  },
  {
    slug: 'cehp-review',
    title: 'CEHP 心得',
    date: '2026-03-20',
    category: '證照心得',
    categorySlug: 'certification-review',
    readTime: '12 min read',
    excerpt: 'CEH Practical 考後心得，整理考試規則、環境、解題節奏與實作準備方式。',
    coverImage:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: stripFrontmatter(cehpReview),
  },
  {
    slug: 'ceh-v13-review',
    title: 'CEH V13 證照心得與準備方式分享',
    date: '2025-07-20',
    category: '證照心得',
    categorySlug: 'certification-review',
    readTime: '10 min read',
    excerpt: 'CEH V13 考試心得與準備流程，包含考前提醒、考試經驗與複習方向。',
    coverImage:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: stripFrontmatter(cehV13Review),
  },
  {
    slug: 'ceh-v13-notes',
    title: 'CEH v13 筆記（持續更新中）',
    date: '2025-07-01',
    category: '證照筆記',
    categorySlug: 'certification-notes',
    readTime: '20 min read',
    excerpt: 'CEH v13 重點筆記，整理常見觀念、攻防主題與考試複習內容。',
    coverImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: stripFrontmatter(cehV13Notes),
  },
  {
    slug: 'picoctf-notes',
    title: 'picoCTF 筆記',
    date: '2025-06-20',
    category: 'CTF 筆記',
    categorySlug: 'ctf-notes',
    readTime: '18 min read',
    excerpt: 'picoCTF 解題筆記，包含 Web Exploitation 等題型的觀察與解題流程。',
    coverImage:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: stripFrontmatter(picoCtfNotes),
  },
  {
    slug: 'forensics-class-0324',
    title: 'Forensics 社課 3/24',
    date: '2025-03-24',
    category: 'Forensics',
    categorySlug: 'forensics',
    readTime: '8 min read',
    excerpt: 'Forensics 社課教材與筆記，整理鑑識題型與實作觀察。',
    coverImage:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: stripFrontmatter(forensicsClass),
  },
  {
    slug: '2025-self-review-hsinchu-37k',
    title: '2025 年回顧：在新竹 37K 的日子裡，我為自己打了一場仗',
    date: '2025-12-31',
    category: '回顧自我',
    categorySlug: 'self-review',
    readTime: '7 min read',
    excerpt:
      '從剛退伍踏進新竹，到一個人扛起公司資安與 IT 日常，這一年不寬裕、不輕鬆，卻也讓我真正長出韌性、技術與責任感。',
    coverImage:
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80',
    contentMarkdown: stripFrontmatter(selfReview2025),
  },
  {
    slug: 'zeabur-postgresql-blog-foundation',
    title: 'Zeabur PostgreSQL Blog Foundation',
    date: '2026-04-10',
    category: 'Database Lab',
    categorySlug: 'database-lab',
    readTime: '5 min read',
    excerpt:
      '把部落格內容獨立成一個資料庫 schema，讓文章、分類、標籤、留言與發佈狀態可以和作品集靜態資料分開管理。',
    coverImage:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: `## 目標

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

如果資料庫連線資訊曾經貼到對話或文件，正式上線前建議旋轉密碼，並確認應用程式只使用最小權限帳號。`,
  },
  {
    slug: 'security-writing-index',
    title: 'Security Writing Index',
    date: '2026-04-08',
    category: 'Security Notes',
    categorySlug: 'security-notes',
    readTime: '3 min read',
    excerpt: '把資安筆記整理成可搜尋、可分類、可延伸的內容索引，降低日後重複整理成本。',
    coverImage:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: `## 索引策略

以主題分類文章，例如證照心得、CTF 解題、工具使用、弱點管理與自動化流程。

每篇文章保留摘要、標籤與發佈狀態，方便後續做列表、搜尋與精選文章區塊。

## 建議分類

- 證照心得
- CTF 筆記
- 弱點管理
- 工具使用
- 自動化流程`,
  },
  {
    slug: 'portfolio-content-architecture',
    title: 'Portfolio Content Architecture',
    date: '2026-04-01',
    category: 'Build Log',
    categorySlug: 'build-log',
    readTime: '4 min read',
    excerpt: '記錄作品集從靜態資料走向可維護內容系統的規劃方式。',
    coverImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80',
    contentMarkdown: `## 內容邊界

首頁維持資安履歷定位，專案與證照維持原本展示用途，部落格則獨立承接長文。

資料來源拆開之後，未來可以逐步把 \`blogPosts\` 換成 API response，而不用重寫整個 UI。

## 下一步

- 建立後端 API
- 將 Markdown 寫入 PostgreSQL
- 將留言送進 \`blog.comments\`
- 文章改由本地檔案或資料庫維護，不開放線上寫文章後台`,
  },
]

export const blogPosts = rawBlogPosts.filter(
  (post) => !['database-lab', 'security-notes', 'build-log'].includes(post.categorySlug)
)

export const blogComments = {
  'zeabur-postgresql-blog-foundation': [
    {
      id: 1,
      author: 'Eric',
      date: '2026-04-10',
      body: '這裡先保留留言樣式，接 API 後可以直接改成從 blog.comments 讀取。',
    },
  ],
}

