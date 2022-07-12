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
        <div class="cleanIllegalShare">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>불법공유자 명단</h3>
            <div class="right-po">
              <span class="listSearch">
                <input type="text" placeholder="제목, 내용으로 검색">
                <button class="btnSearch">검색</button>
              </span>
            </div>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 반응형 목록 -->
          <div class="resTls">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem">제목</span>
              <span class="lgItem item0">조회수</span>
              <span class="lgItem item1">작성일</span>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul>
                <!--Loop-->
                <li class="listGrid">
                  <span class="lgItem tL">
                    <router-link to="/mkup/counsel/clean/illegal/view" class="tit">2020-12-01 ~ 2020-12-31 불법공유자 명단</router-link>
                  </span>
                  <span class="lgItem item0"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item1"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <!--//Loop-->
                <li class="listGrid">
                  <span class="lgItem tL">
                    <router-link to="/mkup/counsel/clean/illegal/view" class="tit">2021-01-01 ~ 2021-01-31 불법공유자 명단</router-link>
                  </span>
                  <span class="lgItem item0"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item1"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem tL">
                    <router-link to="/mkup/counsel/clean/illegal/view" class="tit">2021-02-01 ~ 2021-02-28 불법공유자 명단</router-link>
                  </span>
                  <span class="lgItem item0"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item1"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem tL">
                    <router-link to="/mkup/counsel/clean/illegal/view" class="tit">2021-03-01 ~ 2021-03-31 불법공유자 명단</router-link>
                  </span>
                  <span class="lgItem item0"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item1"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem tL">
                    <router-link to="/mkup/counsel/clean/illegal/view" class="tit">2021-04-01 ~ 2021-04-30 불법공유자 명단</router-link>
                  </span>
                  <span class="lgItem item0"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item1"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem tL">
                    <router-link to="/mkup/counsel/clean/illegal/view" class="tit">2021-05-01 ~ 2021-05-31 불법공유자 명단</router-link>
                  </span>
                  <span class="lgItem item0"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item1"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem tL">
                    <router-link to="/mkup/counsel/clean/illegal/view" class="tit">2021-06-01 ~ 2021-06-31 불법공유자 명단</router-link>
                  </span>
                  <span class="lgItem item0"><em class="mTit">조회수</em>2,005</span>
                  <span class="lgItem item1"><em class="mTit line">작성일</em>2021-01-22</span>
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
  name: 'CleanShare',
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
