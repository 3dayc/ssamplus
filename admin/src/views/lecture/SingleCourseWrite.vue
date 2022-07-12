<template lang="html">
  <div>
		<div class="pageTit">
			<h2>단과 강좌</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link><router-link to="/mkup/lecture/singleCourse">단과 강좌</router-link><em>신규등록</em></span>
		</div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="singleCourseWrite">
          <!-- 강좌기본정보 -->
          <div class="subTit">
            <h3>강좌기본정보</h3>
            <span class="checkSet ml20">
              <input type="checkbox" id="tit01" />
              <label for="tit01"><i></i>현재 오픈된 데이터만 조회</label>
            </span>
            <span class="right">
              <button class="btnM green" @click="toastPop('error', '필수 항목 및 입력 형식을 확인해주세요.'), urlLink()">저장</button>
              <router-link to="/mkup/lecture/singleCourse" class="btnM gray ml10">취소</router-link>
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
                  <th class="backBrown">수강유형 <sup>필수</sup></th>
                  <td>
                    <span class="checkSet">
                      <input type="checkbox" @change="onChange01" />
                      <label for="type01"><i></i>온라인</label>
                    </span>
                    <span class="checkSet">
                      <input type="checkbox" @change="onChange02" />
                      <label for="type02"><i></i>이데아관</label>
                    </span>
                    <span class="checkSet">
                      <input type="checkbox" @change="onChange02" />
                      <label for="type03"><i></i>아이비관</label>
                    </span>
                    <span class="checkSet">
                      <input type="checkbox" @change="onChange02" />
                      <label for="type04"><i></i>라이브 전용</label>
                    </span>
                  </td>
                  <th class="backBrown">노출여부 <sup>필수</sup></th>
                  <td>
                    <span class="labelToggleSet tLength3">
                      <input type="checkbox" id="online" disabled>
                      <label for="online">
                        <span>온라인</span>
                        <span>온라인</span>
                      </label>
                    </span>
                    <span class="labelToggleSet ml10">
                      <input type="checkbox" id="seoul" disabled>
                      <label for="seoul">
                        <span>서울</span>
                        <span>서울</span>
                      </label>
                    </span>
                    <span class="labelToggleSet long ml10">
                      <input type="checkbox" id="teacherSystem">
                      <label for="teacherSystem">
                        <span>강사시스템</span>
                        <span>강사시스템</span>
                      </label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>과목 / 선생님 <sup>필수</sup></th>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">과목 선택</option>
                        <option value="">교육학</option>
                        <option value="">논술면접</option>
                        <option value="">한국사</option>
                        <option value="">유아</option>
                        <option value="">초등</option>
                        <option value="">국어</option>
                        <option value="">영어</option>
                        <option value="">수학</option>
                        <option value="">음악</option>
                        <option value="">체육</option>
                        <option value="">중국어</option>
                        <option value="">미술</option>
                        <option value="">일본어</option>
                        <option value="">한문</option>
                        <option value="">가정</option>
                        <option value="">윤리</option>
                        <option value="">미용</option>
                        <option value="">진로상담</option>
                        <option value="">역사</option>
                        <option value="">지리</option>
                        <option value="">물리</option>
                        <option value="">화학</option>
                        <option value="">생물</option>
                        <option value="">과학교과교육론</option>
                        <option value="">전문상담</option>
                        <option value="">특수</option>
                        <option value="">보건</option>
                        <option value="">사서직</option>
                      </select>
                    </span>
                    <span class="selectSet ml10">
                      <select name="" id="">
                        <option value="no" class="label">선생님 선택</option>
                      </select>
                    </span>
                  </td>
                  <th>강좌유형 <sup>필수</sup></th>
                  <td>
                    <div>
                      <span class="selectSet">
                        <select name="" id="">
                          <option value="no" class="label">강좌유형 선택</option>
                          <option value="">이론강의</option>
                          <option value="">문제풀이</option>
                          <option value="">모의고사</option>
                          <option value="">면접실연</option>
                          <option value="">기타특강</option>
                          <option value="">설명회</option>
                          <option value="">사례발표</option>
                        </select>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>제작년월 <sup>필수</sup></th>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="">2021년</option>
                      </select>
                    </span>
                    <span class="selectSet ml10">
                      <select name="" id="">
                        <option value="">1월</option>
                        <option value="">2월</option>
                        <option value="" selected>3월</option>
                        <option value="">4월</option>
                        <option value="">5월</option>
                        <option value="">6월</option>
                        <option value="">7월</option>
                        <option value="">8월</option>
                        <option value="">9월</option>
                        <option value="">10월</option>
                        <option value="">11월</option>
                        <option value="">12월</option>
                      </select>
                    </span>
                    <em> ~ </em>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="">1월</option>
                        <option value="">2월</option>
                        <option value="">3월</option>
                        <option value="" selected>4월</option>
                        <option value="">5월</option>
                        <option value="">6월</option>
                        <option value="">7월</option>
                        <option value="">8월</option>
                        <option value="">9월</option>
                        <option value="">10월</option>
                        <option value="">11월</option>
                        <option value="">12월</option>
                      </select>
                    </span>
                  </td>
                  <th>수강료 <sup>필수</sup></th>
                  <td>
                    <span class="unit wAuto">
                      <input type="text" value="" class="tR">
                      <em>원</em>
                    </span>
                    <span class="checkSet ml10">
                      <input type="checkbox" id="free" />
                      <label for="free"><i></i>무료특강</label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>강좌명 <sup>필수</sup></th>
                  <td><input type="text" /></td>
                  <th>강의 기간 <sup>필수</sup></th>
                  <td>
                    <span class="unit small">
                      <input type="number" />
                      <em>주</em>
                    </span><em class="mrl5">간</em>
                    <span class="unit small">
                      <input type="number" />
                      <em>회</em>
                    </span>
                    <em class="fGreen ml10">* 직강 기준 몇 주 동안 몇 회차 진행하는지 작성</em>
                  </td>
                </tr>
                <tr>
                  <th>한 줄 메시지 <sup>필수</sup></th>
                  <td colspan="3"><input type="text" /></td>
                </tr>
                <tr>
                  <th>교재정보 <sup>필수</sup></th>
                  <td colspan="3">
                    <ul class="checkForm textbook">
                      <li class="lecSearch">
                        <div class="check wFull">
                          <span class="checkSet">
                            <input type="checkbox" id="bookSsam" v-model="bookSsam"/>
                            <label for="bookSsam"><i></i>교재/프린트</label>
                          </span>
                          <button class="btnS line" @click="LectureBookSearch()">교재검색</button>
                        </div>
                        <div class="detail">
                          <div class="tls discountList mt10">
                            <table>
                              <colgroup>
                                <col width="160"/>
                                <col width="160"/>
                                <col width="160"/>
                                <col width="160"/>
                                <col width="260"/>
                                <col width="160"/>
                              </colgroup>
                              <thead>
                                <tr>
                                  <th>구분</th>
                                  <th>교재코드</th>
                                  <th>ISBN</th>
                                  <th>저자</th>
                                  <th>교재명</th>
                                  <th>발행일</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>교재</td>
                                  <td>a1520B00008</td>
                                  <td>2277547920025</td>
                                  <td>장영희</td>
                                  <td class="tL">장영희 적중 모의고사 모음집 1</td>
                                  <td>2020-12-31</td>
                                </tr>
                                <tr>
                                  <td>프린트</td>
                                  <td>a1520B00008</td>
                                  <td>2277547920025</td>
                                  <td>장영희</td>
                                  <td class="tL">>장영희 적중 모의고사 모음집 1</td>
                                  <td>2020-12-31</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="check w150">
                          <span class="checkSet">
                            <input type="checkbox" id="bookStore" v-model="bookStore"/>
                            <label for="priceCase2"><i></i>시중서점</label>
                          </span>
                        </div>
                        <div class="detail">
                          <input type="text" placeholder="교재명 입력" :disabled="bookStore == 0"/>
                        </div>
                      </li>
                      <li>
                        <div class="check w150">
                          <span class="checkSet">
                            <input type="checkbox" id="bookBePublish" v-model="bookBePublish" />
                            <label for="bookBePublish"><i></i>발간예정</label>
                          </span>
                        </div>
                        <div class="detail">
                          <input type="text" placeholder="교재명 입력" :disabled="bookBePublish == 0"/>
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- //강좌기본정보 -->
          <!-- 온라인 강좌정보 & 설명 -->
          <div class="subTit cpRight mt10">
            <h3>온라인 강좌정보</h3>
            <div class="grayBgBox" v-show="onlineTrigger">
              <span class="radioSet">
                <input type="radio" name="radio4" checked/>
                <label for=""><i></i>PC+모바일</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="radio4" />
                <label for=""><i></i>모바일 전용</label>
              </span>
            </div>
            <div class="grayBgBox" v-show="onlineTrigger">
              <span class="checkSet mg0">
                <input type="checkbox" id="tit01" />
                <label for="tit01"><i></i>첨삭게시판 사용</label>
              </span>
            </div>
          </div>
          <div v-if="onlineTrigger">
            <div class="tvs">
              <table>
                <caption>온라인 강좌정보</caption>
                <colgroup>
        					<col width="160"/>
        					<col width="*"/>
        					<col width="160"/>
        					<col width="*"/>
                </colgroup>
                <tbody>
                  <tr>
                    <th>신청기간 <sup>필수</sup></th>
                    <td>
                      <span class="calDupSet">
                        <VCalendar class="calSet" v-model="date01" color="green">
                          <template v-slot="{ inputValue, togglePopover }">
                            <input :value="inputValue" @click="togglePopover()" readonly placeholder="예) 2021-01-01" />
                          </template>
                        </VCalendar>
                        <span class="unit small ml5">
                          <input type="text" value="" class="tR">
                          <em>시</em>
                        </span>
                        <em>~</em>
                        <VCalendar class="calSet" v-model="date02" color="green">
                          <template v-slot="{ inputValue, togglePopover }">
                            <input :value="inputValue" @click="togglePopover()" readonly placeholder="예) 2021-01-01" />
                          </template>
                        </VCalendar>
                        <span class="unit small ml5">
                          <input type="text" value="" class="tR">
                          <em>시</em>
                        </span>
                      </span>
                    </td>
                    <th>개강일 <sup>필수</sup></th>
                    <td>
                      <VCalendar class="calSet" v-model="date03" color="green">
                        <template v-slot="{ inputValue, togglePopover }">
                          <input :value="inputValue" @click="togglePopover()" readonly placeholder="예) 2021-01-01" />
                        </template>
                      </VCalendar>
                    </td>
                  </tr>
                  <tr>
                    <th>자동시작일 <sup>필수</sup></th>
                    <td>
                      <span class="unit small mr5">
                        <input type="text" value="10" class="tR">
                        <em>일</em>
                      </span>
                      <em>후</em>
                      <span class="infoMsg fGreen inBlock vMiddle ml10">
                        * 강좌 결제 후 수강 미 시작 시, 자동으로 시작일을 체크하는 기준<br/>
                        * 자동시작일이 0일이면 결제 즉시 시작
                      </span>
                    </td>
                    <th>수강기간/수강제한 <sup>필수</sup></th>
                    <td>
                      <span class="unit small mr5">
                        <input type="text" value="70" class="tR">
                        <em>일</em>
                      </span>
                      <em>/</em>
                      <span class="unit small ml5 mr5">
                        <input type="text" value="140" class="tR">
                        <em>%</em>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="tit01" />
                        <label for="tit01"><i></i>통배수</label>
                      </span>
                      <span class="tL fGreen">* 1.5배 – 150%, 2배 = 200%, 무한대 = 1,000%</span>
                    </td>
                  </tr>
                  <tr>
                    <th>수강인원</th>
                    <td>
                      <span class="unit small w100">
                        <input type="text" value="" class="tR">
                        <em>명</em>
                      </span>
                      <span class="checkSet ml10">
                        <input type="checkbox" id="ssamm" />
                        <label for="ssamm"><i></i>쌤플러스 마감</label>
                      </span>
                    </td>
                    <th>온라인 수강료</th>
                    <td>
                      <span class="unit">
                        <input type="text" value="" class="tR">
                        <em>원</em>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>홀딩 <sup>필수</sup></th>
                    <td>
                      <span class="unit small mr5">
                        <input type="text" value="30" class="tR">
                        <em>일</em>
                      </span>
                      <em>간</em>
                      <span class="unit small ml10">
                        <input type="text" value="3" class="tR">
                        <em>회</em>
                      </span>
                    </td>
                    <th>연장/연장수강료 <sup>필수</sup></th>
                    <td>
                      <span class="unit small mr5">
                        <input type="text" value="15" class="tR">
                        <em>일</em>
                      </span>
                      <em>간</em>
                      <span class="unit small ml10 mr5">
                        <input type="text" value="3" class="tR">
                        <em>회</em>
                      </span>
                      <em>/</em>
                      <span class="unit wAuto ml5">
                        <input type="text" value="" class="tR">
                        <em>원</em>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>재수강 <sup>필수</sup></th>
                    <td>
                      <span class="radioSet">
                        <input type="radio" name="radio1" checked>
                        <label for=""><i data-v-57239274=""></i>가능</label>
                      </span>
                      <span class="radioSet">
                        <input type="radio" name="radio1">
                        <label for=""><i data-v-57239274=""></i>불가능</label>
                      </span>
                    </td>
                    <th>수강종료일 지정</th>
                    <td>
                      <span class="checkSet">
                        <input type="checkbox" v-model="endDate">
                        <label for=""><i></i>수강종료일 지정</label>
                      </span>
                      <VCalendar class="calSet" v-model="date" color="green">
                        <template v-slot="{ inputValue, inputEvents, togglePopover }">
                          <input class="disabled" :value="inputValue" v-on="inputEvents" @click="togglePopover()" placeholder="일자 선택" :disabled="!endDate"/>
                        </template>
                      </VCalendar>
                    </td>
                  </tr>
                  <!-- 2021-11-29 컬럼 추가 -->
                  <tr>
                    <th>자료실 열람기간</th>
                    <td>
                      <span class="unit small">
                        <input type="text" class="tR">
                        <em>일</em>
                      </span><em class="ml5">후</em>
                      <span class="ml10 fGreen">* 수강기간이 종료한 뒤 몇 일 후까지 열람할 수 있는지 입력</span>
                    </td>
                    <th>문서보안</th>
                    <td>
                      <span class="checkSet">
                        <input type="checkbox" id="tit001" />
                        <label for="tit001"><i></i>다운로드 제한</label>
                      </span>
                      <span class="unit small">
                        <input type="text" value="5" class="tR" disabled>
                        <em>회</em>
                      </span>
                      <span class="checkSet ml20">
                        <input type="checkbox" id="tit01" />
                        <label for="tit01"><i></i>인쇄제한</label>
                      </span>
                      <span class="unit small">
                        <input type="text" value="5" class="tR">
                        <em>회</em>
                      </span>
                    </td>
                  </tr>
                  <!-- //2021-11-29 컬럼 추가 -->
                  <!-- 2021-11-29 컬럼 위치 이동 -->
                  <tr>
                    <th>수강가능요일</th>
                    <td colspan="3">
                      <span class="radioSet">
                        <input type="radio" id="dateTime1" name="dateTime" value="dateTime1" @change="onChange05($event)" />
                        <label for="dateTime1"><i></i>없음</label>
                      </span>
                      <span class="radioSet ml10">
                        <input type="radio" id="dateTime2" name="dateTime" value="dateTime2" @change="onChange05($event)" />
                        <label for="dateTime2"><i></i>요일</label>
                      </span>
                      <span class="radioSet ml10">
                        <input type="radio" id="dateTime3" name="dateTime" value="dateTime3" @change="onChange05($event)" />
                        <label for="dateTime3"><i></i>요일 + 시간</label>
                      </span>
                      <div class="pt10" v-if="dateTimeTrigger01">
                        <span class="weekCheckSet">
                          <span class="all">
                            <input type="checkbox" id="all"/>
                            <label for="all">All</label>
                          </span>
                          <span>
                            <input type="checkbox" id="monday" />
                            <label for="monday">월</label>
                          </span>
                          <span>
                            <input type="checkbox" id="tuesday" />
                            <label for="tuesday">화</label>
                          </span>
                          <span>
                            <input type="checkbox" id="wednesday" />
                            <label for="wednesday">수</label>
                          </span>
                          <span>
                            <input type="checkbox" id="thursday" />
                            <label for="thursday">목</label>
                          </span>
                          <span>
                            <input type="checkbox" id="friday" />
                            <label for="friday">금</label>
                          </span>
                          <span>
                            <input type="checkbox" id="saturday" />
                            <label for="saturday">토</label>
                          </span>
                          <span>
                            <input type="checkbox" id="sunday" />
                            <label for="sunday">일</label>
                          </span>
                        </span>
                      </div>
                      <div class="pt10" v-if="dateTimeTrigger02">
                        <span class="weekCheckSet">
                          <span class="all">
                            <input type="checkbox" id="all2"/>
                            <label for="all2">All</label>
                          </span>
                          <span>
                            <input type="checkbox" id="monday2" />
                            <label for="monday2">월</label>
                          </span>
                          <span>
                            <input type="checkbox" id="tuesday2" />
                            <label for="tuesday2">화</label>
                          </span>
                          <span>
                            <input type="checkbox" id="wednesday2" />
                            <label for="wednesday2">수</label>
                          </span>
                          <span>
                            <input type="checkbox" id="thursday2" />
                            <label for="thursday2">목</label>
                          </span>
                          <span>
                            <input type="checkbox" id="friday2" />
                            <label for="friday2">금</label>
                          </span>
                          <span>
                            <input type="checkbox" id="saturday2" />
                            <label for="saturday2">토</label>
                          </span>
                          <span>
                            <input type="checkbox" id="sunday2" />
                            <label for="sunday2">일</label>
                          </span>
                        </span>
                        <span class="timeSet">
                          <input type="text" value=":" /><em>~</em><input type="text" value=":" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <!-- //2021-11-29 컬럼 위치 이동 -->
                  <tr>
                    <th>수강권한</th>
                    <td colspan="3">
                      <span class="tL fGreen">* 강좌 등록 후 수강권한을 설정해주세요</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 온라인 강좌설명 -->
            <div class="subTit cpRight mt10"><h3>온라인 강좌설명</h3></div>
            <div class="tvs">
              <table>
                <caption>온라인 강좌설명</caption>
                <colgroup>
        					<col width="160"/>
        					<col width="*"/>
                </colgroup>
                <tbody>
                  <tr>
                    <th>강좌 특징 <sup>필수</sup></th>
                    <td><textarea>에디터가 나올 영역입니다</textarea></td>
                  </tr>
                  <tr>
                    <th>강좌 구성 <sup>필수</sup></th>
                    <td><textarea>에디터가 나올 영역입니다</textarea></td>
                  </tr>
                  <tr>
                    <th>강좌 교재 <sup>필수</sup></th>
                    <td><textarea>에디터가 나올 영역입니다</textarea></td>
                  </tr>
                  <tr>
                    <th>강좌 세부계획</th>
                    <td><textarea>에디터가 나올 영역입니다</textarea></td>
                  </tr>
                  <tr>
                    <th>첨삭 이용 안내</th>
                    <td><textarea>에디터가 나올 영역입니다</textarea></td>
                  </tr>
                  <tr>
                    <th>수강혜택</th>
                    <td><textarea></textarea></td>
                  </tr>
                  <tr>
                    <th>기타 사항</th>
                    <td><textarea></textarea></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- //온라인 강좌설명 -->
          </div>
          <!-- 비활성화시 -->
          <div class="boxBrown tC" v-if="!onlineTrigger">
            수강유형 - 온라인을 선택해주세요
          </div>
          <!-- //온라인 강좌정보 -->

          <!-- 서울학원 강좌정보 -->
          <div class="subTit cpRight mt10">
            <h3>서울학원 강좌정보</h3>
            <!-- 2021-07-14 수정 -->
            <div class="grayBgBox" v-show="seoulTrigger">
              <span class="checkSet mg0">
                <input type="checkbox" id="tit51" />
                <label for="tit51"><i></i>첨삭게시판 사용</label>
              </span>
            </div>
            <!-- //2021-07-14 수정 -->
          </div>
          <div v-if="seoulTrigger">
            <div class="tvs">
              <table>
                <caption>서울학원 강좌정보</caption>
                <colgroup>
        					<col width="160"/>
        					<col width="*"/>
        					<col width="160"/>
        					<col width="*"/>
                </colgroup>
                <tbody>
                  <tr>
                    <th>신청기간 <sup>필수</sup></th>
                    <td>
                      <span class="calDupSet">
                        <VCalendar class="calSet" v-model="date01" color="green">
                          <template v-slot="{ inputValue, togglePopover }">
                            <input :value="inputValue" @click="togglePopover()" readonly placeholder="예) 2021-01-01" />
                          </template>
                        </VCalendar>
                        <span class="unit small ml5">
                          <input type="text" value="" class="tR">
                          <em>시</em>
                        </span>
                        <em>~</em>
                        <VCalendar class="calSet" v-model="date02" color="green">
                          <template v-slot="{ inputValue, togglePopover }">
                            <input :value="inputValue" @click="togglePopover()" readonly placeholder="예) 2021-01-01" />
                          </template>
                        </VCalendar>
                        <span class="unit small ml5">
                          <input type="text" value="" class="tR">
                          <em>시</em>
                        </span>
                      </span>
                    </td>
                    <th>개강-종강일 <sup>필수</sup></th>
                    <td>
                      <span class="calDupSet">
                        <VCalendar class="calSet" v-model="date01" color="green">
                          <template v-slot="{ inputValue, togglePopover }">
                            <input :value="inputValue" @click="togglePopover()" readonly placeholder="예) 2021-01-01" />
                          </template>
                        </VCalendar>
                        <em>~</em>
                        <VCalendar class="calSet" v-model="date02" color="green">
                          <template v-slot="{ inputValue, togglePopover }">
                            <input :value="inputValue" @click="togglePopover()" readonly placeholder="예) 2021-01-01" />
                          </template>
                        </VCalendar>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>수강인원 <sup>필수</sup></th>
                    <td>
                      <span class="unit small mr10">
                        <input type="text" value="400" class="tR">
                        <em>명</em>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="tit01" />
                        <label for="tit01"><i></i>쌤플러스 마감</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="tit01" />
                        <label for="tit01"><i></i>학원 마감</label>
                      </span>
                    </td>
                    <th>무료/유료 보강 <sup>필수</sup></th>
                    <td>
                      <em>무료</em>
                      <span class="unit small ml5 mr10">
                        <input type="text" value="2" class="tR">
                        <em>회</em>
                      </span>
                      <em>/ 유료</em>
                      <span class="unit small ml5 mr5">
                        <input type="text" value="2" class="tR">
                        <em>회</em>
                      </span>
                      <span class="unit wAuto ml5">
                        <input type="text" value="" class="tR">
                        <em>원</em>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>문서보안</th>
                    <td>
                      <span class="checkSet">
                        <input type="checkbox" id="tit001" />
                        <label for="tit001"><i></i>다운로드 제한</label>
                      </span>
                      <span class="unit small">
                        <input type="text" value="5" class="tR" disabled>
                        <em>회</em>
                      </span>
                      <span class="checkSet ml20">
                        <input type="checkbox" id="tit01" />
                        <label for="tit01"><i></i>인쇄제한</label>
                      </span>
                      <span class="unit small">
                        <input type="text" value="5" class="tR">
                        <em>회</em>
                      </span>
                    </td>
                    <th>보강용 인강번호</th>
                    <td>
                      <span class="fGreen">* 온/오프 강좌를 동시에 등록한 경우만 보강용 인강번호가 매칭됩니다<br/>* 원강좌가 온/오프 동시등록 강좌라면, 서울학원 강좌복사 시에도 동일한 인강번호가 매칭됩니다. </span>
                    </td>
                  </tr>
                  <!-- 2021-11-29 컬럼 추가 -->
                  <tr>
                    <th>자료실 열람기간</th>
                    <td colspan="3">
                      <span class="unit small">
                        <input type="text" class="tR">
                        <em>일</em>
                      </span><em class="ml5">후</em>
                      <span class="ml10 fGreen">* 종강일이 지난 뒤 몇 일 후까지 열람할 수 있는지 입력</span>
                    </td>
                  </tr>
                  <!-- //2021-11-29 컬럼 추가 -->
                  <tr>
                    <th>강의요일/시간 <sup>필수</sup></th>
                    <td colspan="3">
                      <ul class="direcDateTime">
                        <li>
                          <span class="selectSet">
                            <select @change="onChange06">
                              <option disabled selected>선택</option>
                              <option value="0">미정</option>
                              <option value="1">요일1</option>
                            </select>
                          </span>
                          <span v-if="seoulDateTimeTrigger1">
                            <span class="mrl20">
                              <span class="weekCheckSet">
                                <span class="all">
                                  <input type="checkbox" id="all"/>
                                  <label for="all">All</label>
                                </span>
                                <span>
                                  <input type="checkbox" id="monday" />
                                  <label for="monday">월</label>
                                </span>
                                <span>
                                  <input type="checkbox" id="tuesday" />
                                  <label for="tuesday">화</label>
                                </span>
                                <span>
                                  <input type="checkbox" id="wednesday" />
                                  <label for="wednesday">수</label>
                                </span>
                                <span>
                                  <input type="checkbox" id="thursday" />
                                  <label for="thursday">목</label>
                                </span>
                                <span>
                                  <input type="checkbox" id="friday" />
                                  <label for="friday">금</label>
                                </span>
                                <span>
                                  <input type="checkbox" id="saturday" />
                                  <label for="saturday">토</label>
                                </span>
                                <span>
                                  <input type="checkbox" id="sunday" />
                                  <label for="sunday">일</label>
                                </span>
                              </span>
                              <span class="timeSet">
                                <input type="text" value=":" /><em>~</em><input type="text" value=":" />
                              </span>
                            </span>
                            <button class="btnDelete">삭제</button>
                          </span>
                        </li>
                        <li>
                          <span class="selectSet">
                            <select @change="onChange07">
                              <option disabled selected>선택2</option>
                              <option value="0">미정</option>
                              <option value="1">요일1</option>
                            </select>
                          </span>
                          <span v-if="seoulDateTimeTrigger2">
                            <span class="mrl20">
                              <span class="weekCheckSet">
                                <span class="all">
                                  <input type="checkbox" id="alls1"/>
                                  <label for="alls1">All</label>
                                </span>
                                <span>
                                  <input type="checkbox" id="mondays1" />
                                  <label for="mondays1">월</label>
                                </span>
                                <span>
                                  <input type="checkbox" id="tuesdays2" />
                                  <label for="tuesdays2">화</label>
                                </span>
                                <span>
                                  <input type="checkbox" id="wednesdays3" />
                                  <label for="wednesdays3">수</label>
                                </span>
                                <span>
                                  <input type="checkbox" id="thursdays4" />
                                  <label for="thursdays4">목</label>
                                </span>
                                <span>
                                  <input type="checkbox" id="fridays5" />
                                  <label for="fridays5">금</label>
                                </span>
                                <span>
                                  <input type="checkbox" id="saturdays6" />
                                  <label for="saturdays6">토</label>
                                </span>
                                <span>
                                  <input type="checkbox" id="sundays7" />
                                  <label for="sundays7">일</label>
                                </span>
                              </span>
                              <span class="timeSet">
                                <input type="text" value=":" /><em>~</em><input type="text" value=":" />
                              </span>
                            </span>
                            <button class="btnDelete">삭제</button>
                          </span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>수강권한</th>
                    <td colspan="3">
                      <span class="tL fGreen">* 강좌 등록 후 수강권한을 설정해주세요</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 서울학원 강좌설명 -->
            <div class="subTit cpRight mt10">
              <h3>서울학원 강좌설명</h3>
              <button class="btnT greenline ml10 lh0">온라인 설명복사</button>
            </div>
            <div class="tvs">
              <table>
                <caption>서울학원 강좌설명</caption>
                <colgroup>
        					<col width="160"/>
        					<col width="*"/>
                </colgroup>
                <tbody>
                  <tr>
                    <th>강좌 특징 <sup>필수</sup></th>
                    <td><textarea>에디터가 나올 영역입니다</textarea></td>
                  </tr>
                  <tr>
                    <th>강좌 구성 <sup>필수</sup></th>
                    <td><textarea>에디터가 나올 영역입니다</textarea></td>
                  </tr>
                  <tr>
                    <th>강좌 교재 <sup>필수</sup></th>
                    <td><textarea>에디터가 나올 영역입니다</textarea></td>
                  </tr>
                  <tr>
                    <th>강좌 세부계획</th>
                    <td><textarea>에디터가 나올 영역입니다</textarea></td>
                  </tr>
                  <tr>
                    <th>첨삭 이용 안내</th>
                    <td><textarea>에디터가 나올 영역입니다</textarea></td>
                  </tr>
                  <tr>
                    <th>수강혜택</th>
                    <td><textarea></textarea></td>
                  </tr>
                  <tr>
                    <th>기타 사항</th>
                    <td><textarea></textarea></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- //서울학원 강좌설명 -->
          </div>
          <!-- 비활성화시 -->
          <div class="boxBrown tC" v-if="!seoulTrigger">
            수강유형 – 아이비관, 이데아관, 라이브 전용을 선택해주세요
          </div>
          <!-- //서울학원 강좌정보 -->

        </div>
        <!-- //page layout -->
      </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SingleCourseWrite',
  data() {
    return {
      bookInfoType: 1,
      onlineTrigger: false,
      seoulTrigger: false,
      dateTimeTrigger01: false,
      dateTimeTrigger02: false,
      seoulDateTimeTrigger1: false,
      seoulDateTimeTrigger2: false,
      date01: '',
      date02: '',
      date03: '',
      bookSsam: 1,
      bookStore: 0,
      bookBePublish: 0,
      endDate: false,
    }
  },
  methods: {
    bookInfoTrigger(event) {
      var bookInfoTypeValue = document.getElementsByName("bookInfoType").length;
      for (var i=0; i<bookInfoTypeValue; i++) {
        if (document.getElementsByName("bookInfoType")[i].checked == true) {
          this.bookInfoType = document.getElementsByName("bookInfoType")[i].value;
        }
      }
    },
    onChange01(event) {
      this.onlineTrigger = !this.onlineTrigger; //2021-07-14
      let checked = event.target.checked;
      let target = document.getElementById('online');
      checked ? target.removeAttribute('disabled') : target.setAttribute('disabled', 'disabled');
    },
    onChange02(event) {
      this.seoulTrigger = !this.seoulTrigger; //2021-07-14
      let checked = event.target.checked;
      let target = document.getElementById('seoul');
      checked ? target.removeAttribute('disabled') : target.setAttribute('disabled', 'disabled');
    },
    onChange05(event) {
      let optionText = event.target.value;
        this.dateTimeTrigger01 = false;
        this.dateTimeTrigger02 = false;

      if (optionText == 'dateTime2') {
        this.dateTimeTrigger01 = true;
      } else if(optionText == 'dateTime3') {
        this.dateTimeTrigger02 = true;
      } else {
        this.dateTimeTrigger01 = false;
        this.dateTimeTrigger02 = false;
      }
    },
    onChange06(event) {
      let optionText = event.target.value;
        this.seoulDateTimeTrigger1 = false;

      if (optionText == '0') {
        this.seoulDateTimeTrigger1 = false;
      } else {
        this.seoulDateTimeTrigger1 = true;
      }
    },
    onChange07(event) {
      let optionText = event.target.value;
        this.seoulDateTimeTrigger2 = false;

      if (optionText == '0') {
        this.seoulDateTimeTrigger2 = false;
      } else {
        this.seoulDateTimeTrigger2 = true;
      }
    },
    onChange062(event) {
      let optionText = event.target.value;
        this.daeguDateTimeTrigger1 = false;

      if (optionText == '0') {
        this.daeguDateTimeTrigger1 = false;
      } else {
        this.daeguDateTimeTrigger1 = true;
      }
    },
    onChange072(event) {
      let optionText = event.target.value;
        this.daeguDateTimeTrigger2 = false;

      if (optionText == '0') {
        this.daeguDateTimeTrigger2 = false;
      } else {
        this.daeguDateTimeTrigger2 = true;
      }
    },
    LectureBookSearch() {
      let routeData = this.$router.resolve({name: 'LectureBookSearch', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceBookSearch', '_blank', `width=1100,height=900`);
    },
    urlLink(){
      setTimeout(function () {
        this.$router.push('/mkup/lecture/singleCourse/offline');
      }.bind(this), 2000);
    }
  },
  components: {
  },

}
</script>

<style lang="css" scoped>
</style>
