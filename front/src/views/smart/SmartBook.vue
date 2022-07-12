<template lang="html">
  <div>
    <div class="smartBook">
      <div class="subTit">
        <h3>교재</h3>
        <div>
          <p class="guideBox info">선택한 강좌의 교재구매 여부를 선택해 주세요. (복수 선택 가능)</p>
          1) 교재가 필요 없는 경우 선택해제를 해주세요.<br/>
          2) 교재는 학원 배송/온라인 배송 상품이 있으며, 배송비가 각각 부과됩니다.(일부 상품 제외)<br/>
          3) 제주도 및 도서산간지역의 경우 일반 배송료 외 항공료 3,000원이 추가됩니다.
        </div>
      </div>
      <!-- Loop : 선생님 별 Set -->
      <div class="ssamBookSet on" :class="{open:toggleTrigger01===true}">
        <!-- 쌤, 강좌 정보 -->
        <div class="ssamInfo" @click="toggleTrigger01 = !toggleTrigger01">
          <div v-if="!this.mobile">
            <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt=""/></span>
            <span class="lecTit">
              <em class="iSet">패키지</em>
              <em class="iSet">2021</em>
              <strong>연간쌤팩 베이직</strong>
              <span>김 현</span>
            </span>
            <span class="choiceBook">
              <em>그린키위 교육학 (그린편 상권), 키위잼</em>
            </span>
          </div>
          <div v-else-if="this.mobile">
            <span class="lecTit">
              <strong><em>[교육학 김현]</em> 연간쌤팩 베이직</strong>
            </span>
            <span class="choiceBook">
              <em>그린키위 교육학 (그린편 상권), 키위잼</em>
            </span>
          </div>
        </div>
        <!-- //쌤, 강좌 정보 -->
        <!-- 교재 -->
        <div class="bookInfo" v-if="toggleTrigger01 == true">
          <ul>
            <!--Loop-->
            <li class="on">
              <div class="bookBasic">
                <span class="checkSet noLabel">
                  <input type="checkbox" id="price01" checked />
                  <label for="price01"><i></i></label>
                </span>
                <em class="iSet">교재</em>
                <em class="inComeDed">소득공제</em>
                <span class="price">
                  <del>15,000원</del>
                  <em>10<b>%</b></em><br/>
                  <strong>13,500<i>원</i></strong>
                </span>
                <strong class="bookname">류지원 영어교육학 기출문제집</strong>
              </div>
              <div class="bookMore">
                <span class="imgBox"><img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/></span>
                <div>
                  <dl>
                    <dt>저자</dt>
                    <dd>김현</dd>
                  </dl>
                  <dl>
                    <dt>출판사</dt>
                    <dd>나우퍼블리셔</dd>
                  </dl>
                  <dl>
                    <dt>출간일</dt>
                    <dd>2021-02-28</dd>
                  </dl>
                </div>
              </div>
            </li>
            <!--//Loop-->
            <li>
              <div class="bookBasic">
                <span class="checkSet noLabel">
                  <input type="checkbox" id="price02" checked />
                  <label for="price02"><i></i></label>
                </span>
                <em class="iSet">교재</em>
                <em class="inComeDed">소득공제</em>
                <span class="price">
                  <del>15,000원</del>
                  <em>10<b>%</b></em><br/>
                  <strong>13,500<i>원</i></strong>
                </span>
                <strong class="bookname">류지원 영어교육학 기출문제집</strong>
              </div>
              <div class="bookMore">
                <span class="imgBox"><img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/></span>
                <div>
                  <dl>
                    <dt>저자</dt>
                    <dd>김현</dd>
                  </dl>
                  <dl>
                    <dt>출판사</dt>
                    <dd>나우퍼블리셔</dd>
                  </dl>
                  <dl>
                    <dt>출간일</dt>
                    <dd>2021-02-28</dd>
                  </dl>
                </div>
              </div>
              <p>※ 해당 교재는 강좌신청 시에만 구매할 수 있도록 제한되어 있습니다.</p>
            </li>
            <li>
              <div class="bookBasic">
                <span class="checkSet noLabel">
                  <input type="checkbox" id="price03" checked />
                  <label for="price03"><i></i></label>
                </span>
                <em class="iSet">교재</em>
                <em class="inComeDed">소득공제</em>
                <span class="price">
                  <del>15,000원</del>
                  <em>10<b>%</b></em><br/>
                  <strong>13,500<i>원</i></strong>
                </span>
                <strong class="bookname">류지원 영어교육학 기출문제집</strong>
              </div>
              <div class="bookMore">
                <span class="imgBox"><img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/></span>
                <div>
                  <dl>
                    <dt>저자</dt>
                    <dd>김현</dd>
                  </dl>
                  <dl>
                    <dt>출판사</dt>
                    <dd>나우퍼블리셔</dd>
                  </dl>
                  <dl>
                    <dt>출간일</dt>
                    <dd>2021-02-28</dd>
                  </dl>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- //교재 -->
      </div>
      <!-- //Loop : 선생님 별 Set -->
      <!-- Loop : 선생님 별 Set -->
      <div class="ssamBookSet" :class="{open:toggleTrigger02===true}">
        <!-- 쌤, 강좌 정보 -->
        <div class="ssamInfo" @click="toggleTrigger02 = !toggleTrigger02">
          <div v-if="!this.mobile">
            <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt=""/></span>
            <span class="lecTit">
              <em class="iSet">패키지</em>
              <em class="iSet">2021</em>
              <strong>연간쌤팩 베이직</strong>
              <span>김 현</span>
            </span>
            <span class="choiceBook">
              <em></em>
            </span>
          </div>
          <div v-else-if="this.mobile">
            <span class="lecTit">
              <strong><em>[교육학 김현]</em> 연간쌤팩 베이직</strong>
            </span>
            <span class="choiceBook">
              <em></em>
            </span>
          </div>
        </div>
        <!-- //쌤, 강좌 정보 -->
        <!-- 교재 -->
        <div class="bookInfo" v-if="toggleTrigger02 == true">
          <ul>
            <!--Loop-->
            <li>
              <div class="bookBasic">
                <span class="checkSet noLabel">
                  <input type="checkbox" id="price01" />
                  <label for="price01"><i></i></label>
                </span>
                <em class="iSet">교재</em>
                <em class="inComeDed">소득공제</em>
                <span class="price">
                  <del>15,000원</del>
                  <em>10<b>%</b></em><br/>
                  <strong>13,500<i>원</i></strong>
                </span>
                <strong class="bookname">류지원 영어교육학 기출문제집</strong>
              </div>
              <div class="bookMore">
                <span class="imgBox"><img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/></span>
                <div>
                  <dl>
                    <dt>저자</dt>
                    <dd>김현</dd>
                  </dl>
                  <dl>
                    <dt>출판사</dt>
                    <dd>나우퍼블리셔</dd>
                  </dl>
                  <dl>
                    <dt>출간일</dt>
                    <dd>2021-02-28</dd>
                  </dl>
                </div>
              </div>
            </li>
            <!--//Loop-->
            <li>
              <div class="bookBasic">
                <span class="checkSet noLabel">
                  <input type="checkbox" id="price02" />
                  <label for="price02"><i></i></label>
                </span>
                <em class="iSet">교재</em>
                <em class="inComeDed">소득공제</em>
                <span class="price">
                  <del>15,000원</del>
                  <em>10<b>%</b></em><br/>
                  <strong>13,500<i>원</i></strong>
                </span>
                <strong class="bookname">류지원 영어교육학 기출문제집</strong>
              </div>
              <div class="bookMore">
                <span class="imgBox"><img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/></span>
                <div>
                  <dl>
                    <dt>저자</dt>
                    <dd>김현</dd>
                  </dl>
                  <dl>
                    <dt>출판사</dt>
                    <dd>나우퍼블리셔</dd>
                  </dl>
                  <dl>
                    <dt>출간일</dt>
                    <dd>2021-02-28</dd>
                  </dl>
                </div>
              </div>
              <p>※ 해당 교재는 강좌신청 시에만 구매할 수 있도록 제한되어 있습니다.</p>
            </li>
            <li>
              <div class="bookBasic">
                <span class="checkSet noLabel">
                  <input type="checkbox" id="price03" />
                  <label for="price03"><i></i></label>
                </span>
                <em class="iSet">교재</em>
                <em class="inComeDed">소득공제</em>
                <span class="price">
                  <del>15,000원</del>
                  <em>10<b>%</b></em><br/>
                  <strong>13,500<i>원</i></strong>
                </span>
                <strong class="bookname">류지원 영어교육학 기출문제집</strong>
              </div>
              <div class="bookMore">
                <span class="imgBox"><img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/></span>
                <div>
                  <dl>
                    <dt>저자</dt>
                    <dd>김현</dd>
                  </dl>
                  <dl>
                    <dt>출판사</dt>
                    <dd>나우퍼블리셔</dd>
                  </dl>
                  <dl>
                    <dt>출간일</dt>
                    <dd>2021-02-28</dd>
                  </dl>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- //교재 -->
      </div>
      <!-- //Loop : 선생님 별 Set -->
      <!-- Loop : 선생님 별 Set -->
      <div class="ssamBookSet on" :class="{open:toggleTrigger03===true}">
        <!-- 쌤, 강좌 정보 -->
        <div class="ssamInfo" @click="toggleTrigger03 = !toggleTrigger03">
          <div v-if="!this.mobile">
            <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt=""/></span>
            <span class="lecTit">
              <em class="iSet">패키지</em>
              <em class="iSet">2021</em>
              <strong>연간쌤팩 베이직</strong>
              <span>김 현</span>
            </span>
            <span class="choiceBook">
              <em></em>
            </span>
          </div>
          <div v-else-if="this.mobile">
            <span class="lecTit">
              <strong><em>[교육학 김현]</em> 연간쌤팩 베이직</strong>
            </span>
            <span class="choiceBook">
              <em>그린키위 교육학 (그린편 상권), 키위잼</em>
            </span>
          </div>
        </div>
        <!-- //쌤, 강좌 정보 -->
        <!-- 교재 -->
        <div class="bookInfo" v-if="toggleTrigger03 == true">
          <ul>
            <!--Loop-->
            <li>
              <div class="bookBasic">
                <span class="checkSet noLabel">
                  <input type="checkbox" id="price01" />
                  <label for="price01"><i></i></label>
                </span>
                <em class="iSet">교재</em>
                <em class="inComeDed">소득공제</em>
                <span class="price">
                  <del>15,000원</del>
                  <em>10<b>%</b></em><br/>
                  <strong>13,500<i>원</i></strong>
                </span>
                <strong class="bookname">류지원 영어교육학 기출문제집</strong>
              </div>
              <div class="bookMore">
                <span class="imgBox"><img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/></span>
                <div>
                  <dl>
                    <dt>저자</dt>
                    <dd>김현</dd>
                  </dl>
                  <dl>
                    <dt>출판사</dt>
                    <dd>나우퍼블리셔</dd>
                  </dl>
                  <dl>
                    <dt>출간일</dt>
                    <dd>2021-02-28</dd>
                  </dl>
                </div>
              </div>
            </li>
            <!--//Loop-->
            <li>
              <div class="bookBasic">
                <span class="checkSet noLabel">
                  <input type="checkbox" id="price02" />
                  <label for="price02"><i></i></label>
                </span>
                <em class="iSet">교재</em>
                <em class="inComeDed">소득공제</em>
                <span class="price">
                  <del>15,000원</del>
                  <em>10<b>%</b></em><br/>
                  <strong>13,500<i>원</i></strong>
                </span>
                <strong class="bookname">류지원 영어교육학 기출문제집</strong>
              </div>
              <div class="bookMore">
                <span class="imgBox"><img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/></span>
                <div>
                  <dl>
                    <dt>저자</dt>
                    <dd>김현</dd>
                  </dl>
                  <dl>
                    <dt>출판사</dt>
                    <dd>나우퍼블리셔</dd>
                  </dl>
                  <dl>
                    <dt>출간일</dt>
                    <dd>2021-02-28</dd>
                  </dl>
                </div>
              </div>
              <p>※ 해당 교재는 강좌신청 시에만 구매할 수 있도록 제한되어 있습니다.</p>
            </li>
            <li>
              <div class="bookBasic">
                <span class="checkSet noLabel">
                  <input type="checkbox" id="price03" />
                  <label for="price03"><i></i></label>
                </span>
                <em class="iSet">교재</em>
                <em class="inComeDed">소득공제</em>
                <span class="price">
                  <del>15,000원</del>
                  <em>10<b>%</b></em><br/>
                  <strong>13,500<i>원</i></strong>
                </span>
                <strong class="bookname">류지원 영어교육학 기출문제집</strong>
              </div>
              <div class="bookMore">
                <span class="imgBox"><img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/></span>
                <div>
                  <dl>
                    <dt>저자</dt>
                    <dd>김현</dd>
                  </dl>
                  <dl>
                    <dt>출판사</dt>
                    <dd>나우퍼블리셔</dd>
                  </dl>
                  <dl>
                    <dt>출간일</dt>
                    <dd>2021-02-28</dd>
                  </dl>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- //교재 -->
      </div>
      <!-- //Loop : 선생님 별 Set -->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SmartBook',
  components: {
  },
  data() {
    return {
      currentTab: 0,
      toggleTrigger01: true,
      toggleTrigger02: false,
      toggleTrigger03: false,
    }
  },
  methods: {
  },
}
</script>
