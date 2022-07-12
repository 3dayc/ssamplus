<template>
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="counselReserve">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>1:1 상담 예약</h3>
            <div class="summeryTxt">
              <em>학원상담</em>은 전문 상담사와 <em>선생님 상담</em>은 선택한 선생님과의 상담을 예약할 수 있습니다.
            </div>
            <span class="right-po">
              <router-link to="/mkup/mypage/counsel/reserve/write" class="btnS">예약하기</router-link>
            </span>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 반응형 목록 -->
          <div class="resTls">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem item0">상태</span>
              <div class="lgItem itemGroup ig1">
                <span class="lgSubGrid">
                  <span class="lgItem item1">구분</span>
                  <span class="lgItem item2">과목</span>
                  <span class="lgItem item3">선생님</span>
                </span>
              </div>
              <div class="lgItem itemGroup ig2">
                <span class="lgSubGrid">
                  <span class="lgItem item4">예약신청일</span>
                  <span class="lgItem item5">예약시간</span>
                </span>
              </div>
              <div class="lgItem itemGroup ig3">
                <span class="lgSubGrid">
                  <span class="lgItem item6">상담유형</span>
                  <span class="lgItem item7">장소</span>
                </span>
              </div>
              <span class="lgItem item8"></span>
            </div>
            <!-- //listTitle -->
            <!-- //list -->
            <div class="tbody">
              <ul class="pdPlus">
                <!--Loop-->
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iBbsSet end">예약완료</em></span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iBbsSet direct">학원상담</em></span>
                      <span class="lgItem item2">교육학</span>
                      <span class="lgItem item3">상담전문가</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item4"><em class="mTit">신청일시</em>2021-05-14</span>
                      <span class="lgItem item5">09:00~09:30</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig3">
                    <span class="lgSubGrid">
                      <span class="lgItem item6"><em class="mTit">상담 유형</em>학원 방문</span>
                      <span class="lgItem item7"><em class="mTit">장소</em>이데아관</span>
                    </span>
                  </div>
                  <span class="lgItem item8"><button class="btnScheduleCancel" @click="popupTrigger01 = true">예약취소</button></span>
                </li>
                <!--//Loop-->
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iBbsSet end">예약완료</em></span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iBbsSet teacher">선생님상담</em></span>
                      <span class="lgItem item2">교육학</span>
                      <span class="lgItem item3">김현</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item4"><em class="mTit">신청일시</em>2021-05-14</span>
                      <span class="lgItem item5">09:00~09:30</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig3">
                    <span class="lgSubGrid">
                      <span class="lgItem item6"><em class="mTit">상담 유형</em>ZOOM 상담</span>
                      <span class="lgItem item7"><em class="mTit">장소</em>-</span>
                    </span>
                  </div>
                  <span class="lgItem item8"><button class="btnScheduleCancel" @click="popupTrigger01 = true">예약취소</button></span>
                </li>
                <li class="listGrid">
                  <span class="lgItem item0"><em class="iBbsSet end">예약완료</em></span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iBbsSet teacher">선생님상담</em></span>
                      <span class="lgItem item2">논술</span>
                      <span class="lgItem item3">윤중샘</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item4"><em class="mTit">신청일시</em>2021-05-14</span>
                      <span class="lgItem item5">09:00~09:30</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig3">
                    <span class="lgSubGrid">
                      <span class="lgItem item6"><em class="mTit">상담 유형</em>1:1방문 상담</span>
                      <span class="lgItem item7"><em class="mTit">장소</em>아이비관</span>
                    </span>
                  </div>
                  <span class="lgItem item8"><button class="btnScheduleCancel" @click="popupTrigger01 = true">예약취소</button></span>
                </li>
                <li class="listGrid expiry">
                  <span class="lgItem item0"><em class="iBbsSet">상담종료</em></span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iBbsSet direct">학원상담</em></span>
                      <span class="lgItem item2">중등/수학</span>
                      <span class="lgItem item3">상담전문가</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item4"><em class="mTit">신청일시</em>2021-05-14</span>
                      <span class="lgItem item5">09:00~09:30</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig3">
                    <span class="lgSubGrid">
                      <span class="lgItem item6"><em class="mTit">상담 유형</em>전화 상담</span>
                      <span class="lgItem item7"><em class="mTit">장소</em>-</span>
                    </span>
                  </div>
                  <span class="lgItem item8">미참석</span>
                </li>
                <li class="listGrid expiry">
                  <span class="lgItem item0"><em class="iBbsSet">상담종료</em></span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iBbsSet direct">학원상담</em></span>
                      <span class="lgItem item2">중등/수학</span>
                      <span class="lgItem item3">상담전문가</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item4"><em class="mTit">신청일시</em>2021-05-14</span>
                      <span class="lgItem item5">09:00~09:30</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig3">
                    <span class="lgSubGrid">
                      <span class="lgItem item6"><em class="mTit">상담 유형</em>전화 상담</span>
                      <span class="lgItem item7"><em class="mTit">장소</em>-</span>
                    </span>
                  </div>
                  <span class="lgItem item8">미참석</span>
                </li>
                <li class="listGrid expiry">
                  <span class="lgItem item0"><em class="iBbsSet">상담종료</em></span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iBbsSet teacher">선생님상담</em></span>
                      <span class="lgItem item2">중등/음악</span>
                      <span class="lgItem item3">상담전문가</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item4"><em class="mTit">신청일시</em>2021-05-14</span>
                      <span class="lgItem item5">09:00~09:30</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig3">
                    <span class="lgSubGrid">
                      <span class="lgItem item6"><em class="mTit">상담 유형</em>전화 상담</span>
                      <span class="lgItem item7"><em class="mTit">장소</em>-</span>
                    </span>
                  </div>
                  <span class="lgItem item8"><em class="counselOk">참석</em></span>
                </li>
                <li class="listGrid expiry">
                  <span class="lgItem item0"><em class="iBbsSet">상담종료</em></span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iBbsSet direct">학원상담</em></span>
                      <span class="lgItem item2">중등/역사</span>
                      <span class="lgItem item3">상담전문가</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item4"><em class="mTit">신청일시</em>2021-05-14</span>
                      <span class="lgItem item5">09:00~09:30</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig3">
                    <span class="lgSubGrid">
                      <span class="lgItem item6"><em class="mTit">상담 유형</em>학원방문</span>
                      <span class="lgItem item7"><em class="mTit">장소</em>에비뉴관</span>
                    </span>
                  </div>
                  <span class="lgItem item8"><em class="counselOk">참석</em></span>
                </li>
                <li class="listGrid expiry">
                  <span class="lgItem item0"><em class="iBbsSet">상담취소</em></span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iBbsSet direct">학원상담</em></span>
                      <span class="lgItem item2">중등/영어</span>
                      <span class="lgItem item3">상담전문가</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item4"><em class="mTit">신청일시</em>2021-05-14</span>
                      <span class="lgItem item5">09:00~09:30</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig3">
                    <span class="lgSubGrid">
                      <span class="lgItem item6"><em class="mTit">상담 유형</em>학원방문</span>
                      <span class="lgItem item7"><em class="mTit">장소</em>-</span>
                    </span>
                  </div>
                  <span class="lgItem item8">상담취소</span>
                </li>
                <li class="listGrid expiry">
                  <span class="lgItem item0"><em class="iBbsSet">상담취소</em></span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iBbsSet direct">학원상담</em></span>
                      <span class="lgItem item2">중등/영어</span>
                      <span class="lgItem item3">상담전문가</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item4"><em class="mTit">신청일시</em>2021-05-14</span>
                      <span class="lgItem item5">09:00~09:30</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig3">
                    <span class="lgSubGrid">
                      <span class="lgItem item6"><em class="mTit">상담 유형</em>학원방문</span>
                      <span class="lgItem item7"><em class="mTit">장소</em>-</span>
                    </span>
                  </div>
                  <span class="lgItem item8">상담취소</span>
                </li>
                <li class="listGrid expiry">
                  <span class="lgItem item0"><em class="iBbsSet">상담취소</em></span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iBbsSet direct">학원상담</em></span>
                      <span class="lgItem item2">중등/영어</span>
                      <span class="lgItem item3">상담전문가</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item4"><em class="mTit">신청일시</em>2021-05-14</span>
                      <span class="lgItem item5">09:00~09:30</span>
                    </span>
                  </div>
                  <div class="lgItem itemGroup ig3">
                    <span class="lgSubGrid">
                      <span class="lgItem item6"><em class="mTit">상담 유형</em>학원방문</span>
                      <span class="lgItem item7"><em class="mTit">장소</em>-</span>
                    </span>
                  </div>
                  <span class="lgItem item8">상담취소</span>
                </li>
              </ul>
            </div>
            <!-- //list -->
          </div>
          <!-- //반응형 목록 -->
            <div class="paging">
            <Paginate v-if="!this.mobile" />
            <div class="moreBtnWrap" v-if="this.mobile">
              <button class="mobileMore">더보기</button>
            </div>
          </div>
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- Popup -->
    <!-- 예약취소 -->
    <Alert v-if='popupTrigger01' @close="popupTrigger01 = false">
      <template slot="modalbody">
        <div class="basicNoty">
          <p>
          예약을 취소 하시겠습니까?<br/>
          한번 취소한 예약은 복구할 수 없습니다.
          </p>
        </div>
      </template>
      <template slot="modalfooter">
        <button class="btnM line" @click="popupTrigger01 = false">취소</button>
        <button class="btnM" @click="popupTrigger01 = false">확인</button>
      </template>
    </Alert>
    <!-- //예약취소 -->
    <!-- //Popup -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'CounselReserve',
  components: {
  },
  data() {
    return {
      popupTrigger01: false,
    }
  },
  mounted() {
  },
}
</script>
