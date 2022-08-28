<template>
  <div class="grid grid-cols-12 gap-2 py-20">
    <basic-hero :title="genreInView" />
    <div class="col-start-2 col-span-10">
      <div class="pb-4 flex justify-between">
        <router-link :to="{ name: 'books' }">Back to all books</router-link>
        <div>
          <button
            class="pr-2 pb-2 hover:underline"
            @click="setShelfStyle('card')"
          >
            Card
          </button>
          <button
            class="pr-2 pb-2 hover:underline"
            @click="setShelfStyle('table')"
          >
            Table
          </button>
        </div>
      </div>
      <card-shelf v-if="shelfStyle === 'card'" />
      <table-shelf v-if="shelfStyle === 'table'" />
    </div>
  </div>
</template>

<script>
// @todo: Display genres + merge & refactor with other shelves
import BasicHero from "@/components/layouts/BasicHero.vue";
import CardShelf from "@/components/shelves/CardShelf.vue";
import TableShelf from "@/components/shelves/TableShelf.vue";

import {
  FETCH_BOOKS,
  FILTER_THROUGH_BOOKS,
  SET_FILTER_BY_GENRE,
} from "@/store/variables";

export default {
  name: "GenreView",
  components: {
    BasicHero,
    CardShelf,
    TableShelf,
  },
  data() {
    return {
      shelfStyle: "card",
    };
  },
  computed: {
    genreInView() {
      const that = this;
      return that.$route.params.genre;
    },
  },
  async mounted() {
    await this.$store.dispatch(FETCH_BOOKS);
    this.updateGenreFilter(this.genreInView);
  },
  updated() {
    this.updateGenreFilter(this.genreInView);
  },
  unmounted() {
    this.updateGenreFilter(null);
  },
  methods: {
    updateGenreFilter(genre) {
      this.$store.commit(SET_FILTER_BY_GENRE, genre);
      this.$store.commit(FILTER_THROUGH_BOOKS);
    },
    setShelfStyle(shelfStyle) {
      this.shelfStyle = shelfStyle;
    },
  },
};
</script>
