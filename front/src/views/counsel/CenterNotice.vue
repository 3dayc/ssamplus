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
        <div class="centerNotice">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>상담센터 공지</h3>
            <div class="right-po">
              <span class="listSearch">
                <input type="text" placeholder="제목, 내용으로 검색">
                <button class="btnSearch">검색</button>
              </span>
              <router-link to="/mkup/bbs/notice" class="btnM ml10 w120">전체공지 보기</router-link>
            </div>
          </div>
          <!-- //서브 타이틀 -->
          <div class="notice">
            <!-- 반응형 목록 -->
            <div class="resTls">
              <!-- listTitle -->
              <div class="thead listGrid">
                <span class="lgItem item0">제목</span>
                <span class="lgItem item1">파일</span>
                <span class="lgItem item2">조회수</span>
                <span class="lgItem item3">작성일</span>
              </div>
              <!-- //listTitle -->
              <!-- //list -->
              <div class="tbody">
                <ul>
                  <!--Loop-->
                  <li class="listGrid notice new"> <!-- 새 글일 경우 new 클래스 추가 -->
                    <router-link to="/mkup/counsel/center/view" class="lgItem item0 stateCase tL">
                      <em class="iBbsSet notice">공지</em>
                      <span class="tit">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
                    </router-link>
                    <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                    <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                    <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                  </li>
                  <!--//Loop-->
                  <li class="listGrid notice new"> <!-- 새 글일 경우 new 클래스 추가 -->
                    <router-link to="/mkup/counsel/center/view" class="lgItem item0 stateCase tL">
                      <em class="iBbsSet notice">공지</em>
                      <span class="tit">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
                    </router-link>
                    <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                    <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                    <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                  </li>
                  <li class="listGrid new">
                    <router-link to="/mkup/counsel/center/view" class="lgItem item0 tL">
                      <span class="tit">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
                    </router-link>
                    <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                    <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                    <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                  </li>
                  <li class="listGrid">
                    <router-link to="/mkup/counsel/center/view" class="lgItem item0 tL">
                      <span class="tit">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
                    </router-link>
                    <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                    <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                    <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                  </li>
                  <li class="listGrid">
                    <router-link to="/mkup/counsel/center/view" class="lgItem item0 tL">
                      <span class="tit">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
                    </router-link>
                    <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                    <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                    <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                  </li>
                  <li class="listGrid">
                    <router-link to="/mkup/counsel/center/view" class="lgItem item0 tL">
                      <span class="tit">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
                    </router-link>
                    <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                    <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                    <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                  </li>
                  <li class="listGrid">
                    <router-link to="/mkup/counsel/center/view" class="lgItem item0 tL">
                      <span class="tit">공지사항의 내용이 2줄 이상 길어질 경우에는 말줄임 없이 모두 노출하여 이렇게 나오게 됩니다. 공지사항의 내용이 2줄 이상 길어질 경우에는 말줄임 없이 모두 노출하여 이렇게 나오게 됩니다. </span>
                    </router-link>
                    <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                    <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                    <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                  </li>
                  <li class="listGrid new">
                    <router-link to="/mkup/counsel/center/view" class="lgItem item0 tL">
                      <span class="tit">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
                    </router-link>
                    <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
                    <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
                    <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
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
  name: 'CenterNotice',
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
