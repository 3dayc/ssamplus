<template lang="html">
  <div>
		<div class="pageTit">
			<h2>관리자시스템 메뉴</h2>
			<span><router-link to="/mkup/manager/accountManager">관리자</router-link><router-link to="/mkup/manager/menuManage">메뉴/정책 관리</router-link><em>관리자시스템 메뉴</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="menuManage">
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="100"/>
              <col width="300"/>
              <col width="100"/>
              <col width="250"/>
              <col width="150"/>
            </colgroup>
            <thead>
              <tr>
                <th scope="col">순서</th>
                <th scope="col">메뉴 노출</th>
                <th scope="col">GNB 메뉴</th>
                <th scope="col">편집하기</th>
                <th scope="col">등록일</th>
                <th scope="col">순서 변경</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td>1</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1" checked>
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" value="통계" class="modifyInput tC" placeholder="메뉴명 입력"/></td>
                <td><router-link to="/mkup/manager/menuManage/view" class="btnS line">편집하기</router-link></td>
                <td>2021-01-01</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
              </tr>
              <!--//Loop-->
              <tr class="expiry">
                <td>-</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1">
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" value="단체수강" class="modifyInput tC" placeholder="메뉴명 입력"/></td>
                <td><router-link to="/mkup/manager/menuManage/view" class="btnS line">편집하기</router-link></td>
                <td>2021-01-01</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push2" checked>
                    <label for="push2">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" value="회원/선생님" class="modifyInput tC" placeholder="메뉴명 입력"/></td>
                <td><router-link to="/mkup/manager/menuManage/view" class="btnS line">편집하기</router-link></td>
                <td>2021-01-01</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push3" checked>
                    <label for="push3">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" value="강좌/교재" class="modifyInput tC" placeholder="메뉴명 입력"/></td>
                <td><router-link to="/mkup/manager/menuManage/view" class="btnS line">편집하기</router-link></td>
                <td>2021-01-01</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push4" checked>
                    <label for="push4">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" value="결제" class="modifyInput tC" placeholder="메뉴명 입력"/></td>
                <td><router-link to="/mkup/manager/menuManage/view" class="btnS line">편집하기</router-link></td>
                <td>2021-01-01</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push5" checked>
                    <label for="push5">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" value="모의고사 관리" class="modifyInput tC" placeholder="메뉴명 입력"/></td>
                <td><router-link to="/mkup/manager/menuManage/view" class="btnS line">편집하기</router-link></td>
                <td>2021-01-01</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push6" checked>
                    <label for="push6">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" value="게시판 관리" class="modifyInput tC" placeholder="메뉴명 입력"/></td>
                <td><router-link to="/mkup/manager/menuManage/view" class="btnS line">편집하기</router-link></td>
                <td>2021-01-01</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push7" checked>
                    <label for="push7">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" value="사이트 관리" class="modifyInput tC" placeholder="메뉴명 입력"/></td>
                <td><router-link to="/mkup/manager/menuManage/view" class="btnS line">편집하기</router-link></td>
                <td>2021-01-01</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push8" checked>
                    <label for="push8">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" value="메시지 관리" class="modifyInput tC" placeholder="메뉴명 입력"/></td>
                <td><router-link to="/mkup/manager/menuManage/view" class="btnS line">편집하기</router-link></td>
                <td>2021-01-01</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push9" checked>
                    <label for="push9">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" value="관리자" class="modifyInput tC" placeholder="메뉴명 입력"/></td>
                <td><router-link to="/mkup/manager/menuManage/view" class="btnS line">편집하기</router-link></td>
                <td>2021-01-01</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
              </tr>
              <tr class="newAdd"> <!-- 신규 행은 클래스 newAdd 추가 -->
                <td></td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push10">
                    <label for="push10">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  <span class="ipBtn">
                    <input type="text" class="tC" placeholder="메뉴명 입력"/>
                    <button class="btnS">저장</button>
                  </span>
                </td>
                <td></td>
                <td></td>
                <td></td>
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
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MenuManage',
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
