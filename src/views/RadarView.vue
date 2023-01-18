<template>
  <div
    class="max-w-screen-2xl grid grid-cols-12 gap-2 py-20 text-dreamer-white"
  >
    <basic-hero title="On my radar" />
    <div class="col-start-2 col-span-6"></div>
  </div>
</template>

<script>
// @todo: Basically a Books view but for books I haven't purchased yet. Probably redundant.

import BasicHero from "@/components/layouts/BasicHero.vue";

export default {
  name: "RadarView",
  components: {
    BasicHero,
  },
};
</script>
