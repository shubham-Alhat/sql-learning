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

## Watcher in vuejs

**We should use watcher whenever we want to trigger a function or action when data property changes.**

Here, `watcher` allows to track/monitor the data (state var) and as change occur in data variable, the watcher callback fires.
The watcher's function name (userInput) has to exactly match the data property you want to watch/monitor. Vue automatically calls it with (newValue, oldValue) whenever that property changes.

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
```

What is difference in watcher vs computed properties ?

When we use computed properties, we are updating the computed properties based on change in dependent data change. it also get caches and only reruns when actual dependent data changes. but here in watcher, we can trigger external function/action based on change of data property.

In computed properties, we are saying that when data property changes, rerun the function and this function actually returns something. (string/number/etc).

In watcher, we are saying when data property changes, trigger this action or function and this function doesnt return anything. it just executes the code.

---
