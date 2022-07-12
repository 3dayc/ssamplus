<template lang="html">
  <div>
    <div class="lecDiscount">
      <div class="ratePrice">
        <span class="left"><strong>30<b>%</b></strong>할인</span>
        <span class="price">
          <del>500,000</del><strong>2,712,000<i>원</i></strong>
        </span>
      </div>
      <div class="resTls subCase">
        <!-- listTitle -->
        <div class="thead listGrid">
          <span class="lgItem item0">과목</span>
          <span class="lgItem item1">선생님</span>
          <span class="lgItem item2">강좌</span>
        </div>
        <!-- //listTitle -->
        <!-- //list -->
        <div class="tbody">
          <ul>
            <!--Loop-->
            <li class="listGrid">
              <span class="lgItem item0">과학교과론</span>
              <span class="lgItem item1">김창만</span>
              <span class="lgItem item2">과학교육 기본 이론</span>
            </li>
            <!--//Loop-->
            <li class="listGrid">
              <span class="lgItem item0">생물</span>
              <span class="lgItem item1">엄은미</span>
              <span class="lgItem item2">세포&amp;분자 생물학</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">생물</span>
              <span class="lgItem item1">엄은미</span>
              <span class="lgItem item2">일반생물</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">사서직(공무원)</span>
              <span class="lgItem item1">이정훈/안후상팀</span>
              <span class="lgItem item2">스탠다드 유기분광학 기출분석 및 대학교재 문제 적응반</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">화학</span>
              <span class="lgItem item1">권혁</span>
              <span class="lgItem item2">유기화학 스탠다드 이론반</span>
            </li>
          </ul>
        </div>
        <!-- //list -->
      </div>
      <div class="ratePrice">
        <span class="left"><strong>5<b>%</b></strong>할인</span>
        <span class="price">
          <del>500,000</del><strong>2,712,000<i>원</i></strong>
        </span>
      </div>
      <div class="resTls subCase">
        <!-- listTitle -->
        <div class="thead listGrid">
          <span class="lgItem item0">과목</span>
          <span class="lgItem item1">선생님</span>
          <span class="lgItem item2">강좌</span>
        </div>
        <!-- //listTitle -->
        <!-- //list -->
        <div class="tbody">
          <ul>
            <!--Loop-->
            <li class="listGrid">
              <span class="lgItem item0">과학교과론</span>
              <span class="lgItem item1">김창만</span>
              <span class="lgItem item2">과학교육 기본 이론</span>
            </li>
            <!--//Loop-->
            <li class="listGrid">
              <span class="lgItem item0">생물</span>
              <span class="lgItem item1">엄은미</span>
              <span class="lgItem item2">세포&amp;분자 생물학</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">생물</span>
              <span class="lgItem item1">엄은미</span>
              <span class="lgItem item2">일반생물</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">화학</span>
              <span class="lgItem item1">권혁</span>
              <span class="lgItem item2">스탠다드 유기분광학 기출분석 및 대학교재 문제 적응반</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">화학</span>
              <span class="lgItem item1">권혁</span>
              <span class="lgItem item2">유기화학 스탠다드 이론반</span>
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
  name: 'TeacherLecDiscount',
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
