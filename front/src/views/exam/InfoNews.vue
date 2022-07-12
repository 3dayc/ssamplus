<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="infoNews">
          <div class="subTit">
            <h3>교육계 소식</h3>
            <span class="listSearch right-po">
              <input type="text" placeholder="제목, 내용으로 검색" />
              <button class="btnSearch">검색</button>
            </span>
          </div>
          <!-- 반응형 목록 -->
          <div class="resTls">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem item0"></span>
              <span class="lgItem item1">제목</span>
              <span class="lgItem item2">조회수</span>
              <span class="lgItem item3">작성일</span>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul>
                <!--Loop-->
                <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
                  <span class="lgItem item0">[전라북도교육청]</span>
                  <router-link to="/mkup/exam/info/news/view" class="lgItem item1 tL">
                    <span class="tit">코로나19 대비 응시자 유의사항 안내</span>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <!--//Loop-->
                <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
                  <span class="lgItem item0">[중소기업뉴스]</span>
                  <router-link to="/mkup/exam/info/news/view" class="lgItem item1 tL">
                    <span class="tit">[종합] 2021학년도 유아/초등/특수(유,초)교사 최종 합격선(모집인원/경쟁률포함) 현황</span>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid new">
                  <span class="lgItem item0">[뉴스1]</span>
                  <router-link to="/mkup/exam/info/news/view" class="lgItem item1 tL">
                    <span class="tit">2021학년도 증등/중특 교사 최종 합격선(모집인원/경쟁률포함) 현황</span>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">[중앙일보]</span>
                  <router-link to="/mkup/exam/info/news/view" class="lgItem item1 tL">
                    <span class="tit">2021학년도 증등/중특 교사 최종 합격선(모집인원/경쟁률포함) 현황</span>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">[한국경제]</span>
                  <router-link to="/mkup/exam/info/news/view" class="lgItem item1 tL">
                    <span class="tit">2021학년도 증등/중특 교사 최종 합격선(모집인원/경쟁률포함) 현황</span>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">[충청타임즈]</span>
                  <router-link to="/mkup/exam/info/news/view" class="lgItem item1 tL">
                    <span class="tit">2021학년도 증등/중특 교사 최종 합격선(모집인원/경쟁률포함) 현황</span>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">[국제뉴스]</span>
                  <router-link to="/mkup/exam/info/news/view" class="lgItem item1 tL">
                    <span class="tit">2021학년도 증등/중특 교사 최종 합격선(모집인원/경쟁률포함) 현황</span>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid new">
                  <span class="lgItem item0">[충청타임즈]</span>
                  <router-link to="/mkup/exam/info/news/view" class="lgItem item1 tL">
                    <span class="tit">2021학년도 증등/중특 교사 최종 합격선(모집인원/경쟁률포함) 현황</span>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">[국제뉴스]</span>
                  <router-link to="/mkup/exam/info/news/view" class="lgItem item1 tL">
                    <span class="tit">2021학년도 증등/중특 교사 최종 합격선(모집인원/경쟁률포함) 현황</span>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid new">
                  <span class="lgItem item0">[충청타임즈]</span>
                  <router-link to="/mkup/exam/info/news/view" class="lgItem item1 tL">
                    <span class="tit">2021학년도 증등/중특 교사 최종 합격선(모집인원/경쟁률포함) 현황</span>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">조회수</em>99</span>
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
  name: 'InfoNews',
  components: {
  },
  data() {
    return {
      
    }
  },
  methods: {
  }
}
</script>
