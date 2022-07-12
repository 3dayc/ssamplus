<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>1:1 상담-선생님</h1>
      <span class="btnArea"><button class="btnPrint">인쇄</button></span>
    </div>
    <div class="winContent">
      <!-- 상담일정 -->
      <div class="subStatusBox gridSet">
        <div class="gridItem">
          <ul class="half fourCase pt0">
            <li><em>상담일자 :</em> <strong>2021-05-30</strong></li>
            <li><em>상담시간 :</em> <strong>15:00~16:00</strong></li>
            <li><em>상담 유형 :</em> <strong>전화</strong></li>
            <li><em>신청 선생님 :</em> <strong>박노송</strong></li>
          </ul>
        </div>
      </div>
      <!-- //상담일정 -->
      <!-- 상담 내용 -->
      <div class="contentsBox">
        <div class="tvs">
          <table>
            <colgroup>
              <col width="100"/>
              <col width="40%"/>
              <col width="100"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">내담자</th>
                <td>김지민(Jimin0123) l 010-0000-0000</td>
                <th scope="row">상담 과목</th>
                <td>중국어</td>
              </tr>
              <tr>
                <th scope="row">학교/학과</th>
                <td>서울대학교 | 중국어교육학과 | 졸업생</td>
                <th scope="row">재학유무</th>
                <td>재학생  |  2학년</td>
              </tr>
              <tr>
                <th scope="row">한국사자격증</th>
                <td>취득</td>
                <th scope="row">임용 응시 횟수</th>
                <td>3회</td>
              </tr>
              <tr>
                <th scope="row">내용</th>
                <td colspan="3">
                  안녕하세요!<br/>
                  저는 3월부터 늦게 임고의 길로 뛰어든 27살 김지민이라고 합니다.<br/>
                  가정 사정상 강의를 듣지 못하고 배지윤 강사님의 아테나 교재로 개각론을 독학 중이며, 논술도 기출 자료를 다운 받아 독학 중이랍니다..<br/>
                  초수인데 독학으로 공부를 하려니 정보도 부족하고 걱정되는 점이 많아 1:1 상담을 신청합니다.<br/>배지윤 강사님을 만나뵐 수 없더라도 직접 학원에 방문하여 분위기도 느껴보고, 환경의 영향도 간접적으로나마 받아볼 수 있다면 저의 임고 생활에 도움이 될 수 있을 것 같아 신청해요<br/>정말 너무너무 궁금한 점이 많네요<br/>그럼 오늘도 좋은 하루 되시고 19일에 봽기를 기약합니다.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 수강이력 -->
      <h3 class="subTit"><strong>수강이력</strong></h3>
      <div class="tls">
        <table>
          <colgroup>
            <col width="130">
            <col width="130">
            <col width="*">
            <col width="230">
          </colgroup>
          <thead>
            <tr>
              <th>과목</th>
              <th>선생님</th>
              <th>강좌명</th>
              <th>결제금액<br/><span class="fRed">*10만원 이상 결제 건만 표시됩니다</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>국어</td>
              <td>박노송</td>
              <td class="tL">[21 1~6월]<br/>상반기 쌤팩(문학)</td>
              <td>950,000원</td>
            </tr>
            <tr>
              <td>국어</td>
              <td>박노송</td>
              <td class="tL">[21 3~4월]<em class="iSet yellow">제작중</em><br/>국어교육론 실전대비과정3</td>
              <td>240,000원</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //수강이력 -->
      <!-- 학원 안내 -->
      <div class="contentsBox acPlaceBox">
        <ul>
          <li>
            <span class="name"><span>이데아</span></span>
            <span>서울특별시 동작구 노량진로 146 이데아빌딩 4층</span>
          </li>
          <li>
            <span class="name"><span>아이비</span></span>
            <span>서울특별시 동작구 장승배기로 171 아이비빌딩 5층</span>
          </li>
        </ul>
        <span class="companyInfo">KG에듀원 교원임용 희소/쌤플러스 <a href="www.ssamplus.com">www.ssamplus.com</a> 1544-0678</span>
      </div>
      <!-- //학원 안내 -->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'BbsCounselPrintTeacher',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
