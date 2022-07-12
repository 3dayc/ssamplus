<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="onlineUpdate">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>온라인 업데이트 일정</h3>
          </div>
          <!-- //서브 타이틀 -->
          <span class="selectSet wFull">
            <select name="" id="">
              <option value="">Making Map 교육학</option>
              <option value="">교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용</option>
              <option value="">80점 도약 모의고사반 첨삭비</option>
            </select>
          </span>
          <!-- 반응형 목록 -->
          <div class="resTls">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem item0">일자</span>
              <div class="lgItem item1">강좌</div>
              <span class="lgItem item2">업데이트 강의</span>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul>
                <!--Loop-->
                <li class="listGrid">
                  <span class="lgItem item0"><em class="mTit">예정일자</em>2021-04-21</span>
                  <router-link to="/mkup/mylec/online/my/player" class="lgItem item1">
                    <span>교육학/ 김현</span>
                    <strong>교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용 교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용</strong>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">업데이트 강의</em>[04/21] 4. 교육논술 답안쓰기(22~28)</span>
                </li>
                <!--//Loop-->
                <li class="listGrid">
                  <span class="lgItem item0"><em class="mTit">예정일자</em>2021-04-21</span>
                  <router-link to="/mkup/mylec/online/my/player" class="lgItem item1">
                    <span>교육학/ 김현</span>
                    <strong>교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용 교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용</strong>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">업데이트 강의</em>[04/21] 3. 교육논술 답안쓰기(15~21)</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="mTit">예정일자</em>2021-04-21</span>
                  <router-link to="/mkup/mylec/online/my/player" class="lgItem item1">
                    <span>교육학/ 김현</span>
                    <strong>교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용 교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용</strong>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">업데이트 강의</em>[04/21] 2. 교육논술 답안쓰기(8~14)</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="mTit">예정일자</em>2021-04-21</span>
                  <router-link to="/mkup/mylec/online/my/player" class="lgItem item1">
                    <span>교육학/ 김현</span>
                    <strong>교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용 교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용</strong>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">업데이트 강의</em>[04/21] 1. 교육논술 답안쓰기(1~7)</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="mTit">예정일자</em>2021-04-21</span>
                  <router-link to="/mkup/mylec/online/my/player" class="lgItem item1">
                    <span>교육학/ 김현</span>
                    <strong>Making Map 교육학</strong>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">업데이트 강의</em>[04/21] 16. Making Map 교육학</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="mTit">일자</em>2021-04-21</span>
                  <router-link to="/mkup/mylec/online/my/player" class="lgItem item1">
                    <span>교육학/ 김현</span>
                    <strong>Making Map 교육학</strong>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">업데이트 강의</em>[04/21] 15. Making Map 교육학</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="mTit">예정일자</em>2021-04-21</span>
                  <router-link to="/mkup/mylec/online/my/player" class="lgItem item1">
                    <span>교육학/ 김현</span>
                    <strong>Making Map 교육학</strong>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">업데이트 강의</em>[04/21] 14. Making Map 교육학</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="mTit">예정일자</em>2021-04-21</span>
                  <router-link to="/mkup/mylec/online/my/player" class="lgItem item1">
                    <span>희소중국어팀</span>
                    <strong>80점 도약 모의고사반 첨삭비</strong>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">업데이트 강의</em>[04/21] 99. 80점 도약 모의고사반 첨삭비(76-100)</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="mTit">예정일자</em>2021-04-21</span>
                  <router-link to="/mkup/mylec/online/my/player" class="lgItem item1">
                    <span>희소중국어팀</span>
                    <strong>80점 도약 모의고사반 첨삭비</strong>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">업데이트 강의</em>[04/21] 98. 80점 도약 모의고사반 첨삭비(51-75)</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="mTit">예정일자</em>2021-04-21</span>
                  <router-link to="/mkup/mylec/online/my/player" class="lgItem item1">
                    <span>희소중국어팀</span>
                    <strong>80점 도약 모의고사반 첨삭비</strong>
                  </router-link>
                  <span class="lgItem item2"><em class="mTit">업데이트 강의</em>[04/21] 98. 80점 도약 모의고사반 첨삭비(51-75)</span>
                </li>
              </ul>
            </div>
            <!-- //list -->
          </div>
          <!-- //반응형 목록 -->
          <div class="paging">
            <Paginate v-if="!this.mobile" />
            <div class="moreBtnWrap" v-if="this.mobile">
              <button class="mobileMore">더보기</button>
            </div>
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
  name: 'OnlineUpdate',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
  },
}
</script>
