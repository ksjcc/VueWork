<script setup>
// 首屏 Hero 区域：主标题 + 副标题 + 两个 CTA
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import CountUpNumber from './CountUpNumber.vue'
import StatItem from './StatItem.vue'
import { stats } from '../data.js'

const router = useRouter()
const showToast = inject('showToast')

function learnMore() {
  // javascript:void(0) 场景：点击不跳转，仅弹提示
  showToast('更多功能正在开发中，敬请期待', 'info')
}
</script>

<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-text">
        <h1>校园课程<span class="hl">学习中心</span></h1>
        <p class="hero-sub">
          一站式浏览课程、查询成绩、探索前端交互技巧。<br />
          基于 <b>Vue 3</b> + <b>Vite</b> 构建的单页应用，包含 4 个页面与 18 个单文件组件。
        </p>
        <div class="hero-actions">
          <button class="btn" @click="router.push('/courses')">开始选课 →</button>
          <!-- 第二个 CTA：href="javascript:void(0)" 不跳转，只触发事件 -->
          <a href="javascript:void(0)" class="btn ghost" @click="learnMore">了解更多</a>
        </div>
      </div>

      <div class="hero-stats card">
        <StatItem v-for="s in stats" :key="s.label" :stat="s" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(160deg, var(--primary-light) 0%, var(--bg) 100%);
  padding: 72px 0;
}
.hero-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}
.hero-text h1 { font-size: 44px; font-weight: 900; line-height: 1.2; }
.hl { color: var(--primary); }
.hero-sub { color: var(--text-sub); margin: 16px 0 28px; font-size: 16px; }
.hero-actions { display: flex; gap: 14px; }
.hero-stats {
  display: flex;
  gap: 36px;
  padding: 28px 36px;
  flex-wrap: wrap;
}
.stat { text-align: center; }
.stat-label { display: block; color: var(--text-sub); font-size: 13px; margin-top: 4px; }
@media (max-width: 800px) { .hero-text h1 { font-size: 32px; } }
</style>
