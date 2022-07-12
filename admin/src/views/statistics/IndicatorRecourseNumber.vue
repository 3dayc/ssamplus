<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="left">
        <div class="menuHelp">
          <ul>
            <li>ⓘ <strong>2021-03-05 ~ 현재</strong> 수강이 종료된 지 1년 이내인 전체 회원 수, 수강률 무관</li>
            <li>Ⓘ <strong>2019-05-15 ~ 2021-03-04</strong> 수강이 종료된 지 30일 이내, 수강률 50% 이하</li>
            <li>Ⓘ <strong>2019-01-01 ~ 2019-05-14</strong> 수강이 종료된 지 10일 이내, 수강률 30% 이하</li>
          </ul>
        </div>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem lineNone">
              <strong class="title">재수강일</strong><!-- 2021-08-02 캘린더 사용 컴포넌트 앞에 타이틀 추가 -->
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
    <div class="subTit">
      <h3>종합</h3>
    </div>
    <div class="tls">
      <table>
        <colgroup>
          <col width="60"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
        </colgroup>
        <thead class="duble">
          <tr>
            <th rowspan="2">구분</th>
            <th colspan="4"><em class="fBlue">2021년</em></th>
            <th colspan="4"><em class="fBlue">2020년</em></th>
            <th rowspan="2" class="bgRed">전년대비<br/>재수강 성장율<br/>(인원 기준)</th>
          </tr>
          <tr>
            <th>수강종료인원</th>
            <th>재수강 인원</th>
            <th>결제금액</th>
            <th>재수강율</th>
            <th>수강종료인원</th>
            <th>재수강 인원</th>
            <th>결제금액</th>
            <th>재수강율</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1월</td>
            <td class="tR">1,347</td>
            <td class="tR">25</td>
            <td class="tR">3,455,000</td>
            <td class="tR">6%</td>
            <td class="tR">1,299</td>
            <td class="tR">34</td>
            <td class="tR">5,475,000</td>
            <td class="tR">6%</td>
            <td class="tR">74%</td>
          </tr>
          <tr>
            <td>2월</td>
            <td class="tR">418</td>
            <td class="tR">20</td>
            <td class="tR">3,560,000</td>
            <td class="tR">11%</td>
            <td class="tR">426</td>
            <td class="tR">15</td>
            <td class="tR">1,830,000</td>
            <td class="tR">10%</td>
            <td class="tR">133%</td>
          </tr>
          <tr>
            <td>3월</td>
            <td class="tR">889</td>
            <td class="tR">70</td>
            <td class="tR">11,052,000</td>
            <td class="tR">8%</td>
            <td class="tR">2,194</td>
            <td class="tR">43</td>
            <td class="tR"> 6,175,000 </td>
            <td class="tR">14%</td>
            <td class="tR">163%</td>
          </tr>
          <tr>
            <td>4월</td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR">2,194</td>
            <td class="tR">43</td>
            <td class="tR">6,175,000</td>
            <td class="tR">14%</td>
            <td class="tR">0%</td>
          </tr>
          <tr>
            <td>5월</td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR">2,194</td>
            <td class="tR">43</td>
            <td class="tR">6,175,000</td>
            <td class="tR">14%</td>
            <td class="tR">0%</td>
          </tr>
          <tr>
            <td>6월</td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR">2,194</td>
            <td class="tR">43</td>
            <td class="tR">6,175,000</td>
            <td class="tR">14%</td>
            <td class="tR">0%</td>
          </tr>
          <tr>
            <td>7월</td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR">2,194</td>
            <td class="tR">43</td>
            <td class="tR">6,175,000</td>
            <td class="tR">14%</td>
            <td class="tR">0%</td>
          </tr>
          <tr>
            <td>8월</td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR">2,194</td>
            <td class="tR">43</td>
            <td class="tR">6,175,000</td>
            <td class="tR">14%</td>
            <td class="tR">0%</td>
          </tr>
          <tr>
            <td>9월</td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR">2,194</td>
            <td class="tR">43</td>
            <td class="tR">6,175,000</td>
            <td class="tR">14%</td>
            <td class="tR">0%</td>
          </tr>
          <tr>
            <td>10월</td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR">2,194</td>
            <td class="tR">43</td>
            <td class="tR">6,175,000</td>
            <td class="tR">14%</td>
            <td class="tR">0%</td>
          </tr>
          <tr>
            <td>11월</td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR">2,194</td>
            <td class="tR">43</td>
            <td class="tR">6,175,000</td>
            <td class="tR">14%</td>
            <td class="tR">0%</td>
          </tr>
          <tr>
            <td>12월</td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR">2,194</td>
            <td class="tR">43</td>
            <td class="tR">6,175,000</td>
            <td class="tR">14%</td>
            <td class="tR">0%</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td>합계</td>
            <td class="tR">2,654 </td>
            <td class="tR">115 </td>
            <td class="tR">18,067,000 </td>
            <td class="tR">18%</td>
            <td class="tR">26,908 </td>
            <td class="tR">1,184 </td>
            <td class="tR">199,571,000 </td>
            <td class="tR">18%</td>
            <td class="tR">10%</td>
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
  name: 'IndicatorRecourseNumber',
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
