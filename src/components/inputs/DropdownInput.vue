<template>
  <label class="mb-4 block">{{ inputLabel }}</label>
  <select
    class="w-full block text-lg font-normal bg-white focus:outline-none border-b border-brand-gray-2 mb-4"
    :placeholder="placeholder"
    :value="value"
    :inputKey="inputKey"
    @input="handleInput"
  >
    <option v-for="(option, i) in optionSet" :key="i">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: "DropdownInput",
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
    optionSet: {
      type: Array,
      required: true,
    },
  },
  emits: ["updateDropdownInput"],
  methods: {
    handleInput(event) {
      const that = this;
      const userInput = event.target.value;
      const payload = {
        userInput,
        inputKey: that.inputKey,
      };
      that.$emit("updateDropdownInput", payload);
    },
  },
};
</script>
