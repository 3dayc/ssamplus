<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="faqView">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>자주 하는 질문</h3>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 상세 -->
          <div class="boardDetail">
            <!-- 제목영역 -->
            <div class="boardHead stateCase">
              <em class="iBbsSet faq">패키지 강의</em>
              <strong>일부 강의를 직강(인강)으로 변경하고 싶어요.</strong>
              <div class="boardInfo">
                <em>조회수 : <i>222</i></em>
              </div>
            </div>
            <!-- //제목영역 -->
            <!-- 파일영역 -->
            <div class="boardFile" style="display:none">
              <ul class="fileList">
                <li>
                  <span>부록_마음을 열어주는 가비국어.pdf</span>
                  <button class="btnDownload">다운로드</button>
                </li>
              </ul>
            </div>
            <!-- //파일영역 -->
            <!-- 내용영역 -->
            <div class="boardView">
              <!-- 에디터 내용 -->
              패키지 수강 시 패키지에 포함된 강의는 인/직강 변경이 가능합니다 변경은 개강하지 않은 강의에 한하며, 해당 강의 단과 수강신청 기간에 고객센터 또는 학원데스크로 문의 주시면 변경 하실 수 있습니다.<br/>
              또한, 변경한 강의는 재변경이 불가능하므로 신중한 결정 부탁드리겠습니다.<br/><br/>
              인강 > 직강 변경 방법 <br/>
              - 단과 강의 단위로 변경되며 2달 강의 중 1달은 인강, 1달은 직강으로 나누어 수강은 할 수 없습니다. <br/>
              - 개강 예정인 강의만 변경이 가능하며, 변경을 원하는 강의 수강신청 기간 내 1:1 상담에 글을 남겨주시거나 고객센 터로 문의 주시면 됩니다. <br/>
              (수강신청기간은 공지사항 참고) ex) 7-11월 강의 변경을 원하시는 경우 7-8월 신청기간에 문의, 9-11월 신청기간에 각각 문의 주셔야 합니다. <br/>
              - 변경 요청 시 직강 수강정원이 마감된 경우에는 변경이 불가능합니다. <br/>
              - 일부 강의의 경우 직강 변경 방법이 별도 공지될 수 있으며, 해당 방법으로만 변경이 가능합니다.<br/><br/>
              * 직강 > 인강 변경 방법 변경을 위해서는 수강증 반납/폐기절차가 필요하므로 수강증을 지참하고 학원데스크로 문의 주셔야 합니다. <br/>
              - 수강증 분실 시 인터넷강의 전환 등을 할 수 없습니다. <br/>
              - 단과 강의 단위로 변경되며, 인강으로 변경된 강의는 다시 직강으로 변경이 불가능합니다. <br/>
              - 변경한 단과강의 외에는 직강 수강으로 남아있게 되며, 직강으로 다시 출석 시 데스크에서 수강증을 재발급 받으시 면 됩니다. <br/>
              - 강의 수강 중 인강으로 변경하는 경우 잔여 강의는 보충강의로 제공될 수 있으며, 보충강의 수강기준이 적용됩니다. <br/>
              (제공받은날 기준 수강기간 5일, 1.2배수)
            </div>
            <!-- //내용영역 -->
            <!-- 상세 네비게이션영역 -->
            <div class="boardNavi">
              <a href="#none;" class="prev">
                <strong>PREV</strong>
                <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
              </a>
              <router-link to="/mkup/counsel/faq" class="btnList">목록</router-link>
              <a href="#none;" class="next">
                <strong>NEXT</strong>
                <em>[전원100%증정] 연감쌤팩, 21학년도 최종합격수기 이벤트</em>
              </a>
            </div>
            <!-- //상세 네비게이션영역 -->
          </div>
          <!-- //상세 -->
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
  name: 'FaqView',
  components: {
  },
  data() {
    return {
      currentTab: 0,
    }
  },
  mounted() {
  },
}
</script>
