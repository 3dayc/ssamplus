<template lang="html">
  <div>
    <div class="pageTit">
      <h2>방문 통계</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/visitSite">사이트 통계</router-link><em>방문 통계</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="visitSite"><!-- class 없어도 유지 -->
        <!-- 검색 -->
        <div class="boardTop">
          <div class="left">
            <div class="menuHelp">
              <ul>
                <li>ⓘ 광고 플랫폼을 통한 유입 및 가입인원을 집계합니다.</li>
                <li>ⓘ 기존 ‘방문통계’, ‘다음통계‘ 메뉴를 한 곳에서 확인 가능합니다.</li>
              </ul>
            </div>
          </div>
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem lineNone">
                  <strong class="title">방문일자</strong><!-- 2021-08-02 캘린더 사용 컴포넌트 앞에 타이틀 추가 -->
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
        <div class="tls wHalf m0auto">
          <table>
            <colgroup>
              <col width="150"/>
              <col width="250"/>
              <col width="250"/>
              <col width="250"/>
            </colgroup>
            <thead>
              <tr>
                <th colspan="2"></th>
                <th>유입건수</th>
                <th>가입건수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="2">검색(포털)</th>
                <td>100</td>
                <td>50</td>
              </tr>
              <tr>
                <th rowspan="3">카페</th>
                <th>초등 대표 카페</th>
                <td>100</td>
                <td>50</td>
              </tr>
              <tr>
                <th>특수 대표 카페</th>
                <td>100</td>
                <td>50</td>
              </tr>
              <tr>
                <th>한마음 카페</th>
                <td>100</td>
                <td>50</td>
              </tr>
              <tr>
                <th rowspan="4">SNS</th>
                <th>유튜브</th>
                <td>100</td>
                <td>50</td>
              </tr>
              <tr>
                <th>인스타그램</th>
                <td>100</td>
                <td>50</td>
              </tr>
              <tr>
                <th>페이스북</th>
                <td>100</td>
                <td>50</td>
              </tr>
              <tr>
                <th>블로그</th>
                <td>100</td>
                <td>50</td>
              </tr>
              <tr>
                <th rowspan="2">광고</th>
                <th></th>
                <td>100</td>
                <td>50</td>
              </tr>
              <tr>
                <th></th>
                <td>100</td>
                <td>50</td>
              </tr>
              <tr>
                <th colspan="2">합계</th>
                <td>1,000</td>
                <td>500</td>
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
