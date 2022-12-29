<template>
  <button :class="buttonClass">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    buttonText: {
      type: String,
      default: "Click here",
    },
    buttonType: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "secondary", "accent"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.buttonType]: true,
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium rounded transition duration-150 ease-out;
}

.primary {
  @apply text-white bg-dreamer-purple-dark hover:shadow-blue;
}

.secondary {
  @apply text-dreamer-purple-dark bg-transparent hover:bg-dreamer-purple-dark hover:text-white;
}
</style>
