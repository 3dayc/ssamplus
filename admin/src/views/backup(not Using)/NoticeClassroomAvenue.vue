<template lang="html">
  <div class="noticeClassroomIdea">
    <div class="boardTop">
      <div class="left-po">
        <span class="frontTooltip">
          <em>ⓘ Front</em>
          <span> - 희소고시학원 – 강의실 배정표 > 전체 표시</span>
        </span>
      </div>
      <span class="calDate">
        <em class="year">2021</em>
        <button class="prevWeek">지난주</button>
        <span class="date">06-01 ~ 06-07</span>
        <button class="nextWeek">다음주</button>
      </span>
      <div class="right-po mt5"><button class="btnAdd" @click="BbsNoticeClassroomWrite()">신규등록</button></div>
    </div>

    <!-- Calendar -->
    <div class="tcs classRoomCase">
      <table>
        <colgroup>
          <col width="4%"/>
          <col width="3%"/>
          <col width="13.28%" span="7"/>
        </colgroup>
        <thead>
          <tr>
            <th colspan="2">강의실/시간</th>
            <th>01 월</th>
            <th>02 화</th>
            <th class="today">03 수</th>
            <th>04 목</th>
            <th>05 금</th>
            <th>06 토</th>
            <th>07 일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowspan="3" class="thRowsapn">401호</th>
            <th>오전</th>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td class="today"><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
          </tr>
          <tr>
            <th>오후</th>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td class="today"><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
          </tr>
          <tr>
            <th>야간</th>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td class="today"><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
          </tr>
          <!---->
          <tr>
            <th rowspan="3" class="thRowsapn">402호</th>
            <th>오전</th>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td class="today"><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
          </tr>
          <tr>
            <th>오후</th>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td class="today"><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
          </tr>
          <tr>
            <th>야간</th>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td class="today"><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
          </tr>
          <!---->
          <!-- Loop 강의실 1개 셋트 -->
          <tr>
            <th rowspan="3" class="thRowsapn">403호</th>
            <th>오전</th>
            <td>
              <a class="box sbjEdu" @click="BbsNoticeClassroomView()">
                <span>[교육학/윤중샘]<br/>이론형성평가, 서결론 마스터<br/>(09:00~12:00)</span>
              </a>
            </td>
            <td rowspan="2">
              <a class="box sbjChemi" @click="BbsNoticeClassroomView()">
                <span>[화학/안병천]<br/>스탠다드 분석화학 기축 분석 및 문제 적응반<br/>(11:00~17:00)</span>
              </a>
            </td>
            <td rowspan="3" class="today">
              <a class="box sbjPhy" @click="BbsNoticeClassroomView()">
                <span>[물리/이길동]<br/>물리 적응반<br/>(11:00~20:00)</span>
              </a>
            </td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
          </tr>
          <tr>
            <th>오후</th>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td>
              <a class="box sbjKo" @click="BbsNoticeClassroomView()">
                <span>[국어/박노송]<br/>심화 기출문제 분석 강의<br/>(15:00~19:00)</span>
              </a>
            </td>
            <td rowspan="2">
              <a class="box sbjBeauty" @click="BbsNoticeClassroomView()">
                <span>[미용/홍길동]<br/>미용의 기초<br/>(15:30~20:30)</span>
              </a>
            </td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
          </tr>
          <tr>
            <th>야간</th>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td>
              <a class="box sbjPys" @click="BbsNoticeClassroomView()">
                <span>[체육/김용호]<br/>심화 기출문제 분석 강의<br/>(18:00~21:00)</span>
              </a>
            </td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
            <td><a class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></a></td>
          </tr>
          <!-- //Loop 강의실 1개 셋트 -->
        </tbody>
      </table>
    </div>
    <!-- //Calendar -->

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'NoticeClassroomIdea',
  data(){
    return {
      range: {
      },
    }
  },
  methods: {
    BbsNoticeClassroomWrite() {
      let routeData = this.$router.resolve({name: 'BbsNoticeClassroomWrite', query: {data: "someData"}});
      window.open('/mkup/windowPopup/BbsNoticeClassroom/write', '_blank', `width=1000,height=465`);
    },
    BbsNoticeClassroomView() {
      let routeData = this.$router.resolve({name: 'BbsNoticeClassroomView', query: {data: "someData"}});
      window.open('/mkup/windowPopup/BbsNoticeClassroom/view', '_blank', `width=1000,height=700`);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
