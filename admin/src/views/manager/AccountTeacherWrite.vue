<template lang="html">
  <div>
		<div class="pageTit">
			<h2>강사 계정</h2>
			<span><router-link to="/mkup/manager/accountManager">관리자</router-link><router-link to="/mkup/manager/accountManager">계정 관리</router-link><router-link to="/mkup/manager/accountTeacher">강사 계정</router-link><em>신규 등록</em></span>
		</div>

    <div class="content">
    <article>
      <!-- page layout -->
      <div class="accountTeacherWrite">
        <!-- 강사 정보 -->
        <div class="subTit">
          <h3>강사 정보</h3>
          <span class="right">
            <router-link to="/mkup/manager/accountTeacher/view" class="btnM green">저장</router-link>
            <router-link to="/mkup/manager/accountTeacher" class="btnM gray ml10">취소</router-link>
          </span>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="500"/>
              <col width="160"/>
              <col width="500"/>
            </colgroup>
            <tbody>
              <tr>
                <th>강사명<sup>필수</sup></th>
                <td><input type="text"></td>
                <td colspan="2"></td>
              </tr>
              <tr>
                <th>강사용 아이디<sup>필수</sup></th>
                <td>
                  <span class="ipBtn">
                    <input type="text" placeholder="영문, 숫자 입력"/>
                    <button class="btnS">중복확인</button>
                  </span>
                </td>
                <th>강사용 시스템 권한</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push5" checked>
                    <label for="push5">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>휴대전화<sup>필수</sup></th>
                <td><input type="text"></td>
                <th>이메일<sup>필수</sup></th>
                <td><input type="text"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //강사 정보 -->
      </div>
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'TeacherAccountWrite',
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
