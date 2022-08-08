<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <div class="col-start-2 col-span-5 border border-red-700">
      <h1 class="text-6xl">{{ yearInView }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "YearView",
  data() {
    return {
      yearInView: 2022,
    };
  },
};
</script>
