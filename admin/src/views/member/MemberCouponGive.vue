<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
        <h1>쿠폰발행</h1>
        <span class="supTxt">* 적용 가능한 쿠폰 리스트 중 해당 회원에게 발행할 쿠폰을 선택할 수 있음</span>
        <div class="btnArea">
          <button class="btnM green">발행</button>
          <button class="btnM ml10">취소</button>
        </div>
    </div>
    <div class="winContent">
      <div class="tls subGreen">
        <table>
          <!-- 2021-08-23 너비 수정 -->
          <colgroup>
            <col width="60"/>
            <col width="90"/>
            <col width="*"/>
            <col width="180"/>
            <col width="100"/>
            <col width="100"/>
            <col width="320"/>
          </colgroup>
          <!-- //2021-08-23 너비 수정 -->
          <thead>
            <tr>
              <th>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </th>
              <th>쿠폰번호</th>
              <th>쿠폰명</th>
              <th>할인혜택 / 조건</th>
              <th>중복할인</th>
              <th>사용기준</th>
              <th>발행기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" checked/>
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>10%<br/>최대 1,000,000원</td>
              <td>가능</td>
              <td>2021-05-04 ~ 2021-06-15</td>
              <td>
                <span class="calDupSet">
                  <VCalendar class="calSet" v-model="date1" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly placeholder="사용 시작일 선택" />
                    </template>
                  </VCalendar>
                  <em>~</em>
                  <VCalendar class="calSet" v-model="date2" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly placeholder="사용 종료일 선택" />
                    </template>
                  </VCalendar>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>LG Gram_5만원 할인쿠폰</td>
              <td>10% <br/>최대 1,000,000원</td>
              <td>불가능</td>
              <td>2021-05-04 ~ 2021-06-15</td>
              <td></td>
            </tr>
            <tr><!-- 2021-08-23 배경색 class 삭제 -->
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" checked/>
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>이동건 해설편 배송비 쿠폰</td>
              <td>2,500원</td>
              <td>불가능</td>
              <td>2021-01-04 ~ 2021-02-15</td>
              <td>
                <span class="calDupSet">
                  <VCalendar class="calSet" v-model="date1" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly placeholder="사용 시작일 선택" />
                    </template>
                  </VCalendar>
                  <em>~</em>
                  <VCalendar class="calSet" v-model="date2" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly placeholder="사용 종료일 선택" />
                    </template>
                  </VCalendar>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>100,000원<br/>최소 주문금액 20,000원</td>
              <td>가능</td>
              <td>발급 후 10일</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>LG Gram_5만원 할인쿠폰</td>
              <td>10% <br/>최대 1,000,000원</td>
              <td>가능</td>
              <td>2021-05-04 ~ 2021-06-15</td>
              <td></td>
            </tr>
            <tr><!-- 2021-08-23 배경색 class 삭제 -->
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>100,000원<br/>최소 주문금액 20,000원</td>
              <td>불가능</td>
              <td>2021-01-04 ~ 2021-02-15</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>이동건 해설편 배송비 쿠폰</td>
              <td>2,500원</td>
              <td>불가능</td>
              <td>2021-01-04 ~ 2021-02-15</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>50,000<br/>최소 주문금액 50,000원</td>
              <td>가능</td>
              <td>2021-05-04 ~ 2021-06-15 </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>LG Gram_5만원 할인쿠폰</td>
              <td>10%<br/>최대 1,000,000원 할인</td>
              <td>가능</td>
              <td>2021-05-04 ~ 2021-06-15 </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>100,000원<br/>최소 주문금액 20,000원</td>
              <td>불가능</td>
              <td>2021-05-04 ~ 2021-06-15 </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>10%<br/>최대 1,000,000원 할인</td>
              <td>가능</td>
              <td>2021-05-04 ~ 2021-06-15 </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>LG Gram_5만원 할인쿠폰</td>
              <td>10%<br/>최대 1,000,000원 할인</td>
              <td>불가능</td>
              <td>2021-05-04 ~ 2021-06-15 </td>
              <td></td>
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
  name: 'MemberCouponGive',
  data() {
    return {
      ciWayMember: true,
      ciWayClass: false,
      ciWayFile: false,
      popTrigger: false,
      closeBtn: false,
      date1: '',
      date2: '',
      date3: '',
      date4: '',
      date5: '',
      date6: '',
      date7: '',
      date8: '',
      date9: '',
      date10: '',
      date11: '',
      date12: '',
      date13: '',
      date14: '',
      date15: '',
      date16: '',
    }
  },
  methods: {
    onChange(event) {
      let optionText = event.target.value;
      if (optionText == 'ciWay1') {
        this.ciWayMember = true;
        this.ciWayClass = false;
        this.ciWayFile = false;
      } else if(optionText == 'ciWay2') {
        this.ciWayMember = false;
        this.ciWayClass = true;
        this.ciWayFile = false;
      } else {
        this.ciWayMember = false;
        this.ciWayClass = false;
        this.ciWayFile = true;
      }
    },
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
