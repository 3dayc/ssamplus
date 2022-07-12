<template lang="html">
  <div>
    <!-- 해설강의 자료 관리 -->
    <div class="subTit">
      <h3>해설강의 자료 관리</h3>
      <span class="right"><em>E-99999999999 |  국어  |  박노송  |  박노송 전공국어 – 80점 도약 모의고사</em> 입니다.</span>
    </div>
    <div class="tls">
      <table>
        <colgroup>
          <col width="40">
          <col width="190">
          <col width="190">
          <col width="150">
          <col width="100">
          <col width="80">
          <col width="100">
        </colgroup>
        <thead>
          <tr>
            <th>노출 여부</th>
            <th>제목</th>
            <th>자료</th>
            <th>보충강의 제공<br/>(직강일자 선택)</th>
            <th>인쇄/다운로드<br/>제한</th>
            <th>조회수</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push1" checked>
                <label for="push1">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td><input type="text" /></td>
            <td>
              <span class="uploadFile wFull">
                <input type="file" id="file" @change="fileUpload">
                <span class="upload-name">{{ fileName }}</span>
                <label for="file">불러오기</label>
              </span>
            </td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="">2021-01-01(월)</option>
                </select>
              </span>
            </td>
            <td>5회 / 5회</td>
            <td>1,500</td>
            <td>2021-05-25</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push12">
                <label for="push12">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td><input type="text" value="[0512] 강의자료 – 필수 기출 해설" /></td>
            <td>
              <span class="uploadFile wFull">
                <input type="file" id="file2" @change="fileUpload">
                <span class="upload-name">장영희_2021모고 필수해설.pdf</span>
                <label for="file2">불러오기</label>
              </span>
            </td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>2021-01-01(월)</option>
                </select>
              </span>
            </td>
            <td>5회 / 5회</td>
            <td>32</td>
            <td>2021-05-20</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push13" checked>
                <label for="push13">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td><input type="text" value="[0512] 강의자료 – 필수 기출 해설" /></td>
            <td>
              <span class="uploadFile wFull">
                <input type="file" id="file3" @change="fileUpload">
                <span class="upload-name">장영희_2021모고 필수해설.pdf</span>
                <label for="file3">불러오기</label>
              </span>
            </td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="">2021-01-01(월)</option>
                </select>
              </span>
            </td>
            <td>5회 / 5회</td>
            <td>1</td>
            <td>2021-05-19</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push14">
                <label for="push14">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td><input type="text" value="[0512] 강의자료 – 필수 기출 해설" /></td>
            <td>
              <span class="uploadFile wFull">
                <input type="file" id="file4" @change="fileUpload">
                <span class="upload-name">장영희_2021모고 필수해설.pdf</span>
                <label for="file4">불러오기</label>
              </span>
            </td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="">2021-01-01(월)</option>
                </select>
              </span>
            </td>
            <td>5회 / 5회</td>
            <td>333</td>
            <td>2021-05-15</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push15" checked>
                <label for="push15">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td><input type="text" value="[0512] 강의자료 – 필수 기출 해설" /></td>
            <td>
              <span class="uploadFile wFull">
                <input type="file" id="file5" @change="fileUpload">
                <span class="upload-name">장영희_2021모고 필수해설.pdf</span>
                <label for="file5">불러오기</label>
              </span>
            </td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="">2021-01-01(월)</option>
                </select>
              </span>
            </td>
            <td>5회 / 5회</td>
            <td>1,500</td>
            <td>2021-05-13</td>
          </tr>
          <tr>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push16" checked>
                <label for="push16">
                  <span>차단</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <td><input type="text" value="[0512] 강의자료 – 필수 기출 해설" /></td>
            <td>
              <span class="uploadFile wFull">
                <input type="file" id="file6" @change="fileUpload">
                <span class="upload-name">장영희_2021모고 필수해설.pdf</span>
                <label for="file6">불러오기</label>
              </span>
            </td>
            <td>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">선택</option>
                  <option value="" selected>2021-01-01(월)</option>
                </select>
              </span>
            </td>
            <td>5회 / 5회</td>
            <td>32</td>
            <td>2021-05-10</td>
          </tr>
          <tr style="display:none;">
            <td colspan="7" class="noneData">등록된 데이터가 없습니다.</td>
          </tr>
          <tr>
            <td colspan="7">
                <button class="btnM blueline wFull">+ 행 추가</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //해설강의 자료 관리 -->
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
  name: 'PaperMgtViewCommentlib',
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
