<template>
  <div class="wrapper bg-dreamer-purple-black">
    <main-nav />
    <router-view />
    <default-footer />
  </div>
</template>

<script>
import DefaultFooter from "@/components/footers/DefaultFooter.vue";
import MainNav from "@/components/navigation/MainNav.vue";

export default {
  name: "App",
  components: {
    DefaultFooter,
    MainNav,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;

  min-height: 100vh;
}
</style>
