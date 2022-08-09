<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <div class="col-start-2 col-span-5 border border-blue-700">
      <h1 class="text-6xl mb-12">{{ yearInView }}</h1>
    </div>
    <div class="col-start-2 col-span-10 border border-red-700">
      <shelf-table />
    </div>
  </div>
</template>

<script>
// @todo: Make this page dynamic based off url/year, and make this page use programmatic navigation
import ShelfTable from "@/components/shelves/ShelfTable.vue";

export default {
  name: "YearView",
  components: {
    ShelfTable,
  },
  data() {
    return {
      yearInView: 2022,
    };
  },
};
</script>
