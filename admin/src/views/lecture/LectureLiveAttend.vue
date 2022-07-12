<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>출석현황 보기</h1>
      <span class="supTxt">* 라이브강좌의 출석현황을 확인할 수 있습니다.</span>
    </div>
    <div class="winContent">
      <!-- 출석통계 -->
      <div class="subTit cpRight">
        <h2>출석통계</h2>
        <span class="right">
          <span class="grayBgBox fGreen">MD-2104-001<em class="ml10">장영희 / 전공중국어 – 80점 도약모의고사반</em></span>
        </span>
      </div>
      <div class="tls subGreen mt10">
        <table>
          <colgroup>
            <col width="100"/>
            <col width="100"/>
            <col width="100"/>
            <col width="80"/>
          </colgroup>
          <thead>
            <tr>
              <th>날짜</th>
              <th>출석 현황</th>
              <th>수강인원</th>
              <th>출석율</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2021-01-16</td>
              <td>85</td>
              <td>170</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>2021-01-09</td>
              <td>85</td>
              <td>170</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>2021-01-02</td>
              <td>17</td>
              <td>170</td>
              <td>10%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //출석통계 -->
      <!-- 날짜별 출석 현황 -->
      <div class="subTit">
        <h2>날짜별 출석 현황</h2>
        <VCalendar class="calSet ml10" v-model="date" color="green">
          <template v-slot="{ inputValue, togglePopover }">
            <input :value="inputValue" @click="togglePopover()" readonly/>
          </template>
        </VCalendar>
        <span class="right">
          <button class="btnM black">출석확인</button>
        </span>
      </div>
      <div class="tls subGreen mt10">
        <table>
          <colgroup>
            <col width="80"/>
            <col width="100"/>
            <col width="*"/>
            <col width="80"/>
          </colgroup>
          <thead>
            <tr>
              <th>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chkall">
                  <label for="chkall"><i></i></label>
                </span>
              </th>
              <th>회원번호</th>
              <th>이름/아이디</th>
              <th>출석여부</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk1">
                  <label for="chk1"><i></i></label>
                </span>
              </td>
              <td>300815</td>
              <td>김*민<br/>(jim******)</td>
              <td>확인</td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk1">
                  <label for="chk1"><i></i></label>
                </span>
              </td>
              <td>300815</td>
              <td>김*민<br/>(jim******)</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk1">
                  <label for="chk1"><i></i></label>
                </span>
              </td>
              <td>300815</td>
              <td>김*민<br/>(jim******)</td>
              <td>확인</td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk1">
                  <label for="chk1"><i></i></label>
                </span>
              </td>
              <td>300815</td>
              <td>김*민<br/>(jim******)</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk1">
                  <label for="chk1"><i></i></label>
                </span>
              </td>
              <td>300815</td>
              <td>김*민<br/>(jim******)</td>
              <td>확인</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //날짜별 출석 현황 -->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LectureLiveAttend',
  data() {
    return {
      date: '2021-01-01',
    }
  },
  components: {
  }
}
</script>
