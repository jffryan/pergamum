<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <div class="col-start-2 col-span-5 border border-red-700">
      <h1 class="text-6xl">
        Best of <span>{{ interval }}</span>
      </h1>
    </div>
  </div>
</template>

<script>
// @todo: Display best books with notes
export default {
  name: "BestOfView",
  data() {
    return {
      interval: "all-time",
    };
  },
};
</script>
