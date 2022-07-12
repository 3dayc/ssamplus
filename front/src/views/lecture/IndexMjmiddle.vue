<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="lectureSsamList">
          <!-- 중등 -->
          <div class="subTit noLine">
            <h3>국어</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle011" class="ssamArea">
                <span class="ssamInfo teamCase">
                  <span>박사와 교사가 <span>만났다.</span></span>
                  <em>국어</em>
                  <strong>송헌/김준팀 </strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Ko01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle012" class="ssamArea">
                <span class="ssamInfo">
                  <span>출제자의 눈으로 <span>국어의 핵심을 <br/>찌르다!</span></span>
                  <em>국어</em>
                  <strong>송헌</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Ko02_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle013" class="ssamArea">
                <span class="ssamInfo">
                  <span>문법을 관통하는 <span>시원하고 거침없는 <br/>질주</span></span>
                  <em>국어</em>
                  <strong>김준</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Ko03_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle014" class="ssamArea">
                <span class="ssamInfo">
                  <span>전공국어 <span>神의 한수</span></span>
                  <em>국어</em>
                  <strong>박노송</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Ko04_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>영어</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle021" class="ssamArea">
                <span class="ssamInfo">
                  <span>누구도 따라올 수 없는 <span>전공영어의 <br/>막강파워</span></span>
                  <em>영어</em>
                  <strong>차류쉘팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_En01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle022" class="ssamArea">
                <span class="ssamInfo">
                  <span>전공영어의 <span>막강파워!</span></span>
                  <em>영어</em>
                  <strong>차미아</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_En02_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle023" class="ssamArea">
                <span class="ssamInfo">
                  <span>전공영어의 <span>막강파워!</span></span>
                  <em>영어</em>
                  <strong>류지원</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_En03_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle024" class="ssamArea">
                <span class="ssamInfo">
                  <span>전공영어 <span> New, <br/>Paradigm shift</span></span>
                  <em>영어</em>
                  <strong>미쉘김</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_En04_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>수학</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle031" class="ssamArea">
                <span class="ssamInfo teamCase">
                  <span>수학과 합격의 <span>연결고리!</span></span>
                  <em>수학</em>
                  <strong>이정훈/안후상팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Math01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle032" class="ssamArea">
                <span class="ssamInfo">
                  <span>함께 만드는 합격! <span>임용 수학 <br/>러닝메이트</span></span>
                  <em>수학</em>
                  <strong>이정훈</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Math02_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle033" class="ssamArea">
                <span class="ssamInfo">
                  <span>수교론의 정석! <span>완벽 이해!</span></span>
                  <em>수학</em>
                  <strong>안후상</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Math03_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle034" class="ssamArea">
                <span class="ssamInfo">
                  <span>기본부터 고득점까지 <span>모든 것을 충족시키는 <br/>수교론</span></span>
                  <em>수학</em>
                  <strong>김지혜</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Math04_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>음악</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle041" class="ssamArea">
                <span class="ssamInfo teamCase">
                  <span>엘리트 음악교육, 서울대 서정팀!<span></span></span>
                  <em>음악</em>
                  <strong>서정팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Music01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle042" class="ssamArea">
                <span class="ssamInfo">
                  <span>기본적인 사항부터 <br/>핵심 적중 내용까지 <span>체계적인 강의</span></span>
                  <em>음악</em>
                  <strong>서민정</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Music02_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle043" class="ssamArea">
                <span class="ssamInfo">
                  <span>엘리트 음악교육, <span>서울대 서정팀!</span></span>
                  <em>음악</em>
                  <strong>정희원</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Music03_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle044" class="ssamArea">
                <span class="ssamInfo">
                  <span>슬기로운 작곡가 <span>서울대 박서형</span></span>
                  <em>음악</em>
                  <strong>박서형</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Music04_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>미술</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle051" class="ssamArea">
                <span class="ssamInfo teamCase">
                  <span>팀티칭을 통한 <span>미술임용 <br/>완벽분석</span></span>
                  <em>미술</em>
                  <strong>위상팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Art01_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>체육</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle061" class="ssamArea">
                <span class="ssamInfo">
                  <span>MAP구조도를 통한 이해와 암기의 <span>효율적 연결!</span></span>
                  <em>체육</em>
                  <strong>오정환</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Pys01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle062" class="ssamArea">
                <span class="ssamInfo">
                  <span>합격의 KEY! <span>체육 임용 마스터</span></span>
                  <em>체육</em>
                  <strong>김용호</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Pys02_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle063" class="ssamArea">
                <span class="ssamInfo">
                  <span>합격으로 가는 <span>스파르타 학습</span></span>
                  <em>체육</em>
                  <strong>임서윤</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Pys03_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>중국어</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle071" class="ssamArea">
                <span class="ssamInfo teamCase">
                  <span>영역별 전문가의 <span>고품격 명강의!</span></span>
                  <em>중국어</em>
                  <strong>희소 중국어팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Zh01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle072" class="ssamArea">
                <span class="ssamInfo">
                  <span>검증된 중국어 <br/>문법 강의로 <span>정확한 중국어 도출</span></span>
                  <em>중국어</em>
                  <strong>한정은</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Zh02_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle073" class="ssamArea">
                <span class="ssamInfo">
                  <span>풍부한 강의경력으로 <span>이해하기 쉬운 <br/>학습법 제시</span></span>
                  <em>중국어</em>
                  <strong>이해진</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Zh03_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>일본어</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle081" class="ssamArea">
                <span class="ssamInfo">
                  <span>일본어 정통의 내공, <span>완벽 이해의 <br/>수업</span></span>
                  <em>일본어</em>
                  <strong>동소현</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Ja01_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>한문</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle091" class="ssamArea">
                <span class="ssamInfo">
                  <span>합격을 여는 <br/>단 한가지 문, <span>유지사성(有志事成)</span></span>
                  <em>한문</em>
                  <strong>원주용</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_ZhWr01_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>가정</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle101" class="ssamArea">
                <span class="ssamInfo">
                  <span>가정 임용의 <span>절대강자!</span></span>
                  <em>가정</em>
                  <strong>문영은</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Home01_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>도덕윤리</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle111" class="ssamArea">
                <span class="ssamInfo">
                  <span><span>유쾌, <br/>명쾌한 강의</span></span>
                  <em>도덕윤리</em>
                  <strong>김성무</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Mor01_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>미용</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle121" class="ssamArea">
                <span class="ssamInfo">
                  <span>쉽고 재미있게, <span>핵심을 <br/>콕콕!!</span></span>
                  <em>미용</em>
                  <strong>이영미</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Beauty01_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>
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
  name: 'IndexMjmiddle',
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
