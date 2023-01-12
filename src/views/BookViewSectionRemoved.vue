<template>
  <div class="col-start-8 col-span-4 border rounded border-brand-gray-1 p-4">
    <div v-if="currentBook.dateRead.year !== null">
      <p class="text-slate-500">
        Finished on:
        <span class="text-slate-700"
          >{{ currentBook.dateRead.month }}/{{ currentBook.dateRead.day }}/{{
            currentBook.dateRead.year
          }}</span
        >
      </p>
    </div>
    <div v-else>
      <p class="text-slate-700">Not yet completed.</p>
    </div>
  </div>
</template>
