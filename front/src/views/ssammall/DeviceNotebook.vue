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
        <div class="ssammallDeviceList">
          <div class="subTit">
            <h3>노트북</h3>
            <span class="right"><em class="count">총 12건</em></span>
          </div>
          <div class="productList">
            <ul>
              <!-- Loop -->
              <li class="new"> <!-- 새 제품일 경우 클래스 new 추가 -->
                <router-link to="/mkup/ssammall/device/view">
                  <span class="productImg">
                    <img :src="require(`@/assets/images//thumbnail/@tmp_device01.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
                  </span>
                  <span class="productDetail">
                    <span class="corp">SAMSUNG</span>
                    <strong>노트북 5+</strong>
                    <span class="price">
                      <strong>1,729,000<i>원</i></strong>
                      <del>1,830,360원</del>
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
              <!-- //Loop -->
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="productImg">
                    <img :src="require(`@/assets/images//thumbnail/@tmp_device01.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
                  </span>
                  <span class="productDetail">
                    <span class="labelInfo">
                      <em class="iPro lineLong">강좌+학습기기</em>
                    </span>
                    <span class="corp">SAMSUNG</span>
                    <strong>노트북 5+</strong>
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
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="productImg">
                    <img :src="require(`@/assets/images//thumbnail/@tmp_device01.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
                  </span>
                  <span class="productDetail">
                    <span class="labelInfo">
                      <em class="iPro lineLong">강좌+학습기기</em>
                    </span>
                    <span class="corp">LG</span>
                    <strong>노트북 5+</strong>
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
              <li class="new"> <!-- 새 제품일 경우 클래스 new 추가 -->
                <router-link to="/mkup/ssammall/device/view">
                  <span class="productImg">
                    <img :src="require(`@/assets/images//thumbnail/@tmp_device01.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
                  </span>
                  <span class="productDetail">
                    <span class="labelInfo">
                      <em class="iPro lineLong">강좌+학습기기</em>
                    </span>
                    <span class="corp">SAMSUNG</span>
                    <strong>노트북 5+</strong>
                    <span class="price">
                      <strong>1,125,000<i>원</i></strong>
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
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="productImg">
                    <img :src="require(`@/assets/images//thumbnail/@tmp_device01.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
                  </span>
                  <span class="productDetail">
                    <span class="labelInfo">
                      <em class="iPro lineLong">강좌+학습기기</em>
                    </span>
                    <span class="corp">SAMSUNG</span>
                    <strong>노트북 5+</strong>
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
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="productImg">
                    <img :src="require(`@/assets/images//thumbnail/@tmp_device01.png`)" alt="2021 영어교육학 이벤트"/>
                  </span>
                  <span class="productDetail">
                    <span class="corp">LG</span>
                    <strong>2021 영어교육학 이벤트</strong>
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
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="productImg">
                    <img :src="require(`@/assets/images//thumbnail/@tmp_device01.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
                  </span>
                  <span class="productDetail">
                    <span class="labelInfo">
                      <em class="iPro lineLong">강좌+학습기기</em>
                    </span>
                    <span class="corp">LG</span>
                    <strong>노트북 5+</strong>
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
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="productImg">
                    <img :src="require(`@/assets/images//thumbnail/@tmp_device01.png`)" alt="2021 영어교육학 이벤트"/>
                  </span>
                  <span class="productDetail">
                    <span class="corp">LG</span>
                    <strong>2021 영어교육학 이벤트</strong>
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
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="productImg">
                    <img :src="require(`@/assets/images//thumbnail/@tmp_device01.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
                  </span>
                  <span class="productDetail">
                    <span class="labelInfo">
                      <em class="iPro lineLong">강좌+학습기기</em>
                    </span>
                    <span class="corp">LG</span>
                    <strong>노트북 5+</strong>
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
    <!-- 장바구니 -->
    <Alert v-if='popupTrigger02' @close="popupTrigger02 = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>선택한 상품을 장바구니에 추가하였습니다.</p></div>
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
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import MallDiscount from '@/views/ssammall/MallDiscount.vue';

export default {
  mixins: [Mixin],
  name: 'DeviceNotebook',
  components: {
    MallDiscount
  },
  data() {
    return {
      popupTrigger02: false,
      popupTrigger03: false,
      discountTipsPop: false
    }
  },
  methods: {
  }
}
</script>
