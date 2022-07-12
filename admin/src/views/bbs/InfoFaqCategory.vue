<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>카테고리 추가</h1>
      <span class="supTxt">* 자주하는 질문의 카테고리 대/중분류를 추가할 수 있습니다.</span>
    </div>
    <div class="winContent">
      <div class="infoFaqCategory">
        <div class="before">
          <h3 class="mt20"><strong>대분류</strong></h3>
          <div class="cate">
            <ul>
              <li :class="{on:choice===0}"><button @click="choice = 0">초시생</button></li>
              <li :class="{on:choice===1}"><button @click="choice = 1">강의 수강/신청</button></li>
              <li :class="{on:choice===2}"><button @click="choice = 2">교재/학습자료</button></li>
              <li :class="{on:choice===3}"><button @click="choice = 3">결제/환불</button></li>
              <li :class="{on:choice===4}"><button @click="choice = 4">사이트이용/오류</button></li>
              <li :class="{on:choice===5}"><button @click="choice = 5">모바일</button></li>
            </ul>
          </div>
          <div class="catePlus">
            <input type="text" placeholder="대분류 추가">
            <button class="ml10">추가</button>
          </div>
        </div>
        <div class="after">
          <h3 class="mt20"><strong>중분류</strong></h3>
          <div class="cate">
            <ul>
              <li><button>시험자격</button></li>
              <li><button>임용 시험 정보</button></li>
              <li><button>시험장에서</button></li>
              <li><button>학습방법</button></li>
            </ul>
          </div>
          <div class="catePlus">
            <input type="text" placeholder="중분류 추가">
            <button class="ml10">추가</button>
          </div>
        </div>
      </div>
      <div class="btnArea">
        <button class="btnM gray">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'InfoFaqCategory',
  data() {
    return {
      choice: 0,
    }
  },
  components: {
  }
}
</script>
