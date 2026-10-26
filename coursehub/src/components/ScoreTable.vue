<script setup>
// 成绩速查表：点击表头排序（排序按钮 href 用 javascript:void(0)）
import { ref, computed } from 'vue'
import { scores } from '../data.js'

const sortKey = ref(null)
const sortDir = ref(1)

const sorted = computed(() => {
  if (!sortKey.value) return scores
  return [...scores].sort((a, b) =>
    a[sortKey.value] > b[sortKey.value] ? sortDir.value : -sortDir.value
  )
})

function toggleSort(key) {
  if (sortKey.value === key) sortDir.value *= -1
  else { sortKey.value = key; sortDir.value = 1 }
}
</script>

<template>
  <div class="score-card card">
    <h3 class="score-title">成绩速查 <span class="hint">（点击表头排序）</span></h3>
    <table class="score-table">
      <thead>
        <tr>
          <th>
            <a href="javascript:void(0)" @click="toggleSort('name')">课程名称</a>
          </th>
          <th>
            <a href="javascript:void(0)" @click="toggleSort('score')">成绩</a>
          </th>
          <th>状态</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="s in sorted" :key="s.name">
          <td>{{ s.name }}</td>
          <td>{{ s.score }}</td>
          <td><span class="badge" :class="s.passed ? 'ok' : 'no'">{{ s.passed ? '及格' : '不及格' }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.score-card { padding: 24px; }
.score-title { margin-bottom: 14px; }
.hint { font-size: 12px; color: var(--text-sub); font-weight: 400; }
.score-table { width: 100%; border-collapse: collapse; }
.score-table th, .score-table td { padding: 10px 12px; text-align: left; border-bottom: 1px solid var(--border); font-size: 14px; }
.score-table th a { color: var(--text); cursor: pointer; }
.score-table th a:hover { color: var(--primary); }
.badge { padding: 2px 12px; border-radius: 999px; font-size: 12px; font-weight: 600; }
.ok { background: #d1fae5; color: #047857; }
.no { background: #fee2e2; color: #b91c1c; }
</style>
