<template lang="html">
  <div>
		<div class="pageTit">
			<h2>단과 강좌</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link><em>단과 강좌</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="singleCourse">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="left-po">
            <router-link to="/mkup/lecture/singleCourseRegHome" class="btnS">수강신청홈 강좌순서</router-link>
          </div>
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">강좌구분</option>
                      <option value="">온라인</option>
                      <option value="">서울학원</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">과목</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">선생님</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="강좌번호, 강좌명 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div>
                <button class="btnRefresh">초기화</button>
              </div>
            </div>
          </div>
        </div>
        <div class="listSummery">
					<div class="left">
            <span class="checkSet">
              <input type="checkbox" checked="checked">
              <label for=""><i></i>숨김 강의 제외하고 조회</label>
            </span>
					</div>
          <div class="right">
            <router-link class="btnAdd" to="/mkup/lecture/singleCourse/write">신규등록</router-link>
            <button class="btnM line ml10">온라인 강좌복사</button>
            <button class="btnM line ml10">서울학원 강좌복사</button>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 테이블 목록 -->
        <div class="tls lectureList">
          <table>
            <colgroup>
              <col width="40">
              <col width="110">
              <col width="40">
              <col width="110">
              <col width="260">
              <col width="80">
              <col width="90">
              <col width="90">
              <col width="70">
              <col width="70">
              <col width="60">
              <col width="40">
              <col width="40">
            </colgroup>
            <thead class="duble">
              <tr>
                <th scope="col" colspan="4">신청현황 / 노출여부</th>
                <th scope="col" rowspan="2">강좌명</th>
                <th scope="col" rowspan="2">과목<br/>/ 선생님</th>
                <th scope="col" rowspan="2">수강료</th>
                <th scope="col" rowspan="2">개강-종강일</th>
                <th scope="col" rowspan="2">수강기간<br/>/ 수강제한</th>
                <th scope="col" rowspan="2">홀딩<br/>/ 연장</th>
                <th scope="col" rowspan="2">동영상<br/>강의실</th>
                <th scope="col" colspan="2">수강인원</th>
              </tr>
              <tr>
                <th scope="col" colspan="2">온라인</th>
                <th scope="col" colspan="2">서울</th>
                <th scope="col">온라인</th>
                <th scope="col">서울</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="sl10">
                    <label for="sl10"><i></i></label>
                  </span>
                </td>
                <td class="tL">
                  <span class="lectureSts">S2201000010</span>
                  <span>접수중</span>
                  <em class="mlr5 fGray fs12">|</em>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="sl10show" checked>
                    <label for="sl10show">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="hl10">
                    <label for="hl10"><i></i></label>
                  </span>
                </td>
                <td class="tL">
                  <span class="lectureSts">H2201000010</span>
                  <span>신청마감</span>
                  <em class="mlr5 fGray fs12">|</em>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="hl10show" >
                    <label for="hl10show">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">
                  <router-link to="/mkup/lecture/singleCourse/offline">
                    [21 3~4월]<em class="iSet yellow">제작중</em><br/>
                    장영희 전공중국어 – 80점 도약 모의고사반
                  </router-link>
                </td>
                <td>중국어<br/>장영희</td>
                <td>500,000원</td>
                <td>2021-01-01<br/>~2021-03-31</td>
                <td>70일<br/>1.4배수</td>
                <td>3회/30일<br/>3회/15일</td>
                <td>
                  <router-link to="/mkup/lecture/singleCourse/player" class="btnPlayer">
                    영상 미리보기
                  </router-link>
                </td>
                <td>
    							<span class="memoTooltip">
    								<em>250</em>
    								<span>
                      실제 수강인원 (유료): 250 (102)<br/>
                      전환포함 (유/무료): 150 (110/40)<br/>
                      단과 (유/무료): 100 (70/30)<br/>
                      패키지 (유/무료): 50 (40/10)<br/>
    								</span>
    							</span>
                </td>
                <td>
    							<span class="memoTooltip">
    								<em>100</em>
    								<span>
                      실제 수강인원 (유료): 100 (125)<br/>
                      전환포함 (유/무료): 150 (110/40)<br/>
                      단과 (유/무료): 100 (70/30)<br/>
                      패키지 (유/무료): 50 (40/10)<br/>
    								</span>
    							</span>
                </td>
              </tr>
              <!--//Loop-->
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="sl09">
                    <label for="sl09"><i></i></label>
                  </span>
                </td>
                <td class="tL">
                  <span class="lectureSts">S2201000010</span>
                  <span>접수중</span>
                  <em class="mlr5 fGray fs12">|</em>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="sl09show" checked>
                    <label for="sl09show">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="hl09" disabled>
                    <label for="hl09"><i></i></label>
                  </span>
                </td>
                <td>-</td>
                <td class="tL">
                  <router-link to="/mkup/lecture/singleCourse/live">
                    [21 1~2월]<em class="iSet orange">제작완료</em><br/>
                    장영희 전공중국어 – 80점 도약 모의고사반
                  </router-link>
                <td>중국어<br/>장영희</td>
                </td>
                <td>500,000원</td>
                <td>2021-01-01<br/>~2021-03-31</td>
                <td>70일<br/>1.4배수</td>
                <td>홀딩불가<br/>연장불가</td>
                <td>
                  <router-link to="/mkup/lecture/singleCourse/player" class="btnPlayer">
                    영상 미리보기
                  </router-link>
                </td>
                <td>
    							<span class="memoTooltip">
    								<em>250</em>
    								<span>
                      실제 수강인원 (유료): 250 (102)<br/>
                      전환포함 (유/무료): 150 (110/40)<br/>
                      단과 (유/무료): 100 (70/30)<br/>
                      패키지 (유/무료): 50 (40/10)<br/>
    								</span>
    							</span>
                </td>
                <td>-</td>
              </tr>
              <tr class="blue"><!-- 접수예정 강좌일 떄 class 'blue' 추가 -->
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="sl08">
                    <label for="sl08"><i></i></label>
                  </span>
                </td>
                <td class="tL">
                  <span class="lectureSts">S2201000010</span>
                  <span>접수예정</span>
                  <em class="mlr5 fGray fs12">|</em>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="sl08show" checked>
                    <label for="sl08show">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="hl08" disabled>
                    <label for="hl08"><i></i></label>
                  </span>
                </td>
                <td>-</td>
                <td class="tL">
                  <router-link to="/mkup/lecture/singleCourse/offline">
                    [21 5~6월]<br/>장영희 전공중국어 – 80점 도약 모의고사반
                  </router-link>
                <td>중국어<br/>장영희</td>
                </td>
                <td>500,000원</td>
                <td>2021-01-01<br/>~2021-03-31</td>
                <td>70일<br/>1.4배수</td>
                <td>홀딩불가<br/>연장불가</td>
                <td>
                  <router-link to="/mkup/lecture/singleCourse/player" class="btnPlayer">
                    영상 미리보기
                  </router-link>
                </td>
                <td><span>미개강</span></td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="sl07" disabled>
                    <label for="sl07"><i></i></label>
                  </span>
                </td>
                <td>-</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="hl07">
                    <label for="hl07"><i></i></label>
                  </span>
                </td>
                <td class="tL">
                  <span class="lectureSts">H2201000011</span>
                  <span>접수중</span>
                  <em class="mlr5 fGray fs12">|</em>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="hl07show" checked>
                    <label for="hl07show">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">
                  <router-link to="/mkup/lecture/singleCourse/offline">
                    [21 1~2월]<em class="iSet orange">제작완료</em><br/>
                    장영희 전공중국어 – 80점 도약 모의고사반
                  </router-link>
                </td>
                <td>중국어<br/>장영희</td>
                <td>500,000원</td>
                <td>2021-01-01<br/>~2021-03-31</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
    							<span class="memoTooltip">
    								<em>170</em>
    								<span>
                      실제 수강인원 (유료): 170 (102)<br/>
                      전환포함 (유/무료): 150 (110/40)<br/>
                      단과 (유/무료): 100 (70/30)<br/>
                      패키지 (유/무료): 50 (40/10)<br/>
    								</span>
    							</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="sl06" disabled>
                    <label for="sl06"><i></i></label>
                  </span>
                </td>
                <td>-</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="hl06">
                    <label for="hl06"><i></i></label>
                  </span>
                </td>
                <td class="tL">
                  <span class="lectureSts">H2201000012</span>
                  <span>접수중</span>
                  <em class="mlr5 fGray fs12">|</em>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="hl06show" checked>
                    <label for="hl06show">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">
                  <router-link to="/mkup/lecture/singleCourse/offline">
                    [21 1~2월]<em class="iSet yellow">제작중</em><br/>
                    장영희 전공중국어 – 80점 도약 모의고사반
                  </router-link>
                </td>
                <td>중국어<br/>장영희</td>
                <td>500,000원</td>
                <td>2021-01-01<br/>~2021-03-31</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
    							<span class="memoTooltip">
    								<em>100</em>
    								<span>
                      실제 수강인원 (유료): 100 (102)<br/>
                      전환포함 (유/무료): 150 (110/40)<br/>
                      단과 (유/무료): 100 (70/30)<br/>
                      패키지 (유/무료): 50 (40/10)<br/>
    								</span>
    							</span>
                </td>
              </tr>
              <tr class="blue"><!-- 접수예정 강좌일 떄 class 'blue' 추가 -->
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="sl05">
                    <label for="sl05"><i></i></label>
                  </span>
                </td>
                <td class="tL">
                  <span class="lectureSts">S2201000010</span>
                  <span>접수예정</span>
                  <em class="mlr5 fGray fs12">|</em>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="sl05show">
                    <label for="sl05show">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="hl05">
                    <label for="hl05"><i></i></label>
                  </span>
                </td>
                <td class="tL">
                  <span class="lectureSts">S2201000010</span>
                  <span>접수예정</span>
                  <em class="mlr5 fGray fs12">|</em>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="hl05show">
                    <label for="hl05show">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">
                  <router-link to="/mkup/lecture/singleCourse/offline">
                    [21 5~6월]<br/>장영희 전공중국어 – 80점 도약 모의고사반
                  </router-link>
                </td>
                <td>중국어<br/>장영희</td>
                <td>500,000원</td>
                <td>2021-01-01<br/>~2021-03-31</td>
                <td>70일<br/>1.4배수</td>
                <td>3회/30일<br/>3회/15일</td>
                <td>
                  <router-link to="/mkup/lecture/singleCourse/player" class="btnPlayer">
                    영상 미리보기
                  </router-link>
                </td>
                <td>접수</br>예정</td>
                <td>접수</br>예정</td>
              </tr>
              <tr class="expiry"><!-- 접수/선청마감 강좌일 떄 class 'expired' 추가 -->
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="sl04">
                    <label for="sl04"><i></i></label>
                  </span>
                </td>
                <td class="tL">
                  <span class="lectureSts">S2201000010</span>
                  <span>접수마감</span>
                  <em class="mlr5 fGray fs12">|</em>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="sl04show">
                    <label for="sl04show">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="hl04" disabled>
                    <label for="hl04"><i></i></label>
                  </span>
                </td>
                <td>-</td>
                <td class="tL">
                  <router-link to="/mkup/lecture/singleCourse/offline">
                    [21 5~6월]<em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반
                  </router-link>
                </td>
                <td>중국어<br/>장영희</td>
                <td>500,000원</td>
                <td>2021-02-01</td>
                <td>70일<br/>1.4배수</td>
                <td>홀딩불가<br/>3회/15일</td>
                <td>
                  <router-link to="/mkup/lecture/singleCourse/player" class="btnPlayer">
                    영상 미리보기
                  </router-link>
                </td>
                <td>
    							<span class="memoTooltip">
    								<em>250</em>
    								<span>
                      실제 수강인원 (유료): 250 (102)<br/>
                      전환포함 (유/무료): 150 (110/40)<br/>
                      단과 (유/무료): 100 (70/30)<br/>
                      패키지 (유/무료): 50 (40/10)<br/>
    								</span>
    							</span>
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="sl03">
                    <label for="sl03"><i></i></label>
                  </span>
                </td>
                <td class="tL">
                  <span class="lectureSts">S2201000010</span>
                  <span>접수중</span>
                  <em class="mlr5 fGray fs12">|</em>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="sl03show" checked>
                    <label for="sl03show">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="hl04">
                    <label for="hl04"><i></i></label>
                  </span>
                </td>
                <td class="tL">
                  <span class="lectureSts">H2201000010</span>
                  <span>신청마감</span>
                  <em class="mlr5 fGray fs12">|</em>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="hl04show">
                    <label for="hl04show">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">
                  <router-link to="/mkup/lecture/singleCourse/offline">
                    [21 5~6월]<em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반
                  </router-link>
                </td>
                <td>중국어<br/>장영희</td>
                <td>500,000원</td>
                <td>2021-01-01<br/>~2021-03-31</td>
                <td>70일<br/>1.4배수</td>
                <td>3회/30일<br/>연장불가</td>
                <td>
                  <router-link to="/mkup/lecture/singleCourse/player" class="btnPlayer">
                    영상 미리보기
                  </router-link>
                </td>
                <td>
    							<span class="memoTooltip">
    								<em>250</em>
    								<span>
                      실제 수강인원 (유료): 250 (102)<br/>
                      전환포함 (유/무료): 150 (110/40)<br/>
                      단과 (유/무료): 100 (70/30)<br/>
                      패키지 (유/무료): 50 (40/10)<br/>
    								</span>
    							</span>
                </td>
                <td>
    							<span class="memoTooltip">
    								<em>100</em>
    								<span>
                      실제 수강인원 (유료): 170 (125)<br/>
                      전환포함 (유/무료): 150 (110/40)<br/>
                      단과 (유/무료): 100 (70/30)<br/>
                      패키지 (유/무료): 50 (40/10)<br/>
    								</span>
    							</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="sl02">
                    <label for="sl02"><i></i></label>
                  </span>
                </td>
                <td class="tL">
                  <span class="lectureSts">S2201000010</span>
                  <span>접수중</span>
                  <em class="mlr5 fGray fs12">|</em>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="sl02show" checked>
                    <label for="sl02show">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="hl02" disabled>
                    <label for="hl02"><i></i></label>
                  </span>
                </td>
                <td>-</td>
                <td class="tL">
                  <router-link to="/mkup/lecture/singleCourse/offline">
                    [21 5~6월]<em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반
                  </router-link>
                </td>
                <td>중국어<br/>장영희</td>
                <td>500,000원</td>
                <td>2021-02-01</td>
                <td>70일<br/>1.4배수</td>
                <td>3회/30일<br/>3회/15일</td>
                <td>
                  <router-link to="/mkup/lecture/singleCourse/player" class="btnPlayer">
                    영상 미리보기
                  </router-link>
                </td>
                <td>
    							<span class="memoTooltip">
    								<em>250</em>
    								<span>
                      실제 수강인원 (유료): 250 (125)<br/>
                      전환포함 (유/무료): 150 (110/40)<br/>
                      단과 (유/무료): 100 (70/30)<br/>
                      패키지 (유/무료): 50 (40/10)<br/>
    								</span>
    							</span>
                </td>
                <td>-</td>
              </tr>
              <tr class="blue">
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="sl01">
                    <label for="sl01"><i></i></label>
                  </span>
                </td>
                <td class="tL">
                  <span class="lectureSts">S2201000010</span>
                  <span>접수예정</span>
                  <em class="mlr5 fGray fs12">|</em>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="sl01show">
                    <label for="sl01show">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="hl01" disabled>
                    <label for="hl01"><i></i></label>
                  </span>
                </td>
                <td>-</td>
                <td class="tL">
                  <router-link to="/mkup/lecture/singleCourse/offline">
                    [21 5~6월]<em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반
                  </router-link>
                </td>
                <td>중국어<br/>장영희</td>
                <td>500,000원</td>
                <td>2021-02-01</td>
                <td>70일<br/>1.4배수</td>
                <td>3회/30일<br/>3회/15일</td>
                <td>
                  <router-link to="/mkup/lecture/singleCourse/player" class="btnPlayer">
                    영상 미리보기
                  </router-link>
                </td>
                <td>접수</br>예정</td>
                <td>-</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="13" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <!-- //테이블 목록 -->
        <Paginate />
      </div>
    </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SingleCourse',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
