<template>
  <form class="flex items-center w-full mt-14">
    <div class="w-full h-full text-base font-light">
      <div class="w-full mb-4">
        <div class="w-1/2">
          <label class="mb-2 block">Title</label>
          <input
            type="text"
            class="w-full block text-lg font-normal focus:outline-none border-b border-brand-gray-2 mb-4"
            placeholder="Enter title"
          />
        </div>
      </div>
      <div class="w-full mb-4 flex">
        <div class="w-1/2">
          <label class="mb-2 block">Author</label>
          <input
            v-for="(author, i) in authorCount"
            :key="i"
            type="text"
            class="w-full block text-lg font-normal focus:outline-none border-b border-brand-gray-2 mb-4"
            placeholder="Author name"
          />
        </div>
        <div class="mt-4 ml-12">
          <action-button
            button-text="+"
            button-type="accent"
            @click="addAuthor"
          />
          <action-button
            v-if="authorCount > 1"
            button-text="-"
            button-type="primary"
            class="ml-4"
            @click="removeAuthor"
          />
        </div>
      </div>
      <div class="w-full mb-4">
        <div class="w-1/2">
          <label class="mb-2 block">Page Count</label>
          <input
            type="text"
            class="w-full block text-lg font-normal focus:outline-none border-b border-brand-gray-2 mb-4"
            placeholder="Length"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import ActionButton from "@/components/common/ActionButton.vue";
export default {
  name: "AddBookForm",
  components: {
    ActionButton,
  },
  data() {
    return {
      authorCount: 1,
    };
  },
  methods: {
    addAuthor(e) {
      e.preventDefault();
      const that = this;
      that.authorCount++;
    },
    removeAuthor(e) {
      e.preventDefault();
      const that = this;
      that.authorCount--;
    },
  },
};
</script>
