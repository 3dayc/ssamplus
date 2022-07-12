<template lang="html">
  <div id="morkupExamPaper" :class="{on:baseTrigger===true}">
    <div class="examinee">
      <div class="baseBack">
        <div class="tableBack">
          <div class="resTls subCase">
            <div class="tbody">
              <ul class="testGrid">
                <li class="listGrid ig1" @click="currentTab = 0"> <!-- 샘플 링크 입니다 -->
                  <dl>
                    <dt>시험 시작시간</dt>
                    <dd>
                      <span>2021-08-10   오후 5:39:40 </span>
                      <div class="elDisplay"><marquee>실제 시험과 유사하게 각 시간 별 실시간 시험 안내 방송이 나오고 있습니다. 스피커를 조절해 주세요. </marquee></div>
                    </dd>
                  </dl>
                </li>
                <li class="listGrid ig2">
                  <dl>
                    <dt>전공</dt>
                    <dd>국어</dd>
                  </dl>
                  <dl>
                    <dt>이름(아이디)</dt>
                    <dd>김송민</dd>
                  </dl>
                  <dl>
                    <dt>수험번호</dt>
                    <dd>361145</dd>
                  </dl>
                </li>
                <li class="listGrid ig3">
                  <dl>
                    <dt>시험 응시 현장 중계</dt>
                    <dd>
                      <strong>희소 쌤플러스 모의고사</strong>는 시험 현장의 긴장감을 생생하게 전달해 드립니다.
                      <div>내가 어떤 장소에 있든지 실제 시험장의 현황을 보면서 실전처럼 응시해 보세요.</div>
                    </dd>
                  </dl>
                  <span class="live on"> <!-- 없을 때는  on 을 지워주세요 -->
                    <img :src="require(`@/assets/images/thumbnail/@morkupExam_video.png`)" alt="" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button class="baseToggle" @click="baseTrigger = !baseTrigger">시험응시자 정보 여닫기</button>
    </div>
    <div class="examWrap">
      <!-- tab -->
      <div class="examTab">
        <ul>
          <li :class="{on:currentTab===1, off:currentTab!==0&&currentTab!==1}"><span @click="currentTab = 1">1교시 <strong>교육학 (김현)</strong> <em>09:00~10:00</em></span></li>
          <li :class="{on:currentTab===2, off:currentTab!==0&&currentTab!==2}"><span @click="currentTab = 2">2교시 <strong>국어 (박노송)</strong> <em>10:40~11:50</em></span></li>
          <li :class="{on:currentTab===3, off:currentTab!==0&&currentTab!==3}"><span @click="currentTab = 3">3교시 <strong>국어 (박노송)</strong> <em>12:30~13:40</em></span></li>
        </ul>
      </div>
      <!--// tab -->
      <div class="examTabData">
        <div v-if="currentTab == 0" :key="currentTab" class="testSchedule">
          <h2>모의고사 시험일정 안내</h2>
          <MockTestSchedule v-if="!this.mobile" />
          <MockTestScheduleM v-else-if="this.mobile" />
        </div>
        <div v-if="currentTab == 1" class="testPdfviewer">
          <!-- <vue-pdf-app class="aaa" pdf="../../assets/pdf/sample.pdf"> -->
          <div data-v-9f0eae36="" id="pdf-div" class="pdf-div">
            <div data-v-9f0eae36="" id="pdfApp">
              <button data-v-9f0eae36="" id="previous" disabled="">이전</button>
              <select data-v-9f0eae36="" class="pdfPages">
                <option data-v-9f0eae36="" value="1">1</option>
                <option data-v-9f0eae36="" value="2">2</option>
                <option data-v-9f0eae36="" value="3">3</option>
                <option data-v-9f0eae36="" value="4">4</option>
              </select>
              <button data-v-9f0eae36="" id="next">다음</button>
              <button data-v-9f0eae36="" id="zoomIn">확대</button>
              <button data-v-9f0eae36="" id="zoomOut">축소</button>
              <button data-v-9f0eae36="" class="width">너비맞춤</button>
              <button data-v-9f0eae36="" class="height">높이맞춤</button>
              <button data-v-9f0eae36="" id="presentationMode">풀스크린</button>
            </div>
          </div>
          <!-- </vue-pdf-app> -->
        </div>
        <div v-if="currentTab == 2" class="testPdfviewer">
          <img :src="require(`@/assets/images/thumbnail/@morkupExam_paper.png`)" alt="" />
          <!-- <div class="left">
            <img :src="require(`@/assets/images/catvod/i_feather-arrow-left-circle.svg`)" alt="" />
            <img :src="require(`@/assets/images/catvod/i_Icon-page.svg`)" alt="" />
            <img :src="require(`@/assets/images/catvod/i_feather-arrow-right-circle.svg`)" alt="" />
          </div> -->
          <div class="left">
            <button><img :src="require(`@/assets/images/catvod/i_feather-arrow-left-circle.svg`)" alt="" /></button>
            <span class="selectSet">
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </span>
            <button><img :src="require(`@/assets/images/catvod/i_feather-arrow-right-circle.svg`)" alt="" /></button>
          </div>
          <div class="right">
            <img :src="require(`@/assets/images/catvod/i_full-screen.svg`)" alt="" />
            <img :src="require(`@/assets/images/catvod/i_width.svg`)" alt="" />
            <img :src="require(`@/assets/images/catvod/i_expansion.svg`)" alt="" />
            <img :src="require(`@/assets/images/catvod/i_contraction.svg`)" alt="" />
          </div>
        </div>
        <div v-if="currentTab == 3" class="testPdfviewer">
          <img :src="require(`@/assets/images/thumbnail/@morkupExam_paper.png`)" alt="" />
          <div class="left">
            <button><img :src="require(`@/assets/images/catvod/i_feather-arrow-left-circle.svg`)" alt="" /></button>
            <span class="selectSet">
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </span>
            <button><img :src="require(`@/assets/images/catvod/i_feather-arrow-right-circle.svg`)" alt="" /></button>
          </div>
          <div class="right">
            <img :src="require(`@/assets/images/catvod/i_full-screen.svg`)" alt="" />
            <img :src="require(`@/assets/images/catvod/i_width.svg`)" alt="" />
            <img :src="require(`@/assets/images/catvod/i_expansion.svg`)" alt="" />
            <img :src="require(`@/assets/images/catvod/i_contraction.svg`)" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import MockTestSchedule from '@/views/mylec/MockTestSchedule.vue';
import MockTestScheduleM from '@/views/mylec/MockTestScheduleM.vue';

export default {
  mixins: [Mixin],
  name: 'MorkExamPaper',
  components: {
    MockTestSchedule,
    MockTestScheduleM,
  },
  data() {
    return {
      currentTab:0,
      baseTrigger:false
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
