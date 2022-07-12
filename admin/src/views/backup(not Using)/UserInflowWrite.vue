<template lang="html">
  <div>
    <div class="pageTit">
      <h2>사용자 유입 LMS 신규등록</h2>
      <span><router-link to="/mkup/message">메시지 관리</router-link><router-link to="/mkup/message">SMS 관리</router-link><router-link to="/mkup/message/influx">사용자 유입 LMS</router-link><em>사용자 유입 LMS 신규등록</em></span>
    </div>
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="userInflowWrite"><!-- class 없어도 유지 -->
          <!-- 테이블 유틸 -->
          <div class="boardTop">
            <div class="right-po">
              <button class="btnM green" @click="toastPop('error', '필수 항목 및 입력 형식을 확인해주세요.')">전송</button>
              <button class="btnM" @click="alertTrigger = true">임시저장</button> <!-- 클릭시 alertpop open -->
              <router-link class="btnM line" to="/mkup/message/userInflow">취소</router-link>
            </div>
          </div>
          <!-- //테이블 유틸 -->
          <!-- 테이블 목록 -->
          <div class="tvs">
            <table>
              <caption>사용자 유입 LMS 발송</caption>
              <colgroup>
                <col style="width:15%;">
                <col style="width:35%;">
                <col style="width:15%;">
                <col style="width:35%;">
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
                  <th scope="row">변경 대상 (URL) <sup>필수 항목</sup></th>
                  <td colspan="2">
                    <input type="text" name="" placeholder="URL 입력">
                    <p class="ptb10 infoMsg">* 해당 페이지에는 추적을 위한 프로그램 코드가 삽입되어 있어야 합니다.</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">수신자 선택 <sup>필수항목</sup></th>
                  <td colspan="3">

                    <div class="boardTop" id="fileBoardTop">
                      <div class="left-po">
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
                      </div>
                      <div class="right-po">
                        <dl>
                          <dt>수신자 총</dt>
                          <dd><strong>4</strong>명</dd>
                        </dl>
                      </div>
                    </div>
                    <!-- 회원 리스트 테이블 -->
                    <div v-if="!memberTrigger">
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
                            <!-- 데이터 없을 경우 -->
                            <tr style="display:none;"><td colspan="10" class="noneData">등록된 데이터가 없습니다.</td></tr>
                            <!-- //데이터 없을 경우 -->
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <!-- //회원 리스트 테이블 -->

                    <!-- 비회원 리스트 테이블 -->
                    <div class="wHalf" v-if="memberTrigger">
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
                            <!-- 데이터 없을 경우 -->
                            <tr style="display:none;"><td colspan="10" class="noneData">등록된 데이터가 없습니다.</td></tr>
                            <!-- //데이터 없을 경우 -->
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <!-- 비회원 리스트 테이블 -->
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
          <!-- //테이블 목록 -->
				</div>
				<!-- //page layout -->
      </article>
    </div>

    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
        메시지가 임시저장 되었습니다. 금일 내에 전송을 완료해주세요.
      </template>
      <template slot="modalfooter">
        <button class="btnM green solo" @click="alertTrigger = false">확인</button>
      </template>
    </Alert>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'UserInflowWrite',
  data() {
    return {
      smsTrigger: false,
      date: '',
      pointTrigger: false,
      fileName: 'CSV 파일 업로드',
      alertTrigger: false,
      memberTrigger: false,
    }
  },
  methods: {
    onChange02(event) {
      let optionText = event.target.value;
      optionText == 'point1' ? this.pointTrigger = false : this.pointTrigger = true;
    },
    fileUpload(event) {
      this.fileName = event.target.value;
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
    }
  },
  components: {
  },
}
</script>
