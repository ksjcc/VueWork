<script setup>
// ===== 核心知识点演示：javascript:void(0) =====
// 对比三类链接的行为，直观展示 void(0) “不跳转、只执行事件”的特性
import { ref, onMounted } from 'vue'
import { inject } from 'vue'

const showToast = inject('showToast')

const currentUrl = ref('')
const clickCount = ref(0)

function refreshUrl() {
  currentUrl.value = `${location.pathname}${location.hash}`
}

function addClick() {
  clickCount.value++
}

function demoToast() {
  showToast('点击了 javascript:void(0) 链接：页面未发生任何跳转', 'success')
}

onMounted(() => {
  refreshUrl()
  window.addEventListener('hashchange', refreshUrl)
})
</script>

<template>
  <div class="void-demo card">
    <h3>🔬 知识点演示：<code>javascript:void(0)</code></h3>
    <p class="demo-tip">
      <code>void</code> 是一元运算符，<code>void(0)</code> 返回 <code>undefined</code>。
      把它放在 <code>a</code> 标签的 <code>href</code> 中，点击时页面<b>不会跳转</b>，
      可以安全地为链接绑定自定义点击事件。
    </p>

    <div class="url-bar">
      当前页面地址：<code>{{ currentUrl || '/' }}</code>
      <a href="javascript:void(0)" class="refresh" @click="refreshUrl">刷新地址显示</a>
    </div>

    <table class="cmp-table">
      <thead>
        <tr><th>链接写法</th><th>点击后行为</th><th>演示</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><code>&lt;a href="#"&gt;</code></td>
          <td>跳转到页面顶部，地址栏追加 <code>#</code>，留下历史记录</td>
          <td><a href="#">点击我</a></td>
        </tr>
        <tr>
          <td><code>&lt;a href="javascript:void(0)"&gt;</code></td>
          <td><b>完全无跳转</b>，地址栏不变（推荐占位写法）</td>
          <td><a href="javascript:void(0)" @click="demoToast">点击我（弹提示）</a></td>
        </tr>
        <tr>
          <td><code>&lt;a href="javascript:void(0)" @click="count++"&gt;</code></td>
          <td>不跳转，但正常执行绑定的事件逻辑</td>
          <td><a href="javascript:void(0)" @click="addClick">点击我（计数）</a></td>
        </tr>
      </tbody>
    </table>

    <div class="counter">已点击计数链接 <b>{{ clickCount }}</b> 次，页面始终未跳转</div>
  </div>
</template>

<style scoped>
.void-demo { padding: 26px; }
.void-demo h3 { margin-bottom: 12px; }
.void-demo code {
  background: var(--bg);
  border: 1px solid var(--border);
  padding: 1px 6px;
  border-radius: 6px;
  font-size: 13px;
  color: #d97706;
}
.demo-tip { color: var(--text-sub); font-size: 14px; margin-bottom: 16px; }
.url-bar {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 14px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}
.refresh { color: var(--primary); font-size: 13px; cursor: pointer; }
.cmp-table { width: 100%; border-collapse: collapse; }
.cmp-table th, .cmp-table td { text-align: left; padding: 10px 12px; border-bottom: 1px solid var(--border); font-size: 14px; }
.cmp-table a { color: var(--primary); cursor: pointer; }
.counter { margin-top: 14px; font-size: 14px; color: var(--text-sub); }
</style>
