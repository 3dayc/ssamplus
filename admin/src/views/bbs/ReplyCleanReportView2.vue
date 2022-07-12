<template lang="html">
  <div>
    <div class="pageTit">
			<h2>신고 목록</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/replyReview">답변게시판</router-link><router-link to="/mkup/bbs/replyClean">쌤Plus 클린존</router-link><router-link to="/mkup/bbs/replyClean/report">신고 목록</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="replyCleanReportView">
        <!--설정-->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <button class="btnM green ml10">저장</button>
            <router-link to="./" class="btnM ml10">취소</router-link>
            <button class="btnM line ml10" @click="alertDelete = true">삭제</button>
          </span>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>처리여부</th>
                <td colspan="3">
                  <span class="radioSet">
                    <input type="radio" name="radio1" id="radio11" />
                    <label for="radio11"><i></i>처리 중</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="radio1" id="radio12" checked />
                    <label for="radio12"><i></i>처리 완료</label>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//설정-->
        <!--내용-->
        <div class="subTit"><h3>상담 내용</h3></div>
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
                <th>신고자</th>
                <td>김지민(Jimin0123) / 010-0000-0000</td>
                <th>작성일</th>
                <td>2021-05-25</td>
              </tr>
              <tr>
                <th>구분</th>
                <td>개인</td>
                <th>과목/선생님</th>
                <td>김현/키위교육학</td>
              </tr>
              <tr>
                <th>제목</th>
                <td>김현 선생님 불법수강 신고합니다.</td>
                <th>개별상담</th>
                <td>요청</td>
              </tr>
              <tr>
                <th>첨부파일</th>
                <td colspan="3">
                  <ul class="fileList">
                    <li><span><a href="#" download>불법신고자료.png</a></span></li>
                    <li><span><a href="#" download>불법공유신고자료.jpg</a></span></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td colspan="3" class="h94 vTop">
                  번개장터에서 불법 공유 하고 있네요.<br/>
                  판매 완료한 건도 있고 지금도 판매중인 강좌가 있습니다.<br/>
                  빠른 조치 부탁드립니다.
                </td>
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
                <th>메모</th>
                <td>
                  <span class="ipBtn sizeM">
                    <input type="text" />
                    <button class="btnM line">저장</button>
                  </span>
                  <ul class="recordList">
                    <li><strong>[2021-02-23 15:35  / 홍길동 ]</strong>   불법 사용자와 연락함 <button class="btnDelete">삭제</button></li>
                    <li><strong>[2021-02-23 15:35  / 박미진 ]</strong>   개별상담 건으로 신고자와 연락 완료함.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>수정 이력</th>
                <td>
                  <ul class="recordList">
                    <li><strong>[2021-02-23 15:35  / 홍길동(mjpark111) ]</strong> 파일첨부 변경 </li>
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 내용 변경 </li>
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
        <router-link to="/mkup/bbs/replyClean" class="btnM green">삭제</router-link>
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
  name: 'ReplyCleanReportView2',
  data() {
    return {
      date: new Date(),
      alertDelete: false,
    }
  },
  methods: {
    
  },
  components: {
  }
}
</script>
