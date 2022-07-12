<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>강의실 배정표 - 신규 등록</h1>
      <span class="supTxt">* 배정표를 등록하고 수정할 수 있습니다.</span>
    </div>
    <div class="winContent">
      <h3>
        <strong>설정</strong>
        <span class="right">
          <button class="btnS">저장</button>
          <button class="btnS gray ml5">취소</button>
        </span>
      </h3>
      <div class="tvs">
        <table>
          <colgroup><col width="150"/><col width="500"/><col width="150"/><col width="500"/></colgroup>
          <tbody>
            <tr>
              <th>학원 / 호수<sup>필수</sup></th>
              <td>
                <span class="selectSet w100">
                  <select name="" id="">
                    <option value="">학원</option>
                    <option value="">이데아</option>
                    <option value="">아이비</option>
                  </select>
                </span>
                <span class="selectSet ml5 w100">
                  <select name="" id="">
                    <option value="">호수</option>
                    <option value="">401호</option>
                    <option value="">402호</option>
                  </select>
                </span>
              </td>
              <th>일자<sup>필수</sup></th>
              <td>
                <VCalendar class="calSet" v-model="date" color="green">
                  <template v-slot="{ inputValue, togglePopover }">
                    <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                  </template>
                </VCalendar>
                <span>
                  <input type="text" class="tC w70 mlr5" value="00:00">
                  <em>~</em>
                  <input type="text" class="tC w70 ml5" value="00:00">
                </span>
              </td>
            </tr>
            <tr>
              <th>구분<sup>필수</sup></th>
              <td>
                <span class="selectSet w100">
                  <select name="" id="">
                    <option value="no">선택</option>
                    <option value="">일반(직강)</option>
                    <option value="">라이브</option>
                    <option value="">직영상</option>
                    <option value="">자습실</option>
                    <option value="">학원사용</option>
                    <option value="">휴관</option>
                    <option value="">기타</option>
                  </select>
                </span>
              </td>
              <th>시간<sup>필수</sup></th>
              <td>
                <span class="selectSet w100">
                  <select name="" id="">
                    <option value="no">선택</option>
                    <option value="">개강</option>
                    <option value="">종강</option>
                    <option value="">보강</option>
                    <option value="">휴강</option>
                    <option value="">특강</option>
                    <option value="">기타</option>
                  </select>
                </span>
              </td>
            </tr>
            <tr>
              <th>과목/선생님<sup>필수</sup></th>
              <td>
                <span class="selectSet w150">
                  <select name="" id="">
                    <option value="">과목</option>
                  </select>
                </span>
                <span class="selectSet w150 ml10">
                  <select name="" id="">
                    <option value="">선생님</option>
                  </select>
                </span>
              </td>
            </tr>
            <tr>
              <th>강좌<sup>필수</sup></th>
              <td colspan="3">
                <div class="inBlock w49p">
                  <span class="radioSet">
                    <input type="radio" name="radio1" checked/>
                    <label for=""><i></i>강좌 선택</label>
                  </span>
                  <span class="selectSet w60p">
                    <select name="" id="">
                      <option value="no">강좌 선택</option>
                    </select>
                  </span>
                </div>
                <div class="inBlock w49p">
                  <span class="radioSet">
                    <input type="radio" name="radio1" />
                    <label for=""><i></i>직접 입력</label>
                  </span>
                  <span>
                    <input type="text" class="w60p" placeholder="강좌명 입력">
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <th>반복</th>
              <td colspan="3">
                <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                  <template v-slot="{ inputValue, inputEvents, togglePopover, isDragging }">
                    <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.start" v-on="inputEvents.start" @click="togglePopover()" placeholder="시작일 선택"/>
                    <em>~</em>
                    <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.end" v-on="inputEvents.end" @click="togglePopover()" placeholder="종료일 선택"/>
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
                    <input type="checkbox" id="thursday" />
                    <label for="thursday">목</label>
                  </span>
                  <span>
                    <input type="checkbox" id="friday" />
                    <label for="friday">금</label>
                  </span>
                  <span>
                    <input type="checkbox" id="saturday" />
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
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'BbsNoticeClassroomWrite',
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
