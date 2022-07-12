<template lang="html">
  <div>
    <div class="pageTit">
      <h2>기간 통계</h2>
      <span><router-link to="/mkup/teacher/statsDaily">통계</router-link><em>기간 통계</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="statsDaily"><!-- class 없어도 유지 -->
        <!-- 검색 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem lineNone">
                  <strong class="title">조회기간</strong>
                  <VCalendar class="calSet dupCal" v-model="range" is-range color="blue">
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
              <div><button class="btnRefresh">초기화</button></div>
            </div>
          </div>
        </div>
        <!-- //검색 -->
        <!-- 주요 수치 요약 -->
        <div class="subTit"><h3>주요 수치 요약</h3></div>
        <div class="statsDailyBox">
          <div>
            <dl>
              <dt>강좌 판매량</dt>
              <dd>
                <span class="txt01">
                  <strong>20</strong> / 378
                </span>
                <span class="txt02">조회기간 / 당해년도 전체</span>
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>수강생 수</dt>
              <dd>
                <span class="txt01">
                  <strong>20</strong> / 378
                </span>
                <span class="txt02">조회기간 / 당해년도 전체</span>
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>교재 판매량</dt>
              <dd>
                <span class="txt01">
                  <strong>33</strong> / 352
                </span>
                <span class="txt02">조회기간 / 당해년도 전체</span>
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>국어 준비회원</dt>
              <dd>
                <span class="txt01">
                  <strong>20</strong> / 321
                </span>
                <span class="txt02">강의 과목 / 전체 회원 수</span>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //주요 수치 요약 -->
        <!-- 선생님 홈 조회수 -->
        <div class="subTit mt10"><h3>선생님 홈 조회수</h3></div>
        <div class="w900">
          <div class="listSummery">
            <span class="right">
              <dl>
                <dt>당해년도 총 조회수</dt>
                <dd><strong>217</strong> 회</dd>
              </dl>
            </span>
          </div>
          <!-- 차트 -->
          <div class="chart h200">
            <Echart
              :option="lineChart"
              :loading="loading"
            />
          </div>
          <!-- //차트 -->
        </div>
        <!-- //선생님 홈 조회수 -->
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
  name: 'StatsDaily',
  data() {
    return {
      range: {
        start: '',
        end: '',
      },
      loading: false,
      lineChart: {
        backgroundColor:'#fff',
        tooltip: {
            trigger: 'axis',
            formatter: "{b} <br>{c0}회 (- 506)"
        },
        grid: {
            left: '0',
            bottom: '0',
            top: '5%',
            width:'97%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10', '2021-11', '2021-12']
        },
        yAxis: {
            type: 'value'
        },
        series: [
          {
            name: '강사 총 조회수',
            type: 'line',
            stack: 'total',
            itemStyle: {
              color: '#4f81bd'
            },
            data: [132,145,101,76,,,,,,,,,,]
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
