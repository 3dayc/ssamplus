<template lang="html">
  <div>
    <div class="pageTit">
      <h2>오프라인 상담 통계</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/counselCall">상담센터 통계</router-link><em>오프라인 상담 통계</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="counselOffline"><!-- class 없어도 유지 -->
        <!-- 검색 -->
        <div class="boardTop">
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
                  <button class="btnSearch">검색</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- //검색 -->
        <!-- 월별 1:1 학원상담 신청건수 -->
        <div class="subTit"><h3>월별 1:1 학원상담 신청건수</h3></div>
        <div class="tls">
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th>1월</th>
                <th>2월</th>
                <th>3월</th>
                <th>4월</th>
                <th>5월</th>
                <th>6월</th>
                <th>7월</th>
                <th>8월</th>
                <th>9월</th>
                <th>10월</th>
                <th>11월</th>
                <th>12월</th>
                <th>합계</th>
              </tr>
            </thead>
            <tfoot>
              <tr class="emphasisBlack fBig">
                <td>합계</td>
                <td>47</td>
                <td>46</td>
                <td>46</td>
                <td>9</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>57</td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>서울 이데아관</td>
                <td><a @click="popupTrigger = true">22</a></td>
                <td><a @click="popupTrigger = true">17</a></td>
                <td><a @click="popupTrigger = true">18</a></td>
                <td><a @click="popupTrigger = true">5</a></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td class="fRed">62</td>
              </tr>
              <tr>
                <td>서울 아이비관</td>
                <td><a @click="popupTrigger = true">18</a></td>
                <td><a @click="popupTrigger = true">24</a></td>
                <td><a @click="popupTrigger = true">26</a></td>
                <td><a @click="popupTrigger = true">3</a></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td class="fRed">71</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //월별 1:1 학원상담 신청건수 -->
        <!-- 월별 1:1 선생님 상담 신청건수 -->
        <div class="subTit"><h3>월별 1:1 선생님 상담 신청건수</h3></div>
        <div class="tls">
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th>1월</th>
                <th>2월</th>
                <th>3월</th>
                <th>4월</th>
                <th>5월</th>
                <th>6월</th>
                <th>7월</th>
                <th>8월</th>
                <th>9월</th>
                <th>10월</th>
                <th>11월</th>
                <th>12월</th>
                <th>합계</th>
              </tr>
            </thead>
            <tfoot>
              <tr class="emphasisBlack fBig">
                <td>합계</td>
                <td>10</td>
                <td>5</td>
                <td>6</td>
                <td>4</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>25</td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>서민정</td>
                <td><a @click="popupTrigger02 = true">3</a></td>
                <td><a @click="popupTrigger02 = true">1</a></td>
                <td><a @click="popupTrigger02 = true">0</a></td>
                <td><a @click="popupTrigger02 = true">1</a></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td class="fRed">5</td>
              </tr>
              <tr>
                <td>정희원</td>
                <td><a @click="popupTrigger02 = true">0</a></td>
                <td><a @click="popupTrigger02 = true">0</a></td>
                <td><a @click="popupTrigger02 = true">1</a></td>
                <td><a @click="popupTrigger02 = true">0</a></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td class="fRed">1</td>
              </tr>
              <tr>
                <td>박서형</td>
                <td><a @click="popupTrigger02 = true">0</a></td>
                <td><a @click="popupTrigger02 = true">0</a></td>
                <td><a @click="popupTrigger02 = true">0</a></td>
                <td><a @click="popupTrigger02 = true">0</a></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td class="fRed">0</td>
              </tr>
              <tr>
                <td>김지민</td>
                <td><a @click="popupTrigger02 = true">4</a></td>
                <td><a @click="popupTrigger02 = true">4</a></td>
                <td><a @click="popupTrigger02 = true">4</a></td>
                <td><a @click="popupTrigger02 = true">3</a></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td class="fRed">15</td>
              </tr>
              <tr>
                <td>한지우</td>
                <td><a @click="popupTrigger02 = true">3</a></td>
                <td><a @click="popupTrigger02 = true">0</a></td>
                <td><a @click="popupTrigger02 = true">1</a></td>
                <td><a @click="popupTrigger02 = true">0</a></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td class="fRed">4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //월별 1:1 선생님 상담 신청건수 -->
			</div>
			<!-- //page layout -->
    </article>
    </div>

    <!-- Popup -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>이데아관 1:1 학원상담 신청 – <em class="fBlue fInherit">2021년 04월</em></h1>
        <span>* 학원상담 신청 회원의 상세 내역을 조회할 수 있습니다.</span>
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
            <span class="checkSet ml10">
              <input type="checkbox" id="one" />
              <label for="one"><i></i>상담 후 결제금액 있음</label>
            </span>
          </div>
          <div class="right">
            <dl>
              <dt>신청자</dt>
              <dd>총 <strong>50</strong>명</dd>
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
              <col width="85"/>
              <col width="100"/>
              <col width="110"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="130"/>
            </colgroup>
            <thead>
              <tr>
                <th>회원번호</th>
                <th>이름/아이디</th>
                <th>연락처</th>
                <th>SMS 수신</th>
                <th>회원가입일</th>
                <th>상담여부</th>
                <th>상담과목</th>
                <th class="bgRed">상담 후<br/>결제금액</th>
                <th>누적 결제 금액</th>
                <th>최근 로그인 기록</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>Y</td>
                <td>2020-01-01</td>
                <td>2021-04-30<br/>참석</td>
                <td>유아</td>
                <td class="tR fBlue">250,000</td>
                <td class="tR fBlue">400,000</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>N</td>
                <td>2020-01-01</td>
                <td>2021-04-25<br/>비참석</td>
                <td>전문상담</td>
                <td class="tR fBlue">-</td>
                <td class="tR fBlue">100,000</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>Y</td>
                <td>2020-01-01</td>
                <td>2021-04-21<br/>취소</td>
                <td>음악</td>
                <td class="tR fBlue">-</td>
                <td class="tR fBlue">0원</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>N</td>
                <td>2020-01-01</td>
                <td>2021-04-20<br/>참석</td>
                <td>교육학</td>
                <td class="tR fBlue">250,000</td>
                <td class="tR fBlue">400,000</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>Y</td>
                <td>2020-01-01</td>
                <td>2021-04-18<br/>비참석</td>
                <td>체육</td>
                <td class="tR fBlue">-</td>
                <td class="tR fBlue">100,000</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>N</td>
                <td>2020-01-01</td>
                <td>2021-04-17<br/>취소</td>
                <td>미술</td>
                <td class="tR fBlue">-</td>
                <td class="tR fBlue">0원</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>Y</td>
                <td>2020-01-01</td>
                <td>2021-04-16<br/>참석</td>
                <td>역사</td>
                <td class="tR fBlue">250,000</td>
                <td class="tR fBlue">400,000</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>N</td>
                <td>2020-01-01</td>
                <td>2021-04-14<br/>비참석</td>
                <td>특수</td>
                <td class="tR fBlue">-</td>
                <td class="tR fBlue">100,000</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>Y</td>
                <td>2020-01-01</td>
                <td>2021-04-10<br/>취소</td>
                <td>유아</td>
                <td class="tR fBlue">-</td>
                <td class="tR fBlue">0원</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //detail -->
      </div>
    </Popup>
    <!-- //Popup -->
    <!-- Popup -->
    <Popup v-if='popupTrigger02' @close="popupTrigger02 = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1><em class="fBlue fInherit">음악 서민정</em> 1:1 선생님상담 신청 – <em class="fBlue fInherit">2021년 04월</em></h1>
        <span>* 선생님상담 신청 회원의 상세 내역을 조회할 수 있습니다.</span>
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
            <span class="checkSet ml10">
              <input type="checkbox" id="one" />
              <label for="one"><i></i>상담 후 결제금액 있음</label>
            </span>
          </div>
          <div class="right">
            <dl>
              <dt>신청자</dt>
              <dd>총 <strong>50</strong>명</dd>
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
              <col width="85"/>
              <col width="100"/>
              <col width="110"/>
              <col width="100"/>
              <col width="100"/>
              <col width="130"/>
            </colgroup>
            <thead>
              <tr>
                <th>회원번호</th>
                <th>이름/아이디</th>
                <th>연락처</th>
                <th>SMS 수신</th>
                <th>회원가입일</th>
                <th>상담여부</th>
                <th class="bgRed">상담 후<br/>결제금액</th>
                <th>누적 결제 금액</th>
                <th>최근 로그인 기록</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>Y</td>
                <td>2020-01-01</td>
                <td>2021-04-30<br/>참석</td>
                <td class="tR fBlue">250,000</td>
                <td class="tR fBlue">400,000</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>N</td>
                <td>2020-01-01</td>
                <td>2021-04-25<br/>비참석</td>
                <td class="tR fBlue">-</td>
                <td class="tR fBlue">100,000</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>Y</td>
                <td>2020-01-01</td>
                <td>2021-04-21<br/>취소</td>
                <td class="tR fBlue">-</td>
                <td class="tR fBlue">0원</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>N</td>
                <td>2020-01-01</td>
                <td>2021-04-20<br/>참석</td>
                <td class="tR fBlue">250,000</td>
                <td class="tR fBlue">400,000</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>Y</td>
                <td>2020-01-01</td>
                <td>2021-04-18<br/>비참석</td>
                <td class="tR fBlue">-</td>
                <td class="tR fBlue">100,000</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>N</td>
                <td>2020-01-01</td>
                <td>2021-04-17<br/>취소</td>
                <td class="tR fBlue">-</td>
                <td class="tR fBlue">0원</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>Y</td>
                <td>2020-01-01</td>
                <td>2021-04-16<br/>참석</td>
                <td class="tR fBlue">250,000</td>
                <td class="tR fBlue">400,000</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>N</td>
                <td>2020-01-01</td>
                <td>2021-04-14<br/>비참석</td>
                <td class="tR fBlue">-</td>
                <td class="tR fBlue">100,000</td>
                <td class="fBlue">2021-04-25 13:24</td>
              </tr>
              <tr>
                <td>287965</td>
                <td>김*수<br/>(k******)</td>
                <td>010-****-5678</td>
                <td>Y</td>
                <td>2020-01-01</td>
                <td>2021-04-10<br/>취소</td>
                <td class="tR fBlue">-</td>
                <td class="tR fBlue">0원</td>
                <td class="fBlue">2021-04-25 13:24</td>
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
  name: 'counselOffline',
  data() {
    return {
      classValue: "stsDetailPop",
      popupTrigger: false,
      popupTrigger02: false,
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
