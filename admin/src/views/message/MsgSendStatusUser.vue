<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>LMS 발송 현황 조회</h1><!-- 2021-09-02 타이틀 수정 -->
      <span class="supTxt">* 사용자 유입 LMS의 발송 현황을 확인합니다.</span>
    </div>
    <div class="winContent">
      <!-- 써머리 -->
      <div class="subStatusBox gridSet grid6-4">
        <div class="gridItem">
          <strong>메시지 발송 정보</strong>
          <ul class="half">
            <li><em>발송자 :</em> <span>김지연 (kty0408)</span></li>
            <li><em>발송 목적 :</em> <span>홍보용</span></li>
            <li><em>발송일시 :</em> <span>2021-02-14 (토) 17:30:23</span></li>
            <li><em class="wAuto">총 발송 건수 :</em> <button class="underline">100</button> 건</li>
          </ul>
        </div>
        <div class="gridItem">
          <strong>발송결과</strong>
          <ul class="half threeCase">
            <li><em>성공 :</em> <button class="underline">90</button> 건</li>
            <li><em>실패 :</em> <button class="underline">10</button> 건</li>
            <li><em>대기 :</em> <button class="underline">0</button> 건</li>
          </ul>
        </div>
      </div>
      <!-- //써머리 -->
      <div class="msgInfoBox">
        <div>
          <div class="listSummery">
            <div class="right">
              <dl>
                <dt></dt>
                <dd>총 <strong>100</strong>명</dd>
              </dl>
            </div>
          </div>
          <div class="tls subGreen">
      			<table>
      				<thead>
      					<tr>
      						<th scope="col">발송여부</th>
      						<th scope="col">회원번호</th>
      						<th scope="col">이름<br/>(아이디)</th>
      						<th scope="col">발송 url</th>
      						<th scope="col">url<br/>확인여부</th><!-- 2021-09-28 수정 -->
      					</tr>
      				</thead>
      				<tbody>
      					<!--Loop-->
      					<tr>
      						<td>실패</td>
                  <td>287965</td>
                  <td>김*수<br/>(k*****)</td>
                  <td>https://me2.do/FJHEp6N8</td>
                  <td>미확인</td>
      					</tr>
      					<!--//Loop-->
                <tr>
      						<td>실패</td>
                  <td>287965</td>
                  <td>김*수<br/>(k*****)</td>
                  <td>https://me2.do/FJHEp6N8</td>
                  <td>미확인</td>
      					</tr>
                <tr>
      						<td>실패</td>
                  <td>287965</td>
                  <td>김*수<br/>(k*****)</td>
                  <td>https://me2.do/FJHEp6N8</td>
                  <td>확인</td>
      					</tr>
                <tr>
      						<td>성공</td>
                  <td>287965</td>
                  <td>김*수<br/>(k*****)</td>
                  <td>https://me2.do/FJHEp6N8</td>
                  <td>미확인</td>
      					</tr>
                <tr>
      						<td>성공</td>
                  <td>287965</td>
                  <td>김*수<br/>(k*****)</td>
                  <td>https://me2.do/FJHEp6N8</td>
                  <td>확인</td>
      					</tr>
                <tr>
      						<td>성공</td>
                  <td>287965</td>
                  <td>김*수<br/>(k*****)</td>
                  <td>https://me2.do/FJHEp6N8</td>
                  <td>미확인</td>
      					</tr>
                <tr>
      						<td>성공</td>
                  <td>287965</td>
                  <td>김*수<br/>(k*****)</td>
                  <td>https://me2.do/FJHEp6N8</td>
                  <td>확인</td>
      					</tr>
                <tr>
      						<td>성공</td>
                  <td>287965</td>
                  <td>김*수<br/>(k*****)</td>
                  <td>https://me2.do/FJHEp6N8</td>
                  <td>미확인</td>
      					</tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
                <!-- //데이터 없을 경우 -->
      				</tbody>
      			</table>

      		</div>
        </div>
        <div>
          <div class="msgForm lmsCase"><!-- 2021-09-28 lms일 경우 클래스 추가 -->
            <div class="formTitle">
              <input type="text" placeholder="제목" value="[희소중국어팀]연간쌤팩 학습지원 이벤트" disabled><!-- LMS일 경우에만 input 추가 --><!-- 2021-09-02 disabled 상태 수정 -->
            </div>
            <div class="formCnts">
              <textarea disabled>
                [Web발신] 안녕하세요. 희소고시학원입니다. 연간쌤팩 할인에 50만원 추가 할인까지~ 할인쿠폰제공완료! 결재시 사용~  * 연간쌤팩 50만원 지원 이벤트 안내 - 345만 -> 2,837,000 -> 2.337.000 - 사용기간: 2/3~2/16(화)까지 사용 - 50만원 할인 쿠폰제공 - 직/인강 쌤팩 사용가능 문의 : 817-4041 무료수신거부 080-801-4041
              </textarea>
              <span class="cTxt">(<em>594</em>/2,000 Byte)</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MsgSendStatusUser',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
