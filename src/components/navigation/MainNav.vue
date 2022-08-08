<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          to="/"
          class="flex items-center h-full text-xl transition duration-150 ease-out hover:text-brand-blue-2"
          >{{ siteTitle }}</router-link
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.index"
              class="h-full ml-9 first:ml-0 transition duration-150 ease-out"
              data-test="main-nav-list-item"
            >
              <router-link
                :to="menuItem.link"
                tabindex="0"
                class="flex items-center h-full p-2 hover:text-brand-blue-2"
                >{{ menuItem.name }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <action-button
            data-test="login-button"
            button-text="Add book"
            button-type="primary"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/buttons/ActionButton.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
  },
  data() {
    return {
      siteTitle: "Pergamum",
      url: "/",
      menuItems: [
        {
          name: "Books",
          link: "/books",
        },
        {
          name: "2022",
          link: "/2022",
        },
        {
          name: "Archive",
          link: "/archive",
        },
        {
          name: "Stats",
          link: "/stats",
        },
        {
          name: "Reading list",
          link: "/reading-list",
        },
        {
          name: "Best of",
          link: "/best-of",
        },
        {
          name: "On my radar",
          link: "/radar",
        },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      // Set up logic if this needs to be variable for whatever reason
      return {
        "h-16": true,
      };
    },
  },
};
</script>
