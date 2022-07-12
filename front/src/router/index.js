import Vue from 'vue';
import VueRouter from 'vue-router';
import mkRoutes from "./mkRoutes";

import LectureRoute from "./LectureRoute";

// import eRoute from "./eRoute";
// //import adminRoutes from "./adminRoutes";
// import lectureRoute from "./lectureRoute";
// import managerRouter from "./managerRouter";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...mkRoutes, ...LectureRoute],
  scrollBehavior: () => ({ y: 0 }),
});

const DEFAULT_TITLE = 'KG 에듀원 쌤플러스';
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});


export default router;
