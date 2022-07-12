<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="left">
        <div class="menuHelp">
          <ul>
            <li>ⓘ 전화상담 대분류별로 상담 건수를 집계합니다.</li>
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
                  <option value="" selected>4월</option>
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
    <div class="subTit"><h3><em class="fBlue">2021년 4월</em> 전화상담 비중</h3></div>
    <!-- 차트 -->
    <div class="chart h250">
      <Echart
        :option="barChart"
        :loading="loading"
      />
    </div>
    <!-- //차트 -->
    <div class="subTit"><h3><em class="fBlue">2021년</em> 월별 전화상담 건수</h3></div>
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
            <td>다른 경로로 교재 구매(다른 사이트 이용)</td>
            <td>2건</td>
            <td>1건</td>
            <td>1건</td>
            <td>0건</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>4건</td>
          </tr>
          <tr>
            <td>교재가격/배송비 불만</td>
            <td>3건</td>
            <td>1건</td>
            <td>7건</td>
            <td>1건</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>12건</td>
          </tr>
          <tr>
            <td>교재 내용 불만</td>
            <td>5건</td>
            <td>7건</td>
            <td>6건</td>
            <td>0건</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>18건</td>
          </tr>
          <tr>
            <td>교재 파본 및 품질 불만</td>
            <td>1건</td>
            <td>2건</td>
            <td>1건</td>
            <td>0건</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>4건</td>
          </tr>
          <tr>
            <td>교재 품절</td>
            <td>10건</td>
            <td>20건</td>
            <td>46건</td>
            <td>7건</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>83건</td>
          </tr>
          <tr>
            <td>배송 불만</td>
            <td>69건</td>
            <td>75건</td>
            <td>157건</td>
            <td>44건</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>45건</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td>합계</td>
            <td>92건</td>
            <td>106건</td>
            <td>218건</td>
            <td>53건</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>169건</td>
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
  name: 'CounselCallRefundGoods',
  data() {
    return {
      range: {
				start: new Date(),
				end: new Date(),
			},
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
            name:'다른 경로로 교재 구매(다른 사이트 이용)',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:2.366,
            }]
          },
          {
            name:'교재가격/배송비 불만',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:7.1,
            }]
          },
          {
            name:'교재 내용 불만',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:10.651,
            }]
          },
          {
            name:'교재 파본 및 품질 불만',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:2.366,
            }]
          },
          {
            name:'교재 품절',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:49.112,
            }]
          },
          {
            name:'배송 불만',
            type:'bar',
            barWidth:50,
            stack:'total',
            data:[{
              value:26.627,
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
