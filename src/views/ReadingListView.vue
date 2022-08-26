<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <basic-hero title="Reading list" />
    <div class="col-start-2 col-span-5">
      <p>
        View all unfinished books
        <router-link to="/shelf/unfinished">here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
// @todo: Display books that I have purchased but haven't read. Recommend books to be read next
// @todo: Make an interactive recommender based off filters
import BasicHero from "@/components/layouts/BasicHero.vue";
export default {
  name: "ReadingListView",
  components: {
    BasicHero,
  },
};
</script>
