<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="realHitView">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>리얼적중</h3>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 내용영역 -->
          <div class="boardView onlyData">
            <iframe 
              id="eventIframe" 
              class="iframeLayout"
              v-resize="{ log: true }" 
              src="/event/realHit/20211102/03/index.html" 
              width="100%" 
              scrolling="no" 
              frameborder="0"
            >
            </iframe>
            <div class="modalDim imgLayerPop" v-if="dim.show">
              <div class="modalWrapper">
                <div class="modalContainer" v-html="dim.content">
                </div>
              </div>
            </div>
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
  name: 'RealHitViewC',
  data() {
    return {
      dim:{
        show:false,
        content:'',
      }
    }
  },
  mounted() {
    window.addEventListener('message',this.messageHandler);
  },
  beforeDestroy() {
    window.removeEventListener('message', this.messageHandler)
  },
  updated() {
  },
  methods: {
    messageHandler(e) {
      if (e.data.function == "showDim") {
        this.dim.show = true;
        this.dim.content = e.data.content;

        this.$nextTick(() => {
          var modalClose = document.querySelector(".modalDim button.modalClose");
          if (modalClose != undefined && modalClose != null) {
            modalClose.addEventListener('click', ()=>{
              this.dim.show = false;
            });
          }
        });
      }
    }
  },
  components: {
  }
}
</script>
