<template lang="html">
  <div>
    <!-- page layout -->
    <div class="accountManager">
      <!-- 테이블 유틸 -->
      <div class="boardTop">
        <div class="listSearch">
          <div class="back">
            <div class="bdLine">
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">메뉴 1</option>
                  </select>
                </span>
              </span>
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">메뉴 2</option>
                  </select>
                </span>
              </span>
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">메뉴 3</option>
                  </select>
                </span>
              </span>
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
            <col width="160" span="3"/>
            <col width="240"/>
            <col width="200"/>
            <col width="500"/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">메뉴1</th>
              <th scope="col">메뉴2</th>
              <th scope="col">메뉴3</th>
              <th scope="col">관리자</th>
              <th scope="col">액션</th>
              <th scope="col">일시</th>
            </tr>
          </thead>
          <tbody>
            <!--Loop-->
            <tr>
              <td>회원/선생님</td>
              <td>회원관리</td>
              <td>회원조회</td>
              <td>박미진  |  mjpark111</td>
              <td><a>등록</a></td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <!--//Loop-->
            <tr>
              <td>회원/선생님</td>
              <td>오늘의 업데이트</td>
              <td>-</td>
              <td>박미진  |  mjpark111</td>
              <td><a>수정</a></td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>강좌/교재</td>
              <td>강좌관리</td>
              <td>단과 강좌</td>
              <td>박미진  |  mjpark111</td>
              <td><a>삭제</a></td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>회원/선생님</td>
              <td>회원관리</td>
              <td>회원조회</td>
              <td>박미진  |  mjpark111</td>
              <td><a>개인정보 조회</a></td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>강좌/교재</td>
              <td>오늘의 업데이트</td>
              <td>-</td>
              <td>박미진  |  mjpark111</td>
              <td><a>메모 저장</a></td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>강좌/교재</td>
              <td>강좌관리</td>
              <td>단과 강좌</td>
              <td>박미진  |  mjpark111</td>
              <td><a>메모 삭제</a></td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>회원/선생님</td>
              <td>회원관리</td>
              <td>회원조회</td>
              <td>박미진  |  mjpark111</td>
              <td><a>저장</a></td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>강좌/교재</td>
              <td>오늘의 업데이트</td>
              <td>-</td>
              <td>박미진  |  mjpark111</td>
              <td><a>수정</a></td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>강좌/교재</td>
              <td>강좌관리</td>
              <td>단과 강좌</td>
              <td>박미진  |  mjpark111</td>
              <td><a>삭제</a></td>
              <td>2021-05-01 01:24:32</td>
            </tr>
            <tr>
              <td>회원/선생님</td>
              <td>회원관리</td>
              <td>회원조회</td>
              <td>박미진  |  mjpark111</td>
              <td><a>개인정보 조회</a></td>
              <td>2021-05-01 01:24:32</td>
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
  name: 'LogManagerAction',
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
