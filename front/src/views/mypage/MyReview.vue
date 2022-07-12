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
        <div class="myReview">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>후기 작성</h3>
            <div class="summeryTxt">
              강좌 종료 7일 전 ~ 종료 후 30일까지 수강후기 작성이 가능하며 그 외 상품은 구매 후 30일 이내에 작성이 가능합니다.
            </div>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 반응형 목록 -->
          <div class="resTls">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem item0"></span>
              <div class="lgItem itemGroup ig1">
                <span class="lgSubGrid">
                  <span class="lgItem item1">구분</span>
                  <span class="lgItem item2">과목/선생님</span>
                </span>
              </div>
              <span class="lgItem item3">제목</span>
              <span class="lgItem item4">후기작성 유효기한</span>
              <span class="lgItem item5"></span>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul>
                <!--Loop-->
                <li class="listGrid">
                  <span class="lgItem item0">
                    <span class="imgBox sbjCase"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare04.png`)" alt="" /></span>
                  </span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iPro">쌤팩</em></span>
                      <span class="lgItem item2">교육학/김현</span>
                    </span>
                  </div>
                  <span class="lgItem item3">
                    <strong>쌤팩 베이직</strong>
                    <span class="fRed">후기를 작성해 주세요.</span>
                  </span>
                  <span class="lgItem item4"><em class="mTit">후기작성 유효기한</em>2021-03-01</span>
                  <span class="lgItem item5">
                    <router-link to="/mkup/mypage/myreview/write" class="btnReviewWrite">후기작성</router-link>
                  </span>
                </li>
                <!--//Loop-->
                <li class="listGrid">
                  <span class="lgItem item0">
                    <span class="imgBox sbjCase"></span>
                  </span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iPro">단과</em></span>
                      <span class="lgItem item2">중국어/희소중국어팀</span>
                    </span>
                  </div>
                  <router-link to="/mkup/mypage/myreview/view" class="lgItem item3">
                    <strong>중국문학사</strong>
                    <span>변산도지수와 첨도에 관련한 체크포인트…</span>
                  </router-link>
                  <span class="lgItem item4"><em class="mTit">후기작성 유효기한</em>2021-03-01</span>
                  <span class="lgItem item5"></span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">
                    <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_device01.png`)" alt="" /></span>
                  </span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iPro line">학습기기</em></span>
                      <span class="lgItem item2"></span>
                    </span>
                  </div>
                  <router-link to="/mkup/mypage/myreview/view" class="lgItem item3">
                    <strong>[LG] 노트북</strong>
                    <span>변산도지수와 첨도에 관련한 체크포인트…</span>
                  </router-link>
                  <span class="lgItem item4"><em class="mTit">후기작성 유효기한</em>2021-03-01</span>
                  <span class="lgItem item5"></span>
                </li>
                <li class="listGrid dateEnd">
                  <span class="lgItem item0">
                    <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_device02.png`)" alt="" /></span>
                  </span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iPro line">학습기기</em></span>
                      <span class="lgItem item2"></span>
                    </span>
                  </div>
                  <span class="lgItem item3">
                    <strong>[APPLE] iPad Pro</strong>
                    <span>후기 작성기간이 종료되었습니다.</span>
                  </span>
                  <span class="lgItem item4"><em class="mTit">후기작성 유효기한</em>2021-03-01</span>
                  <span class="lgItem item5"></span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">
                    <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_book01.png`)" alt="" /></span>
                  </span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iPro book">교재</em></span>
                      <span class="lgItem item2">교육학/김이안</span>
                    </span>
                  </div>
                  <span class="lgItem item3">
                    <strong>키위 교육학 (실적)</strong>
                    <span class="fRed">후기를 작성해 주세요.</span>
                  </span>
                  <span class="lgItem item4"><em class="mTit">후기작성 유효기한</em>2021-03-01</span>
                  <span class="lgItem item5">
                    <router-link to="/mkup/mypage/myreview/write" class="btnReviewWrite">후기작성</router-link>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">
                    <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_book02.png`)" alt="" /></span>
                  </span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iPro book">교재</em></span>
                      <span class="lgItem item2">교육학/이어령</span>
                    </span>
                  </div>
                  <router-link to="/mkup/mypage/myreview/view" class="lgItem item3">
                    <strong>키위 교육학 (기본)</strong>
                    <span>교육학의 정석을 배우다</span>
                  </router-link>
                  <span class="lgItem item4"><em class="mTit">후기작성 유효기한</em>2021-03-01</span>
                  <span class="lgItem item5"></span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">
                    <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_etc01.png`)" alt="" /></span>
                  </span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iPro line">기타</em></span>
                      <span class="lgItem item2"></span>
                    </span>
                  </div>
                  <router-link to="/mkup/mypage/myreview/view" class="lgItem item3">
                    <strong>합격노트</strong>
                    <span>합격노트로 함격했어요!!</span>
                  </router-link>
                  <span class="lgItem item4"><em class="mTit">후기작성 유효기한</em>2021-03-01</span>
                  <span class="lgItem item5"></span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">
                    <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_book01.png`)" alt="" /></span>
                  </span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iPro book">교재</em></span>
                      <span class="lgItem item2">교육학/김이안</span>
                    </span>
                  </div>
                  <span class="lgItem item3">
                    <strong>키위 교육학 (실적)</strong>
                    <span class="fRed">후기를 작성해 주세요.</span>
                  </span>
                  <span class="lgItem item4"><em class="mTit">후기작성 유효기한</em>2021-03-01</span>
                  <span class="lgItem item5">
                    <router-link to="/mkup/mypage/myreview/write" class="btnReviewWrite">후기작성</router-link>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">
                    <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_book02.png`)" alt="" /></span>
                  </span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iPro book">교재</em></span>
                      <span class="lgItem item2">교육학/이어령</span>
                    </span>
                  </div>
                  <router-link to="/mkup/mypage/myreview/view" class="lgItem item3">
                    <strong>키위 교육학 (기본)</strong>
                    <span>교육학의 정석을 배우다</span>
                  </router-link>
                  <span class="lgItem item4"><em class="mTit">후기작성 유효기한</em>2021-03-01</span>
                  <span class="lgItem item5"></span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">
                    <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_etc01.png`)" alt="" /></span>
                  </span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iPro line">기타</em></span>
                      <span class="lgItem item2"></span>
                    </span>
                  </div>
                  <router-link to="/mkup/mypage/myreview/view" class="lgItem item3">
                    <strong>합격노트</strong>
                    <span>합격노트로 함격했어요!!</span>
                  </router-link>
                  <span class="lgItem item4"><em class="mTit">후기작성 유효기한</em>2021-03-01</span>
                  <span class="lgItem item5"></span>
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
  name: 'MyReview',
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
