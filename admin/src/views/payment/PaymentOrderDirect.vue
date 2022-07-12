<template lang="html">
    <div id="windowLayout">
      <div class="winHeader">
        <h1>주문정보 및 환불처리</h1>
      </div>
      <div class="winContent">

				<!-- tab-wrap -->
				<div class="tabwrap">
					<!-- tab -->
					<div class="tabBack">
						<div class="tabNav">
							<nav>
								<ul class="sub">
									<li :class="{on:paymentTab===0}"><button @click="paymentTab = 0">상세정보</button></li>
									<li :class="{on:paymentTab===1}"><button @click="paymentTab = 1">메모 <em>(2)</em></button></li>
									<li :class="{on:paymentTab===2}"><button @click="paymentTab = 2">전액환불</button></li>
									<li :class="{on:paymentTab===3}"><button @click="paymentTab = 3">부분환불</button></li>
								</ul>
							</nav>
						</div>
					</div>
					<!--// tab -->
					<div class="tabLayout boxGray">
            <!-- 상세정보 -->
            <div v-if="paymentTab == 0" class="tabData">
              <PaymentOrderInfo />
            </div>
            <!-- //상세정보 -->
            <!-- 메모 -->
            <div v-if="paymentTab == 1" class="tabData">
              <PaymentOrderMemo />
            </div>
            <!-- //메모 -->
            <!-- 전액환불 -->
            <div v-if="paymentTab == 2" class="tabData">
              <PaymentOrderRefund />
            </div>
            <!-- //전액환불 -->
            <!-- 부분환불 -->
            <div v-if="paymentTab == 3" class="tabData">
              <PaymentOrderPartRefundDirect />
            </div>
            <!-- //부분환불 -->
					</div>
				</div>
				<!-- //tab-wrap -->
  		</div>
    </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import PaymentOrderInfo from '@/views/payment/PaymentOrderInfo.vue';
import PaymentOrderMemo from '@/views/payment/PaymentOrderMemo.vue';
import PaymentOrderRefund from '@/views/payment/PaymentOrderRefund.vue';
import PaymentOrderPartRefundDirect from '@/views/payment/PaymentOrderPartRefundDirect.vue';

export default {
  mixins: [Mixin],
  name: 'PaymentOrder',
  data() {
    return {
      paymentTab: 0,
    }
  },
  components: {
    PaymentOrderInfo,
    PaymentOrderMemo,
    PaymentOrderRefund,
    PaymentOrderPartRefundDirect
  }
}
</script>

<style lang="css" scoped>
</style>
