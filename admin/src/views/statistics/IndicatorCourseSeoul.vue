<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="left">
        <div class="menuHelp">
          <ul>
            <li>ⓘ 사이트별 수강중인 인원을 집계합니다.</li>
            <li>Ⓘ 선생님별 진행 강좌를 기준으로 인원을 집계합니다.</li>
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
      <table>
        <colgroup>
          <col width="60"/>
          <col width="60"/>
          <col width="200"/>
          <col width="60"/>
          <col width="60"/>
          <col width="200"/>
          <col width="60"/>
          <col width="60"/>
          <col width="60"/>
          <col width="80"/>
        </colgroup>
        <thead class="duble">
          <tr>
            <th colspan="2" class="borderRight2Black">학원(서울)</th>
            <th colspan="3" class="borderRight2Black">2021년</th>
            <th colspan="3" class="borderRight2Black">2020년</th>
            <th colspan="2">합계</th>
          </tr>
          <tr>
            <th>과목</th>
            <th class="borderRight2Black">선생님</th>
            <th>강좌</th>
            <th>인원</th>
            <th class="borderRight2Black">합계</th>
            <th>강좌</th>
            <th>인원</th>
            <th class="borderRight2Black">합계</th>
            <th>증감</th>
            <th>전년대비(%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="10">교육학</td>
            <td rowspan="5" class="borderRight2Black">권구현</td>
            <td class="tL">(H210500001Z) 핵심 플랫폼반(h)</td>
            <td>12</td>
            <td rowspan="5" class="borderRight2Black">60</td>
            <td class="tL">(H210500001Z) 핵심 플랫폼반(심화)(h)</td>
            <td>4</td>
            <td rowspan="5" class="borderRight2Black">12</td>
            <td rowspan="5" class="bgRed">48</td>
            <td rowspan="5" class="bgRed">500%</td>
          </tr>
          <tr>
            <td class="tL">(H210500001Z) 키맥락 특강2(h)</td>
            <td>12</td>
            <td class="tL">(H210500001Z) 연간 쌤팩(h)</td>
            <td>4</td>
          </tr>
          <tr>
            <td class="tL">(H210500001Z) 답안 작성 연습 관리반(h)</td>
            <td>12</td>
            <td class="tL">(H210500001Z) 3~11월 쌤팩(h)</td>
            <td>4</td>
          </tr>
          <tr>
            <td class="tL">(H210500001Z) 연간쌤팩(h)</td>
            <td>12</td>
            <td class="tL bgGray"></td>
            <td class="bgGray"></td>
          </tr>
          <tr>
            <td class="tL">(H210500001Z) 3~11월 쌤팩(h)</td>
            <td>12</td>
            <td class="tL bgGray"></td>
            <td class="bgGray"></td>
          </tr>
          <tr>
            <td rowspan="5" class="borderRight2Black">김현</td>
            <td class="tL">(H210500001Z) 핵심 플랫폼반(h)</td>
            <td>12</td>
            <td rowspan="5" class="borderRight2Black">12</td>
            <td class="tL">(H210500001Z) 핵심 플랫폼반(심화)(h)</td>
            <td>4</td>
            <td rowspan="5" class="borderRight2Black">60</td>
            <td rowspan="5" class="bgRed fRed">(48)</td>
            <td rowspan="5" class="bgRed fRed">20%</td>
          </tr>
          <tr>
            <td class="tL">(H210500001Z) 키맥락 특강2(h)</td>
            <td>12</td>
            <td class="tL">(H210500001Z) 연간 쌤팩(h)</td>
            <td>4</td>
          </tr>
          <tr>
            <td class="tL">(H210500001Z) 답안 작성 연습 관리반(h)</td>
            <td>12</td>
            <td class="tL">(H210500001Z) 3~11월 쌤팩(h)</td>
            <td>4</td>
          </tr>
          <tr>
            <td class="tL bgGray"></td>
            <td class="bgGray"></td>
            <td class="tL">(H210500001Z) 연간쌤팩(h)</td>
            <td>12</td>
          </tr>
          <tr>
            <td class="tL bgGray"></td>
            <td class="bgGray"></td>
            <td class="tL">(H210500001Z) 3~11월 쌤팩(h)</td>
            <td>12</td>
          </tr>
          <tr>
            <td rowspan="7">유아</td>
            <td rowspan="5" class="borderRight2Black">배지윤</td>
            <td class="tL">(H210500001Z) 핵심 플랫폼반(h)</td>
            <td>12</td>
            <td rowspan="5" class="borderRight2Black">60</td>
            <td class="tL">(H210500001Z) 핵심 플랫폼반(심화)(h)</td>
            <td>4</td>
            <td rowspan="5" class="borderRight2Black">30</td>
            <td rowspan="5" class="bgRed">30</td>
            <td rowspan="5" class="bgRed">200%</td>
          </tr>
          <tr>
            <td class="tL">(H210500001Z) 키맥락 특강2(h)</td>
            <td>12</td>
            <td class="tL">(H210500001Z) 연간 쌤팩(h)</td>
            <td>4</td>
          </tr>
          <tr>
            <td class="tL">(H210500001Z) 답안 작성 연습 관리반(h)</td>
            <td>12</td>
            <td class="tL">(H210500001Z) 3~11월 쌤팩(h)</td>
            <td>4</td>
          </tr>
          <tr>
            <td class="tL">(H210500001Z) 연간쌤팩(h)</td>
            <td>12</td>
            <td class="tL bgGray"></td>
            <td class="bgGray"></td>
          </tr>
          <tr>
            <td class="tL">(H210500001Z) 3~11월 쌤팩(h)</td>
            <td>12</td>
            <td class="tL bgGray"></td>
            <td class="bgGray"></td>
          </tr>
          <tr>
            <td rowspan="2" class="borderRight2Black">유아콜라보</td>
            <td class="tL">(H210500001Z) 핵심 플랫폼반(h)</td>
            <td>12</td>
            <td rowspan="5" class="borderRight2Black">60</td>
            <td class="tL">(H210500001Z) 핵심 플랫폼반(심화)(h)</td>
            <td>4</td>
            <td rowspan="5" class="borderRight2Black">30</td>
            <td rowspan="5" class="bgRed">0</td>
            <td rowspan="5" class="bgRed">200%</td>
          </tr>
          <tr>
            <td class="tL">(H210500001Z) 키맥락 특강2(h)</td>
            <td>12</td>
            <td class="tL">(H210500001Z) 연간 쌤팩(h)</td>
            <td>4</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td colspan="2">총 합계</td>
            <td colspan="2">2021년</td>
            <td class="borderRight2Black">152</td>
            <td colspan="2">2020년</td>
            <td class="borderRight2Black">122</td>
            <td>30</td>
            <td>125%</td>
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
  name: 'IndicatorCourseSeoul',
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
