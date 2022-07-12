<template lang="html">
  <div>
    <div class="pageTit">
			<h2>선생님 인터뷰</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/noticeNews">선생님 게시판</router-link><router-link to="/mkup/bbs/teacherInterview">선생님 인터뷰</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="teacherInterviewView">
        <!-- 기본 설정 -->
        <div class="subTit">
          <h3>기본 설정</h3>
          <div class="right">
            <button class="btnPreview">미리보기</button>
            <button class="btnM green ml10">저장</button>
            <router-link to="/mkup/bbs/teacherInterview" class="btnM ml10">취소</router-link>
          </div>
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
                <th>과목/선생님 <sup>필수</sup></th>
                <td>유아  |  배지윤</td>
                <th>노출여부</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1"/>
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>선생님 이미지 <sup>필수</sup></th>
                <td>
                  <button class="btnS line" @click="SiteTeacherImage()">선생님 이미지</button>
                  <span class="uploadMulty ml10">
                    <span class="fileChoice" v-show="showFileChoice">
                      <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                      <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                    </span>
                    <span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete">삭제</button></span>
                  </span>
                </td>
                <th>리스트 문구 <sup>필수</sup></th>
                <td><input type="text" class="wFull" value="결과가 다른 시작, <br> 기대한다면 합격예감!"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //기본 설정 -->
        <!-- 인터뷰 목록 -->
        <div class="subTit">
          <h3>인터뷰 목록</h3>
          <span class="right">
            <p class="infoMsg fGreen">* 선생님 인터뷰는 페이지 (링크)로만 등록하며, 본 창 (iframe) 형식으로 표시됨</p>
          </span>
        </div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="100"/>
              <col width="400"/>
              <col width="300"/>
              <col width="80"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead>
              <tr>
                <th>노출 여부</th>
                <th>제목</th>
                <th>링크<br/>*http://ssamplus.com 이하 입력</th>
                <th>조회수</th>
                <th>작성일</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push2" checked/>
                    <label for="push2">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">2021 상반기 유아 배지윤 인터뷰</td>
                <td class="tL">/inc/fullsize/251462.do</td>
                <td>1,500</td>
                <td>2021-07-25</td>
                <td><button class="btnS line">삭제</button></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push3"/>
                    <label for="push3">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">2021 상반기 유아 배지윤 인터뷰</td>
                <td class="tL">/inc/fullsize/251462.do</td>
                <td>32</td>
                <td>2021-06-20</td>
                <td><button class="btnS line">삭제</button></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push4"/>
                    <label for="push4">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">2021 상반기 유아 배지윤 인터뷰</td>
                <td class="tL">/inc/fullsize/251462.do</td>
                <td>1</td>
                <td>2021-06-20</td>
                <td><button class="btnS line">삭제</button></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push5"/>
                    <label for="push5">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">2021 상반기 유아 배지윤 인터뷰</td>
                <td class="tL">/inc/fullsize/251462.do</td>
                <td>333</td>
                <td>2021-06-20</td>
                <td><button class="btnS line">삭제</button></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push6"/>
                    <label for="push6">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">2021 상반기 유아 배지윤 인터뷰</td>
                <td class="tL">/inc/fullsize/251462.do</td>
                <td>1,500</td>
                <td>2021-06-20</td>
                <td><button class="btnS line">삭제</button></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push7"/>
                    <label for="push7">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL"><input type="text"/></td>
                <td class="tL"><input type="text"/></td>
                <td>-</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr>
                <td colspan="6"><button class="btnS blueline wFull">+ 행 추가</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //인터뷰 목록 -->
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
                    <li><strong>[2021-02-23 15:35  / 홍길동(mjpark111) ]</strong> 제목 변경 </li>
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 파일정보 변경 </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//관리-->
        <!-- front URL -->
        <div class="frontUrlInfo mt20">Front URL : <a href="https://ssamplus.com/teacher_interview/123456" target="_blank">https://ssamplus.com/teacher_interview/123456</a></div>
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
        <router-link to="/mkup/bbs/teacherInterview" class="btnM green">삭제</router-link>
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
  name: 'TeacherInterviewView',
  data() {
    return {
      alertDelete: false,
      multyFuleName: '배지윤_기본이미지.png',
      showFileChoice: false,
      showFileModify: true,
    }
  },
  methods: {
    SiteTeacherImage() {
      let routeData = this.$router.resolve({name: 'SiteTeacherImage', query: {data: "someData"}});
      window.open('/mkup/windowPopup/siteTeacherImage', '_blank', `width=570,height=750`);
    }, // 선생님 이미지 팝업
  },
  components: {
  },
}
</script>

<style lang="css" scoped>
</style>
