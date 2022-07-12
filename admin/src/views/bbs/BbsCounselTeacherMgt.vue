<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>상담 선생님 관리</h1>
      <span class="supTxt">* 1:1 상담을 진행하는 선생님을 설정할 수 있습니다.</span>
    </div>
    <div class="winContent">
      <h3><strong>선생님 리스트</strong></h3>
      <div class="tls subGreen">
        <table>
          <colgroup>
            <col width="100">
            <col width="100">
            <col width="50">
          </colgroup>
          <thead>
            <tr>
              <th>과목</th>
              <th>선생님</th>
              <th>선택</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3" class="tL">교육학</td>
              <td class="tL">김현</td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" checked/>
                  <label for=""><i></i></label>
                </span>
              </td>
            </tr>
            <tr>
              <td class="tL">권구현</td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
            </tr>
            <tr>
              <td class="tL">윤중샘</td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
            </tr>
            <tr>
              <td class="tL" rowspan="4">국어</td>
              <td class="tL">박노송</td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" checked/>
                  <label for=""><i></i></label>
                </span>
              </td>
            </tr>
            <tr>
              <td class="tL">송헌</td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
            </tr>
            <tr>
              <td class="tL">김준</td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
            </tr>
            <tr>
              <td class="tL">노송크루</td>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
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
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'BbsCounselTeacherMgt',
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
