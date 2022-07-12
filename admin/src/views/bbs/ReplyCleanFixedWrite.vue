<template lang="html">
  <div>
    <div class="pageTit">
			<h2>명단 공개</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/replyReview">답변게시판</router-link><router-link to="/mkup/bbs/replyClean">쌤Plus 클린존</router-link><router-link to="/mkup/bbs/replyClean/fixed">명단 공개</router-link><em>신규등록</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="replyCleanFixedWrite">
        <!--설정-->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/replyClean/fixed" class="btnM green ml10">저장</router-link>
            <router-link to="./" class="btnM ml10">취소</router-link>
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
                <td>홍길동</td>
                <th>노출 여부</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle10"  />
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
        <!--//설정-->
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
                <td colspan="3"><input type="text" class="wFull"/></td>
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
                  <p class="erMsg pd0">※ csv 파일만 등록 가능합니다.</p>
                  <!-- <ul class="fileList writeCase">
                    <li><span><a href="#" download>불법공유자명단.csv</a><button class="btnDelete ml5">삭제</button></span></li>
                  </ul> -->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//내용-->
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
  name: 'ReplyCleanFixedWrite',
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
