<template lang="html">
	<div>
		<!-- 과목 -->
		<div class="subTit">
			<h3>과목</h3>
		</div>
		<div class="tvs">
			<table>
				<colgroup>
					<col width="160">
					<col width="*">
				</colgroup>
				<tbody>
					<tr>
						<th>과목정보</th>
						<td>교육학</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //과목 -->
		<!-- 과목별 선생님 설정 -->
		<div class="subTit">
			<h3>과목별 선생님 설정</h3>
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
								<input type="checkbox" id="Tg1" checked>
								<label for="Tg1">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="김현" placeholder="선생님 이름"></td>
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
								<input type="checkbox" id="Tg2" checked>
								<label for="Tg2">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="권구현" placeholder="선생님 이름"></td>
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
								<input type="checkbox" id="Tg3" checked>
								<label for="Tg3">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="윤중샘" placeholder="선생님 이름"></td>
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
								<input type="checkbox" id="Tg4">
								<label for="Tg4">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" value="홍길동" placeholder="선생님 이름"></td>
						<td>
							<div class="urlSet long"><span>http://www.ssamplus.com/</span><input type="text" placeholder="URL" value="/admin/mem/mem_search"/></div>
						</td>
						<td>2021-05-01</td>
						<td>
							<button class="btnPosArrow" disabled>위로</button>
							<button class="btnPosArrow down" disabled>아래로</button>
						</td>
					</tr>
					<tr class="newAdd">
						<td>신규</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="Tg5">
								<label for="Tg5">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
						<td><input type="text" placeholder="선생님 이름"><button class="btnSearch">검색</button></td>
						<td>
							<div class="urlSet long"><span>http://www.ssamplus.com/</span><input type="text" placeholder="URL"/></div>
						</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //과목별 선생님 설정 -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'BannerLnbTeacherLectureView',
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
