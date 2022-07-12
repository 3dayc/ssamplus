<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="listSearch left">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <VCalendar class="calSet" v-model="date" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                </template>
              </VCalendar>
            </span>
            <span class="lsItem">
              <button class="btnSearch">검색</button>
            </span>
          </div>
          <div>
            <button class="btnRefresh">초기화</button>
          </div>
        </div>
      </div>
      <div class="right-po">
        <dl>
          <dt>2021년 수강생 총합</dt>
          <dd><strong>1,240</strong>명</dd>
        </dl>
        <dl>
          <dt>2020년 수강생 총합</dt>
          <dd><strong>1,240</strong>명</dd>
        </dl>
      </div>
    </div>
    <!-- //검색 -->
    <!-- 목록 -->
    <div class="tls">
      <table>
        <thead>
          <tr>
            <th>과목</th>
            <th>교수코드</th>
            <th>교수</th>
            <th>2021년 수강생</th>
            <th>2020년 수강생</th>
            <th>증감</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="3">교육학</td>
            <td>T07010001</td>
            <td>권구현</td>
            <td>60</td>
            <td>57</td>
            <td>3</td>
          </tr>
          <tr>
            <td>T07010002</td>
            <td>김현</td>
            <td>60</td>
            <td>57</td>
            <td class="fRed">-11</td>
          </tr>
          <tr>
            <td>T07010003</td>
            <td>윤중생</td>
            <td>60</td>
            <td>57</td>
            <td>11</td>
          </tr>
          <tr>
            <td rowspan="3">유아</td>
            <td>T02010001</td>
            <td>배지윤</td>
            <td>60</td>
            <td>57</td>
            <td class="fRed">-11</td>
          </tr>
          <tr>
            <td>T02010002</td>
            <td>양재웅</td>
            <td>60</td>
            <td>57</td>
            <td>3</td>
          </tr>
          <tr>
            <td>T02010003</td>
            <td>이동건</td>
            <td>60</td>
            <td>57</td>
            <td class="fRed">-11</td>
          </tr>
          <tr>
            <td rowspan="4">전공국어</td>
            <td>T04010001</td>
            <td>김준</td>
            <td>60</td>
            <td>57</td>
            <td>3</td>
          </tr>
          <tr>
            <td>T04010002</td>
            <td>박노송</td>
            <td>60</td>
            <td>57</td>
            <td class="fRed">-11</td>
          </tr>
          <tr>
            <td>T02010003</td>
            <td>송헌</td>
            <td>60</td>
            <td>57</td>
            <td>3</td>
          </tr>
          <tr>
            <td>T02010003</td>
            <td>송헌/김준팀</td>
            <td>60</td>
            <td>57</td>
            <td class="fRed">-11</td>
          </tr>
          <tr>
            <td rowspan="4">전공영어</td>
            <td>T04010001</td>
            <td>김준</td>
            <td>60</td>
            <td>57</td>
            <td>3</td>
          </tr>
          <tr>
            <td>T04010002</td>
            <td>박노송</td>
            <td>60</td>
            <td>57</td>
            <td class="fRed">-11</td>
          </tr>
          <tr>
            <td>T02010003</td>
            <td>송헌</td>
            <td>60</td>
            <td>57</td>
            <td>3</td>
          </tr>
          <tr>
            <td>T02010003</td>
            <td>송헌/김준팀</td>
            <td>60</td>
            <td>57</td>
            <td class="fRed">-11</td>
          </tr>
          <tr>
            <td rowspan="2">전공수학</td>
            <td>T04010001</td>
            <td>김준</td>
            <td>60</td>
            <td>57</td>
            <td>3</td>
          </tr>
          <tr>
            <td>T04010002</td>
            <td>박노송</td>
            <td>60</td>
            <td>57</td>
            <td class="fRed">-11</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //목록 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'UserCharacterOnline',
  data() {
    return {
      date: '',
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
