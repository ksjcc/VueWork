<script setup>
// 根组件：负责整体布局，并通过 provide/inject 向子组件提供全局 Toast 能力
import { ref, provide } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import NoticeBar from './components/NoticeBar.vue'
import BackToTop from './components/BackToTop.vue'
import ToastNotice from './components/ToastNotice.vue'

const toasts = ref([])
let toastSeq = 0

// 全局弹提示：子组件通过 inject('showToast') 调用
provide('showToast', (message, type = 'info') => {
  const id = ++toastSeq
  toasts.value.push({ id, message, type })
  setTimeout(() => {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }, 2600)
})
</script>

<template>
  <NoticeBar />
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
  <BackToTop />
  <ToastNotice :toasts="toasts" />
</template>
