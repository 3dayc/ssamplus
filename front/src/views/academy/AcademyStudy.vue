<template lang="html">
  <div>
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="academyStudy">
          <!-- 메인 -->
          <div class="mainSlogan">
            <div class="txt">
              <strong><span>서로에게 힘이 되어주는 든든한 인연</span> 전국 스터디 모임 찾기</strong>
              <p>
                가장 기본적인 그룹 스터디 외에도, 다양한 목적을 이룰 수 있는 스터디 방법이 있다는 사실! 알고 계셨나요?<br/>
                자신에게 필요한 스터디를 찾아, <br class="mBr"/> <em>효과적인 공부가 이루어질 수 있도록</em> 서로 윈윈하기
              </p>
            </div>
            <div class="infoGuide">
              <dl class="item01">
                <dt>생활 스터디</dt>
                <dd><span>기상시간 인증.</span> 정해진 공부 시간 인증 등 쉽게 흐트러질 수 있는 생활 습관을 잡아줍니다!</dd>
              </dl>
              <dl class="item02">
                <dt>짝 스터디</dt>
                <dd><span>도식과 체크리스트 제작, 순서에 따라 구두인출!</span> 서로 믿고 의지하며 <span>긴 수험생활에 든든한</span> 짝꿍이 됩니다!</dd>
              </dl>
              <dl class="item03">
                <dt>전화 스터디</dt>
                <dd><span>오프라인 스터디가 부담스러울 때!</span> <span>기상하기 힘든 오전에!</span> <span>효과적인 인출이 필요할 때!</span> 유용한 스터디 방법</dd>
              </dl>
              <dl class="item04">
                <dt>SNS 스터디</dt>
                <dd><span>SNS를 활용해서</span> <span>그룹원과 문제 또는 팁 공유!</span> 잠들기 전, 간단하게 확인하고 다시 되짚을 수 있는 기회가 됩니다!</dd>
              </dl>
            </div>
          </div>
          <!-- //메인 -->
          <div class="academyTopBtn active">
            <div>
              <span><router-link class="goArea01" to="/mkup/academy/index"><em>강의실 배정표</em></router-link></span>
              <span><router-link class="goArea02" to="/mkup/academy/index"><em>학원 보충강의</em></router-link></span>
              <span><router-link class="goArea03" to="/mkup/academy/index"><em>사물함 신청</em></router-link></span>
              <span class="on"><button class="goArea04"><em>스터디 하실래요</em></button></span>
              <span><router-link class="goArea05" to="/mkup/academy/index"><em>학원 시설</em></router-link></span>
              <span><router-link class="goArea06" to="/mkup/academy/index"><em>1:1 상담하기</em></router-link></span>
              <span><router-link class="goArea07" to="/mkup/academy/index"><em>학원 위치</em></router-link></span>
            </div>
          </div>
          <div class="frameBack">
            <div class="subTit">
              <span class="right-po">
                <router-link to="/mkup/academy/study/write" class="btnS">스터디 모집</router-link>
              </span>
              <h3>함께 할 스터디 찾기</h3>
            </div>
            <div class="boardTop">
              <span class="selectSet">
                <select name="" id="">
                  <option value="">전체</option>
                  <option value="">모집 중</option>
                  <option value="">모집마감</option>
                </select>
              </span>
              <span class="listSearch">
                <input type="text" placeholder="제목, 내용으로 검색" />
                <button class="btnSearch">검색</button>
              </span>
            </div>
            <div class="studyList">
              <ul>
                <li>
                  <router-link to="/mkup/academy/study/view">
                    <span class="iSet green">모집중</span>
                    <span class="id male">ssf*****</span>
                    <strong>기본서와 심화이론 읽기</strong>
                    <em><i>과목</i> 미술</em>
                    <em><i>구분</i> 온라인</em>
                    <em><i>요일</i> 매일</em>
                    <em><i>시간</i> 협의</em>
                  </router-link>
                </li>
                <li class="off">
                  <router-link to="#">
                    <span class="iSet">모집마감</span>
                    <span class="id">add*****</span>
                    <strong>김현 교육학 짝스터디 구합니다.</strong>
                    <em><i>과목</i> 교육학</em>
                    <em><i>구분</i> 오프라인</em>
                    <em><i>지역</i> 대구 동구</em>
                    <em><i>요일</i> 월, 화, 수, 목, 금</em>
                    <em><i>시간</i> 오전</em>
                  </router-link>
                </li>
                <li>
                  <router-link to="/mkup/academy/study/view2">
                    <span class="iSet green">모집중</span>
                    <span class="id">rtx*****</span>
                    <strong>체육 온라인 스터디 모집 (내꺼)</strong>
                    <em><i>과목</i> 체육</em>
                    <em><i>구분</i> 온라인</em>
                    <em><i>요일</i> 월, 화, 수, 목, 금, 토</em>
                    <em><i>시간</i> 오후</em>
                  </router-link>
                </li>
                <li>
                  <router-link to="/mkup/academy/study/view">
                    <span class="iSet green">모집중</span>
                    <span class="id male">fgh*****</span>
                    <strong>짝스터디 구합니다.</strong>
                    <em><i>과목</i> 교육학</em>
                    <em><i>구분</i> 오프라인</em>
                    <em><i>지역</i> 경남 창원시 의창구</em>
                    <em><i>요일</i> 월, 수, 금</em>
                    <em><i>시간</i> 야간</em>
                  </router-link>
                </li>
                <li>
                  <router-link to="/mkup/academy/study/view">
                    <span class="iSet green">모집중</span>
                    <span class="id male">ssf*****</span>
                    <strong>기본서와 심화이론 읽기</strong>
                    <em><i>과목</i> 미술</em>
                    <em><i>구분</i> 온라인</em>
                    <em><i>요일</i> 매일</em>
                    <em><i>시간</i> 협의</em>
                  </router-link>
                </li>
                <li class="off">
                  <router-link to="/mkup/academy/study/view">
                    <span class="iSet">모집마감</span>
                    <span class="id">add*****</span>
                    <strong>김현 교육학 짝스터디 구합니다.</strong>
                    <em><i>과목</i> 교육학</em>
                    <em><i>구분</i> 오프라인</em>
                    <em><i>지역</i> 대구 동구</em>
                    <em><i>요일</i> 월, 화, 수, 목, 금</em>
                    <em><i>시간</i> 오전</em>
                  </router-link>
                </li>
                <li class="off">
                  <router-link to="/mkup/academy/study/view">
                    <span class="iSet">모집마감</span>
                    <span class="id">rtx*****</span>
                    <strong>체육 온라인 스터디 모집</strong>
                    <em><i>과목</i> 체육</em>
                    <em><i>구분</i> 온라인</em>
                    <em><i>요일</i> 월, 화, 수, 목, 금, 토</em>
                    <em><i>시간</i> 오후</em>
                  </router-link>
                </li>
                <li>
                  <router-link to="/mkup/academy/study/view">
                    <span class="iSet green">모집중</span>
                    <span class="id male">fgh*****</span>
                    <strong>짝스터디 구합니다.</strong>
                    <em><i>과목</i> 교육학</em>
                    <em><i>구분</i> 오프라인</em>
                    <em><i>지역</i> 경남 창원시 의창구</em>
                    <em><i>요일</i> 월, 수, 금</em>
                    <em><i>시간</i> 야간</em>
                  </router-link>
                </li>
                <!-- <li class="noList">게시글이 없습니다.</li> 게시글이 없을 경우 -->
              </ul>
            </div>
            <div class="paging">
            <Paginate v-if="!this.mobile" />
            <div class="moreBtnWrap" v-if="this.mobile">
              <button class="mobileMore">더보기</button>
            </div>
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
  name: 'AcademyStudy',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>
