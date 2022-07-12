<template lang="html">  
    <!-- content -->
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="lectureIndex">
        <ul>
          <li><router-link to="/lecture/index/mjedu"><img :src="require(`@/assets/images/thumbnail/@mainBannerSample2.png`)" alt="" /></router-link></li>
          <li><router-link to="/openlec/freelec"><img :src="require(`@/assets/images/thumbnail/@mainBannerSample7.png`)" alt="" /></router-link></li>
          <li><router-link to="/bbs/event/ing"><img :src="require(`@/assets/images/thumbnail/@mainBannerSample8.png`)" alt="" /></router-link></li>
        </ul>
      </div>
      <!-- //page layout -->
    </article>
    </div>
    <!-- //content -->    
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

import * as api from '@/api/Sample.js';
export default {
  // mixins: [Mixin],
  name: 'Index',
  components: {
  },
  data() {
    return {
    }
  },
  async mounted() {
    const r = await api.test();
    console.log(r);
    console.log(1);
  },
}
</script>
