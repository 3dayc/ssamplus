<template lang="html">
  <div>
		<div class="pageTit">
			<h2>패키지 강좌</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link><router-link to="/mkup/lecture/packageCourse">패키지 강좌</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="packageCourseView">
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:viewTab===0}">
                    <button @click="viewTab = 0">강좌정보</button>
                  </li>
                  <li :class="{on:viewTab===1}">
                    <button @click="viewTab = 1">프리미엄 혜택</button>
                  </li>
                  <li :class="{on:viewTab===2}">
                    <button @click="viewTab = 2">수강생 관리</button>
                  </li>
                </ul>
                <span class="btnArea">
                  <router-link to="/mkup/lecture/packageCourse" class="btnList">목록으로</router-link>
                  <button class="btnM green">저장</button>
                  <button class="btnM line" @click="alertTrigger = true">삭제</button>
                </span>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 강좌정보 -->
            <div v-if="viewTab == 0" class="tabData">
              <PackageCoursePremiumPlusInfo />
            </div>
            <!-- //강좌정보 -->
            <!-- 프리미엄 혜택 -->
            <div v-if="viewTab == 1" class="tabData">
              <PackageCoursePremiumPlusMgt />
            </div>
            <!-- //프리미엄 혜택 -->
            <!-- 수강생 관리 -->
            <div v-if="viewTab == 2" class="tabData">
              <PackageCoursePremiumPlusStudent />
            </div>
            <!-- //수강생 관리 -->
          </div>
        </div>
      </div>
    </article>
    </div>

    <!-- Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
        해당 강좌를 삭제하시겠습니까?
      </template>
      <template slot="modalfooter">
        <div>
          <button class="btnM green" @click="alertTrigger = false">예</button>
          <button class="btnM" @click="alertTrigger = false">아니오</button>
        </div>
      </template>
    </Alert>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import PackageCoursePremiumPlusInfo from '@/views/lecture/PackageCoursePremiumPlusInfo.vue';
import PackageCoursePremiumPlusMgt from '@/views/lecture/PackageCoursePremiumPlusMgt.vue';
import PackageCoursePremiumPlusStudent from '@/views/lecture/PackageCoursePremiumPlusStudent.vue';

export default {
  mixins: [Mixin],
  name: 'PackageCoursePremiumPlus',
  data() {
    return {
      viewTab: 0,
      alertTrigger: false,
    }
  },
  methods: {
  },
  components: {
    PackageCoursePremiumPlusInfo,
    PackageCoursePremiumPlusMgt,
    PackageCoursePremiumPlusStudent,
  }
}
</script>
