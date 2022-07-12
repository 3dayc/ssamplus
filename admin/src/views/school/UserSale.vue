<template lang="html">
  <div>
		<div class="pageTit">
			<h2>수강생 판매</h2>
			<span><router-link to="/mkup/school/userSale">학원 관리</router-link><em>수강생 판매</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="userSale">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <input type="text" placeholder="회원번호, 이름, 아이디, 휴대폰 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div><button class="btnRefresh">초기화</button></div>
            </div>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- //2021-09-27 목록써머리 삭제 -->
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="120"/>
              <col width="150"/>
              <col width="140"/>
              <col width="160">
              <col width="140"/>
              <col width="180"/>
              <col width="150"/>
            </colgroup>
            <thead>
              <tr>
                <th>회원번호</th>
                <th>이름/아이디</th>
                <th>과목 (준비시험)</th>
                <th>재학유무</th>
                <th>휴대폰 번호</th>
                <th>수강생 판매</th>
                <th>사물함 신청</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td><router-link to="/mkup/member/userMgt/view">361145</router-link></td>
                <td><router-link to="/mkup/member/userMgt/view">김지민<br/>(jimin0123)</router-link></td>
                <td>중국어</td>
                <td>재학생 (4학년)</td>
                <td>010-1234-5678</td>
                <td><router-link to="/mkup/school/userSale/product" class="btnS line notUnderline">강좌 / 교재 / 상품</router-link></td>
                <td><router-link to="/mkup/school/userSale/locker" class="btnS line notUnderline">사물함 신청</router-link></td>
              </tr>
              <!--//Loop-->
              <tr>
                <td><router-link to="/mkup/member/userMgt/view">361144</router-link></td>
                <td><router-link to="/mkup/member/userMgt/view">김지민<br/>(jimin0123)</router-link></td>
                <td>중국어</td>
                <td>재학생 (2학기)</td>
                <td>010-1234-5678</td>
                <td><router-link to="/mkup/school/userSale/product" class="btnS line notUnderline">강좌 / 교재 / 상품</router-link></td>
                <td><router-link to="/mkup/school/userSale/locker" class="btnS line notUnderline">사물함 신청</router-link></td>
              </tr>
              <tr>
                <td><router-link to="/mkup/member/userMgt/view">361143</router-link></td>
                <td><router-link to="/mkup/member/userMgt/view">김지민<br/>(jimin0123)</router-link></td>
                <td>중국어</td>
                <td>졸업생</td>
                <td>010-1234-5678</td>
                <td><router-link to="/mkup/school/userSale/product" class="btnS line notUnderline">강좌 / 교재 / 상품</router-link></td>
                <td><router-link to="/mkup/school/userSale/locker" class="btnS line notUnderline">사물함 신청</router-link></td>
              </tr>
              <tr>
                <td><router-link to="/mkup/member/userMgt/view">361142</router-link></td>
                <td><router-link to="/mkup/member/userMgt/view">김지민<br/>(jimin0123)</router-link></td>
                <td>중국어</td>
                <td>재학생 (4학년)</td>
                <td>010-1234-5678</td>
                <td><router-link to="/mkup/school/userSale/product" class="btnS line notUnderline">강좌 / 교재 / 상품</router-link></td>
                <td><router-link to="/mkup/school/userSale/locker" class="btnS line notUnderline">사물함 신청</router-link></td>
              </tr>
              <tr>
                <td><router-link to="/mkup/member/userMgt/view">361141</router-link></td>
                <td><router-link to="/mkup/member/userMgt/view">김지민<br/>(jimin0123)</router-link></td>
                <td>중국어</td>
                <td>재학생 (2학기)</td>
                <td>010-1234-5678</td>
                <td><router-link to="/mkup/school/userSale/product" class="btnS line notUnderline">강좌 / 교재 / 상품</router-link></td>
                <td><router-link to="/mkup/school/userSale/locker" class="btnS line notUnderline">사물함 신청</router-link></td>
              </tr>
              <tr>
                <td><router-link to="/mkup/member/userMgt/view">361140</router-link></td>
                <td><router-link to="/mkup/member/userMgt/view">김지민<br/>(jimin0123)</router-link></td>
                <td>중국어</td>
                <td>졸업생</td>
                <td>010-1234-5678</td>
                <td><router-link to="/mkup/school/userSale/product" class="btnS line notUnderline">강좌 / 교재 / 상품</router-link></td>
                <td><router-link to="/mkup/school/userSale/locker" class="btnS line notUnderline">사물함 신청</router-link></td>
              </tr>
              <tr>
                <td><router-link to="/mkup/member/userMgt/view">361139</router-link></td>
                <td><router-link to="/mkup/member/userMgt/view">김지민<br/>(jimin0123)</router-link></td>
                <td>중국어</td>
                <td>재학생 (4학년)</td>
                <td>010-1234-5678</td>
                <td><router-link to="/mkup/school/userSale/product" class="btnS line notUnderline">강좌 / 교재 / 상품</router-link></td>
                <td><router-link to="/mkup/school/userSale/locker" class="btnS line notUnderline">사물함 신청</router-link></td>
              </tr>
              <tr>
                <td><router-link to="/mkup/member/userMgt/view">361138</router-link></td>
                <td><router-link to="/mkup/member/userMgt/view">김지민<br/>(jimin0123)</router-link></td>
                <td>중국어</td>
                <td>재학생 (2학기)</td>
                <td>010-1234-5678</td>
                <td><router-link to="/mkup/school/userSale/product" class="btnS line notUnderline">강좌 / 교재 / 상품</router-link></td>
                <td><router-link to="/mkup/school/userSale/locker" class="btnS line notUnderline">사물함 신청</router-link></td>
              </tr>
              <tr>
                <td><router-link to="/mkup/member/userMgt/view">361137</router-link></td>
                <td><router-link to="/mkup/member/userMgt/view">김지민<br/>(jimin0123)</router-link></td>
                <td>중국어</td>
                <td>졸업생</td>
                <td>010-1234-5678</td>
                <td><router-link to="/mkup/school/userSale/product" class="btnS line notUnderline">강좌 / 교재 / 상품</router-link></td>
                <td><router-link to="/mkup/school/userSale/locker" class="btnS line notUnderline">사물함 신청</router-link></td>
              </tr>
              <tr>
                <td><router-link to="/mkup/member/userMgt/view">361136</router-link></td>
                <td><router-link to="/mkup/member/userMgt/view">김지민<br/>(jimin0123)</router-link></td>
                <td>중국어</td>
                <td>재학생 (4학년)</td>
                <td>010-1234-5678</td>
                <td><router-link to="/mkup/school/userSale/product" class="btnS line notUnderline">강좌 / 교재 / 상품</router-link></td>
                <td><router-link to="/mkup/school/userSale/locker" class="btnS line notUnderline">사물함 신청</router-link></td>
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
  name: 'UserSale',
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
