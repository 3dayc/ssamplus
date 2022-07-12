<template lang="html">
  <div class="">
    <button @click="open = true">윈도우 팝업 열기</button>
    <button @click="open02 = true">윈도우 팝업 열기222</button>
    <button @click="toastPop('default', '안내성 토스트 팝업입니다. 정보안내, 설명 등에 사용합니다.')">안내 토스트 팝업 열기</button>
    <button @click="toastPop('error', '에러/실패 토스트 팝업입니다.')">에러 토스트 팝업 열기</button>
    <button @click="toastPop('success', '성공/완료 토스트 팝업입니다.')">성공 토스트 팝업 열기</button>
  </div>

</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style media="screen">
</style>
