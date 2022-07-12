<template lang="html">
  <div class="eventPast">
    <ul class="thumbnailList">
      <li>
        <router-link to="/mkup/bbs/event/past">
          <span class="imgBox">
            <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent01.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
          </span>
          <span class="txtBox">
            <strong>3~4월 신규 강의 할인 <em class="searchTxt">이벤트</em></strong>
            <em>2021-02-09 ~ 2021-03-02</em>
          </span>
        </router-link>
      </li>
      <li>
        <router-link to="/mkup/bbs/event/past2">
          <span class="imgBox">
            <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent02.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
          </span>
          <span class="txtBox">
            <strong>N수생 재도전 <em class="searchTxt">이벤트</em></strong>
            <em>2021-02-09 ~ 2021-03-02</em>
          </span>
        </router-link>
      </li>
      <li>
        <router-link to="/mkup/main/eventview4">
          <span class="imgBox">
            <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent03.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
          </span>
          <span class="txtBox">
            <strong>[희소식 2월호] 전원증정 구독 <em class="searchTxt">이벤트</em></strong>
            <em>2021-02-09 ~ 2021-03-02</em>
          </span>
        </router-link>
      </li>
      <li>
        <router-link to="/mkup/bbs/event/past">
          <span class="imgBox">
            <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent04.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
          </span>
          <span class="txtBox">
            <strong>3~4월 신규 강의 할인 <em class="searchTxt">이벤트</em></strong>
            <em>2021-02-09 ~ 2021-03-02</em>
          </span>
        </router-link>
      </li>
      <li>
        <router-link to="/mkup/bbs/event/past2">
          <span class="imgBox">
            <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent05.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
          </span>
          <span class="txtBox">
            <strong>[희소식 2월호] 전원증정 구독 <em class="searchTxt">이벤트</em></strong>
            <em>2021-02-09 ~ 2021-03-02</em>
          </span>
        </router-link>
      </li>
      <li>
        <router-link to="/mkup/main/eventview4">
          <span class="imgBox">
            <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent06.png`)" alt="2021 류지원 영어교육학 기출문제집"/>
          </span>
          <span class="txtBox">
            <strong>N수생 재도전 <em class="searchTxt">이벤트</em></strong>
            <em>2021-02-09 ~ 2021-03-02</em>
          </span>
        </router-link>
      </li>
    </ul>
    <div class="paging">
      <Paginate v-if="!this.mobile" />
      <div class="moreBtnWrap" v-if="this.mobile">
        <button class="mobileMore">더보기</button>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'EventPastSearch',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
