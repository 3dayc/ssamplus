<template lang="html">
    <div id="windowLayout">
      <div class="winHeader">
        <h1>직강 자료실</h1>
        <span class="supTxt">* 직강 자료실의 인쇄 횟수를 관리함</span>
      </div>
      <div class="winContent">
        <!-- 써머리 -->
        <div class="subStatusBox gridSet grid6-4">
          <div class="gridItem">
            <strong>[21 1~2월] 장영희 과목중국어 실력강화반 – 이론</strong>
            <ul>
              <li><em class="wAtuo">구분 :</em> 이데아관 (직강)</li>
              <li><em class="wAtuo">개강~종강일 :</em> 2021-02-04 ~ 2021-03-15 (70일)</li>
            </ul>
          </div>
          <div class="gridItem">
            <strong class="tit">성명/아이디 : 김지민 / jimin0123</strong>
            <ul>
              <li><em>준비시험 :</em> 중등중국어</li>
              <li><em class="wAtuo">연락처 :</em> 010-1234-5678</li>
            </ul>
          </div>
        </div>
        <!-- //써머리 -->
        <h3>
          <strong>자료리스트</strong>
          <span class="right mt5">자료실 추가이용 가능기간<em class="ml5">2021-03-16 ~ 2021-03-30</em></span>
        </h3>
        <div class="tls subGreen">
          <table>
            <colgroup>
              <col width="60"/>
              <col width="120"/>
              <col width="160"/>
              <col width="*"/>
              <col width="90"/>
              <col width="100"/>
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>직강 수업일자</th>
                <th>자료제목</th>
                <th>자료상세</th>
                <th>인쇄 현황</th>
                <th>인쇄횟수 추가</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">2</td>
                <td rowspan="2">2021-02-10</td>
                <td rowspan="2">[0211] 강의자료</td>
                <td>2022학년도 대비_1,2월 서술식 대비_6회차</td>
                <td>2회 / 3회</td>
                <td><span class="unit"><input type="text" class="tC"><em>회</em></span></td>
              </tr>
              <tr>
                <td>2022학년도 대비_1,2월 논술 대비_5회차</td>
                <td>1회 / 3회</td>
                <td><span class="unit"><input type="text" class="tC"><em>회</em></span></td>
              </tr>
              <tr>
                <td>1</td>
                <td>2021-02-05</td>
                <td>강좌 full 교안</td>
                <td>80점 도약 모의고사반 강좌 교안</td>
                <td>3회 / 3회</td>
                <td><span class="unit"><input type="text" class="tC"><em>회</em></span></td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <div class="tR pt10">
          <button class="btnM">추가</button>
        </div>
        <!---->
        <h3><strong>관리</strong></h3>
        <div class="tvs record">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>수정 이력</th>
                <td>
                  <ul class="recordList">
                    <li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 수정</li>
                    <li><strong>[2021-02-23 15:35  / 홍길동 ]</strong> 등록</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!---->
  		</div>
    </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MemberReferenceroom',
  data() {
    return {
        calDate01: '',
        calDate02: '',
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
