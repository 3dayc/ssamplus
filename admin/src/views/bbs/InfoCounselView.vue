<template lang="html">
  <div>
    <div class="pageTit">
			<h2>상담센터 공지</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><router-link to="/mkup/bbs/infoCounsel">상담센터 공지</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoCounselView">
        <!-- 설정 -->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/infoCounsel" class="btnList">목록으로</router-link>
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
                <th>상단 고정</th>
                <td>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>상단에 고정함</label>
                  </span>
                </td>
                <th>노출 여부</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1" checked/>
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
        <!-- 공지 내용 -->
        <div class="subTit"><h3>공지 내용</h3></div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>제목 <sup>필수</sup></th>
                <td><input type="text" value="6월 무이자 할부 안내"/></td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td>
                  <textarea class="wFull h10">
                  안녕하세요.
                  교사의 꿈을 위한 수험동반자
                  KG에듀원 교원임용 희소/쌤플러스 입니다.
                  </textarea>
                </td>
              </tr>
              <tr>
                <th>파일첨부</th>
                <td>
                  <button class="btnS line">+ 파일추가</button>
                  <ul class="fileList writeCase">
                    <li><span><a href="#" download>무이자할부안내_01.png</a><button class="btnDelete ml5">삭제</button></span></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //공지 내용 -->
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
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 상단 고정 변경 </li>
                    <li><strong>[2021-02-23 15:35  / 홍길동(mjpark111) ]</strong> 노출여부 변경 </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//관리-->
        <!-- front URL -->
        <div class="frontUrlInfo mt20">Front URL : <a href="https://ssamplus.com/centernotice/123456" target="_blank">https://ssamplus.com/centernotice/123456</a></div>
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
        <router-link to="/mkup/bbs/infoCounsel" class="btnM green">삭제</router-link>
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
  name: 'infoCounselView',
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
