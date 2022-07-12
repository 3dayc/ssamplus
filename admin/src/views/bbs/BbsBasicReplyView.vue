<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>기본 답변</h1>
      <span class="supTxt">* 기본 답변을 등록하고 관리합니다.</span>
      <span class="btnArea">
        <router-link to="/mkup/windowPopup/bbsBasicReply" class="btnList">목록으로</router-link>
        <button class="btnM green">저장</button>
        <router-link to="/mkup/windowPopup/bbsBasicReply" class="btnM line">삭제</router-link>
      </span>
    </div>
    <div class="winContent">
      <!---->
      <div class="tvs">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <th>분류 <sup>필수</sup></th>
              <td>
                <span class="selectSet lCase mr10">
                  <select name="" id="">
                    <option value="no" class="label">대분류</option>
                    <option value="">강의 수강, 사이트 이용 관련</option>
                    <option value="">임용학습상담</option>
                    <option value="" selected>환불</option>
                    <option value="">기타</option>
                  </select>
                </span>
                <span class="selectSet lCase mr10">
                  <select name="" id="">
                    <option value="no" class="label">중분류</option>
                    <option value="" selected>강의수강불편</option>
                  </select>
                </span>
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">소분류</option>
                    <option value="" selected>강사/강의내용 불만</option>
                  </select>
                </span>
              </td>
            </tr>
            <tr>
              <th>제목 <sup>필수</sup></th>
              <td><input type="text" value="강의 내용 불만"/></td>
            </tr>
            <tr>
              <th>빠른 답변</th>
              <td>
    						<span class="checkSet">
    							<input type="checkbox" id="chk1" checked>
    							<label for="chk1"><i></i>빠른 답변으로 설정</label>
    						</span>
              </td>
            </tr>
            <tr>
              <th>내용 <sup>필수</sup></th>
              <td>
<pre>
<textarea class="wFull h10">
회원 가입 방법 안내입니다.

회원 가입 방법 안내입니다. 회원 가입 방법 안내입니다.
회원 가입 방법 안내입니다. 회원 가입 방법 안내입니다. 회원 가입 방법 안내입니다.
</textarea>
</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--//-->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'BbsBasicReplyView',
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
