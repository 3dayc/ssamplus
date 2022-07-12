<template lang="html">
  <div>
    <div class="pageTit">
      <h2>강좌별 수강생 조회</h2>
      <span><router-link to="/mkup/teacher/studentOnline">강좌/수강생</router-link><router-link to="/mkup/teacher/studentOnline">강좌별 수강생 조회</router-link><em>상세</em></span>
    </div>

    <div class="content">
    <article>
      <!-- page layout -->
      <div class="studentOnline"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li>
                    <a href="/mkup/teacher/studentOnline">온라인 강좌</a>
                  </li>
                  <li class="on">
                    <a href="/mkup/teacher/studentDirect">학원 강좌</a>
                  </li>
                  <li class="">
                    <a href="/mkup/teacher/studentLive">라이브 강좌</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="tabLayout">
            <div class="tabData">
              <div class="boardTop">
                <div class="left-po">
                  <b class="fBlue">[21 3~4월] 국어교육론 실전대비 과정 |  단과(무료)</b> 정보입니다.
                </div>
                <div class="right-po">
                  <a href="/mkup/teacher/studentDirect" class="btnList">목록으로</a>
                </div>
              </div>
              <div class="tls">
                <table>
                  <colgroup><col style="width:12%" span="4"><col></colgroup>
                  <thead>
                    <tr>
                      <th scope="col">이름/아이디</th>
                      <th scope="col">휴대전화 번호</th>
                      <th scope="col">결제일</th>
                      <th scope="col">수강구분</th>
                      <th scope="col">비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!--Loop-->
                    <tr>
                      <td>김회수<br/>(kimhs0123)</td>
                      <td>010-****-****</td>
                      <td>2021-05-01</td>
                      <td>유료수강</td>
                      <td class="tL">[2021-02-23 15:35  / 박미진 ] 수강료 장기 연체 고객입니다. 현재 무통장 입금으로 계좌번호 전달한 상태임. </td>
                    </tr>
                    <!--//Loop-->
                    <tr>
                      <td>김회수<br/>(kimhs0123)</td>
                      <td>010-****-****</td>
                      <td>2021-05-01</td>
                      <td>무료수강</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>김회수<br/>(kimhs0123)</td>
                      <td>010-****-****</td>
                      <td>2021-05-01</td>
                      <td>유료수강</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>김회수<br/>(kimhs0123)</td>
                      <td>010-****-****</td>
                      <td>2021-05-01</td>
                      <td>무료수강</td>
                      <td class="tL">[2021-02-23 15:35  / 박미진 ] 수강료 장기 연체 고객입니다. 현재 무통장 입금으로 계좌번호 전달한 상태임. </td>
                    </tr>
                    <tr>
                      <td>김회수<br/>(kimhs0123)</td>
                      <td>010-****-****</td>
                      <td>2021-05-01</td>
                      <td>유료수강</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>김회수<br/>(kimhs0123)</td>
                      <td>010-****-****</td>
                      <td>2021-05-01</td>
                      <td>무료수강</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>김회수<br/>(kimhs0123)</td>
                      <td>010-****-****</td>
                      <td>2021-05-01</td>
                      <td>유료수강</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>김회수<br/>(kimhs0123)</td>
                      <td>010-****-****</td>
                      <td>2021-05-01</td>
                      <td>무료수강</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>김회수<br/>(kimhs0123)</td>
                      <td>010-****-****</td>
                      <td>2021-05-01</td>
                      <td>유료수강</td>
                      <td></td>
                    </tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
    </div>
    <!-- Popup -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="popClass">
      <div slot="modalheader" class="tL">
        <h1>개인정보 보안관리 확인</h1>
        <span>* 수강생 개인정보 조회 전에 반드시 동의하셔야 합니다.</span>
      </div>
      <div slot="modalbody">
        <div class="securityWrap">
          <dl>
            <dt>본인은 주식회사 케이지 에듀원 [이하 ‘회사’]로부터 제공받은 회사의 고객정보 활용과 관련하여 다음과 같이 확약합니다.</dt>
            <dd>
                <span class="tit">- 개인정보 보안관리 확약서 -</span>
                <ul>
                  <li>1. 본인은 회사가 고객의 개인정보를 중요시하며 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’ 및 “개인정보 보호법” 등 개인정보와 관련된 법령을 준수하고 있음을 잘 알고 있으며, 이러한 회사의 의무와 책임이 본인에게 동일하게 적용됨을 이해하고, 이를 준수할 것을 확약합니다.</li>
                  <li>2. 본인은 회사로부터 제공받은 고객의 개인정보를 [강의 본연의 업무] 수행을 위하여 필요한 범위 내에서 적합하게 처리하여야 하며, 그 범위를 초과하여 본건 개인정보를 이용하거나 제3자에게 제공하여서는 아니 된다.</li>
                  <li>3. 본인은 [강의 본연의 업무]에 따른 처리 목적이 달성되거나 회사와 체결한 강의위탁계약이 해지 또는 종료된 경우 지체 없이 본건 개인정보를 파기하거나 회사에게 반납하여야 한다.</li>
                  <li>4. 본인은 [강의 본연의 업무]에 따른 처리 목적이 달성되기 전이라 하더라도 동의 철회권을 행사하는 고객(정보주체)의 요청에 따라 회사가 본인에게 본건 개인정보의 파기 및 처리 중단을 요청하는 경우 지체 없이 본건 개인정보를 파기하고 그 처리를 중단하여야 한다.</li>
                  <li>5. 본인은 본 확약사항을 위반하거나, 고의 또는 과실로 본 확약의 의무를 불이행 함으로써 회사에게 손해를 가한 경우 그 손해 및 이와 관련하여 발생한 일체의 비용(변호사 비용을 포함하여 배상청구와 관련된 소송 등 절차에서 발생한 비용을 포함함)을 배상하여야 한다.</li>
                </ul>
            </dd>
          </dl>
          <div class="tC"><button class="btnL blue" @click="popupTrigger = false">본인은 제공받은 고객정보 활용을 확약합니다.</button></div>
        </div>
      </div>
    </Popup>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'StudentOnlineView',
  data() {
    return {
      popupTrigger: true,
      popClass: "securityPop",
    }
  },
  methods: {

  },
  components: {
  }
}
</script>
