<template lang="html">
  <div>
		<div class="pageTit">
			<h2>사용자 정의강좌</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link><router-link to="/mkup/lecture/customCourse">사용자 정의강좌</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="customCourseView">
        <!-- 강의 기본정보 -->
        <div class="subTit">
          <h3>강의 기본정보</h3>
          <span class="right">
            <router-link to="/mkup/lecture/customCourse" class="btnList mr10">목록으로</router-link>
            <button class="btnM green mr10">저장</button>
            <router-link to="/mkup/lecture/customCourse" class="btnM line">삭제</router-link>
          </span>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="40%"/>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>사용여부</th>
                <td>
                  <span class="labelToggleSet tLength3">
                    <input type="checkbox" id="toggle">
                    <label for="toggle">
                      <span>미사용</span>
                      <span>사용</span>
                    </label>
                  </span>
                </td>
                <th>유효기간 <sup>필수</sup></th>
                <td>
                  <span class="calDupSet">
                    <VCalendar class="calSet" v-model="date01" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                    <em>~</em>
                    <VCalendar class="calSet" v-model="date02" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                  </span>
                </td>
              </tr>
              <tr>
                <th>제목 <sup>필수</sup></th>
                <td colspan="3"><input type="text" class="wHalf" value="하반기 합격전략 설명회 (샘플강의 묶음)"/></td>
              </tr>
              <tr>
                <th>비고</th>
                <td colspan="3"><input type="text"/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //강의 기본정보 -->
        <!-- 포함강좌 -->
        <div class="subTit">
          <h3>포함강좌</h3>
          <button class="btnS line ml10" @click="LectureSearchCustomCourse()">강좌검색</button>
        </div>
        <!-- 1안 – 적용 희망 1순위 -->
        <div class="tls w80p mt10">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="100"/>
              <col width="120"/>
              <col width="120"/>
              <col width="*"/>
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>직/인강</th>
                <th>강좌번호</th>
                <th>선생님</th>
                <th>강좌명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>=</td>
                <td>직강</td>
                <td>12345</td>
                <td>장영희</td>
                <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
              </tr>
              <tr>
                <td>=</td>
                <td>인강</td>
                <td>12345</td>
                <td>장영희</td>
                <td class="tL">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
              </tr>
              <tr>
                <td>=</td>
                <td>직강</td>
                <td>12345</td>
                <td>장영희</td>
                <td class="tL">[21.1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
              </tr>
              <tr>
                <td>=</td>
                <td>인강</td>
                <td>12345</td>
                <td>장영희</td>
                <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
              </tr>
              <tr>
                <td>=</td>
                <td>직강</td>
                <td>12345</td>
                <td>장영희</td>
                <td class="tL">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //1안 – 적용 희망 1순위 -->
        <!-- //포함강좌 -->
      </div>
    </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'CustomCourseView',
  data() {
    return {
      date01: '2021-01-01',
      date02: '2021-12-31',
    }
  },
  methods: {
    LectureSearchCustomCourse() {
      let routeData = this.$router.resolve({name: 'LectureSearchCustomCourse', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceSearchCustomCourse', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  }
}
</script>
