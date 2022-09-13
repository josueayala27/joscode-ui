<template>
  <span
    @click="$emit('click')"
    class="px-[6px] py-[4px] bg-green-100 text-green-500 rounded-md text-sm transition-all duration-300">
    <slot />
  </span>
</template>

<script lang="js">
export default {
  name: 'JosBadgeComponent',
};
</script>
