# Vuejs learning.

## Counter in Vuejs

Here we learn, where to intialize the data and reactivity of vuejs. also how methods are register and assigned to events. eg `@click="incrementCount"`.

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
```

---

## Computed properties in vuejs

**Computed properties** in Vue.js are reactive, calculated data (not intialize in data()) fields that automatically update whenever their dependencies change. They are highly optimized because they cache their results, re-running only when the underlying reactive data changes.

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
    <div class="mt-3 p-2 text-blue-200 font-medium">{{ statusMessage }}</div>
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

  computed: {
    statusMessage() {
      if (this.count > 0) return "Positive";
      if (this.count < 0) return "Negative";
      if (this.count == 0) return "Zero";
    },
  },
};
</script>

<style></style>
```

Here, whenever we click incre or decre, `count` changes, and statusMessage reruns updating the UI. now here, veujs actually caches the statusMessage, eg- `Positive`,`Negative` or `Zero`. here you will not see any benefit/advantage of caching. but lets say, in same component, there is a timer, which updating every second. every second, the component rerenders. now during that rerendering, the statusMessage doesnt rerun, it uses the cached value. it only updates or rerun when its dependent data changes (here `count`). this is how we say computed properties. they are computed not intialized and caches. only runs when dependent data changes.

---
