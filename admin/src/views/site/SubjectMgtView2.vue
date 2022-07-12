<template lang="html">
	<div>
		<div class="pageTit">
			<h2>수강과목 설정</h2>
      <span><router-link to="/mkup/site/subjectMgt">사이트 관리</router-link><router-link to="/mkup/site/subjectMgt">수강과목관리</router-link><router-link to="/mkup/site/subjectMgt">수강과목 설정</router-link><em>상세</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="subjectMgtView"><!-- class 없어도 유지 -->
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
									<td>중등</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //카테고리 -->
					<!-- 상세 (2-DEPTH가 있는 경우) -->
					<div class="subTit">
						<h3>2 DEPTH 메뉴</h3>
					</div>
					<p class="infoMsg fRed mb10">※ <과목코드 테이블>에서 수강신청 필드가 Y인 과목으로 테이블이 구성됨</p>
					<div class="tls">
						<table>
							<colgroup>
								<col width="80"/>
								<col width="250"/>
								<col width="250"/>
								<col width="250"/>
								<col width="250"/>
								<col width="100"/>
							</colgroup>
							<thead>
								<tr>
									<th>순서</th>
									<th colspan="2">2 DEPTH 메뉴</th>
									<th colspan="2">3 DEPTH 메뉴</th>
									<th>순서 변경</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>0301</td>
									<td class="fBold">국어</td>
									<td>4</td>
									<td><router-link to="/mkup/site/subjectMgt/view3" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>0302</td>
									<td class="fBold">영어</td>
									<td>3</td>
									<td><router-link to="/mkup/site/subjectMgt/view3" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td>0330</td>
									<td class="fBold">수학</td>
									<td>2</td>
									<td><router-link to="/mkup/site/subjectMgt/view3" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>4</td>
									<td>0305</td>
									<td class="fBold">음악</td>
									<td>2</td>
									<td><router-link to="/mkup/site/subjectMgt/view3" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>5</td>
									<td>0310</td>
									<td class="fBold">미술</td>
									<td>2</td>
									<td><router-link to="/mkup/site/subjectMgt/view3" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>6</td>
									<td>0309</td>
									<td class="fBold">체육</td>
									<td>1</td>
									<td><router-link to="/mkup/site/subjectMgt/view3" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>7</td>
									<td>0307</td>
									<td class="fBold">중국어</td>
									<td>1</td>
									<td><router-link to="/mkup/site/subjectMgt/view3" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>8</td>
									<td>0308</td>
									<td class="fBold">일본어</td>
									<td>1</td>
									<td><router-link to="/mkup/site/subjectMgt/view3" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>9</td>
									<td>0318</td>
									<td class="fBold">한문</td>
									<td>1</td>
									<td><router-link to="/mkup/site/subjectMgt/view3" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>10</td>
									<td>0304</td>
									<td class="fBold">가정</td>
									<td>1</td>
									<td><router-link to="/mkup/site/subjectMgt/view3" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>11</td>
									<td>0312</td>
									<td class="fBold">도덕윤리</td>
									<td>1</td>
									<td><router-link to="/mkup/site/subjectMgt/view3" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //상세 (2-DEPTH가 있는 경우) -->
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
