<script setup>
// 首页：Hero + 特色功能 + 推荐课程（弹窗详情）
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import SectionTitle from '../components/SectionTitle.vue'
import FeatureCard from '../components/FeatureCard.vue'
import CourseCard from '../components/CourseCard.vue'
import ModalDialog from '../components/ModalDialog.vue'
import TagPill from '../components/TagPill.vue'
import { features, courses } from '../data.js'

const recommend = courses.slice(0, 3)
const detailVisible = ref(false)
const current = ref(null)

function openDetail(course) {
  current.value = course
  detailVisible.value = true
}
</script>

<template>
  <div>
    <HeroSection />

    <div class="container">
      <SectionTitle title="为什么选择 CourseHub" subtitle="围绕课程学习的三个核心场景设计" />
      <div class="grid cols-3">
        <FeatureCard v-for="f in features" :key="f.title" :feature="f" />
      </div>

      <SectionTitle title="本周推荐课程" subtitle="点击卡片“查看详情”试试 javascript:void(0) 的用法" />
      <div class="grid cols-3">
        <CourseCard v-for="c in recommend" :key="c.id" :course="c" @detail="openDetail" />
      </div>
    </div>

    <ModalDialog v-model="detailVisible" :title="current ? current.name : '课程详情'">
      <div v-if="current" class="detail">
        <p class="detail-desc">{{ current.desc }}</p>
        <div class="detail-tags">
          <TagPill v-for="t in current.tags" :key="t" :text="t" />
        </div>
        <ul class="detail-meta">
          <li>讲师：{{ current.teacher }}</li>
          <li>课时：{{ current.hours }} 学时 · 学分：{{ current.credit }}</li>
          <li>难度：{{ current.difficulty }}</li>
        </ul>
      </div>
    </ModalDialog>
  </div>
</template>

<style scoped>
.detail-desc { color: var(--text-sub); margin-bottom: 12px; }
.detail-tags { display: flex; gap: 6px; margin-bottom: 12px; flex-wrap: wrap; }
.detail-meta { list-style: none; color: var(--text-sub); font-size: 14px; }
</style>
