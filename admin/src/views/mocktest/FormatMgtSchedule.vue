<template lang="html">
  <div>
    <!-- 실제 교시 별 시간 -->
    <div class="subTit">
      <h3>실제 교시 별 시간</h3>
    </div>
    <div class="formBox">
      <dl>
        <dt>- 유아/유초특 시작 시간 <sup>필수</sup> :</dt>
        <dd>
          <input type="text" class="w70 tC" value="08:35"/>
        </dd>
      </dl>
      <dl>
        <dt>- 중등/중특 시작 시간 <sup>필수</sup> :</dt>
        <dd>
          <input type="text" class="w70 tC" value="08:35"/>
        </dd>
      </dl>
    </div>
    <div class="tls mt20">
      <table>
        <colgroup>
          <col width="100">
          <col width="60">
          <col width="60">
          <col width="60">
          <col width="60">
          <col width="60">
          <col width="60">
          <col width="300">
        </colgroup>
        <thead class="duble">
          <tr>
            <th rowspan="2">진행</th>
            <th colspan="3">유아/유초특</th>
            <th colspan="3">중등/중특</th>
            <th rowspan="2">메모</th>
          </tr>
          <tr>
            <th class="backWhite">진행시간</th>
            <th class="backWhite">시작시간</th>
            <th class="backWhite">종료시간</th>
            <th class="backWhite">진행시간</th>
            <th class="backWhite">시작시간</th>
            <th class="backWhite">종료시간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>유의사항</td>
            <td>
              <span class="unit w100">
                <input type="text" value="18"><em>분</em>
              </span>
            </td>
            <td>08 : 35</td>
            <td>08 : 53</td>
            <td>
              <span class="unit w100">
                <input type="text" value="18"><em>분</em>
              </span>
            </td>
            <td>08 : 35</td>
            <td>08 : 53</td>
            <td><input type="text" value="시험장 입실을 완료해 주세요"/></td>
          </tr>
          <tr>
            <td>1교시 시험지 배포</td>
            <td>
              <span class="unit w100">
                <input type="text" value="7"><em>분</em>
              </span>
            </td>
            <td>08 : 53</td>
            <td>09 : 00</td>
            <td>
              <span class="unit w100">
                <input type="text" value="7"><em>분</em>
              </span>
            </td>
            <td>08 : 53</td>
            <td>09 : 00</td>
            <td><input type="text" value="문제지를 준비해 주세요"/></td>
          </tr>
          <tr class="red">
            <td>1교시</td>
            <td>
              <span class="unit w100">
                <input type="text" value="60"><em>분</em>
              </span>
            </td>
            <td>09 : 00</td>
            <td>10 : 00</td>
            <td>
              <span class="unit w100">
                <input type="text" value="60"><em>분</em>
              </span>
            </td>
            <td>09 : 00</td>
            <td>10 : 00</td>
            <td><input type="text" value="-"/></td>
          </tr>
          <tr>
            <td>쉬는 시간</td>
            <td>
              <span class="unit w100">
                <input type="text" value="33"><em>분</em>
              </span>
            </td>
            <td>10 : 00</td>
            <td>10 : 33</td>
            <td>
              <span class="unit w100">
                <input type="text" value="33"><em>분</em>
              </span>
            </td>
            <td>10 : 00</td>
            <td>10 : 33</td>
            <td><input type="text" value="시험 시작 20분 전까지 입실해 주세요"/></td>
          </tr>
          <tr>
            <td>2교시 시험지 배포</td>
            <td>
              <span class="unit w100">
                <input type="text" value="7"><em>분</em>
              </span>
            </td>
            <td>10 : 33</td>
            <td>10 : 40</td>
            <td>
              <span class="unit w100">
                <input type="text" value="7"><em>분</em>
              </span>
            </td>
            <td>10 : 33</td>
            <td>10 : 40</td>
            <td><input type="text" value="문제지를 준비해 주세요"/></td>
          </tr>
          <tr class="red">
            <td>2교시</td>
            <td>
              <span class="unit w100">
                <input type="text" value="70"><em>분</em>
              </span>
            </td>
            <td>10 : 40</td>
            <td>11 : 50</td>
            <td>
              <span class="unit w100">
                <input type="text" value="70"><em>분</em>
              </span>
            </td>
            <td>10 : 40</td>
            <td>11 : 50</td>
            <td><input type="text" value="-"/></td>
          </tr>
          <tr>
            <td>쉬는 시간</td>
            <td>
              <span class="unit w100">
                <input type="text" value="33"><em>분</em>
              </span>
            </td>
            <td>11 : 50</td>
            <td>12 : 23</td>
            <td>
              <span class="unit w100">
                <input type="text" value="33"><em>분</em>
              </span>
            </td>
            <td>11 : 50</td>
            <td>12 : 23</td>
            <td><input type="text" value="시험 시작 20분 전까지 입실해 주세요"/></td>
          </tr>
          <tr>
            <td>3교시 시험지 배포</td>
            <td>
              <span class="unit w100">
                <input type="text" value="7"><em>분</em>
              </span>
            </td>
            <td>12 : 23</td>
            <td>12 : 30</td>
            <td>
              <span class="unit w100">
                <input type="text" value="7"><em>분</em>
              </span>
            </td>
            <td>12 : 23</td>
            <td>12 : 30</td>
            <td><input type="text" value="문제지를 준비해 주세요"/></td>
          </tr>
          <tr class="red">
            <td>3교시</td>
            <td>
              <span class="unit w100">
                <input type="text" value="70"><em>분</em>
              </span>
            </td>
            <td>12 : 30</td>
            <td>13 : 40</td>
            <td>
              <span class="unit w100">
                <input type="text" value="70"><em>분</em>
              </span>
            </td>
            <td>12 : 30</td>
            <td>13 : 40</td>
            <td><input type="text" value="-"/></td>
          </tr>
          <tr>
            <td>마무리</td>
            <td>
              <span class="unit w100">
                <input type="text" value="5"><em>분</em>
              </span>
            </td>
            <td>13 : 40</td>
            <td>13 : 45</td>
            <td>
              <span class="unit w100">
                <input type="text" value="5"><em>분</em>
              </span>
            </td>
            <td>13 : 40</td>
            <td>13 : 45</td>
            <td><input type="text" value="퇴실해 주세요"/></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //실제 교시 별 시간 -->
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
  name: 'FormatMgtSchedule',
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
