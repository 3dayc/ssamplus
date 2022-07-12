<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="lecViewContainer">
          <!---->
          <div class="lecViewContents">
            <!-- 쌤 & 강좌명 -->
            <div class="lecBasicBack">
              <button @click="$router.go(-1)" class="btnListGo" v-if="!this.mobile">목록</button>
              <div class="ssam">
                <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt="" /></span>
                <strong>김 현</strong>
              </div>
              <div class="lecBasic">
                <span class="kind">
                  <span><em class="iApplySet ing">신청중</em></span>
                </span>
                <div class="lecTt">
                  <em class="iLocSet ivy">아이비</em>
                  <em class="iPro">단과</em>
                  <em class="iSet">2021</em>
                  <em class="iSet red">신규개설</em>
                  <strong class="tt">
                    그린키위반(한국교육사, 서양교육사) 강좌의 타이틀이 길어지면 2~N행으로 확장이 됩니다. <i class="division">이론강의</i>
                    <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                  </strong>
                  <span class="lecLimit">월, 목 9:30~13:00</span>
                  <span class="lecLimit red">개강 : 2021-05-03</span>
                </div>
                <span class="iSetLine">
                  <em>첨삭</em>
                  <em>인패키지</em>
                </span>
              </div>
              <div class="lecViewPrice" v-if="this.mobile">
                <div class="lvpSet">
                  <div class="set">
                    <strong class="tt">수강료</strong>
                    <span class="price">
                      <del>2,568,000</del><em>10<b>%</b></em><br/>
                      <strong>1,356,600<i>원</i></strong>
                    </span>
                  </div>
                  <div class="set">
                    <strong class="tt">교재</strong>
                    <span class="price">
                      <del>312,000</del><em>10<b>%</b></em><br/>
                      <strong>196,600<i>원</i></strong>
                    </span>
                  </div>
                </div>
                <div class="lvpTxt">※ 해당 패키지는 <em>총 2개의 강좌 (강좌 1 + 보너스 강좌 1)</em>로 구성된 상품입니다.</div>
              </div>
            </div>
            <!-- //쌤 & 강좌명 -->
            <!-- 강좌 별 상세 내용 -->
            <div class="lecDetail">
              <!-- 수강할인 팁 -->
              <div class="article">
                <div class="subTit">
                  <h3>수강할인 팁</h3>
                  <span class="right"><button class="btnDiscount" @click="openDetail = !openDetail" v-if="openDetail == false">펼쳐보기</button></span>
                  <div><em>최근 2년 이내 특정강좌를 수강했다면 보다 높은 할인이 적용됩니다.</em></div>
                </div>
                <div class="lecDiscountBack" :class="{open:openDetail===true}" >
                  <TeacherLecDiscount />
                  <button class="btnDiscount" @click="openDetail = !openDetail">접기</button>
                </div>
              </div>
              <!-- //수강할인 팁 -->
              <!-- 강의 미리보기 -->
              <div class="article">
                <div class="subTit noLine"><h3>강의 미리보기</h3></div>
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></span>
              </div>
              <!-- //강의 미리보기 -->
              <!-- 강좌 교재 -->
              <div class="article bookData">
                <div class="subTit"><h3>강좌 교재</h3></div>
                <div class="inbLecture">
                  <div class="widthList">
                    <ol>
                      <li>
                        <div class="item">
                          <span class="tL">
                            <em class="iPro book">교재</em>
                            <strong>골드키위 교육학(심화-상)</strong>
                          </span>
                          <span class="tR">
                            <span class="price">
                              <del>55,000</del>
                              <strong>49,500<i>원</i></strong>
                            </span>
                          </span>
                        </div>
                        <div class="item">
                          <span class="tL">
                            <em class="iPro book">교재</em>
                            <strong>골드키위 교육학(심화-하)</strong>
                          </span>
                          <span class="tR">
                            <span class="price">
                              <del>55,000</del>
                              <strong>49,500<i>원</i></strong>
                            </span>
                          </span>
                        </div>
                      </li>
                    </ol>
                    <!--//-->
                  </div>
                </div>
                <p class="guideBox info mt10">라이브 강의의 경우 학원에서 교재를 구매해 주세요.</p>
              </div>
              <!-- //강좌 교재 -->
              <!-- 보너스 강좌 -->
              <div class="article">
                <div class="subTit"><h3>보너스 강좌</h3></div>
                <div class="inbLecture">
                  <div class="widthList">
                    <ol>
                      <!--Loop-->
                      <li>
                        <div class="singleLec">
                          <div class="item">
                            <span class="tL">
                              <em class="iPro bonus">보너스</em>
                              <strong>그린키위반(한국교육사, 서양교육사)</strong>
                            </span>
                            <span class="tR">
                              <span class="lecLimit">월, 목 9:30~13:00</span>
                              <span class="lecLimit red">개강 : 2021-05-03</span>
                            </span>
                          </div>
                          <div class="lecBtnSet">
                            <button @click="lecturePop = true">강좌소개</button>
                          </div>
                        </div>
                        <div class="lecBook">
                          <div class="item">
                            <span class="tL">
                              <em class="iPro book">교재</em>
                              <strong>그린키위 교육학(기본)</strong>
                            </span>
                            <span class="tR">
                              <span class="price">
                                <del>55,000</del>
                                <strong>49,500<i>원</i></strong>
                              </span>
                            </span>
                          </div>
                        </div>
                      </li>
                      <!--//Loop-->
                    </ol>
                  </div>
                </div>
              </div>
              <!-- //보너스 강좌 -->
              <!-- 강좌 소개 -->
              <div class="article">
                <div class="subTit">
                  <h3>강좌 소개</h3>
                </div>
                <TeacherLecDetailInfo />
              </div>
              <!-- //강좌 소개 -->
            </div>
            <!-- //강좌 별 상세 내용 -->
          </div>
          <!-- 결제내역 -->
          <div class="viewPrice"  v-if="!this.mobile">
            <div class="priceOrderSet">
              <dl>
                <dt>수강료</dt>
                <dd>
                  <span class="price"><del>2,568,000</del><strong>2,311,200<i>원</i></strong></span>
                </dd>
              </dl>
              <dl class="last">
                <dt>예상 결제 금액</dt>
                <dd>
                  <span class="price"><del>2,568,000</del><strong>2,311,200<i>원</i></strong></span>
                </dd>
              </dl>
            </div>
            <div class="btn">
              <button class="btnL redline">장바구니</button>
              <button class="btnL red">즉시결제</button>
            </div>
            <p>해당 상품은 <strong>총 2개의 강좌(강좌1 + 보너스강좌1)</strong>로 구성된 상품입니다.</p>
          </div>
          <!-- //결제내역 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
    <!-- 강좌관련 팝업(강좌소개만 있음) -->
    <Popup v-if='lecturePop' @close="lecturePop = false" class="large lecturePop tastePop">
      <template slot="modalheader" class="noLine">
        <div>
          <h1>그린키위반 (기본반)</h1>
          <span>기초부터 탄탄하게 쌓아가는 키위 교육학</span>
          <button @click="lecturePop = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="tabLayout infoCase">
          <div class="tabData">
            <TeacherLecDetailInfo />
          </div>
        </div>
      </template>
    </Popup>
    <!-- //강좌관련 팝업(강좌소개만 있음) -->

    <!-- 모바일용 결제내역 -->
    <div id="buyFloating" :class="{on:buyFloatingTrigger == true}" v-if="this.mobile">
      <div class="buyOpnerBack"><button class="buyOpner" @click="buyFloatingTrigger = !buyFloatingTrigger">여닫기</button></div>
      <!-- 여닫기 영역 -->
      <div class="buyTemplate">
        <!-- 수강신청 오프라인 -->
        <div class="buySet">
          <dl>
            <dt>수강료</dt>
            <dd>
              <span class="price"><del>2,568,000</del><em>10<b>%</b></em><strong>2,311,200<i>원</i></strong></span>
            </dd>
          </dl>
          <!-- <dl>
            <dt>교재비</dt>
            <dd>
              <span class="price"><strong>0<i>원</i></strong></span>
            </dd>
          </dl>
          <dl class="delivery">
            <dt>배송비</dt>
            <dd>
              <span class="price"><strong>0<i>원</i></strong></span>
            </dd>
          </dl> -->
          <dl class="total">
            <dt>예상 결제 금액</dt>
            <dd>
              <span class="price"><del>2,880,000</del><strong>1,542,000<i>원</i></strong></span>
            </dd>
          </dl>
          <p>해당 상품은 <strong>총 2개의 강좌(강좌1 + 보너스강좌1)</strong>로 구성된 상품입니다.</p>
        </div>
        <!-- //수강신청 오프라인-->
      </div>
      <!-- //여닫기 영역 -->
      <div class="buyBtnSet">
        <button class="btnL red" v-if="!buyFloatingTrigger" @click="buyFloatingTrigger = !buyFloatingTrigger">구매하기</button>
        <span v-if="buyFloatingTrigger">
          <button class="btnL redline">장바구니</button>
          <button class="btnL red">즉시결제</button>
        </span>
      </div>
    </div>
    <!-- //모바일용 결제내역 -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import TeacherLecDiscount from '@/views/lecture/TeacherLecDiscount.vue';
import TeacherLecDetailInfo from '@/views/lecture/TeacherLecDetailInfo.vue';


export default {
  mixins: [Mixin],
  name: 'TeacherDirectSeoulView2',
  components: {
    TeacherLecDiscount,
    TeacherLecDetailInfo
  },
  data() {
    return {
      buyFloatingTrigger:false,
      openDetail: false,
      lecturePop:false,
      lecturePopTab:0,
    }
  },
  methods: {
  },
  mounted() {
  },
}
</script>
