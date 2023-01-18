<template>
  <div>
    <book-detail class="bg-dreamer-purple-dark mb-6" :book="book" />
    <book-detail class="bg-dreamer-purple-dark mb-6" :book="finishedBook" />
    <book-detail class="bg-dreamer-purple-dark mb-6" :book="variantPaperback" />
    <!-- Actually... tbd how to implement variants -->
    <book-detail class="bg-dreamer-purple-dark" :book="variantAudiobook" />
  </div>
</template>

<script>
import {
  finishedBook,
  sampleBook,
  variantAudiobook,
  variantPaperback,
} from "@/utils/mockData/basicBook.js";

import BookDetail from "@/components/books/tempBook/BookDetail.vue";

export default {
  name: "TestBookDetails",
  components: {
    BookDetail,
  },
  data() {
    return {
      book: sampleBook,
      finishedBook,
      variantAudiobook,
      variantPaperback,
    };
  },
};
</script>
