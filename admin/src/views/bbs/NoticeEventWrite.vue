<template lang="html">
  <div>
    <div class="pageTit">
			<h2>이벤트</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/noticeNews">공지게시판</router-link><router-link to="/mkup/bbs/noticeEvent">이벤트</router-link><em>신규등록</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="noticeEventCollectWrite">
        <!-- 설정 -->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/noticeEvent/view" class="btnM green">저장</router-link>
            <router-link to="/mkup/bbs/noticeEvent" class="btnM ml10">취소</router-link>
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
                <td><input type="text"/></td>
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
                      https://ssamplus.com/<input type="text" class="wHalf ml10"/>
                    </div>
                  </div>
                  <div v-if="registWay == 'url2'">
                    <div class="mt10">
                      https://ssamplus.com/<input type="text" class="wHalf ml10"/>
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
                <td><input type="text" placeholder="url path 입력"/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //내용 -->
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
  name: 'NoticeEventCollectWrite',
  data() {
    return {
      registWay: 'url',
      showFileChoice: true,
      showFileModify: false,
      date: '',
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
