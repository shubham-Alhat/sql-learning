<template>
  <div id="container" class="w-3xl bg-amber-400 h-14"></div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { title: "Hellow shubham", completed: false },
        { title: "I am millionaire by 25", completed: true },
        { title: "Making money is IMP", completed: true },
        { title: "Iam not going to give up!!", completed: false },
      ],
    };
  },
  methods: {
    addTodo(newTodoTitle) {
      this.todos.push({
        title: newTodoTitle,
        completed: false,
      });
    },
    editTodo(todo, newTodoTitle) {
      todo.title = newTodoTitle;
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(deleteTodo) {
      this.todos = this.todos.filter((todo) => todo.title !== deleteTodo.title);
    },
  },
};
</script>

<style scoped></style>
