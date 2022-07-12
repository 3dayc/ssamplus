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
        <div class="mobilePush">
          <div class="subTit">
            <h3>알림</h3>
          </div>
          <div class="pushList">
            <dl class="more" :class="{on:isPush01==true}">
              <dt class="new"  @click="isPush01 = !isPush01"> <!-- 최근 알림이 있을 경우 class="new" 추가  -->
                <em>21/11/02</em>
                New가 있을 경우 최신 알림 1개만 보입니다. 없을 때에는 div 자체를 삭제해주세요. 클릭 시 전체 목록으로 이동합니다.
              </dt>
              <dd v-show="isPush01">
                알림의 상세가 있을 경우에는 노출됩니다. 없을 때는 그냥 목록에 표기만 합니다.
              </dd>
            </dl>
            <dl>
              <dt class="new"> <!-- 최근 알림이 있을 경우 class="new" 추가  -->
                <em>21/11/02</em>
                상세내용이 없는 단순 알람입니다.
              </dt>
            </dl>
            <dl>
              <dt>
                <em>21/10/20</em>
                상세내용이 없는 단순 알람입니다.
              </dt>
            </dl>
            <dl class="more" :class="{on:isPush02==true}">
              <dt @click="isPush02 = !isPush02">
                <em>21/10/20</em>
                알림의 상세내용이 있을 때는 이렇게 나옵니다.
              </dt>
              <dd v-show="isPush02">
                알림의 상세가 있을 경우에는 노출됩니다. 없을 때는 그냥 목록에 표기만 합니다.
              </dd>
            </dl>
            <dl>
              <dt>
                <em>21/10/10</em>
                상세내용이 없는 단순 알람입니다.
              </dt>
            </dl>
            <dl>
              <dt>
                <em>21/10/01</em>
                상세내용이 없는 단순 알람입니다.
              </dt>
            </dl>
            <dl>
              <dt>
                <em>21/09/30</em>
                상세내용이 없는 단순 알람입니다.
              </dt>
            </dl>
            <dl class="more" :class="{on:isPush03==true}">
              <dt @click="isPush03 = !isPush03">
                <em>21/09/20</em>
                알림의 상세내용이 있을 때는 이렇게 나옵니다.
              </dt>
              <dd v-show="isPush03">
                알림의 상세가 있을 경우에는 노출됩니다. 없을 때는 그냥 목록에 표기만 합니다.
              </dd>
            </dl>
          </div>
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
  name: 'Push',
  data() {
    return {
      isPush01: true,
      isPush02: true,
      isPush03: true,
    }
  },
}
</script>
