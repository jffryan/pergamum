<template>
  <div
    class="max-w-screen-2xl grid grid-cols-12 gap-2 py-20 text-dreamer-white"
  >
    <basic-hero title="On my radar" />
    <div class="col-start-2 col-span-6">
      <book-detail class="bg-dreamer-purple-dark mb-6" :book="book" />
      <book-detail class="bg-dreamer-purple-dark mb-6" :book="finishedBook" />
      <book-detail
        class="bg-dreamer-purple-dark mb-6"
        :book="variantPaperback"
      />
      <!-- Actually... tbd how to implement variants -->
      <book-detail class="bg-dreamer-purple-dark" :book="variantAudiobook" />
    </div>
  </div>
</template>

<script>
// @todo: Basically a Books view but for books I haven't purchased yet. Probably redundant.
import {
  finishedBook,
  sampleBook,
  variantAudiobook,
  variantPaperback,
} from "@/utils/basicBook.js";
import BasicHero from "@/components/layouts/BasicHero.vue";
import BookDetail from "@/components/books/tempBook/BookDetail.vue";

export default {
  name: "RadarView",
  components: {
    BasicHero,
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
