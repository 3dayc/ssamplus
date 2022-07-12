<template lang="html">
  <div>
    <div class="pageTit">
			<h2>교육계 소식</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><router-link to="/mkup/bbs/infoExam">시험정보</router-link><router-link to="/mkup/bbs/infoExam">교육계 소식</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoExamNewsView">
        <!-- 설정 -->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/infoExam" class="btnList">목록으로</router-link>
            <button class="btnM green ml10">저장</button>
            <button class="btnM line ml10" @click="alertDelete = true">삭제</button>
          </span>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="40%"/>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>작성자</th>
                <td>홍길동</td>
                <th>노출 여부</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1" checked>
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //설정 -->
        <!-- 내용 -->
        <div class="subTit"><h3>내용</h3></div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>출처 URL <sup>필수</sup></th>
                <td><input type="text" value="http://www.cctoday.co.kr/news/articleView.html?idxno=2142959"/></td>
              </tr>
              <tr>
                <th>출처 <sup>필수</sup></th>
                <td><input type="text" value="충청 투데이"/></td>
              </tr>
              <tr>
                <th>제목 <sup>필수</sup></th>
                <td><input type="text" value="학급당 학생수 20명 이하로 법제화 필요"/></td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td>
                  <textarea class="wFull h10">
                    [충청투데이 김중곤 기자] 초등학교 과밀학급을 줄이기 위한 충청권 교육계의 움직임이 지지부진하다는 지적이다.
                    27일 충청권 교육청에 따르면 지난해 기준 학생수가 30명 이상인 초등학교 과밀학급은 대전 94곳, 충남 275곳, 충북 50곳 등으로 집계됐다.
                    일선 교사들은 과밀 학급이 학교 예방과 수업 능률에 부정적인 영향을 일으킨다고 입을 모으고 있다.
                    (이하 생략)
                  </textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //내용 -->
        <!--관리-->
        <div class="subTit"><h3>관리</h3></div>
        <div class="tvs record">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>수정 이력</th>
                <td>
                  <ul class="recordList">
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 출처 변경 </li>
                    <li><strong>[2021-02-23 15:35  / 홍길동(mjpark111) ]</strong> 출처 URL 변경 </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//관리-->
        <!-- front URL -->
        <div class="frontUrlInfo mt20">Front URL : <a href="https://ssamplus.com/edunews/123456" target="_blank">https://ssamplus.com/edunews/123456</a></div>
        <!-- //front URL -->
      </div>
      <!-- //page layout -->
    </article>
    </div>

    <!-- Popup -->
  	<!-- 삭제 확인 -->
  	<Alert v-if='alertDelete' @close="alertDelete = false">
  		<div slot="modalbody">해당 정보를 삭제합니다.<br/>실행 하시겠습니까?</div>
  		<div slot="modalfooter" class="modalfooter">
  			<button class="btnM gray" @click="alertDelete = false">취소</button>
        <router-link to="/mkup/bbs/infoExam" class="btnM green">삭제</router-link>
  		</div>
  	</Alert>
  	<!-- //삭제 확인 -->
  	<!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'infoExamNewsView',
  data() {
    return {
      alertDelete: false,
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
