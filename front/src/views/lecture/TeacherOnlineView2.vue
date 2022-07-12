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
                  <em class="iLocSet online">온라인</em>
                  <em class="iPro">단과</em>
                  <em class="iSet">2021</em>
                  <em class="iSet red">신규개설</em>
                  <strong class="tt">
                    그린키위반(한국교육사,서양교육사) <i class="division">이론강의</i>
                    <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                  </strong>
                  <span class="lecLimit"><em>70일간</em><em>1.4배수</em><em>제작중</em></span>
                </div>
                <span class="iSetLine">
                  <em>첨삭</em>
                  <em>PC+모바일</em>
                  <em>인패키지</em>
                  <em>제작예정(2021년 09~12월)</em>
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
                            <span class="checkSet" v-if="!this.mobile">
                              <input type="checkbox" id="book01" />
                              <label for="book01"><i></i>교재 구매</label>
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
                            <span class="checkSet" v-if="!this.mobile">
                              <input type="checkbox" id="book01" />
                              <label for="book01"><i></i>교재 구매</label>
                            </span>
                          </span>
                        </div>
                      </li>
                    </ol>
                    <!--//-->
                  </div>
                </div>
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
                              <span class="lecLimit">
                                <em>70일간</em><em>1.4배수</em><em>제작중</em>
                              </span>
                            </span>
                          </div>
                          <div class="lecBtnSet">
                            <button @click="lecturePop = true, lecturePopTab = 0">맛보기</button>
                            <button @click="lecturePop = true, lecturePopTab = 1">강좌소개</button>
                            <button @click="lecturePop = true, lecturePopTab = 2">강좌리스트</button>
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
                              <span class="checkSet" v-if="!this.mobile">
                                <input type="checkbox" id="book01" />
                                <label for="book01"><i></i>교재 구매</label>
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
              <!-- 강의 리스트 -->
              <div class="article">
                <div class="subTit">
                  <h3>강의 리스트</h3>
                </div>
                <TeacherLecSchedule />
              </div>
              <!-- //강의 리스트 -->
            </div>
            <!-- //강좌 별 상세 내용 -->
          </div>
          <!-- 결제내역 -->
          <div class="viewPrice" v-if="!this.mobile">
            <div class="priceOrderSet">
              <dl>
                <dt>수강료</dt>
                <dd>
                  <span class="price"><del>2,568,000</del><strong>2,311,200<i>원</i></strong></span>
                </dd>
              </dl>
              <dl>
                <dt>교재비</dt>
                <dd>
                  <span class="price"><del>165,000</del><strong>148,500<i>원</i></strong></span>
                </dd>
              </dl>
              <dl class="delivery">
                <dt>배송비</dt>
                <dd>
                  <span class="price"><strong>9,000<i>원</i></strong></span>
                </dd>
              </dl>
              <dl class="last">
                <dt>예상 결제 금액</dt>
                <dd>
                  <span class="price"><del>2,742,000</del><strong>2,468,700<i>원</i></strong></span>
                </dd>
              </dl>
            </div>
            <div class="btn">
              <button class="btnL red">즉시결제</button>
              <button class="btnL redline">장바구니</button>
            </div>
            <p>해당 상품은 <strong>총 2개의 강좌 (강좌 1 + 보너스 강좌 1)</strong>로 구성된 상품입니다.</p>
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

    <!-- 강좌관련 팝업 -->
    <Popup v-if='lecturePop' @close="lecturePop = false" class="large lecturePop tastePop">
      <template slot="modalheader" class="noLine">
        <div>
          <h1>그린키위반 (기본반)</h1>
          <span>기초부터 탄탄하게 쌓아가는 키위 교육학</span>
          <button @click="lecturePop = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="tabBack">
          <div class="tabNav">
            <nav>
              <ul class="blackLineTab">
                <li :class="{on:lecturePopTab===0}"><button @click="lecturePopTab = 0">강좌맛보기</button></li>
                <li :class="{on:lecturePopTab===1}"><button @click="lecturePopTab = 1">강좌소개</button></li>
                <li :class="{on:lecturePopTab===2}"><button @click="lecturePopTab = 2">강의 리스트</button></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="tabLayout">
          <div v-if="lecturePopTab == 0" class="tabData" :key="lecturePopTab">
            <div class="videoPlay"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></div>
          </div>
          <div v-if="lecturePopTab == 1" class="tabData">
            <TeacherLecDetailInfo />
          </div>
          <div v-if="lecturePopTab == 2" class="tabData">
            <TeacherLecSchedule />
          </div>
        </div>
      </template>
    </Popup>
    <!-- //강좌관련 샘플  -->
    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>

    <!-- 모바일용 결제내역 -->
    <div id="buyFloating" :class="{on:buyFloatingTrigger == true}" v-if="this.mobile">
      <div class="buyOpnerBack"><button class="buyOpner" @click="buyFloatingTrigger = !buyFloatingTrigger">여닫기</button></div>
      <!-- 데이터 영역 -->
      <div class="buyTemplate">
        <!-- 수강신청 온라인 단과 -->
        <div class="buySet">
          <dl>
            <dt>수강료</dt>
            <dd>
              <span class="price"><del>2,568,000</del><em>10<b>%</b></em><strong>2,311,200<i>원</i></strong></span>
            </dd>
          </dl>
          <div class="choiceArea">
            <div class="totalChoice">
              <span class="checkSet">
                <input type="checkbox" />
                <label>
                  <i></i>교재 전체선택
                  <span class="price"><del>165,000</del><strong>148,500<i>원</i></strong></span>
                </label>
              </span>
            </div>
            <div class="eachChoice">
              <span class="checkSet">
                <input type="checkbox" />
                <label>
                  <i></i>그린키위 교육학(기본1)
                  <span class="price"><del>55,000</del><em>10<b>%</b></em><strong>49,500<i>원</i></strong></span>
                </label>
              </span>
              <span class="checkSet">
                <input type="checkbox" />
                <label>
                  <i></i>그린키위 교육학(기본2)
                  <span class="price"><del>55,000</del><em>10<b>%</b></em><strong>49,500<i>원</i></strong></span>
                </label>
              </span>
              <span class="checkSet">
                <input type="checkbox" />
                <label>
                  <i></i>그린키위 교육학(심화1)
                  <span class="price"><del>55,000</del><em>10<b>%</b></em><strong>49,500<i>원</i></strong></span>
                </label>
              </span>
            </div>
            <dl>
              <dt>교재비</dt>
              <dd>
                <span class="price"><del>193,000</del><strong>173,700<i>원</i></strong></span>
              </dd>
            </dl>
          </div>
          <dl class="delivery">
            <dt>배송비</dt>
            <dd>
              <span class="price"><strong>9,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl class="total">
            <dt>예상 결제 금액</dt>
            <dd>
              <span class="price"><del>2,880,000</del><strong>1,542,000<i>원</i></strong></span>
            </dd>
          </dl>
          <p>해당 상품은 <strong>총 2개의 강좌(강좌1 + 보너스강좌1)</strong>로 구성된 상품입니다.</p>
        </div>
        <!-- //수강신청 온라인 단과  -->
      </div>
      <!-- //데이터 영역 -->
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
import TeacherLecDetailInfo from '@/views/lecture/TeacherLecDetailInfo.vue';
import TeacherLecSchedule from '@/views/lecture/TeacherLecSchedule.vue';
import TeacherLecDiscount from '@/views/lecture/TeacherLecDiscount.vue';

export default {
  mixins: [Mixin],
  name: 'TeacherOnlineView',
  components: {
    TeacherLecDetailInfo,
    TeacherLecSchedule,
    TeacherLecDiscount
  },
  data() {
    return {
      buyFloatingTrigger:false,
      openDetail: false,
      currentTab: 0,
      videoPopTrigger01: false,
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
