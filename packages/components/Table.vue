<template>
  <div @scroll="doScroll" class="overflow-x-auto">
    <div class="table">
      <!-- Table header -->
      <div class="table-row">
        <div
          :style="[
            {
              [column.sticky]: widths[i]?.[column.sticky] + 'px',
              position: column.sticky ? 'sticky' : '',
            },
          ]"
          :class="{
            'shadow-2xl': column.sticky === 'left' && shadows.left,
          }"
          :ref="`header-${i}`"
          class="px-3 py-2 table-cell bg-gray-100"
          v-for="(column, i) in columns"
          :key="i"
        >
          {{ column.title }}
        </div>
      </div>

      <!-- Table content -->
      <div v-for="(item, j) in data" :key="j" class="cursor-default hover:bg-gray-50 table-row">
        <div
          :style="[
            {
              [column.sticky]: widths[i]?.[column.sticky] + 'px',
              position: column.sticky ? 'sticky' : '',
            },
          ]"
          :class="{
            'shadow-right': column.sticky === 'left' && shadows.left,
          }"
          class="px-3 py-2 table-cell align-middle whitespace-nowrap bg-white transition-all duration-300"
          v-for="(column, i) in columns"
          :key="i"
        >
          <slot :row="item[column.field]" :column="item" :name="column.field">
            <span> {{ item[column.field] }}</span>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JosTableComponent",
  props: ["data", "columns"],
  data() {
    return {
      widths: [],
      shadows: {
        left: false,
      },
    };
  },
  mounted() {
    Object.keys(this.$refs).forEach((el) => {
      this.widths.push({
        left: this.$refs[el][0].previousSibling?.clientWidth || 0,
        right: this.$refs[el][0].nextSibling?.clientWidth || 0,
      });
    });
  },
  methods: {
    doScroll(event) {
      // console.log(event.target.scrollWidth);
      // if (event.target.scrollLeft) this.shadows.left = true;
      // else this.shadows.left = false;
    },
  },
};
</script>
