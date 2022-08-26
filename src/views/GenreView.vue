<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <basic-hero :title="genreInView" />
    <div class="col-start-2 col-span-10">
      <all-books-shelf />
    </div>
  </div>
</template>

<script>
// @todo: Display genres + merge & refactor with other shelves
import AllBooksShelf from "@/components/shelves/AllBooksShelf.vue";
import BasicHero from "@/components/layouts/BasicHero.vue";

export default {
  name: "GenreView",
  components: {
    AllBooksShelf,
    BasicHero,
  },
  computed: {
    genreInView() {
      const that = this;
      return that.$route.params.genre;
    },
  },
};
</script>
