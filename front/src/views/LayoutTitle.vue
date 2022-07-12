<template lang="html">
  <div>
    <!-- container -->
    <div id="container" class="snbCase"> <!-- 서브일 때 넣어주기 : 메인, 대메뉴별 홈, Pc SNB가 있는 경우 없는 경우 class 삭제 : 작업 시 본 주석은 삭제 -->
    <section>
      <PcSnb v-if="!this.mobile" /> <!-- Pc SNB가 있는 경우 없는 경우에 따라 넣거나 빼주세요 -->
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div> <!-- class는 반드시 넣어주기 : 작업 시 본 주석은 삭제 -->
          <div class="subTit">
            <h3>화면 타이틀 기본</h3>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit noLine">
            <h3>화면 타이틀 기본 하단라인이 없는 경우</h3>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit">
            <h3>김현 <em>선생님의 전체 교재</em></h3>
            <span class="right"><em class="count">총 3권</em></span>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit">
            <h3>공지사항</h3>
            <span class="right-po listSearch">
              <input type="text" placeholder="제목, 내용으로 검색" />
              <button class="btnSearch">검색</button>
            </span>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit">
            <h3>공지사항</h3>
            <div class="right-po">
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label">과목</option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                  <option value="">Option 3</option>
                  <option value="">Option 4</option>
                </select>
              </span>
              <span class="selectSet ml10">
                <select name="" id="">
                  <option value="no" class="label">선생님</option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                  <option value="">Option 3</option>
                  <option value="">Option 4</option>
                </select>
              </span>
              <span class="listSearch ml10">
                <input type="text" placeholder="제목, 내용으로 검색" />
                <button class="btnSearch">검색</button>
              </span>
            </div>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit">
            <h3>공지사항</h3>
            <div class="right-po">
              <multiselect 
                class="baseMultiSelect" 
                v-model="multiValue" 
                :options="optionsMulti" 
                :multiple="false" 
                :close-on-select="true" 
                :clear-on-select="false" 
                :preserve-search="true" 
                placeholder="Pick some" 
                label="name" 
                track-by="name" 
                :preselect-first="true">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
              </multiselect>
              <span class="listSearch ml10">
                <input type="text" placeholder="제목, 내용으로 검색" />
                <button class="btnSearch">검색</button>
              </span>
            </div>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit">
            <h3>공지사항</h3>
            <div class="right-po">
              <multiselect 
                class="baseMultiSelect" 
                v-model="multiValue" 
                :options="optionsMulti" 
                :multiple="false" 
                :close-on-select="true" 
                :clear-on-select="false" 
                :preserve-search="true" 
                placeholder="Pick some" 
                label="name" 
                track-by="name" 
                :preselect-first="true">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
              </multiselect>
              <multiselect 
                class="baseMultiSelect ml10" 
                v-model="multiValue2" 
                :options="optionsMulti2" 
                :multiple="false" 
                :close-on-select="true" 
                group-values="dep2" 
                group-label="dep1" 
                :group-select="false" 
                :searchable="false"
                placeholder="과목" 
                track-by="name" 
                label="name">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
              </multiselect>
            </div>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit">
            <h3>공지사항</h3>
            <span class="right-po">
              <span class="listSearch">
                <input type="text" placeholder="제목, 내용으로 검색" />
                <button class="btnSearch">검색</button>
              </span>
              <button class="btnS black ml10">글쓰기</button>
            </span>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit">
            <div class="searchCount"><em>영어교육학</em>으로 총 <em>3건</em>의 검색결과가 있습니다. 타이틀과 하단라인이 없는 경우</div>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit">
            <h3>사물함 신청</h3>
            <div class="summeryTxt">사물함은 직강 수강신청이력이 있는 월에 신청이 가능하며 <strong>오늘(혹은 신청한 월의 1일)로부터 말일까지</strong>의 월 단위로 신청합니다.</div>
            <span class="right-po">
              <a href="/mkup/mypage/payment/locker/write" class="btnS">사물함 신청</a>
            </span>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit">
            <h3>1:1 상담 예약</h3>
            <div class="summeryTxt"><em>학원상담</em>은 전문 상담사와 <em>선생님 상담</em>은 선택한 선생님과의 상담을 예약할 수 있습니다.</div>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit noLine">
            <h3>장바구니</h3>
            <div class="summeryTxt">
              <div class="grayBox">
                - 장바구니 상품은 7일 동안 보관됩니다.<br/>
                - 강좌를 취소하면 해당 교재도 같이 취소됩니다.<br/>
                - 교재는 학원 배송/온라인 배송 상품이 있으며, 배송비가 각각 부과됩니다.(일부 상품 제외)<br/>
                - 제주도 및 도서산간지역의 경우 일반 배송료 외 항공료 3,000원이 추가됩니다.
              </div>
            </div>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="subTit noTxt">
            <span class="right">
              <span class="listSearch">
                <input type="text" placeholder="제목, 내용으로 검색" />
                <button class="btnSearch">검색</button>
              </span>
              <button class="btnS black ml10">글쓰기</button>
            </span>
          </div>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div class="guideBox">
              학원강의의 경우 학원에서 교재를 구매해 주세요.
          </div><br/>
          <p class="guideBox info">
              학원강의의 경우 학원에서 교재를 구매해 주세요.
          </p>
          <div class="backBeige"><br /><br /><br /></div>
          <!---->
          <div>
            <swiper class="mySwiper" :options="swiperOption">
              <swiper-slide>Slide 1</swiper-slide>
              <swiper-slide>Slide 2</swiper-slide>
              <swiper-slide>Slide 3</swiper-slide>
              <swiper-slide>Slide 4</swiper-slide>
              <swiper-slide>Slide 5</swiper-slide>
              <swiper-slide>Slide 6</swiper-slide>
              <swiper-slide>Slide 7</swiper-slide>
              <swiper-slide>Slide 8</swiper-slide>
              <swiper-slide>Slide 9</swiper-slide>
              <div class="swiper-pagination" slot="pagination"/>
              <div class="swiper-button-prev" slot="button-prev"/>
              <div class="swiper-button-next" slot="button-next"/>
            </swiper>
          </div>
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- 모바일용 결제내역 -->
    <div id="buyFloating" :class="{on:buyFloatingTrigger == true}" v-if="this.mobile">
      <div class="buyOpnerBack"><button class="buyOpner" @click="buyFloatingTrigger = !buyFloatingTrigger">여닫기</button></div>
      <!-- 데이터 영역 -->
      <div class="buyTemplate">
        <!-- 수강신청 목록-->
        <div class="buySet">
          <dl>
            <dt>수강료</dt>
            <dd>
              <span class="price"><del>2,568,000</del><strong>2,712,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>교재비</dt>
            <dd>
              <span class="price"><del>193,000</del><strong>172,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl class="delivery">
            <dt>배송비</dt>
            <dd>
              <span class="price"><strong>9,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl class="total">
            <dt>예상 결제 금액</dt>
            <dd>
              <span class="price"><del>2,880,000</del><strong>1,542,000<i>원</i></strong></span>
            </dd>
          </dl>
        </div>
        <!-- //수강신청 목록 -->
        <!-- 수강신청 온라인 패키지 -->
        <div class="buySet" style="display:none">
          <dl>
            <dt>수강료</dt>
            <dd>
              <span class="price"><del>2,568,000</del><em>10<b>%</b></em><strong>2,712,000<i>원</i></strong></span>
            </dd>
          </dl>
          <div class="choiceArea">
            <div class="totalChoice">
              <span class="checkSet">
                <input type="checkbox" />
                <label>
                  <i></i>교재 전체선택
                  <span class="price"><del>193,000</del><strong>172,000<i>원</i></strong></span>
                </label>
              </span>
            </div>
            <div class="eachChoice">
              <span class="checkSet">
                <input type="checkbox" />
                <label>
                  <i></i>그린키위 교육학(기본1)
                  <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>172,000<i>원</i></strong></span>
                </label>
              </span>
              <span class="checkSet">
                <input type="checkbox" />
                <label>
                  <i></i>그린키위 교육학(기본2)
                  <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>172,000<i>원</i></strong></span>
                </label>
              </span>
              <span class="checkSet">
                <input type="checkbox" />
                <label>
                  <i></i>그린키위 교육학(심화1)
                  <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>172,000<i>원</i></strong></span>
                </label>
              </span>
              <span class="checkSet">
                <input type="checkbox" />
                <label>
                  <i></i>그린키위 교육학(심화2)
                  <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>172,000<i>원</i></strong></span>
                </label>
              </span>
              <span class="checkSet">
                <input type="checkbox" />
                <label>
                  <i></i>그린키위 기출문제분석
                  <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>172,000<i>원</i></strong></span>
                </label>
              </span>
            </div>
            <dl>
              <dt>교재비</dt>
              <dd>
                <span class="price"><del>193,000</del><strong>172,000<i>원</i></strong></span>
              </dd>
            </dl>
          </div>
          <dl class="delivery">
            <dt>배송비</dt>
            <dd>
              <span class="price"><strong>9,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl class="total">
            <dt>예상 결제 금액</dt>
            <dd>
              <span class="price"><del>2,880,000</del><strong>1,542,000<i>원</i></strong></span>
            </dd>
          </dl>
        </div>
        <!-- //수강신청 온라인 패키지 -->
        <!-- 수강신청 온라인 단과 -->
        <div class="buySet" style="display:none">
          <dl>
            <dt>수강료</dt>
            <dd>
              <span class="price"><del>2,568,000</del><em>10<b>%</b></em><strong>2,712,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>교재비</dt>
            <dd>
              <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>172,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl class="delivery">
            <dt>배송비</dt>
            <dd>
              <span class="price"><strong>9,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl class="total">
            <dt>예상 결제 금액</dt>
            <dd>
              <span class="price"><del>2,880,000</del><strong>1,542,000<i>원</i></strong></span>
            </dd>
          </dl>
        </div>
        <!-- //수강신청 온라인 단과  -->
        <!-- 수강신청 오프라인 -->
        <div class="buySet" style="display:none;">
          <dl>
            <dt>수강료</dt>
            <dd>
              <span class="price"><del>2,568,000</del><em>10<b>%</b></em><strong>2,712,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>교재비</dt>
            <dd>
              <span class="price"><strong>0<i>원</i></strong></span>
            </dd>
          </dl>
          <dl class="delivery">
            <dt>배송비</dt>
            <dd>
              <span class="price"><strong>0<i>원</i></strong></span>
            </dd>
          </dl>
          <dl class="total">
            <dt>예상 결제 금액</dt>
            <dd>
              <span class="price"><del>2,880,000</del><strong>1,542,000<i>원</i></strong></span>
            </dd>
          </dl>
        </div>
        <!-- //수강신청 오프라인  -->
        <!-- 쌤 Mall 도서  -->
        <div class="buySet" style="display:none;">
          <dl>
            <dt>주문수량</dt>
            <dd>
              <span class="countBox">
                <button class="minus">-</button>
                <span class="count">1</span>
                <button class="plus">+</button>
              </span>
            </dd>
          </dl>
          <dl>
            <dt>정가</dt>
            <dd>
              <span class="price"><strong>86,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>판매가</dt>
            <dd>
              <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>2,712,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>배송비</dt>
            <dd><span class="price"><strong>2,500<i>원</i></strong></span><button @click="popupTrigger04 = true">?</button></dd>
          </dl>
          <dl class="total">
            <dt>총 결제 금액</dt>
            <dd>
              <span class="price"><strong>1,542,000<i>원</i></strong></span>
            </dd>
          </dl>
        </div>
        <!-- //쌤 Mall 도서  -->
        <!-- 쌤 Mall 디바이스 (과목선택 없을 경우) -->
        <div class="buySet" style="display:none;">
          <dl>
            <dt>주문수량</dt>
            <dd>
              <span class="countBox">
                <button class="minus">-</button>
                <span class="count">1</span>
                <button class="plus">+</button>
              </span>
            </dd>
          </dl>
          <dl>
            <dt>정가</dt>
            <dd><span class="price"><strong>2,712,000<i>원</i></strong></span></dd>
          </dl>
          <dl>
            <dt>판매가</dt>
            <dd>
              <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>2,712,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>배송비</dt>
            <dd><span class="price"><strong>9,000<i>원</i></strong></span> <button @click="deliveryInfoPopTrigger = true">?</button></dd>
          </dl>
          <dl class="total">
            <dt>총 결제 금액</dt>
            <dd>
              <span class="price"><strong>1,542,000<i>원</i></strong></span>
            </dd>
          </dl>
        </div>
        <!-- //쌤 Mall 디바이스 (과목선택 없을 경우)  -->
        <!-- 쌤 Mall 디바이스 (과목선택 있을 경우)  -->
        <div class="buySet" style="display:none;">
          <dl>
            <dt>주문수량</dt>
            <dd>
              <span class="countBox">
                <button class="minus">-</button>
                <span class="count">1</span>
                <button class="plus">+</button>
              </span>
            </dd>
          </dl>
          <dl>
            <dt>판매가</dt>
            <dd>
              <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>2,712,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>기기</dt>
            <dd><span class="price"><strong>2,712,000<i>원</i></strong></span></dd>
          </dl>
          <div class="choiceArea">
            <div class="totalChoice">
              <strong class="lec">강좌 선택</strong>
            </div>
            <div class="eachChoice">
              <span class="radioSet">
                <input type="radio" name="choiceLec" />
                <label>
                  <i></i>[중등중국어/김길동] 키위 이론반
                  <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>172,000<i>원</i></strong></span>
                </label>
              </span>
              <span class="radioSet">
                <input type="radio" name="choiceLec" />
                <label>
                  <i></i>[중등수학/홍길동] 키위 이론반
                  <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>172,000<i>원</i></strong></span>
                </label>
              </span>
              <span class="radioSet">
                <input type="radio" name="choiceLec" />
                <label>
                  <i></i>[교육학/김현] 키위 이론반
                  <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>172,000<i>원</i></strong></span>
                </label>
              </span>
            </div>
            <dl>
              <dt>수강료</dt>
              <dd>
                <span class="price"><del>193,000</del><strong>172,000<i>원</i></strong></span>
              </dd>
            </dl>
          </div>
          <!-- <div class="withLec">
            <dl>
              <dt>기기</dt>
              <dd><span class="price"><strong>2,000,000<i>원</i></strong></span></dd>
            </dl>
            <dl>
              <dt>[교육학/김현] 키위 이른 과목 제목이 나옵니다</dt>
              <dd><span class="price"><strong>1,556,000<i>원</i></strong></span></dd>
            </dl>
          </div> -->
          <dl>
            <dt>배송비</dt>
            <dd>무료 <button @click="deliveryInfoPopTrigger = true">?</button></dd>
          </dl>
          <dl class="total">
            <dt>총 결제 금액</dt>
            <dd>
              <span class="price"><strong>1,542,000<i>원</i></strong></span>
            </dd>
          </dl>
        </div>
        <!-- //쌤 Mall 디바이스 (과목선택 있을 경우)  -->
        <!-- 마이페이지 장바구니 -->
        <div class="buySet" style="display:none;">
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
        <!-- 마이페이지 결제 -->
        <div class="buySet" style="display:none;">
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
        <button class="btnL red">주문하기</button>
        <!-- <button class="btnL red">결제하기</button>
        <button class="btnL gray">입고안내문자신청</button>
        <button class="btnL red">구매하기</button>
        <span>
          <button class="btnL redline">장바구니</button>
          <button class="btnL red">즉시결제</button>
        </span> -->
      </div>
    </div>
    <!-- //모바일용 결제내역 -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'Layout',
  components: {
  },
  data() {
    return {
      buyFloatingTrigger:false,
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
      },
      swiperOption01: {
        loop:true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
      date: '',
      range: {
        start: new Date(),
        end: new Date(),
      },
      multiValue: null,
      multiValue2: null,
      optionsMulti: [
        { name: '교육학',},
        { name: '유아',},
        { name: '국어',},
        { name: '영어',},
        { name: '중국어',},
        { name: '특수',},
      ],
      optionsMulti2: [
        {
          dep1: '교육학',
          dep2: [
            { name: '교육학', category: 'subject01' },
          ]
        },
        {
          dep1: '논술·면접',
          dep2: [
            { name: '면접', category: 'subject02' },
            { name: '논술', category: 'subject02' },
          ]
        },
        {
          dep1: '유아',
          dep2: [
            { name: '유아', category: 'subject03' },
          ]
        },
        {
          dep1: '초등',
          dep2: [
            { name: '초등', category: 'subject04' },
          ]
        },
        {
          dep1: '중등',
          dep2: [
            { name: '국어', category: 'subject05' },
            { name: '영어', category: 'subject05' },
            { name: '수학교육론', category: 'subject05' },
          ]
        }
      ],
      value: null,
      options: ['Vue.js', 'Rails', 'Sinatra', 'Laravel', 'Phoenix'],
    }
  },
  methods: {
  },
  mounted() {
  },
}
</script>

<style lang="css" scoped>

</style>
