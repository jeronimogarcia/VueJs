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
          <th>Quitar Producto</th>
        </thead>
        <tbody>
          <tr v-for="(producto, index) in listaCarrito" :key="producto.id" :producto="producto">
            <td>{{producto.id}}</td>
            <td>{{producto.titulo}}</td>
            <td class="cartImage"><img :src="producto.portada" :alt="producto.titulo"></td>
            <td>${{producto.costo}}</td>
            <td>{{producto.bought}}</td>
            <td>$ {{producto.bought*producto.costo}}</td>
            <td>
              <p class="crossSize">
                <font-awesome-icon icon="fa-solid fa-square-xmark" @click="quitarProductoCarrito(index)" />
              </p>
            </td>
          </tr>
        </tbody>
        <thead>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>Total Compra</th>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>${{ calculoTotal }}</td>
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
  },
  methods: {
    quitarProductoCarrito(i) {
      this.listaCarrito.splice(i, 1)
    }
  },
  computed: {
    calculoTotal() {
      return (this.listaCarrito.reduce((suma, item) => {
        return suma + (item.bought*item.costo)
      }, 0));
    }
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

.crossSize {
  font-size: 45px;
  margin: 5px;
}
</style>