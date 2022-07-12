<template lang="html">
	<div>
		<div class="pageTit">
			<h2>학습기기 등록/현황</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/deviceMgt">학습기기 관리</router-link><router-link to="/mkup/lecture/deviceMgt">학습기기 등록/현황</router-link><em>신규등록</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="goodsMgtWrite">
					<!-- 학습기기 기본정보 -->
		      <div class="subTit cpRight">
						<h3>학습기기 기본정보</h3>
						<div class="grayBgBox">
							<span class="checkSet">
								<input type="checkbox" id="goodsNew"/>
								<label for="goodsNew"><i></i>New</label>
							</span>
							<span class="checkSet">
								<input type="checkbox" id="goodsBest"/>
								<label for="goodsBest"><i></i>BEST</label>
							</span>
						</div>
						<span class="right">
							<router-link to="/mkup/lecture/deviceMgt/view" class="btnM green">저장</router-link>
							<router-link to="/mkup/lecture/deviceMgt" class="btnM ml10">취소</router-link>
						</span>
					</div>
					<div class="tvs">
						<table>
							<colgroup>
								<col width="160"/>
								<col width="40%"/>
								<col width="160"/>
								<col width="*"/>
							</colgroup>
							<tbody>
								<tr>
									<th>학습기기 명 <sup>필수</sup></th>
									<td><input type="text"/></td>
									<th>사이트 노출</th>
									<td>
	                  <span class="labelToggleSet">
	                    <input type="checkbox" id="toggle" >
	                    <label for="toggle">
	                      <span>숨김</span>
	                      <span>노출</span>
	                    </label>
	                  </span>
									</td>
								</tr>
								<tr>
									<th>학습기기 분류 <sup>필수</sup></th>
									<td>
										<span class="radioSet">
                      <input type="radio" name="goodsType" checked @change="goodsType = 1"/>
                      <label for=""><i></i>노트북</label>
                    </span>
										<span class="radioSet">
                      <input type="radio" name="goodsType" @change="goodsType = 1"/>
                      <label for=""><i></i>태블릿</label>
                    </span>
										<span class="radioSet">
                      <input type="radio" name="goodsType" @change="goodsType = 1"/>
                      <label for=""><i></i>스마트폰</label>
                    </span>
										<span class="radioSet">
                      <input type="radio" name="goodsType" @change="goodsType = 2"/>
                      <label for=""><i></i>기타</label>
                    </span>
									</td>
									<th>학습기기 코드</th>
									<td><p class="infoMsg fGreen">* 신규 등록 후 생성됩니다</p></td>
								</tr>
								<tr>
									<th>제조사 <sup>필수</sup></th>
									<td><input type="text"/></td>
									<th>학습기기 사진 <sup>필수</sup></th>
									<td colspan="3">
										<span class="uploadFileSet">
				              <span class="uploadFile">
				                <input type="file" id="file" class="addFile" @change="fileUpload">
				                <span class="upload-name">
				                  {{ fileName }}
				                </span>
				                <label for="file">불러오기</label>
				              </span>
				              <button class="btnS" @click="popupTrigger = true" :disabled="noFiles == true">미리보기</button>
				            </span>
									</td>
								</tr>
								<tr>
									<th>최소 보유수량 <sup>필수</sup></th>
									<td>
										<input type="text" class="w70 mr5 tR">권
										<p class="infoMsg fGreen inBlock ml10">* 수량 미달 시 주문 필요 상태로 자동 변경</p>
									</td>
									<th>담당자 <sup>필수</sup></th>
									<td>
										<span class="selectSet ml5 w100">
											<select class="" name="">
			                  <option value="no" class="label">선택1</option>
											</select>
										</span>
										<span class="selectSet ml5 w100">
											<select class="" name="">
			                  <option value="no" class="label">선택2</option>
											</select>
										</span>
									</td>
								</tr>
								<tr>
									<th>간단 소개 <sup>필수</sup></th>
									<td colspan="3">
										<textarea rows="3"></textarea>
										<p class="infoMsg mt5 fGreen">* 네 줄까지만 입력해주세요.</p>
									</td>
								</tr>
								<tr>
									<th>학습기기 소개 <sup>필수</sup></th>
									<td colspan="3">
										<textarea rows="4">에디터가 나올 영역입니다</textarea>
									</td>
								</tr>
								<tr>
									<th>스펙</th>
									<td colspan="3">
										<textarea rows="4">에디터가 나올 영역입니다</textarea>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //학습기기 기본정보 -->
					<!-- 학습기기	판매정보 -->
					<div class="subTit">
						<h3>학습기기 판매정보</h3>
					</div>
					<div class="tvs">
						<table>
							<colgroup>
								<col width="160">
								<col width="40%">
								<col width="160">
								<col width="*">
							</colgroup>
							<thead>
								<tr>
									<th>정가 <sup>필수</sup></th>
									<td colspan="3">
										<span class="unit"><input type="text"><em>원</em></span>
									</td>
								</tr>
								<tr>
									<th rowspan="2">판매/배송처 <sup>필수</sup></th>
									<td rowspan="2">
										<template v-if="goodsType == 1">
										<ul>
											<li>
												<span class="checkSet w100">
				                  <input type="checkbox" id="sale01" name="online"/>
				                  <label for="sale01"><i></i>온라인</label>
				                </span>
                        <span>( 배송처: <input type="text" class="w150"> )</span>
											</li>
											<li class="mt10">
												<span class="checkSet w100">
				                  <input type="checkbox" id="sale02" name="academy"/>
				                  <label for="sale02"><i></i>학원</label>
				                </span>
                        <span>( 배송처: <input type="text" class="w150"> )</span>
											</li>
										</ul>
										</template>
										<template v-if="goodsType == 2">
											<ul>
												<li>
													<span class="checkSet w100">
														<input type="checkbox" id="sale01" v-model="sale01Detail"/>
														<label for="sale01"><i></i>온라인</label>
													</span>
													<span v-show="sale01Detail">
														<em class="fGray mr10 vMiddle">배송처 :</em>
														<span class="radioSet">
															<input type="radio" id="sale01Detail1" name="sale01Detail" checked/>
															<label for="sale01Detail1"><i></i>북센</label>
														</span>
														<span class="radioSet">
															<input type="radio" id="sale01Detail2" name="sale01Detail"/>
															<label for="sale01Detail2"><i></i>이데아관</label>
														</span>
														<span class="radioSet">
															<input type="radio" id="sale01Detail3" name="sale01Detail"/>
															<label for="sale01Detail3"><i></i>아이비관</label>
														</span>
													</span>
												</li>
												<li class="mt10">
													<span class="checkSet w100">
														<input type="checkbox" id="sale02" v-model="sale02Detail"/>
														<label for="sale02"><i></i>이데아관</label>
													</span>
													<span v-show="sale02Detail">
														<em class="fGray mr10 vMiddle">배송처 :</em>
														<span class="radioSet">
															<input type="radio" id="sale02Detail1" name="sale02Detail"/>
															<label for="sale02Detail1"><i></i>북센</label>
														</span>
														<span class="radioSet">
															<input type="radio" id="sale02Detail2" name="sale02Detail" checked/>
															<label for="sale02Detail2"><i></i>이데아관</label>
														</span>
														<span class="radioSet">
															<input type="radio" id="sale02Detail3" name="sale02Detail"/>
															<label for="sale02Detail3"><i></i>아이비관</label>
														</span>
													</span>
												</li>
												<li class="mt10">
													<span class="checkSet w100">
														<input type="checkbox" id="sale03" v-model="sale03Detail"/>
														<label for="sale03"><i></i>아이비관</label>
													</span>
													<span v-show="sale03Detail">
														<em class="fGray mr10 vMiddle">배송처 :</em>
														<span class="radioSet">
															<input type="radio" id="sale03Detail1" name="sale03Detail"/>
															<label for="sale03Detail1"><i></i>북센</label>
														</span>
														<span class="radioSet">
															<input type="radio" id="sale03Detail2" name="sale03Detail"/>
															<label for="sale03Detail2"><i></i>이데아관</label>
														</span>
														<span class="radioSet">
															<input type="radio" id="sale03Detail3" name="sale03Detail" checked/>
															<label for="sale03Detail3"><i></i>아이비관</label>
														</span>
													</span>
												</li>
											</ul>
										</template>
									</td>
									<th>판매 상태 <sup>필수</sup></th>
									<td>
										<span class="selectSet">
											<select @change="onChange">
	                      <option value="no" class="label">선택</option>
												<option value="schedule">발간예정</option>
												<option value="retention">판매중</option>
												<option>판매종료</option>
											</select>
										</span>
									</td>
								</tr>
								<tr>
									<th>배송비 <sup>필수</sup></th>
									<td>
										<span class="radioSet mg0">
											<input type="radio" name="feeType" />
											<label for=""><i></i>유료</label>
										</span>
										<span class="unit w100 ml5">
											<input type="text" value="3,000" class="tR">
											<em>원</em>
										</span>
										<span class="radioSet ml20">
											<input type="radio" name="feeType" />
											<label for=""><i></i>무료</label>
										</span>
									</td>
								</tr>
								<tr>
									<th>구매권한</th>
									<td colspan="3"><p class="infoMsg fGreen">* 상품 등록 후 구매권한을 설정해주세요</p></td>
								</tr>
							</thead>
						</table>
					</div>
					<!-- //학습기기 판매정보 -->
					<!-- 학습기기 입/출고 -->
					<template v-if="retentionTrigger && goodsType === 1">
						<div class="subTit mt10">
							<h3>학습기기 입/출고</h3>
						</div>
						<div class="tls w60p">
							<table>
								<colgroup>
									<col width="120"/>
									<col width="100"/>
									<col width="*"/>
									<col width="200"/>
								</colgroup>
								<thead>
									<tr>
										<th>구분</th>
										<th>재고</th>
										<th>입/출고 관리<br><em>* 등록 시에는 입고 수량만 입력 가능합니다</em></th>
										<th>입/출고 수량</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>온라인</td>
										<td>-</td>
										<td class="tL">
											<span class="radioSet">
					              <input type="radio" id="onlineInOut1Dvc" name="onlineInOutDvc" checked/>
					              <label for="onlineInOut1Dvc"><i></i>입고</label>
					            </span>
											<span class="radioSet">
					              <input type="radio" id="onlineInOut2Dvc" name="onlineInOutDvc" disabled/>
					              <label for="onlineInOut2Dvc"><i></i>출고 (기타)</label>
					            </span>
										</td>
										<td>+ <input type="text" class="w70 ml10" placeholder="입고량"/></td>
									</tr>
								</tbody>
							</table>
						</div>
					</template>
					<template v-if="retentionTrigger && goodsType === 2">
						<div class="subTit mt10">
							<h3>학습기기 입/출고</h3>
						</div>
						<div class="tls w60p">
							<table>
								<colgroup>
									<col width="120"/>
									<col width="100"/>
									<col width="*"/>
									<col width="200"/>
								</colgroup>
								<thead>
									<tr>
										<th>구분</th>
										<th>재고</th>
										<th>입/출고 관리<br><em>* 교재 등록 시에는 입고 수량만 입력 가능합니다</em></th>
										<th>입/출고 수량</th>
									</tr>
								</thead>
								<tbody>
									<tr v-show="sale01Detail">
										<td>온라인</td>
										<td>-</td>
										<td class="tL">
											<span class="radioSet">
					              <input type="radio" id="onlineInOut1" name="onlineInOut" checked/>
					              <label for="onlineInOut1"><i></i>입고</label>
					            </span>
											<span class="radioSet">
					              <input type="radio" id="onlineInOut2" name="onlineInOut" disabled/>
					              <label for="onlineInOut2"><i></i>출고 (기타)</label>
					            </span>
											<span class="radioSet">
					              <input type="radio" id="onlineInOut3" name="onlineInOut" disabled/>
					              <label for="onlineInOut3"><i></i>출고 (이동)</label>
					            </span>
										</td>
										<td>+ <input type="text" class="w70 ml10" placeholder="입고량"/></td>
									</tr>
									<tr v-show="sale02Detail">
										<td>이데아관</td>
										<td>-</td>
										<td class="tL">
											<span class="radioSet">
					              <input type="radio" id="ideaInOut1" name="ideaInOut" checked/>
					              <label for="ideaInOut1"><i></i>입고</label>
					            </span>
											<span class="radioSet">
					              <input type="radio" id="ideaInOut2" name="ideaInOut" disabled/>
					              <label for="ideaInOut2"><i></i>출고 (기타)</label>
					            </span>
											<span class="radioSet">
					              <input type="radio" id="ideaInOut3" name="ideaInOut" disabled/>
					              <label for="ideaInOut3"><i></i>출고 (이동)</label>
					            </span>
										</td>
										<td>+ <input type="text" class="w70 ml10" placeholder="입고량"/></td>
									</tr>
									<tr v-show="sale03Detail">
										<td>아이비관</td>
										<td>-</td>
										<td class="tL">
											<span class="radioSet">
					              <input type="radio" id="ivyInOut1" name="ivyInOut" checked/>
					              <label for="ivyInOut1"><i></i>입고</label>
					            </span>
											<span class="radioSet">
					              <input type="radio" id="ivyInOut2" name="ivyInOut" disabled/>
					              <label for="ivyInOut2"><i></i>출고 (기타)</label>
					            </span>
											<span class="radioSet">
					              <input type="radio" id="ivyInOut3" name="ivyInOut" disabled/>
					              <label for="ivyInOut3"><i></i>출고 (이동)</label>
					            </span>
										</td>
										<td>+ <input type="text" class="w70 ml10" placeholder="입고량"/></td>
									</tr>
								</tbody>
							</table>
						</div>
					</template>
					<!-- //학습기기 입/출고 -->
				</div>
				<!-- //page layout -->
			</article>
		</div>

		<!-- Popup -->
		<!-- 교재 미리보기 -->
		<Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="popClass">
			<h1 slot="modalheader" class="tC" >학습기기 사진 미리보기</h1>
			<div slot="modalbody">
				<img img :src="require(`@/assets/images/txtBook.png`)" alt="상품"/>
				<span class="bookTxt">사이즈: 80 * 109</span>
			</div>
			<div slot="modalfooter" class="modalfooter"></div>
		</Popup>
		<!-- //교재 미리보기 -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'GoodsMgtWrite',
	data() {
			return {
				popupTrigger: false,
				retentionTrigger: false,
				popClass: 'textBookPop',
				fileName: 'jpg, png로 첨부',
				noFiles: true,
				sale01Detail: true,
				sale02Detail: true,
				sale03Detail: false,
				sellOnline: true,
				sellAcam: true,
				goodsType: 1,
				// stockSts: '',
			}
	},
	methods: {
		onChange(event) {
			this.retentionTrigger = false;
			let value = event.target.value;
			if (value == 'retention') this.retentionTrigger = true;
		},
		fileUpload(event) {
			this.fileName = event.target.value;
			this.noFiles = !event.target.files.length;
      let upFile = document.getElementsByClassName('addFile')[0];
      upFile.classList.add('upFile');
		},
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
