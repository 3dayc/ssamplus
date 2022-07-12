<template lang="html">
  <div>
    <div class="MultiTestViewNoticeWrite">
      <!-- 설정 -->
      <div class="subTit">
        <h3>설정</h3>
        <span class="right">
          <button class="btnM ml10">저장</button>
          <router-link to="/mkup/mocktest/multiTest" class="btnM gray ml10">취소</router-link>
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
              <td><input type="text"/></td>
            </tr>
            <tr>
              <th>내용 <sup>필수</sup></th>
              <td>
                <textarea rows="4"></textarea>
              </td>
            </tr>
            <tr>
              <th>파일첨부</th>
              <td>
                <button class="btnS line">+ 파일추가</button>
                <ul class="fileList writeCase">
                  <li>
                    <span>로그인에러1.png</span>
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
