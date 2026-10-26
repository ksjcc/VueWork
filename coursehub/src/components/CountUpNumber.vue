<script setup>
// 数字滚动组件：元素进入视口后从 0 动画递增到目标值
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  end: { type: Number, required: true },
  duration: { type: Number, default: 1400 }
})

const display = ref(0)
let raf = null
let started = false

function animate() {
  const t0 = performance.now()
  const step = (now) => {
    const p = Math.min((now - t0) / props.duration, 1)
    display.value = Math.round(props.end * (1 - Math.pow(1 - p, 3)))
    if (p < 1) raf = requestAnimationFrame(step)
  }
  raf = requestAnimationFrame(step)
}

function startWhenVisible() {
  const el = rootEl.value
  if (!el || started) return
  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      started = true
      animate()
      io.disconnect()
    }
  })
  io.observe(el)
}

const rootEl = ref(null)
onMounted(startWhenVisible)
onUnmounted(() => cancelAnimationFrame(raf))
</script>

<template>
  <span ref="rootEl" class="count">{{ display.toLocaleString() }}</span>
</template>

<style scoped>
.count { font-size: 30px; font-weight: 900; color: var(--primary); }
</style>
