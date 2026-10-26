<script setup>
// 顶部公告条：href 使用 javascript:void(0)，点击只弹 Toast，不跳转
import { inject } from 'vue'
const showToast = inject('showToast')

function onNoticeClick() {
  showToast('公告详情：新学期的课程选课已开放', 'success')
}
</script>

<template>
  <div class="notice-bar">
    <span class="notice-text">📢 2026 秋季学期 · CourseHub 课程中心全新上线</span>
    <a href="javascript:void(0)" class="notice-link" @click="onNoticeClick">查看公告</a>
  </div>
</template>

<style scoped>
.notice-bar {
  background: var(--primary);
  color: #fff;
  font-size: 13px;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
.notice-link {
  color: #bfdbfe;
  text-decoration: underline;
  cursor: pointer;
}
</style>
