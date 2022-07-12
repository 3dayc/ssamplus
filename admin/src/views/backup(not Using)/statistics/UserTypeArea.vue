<template lang="html">
  <div>
    <span class="supUtilTxt mb20">※ 회원가입 시 입력한 ‘임용 응시희망지역’에 대한 통계</span>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <VCalendar class="calSet dupCal w350" v-model="range" is-range color="green">
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
    </div>
    <!-- //검색 -->
    <!-- 차트 -->
    <div class="chart h300">
      <Echart
        :option="barChart"
        :loading="loading"
        @click="showEvent"
      />
    </div>
    <!-- //차트 -->
    <!-- 상세 인원 테이블 -->
    <!-- 서울 -->
    <div class="mt10" v-if="seoulTrigger">
      <div class="boardTop">
        <div class="left-po">
          <div class="subTit"><h3><em class="fBlue">서울</em> 지역 회원  상세 통계</h3></div>
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
              <th>시험</th>
              <th>인원</th>
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
        </table>
      </div>
    </div>
    <!-- //서울 -->
    <!-- 경기 -->
    <div class="mt10" v-if="gyeonggiTrigger">
      <div class="boardTop">
        <div class="left-po"><h3><strong><em class="fBlue">경기</em> 지역 회원  상세 통계</strong></h3></div>
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
      <div class="tls subGreen">
        <table>
          <thead>
            <tr>
              <th>시험</th>
              <th>인원</th>
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
