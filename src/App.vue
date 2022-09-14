<template>
  <div id="app">
    <div class="container">
      <CoderCards 
      v-for="(meal, index) in codermeals" 
      :index="index" 
      :key="meal.id" 
      :meal="meal"
      @deleteMeal="deleteMeal"
      />
    </div>
  </div>
</template>

<script>
import CoderCards from './components/CoderCards.vue';

export default {
  name: 'App',
  components: {
    CoderCards,
  },
  data() {
    return {
      codermeals: [
        {
          id: 1,
          titulo: "Spaghetti alla puttanesca",
          costo: 575.0,
        },
        {
          id: 2,
          titulo: "Pizza Napoletana ai carciofi",
          costo: 675.0,
        },
        {
          id: 3,
          titulo: "Porchetta umbra a cottura lunga",
          costo: 845.0,
        },
        {
          id: 4,
          titulo: "Orecchiette alle cime di rapa",
          costo: 845.0,
        },
      ],
    }
  },
  methods: {
    deleteMeal(i) {
      this.codermeals.splice(i, 1)
    },
  }
}
</script>

<style scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 91.5vh;
  padding-bottom: 80px;
}

.container {
  display: flex;
}
</style>
