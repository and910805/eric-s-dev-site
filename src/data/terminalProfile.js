export const identity = {
  user: 'eric',
  host: 'security-terminal',
  role: 'Cybersecurity Practitioner / Automation Builder',
  location: 'Taiwan',
  summary:
    '喜歡把問題拆開、驗證、記錄，再做成可以重複使用的工具。網站目前收斂成資安筆記、專案紀錄與學習軌跡。',
  groups: ['security', 'backend', 'linux', 'cloud', 'notes'],
}

export const whoamiLines = [
  ['user', identity.user],
  ['role', identity.role],
  ['groups', identity.groups.join(', ')],
  ['focus', 'web security, vulnerability management, automation, Linux'],
  ['status', 'building a personal security knowledge base'],
]

export const historyItems = [
  {
    year: '2024',
    command: 'init ~/projects',
    output: '開始整理 React、Flask、Python 自動化與小型工具專案。',
  },
  {
    year: '2025',
    command: 'write --series ithome-ironman',
    output: '完成 30 篇 iThome 鐵人賽文章，整理成網站中的 2025 iThome 鐵人賽分類。',
  },
  {
    year: '2026',
    command: 'certctl verify CEH',
    output: '取得 CEH / CEH Practical / CEH Master，持續把攻防知識轉成可查詢的筆記。',
  },
  {
    year: 'now',
    command: 'grep -ri security ~/blog',
    output: '把部落格改成 Linux tree 與 grep 搜尋風格，讓筆記更像自己的知識庫。',
  },
]

export const manSections = [
  {
    name: 'NAME',
    body: 'Eric - developer with a security mindset',
  },
  {
    name: 'SYNOPSIS',
    body: 'backend, Linux, cybersecurity, documentation, automation',
  },
  {
    name: 'DESCRIPTION',
    body:
      '用工程方式學資安：先理解風險，再做實驗、寫筆記、補防禦。偏好能落地的工具與清楚的紀錄，而不是只留下漂亮但不能維護的展示。',
  },
  {
    name: 'OPTIONS',
    body: '--notes 打開資安筆記  --projects 查看作品  --contact 建立連線',
  },
]
