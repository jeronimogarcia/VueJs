<template>
  <div>
    <p>Hello</p>
    <p>{{codermeals}}</p>
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  props:{
    codermeals: Array,
    title: String,
  }
};
</script>

<style scoped></style>
