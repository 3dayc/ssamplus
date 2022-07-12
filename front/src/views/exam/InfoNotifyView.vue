<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="infoNotifyView">
          <div class="subTit">
            <h3>시험공고</h3>
          </div>
          <!-- 상세 -->
          <div class="boardDetail">
            <!-- 제목영역 -->
            <div class="boardHead">
              <strong><em class="iBbsSet notice">공지</em>[종합] 코로나19 대비 응시자 유의사항 안내</strong>
              <div class="boardInfo">
                <em>작성일 : <i>2021-05-29</i></em>
                <em>조회수 : <i>222</i></em>
              </div>
            </div>
            <!-- //제목영역 -->
            <!-- 파일영역 -->
            <div class="boardFile">
              <ul class="uploadFileList">
                <li>
                  <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                  </span>
                </li>
                <li>
                  <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                  </span>
                </li>
              </ul>
            </div>
            <!-- //파일영역 -->
            <!-- 내용영역 -->
            <div class="boardView">
              내용이 들어갈 자리<br/><br/>
              <pre>
              안녕하세요.
              교사의 꿈을 위한 수험 동반자,
              KG에듀원 교원임용 희소/쌤플러스입니다.

              2021학년도 유아/초등/특수교사 최종 합격선 현황을 첨부합니다.

                  ◆ 최종합격 인원 (일반)
                    - 유아: 1,143명
                    - 초등: 3,500명
                    - 유아특수: 224 명
                    - 초등특수: 616명

                  ◆ 최종합격선
                    - 유아: 163.14
                    - 초등: 141.47
                    - 유아특수: 141.73
                    - 초등특수: 124.87
                      (※ 최종합격선은 과목별 장애, 지역을 제외한 최저합격선을 기준으로 명기하였습니다.)

              최종합격하신 모든 분들 진심으로 축하드립니다.
            </pre>
            </div>
            <!-- //내용영역 -->
            <!-- 상세 네비게이션영역 -->
            <div class="boardNavi">
              <a href="#none;" class="prev">
                <strong>PREV</strong>
                <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
              </a>
              <router-link to="/mkup/exam/info/notify" class="btnList">목록</router-link>
              <a href="#none;" class="next">
                <strong>NEXT</strong>
                <em>[전원100%증정] 연감쌤팩, 21학년도 최종합격수기 이벤트</em>
              </a>
            </div>
            <!-- //상세 네비게이션영역 -->
          </div>
          <!-- //상세 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'InfoNotifyView',
  components: {
  },
  data() {
    return {
      
    }
  },
  methods: {
  }
}
</script>
