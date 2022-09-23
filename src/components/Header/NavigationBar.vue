<template>
  <div class="navBarContainer">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login/Register</router-link></li>
      <li><router-link to="/cart">Cart</router-link></li>

    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navBarContainer {
  display: flex;
  align-items: center;
  position: relative;
  top: 5px;
}

.navBarContainer ul {
  list-style: none;
  display: flex;
  margin: 0px;
}

.navBarContainer ul li {
  font-size: 18px;
  text-transform: uppercase;
  padding: 0px 10px 0px 10px;
}
</style>
