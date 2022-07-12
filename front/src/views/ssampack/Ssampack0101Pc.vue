<template lang="html">
<div>
  <div class="countwrap">
    <div class="img_rest">
      <img :src="require(`@/assets/images/ssampackEvent/img_rest.jpg`)" alt="" />
    </div>
    <span class="count" data-target="1500">0</span>
  </div>
  <img :src="require(`@/assets/images/ssampackEvent/cnt_0101.jpg`)" alt="" />
</div>
</template>

<script>
import Mixin from "@/plugins/mixins/Mixins.js";

export default {
  mixins: [Mixin],
  name: "Ssampack0101Pc",
  methods: {
    incCounter: function () {
      const counters = document.querySelectorAll(".count")[0];
      if (counters.innerText != 0) {
        return;
      }
      let count = 0;
      const target = +counters.getAttribute("data-target");
      const increment = target / 500;
      let updateCounter = setInterval(function () {
        if (count == target) {
          clearInterval(updateCounter);
          return false;
        }
        count += 1 + increment;
        counters.innerHTML = new Intl.NumberFormat().format(count);
      }, 20);
    },
    // 쌤팩 페이지 스크롤 해당위치에 갈시에 카운트 효과
    countScrollEvent: (window.onscroll = function () {
      // 스크롤 후의 탑
      const scrollValue = document.documentElement.scrollTop;
      const counters = document.querySelectorAll(".count")[0];
      if (counters == undefined) {
        return;
      }
      if (scrollValue > 400 && counters.innerText == 0) {
        this.currentScrollValue = scrollValue;
        let count = 0;
        const target = +counters.getAttribute("data-target");
        const increment = target / 500;
        let updateCounter = setInterval(function () {
          if (count == target) {
            clearInterval(updateCounter);
            return false;
          }
          count += 1 + increment;
          counters.innerHTML = new Intl.NumberFormat().format(count);
        }, 1);
      } else {
        this.currentScrollValue = scrollValue;
      }
    }),
  },
};
</script>
