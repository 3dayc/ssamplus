<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="left">
        <div class="menuHelp">
          <ul>
            <li>ⓘ 연/월/일을 기준으로 탈퇴 회원을 집계합니다.</li>
            <li>ⓘ 검색 기준 연/월/일 대비 전년동기의 증감인원을 집계합니다.</li>
          </ul>
        </div>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="">2021년</option>
                  <option value="">2020년</option>
                  <option value="">2019년</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="selectMonthLeave" id="selectMonthLeave" @change="selectMonth();">
                  <option value="all">전체</option>
                  <option value="1">1월</option>
                  <option value="2">2월</option>
                  <option value="3">3월</option>
                  <option value="4">4월</option>
                  <option value="5">5월</option>
                  <option value="6">6월</option>
                  <option value="7">7월</option>
                  <option value="8">8월</option>
                  <option value="9">9월</option>
                  <option value="10">10월</option>
                  <option value="11">11월</option>
                  <option value="12">12월</option>
                </select>
              </span>
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
    <div class="tls" v-if="yearSort">
      <table class="wAuto">
        <colgroup>
          <col width="140"/>
          <col width="200"/>
          <col width="200"/>
          <col width="200"/>
          <!-- 열 추가시 col 하나씩 추가 -->
        </colgroup>
        <thead>
          <tr>
            <th>월</th>
            <th>기준연도</th>
            <th>전년동기</th>
            <th class="bgRed">증감</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1월</td>
            <td class="tR">100명</td>
            <td class="tR">120명</td>
            <td class="tR fRed">(20)</td>
          </tr>
          <tr>
            <td>2월</td>
            <td class="tR">120명</td>
            <td class="tR">100명</td>
            <td class="tR">20</td>
          </tr>
          <tr>
            <td>3월</td>
            <td class="tR">100명</td>
            <td class="tR">120명</td>
            <td class="tR fRed">(20)</td>
          </tr>
          <tr>
            <td>4월</td>
            <td class="tR">120명</td>
            <td class="tR">100명</td>
            <td class="tR">20</td>
          </tr>
          <tr>
            <td>5월</td>
            <td class="tR">100명</td>
            <td class="tR">120명</td>
            <td class="tR fRed">(20)</td>
          </tr>
          <tr>
            <td>6월</td>
            <td class="tR">120명</td>
            <td class="tR">100명</td>
            <td class="tR">20</td>
          </tr>
          <tr>
            <td>7월</td>
            <td class="tR">100명</td>
            <td class="tR">120명</td>
            <td class="tR fRed">(20)</td>
          </tr>
          <tr>
            <td>8월</td>
            <td class="tR">120명</td>
            <td class="tR">100명</td>
            <td class="tR">20</td>
          </tr>
          <tr>
            <td>9월</td>
            <td class="tR">100명</td>
            <td class="tR">120명</td>
            <td class="tR fRed">(20)</td>
          </tr>
          <tr>
            <td>10월</td>
            <td class="tR">120명</td>
            <td class="tR">100명</td>
            <td class="tR">20</td>
          </tr>
          <tr>
            <td>11월</td>
            <td class="tR">100명</td>
            <td class="tR">120명</td>
            <td class="tR fRed">(20)</td>
          </tr>
          <tr>
            <td>12월</td>
            <td class="tR">120명</td>
            <td class="tR">100명</td>
            <td class="tR">20</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td>합계</td>
            <td class="tR">1,320명</td>
            <td class="tR">1,320명</td>
            <td class="tR">0</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- //목록 -->
    <!-- 월 단위 목록 -->
    <div class="tls" v-if="monthSort">
      <table class="wAuto">
        <colgroup>
          <col width="140"/>
          <col width="200"/>
          <col width="200"/>
          <col width="200"/>
          <!-- 열 추가시 col 하나씩 추가 -->
        </colgroup>
        <thead>
          <tr>
            <th>{{monthSortVal}}월</th>
            <th>기준연도</th>
            <th>전년동기</th>
            <th class="bgRed">증감</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1일</td>
            <td class="tR">100명</td>
            <td class="tR">120명</td>
            <td class="tR fRed">(20)</td>
          </tr>
          <tr>
            <td>2일</td>
            <td class="tR">120명</td>
            <td class="tR">100명</td>
            <td class="tR">20</td>
          </tr>
          <tr>
            <td>3일</td>
            <td class="tR">100명</td>
            <td class="tR">120명</td>
            <td class="tR fRed">(20)</td>
          </tr>
          <tr>
            <td>4일</td>
            <td class="tR">120명</td>
            <td class="tR">100명</td>
            <td class="tR">20</td>
          </tr>
          <tr>
            <td>5일</td>
            <td class="tR">100명</td>
            <td class="tR">120명</td>
            <td class="tR fRed">(20)</td>
          </tr>
          <tr>
            <td>6일</td>
            <td class="tR">120명</td>
            <td class="tR">100명</td>
            <td class="tR">20</td>
          </tr>
          <tr>
            <td>7일</td>
            <td class="tR">100명</td>
            <td class="tR">120명</td>
            <td class="tR fRed">(20)</td>
          </tr>
          <tr>
            <td>8일</td>
            <td class="tR">120명</td>
            <td class="tR">100명</td>
            <td class="tR">20</td>
          </tr>
          <tr>
            <td>9일</td>
            <td class="tR">100명</td>
            <td class="tR">120명</td>
            <td class="tR fRed">(20)</td>
          </tr>
          <tr>
            <td>10일</td>
            <td class="tR">120명</td>
            <td class="tR">100명</td>
            <td class="tR">20</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td>합계</td>
            <td class="tR">1,320명</td>
            <td class="tR">1,320명</td>
            <td class="tR">0</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- //월 단위 목록 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'UserSignupLeave',
  data() {
    return {
      yearSort: true,
      monthSort: false,
      monthSortVal: '',
    }
  },
  methods: {
    selectMonth() {
      var monthVal = document.getElementById("selectMonthLeave").options[document.getElementById("selectMonthLeave").selectedIndex].value;
      if(monthVal == "all") {
        this.yearSort = true;
        this.monthSort = false;
      } else {
        this.monthSort = true;
        this.yearSort = false;
        this.monthSortVal = monthVal;
      }
    },
  },
  components: {
  },
}
</script>
