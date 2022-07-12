<template lang="html">
  <div>
    <TeacherTemplate>
      <template slot="mTeacherName">김용호 선생님</template>
      <template slot="teacherName">
        <div class="sbjPys">
          <h2><span>체육</span>김용호 선생님</h2>
          <button @click="ssamHistoryPop = true">약력/저서</button>
        </div>
      </template>
      <template slot="teacherSlogan">
        <div class="welcome">
          <strong><span>체육</span>김용호 선생님</strong>
          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Pys02_txt.png`)" alt="" class="txtCut" />
          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Pys02.png`)" alt="" class="ssamCut" />
        </div>
      </template>
      <template slot="teacherMobileGoListBg">
        <span class="sbjPys"></span>
      </template>
      <template slot="teacherMobileSlogan">
        <div class="welcome sbjPys">
          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Pys02_txt.png`)" alt="" class="txtCut" />
          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Pys02.png`)" alt="" class="ssamCut" />
          <span>체육<em><strong>김용호</strong> 선생님</em></span>
          <button @click="ssamHistoryPop = true">약력/저서</button>
        </div>
      </template>
      <template slot="ssamTabName"><strong>김용호</strong></template>
      <template slot="ssamTabBg"><span class="sbjPys"></span></template>
    </TeacherTemplate>
    <!-- 약력/저서 Popup -->
    <Popup v-if='ssamHistoryPop' @close="ssamHistoryPop = false" class="large ssamHistoryPop">
      <template slot="modalheader">
        <div><h1>약력/저서</h1></div>
        <button @click="ssamHistoryPop = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <div>
          <dl>
            <dt>약력</dt>
            <dd>
              <!--관리자에 등록된 그대로 표기-->
              · 숙명여자대학교 교육학과, 숙명여자대학교 대학원 교육학과 졸업<br/>
              · 교육학 학사, 교육학 석사, 교육학 박사 학위 취득<br/>
              · 숙명여대, 서울보건대, 고려대, 세종대, 명지대, 한국체육대학, 한남대, 목원대 등<br/>
              · 다수 대학에서 교육학 및 교직과목 강의<br/>
              · 前 을지대학 교직과 교수<br/>
              · 前 아모르임용고시학원 교육학 전임교수<br/>
              · 前 숙명여대 교육대학원 강사<br/>
              · 現 교원임용 희소고시학원 교육학 전임교수<br/>
              · 논문 석사학위논문 : 통신인 문화와 그 교육적 의미의 연구<br/>
              · 박사학위논문 : 청소년 문제 담론을 통한 주체형성 과정에 관한 연구
            </dd>
          </dl>
          <dl>
            <dt>저서</dt>
            <dd>
              <span>키위 교육학 골드편 상권</span>
              <span>키위 교육학 그린편 상권</span>
            </dd>
          </dl>
        </div>
      </template>
    </Popup>
    <!-- //약력/저서 Popup -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import TeacherTemplate from '@/views/lecture/TeacherTemplate.vue';


export default {
  mixins: [Mixin],
  name: 'LectureMjedu01',
  components: {
    TeacherTemplate
  },
  data() {
    return {
      ssamHistoryPop:false
    }
  },
  methods: {
  },
  mounted() {
  },
  destroyed() {
  },
}
</script>
