<template lang="html">
	<div class="bannerMainHighlightView">
		<div class="pageTit">
			<h2>5_하이라이트</h2>
      <span><router-link to="/mkup/site/bannerIntro">사이트 관리</router-link><router-link to="/mkup/site/bannerIntro">배너 관리</router-link><router-link to="/mkup/site/bannerMain">메인 화면</router-link><em>5_하이라이트</em></span>
		</div>
	  <div class="content">
	    <article>
        <!-- page layout -->
        <div><!-- class 없어도 유지 -->
					<div class="boardTop">
						<div class="right">
            	<router-link to="/mkup/site/bannerMain" class="btnList">목록으로</router-link>
							<button class="btnPreview ml5">미리보기</button>
						</div>
					</div>
          <p class="boxBrown pd10">※ 탭 형식으로 표출되는 메뉴 명을 클릭하면 보이는 상세 컨텐츠로 레이아웃 설정에 맞게 표시됨</p>
					<!-- 상세 컨텐츠 1 -->
					<div class="bannerSet">
						<div class="subTit">
							<h3>상세 컨텐츠 (1)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
							<span class="right">
								<button class="btnS redline">삭제</button>
								<button class="btnT ml5" @click="popupModify1 = true">수정</button>
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
										<th>이미지</th>
										<td colspan="3">
					            <span class="uploadMulty">
							          <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
					              <span class="fileChoice" style="display:none;">
					                <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
					                <em>* 권장 이미지 사이즈: 2048 X 1024</em>
					              </span>
												<span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
					            </span>
										</td>
									</tr>
									<tr>
										<th>타이틀</th>
										<td>유아 배지윤의 초단기 이론정리반 앵콜 영상!</td>
										<th>레이아웃</th>
										<td><img img :src="require(`@/assets/images/i_layout1.png`)" alt="" class="iLayout" /> 첫 번째 컨텐츠를 강조함</td>
									</tr>
									<tr>
										<th>URL</th>
										<td colspan="3">https://youtu.be/fNvOlYjWDZM</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //상세 컨텐츠 1 -->
					<!-- 상세 컨텐츠 2 -->
					<div class="bannerSet">
						<div class="subTit">
							<h3>상세 컨텐츠 (2)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
							<span class="right">
								<button class="btnS redline">삭제</button>
								<button class="btnT ml5" @click="popupModify1 = true">수정</button>
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
										<th>이미지</th>
										<td colspan="3">
					            <span class="uploadMulty">
							          <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
					              <span class="fileChoice" style="display:none;">
					                <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
					                <em>* 권장 이미지 사이즈: 2048 X 1024</em>
					              </span>
												<span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
					            </span>
										</td>
									</tr>
									<tr>
										<th>타이틀</th>
										<td>유아 배지윤의 초단기 이론정리반 앵콜 영상!</td>
										<th>레이아웃</th>
										<td><img img :src="require(`@/assets/images/i_layout1.png`)" alt="" class="iLayout" /> 첫 번째 컨텐츠를 강조함</td>
									</tr>
									<tr>
										<th>URL</th>
										<td colspan="3">https://youtu.be/fNvOlYjWDZM</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //상세 컨텐츠 2 -->
					<!-- 상세 컨텐츠 3 -->
					<div class="bannerSet">
						<div class="subTit">
							<h3>상세 컨텐츠 (3)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
							<span class="right">
								<button class="btnS redline">삭제</button>
								<button class="btnT ml5" @click="popupModify1 = true">수정</button>
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
										<th>이미지</th>
										<td colspan="3">
					            <span class="uploadMulty">
							          <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
					              <span class="fileChoice" style="display:none;">
					                <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
					                <em>* 권장 이미지 사이즈: 2048 X 1024</em>
					              </span>
												<span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
					            </span>
										</td>
									</tr>
									<tr>
										<th>타이틀</th>
										<td>유아 배지윤의 초단기 이론정리반 앵콜 영상!</td>
										<th>레이아웃</th>
										<td><img img :src="require(`@/assets/images/i_layout1.png`)" alt="" class="iLayout" /> 첫 번째 컨텐츠를 강조함</td>
									</tr>
									<tr>
										<th>URL</th>
										<td colspan="3">https://youtu.be/fNvOlYjWDZM</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //상세 컨텐츠 3 -->
					<!-- 상세 컨텐츠 4 -->
					<div class="bannerSet">
						<div class="subTit">
							<h3>상세 컨텐츠 (4)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
							<span class="right">
								<button class="btnS redline">삭제</button>
								<button class="btnT ml5" @click="popupModify1 = true">수정</button>
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
										<th>이미지</th>
										<td colspan="3">
					            <span class="uploadMulty">
							          <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
					              <span class="fileChoice" style="display:none;">
					                <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
					                <em>* 권장 이미지 사이즈: 2048 X 1024</em>
					              </span>
												<span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
					            </span>
										</td>
									</tr>
									<tr>
										<th>타이틀</th>
										<td>유아 배지윤의 초단기 이론정리반 앵콜 영상!</td>
										<th>레이아웃</th>
										<td><img img :src="require(`@/assets/images/i_layout1.png`)" alt="" class="iLayout" /> 첫 번째 컨텐츠를 강조함</td>
									</tr>
									<tr>
										<th>URL</th>
										<td colspan="3">https://youtu.be/fNvOlYjWDZM</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //상세 컨텐츠 4 -->
					<!-- 상세 컨텐츠 5 -->
					<div class="bannerSet">
						<div class="subTit">
							<h3>상세 컨텐츠 (5)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
							<span class="right">
								<button class="btnS redline">삭제</button>
								<button class="btnT ml5" @click="popupModify1 = true">수정</button>
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
										<th>이미지</th>
										<td colspan="3">
					            <span class="uploadMulty">
							          <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
					              <span class="fileChoice" style="display:none;">
					                <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
					                <em>* 권장 이미지 사이즈: 2048 X 1024</em>
					              </span>
												<span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
					            </span>
										</td>
									</tr>
									<tr>
										<th>타이틀</th>
										<td>유아 배지윤의 초단기 이론정리반 앵콜 영상!</td>
										<th>레이아웃</th>
										<td><img img :src="require(`@/assets/images/i_layout1.png`)" alt="" class="iLayout" /> 첫 번째 컨텐츠를 강조함</td>
									</tr>
									<tr>
										<th>URL</th>
										<td colspan="3">https://youtu.be/fNvOlYjWDZM</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //상세 컨텐츠 5 -->
					<!-- 상세 컨텐츠 6 -->
					<div class="bannerSet">
						<div class="subTit">
							<h3>상세 컨텐츠 (6)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
							<span class="right">
								<button class="btnS redline">삭제</button>
								<button class="btnT ml5" @click="popupModify1 = true">수정</button>
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
										<th>이미지</th>
										<td colspan="3">
					            <span class="uploadMulty">
							          <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
					              <span class="fileChoice" style="display:none;">
					                <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
					                <em>* 권장 이미지 사이즈: 2048 X 1024</em>
					              </span>
												<span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
					            </span>
										</td>
									</tr>
									<tr>
										<th>타이틀</th>
										<td>유아 배지윤의 초단기 이론정리반 앵콜 영상!</td>
										<th>레이아웃</th>
										<td><img img :src="require(`@/assets/images/i_layout1.png`)" alt="" class="iLayout" /> 첫 번째 컨텐츠를 강조함</td>
									</tr>
									<tr>
										<th>URL</th>
										<td colspan="3">https://youtu.be/fNvOlYjWDZM</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //상세 컨텐츠 6 -->
					<!-- 상세 컨텐츠 7 -->
					<div class="bannerSet">
						<div class="subTit">
							<h3>상세 컨텐츠 (7)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
							<span class="right">
								<button class="btnS redline">삭제</button>
								<button class="btnT ml5" @click="popupModify1 = true">수정</button>
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
										<th>이미지</th>
										<td colspan="3">
					            <span class="uploadMulty">
							          <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
					              <span class="fileChoice" style="display:none;">
					                <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
					                <em>* 권장 이미지 사이즈: 2048 X 1024</em>
					              </span>
												<span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
					            </span>
										</td>
									</tr>
									<tr>
										<th>타이틀</th>
										<td>유아 배지윤의 초단기 이론정리반 앵콜 영상!</td>
										<th>레이아웃</th>
										<td><img img :src="require(`@/assets/images/i_layout1.png`)" alt="" class="iLayout" /> 첫 번째 컨텐츠를 강조함</td>
									</tr>
									<tr>
										<th>URL</th>
										<td colspan="3">https://youtu.be/fNvOlYjWDZM</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //상세 컨텐츠 7 -->
					<!-- 상세 컨텐츠 8 -->
					<div class="bannerSet">
						<div class="subTit">
							<h3>상세 컨텐츠 (8)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
							<span class="right">
								<button class="btnS redline">삭제</button>
								<button class="btnT ml5" @click="popupModify1 = true">수정</button>
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
										<th>이미지</th>
										<td colspan="3">
					            <span class="uploadMulty">
							          <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
					              <span class="fileChoice" style="display:none;">
					                <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
					                <em>* 권장 이미지 사이즈: 2048 X 1024</em>
					              </span>
												<span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
					            </span>
										</td>
									</tr>
									<tr>
										<th>타이틀</th>
										<td>유아 배지윤의 초단기 이론정리반 앵콜 영상!</td>
										<th>레이아웃</th>
										<td><img img :src="require(`@/assets/images/i_layout1.png`)" alt="" class="iLayout" /> 첫 번째 컨텐츠를 강조함</td>
									</tr>
									<tr>
										<th>URL</th>
										<td colspan="3">https://youtu.be/fNvOlYjWDZM</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //상세 컨텐츠 8 -->
					<!-- 상세 컨텐츠 9 -->
					<div class="bannerSet">
						<div class="subTit">
							<h3>상세 컨텐츠 (9)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
							<span class="right">
								<button class="btnS redline">삭제</button>
								<button class="btnT ml5" @click="popupModify1 = true">수정</button>
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
										<th>이미지</th>
										<td colspan="3">
					            <span class="uploadMulty">
							          <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
					              <span class="fileChoice" style="display:none;">
					                <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
					                <em>* 권장 이미지 사이즈: 2048 X 1024</em>
					              </span>
												<span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
					            </span>
										</td>
									</tr>
									<tr>
										<th>타이틀</th>
										<td>유아 배지윤의 초단기 이론정리반 앵콜 영상!</td>
										<th>레이아웃</th>
										<td><img img :src="require(`@/assets/images/i_layout1.png`)" alt="" class="iLayout" /> 첫 번째 컨텐츠를 강조함</td>
									</tr>
									<tr>
										<th>URL</th>
										<td colspan="3">https://youtu.be/fNvOlYjWDZM</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //상세 컨텐츠 9 -->
					<!-- 상세 컨텐츠 10 -->
					<div class="bannerSet">
						<div class="subTit">
							<h3>상세 컨텐츠 (10)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
							<span class="right">
								<button class="btnT green" @click="popupModify1 = true">등록</button>
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
										<th>이미지</th>
										<td colspan="3">
					            <span class="uploadMulty">
							          <span class="thumb"><em>등록된 이미지가 없습니다.</em></span>
					              <span class="fileChoice">
					                <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
					                <em>* 권장 이미지 사이즈: 400 X 350</em>
					              </span>
					            </span>
										</td>
									</tr>
									<tr>
										<th>타이틀</th>
										<td></td>
										<th>레이아웃</th>
										<td></td>
									</tr>
									<tr>
										<th>URL</th>
										<td colspan="3"></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //상세 컨텐츠 10 -->
        </div>
        <!-- //page layout -->
    </article>
  </div>

	<!-- Popup -->
	<!-- 사이트관리 내 공통사용 팝업 -->
	<Popup v-if='popupModify1' @close="popupModify1 = false" :popClass="classValue">
		<h1 slot="modalheader" class="tC">상세 컨텐츠(1)</h1>
		<div slot="modalbody">
			<div class="gridSet">
				<div class="gridItem">
					<div class="previewArea"></div>
				</div>
				<div class="gridItem">
					<dl>
						<dt>타이틀</dt>
						<dd>
							<input type="text" value="2021학년도 합격자의 생생한 노하우" class="wFull"/>
							<p>※ 타이틀은 최대 30자 이내를 권장함</p>
						</dd>
					</dl>
					<dl>
						<dt>컨텐츠 레이아웃</dt>
						<dd>
							<div class="ptb10">
								<span class="radioSet">
									<input type="radio" name="radio2" id="rd21" />
									<label for="rd21"><i></i><img img :src="require(`@/assets/images/i_layout1.png`)" alt="" class="iLayout" /> 첫 번째 컨텐츠를 강조함</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="radio2" id="rd22" />
									<label for="rd22"><i></i><img img :src="require(`@/assets/images/i_layout2.png`)" alt="" class="iLayout" /> 모든 컨텐츠를 동일하게 표시함</label>
								</span>
							</div>
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
  name: 'BannerMainHighlightView',
	data() {
			return {
				multyFuleName: '파일첨부',
				alertfileDelete: false,
	      classPreview: "imgPreviewPop",
				popupPreviewImg: false,
	      classValue: "siteMgtPop fullCase",
				popupModify1: false,
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
