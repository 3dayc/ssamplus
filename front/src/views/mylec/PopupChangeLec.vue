<template lang="html">
  <div>
    <h2>신청할 강좌</h2>
    <span class="selectSet wFull">
      <select name="" id="">
        <option value="">선택해 주세요</option>
        <option value="">80점 도약 모의고사반</option>
      </select>
    </span>
    <h2 class="pt15">직강 수강시작 희망일</h2>
    <span class="selectSet wFull">
      <select name="" id="">
        <option value="">전환시작일</option>
        <option value="">2021-07-01</option>
        <option value="">2021-07-08</option>
        <option value="">2021-07-15</option>
        <option value="">2021-07-22</option>
        <option value="">2021-07-29</option>
      </select>
    </span>
    <div class="changeLecInfo">
      <dl>
        <dt>쌤팩 프리미엄 대상/ 직강 전환 이용안내</dt>
        <dd>선택 강좌가 인강 강좌이면 자동으로	&lt;직강 전환&gt;으로 신청됩니다.</dd>
        <dd>직강으로 전환할 경우는 직강 수강 시작일자를 선택해 주세요.</dd>
      </dl>
      <dl>
        <dt>쌤팩 프리미엄 대상/ 인강 전환 이용안내</dt>
        <dd>선택 강좌가 직강 강좌이면 자동으로 &lt;인강 전환&gt;으로 신청됩니다. </dd>
        <dd>인강으로 전환할 경우는 직강 수강 종료일자를 선택해 주세요.</dd>
      </dl>
    </div>
    <span class="checkSet">
      <input type="checkbox" />
      <label for=""><i></i>직/인강 전환 신청 이용안내를 확인하고 신청합니다.</label>
    </span>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PopupChangeLec',
  components: {
  },
  data() {
    return {
      selectTrigger:0,
    }
  },
  methods: {
  },
}
</script>
