<template lang="html">
  <div>
    <div class="studyGraph" style="width:100%;height:505px;margin:0 auto;">
      <Echart
        :option="bar33"
        :loading="loading"
      />
    </div>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'StudyMyStatusGraph',
  components: {
  },
  data: () => ({
    loading: false,
    bar33: {
      backgroundColor:'#ffffff',
      tooltip: {
          trigger: 'axis',
          //formatter: "{a0} : {c0}",
          //trigger: "item",
          //position: 'top'
      },
      legend: {
          show: false,
          right: '0',
          bottom: '0',
          width: '200',
          data: ['수강시간', '전공과목 자율공부시간', '교육학 자율공부시간', '강의 수']
      },
      grid: {
          left: '0',
          right: '0',
          bottom: '10%',
          top: '13%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          //boundaryGap: false,
          data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
      },
      yAxis: [
        {
          type: 'value',
          show: true,
          nameTextStyle: {
            fontWeight: "bold",
            lineHeight: 30,
            color: "#333"
          },
          //name: "일반 기준",
          nameLocation: "end"
        },
        {
          type: 'value',
          show: false,
          nameTextStyle: {
            fontWeight: "bold",
            lineHeight: 30,
            color: "#333"
          },
          //name: "시간 기준",
          nameLocation: "end"
        }
      ],
      series: [
          {
              name: '수강시간',
              type: 'bar',
              stack:'total',
              barGap: 0.1,
              barMaxWidth: 50,
              itemStyle: {
                color: '#0E935D'
              },
              data: [132,145,101,0,0,0,0,0,0,0,0,0],
              label: {
                show: false,
                position: "insideTop",
                distance: 12,
                color: '#ffffff'
              },
          },
          {
              name: '전공과목 자율공부시간',
              type: 'bar',
              stack:'total',
              barMaxWidth: 50,
              itemStyle: {
                color: '#88C23D'
              },
              data: [88,130,97,0,0,0,0,0,0,0,0,0],
              label: {
                show: false,
                position: "insideTop",
                distance: 12,
                color: '#ffffff'
              },
          },
          {
              name: '교육학 자율공부시간',
              type: 'bar',
              stack:'total',
              barMaxWidth: 50,
              itemStyle: {
                color: '#E5CD48'
              },
              data: [88,130,97,0,0,0,0,0,0,0,0,0],
              label: {
                show: false,
                position: "insideTop",
                distance: 12,
                color: '#ffffff'
              },
          },
          {
              name: '강의 수',
              type: 'line',
              itemStyle: {
                color: '#FF7575'
              },
              data: [3,0,1,3,2,3,3,0,1,3,2,3],
              label: {
                show: false,
                position: "insideTop",
                distance: 12,
                color: '#ffffff'
              },
              symbolSize: 8,
              yAxisIndex: 1,
          }
      ]
    }
  })
}
</script>
