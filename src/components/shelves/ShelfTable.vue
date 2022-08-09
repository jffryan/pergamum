<template>
  <section>
    <div class="grid grid-cols-10 bg-slate-400 py-2">
      <div class="col-span-2">
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
    <div v-for="(book, i) in currentShelf" :key="book.id">
      <book-table
        v-if="i % 2 === 0"
        :book-details="currentShelf[i]"
        class="py-1"
      />
      <book-table
        v-else
        :book-details="currentShelf[i]"
        class="bg-slate-200 py-1"
      />
    </div>
  </section>
</template>

<script>
// @TODO: Make this agnostic to a specific object for its data
import allBooks from "@/development/allBooks";
import BookTable from "@/components/books/BookTable.vue";
export default {
  name: "ShelfTable",
  components: {
    BookTable,
  },
  props: {
    shelfSelection: {
      type: String,
      default: "all",
    },
  },
  data() {
    return {
      allBooks,
    };
  },
  computed: {
    currentShelf() {
      const that = this;
      // Long term this won't work because it requires every book to be individually categorized into a shelf type
      // This will make insane amounts of redundant data unless fixed
      return that.allBooks["books" + that.shelfSelection];
    },
  },
};
</script>
