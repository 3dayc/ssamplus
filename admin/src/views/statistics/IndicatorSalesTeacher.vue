<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem lineNone">
              <strong class="title">매출일</strong>
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
    <div class="tls">
      <table>
        <colgroup>
          <col width="80"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
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
        <thead>
          <tr>
            <th rowspan="2">과목</th>
            <th rowspan="2">선생님</th>
            <th colspan="4">학원(강좌)</th>
            <th colspan="4">온라인(강좌)</th>
            <th colspan="4">합계</th>
          </tr>
          <tr>
            <th><em class="fBlue">2021년</em></th>
            <th><em class="fBlue">2020년</em></th>
            <th>전년대비<br/>(원)</th>
            <th>전년대비<br/>(%)</th>
            <th><em class="fBlue">2021년</em></th>
            <th><em class="fBlue">2020년</em></th>
            <th>전년대비<br/>(원)</th>
            <th>전년대비<br/>(%)</th>
            <th><em class="fBlue">2021년</em></th>
            <th><em class="fBlue">2020년</em></th>
            <th>전년대비<br/>(원)</th>
            <th>전년대비<br/>(%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>교육학</td>
            <td>김현</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">20,000</td>
            <td class="tR">40,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
          </tr>
          <tr>
            <td>교육학</td>
            <td>권구현</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">40,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
          </tr>
          <tr>
            <td>교육학</td>
            <td>윤중샘</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">20,000</td>
            <td class="tR">40,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
          </tr>
          <tr>
            <td>유아</td>
            <td>배지윤</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">40,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
          </tr>
          <tr>
            <td>유아</td>
            <td>유아콜라보</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">20,000</td>
            <td class="tR">40,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
          </tr>
          <tr>
            <td>유아</td>
            <td>양재웅</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">40,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
          </tr>
          <tr>
            <td>국어</td>
            <td>박노송</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">20,000</td>
            <td class="tR">40,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
          </tr>
          <tr>
            <td>국어</td>
            <td>송헌</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">40,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
          </tr>
          <tr>
            <td>국어</td>
            <td>송헌/김준팀</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">20,000</td>
            <td class="tR">40,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
          </tr>
          <tr>
            <td>영어</td>
            <td>류지원</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">40,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
          </tr>
          <tr>
            <td>영어</td>
            <td>미쉘김</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">20,000</td>
            <td class="tR">40,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
          </tr>
          <tr>
            <td>영어</td>
            <td>차류쉘팀</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">40,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
          </tr>
          <tr>
            <td>영어</td>
            <td>차미아</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">20,000</td>
            <td class="tR">40,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
          </tr>
          <tr>
            <td>가정</td>
            <td>문영은</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">40,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
          </tr>
          <tr>
            <td>음악</td>
            <td>박서형</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">20,000</td>
            <td class="tR">40,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
          </tr>
          <tr>
            <td>음악</td>
            <td>서민정</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">20,000</td>
            <td class="tR">10,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
            <td class="tR">40,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed tR">10,000</td>
            <td class="bgRed tR">200%</td>
          </tr>
          <tr>
            <td>음악</td>
            <td>서정팀</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">10,000</td>
            <td class="tR">20,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
            <td class="tR">20,000</td>
            <td class="tR">40,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed fRed tR">50%</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td colspan="2">합계</td>
            <td class="tR">250,000</td>
            <td class="tR">260,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed tR">96%%</td>
            <td class="tR">250,000</td>
            <td class="tR">260,000</td>
            <td class="bgRed fRed tR">(10,000)</td>
            <td class="bgRed tR">96%</td>
            <td class="tR">500,000</td>
            <td class="tR">520,000</td>
            <td class="bgRed fRed tR">(20,000)</td>
            <td class="bgRed tR">96%</td>
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
  name: 'IndicatorSalesTeacher',
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
