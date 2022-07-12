<template lang="html">
  <div>
    <!-- page layout -->
    <div class="monthTestViewEsign"><!-- class 없어도 유지 -->
      <!-- 전광판 순서 및 시간 -->
      <div class="subTit">
        <h3>전광판 순서 및 시간</h3>
        <span class="right">
          <em> M-99999999999 |  단일  |  국어  |  박노송  |  2.3교시 타입  |  박노송 전공국어 – 월별 모의고사</em>입니다.
        </span>
      </div>
      <div class="tls">
        <table>
          <colgroup>
            <col width="150">
            <col width="150">
            <col width="*">
          </colgroup>
          <thead>
            <tr>
              <th>진행</th>
              <th>중등/중특</th>
              <th>전광판</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>유의사항</td>
              <td>입장 시</td>
              <td class="tL">실제 시험과 유사하게 각 시간 별 실시간 시험 안내 방송이 나오고 있습니다. 스피커를 조절해 주세요.</td>
            </tr>
            <tr>
              <td>2교시<br/>시험지 배포</td>
              <td class="tR">15분 경과</td>
              <td class="tL">2교시 답안지를 준비 및 답안 작성 유의사항을 확인해 주시기 바랍니다.</td>
            </tr>
            <tr>
              <td rowspan="5">2교시</td>
              <td class="tR">28분 경과</td>
              <td class="tL">2교시 문제지를 준비해 주시기 바랍니다.</td>
            </tr>
            <tr>
              <td class="tR">35분 경과</td>
              <td class="tL">2교시 시험을 시작하겠습니다.</td>
            </tr>
            <tr>
              <td class="tR">36분 경과</td>
              <td class="tL">2교시 시험 응시 중입니다.</td>
            </tr>
            <tr>
              <td class="tR">115분 경과</td>
              <td class="tL">시험 종료까지 10분 남았습니다.</td>
            </tr>
            <tr>
              <td class="tR"><span class="fRed">125</span>분 경과</td>
              <td class="tL">2교시 시험이 종료되었습니다. 답안 작성을 멈추시기 바랍니다.</td>
            </tr>
            <tr>
              <td>쉬는 시간</td>
              <td class="tR">126분 경과</td>
              <td class="tL">쉬는 시간입니다. 용무를 마치고 3교시 시작 20분 전까지 입실하여 주시기 바랍니다.</td>
            </tr>
            <tr>
              <td>3교시<br/>시험지 배포</td>
              <td class="tR">145분 경과</td>
              <td class="tL">3교시 시험 시작 20분 전입니다. 3교시 답안지를 준비해 주시기 바랍니다.</td>
            </tr>
            <tr>
              <td rowspan="5">3교시</td>
              <td class="tR">158분 경과</td>
              <td class="tL">3교시 문제지를 준비해 주시기 바랍니다.</td>
            </tr>
            <tr>
              <td class="tR">165분 경과</td>
              <td class="tL">3교시 시험을 시작하겠습니다.</td>
            </tr>
            <tr>
              <td class="tR">166분 경과</td>
              <td class="tL">3교시 시험 응시 중입니다.</td>
            </tr>
            <tr>
              <td class="tR">245분 경과</td>
              <td class="tL">시험 종료까지 10분 남았습니다.</td>
            </tr>
            <tr>
              <td class="tR">255분 경과</td>
              <td class="tL">3교시 시험이 종료되었습니다. 답안 작성을 멈추시기 바랍니다.</td>
            </tr>
            <tr>
              <td>마무리</td>
              <td class="tR">256분 경과</td>
              <td class="tL">희소 모의고사를 마치겠습니다. 수고하셨습니다.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //전광판 순서 및 시간 -->
    </div>
    <!-- //page layout -->

    <!-- Popup -->
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MonthTestViewEsign',
  data() {
    return {
      alertTrigger: false,
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
