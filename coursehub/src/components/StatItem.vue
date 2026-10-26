<script setup>
// 首页统计项：封装数字滚动 + 标签，供 Hero 区域复用
import CountUpNumber from './CountUpNumber.vue'

defineProps({
  stat: { type: Object, required: true }
})
</script>

<template>
  <div class="stat">
    <CountUpNumber :end="stat.value" />
    <span class="stat-label">{{ stat.label }}</span>
  </div>
</template>

<style scoped>
.stat { text-align: center; }
.stat-label { display: block; color: var(--text-sub); font-size: 13px; margin-top: 4px; }
</style>
