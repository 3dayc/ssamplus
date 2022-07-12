<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>첨삭게시판 – 문제 등록</h1>
      <span class="subTit">* 해당 강좌의 첨삭게시판 문제를 등록할 수 있음</span>
      <div class="btnArea">
        <button class="btnM green">등록</button>
        <button class="btnM gray">취소</button>
      </div>
    </div>
    <div class="winContent">
      <div class="tvs">
        <table>
          <colgroup>
            <col width="150">
            <col width="350">
            <col width="150">
            <col width="350">
          </colgroup>
          <tbody>
            <tr>
              <th>사이트 구분</th>
              <td>온라인</td>
              <th>회차 <sup>필수</sup></th>
              <td>
                <span class="unit"><input type="text"><em>회차</em></span>
              </td>
            </tr>
            <tr>
              <th>논제 <sup>필수</sup></th>
              <td><input type="text"/></td>
              <th>답안 제출 기한 <sup>필수</sup></th>
              <td>
                <VCalendar class="calSet" v-model="date" color="green">
                  <template v-slot="{ inputValue, togglePopover }">
                    <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                  </template>
                </VCalendar>
                <span class="unit small ml5"><input type="number"><em>시</em></span>
              </td>
            </tr>
            <tr>
              <th>문제지 첨부</th>
              <td>
                <span class="uploadFile w300">
                  <input type="file" id="file" @change="fileUpload">
                  <span class="upload-name">
                    {{ fileName }}
                  </span>
                  <label for="file">불러오기</label>
                </span>
              </td>
              <th>답안지 첨부</th>
              <td>
                <span class="uploadFile w300">
                  <input type="file" id="file" @change="fileUpload">
                  <span class="upload-name">
                    {{ fileName }}
                  </span>
                  <label for="file">불러오기</label>
                </span>
              </td>
            </tr>
            <tr>
              <th>안내 및 주의사항</th>
              <td colspan="3"><textarea rows="10">에디터가 들어올 영역입니다.</textarea></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'TeacherQuestionWrite',
  data() {
    return {
      fileName: 'pdf, docx, pptx, xlsx로 첨부',
      date: '',
    }
  },
  components: {
  }
}
</script>
