<template lang="html">
<div class="mkBody">
  <p style="padding-top:20px;">
    Front에서 사용하는 유동적인 이미지들의 사이즈를 정의합니다. 권장 사이즈 비율에 맞춰 변경 가능합니다.<br/>
    사용하지 않는 경우 - 표기를 하였으며, 모바일의 경우 별도 표기한 사이즈는 실제 보이는 사이즈의 2배 입니다.
  </p>
  <table class="mkTable" style="margin-top:10px;">
  <thead>
    <tr>
      <th rowspan="2" width="180">구분</th>
      <th rowspan="2" width="180">1depth</th>
      <th rowspan="2" width="180">2depth</th>
      <th colspan="2">PC</th>
      <th colspan="2">Mobile</th>
    </tr>
    <tr>
      <th width="180">컨텐츠</th>
      <th width="180">추가 썸네일</th>
      <th width="180">컨텐츠</th>
      <th width="180">추가 썸네일</th>
    </tr>
  </thead>
<tbody>
  <tr>
    <th rowspan="4">대표 이미지</th>
    <td>선생님 이미지</td>
    <td>기본 정보</td>
    <td>(대표) 180 X 180<br/>
    (선생님 홈) 660 X 690<br/>
    (선생님 홈 슬로건) 441 X 360<br/>
    (아이콘 대) ?? X ??<br/>
    (아이콘 중) ?? X ??<br/>
    (아이콘 소) ?? X ??</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>교재</td>
    <td>-</td>
    <td>180 X 248</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>학습기기</td>
    <td>-</td>
    <td>360 X 360</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>굿즈</td>
    <td>-</td>
    <td>360 X 360</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <th rowspan="12">메뉴 별 썸네일</th>
    <td rowspan="5">수강신청</td>
    <td>선생님 목록</td>
    <td>210 X 260</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>좌측 학습전략설명회</td>
    <td>(1X1) 100 X 100<br/>
    (1X2) 100 X 200<br/>
    (1X3) 100 X 300"</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>좌측 3단 배너</td>
    <td>100 X 100</td>
    <td>-</td>
    <td>285 X 180</td>
    <td>-</td>
  </tr>
  <tr>
    <td>강의 맛보기  (영상 썸네일)</td>
    <td>394 X 222 (900 X 507)</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>중간 띠배너</td>
    <td>1920 X 180</td>
    <td>-</td>
    <td>828 X 160</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="3">선생님 스폐셜</td>
    <td>선생님 이벤트</td>
    <td>535 X 230</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>선생님 인터뷰</td>
    <td>400 X 360</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>리얼 적중</td>
    <td>260 X 260</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>이벤트</td>
    <td></td>
    <td>535 X 230</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>임용컬럼</td>
    <td></td>
    <td>540 X 370</td>
    <td>-</td>
    <td>PC 공통사용</td>
    <td>PC 공통사용</td>
  </tr>
  <tr>
    <td rowspan="2">합격수기 & 인터뷰</td>
    <td>선생님</td>
    <td>450 X 420</td>
    <td>400 X 360</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>합격자 인터뷰</td>
    <td>693 X 395</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <th rowspan="30">배너</th>
    <td rowspan="6">인트로</td>
    <td>로그인</td>
    <td>1600 X 520</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>이벤트</td>
    <td>820 X 410</td>
    <td>190 X 240</td>
    <td>856 X 752</td>
    <td>190 X 240</td>
  </tr>
  <tr>
    <td>합격수기</td>
    <td>693 X 395</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>설명회</td>
    <td>640 X 365</td>
    <td>198 × 178</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>리얼적중</td>
    <td>560 X 315</td>
    <td>198 × 178</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>맞춤전략</td>
    <td>(배경) 970 X 810<br/>
    (글자) 450 X 123</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>로그인 광고</td>
    <td>우측배너</td>
    <td>550 X 700</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="11">메인 화면</td>
    <td>레이어 팝업</td>
    <td>465 X 580</td>
    <td>-</td>
    <td>828 X 1546</td>
    <td>-</td>
  </tr>
  <tr>
    <td>메인배너</td>
    <td>1100 X 400</td>
    <td>-</td>
    <td>856 X 480</td>
    <td>-</td>
  </tr>
  <tr>
    <td>좌측광고</td>
    <td>(1X1) 100 X 100<br/>
    (1X2) 100 X 200<br/>
    (1X3) 100 X 300</td>
    <td>-</td>
    <td>854 X 240</td>
    <td>-</td>
  </tr>
  <tr>
    <td>게시판 옆 광고</td>
    <td>280 X 280</td>
    <td>-</td>
    <td>856 X 260</td>
    <td>-</td>
  </tr>
  <tr>
    <td>중간 띠 배너(1)</td>
    <td>(배너) 550 X 120<br/>
    (배경) 1500 X 120</td>
    <td>-</td>
    <td>854 X 240</td>
    <td>-</td>
  </tr>
  <tr>
    <td>선생님 영역</td>
    <td>510 X 678</td>
    <td>160 X 160</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>선생님 영역 게시판</td>
    <td>260 X 150</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>중간 띠 배너(2)</td>
    <td>1280 X 236</td>
    <td>-</td>
    <td>856 X 288</td>
    <td>-</td>
  </tr>
  <tr>
    <td>추천 컨텐츠</td>
    <td>204 X 201</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td>추천 컨텐츠 첫번째</td>
    <td>428 X 332</td>
    <td>-</td>
    <td>PC 공통사용</td>
    <td>-</td>
  </tr>
  <tr>
    <td>리얼적중</td>
    <td>90 X 90</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
  </tr>
  <tr>
    <td rowspan="6">쌤몰</td>
    <td>홈 메인배너</td>
    <td>1600 X 417</td>
    <td>-</td>
    <td>828 X 500</td>
    <td>-</td>
  </tr>
  <tr>
    <td>홈 좌측광고</td>
    <td>(1X1) 100 X 100<br/>
    (1X2) 100 X 200<br/>
    (1X3) 100 X 300</td>
    <td>-</td>
    <td>636 X 180</td>
    <td>-</td>
  </tr>
  <tr>
    <td>홈 중간띠배너</td>
    <td>1920 X 180</td>
    <td>-</td>
    <td>828 X 160</td>
    <td>-</td>
  </tr>
  <tr>
    <td>검색결과 좌측광고</td>
    <td>(1X1) 100 X 100<br/>
    (1X2) 100 X 200<br/>
    (1X3) 100 X 300</td>
    <td>-</td>
    <td>636 X 180</td>
    <td>-</td>
  </tr>
  <tr>
    <td>교재도서 목록 상단배너</td>
    <td>1600 X 180</td>
    <td>-</td>
    <td>828 X 200</td>
    <td>-</td>
  </tr>
  <tr>
    <td>학습기기 목록 상단배너</td>
    <td>1600 X 180</td>
    <td>-</td>
    <td>828 X 200</td>
    <td>-</td>
  </tr>
  <tr>
    <td>선생님 스페셜</td>
    <td>홈 인터뷰</td>
    <td>350 X 197</td>
    <td>-</td>
    <td colspan="2">PC 공통사용</td>
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
