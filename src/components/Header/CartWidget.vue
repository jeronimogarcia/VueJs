<template>
  <div class="widgetContainer">
    <router-link to="/cart"
      ><p>
        <font-awesome-icon icon="fa-solid fa-cart-shopping" /></p
    ></router-link>
    <p>{{ calculoTotalProductos }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    calculoTotalProductos() {
      console.log(this.$store.state.storeCarrito)
      return this.$store.state.storeCarrito.reduce((suma, product) => {
        return suma + product.bought;
      }, 0);
    },
  },
};
</script>

<style scoped>
a {
  color: black;
}
.widgetContainer {
  display: flex;
  position: relative;
  top: 15px;
  width: 30%;
  justify-content: center;
}
.widgetContainer p {
  margin-bottom: 0px;
  font-size: 20px;
}
</style>
