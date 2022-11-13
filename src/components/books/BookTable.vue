<template>
  <section>
    <div class="grid grid-cols-10">
      <div class="col-span-2 pl-2">
        <router-link :to="linkDestination">{{ title }}</router-link>
      </div>
      <div>
        <p v-for="authorName in author" :key="authorName">{{ authorName }}</p>
      </div>
      <div>
        <p>{{ pageCount }}</p>
      </div>
      <div>
        <p v-if="dateRead.year !== null">
          {{ dateRead.month }}/{{ dateRead.day }}/{{ dateRead.year }}
        </p>
      </div>
      <div>
        <p>{{ rating }}</p>
      </div>
      <div>
        <p v-for="cat in genre" :key="cat">{{ cat }}</p>
      </div>
      <div>
        <p>{{ bookType }}</p>
      </div>
      <div>
        <p>{{ duration }}</p>
      </div>
      <div>
        <p>{{ awards }}</p>
      </div>
    </div>
  </section>
</template>

<script>
// @todo: Figure out a better name for this component
// @todo: Make books a class/object to store as data?
export default {
  name: "BookTable",
  props: {
    bookDetails: {
      type: Object,
      default() {
        return {
          title: "Title",
          author: "Author",
          pageCount: 0,
          dateRead: "1/1/18",
          rating: 1,
          genre: "Book",
          bookType: "Paper",
          duration: 1,
          awards: null,
        };
      },
    },
  },
  data() {
    const that = this;
    const {
      title,
      author,
      pageCount,
      dateRead,
      rating,
      genre,
      bookType,
      duration,
      awards,
    } = that.bookDetails;
    return {
      title,
      author,
      pageCount,
      dateRead,
      rating,
      genre,
      bookType,
      duration,
      awards,
    };
  },
  computed: {
    linkDestination() {
      return `/books/${this.bookDetails.id}`;
    },
  },
};
</script>
