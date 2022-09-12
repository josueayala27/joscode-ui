<template>
  <table>
    <thead class="bg-gray-300">
      <tr>
        <th class="px-3 py-2" v-for="(column, i) in columns" :key="i">
          {{ column.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, j) in data" :key="j" class="cursor-default hover:bg-gray-100">
        <td class="px-3 py-2" v-for="(column, i) in columns" :key="i">
          <slot :row="item[column.field]" :column="item" :name="column.field">
            <span>{{ item[column.field] }}</span>
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "JosTableComponent",
  props: ["data", "columns"],
  mounted() {},
};
</script>
