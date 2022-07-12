<template lang="html">
  <div>
    <div class="pageTit">
			<h2>리얼 적중</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/noticeNews">선생님 게시판</router-link><router-link to="/mkup/bbs/teacherRealHit">리얼 적중</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="teacherRealHitView">
        <!-- 기본 설정 -->
        <div class="subTit">
          <h3>기본 설정</h3>
          <div class="right">
            <button class="btnPreview">미리보기</button>
            <button class="btnM green ml10">저장</button>
            <router-link to="/mkup/bbs/teacherRealHit" class="btnM ml10">취소</router-link>
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
                <td>교육학  |  윤중샘</td>
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
                  <button class="btnS line">선생님 이미지</button>
                  <span class="uploadMulty ml10">
                    <span class="fileChoice" v-show="showFileChoice">
                      <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                      <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                    </span>
                    <span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete">삭제</button></span>
                  </span>
                </td>
                <th>리스트 문구 <sup>필수</sup></th>
                <td><input type="text" class="wFull" value="최단시간, 최대효율! <br> 교육학 점수가 샘솟는 샘표 비결!"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //기본 설정 -->
        <!-- 리얼적중 목록 -->
        <div class="subTit">
          <h3>리얼적중 목록</h3>
          <span class="right">
            <button class="btnAdd" @click="BbsTeacherRealHitWrite();">신규등록</button>
          </span>
        </div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="100"/>
              <col width="80"/>
              <col width="400"/>
              <col width="300"/>
              <col width="80"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead>
              <tr>
                <th>노출 여부</th>
                <th>연도</th>
                <th>제목</th>
                <th>등록방법</th>
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
                <td>2021</td>
                <td class="tL"><a @click="BbsTeacherRealHitView();">2021 윤중샘 교육학 논술 적중</a></td>
                <td class="tL">본 창 열림 (Full-page)</td>
                <td>1,500</td>
                <td>2021-07-25</td>
                <td><button class="btnS line">삭제</button></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push3" />
                    <label for="push3">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2021</td>
                <td class="tL"><a @click="BbsTeacherRealHitView();">2021 윤중샘 교육학 논술 적중</a></td>
                <td class="tL">본 창 열림 (iframe)</td>
                <td>32</td>
                <td>2021-06-20</td>
                <td><button class="btnS line">삭제</button></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push4" />
                    <label for="push4">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2020</td>
                <td class="tL"><a @click="BbsTeacherRealHitView();">2021 윤중샘 교육학 논술 적중</a></td>
                <td class="tL">에디터 등록</td>
                <td>1</td>
                <td>2021-05-19</td>
                <td><button class="btnS line">삭제</button></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push5" />
                    <label for="push5">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2019</td>
                <td class="tL"><a @click="BbsTeacherRealHitView();">2021 윤중샘 교육학 논술 적중</a></td>
                <td class="tL">본 창 열림 (Full-page)</td>
                <td>333</td>
                <td>2021-04-15</td>
                <td><button class="btnS line">삭제</button></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push6" />
                    <label for="push6">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2018</td>
                <td class="tL"><a @click="BbsTeacherRealHitView();">2021 윤중샘 교육학 논술 적중</a></td>
                <td class="tL">본 창 열림 (iframe)</td>
                <td>1,500</td>
                <td>2021-03-13</td>
                <td><button class="btnS line">삭제</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //리얼적중 목록 -->
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
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'TeacherRealHitView',
  data() {
    return {
      multyFuleName: '윤중샘_기본이미지.png',
      showFileChoice: false,
      showFileModify: true,
    }
  },
  methods: {
    BbsTeacherRealHitWrite() {
      let routeData = this.$router.resolve({name: 'BbsTeacherRealHitWrite', query: {data: "someData"}});
      window.open('/mkup/windowPopup/BbsTeacherRealHit/write', '_blank', `width=1100,height=900`);
    },
    BbsTeacherRealHitView() {
      let routeData = this.$router.resolve({name: 'BbsTeacherRealHitView', query: {data: "someData"}});
      window.open('/mkup/windowPopup/BbsTeacherRealHit/view', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  },
}
</script>

<style lang="css" scoped>
</style>
