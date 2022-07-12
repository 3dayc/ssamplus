<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="specialEvent">
          <!-- 서브 타이틀 -->
          <div class="subTit lineforM">
            <h3>너는 지금 쌤며든다, 선생님 이벤트</h3>
          </div>
          <div class="subTit for_search wdNew">
            <span class="search_box">
              <!--셀렉트 박스 내용은 변경 안함.-->
              <!-- <multiselect 
                class="baseMultiSelect" 
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
              <span class="listSearch">
                <input type="text" placeholder="제목, 내용으로 검색">
                <!-- <button class="btnSearch">검색</button> -->
                <router-link to="/mkup/special/event/search" class="btnSearch">검색</router-link>
              </span>
            </span>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 썸네일 리스트 -->
          <ul class="thumbnailList case3">
            <li class="new"> <!-- 새글일 경우 new 클래스 추가 -->
              <router-link to="/mkup/special/event/view1">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent01_1.png`)" alt=""/>
                </span>
                <span class="txtBox">
                  <span>[유아]</span>
                  <strong>교재 무료증정 이벤트</strong>
                  <i>2021-02-09 ~ 2021-03-02</i>
                </span>
              </router-link>
            </li>
            <li class="new"> <!-- 새글일 경우 new 클래스 추가 -->
              <router-link to="/mkup/special/event/view2">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent02_1.png`)" alt=""/>
                </span>
                <span class="txtBox"><span>[교육학 김현]</span><strong>유투브 채널 댓글 이벤트</strong><i>2021-02-09 ~ 2021-03-02</i></span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/main/eventview3">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent03_1.png`)" alt=""/>
                </span>
                <span class="txtBox"><span>[유아 배지윤]</span><strong>전원증정 구독 이벤트</strong><i>2021-02-09 ~ 2021-03-02</i></span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/special/event/view4">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent04_1.png`)" alt=""/>
                </span>
                <span class="txtBox"><span>[국어 송헌&김준팀]</span><strong>3~4월 신규 강의 할인 이벤트</strong><i>2021-02-09 ~ 2021-03-02</i></span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/special/event/view2">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent05_1.png`)" alt=""/>
                </span>
                <span class="txtBox"><span>[가정 문영은]</span><strong>3~4월 신규 강의 할인 이벤트</strong><i>2021-02-09 ~ 2021-03-02</i></span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/main/eventview3">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent06_1.png`)" alt=""/>
                </span>
                <span class="txtBox"><span>[유아 배지윤]</span><strong>3~4월 신규 강의 할인 이벤트</strong><i>2021-02-09 ~ 2021-03-02</i></span>
              </router-link>
            </li>
            <!-- <li>
              <router-link to="/mkup/special/event/view1">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent07.png`)" alt=""/>
                </span>
                <span class="txtBox"><span>[음악 서민정]</span><strong>3~4월 신규 강의 할인 이벤트</strong></span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/special/event/view2">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent08.png`)" alt=""/>
                </span>
                <span class="txtBox"><span>[국어 박노송]</span><strong>3~4월 신규 강의 할인 이벤트</strong></span>
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/main/eventview3">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent09.png`)" alt=""/>
                </span>
                <span class="txtBox"><span>[한문 원주용]</span><strong>3~4월 신규 강의 할인 이벤트</strong></span>
              </router-link>
            </li>
            <li class="mCase">
              <router-link to="/mkup/main/eventview3">
                <span class="imgBox">
                  <img :src="require(`@/assets/images/thumbnail/@tmp_ssamEvent09.png`)" alt=""/>
                </span>
                <span class="txtBox"><span>[한문 원주용]</span><strong>3~4월 신규 강의 할인 이벤트</strong></span>
              </router-link>
            </li> -->
            <!-- <li class="noList">게시글이 없습니다.</li> 게시글이 없을 경우 -->
          </ul>
          <!-- //썸네일 리스트 -->
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
  name: 'Event',
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
<style lang="css" scoped>
#wrapBack .specialEvent .thumbnailList li.mCase {display:none;}
#wrapBack.mDevice .specialEvent .thumbnailList li.mCase {display:block;}
</style>
