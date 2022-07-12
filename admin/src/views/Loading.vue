<template lang="html">
  <div>
    <div class="loadingSpinner"><div class="loading"><span></span></div></div>
    <div class="pageTit"><h2>회원 조회</h2><span><router-link to="">회원/선생님</router-link><em>회원 조회</em></span></div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div> <!-- class 없어도 유지 -->

        </div>
        <!-- //page layout -->
      </article>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'Layout',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>
