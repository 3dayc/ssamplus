<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="studyMyStatus">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>나의 학습현황</h3>
            <div class="summeryTxt">
              일별, 월별, 연간 나의 학습현황을 확인 할 수 있습니다.<br/>
              스스로 학습계획을 설계해보고, 학습관리 서비스를 통해 학습효과를 높여보세요.
            </div>
          </div>
          <!-- //서브 타이틀 -->
          <div class="grayBox">
            <span class="selectSet">
              <select name="" id="">
                <option>2021년 4월 1일 ~ 4월 25일</option>
                <option>2021년 3월 1일 ~ 3월 31일</option>
                <option>2021년 2월 1일 ~ 2월 28일</option>
                <option>2021년 1월 1일 ~ 2월 31일</option>
              </select>
            </span>
          </div>
          <div class="statusGraph">
            <div class="item takenLec">
              <div class="graphArea">
                <Echart
                  :option="bar31"
                  :loading="loading"
                />
                <div class="label">
                  <!-- <span style="color:#428FBB">80점 도약 모의고사반 첨삭비</span>
                  <span style="color:#887BBA">[중등]22학년도 2차 면접 강의 사전체험</span>
                  <span style="color:#e5a90f">[일반영어/영미문학] 2개년 기출분석 강의(19,20학년)</span>
                  <span style="color:#F14159">기출문제분석반1</span>
                  <span style="color:#1DDDDF">(한방에정리) 문학분석방법 특강</span> -->
                </div>
              </div>
              <dl class="numberData nD01">
                <dt>
                  강의 별 진척
                  <button @click="studyGraphPopTrigger = true, scrollHiden($event)">학습비교</button>
                </dt>
                <dd>
                  <span class="tit">총 수강강의<strong>50강</strong></span>
                  <span class="wide">일 평균 수강강의<strong>3강</strong></span>
                  <span>오늘의 수강강의<em><strong>13</strong>%</em></span>
                </dd>
              </dl>
            </div>
            <div class="item lecTime noData">
              <div class="graphArea">
                <Echart
                  :option="bar32"
                  :loading="loading"
                />
                <!--데이터 없을때 //-->
                <span class="defaultName noData" style="color:#c1c1c1"><strong style="color:#c1c1c1">수강중인 강좌가 없습니다.</strong><br/>00:00</span>
                <!-- <span class="defaultName"><strong style="color:#428FBB">80점 도약 모의고사반 첨삭비</strong><br/>00:00</span> -->
                <!--// 데이터 없을때 -->
              </div>
              <dl class="numberData nD02">
                <dt>
                  강의 별 수강시간
                  <button @click="studyGraphPopTrigger = true, scrollHiden($event)">학습비교</button>
                </dt>
                <dd>
                  <span class="tit">총 수강시간<strong>50:48</strong></span>
                  <span class="wide">일 평균 수강시간<strong>03:15</strong></span>
                  <span>오늘의 수강시간<em><strong>16</strong>%</em></span>
                </dd>
              </dl>
            </div>
            <div class="item selfTime">
              <div class="graphArea">
                <!-- <div class="studyBook">
                  <div>
                    <span>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                    </span>
                    <span>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                    </span>
                    <span>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                    </span>
                    <span>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                    </span>
                    <span>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                    </span>
                    <span>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                    </span>
                    <span>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                    </span>
                    <span>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                      <em>1시간</em>
                    </span>
                    <p>26:15</p>
                  </div>
                </div> -->
                <div class="studyBook noData">
                  <div>
                    <span><!--8시간씩 짝-->
                      <em>1시간</em>
                    </span>
                    <p>00:00</p>
                  </div>
                </div>
              </div>
              <dl class="numberData nD03">
                <dt>
                  자율 공부 시간
                  <button @click="studyGraphPopTrigger = true, scrollHiden($event)">학습비교</button>
                </dt>
                <dd>
                  <span class="tit">총 공부 시간<strong>62:00</strong></span>
                  <span class="wide">일 평균 공부시간<strong>02:29</strong></span>
                  <span>오늘의 공부시간<em><strong>11</strong>%</em></span>
                </dd>
              </dl>
            </div>
          </div>
          <!-- tab-wrap -->
          <div class="statusTabwrap">
            <!-- tab -->
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <ul class="blockTab">
                    <li :class="{on:currentTab===0}"><button @click="currentTab = 0">캘린더 보기</button></li>
                    <li :class="{on:currentTab===1}"><button @click="currentTab = 1">그래프 보기</button></li>
                  </ul>
                </nav>
              </div>
            </div>
            <!--// tab -->
            <div class="tabLayout">
              <div class="calTop">
                <span class="left">
                  <button class="btnStuyTime" @click="popupTrigger = true">자율공부시간 입력</button>
                  <span>※ 일자를 클릭하여 자율공부시간을 직접 입력해 주세요.</span>
                </span>
                <span class="right" v-if="!this.mobile">
                  <em class="scSet num"><i></i>강의 수</em>
                  <em class="scSet time"><i></i>수강시간</em>
                  <em class="scSet majors"><i></i>전공과목 자율공부시간</em>
                  <em class="scSet edu"><i></i>교육학(교직)논술 공부시간</em>
                </span>
              </div>
              <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                <StudyMyStatusCalender />
              </div>
              <div v-if="currentTab == 1" class="tabData">
                <StudyMyStatusGraph />
              </div>
              <div class="mobileGuide" v-if="this.mobile">
                <em class="scSet num"><i></i>강의 수</em>
                <em class="scSet time"><i></i>수강시간</em>
                <em class="scSet majors"><i></i>전공과목 자율공부시간</em>
                <em class="scSet edu"><i></i>교육학(교직)논술 공부시간</em>
              </div>
            </div>
          </div>
          <!-- //tab-wrap -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- Layer Popup -->
    <div class="myLecStudyGraphPop" v-if="studyGraphPopTrigger == true">
      <div class="frameBack">
        <button class="btnDelete" @click="studyGraphPopTrigger = false, scrollHiden($event)">닫기</button>
        <StudyMyGraphPop />
      </div>
    </div>
    <!-- 자율 공부 시간 입력 팝업 -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" class="large studySettongPopup">
      <template slot="modalheader">
        <div>
          <h1>자율 공부 시간 입력</h1>
        </div>
      </template>
      <template slot="modalbody">
        <p>
          자율 공부 시간은 <span class="fRed">강의 수강 시간을 제외한</span> 스스로 공부한 시간을 기록하여 <em>나의 학습현황을 확인할 수 있습니다.</em>
        </p>
        <VCalendar class="calSet" v-model="date" :masks="masks" color="green">
          <template v-slot="{ inputValue, togglePopover }">
            <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
          </template>
        </VCalendar>
        <div class="todayWin">
          <div class="box">
            <strong>전공과목 공부시간</strong>
            <div>
              <dl>
                <dt>공부시간 (시)</dt>
                <dd>
                  <span><input type="checkbox" id="time01"/><label for="time01">1</label></span>
                  <span><input type="checkbox" id="time02"/><label for="time02">2</label></span>
                  <span><input type="checkbox" id="time03"/><label for="time03">3</label></span>
                  <span><input type="checkbox" id="time04"/><label for="time04">4</label></span>
                  <span><input type="checkbox" id="time05"/><label for="time05">5</label></span>
                  <span><input type="checkbox" id="time06"/><label for="time06">6</label></span>
                  <span><input type="checkbox" id="time07"/><label for="time07">7</label></span>
                  <span><input type="checkbox" id="time08"/><label for="time08">8</label></span>
                  <span><input type="checkbox" id="time09"/><label for="time09">9</label></span>
                  <span><input type="checkbox" id="time10"/><label for="time10">10</label></span>
                  <span><input type="checkbox" id="time11"/><label for="time11">11</label></span>
                  <span><input type="checkbox" id="time12"/><label for="time12">12</label></span>
                  <span><input type="checkbox" id="time13"/><label for="time13">13</label></span>
                  <span><input type="checkbox" id="time14"/><label for="time14">14</label></span>
                  <span><input type="checkbox" id="time15"/><label for="time15">15</label></span>
                  <span><input type="checkbox" id="time16"/><label for="time16">16</label></span>
                  <span><input type="checkbox" id="time17"/><label for="time17">17</label></span>
                  <span><input type="checkbox" id="time18"/><label for="time18">18</label></span>
                  <span><input type="checkbox" id="time19"/><label for="time19">19</label></span>
                  <span><input type="checkbox" id="time20"/><label for="time20">20</label></span>
                  <span><input type="checkbox" id="time21"/><label for="time21">21</label></span>
                  <span><input type="checkbox" id="time22"/><label for="time22">22</label></span>
                  <span><input type="checkbox" id="time23"/><label for="time23">23</label></span>
                  <!-- <span><input type="checkbox" id="time24"/><label for="time24">24</label></span> -->
                </dd>
              </dl>
              <dl class="minuteCase">
                <dt>공부시간 (분)</dt>
                <dd>
                  <span><input type="checkbox" id="minute00"/><label for="minute00">00</label></span>
                  <span><input type="checkbox" id="minute01"/><label for="minute01">10</label></span>
                  <span><input type="checkbox" id="minute02"/><label for="minute02">20</label></span>
                  <span><input type="checkbox" id="minute03"/><label for="minute03">30</label></span>
                  <span><input type="checkbox" id="minute04"/><label for="minute04">40</label></span>
                  <span><input type="checkbox" id="minute05"/><label for="minute05">50</label></span>
                </dd>
              </dl>
            </div>
          </div>
          <div class="box">
            <strong>교육학 공부시간</strong>
            <div>
              <dl>
                <dt>공부시간 (시)</dt>
                <dd>
                  <span><input type="checkbox" id="etime01"/><label for="etime01">1</label></span>
                  <span><input type="checkbox" id="etime02"/><label for="etime02">2</label></span>
                  <span><input type="checkbox" id="etime03"/><label for="etime03">3</label></span>
                  <span><input type="checkbox" id="etime04"/><label for="etime04">4</label></span>
                  <span><input type="checkbox" id="etime05"/><label for="etime05">5</label></span>
                  <span><input type="checkbox" id="etime06"/><label for="etime06">6</label></span>
                  <span><input type="checkbox" id="etime07"/><label for="etime07">7</label></span>
                  <span><input type="checkbox" id="etime08"/><label for="etime08">8</label></span>
                  <span><input type="checkbox" id="etime09"/><label for="etime09">9</label></span>
                  <span><input type="checkbox" id="etime10"/><label for="etime10">10</label></span>
                  <span><input type="checkbox" id="etime11"/><label for="etime11">11</label></span>
                  <span><input type="checkbox" id="etime12"/><label for="etime12">12</label></span>
                  <span><input type="checkbox" id="etime13"/><label for="etime13">13</label></span>
                  <span><input type="checkbox" id="etime14"/><label for="etime14">14</label></span>
                  <span><input type="checkbox" id="etime15"/><label for="etime15">15</label></span>
                  <span><input type="checkbox" id="etime16"/><label for="etime16">16</label></span>
                  <span><input type="checkbox" id="etime17"/><label for="etime17">17</label></span>
                  <span><input type="checkbox" id="etime18"/><label for="etime18">18</label></span>
                  <span><input type="checkbox" id="etime19"/><label for="etime19">19</label></span>
                  <span><input type="checkbox" id="etime20"/><label for="etime20">20</label></span>
                  <span><input type="checkbox" id="etime21"/><label for="etime21">21</label></span>
                  <span><input type="checkbox" id="etime22"/><label for="etime22">22</label></span>
                  <span><input type="checkbox" id="etime23"/><label for="etime23">23</label></span>
                  <!-- <span><input type="checkbox" id="etime24"/><label for="etime24">24</label></span> -->
                </dd>
              </dl>
              <dl class="minuteCase">
                <dt>공부시간 (분)</dt>
                <dd>
                  <span><input type="checkbox" id="eminute00"/><label for="eminute00">00</label></span>
                  <span><input type="checkbox" id="eminute01"/><label for="eminute01">10</label></span>
                  <span><input type="checkbox" id="eminute02"/><label for="eminute02">20</label></span>
                  <span><input type="checkbox" id="eminute03"/><label for="eminute03">30</label></span>
                  <span><input type="checkbox" id="eminute04"/><label for="eminute04">40</label></span>
                  <span><input type="checkbox" id="eminute05"/><label for="eminute05">50</label></span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger = false">취소</button>
          <button class="btnL" @click="popupTrigger = false">확인</button>
        </div>
      </template>
    </Popup>
    <!-- //자율 공부 시간 입력 팝업 -->
    <!-- //Layer Popup -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import StudyMyStatusCalender from '@/views/mylec/StudyMyStatusCalender.vue';
import StudyMyStatusGraph from '@/views/mylec/StudyMyStatusGraph.vue';
import StudyMyGraphPop from '@/views/mylec/StudyMyGraphPop.vue';

export default {
  mixins: [Mixin],
  name: 'StudyMyStatus',
  components: {
    StudyMyStatusCalender,
    StudyMyStatusGraph,
    StudyMyGraphPop,
  },
  data() {
    return {
      currentTab:0,
      popupTrigger:false,
      date: '2021-04-05',
      masks: {
        input: 'YYYY-MM-DD',
      },
      studyGraphPopTrigger:false,
      loading: false,
      bar31: {
        grid: {
          top: '20',
          left: '20',
          right: '0',
          bottom: '20',
        },
        tooltip: {
            formatter: "{b} : {c}강",
            trigger : 'item',
            //position: [10, 10]
        },
        xAxis: {
            type: 'value',
            show: false,
        },
        yAxis: {
            type: 'category',
            show: false,
        },
        series: [{
            type: 'bar',
            barGap: 0,
            barCategoryGap: "25",
            label:{
              show: true,
              position: "Left",
              distance: 8,
              formatter: "{b} / {c}강",
              fontSize: 13,
              offset: [13, -18],
              fontFamily: "NotoSansCJKkr",
            },
            animation: true,
            data: [{
              //데이터 없을때
              value: 0.3,
              name: '수강중인 강좌가 없습니다.',
              itemStyle: {
                  color: '#c1c1c1'
              },
              label:{
                  color: '#c1c1c1'
              }
            }, 
            {
              value: 2,
              name: '(한방에정리) 문학분석방법 특강',
              itemStyle: {
                  color: '#2FB3B4'
              },
              label:{
                  color: '#2FB3B4'
              }
            }, 
            {
              value: 4,
              name: '기출문제분석반',
              itemStyle: {
                  color: '#F14159'
              },
              label:{
                  color: '#F14159'
              }
            }, {
              value: 5,
              name: '[일반영어/영미문학] 2개년 기출분석 강의(19,20학년)',
              itemStyle: {
                  color: '#F5CA5C'
              },
              label:{
                  color: '#F5CA5C'
              }
            }, {
              value: 10,
              name: '[중등]22학년도 2차 면접 강의 사전체험',
              itemStyle: {
                  color: '#887BBA'
              },
              label:{
                  color: '#887BBA'
              }
            }, {
              value: 16,
              name: '80점 도약 모의고사반 첨삭비',
              itemStyle: {
                  color: '#428FBB'
              },
              label:{
                  color: '#428FBB'
              }
            }
            ],
        }]
      },
      bar32: {
        tooltip: {
            formatter: "{b}<br/>00:00",
        },
        legend: {
            show: false,
        },
        series: [{
            name: '강의 수강시간',
            type: 'pie',
            radius: ['50%', '80%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            clockwise: true,
            emphasis: {
                label: {
                  show: true,
                  width: '120',
                  fontSize: '16',
                  fontWeight: 'bold',
                  formatter: "{b}\n00:00",
                  lineHeight: 26,
                  backgroundColor: "rgba(255, 255, 255, 1)"
                }
            },
            labelLine: {
                show: false
            },
            animation: true,
            data: [
              {
              value:100, name: '수강중인 강좌가 없습니다.',
              itemStyle: {
                  color: '#c1c1c1'
              }
            }, 
            //   {
            //   value: 16, name: '80점 도약 모의고사반 첨삭비',
            //   itemStyle: {
            //       color: '#428FBB'
            //   }
            // }, 
            // {
            //   value: 10, name: '[중등]22학년도 2차 면접 강의 사전체험',
            //   itemStyle: {
            //       color: '#887BBA'
            //   }
            // }, {
            //   value: 5, name: '[일반영어/영미문학] 2개년 기출분석 강의(19,20학년)',
            //   itemStyle: {
            //       color: '#F5CA5C'
            //   }
            // }, {
            //   value: 4, name: '기출문제분석반',
            //   itemStyle: {
            //       color: '#F14159'
            //   }
            // }, {
            //   value: 2, name: '(한방에정리) 문학분석방법 특강',
            //   itemStyle: {
            //       color: '#2FB3B4'
            //   }
            // }
            ],
        }]
      },
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>
