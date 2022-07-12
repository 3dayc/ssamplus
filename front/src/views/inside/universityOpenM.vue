<template lang="html">
  <div>
    <div class="university01 bothArrows">
      <swiper :options="swiperOption03">
        <swiper-slide>
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_inside_university03.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_inside_university01.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_inside_university02.png`)" alt="" /></router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'universityOpenM',
  components: {
  },
  data() {
    return {
      swiperOption03: {
        slidesPerView: "auto",
        centeredSlides: true,
        loop:true,
        spaceBetween: 13,
        speed: 1500,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false
        },
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
