<template lang="html">
  <div>
    <!-- 기본정보 -->
    <div class="subTit">
      <h3>기본정보</h3>
      <span class="right">
        <em>A20210101010 |  복합  |  1,2.3교시 타입  |  2022년 상반기 희소 모의고사</em>입니다.
      </span>
    </div>
    <div class="tvs">
      <table>
        <colgroup>
          <col width="160"/>
          <col width="40%"/>
          <col width="160"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <th class="backBrown">판매여부 <sup>필수</sup></th>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push1">
                <label for="push1">
                  <span>숨김</span>
                  <span>허용</span>
                </label>
              </span>
            </td>
            <th class="backBrown">접수기간 <sup>필수</sup></th>
            <td>
              <VCalendar class="calSet mr5" v-model="date11" color="green">
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
              <VCalendar class="calSet mr5" v-model="date12" color="green">
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
          <tr>
            <th class="backBrown">판매유형 <sup>필수</sup></th>
            <td>
              <span class="radioSet">
                <input type="radio" name="radio1" checked/>
                <label for=""><i></i>복합 모의고사</label>
              </span>
            </td>
            <th class="backBrown">수험표 출력 <sup>필수</sup></th>
            <td>
              <VCalendar class="calSet mr5" v-model="date21" color="green">
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
              <VCalendar class="calSet mr5" v-model="date22" color="green">
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
          <tr>
            <th class="backBrown">온라인 시험장 <sup>필수</sup></th>
            <td>
              <span class="radioSet">
                <input type="radio" name="radio2" checked/>
                <label for=""><i></i>1,2,3교시 시험장</label>
              </span>
            </td>
            <th class="backBrown">성적표 확인 <sup>필수</sup></th>
            <td>
              <VCalendar class="calSet mr5" v-model="date31" color="green">
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
              <span class="checkSet">
                <input type="checkbox" id="one1" checked />
                <label for="one1"><i></i>추후 발표 예정</label>
              </span>
            </td>
          </tr>
          <tr>
            <th class="backBrown">모의고사명 <sup>필수</sup></th>
            <td colspan="3">
              <input type="text">
              <!-- <span class="erMsg">필수항목 입니다</span> -->
            </td>
          </tr>
          <tr>
            <th class="backBrown">응시구분 <sup>필수</sup></th>
            <td colspan="3">
              <div class="inBlock mr20">
                <span class="checkSet">
                  <input type="checkbox" id="one2" checked />
                  <label for="one2"><i></i>현장 응시</label>
                </span>
                <VCalendar class="calSet mr5" v-model="date41" color="green">
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
              </div>
              <div class="inBlock">
                <span class="checkSet">
                  <input type="checkbox" id="one3" checked />
                  <label for="one3"><i></i>온라인 응시</label>
                </span>
                <VCalendar class="calSet mr5" v-model="date51" color="green">
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
                <VCalendar class="calSet mr5" v-model="date52" color="green">
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
              </div>
            </td>
          </tr>
          <tr>
            <th class="backBrown">판매금액 <sup>필수</sup></br/>(채점여부)</th>
            <td colspan="3">
              <ul class="checkForm">
                <li>
                  <div class="check">
                    <span class="checkSet">
                      <input type="checkbox" id="priceCase1" checked />
                      <label for="priceCase1"><i></i>현장 응시(채점)</label>
                    </span>
                  </div>
                  <div class="detail">
                    <dl>
                      <dt>정가 <sup>필수</sup></dt>
                      <dd><span class="unit w150"><input type="text" class="tR"><em>원</em></span></dd>
                    </dl>
                    <dl>
                      <dt>/ 판매금액 <sup>필수</sup></dt>
                      <dd><span class="unit w150"><input type="text" class="tR"><em>원</em></span></dd>
                    </dl>
                    <span class="infoMsg">(할인율 : <b>99</b>%)</span>
                  </div>
                </li>
                <li>
                  <div class="check">
                    <span class="checkSet">
                      <input type="checkbox" id="priceCase2" checked />
                      <label for="priceCase2"><i></i>온라인 응시(채점)</label>
                    </span>
                  </div>
                  <div class="detail">
                    <dl>
                      <dt>정가 <sup>필수</sup></dt>
                      <dd><span class="unit w150"><input type="text" class="tR"><em>원</em></span></dd>
                    </dl>
                    <dl>
                      <dt>/ 판매금액 <sup>필수</sup></dt>
                      <dd><span class="unit w150"><input type="text" class="tR"><em>원</em></span></dd>
                    </dl>
                    <span class="infoMsg">(할인율 : <b>99</b>%)</span>
                  </div>
                </li>
                <li>
                  <div class="check">
                    <span class="checkSet">
                      <input type="checkbox" id="priceCase3" checked />
                      <label for="priceCase3"><i></i>온라인 응시(자가채점)</label>
                    </span>
                  </div>
                  <div class="detail">
                    <dl>
                      <dt>정가 <sup>필수</sup></dt>
                      <dd><span class="unit w150"><input type="text" class="tR"><em>원</em></span></dd>
                    </dl>
                    <dl>
                      <dt>/ 판매금액 <sup>필수</sup></dt>
                      <dd><span class="unit w150"><input type="text" class="tR"><em>원</em></span></dd>
                    </dl>
                    <span class="infoMsg">(할인율 : <b>99</b>%)</span>
                  </div>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th class="backBrown">재 접속 가능여부<sup>필수</sup></th>
            <td colspan="3">
              <span class="radioSet">
                <input type="radio" name="radio3" checked />
                <label for=""><i></i>가능</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="radio3" />
                <label for=""><i></i>불가 (시험 도중에 퇴장하면 다시 입장이 안됨)</label>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //기본정보 -->
    <!-- 온라인 응시의 시험지 다운로드 및 일정 -->
    <div class="subTit">
      <h3>온라인 응시의 시험지 다운로드 및 일정</h3>
    </div>
    <div class="tvs">
      <table>
        <colgroup>
          <col width="160">
          <col width="40%">
          <col width="160">
          <col width="*">
        </colgroup>
        <tbody>
          <tr>
            <th class="backBrown">시험지 배송 <sup>필수</sup></th>
            <td colspan="3">
              <VCalendar class="calSet mr5" v-model="date61" color="green">
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
              <VCalendar class="calSet mr5" v-model="date62" color="green">
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
          <tr>
            <th class="backBrown">답안지 업로드 <sup>필수</sup></th>
            <td colspan="3">
              <VCalendar class="calSet mr5" v-model="date71" color="green">
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
              <VCalendar class="calSet mr5" v-model="date72" color="green">
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
          <tr>
            <th class="backBrown">시험지 출력 <sup>필수</sup></th>
            <td colspan="3">
              <VCalendar class="calSet mr5" v-model="date81" color="green">
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
              <VCalendar class="calSet mr5" v-model="date82" color="green">
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
          <tr>
            <th class="backBrown">자가 채점 입력 <sup>필수</sup></th>
            <td colspan="3">
              <VCalendar class="calSet mr5" v-model="date91" color="green">
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
          <tr>
            <th>시험지 문서보안</th>
            <td>
              <span class="checkSet">
                <input type="checkbox" id="down"/>
                <label for="down"><i></i>다운로드 제한</label>
              </span>
              <span class="unit small">
                <input type="text" class="tR" disabled>
                <em>회</em>
              </span>
              <span class="checkSet ml20">
                <input type="checkbox" id="print" />
                <label for="print"><i></i>인쇄제한 사용</label>
              </span>
              <span class="unit small">
                <input type="text" class="tR" disabled>
                <em>회</em>
              </span>
            </td>
            <th>답안지 문서보안</th>
            <td>
              <span class="checkSet">
                <input type="checkbox" id="down"/>
                <label for="down"><i></i>다운로드 제한</label>
              </span>
              <span class="unit small">
                <input type="text" class="tR" disabled>
                <em>회</em>
              </span>
              <span class="checkSet ml20">
                <input type="checkbox" id="print" />
                <label for="print"><i></i>인쇄제한 사용</label>
              </span>
              <span class="unit small">
                <input type="text" class="tR" disabled>
                <em>회</em>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //온라인 응시의 시험지 다운로드 및 일정 -->
    <!-- 유의사항 -->
    <div class="subTit">
      <h3>유의사항</h3>
    </div>
    <div class="tvs">
      <table>
        <colgroup>
          <col width="160">
          <col width="*">
        </colgroup>
        <tbody>
          <tr>
            <th>유의사항</th>
            <td><textarea rows="4"></textarea></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //유의사항 -->
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
  name: 'MultiTestViewInfo',
  data() {
    return {
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
      date11: 'YYYY-MM-DD',
      date12: 'YYYY-MM-DD',
      date21: 'YYYY-MM-DD',
      date22: 'YYYY-MM-DD',
      date31: 'YYYY-MM-DD',
      date32: 'YYYY-MM-DD',
      date41: 'YYYY-MM-DD',
      date42: 'YYYY-MM-DD',
      date51: 'YYYY-MM-DD',
      date52: 'YYYY-MM-DD',
      date61: 'YYYY-MM-DD',
      date62: 'YYYY-MM-DD',
      date71: 'YYYY-MM-DD',
      date72: 'YYYY-MM-DD',
      date81: 'YYYY-MM-DD',
      date82: 'YYYY-MM-DD',
      date91: 'YYYY-MM-DD',
      date92: 'YYYY-MM-DD',
      date101: 'YYYY-MM-DD',
      date102: 'YYYY-MM-DD',
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
