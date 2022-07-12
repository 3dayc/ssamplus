<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>메시지발송</h1>
      <span class="supTxt">* 선택한 회원에게 메시지를 발송할 수 있음</span>
      <div class="btnArea">
        <button class="btnM green">전송</button>
        <button class="btnM ml10">취소</button>
      </div>
    </div>
    <div class="winContent">
      <div class="tvs">
        <table>
          <caption>관리자 발송</caption>
          <colgroup>
            <col style="width:13%;">
            <col style="width:37%;">
            <col style="width:13%;">
            <col style="width:37%;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">발송 유형 <sup>필수항목</sup></th>
              <td>
                <span class="radioSet">
                  <input type="radio" name="type" id="type1" checked  @click="smsTrigger = false" />
                  <label for="type1"><i></i>SMS</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="type" id="type2"  @click="smsTrigger = true" />
                  <label for="type2"><i></i>LMS</label>
                </span>
              </td>
              <th scope="row">발송 목적 <sup>필수항목</sup></th>
              <td>
                <span class="radioSet">
                  <input type="radio" name="purpose" id="purpose1" />
                  <label for="purpose1"><i></i>홍보용</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="purpose" id="purpose2" />
                  <label for="purpose2"><i></i>안내용</label>
                </span>
              </td>
            </tr>
            <!-- 메시지 내용 -->
            <tr>
              <th scope="row">메시지 내용 <sup>필수항목</sup></th>
              <td colspan="3">
                <!-- SMS -->
                <div v-show="!smsTrigger">
                  <button class="btnM green mb10" @click="MsgOftenList()">자주 쓰는 메시지</button>
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
                  <button class="btnM green mb10" @click="MsgOftenList()">자주 쓰는 메시지</button>
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
            <!-- //메시지 내용 -->
            <!-- 자주 쓰는 메시지 저장 -->
            <tr>
              <th scope="row">자주 쓰는 메시지 저장</th>
              <td colspan="3">
                <div class="inputForm">
                  <span class="selectSet lCase">
                    <select name="" id="" @change="onChange03($event)">
                      <option value="">카테고리 선택</option>
                      <option value="">공지사항</option>
                      <option value="">강좌 안내</option>
                      <option value="">홍보/이벤트</option>
                      <option value="direct">직접 입력</option>
                    </select>
                  </span>
                  <input type="text" placeholder="메시지 명" v-if="!categoryTrigger">
                  <span class="inpDirect" v-if="categoryTrigger">
                    <input type="text" placeholder="카테고리명 입력">
                    <input type="text" placeholder="메시지 입력">
                  </span>
                </div>
              </td>
            </tr>
            <!-- //자주 쓰는 메시지 저장 -->
            <!-- 수신자 선택 -->
            <tr>
              <th scope="row">수신자 선택 <sup>필수항목</sup></th>
              <td colspan="3">
                <div class="listSummery pd0">
                  <div class="right">
                    <dl>
                      <dt>수신자</dt>
                      <dd>총 <strong>1</strong>명</dd>
                    </dl>
                  </div>
                </div>
                <div class="tls">
                  <table>
                    <colgroup>
                      <col width="100"/>
                      <col width="120"/>
                      <col width="120"/>
                      <col width="100"/>
                      <col width="50"/>
                    </colgroup>
                    <thead>
                      <tr>
                        <th>회원번호</th>
                        <th>이름/아이디</th>
                        <th>휴대전화 번호</th>
                        <th>SMS 수신</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>287965</td>
                        <td>김*수<br/>(k******)</td>
                        <td>010-****-****</td>
                        <td>동의</td>
                        <td><button class="btnDelete">삭제</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
            <!-- //수신자 선택 -->
            <!-- 발송 시점 -->
            <tr>
              <th scope="row">발송 시점 <sup>필수항목</sup></th>
              <td colspan="3">
                <div>
                  <span class="radioSet">
                    <input type="radio" name="point" id="point1" @change="onChange02($event)" value="point1" checked />
                    <label for="point1"><i></i>즉시 발송</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="point" id="point2" @change="onChange02($event)" value="point2" />
                    <label for="point2"><i></i>예약 발송</label>
                  </span>
                </div>
                <div class="mt10" v-if="pointTrigger">
                  <VCalendar class="calSet" v-model="date" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input
                      :value="inputValue"
                      @click="togglePopover()"
                      readonly
                      placeholder="예약일 선택"
                      />
                    </template>
                  </VCalendar>
                  <span class="selectSet lCase ml10">
                    <select name="" id="">
                      <option value="">예약시간 설정</option>
                    </select>
                  </span>
                </div>
              </td>
            </tr>
            <!-- //발송 시점 -->
            <!-- 발신번호 -->
            <tr>
              <th scope="row">발신번호 <sup>필수</sup></th>
              <td colspan="3">
                <input type="text" class="w150" value="1544-0678" maxlength="11" oninput="maxLengthCheck(this)"><!-- 2021-08-23 입력 형식 변경 -->
              </td>
            </tr>
            <!-- //발신번호 -->
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
  name: 'MemberMsgSend',
  data() {
    return {
      smsTrigger: false,
      alertTrigger: false,
      categoryTrigger: false,
      memberTrigger: false,
      date: '',
      pointTrigger: false,
      fileName: '아이디 또는 회원번호 리스트를 csv 파일로 첨부',
      fileName02: '휴대전화번호 리스트를 csv 파일로 첨부',
    }
  },
  methods: {
    MsgOftenList() {
      let routeData = this.$router.resolve({name: 'MsgOftenList', query: {data: "someData"}});
      window.open('/mkup/windowPopup/msgOftenList', '_blank', `width=1100,height=900`);
    },
    onChange02(event) {
      let optionText = event.target.value;
      optionText == 'point1' ? this.pointTrigger = false : this.pointTrigger = true;
    },
    fileUpload(event) {
      this.fileName = event.target.value;
    },
    onChange03(event) {
        let value = event.target.value;
        value == 'direct' ? this.categoryTrigger = true : this.categoryTrigger = false;
    },
    onChange04(event) {
        let value = event.target.value;
        if (value == 'none') {
          document.getElementById('fileBoardTop').style.width = '680px';
          this.memberTrigger = true;
        } else {
          document.getElementById('fileBoardTop').style.width = '100%';
          this.memberTrigger = false;
        }
    },
    maxLengthCheck(object){
    if (object.value.length > object.maxLength){
      object.value = object.value.slice(0, object.maxLength);
    }
  }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
