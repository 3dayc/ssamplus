<template lang="html">
  <div>

    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div id="fullPage"><img :src="require(`@/assets/images/thumbnail/@tmp_detail01.png`)" alt="슬기로운 청음 바다" style="width:100%;"/></div>
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
  name: 'EventView',
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
