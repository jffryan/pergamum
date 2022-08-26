<template>
  <main class="flex-auto p-8 bg-brand-gray-1">
    <ol>
      <book-card v-for="book in displayedBooks" :key="book.id" :book="book" />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'books', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="previous-page-link"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'books', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="next-page-link"
            >Next</router-link
          >
        </div>
      </div>
    </div>
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
    // currentPageParams() {
    //   const that = this;
    //   const currentParam = that.$route.params;
    //   return isEmptyObject(currentParam) ? null : currentParam;
    // },
    currentPageQuery() {
      const that = this;
      const currentQueryParam = that.$route.query;
      return isEmptyObject(currentQueryParam) ? "1" : currentQueryParam.page;
    },
    currentPage() {
      // @todo: Expand this to basically take in filters
      const that = this;
      const pageString = that.currentPageQuery;
      return Number.parseInt(pageString);
    },
    previousPage() {
      const that = this;
      const previousPage = that.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : null;
    },
    nextPage() {
      const that = this;
      const nextPage = that.currentPage + 1;
      // Need to include non-whole number values
      const maxPage = Math.ceil(that.books.length / 10);
      // Only navigate forward if the next page is less than the greatest possible index
      return nextPage <= maxPage ? nextPage : null;
    },
    displayedBooks() {
      const that = this;
      const firstIndex = (that.currentPage - 1) * 10;
      const lastIndex = that.currentPage * 10;
      return that.books.slice(firstIndex, lastIndex);
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
