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

import {
  FETCH_BOOKS,
  FILTER_THROUGH_BOOKS,
  SET_FILTER_BY_YEAR,
} from "@/store/variables";
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
    ...mapState(["books"]),
  },
  async mounted() {
    await this.$store.dispatch(FETCH_BOOKS);
    this.updateYearFilter();
  },
  updated() {
    this.updateYearFilter();
  },
  methods: {
    updateYearFilter() {
      this.$store.commit(SET_FILTER_BY_YEAR, this.yearInView);
      this.$store.commit(FILTER_THROUGH_BOOKS);
    },
  },
};
</script>
