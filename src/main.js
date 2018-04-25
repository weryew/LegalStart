import Vue from "vue";
import VeeValidate from "vee-validate";
import Buefy from "buefy";
import "buefy/lib/buefy.css";

import App from "./App.vue";
import router from "./router";

Vue.use(Buefy);
Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
