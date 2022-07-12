<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>검산 가이드 (금액 비교 방법)</h1>
    </div>
    <div class="winContent">
      <!-- 검산 가이드 -->
      <div class="guideWrap">
        <dl>
          <dt>· 1단계</dt>
          <dd>(1) 데이콤 관리자 페이지 접속 및 로그인(http://pgweb.dacom.net) 한다.</dd>
          <dd>(2) 메뉴 중 [결제내역 조회]->[신용카드]->[거래내역 조회]->거래기간에서 검색하고자 하는 일자를 설정(2021-01-01)한 후 "합계조회"를 클릭한다.</dd>
          <dd>(3) 조회 결과 중 성공 총계 금액과 위의 금액이 일치하면 확인완료이다.</dd>
        </dl>
        <dl>
          <dt>· 2단계</dt>
          <dd>(1) 금액이 일치하지 않다면 검색된 금액을 따로 복사하여 검색조건 중 "처리상태"를"매입 후 취소"로 변경한 후 "합계조회"를 클릭한다.</dd>
          <dd>
            (2) 이전 검색한 총계금액에서 검색결과 중 성공의 총계 금액을 뺏을 때의 금액이 위의 금액과 일치하면 확인완료이다.<br/>
            (<span class="fRed fBold">※ 확인할 금액 = "모든 상태" 성공 총계금액 - "매입 후 취소" 성공 총계금액</span>)
          </dd>
        </dl>
        <dl>
          <dt>· 3단계</dt>
          <dd>(1) 금액이 일치 하지 않는다면 결제가 누락 됐거나 중복 결제 될 가능성이 높다.</dd>
          <dd>(2) “일별 카드결제” 화면에서 [결제인원 목록 보이기]를 하여 결제 목록을 표시한다.</dd>
          <dd>(3) 데이콤 관리자 페이지에서 "처리상태"를 "모든 상태"로 변경한 후 "조회"를 클릭한다.</dd>
          <dd>(4) “일별 카드결제”의 명단과 데이콤 관리자 모드의 명단을 하나씩 비교한다.</dd>
          <dd>(5) 매입완료 된 거래 중 다른 경우가 있다면 매입취소 등 조치를 취해준다.</dd>
          <dd>(6) 확인완료 후 다시 금액을 비교하여 금액이 일치하는지 최종확인 한다.</dd>
        </dl>
      </div>
      <!-- //검산 가이드 -->
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
  name: 'CheckGuide',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
