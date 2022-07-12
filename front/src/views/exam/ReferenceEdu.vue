<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="referenceEdu">
          <div class="subTit noLine">
            <h3>교육과정 자료실</h3>
            <a href="http://ncic.re.kr/mobile.revise.board.list.do?degreeCd=RVG01&boardNo=1001" target="_blank">NICE 국가 교육과정 정보센터 바로가기</a>
            <span class="right-po listSearch">
              <input type="text" placeholder="제목, 내용으로 검색" />
              <button class="btnSearch">검색</button>
            </span>
          </div>
          <!-- tab-wrap -->
          <div class="eduTabwrap">
            <!-- tab -->
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <ul class="blackLineTab">
                    <li :class="{on:currentTab===0}"><button @click="currentTab = 0">교육학</button></li>
                    <li :class="{on:currentTab===1}"><button @click="currentTab = 1">유아·초등</button></li>
                    <li :class="{on:currentTab===2}"><button @click="currentTab = 2">중등</button></li>
                    <li :class="{on:currentTab===3}"><button @click="currentTab = 3">사회/과학</button></li>
                    <li :class="{on:currentTab===4}"><button @click="currentTab = 4">보건·특수·기타</button></li>
                    <li :class="{on:currentTab===5}"><button @click="currentTab = 5">논술·면접</button></li>
                  </ul>
                </nav>
              </div>
            </div>
            <!--// tab -->
            <div class="tabLayout">
              <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                <ReferenceEduBasic />
              </div>
              <div v-if="currentTab == 1" class="tabData">
                <ReferenceEduChild />
              </div>
              <div v-if="currentTab == 2" class="tabData">
                <ReferenceEduMiddle />
              </div>
              <div v-if="currentTab == 3" class="tabData">
                <ReferenceEduSocial />
              </div>
              <div v-if="currentTab == 4" class="tabData">
                <ReferenceEduHealth />
              </div>
              <div v-if="currentTab == 5" class="tabData">
                <ReferenceEduEssay />
              </div>
            </div>
          </div>
          <!-- //tab-wrap -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import ReferenceEduBasic from '@/views/exam/ReferenceEduBasic.vue';
import ReferenceEduChild from '@/views/exam/ReferenceEduChild.vue';
import ReferenceEduMiddle from '@/views/exam/ReferenceEduMiddle.vue';
import ReferenceEduSocial from '@/views/exam/ReferenceEduSocial.vue';
import ReferenceEduHealth from '@/views/exam/ReferenceEduHealth.vue';
import ReferenceEduEssay from '@/views/exam/ReferenceEduEssay.vue';

export default {
  mixins: [Mixin],
  name: 'ReferenceEdu',
  components: {
    ReferenceEduBasic,
    ReferenceEduChild,
    ReferenceEduMiddle,
    ReferenceEduSocial,
    ReferenceEduHealth,
    ReferenceEduEssay
  },
  data() {
    return {

      currentTab: 0
    }
  },
  methods: {
  }
}
</script>
