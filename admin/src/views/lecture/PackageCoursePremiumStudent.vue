<template lang="html">
  <div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="packageCoursePremiumStudent">
          <!-- 수강생 검색 -->
          <div class="subTit cpRight">
            <div class="listSearch left">
              <div class="back">
                <div class="bdLine">
                  <span class="lsItem">
                    <input type="text" placeholder="이름. 아이디 검색" />
                    <button class="btnSearch">검색</button>
                  </span>
                </div>
                <button class="btnRefresh">초기화</button>
              </div>
            </div>
            <span class="right">
              <em>2501  |  장영희  | <em class="iSet hotpink">프리미엄</em> 2021 완전정복 쌤팩</em> 강좌입니다.
            </span>
          </div>
          <!-- //수강생 검색 -->
          <!-- 수강생 검색결과 -->
          <div>
            <div class="listSummery">
              <div class="left">
                <strong>회원 개인정보 표출</strong>
                <span class="toggleSet">
                  <input type="checkbox" id="push" />
                  <label for="push"><!--적용여부--></label>
                </span>
              </div>
              <div class="right">
                <button class="btnMsg mrl10" @click="MemberPartnerMsgSend();">메세지발송</button>
                <button class="btnDownload" @click="popTrigger = true">다운로드</button>
              </div>
            </div>
            <div class="tls">
              <table>
                <colgroup>
                  <col width="40">
                  <col width="120">
                  <col width="120">
                  <col width="100">
                  <col width="80">
                </colgroup>
                <thead>
                  <tr>
                    <th>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu">
                        <label for="svu"><i></i></label>
                      </span>
                    </th>
                    <th>이름/아이디</th>
                    <th>연락처</th>
                    <th>수강구분/ <br/>결제금액</th>
                    <th>결제일</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu1">
                        <label for="svu1"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>무료수강<br/>0원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu2">
                        <label for="svu2"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>유료수강<br/>250,000원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu3">
                        <label for="svu3"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>무료수강<br/>0원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu4">
                        <label for="svu4"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>유료수강<br/>250,000원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu5">
                        <label for="svu5"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>무료수강<br/>0원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu6">
                        <label for="svu6"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>유료수강<br/>250,000원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu7">
                        <label for="svu7"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>무료수강<br/>0원</td>
                    <td>2021-03-21</td>
                  </tr> -->
                  <tr>
                    <td colspan="5" class="noneData">해당 강좌에 수강생이 없습니다</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- //수강생 검색결과 -->
          <!-- 관리 -->
          <div class="subTit">
            <h3>관리</h3>
          </div>
          <div class="tvs record">
		  			<table>
		  				<colgroup>
		  					<col width="160"/>
		  					<col width="*"/>
		  				</colgroup>
		  				<tbody>
								<tr>
									<th>수정 이력</th>
									<td>
                    <ul class="recordList">
                      <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 수정</li>
                      <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 등록</li>
                    </ul>
                  </td>
								</tr>
		  				</tbody>
		  			</table>
		  		</div>
          <!-- //관리 -->
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
  name: 'PackageCoursePremiumStudent',
  data() {
    return {
    }
  },
  methods: {
    MemberPartnerMsgSend() {
      let routeData = this.$router.resolve({name: 'MemberPartnerMsgSend', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrPartnerMsgSend', '_blank', `width=850,height=20000`);
    },
  },
  components: {
  },

}
</script>

<style lang="css" scoped>
</style>
