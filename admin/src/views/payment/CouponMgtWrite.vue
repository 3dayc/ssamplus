<template lang="html">
  <div>
    <div class="pageTit">
      <h2>쿠폰 등록/발급</h2>
      <span><router-link to="/mkup/payment/paymentMgt">결제</router-link><router-link to="/mkup/payment/couponMgt">쿠폰 관리</router-link><router-link to="/mkup/payment/couponMgt">쿠폰 등록/발급</router-link><em>신규등록</em></span>
    </div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="couponMgtWrite"><!-- class 없어도 유지 -->
          <!-- 쿠폰 기본정보 -->
          <div class="subTit">
            <h3>쿠폰 기본정보</h3>
            <span class="right">
              <router-link to="/mkup/payment/couponMgt/view" class="btnM green">저장</router-link>
              <router-link to="/mkup/payment/couponMgt" class="btnM gray ml10">취소</router-link>
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
                  <td><input type="text" name="" value=""></td>
                  <th>쿠폰번호</th>
                  <td></td>
                </tr>
                <tr>
                  <th>카테고리<sup>필수</sup></th>
                  <td>
                    <!-- 2021-07-06 -->
                    <span class="selectSet mr10">
                      <select name="" id="">
                        <option value="no" class="label">선택 1</option>
                        <option value="">강좌</option>
                        <option value="">배송비</option>
                        <option value="">사물함</option><!-- 2021-09-02 사물함 추가 -->
                      </select>
                    </span>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">선택 2</option>
                        <option value="">이벤트</option>
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
                  <td colspan="3">
                    <span class="checkSet">
                      <input type="checkbox" checked />
                      <label for=""><i></i>사용</label>
                    </span>
                    <span class="unit w100"><input type="text" class="tR" value="3"><em>장</em></span>
                    <span class="infoMsg fGreen ml10">* 발행 숫자만큼 난수쿠폰을 생성합니다.</span>
                  </td>
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
                          <input type="radio" name="radio3" value="radio031" checked/>
                          <label for="radio031"><i></i></label>
                        </span>
                        <dl>
                          <dt>할인금액</dt>
                          <dd><span class="unit wAuto"><input type="text" class="tR"><em>원</em></span></dd>
                        </dl>
                        <dl>
                          <dt>최소주문금액</dt>
                          <dd><span class="unit wAuto"><input type="text" class="tR"><em>원</em></span></dd>
                        </dl>
                        <span class="infoMsg fGreen ml10">* 최소 주문금액 미 입력 시 금액 제한 없음</span>
                      </li>
                      <li>
                        <span class="radioSet noLabel">
                          <input type="radio" name="radio3" value="radio032"/>
                          <label for="radio032"><i></i></label>
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
                      <!-- 2021-09-02 사물함의 경우 -->
                      <!-- <li class="mt20">
                        <span class="radioSet noLabel">
                          <input type="radio" name="radio4" value='radio041'/>
                          <label for="radio041"><i></i></label>
                        </span>
                        <dl>
                          <dt>할인금액</dt>
                          <dd><span class="unit wAuto"><input type="text" class="tR" disabled><em>원</em></span></dd>
                        </dl>
                        <dl>
                          <dt>최소주문금액</dt>
                          <dd><span class="unit wAuto"><input type="text" class="tR" disabled><em>원</em></span></dd>
                        </dl>
                      </li>
                      <li>
                        <span class="radioSet noLabel">
                          <input type="radio" name="radio4" value="radio042" checked/>
                          <label for="radio042"><i></i></label>
                        </span>
                        <dl>
                          <dt>할인율</dt>
                          <dd><span class="unit wAuto"><input type="text" class="tR"><em>%</em></span></dd>
                        </dl>
                        <dl>
                          <dt>최대할인금액</dt>
                          <dd><span class="unit wAuto"><input type="text" class="tR"><em>원</em></span></dd>
                        </dl>
                      </li> -->
                      <!-- //2021-09-02 사물함의 경우 -->
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>쿠폰설명</th>
                  <td colspan="3">
                    <textarea class="wFull" rows="4"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- //쿠폰 기본정보 -->
          <!-- 쿠폰 권한 -->
          <div class="subTit cpRight mt10"><h3>쿠폰 권한</h3>
            <!-- 2021-07-06 쿠폰 권한 라디오 삭제 -->
            <span class="infoMsg fGreen ml10">* 쿠폰 등록 후 쿠폰권한을 설정해주세요</span>
          </div>
          <!-- //쿠폰 권한 -->
        </div>
        <!-- //page layout -->
      </article>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'CouponMgtWrite',
  data() {
    return {
      date02: '',
      date03: '',
    }
  },
}
</script>

<style lang="css" scoped>
</style>
