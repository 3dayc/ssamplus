<template lang="html">
	<div>
		<div class="pageTit">
			<h2>과목 (LNB)</h2>
      <span><router-link to="/mkup/site/bannerGnb">사이트 관리</router-link><router-link to="/mkup/site/bannerGnb">GNB/SNB 관리</router-link><em>과목 (LNB)</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="bannerLnbSubject"><!-- class 없어도 유지 -->
					<div class="subTit">
						<div class="right">
							<button class="btnM green">저장</button>
							<button class="btnM line ml10">취소</button>
						</div>
					</div>
					<div class="tls">
						<table>
							<colgroup>
								<col width="120"/>
								<col width="160"/>
								<col width="*"/>
								<col width="200"/>
								<col width="200"/>
							</colgroup>
							<thead>
								<tr>
									<th>순서</th>
									<th>상위과목 노출</th>
									<th>상위 과목 (1 DEPTH)</th>
									<th>등록일</th>
									<th>순서 변경</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="tg1" checked>
											<label for="tg1">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td><router-link to="/mkup/site/bannerLnbSubject/view">교육학</router-link></td>
									<td>2021-01-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="tg3" checked>
											<label for="tg3">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td><router-link to="/mkup/site/bannerLnbSubject/view">유아</router-link></td>
									<td>2021-01-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr class="complete">
									<td>-</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="tg2" >
											<label for="tg2">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td><router-link to="/mkup/site/bannerLnbSubject/view">초등</router-link></td>
									<td>2021-01-01</td>
									<td>
										<button class="btnPosArrow" disabled>위로</button>
										<button class="btnPosArrow down" disabled>아래로</button>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="tg4" checked>
											<label for="tg4">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td><router-link to="/mkup/site/bannerLnbSubject/view">중등</router-link></td>
									<td>2021-01-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>4</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="tg5" checked>
											<label for="tg5">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td><router-link to="/mkup/site/bannerLnbSubject/view">사회/과학</router-link></td>
									<td>2021-01-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>5</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="tg6" checked>
											<label for="tg6">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td><router-link to="/mkup/site/bannerLnbSubject/view">비교과</router-link></td>
									<td>2021-01-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>6</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="tg7" checked>
											<label for="tg7">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td><router-link to="/mkup/site/bannerLnbSubject/view">특수</router-link></td>
									<td>2021-01-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>7</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="tg8" checked>
											<label for="tg8">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td><router-link to="/mkup/site/bannerLnbSubject/view">면접</router-link></td>
									<td>2021-01-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>8</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="tg9" checked>
											<label for="tg9">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td><router-link to="/mkup/site/bannerLnbSubject/view">한국사</router-link></td>
									<td>2021-01-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr>
									<td>9</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="tg10" checked>
											<label for="tg10">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td><router-link to="/mkup/site/bannerLnbSubject/view">사서직</router-link></td>
									<td>2021-01-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr class="newAdd">
									<td>신규</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="tg0">
											<label for="tg0">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td><input type="text" placeholder="상위 과목 구분을 입력해 주세요"></td>
									<td></td>
									<td></td>
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
  name: 'BannerLnbSubject',
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
