<template>
  <span
    @click="$emit('click')"
    class="px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-sm cursor-pointer transition-all duration-300"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: "JosBadgeComponent",
};
</script>
