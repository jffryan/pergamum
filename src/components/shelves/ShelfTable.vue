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
    <div v-for="(book, i) in shelfSelection" :key="book.id">
      <book-table
        v-if="i % 2 === 0"
        :book-details="shelfSelection[i]"
        class="py-1"
      />
      <book-table
        v-else
        :book-details="shelfSelection[i]"
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
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      allBooks,
    };
  },
};
</script>
