<template lang="html">
  <div>
    <!---->
    <div class="subTit">
      <h3>응시 개요</h3>
    </div>
     <div class="resTls subCase">
        <div class="tbody">
          <ul>
            <li class="listGrid">
              <span class="lgItem th">응시 시험</span>
              <span class="lgItem item1">16회 희소 온라인 모의고사</span>
              <span class="lgItem th">응시자</span>
              <span class="lgItem item1">김지민</span>
            </li>
            <li class="listGrid">
              <span class="lgItem th">응시 일자</span>
              <span class="lgItem item1">2021-04-12 08:48:27</span>
              <span class="lgItem th">응시 과목</span>
              <span class="lgItem item1">교육학, 중국어</span>
            </li>
            <li class="listGrid">
              <span class="lgItem th">응시 유형</span>
              <span class="lgItem item1">온라인/채점</span>
              <span class="lgItem th">총 응시자 수</span>
              <span class="lgItem item1">250명</span>
            </li>
          </ul>
        </div>
      </div>
    <!---->
    <div class="subTit">
      <h3>난이도 분석</h3>
    </div>
    <div class="testGraphArea line1">
      <div class="gridSet grid2">
        <div class="gridItem left">
          <div class="graphArea">
            <Echart
              :option="testGraph01"
              :loading="loading"
            />
          </div>
        </div>
        <div class="gridItem right">
          <div class="graphArea">
            <Echart
              :option="testGraph02"
              :loading="loading"
            />
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div class="subTit">
      <h3>평균점수 분석</h3>
    </div>
    <div class="testGraphArea line2">
      <div class="gridSet grid2">
        <div class="gridItem left">
          <div class="graphArea">
            <Echart
              :option="testGraph03"
              :loading="loading"
            />
          </div>
          <div class="graphArea">
            <Echart
              :option="testGraph04"
              :loading="loading"
            />
          </div>
          <div class="graphArea">
            <Echart
              :option="testGraph05"
              :loading="loading"
            />
          </div>
        </div>
        <div class="gridItem right">
          <div class="graphArea">
            <Echart
              :option="testGraph06"
              :loading="loading"
            />
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div class="subTit">
      <h3>최근 3개년 1차 합격선(참고용)</h3>
    </div>
    <div class="testGraphArea line3 tR">
      <span class="selectSet">
        <select name="" id="">
          <option value="">서울</option>
        </select>
      </span>
      <div class="graphArea">
        <Echart
          :option="testGraph07"
          :loading="loading"
        />
      </div>
    </div>
    <!---->
    <div class="subTit">
      <h3>점수 분포도 (총점 기준)</h3>
    </div>
    <div class="testGraphArea line4">
      <div class="graphArea">
        <Echart
          :option="testGraph08"
          :loading="loading"
        />
      </div>
    </div>
    <!---->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MorkExamResult',
  components: {
  },
  data() {
    return {
      loading: false,
      testGraph01: {
        title: {
          text: '응시생 체감 난이도 – 교육학(교직논술)',
          textStyle: {fontSize: 14},
        },
        tooltip: {
          trigger : 'item',
          formatter: '{b}<br/>{d}% (000명)',
        },
        legend: {
          bottom: "0%",
          itemWidth: 14
        },
        grid: {
          top: '20',
          left: '20',
          right: '20',
          bottom: '20',
        },
        series: [{
          type: 'pie',
          avoidLabelOverlap: false,
          clockwise: true,
          width: "80%",
          height: "80%",
          top: "12%",
          left: "10%",
          labelLine: {
              show: true
          },
          label: {
            show: true,
            //position: 'inside',
            formatter: '{d}%',
          },
          animation: true,
          data: [{
            value: 3, name: '매우 쉬움',
            itemStyle: {
                color: '#ffd275'
            }
          }, {
            value: 13, name: '쉬움',
            itemStyle: {
                color: '#71c9ec'
            }
          }, {
            value: 30, name: '보통',
            itemStyle: {
                color: '#86e8cb'
            }
          }, {
            value: 47, name: '어려움',
            itemStyle: {
                color: '#b6c1ff'
            }
          }, {
            value: 7, name: '매우 어려움',
            itemStyle: {
                color: '#fc91ad'
            }
          }],
        }]
      },
      testGraph02: {
        title: {
          text: '응시생 체감 난이도 – 중국어(교육과정)',
          textStyle: {fontSize: 14},
        },
        tooltip: {
          trigger : 'item',
          formatter: '{b}<br/>{d}% (000명)',
        },
        legend: {
          bottom: "0%",
          itemWidth: 14
        },
        grid: {
          top: '20',
          left: '20',
          right: '20',
          bottom: '20',
        },
        series: [{
          type: 'pie',
          avoidLabelOverlap: false,
          clockwise: true,
          width: "80%",
          height: "80%",
          top: "12%",
          left: "10%",
          labelLine: {
              show: true
          },
          label: {
            show: true,
            //position: 'inside',
            formatter: '{d}%',
          },
          animation: true,
          data: [{
            value: 3, name: '매우 쉬움',
            itemStyle: {
                color: '#ffd275'
            }
          }, {
            value: 13, name: '쉬움',
            itemStyle: {
                color: '#71c9ec'
            }
          }, {
            value: 30, name: '보통',
            itemStyle: {
                color: '#86e8cb'
            }
          }, {
            value: 47, name: '어려움',
            itemStyle: {
                color: '#b6c1ff'
            }
          }, {
            value: 7, name: '매우 어려움',
            itemStyle: {
                color: '#fc91ad'
            }
          }],
        }]
      },
      testGraph03: {
        title: {
          text: '1교시 교육학(교직논술) 평균 점수 현황',
          textStyle: {fontSize: 14},
        },
        grid: {
          top: '40',
          left: '110',
          right: '20',
          bottom: '20',
        },
        tooltip: {
            show: false
        },
        xAxis: {
            type: 'value',
            show: true,
        },
        yAxis: {
            type: 'category',
            show: true,
            data: ['내 점수', '응시생 최고점', '상위 10% 평균점수', '응시생 평균점수'],
        },
        series: [{
            data: [ {
              value: 20,
              itemStyle: {
                  color: '#d1555f'
              }
            }, {
              value: 20,
              itemStyle: {
                  color: '#45c6a8'
              }
            }, {
              value: 20,
              itemStyle: {
                  color: '#5a5a5a'
              }
            }, {
              value: 19,
              itemStyle: {
                  color: '#4287bf'
              }
            }],
            type: 'bar',
            barGap: 0,
            barCategoryGap: "15",
            label:{
              show: true,
              position: "insideRight",
              color: '#ffffff',
              formatter: "{c}",
              fontSize: 12,
              lineHeight: 26
            },
        }]
      },
      testGraph04: {
        title: {
          text: '2교시 전공A 평균 점수 현황',
          textStyle: {fontSize: 14},
        },
        grid: {
          top: '40',
          left: '110',
          right: '20',
          bottom: '20',
        },
        tooltip: {
            show: false
        },
        xAxis: {
            type: 'value',
            show: true,
        },
        yAxis: {
            type: 'category',
            show: true,
            data: ['내 점수', '응시생 최고점', '상위 10% 평균점수', '응시생 평균점수'],
        },
        series: [{
            data: [ {
              value: 20,
              itemStyle: {
                  color: '#d1555f'
              }
            }, {
              value: 20,
              itemStyle: {
                  color: '#45c6a8'
              }
            }, {
              value: 20,
              itemStyle: {
                  color: '#5a5a5a'
              }
            }, {
              value: 19,
              itemStyle: {
                  color: '#4287bf'
              }
            }],
            type: 'bar',
            barGap: 0,
            barCategoryGap: "15",
            label:{
              show: true,
              position: "insideRight",
              color: '#ffffff',
              formatter: "{c}",
              fontSize: 12,
              lineHeight: 26
            },
        }]
      },
      testGraph05: {
        title: {
          text: '3교시 전공B 평균 점수 현황',
          textStyle: {fontSize: 14},
        },
        grid: {
          top: '40',
          left: '110',
          right: '20',
          bottom: '20',
        },
        tooltip: {
            show: false
        },
        xAxis: {
            type: 'value',
            show: true,
        },
        yAxis: {
            type: 'category',
            show: true,
            data: ['내 점수', '응시생 최고점', '상위 10% 평균점수', '응시생 평균점수'],
        },
        series: [{
            data: [ {
              value: 20,
              itemStyle: {
                  color: '#d1555f'
              }
            }, {
              value: 20,
              itemStyle: {
                  color: '#45c6a8'
              }
            }, {
              value: 20,
              itemStyle: {
                  color: '#5a5a5a'
              }
            }, {
              value: 19,
              itemStyle: {
                  color: '#4287bf'
              }
            }],
            type: 'bar',
            barGap: 0,
            barCategoryGap: "15",
            label:{
              show: true,
              position: "insideRight",
              color: '#ffffff',
              formatter: "{c}",
              fontSize: 12,
              lineHeight: 26
            },
        }]
      },
      testGraph06: {
        title: {
          text: '총점 (교육학+전공)평균 점수 현황',
          textStyle: {fontSize: 14},
        },
        grid: {
          top: '70',
          left: '50',
          right: '10',
          bottom: '70',
        },
        legend: {
          bottom: "0%",
          itemWidth: 14
        },
        tooltip: {
            show: true,
            trigger: "axis"
        },
        xAxis: {
            type: 'category',
            data: ['응시생 평균', '상위 10% 평균', '최고점', '내 점수']
        },
        yAxis: {
            type: 'value',
        },
        series: [
          {
            name: '1교시 점수',
            type: 'bar',
            barWidth: 55,
            stack: '평균점수 현황',
            itemStyle: {
                color: '#fdc453'
            },
            data: [19,20,20,20]
          },
          {
            name: '2교시 점수',
            type: 'bar',
            stack: '평균점수 현황',
            itemStyle: {
                color: '#88c2b5'
            },
            data: [24.6,35,37.5,32.5]
          },
          {
            name: '3교시 점수',
            type: 'bar',
            stack: '평균점수 현황',
            itemStyle: {
                color: '#54a4ff'
            },
            data: [22.5,33.9,37.5,33]
          }],
        label:{
          show: true,
          position: "insideTop",
          color: '#ffffff',
          fontSize: 12,
          lineHeight: 26
        },
      },
      testGraph07: {
        grid: {
          top: '10',
          left: '50',
          right: '20',
          bottom: '20',
        },
        legend: {
          bottom: "0%",
          itemWidth: 14
        },
        tooltip: {
          show: false,
        },
        xAxis: {
          type: 'category',
          data: ['2019', '2020', '2021']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [86, 83, 80.5],
            type: 'line',
            symbol: "circle",
            symbolSize: 10,
          }
        ],
        label:{
          show: true,
          position: "Top",
          fontSize: 12,
          lineHeight: 26
        },
      },
      testGraph08: {
        grid: {
          top: '10',
          left: '60',
          right: '50',
          bottom: '20',
        },
        legend: {
          bottom: "0%",
          itemWidth: 14
        },
        tooltip: {
            show: true,
        },
        xAxis: {
          type: 'category',
          name: "점수",
          nameLocation: "end",
        },
        yAxis: {
          type: 'value',
          name: "수강생분포도(%)",
          nameLocation: "middle",
          nameGap: 40
        },
        series: [
          {
            data: [
              [40.0, 10],
              [68.07, 20],
              [83.0, 5],
              [92.05, 10],
              [61.0, 10],
              [74.0, 7],
              [63.4, 9],
              [80.0, 1],
              [94.0, 10],
              [92.5, 1],
            ],
            type: 'line',
            symbol: "circle",
            symbolSize: 10,
          }
        ],
      },
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
  }
}
</script>
