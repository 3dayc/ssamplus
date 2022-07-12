<template lang="html">
  <div>
    <div class="smartLecture">
      <!---->
      <div class="ssam">
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
      <div class="slList">
        <!-- tab-wrap -->
        <div class="smartTabwrap">
          <div class="mobileTab">
            <span class="selectSet">
              <select name="" id="" @change="onChange($event)">
                <option value="0">온라인 강의</option>
                <option value="1">학원 강의</option>
                <option value="2">라이브 강의</option>
              </select>
            </span>
            <button class="btnSmartEvent" @click="smartEventPop = true">이벤트 및 추천강좌</button>
          </div>
          <!--// tab -->
          <div class="tabLayout">
            <!--온라인 학원-->
            <div v-if="currentTab2 == 0" class="tabData" :key="currentTab2">
              <SmartLectureOnlineM/>
            </div>
            <!--//온라인 학원-->
            <!--서울학원-->
            <div v-if="currentTab2 == 1" class="tabData">
              <SmartLectureSeoulM/>
            </div>
            <!--//서울학원-->
            <!--라이브 강의-->
            <div v-if="currentTab2 == 2" class="tabData">
              <SmartLectureLiveM/>
            </div>
            <!--//라이브 강의-->
          </div>
        </div>
        <!-- //tab-wrap -->
      </div>
      <!---->
    </div>

    <!-- 이벤트 및 추천강좌 Popup -->
    <Popup v-if='smartEventPop' @close="smartEventPop = false" class="smartEventPop">
      <template slot="modalheader">
        <div>
          <h1>이벤트 및 추천강좌</h1>
        </div>
        <button @click="smartEventPop = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <!---->
        <div class="ssamInfo">
          <div class="ssam">
            <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt="" /></span>
            <strong><em>교육학</em> 김 현</strong>
          </div>
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
      </template>
    </Popup>
    <!-- //이벤트 및 추천강좌 Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import SmartLectureOnlineM from '@/views/smart/SmartLectureOnlineM.vue';
import SmartLectureSeoulM from '@/views/smart/SmartLectureSeoulM.vue';
import SmartLectureLiveM from '@/views/smart/SmartLectureLiveM.vue';

export default {
  mixins: [Mixin],
  name: 'SmartLectureM',
  components: {
    SmartLectureOnlineM,
    SmartLectureSeoulM,
    SmartLectureLiveM,
  },
  data() {
    return {
      currentTab2: 0,
      smartEventPop:false
    }
  },
  methods: {
    onChange(event) {
      let value = event.target.value;
      if (value == '0') this.currentTab2 = 0;
      else if (value == '1') this.currentTab2 = 1;
      else if (value == '2') this.currentTab2 = 2;
    },
  }
}
</script>
