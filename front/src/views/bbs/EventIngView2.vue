<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="eventIngView">
          <div class="subTit">
            <h3>진행중인 이벤트</h3>
          </div>
          <!-- 상세 -->
          <div class="boardDetail">
            <!-- <img :src="require(`@/assets/images/thumbnail/@tmp_event01.png`)" alt="이벤트 이미지"/> -->
            <iframe 
              id="eventIframe" 
              class="iframeLayout"
              v-resize="{ log: true }" 
              src="/event/fullEvent/20211117/01/index.html" 
              width="100%" 
              scrolling="no" 
              frameborder="0"
            >
            </iframe>
          </div>
          <!-- //상세 -->
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
  name: 'EventIngView',
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
