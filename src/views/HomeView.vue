<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <basic-hero title="Pergamum" />
    <div class="col-start-2 col-span-10">
      <h2 class="text-4xl mb-8">Links</h2>
      <div class="grid grid-cols-4 gap-x-2">
        <quick-links
          layout="vertical"
          :linkset="booksLinks"
          :menu-title="booksTitle"
        />
        <quick-links
          layout="vertical"
          :linkset="yearsLinks"
          :menu-title="yearsTitle"
        />
        <quick-links
          layout="vertical"
          :linkset="archiveLinks"
          :menu-title="archiveTitle"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @todo: figure out what should go on the home section
import BasicHero from "@/components/layouts/BasicHero.vue";
import QuickLinks from "@/components/navigation/QuickLinks.vue";

export default {
  name: "HomeView",
  components: {
    BasicHero,
    QuickLinks,
  },
  data() {
    return {
      booksLinks: [
        {
          path: "/books",
          text: "All books",
        },
        {
          path: "/books",
          text: "Paper books",
        },
        {
          path: "/books",
          text: "Pirated books",
        },
        {
          path: "/books",
          text: "Audio books",
        },
      ],
      booksTitle: "Books",
      yearsLinks: [
        {
          path: "/shelf/2022",
          text: "2022",
        },
        {
          path: "/shelf/2021",
          text: "2021",
        },
        {
          path: "/shelf/2020",
          text: "2020",
        },
        {
          path: "/shelf/2019",
          text: "2019",
        },
        {
          path: "/shelf/2018",
          text: "2018",
        },
      ],
      yearsTitle: "Years",
      archiveLinks: [
        {
          path: "/archive",
          text: "Archive",
        },
        {
          path: "/archive",
          text: "Notes",
        },
      ],
      archiveTitle: "Archive",
    };
  },
};
</script>
