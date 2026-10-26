<script setup>
// 小型标签：根据难度 / 类型显示不同底色
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, required: true }
})

const tone = computed(() => {
  if (['入门', '前端'].includes(props.text)) return 'green'
  if (['进阶'].includes(props.text)) return 'blue'
  if (['高阶'].includes(props.text)) return 'orange'
  return 'gray'
})
</script>

<template>
  <span class="tag" :class="tone">{{ text }}</span>
</template>

<style scoped>
.tag {
  display: inline-block;
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 999px;
  font-weight: 600;
}
.green { background: #d1fae5; color: #047857; }
.blue { background: #dbeafe; color: #1d4ed8; }
.orange { background: #ffedd5; color: #c2410c; }
.gray { background: #e5e7eb; color: #374151; }
</style>
