<template lang="html">  
  <!-- content -->
  <div class="content">
  <article>
    <!-- page layout -->
    <div class="lectureSsamList">
      <div class="subTit noLine">
        <h3>교육학</h3>
      </div>
      <ul>
        <li>
          <router-link to="/mkup/lecture/teachermjedu01" class="ssamArea">
            <span class="ssamInfo">
              <span>키워주기 위한<span>교육학</span></span>
              <em>교육학</em>
              <strong>김현</strong>
            </span>
            <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjedu01_thum.png`)" alt="" />
          </router-link>
          <router-link to="/mkup/special/event/view1" class="eventArea">
            <span>스페셜 대면첨삭 이벤트!</span>
          </router-link>
        </li>
        <li>
          <router-link to="/mkup/lecture/teachermjedu02" class="ssamArea">
            <span class="ssamInfo">
              <span>EBS 교육학 <br/>논술 전문가의<span>적중 강의</span></span>
              <em>교육학</em>
              <strong>권구현</strong>
            </span>
            <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjedu02_thum.png`)" alt="" />
          </router-link>
        </li>
        <li>
          <router-link to="/mkup/lecture/teachermjedu03" class="ssamArea">
            <span class="ssamInfo">
              <span>이해중심! <br/>쉽게 설명하는 <span>교육학!</span></span>
              <em>교육학</em>
              <strong>윤중샘</strong>
            </span>
            <i>신규입성</i>
            <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjedu03_thum.png`)" alt="" />
          </router-link>
          <router-link to="/mkup/special/event/view1" class="eventArea">
            <span>스페셜 대면첨삭 이벤트!</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- //page layout -->
  </article>
  </div>
  <!-- //content -->    
</template>

<script>

export default {  
  name: 'IndexMjedu',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
  },
}
</script>
