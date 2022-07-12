<template lang="html">
  <div>
    <div class="policyDate">
      <em>적용일 2020.06.01</em>
      <span class="selectSet">
        <select name="" id="">
          <option value="no" class="label">이전 약관 보기</option>
          <option value="">2019.06.01</option>
          <option value="">2019.06.01</option>
          <option value="">2019.06.01</option>
        </select>
      </span>
    </div>
    <div class="policyDetail">
      <div class="back">SNS 마케팅 수신동의</div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PolicySms',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>
