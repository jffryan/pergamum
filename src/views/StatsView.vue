<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <basic-hero title="Stats" />
  </div>
</template>

<script>
// @todo: Display stats about books in the library, books read, etc.
import BasicHero from "@/components/layouts/BasicHero.vue";
export default {
  name: "StatsView",
  components: {
    BasicHero,
  },
};
</script>
