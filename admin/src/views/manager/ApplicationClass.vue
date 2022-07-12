<template lang="html">
  <div>
		<div class="pageTit">
			<h2>수강신청</h2>
			<span><router-link to="/mkup/manager/accountManager">관리자</router-link><router-link to="/mkup/manager/applicationClass">학원 관리자</router-link><em>수강신청</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="accountManager">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="left-po">
            <strong>회원 개인정보 표출</strong>
            <span class="labelToggleSet">
              <input type="checkbox" id="push5">
              <label for="push5">
                <span>차단</span>
                <span>허용</span>
              </label>
            </span>
          </div>
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <input type="text" placeholder="회원번호,이름, 아이디, 휴대폰 검색" />
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
              <col width="100"/>
              <col width="130"/>
              <col width="130"/>
              <col width="150"/>
              <col width="150"/>
              <col width="150"/>
              <col width="150"/>
            </colgroup>
            <thead>
              <tr>
                <th scope="col">회원번호</th>
                <th scope="col">이름/아이디</th>
                <th scope="col">과목 (준비시험)</th>
                <th scope="col">학교/학과</th>
                <th scope="col">수강신청</th>
                <th scope="col">교재신청</th>
                <th scope="col">사물함신청</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td><a>361145</a></td>
                <td><a>김*민<br/>(ji****)</a></td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
                <td><button class="btnS line">SMART 수강신청</button></td>
                <td><button class="btnS line">교재 신청</button></td>
                <td><button class="btnS line">사물함 신청</button></td>
              </tr>
              <!--//Loop-->
              <tr>
                <td><a>361145</a></td>
                <td><a>김*민<br/>(ji****)</a></td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
                <td><button class="btnS line">SMART 수강신청</button></td>
                <td><button class="btnS line">교재 신청</button></td>
                <td><button class="btnS line">사물함 신청</button></td>
              </tr>
              <tr>
                <td><a>361145</a></td>
                <td><a>김*민<br/>(ji****)</a></td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
                <td><button class="btnS line">SMART 수강신청</button></td>
                <td><button class="btnS line">교재 신청</button></td>
                <td><button class="btnS line">사물함 신청</button></td>
              </tr>
              <tr>
                <td><a>361145</a></td>
                <td><a>김*민<br/>(ji****)</a></td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
                <td><button class="btnS line">SMART 수강신청</button></td>
                <td><button class="btnS line">교재 신청</button></td>
                <td><button class="btnS line">사물함 신청</button></td>
              </tr>
              <tr>
                <td><a>361145</a></td>
                <td><a>김*민<br/>(ji****)</a></td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
                <td><button class="btnS line">SMART 수강신청</button></td>
                <td><button class="btnS line">교재 신청</button></td>
                <td><button class="btnS line">사물함 신청</button></td>
              </tr>
              <tr>
                <td><a>361145</a></td>
                <td><a>김*민<br/>(ji****)</a></td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
                <td><button class="btnS line">SMART 수강신청</button></td>
                <td><button class="btnS line">교재 신청</button></td>
                <td><button class="btnS line">사물함 신청</button></td>
              </tr>
              <tr>
                <td><a>361145</a></td>
                <td><a>김*민<br/>(ji****)</a></td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
                <td><button class="btnS line">SMART 수강신청</button></td>
                <td><button class="btnS line">교재 신청</button></td>
                <td><button class="btnS line">사물함 신청</button></td>
              </tr>
              <tr>
                <td><a>361145</a></td>
                <td><a>김*민<br/>(ji****)</a></td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
                <td><button class="btnS line">SMART 수강신청</button></td>
                <td><button class="btnS line">교재 신청</button></td>
                <td><button class="btnS line">사물함 신청</button></td>
              </tr>
              <tr>
                <td><a>361145</a></td>
                <td><a>김*민<br/>(ji****)</a></td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
                <td><button class="btnS line">SMART 수강신청</button></td>
                <td><button class="btnS line">교재 신청</button></td>
                <td><button class="btnS line">사물함 신청</button></td>
              </tr>
              <tr>
                <td><a>361145</a></td>
                <td><a>김*민<br/>(ji****)</a></td>
                <td>중국어</td>
                <td>서울대학교<br/>중국어교육학과</td>
                <td><button class="btnS line">SMART 수강신청</button></td>
                <td><button class="btnS line">교재 신청</button></td>
                <td><button class="btnS line">사물함 신청</button></td>
              </tr>

              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'ApplicationClass',
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
