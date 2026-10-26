<script setup>
// 特色功能卡片
defineProps({
  feature: { type: Object, required: true }
})
</script>

<template>
  <div class="feature-card card">
    <div class="feature-icon">{{ feature.icon }}</div>
    <h3>{{ feature.title }}</h3>
    <p>{{ feature.desc }}</p>
  </div>
</template>

<style scoped>
.feature-card { padding: 26px 22px; transition: transform 0.2s, box-shadow 0.2s; }
.feature-card:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(37, 99, 235, 0.15); }
.feature-icon { font-size: 34px; margin-bottom: 12px; }
.feature-card h3 { margin-bottom: 8px; }
.feature-card p { color: var(--text-sub); font-size: 14px; }
</style>
