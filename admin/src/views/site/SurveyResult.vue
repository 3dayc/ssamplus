<template lang="html">
	<div>
		<div class="pageTit">
			<h2>설문 결과</h2>
      <span><router-link to="/mkup/site/subjectMgt">사이트 관리</router-link><router-link to="/mkup/site/surveyMgt">설문조사</router-link><em>설문 결과</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="surveyResult"><!-- class 없어도 유지 -->
					<div class="boxBrown msgBtnSet">
						<p class="msg fGreen">※ 리스트의 설문 조사명을 클릭하면 상세화면에서 설문 결과를 확인할 수 있습니다</p>
					</div>
					<div class="tls mt20">
						<table>
							<colgroup>
								<col width="100">
								<col width="120">
								<col width="300">
								<col width="600">
								<col width="120">
								<col width="100">
								<col width="120">
							</colgroup>
							<thead>
								<tr>
									<th>No</th>
									<th>노출 여부</th>
									<th>설문조사 기간</th>
									<th>설문조사명</th>
									<th>참여자</th>
									<th>등록자</th>
									<th>등록일</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>99999</td>
									<td>노출</td>
									<td>2021-08-15  09:00  ~  2021-09-15  24:00</td>
									<td class="tL"><router-link to="/mkup/site/surveyResult/view">2021년 쌤플러스 마감 설문</router-link></td>
									<td>999,999</td>
									<td>홍길동</td>
									<td>2020-09-23</td>
								</tr>
								<tr>
									<td>99998</td>
									<td>노출</td>
									<td>2021-08-15  09:00  ~  2021-09-15  24:00</td>
									<td class="tL"><router-link to="/mkup/site/surveyResult/view">등록된 설문조사 제목을 표시합니다. 길어지면 1줄까지 보이고 … 생략</router-link></td>
									<td>999,999</td>
									<td>홍길동</td>
									<td>2020-09-22</td>
								</tr>
								<tr>
									<td>99997</td>
									<td>노출</td>
									<td>2021-08-15  09:00  ~  2021-09-15  24:00</td>
									<td class="tL"><router-link to="/mkup/site/surveyResult/view">등록된 설문조사 제목을 표시합니다. 길어지면 1줄까지 보이고 … 생략</router-link></td>
									<td>999,999</td>
									<td>홍길동</td>
									<td>2020-09-22</td>
								</tr>
								<tr>
									<td>99996</td>
									<td>노출</td>
									<td>2021-08-15  09:00  ~  2021-09-15  24:00</td>
									<td class="tL"><router-link to="/mkup/site/surveyResult/view">등록된 설문조사 제목을 표시합니다. 길어지면 1줄까지 보이고 … 생략</router-link></td>
									<td>999,999</td>
									<td>홍길동</td>
									<td>2020-09-22</td>
								</tr>
								<tr>
									<td>99995</td>
									<td>노출</td>
									<td>2021-08-15  09:00  ~  2021-09-15  24:00</td>
									<td class="tL"><router-link to="/mkup/site/surveyResult/view">등록된 설문조사 제목을 표시합니다. </router-link></td>
									<td>999,999</td>
									<td>홍길동</td>
									<td>2020-09-22</td>
								</tr>
								<tr>
									<td>…</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>4</td>
									<td>숨김</td>
									<td>2021-01-01  11:00  ~  2021-01-31  24:00</td>
									<td class="tL"><router-link to="/mkup/site/surveyResult/view" class="ellipsis01">등록된 설문조사 제목을 표시합니다. 길어지면 1줄까지 보이고 … 생략</router-link></td>
									<td>999,999</td>
									<td>홍길동</td>
									<td>2020-09-22</td>
								</tr>
								<tr>
									<td>3</td>
									<td>숨김</td>
									<td>2021-01-01  09:00  ~  2021-01-31  20:00</td>
									<td class="tL"><router-link to="/mkup/site/surveyResult/view" class="ellipsis01">등록된 설문조사 제목을 표시합니다. 길어지면 1줄까지 보이고 … 생략</router-link></td>
									<td>999,999</td>
									<td>홍길동</td>
									<td>2020-09-22</td>
								</tr>
								<tr>
									<td>2</td>
									<td>숨김</td>
									<td>2021-01-01  11:00  ~  2021-01-31  18:00</td>
									<td class="tL"><router-link to="/mkup/site/surveyResult/view" class="ellipsis01">등록된 설문조사 제목을 표시합니다.</router-link></td>
									<td>999,999</td>
									<td>홍길동</td>
									<td>2020-09-22</td>
								</tr>
								<tr>
									<td>1</td>
									<td>숨김</td>
									<td>2021-01-01  09:00  ~  2021-01-31  24:00</td>
									<td class="tL"><router-link to="/mkup/site/surveyResult/view" class="ellipsis01">등록된 설문조사 제목을 표시합니다.</router-link></td>
									<td>999,999</td>
									<td>홍길동</td>
									<td>2020-09-22</td>
								</tr>
							</tbody>
						</table>
					</div>
					<Paginate />
				</div>
				<!-- //page layout -->
			</article>
		</div>
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SurveyResult',
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
