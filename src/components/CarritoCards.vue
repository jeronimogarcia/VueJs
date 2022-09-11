<template>
  <div>
    <h2>{{carritoTitle}}</h2>
    <div class="tableContainer">
      <table>
        <thead>
          <th>ID</th>
          <th>Nombre</th>
          <th>Foto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>SubTotal</th>
        </thead>
        <tbody>
          <tr v-for="producto in listaCarrito" :key="producto.id" :producto="producto">
              <td>{{producto.id}}</td>
              <td>{{producto.titulo}}</td>
              <td class="cartImage"><img :src="producto.portada" :alt="producto.titulo"></td>
              <td>${{producto.costo}}</td>
              <td>{{producto.bought}}</td>
              <td>$ {{producto.bought*producto.costo}}</td>
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

<style scoped>
.tableContainer {
  display: flex;
  justify-content: center;
}

.tableContainer table {
  width: 70%;
}


.tableContainer thead {
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

.cartImage img {
  width: 70px;
}
</style>