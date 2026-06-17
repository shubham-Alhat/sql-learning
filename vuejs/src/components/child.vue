<template>
  <div
    class="w-full text-xl mt-1.5 flex justify-center items-center text-blue-200"
  >
    child component : {{ count }}
  </div>
  <div
    class="w-full text-xl mt-1.5 flex gap-4 justify-center items-center text-blue-200"
  >
    <button
      @click="sendIncrementEvent"
      class="bg-black px-1.5 py-1 rounded-[6px] hover:opacity-95 transition transition-all cursor-pointer"
    >
      +1
    </button>
    <button
      @click="sendDecrementEvent"
      class="bg-black px-1.5 py-1 rounded-[6px] hover:opacity-95 transition transition-all cursor-pointer"
    >
      -1
    </button>
    <button
      @click="incrementByFive"
      class="bg-black px-1.5 py-1 rounded-[6px] hover:opacity-95 transition transition-all cursor-pointer"
    >
      +5
    </button>
  </div>
</template>

<script>
export default {
  props: ["count"],
  emits: ["incrementByChild", "decrementByChild", "incrementByFiveNumber"],
  methods: {
    sendIncrementEvent() {
      this.$emit("incrementByChild");
    },
    sendDecrementEvent() {
      this.$emit("decrementByChild");
    },
    incrementByFive() {
      this.$emit("incrementByFiveNumber", 5);
    },
  },
};
</script>

<style></style>
