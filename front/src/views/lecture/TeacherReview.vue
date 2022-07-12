<template lang="html">
  <div>
    <div class="lecContainer">
      <!-- 수강후기가 없을 경우 -->
      <div class="comment noList">
        <div class="commentBox">
          <ul>
            <li>
              <div>
                <em>등록된 수강후기가 없습니다.</em>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- //수강후기가 없을 경우 -->
      <!---->
      <div class="lecContents">
        <div class="subTit">
          <h3>수강후기</h3>
          <span class="listSearch right-po">
            <input type="text" placeholder="제목, 내용으로 검색">
            <button class="btnSearch">검색</button>
          </span>
        </div>
        <!-- 수강후기 List -->
        <div class="reviewList noImgCase">
          <dl :class="{on:isReview01==true}">
            <dt @click="isReview01 = !isReview01">
              <span class="txtBox">
                <span class="name">#음악 서민정 선생님의 국악 기본반</span>
                <span class="tit"><em>[sss******]</em> 국악하면 역시 서쌤인거 같아요! 1~2월 강의 정말 잘들었습니다!!</span>
              </span>
            </dt>
            <transition name="slide">
            <dd v-show="isReview01">
              처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다.<br/>자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.
              <span class="popImgList">
                <img :src="require(`@/assets/images/thumbnail/@tmp_img01.png`)" @click="imgPopTrigger01 = true" alt=""/>
              </span>
            </dd>
            </transition>
          </dl>
          <dl :class="{on:isReview02==true}">
            <dt @click="isReview02 = !isReview02">
              <span class="txtBox">
                <span class="name">#유아 배지윤 선생님의 교직논술 기초반</span>
                <span class="tit"><em>[gus******]</em> 처음으로 도전하는 임용에 선생님의 많은 응원과 가르침이 있었습니다.</span>
              </span>
            </dt>
            <transition name="slide">
            <dd v-show="isReview02">
              처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다.<br/>자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.
              <span class="popImgList">
                <img :src="require(`@/assets/images/thumbnail/@tmp_img02.png`)" @click="imgPopTrigger02 = true" alt=""/>
              </span>
            </dd>
            </transition>
          </dl>
          <dl :class="{on:isReview03==true}">
            <dt @click="isReview03 = !isReview03">
              <span class="txtBox">
                <span class="name">#교육학 권구현 선생님의 2020학년도 합격자 사례발표</span>
                <span class="tit"><em>[Hans******]</em> 임용준비를 하면서, 강사선생님을 선택하는 것 역시 중요하다고 생각했다.</span>
              </span>
            </dt>
            <transition name="slide">
            <dd v-show="isReview03">
              처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다.<br/>자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.
            </dd>
            </transition>
          </dl>
          <dl :class="{on:isReview04==true}">
            <dt @click="isReview04 = !isReview04">
              <span class="txtBox">
                <span class="name">#체육 오정환 선생님의 Map 구조도(내용학) 및 기출문제</span>
                <span class="tit"><em>[2sj******]</em> 처음 들어보는 전공강의였는데 어려운 내용들을 재미있고 쉽게 구조화 시켜 설명해 주셨습니다.</span>
              </span>
            </dt>
            <transition name="slide">
            <dd v-show="isReview04">
              처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다.<br/>자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.
            </dd>
            </transition>
          </dl>
          <dl :class="{on:isReview05==true}">
            <dt @click="isReview05 = !isReview05">
              <span class="txtBox">
                <span class="name">#유아 양재웅 선생님의 유아교육개론</span>
                <span class="tit"><em>[k53******]</em> 임용재수생으로 막막한 논술의 기본을 잡고자 양재웅 선생님 강의를 신청했어요.</span>
              </span>
            </dt>
            <transition name="slide">
            <dd v-show="isReview05">
              처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다.<br/>자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.
            </dd>
            </transition>
          </dl>
          <dl :class="{on:isReview06==true}">
            <dt @click="isReview06 = !isReview06">
              <span class="txtBox">
                <span class="name">#교육학 권구현 선생님의 2020학년도 합격자 사례발표</span>
                <span class="tit"><em>[Hans******]</em> 임용준비를 하면서, 강사선생님을 선택하는 것 역시 중요하다고 생각했다.</span>
              </span>
            </dt>
            <transition name="slide">
            <dd v-show="isReview06">
              처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다.<br/>자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.
            </dd>
            </transition>
          </dl>
          <dl :class="{on:isReview07==true}">
            <dt @click="isReview07 = !isReview07">
              <span class="txtBox">
                <span class="name">#체육 오정환 선생님의 Map 구조도(내용학) 및 기출문제</span>
                <span class="tit"><em>[2sj******]</em> 처음 들어보는 전공강의였는데 어려운 내용들을 재미있고 쉽게 구조화 시켜 설명해 주셨습니다.</span>
              </span>
            </dt>
            <transition name="slide">
            <dd v-show="isReview07">
              처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다.<br/>자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.
            </dd>
            </transition>
          </dl>
          <dl :class="{on:isReview08==true}">
            <dt @click="isReview08 = !isReview08">
              <span class="txtBox">
                <span class="name">#유아 양재웅 선생님의 유아교육개론</span>
                <span class="tit"><em>[k53******]</em> 임용재수생으로 막막한 논술의 기본을 잡고자 양재웅 선생님 강의를 신청했어요.</span>
              </span>
            </dt>
            <transition name="slide">
            <dd v-show="isReview08">
              처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다.<br/>자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.
            </dd>
            </transition>
          </dl>
          <dl :class="{on:isReview09==true}">
            <dt @click="isReview09 = !isReview09">
              <span class="txtBox">
                <span class="name">#체육 오정환 선생님의 Map 구조도(내용학) 및 기출문제</span>
                <span class="tit"><em>[2sj******]</em> 처음 들어보는 전공강의였는데 어려운 내용들을 재미있고 쉽게 구조화 시켜 설명해 주셨습니다.</span>
              </span>
            </dt>
            <transition name="slide">
            <dd v-show="isReview09">
              처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다.<br/>자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.
            </dd>
            </transition>
          </dl>
          <dl :class="{on:isReview10==true}">
            <dt @click="isReview10 = !isReview10">
              <span class="txtBox">
                <span class="name">#유아 양재웅 선생님의 유아교육개론</span>
                <span class="tit"><em>[k53******]</em> 임용재수생으로 막막한 논술의 기본을 잡고자 양재웅 선생님 강의를 신청했어요.</span>
              </span>
            </dt>
            <transition name="slide">
            <dd v-show="isReview10">
              처음으로 도전하는 임용에 교수님께서 많은 응원과 가르침이 있어 조금 더 집중해서 강의를 들을 수 있었습니다.<br/>자세히 하나씩 설명해주셔서 공부하는데 쉽게 알 수 있어 좋았습니다.
            </dd>
            </transition>
          </dl>
        </div>
        <!-- //수강후기 List -->
        <div class="paging">
          <Paginate v-if="!this.mobile" />
          <div class="moreBtnWrap" v-if="this.mobile">
            <button class="mobileMore">더보기</button>
          </div>
        </div>
      </div>
      <!--//-->
    </div>

    <!-- Popup -->
    <ImgPopup v-if='imgPopTrigger01' @close="imgPopTrigger01 = false">
      <div slot="modalbody">
        <img :src="require(`@/assets/images/thumbnail/@tmp_img01.png`)" alt=""/>
      </div>
    </ImgPopup>
    <ImgPopup v-if='imgPopTrigger02' @close="imgPopTrigger02 = false">
      <div slot="modalbody">
        <img :src="require(`@/assets/images/thumbnail/@tmp_img02.png`)" alt=""/>
      </div>
    </ImgPopup>
    <!-- //Popup -->
  </div>
</template>
<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'TeacherReview',
  components: {
  },
  data() {
    return {
      imgPopTrigger01: false,
      imgPopTrigger02: false,
      isReview01: true,
      isReview02: false,
      isReview03: false,
      isReview04: false,
      isReview05: false,
      isReview06: false,
      isReview07: false,
      isReview08: false,
      isReview09: false,
      isReview10: false,
    }
  },
  mounted() {
  },
}
</script>
