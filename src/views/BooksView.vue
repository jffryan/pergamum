<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <basic-hero title="Books" />
    <div class="col-start-2 col-span-10">
      <div class="flex justify-end">
        <button
          class="pr-2 pb-2 hover:underline"
          @click="setShelfStyle('card')"
        >
          Card
        </button>
        <button
          class="pr-2 pb-2 hover:underline"
          @click="setShelfStyle('table')"
        >
          Table
        </button>
      </div>
      <card-shelf v-if="shelfStyle === 'card'" />
      <table-shelf v-if="shelfStyle === 'table'" />
    </div>
  </div>
</template>

<script>
// @todo: This should register a paginated/filterable/queryable list of books I own

import BasicHero from "@/components/layouts/BasicHero.vue";
import CardShelf from "@/components/shelves/CardShelf";
import TableShelf from "@/components/shelves/TableShelf";

import { FETCH_BOOKS } from "@/store/variables";

export default {
  name: "BooksView",
  components: {
    BasicHero,
    CardShelf,
    TableShelf,
  },
  data() {
    return {
      shelfStyle: "card",
    };
  },
  mounted() {
    this.$store.dispatch(FETCH_BOOKS);
  },
  methods: {
    setShelfStyle(shelfStyle) {
      this.shelfStyle = shelfStyle;
    },
  },
};
</script>
