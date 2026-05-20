window.resumeData = {
  person: {
    name: "纪文龙",
    roman: "JavonLoong",
    title: "清华大学行健书院大二本科生",
    program: "理论与应用力学 + 能源与动力工程双学位",
    period: "2024.09 - 2028.07（预计）",
    coursework: "已修读课程 24 门，其中必修课 17 门",
    positioning: "AI 应用工程、工程仿真复刻、产品原型与视觉表达",
    statement:
      "我更擅长把一个模糊任务做成能交付的结果：先厘清资料、对象和证据，再搭工具、做验证，最后用网页、PPT 或 PDF 把结论讲清楚。"
  },
  links: [
    { label: "GitHub", url: "https://github.com/JavonLoong" },
    { label: "RAG 控制台", url: "https://javonloong.github.io/RAG/" },
    { label: "MoonCake Studio", url: "https://javonloong.github.io/Mooncake-Modle/" },
    { label: "Guang 技术知识网站", url: "https://javonloong.github.io/guang-website/" },
    { label: "PDF 简历", url: "../resume/javon-ai-resume.pdf" }
  ],
  abilities: [
    {
      title: "AI 协作",
      text: "Prompt 设计、CoT 任务拆解、Few-shot 风格控制、MCP / 函数调用、Skill / SOP 沉淀、Agent 分工与审核。"
    },
    {
      title: "工程实现",
      text: "Python、FastAPI、ChromaDB、React、Vite、Three.js、HTML/CSS/JavaScript、LaTeX、GitHub Pages。"
    },
    {
      title: "仿真与数据",
      text: "COMSOL 气动极线、AWES 高空风能复刻、数据清洗、向量检索、benchmark、日志与可审计材料组织。"
    },
    {
      title: "表达交付",
      text: "PPT 制作、图像生成与重绘、汇报材料整理、产品概念书、竞品分析、公开网页演示。"
    },
    {
      title: "调研与转化",
      text: "资料调研、方案逻辑梳理、文案整合、路演辅助、人员协调；能把复杂内容拆解为清晰表达。"
    }
  ],
  aiProjects: [
    {
      name: "动力装备知识库控制台",
      type: "RAG / GraphRAG",
      tags: ["FastAPI", "ChromaDB", "向量检索", "Graph construction"],
      points: [
        "搭建上传、入库、检索、benchmark、日志查看控制台，用 FastAPI / Chroma 管理文档切片、索引和运行数据。",
        "围绕 6098 页动力装备资料完成可审计处理，沉淀 593 条 chunk，推进普通 RAG 到 GraphRAG / 知识图谱构建的前置实验。"
      ],
      links: [
        { label: "Demo", url: "https://javonloong.github.io/RAG/" },
        { label: "Repo", url: "https://github.com/JavonLoong/RAG" }
      ]
    },
    {
      name: "高空风能 AWES / COMSOL 仿真复刻",
      type: "工程仿真",
      tags: ["COMSOL", "Python 主仿真", "八字轨迹", "pumping cycle"],
      points: [
        "复刻八字形轨迹、系留绳张力、功率曲线和 pumping-cycle 能量账本，将 COMSOL 气动极线接入 Python 主仿真。",
        "搭建 42-case 软件闭环和汇报材料，保留 COMSOL 与 Python 各自承担的证据边界。"
      ]
    },
    {
      name: "“步步”智能伴学系统",
      type: "教育 AI 产品",
      tags: ["AI + SOP", "执行力训练", "学生端", "教师 / 家长看板"],
      points: [
        "设计执行力训练型学习产品，通过锁步任务、拍照提交、AI 判断和看板反馈强化学习过程。",
        "形成概念书、竞品分析、Android 学生端原型与业务流程，覆盖从产品定位到交互落地的链路。"
      ]
    },
    {
      name: "美育图像与 PPT 制作",
      type: "视觉表达",
      tags: ["视觉审美", "PPT 叙事", "图像生成", "版式控制"],
      points: [
        "以美育、薪火计划、回声计划等主题为样本，完成从素材筛选、图像风格、页面重绘到汇报 PPT 成稿的整理。",
        "交付物可以直接打开查看，重点是审美判断、信息层级和版式稳定，而不是堆生成次数。"
      ],
      links: [
        { label: "打开《趣茶》PDF", url: "../portfolio/ppt/qucha-visual.pdf" },
        { label: "打开《回声计划》PPT", url: "../portfolio/ppt/echo-plan/" },
        { label: "打开 NeuroSync PPT", url: "../portfolio/ppt/neurosync-v10/" }
      ]
    },
    {
      name: "MoonCake Studio 月饼模具设计器",
      type: "3D 参数化",
      tags: ["Three.js", "参数化建模", "实时预览", "STL / GLB 导出"],
      points: [
        "实现浏览器端 3D 月饼模具自定义工具，支持边缘轮廓、传统花纹、中文刻字、图片浮雕和双视图预览。",
        "支持 STL / GLB 导出，体现基础 3D 建模、交互设计和面向生产文件的工程意识。"
      ],
      links: [
        { label: "Demo", url: "https://javonloong.github.io/Mooncake-Modle/" },
        { label: "Repo", url: "https://github.com/JavonLoong/Mooncake-Modle" }
      ]
    },
    {
      name: "Guang 技术知识网站",
      type: "内容系统",
      tags: ["React", "Vite", "Markdown", "GitHub Pages"],
      points: [
        "搭建 React + Vite + Markdown 的公开知识网站，包含文章、标签、路由、卡片和 GitHub Pages 部署。",
        "将学习记录整理为可持续更新的内容系统，补足“能做系统，也能组织知识和表达”的证据。"
      ],
      links: [
        { label: "Demo", url: "https://javonloong.github.io/guang-website/" },
        { label: "Repo", url: "https://github.com/JavonLoong/guang-website" }
      ]
    }
  ],
  awards: [
    "2021-2022 学年鹤壁市高中校级特优生",
    "2022 年鹤壁市“三好学生”",
    "清华大学强基计划自主招生 A+ 评级",
    "2024 年海昌智能奖学金一等奖",
    "2024 年读书郎圆梦奖学金",
    "2024 级本科生军训先进个人",
    "北京市第三十六届大学生数学竞赛（非数学专业甲组）三等奖",
    "2025 年全国大学生数学竞赛（北京赛区）三等奖",
    "清华大学 2025-2026 学年度理论力学竞赛三等奖",
    "清华大学行健书院“五行杯”最具可行性奖",
    "2025 年清华大学志愿公益奖学金",
    "2025 年国家励志奖学金",
    "2023 年全国中学生数学、物理、生物竞赛河南赛区二等奖，化学竞赛三等奖"
  ],
  leadership: [
    {
      role: "清华大学知食者协会副会长",
      period: "2025.05 - 至今",
      points: [
        "参与接待玻利维亚驻华大使 Hugo Siles，统筹策划示范烹饪活动，通过地域美食文化促进中外交流。",
        "提议并落地多项特色活动方案，提升社团成员活跃度。"
      ]
    },
    {
      role: "行健书院能源 4 班副班长",
      period: "2024.09 - 2025.09",
      points: [
        "协助班长统筹班级事务，负责班级信息库建立及“先行者计划”推送制作。",
        "作为核心班委，助力班级荣获清华大学“甲级团支部”称号及“最佳支部事业奖”。"
      ]
    },
    {
      role: "行健书院学生组织多部门骨干",
      period: "2025.07 - 至今",
      points: [
        "参与行健书院“量子猫酒馆”学生节，担任道具组核心成员，保障舞台演出效果。",
        "担任书院滑冰俱乐部骨干，组织新生教学与集体锻炼。"
      ]
    }
  ],
  practice: [
    {
      name: "“哈国健行”赴哈萨克斯坦海外实践支队",
      role: "后勤负责人",
      period: "2025 年暑期",
      points: [
        "参访哈萨克斯坦国立大学 Malchik Fyodor 实验室，负责全英文会议记录与整理。",
        "负责纳扎尔巴耶夫大学青年 SDG 问卷发放与数据回收分析。",
        "独立负责团队海外保险报销、异国交通调度及应急事务处理。"
      ]
    },
    {
      name: "志愿公益与公众讲解",
      role: "清华大学五星级紫荆志愿者",
      period: "2024 - 2025",
      points: [
        "参与高考招生志愿服务、校园日常讲解、“情系母校”回访母校、鸿雁计划训练营和大型展会志愿服务。",
        "承担公众讲解、政策咨询、现场协作与活动执行，熟悉面向访客和团队的沟通场景。"
      ]
    },
    {
      name: "教学表达与辅导经历",
      role: "讲师 / 全科助教",
      period: "持续经历",
      points: [
        "有多段家教和辅导班经历，曾辅导初高中学生数学、物理、语文及全科复盘。",
        "参与组织地市拔尖提优辅导班，擅长把复杂内容拆解成清晰表达。"
      ]
    },
    {
      name: "乡村文旅与方案转化支持",
      role: "资料调研 / 文案整合 / 路演辅助",
      period: "项目协作方向",
      points: [
        "可承担文旅资源、产业基础、闲置资产与共富路径资料整理，协助完成方案逻辑梳理。",
        "能够把地方文化、生态资源和共富需求转化为清晰项目方案，推动创意从概念走向可展示、可落地。"
      ]
    }
  ],
  resumeReferences: [
    "D:/虚拟C盘/研学简历纪文龙.docx",
    "D:/虚拟C盘/纪文龙2024012842简历.docx",
    "D:/虚拟C盘/纪文龙.docx"
  ]
};
