<template lang="html">
  <div id="workListwrap">
    <h1><span>KG에듀원</span></h1>
    <div class="worklistTab">
      <button :class="{on:tab===1}" @click="tab = 1">마크업 Worklist</button>
      <button :class="{on:tab===2}" @click="tab = 2">디자인 XD URL</button>
      <button :class="{on:tab===3}" @click="tab = 3">과목, 선생님 별 대표 Class 및 이미지명</button>
      <router-link to="/mkup/guide" target="_blank">마크업 가이드</router-link>
    </div>
    <!-- 마크업 Worklist -->
    <div class="worklistData" v-if="tab == 1">
      <ul>
        <li>기준 Device : PC (Edge, Chrome, Safari), Mobile (chrome, Safari)</li>
        <li>문서타입 : HTML5 / CSS3</li>
      </ul>
      <table class="table">
        <caption>
          <span class="new"></span>&nbsp; 전달 시 신규
          <span class="gray"></span>&nbsp; 최초 전달 완료
          <span class="red"></span>&nbsp; 수정사항
          <span class="pink"></span>&nbsp; History
        </caption>
        <thead>
          <tr>
            <th width="50">ID</th>
            <th width="130">1depth</th>
            <th width="160">2depth</th>
            <th width="160">3depth</th>
            <th width="160">Data</th>
            <th width="53">PopUp</th>
            <th width="53">Device</th>
            <th width="260">Path</th>
            <th width="210">FileName</th>
            <th width="*">History &amp; Descration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colspan="10" class="title">src Root</th>
          </tr>
          <tr>
            <th></th>
            <td rowspan="7">Common</td>
            <td>Component</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/uicomponent" target="_blank">/mkup/uicomponent</a></td>
            <td>Uicomponent.vue</td>
            <td><strong class="red">2021-11-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="3">layout</td>
            <td>레이아웃 템플릿(케이스 별 통합)</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/layout" target="_blank">/mkup/layout</a></td>
            <td>Layout.vue</a></td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>목록 템플릿</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/layoutBbs" target="_blank">/mkup/layoutBbs</a></td>
            <td>LayoutBbs.vue</a></td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>본문 타이틀 템플릿</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/layoutTitle" target="_blank">/mkup/layoutTitle</a></td>
            <td>LayoutTitle.vue</a></td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>차트 샘플</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/chartSample" target="_blank">/mkup/chartSample</a></td>
            <td>ChartSample.vue</a></td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>에러</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/error" target="_blank">/mkup/error</a></td>
            <td>Error.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>로딩</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/loading" target="_blank">/mkup/loading</a></td>
            <td>Loading.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="17">inClude</td>
            <td rowspan="4">PC</td>
            <td>Header</td>
            <td></td>
            <td></td>
            <td class="tC">PC</td>
            <td></td>
            <td>PcHeader.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>Snb</td>
            <td></td>
            <td></td>
            <td class="tC">PC</td>
            <td></td>
            <td>PcSnb.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>Footer</td>
            <td></td>
            <td></td>
            <td class="tC">PC</td>
            <td></td>
            <td>PcFooter.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>개인화 Navi</td>
            <td></td>
            <td></td>
            <td class="tC">PC</td>
            <td></td>
            <td>PcMyNavi.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="6">Mobile</td>
            <td>Header</td>
            <td></td>
            <td></td>
            <td class="tC">M</td>
            <td></td>
            <td>MobileHeader.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>Snb</td>
            <td></td>
            <td></td>
            <td class="tC">M</td>
            <td></td>
            <td>MobileSnb.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>Gnb(Category)</td>
            <td></td>
            <td></td>
            <td class="tC">M</td>
            <td></td>
            <td>MobileGnb.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>Footer</td>
            <td></td>
            <td></td>
            <td class="tC">M</td>
            <td></td>
            <td>MobileFooter.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>개인화 Navi</td>
            <td></td>
            <td></td>
            <td class="tC">M</td>
            <td></td>
            <td>MobileMyNavi.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>하단 Tool Bar</td>
            <td></td>
            <td></td>
            <td class="tC">M</td>
            <td></td>
            <td>MobileToolBar.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="7">컴포넌트</td>
            <td>페이징</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>Paginate.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>개인화 Navi 즐겨찾기</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>FavoritesList.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>alert 팝업</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>Alert.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>일반 레이어 팝업</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>Popup.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>이미지 크게보기 팝업</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>ImgPopup.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>플레이어 예시팝업</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>VideoPopup.vue</td>
            <td><strong class="red">2022-01-14</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>윈도우 팝업</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>WindowPopup.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">기타</td>
            <td>스크립트</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>plugins/mixins/Mixins.js</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>라우터</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>router/mkRoutes.js</td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10" class="title">진입(main)</th>
          </tr>
          <tr>
            <th></th>
            <td rowspan="9">인트로</td>
            <td>분기</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/intro" target="_blank">/mkup/intro</a></td>
            <td>Intro.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>PC 본창</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">PC</td>
            <td>(자주 하는 질문 포함)</td>
            <td>IntroPc.vue</td>
            <td>
              <strong class="red">2021-12-16</strong>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>Mobile 본창</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">M</td>
            <td>(시험 적중 포함)</td>
            <td>IntroM.vue</td>
            <td>
              <strong class="red">2021-12-16</strong>
            </td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="6"></td>
            <td rowspan="6"></td>
            <td>이벤트</td>
            <td></td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>
              IntroEvent.vue <br/>IntroEventM.vue
            </td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>합격수기</td>
            <td></td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>IntroPass.vue <br/>IntroPassM.vue
            </td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>온라인 설명회</td>
            <td></td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>IntroPresentation.vue <br/>IntroPresentationM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>시험 적중</td>
            <td></td>
            <td class="tC">PC</td>
            <td></td>
            <td>IntroRealHit.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>합격전략</td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>IntroDirection.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>위치 안내</td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>IntroLocation.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="9">메인</td>
            <td>진입</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/main" target="_blank">/mkup/main</a></td>
            <td>Main.vue</td>
            <td><strong class="pink">2021-11-04</strong><strong class="pink">2021-12-16</strong><strong class="pink">2021-12-17</strong><strong class="red">2022-01-19</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="8"></td>
            <td rowspan="8"></td>
            <td>메인비쥬얼</td>
            <td></td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>MainBanner <br/>MainBannerM</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>최신공지사항</td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>MainBbsNotice</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>새소식</td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>MainBbsNews</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>선생님 메인 배너</td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>MainSsamBanner</td>
            <td><strong class="pink">2021-12-14</strong><strong class="red">2022-01-19</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>하이라이트 배너</td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>MainKindBanner</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>합격자</td>
            <td></td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>MainPass <br/>MainPassM</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>리얼적중</td>
            <td></td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>MainHitPc <br/>MainHitM</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>수강후기</td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>MainReview</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="6">맴버</td>
            <td>Login</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/login" target="_blank">/mkup/login</a></td>
            <td>Login.vue</td>
            <td><strong class="red">2022-01-19</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">Login SNS 인증</td>
            <td>네이버</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/loginNaver" target="_blank">/mkup/loginNaver</a></td>
            <td>loginSnsNaver.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>카카오</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/loginKaKao" target="_blank">/mkup/loginKaKao</a></td>
            <td>LoginSnsKaKao.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>회원가입</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/join" target="_blank">/mkup/join.vue</a></td>
            <td>Join.vue</td>
            <td><strong class="red">2021-11-09</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>아이디/비밀번호 찾기</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/findAccount" target="_blank">/mkup/findAccount</a></td>
            <td>FindAccount.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>이용약관 및 이용약관</td>
            <td></td>
            <td>
              이용약관<br/>
              개인정보 수집<br/>
              SNS 마케팅<br/>
              이메일 마케팅
            </td>
            <td class="tC">O</td>
            <td class="tC">공통</td>
            <td></td>
            <td>
              PolicyService.vue<br/>
              PolicySms.vue<br/>
              PolicyEmail.vue<br/>
              PolicyEmail.vue
            </td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10" class="title">쌤팩(ssampack)</th>
          </tr>
          <tr>
            <th></th>
            <td rowspan="6">쌤팩소개</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssampack/index" target="_blank">/mkup/ssampack/index</a></td>
            <td>Index.vue</td>
            <td>2022-05-12</td>
          </tr>
          <tr>
            <th></th>
            <td>상단 비주얼</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">PC<br/>M</td>
            <td></td>
            <td>
              Ssampack00Pc.vue<br/>
              Ssampack00M.vue
            </td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>2023 쌤팩 Tab</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">PC<br/>M<br/>PC<br/>M<br/>PC<br/>PC<br/>M<br/>PC<br/>M</td>
            <td></td>
            <td>
              Ssampack0101Pc.vue<br/>
              Ssampack0101M.vue<br/>
              Ssampack0102Pc.vue<br/>
              Ssampack0102M.vue<br/>
              Ssampack0103Pc.vue<br/>
              Ssampack0104Pc.vue<br/>
              Ssampack0104M.vue<br/>
              Ssampack0105Pc.vue<br/>
              Ssampack0105M.vue
            </td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>쌤팩 프리미엄 Tab</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">PC<br/>M<br/>PC<br/>M<br/>PC<br/>M<br/>PC<br/>M</td>
            <td></td>
            <td>
              Ssampack0201Pc.vue<br/>
              Ssampack0201M.vue<br/>
              Ssampack0202Pc.vue<br/>
              Ssampack0202M.vue<br/>
              Ssampack0203Pc.vue<br/>
              Ssampack0203M.vue<br/>
              Ssampack0204Pc.vue<br/>
              Ssampack0204M.vue
            </td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>프리미엄 Plus Tab</td>
            <td></td>
            <td></td>
            <td class="tC">O</td>
            <td class="tC">PC<br/>M<br/>PC<br/>M<br/>PC<br/>PC<br/>M</td>
            <td></td>
            <td>
              Ssampack0301Pc.vue<br/>
              Ssampack0301M.vue<br/>
              Ssampack0302Pc.vue<br/>
              Ssampack0302M.vue<br/>
              Ssampack0303Pc.vue<br/>
              Ssampack0304Pc.vue<br/>
              Ssampack0304M.vue
            </td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>구매하기 영역</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td></td>
            <td>
              Ssampack00Product.vue<br/>
              Ssampack00Terms.vue
            </td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10" class="title">수강신청(lecture)</th>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">메인: root</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/lecture/index" target="_blank">/mkup/lecture/index</a></td>
            <td>Index.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>개별과목 목록</td>
            <td>(교육학)</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/lecture/index/mjedu" target="_blank">/mkup/lecture/index/mjedu</a></td>
            <td>IndexMjedu.vue</td>
            <td><strong class="red">2022-01-19</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="17">선생님 홈</td>
            <td rowspan="3">선생님 별: root</td>
            <td>(김현)</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/lecture/teachermjedu01" target="_blank">/mkup/lecture/teachermjedu01</a></td>
            <td>LectureMjedu01.vue</td>
            <td><strong class="red">2022-01-12</strong></td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td>선생님 템플릿</td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td></td>
            <td>TeacherTemplate.vue</td>
            <td><strong class="red">2021-12-16</strong></td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td>커리큘럼</td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>TeacherHome.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="3">온라인 강의 Tab</td>
            <td>목록</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td></td>
            <td>TeacherOnline.vue</td>
            <td><strong class="red">2022-01-12</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>패키지 상세</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/lecture/teacher/online" target="_blank">/mkup/lecture/teacher/online</a></td>
            <td>TeacherOnlineView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>단과 상세</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/lecture/teacher/online2" target="_blank">/mkup/lecture/teacher/online2</a></td>
            <td>TeacherOnlineView2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="3">학원 강의 Tab</td>
            <td>목록</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td></td>
            <td>TeacherDirectSeoul.vue</td>
            <td><strong class="red">2022-01-12</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>패키지 상세</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/lecture/teacher/directSeoul" target="_blank">/mkup/lecture/teacher/directSeoul</a></td>
            <td>TeacherDirectSeoulView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>단과 상세</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/lecture/teacher/directSeoul2" target="_blank">/mkup/lecture/teacher/directSeoul2</a></td>
            <td>TeacherDirectSeoulView2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="3">라이브 강의 Tab</td>
            <td>목록</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td></td>
            <td>TeacherLive.vue</td>
            <td><strong class="red">2022-01-12</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>패키지 상세</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/lecture/teacher/live" target="_blank">/mkup/lecture/teacher/live</a></td>
            <td>TeacherLiveView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>단과 상세</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/lecture/teacher/live2" target="_blank">/mkup/lecture/teacher/live2</a></td>
            <td>TeacherLiveView2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>교재 Tab</td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td></td>
            <td>TeacherBook.vue</td>
            <td><strong class="red">2022-01-12</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>공지사항 Tab</td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td></td>
            <td>TeacherNotice.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>수강후기 Tab</td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td></td>
            <td>TeacherReview.vue</td>
            <td><strong class="red">2022-01-12</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>학습 Q&amp;A Tab</td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td></td>
            <td>TeacherQnA.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>관련 팝업</td>
            <td></td>
            <td>
              강좌소개<br/>
              강의 리스트<br/>
              수강할인 팁
            </td>
            <td class="tC">O</td>
            <td class="tC">공통</td>
            <td></td>
            <td>
              TeacherLecDetailInfo.vue<br/>
              TeacherLecSchedule.vue<br/>
              TeacherLecDiscount.vue
            </td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10" class="title">쌤 Mall(ssammall)</th>
          </tr>
          <tr>
            <th></th>
            <td rowspan="3">메인: root</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/index" target="_blank">/mkup/ssammall/index</a></td>
            <td>Index.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2"></td>
            <td rowspan="2"></td>
            <td>백퍼 후기</td>
            <td></td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>IndexBestReviewPc.vue<br/>IndexBestReviewM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>신간 교재</td>
            <td></td>
            <td class="tC">
              PC <br/> M
            </td>
            <td></td>
            <td>IndexNewBookPc.vue<br/>IndexNewBookM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>검색결과</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/search" target="_blank">/mkup/ssammall/search</a></td>
            <td>SearchResult.vue</td>
            <td>
              <strong class="red">2021-12-16</strong>
            </td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="6">교재도서</td>
            <td rowspan="2">서브메인:root</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/book" target="_blank">/mkup/ssammall/book</a></td>
            <td>Book.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td>선생님 전체보기 팝업</td>
            <td class="tC">O</td>
            <td class="tC">공통</td>
            <td></td>
            <td>BookSsamList.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="3">선생님 별 교재목록</td>
            <td>김현 선생님</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/book/teacher1" target="_blank">/mkup/ssammall/book/teacher1</a></td>
            <td>BookTeacher.vue</td>
            <td><strong class="new">2021-12-02</strong><strong class="red">2022-01-19</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>배지윤 선생님</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/book/teacher2" target="_blank">/mkup/ssammall/book/teacher2</a></td>
            <td>BookTeacher2.vue</td>
            <td><strong class="new">2021-12-02</strong><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>송헌/김준팀</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/book/teacher3" target="_blank">/mkup/ssammall/book/teacher3</a></td>
            <td>BookTeacher3.vue</td>
            <td><strong class="new">2021-12-02</strong><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/book/view" target="_blank">/mkup/ssammall/book/view</a></td>
            <td>BookView.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="6">학습기기</td>
            <td>서브메인:root</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/device" target="_blank">/mkup/ssammall/device</a></td>
            <td>Device.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="4">구분 별 목록</td>
            <td>노트북</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/device/notebook" target="_blank">/mkup/ssammall/device/notebook</a></td>
            <td>DeviceNotebook.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>태블릿</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/device/tablet" target="_blank">/mkup/ssammall/device/tablet</a></td>
            <td>DeviceTablet.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>스마트폰</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/device/phone" target="_blank">/mkup/ssammall/device/phone</a></td>
            <td>DevicePhone.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>기타</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/device/etc" target="_blank">/mkup/ssammall/device/etc</a></td>
            <td>DeviceEtc.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/device/view" target="_blank">/mkup/ssammall/device/view</a></td>
            <td>DeviceView.vue</td>
            <td><strong class="new">2021-12-02</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="4">굿즈</td>
            <td rowspan="3">구분 별 목록</td>
            <td>패브릭</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/goods/fabric" target="_blank">/mkup/ssammall/goods/fabric</a></td>
            <td>GoodsFabric.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>문구</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/goods/stationery" target="_blank">/mkup/ssammall/goods/stationery</a></td>
            <td>GoodsStationery.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>기타</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/goods/etc" target="_blank">/mkup/ssammall/goods/etc</a></td>
            <td>GoodsEtc.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/device/view" target="_blank">/mkup/ssammall/device/view</a></td>
            <td>GoodsView.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="6">백퍼후기</td>
            <td rowspan="2">교재도서</td>
            <td>목록</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/review/book" target="_blank">/mkup/ssammall/review/book</a></td>
            <td>ReviewBook.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/review/book/view" target="_blank">/mkup/ssammall/review/book/view</a></td>
            <td>ReviewBookView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">학습기기</td>
            <td>목록</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/review/device" target="_blank">/mkup/ssammall/review/device</a></td>
            <td>ReviewDevice.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/review/device/view" target="_blank">/mkup/ssammall/review/device/view</a></td>
            <td>ReviewDeviceView.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">굿즈</td>
            <td>목록</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/review/goods" target="_blank">/mkup/ssammall/review/goods</a></td>
            <td>ReviewGoods.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/ssammall/review/goods/view" target="_blank">/mkup/ssammall/review/goods/view</a></td>
            <td>ReviewGoodsView.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th colspan="10" class="title">선생님 스페셜(special)</th>
          </tr>
          <tr>
            <th></th>
            <td rowspan="4">메인: root</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/special/index" target="_blank">/mkup/special/index</a></td>
            <td>Index.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td>선생님 이벤트</td>
            <td></td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>SpecialIndexEventPc <br/> SpecialIndexEventM</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td>리얼 적중</td>
            <td></td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>SpecialIndexHitPc <br/> SpecialIndexHitM</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td>선생님 인터뷰</td>
            <td></td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>SpecialIndexInterviewPc <br/> SpecialIndexInterviewM</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="5">선생님 이벤트</td>
            <td>목록</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/special/event" target="_blank">/mkup/special/event</a></td>
            <td>Event.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세1 (에디터입력)</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/special/event/view1" target="_blank">/mkup/special/event/view1</a></td>
            <td>EventView1.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세2 (목록가기 삭제)</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/special/event/view2" target="_blank">/mkup/special/event/view2</a></td>
            <td>EventView2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세3 (Full Page)</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/main/eventview3" target="_blank">/mkup/main/eventview3</a></td>
            <td>EventView3.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>검색결과</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/special/event/search" target="_blank">/mkup/special/event/search</a></td>
            <td>EventSearch.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="9">리얼적중</td>
            <td>목록</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/special/hit" target="_blank">/mkup/special/hit</a></td>
            <td>RealHit.vue</td>
            <td><strong class="red">2022-02-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>상세1 (에디터입력)</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/special/hit/view1" target="_blank">/mkup/special/hit/view1</a></td>
            <td>RealHitView1.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세2 (목록가기 삭제)</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/special/hit/view2" target="_blank">/mkup/special/hit/view2</a></td>
            <td>RealHitView2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세3 (Full Page)</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/main/hitview3" target="_blank">/mkup/main/hitview3</a></td>
            <td>RealHitView3.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세4 (import 방식 - 권구현 선생님)</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/special/hit/view4" target="_blank">/mkup/special/hit/view4</a></td>
            <td>RealHitView4.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세5 (import 방식 - 미술 위상팀)</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/special/hit/view5" target="_blank">/mkup/special/hit/view5</a></td>
            <td>RealHitView5.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세5 (import 방식 - 김성무 선생님)</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/special/hit/view6" target="_blank">/mkup/special/hit/view6</a></td>
            <td>RealHitView6.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세5 (import 방식 - 이진영 선생님)</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/special/hit/view7" target="_blank">/mkup/special/hit/view7</a></td>
            <td>RealHitView7.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세5 (import 방식 - 임수진 선생님)</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/special/hit/view8" target="_blank">/mkup/special/hit/view8</a></td>
            <td>RealHitView8.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>선생님 인터뷰</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/special/interview" target="_blank">/mkup/special/interview</a></td>
            <td>Interview.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>수강후기</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/special/review" target="_blank">/mkup/special/review</a></td>
            <td>Review.vue</td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10" class="title">무료강의(openlec)</th>
          </tr>
          <tr>
            <th></th>
            <td rowspan="3">메인: root</td>
            <td>분기</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/openlec/index" target="_blank">/mkup/openlec/index</a></td>
            <td>Index.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>PC 본창</td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">PC</td>
            <td></td>
            <td>IndexMainPc.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>Mobile 본창</td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">M</td>
            <td></td>
            <td>IndexMainM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>강의 하이라이트</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/openlec/highlight" target="_blank">/mkup/openlec/highlight</a></td>
            <td>HighLight.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>기출해설</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/openlec/comment" target="_blank">/mkup/openlec/comment</a></td>
            <td>Comment.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>설명회</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/openlec/presentation" target="_blank">/mkup/openlec/presentation</a></td>
            <td>Presentation.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>무료특강</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/openlec/freeLec" target="_blank">/mkup/openlec/freeLec</a></td>
            <td>FreeLec.vue</td>
            <td><strong class="red">2021-12-09</strong></td>
          </tr>
          <tr>
            <th colspan="10" class="title">시험정보(exam)</th>
          </tr>
          <tr>
            <th></th>
            <td rowspan="8">시험정보</td>
            <td>임용시험 안내</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/exam/info/guide" target="_blank">/mkup/exam/info/guide</a></td>
            <td>InfoGuide.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="3">모집인원 및 경쟁률</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/exam/info/competition" target="_blank">/mkup/exam/info/competition</a></td>
            <td>InfoCompetition.vue</td>
            <td><strong class="red">2021-11-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>관련 그래프</td>
            <td>모집인원<br/>지원인원<br/>경쟁률<br/>최종합격선</td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>InfoGraphRecruitment.vue<br/>InfoGraphApplicants.vue<br/>InfoGraphCompete.vue<br/>InfoGraphPass.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>유초등<br/>중등</td>
            <td></td>
            <td></td>
            <td class="tC">공통<br/>공통</td>
            <td></td>
            <td>InfoCompetitionChild.vue<br/>InfoCompetitionMedium.vue</td>
            <td><strong class="red">2021-11-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">시험공고</td>
            <td>목록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/exam/info/notify" target="_blank">/mkup/exam/info/notify</a></td>
            <td>InfoNotify.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/exam/info/notify/view" target="_blank">/mkup/exam/info/notify/view</a></td>
            <td>InfoNotifyView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">교육계 소식</td>
            <td>목록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/exam/info/news" target="_blank">/mkup/exam/info/news</a></td>
            <td>InfoNews.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/exam/info/news/view" target="_blank">/mkup/exam/info/news/view</a></td>
            <td>InfoNewsView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="15">임용 자료실</td>
            <td rowspan="2">기출문제</td>
            <td>목록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/exam/reference/previous" target="_blank">/mkup/exam/reference/previous</a></td>
            <td>ReferencePrevious.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/exam/reference/previous/view" target="_blank">/mkup/exam/reference/previous/view</a></td>
            <td>ReferencePreviousView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="8">교육과정 자료실</td>
            <td>:root</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/exam/reference/edu" target="_blank">/mkup/exam/reference/edu</a></td>
            <td>ReferenceEdu.vue</td>
            <td><strong class="red">2021-12-20</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>교육학 Tab</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>ReferenceEduBasic.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>유아·초등 Tab</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>ReferenceEduChild.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>중등 Tab</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>ReferenceEduMiddle.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>중등(사회/과학) Tab</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>ReferenceEduSocial.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>보건·특수 Tab</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>ReferenceEduHealth.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>논술·면접 Tab</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>ReferenceEduEssay.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/exam/reference/edu/view" target="_blank">/mkup/exam/reference/edu/view</a></td>
            <td>ReferenceEduView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="5">수험 자료실</td>
            <td>:root</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/exam/reference/taker" target="_blank">/mkup/exam/reference/taker</a></td>
            <td>ReferenceTaker.vue</td>
            <td></td>
          </tr>
          <!-- <tr>
            <th></th>
            <td>:root(내전공)</td>
            <td></td>
            <td><a href="/mkup/exam/reference/taker2" target="_blank">/mkup/exam/reference/taker2</a></td>
            <td>ReferenceTaker2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>전체 Tab</td>
            <td></td>
            <td></td>
            <td>ReferenceTakerTotal.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>내전공 Tab</td>
            <td></td>
            <td></td>
            <td>ReferenceTakerMy.vue</td>
            <td></td>
          </tr> -->
          <tr>
            <th></th>
            <td>전체 Tab</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>ReferenceTakerTotal.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>1차 Tab 목록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>ReferenceTakerFirst.vue</td>
            <td><strong class="red">2021-12-20</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>2차 Tab 목록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>ReferenceTakerSecond.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/exam/Reference/taker/view" target="_blank">/mkup/exam/Reference/taker/view</a></td>
            <td>ReferenceTakerView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">임용 칼럼</td>
            <td>목록</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/exam/column" target="_blank">/mkup/exam/column</a></td>
            <td>Column.vue</td>
            <td><strong class="new">2021-12-09</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/exam/column/view" target="_blank">/mkup/exam/column/view</a></td>
            <td>ColumnView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10" class="title">합격수기(pass)</th>
          </tr>
          <tr>
            <th></th>
            <td>메인: root</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/pass/index" target="_blank">/mkup/pass/index</a></td>
            <td>Index.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>서브포함 공통</td>
            <td></td>
            <td></td>
            <td>대표 합격수기</td>
            <td class="tC">포함</td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>IndexMsgPc.vue<br/>IndexMsgM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="4">선생님 합격수기/인터뷰</td>
            <td rowspan="3">선생님 별 Tab</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/pass/interview" target="_blank">/mkup/pass/interview</a></td>
            <td>PassInterview.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td>영상 인터뷰 Tab</td>
            <td class="tC">포함</td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>PassInterviewVideo.vue<br/>PassInterviewVideoM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td>합격수기 Tab</td>
            <td class="tC">포함</td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>PassReview.vue<br/>PassReviewM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>합격수기작성</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/pass/review/write" target="_blank">/mkup/pass/review/write</a></td>
            <td>PassReviewWrite.vue</td>
            <td><strong class="red">2021-11-18</strong></td>
          </tr>
          <tr>
            <th colspan="10" class="title">인사이드희소(inside)</th>
          </tr>
          <tr>
            <th></th>
            <td rowspan="5">메인: root</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/inside/index" target="_blank">/mkup/inside/index</a></td>
            <td>Index.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>소개 Tab</td>
            <td></td>
            <td>가이드>합격자</td>
            <td class="tC"></td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>SuccessfulSwiperPc.vue<br/>SuccessfulSwiperM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>장학제도 Tab</td>
            <td></td>
            <td>배너</td>
            <td class="tC"></td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>ScholarshipKindPc.vue<br/>ScholarshipKindM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">대학제휴 Tab</td>
            <td></td>
            <td>프로그램</td>
            <td class="tC"></td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>universityProgramPc.vue<br/>universityProgramM.vue<</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td>설명회&amp;특강</td>
            <td class="tC"></td>
            <td class="tC">PC <br/> M</td>
            <td></td>
            <td>universityOpenPc.vue<br/>universityOpenM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10" class="title">희소고시학원(academy)</th>
          </tr>
          <tr>
            <th></th>
            <td rowspan="4">메인: root</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/academy/index" target="_blank">/mkup/academy/index</a></td>
            <td>Index.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>강의실 배정표 Tab</td>
            <td></td>
            <td>이데아관<br/>아이비관</td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>ClassScheduleIdea.vue<br/>ClassScheduleIvy.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>학원 시설 Tab</td>
            <td></td>
            <td>이데아관<br/>아이비관</td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>DirectPanoramaIdea.vue<br/>DirectPanoramaIvy.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>학원 위치 Tab</td>
            <td></td>
            <td>이데아관<br/>아이비관</td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>DirectLocationIdea.vue<br/>DirectLocationIvy.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="5">스터디 하실래요</td>
            <td>목록</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/academy/study" target="_blank">/mkup/academy/study</a></td>
            <td>AcademyStudy.vue</td>
            <td><strong class="new">2021-12-09</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>신규등록</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/academy/study/write" target="_blank">/mkup/academy/study/write</a></td>
            <td>AcademyStudyWrite.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/academy/study/view" target="_blank">/mkup/academy/study/view</a></td>
            <td>AcademyStudyView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세 (내가등록)</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/academy/study/view2" target="_blank">/mkup/academy/study/view2</a></td>
            <td>AcademyStudyView2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>수정</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/academy/study/modify" target="_blank">/mkup/academy/study/modify</a></td>
            <td>AcademyStudyModify.vue</td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10" class="title">내 강의실(mylec)</th>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">온라인 / 오프라인<br/>수강생 ZONE 공통</td>
            <td>관련 팝업</td>
            <td></td>
            <td>홀딩 신청<br/>기간연장 신청<br/>재수강 신청<br/>보너스 강의 신청<br/>교재신청<br/>첨삭게시판<br/>강의자료<br/>수강후기
            </td>
            <td class="tC">O<br/>O<br/>O<br/>O<br/>O<br/>O<br/>O<br/>O</td>
            <td class="tC">공통<br/>공통<br/>공통<br/>공통<br/>공통<br/>공통<br/>공통<br/>공통</td>
            <td></td>
            <td>PopupReAddHolding.vue<br/>PopupReAddRequest.vue<br/>PopupReAddRetake.vue<br/>PopupBonusApply.vue<br/>PopupBookApply.vue<br/>PopupBoardApply.vue<br/>PopuplecDataBbsApply.vue<br/>PopupReviewWrite.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>관련 본창 데이터</td>
            <td></td>
            <td>강의자료 Tab<br/>학습 Q&amp;A Tab<br/>선생님공지 Tab<br/>첨삭게시판 Tab</td>
            <td class="tC">포함<br/>포함<br/>포함<br/>포함</td>
            <td class="tC">공통<br/>공통<br/>공통<br/>공통</td>
            <td></td>
            <td>PlayerLectureData.vue<br/>PlayerQnA.vue<br/>PlayerNotice.vue<br/>PlayerBoard.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="4">온라인 수강생 ZONE</td>
            <td rowspan="3">수강 강좌 관리</td>
            <td>목록</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/online/my" target="_blank">/mkup/mylec/online/my</a></td>
            <td>OnlineLecture.vue</td>
            <td><strong class="red">2022-01-27</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">상세</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/online/my/player" target="_blank">/mkup/mylec/online/my/player</a></td>
            <td>OnlinePlayer.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>강의목록&amp;북마크<br/>강의목록<br/>북마크<br/>집중모드 강의목록&amp;북마크</td>
            <td class="tC"></td>
            <td class="tC">PC<br/>공통<br/>공통<br/>공통</td>
            <td></td>
            <td>PlayerListArea.vue<br/>PlayerList.vue<br/>PlayerBookmark.vue<br/>PlayerListArea2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>업데이트 일정</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/online/update" target="_blank">/mkup/mylec/online/update</a></td>
            <td>OnlineUpdate.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="8">학원 수강생 ZONE</td>
            <td rowspan="2">학원 강좌 관리</td>
            <td rowspan="2"></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/direct/my" target="_blank">/mkup/mylec/direct/my</a></td>
            <td>DirectLecture.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>보충강의 신청</td>
            <td class="tC">O</td>
            <td class="tC">공통</td>
            <td></td>
            <td>PopupAdditionApply.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="5">라이브 강좌 관리</td>
            <td>목록</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/direct/live" target="_blank">/mkup/mylec/direct/live</a></td>
            <td>DirectLive.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">상세 (챗팅이 있는 경우)</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/direct/live/player" target="_blank">/mkup/mylec/direct/live/player</a></td>
            <td>LivePlayer.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>챗팅</td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>LivePlayerChat.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">상세 (챗팅이 없는 경우)</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/direct/live/player2" target="_blank">/mkup/mylec/direct/live/player2</a></td>
            <td>LivePlayer2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>챗팅없음 안내</td>
            <td class="tC"></td>
            <td class="tC">PC</td>
            <td></td>
            <td>LivePlayerChat2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>보충강의실</td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/direct/addition" target="_blank">/mkup/mylec/direct/addition</a></td>
            <td>DirectAddition.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="8">학습관리 ZONE</td>
            <td rowspan="5">나의 학습현황</td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/study/my" target="_blank">/mkup/mylec/study/my</a></td>
            <td>StudyMyStatus.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>관련 본창 데이터</td>
            <td>캘린더 Tab<br/>그래프 Tab</td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>StudyMyStatusCalender.vue<br/>StudyMyStatusGraph.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="3">관련 팝업</td>
            <td>학습비교</td>
            <td class="tC">O</td>
            <td class="tC">공통</td>
            <td></td>
            <td>StudyMyGraphPop.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>수강 강의 수(시간) 통계 (월간)<br/>수강 강의 수(시간) 통계 (연간)<br/>자율공부 시간 집계 (월간)<br/>자율공부 시간 집계 (연간)<br/>
            </td>
            <td class="tC"><br/><br/><br/><br/></td>
            <td class="tC">PC<br/>PC<br/>PC<br/>PC</td>
            <td></td>
            <td>StudyMyGraphCase11.vue<br/>StudyMyGraphCase12.vue<br/>StudyMyGraphCase21.vue<br/>StudyMyGraphCase22.vue<br/></td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>수강 강의 수(시간) 통계 (월간)<br/>수강 강의 수(시간) 통계 (연간)<br/>자율공부 시간 집계 (월간)<br/>자율공부 시간 집계 (연간)<br/>
            </td>
            <td class="tC"><br/><br/><br/><br/></td>
            <td class="tC">M<br/>M<br/>M<br/>M</td>
            <td></td>
            <td>StudyMyGraphCaseM11.vue<br/>StudyMyGraphCaseM12.vue<br/>StudyMyGraphCaseM21.vue<br/>StudyMyGraphCaseM22.vue<br/></td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="3">학습 Q&amp;A</td>
            <td>목록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/study/qna" target="_blank">/mkup/mylec/study/qna</a></td>
            <td>StudyQna.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세 (대기중)</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/study/qna/view" target="_blank">/mkup/mylec/study/qna/view</a></td>
            <td>StudyQnaView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세 (답변완료)</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/study/qna/view2" target="_blank">/mkup/mylec/study/qna/view2</a></td>
            <td>StudyQnaView2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="9">프리미엄 ZONE</td>
            <td rowspan="4">프리미엄 쌤팩</td>
            <td rowspan="4"></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/premium/ssampack" target="_blank">/mkup/mylec/premium/ssampack</a></td>
            <td>PremiumSsampack.vue</td>
            <td><strong class="red">2021-11-18</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>신청 전 본창 데이터</td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>PremiumSsampackIntro.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>신청 후 본창 데이터 (쌤별 Tab)</td>
            <td class="tC"></td>
            <td class="tC">공통<br/>공통</td>
            <td></td>
            <td>PremiumSsampackLec01.vue<br/>PremiumSsampackLec02.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>직/인강 전환(인강>직강)<br/>직/인강 전환(직강>인강)</td>
            <td class="tC">O<br/>O</td>
            <td class="tC">공통<br/>공통</td>
            <td></td>
            <td>PopupChangeLec.vue<br/>PopupChangeLec2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="5">프리미엄 회원상담</td>
            <td>목록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/premium/counsel" target="_blank">/mkup/mylec/premium/counsel</a></td>
            <td>PremiumCounsel.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>등록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/premium/counsel/write" target="_blank">/mkup/mylec/premium/counsel/write</a></td>
            <td>PremiumCounselWrite.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세 (대기중)</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/premium/counsel/view/wait" target="_blank">/mkup/mylec/premium/counsel/view/wait</a></td>
            <td>PremiumCounselViewWait.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세 (답변완료)</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/premium/counsel/view/complete" target="_blank">/mkup/mylec/premium/counsel/view/complete</a></td>
            <td>PremiumCounselViewComplete.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>수정</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/premium/counsel/modify" target="_blank">/mkup/mylec/premium/counsel/modify</a></td>
            <td>PremiumCounselModify.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="7">모의고사 ZONE</td>
            <td>관련 공통팝업</td>
            <td></td>
            <td>자가 채점 입력<br/>시험응시<br/>시험응시 일정안내<br/><br/>시험성적표</td>
            <td class="tC">O<br/>O<br/>O<br/>O<br/>O<br/></td>
            <td class="tC">공통<br/>공통<br/>PC<br/>M<br/>공통</td>
            <td></td>
            <td>MorkExamSelfResult.vue<br/>MorkExamPaper.vue<br/>MockTestSchedule.vue<br/>MockTestScheduleM.vue<br/>MorkExamResult.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="3">응시 모의고사 관리</td>
            <td>목록</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/mock/stare" target="_blank">/mkup/mylec/mock/stare</a></td>
            <td>MockStare.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/mock/stare/view" target="_blank">/mkup/mylec/mock/stare/view</a></td>
            <td>MockStareView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td>공지사항 Tab</td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td></td>
            <td>MockNotice.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="3">모의고사 성적/해설</td>
            <td>목록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/mock/explain" target="_blank">/mkup/mylec/mock/explain</a></td>
            <td>MockExplain.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/mock/explain/view" target="_blank">/mkup/mylec/mock/explain/view</a></td>
            <td>MockExplainView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>해설강의 수강</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mylec/mock/explain/view/player" target="_blank">/mkup/mylec/mock/explain/view/player</a></td>
            <td>MockExplainViewPlayer.vue</td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10" class="title">마이페이지(mypage)</th>
          </tr>
          <tr>
            <th></th>
            <td rowspan="10">결제</td>
            <td>결제내역</td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/payment/history" target="_blank">/mkup/mypage/payment/history</a></td>
            <td>PaymentHistory.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>주문배송</td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/payment/delivery" target="_blank">/mkup/mypage/payment/delivery</a></td>
            <td>PaymentOrderDelivery.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="4">장바구니</td>
            <td>목록</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/payment/basket" target="_blank">/mkup/mypage/payment/basket</a></td>
            <td>PaymentBasket.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">주문결제</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/payment/order" target="_blank">/mkup/mypage/payment/order</a></td>
            <td>PaymentOrder.vue</td>
            <td><strong class="red">2022-01-19</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>카드결제 무이자정보</td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>PayCardKind.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>결제완료</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/payment/finish" target="_blank">/mkup/mypage/payment/finish</a></td>
            <td>PaymentFinish.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">사물함 신청</td>
            <td>목록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/payment/locker" target="_blank">/mkup/mypage/payment/locker</a></td>
            <td>PaymentLocker.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>신청</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/payment/locker/write" target="_blank">/mkup/mypage/payment/locker/write</a></td>
            <td>PaymentLockerWrite.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>쿠폰</td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/payment/coupon" target="_blank">/mkup/mypage/payment/coupon</a></td>
            <td>PaymentCoupon.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>관련 팝업</td>
            <td></td>
            <td>
              배송추적<br/>도서 소득공제 안내<br/>수강시작일 안내<br/>환불규정 및 안내사항<br/>쿠폰선택
            </td>
            <td class="tC">O</td>
            <td class="tC">공통</td>
            <td></td>
            <td>
              PaymentDeliveryTracking.vue<br/>
              OrderNoitceDeduction.vue<br/>
              OrderNoitceStartdate.vue<br/>
              OrderNoitceRefund.vue<br/>
              PaymentOrderCoupon.vue
            </td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="8">상담</td>
            <td rowspan="5">1:1 게시판 상담</td>
            <td>목록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/counsel/bbs" target="_blank">/mkup/mypage/counsel/bbs</a></td>
            <td>CounselBbs.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>등록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/counsel/bbs/write" target="_blank">/mkup/mypage/counsel/bbs/write</a></td>
            <td>CounselBbsWrite.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세 - 대기</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/counsel/bbs/view/wait" target="_blank">/mkup/mypage/counsel/bbs/view/wait</a></td>
            <td>CounselBbsViewWait.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세 - 완료</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/counsel/bbs/view/complete" target="_blank">/mkup/mypage/counsel/bbs/view/complete</a></td>
            <td>CounselBbsViewComplete.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>수정</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/counsel/bbs/modify" target="_blank">/mkup/mypage/counsel/bbs/modify</a></td>
            <td>CounselBbsModify.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="3">1:1 상담 예약</td>
            <td>목록</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/counsel/reserve" target="_blank">/mkup/mypage/counsel/reserve</a></td>
            <td>CounselReserve.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">예약 신청</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/counsel/reserve/write" target="_blank">/mkup/mypage/counsel/reserve/write</a></td>
            <td>CounselReserveWrite.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>학원 상담<br/>선생님 상담</td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>counselReserveDirect.vue<br/>counselReserveTeacher.vue	</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="3">후기작성</td>
            <td>목록</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/myreview" target="_blank">/mkup/mypage/myreview</a></td>
            <td>MyReview.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>글쓰기</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/myreview/write" target="_blank">/mkup/mypage/myreview/write</a></td>
            <td>MyReviewWrite.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/myreview/view" target="_blank">/mkup/mypage/myreview/view</a></td>
            <td>MyReviewView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="4">회원정보</td>
            <td rowspan="2">내 정보 확인/수정</td>
            <td>비밀번호 확인</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/myinfo/pw" target="_blank">/mkup/mypage/myinfo/pw</a></td>
            <td>MyInfoPw.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>내 정보</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/myinfo/modify" target="_blank">/mkup/mypage/myinfo/modify</a></td>
            <td>MyInfoModify.vue</td>
            <td><strong class="red">2021-11-09</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>전공모드 관리</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/myinfo/mode" target="_blank">/mkup/mypage/myinfo/mode</a></td>
            <td>MyInfoMode.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>배송지 정보</td>
            <td></td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/mypage/myinfo/address" target="_blank">/mkup/mypage/myinfo/address</a></td>
            <td>MyInfoAddress.vue</td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10" class="title">공지사항, 이벤트(bbs)</th>
          </tr>
          <tr>
            <th></th>
            <td rowspan="7">공지사항</td>
            <td rowspan="3">목록</td>
            <td>일반</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/bbs/notice" target="_blank">/mkup/bbs/notice</a></td>
            <td>Notice.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>전공</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/bbs/noticemy" target="_blank">/mkup/bbs/noticemy</a></td>
            <td>NoticeMy.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>검색</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/bbs/notice/searach" target="_blank">/mkup/bbs/notice/searach</a></td>
            <td>NoticeSearach.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="4">상세</td>
            <td>공지</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/bbs/notice/view" target="_blank">/mkup/bbs/notice/view</a></td>
            <td>NoticeView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>일반</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/bbs/notice/view2" target="_blank">/mkup/bbs/notice/view2</a></td>
            <td>NoticeView2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>전공 공지</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/bbs/notice/view3" target="_blank">/mkup/bbs/notice/view3</a></td>
            <td>NoticeView3.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>전공 일반</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/bbs/notice/view4" target="_blank">/mkup/bbs/notice/view4</a></td>
            <td>NoticeView4.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="13">이벤트</td>
            <td>:root</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/bbs/event" target="_blank">/mkup/bbs/event</a></td>
            <td>Event.vue</td>
            <td><strong class="new">2021-12-09</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="4">진행중인 이벤트 Tab</td>
            <td>목록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>EventIng.vue</td>
            <td><strong class="new">2021-12-09</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>상세1 (에디터입력)</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/bbs/event/ing" target="_blank">/mkup/bbs/event/ing</a></td>
            <td>EventIngView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세2 (목록가기 삭제)</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/bbs/event/ing2" target="_blank">/mkup/bbs/event/ing2</a></td>
            <td>EventIngView2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세3 (Full Page)</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/main/eventview4" target="_blank">/mkup/main/eventview4</a></td>
            <td>EventIngView3.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">지난 이벤트 Tab</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>EventPast.vue</td>
            <td><strong class="new">2021-12-09</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/bbs/event/past" target="_blank">/mkup/bbs/event/past</a></td>
            <td>EventIngPastView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">당첨자 발표 Tab</td>
            <td>목록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>EventWinner.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/bbs/event/winner" target="_blank">/mkup/bbs/event/winner</a></td>
            <td>EventWinnerView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="4">검색결과</td>
            <td>:root</td>
            <td class="tC"></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/bbs/event/search" target="_blank">/mkup/bbs/event/search</a></td>
            <td>EventSearch.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>진행중인 이벤트 Tab</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>EventIngSearch.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>지난 이벤트 Tab</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>EventPastSearch.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>당첨자 발표 Tab</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>EventWinnerSearch.vue</td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10" class="title">상담센터(counsel)</th>
          </tr>
          <tr>
            <th></th>
            <td>메인</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/index" target="_blank">/mkup/counsel/index</a></td>
            <td>Index.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="9">자주 하는 질문</td>
            <td>:root</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/faq" target="_blank">/mkup/counsel/faq</a></td>
            <td>Faq.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>초시생 Tab</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>FaqFirst.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>강의수강/신청 Tab</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>FaqLecture.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>교재주문/배송 Tab</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>FaqBook.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>결제/환불 Tab</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>FaqPayment.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>사이트이용/오류 Tab</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>FaqError.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>모바일 Tab</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>FaqMobile.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>검색결과</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/faq/search" target="_blank">/mkup/counsel/faq/search</a></td>
            <td>FaqSearchResult.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/faq/view" target="_blank">/mkup/counsel/faq/view</a></td>
            <td>FaqView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="4">사이트 이용가이드</td>
            <td>:root</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/guide" target="_blank">/mkup/counsel/guide</a></td>
            <td>Guide.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>강좌수강 Tab</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>GuideLecture.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>결제/배송 Tab</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>GuidePayment.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>모바일 Tab</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>GuideMobile.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>1:1 게시판상담</td>
            <td>신규등록</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/bbswrite" target="_blank">/mkup/counsel/bbswrite</a></td>
            <td>BbsWrite.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">1:1 상담예약</td>
            <td rowspan="2">신규등록</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/reserve" target="_blank">/mkup/counsel/reserve</a></td>
            <td>Reserve.vue</td>
            <td><strong class="red">2021-11-05</strong></td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td>학원 상담<br/>선생님 상담</td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td>(myPage)</td>
            <td>counselReserveDirect.vue<br/>counselReserveTeacher.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="4">쌤Plus 클린존</td>
            <td>ID 공유금지 안내</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/clean/idshare" target="_blank">/mkup/counsel/clean/idshare</a></td>
            <td>CleanIDShare.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>불법공유 신고</td>
            <td>신규등록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/clean/report" target="_blank">/mkup/counsel/clean/report</a></td>
            <td>CleanReport.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">불법공유자 명단</td>
            <td>목록</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/clean/illegal" target="_blank">/mkup/counsel/clean/illegal</a></td>
            <td>CleanIllegalShare.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/clean/illegal/view" target="_blank">/mkup/counsel/clean/illegal/view</a></td>
            <td>CleanIllegalShareView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>필수 프로그램 설치</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/programInstall" target="_blank">/mkup/counsel/programInstall</a></td>
            <td>ProgramInstall.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>원격고객 지원</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/remote" target="_blank">/mkup/counsel/remote</a></td>
            <td>Remote.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">상담센터 공지</td>
            <td>목록</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/center" target="_blank">/mkup/counsel/center</a></td>
            <td>CenterNotice.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>상세</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/center/view" target="_blank">/mkup/counsel/center/view</a></td>
            <td>CenterNoticeView.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="3">학원위치 안내</td>
            <td>:root</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/counsel/direct" target="_blank">/mkup/counsel/direct</a></td>
            <td>DirectLocation.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>서울 이데아관 Tab</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>DirectLocationIdea.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>서울 아이비관 Tab</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>DirectLocationIvy.vue</td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10" class="title">스마트 수강신청(smart)</th>
          </tr>
          <tr>
            <th></th>
            <td rowspan="23">스마트 수강신청</td>
            <td>분기</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/smart" target="_blank">/mkup/smart</a></td>
            <td>Index.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>PC 본창</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">PC</td>
            <td></td>
            <td>IntroPc.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="10"></td>
            <td rowspan="2">과목,선생님 Tab</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">PC</td>
            <td></td>
            <td>SmartSubject.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>과목 별 쌤 목록</td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>SmartSubjectKindList.vue</td>
            <td><strong class="red">2022-01-12</strong></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="7">강좌 Tab</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">PC</td>
            <td></td>
            <td>SmartLecture.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>온라인강의 Tab</td>
            <td class="tC">포함</td>
            <td class="tC">PC</td>
            <td></td>
            <td>SmartLectureOnline.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>온라인강의 패키지 기본정보<br/>온라인강의 패키지 추가정보<br/>온라인강의 단과 기본정보<br/>온라인강의 단과 추가정보</td>
            <td class="tC">O<br/>O<br/>O<br/>O</td>
            <td class="tC">PC<br/>PC<br/>PC<br/>PC</td>
            <td></td>
            <td>SmartLectureOnlineView.vue<br/>SmartLectureOnlineSummery.vue<br/>SmartLectureOnlineView2.vue<br/>SmartLectureOnlineSummery2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>학원강의 Tab</td>
            <td class="tC">포함</td>
            <td class="tC">PC</td>
            <td></td>
            <td>SmartLectureSeoul.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>학원강의 패키지 기본정보<br/>학원강의 패키지 추가정보<br/>학원강의 단과 기본정보<br/>학원강의 단과 추가정보</td>
            <td class="tC">O<br/>O<br/>O<br/>O</td>
            <td class="tC">PC<br/>PC<br/>PC<br/>PC</td>
            <td></td>
            <td>SmartLectureSeoulView.vue<br/>SmartLectureSeoulSummery.vue<br/>SmartLectureSeoulView2.vue<br/>SmartLectureSeoulSummery2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>라이브강의 Tab</td>
            <td class="tC">포함</td>
            <td class="tC">PC</td>
            <td></td>
            <td>SmartLectureLive.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>라이브강의 패키지 기본정보<br/>라이브강의 패키지 추가정보<br/>라이브강의 단과 기본정보<br/>라이브강의 단과 추가정보</td>
            <td class="tC">O<br/>O<br/>O<br/>O</td>
            <td class="tC">PC<br/>PC<br/>PC<br/>PC</td>
            <td></td>
            <td>SmartLectureLiveView.vue<br/>SmartLectureLiveSummery.vue<br/>SmartLectureLiveView2.vue<br/>SmartLectureLiveSummery2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>Tab 별 summary</td>
            <td>과목, 선생님<br/>강좌<br/>교재</td>
            <td class="tC"></td>
            <td class="tC">PC<br/>PC<br/>PC</td>
            <td></td>
            <td>SmartSubjectChoiced.vue<br/>SmartLectureChoice.vue<br/>SmartBookChoiced.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>Mobile 본창</td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">M</td>
            <td></td>
            <td>IntroM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="8"></td>
            <td>과목,선생님 Tab</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">M</td>
            <td></td>
            <td>SmartSubjectM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="7">강좌 Tab</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">M</td>
            <td></td>
            <td>SmartLectureM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>온라인강의 Tab</td>
            <td class="tC">포함</td>
            <td class="tC">M</td>
            <td></td>
            <td>SmartLectureOnlineM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>온라인강의 패키지 기본정보<br/>온라인강의 단과 기본정보</td>
            <td class="tC">O<br/>O</td>
            <td class="tC">M<br/>M</td>
            <td></td>
            <td>SmartLectureOnlineMView.vue<br/>SmartLectureOnlineMView2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>학원강의 Tab</td>
            <td class="tC">포함</td>
            <td class="tC">M</td>
            <td></td>
            <td>SmartLectureSeoulM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>학원강의 패키지 기본정보<br/>학원강의 단과 기본정보</td>
            <td class="tC">O<br/>O</td>
            <td class="tC">M<br/>M</td>
            <td></td>
            <td>SmartLectureSeoulMView.vue<br/>SmartLectureSeoulMView2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>라이브강의 Tab</td>
            <td class="tC">포함</td>
            <td class="tC">M</td>
            <td></td>
            <td>SmartLectureLiveM.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>라이브강의 패키지 기본정보<br/>라이브강의 단과 기본정보</td>
            <td class="tC">O<br/>O<br/></td>
            <td class="tC">M<br/>M<br/></td>
            <td></td>
            <td>SmartLectureLiveMView.vue<br/>SmartLectureLiveMView2.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="2">관련 본창 데이터</td>
            <td>교재 Tab</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>SmartBook.vue</td>
            <td><strong class="red">2021-12-17</strong></td>
          </tr>
          <tr>
            <th></th>
            <td>수강신청 Tab</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>SmartApply.vue</td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10" class="title">윈도우팝업(windowpop)</th>
          </tr>
          <tr>
            <th></th>
            <td>수강확인증</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td></td>
            <td>LecCompletion.vue</td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10" class="title">이벤트(event)</th>
          </tr>
          <tr>
            <th></th>
            <td>fullEvent</td>
            <td>20211102</td>
            <td>01</td>
            <td></td>
            <td class="tC"></td>
            <td class="tC">공통</td>
            <td><a href="/mkup/fullevent/20211102/01" target="_blank">/mkup/fullevent/20211102/01</a></td>
            <td>Index.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td rowspan="5">realHit</td>
            <td rowspan="5">20211102</td>
            <td>01</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td></td>
            <td>Index.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>02</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td></td>
            <td>Index.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>03</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td></td>
            <td>Index.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>04</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td></td>
            <td>Index.vue</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td>05</td>
            <td></td>
            <td class="tC">포함</td>
            <td class="tC">공통</td>
            <td></td>
            <td>Index.vue</td>
            <td></td>
          </tr>
          <tr>
            <th colspan="10" class="title">설문조사(popupservey)</th>
          </tr>
          <tr>
            <th></th>
            <td>fullEvent</td>
            <td>popupservey</td>
            <td></td>
            <td></td>
            <td class="tC">O</td>
            <td class="tC">공통</td>
            <td><a href="/mkup/windowPopup/popupservey" target="_blank">/mkup/windowPopup/popupservey</a></td>
            <td>popupservey.vue</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h2> 수정 History detail (날짜주석 참조)</h2>
      <ol>
        <li>2021-11-04 / 메인화면 모바일 배너 스타일 변경</li>
        <li>2021-11-05 / 상담센터 > 1:1 게시판 상담 내 클래스 변경</li>
        <li>2021-11-08 / 메인 합격자 CSS 수정 / 선생님스페셜 > 리얼적중 이미지 변경</li>
        <li>2021-11-09 / 회원가입 & 내정보수정 자동완성 변경 (시험, 학교, 학과, 지역)</li>
        <li>2021-11-18 / 합격수기 > 작성하기 모바일용 팝업 추가 / 내 강의실 > 프리미엄쌤팩 > 아침기상 팝업 수정</li>
      </ol>
    </div>
    <!-- //마크업 Worklist -->
    <!-- //////////////////////////////////////////////////////////////// -->
    <!-- 디자인 XD URL -->
    <div class="worklistData designCase" v-if="tab == 2">
      <table class="table">
        <thead>
          <tr>
              <th width="170">1depth</th>
              <th width="170">2depth</th>
              <th width="170">3depth</th>
              <th width="150">XD - PC</th>
              <th width="150">XD - Mobile</th>
              <th width="80">PSD - PC</th>
              <th width="80">PSD - Mobile</th>
              <th width="*">Descration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowspan="2">00. 메인</th>
            <td>메인</td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/f26d2a0a-4c0b-47c5-9c05-c178aae20d91-a73e/" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/8b904f47-37fb-4129-be6c-9b06db1fa51e-dec3/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>인트로</td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/ac43a8de-97c9-4716-ae7b-1bd46ed69b9e-f910/" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/d7b9be8d-0192-4c4b-8e3e-66fb3296b089-82ea/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th rowspan="12">01. TOP</th>
            <td>로그인</td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/1ff70cea-1c7e-481f-881e-c326b43c1c9d-4aa4/" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/24cfc40c-c215-4968-8e9f-51f46222dc28-719c/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>마이페이지</td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/d515a52a-e9ed-47e0-b6a5-e8cfb5c57b77-8046/" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/94fc9fac-4d6d-4761-b83a-0232fb7d237d-c1af/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>공지사항</td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/0cc11d63-749d-46a2-b881-b7c1e16269dc-5992/" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/e22da502-9dd5-47b4-9496-e6dcad9992ae-b77e/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>공지사항(전공모드)</td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/0cc11d63-749d-46a2-b881-b7c1e16269dc-5992/screen/ae2ecec9-72b3-482c-bf53-fb6d2a6f30f3" target="_blank">바로가기</a></td>
            <td>공지사항에 포함되어 있음</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>이벤트</td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/0cc11d63-749d-46a2-b881-b7c1e16269dc-5992/screen/81af87eb-73fe-4321-8588-b50b2e0289ee/specs/" target="_blank">바로가기</a></td>
            <td>공지사항에 포함되어 있음</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>상담센터</td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/93fcf34e-1290-459d-84e7-f4edc0136880-c6af/" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/9db13030-be3b-420b-b19f-5afb79a0c102-c8e2/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="5">내 강의실</td>
            <td>프리미엄 ZONE</td>
            <td><a href="https://xd.adobe.com/view/7e797eab-a8ff-4d0d-b7ba-b5022ef549b6-2b2a/grid" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/34da6e93-bc82-4dc2-aa76-b9599d0f2c2c-6189/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>학습현황</td>
            <td><a href="https://xd.adobe.com/view/c0a64d54-e9d0-4fcb-a968-153da71a7391-95f5/grid" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/b7da4690-956e-4189-8d4f-4782833ee40d-e289/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>온라인수강생 ZONE</td>
            <td><a href="https://xd.adobe.com/view/8efebfba-bdcb-4622-8330-4ced4851cbdc-dbad/grid" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/b70d486b-e30b-4f0a-89e3-5004dfc016bb-e25e/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>학원수강생 ZONE</td>
            <td><a href="https://xd.adobe.com/view/815dbfd9-7fd0-42d5-9d18-89c5229d913d-d40e/grid" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/29cd9472-6066-4165-9510-76abf957059a-7c9e/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>모의고사</td>
            <td><a href="https://xd.adobe.com/view/4bbf1055-eb4f-482f-8532-058c5ff12710-1eec/grid" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/02ad180d-b386-4e92-a6b0-4337c52f6df8-57fe/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>스마트 수강신청</td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/20172785-a217-405d-bd3e-ddc00a27d728-7544/" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/860900ab-90b8-424c-b89c-e770001e1237-d35a/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>02. 쌤팩</th>
            <td></td>
            <td></td>
            <td>-</td>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th rowspan="2">03. 수강신청</th>
            <td>선생님 별</td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/49f7c41c-9e29-4264-bafb-e5ed7a0c1c4d-1ca4/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/d4e2248f-c717-4a0a-8256-f2239b49da59-81b1/" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/ec614eca-5ca2-4cfc-b93a-825b89c1503d-b932/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>04. 쌤몰</th>
            <td></td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/a8fbdc4d-d6c9-4d65-b7ff-6dbfce6f368b-fda8/" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/2a2ecaff-af08-4b1b-95d0-ce83eba1b923-7f7d/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>05. 선생님스페셜</th>
            <td></td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/a4c855c1-3f25-487a-ba36-eecde3133f25-f19b/" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/45eaa5c9-104e-46ca-85c3-f3a48225646e-10b9/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>06. 무료강의</th>
            <td></td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/d1be5095-e2a8-4177-b0a7-07fb6975bd62-84ed/grid" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/b8b43767-1b0a-452d-86a7-153f950c62e6-ede7/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>07. 시험정보</th>
            <td></td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/9a56be16-c5ec-47a9-a46f-df71ef9e333c-cf05/" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/4e553cfb-e44b-41eb-baf6-aa1d7472e5c9-1b06/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>08. 합격수기</th>
            <td></td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/9442a92d-7dd7-4bf8-a660-39e9511d7fe9-c111/" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/4caf71be-f989-4e6e-a66a-c2f7f815408f-19fc/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>09. 인사이드희소</th>
            <td></td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/2f6458ad-8dde-49e4-a952-0b9915be38cf-7a37/" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/826242f0-6995-4c88-91c9-e8ff0a04414c-d731/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>10. 희소고시학원</th>
            <td></td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/9ae27090-9fa5-4d5f-9ec7-d5cadf6c8f1f-cfb1/" target="_blank">바로가기</a></td>
            <td><a href="https://xd.adobe.com/view/a8402bb1-dcac-4e2c-b9b6-0666cf29ead9-fd13/" target="_blank">바로가기</a></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>11. 과목별 컬러칩</th>
            <td></td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/09187a4a-3e10-474c-999b-2478e59a591f-5c4b/specs/" target="_blank">바로가기</a></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>12. 디자인 가이드</th>
            <td></td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/f47b7e5f-d51d-40a7-8d9c-8a4eeb7ebb7a-a128/" target="_blank">바로가기</a></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>13. 플레이어 디자인 가이드</th>
            <td></td>
            <td></td>
            <td><a href="https://xd.adobe.com/view/66006834-9cc9-4713-9484-a9a547e1e95e-3353/specs/" target="_blank">바로가기</a></td>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //디자인 XD URL -->
    <!-- //////////////////////////////////////////////////////////////// -->
    <!-- 과목, 선생님 별 대표클래스 및 이미지명 정리 -->
    <div class="worklistData ssamCase" v-if="tab == 3">
      <ul>
          <li>@시작하는 이미지는 [ front-end\front\src\assets\images\thumbnail ] 폴더에 포함되어 있으며, 유동 이미지로 인지합니다.<br/>
            단, 메인의 과목 별 배경은 고정으로 경로는 [ front-end\front\src\assets\images\] 입니다.
          </li>
          <li>파일타입 : png (반드시 save for web으로 용량을 줄여서 저장)</li>
      </ul>
      <table class="table">
        <thead>
          <tr>
            <th width="200" colspan="2">강의 진행과목</th>
            <th width="100" rowspan="2">이름</th>
            <th rowspan="2">선생님 별 슬로건</th>
            <th width="100" rowspan="2">대표클래스</th>
            <th rowspan="2">대표이미지</th>
            <th colspan="3">수강신청</th>
            <th colspan="4">메인 선생님 Set</th>
          </tr>
          <tr>
            <th>1 DEPTH</th>
            <th>2 DEPTH</th>
            <th>목록</th>
            <th>선생님홈 메인</th>
            <th>선생님홈 슬로건</th>
            <th>과목 별 원배경</th>
            <th>과목 별 별배경</th>
            <th>선생님 메인</th>
            <th>선생님 목록</th>
          </tr>
        </thead>
        <tbody>
          <!---->
          <tr><th colspan="13" class="title"></th></tr>
          <tr>
            <th rowspan="4">교육학</th><th rowspan="4"></th><td></td><td></td><td>sbjEdu</td><td></td><td></td><td><td></td><td>bg_mainSsam_sbjEdu.png</td><td>bg_mainSsam_sbjEdu_s.png</td><td></td><td></td>
          </tr>
          <tr>
            <td>김현</td><td>키워주기 위한 교육학</td><td></td><td>@tmp_ssam_mjedu01.png</td><td>@tmp_ssamB_mjedu01_thum.png</td><td>@tmp_ssamB_mjedu01.png</td><td>@tmp_ssamB_mjedu01_txt.png</td><td></td><td></td><td>	@tmp_mainSsam_mjedu01.png</td><td>@tmp_mainSsam_mjedu01_thum.png</td>
          </tr>
          <tr>
            <td>권구현</td><td>EBS 교육학 논술 전문가의 적중 강의</td><td></td><td>@tmp_ssam_mjedu02.png</td><td>@tmp_ssamB_mjedu02_thum.png</td><td>@tmp_ssamB_mjedu02.png</td><td>@tmp_ssamB_mjedu02_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjedu02.png</td><td>@tmp_mainSsam_mjedu02_thum.png</td>
          </tr>
          <tr>
            <td>윤중샘</td><td>이해중심! 쉽게 설명하는 교육학!</td><td></td><td>@tmp_ssam_mjedu03.png</td><td>@tmp_ssamB_mjedu03_thum.png</td><td>@tmp_ssamB_mjedu03.png</td><td>@tmp_ssamB_mjedu03_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjedu03.png</td><td>@tmp_mainSsam_mjedu03_thum.png</td>
          </tr>
          <!---->
          <tr><th colspan="13" class="title"></th></tr>
          <tr>
            <th rowspan="4">유아</th><th rowspan="4"></th><td></td><td></td><td>sbjChild</td><td></td><td></td><td><td></td><td>bg_mainSsam_sbjChild.png</td><td>bg_mainSsam_sbjChild_s.png</td><td></td><td></td>
          </tr>
          <tr>
            <td>배지윤</td><td>결과가 다른 시작, 기대한다면 합격예감</td><td></td><td>@tmp_ssam_mjchild01.png</td><td>@tmp_ssamB_mjchild01_thum.png</td><td>@tmp_ssamB_mjchild01.png</td><td>@tmp_ssamB_mjchild01_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjchild01.png</td><td>@tmp_mainSsam_mjchild01_thum.png</td>
          </tr>
          <tr>
            <td>이동건</td><td>핵심 콕! 이해 쏙!</td><td></td><td>@tmp_ssam_mjchild02.png</td><td>@tmp_ssamB_mjchild02_thum.png</td><td>@tmp_ssamB_mjchild02.png</td><td>@tmp_ssamB_mjchild02_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjchild02.png</td><td>@tmp_mainSsam_mjchild02_thum.png</td>
          </tr>
          <tr>
            <td>양재웅</td><td>20년 현장 경험과 완벽한 분석을 통한 실전 강의</td><td></td><td>@tmp_ssam_mjchild03.png</td><td>@tmp_ssamB_mjchild03_thum.png</td><td>@tmp_ssamB_mjchild03.png</td><td>@tmp_ssamB_mjchild03_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjchild03.png</td><td>@tmp_mainSsam_mjchild03_thum.png</td>
          </tr>
          <!---->
          <tr><th colspan="13" class="title"></th></tr>
          <tr>
            <th rowspan="34">중등<br/>(mjmiddle)</th><th rowspan="5">국어</th><td></td><td></td><td>sbjKo</td><td></td><td></td><td><td></td><td>bg_mainSsam_sbjKo.png</td><td>bg_mainSsam_sbjKo_s.png</td><td></td><td></td>
          </tr>
          <tr>
            <td>송헌/김준팀</td><td>박사와 교사가 만났다.</td><td></td><td>@tmp_ssam_mjmiddle_Ko01.png</td><td>@tmp_ssamB_mjmiddle_Ko01_thum.png</td><td>@tmp_ssamB_mjmiddle_Ko01.png</td><td>@tmp_ssamB_mjmiddle_Ko01_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Ko01.png</td><td>@tmp_mainSsam_mjmiddle_Ko01_thum.png</td>
          </tr>
          <tr>
            <td>송헌</td><td>출제자의 눈으로 국어의 핵심을 찌르다!</td><td></td><td>@tmp_ssam_mjmiddle_Ko02.png</td><td>@tmp_ssamB_mjmiddle_Ko02_thum.png</td><td>@tmp_ssamB_mjmiddle_Ko02.png</td><td>@tmp_ssamB_mjmiddle_Ko02_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Ko02.png</td><td>@tmp_mainSsam_mjmiddle_Ko02_thum.png</td>
          </tr>
          <tr>
            <td>김준</td><td>문법을 관통하는 시원하고 거침없는 질주</td><td></td><td>@tmp_ssam_mjmiddle_Ko03.png</td><td>@tmp_ssamB_mjmiddle_Ko03_thum.png</td><td>@tmp_ssamB_mjmiddle_Ko03.png</td><td>@tmp_ssamB_mjmiddle_Ko03_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Ko03.png</td><td>@tmp_mainSsam_mjmiddle_Ko03_thum.png</td>
          </tr>
          <tr>
            <td>박노송</td><td>전공국어 神의 한수</td><td></td><td>@tmp_ssam_mjmiddle_Ko04.png</td><td>@tmp_ssamB_mjmiddle_Ko04_thum.png</td><td>@tmp_ssamB_mjmiddle_Ko04.png</td><td>@tmp_ssamB_mjmiddle_Ko04_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Ko04.png</td><td>@tmp_mainSsam_mjmiddle_Ko04_thum.png</td>
          </tr>
          <tr>
            <th rowspan="5">영어</th><td></td><td></td><td>sbjEn</td><td></td><td></td><td><td></td><td>bg_mainSsam_sbjEn.png</td><td>bg_mainSsam_sbjEn_s.png</td><td></td><td></td>
          </tr>
          <tr>
            <td>차류쉘팀</td><td>누구도 따라올 수 없는 전공영어의 막강파워</td><td></td><td>@tmp_ssam_mjmiddle_En01.png</td><td>@tmp_ssamB_mjmiddle_En01_thum.png</td><td>@tmp_ssamB_mjmiddle_En01.png</td><td>@tmp_ssamB_mjmiddle_En01_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_En01.png</td><td>@tmp_mainSsam_mjmiddle_En01_thum.png</td>
          </tr>
          <tr>
            <td>차미아</td><td>전공영어의 막강파워!</td><td></td><td>@tmp_ssam_mjmiddle_En02.png</td><td>@tmp_ssamB_mjmiddle_En02_thum.png</td><td>@tmp_ssamB_mjmiddle_En02.png</td><td>@tmp_ssamB_mjmiddle_En02_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_En02.png</td><td>@tmp_mainSsam_mjmiddle_En02_thum.png</td>
          </tr>
          <tr>
            <td>류지원</td><td>전공영어의 막강파워!</td><td></td><td>@tmp_ssam_mjmiddle_En03.png</td><td>@tmp_ssamB_mjmiddle_En03_thum.png</td><td>@tmp_ssamB_mjmiddle_En03.png</td><td>@tmp_ssamB_mjmiddle_En03_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_En03.png</td><td>@tmp_mainSsam_mjmiddle_En03_thum.png</td>
          </tr>
          <tr>
            <td>미쉘김</td><td>전공영어 New, Paradigm shift</td><td></td><td>@tmp_ssam_mjmiddle_En04.png</td><td>@tmp_ssamB_mjmiddle_En04_thum.png</td><td>@tmp_ssamB_mjmiddle_En04.png</td><td>@tmp_ssamB_mjmiddle_En04_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_En04.png</td><td>@tmp_mainSsam_mjmiddle_En04_thum.png</td>
          </tr>
          <tr>
            <th rowspan="5">수학</th><td></td><td></td><td>sbjMath</td><td></td><td></td><td><td></td><td>bg_mainSsam_sbjMath.png</td><td>bg_mainSsam_sbjMath_s.png</td><td></td><td></td>
          </tr>
          <tr>
            <td>이정훈/안후상팀</td><td>수학과 합격의 연결고리!</td><td></td><td>@tmp_ssam_mjmiddle_Math01.png</td><td>@tmp_ssamB_mjmiddle_Math01_thum.png</td><td>@tmp_ssamB_mjmiddle_Math01.png</td><td>@tmp_ssamB_mjmiddle_Math01_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Math01.png</td><td>@tmp_mainSsam_mjmiddle_Math01_thum.png</td>
          </tr>
          <tr>
            <td>이정훈</td><td>함께 만드는 합격!임용 수학 러닝메이트</td><td></td><td>@tmp_ssam_mjmiddle_Math02.png</td><td>@tmp_ssamB_mjmiddle_Math02_thum.png</td><td>@tmp_ssamB_mjmiddle_Math02.png</td><td>@tmp_ssamB_mjmiddle_Math02_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Math02.png</td><td>@tmp_mainSsam_mjmiddle_Math02_thum.png</td>
          </tr>
          <tr>
            <td>안후상</td><td>수교론의 정석! 완벽 이해!</td><td></td><td>@tmp_ssam_mjmiddle_Math03.png</td><td>@tmp_ssamB_mjmiddle_Math03_thum.png</td><td>@tmp_ssamB_mjmiddle_Math03.png</td><td>@tmp_ssamB_mjmiddle_Math03_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Math03.png</td><td>@tmp_mainSsam_mjmiddle_Math03_thum.png</td>
          </tr>
          <tr>
            <td>김지혜</td><td>기본부터 고득점까지 모든 것을 충족시키는 수교론</td><td></td><td>@tmp_ssam_mjmiddle_Math04.png</td><td>@tmp_ssamB_mjmiddle_Math04_thum.png</td><td>@tmp_ssamB_mjmiddle_Math04.png</td><td>@tmp_ssamB_mjmiddle_Math04_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Math04.png</td><td>@tmp_mainSsam_mjmiddle_Math04_thum.png</td>
          </tr>
          <tr>
            <th rowspan="5">음악</th><td></td><td></td><td>sbjMusic</td><td></td><td></td><td><td></td><td>bg_mainSsam_sbjMusic.png</td><td>bg_mainSsam_sbjMusic_s.png</td><td></td><td></td>
          </tr>
          <tr>
            <td>서정팀</td><td>엘리트 음악교육, 서울대 서정팀!</td><td></td><td>@tmp_ssam_mjmiddle_Music01.png</td><td>@tmp_ssamB_mjmiddle_Music01_thum.png</td><td>@tmp_ssamB_mjmiddle_Music01.png</td><td>@tmp_ssamB_mjmiddle_Music01_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Music01.png</td><td>@tmp_mainSsam_mjmiddle_Music01_thum.png</td>
          </tr>
          <tr>
            <td>서민정</td><td>기본적인 사항부터 핵심 적중 내용까지 체계적인 강의</td><td></td><td>@tmp_ssam_mjmiddle_Music02.png</td><td>@tmp_ssamB_mjmiddle_Music02_thum.png</td><td>@tmp_ssamB_mjmiddle_Music02.png</td><td>@tmp_ssamB_mjmiddle_Music02_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Music02.png</td><td>@tmp_mainSsam_mjmiddle_Music02_thum.png</td>
          </tr>
          <tr>
            <td>정희원</td><td>엘리트 음악교육, 서울대 서정팀!</td><td></td><td>@tmp_ssam_mjmiddle_Music03.png</td><td>@tmp_ssamB_mjmiddle_Music03_thum.png</td><td>@tmp_ssamB_mjmiddle_Music03.png</td><td>@tmp_ssamB_mjmiddle_Music03_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Music03.png</td><td>@tmp_mainSsam_mjmiddle_Music03_thum.png</td>
          </tr>
          <tr>
            <td>박서형</td><td>슬기로운 작곡가 서울대 박서형</td><td></td><td>@tmp_ssam_mjmiddle_Music04.png</td><td>@tmp_ssamB_mjmiddle_Music04_thum.png</td><td>@tmp_ssamB_mjmiddle_Music04.png</td><td>@tmp_ssamB_mjmiddle_Music04_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Music04.png</td><td>@tmp_mainSsam_mjmiddle_Music04_thum.png</td>
          </tr>
          <tr>
            <th>미술</th><td>위상팀</td><td>팀티칭을 통한 미술임용 완벽분석</td><td>sbjArt</td><td>@tmp_ssam_mjmiddle_Art01.png</td><td>@tmp_ssamB_mjmiddle_Art01_thum.png</td><td>@tmp_ssamB_mjmiddle_Art01.png</td><td>@tmp_ssamB_mjmiddle_Art01_txt.png</td><td>bg_mainSsam_sbjArt.png</td><td>bg_mainSsam_sbjArt_s.png</td><td>@tmp_mainSsam_mjmiddle_Art01.png</td><td>@tmp_mainSsam_mjmiddle_Art01_thum.png</td>
          </tr>
          <!---->
          <tr>
            <th rowspan="4">체육</th><td></td><td></td><td>sbjPys</td><td></td><td></td><td><td></td><td>bg_mainSsam_sbjPys.png</td><td>bg_mainSsam_sbjPys_s.png</td><td></td><td></td>
          </tr>
          <tr>
            <td>오정환</td><td>MAP구조도를 통한 이해와 암기의 효율적 연결!</td><td></td><td>@tmp_ssam_mjmiddle_Pys01.png</td><td>@tmp_ssamB_mjmiddle_Pys01_thum.png</td><td>@tmp_ssamB_mjmiddle_Pys01.png</td><td>@tmp_ssamB_mjmiddle_Pys01_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Pys01.png</td><td>@tmp_mainSsam_mjmiddle_Pys01_thum.png</td>
          </tr>
          <tr>
            <td>김용호</td><td>합격의 KEY! 체육 임용 마스터</td><td></td><td>@tmp_ssam_mjmiddle_Pys02.png</td><td>@tmp_ssamB_mjmiddle_Pys02_thum.png</td><td>@tmp_ssamB_mjmiddle_Pys02.png</td><td>@tmp_ssamB_mjmiddle_Pys02_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Pys02.png</td><td>@tmp_mainSsam_mjmiddle_Pys02_thum.png</td>
          </tr>
          <tr>
            <td>임서윤</td><td>합격으로 가는 스파르타 학습</td><td></td><td>@tmp_ssam_mjmiddle_Pys03.png</td><td>@tmp_ssamB_mjmiddle_Pys03_thum.png</td><td>@tmp_ssamB_mjmiddle_Pys03.png</td><td>@tmp_ssamB_mjmiddle_Pys03_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Pys03.png</td><td>@tmp_mainSsam_mjmiddle_Pys03_thum.png</td>
          </tr>
          <!---->
          <tr>
            <th>일본어</th><td>동소현</td><td>일본어 정통의 내공, 완벽 이해의 수업</td><td>sbjJa</td><td>@tmp_ssam_mjmiddle_Ja01.png</td><td>@tmp_ssamB_mjmiddle_Ja01_thum.png</td><td>@tmp_ssamB_mjmiddle_Ja01.png</td><td>@tmp_ssamB_mjmiddle_Ja01_txt.png</td><td>bg_mainSsam_sbjJa.png</td><td>bg_mainSsam_sbjJa_s.png</td><td>@tmp_mainSsam_mjmiddle_Ja01.png</td><td>@tmp_mainSsam_mjmiddle_Ja01_thum.png</td>
          </tr>
          <!---->
          <tr>
            <th>한문</th><td>원주용</td><td>합격을 여는 단 한가지 문, 유지사성(有志事成)</td><td>sbjZhWr</td><td>@tmp_ssam_mjmiddle_ZhWr01.png</td><td>@tmp_ssamB_mjmiddle_ZhWr01_thum.png</td><td>@tmp_ssamB_mjmiddle_ZhWr01.png</td><td>@tmp_ssamB_mjmiddle_ZhWr01_txt.png</td><td>bg_mainSsam_sbjZhWr.png</td><td>bg_mainSsam_sbjZhWr_s.png</td><td>@tmp_mainSsam_mjmiddle_ZhWr01.png</td><td>@tmp_mainSsam_mjmiddle_ZhWr01_thum.png</td>
          </tr>
          <!---->
          <tr>
            <th>가정</th><td>문영은</td><td>가정 임용의 절대강자!</td><td>sbjHome</td><td>@tmp_ssam_mjmiddle_Home01.png</td><td>@tmp_ssamB_mjmiddle_Home01_thum.png</td><td>@tmp_ssamB_mjmiddle_Home01.png</td><td>@tmp_ssamB_mjmiddle_Home01_txt.png</td><td>bg_mainSsam_sbjHome.png</td><td>bg_mainSsam_sbjHome_s.png</td><td>@tmp_mainSsam_mjmiddle_Home01.png</td><td>@tmp_mainSsam_mjmiddle_Home01_thum.png</td>
          </tr>
          <!---->
          <tr>
            <th>도덕윤리</th><td>김성무</td><td>유쾌,명쾌한 강의</td><td>sbjMor</td><td>@tmp_ssam_mjmiddle_Mor01.png</td><td>@tmp_ssamB_mjmiddle_Mor01_thum.png</td><td>@tmp_ssamB_mjmiddle_Mor01.png</td><td>@tmp_ssamB_mjmiddle_Mor01_txt.png</td><td>bg_mainSsam_sbjMor.png</td><td>bg_mainSsam_sbjMor_s.png</td><td>@tmp_mainSsam_mjmiddle_Mor01.png</td><td>@tmp_mainSsam_mjmiddle_Mor01_thum.png</td>
          </tr>
          <!---->
          <tr>
            <th>미용</th><td>이영미</td><td>쉽고 재미있게, 핵심을 콕콕!!</td><td>sbjBeauty</td><td>@tmp_ssam_mjmiddle_Beauty01.png</td><td>@tmp_ssamB_mjmiddle_Beauty01_thum.png</td><td>@tmp_ssamB_mjmiddle_Beauty01.png</td><td>@tmp_ssamB_mjmiddle_Beauty01_txt.png</td><td>bg_mainSsam_sbjBeauty.png</td><td>bg_mainSsam_sbjBeauty_s.png</td><td>@tmp_mainSsam_mjmiddle_Beauty01.png</td><td>@tmp_mainSsam_mjmiddle_Beauty01_thum.png</td>
          </tr>
          <!---->
          <tr>
            <th rowspan="4">중국어</th><td></td><td></td><td>sbjZh</td><td></td><td></td><td><td></td><td>bg_mainSsam_sbjZh.png</td><td>bg_mainSsam_sbjZh_s.png</td><td></td><td></td>
          </tr>
          <tr>
            <td>희소 중국어팀</td><td>영역별 전문가의 고품격 명강의!</td><td></td><td>@tmp_ssam_mjmiddle_Zh01.png</td><td>@tmp_ssamB_mjmiddle_Zh01_thum.png</td><td>@tmp_ssamB_mjmiddle_Zh01.png</td><td>@tmp_ssamB_mjmiddle_Zh01_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Zh01.png</td><td>@tmp_mainSsam_mjmiddle_Zh01_thum.png</td>
          </tr>
          <tr>
            <td>한정은</td><td>검증된 중국어 문법 강의로 정확한 중국어 도출</td><td></td><td>@tmp_ssam_mjmiddle_Zh02.png</td><td>@tmp_ssamB_mjmiddle_Zh02_thum.png</td><td>@tmp_ssamB_mjmiddle_Zh02.png</td><td>@tmp_ssamB_mjmiddle_Zh02_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Zh02.png</td><td>@tmp_mainSsam_mjmiddle_Zh02_thum.png</td>
          </tr>
          <tr>
            <td>이해진</td><td>풍부한 강의경력으로 이해하기 쉬운 학습법 제시</td><td></td><td>@tmp_ssam_mjmiddle_Zh03.png</td><td>@tmp_ssamB_mjmiddle_Zh03_thum.png</td><td>@tmp_ssamB_mjmiddle_Zh03.png</td><td>@tmp_ssamB_mjmiddle_Zh03_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjmiddle_Zh03.png</td><td>@tmp_mainSsam_mjmiddle_Zh03_thum.png</td>
          </tr>
          <!---->
          <tr><th colspan="13" class="title"></th></tr>
          <tr>
            <th rowspan="11">사회/과학<br/>(mjss)</th><th rowspan="3">역사</th><td></td><td></td><td>sbjHistory</td><td></td><td></td><td><td></td><td>bg_mainSsam_sbjHistory.png</td><td>bg_mainSsam_sbjHistory_s.png</td><td></td><td></td>
          </tr>
          <tr>
            <td>이순권</td><td>최강역사! 교사들의 스승!</td><td></td><td>@tmp_ssam_mjss_History01.png</td><td>@tmp_ssamB_mjss_History01_thum.png</td><td>@tmp_ssamB_mjss_History01.png</td><td>@tmp_ssamB_mjss_History01_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjss_History01.png</td><td>@tmp_mainSsam_mjss_History01_thum.png</td>
          </tr>
          <tr>
            <td>반철진</td><td>분석과 집중 知彼知己</td><td></td><td>@tmp_ssam_mjss_History02.png</td><td>@tmp_ssamB_mjss_History02_thum.png</td><td>@tmp_ssamB_mjss_History02.png</td><td>@tmp_ssamB_mjss_History02_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjss_History02.png</td><td>@tmp_mainSsam_mjss_History02_thum.png</td>
          </tr>
          <!---->
          <tr>
            <th>지리</th><td>한무일</td><td>전공지리 Only-One</td><td>sbjGeo</td><td>@tmp_ssam_mjss_Geo01.png</td><td>@tmp_ssamB_mjss_Geo01_thum.png</td><td>@tmp_ssamB_mjss_Geo01.png</td><td>@tmp_ssamB_mjss_Geo01_txt.png</td><td>bg_mainSsam_sbjGeo.png</td><td>bg_mainSsam_sbjGeo_s.png</td><td>@tmp_mainSsam_mjss_Geo01.png</td><td>@tmp_mainSsam_mjss_Geo01_thum.png</td>
          </tr>
          <tr>
            <th>물리</th><td>최만영</td><td>뼈대부터 다른 진짜 이론물리학자의 CLASS</td><td>sbjPhy</td><td>@tmp_ssam_mjss_Phy01.png</td><td>@tmp_ssamB_mjss_Phy01_thum.png</td><td>@tmp_ssamB_mjss_Phy01.png</td><td>@tmp_ssamB_mjss_Phy01_txt.png</td><td>bg_mainSsam_sbjPhy.png</td><td>bg_mainSsam_sbjPhy_s.png</td><td>@tmp_mainSsam_mjss_Phy01.png</td><td>@tmp_mainSsam_mjss_Phy01_thum.png</td>
          </tr>
          <!---->
          <tr>
            <th rowspan="4">화학</th><td></td><td></td><td>sbjChemi</td><td></td><td></td><td><td></td><td>bg_mainSsam_sbjChemi.png</td><td>bg_mainSsam_sbjChemi_s.png</td><td></td><td></td>
          </tr>
          <tr>
            <td>안병천/권혁팀</td><td>출제 예상 영역 완벽대비!!</td><td></td><td>@tmp_ssam_mjss_Chemi01.png</td><td>@tmp_ssamB_mjss_Chemi01_thum.png</td><td>@tmp_ssamB_mjss_Chemi01.png</td><td>@tmp_ssamB_mjss_Chemi01_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjss_Chemi01.png</td><td>@tmp_mainSsam_mjss_Chemi01_thum.png</td>
          </tr>
          <tr>
            <td>안병천</td><td>단순 암기를 탈피한 철저한 이해 위주의 해설식 강의!</td><td></td><td>@tmp_ssam_mjss_Chemi02.png</td><td>@tmp_ssamB_mjss_Chemi02_thum.png</td><td>@tmp_ssamB_mjss_Chemi02.png</td><td>@tmp_ssamB_mjss_Chemi02_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjss_Chemi02.png</td><td>@tmp_mainSsam_mjss_Chemi02_thum.png</td>
          </tr>
          <tr>
            <td>권혁</td><td>핵심을 짚어주는 강의, 출제 예상 영역 완벽 대비!</td><td></td><td>@tmp_ssam_mjss_Chemi03.png</td><td>@tmp_ssamB_mjss_Chemi03_thum.png</td><td>@tmp_ssamB_mjss_Chemi03.png</td><td>@tmp_ssamB_mjss_Chemi03_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjss_Chemi03.png</td><td>@tmp_mainSsam_mjss_Chemi03_thum.png</td>
          </tr>
          <!---->
          <tr>
            <th>생물</th><td>엄은미</td><td>방대한 생물학의 이정표가 되어 줄 Biology Master</td><td>sbjBio</td><td>@tmp_ssam_mjss_Bio01.png</td><td>@tmp_ssamB_mjss_Bio01_thum.png</td><td>@tmp_ssamB_mjss_Bio01.png</td><td>@tmp_ssamB_mjss_Bio01_txt.png</td><td>bg_mainSsam_sbjBio.png</td><td>bg_mainSsam_sbjBio_s.png</td><td>@tmp_mainSsam_mjss_Bio01.png</td><td>@tmp_mainSsam_mjss_Bio01_thum.png</td>
          </tr>
          <!---->
          <tr>
            <th>과학교육론</th><td>김창만</td><td>전국유일! 과교론 전문강사</td><td>sbjSc</td><td>@tmp_ssam_mjss_Sc01.png</td><td>@tmp_ssamB_mjss_Sc01_thum.png</td><td>@tmp_ssamB_mjss_Sc01.png</td><td>@tmp_ssamB_mjss_Sc01_txt.png</td><td>bg_mainSsam_sbjSc.png</td><td>bg_mainSsam_sbjSc_s.png</td><td>@tmp_mainSsam_mjss_Sc01.png</td><td>@tmp_mainSsam_mjss_Sc01_thum.png</td>
          </tr>
          <!---->
          <tr>
            <th colspan="13" class="title"></th>
          </tr>
          <tr>
            <th rowspan="2">비교과</th><th>전문상담</th><td>이진영</td><td>현직 상담교사들이 가장 많이 추천하는 강의</td><td>sbjCounsel</td><td>@tmp_ssam_mjnomj_Counsel01.png</td><td>@tmp_ssamB_mjnomj_Counsel01_thum.png</td><td>@tmp_ssamB_mjnomj_Counsel01.png</td><td>@tmp_ssamB_mjnomj_Counsel01_txt.png</td><td>bg_mainSsam_sbjCounsel.png</td><td>bg_mainSsam_sbjCounsel_s.png</td><td>@tmp_mainSsam_mjnomj_Counsel01.png</td><td>@tmp_mainSsam_mjnomj_Counsel01_thum.png</td>
          </tr>
          <tr>
            <th>보건</th><td>임수진</td><td>마이-맵으로 완성하는 최단기 보건합격!</td><td>sbjHealth</td><td>@tmp_ssam_mjnomj_Health01.png</td><td>@tmp_ssamB_mjnomj_Health01_thum.png</td><td>@tmp_ssamB_mjnomj_Health01.png</td><td>@tmp_ssamB_mjnomj_Health01_txt.png</td><td>bg_mainSsam_sbjHealth.png</td><td>bg_mainSsam_sbjHealth_s.png</td><td>@tmp_mainSsam_mjnomj_Health01.png</td><td>@tmp_mainSsam_mjnomj_Health01_thum.png</td>
          </tr>
          <!---->
          <tr><th colspan="13" class="title"></th></tr>
          <tr>
            <th rowspan="5">특수<br/>(mjspe)</th><th>유아특수</th><td></td><td></td><td>sbjSpeChild</td><td></td><td></td><td><td></td><td></td><td></td><td></td><td></td>
          </tr>
          <tr>
            <th>초등특수</th><td></td><td></td><td>sbjSpeElement</td><td></td><td></td><td><td></td><td></td><td></td><td></td><td></td>
          </tr>
          <tr>
            <th rowspan="3">중등특수</th><td></td><td></td><td>sbjSpeMiddle</td><td></td><td></td><td><td></td><td>bg_mainSsam_sbjSpeMiddle.png</td><td>bg_mainSsam_sbjSpeMiddle_s.png</td><td></td><td></td>
          </tr>
          <tr>
            <td>한경</td><td>합격 PLAN을 경험하라</td><td></td><td>@tmp_ssam_mjspe_Middle01.png</td><td>@tmp_ssamB_mjspe_Middle01_thum.png</td><td>@tmp_ssamB_mjspe_Middle01.png</td><td>@tmp_ssamB_mjspe_Middle01_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjspe_Middle01.png</td><td>@tmp_mainSsam_mjspe_Middle01_thum.png</td>
          </tr>
          <tr>
            <td>박해인</td><td>철저한 분석, 체계적인 명품 특수 강의</td><td></td><td>@tmp_ssam_mjspe_Middle02.png</td><td>@tmp_ssamB_mjspe_Middle02_thum.png</td><td>@tmp_ssamB_mjspe_Middle02.png</td><td>@tmp_ssamB_mjspe_Middle02_txt.png</td><td></td><td></td><td>@tmp_mainSsam_mjspe_Middle02.png</td><td>@tmp_mainSsam_mjspe_Middle02_thum.png</td>
          </tr>
          <!---->
          <tr><th colspan="13" class="title"></th></tr>
          <tr>
            <th>한국사</th><th></th><td>정재학</td><td>합격 선(線)을 넘는 한국사</td><td>sbjKhistory</td><td>@tmp_ssam_mjhistory01.png</td><td>@tmp_ssamB_mjhistory01_thum.png</td><td>@tmp_ssamB_mjhistory01.png</td><td>@tmp_ssamB_mjhistory01_txt.png</td><td>bg_mainSsam_sbjKhistory.png</td><td>bg_mainSsam_sbjKhistory_s.png</td><td>@tmp_mainSsam_mjhistory01.png</td><td>@tmp_mainSsam_mjhistory01_thum.png</td>
          </tr>
          <!---->
          <tr><th colspan="13" class="title"></th></tr>
          <tr>
            <th>사서직(공무원)</th><th></th><td>신인수</td><td></td><td>sbjLib</td><td>@tmp_ssam_mjLib01.png</td><td>@tmp_ssamB_mjLib01_thum.png</td><td>@tmp_ssamB_mjLib01.png</td><td>@tmp_ssamB_mjLib01_txt.png</td><td>bg_mainSsam_sbjLib.png</td><td>bg_mainSsam_sbjLib_s.png</td><td>@tmp_mainSsam_mjLib01.png</td><td>@tmp_mainSsam_mjLib01_thum.png</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //과목, 선생님 별 대표클래스 및 이미지명 정리 -->
  </div>
</template>

<script>
export default {
  name: 'Worklist',
  data() {
    return {
      tab:1
    }
  },
}
</script>

<style lang="css" scoped>

#workListwrap {padding:10px;}
#workListwrap * {font-size:12px}
#workListwrap h1 {padding:10px;border:2px solid #999;}
#workListwrap h1 span {font-size:150%;color:#333;}
#workListwrap h1 em {float:right;font:normal 100%/normal Dotum;}
#workListwrap .worklistTab {padding:15px 0 0;}
#workListwrap .worklistTab:after {content:"";display:block;clear:both;}
#workListwrap .worklistTab * {float:left;margin-right:-1px;width:calc(100% / 4);height:50px;line-height:4;color:#333;text-align:center;border:1px solid #ddd;border-bottom-color:#999;background:#fafafa;box-sizing:border-box;}
#workListwrap .worklistTab *.on {font-size:14px !important;border:2px solid #999;border-bottom:0;background:#fff}
#workListwrap .worklistData {padding-top:20px;}
#workListwrap table {border-collapse:collapse;table-layout:fixed;border-spacing:0;width:100%;border-top:2px solid #aabdd0;margin-bottom:10px;}
#workListwrap th {padding:6px 3px 5px;color:#1f4b77;border:1px solid #aabdd0;background:#d1dde9;box-sizing:border-box;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}
#workListwrap tbody th {text-align:left;color:#1f6314;background:#f5f6f6;}
#workListwrap tbody th.title {background:#d8f1d4;}
#workListwrap td {padding:2px 3px 0;line-height:18px;border:1px solid #aabdd0;background:#ffffff;box-sizing:border-box;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}
#workListwrap td.first {text-align:center;}
#workListwrap td em {font:normal 100%/normal Dotum;}
#workListwrap td .line {text-decoration:line-through;}
#workListwrap tr.dim td {color:#aabdd0;background:#ececec}
#workListwrap table caption {display:revert;height:20px;padding:5px;text-align:left;border:1px solid #aabdd0;border-bottom:0;}
#workListwrap table caption span {display:inline-block;margin-left:4px;width:10px;height:10px;font-size:11px;}
#workListwrap table caption span.red {background:red;}
#workListwrap table caption span.gray {background:#aaa6a8;}
#workListwrap table caption span.pink {background:#ffc0c0;}
#workListwrap table caption span.new {background:#fb00ff;}

#workListwrap td strong {display:inline-block;margin-left:5px;vertical-align:middle;font-size:11px;font-family:arial;}
#workListwrap td strong.red {color:red;}
#workListwrap td strong.pink {color:#ffc0c0;font-weight:normal;}
#workListwrap td strong.new {color:#fb00ff;font-size:11px;}
#workListwrap td strong.gray {color:#999396;font-weight:normal;}

#workListwrap table a {color:blue !important;}
#workListwrap table a.window {color:green !important;}
/* #workListwrap a:link {color:blue;}
#workListwrap a:visited {color:#9b2489;} */
#workListwrap .tr {text-align:center;}

#workListwrap h2 {margin:0;padding:5px 0;width:100%;text-align:center;font-weight:normal;color:#666;border:1px solid #aaa;background:#eee;}
#workListwrap ol {margin:0;padding:5px 0;width:100%;border:1px solid #aaa;border-top:none;}
#workListwrap ol li {margin:0 0 0 30px;padding:2px 15px 2px 0;word-break:break-all;}
#workListwrap ul {margin:0;padding:10px 0 10px 20px;line-height:20px;}
#workListwrap ul li {list-style:disc;margin:0;}

#workListwrap .designCase td {padding:6px 3px 5px;}
#workListwrap .ssamCase th {padding:2px 3px 0;}
</style>
