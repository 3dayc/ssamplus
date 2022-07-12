<template lang="html">
  <div>
    <!-- page layout -->
    <div class="LogManagerAccess">
      <!-- 테이블 유틸 -->
      <div class="boardTop">
        <div class="listSearch">
          <div class="back">
            <div class="bdLine">
              <span class="lsItem">
                <input type="text" placeholder="이름, 아이디 검색" />
                <button class="btnSearch">검색</button>
              </span>
            </div>
            <div><button class="btnRefresh">초기화</button></div>
          </div>
        </div>
      </div>
      <!-- //테이블 유틸 -->
      <!-- 테이블 목록 -->
      <div class="tls">
        <table>
          <colgroup>
            <col width="120">
            <col width="300" span="3"/>
            <col width="150"/>
            <col width="300"/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">구분</th>
              <th scope="col">관리자</th>
              <th scope="col">접속 IP</th>
              <th scope="col">인증번호 발송일시</th>
              <th scope="col">인증번호</th>
              <th scope="col">실제 로그인 일시</th>
            </tr>
          </thead>
          <tbody>
            <!--Loop-->
            <tr>
              <td>내부</td>
              <td>박미진  |  mjpark111</td>
              <td>110.112.114.35</td>
              <td>-</td>
              <td>-</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <!--//Loop-->
            <tr>
              <td>외부</td>
              <td>박미진  |  mjpark111</td>
              <td>115.138.72.104</td>
              <td>2021-05-01 01:24:32</td>
              <td>359283</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <tr>
              <td>외부</td>
              <td>박미진  |  mjpark111</td>
              <td>58.76.176.75</td>
              <td>2021-05-01 01:24:32</td>
              <td>359283</td>
              <td>-</td>
            </tr>
            <tr>
              <td>내부</td>
              <td>박미진  |  mjpark111</td>
              <td>110.112.114.35</td>
              <td>-</td>
              <td>-</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <tr>
              <td>외부</td>
              <td>박미진  |  mjpark111</td>
              <td>115.138.72.104</td>
              <td>2021-05-01 01:24:32</td>
              <td>359283</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <tr>
              <td>외부</td>
              <td>박미진  |  mjpark111</td>
              <td>58.76.176.75</td>
              <td>2021-05-01 01:24:32</td>
              <td>359283</td>
              <td>-</td>
            </tr>
            <tr>
              <td>내부</td>
              <td>박미진  |  mjpark111</td>
              <td>110.112.114.35</td>
              <td>-</td>
              <td>-</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <tr>
              <td>외부</td>
              <td>박미진  |  mjpark111</td>
              <td>115.138.72.104</td>
              <td>2021-05-01 01:24:32</td>
              <td>359283</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <tr>
              <td>외부</td>
              <td>박미진  |  mjpark111</td>
              <td>58.76.176.75</td>
              <td>2021-05-01 01:24:32</td>
              <td>359283</td>
              <td>-</td>
            </tr>
            <tr>
              <td>내부</td>
              <td>박미진  |  mjpark111</td>
              <td>110.112.114.35</td>
              <td>-</td>
              <td>-</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
          </tbody>
        </table>
      </div>
      <!-- //테이블 목록 -->
      <Paginate />
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LogManagerAccess',
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
