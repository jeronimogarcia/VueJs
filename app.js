Vue.component(`component-contador`, {
  props: {
    producto: Object,
    listcart: this.listcart,
  },
  template: `<div>
    <button @click="incrementar()">+</button>
    <button @click="decrementar()">-</button>
    <p> {{ producto.counter }} </p>
    <button class="btn btn-success" @click="add(producto, listcart, producto.counter)">AGREGAR</button>
  </div>`,
  methods: {
    incrementar() {
      if (this.producto.counter < this.producto.quantity) {
        this.producto.counter++;
      }
    },
    decrementar() {
      if (this.producto.counter > 1) {
        this.producto.counter--;
      }
    },
    add(producto, listcart, counter) {
      const findProductIndex = listcart.findIndex(
        (productFind) => producto.id === productFind.id
      );
      if (findProductIndex !== -1) {
        if (listcart[findProductIndex].bougth + counter <= producto.quantity) {
          listcart[findProductIndex].bougth =
            listcart[findProductIndex].bougth + counter;
        } else {
          alert(
            `La cantidad que quiere sumar supera a la del stock. Disponemos de ${
              producto.quantity
            } unidades. Puede agregar ${
              producto.quantity - listcart[findProductIndex].bougth
            } unidades mas como maximo`
          );
        }
      } else {
        listcart.push({
          id: producto.id,
          titulo: producto.titulo,
          costo: producto.costo,
          portada: producto.portada,
          bougth: producto.counter,
        });
      }
    },
  },
  computed: {},
});

Vue.component("codermeals", {
  props: {
    producto: Object,
    listcart: this.listcart,
  },
  template: `
  <div align="center">
      <img :src="producto.portada" :alt="producto.titulo">
      <h3> {{producto.titulo}} </h3>
      <p>$ <b> {{producto.costo}} </b> </p>
      <component-contador :producto="producto" :listcart="listcart"></component-contador>
  </div>
  `,
});

var app = new Vue({
  el: "#app",
  data: {
    welcomeMessage: "Vue JS --- Trabajo Práctico Dos: Componentes",
    listCart: [],
    codermeals: [
      {
        id: 1,
        titulo: "Spaghetti alla puttanesca",
        costo: 575.0,
        portada:
          "https://4.bp.blogspot.com/-D5Wvi_gX_Kg/WLatk_GVnKI/AAAAAAAAA5M/-y0gB26R0Dkb01QmdgfZqQALtd9NMV2DACLcB/s1600/P70301-072354.jpg",
        counter: 1,
        quantity: 5,
      },
      {
        id: 2,
        titulo: "Pizza Napoletana ai carciofi",
        costo: 675.0,
        portada:
          "https://static.cookist.it/wp-content/uploads/sites/21/2017/12/istock-480277738.jpg",
        counter: 1,
        quantity: 6,
      },
      {
        id: 3,
        titulo: "Porchetta umbra a cottura lunga",
        costo: 845.0,
        portada:
          "https://www.fontecesia.it/wp-content/uploads/2018/11/porchetta-umbra-1920x1280.jpg",
        counter: 1,
        quantity: 10,
      },
      {
        id: 4,
        titulo: "Orecchiette alle cime di rapa",
        costo: 845.0,
        portada:
          "https://irepo.primecp.com/2016/03/259860/recipe-8673_ExtraLarge1000_ID-1461628.jpg",
        counter: 1,
        quantity: 4,
      },
    ],
  },
  methods: {},
  computed: {},
});
