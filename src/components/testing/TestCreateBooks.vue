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
      this.booksToCreate.forEach((book) => {
        addBook(book);
      });
      console.log("Books created");
    },
    async fetchBooks() {
      const response = await getAllBooks();
      this.fetchedBooks = response.data;
      console.log("Books fetched.");
    },
    deleteBooks() {
      if (this.idsToDelete) {
        this.idsToDelete.forEach((id) => {
          deleteBook(id);
        });
        console.log("Books deleted");
      } else {
        console.log("No books to delete");
      }
    },
  },
};
</script>
