<script setup>
// 课程卡片：展示课程信息，“查看详情”用 javascript:void(0) 并向上抛出事件
import TagPill from './TagPill.vue'

defineProps({
  course: { type: Object, required: true }
})
const emit = defineEmits(['detail'])
</script>

<template>
  <article class="course-card card">
    <div class="course-head">
      <h3>{{ course.name }}</h3>
      <TagPill :text="course.difficulty" />
    </div>
    <p class="course-desc">{{ course.desc }}</p>
    <div class="course-tags">
      <TagPill v-for="t in course.tags" :key="t" :text="t" />
    </div>
    <ul class="course-meta">
      <li>讲师：{{ course.teacher }}</li>
      <li>课时 {{ course.hours }} · 学分 {{ course.credit }}</li>
    </ul>
    <!-- 关键知识点：href="javascript:void(0)" + @click 事件 -->
    <a href="javascript:void(0)" class="btn detail-btn" @click="emit('detail', course)">
      查看详情 →
    </a>
  </article>
</template>

<style scoped>
.course-card { padding: 22px; display: flex; flex-direction: column; gap: 12px; }
.course-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
.course-desc { color: var(--text-sub); font-size: 14px; min-height: 44px; }
.course-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.course-meta { list-style: none; color: var(--text-sub); font-size: 13px; }
.detail-btn { margin-top: auto; align-self: flex-start; padding: 8px 18px; font-size: 13px; }
</style>
