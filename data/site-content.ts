import type { SiteContent } from '@/lib/types'

export const siteContent = {
  profile: {
    name: '陈浩',
    alias: 'Chen Hao',
    title: 'VC 实习生 / AI Explorer / Coffee Chat Signal',
    base: '北京',
    headline:
      'Bonjour，我是陈浩。现在 base 北京，VC 实习 ing，也在捣鼓 vibe coding、AI 工作流和更多让学习变轻一点的小玩意。',
    summary:
      '这不是一张平铺直叙的电子简历，而是一块正在发光的个人信号板。欢迎创业者、一级市场和互联网前辈来找我聊项目、聊产品、聊 AI，或者单纯来交换最近观察到的市场脉搏。',
    avatarSrc: '/avatar-signal.svg',
    heroNote:
      '当前状态：一级市场体验中，对市场变化保持敏感；同时也在把 AI 驯化进日常生活。',
    metrics: [
      { label: 'Base', value: '北京' },
      { label: 'Now', value: 'VC 实习 ing' },
      { label: 'Mode', value: 'Coffee chat open' },
      { label: 'Summer', value: '欧洲穷游计划中' },
    ],
  },
  audiences: [
    {
      key: 'founder',
      label: '创业者',
      prompt: '如果你是一位创业者',
      summary: '欢迎来交换市场信号、产品判断和用户观察，也欢迎单纯约杯咖啡。',
    },
    {
      key: 'investor',
      label: '一级市场',
      prompt: '如果你在一级市场',
      summary: '我想认识更多前辈，聊募资语境、机构视角和市场变化里的微妙情绪。',
    },
    {
      key: 'internet',
      label: '互联网前辈',
      prompt: '如果你来自互联网',
      summary: '我会很想聊产品、增长、AI 工具链，以及那些能真正提高效率的小系统。',
    },
    {
      key: 'recruiter',
      label: '招聘方',
      prompt: '如果你是招聘方',
      summary: '你可以快速查看职业版履历，也能通过这张主页更直观地感受我的表达方式和行动倾向。',
    },
  ],
  heroTags: [
    {
      id: 'vc',
      label: 'VC 实习 ing',
      description: '几个月的一级市场体验，让我更真切感受到市场是怎样一秒一变的。',
      detail:
        '我正在学习把快速变化的信息、创始人叙事和机构判断串起来，也在训练自己更快地抓重点、做复盘、问更好的问题。',
      audiences: ['founder', 'investor', 'recruiter'],
      tone: 'amber',
      position: { x: 24, y: 18 },
      cta: { label: '看职业版履历', href: '/resume' },
    },
    {
      id: 'coffee-chat',
      label: 'Coffee Chat 欢迎',
      description: '欢迎创业者、一级市场和互联网前辈来找我聊天。',
      detail:
        '比起把链接塞进角落，我更想把“欢迎连接”这件事直接摆在首页中央。聊行业、聊项目、聊学习路径都可以。',
      audiences: ['founder', 'investor', 'internet', 'recruiter'],
      tone: 'cyan',
      position: { x: 64, y: 20 },
      cta: { label: '复制 Bonjour 入口', actionId: 'bonjour' },
    },
    {
      id: 'vibe-coding',
      label: 'Vibe Coding',
      description: '我在捣鼓一些 vibe coding 小玩意，想让代码替我解决学习里的高频难题。',
      detail:
        '对我来说，AI 不是一个“炫技区”，而是一套可以被训练、被接入工作流、被不断驯化的能力系统。',
      audiences: ['internet', 'recruiter', 'founder'],
      tone: 'lime',
      position: { x: 44, y: 42 },
      cta: { label: '看看我最近在折腾什么', href: '#builds' },
    },
    {
      id: 'tame-ai',
      label: '驯化 AI',
      description: '我最近一直在想，怎么把 AI 更自然地驯化进日常生活。',
      detail:
        '我在意的不是“会不会用工具”，而是怎样让 AI 变成一种更稳定的思考伙伴、学习代理和行动加速器。',
      audiences: ['internet', 'founder', 'recruiter'],
      tone: 'rose',
      position: { x: 76, y: 48 },
      cta: { label: '打开 Vibe Console', href: '#console' },
    },
    {
      id: 'europe',
      label: '欧洲穷游 ing',
      description: '计划暑假欧洲穷游，也把“在路上”的感觉写进了这张主页。',
      detail:
        '旅行不是离开主线，而是另一种观察世界的方式。路线、预算、偶遇和临时变化，本身就很像创业和生活。',
      audiences: ['founder', 'internet'],
      tone: 'cyan',
      position: { x: 30, y: 70 },
      cta: { label: '约个 coffee chat', actionId: 'email' },
    },
    {
      id: 'beijing',
      label: 'Base 北京',
      description: '现在常驻北京，也更容易线下见面。',
      detail:
        '如果你也在北京，欢迎来一次轻松但高密度的线下交流。无论是创业、投资、产品还是 AI，都很愿意碰撞想法。',
      audiences: ['founder', 'investor', 'internet'],
      tone: 'amber',
      position: { x: 58, y: 74 },
      cta: { label: '发我一封邮件', actionId: 'email' },
    },
  ],
  signalNodes: [
    {
      id: 'founder-signal',
      title: '给创业者的信号',
      summary: '如果你正在做新项目，我很愿意听你的产品故事，也愿意交换一级市场观察。',
      audiences: ['founder'],
      tone: 'cyan',
      bullets: [
        '能一起聊用户问题、叙事表达、市场感知和路演表达。',
        '对 AI、消费、互联网等方向保持持续好奇。',
        '欢迎把我当成一个认真听你讲的人，而不只是一个被动浏览主页的人。',
      ],
      cta: { label: '复制 Bonjour 入口', actionId: 'bonjour' },
    },
    {
      id: 'investor-signal',
      title: '给一级市场前辈的信号',
      summary: '我在一级市场体验中，希望更快地向优秀从业者学习判断、框架和节奏感。',
      audiences: ['investor'],
      tone: 'amber',
      bullets: [
        '愿意持续做信息整理、会议纪要、关系梳理和复盘工作。',
        '对市场情绪和机构视角的变化非常敏感，也在训练自己的表达和提问能力。',
        '欢迎前辈指出我的盲点，或者随手给我一个值得研究的新角度。',
      ],
      cta: { label: '邮件联系我', actionId: 'email' },
    },
    {
      id: 'internet-signal',
      title: '给互联网前辈的信号',
      summary: '我在产品、增长、AI 工具和 workflow 上都很有兴趣，也很想认识认真做事的人。',
      audiences: ['internet'],
      tone: 'lime',
      bullets: [
        '喜欢从问题出发，用轻量工具快速做出能跑的原型。',
        '会把 vibe coding 当作试验田，先搭、先测、再快速迭代。',
        '对“代码如何帮助学习和日常生活”这件事有长期兴趣。',
      ],
      cta: { label: '去看 Build Deck', href: '#builds' },
    },
    {
      id: 'recruiter-signal',
      title: '给招聘方的信号',
      summary: '如果你在看一个候选人，我希望你看到的不只是经历列表，还有我的表达方式、连接欲望和行动风格。',
      audiences: ['recruiter'],
      tone: 'rose',
      bullets: [
        '教育、实习、社群和个人项目形成了交叉型能力结构。',
        '既能做内容整理、对外表达，也愿意动手做产品和自动化原型。',
        '职业版视图保留了更高密度的信息，适合快速扫读。',
      ],
      cta: { label: '打开 /resume', href: '/resume' },
    },
  ],
  timelineItems: [
    {
      id: 'bit',
      period: '2024.09 - 至今',
      title: '本科在读',
      org: '北京理工大学',
      kind: 'education',
      bullets: [
        '学习经历覆盖经济、商业分析与 AI 交叉兴趣。',
        '保持较高学业表现，也持续参加与人工智能、创新实践相关的活动。',
        '把校园当作低成本试验场，不断训练表达、组织和连接能力。',
      ],
      tags: ['北京', '经济', 'AI 交叉', 'GPA 3.8+'],
      impact: '在系统学习与快速试错之间找到自己的节奏。',
    },
    {
      id: 'vc-intern',
      period: '2026.01 - 至今',
      title: '投资相关实习',
      org: '消费与零售关注机构',
      kind: 'internship',
      bullets: [
        '参与机构对外连接、活动协同、材料整理与关系维护。',
        '在快节奏变化里训练自己的信息吸收和表达转译能力。',
        '更真切地理解市场如何快速波动，以及从业者如何处理不确定性。',
      ],
      tags: ['VC', 'IR', '市场观察', '快节奏'],
      impact: '让我更清楚自己想要靠近什么样的人、问题和工作方式。',
    },
    {
      id: 'ops-intern',
      period: '2025.07 - 2025.09',
      title: '产品 / 运营实习',
      org: 'AI 创业方向团队',
      kind: 'internship',
      bullets: [
        '参与内容、活动或用户增长相关工作，贴近产品与用户场景。',
        '把信息整理、需求转译和执行落地串成一条完整链路。',
        '感受到“把一个想法迅速做成可感知体验”的吸引力。',
      ],
      tags: ['产品运营', 'AI', '执行力', '用户感'],
      impact: '这段经历让我更确信自己喜欢贴近真实反馈的工作。',
    },
    {
      id: 'community',
      period: '2025.01 - 至今',
      title: '校园 / 社群连接者',
      org: '校内外 AI 与创新实践社群',
      kind: 'community',
      bullets: [
        '在社群里做信息分发、活动协作和同频连接。',
        '喜欢把“认识人”变成一种自然、轻松但高质量的事情。',
        '对组织氛围、表达方式和连接效率有持续观察。',
      ],
      tags: ['社群', '沟通', '连接', '组织感'],
      impact: '也因此形成了这次主页的核心主题：把连接欲望设计成体验。',
    },
    {
      id: 'bonjour-lab',
      period: '2026',
      title: 'Bonjour 个人入口实验',
      org: 'Personal Signal Project',
      kind: 'project',
      bullets: [
        '把个人介绍从静态文本改造成更可触达的社交入口。',
        '尝试用小程序和轻量页面承接陌生连接、coffee chat 和弱关系扩展。',
        '持续打磨“别人看见我时，第一秒会感受到什么”。',
      ],
      tags: ['Bonjour', '个人品牌', '连接设计', '实验'],
      impact: '这是未来更多个人实验项目的起点。',
    },
  ],
  projectCards: [
    {
      id: 'bonjour',
      title: 'Bonjour 名片实验',
      status: 'Live signal',
      summary: '把一张个人入口做得更像“邀请函”，而不是联系方式列表。',
      outcome: '适合承接 coffee chat、同频连接和轻社交扩列。',
      stack: ['Mini Program', 'Personal Branding', 'Social Funnel'],
    },
    {
      id: 'workflow',
      title: 'AI 学习流自动化',
      status: 'Exploring',
      summary: '我在尝试让代码和 AI 处理学习里 90% 的重复性难题。',
      outcome: '目标不是炫技，而是把学习、整理和复盘变成一条低阻力流水线。',
      stack: ['AI Workflow', 'Automation', 'Vibe Coding'],
    },
    {
      id: 'market',
      title: '一级市场观察日志',
      status: 'Ongoing',
      summary: '把这几个月真实感受到的市场变化，变成一套自己的观察坐标。',
      outcome: '持续形成更稳的输入方式、更清楚的输出结构和更敏感的问题意识。',
      stack: ['Market Notes', 'Pattern Sensing', 'VC Learning'],
    },
  ],
  contactActions: [
    {
      id: 'bonjour',
      label: 'Bonjour 入口',
      type: 'guide',
      value: '#小程序://Bonjour/QvolyGrMYmszi6i',
      note: '适合用来发起轻连接、coffee chat 或认识一下。',
      helper: '桌面端可以先复制到微信对话框或备忘录，再在手机里打开。',
      steps: [
        '复制下方小程序口令。',
        '在手机端微信里粘贴，或先发给自己。',
        '打开 Bonjour 后就能进入我的个人入口。',
      ],
    },
    {
      id: 'email',
      label: '邮箱',
      type: 'copy',
      value: '2024100044@bit.edu.cn',
      href: 'mailto:2024100044@bit.edu.cn',
      note: '适合正式一点的联系、合作邀约或职位沟通。',
      helper: '如果你更想快速认识，也欢迎先走 Bonjour。',
    },
    {
      id: 'resume',
      label: '职业版履历',
      type: 'link',
      value: '/resume',
      href: '/resume',
      note: '30 秒快速扫读版，适合招聘方或第一次了解我时查看。',
    },
    {
      id: 'github',
      label: 'GitHub',
      type: 'link',
      value: 'https://github.com/1pidandansolozhou',
      href: 'https://github.com/1pidandansolozhou',
      note: '会陆续把更多试验项目整理成公开可看的痕迹。',
    },
  ],
  consolePrompts: [
    {
      id: 'why-vc',
      label: '为什么去 VC？',
      command: 'open_signal why-vc',
      response:
        '因为我想把“对行业和人保持高密度好奇”这件事，放进真实世界里验证。一级市场让我直接面对变化、叙事、判断和不确定性，而这些刚好也是我现在最想训练的能力。',
      followups: ['市场变化快', '问题意识', '学习速度'],
    },
    {
      id: 'what-building',
      label: '最近在折腾什么？',
      command: 'inspect build-log',
      response:
        '最近主要在试一些 vibe coding 小玩意，目标不是做一个大而全的平台，而是让 AI 和代码先帮我解决学习里那些最烦、最重复、最浪费脑力的小问题。',
      followups: ['AI workflow', '学习自动化', '小系统'],
    },
    {
      id: 'who-to-chat',
      label: '想和谁约 coffee chat？',
      command: 'query coffee-chat',
      response:
        '创业者、一级市场前辈、互联网前辈我都很欢迎。只要你愿意认真聊点正在发生的事，不管是产品、融资、工具、个人成长还是市场情绪，我都很愿意认识。',
      followups: ['创业者', '投资人', '互联网前辈'],
    },
    {
      id: 'why-ai',
      label: '为什么一直在想 AI？',
      command: 'trace tame-ai',
      response:
        '因为我不想把 AI 当作一次性的效率插件。我更想知道，怎样让它真正融入一个人的学习、表达、整理和行动里，最后成为一种更稳定的能力延伸。',
      followups: ['驯化 AI', '日常工作流', '长期主义'],
    },
  ],
  statusFeed: [
    {
      id: 'market',
      label: '现在在感受',
      copy: '一级市场的瞬息万变，真的比想象中更快。',
    },
    {
      id: 'coding',
      label: '现在在折腾',
      copy: '想用代码解决学习中 90% 的重复性难题。',
    },
    {
      id: 'ai',
      label: '现在在想',
      copy: '怎样在日常生活里把 AI 驯化成真正可用的伙伴。',
    },
    {
      id: 'travel',
      label: '现在在计划',
      copy: '暑假欧洲穷游，把在路上的感觉也写进主页里。',
    },
  ],
  skillGroups: [
    {
      label: 'Vibe Coding / AI 工具',
      items: ['Bolt.new', 'Base44', 'Cursor', 'Lovable', 'Vercel'],
    },
    {
      label: '产品 / 表达 / 协作',
      items: ['Canva', 'Notion', 'Tableau', '用户沟通', '内容整理'],
    },
    {
      label: '基础能力',
      items: ['英语 CET-6 591', '跨角色沟通', '快速学习', '信息结构化'],
    },
  ],
} satisfies SiteContent

