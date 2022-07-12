<template lang="html">
	<div class="bannerFreeLectureView">
		<div class="pageTit">
			<h2>1_무료강의홈</h2>
      <span><router-link to="/mkup/site/bannerIntro">사이트 관리</router-link><router-link to="/mkup/site/bannerIntro">배너 관리</router-link><router-link to="/mkup/site/bannerFreeLecture">무료강의</router-link><em>1_무료강의홈</em></span>
		</div>
	  <div class="content">
	    <article>
        <!-- page layout -->
        <div><!-- class 없어도 유지 -->
					<div class="boardTop">
						<div class="left bannerMainT">
		          <span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
		          <strong>배지윤<em>선생님</em></strong>
						</div>
						<div class="right">
            	<router-link to="/mkup/site/bannerSpecial" class="btnList">목록으로</router-link>
							<button class="btnPreview ml5">미리보기</button>
						</div>
					</div>
          <p class="boxBrown pd10">※ 가장 상단에 위치하여 선생님의 대표 무료강의를 표시함</p>
					<!-- 무료강의 1 -->
					<div class="bannerSet">
						<div class="subTit">
							<h3>무료강의(1)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
							<span class="right">
								<button class="btnS redline">삭제</button>
								<button class="btnT ml5" @click="popupModify = true">수정</button>
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
										<th>썸네일 이미지</th>
										<td>
											<span class="uploadMulty">
												<span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
												<span class="fileChoice" style="display:none;">
													<strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
													<em>* 권장 이미지 사이즈: 2048 X 1024</em>
												</span>
												<span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
											</span>
										</td>
										<th>메인 타이틀</th>
										<td>기출문제</td>
									</tr>
									<tr>
										<th>서브 타이틀</th>
										<td>2022년 교육학 학습전략</td>
										<th>내용</th>
										<td>
											지금 바로 빠져든다!<br/>
											교육학의 레전드 김현 선생님의 공부 전략 비법 하이라이트!
										</td>
									</tr>
									<tr>
										<th>Target URL</th>
										<td colspan="3">https://www.youtube.com/premium</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //무료강의 1 -->
					<!-- 무료강의 2 -->
					<div class="bannerSet">
						<div class="subTit">
							<h3>무료강의(2)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
							<span class="right">
								<button class="btnS redline">삭제</button>
								<button class="btnT ml5" @click="popupModify = true">수정</button>
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
										<th>썸네일 이미지</th>
										<td>
											<span class="uploadMulty">
												<span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
												<span class="fileChoice" style="display:none;">
													<strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
													<em>* 권장 이미지 사이즈: 2048 X 1024</em>
												</span>
												<span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
											</span>
										</td>
										<th>메인 타이틀</th>
										<td>기출문제</td>
									</tr>
									<tr>
										<th>서브 타이틀</th>
										<td>2022년 교육학 학습전략</td>
										<th>내용</th>
										<td>
											지금 바로 빠져든다!<br/>
											교육학의 레전드 김현 선생님의 공부 전략 비법 하이라이트!
										</td>
									</tr>
									<tr>
										<th>Target URL</th>
										<td colspan="3">https://www.youtube.com/premium</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //무료강의 2 -->
					<!-- 무료강의 3 -->
					<div class="bannerSet">
						<div class="subTit">
							<h3>무료강의(3)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
							<span class="right">
								<button class="btnT green" @click="popupModify = true">등록</button>
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
										<th>썸네일 이미지</th>
										<td>
											<span class="uploadMulty">
												<span class="thumb"><em>등록된 이미지가 없습니다.</em></span>
												<span class="fileChoice">
													<strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
													<em>* 권장 이미지 사이즈: 400 X 350</em>
												</span>
											</span>
										</td>
										<th>메인 타이틀</th>
										<td></td>
									</tr>
									<tr>
										<th>무료강의 제목</th>
										<td>교육학 김현<br/>2022년 교육학 학습전략</td>
										<th>내용</th>
										<td></td>
									</tr>
									<tr>
										<th>Target URL</th>
										<td colspan="3"></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //무료강의 3 -->
        </div>
        <!-- //page layout -->
    </article>
  </div>

	<!-- Popup -->
	<!-- 사이트관리 내 공통사용 팝업 -->
	<Popup v-if='popupModify' @close="popupModify = false" :popClass="classValue">
		<h1 slot="modalheader" class="tC">배너</h1>
		<div slot="modalbody">
			<div class="gridSet">
				<div class="gridItem">
					<div class="previewArea"></div>
				</div>
				<div class="gridItem">
					<dl>
						<dt>타이틀</dt>
						<dd>
							<input type="text" value="기출문제" class="wFull"/>
							<p>※ 최대 15자 이내를 권장함</p>
						</dd>
					</dl>
					<dl>
						<dt>서브 타이틀</dt>
						<dd>
							<input type="text" value="2022년 교육학 학습전략" class="wFull"/>
							<p>※ 최대 20자 이내를 권장함</p>
						</dd>
					</dl>
					<dl>
						<dt>내용</dt>
						<dd>
							<textarea class="wFull h8">지금 바로 빠져든다! 교육학의 레전드 김현 선생님의 공부 전략 비법 하이라이트!</textarea>
							<p>※ 최대 60자 이내를 권장함</p>
						</dd>
					</dl>
					<dl>
						<dt>URL</dt>
						<dd>
							<div class="ptb10">
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd21" />
									<label for="rd21"><i></i>외부 URL</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd22" />
									<label for="rd22"><i></i>내부 URL</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd23" />
									<label for="rd23"><i></i>직접등록</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd24" />
									<label for="rd24"><i></i>타겟 화면 없음</label>
								</span>
							</div>
							<input type="text" value="https://youtu.be/fNvOlYjWDZM" class="wFull"/>
							<p>※ 이미지를 클릭했을 때 재생할 영상 URL을 등록함</p>
						</dd>
					</dl>
				</div>
			</div>
		</div>
		<div slot="modalfooter" class="modalfooter">
			<button class="btnM line" @click="popupModify = false">취소</button>
			<button class="btnM green" @click="popupModify = false">저장</button>
		</div>
	</Popup>
	<!-- //사이트관리 내 공통사용 팝업 -->
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
  name: 'BannerFreeLectureView',
	data() {
			return {
				multyFuleName: '파일첨부',
				alertfileDelete: false,
	      classPreview: "imgPreviewPop",
				popupPreviewImg: false,
	      classValue: "siteMgtPop fullCase",
				popupModify: false,
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

<style lang="css" scoped>
</style>
