<template>
  <div class="grid grid-cols-12 gap-2 py-20 text-dreamer-white">
    <basic-hero :title="genre" />
    <div class="col-start-2 col-span-6">
      <action-button
        button-text="Back"
        button-type="accent"
        @click="$router.go(-1)"
      />
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/common/ActionButton.vue";
import BasicHero from "@/components/layouts/BasicHero.vue";
export default {
  name: "TGenreView",
  components: {
    ActionButton,
    BasicHero,
  },
  data() {
    return {
      genre: "_____",
    };
  },
  mounted() {
    const genreName = this.fakeGenreDb(this.$route.params.id);
    this.genre = genreName;
  },
  methods: {
    fakeGenreDb(id) {
      let genreName = "";
      switch (id) {
        case "1":
          genreName = "Fiction";
          break;
        case "5":
          genreName = "Fantasy";
          break;
        case "6":
          genreName = "Philosophy";
          break;
        case "9":
          genreName = "Horror";
          break;
        case "13":
          genreName = "History";
          break;
      }
      return genreName;
    },
  },
};
</script>
