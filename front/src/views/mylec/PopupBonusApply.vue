<template lang="html">
  <div>
    <h2>신청할 강좌</h2>
    <span class="selectSet wFull">
      <select name="" id="">
        <option value="">80점 도약 모의고사반</option>
      </select>
    </span>
    <div class="bonusKind">
      <h2>수강 방법</h2>
      <span class="radioSet">
        <input type="radio" name="radio1" id="radio11" checked  value="radio11" @change="onChange($event)" />
        <label for="radio11"><i></i>온라인 강의로 수강함</label>
      </span>
      <div class="onlineCase" :class="{on:selectTrigger===0}">
        <dl>
          <dt>수강시작일</dt>
          <dd>
            <span class="selectSet">
              <select name="" id="">
                <option value="">선택해주세요</option>
                <option value="">2021-03-05</option>
                <option value="">2021-03-06</option>
              </select>
            </span>
          </dd>
        </dl>
        <p>※ 온라인 강의 > 수강 중인 강좌메뉴에서 신청한 강좌를 수강할 수 있음</p>
      </div>
      <span class="radioSet">
        <input type="radio" name="radio1" id="radio12" value="radio12" @change="onChange($event)" />
        <label for="radio12"><i></i>학원 강의로 수강함</label>
      </span>
      <div class="directCase" :class="{on:selectTrigger===1}">
        <dl>
          <dt>수강기간</dt>
          <dd>2021-04-01~2021-05-31</dd>
        </dl>
        <dl>
          <dt>개강일</dt>
          <dd>2021-04-01</dd>
        </dl>
      </div>
    </div>
    <div class="bonusInfo">
      <dl>
        <dt>보너스 강좌 이용안내</dt>
        <dd>보너스 강좌 신청마감 전까지 신청할 수 있습니다.</dd>
        <dd>유료 강의 수강 시 제공되는 무료 강의를 보너스강의라고 합니다.</dd>
        <dd>보너스강의는 해당 강의를 무료 제공하는 본 강의 수강 신청 시 장바구니에 자동으로 함께 담기며, 설정된 시작일에 따라 자동 시작됩니다.</dd>
        <dd>수강 시작일 설정을 하지 않는 경우 결제일(신청일) 기준 10일 이후로 자동 설정 됩니다.</dd>
      </dl>
    </div>
    <span class="checkSet">
      <input type="checkbox" />
      <label for=""><i></i>이용안내를 확인하고 신청합니다.</label>
    </span>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PopupBonusApply',
  components: {
  },
  data() {
    return {
      selectTrigger:0,
    }
  },
  methods: {
    onChange(event) {
      let optionText = event.target.value;
        this.selectTrigger = 0;

      if (optionText == 'radio11') {
        this.selectTrigger = 0;
      } else if(optionText == 'radio12') {
        this.selectTrigger = 1;
      }
    },
  },
}
</script>
