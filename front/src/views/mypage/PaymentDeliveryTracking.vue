<template lang="html">
  <div>
      <div class="productInfo">
        <span><em>송장번호</em> 9876543210987654</span>
        <span><em>배송사</em> 로젠택배</span>
      </div>
      <!-- 반응형 목록 -->
      <div class="resTls">
        <!-- listTitle -->
        <div class="thead listGrid">
          <span class="lgItem item0">일시</span>
          <span class="lgItem item1">현재위치</span>
          <span class="lgItem item2">배송상태</span>
        </div>
        <!-- //listTitle -->
        <!-- //list -->
        <div class="tbody">
          <ul>
            <!--Loop-->
            <li class="listGrid">
              <span class="lgItem item0">2021-03-31 15:56:03</span>
              <span class="lgItem item1"><span class="mTit">현재위치 : </span>강서우편물집중국</span>
              <span class="lgItem item2"><span class="mTit">배송상태 : </span>배송중 (입고)</span>
            </li>
            <!--//Loop-->
            <li class="listGrid">
              <span class="lgItem item0">2021-03-31 15:56:03</span>
              <span class="lgItem item1"><span class="mTit">현재위치 : </span>하남집하장</span>
              <span class="lgItem item2"><span class="mTit">배송상태 : </span>배송중 (출고)</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">2021-03-31 15:56:03</span>
              <span class="lgItem item1"><span class="mTit">현재위치 : </span>물류센터</span>
              <span class="lgItem item2"><span class="mTit">배송상태 : </span>집하</span>
            </li>
          </ul>
        </div>
        <!-- //list -->
      </div>
      <!-- //반응형 목록 -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PaymentDeliveryTracking',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  },
}
</script>
