<template>
  <div class="grid grid-cols-12 gap-2 pt-20">
    <basic-hero title="Add Book" />
    <div class="col-start-2 col-span-10">
      <add-book-form />
    </div>
  </div>
</template>

<script>
import AddBookForm from "@/components/forms/AddBookForm.vue";
import BasicHero from "@/components/layouts/BasicHero.vue";
// @todo: There is no way on earth this should be a page and not just a component living inside a parent page container
// I'm just adding this for the sake of linking up the entire menu to something reactive
export default {
  name: "AddBookView",
  components: {
    AddBookForm,
    BasicHero,
  },
};
</script>
