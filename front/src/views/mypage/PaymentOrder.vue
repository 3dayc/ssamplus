<template>
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
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
        <div class="paymentOrder">
          <!-- 서브 타이틀 -->
          <div class="subTit noLine">
            <h3>주문/결제</h3>
            <div class="summeryTxt">
              상품별 적용할 쿠폰을 선택해 주세요. <strong>1가지 상품에 1개의 쿠폰 적용</strong>으로 할인을 받으실 수 있습니다. <button class="btnMaxDiscount">최대할인적용</button>
            </div>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 결제정보 -->
          <div class="basketNDiscound">
            <!---->
            <div class="orderContents">
              <!-- 할인 적용 -->
              <div class="discoundSetting">
                <ul class="typeC">
                  <!-- 온라인 패키지 -->
                  <li>
                    <div class="back">
                      <div class="info">
                        <span class="kind"><em class="iLocSet online">온라인</em></span>
                        <strong class="tit">[교육학 김현] 연간쌤팩 베이직</strong>
                        <span class="amount"><button class="btnContainToggle" :class="{on:containToggle===true}" @click="containToggle = !containToggle">더보기</button></span>
                      </div>
                      <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong></span>
                      <div class="choice">
                        <dl>
                          <dt>쿠폰선택</dt>
                          <dd>
                            <button class="btnCoupon" @click="popupTrigger2 = true, scrollHiden($event)">패키지 강좌 구매 시 50,000원 할인</button>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="contain" v-show="containToggle">
                      <ul>
                        <li>
                          <div class="back package">
                            <div class="info">
                              <span class="kind"><em class="iLocSet ivy">아이비</em></span>
                              <strong class="tit">그린키위반(한국교육사,서양교육사)</strong>
                            </div>
                            <span class="price"><del>193,000</del><strong>1,122,000<i>원</i></strong></span>
                            <div class="choice">
                              <dl class="startDay">
                                <dt>수강시작일</dt>
                                <dd>
                                  <span class="selectSet">
                                    <select name="" id="">
                                      <option value="">2021-03-03</option>
                                    </select>
                                  </span>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </li>
                        <!---->
                        <li>
                          <div class="back package">
                            <div class="info">
                              <span class="kind"><em class="iLocSet ivy">아이비</em></span>
                              <strong class="tit">그린키위반(한국교육사,서양교육사)</strong>
                            </div>
                            <span class="price"><del>193,000</del><strong>562,000<i>원</i></strong></span>
                            <div class="choice">
                              <dl class="startDay">
                                <dt>수강시작일</dt>
                                <dd>
                                  <span class="selectSet">
                                    <select name="" id="">
                                      <option value="">2021-03-03</option>
                                    </select>
                                  </span>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </li>
                        <!---->
                        <li>
                          <div class="back package">
                            <div class="info">
                              <span class="kind"><em class="iLocSet ivy">아이비</em></span>
                              <strong class="tit">그린키위반(한국교육사,서양교육사)</strong>
                            </div>
                            <span class="price"><del>193,000</del><strong>344,000<i>원</i></strong></span>
                            <div class="choice">
                              <dl class="startDay">
                                <dt>수강시작일</dt>
                                <dd>
                                  <span class="selectSet">
                                    <select name="" id="">
                                      <option value="">2021-03-03</option>
                                    </select>
                                  </span>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </li>
                        <!---->
                        <li>
                          <div class="back package">
                            <div class="info">
                              <span class="kind"><em class="iPro device">노트북</em></span>
                              <strong class="tit">[SAMSUNG] 울트라 플러스2</strong>
                              <span class="amount">수량 1개</span>
                            </div>
                            <span class="price"><del>193,000</del><strong>779,000<i>원</i></strong></span>
                          </div>
                        </li>
                        <!---->
                      </ul>
                    </div>
                  </li>
                  <!-- //온라인 패키지 -->
                  <!-- 학원 패키지 -->
                  <li>
                    <div class="back">
                      <div class="info">
                        <span class="kind"><em class="iLocSet ivy">아이비</em></span>
                        <strong class="tit">[교육학 김현] 연간쌤팩 베이직</strong>
                        <span class="amount"><button class="btnContainToggle" :class="{on:containToggle===true}" @click="containToggle = !containToggle">더보기</button></span>
                      </div>
                      <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong></span>
                      <div class="choice">
                        <dl>
                          <dt>쿠폰선택</dt>
                          <dd>
                            <button class="btnCoupon" @click="popupTrigger2 = true, scrollHiden($event)">패키지 강좌 구매 시 50,000원 할인</button>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="contain" v-show="containToggle">
                      <ul>
                        <li>
                          <div class="back package">
                            <div class="info">
                              <span class="kind"><em class="iLocSet ivy">아이비</em></span>
                              <strong class="tit">그린키위반(한국교육사,서양교육사)</strong>
                            </div>
                            <span class="price"><del>193,000</del><strong>1,122,000<i>원</i></strong></span>
                            <div class="choice">
                              <dl class="startDay">
                                <dt>개강일</dt>
                                <dd>
                                  <span class="selectSet">
                                    <select name="" id="" disabled>
                                      <option value="">2022-01-01</option>
                                    </select>
                                  </span>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </li>
                        <!---->
                        <li>
                          <div class="back package">
                            <div class="info">
                              <span class="kind"><em class="iLocSet ivy">아이비</em></span>
                              <strong class="tit">그린키위반(한국교육사,서양교육사)</strong>
                            </div>
                            <span class="price"><del>193,000</del><strong>562,000<i>원</i></strong></span>
                            <div class="choice">
                              <dl class="startDay">
                                <dt>개강일</dt>
                                <dd>
                                  <span class="selectSet">
                                    <select name="" id="" disabled>
                                      <option value="">2022-01-01</option>
                                    </select>
                                  </span>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </li>
                        <!---->
                        <li>
                          <div class="back package">
                            <div class="info">
                              <span class="kind"><em class="iLocSet ivy">아이비</em></span>
                              <strong class="tit">그린키위반(한국교육사,서양교육사)</strong>
                            </div>
                            <span class="price"><del>193,000</del><strong>344,000<i>원</i></strong></span>
                            <div class="choice">
                              <dl class="startDay">
                                <dt>개강일</dt>
                                <dd>
                                  <span class="selectSet">
                                    <select name="" id="" disabled>
                                      <option value="">2022-01-01</option>
                                    </select>
                                  </span>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </li>
                        <!---->
                        <li>
                          <div class="back package">
                            <div class="info">
                              <span class="kind"><em class="iPro device">노트북</em></span>
                              <strong class="tit">[SAMSUNG] 울트라 플러스2</strong>
                              <span class="amount">수량 1개</span>
                            </div>
                            <span class="price"><del>193,000</del><strong>779,000<i>원</i></strong></span>
                          </div>
                        </li>
                        <!---->
                      </ul>
                    </div>
                  </li>
                  <!-- //학원 패키지 -->
                  <li>
                    <div class="back">
                      <div class="info">
                        <span class="kind"><em class="iLocSet ivy">아이비</em></span>
                        <strong class="tit">그린키위반(한국교육사,서양교육사)</strong>
                      </div>
                      <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong></span>
                      <div class="choice">
                        <dl class="startDay">
                          <dt>수강시작일</dt>
                          <dd>
                            <span class="selectSet">
                              <select name="" id="">
                                <option value="">2021-03-03</option>
                              </select>
                            </span>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <!---->
                  <li>
                    <div class="back">
                      <div class="info">
                        <span class="kind"><em class="iPro book">교재</em></span>
                        <strong class="tit">그린키위 교육학 (그린편 상권) <em class="inComeDed">소득공제</em></strong>
                        <span class="amount">수량 1권</span>
                      </div>
                      <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong></span>
                      <div class="choice">
                        <dl>
                          <dt>쿠폰선택</dt>
                          <dd>
                            <button class="btnCoupon" @click="popupTrigger2 = true, scrollHiden($event)">패키지 강좌 구매 시 50,000원 할인</button>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <!---->
                  <li>
                    <div class="back">
                      <div class="info">
                        <span class="kind"><em class="iPro device">노트북</em></span>
                        <strong class="tit">[SAMSUNG] 울트라 플러스2</strong>
                        <span class="amount">수량 1개</span>
                      </div>
                      <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong></span>
                      <div class="choice">
                        <dl>
                          <dt>쿠폰선택</dt>
                          <dd>
                            <button class="btnCoupon" @click="popupTrigger2 = true, scrollHiden($event)">패키지 강좌 구매 시 50,000원 할인</button>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <!---->
                  <li>
                    <div class="back">
                      <div class="info">
                        <span class="kind"><em class="iPro goods">페브릭</em></span>
                        <strong class="tit">플라워 방석</strong>
                        <span class="amount">수량 1개</span>
                      </div>
                      <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong></span>
                      <div class="choice">
                        <dl>
                          <dt>쿠폰선택</dt>
                          <dd>
                            <button class="btnCoupon" @click="popupTrigger2 = true, scrollHiden($event)">패키지 강좌 구매 시 50,000원 할인</button>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <!---->
                  <li>
                    <div class="back">
                      <div class="info">
                        <span class="kind"><em class="iPro goods">페브릭</em></span>
                        <strong class="tit">플라워 방석</strong>
                        <span class="amount">수량 1개</span>
                      </div>
                      <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong></span>
                      <div class="choice">
                        <dl>
                          <dt>쿠폰선택</dt>
                          <dd>
                            <button class="btnCoupon" @click="popupTrigger2 = true, scrollHiden($event)">패키지 강좌 구매 시 50,000원 할인</button>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- //할인 적용 -->
              <span class="hrLine"></span>
              <!-- 배송정보 -->
              <div class="subTit">
                <h3>배송정보</h3>
                <span class="right-po addressMCase">
                  <button class="btnS addressChange" @click="popupTrigger = true, scrollHiden($event)">배송지 변경</button>
                </span>
              </div>
              <div class="notDeliveryAddress mb20">
                <p>
                  등록된 배송지가 없습니다. 배송지를 등록해 주세요. <button class="btnAddress" @click="popupTrigger = true, scrollHiden($event)">배송지 등록하기</button>
                </p>
              </div>
              <div class="deliveryAddress">
                <dl>
                  <dt>수령인(이름)</dt>
                  <dd>홍길동</dd>
                </dl>
                <dl>
                  <dt>연락처</dt>
                  <dd>010-0000-0000</dd>
                </dl>
                <dl>
                  <dt>배송지</dt>
                  <dd>[00000] 서울특별시 마포구 상암동 행복빌라 1동 1011호</dd>
                </dl>
                <dl class="service">
                  <dt>배송 시 요청사항</dt>
                  <dd>
                    <SsamSelect class="wFull" :value="selected" :items="[{value:'0', text:'문 앞에 놓아주세요.'},{value:'1', text:'경비실에 맡겨주세요.'},{value:'2', text:'배송 전 휴대폰으로 연락주세요.'},{value:'3', text:'직접입력'},]" @input="value => deliveryEnd(value)"/>
                  </dd>
                </dl>
              </div>
              <!-- //배송정보 -->
              <span class="hrLine"></span>
              <!-- 쿠폰 사용 합계 -->
              <div class="subTit">
                <h3>쿠폰 사용 합계</h3>
              </div>
              <div class="couponPrice">
                <label>사용 쿠폰 <strong>3</strong>장</label>
                <span class="unit"><input type="text" readonly placeholder="숫자만 입력" value="0" class="tR"><em>원</em></span>
              </div>
              <!-- //쿠폰 사용 합계 -->
              <span class="hrLine"></span>
              <!-- 결제수단 -->
              <div class="subTit">
                <h3>결제수단</h3>
              </div>
              <div class="payKind">
    						<div class="choiceSet">
    	            <span>
    	              <input type="radio" id="radioTab1" name="tadioTab" checked /><label for="radioTab1">신용카드</label>
    	            </span>
    	            <span>
    	              <input type="radio" id="radioTab2" name="tadioTab" /><label for="radioTab2">은행송금(전용계좌)</label>
    	            </span>
    						</div>
                <span class="checkSet">
                  <input type="checkbox" id="escro" />
                  <label for="escro"><i></i>에스크로 이용 시 선택</label>
                </span>
      					<div class="tax">
                  <dl>
                    <dt>
                      <strong>도서비 소득공제 신청</strong>
                    </dt>
                    <dd class="seclectRadio">
                      <span class="radioSet">
                        <input type="radio" name="radio1" />
                        <label for=""><i></i>신청하기</label>
                      </span>
                      <span class="radioSet">
                        <input type="radio" name="radio1" checked />
                        <label for=""><i></i>신청 안함</label>
                      </span>
                    </dd>
                    <dd>- 신용카드로 도서 소득공제 대상 상품과 비대상 상품을 함께 주문하는 경우 두 상품을 나누어 2회 결제가 진행 됩니다.</dd>
                  </dl>
                </div>
              </div>
              <!-- //결제수단 -->
              <span class="hrLine"></span>
              <!-- 무이자 할부 안내 -->
              <div class="subTit mb0">
                <h3>무이자 할부 안내</h3>
              </div>
              <PayCardKind />
              <!-- //무이자 할부 안내 -->
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
                  <dt>할인금액</dt>
                  <dd>
                    <span class="price"><strong>-12,500<i>원</i></strong></span>
                  </dd>
                </dl>
                <dl>
                  <dt>쿠폰할인</dt>
                  <dd>
                    <span class="price"><strong>-12,500<i>원</i></strong></span>
                  </dd>
                </dl>
                <dl>
                  <dt>배송비</dt>
                  <dd>
                    <span class="price"><strong>2,712,000<i>원</i></strong></span>
                  </dd>
                </dl>
                <dl class="last">
                  <dt>결제 금액 합계</dt>
                  <dd>
                    <span class="price"><strong>1,542,000<i>원</i></strong></span>
                  </dd>
                </dl>
              </div>
              <div class="agree">
                <button @click="popupTrigger3 = true">도서 소득공제 안내</button>
                <button @click="popupTrigger3 = true">수강시작일 안내</button>
                <button @click="popupTrigger3 = true">환불규정 및 안내사항</button>
                <span class="checkSet">
                  <input type="checkbox" id="one" />
                  <label for="one"><i></i>위 내용을 읽었으며 동의합니다.</label>
                </span>
              </div>
              <div class="btn">
                <router-link to="/mkup/mypage/payment/finish" class="btnL red">결제하기</router-link>
              </div>
            </div>
            <!-- //결제내역 -->
          </div>
          <!-- //결제정보 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- 배송지 정보 Popup -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" class="deliveryAddressPop">
      <template slot="modalheader">
        <div>
          <h1>배송지 정보</h1>
          <button @click="popupTrigger = false, scrollHiden($event)" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="boardWrite">
          <dl>
            <dt>수령인(이름)</dt>
            <dd><input type="text" /></dd>
          </dl>
          <dl>
            <dt>연락처</dt>
            <dd><input type="text" placeholder="- (하이픈)을 제외하고 입력" /></dd>
          </dl>
          <dl>
            <dt>배송 주소</dt>
            <dd>
              <div class="addressSet">
                <div @click="agencyOKTrigger = true">
                  <span v-if="!this.addressRecord">우편번호 찾기</span>
                  <p v-if="addressRecord">[00000] 서울특별시 마포구 상암동</p>
                </div>
                <input type="text" placeholder="상세주소" v-if="addressRecord" />
              </div>
            </dd>
          </dl>
        </div>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger = false, scrollHiden($event)">취소</button>
          <button class="btnL" @click="popupTrigger = false, scrollHiden($event)">확인</button>
        </div>
      </template>
    </Popup>
    <!-- 배송지 정보 Popup -->
    <!-- 우편번호 검색 예시  -->
    <Popup v-if='agencyOKTrigger' @close="agencyOKTrigger = false" class="agencyOKPop">
      <template slot="modalbody">
        <img :src="require(`@/assets/images/img_agencyOK2.png`)" alt="" @click="agencyOKTrigger = false; addressRecord = true" />
      </template>
    </Popup>
    <!-- //우편번호 검색 예시 -->
    <!-- 쿠폰 선택 Popup -->
    <Popup v-if='popupTrigger2' @close="popupTrigger2 = false" class="couponPop">
      <template slot="modalheader">
        <div>
          <!-- <h1>쿠폰 선택</h1> -->
          <h1>적용 가능한 쿠폰 3장</h1>
          <button @click="popupTrigger2 = false, scrollHiden($event)" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PaymentOrderCoupon />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger2 = false, scrollHiden($event)">취소</button>
          <button class="btnL" @click="popupTrigger2 = false, scrollHiden($event)">쿠폰적용</button>
        </div>
      </template>
    </Popup>
    <!-- 쿠폰 선택 Popup -->
    <!-- 안내 본문 팝업 Popup -->
    <Popup v-if='popupTrigger3' @close="popupTrigger3 = false" class="agreePop">
      <template slot="modalbody">
        <button @click="popupTrigger3 = false" class="modalClose">close</button>
        <!-- tab-wrap -->
        <div class="tabwrap">
          <!-- tab -->
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul class="lineTab case3">
                  <li :class="{on:currentTab===0}"><button @click="currentTab = 0">도서 소득공제 안내</button></li>
                  <li :class="{on:currentTab===1}"><button @click="currentTab = 1">수강시작일 안내</button></li>
                  <li :class="{on:currentTab===2}"><button @click="currentTab = 2">환불규정 및 안내사항</button></li>
                </ul>
              </nav>
            </div>
          </div>
          <!--// tab -->
          <div class="tabLayout">
            <div v-if="currentTab == 0" class="tabData" :key="currentTab"><OrderNoitceDeduction /></div>
            <div v-if="currentTab == 1" class="tabData"><OrderNoitceStartdate /></div>
            <div v-if="currentTab == 2" class="tabData"><OrderNoitceRefund /></div>
          </div>
        </div>
        <!-- //tab-wrap -->
      </template>
    </Popup>
    <!-- 안내 본문 팝업 Popup -->

    <!-- 모바일용 결제내역 -->
    <div id="buyFloating" :class="{on:buyFloatingTrigger == true}" v-if="this.mobile">
      <div class="buyOpnerBack"><button class="buyOpner" @click="buyFloatingTrigger = !buyFloatingTrigger">여닫기</button></div>
      <!-- 데이터 영역 -->
      <div class="buyTemplate">
        <!-- 마이페이지 결제 -->
        <div class="buySet">
          <dl>
            <dt>총 상품금액</dt>
            <dd>
              <span class="price"><strong>2,712,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>할인금액</dt>
            <dd>
              <span class="price"><strong>-12,500<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>쿠폰할인</dt>
            <dd>
              <span class="price"><strong>-12,500<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>배송비</dt>
            <dd>
              <span class="price"><strong>2,712,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl class="total">
            <dt>결제 금액 합계</dt>
            <dd>
              <span class="price"><strong>1,542,000<i>원</i></strong></span>
            </dd>
          </dl>
          <div class="agree">
            <button @click="popupTrigger3 = true">도서 소득공제 안내</button>
            <button @click="popupTrigger3 = true">수강시작일 안내</button>
            <button @click="popupTrigger3 = true">환불규정 및 안내사항</button>
            <span class="checkSet">
              <input type="checkbox" id="one" />
              <label for="one"><i></i>위 내용을 읽었으며 동의합니다.</label>
            </span>
          </div>
        </div>
        <!-- //마이페이지 결제 -->
      </div>
      <!-- //데이터 영역 -->
      <div class="buyBtnSet">
        <button class="btnL redline" @click="buyFloatingTrigger = !buyFloatingTrigger" v-if='!this.buyFloatingTrigger'>결제하기</button>
        <router-link to="/mkup/mypage/payment/finish" class="btnL red" v-if='buyFloatingTrigger'>결제하기</router-link>
      </div>
    </div>
    <!-- //모바일용 결제내역 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import OrderNoitceDeduction from '@/views/mypage/OrderNoitceDeduction.vue';
import OrderNoitceStartdate from '@/views/mypage/OrderNoitceStartdate.vue';
import OrderNoitceRefund from '@/views/mypage/OrderNoitceRefund.vue';
import PayCardKind from '@/views/mypage/PayCardKind.vue';
import PaymentOrderCoupon from '@/views/mypage/PaymentOrderCoupon.vue';

export default {
  mixins: [Mixin],
  name: 'PaymentOrder',
  components: {
    OrderNoitceDeduction,
    OrderNoitceStartdate,
    OrderNoitceRefund,
    PayCardKind,
    PaymentOrderCoupon
  },
  data() {
    return {
      selected:'',
      popupTrigger: false,
      popupTrigger2: false,
      popupTrigger3: false,
      currentTab: 0,
      buyFloatingTrigger:false,
      addressRecord: false,
      agencyOKTrigger: false,
      containToggle: true,
    }
  },
  methods: {
    deliveryEnd(value) {
      this.selected = value;
    },
  },
  mounted() {
  },
}
</script>
