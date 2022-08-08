<template>
  <main-nav />
</template>

<script>
const { default: MainNav } = require("./components/navigation/MainNav.vue");

export default {
  name: "App",
  components: { MainNav },
};
</script>
