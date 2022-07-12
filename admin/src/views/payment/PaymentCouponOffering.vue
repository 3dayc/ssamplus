<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>쿠폰발급</h1>
      <span class="supTxt">* 쿠폰 발급 대상을 선택할 수 있습니다.</span>
      <!-- 2021-09-02 버튼 위치 변경 -->
      <div class="btnArea">
        <button class="btnM green ml10" @click="alertTrigger = true">발급</button>
        <button class="btnM ml10">취소</button>
      </div>
      <!-- //2021-09-02 버튼 위치 변경 -->
    </div>
    <div class="winContent">
      <!-- 2021-09-02 쿠폰 명 -->
      <div class="subTit">
        <h3><strong>101234 / [신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</strong></h3>
      </div>
      <!-- //2021-09-02 쿠폰 명 -->
      <div class="boardTop">
        <span class="left">
          <div class="mb10">
            <span class="radioSet">
              <input type="radio" name="ciWay" id="ciWay1" value="ciWay1" @change="onChange($event)" checked/>
              <label for="ciWay1"><i></i>회원 검색</label>
            </span>
            <span class="radioSet">
              <input type="radio" name="ciWay" id="ciWay2" value="ciWay2" @change="onChange($event)"/>
              <label for="ciWay2"><i></i>강좌 검색</label>
            </span>
            <span class="radioSet">
              <input type="radio" name="ciWay" id="ciWay3" value="ciWay3" @change="onChange($event)"/>
              <label for="ciWay3"><i></i>파일로 업로드</label>
            </span>
          </div>
        </span>
      </div>
      <!-- 회원 검색 -->
      <div id="ciMember" v-if="ciWayMember">
        <div class="boardTop">
          <div class="left">
            <div class="listSearch">
              <div class="back">
                <div class="bdLine">
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">수강구분</option>
                        <option value="">유료수강</option>
                        <option value="">무료수강</option>
                        <option value="">미수강</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">과목</option>
                        <option value="">교육학</option>
                        <option value="">국어</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <input type="text" placeholder="이름, 아이디 검색" />
                    <button class="btnSearch">검색</button>
                  </span>
                </div>
                <div>
                  <button class="btnRefresh">초기화</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tls subGreen">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="120"/>
              <col width="160"/>
              <col width="120"/>
              <col width="120"/>
              <col width="160"/>
            </colgroup>
            <thead>
              <tr>
                <th>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </th>
                <th>회원번호</th>
                <th>이름/아이디</th>
                <th>수강구분</th>
                <th>과목 (준비시험)</th>
                <th>학교/학과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>361145</td>
                <td>김*민<br/>(jim******)</td>
                <td>유료수강</td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>361145</td>
                <td>김*민<br/>(jim******)</td>
                <td>유료수강</td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>361145</td>
                <td>김*민<br/>(jim******)</td>
                <td>무료수강</td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>361145</td>
                <td>김*민<br/>(jim******)</td>
                <td>무료수강</td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>361145</td>
                <td>김*민<br/>(jim******)</td>
                <td>미수강</td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>361145</td>
                <td>김*민<br/>(jim******)</td>
                <td>미수강</td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>361145</td>
                <td>김*민<br/>(jim******)</td>
                <td>미수강</td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>361145</td>
                <td>김*민<br/>(jim******)</td>
                <td>유료수강</td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
      </div>
      <!-- //회원 검색 -->
      <!-- 강좌 검색 -->
      <div id="ciClass" v-if="ciWayClass">
        <div class="boardTop">
          <div class="left">
            <div class="listSearch">
              <div class="back">

                  <div class="bdLine">
                    <span class="lsItem">
                      <span class="selectSet lCase">
                        <select name="" id="">
                          <option value="no" class="label">직/인강</option>
                          <option value="">직강</option>
                          <option value="">인강</option>
                        </select>
                      </span>
                    </span>
                    <span class="lsItem">
                      <span class="selectSet lCase">
                        <select name="" id="">
                          <option value="no" class="label">연도</option>
                          <option value="">2021</option>
                          <option value="">2020</option>
                          <option value="">2019</option>
                        </select>
                      </span>
                    </span>
                    <span class="lsItem">
                      <span class="selectSet lCase">
                        <select name="" id="">
                          <option value="no" class="label">과목</option>
                          <option value="">교육학</option>
                          <option value="">국어</option>
                        </select>
                      </span>
                    </span>
                    <span class="lsItem">
                      <span class="selectSet lCase">
                        <select name="" id="">
                          <option value="no" class="label">교수</option>
                        </select>
                      </span>
                    </span>
                    <span class="lsItem">
                      <span class="selectSet lCase">
                        <select name="" id="">
                          <option value="no" class="label">강좌유형</option>
                          <option value="">단과</option>
                          <option value="">패키지</option>
                        </select>
                      </span>
                    </span>
                    <span class="lsItem">
                      <input type="text" placeholder="강좌명, 강좌번호 검색" />
                      <button class="btnSearch">검색</button>
                    </span>
                  </div>
                  <div>
                    <spah class="checkSet">
                      <input type="checkbox" checked/>
                      <label for=""><i></i>현재 오픈된 데이터만 조회</label>
                    </spah>
                  </div>

              </div>
            </div>
          </div>
        </div>
        <div class="tls subGreen">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="80"/>
              <col width="100"/>
              <col width="100"/>
              <col width="*"/>
              <col width="100"/>
            </colgroup>
            <thead>
              <tr>
                <th>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </th>
                <th>직/인강</th>
                <th>강좌번호</th>
                <th>교수</th>
                <th>강좌명</th>
                <th>인원</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>직강</td>
                <td>12345</td>
                <td>장영희</td>
                <td class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                <td>10명</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>인강</td>
                <td>12345</td>
                <td>장영희</td>
                <td class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                <td>20명</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>직강</td>
                <td>12345</td>
                <td>장영희</td>
                <td class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                <td>32명</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>인강</td>
                <td>12345</td>
                <td>장영희</td>
                <td class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                <td>10명</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>직강</td>
                <td>12345</td>
                <td>장영희</td>
                <td class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                <td>20명</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>인강</td>
                <td>12345</td>
                <td>장영희</td>
                <td class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                <td>32명</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>직강</td>
                <td>12345</td>
                <td>장영희</td>
                <td class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                <td>10명</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>인강</td>
                <td>12345</td>
                <td>장영희</td>
                <td class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                <td>20명</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
      </div>
      <!-- //강좌 검색 -->
      <!-- 파일로 업로드 -->
      <div id="ciFile" v-if="ciWayFile">
        <span class="uploadFileSet mb10">
          <span class="uploadFile">
            <input type="file" id="file" @change="fileUpload">
            <span class="upload-name">
              {{ fileName }}
            </span>
            <label for="file">불러오기</label>
          </span>
        </span>
        <div class="tls subGreen mb10">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="250"/>
              <col width="200"/>
              <col width="160"/>
              <col width="120"/>
            </colgroup>
            <thead>
              <tr>
                <th>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </th>
                <th>기관명</th>
                <th>기관코드</th>
                <th>이름/아이디</th>
                <th>회원번호</th>
              </tr>
            </thead>
            <tbody>
              <tr class="cancel">
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>서울대학교 교육학부</td>
                <td>210101-001</td>
                <td>jimin0123</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>서울대학교 교육학부</td>
                <td>210101-001</td>
                <td>김*수<br/>(k******)</td>
                <td>361146</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>서울대학교 교육학부</td>
                <td>210101-001</td>
                <td>김*수<br/>(k******)</td>
                <td>361145</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>서울대학교 교육학부</td>
                <td>210101-001</td>
                <td>김*수<br/>(k******)</td>
                <td>361144</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>서울대학교 교육학부</td>
                <td>210101-001</td>
                <td>김*수<br/>(k******)</td>
                <td>361143</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <div class="tls subGreen wHalf">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="200"/>
              <col width="120"/>
            </colgroup>
            <thead>
              <tr>
                <th>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </th>
                <th>이름/아이디</th>
                <th>회원번호</th>
              </tr>
            </thead>
            <tbody>
              <tr class="cancel">
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>jimin0123</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>김*수<br/>(k******)</td>
                <td>동의</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>김*수<br/>(k******)</td>
                <td>동의</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td>김*수<br/>(k******)</td>
                <td></td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="3" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>

      </div>
      <!-- //파일로 업로드 -->
    </div>


    <!-- Popup -->
		<!-- 쿠폰 발행기간 선택 -->
		<Alert v-if='alertTrigger' @close="alertTrigger = false">
			<template slot="modalbody">
				<p>쿠폰 발행기간을 입력해주세요</p>
				<div class="mt10">
          <VCalendar class="calSet" v-model="date" color="green">
            <template v-slot="{ inputValue, togglePopover }">
              <input :value="inputValue" @click="togglePopover()" readonly placeholder="예) 2021-01-01" />
            </template>
          </VCalendar>
					<em>~</em>
          <VCalendar class="calSet" v-model="date" color="green">
            <template v-slot="{ inputValue, togglePopover }">
              <input :value="inputValue" @click="togglePopover()" readonly placeholder="예) 2021-01-01" />
            </template>
          </VCalendar>
				</div>
			</template>
			<template slot="modalfooter">
				<button class="btnM gray" @click="alertTrigger = false">취소</button>
				<button class="btnM green" @click="alertTrigger = false">확인</button>
			</template>
		</Alert>
		<!-- //쿠폰 발행기간 선택 -->
		<!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PaymentCouponOffering',
  data() {
    return {
      ciWayMember: true,
      ciWayClass: false,
      ciWayFile: false,
      alertTrigger: false,
      closeBtn: false,
    }
  },
  methods: {
    onChange(event) {
      let optionText = event.target.value;
      if (optionText == 'ciWay1') {
        this.ciWayMember = true;
        this.ciWayClass = false;
        this.ciWayFile = false;
      } else if(optionText == 'ciWay2') {
        this.ciWayMember = false;
        this.ciWayClass = true;
        this.ciWayFile = false;
      } else {
        this.ciWayMember = false;
        this.ciWayClass = false;
        this.ciWayFile = true;
      }
    },
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
