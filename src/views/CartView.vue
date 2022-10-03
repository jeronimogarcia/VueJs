<template>
  <div>
    <div v-if="cartLength() != 0">
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
              v-for="(producto, index) in cart()"
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
                    @click="removeCartProduct(index)"
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
    <div v-if="cartLength() == 0">
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
  data(){
    return{
      putURL:'https://633435bf90a73d0fede99930.mockapi.io/users',
      usuario: this.$store.state.user,
      carritoToBD: async () => {
      const userData = {
        user: this.usuario.user ,
        email: this.usuario.email,
        password: this.usuario.password,
        id: this.usuario.id,
        carrito: this.usuario.carrito,
        isAdmin: this.usuario.isAdmin,
      };
      await this.axios
        .put(this.putURL + "/" + this.$store.state.userLoggedId, userData)
        .then((response) => response.data)
        .catch((err) => console.error(err));
    },
    }
  },
  methods: {
    cart() {
      return this.$store.state.storeCarrito;
    },
    cartLength() {
      return this.cart().length;
    },
    removeCartProduct(i) {
      this.cart().splice(i, 1);
      this.carritoToBD();
    },
  },
  computed: {
    calculoTotal() {
      return this.cart().reduce((suma, item) => {
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

.crossSize:hover {
  color: grey;
  cursor: pointer;
}
</style>
