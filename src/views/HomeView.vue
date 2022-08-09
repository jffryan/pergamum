<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <div class="col-start-2 col-span-5 border border-blue-700">
      <h1 class="text-6xl mb-12">Home</h1>
    </div>
    <div class="col-start-2 col-span-10 border border-red-700">
      <h2 class="text-4xl mb-8">Links</h2>
      <div class="grid grid-cols-4 gap-x-2">
        <quick-links :linkset="booksLinks" :menu-title="booksTitle" />
        <quick-links :linkset="yearsLinks" :menu-title="yearsTitle" />
        <quick-links :linkset="archiveLinks" :menu-title="archiveTitle" />
      </div>
    </div>
  </div>
</template>

<script>
// @todo: figure out what should go on the home section
import QuickLinks from "@/components/navigation/QuickLinks.vue";

export default {
  name: "HomeView",
  components: {
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
          path: "/2022",
          text: "2022",
        },
        {
          path: "/2022",
          text: "2021",
        },
        {
          path: "/2022",
          text: "2020",
        },
        {
          path: "/2022",
          text: "2019",
        },
        {
          path: "/2022",
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
        {
          text: "Best of",
          path: "/best-of",
        },
      ],
      archiveTitle: "Archive",
    };
  },
};
</script>
