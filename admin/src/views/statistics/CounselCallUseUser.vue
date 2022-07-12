<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="left">
        <div class="menuHelp">
          <ul>
            <li>ⓘ 전화상담 중분류별로 상담 건수를 집계합니다.</li>
            <li>Ⓘ 연/월별 전화상담 비중과 월별 상담건수를 집계합니다.</li>
          </ul>
        </div>
      </div>
      <div class="listSearch">
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
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="">전체</option>
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
                </select>
              </span>
            </span>
          </div>
          <div>
            <button class="btnRefresh">초기화</button>
          </div>
        </div>
      </div>
      <div class="right-po">
        <a href="#" class="btnDownload" download>다운로드</a>
      </div>
    </div>
    <!-- //검색 -->
    <!-- 전화상담 비중 -->
    <div class="subTit"><h3><em class="fBlue">2021년 4월</em> 전화상담 비중</h3></div>
    <!-- 차트 -->
    <div class="chart h250">
      <Echart
        :option="barChart"
        :loading="loading"
      />
    </div>
    <!-- //차트 -->
    <!-- //전화상담 비중 -->
    <!-- 월별 전화상담건수 -->
    <div class="subTit"><h3><em class="fBlue">2021년</em> 월별 전화상담건수</h3></div>
    <div class="tls">
      <table>
        <colgroup>
          <col width="120"/>
          <col width="60"/>
          <col width="60"/>
          <col width="60"/>
          <col width="60"/>
          <col width="60"/>
          <col width="60"/>
          <col width="60"/>
          <col width="60"/>
          <col width="60"/>
          <col width="60"/>
          <col width="60"/>
          <col width="60"/>
          <col width="60"/>
        </colgroup>
        <thead>
          <tr>
            <th><em class="fPink">소분류</em></th>
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
        <tbody>
          <tr>
            <td>회원가입/탈퇴</td>
            <td>10</td>
            <td>25</td>
            <td>7</td>
            <td>5</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>47</td>
          </tr>
          <tr>
            <td>회원정보 수정</td>
            <td>20</td>
            <td>15</td>
            <td>13</td>
            <td>5</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>53</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td>합계</td>
            <td>30</td>
            <td>40</td>
            <td>20</td>
            <td>10</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>100</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- //월별 전화상담건수 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'CounselCallUseUser',
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
          itemGap: 20,
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
            name:'회원가입/탈퇴',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:47,
            }]
          },
          {
            name:'회원정보 수정',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:53,
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
