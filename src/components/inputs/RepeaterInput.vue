<template>
  <div class="w-8/12">
    <label class="mb-4 block">{{ inputLabel }}</label>
    <input
      v-for="(val, i) in value.length"
      :key="i"
      type="text"
      class="w-full block px-2 py-1 text-lg text-dreamer-purple-black font-normal focus:outline-none border-b border-brand-gray-2"
      :class="value.length > 1 ? 'mb-4' : ''"
      :placeholder="placeholder"
      :value="value[i]"
      :inputKey="inputKey"
      @input="handleInput($event, i)"
    />
  </div>
  <div class="ml-12 flex flex-col justify-start">
    <div class="mt-4">
      <action-button button-text="+" button-type="primary" @click="addInput" />
      <action-button
        v-if="value.length > 1"
        button-text="-"
        button-type="accent"
        class="ml-4"
        @click="removeInput"
      />
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/common/ActionButton.vue";
export default {
  name: "RepeaterInput",
  components: {
    ActionButton,
  },
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
    addInput(event) {
      event.preventDefault();
      const that = this;
      const wrapper = that.value;
      wrapper.push("");
    },
    removeInput(event) {
      event.preventDefault();
      const that = this;
      const wrapper = that.value;
      wrapper.pop();
    },
  },
};
</script>
