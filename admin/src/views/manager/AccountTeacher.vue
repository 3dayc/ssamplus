<template lang="html">
  <div>
		<div class="pageTit">
			<h2>강사 계정</h2>
			<span><router-link to="/mkup/manager/accountManager">관리자</router-link><router-link to="/mkup/manager/accountManager">계정 관리</router-link><em>강사 계정</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="accountTeacher">
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
          <div class="right-po">
            <button class="btnMsg ml10" @click="MemberMsgSend();">메세지발송</button>
            <router-link to="/mkup/manager/accountTeacher/write" class="btnAdd">신규등록</router-link>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="140"/>
              <col width="140"/>
              <col width="200"/>
              <col width="300"/>
              <col width="140"/>
              <col width="280"/>
              <col width="140"/>
              <col width="120"/>
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </th>
                <th scope="col">강사명</th>
                <th scope="col">강사용 아이디</th>
                <th scope="col">휴대전화</th>
                <th scope="col">이메일</th>
                <th scope="col">등록일</th>
                <th scope="col">강사용시스템<br/>최근 로그인 일시</th>
                <th scope="col">강사용시스템<br/>권한</th>
                <th scope="col">시스템 접속</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td><router-link to="/mkup/manager/accountTeacher/view">배지윤</router-link></td>
                <td><router-link to="/mkup/manager/accountTeacher/view">jybae35</router-link></td>
                <td>010-1234-5678</td>
                <td>jiyoon@naver.com</td>
                <td>2020-12-14</td>
                <td>-</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push5" checked>
                    <label for="push5">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td><button class="underline">접속하기</button></td>
              </tr>
              <!--//Loop-->
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td><router-link to="/mkup/manager/accountTeacher/view">김현</router-link></td>
                <td><router-link to="/mkup/manager/accountTeacher/view">kimhyun0123</router-link></td>
                <td>010-1234-5678</td>
                <td>hyunkim@daum.net</td>
                <td>2020-12-14</td>
                <td class="fBlue">2021-05-01 01:24:32</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push4">
                    <label for="push4">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td><button class="underline">접속하기</button></td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td><router-link to="/mkup/manager/accountTeacher/view">송헌</router-link></td>
                <td><router-link to="/mkup/manager/accountTeacher/view">jybae35</router-link></td>
                <td>010-1234-5678</td>
                <td>jiyoon@naver.com</td>
                <td>2021-04-12</td>
                <td class="fBlue">2021-05-01 01:24:32</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push3" checked>
                    <label for="push3">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td><button class="underline">접속하기</button></td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td><router-link to="/mkup/manager/accountTeacher/view">김준</router-link></td>
                <td><router-link to="/mkup/manager/accountTeacher/view">kimhyun0123</router-link></td>
                <td>010-1234-5678</td>
                <td>hyunkim@daum.net</td>
                <td>2021-01-30</td>
                <td>-</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push2" checked>
                    <label for="push2">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td><button class="underline">접속하기</button></td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td><router-link to="/mkup/manager/accountTeacher/view">차미아</router-link></td>
                <td><router-link to="/mkup/manager/accountTeacher/view">jybae35</router-link></td>
                <td>010-1234-5678</td>
                <td>jiyoon@naver.com</td>
                <td>2021-04-12</td>
                <td>-</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1">
                    <label for="push1">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td><button class="underline">접속하기</button></td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td><router-link to="/mkup/manager/accountTeacher/view">미쉘킴</router-link></td>
                <td><router-link to="/mkup/manager/accountTeacher/view">kimhyun0123</router-link></td>
                <td>010-1234-5678</td>
                <td>hyunkim@daum.net</td>
                <td>2021-01-30</td>
                <td class="fBlue">2021-05-01 01:24:32</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push01" checked>
                    <label for="push01">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td><button class="underline">접속하기</button></td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td><router-link to="/mkup/manager/accountTeacher/view">양재웅</router-link></td>
                <td><router-link to="/mkup/manager/accountTeacher/view">kimhyun0123</router-link></td>
                <td>010-1234-5678</td>
                <td>hyunkim@daum.net</td>
                <td>2021-04-12</td>
                <td class="fBlue">2021-05-01 01:24:32</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push02" checked>
                    <label for="push02">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td><button class="underline">접속하기</button></td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td><router-link to="/mkup/manager/accountTeacher/view">배지윤</router-link></td>
                <td><router-link to="/mkup/manager/accountTeacher/view">kimhyun0123</router-link></td>
                <td>010-1234-5678</td>
                <td>hyunkim@daum.net</td>
                <td>2021-01-30</td>
                <td class="fBlue">2021-05-01 01:24:32</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push03" checked>
                    <label for="push03">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td><button class="underline">접속하기</button></td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td><router-link to="/mkup/manager/accountTeacher/view">김현</router-link></td>
                <td><router-link to="/mkup/manager/accountTeacher/view">kimhyun0123</router-link></td>
                <td>010-1234-5678</td>
                <td>hyunkim@daum.net</td>
                <td>2020-12-14</td>
                <td class="fBlue">2021-05-01 01:24:32</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push4" checked>
                    <label for="push4">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td><button class="underline">접속하기</button></td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td><router-link to="/mkup/manager/accountTeacher/view">송헌</router-link></td>
                <td><router-link to="/mkup/manager/accountTeacher/view">jybae35</router-link></td>
                <td>010-1234-5678</td>
                <td>jiyoon@naver.com</td>
                <td>2021-04-12</td>
                <td class="fBlue">2021-05-01 01:24:32</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push3" checked>
                    <label for="push3">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
                <td><button class="underline">접속하기</button></td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="9" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <!-- //테이블 목록 -->
        <Paginate />
      </div>
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'AccountTeacher',
  data() {
    return {
    }
  },
  methods: {
    MemberMsgSend() {
      let routeData = this.$router.resolve({name: 'MemberMsgSend', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrMsgSend', '_blank', `width=850,height=20000`);
    },
  },
  components: {
  }
}
</script>
