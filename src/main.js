import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { faCartShopping, faSquareXmark, faStar } from "@fortawesome/free-solid-svg-icons";
import router from './router/router'
library.add(faCartShopping, faSquareXmark, faStar );
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
