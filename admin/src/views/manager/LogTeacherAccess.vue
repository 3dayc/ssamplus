<template lang="html">
  <div>
    <!-- page layout -->
    <div class="logTeacherAccess">
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
      <div class="tls wHalf">
        <table>
          <colgroup>
            <col width="300" span="2"/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">계정</th>
              <th scope="col">로그인 일시</th>
            </tr>
          </thead>
          <tbody>
            <!--Loop-->
            <tr>
              <td>김현  |  kimhyun0123</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <!--//Loop-->
            <tr>
              <td>배지윤  |  jybae35</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <tr>
              <td>박미진  |  mjpark111</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <tr>
              <td>김현  |  kimhyun0123</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <tr>
              <td>배지윤  |  jybae35</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <tr>
              <td>박미진  |  mjpark111</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <tr>
              <td>김현  |  kimhyun0123</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <tr>
              <td>배지윤  |  jybae35</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <tr>
              <td>박미진  |  mjpark111</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <tr>
              <td>김현  |  kimhyun0123</td>
              <td>2021-05-01 01:26:32</td>
            </tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="2" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'LogTeacherAccess',
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
