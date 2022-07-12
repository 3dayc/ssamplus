<template lang="html">
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
        <div class="paymentLocker">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>사물함 신청</h3>
            <div class="summeryTxt single">사물함은 직강 수강신청이력이 있는 월에 신청이 가능하며 <strong>오늘(혹은 신청한 월의 1일)로부터 말일까지</strong>의 월 단위로 신청합니다.</div>
            <span class="right-po lineBox"><router-link to="/mkup/mypage/payment/locker/write" class="btnS">사물함 신청</router-link></span>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 반응형 목록 -->
          <div class="resTls">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem item0">신청기간</span>
              <div class="lgItem itemGroup ig1">
                <div class="lgSubGrid">
                  <span class="lgItem item1">위치</span>
                  <span class="lgItem item2">번호</span>
                </div>
              </div>
              <span class="lgItem item3">신청일</span>
              <span class="lgItem item4">사용여부</span>
            </div>
            <!-- //listTitle -->
            <!-- list -->
            <div class="tbody">
              <ul class="col">
                <!-- loop -->
                <li class="listGrid">
                  <span class="lgItem item0"><em class="mTit">신청기간</em>2021-04-01 ~ 2021-04-30</span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iLocSet ivy">아이비</em></span>
                      <span class="lgItem item2">4층 A구역(35)</span>
                    </span>
                  </div>
                  <span class="lgItem item3"><em class="mTit">신청일</em>2021-04-01</span>
                  <span class="lgItem item4"><em class="iLockSet waiting">신청완료</em></span>
                </li>
                <!-- //loop -->
                <li class="listGrid">
                  <span class="lgItem item0"><em class="mTit">신청기간</em>2021-03-01 ~ 2021-03-31</span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iLocSet idea">이데아</em></span>
                      <span class="lgItem item2">5층 A구역 (35)</span>
                    </span>
                  </div>
                  <span class="lgItem item3"><em class="mTit">신청일</em>2021-03-13</span>
                  <span class="lgItem item4"><em class="iLockSet">사용 중</em></span>
                </li>
                <li class="listGrid expiry"> <!-- <em class="iLockSet end">사용종료</em> 및 취소 일 경우 -->
                  <span class="lgItem item0"><em class="mTit">신청기간</em>2021-02-01 ~ 2021-02-28</span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iLocSet ivy">아이비</em></span>
                      <span class="lgItem item2">4층 A구역(35)</span>
                    </span>
                  </div>
                  <span class="lgItem item3"><em class="mTit">신청일</em>2021-02-12</span>
                  <span class="lgItem item4"><em class="iLockSet end">사용종료</em></span>
                </li>
                <li class="listGrid expiry">
                  <span class="lgItem item0"><em class="mTit">신청기간</em>2021-02-01 ~ 2021-02-28</span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iLocSet idea">이데아</em></span>
                      <span class="lgItem item2">6층 C구역(193)</span>
                    </span>
                  </div>
                  <span class="lgItem item3"><em class="mTit">신청일</em>2021-02-11</span>
                  <span class="lgItem item4"><em class="iLockSet end">사용취소</em></span>
                </li>
                <li class="listGrid expiry">
                  <span class="lgItem item0"><em class="mTit">신청기간</em>2021-02-01 ~ 2021-02-28</span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iLocSet ivy">아이비</em></span>
                      <span class="lgItem item2">6층 A구역 (1)</span>
                    </span>
                  </div>
                  <span class="lgItem item3"><em class="mTit">신청일</em>2021-02-11</span>
                  <span class="lgItem item4"><em class="iLockSet end">사용취소</em></span>
                </li>
                <li class="listGrid expiry">
                  <span class="lgItem item0"><em class="mTit">신청기간</em>2021-01-01 ~ 2021-01-31</span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iLocSet idea">이데아</em></span>
                      <span class="lgItem item2">4층 B구역(105)</span>
                    </span>
                  </div>
                  <span class="lgItem item3"><em class="mTit">신청일</em>2021-01-15</span>
                  <span class="lgItem item4"><em class="iLockSet end">사용종료</em></span>
                </li>
                <li class="listGrid expiry">
                  <span class="lgItem item0"><em class="mTit">신청기간</em>2021-01-01 ~ 2021-01-31</span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iLocSet ivy">아이비</em></span>
                      <span class="lgItem item2">6층 A구역(80)</span>
                    </span>
                  </div>
                  <span class="lgItem item3"><em class="mTit">신청일</em>2021-01-12</span>
                  <span class="lgItem item4"><em class="iLockSet end">사용종료</em></span>
                </li>
                <li class="listGrid expiry">
                  <span class="lgItem item0"><em class="mTit">신청기간</em>2021-02-01 ~ 2021-02-28</span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iLocSet ivy">아이비</em></span>
                      <span class="lgItem item2">6층 A구역 (1)</span>
                    </span>
                  </div>
                  <span class="lgItem item3"><em class="mTit">신청일</em>2021-02-11</span>
                  <span class="lgItem item4"><em class="iLockSet end">사용취소</em></span>
                </li>
                <li class="listGrid expiry">
                  <span class="lgItem item0"><em class="mTit">신청기간</em>2021-01-01 ~ 2021-01-31</span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iLocSet idea">이데아</em></span>
                      <span class="lgItem item2">4층 B구역(105)</span>
                    </span>
                  </div>
                  <span class="lgItem item3"><em class="mTit">신청일</em>2021-01-15</span>
                  <span class="lgItem item4"><em class="iLockSet end">사용종료</em></span>
                </li>
                <li class="listGrid expiry">
                  <span class="lgItem item0"><em class="mTit">신청기간</em>2021-01-01 ~ 2021-01-31</span>
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item1"><em class="iLocSet ivy">아이비</em></span>
                      <span class="lgItem item2">6층 A구역(80)</span>
                    </span>
                  </div>
                  <span class="lgItem item3"><em class="mTit">신청일</em>2021-01-12</span>
                  <span class="lgItem item4"><em class="iLockSet end">사용종료</em></span>
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
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';


export default {
  mixins: [Mixin],
  name: 'PaymentLocker',
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
