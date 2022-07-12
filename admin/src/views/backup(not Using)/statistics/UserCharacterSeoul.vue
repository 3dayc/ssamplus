<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="left-po">
        <div class="listSearch">
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
        <span class="checkSet ml10">
          <input type="checkbox" id="one" />
          <label for="one"><i></i>강좌 리스트 보이기</label>
        </span>
      </div>
      <div class="right-po">
        <dl>
          <dt>총 판매량</dt>
          <dd><strong>1,240</strong></dd>
        </dl>
        <dl>
          <dt>전년도 판매량</dt>
          <dd><strong>1,240</strong></dd>
        </dl>
      </div>
    </div>
    <!-- //검색 -->
    <!-- 목록 -->
    <div class="tls">
      <table>
        <colgroup>
          <col width="80"/>
          <col width="100"/>
          <col width="100"/>
          <col width="250"/>
          <col width="100"/>
          <col width="250"/>
          <col width="100"/>
          <col width="100"/>
        </colgroup>
        <thead class="duble">
          <tr>
            <th rowspan="2">과목</th>
            <th rowspan="2">교수코드</th>
            <th rowspan="2">교수</th>
            <th colspan="2">2021년</th>
            <th colspan="2">2020년</th>
            <th rowspan="2">증감</th>
          </tr>
          <tr>
            <th>강좌</th>
            <th>수강생</th>
            <th>강좌</th>
            <th class="borderRight">수강생</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="3">교육학</td>
            <td>T07010001</td>
            <td>권구현</td>
            <td class="tL">
              핵심 플랫폼반(h)<br/>
              키맥락 특강2(h)<br/>
              답안 작성 연습 관리반(h)<br/>
              연간쌤팩(h)<br/>
              3~11월 쌤팩(h)
            </td>
            <td>60</td>
            <td class="tL">
              핵심 플랫폼반(심화)(h)<br/>
              연간 쌤팩(h)<br/>
              3~11월 쌤팩(h)
            </td>
            <td>57</td>
            <td>3</td>
          </tr>
          <tr>
            <td>T07010002</td>
            <td>김헌</td>
            <td class="tL">
              핵심 플랫폼반(h)<br/>
              키맥락 특강2(h)<br/>
              답안 작성 연습 관리반(h)<br/>
              연간쌤팩(h)<br/>
              3~11월 쌤팩(h)
            </td>
            <td>63</td>
            <td class="tL">
              핵심 플랫폼반(심화)(h)<br/>
              연간 쌤팩(h)<br/>
              3~11월 쌤팩(h)
            </td>
            <td>52</td>
            <td class="fRed">-11</td>
          </tr>
          <tr>
            <td>T07010003</td>
            <td>윤중생</td>
            <td class="tL">
              핵심 플랫폼반(h)<br/>
              키맥락 특강2(h)<br/>
              답안 작성 연습 관리반(h)<br/>
              연간쌤팩(h)<br/>
              3~11월 쌤팩(h)
            </td>
            <td>63</td>
            <td class="tL">
              핵심 플랫폼반(심화)(h)<br/>
              연간 쌤팩(h)<br/>
              3~11월 쌤팩(h)
            </td>
            <td>52</td>
            <td>3</td>
          </tr>
          <tr>
            <td rowspan="2">유아</td>
            <td>T07010001</td>
            <td>배지윤</td>
            <td class="tL">
              핵심 플랫폼반(h)<br/>
              키맥락 특강2(h)<br/>
              답안 작성 연습 관리반(h)<br/>
              연간쌤팩(h)<br/>
              3~11월 쌤팩(h)
            </td>
            <td>60</td>
            <td class="tL">
              핵심 플랫폼반(심화)(h)<br/>
              연간 쌤팩(h)<br/>
              3~11월 쌤팩(h)
            </td>
            <td>57</td>
            <td>3</td>
          </tr>
          <tr>
            <td>T07010002</td>
            <td>양재웅</td>
            <td class="tL">
              핵심 플랫폼반(h)<br/>
              3~11월 쌤팩(h)
            </td>
            <td>63</td>
            <td class="tL">
              핵심 플랫폼반(심화)(h)<br/>
              연간 쌤팩(h)<br/>
              3~11월 쌤팩(h)
            </td>
            <td>52</td>
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
  name: 'UserCharacterSeoul',
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
