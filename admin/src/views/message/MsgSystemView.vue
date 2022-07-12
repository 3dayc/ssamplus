<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>시스템 발송 메시지</h1>
      <span class="supTxt">* 개발팀에 요청한 시스템발송 메시지를 등록합니다.</span>
    </div>
    <div class="winContent">
      <div class="boardTop">
        <div class="right-po">
          <button class="btnM green">수정</button>
          <button class="btnM">취소</button>
          <button class="btnM line" @click="alertTrigger = true">삭제</button>
        </div>
      </div>
      <div class="tvs">
        <table>
          <caption>시스템 발송 메시지</caption>
          <colgroup><col style="width:150px;"><col></colgroup>
          <tbody>
            <tr>
              <th scope="row">발송시점 <sup>필수항목</sup></th>
              <td><input type="text" value="리뉴얼 후 홈페이지에 로그인 했으나 본인인증을 하지 않고 로그아웃 했을 때 발송"></td>
            </tr>
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
                      <textarea>[쌤플러스] 홈페이지 리뉴얼로 인해 인증이 필요합니다. 자세한 내용은 홈페이지의 공지사항에서 확인하세요.</textarea>
                      <span class="cTxt"><strong>SMS 기준</strong> (<em>65</em>/80 Byte)</span>
                    </div>
                  </div>
                </div>
                <!-- //SMS -->
                <!-- LMS -->
                <div v-show="smsTrigger">
                  <div class="msgForm lmsCase">
                    <div class="formTitle">
                      <input type="text" placeholder="제목">
                    </div>
                    <div class="formCnts">
                      <textarea></textarea>
                      <span class="cTxt"><strong>LMS 기준</strong> (<em>0</em>/2,000 Byte)</span>
                    </div>
                  </div>
                </div>
                <!-- //LMS -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
        선택한 시스템 발송 메시지가 해당 리스트에서만 삭제됩니다.
      </template>
    </Alert>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MsgSystemView',
  data() {
    return {
      smsTrigger: false,
      alertTrigger: false,
    }
  },
  methods: {
  }
}
</script>
