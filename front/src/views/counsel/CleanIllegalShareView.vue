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
        <div class="cleanShareView">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>불법공유자 명단</h3>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 상세 -->
          <div class="boardDetail">
            <!-- 제목영역 -->
            <div class="boardHead">
              <strong>2021-03-01 ~ 2021-03-31 불법공유자 명단</strong>
              <div class="boardInfo">
                <em>작성일 : <i>2021-04-01</i></em>
                <em>조회수 : <i>99</i></em>
              </div>
            </div>
            <!-- //제목영역 -->
            <!-- 파일영역 -->
            <div class="boardFile" style="display:none">
              <ul class="fileList">
                <li>
                  <span>부록_마음을 열어주는 가비국어.pdf</span>
                  <button class="btnDownload">다운로드</button>
                </li>
              </ul>
            </div>
            <!-- //파일영역 -->
            <!-- 내용영역 -->
            <div class="boardView">
              <!-- 에디터 내용 -->
              안녕하세요.<br/>
              교사의 꿈을 위한 수험동반자 <br/>
              KG 에듀원 교원임용 희소/쌤플러스 입니다. <br/>
              2021년 3월 <strong style="color:#D1555F">불법공유자</strong> 명단입니다.
            </div>
            <!-- //내용영역 -->
            <!-- 이벤트 당첨자 영역 -->
            <div class="boardOnList">
              <div class="back">
                <strong>명단 안내</strong>
                <div class="listNum">
                  <table>
                    <thead>
                      <tr>
                        <th class="item0">순번</th>
                        <th class="item1">이름</th>
                        <th class="item2">아이디</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>김*진</td>
                        <td>ddr******</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>김*진</td>
                        <td>ddr******</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>김*진</td>
                        <td>ddr******</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>김*진</td>
                        <td>ddr******</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>김*진</td>
                        <td>ddr******</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>김*진</td>
                        <td>ddr******</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>김*진</td>
                        <td>ddr******</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- //이벤트 당첨자 영역 -->
            <!-- 상세 네비게이션영역 -->
            <div class="boardNavi">
              <a href="#none;" class="prev">
                <strong>PREV</strong>
                <em>2021-02-01 ~ 2021-02-28 불법공유자 명단</em>
              </a>
              <router-link to="/mkup/counsel/faq" class="btnList">목록</router-link>
              <a href="#none;" class="next">
                <strong>NEXT</strong>
                <em>2021-04-01 ~ 2021-04-30 불법공유자 명단</em>
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
  name: 'CleanIllegalShareView',
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
