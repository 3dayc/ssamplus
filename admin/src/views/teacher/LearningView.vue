<template lang="html">
  <div>
    <div class="pageTit">
      <h2>학습Q&amp;A</h2>
      <span><router-link to="/mkup/teacher/studentOnline">강좌/수강생</router-link><router-link to="/mkup/teacher/studentOnline">수강생 지원</router-link><router-link to="/mkup/teacher/learning">학습Q&amp;A</router-link><em>상세</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="learningView"><!-- class 없어도 유지 -->
        <!-- 질문 -->
        <div class="subTit">
          <h3>학습Q&amp;A</h3>
          <div class="right">
            <router-link to="/mkup/teacher/learning" class="btnList">목록으로</router-link>
            <button class="btnM green ml10">저장</button>
          </div>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="40%"/>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>작성자</th>
                <td>김*민(Jim****)</td>
                <th>작성일</th>
                <td>2021-05-25</td>
              </tr>
              <tr>
                <th>과목</th>
                <td>교육학</td>
                <th>선생님/강좌</th>
                <td>김현 l 교직논술 및 서술식 답안지 작성 방법</td>
              </tr>
              <tr>
                <th scope="col">제목</th>
                <td colspan="3">정답을 적을 답지는 없나요?</td>
              </tr>
              <tr>
                <th scope="col">첨부파일</th>
                <td colspan="3">
                  <ul class="fileList">
                    <li><span><a href="#" download>신간교재 목차 정리.PDF</a></span></li>
                    <li><span><a href="#" download>부록_마음을 열어주는 가비국어.PDF</a></span></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th scope="col">내용</th>
                <td colspan="3" class="h94 vTop">
                  김현 선생님의 교직논술 및 서술식 답안지 작성 방법 강좌를 듣고 있는 수강생입니다. 정답을 적을 답안지는 따로 첨부파일이 없는게 맞나요?
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //질문 -->
        <!-- 답변 -->
        <div class="subTit">
          <h3>답변</h3>
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
              <tr>
                <th>답변자</th>
                <td>홍길동 ┃ hong123</td>
                <th>답변일</th>
                <td>2021-05-25</td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td colspan="3"><textarea rows="4">에디터가 나올 영역입니다.</textarea></td>
              </tr>
              <tr>
                <th>파일첨부</th>
                <td colspan="3">
                  <button class="btnS line mb10">파일추가</button>
                  <ul class="fileList">
                    <li><span><a href="#" download>신간교재 목차 정리.PDF</a></span></li>
                    <li><span><a href="#" download>부록_마음을 열어주는 가비국어.PDF</a></span></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //답변 -->
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
  name: 'LearningView',
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
