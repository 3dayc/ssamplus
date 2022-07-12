<template lang="html">
    <div id="windowLayout">
      <div class="winHeader">
        <h1>전화상담</h1>
        <span class="supTxt">* 고객지원팀 전화문의 시 입력하는 화면입니다</span>
        <div class="btnArea">
          <router-link to="/mkup/windowPopup/mmrCounseling" class="btnList">목록으로</router-link>
          <button class="btnM green ml10">저장</button>
          <button class="btnM line ml10">삭제</button>
        </div>
      </div>
      <div class="winContent">
        <!-- 연락 정보 -->
        <h3><strong>연락 정보</strong></h3>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160">
              <col width="500">
              <col width="160">
              <col width="500">
            </colgroup>
            <!-- 2021-08-23 -->
            <tbody>
              <tr>
                <th>연락처 <sup>필수</sup></th>
                <td class="fBlue">010-1234-5678 <button class="btnS ml10" @click="mmrSearch = !mmrSearch">회원검색</button></td>
                <th>회원번호</th>
                <td><input type="text" class="wHalf" value="361145"/><button class="btnS ml10" @click="mmrSearch = !mmrSearch">회원검색</button></td>
              </tr>
              <tr>
                <th>이름</th>
                <td><input type="text" class="wHalf" value="김지민"/><button class="btnS ml10" @click="mmrSearch = !mmrSearch">회원검색</button></td>
                <th>아이디</th>
                <td><input type="text" class="wHalf" value="jimin0123"/><button class="btnS ml10" @click="mmrSearch = !mmrSearch">회원검색</button></td>
              </tr>
            </tbody>
            <!-- //2021-08-23 -->
          </table>
        </div>
        <!-- 회원검색 -->
        <div class="choiceStyle mt10" v-if="mmrSearch">
          <div class="chSearch">
            <div class="chListArea">
              <div class="tls">
                <table>
                  <colgroup>
                    <col width="140"/>
                    <col width="140"/>
                    <col width="100"/>
                    <col width="200"/>
                    <col width="80"/>
                    <col width="140"/>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>회원번호</th>
                      <th>이름/아이디</th>
                      <th>회원구분</th>
                      <th>연락처</th>
                      <th>선택</th>
                      <th>상세정보</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>361145</td>
                      <td>김지민<br/>(jimin0123)</td><!-- 2021-08-23 -->
                      <td>일반</td>
                      <td>010-1234-5678</td>
                      <td><button class="btnS">선택</button></td>
                      <td><button class="btnS">회원 상세정보</button></td>
                    </tr>
                    <tr>
                      <td>361145</td>
                      <td>김지민<br/>(jimin0123)</td><!-- 2021-08-23 -->
                      <td>일반</td>
                      <td>010-1234-5678</td>
                      <td><button class="btnS">선택</button></td>
                      <td><button class="btnS">회원 상세정보</button></td>
                    </tr>
                    <tr>
                      <td>361145</td>
                      <td>김지민<br/>(jimin0123)</td><!-- 2021-08-23 -->
                      <td>일반</td>
                      <td>010-1234-5678</td>
                      <td><button class="btnS">선택</button></td>
                      <td><button class="btnS">회원 상세정보</button></td>
                    </tr>
                    <tr>
                      <td>361145</td>
                      <td>김지민<br/>(jimin0123)</td><!-- 2021-08-23 -->
                      <td>일반</td>
                      <td>010-1234-5678</td>
                      <td><button class="btnS">선택</button></td>
                      <td><button class="btnS">회원 상세정보</button></td>
                    </tr>
                    <tr>
                      <td>361145</td>
                      <td>김지민<br/>(jimin0123)</td><!-- 2021-08-23 -->
                      <td>일반</td>
                      <td>010-1234-5678</td>
                      <td><button class="btnS">선택</button></td>
                      <td><button class="btnS">회원 상세정보</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- //회원검색 -->
        <!-- //연락 정보 -->
        <!-- 상담내용 -->
        <h3><strong>상담내용</strong></h3>
        <!-- 2021-08-23 상담내용 수정 -->
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160">
              <col width="500">
              <col width="160">
              <col width="500">
            </colgroup>
            <tbody>
              <tr>
                <th>처리상태 <sup>필수</sup></th>
                <td colspan="3">
                  <span class="radioSet">
                    <input type="radio" name="radio1" id="radio11" checked/>
                    <label for="radio11"><i></i>보류(처리중)</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="radio1" id="radio12" />
                    <label for="radio12"><i></i>처리완료</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>문의분류 <sup>필수</sup></th>
                <td colspan="3">
                  <span class="selectSet mr5">
                    <select name="" id="">
                      <option value="no" class="label">대분류 선택</option>
                      <option value="" selected>강의수강, 사이트이용 관련</option>
                    </select>
                  </span>
                  <span class="selectSet mr5">
                    <select name="" id="">
                      <option value="no" class="label">중분류 선택</option>
                      <option value="" selected>회원정보</option>
                    </select>
                  </span>
                  <span class="selectSet mr5">
                    <select name="" id="">
                      <option value="no" class="label">소분류 선택</option>
                      <option value="" selected>회원가입/탈퇴</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <th>메모</th>
                <td colspan="3">
                  <textarea rows="3">가나다가나다가나다</textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //2021-08-23 상담내용 수정 -->
        <!-- //상담내용 -->
        <!-- 상담내역 -->
        <h3><strong>상담내역</strong></h3>
        <div class="tls w800"><!-- 2021-08-23 class 추가 -->
          <table>
            <colgroup>
              <col width="180"/>
              <col width="140"/>
              <col width="140"/>
              <col width="140"/><!-- 2021-08-23 추가 -->
            </colgroup>
            <thead>
              <tr>
                <th>문의일자/처리일자</th>
                <th>처리상태</th>
                <!-- 2021-08-23 대, 중분류 구분 추가 -->
                <th>대분류</th>
                <th>중분류</th>
                <!-- //2021-08-23 대, 중분류 구분 추가 -->
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2021-07-22 12:05:45<br/><span class="fBlue">2021-07-22 13:14:23</span></td>
                <td>보류(처리중)</td>
                <td><router-link to="">강의수강, 사이트 이용 관련</router-link></td>
                <td><router-link to="">회원정보</router-link></td>
              </tr>
              <tr>
                <td>2021-07-22 12:05:45<br/><span class="fBlue">2021-07-22 13:14:23</span></td>
                <td>처리완료</td>
                <td><router-link to="">임용학습상담</router-link></td>
                <td><router-link to="">교육학</router-link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //상담내역 -->
        <!-- 관리 -->
        <h3><strong>관리</strong></h3>
        <div class="tvs record">
    			<table>
    				<colgroup>
    					<col width="160"/>
    					<col width="1160"/>
    				</colgroup>
    				<tbody>
    					<tr>
    						<th>수정 이력</th>
    						<td>
    							<ul class="recordList">
    								<li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 수정</li>
    								<li><strong>[2021-02-23 15:35  / 홍길동(mjpark111) ]</strong> 등록</li>
    							</ul>
    						</td>
    					</tr>
    				</tbody>
    			</table>
    		</div>
        <!-- //관리 -->
  		</div>
    </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MemberCounselingView',
  data() {
    return {
      mmrSearch: false,
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
