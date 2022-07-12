<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>수강 기록</h1>
      <span class="supTxt">* 선택한 회원의 수강기록을 표시함</span>
    </div>
    <div class="MemberLogIpHistory">
      <div class="winContent">
        <!-- 회원 정보 -->
        <h3><strong>회원 정보</strong></h3>
        <div class="tvs">
    			<table>
            <colgroup>
              <col width="160"/>
              <col width="500"/>
              <col width="160"/>
              <col width="500"/>
            </colgroup>
    				<tbody>
    					<tr>
    						<th>이름</th>
                <td>김지민</td>
                <th>회원번호</th>
                <td>361145</td>
    					</tr>
              <tr>
    						<th>아이디</th>
                <td>jimin01234</td>
                <th>휴대폰번호</th>
                <td>010-1234-1234</td>
    					</tr>
              <tr>
    						<th>준비시험</th>
                <td>전공중국어</td>
                <th>중복 재생 횟수<br/>(유효/취소)</th>
                <td>1회/0회</td>
    					</tr>
    				</tbody>
    			</table>
    		</div>
        <!-- //회원 정보 -->
        <!-- 수강 기록 -->
        <h3 class="mt10">
          <strong>수강 기록</strong>
          <span class="right">
            <!-- <span class="checkSet mg0">
              <input type="checkbox" id="one" checked/>
              <label for="one"><i></i>IP, 맥어드레스 조회</label>
            </span> -->
          </span>
        </h3>
        <div class="tls subGreen"><!-- 2021-09-28 클래스 추가 -->
    			<table>
            <colgroup>
              <col width="180"/>
              <col width="10"/>
              <!-- <col width="70"/> -->
              <col width="90"/>
              <col width="80"/>
              <col width="80"/>
              <col width="80"/>
            </colgroup>
            <thead>
              <tr>
                <th>강좌명</th><!-- 2021-09-28 수정 -->
                <th>강의<br/>회차</th>
                <th>접속 IP</th>
                <!-- <th>수강 맥어드레스</th> -->
                <th>입실시간</th><!-- 2021-09-28 수정 -->
                <th>퇴실시간</th><!-- 2021-09-28 수정 -->
                <th>수강현황</th>
              </tr>
            </thead>
    				<tbody>
              <tr>
                <td class="textInher">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
    						<td>2강</td>
                <!-- <td>1.214.204.138</td> -->
                <td>54-05-DB-E2-89-62</td>
    						<td>2021-02-05(금)<br/>22:32:48</td>
    						<td>2021-02-05(금)<br/>32:34:48</td>
                <td>
                  수강: <em class="fBlue">10분 02초</em><br/>
                  잔여: <em class="fBlue">29분 10초</em>
                </td>
    					</tr>
              <tr>
                <td class="textInher">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
    						<td>2강</td>
                <!-- <td>1.214.204.138</td> -->
                <td>54-05-DB-E2-89-62</td>
    						<td>2021-02-05(금)<br/>22:32:48</td>
    						<td>2021-02-05(금)<br/>32:34:48</td>
                <td>
                  수강: <em class="fBlue">10분 02초</em><br/>
                  잔여: <em class="fBlue">29분 10초</em>
                </td>
    					</tr>
              <tr>
                <td class="textInher">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
    						<td>2강</td>
                <!-- <td>1.214.204.138</td> -->
                <td>54-05-DB-E2-89-62</td>
    						<td>2021-02-05(금)<br/>22:32:48</td>
    						<td>2021-02-05(금)<br/>32:34:48</td>
                <td>
                  수강: <em class="fBlue">10분 02초</em><br/>
                  잔여: <em class="fBlue">29분 10초</em>
                </td>
    					</tr>
              <tr>
                <td class="textInher">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
    						<td>2강</td>
                <!-- <td>1.214.204.138</td> -->
                <td>54-05-DB-E2-89-62</td>
    						<td>2021-02-05(금)<br/>22:32:48</td>
    						<td>2021-02-05(금)<br/>32:34:48</td>
                <td>
                  수강: <em class="fBlue">10분 02초</em><br/>
                  잔여: <em class="fBlue">29분 10초</em>
                </td>
    					</tr>
              <tr>
                <td class="textInher">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
    						<td>2강</td>
                <!-- <td>1.214.204.138</td> -->
                <td>54-05-DB-E2-89-62</td>
    						<td>2021-02-05(금)<br/>22:32:48</td>
    						<td>2021-02-05(금)<br/>32:34:48</td>
                <td>
                  수강: <em class="fBlue">10분 02초</em><br/>
                  잔여: <em class="fBlue">29분 10초</em>
                </td>
    					</tr>
              <tr>
                <td class="textInher">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
    						<td>2강</td>
                <!-- <td>1.214.204.138</td> -->
                <td>54-05-DB-E2-89-62</td>
    						<td>2021-02-05(금)<br/>22:32:48</td>
    						<td>2021-02-05(금)<br/>32:34:48</td>
                <td>
                  수강: <em class="fBlue">10분 02초</em><br/>
                  잔여: <em class="fBlue">29분 10초</em>
                </td>
    					</tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
    				</tbody>
    			</table>
    		</div>
        <!-- //수강 기록 -->
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MemberLogIpHistory',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
