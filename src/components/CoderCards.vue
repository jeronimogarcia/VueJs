<template>
    <div class="card d-flex">
        <img :src="meal.portada" :alt="meal.titulo">
        <h3> {{meal.titulo}} </h3>
        <p>$ <b> {{meal.costo}} </b> </p>
        <Counter :listaCarrito='listaCarrito' :meal='meal' />
    </div>

</template>

<script>

import Counter from './Counter.vue';

export default {
    props: {
        meal: Object,
        listaCarrito: Array,
    },
    components: { Counter }
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
    background-color: whitesmoke !important;
    transition: 0.7s;
}

.card img {
    width: 250px;
    height: 180px;
}

.card:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
}

.card button {
    width: 40px;
}

.card .btn-success {
    width: 120px;
}

.card p {
    font-size: 20px;
    font-weight: bold;
}

</style>