<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>상담자 일정</h1>
      <span class="supTxt">* 일정을 수정할 수 있습니다.</span>
    </div>
    <div class="winContent">
      <!-- 설정 -->
      <h3>
        <strong>설정</strong>
        <span class="right">
          <button class="btnS">저장</button>
          <button class="btnS line ml5">삭제</button>
        </span>
      </h3>
      <div class="tvs">
        <table>
          <colgroup><col width="150"/><col width="500"/><col width="150"/><col width="500"/></colgroup>
          <tbody>
            <tr>
              <th>학원<sup>필수</sup></th>
              <td>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">이데아</option>
                    <option value="" selected>아이비</option>
                    <option value="">애비뉴</option>
                  </select>
                </span>
              </td>
              <th>상담자<sup>필수</sup></th>
              <td>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="" selected>홍길동</option>
                  </select>
                </span>
              </td>
            </tr>
            <tr>
              <th>일자<sup>필수</sup></th>
              <td>
                <VCalendar class="calSet" v-model="date" color="green">
                  <template v-slot="{ inputValue, togglePopover }">
                    <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                  </template>
                </VCalendar>
              </td>
              <th>시간<sup>필수</sup></th>
              <td>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="no" class="label">시작 시간</option>
                    <option selected>09:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                  </select>
                </span>
                <span class="selectSet ml10">
                  <select name="" id="">
                    <option value="no" class="label">종료 시간</option>
                    <option>09:00</option>
                    <option>10:00</option>
                    <option selected>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                  </select>
                </span>
              </td>
            </tr>
            <tr>
              <th>반복</th>
              <td colspan="3">
                <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                  <template v-slot="{ inputValue, togglePopover, isDragging }">
                    <input :value="inputValue.start + ' ~ ' + inputValue.end" :class="isDragging ? 'text-green-600' : 'text-green-900'" @click="togglePopover()" placeholder="시작일 선택 ~ 종료일 선택" />
                  </template>
                </Vcalendar>
                <span class="weekCheckSet ml10">
                  <span class="all">
                    <input type="checkbox" id="all" />
                    <label for="all">All</label>
                  </span>
                  <span>
                    <input type="checkbox" id="monday1" />
                    <label for="monday1">월</label>
                  </span>
                  <span>
                    <input type="checkbox" id="tuesday" />
                    <label for="tuesday">화</label>
                  </span>
                  <span>
                    <input type="checkbox" id="wednesday" />
                    <label for="wednesday">수</label>
                  </span>
                  <span>
                    <input type="checkbox" id="thursday" checked/>
                    <label for="thursday">목</label>
                  </span>
                  <span>
                    <input type="checkbox" id="friday" />
                    <label for="friday">금</label>
                  </span>
                  <span>
                    <input type="checkbox" id="saturday" checked />
                    <label for="saturday">토</label>
                  </span>
                  <span>
                    <input type="checkbox" id="sunday" />
                    <label for="sunday">일</label>
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <th>비고</th>
              <td colspan="3"><input type="text"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //설정 -->
      <!-- 관리 -->
      <h3><strong>관리</strong></h3>
      <div class="tvs record">
        <table>
          <colgroup><col width="160"><col width="*"></colgroup>
          <tbody>
            <tr>
              <th>메모</th>
              <td>
                <span class="ipBtn sizeM">
                  <input type="text">
                  <button class="btnM line">저장</button>
                </span>
                <ul class="recordList">
                  <li>
                    <strong>[2021-02-23 15:35 / 박미진 ]</strong> 수강료 장기 연체 고객입니다. 현재 무통장 입금으로 계좌번호 전달한 상태임. <button class="btnDelete">삭제</button>
                  </li>
                  <li>
                    <strong>[2021-02-23 15:35 / 박미진 ]</strong> 수강료 장기 연체 고객입니다. 현재 무통장 입금으로 계좌번호 전달한 상태임.
                  </li>
                  <li>
                    <strong>[2021-02-23 15:35 / 박미진 ]</strong> 수강료 장기 연체 고객입니다. 현재 무통장 입금으로 계좌번호 전달한 상태임.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>수정 이력</th>
              <td>
                <ul class="recordList">
                  <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong>   제목 변경 </li>
                  <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong>   파일첨부 변경 </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //관리 -->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'BbsCounselScheduleView',
  data() {
    return {
      date: '',
      range: {
        start: new Date(),
        end: new Date(),
      },
    }
  },
  components: {
  }
}
</script>
