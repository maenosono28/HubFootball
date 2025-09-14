<template>
  <button
    :class="['base-button', typeClass, sizeClass]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  type: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  disabled: { type: Boolean, default: false },
})

const typeClass = `base-button--${props.type}`
const sizeClass = `base-button--${props.size}`
</script>

<style lang="scss" scoped>
.base-button {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;

  &--primary {
    background-color: #28a745;
    color: #fff;
  }

  &--secondary {
    background-color: #6c757d;
    color: #fff;
  }

  &--danger {
    background-color: #dc3545;
    color: #fff;
  }

  &--sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
  }

  &--md {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  &--lg {
    padding: 0.75rem 1.5rem;
    font-size: 1.2rem;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
