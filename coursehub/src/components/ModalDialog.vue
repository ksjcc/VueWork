<script setup>
// 通用模态框：v-model（modelValue）控制显隐，Teleport 到 body，支持遮罩点击与 ESC 关闭
import { watch, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  title: { type: String, default: '提示' }
})
const emit = defineEmits(['update:modelValue'])

function close() {
  emit('update:modelValue', false)
}

function onKeydown(e) {
  if (e.key === 'Escape' && props.modelValue) close()
}

watch(
  () => props.modelValue,
  (v) => {
    if (v) document.addEventListener('keydown', onKeydown)
    else document.removeEventListener('keydown', onKeydown)
  }
)
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="modal-mask" @click.self="close">
      <div class="modal-box card">
        <div class="modal-head">
          <h3>{{ title }}</h3>
          <!-- 关闭按钮同样使用 javascript:void(0) -->
          <a href="javascript:void(0)" class="modal-close" @click="close">✕</a>
        </div>
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.modal-box {
  width: min(440px, 92vw);
  padding: 24px;
}
.modal-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.modal-close {
  font-size: 18px;
  color: var(--text-sub);
  cursor: pointer;
}
</style>
