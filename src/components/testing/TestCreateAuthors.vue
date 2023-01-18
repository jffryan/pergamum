<template>
  <div class="p-4 bg-dreamer-purple-dark">
    <div id="buttons">
      <action-button
        class="mr-4"
        button-text="Create authors"
        button-type="secondary"
        @click="createAuthors"
      />
      <action-button
        class="mr-4"
        button-text="Fetch authors"
        button-type="secondary"
        @click="fetchAuthors"
      />
      <action-button
        button-text="Delete authors"
        button-type="accent"
        @click="deleteAuthors"
      />
    </div>
  </div>
</template>

<script>
import {
  addAuthor,
  getAllAuthors,
  deleteAuthor,
} from "@/api/authorController.js";
import { authorsToCreate } from "@/utils/mockData/TestDummyData.js";
import ActionButton from "@/components/common/ActionButton.vue";
export default {
  name: "TestCreateData",
  components: {
    ActionButton,
  },
  data() {
    return {
      authorsToCreate,
      fetchedAuthors: [],
    };
  },
  computed: {
    idsToDelete() {
      let currentAuthors = this.fetchedAuthors;
      if (currentAuthors.length === 0) {
        return null;
      } else {
        let idList = [];
        currentAuthors.forEach((author) => {
          idList.push(author.author_id);
        });
        return idList;
      }
    },
  },
  methods: {
    createAuthors() {
      this.authorsToCreate.forEach((author) => {
        addAuthor(author);
      });
      console.log("Authors created.");
    },
    async fetchAuthors() {
      const response = await getAllAuthors();
      this.fetchedAuthors = response.data;
      console.log("Authors fetched.");
    },
    deleteAuthors() {
      if (this.idsToDelete) {
        this.idsToDelete.forEach((id) => {
          deleteAuthor(id);
        });
        console.log("Authors deleted");
      } else {
        console.log("No IDs to delete");
      }
    },
  },
};
</script>
