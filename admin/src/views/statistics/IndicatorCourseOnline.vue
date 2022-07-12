<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="left">
        <div class="menuHelp">
          <ul>
            <li>ⓘ 사이트별 수강중인 인원을 집계합니다.</li>
            <li>Ⓘ 선생님을 기준으로 인원을 집계합니다.</li>
            <li>ⓘ 연도별 현황>수강중인 인원의 상세 버전입니다.</li>
          </ul>
        </div>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="">전체</option>
                  <option value="">유료(10만원 이상)</option>
                  <option value="">유료</option>
                </select>
              </span>
            </span>
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
    <div class="tls tls2">
      <table class="wAuto">
        <colgroup>
          <col width="160">
          <col width="160">
          <col width="160">
          <col width="160">
          <col width="160">
          <col width="160">
        </colgroup>
        <thead class="duble">
          <tr>
            <th rowspan="2">과목</th>
            <th rowspan="2">선생님</th>
            <th colspan="4">온라인</th>
          </tr>
          <tr>
            <th>2021년</th>
            <th>2020년</th>
            <th>증감</th>
            <th>전년대비(%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>교육학</td>
            <td>김현</td>
            <td>12</td>
            <td>4</td>
            <td class="bgRed">48</td>
            <td class="bgRed">300%</td>
          </tr>
          <tr>
            <td>교육학</td>
            <td>권구현</td>
            <td>4</td>
            <td>12</td>
            <td class="bgRed fRed">(48)</td>
            <td class="bgRed fRed">33%</td>
          </tr>
          <tr>
            <td>교육학</td>
            <td>윤중샘</td>
            <td>60</td>
            <td>30</td>
            <td class="bgRed">30</td>
            <td class="bgRed">200%</td>
          </tr>
          <tr>
            <td>유아</td>
            <td>배지윤</td>
            <td>12</td>
            <td>12</td>
            <td class="bgRed">0</td>
            <td class="bgRed">100%</td>
          </tr>
          <tr>
            <td>유아</td>
            <td>유아콜라보</td>
            <td>12</td>
            <td>4</td>
            <td class="bgRed">48</td>
            <td class="bgRed">300%</td>
          </tr>
          <tr>
            <td>유아</td>
            <td>양재웅</td>
            <td>4</td>
            <td>12</td>
            <td class="bgRed fRed">(48)</td>
            <td class="bgRed fRed">33%</td>
          </tr>
          <tr>
            <td>국어</td>
            <td>박노송</td>
            <td>60</td>
            <td>30</td>
            <td class="bgRed">30</td>
            <td class="bgRed">200%</td>
          </tr>
          <tr>
            <td>국어</td>
            <td>송헌</td>
            <td>12</td>
            <td>12</td>
            <td class="bgRed">0</td>
            <td class="bgRed">100%</td>
          </tr>
          <tr>
            <td>국어</td>
            <td>송헌/김준팀</td>
            <td>12</td>
            <td>4</td>
            <td class="bgRed">48</td>
            <td class="bgRed">300%</td>
          </tr>
          <tr>
            <td>영어</td>
            <td>류지원</td>
            <td>4</td>
            <td>12</td>
            <td class="bgRed fRed">(48)</td>
            <td class="bgRed fRed">33%</td>
          </tr>
          <tr>
            <td>영어</td>
            <td>미쉘김</td>
            <td>60</td>
            <td>30</td>
            <td class="bgRed">30</td>
            <td class="bgRed">200%</td>
          </tr>
          <tr>
            <td>영어</td>
            <td>차류쉘팀</td>
            <td>12</td>
            <td>12</td>
            <td class="bgRed">0</td>
            <td class="bgRed">100%</td>
          </tr>
          <tr>
            <td>영어</td>
            <td>차미아</td>
            <td>12</td>
            <td>4</td>
            <td class="bgRed">48</td>
            <td class="bgRed">300%</td>
          </tr>
          <tr>
            <td>가정</td>
            <td>문영은</td>
            <td>4</td>
            <td>12</td>
            <td class="bgRed fRed">(48)</td>
            <td class="bgRed fRed">33%</td>
          </tr>
          <tr>
            <td>음악</td>
            <td>박서형</td>
            <td>60</td>
            <td>30</td>
            <td class="bgRed">30</td>
            <td class="bgRed">200%</td>
          </tr>
          <tr>
            <td>음악</td>
            <td>서민정</td>
            <td>12</td>
            <td>12</td>
            <td class="bgRed">0</td>
            <td class="bgRed">100%</td>
          </tr>
          <tr>
            <td>음악</td>
            <td>서정팀</td>
            <td>12</td>
            <td>4</td>
            <td class="bgRed">48</td>
            <td class="bgRed">300%</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td colspan="2">총 합계</td>
            <td>364</td>
            <td>236</td>
            <td>30</td>
            <td>154%</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IndicatorCourseOnline',
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
