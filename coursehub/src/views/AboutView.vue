<script setup>
// 关于本站页：项目介绍 + void(0) 知识点演示 + 常见问题
import SectionTitle from '../components/SectionTitle.vue'
import VoidLinkDemo from '../components/VoidLinkDemo.vue'
import FaqItem from '../components/FaqItem.vue'
import TagPill from '../components/TagPill.vue'
import { faqs } from '../data.js'

const techs = ['Vue 3.5', 'Vite 6', 'Vue Router 4', 'ES Modules', 'Teleport', 'Provide / Inject']
</script>

<template>
  <div class="container page">
    <h1 class="page-title">关于本站</h1>
    <p class="page-sub">
      这是一个纯前端实现的校园课程学习中心，用于演示 Vue 3 单文件组件化开发与
      <code>javascript:void(0)</code> 交互技巧。
    </p>

    <div class="tech card">
      <h3>技术栈</h3>
      <div class="tech-tags">
        <TagPill v-for="t in techs" :key="t" :text="t" />
      </div>
    </div>

    <SectionTitle title="javascript:void(0) 交互演示" subtitle="亲自点一点下面的链接，对比它们的区别" />
    <VoidLinkDemo />

    <SectionTitle title="常见问题 FAQ" subtitle="点击问题展开回答（同样使用 javascript:void(0)）" />
    <FaqItem v-for="f in faqs" :key="f.q" :item="f" />
  </div>
</template>

<style scoped>
.page code {
  background: var(--bg);
  border: 1px solid var(--border);
  padding: 1px 6px;
  border-radius: 6px;
  color: #d97706;
  font-size: 13px;
}
.tech { padding: 20px 24px; margin-bottom: 8px; }
.tech-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px; }
</style>
