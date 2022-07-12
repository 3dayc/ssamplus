<template lang="html">
  <div>
    <div class="loadingSpinner"><div class="loading"><span></span></div></div>
    <!-- container -->
    <div id="container" class="snbCase"> <!-- 서브일 때 넣어주기 : 메인, 대메뉴별 홈, Pc SNB가 있는 경우 없는 경우 class 삭제 : 작업 시 본 주석은 삭제 -->
    <section>
      <PcSnb v-if="!this.mobile" /> <!-- Pc SNB가 있는 경우 없는 경우에 따라 넣거나 빼주세요 -->
      <!-- content -->
      <div class="content">
      <article>
        <div style="height:100vh;">
          <br/><br/><br/><br/>
          로딩샘플 화면 내용입니다
          <br/><br/><br/><br/>
        </div>
      </article>
      </div>
    </section>
    </div>
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
