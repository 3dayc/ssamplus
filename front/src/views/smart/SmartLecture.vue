<template lang="html">
  <div>
    <div class="smartLecture gridSet">
      <!---->
      <div class="gridItem ssam">
        <h3>강좌</h3>
        <ul>
          <li class="on">
            <span class="ssamChoice">
              <input type="radio" id="ssRadio1" name="ssRadio" checked />
              <label for="ssRadio1">
                <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt=""/></span>
                <strong>김현</strong>
              </label>
            </span>
          </li>
          <li>
            <span class="ssamChoice">
              <input type="radio" id="ssRadio2" name="ssRadio" />
              <label for="ssRadio2">
                <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare03.png`)" alt=""/></span>
                <strong>윤중샘</strong>
              </label>
            </span>
          </li>
          <li>
            <span class="ssamChoice">
              <input type="radio" id="ssRadio3" name="ssRadio" />
              <label for="ssRadio3">
                <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare10.png`)" alt=""/></span>
                <strong>희소중국어팀</strong>
              </label>
            </span>
          </li>
        </ul>
      </div>
      <!---->
      <div class="gridItem ssamInfo">
        <strong class="tit">김현<span>(교육학)</span></strong>
        <dl class="ssamEvent">
          <dt>이벤트</dt>
          <dd>
            <span><em>스페셜 대면첨삭 이벤트 #1</em></span>
            <span><em>스페셜 대면첨삭 이벤트 #2</em></span>
            <span><em>스페셜 대면첨삭 이벤트 #3 이벤트 길이가 길어진다면</em></span>
            <span><em>스페셜 대면첨삭 이벤트 #4</em></span>
          </dd>
        </dl>
        <dl class="ssamRecommend">
          <dt>추천강좌</dt>
          <dd>
            <ol>
              <li>2022 합격대비 연간쌤팩 - 베이직</li>
              <li>2022 합격대비 연간쌤팩 - 프리미엄</li>
              <li>그린키위반(기본반)</li>
            </ol>
          </dd>
        </dl>
      </div>
      <!---->
      <div class="gridItem slList">
        <p class="guideBox info">과목별로 수강하고자 하는 선생님을 선택해 주세요. (복수 선택 가능)</p>
        <!-- tab-wrap -->
        <div class="smartTabwrap">
          <!-- tab -->
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul class="blackLineTab">
                  <li :class="{on:currentTab2===0}"><button @click="currentTab2 = 0">온라인 강의</button></li>
                  <li :class="{on:currentTab2===1}"><button @click="currentTab2 = 1">학원 강의</button></li>
                  <li :class="{on:currentTab2===2}"><button @click="currentTab2 = 2">라이브 강의</button></li>
                </ul>
              </nav>
            </div>
          </div>
          <!--// tab -->
          <div class="tabLayout">
            <!--온라인 학원-->
            <div v-if="currentTab2 == 0" class="tabData" :key="currentTab2">
              <SmartLectureOnline/>
            </div>
            <!--//온라인 학원-->
            <!--서울학원-->
            <div v-if="currentTab2 == 1" class="tabData">
              <SmartLectureSeoul/>
            </div>
            <!--//서울학원-->
            <!--라이브 강의-->
            <div v-if="currentTab2 == 2" class="tabData">
              <SmartLectureLive/>
            </div>
            <!--//라이브 강의-->
          </div>
        </div>
        <!-- //tab-wrap -->
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import SmartLectureOnline from '@/views/smart/SmartLectureOnline.vue';
import SmartLectureSeoul from '@/views/smart/SmartLectureSeoul.vue';
import SmartLectureLive from '@/views/smart/SmartLectureLive.vue';

export default {
  mixins: [Mixin],
  name: 'SmartLecture',
  components: {
    SmartLectureOnline,
    SmartLectureSeoul,
    SmartLectureLive,
  },
  data() {
    return {
      currentTab2: 0,
    }
  },
}
</script>
