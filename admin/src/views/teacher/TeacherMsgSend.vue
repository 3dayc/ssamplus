<template lang="html">
  <div id="windowLayout" class="teacherWrap"> <!-- 강사용 시스템일 경우 teacherWrap 클래스 추가 -->
    <div class="winHeader">
      <h1>메시지 발송</h1>
      <span class="supTxt">* 선생님 상담 회원에게 발송할 수 있음.</span>
    </div>
    <div class="winContent">
      <div class="boardTop">
        <div class="right">
          <div class="btnArea">
            <button class="btnM">전송</button>
            <button class="btnM line">취소</button>
          </div>
        </div>
      </div>
      <div class="tvs">
        <table>
          <caption>메시지 발송</caption>
          <colgroup><col style="width:160px"><col></colgroup>
          <tbody>
            <tr>
              <th scope="row">발송 유형 <sup>필수항목</sup></th>
              <td colspan="3">
                <span class="radioSet">
                  <input type="radio" name="type" id="type1" checked  @click="smsTrigger = false" />
                  <label for="type1"><i></i>SMS</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="type" id="type2"  @click="smsTrigger = true" />
                  <label for="type2"><i></i>LMS</label>
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">메시지 내용 <sup>필수항목</sup></th>
              <td colspan="3">
                <!-- SMS -->
                <div v-show="!smsTrigger">
                  <div class="msgForm">
                    <div class="formTitle"></div>
                    <div class="formCnts">
                      <textarea></textarea>
                      <span class="cTxt"><strong>SMS 기준</strong> (<em>0</em>/80 Byte)</span>
                    </div>
                  </div>
                </div>
                <!-- //SMS -->
                <!-- LMS -->
                <div v-show="smsTrigger">
                  <div class="msgForm">
                    <div class="formTitle">
                      <input type="text" placeholder="제목">
                    </div>
                    <div class="formCnts">
                      <textarea></textarea>
                      <span class="cTxt"><strong>LMS 기준</strong> (<em>0</em>/80 Byte)</span>
                    </div>
                  </div>
                </div>
                <!-- //LMS -->
              </td>
            </tr>
            <tr>
              <th scope="row">수신자 이볅 <sup>필수항목</sup></th>
              <td>
                <div class="telAddBox">
                  <div class="innerBox">
                    <span class="saveBox">010-2143-1233 <button>닫기</button></span>
                    <span class="saveBox">010-2143-1233 <button>닫기</button></span>
                    <span class="saveBox">010-2143-1233 <button>닫기</button></span>
                    <input type="text" placeholder="숫자 입력 후 콤마로 구분">
                  </div>
                </div>
              </td>
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
  name: 'TeacherMsgSend',
  data() {
    return {
      smsTrigger: false,
      categoryTrigger: false,
    }
  },
  methods: {
    onChange(event) {
      let value = event.target.value;
      value == 'direct' ? this.categoryTrigger = true : this.categoryTrigger = false;
    }
  }
}
</script>
