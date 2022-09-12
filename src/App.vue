<template>
  <div class="p-5">
    <jos-table :data="data" :columns="columns">
      <template #hobbies="{ row }">
        <jos-badge v-for="item in row" :key="item">{{ item }}</jos-badge>
      </template>
    </jos-table>
  </div>
</template>

<script>
import { JosTable, JosBadge } from "@joscode/ui";
import "@joscode/ui/dist/components-lib.css";

export default {
  name: "AppLayout",
  components: {
    JosTable,
    JosBadge,
  },
  data() {
    return {
      data: [
        { id: 1, name: "Josué", age: 19, hobbies: ["Programar", "Correr", "Saltar"] },
        { id: 2, name: "Guillermo", age: 20, hobbies: ["Fotografia"] },
      ],

      columns: [
        { title: "ID", field: "id" },
        { title: "User name", field: "name" },
        { title: "User age", field: "age" },
        { title: "User hobbies", field: "hobbies" },
      ],
    };
  },
  methods: {
    sendEvent(item) {
      console.log(item);
    },
  },
};
</script>
