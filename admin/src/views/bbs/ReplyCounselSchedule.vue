<template lang="html">
  <div class="replyCounselSchedule">
    <div class="boardTop">
      <span class="calDate">
        <em class="year">2021</em>
        <button class="prevWeek">지난주</button>
        <span class="date">06-01 ~ 06-07</span>
        <button class="nextWeek">다음주</button>
      </span>
      <div class="right-po mt5"><button class="btnAdd" @click="BbsCounselScheduleWrite()">신규등록</button></div>
    </div>
    <!-- Calendar -->
    <div class="tcs">
      <table>
        <colgroup>
          <col width="7%"/>
          <col width="13.28%" span="7"/>
        </colgroup>
        <thead>
          <tr>
            <th>학원</th>
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
          <tr class="idea">
            <th>이데아</th>
            <td>
              <a class="box" @click="BbsCounselScheduleView()">
                이재원<br/>
                (09:00~18:00)
              </a>
            </td>
            <td></td>
            <td class="today">
              <a class="box" @click="BbsCounselScheduleView()">
                이재원 <span class="reserve">(1)</span><br/>
                (09:00~12:00)
              </a>
              <a class="box" @click="BbsCounselScheduleView()">
                홍길동<br/>
                (13:00~15:00)
              </a>
              <a class="box" @click="BbsCounselScheduleView()">
                고길동 <span class="reserve">(3)</span><br/>
                (15:00~18:00)
              </a>
            </td>
            <td></td>
            <td></td>
            <td>
              <a class="box" @click="BbsCounselScheduleView()">
                이재원<br/>
                (09:00~12:00)
              </a>
            </td>
            <td>
              <a class="box" @click="BbsCounselScheduleView()">
                이재원<br/>
                (09:00~12:00)
              </a>
            </td>
          </tr>
          <tr class="ivy">
            <th>아이비</th>
            <td></td>
            <td>
              <a class="box" @click="BbsCounselScheduleView()">
                장승아 <span class="reserve">(2)</span><br/>
                (11:00~17:00)
              </a>
            </td>
            <td class="today"></td>
            <td>
              <a class="box" @click="BbsCounselScheduleView()">
                장승아<br/>
                (09:00~11:00)<br/>
                (13:00~15:00)
              </a>
              <a class="box" @click="BbsCounselScheduleView()">
                오길동<br/>
                (11:00~12:00)<br/>
                (12:00~13:00)
              </a>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
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
  name: 'ReplyCounselSchedule',
  methods: {
    BbsCounselScheduleWrite() {
      let routeData = this.$router.resolve({name: 'BbsCounselScheduleWrite', query: {data: "someData"}});
      window.open('/mkup/windowPopup/bbsCounselSchedule/write', '_blank', `width=1100,height=900`);
    },
    BbsCounselScheduleView() {
      let routeData = this.$router.resolve({name: 'BbsCounselScheduleView', query: {data: "someData"}});
      window.open('/mkup/windowPopup/bbsCounselSchedule/view', '_blank', `width=1100,height=900`);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
