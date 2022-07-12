<template lang="html">
  <div>
    <div class="pageTit">
      <h2>온라인 모의고사</h2>
      <span><router-link to="/mkup/teacher/statsDaily">통계</router-link><em>온라인 모의고사</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="onlineMockTest"><!-- class 없어도 유지 -->

			</div>
			<!-- //page layout -->
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'OnlineMockTest',
  data() {
    return {

    }
  },
  methods: {
  },
  components: {
  },
}
</script>
