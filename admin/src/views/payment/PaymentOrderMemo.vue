<template lang="html">
  <div>
    <!-- 메모 -->
    <h3><strong>메모</strong></h3>
    <span class="ipBtn sizeM">
      <input type="text" placeholder="메모 정보를 입력해 주세요"/>
      <button class="btnM">입력</button>
    </span>
    <ul class="commentList">
      <li>
        <span class="commentInfo">
          <span>2021-01-15 14:25</span>
          <span>박미진(mjpark111)</span>
        </span>
        <span class="commentText">
          [2021-01-17] (이우용) 인강전환함 (직강 9760에서 인강 14383으로 전환)
          <button class="btnDelete ml10">삭제</button>
        </span>
      </li>
      <li>
        <span class="commentInfo">
          <span>2021-01-15 14:25</span>
          <span>박미진(mjpark111)</span>
        </span>
        <span class="commentText">
          인강 전환에 관한 문의하여 이를 안내함
        </span>
      </li>
    </ul>
    <!-- //메모 -->
    <div class="btnArea">
      <button class="btnM">닫기</button>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PaymentOrderMemo',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
