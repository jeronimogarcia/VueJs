<template>
  <div id="app">
    <HeaderComponent :cartList='cartList'/>
    <router-view :cartList='cartList'/>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/Header/HeaderComponent.vue";
import FooterComponent from "./components/Footer/FooterComponent.vue";
import HomeView from "./views/HomeView.vue";
import CartView from "./views/CartView.vue";
import LoginRegForm from "./views/LoginRegForm.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    HomeView,
    HomeView,
    CartView,
    LoginRegForm,
  },
  data() {
    return {
      title: "Hello",
      cartList: [],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 91.5vh;
  padding-bottom: 80px;
}
</style>
