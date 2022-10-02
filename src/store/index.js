import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    storeCarrito: [],
  },
  mutations: {
    addCarrito(state, meal) {
      state.storeCarrito.push({
        idt: meal.idt,
        title: meal.title,
        price: meal.price,
        portrait: meal.portrait,
        bought: meal.counter,
      });
    },
  },
  getters: {
    getCarrito(state){
      return state.storeCarrito
    }
  },
  actions: {
    addMealCarrito({commit}, meal){
      commit('addCarrito', meal)
    }
  },
  modules: {},
});
