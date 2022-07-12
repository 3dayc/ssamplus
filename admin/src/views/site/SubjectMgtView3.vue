<template lang="html">
	<div>
		<div class="pageTit">
			<h2>수강과목 설정</h2>
      <span><router-link to="/mkup/site/subjectMgt">사이트 관리</router-link><router-link to="/mkup/site/subjectMgt">수강과목관리</router-link><router-link to="/mkup/site/subjectMgt">수강과목 설정</router-link><em>상세</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="subjectMgtView"><!-- class 없어도 유지 -->==
					<!-- 카테고리 -->
					<div class="subTit">
						<h3>카테고리</h3>
						<span class="right">
            	<router-link to="/mkup/site/subjectMgt" class="btnList">목록으로</router-link>
						</span>
					</div>
					<div class="tvs">
						<table>
							<colgroup>
								<col width="160">
								<col width="*">
							</colgroup>
							<tbody>
								<tr>
									<th>PATH</th>
									<td>중등 > <span class="fBold">국어</span></td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //카테고리 -->
					<!-- 상세(2-DEPTH가 있는 경우) -->
					<div class="subTit">
						<h3>3 DEPTH 메뉴</h3>
					</div>
					<p class="infoMsg fRed mb10">※ 회원/선생님 > 선생님 조회에서 매칭된 선생님이 리스트로 표시되며 순서 변경만 가능함</p>
					<div class="tls">
						<table>
							<colgroup>
								<col width="80"/>
								<col width="1000"/>
								<col width="100"/>
							</colgroup>
							<thead>
								<tr>
									<th>순서</th>
									<th>3 DEPTH</th>
									<th>순서 변경</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td class="fBold">송헌/김준팀</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td class="fBold">송헌</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td class="fBold">김준</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>4</td>
									<td class="fBold">박노송</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //상세(2-DEPTH가 있는 경우) -->
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
  name: 'SubjectMgt',
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
