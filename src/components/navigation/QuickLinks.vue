<template>
  <div>
    <h3 class="text-3xl font-light mb-2">
      {{ menuTitle }}
    </h3>
    <hr class="w-9/12 mb-2 border-1 border-gray-400" />
    <nav>
      <ul>
        <li v-for="link in linkset" :key="link.text" class="mb-1">
          <router-link :to="link.path">{{ link.text }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "QuickLinks",
  props: {
    linkset: {
      type: Object,
      default() {
        return {
          path: "/",
          text: "Home",
        };
      },
    },
    menuTitle: {
      type: String,
      default: "Menu",
    },
  },
};
</script>
