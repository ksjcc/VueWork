<script setup>
// Toast 通知列表：由 App.vue 提供数据，自动消失
defineProps({
  toasts: { type: Array, default: () => [] }
})
</script>

<template>
  <div class="toast-wrap">
    <div v-for="t in toasts" :key="t.id" class="toast" :class="t.type">
      {{ t.type === 'error' ? '✕' : t.type === 'success' ? '✔' : 'ℹ' }} {{ t.message }}
    </div>
  </div>
</template>

<style scoped>
.toast-wrap {
  position: fixed;
  top: 78px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.toast {
  background: var(--card);
  border: 1px solid var(--border);
  border-left: 4px solid var(--primary);
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 14px;
  box-shadow: var(--shadow);
  max-width: 320px;
}
.toast.success { border-left-color: var(--accent); }
.toast.error { border-left-color: var(--danger); }
</style>
