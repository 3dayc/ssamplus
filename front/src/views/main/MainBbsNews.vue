<template lang="html">
  <div>
    <ul>
      <li><router-link to="/mkup/bbs/notice/view"><em class="iBbsSet notice">공지</em>[보건 임수진] N수생 학습지원 이벤트</router-link></li>
      <li><router-link to="/mkup/bbs/notice/view"><em class="iBbsSet notice">공지</em>[전공 유아] 실시간 라이브 강의 신규 개설 이벤트</router-link></li>
      <li class="new"><router-link to="/mkup/bbs/notice/view">[유아 이동건] 유아교육개론 기출분석 모바일 복습강의 앵콜이벤트</router-link></li>
      <li><router-link to="/mkup/bbs/notice/view">[체육 김용호] [마감]6/6(일) 3회 출제위원 모의고사</router-link></li>
      <li><router-link to="/mkup/bbs/notice/view">[교육학 김현] 10분 복습 타임 및 강의 무료 듣기</router-link></li>
      <li><router-link to="/mkup/bbs/notice/view">[한문 원주용] 5월 勇(용)한 산문 특강 안내</router-link></li>
      <li class="new"><router-link to="/mkup/bbs/notice/view">[보건 임수진]N수생 학습지원 이벤트</router-link></li>
    </ul>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MainBbsNews.vue',
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
