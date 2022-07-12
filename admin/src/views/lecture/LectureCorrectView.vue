<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>첨삭게시판 - 문제 관리</h1>
      <span class="supTxt">* 해당 강좌의 첨삭게시판 문제를 관리할 수 있음</span>
      <span class="btnArea">
        <strong class="inBlock boxGray">첨삭현황<em class="fBlue fBold ml10">30 / 60 (50%)</em></strong>
        <button class="btnM green">저장</button>
        <button class="btnM gray">취소</button>
        <button class="btnM line">삭제</button>
      </span>
    </div>
    <div class="winContent">
      <div class="tvs">
        <table>
          <colgroup>
            <col width="140"/>
            <col width="36%"/>
            <col width="140"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <th>사이트 구분</th>
              <td>온라인</td>
              <th>회차 <sup>필수</sup></th>
              <td><span class="unit w100"><input type="text" value="3"><em>회차</em></span></td>
            </tr>
            <tr>
              <th>논제 <sup>필수</sup></th>
              <td><input type="text" value="도약 모의고사 1A"/></td>
              <th>답변 제출 기한 <sup>필수</sup></th>
              <td>
                <VCalendar class="calSet" v-model="date01" color="green">
                  <template v-slot="{ inputValue, togglePopover }">
                    <input :value="inputValue" @click="togglePopover()" readonly placeholder="예) 2021-01-01"/>
                  </template>
                </VCalendar>
                <span class="unit small ml5">
                  <input type="text" class="tR" value="24">
                  <em>시</em>
                </span>
              </td>
            </tr>
            <tr>
              <th>문제지 첨부</th>
              <td>
                <span class="uploadFile wFull">
                  <input type="file" id="file6" class="addFile upFile" @change="fileUpload">
                  <span class="upload-name">{{ fileName01 }}</span>
                  <label for="file6">불러오기</label>
                </span>
              </td>
              <th>답안지 첨부</th>
              <td>
                <span class="uploadFile wFull">
                  <input type="file" id="file6" class="addFile upFile" @change="fileUpload">
                  <span class="upload-name">{{ fileName02 }}</span>
                  <label for="file6">불러오기</label>
                </span>
              </td>
            </tr>
            <tr>
              <th>안내 및 주의사항</th>
              <td colspan="3"><textarea rows="10">에디터가 나올 영역입니다.</textarea></td>
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
  name: 'LectureCorrectView',
  data() {
    return {
      date01: '2021-03-20',
      fileName01: '3회차_도약모의고사 1A.pdf',
      fileName02: '도약모의고사 전용 답안지.docx',
    }
  },
  methods: {
    fileUpload(event) {
      this.fileName = event.target.value;      
      let upFile = document.getElementsByClassName('addFile')[0];
      upFile.classList.add('upFile');
    },
  },
  components: {
  }
}
</script>
