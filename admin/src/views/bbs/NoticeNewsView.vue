<template lang="html">
  <div>
    <div class="pageTit">
			<h2>공지사항</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/noticeNews">공지게시판</router-link><router-link to="/mkup/bbs/noticeNews">공지사항</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="noticeNewsView">
        <!-- 설정 -->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/noticeNews" class="btnList">목록으로</router-link>
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
                <th>구분 <sup>필수</sup></th>
                <td>
                  <span class="selectSet mr5">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                      <option value="" selected>일반</option>
                      <option value="">전공</option>
                    </select>
                  </span>
                  <!--상위에서 전공 선택 시 -->
                  <span class="selectSet mr5" style="display:none;">
                    <select name="" id="">
                      <option value="no" class="label">과목</option>
                    </select>
                  </span>
                  <span class="selectSet" style="display:none;">
                    <select name="" id="">
                      <option value="no" class="label">선생님</option>
                      <option value="">일반</option>
                    </select>
                  </span>
                  <!--//상위에서 전공 선택 시 -->
                </td>
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
              <tr>
                <th>상단 고정</th>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" checked/>
                    <label for=""><i></i>상단에 고정함</label>
                  </span>
                </td>
                <th>메인 출력</th>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" checked/>
                    <label for=""><i></i>PC</label>
                  </span>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>모바일</label>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //설정 -->
        <!-- 내용 -->
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
                <td><input type="text" value="[재도전 응원] 연간쌤팩, 3월 신규강의 할인 혜택"/></td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td>
                  <textarea class="wFull h10">
                    안녕하세요.
                    교사의 꿈을 위한 수험 동반자,
                    KG에듀원 교원임용 희소/쌤플러스 입니다.

                    희소의 강의가 처음이라면?
                    신규 회원도, 기존 회원도, 첫 구매는 누구든지!
                    첫 구매 학습지원 이벤트!
                  </textarea>
                </td>
              </tr>
              <tr>
                <th>파일첨부</th>
                <td>
                  <button class="btnS line">+ 파일추가</button>
                  <ul class="fileList writeCase">
                    <li><span><a href="#" download>로그인에러1.png</a><button class="btnDelete ml5">삭제</button></span></li>
                  </ul>
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
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong>   제목 변경</li>
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong>   BEST설정 변경</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//관리-->
        <!-- front URL -->
        <div class="frontUrlInfo mt20">Front URL : <a href="https://ssamplus.com/review/123456" target="_blank">https://ssamplus.com/review/123456</a></div>
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
        <router-link to="/mkup/bbs/noticeNews" class="btnM green">삭제</router-link>
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
  name: 'NoticeNewsView',
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
