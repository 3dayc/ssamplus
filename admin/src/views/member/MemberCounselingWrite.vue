<template lang="html">
    <div id="windowLayout">
      <div class="winHeader">
        <h1>전화상담</h1>
        <span class="supTxt">* 고객지원팀 전화문의 시 입력하는 화면입니다</span>
        <div class="btnArea">
          <router-link to="/mkup/windowPopup/mmrCounseling/view" class="btnM green">저장</router-link>
          <router-link to="/mkup/windowPopup/mmrCounseling" class="btnList">목록으로</router-link>
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
        <!-- 2021-08-23 내용 수정 -->
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
                    </select>
                  </span>
                  <span class="selectSet mr5">
                    <select name="" id="">
                      <option value="no" class="label">중분류 선택</option>
                    </select>
                  </span>
                  <span class="selectSet mr5">
                    <select name="" id="">
                      <option value="no" class="label">소분류 선택</option>
                    </select>
                  </span>
                  <span class="ml20">
                    <span class="radioSet">
                      <input type="radio" name="radio2" id="radio21" checked/>
                      <label for="radio21"><i></i>초시생</label>
                    </span>
                    <span class="radioSet">
                      <input type="radio" name="radio2" id="radio22" />
                      <label for="radio22"><i></i>N수생</label>
                    </span>
                    <span class="radioSet">
                      <input type="radio" name="radio2" id="radio23" />
                      <label for="radio23"><i></i>재학생</label>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <th>메모</th>
                <td colspan="3">
                  <textarea rows="3"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //2021-08-23 내용 수정 -->
        <!-- //상담내용 -->
  		</div>
    </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MemberCounselingWrite',
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
