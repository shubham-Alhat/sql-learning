<template>
  <div class="w-full">{{ todoString }}</div>
</template>

<script>
export default {
  props: {
    todoString: String,
    completed: Boolean,
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
