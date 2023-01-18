<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-dreamer-purple-light">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-dreamer-purple-base"
      >
        <router-link
          to="/"
          class="flex items-center h-full text-xl transition duration-150 ease-out text-dreamer-white hover:text-dreamer-gray"
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
                :to="menuItem.path"
                tabindex="0"
                class="flex items-center h-full p-2 text-dreamer-white hover:text-dreamer-gray"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <action-button
            data-test="login-button"
            button-text="Add book"
            button-type="primary"
            @click="handleClick('/add-book')"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/common/ActionButton.vue";

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
          text: "Books",
          path: "/books",
        },
        {
          text: "2022",
          path: "/shelf/2022",
        },
        {
          text: "Stats",
          path: "/stats",
        },
        {
          text: "Reading list",
          path: "/reading-list",
        },
        {
          text: "On my radar",
          path: "/radar",
        },
        {
          text: "Testing",
          path: "/testing",
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
  methods: {
    // Would be interesting to set *this* up to call the library of potential action methods that live inside the button
    handleClick(link) {
      this.$router.push(link);
    },
  },
};
</script>
