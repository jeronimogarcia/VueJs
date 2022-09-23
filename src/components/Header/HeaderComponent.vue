<template>
  <div class="headerMainContainer">
    <div>
      <h1>CoderMeals</h1>
    </div>
    <NavigationBar />
    <CartWidget />
  </div>
</template>

<script>
import CartWidget from "./CartWidget.vue";
import NavigationBar from "./NavigationBar.vue";
export default {
  props: {},
  components: { CartWidget, NavigationBar },
};
</script>

<style scoped>
.headerMainContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 0px 10px 0px;
  background-color: yellow;
  border-bottom: 1px solid black;
}

</style>
