<template>
    <div>
        <h2>{{carritoTitle}}</h2>

        <div class="tableContainer">
            <table>
                <thead>
                    <th>
                        <td>ID</td>
                        <td>Nombre</td>
                        <td>Foto</td>
                        <td>Precio</td>
                        <td>Cantidad</td>
                        <td>SubTotal</td>
                    </th>
                </thead>
                <tbody>
                    <tr v-for="producto in listaCarrito" :key="producto.id" :producto="producto">
                        <div>
                            <td>{{producto.id}}</td>
                            <td>{{producto.titulo}}</td>
                            <td class="cartImage"><img :src="producto.portada" :alt="producto.titulo"></td>
                            <td>${{producto.costo}}</td>
                            <td>{{producto.bougth}}</td>
                            <td>$ {{producto.bougth*producto.costo}}</td>
                        </div>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        carritoTitle: String,
        listaCarrito: Array
    }

}
</script>

<style>

.tableContainer {
    display: flex;
    justify-content: center;
}

.tableContainer table {
}

.tableContainer thead {
    width: 25%;
    font-size: 24px;
}

.tableContainer tbody tr {
    border-top: 1px solid black;
    padding-top: 5px;
}

.tableContainer tbody td {
    font-size: 22px;
    background-color: white;
}

.cartImage img{
    width: 40px;
}
</style>