<template lang="html">
	<div class="bookMgtView">
		<!-- 굿즈 기본정보 -->
		<div class="subTit cpRight">
			<h3>굿즈 기본정보</h3>
			<div class="grayBgBox">
				<span class="checkSet">
					<input type="checkbox" id="bookNew" checked/>
					<label for="bookNew"><i></i>New</label>
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
						<th>굿즈명 <sup>필수</sup></th>
						<td><input type="text" value="다노 밸런스 쿠션"/></td>
						<th>사이트 노출</th>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="siteView" checked>
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
								<input type="radio" name="radio1" checked disabled/>
								<label for=""><i></i>패브릭</label>
							</span>
							<span class="radioSet">
								<input type="radio" name="radio1" disabled/>
								<label for=""><i></i>문구</label>
							</span>
              <span class="radioSet">
								<input type="radio" name="radio1" disabled/>
								<label for=""><i></i>기타(굿즈)</label>
							</span>
						</td>
						<th>굿즈코드</th>
						<td>g1521e00002</td>
					</tr>
					<tr>
						<th>굿즈 사진 <sup>필수</sup></th>
						<td colspan="3">
							<span class="uploadFileSet">
								<span class="uploadFile">
									<input type="file" id="file" class="addFile upFile" @change="fileUpload">
									<span class="upload-name">
										{{ fileName }}
									</span>
									<label for="file">불러오기</label>
								</span>
								<button class="btnS" @click="popupTrigger = true">미리보기</button><!--@click="popupTrigger = true, scrollHiden($event)" :disabled="noFiles == true"-->
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
							<span class="unit"><input type="text" value="49,000"><em>원</em></span>
						</td>
					</tr>
					<tr @change="onChange">
						<th rowspan="2">판매/배송처 <sup>필수</sup></th>
						<td rowspan="2">
							<ul>
								<li>
									<span class="checkSet w100">
				            <input type="checkbox" id="sale01" name="online" checked/>
				            <label for="sale01"><i></i>온라인</label>
				          </span>
                  <span>( 배송처: <input type="text" class="w150" value="아트박스몰"> )</span>
								</li>
								<li class="mt10">
									<span class="checkSet w100">
				            <input type="checkbox" id="sale02" name="academy"/>
				            <label for="sale02"><i></i>학원</label>
				          </span>
                  <span>( 배송처: <input type="text" class="w150" value="아트박스 노량진점"> )</span>
								</li>
							</ul>
						</td>
						<th>판매 상태 <sup>필수</sup></th>
						<td>
							<span class="selectSet">
								<select id="saleStatus">
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
								<input type="radio" name="feeType" checked/>
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
						<th>구매권한 <sup>필수</sup></th>
						<td colspan="3">
							<button class="btnS line" @click="LectureUserChoiceMerch()">회원권한</button>
							<div class="tls discountList mt10">
								<table>
									<colgroup>
										<col width="160"/>
										<col width="260"/>
										<col width="160"/>
										<col width="160"/>
										<col width="160"/>
									</colgroup>
									<thead>
										<tr>
											<th>구분</th>
											<th>대상</th>
											<th>할인율</th>
											<th>할인금액</th>
											<th>본 굿즈 실결제금액</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>회원</td>
											<td class="tL">일반회원</td>
											<td>10%</td>
											<td>4,900</td>
											<td>44,100</td>
										</tr>
										<tr>
											<td>회원</td>
											<td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
											<td>10%</td>
											<td>4,900</td>
											<td>44,100</td>
										</tr>
									</tbody>
								</table>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //굿즈 판매정보 -->
		<!-- 굿즈 입/출고 -->
		<template v-if="retentionTrigger">
			<div class="subTit mt10">
				<h3>교재 입/출고</h3>
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
						        <input type="radio" id="onlineInOut1Goods" name="onlineInOutGoods" checked/>
						        <label for="onlineInOut1Goods"><i></i>입고</label>
						      </span>
									<span class="radioSet">
						        <input type="radio" id="onlineInOut2Goods" name="onlineInOutGoods"/>
						        <label for="onlineInOut2Goods"><i></i>출고 (기타)</label>
						      </span>
								</span>
							</td>
							<td v-if="onlineMovingInGoods">+ <input type="text" class="w70 ml5" placeholder="입고량"/></td>
							<td v-if="onlineMovingOutGoods">- <input type="text" class="w70 ml5" placeholder="출고량"/></td>
							<td><button class="btnS">저장</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		</template>
		<!-- //굿즈 입/출고 -->
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
								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 파일 업로드 통해 제휴회원을 등록함. <button class="btnDelete">삭제</button></li>
							</ul>
						</td>
					</tr>
					<tr>
						<th>수정 이력</th>
						<td>
							<ul class="recordList">
								<li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 수정</li>
								<li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 등록</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //관리 -->

		<!-- Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
				정보를 모두 삭제합니다. <br/>실행 하시겠습니까?
      </template>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger = false">아니오</button>
        <button class="btnM green" @click="alertTrigger = false">예</button>
      </template>
    </Alert>
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
  name: 'MerchMgtViewInfo',
	data() {
		return {
			alertTrigger: false,
			popupTrigger: false,
			retentionTrigger: true,
			popClass: 'textBookPop',
      date: '2020-12-20',
			fileName: '류지원_영어교육학_기출문제집_표지.png',
			noFiles: true,
      urlLeftBanner01: 'player',
			onlineMovingInGoods: true,
			onlineMovingOutGoods: false,
		}
	},
	methods: {
		LectureUserChoiceMerch() {
      let routeData = this.$router.resolve({name: 'LectureUserChoiceMerch', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceUserChoiceMerch', '_blank', `width=1100,height=900`);
    },
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
		inOutChange(event) {
			let id = event.target.id;
			if (id == 'onlineInOut1Goods') {
				this.onlineMovingInGoods = true;
				this.onlineMovingOutGoods = false;
			}
			else if (id == 'onlineInOut2Goods') {
				this.onlineMovingInGoods = false;
				this.onlineMovingOutGoods = true;
			}
		}
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
