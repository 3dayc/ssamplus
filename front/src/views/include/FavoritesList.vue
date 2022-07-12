<template lang="html">
<div class="favoritesList">
  <strong class="tit">수강 중인 강좌 리스트</strong>
  <ul>
    <li>
      <input type="checkbox" id="favorites01" />
      <label for="favorites01">
        <i>교육학</i>
        <em>김현</em>
        <span>연간 쌤팩</span>
      </label>
    </li>
    <li>
      <input type="checkbox" id="favorites02" />
      <label for="favorites02">
        <i>중국어</i>
        <em>희소 중국어 팀</em>
        <span>기출문제분석반2</span>
      </label>
    </li>
    <li>
      <input type="checkbox" id="favorites03" />
      <label for="favorites03">
        <i>중국어</i>
        <em>희소 중국어 팀</em>
        <span>연간 쌤팩</span>
      </label>
    </li>
  </ul>
  <p>즐겨 찾기는 1~6개 까지 설정이 가능합니다.</p>
  <div class="fRed">※ 클릭한 순서대로 화면에 표시됩니다. (최대 6개)</div>
</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  name: 'FavoritesList'
}
</script>
