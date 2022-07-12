<template lang="html">
  <div>
		<div class="pageTit">
			<h2>선생님 조회</h2>
			<span><router-link to="/mkup/member/userMgt">회원/선생님</router-link><router-link to="/mkup/member/teacher">선생님 관리</router-link><router-link to="/mkup/member/teacher">선생님 조회</router-link><em>상세</em></span><!-- 2021-07-14 메뉴명 변경 -->
		</div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="teacherView"><!-- class 없어도 유지 -->
          <!-- tab-wrap -->
					<div class="tabwrap">
						<!-- tab -->
						<div class="tabBack">
							<div class="tabNav">
								<nav>
									<ul>
										<li :class="{on:teacherTab===0}"><button @click="teacherTab = 0">기본 정보</button></li>
										<li :class="{on:teacherTab===1}"><button @click="teacherTab = 1">수강신청 리스트</button></li>
										<li :class="{on:teacherTab===2}"><button @click="teacherTab = 2">수강신청 홈</button></li>
									</ul>
								</nav>
							</div>
							<span class="btnArea">
								<router-link to="/mkup/member/teacher" class="btnList">목록으로</router-link>
                <button class="btnM green ml10">저장</button>
                <router-link to="/mkup/member/teacher" class="btnM line ml10">삭제</router-link>
							</span>
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="teacherTab == 0" class="tabData">
								<TeacherViewInfo />
              </div>
              <div v-if="teacherTab == 1" class="tabData">
								<TeacherViewLectureList />
              </div>
              <div v-if="teacherTab == 2" class="tabData">
								<TeacherViewLectureHome />
              </div>
						</div>
					</div>
					<!-- //tab-wrap -->
        </div>
        <!-- //page layout -->
      </article>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Mixin from '@/plugins/mixins/Mixins.js';
import TeacherViewInfo from '@/views/member/TeacherViewInfo.vue'
import TeacherViewLectureList from '@/views/member/TeacherViewLectureList.vue'
import TeacherViewLectureHome from '@/views/member/TeacherViewLectureHome.vue'

export default {
  mixins: [Mixin],
  name: 'TeacherView',
  data() {
    return {
      teacherTab:0,
    }
  },
  methods: {
  },
  components: {
    TeacherViewInfo,
    TeacherViewLectureList,
    TeacherViewLectureHome,
  }
}
</script>

<style lang="css" scoped>
</style>
