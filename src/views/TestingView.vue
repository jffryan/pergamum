<template>
  <div
    class="max-w-screen-2xl grid grid-cols-12 gap-2 py-20 text-dreamer-white"
  >
    <basic-hero title="Testing/Demos" />
    <div class="col-start-2 col-span-6">
      <test-create-books class="mb-6" />
      <test-create-authors />
    </div>
  </div>
</template>

<script>
// This is for testing/demoing things in progress
import BasicHero from "@/components/layouts/BasicHero.vue";
import TestCreateAuthors from "@/components/testing/TestCreateAuthors.vue";
import TestCreateBooks from "@/components/testing/TestCreateBooks.vue";

export default {
  name: "TestingView",
  components: {
    BasicHero,
    TestCreateAuthors,
    TestCreateBooks,
  },
};
</script>
