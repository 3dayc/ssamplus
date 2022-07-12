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
        <div class="referencePrevious">
          <div class="subTit">
            <h3>기출문제</h3>
            <span class="right-po">
              <span class="selectSet">
                <select name="" id="">
                  <option value="">연도</option>
                  <option value="">2022</option>
                </select>
              </span>
              <!-- <multiselect
                class="baseMultiSelect ml10" 
                v-model="multiValue2" 
                :options="optionsMulti2" 
                :multiple="false" 
                :close-on-select="true" 
                group-values="dep2" 
                group-label="dep1" 
                :group-select="false" 
                :searchable="false"
                placeholder="과목" 
                track-by="name" 
                label="name">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
              </multiselect> -->
              <span class="selectSet">
                <select name="" id="">
                  <option value="">분류</option>
                  <option value="">전체</option>
                </select>
              </span>
              <span class="selectSet">
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
              <span class="listSearch ml10">
                <input type="text" placeholder="제목, 내용으로 검색" />
                <button class="btnSearch">검색</button>
              </span>
            </span>
          </div>
          <!-- 반응형 목록 -->
          <div class="resTls">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem item0">연도</span>
              <span class="lgItem item1">전공</span>
              <span class="lgItem">제목</span>
              <span class="lgItem item2">파일</span>
              <span class="lgItem item3">조회수</span>
              <span class="lgItem item4">작성일</span>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul>
                <!--Loop-->
                <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <!--//Loop-->
                <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid new">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid new">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
                </li>
                <li class="listGrid new">
                  <span class="lgItem item0">2022</span>
                  <span class="lgItem item1">유아·초등·특수</span>
                  <router-link to="/mkup/exam/reference/previous/view" class="lgItem tL">
                    <span class="tit">2021학년도 중등 임용시험 1차 시험 중등특수 문제</span>
                  </router-link>
                  <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
                  <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
                  <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
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
  name: 'ReferencePrevious',
  components: {
  },
  data() {
    return {
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
      multiValue2: null,
      
    }
  },
  methods: {
  }
}
</script>
