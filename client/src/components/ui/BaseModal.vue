<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <header class="modal-header">
        <slot name="header">
          <h3>{{ title }}</h3>
        </slot>
        <button class="close-btn" @click="close">&times;</button>
      </header>

      <main class="modal-body">
        <slot></slot>
      </main>

      <footer class="modal-footer">
        <slot name="footer">
          <button @click="close">閉じる</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  isOpen: { type: Boolean, default: false },
  title: { type: String, default: '' },
})

const emit = defineEmits(['update:isOpen'])

const close = () => {
  emit('update:isOpen', false)
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.close-btn {
  font-size: 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
}

.modal-body {
  padding: 1rem;
}

.modal-footer {
  padding: 1rem;
  border-top: 1px solid #eee;
  text-align: right;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
