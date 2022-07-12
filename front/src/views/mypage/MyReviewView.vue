<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="frameBack subSpace">
          <div class="myReviewView">
            <!-- 서브 타이틀 -->
            <div class="subTit">
              <h3>후기 작성</h3>
              <div class="summeryTxt">
                강좌 종료 7일 전 ~ 종료 후 30일까지 수강후기 작성이 가능하며 그 외 상품은 구매 후 30일 이내에 작성이 가능합니다.
              </div>
            </div>
            <!-- //서브 타이틀 -->
            <!-- 상세 -->
            <div class="boardDetail">
              <!-- 제목영역 -->
              <div class="boardHead ssamCase">
                <span class="imgBox sbjCase"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare04.png`)" alt="" /></span>
                <div class="hashTag">
                  <span>#교육학 김현 선생님의 키위 교육학 (실전)</span>
                </div>
                <strong>처음으로 도전하는 임용에 선생님의 많은 응원과 가르침이 있었습니다.</strong>
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
                </ul>
              </div>
              <!-- //파일영역 -->
              <!-- 내용영역 -->
              <div class="boardView">
                <!-- 에디터 내용 -->
                안녕하세요.<br/>
                교사의 꿈을 위한 수험 동반자, KG에듀원 교원임용 희소/쌤플러스 입니다... <br/>
                의견 올려줘서 고마와요.. 며칠전까지 이해가 잘 안되고 뭔가 잘못된 게 아닌가 했는데 이제 이해가 되네요..... <br/>
                그 문제는 일단 그냥 넘어가려 했는데 ,,수업 때 다시 언급할게요!!! 이런 문제는 운동 게임을 즐겨보지 않는 여성에게는 어렵겠네요.... <br/>
                게임 룰에 대한 전 후 충분한 설명이 있어야 공평하겠네요... 열공!!!
              </div>
              <!-- //내용영역 -->
              <!-- 상세 네비게이션영역 -->
              <div class="boardNavi">
                <a href="#none;" class="prev">
                  <strong>PREV</strong>
                  <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
                </a>
                <router-link to="/mkup/mypage/myreview" class="btnList">목록</router-link>
                <a href="#none;" class="next">
                  <strong>NEXT</strong>
                  <em>[전원100%증정] 연감쌤팩, 21학년도 최종합격수기 이벤트</em>
                </a>
              </div>
              <!-- //상세 네비게이션영역 -->
            </div>
            <!-- //상세 -->
          </div>
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
  name: 'MyRevieView',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
