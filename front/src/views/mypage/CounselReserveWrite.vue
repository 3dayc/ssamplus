<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="counselReserveWrite">
          <!-- 서브 타이틀 -->
          <div class="subTit noLine">
            <h3>1:1 상담 예약</h3>
            <div class="summeryTxt">
              <em>학원상담</em>은 전문 상담사와 <em>선생님 상담</em>은 선택한 선생님과의 상담을 예약할 수 있습니다.
            </div>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 상세 -->
          <div class="reserveTabwrap">
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <ul class="blackLineTab">
                    <li :class="{on:currentTab===0}"><button @click="currentTab = 0">학원 상담</button></li>
                    <li :class="{on:currentTab===1}"><button @click="currentTab = 1">선생님 상담</button></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="writerInfo">
              <span>
                <em>홍길동</em>
                <em>010-0000-0000</em>
              </span>
              <p>- 예약날짜, 시간을 변경하시려면 예약을 취소하시고, 다시 신청해주세요. <br/>- 신청하신 상담일의 당일 취소는 불가능 합니다.</p>
            </div>
            <div class="tabLayout">
              <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                <counselReserveDirect />
              </div>
              <div v-if="currentTab == 1" class="tabData">
                <counselReserveTeacher />
              </div>
            </div>
          </div>
          <div class="boardDetail write">
            <div class="box">
              <textarea placeholder="상담 내용을 입력해 주세요."></textarea>
            </div>
            <div class="box checkSetArea col2">
              <p class="fRed"><span>※ 학원방문 상담 시 마스크를 반드시 착용해 주세요.</span> <span>※ 마스크 미 착용 시에는 상담진행이 불가능합니다.</span></p>
              <span class="checkSet">
                <input type="checkbox" id="chk011" />
                <label for="chk011"><i></i>[필수] 개인정보 활용에 동의합니다</label>
              </span>
              <!-- <span class="checkSet">
                <input type="checkbox" id="chk012" />
                <label for="chk012"><i></i>[선택] SMS 문자 알림을 요청합니다 (알림 수신 동의)</label>
              </span> -->
            </div>
            <p class="erMsg">개인정보 활용에 동의해주세요.</p>
            <!-- //내용영역 -->
            <!-- 상세 버튼영역 -->
            <div class="boardBtn">
              <router-link to="/mkup/mypage/counsel/reserve" class="btnL">상담신청</router-link>
              <router-link to="/mkup/mypage/counsel/reserve" class="btnL line">취소</router-link>
            </div>
            <!-- //상세 버튼영역 -->
          </div>
          <!-- //상세 -->
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
import counselReserveDirect from '@/views/mypage/counselReserveDirect.vue';
import counselReserveTeacher from '@/views/mypage/counselReserveTeacher.vue';

export default {
  mixins: [Mixin],
  name: 'CounselReserveWrite',
  components: {
    counselReserveDirect,
    counselReserveTeacher
  },
  data() {
    return {
      
      currentTab:0,
    }
  },
  methods: {
  }
}
</script>
