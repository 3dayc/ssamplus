<template lang="html">
  <div>
    <div class="pageTit">
      <h2>마이페이지</h2>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="mypage"><!-- class 없어도 유지 -->
        <!-- 내 정보 -->
        <div class="subTit"><h3>내 정보</h3></div>
        <div class="tvs">
          <table>
            <caption>내 정보</caption>
            <colgroup>
              <col width="160">
              <col width="40%">
              <col width="160">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">강사명</th>
                <td colspan="3">송헌</td>
              </tr>
              <tr>
                <th scope="row">강사용 아이디</th>
                <td>aabbcc1234</td>
                <th scope="row">비밀번호</th>
                <td><button class="btnS line" @click="TeacherPassword()">비밀번호 재설정</button></td>
              </tr>
              <tr>
                <th scope="row">휴대전화</th>
                <td>010-1234-1234</td>
                <th scope="row">이메일</th>
                <td>aabbcc1234@naver.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //내 정보 -->
        <!-- 강사료 내역 조회 -->
        <div class="contentsBox">
          <div class="subTit"><h3>강사료 내역 조회</h3></div>
          <!-- 테이블 유틸 -->
          <div class="boardTop">
            <div class="left-po">
              <span class="selectSet">
                <select>
                  <option>연도</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                </select>
              </span>
            </div>
          </div>
          <!-- //테이블 유틸 -->

          <!-- 테이블 목록 -->
          <div class="tls wHalf">
            <table>
              <caption>강사료 내역 조회</caption>
              <colgroup>
                <col width="200">
                <col width="200">
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">제목</th>
                  <th scope="col">파일</th>
                </tr>
              </thead>
              <tbody>
                <!-- Loop -->
                <tr>
                  <td>3월 강사료 내역서</td>
                  <td><a download>송헌_3월 강사료 지급내역서.pdf</a></td>
                </tr>
                <!-- //Loop -->
                <tr>
                  <td><a>2월 강사료 내역서</a></td>
                  <td><a download>송헌_2월 강사료 지급내역서.pdf</a></td>
                </tr>
                <tr>
                  <td><a>1월 강사료 내역서</a></td>
                  <td><a download>송헌_1월 강사료 지급내역서.pdf</a></td>
                </tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="2" class="noneData">등록된 데이터가 없습니다.</td></tr>
                <!-- //데이터 없을 경우 -->
              </tbody>
            </table>
          </div>
          <!-- //테이블 목록 -->
        </div>
        <!-- //강사료 내역 조회 -->

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
  name: 'Mypage',
  data() {
    return {
    }
  },
  methods: {
    TeacherPassword() {
      let routeData = this.$router.resolve({name: 'TeacherPassword', query: {data: "someData"}});
      window.open('/mkup/windowPopup/teacherPw', '_blank', `width=570,height=750`);
    },
  },
  components: {
  }
}
</script>
