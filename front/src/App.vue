<template>
  <div id="app" v-if="this.frame && !popup && !this.mobile">
    <!-- wrap_back -->
  	<div id="wrapBack">
  		<PcHeader />
  		<PcMyNavi />
  		<!-- Wrap -->
  		<div id="wrap">
  			<router-view :key="$route.path"/>
        <PcFooter />
  		</div>
  		<!-- //Wrap -->
  	</div>
  	<!-- //wrap_back -->
  </div>
  <div id="app" v-else-if="this.frame && !popup && this.mobile">
  	<!-- wrap_back -->
  	<div id="wrapBack" :class="wrapBackClass">
  	  <MobileGnb />
      <MobileToolBar />
  		<!-- Wrap -->
  		<div id="wrap">
  	  	<MobileHeader />
        <router-view :key="$route.path"/>
        <MobileFooter />
  		</div>
  		<!-- //Wrap -->
      <MobileMyNavi />
  	</div>
  	<!-- //wrap_back -->
  </div>
  <div v-else-if="!this.frame && popup">
    <router-view />
  </div>
  <div v-else>
    <div id="wrapBack" :class="wrapBackClass">
      <router-view />
    </div>
  </div>
</template>
<script>
import PcHeader from '@/views/include/PcHeader.vue';
import PcMyNavi from '@/views/include/PcMyNavi.vue';
import PcFooter from '@/views/include/PcFooter.vue';
import MobileGnb from '@/views/include/MobileGnb.vue';
import MobileMyNavi from '@/views/include/MobileMyNavi.vue';
import MobileFooter from '@/views/include/MobileFooter.vue';
import MobileToolBar from '@/views/include/MobileToolBar.vue';
import MobileHeader from '@/views/include/MobileHeader.vue';

export default {
  data() {
    return {
		  frame: true,
      popup: false,
      mobile: false,
      wrapBackClass: ''
    };
  },
  components: {
    PcHeader,
    PcMyNavi,
    PcFooter,
    MobileGnb,
    MobileFooter,
    MobileToolBar,
    MobileHeader,
    MobileMyNavi
  },
  methods: {
    isFrame: function(pathValue) {
      let path = pathValue == undefined ? window.location.pathname : pathValue;

      if(path.includes('/worklist')) this.frame = false;
      else if(path.includes('/uicomponent')) this.frame = false;
      else if(path.includes('/login')) this.frame = false;
      else if(path.includes('/findAccount')) this.frame = false;
      else if(path.includes('/join')) this.frame = false;
      else if(path.includes('/intro')) this.frame = false;
      else if(path.includes('/error')) this.frame = false;
      else if(path.includes('/mkup/guide')) this.frame = false;
      else this.frame = true;

      if(this.layout === 'noFrame') this.frame = false;
    },
    isMobile: function() {
      this.mobile = false;
      this.wrapBackClass = '';

      if(/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.mobile = true;
        this.wrapBackClass = 'mDevice android';
      } else if(/iPhone|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        this.mobile = true;
        this.wrapBackClass = 'mDevice ios';
      }else {
        this.mobile = false;
        this.wrapBackClass = '';
      }
    }
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
    if (this.layout === 'popup') this.popup = true, this.frame = false;
    else if (this.layout === 'noFrame') this.frame = false;

    this.isMobile();
  },

};
</script>
