<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="event">
          <div class="subTit noLine">
            <h3>이벤트</h3>
            <span class="right-po listSearch">
              <input type="text" placeholder="제목, 내용으로 검색">
              <button class="btnSearch">검색</button>
              <!-- <button class="btnSearch">검색</button> -->
              <router-link to="/mkup/bbs/event/search" class="btnSearch">검색</router-link>
            </span>
          </div>
          <!-- tab-wrap -->
          <div class="eventTabwrap">
            <!-- tab -->
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <ul class="blackLineTab case3">
                    <li :class="{on:currentTab===0}"><button @click="currentTab = 0">진행중인 이벤트</button></li>
                    <li :class="{on:currentTab===1}"><button @click="currentTab = 1">지난 이벤트</button></li>
                    <li :class="{on:currentTab===2}"><button @click="currentTab = 2">당첨자 발표</button></li>
                  </ul>
                </nav>
              </div>
            </div>
            <!--// tab -->
            <div class="tabLayout">
              <!-- 진행중인 이벤트 -->
              <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                <EventIng />
              </div>
              <!-- 지난 이벤트 -->
              <div v-if="currentTab == 1" class="tabData">
                <EventPast />
              </div>
              <!-- 당첨자 발표 -->
              <div v-if="currentTab == 2" class="tabData">
                <EventWinner />
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
import EventIng from '@/views/bbs/EventIng.vue';
import EventPast from '@/views/bbs/EventPast.vue';
import EventWinner from '@/views/bbs/EventWinner.vue';

export default {
  mixins: [Mixin],
  name: 'Event',
  data() {
    return {
      currentTab:0,
    }
  },
  methods: {
  },
  components: {
    EventIng,
    EventPast,
    EventWinner
  }
}
</script>
