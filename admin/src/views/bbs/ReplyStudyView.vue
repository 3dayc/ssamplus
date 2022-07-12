<template lang="html">
  <div>
    <div class="pageTit">
			<h2>스터디하실래요</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/replyReview">답변게시판</router-link><router-link to="/mkup/bbs/replyStudy">스터디하실래요</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="replyStudyView">
        <!--설정-->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/replyStudy" class="btnList">목록으로</router-link>
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
              <tr>
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
                <td>홍*동(hon***)</td>
                <th>작성일</th>
                <td>2021-06-01</td>
              </tr>
              <tr>
                <th>스터디 과목</th>
                <td>미술</td>
                <th>구분</th>
                <td>오프라인</td>
              </tr>
              <tr>
                <th>지역</th>
                <td>서울시 마포구 상암동</td>
                <th>요일</th>
                <td>월,수,금</td>
              </tr>
              <tr>
                <th>시간</th>
                <td>협의</td>
                <th>인원</th>
                <td>2명</td>
              </tr>
              <tr>
                <th>성별</th>
                <td>무관</td>
                <th>마감 여부</th>
                <td>모집 중</td>
              </tr>
              <tr>
                <th>제목</th>
                <td colspan="3">짝스터디 구해요</td>
              </tr>
              <tr>
                <th>내용</th>
                <td colspan="3" class="h94 vTop">
                  - 연락처 또는 카카오톡 ID : hhhh00<br/>
                  - 스터디 내용 :<br/>
                    1.강의가 올라오는 매주 월,수,금 오후 11:59까지 강의 수강 인증. 1분이라도 늦으면 지각 처리<br/>
                    2.복습 인증(백지인출) 평일 매일 오후 11:59까지<br/><br/>
                  강의 밀리지 않고 열심히 같이 으쌰으쌰할 짝스터디 구합니다.
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
                    <li><strong>[2021-02-23 15:35  / 홍길동(mjpark111) ]</strong> 노출여부 변경 </li>
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 노출여부 변경 </li>
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
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'ReplyStudyView',
  data() {
    return {
      replyTab: 0,
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
