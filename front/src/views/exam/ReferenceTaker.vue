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
        <div class="referenceTaker">
          <div class="subTit noLine">
            <h3>수험 자료실</h3>
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
                    <li :class="{on:currentTab===0}"><button @click="currentTab = 0">전체</button></li>
                    <li :class="{on:currentTab===1}"><button @click="currentTab = 1">1차</button></li>
                    <li :class="{on:currentTab===2}"><button @click="currentTab = 2">2차</button></li>
                  </ul>
                </nav>
              </div>
            </div>
            <!--// tab -->
            <div class="tabLayout">
              <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                <ReferenceTakerTotal />
              </div>
              <div v-if="currentTab == 1" class="tabData">
                <ReferenceTakerFirst />
              </div>
              <div v-if="currentTab == 2" class="tabData">
                <ReferenceTakerSecond />
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
import ReferenceTakerTotal from '@/views/exam/ReferenceTakerTotal.vue';
import ReferenceTakerFirst from '@/views/exam/ReferenceTakerFirst.vue';
import ReferenceTakerSecond from '@/views/exam/ReferenceTakerSecond.vue';

export default {
  mixins: [Mixin],
  name: 'ReferenceTaker',
  components: {
    ReferenceTakerTotal,
    ReferenceTakerFirst,
    ReferenceTakerSecond,
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
