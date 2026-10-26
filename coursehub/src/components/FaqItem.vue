<script setup>
// FAQ 手风琴：标题使用 href="javascript:void(0)"，点击展开/收起
import { ref } from 'vue'

defineProps({
  item: { type: Object, required: true }
})
const open = ref(false)
</script>

<template>
  <div class="faq card" :class="{ open }">
    <!-- 关键知识点：javascript:void(0) 防止展开标题时页面跳转 -->
    <a href="javascript:void(0)" class="faq-q" @click="open = !open">
      {{ item.q }}
      <span class="arrow" :class="{ flip: open }">▾</span>
    </a>
    <div v-show="open" class="faq-a">{{ item.a }}</div>
  </div>
</template>

<style scoped>
.faq { padding: 18px 22px; margin-bottom: 14px; }
.faq-q {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  color: var(--text);
  cursor: pointer;
}
.arrow { color: var(--primary); transition: transform 0.2s; }
.arrow.flip { transform: rotate(180deg); }
.faq-a { color: var(--text-sub); font-size: 14px; margin-top: 12px; line-height: 1.8; }
</style>
