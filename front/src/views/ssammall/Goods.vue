<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- TopBanner -->
    <div class="topArea">
      <!-- 이미지 배너 -->
      <div class="topBannerSingle" style="background:#f8927d;">
        <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_bandBanner01.png`)" alt="백퍼후기 이벤트"/></router-link>
      </div>
      <!-- //이미지 배너 -->
      <!-- 검색 -->
      <div class="topSearchArea">
        <div class="frameBack">
          <input type="text" placeholder="과목명, 저자명, 교재 명으로 검색">
          <!-- <button>검색</button> -->
          <router-link to="/mkup/ssammall/search">검색</router-link>
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
        <div class="ssammallDevice">
          <!-- 놓치기 아까운 힛템 -->
          <div class="hitItem">
            <div class="subTit">
              <h3>놓치기 아까운 힛템</h3>
            </div>
            <div class="itemDetail">
              <!---->
              <span class="imgBox">
                <span class="saleIcon"><strong>10<em>%</em></strong>할인</span>
                <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device01.png`)" alt=""/></span>
              </span>
              <!---->
              <div class="infoBox">
                <span class="titBox">
                  <strong>
                    <em>SAMSUNG</em> 울트라 노트북
                  </strong>
                  <!-- <span class="dday">D-day<span>2<i>일</i></span></span> -->
                </span>
                <span class="importTxt">
                  오직 희소에서만<strong>완벽한 학습을 위한 최적의 강의 플레이어</strong>
                </span>
                <p>희소와 함께 합격을 위한 STUDY!<br/>최신 노트북 구매하고 언제 어디서든 강의 PLAY!</p>
                <span class="price">
                  <strong>1,729,000<i>원</i></strong>
                  <del>15,000원</del>
                  <em>10<b>%</b></em>
                </span>
                <router-link to="/mkup/ssammall/device/view" class="moreBtn">자세히보기</router-link>
              </div>
              <!---->
            </div>
          </div>
          <!-- //놓치기 아까운 힛템 -->
          <!-- 이런 학습기기는 어떠세요? -->
          <div class="bestDevice">
            <div class="subTit">
              <h3>이런 학습기기는 어떠세요?</h3>
            </div>
            <div class="sortSet rndCase">
              <span>
                <input type="radio" id="radioTab1" name="tadioTab" checked /><label for="radioTab1">전체</label>
              </span>
              <span>
                <input type="radio" id="radioTab2" name="tadioTab" /><label for="radioTab2">노트북</label>
              </span>
              <span>
                <input type="radio" id="radioTab3" name="tadioTab" /><label for="radioTab3">태블릿</label>
              </span>
              <span>
                <input type="radio" id="radioTab4" name="tadioTab" /><label for="radioTab4">스마트폰</label>
              </span>
              <span>
                <input type="radio" id="radioTab5" name="tadioTab" /><label for="radioTab5">기타</label>
              </span>
            </div>
            <ul class="deviceList">
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="deviceGoods">
                    <span class="goodsImg">
                      <span class="saleIcon"><strong>10<em>%</em></strong>할인</span>
                      <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device01.png`)" alt=""/></span>
                    </span>
                    <span class="goodsDetail">
                      <span class="corp">SAMSUNG</span>
                      <strong class="name">갤럭시북 이온2</strong>
                      <span class="price">
                        <strong>1,729,000<i>원</i></strong>
                        <del>15,000원</del>
                        <em>10<b>%</b></em>
                      </span>
                    </span>
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="deviceGoods">
                    <span class="goodsImg">
                      <span class="saleIcon"><strong>10<em>%</em></strong>할인</span>
                      <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device01.png`)" alt=""/></span>
                    </span>
                    <span class="goodsDetail">
                      <span class="corp">SAMSUNG</span>
                      <strong class="name">갤럭시북 이온2</strong>
                      <span class="price">
                        <strong>997,000<i>원</i></strong>
                        <del>15,000원</del>
                        <em>10<b>%</b></em>
                      </span>
                    </span>
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="deviceGoods">
                    <span class="goodsImg">
                      <span class="saleIcon"><strong>10<em>%</em></strong>할인</span>
                      <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device01.png`)" alt=""/></span>
                    </span>
                    <span class="goodsDetail">
                      <span class="corp">SAMSUNG</span>
                      <strong class="name">갤럭시 탭A 10.1(2019)</strong>
                      <span class="price">
                        <strong>997,000<i>원</i></strong>
                        <del>15,000원</del>
                        <em>10<b>%</b></em>
                      </span>
                    </span>
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="deviceGoods">
                    <span class="goodsImg">
                      <span class="saleIcon"><strong>10<em>%</em></strong>할인</span>
                      <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device01.png`)" alt=""/></span>
                    </span>
                    <span class="goodsDetail">
                      <span class="corp">SAMSUNG</span>
                      <strong class="name">갤럭시북 이온2</strong>
                      <span class="price">
                        <strong>1,729,000<i>원</i></strong>
                        <del>15,000원</del>
                        <em>10<b>%</b></em>
                      </span>
                    </span>
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="deviceGoods">
                    <span class="goodsImg">
                      <span class="saleIcon"><strong>10<em>%</em></strong>할인</span>
                      <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device01.png`)" alt=""/></span>
                    </span>
                    <span class="goodsDetail">
                      <span class="corp">SAMSUNG</span>
                      <strong class="name">갤럭시북 이온2</strong>
                      <span class="price">
                        <strong>997,000<i>원</i></strong>
                        <del>15,000원</del>
                        <em>10<b>%</b></em>
                      </span>
                    </span>
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="deviceGoods">
                    <span class="goodsImg">
                      <span class="saleIcon"><strong>10<em>%</em></strong>할인</span>
                      <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device01.png`)" alt=""/></span>
                    </span>
                    <span class="goodsDetail">
                      <span class="corp">SAMSUNG</span>
                      <strong class="name">갤럭시 탭A 10.1(2019)</strong>
                      <span class="price">
                        <strong>997,000<i>원</i></strong>
                        <del>15,000원</del>
                        <em>10<b>%</b></em>
                      </span>
                    </span>
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- //이런 학습기기는 어떠세요? -->
          <!-- 좋은 강의 더하기 좋은 기기 -->
          <div class="goodDevice">
            <div class="subTit">
              <h3>좋은 강의 더하기 좋은 기기</h3>
            </div>
            <div class="sortSet rndCase">
              <span>
                <input type="radio" id="radioTab6" name="tadioTab2" checked/><label for="radioTab6">노트북</label>
              </span>
              <span>
                <input type="radio" id="radioTab7" name="tadioTab2" /><label for="radioTab7">태블릿</label>
              </span>
            </div>
            <ul class="deviceList">
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="deviceGoods">
                    <span class="goodsImg">
                      <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device02.png`)" alt=""/></span>
                    </span>
                    <span class="goodsDetail">
                      <em class="iSbjSetMini">교육학</em>
                      <strong class="name02">김현 + 애플 아이패드</strong>
                      <span class="price">
                        <strong>1,729,000<i>원</i></strong>
                        <del>15,000원</del>
                        <em>10<b>%</b></em>
                      </span>
                    </span>
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="deviceGoods">
                    <span class="goodsImg">
                      <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device02.png`)" alt=""/></span>
                    </span>
                    <span class="goodsDetail">
                      <em class="iSbjSetMini">교육학</em>
                      <strong class="name02">권구현 + 삼성 갤럭시탭</strong>
                      <span class="price">
                        <strong>1,729,000<i>원</i></strong>
                        <del>15,000원</del>
                        <em>10<b>%</b></em>
                      </span>
                    </span>
                  </span>
                </router-link>
              </li>
              <li>
                <router-link to="/mkup/ssammall/device/view">
                  <span class="deviceGoods">
                    <span class="goodsImg">
                      <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_device02.png`)" alt=""/></span>
                    </span>
                    <span class="goodsDetail">
                      <em class="iSbjSetMini">교육학</em>
                      <strong class="name02">윤중샘 + 애플 아이패드</strong>
                      <span class="price">
                        <strong>1,729,000<i>원</i></strong>
                        <del>15,000원</del>
                        <em>10<b>%</b></em>
                      </span>
                    </span>
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- //좋은 강의 더하기 좋은 기기 -->
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
  name: 'Device',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
