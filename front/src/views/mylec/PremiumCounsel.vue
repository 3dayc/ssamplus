<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="premiumCounsel">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>프리미엄 회원상담</h3>
            <div class="summeryTxt">
              쌤팩 프리미엄 회원만을 위한 1:1 상담 게시판입니다.<br/>
              선생님의 문의 사항을 프리미엄 회원 전용 상담사가 가장 빠르고 친절하게 안내해 드리겠습니다.
            </div>
            <span class="right-po">
              <router-link to="/mkup/mylec/premium/counsel/write" class="btnS black">글쓰기</router-link>
            </span>
          </div>
          <!-- //서브 타이틀 -->
          <div class="counselBbs">
            <!-- 반응형 목록 -->
            <div class="resTls">
              <!-- listTitle -->
              <div class="thead listGrid">
                <span class="lgItem item0">상태</span>
                <span class="lgItem">제목</span>
                <span class="lgItem item2">작성일</span>
              </div>
              <!-- //listTitle -->
              <!-- //list -->
              <div class="tbody">
                <ul>
                  <!--Loop-->
                  <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
                    <span class="lgItem item0"><em class="iBbsSet">대기중</em></span>
                    <span class="lgItem tL">
                      <router-link to="/mkup/mylec/premium/counsel/view/wait" class="tit">작년 강의의 커리큘럼이 수정된 이유가 궁금합니다!</router-link>
                    </span>
                    <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
                  </li>
                  <!--//Loop-->
                  <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
                    <span class="lgItem item0"><em class="iBbsSet">대기중</em></span>
                    <span class="lgItem tL">
                      <router-link to="/mkup/mylec/premium/counsel/view/wait" class="tit">강의를 듣고있는데, 4월 28일 누락 문제에 대한 문듸드립니다.</router-link>
                    </span>
                    <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
                  </li>
                  <li class="listGrid">
                    <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                    <span class="lgItem tL">
                      <router-link to="/mkup/mylec/premium/counsel/view/complete" class="tit">올해 5~6월 인강 자료 질문 드립니다.</router-link>
                    </span>
                    <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
                  </li>
                  <li class="listGrid">
                    <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                    <span class="lgItem tL">
                      <router-link to="/mkup/mylec/premium/counsel/view/complete" class="tit">교육심리 동기-외재적 동기와 내재적 동기에 대해 질문이 있어 글 올립니다.</router-link>
                    </span>
                    <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
                  </li>
                  <li class="listGrid">
                    <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                    <span class="lgItem tL">
                      <router-link to="/mkup/mylec/premium/counsel/view/complete" class="tit">특강 자료 문의</router-link>
                    </span>
                    <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
                  </li>
                  <li class="listGrid">
                    <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                    <span class="lgItem tL">
                      <router-link to="/mkup/mylec/premium/counsel/view/complete" class="tit">2021학년도 책을 2022학년도 기본반 수업 때도 쓸 수 있을까요?</router-link>
                    </span>
                    <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
                  </li>
                  <li class="listGrid">
                    <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                    <span class="lgItem tL">
                      <router-link to="/mkup/mylec/premium/counsel/view/complete" class="tit">2021 교재 문의 드립니다.</router-link>
                    </span>
                    <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
                  </li>
                  <li class="listGrid">
                    <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                    <span class="lgItem tL">
                      <router-link to="/mkup/mylec/premium/counsel/view/complete" class="tit">올해 5~6월 인강 자료 질문 드립니다.</router-link>
                    </span>
                    <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
                  </li>
                  <li class="listGrid">
                    <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                    <span class="lgItem tL">
                      <router-link to="/mkup/mylec/premium/counsel/view/complete" class="tit">교육심리 동기-외재적 동기와 내재적 동기에 대해 질문이 있어 글 올립니다.</router-link>
                    </span>
                    <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
                  </li>
                  <li class="listGrid">
                    <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                    <span class="lgItem tL">
                      <router-link to="/mkup/mylec/premium/counsel/view/complete" class="tit">특강 자료 문의</router-link>
                    </span>
                    <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
                  </li>
                </ul>
              </div>
              <!-- //list -->
            </div>
            <!-- //반응형 목록 -->
            <div class="paging">
              <Paginate v-if="!this.mobile" />
              <div class="moreBtnWrap" v-if="this.mobile">
                <button class="mobileMore">더보기</button>
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
  name: 'PremiumCounsel',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
  },
}
</script>
