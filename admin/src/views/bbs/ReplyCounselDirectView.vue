<template lang="html">
  <div>
    <div class="pageTit">
			<h2>학원 상담</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/replyReview">답변게시판</router-link><router-link to="/mkup/bbs/replyCounsel">1:1 상담</router-link><router-link to="/mkup/bbs/replyCounsel">학원 상담</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="replyCounselView">
        <!--진행 정보-->
        <div class="subTit">
          <h3>진행 정보</h3>
          <span class="right">
            <button class="btnPrint" @click="BbsCounselPrintDirect()">인쇄</button>
            <router-link to="/mkup/bbs/replyCounsel" class="btnList ml10">목록으로</router-link>
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
                <th>상담자 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                      <option value=""></option>
                    </select>
                  </span>
                </td>
                <th>참석 여부</th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="">참석</option>
                      <option value="">비참석</option>
                      <option value="">취소</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <th>상담 유형</th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="">1:1방문</option>
                      <option value="">전화</option>
                    </select>
                  </span>
                </td>
                <th>상담 장소</th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="">이데아</option>
                      <option value="">아이비</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <th>상담일자</th>
                <td>
                  <VCalendar class="calSet" v-model="date" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                    </template>
                  </VCalendar>
                </td>
                <th>상담시간</th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="">09:00~10:00</option>
                      <option value="">10:00~11:00</option>
                      <option value="">11:00~12:00</option>
                      <option value="">13:00~14:00</option>
                      <option value="">14:00~15:00</option>
                      <option value="">15:00~16:00</option>
                      <option value="">16:00~17:00</option>
                      <option value="">17:00~18:00</option>
                    </select>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//진행 정보-->
        <!--상담 내용-->
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
                <th>내담자</th>
                <td>김지민(Jimin0123) l 010-0000-0000</td>
                <th>상담 과목</th>
                <td>중국어</td>
              </tr>
              <tr>
                <th>학교/학과</th>
                <td>서울대학교  l  중국어교육학과  l  졸업생</td>
                <th>재학유무</th>
                <td>재학생  |  2학년</td>
              </tr>
              <tr>
                <th>한국사자격증</th>
                <td>취득</td>
                <th>임용 응시 횟수</th>
                <td>3회</td>
              </tr>
              <tr>
                <th>내용</th>
                <td colspan="3" class="h94 vTop">
                  안녕하세요!<br/>저는 3월부터 늦게 임고의 길로 뛰어든 27살 김지민이라고합니다<br/>
                  가정 사정상 강의를 듣지 못하고 배지윤 강사님의 아테나 교재로 개각론을 독학 중이며, 논술도 기출 자료를 다운 받아 독학 중이랍니다.
                  <br/>초수인데 독학으로 공부를 하려니 정보도 부족하고 걱정되는 점이 많아 1:1 상담을 신청합니다
                  <br/>배지윤 강사님을 만나뵐 수 없더라도 직접 학원에 방문하여 분위기도 느껴보고, 환경의 영향도 간접적으로나마 받아볼 수 있다면 저의 임고 생활에 도움이 될 수 있을 것 같아 신청해요
                  <br/>정말 너무너무 궁금한 점이 많네요
                  <br/>그럼 오늘도 좋은 하루 되시고 19일에 봽기를 기약합니다
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//상담 내용-->
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
                    <li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 상담완료 <button class="btnDelete">삭제</button></li>
                    <li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 위상팀 선생님들과 전화 상담 가능하도록 직접 전화 상담을 통해서 연결 진행</li>
                  </ul>
                </td>
              </tr>
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
        <router-link to="/mkup/bbs/replyCounsel" class="btnM green">삭제</router-link>
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
  name: 'ReplyCounselDirectView',
  data() {
    return {
      date: new Date(),
      alertDelete: false,
    }
  },
  methods: {
    BbsCounselPrintDirect() {
      let routeData = this.$router.resolve({name: 'BbsCounselPrintDirect', query: {data: "someData"}});
      window.open('/mkup/windowPopup/bbsCounselPrintD', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  }
}
</script>
