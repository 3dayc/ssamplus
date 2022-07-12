<template lang="html">
  <div>
    <div class="pageTit">
      <h2>강사료 정산</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/indicatorAnnual">결산</router-link><em>강사료 정산</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="indicatorMgt"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:accountFeeTab===0}">
                    <button @click="accountFeeTab = 0">템플릿 1</button>
                  </li>
                  <li :class="{on:accountFeeTab===1}">
                    <button @click="accountFeeTab = 1">템플릿 2</button>
                  </li>
                </ul>
                <span class="btnArea">
                  <button class="btnM" @click="created = true">파일 생성</button>
                  <button class="btnM" v-if="created">미리보기</button>
                  <a href="#" v-if="created" class="btnDownload" download>다운로드</a>
                </span>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 결제 로데이터 -->
            <div v-if="accountFeeTab == 0" class="tabData">
              <div class="subTit">
                <h3>기본 정보</h3>
              </div>
              <div>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">연도 선텍</option>
                  </select>
                </span>
                <span class="selectSet ml10">
                  <select name="" id="">
                    <option value="">월 선텍</option>
                  </select>
                </span>
                <span class="selectSet ml10">
                  <select name="" id="">
                    <option value="">강사 선텍</option>
                  </select>
                </span>
              </div>
              <div class="subTit">
                <h3>직강 수수료 내역서</h3>
              </div>
              <div class="tls">
                <table>
                  <colgroup>
                    <col width="60">
                    <col width="600">
                    <col width="80">
                    <col width="150">
                    <col width="80">
                    <col width="150">
                  </colgroup>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>강좌</th>
                      <th>인원</th>
                      <th>수강금액</th>
                      <th>%</th>
                      <th>강사료</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td colspan="6"><button class="btnM wFull blueline">행추가</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tvs mt10">
                <table>
                  <colgroup>
                    <col width="160">
                    <col width="40%">
                    <col width="160">
                    <col width="*">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>직강 강사료</th>
                      <td><input type="number"></td>
                      <th>복사/인쇄</th>
                      <td><input type="number"></td>
                    </tr>
                    <tr>
                      <th>기타강사료</th>
                      <td><input type="number"></td>
                      <th>직강 (소득+주민세)</th>
                      <td><input type="number"></td>
                    </tr>
                    <tr>
                      <th class="bgRed">총액</th>
                      <td><input type="number"></td>
                      <td colspan="2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="subTit">
                <h3>인강 수수료 내역서</h3>
              </div>
              <div class="tls">
                <table>
                  <colgroup>
                    <col width="60">
                    <col width="600">
                    <col width="80">
                    <col width="150">
                    <col width="80">
                    <col width="150">
                  </colgroup>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>강좌</th>
                      <th>인원</th>
                      <th>수강금액</th>
                      <th>%</th>
                      <th>강사료</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td colspan="6"><button class="btnM wFull blueline">행추가</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tvs mt10">
                <table>
                  <colgroup>
                    <col width="160">
                    <col width="40%">
                    <col width="160">
                    <col width="*">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th><em class="fBlue">-</em>월 강사료</th>
                      <td><input type="number"></td>
                      <th>이월된 강사료</th>
                      <td><input type="number"></td>
                    </tr>
                    <tr>
                      <th>인강 강사료</th>
                      <td><input type="number"></td>
                      <th>단체수강</th>
                      <td><input type="number"></td>
                    </tr>
                    <tr>
                      <th>기타강사료</th>
                      <td><input type="number"></td>
                      <th>인강 (소득+주민세)</th>
                      <td><input type="number"></td>
                    </tr>
                    <tr>
                      <th class="bgRed">총액</th>
                      <td><input type="number"></td>
                      <td colspan="2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="subTit">
                <h3>인강 이월 내역서</h3>
              </div>
              <div class="tls">
                <table>
                  <colgroup>
                    <col width="120">
                    <col width="300">
                    <col width="300">
                    <col width="300">
                  </colgroup>
                  <thead>
                    <tr>
                      <th>월</th>
                      <th>전월계</th>
                      <th>당월</th>
                      <th>계</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fBlue">2021년 7월</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td class="fBlue">2021년 8월</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td class="fBlue">2021년 9월</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td class="fBlue">2021년 10월</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td class="fBlue">2021년 11월</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td class="fBlue">2021년 12월</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td class="fBlue">2022년 1월</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td class="fBlue">2022년 2월</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td class="fBlue">2022년 3월</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td class="fBlue">2022년 4월</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td class="fBlue">2022년 5월</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td class="fBlue">2022년 6월</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tvs mt10">
                <table>
                  <colgroup>
                    <col width="160">
                    <col width="40%">
                    <col width="160">
                    <col width="*">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>실지급액</th>
                      <td><input type="number"></td>
                      <th>대여금</th>
                      <td><input type="number"></td>
                    </tr>
                    <tr>
                      <th class="bgRed">송금액</th>
                      <td><input type="number"></td>
                      <td colspan="2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- //결제 로데이터 -->
            <!-- ERP 데이터 -->
            <div v-if="accountFeeTab == 1" class="tabData">
              <div class="subTit">
                <h3>기본 정보</h3>
              </div>
              <div>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">연도 선텍</option>
                  </select>
                </span>
                <span class="selectSet ml10">
                  <select name="" id="">
                    <option value="">월 선텍</option>
                  </select>
                </span>
                <span class="selectSet ml10">
                  <select name="" id="">
                    <option value="">강사 선텍</option>
                  </select>
                </span>
              </div>
              <div class="subTit">
                <h3>직강 수수료 내역서</h3>
              </div>
              <div class="tls">
                <table>
                  <colgroup>
                    <col width="60">
                    <col width="600">
                    <col width="80">
                    <col width="150">
                    <col width="80">
                    <col width="150">
                  </colgroup>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>강좌</th>
                      <th>인원</th>
                      <th>수강금액</th>
                      <th>%</th>
                      <th>강사료</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td colspan="6"><button class="btnM wFull blueline">행추가</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tvs mt10">
                <table>
                  <colgroup>
                    <col width="160">
                    <col width="40%">
                    <col width="160">
                    <col width="*">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>직강 강사료</th>
                      <td><input type="number"></td>
                      <th>복사/인쇄</th>
                      <td><input type="number"></td>
                    </tr>
                    <tr>
                      <th>기타강사료</th>
                      <td><input type="number"></td>
                      <th>직강 (소득+주민세)</th>
                      <td><input type="number"></td>
                    </tr>
                    <tr>
                      <th class="bgRed">총액</th>
                      <td><input type="number"></td>
                      <td colspan="2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="subTit">
                <h3>인강 수수료 내역서</h3>
              </div>
              <div class="tls">
                <table>
                  <colgroup>
                    <col width="60">
                    <col width="600">
                    <col width="80">
                    <col width="150">
                    <col width="80">
                    <col width="150">
                  </colgroup>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>강좌</th>
                      <th>인원</th>
                      <th>수강금액</th>
                      <th>%</th>
                      <th>강사료</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td><input type="text"></td>
                      <td></td>
                      <td><input type="text"></td>
                    </tr>
                    <tr>
                      <td colspan="6"><button class="btnM wFull blueline">행추가</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tvs mt10">
                <table>
                  <colgroup>
                    <col width="160">
                    <col width="40%">
                    <col width="160">
                    <col width="*">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>인강 강사료</th>
                      <td><input type="number"></td>
                      <th>단체수강</th>
                      <td><input type="number"></td>
                    </tr>
                    <tr>
                      <th>기타강사료</th>
                      <td><input type="number"></td>
                      <th>인강 (소득+주민세)</th>
                      <td><input type="number"></td>
                    </tr>
                    <tr>
                      <th class="bgRed">총액</th>
                      <td><input type="number"></td>
                      <td colspan="2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tvs mt10">
                <table>
                  <colgroup>
                    <col width="160">
                    <col width="40%">
                    <col width="160">
                    <col width="*">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>실지급액</th>
                      <td><input type="number"></td>
                      <th>대여금</th>
                      <td><input type="number"></td>
                    </tr>
                    <tr>
                      <th class="bgRed">송금액</th>
                      <td><input type="number"></td>
                      <td colspan="2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- //ERP 데이터 -->
          </div>
        </div>

			</div>
			<!-- //page layout -->
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import AccountMgtRaw from '@/views/statistics/AccountMgtRaw.vue';
import AccountMgtErp from '@/views/statistics/AccountMgtErp.vue';

export default {
  mixins: [Mixin],
  name: 'IndicatorFee',
  data() {
    return {
      accountFeeTab: 0,
      created: false,
    }
  },
  methods: {
  },
  components: {
    AccountMgtRaw,
    AccountMgtErp,
  },
}
</script>
