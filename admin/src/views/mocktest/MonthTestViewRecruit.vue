<template lang="html">
  <div>
    <div class="subTit">
      <h3>접수 및 응시정보</h3>
      <span class="right">
        <em> M-99999999999 |  단일  |  국어  |  박노송  |  2.3교시 타입  |  박노송 전공국어 – 월별 모의고사</em>입니다.
      </span>
    </div>
    <div class="tvs">
      <table>
        <colgroup>
          <col width="10%">
          <col width="40%">
          <col width="10%">
          <col width="40%">
        </colgroup>
        <tbody>
          <tr>
            <th>접수방식 <sup>필수</sup></th>
            <td colspan="3">
              <span class="radioSet">
                <input type="radio" name="receiptTy" id="all" value="all" checked @change="receiptTy();"/>
                <label for="all"><i></i>사전접수 + 일반접수</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="receiptTy" id="basic" value="basic" @change="receiptTy();"/>
                <label for="basic"><i></i>일반접수</label>
              </span>
            </td>
          </tr>
          <tr>
            <th>일반접수기간 <sup>필수</sup></th>
            <td>
              <VCalendar class="calSet mr5" v-model="date92" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                </template>
              </VCalendar>
              <span class="selectSet mr5">
                <select name="" id="">
                  <option v-for="option in timeOptions" v-bind:value="option.value">
                    {{ option.text }}
                  </option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option v-for="option in minuteOptions" v-bind:value="option.value">
                    {{ option.text }}
                  </option>
                </select>
              </span>
              <em class="inBlock mlr5">~</em>
              <VCalendar class="calSet mr5" v-model="date92" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                </template>
              </VCalendar>
              <span class="selectSet mr5">
                <select name="" id="">
                  <option v-for="option in timeOptions" v-bind:value="option.value">
                    {{ option.text }}
                  </option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option v-for="option in minuteOptions" v-bind:value="option.value">
                    {{ option.text }}
                  </option>
                </select>
              </span>
            </td>
            <th>사전접수기간</th>
            <td>
              <VCalendar class="calSet mr5" v-model="date92" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                </template>
              </VCalendar>
              <span class="selectSet mr5">
                <select name="" id="">
                  <option v-for="option in timeOptions" v-bind:value="option.value">
                    {{ option.text }}
                  </option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option v-for="option in minuteOptions" v-bind:value="option.value">
                    {{ option.text }}
                  </option>
                </select>
              </span>
              <em class="inBlock mlr5">~</em>
              <VCalendar class="calSet mr5" v-model="date92" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                </template>
              </VCalendar>
              <span class="selectSet mr5">
                <select name="" id="">
                  <option v-for="option in timeOptions" v-bind:value="option.value">
                    {{ option.text }}
                  </option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option v-for="option in minuteOptions" v-bind:value="option.value">
                    {{ option.text }}
                  </option>
                </select>
              </span>
            </td>
          </tr>
          <tr v-if="before">
            <th>사전접수권한 <sup>필수</sup></th>
            <td colspan="3">
              <button class="btnS line" @click="MocktestMemberAuth()">회원권한</button><span class="ml10 vMiddle">(사전접수 대상 강좌 : <b>5</b>)</span>
              <div class="tls discountList">
                <table>
                  <colgroup>
                    <col width="160">
                    <col width="260">
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">구분</th>
                      <th scope="col">대상</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!--Loop-->
                    <tr>
                      <td>회원</td>
                      <td class="tL">일반회원</td>
                    </tr>
                    <!--//Loop-->
                    <tr>
                      <td>회원</td>
                      <td class="tL">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 시험 과목 별 모집인원 -->
    <div class="subTit">
      <h3>시험 과목 별 모집인원</h3>
    </div>
    <p class="infoMsg fRed mb10">※ 모집인원으로 자동 마감</p>
    <div class="tls" v-if="before">
      <table class="wAuto">
        <colgroup>
          <col width="50">
          <col width="100">
          <col width="100">
          <col width="120">
          <col width="120">
          <col width="120">
          <col width="120">
          <col width="120">
          <col width="120">
        </colgroup>
        <thead>
          <tr>
            <th rowspan="2">회차</th>
            <th rowspan="2">과목</th>
            <th rowspan="2">선생님</th>
            <th colspan="3">전체 모집인원</th>
            <th colspan="3">일반 모집인원</th>
            <th colspan="3">사전 모집인원</th>
          </tr>
          <tr>
            <th>현장 응시(채점)</th>
            <th>온라인(채점)</th>
            <th>온라인(자가채점)</th>
            <th>현장 응시(채점)</th>
            <th>온라인(채점)</th>
            <th>온라인(자가채점)</th>
            <th>현장 응시(채점)</th>
            <th>온라인(채점)</th>
            <th>온라인(자가채점)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>국어</td>
            <td>박노송</td>
            <td>
              <span class="unit w100">
                <input type="text" value="70"/>
                <em>명</em>
              </span>
            </td>
            <td>
              <span class="unit w100">
                <input type="text" value="50"/>
                <em>명</em>
              </span>
            </td>
            <td>
              <span class="unit w100">
                <input type="text" disabled/>
                <em>명</em>
              </span>
            </td>
            <td>9,999명</td>
            <td>9,999명</td>
            <td class="bgGray">-</td>
            <td>
              <span class="unit w100">
                <input type="text" value="20"/>
                <em>명</em>
              </span>
            </td>
            <td>
              <span class="unit w100">
                <input type="text"value="20"/>
                <em>명</em>
              </span>
            </td>
            <td>
              <span class="unit w100">
                <input type="text" disabled/>
                <em>명</em>
              </span>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>국어</td>
            <td>박노송</td>
            <td>70</td>
            <td>50</td>
            <td></td>
            <td>9,999명</td>
            <td>9,999명</td>
            <td class="bgGray">-</td>
            <td>20</td>
            <td>20</td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>국어</td>
            <td>박노송</td>
            <td>70</td>
            <td>50</td>
            <td></td>
            <td>9,999명</td>
            <td>9,999명</td>
            <td class="bgGray">-</td>
            <td>20</td>
            <td>20</td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td>국어</td>
            <td>박노송</td>
            <td>70</td>
            <td>50</td>
            <td></td>
            <td>9,999명</td>
            <td>9,999명</td>
            <td class="bgGray">-</td>
            <td>20</td>
            <td>20</td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td>국어</td>
            <td>박노송</td>
            <td>70</td>
            <td>50</td>
            <td></td>
            <td>9,999명</td>
            <td>9,999명</td>
            <td class="bgGray">-</td>
            <td>20</td>
            <td>20</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tls" v-else="before">
      <table class="wAuto">
        <colgroup>
          <col width="100">
          <col width="100">
          <col width="120">
          <col width="120">
          <col width="120">
        </colgroup>
        <thead>
          <tr>
            <th rowspan="2">과목</th>
            <th rowspan="2">선생님</th>
            <th colspan="3">전체 모집인원</th>
            <th colspan="3">일반 모집인원</th>
          </tr>
          <tr>
            <th>현장 응시(채점)</th>
            <th>온라인(채점)</th>
            <th>온라인(자가채점)</th>
            <th>현장 응시(채점)</th>
            <th>온라인(채점)</th>
            <th>온라인(자가채점)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>국어</td>
            <td>박노송</td>
            <td>
              <span class="unit w100">
                <input type="text" value="70"/>
                <em>명</em>
              </span>
            </td>
            <td>
              <span class="unit w100">
                <input type="text" value="50"/>
                <em>명</em>
              </span>
            </td>
            <td>
              <span class="unit w100">
                <input type="text" disabled/>
                <em>명</em>
              </span>
            </td>
            <td>9,999명</td>
            <td>9,999명</td>
            <td class="bgGray">-</td>
          </tr>
          <tr>
            <td>영어</td>
            <td>차미아</td>
            <td>
              <span class="unit w100">
                <input type="text"/>
                <em>명</em>
              </span>
            </td>
            <td>
              <span class="unit w100">
                <input type="text"/>
                <em>명</em>
              </span>
            </td>
            <td>
              <span class="unit w100">
                <input type="text" disabled/>
                <em>명</em>
              </span>
            </td>
            <td></td>
            <td></td>
            <td class="bgGray"></td>
          </tr>
          <tr>
            <td>수학</td>
            <td>이정훈</td>
            <td>
              <span class="unit w100">
                <input type="text"/>
                <em>명</em>
              </span>
            </td>
            <td>
              <span class="unit w100">
                <input type="text"/>
                <em>명</em>
              </span>
            </td>
            <td>
              <span class="unit w100">
                <input type="text" disabled/>
                <em>명</em>
              </span>
            </td>
            <td></td>
            <td></td>
            <td class="bgGray"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //시험 과목 별 모집인원 -->
    <!-- 관리 -->
    <div class="subTit"><h3>관리</h3></div>
    <div class="tvs record">
      <table>
        <colgroup>
          <col width="160"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <th>수정 이력</th>
            <td>
              <ul class="recordList">
                <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 수정</li>
                <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 등록</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //관리 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MonthTestViewRecruit',
  data() {
    return {
      before: true,
      timeOptions: [
        { text: '00시', value: '00' },
        { text: '01시', value: '01' },
        { text: '02시', value: '02' },
        { text: '03시', value: '03' },
        { text: '04시', value: '04' },
        { text: '05시', value: '05' },
        { text: '06시', value: '06' },
        { text: '07시', value: '07' },
        { text: '08시', value: '08' },
        { text: '09시', value: '09' },
        { text: '10시', value: '10' },
        { text: '11시', value: '11' },
        { text: '12시', value: '12' },
      ],
      minuteOptions: [
        { text: '00분', value: '00' },
        { text: '01분', value: '01' },
        { text: '02분', value: '02' },
        { text: '03분', value: '03' },
        { text: '04분', value: '04' },
        { text: '05분', value: '05' },
        { text: '06분', value: '06' },
        { text: '07분', value: '07' },
        { text: '08분', value: '08' },
        { text: '09분', value: '09' },
        { text: '10분', value: '10' },
        { text: '11분', value: '11' },
        { text: '12분', value: '12' },
        { text: '13분', value: '13' },
        { text: '14분', value: '14' },
        { text: '15분', value: '15' },
        { text: '16분', value: '16' },
        { text: '17분', value: '17' },
        { text: '18분', value: '18' },
        { text: '19분', value: '19' },
        { text: '20분', value: '20' },
        { text: '21분', value: '21' },
        { text: '22분', value: '22' },
        { text: '23분', value: '23' },
        { text: '24분', value: '24' },
        { text: '25분', value: '25' },
        { text: '26분', value: '26' },
        { text: '27분', value: '27' },
        { text: '28분', value: '28' },
        { text: '29분', value: '29' },
        { text: '30분', value: '30' },
        { text: '31분', value: '31' },
        { text: '32분', value: '32' },
        { text: '33분', value: '33' },
        { text: '34분', value: '34' },
        { text: '35분', value: '35' },
        { text: '36분', value: '36' },
        { text: '37분', value: '37' },
        { text: '38분', value: '38' },
        { text: '39분', value: '39' },
        { text: '40분', value: '40' },
        { text: '41분', value: '41' },
        { text: '42분', value: '42' },
        { text: '43분', value: '43' },
        { text: '44분', value: '44' },
        { text: '45분', value: '45' },
        { text: '46분', value: '46' },
        { text: '47분', value: '47' },
        { text: '48분', value: '48' },
        { text: '49분', value: '49' },
        { text: '50분', value: '50' },
        { text: '51분', value: '51' },
        { text: '52분', value: '52' },
        { text: '53분', value: '53' },
        { text: '54분', value: '54' },
        { text: '55분', value: '55' },
        { text: '56분', value: '56' },
        { text: '57분', value: '57' },
        { text: '58분', value: '58' },
        { text: '59분', value: '59' },
      ],
    }
  },
  methods: {
    receiptTy() {
      let receiptType = event.target.value;
      if (receiptType == 'all') {
        this.before = true;
      } else {
        this.before = false;
      }
    },
    MocktestMemberAuth() {
      let routeData = this.$router.resolve({name: 'MocktestMemberAuth', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mocktestMemberAuth', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  }
}
</script>
