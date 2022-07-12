<template>
  <!-- header -->
  <div id="header">
    <header>
      <div class="back">
        <span class="snbLogo"><img :src="require(`@/assets/images/i_logo.png`)" alt="KG에듀원 교원임용 희소/쌤플러스" /></span>
        <div class="globalNav">
          <ul>
            <li :class="{on:gnb01}"><router-link to="/mkup/statistics/visitSite">통계</router-link></li>
            <li :class="{on:gnb02}"><router-link to="/mkup/member/userMgt">회원/선생님</router-link></li><!-- 2021-07-14 메뉴명 변경 -->
            <li :class="{on:gnb03}"><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link></li>
            <li :class="{on:gnb04}"><router-link to="/mkup/payment/paymentMgt">결제</router-link></li>
            <li :class="{on:gnb05}"><router-link to="/mkup/mocktest/multiTest">모의고사 관리</router-link></li>
            <li :class="{on:gnb06}"><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link></li>
            <li :class="{on:gnb07}"><router-link to="/mkup/site/subjectMgt">사이트 관리</router-link></li>
            <li :class="{on:gnb08}"><router-link to="/mkup/message/smsLms">메시지 관리</router-link></li>
            <li :class="{on:gnb09}"><router-link to="/mkup/manager/accountManager">관리자</router-link></li>
            <li :class="{on:gnb10}"><router-link to="/mkup/school/userSale">학원 관리</router-link></li>
          </ul>
        </div>
      </div>
    </header>
  </div>
  <!-- //header -->
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      gnb01: false,
      gnb02: false,
      gnb03: false,
      gnb04: false,
      gnb05: false,
      gnb06: false,
      gnb07: false,
      gnb08: false,
      gnb09: false,
      gnb10: false,
    }
  },
  methods: {
    gnbChange(url) {
      this.gnb01 = false;
      this.gnb02 = false;
      this.gnb03 = false;
      this.gnb04 = false;
      this.gnb05 = false;
      this.gnb06 = false;
      this.gnb07 = false;
      this.gnb08 = false;
      this.gnb09 = false;
      this.gnb10 = false;

      if (url.includes('/statistics/')) this.gnb01 = true;
      else if(url.includes('/member/')) this.gnb02 = true;
      else if(url.includes('/lecture/')) this.gnb03 = true;
      else if(url.includes('/payment/')) this.gnb04 = true;
      else if(url.includes('/mocktest/')) this.gnb05 = true;
      else if(url.includes('/bbs/')) this.gnb06 = true;
      else if(url.includes('/site/')) this.gnb07 = true;
      else if(url.includes('/message/')) this.gnb08 = true;
      else if(url.includes('/manager/')) this.gnb09 = true;
      else if(url.includes('/school/')) this.gnb10 = true;

    },
  },
  watch: {
    $route(to, from) {
      this.gnbChange(to.path);
    }
  },
  mounted() {
    this.gnbChange(window.location.pathname);
  }

};
</script>
