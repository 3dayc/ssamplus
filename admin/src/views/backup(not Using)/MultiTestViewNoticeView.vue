<template lang="html">
  <div>
    <div class="MultiTestViewNoticeWrite">
      <!-- 설정 -->
      <div class="subTit">
        <h3>설정</h3>
        <span class="right">
          <button class="btnM ml10">저장</button>
          <router-link to="/mkup/mocktest/multiTest" class="btnM line ml10">삭제</router-link>
        </span>
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
              <th>과목/선생님</th>
              <td>국어/ 박노송</td>
              <th>노출 미디어 <sup>필수</sup></th>
              <td>
                <span class="checkSet">
                  <input type="checkbox" checked/>
                  <label for=""><i></i>PC</label>
                </span>
                <span class="checkSet">
                  <input type="checkbox"/>
                  <label for=""><i></i>모바일</label>
                </span>
              </td>
            </tr>
            <tr>
              <th>상단 고정</th>
              <td>
                <span class="checkSet">
                  <input type="checkbox" checked/>
                  <label for=""><i></i>상단에 고정함</label>
                </span>
              </td>
              <th>노출 여부</th>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="" checked>
                  <label for="">
                    <span>차단</span>
                    <span>허용</span>
                  </label>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //설정 -->
      <!-- 내용 -->
      <div class="subTit"><h3>공지 내용</h3></div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <th>제목 <sup>필수</sup></th>
              <td><input type="text" value="희소모고 응시생 8,ㅁ130명 요청, 교육학 필수 특강할인"/></td>
            </tr>
            <tr>
              <th>내용 <sup>필수</sup></th>
              <td>
                <textarea rows="4">안녕하세요.
                교사의 꿈을 위한 수험 동반자,
                KG에듀원 교원임용 희소/쌤플러스 입니다.

                이제는 확실하게 선택하고 집중해야 할 때!
                희소모의고사 응시생 8,130명이 요청한
                교육학 필수특강 할인 이벤트 안내 드립니다.
                </textarea>
              </td>
            </tr>
            <tr>
              <th>파일첨부</th>
              <td>
                <button class="btnS line">+ 파일추가</button>
                <ul class="fileList writeCase">
                  <li>
                    <span>공지사항안내.pdf</span>
                    <em>
                      <button class="btnDelete">삭제</button>
                    </em>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //내용 -->
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
                  <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 제목 변경</li>
                  <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 파일첨부 변경</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--//관리-->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MultiTestViewNoticeWrite',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
