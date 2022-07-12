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
        <div class="mockExplain">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>모의고사 성적/해설</h3>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 반응형 목록 -->
          <div class="resTls">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem item0">상태</span>
              <span class="lgItem item1">응시일자</span>
              <span class="lgItem item2">모의고사</span>
              <span class="lgItem item3">해설강의 수강기간</span>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul>
                <!--Loop-->
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet lecIng">수강 중</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-07-13 08:48:27</span>
                  <router-link to="/mkup/mylec/mock/explain/view" class="lgItem item2 tL">
                    <strong class="tit">제 15회 희소 모의고사 (현장 응시, 2022학년도)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시일자</em> 2021-07-13 08:48:27</span>
                  <span class="lgItem item3"><em class="mTit">해설강의 수강기간 </em>2021-08-10~2021-08-31</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet lecIng">수강 중</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-07-13 08:48:27</span>
                  <router-link to="/mkup/mylec/mock/explain/view" class="lgItem item2 tL">
                    <strong class="tit">제 15회 희소 모의고사 (온라인 응시, 2022학년도)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시일자</em> 2021-07-13 08:48:27</span>
                  <span class="lgItem item3"><em class="mTit">해설강의 수강기간 </em>2021-08-12~2021-08-31</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet lecIng">수강 중</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-07-13 08:48:27</span>
                  <router-link to="/mkup/mylec/mock/explain/view" class="lgItem item2 tL">
                    <strong class="tit">[교육학/ 김현] 월별 모의고사 (현장 응시)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시일자</em> 2021-07-13 08:48:27</span>
                  <span class="lgItem item3"><em>해설강의가 없습니다</em></span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet lecIng">수강 중</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-07-13 08:48:27</span>
                  <router-link to="/mkup/mylec/mock/explain/view" class="lgItem item2 tL">
                    <strong class="tit">[교육학/ 김현] 월별 모의고사 (온라인 응시)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시일자</em> 2021-07-13 08:48:27</span>
                  <span class="lgItem item3"><em>해설강의가 없습니다</em></span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet lecwaiting">수강 대기</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-07-13 08:48:27</span>
                  <router-link to="/mkup/mylec/mock/explain/view" class="lgItem item2 tL">
                    <strong class="tit">제 16회 희소 모의고사 (온라인 응시, 2022학년도)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시일자</em> 2021-07-13 08:48:27</span>
                  <span class="lgItem item3"><em class="mTit">해설강의 수강기간 </em>2021-09-13~2021-09-30</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet lecwaiting">수강 대기</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-07-13 08:48:27</span>
                  <router-link to="/mkup/mylec/mock/explain/view" class="lgItem item2 tL">
                    <strong class="tit">제 16회 희소 모의고사 (온라인 응시, 2022학년도)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시일자</em> 2021-07-13 08:48:27</span>
                  <span class="lgItem item3"><em class="mTit">해설강의 수강기간 </em>2021-09-13~2021-09-30</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet lecEnd">수강 종료</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-07-13 08:48:27</span>
                  <router-link to="/mkup/mylec/mock/explain/view" class="lgItem item2 tL">
                    <strong class="tit lecEnd">제 14회 희소 모의고사 (온라인 응시, 2022학년도)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시일자</em> 2021-07-13 08:48:27</span>
                  <span class="lgItem item3"><em>수강기간 종료</em></span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet lecEnd">수강 종료</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-07-13 08:48:27</span>
                  <router-link to="/mkup/mylec/mock/explain/view" class="lgItem item2 tL">
                    <strong class="tit lecEnd">제 14회 희소 모의고사 (온라인 응시, 2022학년도)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시일자</em> 2021-07-13 08:48:27</span>
                  <span class="lgItem item3"><em>수강기간 종료</em></span>
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
  name: 'MockExplain',
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
