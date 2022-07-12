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
        <div class="mockStare">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>응시 모의고사 관리</h3>
          </div>
          <!-- //서브 타이틀 -->
          <div class="voiceTest">
              <span><button @click="popupTrigger2 = true">모의고사 접수</button></span>
              <a href="https://www.youtube.com/watch?v=0TdnQwWlfO0" target="_blank">응시 방법 영상보기</a>
              <button @click="popupTrigger = true">음성 테스트 실시</button>
          </div>
          <!-- 반응형 목록 -->
          <div class="resTls">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem item0">상태</span>
              <span class="lgItem item1">응시기간</span>
              <span class="lgItem item2">모의고사</span>
              <span class="lgItem item3">시험과목</span>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul>
                <!--Loop-->
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet">응시가능</em></span>
                  <span class="lgItem item1" v-if="!this.mobile"> 2021-08-01</span>
                  <router-link to="/mkup/mylec/mock/stare/view" class="lgItem item2 tL">
                    <strong class="tit">제 16회 희소 모의고사 (현장 응시, 2022학년도)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시기간</em> 2021-08-01</span>
                  <span class="lgItem item3 tL">
                    <span><em>1교시 :</em>교육학 (김현)</span>
                    <span><em>2교시 :</em>국어 (김준)</span>
                    <span><em>3교시 :</em>국어 (김준)</span>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet">응시가능</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-08-01 ~ 2021-08-08</span>
                  <router-link to="/mkup/mylec/mock/stare/view" class="lgItem item2 tL">
                    <strong class="tit">제 16회 희소 모의고사 (온라인 응시, 2022학년도)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시기간</em>2021-08-01 ~ 2021-08-08</span>
                  <span class="lgItem item3 tL">
                    <span><em>1교시 :</em>교육학 (윤중샘)</span>
                    <span><em>2교시 :</em>국어 (송헌)</span>
                    <span><em>3교시 :</em>국어 (송헌)</span>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet">응시가능</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-08-17</span>
                  <router-link to="/mkup/mylec/mock/stare/view" class="lgItem item2 tL">
                    <strong class="tit">[교육학/ 김현] 월별 모의고사 (현장 응시)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시기간</em>2021-08-17</span>
                  <span class="lgItem item3 tL">
                    <span><em>1교시 :</em>교육학 (김현)</span>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet">응시가능</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-08-17</span>
                  <router-link to="/mkup/mylec/mock/stare/view" class="lgItem item2 tL">
                    <strong class="tit">[교육학/ 김현] 월별 모의고사 (현장 응시)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시기간</em>2021-08-17</span>
                  <span class="lgItem item3 tL">
                    <span><em>1교시 :</em>교육학 (김현)</span>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet waiting">응시대기</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">22021-08-15 ~ 2021-08-22</span>
                  <router-link to="/mkup/mylec/mock/stare/view" class="lgItem item2 tL">
                    <strong class="tit">[교육학/ 김현] 월별 모의고사 (온라인 응시)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시기간</em>22021-08-15 ~ 2021-08-22</span>
                  <span class="lgItem item3 tL">
                    <span><em>1교시 :</em>교육학 (윤중샘)</span>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet waiting">응시대기</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-07-07 ~ 2021-07-14</span>
                  <router-link to="/mkup/mylec/mock/stare/view" class="lgItem item2 tL">
                    <strong class="tit">제 15회 희소 모의고사 (온라인 응시, 2022학년도)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시기간</em>2021-07-07 ~ 2021-07-14</span>
                  <span class="lgItem item3 tL">
                    <span><em>1교시 :</em>교육학 (윤중샘)</span>
                    <span><em>2교시 :</em>국어 (송헌)</span>
                    <span><em>3교시 :</em>국어 (송헌)</span>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet waiting">응시대기</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-07-07 ~ 2021-07-14</span>
                  <router-link to="/mkup/mylec/mock/stare/view" class="lgItem item2 tL">
                    <strong class="tit">제 15회 희소 모의고사 (온라인 응시, 2022학년도)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시기간</em>2021-07-07 ~ 2021-07-14</span>
                  <span class="lgItem item3 tL">
                    <span><em>1교시 :</em>교육학 (윤중샘)</span>
                    <span><em>2교시 :</em>국어 (송헌)</span>
                    <span><em>3교시 :</em>국어 (송헌)</span>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet waiting">응시대기</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-07-07 ~ 2021-07-14</span>
                  <router-link to="/mkup/mylec/mock/stare/view" class="lgItem item2 tL">
                    <strong class="tit">제 15회 희소 모의고사 (온라인 응시, 2022학년도)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시기간</em>2021-07-07 ~ 2021-07-14</span>
                  <span class="lgItem item3 tL">
                    <span><em>1교시 :</em>교육학 (윤중샘)</span>
                    <span><em>2교시 :</em>국어 (송헌)</span>
                    <span><em>3교시 :</em>국어 (송헌)</span>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet waiting">응시대기</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-07-07 ~ 2021-07-14</span>
                  <router-link to="/mkup/mylec/mock/stare/view" class="lgItem item2 tL">
                    <strong class="tit">제 15회 희소 모의고사 (온라인 응시, 2022학년도)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시기간</em>2021-07-07 ~ 2021-07-14</span>
                  <span class="lgItem item3 tL">
                    <span><em>1교시 :</em>교육학 (윤중샘)</span>
                    <span><em>2교시 :</em>국어 (송헌)</span>
                    <span><em>3교시 :</em>국어 (송헌)</span>
                  </span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iMockSet waiting">응시대기</em></span>
                  <span class="lgItem item1" v-if="!this.mobile">2021-07-07 ~ 2021-07-14</span>
                  <router-link to="/mkup/mylec/mock/stare/view" class="lgItem item2 tL">
                    <strong class="tit">제 15회 희소 모의고사 (온라인 응시, 2022학년도)</strong>
                  </router-link>
                  <span class="lgItem item1" v-if="this.mobile"><em class="mTit">응시기간</em>2021-07-07 ~ 2021-07-14</span>
                  <span class="lgItem item3 tL">
                    <span><em>1교시 :</em>교육학 (윤중샘)</span>
                    <span><em>2교시 :</em>국어 (송헌)</span>
                    <span><em>3교시 :</em>국어 (송헌)</span>
                  </span>
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

    <!-- 음성테스트 팝업 -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" class="voiceTestPopup">
      <template slot="modalheader">
        <div>
          <h1>시험 안내 방송 음성 테스트</h1>
          <button @click="popupTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <span class="iSet red">필독</span>
        <div>온라인 모의고사 응시 전 <strong>시험안내 방송이 잘 나오는지 확인해 보세요!</strong></div>
        <p>실제 시험과 유사한 시험안내방송이 나올 예정입니다. <br/>온라인 모의고사 응시 전 방송이 잘 나오는지 스피커를 켜주시고, 볼륨을 조절해주세요.</p>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL">음성 테스트 하기</button>
        </div>
      </template>
    </Popup>
    <!-- //음성테스트 팝업 -->
    <!-- 모의고사 접수 팝업 -->
    <Popup v-if='popupTrigger2' @close="popupTrigger2 = false" class="takeMockPopup">
      <template slot="modalheader">
        <div>
          <h1>2022년 상반기 희소 모의고사</h1>
          <button @click="popupTrigger2 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="boardWrite">
          <dl>
            <dt>유형</dt>
            <dd>
              <span class="radioSet">
                <input type="radio" name="radio1" id="rd1" checked />
                <label for="rd1"><i></i>현장 응시(채점)</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="radio1" id="rd2" />
                <label for="rd2"><i></i>온라인 응시(채점)</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="radio1" id="rd3" />
                <label for="rd3"><i></i>온라인 응시(자가채점)</label>
              </span>
            </dd>
          </dl>
          <dl>
            <dt>응시료</dt>
            <dd>
              <span class="price"><strong>25,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>분야</dt>
            <dd>
              <span class="selectSet">
                <select name="" id="">
                  <option>선택해주세요</option>
                  <option value="">유아</option>
                  <option value="">초등</option>
                  <option value="">중등</option>
                </select>
              </span>
            </dd>
          </dl>
          <dl>
            <dt>필수과목 (1교시)</dt>
            <dd>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">과목 선택</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">선생님 선택</option>
                </select>
              </span>
            </dd>
          </dl>
          <dl>
            <dt>전공과목 (2,3교시)</dt>
            <dd>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">과목 선택</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">선생님 선택</option>
                </select>
              </span>
            </dd>
          </dl>
        </div>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger3 = true">장바구니 추가</button>
          <button class="btnL" @click="popupTrigger4 = true">즉시결제</button>
        </div>
      </template>
    </Popup>
    <!-- //모의고사 접수 팝업 -->
    <!-- 장바구니 -->
    <Alert v-if='popupTrigger3' @close="popupTrigger3 = false">
      <template slot="modalbody">
         <div class="basicNoty"><p>선택한 상품을 장바구니에 추가하였습니다.</p></div>
      </template>
      <template slot="modalfooter">
        <button class="btnM line" @click="popupTrigger3 = false">장바구니로 이동</button>
        <button class="btnM" @click="popupTrigger3 = false">구매를 계속함</button>
      </template>
    </Alert>
    <!-- //장바구니 -->
    <!-- 즉시결제 -->
    <Alert v-if='popupTrigger4' @close="popupTrigger4 = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>즉시결제를 하시겠습니까?</p></div>
      </template>
      <template slot="modalfooter">
        <button class="btnM line" @click="popupTrigger4 = false">취소</button>
        <button class="btnM" @click="popupTrigger4 = false">확인</button>
      </template>
    </Alert>
    <!-- //즉시결제 -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MockApply',
  components: {
  },
  data() {
    return {
      popupTrigger:false,
      popupTrigger2:false,
      popupTrigger3:false,
      popupTrigger4:false,
    }
  },
  mounted() {
  },
}
</script>
