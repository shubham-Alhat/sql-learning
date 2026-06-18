# Assignment questions

## Props in vuejs

Props are way to pass data from parent component to child component. this is actually enforce the uniderectional data flow. from up (parent component) to down (child component). Also, when data is updated/changed, it goes down to child component automatically.

Child component cant update/change the prop data directly. if child need to change/update the data, it has emit the event `$emit` to parent component.

> `$emit` is the built-in mechanism used to send custom events up from a child component to its parent component.

below is eg of how child send event to update data pass by parents.

_Child component_

```vue
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
  </div>
</template>

<script>
export default {
  props: ["count"],
  emits: ["incrementByChild", "decrementByChild"],
  methods: {
    sendIncrementEvent() {
      this.$emit("incrementByChild");
    },
    sendDecrementEvent() {
      this.$emit("decrementByChild");
    },
  },
};
</script>

<style></style>
```

_Parent Component_

```vue
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
    <!-- child component -->
    <Child
      :count="count"
      @incrementByChild="incrementCount"
      @decrementByChild="decrementCount"
    />
  </div>
</template>
<script>
import Child from "./components/child.vue";

export default {
  components: {
    Child,
  },
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
```

---
