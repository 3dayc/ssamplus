<template lang="html">
  <div>
    <div class="pageTit">
      <h2>매출현황</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/indicatorAnnual">결산</router-link><em>결산</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="indicatorMgt"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:accountMgtTab===0}">
                    <button @click="accountMgtTab = 0">결제 로데이터</button>
                  </li>
                  <li :class="{on:accountMgtTab===1}">
                    <button @click="accountMgtTab = 1">ERP 데이터</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 결제 로데이터 -->
            <div v-if="accountMgtTab == 0" class="tabData">
              <AccountMgtRaw />
            </div>
            <!-- //결제 로데이터 -->
            <!-- ERP 데이터 -->
            <div v-if="accountMgtTab == 1" class="tabData">
              <AccountMgtErp />
            </div>
            <!-- //ERP 데이터 -->
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
import AccountMgtRaw from '@/views/statistics/AccountMgtRaw.vue';
import AccountMgtErp from '@/views/statistics/AccountMgtErp.vue';

export default {
  mixins: [Mixin],
  name: 'IndicatorFee',
  data() {
    return {
      accountMgtTab: 0,
    }
  },
  methods: {
  },
  components: {
    AccountMgtRaw,
    AccountMgtErp,
  },
}
</script>
