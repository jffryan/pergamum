<template>
  <label class="mb-2 block">{{ inputLabel }}</label>
  <input
    type="number"
    class="w-full block text-lg font-normal focus:outline-none border-b border-brand-gray-2 mb-4"
    :placeholder="placeholder"
    :value="value"
    :inputKey="inputKey"
    @keypress="isNumber($event)"
    @input="handleInput"
  />
</template>

<script>
// @TODO: THERE IS A BUG IN THIS PROGRAM
// You can enter strings of text, but because it's a number field only numbers get passed on as data
// But you can *see* the text still.
// This is confusing because it leads to discrepancies between text on screen and data being passed on.
export default {
  name: "NumberInput",
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
  emits: ["updateNumberInput"],
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
      that.$emit("updateNumberInput", payload);
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
