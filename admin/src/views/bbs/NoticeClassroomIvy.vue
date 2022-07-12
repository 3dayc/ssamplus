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
          <col width="5%"/>
          <col width="5%"/>
          <col width="12.85%" span="7"/>
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
          <!---->
          <tr>
            <th rowspan="3" class="thRowsapn">401호</th>
            <th>오전</th>
            <td>
              <div class="box schStart" @click="BbsNoticeClassroomView()">
                <div class="fBlue">[일반(직강)] [개강]</div>
                <span class="teacher">(교육학)윤중샘</span>
                <strong class="lecture">이론형성평가 마스터 이론형성평가 마스터 이론형성평가 마스터</strong>
                <em class="time">(09:00~12:00)</em>
              </div>
            </td>
            <td>
              <div class="box schReinforce" @click="BbsNoticeClassroomView()">
                <div class="fBlue">[직영상] [보강]</div>
                <span class="teacher">(화학)안병천</span>
                <em class="time">(11:00~17:00)</em>
              </div>
            </td>
            <td class="today">
              <div class="box schNomal" @click="BbsNoticeClassroomView()">
                <div class="fBlue">[라이브]</div>
                <span class="teacher">(물리)이길동</span>
                <strong class="lecture">물리 적응반</strong>
                <em class="time">(11:00~20:00)</em>
              </div>
            </td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
          </tr>
          <tr>
            <th>오후</th>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td>
              <div class="box schReinforce" @click="BbsNoticeClassroomView()">
                <div class="fBlue">[직영상] [보강]</div>
                <span class="teacher">(화학)안병천</span>
                <em class="time">(11:00~17:00)</em>
              </div>
            </td>
            <td class="today">
              <div class="box schNomal" @click="BbsNoticeClassroomView()">
                <div class="fBlue">[라이브]</div>
                <span class="teacher">(물리)이길동</span>
                <strong class="lecture">물리 적응반</strong>
                <em class="time">(11:00~20:00)</em>
              </div>
            </td>
            <td>
              <div class="box schAbsence" @click="BbsNoticeClassroomView()">
                <div class="fBlue">[라이브] [종강]</div>
                <span class="teacher">(수학)김수학</span>
                <strong class="lecture">수학 완전 정복</strong>
                <em class="time">(18:00~21:00)</em>
              </div>
            </td>
            <td>
              <div class="box schClosed" @click="BbsNoticeClassroomView()">
                <div class="fBlue">[휴관]</div>
                <span class="teacher">(국어)박노송</span>
                <strong class="lecture">심화 기출문제 분석 강의</strong>
                <em class="time">(15:00~19:00)</em>
              </div>
            </td>
            <td>
              <div class="box schSelf" @click="BbsNoticeClassroomView()">
                <div class="fBlue">[자습실]</div>
                <em class="time">(15:30~20:30)</em>
              </div>
            </td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
          </tr>
          <tr>
            <th>야간</th>
            <td>
              <div class="box schCancell" @click="BbsNoticeClassroomView()">
                <div class="fBlue">[일반(직강)] [휴강]</div>
                <span class="teacher">(교육학)윤중샘</span>
                <strong class="lecture">이론형성평가 마스터</strong>
                <em class="time">(19:00~21:00)</em>
              </div>
            </td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td class="today">
              <div class="box schNomal" @click="BbsNoticeClassroomView()">
                <div class="fBlue">[라이브]</div>
                <span class="teacher">(물리)이길동</span>
                <strong class="lecture">물리 적응반</strong>
                <em class="time">(11:00~20:00)</em>
              </div>
            </td>
            <td>
              <div class="box schAbsence" @click="BbsNoticeClassroomView()">
                <div class="fBlue">[라이브] [종강]</div>
                <span class="teacher">(수학)김수학</span>
                <strong class="lecture">수학 완전 정복</strong>
                <em class="time">(18:00~21:00)</em>
              </div>
            </td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td>
              <div class="box schSelf" @click="BbsNoticeClassroomView()">
                <div class="fBlue">[자습실]</div>
                <em class="time">(15:30~20:30)</em>
              </div>
            </td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
          </tr>
          <!---->
          <tr>
            <th rowspan="3" class="thRowsapn">402호</th>
            <th>오전</th>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td class="today"><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
          </tr>
          <tr>
            <th>오후</th>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td>
              <div class="box schSpecial" @click="BbsNoticeClassroomView()">
                <div class="fBlue">[일반(직강)] [특강]</div>
                <span class="teacher">(교육학)윤중샘</span>
                <strong class="lecture">이론형성평가 마스터</strong>
                <em class="time">(09:00~12:00)</em>
              </div>
            </td>
            <td class="today"><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
          </tr>
          <tr>
            <th>야간</th>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td class="today"><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
          </tr>
          <!---->
          <tr>
            <th rowspan="3" class="thRowsapn">403호</th>
            <th>오전</th>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td class="today"><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
          </tr>
          <tr>
            <th>오후</th>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td class="today"><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
          </tr>
          <tr>
            <th>야간</th>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td class="today"><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
            <td><div class="box add" @click="BbsNoticeClassroomWrite()"><span>추가</span></div></td>
          </tr>
          <!---->
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
      window.open('/mkup/windowPopup/BbsNoticeClassroom/write', '_blank', `width=1100,height=900`);
    },
    BbsNoticeClassroomView() {
      let routeData = this.$router.resolve({name: 'BbsNoticeClassroomView', query: {data: "someData"}});
      window.open('/mkup/windowPopup/BbsNoticeClassroom/view', '_blank', `width=1100,height=900`);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
