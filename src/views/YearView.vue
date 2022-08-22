<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <div class="col-start-2 col-span-5">
      <h1 class="text-6xl mb-12 capitalize">{{ yearInView }}</h1>
    </div>
    <div class="col-start-2 col-span-10">
      <quick-links layout="horizontal" :linkset="yearsLinks" />
      <shelf-table :shelf-selection="setShelf" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
