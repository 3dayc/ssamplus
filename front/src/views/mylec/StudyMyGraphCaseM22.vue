<template lang="html">
  <div class="yearCase inTime">
    <div class="graphDataBack">
      <div class="graphData listData4Line">
        <Echart
          :option="bar22"
          :loading="loading"
        />
      </div>
    </div>
    <!-- <div class="unitTxt">&lt; 단위 : 자율공부시간 (hh:mm) &gt;</div> -->
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
            <td>1월</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>2월</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>3월</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>4월</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>5월</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>6월</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>7월</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>8월</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>9월</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>10월</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>11월</td>
            <td>00:00</td>
          </tr>
          <tr>
            <td>12월</td>
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
  name: 'StudyMyGraphCaseM22',
  components: {
  },
  data() {
    return {
    loading: false,
    bar22: {
      backgroundColor:'transparent',
      tooltip: {
          trigger: 'axis',
      },
      legend: {show:false,
          right: '0',
          bottom: '0',
          width: '200',
          data: ['교육학(교직) 논술', '전공과목']
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
          data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
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
              name: '교육학(교직) 논술',
              type: 'bar',
              barGap: 0.1,
              barMaxWidth: 50,
              itemStyle: {
                color: '#428FBB'
              },
              data: [132,145,101,0,0,0,0,0,0,0,0,0],
              label: {
                show: false,
                position: "insideTop",
                distance: 12,
                color: '#ffffff'
              }
          },
          {
              name: '전공과목',
              type: 'bar',
              barMaxWidth: 50,
              itemStyle: {
                color: '#887BBA'
              },
              data: [88,130,97,45,95,73,51,68,21,47,51,4],
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
