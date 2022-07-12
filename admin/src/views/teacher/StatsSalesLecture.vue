<template lang="html">
  <div>
    <!-- 연간 단과/패키지 구매 비율 -->
    <div class="subTit"><h3>연간 단과/패키지 구매 비율</h3></div>
    <div class="gridSet w1060">
      <div class="gridItem w610 pr30 vTop">
        <!-- 차트 -->
        <div class="chart wFull h400">
          <Echart
            :option="circleChart"
            :loading="loading"
          />
        </div>
        <!-- //차트 -->
      </div>
      <div class="gridItem vTop">
        <div class="msgForm wFull">
          <div class="formTitle"><span>연간 판매량 BEST 3</span></div>
          <div class="formCnts">
            <ul class="rankList">
              <li>
                <span class="rank">01</span>
                <span class="txtBox">
                  <span class="tit">연간 쌤팩<em class="iSet blue">패키지</em></span>
                  <span class="txt">- 개강일: 2021-01-01, 종강일: 2021-12-31</span>
                </span>
              </li>
              <li>
                <span class="rank">02</span>
                <span class="txtBox">
                  <span class="tit">국어교육론 실전대비과정2<em class="iSet sky">단과</em><em class="iSet yellow">제작중</em></span>
                  <span class="txt">- 개강일: 2021-01-01, 종강일: 2021-12-31</span>
                </span>
              </li>
              <li>
                <span class="rank">03</span>
                <span class="txtBox">
                  <span class="tit">국어교육론 실전대비과정2<em class="iSet sky">단과</em><em class="iSet orange">제작완료</em></span>
                  <span class="txt">- 개강일: 2021-01-01, 종강일: 2021-12-31</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- //연간 단과/패키지 구매 비율 -->

    <!-- 전년도 대비 연간 판매추이 -->
    <div class="subTit"><h3>전년도 대비 연간 판매추이</h3></div>
    <div class="chart h200">
      <Echart
        :option="lineChart"
        :loading="loading"
      />
    </div>
    <span class="fGray block mt10">* 패키지와 단과를 포함한 결제 수강생 추이로, 패키지와 단과의 중복은 제외하여 카운팅하였음.</span>
    <!-- //전년도 대비 연간 판매추이 -->

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'StatsSalesLecture',
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
            data: ['2020년', '2021년']
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
            data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
        },
        yAxis: {
            type: 'value'
        },
        series: [
          {
            name: '2020년',
            type: 'line',
            smooth: true,
            stack: 'total',
            itemStyle: {
              color: '#4f81bd'
            },
            data: [132,145,101,76,,,,,,,,,,]
          },
          {
            name: '2021년',
            type: 'line',
            smooth: true,
            stack: 'total',
            itemStyle: {
              color: '#c0504d'
            },
            data: [88,130,97,8,,,,,,,,,,]
          }
        ]
      },
      circleChart: {
        backgroundColor:'#fff',
        title: {
          show: true,
          text: '판매 강좌 수',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            height: 26,
            rich: {
              a: { // `lineHeight` is not set, then it will be 56}
              }
            }
          },
          subtext: '321',
          subtextStyle: {
            fontWeight: 'bold',
            fontSize: 32 ,
          },
          top: '145',
          left: '195',
          textAlign: 'center'
        },
        grid: {
          top: '0',
          left: '0',
        },
        tooltip: {
            //trigger: 'item'
            formatter: "{b} <br> {c}% ( 000건 )"
        },
        legend: {
            itemWidth: 7,
            itemHeight: 10,
            top: '30',
            right: '10',
            width: '50px'
        },
        series: [
          {
            name: false,
            type: 'pie',
            radius: ['60%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
            },
            center: ["200px", "180px"],
            labelLine: {
              show: false
            },
            data: [
              {value: 1048, name: '단과'},
              {value: 735, name: '패키지'},
            ]
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
