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
        <dd>5일 <span>(총 15일 중에서 10일을 이미 사용함)</span></dd>
      </dl>
    </div>
    <!-- 반응형 목록 -->
    <div class="resTls requestCase">
      <!-- listTitle -->
      <div class="thead listGrid">
        <span class="lgItem item0">회차</span>
        <span class="lgItem item1">신청일</span>
        <span class="lgItem item2">신청기간</span>
        <span class="lgItem item3">신청일수</span>
        <div class="lgItem itemGroup">
          <div class="lgSubGrid">
            <span class="lgItem item4">결제금액</span>
            <span class="lgItem item5">결제방법</span>
            <span class="lgItem item6">결제확인</span>
          </div>
        </div>
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
            <div class="lgItem itemGroup">
              <div class="lgSubGrid">
                <span class="lgItem item4"><em class="mTit">결제금액 : </em><span>8,000</span>원</span>
                <span class="lgItem item5"><em class="mTit">결제방법 : </em>신용카드</span>
                <span class="lgItem item6"><em class="mTxt">(</em>확인완료<em class="mTxt">)</em></span>
              </div>
            </div>
            <span class="lgItem item7">
              <span class="fRed">실행됨</span>
            </span>
          </li>
          <!--//Loop-->
          <li class="listGrid">
            <span class="lgItem item0">2<em class="mTxt">회 신청</em></span>
            <span class="lgItem item1"><em class="mTit">신청일 : </em>2021-05-04</span>
            <span class="lgItem item2"><strong>2021-03-02</strong>  00:00:00  ~  <strong>2021-03-15</strong>  24:00:00</span>
            <span class="lgItem item3"><em class="mTit">신청일수 : </em>14</span>
            <div class="lgItem itemGroup">
              <div class="lgSubGrid">
                <span class="lgItem item4"><em class="mTit">결제금액 : </em><span>7,000</span>원</span>
                <span class="lgItem item5"><em class="mTit">결제방법 : </em>은행송금</span>
                <span class="lgItem item6"><em class="mTxt">(</em>확인 중<em class="mTxt">)</em></span>
              </div>
            </div>
            <span class="lgItem item7">
              <span>대기중</span><button class="btnAppCancel">신청취소</button>
            </span>
          </li>
        </ul>
      </div>
      <!-- //list -->
    </div>
    <!-- //반응형 목록 -->
    <h2>기간연장신청</h2>
    <div class="dateSetting">
      <div>
        <dl class="term">
          <dt>신청기간</dt>
          <dd>
            <span class="calDupSet">
              <VCalendar class="calSet" v-model="date04" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                </template>
              </VCalendar>
              <em>~</em>
              <VCalendar class="calSet" v-model="date05" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                </template>
              </VCalendar>
            </span>
            <i>24:00:00</i>
            <!-- <input type="text" class="forDay" />일간 -->
            <strong>0</strong>일간
          </dd>
        </dl>
        <dl>
          <dt>결제방법</dt>
          <dd>
            <span class="selectSet">
              <select name="" id="">
                <option>선택</option>
                <option value="">신용카드</option>
                <option value="">은행송금</option>
              </select>
            </span>
          </dd>
        </dl>
      </div>
      <dl class="priceSet">
        <dt>결제금액</dt>
        <!-- <dd><strong>7,900<i>원</i></strong> <em>1,570</em>원 × <em>5</em>일간 = <em>7,850</em>원 (10일단위 반올림)</dd> -->
        <dd><strong>7,900<i>원</i></strong></dd>
      </dl>
      <p class="info">
        ※ 연장기간은 일단위로 정산됩니다. 즉, 23시에 신청할 경우 1시간 후에 하루가 차감됩니다.<br/>
        ※ 강좌 종료일 7일전, 종료 후 15일 이내에 신청이 가능합니다.<br/>
        ※ 쌤팩으로 결제된 강좌라면 총 7일간의 무료 연장을 제공합니다.
      </p>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PopupReAddRequest',
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
