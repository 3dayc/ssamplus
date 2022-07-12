<template lang="html">
  <div>
    <div class="mainSloganBack">
      <div class="mainSlogan">
        <p><span><strong>홍길동</strong> 선생님을 위한 완벽한 학습공간</span></p>
        <p class="minExp">오직 합격을 위해 설계된 1차 시험대비 연간 강좌플랜<br>20가지 프리미엄 서비스를 한꺼번에 누리는 특별한 학습지원서비스</p>
        <p class="midExp">오직 <em>쌤팩 프리미엄 회원</em>만의 다양한 특권을 누려 보세요.</p>
      </div>
    </div>
    <div class="LinkTab">
      <ul>
        <li class="t_01"><router-link to="#"><p><small>일찍 일어나는 습관을 만들어 주는</small>아침기상인증</p></router-link></li>
        <li class="t_02"><router-link to="#"><p><small>문의사항을 1:1로 해결할 수 있는</small>프리미엄 전용 카카오톡 채널</p></router-link></li>
        <li class="t_03"><router-link to="#"><p><small>나의 목표를 미리 보여주는</small>합격증 보기</p></router-link></li>
      </ul>
    </div>
    <span class="hrLine"></span>
    <div class="ssampackTabWrap">
      <div class="headTab">
          <ul>
            <li :class="{on:tabToggle===0}" @click="tabToggle = 0">
              <span class="profileIcon"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt="" /></span>
              <p><b>김현</b> 선생님</p>
            </li>
            <li :class="{on:tabToggle===1}" @click="tabToggle = 1">
              <span class="profileIcon"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare10.png`)" alt="" /></span>
              <p><b>희소 중국어 팀</b></p>
            </li>
          </ul>
      </div>
      <div class="packageMonthly">
          <div class="iconWrap">
            <em class="iSbjSet ivy">아이비</em>
            <em class="iSbjSet">교육학</em>
          </div>
          <p>4~5월 패키지</p>
      </div>
    </div>
    <div class="ssamBenefits">
      <ul class="benefitList">
        <li class="item1">
          <dl>
            <dt>상반기 이론 복습용 강의</dt>
            <dd>
              <p>이론의 이해와 암기를 위한 상반기 이론 전 과정, 복습용 강의 제공</p>
              <ul class="dotList">
                <li>각 과정별 2주 경과 후, 신청가능</li>
                <li>0.5배수/수강기간은 강의마다 상이</li>
                <li>일부 강좌 제외</li>
              </ul>
              <a class="btnApply">신청하기</a>
            </dd>
          </dl>
        </li>
        <li class="item2">
          <dl>
            <dt>학원 보충강의</dt>
            <dd>
              <p>학원강의 결석 시, 과정별 보충강의 2회 추가 제공</p>
              <ul class="dotList">
                <li>각 과정별 종강 후 10일 이내 신청 가능</li>
                <li>학원강의 수강 과정에 대해 제공</li>
              </ul>
              <a class="btnApply">신청하기</a>
            </dd>
          </dl>
        </li>
        <li class="item3">
          <dl>
            <dt>동영상 기간 연장</dt>
            <dd>
              <p>수강기간이 부족할 시, 과정별 기간 연장 7일 추가 제공</p>
              <ul class="dotList">
                <li>각 과정별 종강 7일 전~ 종강 후 15일 이내 신청 가능</li>
                <li>동영상강의 수강 과정에 대해 제공</li>
               </ul>
              <a class="btnApply">신청하기</a>
            </dd>
          </dl>
        </li>
        <li class="item4">
          <dl>
            <dt>과목별 입문 강의</dt>
            <dd>
              <p>임용 시험 준비를 시작하는 초보 수험생을 위해 준비중인<br/>>시험 과목 입문 강의 제공</p>
              <ul class="dotList">
                <li>과목별 제공 상이</li>
                <li>직접 신청이 안되는 경우 프리미엄 1:1 상담 문의</li>
              </ul>
              <a class="btnApply">신청하기</a>
            </dd>
          </dl>
        </li>
        <li class="item5">
          <dl>
            <dt>과목별 직/인강 특강</dt>
            <dd>
              <p>내가 선택한 선생님의 2021년 직/인강 특강 무료 수강</p>
              <ul class="dotList">
                <li>패키지&#38;단과 중 택1</li>
                <li>과목별 수강 방식 상이, 내강의실>수강강좌 관리 에서 보너스 강좌로 직접 신청</li>
              </ul>
              <a class="btnApply">신청하기</a>
            </dd>
          </dl>
        </li>
        <li class="item6">
          <dl>
            <dt>직/인강 무한 전환</dt>
            <dd>
              <p>시기별 학습 상황에 따라 과정별 직/인강 무한 전환 가능</p>
              <ul class="dotList">
                <li>과정별 전환 가능 예) 1~2월은 직강으로, 3~4월은 인강으로 수강 가능</li>
                <li>과정 내 1회 변경</li>
              </ul>
              <a class="btnApply">신청하기</a>
            </dd>
          </dl>
        </li>
        <li class="item7">
          <dl>
            <dt>9~11월 모의고사반 학원 응시 자격</dt>
            <dd>
              <p>실제 시험과 동일한 조건에서 이루어지는 모의고사반, 학원 응시 기회 부여</p>
              <ul class="dotList">
                <li>과목/선생님에 따라 상이</li>
                <li>학원 수강의 경우 자동으로 학원 응시자격을 가지며, 온라인 수강일 경우에도<br/> 학원에서 응시할 수 있도록 제공</li>
              </ul>
            </dd>
          </dl>
        </li>
        <li class="item8">
          <dl>
            <dt>사물함 10개월 사용</dt>
            <dd>
              <p>1~10월까지 개인 고정 사물함 1개 제공</p>
              <ul class="dotList">
                <li>1개월 단위로 신청가능</li>
              </ul>
            </dd>
          </dl>
        </li>
        <li class="item9">
          <dl>
            <dt>교원임용입문서/OMR노트 무료 제공</dt>
            <dd>
              <p>이론의 이해와 암기를 위한 상반기 이론 전 과정, 복습용 강의 제공</p>
              <ul class="dotList">
                <li>임용시험 정보를 담은 가이드북+실제 답안지 퀄리티의 OMR노트 무료 제공</li>
              </ul>
            </dd>
          </dl>
        </li>
        <li class="item10">
          <dl>
            <dt>교재 배송비 3회 무료</dt>
            <dd>
              <p>희소 선생님의 잘 만든 교재, 단 1권 구매 시에도 무료 배송</p>
              <ul class="dotList">
                <li>무료 배송쿠폰 3장 발급</li>
                <li>구매교재 합계가 15,000원 이상인 경우에만 사용 가능</li>
              </ul>
            </dd>
          </dl>
        </li>
        <li class="item11">
          <dl>
            <dt>2021년 희소 모의고사 우선 신청</dt>
            <dd>
              <p>조기 마감되는 희소 모의고사, 선접수/일반접수보다 더 빠른 신청</p>
              <ul class="dotList">
                <li>과목/선생님에 따라 상이</li>
                <li>모의고사 미진행 시 우선 신청권 제공되지 않음</li>
              </ul>
            </dd>
          </dl>
        </li>
        <li class="item12">
          <dl>
            <dt>한국사능력검정시험 합격패키지&#38;단과 1회 무료</dt>
            <dd>
              <p>한능검 3급 이상 필수 취득을 위해 가장 최신 패키지&#38;단과 1회 무료 제공</p>
              <ul class="dotList">
                <li>패키지&#38;단과 중 택1</li>
                <li>구폰 발급하여 원하는 시기에 사용 가능</li>
              </ul>
            </dd>
          </dl>
        </li>
        <li class="item13">
          <dl>
            <dt>희.소.식 안내</dt>
            <dd>
              <p>매 월 초, 월별 학습 꿀팁 안내 문자 발송</p>
              <ul class="dotList">
                <li>쌤플러스 SMS 수신 동의 필요, 월별 학습정보 제공</li>
              </ul>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PremiumSsampackIntro',
  components: {
  },
  data() {
    return {
      tabToggle : 0,
    }
  },
  methods: {
  },
  mounted() {
  },
  computed: {
  }
}
</script>
