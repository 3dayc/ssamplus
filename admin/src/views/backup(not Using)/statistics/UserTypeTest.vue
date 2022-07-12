<template lang="html">
  <div>
    <span class="supUtilTxt mb20">※ 회원가입 시 입력한 ‘준비중인 시험’ 에 대한 통계</span>

    <div class="userTypeWrap">
      <!-- 2021 최대 가입 과목 -->
      <div>
        <div class="msgForm wFull">
          <div class="formTitle"><span>2021 최대 가입 과목 BEST 3</span></div>
          <div class="formCnts">
            <ul class="rankList">
              <li>
                <span class="rank">01</span>
                <span class="tit">유아</span>
                <span class="txt">2021년 기준 <strong>2515</strong>명</span>
              </li>
              <li>
                <span class="rank">02</span>
                <span class="tit">특수</span>
                <span class="txt">2021년 기준 <strong>515</strong>명</span>
              </li>
              <li>
                <span class="rank">03</span>
                <span class="tit">보건</span>
                <span class="txt">2021년 기준 <strong>513</strong>명</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- //2021 최대 가입 과목 -->
      <div>
        <!-- 검색 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem lineNone">
                  <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                    <template v-slot="{ inputValue, togglePopover, isDragging }">
                      <input :value="inputValue.start + ' ~ ' + inputValue.end" :class="isDragging ? 'text-green-600' : 'text-green-900'" @click="togglePopover()" placeholder="시작일 선택 ~ 종료일 선택" />
                    </template>
                  </Vcalendar>
                </span>
                <span class="lsItem">
                  <button class="btnSearch">검색</button>
                </span>
              </div>
            </div>
          </div>
          <span class="checkSet ml20">
            <input type="checkbox" id="one" />
            <label for="one"><i></i>개설된 강좌만 보이기</label>
          </span>
        </div>
        <!-- //검색 -->
        <!-- summery -->
        <div class="listSummery">
          <div class="right">
            <dl>
              <dt>총 회원</dt>
              <dd><strong>351,240</strong>명</dd>
            </dl>
            <dl>
              <dt>시험 정보 입력 회원</dt>
              <dd><strong>1,240</strong>명</dd>
            </dl>
          </div>
        </div>
        <!-- //summery -->
        <!-- 목록 -->
        <div class="tls">
          <table>
            <thead>
              <tr>
                <th>시험</th>
                <th>인원</th>
                <th>전년 동기</th>
                <th>증감</th>
                <th>강좌개설</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>유아</td>
                <td>37 명</td>
                <td>34 명</td>
                <td>3</td>
                <td>개설</td>
              </tr>
              <tr>
                <td>초등</td>
                <td>2 명</td>
                <td>6 명</td>
                <td class="fRed">-4</td>
                <td>미개설</td>
              </tr>
              <tr>
                <td>국어</td>
                <td>14 명</td>
                <td>12 명</td>
                <td>2</td>
                <td>개설</td>
              </tr>
              <tr>
                <td>영어</td>
                <td>2 명</td>
                <td>3 명</td>
                <td class="fRed">-1</td>
                <td>개설</td>
              </tr>
              <tr>
                <td>수학</td>
                <td>4 명</td>
                <td>0 명</td>
                <td>4</td>
                <td>개설</td>
              </tr>
              <tr>
                <td>음악</td>
                <td>6 명</td>
                <td>5 명</td>
                <td>1</td>
                <td>개설</td>
              </tr>
              <tr>
                <td>미술</td>
                <td>7 명</td>
                <td>1 명</td>
                <td>6</td>
                <td>개설</td>
              </tr>
              <tr>
                <td>체육</td>
                <td>18 명</td>
                <td>22 명</td>
                <td class="fRed">-4</td>
                <td>개설</td>
              </tr>
              <tr>
                <td>중국어</td>
                <td>4 명</td>
                <td>6 명</td>
                <td class="fRed">-2</td>
                <td>개설</td>
              </tr>
              <tr>
                <td>일본어</td>
                <td>7 명</td>
                <td>2 명</td>
                <td>5</td>
                <td>개설</td>
              </tr>
              <tr>
                <td>한문</td>
                <td>4 명</td>
                <td>4 명</td>
                <td>0</td>
                <td>개설</td>
              </tr>
              <tr>
                <td>스페인어</td>
                <td>0 명</td>
                <td>2 명</td>
                <td class="fRed">-2</td>
                <td>미개설</td>
              </tr>
              <tr>
                <td>가정</td>
                <td>4 명</td>
                <td>0 명</td>
                <td>4</td>
                <td>개설</td>
              </tr>
              <tr>
                <td>도덕윤리</td>
                <td>14 명</td>
                <td>12 명</td>
                <td>2</td>
                <td>개설</td>
              </tr>
              <tr>
                <td>미용</td>
                <td>2 명</td>
                <td>3 명</td>
                <td class="fRed">-1</td>
                <td>개설</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //목록 -->
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'UserTypeTest',
  data() {
    return {
      range: {
				start: new Date(),
				end: new Date(),
			},
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
