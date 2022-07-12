<template lang="html">
  <div class="playerList bookmarkCase" >
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
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'playerbookmark',
  components: {
  },
  data() {
    return {
      isList04: true,
      isList05: false,
      isList06: false,
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
