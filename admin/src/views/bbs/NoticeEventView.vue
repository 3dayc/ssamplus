<template lang="html">
  <div>
    <div class="pageTit">
			<h2>이벤트</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/noticeNews">공지게시판</router-link><router-link to="/mkup/bbs/infoExam">이벤트</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="noticeEventCollectView">
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
                <th>노출 여부</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1">
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
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
                <th>당첨자 발표일 <sup>필수</sup></th>
                <td>
                  <VCalendar class="calSet mr10" v-model="date" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                    </template>
                  </VCalendar>
                  <span class="checkSet">
                    <input type="checkbox"/>
                    <label for=""><i></i>종료 시</label>
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
                <td><input type="text" value="첫 구매 학습지원 이벤트"/></td>
              </tr>
              <tr>
                <th>등록 방법 <sup>필수</sup></th>
                <td>
                  <span class="radioSet">
                    <input type="radio" value="url" name="registWay" id="registWay2" @change="registWayTrigger($event)" checked/>
                    <label for="registWay2"><i></i>본 창 열림(Full-page)</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" value="url2" name="registWay" id="registWay3" @change="registWayTrigger($event)"/>
                    <label for="registWay3"><i></i>본 창 열림(iframe)</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" value="editor" name="registWay" id="registWay1" @change="registWayTrigger($event)"/>
                    <label for="registWay1"><i></i>에디터</label>
                  </span>
                  <div v-if="registWay == 'url'">
                    <div class="mt10">
                      https://ssamplus.com/<input type="text" class="wHalf ml10" value="/inc/fullsize/251462.do" />
                    </div>
                  </div>
                  <div v-if="registWay == 'url2'">
                    <div class="mt10">
                      https://ssamplus.com/<input type="text" class="wHalf ml10" value="/inc/fullsize/251462.do"/>
                    </div>
                  </div>
                  <div v-if="registWay == 'editor'">
                    <textarea class="wFull h10 mt10">
                      에디터가 나올 영역입니다
                    </textarea>
                  </div>
                </td>
              </tr>
              <tr v-if="registWay == 'editor'">
                <th>파일첨부</th>
                <td>
                  <button class="btnS line">+ 파일추가</button>
                  <ul class="fileList writeCase">
                    <li><span><a href="#" download>이벤트1.pdf</a><button class="btnDelete ml5">삭제</button></span></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>이벤트 관리페이지</th>
                <td><input type="text" value="https://ssamplus.com/event_12qwer32y"/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //내용 -->
        <!-- 당첨자 발표 -->
        <div class="subTit">
          <h3>당첨자 발표</h3>
          <span class="labelToggleSet ml5">
            <input type="checkbox" id="push2">
            <label for="push2">
              <span>숨김</span>
              <span>노출</span>
            </label>
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
                <th>제목 <sup>필수</sup></th>
                <td><input type="text" value="첫 구매 학습지원 이벤트"/></td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td>
                  <div>
                    <textarea class="wFull h10 mt10">
                      에디터가 나올 영역입니다
                    </textarea>
                  </div>
                </td>
              </tr>
              <tr>
                <th>파일첨부</th>
                <td>
                  <button class="btnS line">+ 파일추가</button>
                  <div class="fRed mt5">※csv 파일만 등록 가능합니다.</div>
                  <ul class="fileList writeCase">
                    <li><span><a href="#" download>당첨자발표.csv</a><button class="btnDelete ml5">삭제</button></span></li>
                  </ul>
                  <div class="tls w60p mt20">
                    <table>
                      <colgroup>
                        <col width="90">
                        <col width="100">
                        <col width="120">
                        <col width="180">
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">번호</th>
                          <th scope="col">이름</th>
                          <th scope="col">아이디</th>
                          <th scope="col">경품</th>
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
                          <td>맑고 건전한 눈 케어(투레인)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //당첨자 발표 -->
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
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong>   제목 변경</li>
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong>   BEST설정 변경</li>
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
  name: 'NoticeEventCollectWrite',
  data() {
    return {
      registWay: 'url',
      showFileChoice: false,
      showFileModify: true,
      multyFuleName: 'Event_image_01.png',
      alertDelete: false,
      date: '2020-03-03',
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
    registWayTrigger(event) {
      let optionText = event.target.value;
      this.registWay = optionText;
    },
  },
  components: {
  },
}
</script>

<style lang="css" scoped>
</style>
