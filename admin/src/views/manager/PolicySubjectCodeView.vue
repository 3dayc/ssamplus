<template lang="html">
  <div>
    <div class="pageTit">
			<h2>과목코드 관리</h2>
			<span><router-link to="/mkup/manager/accountManager">관리자</router-link><router-link to="/mkup/manager/menuManage">메뉴/정책 관리</router-link><router-link to="/mkup/manager/menuManage">과목코드 관리</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="policySubjectCodeView"><!-- class 없어도 유지 -->
        <div class="subTit">
          <h3>1DEPTH</h3>
          <span class="right">
            <router-link to="/mkup/manager/policySubjectCode" class="btnList">목록으로</router-link>
          </span>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160">
              <col width="40%">
              <col width="160">
              <col width="*">
            </colgroup>
            <tbody>
              <th>과목명</th>
              <td>외국어</td>
              <th>Code</th>
              <td>15</td>
            </tbody>
          </table>
        </div>
        <div class="subTit">
          <h3>2DEPTH 관리</h3>
        </div>
        <p class="infoMsg fRed">※ <과목코드 테이블>을 직접 관리하는 메뉴로, 코드 추가/노출여부 수정 가능.</p>
        <p class="infoMsg fRed fBold">※ 1DEPTH 컬럼별 노출여부가 ‘N’인 경우, 2DEPTH도 노출여부 ‘N’이며, 수정 불가함.</p>
        <p class="infoMsg fRed fBold underline mb10">※ 1DEPTH 하위에 2DEPTH가 반드시 존재해야 하며, 1-2DEPTH의 과목명이 같은 경우에도 1-2DEPTH를 모두 등록해야 함 (ex. 교육학)</p>
        <div class="tls">
          <table>
            <colgroup>
              <col width="500"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead>
              <tr>
                <th>과목명</th>
                <th>Code</th>
                <th>준비중인 시험 노출</th>
                <th>수강신청 노출</th>
                <th>임용자료실 노출</th>
              </tr>
            </thead>
            <tbody>
              <tr class="newAdd">
                <td>
                  <span class="ipBtn">
                    <input type="text" placeholder="2DEPTH 과목명 입력"/>
                    <button class="btnS">저장</button>
                  </span>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
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
  name: 'PolicySubjectCodeView',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
