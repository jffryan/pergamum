<template>
  <section>
    <div class="grid grid-cols-10 bg-dreamer-purple-base text-white py-2">
      <div class="col-span-3 pl-2">
        <p>Title</p>
      </div>
      <div class="col-span-2">
        <p>Author(s)</p>
      </div>
      <div class="col-span-3">
        <p>Genres</p>
      </div>
      <div>
        <p>Format</p>
      </div>
      <div>
        <p>Page Count</p>
      </div>
    </div>
    <div v-for="(book, i) in displayedBooks" :key="book.version_id">
      <book-table
        v-if="i % 2 === 0"
        class="py-1 h-100 bg-dreamer-gray-text text-black"
        :book-details="book"
      />
      <book-table
        v-else
        class="bg-dreamer-soft-purple-light py-1 h-100 text-black"
        :book-details="book"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

import BookTable from "@/components/books/BookTable.vue";

export default {
  name: "TableShelf",
  components: {
    BookTable,
  },
  props: {
    displayedBooks: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState(["filteredBooks"]),
  },
};
</script>
