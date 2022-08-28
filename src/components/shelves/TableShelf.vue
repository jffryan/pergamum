<template>
  <section>
    <div class="grid grid-cols-10 bg-slate-400 py-2">
      <div class="col-span-2 pl-2">
        <p>Title</p>
      </div>
      <div>
        <p>Author</p>
      </div>
      <div>
        <p>Page Count</p>
      </div>
      <div>
        <p>Date Read</p>
      </div>
      <div>
        <p>Rating</p>
      </div>
      <div>
        <p>Genre</p>
      </div>
      <div>
        <p>Type</p>
      </div>
      <div>
        <p>Duration</p>
      </div>
      <div>
        <p>Awards</p>
      </div>
    </div>
    <div v-for="(book, i) in books" :key="book.id">
      <book-table v-if="i % 2 === 0" :book-details="books[i]" class="py-1" />
      <book-table v-else :book-details="books[i]" class="bg-slate-200 py-1" />
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
  computed: {
    ...mapState(["books"]),
  },
};
</script>
