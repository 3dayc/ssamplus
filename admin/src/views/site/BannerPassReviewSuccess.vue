<template lang="html">
  <div>
    <div class="boxBrown msgBtnSet">
      <p class="msg fGreen">※ 명단 csv 파일 내 합격자는 파싱하여 상 &#8594; 하로 스크롤링 됨</p>
    </div>
    <!-- 합격자 명단 -->
		<div class="subTit">
			<h3>합격자 명단</h3>
		</div>
		<div class="tvs">
			<table>
				<colgroup>
					<col width="160">
					<col width="*">
				</colgroup>
				<tbody>
					<tr>
						<th>노출여부 <sup>필수</sup></th>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="show" checked>
								<label for="show">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
					</tr>
					<tr>
						<th>파일 첨부 <sup>필수</sup></th>
						<td>
							<button class="btnS line">+ 파일추가</button>
							<p class="infoMsg fRed mt5">※csv 파일만 등록 가능합니다.</p>
							<ul class="fileList writeCase">
								<li><span><a href="#" download>2021 개정 누리 과정.pdf</a><button class="btnDelete ml5">삭제</button></span></li>
							</ul>
							<div class="tls wHalf mt20">
								<table>
									<colgroup>
										<col width="80"/>
										<col width="100"/>
										<col width="100"/>
										<col width="100"/>
										<col width="100"/>
									</colgroup>
									<thead>
										<tr>
											<th>번호</th>
											<th>연도</th>
											<th>과목</th>
											<th>지역</th>
											<th>이름</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>2021</td>
											<td>보건</td>
											<td>부산</td>
											<td>홍*동</td>
										</tr>
										<tr>
											<td>2</td>
											<td>2021</td>
											<td>전문상담</td>
											<td>인천</td>
											<td>김*동</td>
										</tr>
										<tr>
											<td>3</td>
											<td>2021</td>
											<td>유아</td>
											<td>경기</td>
											<td>고*동</td>
										</tr>
										<tr>
											<td>4</td>
											<td>2021</td>
											<td>보건</td>
											<td>부산</td>
											<td>홍*동</td>
										</tr>
										<tr>
											<td>5</td>
											<td>2021</td>
											<td>전문상담</td>
											<td>인천</td>
											<td>김*동</td>
										</tr>
										<tr>
											<td>6</td>
											<td>2021</td>
											<td>유아</td>
											<td>경기</td>
											<td>고*동</td>
										</tr>
										<tr>
											<td>7</td>
											<td>2021</td>
											<td>보건</td>
											<td>부산</td>
											<td>홍*동</td>
										</tr>
										<tr>
											<td>8</td>
											<td>2021</td>
											<td>전문상담</td>
											<td>인천</td>
											<td>김*동</td>
										</tr>
										<tr>
											<td>9</td>
											<td>2021</td>
											<td>유아</td>
											<td>경기</td>
											<td>고*동</td>
										</tr>
									</tbody>
								</table>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //합격자 명단 -->

  	<!-- Popup -->
  	<!-- 이미지 미리보기 팝업 -->
  	<Popup v-if='popupPreviewImg' @close="popupPreviewImg = false" :popClass="classPreview">
  		<div slot="modalheader"></div>
  		<div slot="modalbody"><img img :src="require(`@/assets/images/img_view_sample.png`)" alt="" /></div>
  	</Popup>
  	<!-- //이미지 미리보기 팝업 -->
  	<!-- 이미지 삭제 확인 -->
  	<Alert v-if='alertfileDelete' @close="alertfileDelete = false">
  		<div slot="modalbody">해당 정보를 삭제합니다.<br/>실행 하시겠습니까?</div>
  		<div slot="modalfooter" class="modalfooter">
  			<button class="btnM gray" @click="alertfileDelete = false">취소</button>
  			<button class="btnM green" @click="alertfileDelete = false">삭제</button>
  		</div>
  	</Alert>
  	<!-- //이미지 삭제 확인 -->
  	<!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'BannerPassReviewHome',
	data() {
			return {
				multyFuleName: '파일첨부',
				alertfileDelete: false,
	      classPreview: "imgPreviewPop",
				popupPreviewImg: false,
	      classValue: "siteMgtPop fullCase",
				popupModify: false,
        bannerSet01: true,
        showFileChoice: true,
        showFileModify: false,
				ipBtnStatus: true,
			}
	},
	methods: {
		uploadMulty(event) {
			this.multyFuleName = event.target.value;
			this.showFileChoice = false;
			this.showFileModify = true;
		}, // 파일 업로드2
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
