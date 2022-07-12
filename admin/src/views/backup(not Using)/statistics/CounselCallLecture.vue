<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="listSearch left">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="">2021년</option>
                  <option value="">2020년</option>
                  <option value="">2019년</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <button class="btnSearch">검색</button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- //검색 -->

    <!-- 강좌관련 상담항목당 비중 -->
    <div class="subTit w900">
      <h3>강좌관련 상담항목당 비중</h3>
      <span class="right">
        <span class="selectSet">
          <select name="" id="">
            <option value="">총합</option>
            <option value="">1월</option>
            <option value="">2월</option>
            <option value="">3월</option>
            <option value="">4월</option>
            <option value="">5월</option>
            <option value="">6월</option>
            <option value="">7월</option>
            <option value="">8월</option>
            <option value="">9월</option>
            <option value="">10월</option>
            <option value="">11월</option>
            <option value="">12월</option>
            <option value="">전체</option>
          </select>
        </span>
      </span>
    </div>
    <!-- 차트 -->
    <div class="chart h250">
      <Echart
        :option="barChart"
        :loading="loading"
      />
    </div>
    <!-- //차트 -->
    <!-- //강좌관련 상담항목당 비중 -->
    <!-- 강좌관련 월별 상담항목당 상담건수 -->
    <div class="subTit"><h3>강좌관련 월별 상담항목당 상담건수</h3></div>
    <div class="tls">
      <table>
        <thead>
          <tr>
            <th>구분</th>
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
            <th>합계</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td class="bgRed fRed">합계</td>
            <td class="bgRed fRed">92</td>
            <td class="bgRed fRed">106</td>
            <td class="bgRed fRed">218</td>
            <td class="bgRed fRed">53</td>
            <td class="bgRed fRed">0</td>
            <td class="bgRed fRed">0</td>
            <td class="bgRed fRed">0</td>
            <td class="bgRed fRed">0</td>
            <td class="bgRed fRed">0</td>
            <td class="bgRed fRed">0</td>
            <td class="bgRed fRed">0</td>
            <td class="bgRed fRed">0</td>
            <td class="bgRed fRed">185</td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>강의신청/수강</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>4</td>
          </tr>
          <tr>
            <td>패키지강좌</td>
            <td>3</td>
            <td>1</td>
            <td>7</td>
            <td>1</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>12</td>
          </tr>
          <tr>
            <td>보너스/기획/특강</td>
            <td>5</td>
            <td>7</td>
            <td>6</td>
            <td>0</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>18</td>
          </tr>
          <tr>
            <td>기획/무료특강</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>0</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>4</td>
          </tr>
          <tr>
            <td>인강/직강변경</td>
            <td>10</td>
            <td>20</td>
            <td>46</td>
            <td>7</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>83</td>
          </tr>
          <tr>
            <td>온라인모의고사</td>
            <td>10</td>
            <td>20</td>
            <td>46</td>
            <td>7</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>83</td>
          </tr>
          <tr>
            <td>이벤트강의</td>
            <td>10</td>
            <td>20</td>
            <td>46</td>
            <td>7</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>83</td>
          </tr>
          <tr>
            <td>가산점</td>
            <td>10</td>
            <td>20</td>
            <td>46</td>
            <td>7</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>83</td>
          </tr>
          <tr>
            <td>수강기간/연장</td>
            <td>10</td>
            <td>20</td>
            <td>46</td>
            <td>7</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>83</td>
          </tr>
          <tr>
            <td>수강시간</td>
            <td>10</td>
            <td>20</td>
            <td>46</td>
            <td>7</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>83</td>
          </tr>
          <tr>
            <td>홀딩</td>
            <td>10</td>
            <td>20</td>
            <td>46</td>
            <td>7</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>83</td>
          </tr>
          <tr>
            <td>기타</td>
            <td>10</td>
            <td>20</td>
            <td>46</td>
            <td>7</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>83</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //강좌관련 월별 상담항목당 상담건수 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'CounselCallLecture',
  data() {
    return {
      loading: false,
      barChart: {
        backgroundColor:'#ffffff',
        title:{
          show: false,
        },
        grid: {
          top: '0',
          left: '0',
          right: '15',
          height: '100px'
        },
        tooltip: {
          formatter: "{a} <br> {c}% ( 000건 )"
        },
        legend: {
          bottom: '25',
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 10,
        },
        xAxis: [{
          type :'value',
          axisLabel: {
            formatter: '{value} %'
          }
        }],
        yAxis: [{
          data: [''],
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          }
        }],
        series: [
          {
            name:'강의신청/수강',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:8,
            }]
          },
          {
            name:'패키지강좌',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:8,
            }]
          },
          {
            name:'보너스/기획/특강',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:8,
            }]
          },
          {
            name:'기획/무료특강',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:8,
            }]
          },
          {
            name:'인강/직강변경',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:8,
            }]
          },
          {
            name:'온라인모의고사',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:8,
            }]
          },
          {
            name:'이벤트강의',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:8,
            }]
          },
          {
            name:'가산점',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:8,
            }]
          },
          {
            name:'수강기간/연장',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:8,
            }]
          },
          {
            name:'수강시간',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:8,
            }]
          },
          {
            name:'홀딩',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:8,
            }]
          },
          {
            name:'기타',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:12,
            }]
          },
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
