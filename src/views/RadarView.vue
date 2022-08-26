<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <basic-hero title="On my radar" />
    <div class="col-start-2 col-span-5">
      <p>
        Meaning, books that I'm curious about but haven't found or purchased.
      </p>
    </div>
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
