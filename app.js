var app = new Vue({
  el: "#app",
  data: {
    bool: false,
    bool2: false,
    bool3: false,
    listaFrutas: [
      { name: "manzana", price: 25 },
      { name: "banana", price: 20 },
      { name: "pera", price: 15 },
      { name: "sandia", price: 35 },
    ],
    listaMates: [
      { oferta: false, id: 0, name: "rosa", width: 20, height: 50, price: 500 },
      { oferta: false, id: 1, name: "verde", width: 16, height: 40, price: 1000 },
      { oferta: false, id: 2, name: "rojo", width: 10, height: 45, price: 250 },
      { oferta: false, id: 3, name: "azul", width: 15, height: 53, price: 475 },
      { oferta: false, id: 4, name: "plateado", width: 22, height: 58, price: 510 },
      { oferta: false, id: 5, name: "de vidrio", width: 25, height: 60, price: 800 },
    ],
  },

  methods: {
    toggleBool() {
      this.bool = !this.bool;
    },
    toggleBool2() {
      this.bool2 = !this.bool2;
    },
    toggleBool3() {
      this.bool3 = !this.bool3;
    },
    toggleOferta(item) {
      item.oferta = !item.oferta;
    },
    size(width, height) {
      return (width * height) / 2;
    },
    tamañoColor(promedio) {
      if (promedio >= 400) {
        return { color: "red" };
      }
      if (promedio > 200) {
        return { color: "blue" };
      } else {
        return { color: "green" };
      }
    },
    getColor(index) {
      return index % 2 ? "gris" : "blanco";
    },
  },

  computed: {
    computedBool() {
      return this.bool && this.bool2 && this.bool3;
    },
  },
});
