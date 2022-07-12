<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="left">
        <div class="menuHelp">
          <ul>
            <li>ⓘ 누적현황조회를 선택 시, 해당년도 1월부터 검색한 달까지 누적된 현황을 집계합니다.<br/>(ex. 21년 5월 검색 시 ‘누적현황조회‘를 선택하면 21년 1~5월까지의 데이터를 집계함)</li>
          </ul>
        </div>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="">2021년</option>
                  <option value="">2020년</option>
                  <option value="">2019년</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="">전체</option>
                  <option value="">1월</option>
                  <option value="">2월</option>
                  <option value="">3월</option>
                  <option value="">4월</option>
                  <option value="">5월</option>
                  <option value="">6월</option>
                  <option value="">7월</option>
                  <option value="">8월</option>
                  <option value="">9월</option>
                  <option value="">10월</option>
                  <option value="">11월</option>
                  <option value="">12월</option>
                </select>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- //검색 -->
    <!-- 리스트 써머리 -->
    <div class="listSummery">
      <span class="left">
        <span class="checkSet">
          <input type="checkbox" id="" />
          <label for=""><i></i>누적 현황 조회</label>
        </span>
      </span>
    </div>
    <!-- //리스트 써머리 -->
    <div class="tls">
      <table>
        <colgroup>
          <col width="100"/>
          <col width="100"/>
          <col width="150"/>
          <col width="150"/>
          <col width="150"/>
          <col width="150"/>
          <col width="150"/>
        </colgroup>
        <thead class="duble">
          <tr>
            <th colspan="2">구분</th>
            <th colspan="2"><em class="fBlue">2021년</em></th>
            <th colspan="2"><em class="fBlue">2020년</em></th>
            <th rowspan="2" class="bgRed">전년대비<br/>(인원 기준)</th>
          </tr>
          <tr>
            <th>과목</th>
            <th>강사</th>
            <th>재수강 인원</th>
            <th>결제금액</th>
            <th>재수강 인원</th>
            <th>결제금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>교육학</td>
            <td>김현</td>
            <td>10</td>
            <td class="tR">1,800,000 </td>
            <td>10</td>
            <td class="tR">1,800,000 </td>
            <td>100%</td>
          </tr>
          <tr>
            <td>유아</td>
            <td>배지윤</td>
            <td>19</td>
            <td class="tR">              2,742,000  </td>
            <td>12</td>
            <td class="tR">          1,560,000 </td>
            <td>158%</td>
          </tr>
          <tr>
            <td>유아</td>
            <td>이동건</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>국어</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>국어</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>가정</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>음악</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>음악</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>미술</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>체육</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>체육</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>한문</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>일본어</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>화학</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>역사</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>지리</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>상담</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>특수</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
          <tr>
            <td>역사</td>
            <td>송헌</td>
            <td>9</td>
            <td class="tR">              1,620,000 </td>
            <td>1</td>
            <td class="tR">            175,000 </td>
            <td>900%</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td colspan="2">합계</td>
            <td>70</td>
            <td class="tR">            11,052,000 </td>
            <td>43</td>
            <td class="tR">          6,175,000 </td>
            <td>163%</td>
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
  name: 'IndicatorRecourseSubject',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
