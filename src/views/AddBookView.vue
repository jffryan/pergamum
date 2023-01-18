<template>
  <div class="grid grid-cols-12 gap-2 py-20 text-white">
    <basic-hero title="Add Book" />
    <div class="col-start-2 col-span-10">
      <add-book-form />
    </div>
    <!-- <action-button
      button-text="Click me"
      button-type="primary"
      @click="setDeleteBook(book_id)"
    /> -->
  </div>
</template>

<script>
// import ActionButton from "@/components/common/ActionButton.vue";
import AddBookForm from "@/components/forms/AddBookForm.vue";
import BasicHero from "@/components/layouts/BasicHero.vue";
// import addBook from "@/api/addBook.js";
import deleteBook from "@/api/deleteBook.js";
// @todo: There is no way on earth this should be a page and not just a component living inside a parent page container
// I'm just adding this for the sake of linking up the entire menu to something reactive
export default {
  name: "AddBookView",
  components: {
    // ActionButton,
    AddBookForm,
    BasicHero,
  },
  data() {
    return {
      book_id: "c04a1192-4113-45c8-a43c-e647d0f09634",
    };
  },
  methods: {
    async setDeleteBook(book_id) {
      await deleteBook(book_id);
    },
  },
};
</script>
