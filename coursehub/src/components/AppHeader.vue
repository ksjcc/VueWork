<script setup>
// 顶部导航栏：普通导航用 router-link，“登录 / 注册”用 javascript:void(0) 打开弹窗
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import ModalDialog from './ModalDialog.vue'

const router = useRouter()
const showToast = inject('showToast')
const loginVisible = ref(false)
const form = ref({ account: '', password: '' })

function openLogin() {
  loginVisible.value = true
}

function submitLogin() {
  if (!form.value.account || !form.value.password) {
    showToast('请输入账号和密码', 'error')
    return
  }
  loginVisible.value = false
  showToast(`欢迎回来，${form.value.account}！（演示登录）`, 'success')
  form.value.account = ''
  form.value.password = ''
}
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <div class="logo" @click="router.push('/')">
        <span class="logo-badge">CH</span>
        Course<span class="logo-accent">Hub</span>
      </div>

      <nav class="nav">
        <router-link to="/" exact-active-class="active">首页</router-link>
        <router-link to="/courses" active-class="active">课程中心</router-link>
        <router-link to="/about" active-class="active">关于本站</router-link>
      </nav>

      <div class="actions">
        <ThemeToggle />
        <!-- 关键知识点：href="javascript:void(0)" 阻止跳转，由点击事件接管 -->
        <a href="javascript:void(0)" class="btn ghost login-btn" @click="openLogin">登录 / 注册</a>
      </div>
    </div>
  </header>

  <ModalDialog v-model="loginVisible" title="登录 CourseHub">
    <div class="login-form">
      <input v-model="form.account" placeholder="账号" />
      <input v-model="form.password" type="password" placeholder="密码" />
      <button class="btn" style="width: 100%" @click="submitLogin">登 录</button>
    </div>
  </ModalDialog>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--card);
  border-bottom: 1px solid var(--border);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}
.logo {
  font-size: 22px;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-badge {
  background: var(--primary);
  color: #fff;
  border-radius: 8px;
  padding: 3px 8px;
  font-size: 15px;
}
.logo-accent { color: var(--primary); }
.nav { display: flex; gap: 28px; }
.nav a { color: var(--text-sub); font-weight: 600; font-size: 15px; padding: 6px 0; }
.nav a.active, .nav a:hover { color: var(--primary); border-bottom: 2px solid var(--primary); }
.actions { display: flex; align-items: center; gap: 12px; }
.login-btn { padding: 8px 16px; }
.login-form { display: flex; flex-direction: column; gap: 14px; }
.login-form input {
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--bg);
  color: var(--text);
}
</style>
