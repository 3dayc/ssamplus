<template lang="html">
  <div>
    <div class="pageTit">
			<h2>수강후기</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/replyReview">답변게시판</router-link><router-link to="/mkup/bbs/replyReview">백퍼후기</router-link><router-link to="/mkup/bbs/replyReview">수강후기</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="ReplyReviewCourseView">
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
        <div class="tvs tlsFixed">
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
                <th>강좌</th>
                <td><p class="ellipsis01">[21 3~4월]<br/>상반기 쌤팩(교육학)</p></td>
                <th>과목/선생님</th>
                <td>교육학 l 김현</td>
              </tr>
              <tr>
                <th>제목</th>
                <td colspan="3">김현 선생님 수강 후기입니다.</td>
              </tr>
              <tr>
                <th>첨부파일</th>
                <td colspan="3">
                  <ul class="fileList">
                    <li><span><a href="#" download>김현선생님.png</a></span></li>
                    <li><span><a href="#" download>교육학공부.jpg</a></span></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td colspan="3" class="h94 vTop">많은 강좌 중에 어떤 강좌를 선택해야 할지 고민이 많았습니다. 지인의 추천으로 김현 선생님의 강좌를 듣기로 하였고 그 중에서도 혜택이 많은 쌤팩을 선택하였습니다. 1년 동안 선생님과 함께 공부하면서 울기도 많이 울고 힘도 많이 받으며 공부했던 것 같습니다. 혼자서 공부하는 임용 준비생이라면 김현 선생님 강좌를 적극 추천 드립니다. 부드럽지만 강하게 진행되는 강의를 들으면서 집중도 잘 되고 나약해지면 안 된다고 스스로 계속 생각하며 공부할 수 있습니다. 선생님이 들어주는 예시들과 공부 팁들이 큰 도움이 됩니다.</td>
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
  name: 'ReplyReviewCourseView',
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
