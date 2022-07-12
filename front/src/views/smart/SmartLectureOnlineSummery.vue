<template lang="html">
  <div>
      <div class="tabBack">
        <div class="tabNav">
          <nav>
            <ul class="blackLineTab">
              <li :class="{on:lecturePopTab===0}"><button @click="lecturePopTab = 0">강좌 맛보기, 교재</button></li>
              <li :class="{on:lecturePopTab===1}"><button @click="lecturePopTab = 1">강좌소개</button></li>
              <li :class="{on:lecturePopTab===2}"><button @click="lecturePopTab = 2">강의 리스트</button></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="tabLayout">
        <div v-if="lecturePopTab == 0" class="tabData" :key="lecturePopTab">
          <div class="videoPlayTit"><em class="iSet">강좌 1</em> 그린키위반(기본반)</div>
          <div class="videoPlay"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></div>
          <ul class="slBooklist">
            <!--Loop-->
            <li>
              <div class="bookBasic">
                <em class="iSet">교재</em>
                <em class="inComeDed">소득공제</em>
                <strong class="bookname">류지원 영어교육학 기출문제집</strong>
              </div>
              <div class="bookMore">
                <span class="imgBox"><img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/></span>
                <div>
                  <dl>
                    <dt>저자</dt>
                    <dd>김현</dd>
                  </dl>
                  <dl>
                    <dt>출판사</dt>
                    <dd>나우퍼블리셔</dd>
                  </dl>
                  <dl>
                    <dt>출간일</dt>
                    <dd>2021-02-28</dd>
                  </dl>
                  <dl>
                    <dt>페이지</dt>
                    <dd>394</dd>
                  </dl>
                  <dl>
                    <dt>특징</dt>
                    <dd>고득점을 위한 필수교재 3~4월 사용 교재</dd>
                  </dl>
                </div>
              </div>
              <span class="price">
                <del>15,000원</del>
                <em>10<b>%</b></em><br/>
                <strong>13,500<i>원</i></strong>
              </span>
            </li>
            <!--//Loop-->
            <li>
              <div class="bookBasic">
                <em class="iSet">교재</em>
                <em class="inComeDed">소득공제</em>
                <strong class="bookname">류지원 영어교육학 기출문제집</strong>
              </div>
              <div class="bookMore">
                <span class="imgBox"><img :src="require(`@/assets/images//thumbnail/@tmp_book01.png`)" alt="2021 류지원 영어교육학 기출문제집"/></span>
                <div>
                  <dl>
                    <dt>저자</dt>
                    <dd>김현</dd>
                  </dl>
                  <dl>
                    <dt>출판사</dt>
                    <dd>나우퍼블리셔</dd>
                  </dl>
                  <dl>
                    <dt>출간일</dt>
                    <dd>2021-02-28</dd>
                  </dl>
                  <dl>
                    <dt>페이지</dt>
                    <dd>394</dd>
                  </dl>
                  <dl>
                    <dt>특징</dt>
                    <dd><span>고득점을 위한 필수교재 3~4월 사용 교재 고득점을 위한 필수교재 3~4월 사용 교재</span></dd>
                  </dl>
                </div>
              </div>
              <span class="price">
                <del>15,000원</del>
                <em>10<b>%</b></em><br/>
                <strong>13,500<i>원</i></strong>
              </span>
            </li>
          </ul>
        </div>
        <div v-if="lecturePopTab == 1" class="tabData">
          <TeacherLecDetailInfo />
        </div>
        <div v-if="lecturePopTab == 2" class="tabData">
          <TeacherLecSchedule />
        </div>
      </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import TeacherLecDetailInfo from '@/views/lecture/TeacherLecDetailInfo.vue';
import TeacherLecSchedule from '@/views/lecture/TeacherLecSchedule.vue';

export default {
  mixins: [Mixin],
  name: 'SmartLectureSummery',
  components: {
    TeacherLecDetailInfo,
    TeacherLecSchedule
  },
  data() {
    return {
      currentTab: 0,
      videoPopTrigger01: false,
      lecturePop:false,
      lecturePopTab:0,
      lecturePop2:false,
      lecturePopTab2:0,
    }
  },
  mounted() {
  },
}
</script>
