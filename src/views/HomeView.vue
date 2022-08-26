<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <basic-hero title="Pergamum" />
    <div class="col-start-2 col-span-10">
      <h2 class="text-4xl mb-8">Links</h2>
      <div class="grid grid-cols-4 gap-x-2">
        <quick-links
          layout="vertical"
          :linkset="booksMenu.links"
          :menu-title="booksMenu.title"
        />
        <quick-links
          layout="vertical"
          :linkset="yearsMenu.links"
          :menu-title="yearsMenu.title"
        />
        <quick-links
          layout="vertical"
          :linkset="archiveMenu.links"
          :menu-title="archiveMenu.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @todo: figure out what should go on the home section
import BasicHero from "@/components/layouts/BasicHero.vue";
import QuickLinks from "@/components/navigation/QuickLinks.vue";

// Quicklinks config settings from utils
// @TODO: Is this the best implementation? Idk if it should live here but it's interesting to me.
import quickLinksConfig from "@/utils/quickLinksConfig.js";
const {
  books: booksMenu,
  years: yearsMenu,
  archive: archiveMenu,
} = quickLinksConfig;

export default {
  name: "HomeView",
  components: {
    BasicHero,
    QuickLinks,
  },
  data() {
    return {
      booksMenu,
      yearsMenu,
      archiveMenu,
    };
  },
};
</script>
