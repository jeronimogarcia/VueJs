<template>
  <div class="headerMainContainer">
    <div class="coderMealsContainer">
      <router-link to="/"><h1>CoderMeals</h1></router-link>
    </div>
    <NavigationBar />
    <CartWidget :cartList="cartList" />
  </div>
</template>

<script>
import CartWidget from "./CartWidget.vue";
import NavigationBar from "./NavigationBar.vue";
export default {
  props: {
    cartList: Array,
  },
  components: { CartWidget, NavigationBar },
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.headerMainContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 0px 10px 0px;
  background-color: yellow;
  border-bottom: 1px solid black;
  
}
.coderMealsContainer{
  width: 30%;
}
</style>
