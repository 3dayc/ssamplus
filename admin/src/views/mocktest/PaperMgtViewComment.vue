<template lang="html">
  <div>
    <!-- 영상 관리 정보 -->
    <div class="subTit">
      <h3>영상 관리 정보</h3>
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
            <th class="backBrown">영상 / 게시지점 <sup>필수</sup></th>
            <td>
              <span class="selectSet mr5">
                <select name="" id="">
                  <option value="no" class="label">영상종류 선택</option>
                  <option value="">MP4</option>
                  <option value="">WMV</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">게시지점 선택</option>
                  <option value="">??? ssamplusp, </option>
                  <option value="">ssamplus_idea</option>
                  <option value="">ssamplus</option>
                </select>
              </span>
            </td>
            <th class="backBrown">연도 / 폴더명 <sup>필수</sup></th>
            <td class="halfUnit case37">
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">연도 선택</option>
                  <option value="">2021</option>
                  <option value="">2020</option>
                  <option value="">2019</option>
                </select>
              </span>
              <input type="text" placeholder="폴더명 입력"/>
            </td>
          </tr>
          <tr>
            <th class="backBrown">영상 사이즈 / 화질 <sup>필수</sup></th>
            <td>
              <span class="selectSet mr5">
                <select name="" id="">
                  <option value="no" class="label">사이즈 선택</option>
                  <option value="">와이드</option>
                  <option value="">일반</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">화질 선택</option>
                  <option value="">고화질 (640*360)</option>
                  <option value="">저화질 (520*260)</option>
                </select>
              </span>
            </td>
            <th class="backBrown"></th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //영상 관리 정보 -->
    <!-- 강의 리스트 -->
    <div class="subTit">
      <h3>강의 리스트</h3>
    </div>
    <div class="tls">
      <table>
        <colgroup>
          <col width="80">
          <col width="80">
          <col width="40%">
          <col width="40%">
          <col width="100">
          <col width="80">
        </colgroup>
        <thead>
          <tr>
            <th>순번</th>
            <th>회차</th>
            <th>강의 제목</th>
            <th>파일명</th>
            <th>시간(분)</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button class="btnMove">위치 이동</button></td>
            <td>1강</td>
            <td><input type="text"/></td>
            <td><input type="text" value="21ks_ysh_210301"/></td>
            <td><input type="text" class="tC" value="45"></td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td><button class="btnMove">위치 이동</button></td>
            <td>2강</td>
            <td><input type="text"/></td>
            <td><input type="text" value="21ks_ysh_210301"/></td>
            <td><input type="text" class="tC" value="60"></td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td><button class="btnMove">위치 이동</button></td>
            <td>3강</td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text" class="tC"></td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td><button class="btnMove">위치 이동</button></td>
            <td>4강</td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text" class="tC"></td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td><button class="btnMove">위치 이동</button></td>
            <td>5강</td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text" class="tC"></td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td><button class="btnMove">위치 이동</button></td>
            <td>6강</td>
            <td><input type="text"/></td>
            <td><input type="text"/></td>
            <td><input type="text" class="tC"></td>
            <td><button class="btnDelete">삭제</button></td>
          </tr>
          <tr>
            <td colspan="6">
              <button class="btnM blueline wFull">+ 행 추가</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //강의 리스트 -->
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
  name: 'PaperMgtViewComment',
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
