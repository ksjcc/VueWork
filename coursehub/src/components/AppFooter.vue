<script setup>
// 页脚：占位链接使用 javascript:void(0)，绑定点击事件后不产生跳转
import { inject } from 'vue'
const showToast = inject('showToast')
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div>
        <div class="footer-logo">Course<span>Hub</span></div>
        <p class="footer-desc">南华大学计算机学院 · 前端开发实验作品</p>
      </div>
      <div class="footer-links">
        <a href="javascript:void(0)" @click="showToast('友情链接：Gitee 仓库（演示）')">Gitee</a>
        <a href="javascript:void(0)" @click="showToast('友情链接：MDN 文档（演示）')">MDN</a>
        <a href="javascript:void(0)" @click="showToast('联系方式：support@coursehub.dev（演示）')">联系我们</a>
      </div>
    </div>
    <div class="footer-copy">© 2026 CourseHub · Vue 3 + Vite 构建</div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--card);
  border-top: 1px solid var(--border);
  padding: 36px 0 20px;
  margin-top: 40px;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}
.footer-logo { font-size: 20px; font-weight: 800; }
.footer-logo span { color: var(--primary); }
.footer-desc { color: var(--text-sub); font-size: 13px; margin-top: 6px; }
.footer-links { display: flex; gap: 20px; }
.footer-links a { color: var(--text-sub); font-size: 14px; cursor: pointer; }
.footer-copy {
  text-align: center;
  color: var(--text-sub);
  font-size: 12px;
  margin-top: 24px;
  border-top: 1px dashed var(--border);
  padding-top: 14px;
}
</style>
