<template lang="html">
  <div>
    <div class="pageTit">
			<h2>명단 공개</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/replyReview">답변게시판</router-link><router-link to="/mkup/bbs/replyClean">쌤Plus 클린존</router-link><router-link to="/mkup/bbs/replyClean/fixed">명단 공개</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="replyCleanFixedView">
        <!--설정-->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/replyClean" class="btnList">목록으로</router-link>
            <button class="btnM green ml10">저장</button>
            <button class="btnM line ml10" @click="alertDelete = true">삭제</button>
          </span>
        </div class="subTit">
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
                <td>홍길동(hong123)</td>
                <th>노출 여부</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle10" checked />
                    <label for="toggle10">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//설정->
        <!--내용-->
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
                <td colspan="3"><input type="text" class="wFull" value="[유아 배지윤]1~2월 강의 연간 쌤팩 지금 전환!"/></td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td>
                  <textarea class="wFull h10">
                    에디터가 나올 영역입니다
                  </textarea>
                </td>
              </tr>
              <tr>
                <th>파일첨부</th>
                <td>
                  <button class="btnS line">+ 파일추가</button>
                  <ul class="fileList writeCase">
                    <li><span><a href="#" download>불법공유자명단.csv</a><button class="btnDelete ml5">삭제</button></span></li>
                  </ul>
                  <div class="tls w150 mt20 cleanList">
                    <table>
                      <colgroup>
                        <col width="*"/>
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">이름/아이디</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>김*수<br/>(kas****)</td>
                        </tr>
                        <tr>
                          <td>김*수<br/>(kas****)</td>
                        </tr>
                        <tr>
                          <td>김*수<br/>(kas****)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
                <th>수정 이력</th>
                <td>
                  <ul class="recordList">
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 제목 변경 </li>
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 파일첨부 변경 </li>
                  </ul>
                </td>
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
  name: 'ReplyCleanFixedView',
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
