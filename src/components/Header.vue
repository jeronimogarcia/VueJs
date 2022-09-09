<template>
    <div class="headerMainContainer">
        <div class="headerBackground">
            <div class="headerContainer">
                <h1>{{title}}</h1>
                <CartWidget :listaCarrito="listaCarrito" />
            </div>
        </div>
        <NavBar />
    </div>
</template>

<script>
import CartWidget from './CartWidget.vue';
import NavBar from './NavBar.vue';

export default {
    props: {
        title: String,
        listaCarrito: Array
    },
    components: { CartWidget, NavBar }
}
</script>

<style scoped>
.headerMainContainer {
    position: fixed;
    width: 100%;
    height: 80px;
    top: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    
}

.headerBackground{
    display: flex;
    width: 100%;
    background-color: rgb(255, 255, 14);
    justify-content: center;
}

.headerContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    width: 750px;
    
}
</style>