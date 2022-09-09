<template>
  <div id="app">
    <Header :title='title' />
    <div class="cardContainer">
      <CoderCards v-for="meal in codermeals" :key="meal.id" :meal="meal" :listaCarrito='listaCarrito' />
    </div>
    <div v-if="listaCarrito.length!=0">
      <CarritoCards  :listaCarrito="listaCarrito" :carritoTitle="carritoTitle" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import CoderCards from './components/CoderCards.vue';
import CarritoCards from './components/CarritoCards.vue';



export default {
  name: 'App',
  components: {
    Header,
    CoderCards,
    CarritoCards
  },
  data() {
    return {
      title: 'CoderMeals - VUE/CLI ',
      carritoTitle: 'Lista Carrito',
      listaCarrito: [],
      codermeals: [
        {
          id: 1,
          titulo: "Spaghetti alla puttanesca",
          costo: 575.0,
          portada:
            "https://4.bp.blogspot.com/-D5Wvi_gX_Kg/WLatk_GVnKI/AAAAAAAAA5M/-y0gB26R0Dkb01QmdgfZqQALtd9NMV2DACLcB/s1600/P70301-072354.jpg",
          counter: 1,
          quantity: 5,
        },
        {
          id: 2,
          titulo: "Pizza Napoletana ai carciofi",
          costo: 675.0,
          portada:
            "https://static.cookist.it/wp-content/uploads/sites/21/2017/12/istock-480277738.jpg",
          counter: 1,
          quantity: 6,
        },
        {
          id: 3,
          titulo: "Porchetta umbra a cottura lunga",
          costo: 845.0,
          portada:
            "https://www.fontecesia.it/wp-content/uploads/2018/11/porchetta-umbra-1920x1280.jpg",
          counter: 1,
          quantity: 10,
        },
        {
          id: 4,
          titulo: "Orecchiette alle cime di rapa",
          costo: 845.0,
          portada:
            "https://irepo.primecp.com/2016/03/259860/recipe-8673_ExtraLarge1000_ID-1461628.jpg",
          counter: 1,
          quantity: 4,
        },
      ],
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.cardContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
