<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="specialEventView">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>선생님 이벤트</h3>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 내용영역 -->
          <div class="boardView onlyData">
            <img :src="require(`@/assets/images/thumbnail/@tmp_detail01.png`)" alt="슬기로운 청음 바다"/>
            <br/><br/>
            안녕하세요.
            <br/>
            교사의 꿈을 위한 동반자 쌤플러스입니다.
          </div>
          <!-- //내용영역 -->
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
