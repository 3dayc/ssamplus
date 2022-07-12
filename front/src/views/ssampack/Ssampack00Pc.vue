<template lang="html">
  <div>
    <div id="float_quick" class="float_quickconsulting">
      <button>
        <img :src="require(`@/assets/images/ssampackEvent/scroll_banner_150215.png`)" />
      </button>
    </div>
    <div class="cnt_1">
      <div class="centerBox">
        <img :src="require(`@/assets/images/ssampackEvent/img_cnt_01.jpg`)" alt="단기 합격, 꿈이 아닌 현실로 만드는 희소/쌤플러스" />
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from "@/plugins/mixins/Mixins.js";

export default {
  mixins: [Mixin],
  name: "Ssampack00Pc",
};
</script>
