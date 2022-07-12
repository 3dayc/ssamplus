<template lang="html">
  <div>
    <!-- 시험/답안지 자료 -->
    <div class="subTit">
      <h3>시험/답안지 자료</h3>
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
            <th class="backBrown">시험지 페이지 수 <sup>필수</sup></th>
            <td><input type="number" class="w70 mr10">페이지</td>
            <th class="backBrown">시험지 파일 <sup>필수</sup></th>
            <td>
              <span class="uploadMulty">
                <span class="fileChoice" v-show="showFileChoice">
                  <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                </span>
                <span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete">삭제</button></span>
              </span>
            </td>
          </tr>
          <tr>
            <th class="backBrown">답안지 페이지 수 <sup>필수</sup></th>
            <td><input type="number" class="w70 mr10">페이지</td>
            <th class="backBrown">답안지 파일 <sup>필수</sup></th>
            <td>
              <span class="uploadMulty">
                <span class="fileChoice" v-show="showFileChoice2">
                  <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                </span>
                <span class="fileModify" v-if="showFileModify2">01_login_bgtext01_info.pdf<button class="btnDelete">삭제</button></span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //시험/답안지 자료 -->
    <!-- 시험지 문항별 배점 -->
    <div class="subTit">
      <h3>시험지 문항별 배정</h3>
    </div>
    <div class="tls">
      <table>
        <colgroup>
          <col width="80">
          <col width="80">
          <col width="350">
          <col width="350">
          <col width="120">
          <col width="120">
          <col width="80">
        </colgroup>
        <thead>
          <tr>
            <th>순서</th>
            <th>시험번호</th>
            <th>기본 이수과목 및 분야</th>
            <th>평가영역</th>
            <th>난이도</th>
            <th>배점 (점)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="bgRed"></td>
            <td class="bgRed"></td>
            <td class="bgRed"></td>
            <td class="bgRed"></td>
            <td class="bgRed fRed">배점 합계</td>
            <td class="fRed fBold">55</td>
            <td></td>
          </tr>
          <tr>
            <td>1</td>
            <td><input type="text" class="tC" value="1"/></td>
            <td><input type="text" value="우리나라 음악교육사"/></td>
            <td><input type="text" value="1"/></td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="">상</option>
                  <option value="" selected>중</option>
                  <option value="">하</option>
                </select>
              </span>
            </td>
            <td><input type="text" class="tC" value="5"/></td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td><input type="text" class="tC" value="1"/></td>
            <td><input type="text" value="기초이론"/></td>
            <td><input type="text" value="2-1"/></td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="">상</option>
                  <option value="">중</option>
                  <option value="">하</option>
                </select>
              </span>
            </td>
            <td><input type="text" class="tC" value="10"/></td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td><input type="text" class="tC" value="1"/></td>
            <td><input type="text" value="화성"/></td>
            <td><input type="text"/></td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="">상</option>
                  <option value="" selected>중</option>
                  <option value="">하</option>
                </select>
              </span>
            </td>
            <td><input type="text" class="tC" value="5"/></td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td>4</td>
            <td><input type="text" class="tC" value="1"/></td>
            <td><input type="text" value="국악사"/></td>
            <td><input type="text"/></td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="">상</option>
                  <option value="" selected>중</option>
                  <option value="">하</option>
                </select>
              </span>
            </td>
            <td><input type="text" class="tC" value="5"/></td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td>5</td>
            <td><input type="text" class="tC" value="2"/></td>
            <td><input type="text" value="음악 교수법"/></td>
            <td><input type="text"/></td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="">상</option>
                  <option value="" selected>중</option>
                  <option value="">하</option>
                </select>
              </span>
            </td>
            <td><input type="text" class="tC" value="5"/></td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td>6</td>
            <td><input type="text" class="tC" value="2"/></td>
            <td><input type="text" value="포괄적 음악성/교육과정"/></td>
            <td><input type="text"/></td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="">상</option>
                  <option value="">중</option>
                  <option value="">하</option>
                </select>
              </span>
            </td>
            <td><input type="text" class="tC" value="20"/></td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td>7</td>
            <td><input type="text" class="tC" value="2"/></td>
            <td><input type="text" value="화성"/></td>
            <td><input type="text"/></td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="">상</option>
                  <option value="">중</option>
                  <option value="" selected>하</option>
                </select>
              </span>
            </td>
            <td><input type="text" class="tC" value="5"/></td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td colspan="7"><button class="btnM blueline wFull">+ 행 추가</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //시험지 문항별 배점 -->
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
  name: 'PaperMgtViewAnswer',
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
