<template lang="html">
	<div>
		<!-- 상위 과목 -->
		<div class="subTit">
			<h3>상위 과목 (1 DEPTH)</h3>
		</div>
		<div class="tvs">
			<table>
				<colgroup>
					<col width="160"/>
					<col width="*"/>
					<col width="160"/>
					<col width="250"/>
				</colgroup>
				<tbody>
					<tr>
						<th>1 DEPTH</th>
						<td>
							<div>
								<input type="text" value="교육학" class="wHalf"/>
								<span class="checkSet ml10">
		              <input type="checkbox"/>
		              <label for=""><i></i>하위 과목 (2 DEPTH)이 없음/ 선생님을 바로 표시함</label>
		            </span>
							</div>
							<input type="text" class="mt5" placeholder="하위 과목이 없을 경우 상위 과목에 해당하는 URL을 입력해 주세요" disabled/>
						</td>
						<th>상위과목 노출</th>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="subjectTg" >
								<label for="subjectTg">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //상위 과목 -->
		<!-- 하위 과목 -->
		<div class="subTit">
			<h3>하위 과목 (2 DEPTH)</h3>
		</div>
		<div class="tls">
			<table>
				<colgroup>
					<col width="80">
					<col width="160">
					<col width="400">
					<col width="*">
					<col width="140">
					<col width="140">
				</colgroup>
				<tbody>
					<tr>
						<td>1</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="2dpTg1" checked>
								<label for="2dpTg1">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="국어" placeholder="하위 과목명을 입력해 주세요"></td>
						<td>
							<div class="urlSet long"><span>http://www.ssamplus.com/</span><input type="text" placeholder="URL" value="/admin/mem/mem_search"/></div>
						</td>
						<td>2021-05-01</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="2dpTg2" checked>
								<label for="2dpTg2">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="영어" placeholder="하위 과목명을 입력해 주세요"></td>
						<td>
							<div class="urlSet long"><span>http://www.ssamplus.com/</span><input type="text" placeholder="URL" value="/admin/mem/mem_search"/></div>
						</td>
						<td>2021-05-01</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="2dpTg3" checked>
								<label for="2dpTg3">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="수학" placeholder="하위 과목명을 입력해 주세요"></td>
						<td>
							<div class="urlSet long"><span>http://www.ssamplus.com/</span><input type="text" placeholder="URL" value="/admin/mem/mem_search"/></div>
						</td>
						<td>2021-05-01</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr class="complete">
						<td>-</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="2dpTg4" >
								<label for="2dpTg4">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="음악" placeholder="하위 과목명을 입력해 주세요"></td>
						<td>
							<div class="urlSet long"><span>http://www.ssamplus.com/</span><input type="text" placeholder="URL" value="/admin/mem/mem_search"/></div>
						</td>
						<td>2021-05-01</td>
						<td>
							<button class="btnPosArrow" disabled>위로</button>
							<button class="btnPosArrow down" disabled>아래로</button>
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="2dpTg5" checked>
								<label for="2dpTg5">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="미술" placeholder="하위 과목명을 입력해 주세요"></td>
						<td>
							<div class="urlSet long"><span>http://www.ssamplus.com/</span><input type="text" placeholder="URL" value="/admin/mem/mem_search"/></div>
						</td>
						<td>2021-05-01</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr>
						<td>5</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="2dpTg6" checked>
								<label for="2dpTg6">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="체육" placeholder="하위 과목명을 입력해 주세요"></td>
						<td>
							<div class="urlSet long"><span>http://www.ssamplus.com/</span><input type="text" placeholder="URL" value="/admin/mem/mem_search"/></div>
						</td>
						<td>2021-05-01</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr>
						<td>6</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="2dpTg7" checked>
								<label for="2dpTg7">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="중국어" placeholder="하위 과목명을 입력해 주세요"></td>
						<td>
							<div class="urlSet long"><span>http://www.ssamplus.com/</span><input type="text" placeholder="URL" value="/admin/mem/mem_search"/></div>
						</td>
						<td>2021-05-01</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr>
						<td>7</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="2dpTg8" checked>
								<label for="2dpTg8">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="일본어" placeholder="하위 과목명을 입력해 주세요"></td>
						<td>
							<div class="urlSet long"><span>http://www.ssamplus.com/</span><input type="text" placeholder="URL" value="/admin/mem/mem_search"/></div>
						</td>
						<td>2021-05-01</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr>
						<td>8</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="2dpTg9" checked>
								<label for="2dpTg9">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="한문" placeholder="하위 과목명을 입력해 주세요"></td>
						<td>
							<div class="urlSet long"><span>http://www.ssamplus.com/</span><input type="text" placeholder="URL" value="/admin/mem/mem_search"/></div>
						</td>
						<td>2021-05-01</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr>
						<td>9</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="2dpTg10" checked>
								<label for="2dpTg10">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="가정" placeholder="하위 과목명을 입력해 주세요"></td>
						<td>
							<div class="urlSet long"><span>http://www.ssamplus.com/</span><input type="text" placeholder="URL" value="/admin/mem/mem_search"/></div>
						</td>
						<td>2021-05-01</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr>
						<td>10</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="2dpTg11" checked>
								<label for="2dpTg11">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="도덕윤리" placeholder="하위 과목명을 입력해 주세요"></td>
						<td>
							<div class="urlSet long"><span>http://www.ssamplus.com/</span><input type="text" placeholder="URL" value="/admin/mem/mem_search"/></div>
						</td>
						<td>2021-05-01</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr>
						<td>11</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="2dpTg12" checked>
								<label for="2dpTg12">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="미용" placeholder="하위 과목명을 입력해 주세요"></td>
						<td>
							<div class="urlSet long"><span>http://www.ssamplus.com/</span><input type="text" placeholder="URL" value="/admin/mem/mem_search"/></div>
						</td>
						<td>2021-05-01</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr class="newAdd">
						<td>신규</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="2dpTg12" >
								<label for="2dpTg12">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" placeholder="하위 과목명을 입력해 주세요"></td>
						<td>
							<div class="urlSet long"><span>http://www.ssamplus.com/</span><input type="text" placeholder="URL"/></div>
						</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //하위 과목 -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'BannerLnbSubjectViewSsammall',
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
