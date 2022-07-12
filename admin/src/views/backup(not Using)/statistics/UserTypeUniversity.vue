<template lang="html">
  <div>
    <span class="supUtilTxt mb20">※ 회원가입 시 입력한 ‘학력’ 에 대한 통계</span>

    <div class="userTypeWrap">
      <!-- 2021 신규 가입 대학 -->
      <div>
        <div class="msgForm wFull">
          <div class="formTitle"><span>2021 신규 가입 대학 BEST 3</span></div>
          <div class="formCnts">
            <ul class="rankList long">
              <li>
                <span class="rank">01</span>
                <span class="tit">한국방송통신대학교</span>
                <span class="txt">2021년 기준 <strong>515</strong>명</span>
              </li>
              <li>
                <span class="rank">02</span>
                <span class="tit">대구대학교</span>
                <span class="txt">2021년 기준 <strong>515</strong>명</span>
              </li>
              <li>
                <span class="rank">03</span>
                <span class="tit">공주대학교</span>
                <span class="txt">2021년 기준 <strong>513</strong>명</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- //2021 신규 가입 대학 -->
      <div>
        <!-- 검색 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                    <template v-slot="{ inputValue, togglePopover, isDragging }">
                      <input :value="inputValue.start + ' ~ ' + inputValue.end" :class="isDragging ? 'text-green-600' : 'text-green-900'" @click="togglePopover()" placeholder="시작일 선택 ~ 종료일 선택" />
                    </template>
                  </Vcalendar>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="대학명 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
            </div>
          </div>
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
              <dt>대학 정보 입력 회원</dt>
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
                <th>대학명</th>
                <th>인원</th>
                <th>전년 동기</th>
                <th>증감</th>
                <th>제휴 여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tL">대구대학교</td>
                <td>9</td>
                <td>6</td>
                <td>3</td>
                <td>제휴</td>
              </tr>
              <tr>
                <td class="tL">홍익대학교</td>
                <td>6</td>
                <td>10</td>
                <td>-4</td>
                <td>미제휴</td>
              </tr>
              <tr>
                <td class="tL">순천향대학교</td>
                <td>5</td>
                <td>3</td>
                <td>2</td>
                <td>미제휴</td>
              </tr>
              <tr>
                <td class="tL">숙명여자대학교</td>
                <td>5</td>
                <td>6</td>
                <td>-1</td>
                <td>미제휴</td>
              </tr>
              <tr>
                <td class="tL">한국방송통신대학교</td>
                <td>5</td>
                <td>1</td>
                <td>4</td>
                <td>미제휴</td>
              </tr>
              <tr>
                <td class="tL">이화여자대학교</td>
                <td>4</td>
                <td>3</td>
                <td>1</td>
                <td>미제휴</td>
              </tr>
              <tr>
                <td class="tL">경북대학교</td>
                <td>8</td>
                <td>2</td>
                <td>6</td>
                <td>미제휴</td>
              </tr>
              <tr>
                <td class="tL">중앙대학교 제1컴퍼스(서울)</td>
                <td>4</td>
                <td>8</td>
                <td>-4</td>
                <td>제휴</td>
              </tr>
              <tr>
                <td class="tL">공주대학교</td>
                <td>4</td>
                <td>6</td>
                <td>-2</td>
                <td>제휴</td>
              </tr>
              <tr>
                <td class="tL">조선대학교</td>
                <td>7</td>
                <td>2</td>
                <td>5</td>
                <td>제휴</td>
              </tr>
              <tr>
                <td class="tL">한국외국어대학교</td>
                <td>4</td>
                <td>2</td>
                <td>2</td>
                <td>미제휴</td>
              </tr>
              <tr>
                <td class="tL">건국대학교</td>
                <td>4</td>
                <td>5</td>
                <td>-1</td>
                <td>미제휴</td>
              </tr>
              <tr>
                <td class="tL">부산대학교</td>
                <td>4</td>
                <td>10</td>
                <td>-4</td>
                <td>미제휴</td>
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
  name: 'UserTypeUniversity',
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
