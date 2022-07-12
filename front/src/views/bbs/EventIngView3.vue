<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div id="fullPage">
          <!-- <img :src="require(`@/assets/images/thumbnail/@tmp_event01.png`)" alt="이벤트 이미지"  style="display:block;width:100%;"/> -->
          <iframe 
            id="eventIframe" 
            class="iframeLayout"
            v-resize="{ log: true }" 
            src="/event/fullEvent/20211102/01/index.html" 
            width="100%" 
            scrolling="no" 
            frameborder="0"
          >
          </iframe>
          <div class="modalDim" v-if="dim.show">
            <div class="modalWrapper">
              <div class="modalContainer" v-html="dim.content">
              </div>
            </div>
          </div>
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
  name: 'EventPastView',
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
