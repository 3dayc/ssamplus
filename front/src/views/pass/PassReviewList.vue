<template lang="html">
  <div>
    <!---->
    <div class="comment">
      <div class="commentBox">
        <ul>
          <li>
            <div @click="popupTrigger1 = true">
              <em>sss*****</em>
              <strong>왜 틀렸는지 파악하기</strong>
              <p>지난 실패 경험들을 되돌아 보고 보완할 수 있는 전략들을 생각했으며, 매일 독서실에 가서 공부하는 습관을 가지도록 노력하였습니다.</p>
              <span>2021-04-03</span>
            </div>
          </li>
          <li>
            <div class="male" @click="popupTrigger1 = true">
              <em>sss*****</em>
              <strong>자신의 환경을 충분히 고려하고 스터디를 활용하세요</strong>
              <p>새로운 시작을 준비하기
                 위해 쉬었던 시기였습니다. 6수만에  중등 특수시험에 합격했습니다. 서른 일곱에 시작했지만,
                20대부터 객관식 교육학 시험을 준비했던 경험 탓에 논술형으로 바뀐 시험이라도 크게 어려움은 없었습니다.</p>
              <span>2021-04-03</span>
            </div>
          </li>
          <li>
            <div @click="popupTrigger1 = true">
              <em>sss*****</em>
              <strong>자신만의 암기 카드를 만들어보세요</strong>
              <p>지난 실패 경험들을 되돌아 보고 보완할 수 있는 전략들을 생각했으며, 매일 독서실에 가서 공부하는 습관을 가지도록 노력하였습니다.</p>
              <span>2021-04-03</span>
            </div>
          </li>
          <li>
            <div @click="popupTrigger1 = true">
              <em>sss*****</em>
              <strong>왜 틀렸는지 파악하기</strong>
              <p>지난 실패 경험들을 되돌아 보고 보완할 수 있는 전략들을 생각했으며, 매일 독서실에 가서 공부하는 습관을 가지도록 노력하였습니다.</p>
              <span>2021-04-03</span>
            </div>
          </li>
          <li>
            <div class="male" @click="popupTrigger1 = true">
              <em>sss*****</em>
              <strong>자신의 환경을 충분히 고려하고 스터디를 활용하세요</strong>
              <p>새로운 시작을 준비하기
                 위해 쉬었던 시기였습니다. 6수만에  중등 특수시험에 합격했습니다. 서른 일곱에 시작했지만,
                20대부터 객관식 교육학 시험을 준비했던 경험 탓에 논술형으로 바뀐 시험이라도 크게 어려움은 없었습니다.</p>
              <span>2021-04-03</span>
            </div>
          </li>
          <li>
            <div @click="popupTrigger1 = true">
              <em>sss*****</em>
              <strong>자신만의 암기 카드를 만들어보세요</strong>
              <p>지난 실패 경험들을 되돌아 보고 보완할 수 있는 전략들을 생각했으며, 매일 독서실에 가서 공부하는 습관을 가지도록 노력하였습니다.</p>
              <span>2021-04-03</span>
            </div>
          </li>
          <li>
            <div @click="popupTrigger1 = true">
              <em>sss*****</em>
              <strong>왜 틀렸는지 파악하기</strong>
              <p>지난 실패 경험들을 되돌아 보고 보완할 수 있는 전략들을 생각했으며, 매일 독서실에 가서 공부하는 습관을 가지도록 노력하였습니다.</p>
              <span>2021-04-03</span>
            </div>
          </li>
          <li>
            <div class="male" @click="popupTrigger1 = true">
              <em>sss*****</em>
              <strong>자신의 환경을 충분히 고려하고 스터디를 활용하세요</strong>
              <p>새로운 시작을 준비하기
                 위해 쉬었던 시기였습니다. 6수만에  중등 특수시험에 합격했습니다. 서른 일곱에 시작했지만,
                20대부터 객관식 교육학 시험을 준비했던 경험 탓에 논술형으로 바뀐 시험이라도 크게 어려움은 없었습니다.</p>
              <span>2021-04-03</span>
            </div>
          </li>
          <li>
            <div @click="popupTrigger1 = true">
              <em>sss*****</em>
              <strong>자신만의 암기 카드를 만들어보세요</strong>
              <p>지난 실패 경험들을 되돌아 보고 보완할 수 있는 전략들을 생각했으며, 매일 독서실에 가서 공부하는 습관을 가지도록 노력하였습니다.</p>
              <span>2021-04-03</span>
            </div>
          </li>
          <li>
            <div @click="popupTrigger1 = true">
              <em>sss*****</em>
              <strong>왜 틀렸는지 파악하기</strong>
              <p>지난 실패 경험들을 되돌아 보고 보완할 수 있는 전략들을 생각했으며, 매일 독서실에 가서 공부하는 습관을 가지도록 노력하였습니다.</p>
              <span>2021-04-03</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="paging">
      <Paginate v-if="!this.mobile" />
      <div class="moreBtnWrap" v-if="this.mobile">
        <button class="mobileMore">더보기</button>
      </div>
    </div>
    <!-- // -->
    <!---->
    <div class="comment noList">
      <div class="commentBox">
        <ul>
          <li>
            <div>
              <em>등록된 합격수기가 없습니다.</em>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- // -->
    <!-- 합격수기 상세내용 Popup -->
    <Popup v-if='popupTrigger1' @close="popupTrigger1 = false" class="large bbsViewPopup">
      <template slot="modalheader">
        <div>
          <h1>합격수기</h1>
          <button @click="popupTrigger1 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PassReviewDetail />
      </template>
      <template slot="modalfooter">
        <!-- 상세 네비게이션영역 -->
        <div class="boardNavi">
          <a href="#none;" class="prev">
            <strong>PREV</strong>
            <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
          </a>
          <button class="btnList" @click="popupTrigger1 = false">목록</button>
          <a href="#none;" class="next">
            <strong>NEXT</strong>
            <em>[전원100%증정] 연감쌤팩, 21학년도 최종합격수기 이벤트</em>
          </a>
        </div>
        <!-- //상세 네비게이션영역 -->
      </template>
    </Popup>
    <!-- //합격수기 상세내용 Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import PassReviewDetail from '@/views/pass/PassReviewDetail.vue';

export default {
  mixins: [Mixin],
  name: 'PassReviewList',
  components: {
    PassReviewDetail
  },
  data() {
    return {
      popupTrigger1: false,
    }
  },
}
</script>
