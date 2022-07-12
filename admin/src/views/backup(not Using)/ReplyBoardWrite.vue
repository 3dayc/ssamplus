<template lang="html">
  <div>
    <div class="pageTit">
			<h2>1:1 게시판상담</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/replyReview">답변게시판</router-link><router-link to="/mkup/bbs/replyBoard">1:1 게시판상담</router-link><em>신규등록</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="replyBoardView">
        <!--상담 내용-->
        <div class="subTit">
          <h3>상담 내용</h3>
          <span class="right">
            <router-link to="./view" class="btnM green">저장</router-link>
            <router-link to="./" class="btnM ml10">취소</router-link>
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
                <th>유형 1</th>
                <td>회원/로그인</td>
                <th>유형 2</th>
                <td>회원가입</td>
              </tr>
              <tr>
                <th>제목</th>
                <td>크롬에서 로그인이 안 됩니다.</td>
                <th>SMS 안내</th>
                <td>요청</td>
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
                <td colspan="3" class="h94 vTop">인터넷 익스플로러에서는 로그인이 되지만, 주로 쓰는 크롬에서 로그인이 되지 않습니다.로그인을 하면 자꾸 튕겨서 되어지지 않습니다. 모의고사도 신청해야 하는데 해결해주시면 감사드리겠습니다</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//상담 내용-->
        <!--상담 내용-->
        <div class="subTit"><h3>답변</h3></div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
              <col width="90"/>
            </colgroup>
            <tbody>
              <tr>
                <th>빠른 답변</th>
                <td class="selectCase">
                  <span class="saveBox"><input type="checkbox" id="quick1"><label for="quick1">기본정보</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick2"><label for="quick2">인쇄횟수</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick3"><label for="quick3">동시접속</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick4"><label for="quick4">보충강의</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick5"><label for="quick5">직/인강 변경</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick6"><label for="quick6">보충강의 신청</label><button>닫기</button></span>
                  <span class="saveBox"><input type="checkbox" id="quick7"><label for="quick7">취소일정</label><button>닫기</button></span>
                </td>
                <td><button class="btnS line" @click="BbsBasicReply()">기본 답변</button></td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td colspan="3">
                  <textarea class="wFull h10">
                    에디터가 나올 영역입니다
                  </textarea><br/><br/>
                </td>
              </tr>
              <tr>
                <th>파일첨부</th>
                <td colspan="3">
                  <button class="btnS line">+ 파일추가</button>
                  <ul class="fileList writeCase" style="display:none;">
                    <li><span><a href="#" download>신간교재 목차 정리.PDF</a><button class="btnDelete ml5">삭제</button></span></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//답변-->
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
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong>   제목 변경 </li>
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong>   BEST설정 변경 </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//관리-->
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
  name: 'ReplyBoardView',
  data() {
    return {
      alertDelete: false,
    }
  },
  methods: {
    BbsBasicReply() {
      let routeData = this.$router.resolve({name: 'BbsBasicReply', query: {data: "someData"}});
      window.open('/mkup/windowPopup/bbsBasicReply', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  }
}
</script>
