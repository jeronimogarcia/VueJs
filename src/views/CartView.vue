<template>
  <div>
    <div v-if="this.$store.state.storeCarrito.length != 0">
      <h1>Lista Carrito</h1>
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
            <tr
              v-for="(producto, index) in this.$store.state.storeCarrito"
              :key="producto.idt"
              :producto="producto"
            >
              <td>{{ producto.idt }}</td>
              <td>{{ producto.title }}</td>
              <td class="cartImage">
                <img :src="producto.portrait" :alt="producto.title" />
              </td>
              <td>${{ producto.price }}</td>
              <td>{{ producto.bought }}</td>
              <td>$ {{ producto.bought * producto.price }}</td>
              <td>
                <p class="crossSize">
                  <font-awesome-icon
                    icon="fa-solid fa-square-xmark"
                    @click="quitarProductoCarrito(index)"
                  />
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
    <div v-if="this.$store.state.storeCarrito.length == 0">
      <h1>No hay Productos en el Carrito</h1>
      <router-link to="/"
        ><b-button class="btn btn-success"
          >Volver al Home</b-button
        ></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    quitarProductoCarrito(i) {
      this.$store.state.storeCarrito.splice(i, 1);
    },
  },
  computed: {
    calculoTotal() {
      return this.$store.state.storeCarrito.reduce((suma, item) => {
        return suma + item.bought * item.price;
      }, 0);
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 50px;
}

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

.crossSize:hover{
  color: grey;
  cursor: pointer;
}
</style>
