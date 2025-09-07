<script setup lang="ts">
import { Position } from '@/enums/PositionEnum'
import { ref } from 'vue'

const searchQuery = ref<string>('')

//ポジション
const positions = Object.values(Position)
const checkedPositions = ref<string[]>([])
</script>

<template>
  <h2 class="page-title">選手一覧</h2>

  <div class="search-container">
    <input v-model="searchQuery" type="text" placeholder="選手名で検索" class="search-input" />

    <div class="position-filters">
      <label v-for="position in positions" :key="position" class="position-label">
        <input type="checkbox" :value="position" v-model="checkedPositions" />
        {{ position }}
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  border-left: 4px solid #28a745;
  padding-left: 10px;
  margin-bottom: 1rem;
}

.search-container {
  display: flex;

  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  background-color: #e9f5e9;
  padding: 1rem;
  border-radius: 8px;
}

.search-input {
  //   flex: 1;
  padding: 0.4rem 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

.position-filters {
  display: flex;
  gap: 0.5rem;
}

.position-label {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
  cursor: pointer;
}
</style>
