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
        <div class="studyQna">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>학습 Q&amp;A</h3>
            <div class="summeryTxt">강의에 대한 궁금한 부분이 있으면 고민하지 마시고 Q&amp;A로 해결하세요!</div>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 반응형 목록 -->
          <div class="resTls">
            <!-- listTitle -->
            <div class="thead listGrid">
              <div class="lgItem itemGroup ig1">
                <span class="lgSubGrid">
                  <span class="lgItem item0">상태</span>
                  <span class="lgItem item1">선생님</span>
                  <span class="lgItem item2">강좌</span>
                </span>
              </div>
              <div class="lgItem itemGroup ig2">
                <span class="lgSubGrid">
                  <span class="lgItem item3">제목</span>
                  <span class="lgItem item4">파일</span>
                </span>
              </div>
              <span class="lgItem item5">작성일</span>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul>
                <!--Loop-->
                <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item0"><em class="iBbsSet">대기중</em></span>
                      <span class="lgItem item1">김현</span>
                      <span class="lgItem item2"><span>교직논술 및 서술식 답안쓰기</span></span>
                    </span>
                  </div>
                  <router-link to="/mkup/mylec/study/qna/view" class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item3">
                        <span class="tit">정답을 적을 답지는 없나요?</span>
                      </span>
                      <span class="lgItem item4"><em class="iFile">첨부파일</em></span>
                    </span>
                  </router-link>
                  <span class="lgItem item5"><em class="mTit">작성일</em>2021-05-04</span>
                </li>
                <!--//Loop-->
                <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item0"><em class="iBbsSet">대기중</em></span>
                      <span class="lgItem item1">김현</span>
                      <span class="lgItem item2"><span>Making Map 교육학</span></span>
                    </span>
                  </div>
                  <router-link to="/mkup/mylec/study/qna/view" class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item3">
                        <span class="tit">온라인 모의고사 신청한 사람입니다</span>
                      </span>
                      <span class="lgItem item4"><em class="iFile">첨부파일</em></span>
                    </span>
                  </router-link>
                  <span class="lgItem item5"><em class="mTit">작성일</em>2021-05-04</span>
                </li>
                <li class="listGrid">
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                      <span class="lgItem item1">희소중국어팀</span>
                      <span class="lgItem item2"><span>80점 도약 모의고사반 첨삭비</span></span>
                    </span>
                  </div>
                  <router-link to="/mkup/mylec/study/qna/view2" class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item3">
                        <span class="tit">통합모의고사 역학문제풀이 관련 질문사항이</span>
                      </span>
                      <span class="lgItem item4"><em class="iFile">첨부파일</em></span>
                    </span>
                  </router-link>
                  <span class="lgItem item5"><em class="mTit">작성일</em>2021-05-04</span>
                </li>
                <li class="listGrid">
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                      <span class="lgItem item1">희소중국어팀</span>
                      <span class="lgItem item2"><span>80점 도약 모의고사반 첨삭비</span></span>
                    </span>
                  </div>
                  <router-link to="/mkup/mylec/study/qna/view2" class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item3">
                        <span class="tit">통합모의고사 역학문제풀이 관련 질문사항이</span>
                      </span>
                      <span class="lgItem item4"><em class="iFile">첨부파일</em></span>
                    </span>
                  </router-link>
                  <span class="lgItem item5"><em class="mTit">작성일</em>2021-05-04</span>
                </li>
                <li class="listGrid">
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                      <span class="lgItem item1">희소중국어팀</span>
                      <span class="lgItem item2"><span>80점 도약 모의고사반 첨삭비</span></span>
                    </span>
                  </div>
                  <router-link to="/mkup/mylec/study/qna/view2" class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item3">
                        <span class="tit">통합모의고사 역학문제풀이 관련 질문사항이</span>
                      </span>
                      <span class="lgItem item4"><em class="iFile">첨부파일</em></span>
                    </span>
                  </router-link>
                  <span class="lgItem item5"><em class="mTit">작성일</em>2021-05-04</span>
                </li>
                <li class="listGrid">
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                      <span class="lgItem item1">희소중국어팀</span>
                      <span class="lgItem item2"><span>80점 도약 모의고사반 첨삭비</span></span>
                    </span>
                  </div>
                  <router-link to="/mkup/mylec/study/qna/view2" class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item3">
                        <span class="tit">통합모의고사 역학문제풀이 관련 질문사항이</span>
                      </span>
                      <span class="lgItem item4"><em class="iFile">첨부파일</em></span>
                    </span>
                  </router-link>
                  <span class="lgItem item5"><em class="mTit">작성일</em>2021-05-04</span>
                </li>
                <li class="listGrid">
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                      <span class="lgItem item1">희소중국어팀</span>
                      <span class="lgItem item2"><span>80점 도약 모의고사반 첨삭비</span></span>
                    </span>
                  </div>
                  <router-link to="/mkup/mylec/study/qna/view2" class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item3">
                        <span class="tit">통합모의고사 역학문제풀이 관련 질문사항이</span>
                      </span>
                      <span class="lgItem item4"><em class="iFile">첨부파일</em></span>
                    </span>
                  </router-link>
                  <span class="lgItem item5"><em class="mTit">작성일</em>2021-05-04</span>
                </li>
                <li class="listGrid">
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                      <span class="lgItem item1">희소중국어팀</span>
                      <span class="lgItem item2"><span>80점 도약 모의고사반 첨삭비 80점 도약 모의고사반 첨삭비</span></span>
                    </span>
                  </div>
                  <router-link to="/mkup/mylec/study/qna/view2" class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item3">
                        <span class="tit">통합모의고사 역학문제풀이 관련 질문사항이 통합모의고사 역학문제풀이 관련 질문사항이</span>
                      </span>
                      <span class="lgItem item4"><em class="iFile">첨부파일</em></span>
                    </span>
                  </router-link>
                  <span class="lgItem item5"><em class="mTit">작성일</em>2021-05-04</span>
                </li>
                <li class="listGrid">
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                      <span class="lgItem item1">희소중국어팀</span>
                      <span class="lgItem item2"><span>80점 도약 모의고사반 첨삭비</span></span>
                    </span>
                  </div>
                  <router-link to="/mkup/mylec/study/qna/view2" class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item3">
                        <span class="tit">통합모의고사 역학문제풀이 관련 질문사항이</span>
                      </span>
                      <span class="lgItem item4"><em class="iFile">첨부파일</em></span>
                    </span>
                  </router-link>
                  <span class="lgItem item5"><em class="mTit">작성일</em>2021-05-04</span>
                </li>
                <li class="listGrid">
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
                      <span class="lgItem item1">희소중국어팀</span>
                      <span class="lgItem item2"><span>80점 도약 모의고사반 첨삭비</span></span>
                    </span>
                  </div>
                  <router-link to="/mkup/mylec/study/qna/view2" class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item3">
                        <span class="tit">통합모의고사 역학문제풀이 관련 질문사항이</span>
                      </span>
                      <span class="lgItem item4"><em class="iFile">첨부파일</em></span>
                    </span>
                  </router-link>
                  <span class="lgItem item5"><em class="mTit">작성일</em>2021-05-04</span>
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
  name: 'StudyQna',
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
