<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="openLecHighLight">
          <!-- 서브 타이틀 -->
          <div class="subTit lineforM">
            <h3>핵심만 모아보자, 강의 하이라이트</h3>
          </div>
          <div class="subTit for_search wdNew">
            <span class="search_box ">
              <span class="selectSet hf">
                <select name="" id="">
                  <option value="">분류</option>
                  <option value="">전체</option>
                </select>
              </span>
              <span class="selectSet hf">
                <select name="" id="">
                  <option value="">전공</option>
                  <option value="">유아</option>
                  <option value="">교육학</option>
                  <option value="">국어</option>
                  <option value="">수학</option>
                  <option value="">중국어</option>
                  <option value="">음악</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">선생님</option>
                  <option value="">배지윤</option>
                  <option value="">김현</option>
                  <option value="">송헌</option>
                  <option value="">이정훈/안후상</option>
                  <option value="">한정은</option>
                  <option value="">서정팀</option>
                </select>
              </span>
            </span>
          </div>
          <!-- //서브 타이틀 -->
          <div class="openLecList sizeM">
            <ul>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
              <li class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </li>
            </ul>
            <div class="paging">
              <Paginate v-if="!this.mobile" />
              <div class="moreBtnWrap" v-if="this.mobile">
                <button class="mobileMore">더보기</button>
              </div>
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

    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'HighLight',
  components: {
  },
  data() {
    return {
      videoPopTrigger01: false,
    }
  },
}
</script>
<style lang="css" scoped>
#wrapBack.mDevice .openLecHighLight .openLecList .openLecThumbnail:nth-child(n+11):nth-child(-n+20) {display:none;}
</style>
