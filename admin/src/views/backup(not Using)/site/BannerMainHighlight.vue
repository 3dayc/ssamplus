<template lang="html">
	<div class="bannerMainDetail">
		<div class="boardTop tR">
			<button class="btnM">메뉴추가</button>
		</div>
		<!-- 목록 -->
		<div class="tls">
			<table>
				<colgroup>
					<col width="100"/>
					<col width="160"/>
					<col width="500"/>
					<col width="100"/>
					<col width="160"/>
				</colgroup>
				<thead>
					<tr>
						<th>번호</th>
						<th>프론트 노출</th>
						<th>탭 메뉴</th>
						<th>삭제</th>
						<th>순서 변경</th>
					</tr>
				</thead>
				<tbody>
					<!-- 메뉴추가 -->
					<tr class="dropOpen">
						<td>1</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="push">
								<label for="push">
									<span>차단</span>
									<span>사용</span>
								</label>
							</span>
						</td>
						<td><input type="text" /></td>
						<td><button class="btnS line">삭제</button></td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<!-- //메뉴추가 -->
					<!-- Loop -->
					<tr>
						<td>2</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="push2">
								<label for="push2">
									<span>차단</span>
									<span>사용</span>
								</label>
							</span>
						</td>
						<td>
							<div>
								<router-link to="/mkup/site/bannerMain/highlight">강의 하이라이트</router-link>  (10)
								<button class="btnModifyTit">수정</button>
							</div>
							<input type="text" value="강의 하이라이트" style="display:none;"/>
						</td>
						<td><button class="btnS line">삭제</button></td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<!-- //Loop -->
					<tr>
						<td>3</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="push3" checked/>
								<label for="push3">
									<span>차단</span>
									<span>사용</span>
								</label>
							</span>
						</td>
						<td>
							<div>
								<router-link to="/mkup/site/bannerMain/highlight">기출 해설</router-link> (6)
								<button class="btnModifyTit">수정</button>
							</div>
							<input type="text" value="기출 해설" style="display:none;"/>
						</td>
						<td>적용 중 삭제불가</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr>
						<td>4</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="push4" checked/>
								<label for="push4">
									<span>차단</span>
									<span>사용</span>
								</label>
							</span>
						</td>
						<td>
							<div>
								<router-link to="/mkup/site/bannerMain/highlight">입문 강의</router-link> (10)
								<button class="btnModifyTit">수정</button>
							</div>
							<input type="text" value="입문 강의" style="display:none;"/>
						</td>
						<td>적용 중 삭제불가</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr>
						<td>5</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="push5" checked/>
								<label for="push5">
									<span>차단</span>
									<span>사용</span>
								</label>
							</span>
						</td>
						<td>
							<div>
								<router-link to="/mkup/site/bannerMain/highlight">무료 강의</router-link> (7)
								<button class="btnModifyTit">수정</button>
							</div>
							<input type="text" value="무료 강의" style="display:none;"/>
						</td>
						<td>적용 중 삭제불가</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr>
						<td>6</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="push6" checked/>
								<label for="push6">
									<span>차단</span>
									<span>사용</span>
								</label>
							</span>
						</td>
						<td>
							<div>
								<router-link to="/mkup/site/bannerMain/highlight">최신교재</router-link> (8)
								<button class="btnModifyTit">수정</button>
							</div>
							<input type="text" value="최신교재" style="display:none;"/>
						</td>
						<td>적용 중 삭제불가</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr>
						<td>7</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="push6" checked/>
								<label for="push6">
									<span>차단</span>
									<span>사용</span>
								</label>
							</span>
						</td>
						<td>
							<div>
								<router-link to="/mkup/site/bannerMain/highlight">추천 기기</router-link> (7)
								<button class="btnModifyTit">수정</button>
							</div>
							<input type="text" value="추천 기기" style="display:none;"/>
						</td>
						<td>적용 중 삭제불가</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<tr>
						<td>8</td>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="push6" checked/>
								<label for="push6">
									<span>차단</span>
									<span>사용</span>
								</label>
							</span>
						</td>
						<td>
							<div>
								<router-link to="/mkup/site/bannerMain/highlight">리얼 적중</router-link> (7)
								<button class="btnModifyTit">수정</button>
							</div>
							<input type="text" value="리얼 적중" style="display:none;"/>
						</td>
						<td>적용 중 삭제불가</td>
						<td>
							<button class="btnPosArrow">위로</button>
							<button class="btnPosArrow down">아래로</button>
						</td>
					</tr>
					<!-- 데이터 없을 경우 -->
					<tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
					<!-- //데이터 없을 경우 -->
				</tbody>
			</table>
		</div>
		<!-- //목록 -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'BannerMainHighlight',
	data() {
			return {
				multyFuleName: '파일첨부',
				alertfileDelete: false,
	      classPreview: "imgPreviewPop",
				popupPreviewImg: false,
	      classValue: "siteMgtPop",
				popupSitemgt:false,
				popupTargetURL: false,
				popupMenuColor: false,
			}
	},
	methods: {
		uploadMulty(event) {
			this.multyFuleName = event.target.value;
		}, // 파일 업로드2
	},
	components: {
	},
}
</script>
