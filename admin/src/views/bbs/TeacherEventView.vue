<template lang="html">
  <div>
    <div class="pageTit">
			<h2>선생님 이벤트</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/noticeNews">선생님 게시판</router-link><router-link to="/mkup/bbs/teacherEvent">선생님 이벤트</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="teacherEventWrite">
        <!-- 기본 설정 -->
        <div class="subTit">
          <h3>기본 설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/teacherEvent" class="btnList">목록으로</router-link>
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
                <th>리스트 이미지 <sup>필수</sup></th>
                <td>
                  <span class="uploadMulty">
                    <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" style="display:none;"/><em>등록된 이미지가 없습니다.</em></span>
                    <span class="fileChoice" v-show="showFileChoice">
                      <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                      <em>* 권장 이미지 사이즈: 535 X 230</em>
                    </span>
                    <span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete">삭제</button></span>
                  </span>
                </td>
                  <th>과목/선생님 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">과목</option>
                      <option value="">교육학</option>
                      <option value="">논술면접</option>
                      <option value="">한국사</option>
                      <option value="" selected>유아</option>
                    </select>
                  </span>
                  <span class="selectSet ml10">
                    <select name="" id="">
                      <option value="no" class="label">선생님</option>
                      <option value="" selected>배지윤</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <th>이벤트 기간 <sup>필수</sup></th>
                <td>
                  <VCalendar class="calSet dupCal mr10" v-model="range" is-range color="green">
                    <template v-slot="{ inputValue, togglePopover, isDragging }">
                      <input :value="inputValue.start + ' ~ ' + inputValue.end" :class="isDragging ? 'text-green-600' : 'text-green-900'" @click="togglePopover()" placeholder="시작일 선택 ~ 종료일 선택" />
                    </template>
                  </Vcalendar>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>종료일 미정</label>
                  </span>
                </td>
                <th>노출 여부</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1" checked>
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //기본 설정 -->
        <!-- 이벤트 내용 -->
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
                <td><input type="text" value="첫 구매 학습지원 이벤트"/></td>
              </tr>
              <tr>
                <th>등록 방법 <sup>필수</sup></th>
                <td>
                  <div class="landingType">
                    <span class="radioSet">
                      <input type="radio" name="registWay" v-model="registWay" id="registWay1" value="fullPage" checked/>
                      <label for="registWay1"><i></i>본 창 열림(Full-page)</label>
                    </span>
                    <span class="radioSet">
                      <input type="radio" name="registWay" v-model="registWay" id="registWay2" value="iframe"/>
                      <label for="registWay2"><i></i>본 창 열림(iframe)</label>
                    </span>
                    <span class="radioSet">
                      <input type="radio" name="registWay" v-model="registWay" id="registWay3" value="editer"/>
                      <label for="registWay3"><i></i>에디터 등록</label>
                    </span>
                    <div class="mt10">
                      <template v-if="registWay == 'fullPage' || registWay == 'iframe'">
                        <div class="urlSet">
                          <span>http://ssamplus.com/</span>
                          <input type="text" placeholder="url path 입력" value="/inc/fullsize/251462.do"/>
                        </div>
                      </template>
                      <template v-if="registWay == 'editer'">
                        <textarea class="wFull h10">
                          안녕하세요.
                          교사의 꿈을 위한 수험 동반자,
                          KG에듀원 교원임용 희소/쌤플러스 입니다.

                          희소의 강의가 처음이라면?
                          신규 회원도, 기존 회원도, 첫 구매는 누구든지!
                          첫 구매 학습지원 이벤트!
                        </textarea>
                      </template>
                    </div>
                  </div>
                </td>
              </tr>
              <template v-if="registWay == 'editer'">
                <tr>
                  <th>파일첨부</th>
                  <td>
                    <button class="btnS line">+ 파일추가</button>
                    <ul class="fileList writeCase">
                      <li><span><a href="#" download>선생님이벤트.png</a><button class="btnDelete ml5">삭제</button></span></li>
                    </ul>
                  </td>
                </tr>
              </template>
              <tr>
                <th>이벤트 관리페이지</th>
                <td><input type="text" placeholder="url path 입력" value="https://ssamplus.com/event_12qwer32y"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //이벤트 내용 -->
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
        <div class="frontUrlInfo mt20">Front URL : <a href="https://ssamplus.com/teacherevent/123456" target="_blank">https://ssamplus.com/teacherevent/123456</a></div>
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
        <router-link to="/mkup/bbs/teacherEvent" class="btnM green">삭제</router-link>
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
  name: 'TeacherEventWrite',
  data() {
    return {
      registWay: 'editor',
      showFileChoice: false,
      showFileModify: true,
      multyFuleName: 'Event_image_01.png',
      alertDelete: false,
      registWay: 'fullPage',
      range: {
          start: new Date(),
          end: new Date(),
        },
    }
  },
  methods: {
    fileUpload(event) {
      this.fileName = event.target.value;
    }, // 파일 업로드
    uploadMulty(event) {
      this.multyFuleName = event.target.value;
      this.showFileChoice = false;
      this.showFileModify = true;
    }, // 파일 업로드2
  },
  components: {
  },
}
</script>

<style lang="css" scoped>
</style>
