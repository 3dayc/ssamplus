<template lang="html">
  <div>
		<div class="pageTit">
			<h2>단과 강좌</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link><router-link to="/mkup/lecture/singleCourse">단과 강좌</router-link><em>상세</em></span>
		</div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="singleCourseView">
          <div class="tabwrap">
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <ul>
                    <li :class="{on:viewTab===0}">
                      <button @click="viewTab = 0">강좌정보</button>
                    </li>
                    <li :class="{on:viewTab===1}">
                      <button @click="viewTab = 1">강의 컨텐츠</button>
                    </li>
                    <li :class="{on:viewTab===2}">
                      <button @click="viewTab = 2">자료실</button>
                    </li>
                    <li :class="{on:viewTab===3}">
                      <button @click="viewTab = 3">수강생 관리</button>
                    </li>
                    <li :class="{on:viewTab===4}">
                      <button @click="viewTab = 4">직강 출석 관리</button>
                    </li>
                    <li :class="{on:viewTab===5}">
                      <button @click="viewTab = 5">첨삭게시판</button>
                    </li>
                  </ul>
                  <span class="btnArea">
                    <router-link to="/mkup/lecture/singleCourse" class="btnList">목록으로</router-link>
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
                <SingleCourseViewInfo />
              </div>
              <!-- //강좌정보 -->
              <!-- 강의 컨텐츠 -->
              <div v-if="viewTab == 1" class="tabData">
                <SingleCourseViewContents />
              </div>
              <!-- //강의 컨텐츠 -->
              <!-- 자료실 -->
              <div v-if="viewTab == 2" class="tabData">
                <SingleCourseViewData />
              </div>
              <!-- //자료실 -->
              <!-- 수강생 관리 -->
              <div v-if="viewTab == 3" class="tabData">
                <SingleCourseViewUser />
              </div>
              <!-- //수강생 관리 -->
              <!-- 직강 출석 관리 -->
              <div v-if="viewTab == 4" class="tabData">
                <SingleCourseViewAttend />
              </div>
              <!-- //직강 출석 관리 -->
              <!-- 첨삭게시판 -->
              <div v-if="viewTab == 5" class="tabData">
                <SingleCourseViewCorrect />
              </div>
              <!-- //첨삭게시판 -->
            </div>
          </div>

				</div>
				<!-- //page layout -->
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
import SingleCourseViewInfo from '@/views/lecture/SingleCourseViewInfo.vue';
import SingleCourseViewContents from '@/views/lecture/SingleCourseViewContents.vue';
import SingleCourseViewData from '@/views/lecture/SingleCourseViewData.vue';
import SingleCourseViewUser from '@/views/lecture/SingleCourseViewUser.vue';
import SingleCourseViewAttend from '@/views/lecture/SingleCourseViewAttend.vue';
import SingleCourseViewCorrect from '@/views/lecture/SingleCourseViewCorrect.vue'

export default {
  mixins: [Mixin],
  name: 'SingleCourseView',
  data() {
    return {
      viewTab: 0,
      alertTrigger: false,
    }
  },
  methods: {
  },
  components: {
    SingleCourseViewInfo,
    SingleCourseViewContents,
    SingleCourseViewData,
    SingleCourseViewUser,
    SingleCourseViewAttend,
    SingleCourseViewCorrect,
  },
}
</script>
