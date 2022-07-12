<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="mobileSetting">
          <dl class="pushNoty">
            <dt class="new">알림</dt> <!-- 최근 알림이 있을 경우 class="new" 추가  -->
            <dd>
              <router-link to="/mkup/setting/push">전체보기</router-link>
            </dd>
          </dl>
          <div class="pushLast">
            <router-link to="/mkup/setting/push">
              <em>21/11/02</em>
              New가 있을 경우 최신 알림 1개만 보입니다. 없을 때에는 div 자체를 삭제해주세요. 클릭 시 전체 목록으로 이동합니다.
            </router-link>
          </div>
          <dl class="pushSet">
            <dt>알림설정 <em>앱에서 보내지는 푸시 메세지를 받습니다.</em></dt>
            <dd>
              <span class="toggleSet">
                <input type="checkbox" id="push1" checked />
                <label for="push1">알림여부</label>
              </span>
            </dd>
          </dl>
          <dl class="version">
            <dt>버전정보</dt>
            <dd>
              <strong>2.16</strong><em>최신 버전 입니다</em>
            </dd>
          </dl>
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'Index',
}
</script>
