<template>
  <div class="cardContainer" v-if="product">
    <div class="titleContainer">
      <h1>Detalle del Producto</h1>
    </div>
    <div class="infoContainer">
      <div class="imgContainer">
        <div class="imgSubContainer">
          <img :src="product.portrait" alt="imagen" />
        </div>
      </div>
      <div class="textContainer">
        <h3>{{ product.title }}</h3>
        <p>Costo: ${{ product.price }}</p>
        <p>Stock: {{ product.quantity }} unidades</p>
        <h4>Puntuación</h4>
        <div class="starsContainer">
          Quality:
          <p class="stars" v-for="i in crearLista(product.quality)" :key="i">
            <font-awesome-icon icon="fa-solid fa-star" />
          </p>
        </div>
        <div class="starsContainer">
          Taste:
          <p class="stars" v-for="i in crearLista(product.taste)" :key="i">
            <font-awesome-icon icon="fa-solid fa-star" />
          </p>
        </div>
        <div class="starsContainer">
          Healthy:
          <p class="stars" v-for="i in crearLista(product.healthy)" :key="i">
            <font-awesome-icon icon="fa-solid fa-star" />
          </p>
        </div>
        <div class="starsContainer">
          Fragrance:
          <p class="stars" v-for="i in crearLista(product.fragrance)" :key="i">
            <font-awesome-icon icon="fa-solid fa-star" />
          </p>
        </div>
      </div>
    </div>
    <router-link to="/"
      ><b-button class="mt-3 btn-success">Volver a Home</b-button></router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      urlFetch: `https://633435bf90a73d0fede99930.mockapi.io/meals/${this.$route.params.id}`,
      getData: async () => {
        await fetch(this.urlFetch)
          .then((response) => response.json())
          .then((data) => {
            this.product = data;
          })
          .catch((err) => console.error(`${err}`));
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    crearLista(propiedad) {
      let lista = [];
      let num = Math.round(propiedad / 2);
      for(let i=0; i<num; i++){
        lista.push(i)
      };
      return lista
    },
  },
};
</script>

<style scoped>
.cardContainer {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
}

.infoContainer {
  align-items: center;
  border-top: 1px solid #000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 850px;
}

.imgContainer {
  align-content: center;
  display: flex;
  height: 400px;
  justify-content: center;
  width: 400px;
}

.imgSubContainer {
  align-content: center;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.textContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 1px solid #000;
  height: 400px;
  padding-left: 30px;
  padding-top: 20px;
  width: 400px;
  font-weight: bold;
}

h1 {
  margin-top: 10px;
  margin-bottom: 15px;
}

.textContainer h3 {
  padding-bottom: 10px;
}

.textContainer h4 {
  padding-top: 20px;
  padding-bottom: 5px;
}

img {
  width: 320px;
  height: 210px;
}

.starsContainer {
  display: flex;
}
.stars {
  color: orange;
}
</style>
