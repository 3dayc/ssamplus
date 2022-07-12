<template lang="html">
  <div>
    <div class="pageTit">
			<h2>기출문제</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><router-link to="/mkup/bbs/infoExam">시험정보</router-link><router-link to="/mkup/bbs/infoExam">기출문제</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoExamPastView">
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
                <th>노출 여부</th>
                <td colspan="3">
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1" checked/>
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>연도 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                      <option value="" selected>2021</option>
                      <option value="">2020</option>
                      <option value="">2019</option>
                    </select>
                  </span>
                </td>
                <th>과목 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                      <option value="" selected>국어</option>
                    </select>
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
                <th>제목 <sup>필수</sup></th>
                <td><input type="text" value="2021학년도 교육학 중등 임용시험 1차 시험 문제"/></td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td>
                  <textarea class="wFull h10">
                    안녕하세요~
                    교사의 꿈을 위한 수험 동반자, KG에듀원 교원임용 희소고시학원 쌤플러스 입니다.
                    2021학년도 중등 임용시험 1차 교육학 중등 임용시험 1차 시험 문제 입니다.
                    여러분의 합격을 진심으로 기원합니다.
                  </textarea>
                </td>
              </tr>
              <tr>
                <th>파일첨부</th>
                <td>
                  <button class="btnS line">+ 파일추가</button>
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
        <div class="frontUrlInfo mt20">Front URL : <a href="https://ssamplus.com/samplequestion/123456" target="_blank">https://ssamplus.com/samplequestion/123456</a></div>
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
  name: 'infoExamPastView',
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
