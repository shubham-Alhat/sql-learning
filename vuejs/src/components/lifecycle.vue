<template>
  <div>Lifecycle hook</div>
</template>

<script>
export default {
  data() {
    return {
      name: "shubham alhat",
    };
  },
  created() {
    console.log(this.name);
    console.log(this.$el);
  },
  mounted() {
    console.log("on mounted hook : ", this.$el);
  },
  unmounted() {
    console.log("All things will unmount now");
  },
};
</script>

<style></style>
