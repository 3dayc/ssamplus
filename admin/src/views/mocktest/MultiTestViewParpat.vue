<template lang="html">
  <div>
    <!-- 참여 시험장 -->
    <div class="subTit">
      <h3>참여 시험장 <span class="fBlue">(복합 모의고사)</span></h3>
      <button class="btnS ml20">시험장 추가</button>
      <span class="right">
        <em>A20210101010 |  복합  |  1,2.3교시 타입  |  2022년 상반기 희소 모의고사</em>입니다.
      </span>
    </div>
    <div class="backBeige pd10">
      - 시험장 명 : <strong>EP20210101002</strong>
      <button class="btnDelete ml10">삭제</button>
    </div>
    <div class="tls mb20">
      <table>
        <colgroup>
          <col width="150">
          <col width="100">
          <col width="150">
          <col width="400">
          <col width="600">
        </colgroup>
        <thead>
          <tr>
            <th>과목 (선생님)</th>
            <th>교시배정</th>
            <th>시험 코드</th>
            <th>시험 명</th>
            <th>해설 강의 기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label">선생님</option>
                </select>
              </span>
            </td>
            <td>1교시</td>
            <td>
              <div class="autoComplete">
                <input type="text">
                <span class="iSearch">검색</span>
              </div>
            </td>
            <td>
              <div class="autoComplete">
                <input type="text">
                <span class="iSearch">검색</span>
              </div>
            </td>
            <td rowspan="3" class="vTop">
              <VCalendar class="calSet mr5" v-model="date101" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="YYYY-MM-DD" />
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
              <VCalendar class="calSet mr5" v-model="date102" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="YYYY-MM-DD" />
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
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label">선생님</option>
                </select>
              </span>
            </td>
            <td>2교시</td>
            <td>
              <div class="autoComplete">
                <input type="text">
                <span class="iSearch">검색</span>
              </div>
            </td>
            <td>
              <div class="autoComplete">
                <input type="text">
                <span class="iSearch">검색</span>
              </div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>3교시</td>
            <td>
              <div class="autoComplete">
                <input type="text">
                <span class="iSearch">검색</span>
              </div>
            </td>
            <td>
              <div class="autoComplete">
                <input type="text">
                <span class="iSearch">검색</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="backBeige pd10">
      - 시험장 명 : <strong>EP20210101001</strong>
      <button class="btnDelete ml10">삭제</button>
    </div>
    <div class="tls">
      <table>
        <colgroup>
          <col width="150">
          <col width="100">
          <col width="150">
          <col width="400">
          <col width="600">
        </colgroup>
        <thead>
          <tr>
            <th>과목 (선생님)</th>
            <th>교시배정</th>
            <th>시험 코드</th>
            <th>시험 명</th>
            <th>해설 강의 기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label">선생님</option>
                </select>
              </span>
            </td>
            <td>1교시</td>
            <td>
              <div class="autoComplete">
                <input type="text" value="M2021010101001">
                <span class="iSearch">검색</span>
              </div>
            </td>
            <td>
              <div class="autoComplete">
                <input type="text" value="2021년 5월 출제위원 모의고사 (교육학-김현)">
                <span class="iSearch">검색</span>
              </div>
            </td>
            <td rowspan="3" class="vTop">
              <VCalendar class="calSet mr5" v-model="date111" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="YYYY-MM-DD" />
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
              <VCalendar class="calSet mr5" v-model="date112" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="YYYY-MM-DD" />
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
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label">선생님</option>
                </select>
              </span>
            </td>
            <td>2교시</td>
            <td>
              <div class="autoComplete">
                <input type="text" value="M2021010101002">
                <span class="iSearch">검색</span>
              </div>
            </td>
            <td>
              <div class="autoComplete">
                <input type="text" value="2021년 5월 출제위원 모의고사 (국어-박노송2)">
                <span class="iSearch">검색</span>
              </div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>3교시</td>
            <td>
              <div class="autoComplete">
                <input type="text">
                <span class="iSearch">검색</span>
              </div>
            </td>
            <td>
              <div class="autoComplete">
                <input type="text">
                <span class="iSearch">검색</span>
                <ul class="optionList">
                  <li>2021년 5월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 5월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 5월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 5월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송3)</li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //참여 시험장 -->
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
  name: 'MultiTestViewParpat',
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
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
