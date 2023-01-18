<template>
  <div class="rounded-md px-4 py-8">
    <div id="title-area" class="mb-6">
      <h2 class="text-4xl font-bold">
        {{ book.title
        }}<span v-if="book.subtitle !== ''" class="font-normal"
          >: {{ book.subtitle }}</span
        >
      </h2>
    </div>
    <!-- End title -->
    <div id="author-area" class="mb-6">
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
    <!-- End author -->
    <div id="wishlist" class="mb-6">
      <action-button
        class="mr-6"
        button-text="Want to read"
        button-type="accent"
      />
      <action-button button-text="Add to list" button-type="secondary" />
    </div>
    <!-- End wishlist -->
    <div id="description" class="mb-6">
      <p class="leading-relaxed">{{ book.description }}</p>
    </div>
    <!-- End description -->
    <div id="genre-container" class="flex mb-6">
      <genre-button
        v-for="genre in book.genres"
        :key="genre.genreId"
        :genre-name="genre.genreName"
        :genre-id="String(genre.genreId)"
        class="mr-4"
      />
    </div>
    <!-- End genres -->
    <div id="edition" class="mb-6">
      <h4 class="text-lg font-bold">This edition</h4>
      <div class="edition-container">
        <p class="font-bold">
          Format:
          <router-link
            class="font-normal text-dreamer-gray capitalize"
            :to="'/formats/view/' + book.edition.formatId"
            >{{ book.edition.formatName }}</router-link
          >
        </p>
        <p v-if="book.edition.formatId === 5" class="font-bold">
          Runtime:
          <span class="font-normal text-dreamer-gray capitalize"
            >{{ Math.floor(book.edition.runTime / 60) }}h
            {{ book.edition.runTime % 60 }}min</span
          >
        </p>
        <p v-else class="font-bold">
          Pages:
          <span class="font-normal text-dreamer-gray capitalize">{{
            book.edition.pageCount
          }}</span>
        </p>
        <p
          v-if="book.variants.length > 0"
          class="font-bold underline cursor-pointer"
        >
          View other editions
        </p>
      </div>
    </div>
    <!-- End editions -->
    <div v-if="isFinished" id="finished" class="mb-6">
      <p class="text-lg font-bold">Finished</p>
      <p class="font-bold">
        Date Read:
        <span class="font-normal text-dreamer-gray capitalize">{{
          book.finished.dateRead.month +
          "/" +
          book.finished.dateRead.day +
          "/" +
          book.finished.dateRead.year
        }}</span>
      </p>
      <p class="font-bold">
        Rating:
        <span class="font-normal text-dreamer-gray capitalize">{{
          book.finished.rating + "/5"
        }}</span>
      </p>
      <p v-if="hasAwards" class="font-bold">
        Awards:
        <span class="font-normal text-dreamer-gray capitalize">{{
          hasAwards
        }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { isEmptyObject } from "@/utils/common";
import ActionButton from "@/components/common/ActionButton.vue";
import GenreButton from "@/components/books/GenreButton.vue";

export default {
  name: "BookDetail",
  components: {
    ActionButton,
    GenreButton,
  },
  props: {
    book: {
      type: Object,
      default: () => ({
        title: "Title unavailable",
      }),
    },
  },
  computed: {
    isFinished() {
      return !isEmptyObject(this.book.finished);
    },
    hasAwards() {
      if (this.isFinished && !isEmptyObject(this.book.finished.awards)) {
        const award =
          this.book.finished.awards.name +
          " - " +
          this.book.finished.awards.level;
        return award;
      } else {
        return false;
      }
    },
  },
};
</script>
