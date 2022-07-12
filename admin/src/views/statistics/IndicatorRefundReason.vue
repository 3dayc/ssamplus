<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem lineNone">
              <strong class="title">환불일</strong><!-- 2021-08-02 캘린더 사용 컴포넌트 앞에 타이틀 추가 -->
              <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                <template v-slot="{ inputValue, inputEvents, togglePopover, isDragging }">
                  <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.start" v-on="inputEvents.start" @click="togglePopover()" placeholder="시작일 선택"/>
                  <em>~</em>
                  <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.end" v-on="inputEvents.end" @click="togglePopover()" placeholder="종료일 선택"/>
                </template>
              </Vcalendar>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option>과목</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option>선생님</option>
                </select>
              </span>
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
    <div class="tls wHalf">
      <table>
        <colgroup>
          <col width="150"/>
          <col width="500"/>
          <col width="150"/>
          <col width="150"/>
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th>환불사유</th>
            <th>환불건수</th>
            <th class="bgRed">비중(%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="7">강의수강불편</td>
            <td class="tL">강사/강의 내용 불편</td>
            <td class="tR">10</td>
            <td class="tR">6%</td>
          </tr>
          <tr>
            <td class="tL">수강료 불만</td>
            <td class="tR">20</td>
            <td class="tR">11%</td>
          </tr>
          <tr>
            <td class="tL">강의재생/화질/음질 불만</td>
            <td class="tR">10</td>
            <td class="tR">6%</td>
          </tr>
          <tr>
            <td class="tL">강의자료 인쇄 불만</td>
            <td class="tR">20</td>
            <td class="tR">11%</td>
          </tr>
          <tr>
            <td class="tL">폐강/시간표 변경</td>
            <td class="tR">10</td>
            <td class="tR">6%</td>
          </tr>
          <tr>
            <td class="tL">쌤플러스 다른 강사로 변경</td>
            <td class="tR">20</td>
            <td class="tR">11%</td>
          </tr>
          <tr>
            <td class="tL">타 학원 강의 수강</td>
            <td class="tR">20</td>
            <td class="tR">11%</td>
          </tr>
          <tr>
            <td rowspan="6">교재이용불편</td>
            <td class="tL">다른 경로로 교재 구매(다른 사이트 이용)</td>
            <td class="tR">10</td>
            <td class="tR">6%</td>
          </tr>
          <tr>
            <td class="tL">교재가격/배송비 불만</td>
            <td class="tR">20</td>
            <td class="tR">11%</td>
          </tr>
          <tr>
            <td class="tL">교재 내용 불만</td>
            <td class="tR">10</td>
            <td class="tR">6%</td>
          </tr>
          <tr>
            <td class="tL">교재 파본 및 품질 불만</td>
            <td class="tR">20</td>
            <td class="tR">11%</td>
          </tr>
          <tr>
            <td class="tL">교재 품절</td>
            <td class="tR">10</td>
            <td class="tR">6%</td>
          </tr>
          <tr>
            <td class="tL">배송 불만</td>
            <td class="tR">20</td>
            <td class="tR">11%</td>
          </tr>
          <tr>
            <td rowspan="5">변경/결제</td>
            <td class="tL">직강<->인강변경</td>
            <td class="tR">10</td>
            <td class="tR">6%</td>
          </tr>
          <tr>
            <td class="tL">할인,이벤트,쿠폰 적용 받기 위해</td>
            <td class="tR">20</td>
            <td class="tR">11%</td>
          </tr>
          <tr>
            <td class="tL">결제 방법 변경(할부, 결제방식 등)</td>
            <td class="tR">10</td>
            <td class="tR">6%</td>
          </tr>
          <tr>
            <td class="tL">강의/교재 잘못구매</td>
            <td class="tR">20</td>
            <td class="tR">11%</td>
          </tr>
          <tr>
            <td class="tL">중복결제</td>
            <td class="tR">10</td>
            <td class="tR">6%</td>
          </tr>
          <tr>
            <td>사이트</td>
            <td class="tL">사이트 이용 불만</td>
            <td class="tR">20</td>
            <td class="tR">11%</td>
          </tr>
          <tr>
            <td>상담</td>
            <td class="tL">상담 및 처리 불만</td>
            <td class="tR">10</td>
            <td class="tR">6%</td>
          </tr>
          <tr>
            <td rowspan="2">개인사정</td>
            <td class="tL">개인 학습계획/일정 변경</td>
            <td class="tR">20</td>
            <td class="tR">11%</td>
          </tr>
          <tr>
            <td class="tL">시험응시 계획 없음</td>
            <td class="tR">10</td>
            <td class="tR">6%</td>
          </tr>
          <tr>
            <td>기타</td>
            <td class="tL">기타</td>
            <td class="tR">20</td>
            <td class="tR">11%</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td></td>
            <td class="tL">합계</td>
            <td class="tR">360</td>
            <td class="tR">100%</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IndicatorRefundReason',
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
