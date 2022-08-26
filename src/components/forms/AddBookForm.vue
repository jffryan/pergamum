<template>
  <form class="flex items-center w-full">
    <div class="w-full h-full text-base font-light">
      <!-- Title -->
      <div class="w-full mb-4">
        <div class="w-1/2">
          <text-input
            input-label="Title"
            input-key="title"
            placeholder=""
            :value="formData.title"
            @update-text-input="updateBasicInput"
          />
        </div>
      </div>
      <!-- Author input -->
      <div class="w-full mb-4 flex">
        <repeater-input
          input-label="Author"
          input-key="author"
          placeholder=""
          :value="formData.author"
          @update-repeater-input="updateRepeaterInput"
        />
      </div>
      <!-- Book type -->
      <div class="w-full mb-4">
        <div class="w-1/2">
          <dropdown-input
            input-label="Type"
            input-key="bookType"
            placeholder=""
            :value="formData.bookType"
            :option-set="formData.bookTypes"
            @update-dropdown-input="updateBasicInput"
          />
        </div>
      </div>
      <!-- Page count -->
      <div v-if="formData.bookType !== 'audio'" class="w-full mb-4">
        <div class="w-1/2">
          <number-input
            input-label="Page Count"
            input-key="pageCount"
            placeholder=""
            :value="formData.pageCount"
            @update-number-input="updateBasicInput"
          />
        </div>
      </div>
      <!-- Audio length -->
      <div v-else-if="formData.bookType === 'audio'" class="w-full mb-4">
        <div class="w-1/2">
          <time-input
            input-label="Audio length"
            input-key="audioLength"
            placeholder=""
            :value="formData.audioLength"
            @update-time-input="updateBasicInput"
          />
        </div>
      </div>
      <!-- Genres -->
      <div class="w-full mb-4 flex">
        <repeater-input
          input-label="Genres"
          input-key="genres"
          placeholder=""
          :value="formData.genres"
          @update-repeater-input="updateRepeaterInput"
        />
      </div>
      <!-- Star Rating -->
      <div class="w-full mb-4 flex">
        <div class="w-1/2">
          <star-rating
            input-label="Rating"
            input-key="rating"
            placeholder=""
            :value="formData.rating"
            @update-rating-input="updateRatingInput"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import DropdownInput from "@/components/inputs/DropdownInput.vue";
import NumberInput from "@/components/inputs/NumberInput.vue";
import RepeaterInput from "@/components/inputs/RepeaterInput.vue";
import StarRating from "@/components/inputs/StarRating.vue";
import TextInput from "@/components/inputs/TextInput.vue";
import TimeInput from "@/components/inputs/TimeInput.vue";

export default {
  name: "AddBookForm",
  components: {
    DropdownInput,
    NumberInput,
    RepeaterInput,
    StarRating,
    TextInput,
    TimeInput,
  },
  data() {
    return {
      formData: {
        title: "",
        author: [""],
        pageCount: null,
        bookType: "",
        bookTypes: ["paper", "audio", "pirated", "borrowed"],
        genres: [""],
        rating: null,
      },
    };
  },
  methods: {
    // @TODO: These will be common to all forms... so how do we proceed to organize these functions?
    updateBasicInput(payload) {
      const that = this;
      const { userInput, inputKey } = payload;
      that.formData[inputKey] = userInput;
    },
    updateRepeaterInput(payload) {
      const that = this;
      const { inputKey, userInput, index } = payload;
      that.formData[inputKey][index] = userInput;
    },
    updateRatingInput(payload) {
      const that = this;
      const { inputKey, userInput } = payload;
      that.formData[inputKey] = userInput;
    },
  },
};
</script>
