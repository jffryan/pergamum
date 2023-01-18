<template>
  <div class="p-4 bg-dreamer-purple-dark">
    <div id="buttons">
      <action-button
        class="mr-4"
        button-text="Create books"
        button-type="secondary"
        @click="createBooks"
      />
      <action-button
        class="mr-4"
        button-text="Fetch books"
        button-type="secondary"
        @click="fetchBooks"
      />
      <action-button
        button-text="Delete books"
        button-type="accent"
        @click="deleteBooks"
      />
    </div>
  </div>
</template>

<script>
import { addBook, getAllBooks, deleteBook } from "@/api/bookController.js";
import { booksToCreate } from "@/utils/mockData/TestDummyData.js";
import ActionButton from "@/components/common/ActionButton.vue";
export default {
  name: "TestCreateData",
  components: {
    ActionButton,
  },
  data() {
    return {
      booksToCreate,
      fetchedBooks: [],
    };
  },
  computed: {
    idsToDelete() {
      let currentBooks = this.fetchedBooks;
      if (currentBooks.length === 0) {
        console.log("YOU ARE RUNNING ON ZERO BOOKS");
        return null;
      } else {
        console.log("YOU ARE RUNNING ON NONZERO BOOKS");
        let idList = [];
        currentBooks.forEach((book) => {
          idList.push(book.book_id);
        });
        return idList;
      }
    },
  },
  methods: {
    createBooks() {
      console.log("Create books");
      this.booksToCreate.forEach((book) => {
        addBook(book);
      });
    },
    async fetchBooks() {
      console.log("Fetch books");
      const response = await getAllBooks();
      this.fetchedBooks = response.data;
      console.log(this.fetchedBooks);
    },
    deleteBooks() {
      console.log("Delete books");
      this.idsToDelete.forEach((id) => {
        deleteBook(id);
      });
    },
  },
};
</script>
