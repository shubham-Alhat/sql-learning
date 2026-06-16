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
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
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
};
</script>

<style></style>
