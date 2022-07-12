<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- TopBanner -->
    <div class="topArea">
      <!-- 이미지 배너 -->
      <!-- <div class="topBannerSingle" style="background:#f8927d;">
        <img :src="require(`@/assets/images/thumbnail/@tmp_bandBanner01.png`)" alt="백퍼후기 이벤트"  v-if="!this.mobile" />
        <img :src="require(`@/assets/images/thumbnail/@m_banner05.png`)" alt="백퍼후기 이벤트"  v-else-if="this.mobile" />
      </div> -->
      <!-- //이미지 배너 -->
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
        <div class="ssammallReview">
          <!-- 백퍼 추천하는 솔직 후기 -->
          <div class="subTit">
            <h3>백퍼 추천하는 솔직 후기</h3>
          </div>
          <div class="sortSet rndCase">
            <router-link to="/mkup/ssammall/review/book">교재도서</router-link>
            <router-link to="/mkup/ssammall/review/device">학습기기</router-link>
            <router-link to="/mkup/ssammall/review/goods" class="on">굿즈</router-link>
          </div>
          <ul class="reviewBoxList bottomLine">
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/goods/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_etc01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iPro goods">패브릭</em>
                  <strong>플라워 방석</strong>
                  <p>오래 앉아서 공부하면 엉덩이 아프고 피곤하고 힘들었는데 쌤플러스에서 귀엽고 푹신한 방석...</p>
                  <span class="author">jyr******</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/goods/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_etc01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iPro goods">문구</em>
                  <strong>스프링 노트</strong>
                  <p>깔끔하고 필기감이 좋습니다. 공부하다 보면 노트가 많이 필요한데 쌤플러스에서 예쁜 노트...</p>
                  <span class="author">ssa*****</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/goods/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_etc01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iPro goods">패브릭</em>
                  <strong>쿠션 방석</strong>
                  <p>쌤플러스에서 귀엽고 푹신한 방석을 구매할 수 있게…</p>
                  <span class="author">hhe******</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/goods/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_etc01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iPro goods">패브릭</em>
                  <strong>플라워 방석</strong>
                  <p>오래 앉아서 공부하면 엉덩이 아프고 피곤하고 힘들었는데 쌤플러스에서 귀엽고 푹신한 방석...</p>
                  <span class="author">jyr******</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/goods/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_etc01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iPro goods">문구</em>
                  <strong>스프링 노트</strong>
                  <p>깔끔하고 필기감이 좋습니다. 공부하다 보면 노트가 많이 필요한데 쌤플러스에서 예쁜 노트...</p>
                  <span class="author">ssa*****</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/goods/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_etc01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iPro goods">패브릭</em>
                  <strong>쿠션 방석</strong>
                  <p>쌤플러스에서 귀엽고 푹신한 방석을 구매할 수 있게…</p>
                  <span class="author">hhe******</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/goods/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_etc01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iPro goods">패브릭</em>
                  <strong>쿠션 방석</strong>
                  <p>쌤플러스에서 귀엽고 푹신한 방석을 구매할 수 있게…</p>
                  <span class="author">hhe******</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/goods/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_etc01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iPro goods">패브릭</em>
                  <strong>플라워 방석</strong>
                  <p>오래 앉아서 공부하면 엉덩이 아프고 피곤하고 힘들었는데 쌤플러스에서 귀엽고 푹신한 방석...</p>
                  <span class="author">jyr******</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/goods/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_etc01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iPro goods">문구</em>
                  <strong>스프링 노트</strong>
                  <p>깔끔하고 필기감이 좋습니다. 공부하다 보면 노트가 많이 필요한데 쌤플러스에서 예쁜 노트...</p>
                  <span class="author">ssa*****</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/goods/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_etc01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iPro goods">패브릭</em>
                  <strong>쿠션 방석</strong>
                  <p>쌤플러스에서 귀엽고 푹신한 방석을 구매할 수 있게…</p>
                  <span class="author">hhe******</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/goods/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_etc01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iPro goods">패브릭</em>
                  <strong>플라워 방석</strong>
                  <p>오래 앉아서 공부하면 엉덩이 아프고 피곤하고 힘들었는데 쌤플러스에서 귀엽고 푹신한 방석...</p>
                  <span class="author">jyr******</span>
                </div>
              </router-link>
            </li>
            <li class="reviewBox">
              <router-link to="/mkup/ssammall/review/goods/view">
                <div class="reviewImg">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_etc01.png`)" alt=""/>
                </div>
                <div class="reviewInfo">
                  <em class="iPro goods">문구</em>
                  <strong>스프링 노트</strong>
                  <p>깔끔하고 필기감이 좋습니다. 공부하다 보면 노트가 많이 필요한데 쌤플러스에서 예쁜 노트...</p>
                  <span class="author">ssa*****</span>
                </div>
              </router-link>
            </li>
          </ul>
          <div class="paging">
            <Paginate v-if="!this.mobile" />
            <div class="moreBtnWrap" v-if="this.mobile">
              <button class="mobileMore">더보기</button>
            </div>
          </div>
          <!-- //백퍼 추천하는 솔직 후기 -->
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
  name: 'ReviewEtc',
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
<style lang="css" scoped>
#wrapBack.mDevice .ssammallReview .reviewBoxList .reviewBox:nth-child(n+11):nth-child(-n+20) {display:none;}
</style>