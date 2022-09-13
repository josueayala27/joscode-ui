<template>
  <div class="overflow-x-auto">
    <div class="table">
      <!-- Table header -->
      <div class="table-row">
        <div
          :style="[
            {
              [column.sticky]: getOffset(offset[i], [column.sticky]) + 'px',
              position: column.sticky ? 'sticky' : '',
            },
          ]"
          :id="`table-header-${i + 1}`"
          class="px-3 py-2 table-cell bg-gray-100"
          v-for="(column, i) in columns"
          :key="i">
          {{ column.title }}
        </div>
      </div>

      <!-- Table content -->
      <div
        v-for="(item, j) in data"
        :key="j"
        class="cursor-default hover:bg-gray-50 table-row">
        <div
          :style="[
            {
              [column.sticky]: getOffset(offset[i], [column.sticky]) + 'px',
              position: column.sticky ? 'sticky' : '',
            },
          ]"
          class="px-3 py-2 table-cell align-middle whitespace-nowrap bg-white transition-all duration-300"
          v-for="(column, i) in columns"
          :key="i">
          <slot :row="item[column.field]" :column="item" :name="column.field">
            <span> {{ item[column.field] }}</span>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'JosTableComponent',
  props: ['data', 'columns'],
  data() {
    return {
      offset: [],
    };
  },
  mounted() {
    this.columns.forEach((_, i) => {
      const header = document.getElementById(`table-header-${i + 1}`);
      this.offset.push({
        left: header.previousSibling?.clientWidth ?? 0,
        right: header.nextSibling?.clientWidth ?? 0,
      });
    })
  },
  methods: {
    getOffset: (a, b) => a?.[b],
  },
};
</script>
