<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>거래처 검색</h1>
      <span class="supTxt">* 교재의 거래처를 검색 및 선택할 수 있습니다.</span>
    </div>
    <div class="winContent">
      <!-- 검색조건 -->
      <div class="boardTop">
        <div class="listSearch">
          <div class="back">
            <div class="bdLine">
              <span class="lsItem">
                <input type="text" placeholder="거래처명, 거래처코드 검색" />
                <button class="btnSearch">검색</button>
              </span>
            </div>
            <div>
              <button class="btnRefresh">초기화</button>
            </div>
          </div>
        </div>
      </div>
      <!-- //검색조건 -->
      <!-- 검색결과 -->
      <div class="tls subGreen">
        <table>
          <colgroup>
            <col width="60"/>
            <col width="100"/>
            <col width="140"/>
            <col width="250"/>
          </colgroup>
          <thead>
            <tr>
              <th></th>
              <th>거래처코드</th>
              <th>거래처명</th>
              <th>주소</th>
            </tr>
          </thead>
          <tbody>
            <tr class="expiry">
              <td>
                <span class="radioSet noLabel">
                  <input type="radio" name="defaultClient" id="defaultClient" disabled checked>
                  <label for="defaultClient"><i></i></label>
                </span>
              </td>
              <td>B1000975</td>
              <td>㈜웅진패스원</td>
              <td>서울 동작구 노량진동 310-64</td>
            </tr>
            <tr>
              <td>
                <span class="radioSet noLabel">
                  <input type="radio" name="client" id="client1">
                  <label for="client1"><i></i></label>
                </span>
              </td>
              <td>B1000977</td>
              <td>(주)아람 Books</td>
              <td>서울 동작구 노량진동 310-64</td>
            </tr>
            <tr>
              <td>
                <span class="radioSet noLabel">
                  <input type="radio" name="client" id="client2">
                  <label for="client2"><i></i></label>
                </span>
              </td>
              <td>B1000977</td>
              <td>(주)아람 Books</td>
              <td>서울 동작구 노량진동 310-64</td>
            </tr>
            <tr>
              <td>
                <span class="radioSet noLabel">
                  <input type="radio" name="client" id="client3">
                  <label for="client3"><i></i></label>
                </span>
              </td>
              <td>B1000977</td>
              <td>(주)아람 Books</td>
              <td>서울 동작구 노량진동 310-64</td>
            </tr>
            <tr>
              <td>
                <span class="radioSet noLabel">
                  <input type="radio" name="client" id="client4">
                  <label for="client4"><i></i></label>
                </span>
              </td>
              <td>B1000977</td>
              <td>(주)아람 Books</td>
              <td>서울 동작구 노량진동 310-64</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //검색결과 -->
      <div class="btnArea">
        <button class="btnM">완료</button>
        <button class="btnM gray">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LectureClientSearch',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
