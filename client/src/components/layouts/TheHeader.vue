<template>
  <header class="header">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/src/assets/sports_soccer.svg" alt="logo" />
          <span class="mt-1 brand-text">HubFootball</span>
        </a>
      </div>
    </nav>
  </header>

  <div class="layout d-flex">
    <aside class="sidebar bg-light border-end p-3" :class="{ closed: !isSidebarOpen }">
      <button class="collapse-btn" @click="isSidebarOpen = !isSidebarOpen">&#9776;</button>

      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link v-if="isSidebarOpen" class="nav-link active" to="/playerlist"
            ><span>選手一覧</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link v-if="isSidebarOpen" class="nav-link" to="/formation"
            ><span>フォーメーション作成</span></router-link
          >
        </li>
      </ul>
    </aside>
    <main class="main flex-grow-1 p-3" :class="{ expanded: !isSidebarOpen }">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isSidebarOpen = ref(true)
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
}

.layout {
  height: 95vh;
}

.sidebar {
  width: 250px;
  background-color: #e9f5e9;
  transition:
  width 0.3s ease,
  transform 0.3s ease;
  position: relative;

  &.closed {
    width: 60px;
  }
}

.collapse-btn {
  position: absolute;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
  background-color: #198754;
  }
}

.main {
  transition: margin-left 0.3s ease;
  background-color: #f8f9fa;
}

.navbar {
  background: linear-gradient(90deg, #198754, #28a745);
}

.navbar .container-fluid {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-text {
  display: inline-block;
  margin-left: 0.5rem;
  color: #fff;
  line-height: 1;
  font-size: 1.3rem;
}

.nav {
  margin-top: 3rem;
}

.nav-link {
  text-decoration: none;
  color: #155724;

  &.hover {
    text-decoration: none;
    background-color: #c3e6cb;
  }

  &.active {
    font-weight: 700;
    background-color: #d4edda;
  }
}
</style>
