<template lang="html">
  <div>
		<div class="pageTit">
			<h2>강사 계정</h2>
			<span><router-link to="/mkup/manager/accountManager">관리자</router-link><router-link to="/mkup/manager/accountManager">계정 관리</router-link><router-link to="/mkup/manager/accountTeacher">강사 계정</router-link><em>상세</em></span>
		</div>

    <div class="content">
    <article>
      <!-- page layout -->
      <div class="accountTeacherView">
        <!-- 강사 정보 -->
        <div class="subTit">
          <h3>강사 정보</h3>
          <span class="right">
            <router-link to="/mkup/manager/accountTeacher" class="btnList">목록으로</router-link>
            <router-link to="/mkup/manager/accountTeacher" class="btnM green ml10">저장</router-link>
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
                <td>배지윤</td>
                <td colspan="2"></td>
              </tr>
              <tr>
                <th>강사용 아이디<sup>필수</sup></th>
                <td>jybae35</td>
                <th>강사용 시스템 권한</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push5" checked>
                    <label for="push5">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
                  </span>
                  <button class="btnS line ml10">접속 안내 문자 발송</button>
                </td>
              </tr>
              <tr>
                <th>휴대전화<sup>필수</sup></th>
                <td><input type="text" value="010-1234-5678"></td>
                <th>이메일<sup>필수</sup></th>
                <td><input type="text" value="jiyoon@naver.com"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //강사 정보 -->
        <div class="mt20 boxBrown msgBtnSet">
  				<p class="msg fGreen">※ 해당 강사의 조교를 우측 [추가] 버튼을 선택하여 등록할 수 있습니다.<br/>※ 조교 계정은 강사용 시스템의 ‘학습 Q&A’ 메뉴만 조회 가능합니다. 타메뉴는 조회 불가합니다.</p>
  				<span class="btnSet">
            <button class="btnS line">추가</button>
  				</span>
  			</div>
        <!-- 조교 (1) -->
        <div class="subTit">
          <h3>조교 (1)</h3>
          <span class="right"><button class="btnS green">등록</button></span>
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
                <th>성명</th>
                <td><input type="text"/></td>
                <td colspan="2"></td>
              </tr>
              <tr>
                <th>아이디</th>
                <td>
                  <span class="ipBtn">
                    <input type="text" placeholder="영문, 숫자 입력"/>
                    <button class="btnS">중복확인</button>
                  </span>
                </td>
                <th>강사용 시스템 권한</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push5">
                    <label for="push5">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>휴대전화</th>
                <td><input type="text"></td>
                <th>이메일</th>
                <td><input type="text"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //조교 (1) -->
        <!-- 조교 (1) 등록 후 -->
        <div class="subTit">
          <h3>조교 (2)</h3>
          <span class="right"><button class="btnS">저장</button></span>
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
                <th>성명</th>
                <td>김지은</td>
                <td colspan="2"></td>
              </tr>
              <tr>
                <th>아이디</th>
                <td>kimje0123</td>
                <th>강사용 시스템 권한</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push5" checked>
                    <label for="push5">
                      <span>차단</span>
                      <span>허용</span>
                    </label>
                  </span>
                  <button class="btnS line ml10">접속 안내 문자 발송</button>
                </td>
              </tr>
              <tr>
                <th>휴대전화</th>
                <td><input type="text" value="010-1234-5678"></td>
                <th>이메일</th>
                <td><input type="text" value="kimje0123@naver.com"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //조교 (1) 등록 후 -->
        <!-- 메뉴 접근 권한 -->
        <div class="subTit">
          <h3>메뉴 접근 권한</h3>
        </div>
        <div class="tvs">
          <!-- 지표 관리 -->
          <table>
            <colgroup>
              <col width="20%" span="5"/>
            </colgroup>
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
                    <label for=""><i></i>일일 통계</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>판매 통계</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for=""><i></i>수강생 통계</label>
                  </span>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <!-- //지표 관리 -->
          <!-- 강좌/수강생 -->
          <table>
            <colgroup>
              <col width="20%" span="5"/>
            </colgroup>
            <tbody>
              <tr>
                <th colspan="5" class="tL">
                  <span class="checkSet">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i>강좌/수강생</label>
                  </span>
                </th>
              </tr>
              <tr>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i>강좌별 수강생 조회</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i>학습 Q&A</label>
                  </span>
                </td>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i>선생님 상담</label>
                  </span>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <!-- //강좌/수강생 -->
        </div>
        <!-- //메뉴 접근 권한 -->
        <!-- 강사료 지급 내역서 -->
        <div class="subTit">
          <h3>강사료 지급 내역서</h3>
        </div>
        <div class="tls wHalf">
          <table>
            <colgroup>
              <col width="200">
              <col width="*">
            </colgroup>
            <thead>
              <tr>
                <th>제목</th>
                <th>파일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text"/></td>
                <td><button class="btnS line">파일 업로드</button></td>
              </tr>
              <tr>
                <td>3월 강사료 내역서</td>
                <td><a href="">배지윤_3월 강사료 지급내역서.pdf</a></td>
              </tr>
              <tr>
                <td>2월 강사료 내역서</td>
                <td><a href="">배지윤_2월 강사료 지급내역서.pdf</a></td>
              </tr>
              <tr>
                <td>1월 강사료 내역서</td>
                <td><a href="">배지윤_1월 강사료 지급내역서.pdf</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //강사료 지급 내역서 -->
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
