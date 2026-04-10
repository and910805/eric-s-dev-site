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
