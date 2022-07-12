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
        <div class="faqIndex">
          <!-- 서브 타이틀 -->
          <div class="subTit noLine">
            <h3>자주 하는 질문</h3>
          </div>
          <!-- //서브 타이틀 -->
          <div class="faqSearch">
            <p>검색을 통해 여러분들의 궁금증을 해결하세요.</p>
            <span class="ipBtn">
              <input type="text" />
              <button class="btnL green">검색</button>
            </span>
          </div>
            <div class="faqSearchList">
              <!-- 반응형 목록 -->
              <div class="resTls">
                <!-- listTitle -->
                <div class="thead listGrid">
                  <span class="lgItem item0">분류</span>
                  <span class="lgItem">제목</span>
                  <span class="lgItem item1">조회수</span>
                </div>
                <!-- //listTitle -->
                <!-- //list -->
                <div class="tbody">
                  <ul>
                    <!--Loop-->
                    <li class="listGrid">
                      <span class="lgItem item0">강의 수강/신청 > 온라인 강의</span>
                      <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">일부 강의를 직강(인강)으로 변경하고 싶어요. </router-link>
                      <span class="lgItem item1"><em class="mTit">조회수</em>45</span>
                    </li>
                    <!--//Loop-->
                    <li class="listGrid">
                      <span class="lgItem item0">강의 수강/신청 > 연장/홀딩</span>
                      <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">보충강의 수강기간이 종료되었어요. 연장할 수 있나요?</router-link>
                      <span class="lgItem item1"><em class="mTit">조회수</em>132</span>
                    </li>
                    <li class="listGrid">
                      <span class="lgItem item0">강의 수강/신청 > 보너스 강의</span>
                      <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">패키지 강의가 무엇인가요? 어떻게 신청하나요?</router-link>
                      <span class="lgItem item1"><em class="mTit">조회수</em>75</span>
                    </li>
                    <li class="listGrid">
                      <span class="lgItem item0">강의 수강/신청 > 온라인 강의</span>
                      <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">강의가 많은데 강의가 한번에 시작되나요?</router-link>
                      <span class="lgItem item1"><em class="mTit">조회수</em>90</span>
                    </li>
                    <li class="listGrid">
                      <span class="lgItem item0">강의 수강/신청 > 보너스 강의</span>
                      <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">강의 무료 제공된다고 했는데 어떻게 신청하나요?</router-link>
                      <span class="lgItem item1"><em class="mTit">조회수</em>8</span>
                    </li>
                    <li class="listGrid">
                      <span class="lgItem item0">강의 수강/신청 > 온라인 강의</span>
                      <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">사물함 사용은 어떻게 할 수 있나요? </router-link>
                      <span class="lgItem item1"><em class="mTit">조회수</em>23</span>
                    </li>
                    <li class="listGrid">
                      <span class="lgItem item0">강의 수강/신청 > 연장/홀딩</span>
                      <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">수강확인증은 어떻게 발급 받나요?</router-link>
                      <span class="lgItem item1"><em class="mTit">조회수</em>60</span>
                    </li>
                    <li class="listGrid">
                      <span class="lgItem item0">강의 수강/신청 > 연장/홀딩</span>
                      <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">보너스 강의도 연장할 수 있나요?</router-link>
                      <span class="lgItem item1"><em class="mTit">조회수</em>22</span>
                    </li>
                    <li class="listGrid">
                      <span class="lgItem item0">강의 수강/신청 > 온라인 강의</span>
                      <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">수강증을 받아야 하나요? 어떻게 받나요?</router-link>
                      <span class="lgItem item1"><em class="mTit">조회수</em>453</span>
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
          <!-- //tab-wrap -->
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
import FaqLecture from '@/views/counsel/FaqLecture.vue';
import FaqBook from '@/views/counsel/FaqBook.vue';
import FaqPayment from '@/views/counsel/FaqPayment.vue';
import FaqError from '@/views/counsel/FaqError.vue';
import FaqMobile from '@/views/counsel/FaqMobile.vue';

export default {
  mixins: [Mixin],
  name: 'Faq',
  components: {
    FaqLecture,
    FaqBook,
    FaqPayment,
    FaqError,
    FaqMobile,
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
