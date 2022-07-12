import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./api/common/Axios";

import "./plugins/VueMobileDetection";
import "./plugins/VeeValidate";
import "./plugins/Echart";
import "./plugins/Swiper";
import "./plugins/Multiselect";
import "./plugins/CountDown";
import "./plugins/iframeResizer";
import "./plugins/VueYoutube";
import "./plugins/mediaplayer";
import "./plugins/catvod";

import styles from "./assets/css/application.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
