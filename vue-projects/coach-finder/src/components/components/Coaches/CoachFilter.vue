<template>
  <div class="filter">
    <span v-for="filter in filters" :key="filter">
      {{ capitalizeFirst(filter) }}
      <input type="checkbox" :id="filter" @change="onChangeFilter" />
    </span>
  </div>
</template>

<script lang="ts">
interface Items {
  [key: string]: boolean | string;
}
import { defineComponent } from "vue";

export default defineComponent({
  emits: ['change-filters'],
  data() {
    return {
      filters: ["frontend", "backend", "career"],
      stateFilter: {
        frontend: false,
        backend: false,
        career: false,
      } as Items,
    };
  },

  methods: {
    onChangeFilter(event: any) {
      let value: string = event.target.id;
      let updatedFilter = this.stateFilter;
      updatedFilter[value] = !updatedFilter[value];
      this.stateFilter = updatedFilter;
      this.$emit('change-filters', this.stateFilter)
    },
  },

  computed: {
    capitalizeFirst() {
      return (str: string) =>
        str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
    },
  },
});
</script>

<style scoped>
.filter {
  display: flex;
  flex-direction: row;
}
</style>
