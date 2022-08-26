<template>
  <div class="col-start-2 col-span-5 mb-12">
    <h1 class="text-6xl capitalize">{{ title }}</h1>
  </div>
</template>

<script>
// Needs to live inside a grid, preferably .grid.grid-cols-12.gap-2
// @TODO: Need a way to allow optional <p> tags with additional logic (like links) to live underneath the header tag
export default {
  name: "BasicHero",
  props: {
    title: {
      type: String,
      default: "Hero Section",
    },
  },
};
</script>
