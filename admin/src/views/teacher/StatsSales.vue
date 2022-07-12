<template lang="html">
  <div>
    <div class="pageTit">
      <h2>판매 통계</h2>
      <span><router-link to="/mkup/teacher/statsDaily">통계</router-link><em>판매 통계</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="statsSales"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:salesTab===0}">
                    <button @click="salesTab = 0">강좌</button>
                  </li>
                  <li :class="{on:salesTab===1}">
                    <button @click="salesTab = 1">교재</button>
                  </li>
                </ul>
                <span class="right-po">
                  통계 날짜 기준: <em>2021-03-31</em>
                </span>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 강좌 -->
            <div v-if="salesTab == 0" class="tabData">
              <StatsSalesLecture />
            </div>
            <!-- //강좌 -->
            <!-- 교재 -->
            <div v-if="salesTab == 1" class="tabData">
              <StatsSalesBook />
            </div>
            <!-- //교재 -->
          </div>
        </div>

			</div>
			<!-- //page layout -->
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import StatsSalesLecture from '@/views/teacher/StatsSalesLecture.vue'
import StatsSalesBook from '@/views/teacher/StatsSalesBook.vue'

export default {
  mixins: [Mixin],
  name: 'StatsSales',
  data() {
    return {
      salesTab: 0,
    }
  },
  methods: {
  },
  components: {
    StatsSalesLecture,
    StatsSalesBook,
  },
}
</script>
