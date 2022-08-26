<template>
  <li class="mb-7">
    <div
      class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
        <h2 class="mb-2 text-2xl">
          {{ book.title }}
        </h2>
        <h3 class="mb-2 text-xl">
          <span v-for="author in book.author" :key="author" class="mr-5">
            {{ author }}
          </span>
        </h3>
      </div>
      <div class="pt-5 pb-2 mx-8">
        <div>
          <h4 class="mb-2 text-l">Details:</h4>
          <ul class="pl-8 list-disc">
            <li>
              <router-link
                v-for="(cat, i) in book.genre"
                :key="cat"
                :to="{
                  name: 'genreView',
                  params: { genre: cat.toLowerCase() },
                }"
              >
                <span v-if="i < book.genre.length - 1">{{ cat }},&nbsp;</span>
                <span v-else>{{ cat }}</span>
              </router-link>
            </li>
            <li>{{ book.pageCount }} pages</li>
            <li v-if="book.dateRead.year !== null">
              Finished on: {{ book.dateRead.month }}/{{ book.dateRead.day }}/{{
                book.dateRead.year
              }}
            </li>
            <li v-else>Not finished</li>
          </ul>
        </div>
        <div class="mt-2 text-center">
          <router-link to="books" class="text-brand-blue-1">Expand</router-link>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>
