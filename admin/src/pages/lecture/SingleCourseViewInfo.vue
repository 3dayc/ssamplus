<template lang="html">
  <div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="singleCourseView">
          <!-- 강좌 기본정보 -->
          <div class="subTit cpRight">
            <h3>강좌 기본정보</h3>
            <span class="right">
              <div class="grayBgBox">
                &lt;수강현황&gt; 장바구니 <em>14</em>명  ┃  결제 <em>365</em>명
              </div>
              <span class="tL ml20 fGreen">361145 / 장영희 / 전공중국어 – 80점 도약모의고사반</span>
            </span>
          </div>
          <div class="tvs">
            <table>
              <colgroup>
      					<col width="160"/>
      					<col width="*"/>
      					<col width="160"/>
      					<col width="*"/>
              </colgroup>
              <tbody>
                <tr>
                  <th class="backBrown">수강유형<sup>필수</sup></th>
                  <td>
                    <span class="checkSet">
                      <input type="checkbox" @change="onChange01" checked />
                      <label for="type01"><i></i>온라인</label>
                    </span>
                    <span class="checkSet">
                      <input type="checkbox" @change="onChange02" checked />
                      <label for="type02"><i></i>이데아관</label>
                    </span>
                    <span class="checkSet">
                      <input type="checkbox" @change="onChange03" />
                      <label for="type03"><i></i>아이비관</label>
                    </span>
                    <span class="checkSet">
                      <input type="checkbox" @change="onChange04" />
                      <label for="type04"><i></i>에비뉴관</label>
                    </span>
                  </td>
                  <th class="backBrown">노출여부<sup>필수</sup></th>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="online" checked @change="onlineTrigger = !onlineTrigger">
                      <label for="online">
                        <span>온라인</span>
                        <span>온라인</span>
                      </label>
                    </span>
                    <span class="labelToggleSet ml10">
                      <input type="checkbox" id="seoul" checked @change="seoulTrigger = !seoulTrigger">
                      <label for="seoul">
                        <span>서울</span>
                        <span>서울</span>
                      </label>
                    </span>
                    <span class="labelToggleSet ml10">
                      <input type="checkbox" id="daegu" disabled @change="daeguTrigger = !daeguTrigger">
                      <label for="daegu">
                        <span>대구</span>
                        <span>대구</span>
                      </label>
                    </span>
                    <span class="labelToggleSet long ml10">
                      <input type="checkbox" id="professor" disabled>
                      <label for="professor">
                        <span>교수관리자</span>
                        <span>교수관리자</span>
                      </label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>과목/교수<sup>필수</sup></th>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">과목 선택</option>
                        <option value="">교육학</option>
                        <option value="" selected>논술면접</option>
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
                        <option value="no" class="label">교수 선택</option>
                        <option value="" selected>장영희</option>
                      </select>
                    </span>
                  </td>
                  <th>강좌유형<sup>필수</sup></th>
                  <td>
                    <div>
                      <span class="selectSet">
                        <select name="" id="">
                          <option value="no" class="label">강좌유형 선택</option>
                          <option value="" selected>이론강의</option>
                          <option value="">문제풀이</option>
                          <option value="">모의고사</option>
                          <option value="">면접실연</option>
                          <option value="">기타특강</option>
                        </select>
                      </span>
                      <!-- <span class="erMsg">필수항목 입니다.</span> -->
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>강좌명<sup>필수</sup></th>
                  <td colspan="3"><input type="text" value="장영희 전공중국어 – 80점 도약 모의고사반" /></td>
                </tr>
                <tr>
                  <th>제작년월<sup>필수</sup></th>
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
                    <span class="checkSet ml10">
                      <input type="checkbox" id="one" />
                      <label for="one"><i></i>제작완료</label>
                    </span>
                  </td>
                  <th>수강료<sup>필수</sup></th>
                  <td>
                    <span class="unit wAuto">
                      <input type="text" value="100,000" class="tR">
                      <em>원</em>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>교재정보<sup>필수</sup></th>
                  <td colspan="3">
                    <span class="selectSet">
                      <select name="" id="" @change="onChange">
                        <option value="">선택</option>
                        <option value="textBook">교재</option>
                        <option value="print">프린트</option>
                        <option value="commercial">시중서점</option>
                        <option value="publish">발간예정</option>
                      </select>
                    </span>

                    <input type="text" class="wHalf ml10" placeholder="교재명 입력" v-if="txtBookTrigger01">
                    <span v-if="txtBookTrigger02">
                      <span class="ml10">[중급중국어 / 장영희] 장영희 적중 모의고사 모음집 1 <button class="btnDelete">삭제</button></span>
                      <button class="btnS line ml10" @click="LectureBookSearch()">교재검색</button> <!-- 비활성화 시 button에 disabled 속성 추가 -->
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- //강좌 기본정보 -->

          <!-- 온라인 강좌정보 -->
          <div class="subTit cpRight mt10">
            <h3>온라인 강좌정보</h3>
            <div class="grayBgBox">
              <span class="radioSet">
                <input type="radio" name="radio4" checked/>
                <label for=""><i></i>PC+모바일</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="radio4" />
                <label for=""><i></i>모바일 전용</label>
              </span>
            </div>
            <span class="checkSet ml20">
              <input type="checkbox" id="tit01" />
              <label for="tit01"><i></i>첨삭게시판 사용</label>
            </span>
          </div>
          <div class="tvs" v-if="onlineTrigger">
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
                  <th>신청기간<sup>필수</sup></th>
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
                  <th>개강일<sup>필수</sup></th>
                  <td>
                    <VCalendar class="calSet" v-model="date03" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                  </td>
                </tr>
                <tr>
                  <th>자동시작일<sup>필수</sup></th>
                  <td>
                    <span class="unit small mr5">
                      <input type="text" value="10" class="tR">
                      <em>일</em>
                    </span>
                    <em>후</em>
                    <span class="tL fGreen ml10 inBlock vTop">
                      * 강좌 결제 후 수강 미 시작 시, 자동으로 시작일을 체크하는 기준<br/>
                      * 자동시작일이 0일이면 결제 즉시 시작
                    </span>
                  </td>
                  <th>수강기간/수강제한<sup>필수</sup></th>
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
                  <th>수강종료일</th>
                  <td>
                    <span class="checkSet">
                      <input type="checkbox" id="tit01" />
                      <label for="tit01"><i></i>수강종료일 지정</label>
                    </span>
                  </td>
                  <th>수강가능요일</th>
                  <td>
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
                  </td>
                </tr>
                <tr>
                  <th>홀딩<sup>필수</sup></th>
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
                  <th>연장/연장수강료<sup>필수</sup></th>
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
                  <th>재수강<sup>필수</sup></th>
                  <td>
                    <span class="radioSet">
                      <input type="radio" name="radio1">
                      <label for=""><i data-v-57239274=""></i>가능</label>
                    </span>
                    <span class="radioSet">
                      <input type="radio" name="radio1">
                      <label for=""><i data-v-57239274=""></i>불가능</label>
                    </span>
                  </td>
                  <th>문서보안</th>
                  <td>
                    <span class="checkSet">
                      <input type="checkbox" id="tit01" />
                      <label for="tit01"><i></i>인쇄제한 사용</label>
                    </span>
                    <span class="unit small">
                      <input type="text" value="3" class="tR">
                      <em>회</em>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>수강권한</th>
                  <td colspan="3">
                    <button class="btnS line" @click="LectureUserChoice()">회원권한</button>
                    <button class="btnS line ml5" @click="LectureCourseChoice()">강좌권한</button>
                    <button class="btnS line ml5" @click="LectureGoodsChoice()">상품권한</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 비활성화시 -->
          <div class="boxBrown tC" v-if="!onlineTrigger">
            수강유형 - 온라인을 선택해주세요
          </div>
          <!-- //온라인 강좌정보 -->

          <!-- 서울학원 강좌정보 -->
          <div class="subTit cpRight mt10"><h3>서울학원 강좌정보</h3></div>
          <div class="tvs" v-if="seoulTrigger">
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
                  <th>신청기간<sup>필수</sup></th>
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
                  <th>개강-종강일<sup>필수</sup></th>
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
                  <th>강의요일/시간<sup>필수</sup></th>
                  <td>
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
                    <em class="mr10 ml10">/</em>
                    <span class="unit small mr5">
                      <input type="text" value="7" class="tR">
                      <em>시</em>
                    </span>
                    <em>~</em>
                    <span class="unit small ml5 mr5">
                      <input type="text" value="8" class="tR">
                      <em>시</em>
                    </span>
                  </td>
                  <th>강의 기간(주/회)<sup>필수</sup></th>
                  <td>
                    <span class="unit small mr5">
                      <input type="text" value="8" class="tR">
                      <em>주</em>
                    </span>
                    <span class="unit small mr5">
                      <input type="text" value="8" class="tR">
                      <em>회</em>
                    </span>
                    <span class="tL fGreen">*  주 동안 몇 회차 진행하는지 작성</span>
                  </td>
                </tr>
                <tr>
                  <th>수강인원<sup>필수</sup></th>
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
                  <th>무료/유료 보강<sup>필수</sup></th>
                  <td>
                    <em>무료</em>
                    <span class="unit small ml5 mr10">
                      <input type="text" value="2" class="tR">
                      <em>회</em>
                    </span>
                    <em>/ 유료</em>
                    <span class="unit small ml5 mr5">
                      <input type="text" value="3" class="tR">
                      <em>회</em>
                    </span>
                    <span class="unit wAuto ml5">
                      <input type="text" value="" class="tR">
                      <em>원</em>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>수강권한</th>
                  <td colspan="3">
                    <button class="btnS line" @click="LectureUserChoice()">회원권한</button>
                    <button class="btnS line ml5" @click="LectureCourseChoice()">강좌권한</button>
                    <button class="btnS line ml5" @click="LectureGoodsChoice()">상품권한</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 비활성화시 -->
          <div class="boxBrown tC" v-if="!seoulTrigger">
            수강유형 - 이데아관, 아이비관을 선택해주세요
          </div>
          <!-- //서울학원 강좌정보 -->

          <!-- 대구학원 강좌정보 -->
          <div class="subTit cpRight mt10">
            <h3>대구학원 강좌정보</h3>
            <div class="grayBgBox">
              <span class="radioSet">
                <input type="radio" name="radio4" checked/>
                <label for=""><i></i>직강</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="radio4" />
                <label for=""><i></i>라이브</label>
              </span>
            </div>
          </div>
          <div class="tvs" v-if="daeguTrigger">
            <table>
              <caption>대구학원 강좌정보</caption>
              <colgroup>
      					<col width="160"/>
      					<col width="*"/>
      					<col width="160"/>
      					<col width="*"/>
              </colgroup>
              <tbody>
                <tr>
                  <th>신청기간<sup>필수</sup></th>
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
                  <th>개강-종강일<sup>필수</sup></th>
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
                  <th>강의요일/시간<sup>필수</sup></th>
                  <td>
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
                    <em class="mr10 ml10">/</em>
                    <span class="unit small mr5">
                      <input type="text" value="7" class="tR">
                      <em>시</em>
                    </span>
                    <em>~</em>
                    <span class="unit small ml5 mr5">
                      <input type="text" value="8" class="tR">
                      <em>시</em>
                    </span>
                  </td>
                  <th>강의 기간(주/회)<sup>필수</sup></th>
                  <td>
                    <span class="unit small mr5">
                      <input type="text" value="8" class="tR">
                      <em>주</em>
                    </span>
                    <span class="unit small mr5">
                      <input type="text" value="8" class="tR">
                      <em>회</em>
                    </span>
                    <span class="tL fGreen">*  주 동안 몇 회차 진행하는지 작성</span>
                  </td>
                </tr>
                <tr>
                  <th>수강인원<sup>필수</sup></th>
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
                  <th>무료/유료 보강<sup>필수</sup></th>
                  <td>
                    <em>무료</em>
                    <span class="unit small ml5 mr10">
                      <input type="text" value="2" class="tR">
                      <em>회</em>
                    </span>
                    <em>/ 유료</em>
                    <span class="unit small ml5 mr5">
                      <input type="text" value="3" class="tR">
                      <em>회</em>
                    </span>
                    <span class="unit wAuto ml5">
                      <input type="text" value="" class="tR">
                      <em>원</em>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>수강권한</th>
                  <td colspan="3">
                    <button class="btnS line" @click="LectureUserChoice()">회원권한</button>
                    <button class="btnS line ml5" @click="LectureCourseChoice()">강좌권한</button>
                    <button class="btnS line ml5" @click="LectureGoodsChoice()">상품권한</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 비활성화시 -->
          <div class="boxBrown tC" v-if="!daeguTrigger">
            수강유형 - 에비뉴관을 선택해주세요
          </div>
          <!-- //대구학원 강좌정보 -->

          <!-- 강좌설명 -->
          <div class="subTit cpRight mt10"><h3>강좌설명</h3></div>
          <div class="tvs">
            <table>
              <caption>강좌설명</caption>
              <colgroup>
      					<col width="160"/>
      					<col width="*"/>
              </colgroup>
              <tbody>
                <tr>
                  <th>한 줄 메시지<sup>필수</sup></th>
                  <td><textarea></textarea></td>
                </tr>
                <tr>
                  <th>수강혜택<sup>필수</sup></th>
                  <td><textarea></textarea></td>
                </tr>
                <tr>
                  <th>강좌특징<sup>필수</sup></th>
                  <td><textarea></textarea></td>
                </tr>
                <tr>
                  <th>강의 상세계획<sup>필수</sup></th>
                  <td><textarea></textarea></td>
                </tr>
                <tr>
                  <th>기타</th>
                  <td><textarea></textarea></td>
                </tr>
              </tbody>
            </table>
          </div>

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
      txtBookTrigger01: false,
      txtBookTrigger02: false,
      onlineTrigger: true,
      seoulTrigger: true,
      daeguTrigger: false,
      date01: '',
      date02: '',
      date03: '',
    }
  },
  methods: {
    onChange(event) {
      let value = event.target.value;
      this.txtBookTrigger01 = false;
      this.txtBookTrigger02 = false;

      if (value == 'textBook') {
        this.txtBookTrigger02 = true;
      } else if(value == 'print' || value == 'commercial' || value == 'publish') {
        this.txtBookTrigger01 = true;
      }
    },
    onChange01(event) {
      let checked = event.target.checked;
      let target = document.getElementById('online');
      checked ? target.removeAttribute('disabled') : target.setAttribute('disabled', 'disabled');
    },
    onChange02(event) {
      let checked = event.target.checked;
      let target = document.getElementById('seoul');
      checked ? target.removeAttribute('disabled') : target.setAttribute('disabled', 'disabled');
    },
    onChange03(event) {
      let checked = event.target.checked;
      let target = document.getElementById('daegu');
      checked ? target.removeAttribute('disabled') : target.setAttribute('disabled', 'disabled');
    },
    onChange04(event) {
      let checked = event.target.checked;
      let target = document.getElementById('professor');
      checked ? target.removeAttribute('disabled') : target.setAttribute('disabled', 'disabled');
    },
    LectureBookSearch() {
      let routeData = this.$router.resolve({name: 'LectureBookSearch', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceBookSearch', '_blank', `width=1100,height=900`);
    },
    LectureUserChoice() {
      let routeData = this.$router.resolve({name: 'LectureUserChoice', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceUserChoice', '_blank', `width=1100,height=900`);
    },
    LectureCourseChoice() {
      let routeData = this.$router.resolve({name: 'LectureCourseChoice', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceCourseChoice', '_blank', `width=1100,height=900`);
    },
    LectureGoodsChoice() {
      let routeData = this.$router.resolve({name: 'LectureGoodsChoice', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceGoodsChoice', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  },

}
</script>

<style lang="css" scoped>
</style>
