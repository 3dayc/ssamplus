<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- TopBanner -->
    <div class="topArea">
      <!-- 이미지 배너 -->
      <!-- <div class="topBannerSingle" style="background:#f8927d;">
        <router-link to="">
          <img :src="require(`@/assets/images/thumbnail/@tmp_bandBanner01.png`)" alt="백퍼후기 이벤트"  v-if="!this.mobile" />
          <img :src="require(`@/assets/images/thumbnail/@m_banner05.png`)" alt="백퍼후기 이벤트"  v-else-if="this.mobile" />
        </router-link>
      </div> --><!-- 20220317 수정 : 키위주스배너삭제 -->
      <!-- //이미지 배너 -->
      <!-- 검색 -->
      <div class="topSearchArea">
        <div :class="{listSearch:this.mobile === true, frameBack:!this.mobile === true}">
          <input type="text" placeholder="과목명, 저자명, 교재 명으로 검색">
          <!-- <button>검색</button> -->
          <router-link to="/mkup/ssammall/search" :class="{btnSearch:this.mobile === true}">검색</router-link>
        </div>
      </div>
      <!-- //검색 -->
    </div>
    <!-- //TopBanner -->
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="ssammallBook">
          <div class="subTit">
            <h3>과목별 교재도서를 확인해 보세요</h3>
            <button class="btnAllSsam" v-if="this.mobile" @click="ssamChoiceTrigger = true">선생님선택</button>
          </div>
          <ul class="bookList">
            <li>
              <router-link to="/mkup/ssammall/book/view">
                <span class="bookGoods">
                  <span class="goodsImg"><img :src="require(`@/assets/images/thumbnail/@tmp_book01.png`)" alt=""/></span>
                  <span class="goodsDetail">
                    <em class="iSbjSetMini">교육학</em>
                    <strong>8개년 교육학논술 기출 분석모범답안</strong>
                    <span class="price">
                      <strong>13,500<i>원</i></strong>
                      <del>15,000원</del>
                      <em>10<b>%</b></em>
                    </span>
                  </span>
                </span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/ssammall/book/view">
                <span class="bookGoods">
                  <span class="goodsImg"><img :src="require(`@/assets/images/thumbnail/@tmp_book06.png`)" alt=""/></span>
                  <span class="goodsDetail">
                    <em class="iSbjSetMini">교육학</em><em class="iPro my">내 강좌 교재</em>
                    <strong>2022 키위 교육학 골드편</strong>
                    <span class="price">
                      <strong>13,500<i>원</i></strong>
                    </span>
                  </span>
                </span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/ssammall/book/view">
                <span class="bookGoods">
                  <span class="goodsImg"><img :src="require(`@/assets/images/thumbnail/@tmp_book07.png`)" alt=""/></span>
                  <span class="goodsDetail">
                    <em class="iSbjSetMini">교육학</em>
                    <strong>키위 교육학 그린편 상권</strong>
                    <span class="price">
                      <strong>13,500<i>원</i></strong>
                    </span>
                  </span>
                </span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/ssammall/book/view">
                <span class="bookGoods">
                  <span class="goodsImg"><img :src="require(`@/assets/images/thumbnail/@tmp_book03.png`)" alt=""/></span>
                  <span class="goodsDetail">
                    <em class="iSbjSetMini">교육학</em>
                    <strong>키위 교육학 그린편 하권</strong>
                    <span class="price">
                      <strong>13,500<i>원</i></strong>
                      <del>15,000원</del>
                      <em>10<b>%</b></em>
                    </span>
                  </span>
                </span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/ssammall/book/view">
                <span class="bookGoods">
                  <span class="goodsImg"><img :src="require(`@/assets/images/thumbnail/@tmp_book04.png`)" alt=""/></span>
                  <span class="goodsDetail">
                    <em class="iSbjSetMini">교육학</em><em class="iPro my">내 강좌 교재</em>
                    <strong>키위 교육학 그린편 상권</strong>
                    <span class="price">
                      <strong>13,500<i>원</i></strong>
                      <del>15,000원</del>
                      <em>10<b>%</b></em>
                    </span>
                  </span>
                </span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/ssammall/book/view">
                <span class="bookGoods">
                  <span class="goodsImg"><img :src="require(`@/assets/images/thumbnail/@tmp_book05.png`)" alt=""/></span>
                  <span class="goodsDetail">
                    <em class="iSbjSetMini">교육학</em>
                    <strong>키위 교육학 그린편 하권</strong>
                    <span class="price">
                      <strong>13,500<i>원</i></strong>
                    </span>
                  </span>
                </span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/ssammall/book/view">
                <span class="bookGoods">
                  <span class="goodsImg"><img :src="require(`@/assets/images/thumbnail/@tmp_book08.png`)" alt=""/></span>
                  <span class="goodsDetail">
                    <em class="iSbjSetMini">유아</em>
                    <strong>2021 이동건 유아임용 연도별 기출문제집</strong>
                    <span class="price">
                      <strong>13,500<i>원</i></strong>
                    </span>
                  </span>
                </span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/ssammall/book/view">
                <span class="bookGoods">
                  <span class="goodsImg"><img :src="require(`@/assets/images/thumbnail/@tmp_book01.png`)" alt=""/></span>
                  <span class="goodsDetail">
                    <em class="iSbjSetMini">유아</em>
                    <strong>2022 대비 유아 이동건 누리과정 (해실이)</strong>
                    <span class="price">
                      <strong>13,500<i>원</i></strong>
                      <del>15,000원</del>
                      <em>10<b>%</b></em>
                    </span>
                  </span>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- Popup -->
    <!-- 선생님 팝업 -->
    <Popup v-if='ssamChoiceTrigger' @close="ssamChoiceTrigger = false" class="ssamChoicePop">
      <template slot="modalheader">
        <div>
          <h1>선생님 전체보기</h1>
          <button @click="ssamChoiceTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <BookSsamList />
      </template>
    </Popup>
    <!-- //선생님 팝업 -->
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import BookSsamList from '@/views/ssammall/BookSsamList.vue';

export default {
  mixins: [Mixin],
  name: 'Book',
  components: {
    BookSsamList
  },
  data() {
    return {
      ssamChoiceTrigger: false,
    }
  },
  methods: {
  }
}
</script>
