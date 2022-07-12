<template lang="html">
  <div>
    <!-- 참여 시험장 (패키지)-->
    <div class="subTit">
      <h3>참여 시험장 <span class="fBlue">(패키지 모의고사)</span></h3>
      <button class="btnS ml20">시험장 추가</button>
    </div>
    <div class="backBeige pd10">
      - 시험장 명 : <strong>EP20210101002</strong>
      <button class="btnDelete ml10">삭제</button>
    </div>
    <div class="tls mb20">
      <table>
        <colgroup>
          <col width="50">
          <col width="120">
          <col width="100">
          <col width="150">
          <col width="400">
          <col width="600">
        </colgroup>
        <thead>
          <tr>
            <th>회차</th>
            <th>전공과목 (선생님)</th>
            <th>교시배정</th>
            <th>시험 코드</th>
            <th>시험 명</th>
            <th>시험 응시 기간 / 해설 강의 기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">2</td>
            <td rowspan="2"><strong>국어/박노송</strong></td>
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
            <td rowspan="2" class="vTop tL">
              <ul>
                <li>
                  <strong>시험 응시 기간 :</strong>
                  <div class="mt5">
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
                  </div>
                </li>
                <li class="mt10">
                  <strong>해설 강의 기간 :</strong>
                  <div class="mt5">
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
                  </div>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>3교시</td>
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
        </tbody>
      </table>
    </div>
    <div class="backBeige pd10">
      - 시험장 명 : <strong>EP20210101001</strong>
      <button class="btnDelete ml10">삭제</button>
    </div>
    <div class="tls mb20">
      <table>
        <colgroup>
          <col width="50">
          <col width="120">
          <col width="100">
          <col width="150">
          <col width="400">
          <col width="600">
        </colgroup>
        <thead>
          <tr>
            <th>회차</th>
            <th>전공과목 (선생님)</th>
            <th>교시배정</th>
            <th>시험 코드</th>
            <th>시험 명</th>
            <th>시험 응시 기간 / 해설 강의 기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">1</td>
            <td rowspan="2"><strong>국어/박노송</strong></td>
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
            <td rowspan="2" class="vTop tL">
              <ul>
                <li>
                  <strong>시험 응시 기간 :</strong>
                  <div class="mt5">
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
                  </div>
                </li>
                <li class="mt10">
                  <strong>해설 강의 기간 :</strong>
                  <div class="mt5">
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
                  </div>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
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
    <!-- //참여 시험장 (패키지) -->
    <!-- 참여 시험장 (단일)-->
    <div class="subTit">
      <h3>참여 시험장 <span class="fBlue">(단일 모의고사)</span></h3>
      <span class="right">
        <em> M-99999999999 |  단일  |  국어  |  박노송  |  2.3교시 타입  |  박노송 전공국어 – 월별 모의고사</em>입니다.
      </span>
    </div>
    <div class="backBeige pd10">
      - 시험장 명 : <strong>EP20210101002</strong>
    </div>
    <div class="tls mb20">
      <table>
        <colgroup>
          <col width="120">
          <col width="100">
          <col width="150">
          <col width="400">
          <col width="600">
        </colgroup>
        <thead>
          <tr>
            <th>순서변경</th>
            <th>교시배정</th>
            <th>시험 코드</th>
            <th>시험 명</th>
            <th>해설 강의 기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>교육학/김현</td>
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
        </tbody>
      </table>
    </div>
    <!-- //참여 시험장 (단일)-->
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
  name: 'MonthTestViewParpat',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
