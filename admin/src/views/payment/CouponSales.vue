<template lang="html">
  <div>
    <div class="pageTit">
      <h2>쿠폰 매출 현황</h2>
      <span><router-link to="/mkup/payment/paymentMgt">결제</router-link><router-link to="/mkup/payment/couponMgt">쿠폰 관리</router-link><em>쿠폰 매출 현황</em></span>
    </div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="couponSales">
          <div class="tabwrap">
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <ul>
                    <li :class="{on:couponSalesTab===0}">
                      <button @click="couponSalesTab = 0">요약</button>
                    </li>
                    <li :class="{on:couponSalesTab===1}">
                      <button @click="couponSalesTab = 1">연도별/월별</button>
                    </li>
                    <li :class="{on:couponSalesTab===2}">
                      <button @click="couponSalesTab = 2">카테고리별</button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
              <!--// tab -->
            <div class="tabLayout">
              <div v-if="couponSalesTab == 0" class="tabData">
                <CouponSalesSummary />
              </div>
              <div v-if="couponSalesTab == 1" class="tabData">
                <CouponSalesTerm />
              </div>
              <div v-if="couponSalesTab == 2" class="tabData">
                <CouponSalesKind />
              </div>
            </div>
          </div>
        </div>
        <!-- //page layout -->
      </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import CouponSalesSummary from '@/views/payment/CouponSalesSummary.vue'
import CouponSalesTerm from '@/views/payment/CouponSalesTerm.vue'
import CouponSalesKind from '@/views/payment/CouponSalesKind.vue'

export default {
    mixins: [Mixin],
    name: 'CouponSales',
    data() {
        return {
            couponSalesTab: 0,
        }
    },
    methods: {

    },
    components: {
        CouponSalesSummary,
        CouponSalesTerm,
        CouponSalesKind,
    },
}
</script>

<style lang="css" scoped>
</style>
