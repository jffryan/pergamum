<template>
  <div
    class="px-2 py-1 font-medium rounded transition duration-150 ease-out text-dreamer-purple-dark bg-dreamer-balanced-purple-offwhite hover:bg-dreamer-soft-purple-dark"
  >
    <router-link
      :to="'/genres/view/' + genreId"
      class="border-dreamer-purple-dark hover:underline hover:underline-offset-2"
      >{{ genreName }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: "GenreButton",
  props: {
    genreName: {
      type: String,
      default: "404",
    },
    genreId: {
      type: String,
      default: "all",
    },
  },
};
</script>
