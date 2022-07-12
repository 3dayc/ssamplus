<template lang="html">
  <div>
    <span class="supUtilTxt mb20">※ 회원가입 시 입력한 ‘생년’을 활용한 연령에 대한 통계</span>

    <div class="userTypeWrap">
      <!-- 신규 가입회원 연령 분포 -->
      <div>
        <div class="subTit"><h3>신규 가입회원 연령 분포</h3></div>
        <!-- 차트 -->
        <div class="h300">
          <div class="chart wFull">
            <Echart
            :option="circleChart"
            :loading="loading"
            @click="showEvent"
            />
          </div>
        </div>
        <!-- //차트 -->
      </div>
      <!-- //신규 가입회원 연령 분포 -->
      <div>
        <!-- 검색 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                    <template v-slot="{ inputValue, togglePopover, isDragging }">
                      <input :value="inputValue.start + ' ~ ' + inputValue.end" :class="isDragging ? 'text-green-600' : 'text-green-900'" @click="togglePopover()" placeholder="시작일 선택 ~ 종료일 선택" />
                    </template>
                  </Vcalendar>
                </span>
                <span class="lsItem">
                  <button class="btnSearch">검색</button>
                </span>
              </div>
            </div>
          </div>
          <div class="right-po">
            <dl>
              <dt>연령대: </dt>
              <dd><strong>20</strong>대</dd>
            </dl>
          </div>
        </div>
        <!-- //검색 -->
        <!-- 목록 -->
        <div class="tls">
          <table>
            <thead>
              <tr>
                <th>나이</th>
                <th>인원</th>
                <th>전년 동기</th>
                <th>증감</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20 세</td>
                <td>37 명</td>
                <td>34 명</td>
                <td>3</td>
              </tr>
              <tr>
                <td>21 세</td>
                <td>2 명</td>
                <td>6 명</td>
                <td class="fRed">-4</td>
              </tr>
              <tr>
                <td>22 세</td>
                <td>14 명</td>
                <td>12 명</td>
                <td>2</td>
              </tr>
              <tr>
                <td>23 세</td>
                <td>2 명</td>
                <td>3 명</td>
                <td class="fRed">-1</td>
              </tr>
              <tr>
                <td>24 세</td>
                <td>4 명</td>
                <td>0 명</td>
                <td>4</td>
              </tr>
              <tr>
                <td>25 세</td>
                <td>6 명</td>
                <td>5 명</td>
                <td>1</td>
              </tr>
              <tr>
                <td>26 세</td>
                <td>7 명</td>
                <td>1 명</td>
                <td>6</td>
              </tr>
              <tr>
                <td>27 세</td>
                <td>18 명</td>
                <td>22 명</td>
                <td class="fRed">-4</td>
              </tr>
              <tr>
                <td>28 세</td>
                <td>4 명</td>
                <td>6 명</td>
                <td class="fRed">-2</td>
              </tr>
              <tr>
                <td>29 세</td>
                <td>7 명</td>
                <td>2 명</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //목록 -->
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'UserTypeAge',
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
          top: '85',
          left: '140',
          textAlign: 'center'
        },
        grid: {
          top: '0',
          left: '0'
        },
        tooltip: {
            //trigger: 'item'
            formatter: "{b} <br> {c}% ( 000건 )"
        },
        legend: {
            itemWidth: 7,
            itemHeight: 10,
            top: '10',
            right: '10',
            width: '80px'
        },
        series: [
          {
            name: false,
            type: 'pie',
            radius: ['60%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            center: ["145px", "120px"],
            labelLine: {
              show: false
            },
            data: [
              {value: 1048, name: '20대'},
              {value: 735, name: '30대'},
              {value: 580, name: '40대'},
              {value: 484, name: '50대'},
              {value: 300, name: '60대'},
              {value: 300, name: '70대이상'},
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
