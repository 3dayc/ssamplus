<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>강좌검색</h1>
      <span class="supTxt">* 쌤플러스 강좌 검색</span>
      <span class="btnArea">
        <button class="btnM green" @click="toastPop('error', '선택된 강좌가 없습니다.')">선택</button>
        <button class="btnM gray">취소</button>
      </span>
    </div>
    <div class="winContent">
      윈도우 팝업의 본문
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'WindowPopupComponent',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
