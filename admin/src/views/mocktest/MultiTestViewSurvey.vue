<template lang="html">
  <div>
    <!-- page layout -->
    <div class="multiTestViewSurvey"><!-- class 없어도 유지 -->
      <div class="subTit">
        <h3>시험 과목 별 난이도 설문결과</h3>
        <span class="right">
          <em>A20210101010 |  복합  |  1,2.3교시 타입  |  2022년 상반기 희소 모의고사</em>입니다.
        </span>
      </div>
      <div class="tls">
        <table>
          <colgroup><col style="width:8%;" span="2"></colgroup>
          <thead class="duble">
            <tr>
              <th scope="col" rowspan="2">과목</th>
              <th scope="col" rowspan="2">선생님</th>
              <th scope="col" rowspan="2">전체 모집인원</th>
              <th scope="col" rowspan="2">전체 접수인원</th>
              <th scope="col" rowspan="2">전체 응시인원</th>
              <th scope="col" colspan="5">모의고사 난이도 설문결과</th>
            </tr>
            <tr>
              <th scope="col">매우 쉬움</th>
              <th scope="col">쉬움</th>
              <th scope="col">보통</th>
              <th scope="col">어려움</th>
              <th scope="col">매우 어려움</th>
            </tr>
          </thead>
          <tbody>
            <!--Loop-->
            <tr>
              <td>국어</td>
              <td>박노송</td>
              <td>150</td>
              <td>140</td>
              <td>120</td>
              <td>
                <span class="unit w100">
                  <input type="text" class="tR"><em>명</em>
                </span>
              </td>
              <td>
                <span class="unit w100">
                  <input type="text" class="tR"><em>명</em>
                </span>
              </td>
              <td>
                <span class="unit w100">
                  <input type="text" class="tR"><em>명</em>
                </span>
              </td>
              <td>
                <span class="unit w100">
                  <input type="text" class="tR"><em>명</em>
                </span>
              </td>
              <td>
                <span class="unit w100">
                  <input type="text" class="tR"><em>명</em>
                </span>
              </td>
            </tr>
            <!--//Loop-->
            <tr>
              <td>영어</td>
              <td>차미아</td>
              <td>200</td>
              <td>190</td>
              <td>185</td>
              <td>
                <span class="unit w100">
                  <input type="text" class="tR"><em>명</em>
                </span>
              </td>
              <td>
                <span class="unit w100">
                  <input type="text" class="tR"><em>명</em>
                </span>
              </td>
              <td>
                <span class="unit w100">
                  <input type="text" class="tR"><em>명</em>
                </span>
              </td>
              <td>
                <span class="unit w100">
                  <input type="text" class="tR"><em>명</em>
                </span>
              </td>
              <td>
                <span class="unit w100">
                  <input type="text" class="tR"><em>명</em>
                </span>
              </td>
            </tr>
            <tr>
              <td>수학</td>
              <td>이정훈</td>
              <td>100</td>
              <td>100</td>
              <td>98</td>
              <td>
                <span class="unit w100">
                  <input type="text" class="tR"><em>명</em>
                </span>
              </td>
              <td>
                <span class="unit w100">
                  <input type="text" class="tR"><em>명</em>
                </span>
              </td>
              <td>
                <span class="unit w100">
                  <input type="text" class="tR"><em>명</em>
                </span>
              </td>
              <td>
                <span class="unit w100">
                  <input type="text" class="tR"><em>명</em>
                </span>
              </td>
              <td>
                <span class="unit w100">
                  <input type="text" class="tR"><em>명</em>
                </span>
              </td>
            </tr>
            <tr>
              <td>...</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
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
  name: 'MultiTestViewSurvey',
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
