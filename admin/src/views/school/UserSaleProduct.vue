<template lang="html">
	<div>
		<div class="pageTit">
			<h2>수강생 판매</h2>
			<span><router-link to="/mkup/school/userSale">학원 관리</router-link><router-link to="/mkup/school/userSale">수강생 판매</router-link><em>강좌/교재/상품</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="userSaleProduct">
					<!-- 강좌/교/상품 상단 -->
					<div class="saleTop">
						<div class="left">
							<div class="subTit">
								<h3>361154  |  jimin0123  |  김지민</h3>
							</div>
							<button class="btnS line mr5" @click="SchoolAcademyLecture()">학원 강좌</button>
							<button class="btnS line mr5" @click="SchoolOnlineLecture()">온라인 강좌</button>
							<button class="btnS line mr5" @click="SchoolBookIdea()">교재 (이데아관)</button>
							<button class="btnS line mr5" @click="SchoolBookIvy()">교재 (아이비관)</button>
							<button class="btnS line mr5" @click="SchoolGoodsSearch()">상품</button>
							<button class="btnUpdate">초기화</button>
						</div>
						<span class="right">
							<button class="btnL greenline ml10">회원 장바구니에 강좌 담기</button><!-- 2022-02-17 버튼명 변경 -->
							<router-link to="/mkup/school/userSale/product/pay" class="btnL red ml10">즉시결제</router-link>
						</span>
					</div>
					<!-- //강좌/교/상품 상단 -->
					<!-- 단과 -->
					<div class="saleItem">
						<div class="saleItemInfo">
							<span class="left">
								<span class="checkSet noLabel">
									<input type="checkbox" id="one" />
									<label for="one"><i></i></label>
								</span>
								<strong>단과</strong>
							</span>
							<span class="right">
								<span class="total">TOTAL
									<span class="price">
										<span class="dcPlus">
											<strong>92,500</strong>원
											<em class="dc">7,500<b>원</b></em>
										</span>
									</span>
								</span>
		            <button class="btnDelete">삭제</button>
							</span>
						</div>
						<div class="tls">
							<table>
								<colgroup>
									<col width="80"/>
									<col width="100"/>
									<col width="120"/>
									<col width="130"/>
									<col width="*"/>
									<col width="270	"/>
									<col width="150"/>
									<col width="200"/>
									<col width="100"/>
								</colgroup>
								<thead>
									<tr>
										<th></th>
										<th>직/인강</th>
										<th>강좌번호</th>
										<th>선생님</th>
										<th>강좌명</th>
										<th>개강-종강일</th>
										<th>수강기간</th>
										<th>수강료</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<span class="checkSet noLabel">
												<input type="checkbox" id="c1" checked/>
												<label for="c1"><i></i></label>
											</span>
										</td>
										<td>인강</td>
										<td>S210500002Z</td>
										<td>장영희</td>
										<td class="tL">[21 1~2월] <em class="iSet sky">단과</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
										<td>2021-03-01</td>
										<td>70일</td>
										<td>
											<span class="price">
												<span class="origin"><del><strong>50,000</strong>원</del></span>
												<span class="dcBasic">
													<strong>45,000</strong>원<em class="dc">10<b>%</b></em>
												</span>
											</span>
										</td>
										<td><button class="btnDelete">delete</button></td>
									</tr>
									<tr>
										<td>
											<span class="checkSet noLabel">
												<input type="checkbox" id="c2" checked/>
												<label for="c2"><i></i></label>
											</span>
										</td>
										<td>직강</td>
										<td>H2105000022</td>
										<td>장영희</td>
										<td class="tL">[21 1~2월] <em class="iSet sky">단과</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
										<td>2021-03-01 ~ 2021-06-30</td>
										<td>-</td>
										<td>
											<span class="price">
												<span class="origin"><del><strong>50,000</strong>원</del></span>
												<span class="dcBasic">
													<strong>47,500</strong>원<em class="dc">15<b>%</b></em>
												</span>
											</span>
										</td>
										<td><button class="btnDelete">delete</button></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //단과 -->
					<!-- 교재 -->
					<div class="saleItem">
						<div class="saleItemInfo">
							<span class="left">
								<span class="checkSet noLabel">
									<input type="checkbox" id="two" />
									<label for="two"><i></i></label>
								</span>
								<strong>교재</strong>
							</span>
							<span class="right">
								<span class="total">TOTAL
									<span class="price">
										<span class="dcPlus">
											<strong>47,500</strong>원
											<em class="dc">5,000<b>원</b></em>
										</span>
									</span>
								</span>
		            <button class="btnDelete">삭제</button>
							</span>
						</div>
						<div class="tls">
							<table>
								<colgroup>
									<col width="80"/>
									<col width="100"/>
									<col width="170"/>
									<col width="170"/>
									<col width="120"/>
									<col width="*"/>
									<col width="150"/>
									<col width="150"/>
									<col width="100"/>
								</colgroup>
								<thead>
									<tr>
										<th></th>
										<th>구분</th>
										<th>교재코드</th>
										<th>ISBN</th>
										<th>저자</th>
										<th>교재명</th>
										<th>정가/판매가</th>
										<th>판매처</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<span class="checkSet noLabel">
												<input type="checkbox" id="b1" checked/>
												<label for="b1"><i></i></label>
											</span>
										</td>
										<td>교재</td>
										<td>a1520B00008</td>
										<td>2277547920025</td>
										<td>장영희</td>
										<td class="tL"><em class="iSet lilac">소득공제</em><br/>장영희 적중 모의고사 모음집 1</td>
										<td>
											<span class="price">
												<span class="origin"><del><strong>25,000</strong>원</del></span>
												<span class="dcBasic">
													<strong>22,500</strong>원<em class="dc">10<b>%</b></em>
												</span>
											</span>
										</td>
										<td>
											<span class="selectSet">
					              <select name="" id="">
					                <option value="no" class="label">선택</option>
					                <option value="">이데아관</option>
					                <option value="">아이비관</option>
					              </select>
					            </span>
										</td>
										<td><button class="btnDelete">delete</button></td>
									</tr>
									<tr>
										<td>
											<span class="checkSet noLabel">
												<input type="checkbox" id="b2" />
												<label for="b2"><i></i></label>
											</span>
										</td>
										<td>프린트</td>
										<td>a1520B00008</td>
										<td>2277547920025</td>
										<td>장영희</td>
										<td class="tL">장영희 적중 모의고사 모음집 1</td>
										<td>
											<span class="price">
												<span class="origin"><del><strong>25,000</strong>원</del></span>
												<span class="dcBasic">
													<strong>22,500</strong>원<em class="dc">10<b>%</b></em>
												</span>
											</span>
										</td>
										<td>이데아관</td>
										<td><button class="btnDelete">delete</button></td>
									</tr>
									<tr class="gray">
										<td>
											<span class="checkSet noLabel">
												<input type="checkbox" id="b2" disabled/>
												<label for="b2"><i></i></label>
											</span>
										</td>
										<td>교재</td>
										<td>a1520B00008</td>
										<td>2277547920025</td>
										<td>장영희</td>
										<td class="tL">장영희 적중 모의고사 모음집 1</td>
										<td>
											<span class="price">
												<span class="origin"><del><strong>25,000</strong>원</del></span>
												<span class="dcBasic">
													<strong>22,500</strong>원<em class="dc">10<b>%</b></em>
												</span>
											</span>
										</td>
										<td>온라인</td>
										<td><button class="btnDelete">delete</button></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //교재 -->
					<!-- 패키지 -->
					<div class="saleItem">
						<div class="saleItemInfo">
							<span class="left">
								<span class="checkSet noLabel">
									<input type="checkbox" id="three" checked/>
									<label for="three"><i></i></label>
								</span>
								<strong>패키지 (1)</strong>
							</span>
							<span class="right">
								<span class="total">TOTAL
									<span class="price">
										<span class="dcPlus">
											<strong>450,000</strong>원
											<em class="dc">79,500<b>원</b></em>
										</span>
									</span>
								</span>
		            <button class="btnDelete">삭제</button>
							</span>
						</div>
						<div class="tls">
							<table>
								<colgroup>
									<col width="80"/>
									<col width="100"/>
									<col width="120"/>
									<col width="130"/>
									<col width="*"/>
									<col width="270"/>
									<col width="150"/>
									<col width="200"/>
								</colgroup>
								<thead>
									<tr>
										<th></th>
										<th>구분</th>
										<th>강좌번호</th>
										<th>선생님</th>
										<th>강좌명/상품명</th>
										<th>개강-종강일</th>
										<th>수강기간</th>
										<th>수강료</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<span class="checkSet noLabel">
												<input type="checkbox" id="p1" checked disabled/>
												<label for="p1"><i></i></label>
											</span>
										</td>
										<td>패키지</td>
										<td>12345</td>
										<td>장영희</td>
										<td class="tL">[21 1~2월] <em class="iSet blue">패키지</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
										<td>2021-03-01</td>
										<td>-</td>
										<td>
											<span class="price">
												<span class="origin"><del><strong>530,000</strong>원</del></span>
												<span class="dcBasic">
													<strong>450,500</strong>원<em class="dc">15<b>%</b></em>
												</span>
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<span class="checkSet noLabel">
												<input type="checkbox" id="p1" checked disabled/>
												<label for="p1"><i></i></label>
											</span>
										</td>
										<td>인강</td>
										<td>S210500002Z</td>
										<td>장영희</td>
										<td class="tL">[21 1~2월] <em class="iSet sky">단과</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
										<td>2021-03-01</td>
										<td>70일</td>
										<td>50,000원</td>
									</tr>
									<tr>
										<td>
											<span class="checkSet noLabel">
												<input type="checkbox" id="p2" checked disabled/>
												<label for="p2"><i></i></label>
											</span>
										</td>
										<td>인강</td>
										<td>S210500002Z</td>
										<td>장영희</td>
										<td class="tL">[21 1~2월] <em class="iSet sky">단과</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
										<td>2021-03-01</td>
										<td>70일</td>
										<td>50,000원</td>
									</tr>
									<tr>
										<td>
											<span class="checkSet noLabel">
												<input type="checkbox" id="p3" checked disabled/>
												<label for="p3"><i></i></label>
											</span>
										</td>
										<td>상품</td>
										<td>-</td>
										<td>-</td>
										<td class="tL">갤럭시 탭A 10.1</td>
										<td>-</td>
										<td>-</td>
										<td>330,000원</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //패키지 -->
					<!-- 상품 -->
					<div class="saleItem">
						<div class="saleItemInfo">
							<span class="left">
								<span class="checkSet noLabel">
									<input type="checkbox" id="four" />
									<label for="four"><i></i></label>
								</span>
								<strong>상품</strong>
							</span>
							<span class="right">
								<span class="total">TOTAL
									<span class="price">
										<span class="dcPlus">
											<strong>1,200,000</strong>원
											<em class="dc">120,000<b>원</b></em>
										</span>
									</span>
								</span>
		            <button class="btnDelete">삭제</button>
							</span>
						</div>
						<div class="tls wHalf">
							<table>
								<colgroup>
									<col width="80"/>
									<col width="100"/>
									<col width="*"/>
									<col width="160"/>
									<col width="160"/>
									<col width="100"/>
								</colgroup>
								<thead>
									<tr>
										<th></th>
										<th>구분</th>
										<th>상품명</th>
										<th>정가/판매가</th>
										<th>판매처</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<span class="checkSet noLabel">
												<input type="checkbox" id="pr1"/>
												<label for="pr1"><i></i></label>
											</span>
										</td>
										<td>태블릿</td>
										<td class="tL">갤럭시 탭A 10.1</td>
										<td>
											<span class="price">
												<span class="origin"><del><strong>330,000</strong>원</del></span>
												<span class="dcBasic">
													<strong>300,000</strong>원<em class="dc">10<b>%</b></em>
												</span>
											</span>
										</td>
										<td>
											<span class="selectSet">
					              <select name="" id="">
					                <option value="no" class="label">선택</option>
					                <option value="">이데아관</option>
					                <option value="">아이비관</option>
					              </select>
					            </span>
										</td>
										<td><button class="btnDelete">delete</button></td>
									</tr>
									<tr>
										<td>
											<span class="checkSet noLabel">
												<input type="checkbox" id="pr2" checked/>
												<label for="pr2"><i></i></label>
											</span>
										</td>
										<td>스마트폰</td>
										<td class="tL">갤럭시 S21 울트라</td>
										<td>
											<span class="price">
												<span class="origin"><del><strong>990,000</strong>원</del></span>
												<span class="dcBasic">
													<strong>900,000</strong>원<em class="dc">10<b>%</b></em>
												</span>
											</span>
										</td>
										<td>학원</td>
										<td><button class="btnDelete">delete</button></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //패키지 -->
				</div>
				<!-- //page layout -->
			</article>
		</div>

		<!-- Popup -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'UserSaleProduct',
	data() {
		return {
		}
	},
	methods: {
		SchoolAcademyLecture() {
			let routeData = this.$router.resolve({name: 'SchoolAcademyLecture', query: {data: "someData"}});
			window.open('/mkup/windowPopup/schAcademyLecture', '_blank', `width=1100,height=900`);
		},
		SchoolOnlineLecture() {
			let routeData = this.$router.resolve({name: 'SchoolOnlineLecture', query: {data: "someData"}});
			window.open('/mkup/windowPopup/schOnlineLecture', '_blank', `width=1100,height=900`);
		},
		SchoolBookIdea() {
			let routeData = this.$router.resolve({name: 'SchoolBookIdea', query: {data: "someData"}});
			window.open('/mkup/windowPopup/schBookIdea', '_blank', `width=1100,height=900`);
		},
		SchoolBookIvy() {
			let routeData = this.$router.resolve({name: 'SchoolBookIvy', query: {data: "someData"}});
			window.open('/mkup/windowPopup/schBookIvy', '_blank', `width=1100,height=900`);
		},
		SchoolGoodsSearch() {
			let routeData = this.$router.resolve({name: 'SchoolGoodsSearch', query: {data: "someData"}});
			window.open('/mkup/windowPopup/schGoodsSearch', '_blank', `width=1100,height=900`);
		},
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
