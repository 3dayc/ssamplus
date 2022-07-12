<template lang="html">
  <div>
    <div class="pageTit">
			<h2>과목코드 관리</h2>
			<span><router-link to="/mkup/manager/accountManager">관리자</router-link><router-link to="/mkup/manager/menuManage">메뉴/정책 관리</router-link><em>과목코드 관리</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="policySubjectCode"><!-- class 없어도 유지 -->
        <div class="subTit">
          <h3>1DEPTH 관리</h3>
        </div>
        <p class="infoMsg fRed">※ <과목코드 테이블>을 직접 관리하는 메뉴로, 코드 추가/노출여부 수정 가능.</p>
        <p class="infoMsg fRed fBold">※ 1DEPTH 컬럼별 노출여부 변경 시, 2DEPTH 노출여부도 동일하게 변경됨. 2DEPTH 과목별 노출여부는 상세 화면에서 수정 필요</p>
        <p class="infoMsg fRed fBold underline mb10">※ 1DEPTH 신규 등록 시 2DEPTH도 반드시 함께 등록되어야 하며, 과목명이 같은 경우에도 1-2DEPTH를 모두 등록해야 함 (ex. 교육학)</p>
        <div class="tls">
          <table>
            <colgroup>
              <col width="500"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead>
              <tr>
                <th>과목명</th>
                <th>Code</th>
                <th>2DEPTH 편집</th>
                <th>준비중인 시험 노출</th>
                <th>수강신청 노출</th>
                <th>임용자료실 노출</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" class="modifyInput tC" placeholder="메뉴명 입력" value="교육학"></td>
                <td>01</td>
                <td><router-link to="/mkup/manager/policySubjectCode/view" class="btnS line">편집하기</router-link></td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected011===0}">
                    <select name="" id="" v-model="selected011">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected012===0}">
                    <select name="" id="" v-model="selected012">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected013===0}">
                    <select name="" id="" v-model="selected013">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <td><input type="text" class="modifyInput tC" placeholder="메뉴명 입력" value="논술·면접"></td>
                <td>08</td>
                <td><router-link to="/mkup/manager/policySubjectCode/view" class="btnS line">편집하기</router-link></td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected081===0}">
                    <select name="" id="" v-model="selected081">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected082===0}">
                    <select name="" id="" v-model="selected082">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected083===0}">
                    <select name="" id="" v-model="selected083">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <td><input type="text" class="modifyInput tC" placeholder="메뉴명 입력" value="유아"></td>
                <td>02</td>
                <td><router-link to="/mkup/manager/policySubjectCode/view" class="btnS line">편집하기</router-link></td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected021===0}">
                    <select name="" id="" v-model="selected021">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected022===0}">
                    <select name="" id="" v-model="selected022">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected023===0}">
                    <select name="" id="" v-model="selected023">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <td><input type="text" class="modifyInput tC" placeholder="메뉴명 입력" value="초등"></td>
                <td>07</td>
                <td><router-link to="/mkup/manager/policySubjectCode/view" class="btnS line">편집하기</router-link></td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected071===0}">
                    <select name="" id="" v-model="selected071">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected072===0}">
                    <select name="" id="" v-model="selected072">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected073===0}">
                    <select name="" id="" v-model="selected073">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <td><input type="text" class="modifyInput tC" placeholder="메뉴명 입력" value="중등"></td>
                <td>03</td>
                <td><router-link to="/mkup/manager/policySubjectCode/view" class="btnS line">편집하기</router-link></td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected031===0}">
                    <select name="" id="" v-model="selected031">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected032===0}">
                    <select name="" id="" v-model="selected032">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected033===0}">
                    <select name="" id="" v-model="selected033">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <td><input type="text" class="modifyInput tC" placeholder="메뉴명 입력" value="사회/과학"></td>
                <td>04</td>
                <td><router-link to="/mkup/manager/policySubjectCode/view" class="btnS line">편집하기</router-link></td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected041===0}">
                    <select name="" id="" v-model="selected041">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected042===0}">
                    <select name="" id="" v-model="selected042">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected043===0}">
                    <select name="" id="" v-model="selected043">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <td><input type="text" class="modifyInput tC" placeholder="메뉴명 입력" value="사서직(공무원)"></td>
                <td>14</td>
                <td><router-link to="/mkup/manager/policySubjectCode/view" class="btnS line">편집하기</router-link></td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected141===0}">
                    <select name="" id="" v-model="selected141">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected142===0}">
                    <select name="" id="" v-model="selected142">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected143===0}">
                    <select name="" id="" v-model="selected143">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <td><input type="text" class="modifyInput tC" placeholder="메뉴명 입력" value="비교과"></td>
                <td>06</td>
                <td><router-link to="/mkup/manager/policySubjectCode/view" class="btnS line">편집하기</router-link></td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected061===0}">
                    <select name="" id="" v-model="selected061">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected062===0}">
                    <select name="" id="" v-model="selected062">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected063===0}">
                    <select name="" id="" v-model="selected063">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <td><input type="text" class="modifyInput tC" placeholder="메뉴명 입력" value="특수"></td>
                <td>05</td>
                <td><router-link to="/mkup/manager/policySubjectCode/view" class="btnS line">편집하기</router-link></td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected051===0}">
                    <select name="" id="" v-model="selected051">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected052===0}">
                    <select name="" id="" v-model="selected052">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected053===0}">
                    <select name="" id="" v-model="selected053">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <td><input type="text" class="modifyInput tC" placeholder="메뉴명 입력" value="한국사"></td>
                <td>12</td>
                <td><router-link to="/mkup/manager/policySubjectCode/view" class="btnS line">편집하기</router-link></td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected121===0}">
                    <select name="" id="" v-model="selected121">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected122===0}">
                    <select name="" id="" v-model="selected122">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="selectSet" :class="{noStyle:selected123===0}">
                    <select name="" id="" v-model="selected123">
                      <option value="1">Y</option>
                      <option value="0">N</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr class="newAdd">
                <td>
                  <span class="ipBtn">
                    <input type="text" placeholder="1DEPTH 과목명 입력"/>
                    <button class="btnS">저장</button>
                  </span>
                </td>
                <td></td>
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
  name: 'PolicySubjectCode',
  data() {
    return {
      selected011: 0,
      selected012: 1,
      selected013: 1,
      selected021: 1,
      selected022: 1,
      selected023: 1,
      selected031: 1,
      selected032: 1,
      selected033: 1,
      selected041: 1,
      selected042: 1,
      selected043: 1,
      selected051: 1,
      selected052: 1,
      selected053: 1,
      selected061: 1,
      selected062: 1,
      selected063: 1,
      selected071: 1,
      selected072: 0,
      selected073: 1,
      selected081: 0,
      selected082: 1,
      selected083: 1,
      selected121: 1,
      selected122: 1,
      selected123: 1,
      selected141: 0,
      selected142: 1,
      selected143: 1,
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
