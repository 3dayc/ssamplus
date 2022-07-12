<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="left">
        <div class="menuHelp">
          <ul>
            <li>ⓘ 연/월/일을 기준으로 신규가입 회원을 집계합니다.</li>
            <li>ⓘ 검색 기준 연/월/일 대비 전년동기의 증감인원을 집계합니다.</li>
            <li>ⓘ 현재까지 누적 결제이력이 있는 회원과 없는 회원을 집계합니다.</li>
            <li>ⓘ 결제이력은 강좌, 교재, 기타 등 모든 결제이력을 포함합니다.</li>
          </ul>
        </div>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="">2021년</option>
                  <option value="">2020년</option>
                  <option value="">2019년</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="selectMonth" id="selectMonth" @change="selectMonth();">
                  <option value="all">전체</option>
                  <option value="1">1월</option>
                  <option value="2">2월</option>
                  <option value="3">3월</option>
                  <option value="4">4월</option>
                  <option value="5">5월</option>
                  <option value="6">6월</option>
                  <option value="7">7월</option>
                  <option value="8">8월</option>
                  <option value="9">9월</option>
                  <option value="10">10월</option>
                  <option value="11">11월</option>
                  <option value="12">12월</option>
                </select>
              </span>
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
    <!-- 목록 -->
    <div class="tls" v-if="yearSort">
      <table>
        <colgroup>
          <col width="80"/>
          <col width="140"/>
          <col width="140"/>
          <col width="140"/>
          <col width="140"/>
          <col width="140"/>
        </colgroup>
        <thead>
          <tr>
            <th>월</th>
            <th>기준연도</th>
            <th>전년동기</th>
            <th class="bgRed">증감</th>
            <th>누적 결제인원</th>
            <th>누적 미결제인원</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1월</td>
            <td class="tR"><a @click="popupTrigger = true">100명</a></td>
            <td class="tR"><a @click="popupTrigger = true">120명</a></td>
            <td class="tR fRed">(20)</td>
            <td class="tR fBlue">40명 (40%)</td>
            <td class="tR fBlue">60명 (60%)</td>
          </tr>
          <tr>
            <td>2월</td>
            <td class="tR"><a @click="popupTrigger = true">120명</a></td>
            <td class="tR"><a @click="popupTrigger = true">100명</a></td>
            <td class="tR">20</td>
            <td class="tR fBlue">72명 (60%)</td>
            <td class="tR fBlue">48명 (40%)</td>
          </tr>
          <tr>
            <td>3월</td>
            <td class="tR"><a @click="popupTrigger = true">100명</a></td>
            <td class="tR"><a @click="popupTrigger = true">120명</a></td>
            <td class="tR fRed">(20)</td>
            <td class="tR fBlue">40명 (40%)</td>
            <td class="tR fBlue">60명 (60%)</td>
          </tr>
          <tr>
            <td>4월</td>
            <td class="tR"><a @click="popupTrigger = true">120명</a></td>
            <td class="tR"><a @click="popupTrigger = true">100명</a></td>
            <td class="tR">20</td>
            <td class="tR fBlue">72명 (60%)</td>
            <td class="tR fBlue">48명 (40%)</td>
          </tr>
          <tr>
            <td>5월</td>
            <td class="tR"><a @click="popupTrigger = true">100명</a></td>
            <td class="tR"><a @click="popupTrigger = true">120명</a></td>
            <td class="tR fRed">(20)</td>
            <td class="tR fBlue">40명 (40%)</td>
            <td class="tR fBlue">60명 (60%)</td>
          </tr>
          <tr>
            <td>6월</td>
            <td class="tR"><a @click="popupTrigger = true">120명</a></td>
            <td class="tR"><a @click="popupTrigger = true">100명</a></td>
            <td class="tR">20</td>
            <td class="tR fBlue">72명 (60%)</td>
            <td class="tR fBlue">48명 (40%)</td>
          </tr>
          <tr>
            <td>7월</td>
            <td class="tR"><a @click="popupTrigger = true">100명</a></td>
            <td class="tR"><a @click="popupTrigger = true">120명</a></td>
            <td class="tR fRed">(20)</td>
            <td class="tR fBlue">40명 (40%)</td>
            <td class="tR fBlue">60명 (60%)</td>
          </tr>
          <tr>
            <td>8월</td>
            <td class="tR"><a @click="popupTrigger = true">120명</a></td>
            <td class="tR"><a @click="popupTrigger = true">100명</a></td>
            <td class="tR">20</td>
            <td class="tR fBlue">72명 (60%)</td>
            <td class="tR fBlue">48명 (40%)</td>
          </tr>
          <tr>
            <td>9월</td>
            <td class="tR"><a @click="popupTrigger = true">100명</a></td>
            <td class="tR"><a @click="popupTrigger = true">120명</a></td>
            <td class="tR fRed">(20)</td>
            <td class="tR fBlue">40명 (40%)</td>
            <td class="tR fBlue">60명 (60%)</td>
          </tr>
          <tr>
            <td>10월</td>
            <td class="tR"><a @click="popupTrigger = true">120명</a></td>
            <td class="tR"><a @click="popupTrigger = true">100명</a></td>
            <td class="tR">20</td>
            <td class="tR fBlue">72명 (60%)</td>
            <td class="tR fBlue">48명 (40%)</td>
          </tr>
          <tr>
            <td>11월</td>
            <td class="tR"><a @click="popupTrigger = true">100명</a></td>
            <td class="tR"><a @click="popupTrigger = true">120명</a></td>
            <td class="tR fRed">(20)</td>
            <td class="tR fBlue">40명 (40%)</td>
            <td class="tR fBlue">60명 (60%)</td>
          </tr>
          <tr>
            <td>12월</td>
            <td class="tR"><a @click="popupTrigger = true">120명</a></td>
            <td class="tR"><a @click="popupTrigger = true">100명</a></td>
            <td class="tR">20</td>
            <td class="tR fBlue">72명 (60%)</td>
            <td class="tR fBlue">48명 (40%)</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td>합계</td>
            <td class="tR">1,320명</td>
            <td class="tR">1,320명</td>
            <td class="tR">0</td>
            <td class="tR fBlue">672명 (50%)</td>
            <td class="tR fBlue">672명 (50%)</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- //목록 -->
    <!-- 월 단위 목록 -->
    <div class="tls" v-if="monthSort">
      <table>
        <colgroup>
          <col width="80"/>
          <col width="140"/>
          <col width="140"/>
          <col width="140"/>
          <col width="140"/>
          <col width="140"/>
        </colgroup>
        <thead>
          <tr>
            <th>{{monthSortVal}}월</th>
            <th>기준연도</th>
            <th>전년동기</th>
            <th class="bgRed">증감</th>
            <th>누적 결제인원</th>
            <th>누적 미결제인원</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1일</td>
            <td class="tR"><a @click="popupTrigger = true">10명</a></td>
            <td class="tR"><a @click="popupTrigger = true">12명</a></td>
            <td class="tR fRed">(2)</td>
            <td class="tR fBlue">4명 (40%)</td>
            <td class="tR fBlue">6명 (60%)</td>
          </tr>
          <tr>
            <td>2일</td>
            <td class="tR"><a @click="popupTrigger = true">12명</a></td>
            <td class="tR"><a @click="popupTrigger = true">10명</a></td>
            <td class="tR">2</td>
            <td class="tR fBlue">6명 (50%)</td>
            <td class="tR fBlue">6명 (50%)</td>
          </tr>
          <tr>
            <td>3일</td>
            <td class="tR"><a @click="popupTrigger = true">10명</a></td>
            <td class="tR"><a @click="popupTrigger = true">12명</a></td>
            <td class="tR fRed">(2)</td>
            <td class="tR fBlue">4명 (40%)</td>
            <td class="tR fBlue">6명 (60%)</td>
          </tr>
          <tr>
            <td>4일</td>
            <td class="tR"><a @click="popupTrigger = true">12명</a></td>
            <td class="tR"><a @click="popupTrigger = true">10명</a></td>
            <td class="tR">2</td>
            <td class="tR fBlue">6명 (50%)</td>
            <td class="tR fBlue">6명 (50%)</td>
          </tr>
          <tr>
            <td>5일</td>
            <td class="tR"><a @click="popupTrigger = true">10명</a></td>
            <td class="tR"><a @click="popupTrigger = true">12명</a></td>
            <td class="tR fRed">(2)</td>
            <td class="tR fBlue">4명 (40%)</td>
            <td class="tR fBlue">6명 (60%)</td>
          </tr>
          <tr>
            <td>6일</td>
            <td class="tR"><a @click="popupTrigger = true">12명</a></td>
            <td class="tR"><a @click="popupTrigger = true">10명</a></td>
            <td class="tR">2</td>
            <td class="tR fBlue">6명 (50%)</td>
            <td class="tR fBlue">6명 (50%)</td>
          </tr>
          <tr>
            <td>7일</td>
            <td class="tR"><a @click="popupTrigger = true">10명</a></td>
            <td class="tR"><a @click="popupTrigger = true">12명</a></td>
            <td class="tR fRed">(2)</td>
            <td class="tR fBlue">4명 (40%)</td>
            <td class="tR fBlue">6명 (60%)</td>
          </tr>
          <tr>
            <td>8일</td>
            <td class="tR"><a @click="popupTrigger = true">12명</a></td>
            <td class="tR"><a @click="popupTrigger = true">10명</a></td>
            <td class="tR">2</td>
            <td class="tR fBlue">6명 (50%)</td>
            <td class="tR fBlue">6명 (50%)</td>
          </tr>
          <tr>
            <td>9일</td>
            <td class="tR"><a @click="popupTrigger = true">10명</a></td>
            <td class="tR"><a @click="popupTrigger = true">12명</a></td>
            <td class="tR fRed">(2)</td>
            <td class="tR fBlue">4명 (40%)</td>
            <td class="tR fBlue">6명 (60%)</td>
          </tr>
          <tr>
            <td>10일</td>
            <td class="tR"><a @click="popupTrigger = true">12명</a></td>
            <td class="tR"><a @click="popupTrigger = true">10명</a></td>
            <td class="tR">2</td>
            <td class="tR fBlue">6명 (50%)</td>
            <td class="tR fBlue">6명 (50%)</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td>합계</td>
            <td class="tR">340명</td>
            <td class="tR">340명</td>
            <td class="tR">0</td>
            <td class="tR fBlue">154명</td>
            <td class="tR fBlue">186명</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- //월 단위 목록 -->

    <!-- Popup -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>신규가입 회원 상세</h1>
        <span>* 선택한 연월일의 신규가입 인원의 상세 내역을 조회할 수 있습니다.</span>
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
                <td class="tR fBlue">-</td>
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
                <td class="tR fBlue">-</td>
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
                <td class="tR fBlue">-</td>
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
  name: 'UserSignupJoin',
  data() {
    return {
      classValue: "stsDetailPop",
      popupTrigger: false,
      yearSort: true,
      monthSort: false,
      monthSortVal: '',
    }
  },
  methods: {
    selectMonth() {
      var monthVal = document.getElementById("selectMonth").options[document.getElementById("selectMonth").selectedIndex].value;
      if(monthVal == "all") {
        this.yearSort = true;
        this.monthSort = false;
      } else {
        this.monthSort = true;
        this.yearSort = false;
        this.monthSortVal = monthVal;
      }
    },
  },
  components: {
  },
}
</script>
