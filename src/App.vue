<template>
  <div id="app">
    <Header 
    :title='title' 
    :listaCarrito='listaCarrito' 
    />
    <AdminUser 
    :isLoged="isLoged" 
    @changeBoolean="changeBoolean" 
    />
    <RegisterForm :listaUsuarios="listaUsuarios" />
    <LoginForm :listaUsuarios="listaUsuarios" @changeBoolean="changeBoolean" />
    <h2 class="titleHome">{{titleHome}}</h2>
    <div class="cardContainer">
      <CoderCards 
      v-for="(meal, index) in codermeals" 
      :index="index" 
      :key="meal.id" 
      :meal="meal" 
      :listaCarrito='listaCarrito' 
      :isLoged="isLoged" 
      :listaMeals="codermeals"
      />
    </div>
    <div v-if="listaCarrito.length!=0">
      <CarritoCards 
      :listaCarrito="listaCarrito" 
      :carritoTitle="carritoTitle" 
      />
    </div>
    <Footer :footerTitle='footerTitle' />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import CoderCards from './components/CoderCards.vue';
import CarritoCards from './components/CarritoCards.vue';
import Footer from './components/Footer.vue';
import RegisterForm from './components/RegisterForm.vue';
import LoginForm from './components/LoginForm.vue';
import AdminUser from './components/AdminUser.vue';



export default {
  name: 'App',
  components: {
    Header,
    CoderCards,
    CarritoCards,
    Footer,
    RegisterForm,
    LoginForm,
    AdminUser
  },
  data() {
    return {
      title: 'CoderMeals - VUE/CLI ',
      carritoTitle: 'Lista Carrito',
      footerTitle: 'CoderHouse - CoderMeals',
      titleHome: 'Nuestras Comidas',
      listaCarrito: [],
      listaUsuarios: [],
      isLoged: false,
      codermeals: [
        {
          id: 1,
          titulo: "Spaghetti alla puttanesca",
          costo: 575.0,
          portada:
            "https://4.bp.blogspot.com/-D5Wvi_gX_Kg/WLatk_GVnKI/AAAAAAAAA5M/-y0gB26R0Dkb01QmdgfZqQALtd9NMV2DACLcB/s1600/P70301-072354.jpg",
          counter: 1,
          quantity: 5,
          quality:9,
          taste: 9,
          healthy: 10,
          fragrance: 8
        },
        {
          id: 2,
          titulo: "Pizza Napoletana ai carciofi",
          costo: 675.0,
          portada:
            "https://static.cookist.it/wp-content/uploads/sites/21/2017/12/istock-480277738.jpg",
          counter: 1,
          quantity: 6,
          quality:7,
          taste: 7,
          healthy: 9,
          fragrance: 8,
        },
        {
          id: 3,
          titulo: "Porchetta umbra a cottura lunga",
          costo: 845.0,
          portada:
            "https://www.fontecesia.it/wp-content/uploads/2018/11/porchetta-umbra-1920x1280.jpg",
          counter: 1,
          quantity: 10,
          quality:10,
          taste: 7,
          healthy: 7,
          fragrance: 9
        },
        {
          id: 4,
          titulo: "Orecchiette alle cime di rapa",
          costo: 845.0,
          portada:
            "https://irepo.primecp.com/2016/03/259860/recipe-8673_ExtraLarge1000_ID-1461628.jpg",
          counter: 1,
          quantity: 4,
          quality:8,
          taste: 6,
          healthy: 6,
          fragrance: 7,
        },
      ],
    }
  },
  methods: {
    changeBoolean() {
      this.isLoged = !this.isLoged
    }
  }
}
</script>

<style scope>
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

.cardContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;

}

.titleHome {
  font-size: 28px;
}
</style>
