<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <basic-hero title="Books" />
    <div class="col-start-2 col-span-10">
      <card-shelf />
    </div>
  </div>
</template>

<script>
// @todo: This should register a paginated/filterable/queryable list of books I own

import CardShelf from "@/components/shelves/CardShelf";
import BasicHero from "@/components/layouts/BasicHero.vue";

import { FETCH_BOOKS } from "@/store/variables";

export default {
  name: "BooksView",
  components: {
    CardShelf,
    BasicHero,
  },
  mounted() {
    this.$store.dispatch(FETCH_BOOKS);
  },
};
</script>
