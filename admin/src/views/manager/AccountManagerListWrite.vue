<template lang="html">
  <div>
		<div class="pageTit">
			<h2>관리자 계정</h2>
			<span><router-link to="/mkup/manager/accountManager">관리자</router-link><router-link to="/mkup/manager/accountManager">계정 관리</router-link><router-link to="/mkup/manager/accountManager">관리자 계정</router-link><em>신규 등록</em></span>
		</div>

    <div class="content">
    <article>
      <!-- page layout -->
      <div class="accountManagerListWrite">
        <!-- 관리자그룹 기본 정보 -->
        <div class="subTit">
          <h3>관리자그룹 기본 정보</h3>
          <span class="right">
            <router-link to="/mkup/manager/accountManagerList/view" class="btnM green">저장</router-link>
            <router-link to="/mkup/manager/accountManager" class="btnM gray ml10">취소</router-link>
          </span>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>그룹 명<sup>필수</sup></th>
                <td><input type="text"></td>
              </tr>
              <tr>
                <th>소속 관리자</th>
                <td>
                  <ul class="groupList noLine">
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" />
                        <label for=""><i></i>박미진</label>
                      </span>
                    </li>
                    <li>
                      <span class="checkSet">
                        <input type="checkbox" id="" disabled /> <!-- 비활성화 상태 -->
                        <label for=""><i></i>김진규</label>
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //관리자그룹 기본 정보 -->

        <!-- 메뉴 접근 권한 -->
        <div class="subTit"><h3>메뉴 접근 권한</h3></div>
        <div class="tvs">
          <!-- 통계 -->
          <table>
            <colgroup>
              <col width="20%" span="5"/>
            </colgroup>
            <thead>
              <tr>
                <th colspan="5" class="tL backBeige">
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>통계</label>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="5" class="tL">
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>지표 관리</label>
                  </span>
                </th>
              </tr>
              <tr>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>연도별 현황</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>수강중인 인원</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>결제현황</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>매출현황</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>환불현황</label>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>재수강</label>
                  </span>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th colspan="5" class="tL">
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>지표 관리</label>
                  </span>
                </th>
              </tr>
              <tr>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>연도별 현황</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>수강중인 인원</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>결제현황</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>매출현황</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>환불현황</label>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>재수강</label>
                  </span>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <!-- //통계 -->
          <!-- 회원/선생님 -->
          <table>
            <colgroup>
              <col width="20%" span="5"/>
            </colgroup>
            <thead>
              <tr>
                <th colspan="5" class="tL backBeige">
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>회원/선생님</label><!-- 2021-07-14 메뉴명 변경 -->
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="5" class="tL">
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>지표 관리</label>
                  </span>
                </th>
              </tr>
              <tr>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>연도별 현황</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>수강중인 인원</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>결제현황</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>매출현황</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>환불현황</label>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>재수강</label>
                  </span>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <!-- //회원/선생님 -->
        </div>
        <!-- //메뉴 접근 권한 -->

      </div>
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'accountManagerWrite',
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
