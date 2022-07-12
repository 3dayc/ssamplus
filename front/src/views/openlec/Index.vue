<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="openLecIndex" v-if="!this.mobile">
          <IndexMainPc />
        </div>
        <div class="openLecIndex mCase" v-else-if="this.mobile">
          <IndexMainM />
        </div>
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
import IndexMainPc from '@/views/openlec/IndexMainPc.vue';
import IndexMainM from '@/views/openlec/IndexMainM.vue';

export default {
  mixins: [Mixin],
  name: 'Index',
  components: {
    IndexMainPc,
    IndexMainM
  },
  data() {
    return {
    }
  },
}
</script>
