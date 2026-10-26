<script setup>
// 返回顶部：滚动超过阈值后出现，点击平滑回到顶部（href 用 javascript:void(0)）
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 400
}

function backToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <a
    v-if="visible"
    href="javascript:void(0)"
    class="back-top"
    title="返回顶部"
    @click="backToTop"
  >↑</a>
</template>

<style scoped>
.back-top {
  position: fixed;
  right: 26px;
  bottom: 34px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
  cursor: pointer;
  z-index: 90;
}
</style>
