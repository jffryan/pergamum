<template>
  <main>
    <p v-if="currentPageParams">{{ currentPageParams }}</p>
    <p v-if="currentPageQuery">{{ currentPageQuery }}</p>
    <ol>
      <book-card v-for="book in books" :key="book.id" :book="book" />
    </ol>
  </main>
</template>

<script>
import axios from "axios";

import BookCard from "@/components/books/BookCard.vue";

import { isEmptyObject } from "@/utils/common";

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
  computed: {
    currentPageParams() {
      const that = this;
      const currentParam = that.$route.params;
      return isEmptyObject(currentParam) ? null : currentParam;
    },
    currentPageQuery() {
      const that = this;
      const currentQueryParam = that.$route.query;
      return isEmptyObject(currentQueryParam) ? null : currentQueryParam;
    },
  },
  async mounted() {
    const that = this;
    const url = "http://localhost:3000/books";

    const response = await axios.get(url);
    that.books = response.data;
  },
};
</script>
