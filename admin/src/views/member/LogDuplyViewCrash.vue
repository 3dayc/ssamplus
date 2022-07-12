<template lang="html">
	<div>
		<!-- 로그인 정보 -->
		<div class="subTit">
			<h3>동일IP 로그인 정보</h3>
			<span class="right">IP 주소: <em>1.254.98.69</em></span>
		</div>
		<div class="tls">
			<table>
				<colgroup>
					<col span="3"/>
					<col width="300"/>
					<col span="2"/>
				</colgroup>
				<thead>
					<tr>
						<th>회원번호</th>
						<th>이름(아이디)</th>
						<!-- <th>준비시험</th> -->
						<th>최근 로그인 일시</th>
						<th>동일 IP 로그인 횟수</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>341145</td>
						<td>김지민<br/>(jimin1234)</td>
						<!-- <td>전공중국어</td> -->
						<td>2021-02-05(금) 22:32:48</td>
						<td>46</td>
					</tr>
					<tr>
						<td>341145</td>
						<td>김마리아<br/>(maria1234)</td>
						<!-- <td>전공중국어</td> -->
						<td>2021-02-05(금) 22:32:48</td>
						<td>24</td>
					</tr>
					<tr>
						<td>341145</td>
						<td>김마리아<br/>(maria1234)</td>
						<!-- <td>전공중국어</td> -->
						<td>2021-02-05(금) 22:32:48</td>
						<td>24</td>
					</tr>
					<tr>
						<td>341145</td>
						<td>김마리아<br/>(maria1234)</td>
						<!-- <td>전공중국어</td> -->
						<td>2021-02-05(금) 22:32:48</td>
						<td>24</td>
					</tr>
					<!-- 데이터 없을 경우 -->
					<tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
					<!-- //데이터 없을 경우 -->
				</tbody>
			</table>
		</div>
		<!-- //로그인 정보 -->
		<!-- 강의 수강 정보 -->
		<div class="subTit">
			<h3>동일IP 강의 수강 정보</h3>
			<span class="right">IP 주소: <em>1.254.98.69</em></span>
		</div>
		<div class="tls">
			<table>
				<colgroup>
					<col span="2"/>
					<col width="450"/>
					<col span="4"/>
				</colgroup>
				<thead>
					<tr>
						<th>회원번호</th>
						<th>이름(아이디)</th>
						<th>강좌명</th>
						<th>강의회차</th>
						<th>최근 입실시간</th>
						<th>최근 퇴실시간</th>
						<th>수강기록</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>341145</td>
						<td>김지민<br/>(jimin1234)</td>
						<td class="tL">
							[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반
						</td>
						<td>2강</td>
						<td>2021-02-05(금) 22:32:48</td>
						<td>2021-02-05(금) 22:32:48</td>
						<td><button class="btnS line" @click="MemberLogIpHistory()">전체보기</button></td>
					</tr>
					<tr>
						<td>341145</td>
						<td>김마리아<br/>(jimin1234)</td>
						<td class="tL">
							[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반
						</td>
						<td>2강</td>
						<td>2021-02-05(금) 22:32:48</td>
						<td>2021-02-05(금) 22:32:48</td>
						<td><button class="btnS line" @click="MemberLogIpHistory()">전체보기</button></td>
					</tr>

					<!-- 데이터 없을 경우 -->
					<tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
					<!-- //데이터 없을 경우 -->
				</tbody>
			</table>
		</div>
		<!-- //강의 수강 정보 -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'LogDuplyViewBefore',
	data() {
		return {
		}
	},
	methods: {
		MemberLogIpHistory() {
      let routeData = this.$router.resolve({name: 'MemberLogIpHistory', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrLogIpHistory', '_blank', `width=1100,height=900`);
    },
	},
	components: {
	},
}
</script>
