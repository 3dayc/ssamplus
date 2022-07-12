<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="specialEvent">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>너는 지금 쌤며든다, 선생님 이벤트</h3>
            <span class="right-po">
              <span class="selectSet">
                <select name="" id="">
                  <option value="">과목</option>
                </select>
              </span>
              <span class="selectSet ml10">
                <select name="" id="">
                  <option value="">선생님</option>
                </select>
              </span>
              <span class="listSearch">
                <input type="text" placeholder="제목, 내용으로 검색" value="이벤트">
                <!-- <button class="btnSearch">검색</button> -->
                <router-link to="/mkup/special/event/search" class="btnSearch">검색</router-link>
              </span>
            </span>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 썸네일 리스트 -->
          <ul class="thumbnailList case3">
            <li class="new"> <!-- 새글일 경우 new 클래스 추가 -->
              <router-link to="/mkup/special/event/view1">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent01.png`)" alt=""/>
                </span>
                <span class="txtBox"><strong><span>[유아]</span>교재 무료증정 <em class="searchTxt">이벤트</em></strong></span>
              </router-link>
            </li>
            <li class="new"> <!-- 새글일 경우 new 클래스 추가 -->
              <router-link to="/mkup/special/event/view2">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent02.png`)" alt=""/>
                </span>
                <span class="txtBox"><strong><span>[교육학 김현]</span>유투브 채널 댓글 <em class="searchTxt">이벤트</em></strong></span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/main/eventview3">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent03.png`)" alt=""/>
                </span>
                <span class="txtBox"><strong><span>[유아 배지윤]</span>전원증정 구독 <em class="searchTxt">이벤트</em></strong></span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/special/event/view4">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent04.png`)" alt=""/>
                </span>
                <span class="txtBox"><strong><span>[국어 송헌&김준팀]</span>3~4월 신규 강의 할인 <em class="searchTxt">이벤트</em></strong></span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/special/event/view2">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent05.png`)" alt=""/>
                </span>
                <span class="txtBox"><strong><span>[가정 문영은]</span>3~4월 신규 강의 할인 <em class="searchTxt">이벤트</em></strong></span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/main/eventview3">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent06.png`)" alt=""/>
                </span>
                <span class="txtBox"><strong><span>[유아 배지윤]</span>3~4월 신규 강의 할인 <em class="searchTxt">이벤트</em></strong></span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/special/event/view1">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent07.png`)" alt=""/>
                </span>
                <span class="txtBox"><strong><span>[음악 서민정]</span>3~4월 신규 강의 할인 <em class="searchTxt">이벤트</em></strong></span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/special/event/view2">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent08.png`)" alt=""/>
                </span>
                <span class="txtBox"><strong><span>[국어 박노송]</span>3~4월 신규 강의 할인 <em class="searchTxt">이벤트</em></strong></span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/main/eventview3">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent09.png`)" alt=""/>
                </span>
                <span class="txtBox"><strong><span>[한문 원주용]</span>3~4월 신규 강의 할인 <em class="searchTxt">이벤트</em></strong></span>
              </router-link>
            </li>
          </ul>
          <!-- //썸네일 리스트 -->
            <div class="paging">
              <Paginate v-if="!this.mobile" />
              <div class="moreBtnWrap" v-if="this.mobile">
                <button class="mobileMore">더보기</button>
              </div>
            </div>
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

export default {
  mixins: [Mixin],
  name: 'EventSearch',
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
