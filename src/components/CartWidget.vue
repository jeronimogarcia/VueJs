<template>
    <div class="widgetContainer">
        <p>
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </p>
        <p>{{ calculoTotalProductos }}</p>
    </div>
</template>

<script>
export default {
    props: {
        listaCarrito: Array,
    },
    computed: {
        calculoTotalProductos() {
            return (this.listaCarrito.reduce((suma, product) => {
                return suma + product.bought
            }, 0));
        }
    }
}
</script>

<style  scoped>
.widgetContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    right: 0px;
    bottom: 7px;
}

.widgetContainer p {
    font-size: 20px;
    padding-right: 5px;
    font-style: bold;
}
</style>