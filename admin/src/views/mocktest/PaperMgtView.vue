<template lang="html">
  <div>
    <div class="pageTit">
      <h2>과목별 시험지 관리</h2>
      <span><router-link to="/mkup/mocktest/multiTest">모의고사 관리</router-link><router-link to="/mkup/mocktest/paperMgt">과목별 시험지 관리</router-link><em>상세</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="paperMgtView"><!-- class 없어도 유지 -->
        <!-- tab-wrap -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:paperTab===0}"><button @click="paperTab = 0">기본정보</button></li>
                  <li :class="{on:paperTab===1}"><button @click="paperTab = 1">시험/답안지</button></li>
                  <li :class="{on:paperTab===2}"><button @click="paperTab = 2">해설강의</button></li>
                  <li :class="{on:paperTab===3}"><button @click="paperTab = 3">해설강의 자료실</button></li>
                </ul>
              </nav>
            </div>
            <span class="btnArea">
              <router-link to="/mkup/mocktest/paperMgt" class="btnList">목록으로</router-link>
              <router-link to="/mkup/mocktest/paperMgt/view" class="btnM">저장</router-link>
              <router-link to="/mkup/mocktest/paperMgt" class="btnM line ml10">삭제</router-link>
            </span>
          </div>
          <div class="tabLayout">
            <div v-if="paperTab == 0" class="tabData">
              <PaperMgtViewInfo/>
            </div>
            <div v-if="paperTab == 1" class="tabData">
              <PaperMgtViewAnswer/>
            </div>
            <div v-if="paperTab == 2" class="tabData">
              <PaperMgtViewComment/>
            </div>
            <div v-if="paperTab == 3" class="tabData">
              <PaperMgtViewCommentlib/>
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
import PaperMgtViewInfo from '@/views/mocktest/PaperMgtViewInfo.vue'
import PaperMgtViewAnswer from '@/views/mocktest/PaperMgtViewAnswer.vue'
import PaperMgtViewComment from '@/views/mocktest/PaperMgtViewComment.vue'
import PaperMgtViewCommentlib from '@/views/mocktest/PaperMgtViewCommentlib.vue'

export default {
  mixins: [Mixin],
  name: 'PaperMgtView',
  data() {
    return {
      paperTab: 0,
      date: new Date(),
      showFileChoice: true,
      showFileModify: false,
      showFileChoice2: false,
      showFileModify2: true,
      fileName: 'pdf, docx, pptx, xlsx로 첨부',
    }
  },
  methods: {
    fileUpload(event) {
      this.fileName = event.target.value;
    },
    uploadMulty(event) {
      this.multyFuleName = event.target.value;
      this.showFileChoice = false;
      this.showFileModify = true;
    }, // 파일 업로드2
  },
	components: {
    PaperMgtViewInfo,
    PaperMgtViewAnswer,
    PaperMgtViewComment,
    PaperMgtViewCommentlib,

	},
}
</script>
