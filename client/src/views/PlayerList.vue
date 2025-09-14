<script setup lang="ts">
import type { Player } from '@/type/Player'
import { ref, onMounted } from 'vue'
import { Positions, type PositionId } from '@/enums/PositionEnum'
import { PlayerService } from '@/services/playersService'
import { HttpClient } from '@/services/httpClient'

const httpClient = new HttpClient()
const playerService = new PlayerService(httpClient)

const searchQuery = ref<string>('')

// ポジション
const checkedPositions = ref<string[]>([])

const getLabels = (id: PositionId) => Positions.find((p) => p.id === id)?.label ?? ''

//選手テーブル
const tableHeaders = ['背番号', '選手名', 'ポジション']

// 選手
const players = ref<Player[]>([])

onMounted(async () => {
  try {
    players.value = await playerService.getPlayers()
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div class="page-header">
    <h2 class="page-title">選手一覧</h2>
    <img src="../assets/add_circle.svg" class="add-icon" alt="追加" />
  </div>

  <div class="search-container">
    <div class="search-header">
      <h3 class="fw-bold">選手検索</h3>
    </div>
    <div class="search-area">
      <div class="player-name-section">
        <p>選手名</p>
        <input v-model="searchQuery" type="text" placeholder="選手名で検索" class="search-input" />
      </div>

      <div class="position-name-section">
        <p>ポジション</p>
        <div class="position-filters">
          <label v-for="position of Positions" :key="position.id" class="position-label">
            <input type="checkbox" :value="position" v-model="checkedPositions" />
            {{ position.label }}
          </label>
        </div>
      </div>
    </div>
  </div>

  <div class="table-wrapper">
    <table class="table">
      <thead>
        <tr>
          <th v-for="header in tableHeaders" :key="header">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player.id">
          <td>{{ player.jerseyNumber }}</td>
          <td>{{ player.fullName }}</td>
          <td>{{ getLabels(player.position) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.position-filters {
  display: flex;
  gap: 1rem;
  padding: 0.4rem 0.6rem 0.4rem 0;
}

.position-label {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
