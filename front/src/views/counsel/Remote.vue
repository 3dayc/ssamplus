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
        <div class="remote">
          <!-- 서브 타이틀 -->
          <div class="subTit thickLine">
            <h3>원격고객 지원</h3>
          </div>
          <!-- //서브 타이틀 -->
          <div class="mainThis">
            <p>
              <strong>이럴 때 요청하세요!</strong>
              <span>동영상 재생이 원활하지 않을 때, FAQ나 1:1 게시판 상담으로 문제 해결이 안 되는 경우</span>
              <span>컴퓨터에 미숙하여 전화상담으로 문제 해결이 어려운 경우</span>
            </p>
          </div>
          <div class="remoteStep">
            <h4>원격 고객지원 이용 STEP</h4>
            <ul>
              <li class="step01">
                <a href="tel:1544-0678">1544-0678</a>
                <span>
                  <strong>원격신청</strong>
                  전화 상담으로 원격 지원을 요청합니다.
                </span>
              </li>
              <li class="step02">
                <span>
                  <strong>상담안내</strong>
                  상담원이 오류 증상 확인 후 해당 사항에 대한 안내조치를 드립니다.
                </span>
              </li>
              <li class="step03">
                <span>
                  <strong>원격접속</strong>
                  상담원의 안내에 따라 버튼을 클릭하면, 상담원이 나의 PC를 제어 할 수 있습니다.
                </span>
              </li>
            </ul>
          </div>
          <span class="hrLine"></span>
          <div class="remoteSupport">
            <h4>원격 고객지원으로 문제 해결</h4>
            <div class="tableList">
              <dl class="item0">
                <dt>이용시간</dt>
                <dd>
                  <p class="time"><span>평일</span>07:30~21:00</p>
                  <p class="time"><span>토요일</span>08:30~18:00</p>
                </dd>
              </dl>
              <dl class="item1">
                <dt>이용안내</dt>
                <dd>본 서비스는 회원님의 동의를 통해서만 실행 가능하며, 원격 제어 중에 어떠한 개인정보도 수집되지 않습니다.</dd>
              </dl>
              <dl class="item2">
                <dt>이용하기</dt>
                <dd><a href="http://www.367.co.kr/" target="_blank" class="btnM">원격 고객지원 시작하기</a></dd>
              </dl>
            </div>
          </div>
          <div class="otherService">
            <h4>이런 서비스는 어떠세요?</h4>
            <div>
              <a href="https://pf.kakao.com/_WPrLl" target="_blank" class="service01">빠른 문의</a>
              <a href="https://pf.kakao.com/_qhFuj" target="_blank" class="service02">챗봇 상담</a>
              <router-link to="/mkup/counsel/bbswrite" class="service03">1:1 게시판 상담</router-link>
              <router-link to="/mkup/counsel/faq" class="service04">자주 하는 질문</router-link>
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
  name: 'Remote',
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
