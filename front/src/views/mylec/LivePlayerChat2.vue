<template lang="html">
  <div>
    <h3>
      선생님! 질문 있습니다.
      <div class="liveState on"><em>라이브</em></div>
    </h3>
    <p>2021-03-15 월요일</p>
    <div class="chatList noChat">
      <div>채팅장이 제공되지 않는 강의입니다.</div>
    </div>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LivePlayerChat.vue',
  components: {
  },
  data() {
    return {
      playerTab: 0,
      listTab:0
    }
  },
	methods: {
	},
  computed: {
  },
  mounted() {
  }
}
</script>
