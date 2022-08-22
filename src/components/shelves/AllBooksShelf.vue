<template>
  <main>
    <ol>
      <book-card v-for="book in books" :key="book.id" :book="book" />
    </ol>
  </main>
</template>

<script>
import axios from "axios";

import BookCard from "@/components/books/BookCard.vue";

export default {
  name: "AllBooksShelf",
  components: {
    BookCard,
  },
  data() {
    return {
      books: [],
    };
  },
  async mounted() {
    const that = this;
    const url = "http://localhost:3000/books";

    const response = await axios.get(url);
    that.books = response.data;
  },
};
</script>
