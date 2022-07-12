<template>
  <div id="mobileToolBar">
    <div class="toolBar">
      <ul>
        <li :class="{on:mobilegnbTab===true}"><button class="category" @click="mobileGnbOpner($event)">카테고리</button></li>
        <li><router-link to="/mkup/lecture/index" class="lecture">수강신청</router-link></li>
        <li><router-link to="/mkup/main" class="home">HOME</router-link></li>
        <li><router-link to="/mkup/mylec/online/my" class="mylec">내 강의실</router-link></li>
        <li><router-link to="/mkup/mypage/payment/basket" class="basket">장바구니</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MobileToolBar',
  components: {
  },
  data() {
    return {
      mobilegnbTab:false
    }
  },
  computed: {
  },
  methods: {
    mobileGnbOpner(event) {
      if (event) {
        let sitebody = document.body;
        let mobileGnbArea = document.getElementById("mobileGnb");
        sitebody.classList.add("scrollHiden");
        mobileGnbArea.classList.add("on");
      }
    }
  }
};
</script>
