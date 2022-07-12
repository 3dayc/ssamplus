<template lang="html">
	<div>
		<div class="pageTit">
			<h2>GNB 설정</h2>
      <span><router-link to="/mkup/site/subjectMgt">사이트 관리</router-link><router-link to="/mkup/site/navigationGnb">GNB/SNB 관리</router-link><em>GNB 설정</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="navigationGnb"><!-- class 없어도 유지 -->
					<div class="subTit">
						<h3>GNB</h3>
					</div>
					<div class="tls">
						<table>
							<colgroup>
								<col width="90"/>
								<col width="140"/>
								<col width="400"/>
								<col width="140"/>
								<col width="140"/>
								<col width="160"/>
								<col width="160"/>
							</colgroup>
							<thead>
								<tr>
									<th>순서</th>
									<th>노출 여부</th>
									<th>GNB 메뉴</th>
									<th colspan="2">2 DEPTH 메뉴</th>
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
									<td><input type="text" value="쌤팩" class="modifyInput"></td>
									<td>3</td>
									<td><router-link to="/mkup/site/navigationGnb/view" class="btnT line">편집하기</router-link></td>
									<td>2021-01-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr class="gray">
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
									<td><input type="text" value="수강신청" class="modifyInput"></td>
									<td>35</td>
									<td><router-link to="/mkup/site/navigationGnb/view2" class="btnT line">편집하기</router-link></td>
									<td>2021-01-01</td>
									<td>
										<button class="btnPosArrow" disabled>위로</button>
										<button class="btnPosArrow down" disabled>아래로</button>
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
									<td><input type="text" value="쌤 Mall" class="modifyInput"></td>
									<td>4</td>
									<td><router-link to="/mkup/site/navigationGnb/view" class="btnT line">편집하기</router-link></td>
									<td>2021-01-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
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
									<td><input type="text" value="선생님 스페셜" class="modifyInput"></td>
									<td>3</td>
									<td><router-link to="/mkup/site/navigationGnb/view" class="btnT line">편집하기</router-link></td>
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
									<td><input type="text" value="무료강의" class="modifyInput"></td>
									<td>3</td>
									<td><router-link to="/mkup/site/navigationGnb/view" class="btnT line">편집하기</router-link></td>
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
									<td><input type="text" value="시험정보" class="modifyInput"></td>
									<td>3</td>
									<td><router-link to="/mkup/site/navigationGnb/view" class="btnT line">편집하기</router-link></td>
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
									<td><input type="text" value="합격수기" class="modifyInput"></td>
									<td>4</td>
									<td><router-link to="/mkup/site/navigationGnb/view" class="btnT line">편집하기</router-link></td>
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
									<td><input type="text" value="인사이드최소" class="modifyInput"></td>
									<td>1</td>
									<td><router-link to="/mkup/site/navigationGnb/view" class="btnT line">편집하기</router-link></td>
									<td>2021-01-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr class="red new">
									<td>신규</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="tg9">
											<label for="tg9">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td>
										<div class="ipBtn">
											<input type="text">
											<button class="btnS">저장</button>
										</div>
									</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td colspan="7"><button class="btnM blueline wFull">+ 행 추가</button></td>
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
  name: 'NavigationGnb',
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
