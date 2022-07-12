<template lang="html">
  <div>
    <div class="pageTit">
			<h2>이벤트</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/noticeNews">공지게시판</router-link><router-link to="/mkup/bbs/noticeEvent">이벤트</router-link><router-link to="/mkup/bbs/noticeEvent">당첨자</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="noticeEventWinnerView">
        <!-- 설정 -->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/noticeEvent" class="btnList">목록으로</router-link>
            <button class="btnM green ml10">저장</button>
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
                <th>노출 여부</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="" checked>
                    <label for="">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
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
                <td><input type="text" value="첫 구매 학습지원 이벤트 당첨자"/></td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td>
                  <textarea class="wFull h10">
                    안녕하세요.
                    교사의 꿈을 위한 수험 동반자,
                    KG에듀원 교원임용 희소/쌤플러스 입니다.

                    첫 구매 학습지원 이벤트 당첨자를 공개합니다.
                  </textarea>
                </td>
              </tr>
              <tr>
                <th>파일첨부</th>
                <td>
                  <button class="btnS line">+ 파일추가</button> <em class="fRed ml10">※ csv 파일만 등록 가능합니다.</em>
                  <ul class="fileList writeCase">
                    <li>
                      <span>당첨자발표1.csv</span>
                      <em>
                        <button class="btnDelete">삭제</button>
                      </em>
                    </li>
                  </ul>
                  <div class="tls mt10">
                    <table>
                      <colgroup>
                        <col width="80"/>
                        <col width="150"/>
                        <col width="200"/>
                        <col width="*"/>
                      </colgroup>
                      <thead>
                        <tr>
                          <th>번호</th>
                          <th>이름</th>
                          <th>아이디</th>
                          <th>정품</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>홍*동</td>
                          <td>Asd****</td>
                          <td>배달의 민족 2만원 상품권</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>김*동</td>
                          <td>Qwe****</td>
                          <td>설빙(애플망고치즈설빙)</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>고*동</td>
                          <td>Asd****</td>
                          <td>맑고 건강한 눈 케어(루테인</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 제목 변경 </li>
                    <li><strong>[2021-02-23 15:35  / 홍길동(mjpark111) ]</strong> 파일첨부 변경 </li>
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
        <router-link to="/mkup/bbs/noticeEvent" class="btnM green">삭제</router-link>
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
  name: 'noticeEventWinnerView',
  data() {
    return {
      alertDelete: false,
    }
  },
  methods: {
  },
  components: {
  },
}
</script>

<style lang="css" scoped>
</style>
