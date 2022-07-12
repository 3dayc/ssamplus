<template lang="html">
	<div>
		<div class="goodsMgtView">
			<!-- 학습기기 기본정보 -->
			<div class="subTit cpRight">
				<h3>학습기기 기본정보</h3>
				<div class="grayBgBox">
					<span class="checkSet">
						<input type="checkbox" id="goodsNew" checked/>
						<label for="goodsNew"><i></i>New</label>
					</span>
					<span class="checkSet">
						<input type="checkbox" id="goodsBest"/>
						<label for="goodsBest"><i></i>BEST</label>
					</span>
				</div>
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
							<td><input type="text" value="갤럭시 북 FLEX 알파"/></td>
							<th>사이트 노출</th>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="toggle" checked>
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
									<input type="radio" name="goodsType" checked @change="goodsType = 1" disabled/>
									<label for=""><i></i>노트북</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="goodsType" @change="goodsType = 1" disabled/>
									<label for=""><i></i>태블릿</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="goodsType" @change="goodsType = 1" disabled/>
									<label for=""><i></i>스마트폰</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="goodsType" @change="goodsType = 2" disabled/>
									<label for=""><i></i>기타</label>
								</span>
							</td>
							<th>학습기기 코드</th>
							<td>e1521a00002</td>
						</tr>
						<tr>
							<th>제조사 <sup>필수</sup></th>
							<td><input type="text" class="wHalf" value="삼성전자"/></td>
							<th>학습기기 사진 <sup>필수</sup></th>
							<td colspan="3">
								<span class="uploadFileSet">
									<span class="uploadFile">
										<input type="file" id="file" class="addFile upFile" @change="fileUpload">
										<span class="upload-name">
											{{ fileName }}
										</span>
										<label for="file">불러오기</label>
									</span>
									<button class="btnS" @click="popupTrigger = true">미리보기</button>
								</span>
							</td>
						</tr>
						<tr>
							<th>최소 보유수량 <sup>필수</sup></th>
							<td>
								<input type="text" class="w70 mr5 tR" value="10">개
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
								<textarea rows="4">에디터가 나올 영역입니다</textarea>
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
			<!-- 학습기기 판매정보 -->
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
								<span class="unit"><input type="text" value="1,990,000"><em>원</em></span>
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
                      <span>( 배송처: 북센 )</span>
										</li>
										<li class="mt10">
											<span class="checkSet w100">
				                <input type="checkbox" id="sale02" name="academy"/>
				                <label for="sale02"><i></i>학원</label>
				              </span>
                      <span>( 배송처: <input type="text" class="w150" value="KT 상암센터"> )</span>
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
											<span v-if="sale01Detail">
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
											<span v-if="sale02Detail">
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
											<span v-if="sale03Detail">
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
										<option value="retention" selected>판매중</option>
										<option>판매종료</option>
									</select>
								</span>
							</td>
						</tr>
						<tr>
							<th>배송비 <sup>필수</sup></th>
							<td>
								<span class="radioSet mg0">
									<input type="radio" name="feeType" checked />
									<label for=""><i></i>유료 (</label>
								</span>
								<span class="unit w100 ml5">
									<input type="text" value="3,000" class="tR">
									<em>원</em>
								</span> )
								<span class="radioSet ml20">
									<input type="radio" name="feeType" />
									<label for=""><i></i>무료</label>
								</span>
							</td>
						</tr>
						<tr>
							<th>구매권한</th>
							<td colspan="3">
								<button class="btnS line" @click="LectureMemberAuthDevice()">회원권한</button>
								<div class="tls discountList mt10">
									<table>
										<colgroup>
											<col width="160">
											<col width="260">
											<col width="160">
											<col width="160">
											<col width="160">
										</colgroup>
										<thead>
											<tr>
												<th>구분</th>
												<th>대상</th>
												<th>할인율</th>
												<th>할인금액</th>
												<th>본 학습기기 실결제금액</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>회원</td>
												<td class="tL">일반회원</td>
												<td>10%</td>
												<td>20,000</td>
												<td>180,000</td>
											</tr>
											<tr>
												<td>회원</td>
												<td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
												<td>10%</td>
												<td>20,000</td>
												<td>180,000</td>
											</tr>
										</tbody>
									</table>
								</div>
							</td>
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
							<col width="150"/>
						</colgroup>
						<thead>
							<tr>
								<th>구분</th>
								<th>재고</th>
								<th>입/출고 관리<br><em>* 등록 시에는 입고 수량만 입력 가능합니다</em></th>
								<th>입/출고 수량</th>
								<th>저장</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>온라인</td>
								<td class="fBlue">200</td>
								<td class="tL">
									<span @change="inOutChange">
										<span class="radioSet">
				              <input type="radio" id="onlineInOut1Dvc" name="onlineInOutDvc" checked/>
				              <label for="onlineInOut1Dvc"><i></i>입고</label>
				            </span>
										<span class="radioSet">
				              <input type="radio" id="onlineInOut2Dvc" name="onlineInOutDvc"/>
				              <label for="onlineInOut2Dvc"><i></i>출고 (기타)</label>
				            </span>
									</span>
								</td>
								<td v-if="onlineMovingInDvc">
									+ <input type="text" class="w70 ml5" placeholder="입고량"/>
								</td>
								<td v-if="onlineMovingOutDvc">- <input type="text" class="w70 ml5" placeholder="출고량"/></td>
								<td><button class="btnS">저장</button></td>
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
							<col width="150"/>
						</colgroup>
						<thead>
							<tr>
								<th>구분</th>
								<th>재고</th>
								<th>입/출고 관리<br><em>* 등록 시에는 입고 수량만 입력 가능합니다</em></th>
								<th>입/출고 수량</th>
								<th>저장</th>
							</tr>
						</thead>
						<tbody>
							<tr v-if="sale01Detail">
								<td>온라인</td>
								<td class="fBlue">200</td>
								<td class="tL" @change="inOutChange">
									<span class="radioSet">
							      <input type="radio" id="onlineInOut1" name="onlineInOut" checked/>
							      <label for="onlineInOut1"><i></i>입고</label>
							    </span>
									<span class="radioSet">
							      <input type="radio" id="onlineInOut2" name="onlineInOut"/>
							      <label for="onlineInOut2"><i></i>출고 (기타)</label>
							    </span>
									<span class="radioSet">
							      <input type="radio" id="onlineInOut3" name="onlineInOut"/>
							      <label for="onlineInOut3"><i></i>출고 (이동)</label>
							    </span>
								</td>
								<td v-if="onlineMovingIn">
									+ <input type="text" class="w70 mr10 ml5" placeholder="입고량"/>
									<span class="checkSet">
										<input type="checkbox" id="ungjin1"/>
										<label for="ungjin1"><i></i>웅진</label>
									</span>
								</td>
								<td v-if="onlineMovingOut">- <input type="text" class="w70 ml5" placeholder="출고량"/></td>
								<td v-if="onlineMovingInOut">
									- <input type="text" class="w70 mrl5" placeholder="출고량"/>
									<span class="selectSet">
										<select>
											<option value="no" class="label">입고처</option>
										<option value="">아데아관</option>
										<option value="">아이비관</option>
										</select>
									</span>
								</td>
								<td><button class="btnS">저장</button></td>
							</tr>
							<tr v-if="sale02Detail">
								<td>이데아관</td>
								<td class="fBlue">200</td>
								<td class="tL" @change="inOutChange">
									<span class="radioSet">
						        <input type="radio" id="ideaInOut1" name="ideaInOut" checked/>
						        <label for="ideaInOut1"><i></i>입고</label>
						      </span>
									<span class="radioSet">
						        <input type="radio" id="ideaInOut2" name="ideaInOut"/>
						        <label for="ideaInOut2"><i></i>출고 (기타)</label>
						      </span>
									<span class="radioSet">
						        <input type="radio" id="ideaInOut3" name="ideaInOut"/>
						        <label for="ideaInOut3"><i></i>출고 (이동)</label>
						      </span>
								</td>
								<td v-if="ideaMovingIn">
									+ <input type="text" class="w70 mr10 ml5" placeholder="입고량"/>
									<span class="checkSet">
										<input type="checkbox" id="ungjin2"/>
										<label for="ungjin2"><i></i>웅진</label>
									</span>
								</td>
								<td v-if="ideaMovingOut">- <input type="text" class="w70 ml5" placeholder="출고량"/></td>
								<td v-if="ideaMovingInOut">
									- <input type="text" class="w70 mrl5" placeholder="출고량"/>
									<span class="selectSet">
										<select>
											<option value="no" class="label">입고처</option>
											<option value="">온라인</option>
											<option value="">아이비관</option>
										</select>
									</span>
								</td>
								<td><button class="btnS">저장</button></td>
							</tr>
							<tr v-if="sale03Detail">
								<td>아이비관</td>
								<td class="fBlue">200</td>
								<td class="tL" @change="inOutChange">
									<span class="radioSet">
						        <input type="radio" id="ivyInOut1" name="ivyInOut" checked/>
						        <label for="ivyInOut1"><i></i>입고</label>
						      </span>
									<span class="radioSet">
						        <input type="radio" id="ivyInOut2" name="ivyInOut"/>
						        <label for="ivyInOut2"><i></i>출고 (기타)</label>
						      </span>
									<span class="radioSet">
						        <input type="radio" id="ivyInOut3" name="ivyInOut"/>
						        <label for="ivyInOut3"><i></i>출고 (이동)</label>
						      </span>
								</td>
								<td v-if="ivyMovingIn">
									+ <input type="text" class="w70 mr10 ml5" placeholder="입고량"/>
									<span class="checkSet">
										<input type="checkbox" id="ungjin3"/>
										<label for="ungjin3"><i></i>웅진</label>
									</span>
								</td>
								<td v-if="ivyMovingOut">- <input type="text" class="w70 ml5" placeholder="출고량"/></td>
								<td v-if="ivyMovingInOut">
									- <input type="text" class="w70 mrl5" placeholder="출고량"/>
									<span class="selectSet">
										<select>
											<option value="no" class="label">입고처</option>
											<option value="">온라인</option>
											<option value="">이데아관</option>
										</select>
									</span>
								</td>
								<td><button class="btnS">저장</button></td>
							</tr>
						</tbody>
					</table>
				</div>
			</template>
			<!-- //학습기기 입/출고 -->
			<!-- 관리 -->
			<div class="subTit mt10"><h3>관리</h3></div>
			<div class="tvs record">
				<table>
					<colgroup>
						<col width="160"/>
						<col width="*"/>
					</colgroup>
					<tbody>
						<tr>
							<th>비고</th>
							<td>
								<span class="ipBtn sizeM">
									<input type="text" />
									<button class="btnM line">저장</button>
								</span>
								<ul class="recordList">
									<li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 제휴기간 만료 예정이므로 제휴 갱신 여부 확인 차 담당자에게 연락했으나, 부재중이었음 <button class="btnDelete">삭제</button></li>
									<li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 파일 업로드 통해 제휴회원을 등록함 <button class="btnDelete">삭제</button></li>
								</ul>
							</td>
						</tr>
						<tr>
							<th>수정 이력</th>
							<td>
								<ul class="recordList">
									<li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 수정 </li>
									<li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 등록 </li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- //관리 -->
		</div>

		<!-- Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
				신규 교재 등록이 취소됩니다. <br/>실행 하시겠습니까?
      </template>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger = false">아니오</button>
        <button class="btnM green" @click="alertTrigger = false">예</button>
      </template>
    </Alert>
		<!-- 교재 미리보기 -->
		<Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="popClass">
			<h1 slot="modalheader" class="tC" >학습기기 사진 미리보기</h1>
			<div slot="modalbody">
				<div class="imgbox">
					<img img :src="require(`@/assets/images/img_view_sample.png`)" alt="교재"/> <!--txtBook-->
				</div>
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
  name: 'DeviceMgtViewInfo',
	data() {
			return {
				alertTrigger: false,
				popupTrigger: false,
				retentionTrigger: true,
				popClass: 'textBookPop',
				fileName: '갤럭시 북 FLEX 알파_대표 이미지,png',
				sale01Detail: true,
				sale02Detail: true,
				sale03Detail: false,
				goodsType: 1,
				onlineMovingIn: true,
				onlineMovingOut: false,
				onlineMovingInOut: false,
				onlineMovingInDvc: true,
				onlineMovingOutDvc: false,
				ideaMovingIn: true,
				ideaMovingOut: false,
				ideaMovingInOut: false,
				ivyMovingIn: true,
				ivyMovingOut: false,
				ivyMovingInOut: false,
			}
	},
	methods: {
		fileUpload(event) {
			this.fileName = event.target.value;
      let upFile = document.getElementsByClassName('addFile')[0];
      upFile.classList.add('upFile');
		},
		onChange(event) {
			this.retentionTrigger = false;
			let value = event.target.value;
			if (value == 'retention') this.retentionTrigger = true;
		},
    LectureMemberAuthDevice() {
      let routeData = this.$router.resolve({name: 'LectureMemberAuthDevice', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceMmrAuthDevice', '_blank', `width=1100,height=900`);
    },
		inOutChange(event) {
			let id = event.target.id;
				if (id == 'onlineInOut1') {
				this.onlineMovingIn = true;
				this.onlineMovingOut = false;
				this.onlineMovingInOut = false;
			}
			else if (id == 'onlineInOut2') {
				this.onlineMovingIn = false;
				this.onlineMovingOut = true;
				this.onlineMovingInOut = false;
			} 
			else if (id == 'onlineInOut3') {
				this.onlineMovingIn = false;
				this.onlineMovingOut = false;
				this.onlineMovingInOut = true;
			}
			else if (id == 'ideaInOut1') {
				this.ideaMovingIn = true;
				this.ideaMovingOut = false;
				this.ideaMovingInOut = false;
			}
			else if (id == 'ideaInOut2') {
				this.ideaMovingIn = false;
				this.ideaMovingOut = true;
				this.ideaMovingInOut = false;
			} 
			else if (id == 'ideaInOut3') {
				this.ideaMovingIn = false;
				this.ideaMovingOut = false;
				this.ideaMovingInOut = true;
			}
			else if (id == 'ivyInOut1') {
				this.ivyMovingIn = true;
				this.ivyMovingOut = false;
				this.ivyMovingInOut = false;
			}
			else if (id == 'ivyInOut2') {
				this.ivyMovingIn = false;
				this.ivyMovingOut = true;
				this.ivyMovingInOut = false;
			} 
			else if (id == 'ivyInOut3') {
				this.ivyMovingIn = false;
				this.ivyMovingOut = false;
				this.ivyMovingInOut = true;
			}
			else if (id == 'onlineInOut1Dvc') {
				this.onlineMovingInDvc = true;
				this.onlineMovingOutDvc = false;
			}
			else if (id == 'onlineInOut2Dvc') {
				this.onlineMovingInDvc = false;
				this.onlineMovingOutDvc = true;
			}
		}
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
