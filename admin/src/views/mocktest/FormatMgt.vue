<template lang="html">
  <div>
    <div class="pageTit">
      <h2>모의고사 포맷 관리</h2>
      <span><router-link to="/mkup/mocktest/multiTest">모의고사 관리</router-link><em>모의고사 포맷 관리</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="formatMgt"><!-- class 없어도 유지 -->
        <!-- tab-wrap -->
        <div class="tabwrap">
          <!-- tab -->
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:formatTab===0}"><button @click="formatTab = 0">시험일정</button></li>
                  <li :class="{on:formatTab===1}"><button @click="formatTab = 1">안내방송</button></li>
                  <li :class="{on:formatTab===2}"><button @click="formatTab = 2">전광판</button></li>
                  <li :class="{on:formatTab===3}"><button @click="formatTab = 3">수험번호 규칙</button></li>
                </ul>
              </nav>
            </div>
            <span class="btnArea">
              <button class="btnM">저장</button>
            </span>
          </div>
          <!--// tab -->
          <div class="tabLayout">
            <div v-if="formatTab == 0" class="tabData">
              <FormatMgtSchedule />
            </div>
            <div v-if="formatTab == 1" class="tabData">
              <FormatMgtAnnounce />
            </div>
            <div v-if="formatTab == 2" class="tabData">
              <FormatMgtEsign />
            </div>
            <div v-if="formatTab == 3" class="tabData">
              <FormatMgtRule />
            </div>
          </div>
        </div>
        <!-- //tab-wrap -->
      </div>
      <!-- //page layout -->
    </article>
    </div>

    <!-- Popup -->
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import FormatMgtSchedule from '@/views/mocktest/FormatMgtSchedule.vue'
import FormatMgtAnnounce from '@/views/mocktest/FormatMgtAnnounce.vue'
import FormatMgtEsign from '@/views/mocktest/FormatMgtEsign.vue'
import FormatMgtRule from '@/views/mocktest/FormatMgtRule.vue'

export default {
  mixins: [Mixin],
  name: 'FormatMgt',
  data() {
    return {
      formatTab: 0,
    }
  },
  methods: {
  },
	components: {
		FormatMgtSchedule,
    FormatMgtAnnounce,
    FormatMgtEsign,
		FormatMgtRule,
	},
}
</script>
