<template>
  <ul class="favoritesList">
          <li>
            <swiper :options="swiperFlex" class="swiperFavWrap">
              <swiper-slide class="swiper-slide">
                <div class="listBack">
                  <div>
                    <span class="back">
                      <router-link to="/mkup/mylec/online/my/player">
                        <span class="thum">
                          <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt="" /></span>
                        </span>
                        <span class="info">
                          <span>
                            <em>교육학 김현</em>
                            <strong>키위 기출분석반</strong>
                          </span>
                        </span>
                      </router-link>
                      <button class="btnDelete" @click="naviPopupTrigger01 = true">삭제</button>
                    </span>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <div class="listBack">
                  <div>
                    <span class="back">
                      <router-link to="/mkup/mylec/online/my/player">
                        <span class="thum">
                          <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare09.png`)" alt="" /></span>
                        </span>
                        <span class="info">
                          <span>
                            <em>수학 이정훈/안후상팀</em>
                            <strong>선대,미기+수교 이론 총정리</strong>
                          </span>
                        </span>
                      </router-link>
                      <button class="btnDelete" @click="naviPopupTrigger01 = true">삭제</button>
                    </span>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <div class="listBack">
                  <div>
                    <span class="back">
                      <router-link to="/mkup/mylec/online/my/player">
                        <span class="thum">
                          <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare09.png`)" alt="" /></span>
                        </span>
                        <span class="info">
                          <span>
                            <em>수학 이정훈/안후상팀</em>
                            <strong>선대,미기+수교 이론 총정리</strong>
                          </span>
                        </span>
                      </router-link>
                      <button class="btnDelete" @click="naviPopupTrigger01 = true">삭제</button>
                    </span>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <div class="listBack">
                  <div>
                    <span class="back">
                      <router-link to="/mkup/mylec/online/my/player">
                        <span class="thum">
                          <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare09.png`)" alt="" /></span>
                        </span>
                        <span class="info">
                          <span>
                            <em>수학 이정훈/안후상팀</em>
                            <strong>선대,미기+수교 이론 총정리</strong>
                          </span>
                        </span>
                      </router-link>
                      <button class="btnDelete" @click="naviPopupTrigger01 = true">삭제</button>
                    </span>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <div class="listBack">
                  <div>
                    <span class="back">
                      <router-link to="/mkup/mylec/online/my/player">
                        <span class="thum">
                          <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare09.png`)" alt="" /></span>
                        </span>
                        <span class="info">
                          <span>
                            <em>수학 이정훈/안후상팀</em>
                            <strong>선대,미기+수교 이론 총정리</strong>
                          </span>
                        </span>
                      </router-link>
                      <button class="btnDelete" @click="naviPopupTrigger01 = true">삭제</button>
                    </span>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <div class="listBack">
                  <div><button class="btnAdd" @click="favoritesTrigger = true">추가하기</button></div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="listBack">
              <div>
                <button @click="isLoginToggle = false">로그인 X</button><br/>
                <button @click="isLecToggle = false, fullPageEvent($event)">강의 없는 경우</button><br/>
                <button @click="isMyToggle = !isMyToggle">전공 여부</button>
              </div>
            </div>
          </li>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            swiperFlex : {
                slidesPerView : 1,
                loop:false,
                navigation: {
                nextEl : '.page .swiper-button-next',
                prevEl : '.page .swiper-button-prev'
                },
                grid: {
                rows: 2,
                },
                pagination: {
                el: ".swiper-pagination",
                type: "fraction",
                },
            },
        }
    }

}
</script>

<style>

</style>