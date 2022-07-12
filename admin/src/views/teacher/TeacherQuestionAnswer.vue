<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>답안첨삭</h1>
      <span class="subTit">* 해당 강좌의 첨삭게시판 문제를 관리할 수 있음</span>
      <span class="btnArea">
        <span class="boxGray inBlock fBlue">1회차 | 도약모의고사 1A</span>
        <button class="btnM line">답안지 일괄 다운</button>
        <button class="btnM line">첨삭자료 일괄 업로드</button>
      </span>
    </div>
    <div class="winContent">
      <div class="listSummery">
        <div class="left">
          <strong>회원 개인정보 표출</strong>
          <span class="toggleSet">
            <input type="checkbox" id="push" />
            <label for="push"></label>
          </span>
        </div>
      </div>
      <!-- 리스트 -->
      <div class="tls subGreen">
        <table>
          <colgroup>
            <col width="60"/>
            <col width="120"/>
            <col width="120"/>
            <col width="80"/>
            <col width="100"/>
            <col width="100"/>
            <col width="300"/>
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
              <td><button class="btnDownloadSmall">다운로드</button></td>
              <td>2021-03-15</td>
              <td>첨삭대기</td>
              <td>
                <span class="uploadFile w300">
                  <input type="file" id="file" @change="fileUpload">
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
              <td><button class="btnDownloadSmall">다운로드</button></td>
              <td>2021-03-15</td>
              <td>첨삭완료</td>
              <td>
                <span class="uploadFile w300">
                  <input type="file" id="file" @change="fileUpload">
                  <span class="upload-name">
                    {{ fileName02 }}
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
              <td><button class="btnDownloadSmall">다운로드</button></td>
              <td>2021-03-15</td>
              <td>첨삭대기</td>
              <td>
                <span class="uploadFile w300">
                  <input type="file" id="file" @change="fileUpload">
                  <span class="upload-name">
                    {{ fileName02 }}
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
              <td><button class="btnDownloadSmall">다운로드</button></td>
              <td>2021-03-15</td>
              <td>첨삭완료</td>
              <td>
                <span class="uploadFile w300">
                  <input type="file" id="file" @change="fileUpload">
                  <span class="upload-name">
                    {{ fileName02 }}
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
              <td><button class="btnDownloadSmall">다운로드</button></td>
              <td>2021-03-15</td>
              <td>첨삭대기</td>
              <td>
                <span class="uploadFile w300">
                  <input type="file" id="file" @change="fileUpload">
                  <span class="upload-name">
                    {{ fileName02 }}
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
              <td><button class="btnDownloadSmall">다운로드</button></td>
              <td>2021-03-15</td>
              <td>첨삭완료</td>
              <td>
                <span class="uploadFile w300">
                  <input type="file" id="file" @change="fileUpload">
                  <span class="upload-name">
                    {{ fileName02 }}
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
              <td><button class="btnDownloadSmall">다운로드</button></td>
              <td>2021-03-15</td>
              <td>첨삭완료</td>
              <td>
                <span class="uploadFile w300">
                  <input type="file" id="file" @change="fileUpload">
                  <span class="upload-name">
                    {{ fileName02 }}
                  </span>
                  <label for="file">불러오기</label>
                </span>
              </td>
              <td>2021-03-21</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //리스트 -->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'TeacherQuestionAnswer',
  data() {
    return {
      fileName: 'pdf로 첨부',
      fileName02: '김지민_jiminkim0123.pdf',
    }
  },
  components: {
  }
}
</script>
