<template>
  <section>
    <div class="grid grid-cols-10 bg-slate-400 mb-2">
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
        <p>Status</p>
      </div>
      <div>
        <p>Duration</p>
      </div>
      <div>
        <p>Awards</p>
      </div>
    </div>
    <book-table />
  </section>
</template>

<script>
import BookTable from "@/components/books/BookTable.vue";
export default {
  name: "ShelfTable",
  components: {
    BookTable,
  },
};
</script>
