<template lang="html">
	<div>
		<!-- 목록 -->
		<div class="listView" v-if="view == 'list'">
			<div class="subTit"><h3>설정된 메뉴 명으로 내비게이션에 표시됩니다</h3></div>
			<div class="tvs">
				<table>
					<colgroup>
						<col width="160"/>
						<col width="1420"/>
					</colgroup>
					<tbody>
						<tr>
							<th>메뉴 명 <sup>필수</sup></th>
							<td>
								<template v-if="ipBtnStatus">
									<div class="ipBtn">
										<div class="ipValue">합격비밀: 2021 합격수기</div>
										<button class="btnS" @click="ipBtnStatus = !ipBtnStatus">수정</button>
									</div>
								</template>
								<template v-else>
									<div class="ipBtn">
										<input type="text" value="합격비밀: 2021 합격수기"/>
										<button class="btnS" @click="ipBtnStatus = !ipBtnStatus">저장</button>
									</div>
								</template>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="boxBrown msgBtnSet mt20">
				<p class="msg fGreen">※ 노출되는 컨텐츠의 개수 제한은 없으며 자동 롤링 주기로 랜덤 순서로 하여 컨텐츠를 노출함</p>
				<span class="btnSet">
					<button class="btnAdd" @click="view = 'write'">신규등록</button>
				</span>
			</div>
			<div class="subTit">
				<h3>자동 롤링 주기</h3>
				<span class="selectSet ml10 mr5">
					<select name="" id="">
						<option value="no" class="label">선택</option>
						<option value="">0</option>
						<option value="">1</option>
						<option value="">1.5</option>
						<option value="" selected>2</option>
						<option value="">2.5</option>
						<option value="">3</option>
						<option value="">3.5</option>
						<option value="">4</option>
						<option value="">4.5</option>
						<option value="">5</option>
					</select>
				</span> 초
			</div>
			<div class="tls">
				<table>
					<colgroup>
						<col width="100"/>
						<col width="100"/>
						<col width="200"/>
						<col width="500"/>
						<col width="250"/>
						<col width="80"/>
						<col width="80"/>
						<col width="100"/>
					</colgroup>
					<thead>
						<tr>
							<th>노출여부</th>
							<th>번호</th>
							<th>썸네일 이미지<br>(첫번째 이미지)</th>
							<th>제목</th>
							<th>노출기간</th>
							<th>클릭 수<br>(PC)</th>
							<th>클릭 수<br>(Mobile)</th>
							<th>작성일</th>
						</tr>
					</thead>
					<tbody>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show01" checked>
									<label for="show01">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>100</td>
							<td>
								<span class="uploadThumb after">
									<img img :src="require(`@/assets/images/img_view_sample.png`)" alt="thumnail"/>
								</span>
							</td>
							<td class="tL"><a @click="view = 'detail'">합격수기 제목을 표시합니다 (이벤트 100)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-25</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show02" checked>
									<label for="show02">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>99</td>
							<td>
								<span class="uploadThumb after">
									<img img :src="require(`@/assets/images/img_view_sample.png`)" alt="thumnail"/>
								</span>
							</td>
							<td class="tL"><a @click="view = 'detail'">합격수기 제목을 표시합니다 (이벤트 99)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-20</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show03" checked>
									<label for="show03">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>98</td>
							<td>
								<span class="uploadThumb after">
									<img img :src="require(`@/assets/images/img_view_sample.png`)" alt="thumnail"/>
								</span>
							</td>
							<td class="tL"><a @click="view = 'detail'">합격수기 제목을 표시합니다 (이벤트 98)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-19</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show04" checked>
									<label for="show04">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>97</td>
							<td>
								<span class="uploadThumb after">
									<img img :src="require(`@/assets/images/img_view_sample.png`)" alt="thumnail"/>
								</span>
							</td>
							<td class="tL"><a @click="view = 'detail'">합격수기 제목을 표시합니다 (이벤트 97)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-15</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show05" checked>
									<label for="show05">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>96</td>
							<td>
								<span class="uploadThumb after">
									<img img :src="require(`@/assets/images/img_view_sample.png`)" alt="thumnail"/>
								</span>
							</td>
							<td class="tL"><a @click="view = 'detail'">합격수기 제목을 표시합니다 (이벤트 96)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-13</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show06">
									<label for="show06">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>95</td>
							<td>
								<span class="uploadThumb after">
									<img img :src="require(`@/assets/images/img_view_sample.png`)" alt="thumnail"/>
								</span>
							</td>
							<td class="tL"><a @click="view = 'detail'">합격수기 제목을 표시합니다 (이벤트 95)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-10</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show07">
									<label for="show07">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>94</td>
							<td>
								<span class="uploadThumb after">
									<img img :src="require(`@/assets/images/img_view_sample.png`)" alt="thumnail"/>
								</span>
							</td>
							<td class="tL"><a @click="view = 'detail'">합격수기 제목을 표시합니다 (이벤트 94)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-04-30</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show08">
									<label for="show08">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>93</td>
							<td>
								<span class="uploadThumb after">
									<img img :src="require(`@/assets/images/img_view_sample.png`)" alt="thumnail"/>
								</span>
							</td>
							<td class="tL"><a @click="view = 'detail'">합격수기 제목을 표시합니다 (이벤트 93)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-04-29</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show09">
									<label for="show09">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>92</td>
							<td>
								<span class="uploadThumb after">
									<img img :src="require(`@/assets/images/img_view_sample.png`)" alt="thumnail"/>
								</span>
							</td>
							<td class="tL"><a @click="view = 'detail'">합격수기 제목을 표시합니다 (이벤트 92)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-04-29</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show10">
									<label for="show10">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>91</td>
							<td>
								<span class="uploadThumb after">
									<img img :src="require(`@/assets/images/img_view_sample.png`)" alt="thumnail"/>
								</span>
							</td>
							<td class="tL"><a @click="view = 'detail'">합격수기 제목을 표시합니다 (이벤트 91)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-04-20</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Paginate/>
		</div>
		<!-- //목록 -->
		<!-- 신규등록 -->
		<div class="writeView" v-else-if="view == 'write'">
			<div class="subTit">
				<h3>신규등록</h3>
				<span class="right">
					<button class="btnM green" @click="view = 'detail'">등록</button>
					<button class="btnM ml10 gray" @click="view = 'list'">취소</button>
				</span>
			</div>
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
							<th>노출여부 <sup>필수</sup></th>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show00">
									<label for="show00">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<th>노출기간 <sup>필수</sup></th>
							<td>
								<VCalendar class="calSet mr5" v-model="date00" color="green">
									<template v-slot="{ inputValue, togglePopover }">
										<input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
									</template>
								</VCalendar>
								<span class="selectSet">
									<select name="" id="">
										<option v-for="option in timeOptions" v-bind:value="option.value">
											{{ option.text }}
										</option>
									</select>
								</span>
								<em class="inBlock mlr5">~</em>
								<VCalendar class="calSet mr5" v-model="date01" color="green">
									<template v-slot="{ inputValue, togglePopover }">
										<input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
									</template>
								</VCalendar>
								<span class="selectSet">
									<select name="" id="">
										<option v-for="option in timeOptions" v-bind:value="option.value">
											{{ option.text }}
										</option>
									</select>
								</span>
							</td>
						</tr>
						<tr>
							<th>제목 <sup>필수</sup></th>
							<td><input type="text" placeholder="제목을 입력해 주세요."/></td>
							<td colspan="2"><p class="infoMsg fGreen">* 컨텐츠를 관리하기 위한 제목으로 화면에서 사용되는 데이터가 아님</p></td>
						</tr>
					</tbody>
				</table>
			</div>
			<strong class="leafLabel mt20">공통/PC</strong>
			<div class="tvs">
				<table>
					<colgroup>
						<col width="160"/>
						<col width="1420"/>
					</colgroup>
					<tbody>
						<tr>
							<th>플레이어 썸네일 <sup>필수</sup></th>
							<td>
								<span class="uploadMulty">
									<span class="thumb"><em>등록된 이미지가 없습니다.</em></span>
									<span class="fileChoice" v-show="showFileChoice">
										<strong><input type="file" id="fileMultyWrite" @change="uploadMulty" /><label for="fileMultyWrite">파일 첨부</label></strong>
										<em>* 권장 이미지 사이즈: 693 X 395</em>
									</span>
									<span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
								</span>
							</td>
						</tr>
						<tr>
							<th>영상 타이틀 <sup>필수</sup></th>
							<td>
								<multiselect 
									class="mr5"
									v-model="multiValue2" 
									:options="optionsMulti2" 
									:multiple="false" 
									group-values="dep2" 
									:close-on-select="true"
									group-label="dep1" 
									:group-select="false" 
									placeholder="과목" 
									track-by="name" 
									label="name">
									<template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
								</multiselect>
								<span class="selectSet mr5">
									<select name="" id="">
										<option value="no" class="label">과목 선택</option>
									</select>
								</span>
								<span class="selectSet mr5">
									<select name="" id="">
										<option value="no" class="label">선생님 선택</option>
									</select>
								</span>
								<input type="text" placeholder="영상의 상단에 표기될 제목을 입력해 주세요" class="wHalf">
							</td>
						</tr>
						<tr>
							<th>영상 한 줄 평 <sup>필수</sup></th>
							<td>
								<div class="tbList">
									<dl>
										<dt>영상 한 줄 평(1)</dt>
										<dd><input type="text" placeholder="한 줄 평(1). 예) “반복, 또 계속 반복할 것”"></dd>
									</dl>
									<dl>
										<dt>영상 한 줄 평(2)</dt>
										<dd><input type="text" placeholder="한 줄 평(2). 예) - 배지윤 선생님 자료만 봤어요 1차는 반복이 답, 2차는 만능 틀 활용하기"></dd>
									</dl>
								</div>
							</td>
						</tr>
						<tr>
							<th>영상 URL <sup>필수</sup></th>
							<td>
								<LandingTypeComponent></LandingTypeComponent>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<strong class="leafLabel blue mt20">Mobile</strong>
			<p class="infoMsg fBlue">* PC에서 등록된 컨텐츠를 사용함</p>
		</div>
		<!-- //신규등록 -->
		<!-- 상세/수정 -->
		<div class="detailView" v-else-if="view == 'detail'">
			<div class="subTit">
				<h3>상세/수정</h3>
				<span class="right">
					<button class="btnM green">저장</button>
					<button class="btnM ml10 gray" @click="view = 'list'">취소</button>
				</span>
			</div>
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
							<th>노출여부 <sup>필수</sup></th>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show00">
									<label for="show00">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<th>노출기간 <sup>필수</sup></th>
							<td>
								<VCalendar class="calSet mr5" v-model="date00" color="green">
									<template v-slot="{ inputValue, togglePopover }">
										<input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
									</template>
								</VCalendar>
								<span class="selectSet">
									<select name="" id="">
										<option v-for="option in timeOptions" v-bind:value="option.value">
											{{ option.text }}
										</option>
									</select>
								</span>
								<em class="inBlock mlr5">~</em>
								<VCalendar class="calSet mr5" v-model="date01" color="green">
									<template v-slot="{ inputValue, togglePopover }">
										<input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
									</template>
								</VCalendar>
								<span class="selectSet">
									<select name="" id="">
										<option v-for="option in timeOptions" v-bind:value="option.value">
											{{ option.text }}
										</option>
									</select>
								</span>
							</td>
						</tr>
						<tr>
							<th>제목 <sup>필수</sup></th>
							<td><input type="text" placeholder="제목을 입력해 주세요." value="합격수기 제목을 표시합니다 (이벤트 100)"/></td>
							<td colspan="2"><p class="infoMsg fGreen">* 컨텐츠를 관리하기 위한 제목으로 화면에서 사용되는 데이터가 아님</p></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				<strong class="leafLabel mt20">공통/PC</strong>
				<span class="clickNum ml10">클릭 수 <b>9,999</b></span>
			</div>
			<div class="tvs">
				<table>
					<colgroup>
						<col width="160"/>
						<col width="1420"/>
					</colgroup>
					<tbody>
						<tr>
							<th>플레이어 썸네일 <sup>필수</sup></th>
							<td>
								<span class="uploadMulty">
                  <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
                  <span class="fileChoice" style="display:none;">
                    <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                    <em>* 권장 이미지 사이즈: 693 X 395</em>
                  </span>
                  <span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
                </span>
							</td>
						</tr>
						<tr>
							<th>영상 타이틀 <sup>필수</sup></th>
							<td>
								<span class="selectSet mr5">
									<select name="" id="">
										<option value="no" class="label">과목 선택</option>
										<option value="">유아</option>
									</select>
								</span>
								<span class="selectSet mr5">
									<select name="" id="">
										<option value="no" class="label">선생님 선택</option>
										<option value="">배지윤</option>
									</select>
								</span>
								<input type="text" placeholder="영상의 상단에 표기될 제목을 입력해 주세요" value=" 2021 서울 수석 합격의 비밀" class="wHalf">
							</td>
						</tr>
						<tr>
							<th>영상 한 줄 평 <sup>필수</sup></th>
							<td>
								<div class="tbList">
									<dl>
										<dt>영상 한 줄 평(1)</dt>
										<dd><input type="text" placeholder="한 줄 평(1). 예) “반복, 또 계속 반복할 것”" value="“반복, 또 계속 반복할 것”"></dd>
									</dl>
									<dl>
										<dt>영상 한 줄 평(2)</dt>
										<dd><input type="text" placeholder="한 줄 평(2). 예) - 배지윤 선생님 자료만 봤어요 1차는 반복이 답, 2차는 만능 틀 활용하기" value="배지윤 선생님 자료만 봤어요, 1차는 반복이 답, 2차는 만능 틀 활용하기"></dd>
									</dl>
								</div>
							</td>
						</tr>
						<tr>
							<th>영상 URL <sup>필수</sup></th>
							<td>
								<LandingTypeComponent></LandingTypeComponent>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				<strong class="leafLabel blue mt20">Mobile</strong>
				<span class="clickNum ml10">클릭 수 <b>9,999</b></span>
			</div>
			<p class="infoMsg fBlue">* PC에서 등록된 컨텐츠를 사용함</p>
	    <!-- 관리 -->
	    <div class="subTit"><h3>관리</h3></div>
	    <div class="tvs record">
	      <table>
					<colgroup>
						<col width="160"/>
						<col width="1420"/>
					</colgroup>
	        <tbody>
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
		</div>
		<!-- 상세/수정 -->


		<!-- Popup -->
		<!-- 사이트관리 내 공통사용 팝업 -->
		<Popup v-if='popupSitemgt' @close="popupSitemgt = false" :popClass="classValue">
			<h1 slot="modalheader" class="tC">메뉴 명</h1>
			<div slot="modalbody">
				<dl>
					<dt>내비게이션에 표시될 메뉴 명</dt>
					<dd>
						<input type="text" value="합격비밀: 2021 합격수기" class="wFull"/>
						<p>※ 메뉴 명은 최대 20자 이내를 권장함</p>
					</dd>
				</dl>
			</div>
			<div slot="modalfooter" class="modalfooter">
				<button class="btnM line" @click="popupSitemgt = false">취소</button>
				<button class="btnM green" @click="popupSitemgt = false">저장</button>
			</div>
		</Popup>
		<!---->
		<Popup v-if='popupVodTitle' @close="popupVodTitle = false" :popClass="classValue">
			<h1 slot="modalheader" class="tC">영상 타이틀</h1>
			<div slot="modalbody">
				<dl>
					<dt>과목 및 선생님</dt>
					<dd>
						<div class="halfCase">
							<span class="selectSet">
								<select name="" id="">
									<option value="no" class="label">과목 선택</option>
									<option value=""></option>
								</select>
							</span>
							<span class="selectSet">
								<select name="" id="">
									<option value="no" class="label">선생님 선택</option>
									<option value=""></option>
								</select>
							</span>
						</div>
						<p>※ 영상의 상단에 표기될 과목과 선생님을 선택함</p>
					</dd>
				</dl>
				<dl>
					<dt>제목</dt>
					<dd>
						<input type="text" value="" class="wFull"/>
						<p>※ 영상의 상단에 표기될 제목을 입력함</p>
					</dd>
				</dl>
			</div>
			<div slot="modalfooter" class="modalfooter">
				<button class="btnM line" @click="popupVodTitle = false">취소</button>
				<button class="btnM green" @click="popupVodTitle = false">저장</button>
			</div>
		</Popup>
		<!---->
		<Popup v-if='popupVodReview' @close="popupVodReview = false" :popClass="classValue">
			<h1 slot="modalheader" class="tC">영상 한 줄 평</h1>
			<div slot="modalbody">
				<dl>
					<dt>메인 한 줄 평</dt>
					<dd>
						<input type="text" value="" class="wFull"/>
						<p>※ 영상의 하단에 강조되어 표기될 한 줄 평을 입력함</p>
					</dd>
				</dl>
				<dl>
					<dt>서브 한 줄 평(1)</dt>
					<dd>
						<input type="text" value="" class="wFull"/>
						<p>※ 영상의 하단에 표기될 한 줄 평을 입력함</p>
					</dd>
				</dl>
				<dl>
					<dt>서브 한 줄 평(2)</dt>
					<dd>
						<input type="text" value="" class="wFull"/>
						<p>※ 영상의 하단에 표기될 한 줄 평을 입력함</p>
					</dd>
				</dl>
			</div>
			<div slot="modalfooter" class="modalfooter">
				<button class="btnM line" @click="popupVodReview = false">취소</button>
				<button class="btnM green" @click="popupVodReview = false">저장</button>
			</div>
		</Popup>
		<!---->
		<Popup v-if='popupTargetURL' @close="popupTargetURL = false" :popClass="classValue">
			<h1 slot="modalheader" class="tC">Target URL</h1>
			<div slot="modalbody">
				<dl>
					<dt>영상 설정 (1)의 Target URL</dt>
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
						<p>※ 해당 화면을 클릭했을 때 이동할 상세내용 화면 URL을 등록함</p>
					</dd>
				</dl>
			</div>
			<div slot="modalfooter" class="modalfooter">
				<button class="btnM line" @click="popupTargetURL = false">취소</button>
				<button class="btnM green" @click="popupTargetURL = false">저장</button>
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
  name: 'BannerIntroPassReview',
	data() {
			return {
				view: 'list',
				ipBtnStatus: true,
	      timeOptions: [
	        { text: '00시', value: '00' },
	        { text: '01시', value: '01' },
	        { text: '02시', value: '02' },
	        { text: '03시', value: '03' },
	        { text: '04시', value: '04' },
	        { text: '05시', value: '05' },
	        { text: '06시', value: '06' },
	        { text: '07시', value: '07' },
	        { text: '08시', value: '08' },
	        { text: '09시', value: '09' },
	        { text: '10시', value: '10' },
	        { text: '11시', value: '11' },
	        { text: '12시', value: '12' },
	        { text: '13시', value: '13' },
	        { text: '14시', value: '14' },
	        { text: '15시', value: '15' },
	        { text: '16시', value: '16' },
	        { text: '17시', value: '17' },
	        { text: '18시', value: '18' },
	        { text: '19시', value: '19' },
	        { text: '20시', value: '20' },
	        { text: '21시', value: '21' },
	        { text: '22시', value: '22' },
	        { text: '23시', value: '23' },
	        { text: '24시', value: '24' },
	      ],
	      minuteOptions: [
	        { text: '00분', value: '00' },
	        { text: '01분', value: '01' },
	        { text: '02분', value: '02' },
	        { text: '03분', value: '03' },
	        { text: '04분', value: '04' },
	        { text: '05분', value: '05' },
	        { text: '06분', value: '06' },
	        { text: '07분', value: '07' },
	        { text: '08분', value: '08' },
	        { text: '09분', value: '09' },
	        { text: '10분', value: '10' },
	        { text: '11분', value: '11' },
	        { text: '12분', value: '12' },
	        { text: '13분', value: '13' },
	        { text: '14분', value: '14' },
	        { text: '15분', value: '15' },
	        { text: '16분', value: '16' },
	        { text: '17분', value: '17' },
	        { text: '18분', value: '18' },
	        { text: '19분', value: '19' },
	        { text: '20분', value: '20' },
	        { text: '21분', value: '21' },
	        { text: '22분', value: '22' },
	        { text: '23분', value: '23' },
	        { text: '24분', value: '24' },
	        { text: '25분', value: '25' },
	        { text: '26분', value: '26' },
	        { text: '27분', value: '27' },
	        { text: '28분', value: '28' },
	        { text: '29분', value: '29' },
	        { text: '30분', value: '30' },
	        { text: '31분', value: '31' },
	        { text: '32분', value: '32' },
	        { text: '33분', value: '33' },
	        { text: '34분', value: '34' },
	        { text: '35분', value: '35' },
	        { text: '36분', value: '36' },
	        { text: '37분', value: '37' },
	        { text: '38분', value: '38' },
	        { text: '39분', value: '39' },
	        { text: '40분', value: '40' },
	        { text: '41분', value: '41' },
	        { text: '42분', value: '42' },
	        { text: '43분', value: '43' },
	        { text: '44분', value: '44' },
	        { text: '45분', value: '45' },
	        { text: '46분', value: '46' },
	        { text: '47분', value: '47' },
	        { text: '48분', value: '48' },
	        { text: '49분', value: '49' },
	        { text: '50분', value: '50' },
	        { text: '51분', value: '51' },
	        { text: '52분', value: '52' },
	        { text: '53분', value: '53' },
	        { text: '54분', value: '54' },
	        { text: '55분', value: '55' },
	        { text: '56분', value: '56' },
	        { text: '57분', value: '57' },
	        { text: '58분', value: '58' },
	        { text: '59분', value: '59' },
	      ],
				multyFuleName: '파일첨부',
				alertfileDelete: false,
	      classPreview: "imgPreviewPop",
				popupPreviewImg: false,
				popupSitemgt:false,
				popupTargetURL: false,
				popupVodTitle: false,
				popupVodReview: false,
				showFileChoice: true,
        showFileModify: false,
        multiValue2: null,
        optionsMulti2: [
          {
            dep1: '교육학',
            dep2: [
              { name: '교육학', category: 'subject01' },
            ]
          },
          {
            dep1: '논술·면접',
            dep2: [
              { name: '면접', category: 'subject02' },
              { name: '논술', category: 'subject02' },
            ]
          },
          {
            dep1: '유아',
            dep2: [
              { name: '유아', category: 'subject03' },
            ]
          },
          {
            dep1: '초등',
            dep2: [
              { name: '초등', category: 'subject04' },
            ]
          },
          {
            dep1: '중등',
            dep2: [
              { name: '국어', category: 'subject05' },
              { name: '영어', category: 'subject05' },
              { name: '수학교육론', category: 'subject05' },
            ]
          }
        ],
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
