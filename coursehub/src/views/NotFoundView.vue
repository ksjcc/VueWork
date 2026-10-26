<script setup>
// 404 页面：兜底路由，未匹配路径时显示
</script>

<template>
  <div class="container page notfound">
    <div class="n404">404</div>
    <h1>页面不存在</h1>
    <p class="page-sub">你访问的地址没有对应页面，试试回到首页或课程中心。</p>
    <div class="nf-actions">
      <router-link to="/" class="btn">返回首页</router-link>
      <router-link to="/courses" class="btn ghost">去课程中心</router-link>
    </div>
  </div>
</template>

<style scoped>
.notfound { text-align: center; padding-top: 90px; }
.n404 {
  font-size: 90px;
  font-weight: 900;
  color: var(--primary);
  line-height: 1;
  margin-bottom: 12px;
}
.nf-actions { display: flex; gap: 14px; justify-content: center; margin-top: 18px; }
</style>
