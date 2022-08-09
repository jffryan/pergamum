<template>
  <div>
    <div v-if="menuTitle">
      <h3 class="text-3xl font-light mb-2">
        {{ menuTitle }}
      </h3>
      <hr class="w-9/12 mb-2 border-1 border-gray-400" />
    </div>
    <nav>
      <ul :class="menuClass">
        <li v-for="link in linkset" :key="link.text" class="mb-1 list-item">
          <router-link :to="link.path" class="list-link">{{
            link.text
          }}</router-link>
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
      default: null,
    },
    layout: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].includes(value);
      },
    },
  },

  computed: {
    menuClass() {
      const that = this;
      return {
        [that.layout]: true,
      };
    },
  },
  created() {
    this.data = {
      layout: this.layout,
    };
  },
};
</script>

<style scoped>
.horizontal {
  @apply flex h-full p-0 m-0 list-none;
}

.horizontal .list-item {
  @apply h-full ml-9 first:ml-0 transition duration-150 ease-out;
}

.horizontal .list-item .list-link,
.vertical .list-item .list-link {
  @apply flex items-center h-full p-2 hover:text-brand-blue-2;
}
</style>
