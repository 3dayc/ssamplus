<template lang="html">
  <div>
      <!-- 이미지 배너 -->
      <!-- <div class="topBannerSingle" style="background:#f8927d;">
        <router-link to="/mkup/ssammall/review/book" v-if="!this.mobile"><img :src="require(`@/assets/images/thumbnail/@tmp_bandBanner01.png`)" alt="백퍼후기 이벤트"/></router-link>
        <router-link to="/mkup/ssammall/review/book" v-else-if="this.mobile"><img :src="require(`@/assets/images/thumbnail/@m_banner06.png`)" alt="백퍼후기 이벤트"/></router-link>
      </div> --><!-- 20220317 수정 : 키위주스배너삭제 -->
      <!-- //이미지 배너 -->
      <!-- 커리큘럼 -->
      <div class="frameBack">
        <div class="teacherCourse">
          <!-- <h3>커리큘럼</h3> --><!-- 20220308 수정 : h3 삭제 -->
          <!-- 이미지용 -->
          <!-- [D] 실제 개발에는 아래 iframe 적용 -->
          <!-- <iframe
            id="curriculumIframe"
            class="iframeLayout"
            v-resize="{ log: true }"
            src="/curriculum/index.html"
            width="100%"
            scrolling="no"
            frameborder="0"
          >
          </iframe> -->
          <!-- [D] 실제 개발에는 아래 tableCase 영역 적용하지 않음, 고객 확인용 소스 -->
          <div class="tableCase">
            <h4>2021년 대비 연간 계획</h4>
            <div class="planList">
              <div>
                <dl>
                  <dt>01. 기본이론 <em>1-2월</em></dt>
                  <dd>
                    <strong>교육과정 총론반</strong>
                    <span>
                      유아 임용고시를 처음 시작하는 수험생을 위한 기본이론 강의
                    </span>
                  </dd>
                  <dd>
                    <strong>교직논술 기초 첨삭반</strong>
                    <span>
                      교직논술 왕초보 모여라!<br/>
                      글쓰기가 낯선 수험생, 그리고 올해 교직논술을 만점 받고 싶은 수험생 대상
                    </span>
                  </dd>
                </dl>
                <dl>
                  <dt>02. 심화이론 <em>3-5월</em></dt>
                  <dd>
                    <strong>교육과정 각론반</strong>
                    <span>
                      각론서 읽기 수준의 상세하고 깊이 있는 교재 읽기 및 설명
                    </span>
                  </dd>
                  <dd>
                    <strong>교직논술 및 서답식 답안쓰기 첨삭반</strong>
                    <span>
                      600자 5회, 1200자 5회 논제 읽기/쓰기의 기본을 넘어 유능한 쓰기를 연습하고자 하는 수험생 대상
                    </span>
                  </dd>
                </dl>
                <dl>
                  <dt>03. 문제풀이 <em>6-8월</em></dt>
                  <dd>
                    <strong>서답식 영역별 <strong>총정리 문제풀이</strong></strong>
                    <span>
                      문제 형식으로 전 범위 총정리 <br/>실전 대비 이해/암기/적용 총정리 문제풀이반
                    </span>
                    </dd>
                  </span>
                  <dd>
                    <strong>24년간 영역별 <strong>기출문제 분석반</strong></strong>
                    <span>
                      24년간 기출문제 총정리<br/>
                      최근 기출 경향 이상의 꼼꼼한 기출 내용을 확인해보는 기회, 임용시험 고득점을 위한 탁월한 선택
                    </span>
                  </dd>
                </dl>
                <dl>
                  <dt>04. 실전모고 <em>9-11월</em></dt>
                  <dd class="long">
                    <strong>실전 모의고사반</strong>
                    <span>
                      실전 분위기의 교직논술(1200자) + 서답식 실전 모의고사 암기 및 이해한 내용을 적용해 볼 수 있는 실전 수준의 응용문제로 구성
                    </span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <!-- //이미지용 -->
          <!-- 동영상용 -->
          <div class="videoCase">
            <h4>커리큘럼 소개</h4>
            <div class="back">
              <div class="videoArea"><button class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></button></div>
              <div class="videoTxt">
                <!-- [D] 실제 개발에는 아래 iframe 적용 -->
                <!-- <iframe
                  id="curriculumIframe2"
                  class="iframeLayout"
                  v-resize="{ log: true }"
                  src="/curriculumVideo/index.html"
                  width="100%"
                  scrolling="no"
                  frameborder="0"
                >
                </iframe> -->
                <!-- [D] 실제 개발에는 아래 scrollBack 영역 적용하지 않음, 고객 확인용 소스 -->
                <div class="scrollBack">
                  <div>
                    <dl>
                      <dt>01. 기본이론 (1-2월)</dt>
                      <dd>
                        <strong>교육과정 총론반</strong>
                        <span>
                          유아 임용고시를 처음 시작하는 수험생을 위한 기본이론 강의
                        </span>
                      </dd>
                      <dd>
                        <strong>교직논술 기초 첨삭반</strong>
                        <span>
                          교직논술 왕초보 모여라!<br/>
                          글쓰기가 낯선 수험생, 그리고 올해 교직논술을 만점 받고 싶은 수험생 대상
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt>02. 심화이론 (3-5월)</dt>
                      <dd>
                        <strong>교육과정 각론반</strong>
                        <span>
                          각론서 읽기 수준의 상세하고 깊이 있는 교재 읽기 및 설명
                        </span>
                      </dd>
                      <dd>
                        <strong>교직논술 및 서답식 답안쓰기 첨삭반</strong>
                        <span>
                          600자 5회, 1200자 5회 논제 읽기/쓰기의 기본을 넘어 유능한 쓰기를 연습하고자 하는 수험생 대상
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt>03. 문제풀이 (6-8월)</dt>
                      <dd>
                        <strong>서답식 영역별 총정리 문제풀이</strong>
                        <span>
                          문제 형식으로 전 범위 총정리 <br/>실전 대비 이해/암기/적용 총정리 문제풀이반
                        </span>
                        </dd>
                      </span>
                      <dd>
                        <strong>24년간 영역별 기출문제 분석반</strong>
                        <span>
                          24년간 기출문제 총정리<br/>
                          최근 기출 경향 이상의 꼼꼼한 기출 내용을 확인해보는 기회, 임용시험 고득점을 위한 탁월한 선택
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt>04. 실전모고 (9-11월)</dt>
                      <dd>
                        <strong>실전 모의고사반</strong>
                        <span>
                          실전 분위기의 교직논술(1200자) + 서답식 실전 모의고사 암기 및 이해한 내용을 적용해 볼 수 있는 실전 수준의 응용문제로 구성
                        </span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- //동영상용 -->
        </div>
      </div>
      <!-- //커리큘럼 -->
      <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';


export default {
  mixins: [Mixin],
  name: 'Teacher',
  components: {
  },
  data() {
    return {
      videoPopTrigger01: false
    }
  },
  methods: {
  },
  mounted() {
  },
  destroyed() {
  },
}
</script>
