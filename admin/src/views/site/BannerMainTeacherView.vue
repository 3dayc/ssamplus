<template lang="html">
	<div class="bannerMainTeacherView">
		<div class="pageTit">
			<h2>3_선생님 영역</h2>
      <span><router-link to="/mkup/site/bannerIntro">사이트 관리</router-link><router-link to="/mkup/site/bannerIntro">배너 관리</router-link><router-link to="/mkup/site/bannerMain">메인 화면</router-link><em>3_선생님 영역</em></span>
		</div>
	  <div class="content">
	    <article>
        <!-- page layout -->
        <div><!-- class 없어도 유지 -->
					<div class="boardTop">
						<div class="left bannerMainT">
		          <span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
		          <strong>유아 배지윤<em>선생님</em></strong>
						</div>
						<div class="right">
            	<router-link to="/mkup/site/bannerMain" class="btnList">목록으로</router-link>
							<button class="btnPreview ml5">미리보기</button>
						</div>
					</div>
          <p class="boxBrown pd10">※ 일반모드의 경우 수강신청 과목 순서대로 선생님을 표시하고, 전공모드의 경우 사용자가 준비 중인 시험과목의 전공 선생님이 선두로 표시됨</p>
					<!-- 선생님 이미지 -->
					<div class="bannerSet">
						<div class="subTit"><h3>선생님 이미지</h3></div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="630"/>
									<col width="160"/>
									<col width="630"/>
								</colgroup>
								<tbody>
									<tr>
										<th>리스트 <sup>필수</sup></th>
										<td>
											<button class="btnS line mr20" @click="SiteTeacherImage();">선생님 이미지</button>
					            <span class="uploadMulty">
							          <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
					              <span class="fileChoice" style="display:none;">
					                <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
					                <em>* 권장 이미지 사이즈: 2048 X 1024</em>
					              </span>
												<span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
					            </span>
										</td>
										<th>상세 <sup>필수</sup></th>
										<td>
											<button class="btnS line" @click="SiteTeacherImage();">선생님 이미지</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //선생님 이미지 -->
					<!-- 컨텐츠 A -->
					<div class="bannerSet" v-if="bannerSetA">
						<div class="subTit">
							<h3>컨텐츠 A (영상 컨텐츠 : 1)</h3>
							<span class="right">
								<button class="btnS ml5" @click="bannerSetA = !bannerSetA">수정</button>
							</span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="1340"/>
									<col width="80"/>
								</colgroup>
								<tbody>
									<tr>
										<th>타이틀 <sup>필수</sup></th>
										<td colspan="2">선생님 인터뷰</td>
									</tr>
									<tr>
										<th>썸네일 이미지 <sup>필수</sup></th>
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
										<td class="bgRed tC">클릭 수<br/><strong>9,999</strong></td>
									</tr>
									<tr>
										<th>URL <sup>필수</sup></th>
										<td colspan="2">
											<LandingTypeComponent></LandingTypeComponent>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="bannerSet" v-else>
						<div class="subTit">
							<h3>컨텐츠 A (영상 컨텐츠 : 1)</h3>
							<span class="right">
								<button class="btnS ml5" @click="bannerSetA = !bannerSetA">저장</button>
							</span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="1340"/>
									<col width="80"/>
								</colgroup>
								<tbody>
									<tr>
										<th>타이틀 <sup>필수</sup></th>
										<td colspan="2"><input type="text" value="선생님 인터뷰"/></td>
									</tr>
									<tr>
										<th>썸네일 이미지 <sup>필수</sup></th>
										<td>
											<span class="uploadMulty">
												<span class="thumb"><em>등록된 이미지가 없습니다.</em></span>
												<span class="fileChoice" v-show="showFileChoice">
													<strong><input type="file" id="fileMulty21" @change="uploadMulty" /><label for="fileMulty21">파일 첨부</label></strong>
													<em>* 권장 이미지 사이즈: 300 X 300</em>
												</span>
												<span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
											</span>
										</td>
										<td class="bgRed tC">클릭 수<br/><strong>9,999</strong></td>
									</tr>
									<tr>
										<th>URL <sup>필수</sup></th>
										<td colspan="2">
											<LandingTypeComponent></LandingTypeComponent>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //컨텐츠 A -->
					<!-- 컨텐츠 B -->
					<div class="bannerSet" v-if="bannerSetB">
						<div class="subTit">
							<h3>컨텐츠 B (영상 컨텐츠 : 3)</h3>
							<span class="right">
								<button class="btnS ml5" @click="bannerSetB = !bannerSetB">수정</button>
							</span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="1340"/>
									<col width="80"/>
								</colgroup>
								<tbody>
									<tr>
										<th>타이틀 <sup>필수</sup></th>
										<td colspan="2">합격생 인터뷰</td>
									</tr>
									<tr>
										<th>썸네일 이미지(1) <sup>필수</sup></th>
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
										<td class="bgRed tC">클릭 수<br/><strong>9,999</strong></td>
									</tr>
									<tr>
										<th>URL <sup>필수</sup></th>
										<td colspan="2">
											<LandingTypeComponent></LandingTypeComponent>
										</td>
									</tr>
									<tr>
										<th>썸네일 이미지(2) <sup>필수</sup></th>
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
										<td class="bgRed tC">클릭 수<br/><strong>9,999</strong></td>
									</tr>
									<tr>
										<th>URL <sup>필수</sup></th>
										<td colspan="2">
											<LandingTypeComponent></LandingTypeComponent>
										</td>
									</tr>
									<tr>
										<th>썸네일 이미지(3) <sup>필수</sup></th>
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
										<td class="bgRed tC">클릭 수<br/><strong>9,999</strong></td>
									</tr>
									<tr>
										<th>URL <sup>필수</sup></th>
										<td colspan="2">
											<LandingTypeComponent></LandingTypeComponent>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="bannerSet" v-else>
						<div class="subTit">
							<h3>컨텐츠 B (영상 컨텐츠 : 3)</h3>
							<span class="right">
								<button class="btnS ml5" @click="bannerSetB = !bannerSetB">저장</button>
							</span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="1340"/>
									<col width="80"/>
								</colgroup>
								<tbody>
									<tr>
										<th>타이틀 <sup>필수</sup></th>
										<td colspan="2"><input type="text" value="합격생 인터뷰"/></td>
									</tr>
									<tr>
										<th>썸네일 이미지(1) <sup>필수</sup></th>
										<td>
											<span class="uploadMulty">
												<span class="thumb"><em>등록된 이미지가 없습니다.</em></span>
												<span class="fileChoice" v-show="showFileChoice">
													<strong><input type="file" id="fileMulty21" @change="uploadMulty" /><label for="fileMulty21">파일 첨부</label></strong>
													<em>* 권장 이미지 사이즈: 300 X 300</em>
												</span>
												<span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
											</span>
										</td>
										<td class="bgRed tC">클릭 수<br/><strong>9,999</strong></td>
									</tr>
									<tr>
										<th>URL <sup>필수</sup></th>
										<td colspan="2">
											<LandingTypeComponent></LandingTypeComponent>
										</td>
									</tr>
									<tr>
										<th>썸네일 이미지(2) <sup>필수</sup></th>
										<td>
											<span class="uploadMulty">
												<span class="thumb"><em>등록된 이미지가 없습니다.</em></span>
												<span class="fileChoice" v-show="showFileChoice">
													<strong><input type="file" id="fileMulty21" @change="uploadMulty" /><label for="fileMulty21">파일 첨부</label></strong>
													<em>* 권장 이미지 사이즈: 300 X 300</em>
												</span>
												<span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
											</span>
										</td>
										<td class="bgRed tC">클릭 수<br/><strong>9,999</strong></td>
									</tr>
									<tr>
										<th>URL <sup>필수</sup></th>
										<td colspan="2">
											<LandingTypeComponent></LandingTypeComponent>
										</td>
									</tr>
									<tr>
										<th>썸네일 이미지(3) <sup>필수</sup></th>
										<td>
											<span class="uploadMulty">
												<span class="thumb"><em>등록된 이미지가 없습니다.</em></span>
												<span class="fileChoice" v-show="showFileChoice">
													<strong><input type="file" id="fileMulty21" @change="uploadMulty" /><label for="fileMulty21">파일 첨부</label></strong>
													<em>* 권장 이미지 사이즈: 300 X 300</em>
												</span>
												<span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
											</span>
										</td>
										<td class="bgRed tC">클릭 수<br/><strong>9,999</strong></td>
									</tr>
									<tr>
										<th>URL <sup>필수</sup></th>
										<td colspan="2">
											<LandingTypeComponent></LandingTypeComponent>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //컨텐츠 B -->
					<!-- 컨텐츠 C -->
					<div class="bannerSet" v-if="bannerSetC">
						<div class="subTit">
							<h3>컨텐츠 C (영상 컨텐츠 : 1)</h3>
							<span class="right">
								<button class="btnS ml5" @click="bannerSetC = !bannerSetC">수정</button>
							</span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="1340"/>
									<col width="80"/>
								</colgroup>
								<tbody>
									<tr>
										<th>타이틀 <sup>필수</sup></th>
										<td colspan="2">쌤플러스가 추천하는 맞춤 강좌</td>
									</tr>
									<tr>
										<th>썸네일 이미지 <sup>필수</sup></th>
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
										<td class="bgRed tC">클릭 수<br/><strong>9,999</strong></td>
									</tr>
									<tr>
										<th>URL <sup>필수</sup></th>
										<td colspan="2">
											<LandingTypeComponent></LandingTypeComponent>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="bannerSet" v-else>
						<div class="subTit">
							<h3>컨텐츠 C (영상 컨텐츠 : 1)</h3>
							<span class="right">
								<button class="btnS ml5" @click="bannerSetC = !bannerSetC">저장</button>
							</span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="1340"/>
									<col width="80"/>
								</colgroup>
								<tbody>
									<tr>
										<th>타이틀 <sup>필수</sup></th>
										<td colspan="2"><input type="text" value="쌤플러스가 추천하는 맞춤 강좌"/></td>
									</tr>
									<tr>
										<th>썸네일 이미지 <sup>필수</sup></th>
										<td>
											<span class="uploadMulty">
												<span class="thumb"><em>등록된 이미지가 없습니다.</em></span>
												<span class="fileChoice" v-show="showFileChoice">
													<strong><input type="file" id="fileMulty21" @change="uploadMulty" /><label for="fileMulty21">파일 첨부</label></strong>
													<em>* 권장 이미지 사이즈: 300 X 300</em>
												</span>
												<span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
											</span>
										</td>
										<td class="bgRed tC">클릭 수<br/><strong>9,999</strong></td>
									</tr>
									<tr>
										<th>URL <sup>필수</sup></th>
										<td colspan="2">
											<LandingTypeComponent></LandingTypeComponent>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //컨텐츠 C -->
					<!-- 컨텐츠 D -->
					<div class="bannerSet" v-if="bannerSetD">
						<div class="subTit">
							<h3>컨텐츠 D (영상 컨텐츠 : 1)</h3>
							<span class="right">
								<button class="btnS ml5" @click="bannerSetD = !bannerSetD">수정</button>
							</span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="1340"/>
									<col width="80"/>
								</colgroup>
								<tbody>
									<tr>
										<th>타이틀 <sup>필수</sup></th>
										<td colspan="2">선생님 이벤트</td>
									</tr>
									<tr>
										<th>썸네일 이미지 <sup>필수</sup></th>
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
										<td class="bgRed tC">클릭 수<br/><strong>9,999</strong></td>
									</tr>
									<tr>
										<th>URL <sup>필수</sup></th>
										<td colspan="2">
											<LandingTypeComponent></LandingTypeComponent>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="bannerSet" v-else>
						<div class="subTit">
							<h3>컨텐츠 D (영상 컨텐츠 : 1)</h3>
							<span class="right">
								<button class="btnS ml5" @click="bannerSetD = !bannerSetD">저장</button>
							</span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="1340"/>
									<col width="80"/>
								</colgroup>
								<tbody>
									<tr>
										<th>타이틀 <sup>필수</sup></th>
										<td colspan="2"><input type="text" value="선생님 이벤트"/></td>
									</tr>
									<tr>
										<th>썸네일 이미지 <sup>필수</sup></th>
										<td>
											<span class="uploadMulty">
												<span class="thumb"><em>등록된 이미지가 없습니다.</em></span>
												<span class="fileChoice" v-show="showFileChoice">
													<strong><input type="file" id="fileMulty21" @change="uploadMulty" /><label for="fileMulty21">파일 첨부</label></strong>
													<em>* 권장 이미지 사이즈: 300 X 300</em>
												</span>
												<span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
											</span>
										</td>
										<td class="bgRed tC">클릭 수<br/><strong>9,999</strong></td>
									</tr>
									<tr>
										<th>URL <sup>필수</sup></th>
										<td colspan="2">
											<LandingTypeComponent></LandingTypeComponent>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //컨텐츠 D -->
        </div>
        <!-- //page layout -->
    </article>
  </div>

	<!-- Popup -->
	<!-- 사이트관리 내 공통사용 팝업 -->
	<Popup v-if='popupModify1' @close="popupModify1 = false" :popClass="classValue">
		<h1 slot="modalheader" class="tC">영상 컨텐츠(1)</h1>
		<div slot="modalbody">
			<div class="gridSet">
				<div class="gridItem">
					<div class="previewArea"></div>
				</div>
				<div class="gridItem">
					<dl>
						<dt>타이틀</dt>
						<dd>
							<input type="text" value="" class="wFull"/>
							<p>※ 최대 15자 이내 입력을 권장함</p>
						</dd>
					</dl>
					<dl>
						<dt>URL</dt>
						<dd>
							<div class="ptb10">
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd1" />
									<label for="rd1"><i></i>외부 URL</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd2" />
									<label for="rd2"><i></i>내부 URL</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd3" />
									<label for="rd3"><i></i>직접등록</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd4" />
									<label for="rd4"><i></i>타겟 화면 없음</label>
								</span>
							</div>
							<input type="text" value="http://www.ssamplus.com/inc/fullsize/251462.do" class="wFull"/>
							<p>※ 이미지를 클릭했을 때 재생할 영상 URL을 등록함</p>
						</dd>
					</dl>
				</div>
			</div>
		</div>
		<div slot="modalfooter" class="modalfooter">
			<button class="btnM line" @click="popupModify1 = false">취소</button>
			<button class="btnM green" @click="popupModify1 = false">저장</button>
		</div>
	</Popup> <!--영상컨텐츠 1~4 & 추천 컨텐츠 1 -->
	<Popup v-if='popupModify2' @close="popupModify2 = false" :popClass="classValue">
		<h1 slot="modalheader" class="tC">추천 컨텐츠(3)</h1>
		<div slot="modalbody">
			<div class="gridSet">
				<div class="gridItem">
					<div class="previewArea"></div>
				</div>
				<div class="gridItem">
					<dl>
						<dt>컨텐츠 타이틀</dt>
						<dd>
							<input type="text" value="" class="wFull"/>
							<p>※ 타이틀은 최대 20자 이내를 권장함</p>
						</dd>
					</dl>
					<dl>
						<dt>시험 명</dt>
						<dd>
							<input type="text" value="" class="wFull"/>
							<p>※ 영상의 하단에 표기될 시험 명을 입력함</p>
						</dd>
					</dl>
					<dl>
						<dt>영상 서브 타이틀</dt>
						<dd>
							<input type="text" value="" class="wFull"/>
							<p>※ 시험 명 하단에 표기될 서브 타이틀을 입력함</p>
						</dd>
					</dl>
					<dl>
						<dt>영상 메인 타이틀</dt>
						<dd>
							<input type="text" value="" class="wFull"/>
							<p>※ 최대 10자 이내를 권장함</p>
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
							<input type="text" value="http://www.ssamplus.com/inc/fullsize/251462.do" class="wFull"/>
							<p>※ 이미지를 클릭했을 때 재생할 영상 URL을 등록함</p>
						</dd>
					</dl>
				</div>
			</div>
		</div>
		<div slot="modalfooter" class="modalfooter">
			<button class="btnM line" @click="popupModify2 = false">취소</button>
			<button class="btnM green" @click="popupModify2 = false">저장</button>
		</div>
	</Popup> <!-- 추천 컨텐츠 2~4  -->
	<Popup v-if='popupModify3' @close="popupModify3 = false" :popClass="classValue">
		<h1 slot="modalheader" class="tC">추천 컨텐츠(5)</h1>
		<div slot="modalbody">
			<div class="gridSet">
				<div class="gridItem">
					<div class="previewArea"></div>
				</div>
				<div class="gridItem">
					<dl>
						<dt>타이틀</dt>
						<dd>
							<input type="text" value="" class="wFull"/>
							<p>※ 타이틀은 최대 20자 이내를 권장함</p>
						</dd>
					</dl>
					<dl>
						<dt>URL</dt>
						<dd>
							<input type="text" value="http://www.ssamplus.com/inc/fullsize/251462.do" class="wFull"/>
							<p>※ 해당 화면을 클릭했을 때 이동할 상세내용 화면 URL을 등록함</p>
						</dd>
					</dl>
				</div>
			</div>
		</div>
		<div slot="modalfooter" class="modalfooter">
			<button class="btnM line" @click="popupModify3 = false">취소</button>
			<button class="btnM green" @click="popupModify3 = false">저장</button>
		</div>
	</Popup> <!-- 추천 컨텐츠 5 -->
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
  name: 'BannerMainTeacherView',
	data() {
			return {
				multyFuleName: '파일첨부',
				alertfileDelete: false,
	      classPreview: "imgPreviewPop",
				popupPreviewImg: false,
	      classValue: "siteMgtPop fullCase",
				popupModify1: false,
				popupModify2: false,
				popupModify3: false,
				bannerSetA: true,
				bannerSetB: true,
				bannerSetC: true,
				bannerSetD: true,
				showFileChoice: true,
        showFileModify: false,
			}
	},
	methods: {
		uploadMulty(event) {
			this.multyFuleName = event.target.value;
			this.showFileChoice = false;
			this.showFileModify = true;
		}, // 파일 업로드2
    SiteTeacherImage() {
      let routeData = this.$router.resolve({name: 'SiteTeacherImage', query: {data: "someData"}});
      window.open('/mkup/windowPopup/siteTeacherImage', '_blank', `width=570,height=750`);
    }, // 선생님 이미지 팝업
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
