<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>라이브 채팅 보기</h1>
      <span class="supTxt">* 라이브강좌의 채팅을 확인할 수 있습니다</span>
    </div>
    <div class="winContent">
      <div class="chatLayout">
        <div class="chatTop">
          <strong>2021-01-16 월요일</strong>
        </div>
        <div class="chatContents chatInc">
          <dl>
            <dt><strong>홍*민</strong><span class="fGray ml5">09:54:11</span><button class="btnDelete">삭제</button></dt>
            <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
          </dl>
          <dl>
            <dt><strong>홍*민</strong><span class="fGray ml5">09:54:11</span><button class="btnDelete">삭제</button></dt>
            <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
          </dl>
          <dl>
            <dt><strong>홍*영</strong><span class="fGray ml5">09:54:11</span><button class="btnDelete">삭제</button></dt>
            <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
          </dl>
          <dl>
            <dt><strong>홍*두</strong><span class="fGray ml5">09:54:11</span><button class="btnDelete">삭제</button></dt>
            <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
          </dl>
          <dl>
            <dt><strong>홍*동</strong><span class="fGray ml5">09:54:11</span><button class="btnDelete">삭제</button></dt>
            <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
          </dl>
          <dl>
            <dt><strong>홍*민</strong><span class="fGray ml5">09:54:11</span><button class="btnDelete">삭제</button></dt>
            <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
          </dl>
          <dl>
            <dt><strong>홍*영</strong><span class="fGray ml5">09:54:11</span><button class="btnDelete">삭제</button></dt>
            <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
          </dl>
          <dl>
            <dt><strong>홍*두</strong><span class="fGray ml5">09:54:11</span><button class="btnDelete">삭제</button></dt>
            <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
          </dl>
          <dl>
            <dt><strong>홍*두</strong><span class="fGray ml5">09:54:11</span><button class="btnDelete">삭제</button></dt>
            <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
          </dl>
          <dl>
            <dt><strong>홍*두</strong><span class="fGray ml5">09:54:11</span><button class="btnDelete">삭제</button></dt>
            <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
          </dl>
          <dl class="my">
            <dt><strong>홍*두</strong><span class="fGray ml5">09:54:11</span><button class="btnDelete">삭제</button></dt>
            <dd>교육학의 목적에 관한 논술 서두를 어떻게 시작하면 좋을까요?</dd>
          </dl>
        </div>
        <div class="chatInput">
          <textarea placeholder="답변 입력 (강사 이름 노출됨)"></textarea>
          <button class="chatSend">등록</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'TeacherLiveChat',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
