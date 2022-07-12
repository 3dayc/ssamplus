<template lang="html">
  <div id="windowLayout">
    <div class="winContent">
      <div class="mocktestMultiTestPoint">
        <div class="boardTop tL">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <input type="text" value="11210002" class="w150"/>
                </span>
                <span class="lsItem">
                  <input type="text" value="김*민(jim******)" class="w300"/>
                  <button class="btnSearch">검색</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="tls subGreen">
          <table>
            <colgroup>
              <col width="80" />
              <col width="120" />
              <col width="480" />
              <col width="260" />
              <col width="140" />
              <col width="120" />
              <col width="120" />
            </colgroup>
            <thead>
              <tr>
                <th>순서</th>
                <th>시험번호</th>
                <th>기본 이수과목 및 분야</th>
                <th>평가영역</th>
                <th>난이도</th>
                <th>배점 (점)</th>
                <th>나의 점수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="color"></td>
                <td class="color"></td>
                <td class="color"></td>
                <td class="color"></td>
                <td class="fRed color">배점 합계</td>
                <td class="fRed">65</td>
                <td>58</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1-1</td>
                <td class="tL">우리나라 음악교육사</td>
                <td class="tL">1</td>
                <td>중</td>
                <td>5</td>
                <td><input type="text" class="tC" value="5"></td>
              </tr>
              <tr>
                <td>2</td>
                <td>1-2</td>
                <td class="tL">기초이론</td>
                <td class="tL">2-1</td>
                <td>상</td>
                <td>10</td>
                <td><input type="text" class="tC" value="10"></td>
              </tr>
              <tr>
                <td>3</td>
                <td>1-3</td>
                <td class="tL">화성</td>
                <td class="tL"></td>
                <td>중</td>
                <td>5</td>
                <td><input type="text" class="tC" value="4"></td>
              </tr>
              <tr>
                <td>4</td>
                <td>2-1</td>
                <td class="tL">국악사</td>
                <td class="tL"></td>
                <td>중</td>
                <td>5</td>
                <td><input type="text" class="tC" value="4"></td>
              </tr>
              <tr>
                <td>5</td>
                <td>2-2</td>
                <td class="tL">음악교수법</td>
                <td class="tL"></td>
                <td>중</td>
                <td>15</td>
                <td><input type="text" class="tC" value="12"></td>
              </tr>
              <tr>
                <td>6</td>
                <td>2-3</td>
                <td class="tL">포괄적 음악성/교육과정</td>
                <td class="tL"></td>
                <td>상</td>
                <td>20</td>
                <td><input type="text" class="tC" value="18"></td>
              </tr>
              <tr>
                <td>7</td>
                <td>3-1</td>
                <td class="tL">화성</td>
                <td class="tL"></td>
                <td>하</td>
                <td>5</td>
                <td><input type="text" class="tC" value="5"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="btnArea">
          <button class="btnM">저장</button>
          <button class="btnM gray">취소</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MocktestMultiTestPoint',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
