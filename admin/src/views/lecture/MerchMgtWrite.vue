<template lang="html">
	<div>
		<div class="pageTit">
			<h2>굿즈 등록/현황</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/merchMgt">굿즈 관리</router-link><router-link to="/mkup/lecture/merchMgt">굿즈 등록/현황</router-link><em>신규등록</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="merchMgtWrite">
					<!-- 굿즈 기본정보 -->
		      <div class="subTit cpRight">
						<h3>굿즈 기본정보</h3>
						<div class="grayBgBox">
              <span class="checkSet">
                <input type="checkbox" id="bookNew"/>
                <label for="bookNew"><i></i>New</label>
              </span>
            </div>
						<span class="right">
							<button class="btnM green" @click="toastPop('error', '필수 항목 및 입력 형식을 확인해주세요.')">저장</button>
							<router-link to="/mkup/lecture/merchMgt" class="btnM ml10">취소</router-link>
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
									<th>굿즈명 <sup>필수</sup></th>
									<td><input type="text"/></td>
									<th>사이트 노출</th>
									<td>
	                  <span class="labelToggleSet">
	                    <input type="checkbox" id="siteView">
	                    <label for="siteView">
	                      <span>숨김</span>
	                      <span>노출</span>
	                    </label>
	                  </span>
									</td>
								</tr>
								<tr>
									<th>굿즈분류 <sup>필수</sup></th>
									<td>
										<span class="radioSet">
				              <input type="radio" name="radio1" checked />
				              <label for=""><i></i>패브릭</label>
				            </span>
				            <span class="radioSet">
				              <input type="radio" name="radio1" />
				              <label for=""><i></i>문구</label>
				            </span>
                    <span class="radioSet">
				              <input type="radio" name="radio1" />
				              <label for=""><i></i>기타(굿즈)</label>
				            </span>
									</td>
									<th>굿즈 코드</th>
									<td class="fGreen">* 신규 등록 후 생성됩니다</td>
								</tr>
								<tr>
									<th>굿즈 사진 <sup>필수</sup></th>
									<td colspan="3">
										<span class="uploadFileSet">
				              <span class="uploadFile">
				                <input type="file" id="file" class="addFile" @change="fileUpload" >
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
										<input type="text" class="w70 mr5 tR">개
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
										<div class="countSet fullStyle">
											<textarea rows="4"></textarea>
											<span class="fGreen">* 네 줄 까지만 입력해주세요</span>
										</div>
									</td>
								</tr>
								<tr>
									<th>굿즈 소개</th>
									<td colspan="3">
										<div class="countSet fullStyle">
											<textarea rows="4">에디터가 들어갈 영역입니다.</textarea>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //굿즈 기본정보 -->
					<!-- 굿즈 판매정보 -->
		      <div class="subTit mt10"><h3>굿즈 판매정보</h3></div>
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
									<th>정가 <sup>필수</sup></th>
									<td colspan="3">
										<span class="unit"><input type="text"><em>원</em></span>
									</td>
								</tr>
								<tr @change="onChange">
									<th rowspan="2">판매/배송처 <sup>필수</sup></th>
									<td rowspan="2">
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
									</td>
									<th>판매 상태<sup>필수</sup></th>
									<td>
										<span class="selectSet">
											<select id="saleStatus">
	                      <option value="no" class="label">선택</option>
												<option value="schedule">판매예정</option>
												<option value="retention">판매중</option>
												<option>판매종료</option>
											</select>
										</span>
									</td>
								</tr>
								<tr>
									<th>배송비<sup>필수</sup></th>
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
									<th>구매권한<sup>필수</sup></th>
									<td colspan="3"><p class="infoMsg fGreen">* 상품 등록 후 구매권한을 설정해주세요</p></td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //굿즈 판매정보 -->
					<!-- 굿즈 입/출고 -->
					<template v-if="retentionTrigger">
						<div class="subTit mt10">
							<h3>굿즈 입/출고</h3>
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
					              <input type="radio" id="onlineInOut1" name="onlineInOut" checked/>
					              <label for="onlineInOut1"><i></i>입고</label>
					            </span>
											<span class="radioSet">
					              <input type="radio" id="onlineInOut2" name="onlineInOut" disabled/>
					              <label for="onlineInOut2"><i></i>출고 (기타)</label>
					            </span>
										</td>
										<td>+ <input type="text" class="w70 ml10" placeholder="입고량"/></td>
									</tr>
								</tbody>
							</table>
						</div>
					</template>
					<!-- //굿즈 입/출고 -->
				</div>
				<!-- //page layout -->
			</article>
		</div>

		<!-- Popup -->
		<!-- 굿즈 미리보기 -->
		<Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="popClass">
			<h1 slot="modalheader" class="tC" >굿즈 사진 미리보기</h1>
			<div slot="modalbody">
				<img img :src="require(`@/assets/images/txtBook.png`)" alt="굿즈"/>
				<span class="bookTxt">사이즈: 80 * 109</span>
			</div>
			<div slot="modalfooter" class="modalfooter"></div>
		</Popup>
		<!-- //굿즈 미리보기 -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'MerchMgtWrite',
	data() {
		return {
			popupTrigger: false,
			retentionTrigger: false,
			popClass: 'textBookPop',
      date: '',
			fileName: 'jpg, png로 첨부',
			noFiles: true,
      urlLeftBanner01: 'player',
		}
	},
	methods: {
		fileUpload(event) {
			this.fileName = event.target.value;
			this.noFiles = !event.target.files.length;
			let upFile = document.getElementsByClassName('addFile')[0];
      upFile.classList.add('upFile');
		},
		onChange(event) {
			let online = document.getElementById('sale01').checked;
			let academy = document.getElementById('sale02').checked;
			let saleStatus = document.getElementById('saleStatus').value;
			if((online == true && saleStatus == 'retention') && academy == false){
				this.retentionTrigger = true;
			} else{
				this.retentionTrigger = false;
			}
		},
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
