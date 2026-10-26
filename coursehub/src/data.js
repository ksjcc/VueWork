// ===== 模拟数据源：课程、特色、常见问题、成绩 =====

export const courses = [
  { id: 1, name: 'Vue.js 前端开发', category: '前端', teacher: '张老师', hours: 48, credit: 3, difficulty: '进阶', desc: '组件化开发、组合式 API、路由与状态管理。', tags: ['Vue3', 'Vite', 'SPA'] },
  { id: 2, name: 'Python 数据分析', category: '数据科学', teacher: '王老师', hours: 56, credit: 4, difficulty: '入门', desc: 'NumPy / Pandas 数据清洗与可视化。', tags: ['Pandas', 'Matplotlib'] },
  { id: 3, name: '大数据平台实践', category: '数据科学', teacher: '李老师', hours: 48, credit: 3, difficulty: '进阶', desc: 'Hadoop / Spark 集群搭建与离线计算。', tags: ['Hadoop', 'Spark'] },
  { id: 4, name: '操作系统原理', category: '计算机基础', teacher: '赵老师', hours: 56, credit: 4, difficulty: '进阶', desc: '进程调度、内存管理、文件系统。', tags: ['OS', 'Linux'] },
  { id: 5, name: '计算机网络', category: '计算机基础', teacher: '孙老师', hours: 48, credit: 3, difficulty: '进阶', desc: 'TCP/IP 协议栈、HTTP 与网络编程。', tags: ['TCP/IP', 'HTTP'] },
  { id: 6, name: '数据库系统', category: '计算机基础', teacher: '周老师', hours: 48, credit: 3, difficulty: '入门', desc: 'SQL 语法、范式设计与事务管理。', tags: ['MySQL', 'SQL'] },
  { id: 7, name: 'UI 设计与交互', category: '前端', teacher: '吴老师', hours: 32, credit: 2, difficulty: '入门', desc: '设计规范、原型工具与组件库。', tags: ['Figma', 'Axure'] },
  { id: 8, name: '机器学习入门', category: '数据科学', teacher: '郑老师', hours: 56, credit: 4, difficulty: '高阶', desc: '线性回归、分类算法与模型评估。', tags: ['Scikit-learn'] }
]

export const categories = ['全部', '前端', '数据科学', '计算机基础']

export const features = [
  { icon: '🧭', title: '课程导航', desc: '按类别快速筛选课程，关键词实时搜索，学习路径一目了然。' },
  { icon: '📊', title: '成绩速查', desc: '内置成绩表，支持点击表头排序，及格状态自动高亮。' },
  { icon: '🔗', title: 'void(0) 交互', desc: '演示 javascript:void(0) 如何阻止链接跳转并绑定点击事件。' },
  { icon: '🌗', title: '深色模式', desc: '一键切换浅色 / 深色主题，偏好自动保存到 localStorage。' }
]

export const stats = [
  { label: '收录课程', value: 128 },
  { label: '覆盖学院', value: 16 },
  { label: '在线学习人次', value: 52000 }
]

export const faqs = [
  { q: 'javascript:void(0) 的作用是什么？', a: 'void 是一元运算符，void(0) 会计算表达式 0 并返回 undefined。写在 a 标签的 href 中时，点击链接不会发生任何页面跳转，从而可以安全地为链接绑定自定义点击事件。' },
  { q: '为什么不用 href="#" 代替？', a: 'href="#" 会把页面滚动到顶部并在地址栏添加 #，产生多余的导航记录。使用 javascript:void(0) 则完全不会改变地址栏与滚动位置。' },
  { q: 'CourseHub 是如何组织组件的？', a: '项目采用“页面 + 通用组件”分层：4 个页面视图只负责布局，18 个单文件组件各自封装独立 UI 与逻辑，通过 props / emit / provide-inject 通信。' }
]

export const scores = [
  { name: 'Vue.js 前端开发', score: 92, passed: true },
  { name: 'Python 数据分析', score: 88, passed: true },
  { name: '数据库系统', score: 76, passed: true },
  { name: '计算机网络', score: 58, passed: false },
  { name: '操作系统原理', score: 95, passed: true }
]
