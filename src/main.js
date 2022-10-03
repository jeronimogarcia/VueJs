import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";

import store from "./store/index";
import Vuelidate from "vuelidate";
import axios from 'axios'
import VueAxios from 'vue-axios'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
  faCartShopping,
  faSquareXmark,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCartShopping, faSquareXmark, faStar);

Vue.use(VueAxios, axios)
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
