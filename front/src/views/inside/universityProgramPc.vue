<template lang="html">
  <div>
    <div class="university01 bothArrows">
      <swiper :options="swiperOption03">
        <swiper-slide>
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_inside_university01.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_inside_university02.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_inside_university03.png`)" alt="" /></router-link>
        </swiper-slide>
      </swiper>
      <div class="mbPage">
        <span class="swiper-button-prev" slot="button-prev"/>
        <span class="swiper-button-next" slot="button-next"/>
      </div>
    </div>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'universityProgramPc',
  components: {
  },
  data() {
    return {
      swiperOption03: {
        slidesPerView: 3,
        loop:true,
        spaceBetween: 20,
        speed: 1500,
        navigation: { nextEl: '.university01 .swiper-button-next', prevEl: '.university01 .swiper-button-prev' },
      },
    }
  },
  methods: {
  },
  mounted() {
  },
  destroyed() {
  },
}
</script>
