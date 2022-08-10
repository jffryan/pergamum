<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <div class="col-start-2 col-span-5 border border-blue-700">
      <h1 class="text-6xl mb-12">{{ yearInView }}</h1>
      <quick-links layout="horizontal" :linkset="yearsLinks" />
    </div>
    <div class="col-start-2 col-span-10 border border-red-700">
      <shelf-table :shelf-selection="setShelf" />
    </div>
  </div>
</template>

<script>
// @Todo: Make this page have dynamic imports to pull the proper shelf table data
import ShelfTable from "@/components/shelves/ShelfTable.vue";
import QuickLinks from "@/components/navigation/QuickLinks.vue";

export default {
  name: "YearView",
  components: {
    ShelfTable,
    QuickLinks,
  },
  data() {
    return {
      // @TODO: Observing that this has now been repeated twice. Need a better way to do it.
      yearsLinks: [
        {
          path: "/shelf/2022",
          text: "2022",
        },
        {
          path: "/shelf/2021",
          text: "2021",
        },
        {
          path: "/shelf/2020",
          text: "2020",
        },
        {
          path: "/shelf/2019",
          text: "2019",
        },
        {
          path: "/shelf/2018",
          text: "2018",
        },
      ],
    };
  },
  computed: {
    yearInView() {
      const that = this;
      return that.$route.params.year;
    },
    setShelf() {
      const that = this;
      return that.$route.params.year;
    },
  },
};
</script>
