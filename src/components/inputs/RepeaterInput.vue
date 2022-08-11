<template>
  <div class="w-1/2">
    <label class="mb-2 block">{{ inputLabel }}</label>
    <input
      v-for="(val, i) in value.length"
      :key="i"
      type="text"
      class="w-full block text-lg font-normal focus:outline-none border-b border-brand-gray-2 mb-4"
      :placeholder="placeholder"
      :value="value[i]"
      :inputKey="inputKey"
      @input="handleInput($event, i)"
    />
  </div>
  <div class="mt-4 ml-12">
    <action-button button-text="+" button-type="accent" @click="addInput" />
    <action-button
      v-if="value.length > 1"
      button-text="-"
      button-type="primary"
      class="ml-4"
      @click="removeInput"
    />
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
      wrapper.pop("");
    },
  },
};
</script>
