<template>
  <div class="grid grid-cols-12 gap-2 py-20">
    <div class="col-start-2 col-span-8 text-dreamer-white">
      <h1 class="text-6xl capitalize mb-4">
        {{ currentBook.title }}
      </h1>
      <h2 class="mb-2 text-2xl">{{ currentBook.authors }}</h2>
    </div>
    <div class="col-start-2 col-span-8">
      <button class="px-4 py-2 active text-dreamer-white">Overview</button>
      <button class="px-4 py-2 text-dreamer-white">Notes</button>
      <button class="px-4 py-2 text-dreamer-white">Similar Books</button>
    </div>
    <div class="col-start-2 col-span-6">
      <div class="border rounded border-brand-gray-1 p-4">
        <p class="text-slate-400">
          Format:
          <span class="text-dreamer-white capitalize">{{
            currentBook.format_name
          }}</span>
        </p>
        <p class="text-slate-400">
          Page count:
          <span class="text-dreamer-white">{{ currentBook.num_pages }}</span>
        </p>
        <p class="text-slate-500">
          Genres:
          <span class="text-dreamer-white">{{ currentBook.genres }}</span>
        </p>

        <p class="text-slate-500">
          Published: <span class="text-slate-700">[year published]</span>
        </p>
        <p class="text-slate-500">
          Subjects: <span class="text-slate-700">[Separate from genres]</span>
        </p>
      </div>
    </div>
    <!-- SECTION REMOVED -->
  </div>
</template>

<script>
// @TODO: Add "Did not finish" option with supporting reason
// @TODO: Break this view into components
import { mapState } from "vuex";
export default {
  name: "BookView",
  data() {
    return {
      currentBook: {
        title: "___",
        dateRead: {
          year: null,
        },
      },
    };
  },
  computed: {
    bookId() {
      return this.$route.params.id;
    },
    pageTitle() {
      return `Book ${this.bookId}`;
    },
    ...mapState(["books"]),
  },
  mounted() {
    const getCurrentBook = this.filterCurrentBook(this.$route.params.id);
    this.currentBook = getCurrentBook;
  },
  methods: {
    filterCurrentBook(bookID) {
      if (this.books.length > 0) {
        const filteredBooks = this.books.filter(
          (book) => book.book_id == bookID
        );
        return filteredBooks[0];
      } else {
        console.log("error");
      }
    },
  },
};
</script>

<style scoped>
.active {
  @apply border-b-2 border-dreamer-purple-light;
}
</style>
