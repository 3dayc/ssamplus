<template lang="html">
  <div>
		<div class="pageTit">
			<h2>오늘의 업데이트</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><em>오늘의 업데이트</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="todayUpdate">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div>
                <span class="monthCheckSet mr10"><!-- 2021-07-14 클래스 추가 -->
                  <span>
                    <input type="radio" name="day" id="dayPrev" />
                    <label for="dayPrev">전 날</label>
                  </span>
                </span>
              </div>
              <div class="bdLine">
                <span class="lsItem lineNone">
                  <strong class="title">조회</strong><!-- 2021-08-02 캘린더 사용 컴포넌트 앞에 타이틀 추가 -->
                  <VCalendar class="calSet weekday" v-model="date" color="green" :masks="masks"><!-- 2022-02-24 수정 -->
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                    </template>
                  </VCalendar>
                </span>
                <span class="lsItem">
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div>
                <span class="monthCheckSet ml10">
                  <span>
                    <input type="radio" name="day" id="dayNext" />
                    <label for="dayNext">다음 날</label>
                  </span>
                  <span>
                    <input type="radio" name="day" id="today" />
                    <label for="today">오늘</label>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="60"/>
              <col width="100"/>
              <col width="340"/>
              <col width="80"/>
              <col width="80"/>
              <col width="80"/>
            </colgroup>
            <thead>
              <tr>
                <th scope="col">업데이트 여부</th>
                <th scope="col">SMS 발송</th>
                <th scope="col">강좌명</th>
                <th scope="col">강좌 관리</th>
                <th scope="col">동영상 강의실</th>
                <th scope="col">직강일</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td>-</td>
                <td><button class="btnS line" @click="alertTrigger = true">수강생 SMS 발송</button></td>
                <td class="tL"><router-link to="/mkup/lecture/singleCourse/offline">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</router-link></td>
                <td><router-link to="/mkup/lecture/singleCourse/offline" class="btnS line">바로가기</router-link></td>
                <td><button class="btnPlayer">영상 미리보기</button></td>
                <td><button class="btnS line" @click="LectureUpdateMgt()">직강일 관리</button></td>
              </tr>
              <!--//Loop-->
              <tr>
                <td>-</td>
                <td><button class="btnS line" @click="alertTrigger = true">수강생 SMS 발송</button></td>
                <td class="tL"><router-link to="/mkup/lecture/singleCourse/offline">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</router-link></td>
                <td><router-link to="/mkup/lecture/singleCourse/offline" class="btnS line">바로가기</router-link></td>
                <td><button class="btnPlayer">영상 미리보기</button></td>
                <td><button class="btnS line" @click="LectureUpdateMgt()">직강일 관리</button></td>
              </tr>
              <tr class="expiry"><!--20210715 class 변경-->
                <td>완료</td>
                <td><button class="btnS line" @click="alertTrigger = true">수강생 SMS 발송</button></td>
                <td class="tL"><router-link to="/mkup/lecture/singleCourse/offline">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</router-link></td>
                <td><router-link to="/mkup/lecture/singleCourse/offline" class="btnS line">바로가기</router-link></td>
                <td><button class="btnPlayer">영상 미리보기</button></td>
                <td><button class="btnS line" @click="LectureUpdateMgt()">직강일 관리</button></td>
              </tr>
              <tr class="expiry"><!--20210715 class 변경-->
                <td>완료</td>
                <td><button class="btnS line" @click="alertTrigger = true">수강생 SMS 발송</button></td>
                <td class="tL"><router-link to="/mkup/lecture/singleCourse/offline">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</router-link></td>
                <td><router-link to="/mkup/lecture/singleCourse/offline" class="btnS line">바로가기</router-link></td>
                <td><button class="btnPlayer">영상 미리보기</button></td>
                <td><button class="btnS line" @click="LectureUpdateMgt()">직강일 관리</button></td>
              </tr>
              <tr class="expiry"><!--20210715 class 변경-->
                <td>완료</td>
                <td><button class="btnS line" @click="alertTrigger = true">수강생 SMS 발송</button></td>
                <td class="tL"><router-link to="/mkup/lecture/singleCourse/live">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</router-link></td>
                <td><router-link to="/mkup/lecture/singleCourse/live" class="btnS line">바로가기</router-link></td>
                <td><button class="btnPlayer">영상 미리보기</button></td>
                <td><button class="btnS line" @click="LectureUpdateMgt()">직강일 관리</button></td>
              </tr>
              <tr class="expiry"><!--20210715 class 변경-->
                <td>완료</td>
                <td><button class="btnS line" @click="alertTrigger = true">수강생 SMS 발송</button></td>
                <td class="tL"><router-link to="/mkup/lecture/singleCourse/live">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</router-link></td>
                <td><router-link to="/mkup/lecture/singleCourse/live" class="btnS line">바로가기</router-link></td>
                <td><button class="btnPlayer">영상 미리보기</button></td>
                <td><button class="btnS line" @click="LectureUpdateMgt()">직강일 관리</button></td>
              </tr>
              <tr class="expiry"><!--20210715 class 변경-->
                <td>완료</td>
                <td><button class="btnS line" @click="alertTrigger = true">수강생 SMS 발송</button></td>
                <td class="tL"><router-link to="/mkup/lecture/singleCourse/live">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</router-link></td>
                <td><router-link to="/mkup/lecture/singleCourse/live" class="btnS line">바로가기</router-link></td>
                <td><button class="btnPlayer">영상 미리보기</button></td>
                <td><button class="btnS line" @click="LectureUpdateMgt()">직강일 관리</button></td>
              </tr>
              <tr class="expiry"><!--20210715 class 변경-->
                <td>완료</td>
                <td><button class="btnS line" @click="alertTrigger = true">수강생 SMS 발송</button></td>
                <td class="tL"><router-link to="/mkup/lecture/singleCourse/live">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</router-link></td>
                <td><router-link to="/mkup/lecture/singleCourse/live" class="btnS line">바로가기</router-link></td>
                <td><button class="btnPlayer">영상 미리보기</button></td>
                <td><button class="btnS line" @click="LectureUpdateMgt()">직강일 관리</button></td>
              </tr>
              <tr class="expiry"><!--20210715 class 변경-->
                <td>완료</td>
                <td><button class="btnS line" @click="alertTrigger = true">수강생 SMS 발송</button></td>
                <td class="tL"><router-link to="/mkup/lecture/singleCourse/live">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</router-link></td>
                <td><router-link to="/mkup/lecture/singleCourse/live" class="btnS line">바로가기</router-link></td>
                <td><button class="btnPlayer">영상 미리보기</button></td>
                <td><button class="btnS line" @click="LectureUpdateMgt()">직강일 관리</button></td>
              </tr>
              <tr class="expiry"><!--20210715 class 변경-->
                <td>완료</td>
                <td><button class="btnS line" @click="alertTrigger = true">수강생 SMS 발송</button></td>
                <td class="tL"><router-link to="/mkup/lecture/singleCourse/live">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</router-link></td>
                <td><router-link to="/mkup/lecture/singleCourse/live" class="btnS line">바로가기</router-link></td>
                <td><button class="btnPlayer">영상 미리보기</button></td>
                <td><button class="btnS line" @click="LectureUpdateMgt()">직강일 관리</button></td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <!-- //테이블 목록 -->
        <Paginate />
      </div>
    </article>
    </div>

    <!-- Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
				수강중인 회원에게 강좌 업데이트 알림 SMS를 발송 하시겠습니까?<br/><br/>SMS 발송 후 업데이트 일정 등에 변동이 생겼을 경우, 강좌 관리자에게 반드시 알려주시기 바랍니다.
      </template>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger = false">취소</button>
        <button class="btnM green" @click="alertTrigger = false">발송</button>
      </template>
    </Alert>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'TodayUpdate',
  data() {
    return {
      date: '2021-04-01(일)',
      alertTrigger: false,
      masks: {
        input: 'YYYY.MM.DD (W)',
      },
    }
  },
  methods: {
    LectureUpdateMgt() {
      let routeData = this.$router.resolve({name: 'LectureUpdateMgt', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceUpdateMgt', '_blank', `width=570,height=780`);
    },
  },
  components: {
  }
}
</script>
