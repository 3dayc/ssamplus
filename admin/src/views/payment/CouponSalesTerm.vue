<template lang="html">
  <div>
    <div class="couponSalesTerm">
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">카테고리</option>
                  <option value="">전체</option>
                  <option value="">이벤트</option>
                  <option value="">대학제휴</option>
                  <option value="">복지할인</option>
                  <option value="">선생님요청</option>
                  <option value="">협력사</option>
                  <option value="">배송비</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">2021년</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">전체</option>
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
          </div>
        </div>
      </div>
      <div class="tls mt10">
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
              <th>2021년</th>
              <th>2020년</th>
              <th class="bgPoint">21~20년 대비</th>
              <th>2019년</th>
              <th class="bgPoint">20~19년 대비</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1월</td>
              <td class="tR"><a @click="popTrigger = true">100,000,000원</a></td>
              <td class="tR"><a @click="popTrigger = true">120,000,000원</a></td>
              <td class="tR fRed">(20,000,000)원</td>
              <td class="tR"><a @click="popTrigger = true">90,000,000원</a></td>
              <td class="tR fBold">30,000,000원</td>
            </tr>
            <tr>
              <td>2월</td>
              <td class="tR"><a @click="popTrigger = true">150,000,000원</a></td>
              <td class="tR"><a @click="popTrigger = true">140,000,000원</a></td>
              <td class="tR">100,000,000원</td>
              <td class="tR"><a @click="popTrigger = true">130,000,000원</a></td>
              <td class="tR fBold">100,000,000원</td>
            </tr>
            <tr>
              <td>3월</td>
              <td class="tR"><a @click="popTrigger = true">100,000,000원</a></td>
              <td class="tR"><a @click="popTrigger = true">120,000,000원</a></td>
              <td class="tR fRed">(20,000,000)원</td>
              <td class="tR"><a @click="popTrigger = true">90,000,000원</a></td>
              <td class="tR fBold">30,000,000원</td>
            </tr>
            <tr>
              <td>4월</td>
              <td class="tR"><a @click="popTrigger = true">150,000,000원</a></td>
              <td class="tR"><a @click="popTrigger = true">140,000,000원</a></td>
              <td class="tR">100,000,000원</td>
              <td class="tR"><a @click="popTrigger = true">130,000,000원</a></td>
              <td class="tR fBold">100,000,000원</td>
            </tr>
            <tr>
              <td>5월</td>
              <td class="tR"><a @click="popTrigger = true">100,000,000원</a></td>
              <td class="tR"><a @click="popTrigger = true">120,000,000원</a></td>
              <td class="tR fRed">(20,000,000)원</td>
              <td class="tR"><a @click="popTrigger = true">90,000,000원</a></td>
              <td class="tR fBold">30,000,000원</td>
            </tr>
            <tr>
              <td>6월</td>
              <td class="tR"><a @click="popTrigger = true">150,000,000원</a></td>
              <td class="tR"><a @click="popTrigger = true">140,000,000원</a></td>
              <td class="tR">100,000,000원</td>
              <td class="tR"><a @click="popTrigger = true">130,000,000원</a></td>
              <td class="tR fBold">100,000,000원</td>
            </tr>
            <tr>
              <td>7월</td>
              <td class="tR"><a @click="popTrigger = true">100,000,000원</a></td>
              <td class="tR"><a @click="popTrigger = true">120,000,000원</a></td>
              <td class="tR fRed">(20,000,000)원</td>
              <td class="tR"><a @click="popTrigger = true">90,000,000원</a></td>
              <td class="tR fBold">30,000,000원</td>
            </tr>
            <tr>
              <td>8월</td>
              <td class="tR"><a @click="popTrigger = true">150,000,000원</a></td>
              <td class="tR"><a @click="popTrigger = true">140,000,000원</a></td>
              <td class="tR">100,000,000원</td>
              <td class="tR"><a @click="popTrigger = true">130,000,000원</a></td>
              <td class="tR fBold">100,000,000원</td>
            </tr>
            <tr>
              <td>9월</td>
              <td class="tR"><a @click="popTrigger = true">100,000,000원</a></td>
              <td class="tR"><a @click="popTrigger = true">120,000,000원</a></td>
              <td class="tR fRed">(20,000,000)원</td>
              <td class="tR"><a @click="popTrigger = true">90,000,000원</a></td>
              <td class="tR fBold">30,000,000원</td>
            </tr>
            <tr>
              <td>10월</td>
              <td class="tR"><a @click="popTrigger = true">150,000,000원</a></td>
              <td class="tR"><a @click="popTrigger = true">140,000,000원</a></td>
              <td class="tR">100,000,000원</td>
              <td class="tR"><a @click="popTrigger = true">130,000,000원</a></td>
              <td class="tR fBold">100,000,000원</td>
            </tr>
            <tr>
              <td>11월</td>
              <td class="tR"><a @click="popTrigger = true">100,000,000원</a></td>
              <td class="tR"><a @click="popTrigger = true">120,000,000원</a></td>
              <td class="tR fRed">(20,000,000)원</td>
              <td class="tR"><a @click="popTrigger = true">90,000,000원</a></td>
              <td class="tR fBold">30,000,000원</td>
            </tr>
            <tr>
              <td>12월</td>
              <td class="tR"><a @click="popTrigger = true">150,000,000원</a></td>
              <td class="tR"><a @click="popTrigger = true">140,000,000원</a></td>
              <td class="tR">100,000,000원</td>
              <td class="tR"><a @click="popTrigger = true">130,000,000원</a></td>
              <td class="tR fBold">100,000,000원</td>
            </tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
          </tbody>
        </table>
      </div>
    </div>
    <Popup v-if='popTrigger' @close="popTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>쿠폰 현황 상세</h1>
        <span>* 쿠폰 매출별 상세 쿠폰 발급현황을 확인할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
        <div class="tls subGreen">
          <table>
            <colgroup>
              <col width="100"/>
              <col width="400"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="150"/>
            </colgroup>
            <thead>
              <tr>
                <th>카테고리</th>
                <th>쿠폰명</th>
                <th>발급건수</th>
                <th>사용건수</th>
                <th>미사용건수</th>
                <th>사용률</th>
                <th>결제금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>이벤트</td>
                <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
                <td>100건</td>
                <td>80건</td>
                <td>20건</td>
                <td>80%</td>
                <td class="tR">10,000,000원</td>
              </tr>
              <tr>
                <td>대학제휴</td>
                <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
                <td>100건</td>
                <td>80건</td>
                <td>20건</td>
                <td>80%</td>
                <td class="tR">10,000,000원</td>
              </tr>
              <tr>
                <td>복지할인</td>
                <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
                <td>100건</td>
                <td>80건</td>
                <td>20건</td>
                <td>80%</td>
                <td class="tR">10,000,000원</td>
              </tr>
              <tr>
                <td>선생님요청</td>
                <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
                <td>100건</td>
                <td>80건</td>
                <td>20건</td>
                <td>80%</td>
                <td class="tR">10,000,000원</td>
              </tr>
              <tr>
                <td>협력사</td>
                <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
                <td>100건</td>
                <td>80건</td>
                <td>20건</td>
                <td>80%</td>
                <td class="tR">10,000,000원</td>
              </tr>
              <!-- 2021-09-02 항목 내용 수정 -->
              <tr>
                <td>배송비</td>
                <td>이동건 해설편 배송비 쿠폰</td>
                <td>100건</td>
                <td>80건</td>
                <td>20건</td>
                <td>80%</td>
                <td class="tR">800,000원</td>
              </tr>
              <tr>
                <td>사물함</td>
                <td>사물함 1개월 할인 쿠폰</td>
                <td>100건</td>
                <td>80건</td>
                <td>20건</td>
                <td>80%</td>
                <td class="tR">0원</td>
              </tr>
              <tr>
                <td>사물함</td>
                <td>사물함 1개월 50% 할인 쿠폰</td>
                <td>100건</td>
                <td>80건</td>
                <td>20건</td>
                <td>80%</td>
                <td class="tR">200,000원</td>
              </tr>
              <!-- //2021-09-02 항목 내용 수정 -->
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'CouponSalesTerm',
  data() {
    return {
      classValue: "couponSalesTermPop",
      popTrigger: false,
      closeBtn: false,
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
