<template lang="html">
  <div class="yearCase inTime">
    <div class="graphData listData4Line">
      <Echart
        :option="bar22"
        :loading="loading"
      />
    </div>
    <div class="unitTxt">&lt; 단위 : 자율공부시간 (hh:mm) &gt;</div>
    <div class="listData yearTime">
      <table class="pix kind">
        <thead>
          <tr>
            <th class="backslash">
              <div>수강 강의시간(분)</div>
              <i><span>월(month)</span></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>교육학 강좌 명</td>
          </tr>
          <tr>
            <td>면접 강좌 명</td>
          </tr>
          <tr>
            <td>물리 강좌 명</td>
          </tr>
          <tr>
            <td>논술 강좌 명</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td style="color:#666">합계</td>
          </tr>
        </tfoot>
      </table>
      <div class="scroll">
        <table>
          <thead>
            <tr>
              <th>1월</th>
              <th>2월</th>
              <th>3월</th>
              <th>4월</th>
              <th>5월</th>
              <th>6월</th>
              <th>7월</th>
              <th>8월</th>
              <th>9월</th>
              <th>10월</th>
              <th>11월</th>
              <th>12월</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
            </tr>
            <tr>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
            </tr>
            <tr>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
            </tr>
            <tr>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
              <td>00:00</td>
            </tr>
          </tbody>
          <tfoot>
          <tr>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
            <td>00:00</td>
          </tr>
          </tfoot>
        </table>
      </div>
      <table class="pix total">
        <thead>
          <tr>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>00:00</td>
          </tr>
          <tr>
            <td>00:00</td>
          </tr>
          <tr>
            <td>00:00</td>
          </tr>
          <tr>
            <td>00:00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
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
  name: 'StudyMyGraphCase22',
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
