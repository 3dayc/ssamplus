<template lang="html">
  <div>
    <!-- 기본정보 -->
    <div class="subTit">
      <h3>기본정보</h3>
      <span class="right"><em>E-99999999999 |  국어  |  박노송  |  박노송 전공국어 – 80점 도약 모의고사</em> 입니다.</span>
    </div>
    <div class="tvs">
      <table>
        <colgroup>
          <col width="160">
          <col width="40%">
          <col width="160">
          <col width="*">
        </colgroup>
        <tbody>
          <tr>
            <th class="backBrown">노출 여부 <sup>필수</sup></th>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push1">
                <label for="push1">
                  <span>숨김</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <th class="backBrown">시험코드</th>
            <td><strong>K2021010101001</strong></td>
          </tr>
          <tr>
            <th class="backBrown">시험 명 <sup>필수</sup></th>
            <td colspan="3"><input type="text" value="박노송 전공국어 – 80점 도약 모의고사"/></td>
          </tr>
          <tr>
            <th class="backBrown">과목(선생님)코드 <sup>필수</sup></th>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label">선택해 주세요</option>
                  <option value="" selected> 01 [ 국어 / 박노송 ]</option>
                </select>
              </span>
            </td>
            <th class="backBrown">제작일자 <sup>필수</sup></th>
            <td>
              <VCalendar class="calSet" v-model="date" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly />
                </template>
              </VCalendar>
            </td>
          </tr>
          <tr>
            <th>시험분류 <sup>필수</sup></th>
            <td>
              <span class="radioSet">
                <input type="radio" name="radio1" checked/>
                <label for=""><i></i>유아,유초특</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="radio1" />
                <label for=""><i></i>중등, 중특</label>
              </span>
            </td>
            <th>시험시간 <sup>필수</sup></th>
            <td>
              <span class="unit w100">
                <input type="text"><em>분</em>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //기본정보 -->
    <!-- 해설강의 등록정보 -->
    <div class="subTit">
      <h3>해설강의 등록정보</h3>
    </div>
    <div class="tvs">
      <table>
        <colgroup>
          <col width="160">
          <col width="40%">
          <col width="160">
          <col width="*">
        </colgroup>
        <tbody>
          <tr>
            <th>해설강의</th>
            <td>
              <span class="radioSet">
                <input type="radio" name="radio2"/>
                <label for=""><i></i>미제공</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="radio2" checked/>
                <label for=""><i></i>제공</label>
              </span>
            </td>
            <th>기기제한</th>
            <td>
              <span class="radioSet">
                <input type="radio" name="radio3" checked/>
                <label for=""><i></i>PC+모바일</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="radio3" />
                <label for=""><i></i>모바일 전용</label>
              </span>
            </td>
          </tr>
          <tr>
            <th>수강기간 / 수강제한</th>
            <td>
              <span class="unit small mr5">
                <input type="text" value="3" class="tR">
                <em>일</em>
              </span>
              <em>/</em>
              <span class="unit small ml5 mr5">
                <input type="text" value="140" class="tR">
                <em>%</em>
              </span>
              <span class="checkSet">
                <input type="checkbox" id="tit01" />
                <label for="tit01"><i></i>통배수</label>
              </span>
            </td>
            <th>문서보안</th>
            <td>
              <span class="checkSet">
                <input type="checkbox" id="down" checked/>
                <label for="down"><i></i>다운로드 제한</label>
              </span>
              <span class="unit small">
                <input type="text" value="5" class="tR" disabled>
                <em>회</em>
              </span>
              <span class="checkSet ml20">
                <input type="checkbox" id="print" />
                <label for="print"><i></i>인쇄제한</label>
              </span>
              <span class="unit small">
                <input type="text" value="5" class="tR">
                <em>회</em>
              </span>
            </td>
          </tr>
          <tr>
            <th>수강권한</th>
            <td colspan="3"><p class="infoMsg fGreen">* 모의고사 구매자 전체</p></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //해설강의 등록정보 -->
    <!-- 관리 -->
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
                <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 수정</li>
                <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 등록</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //관리 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PaperMgtViewInfo',
  data() {
    return {
      paperTab: 0,
      date: new Date(),
      showFileChoice: true,
      showFileModify: false,
      showFileChoice2: false,
      showFileModify2: true,
      fileName: 'pdf, docx, pptx, xlsx로 첨부',
    }
  },
  methods: {
    fileUpload(event) {
      this.fileName = event.target.value;
    },
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
