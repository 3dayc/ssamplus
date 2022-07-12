<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="left">
        <div class="menuHelp">
          <ul>
            <li>ⓘ 연/월/일을 기준으로 결제 현황을 집계합니다.</li>
            <li>Ⓘ 결제 상품에 따라 구분하여 확인 가능합니다</li>
            <li>Ⓘ 금액/건수 기준으로 확인 가능합니다.</li>
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
                <select name="" id="">
                  <option value="">전체</option>
                  <option value="">1월</option>
                  <option value="">2월</option>
                  <option value="">3월</option>
                  <option value="">4월</option>
                  <option value="">5월</option>
                  <option value="">6월</option>
                  <option value="">7월</option>
                  <option value="">8월</option>
                  <option value="">9월</option>
                  <option value="">10월</option>
                  <option value="">11월</option>
                  <option value="">12월</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="">상품 전체</option>
                  <option value="">강좌</option>
                  <option value="">교재</option>
                  <option value="">배송료</option>
                  <option value="">기타</option>
                </select>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="right-po">
        <button class="btnM redline" id="numberBaseBtn" @click="numberBase()" v-if="numberBaseBtn">결제건수 기준으로 조회</button>
        <button class="btnM redline" id="priceBaseBtn" @click="priceBase()" v-if="priceBaseBtn">금액 기준으로 조회</button>
      </div>
    </div>
    <!-- //검색 -->
    <div class="tls" v-if="priceTls">
      <table>
        <colgroup>
          <col width="100"/>
          <col width="200"/>
          <col width="200"/>
          <col width="200"/>
          <col width="200"/>
          <col width="200"/>
        </colgroup>
        <thead>
          <tr>
            <th>월</th>
            <th><em class="fBlue">2021년</em></th>
            <th><em class="fBlue">2020년</em></th>
            <th class="bgRed"><em class="fBlue">2021-2020년</em> 대비</th>
            <th><em class="fBlue">2019년</em></th>
            <th class="bgRed"><em class="fBlue">2020년-2019년</em> 대비</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1월</td>
            <td class="tR">100,000,000</td>
            <td class="tR">120,000,000</td>
            <td class="tR fRed">(20,000,000)</td>
            <td class="tR">90,000,000</td>
            <td class="tR">30,000,000</td>
          </tr>
          <tr>
            <td>2월</td>
            <td class="tR">110,000,000</td>
            <td class="tR">100,000,000</td>
            <td class="tR">10,000,000</td>
            <td class="tR">110,000,000</td>
            <td class="tR fRed">(10,000,000)</td>
          </tr>
          <tr>
            <td>3월</td>
            <td class="tR">100,000,000</td>
            <td class="tR">120,000,000</td>
            <td class="tR fRed">(20,000,000)</td>
            <td class="tR">90,000,000</td>
            <td class="tR">30,000,000</td>
          </tr>
          <tr>
            <td>4월</td>
            <td class="tR">110,000,000</td>
            <td class="tR">100,000,000</td>
            <td class="tR">10,000,000</td>
            <td class="tR">110,000,000</td>
            <td class="tR fRed">(10,000,000)</td>
          </tr>
          <tr>
            <td>5월</td>
            <td class="tR">100,000,000</td>
            <td class="tR">120,000,000</td>
            <td class="tR fRed">(20,000,000)</td>
            <td class="tR">90,000,000</td>
            <td class="tR">30,000,000</td>
          </tr>
          <tr>
            <td>6월</td>
            <td class="tR">110,000,000</td>
            <td class="tR">100,000,000</td>
            <td class="tR">10,000,000</td>
            <td class="tR">110,000,000</td>
            <td class="tR fRed">(10,000,000)</td>
          </tr>
          <tr>
            <td>7월</td>
            <td class="tR">100,000,000</td>
            <td class="tR">120,000,000</td>
            <td class="tR fRed">(20,000,000)</td>
            <td class="tR">90,000,000</td>
            <td class="tR">30,000,000</td>
          </tr>
          <tr>
            <td>8월</td>
            <td class="tR">110,000,000</td>
            <td class="tR">100,000,000</td>
            <td class="tR">10,000,000</td>
            <td class="tR">110,000,000</td>
            <td class="tR fRed">(10,000,000)</td>
          </tr>
          <tr>
            <td>9월</td>
            <td class="tR">100,000,000</td>
            <td class="tR">120,000,000</td>
            <td class="tR fRed">(20,000,000)</td>
            <td class="tR">90,000,000</td>
            <td class="tR">30,000,000</td>
          </tr>
          <tr>
            <td>10월</td>
            <td class="tR">110,000,000</td>
            <td class="tR">100,000,000</td>
            <td class="tR">10,000,000</td>
            <td class="tR">110,000,000</td>
            <td class="tR fRed">(10,000,000)</td>
          </tr>
          <tr>
            <td>11월</td>
            <td class="tR">100,000,000</td>
            <td class="tR">120,000,000</td>
            <td class="tR fRed">(20,000,000)</td>
            <td class="tR">90,000,000</td>
            <td class="tR">30,000,000</td>
          </tr>
          <tr>
            <td>12월</td>
            <td class="tR">110,000,000</td>
            <td class="tR">100,000,000</td>
            <td class="tR">10,000,000</td>
            <td class="tR">110,000,000</td>
            <td class="tR fRed">(10,000,000)</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td>합계</td>
            <td class="tR">1,260,000,000</td>
            <td class="tR">1,320,000,000</td>
            <td class="tR fRed">(60,000,000)</td>
            <td class="tR">1,200,000,000</td>
            <td class="tR">120,000,000</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="tls" v-if="numberTls">
      <table>
        <colgroup>
          <col width="100"/>
          <col width="200"/>
          <col width="200"/>
          <col width="200"/>
          <col width="200"/>
          <col width="200"/>
        </colgroup>
        <thead>
          <tr>
            <th>월</th>
            <th><em class="fBlue">2021년</em></th>
            <th><em class="fBlue">2020년</em></th>
            <th class="bgRed"><em class="fBlue">2021-2020년</em> 대비</th>
            <th><em class="fBlue">2019년</em></th>
            <th><em class="fBlue">2020년-2019년</em> 대비</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1월</td>
            <td class="tR">1,000</td>
            <td class="tR">1,200</td>
            <td class="tR fRed">(200)</td>
            <td class="tR">900</td>
            <td class="tR">300</td>
          </tr>
          <tr>
            <td>2월</td>
            <td class="tR">1,100</td>
            <td class="tR">1,000</td>
            <td class="tR">100</td>
            <td class="tR">1,100</td>
            <td class="tR fRed">(100)</td>
          </tr>
          <tr>
            <td>3월</td>
            <td class="tR">1,000</td>
            <td class="tR">1,200</td>
            <td class="tR fRed">(200)</td>
            <td class="tR">900</td>
            <td class="tR">300</td>
          </tr>
          <tr>
            <td>4월</td>
            <td class="tR">1,100</td>
            <td class="tR">1,000</td>
            <td class="tR">100</td>
            <td class="tR">1,100</td>
            <td class="tR fRed">(100)</td>
          </tr>
          <tr>
            <td>5월</td>
            <td class="tR">1,000</td>
            <td class="tR">1,200</td>
            <td class="tR fRed">(200)</td>
            <td class="tR">900</td>
            <td class="tR">300</td>
          </tr>
          <tr>
            <td>6월</td>
            <td class="tR">1,100</td>
            <td class="tR">1,000</td>
            <td class="tR">100</td>
            <td class="tR">1,100</td>
            <td class="tR fRed">(100)</td>
          </tr>
          <tr>
            <td>7월</td>
            <td class="tR">1,000</td>
            <td class="tR">1,200</td>
            <td class="tR fRed">(200)</td>
            <td class="tR">900</td>
            <td class="tR">300</td>
          </tr>
          <tr>
            <td>8월</td>
            <td class="tR">1,100</td>
            <td class="tR">1,000</td>
            <td class="tR">100</td>
            <td class="tR">1,100</td>
            <td class="tR fRed">(100)</td>
          </tr>
          <tr>
            <td>9월</td>
            <td class="tR">1,000</td>
            <td class="tR">1,200</td>
            <td class="tR fRed">(200)</td>
            <td class="tR">900</td>
            <td class="tR">300</td>
          </tr>
          <tr>
            <td>10월</td>
            <td class="tR">1,100</td>
            <td class="tR">1,000</td>
            <td class="tR">100</td>
            <td class="tR">1,100</td>
            <td class="tR fRed">(100)</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td>합계</td>
            <td class="tR">12,600</td>
            <td class="tR">13,200</td>
            <td class="tR fRed">(600)</td>
            <td class="tR">12,000</td>
            <td class="tR">1.200</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IndicatorPaymentDay',
  data() {
    return {
      numberBaseBtn: true,
      priceBaseBtn: false,
      numberTls: false,
      priceTls: true,
    }
  },
  methods: {
    numberBase() {
      this.numberBaseBtn = !this.numberBaseBtn;
      this.priceBaseBtn = !this.priceBaseBtn;
	 		this.priceTls = false;
	 		this.numberTls = true;
	  },
    priceBase() {
      this.numberBaseBtn = !this.numberBaseBtn;
      this.priceBaseBtn = !this.priceBaseBtn;
	 		this.priceTls = true;
	 		this.numberTls = false;
	  },
  },
  components: {
  },
}
</script>
