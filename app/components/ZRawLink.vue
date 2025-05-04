<template>
  <a :href="to" class="z-raw-link">
    <slot />
  </a>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.z-raw-link {
  text-decoration: none;
  color: inherit;
}
</style>
