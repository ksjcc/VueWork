<script setup>
// 课程筛选条：关键词搜索 + 类别筛选 + 清空（清空用 javascript:void(0)）
import { inject } from 'vue'
import { categories } from '../data.js'

const props = defineProps({
  keyword: String,
  category: { type: String, default: '全部' }
})
const emit = defineEmits(['update:keyword', 'update:category'])
const showToast = inject('showToast')

function clear() {
  emit('update:keyword', '')
  emit('update:category', '全部')
  showToast('已清空筛选条件', 'info')
}
</script>

<template>
  <div class="filter card">
    <input
      :value="keyword"
      class="filter-input"
      placeholder="搜索课程名称 / 讲师…"
      @input="emit('update:keyword', $event.target.value)"
    />
    <div class="filter-cats">
      <button
        v-for="c in categories"
        :key="c"
        class="cat-btn"
        :class="{ on: category === c }"
        @click="emit('update:category', c)"
      >{{ c }}</button>
    </div>
    <a href="javascript:void(0)" class="clear-btn" @click="clear">清空筛选 ✕</a>
  </div>
</template>

<style scoped>
.filter {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.filter-input {
  flex: 1;
  min-width: 220px;
  padding: 10px 14px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--bg);
  color: var(--text);
}
.filter-cats { display: flex; gap: 8px; flex-wrap: wrap; }
.cat-btn {
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-sub);
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 13px;
  cursor: pointer;
}
.cat-btn.on { background: var(--primary); color: #fff; border-color: var(--primary); }
.clear-btn { color: var(--danger); font-size: 13px; cursor: pointer; }
</style>
