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
          name: "books",
          text: "All books",
        },
        {
          name: "books",
          text: "Paper books",
        },
        {
          name: "books",
          text: "Pirated books",
        },
        {
          name: "books",
          text: "Audio books",
        },
      ],
      booksTitle: "Books",
      yearsLinks: [
        {
          name: "year",
          params: {
            year: "2022",
          },
          text: "2022",
        },
        {
          name: "year",
          params: {
            year: "2021",
          },
          text: "2021",
        },
        {
          name: "year",
          params: {
            year: "2020",
          },
          text: "2020",
        },
        {
          name: "year",
          params: {
            year: "2019",
          },
          text: "2019",
        },
        {
          name: "year",
          params: {
            year: "2018",
          },
          text: "2018",
        },
      ],
      yearsTitle: "Years",
      archiveLinks: [
        {
          name: "archive",
          text: "Archive",
        },
        {
          name: "archive",
          text: "Notes",
        },
      ],
      archiveTitle: "Archive",
    };
  },
};
</script>
