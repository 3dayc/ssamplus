<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>LMS 재발송</h1>
      <span class="supTxt">* 사용자 유입 LMS를 재발송합니다.</span>
      <span class="btnArea">
        <button class="btnM green">재발송</button>
      </span>
    </div>
    <div class="winContent">
      <div class="subStatusBox gridSet grid6-4">
        <div class="gridItem">
          <strong>메시지 발송 정보</strong>
          <ul class="half">
            <li><em>발송자 :</em> <span>김지연 (kty0408)</span></li>
            <li><em>발송 목적 :</em> <span>홍보용</span></li>
            <li><em>발송일시 :</em> <span>2021-02-14 (토) 17:30:23</span></li>
            <li><em class="wAuto">총 발송 건수 :</em> <button>100</button> 건</li>
          </ul>
        </div>
        <div class="gridItem">
          <strong>발송결과</strong>
          <ul class="half threeCase">
            <li><em>성공 :</em> <button>90</button> 건</li>
            <li><em>실패 :</em> <button>10</button> 건</li>
            <li><em>대기 :</em> <button>0</button> 건</li>
          </ul>
        </div>
      </div>

      <div class="msgInfoBox">
        <div>
          <div class="listSummery">
            <div class="right">
              <dl>
                <dt></dt>
                <dd>총 <strong>1,240</strong>명</dd>
              </dl>
            </div>
          </div>
          <div class="tls subGreen">
            <colgroup>
              <col span="4">
              <col style="width:40px;">
            </colgroup>
      			<table>
      				<thead>
      					<tr>
                  <th scope="col">
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chkall">
                      <label for="chkall"><i></i></label>
                    </span>
                  </th>
      						<th scope="col">발송 결과</th>
      						<th scope="col">회원번호</th>
      						<th scope="col">이름 (아이디)</th>
      						<th scope="col">휴대전화 번호</th>
      					</tr>
      				</thead>
      				<tbody>
      					<!--Loop-->
      					<tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk5">
                      <label for="chk5"><i></i></label>
                    </span>
                  </td>
      						<td>실패</td>
                  <td>287473</td>
                  <td>김*수<br/>(k*****)</td>
                  <td>010-****-****</td>
      					</tr>
      					<!--//Loop-->
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk4">
                      <label for="chk4"><i></i></label>
                    </span>
                  </td>
      						<td>실패</td>
                  <td>287473</td>
                  <td>김*수<br/>(k*****)</td>
                  <td>010-****-****</td>
      					</tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
                <!-- //데이터 없을 경우 -->
      				</tbody>
      			</table>

      		</div>
        </div>
        <div>
          <div class="msgForm">
            <div class="formTitle">
              <input type="text" placeholder="제목" value="불법 녹화/녹음 탐지 안내">
            </div>
            <div class="formCnts">
              <textarea>23424234</textarea>
              <span class="cTxt">(<em>0</em>/80 Byte)</span>
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
  name: 'MsgLmsResend',
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
