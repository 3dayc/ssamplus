<template lang="html">
	<div>
		<div class="pageTit">
			<h2>GNB 설정</h2>
      <span><router-link to="/mkup/site/subjectMgt">사이트 관리</router-link><router-link to="/mkup/site/navigationGnb">GNB/SNB 관리</router-link><router-link to="/mkup/site/navigationGnb">GNB 설정</router-link><em>상세</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="navigationGnbView"><!-- class 없어도 유지 -->
					<div class="subTit">
						<h3>카테고리</h3>
						<div class="right">
            	<router-link to="/mkup/site/navigationGnb" class="btnList">목록으로</router-link>
						</div>
					</div>
					<div class="tvs">
						<table>
							<colgroup>
								<col width="160"/>
								<col width="*"/>
							</colgroup>
							<tbody>
								<tr>
									<th>PATH</th>
									<td>쌤팩</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="subTit">
						<h3>2 DEPTH 메뉴</h3>
					</div>
					<p class="infoMsg fRed mb10">※ 해당 GNB 메뉴에 마우스 오버하면 2 DEPTH 메뉴를 표시하고 GNB 메뉴를 클릭하면 SNB 메뉴 중에서 1번 메뉴가 표시됨</p>
					<div class="tls">
						<table>
							<colgroup>
								<col width="80">
								<col width="140">
								<col width="350">
								<col width="150">
								<col width="400">
								<col width="140">
								<col width="140">
							</colgroup>
							<thead>
								<tr>
									<th>순서</th>
									<th>노출여부</th>
									<th>2 DEPTH 메뉴</th>
									<th colspan="2">URL</th>
									<th>등록일</th>
									<th>순서 변경</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="snbTg1" checked>
											<label for="snbTg1">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td><input type="text" value="쌤팩" class="modifyInput"/></td>
									<td>
										<span>http://www.ssamplus.com/</span>
									</td>
									<td>
										<input type="text" value="admin/mem/mem_search/flag=1" class="modifyInput"/>
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
											<input type="checkbox" id="snbTg2" checked>
											<label for="snbTg2">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td>
										<input type="text" value="2022 쌤팩 베이직" class="modifyInput">
									</td>
									<td>
										<span>http://www.ssamplus.com/</span>
									</td>
									<td>
										<input type="text" value="admin/mem/mem_search/flag=2" class="modifyInput"/>
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
											<input type="checkbox" id="snbTg3" checked>
											<label for="snbTg3">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td>
										<input type="text" value="쌤팩 프리미엄" class="modifyInput">
									</td>
									<td>
										<span>http://www.ssamplus.com/</span>
									</td>
									<td>
										<input type="text" value="admin/mem/mem_search/flag=2" class="modifyInput"/>
									</td>
									<td>2021-05-01</td>
									<td>
										<button class="btnPosArrow">위로</button>
										<button class="btnPosArrow down">아래로</button>
									</td>
								</tr>
								<tr class="gray">
									<td>-</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="snbTg4" >
											<label for="snbTg4">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td>
										<input type="text" value="쌤팩 프리미엄 플러스" class="modifyInput">
									</td>
									<td>
										<span>http://www.ssamplus.com/</span>
									</td>
									<td>
										<input type="text" value="admin/mem/mem_search/flag=2" class="modifyInput"/>
									</td>
									<td>2021-05-01</td>
									<td>
										<button class="btnPosArrow" disabled>위로</button>
										<button class="btnPosArrow down" disabled>아래로</button>
									</td>
								</tr>
								<tr class="red">
									<td>신규</td>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="snbTg9" >
											<label for="snbTg9">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
									<td>
										<input type="text">
									</td>
									<td>
										http://www.ssamplus.com/
									</td>
									<td colspan="3">
										<div class="ipBtn">
											<input type="text"/>
											<button class="btnS">저장</button>
										</div>
									</td>
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
  name: 'NavigationGnbView',
	data() {
			return {
			}
	},
	methods: {
		modifyChange(event){
			var td = event.target;
			var tds = event.target.className;
			if(td.className == 'm-txt') {
				document.querySelector("."+td.previousSibling.className).style.display = 'block';
				document.querySelector("."+tds).style.display = 'none';
				var tinput = document.querySelector("."+td.previousSibling.className+" input");
				tinput.focus();
				tinput.addEventListener("blur", e => {
					document.querySelector("."+td.previousSibling.className).style.display = 'none';
					td.style.display = 'block';
				});
			} else {
				document.querySelector("."+tds+ " .m-modify").style.display = 'block';
				document.querySelector("."+tds+ " .m-txt").style.display = 'none';
				var tinput = document.querySelector("."+tds+ " .m-modify input");
				tinput.focus();
				tinput.addEventListener("blur", e => {
					document.querySelector("."+tds+ " .m-modify").style.display = 'none';
					td.querySelector("."+tds+ " .m-txt").style.display = 'block';
				});
			}
		},
	},
	components: {
	},
}
</script>
