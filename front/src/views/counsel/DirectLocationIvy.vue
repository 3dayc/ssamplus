<template lang="html">
  <div>
    <div class="locationDetal ivyCase">
      <div class="map"><img :src="require(`@/assets/images/i_counseDirect02.png`)" alt="" /></div>
      <div class="row">
        <dl class="lInfo01">
          <dt>주소</dt>
          <dd>
            <span>도로명 주소</span> 서울특별시 동작구 장승배기로 171 <em>아이비빌딩 5층</em><br/>
            <span>지번 주소</span> 서울특별시 동작구 노량진동 45-3 <em>아이비빌딩 5층</em>
          </dd>
        </dl>
        <dl class="lInfo02">
          <dt>업무시간</dt>
          <dd>
            <div><span>월~토</span> 08:00 ~ 20:00</div>
            <div><span>일</span> 08:00 ~ 18:00</div>
          </dd>
        </dl>
        <dl class="lInfo03">
          <dt>상담전화</dt>
          <dd><a href="tel:02-811-4040">02-811-4040</a></dd>
        </dl>
      </div>
      <dl class="lInfo04">
        <dt>학원으로 가는 길</dt>
        <dd>
          <p>
            <strong>1,9 호선 노량진역</strong>
            노량진역 5번 출구 → 지하 아이비빌딩으로 연결(1층 롯데리아) → 5층 희소고시학원 아이비관 도착
          </p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'DirectLocationIvy',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
  },
}
</script>
