<template>
  <label class="mb-2 block">{{ inputLabel }}</label>
  <input
    v-for="(author, i) in value.length"
    :key="i"
    type="text"
    class="w-full block text-lg font-normal focus:outline-none border-b border-brand-gray-2 mb-4"
    :placeholder="placeholder"
    :value="value[i]"
    :inputKey="inputKey"
    @input="handleInput($event, i)"
  />
</template>

<script>
export default {
  name: "RepeaterInput",
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
      type: Array,
      required: true,
    },
    inputKey: {
      type: String,
      required: true,
    },
  },
  emits: ["updateRepeaterInput"],
  methods: {
    handleInput(event, i) {
      const that = this;
      const userInput = event.target.value;
      const payload = {
        inputKey: that.inputKey,
        userInput,
        index: i,
      };
      that.$emit("updateRepeaterInput", payload);
    },
  },
};
</script>
