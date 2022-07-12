<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="infoNews">
          <div class="subTit">
            <h3>임용 칼럼</h3>
          </div>
          <!-- 상세 -->
          <div class="boardDetail">
            <!-- 제목영역 -->
            <div class="boardHead">
              <strong>쌤플러스가 정리한 연간 학습전략 가이드</strong>
              <div class="hashTag"><em>#임용필수체크</em><em>#학습전략</em></div>
              <div class="boardInfo">
                <em>작성일 : <i>2021-05-19</i></em>
                <em>조회수 : <i>222</i></em>
              </div>
              <div class="right-po shareBox">
                <span class="likeNum" ref="likeNum">
                  <input type="checkbox" id="likeNum" name="likeNum" @change="likeChange($event, 'likeNum')" /><label for="likeNum">892</label>
                </span>
                <div class="shareSet" :class="{on:shareTrigger == true}">
                  <span class="btnShare"  @click="shareTrigger = !shareTrigger">공유하기</span>
                  <div>
                    <button class="cacao">카카오톡</button>
                    <button class="line">라인</button>
                    <button class="facebook">페이스북</button>
                    <button class="url">URL</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- //제목영역 -->
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
            <!-- 태그 & 좋아요 & 댓글 수 & 댓글 -->
            <div class="tagNlike">
              <div class="hashTag"><em>#임용필수체크</em><em>#학습전략</em></div>
              <span class="replyBox">
                <span class="likeNum" ref="likeNum2">
                  <input type="checkbox" id="likeNum2" name="likeNum2" @change="likeChange($event, 'likeNum2')" /><label for="likeNum2">892</label>
                </span>
                <span class="replyNum">12</span>
              </span>
            </div>
            <div class="comment">
              <div class="writeBox">
                <strong>로그인 후 등록 할 수 있습니다.</strong>
                <textarea placeholder="미래의 선생님! 쌤플러스가 더욱 따뜻해지는 댓글을 부탁드립니다."></textarea>
                <button class="regist">등록하기</button>
              </div>
              <div class="commentBox">
                <ul>
                  <li>
                    <div class="male"> <!-- 남자회원일 경우 / 여자일 경우 class 없음 -->
                      <strong>rse******</strong>
                      <button class="btnDelete">삭제</button>
                      <p>1년을 어떻게 준비해야하나 막막했는데, 쌤플러스의 연간 학습 전략 가이드 따라서 한 번 해보려고요. 꼭 합격하겠습니다! 1년을 어떻게 준비해야하나 막막했는데, 쌤플러스의 연간 학습 전략 가이드 따라서 한 번 해보려고요. 꼭 합격하겠습니다! 1년을 어떻게 준비해야하나 막막했는데, 쌤플러스의 연간 학습 전략 가이드 따라서 한 번 해보려고요. 꼭 합격하겠습니다! 1년을 어떻게 준비해야하나 막막했는데, 쌤플러스의 연간 학습 전략 가이드 따라서 한 번 해보려고요. 꼭 합격하겠습니다! 1년을 어떻게 준비해야하나 막막했는데, 쌤플러스의 연간 학습 전략 가이드 따라서 한 번 해보려고요. 꼭 합격하겠습니다!</p>
                      <span>2021-04-03 18:53:39</span>
                    </div>
                  </li>
                    <li>
                    <div>
                      <strong>rse******</strong>
                      <button class="btnDelete">삭제</button>
                      <p>쌤플러스의 연간 학습 전략 가이드 따라서 한 번 해보려고요. 꼭 합격하겠습니다!</p>
                      <span>2021-04-03 18:53:39</span>
                    </div>
                    <ol>
                      <li>
                        <div> <!-- ol 안의 div는 class 없음. 쌤플러스 고정 -->
                          <strong>쌤플러스</strong>
                          <p>안녕하세요. 쌤플러스입니다. 합격을 응원하겠습니다!</p>
                          <span>2021-04-03 18:53:39</span>
                        </div>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <div>
                      <strong>rse******</strong>
                      <button class="btnDelete">삭제</button>
                      <p>1년을 어떻게 준비해야하나 막막했는데, 쌤플러스의 연간 학습 전략 가이드 따라서 한 번 해보려고요. 꼭 합격하겠습니다!</p>
                      <span>2021-04-03 18:53:39</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- //태그 & 좋아요 & 댓글 수 & 댓글 -->
            <!-- 상세 네비게이션영역 -->
            <div class="boardNavi">
              <a href="#none;" class="prev">
                <strong>PREV</strong>
                <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
              </a>
              <router-link to="/mkup/exam/column" class="btnList">목록</router-link>
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
  name: 'ColumnView',
  components: {
  },
  data() {
    return {
      
      shareTrigger: false
    }
  },
  methods: {
    likeChange(event, refName) {
      var element = this.$refs[refName];
      let optionText = event.target.checked;

      if (optionText == true){
        element.className = 'likeNum on';
      } else {
        element.className = 'likeNum off';
      }
    }
  }
}
</script>
