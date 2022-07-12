<template lang="html">
  <div class="monthCase inTime">
    <div class="graphData listData4Line">
      <Echart
        :option="bar21"
        :loading="loading"
      />
    </div>
    <div class="unitTxt">&lt; 자율공부시간 (hh:mm) &gt;</div>
    <div class="listData">
      <table class="pix kind">
        <thead>
          <tr>
            <th class="backslash">
              <div>수강 강의시간(분)</div>
              <i><span>일(day)</span></i>
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
              <th>1일</th>
              <th>2일</th>
              <th>3일</th>
              <th>4일</th>
              <th>5일</th>
              <th>6일</th>
              <th>7일</th>
              <th>8일</th>
              <th>9일</th>
              <th>10일</th>
              <th>11일</th>
              <th>12일</th>
              <th>13일</th>
              <th>14일</th>
              <th>15일</th>
              <th>16일</th>
              <th>17일</th>
              <th>18일</th>
              <th>19일</th>
              <th>20일</th>
              <th>21일</th>
              <th>22일</th>
              <th>23일</th>
              <th>24일</th>
              <th>25일</th>
              <th>26일</th>
              <th>27일</th>
              <th>28일</th>
              <th>29일</th>
              <th>30일</th>
              <th>31일</th>
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
  name: 'StudyMyGraphCase21',
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
