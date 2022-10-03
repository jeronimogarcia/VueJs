<template>
  <div class="buttonsContainer">
    <b-button
      class="btn-warning"
      @click="decrementar()"
      :disabled="$store.state.isAdmin"
      >-</b-button
    >
    <b-button
      class="btn-warning"
      @click="incrementar()"
      :disabled="$store.state.isAdmin"
      >+</b-button
    >
    <p>{{ meal.counter }}</p>
    <b-button
      class="buttonCounter btn-success"
      @click="add(meal, carrito(), meal.counter)"
      :disabled="$store.state.isAdmin"
      >AGREGAR</b-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
  props: {
    coderMeals: Array,
    meal: Object,
    index: Number,
  },
  methods: {
    carrito() {
      return this.$store.state.storeCarrito;
    },
    decrementar() {
      if (this.meal.counter > 1) {
        this.meal.counter--;
      }
    },
    incrementar() {
      if (this.meal.counter < this.meal.quantity) {
        this.meal.counter++;
      }
    },
    add(meal, cartList, counter) {
      const findProductIndex = cartList.findIndex(
        (productFind) => meal.idt === productFind.idt
      );
      if (findProductIndex !== -1) {
        if (cartList[findProductIndex].bought + counter <= meal.quantity) {
          cartList[findProductIndex].bought =
            cartList[findProductIndex].bought + counter;
          this.carritoToBD();
        } else {
          alert(
            `La cantidad que quiere sumar supera a la del stock. Disponemos de ${
              meal.quantity
            } unidades. Puede agregar ${
              meal.quantity - cartList[findProductIndex].bought
            } unidades mas como maximo`
          );
        }
      } else {
        this.$store.dispatch("addMealCarrito", meal);
        this.carritoToBD();
      }
    },
  },
};
</script>

<style scoped>
.buttonsContainer {
  position: absolute;
  bottom: 15px;
}
.buttonsContainer button {
  min-width: 45px;
  margin-right: 2px;
  margin-left: 2px;
}
.buttonCounter {
  width: 150px;
  margin-top: 10px;
}
.buttonsContainer button:hover {
  background-color: rgb(93, 204, 19);
}
.btnDiss {
  display: none;
}
.buttonsContainer .buttonClean:hover {
  background-color: red;
}
p {
  font-weight: bold;
  margin-top: 5px;
}
</style>
