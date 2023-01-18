<template>
  <div class="grid grid-cols-12 gap-2 py-20 text-dreamer-white">
    <basic-hero title="Books" />
    <div class="col-start-2 col-span-10">
      <table-shelf :displayed-books="books" />
    </div>
  </div>
</template>

<script>
// @todo: This should list past years + other miscellaneous subnavigation (best of lists? etc)
// Currently I'm pulling books using mysql
import BasicHero from "@/components/layouts/BasicHero.vue";
import TableShelf from "@/components/shelves/TableShelf.vue";

import { mapState } from "vuex";

import getBooks from "@/api/getAllBooks";
import { FETCH_BOOKS } from "@/store/variables";

export default {
  name: "BooksView",
  components: {
    BasicHero,
    TableShelf,
  },
  data() {
    return {
      books: [],
    };
  },
  computed: {
    displayedBooks() {
      return true;
      // return this.filteredBooks.slice(0, 10);
    },
    ...mapState(["filteredBooks"]),
  },
  async mounted() {
    let bookResponse = await getBooks();
    this.books = bookResponse.data;
    this.$store.dispatch(FETCH_BOOKS);
  },
};
</script>
