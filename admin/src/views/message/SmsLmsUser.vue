<template lang="html">
  <div>

    <div class="boardTop">
      <div class="right-po">
        <button class="btnM green" @click="toastPop('error', '필수 항목 및 입력 형식을 확인해주세요.')">전송</button>
        <button class="btnM" @click="alertTrigger = true">임시저장</button> <!-- 클릭시 alertpop open -->
        <button class="btnM line">취소</button>
      </div>
    </div>

    <!-- 관리자 발송 테이블 -->
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
          <!-- 발송 유형 -->
          <tr>
            <th scope="row">발송 유형 <sup>필수항목</sup></th>
            <td>
              <span class="radioSet">
                <input type="radio" name="type" id="type1"  @click="smsTrigger = false" disabled/>
                <label for="type1"><i></i>SMS</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="type" id="type2" @click="smsTrigger = true" checked/>
                <label for="type2"><i></i>LMS</label>
              </span>
            </td>
            <th scope="row">발송 목적 <sup>필수항목</sup></th>
            <td>
              <span class="radioSet">
                <input type="radio" name="purpose" id="purpose1" checked />
                <label for="purpose1"><i></i>홍보용</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="purpose" id="purpose2" />
                <label for="purpose2"><i></i>안내용</label>
              </span>
              <span class="infoMsg fRed">* 발송 목적 변경 시 수신자 선택이 초기화됩니다. </span>
            </td>
          </tr>
          <!-- //발송 유형 -->
          <!-- 메시지 내용 -->
          <tr>
            <th scope="row">메시지 내용 <sup>필수항목</sup></th>
            <td>
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
                <div class="msgForm lmsCase">
                  <div class="formTitle">
                    <input type="text" placeholder="제목">
                  </div>
                  <div class="formCnts">
                    <textarea>- 희소식 5월호 - 

                      고민은 희소가 안고 갈게! [감정 휴지통 이벤트] 누구에게도 말하지 못한 임고생만의 고민들, 희소식 담당자에게 남기면? 

                      ■ 수험생 필수템 크록스 증정 
                      ■ 내 고민이 버려지는 영상까지? 희소식 담당자는 어떤 고민이든 버려줌! 여루분, 힘내세요! 

                      ▼ 고민 남기러 가기 ▼ 
                      [URL] 

                      무료수신거부 080-801-4041</textarea>
                    <span class="cTxt"><strong>LMS 기준</strong> (<em>0</em>/2,000 Byte)</span>
                  </div>
                </div>
              </div>
              <!-- //LMS -->
            </td>
            <td colspan="2" class="vTop">
              <strong>&#60; 예제 &#62;</strong>
              <div class="msgSample mt5">
                <p>- 희소식 5월호 -<br/><br/>
                  고민은 희소가 안고 갈게! [감정 휴지통 이벤트] 누구에게도 말하지 못한 임고생만의 고민들, 희소식 담당자에게 남기면? <br/><br/>
                  ■ 수험생 필수템 크록스 증정 <br/>■ 내 고민이 버려지는 영상까지? 희소식 담당자는 어떤 고민이든 버려줌! 여러분, 힘내세요! <br/><br/>
                  ▼ 고민 남기러 가기 ▼<br/> [URL]<br/><br/>무료수신거부 080-801-4041</p>
              </div>
            </td>
          </tr>
          <!-- //메시지 내용 -->
          <!-- 변경 대상 (URL) -->
          <tr>
            <th scope="row">변경 대상 (URL) <sup>필수</sup></th>
            <td colspan="3">
              <input type="text" placeholder="URL 입력" class="w600"/>
              <p class="infoMsg fGray mt5">* 해당 페이지에는 추적을 위한 프로그램 코드가 삽입되어 있어야 합니다.</p>
            </td>
          </tr>
          <!-- //변경 대상 (URL) -->
          <!-- 수신자 선택 -->
          <tr>
            <th scope="row">수신자 선택 <sup>필수항목</sup></th>
            <td colspan="3">
              <!-- 파일업로드 -->
              <div>
                <div class="boardTop" id="fileBoardTop">
                  <div class="left-po">
                    <span class="uploadFileSet">
                      <span class="uploadFile">
                        <input type="file" id="file" @change="fileUpload">
                        <span class="upload-name">
                          {{ fileName }}
                        </span>
                        <label for="file">불러오기</label>
                      </span>
                      <a href="#none;" class="btnS" download>샘플 양식</a>
                    </span>
                  </div>
                </div>
                <!-- 수신자 리스트 테이블 -->
                <div class="w575">
                  <div class="listSummery pd0 mb10">
                    <span class="left">
                      <p class="infoMsg fRed">* 발송목적 '홍보용'인 경우, SMS 수신에 동의한 회원만 화면에 표시됩니다.<br/>* 비회원 수신자가 있는 경우 휴대전화번호로 업로드해주세요</p>
                    </span>
                    <span class="right">
                      <dl>
                        <dt>수신자 총</dt>
                        <dd><strong>2</strong>명</dd>
                      </dl>
                    </span>
                  </div>
                  <div class="tls">
                    <table>
                      <colgroup><col/></colgroup>
                      <thead>
                        <tr>
                          <th scope="col">휴대전화번호</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>010-1234-5678</td>
                        </tr>
                        <tr>
                          <td>010-1234-5678</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- 수신자 리스트 테이블 -->
              </div>
              <!-- //파일업로드 -->
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
              <div v-if="pointTrigger" class="mt10">
                <VCalendar class="calSet" v-model="date" color="green">
                  <template v-slot="{ inputValue, togglePopover }">
                    <input
                    :value="inputValue"
                    @click="togglePopover()"
                    readonly
                    placeholder="예약일자 선택"
                    />
                  </template>
                </VCalendar>
                <span class="selectSet lCase ml10">
                  <select name="" id="">
                    <option value="no" class="label">예약시간 설정</option><!-- 15분 단위 -->
                    <option value="">00:00</option>
                    <option value="">00:15</option>
                    <option value="">00:30</option>
                    <option value="">00:45</option>
                    <option value="">01:00</option>
                  </select>
                </span>
              </div>
            </td>
          </tr>
          <!-- //발송 시점 -->
          <!-- 발신번호 -->
          <tr>
            <th scope="row">발신번호 <sup>필수항목</sup></th>
            <td colspan="3">
              <input class="w150" type="text" value="1544-0678"/><!-- 2021-09-02 발신번호 입력형식 변경 -->
            </td>
          </tr>
          <!-- //발신번호 -->
        </tbody>
      </table>
    </div>
    <!-- //관리자 발송 테이블 -->

    <!-- Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
        메시지가 임시저장 되었습니다. 금일 내에 전송을 완료해주세요.
      </template>
      <template slot="modalfooter">
        <button class="btnM green solo" @click="alertTrigger = false">확인</button>
      </template>
    </Alert>
    <!-- //Popup -->

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SmsLmsAdmin',
  data() {
    return {
      smsTrigger: true,
      alertTrigger: false,
      categoryTrigger: false,
      date: '',
      receipTrigger01: true,
      receipTrigger03: false,
      pointTrigger: false,
      fileName: 'CSV 파일 업로드',
      fileName02: '휴대전화번호 리스트를 csv 파일로 첨부',
    }
  },
  methods: {
    onChange(event) {
      let optionText = event.target.value;

      this.receipTrigger01 = false;
      this.receipTrigger03 = false;

      if (optionText == 'recep1') {
        this.receipTrigger01 = true;
      } else {
        this.receipTrigger03 = true;
      }
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
  },
  components: {
  },
}
</script>
