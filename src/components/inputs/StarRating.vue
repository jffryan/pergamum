<template>
  <div>
    <label class="mb-4 block" @click="devTest">{{ inputLabel }}</label>
    <div class="flex flex-row flex-nowrap">
      <div ref="ratingParent" class="grid grid-cols-5 w-1/2">
        <div
          v-for="num in 5"
          :key="num"
          ref="ratingContainer"
          class="fa-stack fa-1x"
          :inputKey="inputKey"
          @click="handleInput(num)"
        >
          <div v-if="num <= value">
            <font-awesome-icon
              :icon="['fas', 'star']"
              class="font-xl fa-stack-2x text-brand-yellow-1"
            />
            <font-awesome-icon
              :icon="['fas', 'star']"
              class="font-xl fa-stack-1x text-brand-yellow-1"
            />
          </div>
          <div v-else-if="num > value && num <= 5">
            <font-awesome-icon
              :icon="['fas', 'star']"
              class="font-xl fa-stack-2x"
            />
            <font-awesome-icon
              :icon="['fas', 'star']"
              class="font-xl fa-stack-1x fa-inverse"
            />
          </div>
        </div>
      </div>
      <div class="ml-12">
        <action-button
          button-text="No rating"
          button-type="secondary"
          @click.prevent="resetRating"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @TODO: Implement half stars both visually and in the code
import ActionButton from "@/components/common/ActionButton.vue";
export default {
  name: "StarRating",
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
      type: null,
      required: true,
    },
    inputKey: {
      type: String,
      required: true,
    },
  },
  emits: ["updateRatingInput"],
  computed: {},
  methods: {
    handleInput(num) {
      const that = this;
      const userInput = num;
      const payload = {
        userInput,
        inputKey: that.inputKey,
      };
      that.$emit("updateRatingInput", payload);
    },
    resetRating() {
      const that = this;
      const payload = {
        userInput: null,
        inputKey: that.inputKey,
      };
      that.$emit("updateRatingInput", payload);
    },
  },
};
</script>
