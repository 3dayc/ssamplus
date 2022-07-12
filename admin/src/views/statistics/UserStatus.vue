<template lang="html">
  <div>
    <div class="pageTit">
      <h2>재학생 현황</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/userSignup">회원 통계</router-link><em>재학생 현황</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="userState"><!-- class 없어도 유지 -->
        <div class="menuHelp mb20">
          <ul>
            <li>ⓘ 가입기간을 기준으로 대학/대학원 재학중인 회원과 졸업한 회원을 집계합니다. </li>
            <li>ⓘ 대학/대학원 재학생의 현재까지 누적 결제금액을 범위에 따라 구분하여 집계합니다.</li>
            <li>ⓘ 구분 ‘기타’는 가입시 재학 정보를 선택 안 한 회원을 표기합니다.</li>
          </ul>
        </div>
        <!-- 검색 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem lineNone">
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
        <!-- 목록 -->
        <div class="subTit">
          <h3>재학 현황 통계</h3>
        </div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="120"/>
              <col width="120"/>
              <col width="120"/>
              <col width="120"/>
              <col width="120"/>
              <col width="120"/>
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th class="bgRed">대학 재학중</th>
                <th>대학 졸업</th>
                <th class="bgRed">대학원 재학중</th>
                <th>대학원 졸업</th>
                <th>기타</th>
                <th class="emphasisBlack start">합계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>남자</td>
                <td class="tR">100명</td>
                <td class="tR">100명</td>
                <td class="tR">100명</td>
                <td class="tR">100명</td>
                <td class="tR">100명</td>
                <td class="tR emphasisBlack">500명</td>
              </tr>
              <tr>
                <td>여자</td>
                <td class="tR">150명</td>
                <td class="tR">150명</td>
                <td class="tR">150명</td>
                <td class="tR">150명</td>
                <td class="tR">150명</td>
                <td class="tR emphasisBlack">750명</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack fBig">
                <td>합계</td>
                <td class="tR">250명</td>
                <td class="tR">250명</td>
                <td class="tR">250명</td>
                <td class="tR">250명</td>
                <td class="tR">250명</td>
                <td class="tR emphasisBlack end">1,250명</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="subTit">
          <h3>강의 결제 현황</h3>
        </div>
        <div class="tls wHalf">
          <table>
            <colgroup>
              <col width="120"/>
              <col width="120"/>
              <col width="120"/>
              <col width="120"/>
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th class="bgRed">대학 재학중</th>
                <th class="bgRed">대학원 재학중</th>
                <th class="emphasisBlack start">합계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>누적 결제인원<br/>(10만원 이상)</td>
                <td class="tR">100명</td>
                <td class="tR">100명</td>
                <td class="tR emphasisBlack">200명</td>
              </tr>
              <tr>
                <td>누적 결제인원<br/>(전체)</td>
                <td class="tR">200명</td>
                <td class="tR">200명</td>
                <td class="tR emphasisBlack">400명</td>
              </tr>
              <tr>
                <td>누적 미결제인원</td>
                <td class="tR">50명</td>
                <td class="tR">50명</td>
                <td class="tR emphasisBlack end">100명</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //목록 -->
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
  name: 'VisitSite',
  data() {
    return {
      range: {
				start: new Date(),
				end: new Date(),
			},
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
