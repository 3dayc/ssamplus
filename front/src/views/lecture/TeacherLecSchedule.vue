<template lang="html">
  <div>
    <div class="lecSchedule">
      <div class="resTls">
        <!-- listTitle -->
        <div class="thead listGrid">
          <div class="lgItem itemGroup ig1">
            <span class="lgSubGrid">
              <span class="lgItem item0">번호</span>
              <span class="lgItem item1">강의명</span>
            </span>
          </div>
          <div class="lgItem itemGroup ig2">
            <div class="lgSubGrid">
              <span class="lgItem item2">강의시간</span>
              <span class="lgItem item3">업데이트</span>
            </div>
          </div>
        </div>
        <!-- //listTitle -->
        <!-- //list -->
        <div class="tbody">
          <ul>
            <!--Loop-->
            <li class="listGrid">
              <div class="lgItem itemGroup ig1">
                <span class="lgSubGrid">
                  <span class="lgItem item0">2</span>
                  <span class="lgItem item1">[01/04] O.T (강의계획서) / PART 6 유아평가 (p.354~)</span>
                </span>
              </div>
              <div class="lgItem itemGroup ig2">
                <span class="lgSubGrid">
                  <span class="lgItem item2"><em class="mTit">강의시간</em>81분</span>
                  <span class="lgItem item3"><em class="mTit line">업데이트</em>2020-09-15</span>
                </span>
              </div>
            </li>
            <!--//Loop-->
            <li class="listGrid">
              <div class="lgItem itemGroup ig1">
                <span class="lgSubGrid">
                  <span class="lgItem item0">1</span>
                  <span class="lgItem item1">[01/04] O.T (강의계획서) / PART 6 유아평가 (p.354~)</span>
                </span>
              </div>
              <div class="lgItem itemGroup ig2">
                <span class="lgSubGrid">
                  <span class="lgItem item2"><em class="mTit">강의시간</em>831분</span>
                  <span class="lgItem item3"><em class="mTit line">업데이트</em>2020-09-15</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <!-- //list -->
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'TeacherLecSchedule',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  },
}
</script>
