<template lang="html">
  <div>
    <div class="pageTit">
			<h2>시험 공고</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><router-link to="/mkup/bbs/infoExam">시험정보</router-link><router-link to="/mkup/bbs/infoExam">시험 공고</router-link><em>신규등록</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoExamTestWrite">
        <!-- 설정 -->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/infoExam/test" class="btnM green">저장</router-link>
            <router-link to="/mkup/bbs/infoExam" class="btnM ml10">취소</router-link>
          </span>
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
                <th>지역 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                      <option value="">종합</option>
                      <option value="">서울</option>
                      <option value="">경기</option>
                      <option value="">인천</option>
                      <option value="">세종</option>
                      <option value="">부산</option>
                      <option value="">대전</option>
                      <option value="">대구</option>
                      <option value="">울산</option>
                      <option value="">강원</option>
                      <option value="">충북</option>
                      <option value="">충남</option>
                      <option value="">경북</option>
                      <option value="">경남</option>
                      <option value="">전북</option>
                      <option value="">전남</option>
                      <option value="">제주</option>
                      <option value="">광주</option>
                    </select>
                  </span>
                </td>
                <th>상단 고정 <sup>필수</sup></th>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" />
                    <label for=""><i></i>상단에 고정함</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>노출 여부</th>
                <td colspan="3">
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1">
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //설정 -->
        <!-- 공고내용 -->
        <div class="subTit"><h3>공고내용</h3></div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>제목 <sup>필수</sup></th>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <th>내용 <sup>필수</sup></th>
                <td>
                  <textarea class="wFull h10">
                    에디터가 나올 영역입니다
                  </textarea>
                </td>
              </tr>
              <tr>
                <th>파일첨부</th>
                <td>
                  <button class="btnS line">+ 파일추가</button>
                  <!-- <ul class="fileList writeCase">
                    <li><span><a href="#" download>선생님이벤트1.png</a><button class="btnDelete ml5">삭제</button></span></li>
                  </ul> -->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //공고내용 -->
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
  name: 'infoExamTestWrite',
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
