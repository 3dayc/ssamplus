<template lang="html">
	<div>
		<div class="pageTit">
			<h2>수강과목 설정</h2>
      <span><router-link to="/mkup/site/subjectMgt">사이트 관리</router-link><router-link to="/mkup/site/subjectMgt">수강과목관리</router-link><em>수강과목 설정</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="subjectMgt"><!-- class 없어도 유지 -->
					<div class="subTit">
						<h3><과목 카테고리 : 과목 명> 매칭 정의</h3>
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
									<th colspan="2">1 DEPTH 메뉴</th>
									<th colspan="2">2 DEPTH 메뉴</th>
									<th>순서 변경</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td class="fBold">01</td>
									<td class="fBold">교육학</td>
									<td>없음</td>
									<td><router-link to="/mkup/site/subjectMgt/view" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td class="fBold">02</td>
									<td class="fBold">유아</td>
									<td>없음</td>
									<td><router-link to="/mkup/site/subjectMgt/view" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td class="fBold">07</td>
									<td class="fBold">초등</td>
									<td>없음</td>
									<td><router-link to="/mkup/site/subjectMgt/view" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>…</td>
									<td class="fBold">03</td>
									<td class="fBold">중등</td>
									<td>12</td>
									<td><router-link to="/mkup/site/subjectMgt/view2" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>5</td>
									<td class="fBold">04</td>
									<td class="fBold">사회/과학</td>
									<td>6</td>
									<td><router-link to="/mkup/site/subjectMgt/view2" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>6</td>
									<td class="fBold">06</td>
									<td class="fBold">비교과</td>
									<td>2</td>
									<td><router-link to="/mkup/site/subjectMgt/view2" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>7</td>
									<td class="fBold">05</td>
									<td class="fBold">특수</td>
									<td>3</td>
									<td><router-link to="/mkup/site/subjectMgt/view2" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>8</td>
									<td class="fBold">08</td>
									<td class="fBold">한국사</td>
									<td>없음</td>
									<td><router-link to="/mkup/site/subjectMgt/view" class="btnT line">편집하기</router-link></td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
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
