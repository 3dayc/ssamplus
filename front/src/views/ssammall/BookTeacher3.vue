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
        <div class="ssammallBookTeacher">
          <!-- 교수 소개 -->
          <div class="subTit noLine">
            <h3>송헌/김준팀 <em>의 강좌 교재</em></h3>
            <span class="right"><router-link to="/mkup/lecture/teachermjmiddle011" class="btnTcHome">선생님 홈 <em>바로가기</em></router-link></span>
            <button class="btnAllSsam" v-if="this.mobile" @click="ssamChoiceTrigger = true">선생님선택</button>
          </div>
          <div class="introTeacher">
            <span class="imgBox sbjEdu"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare08.png`)" alt="" /></span>
            <div>
              <dl>
                <dt>선생님 약력</dt>
                <dd>
                  <ul>
                    <li>미시간 대학교(The University of Michigan, Ann Arbor): 영어교육 전공</li>
                    <li>컬럼비아 대학교(Columbia University): Teachers College 복수 전공, 응용 언어학 석사(MA) &amp; 언어 평가 분야 석사</li>
                  </ul>
                </dd>
              </dl>
              <dl class="moreData">
                <dt class="moreTit">선생님 저서</dt>
                <dd>
                  <ul>
                    <li>2014년 11월 ~ 2017년 6월: 박문각 임용고시학원 강사 겸 연구원</li>
                    <li>2017년 9월 ~ 2017년 11월: 아모르이그잼학원 영어교육론 전임교수</li>
                    <li>2017년 11월 ~ 현재: KG에듀원 희소고시학원 영어교육론 전임교수</li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
          <!-- //교수 소개 -->
          <!-- 교수 강좌 교재 -->
          <div class="teacherBookList">
            <div class="subTit">
              <span class="searchCount">총 <em>3건</em></span>
            </div>
            <div class="productList">
              <ul>
                <li class="new"> <!-- 새 제품일 경우 클래스 new 추가 -->
                  <router-link to="/mkup/ssammall/book/view">
                    <span class="productImg">
                      <img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
                    </span>
                    <span class="productDetail">
                      <span class="labelInfo">
                        <em class="iSbjSetMini">교육학</em><em class="inComeDed">소득공제</em><em class="iPro my">내 강좌 교재</em>
                      </span>
                      <strong>2021 류지원 <span class="fGreen">영어교육학</span> 기출문제집</strong>
                      <span class="moreInfo">
                        <span>류지원 저</span>
                        <span>아람출판사</span>
                        <span class="last">2021-03-02</span>
                        <span class="isbn">ISBN : 9791197198373</span>
                      </span>
                      <span class="price">
                        <strong>15,000<i>원</i></strong>
                      </span>
                    </span>
                  </router-link>
                  <div class="productBtn">
                    <span>
                      <button class="btnContents" @click="popupTrigger01 = true">목차보기</button>
                      <button class="btnBasket" @click="popupTrigger02 = true">장바구니</button>
                      <button class="btnPay" @click="popupTrigger03 = true">즉시결제</button>
                      <button class="btnSale" @click="discountTipsPop = true">구매할인 팁</button>
                    </span>
                  </div>
                </li>
                <li class="soldOut"> <!-- 품절일 경우 클래스 soldOut 추가 -->
                  <router-link to="/mkup/ssammall/book/view">
                    <span class="productImg">
                      <img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
                    </span>
                    <span class="productDetail">
                      <span class="labelInfo">
                        <em class="iSbjSetMini">교육학</em><em class="iPro my">내 강좌 교재</em>
                      </span>
                      <strong>2021 류지원 <span class="fGreen">영어교육학</span> 기출문제집</strong>
                      <span class="moreInfo">
                        <span>류지원 저</span>
                        <span>아람출판사</span>
                        <span class="last">2021-03-02</span>
                        <span class="isbn">ISBN : 9791197198373</span>
                      </span>
                      <span class="price">
                        <strong>13,500<i>원</i></strong>
                        <del>15,000원</del>
                        <em>10<b>%</b></em>
                      </span>
                    </span>
                  </router-link>
                  <div class="productBtn">
                    <span>
                      <button class="btnContents" @click="popupTrigger01 = true">목차보기</button>
                      <button class="btnSale" @click="discountTipsPop = true">구매할인 팁</button>
                      <button class="btnGuide" @click="popupTrigger04 = true">입고안내</button>
                    </span>
                  </div>
                </li>
                <li>
                  <router-link to="/mkup/ssammall/book/view">
                    <span class="productImg">
                      <img :src="require(`@/assets/images//thumbnail/@tmp_device01.png`)" alt="2021 영어교육학 이벤트"/>
                    </span>
                    <span class="productDetail">
                      <span class="labelInfo">
                        <em class="iSbjSetMini">교육학</em>
                      </span>
                      <strong>2021 <span class="fGreen">영어교육학</span> 이벤트</strong>
                      <span class="moreInfo">
                        <span>류지원 저</span>
                        <span>아람출판사</span>
                        <span class="last">2021-03-02</span>
                        <span class="isbn">ISBN : 9791197198373</span>
                      </span>
                      <span class="price">
                        <strong>13,500<i>원</i></strong>
                        <del>15,000원</del>
                        <em>10<b>%</b></em>
                      </span>
                    </span>
                  </router-link>
                  <div class="productBtn">
                    <span>
                      <button class="btnBasket" @click="popupTrigger02 = true">장바구니</button>
                      <button class="btnPay" @click="popupTrigger03 = true">즉시결제</button>
                      <button class="btnSale" @click="discountTipsPop = true">구매할인 팁</button>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- //교수 강좌 교재 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- Popup -->
    <!-- 구매할인 팁 Popup -->
    <Popup v-if='discountTipsPop' @close="discountTipsPop = false" class="large discountTipsPop">
      <template slot="modalheader">
        <div>
          <h1>구매할인 팁</h1>
          <span>최근 2년 이내 특정강좌를 수강했다면 보다 높은 할인이 적용됩니다.</span>
        </div>
        <button @click="discountTipsPop = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <div class="ratePriceTit mallCase">
          <span class="left"><em>SAMSUNG</em>노트북 5+</span>
          <span class="price">
            <del>500,000</del><strong>2,712,000<i>원</i></strong>
          </span>
        </div>
        <MallDiscount />
      </template>
    </Popup>
    <!-- //구매할인 팁 Popup -->
    <!-- 목차 -->
    <Popup v-if='popupTrigger01' @close="popupTrigger01 = false" class="bookChapterPop">
      <template slot="modalheader">
        <div><h1>목차</h1></div>
  			<button @click="popupTrigger01 = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <div class="bookContents">
          <span class="bookName">2021대비 류지원 전공영어 심화 영어교육론</span>
          <span class="bookInfo">
            <em>류지원 저</em>
            <em>아람출판사</em>
            <em class="last">2021-03-02</em>
            <em class="isbn">ISBN : 9791197198373</em>
          </span>
          <table class="popTable">
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">강의명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="first">01</td>
                <td class="tL">교육개념 준거와 방어적 수업 관점의 수업 진단과 교육 내용, 방법, 평가 방안</td>
              </tr>
              <tr>
                <td>02</td>
                <td class="tL">교육의 정의와 학업성취의 영향 요인, 교육과정의 조직 원리와 문제해결 학습 및 구안법의 특징</td>
              </tr>
              <tr>
                <td>03</td>
                <td class="tL">교육사조와 교육과정 추론 및 귀인 이론 관점에서 학습 태도 진단과 문제점 및 방안</td>
              </tr>
              <tr>
                <td>04</td>
                <td class="tL">자연주의 교육목적과 학습경험 선정·조직 원리, 학력과 동기 향상을 위한 수업 방법 및 평가</td>
              </tr>
              <tr>
                <td>05</td>
                <td class="tL">공리주의와 성리학 관점 설명 및 동기의 특징, 조직 이론과 목표별 수업이론의 추론 설명</td>
              </tr>
              <tr>
                <td>06</td>
                <td class="tL">포스트모더니즘과 상징적 상호작용 관점 교육 방향, 방어적 수업 관점에서 수업 진단과 방안</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL" @click="popupTrigger01 = false">닫기</button>
        </div>
      </template>
    </Popup>
    <!-- //목차 -->
    <!-- 장바구니 -->
    <Alert v-if='popupTrigger02' @close="popupTrigger02 = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>선택한 교재를 장바구니에 추가하였습니다.</p></div>
      </template>
      <template slot="modalfooter">
        <router-link class="btnM line" to="/mkup/mypage/payment/basket">장바구니로 이동</router-link>
        <button class="btnM" @click="popupTrigger02 = false">구매를 계속함</button>
      </template>
    </Alert>
    <!-- //장바구니 -->
    <!-- 즉시결제 -->
    <Alert v-if='popupTrigger03' @close="popupTrigger03 = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>즉시결제를 하시겠습니까?</p></div>
      </template>
      <template slot="modalfooter">
        <button class="btnM line" @click="popupTrigger03 = false">취소</button>
        <button class="btnM" @click="popupTrigger03 = false">확인</button>
      </template>
    </Alert>
    <!-- //즉시결제 -->
    <!-- 입고 안내문자 신청 -->
    <Popup v-if='popupTrigger04' @close="popupTrigger04 = false" class="bookWearingrPop">
      <template slot="modalheader">
        <div>
          <h1>입고 안내문자 신청</h1>
          <button @click="bookPopupTrigger04 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="bookGuideContents">
          <span class="txt01">본 교재는 일시품절 상태입니다.</span>
          <span class="number">010-1234-5678</span>
          <span class="txt02">회원님의 연락처로 입고 즉시 SMS를 통해 안내해 드리겠습니다.</span>
        </div>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnM" @click="popupTrigger04 = false">신청</button>
        </div>
      </template>
    </Popup>
    <!-- //입고 안내문자 신청 -->
    <!-- 선생님 팝업 -->
    <Popup v-if='ssamChoiceTrigger' @close="ssamChoiceTrigger = false" class="ssamChoicePop">
      <template slot="modalheader">
        <div>
          <h1>선생님 전체보기</h1>
          <button @click="ssamChoiceTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <BookSsamList />
      </template>
    </Popup>
    <!-- //선생님 팝업 -->
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import BookSsamList from '@/views/ssammall/BookSsamList.vue';
import MallDiscount from '@/views/ssammall/MallDiscount.vue';

export default {
  mixins: [Mixin],
  name: 'BookTeacher',
  components: {
    BookSsamList,
    MallDiscount
  },
  data() {
    return {
      popupTrigger01: false,
      popupTrigger02: false,
      popupTrigger03: false,
      popupTrigger04: false,
      ssamChoiceTrigger: false,
      discountTipsPop: false
    }
  },
  methods: {
  }
}
</script>
