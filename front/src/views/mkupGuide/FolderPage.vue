<template lang="html">
<div class="mkBody">
  <p style="padding-top:20px;">
    마크업과 관련된 모든 폴더 및 파일에 대한 구성도 이며, 마크업 단계에서 사용하지 않는 폴더는 안내를 생략하였습니다.
  </p>
  <!---->
  <h2>폴더 구조</h2>
  <table class="mkTable" style="width:100%;">
    <colgroup>
      <col span="5" width="100" />
      <col ="*" />
    </colgroup>
    <thead>
      <tr>
        <th>1Depth</th>
        <th>2Depth</th>
        <th>3Depth</th>
        <th>4Depth</th>
        <th>파일 및 폴더</th>
        <th>비고</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>node_modules</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>npm으로 설치되는 서드파트 라이브러리들이 모여 있는 디렉토리<br/>마크업 단계에서 플러그인 Install 시 본 폴더에 설치 됨</td>
      </tr>
      <tr>
        <td>public</td>
        <td></td>
        <td></td>
        <td></td>
        <td>favicon.ico<br/>index.html</td>
        <td>파비콘이 위치<br/>실제 화면이 표기되는 파일로 메타태그 설정</td>
      </tr>
      <tr>
        <td rowspan="12">src</td>
        <td></td>
        <td></td>
        <td></td>
        <td>App.vue</td>
        <td>가장 최상위 컴포넌트<br/>화면 레이아웃을 구성하는 파일로, 공통 구성요소 및 모바일 분리등을 선언함<br/><em>설정 파일로 하단에 상세기술 <sup>1)</sup></em></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>main.js</td>
        <td>가장 먼저 실행되는 javascript 파일. Vue 인스턴스를 생성하는 역활함. <br/>플러그인, 라우터 등 스크립트를 불러옴</td>
      </tr>
      <tr>
        <td rowspan="5">assets</td>
        <td>css</td>
        <td></td>
        <td></td>
        <td>scss와 css 파일 모음. <em>scss Tab에서 상세 기술</em></td>
      </tr>
      <tr>
        <td>font</td>
        <td></td>
        <td></td>
        <td>사이트 내 이용 웹폰트 모음</td>
      </tr>
      <tr>
        <td rowspan="3">images</td>
        <td></td>
        <td></td>
        <td>PC 및 모바일 공통 이미지 모음</td>
      </tr>
      <tr>
        <td>m</td>
        <td></td>
        <td>모바일 전용 이미지 모음</td>
      </tr>
      <tr>
        <td>thumbnail</td>
        <td></td>
        <td>관리자에서 등록하는 이미지 샘플 모음</td>
      </tr>
      <tr>
        <td rowspan="2">plugins</td>
        <td></td>
        <td></td>
        <td></td>
        <td>플러그인 선언 js 모음<br/>(실제 리소스는 "node_modules" 폴더에 있으며, 각각의 플러그인을 불러오는 역할을 하는 js)</td>
      </tr>
      <tr>
        <td>mixins</td>
        <td></td>
        <td>Mixins.js</td>
        <td><strong>마크업에서 필요한</strong> 공통 영역 및 팝업 include외 스크립트를 선언하는 파일<br/>추후 본창 마크업 시 해당 js를 import 시켜 사용함</td>
      </tr>
      <tr>
        <td rowspan="2">router</td>
        <td></td>
        <td></td>
        <td></td>
        <td>본 프로젝트의 이동경로를 선언하는 파일 모음</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>mkRoutes.js</td>
        <td>마크업에서 사용하는 이동경로를 선언하는 파일. <strong>개발화면과는 별도로 운영됨</strong><br/><em>설정 파일로 하단에 상세기술 <sup>2)</sup></em></td>
      </tr>
      <tr>
        <td>views</td>
        <td></td>
        <td></td>
        <td></td>
        <td>마크업 소스 파일 모음. <strong>개발과는 별도로 운영됨</strong><br/><router-link to="/mkup/worklist" target= '_blank'>worklist에서 상세기술</router-link></td>
      </tr>
    </tbody>
  </table>
  <!---->
  <h2>설정 파일 상세</h2>
  App.vue <sup>1)</sup>
  <div class="box" style="margin-bottom:30px;">
    <img :src="require(`@/views/mkupGuide/images/img_folderPage01.png`)" alt="" class="left" /> &nbsp;&nbsp;&nbsp;
    <img :src="require(`@/views/mkupGuide/images/img_folderPage02.png`)" alt="" />
  </div>
  mkRoutes.js <sup>2)</sup>
  <div class="box">
    <img :src="require(`@/views/mkupGuide/images/img_folderPage03.png`)" alt="" />
  </div>
</div>
</template>

<script>
export default {
  name: 'FolderPage',
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
.mkBody sup {position:relative;width:auto;height:auto;color:#0006b7;text-indent:inherit;vertical-align:initial;background:none;}
.mkBody sup:before {display:none;}
table.mkTable {border-collapse:collapse;}
table.mkTable * {font: 12px/1.5 'dotum';letter-spacing:0;}
table.mkTable th,
table.mkTable td {padding:2px 0.5rem;vertical-align:middle;box-sizing:border-box;border:1px solid #ddd;}
table.mkTable thead th {color:#3a3a3a;background:#f0f0f1;}
table.mkTable tbody th {background:#efefef;}
table.mkTable a {color:#0006b7;cursor:pointer;text-decoration:underline;}
table.mkTable em {color:#0006b7;}
table.mkTable strong {font-weight:bold;}
</style>
