<template lang="html">
  <div>
    <ul>
      <li class="new"><router-link to="/mkup/bbs/notice/view"><em class="iBbsSet notice">공지</em>[첫시작지원] 1~6월, 첫 구매 학습지원 이벤트</router-link></li>
      <li><router-link to="/mkup/bbs/notice/view"><em class="iBbsSet notice">공지</em>2021년 교생실습 보충강의</router-link></li>
      <li><router-link to="/mkup/bbs/notice/view"><em class="iBbsSet notice">공지</em>기간연장 지원 6월 무이자 할부 안내 </router-link></li>
      <li class="new"><router-link to="/mkup/bbs/notice/view"><em class="iBbsSet notice">공지</em>[상담 안내] 알아두면 쓸모있는 HEESO 상담사전 [첫 시작, 올바른 학습의 과정] 2021 새로운 희소</router-link></li>
      <li><router-link to="/mkup/bbs/notice/view">[16회 희소모의고사] 경품 증정 이벤트 안</router-link></li>
      <li class="new"><router-link to="/mkup/bbs/notice/view">[KG에듀원X언택트학습] 특별한 학습지원 혜택 [첫 시작, 올바른 학습의 과정] 2021 새로운 희소</router-link></li>
      <li class="new"><router-link to="/mkup/bbs/notice/view">기간연장 지원 6월 무이자 할부 안내 </router-link></li>
    </ul>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MainBbsNotice.vue',
  components: {
  },
  data() {
    return {
    }
  },
	methods: {
	},
  computed: {
  },
  mounted() {
  }
}
</script>
