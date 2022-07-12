<template lang="html">
    <div id="windowLayout">
      <div class="winHeader">
        <h1>출석기록</h1>
        <span class="supTxt">* 학원 수강생이 오프라인 직강 또는 라이브 강의에 출석한 기록</span>
        <div class="btnArea">
          <strong class="mr10">인쇄횟수 <em class="fBlue fBold">3</em>회</strong>
          <button class="btnPrint">수강증 인쇄</button>
        </div>
      </div>
      <div class="winContent">
        <!-- 써머리 -->
        <div class="subStatusBox gridSet grid6-4">
          <div class="gridItem">
            <strong>[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사 반 <em class="iSet yellow">제작중</em></strong>
            <ul>
              <li><em>수강기간 :</em> 2021-02-04 ~ 2021-03-15 (70일)</li>
              <li><em>시간제한 :</em> 1.4배수</li>
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
        <h3><strong>출석기록</strong></h3>
        <div class="tls record wHalf">
          <table>
            <colgroup>
              <col width="200"/>
              <col width="*"/>
            </colgroup>
            <thead>
              <tr>
                <th>직강 수업일</th>
                <th>출석일시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2021-02-01</td>
                <td>2021-02-01(금) 12:34:48</td>
              </tr>
              <tr>
                <td>2021-02-02</td>
                <td>미출석</td>
              </tr>
              <tr>
                <td>2021-02-03</td>
                <td>예정</td>
              </tr>
              <tr>
                <td>2021-02-04</td>
                <td>예정</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="2" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
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
  name: 'MemberAttendance',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
