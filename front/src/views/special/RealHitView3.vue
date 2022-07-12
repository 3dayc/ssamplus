<template lang="html">
  <div>
  
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <img :src="require(`@/assets/images/thumbnail/@tmp_detail02.png`)" alt="" style="width:100%;"/>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'RealHitViewC',
  data() {
    return {
      
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
