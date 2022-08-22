<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <div class="col-start-2 col-span-5 mb-12">
      <h1 class="text-6xl">Books</h1>
    </div>
    <div class="col-start-2 col-span-10">
      <all-books-shelf />
    </div>
  </div>
</template>

<script>
// @todo: This should register a paginated/filterable/queryable list of books I own
import AllBooksShelf from "@/components/shelves/AllBooksShelf";
export default {
  name: "BooksView",
  components: {
    AllBooksShelf,
  },
};
</script>
