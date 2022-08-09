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
// @Todo: Make this page have dynamic imports to pull the proper shelf table data
import ShelfTable from "@/components/shelves/ShelfTable.vue";

export default {
  name: "YearView",
  components: {
    ShelfTable,
  },
  data() {
    const that = this;
    return {
      yearInView: that.$route.params.year,
    };
  },
};
</script>
