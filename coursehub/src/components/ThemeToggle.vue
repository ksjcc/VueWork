<script setup>
// 主题切换：切换 html[data-theme]，偏好写入 localStorage
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = localStorage.getItem('coursehub-theme') === 'dark'
  applyTheme()
})

function toggle() {
  isDark.value = !isDark.value
  localStorage.setItem('coursehub-theme', isDark.value ? 'dark' : 'light')
  applyTheme()
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <button class="theme-btn" @click="toggle" :title="isDark ? '切换到浅色' : '切换到深色'">
    {{ isDark ? '🌙' : '☀️' }}
  </button>
</template>

<style scoped>
.theme-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--bg);
  font-size: 17px;
  cursor: pointer;
}
</style>
