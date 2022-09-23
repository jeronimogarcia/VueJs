<template>
  <div class="cardContainer">
    <div v-for="(meal, index) in coderLista" :key="meal.name" class="card">
      <img :src="meal.portada" :alt="meal.titulo" />
      <h3>{{ meal.titulo }}</h3>
      <p>
        $<b> {{ meal.costo }} </b>
      </p>
      <button @click="eliminar(index)" class="detailButton">Borrar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coderListaMeals: Array,
  },
  data(){
    return{
      coderLista: [...this.coderListaMeals]
    }
  },
  methods:{
    eliminar(index){
      this.coderLista.splice(index, 1)
    }
  }
};
</script>

<style scoped>
.cardContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  height: 450px;
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
  bottom: 90px;
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
</style>
