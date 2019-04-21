// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
// import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VeeValidate from 'vee-validate'
import Vue2TouchEvents from 'vue2-touch-events'
 
Vue.use(Vue2TouchEvents)
Vue.use(VeeValidate)
Vue.use(Vuetify);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  // router,
  components: { App },
  template: "<App/>"
});
