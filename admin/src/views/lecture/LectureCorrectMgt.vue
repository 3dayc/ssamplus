<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>답안첨삭</h1>
      <span class="supTxt">* 회원이 제출한 답안지를 관리할 수 있음</span>
      <span class="btnArea">
        <strong class="inBlock boxGray fBlue">1회차 | 도약모의고사 1A</em></strong>
        <button class="btnS line">답안지 일괄 다운</button>
        <button class="btnS line">첨삭자료 일괄 업로드</button>
      </span>
    </div>
    <div class="winContent">
      <div class="boardTop">
        <span class="left">
          <strong>회원 개인정보 표출</strong>
          <span class="labelToggleSet ml5">
            <input type="checkbox" id="push" />
            <label for="push">
              <span>차단</span>
              <span>허용</span>
            </label>
          </span>
        </span>
      </div>
      <!-- 첨삭 목록 -->
      <div class="tls subGreen">
        <table>
          <colgroup>
            <col width="60"/>
            <col width="120"/>
            <col width="140"/>
            <col width="80"/>
            <col width="100"/>
            <col width="100"/>
            <col width="*"/>
            <col width="100"/>
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>이름/아이디</th>
              <th>연락처</th>
              <th>답안지</th>
              <th>답안제출일자</th>
              <th>첨삭상태</th>
              <th>첨삭자료</th>
              <th>첨삭일자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-****-5678</td>
              <td><em class="iFile">첨부파일</em></td>
              <td>2021-03-15</td>
              <td>첨삭대기</td>
              <td>
                <span class="uploadFile">
                  <input type="file" id="file" class="addFile" @change="fileUpload">
                  <span class="upload-name">
                    {{ fileName }}
                  </span>
                  <label for="file">불러오기</label>
                </span>
              </td>
              <td>2021-03-21</td>
            </tr>
            <tr>
              <td>6</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-****-5678</td>
              <td><em class="iFile">첨부파일</em></td>
              <td>2021-03-15</td>
              <td>첨삭완료</td>
              <td>
                <span class="uploadFile">
                  <input type="file" id="file" class="addFile upFile" @change="fileUpload">
                  <span class="upload-name">
                    {{ fileName2 }}
                  </span>
                  <label for="file">불러오기</label>
                </span>
              </td>
              <td>2021-03-21</td>
            </tr>
            <tr>
              <td>5</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-****-5678</td>
              <td><em class="iFile">첨부파일</em></td>
              <td>2021-03-15</td>
              <td>첨삭대기</td>
              <td>
                <span class="uploadFile">
                  <input type="file" id="file" class="addFile" @change="fileUpload">
                  <span class="upload-name">
                    {{ fileName }}
                  </span>
                  <label for="file">불러오기</label>
                </span>
              </td>
              <td>2021-03-21</td>
            </tr>
            <tr>
              <td>4</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-****-5678</td>
              <td><em class="iFile">첨부파일</em></td>
              <td>2021-03-15</td>
              <td>첨삭완료</td>
              <td>
                <span class="uploadFile">
                  <input type="file" id="file" class="addFile upFile" @change="fileUpload">
                  <span class="upload-name">
                    {{ fileName2 }}
                  </span>
                  <label for="file">불러오기</label>
                </span>
              </td>
              <td>2021-03-21</td>
            </tr>
            <tr>
              <td>3</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-****-5678</td>
              <td><em class="iFile">첨부파일</em></td>
              <td>2021-03-15</td>
              <td>첨삭대기</td>
              <td>
                <span class="uploadFile">
                  <input type="file" id="file" class="addFile" @change="fileUpload">
                  <span class="upload-name">
                    {{ fileName }}
                  </span>
                  <label for="file">불러오기</label>
                </span>
              </td>
              <td>2021-03-21</td>
            </tr>
            <tr>
              <td>2</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-****-5678</td>
              <td><em class="iFile">첨부파일</em></td>
              <td>2021-03-15</td>
              <td>첨삭완료</td>
              <td>
                <span class="uploadFile">
                  <input type="file" id="file" class="addFile upFile" @change="fileUpload">
                  <span class="upload-name">
                    {{ fileName2 }}
                  </span>
                  <label for="file">불러오기</label>
                </span>
              </td>
              <td>2021-03-21</td>
            </tr>
            <tr>
              <td>1</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-****-5678</td>
              <td><em class="iFile">첨부파일</em></td>
              <td>2021-03-15</td>
              <td>첨삭대기</td>
              <td>
                <span class="uploadFile">
                  <input type="file" id="file" class="addFile" @change="fileUpload">
                  <span class="upload-name">
                    {{ fileName }}
                  </span>
                  <label for="file">불러오기</label>
                </span>
              </td>
              <td>2021-03-21</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //첨삭 목록 -->
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
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LectureCorrectMgt',
  data() {
    return {
      fileName: 'pdf로 첨부',
      fileName2: '김지민_jiminkim0123.pdf',
    }
  },
  methods: {
    fileUpload(event) {
      this.fileName = event.target.value;
      let upFile = document.getElementsByClassName('addFile')[0];
      upFile.classList.add('upFile');
    }, // 파일 업로드
  },
  components: {
  }
}
</script>
