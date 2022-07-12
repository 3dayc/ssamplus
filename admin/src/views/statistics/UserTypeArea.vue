<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="left">
        <div class="menuHelp">
          <ul>
            <li>ⓘ 가입 회원의 ‘지역(임용 응시희망지역)’ 유형을 집계합니다. </li>
            <li>Ⓘ 각 지역의 막대그래프를 선택 시 하단에 지역별 상세 통계가 표출되며, 준비중인 시험을 기준으로 회원수를 집계합니다.</li>
          </ul>
        </div>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <strong class="title">회원가입일</strong><!-- 2021-08-02 캘린더 사용 컴포넌트 앞에 타이틀 추가 -->
              <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
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
    </div>
    <!-- //검색 -->
    <!-- 차트 -->
    <div class="chart h300 m0auto">
      <Echart
        :option="barChart"
        :loading="loading"
        @click="showEvent"
      />
    </div>
    <!-- //차트 -->
    <!-- 상세 인원 테이블 -->
    <!-- 서울 -->
    <div class="w900 m0auto" v-if="seoulTrigger">
      <div class="boardTop">
        <div class="left-po">
          <div class="subTit"><h3><em class="fBlue">서울</em> 지역 회원  상세 통계</h3></div>
        </div>
        <div class="right-po">
          <dl>
            <dt>총 회원</dt>
            <dd><strong>351,337</strong>명</dd>
          </dl>
          <dl>
            <dt>지역 정보 입력 회원</dt>
            <dd><strong>250,562</strong>명</dd>
          </dl>
        </div>
      </div>
      <div class="tls">
        <table>
          <thead>
            <tr>
              <th>준비중인 시험 <button class="btnSort">정렬</button></th>
              <th>인원 <button class="btnSort">정렬</button></th>
              <th>전년 동기</th>
              <th class="bgRed">증감</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>유아</td>
              <td>37 명</td>
              <td>34 명</td>
              <td>3</td>
            </tr>
            <tr>
              <td>초등</td>
              <td>2 명</td>
              <td>6 명</td>
              <td class="fRed">(4)</td>
            </tr>
            <tr>
              <td>국어</td>
              <td>14 명</td>
              <td>12 명</td>
              <td>2</td>
            </tr>
            <tr>
              <td>영어</td>
              <td>2 명</td>
              <td>3 명</td>
              <td class="fRed">(1)</td>
            </tr>
            <tr>
              <td>수학</td>
              <td>4 명</td>
              <td>0 명</td>
              <td>4</td>
            </tr>
            <tr>
              <td>음악</td>
              <td>6 명</td>
              <td>5 명</td>
              <td>1</td>
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
    </div>
    <!-- //서울 -->
    <!-- 경기 -->
    <div class="w900 m0auto" v-if="gyeonggiTrigger">
      <div class="boardTop">
        <div class="left-po">
          <div class="subTit"><h3><em class="fBlue">경기</em> 지역 회원  상세 통계</h3></div>
        </div>
        <div class="right-po">
          <dl>
            <dt>총 회원</dt>
            <dd><strong>351,240</strong>명</dd>
          </dl>
          <dl>
            <dt>지역 정보 입력 회원</dt>
            <dd><strong>100,240</strong>명</dd>
          </dl>
        </div>
      </div>
      <div class="tls">
        <table>
          <thead>
            <tr>
              <th>준비중인 시험 <button class="btnSort">정렬</button></th>
              <th>인원 <button class="btnSort">정렬</button></th>
              <th>전년 동기</th>
              <th>증감</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>유아</td>
              <td>37 명</td>
              <td>34 명</td>
              <td>3</td>
            </tr>
            <tr>
              <td>초등</td>
              <td>2 명</td>
              <td>6 명</td>
              <td>-4</td>
            </tr>
            <tr>
              <td>국어</td>
              <td>14 명</td>
              <td>12 명</td>
              <td>2</td>
            </tr>
            <tr>
              <td>영어</td>
              <td>2 명</td>
              <td>3 명</td>
              <td>-1</td>
            </tr>
            <tr>
              <td>수학</td>
              <td>4 명</td>
              <td>0 명</td>
              <td>4</td>
            </tr>
            <tr>
              <td>음악</td>
              <td>6 명</td>
              <td>5 명</td>
              <td>1</td>
            </tr>
            <tr>
              <td>미술</td>
              <td>6 명</td>
              <td>1 명</td>
              <td>6</td>
            </tr>
            <tr>
              <td>체육</td>
              <td>12 명</td>
              <td>22 명</td>
              <td>-4</td>
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
    </div>
    <!-- //경기 -->
    <!-- //상세 인원 테이블 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'UserTypeArea',
  data() {
    return {
      loading: false,
      seoulTrigger: true,
      gyeonggiTrigger: false,
      range: {
				start: new Date(),
				end: new Date(),
			},
      barChart: {
        backgroundColor:'#fff',
        grid: {
          left: '0',
          right: '0',
          bottom: '0',
          top: '7%',
          height:'90%',
          containLabel: true
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
    }
  },
  methods: {
    showEvent(event) {
      let area = event.name;

      this.seoulTrigger = false;
      this.gyeonggiTrigger = false;

      if (area == '서울') this.seoulTrigger = true;
      else if (area == '경기') this.gyeonggiTrigger = true;
    }
  },
  components: {
  },
}
</script>
