<template lang="html">
  <div>
    <!-- 연간 판매량 Best 3 -->
    <div class="msgForm w450">
      <div class="formTitle"><span>연간 판매량 BEST 3</span></div>
      <div class="formCnts">
        <ul class="rankList">
          <li>
            <span class="rank">01</span>
            <span class="txtBox">
              <span class="tit">2021 국어교육론 기출문제집</span>
              <span class="txt">
                - 사용강좌:
                <span class="innerTxt">
                  국어교육론 문제풀이<br/>
                  [주말반] 국어교육론 실전대비과정1<br/>
                  [평일 야간반] 국어교육론 실전대비과정1
                </span>
              </span>
            </span>
          </li>
          <li>
            <span class="rank">02</span>
            <span class="txtBox">
              <span class="tit">2022 교육과정&amp;교과서를 보는 눈(증보판)-독서</span>
              <span class="txt">- 사용강좌 : 독산통반(독서,산문,통사론)</span>
            </span>
          </li>
          <li>
            <span class="rank">03</span>
            <span class="txtBox">
              <span class="tit">2022 교육과정&amp;교과서를 보는 눈(증보판)-산문</span>
              <span class="txt">- 사용강좌 : 독산통반(독서,산문,통사론)</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <!-- //연간 판매량 Best 3 -->

    <!-- 전년도 대비 연간 판매추이 -->
    <div class="subTit"><h3>전년도 대비 연간 판매추이</h3></div>
    <div class="chart h200">
      <Echart
        :option="lineChart"
        :loading="loading"
      />
    </div>
    <span class="fGray block mt10">* 모든 교재의 총 판매 수량을 카운팅함.</span>
    <!-- //전년도 대비 연간 판매추이 -->

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'StatsSalesBook',
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
    }
  },
  methods: {

  },
  components: {
  },
}
</script>
