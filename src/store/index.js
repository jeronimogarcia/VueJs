import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    storeCarrito: [],
    isLogged: false,
    isAdmin: false,
    userLoggedId: 0,
    user: {},
    usersList: [],
    urlUsers: "https://633435bf90a73d0fede99930.mockapi.io/users",
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
    modifiedCarrito(state, cart) {
      state.storeCarrito = cart;
    },
    changeIsLogged(state) {
      state.isLogged = !state.isLogged;
    },
    changeIsAdmin(state) {
      state.isAdmin = !state.isAdmin;
    },
    userLoggedId(state, id) {
      state.userLoggedId = id;
    },
    userLogged(state, u) {
      state.user = u;
    },
    usersFetch(state) {
      axios
        .get(state.urlUsers)
        .then((response) => response.data)
        .then((data) => {
          state.usersList = data;
        })
        .catch((err) => console.error(err));
    },
  },

  getters: {
    getCarrito(state) {
      return state.storeCarrito;
    },
  },

  actions: {
    addMealCarrito({ commit }, meal) {
      commit("addCarrito", meal);
    },
    logIn({ commit }) {
      commit("changeIsLogged");
    },
    adminIn({ commit }) {
      commit("changeIsAdmin");
    },
    changeCarrito({ commit }, cart) {
      commit("modifiedCarrito", cart);
    },
    changeUserId({ commit }, id) {
      commit("userLoggedId", id);
    },
    changeUser({ commit }, u) {
      commit("userLogged", u);
    },
    getUsers({ commit }) {
      commit("usersFetch");
    },
  },

  modules: {},
});
