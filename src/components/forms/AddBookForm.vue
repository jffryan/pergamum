<template>
  <form class="flex items-center w-full mt-14">
    <div class="w-full h-full text-base font-light">
      <div class="w-full mb-4">
        <div class="w-1/2">
          <text-input
            input-label="Title"
            input-key="title"
            placeholder="Enter title"
            :value="formData.title"
            @update-text-input="updateTextInput"
          />
        </div>
      </div>
      <div class="w-full mb-4 flex">
        <div class="w-1/2">
          <repeater-input
            input-label="Author"
            input-key="author"
            placeholder="Author name"
            :value="formData.author"
            @update-repeater-input="updateRepeaterInput"
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
          <number-input
            input-label="Page Count"
            input-key="pageCount"
            placeholder="Length"
            :value="formData.pageCount"
            @update-number-input="updateNumberInput"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import ActionButton from "@/components/common/ActionButton.vue";
import TextInput from "@/components/inputs/TextInput.vue";
import NumberInput from "@/components/inputs/NumberInput.vue";
import RepeaterInput from "@/components/inputs/RepeaterInput.vue";

export default {
  name: "AddBookForm",
  components: {
    ActionButton,
    TextInput,
    NumberInput,
    RepeaterInput,
  },
  data() {
    return {
      authorCount: 1,
      formData: {
        title: "",
        author: ["", ""],
        pageCount: null,
      },
    };
  },
  methods: {
    // @TODO: Move these two methods to the repeater component to control value.length
    addAuthor(event) {
      event.preventDefault();
      const that = this;
      that.authorCount++;
    },
    removeAuthor(event) {
      event.preventDefault();
      const that = this;
      that.authorCount--;
    },

    // @TODO: These will be common to all forms... so how do we proceed to organize these functions?
    updateTextInput(payload) {
      const that = this;
      const { userInput, inputKey } = payload;
      console.log(inputKey, userInput);
      that.formData[inputKey] = userInput;
    },
    // @TODO: Is this bad to repeat?
    updateNumberInput(payload) {
      const that = this;
      const { userInput, inputKey } = payload;
      console.log(inputKey, userInput);
      that.formData[inputKey] = userInput;
    },
    updateRepeaterInput(payload) {
      const that = this;
      const { inputKey, userInput, index } = payload;
      console.log(inputKey, userInput, index);
      that.formData[inputKey][index] = userInput;
    },
  },
};
</script>
