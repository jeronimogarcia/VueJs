<template>
  <div class="errorContainer">
    <div>
      <img src="../assets/error404.png" alt="" />
    </div>
    <b-button class="btn-success"
      ><router-link to="/">Volver al Home</router-link></b-button
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.errorContainer {
  margin-top: 50px;
}
a {
  text-decoration: none;
  color: white;
}
</style>
