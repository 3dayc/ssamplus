<template lang="html">
  <div>
    <div class="lecBasic">
      <div class="info">
        <span class="kind">
          <em class="iSbjSet">교육학</em>
        </span>
        <div class="lecTt">
          <em class="ssam"><em class="iSbjSetMini">교육학</em><span>김현</span> 선생님</em>
          <strong class="tt">교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용</strong>
          <span class="limitNtime">수강기간 40일 <em>2021-03-01 ~ 2021-03-31</em> <i class="lecTimes">1.4배수</i></span>
        </div>
      </div>
    </div>
    <h2>신청내역</h2>
    <div class="tableList">
      <dl>
        <dt>신청 가능 횟수</dt>
        <dd>1회 <span>(총 3회 중에서 2회를 이미 사용함)</span></dd>
      </dl>
      <dl>
        <dt>신청 가능 일수</dt>
        <dd>10일 <span>(총 30일 중에서 20일을 이미 사용함)</span></dd>
      </dl>
    </div>
    <!-- 반응형 목록 -->
    <div class="resTls holdingCase">
      <!-- listTitle -->
      <div class="thead listGrid">
        <span class="lgItem item0">회차</span>
        <span class="lgItem item1">신청일</span>
        <span class="lgItem item2">신청기간</span>
        <span class="lgItem item3">신청일수</span>
        <span class="lgItem item7">실행상태</span>
      </div>
      <!-- //listTitle -->
      <!-- //list -->
      <div class="tbody">
        <ul>
          <!--Loop-->
          <li class="listGrid">
            <span class="lgItem item0">1<em class="mTxt">회 신청</em></span>
            <span class="lgItem item1"><em class="mTit">신청일 : </em>2021-05-04</span>
            <span class="lgItem item2"><strong>2021-03-02</strong>  00:00:00  ~  <strong>2021-03-15</strong>  24:00:00</span>
            <span class="lgItem item3"><em class="mTit">신청일수 : </em>14</span>
            <span class="lgItem item7">
              <span class="fRed">실행중</span><button class="btnHoldingOff">홀딩해지</button>
            </span>
          </li>
          <!--//Loop-->
          <li class="listGrid">
            <span class="lgItem item0">2<em class="mTxt">회 신청</em></span>
            <span class="lgItem item1"><em class="mTit">신청일 : </em>2021-05-04</span>
            <span class="lgItem item2"><strong>2021-03-02</strong>  00:00:00  ~  <strong>2021-03-15</strong>  24:00:00</span>
            <span class="lgItem item3"><em class="mTit">신청일수 : </em>14</span>
            <span class="lgItem item7">
              <span>대기중</span><button class="btnAppCancel">신청취소</button>
            </span>
          </li>
        </ul>
      </div>
      <!-- //list -->
    </div>
    <!-- //반응형 목록 -->
    <h2>홀딩신청기간</h2>
    <div class="dateSetting">
      <div class="holdingCase">
        <dl class="term">
          <dt>신청기간</dt>
          <dd>
            <span class="calDupSet">
              <VCalendar class="calSet" v-model="date02" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                </template>
              </VCalendar>
              <em>~</em>
              <VCalendar class="calSet" v-model="date03" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                </template>
              </VCalendar>
            </span>
            <i>24:00:00</i>
            <strong>0</strong>일간
          </dd>
          <dd class="info">
            ※1. 당일부터 홀딩 신청을 할 수 없습니다.<br/>
            ※2. 홀딩기간 중에는 강좌 수강을 할 수 없습니다.
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PopupReAddHolding',
  components: {
  },
  data() {
    return {
      date02: '',
      date03: '',
      date04: '',
      date05: '',
    }
  },
  mounted() {
  },
}
</script>
