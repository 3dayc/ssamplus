<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- TopBanner -->
    <div class="topArea">
      <!-- <div class="topVisual realHitCase">
        <img :src="require(`@/assets/images/img_special_real.png`)" alt="" v-if="!this.mobile"/>
        <img :src="require(`@/assets/images/m/img_special_real.png`)" alt="" v-else-if="this.mobile"/>
      </div> 이미지 배너 -->
    </div>
    <!-- //TopBanner -->
    <!-- container -->
    <div id="container">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="realHit">
          <!-- 서브 타이틀 -->
          <div class="subTit lineforM">
            <h3>믿고 듣는 쌤플러스, 리얼 적중</h3>
          </div>
          <div class="subTit for_search wdNew">
            <span class="search_box">
              <span class="selectSet hf">
                <select name="" id="">
                  <option value="">분류</option>
                  <option value="">전체</option>
                </select>
              </span>
              <span class="selectSet hf">
                <select name="" id="">
                  <option value="">전공</option>
                  <option value="">유아</option>
                  <option value="">교육학</option>
                  <option value="">국어</option>
                  <option value="">수학</option>
                  <option value="">중국어</option>
                  <option value="">음악</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="">선생님</option>
                  <option value="">배지윤</option>
                  <option value="">김현</option>
                  <option value="">송헌</option>
                  <option value="">이정훈/안후상</option>
                  <option value="">한정은</option>
                  <option value="">서정팀</option>
                </select>
              </span>
            </span>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 교육학 -->
          <div class="sbjBox">
            <h4>교육학</h4>
            <ul>
              <li>
                <router-link to="/mkup/special/hit/view1">
                  <strong>김현 <em>선생님</em></strong>
                  <span class="txt">점수를 키우기 위한 교육학 완벽한 기본개념 정립으로 막힘 없는 답안지 작성 가능!</span>
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamSpecial01.png`)" alt=""/>
                </router-link>
              </li>
              <li>
                <router-link to="/mkup/special/hit/view4">
                  <strong>권구현 <em>선생님</em></strong>
                  <span class="txt">EBS 교육학 논술 전문가 교육학 이론 실제를 적용하는 강의!</span>
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamSpecial02.png`)" alt=""/>
                </router-link>
              </li>
              <li>
                <router-link to="/mkup/special/hit/view1">
                  <strong>윤중샘 <em>선생님</em></strong>
                  <span class="txt">최단시간, 최대효율! 교육학 점수가 샘솟는 샘표 비결!</span>
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamSpecial03.png`)" alt=""/>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- //교육학 -->
          <!-- 유아 -->
          <div class="sbjBox">
            <h4>유아</h4>
            <ul>
              <li>
                <router-link to="/mkup/special/hit/view1">
                  <strong>배지윤 <em>선생님</em></strong>
                  <span class="txt">결과가 다른 시작, 기대한다면 합격예감!</span>
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamSpecial04.png`)" alt=""/>
                </router-link>
              </li>
              <li>
                <router-link to="/mkup/special/hit/view1">
                  <strong>이동건 <em>선생님</em></strong>
                  <span class="txt">핵심 콕! 이해 쏙!</span>
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamSpecial05.png`)" alt=""/>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- //유아 -->
          <!-- 국어 -->
          <div class="sbjBox">
            <h4>국어</h4>
            <ul>
              <li>
                <router-link to="/mkup/special/hit/view1">
                  <strong>박노송 <em>선생님</em></strong>
                  <span class="txt">전공 국어<br/>神의 한수!</span>
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamSpecial07.png`)" alt=""/>
                </router-link>
              </li>
              <li>
                <router-link to="/mkup/special/hit/view1">
                  <strong>송헌 <em>선생님</em></strong>
                  <span class="txt">출제자의 눈으로 국어의 핵심을 찌르다!</span>
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamSpecial08.png`)" alt=""/>
                </router-link>
              </li>
              <li>
                <router-link to="/mkup/special/hit/view1">
                  <strong>김준 <em>선생님</em></strong>
                  <span class="txt">문법을 관통하는 시원하고 거침없는 질주</span>
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamSpecial09.png`)" alt=""/>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- //국어 -->
          <!-- 중국어 -->
          <div class="sbjBox">
            <h4>중국어</h4>
            <ul>
              <li>
                <router-link to="/mkup/special/hit/view1">
                  <strong>희소중국어팀</strong>
                  <span class="txt">영역별 전문가의 고품격 명강의</span>
                </router-link>
              </li>
              <li>
                <router-link to="/mkup/special/hit/view1">
                  <strong>한정은 <em>선생님</em></strong>
                  <span class="txt">검증된 중국어 문법강의로 정확한 중국어 도출</span>
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamSpecial01.png`)" alt=""/>
                </router-link>
              </li>
              <li>
                <router-link to="/mkup/special/hit/view1">
                  <strong>이해진 <em>선생님</em></strong>
                  <span class="txt">풍부한 강의 경력으로 이해하기 쉬운 학습법 제시!</span>
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamSpecial02.png`)" alt=""/>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- //중국어 -->
          <!-- 미술 -->
          <div class="sbjBox">
            <h4>미술</h4>
            <ul>
              <li>
                <router-link to="/mkup/special/hit/view5">
                  <strong>위상팀</strong>
                  <span class="txt">결과가 다른 시작, 기대한다면 합격예감!</span>
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamSpecial10.png`)" alt=""/>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- //미술 -->
          <!-- 도덕윤리 -->
          <div class="sbjBox">
            <h4>도덕윤리</h4>
            <ul>
              <li>
                <router-link to="/mkup/special/hit/view6">
                  <strong>김성무 <em>선생님</em></strong>
                  <span class="txt">결과가 다른 시작, 기대한다면 합격예감!</span>
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamSpecial11.png`)" alt=""/>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- //도덕윤리 -->
          <!-- 전문상담 -->
          <div class="sbjBox">
            <h4>전문상담</h4>
            <ul>
              <li>
                <router-link to="/mkup/special/hit/view7">
                  <strong>이진영 <em>선생님</em></strong>
                  <span class="txt">결과가 다른 시작, 기대한다면 합격예감!</span>
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamSpecial12.png`)" alt=""/>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- //전문상담 -->
          <!-- 보건 -->
          <div class="sbjBox">
            <h4>보건</h4>
            <ul>
              <li>
                <router-link to="/mkup/special/hit/view8">
                  <strong>임수진 <em>선생님</em></strong>
                  <span class="txt">결과가 다른 시작, 기대한다면 합격예감!</span>
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamSpecial13.png`)" alt=""/>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- //보건 -->
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
  name: 'RealHit',
  data() {
    return {
      multiValue2: null,
      optionsMulti2: [
        {
          dep1: '교육학',
          dep2: [
            { name: '교육학', category: 'subject01' },
          ]
        },
        {
          dep1: '논술·면접',
          dep2: [
            { name: '면접', category: 'subject02' },
            { name: '논술', category: 'subject02' },
          ]
        },
        {
          dep1: '유아',
          dep2: [
            { name: '유아', category: 'subject03' },
          ]
        },
        {
          dep1: '초등',
          dep2: [
            { name: '초등', category: 'subject04' },
          ]
        },
        {
          dep1: '중등',
          dep2: [
            { name: '국어', category: 'subject05' },
            { name: '영어', category: 'subject05' },
            { name: '수학교육론', category: 'subject05' },
          ]
        }
      ],
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
