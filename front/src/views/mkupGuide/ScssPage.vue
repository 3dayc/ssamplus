<template lang="html">
<div class="mkBody">
  <p style="padding-top:20px;">
    홈페이지의 스타일은 SCSS를 기준으로 작성되었습니다. <br/>
    <span>* SCSS에 대한 기초 문법을 인지한 것으로 간주하여 소스의 문법 설명은 생략 합니다.</span>
  </p>
  <h2>파일 별 정의</h2>
  <p>
    하기의 파일명은 abc 순이며, 실제 랜더링(application.scss 파일 내) 시에는 순서변경 시 화면상의 오류가 발생할 수 있음을 인지해주시기 바랍니다.<br/>
    반응형 대응 css는 각 파일별로 다를수 있습니다. 해당 css 내 대응한 경우 "포함" 으로 표기합니다.<br/>
    단, 타블릿 대응 css는 _responsiveEtc.scss 에서 통합 관리 합니다.
  </p>
  <table class="mkTable" style="margin-top:10px;">
    <colgroup>
      <col width="150" />
      <col width="50" />
      <col />
      <col />
      <col width="150" />
      <col width="50" />
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        <th colspan="4">공통</th>
        <th colspan="4">서브 개별</th>
      </tr>
      <tr>
        <th>파일명</th>
        <th>모바일</th>
        <th>관련 URL</th>
        <th>해당 메뉴 및 비 고</th>
        <th>파일명</th>
        <th>모바일</th>
        <th>관련 URL</th>
        <th>해당 메뉴</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>_common.scss</td>
        <td class="tC">포함</td>
        <td></td>
        <td>공통 전역 변수 및 @media query 셋팅. css 초기화 정의</td>
        <td>_subAcademy.scss</td>
        <td></td>
        <td><a href="/mkup/academy/index" target="_blank">academy</a></td>
        <td>희소고시학원</td>
      </tr>
      <tr>
        <td>_component.scss</td>
        <td class="tC">포함</td>
        <td><a href="/mkup/uicomponent" target="_blank">uicomponent</a></td>
        <td>공통으로 사용하는 컴포넌트와 관련된 스타일 모음.</td>
        <td>_subBbs.scss</td>
        <td></td>
        <td>
          <a href="/mkup/bbs/notice" target="_blank">notice</a>,
          <a href="/mkup/bbs/event" target="_blank">event</a>
        </td>
        <td>공지사항, 이벤트</td>
      </tr>
      <tr>
        <td>_font.scss</td>
        <td></td>
        <td></td>
        <td>웹폰트 정의</td>
        <td>_subCounsel.scss</td>
        <td></td>
        <td><a href="/mkup/counsel/index" target="_blank">counsel</a></td>
        <td>상담센터</td>
      </tr>
      <tr>
        <td>_join.scss</td>
        <td class="tC">포함</td>
        <td>
          <a href="/mkup/login" target="_blank">login</a>,
          <a href="/mkup/join" target="_blank">join</a>,
          <a href="/mkup/findAccount" target="_blank">findAccount</a>
        </td>
        <td>로그인, 회원가입, 아이디 및 비밀번호 변경 화면들의 스타일 모음</td>
        <td>_subExam.scss</td>
        <td></td>
        <td><a href="/mkup/exam/info/guide" target="_blank">exam</a></td>
        <td>시험정보</td>
      </tr>
      <tr>
        <td>_layout.scss</td>
        <td class="tC">포함</td>
        <td>
          <a href="/mkup/layout" target="_blank">layout</a>,
          <a href="/mkup/layoutTitle" target="_blank">layoutTitle</a>,
          <a href="/mkup/error" target="_blank">error</a>,
          <a href="/mkup/loading" target="_blank">loading</a>
        </td>
        <td>전체 레이아웃 관련 스타일 모음. app.vue에서 임포트 되는 영역까지 포함</td>
        <td>_subInside.scss</td>
        <td></td>
        <td><a href="/mkup/inside/index" target="_blank">inside</a></td>
        <td>인사이드희소</td>
      </tr>
      <tr>
        <td>_main.scss</td>
        <td class="tC">포함</td>
        <td><a href="/mkup/intro" target="_blank">intro</a>, <a href="/mkup/main" target="_blank">main</a></td>
        <td>인트로, 메인</td>
        <td>_subLecture.scss</td>
        <td></td>
        <td><a href="/mkup/lecture/index" target="_blank">lecture</a></td>
        <td>수강신청</td>
      </tr>
      <tr>
        <td>_popup.scss</td>
        <td class="tC">포함</td>
        <td></td>
        <td>레이어 팝업의 공통과 전체 스타일 모음</td>
        <td>_subMylec.scss</td>
        <td></td>
        <td><a href="/mkup/mylec/online/my" target="_blank">mylec</a></td>
        <td>내 강의실</td>
      </tr>
      <tr>
        <td>_responsive.scss</td>
        <td></td>
        <td></td>
        <td>모바일 포함한 개별 scss를 제외한 모바일 반응형 스타일 모음 (총 합)</td>
        <td>_subMypage.scss</td>
        <td></td>
        <td><a href="/mkup/mypage/payment/history" target="_blank">mypage</a></td>
        <td>마이페이지</td>
      </tr>
      <tr>
        <td rowspan="2">_responsiveEtc.scss</td>
        <td rowspan="2"></td>
        <td rowspan="2"></td>
        <td rowspan="2">반응형 대응 중에서 예외사항(타블렛, 아이폰 & 안드로이드 분기 등)을 정의. <br/>본 대응은 개별 관리하는 scss는 없으며 이곳에서 통합 관리</td>
        <td>_subOpenlec.scss</td>
        <td></td>
        <td><a href="/mkup/openlec/index" target="_blank">openlec</a></td>
        <td>무료강의</td>
      </tr>
      <tr>
        <td>_subPass.scss</td>
        <td></td>
        <td><a href="/mkup/pass/index" target="_blank">pass</a></td>
        <td>합격수기</td>
      </tr>
      <tr>
        <td>_sub.scss</td>
        <td class="tC">포함</td>
        <td><a href="/mkup/layoutBbs" target="_blank">layoutBbs</a></td>
        <td>배너영역, 목록, 게시판 상세 및 등록, 강좌관련, 스와이퍼 등의 공통된 스타일 기본 정의</td>
        <td>_subSetting.scss</td>
        <td></td>
        <td><a href="/mkup/setting" target="_blank">setting</a>, <a href="/mkup/setting/push" target="_blank">push</a></td>
        <td>모바일 설정, push 목록</td>
      </tr>
      <tr>
        <td>application.scss</td>
        <td></td>
        <td></td>
        <td>_.scss 파일들을 취합하여 랜더링하는 파일 <sup>1)</sup>. import되는 순서는 변경 시 주의필요</td>
        <td>_subSmart.scss</td>
        <td></td>
        <td><a href="/mkup/smart" target="_blank">smart</a></td>
        <td>스마트 수강신청</td>
      </tr>
      <tr>
        <td>application.min.css</td>
        <td></td>
        <td></td>
        <td>scss를 랜더링해서 나온 최종 css 파일. 본 파일이 main.js에서 import되어 스타일이 적용 됨</td>
        <td>_subSpecial.scss</td>
        <td></td>
        <td><a href="/mkup/special/index" target="_blank">special</a></td>
        <td>선생님 스페셜</td>
      </tr>
      <tr>
        <td rowspan="2" colspan="4"></td>
        <td>_subSsammall.scss</td>
        <td></td>
        <td><a href="/mkup/ssammall/index" target="_blank">ssammall</a></td>
        <td>쌤몰</td>
      </tr>
      <tr>
        <td>_subSsampack.scss</td>
        <td></td>
        <td><a href="/mkup/ssampack/index" target="_blank">ssampack</a></td>
        <td>쌤팩</td>
      </tr>
    </tbody>
  </table>
  <h2>application.scss</h2>
  <p>
    _파일명.scss 는 파일 저장 시 .css로 랜더링 되지 않습니다. 이를 이용하여 랜더링은 application.scss 파일에서 일괄 적용하고 있습니다.<br/>
   일괄 랜더링을 하는 또 다른 이유는 css 파일을 불러올때 다중의 css를 정의하는 것이 아닌 1개의 파일만 정의하면 되기 때문입니다.<br/><br/>
   이때, _파일명.scss의 순서가 중요하기 때문에 하기와 같이 application.scss 내에서 공통 부분을 우선순위로 작성해 주게 됩니다. 서브 개별 scss (_sub~.scss)의 순서는 반드시 지키지 않아도 되지만 되도록 변경하지 않는 방향을 추천합니다.<br/>
   _responsive.scss 와 _responsiveEtc.scss 파일은 반드시 순차적으로 제일 하단에 위치해 반응형 적용이 정상적이 되도록 합니다. <br/><br/>
   랜더링 된 파일은 compressed 버전으로 압축된 css를 사용하였습니다. (<a href="https://designmeme.github.io/ko/blog/sass-css-output-style/" target="_blank">참조</a>)<br/>
    <span>* SCSS 랜더링은 사용하는 에디터에서 설정할 수 있으며, 이에 대한 별도 설명은 생략합니다.</span>
  </p>
  <img :src="require(`@/views/mkupGuide/images/img_scssPage_01.png`)" alt="" style="margin-top:10px;" />
  <h2>주석 및 문서 정보 서술</h2>
  <p>
    scss 파일 내 주석은 아래의 규칙을 가지고 작성하였습니다.<br/>
    제일 상단에 해당 파일의 정보를 기술하였고, 소스 내 주석은 각 Case 별로 기술하였습니다.
  </p>
  <div class="box">
    /*===================================================================<br/>
    * INFORMATION<br/>
    * -------------------------------------------------------------------<br/>
    * @File Name:파일명.scss<br/>
    * @Description : css 랜더링용<br/>
    * @Create Date: 2021-06-23<br/>
    * @Last Update Date: N/A<br/>
    * @History: N/A<br/>
    * -------------------------------------------------------------------<br/>
    * 해당 파일의 상세설명이 필요한 경우 기술<br/>
    * ====================================================================*/<br/><br/>

    /* ====================== */<br/>
    /* 구역 별 일 경우 */<br/>
    /* ====================== */<br/><br/>

    /* ===== 페이지 구분 ===== */<br/>
    /* ===== _sub~.scss 구분 ===== */ &nbsp;(_responsive.scss 에서 사용)<br/><br/>

    /* 페이지 내 구분  */<br/><br/>

    // line 설명필요시<br/><br/>

    /**/<br/>
  </div>
</div>
</template>

<script>
export default {
  name: 'ScssPage',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="css" scoped>
.mkBody h2 {margin:20px 0 10px;padding:10px 10px;color:#1c643e;background:#ecf1ee;}
.box {margin-top:10px;padding:10px;font: 12px/1.5 'dotum';letter-spacing:0;border:1px solid #ddd;}
.box:after {content:"";display:block;clear:both;}
.box em {color:#0006b7;font: 12px/1.5 'dotum';font-weight:bold;}
.mkBody sup {width:auto;height:auto;color:#0006b7;text-indent:inherit;vertical-align:initial;background:none;}
.mkBody sup:before {display:none;}
.mkBody a {color:#0006b7;cursor:pointer;text-decoration:underline;}
table.mkTable {border-collapse:collapse;}
table.mkTable * {font: 12px/1.5 'dotum';letter-spacing:0;}
table.mkTable th,
table.mkTable td {padding:2px 0.5rem;vertical-align:middle;box-sizing:border-box;border:1px solid #ddd;}
table.mkTable thead th {color:#3a3a3a;background:#f0f0f1;}
table.mkTable tbody th {background:#efefef;}
table.mkTable tbody td {padding:2px 10px;vertical-align:top;line-height:1.5}
table.mkTable a {color:#0006b7;cursor:pointer;text-decoration:underline;}
table.mkTable em {color:#0006b7;}
table.mkTable strong {font-weight:bold;}
p span {font: 12px/1 'dotum';letter-spacing:0;}
</style>
