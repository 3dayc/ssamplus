<template lang="html">
  <div>
    <h3>
      선생님! 질문 있습니다.
      <div class="liveState on"><em>라이브</em></div>
    </h3>
    <p>2021-03-15 월요일</p>
    <div class="chatWrite">
      <textarea placeholder="선생님께 질문을 입력 (실명 등록됨)"></textarea>
      <button>등록</button>
    </div>
    <div class="chatList">
      <dl>
        <dt><strong>홍길동</strong> 09:54:24</dt>
        <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
      </dl>
      <dl>
        <dt><strong>홍길동</strong> 09:54:24</dt>
        <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
      </dl>
      <dl>
        <dt><strong>홍길동</strong> 09:54:24</dt>
        <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
      </dl>
      <dl>
        <dt><strong>홍길동</strong> 09:54:24</dt>
        <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
      </dl>
      <dl>
        <dt><strong>홍길동</strong> 09:54:24</dt>
        <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
      </dl>
      <dl>
        <dt><strong>홍길동</strong> 09:54:24</dt>
        <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
      </dl>
      <dl>
        <dt><strong>홍길동</strong> 09:54:24</dt>
        <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
      </dl>
      <dl>
        <dt><strong>홍길동</strong> 09:54:24</dt>
        <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
      </dl>
    </div>
    <!-- <div class="chatList noChat">
      <div>채팅장이 제공되지 않는 강의입니다.</div>
    </div> -->
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
