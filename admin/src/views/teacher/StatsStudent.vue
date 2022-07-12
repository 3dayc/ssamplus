<template lang="html">
  <div>
    <div class="pageTit">
      <h2>수강생 통계</h2>
      <span><router-link to="/mkup/teacher/statsDaily">통계</router-link><em>수강생 통계</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="statsStudent"><!-- class 없어도 유지 -->
        <!-- 검색 -->
        <div class="boardTop">
          <div class="menuHelp mb20">
            <li>ⓘ 강좌를 선택하여 해당 강좌의 수강생 통계를 조회할 수 있습니다.</li>
            <li> ⓘ 회원가입 시 입력한 선택 정보를 기반으로 하며, 모든 수강생을 포함하지 않을 수 있습니다.</li>
          </div>
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="">직/인강</option>
                      <option value="">직강</option>
                      <option value="">인강</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="">강좌유형</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="">제작연도</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="">강좌</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div><button class="btnRefresh">초기화</button></div>
            </div>
          </div>
        </div>
        <!-- //검색 -->
        <div class="listSummery pd0 mt20">
          <div class="right">
            <dl>
              <dt>선택 강좌 수강생</dt>
              <dd><strong>321</strong>명 (유료: <strong>200</strong>명, 무료: <strong>121</strong>명)</dd>
            </dl>
            <dl>
              <dt>누적 수강생</dt>
              <dd><strong>12,743</strong>명 (유료: <strong>8,243</strong>명, 무료: <strong>4,500</strong>명)</dd>
            </dl>
          </div>
        </div>
        <div class="gridSet grid2">
          <div class="gridItem">
            <!-- 회원가입 연도 -->
            <div class="subTit"><h3>회원가입 연도</h3></div>
            <div class="tls">
              <table>
                <colgroup>
                  <col width="100">
                  <col width="100">
                </colgroup>
                <tbody>
                  <tr>
                    <th>2021</th>
                    <td>100명</td>
                  </tr>
                  <tr>
                    <th>2020</th>
                    <td>100명</td>
                  </tr>
                  <tr>
                    <th>2019</th>
                    <td>100명</td>
                  </tr>
                  <tr class="totalPrev">
                    <th>2018</th>
                    <td>100명</td>
                  </tr>
                  <tr class="total">
                    <th>Total</th>
                    <td>100명</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- //회원가입 연도 -->
          </div>
          <div class="gridItem">
            <!-- 임용 응시 횟수 -->
            <div class="inBlock w610 mr10">
              <div class="subTit"><h3>임용 응시 횟수</h3></div>
              <div class="chart wFull h400">
                <Echart
                  :option="circleChart"
                  :loading="loading"
                />
              </div>
            </div>
            <!-- //임용 응시 횟수 -->
            <!-- 수강생 연령 구성 -->
            <div class="inBlock w610">
              <div class="subTit"><h3>수강생 연령 구성</h3></div>
              <div class="chart wFull h400">
                <Echart
                  :option="circleChart02"
                  :loading="loading"
                />
              </div>
            </div>
            <!-- //수강생 연령 구성 -->
          </div>
        </div>
        <!-- 임용 응시 희망지역 -->
        <div class="subTit"><h3>임용 응시 희망지역</h3></div>
        <div class="chart h300">
          <Echart
            :option="barChart02"
            :loading="loading"
          />
        </div>
        <!-- //임용 응시 희망지역 -->
			</div>
			<!-- //page layout -->
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'StatsStudent',
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
            name:'20대',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:50,
            }]
          },
          {
            name:'30대',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:10,
            }]
          },
          {
            name:'40대',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:20,
            }]
          },
          {
            name:'50대 이상',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:20,
            }]
          },
        ]
      },
      barChart02: {
        backgroundColor:'#fff',
        grid: {
          left: '0',
          right: '0',
          bottom: '0',
          top: '7%',
          height:'90%',
          containLabel: true
        },
        tooltip: {
          formatter: "{b} <br> {c}% ( 000건 )"
        },
        xAxis: {
          type: 'category',
          data: ['서울', '경기', '인천', '세종', '부산', '대전', '대구', '광주', '울산', '강원', '충북', '충남', '경북', '경남', '전북', '전남', '제주']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '가입자',
            type: 'bar',
            stack: 'total',
            itemStyle: {
              color: '#00a46c'
            },
            data: [132,145,101,76,,,,,,,,,,]
          }
        ]
      },
      circleChart: {
        backgroundColor:'#fff',
        title: {
          show: true,
          text: '전체 수강생',
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
              {value: 1048, name: '0회 (초시생)'},
              {value: 735, name: '1회'},
              {value: 735, name: '2회'},
              {value: 735, name: '3회'},
              {value: 735, name: '4회'},
            ]
          }
        ]
      },
      circleChart02: {
        backgroundColor:'#fff',
        title: {
          show: true,
          text: '전체 수강생',
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
              {value: 1048, name: '10대'},
              {value: 735, name: '20대'},
              {value: 735, name: '30대'},
              {value: 735, name: '40대'},
              {value: 735, name: '50대 이상'},
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
