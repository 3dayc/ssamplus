<template lang="html">
  <div>
    <div class="pageTit">
			<h2>시험 공고</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><router-link to="/mkup/bbs/infoExam">시험정보</router-link><router-link to="/mkup/bbs/infoExam">시험 공고</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoExamTestView">
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
                <th>지역 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                      <option value="">종합</option>
                      <option value="" selected>서울</option>
                      <option value="">경기</option>
                      <option value="">인천</option>
                      <option value="">세종</option>
                      <option value="">부산</option>
                      <option value="">대전</option>
                      <option value="">대구</option>
                      <option value="">울산</option>
                      <option value="">강원</option>
                      <option value="">충북</option>
                      <option value="">충남</option>
                      <option value="">경북</option>
                      <option value="">경남</option>
                      <option value="">전북</option>
                      <option value="">전남</option>
                      <option value="">제주</option>
                      <option value="">광주</option>
                    </select>
                  </span>
                </td>
                <th>상단 고정 <sup>필수</sup></th>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" />
                    <label for=""><i></i>상단에 고정함</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>노출 여부</th>
                <td colspan="3">
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1">
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
        <!-- 공고내용 -->
        <div class="subTit"><h3>공고내용</h3></div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>제목 <sup>필수</sup></th>
                <td><input type="text" value="2021학년도 공립 유아 교사 임용 최종 합격자 안내"/></td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td>
                  <textarea class="wFull h10">
                  안녕하세요.
                  교사의 꿈을 위한 수험 동반자,
                  KG 에듀원 교원 임용 희소 쌤플러스 입니다.

                  2021학년도 공립 중등(특수)교사 최종 합격선 현황을 첨부합니다.

                  최종합격인원
                  -일반 : 6,747명
                  -장애 : 119명
                  -지역 : 56명

                  최종합격하신 모든 분들 진심으로 축하 드립니다.
                  상세 내용을 첨부파일을 확인하시기 바랍니다.
                  </textarea>
                </td>
              </tr>
              <tr>
                <th>파일첨부</th>
                <td>
                  <button class="btnS line">+ 파일추가</button>
                  <ul class="fileList writeCase">
                    <li><span><a href="#" download>합격자안내.pdf</a><button class="btnDelete ml5">삭제</button></span></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //공고내용 -->
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
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 제목 변경 </li>
                    <li><strong>[2021-02-23 15:35  / 홍길동(mjpark111) ]</strong> 파일첨부 변경 </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//관리-->
        <!-- front URL -->
        <div class="frontUrlInfo mt20">Front URL : <a href="https://ssamplus.com/testnotice/123456" target="_blank">https://ssamplus.com/testnotice/123456</a></div>
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
  name: 'infoExamTestView',
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
