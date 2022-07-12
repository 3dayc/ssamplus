<template lang="html">
  <div>
    <div class="pageTit">
      <h2>오프라인 상담 통계</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/counselCall">상담센터 통계</router-link><em>오프라인 상담 통계</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="counselOffline"><!-- class 없어도 유지 -->
        <!-- 검색 -->
        <div class="boardTop">
          <div class="listSearch left">
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
                  <button class="btnSearch">검색</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- //검색 -->
        <!-- 월별 1:1 학원상담 신청건수 -->
        <div class="subTit"><h3>월별 1:1 학원상담 신청건수</h3></div>
        <div class="tls">
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th>1월</th>
                <th>2월</th>
                <th>3월</th>
                <th>4월</th>
                <th>5월</th>
                <th>6월</th>
                <th>7월</th>
                <th>8월</th>
                <th>9월</th>
                <th>10월</th>
                <th>11월</th>
                <th>12월</th>
                <th>합계</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td class="bgRed fRed">합계</td>
                <td class="bgRed fRed">92</td>
                <td class="bgRed fRed">106</td>
                <td class="bgRed fRed">218</td>
                <td class="bgRed fRed">53</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">185</td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>서울 이데아관</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>4</td>
              </tr>
              <tr>
                <td>서울 아이비관</td>
                <td>3</td>
                <td>1</td>
                <td>7</td>
                <td>1</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>12</td>
              </tr>
              <tr>
                <td>대구 에비뉴관</td>
                <td>5</td>
                <td>7</td>
                <td>6</td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>18</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //월별 1:1 학원상담 신청건수 -->
        <!-- 월별 1:1 선생님 상담 신청건수 -->
        <div class="subTit"><h3>월별 1:1 선생님 상담 신청건수</h3></div>
        <div class="tls">
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th>1월</th>
                <th>2월</th>
                <th>3월</th>
                <th>4월</th>
                <th>5월</th>
                <th>6월</th>
                <th>7월</th>
                <th>8월</th>
                <th>9월</th>
                <th>10월</th>
                <th>11월</th>
                <th>12월</th>
                <th>합계</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td class="bgRed fRed">합계</td>
                <td class="bgRed fRed">92</td>
                <td class="bgRed fRed">106</td>
                <td class="bgRed fRed">218</td>
                <td class="bgRed fRed">53</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">0</td>
                <td class="bgRed fRed">185</td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>서민정</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>4</td>
              </tr>
              <tr>
                <td>정희원</td>
                <td>3</td>
                <td>1</td>
                <td>7</td>
                <td>1</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>12</td>
              </tr>
              <tr>
                <td>박서형</td>
                <td>5</td>
                <td>7</td>
                <td>6</td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>18</td>
              </tr>
              <tr>
                <td>김지민</td>
                <td>5</td>
                <td>7</td>
                <td>6</td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>18</td>
              </tr>
              <tr>
                <td>한지우</td>
                <td>5</td>
                <td>7</td>
                <td>6</td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>18</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //월별 1:1 선생님 상담 신청건수 -->
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
  name: 'counselOffline',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
