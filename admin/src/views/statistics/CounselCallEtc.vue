<template lang="html">
  <div>
    <div class="pageTit">
      <h2>기타</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/counselCall">상담센터 통계</router-link><router-link to="/mkup/statistics/counselCall">전화상담 통계</router-link><em>기타</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="counselCallEtc"><!-- class 없어도 유지 -->
        <!-- 검색 -->
        <div class="boardTop">
          <div class="left">
            <div class="menuHelp">
              <ul>
                <li>ⓘ 전화상담 대분류별로 상담 건수를 집계합니다.</li>
                <li>Ⓘ 연/월별 전화상담 비중과 월별 상담건수를 집계합니다.</li>
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
                    <select name="" id="">
                      <option value="">전체</option>
                      <option value="">1월</option>
                      <option value="">2월</option>
                      <option value="">3월</option>
                      <option value="">4월</option>
                      <option value="">5월</option>
                      <option value="">6월</option>
                      <option value="">7월</option>
                      <option value="">8월</option>
                      <option value="">9월</option>
                      <option value="">10월</option>
                      <option value="">11월</option>
                      <option value="">12월</option>
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
        <!-- 월별 전화상담 건수 -->
        <div class="subTit"><h3><em class="fBlue">2021년</em> 월별 전화상담 건수</h3></div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="120"/>
              <col width="60"/>
              <col width="60"/>
              <col width="60"/>
              <col width="60"/>
              <col width="60"/>
              <col width="60"/>
              <col width="60"/>
              <col width="60"/>
              <col width="60"/>
              <col width="60"/>
              <col width="60"/>
              <col width="60"/>
              <col width="60"/>
            </colgroup>
            <thead>
              <tr>
                <th><em class="fPink">중분류</em></th>
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
            <tbody>
              <tr>
                <td>기타</td>
                <td>2건</td>
                <td>1건</td>
                <td>1건</td>
                <td>0건</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>4건</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack fBig">
                <td>합계</td>
                <td>2건</td>
                <td>1건</td>
                <td>1건</td>
                <td>0건</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>185건</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <!-- //월별 전화상담 건수 -->
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
  name: 'counselCallEtc',
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
