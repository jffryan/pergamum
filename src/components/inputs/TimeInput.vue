<template>
  <label class="mb-4 block">{{ inputLabel }}</label>
  <div class="flex">
    <input
      type="number"
      class="w-14 block text-lg font-normal focus:outline-none border-b border-brand-gray-2 mb-4"
      :placeholder="placeholder"
      :value="value"
      :inputKey="inputKey"
      @keypress="isNumber($event)"
      @input="handleInput"
    />
    <span class="inline-block mr-8">h</span>
    <input
      type="number"
      class="w-14 block text-lg font-normal focus:outline-none border-b border-brand-gray-2 mb-4"
      :placeholder="placeholder"
      :value="value"
      :inputKey="inputKey"
      @keypress="isNumber($event)"
      @input="handleInput"
    />
    <span>min</span>
  </div>
</template>

<script>
// @TODO: Separate these inputs into hours/minutes
// Add toggle between minutes and hour/minute separation?
export default {
  name: "TimeInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "Type here",
    },
    inputLabel: {
      type: String,
      required: true,
    },
    value: {
      type: null,
      required: true,
    },
    inputKey: {
      type: String,
      required: true,
    },
  },
  emits: ["updateTimeInput"],
  methods: {
    // Prevents non numerical or (.) from showing up in the visual display
    isNumber(event) {
      event = event ? event : window.event;
      let charCode = event.which ? event.which : event.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        event.preventDefault();
      } else {
        return true;
      }
    },
    // Same handler as anyone else
    handleInput(event) {
      const that = this;
      const userInput = event.target.value;
      const payload = {
        userInput,
        inputKey: that.inputKey,
      };
      that.$emit("updateTimeInput", payload);
    },
  },
};
</script>

<style scoped>
input[type="number"] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
