<template>    
  
  <div>
    <MobileSnb v-if="this.$isMobile()"/>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.$isMobile()"/>      
      <!-- content -->
      <router-view :key="$route.path"/>  
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>

</template>

<script>
import MobileSnb from './components/SNB/Mobile/LectureMobileSNB.vue';
import PcSnb from './components/SNB/Pc/LectureSNB.vue';

export default {
  name: 'DefaultLayout',
  components: {
    PcSnb,
    MobileSnb
  },
  data() {
    return {            
      mobileSnb2:0,
      ssamChoiceTrigger:''
    }
  },
};
</script>
