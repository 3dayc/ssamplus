<template lang="html">
  <div>
		<div class="pageTit">
			<h2>쿠폰 등록/발급</h2>
			<span><router-link to="/mkup/payment/paymentMgt">결제</router-link><router-link to="/mkup/payment/couponMgt">쿠폰 관리</router-link><router-link to="/mkup/payment/couponMgt">쿠폰 등록/발급</router-link><em>상세</em></span>
		</div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="couponMgtView"><!-- class 없어도 유지 -->
          <!-- 쿠폰 기본정보 -->
          <div class="subTit">
            <h3>쿠폰 기본정보</h3>
            <span class="right">
              <router-link to="/mkup/payment/couponMgt/view" class="btnM green">저장</router-link>
              <router-link to="/mkup/payment/couponMgt" class="btnM gray ml10">취소</router-link>
              <router-link to="/mkup/payment/couponMgt" class="btnM line ml10">삭제</router-link>
            </span>
          </div>
          <div class="tvs">
            <table>
              <colgroup>
      					<col width="160"/>
      					<col width="*"/>
      					<col width="160"/>
      					<col width="*"/>
              </colgroup>
              <tbody>
                <tr>
                  <th>쿠폰명<sup>필수</sup></th>
                  <td><input type="text" name="" value="" value="[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰"></td>
                  <th>쿠폰번호</th>
                  <td>101234</td>
                </tr>
                <tr>
                  <th>카테고리<sup>필수</sup></th>
                  <td>
                    <!-- 2021-07-06 -->
                    <span class="selectSet mr10">
                      <select name="" id="">
                        <option value="no" class="label">선택 1</option>
                        <option value="" selected>강좌</option>
                        <option value="">배송비</option>
                        <option value="">사물함</option><!-- 2021-09-02 사물함 추가 -->
                      </select>
                    </span>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">선택 2</option>
                        <option value="" selected>이벤트</option>
                        <option value="">대학제휴</option>
                        <option value="">복지할인</option>
                        <option value="">선생님요청</option>
                        <option value="">협력사</option>
                        <option value="">배송비</option>
                        <option value="">사물함</option><!-- 2021-09-02 사물함 추가 -->
                      </select>
                    </span>
                    <!-- //2021-07-06 -->
                  </td>
                  <th>중복할인</th>
                  <td>
                    <span class="radioSet">
                      <input type="radio" name="radio1" />
                      <label for=""><i></i>가능</label>
                    </span>
                    <span class="radioSet">
                      <input type="radio" name="radio1" checked/>
                      <label for=""><i></i>불가능</label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>난수쿠폰 발행</th>
                  <td colspan="3">미사용</td>
                </tr>
                <tr>
                  <th>사용기준<sup>필수</sup></th>
                  <td colspan="3">
                    <ul class="radioDlList">
                      <li>
                        <span class="radioSet noLabel">
                          <input type="radio" name="radio2" checked/>
                          <label for=""><i></i></label>
                        </span>
                        <dl>
                          <dt>사용가능기간</dt>
                          <dd>
                            <span class="calDupSet">
                              <VCalendar class="calSet" v-model="date02" color="green">
                                <template v-slot="{ inputValue, togglePopover }">
                                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                                </template>
                              </VCalendar>
                              <em>~</em>
                              <VCalendar class="calSet" v-model="date03" color="green">
                                <template v-slot="{ inputValue, togglePopover }">
                                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                                </template>
                              </VCalendar>
                            </span>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <span class="radioSet noLabel">
                          <input type="radio" name="radio2" />
                          <label for=""><i></i></label>
                        </span>
                        <dl>
                          <dt>유효일자</dt>
                          <dd>발급 후 <span class="unit w100 ml10 mr10"><input type="text" class="tR" value="3"><em>일</em></span> 간</dd>
                        </dl>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>할인정보<sup>필수</sup></th>
                  <td colspan="3">
                    <ul class="radioDlList">
                      <li>
                        <span class="radioSet noLabel">
                          <input type="radio" name="radio3" checked/>
                          <label for=""><i></i></label>
                        </span>
                        <dl>
                          <dt>할인금액</dt>
                          <dd><span class="unit wAuto"><input type="text" class="tR" value="100,000"><em>원</em></span></dd>
                        </dl>
                        <dl>
                          <dt>최소주문금액</dt>
                          <dd><span class="unit wAuto"><input type="text" class="tR" value="1,000,000"><em>원</em></span></dd>
                        </dl>
                        <span class="infoMsg fGreen ml10">* 최소 주문금액 미 입력 시 금액 제한 없음</span>
                      </li>
                      <li>
                        <span class="radioSet noLabel">
                          <input type="radio" name="radio3" />
                          <label for=""><i></i></label>
                        </span>
                        <dl>
                          <dt>할인율</dt>
                          <dd><span class="unit wAuto"><input type="text" class="tR"><em>%</em></span></dd>
                        </dl>
                        <dl>
                          <dt>최대할인금액</dt>
                          <dd><span class="unit wAuto"><input type="text" class="tR"><em>원</em></span></dd>
                        </dl>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>쿠폰설명</th>
                  <td colspan="3">
                    <textarea class="wFull" rows="4">김현 선생님 1월 이벤트용 할인 쿠폰</textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- //쿠폰 기본정보 -->
          <!-- 쿠폰 권한 -->
          <div class="subTit cpRight mt10"><!-- 2021-07-06 -->
            <h3>쿠폰 권한</h3>
            <div class="grayBgBox">
              <span class="radioSet">
                <input type="radio" name="radio4" checked/>
                <label for=""><i></i>적용상품</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="radio4" />
                <label for=""><i></i>제외상품</label>
              </span>
            </div>
          </div>
          <!-- 2021-07-06 -->
          <div class="tvs mt10">
            <table>
              <colgroup>
                <col width="160">
                <col width="*">
              </colgroup>
              <tbody>
                <tr>
                  <th>쿠폰권한 - 적용</th>
                  <td>
                    <button class="btnS line" @click="PaymentCouponLecture();">적용강좌</button>
                    <button class="btnS line ml10" @click="PaymentCouponGoods();">적용상품</button>
                    <button class="btnS line ml10" @click="PaymentCouponBook();">적용교재</button>
                    <div class="tls discountList">
                      <table>
                        <colgroup>
                          <col width="160">
                          <col width="260">
                          <col width="160">
                          <col width="160">
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">구분</th>
                            <th scope="col">대상</th>
                            <th scope="col">할인금액</th>
                            <th scope="col">최소주문금액</th>
                          </tr>
                        </thead>
                        <tbody>
                          <!--Loop-->
                          <tr>
                            <td>강좌</td>
                            <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                            <td>20,000</td>
                            <td>180,000</td>
                          </tr>
                          <!--//Loop-->
                          <tr>
                            <td>상품</td>
                            <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                            <td>20,000</td>
                            <td>180,000</td>
                          </tr>
                          <!-- 데이터 없을 경우 -->
                          <tr style="display:none;"><td colspan="4" class="noneData">등록된 데이터가 없습니다.</td></tr>
                          <!-- //데이터 없을 경우 -->
                        </tbody>
                      </table>
                    </div>
                    <div class="tls discountList">
                      <table>
                        <colgroup>
                          <col width="160">
                          <col width="260">
                          <col width="160">
                          <col width="160">
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">구분</th>
                            <th scope="col">대상</th>
                            <th scope="col">할인율</th>
                            <th scope="col">최대할인금액</th>
                          </tr>
                        </thead>
                        <tbody>
                          <!--Loop-->
                          <tr>
                            <td>강좌</td>
                            <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                            <td>10%</td>
                            <td>180,000</td>
                          </tr>
                          <!--//Loop-->
                          <tr>
                            <td>상품</td>
                            <td class="tL">갤럭시 북 FLEX 알파</td>
                            <td>10%</td>
                            <td>180,000</td>
                          </tr>
                          <!-- 데이터 없을 경우 -->
                          <tr style="display:none;"><td colspan="4" class="noneData">등록된 데이터가 없습니다.</td></tr>
                          <!-- //데이터 없을 경우 -->
                        </tbody>
                      </table>
                    </div>
                    <div class="tls discountList">
                      <table>
                        <colgroup>
                          <col width="160">
                          <col width="260">
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">구분</th>
                            <th scope="col">대상</th>
                          </tr>
                        </thead>
                        <tbody>
                          <!--Loop-->
                          <tr>
                            <td>교재</td>
                            <td class="tL">류지원 영어교육학 기출문제집</td>
                          </tr>
                          <!--//Loop-->
                          <tr>
                            <td>교재</td>
                            <td class="tL">류지원 영어교육학 기출문제집</td>
                          </tr>
                          <!-- 데이터 없을 경우 -->
                          <tr style="display:none;"><td colspan="2" class="noneData">등록된 데이터가 없습니다.</td></tr>
                          <!-- //데이터 없을 경우 -->
                        </tbody>
                      </table>
                    </div>
                    <div class="tls discountList">
                      <table>
                        <colgroup>
                          <col width="160">
                          <col width="260">
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">구분</th>
                            <th scope="col">대상</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>교재</td>
                            <td class="tL">전체</td>
                          </tr>
                          <!-- 데이터 없을 경우 -->
                          <tr style="display:none;"><td colspan="2" class="noneData">등록된 데이터가 없습니다.</td></tr>
                          <!-- //데이터 없을 경우 -->
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="tvs mt10">
            <table>
              <colgroup>
                <col width="160">
                <col width="*">
              </colgroup>
              <tbody>
                <tr>
                  <th>쿠폰권한 - 제외</th>
                  <td>
                    <button class="btnS line" @click="PaymentCouponLectureExc();">제외강좌</button>
                    <button class="btnS line ml10" @click="PaymentCouponGoodsExc();">제외상품</button>
                    <button class="btnS line ml10" @click="PaymentCouponBookExc();">제외교재</button>
                    <!-- 제외강좌, 제외상품 선택 시 -->
                    <div class="tls discountList">
                      <table>
                        <colgroup>
                          <col width="160">
                          <col width="260">
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">구분</th>
                            <th scope="col">대상</th>
                          </tr>
                        </thead>
                        <tbody>
                          <!--Loop-->
                          <tr>
                            <td>강좌</td>
                            <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                          </tr>
                          <!--//Loop-->
                          <tr>
                            <td>상품</td>
                            <td class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                          </tr>
                          <!-- 데이터 없을 경우 -->
                          <tr style="display:none;"><td colspan="2" class="noneData">등록된 데이터가 없습니다.</td></tr>
                          <!-- //데이터 없을 경우 -->
                        </tbody>
                      </table>
                    </div>
                    <p class="infoMsg fGreen mt10">* 위 항목은 쿠폰 적용 대상에서 제외되며, 위 항목을 제외한 나머지 항목만 쿠폰 적용이 가능합니다.</p>
                    <!-- //제외강좌, 제외상품 선택 시 -->
                    <!-- 제외교재 선택 시 -->
                    <div class="tls discountList">
                      <table>
                        <colgroup>
                          <col width="160">
                          <col width="260">
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">구분</th>
                            <th scope="col">대상</th>
                          </tr>
                        </thead>
                        <tbody>
                          <!--Loop-->
                          <tr>
                            <td>교재</td>
                            <td class="tL">류지원 영어교육학 기출문제집</td>
                          </tr>
                          <!--//Loop-->
                          <tr>
                            <td>교재</td>
                            <td class="tL">류지원 영어교육학 기출문제집</td>
                          </tr>
                          <!-- 데이터 없을 경우 -->
                          <tr style="display:none;"><td colspan="2" class="noneData">등록된 데이터가 없습니다.</td></tr>
                          <!-- //데이터 없을 경우 -->
                        </tbody>
                      </table>
                    </div>
                    <p class="infoMsg fGreen mt10">* 위 항목은 쿠폰 적용 대상에서 제외되며, 위 항목을 제외한 나머지 항목만 쿠폰 적용이 가능합니다.</p>
                    <!-- //제외교재 선택 시 -->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- //2021-07-06 -->
          <!-- //쿠폰 권한 -->
          <!-- 관리 -->
          <div class="subTit mt10"><h3>관리</h3></div>
          <div class="tvs record">
            <table>
              <colgroup>
                <col width="160">
                <col width="*">
              </colgroup>
              <tbody>
                <tr>
                  <th>비고</th>
                  <td>
                    <span class="ipBtn sizeM">
      								<input type="text" />
      								<button class="btnM line">저장</button>
      							</span>
                    <ul class="recordList">
                      <li><strong>[2021-02-23 15:35 / 박미진]</strong>김현 선생님 조교 요청으로 무료 쿠폰 10개 발행함.<button class="btnDelete">삭제</button></li>
                      <li><strong>[2021-02-23 15:35 / 박미진]</strong>파일 업로드 통해 제휴회원을 등록함.<button class="btnDelete">삭제</button></li>
                      <li><strong>[2021-02-23 15:35  / 박미진 ]</strong>   수강료 장기 연체 고객입니다. 현재 무통장 입금으로 계좌번호 전달한 상태임. </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>수정 이력</th>
                  <td>
                    <ul class="recordList">
                      <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- //관리 -->
        </div>
        <!-- //page layout -->
      </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'CouponMgtView',
  data() {
    return {
      date: '',
      date02: '',
      date03: '',
      range: {
        start: new Date(),
        end: new Date(),
      },
    }
  },
  methods: {
    PaymentCouponBook() {
      let routeData = this.$router.resolve({name: 'PaymentCouponBook', query: {data: "someData"}});
      window.open('/mkup/windowPopup/pmtCouponBook', '_blank', `width=1100,height=900`); //2021-07-06
    },
    PaymentCouponGoods() {
      let routeData = this.$router.resolve({name: 'PaymentCouponGoods', query: {data: "someData"}});
      window.open('/mkup/windowPopup/pmtCouponGoods', '_blank', `width=1100,height=900`); //2021-07-06
    },
    PaymentCouponLecture() {
      let routeData = this.$router.resolve({name: 'PaymentCouponLecture', query: {data: "someData"}});
      window.open('/mkup/windowPopup/pmtCouponLecture', '_blank', `width=1100,height=900`); //2021-07-06
    },
    PaymentCouponBookExc() {
      let routeData = this.$router.resolve({name: 'PaymentCouponBookExc', query: {data: "someData"}});
      window.open('/mkup/windowPopup/pmtCouponBookExc', '_blank', `width=1100,height=900`); //2021-07-06
    },
    PaymentCouponGoodsExc() {
      let routeData = this.$router.resolve({name: 'PaymentCouponGoodsExc', query: {data: "someData"}});
      window.open('/mkup/windowPopup/pmtCouponGoodsExc', '_blank', `width=1100,height=900`); //2021-07-06
    },
    PaymentCouponLectureExc() {
      let routeData = this.$router.resolve({name: 'PaymentCouponLectureExc', query: {data: "someData"}});
      window.open('/mkup/windowPopup/pmtCouponLectureExc', '_blank', `width=1100,height=900`); //2021-07-06
    },
  },
  components: {
  },

}
</script>

<style lang="css" scoped>
</style>
