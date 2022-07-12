<template lang="html">
  <div>
    <div class="pageTit">
      <h2>가입/탈퇴 이력</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/userSignup">회원 통계</router-link><em>가입/탈퇴 이력</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="userSignup"><!-- class 없어도 유지 -->
        <!-- 필터 -->
        <div class="boardTop w900">
          <div class="left-po">
            <span class="selectSet">
              <select name="" id="">
                <option value="">2021년</option>
                <option value="">2020년</option>
                <option value="">2019년</option>
              </select>
            </span>
          </div>
          <div class="right-po">
            <dl>
              <dt>&lt;연간 누적 가입자 수&gt;</dt>
              <dd><strong>9,071</strong>회</dd>
            </dl>
          </div>
        </div>
        <!-- //필터 -->
        <!-- 차트 -->
        <div class="chart h200">
          <Echart
            :option="lineChart"
            :loading="loading"
          />
        </div>
        <!-- //차트 -->

        <!-- summery -->
        <div class="boardTop mt10">
          <div class="left-po">
            <dl>
              <dt>기준: </dt>
              <dd><strong>2021년 3월</strong></dd>
            </dl>
          </div>
          <div class="right-po"><button class="btnDownload">다운로드</button> <!--2021-06-30--></div>
        </div>
        <!-- //summery -->
        <!-- 목록 -->
        <div class="tls">
          <table>
            <thead>
              <tr>
                <th>일자</th>
                <th>가입자</th>
                <th>탈퇴자</th>
                <th>증감</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01 일</td>
                <td>132 명</td>
                <td>88 명</td>
                <td>44</td>
              </tr>
              <tr>
                <td>02 일</td>
                <td>145 명</td>
                <td>130 명</td>
                <td>14</td>
              </tr>
              <tr>
                <td>03 일</td>
                <td>101 명</td>
                <td>97 명</td>
                <td>4</td>
              </tr>
              <tr>
                <td>04 일</td>
                <td>76 명</td>
                <td>8 명</td>
                <td class="fRed">-8</td>
              </tr>
              <tr>
                <td>05 일</td>
                <td>49 명</td>
                <td>92 명</td>
                <td class="fRed">-43</td>
              </tr>
              <tr>
                <td>06 일</td>
                <td>49 명</td>
                <td>92 명</td>
                <td class="fRed">-16</td>
              </tr>
              <tr>
                <td>07 일</td>
                <td>63 명</td>
                <td>52 명</td>
                <td>11</td>
              </tr>
              <tr>
                <td>08 일</td>
                <td>63 명</td>
                <td>52 명</td>
                <td>11</td>
              </tr>
              <tr>
                <td>09 일</td>
                <td>63 명</td>
                <td>52 명</td>
                <td>11</td>
              </tr>
              <tr>
                <td>10 일</td>
                <td>63 명</td>
                <td>52 명</td>
                <td>11</td>
              </tr>
              <tr>
                <td>11 일</td>
                <td>63 명</td>
                <td>52 명</td>
                <td>11</td>
              </tr>
              <tr>
                <td>12 일</td>
                <td>63 명</td>
                <td>52 명</td>
                <td>11</td>
              </tr>
              <tr>
                <td>13 일</td>
                <td>63 명</td>
                <td>52 명</td>
                <td>11</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //목록 -->
			</div>
			<!-- //page layout -->
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'UserSignup',
  data() {
    return {
      loading: false,
      lineChart: {
        backgroundColor:'#fff',
        tooltip: {
            trigger: 'axis',
            formatter: "2021년 {b}월 <br>{a0} {c0}명 (- 506) <br>{a1} {c1}명 (- 506)"
        },
        legend: {
            right: '10',
            top: '10',
            width: '100',
            data: ['가입자', '탈퇴자']
        },
        grid: {
            left: '0',
            bottom: '0',
            top: '5%',
            width:'87%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        yAxis: {
            type: 'value'
        },
        series: [
          {
            name: '가입자',
            type: 'line',
            stack: 'total',
            itemStyle: {
              color: '#4f81bd'
            },
            data: [132,145,101,76,,,,,,,,,,]
          },
          {
            name: '탈퇴자',
            type: 'line',
            stack: 'total',
            itemStyle: {
              color: '#c0504d'
            },
            data: [88,130,97,8,,,,,,,,,,]
          }
        ]
      },
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
