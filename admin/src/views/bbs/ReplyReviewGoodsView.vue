<template lang="html">
  <div>
    <div class="pageTit">
			<h2>교재도서</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/replyReview">답변게시판</router-link><router-link to="/mkup/bbs/replyReview">백퍼후기</router-link><router-link to="/mkup/bbs/replyReview">교재도서</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="ReplyReviewGoodsView">
        <!--설정-->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/replyReview" class="btnList">목록으로</router-link>
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
                <td>
                  <span class="checkSet">
                    <input type="checkbox" checked="checked" id="showSts01">
                    <label for="showSts01"><i></i>게시물 노출</label>
                  </span>
                </td>
                <th>BEST</th>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" checked="checked" id="check01">
                    <label for="check01"><i></i>BEST 설정</label>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//설정-->
        <!--내용-->
        <div class="subTit"><h3>내용</h3></div>
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
                <th>과목/선생님</th>
                <td>교육학 l 김현</td>
                <th>교재명</th>
                <td>키위교육학(기초)</td>
              </tr>
              <tr>
                <th>제목</th>
                <td colspan="3">키위 교육학 교재 추천합니다.</td>
              </tr>
              <tr>
                <th>첨부파일</th>
                <td colspan="3">
                  <ul class="fileList">
                    <li><span><a href="#" download>교재사진1.png</a></span></li>
                    <li><span><a href="#" download>교재사진2.png</a></span></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td colspan="3" class="h94 vTop">교육학 강좌를 김현 선생님 강좌로 듣고 있어서 교재도 구매했습니다. 강좌에 담겨 있지 않은 소소한 팁이 교재에는 담겨있어서 좋네요.<br/>여러분도 키위 교육학 교재 구매하시고 작은 팁 하나라도 놓치지 않고 공부하셨으면 좋겠습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//내용-->
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
        <router-link to="/mkup/bbs/replyReview" class="btnM green">삭제</router-link>
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
  name: 'ReplyReviewGoodsView',
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
