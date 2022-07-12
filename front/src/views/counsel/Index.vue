<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="counselIndex">
          <div class="frameBack">
            <!-- 서브 타이틀 -->
            <div class="subTit">
              <h3>상담센터</h3>
              <p class="summeryTxt">임용에 관한 무엇이든지 정보를 확인하고 질문할 수 있습니다</p>
            </div>
            <!-- //서브 타이틀 -->
            <div class="counselQuick">
              <h4>지금 필요한 QUICK MENU</h4>
              <div>
                <router-link to="/mkup/counsel/faq" class="go01">초시생을 위한 <em>FAQ</em></router-link>
                <router-link to="/mkup/counsel/guide" class="go02">사이트 이용 가이드</router-link>
                <router-link to="/mkup/counsel/faq" class="go03">자주 하는 질문</router-link>
                <router-link to="/mkup/counsel/bbswrite" class="go04">1:1 게시판 상담</router-link>
                <router-link to="/mkup/counsel/clean/report" class="go05">불법공유 신고</router-link>
                <router-link to="/mkup/counsel/direct" class="go06">학원위치 안내</router-link>
                <router-link to="/mkup/counsel/reserve" class="go07">선생님 상담 예약</router-link>
                <router-link to="/mkup/counsel/reserve" class="go08">학원 상담 예약</router-link>
              </div>
            </div>
          </div>
          <div class="counselContact">
            <div class="frameBack">
              <div class="tit">
                <h4>궁금한 점이 있다면?</h4>
                <span>희소쌤플러스 이용 시 문의사항을 신속하고 정확하게 답변해 드립니다.</span>
              </div>
              <strong class="mainCall">1544-0678</strong>
              <dl>
                <dt>학원 상담</dt>
                <dd>
                  <span><em>월~토</em> 07:30~21:00</span>
                  <span><em>일</em> 08:30~18:00</span>
                </dd>
              </dl>
              <dl class="online">
                <dt>온라인 수강문의</dt>
                <dd>
                  <span><em>평 일</em> 09:00~18:00</span>
                  <span><em>점심시간</em> 12:00~13:00</span>
                </dd>
              </dl>
              <a href="https://accounts.kakao.com/login?continue=http%3A%2F%2Fpf.kakao.com%2F_WPrLl%2Ffriend" target="_blank" class="btnKaKaoChannel">교원임용희소<strong>채널추가</strong></a>
            </div>
          </div>
          <div class="frameBack">
            <div class="gridSet counselNews">
              <div class="gridItem cFaq">
                <h4>FAQ TOP 8</h4>
                <router-link to="/mkup/counsel/faq" v-if="!this.mobile" class="btnMore">더보기</router-link>
                <ul>
                  <li><router-link to="/mkup/counsel/faq/view">학습자료는 어떻게 이용할 수 있나요?</router-link></li>
                  <li><router-link to="/mkup/counsel/faq/view">동시접속이라고 경고가 떴어요. 동시접속이 무엇인가요?</router-link></li>
                  <li><router-link to="/mkup/counsel/faq/view">크롬,엣지 사용 시 정상이용이 안됩니다.</router-link></li>
                  <li><router-link to="/mkup/counsel/faq/view">강의 무료 제공된다고 했는데 어떻게 신청하나요? 강의 무료 제공된다고 했는데 어떻게 신청하나요?</router-link></li>
                  <li><router-link to="/mkup/counsel/faq/view">인쇄전용자료가 무엇인가요?</router-link></li>
                  <li><router-link to="/mkup/counsel/faq/view">일부 강의를 직각(인강)으로 변경하고 싶어요.</router-link></li>
                  <li><router-link to="/mkup/counsel/faq/view">1.6배수, 1.4배수가 무엇인가요?</router-link></li>
                  <li><router-link to="/mkup/counsel/faq/view">환불 규정을 알려주세요.</router-link></li>
                </ul>
                <div class="moreBtnWrap" v-if="this.mobile">
                  <router-link to="/mkup/counsel/faq" class="mobileMore">더보기</router-link>
                </div>
              </div>
              <div class="gridItem cNotice">
                <h4>상담센터 공지</h4>
                <router-link to="/mkup/counsel/center" v-if="!this.mobile" class="btnMore">더보기</router-link>
                <ul>
                  <li>
                    <router-link to="/mkup/counsel/center/view">설 연휴 교재 배송안내</router-link>
                    <em>2021-05-14</em>
                  </li>
                  <li>
                    <router-link to="/mkup/counsel/center/view">2월 무이자 할부 안내</router-link>
                    <em>2021-05-09</em>
                  </li>
                  <li>
                    <router-link to="/mkup/counsel/center/view">연말정산 교육비 소득공제 해당 없음 안내 파일 연말정산 교육비 소득공제 해당 없음 안내 파일</router-link>
                    <em>2021-04-28</em>
                  </li>
                  <li>
                    <router-link to="/mkup/counsel/center/view">2월 무이자 할부 안내</router-link>
                    <em>2021-04-23</em>
                  </li>
                  <li>
                    <router-link to="/mkup/counsel/center/view">연말정산 교육비 관련 안내</router-link>
                    <em>2021-04-16</em>
                  </li>
                  <li>
                    <router-link to="/mkup/counsel/center/view">엣지/크롬에서 로그인 및 결제 안될 경우</router-link>
                    <em>2021-04-11</em>
                  </li>
                  <li>
                    <router-link to="/mkup/counsel/center/view">4월 무이자 할부 안내</router-link>
                    <em>2021-04-06</em>
                  </li>
                  <li>
                    <router-link to="/mkup/counsel/center/view">3월 무이자 할부 안내</router-link>
                    <em>2021-03-05</em>
                  </li>
                </ul>
                <div class="moreBtnWrap" v-if="this.mobile">
                  <router-link to="/mkup/counsel/center" class="mobileMore">더보기</router-link>
                </div>
              </div>
            </div>
            <div class="lecCheck">
              <h4>강좌 수강을 위한 CHECK!</h4>
              <div>
                <router-link to="/mkup/counsel/programInstall" class="check01">필수 프로그램 설치</router-link>
                <a href="https://pf.kakao.com/_qhFuj" target="_blank" class="check02">챗봇 상담</a>
                <router-link to="/mkup/counsel/remote" class="check03">원격고객 지원</router-link>
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
  name: 'Index',
  components: {
  },
  data() {
    return {

    }
  },
}
</script>
