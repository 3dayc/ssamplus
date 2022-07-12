<template>
  <div id="mobileHeader">
    <header>
      <div class="mheaderBack">
        <button class="btnNaviM" @click="mobileMynaviOpner($event)">개인화버튼</button>
        <div class="mobilegnb" v-if="mobilegnb == 0"><h1 class="logo">쌤플러스</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 1"><h1>쌤팩</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 2"><h1>수강신청</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 3"><h1>쌤 Mall</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 4"><h1>선생님 스페셜</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 5"><h1>무료강의</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 6"><h1>시험정보</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 7"><h1>합격수기</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 8"><h1>인사이드희소</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 9"><h1>희소고시학원</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 10"><h1>공지사항</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 11"><h1>이벤트</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 12"><h1>상담센터</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 13"><h1>마이페이지</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 14"><h1>내 강의실</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 15"><h1>스마트수강신청</h1></div>
        <div class="mobilegnb" v-if="mobilegnb == 16"><h1>설정</h1></div>
      </div>
    </header>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MobileHeader',
  components: {
  },
  computed: {
  },
  data() {
    return {
      mobilegnb:0,
    }
  },
  methods: {
    mobileGnbChange(url) {
      this.mobilegnb = 0;
      if (url.includes('/mkup/ssampack')) this.mobilegnb = 1;
      else if(url.includes('/mkup/lecture')) this.mobilegnb = 2;
      else if(url.includes('/mkup/ssammall')) this.mobilegnb = 3;
      else if(url.includes('/mkup/special')) this.mobilegnb = 4;
      else if(url.includes('/mkup/openlec')) this.mobilegnb = 5;
      else if(url.includes('/mkup/exam')) this.mobilegnb = 6;
      else if(url.includes('/mkup/pass')) this.mobilegnb = 7;
      else if(url.includes('/mkup/inside')) this.mobilegnb = 8;
      else if(url.includes('/mkup/academy')) this.mobilegnb = 9;
      else if(url.includes('/mkup/bbs/notice')) this.mobilegnb = 10;
      else if(url.includes('/mkup/bbs/event')) this.mobilegnb = 11;
      else if(url.includes('/mkup/counsel')) this.mobilegnb = 12;
      else if(url.includes('/mkup/mypage')) this.mobilegnb = 13;
      else if(url.includes('/mkup/mylec')) this.mobilegnb = 14;
      else if(url.includes('/mkup/smart')) this.mobilegnb = 15;
      else if(url.includes('/mkup/setting')) this.mobilegnb = 16;
      else this.mobilegnb = 0;
    },
    mobileMynaviOpner(event) {
      if (event) {
        let sitebody = document.body;
        let mobileMyNaviArea = document.getElementById("mobileMyNavi");
        sitebody.classList.add("scrollHiden");
        mobileMyNaviArea.classList.add("on");
      }
    }
  },
  watch: {
    $route(to, from) {
      this.mobileGnbChange(to.path);
    }
  },
  mounted() {
    this.mobileGnbChange(window.location.pathname);
  }
};
</script>
