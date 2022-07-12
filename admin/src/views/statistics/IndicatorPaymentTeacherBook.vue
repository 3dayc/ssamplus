<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="left">
        <div class="menuHelp">
          <ul>
            <li>ⓘ 강사별로 교재 결제 현황을 집계합니다</li>
            <li>Ⓘ 수량/금액을 비교하여 확인 가능합니다.</li>
          </ul>
        </div>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="typeSelect" @change="typeSelect()">
                  <option value="teacherTotal">강사별 종합</option>
                  <option value="teacherDetail">강사별 상세</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <strong class="title">결제일</strong><!-- 2021-08-02 캘린더 사용 컴포넌트 앞에 타이틀 추가 -->
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
    <!-- 강사별 종합 -->
    <div v-if="teacherTotal">
      <div class="tls tls2">
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
          </colgroup>
          <thead class="duble">
            <tr>
              <th rowspan="2">과목</th>
              <th rowspan="2">강사</th>
              <th colspan="5">판매수량</th>
              <th colspan="4">결제금액</th>
              <th></th>
            </tr>
            <tr>
              <th><em class="fBlue">2021년</em></th>
              <th><em class="fBlue">2020년</em></th>
              <th>전년대비(권)</th>
              <th>전년대비(%)</th>
              <th><em class="fBlue">2021년</em><br/>판매순위</th>
              <th><em class="fBlue">2021년</em></th>
              <th><em class="fBlue">2020년</em></th>
              <th>전년대비(원)</th>
              <th>전년대비(%)</th>
              <th><em class="fBlue">2021년</em><br/>판매순위</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>교육학</td>
              <td>김현</td>
              <td class="tR">30</td>
              <td class="tR">20</td>
              <td class="bgRed tR">10</td>
              <td class="bgRed tR">150%</td>
              <td class="bgRed tR">10</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="bgRed tR">10</td>
            </tr>
            <tr>
              <td>교육학</td>
              <td>권구현</td>
              <td class="tR">20</td>
              <td class="tR">30</td>
              <td class="bgRed tR fRed">(10)</td>
              <td class="bgRed tR">67%</td>
              <td class="bgRed tR">5</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="bgRed tR">200%</td>
              <td class="bgRed tR">5</td>
            </tr>
            <tr>
              <td>교육학</td>
              <td>김현</td>
              <td class="tR">30</td>
              <td class="tR">20</td>
              <td class="bgRed tR">10</td>
              <td class="bgRed tR">150%</td>
              <td class="bgRed tR">10</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="bgRed tR">10</td>
            </tr>
            <tr>
              <td>교육학</td>
              <td>권구현</td>
              <td class="tR">20</td>
              <td class="tR">30</td>
              <td class="bgRed tR fRed">(10)</td>
              <td class="bgRed tR">67%</td>
              <td class="bgRed tR">5</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="bgRed tR">200%</td>
              <td class="bgRed tR">5</td>
            </tr>
            <tr>
              <td>교육학</td>
              <td>김현</td>
              <td class="tR">30</td>
              <td class="tR">20</td>
              <td class="bgRed tR">10</td>
              <td class="bgRed tR">150%</td>
              <td class="bgRed tR">10</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="bgRed tR">10</td>
            </tr>
            <tr>
              <td>교육학</td>
              <td>권구현</td>
              <td class="tR">20</td>
              <td class="tR">30</td>
              <td class="bgRed tR fRed">(10)</td>
              <td class="bgRed tR">67%</td>
              <td class="bgRed tR">5</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="bgRed tR">200%</td>
              <td class="bgRed tR">5</td>
            </tr>
            <tr>
              <td>교육학</td>
              <td>김현</td>
              <td class="tR">30</td>
              <td class="tR">20</td>
              <td class="bgRed tR">10</td>
              <td class="bgRed tR">150%</td>
              <td class="bgRed tR">10</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="bgRed tR">10</td>
            </tr>
            <tr>
              <td>교육학</td>
              <td>권구현</td>
              <td class="tR">20</td>
              <td class="tR">30</td>
              <td class="bgRed tR fRed">(10)</td>
              <td class="bgRed tR">67%</td>
              <td class="bgRed tR">5</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="bgRed tR">200%</td>
              <td class="bgRed tR">5</td>
            </tr>
            <tr>
              <td>교육학</td>
              <td>김현</td>
              <td class="tR">30</td>
              <td class="tR">20</td>
              <td class="bgRed tR">10</td>
              <td class="bgRed tR">150%</td>
              <td class="bgRed tR">10</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="bgRed tR">10</td>
            </tr>
            <tr>
              <td>교육학</td>
              <td>권구현</td>
              <td class="tR">20</td>
              <td class="tR">30</td>
              <td class="bgRed tR fRed">(10)</td>
              <td class="bgRed tR">67%</td>
              <td class="bgRed tR">5</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="bgRed tR">200%</td>
              <td class="bgRed tR">5</td>
            </tr>
            <tr>
              <td>교육학</td>
              <td>김현</td>
              <td class="tR">30</td>
              <td class="tR">20</td>
              <td class="bgRed tR">10</td>
              <td class="bgRed tR">150%</td>
              <td class="bgRed tR">10</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="bgRed tR">10</td>
            </tr>
            <tr>
              <td>교육학</td>
              <td>권구현</td>
              <td class="tR">20</td>
              <td class="tR">30</td>
              <td class="bgRed tR fRed">(10)</td>
              <td class="bgRed tR">67%</td>
              <td class="bgRed tR">5</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="bgRed tR">200%</td>
              <td class="bgRed tR">5</td>
            </tr>
            <tr>
              <td>교육학</td>
              <td>김현</td>
              <td class="tR">30</td>
              <td class="tR">20</td>
              <td class="bgRed tR">10</td>
              <td class="bgRed tR">150%</td>
              <td class="bgRed tR">10</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="bgRed tR">10</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="emphasisBlack fBig">
              <td colspan="2">합계</td>
              <td class="tR">350</td>
              <td class="tR">350</td>
              <td class="bgRed tR fRed">0</td>
              <td class="bgRed tR fRed">100%</td>
              <td class="bgRed tR fRed">-</td>
              <td class="tR">500,000</td>
              <td class="tR">520,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">96%</td>
              <td class="bgRed tR">-</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <!-- //강사별 종합 -->
    <!-- 강사별 상세 -->
    <div v-if="teacherDetail">
      <div class="tls">
        <table>
          <colgroup>
            <col width="70"/>
            <col width="70"/>
            <col width="140"/>
            <col width="80"/>
            <col width="80"/>
            <col width="80"/>
            <col width="80"/>
            <col width="80"/>
            <col width="80"/>
            <col width="80"/>
            <col width="80"/>
            <col width="80"/>
          </colgroup>
          <thead class="duble">
            <tr>
              <th rowspan="2">강사</th>
              <th rowspan="2">교재번호</th>
              <th rowspan="2">교재명</th>
              <th colspan="5">판매수량</th>
              <th colspan="4">결제금액</th>
            </tr>
            <tr>
              <th><em class="fBlue">2021년</em></th>
              <th><em class="fBlue">2020년</em></th>
              <th>전년대비(권)</th>
              <th>전년대비(%)</th>
              <th><em class="fBlue">2021년</em><br/>판매순위</th>
              <th><em class="fBlue">2021년</em></th>
              <th><em class="fBlue">2020년</em></th>
              <th>전년대비(원)</th>
              <th>전년대비(%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3">김현</td>
              <td>12345</td>
              <td class="tL">2021 키위교육학</td>
              <td class="tR">30</td>
              <td class="tR">20</td>
              <td class="bgRed tR">10</td>
              <td class="bgRed tR">150%</td>
              <td class="bgRed tR">10</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
            <tr>
              <td>12345</td>
              <td class="tL">2021 키위교육학</td>
              <td class="tR">20</td>
              <td class="tR">30</td>
              <td class="bgRed tR fRed">(10)</td>
              <td class="bgRed tR">67%</td>
              <td class="bgRed tR">5</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="bgRed tR">200%</td>
            </tr>
            <tr>
              <td>12345</td>
              <td class="tL">2021 키위교육학</td>
              <td class="tR">30</td>
              <td class="tR">20</td>
              <td class="bgRed tR">10</td>
              <td class="bgRed tR">150%</td>
              <td class="bgRed tR">10</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
            <tr>
              <td rowspan="3">배지윤</td>
              <td>12345</td>
              <td class="tL">2021년 대비 전공가정 교육론</td>
              <td class="tR">20</td>
              <td class="tR">30</td>
              <td class="bgRed tR fRed">(10)</td>
              <td class="bgRed tR">67%</td>
              <td class="bgRed tR">5</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="bgRed tR">200%</td>
            </tr>
            <tr>
              <td>12345</td>
              <td class="tL">2021년 대비 전공가정 교육론</td>
              <td class="tR">30</td>
              <td class="tR">20</td>
              <td class="bgRed tR">10</td>
              <td class="bgRed tR">150%</td>
              <td class="bgRed tR">10</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
            <tr>
              <td>12345</td>
              <td class="tL">2021년 대비 전공가정 교육론</td>
              <td class="tR">20</td>
              <td class="tR">30</td>
              <td class="bgRed tR fRed">(10)</td>
              <td class="bgRed tR">67%</td>
              <td class="bgRed tR">5</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="bgRed tR">200%</td>
            </tr>
            <tr>
              <td rowspan="3">김준</td>
              <td>12345</td>
              <td class="tL">2021년 대비 전공가정 교육론</td>
              <td class="tR">30</td>
              <td class="tR">20</td>
              <td class="bgRed tR">10</td>
              <td class="bgRed tR">150%</td>
              <td class="bgRed tR">10</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
            <tr>
              <td>12345</td>
              <td class="tL">2021년 대비 전공가정 교육론</td>
              <td class="tR">20</td>
              <td class="tR">30</td>
              <td class="bgRed tR fRed">(10)</td>
              <td class="bgRed tR">67%</td>
              <td class="bgRed tR">5</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="bgRed tR">200%</td>
            </tr>
            <tr>
              <td>12345</td>
              <td class="tL">2021년 대비 전공가정 교육론</td>
              <td class="tR">30</td>
              <td class="tR">20</td>
              <td class="bgRed tR">10</td>
              <td class="bgRed tR">150%</td>
              <td class="bgRed tR">10</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
            <tr>
              <td rowspan="4">송헌</td>
              <td>12345</td>
              <td class="tL">2021년 대비 전공가정 교육론</td>
              <td class="tR">20</td>
              <td class="tR">30</td>
              <td class="bgRed tR fRed">(10)</td>
              <td class="bgRed tR">67%</td>
              <td class="bgRed tR">5</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="bgRed tR">200%</td>
            </tr>
            <tr>
              <td>12345</td>
              <td class="tL">2021년 대비 전공가정 교육론</td>
              <td class="tR">30</td>
              <td class="tR">20</td>
              <td class="bgRed tR">10</td>
              <td class="bgRed tR">150%</td>
              <td class="bgRed tR">10</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
            <tr>
              <td>12345</td>
              <td class="tL">2021년 대비 전공가정 교육론</td>
              <td class="tR">20</td>
              <td class="tR">30</td>
              <td class="bgRed tR fRed">(10)</td>
              <td class="bgRed tR">67%</td>
              <td class="bgRed tR">5</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="bgRed tR">200%</td>
            </tr>
            <tr>
              <td>12345</td>
              <td class="tL">2021년 대비 전공가정 교육론</td>
              <td class="tR">30</td>
              <td class="tR">20</td>
              <td class="bgRed tR">10</td>
              <td class="bgRed tR">150%</td>
              <td class="bgRed tR">10</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="emphasisBlack fBig">
              <td colspan="3">합계</td>
              <td class="tR">350</td>
              <td class="tR">350</td>
              <td class="bgRed tR fRed">0</td>
              <td class="bgRed tR fRed">100%</td>
              <td class="bgRed tR fRed">-</td>
              <td class="tR">500,000</td>
              <td class="tR">520,000</td>
              <td class="bgRed tR fRed">(20,000)</td>
              <td class="bgRed tR">96%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <!-- //강사별 상세 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IndicatorPaymentTeacherBook',
  data() {
    return {
      range: {
				start: new Date(),
				end: new Date(),
			},
      teacherTotal: true,
      teacherDetail: false,
    }
  },
  methods: {
    typeSelect() {
      var tgSelect = document.getElementById("typeSelect");
      var selectValue = tgSelect.options[tgSelect.selectedIndex].value;
      if(selectValue == "teacherTotal") {
        this.teacherTotal = true;
        this.teacherDetail = false;
      } else if(selectValue == "teacherDetail") {
        this.teacherTotal = false;
        this.teacherDetail = true;
      }
    }
  },
  components: {
  },
}
</script>
