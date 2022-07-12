<template lang="html">
  <div class="foucsModeList" :class="{off:toggleTrigger===false}">
    <!-- 강의리스트 구분 -->
    <div class="playTabLeft">
      <span :class="{on:playerTab2===0}"><button @click="selfToggle()">강의 리스트</button></span>
      <span class="bookmarkTab" :class="{on:playerTab2===1}"><button @click="selfToggle2()">북마크</button></span>
    </div>
    <div class="showHiden">
      <div class="scroll_back">
        <p>강의 리스트 (21)</p>
        <div class="scroll">
          <!-- 강의리스트 -->
          <div class="playerList" v-if="playerTab2 == 0" :key="playerTab2">
            <dl :class="{on:isList01==true}">
              <dt @click="isList01 = !isList01" :class="{on:isList01==true}">카테고리명 1</dt>
              <dd v-show="isList01">
                <ul class="courseList">
                  <li class="end">
                    <span class="basic">
                      <span>[9/12] O.T 안내 <i>수강종료</i></span>
                      <em>12:00</em>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/12] O.T 안내 / 80점 모고 8회 첨삭 설명 / 도고 모고 A형 해설</span>
                      <em>28:30</em>
                    </span>
                    <span class="over">
                      <span class="time"><em>남은 강의시간 (18:00)</em><em>잔여 수강시간 <i>(25:00)</i></em></span>
                      <span class="rateBar"><span style="width:75%;"></span><em><strong>75</strong>%</em></span>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/26] 도약 모고 3회 A형 해설</span>
                      <em>30:00</em>
                    </span>
                    <span class="over">
                      <span class="time"><em>남은 강의시간 (30:00)</em><em>잔여 수강시간 <i>(30:00)</i></em></span>
                      <span class="rateBar"><span style="width:0%;"></span><em><strong>0</strong>%</em></span>
                    </span>
                  </li>
                  <li class="on">
                    <span class="basic">
                      <span>[9/30] 도고 모고 A형 해설</span>
                      <em>28:30</em>
                    </span>
                    <span class="over">
                      <span class="time"><em>남은 강의시간 (18:00)</em><em>잔여 수강시간 <i>(25:00)</i></em></span>
                      <span class="rateBar"><span style="width:75%;"></span><em><strong>75</strong>%</em></span>
                    </span>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl :class="{on:isList02==true}">
              <dt @click="isList02 = !isList02" :class="{on:isList02==true}">카테고리명 2</dt>
              <dd v-show="isList02">
                <ul class="courseList">
                  <li class="end">
                    <span class="basic">
                      <span>[9/12] O.T 안내 <i>수강종료</i></span>
                      <em>12:00</em>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/12] O.T 안내 / 80점 모고 8회 첨삭 설명 / 도고 모고 A형 해설</span>
                      <em>28:30</em>
                    </span>
                    <span class="over">
                      <span class="time"><em>남은 강의시간 (18:00)</em><em>잔여 수강시간 <i>(25:00)</i></em></span>
                      <span class="rateBar"><span style="width:75%;"></span><em><strong>75</strong>%</em></span>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/26] 도약 모고 3회 A형 해설</span>
                      <em>30:00</em>
                    </span>
                    <span class="over">
                      <span class="time"><em>남은 강의시간 (30:00)</em><em>잔여 수강시간 <i>(30:00)</i></em></span>
                      <span class="rateBar"><span style="width:0%;"></span><em><strong>0</strong>%</em></span>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/30] 도고 모고 A형 해설</span>
                      <em>28:30</em>
                    </span>
                    <span class="over">
                      <span class="time"><em>남은 강의시간 (18:00)</em><em>잔여 수강시간 <i>(25:00)</i></em></span>
                      <span class="rateBar"><span style="width:75%;"></span><em><strong>75</strong>%</em></span>
                    </span>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl :class="{on:isList03==true}">
              <dt @click="isList03 = !isList03" :class="{on:isList03==true}">카테고리명 3</dt>
              <dd v-show="isList03">
                <ul class="courseList">
                  <li class="end">
                    <span class="basic">
                      <span>[9/12] O.T 안내 <i>수강종료</i></span>
                      <em>12:00</em>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/12] O.T 안내 / 80점 모고 8회 첨삭 설명 / 도고 모고 A형 해설</span>
                      <em>28:30</em>
                    </span>
                    <span class="over">
                      <span class="time"><em>남은 강의시간 (43:00)</em><em>잔여 수강시간 <i>(43:00)</i></em></span>
                      <span class="rateBar"><span style="width:0%;"></span><em><strong>0</strong>%</em></span>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/26] 도약 모고 3회 A형 해설</span>
                      <em>30:00</em>
                    </span>
                    <span class="over">
                      <span class="time"><em>남은 강의시간 (30:00)</em><em>잔여 수강시간 <i>(30:00)</i></em></span>
                      <span class="rateBar"><span style="width:0%;"></span><em><strong>0</strong>%</em></span>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/30] 도고 모고 A형 해설</span>
                      <em>28:30</em>
                    </span>
                    <span class="over">
                      <span class="time"><em>남은 강의시간 (18:00)</em><em>잔여 수강시간 <i>(25:00)</i></em></span>
                      <span class="rateBar"><span style="width:75%;"></span><em><strong>75</strong>%</em></span>
                    </span>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <!-- //강의리스트 -->
          <!-- 북마크리스트 -->
          <div class="playerList bookmarkCase" v-if="playerTab2 == 1">
            <dl :class="{on:isList04==true}">
              <dt @click="isList04 = !isList04" :class="{on:isList04==true}">카테고리명 1</dt>
              <dd v-show="isList04">
                <ul class="courseList">
                  <li>
                    <span class="basic">
                      <span>[9/12] O.T 안내</span>
                      <em class="bookmarkTime">55:45</em>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/12] O.T 안내 / 80점 모고 8회 첨삭 설명 / 도고 모고 A형 해설</span>
                      <em class="bookmarkTime">55:45</em>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/26] 도약 모고 3회 A형 해설</span>
                      <em class="bookmarkTime">55:45</em>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/30] 도고 모고 A형 해설</span>
                      <em class="bookmarkTime">55:45</em>
                    </span>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl :class="{on:isList05==true}">
              <dt @click="isList05 = !isList05" :class="{on:isList05==true}">카테고리명 2</dt>
              <dd v-show="isList05">
                <ul class="courseList">
                  <li>
                    <span class="basic">
                      <span>[9/12] O.T 안내</span>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/12] O.T 안내 / 80점 모고 8회 첨삭 설명 / 도고 모고 A형 해설</span>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/26] 도약 모고 3회 A형 해설</span>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/30] 도고 모고 A형 해설</span>
                    </span>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl :class="{on:isList06==true}">
              <dt @click="isList06 = !isList06" :class="{on:isList06==true}">카테고리명 3</dt>
              <dd v-show="isList06">
                <ul class="courseList">
                  <li>
                    <span class="basic">
                      <span>[9/12] O.T 안내</span>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/12] O.T 안내 / 80점 모고 8회 첨삭 설명 / 도고 모고 A형 해설</span>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/26] 도약 모고 3회 A형 해설</span>
                    </span>
                  </li>
                  <li>
                    <span class="basic">
                      <span>[9/30] 도고 모고 A형 해설</span>
                    </span>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <!-- //북마크리스트 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PlayerListArea.vue',
  components: {
  },
  data() {
    return {
      playerTab2: 0,
      isList01: true,
      isList02: true,
      isList03: true,
      isList04: true,
      isList05: true,
      isList06: true,
      toggleTrigger:true
    }
  },
  methods: {
    selfToggle() {
      if (this.toggleTrigger) {
        this.toggleTrigger = false;
        this.playerTab2 = null
      } else {
        this.toggleTrigger = true;
        this.playerTab2 = 0
      }
    },
    selfToggle2() {
      if (this.toggleTrigger) {
        this.toggleTrigger = false;
        this.playerTab2 = null
      } else {
        this.toggleTrigger = true;
        this.playerTab2 = 1
      }
    },
  },
  computed: {
  },
  mounted() {
  }
}
</script>
