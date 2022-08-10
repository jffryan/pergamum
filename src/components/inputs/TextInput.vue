<template>
  <label class="mb-2 block">{{ inputLabel }}</label>
  <input
    type="text"
    class="w-full block text-lg font-normal focus:outline-none border-b border-brand-gray-2 mb-4"
    :placeholder="placeholder"
    :value="value"
    :inputKey="inputKey"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
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
      type: String,
      required: true,
    },
    inputKey: {
      type: String,
      required: true,
    },
  },
  emits: ["updateTextInput"],
  methods: {
    handleInput(event) {
      const that = this;
      const userInput = event.target.value;
      const payload = {
        userInput,
        inputKey: that.inputKey,
      };
      that.$emit("updateTextInput", payload);
    },
  },
};
</script>
