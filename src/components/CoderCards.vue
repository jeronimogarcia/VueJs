<template>
  <div class="card d-flex">
    <h3> {{meal.titulo}} </h3>
    <div>{{meal.id}}</div>
    <p>${{meal.costo}}</p>
    <DeleteMeal :index='index' @deleteMeal="deleteMeal"/>
  </div>
</template>

<script>

import DeleteMeal from './DeleteMeal.vue';

export default {
  props: {
    deleteMeal: Function,
    meal: Object,
    index: Number
  },
  components: { DeleteMeal },
}
</script>


<style scoped>
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
  bottom: 160px;
}

.detailButton{
  position: absolute;
  bottom: 15px;
  width: 90px;
  text-transform: uppercase;
}

.detailButton:hover{
  background-color: aqua;
}
</style>