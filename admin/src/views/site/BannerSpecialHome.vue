<template lang="html">
	<div>
		<div class="boxBrown msgBtnSet">
			<p class="msg fRed">※ 게시판 관리 > 선생님 게시판 > 선생님 이벤트에서 노출 허용의 컨텐츠를 자동 롤링 주기로 높은 번호를 첫번째 순서로 하여 컨텐츠를 노출함 (6개 단위)</p>
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
  name: 'BannerSpecialHome',
	data() {
			return {}
	},
	methods: {

	},
	components: {
	},
}
</script>
