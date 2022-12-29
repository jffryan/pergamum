<template>
  <div class="grid grid-cols-12 gap-2 py-20">
    <div class="col-start-2 col-span-8">
      <h1 class="text-6xl capitalize mb-4">{{ currentBook.title }}</h1>
      <h2 class="mb-2 text-2xl">
        <span v-for="author in currentBook.author" :key="author" class="mr-5">
          By {{ author }}
        </span>
      </h2>
    </div>
    <div class="col-start-2 col-span-8">
      <button class="px-4 py-2 active">Overview</button>
      <button class="px-4 py-2">Notes</button>
      <button class="px-4 py-2">Similar Books</button>
    </div>
    <div class="col-start-2 col-span-6">
      <div class="border rounded border-brand-gray-1 p-4">
        <p class="text-slate-500">
          Format: <span class="text-slate-700">{{ currentBook.bookType }}</span>
        </p>
        <p class="text-slate-500">
          Page count:
          <span class="text-slate-700">{{ currentBook.pageCount }}</span>
        </p>
        <p class="text-slate-500">
          Genres:
          <router-link
            v-for="(cat, i) in currentBook.genre"
            :key="cat"
            :to="{
              name: 'genreView',
              params: { genre: cat.toLowerCase() },
            }"
          >
            <span v-if="i < currentBook.genre.length - 1" class="text-slate-700"
              >{{ cat }},&nbsp;</span
            >
            <span v-else class="text-slate-700">{{ cat }}</span>
          </router-link>
        </p>

        <p class="text-slate-500">
          Published: <span class="text-slate-700">[year published]</span>
        </p>
        <p class="text-slate-500">
          Subjects: <span class="text-slate-700">[Separate from genres]</span>
        </p>
      </div>
    </div>
    <div class="col-start-8 col-span-4 border rounded border-brand-gray-1 p-4">
      <div v-if="currentBook.dateRead.year !== null">
        <p class="text-slate-500">
          Finished on:
          <span class="text-slate-700"
            >{{ currentBook.dateRead.month }}/{{ currentBook.dateRead.day }}/{{
              currentBook.dateRead.year
            }}</span
          >
        </p>
      </div>
      <div v-else>
        <p class="text-slate-700">Not yet completed.</p>
      </div>
    </div>
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
    this.currentBook = this.books[this.bookId - 1];
  },
};
</script>

<style scoped>
.active {
  @apply border-b-2 border-dreamer-purple-base;
}
</style>
