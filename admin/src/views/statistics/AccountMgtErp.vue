<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="left-po">
        <div class="menuHelp">
          <ul>
            <li>ⓘ ERP 시작-종료일을 검색하여 ERP 데이터를 엑셀 파일로 산출하는 화면입니다.</li>
          </ul>
        </div>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem lineNone">
              <strong class="title">ERP 기간</strong>
              <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                <template v-slot="{ inputValue, inputEvents, togglePopover, isDragging }">
                  <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.start" v-on="inputEvents.start" @click="togglePopover()" placeholder="시작일 선택"/>
                  <em>~</em>
                  <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.end" v-on="inputEvents.end" @click="togglePopover()" placeholder="종료일 선택"/>
                </template>
              </Vcalendar>
            </span>
            <span class="lsItem">
              <button class="btnSearch">검색</button>
            </span>
          </div>
          <div>
            <button class="btnRefresh">초기화</button>
          </div>
        </div>
      </div>
    </div>
    <!-- //검색 -->
    <!-- 쌤플러스 ERP -->
    <div class="subTit">
      <h3>쌤플러스 ERP</h3>
    </div>
    <div class="erpList">
      <ul>
        <li>
          <a href="#" class="btnT line mr10" download>[STEP 1-1] 단과 ERP 선수금 등록</a>
          <a href="#" class="btnT line mr10" download>[STEP 1-2] 단과 ERP 선수금 시작일 종료일 업데이트</a>
          <a href="#" class="btnT line mr10" download>[STEP 1-3] 단과 ERP 안분</a>
        </li>
        <li>
          <a href="#" class="btnT line mr10" download>[STEP 2-1] 단과 환불 ERP 선수금 등록</a>
          <a href="#" class="btnT line mr10" download>[STEP 2-2] 단과 환불 ERP 선수금 시작일 종료일 업데이트</a>
          <a href="#" class="btnT line mr10" download>[STEP 1-3] 단과 ERP 안분</a>
        </li>
        <li>
          <a href="#" class="btnT line mr10" download>[STEP 3-1] 패키지 ERP 선수금 등록</a>
          <a href="#" class="btnT line mr10" download>[STEP 3-2] 패키지 ERP 안분</a>
        </li>
        <li>
          <a href="#" class="btnT line mr10" download>[STEP 4-1] 패키지 환불 ERP 선수금 등록</a>
          <a href="#" class="btnT line mr10" download>[STEP 4-2] 패키지 환불 ERP 안분</a>
        </li>
        <li>
          <a href="#" class="btnT line mr10" download>[STEP 5-1] 사물함 ERP 선수금 등록</a>
          <a href="#" class="btnT line mr10" download>[STEP 3-2] 사물함 ERP 안분</a>
        </li>
        <li>
          <a href="#" class="btnT line mr10" download>[STEP 6-1] 사물함 환불 ERP 선수금 등록</a>
          <a href="#" class="btnT line mr10" download>[STEP 6-2] 사물함 환불 ERP 안분</a>
        </li>
        <li>
          <a href="#" class="btnT line mr10" download>[STEP 7-1] 기간/시간연장 ERP 결제금액 등록</a>
          <a href="#" class="btnT line mr10" download>[STEP 7-2] 기간/시간연장 환불 ERP 금액 등록</a>
        </li>
        <li>
          <a href="#" class="btnT line mr10" download>[STEP 8-1] 유료보강 ERP 결제금액 등록</a>
          <a href="#" class="btnT line mr10" download>[STEP 8-2] 유료보강 환불 ERP 금액 등록</a>
        </li>
        <li>
          <a href="#" class="btnT line mr10" download>[STEP 9-1] 수강기기 ERP 결제금액 등록</a>
          <a href="#" class="btnT line mr10" download>[STEP 9-2] 수강기기 환불 ERP 금액 등록</a>
        </li>
        <li>
          <a href="#" class="btnT line mr10" download>[STEP 10-1] 잡수익 ERP 결제금액 등록</a>
          <a href="#" class="btnT line mr10" download>[STEP 10-2] 잡수익 환불 ERP 금액 등록</a>
        </li>
      </ul>
    </div>
    <!-- //쌤플러스 ERP -->
    <!-- 교재 ERP -->
    <div class="subTit">
      <h3>교재 ERP</h3>
    </div>
    <div class="erpList">
      <ul>
        <li>
          <a href="#" class="btnT line mr10" download>[STEP 1] 교재 header 결제완료 목록</a>
          <a href="#" class="btnT line mr10" download>[STEP 2] 교재 header 환불 목록</a>
          <a href="#" class="btnT line mr10" download>[STEP 3] 교재 디테일 등록</a>
          <a href="#" class="btnT line mr10" download>[STEP 4] 교재 디테일 환불내역 등록</a>
        </li>
      </ul>
    </div>
    <!-- //교재 ERP -->
    <!-- 데이터 검증 -->
    <div class="subTit">
      <h3>데이터 검증</h3>
    </div>
    <div class="erpList">
      <ul>
        <li>
          <a href="#" class="btnT line mr10 w300" download>[STEP 1] 가격검증</a>
          <strong class="fBlue mr10">TRUE</strong>
          <span class="infoMsg fGreen">판매가 금액과 선수금+환불금 금액이 같다면 선수금에 대한 안분이 정상</span>
        </li>
        <li>
          <a href="#" class="btnT line mr10 w300" download>[STEP 2] 주문번호별 가격검증</a>
          <strong class="fRed mr10">FALSE</strong>
          <span class="infoMsg fGreen">주문번호 별 주문번호, 선수금 합계, 판매금 합계 조회 - 거래구분이 선수금, 매출인 데이터(환불 제외): 없다면 정상</span>
        </li>
        <li>
          <a href="#" class="btnT line mr10 w300" download>[STEP 3] 강의코드 누락된 데이터 검사</a>
          <strong class="fBlue mr10">TRUE</strong>
          <span class="infoMsg fGreen">강의 코드가 누락된 데이터 추출 : 없다면 정상</span>
        </li>
        <li>
          <a href="#" class="btnT line mr10 w300" download>[STEP 4] 카드사코드 누락된 데이터 검사</a>
          <strong class="fRed mr10">FALSE</strong>
          <span class="infoMsg fGreen">결제 수단이 카드이고, 카드사 코드가 없거나 잘못된 카드사 코드가 들어간 데이터 추출</span>
        </li>
        <li>
          <a href="#" class="btnT line mr10 w300" download>[STEP 5] 교재코드 누락된 데이터 검사</a>
          <strong class="fBlue mr10">TRUE</strong>
          <span class="infoMsg fGreen">없다면 정상</span>
        </li>
      </ul>
    </div>
    <!-- //데이터 검증 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'AccountMgtRaw',
  data() {
    return {
      range: {
				start: new Date(),
				end: new Date(),
			},
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
