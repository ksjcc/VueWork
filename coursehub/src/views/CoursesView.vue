<script setup>
// 课程中心页：筛选 + 课程列表 + 成绩速查表
import { ref, computed } from 'vue'
import CourseFilter from '../components/CourseFilter.vue'
import CourseCard from '../components/CourseCard.vue'
import ScoreTable from '../components/ScoreTable.vue'
import SectionTitle from '../components/SectionTitle.vue'
import ModalDialog from '../components/ModalDialog.vue'
import TagPill from '../components/TagPill.vue'
import { courses } from '../data.js'

const keyword = ref('')
const category = ref('全部')
const detailVisible = ref(false)
const current = ref(null)

const filtered = computed(() => {
  return courses.filter((c) => {
    const matchCat = category.value === '全部' || c.category === category.value
    const kw = keyword.value.trim().toLowerCase()
    const matchKw =
      !kw ||
      c.name.toLowerCase().includes(kw) ||
      c.teacher.includes(keyword.value.trim())
    return matchCat && matchKw
  })
})

function openDetail(course) {
  current.value = course
  detailVisible.value = true
}
</script>

<template>
  <div class="container page">
    <h1 class="page-title">课程中心</h1>
    <p class="page-sub">
      共 {{ courses.length }} 门课程 · 支持关键词搜索与类别筛选（当前显示 {{ filtered.length }} 条）
    </p>

    <CourseFilter v-model:keyword="keyword" v-model:category="category" />

    <div class="grid cols-3 course-grid">
      <CourseCard v-for="c in filtered" :key="c.id" :course="c" @detail="openDetail" />
    </div>

    <SectionTitle title="成绩速查" subtitle="点击表头可按课程名或成绩排序" />
    <ScoreTable />

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
.course-grid { margin-top: 24px; }
.detail-desc { color: var(--text-sub); margin-bottom: 12px; }
.detail-tags { display: flex; gap: 6px; margin-bottom: 12px; flex-wrap: wrap; }
.detail-meta { list-style: none; color: var(--text-sub); font-size: 14px; }
</style>
