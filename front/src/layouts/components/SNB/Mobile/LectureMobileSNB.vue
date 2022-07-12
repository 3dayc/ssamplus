<template>  
  
  <div class="mobileLnb">
    <div>
      <!--수강신청-->
      <div class="etcLecSnb">
        <div class="lnbDepth1 lecCase">
          <ul>
            <li :class="{on:mobileSnb2 == 210}"><router-link to="/mkup/lecture/index/mjedu">교육학</router-link></li>
            <li :class="{on:mobileSnb2 == 220}"><router-link to="/mkup/lecture/index/mjchild">유아</router-link></li>
            <li :class="{on:mobileSnb2 == 230}"><router-link to="/mkup/lecture/index/mjmiddle">중등</router-link></li>
            <li :class="{on:mobileSnb2 == 240}"><router-link to="/mkup/lecture/index/mjss">사회/과학</router-link></li>
            <li :class="{on:mobileSnb2 == 250}"><router-link to="/mkup/lecture/index/mjnomj">비교과</router-link></li>
            <li :class="{on:mobileSnb2 == 260}"><router-link to="/mkup/lecture/index/mjspe">특수</router-link></li>
            <li :class="{on:mobileSnb2 == 270}"><router-link to="/mkup/lecture/index/mjessay">논술 · 면접</router-link></li>
            <li :class="{on:mobileSnb2 == 280}"><router-link to="/mkup/lecture/index/mjhistory">한국사</router-link></li>
            <li :class="{on:mobileSnb2 == 290}"><router-link to="/mkup/lecture/index/mjlibr">사서직(공무원)</router-link></li>
          </ul>
        </div>
        <button class="btnAllSsam" @click="ssamChoiceTrigger = true">선생님선택</button>
      </div>
      <!--//수강신청-->
    </div>      

    <!-- 수강신청 선생님 팝업 -->
    <Popup v-if='ssamChoiceTrigger' @close="ssamChoiceTrigger = false" class="ssamChoicePop">
      <template slot="modalheader">
        <div>
          <h1>선생님 전체보기</h1>
          <button @click="ssamChoiceTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <LecSsamList />
      </template>
    </Popup>
    <!-- //수강신청 선생님 팝업 -->
  </div> 
</template>

<script>
import Popup from '@/views/include/Popup.vue';
import LecSsamList from '@/views/lecture/LecSsamList.vue';

export default {
  name: 'LectureMobileSNB',
  components: {
    Popup,
    LecSsamList
  },
  data() {
    return {            
      mobileSnb2:0,
      ssamChoiceTrigger:false
    }
  },
  computed: {
  },      
  created() {    
  }
};
</script>
