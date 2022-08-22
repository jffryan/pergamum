<template>
  <label class="mb-4 block" @click="devTest">{{ inputLabel }}</label>
  <div ref="ratingParent" class="grid grid-cols-5">
    <div
      v-for="num in 5"
      :key="num"
      ref="ratingContainer"
      @mouseover="trackMouse"
    >
      <font-awesome-icon :icon="['fas', 'star']" class="text-3xl" />
      <font-awesome-icon :icon="['fas', 'star-half']" class="text-3xl" />
    </div>
  </div>
</template>

<script>
export default {
  name: "StarRating",
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
  emits: ["updateRatingInput"],
  computed: {
    ratingParentWidth() {
      const that = this;
      return that.$refs.ratingParent.scrollWidth;
    },
    ratingParentLocationLeft() {
      const that = this;
      return that.$refs.ratingParent.offsetLeft;
    },
  },
  methods: {
    handleInput(event) {
      const that = this;
      const userInput = event.target.value;
      const payload = {
        userInput,
        inputKey: that.inputKey,
      };
      that.$emit("updateRatingInput", payload);
    },
    trackMouse(event) {
      const userInput = event.clientX;
      console.log(userInput);
    },
    devTest() {
      const that = this;
      console.log(
        "Width: " + that.ratingParentWidth,
        "Left: " + that.ratingParentLocationLeft
      );
    },
  },
};
</script>
