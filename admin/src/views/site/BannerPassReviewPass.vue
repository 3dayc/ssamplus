<template lang="html">
	<div>
		<div class="boxBrown msgBtnSet">
			<p class="msg fRed">
				※ 기본적으로 컨텐츠는 게시판 관리 > 합격수기에 등록된 컨텐츠를 사용함<br/>
				※ <합격수기 홈><br/>
				<span class="msg fRed ml10">(1) 상단 노출 컨텐츠는 BEST 합격수기 중에서 6건을 최신순으로 나열하고 2개씩 2초 주기로 자동 롤링함</span><br/>
				<span class="msg fRed ml10">(2) 목록 구성은 BEST 합격수기 중에서 최근 등록된 7번째 건부터 10건을 최신순으로 나열함</span><br/>
				※ <선생님별 합격수기/인터뷰><br/>
				<span class="msg fRed ml10">(1) 상단 노출 컨텐츠는 선생님별 BEST 합격수기 중에서 최근 등록된 6건을 최신순으로 나열하고 2개씩 2초 주기로 자동 롤링함</span><br/>
				<span class="msg fRed ml10">(2) 목록 구성은 BEST 컨텐츠 중 최근 등록된 7번째 건부터 마지막 건까지 최신순으로 먼저 나열하고 &#8594; 일반 컨텐츠를 다음으로 나열하여 목록을 구성함</span>
			</p>
		</div>
		<!-- Popup -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'BannerPassReviewPass',
	data() {
			return {}
	},
	methods: {

	},
	components: {
	},
}
</script>
