<template>
  <div>
    <h1>TODO APP</h1>
    <h1 class="text-3xl font-bold text-blue-500">Hello Tailwind!</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/todoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  display: flex;
  justify-content: center; /* horizontal center */
  align-items: center; /* vertical center */
}
</style>
