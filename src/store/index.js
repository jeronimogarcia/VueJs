import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    storeCarrito: [],
    isLogged: false,
    isAdmin: false,
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
    changeIsLogged(state){
      state.isLogged = !state.isLogged
    },
    changeIsAdmin(state){
      state.isAdmin = !state.isAdmin
    }
  },
  getters: {
    getCarrito(state){
      return state.storeCarrito
    }
  },
  actions: {
    addMealCarrito({commit}, meal){
      commit('addCarrito', meal)
    },
    logIn({commit}){
      commit('changeIsLogged')
    },
    adminIn({commit}){
      commit('changeIsAdmin')
    }

  },
  modules: {},
});
