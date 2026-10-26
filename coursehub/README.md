# CourseHub · 校园课程学习中心

基于 **Vue 3 + Vite** 构建的纯前端单页应用（SPA），用于演示单文件组件化开发与 `javascript:void(0)` 交互技巧。

## 项目结构

```
coursehub/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.js
    ├── style.css
    ├── data.js               # 模拟数据源
    ├── router/index.js       # 4 个页面路由
    ├── App.vue               # 根组件（布局 + 全局 Toast）
    ├── views/                # 4 个页面
    │   ├── HomeView.vue
    │   ├── CoursesView.vue
    │   ├── AboutView.vue
    │   └── NotFoundView.vue
    └── components/           # 18 个单文件组件
        ├── AppHeader.vue     # 导航栏（登录用 void(0)）
        ├── AppFooter.vue
        ├── NoticeBar.vue
        ├── ThemeToggle.vue
        ├── ModalDialog.vue   # 通用弹窗（Teleport）
        ├── ToastNotice.vue
        ├── BackToTop.vue
        ├── HeroSection.vue
        ├── SectionTitle.vue
        ├── FeatureCard.vue
        ├── CountUpNumber.vue # 数字滚动动画
        ├── TagPill.vue
        ├── CourseCard.vue    # 查看详情用 void(0)
        ├── CourseFilter.vue  # 清空按钮用 void(0)
        ├── ScoreTable.vue    # 表头排序用 void(0)
        ├── FaqItem.vue       # 手风琴用 void(0)
        └── VoidLinkDemo.vue  # void(0) 知识点对比演示
```

## 运行

```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # 构建生产包
```

## 覆盖的知识点

- 组件化开发：props / emit / provide-inject / defineProps / defineEmits
- 组合式 API：ref / computed / watch / onMounted
- 路由：createRouter / 懒加载 / 404 兜底
- Teleport、Transition、IntersectionObserver
- **javascript:void(0)**：登录、查看详情、清空筛选、FAQ 展开、返回顶部等场景
