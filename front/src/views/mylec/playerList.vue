<template lang="html">
  <div class="playerList">
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
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'playerList',
  components: {
  },
  data() {
    return {
      isList01: true,
      isList02: false,
      isList03: false,
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
  }
}
</script>
