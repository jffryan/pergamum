<template>
  <section>
    <div class="grid grid-cols-10">
      <div class="col-span-3 pl-2">
        <router-link :to="navigateToBook">{{ title }}</router-link>
      </div>
      <div class="col-span-2">
        <p>{{ authors }}</p>
      </div>
      <div class="col-span-3">
        <p class="capitalize">{{ genres }}</p>
      </div>
      <div>
        <p class="capitalize">{{ format_name }}</p>
      </div>
      <div>
        <p>{{ num_pages }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BookTable",
  props: {
    bookDetails: {
      type: Object,
      default() {
        return {
          title: "Title",
          author: "Author",
          num_pages: 0,
          genres: "Book",
          format_name: "Paper",
          book_id: 1,
          version_id: 1,
        };
      },
    },
  },
  data() {
    const that = this;
    const {
      title,
      authors,
      num_pages,
      genres,
      format_name,
      book_id,
      version_id,
    } = that.bookDetails;
    return {
      title,
      authors,
      num_pages,
      genres,
      format_name,
      book_id,
      version_id,
    };
  },

  computed: {
    navigateToBook() {
      return `/book/${this.book_id}`;
    },
  },
};
</script>
