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
        <div class="cleanIdShare">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>ID 공유금지 안내</h3>
          </div>
          <!-- //서브 타이틀 -->
          <div class="mainDefine">
            <p>
              <em class="exp">쌤플러스 <strong>아이디 공유, 모니터, 빔 프로젝터 등을 이용한 단체수강, 컨텐츠 공유/복제/판매(매매)</strong> 등에 대한 행위를 규제합니다.</em>
              <em class="exp">이는 정상적으로 수강하시는 회원분들의 불이익 방지 및 강의를 진행하시는 선생님, 쌤플러스의 저작권과 권리를 보호하기 위함입니다.</em>
            </p>
          </div>
          <div class="illegalUse">
            <h4>불법사용이 무엇인가요?</h4>
            <p>
              쌤플러스는 개인정보유출 방지 및 회원정보 보호를 위하여 <strong>실명제를 시행</strong>하고 있습니다.<br/>
              회원약관 동의와 함께 본인의 정보를 타인에게 노출할 수 없으며, 그로 인해 일어나는 피해는 회원본인이 책임져야 합니다.
            </p>
            <div>
              <dl class="use01">
                <dt>ID 공유</dt>
                <dd>
                  <span>한개의 아이디로 2명 이상이나 단체가 수강하는 것을 말합니다. </span> <span>신청강좌는 본인만 수강해야 하며 아이디공유 및 양도, </span> <span>판매할 수 없습니다.</span>
                  <!-- 20220307 수정 -->
                </dd>
              </dl>
              <dl class="use02">
                <dt>컨텐츠 공유·복제·판매</dt>
                <dd><span>온라인강의 및 수업자료 등의 모든 컨텐츠는 공유,복제,판매가 </span> <span>금지되어 있습니다. 이는 쌤플러스 및 해당 교수님의</span> <span>지적 재산권과 저작권을 침해하는 행위입니다.</span></dd>
                <!-- 20220307 수정 -->
              </dl>
            </div>
          </div>
          <span class="hrLine"></span>
          <div class="illegaCheck">
            <h4>적발 및 조치 확인하기</h4>
            <p>
              <strong>아이디 공유는 불법</strong>입니다. 쌤플러스는 계속적으로 공유·불법행위를 단속하고 있습니다.<br/>
              모든 아이디 공유 적발 시에는 <strong>저작권법, 디지털콘텐츠산업진흥법 등에 의해 법적 조치</strong>를 취하겠습니다.
            </p>
            <h5>1. 동시 접속 및 수강로그 확인에 의한 아이디공유</h5>
            <div class="kind1">
              <dl class="time01">
                <dt>1차 안내</dt>
                <dd>
                  <strong>동시 접속 1회</strong>
                  <span>동시접속으로 인한 로그아웃<br/>아이디 누출 및 공유금지 경고장</span>
                </dd>
              </dl>
              <dl class="time02">
                <dt>2차 안내</dt>
                <dd>
                  <strong>동시 접속 2회</strong>
                  <span>일반강좌 : 0.8배 자동 시간 제한<br/>특강 : 강의 자동 차단</span>
                </dd>
              </dl>
              <dl class="time03">
                <dt>3차 안내</dt>
                <dd>
                  <strong>동시 접속 3회</strong>
                  <span>강의 자동 차단 / 벌금 부과 및</span> <span>법적 조치</span>
                </dd>
              </dl>
            </div>
            <div class="etc">
              <p>
                ※ (1) 일반강의 : 1.4배수 이상의 강의,  (2) 특강 : 1.2배수 이하의 강의
              </p>
              <p>
                - 동시 접속이 다수 일어날 경우에는 ID사용정지, 강좌폐쇄가 됩니다.<br/>
                - 아이디공유 확인 시에는 동시접속 경고에 상관없이 강좌폐쇄와 벌금부과, 법적 조치가 됩니다.
              </p>
            </div>
            <h5>2. 컨텐츠 불법사용</h5>
            <div class="kind2 tableList">
              <dl>
                <dt>동시접속 이외 공유 시 적발</dt>
                <dd>
                  <span class="dot">강좌폐쇄와 벌금부과(2배 이상), 법적조치</span>
                </dd>
              </dl>
              <dl>
                <dt>연장 신청 시 적발</dt>
                <dd>
                  <span class="dot">강좌폐쇄와 벌금부과(2배 이상), 법적조치</span>
                  <span class="dot">강좌연장신청 안 됨</span>
                </dd>
              </dl>
              <dl>
                <dt>단체수강 및 불법복제, 판매 행위</dt>
                <dd>
                  <span class="dot">저작권침해 소송과 법적조치</span>
                </dd>
              </dl>
            </div>
          </div>
          <span class="hrLine"></span>
          <div class="shareCase">
            <h4>ID 공유 해당사례 보기</h4>
            <div class="tableList">
              <dl>
                <dt>아이디 불법 공유에 해당하는 경우</dt>
                <dd>
                  <span class="dot">학습자료 출력 및 샘플강좌 수강을 위해 타인에게 ID, 비밀번호를 유출하는 경우</span>
                  <span class="dot">같은 시간대에 다른 장소에서 동시 접속 기록이 있는 경우</span>
                  <span class="dot">하나의 ID로 2명 이상이 함께 수강하는 경우</span>
                  <span class="dot">다른 사람의 명의로 강의를 수강하는 경우 (강좌는 양도가 안 됩니다.)</span>
                  <span class="dot">일정패턴으로 두대 이상의 컴퓨터에서 수강 할 경우</span>
                  <span class="dot">카페 및 커뮤니티에 아이디공유 모집 관련 글</span>
                </dd>
              </dl>
              <dl>
                  <dt>해당 되지 않는 경우 (혼자 수강할 경우)</dt>
                  <dd>
                    <span class="dot">집, 직장, 도서관 등 2~3군데 장소에서 수강하는 경우</span>
                    <span class="dot">주거지 이전, 인터넷 접속서비스 업체의 변경</span>
                    <span class="dot">불가피한 사유로 인해 제3의 장소에서 수강해야 하는 경우</span>
                    <span class="dot">유동 IP인 동일 컴퓨터에서의 수강</span>
                </dd>
              </dl>
            </div>
          </div>
          <span class="hrLine"></span>
          <div class="sharePerson">
            <h4>ID 공유자 처벌 확인하기</h4>
            <strong>아이디 공유는 법적으로 불법(저작권법 및 디지털콘텐츠산업진흥법 위반)이며 회원약관에도 위배됩니다.</strong>
            <p>
              - 아이디 공유 적발자는 적발 시 강좌 즉시 폐쇄뿐만 아니라 강좌료에 대해 벌금이 부과됩니다.<br/>
              - 강좌가 종료되었더라도 추후 아이디 공유사실이 드러날 경우 강좌료에 대한 벌금이 부과됩니다.<br/>
              - 아이디 공유자에게는 법적인 조치를 취할 수 있습니다.
            </p>
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
  name: 'CleanIDShare',
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
