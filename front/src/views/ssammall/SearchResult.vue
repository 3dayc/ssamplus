<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="searchResult">
          <!-- 검색 -->
          <div class="topSearchArea">
            <div :class="{listSearch:this.mobile === true, frameBack:!this.mobile === true}">
              <input type="text" placeholder="과목명, 저자명, 교재 명, 기기 브랜드, 기기명으로 검색" value="영어교육학">
              <!-- <button>검색</button> -->
              <router-link to="/mkup/ssammall/search" :class="{btnSearch:this.mobile === true}">검색</router-link>
            </div>
          </div>
          <!-- //검색 -->
          <!-- LeftBanner -->
          <div class="leftAdArea ssammallCase" v-if="!this.mobile">
            <span class="adItem type1x2">
              <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner01.png`)" alt=""/></router-link>
            </span>
            <span class="adItem type1x2">
              <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner02.png`)" alt=""/></router-link>
            </span>
            <span class="adItem type1x1">
              <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner07.png`)" alt=""/></router-link>
            </span>
          </div>
          <!-- //LeftBanner -->
          <!-- 검색결과 -->
          <div class="frameBack sec">
            <div class="subTit">
              <span class="searchCount"><em>영어교육학</em>으로 총 <em>3건</em>의 검색결과가 있습니다.</span>
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
                        <em class="iPro line">교재도서</em><em class="iSbjSetMini">교육학</em><em class="inComeDed">소득공제</em><em class="iPro my">내 강좌 교재</em>
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
                        <em class="iPro line">교재도서</em>
                        <em class="iSbjSetMini">교육학</em>
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
                      <button class="btnInBook" @click="popupTrigger04 = true">입고안내</button>
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
                        <em class="iSet line">학습기기</em>
                      </span>
                      <strong>2021 <span class="fGreen">영어교육학</span> 이벤트</strong>
                      <span class="moreInfo">
                        <span>SAMSUNG</span>
                        <span>노트북</span>
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
                    </span>
                  </div>
                </li>
              </ul>
              <div class="paging">
                <Paginate v-if="!this.mobile" />
                <div class="moreBtnWrap" v-if="this.mobile">
                  <button class="mobileMore">더보기</button>
                </div>
              </div>
            </div>
          </div>
          <!-- //검색결과 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
    <!-- Popup -->
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
    <Popup v-if='popupTrigger04' @close="popupTrigger04 = false"  class="bookWearingrPop">
      <template slot="modalheader">
        <div><h1>입고 안내문자 신청</h1></div>
  			<button @click="popupTrigger04 = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <span class="txt01">본 교재는 일시품절 상태입니다.</span>
        <span class="number">010-1234-5678</span>
        <span class="txt02">회원님의 연락처로 입고 즉시 SMS를 통해 안내해 드리겠습니다.</span>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL" @click="popupTrigger04 = false">신청</button>
        </div>
      </template>
    </Popup>
    <!-- //입고 안내문자 신청 -->
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SearchResult',
  components: {
  },
  data() {
    return {
      popupTrigger01: false,
      popupTrigger02: false,
      popupTrigger03: false,
      popupTrigger04: false,
    }
  },
}
</script>
