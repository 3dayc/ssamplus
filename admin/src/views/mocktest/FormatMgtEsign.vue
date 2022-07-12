<template lang="html">
  <div>
    <!-- 전광판 순서 및 시간 -->
    <div class="subTit">
      <h3>전광판 순서 및 시간</h3>
    </div>
    <div class="tls">
      <table>
        <colgroup>
          <col width="200">
          <col width="300">
          <col width="300">
          <col width="900">
        </colgroup>
        <thead>
          <tr>
            <th>진행</th>
            <th>유아/유초특</th>
            <th>중등/중특</th>
            <th>전광판</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>유의사항</td>
            <td>입장 시</td>
            <td>입장 시</td>
            <td><input type="text" value="실제 시험과 유사하게 각 시간 별 실시간 시험 안내 방송이 나오고 있습니다. 스피커를 조절해 주세요."/></td>
          </tr>
          <tr>
            <td rowspan="2">1교시<br/>시험지 배포</td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="15"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="15"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="1교시 답안지를 준비 및 답안 작성 유의사항을 확인해 주시기 바랍니다."/></td>
          </tr>
          <tr>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="18"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="18"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="1교시 문제지를 준비해 주시기 바랍니다."/></td>
          </tr>
          <tr>
            <td rowspan="4">1교시</td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="25"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="25"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="1교시 시험을 시작하겠습니다."/></td>
          </tr>
          <tr>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="26"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="26"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="1교시 시험 응시 중입니다."/></td>
          </tr>
          <tr>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="75"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="75"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="시험 종료까지 10분 남았습니다."/></td>
          </tr>
          <tr>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="85"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="85"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="1교시 시험이 종료되었습니다. 답안 작성을 멈추시기 바랍니다. "/></td>
          </tr>
          <tr>
            <td>쉬는 시간</td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="86"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="86"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="쉬는 시간입니다. 용무를 마치고 2교시 시작 20분 전까지 입실하여 주시기 바랍니다."/></td>
          </tr>
          <tr>
            <td>2교시<br/>시험지 배포</td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="105"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="105"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="2교시 시험 시작 20분 전입니다. 2교시 답안지를 준비해 주시기 바랍니다."/></td>
          </tr>
          <tr>
            <td rowspan="5">2교시</td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="118"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="118"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="2교시 문제지를 준비해 주시기 바랍니다."/></td>
          </tr>
          <tr>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="125"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="125"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="2교시 시험을 시작하겠습니다."/></td>
          </tr>
          <tr>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="126"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="126"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="2교시 시험 응시 중입니다."/></td>
          </tr>
          <tr>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="185"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="205"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="시험 종료까지 10분 남았습니다."/></td>
          </tr>
          <tr>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="195"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" class="fRed" value="215"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="2교시 시험이 종료되었습니다. 답안 작성을 멈추시기 바랍니다."/></td>
          </tr>
          <tr>
            <td>쉬는 시간</td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="196"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="216"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="쉬는 시간입니다. 용무를 마치고 3교시 시작 20분 전까지 입실하여 주시기 바랍니다."/></td>
          </tr>
          <tr>
            <td rowspan="2">3교시<br/>시험지 배포</td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="215"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="235"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="3교시 시험 시작 20분 전입니다. 3교시 답안지를 준비해 주시기 바랍니다."/></td>
          </tr>
          <tr>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="228"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="248"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="3교시 문제지를 준비해 주시기 바랍니다."/></td>
          </tr>
          <tr>
            <td rowspan="4">3교시</td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="235"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="255"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="3교시 시험을 시작하겠습니다. "/></td>
          </tr>
          <tr>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="236"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="256"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="3교시 시험 응시 중입니다."/></td>
          </tr>
          <tr>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="295"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="335"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="시험 종료까지 10분 남았습니다."/></td>
          </tr>
          <tr>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="305"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="345"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="시험이 종료되었습니다. 답안 작성을 멈추시기 바랍니다."/></td>
          </tr>
          <tr>
            <td>마무리</td>
            <td>
              <span class="unit w100 mr5">
                <input class="fRed" type="text" value="306"><em>분</em>
              </span> 경과
            </td>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="346"><em>분</em>
              </span> 경과
            </td>
            <td><input type="text" value="희소 모의고사를 마치겠습니다. 수고하셨습니다."/></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //전광판 순서 및 시간 -->
    <!-- 관리 -->
		<div class="subTit"><h3>관리</h3></div>
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
								<li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 수정</li>
								<li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 등록</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //관리 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'FormatMgtEsign',
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

<style lang="css" scoped>
</style>
