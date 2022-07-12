<template lang="html">
	<div>
		<!-- 목록 -->
		<div class="listView" v-if="view == 'list'">
			<div class="boxBrown msgBtnSet">
				<p class="msg fGreen">※ 노출되는 컨텐츠는 8개로 한정되며 높은 번호를 첫번째 순서로 하여 컨텐츠를 노출함</p>
			</div>
			<!-- 2021-12-24 자동롤링주기 삭제 -->
			<div class="boardTop mt10">
				<div class="right">
					<button class="btnS" @click="view = 'menuWrite'">메뉴 추가</button>
				</div>
			</div>
			<div class="tls siteRecommendList">	
				<table>
					<colgroup>
						<col width="140"/>
						<col width="140"/>
						<col width="*"/>
						<col width="140"/>
					</colgroup>
					<thead>
						<tr>
							<th>노출여부</th>
							<th>번호</th>
							<th>탭 타이틀</th>
							<th>순서 변경</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="push1" >
									<label for="push1">
										<span>차단</span>
										<span>허용</span>
									</label>
								</span>
							</td>
							<td>7</td>
							<td><a @click="view = 'menuDetail'">강의 하이라이트</a></td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="push2" checked>
									<label for="push2">
										<span>차단</span>
										<span>허용</span>
									</label>
								</span>
							</td>
							<td>6</td>
							<td><a @click="view = 'menuDetail'">기출 해설</a></td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="push3" checked>
									<label for="push3">
										<span>차단</span>
										<span>허용</span>
									</label>
								</span>
							</td>
							<td>5</td>
							<td><a @click="view = 'menuDetail'">입문 강의</a></td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="push3" checked>
									<label for="push3">
										<span>차단</span>
										<span>허용</span>
									</label>
								</span>
							</td>
							<td>4</td>
							<td><a @click="view = 'menuDetail'">무료 강의</a></td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="push3" checked>
									<label for="push3">
										<span>차단</span>
										<span>허용</span>
									</label>
								</span>
							</td>
							<td>3</td>
							<td><a @click="view = 'menuDetail'">최신교재</a></td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="push3" checked>
									<label for="push3">
										<span>차단</span>
										<span>허용</span>
									</label>
								</span>
							</td>
							<td>2</td>
							<td><a @click="view = 'menuDetail'">추천 기기</a></td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="push3" checked>
									<label for="push3">
										<span>차단</span>
										<span>허용</span>
									</label>
								</span>
							</td>
							<td>1</td>
							<td><a @click="view = 'menuDetail'">리얼 적중</a></td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<!-- //목록 -->
		<!-- 메뉴 추가 -->
		<div class="menuWriteView" v-else-if="view == 'menuWrite'">
			<div class="boardTop recommend">
				<div class="right">
					<button class="btnList" @click="view = 'list'">목록으로</button>
				</div>
			</div>
			<div class="subTit">
				<h3>레이아웃 신규등록</h3>
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
							<th>탭 타이틀 <sup>필수</sup></th>
							<td>
								<div class="ipBtn">
									<input type="text" placeholder="탭 타이틀을 입력해 주세요.">
									<button class="btnS">저장</button>
								</div>
							</td>
						</tr>
						<tr>
							<th>레이아웃 <sup>필수</sup></th>
							<td>
								<span class="radioSet">
									<input type="radio" name="newLayout" id="newLayout1" checked/>
									<label for="newLayout1"><i></i><img img :src="require(`@/assets/images/i_layout1.png`)" alt="" class="iLayout" /> 첫 번째 컨텐츠를 강조함</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="newLayout" id="newLayout2" />
									<label for="newLayout2"><i></i><img img :src="require(`@/assets/images/i_layout2.png`)" alt="" class="iLayout" /> 모든 컨텐츠를 동일하게 표시함</label>
								</span>
							</td>
							<th>바로가기 URL</th>
							<td>
								<div class="ipBtn">
									<input type="text" placeholder="URL을 입력해주세요.">
									<button class="btnS">저장</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="boxBrown msgBtnSet mtb20">
				<p class="msg fGreen">※ 노출되는 컨텐츠는 7~8개로 제한하며 높은 번호를 첫번째 순서로 하여 컨텐츠를 노출함 (자동으로 신규노출이 설정되면 낮은 번호가 자동으로 숨김 처리됨)  </p>
				<span class="btnSet">
					<button class="btnAdd" @click="view = 'contentsWrite'">신규등록</button>
				</span>
			</div>
			<div class="tls mt20">
				<table>
					<colgroup>
						<col width="100"/>
						<col width="100"/>
						<col width="200"/>
						<col width="500"/>
						<col width="250"/>
						<col width="100"/>
						<col width="100"/>
						<col width="150"/>
					</colgroup>
					<thead>
						<tr>
							<th>노출여부</th>
							<th>번호</th>
							<th>썸네일 이미지<br>(첫번째 이미지)</th>
							<th>제목</th>
							<th>노출기간</th>
							<th>작성일</th>
							<th>작성자</th>
							<th>순서변경</th>
						</tr>
					</thead>
					<tbody>
						<!-- 데이터 없을 경우 -->
						<tr><td colspan="8" class="noneData">등록된 데이터가 존재하지 않습니다.</td></tr>
						<!-- //데이터 없을 경우 -->
					</tbody>
				</table>
			</div>
			<Paginate/>
		</div>
		<!-- //메뉴 추가 -->
		<!-- 메뉴 상세 -->
		<div class="menuDetailView" v-else-if="view == 'menuDetail'">
			<div class="boardTop recommend">
				<div class="left">
					<strong>강의 하이라이트</strong>
				</div>
				<div class="right">
					<button class="btnList" @click="view = 'list'">목록으로</button>
				</div>
			</div>
			<div class="subTit">
				<h3>레이아웃 상세/수정</h3>
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
							<th>탭 타이틀 <sup>필수</sup></th>
							<td>
								<div class="ipBtn">
									<input type="text" placeholder="탭 타이틀을 입력해 주세요." value="강의 하이라이트">
									<button class="btnS">저장</button>
								</div>
							</td>
						</tr>
						<tr>
							<th>레이아웃 <sup>필수</sup></th>
							<td>
								<span class="radioSet">
									<input type="radio" name="layout" id="layout1" checked/>
									<label for="layout1"><i></i><img img :src="require(`@/assets/images/i_layout1.png`)" alt="" class="iLayout" /> 첫 번째 컨텐츠를 강조함</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="layout" id="layout2" />
									<label for="layout2"><i></i><img img :src="require(`@/assets/images/i_layout2.png`)" alt="" class="iLayout" /> 모든 컨텐츠를 동일하게 표시함</label>
								</span>
							</td>
							<th>바로가기 URL</th>
							<td>
								<div class="ipBtn">
									<input type="text" placeholder="URL을 입력해주세요.">
									<button class="btnS">저장</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="boxBrown msgBtnSet mtb20">
				<p class="msg fGreen">※ 노출되는 컨텐츠는 7~8개로 제한하며 높은 번호를 첫번째 순서로 하여 컨텐츠를 노출함 (자동으로 신규노출이 설정되면 낮은 번호가 자동으로 숨김 처리됨)  </p>
				<span class="btnSet">
					<button class="btnAdd" @click="view = 'contentsWrite'">신규등록</button>
				</span>
			</div>
			<div class="tls mt20">
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
						<col width="150"/>
					</colgroup>
					<thead>
						<tr>
							<th>노출여부</th>
							<th>번호</th>
							<th>썸네일 이미지<br>(첫번째 이미지)</th>
							<th>제목</th>
							<th>노출기간</th>
							<th>클릭수<br/>(PC)</th>
							<th>클릭수<br/>(Mobile)</th>
							<th>작성일</th>
							<th>순서변경</th>
						</tr>
					</thead>
					<tbody>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="ctsShow01" checked>
									<label for="ctsShow01">
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
							<td class="tL"><a @click="view = 'contentsDetail'">추천컨텐츠 제목을 표시합니다 (이벤트 100)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-25</td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="ctsShow02" checked>
									<label for="ctsShow02">
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
							<td class="tL"><a @click="view = 'contentsDetail'">추천컨텐츠 제목을 표시합니다 (이벤트 99)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-25</td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="ctsShow03" checked>
									<label for="ctsShow03">
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
							<td class="tL"><a @click="view = 'contentsDetail'">추천컨텐츠 제목을 표시합니다 (이벤트 98)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-25</td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="ctsShow04" checked>
									<label for="ctsShow04">
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
							<td class="tL"><a @click="view = 'contentsDetail'">추천컨텐츠 제목을 표시합니다 (이벤트 97)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-25</td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="ctsShow05" checked>
									<label for="ctsShow05">
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
							<td class="tL"><a @click="view = 'contentsDetail'">추천컨텐츠 제목을 표시합니다 (이벤트 96)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-25</td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="ctsShow06" checked>
									<label for="ctsShow06">
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
							<td class="tL"><a @click="view = 'contentsDetail'">추천컨텐츠 제목을 표시합니다 (이벤트 95)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-25</td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="ctsShow07" checked>
									<label for="ctsShow07">
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
							<td class="tL"><a @click="view = 'contentsDetail'">추천컨텐츠 제목을 표시합니다 (이벤트 94)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-25</td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="ctsShow08">
									<label for="ctsShow08">
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
							<td class="tL"><a @click="view = 'contentsDetail'">추천컨텐츠 제목을 표시합니다 (이벤트 93)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-25</td>
							<td></td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="ctsShow09">
									<label for="ctsShow09">
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
							<td class="tL"><a @click="view = 'contentsDetail'">추천컨텐츠 제목을 표시합니다 (이벤트 92)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-25</td>
							<td></td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="ctsShow10">
									<label for="ctsShow10">
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
							<td class="tL"><a @click="view = 'contentsDetail'">추천컨텐츠 제목을 표시합니다 (이벤트 91)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-25</td>
							<td></td>
						</tr>
						<!-- 데이터 없을 경우 -->
						<tr style="display:none;"><td colspan="9" class="noneData">등록된 데이터가 존재하지 않습니다.</td></tr>
						<!-- //데이터 없을 경우 -->
					</tbody>
				</table>
			</div>
			<Paginate/>
		</div>
		<!-- //메뉴 상세 -->
		<!-- 컨텐츠 신규등록 -->
		<div class="ctsWriteView" v-else-if="view == 'contentsWrite'">
			<div class="boardTop recommend">
				<div class="left">
					<strong>강의 하이라이트</strong>
				</div>
				<div class="right">
					<button class="btnList" @click="view = 'menuDetail'">목록으로</button>
					<button class="btnM green ml10" @click="view = 'contentsDetail'">등록</button>
					<button class="btnM gray ml10" @click="view = 'menuDetail'">취소</button>
				</div>
			</div>
			<div class="subTit"><h3>신규등록</h3></div>
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
						<col width="630"/>
						<col width="160"/>
						<col width="630"/>
					</colgroup>
					<tbody>
						<tr>
							<th>썸네일 이미지 <sup>필수</sup></th>
							<td>
								<span class="uploadMulty">
									<span class="thumb"><em>등록된 이미지가 없습니다.</em></span>
									<span class="fileChoice" v-show="showFileChoice">
										<strong><input type="file" id="fileMultyWrite" @change="uploadMulty" /><label for="fileMultyWrite">파일 첨부</label></strong>
										<em>* 권장 이미지 사이즈: 428 X 120</em><!-- 2021-12-24 사이즈 수정 -->
									</span>
									<span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
								</span>
							</td>
							<th>추천 컨텐츠<br/>타이틀 <sup>필수</sup></th>
							<td>
								<input type="text" value="교육과정 총론 부모 교육론" class="mb10"/>
								<input type="text" value="단기합격 최다배출 명료한 유아강의!"/>
							</td>
						</tr>
						<tr>
							<th>URL <sup>필수</sup></th>
							<td colspan="3">
								<LandingTypeComponent></LandingTypeComponent>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<strong class="leafLabel blue mt20">Mobile</strong>
			<p class="infoMsg fBlue">* PC에서 등록된 컨텐츠를 사용함</p>
		</div>
		<!-- //컨텐츠 신규등록 -->
		<!-- 컨텐츠 상세 -->
		<div class="ctsDetailView" v-else-if="view == 'contentsDetail'">
			<div class="boardTop recommend">
				<div class="left">
					<strong>강의 하이라이트</strong>
				</div>
				<div class="right">
					<button class="btnList" @click="view = 'menuDetail'">목록으로</button>
					<button class="btnM green ml10">저장</button>
					<button class="btnM gray ml10" @click="view = 'menuDetail'">취소</button>
				</div>
			</div>
			<div class="subTit"><h3>상세/수정</h3></div>
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
			<div>
				<strong class="leafLabel mt20">공통/PC</strong>
				<span class="clickNum ml10">클릭 수 <b>9,999</b></span>
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
							<th>썸네일 이미지 <sup>필수</sup></th>
							<td>
								<span class="uploadMulty">
									<span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
									<span class="fileChoice" style="display:none;">
										<strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
										<em>* 권장 이미지 사이즈: 428 X 120</em><!-- 2021-12-24 사이즈 수정 -->
									</span>
									<span class="fileModify">01_ad_banner01_ev…<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
								</span>
							</td>
							<th>추천 컨텐츠<br/>타이틀 <sup>필수</sup></th>
							<td>
								<input type="text" value="교육과정 총론 부모 교육론" class="mb10"/>
								<input type="text" value="단기합격 최다배출 명료한 유아강의!"/>
							</td>
						</tr>
						<tr>
							<th>URL <sup>필수</sup></th>
							<td colspan="3">
								<LandingTypeComponent></LandingTypeComponent>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				<strong class="leafLabel blue mt20">Mobile</strong>
				<span class="clickNum ml10">클릭 수 <b>9,999</b></span>
				<p class="infoMsg fBlue">* PC에서 등록된 컨텐츠를 사용함</p>
			</div>
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
		<!-- //컨텐츠 상세 -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'BannerMainRecommend',
	data() {
		return {
			view: 'list',
			multyFuleName: '파일첨부',
			alertfileDelete: false,
      classPreview: "imgPreviewPop",
			popupPreviewImg: false,
      classValue: "siteMgtPop",
			popupSitemgt:false,
			popupTargetURL: false,
			popupMenuColor: false,
			showFileChoice: true,
			showFileModify: false,
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
