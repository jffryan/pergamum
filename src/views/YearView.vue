<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <basic-hero :title="yearInView" />
    <div class="col-start-2 col-span-10">
      <quick-links layout="horizontal" :linkset="yearsLinks" />
      <table-shelf />
    </div>
  </div>
</template>

<script>
// @TODO: Make everything downwind of this more agnostic?
import { mapState } from "vuex";

import BasicHero from "@/components/layouts/BasicHero.vue";
import QuickLinks from "@/components/navigation/QuickLinks.vue";
import TableShelf from "@/components/shelves/TableShelf.vue";

import { FETCH_BOOKS } from "@/store/variables";
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
          name: "year",
          params: {
            year: "unfinished",
          },
          text: "Unfinished",
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
      const currentFilter = that.$route.params.year;
      const currentShelf = that.filterByYear(that.books, currentFilter);
      return currentShelf;
    },
    ...mapState(["books"]),
  },
  async mounted() {
    this.$store.dispatch(FETCH_BOOKS);
  },
  methods: {},
};
</script>
