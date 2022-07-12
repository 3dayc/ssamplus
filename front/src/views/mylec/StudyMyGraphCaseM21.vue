<template lang="html">
  <div class="monthCase inTime">
    <div class="graphDataBack">
      <div class="graphData listData4Line">
        <Echart
          :option="bar21"
          :loading="loading"
        />
      </div>
    </div>
    <!-- <div class="unitTxt">&lt; 자율공부시간 (hh:mm) &gt;</div> -->
    <span class="selectSet mListKind">
      <select name="" id="">
        <option value="">전체 수강 강좌</option>
        <option value="">교육학(교직) 논술</option>
        <option value="">전공과목</option>
      </select>
    </span>
    <div class="mListData">
      <table>
        <thead>
          <tr>
            <th>일(day)</th>
            <th>자율공부시간 (hh:mm)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1일</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>2일</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>3일</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>4일</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>5일</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>6일</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>7일</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>8일</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>9일</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>10일</td>
            <td>00:00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>합계</td>
            <td>00:00</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'StudyMyGraphCaseM21',
  components: {
  },
  data() {
    return {
    loading: false,
    bar21: {
      backgroundColor:'transparent',
      tooltip: {
          trigger: 'axis'
      },
      legend: {show:false,
          right: '0',
          bottom: '0',
          width: '200',
      },
      grid: {
          left: '20px',
          right: '0',
          bottom: '10%',
          top: '13%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          data: ['1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일', '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일', '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일', '31일']
      },
      yAxis: [
        {
          type: 'value',
          show: true,
          name: "시간",
          nameTextStyle: {
            fontWeight: "bold",
            lineHeight: 30,
            color: "#999",
            align: "right"
          },
          nameLocation: "end",
          nameGap: 10
        }
      ],
      series: [
          {
              name: '교육학 강좌 명 26강',
              type: 'bar',
              barGap: 0.1,
              barMaxWidth: 50,
              itemStyle: {
                color: '#428FBB'
              },
              data: [132,145,101],
              label: {
                show: false,
                position: "insideTop",
                distance: 12,
                color: '#ffffff'
              }
          },
          {
              name: '면접 강좌 명 14강',
              type: 'bar',
              barMaxWidth: 50,
              itemStyle: {
                color: '#887BBA'
              },
              data: [88,130,97],
              label: {
                show: false,
                position: "insideTop",
                distance: 12,
                color: '#ffffff'
              }
          }
      ]
    }
    }
  },
}
</script>
