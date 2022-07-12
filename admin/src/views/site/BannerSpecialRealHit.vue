<template lang="html">
	<div>
		<div class="boxBrown msgBtnSet">
			<p class="msg fRed">※ 사이트 관리 > 배너관리 > 메인화면 > 9_리얼적중 에서 등록된 컨텐츠를 자동 롤링 주기로 노출함 (노출되는 컨텐츠의 개수 제한은 없으며 높은 번호를 첫번째 순서로 하여 컨텐츠를 노출함)</p>
		</div>
    <div class="subTit">
      <h3>자동 롤링 주기</h3>
      <span class="selectSet ml10 mr5">
        <select name="" id="">
          <option value="no" class="label">선택</option>
          <option value="">0</option>
          <option value="">1</option>
          <option value="">1.5</option>
          <option value="" selected>2</option>
          <option value="">2.5</option>
          <option value="">3</option>
          <option value="">3.5</option>
          <option value="">4</option>
          <option value="">4.5</option>
          <option value="">5</option>
        </select>
      </span> 초
    </div>
		<!-- Popup -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'BannerSpecialRealHit',
	data() {
			return {}
	},
	methods: {

	},
	components: {
	},
}
</script>
