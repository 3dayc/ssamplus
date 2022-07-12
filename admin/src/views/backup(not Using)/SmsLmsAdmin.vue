<template lang="html">
  <div>
    <!-- -->
    <div class="boardTop">
      <div class="right">
        <div class="btnArea">
          <button class="btnM green" @click="toastPop('error', '필수 항목 및 입력 형식을 확인해주세요.')">전송</button>
          <button class="btnM" @click="alertTrigger = true">임시저장</button> <!-- 클릭시 alertpop open -->
          <button class="btnM line">취소</button>
        </div>
      </div>
    </div>
    <!-- -->

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
                <input type="radio" name="purpose" id="purpose1" checked />
                <label for="purpose1"><i></i>홍보용</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="purpose" id="purpose2" />
                <label for="purpose2"><i></i>안내용</label>
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row">메시지 내용 <sup>필수항목</sup></th>
            <td colspan="3">
              <!-- SMS -->
              <div v-show="!smsTrigger">
                <button class="btnM green mb10" @click="MsgOftenList()">자주 쓰는 메시지</button>
                <div class="msgForm">
                  <div class="formTitle"></div>
                  <div class="formCnts">
                    <textarea id="smsTxt" @keyup="tCounterPress">
                      무료수신거부
                      080-801-4041
                    </textarea>
                    <span class="cTxt"><strong>SMS 기준</strong> (<em>{{ smsTCounter }}</em>/80 Byte)</span>
                  </div>
                </div>
              </div>
              <!-- //SMS -->
              <!-- LMS -->
              <div v-show="smsTrigger">
                <button class="btnM green mb10" @click="MsgOftenList()">자주 쓰는 메시지</button>
                <div class="msgForm">
                  <div class="formTitle">
                    <input type="text" placeholder="제목">
                  </div>
                  <div class="formCnts">
                    <textarea id="lmsTxt" @keyup="tCounterPress">
                      무료수신거부
                      080-801-4041
                    </textarea>
                    <span class="cTxt"><strong>LMS 기준</strong> (<em>{{ lmsTCounter }}</em>/80 Byte)</span>
                  </div>
                </div>
              </div>
              <!-- //LMS -->
            </td>
          </tr>
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
          <tr>
            <th scope="row">수신자 선택 <sup>필수항목</sup></th>
            <td colspan="3">
              <div class="mb10">
                <span class="radioSet">
                  <input type="radio" name="recep" id="recep1" @change="onChange($event)" value="recep1" checked />
                  <label for="recep1"><i></i>직접 입력</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="recep" id="recep2" value="recep2" @change="onChange($event)" />
                  <label for="recep2"><i></i>검색으로 입력</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="recep" id="recep3" value="recep3" @change="onChange($event)" />
                  <label for="recep3"><i></i>파일 업로드</label>
                </span>
              </div>

              <!-- 직접 입력 -->
              <div class="telAddBox" v-if="receipTrigger01">
                <div class="innerBox">
                  <span class="saveBox">010-2143-1233 <button>닫기</button></span>
                  <span class="saveBox">010-2143-1233 <button>닫기</button></span>
                  <span class="saveBox">010-2143-1233 <button>닫기</button></span>
                  <input type="text" placeholder="숫자 입력 후 콤마로 구분">
                </div>
                <span class="infoMsg fRed">* 홍보용 SM는 SMS 수신에 동의한 회원에게만 전송됩니다.</span>
              </div>
              <!-- //직접 입력 -->

              <!-- 검색으로 입력 -->
              <div v-if="receipTrigger02">
                <button type="button" class="btnS line" @click="MsgReceiver()">검색</button>
                <div class="listSummery">
                  <div class="right">
                    <dl>
                      <dt>수신자 총</dt>
                      <dd><strong>4</strong>명</dd>
                    </dl>
                  </div>
                </div>
                <div class="tls">
                  <table>
                    <colgroup><col span="4" /><col style="width:60px;"></colgroup>
                    <thead>
                      <tr>
                        <th scope="col">회원번호</th>
                        <th scope="col">이름/아이디</th>
                        <th scope="col">휴대전화 번호</th>
                        <th scope="col">SMS 수신</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2812312</td>
                        <td>김*수<br/>(k*****)</td>
                        <td>010-****-****</td>
                        <td>동의</td>
                        <td><button class="btnDelete">삭제</button></td>
                      </tr>
                      <tr>
                        <td>2812312</td>
                        <td>김*수<br/>(k*****)</td>
                        <td>010-****-****</td>
                        <td>동의</td>
                        <td><button class="btnDelete">삭제</button></td>
                      </tr>
                      <tr>
                        <td>2812312</td>
                        <td>김*수<br/>(k*****)</td>
                        <td>010-****-****</td>
                        <td>동의</td>
                        <td><button class="btnDelete">삭제</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- //검색으로 입력 -->

              <!-- 파일업로드 -->
              <div v-if="receipTrigger03">
                <span class="selectSet lCase mr5">
                  <select name="" id="" @change="onChange04($event)">
                    <option value="">회원 리스트</option>
                    <option value="none">비회원 리스트</option>
                  </select>
                </span>
                <span class="uploadFileSet" v-if="!memberTrigger">
                  <span class="uploadFile">
                    <input type="file" id="file" @change="fileUpload">
                    <span class="upload-name">
                      {{ fileName }}
                    </span>
                    <label for="file">불러오기</label>
                  </span>
                  <a href="#none;" class="btnS" download>샘플 양식</a>
                </span>
                <span class="uploadFileSet" v-if="memberTrigger">
                  <span class="uploadFile">
                    <input type="file" id="file" @change="fileUpload">
                    <span class="upload-name">
                      {{ fileName02 }}
                    </span>
                    <label for="file">불러오기</label>
                  </span>
                  <a href="#none;" class="btnS" download>샘플 양식</a>
                </span>

                <!-- 회원 리스트 테이블 -->
                <div v-if="!memberTrigger">
                  <div class="listSummery">
                    <div class="right">
                      <dl>
                        <dt>수신자 총</dt>
                        <dd><strong>4</strong>명</dd>
                      </dl>
                    </div>
                  </div>
                  <div class="tls">
                    <table>
                      <colgroup><col span="4" /><col style="width:60px;"></colgroup>
                      <thead>
                        <tr>
                          <th scope="col">회원번호</th>
                          <th scope="col">이름/아이디</th>
                          <th scope="col">휴대전화 번호</th>
                          <th scope="col">SMS 수신</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="expiry"><!--20210715 class 변경-->
                          <td></td>
                          <td>jimino01234</td>
                          <td></td>
                          <td></td>
                          <td><button class="btnDelete">삭제</button></td>
                        </tr>
                        <tr>
                          <td>2812312</td>
                          <td>김*수<br/>(k*****)</td>
                          <td>010-****-****</td>
                          <td>동의</td>
                          <td><button class="btnDelete">삭제</button></td>
                        </tr>
                        <tr>
                          <td>2812312</td>
                          <td>김*수<br/>(k*****)</td>
                          <td>010-****-****</td>
                          <td>동의</td>
                          <td><button class="btnDelete">삭제</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- //회원 리스트 테이블 -->

                <!-- 비회원 리스트 테이블 -->
                <div class="wHalf" v-if="memberTrigger">
                  <div class="listSummery">
                    <div class="right">
                      <dl>
                        <dt>수신자 총</dt>
                        <dd><strong>4</strong>명</dd>
                      </dl>
                    </div>
                  </div>
                  <div class="tls">
                    <table>
                      <colgroup><col/><col style="width:60px;"></colgroup>
                      <thead>
                        <tr>
                          <th scope="col">휴대전화 번호</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>010-1234-5678</td>
                          <td><button class="btnDelete">삭제</button></td>
                        </tr>
                        <tr>
                          <td>010-1234-5678</td>
                          <td><button class="btnDelete">삭제</button></td>
                        </tr>
                        <tr>
                          <td>010-1234-5678</td>
                          <td><button class="btnDelete">삭제</button></td>
                        </tr>
                        <tr>
                          <td>010-1234-5678</td>
                          <td><button class="btnDelete">삭제</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- 비회원 리스트 테이블 -->
              </div>
              <!-- //파일업로드 -->
            </td>
          </tr>
          <tr>
            <th scope="row">발송 시점 <sup>필수항목</sup></th>
            <td colspan="3">
              <div class="mb10">
                <span class="radioSet">
                  <input type="radio" name="point" id="point1" @change="onChange02($event)" value="point1" checked />
                  <label for="point1"><i></i>즉시 발송</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="point" id="point2" @change="onChange02($event)" value="point2" />
                  <label for="point2"><i></i>예약 발송</label>
                </span>
              </div>

              <div v-if="pointTrigger">
                <VCalendar class="calSet" v-model="date" color="green">
                  <template v-slot="{ inputValue, togglePopover }">
                    <input
                    :value="inputValue"
                    @click="togglePopover()"
                    readonly
                    placeholder="일자 선택"
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
          <tr>
            <th scope="row">발신번호 <sup>필수항목</sup></th>
            <td colspan="3">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="">15440678</option>
                </select>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

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

function getByte(str) {
    let resultSize = 0;
    if(str == null) {
        return 0;
    }

    for(let i=0; i<str.length; i++) {
        let c = escape(str.charAt(i));
        if(c.length == 1) {//기본 아스키코드
            resultSize ++;
        } else if(c.indexOf("%u") != -1) {//한글 혹은 기타
            resultSize += 2;
        } else {
            resultSize ++;
        }
    }
    return resultSize;
}

export default {
  mixins: [Mixin],
  name: 'MsgAdmin',
  data() {
    return {
      smsTrigger: false,
      alertTrigger: false,
      categoryTrigger: false,
      memberTrigger: false,
      smsTCounter: 0,
      lmsTCounter: 0,
      date: '',
      receipTrigger01: true,
      receipTrigger02: false,
      receipTrigger03: false,
      pointTrigger: false,
      fileName: '아이디 또는 회원번호 리스트를 csv 파일로 첨부',
      fileName02: '휴대전화번호 리스트를 csv 파일로 첨부',
    }
  },
  methods: {
    MsgOftenList() {
      let routeData = this.$router.resolve({name: 'MsgOftenList', query: {data: "someData"}});
      window.open('/mkup/windowPopup/msgOftenList', '_blank', `width=1300,height=900`);
    },
    MsgReceiver() {
      let routeData = this.$router.resolve({name: 'MsgReceiver', query: {data: "someData"}});
      window.open('/mkup/windowPopup/msgReceiver', '_blank', `width=1300,height=900`);
    },
    tCounterPress(e) {
          let temp_str = e.target.value;

          if (!this.smsTrigger) {
              this.smsTCounter = getByte(temp_str);
              //남은 바이트수를 표시 하기
              if(this.smsTCounter >= 80) {
                  alert(80 + "Bytes를 초과할 수 없습니다.");
                  e.target.value = temp_str.substring(0, temp_str.length-1);
                  this.smsTCounter = 80;

                  e.target.focus();
              }
          } else {
              this.lmsTCounter = getByte(temp_str);
              //남은 바이트수를 표시 하기
              if(this.lmsTCounter >= 80) {
                  alert(80 + "Bytes를 초과할 수 없습니다.");
                  e.target.value = temp_str.substring(0, temp_str.length-1);
                  this.lmsTCounter = 80;

                  e.target.focus();
              }
          }
      },
      onChange(event) {
          let optionText = event.target.value;
          // console.log(event.target);
          if (optionText == 'recep1') {
              this.receipTrigger01 = true;
              this.receipTrigger02 = false;
              this.receipTrigger03 = false;
          } else if(optionText == 'recep2') {
              this.receipTrigger01 = false;
              this.receipTrigger02 = true;
              this.receipTrigger03 = false;
          } else {
              this.receipTrigger01 = false;
              this.receipTrigger02 = false;
              this.receipTrigger03 = true;
          }
      },
      onChange02(event) {
          let optionText = event.target.value;
          // console.log(event.target);
          if (optionText == 'point1') {
              this.pointTrigger = false;
          } else {
              this.pointTrigger = true;
          }
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
          value == 'none' ? this.memberTrigger = true : this.memberTrigger = false;
      }
  },
  components: {
  },
}
</script>
