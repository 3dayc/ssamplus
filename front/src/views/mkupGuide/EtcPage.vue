<template lang="html">
  <div class="mkBody">
    <!---->
    <!-- <h2>이벤트 운영</h2>
    <p>
      Full 이벤트, 리얼적중과 같이 고정화면이 아닌 유동성 화면의 경우, 관련 images / css 파일을 별도로 관리합니다.
    </p>
    <table class="mkTable" style="margin-top:10px;">
      <thead>
        <tr>
          <th>폴더구조</th>
          <th>미리보기</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img :src="require(`@/views/mkupGuide/images/img_etcPage_01.png`)" alt="" style="margin-top:10px;" /></td>
          <td>
            <br/>
            마크업 진행 시 로컬에서 확인할때마다 mkRoutes.js 에 추가가 아닌 하기의 파일에서 경로만 수정해 주도록 합니다.<br/><br/>
            미리보기 URL : <a href="/mkup/eventPreview" target="_blank">/mkup/eventPreview</a> <br/>
            파일 위치 : /views/EventPreview.vue</a> <br/><br/>
            <img :src="require(`@/views/mkupGuide/images/img_etcPage_02.png`)" alt="" />
          </td>
        </tr>
      </tbody>
    </table> -->
    <!---->
    <h2>이벤트 운영</h2>
    <p>
      Full 이벤트, 리얼적중과 같이 고정화면이 아닌 유동성 화면의 경우, 관련 html / images / css 파일을 별도로 관리합니다.
    </p>
    <table class="mkTable" style="margin-top:10px;">
      <thead>
        <tr>
          <th>폴더구조</th>
          <th>미리보기</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img :src="require(`@/views/mkupGuide/images/img_etcPage_01.png`)" alt="" style="margin-top:10px;" /></td>
          <td>
            <br/>
            Public 내 이벤트 관련 소스를 등록합니다. 해당 소스는 vue.js에 영향을 받지 않습니다.
            <br/>해당 파일의 경로는 root/event/~ 로 직접 생성합니다.<br/>
            또한, 별도 소스 빌드 및 배포는 하지 않으며, FTP 등을 이용하여 소스 업데이트가 되도록 합니다.
            <br/><br/>
            현재 이벤트 운영과 관련된 사항은 개발진행 후 변경될 수 있습니다.<br/>
          </td>
        </tr>
      </tbody>
    </table>
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
.mkBody sup {position:relative;width:auto;height:auto;color:#0006b7;text-indent:inherit;vertical-align:initial;background:none;}
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
