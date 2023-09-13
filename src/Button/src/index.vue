<template>
  <button class="my-button" @click="$emit('click', $event)">111
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
defineEmits(['click']);
</script>

<style scoped lang="scss">
.my-button {
  color: aqua;
  background-color: antiquewhite;
}
</style>
