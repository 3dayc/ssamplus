<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop tL">
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
              <button class="btnSearch">검색</button>
            </span>
          </div>
        </div>
      </div>
      <span class="checkSet ml10">
        <input type="checkbox" id="one" />
        <label for="one"><i></i>검색 설정을 유지</label>
      </span>
      <span class="monthCheckSet wFull mt10">
        <span class="all">
          <input type="checkbox" id="allMonth" />
          <label for="allMonth">전체</label>
        </span>
        <span>
          <input type="checkbox" id="month1" />
          <label for="month1">1월</label>
        </span>
        <span>
          <input type="checkbox" id="month2" />
          <label for="month2">2월</label>
        </span>
        <span>
          <input type="checkbox" id="month3" />
          <label for="month3">3월</label>
        </span>
        <span>
          <input type="checkbox" id="month4" />
          <label for="month4">4월</label>
        </span>
        <span>
          <input type="checkbox" id="month5" />
          <label for="month5">5월</label>
        </span>
        <span>
          <input type="checkbox" id="month6" />
          <label for="month6">6월</label>
        </span>
        <span>
          <input type="checkbox" id="month7" />
          <label for="month7">7월</label>
        </span>
        <span>
          <input type="checkbox" id="month8" />
          <label for="month8">8월</label>
        </span>
        <span>
          <input type="checkbox" id="month9" />
          <label for="month9">9월</label>
        </span>
        <span>
          <input type="checkbox" id="month10" />
          <label for="month10">10월</label>
        </span>
        <span>
          <input type="checkbox" id="month11" />
          <label for="month11">11월</label>
        </span>
        <span>
          <input type="checkbox" id="month12" />
          <label for="month12">12월</label>
        </span>
      </span>
    </div>
    <!-- //검색 -->

    <div class="subTit"><h3>전화상담 분류별 비중</h3></div>
    <div class="gridSet fix570">
      <div class="gridItem pr30 vTop">
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
        <div class="tls">
          <table>
            <colgroup><col width="200"/><col/></colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>상담건수</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td class="bgRed fRed">총합</td>
                <td class="bgRed fRed">93 건</td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>회원/로그인</td>
                <td>30 건</td>
              </tr>
              <tr>
                <td>사이트오류</td>
                <td>27 건</td>
              </tr>
              <tr>
                <td>교재/학습자료</td>
                <td>16 건</td>
              </tr>
              <tr>
                <td>강좌관련</td>
                <td>8 건</td>
              </tr>
              <tr>
                <td>결제/환불</td>
                <td>5 건</td>
              </tr>
              <tr>
                <td>학원(직강)</td>
                <td>2 건</td>
              </tr>
              <tr>
                <td>기타/건의사항</td>
                <td>5 건</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'CounselCallTotal',
  data() {
    return {
      range: {
				start: new Date(),
				end: new Date(),
			},
      loading: false,
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
            width: '100px'
        },
        series: [
          {
            name: false,
            type: 'pie',
            radius: ['60%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: 'inner',
              formatter: '{d}%'
            },
            center: ["200px", "180px"],
            labelLine: {
              show: false
            },
            data: [
              {value: 1048, name: '회원/로그인'},
              {value: 735, name: '사이트 오류'},
              {value: 580, name: '교재/학습자료'},
              {value: 484, name: '강좌관련'},
              {value: 100, name: '결제/환불', label: {show: false}},
              {value: 100, name: '학원(직강)', label: {show: false}},
              {value: 300, name: '기타/건의사항'},
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
