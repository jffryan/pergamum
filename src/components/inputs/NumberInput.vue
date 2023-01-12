<template>
  <label class="mb-2 block">{{ inputLabel }}</label>
  <input
    type="number"
    class="w-full block mb-4 px-2 py-1 text-lg text-dreamer-purple-black font-normal focus:outline-none border-b border-brand-gray-2"
    :placeholder="placeholder"
    :value="value"
    :inputKey="inputKey"
    @keypress="isNumber($event)"
    @input="handleInput"
  />
</template>

<script>
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
