<template lang="html">
  <div>
		<div class="pageTit">
			<h2>라이브 채널 강좌</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link><router-link to="/mkup/lecture/liveCourse">라이브 채널 관리</router-link><em>상세</em></span><!-- 2021-07-14 오타 수정 -->
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="liveCourseView">
        <!-- 라이브 채널 정보 -->
        <div class="subTit cpRight mb10">
          <h3>라이브 채널 정보</h3>
          <span class="right">
            <em>장영희 / 전공중국어 – 80점 도약모의고사반</em> 강좌입니다.<!-- 2021-07-14 수정-->
            <router-link to="/mkup/lecture/liveCourse" class="btnList ml10 mr10">목록으로</router-link>
            <button class="btnM green mr10">저장</button>
            <router-link to="/mkup/lecture/liveCourse" class="btnM gray">삭제</router-link>
          </span>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="200"/>
              <col width="80"/>
              <col width="200"/>
              <col width="80"/>
              <col width="200"/>
            </colgroup>
            <tbody>
              <tr>
                <th>채널 / 호실</th>
                <td>
                  <span class="selectSet mr10">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                      <option value="">1번</option>
                      <option value="">2번</option>
                      <option value="">3번</option>
                      <option value="">4번</option>
                      <option value="">5번</option>
                      <option value="">6번</option>
                      <option value="">7번</option>
                      <option value="">8번</option>
                      <option value="">9번</option>
                      <option value="">10번</option>
                      <option value="">11번</option>
                      <option value="" selected>12번</option>
                    </select>
                  </span>
                  <span class="unit small">
                    <input type="number" value="1101"/>
                    <em>호</em>
                  </span>
                </td>
                <th>시작일 / 종료일</th>
                <td>
                  <VCalendar class="calSet mr5" v-model="date01" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly/>
                    </template>
                  </VCalendar>
                  <VCalendar class="calSet" v-model="date02" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly/>
                    </template>
                  </VCalendar>
                </td>
                <th>요일</th>
                <td>월, 수, 금</td>
              </tr>
              <tr>
                <th>열림</th>
                <td><input type="text" value="10:50" class="w100 tC"/></td>
                <th>시작 - 종료</th>
                <td>
                  <span class="rangeInput">
                    <input type="text" value="11:00"/><em>~</em><input type="text" value="14:00"/>
                  </span>
                </td>
                <th>닫힘</th>
                <td><input type="text" value="14:30" class="w100 tC"/></td>
              </tr>
              <tr>
                <th>출석</th>
                <td colspan="5"><button class="btnS line">출석</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //라이브 채널 정보 -->
        <!-- 라이브 채팅 -->
        <div class="subTit">
          <h3>라이브 채팅</h3>
        </div>
        <div class="tls wHalf">
          <table>
            <colgroup>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead>
              <tr>
                <th>사용여부</th>
                <th>날짜</th>
                <th>채팅 보기</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle1" checked>
                    <label for="toggle1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2021-01-16</td>
                <td><button class="btnS line">채팅 보기</button></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle2">
                    <label for="toggle2">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2021-01-09</td>
                <td><button class="btnS line">채팅 보기</button></td>
              </tr>
              <tr>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle3" checked>
                    <label for="toggle3">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>2021-01-02</td>
                <td><button class="btnS line" @click="">채팅 보기</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //라이브 채팅 -->
        <!-- 관리 -->
        <div class="subTit">
          <h3>관리</h3>
        </div>
        <div class="tvs record">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>수정 이력</th>
                <td>
                  <ul class="recordList">
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 수정</li>
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 등록</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //관리 -->
      </div>
    </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LiveCourseView',
  data() {
    return {
      date01: '2021-01-01',
      date02: '2021-01-01',
    }
  },
  methods: {
    
  },
  components: {
  }
}
</script>
