<template lang="html">
  <div>
    <div class="bothArrows scholarshipKind">
      <swiper :options="swiperOption02">
        <swiper-slide>
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_inside_scholarship.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_inside_scholarship.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_inside_scholarship.png`)" alt="" /></router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import Aos from '@/plugins/aos';

export default {
  mixins: [Mixin],
  name: 'scholarshipKindM',
  components: {
  },
  data() {
    return {
      swiperOption02: {
        slidesPerView: "auto",
        centeredSlides: true,
        loop:true,
        spaceBetween: 10,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false
        },
      }
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
