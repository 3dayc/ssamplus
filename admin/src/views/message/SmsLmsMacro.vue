<template lang="html">
  <div>
    <div class="boardTop">
      <div class="right-po">
        <button class="btnM redline" @click="alertTrigger = true">테스트 발송</button> <!-- 클릭시 alertpop open -->
        <button class="btnM green" @click="toastPop('error', '필수 항목 및 입력 형식을 확인해주세요.')">전송</button>
        <button class="btnM" @click="alertTrigger02 = true">임시저장</button> <!-- 클릭시 alertpop open -->
        <button class="btnM line">취소</button>
      </div>
    </div>

    <div class="tvs">
      <table>
        <caption>매크로 발송</caption>
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
                <input type="radio" name="purpose02" id="purpose1" />
                <label for="purpose1"><i></i>홍보용</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="purpose02" id="purpose2" checked />
                <label for="purpose2"><i></i>안내용</label>
              </span>
              <span class="infoMsg fRed">* 발송 목적 변경 시 수신자 선택이 초기화됩니다. </span>
            </td>
          </tr>
          <tr>
            <th scope="row">메시지 내용 <sup>필수항목</sup></th>
            <td colspan="3">
              <!-- SMS -->
              <div v-show="!smsTrigger">
                <button class="btnS line mb10" @click="MsgMacro()">매크로 템플릿</button>
                <div class="msgForm">
                  <div class="formTitle"></div>
                  <div class="formCnts">
                    <textarea>
                      안녕하세요, KG에듀원 저작권 담당자입니다. {매크로1}에 회원님께서 접속하신 ID {매크로2}로 강의재생하신 이력이 확인되어 문자 드립니다. 이후에 동일 현상이 지속 발생 시 강의 수강에 제한이 발생할 수 있습니다.
                    </textarea>
                    <span class="cTxt"><strong>SMS 기준</strong> (<em>0</em>/80 Byte)</span>
                  </div>
                </div>
              </div>
              <!-- //SMS -->
              <!-- LMS -->
              <div v-show="smsTrigger">
                <button class="btnS line mb10" @click="MsgMacro()">매크로 템플릿</button>
                <div class="msgForm lmsCase">
                  <div class="formTitle">
                    <input type="text" placeholder="제목">
                  </div>
                  <div class="formCnts">
                    <textarea>
                      무료수신거부
                      080-801-4041
                    </textarea>
                    <span class="cTxt"><strong>LMS 기준</strong> (<em>0</em>/2,000 Byte)</span>
                  </div>
                </div>
              </div>
              <!-- //LMS -->
            </td>
          </tr>
          <!-- 매크로 템플릿 저장 -->
          <tr>
            <th scope="row">매크로 템플릿 저장</th>
            <td colspan="3">
              <div class="inputForm">
                <span class="selectSet lCase">
                  <select name="" id="" @change="onChange03($event)">
                    <option value="">카테고리</option>
                    <option value="">불법녹화/녹음</option>
                    <option value="">불법공유</option>
                    <option value="">쿠폰발급</option>
                    <option value="">쿠폰만료</option>
                    <option value="direct">직접 입력</option>
                  </select>
                </span>
                <input type="text" placeholder="템플릿 명" v-if="!categoryTrigger">
                <span class="inpDirect" v-if="categoryTrigger">
                  <input type="text" placeholder="카테고리명 입력">
                  <input type="text" placeholder="템플릿 명">
                </span>
              </div>
            </td>
          </tr>
          <!-- //매크로 템플릿 저장 -->
          <tr>
            <th scope="row">수신자 / 변수 <sup>필수항목</sup></th>
            <td colspan="3">
              <div class="boardTop">
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
              <div class="w800">
                <div class="listSummery pd0 mb10">
                  <span class="left">
                    <p class="infoMsg fRed mt10">* 발송목적 '홍보용'인 경우, SMS 수신에 동의한 회원만 화면에 표시됩니다.</p>
                  </span>
                  <span class="right">
                    <dl>
                      <dt>수신자 총</dt>
                      <dd><strong>4</strong>명</dd>
                    </dl>
                  </span>
                </div>
                <div class="tls">
                  <table>
                    <colgroup>
                      <col/>
                      <col/>
                      <col/>
                      <col/>
                      <col style="width:60px;">
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">휴대전화번호</th>
                        <th scope="col">매크로1</th>
                        <th scope="col">매크로2</th>
                        <th scope="col">매크로3</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>010-1234-5678</td>
                        <td>4월 30일</td>
                        <td>Jimin0123</td>
                        <td>울트라캠</td>
                        <td><button class="btnDelete">삭제</button></td>
                      </tr>
                      <tr>
                        <td>010-1234-5678</td>
                        <td>4월 30일</td>
                        <td>Jimin0123</td>
                        <td>울트라캠</td>
                        <td><button class="btnDelete">삭제</button></td>
                      </tr>
                      <tr>
                        <td>010-1234-5678</td>
                        <td>4월 30일</td>
                        <td>Jimin0123</td>
                        <td>울트라캠</td>
                        <td><button class="btnDelete">삭제</button></td>
                      </tr>
                      <tr>
                        <td>010-1234-5678</td>
                        <td>4월 30일</td>
                        <td>Jimin0123</td>
                        <td>울트라캠</td>
                        <td><button class="btnDelete">삭제</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- 수신자 리스트 테이블 -->
            </td>
          </tr>
          <tr>
            <th scope="row">발송 시점 <sup>필수항목</sup></th>
            <td colspan="3">
              <div>
                <span class="radioSet">
                  <input type="radio" name="point02" id="point3" @change="onChange04($event)" value="point3" checked />
                  <label for="point3"><i></i>즉시 발송</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="point02" id="point4" @change="onChange04($event)" value="point4" />
                  <label for="point4"><i></i>예약 발송</label>
                </span>
              </div>
              <div v-if="pointTrigger02" class="mt10">
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
          <tr>
            <th scope="row">발신번호 <sup>필수항목</sup></th>
            <td colspan="3">
              <input class="w150" type="text" value="1544-0678"/><!-- 2021-09-02 발신번호 입력형식 변경 -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
        테스트 발송할 휴대전화 번호를 입력하세요.
        <input type="text" class="mt10" placeholder="휴대전화 번호 입력">
      </template>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger = false">취소</button>
        <button class="btnM green" @click="alertTrigger = false">발송</button>
      </template>
    </Alert>
    <Alert v-if='alertTrigger02' @close="alertTrigger02 = false">
      <template slot="modalbody">
        메시지가 임시저장 되었습니다. 금일 내에 전송을 완료해주세요.
      </template>
      <template slot="modalfooter">
        <button class="btnM green solo" @click="alertTrigger02 = false">확인</button>
      </template>
    </Alert>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SmsLmsMacro',
  data() {
    return {
      smsTrigger: false,
      categoryTrigger: false,
      date: '',
      pointTrigger02: false,
      fileName: 'CSV 파일 업로드',
      alertTrigger: false,
      alertTrigger02: false,
    }
  },
  methods: {
    MsgMacro() {
      let routeData = this.$router.resolve({name: 'MsgMacro', query: {data: "someData"}});
      window.open('/mkup/windowPopup/msgMacro', '_blank', `width=1100,height=900`);
    },
    onChange03(event) {
      let value = event.target.value;
      value == 'direct' ? this.categoryTrigger = true : this.categoryTrigger = false;
    },
    onChange04(event) {
      let optionText02 = event.target.value;
      optionText02 == 'point3' ? this.pointTrigger02 = false : this.pointTrigger02 = true;
    },
    fileUpload(event) {
      this.fileName = event.target.value;
    },
  },
  components: {
  },
}
</script>
