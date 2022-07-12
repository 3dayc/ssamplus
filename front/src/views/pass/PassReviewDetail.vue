<template lang="html">
  <div>
    <div class="boardDetail">
      <!-- 제목영역 -->
      <div class="boardHead">
        <strong>자신의 환경을 충분히 고려하고 스터디를 활용하세요.</strong>
        <div class="boardInfo">
          <em>작성자 : <i>Hor*****</i></em>
          <em>등록일 : <i>2021-05-19</i></em>
          <em>조회수 : <i>1,222</i></em>
        </div>
      </div>
      <!-- //제목영역 -->
      <!-- 합격수기 설문조사 상세내용 -->
      <div class="boardPassingView">
        <div class="tableList">
          <dl>
            <dt>합격연도</dt>
            <dd>2021년</dd>
          </dl>
          <dl>
            <dt>준비기간</dt>
            <dd>1년</dd>
          </dl>
          <dl v-if="!this.mobile">
            <dt>과목</dt>
            <dd>중국어</dd>
          </dl>
          <dl v-if="!this.mobile">
            <dt>지역</dt>
            <dd>경기</dd>
          </dl>
          <dl v-if="this.mobile">
            <dt>과목 / 지역</dt>
            <dd>중국어 / 경기</dd>
          </dl>
          <dl class="last">
            <dt>추천 선생님</dt>
            <dd><router-link to="/mkup/lecture/teacher" class="btnTcHomeName">희소 중국어팀</router-link></dd>
          </dl>
        </div>
        <!---->
        <div class="monthData">
          <strong>1. 시기별 교육학 학습방법</strong>
          <dl>
            <dt>1~2월</dt>
            <dd>원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.</dd>
          </dl>
          <dl>
            <dt>3~4월</dt>
            <dd>
              원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.
              늦게 합류하게 되었고, 인강으로 우선 시작하여 3월부터 직강을 다니기 시작했습니다. 아르바이트는 학교 근로생으로 8월까지 근무하였습니다.
            </dd>
          </dl>
          <dl>
            <dt>5~6월</dt>
            <dd>
              원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.
              늦게 합류하게 되었고, 인강으로 우선 시작하여 3월부터 직강을 다니기 시작했습니다. 아르바이트는 학교 근로생으로 8월까지 근무하였습니다.
            </dd>
          </dl>
          <dl>
            <dt>7~8월</dt>
            <dd>
              원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.
              늦게 합류하게 되었고, 인강으로 우선 시작하여 3월부터 직강을 다니기 시작했습니다. 아르바이트는 학교 근로생으로 8월까지 근무하였습니다.
            </dd>
          </dl>
          <dl>
            <dt>9~11월</dt>
            <dd>
              원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.
              늦게 합류하게 되었고, 인강으로 우선 시작하여 3월부터 직강을 다니기 시작했습니다. 아르바이트는 학교 근로생으로 8월까지 근무하였습니다.
            </dd>
          </dl>
        </div>
        <div class="monthData">
          <strong>2. 시기별 전공 학습방법</strong>
          <dl>
            <dt>1~2월</dt>
            <dd>원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.</dd>
          </dl>
          <dl>
            <dt>3~4월</dt>
            <dd>원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.</dd>
          </dl>
          <dl>
            <dt>5~6월</dt>
            <dd>원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.</dd>
          </dl>
          <dl>
            <dt>7~8월</dt>
            <dd>원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.</dd>
          </dl>
          <dl>
            <dt>9~11월</dt>
            <dd>
              원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.
              늦게 합류하게 되었고, 인강으로 우선 시작하여 3월부터 직강을 다니기 시작했습니다. 아르바이트는 학교 근로생으로 8월까지 근무하였습니다.
            </dd>
          </dl>
        </div>
      </div>
      <!-- //합격수기 설문조사 상세내용 -->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PassReviewDetail',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>
