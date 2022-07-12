<template lang="html">
  <div>
    <div class="pageTit">
      <h2>수강중인 인원</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/indicatorAnnual">지표관리</router-link><em>수강중인 인원</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="indicatorCourse"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:iCourseTab===0}">
                    <button @click="iCourseTab = 0">서울학원</button>
                  </li>
                  <li :class="{on:iCourseTab===2}">
                    <button @click="iCourseTab = 2">온라인</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 결제인원 -->
            <div v-if="iCourseTab == 0" class="tabData">
              <IndicatorCourseSeoul />
            </div>
            <!-- //결제인원 -->
            <!-- 수강중인 인원 -->
            <div v-if="iCourseTab == 2" class="tabData">
              <IndicatorCourseOnline />
            </div>
            <!-- //수강중인 인원 -->
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
import IndicatorCourseSeoul from '@/views/statistics/IndicatorCourseSeoul.vue'
import IndicatorCourseOnline from '@/views/statistics/IndicatorCourseOnline.vue'

export default {
  mixins: [Mixin],
  name: 'IndicatorAnnual',
  data() {
    return {
      iCourseTab: 0,
    }
  },
  methods: {
  },
  components: {
    IndicatorCourseSeoul,
    IndicatorCourseOnline,
  },
}
</script>
