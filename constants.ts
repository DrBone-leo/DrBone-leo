import { BasicInfo, Education, Experience, Project, SmartSportsProject, Publication, IntellectualProperty, Award } from './types';

// NOTE: In a real deployment, replace the placeholder image URLs with the actual extracted screenshots from the PDF.

export const BASIC_INFO: BasicInfo = {
  name: "李伦宇",
  avatar: "https://picsum.photos/id/1005/300/300", // Replace with Page 1 headshot
  titles: [
    "助教 (Teaching Assistant)",
    "对外交流秘书",
    "中共党员"
  ],
  birth: "1995.07.18",
  political: "中共党员",
  phones: ["19982058152", "13308091383"],
  emails: ["leolly007@163.com", "516824418@qq.com"],
  location: "四川省成都市"
};

export const EDUCATION: Education[] = [
  {
    period: "2019.09 — 2022.06",
    school: "成都体育学院",
    college: "运动医学与健康学院",
    major: "运动人体科学",
    degree: "硕士",
    details: [
      "获2019-2020国家奖学金",
      "2022四川省优秀毕业生",
      "曾任研究生会主席、研究生二支部组织委员"
    ]
  },
  {
    period: "2014.09 — 2019.06",
    school: "成都体育学院",
    college: "运动医学与健康学院",
    major: "中医学",
    degree: "本科",
    details: [
      "曾任学生会副主席",
      "多次获优秀志愿者、优秀学生干部、社会实践优秀学生称号",
      "2017-2018大学生创新创业大赛三等奖"
    ]
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    period: "2023.08 — 至今",
    organization: "成都体育学院 · 运动医学与健康学院",
    role: "助教 / 对外交流秘书",
    description: "中医运动医学教研室",
    details: [
      "主讲课程：《常见运动损伤防治与康复》、《常见损伤防护与康复》、《郑氏推拿法》、《体育测量与评价》、《青少年体质健康》",
      "参与《运动生理学》、《运动医学常用科研仪器设备操作》、《郑氏伤科推拿治疗学》教学研究",
      "参与多门课程教学设计、大纲编撰"
    ]
  }
];

export const TEAM_SUPPORT: Experience[] = [
  { period: "2024年", role: "医疗保障", organization: "四川省网球队" },
  { period: "2022-2023年", role: "科医保障", organization: "成都体育学院竞技体校" },
  { period: "2021年", role: "随队运动防护师", organization: "四川省网球队 (第十四届全运会)" },
  { period: "2019-2021年", role: "医疗保障", organization: "四川省水球、田径、散打队 (备战第十四届全运会)" },
  { period: "2018-2019年", role: "康复治疗师", organization: "中国国家射击队" },
  { period: "2015-2017年", role: "医疗保障", organization: "四川省水球、田径、散打队 (备战第十三届全运会)" },
];

export const SMART_SPORTS_PROJECTS: SmartSportsProject[] = [
  {
    title: "基于计算机视觉的儿童肥胖运动处方构建与应用",
    category: "智慧体育 / 计算机视觉",
    goal: "针对儿童肥胖问题，利用非接触式CV技术进行体态与运动分析，构建科学的个性化运动处方。",
    role: "项目主持 (Project Leader)",
    tech: ["Computer Vision", "Motion Analysis", "Sports Prescription"],
    result: "入选四川省苗子科技创新工程 (MZGC20230033)；成功开发并获批软著《基于计算机视觉的肥胖运动处方管理平台 V1.0》 (2024SR1688772)。"
  },
  {
    title: "基于智能体的生成式运动减肥方案推荐系统",
    category: "AIGC / 推荐系统",
    goal: "利用生成式人工智能(AIGC)与智能体(Agent)技术，为用户提供智能、动态调整的减肥运动方案。",
    role: "核心开发者",
    tech: ["Generative AI", "Intelligent Agents", "Recommendation Algorithms"],
    result: "完成系统开发并取得软件著作权 (2024SR1688784)。"
  },
  {
    title: "运动损伤智慧管理平台",
    category: "数字医疗 / 运动康复",
    goal: "实现运动损伤数据的数字化采集、存储与分析，辅助医疗人员进行康复过程的智能化管理。",
    role: "核心开发者",
    tech: ["Digital Health Platform", "Injury Database", "Management System"],
    result: "完成平台构建并取得软件著作权 (2024SR1772109)。"
  },
  {
    title: "XR拓展康复时空 - 虚拟现实康复应用",
    category: "XR / 虚拟现实",
    goal: "探索扩展现实(XR)技术在康复领域的应用，打破传统康复的时空限制。",
    role: "团队核心成员",
    tech: ["Extended Reality (XR)", "Virtual Rehabilitation"],
    result: "项目荣获2024年“挑战杯”四川省大学生创业计划竞赛铜奖。"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "基于计算机视觉的儿童肥胖运动处方构建与应用",
    role: "主持",
    level: "四川省苗子科技创新工程 (MZGC20230033)",
    description: "聚焦智慧体育，利用CV技术进行运动处方管理。"
  },
  {
    title: "“数智体卫，医工互联”的运动损伤防治与康复课程教学方式方法研究",
    role: "主持",
    level: "成都体育学院教改项目",
    description: "探索数字化教学改革。"
  },
  {
    title: "校级新建-线上《常见运动损伤与防治》",
    role: "主持",
    level: "成都体育学院一流课程",
  },
  {
    title: "《常见运动损伤防治与康复》",
    role: "主持",
    level: "成都体育学院行业企业课程资源库",
  },
  {
    title: "国家自然科学基金 (MGF-Notch/Collagen V/CalcR-MSC等项目)",
    role: "参与",
    description: "参与多项国自然基金，研究推拿对骨骼肌重塑、睡眠节律、运动疲劳的机制。"
  },
  {
    title: "国家重点研发计划 (科技冬奥)",
    role: "参与",
    description: "参与冬季项目运动员伤病防治关键技术研究。"
  }
];

export const INTELLECTUAL_PROPERTY: IntellectualProperty[] = [
  {
    name: "基于智能体的生成式运动减肥方案推荐系统 V1.0",
    type: "Software Copyright",
    number: "2024SR1688784",
    image: "https://picsum.photos/400/300?grayscale" // Replace with Page 23
  },
  {
    name: "基于计算机视觉的肥胖运动处方管理平台 V1.0",
    type: "Software Copyright",
    number: "2024SR1688772",
    image: "https://picsum.photos/401/300?grayscale" // Replace with Page 24
  },
  {
    name: "运动损伤智慧管理平台 V1.0",
    type: "Software Copyright",
    number: "2024SR1772109",
    image: "https://picsum.photos/402/300?grayscale" // Replace with Page 25
  },
  {
    name: "一种大鼠固定器",
    type: "Patent",
    number: "ZL 2021 2 2669495.5",
    image: "https://picsum.photos/403/300?grayscale" // Replace with Page 22
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Identification of key genes and signaling pathways based on transcriptomic studies of aerobic and resistance training interventions in sarcopenia in SAMP8 mice",
    authors: "Lunyu Li, Xiaotian Guan, et al.",
    journal: "Sports Medicine and Health Science",
    year: "2024",
    type: "SCI"
  },
  {
    title: "Mechanism of ShuiJingDan in Treating Acute Gouty Arthritis Flares Based on Network Pharmacology and Molecular Docking",
    authors: "Qingsong Liu, Lunyu Li, et al.",
    journal: "Drug Design, Development and Therapy",
    year: "2023",
    type: "SCI"
  },
  {
    title: "抗阻运动经JAK2/STAT5a改善SAMP8小鼠肌少症的作用机制",
    authors: "曲波, 李伦宇, 等",
    journal: "中国康复医学杂志 (Chinese Journal of Rehabilitation Medicine)",
    year: "2024",
    type: "CSCD"
  },
  {
    title: "lncRNA介导的ceRNA网络在肌肉减少症中作用机制的研究进展",
    authors: "傅泽铤, 李伦宇, 等",
    journal: "中国病理生理杂志",
    year: "2022",
    type: "CSCD"
  },
  {
    title: "抗阻运动对SAMP8小鼠骨骼肌lncRNA和mRNA基因表达谱的影响",
    authors: "傅泽铤, ..., 李伦宇(3), 等",
    journal: "中国实验动物学报",
    year: "2024",
    type: "CSCD"
  },
  {
    title: "推拿对骨骼肌过度使用损伤修复中Hippo信号通路的影响",
    authors: "阿衣留布, ..., 李伦宇(3), 等",
    journal: "中医康复",
    year: "2024",
    type: "Other"
  }
];

export const AWARDS: Award[] = [
  {
    name: "2025年四川省首届教师人工智能应用能力大赛 三等奖",
    year: "2025",
    level: "Provincial",
    image: "https://picsum.photos/404/300" // Page 28
  },
  {
    name: "2024年四川省教师信息素养提升实践活动常规项目高等教育组-课件 一等奖",
    year: "2024",
    level: "Provincial",
    image: "https://picsum.photos/405/300" // Page 27
  },
  {
    name: "2024年“挑战杯”四川省大学生创业计划竞赛 铜奖 (XR拓展康复时空)",
    year: "2024",
    level: "Provincial",
    image: "https://picsum.photos/406/300" // Page 26
  }
];