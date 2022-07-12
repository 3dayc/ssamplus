<template lang="html">
  <div>
    <div class="userTypeWrap">
      <!-- 2021 신규 가입 대학 -->
      <div>
        <div class="menuHelp mb20">
          <ul>
            <li>ⓘ 가입 회원의 ‘대학’ 유형을 집계합니다.</li>
            <li>ⓘ 검색 기간 대비 전년동기의 ‘대학’ 기준 증감인원을 집계합니다.</li>
            <li>Ⓘ 현재까지 누적 결제이력이 있는 회원과 없는 회원을 집계합니다.</li>
            <li>ⓘ 결제이력은 강좌, 교재, 기타 등 모든 결제이력을 포함합니다.</li>
          </ul>
        </div>
        <div class="msgForm wFull">
          <div class="formTitle"><span>2021 신규 가입 대학 BEST 3</span></div>
          <div class="formCnts">
            <ul class="rankList long">
              <li>
                <span class="rank">01</span>
                <span class="tit">한국방송통신대학교</span>
                <span class="txt">2021년 기준 <strong>209</strong>명</span>
              </li>
              <li>
                <span class="rank">02</span>
                <span class="tit">대구대학교</span>
                <span class="txt">2021년 기준 <strong>153</strong>명</span>
              </li>
              <li>
                <span class="rank">03</span>
                <span class="tit">공주대학교</span>
                <span class="txt">2021년 기준 <strong>151</strong>명</span>
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
                  <strong class="title">회원가입일</strong><!-- 2021-08-02 캘린더 사용 컴포넌트 앞에 타이틀 추가 -->
                  <VCalendar class="calSet dupCal " v-model="range" is-range color="green">
                    <template v-slot="{ inputValue, inputEvents, togglePopover, isDragging }">
                      <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.start" v-on="inputEvents.start" @click="togglePopover()" placeholder="시작일 선택"/>
                      <em>~</em>
                      <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.end" v-on="inputEvents.end" @click="togglePopover()" placeholder="종료일 선택"/>
                    </template>
                  </Vcalendar>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="대학명 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div>
                <button class="btnRefresh">초기화</button>
              </div>
            </div>
          </div>
          <div class="right-po">
            <a href="#" class="btnDownload" download>다운로드</a>
          </div>
        </div>
        <!-- //검색 -->
        <!-- summery -->
        <div class="listSummery">
          <div class="right">
            <dl>
              <dt>총 회원</dt>
              <dd><strong>351,337</strong>명</dd>
            </dl>
            <dl>
              <dt>대학 입력 회원</dt>
              <dd><strong>250,562</strong>명</dd>
            </dl>
          </div>
        </div>
        <!-- //summery -->
        <!-- 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="250"/>
              <col width="180"/>
              <col width="180"/>
              <col width="180"/>
              <col width="180"/>
              <col width="180"/>
            </colgroup>
            <thead>
              <tr>
                <th>대학명 <button class="btnSort">정렬</button></th>
                <th>가입인원 <button class="btnSort">정렬</button></th>
                <th>전년 동기</th>
                <th class="bgRed">증감</th>
                <th>누적 결제인원</th>
                <th>누적 미결제인원</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>건국대학교</td>
                <td>9</td>
                <td>6</td>
                <td>3</td>
                <td class="fBlue">10명 (27%)</td>
                <td class="fBlue">27명(73%)</td>
              </tr>
              <tr>
                <td>경희대학교</td>
                <td>6</td>
                <td>10</td>
                <td class="fRed">(4)</td>
                <td class="fBlue">1명 (50%)</td>
                <td class="fBlue">1명 (50%)</td>
              </tr>
              <tr>
                <td>단국대학교</td>
                <td>5</td>
                <td>3</td>
                <td>2</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>동국대학교</td>
                <td>5</td>
                <td>6</td>
                <td>(1)</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>서강대학교</td>
                <td>5</td>
                <td>1</td>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>서울대학교</td>
                <td>4</td>
                <td>3</td>
                <td>1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>세종대학교</td>
                <td>8</td>
                <td>2</td>
                <td>6</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>숙명여자대학교</td>
                <td>4</td>
                <td>8</td>
                <td class="fRed">(4)</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>숭실대학교</td>
                <td>4</td>
                <td>6</td>
                <td class="fRed">(2)</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack fBig">
                <td>합계</td>
                <td>1,000명</td>
                <td>900명</td>
                <td>100</td>
                <td class="fBlue">750명 (75%)</td>
                <td class="fBlue">250명 (25%)</td>
              </tr>
            </tfoot>
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
