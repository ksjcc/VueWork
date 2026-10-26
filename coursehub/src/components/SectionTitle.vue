<script setup>
// 章节标题：统一首页各区块的标题样式
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' }
})
</script>

<template>
  <div class="section-title">
    <h2>{{ title }}</h2>
    <p v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.section-title { text-align: center; margin: 56px 0 28px; }
.section-title h2 { font-size: 28px; font-weight: 800; }
.section-title p { color: var(--text-sub); margin-top: 8px; }
</style>
