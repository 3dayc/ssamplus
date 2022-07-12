<template lang="html">
    <div id="windowLayout">
      <div class="winHeader">
        <h1>수강관리</h1>
        <span class="supTxt">* 인강 수강생의 수강기간, 강의 시간, 재수강, 자료 인쇄, 다운로드, 홀딩을 관리할 수 있습니다.</span>
      </div>
      <div class="winContent">
        <!-- 써머리 -->
        <div class="subStatusBox gridSet grid6-4">
          <div class="gridItem">
            <strong>[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사 반 <em class="iSet yellow">제작중</em></strong>
            <ul>
              <li><em>수강기간 :</em> 2021-02-04 ~ 2021-03-15 (70일)</li>
              <li><em>시간제한 :</em> 1.4배수</li>
            </ul>
          </div>
          <div class="gridItem">
            <strong class="tit">성명/아이디 : 김지민 / jimin0123</strong>
            <ul>
              <li><em>준비시험 :</em> 중등중국어</li>
              <li><em class="wAtuo">연락처 :</em> 010-1234-5678</li>
            </ul>
          </div>
        </div>
        <!-- //써머리 -->
				<!-- tab-wrap -->
				<div class="tabwrap">
					<!-- tab -->
					<div class="tabBack">
						<div class="tabNav">
							<nav>
								<ul class="sub">
									<li :class="{on:memberTab===0}"><button @click="memberTab = 0">수강기간 설정</button></li>
									<li :class="{on:memberTab===1}"><button @click="memberTab = 1">강의시간 설정</button></li>
									<li :class="{on:memberTab===2}"><button @click="memberTab = 2">재수강</button></li>
									<li :class="{on:memberTab===3}"><button @click="memberTab = 3">자료실</button></li>
									<li :class="{on:memberTab===4}"><button @click="memberTab = 4">모바일 다운로드</button></li>
									<li :class="{on:memberTab===5}"><button @click="memberTab = 5">홀딩</button></li>
								</ul>
							</nav>
						</div>
					</div>
					<!--// tab -->
					<div class="tabLayout boxGray">
  					<!-- 수강기간 설정 -->
            <div v-if="memberTab == 0" class="tabData">
              <!-- 2021-08-23 수강 시작일 설정 -->
          		<h3><strong>수강 시작일 설정</strong></h3>
              <div class="tvsWhite">
                <table>
                  <tbody>
                    <tr>
                      <VCalendar class="calSet" v-model="calDate" color="green">
                        <template v-slot="{ inputValue, togglePopover }">
                          <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                        </template>
                      </VCalendar>
                        <button class="btnS ml10">적용</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- //2021-08-23 수강 시작일 설정 -->
              <!---->
          		<h3><strong>수강기간 설정</strong></h3>
              <div class="tvsWhite">
                <table>
                  <tbody>
                    <tr>
                      <td class="courseTerm case2"><!-- 2021-12-03 class 수정 -->
                        <span class="calDupSet">
                          <VCalendar class="calSet" v-model="calDate01" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                            </template>
                          </VCalendar>
                          <em>~</em>
                          <VCalendar class="calSet" v-model="calDate02" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                            </template>
                          </VCalendar>
                        </span>
                        <span class="unit">
                          <input type="text" placeholder="숫자만 입력" class="tC"><em>일</em>
                        </span>
                        <input type="text" class="endDate" value="2021-03-01" disabled />
                        <!-- 2021-12-02 새로고침 버튼 위치 이동 -->
                      </td>
                      <!-- 2021-12-03 위치 변경 -->
                      <td class="tR">
                        <span class="termTotal">총 연장일수 <strong>7</strong>일   /   총 연장금액  <strong>33,300</strong>원</span>
                        <button type="button" class="btnRefreshRnd">새로고침</button>
                      </td>
                      <!-- //2021-12-03 위치 변경 -->
                    </tr>
                    <tr>
                      <td colspan="2" class="tR"><!-- 2021-12-03 수정 -->
                        <!-- 2021-12-02 총 일수 위치 이동 -->
                        <button class="btnM redline ml10">장바구니</button>
                        <button class="btnM red ml10">즉시적용</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!---->
          		<h3><strong>연장 가능횟수 설정</strong></h3>
              <div class="tvsWhite wHalf">
                <table>
          				<colgroup>
          					<col width="100"/>
            				<col width="200"/>
          					<col width="*" />
          				</colgroup>
                  <thead>
                    <tr>
                      <th>연장 현황</th>
                      <th>연장 가능횟수</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="tC">3회 / 3회</td>
                      <td class="tC">
                        <span class="quantityBox">
  												<button class="countMinus">-</button>
  												<strong>1</strong>
  												<button class="countPlus">+</button>
  											</span>
                      </td>
                      <td><button class="btnT line">적용</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!---->
          		<h3><strong>관리</strong></h3>
          		<div class="tvs record">
          			<table>
          				<colgroup>
          					<col width="160"/>
          					<col width="*"/>
          				</colgroup>
          				<tbody>
          					<tr>
          						<th>수정 이력</th>
          						<td>
          							<ul class="recordList">
          								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 수정</li>
          								<li><strong>[2021-02-23 15:35  / 홍길동 ]</strong> 등록</li>
          							</ul>
          						</td>
          					</tr>
          				</tbody>
          			</table>
          		</div>
            </div>
  					<!--//수강기간 설정 -->
  					<!-- 강의시간 설정 -->
            <div v-if="memberTab == 1" class="tabData">
              <h3>
                <strong>강의시간 설정</strong>
                <span class="right">
                  <button class="btnRefresh mr10" @click="alertTrigger = true">초기화</button>
                  <button class="btnM line" @click="alertTrigger02 = true">배수 변경</button>
                  <button class="btnM ml10" @click="alertTrigger03 = true">시간 추가</button>
                </span>
              </h3>
          		<div class="tls subGreen timeTerm">
          			<table>
          				<colgroup>
          					<col width="60"/>
          					<col width="40"/>
          					<col width="*"/>
          					<col width="90"/>
          					<col width="100"/>
          					<col width="110"/>
          					<col width="120"/>
          					<col width="130"/>
          				</colgroup>
          				<thead>
          					<tr>
          						<th>
                        <span class="checkSet noLabel">
                          <input type="checkbox" />
                          <label for=""><i></i></label>
                        </span>
                      </th>
          						<th>강의회차</th>
          						<th>강의명</th>
          						<th>강의시간</th>
          						<th>수강가능시간<br/>(강의시간x배수)</th>
          						<th>수강현황</th>
          						<th colspan="2">시간추가 / 배수 변경</th>
          					</tr>
          				</thead>
          				<tbody>
          					<tr>
          						<td>
                        <span class="checkSet noLabel">
                          <input type="checkbox" />
                          <label for=""><i></i></label>
                        </span>
                      </td>
                      <td>1강</td>
                      <td>O.T 안내 / 도약 모고 A형 해설</td>
                      <td>28분 00초</td>
                      <td>39분 12초</td>
                      <td>수강: <span class="fBlue">10분 02초</span><br/>잔여: <span class="fBlue">29분 10초</span></td>
                      <td class="tL">
                        <span class="unit small"><input type="text"><em>분</em></span> ( 초)
                      </td>
                      <td>
                        <span class="selectSet">
                          <select name="" id="">
                            <option value="no" class="label">배수 선택</option>
                            <option value="">0배수</option>
                            <option value="">0.5배수</option>
                            <option value="">0.8배수</option>
                            <option value="">1배수</option>
                            <option value="">1.5배수</option>
                            <option value="">2배수</option>
                            <option value="">원래대로</option>
                          </select>
                        </span>
                        <button class="btnS line">변경</button>
                      </td>
          					</tr>
          					<tr>
          						<td>
                        <span class="checkSet noLabel">
                          <input type="checkbox" />
                          <label for=""><i></i></label>
                        </span>
                      </td>
                      <td>2강</td>
                      <td>O.T 안내 / 도약 모고 A형 해설</td>
                      <td>28분 00초</td>
                      <td>39분 12초</td>
                      <td>수강: <span class="fBlue">00분 00초</span><br/>잔여: <span class="fBlue">39분 12초</span></td>
                      <td class="tL">
                        <span class="unit small"><input type="text" value="10"><em>분</em></span> (600초)
                      </td>
                      <td>
                        <span class="selectSet">
                          <select name="" id="">
                            <option value="no" class="label">배수 선택</option>
                            <option value="">0배수</option>
                            <option value="">0.5배수</option>
                            <option value="">0.8배수</option>
                            <option value="">1배수</option>
                            <option value="" selected>1.5배수</option>
                            <option value="">2배수</option>
                            <option value="">원래대로</option>
                          </select>
                        </span>
                        <button class="btnS line">변경</button>
                      </td>
          					</tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
          				</tbody>
          			</table>
          		</div>
              <h3><strong>관리</strong></h3>
          		<div class="tvs record">
          			<table>
          				<colgroup>
          					<col width="160"/>
          					<col width="*"/>
          				</colgroup>
          				<tbody>
          					<tr>
          						<th>수정 이력</th>
          						<td>
          							<ul class="recordList">
          								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 수정</li>
          								<li><strong>[2021-02-23 15:35  / 홍길동 ]</strong> 등록</li>
          							</ul>
          						</td>
          					</tr>
          				</tbody>
          			</table>
          		</div>
            </div>
  					<!--//강의시간 설정 -->
  					<!-- 재수강 -->
            <div v-if="memberTab == 2" class="tabData">
              <p class="mb20 boxBrown pd10">ⓘ 재수강이 불가능한 강좌입니다.</p><!-- 2021-09-27 추가 -->
              <h3><strong>재수강 등록</strong></h3>
              <div class="tvsWhite">
                <table>
          				<colgroup>
          					<col width="33%" span="3"/>
          				</colgroup>
                  <tbody>
                    <tr>
                      <td colspan="3" class="courseTerm">
                        <span class="calDupSet">
                          <VCalendar class="calSet" v-model="calDate01" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                            </template>
                          </VCalendar>
                          <em>~</em>
                          <VCalendar class="calSet" v-model="calDate02" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                            </template>
                          </VCalendar>
                        </span>
                        <span class="termTotal">재수강일수 <strong>42</strong>일   /   재수강금액 </span>
                        <span class="unit small">
                          <input type="text" class="tC"><em>원</em>
                        </span>
                        <button class="btnT greenline mr5">50%</button>
                        <button class="btnT greenline mr5">70%</button>
                        <button class="btnT greenline">100%</button>
                        <button type="button" class="btnRefreshRnd">새로고침</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong class="mr10">시간제한</strong>
                        <span class="selectSet">
                          <select name="" id="">
                            <option value="no" class="label">배수 선택</option>
                            <option value="">0배수</option>
                            <option value="">0.5배수</option>
                            <option value="">0.8배수</option>
                            <option value="" selected>1배수</option>
                            <option value="">1.5배수</option>
                            <option value="">2배수</option>
                          </select>
                        </span>
                        <input type="text" placeholder="직접 입력" class="w100 ml5"/><!-- 2021-08-23 배수 직접입력 추가 -->
                      </td>
                      <td>
                        <strong class="mr10">홀딩</strong>
                        <span class="unit small">
                          <input type="text"><em>일</em>
                        </span>
                        <span class="mr10"> 간</span>
                        <span class="unit small">
                          <input type="text"><em>회</em>
                        </span>
                      </td>
                      <td>
                        <strong class="mr10">연장</strong>
                        <span class="unit small">
                          <input type="text"><em>일</em>
                        </span>
                        <span class="mr10"> 간</span>
                        <span class="unit small">
                          <input type="text"><em>회</em>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="3" class="tR">
                        <button class="btnM redline">장바구니</button>
                        <button class="btnM red ml10">즉시적용</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3><strong>관리</strong></h3>
          		<div class="tvs record">
          			<table>
          				<colgroup>
          					<col width="160"/>
          					<col width="*"/>
          				</colgroup>
          				<tbody>
          					<tr>
          						<th>수정 이력</th>
          						<td>
          							<ul class="recordList">
          								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 수정</li>
          								<li><strong>[2021-02-23 15:35  / 홍길동 ]</strong> 등록</li>
          							</ul>
          						</td>
          					</tr>
          				</tbody>
          			</table>
          		</div>
            </div>
  					<!--//재수강 -->
  					<!-- 자료실 -->
            <div v-if="memberTab == 3" class="tabData">
              <h3>
                <strong>자료리스트</strong>
                <span class="right mt10">자료실 추가이용 가능기간<em class="ml5">2021-03-16 ~ 2021-03-30</em></span><!-- 2021-08-23 이용가능 기간 추가 -->
              </h3>
          		<div class="tls subGreen">
          			<table>
          				<colgroup>
          					<col width="30"/>
          					<col width="100"/>
          					<col width="130"/>
          					<col width="*"/>
          					<col width="90"/>
          					<col width="90"/>
          				</colgroup>
          				<thead>
          					<tr>
          						<th>번호</th>
          						<th>직강 수업일자</th>
          						<th>자료제목</th>
          						<th>자료상세</th>
          						<th>인쇄 현황</th>
          						<th>인쇄횟수 추가</th>
          					</tr>
          				</thead>
          				<tbody>
          					<tr>
          						<td rowspan="2">2</td>
                      <td rowspan="2">2021-02-10</td>
                      <td rowspan="2">[0211] 강의자료</td>
                      <td>2022학년도 대비_1,2월 서술식 대비_6회차</td>
                      <td>2회 / 3회</td>
                      <td><span class="unit"><input type="text" class="tC"><em>회</em></span></td>
          					</tr>
          					<tr>
                      <td>2022학년도 대비_1,2월 논술 대비_5회차</td>
                      <td>1회 / 3회</td>
                      <td><span class="unit"><input type="text" class="tC"><em>회</em></span></td>
          					</tr>
          					<tr>
                      <td>1</td>
                      <td>2021-02-05</td>
                      <td>강좌 full 교안</td>
                      <td>80점 도약 모의고사반 강좌 교안</td>
                      <td>3회 / 3회</td>
                      <td><span class="unit"><input type="text" class="tC"><em>회</em></span></td>
          					</tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
          				</tbody>
          			</table>
          		</div>
              <div class="tR pt10">
                <button class="btnM">추가</button>
              </div>
              <h3><strong>관리</strong></h3>
          		<div class="tvs record">
          			<table>
          				<colgroup>
          					<col width="160"/>
          					<col width="*"/>
          				</colgroup>
          				<tbody>
          					<tr>
          						<th>수정 이력</th>
          						<td>
          							<ul class="recordList">
          								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 수정</li>
          								<li><strong>[2021-02-23 15:35  / 홍길동 ]</strong> 등록</li>
          							</ul>
          						</td>
          					</tr>
          				</tbody>
          			</table>
          		</div>
            </div>
  					<!--//자료실 -->
  					<!-- 모바일 다운로드 -->
            <div v-if="memberTab == 4" class="tabData">
              <h3><strong>모바일 다운로드 관리</strong></h3>
          		<div class="tls subGreen">
          			<table>
          				<colgroup>
          					<col width="30"/>
          					<col width="*"/>
          					<col width="150"/>
          					<col width="90"/>
          				</colgroup>
          				<thead>
          					<tr>
          						<th>강의회차</th>
          						<th>강의명</th>
          						<th>모바일 다운로드 현황</th>
          						<th>다운로드 횟수 추가</th>
          					</tr>
          				</thead>
          				<tbody>
          					<tr>
          						<td>1강</td>
                      <td>O.T 안내 / 도약 모고 A형 해설</td>
                      <td>2회 / 3회</td>
                      <td><span class="unit"><input type="text" class="tC"><em>회</em></span></td>
          					</tr>
          					<tr>
                      <td>2강</td>
                      <td>도약 모고 (1회) 첨삭 해설 / 도약 모고 2회 A형 설명</td>
                      <td>1회 / 3회</td>
                      <td><span class="unit"><input type="text" class="tC"><em>회</em></span></td>
          					</tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="4" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
          				</tbody>
          			</table>
          		</div>
              <div class="tR pt10">
                <button class="btnM">추가</button>
              </div>
              <h3><strong>관리</strong></h3>
          		<div class="tvs record">
          			<table>
          				<colgroup>
          					<col width="160"/>
          					<col width="*"/>
          				</colgroup>
          				<tbody>
          					<tr>
          						<th>수정 이력</th>
          						<td>
          							<ul class="recordList">
          								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 수정</li>
          								<li><strong>[2021-02-23 15:35  / 홍길동 ]</strong> 등록</li>
          							</ul>
          						</td>
          					</tr>
          				</tbody>
          			</table>
          		</div>
            </div>
  					<!--//모바일 다운로드 -->
  					<!-- 홀딩 -->
            <div v-if="memberTab == 5" class="tabData">
              <h3>
                <strong>홀딩 관리</strong>
                <span class="right">
                  <button class="btnM">홀딩 추가</button>
                </span>
              </h3>
          		<div class="tls subGreen">
          			<table>
          				<colgroup>
          					<col width="70"/>
          					<col width="90"/>
          					<col width="210"/>
          					<col width="90"/>
          					<col width="70"/>
          				</colgroup>
          				<thead>
          					<tr>
          						<th>홀딩 회차</th>
          						<th>홀딩 신청일</th>
          						<th>홀딩 기간 (시작~종료)</th>
          						<th>홀딩 해제일 (재시작)</th>
          						<th>사용일수</th>
          					</tr>
          				</thead>
          				<tbody>
                    <tr class="blue">
                      <td>-</td>
                      <td>-</td>
                      <td>
                        <span class="calDupSet">
                          <VCalendar class="calSet" v-model="calDate11" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="홀딩 시작일 선택" />
                            </template>
                          </VCalendar>
                          <em>~</em>
                          <VCalendar class="calSet" v-model="calDate12" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="홀딩 종료일 선택" />
                            </template>
                          </VCalendar>
                        </span>
                      </td>
                      <td>
                        <VCalendar class="calSet" v-model="calDate13" color="green">
                          <template v-slot="{ inputValue, togglePopover }">
                            <input :value="inputValue" @click="togglePopover()" readonly placeholder="홀딩 해제일 선택" />
                          </template>
                        </VCalendar>
                        <button class="btnS ml5">완료</button>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>3회</td>
                      <td>2021-02-15</td>
                      <td>
                        <span class="calDupSet">
                          <VCalendar class="calSet" v-model="calDate21" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="홀딩 시작일 선택" />
                            </template>
                          </VCalendar>
                          <em>~</em>
                          <VCalendar class="calSet" v-model="calDate22" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="홀딩 종료일 선택" />
                            </template>
                          </VCalendar>
                        </span>
                      </td>
                      <td>
                        <VCalendar class="calSet" v-model="calDate23" color="green">
                          <template v-slot="{ inputValue, togglePopover }">
                            <input :value="inputValue" @click="togglePopover()" readonly placeholder="홀딩 해제일 선택" />
                          </template>
                        </VCalendar>
                        <button class="btnS ml5">변경</button>
                      </td>
                      <td>3일</td>
                    </tr>
                      <td>2회</td>
                      <td>2021-02-10</td>
                      <td>
                        <span class="calDupSet">
                          <VCalendar class="calSet" v-model="calDate31" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="홀딩 시작일 선택" />
                            </template>
                          </VCalendar>
                          <em>~</em>
                          <VCalendar class="calSet" v-model="calDate32" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="홀딩 종료일 선택" />
                            </template>
                          </VCalendar>
                        </span>
                      </td>
                      <td>
                        <VCalendar class="calSet" v-model="calDate33" color="green">
                          <template v-slot="{ inputValue, togglePopover }">
                            <input :value="inputValue" @click="togglePopover()" readonly placeholder="홀딩 해제일 선택" />
                          </template>
                        </VCalendar>
                        <button class="btnS ml5">변경</button>
                      </td>
                      <td>3일</td>
                    </tr>
                    <tr>
                      <td>1회</td>
                      <td>2021-02-05</td>
                      <td>
                        <span class="calDupSet">
                          <VCalendar class="calSet" v-model="calDate41" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="홀딩 시작일 선택" />
                            </template>
                          </VCalendar>
                          <em>~</em>
                          <VCalendar class="calSet" v-model="calDate42" color="green">
                            <template v-slot="{ inputValue, togglePopover }">
                              <input :value="inputValue" @click="togglePopover()" readonly placeholder="홀딩 종료일 선택" />
                            </template>
                          </VCalendar>
                        </span>
                      </td>
                      <td>
                        <VCalendar class="calSet" v-model="calDate43" color="green">
                          <template v-slot="{ inputValue, togglePopover }">
                            <input :value="inputValue" @click="togglePopover()" readonly placeholder="홀딩 해제일 선택" />
                          </template>
                        </VCalendar>
                        <button class="btnS ml5">변경</button>
                      </td>
                      <td>1일</td>
          					</tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
          				</tbody>
          			</table>
          		</div>
          		<h3><strong>홀딩 횟수 추가</strong></h3>
              <div class="tvsWhite wHalf">
                <table>
          				<colgroup>
          					<col width="100"/>
            				<col width="200"/>
          					<col width="*" />
          				</colgroup>
                  <thead>
                    <tr>
                      <th>홀딩 현황</th>
                      <th>홀딩 가능횟수</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="tC">3회 / 3회</td>
                      <td class="tC">
                        <span class="quantityBox">
  												<button class="countMinus">-</button>
  												<strong>1</strong>
  												<button class="countPlus">+</button>
  											</span>
                      </td>
                      <td><button class="btnT line">적용</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3><strong>관리</strong></h3>
          		<div class="tvs record">
          			<table>
          				<colgroup>
          					<col width="160"/>
          					<col width="*"/>
          				</colgroup>
          				<tbody>
          					<tr>
          						<th>수정 이력</th>
          						<td>
          							<ul class="recordList">
          								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 수정</li>
          								<li><strong>[2021-02-23 15:35  / 홍길동 ]</strong> 등록</li>
          							</ul>
          						</td>
          					</tr>
          				</tbody>
          			</table>
          		</div>
            </div>
  					<!--//홀딩 -->
					</div>
				</div>
				<!-- //tab-wrap -->
  		</div>

      <Alert v-if='alertTrigger' @close="alertTrigger = false">
        <template slot="modalbody">
          해당 강의 수강시간을 초기화 하시겠습니까?<br/>초기화 시, 기존 수강시간이 사라집니다.
        </template>
        <template slot="modalfooter">
          <button class="btnM gray" @click="alertTrigger = false">취소</button>
          <button class="btnM green" @click="alertTrigger = false">초기화</button>
        </template>
      </Alert>
      <Alert v-if='alertTrigger02' @close="alertTrigger02 = false">
        <template slot="modalbody">
          일괄 변경 배수를 선택해주세요
          <div class="mt10">
            <span class="selectSet">
              <select name="" id="">
                <option value="no" class="label">배수 선택</option>
                <option value="">0배수</option>
                <option value="">0.5배수</option>
                <option value="">0.8배수</option>
                <option value="">1배수</option>
                <option value="">1.5배수</option>
                <option value="">2배수</option>
                <option value="">원래대로</option>
              </select>
            </span>
          </div>
        </template>
        <template slot="modalfooter">
          <button class="btnM gray" @click="alertTrigger02 = false">취소</button>
          <button class="btnM green" @click="alertTrigger02 = false">배수 변경</button>
        </template>
      </Alert>
      <Alert v-if='alertTrigger03' @close="alertTrigger03 = false">
        <template slot="modalbody">
          일괄 추가 시간을 입력해주세요
          <div class="mt10">
            <span class="unit small"><input type="text"/><em>분</em></span>
          </div>
        </template>
        <template slot="modalfooter">
          <button class="btnM gray" @click="alertTrigger03 = false">취소</button>
          <button class="btnM green" @click="alertTrigger03 = false">시간 추가</button><!-- 2021-12-23 버튼 텍스트 변경 -->
        </template>
      </Alert>
    </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MemberEnrollment',
  data() {
    return {
        memberTab: 0,
        calDate: '',
        calDate01: '',
        calDate02: '',
        alertTrigger: false,
        alertTrigger02: false,
        alertTrigger03: false,
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
