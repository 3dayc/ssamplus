<template lang="html">
<div class="mkBody">
  <p style="padding-top:20px;">
    views 폴더 내 .vue 마크업 시 공통사용 가이드 및 Case를 정의합니다.<br/>
    <span>* vue.js에 대한 기초 문법을 인지한 것으로 간주하여 소스의 문법 설명은 생략 합니다.</span>
  </p>
  <h2>PC vs Mobile 분기방법</h2>
  <p>
    본 홈페이지에서는 디바이스 OS와 기기(iOS 등)를 판단하여 반응형을 적용하고 있습니다. <br/>
    App.vue	파일에서 아래의 함수로 디바이스를 판단하고, index.html 로드했을 때 모바일 판단을 하여 적용됩니다. <br/>
    또한, 모바일에서도 안드로이드와 iOS를 같이 판단하여 모바일 대응도 사전 정의합니다. <br/>
    적용방법은 모바일 여부에 따라 .vue에서 소스분리를 하거나, css에서 분기하여 적용합니다.
  </p>
  <table class="mkTable" style="margin-top:10px;">
    <tbody>
      <tr>
        <th>모바일 판단여부 스크립트</th>
        <th>.vue에서 사용</th>
        <th>scss에서 사용</th>
      </tr>
      <tr>
        <td style="padding-right:20px;">
        isMobile: function() {<br/>
        &nbsp;&nbsp;this.mobile = false;<br/>
        &nbsp;&nbsp;this.wrapBackClass = '';<br/><br/>

        &nbsp;&nbsp;if(/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>this.mobile = true;</strong><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>this.wrapBackClass = 'mDevice android';</strong><br/>
        &nbsp;&nbsp;} else if(/iPhone|iPhone|iPad|iPod/i.test(navigator.userAgent)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>this.mobile = true;</strong><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>this.wrapBackClass = 'mDevice ios';</strong><br/>
        &nbsp;&nbsp;}else {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;this.mobile = false;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;this.wrapBackClass = '';<br/>
        &nbsp;&nbsp;}<br/>
        }
        </td>
        <td style="padding-right:20px;">
          &lt;div class="popupBanner" <em>v-if="!this.mobile"</em>&gt; 중략 &lt;/div&gt;<br/>
          &lt;div class="popupBanner" <em>v-else-if="this.mobile"</em>&gt; 중략 &lt;/div&gt;<br/>
        </td>
        <td>
          .bandBanner {text-align:center;height:180px;overflow:hidden;}<br/><br/>
          <em>#wrapBack.mDevice</em> {<br/>
          &nbsp;&nbsp;.bandBanner {text-align:center;height:auto;overflow:hidden;}<br/>
          }
        </td>
      </tr>
    </tbody>
  </table>
  <h2>소스 분기 및 분리방법</h2>
  <p>
    분기방법은 .vue 스크립트인 v-if 와 v-else-if 를 사용합니다. <br/>
    이때, 주의해야 할 점은 분기할 엘리먼트 두 태그는 이웃하고 있어야 하며 동일한 클래스와 속성으로 이뤄져 있어야 합니다.
    만약, 조금이라도 다르다면 각각 v-if로 제어해야 합니다.<br/>
    또한, v-if 사용할 시에는 브라우저에서 사용하지 엘리먼트는 아예 소스코드 조차 보이지 않으니 참고하기 바랍니다.
  </p>
  <table class="mkTable" style="margin-top:10px;">
    <tbody>
      <tr>
        <th>1. 분기할 소스가 이웃할 경우</th>
        <th>2. 분기할 소스가 이웃이 아닌 경우</th>
        <th>3. 분기할 소스가 여러개인 경우</th>
      </tr>
      <tr>
        <td style="padding-right:20px;">
          대표 예시 : <router-link to="/mkup/main" target="_blank">메인화면 내 레이어 팝업</router-link><br/><br/>
          &lt;div class="popupBanner" <strong>v-if="!this.mobile"</strong>&gt; 중략 &lt;/div&gt;<br/>
          &lt;div class="popupBanner" <strong>v-else-if="this.mobile"</strong>&gt; 중략 &lt;/div&gt;<br/>
          ㄴ 이웃하고 class도 동일하여 v-else-if 이용<br/><br/>
        </td>
        <td style="padding-right:20px;">
          대표 예시 : <router-link to="/mkup/lecture/Teacher" target="_blank">선생님 홈</router-link><br/><br/>
          &lt;TeacherHome <strong>v-if="this.mobile"</strong> /&gt; <br/>
          &lt;div class="homeIntro"&gt;&lt;TeacherHome <strong>v-if="!this.mobile"</strong> /&gt;&lt;/div&gt;<br/>
          ㄴ 같은 엘리먼트 인데도 위치가 다르기 때문에 각각 v-if를 이용<br/><br/>
        </td>
        <td>
          대표 예시 : <router-link to="/mkup/mylec/study/my" target="_blank">내강의실 > 학습현황 > 학습비교 팝업</router-link><br/><br/>
          &lt;StudyMyGraphCase11 <strong>v-if="studyGraphCaseTrigger == 11"</strong> /&gt;<br/>
          &lt;StudyMyGraphCase12 <strong>v-if="studyGraphCaseTrigger == 12"</strong> /&gt;<br/>
          &lt;StudyMyGraphCase21 <strong>v-if="studyGraphCaseTrigger == 21"</strong> /&gt;<br/>
          &lt;StudyMyGraphCase22 <strong>v-if="studyGraphCaseTrigger == 22"</strong> /&gt;<br/>
          ㄴ 다른 엘리먼트를 하나의 함수 안에서 조건에 맞춰 각각 v-if를 이용<br/><br/>
        </td>
      </tr>
    </tbody>
  </table>
  <p style="padding-top:20px;">
   소스 분리는 분리한 화면을 script에서 import 한후 컴포넌트화 시키고 template 내에서 호출합니다.
  </p>
  <div class="box">
    &lt;template lang="html"&gt;<br/>
    &nbsp;&nbsp;&lt;div&gt;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt; <em>FileName</em> /&gt; &nbsp;&nbsp;&nbsp;&nbsp; -> 컴포넌트 호출<br/>
    &nbsp;&nbsp;&lt;/div&gt;<br/>
    &lt;/template&gt;<br/><br/>

    &lt;script&gt;<br/>
    import <em>FileName</em> from '@/src 이하 부모경로/<em>FileName</em>.vue'; &nbsp;&nbsp;&nbsp;&nbsp; -> 분리한 화면 불러오기 <br/>
    export default {<br/>
    &nbsp;&nbsp;components: {<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;<em>FileName</em>   &nbsp;&nbsp;&nbsp;&nbsp; -> 컴포넌트화 시키기 <br/>
    &nbsp;&nbsp;}<br/>
    }<br/>
    &lt;/script&gt;
  </div>
  <p style="padding-top:10px;">
   홈페이지에서 소스 분리를 한 경우는 <br/>
   첫번째로 모바일과 PC의 UI가 공통으로 사용하기 어려운 경우이고, 길거나 동일하게 여러곳에서 사용할 경우 입니다.<br/>
  </p>
  <table class="mkTable" style="margin-top:10px;">
    <tbody>
      <tr>
        <th>1. 모바일과 PC 분리가 필요한 경우</th>
        <th>2. 소스가 길어서 분리한 경우</th>
        <th>3. 동일한 소스가 여러곳에서 사용할 경우</th>
      </tr>
      <tr>
        <td style="padding-right:20px;">
            대표 예시 : <router-link to="/mkup/intro" target="_blank">인트로</router-link><br/><br/>
            예시 1) Intro.vue : 화면 전체 소스 분리 <br/><br/>
            &lt;introPc v-if="!this.mobile" /&gt;<br/>
            &lt;introM v-if="this.mobile" /&gt;<br/><br/>
            예시 2) Main.vue : 메인비쥬얼 이미지 스와이퍼 분리 <br/><br/>
            &lt;article&gt;<br/>
            &nbsp;&nbsp;&nbsp;&lt;MainBanner v-if="!this.mobile" /&gt;<br/>
            &nbsp;&nbsp;&nbsp;&lt;MainBannerM v-else-if="this.mobile" /&gt;<br/>
            &lt;/article&gt;<br/><br/>
        </td>
        <td style="padding-right:20px;">
            대표 예시 : <router-link to="/mkup/mylec/premium/ssampack" target="_blank">내강의실 > 프리미엄 쌤팩</router-link><br/><br/>
            예시 1) PremiumSsampack.vue : 쌤팩 신청전일 경우 안내문 <br/><br/>
            &lt;PremiumSsampackIntro /&gt;<br/><br/>
            예시 2) StudyMyGraphPop.vue : 나의 학습현황 > 학습비교 확인 팝업 내 그래프 <br/><br/>
            &lt;StudyMyGraphCaseM11  v-if="termMTrigger == 1 && termMTrigger2 == 1" /&gt;<br/>
            &lt;StudyMyGraphCaseM12  v-if="termMTrigger == 1 && termMTrigger2 == 2" /&gt;<br/>
            &lt;StudyMyGraphCaseM21  v-if="termMTrigger == 2 && termMTrigger2 == 1" /&gt;<br/>
            &lt;StudyMyGraphCaseM22  v-if="termMTrigger == 2 && termMTrigger2 == 2" /&gt;
        </td>
        <td>
            대표 예시 : <router-link to="/mkup/login" target="_blank">로그인</router-link><br/><br/>
            예시 1) Join.vue : 로그인, 회원가입, 홈페이지 하단 공통의 동의팝업 데이터 <br/><br/>
  					&lt;div class="tabLayout"&gt;<br/>
  					&nbsp;&nbsp;&nbsp;&lt;div v-if="currentTab == 0" class="tabData" :key="currentTab"&gt;&lt;PolicyService /&gt;&lt;/div&gt;<br/>
  					&nbsp;&nbsp;&nbsp;&lt;div v-if="currentTab == 1" class="tabData"&gt;&lt;PolicyPrivacy /&gt;&lt;/div&gt;<br/>
  					&nbsp;&nbsp;&nbsp;&lt;div v-if="currentTab == 2" class="tabData"&gt;&lt;PolicySms /&gt;&lt;/div&gt;<br/>
  					&nbsp;&nbsp;&nbsp;&lt;div v-if="currentTab == 3" class="tabData"&gt;&lt;PolicyEmail /&gt;&lt;/div&gt;<br/>
  					&lt;/div&gt;<br/><br/>
        </td>
      </tr>
    </tbody>
  </table>
  <h2>템플릿화 방법</h2>
  <p>
   동일한 소스를 반복해서 여러개의 화면을 마크업해야 할 경우, 대표 템플릿과 각 화면의 필요부분만 변경하여 적용합니다.<br/>
   수강신청 > 선생님홈 화면을 마크업 할때 이용한 방식으로 레이어팝업의 구조도 이와 동일합니다.<br/><br/>
   대표 템플릿으로 정할 .vue에 Full 소스로 화면을 구성합니다. 이때 변경이 필요한 부분을 &lt;slot name="name"&gt;&lt;/slot&gt;을 부모로 지정합니다.<br/>
   템플릿을 적용할 .vue에서는 필요한 부분만 마크업 합니다.
  </p>
  <table class="mkTable" style="margin-top:10px;">
    <tbody>
      <tr>
        <th>Step1. 대표 템플릿</th>
        <th>Step2. 템플릿 적용 Case1</th>
        <th>Step3. 템플릿 적용 Case2</th>
      </tr>
      <tr>
        <td style="padding-right:20px;">
          파일명 : <router-link to="/mkup/lecture/Teacher" target="_blank">TeacherTemplate.vue</router-link><br/><br/>
          변경할 소스<br/>
          <strong>&lt;slot name="teacherName"&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&lt;div class="sbjEdu"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;&lt;span&gt;교육학&lt;/span&gt;김현 선생님&lt;/h2&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button @click="ssamHistoryPop = true"&gt;약력/저서&lt;/button&gt;<br/>
          &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          <strong>&lt;/slot&gt;</strong><br/>
        </td>
        <td style="padding-right:20px;">
          파일명 : <router-link to="/mkup/lecture/teachermjedu02" target="_blank">LectureMjchild02.vue</router-link> <br/><br/>
          적용한 소스<br/>
          <strong>&lt;TeacherTemplate&gt;</strong><br/>
            <strong>&nbsp;&nbsp;&nbsp;&lt;template slot="teacherName"&gt;</strong><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="sbjChild"&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;&lt;span&gt;유아&lt;/span&gt;이동건 선생님&lt;/h2&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button @click="ssamHistoryPop = true"&gt;약력/저서&lt;/button&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
            <strong>&nbsp;&nbsp;&nbsp;&lt;/template&gt;</strong><br/>
          <strong>&lt;/TeacherTemplate&gt;</strong>
        </td>
        <td>
          파일명 : <router-link to="/mkup/lecture/teachermjmiddle061" target="_blank">LectureMjmiddle061.vue</router-link> <br/><br/>
          적용한 소스<br/>
          <strong>&lt;TeacherTemplate&gt;</strong><br/>
            <strong>&nbsp;&nbsp;&nbsp;&lt;template slot="teacherName"&gt;</strong><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="sbjPys"&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;&lt;span&gt;체육&lt;/span&gt;오정환 선생님&lt;/h2&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button @click="ssamHistoryPop = true"&gt;약력/저서&lt;/button&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
            <strong>&nbsp;&nbsp;&nbsp;&lt;/template&gt;</strong><br/>
          <strong>&lt;/TeacherTemplate&gt;</strong>
        </td>
      </tr>
    </tbody>
  </table>
  <h2>팝업 적용 방법</h2>
  <p>
    소스 분리 방법인 템플릿화 하는 것과 동일한 방식으로 기본 레이아웃을 정한 후 팝업 개별로 마크업을 진행합니다.
  </p>
  <table class="mkTable" style="margin-top:10px;">
    <tbody>
      <tr>
        <th>Alert 팝업 기본</th>
        <th>적용 사례 1</th>
        <th>적용 사례 2</th>
        <th>Alert 기본 정렬 Case</th>
      </tr>
      <tr>
        <td style="padding-right:20px;">
          파일위치 : /views/include/Alert.vue<br/><br/>
          &lt;transition name="modal"&gt;<br/>
          &nbsp;&nbsp;&lt;div class="modalDim alertPop"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="modalWrapper"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="modalContainer"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="modalbody"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<strong>slot name="modalbody"&gt; default body &lt;/slot&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="modalfooter"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&lt;slot name="modalfooter"&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="btnM line" @click="$emit('close')"&gt;취소&lt;/button&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="btnM " @click="$emit('close')"&gt;확인&lt;/button&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&lt;/slot&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/transition&gt;<br/>
        </td>
        <td style="padding-right:20px;">
          파일위치 : /views/ssammall/BookView.vue<br/><br/>
          <strong>&lt;Alert&gt;<br/>
          &nbsp;&nbsp;&lt;template slot="modalbody"&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="basicNoty"&gt;&lt;p&gt;선택한 교재를 장바구니에 추가하였습니다.&lt;/p&gt;&lt;/div&gt;<br/>
          &nbsp;&nbsp;<strong>&lt;/template&gt;</strong><br/>
          &nbsp;&nbsp;<strong>&lt;template slot="modalfooter"&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;router-link class="btnM line"&gt;장바구니로 이동&lt;/router-link&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="btnM"&gt;구매를 계속함&lt;/button&gt;<br/>
          &nbsp;&nbsp;<strong>&lt;/template&gt;<br/>
          &lt;/Alert&gt;</strong><br/><br/>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage_01.png`)" alt="" style="border:1px solid #999" />
        </td>
        <td>
          파일위치 : /views/include/PcMyNavi.vue<br/><br/>
          <strong>&lt;Alert&gt;<br/>
          &nbsp;&nbsp;&lt;template slot="modalbody"&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;선택한 수강강좌의 즐겨찾기를 해제 하시겠습니까?<br/>
          <strong>&nbsp;&nbsp;&lt;/template&gt;<br/>
          &nbsp;&nbsp;&lt;template slot="modalfooter"&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="btnM line"&gt;취소&lt;/button&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="btnM"&gt;확인&lt;/button&gt;<br/>
          <strong>&nbsp;&nbsp;&lt;/template&gt;<br/>
          &lt;/Alert&gt;</strong><br/><br/>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage_02.png`)" alt="" style="border:1px solid #999" />
        </td>
        <td>
          &lt;div class="basicNoty"&gt;&lt;p&gt;중양정렬인 경우입니다.&lt;/p&gt;&lt;/div&gt; <br/><br/>
          &lt;div class="leftTxtNoty"&gt;<br/>
          &nbsp;&nbsp;&lt;p&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;strong&gt;좌측 정렬 타이틀&lt;/strong&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;좌측 정렬인 경우 입니다.<br/>
          &nbsp;&nbsp;&lt;/p&gt;<br/>
          &lt;/div&gt;
        </td>
      </tr>
    </tbody>
  </table>
  <p style="margin-top:10px;">
    레이어 팝업의 경우, 제일 상위의 태그인 &lt;Popup&gt; 에 class를 추가해 각각의 스타일을 css로 처리합니다.<br/>
    각 팝업에서 &lt;template slot="modalheader"&gt; 상단 영역의 태그가 생략될 경우엔 &lt;div class="modalheader"&gt; 영역의 높이를 css로 삭제해야 하며 <br/>
    &lt;template slot="modalfooter"&gt; 하단 영역은 태그 자체로 생략 가능하며 css 수정은 필요 없습니다.
  </p>
  <table class="mkTable" style="margin-top:10px;">
    <tbody>
      <tr>
        <th>Layer 팝업 기본</th>
        <th>적용 사례 1</th>
        <th>적용 사례 2</th>
      </tr>
      <tr>
        <td style="padding-right:20px;">
          파일위치 : /views/include/Popup.vue<br/><br/>
          &lt;transition name="modal"&gt;<br/>
          &nbsp;&nbsp;&lt;div class="modalDim"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="modalWrapper"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="modalContainer"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="modalheader"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&lt;slot name="modalheader" class="modalheader"&gt;&lt;/slot&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="modalbody"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&lt;slot name="modalbody"&gt; default body &lt;/slot&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>&lt;slot class="modalfooter" name="modalfooter"&gt;&lt;/slot&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/transition&gt;
        </td>
        <td style="padding-right:20px;">
          파일위치 : /views/mylec/OnlinePlayer.vue<br/><br/>
          &lt;Popup class="large lecReAddPopup retakeCase"&gt;<br/>
          <strong>&nbsp;&nbsp;&lt;template slot="modalheader"&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;재수강 신청&lt;/h1&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;재수강 신청은 신청시기에 따라서 할인율에 변동이 있습니다.<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;em&gt;수강종료 후 30일 이내에는 50% 할인, 수강종료...&lt;/em&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="modalClose"&gt;close&lt;/button&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          <strong>&nbsp;&nbsp;&lt;/template&gt;<br/>
          &nbsp;&nbsp;&lt;template slot="modalbody"&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;PopupReAddRetake /&gt;<br/>
          <strong>&nbsp;&nbsp;&lt;/template&gt;<br/>
          &nbsp;&nbsp;&lt;template slot="modalfooter"&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="modalBtn"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="btnL line" &gt;취소&lt;/button&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="btnL redline" &gt;장바구니&lt;/button&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="btnL red" &gt;즉시결제&lt;/button&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          <strong>&nbsp;&nbsp;&lt;/template&gt;</strong><br/>
          &lt;/Popup&gt;<br/><br/>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage_03.png`)" alt="" style="border:1px solid #999" />
        </td>
        <td>
          파일위치 : /views/lecture/TeacherOnline.vue<br/><br/>
          &lt;Popup class="large benefitsPop"&gt;<br/>
          <strong>&nbsp;&nbsp;&lt;template slot="modalheader"&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;&lt;h1&gt;수강혜택&lt;/h1&gt;&lt;/div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class="modalClose"&gt;close&lt;/button&gt;<br/>
          <strong>&nbsp;&nbsp;&lt;/template&gt;</strong><br/>
          <strong>&nbsp;&nbsp;&lt;template slot="modalbody"&gt;</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;중략 ...<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;수강생 선호도 1위, 전타임 조기마감 신화!<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;중략 ...<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          <strong>&nbsp;&nbsp;&lt;/template&gt;</strong><br/>
          &lt;/Popup&gt;<br/><br/>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage_04.png`)" alt="" style="border:1px solid #999" />
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'DocumentPage',
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
table.mkTable tbody td {padding:10px;vertical-align:top;}
table.mkTable a {color:#0006b7;cursor:pointer;text-decoration:underline;}
table.mkTable em {color:#0006b7;}
table.mkTable strong {font-weight:bold;}
p span {font: 12px/1 'dotum';letter-spacing:0;}
</style>
