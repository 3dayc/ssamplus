<template lang="html">
  <div>
    <div class="terms-tit">
      이용안내 및 유의사항
    </div>
    <ul>
      <li class="collapsible">
        <p
          :class="[toggleRule1 ? 'terms-title selected' : 'terms-title']"
          @click="toggleRule1 = !toggleRule1"
        >
          쌤팩 이용안내
        </p>
        <div class="content" v-if="toggleRule1">
          <p class="ptitle">쌤팩 이용안내</p>
          <ul>
            <li>
              쌤팩은 단과강의를 묶어 할인 판매하는 상품으로, 포함된 강의는 각 단과 강의
              수강 규정(수강기간, 수강시간, 연장, 홀딩 등) 기준으로 제공됩니다.
            </li>
            <li>
              포함된 강의는 각 단과강의 단위로 인강/직강 변경할 수 있습니다. 다만,
              인강/직강 변경은 학원 운영정책에 따라 적용되며 일부 강의는 변경이 불가할
              수 있습니다. 상세한 변경방법은 FAQ에서 내용을 확인할 수 있습니다.
            </li>
            <li>학원 사정으로 일부 강의 구성이 변경될 수 있습니다.</li>
            <li>
              과목에 따라 포함강의가 상이할 수 있습니다. 상세 구성을 꼭 확인하시기
              바랍니다.
            </li>
            <li>
              학원 강의는 수강증 발급이 되어 있지 않아도, 학원 강의 개강 후에는 수강한
              것으로 간주되어 수강료가 공제됩니다.
            </li>
            <li>
              동영상 강의 시작일은 결제일 기준 7일 이내에 강의를 수강하지 않은 경우 최대
              10일까지 변경이 가능하며, 포함된 각 강의 별로 설정이 가능합니다.(개강하지
              않은 강의는 개강일 기준으로 시작일을 설정할 수 있습니다)
            </li>
            <li>
              동영상 강의는 시작일 기준으로 자동 시작되며, 환불 시 시작된 강의는 실제
              수강여부와 관계 없이 수강한 것으로 간주되어 수강료가 공제됩니다.
            </li>
            <li>
              추가적으로 동영상 강의 수강 일정 변경을 원하시면 강의 시작 후 홀딩서비스를
              통해 변경할 수 있습니다. 사용 가능한 홀딩기간은 각 강의 별로 표기되어
              있습니다.
            </li>
          </ul>
        </div>
      </li>
      <li class="collapsible">
        <p
          :class="[toggleRule2 ? 'terms-title selected' : 'terms-title']"
          @click="toggleRule2 = !toggleRule2"
        >
          쌤팩 프리미엄 이용안내
        </p>
        <div class="content" v-if="toggleRule2">
          <ul>
            <li>쌤팩 프리미엄은 2022년 11월 30일까지 제공됩니다.</li>
            <li>결제한 쌤팩 프리미엄 과목에 대한 프리미엄 서비스만 제공됩니다.</li>
            <li>
              연간 쌤팩/3~11월 쌤팩 결제없이 쌤팩 프리미엄만 단독 결제는 불가합니다.
            </li>
            <li>쌤팩 프리미엄 구성은 진행 과목별 상이할 수 있습니다.</li>
            <li>
              제공 되는 사항은 각 항목별 제공 시기 및 방법이 상이할 수 있으며, 해당
              내용은 쌤팩 프리미엄 라운지에서 확인하실 수 있습니다.
            </li>
          </ul>
          <div class="style1">[쌤팩 프리미엄 구성별 상세 안내]</div>
          <ul>
            <li>
              2023 쌤팩: 각 과목/선생님별 1~10(11)월 또는 3~10(11)월 강좌가 포함되어
              있습니다.
            </li>
          </ul>
          <table class="terms-tb">
            <colgroup>
              <col width="30%" />
              <col width="*" />
            </colgroup>
            <tbody>
              <tr>
                <th>프리미엄 전용 1:1 고객센터</th>
                <td>
                  프리미엄 라운지 내 1:1 고객센터에 문의 글을 남겨주시면 가장 빠르고
                  친절하게 해결해드리겠습니다.
                </td>
              </tr>
            </tbody>
          </table>
          <div class="style1">[프리미엄 학습/수강 지원]</div>
          <table class="terms-tb">
            <colgroup>
              <col width="30%" />
              <col width="*" />
            </colgroup>
            <tbody>
              <tr>
                <th>직/인강 무한 전환</th>
                <td>
                  매 과정별 원하는 방식으로 수강할 수 있으며, 직강 연간쌤팩 / 동영상
                  연간쌤팩 신청과 상관없이 원하시는 과정으로 전환이 가능합니다. 필요한
                  경우 프리미엄 전용 1:1 상담 게시판에 수강 원하는 과정을 남겨주시면
                  전환해 드립니다. 단, 직강 수강인원이 마감되었을 경우는 직강으로의
                  전환이 어렵습니다.<br />예시) 1~2월 직강/3~4월 인강/5~6월 직강 등
                  원하는 방식으로 전환 가능
                </td>
              </tr>
              <tr>
                <th>학원 보충강의</th>
                <td>
                  수강하는 과정이 학원 강의일 경우에 제공되며, 프리미엄 라운지에서 직접
                  신청 가능합니다.
                </td>
              </tr>
              <tr>
                <th>동영상 기간연장</th>
                <td>
                  수강하는 과정이 동영상 강의일 경우 제공되며, 프리미엄 라운지에서 직접
                  신청 가능합니다.
                </td>
              </tr>
              <tr>
                <th>이론 복습용 강의</th>
                <td>
                  상반기 이론 강의에만 한정되며, 1~2/3~4/5~6월 과정마다 별도 신청할 수
                  있습니다. 각 과정의 1/2 이상이 지난 후 프리미엄 라운지에서 직접 신청
                  가능하며, 결제한 강좌에 한해서만 제공됩니다.
                </td>
              </tr>
              <tr>
                <th>제17회 희소모의고사<br />무료 응시권</th>
                <td>
                  2022년 시행될 희소 현장+온라인 모의고사 중 한 가지를 선택하시면 무료
                  응시 기회를 제공해드립니다. 단 희소 모의고사를 진행하지 않는
                  과목/선생님의 경우, 해당 혜택 제공이 어렵습니다.
                </td>
              </tr>
              <tr>
                <th>제16회 희소 온라인<br />모의고사 무료 제공</th>
                <td>
                  2021년 시행된 희소 온라인 모의고사를 무료로 제공해드립니다. 단 희소
                  모의고사가 진행되지 않았던 과목/선생님의 경우, 해당 혜택 제공이
                  어렵습니다.
                </td>
              </tr>
              <tr>
                <th>9~11월 모의고사반<br />학원 응시 자격</th>
                <td>
                  해당 과정을 온라인으로 수강하더라도 학원에 출석하여 시험 응시할 기회를
                  드립니다. (2회)
                </td>
              </tr>
            </tbody>
          </table>
          <div class="style1">[프리미엄 학습 관리/부가 서비스]</div>
          <table class="terms-tb">
            <colgroup>
              <col width="30%" />
              <col width="*" />
            </colgroup>
            <tbody>
              <tr>
                <th>아침 기상 일일 인증</th>
                <td>
                  매일 아침 규칙적인 공부 습관을 기를 수 있도록 기상 인증 서비스를
                  제공해드립니다.
                </td>
              </tr>
              <tr>
                <th>월 별 학습시작 응원선물</th>
                <td>
                  매 월 초, 학습 시작을 응원하기 위해 스타벅스 카페 아메리카노 기프티콘
                  1종을 제공해드립니다.
                </td>
              </tr>
              <tr>
                <th>미리 보는 2023 임용합격증</th>
                <td>
                  이름이 자동으로 찍히는 2023학년도 임용시험 합격증서를 미리 다운로드
                  받아, 책상 앞에 붙여 두고 늘 힘을 내세요.
                </td>
              </tr>
              <tr>
                <th>교재 배송비 3회 무료</th>
                <td>배송비 무료 쿠폰 3장을 내 쿠폰함에 제공해드립니다.</td>
              </tr>
              <tr>
                <th>사물함 11개월 무료</th>
                <td>
                  직/인강 프리미엄 회원 누구나 원하시는 관을 지정하시면 사물함 1개를
                  2022년 11월까지 무료로 제공해 드립니다. 학원 방문 후 데스크에서 신청
                  가능합니다. 각 관 별 사물함 이용현황에 따라 원하시는 위치를 지정할 수
                  있습니다.
                </td>
              </tr>
              <tr>
                <th>학습지원 필수템 배송</th>
                <td>
                  학습에 꼭 필요한 아이템(희소 드림 플래너, OMR 노트, 독서대, 텀블러,
                  모나미 Fx 제타 펜, 스톱워치, 귀마개, KFC 1만원 권)만 골라 프리미엄
                  회원 전원에게 배송해드립니다.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </li>
      <li class="collapsible">
        <p
          :class="[toggleRule3 ? 'terms-title selected' : 'terms-title']"
          @click="toggleRule3 = !toggleRule3"
        >
          쌤팩 환불규정
        </p>
        <div class="content" v-if="toggleRule3">
          <ul>
            <li>
              쌤팩 환불 시에는 이미 수강한 상품의 정가(단과 기준)를 기준으로 공제하고
              환불함을 원칙으로 합니다.
            </li>
            <li>보너스 강의가 포함된 경우 보너스강의의 원 수강료가 차감됩니다.</li>
          </ul>
          <div class="style1">[학원]</div>
          <ul>
            <li>[전액환불] 교습개시 이전</li>
            <li>
              [부분환불] 교습개시 후 교습시간의 1/2 경과하지 않은 경우 부분환불 적용
              <a
                :href="`http://www.ssamplus.com/helpdesk_New/helpdesk_faq_view.asp?intFaqBoardSeq=416&amp;retUrl=%2E%2Fhelpdesk%5Ffaq%5Flist%2Easp%3Fpage%3D%26strFaqClassCode%3D17%26strFaqCode%3D%26strSchClass%3D%26strSchString%3D`"
                target="_blank"
                style="text-decoration: underline"
                >[1](학원 환불규정 보기)</a
              >
            </li>
          </ul>
          <div class="style1">[동영상]</div>
          <ul>
            <li>
              [전액환불] 결제일로부터 7일 이내 샘플강의 제외 1강 이하로 수강했을 경우
            </li>
            <li>
              [부분환불] 결제일로부터 7일이 경과하거나 샘플강의 제외 1강을 초과하여
              수강했을 경우 동영상강의 환불규정에 따라 부분환불 적용
              <a
                :href="`http://www.ssamplus.com/helpdesk_New/helpdesk_faq_view.asp?intFaqBoardSeq=416&amp;retUrl=%2E%2Fhelpdesk%5Ffaq%5Flist%2Easp%3Fpage%3D%26strFaqClassCode%3D17%26strFaqCode%3D%26strSchClass%3D%26strSchString%3D`"
                target="_blank"
                style="text-decoration: underline"
              >
                [2](동영상 환불규정 보기)
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="collapsible">
        <p
          :class="[toggleRule4 ? 'terms-title selected' : 'terms-title']"
          @click="toggleRule4 = !toggleRule4"
        >
          쌤팩 프리미엄 환불규정
        </p>
        <div class="content" v-if="toggleRule4">
          <ul>
            <li>강의에 대한 환불 규정은 위 [쌤팩 환불규정]에 따릅니다.</li>
            <li>
              쌤팩 프리미엄 구성에 대한 환불규정은 아래와 같습니다.<br />
              <div style="text-indent: 0">
                [전액환불] 서비스 개시 이전<br />
                [부분환불]<br />
                ·구성상품 금액: 제공받은 모든 실물 상품 및 부가서비스에 대한 비용(할인
                전 정가) 차감<br />
                ·왕복 배송비 공제: 수령 받은 실물 상품의 왕복 배송비 차감<br />
                ·부분환불 및 위약금에서 공제하는 금액은 할인 전 정가 기준으로
                적용됩니다.
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Mixin from "@/plugins/mixins/Mixins.js";

export default {
  mixins: [Mixin],
  name: "Ssampack00Terms",
  data() {
    return {
      toggleRule1: true,
      toggleRule2: false,
      toggleRule3: false,
      toggleRule4: false,
    };
  },
};
</script>
