<template lang="html">
  <div>
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="smartIndex">
          <div class="smartStep">
            <div class="frameBack">
              <button class="btnSRefresh" @click="currentTab = 0, smartLastNone()">새로고침</button>
              <ol>
                <li class="step01" :class="{on:currentTab===0, end:currentTab!=0}">
                  <strong @click="currentTab = 0, smartLastNone()">과목, 선생님</strong>
                </li>
                <li class="step02" :class="{on:currentTab===1, end:currentTab>1}">
                  <strong @click="currentTab = 1, smartLastNone()">강좌</strong>
                </li>
                <li class="step03" :class="{on:currentTab===2, end:currentTab>2}">
                  <strong @click="currentTab = 2, smartLastNone()">교재</strong>
                </li>
                <li class="step04" :class="{on:currentTab===3}">
                  <strong @click="currentTab = 3, smartLast()">수강신청</strong>
                </li>
              </ol>
            </div>
          </div>
          <div class="frameBack">
            <div v-if="currentTab == 0">
              <SmartSubjectM /><!--과목, 선생님-->
            </div>
            <div v-if="currentTab == 1">
              <SmartLectureM /><!--강좌-->
            </div>
            <div v-if="currentTab == 2">
              <SmartBook /><!--교재-->
            </div>
            <div v-if="currentTab == 3">
              <SmartApply /><!--수강신청-->
            </div>
          </div>
          <div class="smartFoot" v-if="currentTab == 0">
            <div class="frameBack">
              <button class="pageGo prev" disabled>이전</button>
              <button class="pageGo next" @click="currentTab = 1, smartLastNone()">다음</button>
            </div>
          </div>
          <div class="smartFoot" v-if="currentTab == 1">
            <div class="frameBack">
              <button class="pageGo prev" @click="currentTab = 0, smartLastNone()">이전</button>
              <button class="pageGo next" @click="currentTab = 2, smartLastNone()">다음</button>
            </div>
          </div>
          <div class="smartFoot" v-if="currentTab == 2">
            <div class="frameBack">
              <button class="pageGo prev" @click="currentTab = 1, smartLastNone()">이전</button>
              <button class="pageGo next" @click="currentTab = 3, smartLast()">다음</button>
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

    <!-- 장바구니 -->
    <Alert v-if='popupTrigger01' @close="popupTrigger01 = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>선택한 교재를 장바구니에 추가하였습니다.</p></div>
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
    <!-- 모바일용 결제내역 -->
    <div id="buyFloating" :class="{on:buyFloatingTrigger == true}" v-if="currentTab == 3">
      <div class="buyOpnerBack"><button class="buyOpner" @click="buyFloatingTrigger = !buyFloatingTrigger">여닫기</button></div>
      <!-- 데이터 영역 -->
      <div class="buyTemplate">
        <!-- 수강신청 목록-->
        <div class="buySet">
          <dl>
            <dt>수강료</dt>
            <dd>
              <span class="price"><del>2,568,000</del><strong>2,311,200<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>교재비</dt>
            <dd>
              <span class="price"><del>193,000</del><strong>173,700<i>원</i></strong></span>
            </dd>
          </dl>
          <dl class="delivery">
            <dt>배송비</dt>
            <dd>
              <span class="price"><strong>9,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl class="total">
            <dt>예상 결제 금액</dt>
            <dd>
              <span class="price"><del>2,770,000</del><strong>2,493,900<i>원</i></strong></span>
            </dd>
          </dl>
        </div>
        <!-- //수강신청 목록 -->
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
import SmartSubjectM from '@/views/smart/SmartSubjectM.vue';
import SmartLectureM from '@/views/smart/SmartLectureM.vue';
import SmartBook from '@/views/smart/SmartBook.vue';
import SmartApply from '@/views/smart/SmartApply.vue';
import SmartSubjectChoiced from '@/views/smart/SmartSubjectChoiced.vue';
import SmartLectureChoiced from '@/views/smart/SmartLectureChoiced.vue';
import SmartBookChoiced from '@/views/smart/SmartBookChoiced.vue';

export default {
  mixins: [Mixin],
  name: 'IndexM',
  components: {
    SmartSubjectM,
    SmartLectureM,
    SmartBook,
    SmartApply,
    SmartSubjectChoiced,
    SmartLectureChoiced,
    SmartBookChoiced
  },
  data() {
    return {
      currentTab: 0,
      buyFloatingTrigger:false,
      popupTrigger01:false,
      popupTrigger02:false
    }
  },
  methods: {
    smartLast(){
      document.querySelector("#mobileFooter").classList.add('buyCase');
    },
    smartLastNone(){
      document.querySelector("#mobileFooter").classList.remove('buyCase');
    }
  }
}
</script>
