<template>
  <div class="modalContainer" @click="$emit('productDetail')">
    <div class="modalCard">
      <h3> {{meal.titulo}} </h3>
      <img :src="meal.portada" :alt="meal.titulo">
      <div>
        <h2>Review</h2>
        <div class="revieContainer">
          <div>
            <ul>
              <li>Quality: {{meal.quality}}</li>
              <li>Taste: {{meal.taste}}</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Healthy: {{meal.healthy}}</li>
              <li>Fragrance: {{meal.fragrance}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    meal: Object
  }
}
</script>

<style scoped>
.modalContainer {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modalCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 10% auto;
  border: solid 1px black;
  width: 500px;
  height: 500px;
  background-color: rgb(248, 248, 241);
  box-shadow: rgb(55, 54, 54) 5px 5px;
}

.modalCard h3 {
  font-weight: bold;
  font-size: 24px;
  margin-top: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #006bff;
  color: white;
  width: 100%;
}

.modalCard h2 {
  margin-bottom: 0px;
  margin-top: 40px;
  font-size: 20px;
  color: black;
  font-weight: bold;
}

.modalCard img {
  width: 75%;
  height: 250px;
}

.revieContainer {
  display: flex;
  flex-direction: row;
}

.revieContainer ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 18px;
  color: black;
  font-weight: bold;

}
</style>