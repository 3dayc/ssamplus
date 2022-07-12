<template lang="html">
  <div>
		<div class="pageTit">
			<h2>강사용시스템 메뉴</h2>
			<span><router-link to="/mkup/manager/accountManager">관리자</router-link><router-link to="/mkup/manager/menuManage">메뉴/정책 관리</router-link><em>강사용시스템 메뉴</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="menuTeacher">
        <!-- LNB 메뉴 -->
        <div class="subTit">
          <h3>LNB 메뉴 (1)</h3>
          <span class="right">
            <button class="btnPosArrow">위로</button>
            <button class="btnPosArrow down">아래로</button>
          </span>
        </div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="100"/>
              <col width="200"/>
              <col width="500"/>
              <col width="200"/>
              <col width="100"/>
            </colgroup>
            <tbody>
              <tr class="menuTop"> <!-- 최상위 메뉴 일시 menuTop 클래스 추가 -->
                <td>Top</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push4" checked>
                    <label for="push4">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" class="modifyInput" value="통계"></td>
                <td class="halfUnit">
                  <span><input type="text" class="modifyInput" placeholder="메뉴 경로를 /이하부터 입력"></span>
                  <span><input type="text" class="modifyInput" placeholder="아이콘 경로를 /이하부터 입력" value="/admin/picture/icon/teachersystem"></span>
                </td>
                <td>2021-05-01</td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push3" checked>
                    <label for="push3">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" class="modifyInput" value="기간 통계"></td>
                <td><input type="text" class="modifyInput" value="/admin/mem/mem_support"></td>
                <td>2021-05-01</td>
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
                <td><input type="text" class="modifyInput" value="판매 통계"></td>
                <td><input type="text" class="modifyInput" value="/admin/lecture/mem_support"></td>
                <td>2021-05-01</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
              </tr>
              <tr class="expiry"><!--20210715 class 변경--> <!-- 숨김일때 클래스 disabled 추가 -->
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
                <td><input type="text" class="modifyInput" value="결제 통계"></td>
                <td><input type="text" class="modifyInput" value="/admin/mem/mem_support"></td>
                <td>2021-05-01</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push0" checked>
                    <label for="push0">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" class="modifyInput" value="수강생 통계"></td>
                <td><input type="text" class="modifyInput" value="/admin/mem/mem_search"></td>
                <td>2021-05-01</td>
                <td>
                  <button class="btnPosArrow">위로</button>
                  <button class="btnPosArrow down">아래로</button>
                </td>
              </tr>
              <tr class="newAdd"> <!-- 신규 행은 클래스 newAdd 추가 -->
                <td></td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push070">
                    <label for="push070">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" placeholder="메뉴명 입력"></td>
                <td>
                  <span class="ipBtn">
                    <input type="text" placeholder="메뉴 경로를 /이하부터 입력"/>
                    <button class="btnS">저장</button>
                  </span>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //LNB 메뉴 -->
        <!-- LNB 메뉴 -->
        <div class="subTit">
          <h3>LNB 메뉴 (2)</h3>
          <span class="right">
            <button class="btnPosArrow">위로</button>
            <button class="btnPosArrow down">아래로</button>
          </span>
        </div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="100"/>
              <col width="200"/>
              <col width="500"/>
              <col width="200"/>
              <col width="100"/>
            </colgroup>
            <tbody>
              <tr class="menuTop"> <!-- 최상위 메뉴 일시 menuTop 클래스 추가 -->
                <td>Top</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push004" checked>
                    <label for="push004">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" class="modifyInput" value="강좌/수강생"></td>
                <td class="halfUnit">
                  <span><input type="text" class="modifyInput" placeholder="메뉴 경로를 /이하부터 입력"></span>
                  <span><input type="text" class="modifyInput" placeholder="아이콘 경로를 /이하부터 입력" value="/admin/picture/icon/teachersystem"></span>
                </td>
                <td>2021-05-01</td>
                <td></td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push070" checked>
                    <label for="push070">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" class="modifyInput" placeholder="메뉴명 입력" value="강좌별 수강생 조회"></td>
                <td><input type="text" class="modifyInput" placeholder="메뉴 경로를 /이하부터 입력" value="/admin/mem/mem_search"></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push070" checked>
                    <label for="push070">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" class="modifyInput" placeholder="메뉴명 입력" value="학습 Q&A"></td>
                <td><input type="text" class="modifyInput" placeholder="메뉴 경로를 /이하부터 입력" value="/admin/mem/mem_support"></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push070" checked>
                    <label for="push070">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" class="modifyInput" placeholder="메뉴명 입력" value="선생님 상담"></td>
                <td><input type="text" class="modifyInput" placeholder="메뉴 경로를 /이하부터 입력" value="/admin/mem/mem_support"></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="newAdd"> <!-- 신규 행은 클래스 newAdd 추가 -->
                <td></td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push070">
                    <label for="push070">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" placeholder="메뉴명 입력"></td>
                <td>
                  <span class="ipBtn">
                    <input type="text" placeholder="메뉴 경로를 /이하부터 입력"/>
                    <button class="btnS">저장</button>
                  </span>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //LNB 메뉴 -->
        <!-- LNB 메뉴 -->
        <div class="subTit"><h3>LNB 메뉴 (-)</h3></div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="100"/>
              <col width="200"/>
              <col width="500"/>
              <col width="200"/>
              <col width="100"/>
            </colgroup>
            <tbody>
              <tr class="newAdd"> <!-- 신규 행은 클래스 newAdd 추가 -->
                <td>Top</td>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push070">
                    <label for="push070">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td><input type="text" placeholder="메뉴명 입력"></td>
                <td class="halfUnit">
                  <span><input type="text" placeholder="메뉴 경로를 /이하부터 입력"/></span>
                  <span class="ipBtn">
                    <input type="text" placeholder="아이콘 경로를 /이하부터 입력"/>
                    <button class="btnS">저장</button>
                  </span>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //LNB 메뉴 -->
      </div>
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MenuTeacher',
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
