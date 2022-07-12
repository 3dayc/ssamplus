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
    <div class="tls wHalf">
      <table>
        <colgroup>
          <col width="300"/>
          <col width="100"/>
          <col width="100"/>
        </colgroup>
        <thead>
          <tr>
            <th>강좌 제작년월</th>
            <th>재수강 신청인원</th>
            <th>비율</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="fBlue">2019년 9월</td>
            <td>1</td>
            <td>1%</td>
          </tr>
          <tr>
            <td class="fBlue">2020년 1~2월</td>
            <td>2</td>
            <td>3%</td>
          </tr>
          <tr>
            <td class="fBlue">2020년 1~3월</td>
            <td>1</td>
            <td>1%</td>
          </tr>
          <tr>
            <td class="fBlue">2020년 11~12월</td>
            <td>1</td>
            <td>1%</td>
          </tr>
          <tr>
            <td class="fBlue">2020년 4~5월</td>
            <td>1</td>
            <td>1%</td>
          </tr>
          <tr>
            <td class="fBlue">2020년 5~6월</td>
            <td>2</td>
            <td>3%</td>
          </tr>
          <tr>
            <td class="fBlue">2020년 6~8월</td>
            <td>1</td>
            <td>1%</td>
          </tr>
          <tr>
            <td class="fBlue">2020년 6월</td>
            <td>2</td>
            <td>3%</td>
          </tr>
          <tr>
            <td class="fBlue">2020년 7월</td>
            <td>2</td>
            <td>3%</td>
          </tr>
          <tr>
            <td class="fBlue">2020년 8월</td>
            <td>1</td>
            <td>1%</td>
          </tr>
          <tr>
            <td class="fBlue">2020년 9~11월</td>
            <td>2</td>
            <td>3%</td>
          </tr>
          <tr>
            <td class="fBlue">2021년 1~2월</td>
            <td>37</td>
            <td>53%</td>
          </tr>
          <tr>
            <td class="fBlue">2021년 1~3월</td>
            <td>9</td>
            <td>13%</td>
          </tr>
          <tr>
            <td class="fBlue">2021년 1월</td>
            <td>4</td>
            <td>6%</td>
          </tr>
          <tr>
            <td class="fBlue">2021년 2월</td>
            <td>4</td>
            <td>6%</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td>합계</td>
            <td>70</td>
            <td>100%</td>
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
  name: 'IndicatorRecourseProduct',
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
