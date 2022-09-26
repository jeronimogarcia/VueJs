<template>
  <div>
    <h1>Lista Productos</h1>
    <div class="cardContainer">
      <div v-for="(meal, index) in coderMeals" :key="meal.name" class="card">
        <img :src="meal.portada" :alt="meal.titulo" />
        <h3>{{ meal.titulo }}</h3>
        <p>
          $<b> {{ meal.costo }} </b>
        </p>
        <Counter
          :meal="meal"
          :index="index"
          :coderMeals="coderMeals"
          :cartList="cartList"
        />
        <router-link v-bind:to="'/product/' + meal.id"
          ><b-button class="buttonDetalle btn-info">Ver Detalle</b-button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "../components/Counter.vue";

export default {
  props: {
    coderMeals: Array,
    cartList: Array,
  },
  data() {
    return {};
  },
  methods: {},
  components: { Counter },
};
</script>

<style scoped>
h1 {
  margin-top: 50px;
}
.cardContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  margin-top: 20px;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  height: 510px;
  padding: 20px 20px;
  margin: 10px 10px;
  font-size: large;
  color: grey;
  border-color: palegreen;
  border-style: solid;
  border-width: 1px;
  background-color: whitesmoke;
  transition: 0.7s;
  position: relative;
}
.card img {
  width: 250px;
  height: 180px;
}
.card:hover {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
}
.card .btn-success {
  width: 120px;
}
.card p {
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  bottom: 135px;
}
.detailButton {
  position: absolute;
  bottom: 15px;
  width: 100px;
  text-transform: uppercase;
}
.detailButton:hover {
  background-color: aqua;
}

.buttonDetalle{
  width: 140px;
}
</style>
