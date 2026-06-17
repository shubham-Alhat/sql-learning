<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-900">
    <h1 class="text-4xl font-bold text-indigo-600 drop-shadow">
      Count: {{ count }}
    </h1>
    <div class="w-full flex items-center justify-center p-1 mt-1.5">
      <div class="flex gap-4">
        <button
          @click="incrementCount"
          class="px-2 py-1 bg-black text-white cursor-pointer hover:opacity-95 transition rounded-[6px]"
        >
          increment
        </button>
        <button
          @click="decrementCount"
          class="px-2 py-1 bg-black cursor-pointer hover:opacity-95 transition text-white rounded-[6px]"
        >
          decrement
        </button>
      </div>
    </div>
    <div class="mt-2 text-blue-200 font-medium">{{ statusMessage }}</div>
    <hr class="w-full h-[1px] mt-1.5 bg-black" />
    <div id="watcher-example" class="mt-4">
      <input
        v-model="userInput"
        type="text"
        class="bg-black text-white px-2 py-1 min-w-[200px] border border-[1px] rounded-[6px]"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      userInput: "",
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      this.count--;
    },
  },

  computed: {
    statusMessage() {
      if (this.count > 0) return "Positive";
      if (this.count < 0) return "Negative";
      if (this.count == 0) return "Zero";
    },
  },
  watch: {
    userInput(newValue, oldValue) {
      console.log(`User type : ${newValue}`);
    },
  },
};
</script>

<style></style>
