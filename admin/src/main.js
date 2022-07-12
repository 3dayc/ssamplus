import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/Axios';
import './plugins/VeeValidate';
import './plugins/Echart';
import './plugins/Swiper';
import './plugins/Multiselect';
// import './plugins/Vuedraggable';
import styles from './assets/css/application.min.css';
//require('@/assets/css/application.min.css');
import './plugins/CountDown';
import "./plugins/mediaplayer";
import "./plugins/catvod";
Vue.config.productionTip = false;


/* ===== custom Component ===== */
// 사이트 관리 - 랜딩방식 컴포넌트
import LandingTypeComponent from './views/component/LandingTypeComponent';
Vue.component(LandingTypeComponent.name, LandingTypeComponent)
// 게시판 관리 - 구분선택 컴포넌트
import RecruitmentTypeComponent from './views/component/RecruitmentTypeComponent';
Vue.component(RecruitmentTypeComponent.name, RecruitmentTypeComponent)


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
