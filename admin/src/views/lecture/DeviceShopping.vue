<template lang="html">
	<div>
		<div class="pageTit">
			<h2>학습기기 주문배송 관리</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/deviceMgt">학습기기 관리</router-link><em>학습기기 주문배송 관리</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="goodsShopping"><!-- class 없어도 유지 -->
					<!-- tab-wrap -->
					<div class="tabwrap">
						<!-- tab -->
						<div class="tabBack">
							<div class="tabNav">
								<nav>
									<ul>
										<li :class="{on:shoppingTab===0}"><button @click="shoppingTab = 0">북센 배송</button></li>
										<li :class="{on:shoppingTab===1}"><button @click="shoppingTab = 1">학원 배송</button></li>
									</ul>
								</nav>
							</div>
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="shoppingTab == 0" class="tabData">
								<DeviceShoppingOnline />
              </div>
              <div v-if="shoppingTab == 1" class="tabData">
								<DeviceShoppingDirect />
              </div>
						</div>
					</div>
					<!-- //tab-wrap -->
				</div>
				<!-- //page layout -->
			</article>
		</div>


	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import DeviceShoppingOnline from '@/views/lecture/DeviceShoppingOnline.vue';
import DeviceShoppingDirect from '@/views/lecture/DeviceShoppingDirect.vue';

export default {
  mixins: [Mixin],
  name: 'DeviceShopping',
	data() {
		return {
			shoppingTab: 0,
		}
	},
	methods: {
	},
	components: {
		DeviceShoppingOnline,
		DeviceShoppingDirect
	},
}
</script>

<style lang="css" scoped>
</style>
