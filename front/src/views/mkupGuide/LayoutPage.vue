<template lang="html">
<div class="mkBody">
  <p style="padding-top:20px;">
    App.vue 및 views 폴더 내 .vue 파일의 마크업 진행 시 기본 구조로 정의되는 레이아웃 입니다. <br/>
    본 구조는 각 Case 별로 정의한 것으로 만약, 제 3의 구조가 필요할 경우 추가 정의를 권장합니다. <br/>
    홈페이지의 마크업 기본은 PC를 기준으로 합니다.
  </p>
  <h2>APP 화면 정의 : app.vue 기준</h2>
  <p>
    App.vue	파일에서 정의하는 공통으로 &lt;router-view :key="$route.path"/&gt; 에 해당하는 본창영역을 제외한 레이아웃을 정의합니다.
  </p>
  <table class="mkTable" style="margin-top:20px;">
    <tbody>
      <tr>
        <th colspan="2">PC 기본</th>
        <th colspan="2">모바일 기본</th>
      </tr>
      <tr>
        <td>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage01.png`)" alt="" class="left" />
        </td>
        <td style="padding-right:20px;">
          <img :src="require(`@/views/mkupGuide/images/img_documentPage01_sc.png`)" alt="" class="left" />
        </td>
        <td>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage02.png`)" alt="" class="left" />
        </td>
        <td>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage02_sc.png`)" alt="" class="left" />
        </td>
      </tr>
    </tbody>
  </table>
  <h2>기본 레이아웃</h2>
  <p>
    메뉴 별 디자인 및 성격에 따라 레이아웃 Case를 분기하였습니다. 각 화면은 &lt;div class="content"&gt; 내에서 상세 마크업을 진행합니다.<br/>
    상세내용을 제외한 레이아웃 소스만 모아놓은 템플릿은 <router-link to="/mkup/layoutDecument" target= '_blank'>이곳 (layoutDecument)</router-link>을 클릭하세요.
  </p>
  <table class="mkTable" style="margin-top:20px;">
    <tbody>
      <tr>
        <th colspan="2">서브메인 일 경우</th>
        <th colspan="2">2Depth 서브 메뉴가 없을 경우</th>
      </tr>
      <tr>
        <td>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage03.png`)" alt="" class="left" />
        </td>
        <td style="padding-right:20px;">
          <img :src="require(`@/views/mkupGuide/images/img_documentPage03_sc.png`)" alt="" class="left" />
        </td>
        <td>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage04.png`)" alt="" class="left" />
        </td>
        <td>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage04_sc.png`)" alt="" class="left" />
        </td>
      </tr>
      <tr>
        <th colspan="2">2Depth 서브 메뉴가 본창에 있는 경우</th>
        <th colspan="2">2Depth 서브 메뉴가 왼쪽에 붙어있는 경우</th>
      </tr>
      <tr>
        <td>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage05.png`)" alt="" class="left" />
        </td>
        <td style="padding-right:20px;">
          <img :src="require(`@/views/mkupGuide/images/img_documentPage05_sc.png`)" alt="" class="left" />
        </td>
        <td>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage06.png`)" alt="" class="left" />
        </td>
        <td>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage06_sc.png`)" alt="" class="left" />
        </td>
      </tr>
      <tr>
        <th colspan="2">상단 배너 및 검색영역이 있는 경우 (상단 배너는 Case에 따라 class가 다르게 적용됨)</th>
        <th colspan="2"></th>
      </tr>
      <tr>
        <td>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage07.png`)" alt="" class="left" />
        </td>
        <td style="padding-right:20px;">
          <img :src="require(`@/views/mkupGuide/images/img_documentPage07_sc.png`)" alt="" class="left" />
        </td>
        <td colspan="2"></td>
      </tr>
    </tbody>
  </table>
  <h2>Mobile버전 기본 레이아웃</h2>
  <p>
    PC 버전 전용 소스를 뺀 레이아웃 샘플입니다. <br/>
    화면 접근 URL이 디바이스 버전과 상관없이 같이 사용하고 있어서 실제 마크업 소스에서는 PC과 Mobile 버전이 혼용되어 있습니다.
  </p>
  <table class="mkTable" style="margin-top:20px;">
    <tbody>
      <tr>
        <th colspan="2">서브메인 & 목록 등 카테고리 이동일 경우</th>
        <th colspan="2">서브화면의 상세일 경우</th>
      </tr>
      <tr>
        <td>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage08.png`)" alt="" class="left" />
        </td>
        <td style="padding-right:20px;">
          <img :src="require(`@/views/mkupGuide/images/img_documentPage08_sc.png`)" alt="" class="left" />
        </td>
        <td>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage09.png`)" alt="" class="left" />
        </td>
        <td>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage09_sc.png`)" alt="" class="left" />
        </td>
      </tr>
      <tr>
        <th colspan="2">상단 배너 및 검색영역이 있는 경우</th>
        <th colspan="2"></th>
      </tr>
      <tr>
        <td>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage10.png`)" alt="" class="left" />
        </td>
        <td style="padding-right:20px;">
          <img :src="require(`@/views/mkupGuide/images/img_documentPage10_sc.png`)" alt="" class="left" />
        </td>
        <td colspan="2"></td>
      </tr>
    </tbody>
  </table>
  <h2>PC & Mobile 분기가 없는 본창 레이아웃</h2>
  <p>
    App.vue	파일에서 조건없은 레이아웃인 경우( &lt;router-view /&gt;)는 마크업 .vue 파일에서는 공통이 아닌 각 화면 별로 별도 레이아웃으로 진행합니다.
  </p>
  <table class="mkTable" style="margin-top:20px;">
    <tbody>
      <tr>
        <th>인트로</th>
        <th>메인화면</th>
        <th>로그인, 회원가입</th>
      </tr>
      <tr>
        <td style="padding-right:20px;">
          <img :src="require(`@/views/mkupGuide/images/img_documentPage11.png`)" alt="" class="left" />
        </td>
        <td style="padding-right:20px;">
          <img :src="require(`@/views/mkupGuide/images/img_documentPage12.png`)" alt="" class="left" />
        </td>
        <td>
          <img :src="require(`@/views/mkupGuide/images/img_documentPage13.png`)" alt="" class="left" />
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'LayoutPage',
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
table.mkTable * {font: 12px/1.5 'dotum';letter-spacing:0;}
table.mkTable th,
table.mkTable td {padding:2px 0.5rem;vertical-align:middle;box-sizing:border-box;border:1px solid #ddd;}
table.mkTable thead th {color:#3a3a3a;background:#f0f0f1;}
table.mkTable tbody th {background:#efefef;}
table.mkTable tbody td {padding:10px;vertical-align:top;}
table.mkTable a {color:#0006b7;cursor:pointer;text-decoration:underline;}
table.mkTable em {color:#0006b7;}
table.mkTable strong {font-weight:bold;}
</style>
