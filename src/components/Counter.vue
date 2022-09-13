<template>
  <div class="buttonsContainer">
    <button :disabled="isLoged" @click="decrementar()">-</button>
    <button :disabled="isLoged" @click="incrementar()">+</button>
    <p> {{ meal.counter }} </p>

    <button class="buttonCounter" :disabled="isLoged" @click="add(meal, listaCarrito, meal.counter)">AGREGAR</button>
    <br>
    <button class="buttonCounter buttonClean" @click="eliminarProducto(listaMeals, index)"
      v-bind:class="{ btnDiss: !isLoged }">
      Eliminar
    </button>

  </div>
</template>

<script>
export default {
  props: {
    listaCarrito: Array,
    listaMeals: Array,
    meal: Object,
    isLoged: Boolean,
    index: Number,
  },
  methods: {
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

    add(meal, listaCarrito, counter) {
      const findProductIndex = listaCarrito.findIndex(
        (productFind) => meal.id === productFind.id
      );
      if (findProductIndex !== -1) {
        if (listaCarrito[findProductIndex].bought + counter <= meal.quantity) {
          listaCarrito[findProductIndex].bought =
            listaCarrito[findProductIndex].bought + counter;
        } else {
          alert(
            `La cantidad que quiere sumar supera a la del stock. Disponemos de ${meal.quantity
            } unidades. Puede agregar ${meal.quantity - listaCarrito[findProductIndex].bought
            } unidades mas como maximo`
          );
        }
      } else {
        listaCarrito.push({
          id: meal.id,
          titulo: meal.titulo,
          costo: meal.costo,
          portada: meal.portada,
          bought: meal.counter,
        });
      }
    },
    eliminarProducto(listaMeals, i) {
      listaMeals.splice(i, 1)
    }
  }
}
</script>

<style scoped>
.buttonsContainer {
  position: absolute;
  bottom: 20px;
}

.buttonsContainer button {
  min-width: 30px;
  margin-right: 2px;
  margin-left: 2px;
}

.buttonCounter {
  width: 90px;
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
</style>