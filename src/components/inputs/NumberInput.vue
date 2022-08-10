<template>
  <label class="mb-2 block">{{ inputLabel }}</label>
  <input
    type="number"
    class="w-full block text-lg font-normal focus:outline-none border-b border-brand-gray-2 mb-4"
    :placeholder="placeholder"
    :value="value"
    :inputKey="inputKey"
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
    // @TODO: Add validator method
    // Emit should run separate, *after* validation.
    // AKA we shouldn't send bad (non numerical) data back to the form ever. The buck stops here.
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
