<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="paymentBasket">
          <!-- 서브 타이틀 -->
          <div class="subTit noLine">
            <h3>장바구니</h3>
            <div class="summeryTxt">
              <p class="grayBox">
                <span>수강 신청 기간이 지난 강좌는 장바구니에서 자동으로 삭제됩니다.</span>
                <span>강좌를 취소하면 해당 교재도 같이 취소됩니다. </span>
                <span>교재는 배송비가 개별 부과되며 단권이 30,000원 이상인 경우 무료 배송됩니다. <i>제주도 및 도서산간지역의 경우 일반 배송료 외 항공료 3,000원이 추가됩니다.</i></span>
              </p>
            </div>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 장바구니 -->
          <div class="basketNDiscound">
            <!---->
            <div class="basketContents">
              <!-- 강좌 -->
              <div class="basketSet sjcCase"><!-- 강좌일 경우 class sjcCase 추가 -->
                <div class="totalCheck">
                  <span class="checkSet">
                    <input type="checkbox" id="one0" />
                    <label for="one0"><i></i><strong>강좌</strong></label>
                  </span>
                </div>
                <ul>
                  <!-- Loop -->
                  <li>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="one" />
                      <label for="one"><i></i></label>
                    </span>
                    <div class="gridSet">
                      <div class="gridItem tL">
                        <em class="iLocSet online">온라인</em><em class="iPro">패키지</em><em class="iSet">2021</em>
                        <strong class="tit">[교육학 김현] 연간쌤팩 베이직</strong>
                      </div>
                      <span class="gridItem col2 tR">
                        <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong> </span>
                      </span>
                    </div>
                    <button class="btnDelete" @click="deleteTrigger = true">삭제</button>
                  </li>
                  <!-- //Loop -->
                  <li>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="one" />
                      <label for="one"><i></i></label>
                    </span>
                    <div class="gridSet">
                      <div class="gridItem tL">
                        <em class="iLocSet">학원</em><em class="iPro">단과</em><em class="iSet">2021</em>
                        <strong class="tit">[교육학 김현] 연간쌤팩 베이직</strong>
                      </div>
                      <span class="gridItem col2 tR">
                        <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong> </span>
                      </span>
                    </div>
                    <button class="btnDelete" @click="deleteTrigger = true">삭제</button>
                  </li>
                </ul>
                <div class="totalPrice"><em>합계</em><strong>1,712,000<i>원</i></strong></div>
              </div>
              <!-- //강좌 -->
              <!-- 교재 -->
              <div class="basketSet">
                <div class="totalCheck">
                  <span class="checkSet">
                    <input type="checkbox" id="one" />
                    <label for="one"><i></i><strong>교재</strong></label>
                  </span>
                </div>
                <ul>
                  <!-- Loop -->
                  <li>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="one" />
                      <label for="one"><i></i></label>
                    </span>
                    <div class="gridSet">
                      <span class="gridItem col1">
                        <em class="iPro book">교재</em>
                      </span>
                      <div class="gridItem tL">
                        <strong class="tit">그린키위 교육학 (그린편 상권)<em class="inComeDed">소득공제</em></strong>
                      </div>
                      <div class="priceDetInfo">
                        <span class="gridItem col3">
                          <div class="countBoxArrow">
                            <span class="countTag">수량</span>
                            <select name="count">
                              <option value="1"selected="selected">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </span>
                        <span class="gridItem col2 tR">
                          <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong> </span>
                        </span>
                      </div>
                    </div>
                    <button class="btnDelete" @click="deleteTrigger = true">삭제</button>
                  </li>
                  <!-- //Loop -->
                  <li>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="one" />
                      <label for="one"><i></i></label>
                    </span>
                    <div class="gridSet">
                      <span class="gridItem col1">
                        <em class="iPro book">교재</em>
                      </span>
                      <div class="gridItem tL widthLecCase">
                        <strong class="tit">키위잼</strong>
                      </div>
                      <em class="info red">해당 교재는 강좌신청 시에만 1권을 구매할 수 있도록 제한됨</em>
                      <span class="gridItem col2 tR">
                        <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong> </span>
                      </span>
                    </div>
                    <button class="btnDelete" @click="deleteTrigger = true">삭제</button>
                  </li>
                </ul>
                <div class="totalPrice"><em>합계</em><strong>1,712,000<i>원</i></strong></div>
              </div>
              <!-- //교재 -->
              <!-- 학습기기 -->
              <div class="basketSet">
                <div class="totalCheck">
                  <span class="checkSet">
                    <input type="checkbox" id="one2" />
                    <label for="one2"><i></i><strong>학습기기</strong></label>
                  </span>
                </div>
                <ul>
                  <!-- Loop -->
                  <li>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="one" />
                      <label for="one"><i></i></label>
                    </span>
                    <div class="gridSet">
                      <span class="gridItem col1">
                        <em class="iPro device">노트북</em>
                      </span>
                      <div class="gridItem tL">
                        <strong class="tit">[SAMSUNG] 울트라 플러스2</strong>
                      </div>
                      <div class="priceDetInfo">
                        <span class="gridItem col3">
                          <div class="countBoxArrow">
                            <span class="countTag">수량</span>
                            <select name="count">
                              <option value="1"selected="selected">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </span>
                        <span class="gridItem col2 tR">
                          <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong> </span>
                        </span>
                      </div>
                    </div>
                    <button class="btnDelete" @click="deleteTrigger = true">삭제</button>
                  </li>
                  <!-- //Loop -->
                  <li>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="one" />
                      <label for="one"><i></i></label>
                    </span>
                    <div class="gridSet">
                      <span class="gridItem col1">
                        <em class="iPro device">태블릿</em>
                      </span>
                      <div class="gridItem tL">
                        <strong class="tit">[APPLE] iPad</strong>
                      </div>
                      <div class="priceDetInfo">
                        <span class="gridItem col3">
                          <div class="countBoxArrow">
                            <span class="countTag">수량</span>
                            <select name="count">
                              <option value="1"selected="selected">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </span>
                        <span class="gridItem col2 tR">
                          <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong> </span>
                        </span>
                      </div>
                    </div>
                    <button class="btnDelete" @click="deleteTrigger = true">삭제</button>
                  </li>
                  <li>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="one" />
                      <label for="one"><i></i></label>
                    </span>
                    <div class="gridSet">
                      <span class="gridItem col1">
                        <em class="iPro device">스마트폰</em>
                      </span>
                      <div class="gridItem tL">
                        <strong class="tit">[LG] WING</strong>
                      </div>
                      <div class="priceDetInfo">
                        <span class="gridItem col3">
                          <div class="countBoxArrow">
                            <span class="countTag">수량</span>
                            <select name="count">
                              <option value="1"selected="selected">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </span>
                        <span class="gridItem col2 tR">
                          <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong> </span>
                        </span>
                      </div>
                    </div>
                    <button class="btnDelete" @click="deleteTrigger = true">삭제</button>
                  </li>
                </ul>
                <div class="totalPrice"><em>합계</em><strong>1,712,000<i>원</i></strong></div>
              </div>
              <!-- //학습기기 -->
              <!-- 기타 -->
              <div class="basketSet">
                <div class="totalCheck">
                  <span class="checkSet">
                    <input type="checkbox" id="one3" />
                    <label for="one3"><i></i><strong>굿즈</strong></label>
                  </span>
                </div>
                <ul>
                  <!-- Loop -->
                  <li>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="one" />
                      <label for="one"><i></i></label>
                    </span>
                    <div class="gridSet">
                      <span class="gridItem col1">
                        <em class="iPro goods">페브릭</em>
                      </span>
                      <div class="gridItem tL">
                        <strong class="tit">플라워 방석</strong>
                      </div>
                      <div class="priceDetInfo">
                        <span class="gridItem col3">
                          <div class="countBoxArrow">
                            <span class="countTag">수량</span>
                            <select name="count">
                              <option value="1"selected="selected">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </span>
                        <span class="gridItem col2 tR">
                          <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong> </span>
                        </span>
                      </div>
                    </div>
                    <button class="btnDelete" @click="deleteTrigger = true">삭제</button>
                  </li>
                  <!-- //Loop -->
                  <li>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="one" />
                      <label for="one"><i></i></label>
                    </span>
                    <div class="gridSet">
                      <span class="gridItem col1">
                        <em class="iPro goods">문구</em>
                      </span>
                      <div class="gridItem tL">
                        <strong class="tit">노트세트</strong>
                      </div>
                      <div class="priceDetInfo">
                        <span class="gridItem col3">
                          <div class="countBoxArrow">
                            <span class="countTag">수량</span>
                            <select name="count">
                              <option value="1"selected="selected">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </span>
                        <span class="gridItem col2 tR">
                          <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong> </span>
                        </span>
                      </div>
                    </div>
                    <button class="btnDelete" @click="deleteTrigger = true">삭제</button>
                  </li>
                </ul>
                <div class="totalPrice"><em>합계</em><strong>1,712,000<i>원</i></strong></div>
              </div>
              <!-- //기타 -->
            </div>
            <!--//-->
            <!-- 결제내역 -->
            <div class="viewPrice" v-if="!this.mobile">
              <!-- <h2>결제내역</h2> -->
              <div class="priceOrderSet">
                <dl>
                  <dt>총 상품금액</dt>
                  <dd>
                    <span class="price"><strong>2,712,000<i>원</i></strong></span>
                  </dd>
                </dl>
                <dl>
                  <dt>배송비</dt>
                  <dd>
                    <span class="price"><strong>2,712,000<i>원</i></strong></span>
                  </dd>
                </dl>
                <dl class="last">
                  <dt>예상 결제 금액</dt>
                  <dd>
                    <span class="price"><strong>1,542,000<i>원</i></strong></span>
                  </dd>
                </dl>
              </div>
              <div class="btn">
                <router-link to="/mkup/mypage/payment/order" class="btnL red">주문하기</router-link>
              </div>
            </div>
            <!-- //결제내역 -->
          </div>
          <!-- //장바구니 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- 취소 팝업 -->
    <Alert v-if='deleteTrigger' @close="deleteTrigger = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>삭제하시겠습니까?</p></div>
      </template>
      <template slot="modalfooter">
        <button class="btnM line" @click="deleteTrigger = false">취소</button>
        <button class="btnM" @click="deleteTrigger = false">확인</button>
      </template>
    </Alert>
    <!-- //취소 팝업 -->

    <!-- 모바일용 결제내역 -->
    <div id="buyFloating" :class="{on:buyFloatingTrigger == true}" v-if="this.mobile">
      <div class="buyOpnerBack"><button class="buyOpner" @click="buyFloatingTrigger = !buyFloatingTrigger">여닫기</button></div>
      <!-- 데이터 영역 -->
      <div class="buyTemplate">
        <!-- 마이페이지 장바구니 -->
        <div class="buySet">
          <dl>
            <dt>총 상품금액</dt>
            <dd>
              <span class="price"><strong>2,712,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>배송비</dt>
            <dd>
              <span class="price"><strong>2,712,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl class="total">
            <dt>예상 결제 금액</dt>
            <dd>
              <span class="price"><strong>1,542,000<i>원</i></strong></span>
            </dd>
          </dl>
        </div>
        <!-- //마이페이지 장바구니 -->
      </div>
      <!-- //데이터 영역 -->
      <div class="buyBtnSet">
        <button class="btnL redline" @click="buyFloatingTrigger = !buyFloatingTrigger" v-if='!this.buyFloatingTrigger'>주문하기</button>
        <router-link to="/mkup/mypage/payment/order" class="btnL red" v-if='buyFloatingTrigger'>주문하기</router-link>
      </div>
    </div>
    <!-- //모바일용 결제내역 -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';


export default {
  mixins: [Mixin],
  name: 'PaymentBasket',
  components: {
  },
  data() {
    return {
      buyFloatingTrigger:false,
      deleteTrigger:false
    }
  },
  methods: {
  },
  mounted() {
  },
}
</script>
