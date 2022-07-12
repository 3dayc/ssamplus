<template>
  <div id="app" v-if="this.frame && !popup">
    <!-- Wrap -->
    <div id="wrap" :class="teacherClass">
        <h1 class="hiden">KGedu 쌤플러스 관리자</h1>
        <Header />
        <Snb />
        <!-- container -->
        <div id="container">
        <section>
          <router-view :key="$route.path"/>
        </section>
        </div>
        <!-- //container -->
    </div>
    <!-- //Wrap -->
  </div>
  <div v-else-if="this.frame && popup">
    <router-view />
  </div>
  <div v-else>
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/views/include/Header.vue';
import Snb from '@/views/include/Snb.vue';

export default {
  data() {
    return {
		  frame: true,
      teacherClass: '',
      popup: false,
    };
  },
  components: {
    Header,
    Snb,
  },
  methods: {
    isFrame: function(pathValue) {
      let path = pathValue == undefined ? window.location.pathname : pathValue;
      this.teacherClass = '';

      if(path.includes('/worklist')) this.frame = false;
      else if(path.includes('/uicomponent')) this.frame = false;
      else if(path.includes('/error')) this.frame = false;
      else if(path.includes('/login')) this.frame = false;
      else if(path.includes('/findAccount')) this.frame = false;
      else if(path.includes('/join')) this.frame = false;
      else if(path.includes('mkup/teacher')) {
        this.teacherClass = 'teacherWrap';
      }
      else this.frame = true;

      if(this.layout === 'noFrame') this.frame = false;
    },
  },
  watch: {
    $route(to, from) {
      this.isFrame(to.path);
    }
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'DefaultLayout';
    }
  },
  mounted() {
    this.isFrame();
    if (this.layout === 'popup') this.popup = true;
    else if (this.layout === 'noFrame') this.frame = false;
  },

};
</script>
