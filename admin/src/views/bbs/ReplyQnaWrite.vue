<template lang="html">
  <div>
    <div class="pageTit">
			<h2>학습Q&amp;A</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/replyReview">답변게시판</router-link><router-link to="/mkup/bbs/replyQna">학습Q&amp;A</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="replyQnaView">
        <!--회원이 등록한 영역-->
        <div class="subTit">
          <h3>학습 Q&amp;A</h3>
          <span class="right">
            <router-link to="/mkup/bbs/replyQna" class="btnList">목록으로</router-link>
            <router-link to="/mkup/bbs/replyQna/view" class="btnM green ml10">저장</router-link>
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
                <td>김*민(Jim****)</td>
                <th>작성일</th>
                <td>2021-05-25</td>
              </tr>
              <tr>
                <th>과목</th>
                <td>교육학</td>
                <th>선생님 / 강좌</th>
                <td>김현 l 교직논술 및 서술식 답안지 작성 방법</td>
              </tr>
              <tr>
                <th>제목</th>
                <td colspan="3">정답을 적을 답지는 없나요?</td>
              </tr>
              <tr>
                <th>첨부파일</th>
                <td colspan="3">
                  <ul class="fileList">
                    <li><span><a href="#" download>신간교재 목차 정리.PDF</a></span></li>
                    <li><span><a href="#" download>부록_마음을 열어주는 가비국어.PDF</a></span></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td colspan="3" class="h94 vTop">
                  김현 선생님의 교직논술 및 서술식 답안지 작성 방법 강좌를 듣고 있는 수강생입니다. 정답을 적을 답안지는 따로 첨부파일이 없는게 맞나요?
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//회원이 등록한 영역-->
        <!--답변 영역-->
        <div class="subTit"><h3>답변</h3></div>
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
                <th>답변자</th>
                <td>-</td>
                <th>답변일</th>
                <td>-</td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td colspan="3">
                  <textarea class="wFull h10">
                    에디터가 나올 영역입니다
                  </textarea>
                </td>
              </tr>
              <tr>
                <th>파일첨부</th>
                <td colspan="3">
                  <button class="btnS line">+ 파일추가</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//답변 영역-->
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
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//관리-->
        <!-- front URL -->
        <div class="frontUrlInfo mt20">Front URL : <a href="https://ssamplus.com/1advise/123456" target="_blank">https://ssamplus.com/1advise/123456</a></div>
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
        <router-link to="/mkup/bbs/replyQna" class="btnM green">삭제</router-link>
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
  name: 'ReplyQnaWrite',
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
