<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <basic-hero :title="yearInView" />
    <div class="col-start-2 col-span-10">
      <quick-links layout="horizontal" :linkset="yearsLinks" />
      <table-shelf :shelf-selection="setShelf" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

// @Todo: Make this page have dynamic imports to pull the proper shelf table data
import BasicHero from "@/components/layouts/BasicHero.vue";
import QuickLinks from "@/components/navigation/QuickLinks.vue";
import TableShelf from "@/components/shelves/TableShelf.vue";

import quickLinksConfig from "@/utils/quickLinksConfig.js";
const { years: yearsMenu } = quickLinksConfig;

export default {
  name: "YearView",
  components: {
    BasicHero,
    QuickLinks,
    TableShelf,
  },
  data() {
    return {
      yearsLinks: [
        ...yearsMenu.links,
        {
          path: "/shelf/unfinished",
          text: "Unfinished",
        },
      ],
      books: [],
    };
  },
  computed: {
    yearInView() {
      const that = this;
      return that.$route.params.year;
    },
    setShelf() {
      const that = this;
      const currentFilter = that.$route.params.year;
      const currentShelf = that.filterByYear(that.books, currentFilter);
      return currentShelf;
    },
  },
  async mounted() {
    const that = this;
    const url = "http://localhost:3000/books";

    const response = await axios.get(url);
    that.books = response.data;
  },
  methods: {
    filterByYear(array, year) {
      if (year === "unfinished") {
        const result = array.filter((arr) => arr.dateRead.year === null);
        return result;
      } else {
        const result = array.filter(
          (arr) => arr.dateRead.year === parseInt(year)
        );
        return result;
      }
    },
  },
};
</script>
