<template lang="html">
  <div>
    <div class="pivVideoList">
      <ul>
        <li @click="videoPopTrigger01 = true">
          <!-- <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HUjAo22if0HW3ifCJ3TID2sEki4lghzOX_-ubb_FLWDqGJUAit48IX1AA0SdBkFcbT0&usqp=CAU" /></span> -->
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/배지윤] 전북 합격자</strong>
          <em>“김현 선생님을 믿고 따르세요”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <!-- <span><img src="https://www.1koreanpost.com/uploads/news/posts/%ED%8E%AD%EC%88%98-03-web.jpg" alt="" /></span> -->
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경기 합격자</strong>
          <em>“누구든지 합격할 수 있습니다.”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <!-- <span><img src="https://post-phinf.pstatic.net/MjAxOTExMjBfMTI0/MDAxNTc0MjMzMjgxNDcw.GiGegDGrPi1rFXAHDr_4buDJdddCz6Fx1UMUSRceoy4g.fCwzJd8jAplDwdjZxmmU0dJt9iPivne_OBNE7szWI_og.JPEG/%EB%88%88%EC%B9%98%EC%B1%99%EA%B2%A8.jpeg?type=w1200" alt="" /></span> -->
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경북 합격자</strong>
          <em>“포기하지 않았던 이유 5가지”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <!-- <span><img src="https://image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/IV2/Genie_Magazine/9522/Mgz_Main_Top_20201211171446.jpg/dims/resize/Q_80,0" alt="" /></span> -->
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경북 합격자</strong>
          <em>“모든 범위를 많이 보는 것이 중요”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <!-- <span><img src="http://image.teafone.com/filedown/2020/5/12/1589242058169.png" alt="" /></span> -->
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/배지윤] 전북 합격자</strong>
          <em>“김현 선생님을 믿고 따르세요”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경기 합격자</strong>
          <em>“누구든지 합격할 수 있습니다.”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경북 합격자</strong>
          <em>“포기하지 않았던 이유 5가지”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <!-- <span><img src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201912/11/1fc8e874-9440-421b-80bc-7acef0ff94a7.jpg" alt="" /></span> -->
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경북 합격자</strong>
          <em>“모든 범위를 많이 보는 것이 중요”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <!-- <span><img src="https://pbs.twimg.com/profile_images/1200472151062503424/4rmiTmnF_400x400.jpg" alt="" /></span> -->
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/배지윤] 전북 합격자</strong>
          <em>“김현 선생님을 믿고 따르세요”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <!-- <span><img src="https://www.upinews.kr/data/upi/image/2019/12/19/upi201912190213.628x.0.png" alt="" /></span> -->
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경기 합격자</strong>
          <em>“누구든지 합격할 수 있습니다.”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경북 합격자</strong>
          <em>“포기하지 않았던 이유 5가지”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경북 합격자</strong>
          <em>“모든 범위를 많이 보는 것이 중요”</em>
        </li>
      </ul>
      <div class="paging">
        <Paginate v-if="!this.mobile" />
        <div class="moreBtnWrap" v-if="this.mobile">
          <button class="mobileMore">더보기</button>
        </div>
      </div>
    </div>

    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PassInterviewVideoList',
  components: {
  },
  data() {
    return {
      videoPopTrigger01: false,
    }
  },
}
</script>
<style lang="css" scoped>
#wrapBack.mDevice .passInterview .pivVideoList li:nth-child(n+11):nth-child(-n+20) {display:none;}
</style>