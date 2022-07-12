<template lang="html">
  <div>
    <div class="userTypeWrap">
      <!-- 신규 가입회원 연령 분포 -->
      <div>
        <div class="menuHelp mb20">
          <ul>
            <li>ⓘ 가입 회원의 ‘나이’ 유형을 집계합니다. 나이는 가입 기준 나이를 집계하며, 현재 나이의 추이는 집계하지 않습니다.</li>
            <li>Ⓘ 검색 기간 대비 전년동기의 ‘나이’ 기준 증감인원을 집계합니다.</li>
          </ul>
        </div>
        <div class="subTit"><h3><em class="fBlue">2021</em> 신규 가입회원 연령 분포</h3></div>
        <!-- 차트 -->
        <div class="h300 mb20">
          <div class="chart wFull">
            <Echart
            :option="circleChart"
            :loading="loading"
            @click="showEvent"
            />
          </div>
        </div>
        <!-- //차트 -->
        <!-- 차트 통계 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="100">
              <col width="100">
              <col width="100">
              <col width="100">
              <col width="100">
            </colgroup>
            <thead>
              <tr>
                <th>10대</th>
                <th>20대</th>
                <th>30대</th>
                <th>40대</th>
                <th>50대 이상</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a>32명 (32%)</a></td>
                <td><a>29명 (29%)</a></td>
                <td><a>17명 (17%)</a></td>
                <td><a>9명 (9%)</a></td>
                <td><a>2명 (2%)</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //차트 통계 목록 -->
      </div>
      <!-- //신규 가입회원 연령 분포 -->
      <div>
        <!-- 검색 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <strong class="title">회원가입일</strong><!-- 2021-08-02 캘린더 사용 컴포넌트 앞에 타이틀 추가 -->
                  <VCalendar class="calSet dupCal " v-model="range" is-range color="green">
                    <template v-slot="{ inputValue, inputEvents, togglePopover, isDragging }">
                      <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.start" v-on="inputEvents.start" @click="togglePopover()" placeholder="시작일 선택"/>
                      <em>~</em>
                      <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.end" v-on="inputEvents.end" @click="togglePopover()" placeholder="종료일 선택"/>
                    </template>
                  </Vcalendar>
                </span>
                <span class="lsItem">
                  <button class="btnSearch">검색</button>
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
          <div class="right-po">
          </div>
        </div>
        <!-- //검색 -->
        <!-- 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="200"/>
              <col width="200"/>
              <col width="200"/>
              <col width="200"/>
            </colgroup>
            <thead>
              <tr>
                <th>나이</th>
                <th>인원 <button class="btnSort">정렬</button></th>
                <th>전년 동기</th>
                <th class="bgRed">증감</th>
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
                <td class="fRed">(1)</td>
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
                <td class="fRed">(4)</td>
              </tr>
              <tr>
                <td>28 세</td>
                <td>4 명</td>
                <td>6 명</td>
                <td class="fRed">(2)</td>
              </tr>
              <tr>
                <td>29 세</td>
                <td>7 명</td>
                <td>2 명</td>
                <td>5</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack fBig">
                <td>합계</td>
                <td>100명</td>
                <td>90명</td>
                <td>10</td>
              </tr>
            </tfoot>
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
              {value: 1048, name: '10대'},
              {value: 1048, name: '20대'},
              {value: 735, name: '30대'},
              {value: 580, name: '40대'},
              {value: 484, name: '50대 이상'},
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
