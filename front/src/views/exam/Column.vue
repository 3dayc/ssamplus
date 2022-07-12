<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="column">
          <div class="subTit">
            <h3>임용 칼럼</h3>
            <span class="listSearch right-po">
              <input type="text" placeholder="제목, 내용으로 검색" />
              <button class="btnSearch">검색</button>
            </span>
          </div>
          <div class="listControl">
            <span class="left">
              총 12개의 글
            </span>
            <span class="right">
              <span class="sortSet rndCase">
                <span>
                  <input type="radio" id="radioTab21" name="tadioTab2" /><label for="radioTab21">인기순</label>
                </span>
                <span>
                  <input type="radio" id="radioTab22" name="tadioTab2" checked /><label for="radioTab22">최신순</label>
                </span>
              </span>
              <span class="listKind">
                <span class="blogCase">
                  <input type="radio" id="radioTab31" value="radioTab31" name="tadioTab3" checked @change="onChange($event)" /><label for="radioTab31">블로그형</label>
                </span>
                <span class="cardCase">
                  <input type="radio" id="radioTab32" value="radioTab32" name="tadioTab3" @change="onChange($event)" /><label for="radioTab32">카드형</label>
                </span>
              </span>
            </span>
          </div>
          <div class="columnList" :class="{cardCase:selectTrigger===0}">
            <ul>
              <!-- Loop -->
              <li>
                <router-link to="/mkup/exam/column/view" class="txt">
                  <div class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_01.png`)" alt=""/></div>
                  <strong>쌤플러스가 정리한 연간 학습전략 가이드</strong>
                  <span>연간학습을 효과적으로 하기위해서 가장 필요한 것은 전략을 세우는 일과 효율적인 실천 방법/학습 전략을 찾는 일입니 다. 연간학습 전략이 왜 필요한지 알아보고 학습 전략수립 원칙 및 주의점에 대해 확인해 봅시다. 또한 1년 학습의 주요 키 워드와 이론,기출,문제풀이,모의고사를 공부하는 효율적인 학습방안을 찾아봅시다.</span>
                </router-link>
                <span class="tag">#임용필수체크 #학습전략</span>
                <span class="replyBox">
                  <span class="likeNum" ref="likeNum1">
                    <input type="checkbox" id="likeNum1" name="likeNum1"  @change="likeChange($event, 'likeNum1')"/><label for="likeNum1">892</label>
                  </span>
                  <span class="replyNum">12</span>
                  <i class="by"><em>2021-02-01 by</em> 쌤플러스</i>
                </span>
              </li>
              <!-- //Loop -->
              <li>
                <!-- <router-link to="/mkup/exam/column/view" class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_02.png`)" alt=""/></router-link> -->
                <router-link to="/mkup/exam/column/view" class="txt">
                  <div class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_02.png`)" alt=""/></div>
                  <strong>합격하고 싶어? 한국사능력검정시험 100% 합격가이드</strong>
                  <span>연간학습을 효과적으로 하기위해서 가장 필요한 것은 전략을 세우는 일과 효율적인 실천 방법/학습 전략을 찾는 일입니 다. 연간학습 전략이 왜 필요한지 알아보고 학습 전략수립 원칙 및 주의점에 대해 확인해 봅시다. 또한 1년 학습의 주요 키 워드와 이론,기출,문제풀이,모의고사를 공부하는 효율적인 학습방안을 찾아봅시다.</span>
                </router-link>
                <span class="tag">#임용필수체크 #한국사</span>
                <span class="replyBox">
                  <span class="likeNum" ref="likeNum2">
                    <input type="checkbox" id="likeNum2" name="likeNum2" checked @change="likeChange($event, 'likeNum2')"/><label for="likeNum2">892</label>
                  </span>
                  <span class="replyNum">12</span>
                  <i class="by"><em>2021-02-01 by</em> 쌤플러스</i>
                </span>
              </li>
              <li>
                <!-- <router-link to="/mkup/exam/column/view" class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_03.png`)" alt=""/></router-link> -->
                <router-link to="/mkup/exam/column/view" class="txt">
                  <div class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_02.png`)" alt=""/></div>
                  <strong>시험에 관한 모든것! 지금 확인해보세요!</strong>
                  <span>연간학습을 효과적으로 하기위해서 가장 필요한 것은 전략을 세우는 일과 효율적인 실천 방법/학습 전략을 찾는 일입니 다. 연간학습 전략이 왜 필요한지 알아보고 학습 전략수립 원칙 및 주의점에 대해 확인해 봅시다. 또한 1년 학습의 주요 키 워드와 이론,기출,문제풀이,모의고사를 공부하는 효율적인 학습방안을 찾아봅시다.</span>
                </router-link>
                <span class="tag">#임용필수체크 #교육학논술</span>
                <span class="replyBox">
                  <span class="likeNum" ref="likeNum3">
                    <input type="checkbox" id="likeNum3" name="likeNum3"  @change="likeChange($event, 'likeNum3')"/><label for="likeNum3">892</label>
                  </span>
                  <span class="replyNum">12</span>
                  <i class="by"><em>2021-02-01 by</em> 쌤플러스</i>
                </span>
              </li>
              <li>
                <!-- <router-link to="/mkup/exam/column/view" class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_04.png`)" alt=""/></router-link> -->
                <router-link to="/mkup/exam/column/view" class="txt">
                  <div class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_04.png`)" alt=""/></div>
                  <strong>이제는 2차 시험! 대비법은 쌤플러스가 다 준비했습니다.</strong>
                  <span>연간학습을 효과적으로 하기위해서 가장 필요한 것은 전략을 세우는 일과 효율적인 실천 방법/학습 전략을 찾는 일입니 다. 연간학습 전략이 왜 필요한지 알아보고 학습 전략수립 원칙 및 주의점에 대해 확인해 봅시다. 또한 1년 학습의 주요 키 워드와 이론,기출,문제풀이,모의고사를 공부하는 효율적인 학습방안을 찾아봅시다.</span>
                </router-link>
                <span class="tag">#임용필수체크 #2차시험 #반전</span>
                <span class="replyBox">
                  <span class="likeNum" ref="likeNum4">
                    <input type="checkbox" id="likeNum4" name="likeNum4"  @change="likeChange($event, 'likeNum4')"/><label for="likeNum4">892</label>
                  </span>
                  <span class="replyNum">12</span>
                  <i class="by"><em>2021-02-01 by</em> 쌤플러스</i>
                </span>
              </li>
              <li>
                <!-- <router-link to="/mkup/exam/column/view" class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_05.png`)" alt=""/></router-link> -->
                <router-link to="/mkup/exam/column/view" class="txt">
                  <div class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_05.png`)" alt=""/></div>
                  <strong>전공별 참고도서 확인해보세요.</strong>
                  <span>연간학습을 효과적으로 하기위해서 가장 필요한 것은 전략을 세우는 일과 효율적인 실천 방법/학습 전략을 찾는 일입니 다. 연간학습 전략이 왜 필요한지 알아보고 학습 전략수립 원칙 및 주의점에 대해 확인해 봅시다. 또한 1년 학습의 주요 키 워드와 이론,기출,문제풀이,모의고사를 공부하는 효율적인 학습방안을 찾아봅시다.</span>
                </router-link>
                <span class="tag">#임용필수체크 #참고도서</span>
                <span class="replyBox">
                  <span class="likeNum" ref="likeNum5">
                    <input type="checkbox" id="likeNum5" name="likeNum5"  @change="likeChange($event, 'likeNum5')"/><label for="likeNum5">892</label>
                  </span>
                  <span class="replyNum">12</span>
                  <i class="by"><em>2021-02-01 by</em> 쌤플러스</i>
                </span>
              </li>
              <li>
                <!-- <router-link to="/mkup/exam/column/view" class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_06.png`)" alt=""/></router-link> -->
                <router-link to="/mkup/exam/column/view" class="txt">
                  <div class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_05.png`)" alt=""/></div>
                  <strong>시험에 대한 모든 것! 지금 확인해보세요!</strong>
                  <span>연간학습을 효과적으로 하기위해서 가장 필요한 것은 전략을 세우는 일과 효율적인 실천 방법/학습 전략을 찾는 일입니 다. 연간학습 전략이 왜 필요한지 알아보고 학습 전략수립 원칙 및 주의점에 대해 확인해 봅시다. 또한 1년 학습의 주요 키 워드와 이론,기출,문제풀이,모의고사를 공부하는 효율적인 학습방안을 찾아봅시다.연간학습을 효과적으로 하기위해서 가장 필요한 것은 전략을 세우는 일과 효율적인 실천 방법/학습 전략을 찾는 일입니 다. 연간학습 전략이 왜 필요한지 알아보고 학습 전략수립 원칙 및 주의점에 대해 확인해 봅시다. 또한 1년 학습의 주요 키 워드와 이론,기출,문제풀이,모의고사를 공부하는 효율적인 학습방안을 찾아봅시다.</span>
                </router-link>
                <span class="tag">#For재학생</span>
                <span class="replyBox">
                  <span class="likeNum" ref="likeNum6">
                    <input type="checkbox" id="likeNum6" name="likeNum6"  @change="likeChange($event, 'likeNum6')"/><label for="likeNum6">892</label>
                  </span>
                  <span class="replyNum">12</span>
                  <i class="by"><em>2021-02-01 by</em> 쌤플러스</i>
                </span>
              </li>
              <li>
                <!-- <router-link to="/mkup/exam/column/view" class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_01.png`)" alt=""/></router-link> -->
                <router-link to="/mkup/exam/column/view" class="txt">
                  <div class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_01.png`)" alt=""/></div>
                  <strong>쌤플러스가 정리한 연간 학습전략 가이드</strong>
                  <span>연간학습을 효과적으로 하기위해서 가장 필요한 것은 전략을 세우는 일과 효율적인 실천 방법/학습 전략을 찾는 일입니 다. 연간학습 전략이 왜 필요한지 알아보고 학습 전략수립 원칙 및 주의점에 대해 확인해 봅시다. 또한 1년 학습의 주요 키 워드와 이론,기출,문제풀이,모의고사를 공부하는 효율적인 학습방안을 찾아봅시다.</span>
                </router-link>
                <span class="tag">#임용필수체크 #학습전략</span>
                <span class="replyBox">
                  <span class="likeNum" ref="likeNum7">
                    <input type="checkbox" id="likeNum7" name="likeNum7"  @change="likeChange($event, 'likeNum7')"/><label for="likeNum7">892</label>
                  </span>
                  <span class="replyNum">12</span>
                  <i class="by"><em>2021-02-01 by</em> 쌤플러스</i>
                </span>
              </li>
              <li>
                <!-- <router-link to="/mkup/exam/column/view" class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_02.png`)" alt=""/></router-link> -->
                <router-link to="/mkup/exam/column/view" class="txt">
                  <div class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_02.png`)" alt=""/></div>
                  <strong>합격하고 싶어? 한국사능력검정시험 100% 합격가이드</strong>
                  <span>연간학습을 효과적으로 하기위해서 가장 필요한 것은 전략을 세우는 일과 효율적인 실천 방법/학습 전략을 찾는 일입니 다. 연간학습 전략이 왜 필요한지 알아보고 학습 전략수립 원칙 및 주의점에 대해 확인해 봅시다. 또한 1년 학습의 주요 키 워드와 이론,기출,문제풀이,모의고사를 공부하는 효율적인 학습방안을 찾아봅시다.</span>
                </router-link>
                <span class="tag">#임용필수체크 #한국사</span>
                <span class="replyBox">
                  <span class="likeNum" ref="likeNum8">
                    <input type="checkbox" id="likeNum8" name="likeNum8" checked @change="likeChange($event, 'likeNum8')"/><label for="likeNum8">892</label>
                  </span>
                  <span class="replyNum">12</span>
                  <i class="by"><em>2021-02-01 by</em> 쌤플러스</i>
                </span>
              </li>
              <li>
                <!-- <router-link to="/mkup/exam/column/view" class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_03.png`)" alt=""/></router-link> -->
                <router-link to="/mkup/exam/column/view" class="txt">
                  <div class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_03.png`)" alt=""/></div>
                  <strong>시험에 관한 모든것! 지금 확인해보세요!</strong>
                  <span>연간학습을 효과적으로 하기위해서 가장 필요한 것은 전략을 세우는 일과 효율적인 실천 방법/학습 전략을 찾는 일입니 다. 연간학습 전략이 왜 필요한지 알아보고 학습 전략수립 원칙 및 주의점에 대해 확인해 봅시다. 또한 1년 학습의 주요 키 워드와 이론,기출,문제풀이,모의고사를 공부하는 효율적인 학습방안을 찾아봅시다.</span>
                </router-link>
                <span class="tag">#임용필수체크 #교육학논술</span>
                <span class="replyBox">
                  <span class="likeNum" ref="likeNum9">
                    <input type="checkbox" id="likeNum9" name="likeNum9"  @change="likeChange($event, 'likeNum9')"/><label for="likeNum9">892</label>
                  </span>
                  <span class="replyNum">12</span>
                  <i class="by"><em>2021-02-01 by</em> 쌤플러스</i>
                </span>
              </li>
              <li>
                <!-- <router-link to="/mkup/exam/column/view" class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_04.png`)" alt=""/></router-link> -->
                <router-link to="/mkup/exam/column/view" class="txt">
                  <div class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_04.png`)" alt=""/></div>
                  <strong>이제는 2차 시험! 대비법은 쌤플러스가 다 준비했습니다.</strong>
                  <span>연간학습을 효과적으로 하기위해서 가장 필요한 것은 전략을 세우는 일과 효율적인 실천 방법/학습 전략을 찾는 일입니 다. 연간학습 전략이 왜 필요한지 알아보고 학습 전략수립 원칙 및 주의점에 대해 확인해 봅시다. 또한 1년 학습의 주요 키 워드와 이론,기출,문제풀이,모의고사를 공부하는 효율적인 학습방안을 찾아봅시다.</span>
                </router-link>
                <span class="tag">#임용필수체크 #2차시험 #반전</span>
                <span class="replyBox">
                  <span class="likeNum" ref="likeNum10">
                    <input type="checkbox" id="likeNum10" name="likeNum10"  @change="likeChange($event, 'likeNum10')"/><label for="likeNum10">892</label>
                  </span>
                  <span class="replyNum">12</span>
                  <i class="by"><em>2021-02-01 by</em> 쌤플러스</i>
                </span>
              </li>
              <li v-show="cardCase">
                <!-- <router-link to="/mkup/exam/column/view" class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_03.png`)" alt=""/></router-link> -->
                <router-link to="/mkup/exam/column/view" class="txt">
                  <div class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_03.png`)" alt=""/></div>
                  <strong>시험에 관한 모든것! 지금 확인해보세요!</strong>
                  <span>연간학습을 효과적으로 하기위해서 가장 필요한 것은 전략을 세우는 일과 효율적인 실천 방법/학습 전략을 찾는 일입니 다. 연간학습 전략이 왜 필요한지 알아보고 학습 전략수립 원칙 및 주의점에 대해 확인해 봅시다. 또한 1년 학습의 주요 키 워드와 이론,기출,문제풀이,모의고사를 공부하는 효율적인 학습방안을 찾아봅시다.</span>
                </router-link>
                <span class="tag">#임용필수체크 #교육학논술</span>
                <span class="replyBox">
                  <span class="likeNum" ref="likeNum11">
                    <input type="checkbox" id="likeNum11" name="likeNum11"  @change="likeChange($event, 'likeNum11')"/><label for="likeNum11">892</label>
                  </span>
                  <span class="replyNum">12</span>
                  <i class="by"><em>2021-02-01 by</em> 쌤플러스</i>
                </span>
              </li>
              <li v-show="cardCase">
                <!-- <router-link to="/mkup/exam/column/view" class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_04.png`)" alt=""/></router-link> -->
                <router-link to="/mkup/exam/column/view" class="txt">
                  <div class="thumbnail"><img :src="require(`@/assets/images/thumbnail/@tmp_column_04.png`)" alt=""/></div>
                  <strong>이제는 2차 시험! 대비법은 쌤플러스가 다 준비했습니다.</strong>
                  <span>연간학습을 효과적으로 하기위해서 가장 필요한 것은 전략을 세우는 일과 효율적인 실천 방법/학습 전략을 찾는 일입니 다. 연간학습 전략이 왜 필요한지 알아보고 학습 전략수립 원칙 및 주의점에 대해 확인해 봅시다. 또한 1년 학습의 주요 키 워드와 이론,기출,문제풀이,모의고사를 공부하는 효율적인 학습방안을 찾아봅시다.</span>
                </router-link>
                <span class="tag">#임용필수체크 #2차시험 #반전</span>
                <span class="replyBox">
                  <span class="likeNum" ref="likeNum12">
                    <input type="checkbox" id="likeNum12" name="likeNum12"  @change="likeChange($event, 'likeNum12')"/><label for="likeNum12">892</label>
                  </span>
                  <span class="replyNum">12</span>
                  <i class="by"><em>2021-02-01 by</em> 쌤플러스</i>
                </span>
              </li>
              <!-- <li class="noList">게시글이 없습니다.</li> 게시글이 없을 경우 -->
            </ul>
          </div>
          <div class="paging">
            <Paginate v-if="!this.mobile" />
            <div class="moreBtnWrap" v-if="this.mobile">
              <button class="mobileMore">더보기</button>
            </div>
          </div>
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'Column',
  components: {
  },
  data() {
    return {
      selectTrigger:1,
      cardCase:false,
    }
  },
  methods: {
    likeChange(event, refName) {
      var element = this.$refs[refName];
      let optionText = event.target.checked;

      if (optionText == true){
        element.className = 'likeNum on';
      } else {
        element.className = 'likeNum off';
      }
    },
    onChange(event) {
      let optionText = event.target.value;
        this.selectTrigger = 1;

      if (optionText == 'radioTab31') {
        this.selectTrigger = 1;
        this.cardCase = false;
      } else if(optionText == 'radioTab32') {
        this.selectTrigger = 0;
        this.cardCase = true;
      }
    },
  }
}
</script>
<style lang="css" scoped>
#wrapBack.mDevice .column .columnList  li:nth-child(n+11):nth-child(-n+20) {display:none;}
</style>