<template>
  <div class="todo-container">
    <div class="todo-form">
      <v-text-field hide-details density="compact" />

      <v-btn color="primary">Add</v-btn>
    </div>

    <div class="todo-list">
      <div class="single-row" v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" />
        <span class="todo-text done">{{ todo.title }}</span>
        <div class="actions">
          <button>✏️</button>
          <button v-on:click="deleteTodo(todo)">🗑️</button>
        </div>
      </div>
    </div>
  </div>
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

<style scoped>
.todo-container {
  min-width: 30vw;
  padding: 10px;
}

.todo-form {
  width: 100%;
  display: flex;
  gap: 5px;
  justify-items: center;
  justify-content: center;
}

.todo-list {
  width: 100%;
  background: #1e1e1e; /* dark bg */
  border-radius: 8px;
  overflow: hidden;
}

.single-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid #2e2e2e;
}

.single-row input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #7c6af7; /* that purple tick color */
  cursor: pointer;
  flex-shrink: 0;
}

.single-row .todo-text {
  flex: 1; /* this pushes buttons to the far right */
  font-size: 15px;
  color: #e0e0e0;
}

.single-row .todo-text.done {
  text-decoration: line-through;
  color: #666;
}

.single-row .actions {
  display: flex;
  gap: 8px;
}

.single-row .actions button {
  width: 36px;
  height: 36px;
  border: 1px solid #3a3a3a;
  border-radius: 6px;
  background: transparent;
  color: #aaa;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.single-row .actions button:hover {
  background: #2e2e2e;
  color: #fff;
}
</style>
