<template lang="html">
  <div>
    <div class="userTypeWrap">
      <!-- 2021 최대 가입 과목 -->
      <div>
        <div class="menuHelp mb20">
          <ul>
            <li>ⓘ 가입 회원의 ‘준비중인 시험’ 유형을 집계합니다.</li>
            <li>ⓘ 검색 기간 대비 전년동기의 ‘준비중인 시험’ 증감인원을 집계합니다.</li>
            <li>Ⓘ 현재까지 누적 결제이력이 있는 회원과 없는 회원을 집계합니다.</li>
            <li>ⓘ 결제이력은 강좌, 교재, 기타 등 모든 결제이력을 포함합니다.</li>
          </ul>
        </div>
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
                <span class="txt">2021년 기준 <strong>553</strong>명</span>
              </li>
              <li>
                <span class="rank">03</span>
                <span class="tit">보건</span>
                <span class="txt">2021년 기준 <strong>552</strong>명</span>
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
          <span class="left">
            <span class="checkSet">
              <input type="checkbox" id="one" />
              <label for="one"><i></i>개설된 강좌만 보이기</label>
            </span>
          </span>
          <div class="right">
            <dl>
              <dt>총 회원</dt>
              <dd><strong>351,337</strong>명</dd>
            </dl>
            <dl>
              <dt>준비중인 시험 입력 회원</dt>
              <dd><strong>250,562</strong>명</dd>
            </dl>
          </div>
        </div>
        <!-- //summery -->
        <!-- 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="180"/>
              <col width="180"/>
              <col width="180"/>
              <col width="180"/>
              <col width="180"/>
              <col width="180"/>
              <col width="180"/>
            </colgroup>
            <thead>
              <tr>
                <th>준비중인 시험</th>
                <th>가입인원</th>
                <th>전년 동기</th>
                <th class="bgRed">증감</th>
                <th>누적 결제인원</th>
                <th>누적 미결제인원</th>
                <th>강좌개설</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>유아</td>
                <td><a @click="popupTrigger = true">37 명</a></td>
                <td><a @click="popupTrigger = true">34 명</a></td>
                <td>3</td>
                <td class="fBlue">10명 (27%)</td>
                <td class="fBlue">27명(73%)</td>
                <td>개설</td>
              </tr>
              <tr class="expiry"><!-- 미개설 강좌의 경우 expiry 클래스 추가 -->
                <td>초등</td>
                <td><a @click="popupTrigger = true">2 명</a></td>
                <td><a @click="popupTrigger = true">6 명</a></td>
                <td class="fRed">(4)</td>
                <td class="fBlue">1명 (50%)</td>
                <td class="fBlue">1명 (50%)</td>
                <td>미개설</td>
              </tr>
              <tr>
                <td>국어</td>
                <td><a @click="popupTrigger = true">14 명</a></td>
                <td><a @click="popupTrigger = true">12 명</a></td>
                <td>2</td>
                <td></td>
                <td></td>
                <td>개설</td>
              </tr>
              <tr>
                <td>영어</td>
                <td><a @click="popupTrigger = true">2 명</a></td>
                <td><a @click="popupTrigger = true">3 명</a></td>
                <td class="fRed">(1)</td>
                <td></td>
                <td></td>
                <td>개설</td>
              </tr>
              <tr>
                <td>체육</td>
                <td><a @click="popupTrigger = true">18 명</a></td>
                <td><a @click="popupTrigger = true">22 명</a></td>
                <td class="fRed">(4)</td>
                <td></td>
                <td></td>
                <td>개설</td>
              </tr>
              <tr>
                <td>한문</td>
                <td><a @click="popupTrigger = true">4 명</a></td>
                <td><a @click="popupTrigger = true">4 명</a></td>
                <td>0</td>
                <td>⋮</td>
                <td>⋮</td>
                <td>개설</td>
              </tr>
              <tr class="expiry"><!-- 미개설 강좌의 경우 expiry 클래스 추가 -->
                <td>도덕윤리</td>
                <td><a @click="popupTrigger = true">0 명</a></td>
                <td><a @click="popupTrigger = true">2 명</a></td>
                <td class="fRed">(2)</td>
                <td></td>
                <td></td>
                <td>미개설</td>
              </tr>
              <tr>
                <td>영어</td>
                <td><a @click="popupTrigger = true">4 명</a></td>
                <td><a @click="popupTrigger = true">0 명</a></td>
                <td>4</td>
                <td></td>
                <td></td>
                <td>개설</td>
              </tr>
              <tr>
                <td>체육</td>
                <td><a @click="popupTrigger = true">14 명</a></td>
                <td><a @click="popupTrigger = true">12 명</a></td>
                <td>2</td>
                <td></td>
                <td></td>
                <td>개설</td>
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
                <td>-</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <!-- //목록 -->
      </div>
    </div>

    <!-- Popup -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>회원유형 통계 상세 – 준비중인 시험</h1>
        <span>* 선택한 준비중인 시험별 회원을 상세 조회할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
        <!-- summery -->
        <div class="listSummery">
          <div class="left">
            <strong>회원 개인정보 표출</strong>
            <span class="toggleSet">
              <input type="checkbox" id="push" />
              <label for="push"></label>
            </span>
          </div>
          <div class="right">
            <dl>
              <dt>가입자</dt>
              <dd>총 <strong>120</strong>명</dd>
            </dl>
          </div>
        </div>
        <!-- //summery -->
        <!-- detail -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="130"/>
              <col width="110"/>
              <col width="120"/>
              <col width="100"/>
              <col width="150"/>
              <col width="130"/>
            </colgroup>
            <thead>
              <tr>
                <th>회원번호</th>
                <th>이름/아이디</th>
                <th>준비중인 시험</th>
                <th>연락처</th>
                <th>회원가입일</th>
                <th>최근 로그인 기록</th>
                <th>누적 결제 금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>중국어</td>
                <td>010-****-5678</td>
                <td>2020-01-01</td>
                <td class="fBlue">2021-04-25 13:24</td>
                <td class="tR fBlue">10,000원</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>중국어</td>
                <td>010-****-5678</td>
                <td>2020-01-01</td>
                <td class="fBlue">2021-04-25 13:24</td>
                <td class="tR fBlue">320,000원</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>중국어</td>
                <td>010-****-5678</td>
                <td>2020-01-01</td>
                <td class="fBlue">2021-04-25 13:24</td>
                <td class="tR fBlue">0원</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>중국어</td>
                <td>010-****-5678</td>
                <td>2020-01-01</td>
                <td class="fBlue">2021-04-25 13:24</td>
                <td class="tR fBlue">10,000원</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>중국어</td>
                <td>010-****-5678</td>
                <td>2020-01-01</td>
                <td class="fBlue">2021-04-25 13:24</td>
                <td class="tR fBlue">320,000원</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>중국어</td>
                <td>010-****-5678</td>
                <td>2020-01-01</td>
                <td class="fBlue">2021-04-25 13:24</td>
                <td class="tR fBlue">0원</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>중국어</td>
                <td>010-****-5678</td>
                <td>2020-01-01</td>
                <td class="fBlue">2021-04-25 13:24</td>
                <td class="tR fBlue">10,000원</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>중국어</td>
                <td>010-****-5678</td>
                <td>2020-01-01</td>
                <td class="fBlue">2021-04-25 13:24</td>
                <td class="tR fBlue">320,000원</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>중국어</td>
                <td>010-****-5678</td>
                <td>2020-01-01</td>
                <td class="fBlue">2021-04-25 13:24</td>
                <td class="tR fBlue">0원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //detail -->
      </div>
    </Popup>
    <!-- //Popup -->
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
      classValue: "stsDetailPop",
      popupTrigger: false,
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
