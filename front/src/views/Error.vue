<template lang="html">
  <div>
    <div id="errorWrap">
      <h1><img :src="require(`@/assets/images/i_logo_login.svg`)" alt="KG에듀원 쌤플러스" /></h1>
      <div class="errorContent">
        <div class="errorImage">
          <span>:(</span>
        </div>
        <div class="errorMessage">
          <h2 class="errorCode">4<span class="fGreen">0</span>4</h2>
          <strong>요청한 페이지를 찾을 수 없습니다.</strong>
          <div class="btnArea">
            <router-link to="" class="btnL green">홈으로 이동</router-link>
            <router-link to="" class="btnL gray ml20">이전페이지로 이동</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Mixin from '@/plugins/mixins/Mixins.js';

  export default {
    mixins: [Mixin],
    name: 'Error',
    data() {
      return {

      }
    },
    methods: {
    },
    computed: {
      attributes() {
        return [

        ];
      },
    },
  }
</script>
