<template>
  <div class="grid grid-cols-12 gap-2 py-20">
    <basic-hero title="Archive" />
  </div>
</template>

<script>
// @todo: This should list past years + other miscellaneous subnavigation (best of lists? etc)
import BasicHero from "@/components/layouts/BasicHero.vue";
export default {
  name: "ArchiveView",
  components: {
    BasicHero,
  },
};
</script>
