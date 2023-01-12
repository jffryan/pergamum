<template>
  <div class="grid grid-cols-12 gap-2 py-20 text-dreamer-white">
    <basic-hero title="On my radar" />
    <div class="col-start-2 col-span-6">
      <div class="bg-dreamer-purple-dark rounded-md px-4 py-8">
        <div id="title-area" class="mb-8">
          <h2 class="text-4xl font-bold">
            {{ book.title
            }}<span v-if="book.subtitle !== null" class="font-normal"
              >: {{ book.subtitle }}</span
            >
          </h2>
        </div>
        <!-- End Title Area -->
        <div id="author-area" class="mb-8">
          <h3
            v-for="(author, i) in book.authors"
            :key="author.authorId"
            class="text-xl inline-block"
          >
            <router-link
              v-if="i === 0"
              :to="'authors/view/' + author.authorId"
              class="hover:underline"
              >{{ author.authorName }}</router-link
            >
            <router-link v-else :to="'authors/view/' + author.authorId"
              >,
              <span class="hover:underline">{{
                author.authorName
              }}</span></router-link
            >
          </h3>
        </div>
        <div id="wishlist">
          <action-button
            class="mr-6"
            button-text="Want to read"
            button-type="accent"
          />
          <action-button button-text="Add to list" button-type="secondary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @todo: Basically a Books view but for books I haven't purchased yet. Probably redundant.
import { sampleBook } from "@/utils/basicBook.js";
import ActionButton from "@/components/common/ActionButton.vue";
import BasicHero from "@/components/layouts/BasicHero.vue";

export default {
  name: "RadarView",
  components: {
    ActionButton,
    BasicHero,
  },
  data() {
    return {
      book: sampleBook,
    };
  },
};
</script>
