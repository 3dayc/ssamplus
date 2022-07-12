<template lang="html">
<div class="mkBody">
  <p style="padding-top:20px;">
    본 문서는 KG에듀원 쌤Plus 사용자 화면(이하 홈페이지로 칭함) 마크업 가이드 입니다. <br/>
    마크업 소스는 vue.js를 기반으로 html 코딩되었음을 사전 공지 합니다.<br/><br/>
    또한, 개발소스와 마크업 소스는 브런치로 구분하며, 개발소스 내 남아 있는 마크업 소스는 최신화 안된 버전일 수 있습니다.<br/>
    마크업 소스는 개발 서버 내 "master" 브런치로 접근한 폴더 소스입니다.
  </p>
  <!---->
  <!---->
  <h2>문서타입</h2>
  W3C의 권장 HTML 5 DOCTYPE
  <div class="box">
    &lt;!DOCTYPE html&gt;
  </div>
  <!---->
  <h2>Meta Tag</h2>
  최소 단위만 적용해 놓은 것으로 추후 업데이트 필요
  <div class="box">
    &lt;meta charset="utf-8"&gt;<br/>
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;<br/>
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"&gt;
  </div>
  <!---->
  <h2>기본 해상도</h2>
  <table class="mkTable">
    <tbody>
      <tr>
        <th colspan="2">데스트탑 PC</th><td>1280 × 720</td>
      </tr>
      <tr>
        <th rowspan="2" colspan="2">태블릿</th><td>800 x 1280 : 갤럭시탭 A</td>
      </tr>
      <tr>
        <td>768 x 1024 : iPad</td>
      </tr>
      <tr>
        <th rowspan="5">스마트폰</th>
        <th rowspan="3">iOS</th>
        <td>375 × 812 : iPhone X</td>
      </tr>
      <tr>
        <td>414 × 896 : iPhone XR</td>
      </tr>
      <tr>
        <td>390 × 844 : iPhone 13</td>
      </tr>
      <tr>
        <th rowspan="2">Android</th><td>360 x 640 : 갤럭시 S3</td>
      </tr>
      <tr>
        <td>412 x 915 : 갤럭시 Note 10</td>
      </tr>
    </tbody>
  </table>
  <!---->
  <h2>지원 브라우저</h2>
  <table class="mkTable browsersList">
    <thead>
      <tr>
        <th rowspan="2">구분</th>
        <th colspan="2">window</th>
        <th>mac</th>
        <th colspan="2">Android</th>
        <th>iOS</th>
      </tr>
      <tr>
        <th>Edge</th>
        <th>Chrome</th>
        <th>Safari</th>
        <th>Basic</th>
        <th>Chrome</th>
        <th>Safari</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>지원여부</th>
        <td><img :src="require(`@/views/mkupGuide/images/img_browsersLogo02.png`)" alt="" /></td>
        <td><img :src="require(`@/views/mkupGuide/images/img_browsersLogo03.png`)" alt="" /></td>
        <td><img :src="require(`@/views/mkupGuide/images/img_browsersLogo05.png`)" alt="" /></td>
        <td><img :src="require(`@/views/mkupGuide/images/img_browsersLogo06.png`)" alt="" /></td>
        <td><img :src="require(`@/views/mkupGuide/images/img_browsersLogo07.png`)" alt="" /></td>
        <td><img :src="require(`@/views/mkupGuide/images/img_browsersLogo08.png`)" alt="" /></td>
      </tr>
    </tbody>
  </table>
  <!---->
  <h2>컴포넌트 및 마크업 공통 정의</h2>
  <p>
    홈페이지 Front 화면에서 사용하는 컴포넌트와 마크업 공통 항목들에 대해서 사전 정의한 후 본창 마크업을 진행하였습니다.<br/>
    해당 URL은 <router-link to="/mkup/worklist" target= '_blank'>worklist</router-link>에서도 확인 가능합니다.
  </p>
  <table class="mkTable" style="margin-top:10px;">
    <thead>
      <tr>
        <th colspan="2">구분</th>
        <th>경로</th>
        <th>파일명</th>
        <th>비고</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Component</td>
        <td></td>
        <td><a href="/mkup/uicomponent" target="_blank">/mkup/uicomponent</a></td>
        <td>Uicomponent.vue</td>
        <td>과목 별 컬러 칩, 아이콘, Input 스타일 등 홈페이지 전반적으로 사용하는 컴포넌트 모음</td>
      </tr>
      <tr>
        <td rowspan="3">layout</td>
        <td>레이아웃 템플릿(케이스 별 통합)</td>
        <td><a href="/mkup/layout" target="_blank">/mkup/layout</a></td>
        <td>Layout.vue</a></td>
        <td>메인, 서브, 서브상세 등 레이아웃 템플릿 모음</td>
      </tr>
      <tr>
        <td>목록 템플릿</td>
        <td><a href="/mkup/layoutBbs" target="_blank">/mkup/layoutBbs</a></td>
        <td>LayoutBbs.vue</a></td>
        <td>목록, 상세화면 등 게시판 관련 템플릿 모음</td>
      </tr>
      <tr>
        <td>본문 타이틀 템플릿</td>
        <td><a href="/mkup/layoutTitle" target="_blank">/mkup/layoutTitle</a></td>
        <td>LayoutTitle.vue</a></td>
        <td>본문에서 사용하는 타이틀을 종류 별로 모음</td>
      </tr>
      <tr>
        <td>차트 샘플</td>
        <td></td>
        <td><a href="/mkup/chartSample" target="_blank">/mkup/chartSample</a></td>
        <td>ChartSample.vue</a></td>
        <td>홈페이지에서 사용하고 있는 eChart 샘플</td>
      </tr>
      <tr>
        <td>에러</td>
        <td></td>
        <td><a href="/mkup/error" target="_blank">/mkup/error</a></td>
        <td>Error.vue</td>
        <td>공통으로 사용하는 에러페이지 (404 Case)</td>
      </tr>
      <tr>
        <td>로딩</td>
        <td></td>
        <td><a href="/mkup/loading" target="_blank">/mkup/loading</a></td>
        <td>Loading.vue</td>
        <td>공통으로 사용하는 로딩으로 화면 full size로 적용</td>
      </tr>
    </tbody>
  </table>
  <!---->
  <h2>로컬 서버 실행 및 배포방법</h2>
  <p>
    <span>* 본 실행은 로컬에서 node.js 및 scss 랜더링 셋팅이 이미 완료된 상태임을 전제로 안내합니다.</span> <br/>
    1. application.scss 랜더링하여 application.min.css 현행화 함. (단일 css일 경우 생략 가능) <br/>
    2. 서버로컬 실행 시 cmd 화면에서 npm run serve 명령어 실행<br/>
    <img :src="require(`@/views/mkupGuide/images/img_basicPage_01.png`)" alt="" /><br/>
    3. 배포시 cmd 화면에서 npm run build 명령어로 빌드하여 SFTP tool 통해 서버에 배포<br/>
    <img :src="require(`@/views/mkupGuide/images/img_basicPage_02.png`)" alt="" style="vertical-align:top"/>
    <img :src="require(`@/views/mkupGuide/images/img_basicPage_03.png`)" alt="" />
  </p>
  <!---->
</div>
</template>

<script>
export default {
  name: 'BasicPage',
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
.mkBody sup {width:auto;height:auto;color:#0006b7;text-indent:inherit;vertical-align:initial;background:none;}
.mkBody sup:before {display:none;}
.mkBody a {color:#0006b7;cursor:pointer;text-decoration:underline;}
table.mkTable {border-collapse:collapse;}
table.mkTable * {font: 12px/1 'dotum';letter-spacing:0;}
table.mkTable th,
table.mkTable td {padding:0.5rem;vertical-align:middle;box-sizing:border-box;border:1px solid #ddd;}
table.mkTable thead th {color:#3a3a3a;background:#f0f0f1;}
table.mkTable tbody th {background:#efefef;}
table.mkTable tbody td {padding:7px;vertical-align:top;}
table.mkTable a {color:#0006b7;cursor:pointer;text-decoration:underline;}
table.mkTable em {color:#0006b7;}
table.mkTable strong {font-weight:bold;}
.browsersList td {width:60px;text-align:center;}
.browsersList img {width:30px;}
.browsersList .notYet img {opacity:.1;}
p span {font: 12px/1 'dotum';letter-spacing:0;}
</style>
