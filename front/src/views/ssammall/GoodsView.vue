<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="ssammallDeviceView">
          <div class="mallProductView">
            <!---->
            <div class="productBox">
              <div class="productInfo">
                <div class="imgBox"><span><img :src="require(`@/assets/images/thumbnail/@tmp_etc01.png`)" alt=""/></span></div>
                <div class="txtBox">
                  <strong class="notBook">꽃방석 (핑크)</strong>
                  <div class="moreInfo">
                    <span><em>제품명</em>꽃방석</span>
                    <span><em>컬러</em>Pink</span>
                  </div>
                </div>
              </div>
              <!---->
              <div class="orderInfo">
                <div class="priceArea">
                  <dl v-if="!this.mobile">
                    <dt>주문수량</dt>
                    <dd>
                      <span class="countBox">
                        <button class="minus">-</button>
                        <span class="count">1</span>
                        <button class="plus">+</button>
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>정가</dt>
                    <dd><em class="cost">86,000</em>원</dd>
                  </dl>
                  <dl class="productPrice">
                    <dt>판매가</dt>
                    <dd>
                      <span class="price"><strong>2,712,000<i>원</i></strong><em>10<b>%</b></em></span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>배송비</dt>
                    <dd class="deliveryTxt">무료</dd>
                  </dl>
                </div>
                <div class="btnArea" v-if="!this.mobile">
                  <button class="btnL redline" @click="popupTrigger01 = true">장바구니</button>
                  <button class="btnL red" @click="popupTrigger02 = true">즉시결제</button>
                  <!-- 품목이 품절일 시 -->
                  <button class="btnL line solo" style="display:none;" @click="popupTrigger03 = true">입고 안내문자 신청</button>
                </div>
              </div>
              <!---->
            </div>
            <!-- 구매할인 팁 -->
            <div class="mallDiscount">
              <div class="subTit">
                <h3>구매할인 팁</h3>
                <!-- <span class="right"><button class="btnDiscount" @click="openDiscount = !openDiscount" v-if="openDiscount == false">펼쳐보기</button></span> -->
                <div><em>최근 2년 이내 특정강좌를 수강했다면 보다 높은 할인이 적용됩니다.</em></div>
              </div>
              <div class="mallDiscountBack" :class="{open:openDiscount===true}" >
                <MallDiscount />
              </div><!-- 20220322 수정 -->
              <button class="moreBtn" :class="{open:reviewMore05===true}" @click="reviewToggle05">
                {{reviewMoreTxt05}}
              </button><!-- 20220322 수정 -->
            </div>
            <!-- //구매할인 팁 -->
            <!-- 퀵무브 -->
            <div class="quickMove">
              <ul>
                <li :class="{on:currentTab===0}"><button @click="gotoMallView('mallViewTrigger01')">제품 상세</button></li>
                <li :class="{on:currentTab===1}"><button @click="gotoMallView('mallViewTrigger02')">백퍼후기</button></li>
              </ul>
            </div>
            <!-- //퀵무브 -->
            <div class="mallContents">
              <!-- 제품 상세 -->
              <div class="contentsBox" id="intro" ref="mallViewTrigger01">
                <div class="productDetailView" :class="{open:openDetail===true}">
                  <div class="detailArea">
                    <img :src="require(`@/assets/images/thumbnail/@tmp_ssamMall.png`)" alt=""/>
                  </div>
                  <button class="btnL solo" @click="detailToggle">
                    상품정보 {{productMoreTxt}}
                  </button>
                </div>
              </div>
              <!-- //제품 상세 -->
              <!-- 백퍼후기 -->
              <div class="contentsBox" id="review" ref="mallViewTrigger02">
                <div class="subTit">
                  <h3>백퍼후기</h3>
                </div>
                <div class="bookReview">
                  <ul>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_img01.png`)" @click="imgPopTrigger01 = true" alt=""/></span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"></span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p :class="{open:reviewMore01===true}">처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_img02.png`)" @click="imgPopTrigger02 = true" alt=""/></span>
                      </div>
                      <button class="moreBtn" :class="{open:reviewMore01===true}" @click="reviewToggle01">
                        {{reviewMoreTxt01}}
                      </button>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p :class="{open:reviewMore02===true}">모두 이 교재를 사도록 하세요. 선생님의 공부 팁이 아주 꽉꽉 담겨져 있습니다. 저는 강의도 같이 듣고 있는데 교재 진짜 필수에요. 류지원 선생님 강의 듣지 않는 분들에게도 강추입니다 꼭 사세요 진짜 둘도 없는 영어 교재에요. 지루하지 않고 핵심 쏙쏙 들어있고, 류지원 선생님만의 특유 방식으로 기억에도 잘 남게 정리되어 있어요. 진짜 핵강추입니다. 모두 이 교재를 사도록 하세요. 선생님의 공부 팁이 아주 꽉꽉 담겨져 있습니다. 저는 강의도 같이 듣고 있는데 교재 진짜 필수에요. 류지원 선생님 강의 듣지 않는 분들에게도 강추입니다 꼭 사세 요. 진짜 둘도 없는 영어 교재에요. 지루하지 않고 핵심 쏙쏙 들어있고, 류지원 선생님만의 특유 방식으로 기억에 도 잘 남게 정리되어 있어요. 진짜 핵강추입니다.</p>
                        </span>
                        <span class="imgBox"></span>
                      </div>
                      <button class="moreBtn" :class="{open:reviewMore02===true}" @click="reviewToggle02">
                        {{reviewMoreTxt02}}
                      </button>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_img01.png`)" @click="imgPopTrigger01 = true" alt=""/></span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"></span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p :class="{open:reviewMore03===true}">처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_img02.png`)" @click="imgPopTrigger02 = true" alt=""/></span>
                      </div>
                      <button class="moreBtn" :class="{open:reviewMore03===true}" @click="reviewToggle03">
                        {{reviewMoreTxt03}}
                      </button>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p :class="{open:reviewMore04===true}">모두 이 교재를 사도록 하세요. 선생님의 공부 팁이 아주 꽉꽉 담겨져 있습니다. 저는 강의도 같이 듣고 있는데 교재 진짜 필수에요. 류지원 선생님 강의 듣지 않는 분들에게도 강추입니다 꼭 사세요 진짜 둘도 없는 영어 교재에요. 지루하지 않고 핵심 쏙쏙 들어있고, 류지원 선생님만의 특유 방식으로 기억에도 잘 남게 정리되어 있어요. 진짜 핵강추입니다. 모두 이 교재를 사도록 하세요. 선생님의 공부 팁이 아주 꽉꽉 담겨져 있습니다. 저는 강의도 같이 듣고 있는데 교재 진짜 필수에요. 류지원 선생님 강의 듣지 않는 분들에게도 강추입니다 꼭 사세 요. 진짜 둘도 없는 영어 교재에요. 지루하지 않고 핵심 쏙쏙 들어있고, 류지원 선생님만의 특유 방식으로 기억에 도 잘 남게 정리되어 있어요. 진짜 핵강추입니다.</p>
                        </span>
                        <span class="imgBox"></span>
                      </div>
                      <button class="moreBtn" :class="{open:reviewMore04===true}" @click="reviewToggle04">
                        {{reviewMoreTxt04}}
                      </button>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"><img :src="require(`@/assets/images/thumbnail/@tmp_img01.png`)" @click="imgPopTrigger01 = true" alt=""/></span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span class="txtBox">
                          <span class="util">
                            <em>[sss******]</em>
                            <em>2021-02-01</em>
                          </span>
                          <p>처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다. 자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.</p>
                        </span>
                        <span class="imgBox"></span>
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
              <!-- //백퍼후기 -->
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

    <!-- //Popup -->
    <!-- 장바구니 -->
    <Alert v-if='popupTrigger01' @close="popupTrigger01 = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>선택한 상품을 장바구니에 추가하였습니다.</p></div>
      </template>
      <template slot="modalfooter">
        <router-link class="btnM line" to="/mkup/mypage/payment/basket">장바구니로 이동</router-link>
        <button class="btnM" @click="popupTrigger01 = false">구매를 계속함</button>
      </template>
    </Alert>
    <!-- //장바구니 -->
    <!-- 즉시결제 -->
    <Alert v-if='popupTrigger02' @close="popupTrigger02 = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>즉시결제를 하시겠습니까?</p></div>
      </template>
      <template slot="modalfooter">
        <button class="btnM line" @click="popupTrigger02 = false">취소</button>
        <button class="btnM" @click="popupTrigger02 = false">확인</button>
      </template>
    </Alert>
    <!-- //즉시결제 -->
    <!-- 입고 안내문자 신청 -->
    <Popup v-if='popupTrigger03' @close="popupTrigger03 = false" class="bookWearingrPop">
      <template slot="modalheader">
        <div><h1>입고 안내문자 신청</h1></div>
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
          <button class="btnM line" @click="popupTrigger03 = false">닫기</button>
          <button class="btnM" @click="popupTrigger03 = false">신청</button>
        </div>
      </template>
    </Popup>
    <!-- //입고 안내문자 신청 -->
    <ImgPopup v-if='imgPopTrigger01' @close="imgPopTrigger01 = false">
      <div slot="modalbody">
        <img :src="require(`@/assets/images/thumbnail/@tmp_img01.png`)" alt=""/>
      </div>
    </ImgPopup>
    <ImgPopup v-if='imgPopTrigger02' @close="imgPopTrigger02 = false">
      <div slot="modalbody">
        <img :src="require(`@/assets/images/thumbnail/@tmp_img02.png`)" alt=""/>
      </div>
    </ImgPopup>
    <!-- //Popup -->

    <!-- 모바일용 결제내역 -->
    <div id="buyFloating" :class="{on:buyFloatingTrigger == true}" v-if="this.mobile">
      <div class="buyOpnerBack"><button class="buyOpner" @click="buyFloatingTrigger = !buyFloatingTrigger">여닫기</button></div>
      <!-- 데이터 영역 -->
      <div class="buyTemplate">
        <!-- 쌤 Mall 디바이스 (과목선택 없을 경우) -->
        <div class="buySet">
          <dl>
            <dt>주문수량</dt>
            <dd>
              <span class="countBoxArrow">
                <select name="count">
                  <option value="1"selected="selected">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </span>
            </dd>
          </dl>
          <dl>
            <dt>정가</dt>
            <dd><span class="price"><strong>2,712,000<i>원</i></strong></span></dd>
          </dl>
          <dl>
            <dt>판매가</dt>
            <dd>
              <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>2,712,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>배송비</dt>
            <dd><span class="price"><strong>9,000<i>원</i></strong></span> <button @click="deliveryInfoPopTrigger = true">?</button></dd>
          </dl>
          <dl class="total">
            <dt>총 결제 금액</dt>
            <dd>
              <span class="price"><strong>1,542,000<i>원</i></strong></span>
            </dd>
          </dl>
        </div>
        <!-- //쌤 Mall 디바이스 (과목선택 없을 경우)  -->
      </div>
      <!-- //데이터 영역 -->
      <div class="buyBtnSet">
        <button class="btnL red" v-if="!buyFloatingTrigger" @click="buyFloatingTrigger = !buyFloatingTrigger">구매하기</button>
        <span v-if="buyFloatingTrigger">
          <button class="btnL redline" @click="popupTrigger01 = true">장바구니</button>
          <button class="btnL red" @click="popupTrigger02 = true">즉시결제</button>
        </span>
      </div>
    </div>
    <!-- //모바일용 결제내역 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import MallDiscount from '@/views/ssammall/MallDiscount.vue';

export default {
  mixins: [Mixin],
  name: 'BookView',
  components: {
    MallDiscount
  },
  data() {
    return {
      openDiscount: true,
      buyFloatingTrigger:false,
      popupTrigger01: false,
      popupTrigger02: false,
      popupTrigger03: false,
      imgPopTrigger01: false,
      imgPopTrigger02: false,
      currentTab: 0,
      openDetail: false,
      reviewMore01: true,
      reviewMore02: true,
      reviewMore03: true,
      reviewMore04: true,
      reviewMore05: true,
      quickLoc: 0,
      productMoreTxt: '더보기',
      reviewMoreTxt01: '접기',
      reviewMoreTxt02: '접기',
      reviewMoreTxt03: '접기',
      reviewMoreTxt04: '접기',
      reviewMoreTxt05: '접기',
      isLec: false,
    }
  },
  methods: {
    detailToggle() {
      if (this.openDetail) {
        this.openDetail = false;
        this.productMoreTxt = '더보기';
      } else {
        this.openDetail = true;
        this.productMoreTxt = '접기';
      }
    },
    reviewToggle01() {
      if (this.reviewMore01) {
        this.reviewMore01 = false;
        this.reviewMoreTxt01 = '더보기';
      } else {
        this.reviewMore01 = true;
        this.reviewMoreTxt01 = '접기';
      }
    },
    reviewToggle02() {
      //console.log('하이');
      if (this.reviewMore02) {
        this.reviewMore02 = false;
        this.reviewMoreTxt02 = '더보기';
      } else {
        this.reviewMore02 = true;
        this.reviewMoreTxt02 = '접기';
      }
    },
    reviewToggle03() {
      if (this.reviewMore03) {
        this.reviewMore03 = false;
        this.reviewMoreTxt03 = '더보기';
      } else {
        this.reviewMore03 = true;
        this.reviewMoreTxt03 = '접기';
      }
    },
    reviewToggle04() {
      if (this.reviewMore04) {
        this.reviewMore04 = false;
        this.reviewMoreTxt04 = '더보기';
      } else {
        this.reviewMore04 = true;
        this.reviewMoreTxt04 = '접기';
      }
    },
    reviewToggle05() {
      if (this.reviewMore05) {
        this.reviewMore05 = false;
        this.reviewMoreTxt05 = '더보기';
        this.openDiscount = false;
      } else {
        this.reviewMore05 = true;
        this.reviewMoreTxt05 = '접기';
        this.openDiscount = true;
      }
    },
    gotoMallView(refName) {
      var element = this.$refs[refName];
      var topPos = element.offsetTop + 100;
      window.scrollTo({
        top: topPos,
        left: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
      let introLoc = document.querySelector("#intro").offsetTop;
      let reviewLoc = document.querySelector("#review").offsetTop;

      if (introLoc <= scrollLocation && reviewLoc > scrollLocation) {
        this.currentTab = 0;
      }  else if (reviewLoc <= scrollLocation) {
        this.currentTab = 1;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true);
  },
}
</script>
