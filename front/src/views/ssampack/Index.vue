<template>
  <div>
    <!-- container -->
    <div id="container" class="subCase">
      <!-- <EventIng/> -->
      <div class="ssampackWrap">
        <div class="teaser">
          <Ssampack00Pc v-if="!this.mobile" />
          <Ssampack00M v-else-if="this.mobile" />
          <div class="tabContainer" id="tabContainer">
            <!-- menutab -->
            <div class="sticky_wrap">
              <ul id="menutab" class="menutab">
                <li class="tab1" :class="{ active: tabToggle === 0 }">
                  <button @click="tabMenuScroll(), (tabToggle = 0)">2023 쌤팩</button>
                </li>
                <li class="tab2" :class="{ active: tabToggle === 1 }">
                  <button @click="tabMenuScroll(), (tabToggle = 1)">쌤팩 프리미엄</button>
                </li>
                <li class="tab3" :class="{ active: tabToggle === 2 }">
                  <button @click="tabMenuScroll(), (tabToggle = 2)">프리미엄 플러스</button>
                </li>
              </ul>
            </div>
            <!-- //menutab -->
            <div id="tab1" class="menucnt" :class="{ active: tabToggle === 0 }">
              <div class="cnt_0101">
                <div class="centerBox">
                  <Ssampack0101Pc v-if="!this.mobile" />
                  <Ssampack0101M v-else-if="this.mobile" />
                </div>
              </div>
              <div class="cnt_0102">
                <div class="centerBox">
                  <!-- 합격선배의 이유있는 선택 -->
                  <Ssampack0102Pc v-if="!this.mobile" />
                  <Ssampack0102M v-else-if="this.mobile" />
                </div>
              </div>
              <div class="cnt_0103">
                <Ssampack0103Pc v-if="!this.mobile" />
              </div>
              <div class="cnt_0104">
                <div class="centerBox">
                  <Ssampack0104Pc v-if="!this.mobile" />
                  <Ssampack0104M v-else-if="this.mobile" />
                </div>
              </div>
              <div class="cnt_0105">
                <div class="centerBox">
                  <Ssampack0105Pc v-if="!this.mobile" />
                  <Ssampack0105M v-else-if="this.mobile" />
                </div>
              </div>
            </div>
            <div id="tab2" class="menucnt" :class="{ active: tabToggle === 1 }">
              <div class="cnt_0201">
                <div class="centerBox">
                  <Ssampack0201Pc v-if="!this.mobile" />
                  <Ssampack0201M v-else-if="this.mobile" />
                </div>
              </div>
              <div class="cnt_0202">
                <div class="centerBox">
                  <Ssampack0202Pc v-if="!this.mobile" />
                  <Ssampack0202M v-else-if="this.mobile" />
                </div>
              </div>
              <div class="cnt_0203">
                <div class="centerBox">
                  <Ssampack0203Pc v-if="!this.mobile" />
                  <Ssampack0203M v-else-if="this.mobile" />
                </div>
              </div>
              <div class="cnt_0204">
                <div class="centerBox">
                  <Ssampack0204Pc v-if="!this.mobile" />
                  <Ssampack0204M v-else-if="this.mobile" />
                </div>
              </div>
            </div>
            <div id="tab3" class="menucnt" :class="{ active: tabToggle === 2 }">
              <div class="cnt_0301">
                <div class="centerBox">
                  <Ssampack0301Pc v-if="!this.mobile" />
                  <Ssampack0301M v-else-if="this.mobile" />
                </div>
              </div>
              <div class="cnt_0302">
                <div class="centerBox">
                  <Ssampack0302Pc v-if="!this.mobile" />
                  <Ssampack0302M v-else-if="this.mobile" />
                </div>
              </div>
              <div class="cnt_0303">
                <div class="centerBox">
                  <Ssampack0303Pc v-if="!this.mobile" />
                  <!-- <Ssampack0303M v-else-if="this.mobile" /> -->
                </div>
              </div>
              <div class="cnt_0304">
                <div class="centerBox">
                  <Ssampack0304Pc v-if="!this.mobile" />
                  <Ssampack0304M v-else-if="this.mobile" />
                </div>
              </div>
            </div>
          </div>
          <div class="product_cont">
            <!-- 상품선택영역 -->
            <div class="product-list-wrap">
              <div class="centerBox">
                <img
                  :src="require(`@/assets/images/ssampackEvent/product-list-title.png`)"
                  alt="" v-if="!this.mobile"
                />
                <img
                  :src="require(`@/assets/images/ssampackEvent/product-list-titlem.png`)"
                  alt="" v-else-if="this.mobile"
                />
                <Ssampack00Product :tabToggle="tabToggle" />
              </div>
            </div>
            <!-- 상품선택영역 //-->
            <!-- 약관 영역 -->
            <div class="terms-wrap">
              <div class="centerBox">
                <Ssampack00Terms />
              </div>
            </div>
            <!-- 약관 영역 //-->
          </div>
        </div>
      </div>
    </div>
    <!-- //container -->
  </div>
</template>

<script>
import Mixin from "@/plugins/mixins/Mixins.js";
import Ssampack00Pc from "@/views/ssampack/Ssampack00Pc.vue";
import Ssampack00M from "@/views/ssampack/Ssampack00M.vue";
import Ssampack0101Pc from "@/views/ssampack/Ssampack0101Pc.vue";
import Ssampack0101M from "@/views/ssampack/Ssampack0101M.vue";
import Ssampack0102Pc from "@/views/ssampack/Ssampack0102Pc.vue";
import Ssampack0102M from "@/views/ssampack/Ssampack0102M.vue";
import Ssampack0103Pc from "@/views/ssampack/Ssampack0103Pc.vue";
import Ssampack0104Pc from "@/views/ssampack/Ssampack0104Pc.vue";
import Ssampack0104M from "@/views/ssampack/Ssampack0104M.vue";
import Ssampack0105Pc from "@/views/ssampack/Ssampack0105Pc.vue";
import Ssampack0105M from "@/views/ssampack/Ssampack0105M.vue";

import Ssampack0201Pc from "@/views/ssampack/Ssampack0201Pc.vue";
import Ssampack0201M from "@/views/ssampack/Ssampack0201M.vue";
import Ssampack0202Pc from "@/views/ssampack/Ssampack0202Pc.vue";
import Ssampack0202M from "@/views/ssampack/Ssampack0202M.vue";
import Ssampack0203Pc from "@/views/ssampack/Ssampack0203Pc.vue";
import Ssampack0203M from "@/views/ssampack/Ssampack0203M.vue";
import Ssampack0204Pc from "@/views/ssampack/Ssampack0204Pc.vue";
import Ssampack0204M from "@/views/ssampack/Ssampack0204M.vue";

import Ssampack0301Pc from "@/views/ssampack/Ssampack0301Pc.vue";
import Ssampack0301M from "@/views/ssampack/Ssampack0301M.vue";
import Ssampack0302Pc from "@/views/ssampack/Ssampack0302Pc.vue";
import Ssampack0302M from "@/views/ssampack/Ssampack0302M.vue";
import Ssampack0303Pc from "@/views/ssampack/Ssampack0303Pc.vue";
// import Ssampack0303M from "@/views/ssampack/Ssampack0303M.vue";
import Ssampack0304Pc from "@/views/ssampack/Ssampack0304Pc.vue";
import Ssampack0304M from "@/views/ssampack/Ssampack0304M.vue";

import Ssampack00Product from "@/views/ssampack/Ssampack00Product.vue";
import Ssampack00Terms from "@/views/ssampack/Ssampack00Terms.vue";

export default {
  mixins: [Mixin],
  name: "Ssampack",
  components: {
    Ssampack00Pc,
    Ssampack00M,
    Ssampack0101Pc,
    Ssampack0101M,
    Ssampack0102Pc,
    Ssampack0102M,
    Ssampack0103Pc,
    Ssampack0104Pc,
    Ssampack0104M,
    Ssampack0105Pc,
    Ssampack0105M,
    Ssampack0201Pc,
    Ssampack0201M,
    Ssampack0202Pc,
    Ssampack0202M,
    Ssampack0203Pc,
    Ssampack0203M,
    Ssampack0204Pc,
    Ssampack0204M,
    Ssampack0301Pc,
    Ssampack0301M,
    Ssampack0302Pc,
    Ssampack0302M,
    Ssampack0303Pc,
    // Ssampack0303M,
    Ssampack0304Pc,
    Ssampack0304M,
    Ssampack00Product,
    Ssampack00Terms,
  },
  data() {
    return {
      tabToggle: 0,
    };
  },
  methods: {
    tabMenuScroll: function () {
      var location = document.querySelector("#tabContainer").offsetTop;
      var height_header;
      if (!this.mobile) {
        height_header = document.querySelector("#pcHeader").offsetHeight;
      } else {
        height_header = document.querySelector("#mobileHeader").offsetHeight;
      }
      window.scrollTo({ top: location + height_header, behavior: "smooth" });
    },
  },
  mounted() {
    // document.addEventListener("scroll", this.scrollEvents);
  },
  destroyed() {
    // document.removeEventListener("scroll", this.scrollEvents);
  },
};
</script>
<style lang="css" scoped src="@/assets/css/swiper.min.css"></style>
