<template>
  <div class="cardContainer">
    <div class="tituloContainer">
      <h1>Detalle del Producto</h1>
    </div>
    <div class="infoContainer">
      <div class="imgContainer">
        <div class="imgSubContainer">
          <img :src="product.portada" alt="imagen" />
        </div>
      </div>
      <div class="textContainer">
        <h3>{{ product.titulo }}</h3>
        <p>Costo: ${{ product.costo }}</p>
        <p>Stock: {{ product.quantity }} unidades</p>
        <h4>Puntuación</h4>
        <div class="starsContainer">
          Quality:
          <p
            class="stars"
            v-for="i in Math.round(this.product.quality / 2)"
            :key="i"
          >
            <font-awesome-icon icon="fa-solid fa-star" />
          </p>
        </div>
        <div class="starsContainer">
          Taste:
          <p
            class="stars"
            v-for="i in Math.round(this.product.taste / 2)"
            :key="i"
          >
            <font-awesome-icon icon="fa-solid fa-star" />
          </p>
        </div>
        <div class="starsContainer">
          Healthy:
          <p
            class="stars"
            v-for="i in Math.round(this.product.healthy / 2)"
            :key="i"
          >
            <font-awesome-icon icon="fa-solid fa-star" />
          </p>
        </div>
        <div class="starsContainer">
          Fragrance:
          <p
            class="stars"
            v-for="i in Math.round(this.product.fragrance / 2)"
            :key="i"
          >
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
  props: {
    coderMeals: Array,
  },
  data() {
    return {
      product: { ...this.coderMeals[this.$route.params.id - 1] },
    };
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

h1{
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
