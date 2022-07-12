<template>
  <div id="mobileFooter" :class="buyCaseClass">
    <div class="footTop">
      <strong><img :src="require(`@/assets/images/i_logo_footer_mobile.png`)" alt="KGEDUONE" /></strong>
      <button class="btnFooterMore" @click="footerTxtTrigger = !footerTxtTrigger" :class="{ on:footerTxtTrigger }">(주) 케이지에듀원</button>
      <button class="btnTop" @click="scrollToTop()">TOP</button>
    </div>
    <div class="footTxt" v-if="footerTxtTrigger">
      <ul>
        <li>상호명 : (주)케이지에듀원</li>
        <li>대표자 : 이상준</li>
        <li>주소 : 서울특별시 중구 통일로 92 케이지타워 12층</li>
        <li>사업자등록번호 : 119-81-39002</li>
        <li>통신판매업 신고번호 : 제 03-570-232호 쌤플러스 원격평생교육시설</li>
        <li>개인정보 관리 책임자 : 설동욱 sdw9400@kggroup.co.kr</li>
      </ul>
      <ul>
        <li>Tel : 1544-0678 <em>/</em> Fax : 02-814-7600</li>
      </ul>
    </div>
    <div class="footNav">
      <span class="links">
        <button @click="agreePopTrigger = true">이용약관</button>
        <button @click="agreePopTrigger = true" class="lighten">개인정보처리방침</button>
        <router-link to="/mkup/counsel/index">상담센터</router-link>
      </span>
    </div>
    <small>Copyright ⓒ KG Eduone. All rights reserved.</small>

		<!-- 동의 본문 팝업 Popup -->
		<Popup v-if='agreePopTrigger' @close="agreePopTrigger = false" class="agreePop">
			<template slot="modalbody">
				<button @click="agreePopTrigger = false" class="modalClose">close</button>
				<!-- tab-wrap2 -->
				<div class="tabwrap">
					<!-- tab -->
					<div class="tabBack">
						<div class="tabNav">
							<nav>
								<ul class="lineTab">
									<li :class="{on:agreetTab===0}"><button @click="agreetTab = 0">이용약관</button></li>
									<li :class="{on:agreetTab===1}"><button @click="agreetTab = 1">개인정보 수집 및 이용약관</button></li>
									<li :class="{on:agreetTab===2}"><button @click="agreetTab = 2">SNS 마케팅 수신동의</button></li>
									<li :class="{on:agreetTab===3}"><button @click="agreetTab = 3">이메일 마케팅 수신동의</button></li>
								</ul>
							</nav>
						</div>
					</div>
					<!--// tab -->
					<div class="tabLayout">
						<div v-if="agreetTab == 0" class="tabData" :key="agreetTab"><PolicyService /></div>
						<div v-if="agreetTab == 1" class="tabData"><PolicyPrivacy /></div>
						<div v-if="agreetTab == 2" class="tabData"><PolicySms /></div>
						<div v-if="agreetTab == 3" class="tabData"><PolicyEmail /></div>
					</div>
				</div>
				<!-- //tab-wrap -->
			</template>
		</Popup>
		<!-- 동의 본문 팝업 Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import Popup from '@/views/include/Popup.vue';
import PolicyService from '@/views/main/PolicyService.vue';
import PolicyPrivacy from '@/views/main/PolicyPrivacy.vue';
import PolicySms from '@/views/main/PolicySms.vue';
import PolicyEmail from '@/views/main/PolicyEmail.vue';

export default {
  name: 'MobileFooter',
  components: {
    Popup,
		PolicyService,
		PolicyPrivacy,
		PolicySms,
		PolicyEmail,
  },
  data() {
    return {
      footerTxtTrigger: false,
      buyCaseClass:'',
			agreePopTrigger: false,
			agreetTab: 0,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    footerBottom(url) {
      if (url.includes('/mkup/lecture/teacher') || url.includes('/order') || url.includes('/basket') || url.includes('/book/view') || url.includes('/device/view') || url.includes('/goods/view')) {
        this.buyCaseClass = 'buyCase';
      } else {
         this.buyCaseClass = '';
      }
    }
  },
  watch: {
    $route(to, from) {
      this.footerBottom(to.path);
    }
  },
  mounted() {
    this.footerBottom(window.location.pathname);
  }
};
</script>
